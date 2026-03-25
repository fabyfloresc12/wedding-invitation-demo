import { CountdownClient } from "@/components/client/CountdownClient";
import { InvitationChrome } from "@/components/client/InvitationChrome";
import { EventDetailsSection } from "@/components/sections/EventDetailsSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { GiftSection } from "@/components/sections/GiftSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MomentsSection } from "@/components/sections/MomentsSection";
import { RsvpSection } from "@/components/sections/RsvpSection";
import { ScheduleSection } from "@/components/sections/ScheduleSection";
import { StorySection } from "@/components/sections/StorySection";
import type { InvitationContent, Locale } from "@/content/invitation";

type InvitationPageProps = {
  content: InvitationContent;
  currentLocale: Locale;
};

export function InvitationPage({ content, currentLocale }: InvitationPageProps) {
  return (
    <InvitationChrome
      currentLocale={currentLocale}
      languageToggle={content.languageToggle}
      intro={content.intro}
      musicLabels={{
        play: content.ui.musicPlayLabel,
        pause: content.ui.musicPauseLabel,
      }}
      audioSrc="/musica.mp3"
    >
      <HeroSection content={content.hero} />
      <CountdownClient
        label={content.countdown.label}
        targetDateIso={content.countdown.targetDateIso}
        units={content.countdown.units}
      />

      <main className="mx-auto flex w-full max-w-5xl flex-col gap-20 px-5 py-16 sm:px-6 sm:py-20 md:gap-28 md:py-24">
        <StorySection content={content.story} />
        <EventDetailsSection facts={content.eventFacts} sectionLabel={content.ui.eventDetailsLabel} />
        <ScheduleSection
          eyebrow={content.schedule.eyebrow}
          title={content.schedule.title}
          items={content.schedule.items}
        />
        <MomentsSection content={content.moments} />

        <div className="grid gap-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-start md:gap-10">
          <RsvpSection content={content.rsvp} />
          <GiftSection content={content.gifts} />
        </div>
      </main>

      <FooterSection monogram={content.coupleMonogram} />
    </InvitationChrome>
  );
}
