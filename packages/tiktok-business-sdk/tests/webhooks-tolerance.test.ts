import { expect, test } from "bun:test";

import { safeParseTikTokWebhook } from "../src/webhooks.ts";

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

test("unknown event kinds still deliver instead of rejecting the payload", async () => {
  const body = JSON.stringify({
    event: "some_future_event_kind",
    client_key: "ck_1",
    create_time: 1786800000,
    user_openid: "open_1",
    content: JSON.stringify({ anything: true }),
  });

  const result = await safeParseTikTokWebhook({
    body,
    signature: await sign(body),
    appSecret: SECRET,
  });

  expect(result.success).toBe(true);
  if (!result.success) return;
  expect(result.data.event).toBe("some_future_event_kind");
});

test("known comment event keeps its rich parse", async () => {
  const body = JSON.stringify({
    event: "comment.update",
    client_key: "ck_1",
    create_time: 1786800000,
    user_openid: "open_1",
    content: JSON.stringify({
      comment_id: 123,
      video_id: 456,
      comment_type: "NORMAL",
      comment_action: "ADD",
      timestamp: 1786800000,
      unique_identifier: "u1",
      text: "hi",
    }),
  });

  const result = await safeParseTikTokWebhook({
    body,
    signature: await sign(body),
    appSecret: SECRET,
  });

  expect(result.success).toBe(true);
  if (!result.success) return;
  expect(result.data.event).toBe("comment.update");
});

test("invalid signature is rejected with INVALID_SIGNATURE", async () => {
  const body = JSON.stringify({ event: "comment.update", client_key: "ck_1", content: "{}" });
  const result = await safeParseTikTokWebhook({
    body,
    signature: "t=1786800000,s=0000000000000000000000000000000000000000000000000000000000000000",
    appSecret: SECRET,
  });

  expect(result.success).toBe(false);
  if (result.success) return;
  expect(result.error.code).toBe("INVALID_SIGNATURE");
});
