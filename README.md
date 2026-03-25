# Wedding Demo

Single-page wedding invitation built with Next.js App Router, React 19, TypeScript, and Tailwind CSS 4.

The site is intentionally structured as a mostly server-rendered page with a small set of client-only islands for the interactions that actually need browser state:
- intro overlay
- music control
- countdown timer

## Getting Started

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

Useful commands:

```bash
npm run lint
npm run build
```

## Project Structure

```text
src/
  app/
    layout.tsx          Root layout, fonts, metadata, global CSS
    page.tsx            Server entry point for the invitation page
    globals.css         Global theme tokens and base styles

  components/
    InvitationPage.tsx  Server-rendered page composition

    client/
      InvitationChrome.tsx  Intro overlay, music player, floating control
      CountdownClient.tsx   Live countdown island

    sections/
      HeroSection.tsx
      StorySection.tsx
      EventDetailsSection.tsx
      ScheduleSection.tsx
      MomentsSection.tsx
      GiftSection.tsx
      RsvpSection.tsx
      FooterSection.tsx
      IntroOverlay.tsx
      CountdownSection.tsx

    ui/
      Button.tsx
      InfoCard.tsx
      Section.tsx

  content/
    invitation.ts       Typed invitation content and editable copy

public/
  hero_boda.jpg
  boda.jpg
  sello_oroo.png
  musica.mp3
```

## Rendering Model

- `src/app/page.tsx` is a server component.
- `src/components/InvitationPage.tsx` composes the static invitation sections on the server.
- `src/components/client/InvitationChrome.tsx` is the client shell for the intro overlay and audio playback.
- `src/components/client/CountdownClient.tsx` is client-only because it updates every second.

This keeps the bulk of the page out of the client bundle while preserving the current experience.

## Content Editing Workflow

Most copy and event data lives in:

- `src/content/invitation.ts`

Edit that file to update:
- couple names
- page metadata
- countdown target date
- hero text
- story text
- date, time, and venue
- schedule items
- gift section copy
- RSVP labels and status text

## Visual Editing Workflow

Use these files depending on the type of change:

- `src/app/globals.css` for global tokens and base styles
- `src/components/ui/*` for shared visual primitives
- `src/components/sections/*` for section-specific layout or styling

## Media Notes

- `HeroSection` and `MomentsSection` use `next/image` with explicit `sizes` hints.
- The music file is only mounted after the invitation is opened, and it uses `preload="none"` to avoid eager loading on first render.
- Unused default scaffold assets were removed from `public/`.

## Current Product State

- RSVP is intentionally presentational only. It does not submit data yet.
- Gift information is intentionally marked as coming soon.

## Next Steps

If the site needs to go beyond a demo, the next logical additions are:
- real RSVP submission
- final asset compression pass for production media
- deployment-specific metadata and preview assets
