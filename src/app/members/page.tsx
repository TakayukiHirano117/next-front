import { PageShell } from "@/shared/ui/page-shell";
import { MembersHeaderContainer } from "./_containers/members-header";
import { MemberListContainer } from "./_containers/member-list";

export const dynamic = "force-dynamic";

export default function MembersPage() {
  return (
    <PageShell
      title="会員一覧"
      description="ログイン中の会員が閲覧できる会員一覧です。"
      action={<MembersHeaderContainer />}
    >
      <MemberListContainer />
    </PageShell>
  );
}
