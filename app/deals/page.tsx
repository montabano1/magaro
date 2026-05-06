import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import SectionEyebrow from "@/components/SectionEyebrow";
import { getAllContent } from "@/lib/content";

export const metadata = { title: "Deals & Offers" };

export default async function DealsIndex() {
  const deals = await getAllContent("deals");

  return (
    <>
      <section className="pt-40 pb-16 mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionEyebrow>
          <span className="text-[var(--color-gold)]">Current Offers</span>
        </SectionEyebrow>
        <h1
          className="mt-4 text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.98] tracking-[-0.025em] text-balance max-w-4xl"
          style={{ fontVariationSettings: '"opsz" 144' }}
        >
          Quietly remarkable
          <em className="italic text-[var(--color-stone)]"> deals.</em>
        </h1>
        <p className="mt-6 max-w-2xl text-[var(--color-stone)] leading-relaxed">
          Partner-only rates, seasonal openings and the occasional last-minute
          gem. Subscribers see them first — usually before the websites are
          updated.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 pb-20">
        <ul className="grid lg:grid-cols-2 gap-x-8 gap-y-14">
          {deals.map((d) => (
            <li key={d.slug}>
              <Link
                href={`/deals/${d.slug}`}
                className="group block bg-[var(--color-cream-dark)]/50 hover:bg-[var(--color-cream-dark)] transition-colors"
              >
                {d.cover && (
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={d.cover}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
                    />
                    {d.tag && (
                      <span className="absolute top-4 left-4 bg-[var(--color-cream)] text-[var(--color-ink)] px-3 py-1 text-[0.65rem] tracking-[0.18em] uppercase">
                        {d.tag}
                      </span>
                    )}
                  </div>
                )}
                <div className="p-7">
                  <p className="eyebrow text-[var(--color-gold)]">
                    {d.location || d.category}
                    {d.expires && ` · Through ${formatDate(d.expires)}`}
                  </p>
                  <h2
                    className="mt-3 font-[family-name:var(--font-fraunces)] text-3xl tracking-[-0.01em] group-hover:text-[var(--color-sage-dark)]"
                    style={{ fontVariationSettings: '"opsz" 144' }}
                  >
                    {d.title}
                  </h2>
                  <p className="mt-3 text-[var(--color-stone)] leading-relaxed">
                    {d.excerpt}
                  </p>
                  <p className="mt-6 text-xs tracking-[0.16em] uppercase">
                    See the offer →
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <NewsletterCallout />
      </section>
    </>
  );
}

function NewsletterCallout() {
  return (
    <div className="mt-20 relative bg-[var(--color-sage-dark)] text-[var(--color-cream)] overflow-hidden">
      <div className="grain absolute inset-0 opacity-40" aria-hidden />

      {/* Gold accent rule */}
      <span
        aria-hidden
        className="absolute left-0 top-0 bottom-0 w-[6px] bg-[var(--color-gold)]"
      />

      <div className="relative p-10 lg:p-14 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <p className="text-[0.85rem] tracking-[0.22em] uppercase font-semibold text-[var(--color-gold-light)]">
            Waypoints
          </p>
          <h2
            className="mt-4 text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.02] tracking-[-0.025em] text-balance text-[var(--color-cream)]"
            style={{ fontVariationSettings: '"opsz" 144, "wght" 480' }}
          >
            Most of our offers
            <em className="italic text-[var(--color-gold-light)]">
              {" "}never reach this page.
            </em>
          </h2>
          <p className="mt-5 text-[1.05rem] text-white/85 leading-[1.65] max-w-md">
            Partner deals come and go in 48 hours. Subscribers see them
            first — the rest get what&rsquo;s left, if anything.
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/75">
            <li className="flex items-center gap-2">
              <span aria-hidden className="h-1 w-1 rounded-full bg-[var(--color-gold)]" />
              One dispatch a month
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden className="h-1 w-1 rounded-full bg-[var(--color-gold)]" />
              Subscriber-only rates
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden className="h-1 w-1 rounded-full bg-[var(--color-gold)]" />
              Unsubscribe in one click
            </li>
          </ul>
        </div>

        <div className="lg:col-span-5">
          <NewsletterForm source="deals-callout" />
        </div>
      </div>
    </div>
  );
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}
