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

// --- Platform-specific webhook parsers ---

import type { IGWebhookPayload } from "./instagram/types.ts";
import type { FBWebhookPayload } from "./facebook/types.ts";
import type { ThreadsWebhookPayload } from "./threads/types.ts";

export interface WebhookParseOptions {
  body: string;
  signature: string;
  appSecret: string;
}

/**
 * Verify signature and parse an Instagram webhook payload.
 * Throws if signature is invalid or payload shape doesn't match.
 */
export async function parseInstagramWebhook(opts: WebhookParseOptions): Promise<IGWebhookPayload> {
  const valid = await verifyWebhookSignature(opts.body, opts.signature, opts.appSecret);
  if (!valid) throw new Error("Invalid webhook signature");

  const payload = JSON.parse(opts.body) as IGWebhookPayload;
  if (payload.object !== "instagram") {
    throw new Error(`Expected Instagram webhook (object: "instagram"), got "${payload.object}"`);
  }
  return payload;
}

/**
 * Verify signature and parse a Facebook Page webhook payload.
 * Throws if signature is invalid or payload shape doesn't match.
 */
export async function parseFacebookWebhook(opts: WebhookParseOptions): Promise<FBWebhookPayload> {
  const valid = await verifyWebhookSignature(opts.body, opts.signature, opts.appSecret);
  if (!valid) throw new Error("Invalid webhook signature");

  const payload = JSON.parse(opts.body) as FBWebhookPayload;
  if (payload.object !== "page") {
    throw new Error(`Expected Facebook Page webhook (object: "page"), got "${payload.object}"`);
  }
  return payload;
}

/**
 * Verify signature and parse a Threads webhook payload.
 * Throws if signature is invalid.
 */
export async function parseThreadsWebhook(opts: WebhookParseOptions): Promise<ThreadsWebhookPayload> {
  const valid = await verifyWebhookSignature(opts.body, opts.signature, opts.appSecret);
  if (!valid) throw new Error("Invalid webhook signature");

  return JSON.parse(opts.body) as ThreadsWebhookPayload;
}
