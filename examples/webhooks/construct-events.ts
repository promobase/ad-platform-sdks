/**
 * Unified webhook event handling — the Stripe-style constructEvents surface.
 *
 * Every platform namespace exposes a one-call API that verifies the provider
 * signature, parses the delivery, and returns typed events as
 * `{ type, data, ... }` tagged unions for exhaustive pattern matching.
 * Unknown provider fields/kinds are preserved, never dropped.
 *
 * Self-contained: signs fake deliveries with an in-memory secret so you can
 * run it without credentials:
 *   bun examples/webhooks/construct-events.ts
 */
import { Facebook, Instagram, Threads } from "@openpromo/meta";
import { TikTok } from "@openpromo/tiktok";
import { X } from "@openpromo/x";

const SECRET = "example-webhook-secret";

async function signSha256(body: string): Promise<string> {
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
  return `sha256=${Array.from(digest, (b) => b.toString(16).padStart(2, "0")).join("")}`;
}

async function signTikTok(body: string): Promise<string> {
  const timestamp = Math.floor(Date.now() / 1000);
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const digest = new Uint8Array(
    await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(`${timestamp}.${body}`)),
  );
  const sig = Array.from(digest, (b) => b.toString(16).padStart(2, "0")).join("");
  return `t=${timestamp},s=${sig}`;
}

async function signX(body: string): Promise<string> {
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
  return btoa(Array.from(digest, (b) => String.fromCharCode(b)).join(""));
}

// ---------------------------------------------------------------------------
// Facebook: one delivery can carry many events (messaging + changes).
// ---------------------------------------------------------------------------

const fbBody = JSON.stringify({
  object: "page",
  entry: [
    {
      id: "page_123",
      time: 1786800000,
      messaging: [
        {
          sender: { id: "psid_1" },
          recipient: { id: "page_123" },
          timestamp: 1786800001,
          message: { mid: "m1", text: "Hello from the SDK!" },
        },
      ],
      changes: [{ field: "feed", value: { comment_id: "c1", verb: "add", message: "Nice post" } }],
    },
  ],
});

const fbEvents = await Facebook.Webhooks.constructEvents({
  body: fbBody,
  signature: await signSha256(fbBody),
  appSecret: SECRET,
});

for (const event of fbEvents) {
  switch (event.type) {
    case "message":
    case "echo":
      console.log(`[FB ${event.type}] from ${event.data.sender.id}: ${event.data.message?.text}`);
      break;
    case "comment_change":
      console.log(`[FB comment] ${event.data.value.comment_id}: "${event.data.value.message}"`);
      break;
    case "read":
    case "reaction":
    case "message_edit":
    case "delivery":
    case "postback":
    case "quick_reply":
    case "referral":
    case "optin":
    case "account_linking":
    case "pass_thread_control":
    case "take_thread_control":
    case "request_thread_control":
    case "standby":
      break; // handled elsewhere in a real app
    case "unknown":
      console.log(`[FB unknown]`, event.data);
      break;
    default: {
      const never: never = event;
      throw new Error(`unhandled FB event: ${String(never)}`);
    }
  }
}

// ---------------------------------------------------------------------------
// Instagram: same shape, same switch.
// ---------------------------------------------------------------------------

const igBody = JSON.stringify({
  object: "instagram",
  entry: [
    {
      id: "ig_456",
      time: 1786800000,
      changes: [{ field: "comments", value: { id: "igc_1", text: "hello ig" } }],
    },
  ],
});

const igEvents = await Instagram.Webhooks.constructEvents({
  body: igBody,
  signature: await signSha256(igBody),
  appSecret: SECRET,
});

for (const event of igEvents) {
  if (event.type === "comment_change") {
    console.log(`[IG comment] ${event.data.value.id}: "${event.data.value.text}"`);
  }
}

// ---------------------------------------------------------------------------
// Threads: same one-call surface.
// ---------------------------------------------------------------------------

const threadsBody = JSON.stringify({
  app_id: "app_1",
  topic: "moderate",
  target_id: "user_1",
  time: 1786800000,
  subscription_id: "sub_1",
  values: { field: "replies", value: { id: "post_1", text: "a reply" } },
});

const threadsEvents = await Threads.Webhooks.constructEvents({
  body: threadsBody,
  signature: await signSha256(threadsBody),
  appSecret: SECRET,
});

for (const event of threadsEvents) {
  if (event.type === "replies") {
    console.log(`[Threads reply] ${event.data.text}`);
  }
}

// ---------------------------------------------------------------------------
// TikTok: constructEvent normalizes the wire `event` to `type` and
// auto-parses `content` into `data`.
// ---------------------------------------------------------------------------

const tiktokBody = JSON.stringify({
  event: "comment.update",
  client_key: "ck_1",
  create_time: 1786800000,
  user_openid: "open_1",
  content: JSON.stringify({
    comment_id: 123,
    video_id: 456,
    comment_type: "comment",
    comment_action: "insert",
    timestamp: 1786800000,
    unique_identifier: "u1",
    text: "hi from tiktok",
  }),
});

const tiktokEvent = await TikTok.Webhooks.constructEvent({
  body: tiktokBody,
  signature: await signTikTok(tiktokBody),
  appSecret: SECRET,
});

switch (tiktokEvent.type) {
  case "comment.update":
    console.log(`[TikTok comment] ${tiktokEvent.data.comment_id}: "${tiktokEvent.data.text}"`);
    break;
  default:
    console.log(`[TikTok ${tiktokEvent.type}]`, tiktokEvent.data);
}

// ---------------------------------------------------------------------------
// X: envelope with typed events + tolerant unknown kinds.
// ---------------------------------------------------------------------------

const xBody = JSON.stringify({
  for_user_id: "user_1",
  events: {
    message_create: [
      {
        type: "message_create",
        message_create: {
          sender_id: "sender_1",
          target: { recipient_id: "user_1" },
          message_data: { text: "hi from x" },
        },
      },
    ],
  },
});

const xEvents = await X.Webhooks.constructEvents({
  body: xBody,
  signature: await signX(xBody),
  appSecret: SECRET,
});

for (const event of xEvents) {
  switch (event.type) {
    case "message_create":
      console.log(`[X DM] ${event.data.message_create.message_data.text}`);
      break;
    case "tweet_create":
      break;
    case "unknown":
      console.log(`[X unknown ${event.sourceType}]`, event.data);
      break;
  }
}
