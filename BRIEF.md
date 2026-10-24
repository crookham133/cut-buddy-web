# Site brief: page by page

What to build, in what order, and why. Styles come only from `theme.css`
(see `theme.html`). App screenshots are in `assets/screens/`. They come
from fictional demo accounts with plain names and fake data, never a real
account.

**Every phone mockup gets a small "Sample data" caption**, under or beside
it: `<span class="cb-sample">Sample data</span>` (theme.css).

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
  from a tested engine, with safety built in."
- **The button** (gold, one on the page): "Join the waitlist" at launch. Until
  then, the plain text "Coming soon to iPhone", with no button.
- **The phone:** `plan.png` (Plan: protein, carbs and fat left, the ring,
  breakfast logged). It's the screen people use every day, and it shows real
  numbers from someone's real day at a glance.
  - On wide screens, put `chat.png` slightly behind it, so the hero says
    "plan" and "talk to it" at once.

### 2. Planned around your training: `plan.png` (or `buddy.png`)

- **Copy:** "Hard days get more fuel than rest days. Meals are timed around
  practice and lifts: a pre-fuel before, recovery after. A competition on
  the calendar counts the plan down to it."
- **Water lives here,** as one line: "Water too, in the unit you use." It
  doesn't need its own section.
- **This is the core.** Most apps count calories after the fact; this plans
  the day ahead.

### 3. Log it by saying it: `chat.png`

- **Copy:** "Tell Buddy what you ate or drank, in your own words. You see
  exactly what it heard and tap Log it. Nothing goes in your day until you
  confirm."
- **Say the confirm step out loud.** It's the reason to trust a chat
  logger, and nobody else leads with it.

### 4. See the trend, not the noise: `weight.png`, then `radar.png`

- **The weight chart:** "Daily weigh-ins bounce. Cut Buddy shows your 7-day
  average against your plan line, and tells you plainly where you stand:
  on the line, behind, or going too fast."
- **The weekly score (radar):** "Six areas you chose (protein, water,
  fueling around training, logging...) scored each week, so you know what to
  work on."
- **Two screenshots side by side** on desktop, stacked on phones.

### 5. Safety isn't a setting

The section that sets Cut Buddy apart for parents, coaches and athletic
trainers. No screenshot; a short list in a card:

- Weight loss is capped at a safe weekly rate, and the plan slows itself if
  you lose faster.
- It never plans below your certified minimum weight, or below your resting
  energy.
- No dehydration, saunas, spitting, laxatives or fasting to make weight,
  ever.
- Your health answers change what you're shown. Someone the app shouldn't
  show numbers to doesn't see them.
- Every number comes from a tested nutrition engine. The AI writes words,
  never numbers.
- Not medical advice: it points you to a doctor, athletic trainer or
  registered dietitian.

**Only claims the app enforces today.** Check any new line with Ryan before
it goes up.

### 6. For coaches: `coach-roster.png`

- **Copy:** "See your team at a glance: on track, behind, or losing too
  fast, with a heads-up when someone needs a check-in. Athletes choose what
  you see, parents approve for under-18s, and every look is shown to the
  athlete."
- **Never rank weight on the site,** and don't show a weight leaderboard.
  The app doesn't have one.

### 7. Waitlist (at launch only)

The form from "The waitlist endpoint" in CLAUDE.md, once the privacy policy
that covers it is published on cutbuddyapp.com. Until then, a line instead:
"Coming soon to iPhone. Questions: cutbuddyapp@gmail.com."

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
| `support.html` | Contact: cutbuddyapp@gmail.com until the domain exists. FAQ wording is in the review on PR #1. |
| `terms.html` | For counsel to review. No draft banner (Ryan, 24 Oct). |
| `privacy.html`, `health-data.html`, `guardians.html` | The text is Ryan's. Restyle with theme.css only. |
| `approve.html` | Don't edit (CLAUDE.md, rule 6). |

## Writing

- **Plain and short, second person.** Name the feature by what it does for
  the person.
- **No hype words**, no "AI-powered".
- **No weight numbers as a selling point.**
- **No sport-only framing in headlines.** Athletes in the copy, everyone in
  the promise. Weigh-ins and weight classes appear only where the section is
  about them (the coach section, an athlete's example), never as the default.
