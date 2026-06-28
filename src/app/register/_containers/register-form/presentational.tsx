import Link from "next/link";
import { RegisterForm } from "./form";

export function RegisterFormPresentation() {
  return (
    <div className="flex flex-col gap-4">
      <RegisterForm />
      <p className="text-center text-sm text-zinc-600">
        すでにアカウントをお持ちの方は{" "}
        <Link href="/login" className="font-medium text-zinc-950 underline">
          ログイン
        </Link>
      </p>
    </div>
  );
}
