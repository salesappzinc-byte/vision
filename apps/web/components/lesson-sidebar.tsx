import Link from "next/link";
import { gatewayCourse } from "@/lib/gateway-course";
import { lessonPath } from "@/lib/paths";

export function LessonSidebar({ currentSlug }: { currentSlug: string }) {
  return (
    <aside className="lesson-sidebar" aria-label="Gateway lesson list">
      <p className="eyebrow">Gateway sequence</p>
      <ol className="lesson-nav">
        {gatewayCourse.lessons.map((lesson) => {
          const isCurrent = lesson.slug === currentSlug;
          const isAvailable = lesson.status === "foundation-preview";
          const content = (
            <>
              <span className="lesson-nav__num">{lesson.number}</span>
              <span>
                {lesson.title}
                {lesson.status === "draft" ? (
                  <span className="lesson-nav__draft"> · Draft</span>
                ) : null}
              </span>
            </>
          );

          if (isAvailable) {
            return (
              <li
                key={lesson.slug}
                className={isCurrent ? "lesson-nav__item lesson-nav__item--current" : "lesson-nav__item"}
              >
                <Link href={lessonPath(lesson.slug)} className="lesson-nav__link">
                  {content}
                </Link>
              </li>
            );
          }

          return (
            <li key={lesson.slug} className="lesson-nav__item lesson-nav__item--disabled">
              <span className="lesson-nav__link" aria-disabled="true">
                {content}
              </span>
            </li>
          );
        })}
      </ol>
      <div className="progress-block" aria-live="polite">
        <div className="progress-block__label">
          <span>Progress</span>
          <span>Not saved</span>
        </div>
        <p className="progress-block__note">
          Progress tracking is unavailable in this foundation build.
        </p>
      </div>
    </aside>
  );
}
