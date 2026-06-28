"use client";

import { ErrorFallback } from "@/shared/ui/error-fallback";

export default function RegisterError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-10">
      <ErrorFallback error={error} reset={reset} title="会員登録画面でエラーが発生しました" />
    </main>
  );
}
