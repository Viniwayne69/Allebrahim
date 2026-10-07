"use client";

import { useEffect, useRef } from "react";

/**
 * Linhas pontilhadas que ligam o título às 3 soluções.
 * As pontas caem no centro de cada cartão (16%, 50% e 84% da largura)
 * e a linha "se desenha" ao entrar na tela.
 */
export function TreeLines() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.dataset.drawn = "true";
      return;
    }
    node.dataset.drawn = "false";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.dataset.drawn = "true";
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    // observa o contêiner (o próprio SVG está recortado até ser desenhado)
    observer.observe(node.parentElement ?? node);
    return () => observer.disconnect();
  }, []);

  const dash = { stroke: "currentColor", strokeWidth: 2, strokeDasharray: "2 8", strokeLinecap: "round" as const, vectorEffect: "non-scaling-stroke" as const };

  return (
    <svg
      ref={ref}
      className="tree-lines pointer-events-none absolute inset-x-0 top-[-80px] hidden h-[80px] w-full text-white/60 md:block"
      viewBox="0 0 1000 80"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden
    >
      <path d="M500 0V80" {...dash} />
      <path d="M500 18C500 52 160 44 160 80" {...dash} />
      <path d="M500 18C500 52 840 44 840 80" {...dash} />
    </svg>
  );
}
