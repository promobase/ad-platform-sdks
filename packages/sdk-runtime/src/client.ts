import { ApiError } from "./errors.ts";

export interface RateLimiterCheck {
  shouldWait: boolean;
  waitMs: number;
}

export interface RateLimiter {
  /** Check if a request should be delayed. Pure — doesn't modify state. */
  check(): RateLimiterCheck;
  /** Update state from response headers. */
  afterResponse(status: number, headers: Headers): void;
}

export type DelayFn = (ms: number) => Promise<void>;

export interface RetryConfig {
  /** Max number of retries (default: 0 = no retry) */
  maxRetries: number;
  /** Initial backoff in ms (default: 1000). Doubles each retry. */
  initialBackoffMs: number;
  /** Status codes to retry on (default: [429, 500, 502, 503, 504]) */
  retryableStatuses: number[];
  /** Whether to retry on network errors (default: true) */
  retryOnNetworkError: boolean;
}

const DEFAULT_RETRY: RetryConfig = {
  maxRetries: 3,
  initialBackoffMs: 1000,
  retryableStatuses: [429, 500, 502, 503, 504],
  retryOnNetworkError: true,
};

export interface PaginatedResponse<T = Record<string, unknown>> {
  data: T[];
  paging: { cursors: { before?: string; after?: string }; next?: string; previous?: string };
}

export type ErrorHandler = (status: number, body: unknown) => Error;

export interface ApiClientOptions {
  accessToken: string;
  apiVersion?: string;
  baseUrl: string;
  debug?: boolean;
  onError?: ErrorHandler;
  rateLimiter?: RateLimiter;
  delay?: DelayFn;
  retry?: Partial<RetryConfig>;
}

export class ApiClient {
  private readonly accessToken: string;
  private readonly apiVersion: string;
  private readonly baseUrl: string;
  private readonly debug: boolean;
  private readonly onError: ErrorHandler;
  private readonly rateLimiter?: RateLimiter;
  private readonly delay?: DelayFn;
  private readonly retryConfig: RetryConfig;

  constructor(opts: ApiClientOptions) {
    this.accessToken = opts.accessToken;
    this.apiVersion = opts.apiVersion ?? "";
    this.baseUrl = opts.baseUrl;
    this.debug = opts.debug ?? false;
    this.onError = opts.onError ?? ((status, _body) => new ApiError("API request failed", status));
    this.rateLimiter = opts.rateLimiter;
    this.delay = opts.delay;
    this.retryConfig = opts.retry
      ? { ...DEFAULT_RETRY, ...opts.retry }
      : { ...DEFAULT_RETRY, maxRetries: 0 };
  }

  private buildUrl(path: string, params?: Record<string, unknown>): string {
    const prefix = this.apiVersion ? `${this.apiVersion}/${path}` : path;
    const url = new URL(prefix, this.baseUrl);
    url.searchParams.set("access_token", this.accessToken);
    if (params) {
      for (const [key, value] of Object.entries(params)) {
        if (value !== undefined && value !== null) {
          url.searchParams.set(key, typeof value === "object" ? JSON.stringify(value) : String(value));
        }
      }
    }
    return url.toString();
  }

  private async request<T>(method: string, url: string, body?: Record<string, unknown>): Promise<T> {
    // Pre-request rate limit check
    if (this.rateLimiter) {
      const check = this.rateLimiter.check();
      if (check.shouldWait && this.delay) {
        await this.delay(check.waitMs);
      }
    }

    if (this.debug) console.log(`[SDK] ${method} ${url}`);
    const init: RequestInit = { method };
    if (body && (method === "POST" || method === "PUT")) {
      const formData = new URLSearchParams();
      for (const [key, value] of Object.entries(body)) {
        if (value !== undefined && value !== null) {
          formData.set(key, typeof value === "object" ? JSON.stringify(value) : String(value));
        }
      }
      init.body = formData;
      init.headers = { "Content-Type": "application/x-www-form-urlencoded" };
    }

    let lastError: unknown;
    const maxAttempts = 1 + this.retryConfig.maxRetries;

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      try {
        const response = await fetch(url, init);
        const responseBody = await response.json();

        // Post-response rate limit update
        if (this.rateLimiter) {
          this.rateLimiter.afterResponse(response.status, response.headers);
        }

        if (this.debug) console.log(`[SDK] ${response.status}`, responseBody);

        if (!response.ok) {
          // Check if retryable
          if (attempt < maxAttempts - 1 && this.retryConfig.retryableStatuses.includes(response.status)) {
            const backoff = this.retryConfig.initialBackoffMs * Math.pow(2, attempt);
            if (this.debug) console.log(`[SDK] Retrying (attempt ${attempt + 1}/${this.retryConfig.maxRetries}) after ${backoff}ms`);
            if (this.delay) await this.delay(backoff);
            continue;
          }
          throw this.onError(response.status, responseBody);
        }

        return responseBody as T;
      } catch (err) {
        // If it's an API error (from onError), don't retry unless it was already handled above
        if (!(err instanceof TypeError)) {
          throw err;
        }
        // Network error (fetch threw TypeError)
        if (attempt < maxAttempts - 1 && this.retryConfig.retryOnNetworkError) {
          lastError = err;
          const backoff = this.retryConfig.initialBackoffMs * Math.pow(2, attempt);
          if (this.debug) console.log(`[SDK] Network error, retrying (attempt ${attempt + 1}/${this.retryConfig.maxRetries}) after ${backoff}ms`);
          if (this.delay) await this.delay(backoff);
          continue;
        }
        throw err;
      }
    }

    throw lastError;
  }

  async get<T>(path: string, opts: { fields: readonly string[]; params?: Record<string, unknown> }): Promise<T> {
    const params = { ...opts.params, fields: opts.fields.join(",") };
    return this.request<T>("GET", this.buildUrl(path, params));
  }

  async post<T>(path: string, params: Record<string, unknown>): Promise<T> {
    return this.request<T>("POST", this.buildUrl(path), params);
  }

  async delete(path: string, params?: Record<string, unknown>): Promise<void> {
    await this.request<unknown>("DELETE", this.buildUrl(path, params));
  }

  async getEdge<T = Record<string, unknown>>(path: string, opts: { fields: readonly string[]; params?: Record<string, unknown> }): Promise<PaginatedResponse<T>> {
    const params = { ...opts.params, fields: opts.fields.join(",") };
    return this.request<PaginatedResponse<T>>("GET", this.buildUrl(path, params));
  }

  async getUrl<T>(url: string): Promise<T> {
    return this.request<T>("GET", url);
  }
}
