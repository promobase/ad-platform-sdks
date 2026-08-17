---
"@openpromo/sdk-runtime": minor
"@openpromo/chat-adapter-core": patch
"@openpromo/tiktok": patch
"@openpromo/x": patch
---

Centralize HMAC, signature encoding/decoding, raw-body, and timing-safe webhook
verification primitives in `@openpromo/sdk-runtime/webhooks`. Harden the
Meta-family Chat adapter, TikTok, and X webhook verifiers to use the shared
implementation while preserving their provider-specific header and challenge
protocols.
