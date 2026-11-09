# Clearpath web (gateway prototype)

Next.js app for the free **AI Foundations Gateway** review prototype: seven lessons, local toolkit, no auth, no in-site AI, no payments.

## Reliable local preview (tested in cloud agent)

Production mode is what automated verification uses:

```bash
cd apps/web
npm install
npm run build
npm run start
# default http://localhost:3000 — or: npm run start -- -p 3457
```

Then:

```bash
BASE_URL=http://localhost:3000 npm run verify:flow
npm test
npm run lint
```

## `npm run dev` — not verified in cloud agent VM

`npm run dev` is the normal local workflow on your machine. In the November 2026 cloud agent environment, Playwright observed **only the Turbopack HMR client scripts** loading; the main app client bundle did not attach, and the storage banner stayed on “Checking for work saved on this device…” indefinitely. Production `next start` hydrated and passed all 26 flow checks on the same VM.

That points to an **environment-specific dev/HMR issue**, not a proven defect in the production build. If `npm run dev` misbehaves on your PC, use `npm run build && npm run start` for a reliable preview.

## Lesson 1 review video

Served from `public/media/ai-foundations-gateway/lesson-1/` (single MP4 + VTT). Provenance: `MEDIA-PROVENANCE.md` in that folder. Bulk lesson hosting is **not** implemented — use CDN/object storage before production scale.

## Scope limits

No signup, cloud save, checkout, in-site live AI practice. Lessons 2–7 have no video yet. Lesson 1 has a **review-draft** video only.
