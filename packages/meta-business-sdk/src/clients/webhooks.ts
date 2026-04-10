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

/**
 * Verify signature and parse an Instagram webhook payload with Zod validation.
 * Throws if signature is invalid or payload doesn't match the schema.
 */
export async function parseInstagramWebhook(opts: WebhookParseOptions) {
  const valid = await verifyWebhookSignature(opts.body, opts.signature, opts.appSecret);
  if (!valid) throw new Error("Invalid webhook signature");
  return igWebhookPayloadSchema.parse(JSON.parse(opts.body));
}

/**
 * Verify signature and parse a Facebook Page webhook payload with Zod validation.
 * Throws if signature is invalid or payload doesn't match the schema.
 */
export async function parseFacebookWebhook(opts: WebhookParseOptions) {
  const valid = await verifyWebhookSignature(opts.body, opts.signature, opts.appSecret);
  if (!valid) throw new Error("Invalid webhook signature");
  return fbWebhookPayloadSchema.parse(JSON.parse(opts.body));
}

/**
 * Verify signature and parse a Threads webhook payload with Zod validation.
 * Throws if signature is invalid or payload doesn't match the schema.
 */
export async function parseThreadsWebhook(opts: WebhookParseOptions) {
  const valid = await verifyWebhookSignature(opts.body, opts.signature, opts.appSecret);
  if (!valid) throw new Error("Invalid webhook signature");
  return threadsWebhookPayloadSchema.parse(JSON.parse(opts.body));
}
