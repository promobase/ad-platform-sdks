import { decodeHexSignature, verifyHmacSha256 } from "@openpromo/sdk-runtime/webhooks";
import * as v from "valibot";

import {
  type CommentWebhookEvent,
  commentWebhookEventSchema,
  type DMWebhookEvent,
  dmWebhookEventSchema,
  type MentionWebhookEvent,
  mentionWebhookEventSchema,
  type TikTokWebhookEvent,
  tiktokWebhookEventSchema,
  type VideoWebhookEvent,
  videoWebhookEventSchema,
} from "./webhook-schemas.ts";

// Re-export everything from schemas
export * from "./webhook-schemas.ts";
import type * as WebhookSchemas from "./webhook-schemas.ts";

// --- Webhook Signature Verification ---

export interface WebhookSignatureOptions {
  /** Maximum accepted absolute age of the signed delivery, in seconds. */
  maxAgeSeconds?: number;
  /** Injectable current Unix timestamp for deterministic tests. */
  now?: number;
}

interface ParsedSignature {
  timestamp: number;
  signature: Uint8Array<ArrayBuffer>;
}

function parseSignatureHeader(value: string): ParsedSignature | undefined {
  const fields = new Map<string, string>();
  for (const part of value.split(",")) {
    const separator = part.indexOf("=");
    if (separator < 1) return undefined;

    const key = part.slice(0, separator).trim();
    const fieldValue = part.slice(separator + 1).trim();
    if (!key || !fieldValue || fields.has(key)) return undefined;
    fields.set(key, fieldValue);
  }

  const timestampValue = fields.get("t");
  const signatureValue = fields.get("s");
  if (!timestampValue || !signatureValue || !/^\d+$/.test(timestampValue)) return undefined;
  const timestamp = Number(timestampValue);
  if (!Number.isSafeInteger(timestamp)) return undefined;

  const signature = decodeHexSignature(signatureValue, 32);
  if (!signature) return undefined;

  return { timestamp, signature };
}

/**
 * Verify TikTok's `TikTok-Signature` header for a raw webhook body.
 *
 * TikTok signs `${timestamp}.${rawBody}` with HMAC-SHA256. The signature
 * header has the form `t=<unix-seconds>,s=<hex-signature>`.
 */
export async function verifyWebhookSignature(
  body: string | ArrayBuffer,
  signature: string,
  appSecret: string,
  options: WebhookSignatureOptions = {},
): Promise<boolean> {
  const parsed = parseSignatureHeader(signature);
  if (!parsed) return false;

  const maxAgeSeconds = options.maxAgeSeconds ?? 300;
  if (!Number.isFinite(maxAgeSeconds) || maxAgeSeconds < 0) return false;

  const now = options.now ?? Math.floor(Date.now() / 1000);
  if (!Number.isFinite(now) || Math.abs(now - parsed.timestamp) > maxAgeSeconds) return false;

  const bodyBytes =
    typeof body === "string" ? new TextEncoder().encode(body) : new Uint8Array(body);
  const prefixBytes = new TextEncoder().encode(`${parsed.timestamp}.`);
  const signingInput = new Uint8Array(prefixBytes.length + bodyBytes.length);
  signingInput.set(prefixBytes);
  signingInput.set(bodyBytes, prefixBytes.length);
  return verifyHmacSha256(signingInput, parsed.signature, appSecret);
}

// --- Parse Error ---

export class WebhookParseError extends Error {
  readonly code: "INVALID_SIGNATURE" | "INVALID_PAYLOAD" | "INVALID_JSON";
  readonly details?: unknown;

  constructor(code: WebhookParseError["code"], message: string, details?: unknown) {
    super(message);
    this.name = "WebhookParseError";
    this.code = code;
    this.details = details;
  }
}

// --- Types ---

export interface WebhookParseOptions {
  /** The exact raw request body used to calculate TikTok's signature. */
  body: string;
  /** The value of the TikTok-Signature request header. */
  signature: string;
  appSecret: string;
  signatureOptions?: WebhookSignatureOptions;
}

export type WebhookParseResult<T> =
  | { success: true; data: T }
  | { success: false; error: WebhookParseError };

type WebhookSchema = v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>;

// --- Core verify + parse ---

async function verifyAndParse<TSchema extends WebhookSchema>(
  opts: WebhookParseOptions,
  schema: TSchema,
): Promise<WebhookParseResult<v.InferOutput<TSchema>>> {
  const validSig = await verifyWebhookSignature(
    opts.body,
    opts.signature,
    opts.appSecret,
    opts.signatureOptions,
  );
  if (!validSig) {
    return {
      success: false,
      error: new WebhookParseError("INVALID_SIGNATURE", "Invalid TikTok webhook signature"),
    };
  }

  let json: unknown;
  try {
    json = JSON.parse(opts.body);
  } catch (error) {
    return {
      success: false,
      error: new WebhookParseError("INVALID_JSON", "Failed to parse webhook body as JSON", error),
    };
  }

  const result = v.safeParse(schema, json);
  if (result.success) {
    return { success: true, data: result.output };
  }
  return {
    success: false,
    error: new WebhookParseError(
      "INVALID_PAYLOAD",
      "Webhook payload validation failed",
      result.issues,
    ),
  };
}

