"use client";

import { useEffect } from "react";

type ErrorFallbackProps = {
  error: Error & { digest?: string };
  reset: () => void;
  title?: string;
};

export function ErrorFallback({
  error,
  reset,
  title = "問題が発生しました",
}: ErrorFallbackProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto max-w-2xl rounded-3xl border border-red-200 bg-white p-8 shadow-sm">
      <h2 className="text-lg font-semibold text-zinc-950">{title}</h2>
      <p className="mt-2 text-sm text-zinc-600">
        時間をおいて再度お試しください。
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-6 rounded-2xl bg-zinc-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
      >
        再試行
      </button>
    </section>
  );
}
