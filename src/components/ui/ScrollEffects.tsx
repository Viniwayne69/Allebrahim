"use client";

import { useEffect, useRef } from "react";

/**
 * Efeitos ligados à rolagem da página:
 * - barra de progresso no topo
 * - parallax leve em elementos com data-parallax (ex.: foto do hero)
 * - entrada dos títulos de seção (h2) que não estão dentro de outro bloco animado
 */
export function ScrollEffects() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let ticking = false;

    const update = () => {
      ticking = false;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${progress})`;
      if (!reduced && window.scrollY < window.innerHeight * 1.3) {
        document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
          el.style.translate = `0 ${window.scrollY * Number(el.dataset.parallax)}px`;
        });
      }
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    const titles = reduced
      ? []
      : Array.from(document.querySelectorAll<HTMLElement>("main h2")).filter(
          (h) => !h.closest("[data-reveal]") && h.getBoundingClientRect().top > window.innerHeight * 0.9,
        );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.hidden = "false";
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -6% 0px" },
    );
    titles.forEach((title) => {
      title.dataset.reveal = "up";
      title.dataset.hidden = "true";
      observer.observe(title);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      observer.disconnect();
      titles.forEach((title) => {
        title.dataset.hidden = "false";
      });
    };
  }, []);

  return <div ref={bar} className="scroll-progress" aria-hidden />;
}
