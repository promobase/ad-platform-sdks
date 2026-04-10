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

// Re-export everything from schemas
export * from "./webhook-schemas.ts";

// --- Webhook Signature Verification ---

/**
 * Verify the HMAC-SHA256 signature on a TikTok webhook payload.
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

// --- Types ---

export interface WebhookParseOptions {
  body: string;
  signature: string;
  appSecret: string;
}

export type WebhookParseResult<T> =
  | { success: true; data: T }
  | { success: false; error: WebhookParseError };

// --- Core verify + parse ---

async function verifyAndParse<T>(
  opts: WebhookParseOptions,
  schema: { safeParse: (data: unknown) => { success: boolean; data?: T; error?: unknown } },
): Promise<WebhookParseResult<T>> {
  const validSig = await verifyWebhookSignature(opts.body, opts.signature, opts.appSecret);
  if (!validSig) {
    return { success: false, error: new WebhookParseError("INVALID_SIGNATURE", "Invalid TikTok webhook signature") };
  }

  let json: unknown;
  try {
    json = JSON.parse(opts.body);
  } catch (e) {
    return { success: false, error: new WebhookParseError("INVALID_JSON", "Failed to parse webhook body as JSON", e) };
  }

  const result = schema.safeParse(json);
  if (result.success) {
    return { success: true, data: result.data as T };
  }
  return { success: false, error: new WebhookParseError("INVALID_PAYLOAD", "Webhook payload validation failed", result.error) };
}

// --- Primary API: safeParse (recommended) ---

/**
 * Verify signature, parse event, and auto-parse the content JSON — all in one call.
 * Returns a discriminated union. Switch on `data.event` to narrow the content type.
 *
 * ```ts
 * const result = await safeParseTikTokWebhook({ body, signature, appSecret });
 * if (!result.success) return;
 * switch (result.data.event) {
 *   case "post.publish.publicly_available":
 *     console.log(result.data.content.post_id);  // typed!
 *     break;
 * }
 * ```
 */
export async function safeParseTikTokWebhook(opts: WebhookParseOptions): Promise<WebhookParseResult<TikTokWebhookEvent>> {
  return verifyAndParse(opts, tiktokWebhookEventSchema);
}

/** Safe-parse, narrowed to VIDEO (publish lifecycle) events only. */
export async function safeParseVideoWebhook(opts: WebhookParseOptions): Promise<WebhookParseResult<VideoWebhookEvent>> {
  return verifyAndParse(opts, videoWebhookEventSchema);
}

/** Safe-parse, narrowed to COMMENT events only. */
export async function safeParseCommentWebhook(opts: WebhookParseOptions): Promise<WebhookParseResult<CommentWebhookEvent>> {
  return verifyAndParse(opts, commentWebhookEventSchema);
}

/** Safe-parse, narrowed to BRAND_MENTION events only. */
export async function safeParseMentionWebhook(opts: WebhookParseOptions): Promise<WebhookParseResult<MentionWebhookEvent>> {
  return verifyAndParse(opts, mentionWebhookEventSchema);
}

/** Safe-parse, narrowed to DIRECT_MESSAGE events only. */
export async function safeParseDMWebhook(opts: WebhookParseOptions): Promise<WebhookParseResult<DMWebhookEvent>> {
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
