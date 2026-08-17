---
"@openpromo/chat-adapter-core": minor
"@openpromo/chat-adapter-messenger": minor
"@openpromo/chat-adapter-instagram": minor
"@openpromo/chat-adapter-tiktok": minor
"@openpromo/chat-adapters": minor
---

Add provider-stable `eventId` values to normalized webhook events and make
Messenger DM thread IDs account-scoped so multiple connected Pages cannot
collide inside one Chat runtime. Correct extraction-time edit routing for
adapters with edit payloads that omit the original recipient.
