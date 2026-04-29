import Link from "next/link";

export default function Logo({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Remarkable Travel Design home"
      className={`inline-flex items-baseline gap-[0.55rem] transition-colors ${
        light
          ? "text-[var(--color-cream)] drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
          : "text-[var(--color-ink)]"
      } ${className}`}
    >
      <span
        className="font-[family-name:var(--font-fraunces)] text-[1.45rem] leading-none tracking-[-0.01em]"
        style={{ fontVariationSettings: '"opsz" 144' }}
      >
        Remarkable
      </span>
      <span
        aria-hidden
        className="block h-[7px] w-[7px] rounded-full bg-[var(--color-gold)] translate-y-[-2px]"
      />
      <span
        className={`text-[0.78rem] tracking-[0.18em] uppercase font-medium translate-y-[-1px] transition-colors ${
          light ? "text-[var(--color-cream)]" : "text-[var(--color-stone)]"
        }`}
      >
        Travel Design
      </span>
    </Link>
  );
}
