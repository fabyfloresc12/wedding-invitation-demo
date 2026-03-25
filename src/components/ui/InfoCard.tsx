import type { ReactNode } from "react";

type InfoCardProps = {
  icon: ReactNode;
  label: string;
  value: string;
};

export function InfoCard({ icon, label, value }: InfoCardProps) {
  return (
    <article className="rounded-[2rem] border border-black/8 bg-white px-5 py-7 text-center shadow-[0_18px_50px_rgba(0,0,0,0.06)] sm:px-6 sm:py-8">
      <div
        aria-hidden="true"
        className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#D4AF37]/12 text-[#9d7917]"
      >
        {icon}
      </div>
      <h3 className="text-[10px] font-bold uppercase tracking-[0.28em] text-black/52 sm:tracking-[0.34em]">{label}</h3>
      <p className="mt-3 text-lg font-medium leading-7 text-black sm:text-xl">{value}</p>
    </article>
  );
}
