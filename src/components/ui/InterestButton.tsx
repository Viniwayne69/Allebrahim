"use client";

export function InterestButton({ interest, children, className = "" }: { interest: string; children: React.ReactNode; className?: string }) {
  return (
    <button
      className={`focus-ring group inline-flex min-h-11 items-center justify-center gap-2 rounded-[10px] px-6 py-3 text-sm font-extrabold transition-colors duration-200 active:translate-y-px ${className}`}
      onClick={() => window.dispatchEvent(new CustomEvent("alle:set-interest", { detail: interest }))}
    >
      {children}
    </button>
  );
}
