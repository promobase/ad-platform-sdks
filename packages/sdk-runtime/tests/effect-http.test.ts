import { expect, test } from "bun:test";

import { Effect } from "effect";

import { EffectHttpError, jsonRequestEffect } from "../src/effect-http.ts";

const retry = {
  maxRetries: 0,
  initialBackoffMs: 1,
  retryableStatuses: [429, 500, 502, 503, 504],
  retryOnNetworkError: true,
};

test("jsonRequestEffect returns parsed JSON", async () => {
  const fetchImpl = (async () =>
    new Response(JSON.stringify({ ok: true }), { status: 200 })) as unknown as typeof fetch;

  const result = await Effect.runPromise(
    jsonRequestEffect<{ ok: boolean }>({
      method: "GET",
      url: "https://example.test/ok",
      fetch: fetchImpl,
      retry,
    }),
  );

  expect(result).toEqual({ ok: true });
});

test("jsonRequestEffect fails with typed HTTP errors", async () => {
  const fetchImpl = (async () =>
    new Response(JSON.stringify({ message: "rate limited" }), {
      status: 429,
    })) as unknown as typeof fetch;

  const result = await Effect.runPromise(
    Effect.either(
      jsonRequestEffect({
        method: "GET",
        url: "https://example.test/rate-limit",
        fetch: fetchImpl,
        retry,
      }),
    ),
  );

  expect(result._tag).toBe("Left");
  if (result._tag === "Left") {
    expect(result.left).toBeInstanceOf(EffectHttpError);
    expect(result.left._tag).toBe("EffectHttpError");
    if (result.left._tag === "EffectHttpError") {
      expect(result.left.status).toBe(429);
      expect(result.left.body).toEqual({ message: "rate limited" });
    }
  }
});
