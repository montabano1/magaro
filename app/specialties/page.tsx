import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";
import SectionEyebrow from "@/components/SectionEyebrow";

export const metadata = { title: "Specialties" };

export default function SpecialtiesPage() {
  return (
    <>
      <section className="pt-40 pb-16 mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionEyebrow>Specialties</SectionEyebrow>
        <h1
          className="mt-4 text-[clamp(2.8rem,7vw,6rem)] leading-[0.98] tracking-[-0.025em] text-balance max-w-4xl"
          style={{ fontVariationSettings: '"opsz" 144' }}
        >
          The travelers
          <em className="italic text-[var(--color-stone)]"> we know best.</em>
        </h1>
        <p className="mt-6 max-w-2xl text-[var(--color-stone)] leading-relaxed">
          Most travel companies organize themselves around destinations —
          an Italy desk, an Africa desk. We organize around the traveler.
          Below, five kinds of clients we&rsquo;ve come to know by heart,
          and the trips we&rsquo;ve learned to build for each.
        </p>
      </section>

      <section className="bg-[var(--color-cream-dark)]/60 py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionEyebrow number="01">Who we plan for</SectionEyebrow>
            <h2
              className="mt-4 text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-balance"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              Five travelers,
              <em className="italic text-[var(--color-stone)]"> one approach.</em>
            </h2>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-8 gap-y-10">
            <Specialty title="The luxury traveler" copy="Clients who care less about the star rating and more about whether the GM remembers their name. We&rsquo;ve spent decades earning real relationships with the people who run these properties — so the upgrade, the table, the early check-in, all happen quietly, before you arrive." />
            <Specialty title="The multigenerational family" copy="Families with parallel needs: the grandparents who want quiet, the teens who want surf, the parents who want both at once. We design days that work for all three at the same time, in one place, without anyone compromising." />
            <Specialty title="The Women Travelers" copy="Solo women and women&rsquo;s groups. Properties we&rsquo;ve vetted for safety and dignity, female guides where it matters, ground-level knowledge from women who&rsquo;ve actually walked the route. A specialty Lisa plans nearly all of herself." />
            <Specialty title="The solo traveler" copy="The considered solo client, traveling alone by choice rather than circumstance. We know the hotels where the staff actually engage, the concierges who keep dinner reservations real, the restaurants where eating alone is an event rather than an apology." />
            <Specialty title="The couple, on the trip of a lifetime" copy="Honeymoons, anniversaries, the long-awaited two weeks. Couples on the trip they&rsquo;ll measure all future trips against. We sweat the small things — the quiet arrival, the right table on the right night, the upgrade we&rsquo;ve called ahead about." />
          </div>
        </div>
      </section>

      {/* Voices — testimonials from journeys clients */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <SectionEyebrow number="02">Voices</SectionEyebrow>
            <h2
              className="mt-4 text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] tracking-[-0.02em] text-balance"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              How it sounds
              <em className="italic text-[var(--color-stone)]"> on the way home.</em>
            </h2>
            <Link
              href="/testimonials"
              className="mt-8 inline-flex items-center gap-3 text-xs tracking-[0.16em] uppercase border-b border-[var(--color-ink)] pb-1 hover:text-[var(--color-sage-dark)] hover:border-[var(--color-gold)]"
            >
              All testimonials <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-12">
            <SpecialtyQuote
              text="She booked exactly the type of place we were looking for — away from the crowds, quiet, and still close to the park. So much more fun with Lisa in the background."
              attribution="E.T. · Bryce & Zion · Mancos, CO"
            />
            <SpecialtyQuote
              text="What stood out most was the pacing — all the downtime we needed to relax and catch up, while still experiencing the rich history, culture, and beauty of each place."
              attribution="A.S. · Charleston & Sedona · Harvard, MA"
            />
            <SpecialtyQuote
              text="I reached out during a stressful time at work. Almost immediately she came back with the perfect solution — a thoughtfully planned beach trip. Exactly what I needed."
              attribution="C. · Asbury Park · Beacon, NY"
            />
            <SpecialtyQuote
              text="She found us an incredible house, walkable to the historic district. Restaurant and rooftop recommendations were spot-on — not a single disappointing meal."
              attribution="B.H. · Charleston · Monroe, CT"
            />
          </div>
        </div>
      </section>

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
          <EmailCapture variant="light" source="specialties-page" />
        </div>
      </section>
    </>
  );
}

function Specialty({ title, copy }: { title: string; copy: string }) {
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

function SpecialtyQuote({
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
