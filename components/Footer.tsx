import Link from "next/link";
import EmailCapture from "./EmailCapture";

export default function Footer() {
  return (
    <footer className="relative mt-32 bg-[var(--color-ink)] text-[var(--color-cream)]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-24 pb-10">
        {/* Newsletter row */}
        <div className="grid lg:grid-cols-12 gap-12 pb-20 border-b border-white/10">
          <div className="lg:col-span-5">
            <p className="eyebrow text-[var(--color-gold-light)]">
              Waypoints
            </p>
            <h2 className="mt-3 text-4xl lg:text-5xl text-[var(--color-cream)] text-balance">
              Quietly remarkable journeys, delivered monthly.
            </h2>
            <p className="mt-5 text-white/70 max-w-md leading-relaxed">
              First look at off-market villa stays, partner-only fairway
              packages, and the small details our designers are talking about
              this season.
            </p>
          </div>
          <div className="lg:col-span-7 lg:pl-12 lg:border-l border-white/10 flex flex-col justify-center">
            <EmailCapture variant="dark" source="footer" />
            <p className="mt-4 text-xs text-white/45">
              Considered, never frequent. Unsubscribe in one click.
            </p>
          </div>
        </div>

        {/* Sitemap */}
        <div className="grid lg:grid-cols-12 gap-12 pt-20">
          <div className="lg:col-span-5">
            <p
              className="font-[family-name:var(--font-fraunces)] text-3xl text-[var(--color-cream)]"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              Remarkable
              <span className="inline-block mx-2 align-middle h-[6px] w-[6px] rounded-full bg-[var(--color-gold)]" />
              <span className="eyebrow text-[var(--color-gold-light)] align-middle">
                Travel Design
              </span>
            </p>
            <p className="mt-4 text-white/55 text-sm max-w-sm leading-relaxed">
              An independent travel studio founded by Peter &amp; Lisa
              Magaro. Part of our compensation comes directly from you,
              which keeps us vendor-agnostic — so we build the trip
              that&rsquo;s actually right.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <p className="eyebrow text-white/45 mb-4">Studio</p>
              <ul className="space-y-2 text-sm">
                <FooterLink href="/about">About</FooterLink>
                <FooterLink href="/destinations">Destinations</FooterLink>
                <FooterLink href="/specialties">Specialties</FooterLink>
                <FooterLink href="/golf">Golf</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
              </ul>
            </div>
            <div>
              <p className="eyebrow text-white/45 mb-4">Reading</p>
              <ul className="space-y-2 text-sm">
                <FooterLink href="/journal">The Journal</FooterLink>
                <FooterLink href="/itineraries">Sample Itineraries</FooterLink>
                <FooterLink href="/deals">Deals &amp; Offers</FooterLink>
                <FooterLink href="/testimonials">Testimonials</FooterLink>
              </ul>
            </div>
            <div>
              <p className="eyebrow text-white/45 mb-4">Reach Us</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="tel:9142223253"
                    className="text-white/75 hover:text-[var(--color-gold-light)]"
                  >
                    914.222.3253
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@remarkabletd.com"
                    className="text-white/75 hover:text-[var(--color-gold-light)]"
                  >
                    info@remarkabletd.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/remarkabletraveldesign"
                    className="text-white/75 hover:text-[var(--color-gold-light)]"
                    target="_blank"
                    rel="noopener"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/45">
          <p>© {new Date().getFullYear()} Remarkable Travel Design. All rights reserved.</p>
          <p className="flex items-center gap-3">
            <span>Member, ASTA</span>
            <span aria-hidden>·</span>
            <span className="text-[var(--color-gold-light)]">
              Not a tour operator. An agent for you.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-white/75 hover:text-[var(--color-gold-light)] transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}
