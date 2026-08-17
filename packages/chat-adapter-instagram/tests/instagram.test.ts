import { expect, test } from "bun:test";

import { createMemoryState } from "@chat-adapter/state-memory";
import { Chat } from "chat";

import { createInstagramAdapter } from "../src/index.ts";

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

function instagramAdapter(options: { fetch?: typeof fetch } = {}) {
  return createInstagramAdapter({
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

/** Mock transport that returns a send result for any POST. */
function okGraphFetch(calls: Array<{ url: string; body: Record<string, unknown> }>): typeof fetch {
  return (async (input: string | URL | Request, init?: RequestInit) => {
    calls.push({ url: String(input), body: decodeFormBody(init) });
    if (String(input).includes("message_attachments")) {
      return new Response(JSON.stringify({ attachment_id: "att_1" }), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    }
    return new Response(JSON.stringify({ message_id: "agm_reply_1", recipient_id: "igsid_2001" }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }) as unknown as typeof fetch;
}

test("challenge GET echoes the challenge when the token matches", async () => {
  const adapter = instagramAdapter();
  const url = `${webhookUrl()}?hub.mode=subscribe&hub.verify_token=${VERIFY_TOKEN}&hub.challenge=xyz789`;
  const res = await adapter.handleWebhook(new Request(url));
  expect(res.status).toBe(200);
  expect(await res.text()).toBe("xyz789");
});

test("POST with an invalid signature is rejected", async () => {
  const adapter = instagramAdapter();
  const res = await adapter.handleWebhook(
    new Request(webhookUrl(), {
      method: "POST",
      headers: { "X-Hub-Signature-256": "sha256=deadbeef" },
      body: JSON.stringify({ object: "instagram", entry: [] }),
    }),
  );
  expect(res.status).toBe(403);
});

test("webhook dispatches DMs and quick replies", async () => {
  const fixture = JSON.stringify(
    (await import("./fixtures/ig-messaging.json", { with: { type: "json" } })).default,
  );
  const signature = await signBody(fixture, APP_SECRET);

  const adapter = instagramAdapter({ fetch: okGraphFetch([]) });
  const chat = new Chat({
    userName: "test-bot",
    adapters: { instagram: adapter },
    state: createMemoryState(),
  });

  const received: Array<{ text: string; threadId: string; id: string }> = [];
  const actions: Array<{ actionId: string }> = [];

  chat.onDirectMessage(async (_thread, message) => {
    received.push({ text: message.text, threadId: message.threadId, id: message.id });
  });
  chat.onAction((event) => {
    actions.push({ actionId: event.actionId });
  });

  const res = await chat.webhooks.instagram(
    new Request(webhookUrl(), {
      method: "POST",
      headers: { "X-Hub-Signature-256": `sha256=${signature}` },
      body: fixture,
    }),
  );
  expect(res.status).toBe(200);
  expect(received).toEqual([
    {
      text: "How much is shipping?",
      threadId: `instagram:${ACCOUNT_ID}:igsid_2001`,
      id: "agm_inbound_1",
    },
  ]);
  expect(actions).toEqual([{ actionId: "order_now" }]);
});

test("postMessage sends text through the Instagram messaging API", async () => {
  const calls: Array<{ url: string; body: Record<string, unknown> }> = [];
  const adapter = instagramAdapter({ fetch: okGraphFetch(calls) });
  const result = await adapter.postMessage(
    `instagram:${ACCOUNT_ID}:igsid_2001`,
    "Shipping is free over $50!",
  );

  expect(result.id).toBe("agm_reply_1");
  expect(calls).toHaveLength(1);
  expect(calls[0]!.url).toContain("/messages");
  expect(calls[0]!.body).toEqual({
    recipient: { id: "igsid_2001" },
    messaging_type: "RESPONSE",
    message: { text: "Shipping is free over $50!" },
  });
});

test("sendHumanAgentMessage uses the HUMAN_AGENT tag", async () => {
  const calls: Array<{ url: string; body: Record<string, unknown> }> = [];
  const adapter = instagramAdapter({ fetch: okGraphFetch(calls) });
  await adapter.sendHumanAgentMessage(
    `instagram:${ACCOUNT_ID}:igsid_2001`,
    "Our support team will help you.",
  );
  expect(calls[0]!.body).toEqual({
    recipient: { id: "igsid_2001" },
    messaging_type: "MESSAGE_TAG",
    tag: "HUMAN_AGENT",
    message: { text: "Our support team will help you." },
  });
});

test("postMessage truncates text to 1000 UTF-8 bytes", async () => {
  const calls: Array<{ url: string; body: Record<string, unknown> }> = [];
  const adapter = instagramAdapter({ fetch: okGraphFetch(calls) });
  await adapter.postMessage(`instagram:${ACCOUNT_ID}:igsid_2001`, "🔥".repeat(500));
  const sent = calls[0]!.body.message as { text: string };
  expect(new TextEncoder().encode(sent.text).byteLength).toBeLessThanOrEqual(1000);
});

test("postMessage uploads binary media and sends the attachment id", async () => {
  const calls: Array<{ url: string; body: Record<string, unknown> }> = [];
  const adapter = instagramAdapter({ fetch: okGraphFetch(calls) });
  await adapter.postMessage(`instagram:${ACCOUNT_ID}:igsid_2001`, {
    raw: "",
    files: [
      {
        data: new Blob([new Uint8Array([1, 2, 3])], { type: "image/png" }),
        filename: "photo.png",
        mimeType: "image/png",
      },
    ],
  });

  const uploadCall = calls.find((c) => c.url.includes("message_attachments"));
  expect(uploadCall).toBeDefined();
  const sendCall = calls.find((c) => !c.url.includes("message_attachments"))!;
  expect(sendCall.body).toEqual({
    recipient: { id: "igsid_2001" },
    message: {
      attachment: { type: "image", payload: { attachment_id: "att_1" } },
    },
  });
});

test("postMessage sends media by public URL", async () => {
  const calls: Array<{ url: string; body: Record<string, unknown> }> = [];
  const adapter = instagramAdapter({ fetch: okGraphFetch(calls) });
  await adapter.postMessage(`instagram:${ACCOUNT_ID}:igsid_2001`, {
    raw: "",
    attachments: [{ type: "image", url: "https://cdn.example.com/photo.jpg" }],
  });
  expect(calls[0]!.body).toEqual({
    recipient: { id: "igsid_2001" },
    message: {
      attachment: { type: "image", payload: { url: "https://cdn.example.com/photo.jpg" } },
    },
  });
});

test("inbound story replies surface as attachments", async () => {
  const adapter = instagramAdapter();
  const message = adapter.parseMessage({
    sender: { id: "igsid_2001" },
    recipient: { id: ACCOUNT_ID },
    timestamp: 1723680000000,
    message: {
      mid: "agm_story_1",
      reply_to: { story: { id: "story_1", url: "https://cdn.example.com/story.jpg" } },
    },
  });
  expect(message.attachments).toHaveLength(1);
  expect(message.attachments[0]!.type).toBe("image");
  expect(message.attachments[0]!.url).toBe("https://cdn.example.com/story.jpg");
});

test("changes-field edits and reactions dispatch through the DM adapter", async () => {
  const fixture = JSON.stringify(
    (await import("./fixtures/ig-messaging-changes.json", { with: { type: "json" } })).default,
  );
  const signature = await signBody(fixture, APP_SECRET);

  const adapter = instagramAdapter({ fetch: okGraphFetch([]) });
  const chat = new Chat({
    userName: "test-bot",
    adapters: { instagram: adapter },
    state: createMemoryState(),
  });

  const received: Array<{ id: string; text: string }> = [];
  const updated: Array<{ id: string; text: string; threadId: string; edited: boolean }> = [];
  const reactions: Array<{ messageId: string; added: boolean }> = [];

  chat.onDirectMessage(async (_thread, message) => {
    received.push({ id: message.id, text: message.text });
  });
  chat.onMessageUpdated(async (thread, message) => {
    updated.push({
      id: message.id,
      text: message.text,
      threadId: thread.id,
      edited: message.metadata.edited,
    });
  });
  chat.onReaction((event) => {
    reactions.push({ messageId: event.messageId, added: event.added });
  });

  const res = await chat.webhooks.instagram(
    new Request(webhookUrl(), {
      method: "POST",
      headers: { "X-Hub-Signature-256": `sha256=${signature}` },
      body: fixture,
    }),
  );
  expect(res.status).toBe(200);
  expect(received).toEqual([{ id: "agm_edit_1", text: "Original text" }]);
  // The edit resolves to the cached original message's thread (customer keyed),
  // not the editor key.
  expect(updated).toEqual([
    {
      id: "agm_edit_1",
      text: "Edited text",
      threadId: `instagram:${ACCOUNT_ID}:igsid_2001`,
      edited: true,
    },
  ]);
  expect(reactions).toEqual([{ messageId: "agm_edit_1", added: true }]);
});

test("parseWebhookEvents preserves the cached thread for changes-field edits", async () => {
  const fixture = JSON.stringify(
    (await import("./fixtures/ig-messaging-changes.json", { with: { type: "json" } })).default,
  );
  const signature = await signBody(fixture, APP_SECRET);
  const adapter = instagramAdapter();

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
        kind: "message_updated",
        eventId: "agm_edit_1",
        threadId: `instagram:${ACCOUNT_ID}:igsid_2001`,
        message: expect.objectContaining({
          id: "agm_edit_1",
          threadId: `instagram:${ACCOUNT_ID}:igsid_2001`,
        }),
      }),
    ]),
  );
});

test("thread id round trips", () => {
  const adapter = instagramAdapter();
  const id = adapter.encodeThreadId({ accountId: ACCOUNT_ID, userId: "igsid_2001" });
  expect(id).toBe(`instagram:${ACCOUNT_ID}:igsid_2001`);
  expect(adapter.decodeThreadId(id)).toEqual({ accountId: ACCOUNT_ID, userId: "igsid_2001" });
  expect(() => adapter.decodeThreadId("instagram:other:user")).toThrow();
});
