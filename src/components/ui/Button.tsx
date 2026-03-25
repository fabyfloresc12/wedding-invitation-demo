import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  disabled?: boolean;
};

type AnchorButtonProps = ButtonProps &
  Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "aria-label" | "aria-describedby" | "target" | "rel"> & {
  href: string;
};

type NativeButtonProps = ButtonProps & {
  type?: "button" | "submit" | "reset";
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "aria-label" | "aria-describedby">;

const baseClassName =
  "inline-flex min-h-11 items-center justify-center gap-3 rounded-full border px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.28em] transition duration-300 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6d12] focus-visible:ring-offset-2";

const variantClassNames: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "border-black bg-black text-white shadow-[0_16px_40px_rgba(0,0,0,0.16)] hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black",
  secondary:
    "border-[#D4AF37]/40 bg-white text-black hover:border-[#D4AF37] hover:bg-[#D4AF37]/10",
  ghost:
    "border-black/10 bg-transparent text-black/60",
};

function joinClassNames(...values: Array<string | undefined | false>) {
  return values.filter(Boolean).join(" ");
}

export function ButtonLink({
  "aria-describedby": ariaDescribedBy,
  "aria-label": ariaLabel,
  children,
  className,
  href,
  rel,
  target,
  variant = "primary",
}: AnchorButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={joinClassNames(baseClassName, variantClassNames[variant], className)}
    >
      {children}
    </a>
  );
}

export function Button({
  "aria-describedby": ariaDescribedBy,
  "aria-label": ariaLabel,
  children,
  className,
  disabled,
  onClick,
  type = "button",
  variant = "primary",
}: NativeButtonProps) {
  return (
    <button
      aria-describedby={ariaDescribedBy}
      aria-label={ariaLabel}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={joinClassNames(
        baseClassName,
        variantClassNames[variant],
        disabled && "cursor-not-allowed border-black/10 bg-black/5 text-black/35 shadow-none hover:border-black/10 hover:bg-black/5 hover:text-black/35",
        className,
      )}
    >
      {children}
    </button>
  );
}
