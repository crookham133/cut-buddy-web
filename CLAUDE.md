# Cut Buddy website: brief and rules

This repo is Cut Buddy's public website, plain HTML and CSS served by GitHub
Pages from `main` at https://crookham133.github.io/cut-buddy-web/. Jake builds
it; Ryan owns the app. Setup, preview and publishing are in `START-HERE.md`.

## What Cut Buddy is

- An iPhone app: **an adaptable nutrition partner for everyone and every
  situation.** Cutting, maintaining or gaining; on a GLP-1, through menopause,
  through a sick week, on the road, at fifteen or at seventy.
- It builds a home-cooked meal and water plan from the person's own numbers
  and adapts it as their training, competitions, health and travel change.
- **Buddy** is the in-app AI you talk to; it can log meals from a sentence.
  Every number comes from a deterministic nutrition engine, never from the AI.
- A **safety gate** decides what each person may be shown. For example, someone
  with an eating disorder history never sees calorie or weight numbers.
- **Teams:** coaches see what athletes choose to share, at levels the athlete
  sets. A parent approves for under-18s. Athletes see who looked.
- **Athletes, starting with wrestlers, are the entry market, not the
  identity.** The site can speak to athletes; it must not read as a
  wrestling-only or weight-cutting app.
- **Not medical advice.** It points medical questions to a doctor, athletic
  trainer or registered dietitian.
- Status: pre-launch (TestFlight next). No public pricing yet.

## Brand

| Token | Hex | Use |
|---|---|---|
| black | `#000000` | Background. The app is dark-only; the site can offer light too |
| surface | `#161616` | Cards, inputs |
| line | `#2A2A2A` | Dividers, borders |
| gold | `#FFCD00` (Pantone 116 C) | Logo, the one primary button, the one key number per screen |
| white | `#FFFFFF` | Primary text |
| muted | `#9A9A9A` | Secondary text |
| alert | `#E5484D` | Safety warnings only, never decoration |

- **Gold is used sparingly:** one primary action and one highlight per screen.
  On a light background, gold text uses the darker `#8A6B00` for contrast
  (`style.css` already does).
- **Text on gold is black, never white.**
- **Type:** the system font stack (SF Pro on Apple devices), as `style.css`
  has it. No web-font CDN: Google Fonts sends every visitor's IP address to
  Google, which the privacy policy doesn't list. Self-host a font file in the
  repo if you want one.
