import Link from "next/link";
import { LoginForm } from "./form";

export function LoginFormPresentation() {
  return (
    <div className="flex flex-col gap-6">
      <LoginForm />
      <p className="text-center text-sm text-app-text-muted">
        アカウントをお持ちでない方は{" "}
        <Link
          href="/register"
          className="font-semibold text-app-primary underline decoration-app-accent decoration-2 underline-offset-2"
        >
          会員登録
        </Link>
      </p>
    </div>
  );
}
