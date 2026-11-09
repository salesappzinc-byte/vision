/** Review-draft lesson sections sourced from courses/gateway/lessons/*.md */

export type LessonSection = {
  slug: string;
  title: string;
  objective: string;
  outcome: string;
  explanation: string[];
  examples: string[];
  exercise: string[];
  completionCriterion: string;
  toolkitContribution: string;
  honestLimits: string[];
};

export const lessonSections: LessonSection[] = [
  {
    slug: "1",
    title: "What it can and cannot do",
    objective:
      "Explain, in your own words, who a chat tool is for, why people use it, how it produces an answer, and what it is not—then name one goal that is yours.",
    outcome: "A plain-language card in the toolkit, written by you—not by the tool.",
    explanation: [
      "A chat page writes a new reply from your message (a prompt). It is not a person and does not know your life unless you type it.",
      "Who it is for: someone who understands the task enough to check the words. Why people use it: a first draft is easier to edit than a blank page.",
      "What it is not: a colleague, a checker you can skip, or a machine that owes you income. A smooth paragraph can still be false.",
    ],
    examples: [
      "Fictional Sam writes about labelled practice folders Shop A, B, and C—not real bookkeeping or tax advice.",
      "Fictional Nia plans a neighbourhood book swap with no library agreement and no date set.",
    ],
    exercise: [
      "Read Sam and Nia's sample cards in the course scripts (courses/gateway/lessons/01-…).",
      "Without a tool, write five to eight lines: who, why, how, what it is not, and one goal you can finish.",
      "Optional: use an external chat page you are allowed to use; any tool fee is yours, not course tuition.",
      "Copy your card into the toolkit on this device.",
    ],
    completionCriterion:
      "You saved a plain-language card in the toolkit and can name one place a tool might invent a fact.",
    toolkitContribution: "Plain-language card (lesson 1 fields).",
    honestLimits: [
      "In-site AI practice is unavailable in this prototype.",
      "No answer is evaluated by AI—only you mark the lesson complete.",
    ],
  },
  {
    slug: "2",
    title: "Context and a second pass",
    objective:
      "Rewrite a weak prompt so it includes role, task, context, format, and example—then run a second pass that removes anything you did not say.",
    outcome:
      "At least two saved prompts in your toolkit (toward ten by course end).",
    explanation: [
      "A short prompt is not always clear. The tool guesses when you leave gaps.",
      "Use five pieces: role, task, context, format, example. Then paste the reply back and cut details you never typed.",
      "Two passes are enough for this lesson. Endless passes are how people stop thinking.",
    ],
    examples: [
      "Weak: 'Write something about my folders.' Stronger: name which folders, forbid invented shops, and set length and tone.",
    ],
    exercise: [
      "Title two prompts (e.g. 'Four-line note' and 'Cut what I did not say').",
      "Save them in the toolkit prompt slots 1 and 2. Edit words so you understand them.",
      "Do not connect email or press send on any chat page.",
    ],
    completionCriterion:
      "Two prompt slots in the toolkit contain prompts you could find next week.",
    toolkitContribution: "Prompt library slots 1–2 (and more if you add them).",
    honestLimits: [
      "External chat tools are optional and may cost money—unverified here.",
    ],
  },
  {
    slug: "3",
    title: "A brief you can reuse",
    objective:
      "Produce a one-page brief using questions first and your own edit second.",
    outcome: "A one-page brief in the toolkit worksheet for later lessons.",
    explanation: [
      "A brief is a page you paste later so you do not re-explain yourself. If a fact is not on the page, the tool should not invent it.",
      "Fill the headings in order. Strike any sentence you cannot point back to an answer.",
      "Keep proof honest: 'none yet' is valid. Do not borrow reviews from the internet.",
    ],
    examples: [
      "Sam's brief stays inside a writing exercise about folder labels—not financial guidance.",
    ],
    exercise: [
      "Answer each brief heading in the toolkit, or interview yourself on paper.",
      "Delete invented claims such as 'trusted by local shops' if you never said that.",
    ],
    completionCriterion: "Every brief heading has your edited answer on one page.",
    toolkitContribution: "Brief worksheet rows.",
    honestLimits: ["No in-site chat interview in this prototype."],
  },
  {
    slug: "4",
    title: "Three drafts, then your edit",
    objective:
      "Turn your brief into a post, an email, and a description—each edited by you. Nothing posted or sent.",
    outcome:
      "Three worksheets with first draft, what changed, and final versions.",
    explanation: [
      "Generate one piece at a time from the brief. Compare: what was in the brief? What appeared from nowhere?",
      "Edit on the worksheet. 'Sent?' and 'Posted?' stay no.",
    ],
    examples: [
      "Sam's post may list which folder is on the desk; it may not quote Shop A or name prices.",
    ],
    exercise: [
      "Fill post, email, and description columns in the toolkit.",
      "Record what you changed in each row. If you changed nothing, look again.",
    ],
    completionCriterion:
      "All three draft worksheets have a final column you would show a colleague.",
    toolkitContribution: "Draft worksheets (post, email, description).",
    honestLimits: [
      "This site does not post, send email, or call an AI API for you.",
    ],
  },
  {
    slug: "5",
    title: "Sources you opened",
    objective:
      "Summarise only from pages you opened, then check each claim yourself. The tool does not mark the summary true.",
    outcome:
      "A claim-and-source log with titles and addresses you copied from the browser, plus your initials.",
    explanation: [
      "Asking the tool 'are you sure?' is not a check—that is the tool agreeing with itself.",
      "Open the page, copy title and address from the address bar, mark each claim: matches / does not match / not on the page.",
      "Lesson draft names Wikipedia:About as one example page—open it yourself; words may change.",
    ],
    examples: [
      "Sam's line 'Shop A is still on the desk' needs no web page—it is a label, not market research.",
    ],
    exercise: [
      "Open at least one public page yourself. Copy address from the browser, not from a chat reply.",
      "Fill source log rows and initial them. Do not treat AI self-confirmation as verification.",
    ],
    completionCriterion:
      "Each filled row has your initials and a match mark you chose—not one the tool assigned.",
    toolkitContribution: "Claim and source log rows.",
    honestLimits: [
      "This prototype does not verify URLs or fetch pages for you.",
    ],
  },
  {
    slug: "6",
    title: "What stays in your hands",
    objective:
      "Decide what you will not paste into a tool, and who must approve before send or post.",
    outcome:
      "A do-not-paste list applied to your brief and three drafts.",
    explanation: [
      "Do not paste passwords, identity numbers, bank details, medical notes, or other people's private records.",
      "Do not imitate real faces or voices. Disclosure: say when you drafted with a tool—never fake a customer speaking.",
      "Human approval is a person, not the tool. Leave off sends, posts, buys, and file-moving.",
    ],
    examples: [
      "Fictional Shop A cannot speak—delete quotes that sound like a customer.",
    ],
    exercise: [
      "Fill the do-not-paste sections in the toolkit.",
      "Mark whether you applied the list to brief and drafts (yes / not yet).",
    ],
    completionCriterion:
      "Do-not-paste list is filled and applied flags are set honestly.",
    toolkitContribution: "Do-not-paste checklist and applied toggles.",
    honestLimits: ["Not legal advice for every country."],
  },
  {
    slug: "7",
    title: "One weekly task, on paper",
    objective:
      "Map one weekly task with trigger, input, action, human approval, and error handling—optionally note interest in later topics.",
    outcome:
      "Weekly task map plus optional local interest note—not enrolment or signup.",
    explanation: [
      "Pick a task that already repeats. Draw five boxes. Do not connect email, files, or payments in this course.",
      "Video / website / automation are ideas in project notes—not courses you can buy from this draft.",
      "An interest tick stays on this device only. No message is sent and no account is created.",
    ],
    examples: [
      "Sam's Monday folder list; Nia's six lines toward a book swap with no date.",
    ],
    exercise: [
      "Fill the weekly map in the toolkit and confirm you did not connect live tools.",
      "Optionally circle an interest: video / website / automation / not yet.",
      "Use the completion checklist on the toolkit page.",
    ],
    completionCriterion:
      "Weekly map has all five boxes, not-connected confirm is checked, and you marked lesson 7 complete yourself.",
    toolkitContribution: "Weekly map, optional interest, completion checklist.",
    honestLimits: [
      "Signup, community, marketing email, and paid previews are unavailable.",
      "Interest is saved locally only—not transmitted.",
    ],
  },
];

export function lessonSectionBySlug(slug: string): LessonSection | undefined {
  return lessonSections.find((s) => s.slug === slug);
}
