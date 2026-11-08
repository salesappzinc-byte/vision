# Creator marketplace research

Accessed 7 November 2026. This note supports [VISION.md](../VISION.md). It is not a creator agreement, not legal advice, and not a build instruction. The repository still ships the `/vision` skill, not this website.

The founder requirement is explicit: a member can become a course creator, upload a course and supporting materials, and earn when a learner purchases that course. Curated onboarding, the review bar, the economics, and the rollout below are **proposals for confirmation**. No commission, payout timing, payment provider, tax jurisdiction, or merchant of record is chosen.

This does not replace the free gateway or the proposed paid paths in [course-research.md](course-research.md). First-party courses stay. Creator earnings are a later, separate relationship.

## 1. Four money relationships

These stay distinct. None of them is a hidden deduction from another.

| Relationship | What it is |
| --- | --- |
| First-party course sale | The platform sells its own course. |
| Third-party creator earnings | An approved creator earns when a learner purchases that creator's course. |
| Course referral commission | Someone earns for referring a course sale, under a rule that is not written yet. |
| External-tool affiliate sale | A recommendation of someone else's tool, disclosed as such. |

In-site AI practice has its own allowance and its own cost. Creator status does not make that allowance unlimited. AI cost is not subtracted from creator earnings unless a signed agreement says so in plain language.

## 2. What other companies do

These are examples of different businesses. They are not an industry standard, and they are not evidence that a creator marketplace will be profitable here. Pages below were read on 7 November 2026 unless a row says otherwise. Publication dates are the dates displayed on the page. "Not displayed" means the page did not show one.

### Udemy: a purchase marketplace, plus a quality bar

Udemy's public instructor guide, [Creating high-quality course content](https://teach.udemy.com/publishing/high-quality-course-content-best-practices/) (date not displayed), says quality includes accuracy, a named audience, structure, practice, and originality, including the rights to use the material. It says AI can help brainstorm and edit, and that the instructor remains responsible for accuracy, rights, and review. It says poor-quality courses, especially ones overloaded with AI-generated content, can be removed, and it names outdated content as a quality problem.

Udemy's [payout-threshold FAQ](https://teach.udemy.com/payment-threshold-for-instructor-monthly-payouts-faq/) (date not displayed) says that starting 1 September 2025 Udemy processes a monthly instructor payout when the balance is at least 25 US dollars, and that a balance below that is paid in the December payout. The same page quotes instructor terms: payment within 45 days after the relevant month end, provided the amount payable is at least 25 US dollars, otherwise held until that amount or the end of the calendar year, whichever comes first. The FAQ also says payout-processor fees vary by vendor and location and can change. **Those are Udemy's figures. This site does not adopt the threshold, the 45 days, or the December sweep.**

A current Udemy revenue-share article was not available when this was researched (the supplied check recorded 503, and a public fetch recorded 403). A 12 March 2021 Udemy post discussed different shares by who brought the buyer. That post is historical. Its percentages are omitted here and are not a current rate.

### Skillshare: subscription watch time, not a course purchase

