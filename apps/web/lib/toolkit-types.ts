/** Toolkit shape mirrors courses/gateway/toolkit.md (review draft). */

export type BriefRow = {
  heading: string;
  answer: string;
};

export type DraftWorksheet = {
  firstDraft: string;
  whatChanged: string;
  final: string;
};

export type SourceLogRow = {
  claim: string;
  sourceTitle: string;
  address: string;
  pageSays: string;
  match: "" | "matches" | "does-not-match" | "not-on-page";
  checkedBy: string;
};

export type WeeklyTaskMap = {
  trigger: string;
  input: string;
  action: string;
  humanApproval: string;
  errorHandling: string;
  notConnectedConfirm: boolean;
  optionalInterest: "" | "video" | "website" | "automation" | "not-yet";
};

export type ToolkitState = {
  plainLanguageCard: {
    whoFor: string;
    whyUse: string;
    howAnswer: string;
    whatNot: string;
    oneGoal: string;
  };
  promptLibrary: string[];
  brief: BriefRow[];
  drafts: {
    post: DraftWorksheet;
    email: DraftWorksheet;
    description: DraftWorksheet;
  };
  sourceLog: SourceLogRow[];
  doNotPaste: {
    secrets: string;
    othersRecords: string;
    likeness: string;
    noRights: string;
    showDraftMine: string;
    whoApproves: string;
    appliedBrief: "" | "yes" | "not-yet";
    appliedDrafts: "" | "yes" | "not-yet";
  };
  weeklyMap: WeeklyTaskMap;
  completionChecklist: Record<string, boolean>;
};

export const BRIEF_HEADINGS: string[] = [
  "Who it is for",
  "What they need done",
  "What I offer, or what the personal project is",
  "What I will not claim",
  "Tone",
  "Proof I actually have",
  "Tools I already use",
  "Next small step",
];

export const COMPLETION_CHECKLIST_ITEMS: { key: string; label: string }[] = [
  { key: "card", label: "Plain-language card is in my words." },
  { key: "prompts", label: "I saved prompts I can reuse (up to 10), edited for me." },
  { key: "brief", label: "Brief is one page; I removed claims I did not make." },
  {
    key: "drafts",
    label: "Post, email, description each show an edit. Not sent. Not posted.",
  },
  {
    key: "sources",
    label: "Source log uses pages I opened. I initialled rows. Tool did not verify.",
  },
  { key: "privacy", label: "Do-not-paste list applied to brief and three drafts." },
  { key: "weekly", label: "Weekly map has five boxes and a named person in approval." },
  { key: "noAuto", label: "I did not turn on sending, buying, or file-moving." },
  {
    key: "interest",
    label: "Any interest note is optional—not enrolment or earnings.",
  },
];

export function emptyDraft(): DraftWorksheet {
  return { firstDraft: "", whatChanged: "", final: "" };
}

export function createEmptyToolkit(): ToolkitState {
  return {
    plainLanguageCard: {
      whoFor: "",
      whyUse: "",
      howAnswer: "",
      whatNot: "",
      oneGoal: "",
    },
    promptLibrary: Array.from({ length: 10 }, () => ""),
    brief: BRIEF_HEADINGS.map((heading) => ({ heading, answer: "" })),
    drafts: {
      post: emptyDraft(),
      email: emptyDraft(),
      description: emptyDraft(),
    },
    sourceLog: [
      {
        claim: "",
        sourceTitle: "",
        address: "",
        pageSays: "",
        match: "",
        checkedBy: "",
      },
      {
        claim: "",
        sourceTitle: "",
        address: "",
        pageSays: "",
        match: "",
        checkedBy: "",
      },
    ],
    doNotPaste: {
      secrets: "",
      othersRecords: "",
      likeness: "",
      noRights: "",
      showDraftMine: "",
      whoApproves: "",
      appliedBrief: "",
      appliedDrafts: "",
    },
    weeklyMap: {
      trigger: "",
      input: "",
      action: "",
      humanApproval: "",
      errorHandling: "",
      notConnectedConfirm: false,
      optionalInterest: "",
    },
    completionChecklist: Object.fromEntries(
      COMPLETION_CHECKLIST_ITEMS.map((item) => [item.key, false])
    ),
  };
}
