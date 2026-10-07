"use client";

import { maskPhone } from "@/lib/phone-mask";
import { captureLeadSchema } from "@/lib/validation";
import { useState } from "react";

export function CaptureForm() {
  const [fields, setFields] = useState({ name: "", whatsapp: "", company: "", website: "" });
  const [message, setMessage] = useState("");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = captureLeadSchema.safeParse({
      ...fields,
      origin: "evento-qrcode",
      pageUrl: window.location.href,
    });
    if (!parsed.success) {
      setMessage(parsed.error.issues[0]?.message || "Confira os dados.");
      return;
    }
    const response = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
    });
    setMessage(response.ok ? "Obrigada. Seus dados foram recebidos." : "Não foi possível enviar agora.");
  }

  return (
    <form onSubmit={submit} className="mx-auto grid max-w-xl gap-4 rounded-[16px] border border-[var(--line)] bg-white p-5">
      <input type="text" name="website" value={fields.website} onChange={(event) => setFields({ ...fields, website: event.target.value })} className="hidden" tabIndex={-1} autoComplete="off" />
      <input className="field" placeholder="Nome" value={fields.name} onChange={(event) => setFields({ ...fields, name: event.target.value })} />
      <input className="field" placeholder="WhatsApp" value={fields.whatsapp} onChange={(event) => setFields({ ...fields, whatsapp: maskPhone(event.target.value) })} />
      <input className="field" placeholder="Empresa" value={fields.company} onChange={(event) => setFields({ ...fields, company: event.target.value })} />
      <button className="focus-ring rounded-[10px] bg-[var(--red)] px-5 py-3 font-black text-white">Quero conversar</button>
      {message ? <p className="text-sm font-bold">{message}</p> : null}
    </form>
  );
}
