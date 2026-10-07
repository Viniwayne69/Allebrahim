import { whatsappHref } from "@/lib/whatsapp";
import Image from "next/image";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref("header")}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar pelo WhatsApp"
      className="focus-ring fixed bottom-5 right-5 z-40 block h-14 w-14 rounded-[22%] shadow-[0_6px_16px_rgba(0,0,0,0.18)] transition-transform duration-200 hover:scale-105"
    >
      <Image src="/images/whatsapp.png" alt="" width={192} height={192} className="h-full w-full" />
    </a>
  );
}
