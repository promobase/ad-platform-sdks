# @openpromo/chat-adapter-tiktok

First-party [Chat SDK](https://chat-sdk.dev) adapter for **TikTok Business
post comments**, built on `@openpromo/tiktok` webhook schemas and the comments
client. No raw provider HTTP in the adapter; sends go through the owning SDK
client.

## Features

- `comment.update` webhook events (`insert`, `delete`, `set_to_hidden`)
- One thread per comment tree: `tiktok:{businessId}:comment:{parentCommentId}`
- Adds → `onNewMessage`, deletes → `onMessageDeleted`; the business's own
  comments are cached, never dispatched
- `thread.post()` replies to the thread-root comment; `deleteMessage()`
  deletes; `hideComment()` hides/unhides
- TikTok-Signature verification (`t=<ts>,s=<hmac>` with a 5-minute replay
  window) and the `challenge` GET handshake
- Since TikTok webhook content carries text but no commenter identity or
  ownership flag, `insert` events fetch the comment detail once (owner,
  display name) before dispatch; delete events tombstone from the payload
  without a fetch

## Usage

```ts
import { Chat } from "chat";
import { createMemoryState } from "@chat-adapter/state-memory";
import { createTikTokCommentsAdapter } from "@openpromo/chat-adapter-tiktok";

const bot = new Chat({
  userName: "shop-bot",
  adapters: { tiktok_comments: createTikTokCommentsAdapter() },
  state: createMemoryState(),
});

bot.onNewMessage(/.*/, async (thread, message) => {
  await thread.post(`Thanks for your comment!`);
});
```

Env contract: `TIKTOK_APP_SECRET`, `TIKTOK_ACCESS_TOKEN`, `TIKTOK_BUSINESS_ID`
(or pass explicitly for per-account use). `chat` is a peer dependency
(`^4.0.0`).

TikTok Business **DMs** (Business Messaging API, `im_receive_msg` events) are
a follow-up surface in this package; note the platform's 10-messages/48h
limit on automated sends.
