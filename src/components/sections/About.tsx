import { Button } from "@/components/ui/Button";
import { ArrowIcon } from "@/components/ui/icons/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { aboutCopy } from "@/content/copy";
import { whatsappHref } from "@/lib/whatsapp";
import Image from "next/image";

export function About() {
  return (
    <section id="sobre" className="section-offset bg-[var(--cream)] section-pad-t pb-14">
      <div className="section-shell grid gap-7 md:grid-cols-[0.95fr_1.05fr] md:items-center">
        <Reveal variant="left">
          <Image src="/images/sobre-alle.webp" alt="Allê Ebrahim falando em evento" width={900} height={700} className="aspect-[9/7] rounded-[18px] object-cover" />
        </Reveal>
        <Reveal variant="right" delay={120}>
          <h2 className="display-title h-section">{aboutCopy.title}</h2>
          <p className="mt-4 max-w-xl text-[17px] font-medium leading-7 text-[var(--muted)]">{aboutCopy.text}</p>
          <Button href={whatsappHref("header")} target="_blank" rel="noreferrer" className="mt-6">
            Falar com a Allê <ArrowIcon />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
