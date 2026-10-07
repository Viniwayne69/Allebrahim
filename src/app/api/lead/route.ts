import { captureLeadSchema, leadSchema } from "@/lib/validation";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const schema = body.origin === "evento-qrcode" ? captureLeadSchema : leadSchema;
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten() }, { status: 400 });
  }

  const webhook = process.env.LEAD_WEBHOOK_URL;

  if (webhook) {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...parsed.data, receivedAt: new Date().toISOString() }),
    });
    if (!response.ok) {
      return NextResponse.json({ ok: false }, { status: 502 });
    }
  } else {
    console.log("Lead recebido sem LEAD_WEBHOOK_URL configurada", parsed.data);
  }

  return NextResponse.json({ ok: true });
}
