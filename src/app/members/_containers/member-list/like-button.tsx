import { sendLikeAction } from "./actions";

type LikeButtonProps = {
  toMemberId: string;
  disabled?: boolean;
};

export function LikeButton({ toMemberId, disabled = false }: LikeButtonProps) {
  return (
    <form action={sendLikeAction}>
      <input type="hidden" name="toMemberId" value={toMemberId} />
      <button
        type="submit"
        disabled={disabled}
        aria-label="いいねを送る"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-white/30 text-white shadow-sm backdrop-blur-md transition hover:scale-105 hover:bg-white/45 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
          <path
            d="M12 21s-6.5-4.35-9-8.5C1.2 9.6 3.4 5 8 5c2.2 0 3.6 1.2 4 1.8.4-.6 1.8-1.8 4-1.8 4.6 0 6.8 4.6 5 7.5-2.5 4.15-9 8.5-9 8.5Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </form>
  );
}
