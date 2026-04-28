import { LinkedInApiError } from "./errors.ts";

export interface LinkedInClientOptions {
  accessToken: string;
  apiVersion?: string;
  baseUrl?: string;
  fetch?: typeof fetch;
  debug?: boolean;
}

export interface LinkedInRequestOptions {
  method?: "GET" | "POST" | "DELETE" | "PUT";
  query?: Record<string, string | number | boolean | undefined>;
  body?: unknown;
  headers?: Record<string, string>;
}

export interface LinkedInResponse<T> {
  data: T;
  headers: Headers;
  status: number;
}

const DEFAULT_LINKEDIN_API_VERSION = "202604";

export class LinkedInClient {
  readonly accessToken: string;
  readonly apiVersion: string;
  private readonly baseUrl: string;
  private readonly fetchImpl: typeof fetch;
  private readonly debug: boolean;

  constructor(opts: LinkedInClientOptions) {
    this.accessToken = opts.accessToken;
    this.apiVersion = opts.apiVersion ?? DEFAULT_LINKEDIN_API_VERSION;
    this.baseUrl = (opts.baseUrl ?? "https://api.linkedin.com/rest").replace(/\/$/, "");
    this.fetchImpl = opts.fetch ?? fetch;
    this.debug = opts.debug ?? false;
  }

  async request<T>(path: string, opts: LinkedInRequestOptions = {}): Promise<LinkedInResponse<T>> {
    const method = opts.method ?? "GET";
    const url = this.buildUrl(path, opts.query);
    const headers: Record<string, string> = {
      Authorization: `Bearer ${this.accessToken}`,
      "LinkedIn-Version": this.apiVersion,
      "X-Restli-Protocol-Version": "2.0.0",
      ...opts.headers,
    };

    if (opts.body !== undefined) {
      headers["Content-Type"] ??= "application/json";
    }

    if (this.debug) {
      console.log(`[LinkedInSDK] ${method} ${url}`);
    }

    const response = await this.fetchImpl(url, {
      method,
      headers,
      body: opts.body === undefined ? undefined : JSON.stringify(opts.body),
    });

    const text = await response.text();
    const data = parseResponseBody(text);

    if (!response.ok) {
      const body = data ?? text;
      throw new LinkedInApiError(
        resolveErrorMessage(body, response.statusText),
        response.status,
        body,
        typeof body === "object" && body !== null
          ? (body as { serviceErrorCode?: number }).serviceErrorCode
          : undefined,
      );
    }

    const restliId = response.headers.get("x-restli-id") ?? response.headers.get("X-RestLi-Id");
    if (restliId && typeof data === "object" && data !== null) {
      const objectData = data as Record<string, unknown>;
      objectData.id ??= restliId;
      objectData["x-restli-id"] ??= restliId;
    }

    return {
      data: (data ?? {}) as T,
      headers: response.headers,
      status: response.status,
    };
  }

  fetchRaw(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
    return this.fetchImpl(input, init);
  }

  private buildUrl(path: string, query?: LinkedInRequestOptions["query"]): string {
    const normalizedPath = path.startsWith("/") ? path.slice(1) : path;
    const url = new URL(normalizedPath, `${this.baseUrl}/`);
    if (query) {
      for (const [key, value] of Object.entries(query)) {
        if (value !== undefined) {
          url.searchParams.set(key, String(value));
        }
      }
    }
    return url.toString();
  }
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
    const message = (body as { message?: unknown; error_description?: unknown }).message;
    if (typeof message === "string") return message;
    const description = (body as { error_description?: unknown }).error_description;
    if (typeof description === "string") return description;
  }
  return fallback || "LinkedIn API request failed";
}

export function createLinkedInClient(opts: LinkedInClientOptions) {
  return new LinkedInClient(opts);
}
