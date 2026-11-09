import Link from "next/link";

export function SiteNav({
  breadcrumb,
  action,
}: {
  breadcrumb?: string;
  action?: React.ReactNode;
}) {
  return (
    <header className="site-nav">
      <div className="site-nav__inner">
        <div className="site-nav__brand">
          <Link href="/" className="site-nav__logo">
            Clearpath
          </Link>
          {breadcrumb ? (
            <span className="site-nav__crumb">{breadcrumb}</span>
          ) : null}
        </div>
        {action ? <div className="site-nav__action">{action}</div> : null}
      </div>
    </header>
  );
}
