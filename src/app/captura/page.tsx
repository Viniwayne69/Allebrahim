import { CaptureForm } from "@/components/ui/CaptureForm";
import { brand } from "@/content/site";

export default function CapturePage() {
  return (
    <main className="min-h-screen bg-[var(--cream)] px-4 py-10">
      <section className="mx-auto max-w-2xl text-center">
        <p className="brand-logo text-3xl">{brand.name}</p>
        <h1 className="display-title mt-8 text-6xl">Vamos conversar?</h1>
        <p className="mx-auto mt-3 max-w-md font-bold leading-7 text-[#5d463a]">Deixe seus dados para continuarmos essa conversa com mais calma e direção.</p>
        <div className="mt-8">
          <CaptureForm />
        </div>
      </section>
    </main>
  );
}
