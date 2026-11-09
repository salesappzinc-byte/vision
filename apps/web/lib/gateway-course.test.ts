import { describe, expect, it } from "vitest";
import { adjacentLessons, gatewayCourse, lessonBySlug } from "@/lib/gateway-course";

describe("gateway navigation metadata", () => {
  it("has seven lessons with confirmed titles", () => {
    expect(gatewayCourse.lessons).toHaveLength(7);
    expect(gatewayCourse.lessons[0]?.title).toBe("What it can and cannot do");
    expect(gatewayCourse.lessons[6]?.title).toBe("One weekly task, on paper");
  });

  it("adjacent lessons for middle slug", () => {
    const adj = adjacentLessons("4");
    expect(adj.previous?.slug).toBe("3");
    expect(adj.next?.slug).toBe("5");
  });

  it("lessonBySlug returns undefined for bad slug", () => {
    expect(lessonBySlug("99")).toBeUndefined();
  });
});
