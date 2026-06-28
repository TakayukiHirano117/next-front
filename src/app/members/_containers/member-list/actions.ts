"use server";

import { revalidatePath } from "next/cache";
import { ApiClientError, ApiConfigError } from "@/shared/api/errors";
import { getCurrentMemberId } from "@/shared/dal/session";
import { sendLike } from "@/shared/dal/likes";

export async function sendLikeAction(formData: FormData) {
  const toMemberId = formData.get("toMemberId");

  if (typeof toMemberId !== "string" || toMemberId.length === 0) {
    return;
  }

  const fromMemberId = await getCurrentMemberId();

  try {
    await sendLike({ fromMemberId, toMemberId });
    revalidatePath("/members");
  } catch (error) {
    if (error instanceof ApiClientError || error instanceof ApiConfigError) {
      throw new Error(error.message);
    }

    throw error;
  }
}
