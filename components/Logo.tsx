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
        light ? "text-[var(--color-cream)]" : "text-[var(--color-ink)]"
      } ${className}`}
    >
      <span
        className="font-[family-name:var(--font-fraunces)] text-[1.35rem] leading-none tracking-[-0.01em]"
        style={{ fontVariationSettings: '"opsz" 144' }}
      >
        Remarkable
      </span>
      <span
        aria-hidden
        className="block h-[6px] w-[6px] rounded-full bg-[var(--color-gold)] translate-y-[-2px]"
      />
      <span
        className={`eyebrow translate-y-[-1px] transition-colors ${
          light ? "text-[var(--color-cream)]/80" : ""
        }`}
      >
        Travel Design
      </span>
    </Link>
  );
}
