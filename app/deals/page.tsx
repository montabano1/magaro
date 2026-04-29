import Image from "next/image";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";
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

        <div className="mt-20 bg-[var(--color-ink)] text-[var(--color-cream)] p-10 lg:p-16 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <p className="eyebrow text-[var(--color-gold-light)]">Inbox-first</p>
            <h2
              className="mt-3 text-3xl lg:text-4xl text-[var(--color-cream)]"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              Most of our offers never make this page.
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              Partner deals come and go in 48 hours. Subscribers get them
              first; the rest get what&rsquo;s left.
            </p>
          </div>
          <div className="lg:col-span-6">
            <EmailCapture variant="dark" source="deals-index" />
          </div>
        </div>
      </section>
    </>
  );
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}
