import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { FoundationNotice } from "@/components/foundation-notice";
import { CostTag } from "@/components/cost-tag";
import { ButtonLink } from "@/components/ui-button";
import { DisabledButton } from "@/components/ui-button";
import { gatewayCourse } from "@/lib/gateway-course";
import { MascotHero } from "@/components/mascot-hero";
import { lessonPath, toolkitPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: gatewayCourse.title,
};

export default function GatewayCoursePage() {
  return (
    <>
      <SiteNav
        breadcrumb={`Courses / ${gatewayCourse.title}`}
        action={
          <ButtonLink href={lessonPath("1")} variant="primary" className="btn--sm">
            Start lesson 1
          </ButtonLink>
        }
      />
      <main id="main" className="main-content">
        <header className="hero-split">
          <div className="hero-split__copy hero-block">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "12px",
                marginBottom: "16px",
              }}
            >
              <span className="badge-free">Free starter</span>
              <span className="meta-muted">{gatewayCourse.meta}</span>
            </div>
            <h1>{gatewayCourse.title}</h1>
            <p className="lede">{gatewayCourse.lede}</p>
            <p className="meta-muted" style={{ marginTop: "12px", maxWidth: "65ch" }}>
              Working title from course research: {gatewayCourse.workingTitle}.
            </p>
          </div>
          <MascotHero compact />
        </header>

        <FoundationNotice />

        <section className="card">
          <p className="eyebrow">Course information</p>
          <CostTag kind="free" detail="Tuition for this gateway — payment not enabled." />
          <CostTag kind="unverified" detail={gatewayCourse.paidToolsNotice} />
        </section>

        <section className="section-plain">
          <h2>What you leave able to do</h2>
          <ul className="outcomes">
            {gatewayCourse.outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="card">
          <h2>Lesson sequence (review draft)</h2>
          <ol className="lesson-list">
            {gatewayCourse.lessons.map((lesson) => (
              <li key={lesson.slug}>
                <ButtonLink href={lessonPath(lesson.slug)} variant="ghost" className="btn--sm">
                  Lesson {lesson.number}: {lesson.title}
                </ButtonLink>
              </li>
            ))}
          </ol>
        </section>

        <div className="meta-stack">
          <div className="card card--flat" style={{ margin: 0 }}>
            <p className="eyebrow">Prerequisites</p>
            <p>{gatewayCourse.prerequisites}</p>
          </div>
          <div className="card card--flat" style={{ margin: 0 }}>
            <p className="eyebrow">Final project</p>
            <p>{gatewayCourse.finalProject}</p>
            <ButtonLink href={toolkitPath()} variant="secondary" className="btn--sm">
              Open Personal AI Toolkit
            </ButtonLink>
          </div>
          <div className="card card--warn" style={{ margin: 0 }}>
            <p className="eyebrow eyebrow--warn">External tool costs</p>
            <p>{gatewayCourse.paidToolsNotice}</p>
          </div>
        </div>

        <div className="cta-bar">
          <div className="cta-bar__inner">
            <h2>Start the gateway</h2>
            <div className="course-card__actions">
              <ButtonLink href={lessonPath("1")} variant="inverse">
                Lesson 1: What it can and cannot do
              </ButtonLink>
              <ButtonLink href={toolkitPath()} variant="secondary">
                Toolkit (save on this device)
              </ButtonLink>
              <DisabledButton
                variant="ghost"
                reason="Account signup is not available in this prototype"
              >
                Start with email (unavailable)
              </DisabledButton>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
