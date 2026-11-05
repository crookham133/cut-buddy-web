# App screenshots for the site

From the app on the iOS Simulator, signed in to the demo team only: fictional
people with plain names and fake, seeded data. The status bar is set to 9:41
with full signal and battery.

Phone screens are 402 × 874 points. The 4 Nov captures are 3x (1206 × 2622);
the older ones are 2x (804 × 1748). Both are the same shape and go in
`.cb-phone` (theme.css). Crops sit in a `.cb-card` at most 402 px wide.

| File | Screen | Account | Captured | Use (BRIEF.md) |
|---|---|---|---|---|
| `plan.png` | Plan: the week, today's breakfast logged (eggs, toast, banana), water, groceries, today's meals | Diego Morales (fictional) | 4 Nov, 3x | Hero |
| `chat.png` | Buddy: a snack question and its answer, then "Had a chicken bowl with rice and black beans for lunch", Buddy's reply and "Logged 3 items to lunch." No sport, no practice times | Coach Alex Moreno (fictional) | 4 Nov, 3x | Not on the page yet (the brief's "behind the hero phone on wide screens") |
| `chat-confirm.png` | Crop of `chat.png` (1206 × 760): the lunch message, Buddy's reply, and the logged line | Coach Alex Moreno (fictional) | 4 Nov, 3x | Section 3 |
| `voice-mode.png` | Voice mode at the end of a turn: "Here's what I've got: your lunch. Tap Log all to save it." and the one card. Two lines under the card are painted black: a simulator-only notice and a development-build timing readout, which a real phone never shows | Diego Morales (fictional) | 4 Nov, 3x | Section 3 |
| `score-card.png` | Progress: this week's score card (93, "Dialed in", the radar) above the six area tiles. Two crops of the same screen stacked, since the weight card sits between them in the app; no weight figures | Diego Morales (fictional) | 4 Nov, 3x | Section 4 |
| `weight-chart.png` | Performance: the weight-against-plan chart only. Axis numbers and target label painted out | Diego Morales (fictional) | 21 Oct, 2x | Section 4. Card-shaped (1106 × 752), in a `.cb-card` |
| `coach-roster.png` | Coach's team: Too fast, Behind, On track | Coach Dana Whitfield (fictional) | 21 Oct, 2x | Section 6 |
| `buddy.png` | Buddy: the greeting, pre-fuel countdown, the day strip and water | Owen Fischer (fictional) | 21 Oct, 2x | Not used |
| `radar.png`, `radar-card.png` | The old weekly score (74, "Solid week") | Diego Morales (fictional) | 21 Oct, 2x | Not used since 4 Nov (`score-card.png` replaced them) |
| `plan-week.png` | Crop of the old `plan.png` | Diego Morales (fictional) | 21 Oct, 2x | Not used since 24 Oct |

Show phones in `.cb-phone` with no caption: "Sample data" captions were
dropped on 24 Oct (Ryan). **No weight figures anywhere on the site** (Ryan,
21 Oct): no weights, axis values or targets in any image or text.

Never replace these with a real account's screens. New ones come from Ryan,
taken the same way.
