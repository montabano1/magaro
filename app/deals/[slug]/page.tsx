import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import EmailCapture from "@/components/EmailCapture";
import MdxBody from "@/components/MdxBody";
import { getAllContent, getContent, getSlugs } from "@/lib/content";

export async function generateStaticParams() {
  const slugs = await getSlugs("deals");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const deal = await getContent("deals", slug);
  if (!deal) return {};
  return {
    title: deal.title,
    description: deal.excerpt,
    openGraph: { title: deal.title, description: deal.excerpt, images: deal.cover ? [deal.cover] : undefined },
  };
}

export default async function DealPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const deal = await getContent("deals", slug);
  if (!deal) notFound();

  const all = await getAllContent("deals");
  const more = all.filter((d) => d.slug !== slug).slice(0, 2);

  return (
    <article>
      <header className="pt-36 pb-10 mx-auto max-w-3xl px-6 text-center">
        <p className="eyebrow text-[var(--color-gold)]">
          {deal.tag || "Featured offer"}
          {deal.location && ` · ${deal.location}`}
          {deal.expires && ` · Through ${formatDate(deal.expires)}`}
        </p>
        <h1
          className="mt-5 text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.04] tracking-[-0.025em] text-balance"
          style={{ fontVariationSettings: '"opsz" 144' }}
        >
          {deal.title}
        </h1>
        {deal.excerpt && (
          <p className="mt-5 text-lg text-[var(--color-stone)] max-w-2xl mx-auto leading-relaxed text-pretty">
            {deal.excerpt}
          </p>
        )}
      </header>

      {deal.cover && (
        <div className="relative w-full max-w-[1400px] mx-auto aspect-[16/9] mb-16 overflow-hidden">
          <Image
            src={deal.cover}
            alt=""
            fill
            priority
            sizes="(min-width: 1400px) 1400px, 100vw"
            className="object-cover"
          />
        </div>
      )}

      <div className="mx-auto max-w-2xl px-6 pb-16">
        <MdxBody source={deal.body} />

        <div className="mt-12 p-8 bg-[var(--color-cream-dark)]/70 border-l-2 border-[var(--color-gold)]">
          <p className="eyebrow text-[var(--color-gold)]">Reserve this offer</p>
          <h3
            className="mt-2 font-[family-name:var(--font-fraunces)] text-2xl"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            Limited inventory. Held under our partner code.
          </h3>
          <p className="mt-3 text-[var(--color-stone)]">
            Email{" "}
            <a
              href="mailto:info@remarkabletd.com"
              className="underline underline-offset-2"
            >
              info@remarkabletd.com
            </a>{" "}
            or call <a className="underline underline-offset-2" href="tel:9142223253">914.222.3253</a>{" "}
            to confirm dates and party size. We&rsquo;ll have the room
            held within the hour.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-3 px-6 py-3 bg-[var(--color-ink)] text-[var(--color-cream)] text-xs tracking-[0.16em] uppercase hover:bg-[var(--color-sage-dark)]"
          >
            Begin your inquiry <span aria-hidden>→</span>
          </Link>
        </div>
      </div>

      <section className="mx-auto max-w-2xl px-6 py-12 text-center">
        <p className="eyebrow text-[var(--color-gold)]">Don&rsquo;t miss the next one</p>
        <h2
          className="mt-3 text-3xl"
          style={{ fontVariationSettings: '"opsz" 144' }}
        >
          Subscribers see deals first.
        </h2>
        <div className="mt-6">
          <EmailCapture variant="light" source={`deal-${deal.slug}`} />
        </div>
      </section>

      {more.length > 0 && (
        <section className="bg-[var(--color-cream-dark)]/60 py-20">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <p className="eyebrow">Also currently available</p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-8">
              {more.map((d) => (
                <li key={d.slug}>
                  <Link href={`/deals/${d.slug}`} className="group block">
                    {d.cover && (
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={d.cover}
                          alt=""
                          fill
                          sizes="50vw"
                          className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
                        />
                      </div>
                    )}
                    <p className="mt-4 eyebrow text-[var(--color-gold)]">
                      {d.tag || d.category}
                    </p>
                    <h3
                      className="mt-1 font-[family-name:var(--font-fraunces)] text-2xl group-hover:text-[var(--color-sage-dark)]"
                      style={{ fontVariationSettings: '"opsz" 144' }}
                    >
                      {d.title}
                    </h3>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </article>
  );
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
