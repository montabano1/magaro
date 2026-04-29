import DestinationsGrid from "@/components/DestinationsGrid";
import EmailCapture from "@/components/EmailCapture";
import SectionEyebrow from "@/components/SectionEyebrow";

export const metadata = { title: "Journeys" };

export default function JourneysPage() {
  return (
    <>
      <section className="pt-40 pb-16 mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionEyebrow>Journeys</SectionEyebrow>
        <h1
          className="mt-4 text-[clamp(2.8rem,7vw,6rem)] leading-[0.98] tracking-[-0.025em] text-balance max-w-4xl"
          style={{ fontVariationSettings: '"opsz" 144' }}
        >
          Where we&rsquo;re sending clients
          <em className="italic text-[var(--color-stone)]"> right now.</em>
        </h1>
        <p className="mt-6 max-w-2xl text-[var(--color-stone)] leading-relaxed">
          A working list, refreshed by season. Each is a starting point —
          every itinerary we build is one of one. If you&rsquo;ve got a
          place in mind that isn&rsquo;t here, ask. We probably know it.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 pb-20">
        <DestinationsGrid />
      </section>

      <section className="bg-[var(--color-cream-dark)]/60 py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionEyebrow number="02">By Style</SectionEyebrow>
            <h2
              className="mt-4 text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-balance"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              Or, tell us
              <em className="italic text-[var(--color-stone)]"> the kind of trip.</em>
            </h2>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-8 gap-y-10">
            <Style title="Slow & private" copy="Two destinations, two weeks, no transfers before 10am. The trip you fly home from, not the one you recover from." />
            <Style title="Multigenerational" copy="Three generations, one farmhouse, parallel itineraries — and one impossibly good family table at the end of the day." />
            <Style title="Honeymoon, redefined" copy="The over-water bungalow, replaced by a private island sailboat with a chef. Or the Aman of your choice." />
            <Style title="Bucket-list" copy="Cypress Point. The Trans-Siberian. Shackleton&rsquo;s Antarctica. The trips you only get one shot at." />
            <Style title="Solo & considered" copy="Curated for the solo traveler — friendly hotels, real human concierges, restaurants where eating alone is an event." />
            <Style title="Corporate &amp; team" copy="Client retreats, milestone trips, board offsites. Discreet, branded, run by a producer in the field." />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-28 text-center">
        <p className="eyebrow text-[var(--color-gold)]">Begin</p>
        <h2
          className="mt-3 text-3xl lg:text-5xl"
          style={{ fontVariationSettings: '"opsz" 144' }}
        >
          Forty-minute call. No fee.
        </h2>
        <p className="mt-4 text-[var(--color-stone)]">
          A first-pass itinerary lands in your inbox within 72 hours.
        </p>
        <div className="mt-8">
          <EmailCapture variant="light" source="journeys-page" />
        </div>
      </section>
    </>
  );
}

function Style({ title, copy }: { title: string; copy: string }) {
  return (
    <div>
      <h3
        className="font-[family-name:var(--font-fraunces)] text-2xl tracking-[-0.01em]"
        style={{ fontVariationSettings: '"opsz" 144' }}
      >
        {title}
      </h3>
      <p className="mt-2 text-[var(--color-stone)] leading-relaxed">{copy}</p>
    </div>
  );
}
