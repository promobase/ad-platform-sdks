import { LinkedInApiError } from "./errors.ts";

export interface LinkedInClientOptions {
  accessToken: string;
  apiVersion?: string;
  baseUrl?: string;
  fetch?: typeof fetch;
  debug?: boolean;
}

export interface LinkedInRequestOptions {
  method?: "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
  query?: Readonly<Record<string, RestliQueryValue | undefined>>;
  body?: unknown;
  rawBody?: BodyInit;
  headers?: Record<string, string>;
  restliMethod?: RestliMethod;
  queryTunneling?: boolean | "auto";
}

export type RestliPrimitive = string | number | boolean;
export type RestliQueryValue =
  | RestliPrimitive
  | readonly RestliQueryValue[]
  | { readonly [key: string]: RestliQueryValue | undefined };

export type RestliMethod =
  | "BATCH_CREATE"
  | "BATCH_DELETE"
  | "BATCH_GET"
  | "BATCH_PARTIAL_UPDATE"
  | "BATCH_UPDATE"
  | "CREATE"
  | "DELETE"
  | "FINDER"
  | "GET"
  | "PARTIAL_UPDATE"
  | "UPDATE";

export interface LinkedInResponse<T> {
  data: T;
  headers: Headers;
  status: number;
}

const DEFAULT_LINKEDIN_API_VERSION = "202607";

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
    const requestedMethod = opts.method ?? "GET";
    const url = this.buildUrl(path, opts.query);
    const headers: Record<string, string> = {
      Authorization: `Bearer ${this.accessToken}`,
      "LinkedIn-Version": this.apiVersion,
      "X-Restli-Protocol-Version": "2.0.0",
      ...opts.headers,
    };

    if (opts.restliMethod) headers["X-RestLi-Method"] = opts.restliMethod;

    const shouldTunnel =
      opts.queryTunneling === true ||
      (opts.queryTunneling === "auto" &&
        (url.length > 4_096 || Object.values(opts.query ?? {}).some(isStructuredQueryValue)));
    if (opts.body !== undefined && opts.rawBody !== undefined) {
      throw new Error("LinkedIn requests cannot set both body and rawBody");
    }
    if (shouldTunnel && opts.rawBody !== undefined) {
      throw new Error("LinkedIn query tunneling does not support rawBody");
    }
    const request = shouldTunnel
      ? buildTunneledRequest(url, requestedMethod, opts.body, headers)
      : {
          url,
          method: requestedMethod,
          body: opts.rawBody ?? (opts.body === undefined ? undefined : JSON.stringify(opts.body)),
        };

    if (opts.body !== undefined && !shouldTunnel) {
      headers["Content-Type"] ??= "application/json";
    }

    if (this.debug) {
      console.log(`[LinkedInSDK] ${request.method} ${request.url}`);
    }

    const response = await this.fetchImpl(request.url, {
      method: request.method,
      headers,
      body: request.body,
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

  fetchRaw(input: Parameters<typeof fetch>[0], init?: RequestInit): Promise<Response> {
    return this.fetchImpl(input, init);
  }

  private buildUrl(path: string, query?: LinkedInRequestOptions["query"]): string {
    const normalizedPath = path.startsWith("/") ? path.slice(1) : path;
    const url = new URL(normalizedPath, `${this.baseUrl}/`);
    if (query) {
      for (const [key, value] of Object.entries(query)) {
        if (value !== undefined) {
          url.searchParams.set(key, serializeRestliValue(value));
        }
      }
    }
    return url.toString();
  }
}

function isStructuredQueryValue(value: RestliQueryValue | undefined): boolean {
  return typeof value === "object" && value !== null;
}

export function serializeRestliValue(value: RestliQueryValue): string {
  if (Array.isArray(value)) return `List(${value.map(serializeRestliValue).join(",")})`;
  if (typeof value === "object" && value !== null) {
    const fields = Object.entries(value)
      .filter((entry): entry is [string, RestliQueryValue] => entry[1] !== undefined)
      .sort(([left], [right]) => left.localeCompare(right))
      .map(([key, item]) => `${key}:${serializeRestliValue(item)}`);
    return `(${fields.join(",")})`;
  }
  return String(value);
}

function buildTunneledRequest(
  url: string,
  method: NonNullable<LinkedInRequestOptions["method"]>,
  body: unknown,
  headers: Record<string, string>,
): { url: string; method: "POST"; body: string } {
  const parsed = new URL(url);
  const boundary = `linkedin-sdk-${crypto.randomUUID()}`;
  const parts = [
    `--${boundary}\r\nContent-Type: application/x-www-form-urlencoded\r\n\r\n${parsed.searchParams.toString()}\r\n`,
  ];
  if (body !== undefined) {
    parts.push(
      `--${boundary}\r\nContent-Type: application/json\r\n\r\n${JSON.stringify(body)}\r\n`,
    );
  }
  parts.push(`--${boundary}--\r\n`);
  headers["Content-Type"] = `multipart/mixed; boundary=${boundary}`;
  headers["X-HTTP-Method-Override"] = method;
  parsed.search = "";
  return { url: parsed.toString(), method: "POST", body: parts.join("") };
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
