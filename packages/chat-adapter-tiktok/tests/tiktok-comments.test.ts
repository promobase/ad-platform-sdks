import { expect, test } from "bun:test";

import { createMemoryState } from "@chat-adapter/state-memory";
import { Chat } from "chat";

import { createTikTokCommentsAdapter } from "../src/index.ts";

const APP_SECRET = "app_secret_3";
const ACCESS_TOKEN = "tt_token_1";
const BUSINESS_ID = "biz_1";

async function signTikTokBody(
  body: string,
  secret: string,
  timestamp = Math.floor(Date.now() / 1000),
): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signed = await crypto.subtle.sign("HMAC", key, encoder.encode(`${timestamp}.${body}`));
  const hex = Array.from(new Uint8Array(signed))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return `t=${timestamp},s=${hex}`;
}

function webhookUrl(): string {
  return "https://example.test/webhooks/tiktok";
}

function commentsAdapter(options: { fetch?: typeof fetch } = {}) {
  return createTikTokCommentsAdapter({
    appSecret: APP_SECRET,
    accessToken: ACCESS_TOKEN,
    businessId: BUSINESS_ID,
    ...options,
  });
}

function decodeFormBody(init?: RequestInit): Record<string, unknown> {
  const raw = String(init?.body ?? "");
  if (!raw) return {};
  try {
    return JSON.parse(raw) as Record<string, unknown>;
  } catch {
    // Form-encoded fallback.
    const form = new URLSearchParams(raw);
    const body: Record<string, unknown> = {};
    for (const [key, value] of form.entries()) {
      try {
        body[key] = JSON.parse(value);
      } catch {
        body[key] = value;
      }
    }
    return body;
  }
}

/**
 * Mock transport: serves comment details for GET list calls and echoes the
 * comment id back for POST calls.
 */
function okTikTokFetch(
  calls: Array<{ method: string; url: string; body: Record<string, unknown> }>,
): typeof fetch {
  return (async (input: string | URL | Request, init?: RequestInit) => {
    const url = String(input);
    const body = decodeFormBody(init);
    calls.push({ method: init?.method ?? "GET", url, body });

    if (url.includes("/business/comment/list/")) {
      const queryCommentIds = new URL(url).searchParams.get("comment_ids");
      const commentIds = queryCommentIds
        ? (JSON.parse(queryCommentIds) as string[])
        : (JSON.parse(String(body.comment_ids ?? "[]")) as string[]);
      const comments = commentIds.map((id) =>
        id === "222"
          ? {
              comment_id: "222",
              video_id: "9",
              unique_identifier: "ourbrand",
              create_time: "1723680010",
              text: "Thanks for watching!",
              likes: 0,
              replies: 0,
              owner: true,
              liked: false,
              pinned: false,
              status: "PUBLIC",
              username: "ourbrand",
              display_name: "OpenPromo",
              profile_image: "",
            }
          : {
              comment_id: "111",
              video_id: "9",
              unique_identifier: "u1",
              create_time: "1723680000",
              text: "Nice!",
              likes: 2,
              replies: 0,
              owner: false,
              liked: false,
              pinned: false,
              status: "PUBLIC",
              username: "alice",
              display_name: "Alice",
              profile_image: "",
              parent_comment_id: "110",
            },
      );
      return new Response(
        JSON.stringify({
          code: 0,
          message: "ok",
          request_id: "req_1",
          data: { comments, cursor: 0, has_more: false },
        }),
        { status: 200, headers: { "content-type": "application/json" } },
      );
    }
    return new Response(
      JSON.stringify({ code: 0, message: "ok", request_id: "req_2", data: { comment_id: "111" } }),
      { status: 200, headers: { "content-type": "application/json" } },
    );
  }) as unknown as typeof fetch;
}

test("challenge GET echoes the challenge", async () => {
  const adapter = commentsAdapter();
  const res = await adapter.handleWebhook(new Request(`${webhookUrl()}?challenge=abc123`));
  expect(res.status).toBe(200);
  expect(await res.text()).toBe("abc123");
});

test("POST without a valid signature is rejected", async () => {
  const adapter = commentsAdapter();
  const res = await adapter.handleWebhook(
    new Request(webhookUrl(), {
      method: "POST",
      headers: { "TikTok-Signature": "t=0,s=deadbeef" },
      body: "{}",
    }),
  );
  expect(res.status).toBe(403);
});

