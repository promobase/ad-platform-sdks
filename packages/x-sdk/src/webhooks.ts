import {
  decodeBase64Signature,
  encodeHexSignature,
  hmacSha256,
  parseWebhook,
  safeParseWebhook,
  type WebhookBody,
  type WebhookParseOptions,
  type WebhookParseResult,
  WebhookParseError,
  verifyHmacSha256,
  type WebhookChallengeResult,
} from "@openpromo/sdk-runtime/webhooks";
import * as v from "valibot";

/**
 * X Account Activity API webhook surface.
 *
 * - GET verification is a CRC (crc_token): respond with
 *   `{"response_token":"sha256=<hmac-sha256(crc_token, consumerSecret)>"}`.
 * - POST verification: `x-twitter-webhooks-signature` header, base64
 *   HMAC-SHA256 over the exact raw body.
 * - Payloads are envelopes: `{ for_user_id, events: { <type>: [...] } }`.
 *   Use {@link getXWebhookEvents} to extract typed events and match on
 *   `kind` exhaustively (unknown kinds are preserved, never dropped).
 */

export type XWebhookEventType = "message_create" | "tweet_create" | "tweet_delete";

export type XMessageCreateEvent = {
  readonly type: "message_create";
  readonly message_create: {
    readonly sender_id: string;
    readonly target: { readonly recipient_id: string };
    readonly message_data: {
      readonly text?: string;
      readonly quick_reply_response?: { readonly metadata?: string };
      readonly attachment?: { readonly type?: string; readonly media?: { readonly id?: string } };
    };
  };
};

export type XTweetCreateEvent = {
  readonly type: "tweet_create";
  readonly user: { readonly id?: string; readonly screen_name?: string };
  readonly id: string;
  readonly text?: string;
};

export type XWebhookEvent =
  | { readonly type: "message_create"; readonly data: XMessageCreateEvent }
  | { readonly type: "tweet_create"; readonly data: XTweetCreateEvent }
  | { readonly type: "unknown"; readonly data: unknown; readonly sourceType: string };

export const xWebhookPayloadSchema = v.looseObject({
  for_user_id: v.string(),
  events: v.optional(v.looseObject({})),
});

export type XWebhookPayload = v.InferOutput<typeof xWebhookPayloadSchema>;

export type XWebhookEvents = NonNullable<XWebhookPayload["events"]>;

/** Extract typed events from a validated envelope, preserving unknown kinds. */
export function getXWebhookEvents(payload: XWebhookPayload): readonly XWebhookEvent[] {
  const events = payload.events;
  if (events === undefined) return [];

  const result: XWebhookEvent[] = [];
  for (const [type, list] of Object.entries(events)) {
    const items = Array.isArray(list) ? list : [list];
    for (const item of items) {
      if (type === "message_create") {
        result.push({ type: "message_create", data: item as XMessageCreateEvent });
      } else if (type === "tweet_create") {
        result.push({ type: "tweet_create", data: item as XTweetCreateEvent });
      } else {
        result.push({ type: "unknown", data: item, sourceType: type });
      }
    }
  }
  return result;
}

/**
 * Stripe-style one-call convenience: verify signature + parse envelope +
 * extract typed events. Throws `WebhookParseError` on invalid deliveries.
 */
export async function constructXWebhookEvents(
  options: WebhookParseOptions,
): Promise<readonly XWebhookEvent[]> {
  return getXWebhookEvents(await parseXWebhook(options));
}

/** Valibot schema adapted to the shared parseable contract. */
const parseableEnvelope = {
  parse: (input: unknown) => v.parse(xWebhookPayloadSchema, input),
};

/** Verify + schema-validate an X webhook delivery. Throws on failure. */
export function parseXWebhook(options: WebhookParseOptions): Promise<XWebhookPayload> {
  return parseWebhook(options, parseableEnvelope, verifyWebhookSignature);
}

/** Non-throwing variant of {@link parseXWebhook}. */
export function safeParseXWebhook(
  options: WebhookParseOptions,
): Promise<WebhookParseResult<XWebhookPayload>> {
  return safeParseWebhook(options, parseableEnvelope, verifyWebhookSignature);
}

/**
 * Verify the `x-twitter-webhooks-signature` header (base64 HMAC-SHA256 over
 * the raw body). Timing-safe.
 */
export async function verifyWebhookSignature(
  body: string | WebhookBody,
  signature: string,
  consumerSecret: string,
): Promise<boolean> {
  const expected = decodeBase64Signature(signature, 32);
  return expected ? verifyHmacSha256(body, expected, consumerSecret) : false;
}

/**
 * X GET verification (CRC): validate the request token and produce the
 * `response_token` the platform expects. The expected token is optional —
 * pass `undefined` when the route relies on signature-grade secrecy alone.
 */
export async function verifyCrcChallenge(input: {
  readonly crcToken?: string;
  readonly token?: string;
  readonly expectedToken?: string;
  readonly consumerSecret: string;
}): Promise<WebhookChallengeResult & { readonly responseToken?: string }> {
  if (input.expectedToken !== undefined && input.token !== input.expectedToken) {
    return { valid: false };
  }
  if (!input.crcToken) {
    return { valid: false };
  }

  const digest = await hmacSha256(input.crcToken, input.consumerSecret);
  return { valid: true, responseToken: `sha256=${encodeHexSignature(digest)}` };
}

export { WebhookParseError, type XWebhookPayload as XWebhookPayloadType };
