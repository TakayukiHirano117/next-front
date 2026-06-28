"use server";

import { parseWithZod } from "@conform-to/zod";
import type { SubmissionResult } from "@conform-to/react";
import { redirect } from "next/navigation";
import { apiFetch } from "@/shared/api/client";
import { okResponseSchema } from "@/shared/api/schemas";
import { ApiClientError, ApiConfigError } from "@/shared/api/errors";
import { createMemberInputSchema } from "./schemas";

export async function registerAction(
  _prevState: SubmissionResult | null,
  formData: FormData,
): Promise<SubmissionResult | null> {
  const submission = parseWithZod(formData, { schema: createMemberInputSchema });

  if (submission.status !== "success") {
    return submission.reply();
  }

  try {
    await apiFetch("/members", okResponseSchema, {
      method: "POST",
      body: submission.value,
      forwardCookies: false,
    });
    redirect("/login");
  } catch (error) {
    if (error instanceof ApiClientError || error instanceof ApiConfigError) {
      return submission.reply({
        formErrors: [error.message],
      });
    }

    return submission.reply({
      formErrors: ["予期せぬエラーが発生しました。"],
    });
  }
}
