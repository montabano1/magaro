# Remarkable Travel Design — Project Context

This is the Remarkable Travel Design website. When working on it with Claude
Code, follow this guidance.

## What this is

A consolidated marketing + content site for **Remarkable Travel Design** and
**Remarkable Golf Travel**, built by Peter & Lisa Magaro. Replaces two
older WordPress sites: remarkabletraveldesign.com and remarkablegolftravel.com.

It is a **content + lead capture** site — no transactions. Peter & Lisa
field inquiries by phone and email; the site exists to:

1. Communicate the positioning (an independent travel studio with a
   field-side concierge — designed in the studio, supported in the field)
2. Capture emails for Waypoints (newsletter — a mix of field notes and
   studio notes)
3. Publish journal entries (field notes, partner introductions) and
   deals (partner-only offers)
4. Direct serious inquiries into a contact form

## Brand voice + positioning (most important)

Peter & Lisa are **agnostic agents**, not a tour operator. The wedge is:

> Most travel companies depend entirely on vendor commissions — the
> resorts, the cruise lines, the tour operators they sell. We're paid
> both by vendors (commissions, like any agency) and directly by the
> client (a single design fee). The client-paid piece is what makes us
> vendor-agnostic — we recommend whatever combination of vendors
> actually fits the trip, including a tour operator's package when
> that's the right answer.

**The compensation model (factual, do not contradict):**

- Discovery call: free, ~30 minutes, no commitment.
- Design fee: $499 paid by the client, engages Peter & Lisa as the
  client's agent for the trip. $199 reduced rate for friends, family,
  and referrals.
- The design fee is the only fee charged *directly* to the client. It
  covers planning, booking, and concierge through the trip home.
- Vendor commissions are still received where they apply, like any
  agency. The design fee is the structural piece that frees the
  judgment.
- The itinerary is built **iteratively** — not handed over as two
  pre-packaged routes. Real choices are presented at each meaningful
  junction (the hotel, the route, the day off).

When writing copy:

- **Avoid the words "curated," "bespoke," "tailor-made," "exceptional
  journeys."** Every competitor (PerryGolf, Audley, JBLuxury, GolfTraveller,
  TripCaddie, Premier) uses these. They are now meaningless.
- **Don't claim the agency is "paid only by the client" or that there
  are "no commissions" / "no kickbacks."** Untrue. Frame the design fee
  as what *frees the judgment*, not as the only money on the table.
- **Don't use "two routes sketched."** It mischaracterizes the process.
  The itinerary is built decision by decision.
- **Use concrete words instead**: vendor-agnostic, on your side of the
  table, designed decision by decision, one of one.
- **Tone is editorial, not promotional.** Quiet, specific, slightly
  understated. Think Condé Nast Traveler longform, not a brochure.
- **No exclamation points. No emojis. No "we're passionate about travel"
  language.**

