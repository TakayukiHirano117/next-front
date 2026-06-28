import { logoutAction } from "./actions";

export function LogoutButton() {
  return (
    <form action={logoutAction}>
      <button
        type="submit"
        className="rounded-full border border-app-border/80 bg-white/60 px-3.5 py-2 text-xs font-semibold text-app-text-muted shadow-sm backdrop-blur-sm transition hover:border-app-primary/50 hover:text-app-text"
      >
        ログアウト
      </button>
    </form>
  );
}
