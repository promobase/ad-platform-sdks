import { describe, expect, test } from "bun:test";

import { createTikTokWebhooks } from "../src/clients/index.ts";
import {
  safeParseCommentWebhook,
  safeParseDMWebhook,
  verifyWebhookSignature,
} from "../src/webhooks.ts";

const appSecret = "webhook-secret";
const timestamp = 1_700_000_000;

async function sign(body: string, signedAt = timestamp): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(appSecret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const digest = await crypto.subtle.sign("HMAC", key, encoder.encode(`${signedAt}.${body}`));
  const hex = Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join(
    "",
  );
  return `t=${signedAt},s=${hex}`;
}

const commentBody = JSON.stringify({
  client_key: "app-key",
  event: "comment.update",
  create_time: timestamp,
  user_openid: "business-open-id",
  content: JSON.stringify({
    comment_id: Number("7247303576418566913"),
    video_id: Number("7203946942097902849"),
    parent_comment_id: Number("7235861947622916866"),
    comment_type: "reply",
    comment_action: "delete",
    unique_identifier: "+ABc1D2/E0fGhijklMNOrD34vDW/zDiZUNRH5Jyahue6OcA7b8ZpwnqXV9u1Uh+k",
    timestamp: 1687394416109,
    text: "text",
  }),
});

const directMessageBody = JSON.stringify({
  client_key: "app-key",
  event: "im_receive_msg",
  create_time: timestamp,
  user_openid: "business-open-id",
  content: JSON.stringify({
    from: "business-account",
    to: "personal-account",
    unique_identifier: "personal-unique-id",
    from_user: { id: "business-id", role: "business_account" },
    to_user: { id: "personal-id", role: "personal_account" },
    conversation_id: "conversation-123",
    message_id: "message-123",
    timestamp: 1700000000123,
    type: "text",
    text: "hello",
    is_follower: true,
    message_tag: { source: "APP" },
  }),
});

describe("TikTok Business webhooks", () => {
  test("verifies the official TikTok-Signature format and freshness window", async () => {
    const signature = await sign(commentBody);

    await expect(
      verifyWebhookSignature(commentBody, signature, appSecret, {
        now: timestamp + 5,
        maxAgeSeconds: 5,
      }),
    ).resolves.toBe(true);

    await expect(
      verifyWebhookSignature(commentBody, signature, appSecret, {
        now: timestamp + 6,
        maxAgeSeconds: 5,
      }),
    ).resolves.toBe(false);
    await expect(
      verifyWebhookSignature(commentBody, signature.replace("t=", "x="), appSecret, {
        now: timestamp,
      }),
    ).resolves.toBe(false);
    await expect(
      verifyWebhookSignature(commentBody, `s=${"a".repeat(64)}`, appSecret, {
        now: timestamp,
      }),
    ).resolves.toBe(false);
  });

  test("parses the documented comment.update fixture with numeric IDs", async () => {
    const result = await safeParseCommentWebhook({
      body: commentBody,
      signature: await sign(commentBody),
      appSecret,
      signatureOptions: { now: timestamp },
    });

    expect(result.success).toBe(true);
    if (!result.success) return;
    expect(result.data.event).toBe("comment.update");
    expect(result.data.content.comment_id).toBe(Number("7247303576418566913"));
    expect(result.data.content.comment_action).toBe("delete");
  });

  test("parses the documented Business Messaging receive event", async () => {
    const result = await safeParseDMWebhook({
      body: directMessageBody,
      signature: await sign(directMessageBody),
      appSecret,
      signatureOptions: { now: timestamp },
    });

    expect(result.success).toBe(true);
    if (!result.success) return;
    expect(result.data.event).toBe("im_receive_msg");
    expect(result.data.content.conversation_id).toBe("conversation-123");
    expect(result.data.content.message_tag?.source).toBe("APP");
  });

  test("uses only official account categories in setupAll", async () => {
    const eventTypes: string[] = [];
    const client = createTikTokWebhooks({
      appId: "app-id",
      appSecret,
      fetch: (async (_input, init) => {
        eventTypes.push(String(JSON.parse(String(init?.body)).event_type));
        return new Response(
          JSON.stringify({ code: 0, message: "OK", request_id: "request-id", data: {} }),
          { status: 200 },
        );
      }) as typeof fetch,
    });

    await client.setupAll("https://example.test/tiktok/webhooks");
    await client.setupBusinessMessaging("https://example.test/tiktok/webhooks");

    expect(eventTypes).toEqual(["VIDEO", "COMMENT", "DIRECT_MESSAGE"]);
  });
});
