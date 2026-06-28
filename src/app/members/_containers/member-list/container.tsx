import { findMembers } from "@/shared/dal/members";
import { getCurrentMemberId } from "@/shared/dal/session";
import { MemberListPresentation } from "./presentational";

export async function MemberListContainer() {
  const [members, currentMemberId] = await Promise.all([
    findMembers(),
    getCurrentMemberId(),
  ]);

  return (
    <MemberListPresentation
      members={members}
      currentMemberId={currentMemberId}
    />
  );
}
