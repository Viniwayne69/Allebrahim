import { Reveal } from "@/components/ui/Reveal";
import { LeadForm } from "@/components/ui/LeadForm";
import Image from "next/image";

export function FinalCta() {
  return (
    <section id="contato" className="section-offset red-band section-pad">
      <div className="section-shell grid gap-6 md:grid-cols-2 md:items-center md:gap-10">
        <Reveal variant="left" className="grid grid-cols-[130px_1fr] items-center gap-4 md:grid-cols-[200px_1fr]">
          <Image src="/images/cta-alle.webp" alt="Allê Ebrahim sorrindo" width={1000} height={1250} className="h-[170px] w-auto object-contain md:h-[300px]" />
          <div>
            <h2 className="display-title h-cta">Vamos ver onde sua equipe pode vender mais?</h2>
            <p className="mt-3 text-[15px] font-medium text-white/90 md:text-base">Preencha os dados e vamos conversar sobre o seu momento.</p>
          </div>
        </Reveal>
        <Reveal variant="right" delay={150}>
          <LeadForm />
        </Reveal>
      </div>
    </section>
  );
}
