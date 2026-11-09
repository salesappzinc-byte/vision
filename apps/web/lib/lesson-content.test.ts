import { describe, expect, it } from "vitest";
import { lessonReferenceBlocks } from "@/lib/lesson-reference-blocks";
import { allLessonLearnerText, lessonSections } from "@/lib/lesson-content";

const REPO_PATH_FORBIDDEN = /courses\/gateway|repository|github\.com\/|\.md\)/i;

describe("lesson content self-contained", () => {
  it("has seven lessons", () => {
    expect(lessonSections).toHaveLength(7);
  });

  it("does not tell learners to open repo paths", () => {
    expect(allLessonLearnerText()).not.toMatch(REPO_PATH_FORBIDDEN);
    for (const section of lessonSections) {
      const joined = [
        ...section.exercise,
        ...section.examples,
        ...section.explanation,
      ].join("\n");
      expect(joined, `lesson ${section.slug}`).not.toMatch(REPO_PATH_FORBIDDEN);
    }
  });

  it("includes on-page reference blocks for every lesson", () => {
    for (const section of lessonSections) {
      const blocks = lessonReferenceBlocks[section.slug];
      expect(blocks?.length, `lesson ${section.slug} blocks`).toBeGreaterThan(0);
    }
  });

  it("lesson 1 has model cards and a no-tool sample", () => {
    const blocks = lessonReferenceBlocks["1"] ?? [];
    const titles = blocks.map((b) => b.title);
    expect(titles).toContain("Sam’s plain-language card (model)");
    expect(titles).toContain("Nia’s plain-language card (model)");
    expect(titles.some((t) => /not a live AI/i.test(t))).toBe(true);
  });

  it("lesson 5 includes a real example link and log shape", () => {
    const blocks = lessonReferenceBlocks["5"] ?? [];
    expect(blocks.some((b) => b.type === "link")).toBe(true);
    expect(blocks.some((b) => b.type === "table")).toBe(true);
  });
});
