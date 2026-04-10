import { test, expect } from "bun:test";
import {
  verifyWebhookChallenge, verifyWebhookSignature,
  parseInstagramWebhook, parseFacebookWebhook, parseThreadsWebhook,
} from "../../src/clients/webhooks.ts";
import {
  igWebhookPayloadSchema,
  fbWebhookPayloadSchema,
  threadsWebhookPayloadSchema,
} from "../../src/clients/webhooks-schemas.ts";

// Shared helper: sign a body with HMAC-SHA256
async function signBody(body: string, secret: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw", encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" }, false, ["sign"],
  );
  const signed = await crypto.subtle.sign("HMAC", key, encoder.encode(body));
  const hex = Array.from(new Uint8Array(signed)).map(b => b.toString(16).padStart(2, "0")).join("");
  return `sha256=${hex}`;
}

// --- Challenge verification ---

test("verifyWebhookChallenge returns challenge on valid request", () => {
  const result = verifyWebhookChallenge(
    { "hub.mode": "subscribe", "hub.challenge": "test_challenge_123", "hub.verify_token": "my_token" },
    "my_token",
  );
  expect(result.valid).toBe(true);
  expect(result.challenge).toBe("test_challenge_123");
});

test("verifyWebhookChallenge rejects wrong verify_token", () => {
  const result = verifyWebhookChallenge(
    { "hub.mode": "subscribe", "hub.challenge": "test", "hub.verify_token": "wrong" },
    "correct_token",
  );
  expect(result.valid).toBe(false);
});

test("verifyWebhookChallenge rejects missing hub.mode", () => {
  const result = verifyWebhookChallenge(
    { "hub.challenge": "test", "hub.verify_token": "my_token" },
    "my_token",
  );
  expect(result.valid).toBe(false);
});

// --- Signature verification ---

test("verifyWebhookSignature validates correct HMAC signature", async () => {
  const body = '{"test":"data"}';
  const secret = "test_secret";
  const signature = await signBody(body, secret);
  const valid = await verifyWebhookSignature(body, signature, secret);
  expect(valid).toBe(true);
});

test("verifyWebhookSignature rejects wrong signature", async () => {
  const valid = await verifyWebhookSignature('{"test":"data"}', "sha256=deadbeef", "secret");
  expect(valid).toBe(false);
});

// --- Instagram webhook parsing ---

test("parseInstagramWebhook verifies signature and returns typed payload", async () => {
  const payload = {
    object: "instagram",
    entry: [{
      id: "ig_123",
      time: 1700000000,
      changes: [{ field: "comments", value: { id: "c1", text: "Hello", from: { id: "u1", username: "user1" } } }],
    }],
  };
  const body = JSON.stringify(payload);
  const signature = await signBody(body, "secret");

  const result = await parseInstagramWebhook({ body, signature, appSecret: "secret" });
  expect(result.object).toBe("instagram");
  const change = result.entry[0]!.changes![0]!;
  expect(change.field).toBe("comments");
  if (change.field === "comments") {
    expect(change.value.text).toBe("Hello");
  }
});

test("parseInstagramWebhook throws on invalid signature", async () => {
  const body = JSON.stringify({ object: "instagram", entry: [] });
  expect(
    parseInstagramWebhook({ body, signature: "sha256=bad", appSecret: "secret" }),
  ).rejects.toThrow("Invalid webhook signature");
});

test("parseInstagramWebhook throws on wrong object type (Zod validation)", async () => {
  const body = JSON.stringify({ object: "page", entry: [] });
  const signature = await signBody(body, "secret");
  expect(
    parseInstagramWebhook({ body, signature, appSecret: "secret" }),
  ).rejects.toThrow();
});

test("parseInstagramWebhook parses DM messaging events", async () => {
  const payload = {
    object: "instagram",
    entry: [{
      id: "ig_123",
      time: 1700000000,
      messaging: [{
        sender: { id: "sender_1" },
        recipient: { id: "recipient_1" },
        timestamp: 1700000001,
        message: { mid: "mid_1", text: "Hey there!" },
      }],
    }],
  };
  const body = JSON.stringify(payload);
  const signature = await signBody(body, "secret");

  const result = await parseInstagramWebhook({ body, signature, appSecret: "secret" });
  const msg = result.entry[0]!.messaging![0]!;
  expect(msg.sender.id).toBe("sender_1");
  expect(msg.message!.mid).toBe("mid_1");
  expect(msg.message!.text).toBe("Hey there!");
});

test("parseInstagramWebhook parses read receipt events", async () => {
  const payload = {
    object: "instagram",
    entry: [{
      id: "ig_123",
      time: 1700000000,
      messaging: [{
        sender: { id: "s1" },
        recipient: { id: "r1" },
        timestamp: 1700000001,
        read: { watermark: 1700000000 },
      }],
    }],
  };
  const body = JSON.stringify(payload);
  const signature = await signBody(body, "secret");

  const result = await parseInstagramWebhook({ body, signature, appSecret: "secret" });
  expect(result.entry[0]!.messaging![0]!.read!.watermark).toBe(1700000000);
});

