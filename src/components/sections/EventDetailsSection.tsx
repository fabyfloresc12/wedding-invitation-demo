import { CalendarDays, Clock, MapPin } from "lucide-react";

import { InfoCard } from "@/components/ui/InfoCard";
import { Section } from "@/components/ui/Section";
import type { EventFact } from "@/content/invitation";

type EventDetailsSectionProps = {
  facts: EventFact[];
  sectionLabel: string;
};

function getIcon(name: EventFact["icon"]) {
  switch (name) {
    case "calendar":
      return <CalendarDays size={26} />;
    case "clock":
      return <Clock size={26} />;
    case "map-pin":
      return <MapPin size={26} />;
  }
}

export function EventDetailsSection({ facts, sectionLabel }: EventDetailsSectionProps) {
  return (
    <Section labelledBy="event-details-title" className="space-y-6">
      <h2 id="event-details-title" className="sr-only">
        {sectionLabel}
      </h2>
      <ul className="grid gap-4 sm:grid-cols-3 sm:gap-5">
        {facts.map((fact) => (
          <li key={fact.label}>
            <InfoCard icon={getIcon(fact.icon)} label={fact.label} value={fact.value} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
