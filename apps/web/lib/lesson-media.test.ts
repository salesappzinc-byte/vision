import { describe, expect, it } from "vitest";
import { LESSON1_VIDEO, videoConfigForLesson } from "@/lib/lesson-media";
import fs from "node:fs";
import path from "node:path";

describe("lesson 1 media", () => {
  it("only lesson 1 has video config", () => {
    expect(videoConfigForLesson("1")?.mp4).toBe(LESSON1_VIDEO.mp4);
    expect(videoConfigForLesson("2")).toBeNull();
  });

  it("mp4 on disk matches canonical hash", () => {
    const file = path.join(
      process.cwd(),
      "public",
      "media/ai-foundations-gateway/lesson-1/lesson1-v2-real-chatgpt-illustrated-pilot.mp4"
    );
    expect(fs.existsSync(file)).toBe(true);
    expect(fs.statSync(file).size).toBe(LESSON1_VIDEO.bytes);
  });
});
