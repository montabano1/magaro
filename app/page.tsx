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

      {/* How we're different — the model */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28 lg:py-40">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionEyebrow number="01">How we&rsquo;re different</SectionEyebrow>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={80}>
              <p
                className="font-[family-name:var(--font-fraunces)] text-[clamp(2rem,4vw,3.4rem)] leading-[1.08] tracking-[-0.02em] text-balance"
                style={{ fontVariationSettings: '"opsz" 144' }}
              >
                Most travel companies have a {" "}
                <em className="italic text-[var(--color-sage-dark)]">
                  trip to sell.
                </em>
                {" "}We don&rsquo;t. We have a client to listen to — and
                the whole travel industry to choose from on your behalf.
              </p>
            </Reveal>

            <Reveal delay={200} className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-6 text-[var(--color-stone)] leading-relaxed">
              <p>
                Tour operators sell their own packages. Most agencies
                are paid by the vendors they place you with — the resort,
                the cruise line, the tour operator. We&rsquo;re paid by
                you. That single fact is why we can recommend the answer
                that&rsquo;s actually right, even when it isn&rsquo;t the
                one that pays us most.
              </p>
              <p>
                If a tour operator&rsquo;s package fits, we&rsquo;ll book
                it for you, often at a partner rate. If it almost fits,
                we&rsquo;ll use it as a starting point and tune the rest.
                If nothing off the shelf works, we&rsquo;ll build the
                whole thing from scratch — vendor by vendor. You&rsquo;ll
                always know which is which, and why.
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

      {/* Three answers */}
      <section className="bg-[var(--color-cream-dark)]/60 border-y border-[color-mix(in_oklab,var(--color-stone)_18%,transparent)]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <SectionEyebrow number="02">Three answers</SectionEyebrow>
              <h2
                className="mt-4 text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] tracking-[-0.02em] text-balance"
                style={{ fontVariationSettings: '"opsz" 144' }}
              >
                What &ldquo;agent for you&rdquo;
                <br />
                <em className="italic text-[var(--color-stone)]">
                  actually means.
                </em>
              </h2>
              <p className="mt-6 text-[var(--color-stone)] leading-relaxed max-w-md">
                Most clients land on one of three answers. We&rsquo;ll
                tell you which fits, even when the answer is &ldquo;use
                a tour operator we don&rsquo;t make as much from.&rdquo;
              </p>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-3 gap-x-6 gap-y-10">
              <Answer
                index="i"
                title="A package fits"
                copy="Sometimes a tour operator&rsquo;s itinerary is the right answer. We book it for you under our partner rate, with the upgrades and amenities we&rsquo;ve negotiated, and stay your single point of contact through the trip."
              />
              <Answer
                index="ii"
                title="It almost fits"
                copy="The bones of a package are right; the details aren&rsquo;t. We use it as a starting point — same partner pricing — and tune the hotel, the rooms, the dining, the pacing until it&rsquo;s yours."
              />
              <Answer
                index="iii"
                title="Build from scratch"
                copy="Nothing off the shelf works. We design the trip vendor by vendor — villa, driver, chef, courses, restaurants, transitions. Twenty-five years of relationships, all of them on your side of the table."
              />
            </div>
          </div>
        </div>
      </section>

      {/* What we work on */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <SectionEyebrow number="03">What we work on</SectionEyebrow>
            <h2
              className="mt-4 text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] tracking-[-0.02em] text-balance"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              The trips
              <em className="italic text-[var(--color-stone)]"> we&rsquo;re built for.</em>
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
      </section>

      {/* Destinations grid */}
      <section className="border-t border-[color-mix(in_oklab,var(--color-stone)_22%,transparent)] mx-auto max-w-[1400px] px-6 lg:px-10 py-28 lg:py-36">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <SectionEyebrow number="04">Currently Designing</SectionEyebrow>
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
            <SectionEyebrow number="05">
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
            <SectionEyebrow number="06">How We Work</SectionEyebrow>
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
              copy="Forty minutes, no fee, no pitch. We listen for the kind of trip you actually want — and the kind of traveler you actually are. There&rsquo;s usually a difference."
            />
            <Step
              n="ii"
              title="The blueprint"
              copy="Two routes, sketched. One that uses a tour operator&rsquo;s package if it serves you. One we build vendor by vendor. You see both, you see what each costs, you pick."
            />
            <Step
              n="iii"
              title="The reservations"
              copy="Held under our preferred-partner codes — same prices most agencies access, often better. Upgrades, credits and amenities arranged where they exist."
            />
            <Step
              n="iv"
              title="The companion"
              copy="A live concierge in your timezone for the duration. The flight delay, the rainout, the surprise table. Reachable by the people who reach us."
            />
          </div>
        </div>
      </section>

      {/* Manifesto + Testimonial */}
      <section className="relative bg-[var(--color-ink)] text-[var(--color-cream)] py-28 lg:py-36">
        <div className="grain absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="eyebrow text-[var(--color-gold-light)]">
            On the wall of the atelier
          </p>
          <blockquote
            className="mt-6 font-[family-name:var(--font-fraunces)] text-[clamp(1.8rem,3.4vw,2.9rem)] leading-[1.2] text-balance"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            We don&rsquo;t sell trips. We sell{" "}
            <em className="italic text-[var(--color-gold-light)]">
              judgment
            </em>{" "}
            about what trip is right.
          </blockquote>
          <p className="mt-8 eyebrow text-white/55">— Peter Magaro</p>

          <div className="mt-20 max-w-3xl mx-auto pt-12 border-t border-white/15">
            <span aria-hidden className="font-[family-name:var(--font-fraunces)] text-5xl text-[var(--color-gold)] leading-none block">
              &ldquo;
            </span>
            <blockquote
              className="mt-2 font-[family-name:var(--font-fraunces)] text-[clamp(1.3rem,2.4vw,2rem)] leading-[1.35] text-balance text-white/85"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              They didn&rsquo;t plan our trip — they choreographed it. The
              farmhouse owner&rsquo;s mother made us pasta the first night.
              By the second, we were practically family.
            </blockquote>
            <p className="mt-6 eyebrow text-white/55">
              — A. &amp; M. Calloway · Family of six · Umbria, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Journal + Deals split */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Journal */}
          <div className="lg:col-span-7">
            <div className="flex items-end justify-between mb-10">
              <div>
                <SectionEyebrow number="07">The Journal</SectionEyebrow>
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
            <SectionEyebrow number="08">
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

function Answer({
  index,
  title,
  copy,
}: {
  index: string;
  title: string;
  copy: string;
}) {
  return (
    <div>
      <p className="font-[family-name:var(--font-fraunces)] italic text-[var(--color-gold)] text-base">
        {index}.
      </p>
      <h3
        className="mt-2 font-[family-name:var(--font-fraunces)] text-[1.7rem] leading-[1.15] tracking-[-0.015em]"
        style={{ fontVariationSettings: '"opsz" 144, "wght" 540' }}
      >
        {title}
      </h3>
      <p className="mt-4 text-[0.95rem] text-[var(--color-stone)] leading-[1.65]">
        {copy}
      </p>
    </div>
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
      <p className="font-[family-name:var(--font-fraunces)] italic text-[var(--color-gold)] text-base">
        {index}.
      </p>
      <h3
        className="mt-2 font-[family-name:var(--font-fraunces)] text-[1.85rem] leading-[1.1] tracking-[-0.015em]"
        style={{ fontVariationSettings: '"opsz" 144, "wght" 540' }}
      >
        {title}
      </h3>
      <p className="mt-4 text-[1rem] text-[var(--color-stone)] leading-[1.65]">
        {copy}
      </p>
      {href && (
        <span className="mt-5 inline-flex items-center gap-2 text-[0.78rem] tracking-[0.18em] uppercase font-medium text-[var(--color-sage-dark)]">
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
      <p className="font-[family-name:var(--font-fraunces)] italic text-[var(--color-gold)] text-base">
        {n}.
      </p>
      <h3
        className="mt-2 font-[family-name:var(--font-fraunces)] text-[1.85rem] leading-[1.1] tracking-[-0.015em]"
        style={{ fontVariationSettings: '"opsz" 144, "wght" 540' }}
      >
        {title}
      </h3>
      <p className="mt-4 text-[1rem] text-[var(--color-stone)] leading-[1.65]">
        {copy}
      </p>
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