[Earn From Your Teaching](https://help.skillshare.com/hc/en-us/articles/4415798406285-Earn-From-Your-Teaching) (date not displayed; the page describes a June 2026 update effective 16 July 2026) says a portion of subscription revenue goes to a Teacher Fund. The share uses qualifying watch time and other member-revenue factors. It is not a payment for an individual course purchase. From 16 July 2026, monthly royalty eligibility requires at least 50 followers and either a quality class in the past 18 months plus more than 400 qualifying minutes that month, or more than 650 qualifying minutes if there is no class that recent. Qualifying minutes are watch time from members with an active paid subscription. Trailers, free trials, and free-access links do not count. Payments go through Tipalti on the 16th, or the preceding business day when that date is a weekend or holiday. The same page also describes a separate 100 US dollar engagement reward for named teacher programs. **This is the wrong earnings model for the founder's per-purchase requirement.** A future subscription on this site would need its own royalty rule. It would not replace purchase earnings.

### Teachable: a hosted school, and reporting is not a payout

[Create and Manage Authors](https://support.teachable.com/en/articles/11682541-create-and-manage-authors), dated 18 August 2026, says a school owner can make a student an author, assign that author to a course, and set a revenue share. The page says the share is applied after payment-processing fees, Teachable fees, and affiliate payouts. On the Growth plan and up, the owner can turn author permissions on or off for the whole author role, including publishing, emailing students, prices, and coupons. The page says those toggles apply to all authors, not one author at a time. If BackOffice is enabled, Teachable pays authors to PayPal; if it is not, the owner pays them. Only one author bio is assigned to a course at a time.

[Manage affiliate and author earnings](https://support.teachable.com/en/articles/15628287-manage-affiliate-and-author-earnings), dated 9 September 2026, says it covers the newer Teachable Payments product. Automated author and affiliate payouts, and automated tax-form collection, are "coming soon". Until then, school owners pay authors and affiliates manually. The page says off-platform payments are not reflected in the Teachable admin. Automated author payouts, when they arrive, are described as part of the Go Global and A&A Operator bundles. The tax-form section names US forms and a 600 US dollar calendar-year figure. **That is not a global tax rule, and it is not this site's rule.** The August page and the September page describe different payout products. Do not promise automatic payouts because one Teachable plan has them.

### Thinkific: content access and money tracking are different roles

[Course Admins](https://support.thinkific.com/hc/en-us/articles/360030735613-Course-Admins) (date not displayed) applies, on that page, to the Basic, Start, Grow, Expand, Pro, Pro + Growth, Premier, and Plus plans. A Course Admin can create courses, upload video into an assigned course, and manage that course's discussions and assignments. The page says they do not get full site-admin access to revenue. It also says site admins must approve a Course Admin's edits while a course is unpublished or in draft, and that **once a course is published, that approval step is bypassed**. This site should not copy that bypass: a material change to a published course needs a new reviewed version.

[Revenue Partners](https://support.thinkific.com/hc/en-us/articles/360030370454-Revenue-Partners) (date not displayed; a note on the page says that as of 16 July 2026 all paid plans include unlimited Revenue Partners) tracks a percentage of the payment amount, excluding added taxes, for sales through Thinkific's built-in checkout. Additional prices must be assigned separately. Sales through an external checkout are not tracked. The page says the school pays the partner manually, outside Thinkific, and then records the payment. A Revenue Partner record is not an upload permission and not a bank payout.

### Stripe Connect: one option, scoped by country and charge type

[Handle refunds and disputes](https://docs.stripe.com/connect/marketplace/tasks/refunds-disputes) (date not displayed) opens as a guide for marketplaces using **indirect charges**. For that flow it says Stripe debits refunds, disputed amounts, and associated fees from the platform balance. Refunding a charge does not, by itself, reverse a transfer or an application fee. The page shows `reverse_transfer` and `refund_application_fee` as parameters the platform sets. The same page later says the platform is liable for chargebacks on **destination charges** and on **separate charges and transfers**, and that refunds for those charge types also come from the platform balance. Stripe's own parenthetical on that page says the merchant of record can be the platform or a connected account. **Connect is not a blanket merchant of record, and it is not a global tax service.**

[How Connect works](https://docs.stripe.com/connect/how-connect-works) and [Connect pricing](https://stripe.com/connect/pricing) were read in the supplied 7 November 2026 research and were not re-fetched for this note. That research records that connected-account countries and cross-border payouts depend on the platform's location and on qualification, and that pricing depends on who sets prices and on processing, payout, FX, and cross-border features. No fee from those pages is quoted here. A country appearing on a Stripe list does not mean every creator country or payout route is available. [Onboard your connected account](https://docs.stripe.com/connect/marketplace/tasks/onboard) was likewise read in that supplied research and not re-fetched here: returning from hosted onboarding is not proof that verification is finished, and later requirement changes can restrict payouts. This note does not choose an API version or a charge type.

## 3. What to borrow, and what not to copy

Borrow, as proposals:

- Udemy's quality list: original, accurate, beginner-fit, a real project, human review of AI-assisted material, and a freshness check. Poor or misleading courses can come down.
- Teachable's split between a course role and a revenue share, with permissions for publishing and pricing decided explicitly.
- Thinkific's split between a content role and a money record, and the habit of recording a payout as its own event.
- A statement that separates a sale, a fee, a refund, an amount on a report, and money that was actually sent.

Do not copy:

- Udemy's 25 dollar threshold, 45-day timing, or December sweep.
- Any 2021 Udemy revenue split.
- Skillshare's watch-time royalty as the earnings model. It does not pay per course purchase.
- Teachable's or Thinkific's manual-payout habit as if the report were the payment.
- Thinkific's rule that edits to an already published course skip approval.
- A claim that Stripe Connect removes tax, consumer-law, or seller duties.

## 4. Proposed journeys

Proposals, not policy.

**Creator.** A learner asks to become a creator and sends a sample, the intended beginner outcome, and a statement of rights and of any material AI use. Nothing publishes automatically. A reviewer accepts, asks for changes, or declines with a reason. The creator drafts in private: outcomes, lessons, a project, video, captions or a transcript, and supporting files. The creator previews as a learner, proposes a price, lists required paid tools, and submits a release. Only the approved version becomes public. Before a paid launch, payout eligibility is a separate state from "approved creator": incomplete, under review, enabled, or restricted. After sales, the creator sees estimated, held, available, and paid amounts, with a reason for each adjustment. A material edit is a new version. Leaving the platform does not silently erase buyers' access.

**Learner.** The free gateway stays the front door. A paid course page names the creator, the outcomes, the prerequisites, a preview, tool versions, the last checked date, the project, what the price includes, and which tool or AI costs are separate. Purchase, marketing email, and community membership stay separate choices. The learner gets access only after a successful payment, practices inside the stated allowance, and can ask the creator about the course. Billing, access, and refund requests go to the platform.

## 5. Proposed operating rules

- **Ownership.** The creator keeps ownership. The platform gets a stated licence to host, stream, sell, and market approved excerpts. Using lessons to train a model is a separate permission, not a side effect of upload.
- **Review.** Private drafts. File type checks and a processing status. Sample lesson and project are actually tried. Rejection includes a reason.
- **Money.** Agree the base first: the amount collected for that course after authorised discounts, excluding taxes collected for remittance, minus only deductions the contract lists. Apply the contract version recorded on that sale. Refunds and disputes adjust that sale. Do not bury advertising, staff, or AI cost in an unnamed "expense". The founder has not chosen the share, the hold, the threshold, the currency, or who bears an unrecoverable loss.
- **Statements.** A creator can download a line for each sale: list price, amount paid, discount, tax, listed fees, referral attribution if any, the contractual share, refund or dispute adjustments, and the payout state. Estimated, held, available, and paid are different. Buyer contact details stay off the statement unless a support case requires them.
- **Support.** Creators handle course questions, project feedback, and factual corrections. The platform handles billing, refunds, access, safety, and moderation.
- **Privacy.** Role-scoped access. No export of the learner email list to creators. Marketing consent stays separate from purchase and from community membership.
- **Departure.** Outstanding earnings, buyer access, support, and refunds are written down before the first paid creator sale. The exact rule is an open decision.
- **AI practice.** Visible remaining allowance and visible cost. No unlimited use. No hidden deduction.

## 6. Proposed rollout

**Proposed first creator slice, not a commitment.** Invite a small set of creators for the video, website, and automation paths already proposed in the course note. One creator per course. Private drafts, reviewed captions, a sample lesson and a project, manual review, price approval, a verified payout state before paid launch, an itemised statement, and a written refund path. Manual review is acceptable. Unreconciled money is not.

**Later proposals.** Open applications, co-creator splits, lighter review for low-risk edits, bundles with an explicit split, referral commissions, live cohorts, and a subscription royalty. A subscription royalty is a new product decision. It does not replace purchase earnings.

### Acceptance criteria for a creator launch

These apply only if the founder confirms the slice. They are not the gateway's first-build criteria.

1. A learner can apply and cannot publish, and cannot open another creator's drafts, financials, or the learner list.
2. An approved creator can upload and preview. Only an approved version is public, including a material edit.
3. A paid course has a project, a rights statement, an accessibility check, a freshness date, and a cost disclosure. A rejection says what to fix.
4. A paid order grants access once. A failed payment does not. A refund follows the published rule.
5. A statement can be tied back to the sale, the fees, the share, and the payout state, without paying the same earning twice.
6. A creator who is not enabled for payout cannot start paid sales.
7. AI exercises show an allowance and a cost. The course does not promise earnings or show a fake testimonial.

## 7. Decisions still open

1. **Where, and who sells.** Launch countries, the platform entity, the legal seller, tax and consumer duties, and which payout routes exist.
2. **The financial agreement.** The receipt definition, the share, referral and affiliate rules, refunds, holds, who bears a loss, payout cadence, threshold, currency, and whether any AI cost is in the contract.
3. **What editorial load can be operated.** How many creators and courses, what update duty is realistic, the accessibility bar, the licence, and buyer access after a creator leaves.

## 8. Limits

No payout was executed. Private dashboards were not opened. Competitor pages do not establish their copyright licences, identity checks, refund windows, or accessibility claims, and those gaps are not filled by guessing. Udemy's current revenue-share schedule was not readable. Skillshare's model is a contrast, not a template. Teachable's August and September 2026 articles describe different payout products. Stripe's refund guide is charge-type specific. Nothing here is a demand or margin study.

## 9. Sources

Read on 7 November 2026, except the three Stripe pages marked as supplied-research reads.

| Source | What was read | Date on the page |
| --- | --- | --- |
| https://teach.udemy.com/publishing/high-quality-course-content-best-practices/ | Page text, this pass | Not displayed |
| https://teach.udemy.com/payment-threshold-for-instructor-monthly-payouts-faq/ | Page text, this pass | Threshold effective 1 September 2025. Publication date not displayed |
| Udemy revenue-share article and the 12 March 2021 business-terms post | Not re-read. Supplied research: current article unavailable (503/403); 2021 post is historical | 12 March 2021 for the historical post only |
| https://help.skillshare.com/hc/en-us/articles/4415798406285-Earn-From-Your-Teaching | Page text, this pass | Update effective 16 July 2026. Publication date not displayed |
| https://support.teachable.com/en/articles/11682541-create-and-manage-authors | Page text, this pass | 18 August 2026 |
| https://support.teachable.com/en/articles/15628287-manage-affiliate-and-author-earnings | Page text, this pass | 9 September 2026 |
| https://support.thinkific.com/hc/en-us/articles/360030735613-Course-Admins | Page text, this pass | Not displayed |
| https://support.thinkific.com/hc/en-us/articles/360030370454-Revenue-Partners | Page text, this pass | Feature note 16 July 2026. Publication date not displayed |
| https://docs.stripe.com/connect/marketplace/tasks/refunds-disputes | Page text, this pass | Not displayed. Scoped to the charge types named in section 2 |
| https://docs.stripe.com/connect/how-connect-works | Supplied 7 November 2026 research; not re-fetched | Not displayed |
| https://docs.stripe.com/connect/marketplace/tasks/onboard | Supplied 7 November 2026 research; not re-fetched | Not displayed |
| https://stripe.com/connect/pricing | Supplied 7 November 2026 research; not re-fetched. No fee quoted | Not displayed |
