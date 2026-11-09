import { createEmptyToolkit, type ToolkitState } from "@/lib/toolkit-types";

export const STORAGE_KEY = "clearpath-gateway-v1";
export const STORAGE_SCHEMA_VERSION = 1 as const;

export type GatewayPersistedState = {
  version: typeof STORAGE_SCHEMA_VERSION;
  completedLessons: string[];
  toolkit: ToolkitState;
  /** Per-lesson scratch notes (optional). */
  lessonNotes: Record<string, string>;
};

export function createDefaultPersistedState(): GatewayPersistedState {
  return {
    version: STORAGE_SCHEMA_VERSION,
    completedLessons: [],
    toolkit: createEmptyToolkit(),
    lessonNotes: {},
  };
}

/** Merge partial toolkit updates without dropping unknown future keys. */
export function mergeToolkit(
  base: ToolkitState,
  patch: Partial<ToolkitState>
): ToolkitState {
  return {
    ...base,
    ...patch,
    plainLanguageCard: {
      ...base.plainLanguageCard,
      ...patch.plainLanguageCard,
    },
    drafts: {
      post: { ...base.drafts.post, ...patch.drafts?.post },
      email: { ...base.drafts.email, ...patch.drafts?.email },
      description: {
        ...base.drafts.description,
        ...patch.drafts?.description,
      },
    },
    doNotPaste: { ...base.doNotPaste, ...patch.doNotPaste },
    weeklyMap: { ...base.weeklyMap, ...patch.weeklyMap },
    completionChecklist: {
      ...base.completionChecklist,
      ...patch.completionChecklist,
    },
    promptLibrary: patch.promptLibrary ?? base.promptLibrary,
    brief: patch.brief ?? base.brief,
    sourceLog: patch.sourceLog ?? base.sourceLog,
  };
}

export function markLessonComplete(
  state: GatewayPersistedState,
  lessonSlug: string
): GatewayPersistedState {
  if (state.completedLessons.includes(lessonSlug)) return state;
  return {
    ...state,
    completedLessons: [...state.completedLessons, lessonSlug].sort(
      (a, b) => Number(a) - Number(b)
    ),
  };
}

export function unmarkLessonComplete(
  state: GatewayPersistedState,
  lessonSlug: string
): GatewayPersistedState {
  return {
    ...state,
    completedLessons: state.completedLessons.filter((s) => s !== lessonSlug),
  };
}

export function parsePersistedState(raw: string): GatewayPersistedState | null {
  try {
    const parsed = JSON.parse(raw) as GatewayPersistedState;
    if (parsed?.version !== STORAGE_SCHEMA_VERSION) return null;
    if (!Array.isArray(parsed.completedLessons)) return null;
    if (!parsed.toolkit || typeof parsed.toolkit !== "object") return null;
    return parsed;
  } catch {
    return null;
  }
}

export function serializePersistedState(state: GatewayPersistedState): string {
  return JSON.stringify(state);
}

/** Browser storage adapter (testable via injectable StorageLike). */
export type StorageLike = Pick<Storage, "getItem" | "setItem" | "removeItem">;

export type StorageLoadResult = {
  state: GatewayPersistedState;
  /** Storage API was reachable on load (read attempted). */
  available: boolean;
  /** Valid persisted snapshot was loaded. */
  fromStorage: boolean;
  /** A value existed but was invalid JSON or schema — defaults used. */
  corruptOrInvalid: boolean;
};

export function loadFromStorage(
  storage: StorageLike | null | undefined
): StorageLoadResult {
  if (!storage) {
    return {
      state: createDefaultPersistedState(),
      available: false,
      fromStorage: false,
      corruptOrInvalid: false,
    };
  }
  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (!raw) {
      return {
        state: createDefaultPersistedState(),
        available: true,
        fromStorage: false,
        corruptOrInvalid: false,
      };
    }
    const parsed = parsePersistedState(raw);
    if (!parsed) {
      return {
        state: createDefaultPersistedState(),
        available: true,
        fromStorage: false,
        corruptOrInvalid: true,
      };
    }
    return {
      state: parsed,
      available: true,
      fromStorage: true,
      corruptOrInvalid: false,
    };
  } catch {
    return {
      state: createDefaultPersistedState(),
      available: false,
      fromStorage: false,
      corruptOrInvalid: false,
    };
  }
}

export function saveToStorage(
  storage: StorageLike | null | undefined,
  state: GatewayPersistedState
): boolean {
  if (!storage) return false;
  try {
    storage.setItem(STORAGE_KEY, serializePersistedState(state));
    return true;
  } catch {
    return false;
  }
}

export function resetStorage(storage: StorageLike | null | undefined): boolean {
  if (!storage) return false;
  try {
    storage.removeItem(STORAGE_KEY);
    return true;
  } catch {
    return false;
  }
}
