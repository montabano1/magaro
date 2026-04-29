import { NextResponse } from "next/server";
import { addSubscriber, syncToResend } from "@/lib/subscribers";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: { email?: string; name?: string; source?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — silently accept
  if (body.name && body.name.length > 0) {
    return NextResponse.json({ message: "Thank you." });
  }

  const email = (body.email ?? "").trim();
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const { added } = await addSubscriber({ email, source: body.source });
  await syncToResend(email);

  return NextResponse.json({
    message: added
      ? "Welcome aboard. Look for our next dispatch in your inbox."
      : "You're already on the list — thank you.",
  });
}

export async function GET() {
  return NextResponse.json({ ok: true });
}
