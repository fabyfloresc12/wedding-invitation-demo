"use client";

import Link from "next/link";

import type { Locale } from "@/content/invitation";

type LanguageToggleProps = {
  currentLocale: Locale;
  labels: {
    label: string;
    spanish: string;
    english: string;
  };
};

function itemClassName(isActive: boolean) {
  return [
    "rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] transition",
    isActive ? "bg-black text-white shadow-[0_8px_20px_rgba(0,0,0,0.16)]" : "text-black/55 hover:text-black",
  ].join(" ");
}

export function LanguageToggle({ currentLocale, labels }: LanguageToggleProps) {
  return (
    <nav
      aria-label={labels.label}
      className="fixed left-1/2 top-4 z-[110] -translate-x-1/2 sm:left-auto sm:right-6 sm:top-6 sm:translate-x-0"
    >
      <div className="flex items-center gap-1 rounded-full border border-black/10 bg-white/82 p-1.5 shadow-[0_12px_32px_rgba(0,0,0,0.08)] backdrop-blur">
        <Link
          href="/"
          scroll={false}
          aria-current={currentLocale === "es" ? "page" : undefined}
          className={itemClassName(currentLocale === "es")}
        >
          {labels.spanish}
        </Link>
        <Link
          href="/?lang=en"
          scroll={false}
          aria-current={currentLocale === "en" ? "page" : undefined}
          className={itemClassName(currentLocale === "en")}
        >
          {labels.english}
        </Link>
      </div>
    </nav>
  );
}
