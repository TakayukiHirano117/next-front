import "server-only";

import { apiFetch } from "@/shared/api/client";
import { okResponseSchema } from "@/shared/api/schemas";

type SendLikeInput = {
  fromMemberId: string;
  toMemberId: string;
};

export async function sendLike(input: SendLikeInput) {
  return apiFetch("/likes", okResponseSchema, {
    method: "POST",
    body: input,
  });
}
