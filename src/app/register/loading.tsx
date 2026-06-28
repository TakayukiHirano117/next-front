import { PageShell } from "@/shared/ui/page-shell";
import { RouteLoading } from "@/shared/ui/route-loading";

export default function RegisterLoading() {
  return (
    <PageShell title="会員登録">
      <RouteLoading label="会員登録画面" />
    </PageShell>
  );
}
