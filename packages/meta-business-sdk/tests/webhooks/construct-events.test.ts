import { expect, test } from "bun:test";

import { webhooks } from "../../src/webhooks/index.ts";

const SECRET = "mosaic-test-secret";

async function sign(body: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const digest = new Uint8Array(
    await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(body)),
  );
  return `sha256=${Array.from(digest, (byte) => byte.toString(16).padStart(2, "0")).join("")}`;
}

test("constructEvents: one call verifies + parses + extracts typed events (Stripe-style)", async () => {
  const body = JSON.stringify({
    object: "page",
    entry: [
      {
        id: "page_1",
        time: 1786800000,
        messaging: [
          {
            sender: { id: "u1" },
            recipient: { id: "page_1" },
            timestamp: 1,
            message: { mid: "m1", text: "hi" },
          },
        ],
        changes: [{ field: "feed", value: { comment_id: "c1" } }],
      },
    ],
  });

  const events = await webhooks.facebook.constructEvents({
    body,
    signature: await sign(body),
    appSecret: SECRET,
  });

  const types = events.map((event) => event.type);
  expect(types.includes("message")).toBe(true);
  expect(types.includes("comment_change")).toBe(true);

  for (const event of events) {
    switch (event.type) {
      case "message":
      case "echo":
      case "quick_reply":
      case "postback":
      case "referral":
      case "delivery":
      case "read":
      case "reaction":
      case "message_edit":
      case "optin":
      case "account_linking":
      case "pass_thread_control":
      case "take_thread_control":
      case "request_thread_control":
      case "standby":
      case "comment_change":
      case "unknown":
        break;
      default: {
        const never: never = event;
        throw new Error(`unhandled event type: ${String(never)}`);
      }
    }
  }
});

test("constructEvents: invalid signature throws a WebhookParseError", async () => {
  const result = await webhooks.instagram
    .constructEvents({
      body: JSON.stringify({ object: "instagram", entry: [] }),
      signature: "sha256=0000000000000000000000000000000000000000000000000000000000000000",
      appSecret: SECRET,
    })
    .catch((error: unknown) => error);

  expect(result).toBeInstanceOf(Error);
  expect((result as { name?: string }).name).toBe("WebhookParseError");
});
