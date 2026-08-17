import { expect, test } from "bun:test";

import { createMemoryState } from "@chat-adapter/state-memory";
import { Chat } from "chat";
import type { CardElement, StreamChunk } from "chat";

import { createMessengerAdapter } from "../src/index.ts";

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
  return "https://example.test/webhooks/messenger";
}

function messengerAdapter(options: { fetch?: typeof fetch } = {}) {
  return createMessengerAdapter({
    appSecret: APP_SECRET,
    verifyToken: VERIFY_TOKEN,
    accessToken: "page_token_1",
    pageId: PAGE_ID,
    ...options,
  });
}

/** Decode the form-encoded body the graph client sends. */
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

function okGraphFetch(calls: Array<{ url: string; body: Record<string, unknown> }>): typeof fetch {
  return (async (input: string | URL | Request, init?: RequestInit) => {
    calls.push({ url: String(input), body: decodeFormBody(init) });
    return new Response(JSON.stringify({ message_id: "m_reply_1", recipient_id: "psid_1001" }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }) as unknown as typeof fetch;
}

test("challenge GET echoes the challenge when the token matches", async () => {
  const adapter = messengerAdapter();
  const url = `${webhookUrl()}?hub.mode=subscribe&hub.verify_token=${VERIFY_TOKEN}&hub.challenge=abc123`;
  const res = await adapter.handleWebhook(new Request(url));
  expect(res.status).toBe(200);
  expect(await res.text()).toBe("abc123");
});

test("challenge GET rejects a bad verify token", async () => {
  const adapter = messengerAdapter();
  const url = `${webhookUrl()}?hub.mode=subscribe&hub.verify_token=wrong&hub.challenge=abc123`;
  const res = await adapter.handleWebhook(new Request(url));
  expect(res.status).toBe(403);
});

test("POST without a signature is rejected", async () => {
  const adapter = messengerAdapter();
  const res = await adapter.handleWebhook(
    new Request(webhookUrl(), { method: "POST", body: "{}" }),
  );
  expect(res.status).toBe(403);
});

test("POST with an invalid signature is rejected", async () => {
  const adapter = messengerAdapter();
  const res = await adapter.handleWebhook(
    new Request(webhookUrl(), {
      method: "POST",
      headers: { "X-Hub-Signature-256": "sha256=deadbeef" },
      body: JSON.stringify({ object: "page", entry: [] }),
    }),
  );
  expect(res.status).toBe(403);
});

test("parseWebhookEvents verifies and normalizes without a Chat runtime", async () => {
  const fixture = JSON.stringify(
    (await import("./fixtures/fb-messaging.json", { with: { type: "json" } })).default,
  );
  const signature = await signBody(fixture, APP_SECRET);
  const adapter = messengerAdapter();

  const result = await adapter.parseWebhookEvents(
    new Request(webhookUrl(), {
      method: "POST",
      headers: { "X-Hub-Signature-256": `sha256=${signature}` },
      body: fixture,
    }),
  );

  expect(result.kind).toBe("events");
  if (result.kind !== "events") throw new Error("expected normalized events");
  expect(result.events).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        kind: "message",
        eventId: "m_inbound_1",
        threadId: `messenger:${PAGE_ID}:psid_1001`,
      }),
      expect.objectContaining({
        kind: "action",
        threadId: `messenger:${PAGE_ID}:psid_1001`,
        action: { id: "approve", value: "order_1" },
      }),
    ]),
  );
  expect(result.events.find((event) => event.kind === "message")?.message?.id).toBe("m_inbound_1");
});

test("webhook dispatches messages, postbacks, and reactions", async () => {
  const fixture = JSON.stringify(
    (await import("./fixtures/fb-messaging.json", { with: { type: "json" } })).default,
  );
  const signature = await signBody(fixture, APP_SECRET);

  const adapter = messengerAdapter({ fetch: okGraphFetch([]) });
  const chat = new Chat({
    userName: "test-bot",
    adapters: { messenger: adapter },
    state: createMemoryState(),
  });

  const received: Array<{ text: string; threadId: string; id: string }> = [];
  const actions: Array<{ actionId: string; value?: string }> = [];
  const reactions: Array<{ messageId: string; added: boolean }> = [];

  chat.onDirectMessage(async (_thread, message) => {
    received.push({ text: message.text, threadId: message.threadId, id: message.id });
  });
  chat.onAction((event) => {
    actions.push({ actionId: event.actionId, value: event.value });
  });
  chat.onReaction((event) => {
    reactions.push({ messageId: event.messageId, added: event.added });
  });

  const res = await chat.webhooks.messenger(
    new Request(webhookUrl(), {
      method: "POST",
      headers: { "X-Hub-Signature-256": `sha256=${signature}` },
      body: fixture,
    }),
  );
  expect(res.status).toBe(200);

  // Inbound message dispatched; page echo is cached, not dispatched.
  expect(received).toEqual([
    {
      text: "Hi, is this in stock?",
      threadId: `messenger:${PAGE_ID}:psid_1001`,
      id: "m_inbound_1",
    },
  ]);
  expect(actions).toEqual([{ actionId: "approve", value: "order_1" }]);
  expect(reactions).toEqual([{ messageId: "m_inbound_1", added: true }]);

  // Echo was cached: history includes inbound + echo messages.
  const history = await adapter.fetchMessages(`messenger:${PAGE_ID}:psid_1001`);
  expect(history.messages.map((m) => m.id)).toEqual(["m_inbound_1", "m_echo_1"]);
});

