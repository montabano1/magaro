"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "rtd:sticky-email-dismissed";

export default function StickyEmailBar() {
  // Start hidden; reveal once we've checked localStorage and the nav has
  // settled. This avoids a flash on first load and prevents the bar from
  // showing for users who already subscribed or dismissed it.
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const dismissed = window.localStorage.getItem(STORAGE_KEY);
      if (dismissed) return;
    } catch {
      // localStorage may be blocked; fall through and show the bar
    }
    // Slight delay so the bar fades in after the page has rendered
    const t = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(t);
  }, []);

  // Push the nav (and any other element that wants to react) down by the
  // bar's height while the bar is visible. The nav reads --bar-height
  // for its `top` offset.
  useEffect(() => {
    const root = document.documentElement;
    function applyHeight() {
      if (!visible) {
        root.style.setProperty("--bar-height", "0px");
        return;
      }
      // Mobile wraps to two lines; desktop is one line.
      const h = window.innerWidth < 640 ? "60px" : "44px";
      root.style.setProperty("--bar-height", h);
    }
    applyHeight();
    window.addEventListener("resize", applyHeight);
    return () => {
      window.removeEventListener("resize", applyHeight);
      // Clean up on unmount so SSR doesn't leak the offset
      root.style.setProperty("--bar-height", "0px");
    };
  }, [visible]);

  function dismiss() {
    setVisible(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      // ignore
    }
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || state === "loading") return;
    setState("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, source: "sticky-bar" }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Something went wrong.");
      }
      setState("success");
      setMessage("Welcome aboard.");
      // Hide the bar after a short success moment
      setTimeout(() => {
        try {
          window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
        } catch {
          // ignore
        }
        setVisible(false);
      }, 2200);
    } catch (err) {
      setState("error");
      setMessage(
        err instanceof Error ? err.message : "Could not subscribe."
      );
    }
  }

  return (
    <div
      aria-hidden={!visible}
      className={[
        "fixed top-0 inset-x-0 z-50",
        "transition-all duration-500",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-full pointer-events-none",
        "bg-[var(--color-ink)] text-[var(--color-cream)]",
        "border-b border-[color-mix(in_oklab,var(--color-gold)_30%,transparent)]",
      ].join(" ")}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 py-2.5">
          <p className="text-[0.8rem] sm:text-[0.85rem] tracking-[0.04em] text-white/85 leading-snug">
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline-block align-middle text-[var(--color-cream)] mr-1.5 -mt-0.5"
              style={{ width: "22px", height: "22px" }}
            >
              <circle cx="12" cy="12" r="10" />
              <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88" fill="currentColor" stroke="none" />
              <circle cx="12" cy="12" r="1.5" fill="var(--color-ink)" stroke="none" />
            </svg>
            <span
              className="font-[family-name:var(--font-noto)] italic text-[var(--color-cream)] text-[1rem] font-medium tracking-wide"
            >
              Waypoints
            </span>
            <span className="hidden sm:inline">, our travel newsletter — intelligence, field notes, and partner offers delivered directly to you.</span>
            <span className="sm:hidden">, our travel newsletter — field notes and partner offers.</span>
          </p>

          {state === "success" ? (
            <p className="text-[0.85rem] tracking-[0.04em] text-[var(--color-gold-light)] sm:ml-auto">
              {message}
            </p>
          ) : (
            <form
              onSubmit={onSubmit}
              className="flex items-center gap-1 sm:ml-auto sm:flex-1 sm:max-w-md"
              noValidate
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                aria-label="Email address"
                className="flex-1 bg-transparent border-b border-white/40 focus:border-[var(--color-gold-light)] text-[var(--color-cream)] placeholder:text-white/55 outline-none py-1.5 px-1 text-[0.85rem]"
              />
              <button
                type="submit"
                disabled={state === "loading"}
                className="px-3 py-1.5 text-[0.7rem] tracking-[0.18em] uppercase font-semibold text-[var(--color-gold-light)] hover:text-[var(--color-cream)] disabled:opacity-50 transition-colors whitespace-nowrap"
              >
                {state === "loading" ? "…" : "Subscribe"}
                <span aria-hidden className="ml-1.5">→</span>
              </button>
            </form>
          )}

          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss"
            className="absolute top-1.5 right-2 sm:relative sm:top-0 sm:right-0 sm:flex-shrink-0 text-white/50 hover:text-[var(--color-gold-light)] transition-colors p-1"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                d="M1 1L13 13M13 1L1 13"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="square"
              />
            </svg>
          </button>
        </div>
        {state === "error" && (
          <p className="text-[0.7rem] text-[var(--color-gold-light)] pb-1.5">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
