import Image from "next/image";
import { getMemberAvatarUrl } from "@/shared/lib/member-avatar";
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
    <section className="px-4 pb-4">
      <div className="grid grid-cols-2 gap-3">
        {members.map((member) => {
          const isSelf = member.id === currentMemberId;

          return (
            <article
              key={member.id}
              className="group relative overflow-hidden rounded-2xl bg-app-surface shadow-[0_4px_20px_rgba(74,58,56,0.08)] ring-1 ring-app-border/60"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={getMemberAvatarUrl(member.id)}
                  alt={`${member.name}のプロフィール写真`}
                  fill
                  sizes="(max-width: 512px) 50vw, 240px"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-3">
                  <p className="truncate text-sm font-semibold text-white">
                    {member.name}
                    {isSelf ? (
                      <span className="ml-1 text-[10px] font-medium text-white/70">
                        (あなた)
                      </span>
                    ) : null}
                  </p>
                  <p className="mt-0.5 truncate text-[11px] text-white/75">
                    {member.email}
                  </p>
                </div>

                <div className="absolute right-2 top-2">
                  <LikeButton toMemberId={member.id} disabled={isSelf} />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
