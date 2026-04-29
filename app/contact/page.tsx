import EmailCapture from "@/components/EmailCapture";
import SectionEyebrow from "@/components/SectionEyebrow";
import ContactForm from "./ContactForm";

export const metadata = { title: "Begin Planning" };

export default function ContactPage() {
  return (
    <>
      <section className="pt-40 pb-12 mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionEyebrow>Begin</SectionEyebrow>
        <h1
          className="mt-4 text-[clamp(2.8rem,7vw,6rem)] leading-[0.98] tracking-[-0.025em] text-balance max-w-4xl"
          style={{ fontVariationSettings: '"opsz" 144' }}
        >
          Tell us about
          <em className="italic text-[var(--color-stone)]"> the trip.</em>
        </h1>
        <p className="mt-6 max-w-2xl text-[var(--color-stone)] leading-relaxed">
          Forty-minute call, no fee. Within 72 hours we&rsquo;ll have a
          first-pass itinerary in your inbox — two routes, sketched.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 pb-28">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <aside className="lg:col-span-5 lg:pl-10 lg:border-l border-[color-mix(in_oklab,var(--color-stone)_20%,transparent)]">
            <p className="eyebrow">Or reach us directly</p>
            <ul className="mt-6 space-y-5 text-lg">
              <li>
                <p className="text-xs tracking-[0.16em] uppercase text-[var(--color-stone)]">
                  Phone
                </p>
                <a
                  href="tel:9142223253"
                  className="font-[family-name:var(--font-fraunces)] text-3xl hover:text-[var(--color-sage-dark)]"
                  style={{ fontVariationSettings: '"opsz" 144' }}
                >
                  914.222.3253
                </a>
              </li>
              <li>
                <p className="text-xs tracking-[0.16em] uppercase text-[var(--color-stone)]">
                  Email
                </p>
                <a
                  href="mailto:info@remarkabletd.com"
                  className="font-[family-name:var(--font-fraunces)] text-3xl hover:text-[var(--color-sage-dark)]"
                  style={{ fontVariationSettings: '"opsz" 144' }}
                >
                  info@remarkabletd.com
                </a>
              </li>
              <li>
                <p className="text-xs tracking-[0.16em] uppercase text-[var(--color-stone)]">
                  Hours
                </p>
                <p className="font-[family-name:var(--font-fraunces)] text-2xl">
                  Mon–Fri · 9–6 ET
                </p>
                <p className="text-sm text-[var(--color-stone)] mt-1">
                  In-trip clients reach us 24/7.
                </p>
              </li>
            </ul>

            <div className="mt-12 border-t border-[color-mix(in_oklab,var(--color-stone)_20%,transparent)] pt-8">
              <p className="eyebrow text-[var(--color-gold)]">Not ready yet?</p>
              <p
                className="mt-3 font-[family-name:var(--font-fraunces)] text-2xl leading-tight"
                style={{ fontVariationSettings: '"opsz" 144' }}
              >
                Subscribe to the Atelier Letter and we&rsquo;ll come to you.
              </p>
              <div className="mt-4">
                <EmailCapture variant="light" source="contact-page" />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
