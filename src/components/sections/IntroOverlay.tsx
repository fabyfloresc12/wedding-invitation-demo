import Image from "next/image";
import type { IntroContent } from "@/content/invitation";

type IntroOverlayProps = {
  content: IntroContent;
  fading: boolean;
  onOpen: () => void;
};

export function IntroOverlay({ content, fading, onOpen }: IntroOverlayProps) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="intro-title"
      aria-describedby="intro-note"
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,#fcf8ef_0%,#f7f0e4_24%,#efe6d9_58%,#e7ddcf_100%)] px-4 transition-opacity duration-700 motion-reduce:transition-none ${fading ? "opacity-0" : "opacity-100"}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,255,255,0.04)_36%,rgba(0,0,0,0.08)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[18%] h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-white/18 blur-3xl sm:h-[34rem] sm:w-[34rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/18 opacity-40"
      />

      <button
        type="button"
        onClick={onOpen}
        aria-describedby="intro-note"
        className="group relative flex w-full max-w-[30rem] flex-col items-center justify-center bg-transparent text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6d12] focus-visible:ring-offset-4 focus-visible:ring-offset-[#efe6d9]"
      >
        <h2 id="intro-title" className="sr-only">
          {content.prompt}
        </h2>

        <div className="relative mx-auto aspect-[1.16/1] w-full max-w-[20rem] transition-transform duration-500 motion-reduce:transition-none group-hover:scale-[1.018] group-active:scale-[1.01] sm:max-w-[27rem]">
          <div className="absolute inset-x-[9%] bottom-[6%] h-[11%] rounded-full bg-black/20 blur-2xl sm:blur-3xl" />
          <div className="absolute left-1/2 top-[40%] h-[22%] w-[22%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4af37]/10 opacity-0 blur-xl transition duration-500 motion-reduce:transition-none group-hover:opacity-100" />
          <Image
            src={content.image.src}
            alt={content.image.alt}
            fill
            preload
            quality={88}
            sizes="(max-width: 640px) 88vw, 432px"
            className="object-contain drop-shadow-[0_14px_34px_rgba(60,42,14,0.12)]"
          />
        </div>

        <p
          id="intro-note"
          className="mt-9 text-[10px] font-semibold uppercase tracking-[0.38em] text-black/50 sm:text-[11px] sm:tracking-[0.48em]"
        >
          {content.note}
        </p>
      </button>
    </div>
  );
}
