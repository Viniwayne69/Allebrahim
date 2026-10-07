"use client";

import { useEffect, useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** atraso em ms, para entrada escalonada em listas */
  delay?: number;
  /** de onde o bloco entra ao aparecer na tela */
  variant?: "up" | "left" | "right" | "zoom" | "fade" | "line";
};

export function Reveal({ children, className = "", delay = 0, variant = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Só esconde o que ainda está abaixo da dobra, para nada piscar no topo da página.
    if (node.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    node.dataset.hidden = "true";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.dataset.hidden = "false";
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -3% 0px" },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      node.dataset.hidden = "false";
    };
  }, []);

  return (
    <div
      ref={ref}
      data-reveal={variant}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
      className={className}
    >
      {children}
    </div>
  );
}
