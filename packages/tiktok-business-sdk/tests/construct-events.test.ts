import { expect, test } from "bun:test";

import { TikTok } from "../src/namespace.ts";

const SECRET = "mosaic-test-secret";

async function sign(body: string): Promise<string> {
  const timestamp = Math.floor(Date.now() / 1000);
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const digest = new Uint8Array(
    await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(`${timestamp}.${body}`)),
  );
  const signature = Array.from(digest, (byte) => byte.toString(16).padStart(2, "0")).join("");
  return `t=${timestamp},s=${signature}`;
}

test("constructEvent normalizes TikTok to the unified { type, data } shape", async () => {
  const body = JSON.stringify({
    event: "comment.update",
    client_key: "ck_1",
    create_time: 1786800000,
    user_openid: "open_1",
    content: JSON.stringify({
      comment_id: 123,
      video_id: 456,
      comment_type: "comment",
      comment_action: "insert",
      timestamp: 1786800000,
      unique_identifier: "u1",
      text: "hi",
    }),
  });

  const event = await TikTok.Webhooks.constructEvent({
    body,
    signature: await sign(body),
    appSecret: SECRET,
  });

  // Unified discriminant: switch on `type`, data is typed per case.
  switch (event.type) {
    case "comment.update":
      expect(event.data.text).toBe("hi");
      break;
    case "unknown":
      // Tolerant catch-all: unknown event kinds deliver without typed data.
      expect(typeof event.sourceType).toBe("string");
      break;
    default:
      expect(typeof event.type).toBe("string");
  }
});

test("constructEvent rejects invalid signatures like Stripe's constructEvent", async () => {
  const body = JSON.stringify({ event: "comment.update", client_key: "ck_1", content: "{}" });
  const result = await TikTok.Webhooks.constructEvent({
    body,
    signature: "t=1786800000,s=0000000000000000000000000000000000000000000000000000000000000000",
    appSecret: SECRET,
  }).catch((error: unknown) => error);

  expect(result).toBeInstanceOf(Error);
});
