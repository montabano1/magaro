import Image from "next/image";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";
import SectionEyebrow from "@/components/SectionEyebrow";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-20 mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <SectionEyebrow>The Studio</SectionEyebrow>
            <h1
              className="mt-4 text-[clamp(2.8rem,7vw,6rem)] leading-[0.98] tracking-[-0.025em] text-balance"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              Two siblings,
              <br />
              <em className="italic text-[var(--color-stone)]">
                fifty years of journeys.
              </em>
            </h1>
          </div>
          <div className="lg:col-span-5 lg:pl-12 text-[var(--color-stone)] leading-relaxed">
            <p>
              Remarkable Travel Design was founded by Peter and Lisa Magaro
              — a brother-sister team who&rsquo;ve been planning trips for
              friends, family and clients since long before either of them
              imagined this would be the work.
            </p>
            <p className="mt-4">
              The studio was born in a Tuscan farmhouse, where the family
              spent enough summers to start being recognized at the bar in
              town. The trick, they realized, was personal acquaintance.
              Everything Remarkable does begins there.
            </p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <Founder
            name="Peter Magaro"
            role="Co-founder · Luxury &amp; Golf"
            image="/photos/pete-headshot.jpeg"
            bio="Peter has been organizing golf trips since college. Twenty-five years inside the luxury travel industry, with deep specialization in golf, the Caribbean, and private villa stays across the Mediterranean. He's the one on a first-name basis with the head pros."
            specialties={["Golf travel", "Caribbean & Hawaii", "Private clubs"]}
          />
          <Founder
            name="Lisa Magaro"
            role="Co-founder · Family &amp; Europe"
            image="/photos/lisa-headshot.jpeg"
            bio="Lisa coordinates the kind of multi-generational European trips most families don&rsquo;t believe are possible until they&rsquo;re in the middle of one. Twenty-five years designing for families, women&rsquo;s groups, and the occasional honeymoon."
            specialties={["Italy & France", "Multigenerational", "Women's groups"]}
          />
        </div>
      </section>

      {/* Voices — one quote per founder */}
      <section className="bg-[var(--color-cream-dark)]/60 border-y border-[color-mix(in_oklab,var(--color-stone)_18%,transparent)] py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <SectionEyebrow>Voices</SectionEyebrow>
              <h2
                className="mt-4 text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] tracking-[-0.02em] text-balance max-w-2xl"
                style={{ fontVariationSettings: '"opsz" 144' }}
              >
                What clients say
                <em className="italic text-[var(--color-stone)]"> after the trip.</em>
              </h2>
            </div>
            <Link
              href="/testimonials"
              className="text-xs tracking-[0.16em] uppercase border-b border-[var(--color-ink)] pb-1 self-start lg:self-end hover:text-[var(--color-sage-dark)] hover:border-[var(--color-gold)]"
            >
              All testimonials →
            </Link>
          </div>
          <div className="grid lg:grid-cols-2 gap-x-12 gap-y-10">
            <FounderQuote
              founder="Worked with Peter"
              text="Peter has planned multiple golf trips for us across different locations, and each one has been absolutely outstanding. What really stood out was the seamless balance between activity and relaxation."
              attribution="J.D. · Repeat client · Briarcliff Manor, NY"
            />
            <FounderQuote
              founder="Worked with Lisa"
              text="She found us an incredible house, walkable to the historic district. Her restaurant and rooftop bar recommendations were spot-on — we didn&rsquo;t have a single disappointing meal."
              attribution="B.H. · Charleston · Monroe, CT"
            />
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="bg-[var(--color-ink)] text-[var(--color-cream)] py-28 relative">
        <div className="grain absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <span aria-hidden className="font-[family-name:var(--font-fraunces)] text-7xl text-[var(--color-gold)] leading-none">
            &ldquo;
          </span>
          <blockquote
            className="mt-2 font-[family-name:var(--font-fraunces)] text-[clamp(1.5rem,3vw,2.4rem)] leading-[1.3] text-balance"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            We don&rsquo;t plan trips so much as choreograph them. The
            difference is in the small handoffs — the driver who knows the
            shortcut, the maître d&rsquo; who&rsquo;s expecting you. That&rsquo;s
            where remarkable lives.
          </blockquote>
          <p className="mt-8 eyebrow text-white/55">
            — Peter Magaro, Co-founder
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <SectionEyebrow number="03">Standards</SectionEyebrow>
            <h2
              className="mt-4 text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] tracking-[-0.02em]"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              How we hold ourselves
              <em className="italic text-[var(--color-stone)]">
                {" "}to a higher line.
              </em>
            </h2>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-12">
            <Value n="i" title="Firsthand or not at all">
              We don&rsquo;t recommend a hotel we haven&rsquo;t walked. We
              don&rsquo;t recommend a course we haven&rsquo;t played. The
              network is built on actual visits.
            </Value>
            <Value n="ii" title="Quietly resourced">
              ASTA, Virtuoso-aligned partners, IHG and Marriott Stars,
              Belmond, Aman and Rosewood preferred. The benefits go to you,
              not into our marketing.
            </Value>
            <Value n="iii" title="A real human">
              Every trip is run by Peter or Lisa personally. No call
              centers. No handoff to a junior planner. Reachable by phone,
              in your timezone, throughout.
            </Value>
            <Value n="iv" title="Advocacy when it counts">
              Storms, strikes, missed connections. We&rsquo;ve untangled
              every kind of disruption. Our clients describe it as the most
              valuable thing we do.
            </Value>
          </div>
        </div>
      </section>

      {/* The model — how we're paid */}
      <section className="bg-[var(--color-cream-dark)]/60 border-y border-[color-mix(in_oklab,var(--color-stone)_18%,transparent)] py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <SectionEyebrow number="04">The Model</SectionEyebrow>
            <h2
              className="mt-4 text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] tracking-[-0.02em] text-balance"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              How we get paid,
              <em className="italic text-[var(--color-stone)]"> and why it matters.</em>
            </h2>
          </div>
          <div className="lg:col-span-8 text-[var(--color-stone)] leading-relaxed space-y-5">
            <p>
              Most travel agencies are paid only by the vendors they book —
              a commission from the hotel, the resort, the tour operator.
              Their incentives are obvious. Our model is different. We
              still earn commissions on the bookings we make — that&rsquo;s
              how the industry works — but we also charge a design fee,
              paid directly by you. That client-paid piece is what anchors
              the work. It means our compensation isn&rsquo;t tied to which
              vendor you pick, and our recommendations aren&rsquo;t shaped
              by which one pays the most.
            </p>
            <p>
              The design fee is $499. It&rsquo;s the only fee we charge
              directly. It covers the entire engagement — planning, booking,
              reservations, and live concierge through the day you fly home.
              Whether the trip is a long weekend in Bandon or three weeks
              across the Mediterranean, the fee doesn&rsquo;t change.
            </p>
            <p className="text-sm text-[var(--color-stone)]/85">
              A reduced rate of $199 is offered for friends, family and
              client referrals.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-3xl px-6 lg:px-10 py-28 text-center">
        <p className="eyebrow text-[var(--color-gold)]">Stay close</p>
        <h2
          className="mt-3 text-3xl lg:text-4xl"
          style={{ fontVariationSettings: '"opsz" 144' }}
        >
          Waypoints, monthly.
        </h2>
        <p className="mt-3 text-[var(--color-stone)]">
          Field notes from Peter &amp; Lisa, plus partner-only deals before they reach the website.
        </p>
        <div className="mt-6">
          <EmailCapture variant="light" source="about-page" />
        </div>
      </section>
    </>
  );
}

