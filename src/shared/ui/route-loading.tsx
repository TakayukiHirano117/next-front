export function RouteLoading({ label }: { label: string }) {
  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-zinc-950">{label}</h2>
      <p className="mt-2 text-sm text-zinc-600">読み込み中...</p>
    </section>
  );
}
