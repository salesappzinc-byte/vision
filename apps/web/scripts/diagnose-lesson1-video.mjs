/**
 * One-off Lesson 1 video boundary diagnosis (not CI).
 * Usage: BASE_URL=http://127.0.0.1:3457 node scripts/diagnose-lesson1-video.mjs
 */
import { chromium } from "playwright";
import fs from "node:fs";

const BASE = process.env.BASE_URL ?? "http://127.0.0.1:3457";
const OUT = "/opt/cursor/artifacts/lesson1-video-playback-diagnosis.json";

async function diagnose(browserKind) {
  const launchOpts =
    browserKind === "chrome"
      ? { channel: "chrome", headless: true }
      : { headless: true };
  const browser = await chromium.launch(launchOpts);
  const version = browser.version();
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();
  const mediaLog = [];
  page.on("console", (msg) => {
    if (msg.type() === "error" || /media|video/i.test(msg.text())) {
      mediaLog.push({ type: msg.type(), text: msg.text() });
    }
  });
  const videoResponses = [];
  page.on("response", (res) => {
    const u = res.url();
    if (u.includes(".mp4")) {
      videoResponses.push({
        url: u,
        status: res.status(),
        contentType: res.headers()["content-type"],
        contentLength: res.headers()["content-length"],
        acceptRanges: res.headers()["accept-ranges"],
        contentRange: res.headers()["content-range"] ?? null,
      });
    }
  });

  await page.goto(`${BASE}/courses/ai-foundations-gateway/lessons/1`, {
    waitUntil: "domcontentloaded",
  });

  const probe = await page.evaluate(async () => {
    const v = document.querySelector("video.video-slot__player");
    const source = v?.querySelector("source");
    const src = source?.getAttribute("src") ?? null;
    const type = source?.getAttribute("type") ?? "video/mp4";
    const canPlayType = v
      ? {
          "video/mp4": v.canPlayType("video/mp4"),
          "video/mp4; codecs=avc1.42E01E": v.canPlayType("video/mp4; codecs=avc1.42E01E"),
          "video/mp4; codecs=avc1.64001F": v.canPlayType("video/mp4; codecs=avc1.64001F"),
          "video/mp4; codecs=mp4a.40.2": v.canPlayType('video/mp4; codecs="avc1.64001F, mp4a.40.2"'),
        }
      : null;

    const events = [];
    const record = (name) => () => events.push({ name, t: Date.now() });
    if (v) {
      for (const ev of [
        "loadstart",
        "loadedmetadata",
        "loadeddata",
        "canplay",
        "canplaythrough",
        "error",
        "stalled",
        "suspend",
        "waiting",
        "playing",
        "pause",
      ]) {
        v.addEventListener(ev, record(ev), { once: true });
      }
    }

    let duration = null;
    let metadataError = null;
    if (v) {
      try {
        duration = await Promise.race([
          new Promise((resolve, reject) => {
            if (v.readyState >= 1 && Number.isFinite(v.duration)) {
              resolve(v.duration);
              return;
            }
            v.addEventListener("loadedmetadata", () => resolve(v.duration), {
              once: true,
            });
            v.addEventListener(
              "error",
              () => {
                const e = v.error;
                reject(
                  new Error(
                    `MEDIA_ELEMENT_ERROR code=${e?.code} message=${e?.message ?? "unknown"}`
                  )
                );
              },
              { once: true }
            );
          }),
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error("loadedmetadata timeout 12s")), 12000)
          ),
        ]);
      } catch (e) {
        metadataError = String(e.message || e);
        duration = v.duration;
      }
    }

    const stateBeforePlay = v
      ? {
          readyState: v.readyState,
          networkState: v.networkState,
          paused: v.paused,
          currentTime: v.currentTime,
          videoWidth: v.videoWidth,
          videoHeight: v.videoHeight,
          error: v.error
            ? { code: v.error.code, message: v.error.message }
            : null,
        }
      : null;

    let playResult = null;
    if (v && Number.isFinite(duration) && duration > 0) {
      const t0 = v.currentTime;
      try {
        await v.play();
        await new Promise((r) => setTimeout(r, 800));
        const t1 = v.currentTime;
        v.pause();
        const seekTo = Math.min(30, duration / 2);
        v.currentTime = seekTo;
        await new Promise((r) => {
          v.addEventListener("seeked", () => r(), { once: true });
          setTimeout(r, 2000);
        });
        playResult = {
          advanced: t1 > t0 + 0.05,
          currentTimeAfterPlay: t1,
          seekedTo: v.currentTime,
          seekTarget: seekTo,
        };
      } catch (e) {
        playResult = { error: String(e.message || e) };
      }
    }

    return {
      hasVideo: Boolean(v),
      src,
      type,
      canPlayType,
      duration,
      metadataError,
      stateBeforePlay,
      stateAfter: v
        ? {
            readyState: v.readyState,
            networkState: v.networkState,
            videoWidth: v.videoWidth,
            videoHeight: v.videoHeight,
            error: v.error
              ? { code: v.error.code, message: v.error.message }
              : null,
          }
        : null,
      events,
      playResult,
    };
  });

  await browser.close();

  return {
    browserKind,
    browserVersion: version,
    userAgentNote: browserKind === "chrome" ? "Playwright channel chrome" : "Playwright bundled Chromium",
    mediaConsole: mediaLog,
    mp4Responses: videoResponses,
    ...probe,
  };
}

async function main() {
  const results = [];
  results.push(await diagnose("chromium"));
  results.push(await diagnose("chrome"));

  const firstBreak = (() => {
    const bundled = results[0];
    const chrome = results[1];
    if (!bundled.hasVideo) return { boundary: "DOM", detail: "no video element" };
    if (bundled.mp4Responses.length === 0)
      return { boundary: "NETWORK", detail: "no .mp4 response observed in bundled Chromium" };
    const badHttp = bundled.mp4Responses.find((r) => r.status < 200 || r.status >= 400);
    if (badHttp)
      return {
        boundary: "HTTP",
        detail: `mp4 status ${badHttp.status}`,
      };
    if (bundled.metadataError)
      return {
        boundary: "MEDIA_ELEMENT",
        detail: bundled.metadataError,
        browser: "bundled-chromium",
        state: bundled.stateAfter,
        canPlayType: bundled.canPlayType,
      };
    if (chrome.duration && chrome.duration > 200 && chrome.playResult?.advanced) {
      return {
        boundary: "RESOLVED_WITH_CHROME",
        detail: "bundled Chromium failed metadata; official Chrome channel decodes H.264/AAC",
        bundledMetaError: bundled.metadataError,
        chromeDuration: chrome.duration,
        chromePlay: chrome.playResult,
      };
    }
    return {
      boundary: "UNKNOWN",
      detail: "see full results",
    };
  })();

  const out = {
    baseUrl: BASE,
    firstBrokenBoundary: firstBreak,
    runs: results,
    verifiedInChrome:
      results[1].duration > 200 &&
      results[1].playResult?.advanced &&
      Math.abs((results[1].playResult?.seekedTo ?? 0) - (results[1].playResult?.seekTarget ?? 0)) < 2,
  };
  fs.mkdirSync("/opt/cursor/artifacts", { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(out, null, 2));
  console.log(JSON.stringify({ firstBrokenBoundary: firstBreak, verifiedInChrome: out.verifiedInChrome }, null, 2));
  console.log(`Wrote ${OUT}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
