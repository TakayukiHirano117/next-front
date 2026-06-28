import "server-only";

import { ApiConfigError } from "./errors";

const API_BASE_URL_ENV = "ONION_API_BASE_URL";

export function getApiBaseUrl() {
  const apiBaseUrl = process.env[API_BASE_URL_ENV];

  if (!apiBaseUrl) {
    throw new ApiConfigError(`${API_BASE_URL_ENV} is not configured.`);
  }

  return apiBaseUrl.replace(/\/$/, "");
}
