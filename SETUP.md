# Setup — Peter

A one-time setup to clone this repo and run it locally with Claude Code.

## 1. Install the prerequisites

You need three things on your Mac:

```bash
# 1. Node.js (LTS) — install via Homebrew, or from nodejs.org
brew install node

# 2. Git — usually preinstalled. Verify:
git --version

# 3. Claude Code CLI
npm install -g @anthropic-ai/claude-code
```

## 2. Clone the repo

```bash
cd ~/Desktop          # or wherever you want it to live
git clone https://github.com/montabano1/magaro.git remarkable
cd remarkable
```

## 3. Install dependencies

```bash
npm install
```

## 4. Run it

```bash
npm run dev
```

Open http://localhost:3000 in your browser. The site reloads automatically
when files change.

## 5. Run Claude Code

In the same directory:

```bash
claude
```

This opens an interactive Claude Code session that has full context of
the project (see `CLAUDE.md` in the repo root). You can ask it to:

- Add a new journal entry
- Update copy on any page
- Post a deal
- Tweak the design
- Explain how something works

Example prompts:

> "Add a new journal entry called 'A morning at Borgo Egnazia.' Use the
> /photos/ireland-group.webp photo as a placeholder cover."

> "On the homepage, change the hero subtitle so it specifically mentions
> our partnerships with Belmond and Rosewood."

> "Post a new deal: Borgo Egnazia, Puglia, three nights starting from
> $4,200, available June through September."

Claude Code can edit files, run commands, and commit changes for you.
**It will not push to GitHub or deploy to production unless you tell it
to** — say "push" or "deploy" when you're ready.

## 6. Pushing changes & deploying

After Claude makes changes locally, you'll see them at http://localhost:3000.
When you're happy:

```bash
# Commit and push to GitHub
git add -A
git commit -m "your message"
git push

# Deploy to production
vercel deploy --yes --prod --name magaro
```

Or just ask Claude Code: "push and deploy."

The first time you run `vercel`, it'll ask you to log in (one-time browser
auth) and link the project — pick the existing `magaro` project owned by
montabano1-gmailcoms-projects.

```bash
npm install -g vercel    # one-time install
vercel login
```

## Where things live

- **Live site:** https://magaro-nine.vercel.app
- **GitHub repo:** https://github.com/montabano1/magaro
- **Vercel project:** magaro (under montabano1's team)
- **Photography:** `public/photos/` — drop new images here
- **Journal posts:** `content/journal/*.mdx`
- **Deals:** `content/deals/*.mdx`

## When something goes wrong

- **`npm run dev` errors:** Try `rm -rf node_modules .next && npm install`
- **Build fails locally:** Ask Claude Code to read the error and fix it
- **Vercel deploy fails:** Check the Vercel dashboard or run `vercel logs`
- **Git asks for credentials:** Set up a GitHub personal access token or
  use the `gh` CLI: `brew install gh && gh auth login`

## A note on email signups

Right now newsletter signups save to `data/subscribers.json` locally. To
have them flow into a real mailing list (Resend, recommended), set these
environment variables in the Vercel dashboard:

```
RESEND_API_KEY=re_xxxxxxxxxxxx
RESEND_AUDIENCE_ID=xxx-xxx-xxx
CONTACT_NOTIFY_EMAIL=info@remarkabletd.com
```

Resend is free for the first 3,000 emails per month. Sign up at
resend.com, create an "audience," paste the keys into Vercel → Project
Settings → Environment Variables. The next deploy activates them.
