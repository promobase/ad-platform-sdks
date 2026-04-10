import {
  tiktokWebhookEventSchema,
  videoWebhookEventSchema,
  commentWebhookEventSchema,
  mentionWebhookEventSchema,
  dmWebhookEventSchema,
  type TikTokWebhookEvent,
  type VideoWebhookEvent,
  type CommentWebhookEvent,
  type MentionWebhookEvent,
  type DMWebhookEvent,
} from "./webhook-schemas.ts";

// --- Re-export schemas and types ---

export {
  tiktokWebhookEventSchema,
  videoWebhookEventSchema,
  commentWebhookEventSchema,
  mentionWebhookEventSchema,
  dmWebhookEventSchema,
  publishEventTypes,
  commentEventTypes,
  mentionEventTypes,
  dmEventTypes,
  publishFailedContentSchema,
  publishCompleteContentSchema,
  publishPubliclyAvailableContentSchema,
  publishNoLongerAvailableContentSchema,
  commentContentSchema,
  mentionContentSchema,
  dmContentSchema,
} from "./webhook-schemas.ts";

export type {
  TikTokWebhookEvent,
  VideoWebhookEvent,
  CommentWebhookEvent,
  MentionWebhookEvent,
  DMWebhookEvent,
  PublishFailedContent,
  PublishCompleteContent,
  PublishPubliclyAvailableContent,
  PublishNoLongerAvailableContent,
  CommentContent,
  MentionContent,
  DMContent,
} from "./webhook-schemas.ts";

// --- Webhook Signature Verification ---

/**
 * Verify the HMAC-SHA256 signature on a TikTok webhook payload.
 * TikTok sends the signature in a custom header (typically X-Tiktok-Signature).
 * Uses Web Crypto API (works in Bun, Deno, Node 19+, browsers).
 */
export async function verifyWebhookSignature(
  body: string | ArrayBuffer,
  signature: string,
  appSecret: string,
): Promise<boolean> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(appSecret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const bodyBytes = typeof body === "string" ? encoder.encode(body) : body;
  const signed = await crypto.subtle.sign("HMAC", key, bodyBytes);
  const hex = Array.from(new Uint8Array(signed))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hex === signature;
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

// --- Parse Options ---

export interface WebhookParseOptions {
  body: string;
  signature: string;
  appSecret: string;
}

export type WebhookParseResult<T> =
  | { success: true; data: T }
  | { success: false; error: WebhookParseError };

// --- Internal verify + parse helper ---

async function verifyAndParse<T>(
  opts: WebhookParseOptions,
  schema: { parse: (data: unknown) => T; safeParse: (data: unknown) => { success: boolean; data?: T; error?: unknown } },
  safe: false,
): Promise<T>;
async function verifyAndParse<T>(
  opts: WebhookParseOptions,
  schema: { parse: (data: unknown) => T; safeParse: (data: unknown) => { success: boolean; data?: T; error?: unknown } },
  safe: true,
): Promise<WebhookParseResult<T>>;
async function verifyAndParse<T>(
  opts: WebhookParseOptions,
  schema: { parse: (data: unknown) => T; safeParse: (data: unknown) => { success: boolean; data?: T; error?: unknown } },
  safe: boolean,
): Promise<T | WebhookParseResult<T>> {
  const validSig = await verifyWebhookSignature(opts.body, opts.signature, opts.appSecret);

  if (!validSig) {
    const err = new WebhookParseError("INVALID_SIGNATURE", "Invalid TikTok webhook signature");
    if (safe) return { success: false, error: err };
    throw err;
  }

  let json: unknown;
  try {
    json = JSON.parse(opts.body);
  } catch (e) {
    const err = new WebhookParseError("INVALID_JSON", "Failed to parse webhook body as JSON", e);
    if (safe) return { success: false, error: err };
    throw err;
  }

  if (safe) {
    const result = schema.safeParse(json);
    if (result.success) {
      return { success: true, data: result.data as T };
    }
    return { success: false, error: new WebhookParseError("INVALID_PAYLOAD", "Webhook payload validation failed", result.error) };
  }

  return schema.parse(json);
}

// --- Throwing Parsers ---

/** Verify signature and parse any TikTok webhook event. Throws on failure. */
export async function parseTikTokWebhook(opts: WebhookParseOptions): Promise<TikTokWebhookEvent> {
  return verifyAndParse(opts, tiktokWebhookEventSchema, false);
}

/** Verify and parse a VIDEO webhook event. Throws on failure. */
export async function parseVideoWebhook(opts: WebhookParseOptions): Promise<VideoWebhookEvent> {
  return verifyAndParse(opts, videoWebhookEventSchema, false);
}

/** Verify and parse a COMMENT webhook event. Throws on failure. */
export async function parseCommentWebhook(opts: WebhookParseOptions): Promise<CommentWebhookEvent> {
  return verifyAndParse(opts, commentWebhookEventSchema, false);
}

/** Verify and parse a BRAND_MENTION webhook event. Throws on failure. */
export async function parseMentionWebhook(opts: WebhookParseOptions): Promise<MentionWebhookEvent> {
  return verifyAndParse(opts, mentionWebhookEventSchema, false);
}

/** Verify and parse a DIRECT_MESSAGE webhook event. Throws on failure. */
export async function parseDMWebhook(opts: WebhookParseOptions): Promise<DMWebhookEvent> {
  return verifyAndParse(opts, dmWebhookEventSchema, false);
}

// --- Safe Parsers (never throw) ---

/** Verify and parse any TikTok webhook. Returns Result — never throws. */
export async function safeParseTikTokWebhook(opts: WebhookParseOptions): Promise<WebhookParseResult<TikTokWebhookEvent>> {
  return verifyAndParse(opts, tiktokWebhookEventSchema, true);
}

/** Verify and parse a VIDEO webhook. Returns Result — never throws. */
export async function safeParseVideoWebhook(opts: WebhookParseOptions): Promise<WebhookParseResult<VideoWebhookEvent>> {
  return verifyAndParse(opts, videoWebhookEventSchema, true);
}

/** Verify and parse a COMMENT webhook. Returns Result — never throws. */
export async function safeParseCommentWebhook(opts: WebhookParseOptions): Promise<WebhookParseResult<CommentWebhookEvent>> {
  return verifyAndParse(opts, commentWebhookEventSchema, true);
}

/** Verify and parse a BRAND_MENTION webhook. Returns Result — never throws. */
export async function safeParseMentionWebhook(opts: WebhookParseOptions): Promise<WebhookParseResult<MentionWebhookEvent>> {
  return verifyAndParse(opts, mentionWebhookEventSchema, true);
}

/** Verify and parse a DIRECT_MESSAGE webhook. Returns Result — never throws. */
export async function safeParseDMWebhook(opts: WebhookParseOptions): Promise<WebhookParseResult<DMWebhookEvent>> {
  return verifyAndParse(opts, dmWebhookEventSchema, true);
}
