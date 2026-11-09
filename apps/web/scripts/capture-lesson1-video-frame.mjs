import { chromium } from "playwright";

const BASE = process.env.BASE_URL ?? "http://127.0.0.1:3457";
const OUT = "/opt/cursor/artifacts/clearpath-lesson1-video-chrome-frame.png";

const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page.goto(`${BASE}/courses/ai-foundations-gateway/lessons/1`, {
  waitUntil: "domcontentloaded",
});
const stats = await page.evaluate(async () => {
  const v = document.querySelector("video.video-slot__player");
  await new Promise((resolve, reject) => {
    if (v.readyState >= 1) resolve();
    else v.addEventListener("loadedmetadata", resolve, { once: true });
    setTimeout(() => reject(new Error("no metadata")), 15000);
  });
  await v.play();
  await new Promise((r) => setTimeout(r, 1200));
  v.pause();
  v.currentTime = 45;
  await new Promise((r) => {
    v.addEventListener("seeked", r, { once: true });
    setTimeout(r, 2000);
  });
  return {
    duration: v.duration,
    currentTime: v.currentTime,
    videoWidth: v.videoWidth,
    videoHeight: v.videoHeight,
  };
});
await page.locator("video.video-slot__player").screenshot({ path: OUT });
await browser.close();
console.log(JSON.stringify({ browser: "Google Chrome (Playwright channel)", ...stats, screenshot: OUT }));
