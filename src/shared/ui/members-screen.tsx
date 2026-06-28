type MembersScreenProps = {
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export function MembersScreen({ header, children, footer }: MembersScreenProps) {
  return (
    <main className="auth-screen-bg relative min-h-dvh overflow-x-hidden pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-app-accent/45 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -left-16 h-64 w-64 rounded-full bg-app-primary/35 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-lg">
        {header}
        {children}
      </div>

      {footer}
    </main>
  );
}
