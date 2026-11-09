"use client";

import { useGatewayStore } from "@/components/gateway-store";

export function LocalStorageBanner() {
  const { storageAvailable, hydrated } = useGatewayStore();
  if (!hydrated) {
    return (
      <p className="storage-banner" role="status">
        Loading saved work from this device…
      </p>
    );
  }
  if (!storageAvailable) {
    return (
      <p className="storage-banner storage-banner--warn" role="alert">
        Browser storage is unavailable or blocked. You can still read lessons,
        but toolkit fields and progress will not persist after you leave.
      </p>
    );
  }
  return (
    <p className="storage-banner" role="status">
      Saved on this device and browser only—not an account, not cloud backup.
    </p>
  );
}
