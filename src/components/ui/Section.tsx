import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  labelledBy?: string;
};

type SectionHeadingProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  align?: "left" | "center";
};

function joinClassNames(...values: Array<string | undefined | false>) {
  return values.filter(Boolean).join(" ");
}

export function Section({ children, className, id, labelledBy }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={joinClassNames("space-y-8", className)}>
      {children}
    </section>
  );
}

export function SectionHeading({
  title,
  eyebrow,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  const lineAlignment = align === "center" ? "mx-auto" : "";
  const descriptionAlignment = align === "center" ? "mx-auto" : "";

  return (
    <div className={joinClassNames("flex flex-col gap-3", alignment)}>
      {eyebrow ? (
        <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-black/55 sm:tracking-[0.38em]">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-light italic text-black sm:text-4xl">{title}</h2>
      <div className={joinClassNames("h-px w-14 bg-[#D4AF37]", lineAlignment)} />
      {description ? (
        <p className={joinClassNames("max-w-2xl text-base leading-7 text-black/72 sm:text-lg", descriptionAlignment)}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
