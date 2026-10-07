import { Button } from "@/components/ui/Button";
import { ArrowIcon } from "@/components/ui/icons/Icons";
import { CountUp } from "@/components/ui/CountUp";
import { heroCopy } from "@/content/copy";
import { stats } from "@/content/site";
import { whatsappHref } from "@/lib/whatsapp";
import Image from "next/image";

export function Hero() {
  return (
    <section id="inicio" className="section-offset overflow-hidden bg-[var(--cream)] pt-[92px] md:pt-[110px]">
      <div className="section-shell hero-grid">
        <div className="hero-left relative z-10 md:max-w-[620px]">
          <h1 className="hero-title display-title h-hero text-[var(--brown)]">
            {heroCopy.title.split(" ").map((word, index) => (
              <span key={`${word}-${index}`}>
                <span className="enter-word" style={{ "--d": `${250 + index * 70}ms` } as React.CSSProperties}>
                  {word}
                </span>{" "}
              </span>
            ))}
          </h1>
          <p style={{ "--d": "700ms" } as React.CSSProperties} className="enter hero-sub text-lg font-medium leading-8 text-[var(--muted)] md:mt-5 md:max-w-xl">{heroCopy.subtitle}</p>
          <div style={{ "--d": "850ms" } as React.CSSProperties} className="enter hero-ctas flex flex-col gap-3 md:mt-7 lg:flex-row">
            <Button href={whatsappHref("hero")} target="_blank" rel="noreferrer" className="whitespace-nowrap px-4 sm:px-6">
              {heroCopy.primaryCta} <ArrowIcon />
            </Button>
            <Button href="#solucoes" variant="outline" className="px-4 sm:px-6">
              {heroCopy.secondaryCta}
            </Button>
          </div>
          <div style={{ "--d": "1000ms" } as React.CSSProperties} className="enter hero-stats grid grid-cols-3 divide-x divide-[var(--line)] rounded-[16px] border border-[var(--line)] bg-white py-4 md:mt-9">
            {stats.map((stat, index) => (
              <div key={stat.value} className="px-3 sm:px-5">
                <p className="display-title text-3xl text-[var(--brown)] sm:text-4xl">
                  <CountUp value={stat.value} delay={1150 + index * 120} />
                </p>
                <p className="mt-0.5 text-sm font-semibold leading-4 text-[var(--muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-photo relative">
          <div className="relative ml-auto w-fit lg:mr-[150px]">
            <div data-parallax="0.07" className="absolute -left-[12%] top-[8%] h-[78%] w-[104%]">
              <div style={{ "--d": "200ms" } as React.CSSProperties} className="enter-blob h-full w-full rotate-[-12deg] rounded-[48%_52%_46%_54%] bg-[var(--orange)]" />
            </div>
            <div style={{ "--d": "450ms" } as React.CSSProperties} className="enter-photo relative z-10">
              <Image
                src="/images/hero-alle-v2.webp"
                alt="Allê Ebrahim sorrindo"
                width={1159}
                height={1357}
                priority
                className="block h-[clamp(190px,50vw,300px)] w-auto object-contain md:h-[560px] lg:h-[620px]"
              />
            </div>
          </div>
          <div style={{ "--d": "1300ms" } as React.CSSProperties} className="enter absolute right-0 top-[18%] hidden w-[150px] rotate-[-5deg] text-center font-[family-name:var(--font-script)] text-4xl leading-8 text-[var(--brown)] lg:block">
            {heroCopy.note.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <svg className="mx-auto mt-1 h-4 w-20 text-[var(--red)]" viewBox="0 0 80 16" fill="none" aria-hidden>
              <path d="M4 10c18 4 42 3 72-4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
