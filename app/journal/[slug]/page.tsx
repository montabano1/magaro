import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import EmailCapture from "@/components/EmailCapture";
import MdxBody from "@/components/MdxBody";
import { getAllContent, getContent, getSlugs } from "@/lib/content";

export async function generateStaticParams() {
  const slugs = await getSlugs("journal");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getContent("journal", slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: post.cover ? [post.cover] : undefined },
  };
}

export default async function JournalPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getContent("journal", slug);
  if (!post) notFound();

  const all = await getAllContent("journal");
  const more = all.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <article>
      {/* Hero */}
      <header className="pt-36 pb-12 mx-auto max-w-3xl px-6 text-center">
        <p className="eyebrow text-[var(--color-gold)]">
          {post.category} · {formatDate(post.date)}{post.readTime ? ` · ${post.readTime}` : ""}
        </p>
        <h1
          className="mt-5 text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.02] tracking-[-0.025em] text-balance"
          style={{ fontVariationSettings: '"opsz" 144' }}
        >
          {post.title}
        </h1>
        {post.excerpt && (
          <p className="mt-6 text-lg text-[var(--color-stone)] max-w-2xl mx-auto leading-relaxed text-pretty">
            {post.excerpt}
          </p>
        )}
        {post.author && (
          <p className="mt-8 eyebrow">By {post.author}</p>
        )}
      </header>

      {post.cover && (
        <div className="relative w-full max-w-[1400px] mx-auto aspect-[16/9] mb-16 overflow-hidden">
          <Image
            src={post.cover}
            alt=""
            fill
            priority
            sizes="(min-width: 1400px) 1400px, 100vw"
            className="object-cover"
          />
        </div>
      )}

      <div className="mx-auto max-w-2xl px-6 pb-16">
        <MdxBody source={post.body} />
      </div>

      <hr className="hairline border-0 h-px max-w-2xl mx-auto" />

      {/* Subscribe */}
      <section className="mx-auto max-w-2xl px-6 py-16 text-center">
        <p className="eyebrow text-[var(--color-gold)]">Continue reading with us</p>
        <h2
          className="mt-3 text-3xl lg:text-4xl"
          style={{ fontVariationSettings: '"opsz" 144' }}
        >
          Get the next entry in your inbox.
        </h2>
        <div className="mt-6">
          <EmailCapture variant="light" source={`journal-${post.slug}`} />
        </div>
      </section>

      {/* More */}
      {more.length > 0 && (
        <section className="bg-[var(--color-cream-dark)]/60 py-20">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <p className="eyebrow">Continue exploring</p>
            <h2
              className="mt-2 text-3xl lg:text-4xl"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              More from the journal
            </h2>
            <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {more.map((p) => (
                <li key={p.slug}>
                  <Link href={`/journal/${p.slug}`} className="group block">
                    <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-cream)]">
                      {p.cover && (
                        <Image
                          src={p.cover}
                          alt=""
                          fill
                          sizes="33vw"
                          className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                        />
                      )}
                    </div>
                    <p className="mt-4 eyebrow">
                      {p.category} · {formatDate(p.date)}
                    </p>
                    <h3
                      className="mt-2 font-[family-name:var(--font-fraunces)] text-xl group-hover:text-[var(--color-sage-dark)]"
                      style={{ fontVariationSettings: '"opsz" 144' }}
                    >
                      {p.title}
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
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
