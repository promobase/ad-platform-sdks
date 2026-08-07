---
"@openpromo/snapchat": minor
"@openpromo/ad-platforms": minor
"@openpromo/sdk-codegen": patch
---

Add Snapchat Marketing API SDK (`@openpromo/snapchat`) with documentation-driven codegen

New package with 214 generated endpoints across 36 resource pages (campaigns, ad
squads, ads, media, creatives, targeting, audiences, measurement, billing, and
more), generated from the official developers.snap.com Marketing API docs via a
new scraper/parser/emitter pipeline (`bun run codegen`). Includes OAuth
(authorize/exchange/refresh), retry with backoff, pagination cursors, multipart
media uploads, and Effect-native contracts. `sdk-codegen` gains the `snapchat`
platform id; `@openpromo/ad-platforms` re-exports the new namespace.
