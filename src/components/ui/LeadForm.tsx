"use client";

import { formOptions } from "@/content/site";
import { maskPhone } from "@/lib/phone-mask";
import { whatsappHref } from "@/lib/whatsapp";
import { leadSchema } from "@/lib/validation";
import { ArrowIcon } from "@/components/ui/icons/Icons";
import { useEffect, useMemo, useState } from "react";

type Fields = {
  name: string;
  company: string;
  segment: string;
  teamSize: string;
  interest: string;
  whatsapp: string;
  website: string;
};

const initial: Fields = {
  name: "",
  company: "",
  segment: "",
  teamSize: "",
  interest: "",
  whatsapp: "",
  website: "",
};

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [fields, setFields] = useState(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const handler = (event: Event) => {
      const custom = event as CustomEvent<string>;
      setFields((current) => ({ ...current, interest: custom.detail }));
      document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
    };
    window.addEventListener("alle:set-interest", handler);
    return () => window.removeEventListener("alle:set-interest", handler);
  }, []);

  const utm = useMemo(() => {
    if (typeof window === "undefined") return {};
    const params = new URLSearchParams(window.location.search);
    return Object.fromEntries([...params.entries()].filter(([key]) => key.startsWith("utm_")));
  }, []);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    const payload = {
      ...fields,
      origin: "site-contato",
      pageUrl: window.location.href,
      utm,
    };
    const parsed = leadSchema.safeParse(payload);
    if (!parsed.success) {
      const nextErrors: Partial<Record<keyof Fields, string>> = {};
      parsed.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof Fields;
        nextErrors[key] = issue.message;
      });
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    setStatus("loading");
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!response.ok) throw new Error("Erro ao enviar");
      window.dispatchEvent(new CustomEvent("alle:form-submit"));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[16px] bg-white p-6 text-[var(--brown)]">
        <h3 className="display-title text-3xl">Recebemos seus dados.</h3>
        <p className="mt-3 text-sm leading-6 text-[#5d463a]">
          Obrigada por chegar até aqui. Agora o próximo passo é uma conversa simples, honesta e bem direcionada.
        </p>
        <a href={whatsappHref("contato")} target="_blank" rel="noreferrer" className="focus-ring mt-5 inline-flex rounded-[10px] bg-[var(--brown)] px-5 py-3 text-sm font-black text-white">
          Conversar no WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate
      className={`grid gap-x-3 gap-y-3.5 rounded-[16px] bg-white p-4 text-[var(--brown)] md:p-5 ${compact ? "grid-cols-1" : "grid-cols-2"}`}>
      <input type="text" name="website" value={fields.website} onChange={(event) => setFields({ ...fields, website: event.target.value })} className="hidden" tabIndex={-1} autoComplete="off" />
      <Field label="Nome*" error={errors.name}>
        <input value={fields.name} onChange={(event) => setFields({ ...fields, name: event.target.value })} placeholder="Seu nome" className="field" aria-invalid={Boolean(errors.name)} />
      </Field>
      <Field label="Empresa*" error={errors.company}>
        <input value={fields.company} onChange={(event) => setFields({ ...fields, company: event.target.value })} placeholder="Sua empresa" className="field" aria-invalid={Boolean(errors.company)} />
      </Field>
      <Field label="Segmento*" error={errors.segment}>
        <select value={fields.segment} onChange={(event) => setFields({ ...fields, segment: event.target.value })} className="field" aria-invalid={Boolean(errors.segment)}>
          <option value="">Selecione</option>
          {formOptions.segments.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </Field>
      <Field label="Tamanho da equipe*" error={errors.teamSize}>
        <select value={fields.teamSize} onChange={(event) => setFields({ ...fields, teamSize: event.target.value })} className="field" aria-invalid={Boolean(errors.teamSize)}>
          <option value="">Selecione</option>
          {formOptions.teamSizes.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </Field>
      <Field label="Interesse principal*" error={errors.interest}>
        <select value={fields.interest} onChange={(event) => setFields({ ...fields, interest: event.target.value })} className="field" aria-invalid={Boolean(errors.interest)}>
          <option value="">Selecione</option>
          {formOptions.interests.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </Field>
      <Field label="WhatsApp*" error={errors.whatsapp}>
        <input value={fields.whatsapp} onChange={(event) => setFields({ ...fields, whatsapp: maskPhone(event.target.value) })} placeholder="Seu WhatsApp" inputMode="tel" autoComplete="tel" className="field" aria-invalid={Boolean(errors.whatsapp)} />
      </Field>
      <button disabled={status === "loading"} className="focus-ring group col-span-full inline-flex min-h-12 items-center justify-center gap-2 rounded-[10px] bg-[var(--brown)] px-5 py-3 text-base font-extrabold text-white transition-colors hover:bg-[#160905] active:translate-y-px disabled:opacity-70">
        {status === "loading" ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden />
            Enviando...
          </>
        ) : (
          <>
            Quero conversar com a Allê <ArrowIcon />
          </>
        )}
      </button>
      {status === "error" ? <p role="alert" className="col-span-full text-sm font-bold text-[var(--red)]">Não foi possível enviar agora. Tente novamente em instantes.</p> : null}
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="grid min-w-0 gap-1.5 text-[13px] font-bold">
      {label}
      {children}
      {error ? <span role="alert" className="text-xs font-bold text-[var(--red)]">{error}</span> : null}
    </label>
  );
}
