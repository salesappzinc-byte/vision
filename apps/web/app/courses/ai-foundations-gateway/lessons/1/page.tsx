import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { LessonSidebar } from "@/components/lesson-sidebar";
import { ButtonLink } from "@/components/ui-button";
import { DisabledButton } from "@/components/ui-button";
import { gatewayCourse } from "@/lib/gateway-course";
import { gatewayPath } from "@/lib/paths";

const lesson = gatewayCourse.lessons[0]!;

export const metadata: Metadata = {
  title: `${lesson.title} · ${gatewayCourse.title}`,
};

export default function LessonOnePage() {
  return (
    <>
      <SiteNav
        breadcrumb={`${gatewayCourse.title} · Lesson ${lesson.number} of ${gatewayCourse.lessons.length}`}
        action={
          <ButtonLink href={gatewayPath()} variant="ghost">
            Back to course
          </ButtonLink>
        }
      />
      <div className="lesson-layout" id="main">
        <LessonSidebar currentSlug={lesson.slug} />
        <article className="lesson-main">
          <p className="draft-banner" role="status">
            Foundation preview — lesson script and video are draft; practice and
            toolkit saves are not connected.
          </p>
          <span className="badge-free">Free starter</span>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-3xl)",
              margin: "16px 0",
              lineHeight: "var(--line-tight)",
            }}
          >
            {lesson.title}
          </h1>
          <p className="lede">
            Plain language first: when people say “AI” they usually mean software
            that predicts or generates useful text, images, or actions—not a
            single robot with one personality.
          </p>

          <div
            className="video-placeholder"
            role="img"
            aria-label="Lesson video placeholder"
          >
            Video placeholder — no lesson footage in this foundation build.
          </div>

          <section>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-2xl)",
              }}
            >
              In this lesson
            </h2>
            <p>
              You will separate hype from everyday use: assistants that draft and
              summarize, tools that suggest next steps, and automation that
              follows rules you set. None of this requires you to “trust the
              magic.” You will name what the tool is doing in words you could
              explain to a friend.
            </p>
            <p>
              AI is not one thing. It is a set of techniques people apply to
              specific jobs—writing help, research help, image help, workflow
              help. Your job is to match the job to the tool, not the other way
              around.
            </p>
            <p className="field-note">
              Outcome alignment: docs/course-research.md lesson 1 — explain who,
              why, how, and what in plain language (full script not written yet).
            </p>
          </section>

          <section style={{ marginTop: "32px" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-2xl)",
              }}
            >
              On-site practice
            </h2>
            <p>
              Write in plain English:{" "}
              <strong>one task you already do weekly</strong> where a
              draft-and-edit assistant might save you time. Do not paste private
              data.
            </p>
            <label className="field-label" htmlFor="practice-answer">
              Your answer
            </label>
            <textarea
              id="practice-answer"
              className="field-textarea"
              rows={4}
              disabled
              placeholder="Practice input is disabled in the foundation build."
              aria-describedby="practice-note"
            />
            <p id="practice-note" className="field-note">
              On-site AI practice is unavailable in this foundation build. No
              answers are stored. If you used an external tool instead, that
              would be your own account — tool requirements and prices are not
              verified here.
            </p>
            <DisabledButton
              variant="primary"
              reason="AI practice is not connected in the foundation build"
            >
              Check my work (unavailable)
            </DisabledButton>
          </section>

          <section style={{ marginTop: "32px" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-2xl)",
              }}
            >
              Save to Personal AI Toolkit
            </h2>
            <p>
              The gateway ends with prompts, a brief, edited drafts, checked
              sources, and one mapped weekly task. Saving is not implemented
              yet.
            </p>
            <DisabledButton
              variant="secondary"
              reason="Toolkit storage is not available in the foundation build"
            >
              Save to toolkit (unavailable)
            </DisabledButton>
          </section>

          <footer style={{ marginTop: "40px" }}>
            <DisabledButton
              variant="ghost"
              reason="Lesson 2 is still draft content only"
            >
              Next lesson (unavailable)
            </DisabledButton>
          </footer>
        </article>
      </div>
    </>
  );
}
