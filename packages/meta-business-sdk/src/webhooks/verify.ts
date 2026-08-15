const SIGNATURE_PREFIX = "sha256=";
const SHA256_HEX_LENGTH = 64;

export interface WebhookChallengeParams {
  readonly "hub.mode"?: string;
  readonly "hub.challenge"?: string;
  readonly "hub.verify_token"?: string;
}

export interface WebhookChallengeResult {
  readonly valid: boolean;
  readonly challenge?: string;
}

export type WebhookBody = string | ArrayBuffer | Uint8Array;

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

function toBytes(body: WebhookBody): Uint8Array<ArrayBuffer> {
  let source: Uint8Array<ArrayBufferLike>;
  if (typeof body === "string") {
    source = new TextEncoder().encode(body);
  } else if (body instanceof Uint8Array) {
    source = body;
  } else {
    source = new Uint8Array(body);
  }

  const copy = new Uint8Array(new ArrayBuffer(source.byteLength));
  copy.set(source);
  return copy;
}

function decodeSignature(signature: string): Uint8Array | undefined {
  if (!signature.startsWith(SIGNATURE_PREFIX)) {
    return undefined;
  }

  const hex = signature.slice(SIGNATURE_PREFIX.length);
  if (hex.length !== SHA256_HEX_LENGTH || !/^[0-9a-f]+$/u.test(hex)) {
    return undefined;
  }

  const bytes = new Uint8Array(SHA256_HEX_LENGTH / 2);
  for (let index = 0; index < bytes.length; index += 1) {
    bytes[index] = Number.parseInt(hex.slice(index * 2, index * 2 + 2), 16);
  }
  return bytes;
}

function constantTimeEqual(left: Uint8Array, right: Uint8Array): boolean {
  if (left.length !== right.length) {
    return false;
  }
  let difference = 0;
  for (let index = 0; index < left.length; index += 1) {
    difference |= left[index]! ^ right[index]!;
  }
  return difference === 0;
}

export async function verifyWebhookSignature(
  body: WebhookBody,
  signature: string,
  appSecret: string,
): Promise<boolean> {
  const expected = decodeSignature(signature);
  if (!expected) {
    return false;
  }

  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(appSecret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const actual = new Uint8Array(await crypto.subtle.sign("HMAC", key, toBytes(body)));
  return constantTimeEqual(actual, expected);
}

export function webhookBodyToText(body: WebhookBody): string {
  return new TextDecoder().decode(toBytes(body));
}
