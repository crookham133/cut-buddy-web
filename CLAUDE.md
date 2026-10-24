# Cut Buddy website: brief and rules

This repo is Cut Buddy's public website, plain HTML and CSS served by GitHub
Pages from `main` at https://cutbuddyapp.com (from 21 Oct; the old
crookham133.github.io/cut-buddy-web address redirects there). Jake builds
it; Ryan owns the app. The app links `privacy.html`, `health-data.html`,
`guardians.html`, `terms.html`, `support.html` and `approve.html` on the
domain by these exact paths, and App Store Connect will too: never rename
or move them. Setup, preview and publishing are in `START-HERE.md`.

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

**`theme.css` is the only source of styles** (decided 21 Oct). It holds the
app's real values, taken from its code: colours, the type scale, card,
label, key number, button, pill, macro bars, grid squares and chart lines.
`theme.html` shows each one next to its name.

- **Pages use its classes and variables.** No other file sets a colour, a
  font, a radius or a shadow. Page-specific layout (grid columns, section
  spacing) may sit in a page's own small `<style>`, built from `var(--cb-…)`
  only.
- **`style.css` goes:** fold what the pages still need into `theme.css`
  classes, then delete it.
- **To change the look,** change `theme.css`, and say in the PR which app
  value it follows.
- **The site is dark, like the app.** No light theme.

| Token | Hex | Use |
|---|---|---|
| black | `#000000` | Background (dark only, as the app) |
| surface | `#161616` | Cards, inputs |
| line | `#2A2A2A` | Dividers, borders |
| gold | `#FFCD00` (Pantone 116 C) | Logo, the one primary button, the one key number per screen |
| white | `#FFFFFF` | Primary text |
| muted | `#9A9A9A` | Secondary text |
| alert | `#E5484D` | Safety warnings only, never decoration |

- **Gold is used sparingly:** one primary action and one highlight per screen.
- **Macros always read protein gold, carbs white, fat gray,** in that order.
- **Text on gold is black, never white.**
- **Type:** the system font stack (SF Pro on Apple devices), as `theme.css`
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

