import type { DelayFn, RateLimiter, RetryConfig } from "@openpromo/sdk-runtime";

import { BlueskyApiError } from "./errors.ts";

const DEFAULT_RETRY: RetryConfig = {
  maxRetries: 3,
  initialBackoffMs: 1000,
  retryableStatuses: [429, 500, 502, 503, 504],
  retryOnNetworkError: true,
};

export interface BlueskyApiClientOptions {
  /** Handle (e.g. `user.bsky.social`) and app password, OR a session access token. */
  handle?: string;
  /** App password from Settings → App passwords (preferred for bots/agents). */
  appPassword?: string;
  /** Session access token (from `server.createSession`); alternative to handle+appPassword. */
  accessToken?: string;
  /** PDS base URL. Defaults to the main Bluesky PDS. */
  service?: string;
  debug?: boolean;
  rateLimiter?: RateLimiter;
  delay?: DelayFn;
  retry?: Partial<RetryConfig>;
  fetch?: typeof fetch;
  signal?: AbortSignal;
}

/**
 * Core HTTP client for AT Protocol (Bluesky).
 *
 * Auth: app passwords are sent as `Authorization: Bearer base64(handle:appPassword)`
 * — the standard, simplest auth for bots and agents. Session access tokens are
 * supported too (passed through as the bearer token).
 */
export class BlueskyApiClient {
  readonly service: string;
  private readonly debug: boolean;
  private readonly rateLimiter?: RateLimiter;
  private readonly delay: DelayFn;
  private readonly retryConfig: RetryConfig;
  private readonly fetchImpl: typeof fetch;
  private readonly signal?: AbortSignal;
  private readonly authHeader: string | null;

  constructor(opts: BlueskyApiClientOptions) {
    if (!opts.accessToken && !(opts.handle && opts.appPassword)) {
      throw new Error(
        "BlueskyApiClient requires either handle+appPassword or an accessToken from server.createSession",
      );
    }
    this.service = (opts.service ?? "https://bsky.social").replace(/\/$/, "");
    this.debug = opts.debug ?? false;
    this.rateLimiter = opts.rateLimiter;
    this.delay = opts.delay ?? ((ms) => new Promise((resolve) => setTimeout(resolve, ms)));
    this.retryConfig = opts.retry
      ? { ...DEFAULT_RETRY, ...opts.retry }
      : { ...DEFAULT_RETRY, maxRetries: 0 };
    this.fetchImpl = opts.fetch ?? fetch;
    this.signal = opts.signal;
    this.authHeader = opts.accessToken
      ? `Bearer ${opts.accessToken}`
      : `Bearer ${btoa(`${opts.handle!}:${opts.appPassword!}`)}`;
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

  post<T>(path: string, body?: object, query?: object): Promise<T> {
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
    return this.request<T>("POST", url, body);
  }

  /** Upload binary content (e.g. an image) — used by `com.atproto.repo.uploadBlob`. */
  uploadBlob<T>(bytes: Blob | Uint8Array, contentType: string): Promise<T> {
    const blob = bytes instanceof Uint8Array ? new Blob([new Uint8Array(bytes)]) : bytes;
    return this.request<T>(
      "POST",
      this.resolveUrl("/xrpc/com.atproto.repo.uploadBlob"),
      blob,
      contentType,
    );
  }

  private resolveUrl(path: string): string {
    if (/^https?:\/\//.test(path)) return path;
    return `${this.service}${path.startsWith("/") ? path : `/${path}`}`;
  }

  private async request<T>(
    method: string,
    url: string,
    body?: object | Blob,
    contentType?: string,
  ): Promise<T> {
    if (this.rateLimiter) {
      const check = this.rateLimiter.check();
      if (check.shouldWait) {
        if (this.debug) console.log(`[Bluesky SDK] Rate limited, waiting ${check.waitMs}ms`);
        await this.delay(check.waitMs);
      }
    }

    if (this.debug) console.log(`[Bluesky SDK] ${method} ${url}`);

    const headers: Record<string, string> = { Authorization: this.authHeader ?? "" };
    let requestBody: string | Blob | undefined;
    if (body instanceof Blob) {
      headers["Content-Type"] = contentType ?? "application/octet-stream";
      requestBody = body;
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

        if (this.debug) console.log(`[Bluesky SDK] ${response.status}`, responseBody);

        if (!response.ok) {
          throw BlueskyApiError.fromResponse(response.status, responseBody);
        }

        return responseBody as T;
      } catch (err) {
        const retryable =
          err instanceof BlueskyApiError &&
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
              `[Bluesky SDK] Retrying (${attempt + 1}/${this.retryConfig.maxRetries}) after ${backoff}ms`,
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
