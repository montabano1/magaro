import Image from "next/image";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";
import SectionEyebrow from "@/components/SectionEyebrow";

export const metadata = {
  title: "Destinations",
  description:
    "Where Remarkable Travel Design is sending clients right now — Italy, the Caribbean, and the American Southwest. Designed trip by trip.",
};

const featured = [
  {
    name: "Italy",
    region: "Europe",
    image: "/photos/amalfi.jpg",
    slug: "italy",
    copy: "The Amalfi Coast in May, a Chianti farmhouse at harvest, three days in Rome at the start or end. Italy works as a single focus or as a sequence — we've designed both. The question is how much time you have and how fast you want to move.",
    season: "April–June · September–October",
  },
  {
    name: "St. Lucia",
    region: "Caribbean",
    image: "/photos/pitons.jpg",
    slug: "st-lucia",
    copy: "Twin volcanic peaks above Soufrière, a hillside villa with a view that earns the flight, a sailboat for an afternoon on the water. The Caribbean done quietly — private, unhurried, the kind of week you don't want to leave.",
    season: "December–April",
  },
  {
    name: "The American Southwest",
    region: "United States",
    image: "/photos/southwest.jpg",
    slug: "american-southwest",
    copy: "Bryce Canyon to Zion, with a night in the middle worth slowing down for. Red rock and canyon light at their best in spring and fall, when the crowds thin and the temperatures cooperate. Lisa has designed this route several times — it works.",
    season: "March–May · September–November",
  },
];

export default function DestinationsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-16 mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionEyebrow>Destinations</SectionEyebrow>
        <h1
          className="mt-4 text-[clamp(2.8rem,7vw,6rem)] leading-[0.98] tracking-[-0.025em] text-balance max-w-4xl"
          style={{ fontVariationSettings: '"opsz" 144' }}
        >
          Places worth
          <em className="italic text-[var(--color-stone)]"> the trip.</em>
        </h1>
        <p className="mt-6 max-w-2xl text-[var(--color-stone)] leading-relaxed">
          Three destinations we know well and design with care. Every
          itinerary is one of one &mdash; these are starting points, not
          packages. If you have somewhere in mind that isn&rsquo;t here, ask.
        </p>
      </section>

      {/* Editorial destination features */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 pb-28">
        <ul className="space-y-24">
          {featured.map((dest, i) => (
            <li key={dest.slug}>
              <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
                <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-ink)]">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                  <p className="eyebrow text-[var(--color-gold)]">{dest.region}</p>
                  <h2
                    className="mt-3 font-[family-name:var(--font-fraunces)] text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] tracking-[-0.02em]"
                    style={{ fontVariationSettings: '"opsz" 144' }}
                  >
                    {dest.name}
                  </h2>
                  <p className="mt-5 text-[var(--color-stone)] leading-relaxed">
                    {dest.copy}
                  </p>
                  <p className="mt-4 text-xs tracking-[0.16em] uppercase text-[var(--color-stone)]/70">
                    Best season — {dest.season}
                  </p>
                  <Link
                    href={`/destinations/${dest.slug}`}
                    className="mt-6 inline-flex items-center gap-3 text-xs tracking-[0.16em] uppercase border-b border-[var(--color-ink)] pb-1 hover:border-[var(--color-gold)] hover:text-[var(--color-sage-dark)]"
                  >
                    How we design this trip <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* By Style */}
      <section className="bg-[var(--color-cream-dark)]/60 border-y border-[color-mix(in_oklab,var(--color-stone)_18%,transparent)] py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionEyebrow>Or, by style</SectionEyebrow>
            <h2
              className="mt-4 text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-balance"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              Tell us
              <em className="italic text-[var(--color-stone)]"> the kind of trip.</em>
            </h2>
            <p className="mt-6 text-[var(--color-stone)] leading-relaxed">
              If you don&rsquo;t have a destination in mind yet — just a
              pace, a feeling, a mood — start here.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-8 gap-y-10">
            <Style title="Slow on purpose" copy="Two destinations, two weeks, no transfers before ten. The trip you fly home from rested — not the one you spend three days recovering from." />
            <Style title="Active, without being relentless" copy="Trails worth the early start, lodges worth coming back to at the end of the day. Movement built into the trip, not bolted on. The Southwest and the Alps are both in this category." />
            <Style title="Beach without the resort" copy="A villa, a smaller island, a week that feels like yours rather than everyone else's. No swim-up bars. No all-inclusive wristband." />
            <Style title="City, properly" copy="Three days minimum, a real neighborhood base, restaurants where the locals actually eat. Rome or Lisbon or Tokyo treated as a destination rather than a layover." />
            <Style title="The trip that has to be right" copy="A significant birthday. Something long-deferred. The trip that carries real weight. We sweat the details harder on these — because the margin for error is smaller." />
            <Style title="Somewhere you haven't considered yet" copy="We've been to places you haven't thought to go. Sometimes the right conversation starts there." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-6 py-28 text-center">
        <p className="eyebrow text-[var(--color-gold)]">Begin</p>
        <h2
          className="mt-3 text-3xl lg:text-5xl"
          style={{ fontVariationSettings: '"opsz" 144' }}
        >
          Thirty-minute discovery call. No fee.
        </h2>
        <p className="mt-4 text-[var(--color-stone)]">
          If we&rsquo;re a fit from there, a single design fee engages us as
          your agent — and we begin building the itinerary to your specs,
          presenting real options at each junction.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-7 py-4 bg-[var(--color-brand-blue)] text-[var(--color-cream)] text-xs tracking-[0.16em] uppercase hover:bg-[var(--color-sage-dark)]"
          >
            Begin Planning <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="mt-16 max-w-md mx-auto">
          <p className="eyebrow text-[var(--color-stone)]">
            Waypoints — field notes from the road, sent when there&rsquo;s something worth saying.
          </p>
          <div className="mt-4">
            <EmailCapture variant="light" source="destinations-page" />
          </div>
        </div>
      </section>
    </>
  );
}

function Style({ title, copy }: { title: string; copy: string }) {
  return (
    <div>
      <h3
        className="font-[family-name:var(--font-fraunces)] text-[1.85rem] leading-[1.1] tracking-[-0.015em]"
        style={{ fontVariationSettings: '"opsz" 144, "wght" 540' }}
      >
        {title}
      </h3>
      <p className="mt-3 text-[1rem] text-[var(--color-stone)] leading-[1.65]">
        {copy}
      </p>
    </div>
  );
}
