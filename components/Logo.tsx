import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Remarkable Travel Design home"
      className={`inline-flex items-baseline gap-[0.55rem] ${className}`}
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
      <span className="eyebrow translate-y-[-1px]">Travel Design</span>
    </Link>
  );
}
