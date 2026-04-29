"use client";

import { useState } from "react";

type Variant = "light" | "dark" | "inline";

export default function EmailCapture({
  variant = "light",
  source = "site",
  buttonLabel = "Subscribe",
  placeholder = "your@email.com",
}: {
  variant?: Variant;
  source?: string;
  buttonLabel?: string;
  placeholder?: string;
}) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setState("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, name, source }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Something went wrong.");
      setState("success");
      setMessage(
        data?.message ||
          "Welcome aboard. Look for our next dispatch in your inbox."
      );
    } catch (err) {
      setState("error");
      setMessage(
        err instanceof Error
          ? err.message
          : "Could not subscribe. Please try again."
      );
    }
  }

  const isDark = variant === "dark";

  if (state === "success") {
    return (
      <div
        className={[
          "py-6 px-6 border",
          isDark
            ? "border-[var(--color-gold-light)]/40 bg-white/5 text-[var(--color-cream)]"
            : "border-[var(--color-gold)]/40 bg-white/40 text-[var(--color-ink)]",
        ].join(" ")}
      >
        <p
          className="font-[family-name:var(--font-fraunces)] text-2xl"
          style={{ fontVariationSettings: '"opsz" 144' }}
        >
          Welcome aboard.
        </p>
        <p className={isDark ? "text-white/70 mt-2" : "text-[var(--color-stone)] mt-2"}>
          {message}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full" noValidate>
      <div
        className={[
          "flex flex-col sm:flex-row gap-2 sm:gap-0 sm:items-stretch transition-colors",
          "border-b",
          isDark
            ? "border-white/60 focus-within:border-[var(--color-gold-light)]"
            : "border-[var(--color-ink)]/30 focus-within:border-[var(--color-gold)]",
        ].join(" ")}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          aria-label="Email address"
          className={[
            "flex-1 bg-transparent py-3 px-1 outline-none text-base placeholder:text-[var(--color-stone)]/70",
            isDark
              ? "text-[var(--color-cream)] placeholder:text-white/65 font-medium"
              : "text-[var(--color-ink)]",
          ].join(" ")}
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className={[
            "px-5 py-3 text-[0.8rem] tracking-[0.2em] uppercase font-semibold whitespace-nowrap transition-colors disabled:opacity-50",
            isDark
              ? "text-[var(--color-gold-light)] hover:text-[var(--color-cream)]"
              : "text-[var(--color-ink)] hover:text-[var(--color-sage-dark)]",
          ].join(" ")}
        >
          {state === "loading" ? "Sending…" : buttonLabel}
          <span aria-hidden className="ml-2">
            →
          </span>
        </button>
      </div>
      {/* Honeypot */}
      <input
        tabIndex={-1}
        autoComplete="off"
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden
      />
      {state === "error" && (
        <p
          className={[
            "mt-2 text-xs",
            isDark ? "text-[var(--color-gold-light)]" : "text-red-700",
          ].join(" ")}
        >
          {message}
        </p>
      )}
    </form>
  );
}
