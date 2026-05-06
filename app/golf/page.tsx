import Image from "next/image";
import Link from "next/link";
import SectionEyebrow from "@/components/SectionEyebrow";

export const metadata = {
  title: "Golf Travel",
  description:
    "Golf travel designed around your group — Pebble, Pinehurst, Streamsong, Old Head, the Old Course. Thirty years of personal trips behind every tee time.",
};

const courses = [
  {
    name: "Pebble Beach",
    region: "California",
    image: "/photos/pebble-18.webp",
    note: "The 18th along the Pacific. Caddies, The Lodge, drinks around the fire pits at Spanish Bay while the bagpiper plays.",
  },
  {
    name: "Pinehurst",
    region: "North Carolina",
    image: "/photos/pinehurst.webp",
    note: "Eleven courses on one property. Everyone comes for No. 2 — don’t sleep on No. 4.",
  },
  {
    name: "Streamsong",
    region: "Florida",
    image: "/photos/streamsong.webp",
    note: "Walking only, all winter. Red, Blue, and Black — three architects, three very different rounds.",
  },
  {
    name: "Kohler · Wisconsin",
    region: "Wisconsin",
    image: "/photos/erin-hills.webp",
    note: "Whistling Straits, Black Wolf Run, Erin Hills. The upper Midwest’s case that great golf doesn’t require an ocean.",
  },
  {
    name: "Old Head",
    region: "Kinsale, Ireland",
    image: "/photos/old-head.webp",
    note: "A links on a cliff above Kinsale. One of the most dramatic pieces of ground in the game.",
  },
  {
    name: "The Old Course",
    region: "St. Andrews, Scotland",
    image: "/photos/old-course.webp",
    note: "The ballot, the caddies, the Swilcan Bridge. Play it once and you’ll understand why everything else gets compared to it.",
  },
];

