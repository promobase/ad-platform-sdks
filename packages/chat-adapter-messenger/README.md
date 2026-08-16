# @openpromo/chat-adapter-messenger

First-party [Chat SDK](https://chat-sdk.dev) adapter for **Facebook Messenger
DMs**, built on `@openpromo/meta` webhook schemas and the Facebook Page
messaging client. No raw provider HTTP in the adapter; sends go through the
owning SDK client.

Feature parity with the official `@chat-adapter/messenger`:

- Messages + page echoes (cached for history, never re-dispatched)
- Postbacks and quick replies → `onAction`
- Reactions → `onReaction` (receive-only)
- Read/delivery receipts
- Cards → Generic/Button templates
- Buffered streaming (`stream()`)
- Typing indicator + mark-seen (`markAsRead`)
- 2000-char truncation
- Cached message history with cursor pagination (`fetchMessages`)
- Provider error mapping (rate limit / auth / validation / not found)

Thread id format `messenger:{userId}` mirrors the official adapter.

## Post comments

`createFacebookCommentsAdapter()` is a **separate Chat SDK adapter** for
Facebook Page post comments — its own webhook surface (`changes` feed
comments), thread model (one thread per comment tree:
`facebook:{pageId}:comment:{parentCommentId}`), and send semantics (reply,
hide, delete). Register it next to the Messenger adapter and route the same
page webhook callback to both handlers:

```ts
const bot = new Chat({
  userName: "shop-bot",
  adapters: {
    messenger: createMessengerAdapter(),
    facebook_comments: createFacebookCommentsAdapter(),
  },
  state: createMemoryState(),
});
```

Comment events dispatch as `onNewMessage` (adds), `onMessageUpdated` (edits),
and `onMessageDeleted` (removes/hides). `thread.post()` replies to the
thread-root comment.

## Usage

```ts
import { Chat } from "chat";
import { createMemoryState } from "@chat-adapter/state-memory";
import { createMessengerAdapter } from "@openpromo/chat-adapter-messenger";

const bot = new Chat({
  userName: "shop-bot",
  adapters: { messenger: createMessengerAdapter() },
  state: createMemoryState(),
});

bot.onDirectMessage(async (thread, message) => {
  await thread.post(`Thanks for your message!`);
});
```

Credentials auto-detect from the official env names (`FACEBOOK_APP_SECRET`,
`FACEBOOK_PAGE_ACCESS_TOKEN`, `FACEBOOK_VERIFY_TOKEN`, `FACEBOOK_PAGE_ID`),
or pass them explicitly for per-account (multi-tenant) use. `chat` is a peer
dependency (`^4.0.0`).
