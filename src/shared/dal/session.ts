import "server-only";

import { redirect } from "next/navigation";
import { getMemberId } from "@/shared/api/cookies";

export async function getCurrentMemberId() {
  const memberId = await getMemberId();

  if (!memberId) {
    redirect("/login");
  }

  return memberId;
}
