import { Reveal } from "@/components/ui/Reveal";
import { authorityLogos } from "@/content/logos";

export function Authority() {
  return (
    <section className="dark-band hidden py-7 text-white md:block">
      <div className="section-shell">
        <p className="text-center text-sm font-extrabold text-white/70">Marcas que confiam no nosso trabalho</p>
        <div className="mt-5 flex items-center gap-4 overflow-x-auto pb-1 md:grid md:grid-cols-6 md:overflow-visible">
          {authorityLogos.map((logo, index) => (
            <Reveal key={logo.name} variant="fade" delay={index * 90} className="min-w-32">
            <div className="flex items-center justify-center gap-2 rounded-[10px] px-5 py-3 text-white/86">
              <LogoMark accent={logo.accent} />
              <span className={`font-black leading-none ${logo.name === "vivo" ? "text-3xl tracking-[-0.02em]" : "text-lg"}`}>
                {logo.name}
              </span>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoMark({ accent }: { accent: string }) {
  if (accent === "flower") {
    return (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 5c2 2.4 2 4.7 0 7-2-2.3-2-4.6 0-7Z" stroke="currentColor" strokeWidth="2" />
        <path d="M5 12c2.4-2 4.7-2 7 0-2.3 2-4.6 2-7 0Z" stroke="currentColor" strokeWidth="2" />
        <path d="M12 19c-2-2.4-2-4.7 0-7 2 2.3 2 4.6 0 7Z" stroke="currentColor" strokeWidth="2" />
        <path d="M19 12c-2.4 2-4.7 2-7 0 2.3-2 4.6-2 7 0Z" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  if (accent === "arc") {
    return (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M6 15c1.4-4.8 5.5-7.4 10-6.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M8 18c2-2.5 5-3.6 8-2.7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  if (accent === "bars") {
    return (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <rect x="4" y="6" width="16" height="3" rx="1" />
        <rect x="4" y="11" width="16" height="3" rx="1" />
        <rect x="4" y="16" width="16" height="3" rx="1" />
      </svg>
    );
  }

  if (accent === "circle") {
    return <span className="h-5 w-5 rounded-full border-[3px] border-current" aria-hidden />;
  }

  if (accent === "spark") {
    return (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <circle cx="8" cy="8" r="2" />
        <circle cx="16" cy="8" r="2" />
        <circle cx="12" cy="15" r="2.5" />
      </svg>
    );
  }

  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 3c4 4 6 7.5 6 11a6 6 0 0 1-12 0c0-3.5 2-7 6-11Z" />
    </svg>
  );
}
