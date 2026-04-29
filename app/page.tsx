import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionEyebrow from "@/components/SectionEyebrow";
import Reveal from "@/components/Reveal";
import DestinationsGrid from "@/components/DestinationsGrid";
import EmailCapture from "@/components/EmailCapture";
import { getAllContent } from "@/lib/content";

export default async function HomePage() {
  const journal = await getAllContent("journal");
  const deals = await getAllContent("deals");
  const featuredJournal = journal.slice(0, 3);
  const featuredDeal = deals[0];

  return (
    <>
      <Hero />

      {/* The Atelier — intro */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28 lg:py-40">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionEyebrow number="01">The Atelier</SectionEyebrow>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={80}>
              <p
                className="font-[family-name:var(--font-fraunces)] text-[clamp(2rem,4vw,3.4rem)] leading-[1.08] tracking-[-0.02em] text-balance"
                style={{ fontVariationSettings: '"opsz" 144' }}
              >
                We design private journeys for clients who measure travel
                in {" "}
                <em className="italic text-[var(--color-sage-dark)]">
                  small, perfect moments
                </em>
                {" "}— a quiet table in Positano, a 7:12 tee time at Old Head,
                a hotel manager who already knows your name.
              </p>
            </Reveal>

            <Reveal delay={200} className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-6 text-[var(--color-stone)] leading-relaxed">
              <p>
                Founded by Peter and Lisa Magaro — a brother-sister team
                with five decades between them — Remarkable is built on
                personal acquaintance. With the families who own the
                villas. The course pros at the gates. The chef who&rsquo;ll
                hold a corner table when a flight goes long.
              </p>
              <p>
                Nothing is templated. Nothing is mass-emailed. Every
                itinerary begins with a conversation, and ends with a
                debrief over a glass of something good.
              </p>
            </Reveal>

            <Reveal delay={320} className="mt-12">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-xs tracking-[0.16em] uppercase border-b border-[var(--color-ink)] pb-1 hover:border-[var(--color-gold)] hover:text-[var(--color-sage-dark)]"
              >
                Meet Peter &amp; Lisa <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pillars — what we do */}
      <section className="bg-[var(--color-cream-dark)]/60 border-y border-[color-mix(in_oklab,var(--color-stone)_18%,transparent)]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <SectionEyebrow number="02">Practices</SectionEyebrow>
              <h2
                className="mt-4 text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] tracking-[-0.02em] text-balance"
                style={{ fontVariationSettings: '"opsz" 144' }}
              >
                Four houses,
                <br />
                <em className="italic text-[var(--color-stone)]">one atelier.</em>
              </h2>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-12">
              <Pillar
                index="i"
                title="Private Journeys"
                copy="Multi-week itineraries across Europe, the Mediterranean, the South Pacific — private guides, off-market villas, the occasional helicopter."
              />
              <Pillar
                index="ii"
                title="Golf Travel"
                copy="Pebble. Sand Valley. The Old Course. Tee-time strategy paired with hotel and dining you&rsquo;d return for even without the rounds."
                href="/golf"
              />
              <Pillar
                index="iii"
                title="Multigenerational"
                copy="Eight to eighty, three generations under one roof — coordinated rooms, parallel itineraries, and one impossibly good family table."
              />
              <Pillar
                index="iv"
                title="Concierge in Residence"
                copy="During your trip, a single point of contact in your timezone — for the late train, the booked-out restaurant, the small surprise."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Destinations grid */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28 lg:py-36">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <SectionEyebrow number="03">Currently Designing</SectionEyebrow>
            <h2
              className="mt-4 text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-balance max-w-2xl"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              Six places we&rsquo;re sending clients this season.
            </h2>
          </div>
          <Link
            href="/journeys"
            className="text-xs tracking-[0.16em] uppercase border-b border-[var(--color-ink)] pb-1 self-start lg:self-end hover:text-[var(--color-sage-dark)] hover:border-[var(--color-gold)]"
          >
            View all journeys →
          </Link>
        </div>
        <DestinationsGrid />
      </section>

      {/* Golf feature */}
      <section className="relative bg-[var(--color-sage-dark)] text-[var(--color-cream)] overflow-hidden">
        <div className="grain absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-28 lg:py-36 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <SectionEyebrow number="04">
              <span className="text-[var(--color-gold-light)]">A House Specialty</span>
            </SectionEyebrow>
            <h2
              className="mt-5 text-[clamp(2.25rem,5vw,4.5rem)] leading-[1] tracking-[-0.02em] text-balance text-[var(--color-cream)]"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              Where every golf journey
              <br />
              <em className="italic text-[var(--color-gold-light)]">
                becomes remarkable.
              </em>
            </h2>
            <p className="mt-6 text-white/75 max-w-md leading-relaxed">
              Thirty years of personal trips behind every tee time. We pair
              the courses you&rsquo;ve dreamed of with rooms, partners and
              dinners that hold up between rounds. Pebble, Bandon, Old
              Head, Cabot — and the quieter ones we save for clients
              who&rsquo;ve earned the secret.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href="/golf"
                className="inline-flex items-center gap-3 px-7 py-4 bg-[var(--color-gold)] text-[var(--color-ink)] text-xs tracking-[0.16em] uppercase hover:bg-[var(--color-gold-light)]"
              >
                Explore Golf Travel
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/contact"
                className="text-xs tracking-[0.16em] uppercase border-b border-white/40 pb-1 hover:text-[var(--color-gold-light)]"
              >
                Plan a foursome
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
              <Stat label="Tee times" value="48 partners" />
              <Stat label="Continents" value="3" />
              <Stat label="Group sizes" value="2 – 24" />
            </div>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative aspect-[4/5] lg:aspect-[5/6]">
              <Image
                src="/photos/old-head.webp"
                alt="A golfer at Old Head, Kinsale, Ireland"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute -bottom-3 -left-3 lg:-bottom-5 lg:-left-5 bg-[var(--color-cream)] text-[var(--color-ink)] px-5 py-4 max-w-[260px]">
                <p className="eyebrow">Featured · Now booking</p>
                <p
                  className="mt-1 font-[family-name:var(--font-fraunces)] text-xl"
                  style={{ fontVariationSettings: '"opsz" 144' }}
                >
                  Southwest Ireland · Autumn &rsquo;26
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <SectionEyebrow number="05">How We Work</SectionEyebrow>
            <h2
              className="mt-4 text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] tracking-[-0.02em] text-balance"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              From a phone call
              <br />
              <em className="italic text-[var(--color-stone)]">to your front door.</em>
            </h2>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-14">
            <Step
              n="i"
              title="The conversation"
              copy="Forty minutes, no fee. We listen for the kind of trip — and the kind of traveler."
            />
            <Step
              n="ii"
              title="The blueprint"
              copy="A first-pass itinerary, two routes deep. Hotels, courses, transitions, the rhythm of your days."
            />
            <Step
              n="iii"
              title="The reservations"
              copy="Held under our partners&rsquo; preferred-rate codes. Upgrades, credits and amenities where they exist."
            />
            <Step
              n="iv"
              title="The companion"
              copy="A live concierge in your timezone for the duration. The flight delay, the rainout, the surprise table."
            />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="relative bg-[var(--color-ink)] text-[var(--color-cream)] py-28 lg:py-36">
        <div className="grain absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <span aria-hidden className="font-[family-name:var(--font-fraunces)] text-7xl text-[var(--color-gold)] leading-none">
            &ldquo;
          </span>
          <blockquote
            className="mt-2 font-[family-name:var(--font-fraunces)] text-[clamp(1.6rem,3vw,2.6rem)] leading-[1.25] text-balance"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            They didn&rsquo;t plan our trip — they choreographed it. The
            farmhouse owner&rsquo;s mother made us pasta the first night.
            By the second, we were practically family.
          </blockquote>
          <p className="mt-10 eyebrow text-white/60">
            — A. &amp; M. Calloway · Family of six · Umbria, 2025
          </p>
        </div>
      </section>

      {/* Journal + Deals split */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Journal */}
          <div className="lg:col-span-7">
            <div className="flex items-end justify-between mb-10">
              <div>
                <SectionEyebrow number="06">The Journal</SectionEyebrow>
                <h2
                  className="mt-4 text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.05] tracking-[-0.02em]"
                  style={{ fontVariationSettings: '"opsz" 144' }}
                >
                  Field notes &amp; dispatches.
                </h2>
              </div>
              <Link
                href="/journal"
                className="text-xs tracking-[0.16em] uppercase border-b border-[var(--color-ink)] pb-1 hover:text-[var(--color-sage-dark)] hover:border-[var(--color-gold)]"
              >
                All entries →
              </Link>
            </div>

            <ul className="divide-y divide-[color-mix(in_oklab,var(--color-stone)_22%,transparent)]">
              {featuredJournal.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/journal/${p.slug}`}
                    className="group grid grid-cols-12 gap-6 py-7 items-center"
                  >
                    <div className="col-span-3 sm:col-span-2 relative aspect-[4/5] overflow-hidden bg-[var(--color-cream-dark)]">
                      {p.cover && (
                        <Image
                          src={p.cover}
                          alt=""
                          fill
                          sizes="120px"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      )}
                    </div>
                    <div className="col-span-9 sm:col-span-10">
                      <p className="eyebrow text-[var(--color-stone)]">
                        {p.category} · {formatDate(p.date)}
                      </p>
                      <h3
                        className="mt-1 font-[family-name:var(--font-fraunces)] text-xl sm:text-2xl tracking-[-0.01em] group-hover:text-[var(--color-sage-dark)] transition-colors"
                        style={{ fontVariationSettings: '"opsz" 144' }}
                      >
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm text-[var(--color-stone)] leading-relaxed line-clamp-2">
                        {p.excerpt}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Deals */}
          <aside className="lg:col-span-5 lg:pl-10 lg:border-l border-[color-mix(in_oklab,var(--color-stone)_18%,transparent)]">
            <SectionEyebrow number="07">
              <span className="text-[var(--color-gold)]">Current Offers</span>
            </SectionEyebrow>
            <h2
              className="mt-4 text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.05] tracking-[-0.02em]"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              Quietly remarkable deals.
            </h2>
            <p className="mt-3 text-sm text-[var(--color-stone)] leading-relaxed">
              Partner-only rates and seasonal openings, refreshed weekly.
              Subscribers see them first.
            </p>

            {featuredDeal && (
              <Link
                href={`/deals/${featuredDeal.slug}`}
                className="group mt-8 block bg-[var(--color-cream-dark)]/60 hover:bg-[var(--color-cream-dark)] transition-colors"
              >
                {featuredDeal.cover && (
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={featuredDeal.cover}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                )}
                <div className="p-6">
                  <p className="eyebrow text-[var(--color-gold)]">
                    {featuredDeal.tag || "Featured offer"}
                    {featuredDeal.expires &&
                      ` · Through ${formatDate(featuredDeal.expires)}`}
                  </p>
                  <h3
                    className="mt-2 font-[family-name:var(--font-fraunces)] text-2xl tracking-[-0.01em]"
                    style={{ fontVariationSettings: '"opsz" 144' }}
                  >
                    {featuredDeal.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-stone)] leading-relaxed">
                    {featuredDeal.excerpt}
                  </p>
                  <p className="mt-5 text-xs tracking-[0.16em] uppercase text-[var(--color-ink)] group-hover:text-[var(--color-sage-dark)]">
                    See the full offer →
                  </p>
                </div>
              </Link>
            )}

            <div className="mt-8 p-6 border border-[color-mix(in_oklab,var(--color-stone)_25%,transparent)]">
              <p className="eyebrow text-[var(--color-stone)]">Get them first</p>
              <p
                className="mt-2 font-[family-name:var(--font-fraunces)] text-xl leading-[1.2]"
                style={{ fontVariationSettings: '"opsz" 144' }}
              >
                Join the Atelier Letter — deals before the website.
              </p>
              <div className="mt-4">
                <EmailCapture variant="light" source="home-deals" />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Pillar({
  index,
  title,
  copy,
  href,
}: {
  index: string;
  title: string;
  copy: string;
  href?: string;
}) {
  const Inner = (
    <>
      <p className="font-[family-name:var(--font-fraunces)] italic text-[var(--color-gold)] text-sm">
        {index}.
      </p>
      <h3
        className="mt-2 font-[family-name:var(--font-fraunces)] text-2xl tracking-[-0.01em]"
        style={{ fontVariationSettings: '"opsz" 144' }}
      >
        {title}
      </h3>
      <p className="mt-3 text-[var(--color-stone)] leading-relaxed">{copy}</p>
      {href && (
        <span className="mt-4 inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase text-[var(--color-sage-dark)]">
          Explore <span aria-hidden>→</span>
        </span>
      )}
    </>
  );
  return href ? (
    <Link href={href} className="block group">
      {Inner}
    </Link>
  ) : (
    <div>{Inner}</div>
  );
}

function Step({ n, title, copy }: { n: string; title: string; copy: string }) {
  return (
    <div>
      <p className="font-[family-name:var(--font-fraunces)] italic text-[var(--color-gold)]">
        {n}.
      </p>
      <h3
        className="mt-2 font-[family-name:var(--font-fraunces)] text-2xl tracking-[-0.01em]"
        style={{ fontVariationSettings: '"opsz" 144' }}
      >
        {title}
      </h3>
      <p className="mt-3 text-[var(--color-stone)] leading-relaxed">{copy}</p>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="eyebrow text-white/50">{label}</p>
      <p
        className="mt-1 font-[family-name:var(--font-fraunces)] text-xl text-[var(--color-cream)]"
        style={{ fontVariationSettings: '"opsz" 144' }}
      >
        {value}
      </p>
    </div>
  );
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
