import { Context, Effect, Layer } from "effect";

import { NetworkError, type PlatformErrorContext } from "./effect-errors.ts";

export interface RuntimeHttpRequest extends PlatformErrorContext {
  readonly url: string;
  readonly init: RequestInit;
}

export interface HttpTransportService {
  readonly execute: (request: RuntimeHttpRequest) => Effect.Effect<Response, NetworkError>;
}

export class HttpTransport extends Context.Tag("@openpromo/sdk-runtime/HttpTransport")<
  HttpTransport,
  HttpTransportService
>() {}

export function makeFetchTransport(
  fetchImpl: typeof fetch = globalThis.fetch,
): HttpTransportService {
  return HttpTransport.of({
    execute: (request) =>
      Effect.tryPromise({
        try: (signal) => fetchImpl(request.url, { ...request.init, signal }),
        catch: (cause) =>
          new NetworkError({
            platform: request.platform,
            operationId: request.operationId,
            requestId: request.requestId,
            cause,
          }),
      }),
  });
}

export const fetchTransportLayer = (fetchImpl?: typeof fetch) =>
  Layer.succeed(HttpTransport, makeFetchTransport(fetchImpl));

export interface RuntimeRateLimitContext extends PlatformErrorContext {
  readonly bucket?: string;
}

export interface RuntimeRateLimiterService {
  readonly acquire: (context: RuntimeRateLimitContext) => Effect.Effect<void>;
  readonly observe: (
    context: RuntimeRateLimitContext,
    status: number,
    headers: Headers,
  ) => Effect.Effect<void>;
}

export class RuntimeRateLimiter extends Context.Tag("@openpromo/sdk-runtime/RateLimiter")<
  RuntimeRateLimiter,
  RuntimeRateLimiterService
>() {}

export const noopRateLimiter: RuntimeRateLimiterService = RuntimeRateLimiter.of({
  acquire: () => Effect.void,
  observe: () => Effect.void,
});

export const rateLimiterLayer = (service: RuntimeRateLimiterService = noopRateLimiter) =>
  Layer.succeed(RuntimeRateLimiter, service);

export type RuntimeTelemetryEvent =
  | (PlatformErrorContext & {
      readonly _tag: "RequestStarted";
      readonly method: string;
      readonly url: string;
      readonly attempt: number;
    })
  | (PlatformErrorContext & {
      readonly _tag: "ResponseReceived";
      readonly status: number;
      readonly attempt: number;
      readonly durationMs: number;
    })
  | (PlatformErrorContext & {
      readonly _tag: "RequestRetrying";
      readonly errorTag: string;
      readonly attempt: number;
    })
  | (PlatformErrorContext & {
      readonly _tag: "RequestFailed";
      readonly errorTag: string;
      readonly attempts: number;
    });

export interface RuntimeTelemetryService {
  readonly emit: (event: RuntimeTelemetryEvent) => Effect.Effect<void>;
}

export class RuntimeTelemetry extends Context.Tag("@openpromo/sdk-runtime/Telemetry")<
  RuntimeTelemetry,
  RuntimeTelemetryService
>() {}

export const noopTelemetry: RuntimeTelemetryService = RuntimeTelemetry.of({
  emit: () => Effect.void,
});

export const telemetryLayer = (service: RuntimeTelemetryService = noopTelemetry) =>
  Layer.succeed(RuntimeTelemetry, service);

export const sdkRuntimeLayer = (
  options: {
    fetch?: typeof fetch;
    rateLimiter?: RuntimeRateLimiterService;
    telemetry?: RuntimeTelemetryService;
  } = {},
) =>
  Layer.mergeAll(
    fetchTransportLayer(options.fetch),
    rateLimiterLayer(options.rateLimiter),
    telemetryLayer(options.telemetry),
  );
