import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import EmailCapture from "@/components/EmailCapture";
import SectionEyebrow from "@/components/SectionEyebrow";
import MdxBody from "@/components/MdxBody";
import {
  getItinerary,
  getItinerarySlugs,
  getAllItineraries,
  type Itinerary,
} from "@/lib/itineraries";

export async function generateStaticParams() {
  const slugs = await getItinerarySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const it = await getItinerary(slug);
  if (!it) return { title: "Sample Itinerary" };
  return {
    title: it.title,
    description: it.excerpt,
  };
}

export default async function ItineraryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const it = await getItinerary(slug);
  if (!it) notFound();

  const others = (await getAllItineraries())
    .filter((x) => x.slug !== slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60svh] overflow-hidden bg-[var(--color-ink)] text-[var(--color-cream)]">
        <div className="absolute inset-0">
          {it.cover && (
            <Image
              src={it.cover}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          )}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(20,24,26,0.5) 0%, rgba(20,24,26,0.4) 35%, rgba(20,24,26,0.7) 75%, rgba(20,24,26,0.85) 100%)",
            }}
          />
          <div className="grain absolute inset-0" aria-hidden />
        </div>
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 min-h-[60svh] flex flex-col justify-end pb-16 lg:pb-24 pt-32">
          <p className="eyebrow text-[var(--color-gold-light)]">
            Sample itinerary · {it.duration} · {it.destination}
          </p>
          <h1
            className="mt-4 text-[clamp(2.4rem,6vw,5.5rem)] leading-[1] tracking-[-0.025em] text-balance text-[var(--color-cream)] drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)] max-w-4xl"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            {it.title}
          </h1>
          <p className="mt-5 max-w-2xl text-[var(--color-cream)]/85 leading-relaxed">
            {it.traveler}
          </p>
        </div>
      </section>

      {/* Body + sidebar */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12">
          <article className="lg:col-span-8">
            <MdxBody source={it.body} />
          </article>

          <aside className="lg:col-span-4 lg:pl-10 lg:border-l border-[color-mix(in_oklab,var(--color-stone)_22%,transparent)]">
            <div className="sticky top-32 space-y-10">
              <div>
                <p className="eyebrow text-[var(--color-gold)]">Trip details</p>
                <dl className="mt-4 space-y-4 text-[var(--color-ink)]">
                  <div>
                    <dt className="text-xs tracking-[0.14em] uppercase text-[var(--color-stone)]">
                      Traveler
                    </dt>
                    <dd
                      className="mt-1 font-[family-name:var(--font-fraunces)] text-lg leading-snug"
                      style={{ fontVariationSettings: '"opsz" 144' }}
                    >
                      {it.traveler}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs tracking-[0.14em] uppercase text-[var(--color-stone)]">
                      Destination
                    </dt>
                    <dd
                      className="mt-1 font-[family-name:var(--font-fraunces)] text-lg leading-snug"
                      style={{ fontVariationSettings: '"opsz" 144' }}
                    >
                      {it.destination}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs tracking-[0.14em] uppercase text-[var(--color-stone)]">
                      Duration
                    </dt>
                    <dd
                      className="mt-1 font-[family-name:var(--font-fraunces)] text-lg leading-snug"
                      style={{ fontVariationSettings: '"opsz" 144' }}
                    >
                      {it.duration}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="border-t border-[color-mix(in_oklab,var(--color-stone)_22%,transparent)] pt-8">
                <p className="eyebrow text-[var(--color-gold)]">Begin</p>
                <p
                  className="mt-2 font-[family-name:var(--font-fraunces)] text-2xl leading-tight"
                  style={{ fontVariationSettings: '"opsz" 144' }}
                >
                  Yours would be one of one.
                </p>
                <p className="mt-3 text-sm text-[var(--color-stone)] leading-relaxed">
                  Thirty-minute discovery call, no fee.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 px-5 py-3 bg-[var(--color-brand-blue)] text-[var(--color-cream)] text-xs tracking-[0.16em] uppercase hover:bg-[var(--color-sage-dark)]"
                >
                  Begin Planning <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* More */}
      {others.length > 0 && (
        <section className="bg-[var(--color-cream-dark)]/60 border-y border-[color-mix(in_oklab,var(--color-stone)_18%,transparent)] py-24">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <SectionEyebrow>More itineraries</SectionEyebrow>
            <h2
              className="mt-4 text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] tracking-[-0.02em] text-balance max-w-2xl"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              Other shapes
              <em className="italic text-[var(--color-stone)]"> we&rsquo;ve built.</em>
            </h2>
            <ul className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-12">
              {others.map((o) => (
                <RelatedTile key={o.slug} item={o} />
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Email capture */}
      <section className="mx-auto max-w-3xl px-6 py-28 text-center">
        <p className="eyebrow text-[var(--color-gold)]">By email</p>
        <h2
          className="mt-3 text-3xl lg:text-4xl"
          style={{ fontVariationSettings: '"opsz" 144' }}
        >
          Subscribe to Waypoints.
        </h2>
        <p className="mt-3 text-[var(--color-stone)]">
          New itineraries and partner-only deals before they reach the
          website.
        </p>
        <div className="mt-8">
          <EmailCapture variant="light" source={`itineraries-${it.slug}`} />
        </div>
      </section>
    </>
  );
}

function RelatedTile({ item }: { item: Itinerary }) {
  return (
    <li className="group">
      <Link href={`/itineraries/${item.slug}`} className="block">
        {item.cover && (
          <div className="relative aspect-[3/2] overflow-hidden bg-[var(--color-ink)]">
            <Image
              src={item.cover}
              alt=""
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
            />
          </div>
        )}
        <p className="mt-4 text-xs tracking-[0.14em] uppercase text-[var(--color-stone)]">
          {item.duration} · {item.destination}
        </p>
        <h3
          className="mt-2 font-[family-name:var(--font-fraunces)] text-xl leading-tight tracking-[-0.01em] group-hover:text-[var(--color-sage-dark)] transition-colors"
          style={{ fontVariationSettings: '"opsz" 144' }}
        >
          {item.title}
        </h3>
      </Link>
    </li>
  );
}
