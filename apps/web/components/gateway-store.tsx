"use client";

import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
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
import { resolveStorageStatus } from "@/lib/storage-status";
import type { ToolkitState } from "@/lib/toolkit-types";

type GatewayStore = {
  state: GatewayPersistedState;
  storageAvailable: boolean;
  hydrated: boolean;
  persistToBrowser: boolean;
  loadedFromStorage: boolean;
  corruptRecovered: boolean;
  storageStatus: ReturnType<typeof resolveStorageStatus>;
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
  const [persistToBrowser, setPersistToBrowser] = useState(true);
  const [loadedFromStorage, setLoadedFromStorage] = useState(false);
  const [corruptRecovered, setCorruptRecovered] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useLayoutEffect(() => {
    const loaded = loadFromStorage(getBrowserStorage());
    /* eslint-disable react-hooks/set-state-in-effect -- client storage hydrate */
    setState(loaded.state);
    setStorageAvailable(loaded.available);
    setLoadedFromStorage(loaded.fromStorage);
    setCorruptRecovered(loaded.corruptOrInvalid);
    setPersistToBrowser(loaded.available);
    setHydrated(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  const persist = useCallback(
    (updater: (prev: GatewayPersistedState) => GatewayPersistedState) => {
      setState((prev) => {
        const next = updater(prev);
        const storage = getBrowserStorage();
        if (!storage) {
          setPersistToBrowser(false);
          return next;
        }
        const ok = saveToStorage(storage, next);
        if (!ok) {
          setPersistToBrowser(false);
        } else {
          setPersistToBrowser(true);
          setLoadedFromStorage(true);
          setCorruptRecovered(false);
        }
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
    const cleared = resetStorage(storage);
    const fresh = createDefaultPersistedState();
    setState(fresh);
    const loaded = loadFromStorage(storage);
    setStorageAvailable(loaded.available);
    setLoadedFromStorage(false);
    setCorruptRecovered(false);
    setPersistToBrowser(loaded.available && cleared);
  }, []);

  const isLessonComplete = useCallback(
    (slug: string) => state.completedLessons.includes(slug),
    [state.completedLessons]
  );

  const storageStatus = resolveStorageStatus({
    hydrated,
    storageAvailable,
    persistToBrowser,
    loadedFromStorage,
    corruptRecovered,
  });

  const value = useMemo(
    () => ({
      state,
      storageAvailable,
      hydrated,
      persistToBrowser,
      loadedFromStorage,
      corruptRecovered,
      storageStatus,
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
      persistToBrowser,
      loadedFromStorage,
      corruptRecovered,
      storageStatus,
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
