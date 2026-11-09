import type { GatewayPersistedState } from "@/lib/gateway-persist";

export function exportToolkitMarkdown(
  state: Pick<GatewayPersistedState, "toolkit" | "completedLessons">
): string {
  const { toolkit, completedLessons } = state;
  const lines: string[] = [
    "# Personal AI Toolkit (review draft export)",
    "",
    "_Saved from the Clearpath gateway prototype. Not a certificate or cloud account._",
    "",
    `Lessons marked complete on this device: ${
      completedLessons.length ? completedLessons.join(", ") : "none yet"
    }`,
    "",
    "## 1. Plain-language card",
    "",
    `- Who this tool is for: ${toolkit.plainLanguageCard.whoFor || "—"}`,
    `- Why I might use it: ${toolkit.plainLanguageCard.whyUse || "—"}`,
    `- How an answer appears: ${toolkit.plainLanguageCard.howAnswer || "—"}`,
    `- What it is not: ${toolkit.plainLanguageCard.whatNot || "—"}`,
    `- My one goal: ${toolkit.plainLanguageCard.oneGoal || "—"}`,
    "",
    "## 2. Ten reusable prompts",
    "",
  ];

  toolkit.promptLibrary.forEach((prompt, index) => {
    lines.push(`${index + 1}. ${prompt || "—"}`);
    lines.push("");
  });

  lines.push("## 3. Brief worksheet", "");
  toolkit.brief.forEach((row) => {
    lines.push(`### ${row.heading}`, "", row.answer || "—", "");
  });

  lines.push("## 4. Draft worksheets", "");
  for (const kind of ["post", "email", "description"] as const) {
    const d = toolkit.drafts[kind];
    lines.push(
      `### ${kind}`,
      "",
      `First draft: ${d.firstDraft || "—"}`,
      `What I changed: ${d.whatChanged || "—"}`,
      `Final: ${d.final || "—"}`,
      ""
    );
  }

  lines.push("## 5. Claim and source log", "");
  toolkit.sourceLog.forEach((row, i) => {
    lines.push(
      `### Row ${i + 1}`,
      "",
      `- Claim: ${row.claim || "—"}`,
      `- Source title: ${row.sourceTitle || "—"}`,
      `- Address (copied from browser): ${row.address || "—"}`,
      `- Page says (my words): ${row.pageSays || "—"}`,
      `- Match: ${row.match || "—"}`,
      `- I checked: ${row.checkedBy || "—"}`,
      ""
    );
  });

  lines.push(
    "## 6. Do-not-paste list",
    "",
    toolkit.doNotPaste.secrets || "—",
    "",
    `Applied to brief: ${toolkit.doNotPaste.appliedBrief || "—"}`,
    `Applied to drafts: ${toolkit.doNotPaste.appliedDrafts || "—"}`,
    "",
    "## 7. Weekly task map",
    "",
    `- Trigger: ${toolkit.weeklyMap.trigger || "—"}`,
    `- Input: ${toolkit.weeklyMap.input || "—"}`,
    `- Action: ${toolkit.weeklyMap.action || "—"}`,
    `- Human approval: ${toolkit.weeklyMap.humanApproval || "—"}`,
    `- Error handling: ${toolkit.weeklyMap.errorHandling || "—"}`,
    `- Not connected confirm: ${toolkit.weeklyMap.notConnectedConfirm ? "yes" : "no"}`,
    `- Optional interest (local only): ${toolkit.weeklyMap.optionalInterest || "—"}`,
    ""
  );

  return lines.join("\n");
}

export function exportToolkitJson(state: GatewayPersistedState): string {
  return JSON.stringify(
    {
      exportedAt: new Date().toISOString(),
      schema: state.version,
      completedLessons: state.completedLessons,
      toolkit: state.toolkit,
    },
    null,
    2
  );
}

export function downloadTextFile(
  filename: string,
  content: string,
  mime: string
): void {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.rel = "noopener";
  anchor.click();
  URL.revokeObjectURL(url);
}
