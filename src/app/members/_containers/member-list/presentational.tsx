import type { Member } from "@/shared/dal/schemas";
import { LikeButton } from "./like-button";

type MemberListPresentationProps = {
  members: Member[];
  currentMemberId: string;
};

export function MemberListPresentation({
  members,
  currentMemberId,
}: MemberListPresentationProps) {
  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-zinc-950">会員一覧</h2>
      <div className="mt-4 grid gap-3">
        {members.map((member) => (
          <article
            key={member.id}
            className="flex items-center justify-between gap-4 rounded-2xl bg-zinc-50 p-4"
          >
            <div>
              <p className="font-semibold text-zinc-950">{member.name}</p>
              <p className="mt-1 text-sm text-zinc-600">{member.email}</p>
            </div>
            <LikeButton
              toMemberId={member.id}
              disabled={member.id === currentMemberId}
            />
          </article>
        ))}
      </div>
    </section>
  );
}
