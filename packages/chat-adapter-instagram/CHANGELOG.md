# @openpromo/chat-adapter-instagram

## 0.11.1

### Patch Changes

- Updated dependencies [[`286d44d`](https://github.com/promobase/ad-platform-sdks/commit/286d44d8a7f6ad2c1d36769c7461c12b0648efb4)]:
  - @openpromo/meta@0.11.1

## 0.11.0

### Minor Changes

- [`b614901`](https://github.com/promobase/ad-platform-sdks/commit/b614901d4ac591bd3f93df9c431af690dc370179) Thanks [@rayli09](https://github.com/rayli09)! - Add provider-stable `eventId` values to normalized webhook events and make
  Messenger DM thread IDs account-scoped so multiple connected Pages cannot
  collide inside one Chat runtime. Correct extraction-time edit routing for
  adapters with edit payloads that omit the original recipient.

- [`f2d712a`](https://github.com/promobase/ad-platform-sdks/commit/f2d712a20d779be7ceb6c103407f618be9572f80) Thanks [@rayli09](https://github.com/rayli09)! - Expose verified, Chat-runtime-independent webhook event extraction through the
  first-party adapters. Add account-scoped adapter names and configurable Chat
  SDK history persistence so a workspace ingress can own durable canonical
  history without adapter collisions or duplicate storage.

### Patch Changes

- Updated dependencies [[`b614901`](https://github.com/promobase/ad-platform-sdks/commit/b614901d4ac591bd3f93df9c431af690dc370179), [`f2d712a`](https://github.com/promobase/ad-platform-sdks/commit/f2d712a20d779be7ceb6c103407f618be9572f80), [`da6decd`](https://github.com/promobase/ad-platform-sdks/commit/da6decda34c8d09b9ae5d729ee5de4680ab54e9c)]:
  - @openpromo/chat-adapter-core@0.11.0
  - @openpromo/meta@0.10.1

## 0.2.1

### Patch Changes

- Updated dependencies [[`0df6f0c`](https://github.com/promobase/ad-platform-sdks/commit/0df6f0ca74fec291b00ab6e2bf7c1cd503286f2b)]:
  - @openpromo/meta@2.2.0

## 0.2.0

### Minor Changes

- [`bb853a5`](https://github.com/promobase/ad-platform-sdks/commit/bb853a5a7e430f8a0ee0286bef4c027bcaa9cb44) Thanks [@rayli09](https://github.com/rayli09)! - First-party Chat SDK adapters for Messenger and Instagram DMs, with feature
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
  - `chat-adapter-tiktok`: TikTok Business adapters — comments
    (comment.update events, detail-fetch enrichment for owner/name,
    reply/hide/delete sends) and Business Messaging DMs (`im_receive_msg`
    inbound, `im_send_msg` echoes, `im_mark_read_msg` receipts, TEXT sends
    and SENDER_ACTION typing/read), with TikTok-Signature verification.
  - `chat-adapters`: umbrella re-export.
  - `@openpromo/meta`: `sendSenderAction` on both messaging clients, Instagram
    `uploadAttachment` plus the `attachmentId` media variant, and an optional
    IG `accessToken` for multipart uploads.

### Patch Changes

- [`5eecfab`](https://github.com/promobase/ad-platform-sdks/commit/5eecfab2499261d279a7ada7fd485b2158fcea99) Thanks [@rayli09](https://github.com/rayli09)! - Converged, type-safe webhook event handling.

  - `@openpromo/sdk-runtime/webhooks` (new subpath): shared
    `WebhookParseError` / `WebhookParseOptions` / `WebhookParseResult`,
    `verifyWebhookSignature` (timing-safe HMAC), `verifyWebhookChallenge`,
    and `parseWebhook` / `safeParseWebhook` with an injectable verifier so
    every platform package can reuse the same contract.
  - `@openpromo/meta/webhooks`: parse/safeParse now run on the shared
    primitives; Threads gains a typed event union
    (`getThreadsWebhookEvents`, `ThreadsWebhookEvent`) matching the existing
    Facebook/Instagram extraction; per-kind change types
    (`FacebookCommentChange`, `InstagramCommentChange`,
    `InstagramMessageEditChange`, `InstagramMessageReactionChange`) are
    exported so consumers can narrow the tolerant change unions.
  - `@openpromo/x/webhooks` (new subpath): CRC challenge
    (`verifyCrcChallenge`), base64 HMAC signature verification, tolerant
    envelope parsing, and typed event extraction (`message_create`,
    `tweet_create`, `unknown`), exposed as `X.Webhooks`.
  - Chat adapters narrow the tolerant webhook unions by field/event kind.

- Updated dependencies [[`bb853a5`](https://github.com/promobase/ad-platform-sdks/commit/bb853a5a7e430f8a0ee0286bef4c027bcaa9cb44), [`5eecfab`](https://github.com/promobase/ad-platform-sdks/commit/5eecfab2499261d279a7ada7fd485b2158fcea99), [`22899be`](https://github.com/promobase/ad-platform-sdks/commit/22899beb81f69883a6667e1623f7dd4a2556511a), [`44216a3`](https://github.com/promobase/ad-platform-sdks/commit/44216a35b5500a48e602625b28068564632932f6)]:
  - @openpromo/chat-adapter-core@0.2.0
  - @openpromo/meta@2.1.0
