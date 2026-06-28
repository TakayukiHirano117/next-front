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
        className="rounded-2xl border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:border-zinc-950 hover:text-zinc-950 disabled:cursor-not-allowed disabled:text-zinc-400"
      >
        いいね
      </button>
    </form>
  );
}
