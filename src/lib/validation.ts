import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome."),
  company: z.string().trim().min(2, "Informe sua empresa."),
  segment: z.string().trim().min(1, "Selecione o segmento."),
  teamSize: z.string().trim().min(1, "Selecione o tamanho da equipe."),
  interest: z.string().trim().min(1, "Selecione o interesse principal."),
  whatsapp: z
    .string()
    .trim()
    .regex(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, "Informe um WhatsApp válido."),
  origin: z.string().optional(),
  pageUrl: z.string().optional(),
  utm: z.record(z.string(), z.string()).optional(),
  website: z.string().optional(),
});

export const captureLeadSchema = leadSchema.pick({
  name: true,
  whatsapp: true,
  company: true,
  origin: true,
  pageUrl: true,
  utm: true,
  website: true,
});

export type LeadInput = z.infer<typeof leadSchema>;
