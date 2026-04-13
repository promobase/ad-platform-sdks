import { afterEach, expect, mock, test } from "bun:test";
import { createFacebookPageClient } from "../../src/clients/facebook/index.ts";
import { createInstagramClient } from "../../src/clients/instagram/index.ts";
import { createThreadsClient } from "../../src/clients/threads/index.ts";
import { createClient } from "../../src/generated/index.ts";

const originalFetch = globalThis.fetch;

function mockFetchSequence(responses: { status?: number; body: unknown }[]) {
  let callIndex = 0;
  globalThis.fetch = mock(() => {
    const resp = responses[callIndex++] ?? responses[responses.length - 1]!;
    return Promise.resolve(
      new Response(JSON.stringify(resp.body), {
        status: resp.status ?? 200,
        headers: { "Content-Type": "application/json" },
      }),
    );
  }) as unknown as typeof fetch;
}

/** Parse URLSearchParams body from a fetch call, handling JSON-encoded nested objects. */
function parseFormBody(init: RequestInit): Record<string, unknown> {
  const params = new URLSearchParams(init.body as string);
  const result: Record<string, unknown> = {};
  for (const [key, value] of params.entries()) {
    try {
      result[key] = JSON.parse(value);
    } catch {
      result[key] = value;
    }
  }
  return result;
}

afterEach(() => {
  globalThis.fetch = originalFetch;
});

const testPolling = {
  delay: async () => {},
  photoIntervalMs: 0,
  videoIntervalMs: 0,
  maxAttempts: 3,
};

// --- Instagram Messaging ---

test("IG messaging.send sends a text DM", async () => {
  mockFetchSequence([{ body: { message_id: "mid_1", recipient_id: "user_1" } }]);
  const api = createClient({ accessToken: "tok" });
  const ig = createInstagramClient({ api, igAccountId: "ig_456", polling: testPolling });

  const result = await ig.messaging.send("user_1", { text: "Hello!" });
  expect(result.messageId).toBe("mid_1");
  expect(result.recipientId).toBe("user_1");

  const [url, init] = (globalThis.fetch as any).mock.calls[0] as [string, RequestInit];
  expect(url).toContain("ig_456/messages");
  const body = parseFormBody(init);
  expect((body.recipient as any).id).toBe("user_1");
  expect((body.message as any).text).toBe("Hello!");
});

test("IG messaging.send sends an attachment DM", async () => {
  mockFetchSequence([{ body: { message_id: "mid_2", recipient_id: "user_2" } }]);
  const api = createClient({ accessToken: "tok" });
  const ig = createInstagramClient({ api, igAccountId: "ig_456", polling: testPolling });

  const result = await ig.messaging.send("user_2", {
    attachmentUrl: "https://example.com/pic.jpg",
  });
  expect(result.messageId).toBe("mid_2");

  const [, init] = (globalThis.fetch as any).mock.calls[0] as [string, RequestInit];
  const body = parseFormBody(init);
  expect((body.message as any).attachment.type).toBe("image");
  expect((body.message as any).attachment.payload.url).toBe("https://example.com/pic.jpg");
});

test("IG messaging.reply replies to a specific message", async () => {
  mockFetchSequence([{ body: { message_id: "mid_3", recipient_id: "user_1" } }]);
  const api = createClient({ accessToken: "tok" });
  const ig = createInstagramClient({ api, igAccountId: "ig_456", polling: testPolling });

  const result = await ig.messaging.reply("user_1", "mid_original", "Thanks!");
  expect(result.messageId).toBe("mid_3");

  const [, init] = (globalThis.fetch as any).mock.calls[0] as [string, RequestInit];
  const body = parseFormBody(init);
  expect((body.reply_to as any).mid).toBe("mid_original");
  expect((body.message as any).text).toBe("Thanks!");
});

test("IG messaging.privateReply sends a private reply to a comment", async () => {
  mockFetchSequence([{ body: { message_id: "mid_4", recipient_id: "user_3" } }]);
  const api = createClient({ accessToken: "tok" });
  const ig = createInstagramClient({ api, igAccountId: "ig_456", polling: testPolling });

  const result = await ig.messaging.privateReply("comment_123", "Thanks for your feedback!");
  expect(result.messageId).toBe("mid_4");

  const [, init] = (globalThis.fetch as any).mock.calls[0] as [string, RequestInit];
  const body = parseFormBody(init);
  expect((body.recipient as any).comment_id).toBe("comment_123");
});

test("IG messaging.privateReply rejects text over 1000 chars", async () => {
  const api = createClient({ accessToken: "tok" });
  const ig = createInstagramClient({ api, igAccountId: "ig_456", polling: testPolling });

  const longText = "a".repeat(1001);
  expect(ig.messaging.privateReply("c1", longText)).rejects.toThrow("1000 characters");
});

// --- Instagram Comments (reply, hide, delete) ---

