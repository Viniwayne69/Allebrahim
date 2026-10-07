type Tone = "onLight" | "onDark" | "onRed";

const tones: Record<Tone, string> = {
  onLight: "text-[var(--orange-deep)]",
  onDark: "text-[var(--orange)]",
  onRed: "text-[var(--yellow)]",
};

export function SectionLabel({ children, tone = "onDark", className = "" }: { children: React.ReactNode; tone?: Tone; className?: string }) {
  return <p className={`text-sm font-extrabold uppercase tracking-[0.08em] ${tones[tone]} ${className}`}>{children}</p>;
}
