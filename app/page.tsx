import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionEyebrow from "@/components/SectionEyebrow";
import Reveal from "@/components/Reveal";
import DestinationsGrid from "@/components/DestinationsGrid";
import EmailCapture from "@/components/EmailCapture";
import { getAllDestinations } from "@/lib/destinations";
import { getAllItineraries } from "@/lib/itineraries";

export default async function HomePage() {
  const destinations = await getAllDestinations();
  const itineraries = await getAllItineraries();
  const featuredDestinations = destinations.slice(0, 6);
  const featuredItineraries = itineraries.slice(0, 3);

  return (
    <>
      <Hero />

      {/* §01 — How we're different */}
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
                Every trip starts with a conversation, not a catalog.
                We spend time understanding where you want to go, who
                you&rsquo;re traveling with, and what you want to feel
                on the other side of it. Then we go to work — sourcing
                from the full travel industry, drawing on deep
                relationships with the hotels, guides, and
                operators who consistently deliver.
              </p>
              <p>
                Sometimes a tour operator&rsquo;s itinerary is the right
                answer — we book it at our partner rate with the upgrades
                and amenities we&rsquo;ve arranged. Sometimes it&rsquo;s
                the starting point we tune to fit. Sometimes we build
                the whole thing from scratch, vendor by vendor. You&rsquo;ll
                know which approach serves your trip, and why.
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

      {/* Manifesto */}
      <section className="relative bg-[var(--color-ink)] text-[var(--color-cream)] py-28 lg:py-36">
        <div className="grain absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <p className="eyebrow text-[var(--color-gold-light)] mb-14 text-center">
            On the wall of the studio
          </p>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <blockquote
                className="font-[family-name:var(--font-fraunces)] text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.2]"
                style={{ fontVariationSettings: '"opsz" 144' }}
              >
                We don&rsquo;t sell trips. We translate your{" "}
                <em className="italic text-[var(--color-gold-light)]">ideas</em>{" "}
                into{" "}
                <em className="italic text-[var(--color-gold-light)]">itineraries.</em>
              </blockquote>
              <p className="mt-6 eyebrow text-white/55">— Peter Magaro</p>
            </div>
            <div className="lg:border-l lg:border-white/15 lg:pl-16">
              <blockquote
                className="font-[family-name:var(--font-fraunces)] text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.2]"
                style={{ fontVariationSettings: '"opsz" 144' }}
              >
                I&rsquo;ve been to these places. Not researched them &mdash;{" "}
                <em className="italic text-[var(--color-gold-light)]">been to them.</em>{" "}
                It shows.
              </blockquote>
              <p className="mt-6 eyebrow text-white/55">— Lisa Magaro</p>
            </div>
          </div>
        </div>
      </section>

      {/* §02 — How We Work */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <SectionEyebrow number="02">How We Work</SectionEyebrow>
            <h2
              className="mt-4 text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] tracking-[-0.02em] text-balance"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              From a phone call
              <br />
              <em className="italic text-[var(--color-stone)]">to your return home.</em>
            </h2>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-14">
            <Step
              n="i"
              title="The discovery call"
              copy="Thirty minutes, no fee, no pitch. We want to know what you&rsquo;re thinking — even if it&rsquo;s just &ldquo;beach&rdquo; or &ldquo;somewhere in Europe.&rdquo; Who you&rsquo;re going with, what you&rsquo;ve loved on other trips and what you&rsquo;d skip. By the end we can tell you how we&rsquo;d build it — and whether we&rsquo;re the right fit."
            />
            <Step
              n="ii"
              title="The design"
              copy="If we&rsquo;re a fit, a single design fee engages us as your agent — start to finish. At each meaningful junction — the hotel, the route, the day off, the day with rounds — we lay out real options and you steer. The plan is built decision by decision, not handed over in one shot."
            />
            <Step
              n="iii"
              title="The reservations"
              copy="Booked through preferred-partner relationships — same rate you&rsquo;d pay direct, often better, with upgrades and amenities arranged where they exist. We choose partners based on what&rsquo;s right for your trip, not who pays the highest commission. The design fee is what makes that possible."
            />
            <Step
              n="iv"
              title="The support"
              copy="We stay reachable through your trip home. Most of the time you won&rsquo;t need us — that means it&rsquo;s going well. When something does go sideways — the flight delay, the rainout, the restaurant that went dark — you won&rsquo;t be dealing with it alone."
            />
          </div>
        </div>
      </section>

      {/* §03 — What we work on */}
      <section className="border-t border-[color-mix(in_oklab,var(--color-stone)_22%,transparent)] mx-auto max-w-[1400px] px-6 lg:px-10 py-28">
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
            <p className="mt-6 text-[var(--color-stone)] leading-relaxed">
              Most travel companies organize themselves around destinations &mdash;
              an Italy desk, an Africa desk. We organize around the traveler.
            </p>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            <Pillar
              index="i"
              title="Custom Journeys"
              copy="A week in Italy. Ten days in Southeast Asia. A long weekend somewhere you&rsquo;ve always meant to go. Whatever the destination, we design it around you — the pace, the places, the level of structure. No package required."
            />
            <Pillar
              index="ii"
              title="Family Travel"
              copy="From a long weekend to a two-week adventure — logistics handled, pace set for everyone in the group. We also coordinate multigenerational trips when three generations need to share the same week."
            />
            <Pillar
              index="iii"
              title="Golf Travel"
              copy="Pebble. Kiawah. The Old Course. Tee-time strategy paired with hotel and dining you&rsquo;d return for even without the rounds. For couples, foursomes, and groups up to twenty-four."
              href="/golf"
            />
            <Pillar
              index="iv"
              title="Women&rsquo;s Travel"
              copy="Girls&rsquo; weekends, reunion trips, solo getaways. Lisa designs these with a particular eye for safety, comfort, and the moments that make for good stories afterward."
            />
            <Pillar
              index="v"
              title="Adventure Travel"
              copy="National parks, ski weeks, active itineraries — Banff, Bryce, Zion, and beyond. The kind of trip where the landscape is the point and the logistics need to disappear."
            />
            <Pillar
              index="vi"
              title="Milestone Trips"
              copy="50th birthdays, anniversaries, bucket-list moments, group reunions. When the trip has to be right, not just good — that&rsquo;s exactly when to call."
            />
          </div>
        </div>
      </section>

      {/* §04 — Golf feature */}
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
              Any golf trip.
              <br />
              <em className="italic text-[var(--color-gold-light)]">
                Any size. Done right.
              </em>
            </h2>
            <p className="mt-6 text-white/75 max-w-md leading-relaxed">
              A long weekend at Hilton Head, a buddies trip to Pinehurst,
              or a once-in-a-lifetime week at the Old Course — Peter has
              planned them all. We handle tee times, rooms, dining, and
              logistics so the only thing left to think about is your game.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href="/golf"
                className="inline-flex items-center gap-3 px-7 py-4 bg-[var(--color-brand-blue)] text-[var(--color-cream)] text-xs tracking-[0.16em] uppercase hover:bg-[var(--color-sage-dark)]"
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
                <p className="eyebrow text-[var(--color-gold)]">In the field</p>
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

      {/* §05 — Currently Designing */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28 lg:py-36">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <SectionEyebrow number="05">Currently Designing</SectionEyebrow>
            <h2
              className="mt-4 text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-balance max-w-2xl"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              Six places we&rsquo;re sending clients this season.
            </h2>
          </div>
          <Link
            href="/destinations"
            className="text-xs tracking-[0.16em] uppercase border-b border-[var(--color-ink)] pb-1 self-start lg:self-end hover:text-[var(--color-sage-dark)] hover:border-[var(--color-gold)]"
          >
            View all destinations →
          </Link>
        </div>
        <DestinationsGrid items={featuredDestinations} />
      </section>

      {/* §06 — Sample Itineraries */}
      <section className="border-t border-[color-mix(in_oklab,var(--color-stone)_22%,transparent)] mx-auto max-w-[1400px] px-6 lg:px-10 py-28 lg:py-36">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <SectionEyebrow number="06">Sample Itineraries</SectionEyebrow>
            <h2
              className="mt-4 text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-balance max-w-2xl"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              The shape of trips
              <em className="italic text-[var(--color-stone)]"> we&rsquo;ve designed.</em>
            </h2>
            <p className="mt-4 max-w-xl text-[var(--color-stone)] leading-relaxed">
              Anonymized examples — day by day — of trips we&rsquo;ve built
              for real clients. Yours would be one of one.
            </p>
          </div>
          <Link
            href="/itineraries"
            className="text-xs tracking-[0.16em] uppercase border-b border-[var(--color-ink)] pb-1 self-start lg:self-end hover:text-[var(--color-sage-dark)] hover:border-[var(--color-gold)]"
          >
            All itineraries →
          </Link>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12">
          {featuredItineraries.map((it) => (
            <li key={it.slug} className="group">
              <Link href={`/itineraries/${it.slug}`} className="block">
                {it.cover && (
                  <div className="relative aspect-[3/2] overflow-hidden bg-[var(--color-ink)]">
                    <Image
                      src={it.cover}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                )}
                <p className="mt-4 eyebrow text-[var(--color-gold)]">
                  {it.duration} · {it.destination}
                </p>
                <h3
                  className="mt-2 font-[family-name:var(--font-fraunces)] text-2xl leading-[1.15] tracking-[-0.01em] group-hover:text-[var(--color-sage-dark)] transition-colors"
                  style={{ fontVariationSettings: '"opsz" 144, "wght" 540' }}
                >
                  {it.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-stone)] leading-relaxed line-clamp-3">
                  {it.excerpt}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Voices */}
      <section className="bg-[var(--color-cream-dark)]/60 border-y border-[color-mix(in_oklab,var(--color-stone)_18%,transparent)] py-24 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <SectionEyebrow>Voices</SectionEyebrow>
              <h2
                className="mt-4 text-[clamp(1.8rem,3.4vw,3rem)] leading-[1.05] tracking-[-0.02em] text-balance max-w-2xl"
                style={{ fontVariationSettings: '"opsz" 144' }}
              >
                What clients say
                <em className="italic text-[var(--color-stone)]"> when they get home.</em>
              </h2>
            </div>
            <Link
              href="/testimonials"
              className="text-xs tracking-[0.16em] uppercase border-b border-[var(--color-ink)] pb-1 self-start lg:self-end hover:text-[var(--color-sage-dark)] hover:border-[var(--color-gold)]"
            >
              All testimonials →
            </Link>
          </div>
          <ul className="grid sm:grid-cols-3 gap-x-8 gap-y-12">
            <HomeQuote
              text="All we had to do was get on the plane and Pete handled everything else. Fantastic trip with no stress (other than the actual golf)."
              attribution="K.C. · Wisconsin · Tarrytown, NY"
            />
            <HomeQuote
              text="What stood out most was the pacing — all the downtime we needed to relax and catch up, while still experiencing the rich history, culture, and beauty of each place."
              attribution="A.S. · Charleston & Sedona · Harvard, MA"
            />
            <HomeQuote
              text="Pete is excellent as a guide and agent. He comes to this as a fine golfer and someone with fine attention to detail."
              attribution="M.W. · Pebble Beach · New York, NY"
            />
          </ul>
        </div>
      </section>

      {/* §07 — Waypoints */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <SectionEyebrow number="07">Waypoints</SectionEyebrow>
            <h2
              className="mt-4 text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.05] tracking-[-0.02em]"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              A letter from the studio.
            </h2>
            <div className="mt-6 max-w-lg space-y-4 text-[var(--color-stone)] leading-relaxed">
              <p>
                Waypoints is our newsletter — field notes from places we&rsquo;ve
                been, introductions to partners worth knowing, and partner-only
                offers before they reach the site. Written by Peter and Lisa,
                sent when there&rsquo;s something worth saying.
              </p>
              <p>
                No algorithm. No weekly cadence for its own sake. When an
                edition goes out, it&rsquo;s because something happened worth
                writing about.
              </p>
            </div>
            <div className="mt-10 max-w-md">
              <EmailCapture variant="light" source="home-waypoints" />
            </div>
          </div>
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


function HomeQuote({
  text,
  attribution,
}: {
  text: string;
  attribution: string;
}) {
  return (
    <li>
      <span
        aria-hidden
        className="font-[family-name:var(--font-fraunces)] text-3xl text-[var(--color-gold)] leading-none block"
      >
        &ldquo;
      </span>
      <blockquote
        className="mt-2 font-[family-name:var(--font-fraunces)] text-[1.05rem] lg:text-[1.1rem] leading-[1.55] text-[var(--color-ink)]"
        style={{ fontVariationSettings: '"opsz" 144' }}
      >
        {text}
      </blockquote>
      <p className="mt-5 text-[0.72rem] tracking-[0.18em] uppercase text-[var(--color-stone)]">
        {attribution}
      </p>
    </li>
  );
}

