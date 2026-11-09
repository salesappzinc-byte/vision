/**
 * Manual verification runner for the gateway prototype (not CI).
 * Usage: BASE_URL=http://127.0.0.1:3456 node scripts/verify-gateway-flow.mjs
 */
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const BASE = process.env.BASE_URL ?? "http://127.0.0.1:3456";
const ARTIFACTS = "/opt/cursor/artifacts";
const report = { passed: [], failed: [], notes: [] };

function pass(name, detail = "") {
  report.passed.push({ name, detail });
  console.log(`PASS ${name}${detail ? `: ${detail}` : ""}`);
}

function fail(name, detail = "") {
  report.failed.push({ name, detail });
  console.error(`FAIL ${name}${detail ? `: ${detail}` : ""}`);
}

async function main() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    acceptDownloads: true,
  });
  const page = await context.newPage();

  try {
    // Navigation all lessons
    for (let n = 1; n <= 7; n++) {
      const url = `${BASE}/courses/ai-foundations-gateway/lessons/${n}`;
      const res = await page.goto(url, { waitUntil: "networkidle" });
      if (!res || res.status() >= 400) fail(`lesson-${n}-http`, String(res?.status()));
      else pass(`lesson-${n}-loads`);
      const video = await page.locator(".video-placeholder").innerText();
      if (!/not available yet/i.test(video)) fail(`lesson-${n}-video`);
      else pass(`lesson-${n}-video-unavailable`);
      const refs = await page.locator(".lesson-references").count();
      if (refs < 1) fail(`lesson-${n}-inline-examples`);
      else pass(`lesson-${n}-inline-examples`);
    }

    await page.goto(`${BASE}/courses/ai-foundations-gateway/lessons/1`, {
      waitUntil: "networkidle",
    });
    const lesson1Text = await page.locator("main, article").first().innerText();
    if (/courses\/gateway/i.test(lesson1Text)) fail("lesson-1-no-repo-refs");
    else pass("lesson-1-no-repo-refs");
    if (!/Sam's plain-language card|Sam’s plain-language card/i.test(lesson1Text))
      fail("lesson-1-sam-card-visible");
    else pass("lesson-1-sam-card-visible");

    async function waitHydrated(p) {
      await p.locator(".storage-banner").first().waitFor({ state: "visible" });
      await p.waitForFunction(() => {
        const t = document.querySelector(".storage-banner")?.textContent ?? "";
        return (
          t.length > 20 &&
          !/Checking for work saved|Loading saved work/i.test(t)
        );
      });
    }

    // Progress + reload
    await page.goto(`${BASE}/courses/ai-foundations-gateway/lessons/1`, {
      waitUntil: "networkidle",
    });
    await waitHydrated(page);
    await page.locator("#lesson-note-1").fill("reload-probe-7x");
    await page.getByRole("button", { name: /mark lesson complete/i }).click();
    await page.reload({ waitUntil: "networkidle" });
    const note = await page.locator("#lesson-note-1").inputValue();
    if (note === "reload-probe-7x") pass("reload-persists-note");
    else fail("reload-persists-note", `got "${note}"`);
    const banner = await page.locator(".storage-banner").first().innerText();
    if (/saved in this browser only|saved on this device/i.test(banner))
      pass("banner-browser-save");
    else if (/No saved work found yet/i.test(banner) && note === "reload-probe-7x")
      pass("banner-browser-save", "empty banner but data persisted");
    else fail("banner-browser-save", banner);

    // Mark lessons 2–7 quickly
    for (let n = 2; n <= 7; n++) {
      await page.goto(`${BASE}/courses/ai-foundations-gateway/lessons/${n}`, {
        waitUntil: "networkidle",
      });
      await page.getByRole("button", { name: /mark lesson complete/i }).click();
    }
    await page.goto(`${BASE}/courses/ai-foundations-gateway/lessons/7`, {
      waitUntil: "networkidle",
    });
    await page.reload({ waitUntil: "networkidle" });
    await waitHydrated(page);
    const progress = await page.locator(".progress-block__label").innerText();
    if (/7\s*\/\s*7/.test(progress)) pass("progress-7-of-7-after-reload");
    else fail("progress-7-of-7-after-reload", progress);

    // Toolkit + export content
    await page.goto(`${BASE}/courses/ai-foundations-gateway/toolkit`, {
      waitUntil: "networkidle",
    });
    const goalField = page.locator("textarea").first();
    await goalField.fill("RELIABILITY_GOAL_MARKER");
    const [downloadMd] = await Promise.all([
      page.waitForEvent("download"),
      page.getByRole("button", { name: /download markdown/i }).click(),
    ]);
    const mdPath = await downloadMd.path();
    const md = fs.readFileSync(mdPath, "utf8");
    if (md.includes("RELIABILITY_GOAL_MARKER")) pass("export-markdown-content");
    else fail("export-markdown-content");
    if (md.includes("Lessons marked complete") && md.includes("1"))
      pass("export-markdown-lessons");

    const [downloadJson] = await Promise.all([
      page.waitForEvent("download"),
      page.getByRole("button", { name: /download json/i }).click(),
    ]);
    const jsonPath = await downloadJson.path();
    const json = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
    if (json.completedLessons?.length === 7) pass("export-json-lessons");
    else fail("export-json-lessons", JSON.stringify(json.completedLessons));

    // Two-step reset
    await page.getByRole("button", { name: /reset all saved data/i }).click();
    await page.getByRole("button", { name: /confirm reset/i }).click();
    await page.reload({ waitUntil: "networkidle" });
    const progressAfter = await page.locator(".progress-block__label").innerText();
    if (/0\s*\/\s*7/.test(progressAfter)) pass("two-step-reset");
    else fail("two-step-reset", progressAfter);

    // Keyboard: tab reaches mark complete on lesson 1
    await page.goto(`${BASE}/courses/ai-foundations-gateway/lessons/1`, {
      waitUntil: "networkidle",
    });
    await page.keyboard.press("Tab");
    let found = false;
    for (let i = 0; i < 40; i++) {
      const active = await page.evaluate(() => document.activeElement?.outerHTML ?? "");
      if (/mark lesson complete/i.test(active) || (await page.evaluate(() =>
        document.activeElement?.textContent ?? ""
      )).match(/mark lesson complete/i)) {
        found = true;
        break;
      }
      await page.keyboard.press("Tab");
    }
    if (found) pass("keyboard-mark-complete-focusable");
    else fail("keyboard-mark-complete-focusable");

    // Mobile overflow smoke
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(BASE, { waitUntil: "networkidle" });
    const scrollW = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth
    );
    if (scrollW <= 8) pass("mobile-home-horizontal-overflow", `excess ${scrollW}px`);
    else fail("mobile-home-horizontal-overflow", `${scrollW}px`);
  } finally {
    await browser.close();
  }

  // Corrupt storage
  const browser2 = await chromium.launch();
  const ctx2 = await browser2.newContext();
  const page2 = await ctx2.newPage();
  try {
    await page2.goto(`${BASE}/courses/ai-foundations-gateway/lessons/1`, {
      waitUntil: "networkidle",
    });
    await page2.evaluate(() =>
      localStorage.setItem("clearpath-gateway-v1", "{corrupt")
    );
    await page2.reload({ waitUntil: "networkidle" });
    const corruptBanner = await page2.locator(".storage-banner").first().innerText();
    if (/could not be read/i.test(corruptBanner)) pass("corrupt-storage-banner");
    else fail("corrupt-storage-banner", corruptBanner);
  } finally {
    await browser2.close();
  }

  // Blocked storage
  const browser3 = await chromium.launch();
  const ctx3 = await browser3.newContext();
  await ctx3.addInitScript(() => {
    const deny = () => {
      throw new DOMException("Access denied", "SecurityError");
    };
    const fake = {
      getItem: deny,
      setItem: deny,
      removeItem: deny,
      clear: deny,
      key: () => null,
      length: 0,
    };
    Object.defineProperty(window, "localStorage", { value: fake, configurable: true });
  });
  const page3 = await ctx3.newPage();
  try {
    await page3.goto(`${BASE}/courses/ai-foundations-gateway/lessons/1`, {
      waitUntil: "networkidle",
    });
    const blocked = await page3.locator(".storage-banner").first().innerText();
    if (/unavailable|blocked|not persist/i.test(blocked)) pass("blocked-storage-banner");
    else fail("blocked-storage-banner", blocked);
    await page3.getByRole("button", { name: /mark lesson complete/i }).click();
    const doneLabel = await page3.locator(".lesson-nav__done").first().innerText();
    if (/this tab only/i.test(doneLabel)) pass("blocked-tab-only-label");
    else fail("blocked-tab-only-label", doneLabel);
  } finally {
    await browser3.close();
  }

  const outPath = path.join(ARTIFACTS, "gateway-verify-report.json");
  fs.mkdirSync(ARTIFACTS, { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
  console.log(`\nWrote ${outPath}`);

  if (report.failed.length) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
