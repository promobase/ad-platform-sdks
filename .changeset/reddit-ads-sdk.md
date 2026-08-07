---
"@openpromo/reddit": minor
"@openpromo/ad-platforms": minor
"@openpromo/sdk-codegen": patch
---

Add Reddit Ads API SDK (`@openpromo/reddit`) with OpenAPI-driven codegen

New package with 40 generated endpoints across 13 resource areas (accounts,
campaigns, ad groups, ads, targeting, custom/saved audiences, pixels, funding
instruments, reports, structured posts, conversions, bid suggestions),
generated from a pinned snapshot of the Reddit Ads API v3 OpenAPI spec
(community-maintained from Reddit's official Postman collection) via a new
OpenAPI pipeline (`bun run codegen`). Includes Reddit OAuth
(authorize/exchange/refresh, adsread/adsedit scopes), retry with backoff, and
Effect-native contracts. `sdk-codegen` gains the `reddit` platform id;
`@openpromo/ad-platforms` re-exports the new namespace.
