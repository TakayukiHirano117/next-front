import { AuthScreen } from "@/shared/ui/auth-screen";

export default function LoginLoading() {
  return (
    <AuthScreen title="おかえりなさい" description="読み込み中...">
      <div className="space-y-4 rounded-3xl border border-app-border bg-app-surface/90 p-6">
        <div className="h-5 w-24 animate-pulse rounded-lg bg-app-accent/40" />
        <div className="h-4 w-full animate-pulse rounded-lg bg-app-border" />
        <div className="h-12 animate-pulse rounded-2xl bg-app-border" />
        <div className="h-12 animate-pulse rounded-2xl bg-app-border" />
        <div className="h-12 animate-pulse rounded-2xl bg-app-primary/30" />
      </div>
    </AuthScreen>
  );
}
