"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  createDefaultPersistedState,
  loadFromStorage,
  markLessonComplete,
  mergeToolkit,
  resetStorage,
  saveToStorage,
  unmarkLessonComplete,
  type GatewayPersistedState,
} from "@/lib/gateway-persist";
import type { ToolkitState } from "@/lib/toolkit-types";

type GatewayStore = {
  state: GatewayPersistedState;
  storageAvailable: boolean;
  hydrated: boolean;
  updateToolkit: (patch: Partial<ToolkitState>) => void;
  setLessonNote: (slug: string, note: string) => void;
  completeLesson: (slug: string) => void;
  uncompleteLesson: (slug: string) => void;
  resetAll: () => void;
  isLessonComplete: (slug: string) => boolean;
};

const GatewayContext = createContext<GatewayStore | null>(null);

function getBrowserStorage(): Storage | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

export function GatewayStoreProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<GatewayPersistedState>(
    createDefaultPersistedState
  );
  const [storageAvailable, setStorageAvailable] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // One-time hydration from localStorage (client-only).
    const loaded = loadFromStorage(getBrowserStorage());
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional mount hydrate
    setState(loaded.state);
    setStorageAvailable(loaded.available);
    setHydrated(true);
  }, []);

  const persist = useCallback(
    (updater: (prev: GatewayPersistedState) => GatewayPersistedState) => {
      setState((prev) => {
        const next = updater(prev);
        const ok = saveToStorage(getBrowserStorage(), next);
        if (!ok) setStorageAvailable(false);
        return next;
      });
    },
    []
  );

  const updateToolkit = useCallback(
    (patch: Partial<ToolkitState>) => {
      persist((prev) => ({
        ...prev,
        toolkit: mergeToolkit(prev.toolkit, patch),
      }));
    },
    [persist]
  );

  const setLessonNote = useCallback(
    (slug: string, note: string) => {
      persist((prev) => ({
        ...prev,
        lessonNotes: { ...prev.lessonNotes, [slug]: note },
      }));
    },
    [persist]
  );

  const completeLesson = useCallback(
    (slug: string) => {
      persist((prev) => markLessonComplete(prev, slug));
    },
    [persist]
  );

  const uncompleteLesson = useCallback(
    (slug: string) => {
      persist((prev) => unmarkLessonComplete(prev, slug));
    },
    [persist]
  );

  const resetAll = useCallback(() => {
    const storage = getBrowserStorage();
    resetStorage(storage);
    const fresh = createDefaultPersistedState();
    setState(fresh);
    setStorageAvailable(loadFromStorage(storage).available);
  }, []);

  const isLessonComplete = useCallback(
    (slug: string) => state.completedLessons.includes(slug),
    [state.completedLessons]
  );

  const value = useMemo(
    () => ({
      state,
      storageAvailable,
      hydrated,
      updateToolkit,
      setLessonNote,
      completeLesson,
      uncompleteLesson,
      resetAll,
      isLessonComplete,
    }),
    [
      state,
      storageAvailable,
      hydrated,
      updateToolkit,
      setLessonNote,
      completeLesson,
      uncompleteLesson,
      resetAll,
      isLessonComplete,
    ]
  );

  return (
    <GatewayContext.Provider value={value}>{children}</GatewayContext.Provider>
  );
}

export function useGatewayStore(): GatewayStore {
  const ctx = useContext(GatewayContext);
  if (!ctx) {
    throw new Error("useGatewayStore must be used within GatewayStoreProvider");
  }
  return ctx;
}
