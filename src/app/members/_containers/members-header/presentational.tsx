import { LogoutButton } from "./logout-button";

export function MembersHeaderPresentation() {
  return (
    <header className="flex items-center justify-between px-4 pb-3 pt-6">
      <div>
        <p className="text-xs font-medium tracking-[0.2em] text-app-text-muted uppercase">
          Macching
        </p>
        <h1 className="mt-1 text-xl font-bold tracking-tight text-app-text">
          今日のおすすめ
        </h1>
      </div>
      <LogoutButton />
    </header>
  );
}
