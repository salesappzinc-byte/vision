"use client";

import { SiteNav } from "@/components/site-nav";
import { LessonSidebar } from "@/components/lesson-sidebar";
import { LocalStorageBanner } from "@/components/local-storage-banner";
import { VideoSlot } from "@/components/video-slot";
import { MascotSlot } from "@/components/mascot-slot";
import { Lesson1DialogueCallout } from "@/components/lesson1-dialogue-callout";
import { ButtonLink } from "@/components/ui-button";
import { useGatewayStore } from "@/components/gateway-store";
import { adjacentLessons, gatewayCourse } from "@/lib/gateway-course";
import type { LessonSection } from "@/lib/lesson-content";
import { gatewayPath, lessonPath, toolkitPath } from "@/lib/paths";

type LessonViewProps = {
  section: LessonSection;
};

export function LessonView({ section }: LessonViewProps) {
  const {
    completeLesson,
    uncompleteLesson,
    isLessonComplete,
    hydrated,
    setLessonNote,
    state,
  } = useGatewayStore();
  const { previous, next } = adjacentLessons(section.slug);
  const done = hydrated && isLessonComplete(section.slug);
  const note = state.lessonNotes[section.slug] ?? "";

  return (
    <>
      <SiteNav
        breadcrumb={`${gatewayCourse.title} · Lesson ${section.slug} of ${gatewayCourse.lessons.length}`}
        action={
          <ButtonLink href={gatewayPath()} variant="ghost">
            Course overview
          </ButtonLink>
        }
      />
      <div className="lesson-layout" id="main">
        <LessonSidebar currentSlug={section.slug} />
        <article className="lesson-main">
          <p className="draft-banner" role="status">
            Review draft — not final published lesson. Scripts: courses/gateway/
          </p>
          <LocalStorageBanner />
          <span className="badge-free">Free · local prototype</span>
          <h1
            className="lesson-title"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-3xl)",
              margin: "16px 0",
              lineHeight: "var(--line-tight)",
            }}
          >
            Lesson {section.slug}. {section.title}
          </h1>
          <p className="lede">
            <strong>Objective:</strong> {section.objective}
          </p>
          <p className="meta-muted">
            <strong>You finish with:</strong> {section.outcome}
          </p>

          {section.slug === "1" ? (
            <>
              <MascotSlot />
              <Lesson1DialogueCallout />
            </>
          ) : null}

          <VideoSlot lessonTitle={section.title} />

          <section>
            <h2 className="lesson-h2">Explanation and examples</h2>
            {section.explanation.map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}
            {section.examples.length ? (
              <ul className="outcomes">
                {section.examples.map((ex) => (
                  <li key={ex.slice(0, 48)}>{ex}</li>
                ))}
              </ul>
            ) : null}
          </section>

          <section>
            <h2 className="lesson-h2">Your exercise</h2>
            <ol className="lesson-list">
              {section.exercise.map((step) => (
                <li key={step.slice(0, 48)}>{step}</li>
              ))}
            </ol>
            <p className="field-note">
              <strong>Completion criterion:</strong> {section.completionCriterion}
            </p>
            <p className="field-note">
              <strong>Toolkit:</strong> {section.toolkitContribution}{" "}
              <ButtonLink href={toolkitPath()} variant="secondary" className="btn--sm">
                Open toolkit
              </ButtonLink>
            </p>
          </section>

          <section className="card card--warn">
            <h2 className="lesson-h2">Honest limits (this prototype)</h2>
            <ul className="outcomes">
              {section.honestLimits.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="lesson-h2">Practice notes (this device)</h2>
            <label className="field-label" htmlFor={`lesson-note-${section.slug}`}>
              Optional notes for this lesson
            </label>
            <textarea
              id={`lesson-note-${section.slug}`}
              className="field-textarea"
              rows={4}
              value={note}
              onChange={(e) => setLessonNote(section.slug, e.target.value)}
              placeholder="Your words only. Not sent anywhere."
            />
            <p className="field-note">
              No AI checks this box. Use the toolkit for artifacts the course
              keeps.
            </p>
          </section>

          <section className="lesson-complete">
            <h2 className="lesson-h2">Mark progress</h2>
            <p className="field-note">
              Completion appears only after you deliberately mark this lesson—not
              because AI evaluated your work.
            </p>
            {done ? (
              <LessonCompleteRow>
                <span className="badge-free">You marked lesson {section.slug} complete</span>
                <button
                  type="button"
                  className="btn btn--ghost"
                  onClick={() => uncompleteLesson(section.slug)}
                >
                  Undo complete
                </button>
              </LessonCompleteRow>
            ) : (
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => completeLesson(section.slug)}
              >
                I met the criterion — mark lesson complete
              </button>
            )}
          </section>

          <nav className="lesson-pager" aria-label="Lesson navigation">
            {previous ? (
              <ButtonLink href={lessonPath(previous.slug)} variant="secondary">
                ← Lesson {previous.number}: {previous.title}
              </ButtonLink>
            ) : (
              <span />
            )}
            {next ? (
              <ButtonLink href={lessonPath(next.slug)} variant="primary">
                Lesson {next.number}: {next.title} →
              </ButtonLink>
            ) : (
              <ButtonLink href={toolkitPath()} variant="primary">
                Finish · Open toolkit →
              </ButtonLink>
            )}
          </nav>
        </article>
      </div>
    </>
  );
}

function LessonCompleteRow({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "12px",
        alignItems: "center",
        marginTop: "12px",
      }}
    >
      {children}
    </div>
  );
}
