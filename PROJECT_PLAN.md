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
| Paid and advanced drafts | Written 8 Nov 2026. Not for sale. Not recorded. The video pack is unapproved. |
| Video mini-course outlines | `courses/paid/video/outline-approval.md`, 8 Nov 2026. Awaiting approval. Full lessons not started. |
| Course update routine | Parent owns Monday 09:00 SGT. No run has happened in this repo. |
| Creator media | Contract and tests only. No backend. |
| Visual mock | Light course screen plus a static dark review queue. Not a live upload. |
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

## Update, 8 November 2026

Paid-path drafts and advanced briefs are written and marked not for sale. Inventory and a first source note are in `courses/`. The Monday 09:00 SGT review stays with the parent. This repo did not add a scheduler, and no weekly run has happened.

Creator media is a contract and a reject-unknown test. No upload backend exists.

The mobile course mock keeps its light reading surface. A dark creator queue was added as a static page. Theme notes are in `design/theme-spec.md`. Uncommitted local design is still not in this checkout.

## This milestone

Content checks cover the gateway and the paid drafts. App integration remains blocked. The mock does not upload or play video.

## Owner decisions still blocking the next product step

- Launch countries and who the legal seller is.
- Presenter or voice approval before any recording.
- AI practice budget and provider, if practice moves inside the site.

Prices, commission, and payout rules also stay unset. They block payments, not this text check.
