import Image from "next/image";
import { ChevronRight } from "lucide-react";

import { ButtonLink } from "@/components/ui/Button";
import type { HeroContent } from "@/content/invitation";

type HeroSectionProps = {
  content: HeroContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <header className="relative flex min-h-[88svh] items-center justify-center overflow-hidden bg-black text-center sm:min-h-[92vh]">
      <Image
        src={content.image.src}
        alt={content.image.alt}
        fill
        preload
        quality={82}
        sizes="100vw"
        className="object-cover opacity-70 scale-105"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.28),rgba(0,0,0,0.65))]" />
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-5 px-5 py-18 sm:gap-8 sm:px-6 sm:py-24">
        <p
          className="text-[10px] font-semibold uppercase tracking-[0.34em] text-white/92 sm:text-[11px] sm:tracking-[0.5em]"
          style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.8)" }}
        >
          {content.eyebrow}
        </p>
        <h1
          className="max-w-[12ch] text-[2.9rem] font-light italic leading-[0.98] text-white sm:max-w-4xl sm:text-7xl md:text-8xl"
          style={{ textShadow: "0px 2px 10px rgba(0,0,0,0.5)" }}
        >
          <span className="block sm:inline">{content.title.partnerOne}</span>{" "}
          <span className="font-sans not-italic text-[#D4AF37]" aria-hidden="true">
            &
          </span>{" "}
          <span className="block sm:inline">{content.title.partnerTwo}</span>
        </h1>
        <p
          className="max-w-[34rem] text-[0.98rem] font-medium leading-7 text-white/95 sm:text-lg sm:leading-8"
          style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.8)" }}
        >
          {content.description}
        </p>
        <ButtonLink
          href={content.primaryCta.href}
          className="mt-3 w-full max-w-xs border-[#d4af37] bg-[#d4af37] text-black shadow-[0_18px_44px_rgba(32,24,10,0.26)] hover:border-[#e3c56a] hover:bg-[#dec15f] hover:text-black sm:mt-2 sm:w-auto sm:max-w-none"
        >
          {content.primaryCta.label}
          <ChevronRight size={16} />
        </ButtonLink>
      </div>
    </header>
  );
}
