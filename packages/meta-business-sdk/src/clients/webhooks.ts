/**
 * Verify a Meta webhook challenge request.
 * Used in GET handler to respond to Meta's subscription verification.
 */
export function verifyWebhookChallenge(params: {
  "hub.mode"?: string;
  "hub.challenge"?: string;
  "hub.verify_token"?: string;
}, expectedVerifyToken: string): { valid: boolean; challenge?: string } {
  if (
    params["hub.mode"] === "subscribe" &&
    params["hub.verify_token"] === expectedVerifyToken &&
    params["hub.challenge"]
  ) {
    return { valid: true, challenge: params["hub.challenge"] };
  }
  return { valid: false };
}

/**
 * Verify the HMAC-SHA256 signature on a webhook payload.
 * The signature is in the X-Hub-Signature-256 header as "sha256={hex}".
 */
export async function verifyWebhookSignature(
  body: string | ArrayBuffer,
  signature: string,
  appSecret: string,
): Promise<boolean> {
  const expectedSig = signature.replace("sha256=", "");
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
  return hex === expectedSig;
}

// --- Platform-specific webhook parsers (now using Zod) ---

import {
  igWebhookPayloadSchema,
  fbWebhookPayloadSchema,
  threadsWebhookPayloadSchema,
  type IGWebhookPayload,
  type FBWebhookPayload,
  type ThreadsWebhookPayload,
} from "./webhooks-schemas.ts";

export type {
  IGWebhookPayload,
  IGWebhookMessagingEvent,
  IGWebhookChange,
  FBWebhookPayload,
  FBWebhookMessagingEvent,
  FBWebhookChange,
  ThreadsWebhookPayload,
} from "./webhooks-schemas.ts";

export interface WebhookParseOptions {
  body: string;
  signature: string;
  appSecret: string;
}

export type WebhookParseResult<T> =
  | { success: true; data: T }
  | { success: false; error: WebhookParseError };

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

// --- Internal helpers ---

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
    const err = new WebhookParseError("INVALID_SIGNATURE", "Invalid webhook signature");
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

// --- Throwing parsers (parse) ---

/**
 * Verify signature and parse an Instagram webhook payload.
 * Throws WebhookParseError on invalid signature, JSON, or payload shape.
 */
export async function parseInstagramWebhook(opts: WebhookParseOptions): Promise<IGWebhookPayload> {
  return verifyAndParse(opts, igWebhookPayloadSchema, false);
}

/**
 * Verify signature and parse a Facebook Page webhook payload.
 * Throws WebhookParseError on invalid signature, JSON, or payload shape.
 */
export async function parseFacebookWebhook(opts: WebhookParseOptions): Promise<FBWebhookPayload> {
  return verifyAndParse(opts, fbWebhookPayloadSchema, false);
}

/**
 * Verify signature and parse a Threads webhook payload.
 * Throws WebhookParseError on invalid signature, JSON, or payload shape.
 */
export async function parseThreadsWebhook(opts: WebhookParseOptions): Promise<ThreadsWebhookPayload> {
  return verifyAndParse(opts, threadsWebhookPayloadSchema, false);
}

// --- Safe parsers (safeParse) ---

/**
 * Verify signature and parse an Instagram webhook payload.
 * Returns { success, data } or { success, error } — never throws.
 */
export async function safeParseInstagramWebhook(opts: WebhookParseOptions): Promise<WebhookParseResult<IGWebhookPayload>> {
  return verifyAndParse(opts, igWebhookPayloadSchema, true);
}

/**
 * Verify signature and parse a Facebook Page webhook payload.
 * Returns { success, data } or { success, error } — never throws.
 */
export async function safeParseFacebookWebhook(opts: WebhookParseOptions): Promise<WebhookParseResult<FBWebhookPayload>> {
  return verifyAndParse(opts, fbWebhookPayloadSchema, true);
}

/**
 * Verify signature and parse a Threads webhook payload.
 * Returns { success, data } or { success, error } — never throws.
 */
export async function safeParseThreadsWebhook(opts: WebhookParseOptions): Promise<WebhookParseResult<ThreadsWebhookPayload>> {
  return verifyAndParse(opts, threadsWebhookPayloadSchema, true);
}
