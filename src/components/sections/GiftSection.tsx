import { Gift } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import type { GiftContent } from "@/content/invitation";

type GiftSectionProps = {
  content: GiftContent;
};

export function GiftSection({ content }: GiftSectionProps) {
  return (
    <Section
      labelledBy="gift-section-title"
      className="rounded-[2rem] bg-[#fbfaf7] p-6 text-center shadow-[0_18px_50px_rgba(0,0,0,0.05)] sm:p-8"
    >
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#D4AF37]/12 text-[#D4AF37]">
        <Gift size={24} />
      </div>
      <div id="gift-section-title">
        <SectionHeading title={content.title} align="center" />
      </div>
      <p className="mx-auto max-w-md text-sm leading-7 text-black/72">{content.description}</p>
      <div className="space-y-4">
        <Button disabled variant="secondary" className="w-full sm:w-auto" aria-describedby="gift-note">
          {content.statusLabel}
        </Button>
        <p id="gift-note" className="text-xs uppercase tracking-[0.2em] text-black/46 sm:tracking-[0.25em]">
          {content.note}
        </p>
      </div>
    </Section>
  );
}
