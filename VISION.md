# Vision

`vision` exists so that a repository's revealed choices become one written acceptance policy.
The problem it takes on is the one the README names: those choices already live in merged work, in features quietly declined, and in fixes made at the root, and they stay unwritten, so every contributor, every coding agent, and every future you re-litigates them from scratch.
It serves the author of a target repository, by default that repo's owner, and the later reviewers, human or agent, who accept or resist a change from VISION.md alone.
It turns readable history, and verdicts only that author can give, into that file.
It owns exactly one thing: the target repository's VISION.md.
Its stated value is four practices already written into this package: principles cite real history, hypotheticals are hard enough to be unpredictable, the review board uses the shipped house style, and VISION.md alone carries the verdict.

## Evidence over invention

Every principle traces to named pull requests, commits, files, docs, or reasoning the author has already put into VISION.md.
A generic engineering virtue stays out unless the history shows that virtue in particular.
When merged pull requests are readable, they are the evidence base; otherwise default-branch commit history is the evidence base.
When no real history is readable, the run stops and says so.
Invented values, invented pull-request titles, and invented evidence end the run.
A vision built on invented evidence is worse than no vision.

## The author owns the verdict

The agent drafts the policy, writes fault-line hypotheticals, and folds the author's reasoning into the prose.
Approval stays with the author.
A hypothetical that a drafter can already predict is replaced.
Each board holds 8-12 hypotheticals, and each one states both sides fairly.
Silence leaves the draft unsigned.

## One committed surface

VISION.md is the only alignment surface that gets committed.
Review-board transcripts stay in tool scratch.
Answers files, including VISION-ANSWERS.md, stay out of the target repo.
A repo that already has an answers file gets its missing reasoning folded into the prose, then loses the file and any pointer to it.
The prose stays a page or two, with a target of 40-70 lines, one sentence per line, in declarative present tense, with plain hyphens.
Output from this skill carries no roadmap, no feature list, and no marketing voice.

## The board is the shipped template

The review loop runs on lavish-axi, launched with `npx -y lavish-axi`, and the skill adds no install of its own.
The agent copies `skills/vision/assets/review-template.html` and `review.css` into scratch, fills only the template's marked slots, and leaves the stylesheet unchanged.
The full latest draft stays visible, and hypotheticals are dealt one card at a time.
Presentation fixes to that surface stay in scope when they keep the slot contract, as the back-sheet and completion-button fixes did.
The package ships the skill.
Review screenshots and records of a single review round stay out of the package.

## Any harness

The skill names no host-specific agent tools.
A GitHub-class CLI supplies merged pull requests when they are accessible.
The published unit is an `npx skills` package: `skills/vision/SKILL.md` plus the review stylesheet and the board template.

## Scope

This repository is that package.
Out of scope: a hosted review service, a sample client's VISION.md, a committed board transcript, a second alignment document, and a binding to one agent host.
Goals, metrics, and commitments enter a VISION.md only after the target history or the author supplies them.
This file is an evidence scaffold for review.
Author sign-off through the review board is still open.

A change aligns when a reviewer who never saw the board can accept or resist from VISION.md alone, every line still traces to evidence or to reasoning the author stated, and the shipped board's slot contract still holds.
A change should be resisted when it invents that evidence, commits an answers file or a transcript, replaces the review surface, ties the skill to one host, or turns the skill's output into a roadmap or a pitch.

## Open questions

A finer audience than the target author and the later reviewer of VISION.md is TBD.
Value for this fork beyond evidence, stress tests, the house-style board, and a single alignment surface is TBD.
Initial milestones after the shipped history are TBD.
That history is the initial package (`c69a699`), the review-board presentation fixes (`d4b9f5f`), a short agent-memory file with no product claims (`83d31a5`), and VISION.md as the only alignment surface (`7a20c38`).
Success measures, numeric targets, and deadlines are TBD.
The only written bar is the skill's pre-approval checklist: traceable lines, 8-12 unpredictable hypotheticals, author reasoning reflected in the prose, and no answers file left in the target repo.
The question that completes this document is open: what this project should refuse beyond the refusals the shipped skill already states.
