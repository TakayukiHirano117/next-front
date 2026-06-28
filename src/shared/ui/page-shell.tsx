import Link from "next/link";

type PageShellProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
};

export function PageShell({
  title,
  description,
  children,
  action,
}: PageShellProps) {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-10 text-zinc-950">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        <header className="flex flex-col gap-4 rounded-3xl bg-zinc-950 p-8 text-white shadow-sm sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link href="/" className="text-sm font-medium text-zinc-300">
              Macching App
            </Link>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight">{title}</h1>
            {description ? (
              <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-300">
                {description}
              </p>
            ) : null}
          </div>
          {action}
        </header>
        {children}
      </div>
    </main>
  );
}