## Tech stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **Tailwind CSS v4** (inline `@theme` in `app/globals.css`)
- **TypeScript** strict
- **MDX content** via `next-mdx-remote` (file-based; no CMS)
- **Local photography** in `/public/photos/` (no remote image deps)
- **Vercel** for hosting (production: https://magaro-nine.vercel.app)

## Key files & where things live

```
app/
├── page.tsx              # Homepage
├── golf/page.tsx         # Golf travel landing
├── destinations/         # Destinations index + [slug] MDX detail pages
├── journeys/page.tsx     # Legacy redirect to /destinations
├── about/page.tsx        # Founders + values
├── contact/              # Inquiry form (page.tsx + ContactForm.tsx)
├── journal/              # Blog index + [slug]
├── deals/                # Offers index + [slug]
├── api/
│   ├── subscribe/        # POST /api/subscribe — newsletter signup
│   └── contact/          # POST /api/contact — inquiry submission
├── layout.tsx            # Root layout, fonts, metadata
└── globals.css           # Design tokens (@theme), prose-editorial, etc.

components/
├── Hero.tsx              # Homepage hero (St. Lucia Pitons)
├── Nav.tsx               # Sticky nav, light-over-photo behavior
├── Footer.tsx            # Footer + newsletter
├── EmailCapture.tsx      # Inline newsletter form (light/dark variants)
├── NewsletterForm.tsx    # Big CTA newsletter form (deals page)
├── DestinationsGrid.tsx  # Six-tile grid
├── SectionEyebrow.tsx    # "01 — Eyebrow Label" component
├── Logo.tsx              # Wordmark, light + dark modes
├── Reveal.tsx            # Scroll-reveal animation wrapper
└── MdxBody.tsx           # MDX renderer with editorial prose

content/
├── journal/*.mdx         # Blog posts
└── deals/*.mdx           # Current offers

lib/
├── content.ts            # MDX file reader
├── destinations.ts       # Destinations list
└── subscribers.ts        # Newsletter storage + Resend sync stub

public/photos/            # All site photography (Peter & Lisa's, plus
                          # licensed Unsplash for Italy + Bandon)
```

## Adding content (no code needed)

**A new journal entry:** Create a file at `content/journal/your-slug.mdx`:

```mdx
---
title: "Your title"
excerpt: "One-line summary that appears on the index."
date: "2026-05-12"
category: "Field Notes"
author: "Peter Magaro"
readTime: "5 min read"
cover: "/photos/your-image.jpg"
---

Body text. Standard Markdown.

## Subhead

> Pull-quote.

- List item
- List item
```

**A new deal:** Same pattern in `content/deals/your-slug.mdx` with extra
frontmatter: `tag`, `location`, `expires`.

**A new photo:** Drop into `/public/photos/`. Reference as
`/photos/your-image.jpg` from anywhere.

The index pages auto-pick up new files on the next deploy.

## Newsletter & inquiries

By default both write to `/data/*.json` files (gitignored).

To wire up real email delivery, set Vercel env vars:

```
RESEND_API_KEY=re_...
RESEND_AUDIENCE_ID=...
CONTACT_NOTIFY_EMAIL=info@remarkabletd.com
```

Once set, `lib/subscribers.ts:syncToResend` and
`app/api/contact/route.ts:notifyByEmail` activate automatically.

## Design system

Colors (from `globals.css`):

- `--color-cream` `#faf7f2` — page background
- `--color-cream-dark` `#f1ece2` — alternate panel
- `--color-ink` `#14181a` — primary text
- `--color-stone` `#6b6b5e` — secondary text
- `--color-sage-dark` `#2f4032` — green feature panels
- `--color-gold` `#b08d57` — accent
- `--color-gold-light` `#d4b483` — accent on dark

Fonts:
- **Fraunces** (variable serif) for display — uses `wght` and `opsz` axes
- **Inter** for body

Editorial conventions:
- Section eyebrow pattern: `<SectionEyebrow number="01">Title</SectionEyebrow>`
- Big italic accent words in display headlines (gold or stone color)
- Number numerals for list items: `i.`, `ii.`, `iii.`, `iv.` in italic gold
- Drop caps on first paragraph of MDX articles
- Hairline rules and gold dots for separators

## Working in this repo

- Always run `npm run build` before committing — Vercel deploys are gated
  on a clean build and on having no known security vulnerabilities in
  dependencies.
- Don't introduce remote image URLs — keep photography in `/public/photos`.
- Don't use the words "curated" or "bespoke" anywhere.
- For UI changes affecting nav-over-hero pages (`/` and `/golf`), test
  both `scrolled === false` and `scrolled === true` states for legibility.
- Vercel deploy: `vercel deploy --yes --prod --name magaro` from project
  root after pushing to GitHub.

## Photos needed

- **Tuscany itinerary** — Chianti landscape or Castello di Brolio estate (currently using `rome.jpg` as placeholder)
- **Charleston itinerary** — Charleston street scene, architecture, or harbor (no photo exists yet; cover field set to `charleston.jpg` — add this file when ready)
- **Golf section (homepage §05)** — already using `old-head.webp` which is correct
- **Pebble itinerary** — already using `pebble-18.webp` which is correct

Drop new photos into `/public/photos/` and update the `cover` field in the relevant `.mdx` file.

## What's next on the list

Brainstormed additions, in rough priority order:

1. **Multi-step "Plan my trip" intake form** replacing the contact form
2. **"When NOT to use us" page** — counterintuitive trust play
3. **3 real anonymized case studies** at `/portfolio`
4. **Per-destination guide pages** under `/destinations/[slug]` — built; system reads from `content/destinations/*.mdx`. Add files to grow the catalog.
5. **Field journal map** showing places personally visited
6. **Budget calculator** widget on the contact page
7. **Cal.com inline booker** for the 40-minute discovery call
8. **"Tour operators we've actually used"** transparency page
9. **Subscriber count + recent-join feed** for social proof
10. **`/admin` portal** for posting journal & deals via a form

Pick from these or new ideas — just stay on positioning.
