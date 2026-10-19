import { Logo } from "@/components/ui/Logo";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--cream)] px-4 py-16 text-[var(--brown)]">
      <section className="mx-auto max-w-3xl rounded-[18px] border border-[var(--line)] bg-white p-8">
        <Logo className="text-3xl" />
        <h1 className="display-title mt-8 text-5xl">Política de privacidade</h1>
        <p className="mt-5 leading-7 text-[var(--muted)]">
          Esta página é um texto provisório para orientar a publicação do site. Antes de ir ao ar, substitua este conteúdo pela política validada para a operação da Allê Ebrahim.
        </p>
        <p className="mt-4 leading-7 text-[var(--muted)]">
          Os dados enviados pelos formulários são usados para contato comercial e atendimento da solicitação feita no site.
        </p>
      </section>
    </main>
  );
}
