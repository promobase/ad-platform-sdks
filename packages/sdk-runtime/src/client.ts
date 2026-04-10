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
}

export class ApiClient {
  private readonly accessToken: string;
  private readonly apiVersion: string;
  private readonly baseUrl: string;
  private readonly debug: boolean;
  private readonly onError: ErrorHandler;
  private readonly rateLimiter?: RateLimiter;
  private readonly delay?: DelayFn;

  constructor(opts: ApiClientOptions) {
    this.accessToken = opts.accessToken;
    this.apiVersion = opts.apiVersion ?? "";
    this.baseUrl = opts.baseUrl;
    this.debug = opts.debug ?? false;
    this.onError = opts.onError ?? ((status, _body) => new ApiError("API request failed", status));
    this.rateLimiter = opts.rateLimiter;
    this.delay = opts.delay;
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
    const response = await fetch(url, init);
    const responseBody = await response.json();

    // Post-response rate limit update
    if (this.rateLimiter) {
      this.rateLimiter.afterResponse(response.status, response.headers);
    }

    if (this.debug) console.log(`[SDK] ${response.status}`, responseBody);
    if (!response.ok) throw this.onError(response.status, responseBody);
    return responseBody as T;
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
