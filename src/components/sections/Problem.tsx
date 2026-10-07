import { BarsIcon, MailIcon, PersonIcon, UsersIcon } from "@/components/ui/icons/Icons";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";
import { problemCards } from "@/content/copy";

const icons = [UsersIcon, MailIcon, BarsIcon, UsersIcon];

export function Problem() {
  return (
    <section className="section-offset bg-[var(--cream)] section-pad">
      <div className="section-shell">
        <h2 className="display-title h-section mx-auto max-w-3xl text-center">Sua equipe atende bem, mas as vendas não acompanham?</h2>
        <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-4">
          {problemCards.map((text, index) => {
            const Icon = icons[index] || PersonIcon;
            return (
              <Reveal key={text} delay={index * 90} className="h-full">
                <div className="flex h-full min-h-32 items-center gap-5 rounded-[16px] border border-[var(--line)] bg-white p-5 text-left transition duration-200 hover:-translate-y-0.5 hover:border-[var(--orange)] md:grid md:place-items-center md:text-center">
                  <IconBadge tone="orange" className="h-14 w-14"><Icon className="h-7 w-7" /></IconBadge>
                  <p className="text-base font-semibold leading-6">{text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
