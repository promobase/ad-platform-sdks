---
"@openpromo/chat-adapter-core": minor
"@openpromo/chat-adapter-instagram": minor
"@openpromo/chat-adapter-messenger": minor
"@openpromo/chat-adapters": minor
"@openpromo/meta": minor
---

First-party Chat SDK adapters for Messenger and Instagram DMs, with feature
parity against the official `@chat-adapter/*` implementations.

- `chat-adapter-core`: DM + comment adapter bases (webhook dispatch for
  messages/echoes/postbacks/quick replies/reactions/read/delivery, buffered
  streaming, cached history with cursor pagination, hub challenge/signature
  verification), DM + comment thread identity, comments-as-threads verbs,
  and capability tables.
- `chat-adapter-messenger` / `chat-adapter-instagram`: DM adapters covering
  cards → templates/quick replies, callback data, media upload, HUMAN_AGENT
  tag, truncation, mark-seen, and provider error mapping, plus separate
  `FacebookCommentsAdapter` / `InstagramCommentsAdapter` comment adapters
  (comment-tree threads, add/edit/remove/hide verbs, reply/hide/delete
  sends).
- `chat-adapters`: umbrella re-export.
- `@openpromo/meta`: `sendSenderAction` on both messaging clients, Instagram
  `uploadAttachment` plus the `attachmentId` media variant, and an optional
  IG `accessToken` for multipart uploads.
