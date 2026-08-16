# @openpromo/chat-adapter-instagram

First-party [Chat SDK](https://chat-sdk.dev) adapter for **Instagram DMs**,
built on `@openpromo/meta` webhook schemas and the Instagram messaging client.
No raw provider HTTP in the adapter; sends go through the owning SDK client.

Feature parity with the official `@chat-adapter/instagram`:

- Messages + page echoes (cached for history, never re-dispatched)
- Quick replies and postbacks → `onAction`
- Reactions → `onReaction` (receive-only)
- Story replies as attachments
- Media: binary upload via `message_attachments` or public HTTPS URLs
- Cards → generic/button templates or quick replies
- Buffered streaming (`stream()`)
- Typing indicator
- 1000-byte UTF-8 truncation
- `sendHumanAgentMessage()` — HUMAN_AGENT tag for 7-day support replies
- 24-hour messaging-window error mapping
- Cached message history with cursor pagination (`fetchMessages`)

Thread id format `instagram:{accountId}:{userId}` mirrors the official
adapter.

## Post comments

`createInstagramCommentsAdapter()` is a **separate Chat SDK adapter** for
Instagram post comments — its own webhook surface (`changes` comments),
thread model (one thread per comment tree:
`instagram:{accountId}:comment:{parentCommentId}`), and send semantics
(reply, hide, delete). Register it next to the DM adapter and route the same
webhook callback to both handlers:

```ts
const bot = new Chat({
  userName: "shop-bot",
  adapters: {
    instagram: createInstagramAdapter(),
    instagram_comments: createInstagramCommentsAdapter(),
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
import { createInstagramAdapter } from "@openpromo/chat-adapter-instagram";

const bot = new Chat({
  userName: "shop-bot",
  adapters: { instagram: createInstagramAdapter() },
  state: createMemoryState(),
});

bot.onDirectMessage(async (thread, message) => {
  await thread.post(`Thanks for your message!`);
});
```

Credentials auto-detect from the official env names (`INSTAGRAM_APP_SECRET`,
`INSTAGRAM_ACCESS_TOKEN`, `INSTAGRAM_VERIFY_TOKEN`, `INSTAGRAM_ACCOUNT_ID`),
or pass them explicitly for per-account (multi-tenant) use. `chat` is a peer
dependency (`^4.0.0`).
