---
"@openpromo/sdk-runtime": minor
"@openpromo/meta": minor
"@openpromo/x": minor
"@openpromo/chat-adapter-messenger": patch
"@openpromo/chat-adapter-instagram": patch
"@openpromo/chat-adapter-tiktok": patch
---

Converged, type-safe webhook event handling.

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
