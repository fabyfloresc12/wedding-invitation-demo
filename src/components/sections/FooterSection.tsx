type FooterSectionProps = {
  monogram: string;
};

export function FooterSection({ monogram }: FooterSectionProps) {
  return (
    <footer className="border-t border-black/5 bg-[#faf7f1] px-5 py-16 text-center sm:px-6 sm:py-20">
      <p className="text-[11px] font-bold uppercase tracking-[0.6em] text-black/30">{monogram} · 2026</p>
    </footer>
  );
}
