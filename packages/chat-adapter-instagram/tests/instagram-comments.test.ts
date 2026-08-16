import { expect, test } from "bun:test";

import { createMemoryState } from "@chat-adapter/state-memory";
import { Chat } from "chat";

import { createInstagramCommentsAdapter } from "../src/index.ts";

const APP_SECRET = "app_secret_2";
const VERIFY_TOKEN = "verify_tok_2";
const ACCOUNT_ID = "IG_ACCOUNT_1";

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
  return "https://example.test/webhooks/instagram";
}

function commentsAdapter(options: { fetch?: typeof fetch } = {}) {
  return createInstagramCommentsAdapter({
    appSecret: APP_SECRET,
    verifyToken: VERIFY_TOKEN,
    accessToken: "ig_token_1",
    accountId: ACCOUNT_ID,
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
  expect(adapter.encodeThreadId({ parentCommentId: "igc_1" })).toBe(
    `instagram:${ACCOUNT_ID}:comment:igc_1`,
  );
  expect(adapter.decodeThreadId(`instagram:${ACCOUNT_ID}:comment:igc_1`)).toEqual({
    parentCommentId: "igc_1",
  });
});

test("webhook dispatches adds and deletes across comment threads", async () => {
  const fixture = JSON.stringify(
    (await import("./fixtures/ig-comments.json", { with: { type: "json" } })).default,
  );
  const signature = await signBody(fixture, APP_SECRET);

  const adapter = commentsAdapter();
  const chat = new Chat({
    userName: "test-bot",
    adapters: { instagram_comments: adapter },
    state: createMemoryState(),
  });

  const received: Array<{ text: string; threadId: string; id: string }> = [];
  const deleted: Array<{ messageId: string }> = [];

  chat.onNewMessage(/.*/, async (_thread, message) => {
    received.push({ text: message.text, threadId: message.threadId, id: message.id });
  });
  chat.onMessageDeleted((event) => {
    deleted.push({ messageId: event.messageId });
  });

  const res = await chat.webhooks.instagram_comments(
    new Request(webhookUrl(), {
      method: "POST",
      headers: { "X-Hub-Signature-256": `sha256=${signature}` },
      body: fixture,
    }),
  );
  expect(res.status).toBe(200);

  expect(received).toEqual([
    { text: "Love this!", threadId: `instagram:${ACCOUNT_ID}:comment:igc_1`, id: "igc_1" },
    { text: "Also love it", threadId: `instagram:${ACCOUNT_ID}:comment:igc_1`, id: "igc_2" },
  ]);
  expect(deleted).toEqual([{ messageId: "igc_2" }]);
});

test("postMessage replies to the thread-root comment", async () => {
  const calls: Array<{ url: string; body: Record<string, unknown> }> = [];
  const mockFetch = (async (input: string | URL | Request, init?: RequestInit) => {
    calls.push({ url: String(input), body: decodeFormBody(init) });
    return new Response(JSON.stringify({ id: "igc_reply_1" }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }) as unknown as typeof fetch;

  const adapter = commentsAdapter({ fetch: mockFetch });
  const result = await adapter.postMessage(`instagram:${ACCOUNT_ID}:comment:igc_1`, "Thanks!");

  expect(result.id).toBe("igc_reply_1");
  expect(calls).toHaveLength(1);
  expect(calls[0]!.url).toContain("igc_1");
  expect(calls[0]!.url).toContain("replies");
  expect(calls[0]!.body.message).toBe("Thanks!");
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
  await adapter.deleteMessage(`instagram:${ACCOUNT_ID}:comment:igc_1`, "igc_2");
  expect(calls[0]!.method).toBe("DELETE");
  expect(calls[0]!.url).toContain("igc_2");

  await adapter.hideComment("igc_3", true);
  expect(calls[1]!.url).toContain("igc_3");
  expect(calls[1]!.body.hide).toBe(true);
});
