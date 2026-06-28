import { MembersScreen } from "@/shared/ui/members-screen";
import { BottomNav } from "./_containers/bottom-nav";
import { MembersHeaderContainer } from "./_containers/members-header";
import { MemberListContainer } from "./_containers/member-list";

export const dynamic = "force-dynamic";

export default function MembersPage() {
  return (
    <MembersScreen
      header={<MembersHeaderContainer />}
      footer={<BottomNav />}
    >
      <MemberListContainer />
    </MembersScreen>
  );
}
