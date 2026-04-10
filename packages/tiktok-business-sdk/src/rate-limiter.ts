import type { RateLimiter, RateLimiterCheck } from "@promobase/sdk-runtime";

export interface TikTokRateLimiterOptions {
  /** Fallback wait time in ms on 429 when no Retry-After header. Default: 60000 */
  fallbackWaitMs?: number;
  /** Called when rate limited. Informational only. */
  onThrottle?: (info: { waitMs: number; reason: string }) => void;
}

/**
 * TikTok Business API rate limiter.
 *
 * TikTok doesn't provide usage-percentage headers like Meta.
 * Rate limiting is detected by:
 * - HTTP 429 status code
 * - Error code 40100 in response body
 * - Retry-After header (seconds)
 *
 * Content publishing has additional limits: 6 posts/min, 15 posts/day per account.
 * These are not tracked here (they throw specific error codes).
 */
export class TikTokRateLimiter implements RateLimiter {
  private pausedUntil: number = 0;
  private readonly fallbackWaitMs: number;
  private readonly onThrottle?: TikTokRateLimiterOptions["onThrottle"];

  constructor(opts?: TikTokRateLimiterOptions) {
    this.fallbackWaitMs = opts?.fallbackWaitMs ?? 60_000;
    this.onThrottle = opts?.onThrottle;
  }

  check(): RateLimiterCheck {
    const now = Date.now();
    if (this.pausedUntil > now) {
      const waitMs = this.pausedUntil - now;
      return { shouldWait: true, waitMs };
    }
    return { shouldWait: false, waitMs: 0 };
  }

  afterResponse(status: number, headers: Headers): void {
    if (status === 429) {
      const retryAfter = headers.get("retry-after");
      if (retryAfter) {
        const seconds = parseInt(retryAfter, 10);
        if (!isNaN(seconds)) {
          this.pausedUntil = Date.now() + seconds * 1000;
          this.onThrottle?.({ waitMs: seconds * 1000, reason: "429 with Retry-After" });
          return;
        }
      }
      // No Retry-After header — use fallback
      this.pausedUntil = Date.now() + this.fallbackWaitMs;
      this.onThrottle?.({ waitMs: this.fallbackWaitMs, reason: "429 without Retry-After" });
    }
  }

  /** Check if currently paused. */
  get isPaused(): boolean {
    return this.pausedUntil > Date.now();
  }

  /** Manually reset all state. */
  reset(): void {
    this.pausedUntil = 0;
  }
}
