import type { ReactNode } from "react";

const tones = {
  orange: "bg-[var(--orange)]/15 text-[var(--orange-deep)]",
  brown: "bg-[var(--brown)]/8 text-[var(--brown)]",
  onRed: "bg-white/15 text-white",
  red: "bg-[var(--red)]/10 text-[var(--red)]",
  onDark: "bg-white/10 text-[var(--orange)]",
};

export function IconBadge({
  children,
  tone = "orange",
  className = "",
}: {
  children: ReactNode;
  tone?: keyof typeof tones;
  className?: string;
}) {
  return (
    <span className={`grid shrink-0 place-items-center rounded-full ${tones[tone]} ${className}`} aria-hidden>
      {children}
    </span>
  );
}
