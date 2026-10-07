"use client";

import { navItems } from "@/content/site";
import { Logo } from "@/components/ui/Logo";
import { Badge } from "@/components/ui/Badge";
import { whatsappHref } from "@/lib/whatsapp";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const close = () => setOpen(false);

  return (
    <>
    <header className={`enter-header fixed inset-x-0 top-0 z-50 border-b transition-all ${scrolled ? "border-[var(--line)] bg-white/94 backdrop-blur" : "border-transparent bg-transparent"}`}>
      <a href="#conteudo" className="focus-ring sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2">
        Pular para o conteúdo
      </a>
      <div className={`section-shell flex items-center justify-between transition-all ${scrolled ? "h-16" : "h-[76px]"}`}>
        <Link href="#inicio" className="text-[18px] text-[var(--brown)] sm:text-[22px]" aria-label="Allê Ebrahim — início">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-bold lg:flex" aria-label="Menu principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex items-center gap-1 pb-1 transition hover:text-[var(--red)] ${active === item.href ? "text-[var(--red)] after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-[var(--red)]" : ""}`}
            >
              {item.label}
              {item.badge ? <Badge>{item.badge}</Badge> : null}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={whatsappHref("header")}
            target="_blank"
            rel="noreferrer"
            className="focus-ring whitespace-nowrap rounded-[10px] bg-[var(--red)] px-3 py-2.5 text-xs font-black text-white transition-colors hover:bg-[var(--red-hover)] active:translate-y-px sm:px-4 sm:text-sm"
          >
            Falar com a Allê
          </a>
          <button className="focus-ring grid h-11 w-11 place-items-center rounded-[10px] text-[var(--brown)] lg:hidden" aria-label="Abrir menu" onClick={() => setOpen(true)}>
            <span className="h-0.5 w-6 bg-current before:block before:h-0.5 before:w-6 before:-translate-y-2 before:bg-current after:block after:h-0.5 after:w-6 after:translate-y-1.5 after:bg-current" />
          </button>
        </div>
      </div>
    </header>
      <div inert={!open} className={`fixed inset-0 z-[70] bg-[var(--brown)] text-white transition lg:hidden ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="section-shell flex h-[76px] items-center justify-between">
          <Logo className="text-2xl" />
          <button className="focus-ring grid h-11 w-11 place-items-center rounded-[10px] text-3xl" aria-label="Fechar menu" onClick={close}>
            ×
          </button>
        </div>
        <nav className="section-shell mt-10 grid gap-7 text-4xl font-black" aria-label="Menu mobile">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={close} className="display-title flex items-center gap-3">
              {item.label}
              {item.badge ? <Badge className="px-3 py-1 text-xs">{item.badge}</Badge> : null}
            </Link>
          ))}
          <a href={whatsappHref("header")} target="_blank" rel="noreferrer" className="mt-6 rounded-[12px] bg-[var(--red)] px-6 py-4 text-center text-base font-black" onClick={close}>
            Falar com a Allê
          </a>
        </nav>
      </div>
    </>
  );
}
