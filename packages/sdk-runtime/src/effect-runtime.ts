import { Duration, Effect, ManagedRuntime, Schedule } from "effect";

import {
  type PlatformError,
  MutationOutcomeUnknown,
  platformHttpError,
  ResponseDecodeError,
  RuntimeFailureError,
  retryAfter,
} from "./effect-errors.ts";
import {
  HttpTransport,
  RuntimeRateLimiter,
  RuntimeTelemetry,
  sdkRuntimeLayer,
  type RuntimeRateLimiterService,
  type RuntimeTelemetryService,
} from "./effect-services.ts";
import { serializeRequestBody } from "./request-body.ts";
import { Result, type SdkResult } from "./result.ts";

export type EndpointIdempotency = "safe" | "keyed" | "unsafe";

export interface EffectRetryPolicy {
  readonly maxRetries: number;
  readonly initialBackoffMs: number;
  readonly maxBackoffMs: number;
  readonly retryableStatuses: readonly number[];
  readonly retryOnNetworkError: boolean;
  readonly jitter: boolean;
}

export const defaultEffectRetryPolicy: EffectRetryPolicy = {
  maxRetries: 3,
  initialBackoffMs: 250,
  maxBackoffMs: 30_000,
  retryableStatuses: [429, 500, 502, 503, 504],
  retryOnNetworkError: true,
  jitter: true,
};

export interface EffectJsonRequest<A> {
  readonly platform: string;
  readonly operationId: string;
  readonly method: string;
  readonly url: string;
  readonly headers?: Readonly<Record<string, string>>;
  readonly body?: unknown;
  readonly requestId?: string;
  readonly rateLimitBucket?: string;
  readonly idempotency?: EndpointIdempotency;
  readonly idempotencyKey?: string;
  readonly retry?: Partial<EffectRetryPolicy> | false;
  readonly decode?: (value: unknown) => Effect.Effect<A, ResponseDecodeError>;
}

export type SdkRuntimeEnvironment = HttpTransport | RuntimeRateLimiter | RuntimeTelemetry;

export function executeJsonRequest<A = unknown>(
  request: EffectJsonRequest<A>,
): Effect.Effect<A, PlatformError, SdkRuntimeEnvironment> {
  return Effect.gen(function* () {
    const transport = yield* HttpTransport;
    const rateLimiter = yield* RuntimeRateLimiter;
    const telemetry = yield* RuntimeTelemetry;
    const context = {
      platform: request.platform,
      operationId: request.operationId,
      requestId: request.requestId,
      idempotencyKey: request.idempotencyKey,
    };
    const retry =
      request.retry === false ? undefined : { ...defaultEffectRetryPolicy, ...request.retry };

    return yield* Effect.suspend(() => {
      let attempts = 0;
      const attempt = Effect.gen(function* () {
        attempts += 1;
        const startedAt = Date.now();
        yield* telemetry.emit({
          _tag: "RequestStarted",
          ...context,
          method: request.method,
          url: request.url,
          attempt: attempts,
        });
        yield* rateLimiter.acquire({ ...context, bucket: request.rateLimitBucket });

        const response = yield* transport
          .execute({
            ...context,
            url: request.url,
            init: {
              method: request.method,
              headers: request.headers,
              body: serializeRequestBody(request.body, request.headers),
            },
          })
          .pipe(
            Effect.mapError((cause) =>
              isSideEffectingRequest(request)
                ? new MutationOutcomeUnknown({
                    ...context,
                    outcome: "unknown",
                    reconciliationRequired: true,
                    cause,
                  })
                : cause,
            ),
          );

        yield* rateLimiter.observe(
          { ...context, bucket: request.rateLimitBucket },
          response.status,
          response.headers,
        );
        yield* telemetry.emit({
          _tag: "ResponseReceived",
          ...context,
          status: response.status,
          attempt: attempts,
          durationMs: Date.now() - startedAt,
        });

        const text = yield* Effect.tryPromise({
          try: () => response.text(),
          catch: (cause) => new ResponseDecodeError({ ...context, cause }),
        });
        const value = yield* Effect.try({
          try: () => (text.length === 0 ? undefined : JSON.parse(text)),
          catch: (cause) => new ResponseDecodeError({ ...context, cause, text }),
        });

        if (!response.ok) {
          return yield* platformHttpError(
            context,
            response.status,
            value,
            parseRetryAfterMs(response.headers.get("retry-after")),
          );
        }

        if (request.decode) {
          return yield* request.decode(value);
        }
        return value as A;
      }).pipe(
        Effect.withSpan("openpromo.sdk.http", {
          attributes: {
            "openpromo.platform": request.platform,
            "openpromo.operation_id": request.operationId,
            "http.request.method": request.method,
          },
        }),
      );

      const executed =
        retry && canRetry(request)
          ? attempt.pipe(
              Effect.retry(
                retrySchedule(retry, request).pipe(
                  Schedule.tapInput((error: PlatformError) =>
                    telemetry.emit({
                      _tag: "RequestRetrying",
                      ...context,
                      errorTag: error._tag,
                      attempt: attempts,
                    }),
                  ),
                ),
              ),
            )
          : attempt;

      return executed.pipe(
        Effect.tapError((error) =>
          telemetry.emit({
            _tag: "RequestFailed",
            ...context,
            errorTag: error._tag,
            attempts,
          }),
        ),
      );
    });
  });
}

