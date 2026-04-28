import { YouTubeApiError } from "./errors.ts";
import { createYouTubeResources } from "./generated/resources.ts";
import { createUploads } from "./uploads.ts";

export interface YouTubeClientOptions {
  accessToken?: string;
  apiKey?: string;
  baseUrl?: string;
  uploadBaseUrl?: string;
  fetch?: typeof fetch;
  debug?: boolean;
}

export interface YouTubeRequestOptions {
  headers?: Record<string, string>;
  signal?: AbortSignal;
}

export interface YouTubeRequestConfig {
  method: string;
  path: string;
  params?: object;
  body?: unknown;
  opts?: YouTubeRequestOptions;
}

export class YouTubeClient {
  readonly accessToken?: string;
  readonly apiKey?: string;
  readonly baseUrl: string;
  readonly uploadBaseUrl: string;
  readonly fetchImpl: typeof fetch;
  readonly debug: boolean;

  readonly uploads = createUploads(this);
  readonly resources = createYouTubeResources(this);

  constructor(opts: YouTubeClientOptions) {
    if (!opts.accessToken && !opts.apiKey) {
      throw new Error("YouTubeClient requires accessToken or apiKey");
    }

    this.accessToken = opts.accessToken;
    this.apiKey = opts.apiKey;
    this.baseUrl = (opts.baseUrl ?? "https://youtube.googleapis.com/").replace(/\/$/, "");
    this.uploadBaseUrl = (opts.uploadBaseUrl ?? "https://www.googleapis.com").replace(/\/$/, "");
    this.fetchImpl = opts.fetch ?? fetch;
    this.debug = opts.debug ?? false;
  }

  async request<T>(config: YouTubeRequestConfig): Promise<T> {
    const url = this.buildUrl(this.baseUrl, config.path, config.params);
    const headers: Record<string, string> = {
      Accept: "application/json",
      ...authHeaders(this.accessToken),
      ...config.opts?.headers,
    };

    if (config.body !== undefined) {
      headers["Content-Type"] ??= "application/json; charset=UTF-8";
    }

    if (this.debug) {
      console.log(`[YouTubeSDK] ${config.method} ${url}`);
    }

    const response = await this.fetchImpl(url, {
      method: config.method,
      headers,
      signal: config.opts?.signal,
      body: config.body === undefined ? undefined : JSON.stringify(config.body),
    });

    return parseYouTubeResponse<T>(response);
  }

  buildUrl(baseUrl: string, path: string, params?: object): string {
    const url = new URL(path.replace(/^\//, ""), `${baseUrl}/`);
    if (this.apiKey) {
      url.searchParams.set("key", this.apiKey);
    }
    for (const [key, value] of Object.entries(params ?? {}) as [string, unknown][]) {
      if (value === undefined || value === null) continue;
      if (Array.isArray(value)) {
        if (value.length > 0) url.searchParams.set(key, value.join(","));
      } else {
        url.searchParams.set(key, String(value));
      }
    }
    return url.toString();
  }
}

export function createYouTubeClient(opts: YouTubeClientOptions) {
  return new YouTubeClient(opts);
}

export function authHeaders(accessToken?: string): Record<string, string> {
  return accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
}

export async function parseYouTubeResponse<T>(response: Response): Promise<T> {
  const text = await response.text();
  const data = parseResponseBody(text);

  if (!response.ok) {
    throw new YouTubeApiError(
      resolveErrorMessage(data, response.statusText),
      response.status,
      data,
    );
  }

  return (data ?? undefined) as T;
}

function parseResponseBody(text: string): unknown {
  if (!text) return undefined;
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

function resolveErrorMessage(body: unknown, fallback: string): string {
  if (typeof body === "object" && body !== null) {
    const error = (body as { error?: { message?: unknown } }).error;
    if (typeof error?.message === "string") return error.message;
    const message = (body as { message?: unknown }).message;
    if (typeof message === "string") return message;
  }
  return fallback || "YouTube API request failed";
}
