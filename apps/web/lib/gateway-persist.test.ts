import { describe, expect, it } from "vitest";
import {
  createDefaultPersistedState,
  loadFromStorage,
  markLessonComplete,
  parsePersistedState,
  saveToStorage,
  STORAGE_KEY,
  unmarkLessonComplete,
} from "@/lib/gateway-persist";

function mockStorage() {
  const map = new Map<string, string>();
  return {
    getItem: (key: string) => map.get(key) ?? null,
    setItem: (key: string, value: string) => {
      map.set(key, value);
    },
    removeItem: (key: string) => {
      map.delete(key);
    },
  };
}

describe("gateway persistence", () => {
  it("marks lessons complete in numeric order", () => {
    let state = createDefaultPersistedState();
    state = markLessonComplete(state, "3");
    state = markLessonComplete(state, "1");
    expect(state.completedLessons).toEqual(["1", "3"]);
  });

  it("round-trips through mock storage", () => {
    const storage = mockStorage();
    const initial = markLessonComplete(createDefaultPersistedState(), "2");
    expect(saveToStorage(storage, initial)).toBe(true);
    const loaded = loadFromStorage(storage);
    expect(loaded.fromStorage).toBe(true);
    expect(loaded.state.completedLessons).toEqual(["2"]);
  });

  it("rejects invalid JSON schema", () => {
    expect(parsePersistedState("{not json")).toBeNull();
    expect(parsePersistedState(JSON.stringify({ version: 99 }))).toBeNull();
  });

  it("unmarks a lesson", () => {
    const state = unmarkLessonComplete(
      markLessonComplete(createDefaultPersistedState(), "1"),
      "1"
    );
    expect(state.completedLessons).toEqual([]);
  });

  it("uses stable storage key", () => {
    expect(STORAGE_KEY).toBe("clearpath-gateway-v1");
  });
});
