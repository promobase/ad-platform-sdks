import { expect, test } from "bun:test";

import { webhooks } from "../../src/webhooks/index.ts";

// Pattern-matching ergonomics: extraction returns a tagged union; consumers
// switch exhaustively on `kind` with a `never` fallback for unknown events.

test("facebook events: exhaustive pattern match over tagged kinds", () => {
  const payload = {
    object: "page",
    entry: [
      {
        id: "page_1",
        time: 1786800000,
        messaging: [
          { sender: { id: "u1" }, recipient: { id: "u2" }, timestamp: 1, message: { mid: "m1", text: "hi" } },
          { sender: { id: "u1" }, recipient: { id: "u2" }, timestamp: 2, read: { watermark: 1 } },
        ],
        changes: [{ field: "feed", value: { comment_id: "c1" } }],
      },
    ],
  } as const;

  const events = webhooks.facebook.events(payload as never);
  const kinds = events.map((event) => event.kind);

  expect(kinds).toContain("message");
  expect(kinds).toContain("read");
  expect(kinds).toContain("comment_change");

  // Exhaustive switch with never fallback — compile-time safety net.
  for (const event of events) {
    switch (event.kind) {
      case "message":
      case "echo":
      case "quick_reply":
      case "postback":
      case "referral":
      case "delivery":
      case "read":
      case "reaction":
      case "message_edit":
      case "optin":
      case "account_linking":
      case "pass_thread_control":
      case "take_thread_control":
      case "request_thread_control":
      case "standby":
      case "comment_change":
      case "unknown":
        break;
      default: {
        const never: never = event;
        throw new Error(`unhandled event kind: ${String(never)}`);
      }
    }
  }
});

test("threads events: replies + unknown field both deliver", () => {
  const replies = webhooks.threads.events({
    app_id: "app_1",
    topic: "moderate",
    target_id: "user_1",
    time: 1786800000,
    subscription_id: "sub_1",
    values: {
      field: "replies",
      value: { id: "post_1", root_post: { id: "root_1", owner_id: "owner_1", username: "u" } },
    },
  });

  expect(replies).toHaveLength(1);
  expect(replies[0]?.kind).toBe("replies");
  if (replies[0]?.kind !== "replies") return;
  expect(replies[0].entryId).toBe("user_1");
  expect(replies[0].value.root_post?.owner_id).toBe("owner_1");

  const unknown = webhooks.threads.events({
    app_id: "app_1",
    topic: "interaction",
    target_id: "user_1",
    time: 1786800000,
    subscription_id: "sub_1",
    values: { field: "brand_new_field", value: { id: "x" } },
  });

  expect(unknown[0]?.kind).toBe("unknown");
});