export function makeSdkRuntime(
  options: {
    fetch?: typeof fetch;
    rateLimiter?: RuntimeRateLimiterService;
    telemetry?: RuntimeTelemetryService;
  } = {},
) {
  const runtime = ManagedRuntime.make(sdkRuntimeLayer(options));
  return {
    runPromise: async <A, E extends Error>(
      effect: Effect.Effect<A, E, SdkRuntimeEnvironment>,
      runOptions?: { readonly signal?: AbortSignal },
    ): Promise<A> => {
      const result = await runtime.runPromise(Effect.either(effect), runOptions);
      if (result._tag === "Left") throw result.left;
      return result.right;
    },
    runPromiseExit: runtime.runPromiseExit,
    runResult: async <A, E extends Error>(
      effect: Effect.Effect<A, E, SdkRuntimeEnvironment>,
      runOptions?: { readonly signal?: AbortSignal },
    ): Promise<SdkResult<A, E | RuntimeFailureError>> => {
      try {
        const result = await runtime.runPromise(Effect.either(effect), runOptions);
        return result._tag === "Left" ? Result.err(result.left) : Result.ok(result.right);
      } catch (cause) {
        return Result.err(
          new RuntimeFailureError({
            cause,
            message: cause instanceof Error ? cause.message : String(cause),
          }),
        );
      }
    },
    dispose: runtime.dispose,
  };
}

function isSideEffectingRequest(request: EffectJsonRequest<unknown>): boolean {
  const idempotency = request.idempotency ?? (request.method === "GET" ? "safe" : "unsafe");
  return idempotency !== "safe";
}

function canRetry(request: EffectJsonRequest<unknown>): boolean {
  const idempotency = request.idempotency ?? (request.method === "GET" ? "safe" : "unsafe");
  return (
    idempotency === "safe" || (idempotency === "keyed" && request.idempotencyKey !== undefined)
  );
}

function isRetryable(
  error: PlatformError,
  retry: EffectRetryPolicy,
  request: EffectJsonRequest<unknown>,
): boolean {
  switch (error._tag) {
    case "NetworkError":
      return retry.retryOnNetworkError;
    case "MutationOutcomeUnknown":
      return (
        request.idempotency === "keyed" &&
        request.idempotencyKey !== undefined &&
        retry.retryOnNetworkError
      );
    case "RateLimitError":
    case "ProviderUnavailableError":
      return retry.retryableStatuses.includes(error.status);
    default:
      return false;
  }
}

function retrySchedule(retry: EffectRetryPolicy, request: EffectJsonRequest<unknown>) {
  const delays = Schedule.exponential(Duration.millis(retry.initialBackoffMs)).pipe(
    retry.jitter ? Schedule.jittered : (schedule) => schedule,
    Schedule.modifyDelay((_output, delay) =>
      Duration.min(delay, Duration.millis(retry.maxBackoffMs)),
    ),
  );

  return Schedule.identity<PlatformError>().pipe(
    Schedule.intersect(delays),
    Schedule.intersect(Schedule.recurs(retry.maxRetries)),
    Schedule.modifyDelay(([[error]], delay) => {
      const providerDelay = Duration.millis(retryAfter(error) ?? 0);
      return Duration.min(Duration.max(delay, providerDelay), Duration.millis(retry.maxBackoffMs));
    }),
    Schedule.whileInput((error) => isRetryable(error, retry, request)),
  );
}

function parseRetryAfterMs(value: string | null): number | undefined {
  if (!value) return undefined;
  const seconds = Number(value);
  if (Number.isFinite(seconds) && seconds >= 0) return seconds * 1_000;
  const timestamp = Date.parse(value);
  if (!Number.isFinite(timestamp)) return undefined;
  return Math.max(0, timestamp - Date.now());
}
