import "server-only";

import type { z } from "zod";
import { getRequestCookieHeader } from "./cookies";
import { getApiBaseUrl } from "./config";
import { ApiClientError } from "./errors";
import { apiErrorResponseSchema } from "./schemas";

type ApiFetchOptions = Omit<RequestInit, "body" | "headers"> & {
  body?: unknown;
  headers?: HeadersInit;
  forwardCookies?: boolean;
};

export async function apiFetch<TSchema extends z.ZodType>(
  path: `/${string}`,
  responseSchema: TSchema,
  options: ApiFetchOptions = {},
): Promise<z.infer<TSchema>> {
  const response = await rawApiFetch(path, options);
  const json = await readJson(response);

  if (!response.ok) {
    throw toApiClientError(response.status, json);
  }

  return responseSchema.parse(json);
}

export async function rawApiFetch(
  path: `/${string}`,
  options: ApiFetchOptions = {},
) {
  const headers = new Headers(options.headers);
  headers.set("Accept", "application/json");

  if (options.body !== undefined) {
    headers.set("Content-Type", "application/json");
  }

  if (options.forwardCookies ?? true) {
    const cookieHeader = await getRequestCookieHeader();
    if (cookieHeader) {
      headers.set("Cookie", cookieHeader);
    }
  }

  return fetch(`${getApiBaseUrl()}${path}`, {
    ...options,
    headers,
    body: options.body === undefined ? undefined : JSON.stringify(options.body),
    cache: "no-store",
  });
}

async function readJson(response: Response) {
  const text = await response.text();

  if (!text) {
    return null;
  }

  return JSON.parse(text) as unknown;
}

function toApiClientError(status: number, json: unknown) {
  const parsedError = apiErrorResponseSchema.safeParse(json);

  if (!parsedError.success) {
    return new ApiClientError("API request failed.", status);
  }

  return new ApiClientError(
    parsedError.data.message,
    status,
    parsedError.data.error,
    parsedError.data.details,
  );
}
