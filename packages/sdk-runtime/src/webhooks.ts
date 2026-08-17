import { TaggedError } from "./result.ts";

/**
 * Shared webhook verification + parsing primitives for every platform package.
 *
 * Meta, TikTok, and X webhook surfaces follow one contract:
 * - `verifyWebhookSignature(body, signature, appSecret)` — provider signature check;
 * - `verifyWebhookChallenge(params, token)` — GET verification (hub.challenge, CRC);
 * - `safeParse<T>(options, schema)` — signature + JSON + schema validation returning a
 *   discriminated `WebhookParseResult<T>`;
 * - typed event extraction (per platform) that turns a validated payload into a
 *   tagged union of events, consumed with exhaustive pattern matching.
 */

export type WebhookBody = string | ArrayBuffer | Uint8Array;

export type WebhookParseOptions = {
  /** The exact raw request body used to calculate the provider signature. */
  readonly body: WebhookBody;
  /** The signature request header value (full header, e.g. `sha256=...` or `t=...,s=...`). */
  readonly signature: string;
  readonly appSecret: string;
};

export type WebhookParseErrorCode = "INVALID_SIGNATURE" | "INVALID_JSON" | "INVALID_PAYLOAD";

const WebhookParseErrorBase = TaggedError("WebhookParseError")<{
  readonly message: string;
  readonly code: WebhookParseErrorCode;
  readonly details?: unknown;
}>();

/**
 * A tagged, matchable webhook parse/verification failure shared by every
 * platform package. `code` discriminates the failure class.
 */
export class WebhookParseError extends WebhookParseErrorBase {
  override readonly name = "WebhookParseError";
  override readonly code: WebhookParseErrorCode;
  override readonly details?: unknown;

  constructor(code: WebhookParseErrorCode, message: string, details?: unknown) {
    super({ message, code, ...(details === undefined ? {} : { details }) });
    this.code = code;
    this.details = details;
  }
}

export type WebhookParseResult<T> =
  | { readonly success: true; readonly data: T }
  | { readonly success: false; readonly error: WebhookParseError };

/** Timestamp replay window for signed deliveries that carry one. */
export const DEFAULT_WEBHOOK_MAX_AGE_SECONDS = 300;

const SHA256_HEX_LENGTH = 64;

/** Convert a webhook body to a detached byte array without changing signed bytes. */
export function webhookBodyToBytes(body: WebhookBody): Uint8Array<ArrayBuffer> {
  let source: Uint8Array;
  if (typeof body === "string") {
    source = new TextEncoder().encode(body);
  } else if (body instanceof Uint8Array) {
    source = body;
  } else {
    source = new Uint8Array(body);
  }
  const copy = new Uint8Array(source.byteLength);
  copy.set(source);
  return copy;
}

export function webhookBodyToText(body: WebhookBody): string {
  return new TextDecoder().decode(webhookBodyToBytes(body));
}

/** Compare signature bytes without an early-exit timing leak. */
export function constantTimeEqual(left: Uint8Array, right: Uint8Array): boolean {
  if (left.length !== right.length) return false;
  let difference = 0;
  for (let index = 0; index < left.length; index += 1) {
    difference |= left[index]! ^ right[index]!;
  }
  return difference === 0;
}

/** Decode an even-length hexadecimal signature. Returns undefined when malformed. */
export function decodeHexSignature(
  value: string,
  expectedByteLength?: number,
): Uint8Array<ArrayBuffer> | undefined {
  if (value.length === 0 || value.length % 2 !== 0 || !/^[0-9a-f]+$/i.test(value)) {
    return undefined;
  }
  const bytes = new Uint8Array(value.length / 2);
  if (expectedByteLength !== undefined && bytes.length !== expectedByteLength) return undefined;
  for (let index = 0; index < bytes.length; index += 1) {
    bytes[index] = Number.parseInt(value.slice(index * 2, index * 2 + 2), 16);
  }
  return bytes;
}

/** Decode a base64 signature. Returns undefined when malformed. */
export function decodeBase64Signature(
  value: string,
  expectedByteLength?: number,
): Uint8Array<ArrayBuffer> | undefined {
  try {
    const bytes = Uint8Array.from(atob(value), (character) => character.charCodeAt(0));
    return expectedByteLength === undefined || bytes.length === expectedByteLength
      ? bytes
      : undefined;
  } catch {
    return undefined;
  }
}

