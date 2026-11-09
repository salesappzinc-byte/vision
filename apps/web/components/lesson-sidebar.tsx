"use client";

import Link from "next/link";
import { gatewayCourse } from "@/lib/gateway-course";
import { lessonPath, toolkitPath } from "@/lib/paths";
import { useGatewayStore } from "@/components/gateway-store";

export function LessonSidebar({ currentSlug }: { currentSlug: string }) {
  const { isLessonComplete, hydrated, state, storageAvailable } =
    useGatewayStore();
  const completed = state.completedLessons.length;
  const total = gatewayCourse.lessons.length;

  return (
    <aside className="lesson-sidebar" aria-label="Gateway lesson list">
      <p className="eyebrow">Gateway sequence</p>
      <ol className="lesson-nav">
        {gatewayCourse.lessons.map((lesson) => {
          const isCurrent = lesson.slug === currentSlug;
          const done = hydrated && isLessonComplete(lesson.slug);
          return (
            <li
              key={lesson.slug}
              className={
                isCurrent
                  ? "lesson-nav__item lesson-nav__item--current"
                  : "lesson-nav__item"
              }
            >
              <Link href={lessonPath(lesson.slug)} className="lesson-nav__link">
                <span className="lesson-nav__num">{lesson.number}</span>
                <span>
                  {lesson.title}
                  {done ? (
                    <span className="lesson-nav__done"> · Complete (you)</span>
                  ) : null}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
      <p className="eyebrow" style={{ marginTop: "20px" }}>
        Toolkit
      </p>
      <Link href={toolkitPath()} className="lesson-nav__link">
        Personal AI Toolkit
      </Link>
      <div className="progress-block" aria-live="polite">
        <div className="progress-block__label">
          <span>Progress</span>
          <span>
            {hydrated ? `${completed} / ${total}` : "—"}
          </span>
        </div>
        <p className="progress-block__note">
          {storageAvailable
            ? "Marked complete only when you choose—not by AI."
            : "Progress cannot be saved on this browser."}
        </p>
      </div>
    </aside>
  );
}
