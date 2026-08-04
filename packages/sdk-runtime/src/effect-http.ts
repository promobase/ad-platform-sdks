import { Data, Effect, Schedule } from "effect";

import type { RetryConfig } from "./client.ts";
import { serializeRequestBody } from "./request-body.ts";

export class EffectHttpError extends Data.TaggedError("EffectHttpError")<{
  readonly status: number;
  readonly body: unknown;
}> {}

export class EffectNetworkError extends Data.TaggedError("EffectNetworkError")<{
  readonly cause: unknown;
}> {}

export class EffectJsonParseError extends Data.TaggedError("EffectJsonParseError")<{
  readonly cause: unknown;
  readonly text: string;
}> {}

export type EffectJsonRequestError = EffectHttpError | EffectNetworkError | EffectJsonParseError;

export interface EffectJsonRequestOptions {
  method: string;
  url: string;
  body?: unknown;
  headers?: Record<string, string>;
  fetch?: typeof fetch;
  retry: RetryConfig;
}

function retrySchedule(retry: RetryConfig) {
  return Schedule.addDelay(
    Schedule.recurs(retry.maxRetries),
    () => `${retry.initialBackoffMs} millis`,
  );
}

function shouldRetry(error: EffectJsonRequestError, retry: RetryConfig): boolean {
  switch (error._tag) {
    case "EffectHttpError":
      return retry.retryableStatuses.includes(error.status);
    case "EffectNetworkError":
      return retry.retryOnNetworkError;
    case "EffectJsonParseError":
      return false;
  }
}

export function jsonRequestEffect<T>(
  opts: EffectJsonRequestOptions,
): Effect.Effect<T, EffectJsonRequestError> {
  const fetchImpl = opts.fetch ?? fetch;
  const init: RequestInit = {
    method: opts.method,
    headers: opts.headers,
    body: serializeRequestBody(opts.body, opts.headers),
  };

  const request = Effect.gen(function* () {
    const response = yield* Effect.tryPromise({
      try: (signal) => fetchImpl(opts.url, { ...init, signal }),
      catch: (cause) => new EffectNetworkError({ cause }),
    });
    const text = yield* Effect.tryPromise({
      try: () => response.text(),
      catch: (cause) => new EffectNetworkError({ cause }),
    });
    const parsed = yield* Effect.try({
      try: () => (text ? JSON.parse(text) : undefined),
      catch: (cause) => new EffectJsonParseError({ cause, text }),
    });

    if (!response.ok) {
      return yield* Effect.fail(new EffectHttpError({ status: response.status, body: parsed }));
    }

    return parsed as T;
  });

  return request.pipe(
    Effect.retry({
      schedule: retrySchedule(opts.retry),
      while: (error) => shouldRetry(error, opts.retry),
    }),
  );
}
