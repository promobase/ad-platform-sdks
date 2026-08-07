# @openpromo/sdk-codegen

## 0.1.1

### Patch Changes

- [`183e0c6`](https://github.com/promobase/ad-platform-sdks/commit/183e0c6bc05f66b365246da23844e04c9c502b73) Thanks [@rayli09](https://github.com/rayli09)! - Add Amazon Ads SDK (`@openpromo/amazon-ads`) with OpenAPI-driven codegen

  New package with 166 generated endpoints across four official Amazon Ads API
  v3 specs (Sponsored Products 80, Sponsored Brands 56, Sponsored Display 22,
  Amazon Ads API 8), pinned from Amazon's official docs CloudFront distribution.
  Includes LWA OAuth (authorize/exchange/refresh, `advertising::campaign_management`
  scope), the three required request headers (Bearer, ClientId, Scope), NA/EU/FE
  region base URLs, vendored content-type handling (`application/vnd.spCampaign.v3+json`),
  and Effect-native contracts per spec. Type names collide across specs and are
  exposed namespaced (`SponsoredProductsTypes`, etc.). `sdk-codegen` gains the
  `amazon-ads` platform id; `@openpromo/ad-platforms` re-exports the new namespace.

- [`537365f`](https://github.com/promobase/ad-platform-sdks/commit/537365f101d89211713306e2ea4ad06df50b3e1f) Thanks [@rayli09](https://github.com/rayli09)! - Add Bluesky SDK (`@openpromo/bluesky`) with lexicon-driven codegen

  New package with 197 generated endpoints across 21 AT Protocol namespaces
  (feed, actor, graph, repo, server, notification, identity, sync, bookmark,
  labeler, and more), generated from the official AT Protocol lexicons pinned
  from bluesky-social/atproto with per-file checksums. Includes app-password
  auth (plus session tokens), custom PDS service URLs, a publishing convenience
  (`posts.createPost`) that auto-detects richtext link facets and uploads/embeds
  images, and Effect-native contracts. `sdk-codegen` gains the `bluesky` platform
  id; `@openpromo/ad-platforms` re-exports the new namespace.

- [`0fdf7fb`](https://github.com/promobase/ad-platform-sdks/commit/0fdf7fb34547b1772b1ecb3467af3d9e38651739) Thanks [@rayli09](https://github.com/rayli09)! - Add Pinterest REST API SDK (`@openpromo/pinterest`) with OpenAPI-driven codegen

  New package with 266 generated endpoints across 51 resource areas (ad
  accounts, campaigns, ad groups, ads, targeting, boards, pins, catalogs,
  conversions, analytics, audiences, billing, and more), generated from a pinned
  snapshot of Pinterest's official OpenAPI spec (`pinterest/api-description`,
  REST API v5.28.0) via an OpenAPI pipeline (`bun run codegen`). Includes
  Pinterest OAuth (authorize/exchange/refresh, all 16 documented scopes), retry
  with backoff, per-endpoint scope documentation, and Effect-native contracts.
  `sdk-codegen` gains the `pinterest` platform id; `@openpromo/ad-platforms`
  re-exports the new namespace.

- [`fff8359`](https://github.com/promobase/ad-platform-sdks/commit/fff8359973103f9055727424b07f6c0242d0f105) Thanks [@rayli09](https://github.com/rayli09)! - Add Reddit Ads API SDK (`@openpromo/reddit`) with OpenAPI-driven codegen

  New package with 40 generated endpoints across 13 resource areas (accounts,
  campaigns, ad groups, ads, targeting, custom/saved audiences, pixels, funding
  instruments, reports, structured posts, conversions, bid suggestions),
  generated from a pinned snapshot of the Reddit Ads API v3 OpenAPI spec
  (community-maintained from Reddit's official Postman collection) via a new
  OpenAPI pipeline (`bun run codegen`). Includes Reddit OAuth
  (authorize/exchange/refresh, adsread/adsedit scopes), retry with backoff, and
  Effect-native contracts. `sdk-codegen` gains the `reddit` platform id;
  `@openpromo/ad-platforms` re-exports the new namespace.

- [`fff8359`](https://github.com/promobase/ad-platform-sdks/commit/fff8359973103f9055727424b07f6c0242d0f105) Thanks [@rayli09](https://github.com/rayli09)! - Add Snapchat Marketing API SDK (`@openpromo/snapchat`) with documentation-driven codegen

  New package with 214 generated endpoints across 36 resource pages (campaigns, ad
  squads, ads, media, creatives, targeting, audiences, measurement, billing, and
  more), generated from the official developers.snap.com Marketing API docs via a
  new scraper/parser/emitter pipeline (`bun run codegen`). Includes OAuth
  (authorize/exchange/refresh), retry with backoff, pagination cursors, multipart
  media uploads, and Effect-native contracts. `sdk-codegen` gains the `snapchat`
  platform id; `@openpromo/ad-platforms` re-exports the new namespace.

## 0.1.0

### Minor Changes

- [#34](https://github.com/promobase/ad-platform-sdks/pull/34) [`24aa151`](https://github.com/promobase/ad-platform-sdks/commit/24aa1514bfad63fa817e9124ba8e0674d9951484) Thanks [@rayli09](https://github.com/rayli09)! - Add enforceable source coverage ledgers and source revisions across generated SDKs. Generate all
  X OpenAPI operations, all YouTube Data resources plus Analytics and Reporting, and the complete
  Google Business Profile discovery suite. Record provider auth and protocol metadata and improve
  Google Ads protobuf reference fidelity.
