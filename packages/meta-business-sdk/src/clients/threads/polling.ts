import type { ThreadsPollingConfig, ThreadsContainerStatus } from "./types.ts";

const DEFAULT_DELAY = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

export const DEFAULT_POLLING: ThreadsPollingConfig = {
  delay: DEFAULT_DELAY,
  textIntervalMs: 1000,
  videoIntervalMs: 2000,
  maxAttempts: 15,
};

export function resolvePolling(partial?: Partial<ThreadsPollingConfig>): ThreadsPollingConfig {
  return { ...DEFAULT_POLLING, ...partial };
}

export interface WaitOptions {
  containerId: string;
  isVideo: boolean;
  polling: ThreadsPollingConfig;
  getStatus: (id: string) => Promise<{ status: ThreadsContainerStatus; errorMessage?: string }>;
  label?: string;
}

export async function waitForContainer(opts: WaitOptions): Promise<void> {
  const { containerId, isVideo, polling, getStatus, label } = opts;
  const interval = isVideo ? polling.videoIntervalMs : polling.textIntervalMs;
  const maxAttempts = isVideo ? polling.maxAttempts * 2 : polling.maxAttempts;

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const { status, errorMessage } = await getStatus(containerId);

    switch (status) {
      case "FINISHED":
        return;
      case "ERROR":
        throw new Error(`Threads container ${containerId}${label ? ` (${label})` : ""} failed: ${errorMessage ?? "unknown error"}`);
      case "EXPIRED":
        throw new Error(`Threads container ${containerId}${label ? ` (${label})` : ""} expired`);
      case "IN_PROGRESS":
      case "PUBLISHING":
        await polling.delay(interval);
        break;
      default:
        throw new Error(`Threads container ${containerId} has unknown status: ${status}`);
    }
  }

  throw new Error(`Threads container ${containerId}${label ? ` (${label})` : ""} did not finish after ${maxAttempts} attempts`);
}
