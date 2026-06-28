import { PageShell } from "@/shared/ui/page-shell";
import { RegisterFormContainer } from "./_containers/register-form";

export default function RegisterPage() {
  return (
    <PageShell
      title="会員登録"
      description="新しい会員アカウントを作成します。"
    >
      <RegisterFormContainer />
    </PageShell>
  );
}
