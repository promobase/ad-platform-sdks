import type { RateLimiter, RateLimiterCheck } from "@promobase/sdk-runtime";

export interface MetaRateLimiterOptions {
  /** Pause requests when usage exceeds this threshold (0-1). Default: 0.9 */
  highWaterMark?: number;
  /** Fallback wait time in ms when over high water mark. Default: 60000 */
  fallbackWaitMs?: number;
  /** Called when rate limited. Informational only. */
  onThrottle?: (info: { waitMs: number; usage: MetaUsage }) => void;
}

export interface MetaUsage {
  callCount: number; // 0-100 percentage
  cpuTime: number; // 0-100 percentage
  totalTime: number; // 0-100 percentage
}

export class MetaRateLimiter implements RateLimiter {
  private usage: MetaUsage = { callCount: 0, cpuTime: 0, totalTime: 0 };
  private pausedUntil: number = 0;
  private readonly highWaterMark: number;
  private readonly fallbackWaitMs: number;
  private readonly onThrottle?: MetaRateLimiterOptions["onThrottle"];

  constructor(opts?: MetaRateLimiterOptions) {
    this.highWaterMark = (opts?.highWaterMark ?? 0.9) * 100; // convert to percentage
    this.fallbackWaitMs = opts?.fallbackWaitMs ?? 60_000;
    this.onThrottle = opts?.onThrottle;
  }

  check(): RateLimiterCheck {
    const now = Date.now();

    // Hard pause from 429 or estimated_time_to_regain_access
    if (this.pausedUntil > now) {
      const waitMs = this.pausedUntil - now;
      return { shouldWait: true, waitMs };
    }

    // Pre-emptive throttle based on usage percentage
    const maxUsage = Math.max(this.usage.callCount, this.usage.cpuTime, this.usage.totalTime);
    if (maxUsage >= this.highWaterMark) {
      const waitMs = this.fallbackWaitMs;
      if (this.onThrottle) {
        this.onThrottle({ waitMs, usage: { ...this.usage } });
      }
      return { shouldWait: true, waitMs };
    }

    return { shouldWait: false, waitMs: 0 };
  }

  afterResponse(status: number, headers: Headers): void {
    // Parse x-app-usage header
    const appUsage = headers.get("x-app-usage");
    if (appUsage) {
      try {
        const parsed = JSON.parse(appUsage);
        this.usage = {
          callCount: parsed.call_count ?? 0,
          cpuTime: parsed.total_cputime ?? 0,
          totalTime: parsed.total_time ?? 0,
        };
      } catch {}
    }

    // Parse x-business-use-case-usage header
    const bizUsage = headers.get("x-business-use-case-usage");
    if (bizUsage) {
      try {
        const parsed = JSON.parse(bizUsage);
        // Take the highest usage from any business use case
        for (const key of Object.keys(parsed)) {
          const entries = parsed[key];
          if (Array.isArray(entries)) {
            for (const entry of entries) {
              if (entry.call_count > this.usage.callCount) this.usage.callCount = entry.call_count;
              if (entry.total_cputime > this.usage.cpuTime)
                this.usage.cpuTime = entry.total_cputime;
              if (entry.total_time > this.usage.totalTime) this.usage.totalTime = entry.total_time;
              // If Meta gives us an explicit wait time
              if (entry.estimated_time_to_regain_access) {
                const waitMs = entry.estimated_time_to_regain_access * 60 * 1000; // minutes to ms
                this.pausedUntil = Date.now() + waitMs;
              }
            }
          }
        }
      } catch {}
    }

    // 429 response — hard pause
    if (status === 429) {
      const retryAfter = headers.get("retry-after");
      if (retryAfter) {
        const seconds = parseInt(retryAfter, 10);
        if (!Number.isNaN(seconds)) {
          this.pausedUntil = Date.now() + seconds * 1000;
        }
      } else if (this.pausedUntil <= Date.now()) {
        // No retry-after header — use fallback
        this.pausedUntil = Date.now() + this.fallbackWaitMs * 15; // 15min default for 429
      }
    }
  }

  /** Get current usage snapshot. */
  getUsage(): MetaUsage {
    return { ...this.usage };
  }

  /** Check if currently paused. */
  get isPaused(): boolean {
    return this.pausedUntil > Date.now();
  }

  /** Get pause end timestamp (0 if not paused). */
  get pausedUntilTimestamp(): number {
    return this.pausedUntil;
  }

  /** Manually reset all state. */
  reset(): void {
    this.usage = { callCount: 0, cpuTime: 0, totalTime: 0 };
    this.pausedUntil = 0;
  }
}
