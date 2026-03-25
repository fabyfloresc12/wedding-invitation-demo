"use client";

import { Music, Pause } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

import { IntroOverlay } from "@/components/sections/IntroOverlay";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import type { IntroContent, Locale } from "@/content/invitation";

type InvitationChromeProps = {
  children: ReactNode;
  currentLocale: Locale;
  languageToggle: {
    label: string;
    spanish: string;
    english: string;
  };
  intro: IntroContent;
  musicLabels: {
    play: string;
    pause: string;
  };
  audioSrc: string;
};

export function InvitationChrome({
  children,
  currentLocale,
  languageToggle,
  intro,
  musicLabels,
  audioSrc,
}: InvitationChromeProps) {
  const [showIntro, setShowIntro] = useState(true);
  const [fadeIntro, setFadeIntro] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = showIntro ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [showIntro]);

  useEffect(() => {
    if (!audioEnabled || !audioRef.current) {
      return;
    }

    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {
        setIsPlaying(false);
      });
  }, [audioEnabled]);

  const openInvitation = () => {
    setFadeIntro(true);
    setAudioEnabled(true);

    window.setTimeout(() => {
      setShowIntro(false);
    }, 700);
  };

  const toggleMusic = async () => {
    if (!audioEnabled) {
      setAudioEnabled(true);
      return;
    }

    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-white font-body">
      <LanguageToggle currentLocale={currentLocale} labels={languageToggle} />

      {showIntro ? <IntroOverlay content={intro} fading={fadeIntro} onOpen={openInvitation} /> : null}

      {audioEnabled ? <audio ref={audioRef} src={audioSrc} loop preload="none" /> : null}

      {!showIntro ? (
        <button
          type="button"
          onClick={toggleMusic}
          aria-label={isPlaying ? musicLabels.pause : musicLabels.play}
          aria-pressed={isPlaying}
          className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/35 bg-black text-[#D4AF37] shadow-2xl transition-transform duration-300 motion-reduce:transition-none hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6d12] focus-visible:ring-offset-2 active:scale-95 sm:bottom-8 sm:right-8 sm:h-14 sm:w-14"
        >
          {isPlaying ? <Pause size={24} /> : <Music size={24} />}
        </button>
      ) : null}

      {children}
    </div>
  );
}
