"use client";

import { ErrorFallback } from "@/shared/ui/error-fallback";

export default function LoginError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="auth-screen-bg min-h-dvh px-4 py-10">
      <div className="mx-auto max-w-md">
        <ErrorFallback
          error={error}
          reset={reset}
          title="ログイン画面でエラーが発生しました"
        />
      </div>
    </main>
  );
}
