import { PageShell } from "@/shared/ui/page-shell";
import { RouteLoading } from "@/shared/ui/route-loading";

export default function MembersLoading() {
  return (
    <PageShell title="会員一覧">
      <RouteLoading label="会員一覧" />
    </PageShell>
  );
}
