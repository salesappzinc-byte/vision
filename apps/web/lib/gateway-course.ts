/** Supported gateway copy from docs/course-research.md §5 and design/clearpath-a mocks. */

export const GATEWAY_SLUG = "ai-foundations-gateway" as const;

export const gatewayCourse = {
  slug: GATEWAY_SLUG,
  title: "AI Foundations Gateway",
  workingTitle: "AI for your own work, in seven short lessons",
  meta: "Gateway · ~7 short sittings",
  tuitionLabel: "FREE",
  lede:
    "For people who have heard of AI and still need who, why, how, and what—plus one practice task they can finish on this site.",
  outcomes: [
    "Explain who AI is for, why people use it, how it is used, and what it is—in plain language.",
    "Name benefits that attach to a goal of your own.",
    "Finish one on-site practice task and save a Personal AI Toolkit.",
  ],
  prerequisites:
    "None. No paid AI subscription is required for the gateway when the in-site text practice box exists (not available in this foundation build).",
  finalProject:
    "Personal AI Toolkit: prompts, reusable brief, edited content, checked sources, one mapped weekly task.",
  paidToolsNotice:
    "External tool subscriptions are separate from course tuition. Gateway practice is intended to stay on-site; any outside tool cost must be listed before you need it. Specific tools and prices are not verified in this foundation build.",
  /** Lesson titles match design/clearpath-a course + lesson mocks; full outcomes in docs/course-research.md §5. */
  lessons: [
    {
      number: 1,
      slug: "1",
      title: 'What people mean by “AI”',
      status: "foundation-preview" as const,
    },
    {
      number: 2,
      slug: "2",
      title: "Who it is for (and not for)",
      status: "draft" as const,
    },
    {
      number: 3,
      slug: "3",
      title: "Why people use it",
      status: "draft" as const,
    },
    {
      number: 4,
      slug: "4",
      title: "How a prompt becomes useful work",
      status: "draft" as const,
    },
    {
      number: 5,
      slug: "5",
      title: "Checking sources and limits",
      status: "draft" as const,
    },
    {
      number: 6,
      slug: "6",
      title: "Editing AI drafts into your voice",
      status: "draft" as const,
    },
    {
      number: 7,
      slug: "7",
      title: "Final project: Personal AI Toolkit",
      status: "draft" as const,
    },
  ],
} as const;

export type LessonStatus = (typeof gatewayCourse.lessons)[number]["status"];
