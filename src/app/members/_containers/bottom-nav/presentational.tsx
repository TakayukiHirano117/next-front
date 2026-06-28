type NavItem = {
  label: string;
  active?: boolean;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  {
    label: "探す",
    active: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="m14.5 9.5-1.2 3.6-3.6 1.2 1.2-3.6 3.6-1.2Z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path
          d="M12 3v2M12 19v2M3 12h2M19 12h2"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "いいね",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path
          d="M12 21s-6.5-4.35-9-8.5C1.2 9.6 3.4 5 8 5c2.2 0 3.6 1.2 4 1.8.4-.6 1.8-1.8 4-1.8 4.6 0 6.8 4.6 5 7.5-2.5 4.15-9 8.5-9 8.5Z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "チャット",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path
          d="M21 11.5a8.38 8.38 0 0 1-1.9 5.4 8.5 8.5 0 0 1-6.6 3.1 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 3.1-6.6 8.38 8.38 0 0 1 5.4-1.9h.5a8.48 8.48 0 0 1 8 8v.5Z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "マイページ",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export function BottomNavPresentation() {
  return (
    <nav
      aria-label="メインメニュー"
      className="fixed inset-x-0 bottom-5 z-50 flex justify-center px-5"
    >
      <div className="relative w-full max-w-sm overflow-hidden rounded-full shadow-[0_8px_32px_rgba(74,58,56,0.18)] ring-1 ring-white/80">
        <div
          aria-hidden
          className="absolute inset-0 bg-white/92 backdrop-blur-xl backdrop-brightness-110 backdrop-saturate-150"
        />
        <div className="relative flex items-center justify-around px-2 py-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              aria-current={item.active ? "page" : undefined}
              aria-label={item.label}
              className={`flex flex-col items-center gap-0.5 rounded-full px-3 py-1.5 transition ${
                item.active
                  ? "text-[#c4684f] drop-shadow-sm"
                  : "text-app-text drop-shadow-sm hover:text-[#3a2e2c]"
              }`}
            >
              {item.icon}
              <span className="text-[10px] font-semibold tracking-wide">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
