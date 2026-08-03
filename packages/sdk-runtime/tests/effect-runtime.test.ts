import { expect, test } from "bun:test";

import { Effect } from "effect";

import { AuthenticationError, NetworkError, ResponseDecodeError } from "../src/effect-errors.ts";
import { executeJsonRequest, makeSdkRuntime } from "../src/effect-runtime.ts";
import type { RuntimeRateLimiterService, RuntimeTelemetryEvent } from "../src/effect-services.ts";
import { sdkRuntimeLayer } from "../src/effect-services.ts";

const noDelayRetry = {
  maxRetries: 2,
  initialBackoffMs: 0,
  maxBackoffMs: 0,
  jitter: false,
} as const;

test("Effect and Promise boundaries execute the same decoded request", async () => {
  const runtime = makeSdkRuntime({
    fetch: (async () =>
      new Response('{"id":"post-1"}', { status: 200 })) as unknown as typeof fetch,
  });
  const program = executeJsonRequest<{ id: string }>({
    platform: "test",
    operationId: "test.posts.get",
    method: "GET",
    url: "https://example.test/posts/post-1",
    decode: (value) =>
      typeof value === "object" && value !== null && "id" in value
        ? Effect.succeed(value as { id: string })
        : Effect.fail(
            new ResponseDecodeError({
              platform: "test",
              operationId: "test.posts.get",
              cause: "missing id",
              value,
            }),
          ),
  });

  await expect(runtime.runPromise(program)).resolves.toEqual({ id: "post-1" });
  await runtime.dispose();
});

test("Effect-native consumers can provide the runtime layer directly", async () => {
  const result = await Effect.runPromise(
    executeJsonRequest<{ ok: boolean }>({
      platform: "test",
      operationId: "test.health.get",
      method: "GET",
      url: "https://example.test/health",
    }).pipe(
      Effect.provide(
        sdkRuntimeLayer({
          fetch: (async () =>
            new Response('{"ok":true}', { status: 200 })) as unknown as typeof fetch,
        }),
      ),
    ),
  );

  expect(result).toEqual({ ok: true });
});

test("Promise boundary rejects with the tagged platform error", async () => {
  const runtime = makeSdkRuntime({
    fetch: (async () =>
      new Response('{"error":"expired"}', { status: 401 })) as unknown as typeof fetch,
  });

  const promise = runtime.runPromise(
    executeJsonRequest({
      platform: "test",
      operationId: "test.account.get",
      method: "GET",
      url: "https://example.test/me",
      retry: false,
    }),
  );

  await expect(promise).rejects.toBeInstanceOf(AuthenticationError);
  await runtime.dispose();
});

test("safe requests retry retryable provider failures", async () => {
  let calls = 0;
  const events: RuntimeTelemetryEvent[] = [];
  const runtime = makeSdkRuntime({
    fetch: (async () => {
      calls += 1;
      return calls < 3
        ? new Response('{"error":"busy"}', { status: 503 })
        : new Response('{"ok":true}', { status: 200 });
    }) as unknown as typeof fetch,
    telemetry: {
      emit: (event) => Effect.sync(() => events.push(event)),
    },
  });

  await expect(
    runtime.runPromise(
      executeJsonRequest({
        platform: "test",
        operationId: "test.metrics.get",
        method: "GET",
        url: "https://example.test/metrics",
        retry: noDelayRetry,
      }),
    ),
  ).resolves.toEqual({ ok: true });

  expect(calls).toBe(3);
  expect(events.filter((event) => event._tag === "RequestRetrying")).toHaveLength(2);
  await runtime.dispose();
});

test("unsafe writes never retry", async () => {
  let calls = 0;
  const runtime = makeSdkRuntime({
    fetch: (async () => {
      calls += 1;
      return new Response('{"error":"busy"}', { status: 503 });
    }) as unknown as typeof fetch,
  });

  await expect(
    runtime.runPromise(
      executeJsonRequest({
        platform: "test",
        operationId: "test.posts.publish",
        method: "POST",
        url: "https://example.test/posts",
        body: { text: "hello" },
        idempotency: "unsafe",
        retry: noDelayRetry,
      }),
    ),
  ).rejects.toMatchObject({ _tag: "ProviderUnavailableError" });

  expect(calls).toBe(1);
  await runtime.dispose();
});

test("keyed writes retry only when an idempotency key is present", async () => {
  let calls = 0;
  const runtime = makeSdkRuntime({
    fetch: (async () => {
      calls += 1;
      return calls === 1
        ? new Response('{"error":"busy"}', { status: 503 })
        : new Response('{"id":"created"}', { status: 200 });
    }) as unknown as typeof fetch,
  });

  await expect(
    runtime.runPromise(
      executeJsonRequest({
        platform: "test",
        operationId: "test.posts.publish",
        method: "POST",
        url: "https://example.test/posts",
        body: { text: "hello" },
        idempotency: "keyed",
        idempotencyKey: "request-1",
        retry: noDelayRetry,
      }),
    ),
  ).resolves.toEqual({ id: "created" });

  expect(calls).toBe(2);
  await runtime.dispose();
});

test("rate limiter observes each provider response", async () => {
  const observed: number[] = [];
  const limiter: RuntimeRateLimiterService = {
    acquire: () => Effect.void,
    observe: (_context, status) => Effect.sync(() => observed.push(status)),
  };
  const runtime = makeSdkRuntime({
    fetch: (async () => new Response("{}", { status: 200 })) as unknown as typeof fetch,
    rateLimiter: limiter,
  });

  await runtime.runPromise(
    executeJsonRequest({
      platform: "test",
      operationId: "test.account.get",
      method: "GET",
      url: "https://example.test/me",
    }),
  );

  expect(observed).toEqual([200]);
  await runtime.dispose();
});

test("AbortSignal interrupts the underlying fetch", async () => {
  let fetchSignal: AbortSignal | undefined;
  const runtime = makeSdkRuntime({
    fetch: ((_url: string | URL | Request, init?: RequestInit) => {
      fetchSignal = init?.signal ?? undefined;
      return new Promise<Response>((_resolve, reject) => {
        init?.signal?.addEventListener(
          "abort",
          () => reject(new DOMException("aborted", "AbortError")),
          { once: true },
        );
      });
    }) as unknown as typeof fetch,
  });
  const controller = new AbortController();
  const promise = runtime.runPromise(
    executeJsonRequest({
      platform: "test",
      operationId: "test.posts.get",
      method: "GET",
      url: "https://example.test/posts/1",
      retry: false,
    }),
    { signal: controller.signal },
  );

  await Promise.resolve();
  controller.abort();
  await expect(promise).rejects.toBeDefined();
  expect(fetchSignal?.aborted).toBe(true);
  await runtime.dispose();
});

test("network failures stay in the typed error channel", async () => {
  const runtime = makeSdkRuntime({
    fetch: (async () => {
      throw new TypeError("network down");
    }) as unknown as typeof fetch,
  });

  await expect(
    runtime.runPromise(
      executeJsonRequest({
        platform: "test",
        operationId: "test.posts.get",
        method: "GET",
        url: "https://example.test/posts/1",
        retry: false,
      }),
    ),
  ).rejects.toBeInstanceOf(NetworkError);
  await runtime.dispose();
});
