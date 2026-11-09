"use client";

import { useGatewayStore } from "@/components/gateway-store";
import {
  resolveStorageStatus,
  storageStatusMessage,
} from "@/lib/storage-status";

export function LocalStorageBanner() {
  const {
    storageAvailable,
    hydrated,
    persistToBrowser,
    loadedFromStorage,
    corruptRecovered,
  } = useGatewayStore();
  const status = resolveStorageStatus({
    hydrated,
    storageAvailable,
    persistToBrowser,
    loadedFromStorage,
    corruptRecovered,
  });
  const { role, text, warn } = storageStatusMessage(status);
  return (
    <p
      className={warn ? "storage-banner storage-banner--warn" : "storage-banner"}
      role={role}
    >
      {text}
    </p>
  );
}