- **Copy:** sentence case everywhere. Buttons say exactly what happens ("Join
  the waitlist"). Plain, direct, no hype.
- **Logo** (in `assets/`): a gold "C" around a smiling black apple.
  - `logo-mark.png` (390×427): the mark on a transparent background. The apple
    is a cut-out, so use it **on black only**; on white the apple disappears.
  - `logo.png` (1266×832): the mark on black, for social and press.
  - `app-icon-1024.png`: the App Store icon.
  - Don't recolour, stretch, outline or redraw them. Ask Ryan if you need a
    vector.

## The site brief

| Page | File | Status | Notes |
|---|---|---|---|
| Home: hero and waitlist | `index.html` | **To build** | Replaces the privacy policy currently at `index.html` (a copy is now at `privacy.html`) |
| Privacy policy | `privacy.html` | Live draft | Newer text on the `policy-drafts` branch |
| Consumer health data policy | `health-data.html` | Live draft | Washington, Nevada and similar laws |
| For parents and guardians | `guardians.html` | Live draft | Teens 13–17 |
| Terms of use | `terms.html` | **To write** | Draft for counsel |
| Support | `support.html` | **To build** | Apple requires a support URL |
| Guardian approval | `approve.html` | Live, wired to the app | **Don't edit** (see rules) |

### Home: hero and waitlist

- **The hero** says what Cut Buddy is in one line and who it's for. It shows
  the app, as a screenshot or the logo on black, and has one gold button that
  goes to the waitlist.
- **What it does:** three or four short points. A plan from your own numbers,
  Buddy you can talk to, it adapts when life changes, and safety built in.
  Team features are optional.
- **The waitlist form:**
  - **Fields:** email; a required "I'm 13 or older" checkbox (Cut Buddy isn't
    for under-13s); optionally "I'm a…" (athlete, coach, parent, other).
  - **Consent line under the button:** "We'll email you when Cut Buddy
    launches. Nothing else, and you can unsubscribe anytime," with a link to
    the privacy policy.
  - **Where signups go isn't decided.** Build the form and a success state,
    but don't connect it to any service. Ryan will choose; most likely a
    Supabase table that can only be added to, using the app's public key,
    which he'll give you. **No Google Forms, Formspree, Mailchimp embeds or
    any other third-party form without Ryan's OK.**
  - The privacy policy must mention the waitlist before the form goes live.
    Flag that to Ryan.
- **Footer:**
  - links to privacy, health data, parents, terms and support;
  - "Cut Buddy gives nutrition information, not medical advice";
  - © the company. Its name is still to come: leave the placeholder
    `<span class="ph">company name to come</span>`.

### Policies (privacy, health data, parents, terms)

- **Drafts awaiting counsel.** Keep the red "draft" banner until Ryan says
  counsel has approved them.
- **The words must match what the app actually does.** Don't change what a
  policy says the app collects, shares or keeps. Layout, typography and
  navigation are yours; substance is Ryan's.
- **The source of the policy text** is `docs/legal/drafts-for-counsel.html` in
  cut-buddy-ai. The newest page versions are on this repo's `policy-drafts`
  branch, unpublished until the domain exists.
- **Terms of use:** start from a short plain-language structure:
  - who can use it (13+, under-18s with a guardian's OK for teams);
  - not medical advice;
  - subscriptions and cancellation (placeholder until pricing is final);
  - acceptable use;
  - AI answers can be wrong;
  - ending your account;
  - contact.

  Mark it a draft for counsel.

### Support

- **How to reach us:** an email address, as plain text with a copy button.
  Ryan supplies the address; use a placeholder until then.
- **FAQ:**
  - how do I delete my account (Settings → Privacy and data → Delete my
    account and data; it's immediate and permanent) or export my data (Export
    my data, same place);
  - how do I see or delete what Buddy remembers (Settings → Buddy → What Buddy
    knows about me);
  - how do I leave a team or change what my coach sees (Settings → Team and
    sharing → Team);
  - I'm a parent, what does my teen share (link to `guardians.html`);
  - restoring on a new phone: **don't promise this yet**, it's being built;
  - subscriptions: a placeholder until billing exists.
- **The helplines block** (below), under "If you need help now".

## Rules

1. **No secrets, ever.** No API keys, service keys, passwords, tokens or `.env`
   files, in any file, commit, branch, issue or comment. This repo is public.
   The only key that may ever appear is the Supabase *public* (anon) key, and
   only if Ryan gives it to you for the waitlist. If you think you've committed
   a secret, tell Ryan at once; deleting the commit doesn't un-publish it.
2. **Never edit cut-buddy-ai.** Read it for the brand, the legal drafts and
   context, but don't push, branch or open pull requests there. Website work
   happens only in this repo.
3. **No tracking.** No analytics, pixels, tag managers, session replay, ad or
   attribution scripts, social embeds or chat widgets. That covers Google
   Analytics, Meta, TikTok, LinkedIn, Plausible, PostHog, Hotjar, Clarity and
   the rest. No cookies. Ryan's site check fails on them. The app's privacy
   promise is that nothing tracks you, and the site is part of that promise.
4. **Load nothing from other sites** unless Ryan agrees: no CDN fonts, scripts
   or iframes (YouTube, maps). Put files in the repo.
5. **Keep these URLs stable.** The app opens `privacy.html`, `health-data.html`,
   `guardians.html` and `approve.html` by these exact paths. Never rename, move
   or delete them. `index.html` is free to become the home page.
6. **Don't edit `approve.html`.** It's the guardian approval page, wired to the
   app's server and part of the parental-consent flow. It's on hold until the
   domain and the email sender exist. Ask Ryan first.
7. **The helplines block is generated.** Never edit anything between
   `<!-- helplines:start ... -->` and `<!-- helplines:end -->`. It comes from
   the app's single helplines file, and Ryan's check fails if it drifts. To add
   it to a new page, copy the whole block, markers included, from
   `guardians.html`. The current lines are:
   - Crisis or self-harm: the 988 Suicide & Crisis Lifeline, call or text 988, 24/7.
   - Eating disorder support: the National Alliance for Eating Disorders helpline, (866) 662-1235, weekdays 9 AM–7 PM ET.
   - Text support anytime: the Crisis Text Line, text HOME to 741741.

   Never use the old NEDA helpline number; it's retired.
8. **Safety in the marketing copy:**
   - No weight-cutting tactics, and no "make weight fast", "drop X lb in a
     week", dehydration, sauna, spitting, laxatives or fasting language.
   - No before-and-after bodies and no weight numbers as selling points.
   - No medical claims (treats, cures, prevents).
   - No university logos, uniforms or marks.
9. **People:**
   - Ambassadors (Angelo Ferrari, Ben Kueter, Ryan Crookham) appear only with
     their written OK, through Ryan.
   - App screenshots come only from the demo team (names end in "(demo)"),
     never a real account. Ask Ryan for them.
10. **Pre-launch:** pages carry `<meta name="robots" content="noindex, nofollow">`.
    Keep it until Ryan says launch.
11. **Build quality:**
    - Works at 390 px wide with no sideways scroll, and in light and dark.
    - Visible keyboard focus and real alt text.
    - Respect `prefers-reduced-motion`.
    - Keep pages fast: no frameworks unless Ryan agrees.
12. **Don't publish pricing, launch dates or features** that aren't confirmed.
    Ask Ryan.
