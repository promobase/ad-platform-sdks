import { expect, test } from "bun:test";

import {
  decodeBase64Signature,
  decodeHexSignature,
  encodeBase64Signature,
  encodeHexSignature,
  hmacSha256,
  verifyHmacSha256,
  verifyWebhookSignature,
  webhookBodyToBytes,
} from "../src/webhooks.ts";

const secret = "runtime-webhook-secret";
const body = '{"message":"exact bytes ✅"}';

test("HMAC helpers preserve exact raw body bytes", async () => {
  const bytes = webhookBodyToBytes(new TextEncoder().encode(body));
  const digest = await hmacSha256(bytes, secret);

  expect(await verifyHmacSha256(bytes, digest, secret)).toBe(true);
  expect(await verifyHmacSha256(`${body} `, digest, secret)).toBe(false);
});

test("signature encoders and decoders reject malformed values", async () => {
  const digest = await hmacSha256(body, secret);
  const hex = encodeHexSignature(digest);
  const base64 = encodeBase64Signature(digest);

  expect(decodeHexSignature(hex, digest.byteLength)).toEqual(digest);
  expect(decodeBase64Signature(base64, digest.byteLength)).toEqual(digest);
  expect(decodeHexSignature(`0${hex}`, digest.byteLength)).toBeUndefined();
  expect(decodeHexSignature(`${hex.slice(0, -1)}x`)).toBeUndefined();
  expect(decodeBase64Signature("not-base64!", digest.byteLength)).toBeUndefined();
});

test("Meta-style verification requires the exact sha256 header format", async () => {
  const digest = await hmacSha256(body, secret);
  const hex = encodeHexSignature(digest);

  expect(await verifyWebhookSignature(body, `sha256=${hex}`, secret)).toBe(true);
  expect(await verifyWebhookSignature(body, hex, secret)).toBe(false);
  expect(await verifyWebhookSignature(body, `sha256=${hex.slice(0, -2)}`, secret)).toBe(false);
  expect(await verifyWebhookSignature(body, `sha256=${hex.toUpperCase()}`, secret)).toBe(true);
});
