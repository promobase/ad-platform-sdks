import type { ContainerStatus, PollingConfig } from "./types.ts";

const DEFAULT_DELAY = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

export const DEFAULT_POLLING: PollingConfig = {
  delay: DEFAULT_DELAY,
  photoIntervalMs: 5000,
  videoIntervalMs: 60000,
  maxAttempts: 12,
};

export function resolvePolling(partial?: Partial<PollingConfig>): PollingConfig {
  return { ...DEFAULT_POLLING, ...partial };
}

export interface WaitOptions {
  containerId: string;
  isVideo: boolean;
  polling: PollingConfig;
  getStatus: (containerId: string) => Promise<ContainerStatus>;
  label?: string;  // for error messages
}

export async function waitForContainer(opts: WaitOptions): Promise<void> {
  const { containerId, isVideo, polling, getStatus, label } = opts;
  const interval = isVideo ? polling.videoIntervalMs : polling.photoIntervalMs;

  for (let attempt = 0; attempt < polling.maxAttempts; attempt++) {
    const status = await getStatus(containerId);

    switch (status) {
      case "FINISHED":
        return;
      case "PUBLISHED":
        return;
      case "ERROR":
        throw new Error(`Container ${containerId}${label ? ` (${label})` : ""} failed with status ERROR`);
      case "EXPIRED":
        throw new Error(`Container ${containerId}${label ? ` (${label})` : ""} expired`);
      case "IN_PROGRESS":
        await polling.delay(interval);
        break;
      default:
        throw new Error(`Container ${containerId} has unknown status: ${status}`);
    }
  }

  throw new Error(
    `Container ${containerId}${label ? ` (${label})` : ""} did not finish after ${polling.maxAttempts} attempts`
  );
}
