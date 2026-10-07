import { brand } from "@/content/site";

const messages = {
  header: "Olá, Allê! Vim pelo site e quero saber mais.",
  hero: "Olá, Allê! Vim pelo site e quero conversar sobre minha equipe comercial.",
  treinamento: "Olá, Allê! Quero saber mais sobre Treinamento.",
  consultoria: "Olá, Allê! Quero saber mais sobre a Consultoria.",
  implementacao: "Olá, Allê! Quero saber mais sobre Implementação.",
  turma: "Olá, Allê! Quero garantir minha vaga na turma Experiência 360.",
  contato: "Olá, Allê! Preenchi o formulário e quero conversar.",
};

export type WhatsappOrigin = keyof typeof messages;

export function getWhatsappNumber() {
  return process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || brand.whatsappFallback;
}

export function whatsappHref(origin: WhatsappOrigin = "header") {
  const number = getWhatsappNumber().replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(messages[origin])}`;
}
