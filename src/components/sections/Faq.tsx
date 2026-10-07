import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/content/faq";

export function Faq() {
  return (
    <section className="bg-[var(--cream)] section-pad-b">
      <div className="section-shell">
        <h2 className="display-title h-section mb-8">Perguntas frequentes</h2>
        <Reveal delay={100}>
          <Accordion items={faqs} />
        </Reveal>
      </div>
    </section>
  );
}
