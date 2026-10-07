import { InterestButton } from "@/components/ui/InterestButton";
import { IconBadge } from "@/components/ui/IconBadge";
import { ArrowIcon, BuildingIcon, CapIcon, RocketIcon, UsersIcon } from "@/components/ui/icons/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { trainingCards } from "@/content/copy";
import { nextClass } from "@/content/site";
import Image from "next/image";

const icons = [CapIcon, BuildingIcon, UsersIcon, RocketIcon];

export function Training() {
  return (
    <section id="treinamento" className="section-offset red-band section-pad">
      <div className="section-shell">
        <SectionLabel tone="onRed">SOLUÇÃO 1 · TREINAMENTO</SectionLabel>
        <h2 className="display-title h-section mt-2 max-w-2xl">Um time que sabe vender, vende todo dia.</h2>
        <div className="mt-10 grid grid-cols-2 md:mt-12 gap-3 lg:grid-cols-4 lg:gap-5">
          {trainingCards.map((card, index) => {
            const Icon = icons[index] || CapIcon;
            return (
              <Reveal key={card.title} delay={index * 90} className="h-full">
                <article className="flex h-full flex-col rounded-[16px] bg-white p-3 text-[var(--brown)] lg:p-4">
                  <div className="flex flex-1 flex-col items-start gap-2 pb-3 lg:flex-row lg:gap-3">
                    <IconBadge className="h-10 w-10"><Icon className="h-5 w-5" /></IconBadge>
                    <div>
                      <h3 className="text-base font-extrabold leading-5 lg:text-lg lg:leading-6">{card.title}</h3>
                      <p className="mt-0.5 text-sm font-medium leading-5 text-[var(--muted)]">{card.text}</p>
                    </div>
                  </div>
                  <Image src={card.image} alt={`Allê em ${card.title}`} width={800} height={500} className="aspect-[8/5] w-full rounded-[10px] object-cover" />
                </article>
              </Reveal>
            );
          })}
        </div>
        <Reveal>
          <div className="mt-6 grid gap-5 rounded-[16px] bg-[var(--orange)] p-4 text-[var(--brown)] md:grid-cols-[220px_1fr_auto] md:items-center md:gap-8 md:p-5">
            <Image src="/images/proxima-turma.webp" alt="Allê Ebrahim com microfone" width={700} height={700} className="aspect-square w-full max-w-[128px] rounded-[12px] object-cover md:max-w-[220px]" />
            <div>
              <h3 className="display-title text-4xl md:text-[44px]">Próxima turma: {nextClass.name}</h3>
              <ul className="mt-3 grid gap-1 text-[15px] font-bold">
                <li>{nextClass.date}</li>
                <li>{nextClass.city}</li>
                <li>{nextClass.availability}</li>
              </ul>
            </div>
            <InterestButton interest="Treinamento" className="bg-[var(--brown)] text-white hover:bg-[#160905]">
              Garantir minha vaga <ArrowIcon />
            </InterestButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