export default function GolfPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80svh] overflow-hidden bg-[var(--color-sage-dark)] text-[var(--color-cream)]">
        <div className="absolute inset-0">
          <Image
            src="/photos/pebble-18.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(20,30,22,0.55) 0%, rgba(20,30,22,0.4) 30%, rgba(20,30,22,0.85) 100%)",
            }}
          />
          <div className="grain absolute inset-0" aria-hidden />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 min-h-[80svh] flex items-end pb-20 pt-32">
          <div className="max-w-3xl">
            <p className="eyebrow text-[var(--color-gold-light)]">
              Remarkable Golf Travel
            </p>
            <h1
              className="mt-4 text-[clamp(2.8rem,8vw,7rem)] leading-[0.96] tracking-[-0.025em] text-balance text-[var(--color-cream)] drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)]"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              The tee times, the rooms,
              <br />
              <em className="italic text-[var(--color-gold-light)]">
                the dinner where it gets settled.
              </em>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80 leading-relaxed">
              The trip starts with your group &mdash; the handicaps, the
              pace, the evenings. Thirty years from Pebble to Pinehurst
              means we know how to build it.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-7 py-4 bg-[var(--color-brand-blue)] text-[var(--color-cream)] text-xs tracking-[0.16em] uppercase hover:bg-[var(--color-sage-dark)]"
              >
                Begin Planning <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <SectionEyebrow number="01">The Approach</SectionEyebrow>
          </div>
          <div className="lg:col-span-8">
            <p
              className="font-[family-name:var(--font-fraunces)] text-[clamp(1.8rem,3.5vw,3rem)] leading-[1.1] tracking-[-0.02em] text-balance"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              The right trip for your group might already exist &mdash; a tour
              operator&rsquo;s package, booked at our rate with the{" "}
              <em className="italic text-[var(--color-sage-dark)]">
                amenities arranged.
              </em>{" "}
              It might need to be built from scratch. The only way to know
              for sure is the first conversation.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-6 text-[var(--color-stone)] leading-relaxed">
              <p>
                We listen first. A single-digit handicap on a buddy trip
                and a ten-handicap with his wife are different itineraries
                — different courses, different tees, different evenings.
                The first conversation is the most important one.
              </p>
              <p>
                Then we plan the rounds the way you actually play them.
                Tee-time spacing. Caddie pairing. Walking versus carts.
                Where you&rsquo;re eating after the 18th. Whether anyone
                actually wants to play 36 on day three. Tour operators
                sell the same answer to everyone. We don&rsquo;t.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trip types */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <SectionEyebrow number="02">Trip Types</SectionEyebrow>
            <h2
              className="mt-4 text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] tracking-[-0.02em]"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              The buddies trip, the couples trip,
              <em className="italic text-[var(--color-stone)]">
                {" "}the round you&rsquo;ve been talking about for years.
              </em>
            </h2>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-12">
            <TripType
              n="i"
              title="The Buddies Trip"
              copy="Four golfers or twelve. Tee-time choreography, ground transport, a dinner reservation that holds when the back nine runs long. The logistics that turn a good group trip into one worth repeating."
            />
            <TripType
              n="ii"
              title="The Couples Trip"
              copy="One plays, the other explores &mdash; or both play. We build the itinerary so neither person is waiting on the other. Golf in the morning, somewhere worth being in the afternoon."
            />
            <TripType
              n="iii"
              title="The Bucket-list Round"
              copy="The Old Course. Pebble Beach. The Ocean Course at Kiawah. Ballybunion on a clear day. The rounds you&rsquo;ve been talking about for years. We know the tee times, the caddies, and the hotel worth staying in after."
            />
            <TripType
              n="iv"
              title="I Don&rsquo;t Know Where Yet"
              copy="You know the vibe &mdash; links golf, warm weather, walking only. You don&rsquo;t know the destination. Tell us the group, the pace, and what kind of golf you&rsquo;re after. We&rsquo;ll build the short list."
            />
          </div>
        </div>
      </section>

      {/* Interstitial callout */}
      <section className="bg-[var(--color-sage-dark)] py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 flex flex-col sm:flex-row sm:items-center gap-8 justify-between">
          <p
            className="font-[family-name:var(--font-fraunces)] text-[clamp(1.2rem,2vw,1.6rem)] leading-[1.3] tracking-[-0.01em] max-w-xl text-[var(--color-cream)]"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            If you know where you want to play, we&rsquo;ll build the trip
            around it. If you don&rsquo;t,{" "}
            <em className="italic text-[var(--color-gold-light)]">
              that&rsquo;s exactly what the first call is for.
            </em>
          </p>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-3 px-7 py-4 bg-[var(--color-gold)] text-[var(--color-ink)] text-xs tracking-[0.16em] uppercase hover:bg-[var(--color-gold-light)]"
          >
            Begin Planning <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* Courses grid */}
      <section
        id="courses"
        className="bg-[var(--color-cream-dark)]/60 border-y border-[color-mix(in_oklab,var(--color-stone)_18%,transparent)] py-28"
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div>
              <SectionEyebrow number="03">A Short List</SectionEyebrow>
              <h2
                className="mt-4 text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-balance max-w-2xl"
                style={{ fontVariationSettings: '"opsz" 144' }}
              >
                Six courses that earn the flight.
              </h2>
            </div>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {courses.map((c, i) => (
              <li key={c.name} className="group">
                <div className="relative aspect-[5/6] overflow-hidden bg-[var(--color-ink)]">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none"
                  />
                  <div className="absolute top-5 left-5 right-5 flex justify-between text-white">
                    <span className="text-[0.85rem] font-bold tracking-[0.22em] uppercase text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[0.85rem] font-bold tracking-[0.22em] uppercase text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                      {c.region}
                    </span>
                  </div>
                </div>
                <h3
                  className="mt-5 font-[family-name:var(--font-fraunces)] text-2xl tracking-[-0.01em]"
                  style={{ fontVariationSettings: '"opsz" 144' }}
                >
                  {c.name}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-stone)] leading-relaxed">
                  {c.note}
                </p>
              </li>
            ))}
          </ul>

        </div>
      </section>

      {/* Voices — golf testimonials */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <SectionEyebrow number="04">Voices</SectionEyebrow>
            <h2
              className="mt-4 text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] tracking-[-0.02em] text-balance"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              From the
              <em className="italic text-[var(--color-stone)]"> 19th hole.</em>
            </h2>
            <Link
              href="/testimonials"
              className="mt-8 inline-flex items-center gap-3 text-xs tracking-[0.16em] uppercase border-b border-[var(--color-ink)] pb-1 hover:text-[var(--color-sage-dark)] hover:border-[var(--color-gold)]"
            >
              All testimonials <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-12">
            <GolfQuote
              text="Having never planned a golf trip, I was unsure of many things. Peter had both firm answers and valued suggestions — from group dynamics to courses to hotels."
              attribution="J.Z. · First golf trip · Irvington, NY"
            />
            <GolfQuote
              text="From start to finish the entire trip was seamless. Everyone in the group loved it — all parts of the trip were Class A."
              attribution="K.M. · Pinehurst · Glasgow, Scotland"
            />
            <GolfQuote
              text="Peter nails every detail; from accommodations to tee times to transportation and dining reservations, it's all taken care of."
              attribution="J.H. · Kohler, Pinehurst, Pebble · Scarsdale, NY"
            />
            <GolfQuote
              text="Everything was set up ahead of time, no detail was missed. His planning let us focus on having fun and hitting the occasional good shot."
              attribution="T.V. · Buddies trip · 8 golfers · New York, NY"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-ink)] text-[var(--color-cream)] py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="eyebrow text-[var(--color-gold-light)]">
            Now booking 2026 &amp; 2027
          </p>
          <h2
            className="mt-4 text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-[var(--color-cream)]"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            Tell us where you want to play &mdash; or ask us where you should.
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Thirty-minute discovery call, no fee. If we&rsquo;re a fit from
            there, a single design fee engages us for the full trip &mdash;
            the rounds, the rooms, the evenings.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-7 py-4 bg-[var(--color-gold)] text-[var(--color-ink)] text-xs tracking-[0.16em] uppercase hover:bg-[var(--color-gold-light)]"
            >
              Begin Planning <span aria-hidden>→</span>
            </Link>
            <a
              href="tel:9142223253"
              className="text-xs tracking-[0.16em] uppercase border-b border-white/30 pb-1 hover:text-[var(--color-gold-light)]"
            >
              Or call 914.222.3253
            </a>
          </div>

        </div>
      </section>
    </>
  );
}

function TripType({ n, title, copy }: { n: string; title: string; copy: string }) {
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

function GolfQuote({
  text,
  attribution,
}: {
  text: string;
  attribution: string;
}) {
  return (
    <figure className="border-t border-[color-mix(in_oklab,var(--color-stone)_25%,transparent)] pt-6">
      <span
        aria-hidden
        className="font-[family-name:var(--font-fraunces)] text-3xl text-[var(--color-gold)] leading-none block"
      >
        &ldquo;
      </span>
      <blockquote
        className="mt-2 font-[family-name:var(--font-fraunces)] text-[1.05rem] leading-[1.55] text-[var(--color-ink)]"
        style={{ fontVariationSettings: '"opsz" 144' }}
      >
        {text}
      </blockquote>
      <figcaption className="mt-5 text-[0.72rem] tracking-[0.18em] uppercase text-[var(--color-stone)]">
        {attribution}
      </figcaption>
    </figure>
  );
}
