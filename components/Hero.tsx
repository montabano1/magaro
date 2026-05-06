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
              <span aria-hidden className="h-px w-14 bg-[var(--color-gold-light)]" />
              <span className="text-[0.85rem] sm:text-[0.9rem] font-semibold tracking-[0.22em] uppercase text-[var(--color-gold-light)] drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                An independent studio. Entirely yours.
              </span>
            </div>

            <h1
              className="reveal text-[clamp(3rem,8.5vw,7.5rem)] leading-[0.95] tracking-[-0.025em] text-[var(--color-cream)] text-balance"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
            >
              We don&rsquo;t sell trips.
              <br />
              <em className="italic font-light text-[var(--color-gold-light)]">
                We design them.
              </em>
            </h1>

            <p
              className="reveal mt-8 max-w-xl text-lg lg:text-[1.2rem] text-white/95 leading-[1.65] drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]"
              style={{ animationDelay: "120ms" }}
            >
              We listen first. Peter and Lisa have been designing trips
              for twenty-five years — not from a catalog, but from a
              conversation. Tell us where you want to go and what
              matters. We handle everything else.
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
                href="/destinations"
                className="inline-flex items-center gap-3 px-7 py-4 border border-white/30 text-[var(--color-cream)] text-xs tracking-[0.16em] uppercase hover:border-[var(--color-gold-light)] hover:text-[var(--color-gold-light)] transition-colors"
              >
                View destinations
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom testimonial pull */}
        <div className="border-t border-white/25 py-7">
          <figure className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <span
              aria-hidden
              className="font-[family-name:var(--font-fraunces)] text-5xl text-[var(--color-gold-light)] leading-none select-none"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              &ldquo;
            </span>
            <blockquote className="flex-1">
              <p className="font-[family-name:var(--font-fraunces)] text-[1.05rem] lg:text-[1.1rem] italic text-white/90 leading-[1.55]" style={{ fontVariationSettings: '"opsz" 144' }}>
                While my buddies kept thanking me for putting together such a great trip, I was shifting much of the credit to Peter.
              </p>
              <figcaption className="mt-3 text-[0.75rem] tracking-[0.18em] uppercase text-white/55">
                J.Z. &nbsp;·&nbsp; Irvington, NY &nbsp;·&nbsp; First golf trip
              </figcaption>
            </blockquote>
          </figure>
        </div>
      </div>
    </section>
  );
}

