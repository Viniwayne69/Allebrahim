"use client";

import { useEffect, useRef } from "react";

/**
 * Mostra um número que "sobe" de 0 até o valor final.
 * O texto final já vem no HTML (sem JS ou com movimento reduzido nada muda).
 */
export function CountUp({
  value,
  delay = 0,
  duration = 1400,
  className = "",
}: {
  value: string;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    const match = value.match(/^(\D*)(\d+)(.*)$/);
    if (!node || !match) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const [, prefix, digits, suffix] = match;
    const target = Number(digits);
    const render = (n: number) => {
      node.textContent = `${prefix}${n}${suffix}`;
    };

    let raf = 0;
    render(0);
    const timer = window.setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        render(Math.round(target * (1 - Math.pow(1 - t, 3))));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
      render(target);
    };
  }, [value, delay, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {value}
    </span>
  );
}
