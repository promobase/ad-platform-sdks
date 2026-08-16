import { expect, test } from "bun:test";

import {
  type FacebookWebhookPayload,
  webhooks,
  WhatsAppApiError,
  WebhookParseError,
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

function readFacebookMessage(payload: FacebookWebhookPayload): string | undefined {
  const event = payload.entry[0]?.messaging?.[0];
  return event?.message?.text;
}

test("leaf exposes the ergonomic namespace without the generated root", () => {
  expect(webhooks.facebook.parse).toBeTypeOf("function");
  expect(webhooks.instagram.safeParse).toBeTypeOf("function");
  expect(webhooks.schemas.facebook).toBeDefined();
  expect(webhooks.verifyChallenge).toBeTypeOf("function");
});

test("leaf parses exact raw bytes and preserves provider fields", async () => {
  const body = JSON.stringify({
    object: "page",
    entry: [
      {
        id: "page_123",
        time: 1700000000,
        messaging: [
          {
            sender: { id: "user_123" },
            recipient: { id: "page_123" },
            timestamp: 1700000001,
            message: { mid: "mid_123", text: "Olá 👋", provider_extension: "keep-me" },
          },
        ],
      },
    ],
  });
  const bytes = new TextEncoder().encode(body);
  const result = await webhooks.facebook.safeParse({
    body: bytes,
    signature: await sign(body),
    appSecret: SECRET,
  });

  expect(result.success).toBe(true);
  if (result.success) {
    expect(readFacebookMessage(result.data)).toBe("Olá 👋");
    expect(result.data.entry[0]?.messaging?.[0]?.message).toHaveProperty(
      "provider_extension",
      "keep-me",
    );
  }
});

test("signature validation rejects malformed prefixes and lengths", async () => {
  const body = "{}";
  await expect(
    webhooks.facebook.parse({
      body,
      signature: "deadbeef",
      appSecret: SECRET,
    }),
  ).rejects.toMatchObject({ code: "INVALID_SIGNATURE" });

  await expect(
    webhooks.facebook.parse({
      body,
      signature: "sha256=not-hex",
      appSecret: SECRET,
    }),
  ).rejects.toMatchObject({ code: "INVALID_SIGNATURE" });
});

test("safeParse never throws for invalid JSON or payloads", async () => {
  const result = await webhooks.instagram.safeParse({
    body: "not-json",
    signature: await sign("not-json"),
    appSecret: SECRET,
  });

  expect(result.success).toBe(false);
  if (!result.success) {
    expect(result.error).toBeInstanceOf(WebhookParseError);
    expect(result.error.code).toBe("INVALID_JSON");
  }
});

test("challenge verification is strict and ergonomic", () => {
  expect(
    webhooks.verifyChallenge(
      {
        "hub.mode": "subscribe",
        "hub.challenge": "challenge-123",
        "hub.verify_token": "verify-token",
      },
      "verify-token",
    ),
  ).toEqual({ valid: true, challenge: "challenge-123" });

  expect(
    webhooks.verifyChallenge(
      {
        "hub.mode": "subscribe",
        "hub.challenge": "",
        "hub.verify_token": "verify-token",
      },
      "verify-token",
    ),
  ).toEqual({ valid: false });
});

test("Facebook parity covers Inbox DM, delivery, postback, referral, and feed changes", async () => {
  const payload = {
    object: "page",
    entry: [
      {
        id: "page_123",
        time: 1700000000,
        messaging: [
          {
            sender: { id: "user_123" },
            recipient: { id: "page_123" },
            timestamp: 1700000001,
            message: {
              mid: "mid_message",
              text: "hello",
              is_echo: true,
              quick_reply: { payload: "quick-1" },
              attachments: [{ type: "image", payload: { url: "https://example.com/a.jpg" } }],
            },
          },
          {
            sender: { id: "user_123" },
            recipient: { id: "page_123" },
            timestamp: 1700000002,
            postback: { title: "Start", payload: "start", referral: { ref: "campaign" } },
            referral: { source: "SHORTLINK", type: "OPEN_THREAD", ref: "campaign" },
          },
          {
            sender: { id: "page_123" },
            recipient: { id: "user_123" },
            timestamp: 1700000003,
            delivery: { mids: ["mid_message"], watermark: 1700000003, seq: 7 },
          },
          {
            sender: { id: "user_123" },
            recipient: { id: "page_123" },
            timestamp: 1700000004,
            reaction: { mid: "mid_message", action: "react", emoji: "❤️" },
            read: { watermark: 1700000004, seq: 8 },
            message_edit: { mid: "mid_message", text: "edited", num_edit: 1 },
          },
          {
            sender: { id: "user_123" },
            recipient: { id: "page_123" },
            timestamp: 1700000005,
            optin: { ref: "opt-in" },
            account_linking: { status: "linked", authorization_code: "auth-code" },
            pass_thread_control: { new_owner_app_id: "app_2", metadata: "handover" },
          },
        ],
        changes: [
          {
            field: "feed",
            value: {
              item: "comment",
              verb: "edited",
              comment_id: "comment_1",
              parent_id: "post_1",
              post_id: "post_1",
              message: "updated",
              from: { id: "user_123", name: "Customer" },
              created_time: 1700000005,
              is_hidden: false,
              post: { id: "post_1", permalink_url: "https://example.com/post" },
              reaction_type: "LIKE",
              photo_ids: ["photo_1"],
              provider_extension: "keep-me",
            },
          },
        ],
      },
    ],
  };
  const body = JSON.stringify(payload);
  const result = await webhooks.facebook.safeParse({
    body,
    signature: await sign(body),
    appSecret: SECRET,
  });

  expect(result.success).toBe(true);
  if (result.success) {
    expect(result.data.entry[0]?.messaging?.[1]?.postback?.payload).toBe("start");
    expect(result.data.entry[0]?.messaging?.[2]?.delivery?.mids).toEqual(["mid_message"]);
    expect(result.data.entry[0]?.changes?.[0]?.value).toHaveProperty(
      "provider_extension",
      "keep-me",
    );
    const kinds = webhooks.facebook.events(result.data).map((event) => event.type);
    expect(kinds).toContain("optin");
    expect(kinds).toContain("account_linking");
    expect(kinds).toContain("pass_thread_control");
  }
});

test("Instagram parity covers Inbox edits, unsends, unsupported messages, comments, and reactions", async () => {
  const payload = {
    object: "instagram",
    entry: [
      {
        id: "ig_123",
        time: 1700000000,
        messaging: [
          {
            sender: { id: "user_123" },
            recipient: { id: "ig_123" },
            timestamp: 1700000001,
            reply_to: { story: { id: "story_1", url: "https://example.com/story" } },
            message: {
              mid: "ig_mid_1",
              text: "hello",
              is_deleted: true,
              is_unsupported: true,
              attachments: [
                { type: "story_mention", payload: { url: "https://example.com/story" } },
              ],
            },
            postback: { title: "Action", payload: "action" },
            referral: { ref: "ig-campaign" },
            delivery: { mids: ["ig_mid_1"], watermark: 1700000002 },
            read: { mid: "ig_mid_1" },
            reaction: { mid: "ig_mid_1", action: "unreact", reaction: "❤️" },
            message_edit: { mid: "ig_mid_1", text: null, num_edit: 2 },
          },
        ],
        changes: [
          {
            field: "comments",
            value: {
              comment_id: "comment_1",
              text: "Nice post",
              timestamp: 1700000004,
              from: { username: "customer", self_ig_scoped_id: "scoped_1" },
              media: { id: "media_1", ad_id: "ad_1", original_media_id: "media_0" },
            },
          },
          {
            field: "message_edit",
            value: { mid: "ig_mid_1", text: null, num_edit: 2, from: { username: "customer" } },
          },
          {
            field: "message_reactions",
            value: {
              mid: "ig_mid_1",
              verb: "remove",
              reaction: "❤️",
              sender: { id: "user_123", username: "customer" },
            },
          },
          { field: "mentions", value: { media_id: "media_1", comment_id: "comment_1" } },
          { field: "live_comments", value: { id: "live_comment_1", text: "Live" } },
          { field: "story_insights", value: { impressions: 42 } },
        ],
        standby: [
          {
            sender: { id: "user_123" },
            recipient: { id: "ig_123" },
            timestamp: 1700000005,
            message: { mid: "standby_mid", text: "standby" },
          },
        ],
      },
    ],
  };
  const body = JSON.stringify(payload);
  const result = await webhooks.instagram.safeParse({
    body,
    signature: await sign(body),
    appSecret: SECRET,
  });

  expect(result.success).toBe(true);
  if (result.success) {
    const event = result.data.entry[0]?.messaging?.[0];
    expect(event?.message?.is_unsupported).toBe(true);
    expect(event?.reply_to?.story?.id).toBe("story_1");
    expect(event?.read?.mid).toBe("ig_mid_1");
    expect(result.data.entry[0]?.changes?.[2]?.value).toHaveProperty("sender");

    const extracted = webhooks.instagram.events(result.data);
    expect(extracted.map((item) => item.type)).toContain("message");
    expect(extracted.map((item) => item.type)).toContain("comment_change");
    expect(extracted.map((item) => item.type)).toContain("mention_change");
    expect(extracted.map((item) => item.type)).toContain("live_comment_change");
    expect(extracted.map((item) => item.type)).toContain("story_insights_change");
    expect(extracted.map((item) => item.type)).toContain("standby");
    for (const item of extracted) {
      switch (item.type) {
        case "message":
        case "echo":
          expect(item.data.message.mid).toBe("ig_mid_1");
          break;
        case "comment_change":
          expect(item.data.field).toBe("comments");
          break;
        case "message_reaction_change":
          expect(item.data.field).toBe("message_reactions");
          break;
        case "message_edit_change":
          expect(item.data.field).toBe("message_edit");
          break;
      }
    }
  }
});

test("WhatsApp parser covers inbound messages and durable status lifecycle", async () => {
  const payload = {
    object: "whatsapp_business_account",
    entry: [
      {
        id: "waba_123",
        changes: [
          {
            field: "messages",
            value: {
              messaging_product: "whatsapp",
              metadata: { display_phone_number: "+15550000000", phone_number_id: "phone_123" },
              contacts: [{ profile: { name: "Customer" }, wa_id: "15551112222" }],
              messages: [
                {
                  from: "15551112222",
                  id: "wamid.inbound",
                  timestamp: "1700000000",
                  type: "interactive",
                  interactive: {
                    type: "button_reply",
                    button_reply: { id: "yes", title: "Yes" },
                  },
                  referral: { source_type: "ad", source_url: "https://example.com/ad" },
                },
              ],
              statuses: [
                {
                  id: "wamid.outbound",
                  status: "delivered",
                  timestamp: "1700000001",
                  recipient_id: "15551112222",
                  conversation: { id: "conversation_1" },
                },
              ],
            },
          },
        ],
      },
    ],
  };
  const body = JSON.stringify(payload);
  const result = await webhooks.whatsapp.safeParse({
    body,
    signature: await sign(body),
    appSecret: SECRET,
  });

  expect(result.success).toBe(true);
  if (result.success) {
    const events = webhooks.whatsapp.events(result.data);
    expect(events.map((event) => event.type)).toEqual(["message", "status"]);
    if (events[0]?.type === "message") {
      expect(events[0].data.id).toBe("wamid.inbound");
      expect(events[0].phoneNumberId).toBe("phone_123");
    }
    if (events[1]?.type === "status") {
      expect(events[1].data.status).toBe("delivered");
    }
  }
});

test("WhatsApp client sends typed native fetch requests", async () => {
  let request: Request | undefined;
  const client = webhooks.whatsapp.createClient({
    phoneNumberId: "phone_123",
    accessToken: "secret-token",
    apiVersion: "v25.0",
    baseUrl: "https://graph.example.test",
    fetch: async (input, init) => {
      request = new Request(String(input), init);
      return new Response(
        JSON.stringify({ messaging_product: "whatsapp", messages: [{ id: "wamid.1" }] }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        },
      );
    },
  });

  const result = await client.sendText({ to: "15551112222", body: "Hello", previewUrl: true });
  expect(result.messages[0]?.id).toBe("wamid.1");
  expect(request?.url).toBe("https://graph.example.test/v25.0/phone_123/messages");
  expect(request?.headers.get("Authorization")).toBe("Bearer secret-token");
  expect(await request?.json()).toEqual({
    messaging_product: "whatsapp",
    to: "15551112222",
    type: "text",
    text: { body: "Hello", preview_url: true },
  });
});

test("WhatsApp client exposes typed provider error metadata", async () => {
  const client = webhooks.whatsapp.createClient({
    phoneNumberId: "phone_123",
    accessToken: "secret-token",
    fetch: async () =>
      new Response(
        JSON.stringify({
          error: {
            message: "Rate limited",
            type: "OAuthException",
            code: 4,
            fbtrace_id: "trace_1",
          },
        }),
        { status: 429 },
      ),
  });

  await expect(client.sendText({ to: "15551112222", body: "Hello" })).rejects.toBeInstanceOf(
    WhatsAppApiError,
  );
  try {
    await client.sendText({ to: "15551112222", body: "Hello" });
  } catch (error) {
    expect(error).toMatchObject({
      status: 429,
      providerCode: 4,
      fbtraceId: "trace_1",
      retryable: true,
    });
  }
});
