import { describe, expect, it } from "vitest";
import { exportToolkitMarkdown, exportToolkitJson } from "@/lib/export-toolkit";
import { createDefaultPersistedState } from "@/lib/gateway-persist";

describe("toolkit export", () => {
  it("includes human-checked disclaimer in markdown", () => {
    const state = createDefaultPersistedState();
    state.toolkit.plainLanguageCard.oneGoal = "Monday folder list";
    const md = exportToolkitMarkdown(state);
    expect(md).toContain("Monday folder list");
    expect(md).toContain("Not a certificate");
  });

  it("exports valid JSON with schema version", () => {
    const json = exportToolkitJson(createDefaultPersistedState());
    const parsed = JSON.parse(json) as { schema: number; toolkit: unknown };
    expect(parsed.schema).toBe(1);
    expect(parsed.toolkit).toBeTruthy();
  });
});