test("fetchMessages paginates the cache", async () => {
  const adapter = messengerAdapter();
  for (let i = 0; i < 5; i++) {
    adapter.parseMessage({
      sender: { id: "psid_1001" },
      recipient: { id: PAGE_ID },
      timestamp: 1723680000000 + i,
      message: { mid: `m_seq_${i}`, text: `msg ${i}` },
    });
  }
  const page = await adapter.fetchMessages(`messenger:${PAGE_ID}:psid_1001`, { limit: 2 });
  expect(page.messages.map((m) => m.id)).toEqual(["m_seq_3", "m_seq_4"]);
  expect(page.nextCursor).toBe("m_seq_3");
  const older = await adapter.fetchMessages(`messenger:${PAGE_ID}:psid_1001`, {
    limit: 2,
    cursor: page.nextCursor,
  });
  expect(older.messages.map((m) => m.id)).toEqual(["m_seq_1", "m_seq_2"]);
});

test("postMessage sends text through the Messenger Send API", async () => {
  const calls: Array<{ url: string; body: Record<string, unknown> }> = [];
  const adapter = messengerAdapter({ fetch: okGraphFetch(calls) });
  const result = await adapter.postMessage(
    `messenger:${PAGE_ID}:psid_1001`,
    "Yes, it is in stock!",
  );

  expect(result.id).toBe("m_reply_1");
  expect(calls).toHaveLength(1);
  expect(calls[0]!.url).toContain("/messages");
  expect(calls[0]!.body).toEqual({
    recipient: { id: "psid_1001" },
    messaging_type: "RESPONSE",
    message: { text: "Yes, it is in stock!" },
  });
});

test("postMessage truncates long text", async () => {
  const calls: Array<{ url: string; body: Record<string, unknown> }> = [];
  const adapter = messengerAdapter({ fetch: okGraphFetch(calls) });
  await adapter.postMessage(`messenger:${PAGE_ID}:psid_1001`, "x".repeat(2100));
  const sent = calls[0]!.body.message as { text: string };
  expect(sent.text.length).toBe(2000);
  expect(sent.text.endsWith("...")).toBe(true);
});

test("postMessage converts a card to a Generic template", async () => {
  const calls: Array<{ url: string; body: Record<string, unknown> }> = [];
  const adapter = messengerAdapter({ fetch: okGraphFetch(calls) });
  const card: CardElement = {
    type: "card",
    title: "Confirm order",
    children: [
      {
        type: "actions",
        children: [{ type: "button", id: "confirm", label: "Confirm", value: "o1" }],
      },
    ],
  };
  await adapter.postMessage(`messenger:${PAGE_ID}:psid_1001`, { card });
  const message = calls[0]!.body.message as {
    attachment: { type: string; payload: { template_type: string } };
  };
  expect(message.attachment.type).toBe("template");
  expect(message.attachment.payload.template_type).toBe("generic");
});

test("stream buffers chunks into one message", async () => {
  const calls: Array<{ url: string; body: Record<string, unknown> }> = [];
  const adapter = messengerAdapter({ fetch: okGraphFetch(calls) });

  async function* chunks(): AsyncGenerator<string | StreamChunk> {
    yield "Hello ";
    yield { type: "markdown_text", text: "world" };
  }
  await adapter.stream(`messenger:${PAGE_ID}:psid_1001`, chunks());

  expect(calls).toHaveLength(1);
  expect((calls[0]!.body.message as { text: string }).text.trim()).toBe("Hello world");
});

test("startTyping and markAsRead send sender actions", async () => {
  const calls: Array<{ url: string; body: Record<string, unknown> }> = [];
  const adapter = messengerAdapter({ fetch: okGraphFetch(calls) });

  await adapter.startTyping(`messenger:${PAGE_ID}:psid_1001`);
  expect(calls[0]!.body.sender_action).toBe("typing_on");

  await adapter.markAsRead(`messenger:${PAGE_ID}:psid_1001`, "m_inbound_1");
  expect(calls[1]!.body.sender_action).toBe("mark_seen");
});

test("thread id round trips", () => {
  const adapter = messengerAdapter();
  expect(adapter.encodeThreadId({ userId: "psid_1001" })).toBe(`messenger:${PAGE_ID}:psid_1001`);
  expect(adapter.decodeThreadId(`messenger:${PAGE_ID}:psid_1001`)).toEqual({
    userId: "psid_1001",
  });
  expect(() => adapter.decodeThreadId("instagram:1:2")).toThrow();
});

test("thread ids stay isolated across connected Pages", () => {
  const otherPage = createMessengerAdapter({
    appSecret: APP_SECRET,
    verifyToken: VERIFY_TOKEN,
    accessToken: "page_token_2",
    pageId: "PAGE_ID_456",
  });

  expect(adapterThreadId(messengerAdapter(), "psid_1001")).not.toBe(
    adapterThreadId(otherPage, "psid_1001"),
  );
});

function adapterThreadId(adapter: ReturnType<typeof messengerAdapter>, userId: string): string {
  return adapter.encodeThreadId({ userId });
}
