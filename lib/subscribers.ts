import fs from "node:fs/promises";
import path from "node:path";

const DATA_DIR = path.join(process.cwd(), "data");
const FILE = path.join(DATA_DIR, "subscribers.json");

export type Subscriber = {
  email: string;
  source?: string;
  createdAt: string;
};

async function ensureFile() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(FILE);
  } catch {
    await fs.writeFile(FILE, "[]");
  }
}

export async function readAll(): Promise<Subscriber[]> {
  await ensureFile();
  const raw = await fs.readFile(FILE, "utf8");
  try {
    return JSON.parse(raw) as Subscriber[];
  } catch {
    return [];
  }
}

export async function addSubscriber(
  s: Omit<Subscriber, "createdAt">
): Promise<{ added: boolean }> {
  const all = await readAll();
  const normalized = s.email.trim().toLowerCase();
  if (all.some((x) => x.email.toLowerCase() === normalized)) {
    return { added: false };
  }
  all.push({ ...s, email: normalized, createdAt: new Date().toISOString() });
  await fs.writeFile(FILE, JSON.stringify(all, null, 2));
  return { added: true };
}

/**
 * Forwards a subscriber to Resend's audience if RESEND_API_KEY is configured.
 * Silently no-ops when not configured — so local dev still works.
 */
export async function syncToResend(email: string): Promise<void> {
  const key = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!key || !audienceId) return;

  try {
    await fetch(
      `https://api.resend.com/audiences/${audienceId}/contacts`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${key}`,
        },
        body: JSON.stringify({ email, unsubscribed: false }),
      }
    );
  } catch (e) {
    console.error("Resend sync failed", e);
  }
}
