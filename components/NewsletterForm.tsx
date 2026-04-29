"use client";

import { useState } from "react";

export default function NewsletterForm({
  source = "newsletter",
  label = "Get the next dispatch",
}: {
  source?: string;
  label?: string;
}) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("No spam. Unsubscribe in one click.");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setState("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json?.error || "Could not subscribe.");
      setState("success");
      setMessage(
        json?.message || "Welcome aboard. Look for our next dispatch."
      );
      setEmail("");
    } catch (err) {
      setState("error");
      setMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <label
        htmlFor={`nl-${source}`}
        className="block text-[0.78rem] tracking-[0.22em] uppercase font-semibold text-white/85 mb-3 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
      >
        {label}
      </label>
      <input
        id={`nl-${source}`}
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="your@email.com"
        autoComplete="email"
        disabled={state === "success"}
        className="w-full bg-white/10 border border-white/40 focus:border-[var(--color-gold-light)] focus:bg-white/15 outline-none px-5 py-4 text-base text-[var(--color-cream)] placeholder:text-white/60 transition-colors"
      />
      <button
        type="submit"
        disabled={state === "loading" || state === "success"}
        className="mt-3 w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-[var(--color-gold)] hover:bg-[var(--color-gold-light)] text-[var(--color-ink)] text-[0.85rem] tracking-[0.2em] uppercase font-semibold transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {state === "loading"
          ? "Sending…"
          : state === "success"
            ? "Subscribed ✓"
            : "Subscribe"}
        {state === "idle" && <span aria-hidden>→</span>}
      </button>
      <p
        className={[
          "mt-4 text-sm transition-colors",
          state === "error"
            ? "text-red-200"
            : state === "success"
              ? "text-[var(--color-gold-light)]"
              : "text-white/70",
        ].join(" ")}
      >
        {message}
      </p>
    </form>
  );
}
