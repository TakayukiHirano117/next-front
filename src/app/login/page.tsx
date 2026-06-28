import { AuthScreen } from "@/shared/ui/auth-screen";
import { LoginFormContainer } from "./_containers/login-form";

export default function LoginPage() {
  return (
    <AuthScreen
      title="おかえりなさい"
      description="あなたにぴったりの出会いを見つけましょう"
    >
      <LoginFormContainer />
    </AuthScreen>
  );
}
