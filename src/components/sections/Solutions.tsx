import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { IconBadge } from "@/components/ui/IconBadge";
import { ArrowIcon, CapIcon, ChevronRightIcon, GearIcon, UsersIcon } from "@/components/ui/icons/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { TreeLines } from "@/components/ui/TreeLines";
import { solutionCards } from "@/content/copy";
import { whatsappHref } from "@/lib/whatsapp";
import Link from "next/link";

const icons = [CapIcon, UsersIcon, GearIcon];

const tones: Record<string, { card: string; badge: "orange" | "brown" | "onRed" }> = {
  red: { card: "bg-[var(--red)] text-white", badge: "onRed" },
  yellow: { card: "bg-[var(--yellow)] text-[var(--brown)]", badge: "brown" },
  cream: { card: "bg-[var(--cream-soft)] text-[var(--brown)]", badge: "orange" },
};

export function Solutions() {
  return (
    <section id="solucoes" className="section-offset dark-band section-pad">
      <div className="section-shell text-center">
        <h2 className="display-title h-section mx-auto max-w-[700px]">
          Como transformamos equipes em times que vendem todo dia, de forma previsível?
        </h2>
        <p className="mt-4 text-2xl font-extrabold text-[var(--orange)] md:text-3xl">Temos 3 linhas de soluções</p>
        <div className="relative mt-10 md:mt-24">
          <TreeLines />
          <div className="grid grid-cols-[minmax(0,1fr)] gap-4 md:grid-cols-3 md:gap-x-[2%] md:gap-y-6">
            {solutionCards.map((card, index) => {
              const Icon = icons[index] || CapIcon;
              const tone = tones[card.tone] ?? tones.cream;
              return (
                <Reveal key={card.id} variant="zoom" delay={350 + index * 140} className="h-full">
                  <Link
                    href={`#${card.id}`}
                    className={`focus-ring group relative flex h-full items-center gap-4 rounded-[16px] p-5 text-left transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(0,0,0,0.28)] md:flex-col md:justify-start md:gap-4 md:px-8 md:py-9 md:text-center ${tone.card}`}
                  >
                    {card.badge ? (
                      <span className="absolute right-4 top-4 hidden md:block">
                        <Badge>{card.badge}</Badge>
                      </span>
                    ) : null}
                    <IconBadge tone={card.tone === "red" ? "onRed" : card.tone === "yellow" ? "brown" : "orange"} className="h-12 w-12 md:h-16 md:w-16">
                      <Icon className="h-6 w-6 md:h-8 md:w-8" />
                    </IconBadge>
                    <div className="min-w-0 flex-1 md:flex-none">
                      <div className="flex flex-wrap items-center gap-x-2 md:justify-center">
                        <h3 className="display-title text-[28px] md:text-4xl">{card.title}</h3>
                        {card.badge ? (
                          <span className="md:hidden">
                            <Badge>{card.badge}</Badge>
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-1 text-base font-bold">{card.subtitle}</p>
                      <span className="mx-auto my-3 hidden h-px w-10 bg-current opacity-25 md:block" aria-hidden />
                      <p className="mt-1 text-[15px] font-medium leading-6 opacity-85 md:mt-0">{card.text}</p>
                    </div>
                    <ChevronRightIcon className="h-6 w-6 shrink-0 transition-transform duration-200 group-hover:translate-x-1 md:hidden" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
        <p className="mt-8 text-[15px] font-medium text-white/80">Contrate em conjunto ou separadamente.</p>
        <Button href={whatsappHref("header")} target="_blank" rel="noreferrer" className="mt-4">
          Agendar conversa <ArrowIcon className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
