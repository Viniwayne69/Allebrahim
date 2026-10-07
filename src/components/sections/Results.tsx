import { Carousel } from "@/components/ui/Carousel";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/content/testimonials";
import Image from "next/image";

const gallery = [
  "/images/galeria-1.webp",
  "/images/galeria-2.webp",
  "/images/galeria-3.webp",
  "/images/galeria-4.webp",
];

export function Results() {
  return (
    <section id="resultados" className="section-offset dark-band section-pad">
      <div className="section-shell">
        <h2 className="display-title h-section text-center">Resultados</h2>
        <div className="mt-10 grid gap-6 md:mt-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} variant="left" delay={index * 140}>
                <article className="rounded-[16px] bg-white p-5 text-[var(--brown)]">
                  <div className="flex items-center gap-3">
                    <Image src={item.image} alt={`Retrato de ${item.name}`} width={200} height={200} className="h-14 w-14 rounded-full object-cover" />
                    <div>
                      <h3 className="font-black">{item.name}</h3>
                      <p className="text-xs font-bold text-[#6d5548]">{item.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-[15px] font-medium leading-6">“{item.quote}”</p>
                  <p className="mt-3 text-[var(--orange)]" aria-label="5 estrelas">★★★★★</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal variant="right" delay={150}>
            <div className="hidden grid-cols-2 gap-3 md:grid">
              {gallery.map((image, index) => (
                <Image key={image} src={image} alt={`Registro de resultado ${index + 1}`} width={900} height={600} className="aspect-[3/2] rounded-[14px] object-cover" />
              ))}
            </div>
            <Carousel />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
