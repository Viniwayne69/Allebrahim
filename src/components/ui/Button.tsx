import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "solid" | "outline" | "dark" | "light";
  href: string;
};

export function Button({ children, variant = "solid", className = "", ...props }: ButtonProps) {
  const variants = {
    solid: "bg-[var(--red)] text-white hover:bg-[var(--red-hover)]",
    outline: "border border-[var(--red)] bg-transparent text-[var(--brown)] hover:bg-[var(--red)] hover:text-white",
    dark: "bg-[var(--brown)] text-white hover:bg-[#160905]",
    light: "bg-white text-[var(--brown)] hover:bg-[var(--cream-soft)]",
  };

  return (
    <Link
      className={`focus-ring group inline-flex min-h-11 items-center justify-center gap-2 rounded-[10px] px-6 py-3 text-sm font-extrabold transition-colors duration-200 active:translate-y-px ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
