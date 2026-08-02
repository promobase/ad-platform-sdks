import { GoogleBusinessProfileApiError } from "./errors.ts";
import type { GoogleBusinessProfileClientOptions } from "./types.ts";

export interface GoogleBusinessProfileRequest {
  method?: "GET" | "POST" | "PATCH" | "DELETE";
  baseUrl: string;
  path: string;
  query?: Record<string, string | number | boolean | readonly string[] | undefined>;
  body?: unknown;
  signal?: AbortSignal;
}

export class GoogleBusinessProfileClient {
  readonly accessToken: string;
  readonly fetchImpl: typeof fetch;
  readonly signal?: AbortSignal;
  readonly debug: boolean;
  readonly bases: {
    accountManagement: string;
    businessInformation: string;
    localPosts: string;
    performance: string;
  };

  constructor(opts: GoogleBusinessProfileClientOptions) {
    this.accessToken = opts.accessToken;
    this.fetchImpl = opts.fetch ?? fetch;
    this.signal = opts.signal;
    this.debug = opts.debug ?? false;
    this.bases = {
      accountManagement: stripSlash(
        opts.accountManagementBaseUrl ?? "https://mybusinessaccountmanagement.googleapis.com",
      ),
      businessInformation: stripSlash(
        opts.businessInformationBaseUrl ?? "https://mybusinessbusinessinformation.googleapis.com",
      ),
      localPosts: stripSlash(opts.localPostsBaseUrl ?? "https://mybusiness.googleapis.com"),
      performance: stripSlash(
        opts.performanceBaseUrl ?? "https://businessprofileperformance.googleapis.com",
      ),
    };
  }

  async request<T>(request: GoogleBusinessProfileRequest): Promise<T> {
    const url = new URL(request.path.replace(/^\//, ""), `${request.baseUrl}/`);
    for (const [key, value] of Object.entries(request.query ?? {})) {
      if (value === undefined) continue;
      if (Array.isArray(value)) {
        for (const item of value) url.searchParams.append(key, item);
      } else {
        url.searchParams.set(key, String(value));
      }
    }

    const method = request.method ?? "GET";
    if (this.debug) console.log(`[GoogleBusinessProfileSDK] ${method} ${url}`);
    const response = await this.fetchImpl(url, {
      method,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        Accept: "application/json",
        ...(request.body === undefined ? {} : { "Content-Type": "application/json" }),
      },
      body: request.body === undefined ? undefined : JSON.stringify(request.body),
      signal: request.signal ?? this.signal,
    });
    const text = await response.text();
    const data = parseBody(text);
    if (!response.ok) {
      throw new GoogleBusinessProfileApiError(
        errorMessage(data, response.statusText),
        response.status,
        data,
      );
    }
    return data as T;
  }
}

function stripSlash(value: string): string {
  return value.replace(/\/$/, "");
}

function parseBody(text: string): unknown {
  if (!text) return undefined;
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

function errorMessage(body: unknown, fallback: string): string {
  if (typeof body === "object" && body !== null) {
    const error = (body as { error?: { message?: unknown } }).error;
    if (typeof error?.message === "string") return error.message;
  }
  return fallback || "Google Business Profile API request failed";
}
