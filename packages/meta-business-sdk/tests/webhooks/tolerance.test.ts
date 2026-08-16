import { expect, test } from "bun:test";

import {
  type FacebookWebhookPayload,
  type InstagramWebhookPayload,
  type ThreadsWebhookPayload,
  type WebhookParseResult,
  webhooks,
} from "../../src/webhooks/index.ts";

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

async function parseWith<TPayload>(
  parser: (opts: {
    body: string;
    signature: string;
    appSecret: string;
  }) => Promise<WebhookParseResult<TPayload>>,
  body: unknown,
) {
  const text = JSON.stringify(body);
  return parser({ body: text, signature: await sign(text), appSecret: SECRET });
}

// ---------------------------------------------------------------------------
// Production-tolerance: deliveries carrying provider-added fields must still
// parse. OpenPromo's verified webhook pipeline filters known fields and
// ignores the rest; the SDK must not reject the whole delivery.
// ---------------------------------------------------------------------------

test("facebook: unknown change field still delivers (rich feed parse kept)", async () => {
  const result = await parseWith<FacebookWebhookPayload>(webhooks.facebook.safeParse, {
    object: "page",
    entry: [
      {
        id: "page_1",
        time: 1786800000,
        changes: [
          { field: "feed", value: { comment_id: "c1", verb: "add", message: "hi" } },
          { field: "likes", value: { post_id: "p1" } },
          { field: "leadgen", value: { leadgen_id: "l1" } },
        ],
      },
    ],
  });

  expect(result.success).toBe(true);
  if (!result.success) return;
  const changes = result.data.entry[0]?.changes ?? [];
  expect(changes.filter((change) => change.field === "feed")).toHaveLength(1);
  expect(changes.filter((change) => change.field === "likes")).toHaveLength(1);
});

test("instagram: unknown change field still delivers", async () => {
  const result = await parseWith<InstagramWebhookPayload>(webhooks.instagram.safeParse, {
    object: "instagram",
    entry: [
      {
        id: "ig_1",
        time: 1786800000,
        changes: [
          { field: "comments", value: { id: "cm1", text: "hi" } },
          { field: "ad_comments", value: { ad_id: "a1" } },
        ],
      },
    ],
  });

  expect(result.success).toBe(true);
});

test("threads: unknown topic/field still delivers", async () => {
  const result = await parseWith<ThreadsWebhookPayload>(webhooks.threads.safeParse, {
    app_id: "app_1",
    topic: "interaction",
    target_id: "user_1",
    time: 1786800000,
    subscription_id: "sub_1",
    values: {
      field: "some_new_field",
      value: { id: "post_1" },
    },
  });

  expect(result.success).toBe(true);
  if (!result.success) return;
  expect(result.data.values.field).toBe("some_new_field");
});

test("invalid signature is rejected with INVALID_SIGNATURE", async () => {
  const body = JSON.stringify({ object: "page", entry: [] });
  const result = await webhooks.facebook.safeParse({
    body,
    signature: "sha256=0000000000000000000000000000000000000000000000000000000000000000",
    appSecret: SECRET,
  });

  expect(result.success).toBe(false);
  if (result.success) return;
  expect(result.error.code).toBe("INVALID_SIGNATURE");
});
