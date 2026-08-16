import { expect, test } from "bun:test";

import { createMemoryState } from "@chat-adapter/state-memory";
import { Chat } from "chat";

import { createFacebookCommentsAdapter } from "../src/index.ts";

const APP_SECRET = "app_secret_1";
const VERIFY_TOKEN = "verify_tok_1";
const PAGE_ID = "PAGE_ID_123";

async function signBody(body: string, secret: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signed = await crypto.subtle.sign("HMAC", key, encoder.encode(body));
  return Array.from(new Uint8Array(signed))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function webhookUrl(): string {
  return "https://example.test/webhooks/facebook";
}

function commentsAdapter(options: { fetch?: typeof fetch } = {}) {
  return createFacebookCommentsAdapter({
    appSecret: APP_SECRET,
    verifyToken: VERIFY_TOKEN,
    accessToken: "page_token_1",
    pageId: PAGE_ID,
    ...options,
  });
}

function decodeFormBody(init?: RequestInit): Record<string, unknown> {
  const form = new URLSearchParams(String(init?.body ?? ""));
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

test("comment threads root at the top-level comment", () => {
  const adapter = commentsAdapter();
  expect(adapter.encodeThreadId({ parentCommentId: "c_1001" })).toBe(
    `facebook:${PAGE_ID}:comment:c_1001`,
  );
  expect(adapter.decodeThreadId(`facebook:${PAGE_ID}:comment:c_1001`)).toEqual({
    parentCommentId: "c_1001",
  });
});

test("webhook dispatches adds, edits, and deletes across comment threads", async () => {
  const fixture = JSON.stringify(
    (await import("./fixtures/fb-comments.json", { with: { type: "json" } })).default,
  );
  const signature = await signBody(fixture, APP_SECRET);

  const adapter = commentsAdapter();
  const chat = new Chat({
    userName: "test-bot",
    adapters: { facebook_comments: adapter },
    state: createMemoryState(),
  });

  const received: Array<{ text: string; threadId: string; id: string }> = [];
  const updated: Array<{ id: string; text: string }> = [];
  const deleted: Array<{ threadId: string; messageId: string }> = [];

  chat.onNewMessage(/.*/, async (_thread, message) => {
    received.push({ text: message.text, threadId: message.threadId, id: message.id });
  });
  chat.onMessageUpdated(async (_thread, message) => {
    updated.push({ id: message.id, text: message.text });
  });
  chat.onMessageDeleted((event) => {
    deleted.push({ threadId: event.threadId, messageId: event.messageId });
  });

  const res = await chat.webhooks.facebook_comments(
    new Request(webhookUrl(), {
      method: "POST",
      headers: { "X-Hub-Signature-256": `sha256=${signature}` },
      body: fixture,
    }),
  );
  expect(res.status).toBe(200);

  // Two customer comments dispatched (top-level + reply); the page's own
  // comment (c_1003) is cached, not dispatched.
  expect(received).toEqual([
    { text: "How much is shipping?", threadId: `facebook:${PAGE_ID}:comment:c_1001`, id: "c_1001" },
    { text: "Reply to c_1001", threadId: `facebook:${PAGE_ID}:comment:c_1001`, id: "c_1002" },
  ]);
  expect(updated).toEqual([{ id: "c_1001", text: "Edited text" }]);
  expect(deleted).toEqual([
    { threadId: `facebook:${PAGE_ID}:comment:c_1001`, messageId: "c_1002" },
  ]);
});

test("postMessage replies to the thread-root comment", async () => {
  const calls: Array<{ url: string; body: Record<string, unknown> }> = [];
  const mockFetch = (async (input: string | URL | Request, init?: RequestInit) => {
    calls.push({ url: String(input), body: decodeFormBody(init) });
    return new Response(JSON.stringify({ id: "c_reply_1" }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }) as unknown as typeof fetch;

  const adapter = commentsAdapter({ fetch: mockFetch });
  const result = await adapter.postMessage(`facebook:${PAGE_ID}:comment:c_1001`, "Sure, $12!");

  expect(result.id).toBe("c_reply_1");
  expect(calls).toHaveLength(1);
  expect(calls[0]!.url).toContain("c_1001");
  expect(calls[0]!.url).toContain("comments");
  expect(calls[0]!.body.message).toBe("Sure, $12!");
});

test("deleteMessage and hideComment call the comment API", async () => {
  const calls: Array<{ method: string; url: string; body: Record<string, unknown> }> = [];
  const mockFetch = (async (input: string | URL | Request, init?: RequestInit) => {
    calls.push({
      method: init?.method ?? "GET",
      url: String(input),
      body: decodeFormBody(init),
    });
    return new Response("{}", {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }) as unknown as typeof fetch;

  const adapter = commentsAdapter({ fetch: mockFetch });
  await adapter.deleteMessage(`facebook:${PAGE_ID}:comment:c_1001`, "c_1002");
  expect(calls[0]!.method).toBe("DELETE");
  expect(calls[0]!.url).toContain("c_1002");

  await adapter.hideComment("c_1003", true);
  expect(calls[1]!.url).toContain("c_1003");
  expect(calls[1]!.body.is_hidden).toBe(true);
});
