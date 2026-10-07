import { Reveal } from "@/components/ui/Reveal";
import { howItWorks } from "@/content/copy";

export function HowItWorks() {
  return (
    <section className="bg-[var(--cream)] section-pad">
      <div className="section-shell">
        <h2 className="display-title h-section text-center">Do primeiro contato ao resultado</h2>
        <div className="relative mt-10 grid md:mt-12 gap-6 md:grid-cols-4">
          <Reveal variant="line" delay={150} className="absolute left-[12.5%] right-[12.5%] top-5 hidden h-0.5 bg-[var(--orange)]/50 md:block">{null}</Reveal>
          {howItWorks.map(([title, text], index) => (
            <Reveal key={title} delay={300 + index * 220} className="relative grid grid-cols-[44px_1fr] gap-4 md:block md:text-center">
              {index < howItWorks.length - 1 ? <span className="absolute left-[21px] top-11 h-full border-l-2 border-dotted border-[var(--orange)] md:hidden" /> : null}
              <span className="relative z-10 mx-auto grid h-11 w-11 place-items-center rounded-full bg-[var(--orange)] text-lg font-black text-white">{index + 1}</span>
              <div className="md:mt-4">
                <h3 className="text-lg font-extrabold leading-6">{title}</h3>
                <p className="mt-0.5 text-[15px] font-medium leading-6 text-[var(--muted)]">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
