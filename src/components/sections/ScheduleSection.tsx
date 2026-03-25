import { Section, SectionHeading } from "@/components/ui/Section";
import type { ScheduleItem } from "@/content/invitation";

type ScheduleSectionProps = {
  eyebrow: string;
  title: string;
  items: ScheduleItem[];
};

export function ScheduleSection({ eyebrow, items, title }: ScheduleSectionProps) {
  return (
    <Section labelledBy="schedule-title" className="mx-auto max-w-2xl">
      <div id="schedule-title">
        <SectionHeading title={title} eyebrow={eyebrow} />
      </div>
      <ol className="space-y-4 text-center">
        {items.map((item) => (
          <li
            key={`${item.time}-${item.label}`}
            className="rounded-[1.5rem] border border-black/6 bg-[#fbfaf7] px-5 py-5 sm:px-6"
          >
            <span className="block text-sm font-bold text-[#9d7917]">{item.time}</span>
            <span className="mt-1 block text-lg font-light text-black">{item.label}</span>
          </li>
        ))}
      </ol>
    </Section>
  );
}
