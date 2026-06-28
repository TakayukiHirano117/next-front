"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { deleteSessionCookie } from "@/shared/api/cookies";
import { apiFetch } from "@/shared/api/client";
import { okResponseSchema } from "@/shared/api/schemas";
import { ApiClientError, ApiConfigError } from "@/shared/api/errors";

export async function logoutAction() {
  try {
    await apiFetch("/auth/members/logout", okResponseSchema, {
      method: "POST",
    });
  } catch (error) {
    if (!(error instanceof ApiClientError) && !(error instanceof ApiConfigError)) {
      throw error;
    }
  }

  await deleteSessionCookie();
  revalidatePath("/members");
  redirect("/login");
}
