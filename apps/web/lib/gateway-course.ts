/** Gateway metadata aligned with courses/gateway/index.md and docs/course-research.md §5. */

export const GATEWAY_SLUG = "ai-foundations-gateway" as const;

export const gatewayCourse = {
  slug: GATEWAY_SLUG,
  title: "AI Foundations Gateway",
  workingTitle: "AI for your own work, in seven short lessons",
  meta: "Gateway · ~7 short sittings · review draft",
  tuitionLabel: "FREE",
  lede:
    "For people who have heard of AI and still need who, why, how, and what—plus worksheets you can finish and save on this device.",
  outcomes: [
    "Explain who a chat tool is for, why people use it, how it produces an answer, and what it is not—in plain language.",
    "Build context into prompts, edit three drafts, and check claims against pages you opened yourself.",
    "Finish a Personal AI Toolkit saved locally in your browser (not a cloud account).",
  ],
  prerequisites:
    "None. This prototype does not include an in-site AI practice box or signup. Optional external chat tools are your own account and cost—not course tuition.",
  finalProject:
    "Personal AI Toolkit: plain-language card, prompts, brief, three edited drafts, claim-and-source log, do-not-paste list, and weekly task map.",
  paidToolsNotice:
    "Course tuition for this gateway: FREE (payment not enabled). External AI tool subscriptions are separate costs and are unverified here—do not assume every optional tool is free.",
  lessons: [
    { number: 1, slug: "1", title: "What it can and cannot do" },
    { number: 2, slug: "2", title: "Context and a second pass" },
    { number: 3, slug: "3", title: "A brief you can reuse" },
    { number: 4, slug: "4", title: "Three drafts, then your edit" },
    { number: 5, slug: "5", title: "Sources you opened" },
    { number: 6, slug: "6", title: "What stays in your hands" },
    { number: 7, slug: "7", title: "One weekly task, on paper" },
  ],
} as const;

export type GatewayLesson = (typeof gatewayCourse.lessons)[number];

export function lessonBySlug(slug: string): GatewayLesson | undefined {
  return gatewayCourse.lessons.find((l) => l.slug === slug);
}

export function adjacentLessons(slug: string): {
  previous: GatewayLesson | null;
  next: GatewayLesson | null;
} {
  const index = gatewayCourse.lessons.findIndex((l) => l.slug === slug);
  if (index < 0) return { previous: null, next: null };
  return {
    previous: index > 0 ? gatewayCourse.lessons[index - 1]! : null,
    next:
      index < gatewayCourse.lessons.length - 1
        ? gatewayCourse.lessons[index + 1]!
        : null,
  };
}