test("parseInstagramWebhook parses reaction events", async () => {
  const payload = {
    object: "instagram",
    entry: [{
      id: "ig_123",
      time: 1700000000,
      messaging: [{
        sender: { id: "s1" },
        recipient: { id: "r1" },
        timestamp: 1700000001,
        reaction: { mid: "mid_1", action: "react", emoji: "\u2764\ufe0f" },
      }],
    }],
  };
  const body = JSON.stringify(payload);
  const signature = await signBody(body, "secret");

  const result = await parseInstagramWebhook({ body, signature, appSecret: "secret" });
  const reaction = result.entry[0]!.messaging![0]!.reaction!;
  expect(reaction.action).toBe("react");
  expect(reaction.emoji).toBe("\u2764\ufe0f");
});

// --- Zod validation catches malformed payloads ---

test("igWebhookPayloadSchema rejects missing required fields", () => {
  // missing 'entry'
  expect(() => igWebhookPayloadSchema.parse({ object: "instagram" })).toThrow();
  // missing 'object'
  expect(() => igWebhookPayloadSchema.parse({ entry: [] })).toThrow();
  // wrong object literal
  expect(() => igWebhookPayloadSchema.parse({ object: "page", entry: [] })).toThrow();
});

test("igWebhookPayloadSchema rejects invalid messaging event", () => {
  expect(() => igWebhookPayloadSchema.parse({
    object: "instagram",
    entry: [{
      id: "x",
      time: 1,
      messaging: [{ sender: { id: "s" } }], // missing recipient and timestamp
    }],
  })).toThrow();
});

test("fbWebhookPayloadSchema rejects missing required fields", () => {
  expect(() => fbWebhookPayloadSchema.parse({ object: "page" })).toThrow();
  expect(() => fbWebhookPayloadSchema.parse({ object: "instagram", entry: [] })).toThrow();
});

test("threadsWebhookPayloadSchema rejects missing required fields", () => {
  expect(() => threadsWebhookPayloadSchema.parse({})).toThrow();
  expect(() => threadsWebhookPayloadSchema.parse({ app_id: "x" })).toThrow();
});

// --- Facebook webhook parsing ---

test("parseFacebookWebhook verifies and returns typed payload", async () => {
  const payload = {
    object: "page",
    entry: [{
      id: "page_123",
      time: 1700000000,
      changes: [{ field: "feed", value: { item: "comment", verb: "add", message: "Nice!" } }],
    }],
  };
  const body = JSON.stringify(payload);
  const signature = await signBody(body, "secret");

  const result = await parseFacebookWebhook({ body, signature, appSecret: "secret" });
  expect(result.object).toBe("page");
  expect(result.entry[0]!.changes![0]!.value.message).toBe("Nice!");
});

test("parseFacebookWebhook throws on wrong object type", async () => {
  const body = JSON.stringify({ object: "instagram", entry: [] });
  const signature = await signBody(body, "secret");
  expect(
    parseFacebookWebhook({ body, signature, appSecret: "secret" }),
  ).rejects.toThrow();
});

test("parseFacebookWebhook parses DM messaging events", async () => {
  const payload = {
    object: "page",
    entry: [{
      id: "page_1",
      time: 1700000000,
      messaging: [{
        sender: { id: "psid_1" },
        recipient: { id: "page_1" },
        timestamp: 1700000001,
        message: { mid: "mid_fb_1", text: "Hi from Messenger" },
      }],
    }],
  };
  const body = JSON.stringify(payload);
  const signature = await signBody(body, "secret");

  const result = await parseFacebookWebhook({ body, signature, appSecret: "secret" });
  expect(result.entry[0]!.messaging![0]!.message!.text).toBe("Hi from Messenger");
});

// --- Threads webhook parsing ---

test("parseThreadsWebhook verifies and returns typed payload", async () => {
  const payload = {
    app_id: "app_123",
    topic: "interaction",
    target_id: "t_123",
    time: 1700000000,
    subscription_id: "sub_1",
    values: {
      field: "replies",
      value: { id: "r1", text: "Reply text", username: "user1" },
    },
  };
  const body = JSON.stringify(payload);
  const signature = await signBody(body, "secret");

  const result = await parseThreadsWebhook({ body, signature, appSecret: "secret" });
  expect(result.values.field).toBe("replies");
  expect(result.values.value.text).toBe("Reply text");
});

test("parseThreadsWebhook throws on invalid signature", async () => {
  const body = JSON.stringify({ app_id: "x", values: {} });
  expect(
    parseThreadsWebhook({ body, signature: "sha256=wrong", appSecret: "secret" }),
  ).rejects.toThrow("Invalid webhook signature");
});
