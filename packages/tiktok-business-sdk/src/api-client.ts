import type { RateLimiter, RateLimiterCheck, DelayFn, RetryConfig } from "@promobase/sdk-runtime";
import { TikTokApiError } from "./errors.ts";

const DEFAULT_RETRY: RetryConfig = {
  maxRetries: 3,
  initialBackoffMs: 1000,
  retryableStatuses: [429, 500, 502, 503, 504],
  retryOnNetworkError: true,
};

export interface TikTokApiClientOptions {
  accessToken: string;
  baseUrl?: string;
  debug?: boolean;
  rateLimiter?: RateLimiter;
  delay?: DelayFn;
  retry?: Partial<RetryConfig>;
}

/**
 * Core HTTP client for TikTok Business API.
 * Handles auth (Access-Token header), JSON body, rate limiting, retry, and error parsing.
 */
export class TikTokApiClient {
  readonly accessToken: string;
  private readonly baseUrl: string;
  private readonly debug: boolean;
  private readonly rateLimiter?: RateLimiter;
  private readonly delay: DelayFn;
  private readonly retryConfig: RetryConfig;

  constructor(opts: TikTokApiClientOptions) {
    this.accessToken = opts.accessToken;
    this.baseUrl = opts.baseUrl ?? "https://business-api.tiktok.com";
    this.debug = opts.debug ?? false;
    this.rateLimiter = opts.rateLimiter;
    this.delay = opts.delay ?? ((ms) => new Promise(r => setTimeout(r, ms)));
    this.retryConfig = opts.retry
      ? { ...DEFAULT_RETRY, ...opts.retry }
      : { ...DEFAULT_RETRY, maxRetries: 0 };
  }

  async get<T>(path: string, query?: Record<string, unknown>): Promise<T> {
    let url = `${this.baseUrl}${path}`;
    if (query) {
      const params = new URLSearchParams();
      for (const [key, value] of Object.entries(query)) {
        if (value !== undefined && value !== null) {
          params.set(key, typeof value === "object" ? JSON.stringify(value) : String(value));
        }
      }
      url += `?${params.toString()}`;
    }
    return this.request<T>("GET", url);
  }

  async post<T>(path: string, body?: Record<string, unknown>): Promise<T> {
    return this.request<T>("POST", `${this.baseUrl}${path}`, body);
  }

  async postFormData<T>(path: string, formData: FormData): Promise<T> {
    return this.request<T>("POST", `${this.baseUrl}${path}`, undefined, formData);
  }

  private async request<T>(method: string, url: string, body?: Record<string, unknown>, formData?: FormData): Promise<T> {
    // Pre-request rate limit check
    if (this.rateLimiter) {
      const check = this.rateLimiter.check();
      if (check.shouldWait) {
        if (this.debug) console.log(`[TikTok SDK] Rate limited, waiting ${check.waitMs}ms`);
        await this.delay(check.waitMs);
      }
    }

    if (this.debug) console.log(`[TikTok SDK] ${method} ${url}`);

    const headers: Record<string, string> = { "Access-Token": this.accessToken };
    let requestBody: string | FormData | undefined;

    if (formData) {
      requestBody = formData;
    } else if (body && (method === "POST" || method === "PUT")) {
      headers["Content-Type"] = "application/json";
      requestBody = JSON.stringify(body);
    }

    let lastError: unknown;
    const maxAttempts = 1 + this.retryConfig.maxRetries;

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      try {
        const response = await fetch(url, { method, headers, body: requestBody });
        const responseBody = await response.json() as { code: number; message: string; request_id: string; data: T };

        // Post-response rate limit update
        if (this.rateLimiter) {
          this.rateLimiter.afterResponse(response.status, response.headers);
        }

        if (this.debug) console.log(`[TikTok SDK] ${response.status}`, responseBody);

        if (!response.ok || responseBody.code !== 0) {
          // Check if retryable
          if (attempt < maxAttempts - 1 && this.retryConfig.retryableStatuses.includes(response.status)) {
            const backoff = this.retryConfig.initialBackoffMs * Math.pow(2, attempt);
            if (this.debug) console.log(`[TikTok SDK] Retrying (${attempt + 1}/${this.retryConfig.maxRetries}) after ${backoff}ms`);
            await this.delay(backoff);
            continue;
          }
          throw TikTokApiError.fromResponse(response.status, responseBody);
        }

        return responseBody.data;
      } catch (err) {
        if (!(err instanceof TypeError)) throw err;
        // Network error
        if (attempt < maxAttempts - 1 && this.retryConfig.retryOnNetworkError) {
          lastError = err;
          const backoff = this.retryConfig.initialBackoffMs * Math.pow(2, attempt);
          if (this.debug) console.log(`[TikTok SDK] Network error, retrying (${attempt + 1}/${this.retryConfig.maxRetries}) after ${backoff}ms`);
          await this.delay(backoff);
          continue;
        }
        throw err;
      }
    }

    throw lastError;
  }
}
