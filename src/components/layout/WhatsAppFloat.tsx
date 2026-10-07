import { WhatsAppIcon } from "@/components/ui/icons/Icons";
import { whatsappHref } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref("header")}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar pelo WhatsApp"
      className="focus-ring fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_24px_rgba(0,0,0,0.22)] transition duration-200 hover:scale-105"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  );
}
