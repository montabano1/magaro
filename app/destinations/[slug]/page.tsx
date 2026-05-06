import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import EmailCapture from "@/components/EmailCapture";
import SectionEyebrow from "@/components/SectionEyebrow";
import MdxBody from "@/components/MdxBody";
import {
  getDestination,
  getDestinationSlugs,
  getAllDestinations,
  type Destination,
} from "@/lib/destinations";

export async function generateStaticParams() {
  const slugs = await getDestinationSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dest = await getDestination(slug);
  if (!dest) return { title: "Destination" };
  return {
    title: dest.name,
    description: dest.blurb,
  };
}

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dest = await getDestination(slug);
  if (!dest) notFound();

  const others = (await getAllDestinations())
    .filter((d) => d.slug !== slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70svh] overflow-hidden bg-[var(--color-ink)] text-[var(--color-cream)]">
        <div className="absolute inset-0">
          {dest.image && (
            <Image
              src={dest.image}
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
                "linear-gradient(180deg, rgba(20,24,26,0.45) 0%, rgba(20,24,26,0.35) 35%, rgba(20,24,26,0.7) 75%, rgba(20,24,26,0.85) 100%)",
            }}
          />
          <div className="grain absolute inset-0" aria-hidden />
        </div>
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 min-h-[70svh] flex flex-col justify-end pb-16 lg:pb-24 pt-32">
          <p className="eyebrow text-[var(--color-gold-light)]">
            Destination · {dest.region}
          </p>
          <h1
            className="mt-4 text-[clamp(2.8rem,8vw,7rem)] leading-[0.96] tracking-[-0.025em] text-balance text-[var(--color-cream)] drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)] max-w-4xl"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            {dest.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90 leading-relaxed">
            {dest.blurb}
          </p>
        </div>
      </section>

      {/* Body + sidebar */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12">
          <article className="lg:col-span-8">
            <MdxBody source={dest.body} />
          </article>

          <aside className="lg:col-span-4 lg:pl-10 lg:border-l border-[color-mix(in_oklab,var(--color-stone)_22%,transparent)]">
            <div className="sticky top-32 space-y-10">
              {dest.season && (
                <div>
                  <p className="eyebrow text-[var(--color-gold)]">Best season</p>
                  <p
                    className="mt-2 font-[family-name:var(--font-fraunces)] text-2xl leading-tight"
                    style={{ fontVariationSettings: '"opsz" 144' }}
                  >
                    {dest.season}
                  </p>
                </div>
              )}

              {dest.partners && dest.partners.length > 0 && (
                <div>
                  <p className="eyebrow text-[var(--color-gold)]">
                    Partner properties
                  </p>
                  <ul className="mt-3 space-y-2 text-[var(--color-stone)]">
                    {dest.partners.map((p) => (
                      <li
                        key={p}
                        className="font-[family-name:var(--font-fraunces)] text-lg leading-snug"
                        style={{ fontVariationSettings: '"opsz" 144' }}
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="border-t border-[color-mix(in_oklab,var(--color-stone)_22%,transparent)] pt-8">
                <p className="eyebrow text-[var(--color-gold)]">Begin</p>
                <p
                  className="mt-2 font-[family-name:var(--font-fraunces)] text-2xl leading-tight"
                  style={{ fontVariationSettings: '"opsz" 144' }}
                >
                  Tell us about your trip.
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

      {/* Inline email capture */}
      <section className="bg-[var(--color-cream-dark)]/60 border-y border-[color-mix(in_oklab,var(--color-stone)_18%,transparent)] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionEyebrow>Field Notes by email</SectionEyebrow>
          <h2
            className="mt-4 text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.1] tracking-[-0.02em] text-balance"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            More from this part of the world,
            <em className="italic text-[var(--color-stone)]"> in your inbox.</em>
          </h2>
          <p className="mt-4 text-[var(--color-stone)]">
            Subscribe to Waypoints. Field notes, studio notes, partner-only
            deals before the website.
          </p>
          <div className="mt-8">
            <EmailCapture
              variant="light"
              source={`destinations-${dest.slug}`}
            />
          </div>
        </div>
      </section>

      {/* Other destinations */}
      {others.length > 0 && (
        <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28">
          <SectionEyebrow>More destinations</SectionEyebrow>
          <h2
            className="mt-4 text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] tracking-[-0.02em] text-balance max-w-2xl"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            Where else
            <em className="italic text-[var(--color-stone)]"> we&rsquo;re sending clients.</em>
          </h2>
          <ul className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-12">
            {others.map((d) => (
              <RelatedTile key={d.slug} d={d} />
            ))}
          </ul>
          <div className="mt-12">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase border-b border-[var(--color-ink)] pb-1 hover:text-[var(--color-sage-dark)] hover:border-[var(--color-gold)]"
            >
              All destinations <span aria-hidden>→</span>
            </Link>
          </div>
        </section>
      )}
    </>
  );
}

function RelatedTile({ d }: { d: Destination }) {
  return (
    <li className="group">
      <Link href={`/destinations/${d.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-ink)]">
          {d.image && (
            <Image
              src={d.image}
              alt={d.name}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
            />
          )}
        </div>
        <h3
          className="mt-5 font-[family-name:var(--font-fraunces)] text-2xl leading-tight tracking-[-0.01em]"
          style={{ fontVariationSettings: '"opsz" 144' }}
        >
          {d.name}
        </h3>
        <p className="mt-2 text-sm text-[var(--color-stone)]">{d.region}</p>
      </Link>
    </li>
  );
}
