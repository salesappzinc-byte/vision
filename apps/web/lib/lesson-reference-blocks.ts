/** Fictional examples and prompts shown on lesson pages (from courses/gateway scripts). */

export type ReferenceBlock =
  | { type: "note"; title: string; body: string }
  | { type: "quote"; title: string; label: string; body: string }
  | { type: "prompt"; title: string; body: string }
  | { type: "table"; title: string; headers: string[]; rows: string[][] }
  | { type: "link"; title: string; href: string; body: string };

export const lessonReferenceBlocks: Record<string, ReferenceBlock[]> = {
  "1": [
    {
      type: "note",
      title: "Video vs written exercise",
      body:
        "The review video uses a practice mug: green ceramic, 350 ml. The worksheets below use Sam’s folders or Nia’s book swap. Same skill: give clear facts, notice fluent extras, keep what you can defend. Finish the toolkit card yourself—the video does not mark you complete.",
    },
    {
      type: "note",
      title: "Fictional characters in this course",
      body:
        "Sam Okonkwo writes about labelled practice folders (Shop A, B, C)—not real bookkeeping or tax. Nia Adeyemi plans a neighbourhood book swap with no library agreement and no date set. Neither person is real.",
    },
    {
      type: "quote",
      title: "Sam’s plain-language card (model)",
      label: "Fictional. Not a client, not a result, not a price.",
      body:
        "A chat page drafts sentences from my prompt. It is for me when I am writing a note I can check. I use it to get a first draft, not to know the truth. It guesses when I leave a gap. My goal is a Monday note that lists which practice folder, Shop A, Shop B, or Shop C, is still on my desk. This is not advice about accounts or tax. I will check every name before I keep a sentence.",
    },
    {
      type: "quote",
      title: "Nia’s plain-language card (model)",
      label: "Fictional. Personal project only.",
      body:
        "A chat page drafts sentences from my prompt. It is for me while I plan a book swap. I use it to list steps, not to decide the date. My goal is a one-page plan. No library has agreed. I will not invent a quote from a neighbour. I decide what stays.",
    },
    {
      type: "quote",
      title: "Labelled sample reply (not a live AI output)",
      label:
        "Practice without a chat account: imagine you typed “Write something about my folders.”",
      body:
        "Shop A is still on the desk.\nPapers are due Friday.\nShop D thanked you for calling.\n\nCircle anything Sam never said. Delete it. Sam only mentioned Shop A, B, and C—no Friday, no Shop D, no phone call.",
    },
    {
      type: "prompt",
      title: "Optional copy-ready prompt (external chat only)",
      body: `Ask me up to five questions, one at a time, to help me name one small goal for learning a chat tool.
Do not invent a business, a customer, a price, or a result.
Wait for my answer after each question.
When I say stop, restate my goal in two sentences using only details I gave you, and mark any gap with the words "you did not say".`,
    },
  ],
  "2": [
    {
      type: "quote",
      title: "Weak prompt (model)",
      label: "Too vague—the tool will guess.",
      body: "Write something about my folders.",
    },
    {
      type: "quote",
      title: "Stronger prompt (Sam’s shape)",
      label: "Fictional context.",
      body: `Help me write a note to myself.
Draft four short lines.
Context: three practice folders are labelled Shop A, Shop B, and Shop C. I want a list of which label is still on the desk.
Do not say anything is due, owed, or a tax record. Do not invent a shop.
Example of tone: "Shop A is still on the desk."`,
    },
    {
      type: "prompt",
      title: "Second-pass prompt (Prompt B)",
      body: `Review the reply above. List details you added that were not in my prompt.
Delete them. Where you need a fact, write "you did not say" and one question.
Do not post or send.`,
    },
    {
      type: "prompt",
      title: "Five-piece prompt template",
      body: `Help me as [role].
Task: [draft / list / rewrite] this: [one sentence].
Context that is true: [facts].
Do not invent: [customers, prices, quotes, dates I have not set].
Format: [length and shape].
Example of the tone I want: "[one line you wrote]".`,
    },
  ],
  "3": [
    {
      type: "quote",
      title: "Sam’s one-page brief (model)",
      label: "Fictional. Price not stated.",
      body: `Who it is for: me, writing about folders labelled Shop A, Shop B, and Shop C.
What they need: a list of which label is still on the desk.
What I offer: that list, in words. This is not accounts or tax advice.
I will not claim: that anything is due, that a month is closed, or that an owner spoke.
Tone: calm and specific.
Proof I have: none. The folders are labels.
Tools I already use: a notebook.
Next small step: write the Monday list and edit it.`,
    },
    {
      type: "quote",
      title: "Nia’s one-page brief (model)",
      label: "Fictional.",
      body: `Who it is for: neighbours who might swap books they have finished.
What they need: a book that is new to them.
What the project is: a book swap. Date: not set. Place: not agreed.
I will not claim: library permission, or a quote from a neighbour.
Tone: friendly and short.
Proof I have: none yet.
Tools I already use: paper.
Next small step: six lines I will edit before I show anyone.`,
    },
    {
      type: "prompt",
      title: "Interview prompt (optional external chat)",
      body: `Interview me to build a one-page brief. Ask one question at a time and wait.
Cover, in this order: who it is for; what they need done; what I offer or what the personal project is; what I will not claim; tone; proof I actually have; tools I already use; my next small step.
Do not invent names, prices, quotes, dates, or results. If I say I do not know, write "not stated".
After I answer the last item, draft the page under those headings using only my answers.`,
    },
  ],
  "4": [
    {
      type: "quote",
      title: "Sam’s edited post (model)",
      label: "Not posted.",
      body: `Three practice folders are labelled Shop A, Shop B, and Shop C.
Shop A is still on the desk.
This note does not say anything is due.
It is not accounts or tax advice.
This note is my draft, not a customer's words.`,
    },
    {
      type: "quote",
      title: "Sam’s edited description (model)",
      label: "Not sent. No price.",
      body: `This is a written list of labelled practice folders.
It is for me, so I can see which label I have not opened.
It is not advice on keeping books or filing tax.
No fee is stated. Nobody else is quoted.`,
    },
    {
      type: "prompt",
      title: "Post prompt (run one at a time with your brief)",
      body: `Using only the brief below, draft a post of four to six lines.
Do not invent prices, quotes, savings, or awards.
Do not use a customer's voice. Write in my voice.
End with: "Draft for me to edit. Not posted."

BRIEF:
[paste your edited brief from the toolkit]`,
    },
  ],
  "5": [
    {
      type: "note",
      title: "What counts as a source",
      body:
        "Sam’s label “Shop A is still on the desk” does not need a web page. A claim about “most people” or a study does. The tool must not mark its own summary “verified.”",
    },
    {
      type: "link",
      title: "Example page named in the course draft (open it yourself)",
      href: "https://www.wikipedia.org/wiki/Wikipedia:About",
      body:
        "When this draft was written, this page described Wikipedia as a free online encyclopedia that anyone can edit. Words may change—copy the title and address from your browser bar, and paste only text you actually see.",
    },
    {
      type: "table",
      title: "Claim log shape (empty—fill from pages you open)",
      headers: [
        "Claim",
        "Source title (you copied)",
        "Address (from browser bar)",
        "Match?",
        "You checked",
      ],
      rows: [
        [
          "[one sentence from a summary]",
          "[tab title]",
          "[address you copied]",
          "matches / does not match / not on the page",
          "[initials, date]",
        ],
      ],
    },
    {
      type: "prompt",
      title: "Summary prompt (after you paste source text)",
      body: `Summarise only the source text I paste below. Do not add facts from memory.
List each factual claim as its own line.
Do not write the word verified.
SOURCE TITLE (I copied this):
SOURCE ADDRESS (I copied from my browser):
SOURCE TEXT:
[paste a short excerpt you copied from the open page]`,
    },
  ],
  "6": [
    {
      type: "quote",
      title: "Sam’s do-not-paste lines (model)",
      label: "Fictional. Nothing sent.",
      body: `I will not paste real names, photos of papers, identity numbers, or bank details.
I will not paste a real spreadsheet. This course is not tax advice.
I will not ask for anyone's face or voice.
I will not publish a sentence as if Shop A wrote it.
I read the final before any send. Today nothing is sent.`,
    },
    {
      type: "quote",
      title: "Line to delete (model)",
      label: "Fake customer voice.",
      body: `Bad: "Shop owners say this saved their week."
Better: "I drafted this note with a chat page, and I edited it."`,
    },
    {
      type: "prompt",
      title: "Secrets check prompt (optional)",
      body: `Read the draft below. List possible secrets, invented quotes, and any imitation of a real person's face or voice.
Propose a shorter draft that removes those items.
End with: "A person still needs to approve this. Do not send or post."

DRAFT:
[paste only sample or non-secret text]`,
    },
  ],
  "7": [
    {
      type: "table",
      title: "Sam’s weekly map (model)",
      headers: ["Box", "Sam’s words"],
      rows: [
        ["Trigger", "Monday morning on my own calendar—not a tool."],
        ["Input", "My brief and folder labels Shop A, B, C."],
        ["Action", "Ask for a six-line list using only my typed notes."],
        ["Human approval", "I read the list before it leaves my notebook."],
        [
          "Error handling",
          "If a fourth shop appears, I delete it. If the tool is down, I write by hand.",
        ],
      ],
    },
    {
      type: "note",
      title: "Later topics (not for sale in this draft)",
      body:
        "Video: honest short clips without fake customers. Website: plan a small site. Automation: document a repeating task with human approval. Ticking interest on the toolkit is optional and stays on this device—it is not enrolment.",
    },
    {
      type: "note",
      title: "Knowledge check (answer in your toolkit or notes)",
      body: `1. Who is a chat tool for in your case, and what does it not know about your life?
2. Name two things a weak prompt is missing. What do you do on a second pass?
3. Why edit the brief before you draft a post, email, and description?
4. The tool says "Verified." What has to happen before you trust a claim?
5. What must a person do before send, file change, or spend? Name two things you will not paste.`,
    },
  ],
};
