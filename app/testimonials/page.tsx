import EmailCapture from "@/components/EmailCapture";
import SectionEyebrow from "@/components/SectionEyebrow";
import { getTestimonials, type Testimonial } from "@/lib/testimonials";

export const metadata = { title: "Testimonials" };

export default function TestimonialsPage() {
  const golf = getTestimonials("golf");
  const journeys = getTestimonials("journeys");

  return (
    <>
      <section className="pt-40 pb-16 mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionEyebrow>Testimonials</SectionEyebrow>
        <h1
          className="mt-4 text-[clamp(2.8rem,7vw,6rem)] leading-[0.98] tracking-[-0.025em] text-balance max-w-4xl"
          style={{ fontVariationSettings: '"opsz" 144' }}
        >
          What clients
          <em className="italic text-[var(--color-stone)]"> tell us afterward.</em>
        </h1>
        <p className="mt-6 max-w-2xl text-[var(--color-stone)] leading-relaxed">
          The trips below were planned by Peter or Lisa over the past few
          years. The reviews came in through our public profile, and are
          shared here in the words clients used. Names have been reduced to
          initials at the reviewers&rsquo; preference.
        </p>
      </section>

      {/* Golf */}
      <section className="bg-[var(--color-cream-dark)]/60 border-y border-[color-mix(in_oklab,var(--color-stone)_18%,transparent)] py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 mb-14">
            <div className="lg:col-span-5">
              <SectionEyebrow number="01">Golf travel</SectionEyebrow>
              <h2
                className="mt-4 text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-balance"
                style={{ fontVariationSettings: '"opsz" 144' }}
              >
                Buddies trips,
                <em className="italic text-[var(--color-stone)]"> bucket lists, and 50ths.</em>
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-6 text-[var(--color-stone)] leading-relaxed">
              <p>
                Peter has been organizing golf trips for twenty-five years.
                Below, a sample from clients who&rsquo;ve traveled with him
                to Pinehurst, Pebble, Kohler, Old Head, Bandon, and beyond.
              </p>
            </div>
          </div>

          <ul className="grid md:grid-cols-2 gap-x-10 gap-y-12">
            {golf.map((t) => (
              <li key={t.id}>
                <TestimonialCard t={t} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Journeys */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 mb-14">
            <div className="lg:col-span-5">
              <SectionEyebrow number="02">Journeys</SectionEyebrow>
              <h2
                className="mt-4 text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-balance"
                style={{ fontVariationSettings: '"opsz" 144' }}
              >
                Family trips, ski weeks,
                <em className="italic text-[var(--color-stone)]"> girls&rsquo; reunions.</em>
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-6 text-[var(--color-stone)] leading-relaxed">
              <p>
                Lisa designs trips for families, women&rsquo;s groups, and
                solo travelers across North America and Europe. A few
                recent ones, in their own words.
              </p>
            </div>
          </div>

          <ul className="grid md:grid-cols-2 gap-x-10 gap-y-12">
            {journeys.map((t) => (
              <li key={t.id}>
                <TestimonialCard t={t} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-ink)] text-[var(--color-cream)] py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="eyebrow text-[var(--color-gold-light)]">Begin</p>
          <h2
            className="mt-4 text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-[var(--color-cream)]"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            Your trip on this page next.
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Thirty-minute discovery call, no fee or commitment.
          </p>
          <div className="mt-10">
            <EmailCapture variant="dark" source="testimonials-page" />
          </div>
        </div>
      </section>
    </>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="border-t border-[color-mix(in_oklab,var(--color-stone)_25%,transparent)] pt-6">
      <span
        aria-hidden
        className="font-[family-name:var(--font-fraunces)] text-4xl text-[var(--color-gold)] leading-none block"
      >
        &ldquo;
      </span>
      <blockquote
        className="mt-2 font-[family-name:var(--font-fraunces)] text-[1.15rem] lg:text-[1.2rem] leading-[1.5] text-[var(--color-ink)]"
        style={{ fontVariationSettings: '"opsz" 144' }}
      >
        {t.fullQuote}
      </blockquote>
      <figcaption className="mt-5 text-xs tracking-[0.16em] uppercase text-[var(--color-stone)]">
        {t.initials} · {t.trip} · {t.location}
      </figcaption>
    </figure>
  );
}
