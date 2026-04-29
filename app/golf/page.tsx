import Image from "next/image";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";
import SectionEyebrow from "@/components/SectionEyebrow";

export const metadata = {
  title: "Golf Travel",
  description:
    "Bespoke golf journeys — Pebble, Bandon, Old Head, Cabot. Thirty years of personal trips behind every tee time.",
};

const courses = [
  {
    name: "Pebble Beach",
    region: "California",
    image: "/photos/pebble-18.webp",
    note: "The 18th along the Pacific. Rooms at The Lodge, dinner at Stillwater.",
  },
  {
    name: "Old Head",
    region: "Kinsale, Ireland",
    image: "/photos/old-head.webp",
    note: "A links on a cliff. Stay at the lighthouse manor; finish at the bar.",
  },
  {
    name: "Sand Valley",
    region: "Wisconsin",
    image: "/photos/sand-valley.webp",
    note: "America&rsquo;s heath. The Lido and Mammoth Dunes are essential.",
  },
  {
    name: "Erin Hills",
    region: "Wisconsin",
    image: "/photos/erin-hills.webp",
    note: "U.S. Open ground. Rumpled fairways and the long Wisconsin sky.",
  },
  {
    name: "Pebble · 17-Mile Drive",
    region: "California",
    image: "/photos/ocean-putting.webp",
    note: "The roll of the green at Spanish Bay. Linger to watch the bagpiper.",
  },
  {
    name: "Bandon Dunes",
    region: "Oregon",
    image:
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1600&q=85&auto=format&fit=crop",
    note: "Five courses, walking only. Bring rain gear and a low number.",
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
              Not a tour operator. An agent for your foursome.
            </p>
            <h1
              className="mt-4 text-[clamp(2.8rem,8vw,7rem)] leading-[0.96] tracking-[-0.025em] text-balance"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              A buddies trip
              <br />
              <em className="italic text-[var(--color-gold-light)]">
                that fits yours.
              </em>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80 leading-relaxed">
              Tour operators sell the same Pebble package to everyone.
              We start with your group — the handicaps, the pace, the
              evenings — and use a tour operator&rsquo;s package only
              when it&rsquo;s the answer. Otherwise we build it ourselves.
              Thirty years of personal trips behind every tee time.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-7 py-4 bg-[var(--color-gold)] text-[var(--color-ink)] text-xs tracking-[0.16em] uppercase hover:bg-[var(--color-gold-light)]"
              >
                Plan a foursome <span aria-hidden>→</span>
              </Link>
              <a
                href="#courses"
                className="inline-flex items-center gap-3 px-7 py-4 border border-white/30 text-white text-xs tracking-[0.16em] uppercase hover:border-[var(--color-gold-light)] hover:text-[var(--color-gold-light)]"
              >
                See partner courses
              </a>
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
              PerryGolf has a Pebble package. We can {" "}
              <em className="italic text-[var(--color-sage-dark)]">
                book it for you
              </em>
              {" "} — at their rate, with our partner perks. Or we&rsquo;ll
              tell you why your group needs something different, and build
              that instead.
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
                ship the same answer to everyone. We don&rsquo;t.
              </p>
            </div>
          </div>
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
              <SectionEyebrow number="02">Partner Courses</SectionEyebrow>
              <h2
                className="mt-4 text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-balance max-w-2xl"
                style={{ fontVariationSettings: '"opsz" 144' }}
              >
                Six places we&rsquo;ll send you tomorrow.
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
                  <div className="absolute top-4 left-4 right-4 flex justify-between text-white">
                    <span className="eyebrow text-white/80">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="eyebrow text-white/80">{c.region}</span>
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

          <p className="mt-12 text-sm text-[var(--color-stone)]">
            And forty more, from Sun Valley to St. Andrews. Tell us where
            you want to play.
          </p>
        </div>
      </section>

      {/* Trip types */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <SectionEyebrow number="03">Trip Types</SectionEyebrow>
            <h2
              className="mt-4 text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] tracking-[-0.02em]"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              Buddies trips, couples trips,
              <em className="italic text-[var(--color-stone)]">
                {" "}and the bucket list.
              </em>
            </h2>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-12">
            <TripType
              n="i"
              title="The Foursome"
              copy="Six to twelve men, three to seven days. Tee-time choreography, transportation, a reservation that holds when the round runs late."
            />
            <TripType
              n="ii"
              title="Couples Escapes"
              copy="One plays, the other reads. Or both play. Spas, sommelier dinners and a proper day off built into the rhythm."
            />
            <TripType
              n="iii"
              title="Corporate Outings"
              copy="Client trips that don&rsquo;t feel like client trips. Discreet logistics, branded touches, a producer in the field."
            />
            <TripType
              n="iv"
              title="Bucket-list Pilgrimages"
              copy="The Old Course, Cypress Point, Augusta National week. The trips you only get one shot at. We do it right."
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
            Tell us about your foursome.
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            A short conversation gets you a first-pass itinerary within 72
            hours. No fee, no obligation.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-7 py-4 bg-[var(--color-gold)] text-[var(--color-ink)] text-xs tracking-[0.16em] uppercase hover:bg-[var(--color-gold-light)]"
            >
              Begin the conversation <span aria-hidden>→</span>
            </Link>
            <a
              href="tel:9142223253"
              className="text-xs tracking-[0.16em] uppercase border-b border-white/30 pb-1 hover:text-[var(--color-gold-light)]"
            >
              Or call 914.222.3253
            </a>
          </div>

          <div className="mt-16 max-w-md mx-auto text-left">
            <p className="eyebrow text-white/55">
              Can&rsquo;t commit yet? Get our golf-only dispatch.
            </p>
            <div className="mt-3">
              <EmailCapture
                variant="dark"
                source="golf-page"
                placeholder="Email for golf-only updates"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function TripType({ n, title, copy }: { n: string; title: string; copy: string }) {
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
