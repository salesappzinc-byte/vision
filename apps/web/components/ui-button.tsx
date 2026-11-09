import Link from "next/link";

const base = "btn";

type ButtonLinkProps = {
  href: string;
  variant?: "primary" | "secondary" | "inverse" | "ghost";
  children: React.ReactNode;
  className?: string;
};

export function ButtonLink({
  href,
  variant = "primary",
  children,
  className = "",
}: ButtonLinkProps) {
  return (
    <Link href={href} className={`${base} btn--${variant} ${className}`.trim()}>
      {children}
    </Link>
  );
}

type DisabledButtonProps = {
  variant?: "primary" | "secondary" | "inverse" | "ghost";
  children: React.ReactNode;
  reason: string;
  className?: string;
};

export function DisabledButton({
  variant = "primary",
  children,
  reason,
  className = "",
}: DisabledButtonProps) {
  return (
    <button
      type="button"
      className={`${base} btn--${variant} btn--disabled ${className}`.trim()}
      disabled
      aria-disabled="true"
      title={reason}
    >
      {children}
    </button>
  );
}
