/** User-facing storage status (no false “saved” claims). */

export type StorageStatus =
  | "loading"
  | "browser-saved"
  | "browser-empty"
  | "memory-only"
  | "unavailable"
  | "corrupt-recovered";

export function resolveStorageStatus(input: {
  hydrated: boolean;
  storageAvailable: boolean;
  persistToBrowser: boolean;
  loadedFromStorage: boolean;
  corruptRecovered: boolean;
}): StorageStatus {
  if (!input.hydrated) return "loading";
  if (!input.storageAvailable) return "unavailable";
  if (input.corruptRecovered) return "corrupt-recovered";
  if (!input.persistToBrowser) return "memory-only";
  if (input.loadedFromStorage) return "browser-saved";
  return "browser-empty";
}

export function storageStatusMessage(status: StorageStatus): {
  role: "status" | "alert";
  text: string;
  warn: boolean;
} {
  switch (status) {
    case "loading":
      return {
        role: "status",
        warn: false,
        text: "Checking for work saved on this device…",
      };
    case "browser-saved":
      return {
        role: "status",
        warn: false,
        text: "Work is saved in this browser only—not an account, not cloud backup.",
      };
    case "browser-empty":
      return {
        role: "status",
        warn: false,
        text: "No saved work found yet for this browser. Edits you make here can be saved on this device only—not an account.",
      };
    case "memory-only":
      return {
        role: "alert",
        warn: true,
        text: "Browser storage is not accepting saves. Edits stay in memory for this tab only and will be lost if you close or refresh.",
      };
    case "unavailable":
      return {
        role: "alert",
        warn: true,
        text: "Browser storage is unavailable or blocked. You can read lessons, but progress and toolkit fields will not persist after you leave.",
      };
    case "corrupt-recovered":
      return {
        role: "alert",
        warn: true,
        text: "Previous saved data on this device could not be read. A fresh worksheet was started. Export before closing if you had in-tab work.",
      };
  }
}

export function progressNoteForStatus(status: StorageStatus): string {
  switch (status) {
    case "loading":
      return "Loading progress…";
    case "unavailable":
    case "memory-only":
      return "Progress counts in this tab only—not saved to the browser.";
    case "corrupt-recovered":
      return "Earlier saves were unreadable; progress starts fresh in this browser.";
    default:
      return "Marked complete only when you choose—not by AI.";
  }
}

export function completionLabelSuffix(status: StorageStatus): string {
  if (status === "browser-saved" || status === "browser-empty") {
    if (status === "browser-empty") return "";
    return "";
  }
  if (status === "loading") return "";
  return " · this tab only";
}