// --- Primary API: safeParse (recommended) ---

/**
 * Verify signature, parse event, and auto-parse the content JSON — all in one call.
 * Returns a discriminated union. Switch on `data.event` to narrow the content type.
 */
export async function safeParseTikTokWebhook(
  opts: WebhookParseOptions,
): Promise<WebhookParseResult<TikTokWebhookEvent>> {
  return verifyAndParse(opts, tiktokWebhookEventSchema);
}

/** Safe-parse, narrowed to VIDEO (publish lifecycle) events only. */
export async function safeParseVideoWebhook(
  opts: WebhookParseOptions,
): Promise<WebhookParseResult<VideoWebhookEvent>> {
  return verifyAndParse(opts, videoWebhookEventSchema);
}

/** Valibot schema adapted to the shared parseable contract. */
const parseableTikTok = {
  parse: (input: unknown) => v.parse(tiktokWebhookEventSchema, input),
};

/**
 * Normalized Stripe-style event projection: `{ type, data, ...context }`.
 *
 * The wire schema keeps the provider's `event` field name; this projection
 * presents the same value as `type` with the auto-parsed `content` as
 * `data`, so every platform's construct-event surface shares one shape and
 * one pattern-matching discriminant. The trailing open member tolerates
 * unknown event kinds (delivered without typed data).
 */
type ConstructedFrom<E extends { event: string; content: unknown }> = {
  readonly type: E["event"];
  readonly data: E["content"];
  readonly client_key: string;
  readonly create_time: number;
  readonly user_openid: string;
};

export type TikTokConstructedEvent =
  | ConstructedFrom<WebhookSchemas.PublishFailedEvent>
  | ConstructedFrom<WebhookSchemas.PublishCompleteEvent>
  | ConstructedFrom<WebhookSchemas.PublishPubliclyAvailableEvent>
  | ConstructedFrom<WebhookSchemas.PublishNoLongerAvailableEvent>
  | ConstructedFrom<WebhookSchemas.CommentWebhookEvent>
  | ConstructedFrom<WebhookSchemas.MentionWebhookEvent>
  | ConstructedFrom<WebhookSchemas.DMWebhookEvent>
  | {
      readonly type: "unknown";
      readonly data?: unknown;
      readonly sourceType: string;
      readonly client_key?: string;
      readonly create_time?: number;
      readonly user_openid?: string;
    };

export function toConstructedEvent(event: TikTokWebhookEvent): TikTokConstructedEvent {
  const base = {
    client_key: event.client_key ?? "",
    create_time: event.create_time ?? 0,
    user_openid: event.user_openid ?? "",
  };
  if ("content" in event) {
    // The narrowed union's event/content index to the same member the object
    // literal matches; cast keeps the per-case discrimination at call sites.
    return { ...base, type: event.event, data: event.content } as TikTokConstructedEvent;
  }
  return { ...base, type: "unknown", data: undefined, sourceType: event.event };
}

/**
 * Stripe-style one-call convenience: verify signature + parse + normalize.
 * Throws `WebhookParseError` on invalid deliveries.
 */
export async function constructTikTokEvent(
  options: WebhookParseOptions,
): Promise<TikTokConstructedEvent> {
  return toConstructedEvent(await parseTikTokWebhook(options));
}

/** Safe-parse, narrowed to COMMENT update events only. */
export async function safeParseCommentWebhook(
  opts: WebhookParseOptions,
): Promise<WebhookParseResult<CommentWebhookEvent>> {
  return verifyAndParse(opts, commentWebhookEventSchema);
}

/** Safe-parse, narrowed to BRAND_MENTION events only. */
export async function safeParseMentionWebhook(
  opts: WebhookParseOptions,
): Promise<WebhookParseResult<MentionWebhookEvent>> {
  return verifyAndParse(opts, mentionWebhookEventSchema);
}

/** Safe-parse, narrowed to Business Messaging events only. */
export async function safeParseDMWebhook(
  opts: WebhookParseOptions,
): Promise<WebhookParseResult<DMWebhookEvent>> {
  return verifyAndParse(opts, dmWebhookEventSchema);
}

// --- Throwing API (for consumers who prefer try/catch) ---

function unwrap<T>(result: WebhookParseResult<T>): T {
  if (!result.success) throw result.error;
  return result.data;
}

/** Verify + parse any TikTok webhook. Throws WebhookParseError on failure. */
export async function parseTikTokWebhook(opts: WebhookParseOptions): Promise<TikTokWebhookEvent> {
  return unwrap(await safeParseTikTokWebhook(opts));
}

export async function parseVideoWebhook(opts: WebhookParseOptions): Promise<VideoWebhookEvent> {
  return unwrap(await safeParseVideoWebhook(opts));
}

export async function parseCommentWebhook(opts: WebhookParseOptions): Promise<CommentWebhookEvent> {
  return unwrap(await safeParseCommentWebhook(opts));
}

export async function parseMentionWebhook(opts: WebhookParseOptions): Promise<MentionWebhookEvent> {
  return unwrap(await safeParseMentionWebhook(opts));
}

export async function parseDMWebhook(opts: WebhookParseOptions): Promise<DMWebhookEvent> {
  return unwrap(await safeParseDMWebhook(opts));
}
