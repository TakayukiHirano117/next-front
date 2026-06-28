import "server-only";

import { apiFetch } from "@/shared/api/client";
import { membersSchema } from "./schemas";

export async function findMembers() {
  return apiFetch("/members", membersSchema);
}
