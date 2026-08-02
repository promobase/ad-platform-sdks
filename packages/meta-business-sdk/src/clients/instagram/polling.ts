import { Data, Effect } from "effect";

import type { PollingConfig } from "./types.ts";

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
  getStatus: (containerId: string) => Promise<string>;
  label?: string; // for error messages
}

export class InstagramContainerFailedError extends Data.TaggedError(
  "InstagramContainerFailedError",
)<{
  readonly containerId: string;
  readonly label?: string;
}> {}

export class InstagramContainerExpiredError extends Data.TaggedError(
  "InstagramContainerExpiredError",
)<{
  readonly containerId: string;
  readonly label?: string;
}> {}

export class InstagramContainerUnknownStatusError extends Data.TaggedError(
  "InstagramContainerUnknownStatusError",
)<{
  readonly containerId: string;
  readonly status: string;
}> {}

export class InstagramContainerTimeoutError extends Data.TaggedError(
  "InstagramContainerTimeoutError",
)<{
  readonly containerId: string;
  readonly label?: string;
  readonly maxAttempts: number;
}> {}

export class InstagramContainerStatusError extends Data.TaggedError(
  "InstagramContainerStatusError",
)<{
  readonly containerId: string;
  readonly cause: unknown;
}> {}

export type InstagramContainerWaitError =
  | InstagramContainerFailedError
  | InstagramContainerExpiredError
  | InstagramContainerUnknownStatusError
  | InstagramContainerTimeoutError
  | InstagramContainerStatusError;

function labelText(label?: string): string {
  return label ? ` (${label})` : "";
}

export function instagramContainerWaitErrorToError(error: InstagramContainerWaitError): Error {
  switch (error._tag) {
    case "InstagramContainerFailedError":
      return new Error(
        `Container ${error.containerId}${labelText(error.label)} failed with status ERROR`,
      );
    case "InstagramContainerExpiredError":
      return new Error(`Container ${error.containerId}${labelText(error.label)} expired`);
    case "InstagramContainerUnknownStatusError":
      return new Error(`Container ${error.containerId} has unknown status: ${error.status}`);
    case "InstagramContainerTimeoutError":
      return new Error(
        `Container ${error.containerId}${labelText(error.label)} did not finish after ${error.maxAttempts} attempts`,
      );
    case "InstagramContainerStatusError":
      return new Error(
        `Container ${error.containerId} status request failed: ${String(error.cause)}`,
      );
  }
}

export function waitForContainerEffect(
  opts: WaitOptions,
): Effect.Effect<void, InstagramContainerWaitError> {
  const { containerId, isVideo, polling, getStatus, label } = opts;
  const interval = isVideo ? polling.videoIntervalMs : polling.photoIntervalMs;

  const poll = (attempt: number): Effect.Effect<void, InstagramContainerWaitError> =>
    Effect.tryPromise({
      try: () => getStatus(containerId),
      catch: (cause) => new InstagramContainerStatusError({ containerId, cause }),
    }).pipe(
      Effect.flatMap((status) => {
        switch (status) {
          case "FINISHED":
          case "PUBLISHED":
            return Effect.void;
          case "ERROR":
            return Effect.fail(new InstagramContainerFailedError({ containerId, label }));
          case "EXPIRED":
            return Effect.fail(new InstagramContainerExpiredError({ containerId, label }));
          case "IN_PROGRESS":
            if (attempt >= polling.maxAttempts - 1) {
              return Effect.fail(
                new InstagramContainerTimeoutError({
                  containerId,
                  label,
                  maxAttempts: polling.maxAttempts,
                }),
              );
            }
            return Effect.tryPromise({
              try: () => polling.delay(interval),
              catch: (cause) => new InstagramContainerStatusError({ containerId, cause }),
            }).pipe(Effect.flatMap(() => poll(attempt + 1)));
          default:
            return Effect.fail(new InstagramContainerUnknownStatusError({ containerId, status }));
        }
      }),
    );

  return poll(0);
}

export async function waitForContainer(opts: WaitOptions): Promise<void> {
  const result = await Effect.runPromise(Effect.either(waitForContainerEffect(opts)));
  if (result._tag === "Left") throw instagramContainerWaitErrorToError(result.left);
}
