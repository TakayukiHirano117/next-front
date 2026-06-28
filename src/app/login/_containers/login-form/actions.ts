"use server";

import { parseWithZod } from "@conform-to/zod";
import type { SubmissionResult } from "@conform-to/react";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { applySetCookieHeader, setMemberIdCookie } from "@/shared/api/cookies";
import { rawApiFetch } from "@/shared/api/client";
import { apiErrorResponseSchema } from "@/shared/api/schemas";
import { loginResponseSchema } from "@/shared/dal/schemas";
import { loginInputSchema } from "./schemas";

export async function loginAction(
  _prevState: SubmissionResult | null,
  formData: FormData,
): Promise<SubmissionResult | null> {
  const submission = parseWithZod(formData, { schema: loginInputSchema });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const response = await rawApiFetch("/auth/members/login", {
    method: "POST",
    body: submission.value,
    forwardCookies: false,
  });
  const json = await response.json();

  if (!response.ok) {
    const parsedError = apiErrorResponseSchema.safeParse(json);

    return submission.reply({
      formErrors: [
        parsedError.success
          ? parsedError.data.message
          : "ログインできませんでした。",
      ],
    });
  }

  const loginResponse = loginResponseSchema.parse(json);
  await applySetCookieHeader(response.headers.get("set-cookie"));
  await setMemberIdCookie(loginResponse.member.id);
  revalidatePath("/members");
  redirect("/members");
}