function Founder({
  name,
  role,
  image,
  bio,
  specialties,
}: {
  name: string;
  role: string;
  image: string;
  bio: string;
  specialties: string[];
}) {
  return (
    <div>
      <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-cream-dark)]">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="mt-6">
        <p className="eyebrow text-[var(--color-gold)]" dangerouslySetInnerHTML={{ __html: role }} />
        <h2
          className="mt-2 font-[family-name:var(--font-fraunces)] text-4xl tracking-[-0.01em]"
          style={{ fontVariationSettings: '"opsz" 144' }}
        >
          {name}
        </h2>
        <p className="mt-4 text-[var(--color-stone)] leading-relaxed">{bio}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {specialties.map((s) => (
            <li
              key={s}
              className="text-xs tracking-[0.12em] uppercase text-[var(--color-stone)] border border-[var(--color-stone)]/40 px-3 py-1"
            >
              {s}
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase border-b border-[var(--color-ink)] pb-1 hover:text-[var(--color-sage-dark)] hover:border-[var(--color-gold)]"
        >
          Plan with {name.split(" ")[0]} <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}

function Value({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
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
        {children}
      </p>
    </div>
  );
}

function FounderQuote({
  founder,
  text,
  attribution,
}: {
  founder: string;
  text: string;
  attribution: string;
}) {
  return (
    <figure>
      <p className="eyebrow text-[var(--color-gold)]">{founder}</p>
      <span
        aria-hidden
        className="mt-4 font-[family-name:var(--font-fraunces)] text-4xl text-[var(--color-gold)] leading-none block"
      >
        &ldquo;
      </span>
      <blockquote
        className="mt-2 font-[family-name:var(--font-fraunces)] text-[1.2rem] lg:text-[1.3rem] leading-[1.5] text-[var(--color-ink)]"
        style={{ fontVariationSettings: '"opsz" 144' }}
      >
        {text}
      </blockquote>
      <figcaption className="mt-5 text-xs tracking-[0.16em] uppercase text-[var(--color-stone)]">
        {attribution}
      </figcaption>
    </figure>
  );
}
