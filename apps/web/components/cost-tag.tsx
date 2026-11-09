import type { ReactNode } from "react";

type CostKind = "free" | "paid" | "unverified";

const labels: Record<CostKind, string> = {
  free: "FREE",
  paid: "PAID",
  unverified: "Not verified",
};

export function CostTag({
  kind,
  detail,
}: {
  kind: CostKind;
  detail: ReactNode;
}) {
  return (
    <p className="cost-tag">
      <span className={`cost-tag__lead cost-tag__lead--${kind}`}>
        {labels[kind]}
      </span>
      <span className="cost-tag__detail">{detail}</span>
    </p>
  );
}
