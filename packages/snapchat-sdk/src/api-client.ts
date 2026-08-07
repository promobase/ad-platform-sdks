import type { DelayFn, RateLimiter, RetryConfig } from "@mosaic/sdk-runtime";

import { SnapchatApiError } from "./errors.ts";

const DEFAULT_RETRY: RetryConfig = {
  maxRetries: 3,
  initialBackoffMs: 1000,
  retryableStatuses: [429, 500, 502, 503, 504],
  retryOnNetworkError: true,
};

export interface SnapchatApiClientOptions {
  accessToken: string;
  /** Base URL for the Ads API. Defaults to `https://adsapi.snapchat.com/v1`. */
  baseUrl?: string;
  debug?: boolean;
  rateLimiter?: RateLimiter;
  delay?: DelayFn;
  retry?: Partial<RetryConfig>;
  fetch?: typeof fetch;
  signal?: AbortSignal;
}

/** Common envelope fields returned by every Marketing API response. */
export interface SnapchatEnvelope {
  request_status: string;
  request_id?: string;
  paging?: { next_link?: string } | null;
}

/** File payload accepted by upload endpoints (video/image upload). */
export type FileInput = Blob | Uint8Array;

/**
 * Core HTTP client for the Snapchat Marketing API.
 *
 * Handles `Authorization: Bearer` auth, JSON bodies, multipart uploads,
 * pagination-aware requests, rate limiting, retry, and error parsing.
 */
export class SnapchatApiClient {
  readonly accessToken: string;
  private readonly baseUrl: string;
  private readonly debug: boolean;
  private readonly rateLimiter?: RateLimiter;
  private readonly delay: DelayFn;
  private readonly retryConfig: RetryConfig;
  private readonly fetchImpl: typeof fetch;
  private readonly signal?: AbortSignal;

  constructor(opts: SnapchatApiClientOptions) {
    this.accessToken = opts.accessToken;
    this.baseUrl = opts.baseUrl ?? "https://adsapi.snapchat.com/v1";
    this.debug = opts.debug ?? false;
    this.rateLimiter = opts.rateLimiter;
    this.delay = opts.delay ?? ((ms) => new Promise((resolve) => setTimeout(resolve, ms)));
    this.retryConfig = opts.retry
      ? { ...DEFAULT_RETRY, ...opts.retry }
      : { ...DEFAULT_RETRY, maxRetries: 0 };
    this.fetchImpl = opts.fetch ?? fetch;
    this.signal = opts.signal;
  }

  /** GET a JSON envelope. Accepts a path (relative to baseUrl) or a full URL (e.g. a `paging.next_link`). */
  get<T extends SnapchatEnvelope>(path: string, query?: object): Promise<T> {
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

  post<T extends SnapchatEnvelope>(path: string, body?: object): Promise<T> {
    return this.request<T>("POST", this.resolveUrl(path), body);
  }

  delete<T extends SnapchatEnvelope>(path: string): Promise<T> {
    return this.request<T>("DELETE", this.resolveUrl(path));
  }

  /** POST a file to an upload endpoint as `multipart/form-data`. */
  async upload<T extends { request_status: string }>(
    path: string,
    file: Blob | Uint8Array,
    opts?: { filename?: string; contentType?: string },
  ): Promise<T> {
    const formData = new FormData();
    formData.append(
      "file",
      file instanceof Uint8Array ? new Blob([new Uint8Array(file)]) : file,
      opts?.filename ?? "file",
    );
    return this.request<T>("POST", this.resolveUrl(path), undefined, formData);
  }

  private resolveUrl(path: string): string {
    if (/^https?:\/\//.test(path)) return path;
    return `${this.baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
  }

  private async request<T>(
    method: string,
    url: string,
    body?: object,
    formData?: FormData,
  ): Promise<T> {
    if (this.rateLimiter) {
      const check = this.rateLimiter.check();
      if (check.shouldWait) {
        if (this.debug) console.log(`[Snapchat SDK] Rate limited, waiting ${check.waitMs}ms`);
        await this.delay(check.waitMs);
      }
    }

    if (this.debug) console.log(`[Snapchat SDK] ${method} ${url}`);

    const headers: Record<string, string> = { Authorization: `Bearer ${this.accessToken}` };
    let requestBody: string | FormData | undefined;

    if (formData) {
      requestBody = formData;
    } else if (body && method !== "GET") {
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

        if (this.debug) console.log(`[Snapchat SDK] ${response.status}`, responseBody);

        if (!response.ok) {
          throw SnapchatApiError.fromResponse(
            response.status,
            responseBody,
            requestIdFrom(responseBody),
          );
        }

        const status = requestStatus(responseBody);
        if (status && status.toUpperCase() !== "SUCCESS") {
          // Business-level error: request_status is ERROR even with HTTP 200.
          throw SnapchatApiError.fromResponse(
            response.status,
            responseBody,
            requestIdFrom(responseBody),
          );
        }

        return responseBody as T;
      } catch (err) {
        const retryable =
          err instanceof SnapchatApiError &&
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
              `[Snapchat SDK] Retrying (${attempt + 1}/${this.retryConfig.maxRetries}) after ${backoff}ms`,
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

function requestStatus(body: unknown): string | undefined {
  if (typeof body === "object" && body !== null) {
    const value = (body as Record<string, unknown>).request_status;
    return typeof value === "string" ? value : undefined;
  }
  return undefined;
}

function requestIdFrom(body: unknown): string | undefined {
  if (typeof body === "object" && body !== null) {
    const value = (body as Record<string, unknown>).request_id;
    return typeof value === "string" ? value : undefined;
  }
  return undefined;
}
