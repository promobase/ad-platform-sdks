# @openpromo/chat-adapter-tiktok

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
  - @openpromo/tiktok@0.10.1

## 0.1.2

### Patch Changes

- Updated dependencies [[`0df6f0c`](https://github.com/promobase/ad-platform-sdks/commit/0df6f0ca74fec291b00ab6e2bf7c1cd503286f2b)]:
  - @openpromo/tiktok@0.8.0

## 0.1.1

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

- Updated dependencies [[`bb853a5`](https://github.com/promobase/ad-platform-sdks/commit/bb853a5a7e430f8a0ee0286bef4c027bcaa9cb44), [`22899be`](https://github.com/promobase/ad-platform-sdks/commit/22899beb81f69883a6667e1623f7dd4a2556511a), [`44216a3`](https://github.com/promobase/ad-platform-sdks/commit/44216a35b5500a48e602625b28068564632932f6)]:
  - @openpromo/chat-adapter-core@0.2.0
  - @openpromo/tiktok@0.7.0
