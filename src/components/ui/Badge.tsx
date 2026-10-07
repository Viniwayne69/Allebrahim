export function Badge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-[var(--orange)] px-2.5 py-0.5 text-[10px] font-extrabold uppercase leading-4 tracking-[0.06em] text-[var(--brown)] ${className}`}
    >
      {children}
    </span>
  );
}
