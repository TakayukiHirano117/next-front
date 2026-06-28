import { MembersScreen } from "@/shared/ui/members-screen";
import { BottomNav } from "./_containers/bottom-nav";

function MemberCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white/55 shadow-[0_4px_16px_rgba(74,58,56,0.06)] ring-1 ring-white/70">
      <div className="aspect-[3/4] w-full animate-pulse bg-white/70" />
    </div>
  );
}

export default function MembersLoading() {
  return (
    <MembersScreen footer={<BottomNav />}>
      <section className="grid grid-cols-2 gap-3 px-4 pb-4 pt-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <MemberCardSkeleton key={index} />
        ))}
      </section>
    </MembersScreen>
  );
}
