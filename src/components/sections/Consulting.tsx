import { InterestButton } from "@/components/ui/InterestButton";
import { ArrowIcon } from "@/components/ui/icons/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { consultingSteps } from "@/content/copy";
import Image from "next/image";

export function Consulting() {
  return (
    <section id="consultoria" className="section-offset bg-[var(--cream)] section-pad">
      <div className="section-shell grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <Reveal variant="left">
          <SectionLabel tone="onLight">SOLUÇÃO 2 · CONSULTORIA</SectionLabel>
          <h2 className="display-title h-section mt-2">Descubra onde sua empresa está perdendo vendas.</h2>
          <div className="mt-10 grid gap-5 md:mt-12">
            {consultingSteps.map(([title, text], index) => (
              <div key={title} className="relative grid grid-cols-[42px_1fr] gap-4">
                {index < consultingSteps.length - 1 ? <span className="absolute left-[20px] top-11 h-full border-l-2 border-dotted border-[var(--orange)]" /> : null}
                <span className="relative z-10 grid h-11 w-11 place-items-center rounded-full bg-[var(--orange)] text-lg font-black text-white">{index + 1}</span>
                <div>
                  <h3 className="text-xl font-extrabold">{title}</h3>
                  <p className="mt-0.5 text-[15px] font-medium leading-6 text-[var(--muted)]">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <InterestButton interest="Consultoria" className="mt-7 w-full bg-[var(--red)] text-white hover:bg-[var(--red-hover)] md:w-auto">
            Quero um diagnóstico <ArrowIcon />
          </InterestButton>
        </Reveal>
        <Reveal variant="right" delay={120}>
          <Image src="/images/consultoria-reuniao.webp" alt="Allê em reunião de consultoria" width={1200} height={900} className="aspect-[4/3] rounded-[18px] object-cover" />
        </Reveal>
      </div>
    </section>
  );
}
