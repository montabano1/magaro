import fs from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Inquiry = {
  name: string;
  email: string;
  phone?: string;
  tripType?: string;
  destination?: string;
  dates?: string;
  party?: string;
  message?: string;
  receivedAt: string;
};

async function appendInquiry(i: Inquiry) {
  const dir = path.join(process.cwd(), "data");
  await fs.mkdir(dir, { recursive: true });
  const file = path.join(dir, "inquiries.json");
  let all: Inquiry[] = [];
  try {
    all = JSON.parse(await fs.readFile(file, "utf8"));
  } catch {}
  all.push(i);
  await fs.writeFile(file, JSON.stringify(all, null, 2));
}

async function notifyByEmail(i: Inquiry) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_NOTIFY_EMAIL;
  if (!key || !to) return;

  const lines = [
    `Name: ${i.name}`,
    `Email: ${i.email}`,
    i.phone && `Phone: ${i.phone}`,
    i.tripType && `Trip type: ${i.tripType}`,
    i.destination && `Destination: ${i.destination}`,
    i.dates && `Dates: ${i.dates}`,
    i.party && `Party: ${i.party}`,
    "",
    "Message:",
    i.message || "(none)",
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({
        from: "Remarkable Travel <inquiries@remarkabletraveldesign.com>",
        to: [to],
        reply_to: i.email,
        subject: `New inquiry — ${i.name}${i.tripType ? ` · ${i.tripType}` : ""}`,
        text: lines,
      }),
    });
  } catch (e) {
    console.error("notify failed", e);
  }
}

export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (body.company && body.company.length > 0) {
    return NextResponse.json({ message: "Received." });
  }

  const email = (body.email ?? "").trim();
  const name = (body.name ?? "").trim();
  if (!name || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please share your name and a valid email." },
      { status: 400 }
    );
  }

  const inquiry: Inquiry = {
    name,
    email,
    phone: body.phone,
    tripType: body.tripType,
    destination: body.destination,
    dates: body.dates,
    party: body.party,
    message: body.message,
    receivedAt: new Date().toISOString(),
  };

  await appendInquiry(inquiry);
  await notifyByEmail(inquiry);

  return NextResponse.json({
    message: "Thank you — we'll be in touch within one business day.",
  });
}
