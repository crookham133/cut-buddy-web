# Site brief: page by page

What to build, in what order, and why. Styles come only from `theme.css`
(see `theme.html`). App screenshots are in `assets/screens/`. They come
from fictional demo accounts with plain names and fake data, never a real
account.

Screenshots carry no "Sample data" caption (Ryan, 24 Oct). They still come
only from the demo accounts, with fictional names.

## Positioning (decided 22 Oct)

- **The brand:** nutrition that adapts to your life, for everyone. That's
  the promise in every headline.
- **The origin story:** born in a wrestling room. It's where Cut Buddy comes
  from, and the site can say so once, plainly (the About or story line, the
  footer), never as who it's for.
- **The go-to-market:** wrestlers and combat athletes (wrestling, judo,
  jiu-jitsu, boxing, MMA), their coaches and parents. They're who we reach
  first: ambassadors, the /join page, coach copy. Sections can speak to them
  by name; the headline and the hero don't.

## Home: cutbuddyapp.com

The page has one job: show, in the app's own screens, that Cut Buddy plans
around your training and keeps you safe, and get the visitor onto the
waitlist. Each section is one idea, one screenshot and two or three
sentences. Sections run in this order.

### 1. Hero

- **Headline:** "Know what to eat, and when." (keep yours). It is the
  difference in five words: timing around training, not just totals.
- **Under it:** "Cut Buddy builds your meals and water around your
  training, and changes the plan when your week does. Every number comes
  from tested nutrition math, with safety built in."
- **The button** (gold, one on the page): "Join the waitlist" at launch. Until
  then, the plain text "Coming soon to iPhone", with no button.
- **Ambassadors:** one line under "Coming soon to iPhone. Questions:
  support@cutbuddyapp.com": "Apply for ambassadorship →", linking to
  `ambassadors.html`, styled like the email link (27 Oct, Ryan).
- **The phone:** `plan.png` (Plan: protein, carbs and fat left, the ring,
  breakfast logged). It's the screen people use every day, and it shows real
  numbers from someone's real day at a glance.
  - On wide screens, put `chat.png` slightly behind it, so the hero says
    "plan" and "talk to it" at once.

### 2. Planned around your training: `plan.png` (or `buddy.png`)

- **Copy:** "Hard days get more food than rest days, and meals are timed
  around practice and lifts: fuel before, recovery after. Add a competition
  and the plan counts down to it."
- **Water lives here,** as one line: "Your water target is planned too, in
  ounces or milliliters." It doesn't need its own section.
- **This is the core.** Most apps count calories after the fact; this plans
  the day ahead.

### 3. Log it by saying it: `chat.png`

- **Copy:** "Tell Buddy what you ate or drank, in your own words. You see
  exactly what it heard and tap Log it. Nothing is logged until you
  confirm."
- **Say the confirm step out loud.** It's the reason to trust a chat
  logger, and nobody else leads with it.

### 4. See the trend, not the noise: `weight.png`, then `radar.png`

- **The weight chart:** "Daily weigh-ins go up and down. Cut Buddy compares
  your 7-day average with your plan and tells you where you stand: on track,
  behind, or losing too fast."
- **The weekly score (radar):** "Each week, Cut Buddy scores the six areas
  you picked, like protein, water and logging, so you know what to work on
  next."
- **Two screenshots side by side** on desktop, stacked on phones.

### 5. Safety isn't a setting

The section that sets Cut Buddy apart for parents, coaches and athletic
trainers. No screenshot; a short list in a card:

- Weight loss is capped at a safe weekly rate. If you lose faster than that,
  the plan slows down on its own.
- Your plan never goes below what your body needs at rest, or below your
  certified minimum weight if your sport sets one.
- It never suggests unsafe ways to make weight. (Say it this way: the site
  doesn't list tactics, CLAUDE.md rule 8.)
- What you tell us about your health shapes what the app shows you. If
  numbers like calories or weight could do you harm, you won't see them.
- Every number comes from tested nutrition math, not the AI. Buddy only
  writes the words.
- It isn't medical advice. For medical questions, it points you to a doctor,
  athletic trainer or registered dietitian.

**Only claims the app enforces today.** Check any new line with Ryan before
it goes up.

### 6. For coaches: `coach-roster.png`

- **Copy:** "See your team at a glance: on track, behind, or losing too
  fast, with a heads-up when someone needs a check-in. Athletes choose what
  you see, a parent approves for anyone under 18, and athletes can see each
  time you look."
- **Never rank weight on the site,** and don't show a weight leaderboard.
  The app doesn't have one.

### 7. Waitlist (at launch only)

The form from "The waitlist endpoint" in CLAUDE.md, once the privacy policy
that covers it is published on cutbuddyapp.com. Until then, a line instead:
"Coming soon to iPhone. Questions: support@cutbuddyapp.com."

### 8. Footer

- Privacy, consumer health data, parents and guardians, terms, support.
- "Cut Buddy gives nutrition information, not medical advice."
- © the company (still to come).

## Which screens, ranked

1. **Plan week** (`plan.png`): the daily value, the hero.
2. **Chat logging** (`chat.png`): the easiest thing to love, and the confirm
   step builds trust.
3. **Weight against plan** (`weight.png`): the proof it works over weeks.
4. **Coach roster** (`coach-roster.png`): the second audience, and the
   safety story told through a product.
5. **Performance radar** (`radar.png`): motivation; supports 3.
6. **Buddy's day strip** (`buddy.png`): only if a section needs a second
   shot. Its low-fuel warning is right for that athlete, but it isn't a
   first impression.

Water gets a line, not a section. Leaderboards stay out until the safety
story around them is told.

## Other pages

| Page | Notes |
|---|---|
| `support.html` | Contact: support@cutbuddyapp.com. FAQ wording is in the review on PR #1. |
| `terms.html` | Draft for counsel, with the red banner. |
| `privacy.html`, `health-data.html`, `guardians.html` | The text is Ryan's. Restyle with theme.css only. |
| `approve.html` | Don't edit (CLAUDE.md, rule 6). |
| `ambassadors.html` | "Apply to be an ambassador", for athletes and coaches 18+. Fields and errors exactly as `apply_ambassador` in cut-buddy-ai PR #21: first and last name, email, sport, level, an optional weight class, one to three social accounts with follower counts, why (500 characters), 18+; each refusal shown under its field. No photo upload. Linked from every footer and quietly under the hero. Goes live with the policy that covers applications (PR #11). |

## Writing

- **Plain and short, second person.** Name the feature by what it does for
  the person.
- **No hype words**, no "AI-powered".
- **No weight numbers as a selling point.**
- **No sport-only framing in headlines.** Athletes in the copy, everyone in
  the promise. Weigh-ins and weight classes appear only where the section is
  about them (the coach section, an athlete's example), never as the default.
