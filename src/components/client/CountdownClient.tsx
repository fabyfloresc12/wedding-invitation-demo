"use client";

import { useEffect, useMemo, useState } from "react";

import { CountdownSection } from "@/components/sections/CountdownSection";

type CountdownClientProps = {
  label: string;
  targetDateIso: string;
  units: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
};

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(targetMs: number): Countdown {
  const nowMs = Date.now();
  const diff = Math.max(0, targetMs - nowMs);
  const seconds = Math.floor(diff / 1000);

  return {
    days: Math.floor(seconds / 86400),
    hours: Math.floor((seconds % 86400) / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: seconds % 60,
  };
}

export function CountdownClient({ label, targetDateIso, units }: CountdownClientProps) {
  const targetMs = useMemo(() => new Date(targetDateIso).getTime(), [targetDateIso]);
  const [timeLeft, setTimeLeft] = useState<Countdown>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const update = () => setTimeLeft(getTimeLeft(targetMs));
    update();

    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, [targetMs]);

  return (
    <CountdownSection
      label={label}
      values={[
        { label: units.days, value: timeLeft.days, pad: false },
        { label: units.hours, value: timeLeft.hours, pad: true },
        { label: units.minutes, value: timeLeft.minutes, pad: true },
        { label: units.seconds, value: timeLeft.seconds, pad: true },
      ]}
    />
  );
}
