"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "/journeys", label: "Journeys" },
  { href: "/golf", label: "Golf" },
  { href: "/journal", label: "Journal" },
  { href: "/deals", label: "Deals" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Pages with a dark/photographic hero where the nav floats over imagery.
  // On these, when NOT scrolled, the nav uses light text.
  const hasDarkHero =
    pathname === "/" || pathname.startsWith("/golf");
  const lightMode = hasDarkHero && !scrolled && !open;

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-40 transition-all duration-500",
        scrolled
          ? "bg-[var(--color-cream)]/85 backdrop-blur-md border-b border-[color-mix(in_oklab,var(--color-stone)_18%,transparent)]"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex items-center justify-between h-[68px]">
          <Logo light={lightMode} />

          <nav className="hidden lg:flex items-center gap-9">
            {links.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    "relative text-[0.82rem] tracking-[0.06em] uppercase transition-colors",
                    lightMode
                      ? active
                        ? "text-[var(--color-cream)]"
                        : "text-[var(--color-cream)]/70 hover:text-[var(--color-cream)]"
                      : active
                        ? "text-[var(--color-ink)]"
                        : "text-[var(--color-stone)] hover:text-[var(--color-ink)]",
                  ].join(" ")}
                >
                  {link.label}
                  {active && (
                    <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-[3px] w-[3px] rounded-full bg-[var(--color-gold)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className={[
                "hidden sm:inline-flex items-center gap-2 px-4 py-2 text-[0.78rem] tracking-[0.12em] uppercase transition-colors",
                lightMode
                  ? "text-[var(--color-ink)] bg-[var(--color-cream)] hover:bg-[var(--color-gold-light)]"
                  : "text-[var(--color-cream)] bg-[var(--color-ink)] hover:bg-[var(--color-sage-dark)]",
              ].join(" ")}
            >
              Begin Planning
              <span aria-hidden>→</span>
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              className="lg:hidden flex flex-col gap-[5px] p-2"
              onClick={() => setOpen((v) => !v)}
            >
              <span
                className={[
                  "block h-[1px] w-5 transition-transform",
                  lightMode ? "bg-[var(--color-cream)]" : "bg-[var(--color-ink)]",
                  open ? "translate-y-[6px] rotate-45" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "block h-[1px] w-5 transition-opacity",
                  lightMode ? "bg-[var(--color-cream)]" : "bg-[var(--color-ink)]",
                  open ? "opacity-0" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "block h-[1px] w-5 transition-transform",
                  lightMode ? "bg-[var(--color-cream)]" : "bg-[var(--color-ink)]",
                  open ? "-translate-y-[6px] -rotate-45" : "",
                ].join(" ")}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={[
          "lg:hidden overflow-hidden bg-[var(--color-cream)] border-t border-[color-mix(in_oklab,var(--color-stone)_18%,transparent)] transition-[max-height] duration-500",
          open ? "max-h-[400px]" : "max-h-0",
        ].join(" ")}
      >
        <nav className="px-6 py-6 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-[family-name:var(--font-fraunces)] text-2xl text-[var(--color-ink)]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 inline-flex items-center justify-center px-4 py-3 text-xs tracking-[0.12em] uppercase text-[var(--color-cream)] bg-[var(--color-ink)]"
          >
            Begin Planning
          </Link>
        </nav>
      </div>
    </header>
  );
}
