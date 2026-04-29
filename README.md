# Remarkable Travel Design

A consolidated, editorial-grade site for **Remarkable Travel Design** and
**Remarkable Golf Travel** — built on Next.js 15, Tailwind v4, and
file-based MDX content.

## What's here

- **/** — Editorial homepage
- **/journeys** — Bespoke luxury travel landing
- **/golf** — Golf-specialty landing
- **/journal** — Posts/articles index + detail pages
- **/deals** — Current offers index + detail pages
- **/about** — Founders & atelier
- **/contact** — Inquiry form
- **/api/subscribe** — Newsletter signup endpoint
- **/api/contact** — Inquiry submission endpoint

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Adding a journal post

1. Create `content/journal/your-slug.mdx`
2. Add frontmatter:

```mdx
---
title: "Your title"
excerpt: "One-line summary that appears on the index and in cards."
date: "2026-04-29"
category: "Field Notes"
author: "Peter Magaro"
readTime: "5 min read"
cover: "/photos/your-image.jpg"
---

Body text here. Standard MDX/Markdown.

## Subheads work like this

> Pull-quotes get a gold rule and serif italic.

- Lists
- Are nicely styled
```

3. Save the file. The index regenerates on rebuild.

## Adding a deal

Same pattern, in `content/deals/your-slug.mdx`:

```mdx
---
title: "Your offer title"
excerpt: "One-line teaser."
date: "2026-04-29"
category: "Golf"
tag: "Partner offer"
location: "Pebble Beach, California"
expires: "2026-05-30"
cover: "/photos/your-image.jpg"
---

Offer body.
```

## Adding photography

Drop high-res JPG or WebP into `/public/photos/`. Reference as
`/photos/your-file.webp` anywhere in the site.

## Email capture

By default, subscribers are saved to `data/subscribers.json` (gitignored).

To wire up Resend (recommended):

```bash
# .env.local
RESEND_API_KEY=re_...
RESEND_AUDIENCE_ID=...
CONTACT_NOTIFY_EMAIL=info@remarkabletd.com
```

Restart the dev server. Subscribers will sync to your Resend audience and
contact form submissions will email you directly.

Other providers (Mailchimp, ConvertKit, Loops) — swap the `syncToResend`
function in `lib/subscribers.ts`.

## Content cadence (recommendation)

- **Journal:** 1–2 posts per month. Field notes from trips, partner
  introductions, the small recommendations.
- **Deals:** as they come up. Subscribers should see them first
  (newsletter) before they appear here.

## Deploying

Designed for Vercel. Push to GitHub, import in Vercel, set env vars,
deploy. Default Node 24 / Fluid Compute config will work as-is.
