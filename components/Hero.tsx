import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[var(--color-ink)] text-[var(--color-cream)]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/photos/pitons.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,24,26,0.55) 0%, rgba(20,24,26,0.35) 35%, rgba(20,24,26,0.65) 75%, rgba(20,24,26,0.85) 100%)",
          }}
        />
        <div className="grain absolute inset-0" aria-hidden />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 min-h-[100svh] flex flex-col">
        <div className="flex-1 flex items-end pb-16 lg:pb-24 pt-32">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8 reveal">
              <span aria-hidden className="h-px w-12 bg-[var(--color-gold-light)]" />
              <span className="eyebrow text-[var(--color-gold-light)]">
                Not a tour operator. An agent for you.
              </span>
            </div>

            <h1
              className="reveal text-[clamp(3rem,8.5vw,7.5rem)] leading-[0.95] tracking-[-0.025em] text-[var(--color-cream)] text-balance"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
            >
              We don&rsquo;t sell trips.
              <br />
              <em className="italic font-light text-[var(--color-gold-light)]">
                We build them.
              </em>
            </h1>

            <p
              className="reveal mt-8 max-w-xl text-base lg:text-lg text-white/80 leading-relaxed"
              style={{ animationDelay: "120ms" }}
            >
              Most travel companies are paid by the resorts, the cruise
              lines, the tour operators they sell. We&rsquo;re paid by
              you. So we listen first, then build the trip that&rsquo;s
              actually right — using a tour operator&rsquo;s package, our
              own villa list, or a single-vendor itinerary built room by
              room. Whatever serves the trip.
            </p>

            <div
              className="reveal mt-10 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "240ms" }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-7 py-4 bg-[var(--color-cream)] text-[var(--color-ink)] text-xs tracking-[0.16em] uppercase hover:bg-[var(--color-gold-light)] transition-colors"
              >
                Begin your journey
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/journeys"
                className="inline-flex items-center gap-3 px-7 py-4 border border-white/30 text-[var(--color-cream)] text-xs tracking-[0.16em] uppercase hover:border-[var(--color-gold-light)] hover:text-[var(--color-gold-light)] transition-colors"
              >
                View the atelier
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom marquee facts */}
        <div className="border-t border-white/15 py-6 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 text-xs">
          <Fact label="Paid by" value="The traveler" />
          <Fact label="Itineraries" value="One of one" />
          <Fact label="Years in the field" value="25+" />
          <Fact label="Member" value="ASTA · preferred partners" />
        </div>
      </div>
    </section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="eyebrow text-white/45">{label}</p>
      <p
        className="mt-1 font-[family-name:var(--font-fraunces)] text-2xl text-[var(--color-cream)]"
        style={{ fontVariationSettings: '"opsz" 144' }}
      >
        {value}
      </p>
    </div>
  );
}
