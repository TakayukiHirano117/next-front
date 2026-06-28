type AuthScreenProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function AuthScreen({ title, description, children }: AuthScreenProps) {
  return (
    <main className="auth-screen-bg relative min-h-dvh overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 right-0 h-48 w-48 rounded-full bg-app-accent/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-24 -left-12 h-56 w-56 rounded-full bg-app-primary/40 blur-3xl"
      />

      <div className="relative mx-auto flex min-h-dvh w-full max-w-md flex-col px-4 py-8">
        <header className="mb-8 pt-4 text-center">
          <p className="text-sm font-medium tracking-wide text-app-text-muted">
            Macching App
          </p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-app-text">
            {title}
          </h1>
          {description ? (
            <p className="mt-3 text-sm leading-relaxed text-app-text-muted">
              {description}
            </p>
          ) : null}
        </header>

        <div className="flex flex-1 flex-col justify-center">{children}</div>
      </div>
    </main>
  );
}
