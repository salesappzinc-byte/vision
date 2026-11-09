import { describe, expect, it } from "vitest";
import {
  progressNoteForStatus,
  resolveStorageStatus,
  storageStatusMessage,
} from "@/lib/storage-status";

describe("storage status", () => {
  it("prefers unavailable over other flags when not hydrated done", () => {
    expect(
      resolveStorageStatus({
        hydrated: false,
        storageAvailable: false,
        persistToBrowser: false,
        loadedFromStorage: false,
        corruptRecovered: false,
      })
    ).toBe("loading");
  });

  it("reports memory-only when writes fail", () => {
    expect(
      resolveStorageStatus({
        hydrated: true,
        storageAvailable: true,
        persistToBrowser: false,
        loadedFromStorage: true,
        corruptRecovered: false,
      })
    ).toBe("memory-only");
    expect(storageStatusMessage("memory-only").warn).toBe(true);
  });

  it("reports corrupt recovery", () => {
    expect(
      resolveStorageStatus({
        hydrated: true,
        storageAvailable: true,
        persistToBrowser: true,
        loadedFromStorage: false,
        corruptRecovered: true,
      })
    ).toBe("corrupt-recovered");
  });

  it("progress note warns for tab-only modes", () => {
    expect(progressNoteForStatus("memory-only")).toMatch(/tab only/i);
    expect(progressNoteForStatus("browser-saved")).toMatch(/not by AI/i);
  });
});
