import type { DelayFn, RateLimiter, RetryConfig } from "@openpromo/sdk-runtime";

import { PinterestApiError } from "./errors.ts";

const DEFAULT_RETRY: RetryConfig = {
  maxRetries: 3,
  initialBackoffMs: 1000,
  retryableStatuses: [429, 500, 502, 503, 504],
  retryOnNetworkError: true,
};

export interface PinterestApiClientOptions {
  /** OAuth2 bearer token (from `Pinterest.OAuth` or your own token store). */
  accessToken: string;
  /** Base URL for the Pinterest REST API v5. */
  baseUrl?: string;
  debug?: boolean;
  rateLimiter?: RateLimiter;
  delay?: DelayFn;
  retry?: Partial<RetryConfig>;
  fetch?: typeof fetch;
  signal?: AbortSignal;
}

/**
 * Core HTTP client for the Pinterest REST API v5.
 *
 * Handles `Authorization: Bearer` auth, JSON bodies, rate limiting, retry,
 * and error parsing. Pinterest responses are the schema type directly (no
 * envelope wrapper).
 */
export class PinterestApiClient {
  readonly accessToken: string;
  private readonly baseUrl: string;
  private readonly debug: boolean;
  private readonly rateLimiter?: RateLimiter;
  private readonly delay: DelayFn;
  private readonly retryConfig: RetryConfig;
  private readonly fetchImpl: typeof fetch;
  private readonly signal?: AbortSignal;

  constructor(opts: PinterestApiClientOptions) {
    this.accessToken = opts.accessToken;
    this.baseUrl = (opts.baseUrl ?? "https://api.pinterest.com/v5").replace(/\/$/, "");
    this.debug = opts.debug ?? false;
    this.rateLimiter = opts.rateLimiter;
    this.delay = opts.delay ?? ((ms) => new Promise((resolve) => setTimeout(resolve, ms)));
    this.retryConfig = opts.retry
      ? { ...DEFAULT_RETRY, ...opts.retry }
      : { ...DEFAULT_RETRY, maxRetries: 0 };
    this.fetchImpl = opts.fetch ?? fetch;
    this.signal = opts.signal;
  }

  get<T>(path: string, query?: object): Promise<T> {
    let url = this.resolveUrl(path);
    if (query && Object.keys(query).length > 0) {
      const params = new URLSearchParams();
      for (const [key, value] of Object.entries(query)) {
        if (value !== undefined && value !== null) {
          params.set(key, typeof value === "object" ? JSON.stringify(value) : String(value));
        }
      }
      url += url.includes("?") ? `&${params.toString()}` : `?${params.toString()}`;
    }
    return this.request<T>("GET", url);
  }

  post<T>(path: string, body?: object): Promise<T> {
    return this.request<T>("POST", this.resolveUrl(path), body);
  }

  put<T>(path: string, body?: object): Promise<T> {
    return this.request<T>("PUT", this.resolveUrl(path), body);
  }

  patch<T>(path: string, body?: object): Promise<T> {
    return this.request<T>("PATCH", this.resolveUrl(path), body);
  }

  delete<T>(path: string): Promise<T> {
    return this.request<T>("DELETE", this.resolveUrl(path));
  }

  private resolveUrl(path: string): string {
    if (/^https?:\/\//.test(path)) return path;
    return `${this.baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
  }

  private async request<T>(method: string, url: string, body?: object): Promise<T> {
    if (this.rateLimiter) {
      const check = this.rateLimiter.check();
      if (check.shouldWait) {
        if (this.debug) console.log(`[Pinterest SDK] Rate limited, waiting ${check.waitMs}ms`);
        await this.delay(check.waitMs);
      }
    }

    if (this.debug) console.log(`[Pinterest SDK] ${method} ${url}`);

    const headers: Record<string, string> = { Authorization: `Bearer ${this.accessToken}` };
    let requestBody: string | undefined;
    if (body && method !== "GET" && method !== "DELETE") {
      headers["Content-Type"] = "application/json";
      requestBody = JSON.stringify(body);
    }

    let lastError: unknown;
    const maxAttempts = 1 + this.retryConfig.maxRetries;

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      try {
        const response = await this.fetchImpl(url, {
          method,
          headers,
          body: requestBody,
          signal: this.signal,
        });

        if (this.rateLimiter) {
          this.rateLimiter.afterResponse(response.status, response.headers);
        }

        const responseBody = (await response.json().catch(() => null)) as T | null;

        if (this.debug) console.log(`[Pinterest SDK] ${response.status}`, responseBody);

        if (!response.ok) {
          throw PinterestApiError.fromResponse(response.status, responseBody);
        }

        return responseBody as T;
      } catch (err) {
        const retryable =
          err instanceof PinterestApiError &&
          attempt < maxAttempts - 1 &&
          this.retryConfig.retryableStatuses.includes(err.status);
        const networkRetryable =
          err instanceof TypeError &&
          attempt < maxAttempts - 1 &&
          this.retryConfig.retryOnNetworkError;

        if (retryable || networkRetryable) {
          lastError = err;
          const backoff = this.retryConfig.initialBackoffMs * 2 ** attempt;
          if (this.debug)
            console.log(
              `[Pinterest SDK] Retrying (${attempt + 1}/${this.retryConfig.maxRetries}) after ${backoff}ms`,
            );
          await this.delay(backoff);
          continue;
        }
        throw err;
      }
    }

    throw lastError;
  }
}
