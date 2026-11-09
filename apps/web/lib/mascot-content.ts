/** Mascot copy — roles: white Pomeranian = learner, ginger cat = guide. */

export const MASCOT_HERO = {
  src: "/mascots/hero-desk-16x9.jpg",
  alt: "Voxel-style illustration: a ginger cat types at a laptop on a desk while a white Pomeranian with a teal collar watches the screen attentively. Characters sit on the right; open space on the left for headings.",
  width: 1920,
  height: 1080,
} as const;

/** Draft dialogue pilot — script for chat/review, not recorded lesson video. */
export const LESSON1_DIALOGUE_CALLOUTS = [
  {
    speaker: "Learner (Pomeranian)",
    line: "Do I have to know coding for this?",
  },
  {
    speaker: "Guide (cat)",
    line: "No. Today you write a clear ask and edit the draft. Coding is a different path later if you want it.",
  },
  {
    speaker: "Learner (Pomeranian)",
    line: "If I ask \"are you sure?\" and it says yes, is that a check?",
  },
  {
    speaker: "Guide (cat)",
    line: "That's the same tool agreeing with itself. Checking means matching the words to facts you know — or to a page you open yourself later.",
  },
] as const;
