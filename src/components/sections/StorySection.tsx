import { Heart } from "lucide-react";

import { Section, SectionHeading } from "@/components/ui/Section";
import type { StoryContent } from "@/content/invitation";

type StorySectionProps = {
  content: StoryContent;
};

export function StorySection({ content }: StorySectionProps) {
  return (
    <Section labelledBy="story-title" className="text-center">
      <Heart size={24} color="#9d7917" className="mx-auto" aria-hidden="true" />
      <div id="story-title">
        <SectionHeading title={content.title} />
      </div>
      <blockquote className="mx-auto max-w-3xl text-lg font-light italic leading-8 text-black/72 sm:leading-9">
        <p>{content.quote}</p>
      </blockquote>
    </Section>
  );
}