test("parseWebhookEvents preserves provider context for a generic consumer", async () => {
  const fixture = JSON.stringify(
    (await import("./fixtures/tiktok-comments.json", { with: { type: "json" } })).default,
  );
  const signature = await signTikTokBody(fixture, APP_SECRET);
  const adapter = commentsAdapter({ fetch: okTikTokFetch([]) });

  const result = await adapter.parseWebhookEvents(
    new Request(webhookUrl(), {
      method: "POST",
      headers: { "TikTok-Signature": signature },
      body: fixture,
    }),
  );

  expect(result.kind).toBe("events");
  if (result.kind !== "events") throw new Error("expected normalized events");
  const message = result.events.find((event) => event.kind === "message");
  expect(message).toMatchObject({
    threadId: `tiktok:${BUSINESS_ID}:comment:110`,
    metadata: { videoId: "9" },
  });
  expect(message?.message?.id).toBe("111");
});

test("webhook dispatches comments, caches self-comments, and tombstones deletes", async () => {
  const fixture = JSON.stringify(
    (await import("./fixtures/tiktok-comments.json", { with: { type: "json" } })).default,
  );
  const signature = await signTikTokBody(fixture, APP_SECRET);

  const adapter = commentsAdapter({ fetch: okTikTokFetch([]) });
  const chat = new Chat({
    userName: "test-bot",
    adapters: { tiktok_comments: adapter },
    state: createMemoryState(),
  });

  const received: Array<{ text: string; threadId: string; id: string }> = [];
  const deleted: Array<{ threadId: string; messageId: string }> = [];

  chat.onNewMessage(/.*/, async (_thread, message) => {
    received.push({ text: message.text, threadId: message.threadId, id: message.id });
  });
  chat.onMessageDeleted((event) => {
    deleted.push({ threadId: event.threadId, messageId: event.messageId });
  });

  const res = await chat.webhooks.tiktok_comments(
    new Request(webhookUrl(), {
      method: "POST",
      headers: { "TikTok-Signature": signature },
      body: fixture,
    }),
  );
  expect(res.status).toBe(200);

  // Customer reply dispatched (roots at the parent comment); the business's
  // own comment (222) is cached, not dispatched; delete tombstones.
  expect(received).toEqual([
    { text: "Nice!", threadId: `tiktok:${BUSINESS_ID}:comment:110`, id: "111" },
  ]);
  expect(deleted).toEqual([{ threadId: `tiktok:${BUSINESS_ID}:comment:110`, messageId: "333" }]);
});

test("postMessage replies with the video and comment ids", async () => {
  const calls: Array<{ method: string; url: string; body: Record<string, unknown> }> = [];
  const adapter = commentsAdapter({ fetch: okTikTokFetch(calls) });

  // Prime the video mapping by delivering a webhook insert first.
  const insert = JSON.stringify({
    events: [
      {
        client_key: "aw123",
        create_time: 1723680000,
        user_openid: "openid_1",
        event: "comment.update",
        content:
          '{"comment_id":111,"video_id":9,"parent_comment_id":110,"comment_type":"reply","comment_action":"insert","timestamp":1723680000,"unique_identifier":"u1","text":"Nice!"}',
      },
    ],
  });
  const signature = await signTikTokBody(insert, APP_SECRET);
  await adapter.handleWebhook(
    new Request(webhookUrl(), {
      method: "POST",
      headers: { "TikTok-Signature": signature },
      body: insert,
    }),
  );

  const result = await adapter.postMessage(`tiktok:${BUSINESS_ID}:comment:110`, "Thanks!");

  expect(result.id).toBe("111");
  const replyCall = calls.find((c) => c.url.includes("/business/comment/reply/"))!;
  expect(replyCall.body).toEqual({
    business_id: BUSINESS_ID,
    video_id: "9",
    comment_id: "110",
    text: "Thanks!",
  });
});

test("thread id round trips", () => {
  const adapter = commentsAdapter();
  expect(adapter.encodeThreadId({ parentCommentId: "110" })).toBe(
    `tiktok:${BUSINESS_ID}:comment:110`,
  );
  expect(adapter.decodeThreadId(`tiktok:${BUSINESS_ID}:comment:110`)).toEqual({
    parentCommentId: "110",
  });
});
