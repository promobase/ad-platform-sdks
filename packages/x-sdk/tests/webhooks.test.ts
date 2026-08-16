import { expect, test } from "bun:test";

import { X } from "../src/namespace.ts";
import { getXWebhookEvents, verifyCrcChallenge, verifyWebhookSignature } from "../src/webhooks.ts";

const SECRET = "x-consumer-secret";

function b64(bytes: Uint8Array): string {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary);
}

async function hmacBase64(body: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  return b64(new Uint8Array(await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(body))));
}

test("CRC challenge returns the expected response_token", async () => {
  const result = await verifyCrcChallenge({
    crcToken: "crc_123",
    token: "verify-token",
    expectedToken: "verify-token",
    consumerSecret: SECRET,
  });

  expect(result.valid).toBe(true);
  expect(/^sha256=[0-9a-f]{64}$/.test(result.responseToken ?? "")).toBe(true);

  const rejected = await verifyCrcChallenge({
    crcToken: "crc_123",
    token: "wrong",
    expectedToken: "verify-token",
    consumerSecret: SECRET,
  });
  expect(rejected.valid).toBe(false);
});

test("signature verification accepts valid base64 HMAC and rejects tampered bodies", async () => {
  const body = JSON.stringify({ for_user_id: "u1", events: {} });
  const signature = await hmacBase64(body, SECRET);

  expect(await verifyWebhookSignature(body, signature, SECRET)).toBe(true);
  expect(await verifyWebhookSignature(body + " ", signature, SECRET)).toBe(false);
  expect(await verifyWebhookSignature(body, "not-base64!", SECRET)).toBe(false);
});

test("safeParse verifies signature + envelope, and extraction preserves unknown kinds", async () => {
  const events = {
    message_create: [
      {
        type: "message_create",
        message_create: {
          sender_id: "sender_1",
          target: { recipient_id: "recipient_1" },
          message_data: { text: "hello" },
        },
      },
    ],
    some_future_event: [{ id: "x" }],
  };
  const body = JSON.stringify({ for_user_id: "u1", events });
  const signature = await hmacBase64(body, SECRET);

  const result = await X.Webhooks.safeParse({ body, signature, appSecret: SECRET });
  expect(result.success).toBe(true);
  if (!result.success) return;

  const extracted = getXWebhookEvents(result.data);
  expect(extracted.length).toBe(2);

  const kinds = extracted.map((event) => event.type);
  expect(kinds.includes("message_create")).toBe(true);
  expect(kinds.includes("unknown")).toBe(true);

  // Exhaustive pattern matching on the tagged union.
  for (const event of extracted) {
    switch (event.type) {
      case "message_create":
        expect(event.data.message_create.message_data.text).toBe("hello");
        break;
      case "tweet_create":
        break;
      case "unknown":
        break;
      default: {
        const never: never = event;
        throw new Error(`unhandled event kind: ${String(never)}`);
      }
    }
  }
});
