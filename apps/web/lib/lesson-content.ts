/** Review-draft lesson sections (self-contained on the site; sources: courses/gateway scripts). */

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
      "The review video above shows the same judgment idea with a green ceramic mug (350 ml): facts in, you review what comes out. The written exercise below uses Sam/Nia’s folder examples—you apply the same principle in your own words.",
    ],
    examples: [
      "Video: vague vs clearer mug prompts (annotated screenshots, not live recording).",
      "Written: Sam and Nia model cards on this page—not words to copy as yours.",
    ],
    exercise: [
      "Optional: watch the review video, then continue the written exercise (video is not the whole exercise).",
      "Read Sam’s and Nia’s model cards and the labelled sample reply on this page.",
      "Without a chat tool, write five to eight lines: who, why, how, what it is not, and one goal you can finish.",
      "You may relate your goal to the mug lesson (clear facts in, edit what comes out) or to Sam/Nia’s folder examples.",
      "Type your own card into the toolkit plain-language fields on this device.",
    ],
    completionCriterion:
      "Toolkit plain-language card has your words (not Sam’s shops copied as yours) and you can name one invented detail a tool might add.",
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
      "Compare the weak and stronger prompts on this page.",
    ],
    exercise: [
      "Write your own weak one-line prompt, then rewrite it using the five-piece template on this page and your lesson 1 goal.",
      "Save both titles in toolkit prompt slots 1 and 2 (note “not run yet” if you have no external chat tool).",
      "Do not connect email or press send on any chat page.",
    ],
    completionCriterion:
      "Two prompt slots in the toolkit contain prompts you understand and could find next week.",
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
      "Use Sam’s and Nia’s model briefs on this page only as shape—not as your facts.",
    ],
    exercise: [
      "Answer each brief heading in the toolkit, using the interview questions in the on-page prompt or asking yourself.",
      "Edit every line: delete claims you cannot trace to your answers (mark gaps “not stated”).",
    ],
    completionCriterion: "Every brief heading in the toolkit has your edited answer.",
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
      "Sam’s edited post and description on this page show the tone—not text to publish.",
    ],
    exercise: [
      "Draft post, email, and description from your toolkit brief (by hand or optional external chat using the on-page prompts).",
      "Fill all three worksheet columns; record at least one change per piece.",
    ],
    completionCriterion:
      "All three draft worksheets have a final column and show what you changed.",
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
    ],
    examples: [
      "Use the example Wikipedia About link on this page, or any public page you choose.",
    ],
    exercise: [
      "Open at least one public page (the example link or your own). Copy title and address from the browser—not from a chat reply.",
      "Fill source log rows in the toolkit and initial them yourself.",
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
      "Use Sam’s do-not-paste model and the bad-line fix on this page.",
    ],
    exercise: [
      "Write your do-not-paste lines in the toolkit using the headings there.",
      "Edit one lesson 4 draft to remove a fake customer voice or secret; tick applied on brief and drafts.",
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
      "Pick a task that already repeats. Use five boxes. Do not connect email, files, or payments in this course.",
      "Later video, website, and automation topics are described on this page—they are not courses you can buy here.",
      "An interest tick stays on this device only. No message is sent and no account is created.",
    ],
    examples: [
      "Follow Sam’s map table on this page as a pattern for your own task.",
    ],
    exercise: [
      "Fill the weekly map in the toolkit; check “not connected to email, files, or payments.”",
      "Answer the five knowledge-check questions on this page in your notes or toolkit.",
      "Optionally set interest: video / website / automation / not yet.",
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

/** For tests: all learner-facing lesson text must be self-contained on the site. */
export function allLessonLearnerText(): string {
  return JSON.stringify(lessonSections);
}
