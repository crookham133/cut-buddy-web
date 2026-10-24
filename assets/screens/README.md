# App screenshots for the site

From the app on the iPhone 16 Pro simulator, 21 Oct 2026, signed in to
the demo team only: fictional people with plain names and fake, seeded data. The status bar is set to 9:41 with full signal and battery. Phone screens are
804 × 1748: twice the phone's width in points, sharp in a 402 px frame. Put
them in `.cb-phone` (theme.css).

| File | Screen | Account | Use (BRIEF.md) |
|---|---|---|---|
| `plan.png` | Plan: macros left, the day's ring, breakfast logged, water | Diego Morales (fictional) | Hero; section 2 |
| `chat.png` | Buddy: "Drank 20 oz" and its confirm card | Diego Morales (fictional) | Hero (behind, on wide screens); section 3 |
| `weight-chart.png` | Performance: the weight-against-plan chart only (7-day average against the plan line). No weight figures: the big number and the lb line are outside the crop, and the axis numbers and target label are painted out | Diego Morales (fictional) | Section 4. **Card-shaped (1106 × 752), not a phone screen:** show it in a `.cb-card`, not `.cb-phone` |
| `radar.png` | Performance: this week's score and the six areas | Diego Morales (fictional) | Section 4 |
| `coach-roster.png` | Coach's team: Too fast, Behind, On track | Coach Dana Whitfield (fictional) | Section 6 |
| `buddy.png` | Buddy: the greeting, pre-fuel countdown, the day strip and water. No warnings showing | Owen Fischer (fictional) | Section 2 |
| `radar-card.png` | Crop of `radar.png` (732 × 590): the score, "Solid week" and the radar, inside the card | Diego Morales (fictional) | Section 4, in a `.cb-card` (24 Oct: the detail, not a small full phone) |
| `chat-confirm.png` | Crop of `chat.png` (804 × 600): "Drank 20 oz" and the Log this? card, without the low-fuel warning | Diego Morales (fictional) | Section 3 |
| `plan-week.png` | Crop of `plan.png` (804 × 545): the week and a hard day's macros | Diego Morales (fictional) | Not used since 24 Oct (it repeated the hero's Plan screen) |

**Resolution (24 Oct).** These are 2x captures (804 px wide). They're sharp on
desktop, but on a 3x iPhone `plan.png`, `coach-roster.png`, `chat-confirm.png`
and `radar-card.png` are shown up to 1.33x larger than they are, so a little
soft. Recapture `plan.png`, `chat.png`, `radar.png` and `coach-roster.png` at
1206 px wide (3x) and re-cut the crops from them.

Show each in `.cb-phone`, with no caption: "Sample data" captions were
dropped on 24 Oct (Ryan). **No weight figures anywhere on the site** (Ryan, 21 Oct): no weights, axis values or targets in any image or text.

Never replace these with a real account's screens. New ones come from
Ryan, taken the same way.
