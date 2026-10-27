# Start here

Welcome, Jake. This repo is Cut Buddy's public website, served by GitHub Pages at
**https://cutbuddyapp.com** (the old crookham133.github.io/cut-buddy-web
address redirects there). You own it. This page gets you from zero to a published change; `CLAUDE.md` has the
brief, the brand and the rules. Claude reads `CLAUDE.md` automatically when you
work here with Claude Code, so it knows them too.

## What Cut Buddy is, in one paragraph

An iPhone app: an adaptable nutrition partner that builds a person's meal and
water plan from their own numbers and adjusts it as life changes (training,
competitions, sickness, travel, a GLP-1, menopause, a week on the road). Athletes,
starting with wrestlers, are the first market because they have the hardest
constraints; they are not the whole product. "Buddy" is the in-app AI you talk
to. Every number comes from a deterministic engine, and a safety gate decides
what each person may be shown. It gives nutrition information, not medical advice.

## The two repos

| Repo | What it is | You |
|---|---|---|
| `crookham133/cut-buddy-web` (this one, public) | The website | Edit, preview, publish |
| `crookham133/cut-buddy-ai` (private) | The app, its server and the policy drafts for counsel | **Read only. Never push, branch, comment code changes or open PRs there.** |

Things worth reading in cut-buddy-ai: `START-HERE.md`, `docs/CONTEXT.md`,
`CLAUDE.md` (the full build spec, including brand and safety rules) and
`docs/legal/`.

## One-time setup

1. Accept the GitHub invitations to both repos (github.com → your notifications,
   or the email from GitHub). Until you do, you can't push.
2. Clone this repo somewhere whose path has **no spaces**:
   ```sh
   mkdir -p ~/Code && cd ~/Code
   git clone https://github.com/crookham133/cut-buddy-web.git
   cd cut-buddy-web
   ```
3. Optional, for reference: clone cut-buddy-ai next to it, read only:
   `git clone https://github.com/crookham133/cut-buddy-ai.git`

No build step, no npm install, no accounts or keys. The site is plain HTML and CSS.

## Preview

```sh
cd ~/Code/cut-buddy-web
python3 -m http.server 8000
```

Open http://localhost:8000. Stop with Ctrl-C. Check every page at phone width
(the browser's device toolbar, about 390 px wide) and in both light and dark
mode. Nothing to install: `python3` comes with macOS. Don't `pip install`
anything for this site.

## Publish

GitHub Pages serves the `main` branch, from the repo's root folder. Whatever
lands on `main` is live within a minute or two.

```sh
git checkout -b hero                 # one branch per piece of work
# ...edit, preview...
git add -A
git commit -m "Hero and waitlist form"
git push -u origin hero
```

Then open a pull request on GitHub. Merging it into `main` publishes it. Check
the "pages build and deployment" run under the Actions tab, then the live URL.
To undo a bad publish, revert the merge on GitHub; the previous version comes
back the same way.

## Branches already here

- `main`: what's live. Today that's the privacy policy (`index.html` and its new
  twin `privacy.html`), the consumer health data policy, the page for parents,
  and the guardian approval page.
- `policy-drafts`, `policy-updates-oct22`: superseded. Their policy text was
  brought onto `main` on 24 Oct. Start policy work from `main`.

## Checks that run on this site

Ryan's repo runs `scripts/check-site.mjs` against this one on every app push and
daily. It fails on any tracking script or pixel, any server secret, and any crisis
helpline text that isn't exactly the app's. If it flags something you did, Ryan
will tell you. You can also run it yourself from a read-only clone of
cut-buddy-ai:

```sh
cd ~/Code/cut-buddy-ai && node scripts/check-site.mjs ../cut-buddy-web
```

## Questions

Ask Ryan. Anything touching privacy, health data, minors, the helplines, pricing
or the app's links is his call before it ships.
