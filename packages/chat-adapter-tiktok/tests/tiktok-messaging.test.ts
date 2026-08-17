import { expect, test } from "bun:test";

import { createMemoryState } from "@chat-adapter/state-memory";
import { Chat } from "chat";

import { createTikTokMessagingAdapter } from "../src/index.ts";

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

function dmAdapter(options: { fetch?: typeof fetch } = {}) {
  return createTikTokMessagingAdapter({
    appSecret: APP_SECRET,
    accessToken: ACCESS_TOKEN,
    businessId: BUSINESS_ID,
    ...options,
  });
}

function okTikTokFetch(calls: Array<{ method: string; url: string; body: unknown }>): typeof fetch {
  return (async (input: string | URL | Request, init?: RequestInit) => {
    calls.push({
      method: init?.method ?? "GET",
      url: String(input),
      body: init?.body ? JSON.parse(String(init.body)) : null,
    });
    return new Response(
      JSON.stringify({
        code: 0,
        message: "ok",
        request_id: "req_1",
        data: { message: { message_id: "m_sent_1" } },
      }),
      { status: 200, headers: { "content-type": "application/json" } },
    );
  }) as unknown as typeof fetch;
}

test("challenge GET echoes the challenge", async () => {
  const adapter = dmAdapter();
  const res = await adapter.handleWebhook(new Request(`${webhookUrl()}?challenge=abc123`));
  expect(res.status).toBe(200);
  expect(await res.text()).toBe("abc123");
});

test("POST without a valid signature is rejected", async () => {
  const adapter = dmAdapter();
  const res = await adapter.handleWebhook(
    new Request(webhookUrl(), {
      method: "POST",
      headers: { "TikTok-Signature": "t=0,s=deadbeef" },
      body: "{}",
    }),
  );
  expect(res.status).toBe(403);
});

test("parseWebhookEvents exposes normalized DM events without a Chat runtime", async () => {
  const fixture = JSON.stringify(
    (await import("./fixtures/tiktok-dm.json", { with: { type: "json" } })).default,
  );
  const signature = await signTikTokBody(fixture, APP_SECRET);
  const adapter = dmAdapter();

  const result = await adapter.parseWebhookEvents(
    new Request(webhookUrl(), {
      method: "POST",
      headers: { "TikTok-Signature": signature },
      body: fixture,
    }),
  );

  expect(result.kind).toBe("events");
  if (result.kind !== "events") throw new Error("expected normalized events");
  expect(result.events).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        kind: "message",
        threadId: `tiktok:${BUSINESS_ID}:dm:conv_1`,
      }),
      expect.objectContaining({
        kind: "read",
        threadId: `tiktok:${BUSINESS_ID}:dm:conv_1`,
      }),
    ]),
  );
  expect(result.events.find((event) => event.kind === "message")?.message?.id).toBe("m1");
});

test("webhook dispatches inbound DMs, caches echoes, and ignores read receipts", async () => {
  const fixture = JSON.stringify(
    (await import("./fixtures/tiktok-dm.json", { with: { type: "json" } })).default,
  );
  const signature = await signTikTokBody(fixture, APP_SECRET);

  const adapter = dmAdapter();
  const chat = new Chat({
    userName: "test-bot",
    adapters: { tiktok: adapter },
    state: createMemoryState(),
  });

  const received: Array<{ text: string; threadId: string; id: string }> = [];
  chat.onDirectMessage(async (_thread, message) => {
    received.push({ text: message.text, threadId: message.threadId, id: message.id });
  });

  const res = await chat.webhooks.tiktok(
    new Request(webhookUrl(), {
      method: "POST",
      headers: { "TikTok-Signature": signature },
      body: fixture,
    }),
  );
  expect(res.status).toBe(200);

  // Inbound message dispatched on the conversation thread; the business echo
  // is cached, not dispatched; the mark-read event is a no-op.
  expect(received).toEqual([
    { text: "How much is shipping?", threadId: `tiktok:${BUSINESS_ID}:dm:conv_1`, id: "m1" },
  ]);
});

test("postMessage sends text to the conversation", async () => {
  const calls: Array<{ method: string; url: string; body: unknown }> = [];
  const adapter = dmAdapter({ fetch: okTikTokFetch(calls) });

  const result = await adapter.postMessage(`tiktok:${BUSINESS_ID}:dm:conv_1`, "Shipping is free!");

  expect(result.id).toBe("m_sent_1");
  expect(calls).toHaveLength(1);
  expect(calls[0]!.url).toContain("/business/message/send/");
  expect(calls[0]!.body).toEqual({
    business_id: BUSINESS_ID,
    recipient_type: "CONVERSATION",
    recipient: "conv_1",
    message_type: "TEXT",
    text: { body: "Shipping is free!" },
  });
});

test("startTyping and markAsRead send sender actions", async () => {
  const calls: Array<{ method: string; url: string; body: unknown }> = [];
  const adapter = dmAdapter({ fetch: okTikTokFetch(calls) });

  await adapter.startTyping(`tiktok:${BUSINESS_ID}:dm:conv_1`);
  expect((calls[0]!.body as { message_type: string; sender_action: string }).message_type).toBe(
    "SENDER_ACTION",
  );
  expect((calls[0]!.body as { sender_action: string }).sender_action).toBe("TYPING");

  await adapter.markAsRead(`tiktok:${BUSINESS_ID}:dm:conv_1`, "m1");
  expect((calls[1]!.body as { sender_action: string }).sender_action).toBe("MARK_READ");
});

test("thread id round trips", () => {
  const adapter = dmAdapter();
  expect(adapter.encodeThreadId({ conversationId: "conv_1" })).toBe(
    `tiktok:${BUSINESS_ID}:dm:conv_1`,
  );
  expect(adapter.decodeThreadId(`tiktok:${BUSINESS_ID}:dm:conv_1`)).toEqual({
    conversationId: "conv_1",
  });
});
