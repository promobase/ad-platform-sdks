import { expect, test } from "bun:test";
import { MetaRateLimiter } from "../../src/rate-limiter.ts";

test("check returns shouldWait=false when under high water mark", () => {
  const limiter = new MetaRateLimiter({ highWaterMark: 0.9 });
  const check = limiter.check();
  expect(check.shouldWait).toBe(false);
  expect(check.waitMs).toBe(0);
});

test("afterResponse parses x-app-usage header", () => {
  const limiter = new MetaRateLimiter();
  const headers = new Headers({
    "x-app-usage": JSON.stringify({ call_count: 50, total_cputime: 30, total_time: 40 }),
  });
  limiter.afterResponse(200, headers);
  expect(limiter.getUsage()).toEqual({ callCount: 50, cpuTime: 30, totalTime: 40 });
});

test("check returns shouldWait=true when over high water mark", () => {
  const limiter = new MetaRateLimiter({ highWaterMark: 0.9, fallbackWaitMs: 5000 });
  limiter.afterResponse(
    200,
    new Headers({
      "x-app-usage": JSON.stringify({ call_count: 95, total_cputime: 10, total_time: 10 }),
    }),
  );
  const check = limiter.check();
  expect(check.shouldWait).toBe(true);
  expect(check.waitMs).toBe(5000);
});

test("429 response triggers hard pause", () => {
  const limiter = new MetaRateLimiter();
  limiter.afterResponse(429, new Headers({ "retry-after": "30" }));
  expect(limiter.isPaused).toBe(true);
  const check = limiter.check();
  expect(check.shouldWait).toBe(true);
  expect(check.waitMs).toBeGreaterThan(0);
  expect(check.waitMs).toBeLessThanOrEqual(30000);
});

test("429 without retry-after uses long fallback", () => {
  const limiter = new MetaRateLimiter({ fallbackWaitMs: 60000 });
  limiter.afterResponse(429, new Headers());
  expect(limiter.isPaused).toBe(true);
  const check = limiter.check();
  expect(check.shouldWait).toBe(true);
  // 15 * 60000 = 900000 (15min default for 429)
  expect(check.waitMs).toBeGreaterThan(800000);
});

test("x-business-use-case-usage with estimated_time_to_regain_access sets pause", () => {
  const limiter = new MetaRateLimiter();
  const bizHeader = JSON.stringify({
    "123456": [
      {
        call_count: 80,
        total_cputime: 50,
        total_time: 60,
        estimated_time_to_regain_access: 5, // 5 minutes
      },
    ],
  });
  limiter.afterResponse(200, new Headers({ "x-business-use-case-usage": bizHeader }));
  expect(limiter.isPaused).toBe(true);
  const check = limiter.check();
  expect(check.shouldWait).toBe(true);
  expect(check.waitMs).toBeGreaterThan(0);
  expect(check.waitMs).toBeLessThanOrEqual(5 * 60 * 1000);
});

test("onThrottle callback fires when over high water mark", () => {
  let throttled = false;
  let throttleInfo: { waitMs: number; usage: { callCount: number } } | null = null;
  const limiter = new MetaRateLimiter({
    highWaterMark: 0.5,
    onThrottle: (info) => {
      throttled = true;
      throttleInfo = info;
    },
  });
  limiter.afterResponse(
    200,
    new Headers({
      "x-app-usage": JSON.stringify({ call_count: 60, total_cputime: 10, total_time: 10 }),
    }),
  );
  limiter.check();
  expect(throttled).toBe(true);
  expect(throttleInfo!.usage.callCount).toBe(60);
});

test("reset clears all state", () => {
  const limiter = new MetaRateLimiter();
  limiter.afterResponse(429, new Headers({ "retry-after": "30" }));
  expect(limiter.isPaused).toBe(true);
  limiter.reset();
  expect(limiter.isPaused).toBe(false);
  expect(limiter.getUsage()).toEqual({ callCount: 0, cpuTime: 0, totalTime: 0 });
});
