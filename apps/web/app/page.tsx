import { SiteNav } from "@/components/site-nav";
import { FoundationNotice } from "@/components/foundation-notice";
import { CostTag } from "@/components/cost-tag";
import { ButtonLink } from "@/components/ui-button";
import { DisabledButton } from "@/components/ui-button";
import { gatewayCourse } from "@/lib/gateway-course";
import { gatewayPath, lessonPath } from "@/lib/paths";

export default function HomePage() {
  return (
    <>
      <SiteNav breadcrumb="Direction A · Editorial Academy" />
      <main id="main" className="main-content">
        <header className="hero-block">
          <div className="badges-row" style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
            <span className="badge-free">Editorial Academy</span>
            <span className="meta-muted">Foundation preview</span>
          </div>
          <h1>Understand AI, then practise toward your own goals</h1>
          <p className="lede">
            Clearpath is being built as a trusted place to learn who AI is for,
            why people use it, how it works, and what it is—starting with a free
            gateway course. This site is a layout and content foundation only.
          </p>
        </header>

        <FoundationNotice />

        <div className="home-grid">
          <article className="card course-card">
            <div>
              <span className="badge-free">Free starter</span>
              <p className="meta-muted" style={{ marginTop: "12px" }}>
                {gatewayCourse.meta}
              </p>
              <h2 style={{ marginTop: "16px", fontFamily: "var(--font-display)" }}>
                {gatewayCourse.title}
              </h2>
              <p className="lede" style={{ marginTop: "12px" }}>
                {gatewayCourse.lede}
              </p>
            </div>
            <CostTag
              kind="free"
              detail="Course tuition — no checkout in this foundation build."
            />
            <CostTag
              kind="unverified"
              detail="Required paid external tools for the gateway — none listed until verified; on-site practice is the intended path per course research."
            />
            <div className="course-card__actions">
              <ButtonLink href={gatewayPath()} variant="primary">
                View course
              </ButtonLink>
              <ButtonLink href={lessonPath("1")} variant="secondary">
                Open lesson 1 preview
              </ButtonLink>
            </div>
          </article>

          <section className="card">
            <h2>What comes later</h2>
            <p className="lede">
              Deeper paid paths (video, websites, automation) are outlined in
              project research only. They are not published here.
            </p>
            <ul className="outcomes">
              <li>Email signup and community membership — not wired yet</li>
              <li>On-site AI practice and toolkit saves — not wired yet</li>
              <li>Checkout and creator marketplace — out of scope for this build</li>
            </ul>
          </section>
        </div>

        <div className="cta-bar">
          <div className="cta-bar__inner">
            <h2>Explore the free gateway</h2>
            <div className="course-card__actions">
              <ButtonLink href={gatewayPath()} variant="inverse">
                Course overview
              </ButtonLink>
              <DisabledButton
                variant="ghost"
                reason="Signup is not available in the foundation build"
              >
                Sign up with email (unavailable)
              </DisabledButton>
            </div>
          </div>
        </div>
      </main>
      <p className="page-footer-note">
        Layout adapted from Direction A mocks — not a Paper pixel export.
      </p>
    </>
  );
}
