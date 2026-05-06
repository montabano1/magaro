import Image from "next/image";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";
import SectionEyebrow from "@/components/SectionEyebrow";
import { getAllContent } from "@/lib/content";

export const metadata = { title: "The Journal" };

export default async function JournalIndex() {
  const posts = await getAllContent("journal");
  const [feature, ...rest] = posts;

  return (
    <>
      {/* Page header */}
      <section className="pt-40 pb-20 mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionEyebrow>The Journal</SectionEyebrow>
        <h1
          className="mt-4 text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.98] tracking-[-0.025em] text-balance max-w-4xl"
          style={{ fontVariationSettings: '"opsz" 144' }}
        >
          Field notes, dispatches &amp;
          <em className="italic text-[var(--color-stone)]"> the small details</em>{" "}
          we&rsquo;re thinking about.
        </h1>
        <p className="mt-6 max-w-2xl text-[var(--color-stone)] leading-relaxed">
          Stories from the road, partner introductions, and the considered
          recommendations that don&rsquo;t fit on an itinerary. Updated
          regularly — subscribe and we&rsquo;ll bring them to you.
        </p>
      </section>

      {feature && (
        <section className="mx-auto max-w-[1400px] px-6 lg:px-10 mb-20">
          <Link
            href={`/journal/${feature.slug}`}
            className="group grid lg:grid-cols-12 gap-10 items-center"
          >
            <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-[var(--color-cream-dark)]">
              {feature.cover && (
                <Image
                  src={feature.cover}
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                />
              )}
            </div>
            <div className="lg:col-span-5">
              <p className="eyebrow text-[var(--color-gold)]">Featured</p>
              <h2
                className="mt-3 text-[clamp(1.8rem,3.5vw,3rem)] leading-[1.05] tracking-[-0.02em] group-hover:text-[var(--color-sage-dark)] transition-colors"
                style={{ fontVariationSettings: '"opsz" 144' }}
              >
                {feature.title}
              </h2>
              <p className="mt-4 text-[var(--color-stone)] leading-relaxed">
                {feature.excerpt}
              </p>
              <p className="mt-6 eyebrow">
                {feature.category} · {formatDate(feature.date)}{feature.readTime ? ` · ${feature.readTime}` : ""}
              </p>
            </div>
          </Link>
        </section>
      )}

      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 pb-28">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
          {rest.map((p) => (
            <li key={p.slug}>
              <Link href={`/journal/${p.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-cream-dark)]">
                  {p.cover && (
                    <Image
                      src={p.cover}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, 50vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                    />
                  )}
                </div>
                <p className="mt-4 eyebrow">
                  {p.category} · {formatDate(p.date)}
                </p>
                <h3
                  className="mt-2 font-[family-name:var(--font-fraunces)] text-2xl leading-tight group-hover:text-[var(--color-sage-dark)] transition-colors"
                  style={{ fontVariationSettings: '"opsz" 144' }}
                >
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-stone)] leading-relaxed line-clamp-3">
                  {p.excerpt}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-24 max-w-2xl mx-auto text-center bg-[var(--color-cream-dark)]/60 p-10 lg:p-14">
          <p className="eyebrow">Waypoints</p>
          <h2
            className="mt-3 text-3xl lg:text-4xl"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            Read it before it&rsquo;s posted.
          </h2>
          <p className="mt-3 text-[var(--color-stone)]">
            Subscribers get our journal entries and partner-only deals first.
          </p>
          <div className="mt-6">
            <EmailCapture variant="light" source="journal-index" />
          </div>
        </div>
      </section>
    </>
  );
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
