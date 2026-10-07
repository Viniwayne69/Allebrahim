import { About } from "@/components/sections/About";
import { Authority } from "@/components/sections/Authority";
import { Consulting } from "@/components/sections/Consulting";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Implementation } from "@/components/sections/Implementation";
import { Problem } from "@/components/sections/Problem";
import { Results } from "@/components/sections/Results";
import { Solutions } from "@/components/sections/Solutions";
import { Training } from "@/components/sections/Training";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { ScrollEffects } from "@/components/ui/ScrollEffects";
import { brand } from "@/content/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: brand.name,
    description:
      "Treinamentos, consultoria e implementação para equipes comerciais que querem vender de forma mais humana e previsível.",
    areaServed: "BR",
    url: "https://alleebrahim.com.br",
    sameAs: [brand.instagram],
  };

  return (
    <>
      <ScrollEffects />
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main id="conteudo">
        <Hero />
        <Authority />
        <Solutions />
        <Problem />
        <Training />
        <Consulting />
        <Implementation />
        <HowItWorks />
        <Results />
        <About />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
