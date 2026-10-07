import { Logo } from "@/components/ui/Logo";
import { brand, navItems } from "@/content/site";
import { whatsappHref } from "@/lib/whatsapp";
import { InstagramIcon, MailIcon, WhatsAppIcon } from "@/components/ui/icons/Icons";
import Link from "next/link";

const currentYear = new Date("2026-10-06T00:00:00-03:00").getFullYear();

export function Footer() {
  return (
    <footer className="dark-band py-8">
      <div className="section-shell grid gap-8 md:grid-cols-[1.4fr_1fr_1fr] md:items-start">
        <div>
          <Logo className="block text-3xl" />
          <p className="mt-1 text-sm text-white/75">{brand.signature}</p>
        </div>
        <nav className="grid grid-cols-2 gap-2 text-sm text-white/80" aria-label="Links do rodapé">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="py-1.5 transition-colors hover:text-white md:py-0">
              {item.label}
            </Link>
          ))}
          <Link href="/politica-de-privacidade" className="col-span-2 py-1.5 transition-colors hover:text-white md:py-0">
            Política de privacidade
          </Link>
        </nav>
        <div className="flex items-center gap-1 md:justify-end">
          <a href={brand.instagram} target="_blank" rel="noreferrer" className="focus-ring grid h-11 w-11 place-items-center text-white/80 transition-colors hover:text-white" aria-label="Instagram">
            <InstagramIcon className="h-6 w-6" />
          </a>
          <a href={whatsappHref("header")} target="_blank" rel="noreferrer" className="focus-ring grid h-11 w-11 place-items-center text-white/80 transition-colors hover:text-white" aria-label="WhatsApp">
            <WhatsAppIcon className="h-6 w-6" />
          </a>
          <a href={`mailto:${brand.email}`} className="focus-ring grid h-11 w-11 place-items-center text-white/80 transition-colors hover:text-white" aria-label="E-mail">
            <MailIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
      <div className="section-shell mt-7 border-t border-white/12 pt-5 text-[13px] text-white/65">
        © {currentYear} Allê Ebrahim. Todos os direitos reservados.
      </div>
    </footer>
  );
}
