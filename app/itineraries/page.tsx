import Image from "next/image";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";
import SectionEyebrow from "@/components/SectionEyebrow";
import { getAllItineraries, type Itinerary } from "@/lib/itineraries";

export const metadata = {
  title: "Sample Itineraries",
  description:
    "Anonymized day-by-day itineraries from trips Remarkable Travel Design has built — multigenerational families in Tuscany, women's reunions in Charleston, golf foursomes at Pebble Beach, solo skiers in Banff. The shape of how we work.",
};

export default async function ItinerariesIndex() {
  const items = await getAllItineraries();

  return (
    <>
      <section className="pt-40 pb-16 mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionEyebrow>Sample Itineraries</SectionEyebrow>
        <h1
          className="mt-4 text-[clamp(2.8rem,7vw,6rem)] leading-[0.98] tracking-[-0.025em] text-balance max-w-4xl"
          style={{ fontVariationSettings: '"opsz" 144' }}
        >
          The shape of trips
          <em className="italic text-[var(--color-stone)]"> we&rsquo;ve designed.</em>
        </h1>
        <p className="mt-6 max-w-2xl text-[var(--color-stone)] leading-relaxed">
          A handful of anonymized examples — a multigenerational family in
          Tuscany, a women&rsquo;s reunion in Charleston, a golf foursome at
          Pebble, a solo skier in Banff — laid out day by day. Yours would
          be entirely different. These exist to show the depth of what we
          actually plan.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 pb-28">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-16">
          {items.map((it) => (
            <ItineraryCard key={it.slug} item={it} />
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-28 text-center">
        <p className="eyebrow text-[var(--color-gold)]">Begin</p>
        <h2
          className="mt-3 text-3xl lg:text-5xl"
          style={{ fontVariationSettings: '"opsz" 144' }}
        >
          Yours would be one of one.
        </h2>
        <p className="mt-4 text-[var(--color-stone)]">
          Thirty-minute discovery call, no fee. Tell us about your trip and
          we&rsquo;ll begin sketching.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-7 py-4 bg-[var(--color-brand-blue)] text-[var(--color-cream)] text-xs tracking-[0.16em] uppercase hover:bg-[var(--color-sage-dark)]"
          >
            Begin Planning <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="mt-12">
          <EmailCapture variant="light" source="itineraries-page" />
        </div>
      </section>
    </>
  );
}

function ItineraryCard({ item }: { item: Itinerary }) {
  return (
    <li className="group">
      <Link href={`/itineraries/${item.slug}`} className="block">
        {item.cover && (
          <div className="relative aspect-[3/2] overflow-hidden bg-[var(--color-ink)]">
            <Image
              src={item.cover}
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
            />
          </div>
        )}
        <p className="mt-5 eyebrow text-[var(--color-gold)]">
          {item.duration} · {item.destination}
        </p>
        <h2
          className="mt-3 font-[family-name:var(--font-fraunces)] text-[clamp(1.5rem,3vw,2.4rem)] leading-[1.1] tracking-[-0.015em] group-hover:text-[var(--color-sage-dark)] transition-colors"
          style={{ fontVariationSettings: '"opsz" 144, "wght" 540' }}
        >
          {item.title}
        </h2>
        <p className="mt-3 text-[var(--color-stone)] leading-[1.65]">
          {item.excerpt}
        </p>
        <p className="mt-5 text-xs tracking-[0.16em] uppercase text-[var(--color-stone)] group-hover:text-[var(--color-sage-dark)]">
          Read the day-by-day →
        </p>
      </Link>
    </li>
  );
}
