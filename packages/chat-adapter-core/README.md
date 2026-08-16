# @openpromo/chat-adapter-core

Shared normalization for OpenPromo first-party Chat SDK adapters.

- **Thread identity** — DM thread ids that mirror the official
  `@chat-adapter/messenger` (`messenger:{userId}`) and
  `@chat-adapter/instagram` (`instagram:{accountId}:{userId}`) formats, plus
  OpenPromo's own comment-thread scheme
  (`{platform}:{accountId}:comment:{parentCommentId}`).
- **Comments-as-threads** — verb → message-state mapping and post/media
  context types for the comment surfaces no official adapter covers.
- **Capability tables** — per-platform capability declarations used by the
  adapters to state what they support.

Used by `@openpromo/chat-adapter-meta` and future platform adapter packages.
