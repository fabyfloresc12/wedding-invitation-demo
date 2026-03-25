import Image from "next/image";

import { Section, SectionHeading } from "@/components/ui/Section";
import type { MomentsContent } from "@/content/invitation";

type MomentsSectionProps = {
  content: MomentsContent;
};

export function MomentsSection({ content }: MomentsSectionProps) {
  return (
    <Section labelledBy="moments-title" className="flex flex-col items-center">
      <div id="moments-title">
        <SectionHeading title={content.title} />
      </div>
      <div className="w-full max-w-4xl">
        <figure className="rounded-[2rem] border border-black/5 bg-white p-4 shadow-[0_25px_70px_rgba(0,0,0,0.10)] sm:p-8">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.2rem]">
            <Image
              src={content.image.src}
              alt={content.image.alt}
              fill
              quality={84}
              sizes="(max-width: 640px) 92vw, (max-width: 1200px) 80vw, 960px"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-8 text-center text-[10px] font-bold uppercase tracking-[0.34em] text-black/48 sm:tracking-[0.5em]">
            {content.caption}
          </figcaption>
        </figure>
      </div>
    </Section>
  );
}
