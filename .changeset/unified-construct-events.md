---
"@openpromo/meta": minor
"@openpromo/x": minor
"@openpromo/tiktok": minor
---

Stripe-style unified webhook event surface: one-call `constructEvents` /
`constructEvent` that verifies the signature, parses the delivery, and
returns typed events for exhaustive pattern matching.

- Meta and X events are normalized to a shared `{ type, data, entryId }`
  shape (previously `kind`/`event`/`change`), with a tolerant `unknown`
  catch-all (`sourceType` carries the provider's original key).
- `Facebook.Webhooks.constructEvents`, `Instagram.Webhooks.constructEvents`,
  `Threads.Webhooks.constructEvents`, `X.Webhooks.constructEvents`, and
  `TikTok.Webhooks.constructEvent` (TikTok keeps the provider's wire `event`
  field; the projection presents it as `type` with auto-parsed `content` as
  `data`).
- `WebhookParseError` is thrown on invalid signatures/payloads, mirroring
  Stripe's `constructEvent` behavior.
