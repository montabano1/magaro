"use client";

import { useState } from "react";

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Could not send.");
      setState("success");
      setMessage(
        data?.message ||
          "Thank you — we’ll be in touch within one business day."
      );
    } catch (err) {
      setState("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (state === "success") {
    return (
      <div className="bg-[var(--color-cream-dark)]/70 p-12 border-l-2 border-[var(--color-gold)]">
        <p className="eyebrow text-[var(--color-gold)]">Received</p>
        <h2
          className="mt-3 font-[family-name:var(--font-fraunces)] text-4xl"
          style={{ fontVariationSettings: '"opsz" 144' }}
        >
          Thank you.
        </h2>
        <p className="mt-4 text-[var(--color-stone)] leading-relaxed">
          {message} Peter or Lisa will reach out personally — usually
          within the same business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-7" noValidate>
      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Phone (optional)" name="phone" type="tel" />
        <Select
          label="Trip type"
          name="tripType"
          options={[
            "Bespoke luxury journey",
            "Golf travel",
            "Multigenerational / family",
            "Honeymoon",
            "Corporate / group",
            "Not sure yet",
          ]}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Destination(s) of interest" name="destination" />
        <Field label="Approximate dates" name="dates" />
      </div>
      <Field label="Approximate party size" name="party" />

      <div>
        <label className="block">
          <span className="eyebrow">Tell us about the trip</span>
          <textarea
            name="message"
            rows={5}
            className="mt-3 w-full bg-transparent border-b border-[var(--color-ink)]/30 focus:border-[var(--color-gold)] outline-none py-3 px-1 resize-none"
            placeholder="Anything we should know — anniversaries, allergies, preferred pace, must-stays."
          />
        </label>
      </div>

      <input
        tabIndex={-1}
        autoComplete="off"
        type="text"
        name="company"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden
      />

      {state === "error" && (
        <p className="text-sm text-red-700">{message}</p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="inline-flex items-center gap-3 px-7 py-4 bg-[var(--color-ink)] text-[var(--color-cream)] text-xs tracking-[0.16em] uppercase hover:bg-[var(--color-sage-dark)] disabled:opacity-50"
      >
        {state === "loading" ? "Sending…" : "Begin the conversation"}
        <span aria-hidden>→</span>
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="eyebrow">
        {label}
        {required && <span className="text-[var(--color-gold)]"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-3 w-full bg-transparent border-b border-[var(--color-ink)]/30 focus:border-[var(--color-gold)] outline-none py-3 px-1"
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="eyebrow">{label}</span>
      <select
        name={name}
        className="mt-3 w-full bg-transparent border-b border-[var(--color-ink)]/30 focus:border-[var(--color-gold)] outline-none py-3 px-1 appearance-none"
        defaultValue=""
      >
        <option value="" disabled>
          Select one…
        </option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