**`BRIEF.md` is the brief, page by page.** It covers which app screens to
show and in what order, what the hero shows, which features get their own
section, and how to say what makes Cut Buddy different. The screenshots for
it are in `assets/screens/`, demo data only. This table is the status.

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
- **The waitlist form** (the backend is live; see "The waitlist endpoint"
  below):
  - **Fields:** email; first name; "I'm a…" (athlete, coach, parent, other);
    a required "I'm 13 or older" checkbox (Cut Buddy isn't for under-13s).
    All four are required.
  - **Consent line under the button:** "We'll email you when Cut Buddy
    launches. Nothing else, and you can unsubscribe anytime," with a link to
    the privacy policy.
  - **Success state:** "You're on the list. We'll email you when Cut Buddy is
    ready." Show the same message whether the address was new or already on
    the list; the server answers the same on purpose.
  - **The form goes live together with the published privacy policy, on
    cutbuddyapp.com** (decided 21 Oct). There's no public form before then,
    on GitHub Pages or anywhere else. The policy text that covers the waitlist
    is on the `policy-drafts` branch. Keep the form on its own branch; until
    launch the home page says "Coming soon to iPhone", with the support
    email.
  - **Retention:** each sign-up is kept until they unsubscribe, or 12 months
    after signing up, whichever comes first. The server deletes it then; the
    policy says so.
  - **No Google Forms, Formspree, Mailchimp embeds or any other third-party
    form.** The endpoint below is the only place sign-ups go.
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

- **How to reach us:** **cutbuddyapp@gmail.com** until the domain exists,
  as plain text with a copy button. The same address goes in the terms, the
  footer and the policies' contact lines.
- **FAQ:**
  - how do I delete my account (Settings → Privacy and data → Delete my
    account and data; it's immediate and permanent) or export my data (Export
    my data, same place);
  - how do I see or delete what Buddy remembers (Settings → Buddy → What Buddy
    knows about me);
  - how do I leave a team or change what my coach sees (Settings → Team and
    sharing → Team);
  - I'm a parent, what does my teen share (link to `guardians.html`);
  - a new phone or a reinstall: sign in with the same account and it comes
    back (the wording is in the review on PR #1);
  - subscriptions: a placeholder until billing exists.
- **The helplines block** (below), under "If you need help now".

## The waitlist endpoint

A Supabase database function, called straight from the page with a plain
`fetch`. No secret is involved: the key below is Cut Buddy's *public* key,
already inside the app, and safe in this public repo. It can only call this
function. The list itself can't be read, changed or deleted from the web, only
by Ryan's server.

- **URL:** `POST https://xbbfsizidhtdkhirwvqx.supabase.co/rest/v1/rpc/join_waitlist`
- **Headers:**
  - `apikey: <public key>`
  - `Authorization: Bearer <public key>`
  - `Content-Type: application/json`
- **Public key:**
  ```
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhiYmZzaXppZGh0ZGtoaXJ3dnF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA1Mjg5MjYsImV4cCI6MjEwNjEwNDkyNn0.q8qyZ0KMQ-FtB7YgVzEe4syFeYTT7DtjE6NzoEeleIQ
  ```
- **Body** (all five keys, every time):

  | Key | Type | From the form |
  |---|---|---|
  | `p_email` | string | the email field |
  | `p_first_name` | string | first name, 1–60 characters |
  | `p_role` | string | exactly `athlete`, `coach`, `parent` or `other` |
  | `p_is_13_or_older` | boolean | the checkbox; must be `true` |
  | `p_website` | string | the hidden honeypot field (below); always send it, normally `""` |

- **Success:** HTTP 200, `{"ok": true}`. The same answer when the address is
  already on the list, so the form can't reveal who has signed up.
- **Refused:** HTTP 4xx, JSON with `message` (a sentence you can show as is)
  and `hint` (a code to branch on):

  | `hint` | When | `message` |
  |---|---|---|
  | `invalid_email` | not an email | Enter a valid email address. |
  | `invalid_name` | blank or over 60 characters | Enter your first name. |
  | `invalid_role` | not one of the four | Choose athlete, coach, parent or other. |
  | `under_13` | box not ticked | Cut Buddy is for people 13 and older. |
  | `rate_limited` | 20 an hour or 50 a day from one connection, or 500 an hour overall | Too many sign-ups… Try again later. |

  For anything else (network down, 5xx), show: "Something went wrong. Try
  again in a minute."
- **The honeypot:** a text input named `website`, hidden from people but not
  from bots. Use a `position: absolute; left: -9999px` wrapper, plus
  `tabindex="-1"`, `autocomplete="off"` and `aria-hidden="true"`; not
  `display: none`, which bots skip. Send its value as `p_website`. When it's
  filled in, the server says yes and keeps nothing.
- **Testing:**
  - Use addresses ending `@example.test`, and tell Ryan, who clears them.
  - Every test try counts toward your connection's 20 an hour.
  - It works from `localhost` and from the GitHub Pages address.

```html
<form id="waitlist" novalidate>
  <label>First name <input name="first_name" autocomplete="given-name" required maxlength="60"></label>
  <label>Email <input name="email" type="email" autocomplete="email" required></label>
  <label>I'm a…
    <select name="role" required>
      <option value="athlete">Athlete</option><option value="coach">Coach</option>
      <option value="parent">Parent</option><option value="other">Other</option>
    </select>
  </label>
  <label><input name="age" type="checkbox" required> I'm 13 or older</label>
  <div style="position:absolute;left:-9999px" aria-hidden="true">
    <label>Website <input name="website" tabindex="-1" autocomplete="off"></label>
  </div>
  <button type="submit">Join the waitlist</button>
  <p id="waitlist-status" role="status"></p>
</form>
<script>
  const WAITLIST_URL = "https://xbbfsizidhtdkhirwvqx.supabase.co/rest/v1/rpc/join_waitlist";
  const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhiYmZzaXppZGh0ZGtoaXJ3dnF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA1Mjg5MjYsImV4cCI6MjEwNjEwNDkyNn0.q8qyZ0KMQ-FtB7YgVzEe4syFeYTT7DtjE6NzoEeleIQ";
  document.getElementById("waitlist").addEventListener("submit", async (e) => {
    e.preventDefault();
    // form.elements, not form.role: "role" is every element's ARIA role.
    const f = e.target, el = f.elements, status = document.getElementById("waitlist-status");
    const button = f.querySelector("button"); button.disabled = true; status.textContent = "";
    try {
      const res = await fetch(WAITLIST_URL, {
        method: "POST",
        headers: { apikey: PUBLIC_KEY, Authorization: "Bearer " + PUBLIC_KEY, "Content-Type": "application/json" },
        body: JSON.stringify({
          p_email: el.email.value, p_first_name: el.first_name.value, p_role: el.role.value,
          p_is_13_or_older: el.age.checked, p_website: el.website.value,
        }),
      });
      const body = await res.json().catch(() => ({}));
      if (res.ok && body.ok) { f.reset(); status.textContent = "You're on the list. We'll email you when Cut Buddy is ready."; }
      else status.textContent = body.message || "Something went wrong. Try again in a minute.";
    } catch {
      status.textContent = "Something went wrong. Try again in a minute.";
    } finally { button.disabled = false; }
  });
</script>
```

## Rules

1. **No secrets, ever.** No API keys, service keys, passwords, tokens or `.env`
   files, in any file, commit, branch, issue or comment. This repo is public.
   The only key that may ever appear is the Supabase *public* key in "The
   waitlist endpoint" above. If you think you've committed
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
   - App screenshots come only from the demo team: fictional people with
     plain names and fake data, never a real account. Ask Ryan for them.
   - Every phone mockup carries a small "Sample data" caption
     (`.cb-sample` in theme.css).
10. **Pre-launch:** pages carry `<meta name="robots" content="noindex, nofollow">`.
    Keep it until Ryan says launch.
11. **Build quality:**
    - Works at 390 px wide with no sideways scroll, and in light and dark.
    - Visible keyboard focus and real alt text.
    - Respect `prefers-reduced-motion`.
    - Keep pages fast: no frameworks unless Ryan agrees.
12. **Don't publish pricing, launch dates or features** that aren't confirmed.
    Ask Ryan.

## Working style

1. For anything bigger than a small fix, show Jake a plan first.
2. After every change, preview the site at desktop and 390 px phone width and
   take screenshots.
3. End every task with a report: what changed, screenshots, anything that
   failed, open questions, and the recommended next step.
4. Commit with a clear message after Jake approves, then push.
5. Never touch cut-buddy-ai, never add secrets, and ask before installing
   anything new.
