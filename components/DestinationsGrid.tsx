import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/lib/destinations";

export default function DestinationsGrid() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
      {destinations.map((d, i) => (
        <li key={d.slug} className="group">
          <Link href="/journeys" className="block">
            <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-ink)]">
              <Image
                src={d.image}
                alt={d.name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
              />
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start text-[var(--color-cream)]">
                <span className="eyebrow text-[var(--color-cream)]/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="eyebrow text-[var(--color-cream)]/80">
                  {d.region}
                </span>
              </div>
            </div>
            <div className="mt-5 flex items-baseline justify-between gap-4">
              <h3
                className="font-[family-name:var(--font-fraunces)] text-[1.85rem] leading-[1.1] tracking-[-0.015em]"
                style={{ fontVariationSettings: '"opsz" 144, "wght" 540' }}
              >
                {d.name}
              </h3>
              <span
                aria-hidden
                className="text-[var(--color-stone)] group-hover:text-[var(--color-gold)] group-hover:translate-x-1 transition-all text-lg"
              >
                →
              </span>
            </div>
            <p className="mt-3 text-[0.95rem] text-[var(--color-stone)] leading-[1.65]">
              {d.blurb}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