test("IG comments.reply replies to a comment", async () => {
  mockFetchSequence([{ body: { id: "reply_1" } }]);
  const api = createClient({ accessToken: "tok" });
  const ig = createInstagramClient({ api, igAccountId: "ig_456", polling: testPolling });

  const result = await ig.comments.reply("comment_1", "Great point!");
  expect(result.id).toBe("reply_1");

  const [url] = (globalThis.fetch as any).mock.calls[0] as [string];
  expect(url).toContain("comment_1/replies");
});

test("IG comments.hide hides a comment", async () => {
  mockFetchSequence([{ body: { success: true } }]);
  const api = createClient({ accessToken: "tok" });
  const ig = createInstagramClient({ api, igAccountId: "ig_456", polling: testPolling });

  await ig.comments.hide("comment_2");

  const [url, init] = (globalThis.fetch as any).mock.calls[0] as [string, RequestInit];
  expect(url).toContain("comment_2");
  const body = parseFormBody(init);
  expect(body.hide).toBe(true);
});

test("IG comments.delete deletes a comment", async () => {
  mockFetchSequence([{ body: { success: true } }]);
  const api = createClient({ accessToken: "tok" });
  const ig = createInstagramClient({ api, igAccountId: "ig_456", polling: testPolling });

  await ig.comments.delete("comment_3");

  const [url, init] = (globalThis.fetch as any).mock.calls[0] as [string, RequestInit];
  expect(url).toContain("comment_3");
  expect(init.method).toBe("DELETE");
});

// --- Facebook Messaging ---

test("FB messaging.send sends a Messenger DM", async () => {
  mockFetchSequence([{ body: { message_id: "mid_fb_1", recipient_id: "psid_1" } }]);
  const api = createClient({ accessToken: "tok" });
  const fb = createFacebookPageClient({ api, pageId: "page_1", accessToken: "tok" });

  const result = await fb.messaging.send("psid_1", { text: "Hello from Page!" });
  expect(result.messageId).toBe("mid_fb_1");
  expect(result.recipientId).toBe("psid_1");

  const [url, init] = (globalThis.fetch as any).mock.calls[0] as [string, RequestInit];
  expect(url).toContain("page_1/messages");
  const body = parseFormBody(init);
  expect((body.recipient as any).id).toBe("psid_1");
  expect(body.messaging_type).toBe("RESPONSE");
  expect((body.message as any).text).toBe("Hello from Page!");
});

test("FB messaging.reply replies to a message", async () => {
  mockFetchSequence([{ body: { message_id: "mid_fb_2", recipient_id: "psid_1" } }]);
  const api = createClient({ accessToken: "tok" });
  const fb = createFacebookPageClient({ api, pageId: "page_1", accessToken: "tok" });

  const result = await fb.messaging.reply("psid_1", "mid_original", "Got it!");
  expect(result.messageId).toBe("mid_fb_2");

  const [, init] = (globalThis.fetch as any).mock.calls[0] as [string, RequestInit];
  const body = parseFormBody(init);
  expect((body.reply_to as any).mid).toBe("mid_original");
});

// --- Facebook Comments (reply, hide) ---

test("FB comments.reply creates a nested reply", async () => {
  mockFetchSequence([{ body: { id: "nested_1" } }]);
  const api = createClient({ accessToken: "tok" });
  const fb = createFacebookPageClient({ api, pageId: "page_1", accessToken: "tok" });

  const result = await fb.comments.reply("comment_fb_1", "Nested reply!");
  expect(result.id).toBe("nested_1");

  const [url] = (globalThis.fetch as any).mock.calls[0] as [string];
  expect(url).toContain("comment_fb_1/comments");
});

test("FB comments.hide hides a comment", async () => {
  mockFetchSequence([{ body: { success: true } }]);
  const api = createClient({ accessToken: "tok" });
  const fb = createFacebookPageClient({ api, pageId: "page_1", accessToken: "tok" });

  await fb.comments.hide("comment_fb_2");

  const [url, init] = (globalThis.fetch as any).mock.calls[0] as [string, RequestInit];
  expect(url).toContain("comment_fb_2");
  const body = parseFormBody(init);
  expect(body.is_hidden).toBe(true);
});

// --- Threads Reply Management ---

test("Threads replies.hide hides a reply", async () => {
  mockFetchSequence([{ body: { success: true } }]);
  const threads = createThreadsClient({
    accessToken: "tok",
    threadsUserId: "tu_1",
  });

  await threads.replies.hide("reply_t_1");

  const [url, init] = (globalThis.fetch as any).mock.calls[0] as [string, RequestInit];
  expect(url).toContain("reply_t_1/manage_reply");
  const body = parseFormBody(init);
  expect(body.hide).toBe(true);
});

test("Threads replies.hide can unhide a reply", async () => {
  mockFetchSequence([{ body: { success: true } }]);
  const threads = createThreadsClient({
    accessToken: "tok",
    threadsUserId: "tu_1",
  });

  await threads.replies.hide("reply_t_2", false);

  const [, init] = (globalThis.fetch as any).mock.calls[0] as [string, RequestInit];
  const body = parseFormBody(init);
  expect(body.hide).toBe(false);
});
