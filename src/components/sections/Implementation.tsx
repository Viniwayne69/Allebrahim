import { InterestButton } from "@/components/ui/InterestButton";
import { IconBadge } from "@/components/ui/IconBadge";
import { ArrowIcon, ChevronRightIcon, DatabaseIcon, DocumentIcon, MailIcon, MonitorIcon } from "@/components/ui/icons/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { implementationCards } from "@/content/copy";

const icons = [DatabaseIcon, MonitorIcon, MailIcon, DocumentIcon];

export function Implementation() {
  return (
    <section id="implementacao" className="section-offset red-band section-pad">
      <div className="section-shell text-center">
        <SectionLabel tone="onRed">SOLUÇÃO 3 · IMPLEMENTAÇÃO</SectionLabel>
        <h2 className="display-title h-section mx-auto mt-2 max-w-4xl">A estratégia só funciona quando está de pé no dia a dia.</h2>
        <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-4">
          {implementationCards.map(([title, text], index) => {
            const Icon = icons[index] || DatabaseIcon;
            return (
              <Reveal key={title} delay={index * 90} className="h-full">
                <article className="flex h-full min-h-32 items-center gap-4 rounded-[16px] bg-white p-5 text-left text-[var(--brown)] transition duration-200 hover:-translate-y-0.5 md:grid md:place-items-center md:text-center">
                  <IconBadge tone="red" className="h-14 w-14"><Icon className="h-7 w-7" /></IconBadge>
                  <div>
                    <h3 className="text-lg font-extrabold leading-6">{title}</h3>
                    <p className="mt-1 text-[15px] font-medium leading-6 text-[var(--muted)]">{text}</p>
                  </div>
                  <ChevronRightIcon className="ml-auto h-6 w-6 shrink-0 md:hidden" />
                </article>
              </Reveal>
            );
          })}
        </div>
        <InterestButton interest="Implementação" className="mt-8 w-full border border-white bg-transparent text-white hover:bg-white hover:text-[var(--red)] md:w-auto md:bg-white md:text-[var(--brown)]">
          Quero estruturar meu comercial <ArrowIcon />
        </InterestButton>
      </div>
    </section>
  );
}