/** Encode bytes as lowercase hexadecimal for provider headers and fixtures. */
export function encodeHexSignature(bytes: Uint8Array): string {
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

/** Encode bytes as base64 for provider headers and fixtures. */
export function encodeBase64Signature(bytes: Uint8Array): string {
  return btoa(String.fromCharCode(...bytes));
}

/** Create an HMAC-SHA256 digest over an exact raw body/signing input. */
export async function hmacSha256(
  body: WebhookBody,
  secret: string,
): Promise<Uint8Array<ArrayBuffer>> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  return new Uint8Array(await crypto.subtle.sign("HMAC", key, webhookBodyToBytes(body).buffer));
}

/** Verify an HMAC-SHA256 digest using the shared timing-safe primitive. */
export async function verifyHmacSha256(
  body: WebhookBody,
  expected: Uint8Array<ArrayBuffer>,
  secret: string,
): Promise<boolean> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["verify"],
  );
  return crypto.subtle.verify("HMAC", key, expected, webhookBodyToBytes(body).buffer);
}

/**
 * Verify an `X-Hub-Signature-256: sha256=<hex>` style HMAC over the exact raw
 * body. Timing-safe.
 */
export async function verifyWebhookSignature(
  body: WebhookBody,
  signature: string,
  appSecret: string,
): Promise<boolean> {
  if (!signature.startsWith("sha256=")) return false;
  const expected = decodeHexSignature(signature.slice("sha256=".length), SHA256_HEX_LENGTH / 2);
  if (!expected) return false;
  return verifyHmacSha256(body, expected, appSecret);
}

export interface WebhookChallengeParams {
  readonly "hub.mode"?: string;
  readonly "hub.challenge"?: string;
  readonly "hub.verify_token"?: string;
}

export interface WebhookChallengeResult {
  readonly valid: boolean;
  readonly challenge?: string;
}

/**
 * Meta-style GET verification: `hub.mode=subscribe`, matching verify token,
 * and a non-empty challenge.
 */
export function verifyWebhookChallenge(
  params: WebhookChallengeParams,
  expectedVerifyToken: string,
): WebhookChallengeResult {
  if (
    params["hub.mode"] === "subscribe" &&
    params["hub.verify_token"] === expectedVerifyToken &&
    typeof params["hub.challenge"] === "string" &&
    params["hub.challenge"].length > 0
  ) {
    return { valid: true, challenge: params["hub.challenge"] };
  }
  return { valid: false };
}

type WebhookSchema = { readonly parse: (input: unknown) => unknown };

/**
 * Verify signature, parse JSON, and validate against the platform schema.
 * Throws `WebhookParseError` on any failure.
 */
export async function parseWebhook<TSchema extends WebhookSchema>(
  options: WebhookParseOptions,
  schema: TSchema,
  verify: typeof verifyWebhookSignature = verifyWebhookSignature,
): Promise<ReturnType<TSchema["parse"]>> {
  if (!(await verify(options.body, options.signature, options.appSecret))) {
    throw new WebhookParseError("INVALID_SIGNATURE", "Invalid webhook signature");
  }

  let input: unknown;
  try {
    input = JSON.parse(webhookBodyToText(options.body)) as unknown;
  } catch (error) {
    throw new WebhookParseError("INVALID_JSON", "Failed to parse webhook body as JSON", error);
  }

  try {
    return schema.parse(input) as ReturnType<TSchema["parse"]>;
  } catch (error) {
    throw new WebhookParseError("INVALID_PAYLOAD", "Webhook payload validation failed", error);
  }
}

/** Non-throwing variant of {@link parseWebhook}. */
export async function safeParseWebhook<TSchema extends WebhookSchema>(
  options: WebhookParseOptions,
  schema: TSchema,
  verify: typeof verifyWebhookSignature = verifyWebhookSignature,
): Promise<WebhookParseResult<ReturnType<TSchema["parse"]>>> {
  try {
    return { success: true, data: await parseWebhook(options, schema, verify) };
  } catch (error) {
    const parseError =
      error instanceof WebhookParseError
        ? error
        : new WebhookParseError("INVALID_PAYLOAD", "Webhook payload validation failed", error);
    return { success: false, error: parseError };
  }
}
