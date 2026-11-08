# Project plan

Recorded 8 November 2026 from the git checkout of `salesappzinc-byte/vision`, branch `cursor/vision-scaffold-3285`. Pull request 1 is open and unmerged. This file does not set dates or claim a public launch.

Local design or app work that was never committed is not in this checkout, so it is not inspected here.

## Current evidence

| Item | State |
| --- | --- |
| Default branch `main` | The `/vision` skill package only. Not the education site. |
| This branch | Vision, course research, creator-marketplace research, written gateway draft, and a static Clearpath mobile course-detail mock under `design/clearpath-a/`. |
| Learner web app | Absent. The HTML mock is a visual frame. It does not navigate lessons or run a quiz. |
| Gateway course | Written draft. Not recorded, captioned, piloted, or published. |
| Accounts, payments, AI practice API | Not built. Owner decisions below block them. |

## Phases

Each later phase waits on the one above it unless noted.

1. **Baseline and free course text.** Confirm the skill, the written gateway, and the committed design mock stay distinct. Acceptance: `python3 -m unittest tests/test_gateway_content.py` passes, and no new frontend stack is added while the app is missing.
2. **Recording, captions, beginner pilot.** After the owner approves a presenter or voice. Scripts are not captions. Acceptance: a real recording exists, captions match that cut, and a pilot has participants. Not started.
3. **Accounts, consent, progress, community.** After launch countries are chosen. Marketing consent stays separate. Not started.
4. **Creator drafts, review, rights, freshness.** After the free journey exists in an app. Not started.
5. **Payments, entitlements, refunds, earnings, payouts.** After legal seller, prices, commission, and payout rules are set. Not started.
6. **Capped in-site AI practice.** After a budget and provider are chosen. Lessons already use an ordinary browser chat. Not started.
7. **Accessibility, security, QA, launch.** After the app and the checks above exist. Not started.

Reversible default: keep course text in `courses/gateway/` and check it with the standard-library script. That does not choose a website framework.

## This milestone

Content integrity check only. App integration is blocked by the missing learner application. The Clearpath mock is left unchanged.

## Owner decisions still blocking the next product step

- Launch countries and who the legal seller is.
- Presenter or voice approval before any recording.
- AI practice budget and provider, if practice moves inside the site.

Prices, commission, and payout rules also stay unset. They block payments, not this text check.
