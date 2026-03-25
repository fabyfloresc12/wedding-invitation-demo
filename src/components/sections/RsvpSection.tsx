import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import type { RsvpContent } from "@/content/invitation";

type RsvpSectionProps = {
  content: RsvpContent;
};

export function RsvpSection({ content }: RsvpSectionProps) {
  return (
    <Section id="rsvp" labelledBy="rsvp-title" className="space-y-8">
      <div id="rsvp-title">
        <SectionHeading title={content.title} eyebrow={content.deadlineLabel} description={content.description} />
      </div>
      <div className="rounded-[2rem] border border-black/8 bg-white p-5 shadow-[0_18px_50px_rgba(0,0,0,0.06)] sm:p-8">
        <div className="space-y-2">
          <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-black/45">
            {content.formTitle}
          </h3>
          <p className="text-sm leading-6 text-black/68">{content.statusNote}</p>
        </div>
        <form className="mt-8 space-y-6" aria-describedby="rsvp-note">
          <fieldset className="space-y-6">
            <legend className="sr-only">{content.formTitle}</legend>
            {content.fields.map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={`rsvp-${field.name}`}
                  className="mb-3 block text-[11px] font-bold uppercase tracking-[0.24em] text-black/52 sm:tracking-[0.28em]"
                >
                  {field.label}
                </label>
                <input
                  id={`rsvp-${field.name}`}
                  type={field.type}
                  placeholder={field.placeholder}
                  readOnly
                  aria-readonly="true"
                  className="w-full rounded-[1.25rem] border border-black/12 bg-[#faf8f3] px-4 py-4 text-sm tracking-[0.08em] text-black/65 outline-none focus-visible:border-[#8f6d12] focus-visible:ring-2 focus-visible:ring-[#8f6d12]/20 sm:px-5 sm:tracking-[0.14em]"
                />
              </div>
            ))}
          </fieldset>
          <p id="rsvp-note" className="rounded-[1.25rem] bg-black/4 px-4 py-4 text-sm leading-6 text-black/64">
            {content.statusNote}
          </p>
          <Button disabled className="w-full" aria-describedby="rsvp-note">
            {content.ctaLabel}
          </Button>
        </form>
      </div>
    </Section>
  );
}
