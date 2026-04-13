import type { DelayFn, RateLimiter, RetryConfig } from "./client.ts";

export class HttpError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly body: unknown,
  ) {
    super(message);
    this.name = "HttpError";
  }
}

export type HeaderBuilder = () => Record<string, string> | Promise<Record<string, string>>;
export type HttpErrorHandler = (status: number, body: unknown) => Error;

export interface HttpClientOptions {
  baseUrl: string;
  getHeaders: HeaderBuilder;
  fetch?: typeof fetch;
  onError?: HttpErrorHandler;
  rateLimiter?: RateLimiter;
  delay?: DelayFn;
  retry?: Partial<RetryConfig>;
  debug?: boolean;
}

const DEFAULT_RETRY: RetryConfig = {
  maxRetries: 3,
  initialBackoffMs: 1000,
  retryableStatuses: [429, 500, 502, 503, 504],
  retryOnNetworkError: true,
};

export interface RequestOptions {
  query?: Record<string, string | number | boolean | undefined>;
  headers?: Record<string, string>;
}

export class HttpClient {
  private readonly baseUrl: string;
  private readonly getHeaders: HeaderBuilder;
  private readonly fetchImpl: typeof fetch;
  private readonly onError: HttpErrorHandler;
  private readonly rateLimiter?: RateLimiter;
  private readonly delay?: DelayFn;
  private readonly retryConfig: RetryConfig;
  private readonly debug: boolean;

  constructor(opts: HttpClientOptions) {
    this.baseUrl = opts.baseUrl.replace(/\/$/, "");
    this.getHeaders = opts.getHeaders;
    this.fetchImpl = opts.fetch ?? fetch;
    this.onError =
      opts.onError ?? ((status, body) => new HttpError(`HTTP ${status}`, status, body));
    this.rateLimiter = opts.rateLimiter;
    this.delay = opts.delay;
    this.retryConfig = opts.retry ? { ...DEFAULT_RETRY, ...opts.retry } : DEFAULT_RETRY;
    this.debug = opts.debug ?? false;
  }

  private buildUrl(path: string, query?: RequestOptions["query"]): string {
    const url = new URL(path, `${this.baseUrl}/`);
    if (query) {
      for (const [k, v] of Object.entries(query)) {
        if (v !== undefined) url.searchParams.set(k, String(v));
      }
    }
    return url.toString();
  }

  async get<T>(path: string, opts: RequestOptions = {}): Promise<T> {
    return this.request<T>("GET", path, undefined, opts);
  }

  async post<T>(path: string, body: unknown, opts: RequestOptions = {}): Promise<T> {
    return this.request<T>("POST", path, body, opts);
  }

  async delete<T>(path: string, opts: RequestOptions = {}): Promise<T> {
    return this.request<T>("DELETE", path, undefined, opts);
  }

  private async request<T>(
    method: string,
    path: string,
    body: unknown,
    opts: RequestOptions,
  ): Promise<T> {
    if (this.rateLimiter) {
      const check = this.rateLimiter.check();
      if (check.shouldWait && this.delay) await this.delay(check.waitMs);
    }

    const url = this.buildUrl(path, opts.query);
    const baseHeaders = await this.getHeaders();
    const headers: Record<string, string> = { ...baseHeaders, ...opts.headers };
    if (body !== undefined) headers["content-type"] ??= "application/json";

    const init: RequestInit = { method, headers };
    if (body !== undefined) init.body = JSON.stringify(body);

    const maxAttempts = 1 + this.retryConfig.maxRetries;
    let lastErr: unknown;

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      try {
        if (this.debug) console.log(`[HttpClient] ${method} ${url}`);
        const response = await this.fetchImpl(url, init);
        const text = await response.text();
        const parsed: unknown = text ? JSON.parse(text) : undefined;

        if (this.rateLimiter) this.rateLimiter.afterResponse(response.status, response.headers);

        if (!response.ok) {
          if (
            attempt < maxAttempts - 1 &&
            this.retryConfig.retryableStatuses.includes(response.status)
          ) {
            if (this.delay) await this.delay(this.retryConfig.initialBackoffMs * 2 ** attempt);
            continue;
          }
          throw this.onError(response.status, parsed);
        }
        return parsed as T;
      } catch (err) {
        if (
          err instanceof TypeError &&
          this.retryConfig.retryOnNetworkError &&
          attempt < maxAttempts - 1
        ) {
          lastErr = err;
          if (this.delay) await this.delay(this.retryConfig.initialBackoffMs * 2 ** attempt);
          continue;
        }
        throw err;
      }
    }
    throw lastErr;
  }
}
