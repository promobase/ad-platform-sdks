# @openpromo/ad-platforms

## 0.11.1

### Patch Changes

- Updated dependencies [[`286d44d`](https://github.com/promobase/ad-platform-sdks/commit/286d44d8a7f6ad2c1d36769c7461c12b0648efb4)]:
  - @openpromo/meta@0.11.1

## 0.10.1

### Patch Changes

- Updated dependencies [[`121fdf8`](https://github.com/promobase/ad-platform-sdks/commit/121fdf866e24083e949af589b422273f36efa5e9), [`da6decd`](https://github.com/promobase/ad-platform-sdks/commit/da6decda34c8d09b9ae5d729ee5de4680ab54e9c)]:
  - @openpromo/sdk-runtime@0.11.0
  - @openpromo/tiktok@0.10.1
  - @openpromo/x@0.10.1
  - @openpromo/amazon-ads@0.10.1
  - @openpromo/bluesky@0.10.1
  - @openpromo/google-ads@0.10.1
  - @openpromo/google-business-profile@0.10.1
  - @openpromo/linkedin@0.10.1
  - @openpromo/meta@0.10.1
  - @openpromo/pinterest@0.10.1
  - @openpromo/reddit@0.10.1
  - @openpromo/snapchat@0.10.1
  - @openpromo/youtube@0.10.1

## 2.0.2

### Patch Changes

- Updated dependencies [[`0df6f0c`](https://github.com/promobase/ad-platform-sdks/commit/0df6f0ca74fec291b00ab6e2bf7c1cd503286f2b)]:
  - @openpromo/meta@2.2.0
  - @openpromo/sdk-runtime@0.9.0
  - @openpromo/tiktok@0.8.0
  - @openpromo/x@0.10.0
  - @openpromo/amazon-ads@0.3.3
  - @openpromo/bluesky@0.3.3
  - @openpromo/google-ads@0.4.3
  - @openpromo/google-business-profile@0.6.2
  - @openpromo/linkedin@0.9.2
  - @openpromo/pinterest@0.3.3
  - @openpromo/reddit@0.3.3
  - @openpromo/snapchat@0.3.3
  - @openpromo/youtube@0.8.2

## 2.0.1

### Patch Changes

- Updated dependencies [[`bb853a5`](https://github.com/promobase/ad-platform-sdks/commit/bb853a5a7e430f8a0ee0286bef4c027bcaa9cb44), [`5eecfab`](https://github.com/promobase/ad-platform-sdks/commit/5eecfab2499261d279a7ada7fd485b2158fcea99), [`22899be`](https://github.com/promobase/ad-platform-sdks/commit/22899beb81f69883a6667e1623f7dd4a2556511a), [`44216a3`](https://github.com/promobase/ad-platform-sdks/commit/44216a35b5500a48e602625b28068564632932f6)]:
  - @openpromo/meta@2.1.0
  - @openpromo/sdk-runtime@0.8.0
  - @openpromo/x@0.9.0
  - @openpromo/tiktok@0.7.0
  - @openpromo/amazon-ads@0.3.2
  - @openpromo/bluesky@0.3.2
  - @openpromo/google-ads@0.4.2
  - @openpromo/google-business-profile@0.6.1
  - @openpromo/linkedin@0.9.1
  - @openpromo/pinterest@0.3.2
  - @openpromo/reddit@0.3.2
  - @openpromo/snapchat@0.3.2
  - @openpromo/youtube@0.8.1

## 2.0.0

### Major Changes

- [`ce1dd41`](https://github.com/promobase/ad-platform-sdks/commit/ce1dd418029f65e60ce61254e8c8c438fdf69127) Thanks [@rayli09](https://github.com/rayli09)! - Remove Facebook-shaped Instagram and Threads Effect aliases. Generated reference output now states
  when a platform has no source-backed Effect partition instead of advertising an incorrect client.

### Minor Changes

- [`b634096`](https://github.com/promobase/ad-platform-sdks/commit/b63409694bc926969595ddcaa03bab8123ad8415) Thanks [@rayli09](https://github.com/rayli09)! - Complete a first-party platform parity slice with secure curated OAuth state validation, a
  single-credential Facebook Page client boundary, typed Facebook/Instagram messaging and publishing
  helpers, Instagram account insights, generated Meta permission metadata, and source-extracted TikTok
  Business permission metadata. TikTok Marketing API refresh/revoke limitations are now explicit typed
  adapter errors.

- [`269d091`](https://github.com/promobase/ad-platform-sdks/commit/269d09195c5e33b995c90333674f423b0fd0241e) Thanks [@rayli09](https://github.com/rayli09)! - Add explicit Instagram credential-family clients, hardened Meta webhook parity, and first-class
  TikTok Business webhook parsing, management, and platform-first entrypoints.

- [`269d091`](https://github.com/promobase/ad-platform-sdks/commit/269d09195c5e33b995c90333674f423b0fd0241e) Thanks [@rayli09](https://github.com/rayli09)! - Add platform-first Facebook, Instagram, WhatsApp, and webhook entrypoints to the umbrella package.
  Keep the existing `@openpromo/meta` distribution available as a compatibility path.

- [`3e4a908`](https://github.com/promobase/ad-platform-sdks/commit/3e4a9082099715fa2720a1240c88c250db1cdd82) Thanks [@rayli09](https://github.com/rayli09)! - Add provider-specific OAuth scope catalogs and typed adapter inputs across the supported platform
  SDKs. Add an explicit `customOAuthScope` escape hatch for provider permissions not yet in a catalog,
  while preserving provider-granted scopes as forward-compatible strings.

### Patch Changes

- Updated dependencies [[`b634096`](https://github.com/promobase/ad-platform-sdks/commit/b63409694bc926969595ddcaa03bab8123ad8415), [`269d091`](https://github.com/promobase/ad-platform-sdks/commit/269d09195c5e33b995c90333674f423b0fd0241e), [`f538ded`](https://github.com/promobase/ad-platform-sdks/commit/f538dede24d5e0c05db051d127877b7984e392b4), [`115e0d6`](https://github.com/promobase/ad-platform-sdks/commit/115e0d6f3a0a7fdf820d34ff08d8baa0ad3f2108), [`ce1dd41`](https://github.com/promobase/ad-platform-sdks/commit/ce1dd418029f65e60ce61254e8c8c438fdf69127), [`6a12a9c`](https://github.com/promobase/ad-platform-sdks/commit/6a12a9cd0a18980bb9a44fb334e9bc606e3a894f), [`118f255`](https://github.com/promobase/ad-platform-sdks/commit/118f255c412181bc75c4c61dfdc1aa41f4ae052f), [`c1f3e19`](https://github.com/promobase/ad-platform-sdks/commit/c1f3e19e1f94cb464e109dde5d7af14ff2ee84a1), [`3e4a908`](https://github.com/promobase/ad-platform-sdks/commit/3e4a9082099715fa2720a1240c88c250db1cdd82)]:
  - @openpromo/meta@2.0.0
  - @openpromo/tiktok@0.6.0
  - @openpromo/sdk-runtime@0.7.0
  - @openpromo/linkedin@0.9.0
  - @openpromo/youtube@0.8.0
  - @openpromo/google-business-profile@0.6.0
  - @openpromo/x@0.8.0
  - @openpromo/pinterest@0.3.1
  - @openpromo/snapchat@0.3.1
  - @openpromo/reddit@0.3.1
  - @openpromo/amazon-ads@0.3.1
  - @openpromo/bluesky@0.3.1
  - @openpromo/google-ads@0.4.1

## 1.0.0

### Major Changes

- [`e715e0b`](https://github.com/promobase/ad-platform-sdks/commit/e715e0b3b806bde3e50bad736c1a6ea810cf6378) Thanks [@rayli09](https://github.com/rayli09)! - Add the canonical `AllPlatforms` identifiers and Valibot runtime schema,
  normalized OAuth adapters for OpenPromo's first-party flows, and first-party
  quality typed low-level Facebook, Instagram, and TikTok client operations for
  Mosaic consumers.

### Patch Changes

- Updated dependencies [[`e715e0b`](https://github.com/promobase/ad-platform-sdks/commit/e715e0b3b806bde3e50bad736c1a6ea810cf6378), [`d745356`](https://github.com/promobase/ad-platform-sdks/commit/d74535616061f4a0eddb42e6b8bd4f24a8565908), [`70ca858`](https://github.com/promobase/ad-platform-sdks/commit/70ca8589c2570c13d738c7f9551ed4b2724d77ef), [`73f4b90`](https://github.com/promobase/ad-platform-sdks/commit/73f4b9019e8ecc0295e4969d5e136af8a87fab9b)]:
  - @openpromo/sdk-runtime@0.6.0
  - @openpromo/meta@1.0.0
  - @openpromo/tiktok@0.5.0
  - @openpromo/linkedin@0.8.0
  - @openpromo/youtube@0.7.0
  - @openpromo/x@0.7.0
  - @openpromo/google-business-profile@0.5.0
  - @openpromo/snapchat@0.3.0
  - @openpromo/reddit@0.3.0
  - @openpromo/pinterest@0.3.0
  - @openpromo/bluesky@0.3.0
  - @openpromo/google-ads@0.4.0
  - @openpromo/amazon-ads@0.3.0

## 0.9.0

### Minor Changes

- [`6ef154a`](https://github.com/promobase/ad-platform-sdks/commit/6ef154a3241f297657bcf413aa5fb94c5dfdfcd7) Thanks [@rayli09](https://github.com/rayli09)! - Add a worker-safe Valibot Meta webhook leaf with strict Web Crypto signature
  verification, typed Facebook/Instagram/Threads/WhatsApp parsing and event
  extraction, native Messenger/Instagram/WhatsApp transport clients, direct
  provider namespaces, and workflow-compatible provider error metadata. Remove
  the package's first-party Zod dependency while retaining compatibility wrappers
  for the existing root webhook API.

### Patch Changes

- Updated dependencies [[`6ef154a`](https://github.com/promobase/ad-platform-sdks/commit/6ef154a3241f297657bcf413aa5fb94c5dfdfcd7)]:
  - @openpromo/meta@0.4.0

## 0.8.0

### Minor Changes

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

### Patch Changes

- Updated dependencies [[`183e0c6`](https://github.com/promobase/ad-platform-sdks/commit/183e0c6bc05f66b365246da23844e04c9c502b73), [`537365f`](https://github.com/promobase/ad-platform-sdks/commit/537365f101d89211713306e2ea4ad06df50b3e1f), [`0fdf7fb`](https://github.com/promobase/ad-platform-sdks/commit/0fdf7fb34547b1772b1ecb3467af3d9e38651739), [`fff8359`](https://github.com/promobase/ad-platform-sdks/commit/fff8359973103f9055727424b07f6c0242d0f105), [`fff8359`](https://github.com/promobase/ad-platform-sdks/commit/fff8359973103f9055727424b07f6c0242d0f105)]:
  - @openpromo/amazon-ads@0.2.0
  - @openpromo/bluesky@0.2.0
  - @openpromo/pinterest@0.2.0
  - @openpromo/reddit@0.2.0
  - @openpromo/snapchat@0.2.0
  - @openpromo/google-ads@0.3.1
  - @openpromo/google-business-profile@0.4.0
  - @openpromo/linkedin@0.7.0
  - @openpromo/meta@0.3.1
  - @openpromo/tiktok@0.4.1
  - @openpromo/x@0.6.0
  - @openpromo/youtube@0.6.0

## 0.7.0

### Minor Changes

- [#34](https://github.com/promobase/ad-platform-sdks/pull/34) [`24aa151`](https://github.com/promobase/ad-platform-sdks/commit/24aa1514bfad63fa817e9124ba8e0674d9951484) Thanks [@rayli09](https://github.com/rayli09)! - Generate a searchable LinkedIn Marketing API operation catalog from all public official Postman
  collections and add Rest.li nested query values, batch method headers, static descriptor headers,
  and query tunneling support.

### Patch Changes

- Updated dependencies [[`24aa151`](https://github.com/promobase/ad-platform-sdks/commit/24aa1514bfad63fa817e9124ba8e0674d9951484), [`24aa151`](https://github.com/promobase/ad-platform-sdks/commit/24aa1514bfad63fa817e9124ba8e0674d9951484)]:
  - @openpromo/x@0.6.0
  - @openpromo/youtube@0.6.0
  - @openpromo/google-business-profile@0.4.0
  - @openpromo/meta@0.3.1
  - @openpromo/tiktok@0.4.1
  - @openpromo/google-ads@0.3.1
  - @openpromo/linkedin@0.7.0
  - @openpromo/sdk-runtime@0.5.0

## 0.6.0

### Minor Changes

- [#22](https://github.com/promobase/ad-platform-sdks/pull/22) [`61c19de`](https://github.com/promobase/ad-platform-sdks/commit/61c19de459fc70eb32231a13022708ff69d743ea) Thanks [@rayli09](https://github.com/rayli09)! - Add a canonical SDK codegen IR, generated Effect Schema contracts and endpoint descriptors,
  Effect-native transport services and typed errors, matching Promise clients, and descriptor-backed
  AI SDK, Code Mode, CLI, and MCP projections across every platform integration.

### Patch Changes

- Updated dependencies [[`61c19de`](https://github.com/promobase/ad-platform-sdks/commit/61c19de459fc70eb32231a13022708ff69d743ea)]:
  - @openpromo/sdk-runtime@0.4.0
  - @openpromo/meta@0.3.0
  - @openpromo/tiktok@0.4.0
  - @openpromo/google-ads@0.3.0
  - @openpromo/google-business-profile@0.3.0
  - @openpromo/linkedin@0.6.0
  - @openpromo/x@0.5.0
  - @openpromo/youtube@0.5.0

## 0.5.0

### Minor Changes

- [#20](https://github.com/promobase/ad-platform-sdks/pull/20) [`a5574eb`](https://github.com/promobase/ad-platform-sdks/commit/a5574eb5e62e06f40667ca1984a9b3930d6a305b) Thanks [@rayli09](https://github.com/rayli09)! - Add complete OpenPromo first-party provider coverage: Google Business Profile, provider OAuth and
  inbox lifecycle primitives, TikTok Developer backfill and publishing, injectable transports, and
  normalized single and bulk post metrics.

### Patch Changes

- Updated dependencies [[`a5574eb`](https://github.com/promobase/ad-platform-sdks/commit/a5574eb5e62e06f40667ca1984a9b3930d6a305b)]:
  - @openpromo/google-business-profile@0.2.0
  - @openpromo/linkedin@0.5.0
  - @openpromo/meta@0.2.0
  - @openpromo/tiktok@0.3.0
  - @openpromo/x@0.4.0
  - @openpromo/youtube@0.4.0
  - @openpromo/google-ads@0.2.1

## 0.4.0

### Minor Changes

- [#18](https://github.com/promobase/ad-platform-sdks/pull/18) [`09f4d8a`](https://github.com/promobase/ad-platform-sdks/commit/09f4d8aa9470fa5fd081ae1321ed1dcc3fd2edb5) Thanks [@rayli09](https://github.com/rayli09)! - Add a schema-first canonical operation catalog with normalized post metrics across organic platforms and reusable direct, AI SDK, Code Mode, MCP, and CLI adapters.

## 0.3.1

### Patch Changes

- Updated dependencies [[`6eb12ce`](https://github.com/promobase/ad-platform-sdks/commit/6eb12ce0741bd2412d661e699d9f8c5682d6d13c)]:
  - @openpromo/linkedin@0.4.0
  - @openpromo/tiktok@0.2.0

## 0.3.0

### Minor Changes

- [#13](https://github.com/promobase/ad-platform-sdks/pull/13) [`c9b8e76`](https://github.com/promobase/ad-platform-sdks/commit/c9b8e761bf71e676985b00cbdccd930ad0fb50e7) Thanks [@rayli09](https://github.com/rayli09)! - Refresh every platform integration from its current authoritative source. This adds Google Ads v25
  while retaining the raw v23 export, updates Meta v25 schemas and enums, regenerates TikTok's current
  Marketing API surface, advances LinkedIn to 202607, refreshes X OpenAPI/Fern output with Posts naming
  and Tweets compatibility aliases, and updates YouTube discovery with batch video statistics.

### Patch Changes

- [#13](https://github.com/promobase/ad-platform-sdks/pull/13) [`c9b8e76`](https://github.com/promobase/ad-platform-sdks/commit/c9b8e761bf71e676985b00cbdccd930ad0fb50e7) Thanks [@rayli09](https://github.com/rayli09)! - Adopt the stable native TypeScript 7 compiler across every workspace and accept TypeScript 7 in
  published peer dependency ranges.

- [#13](https://github.com/promobase/ad-platform-sdks/pull/13) [`c9b8e76`](https://github.com/promobase/ad-platform-sdks/commit/c9b8e761bf71e676985b00cbdccd930ad0fb50e7) Thanks [@rayli09](https://github.com/rayli09)! - Publish registry-safe dependency ranges instead of leaking `workspace:*` specifiers into npm metadata.

- Updated dependencies [[`c9b8e76`](https://github.com/promobase/ad-platform-sdks/commit/c9b8e761bf71e676985b00cbdccd930ad0fb50e7), [`c9b8e76`](https://github.com/promobase/ad-platform-sdks/commit/c9b8e761bf71e676985b00cbdccd930ad0fb50e7), [`c9b8e76`](https://github.com/promobase/ad-platform-sdks/commit/c9b8e761bf71e676985b00cbdccd930ad0fb50e7)]:
  - @openpromo/google-ads@0.2.0
  - @openpromo/linkedin@0.3.0
  - @openpromo/meta@0.1.0
  - @openpromo/tiktok@0.1.0
  - @openpromo/x@0.3.0
  - @openpromo/youtube@0.3.0

## 0.2.1

### Patch Changes

- [`b40d994`](https://github.com/promobase/ad-platform-sdks/commit/b40d99483e033e530bc461737430c8fb786d88d8) Thanks [@rayli09](https://github.com/rayli09)! - Move the public package family to the OpenPromo `@openpromo/*` scope and update workspace imports, docs, and CLI branding.

- Updated dependencies [[`b40d994`](https://github.com/promobase/ad-platform-sdks/commit/b40d99483e033e530bc461737430c8fb786d88d8)]:
  - @openpromo/meta@0.0.5
  - @openpromo/tiktok@0.0.5
  - @openpromo/google-ads@0.1.3
  - @openpromo/linkedin@0.2.1
  - @openpromo/x@0.2.1
  - @openpromo/youtube@0.2.1

## 0.2.0

### Minor Changes

- [`45d2ddb`](https://github.com/promobase/ad-platform-sdks/commit/45d2ddba404ad4af6575a5f5dd9c3f1ce11c877d) Thanks [@rayli09](https://github.com/rayli09)! - Add a Fern-generated X API v2 SDK for posts, users, and media upload from X's official OpenAPI spec, and re-export it from the umbrella ad-platforms package.

- [`45d2ddb`](https://github.com/promobase/ad-platform-sdks/commit/45d2ddba404ad4af6575a5f5dd9c3f1ce11c877d) Thanks [@rayli09](https://github.com/rayli09)! - Add a Discovery-generated YouTube Data API v3 SDK for videos, channels, playlists, comments, captions, thumbnails, search, and resumable video uploads, and expose it from the umbrella ad-platforms package.

- [`3e6a4bf`](https://github.com/promobase/ad-platform-sdks/commit/3e6a4bfef0d363638e5bf8a97ce055044b6828eb) Thanks [@rayli09](https://github.com/rayli09)! - Add first-class LinkedIn SDK support for OAuth, organization lookup, image/video upload helpers, posts, and comments, and re-export it from the umbrella ad-platforms package.

### Patch Changes

- Updated dependencies [[`45d2ddb`](https://github.com/promobase/ad-platform-sdks/commit/45d2ddba404ad4af6575a5f5dd9c3f1ce11c877d), [`45d2ddb`](https://github.com/promobase/ad-platform-sdks/commit/45d2ddba404ad4af6575a5f5dd9c3f1ce11c877d), [`3e6a4bf`](https://github.com/promobase/ad-platform-sdks/commit/3e6a4bfef0d363638e5bf8a97ce055044b6828eb)]:
  - @promobase/x-sdk@0.2.0
  - @promobase/youtube-sdk@0.2.0
  - @promobase/linkedin-sdk@0.2.0

## 0.1.2

### Patch Changes

- [`bacac64`](https://github.com/promobase/ad-platform-sdks/commit/bacac648a15e055d39675df9c35585e90ee5af2d) Thanks [@rayli09](https://github.com/rayli09)! - Make published packages installable from fresh npm, pnpm, and Bun projects by replacing workspace-only dependency specs with registry-safe semver ranges.

  Move AI tool helpers behind `/ai` subpath exports so the plain SDK entry points do not require resolving the optional `ai` peer dependency.

- Updated dependencies [[`bacac64`](https://github.com/promobase/ad-platform-sdks/commit/bacac648a15e055d39675df9c35585e90ee5af2d)]:
  - @openpromo/meta@0.0.4
  - @openpromo/tiktok@0.0.4
  - @openpromo/google-ads@0.1.2

## 0.1.1

### Patch Changes

- [`da4a79a`](https://github.com/promobase/ad-platform-sdks/commit/da4a79ad8ddf8cc7b65eebd5cf3c24320a12b584) Thanks [@rayli09](https://github.com/rayli09)! - Ship compiled `dist/` output instead of raw `.ts` source so non-bun consumers (Node, older bundlers, `tsc` from a consumer project) can install without choking on `.ts` imports or re-parsing generated trees. Package entry points switch to `dist/{index,...}.{js,d.ts}`; the `exports` map keeps a `"bun"` condition pointing at `src/` so the monorepo's own workspace loop stays build-free. Every package gains `engines: { node: ">=18" }` and bundles `LICENSE`.

- Updated dependencies [[`da4a79a`](https://github.com/promobase/ad-platform-sdks/commit/da4a79ad8ddf8cc7b65eebd5cf3c24320a12b584)]:
  - @openpromo/meta@0.0.3
  - @openpromo/tiktok@0.0.3
  - @openpromo/google-ads@0.1.1

## 0.1.0

### Minor Changes

- [`4767096`](https://github.com/promobase/ad-platform-sdks/commit/4767096c5b66667c5c60dbc109fff556a6374257) Thanks [@rayli09](https://github.com/rayli09)! - Initial release of `@openpromo/google-ads` with full v23 codegen (184 resources, 111 services, 543 enums), customer-bound ergonomic wrappers for the campaign lifecycle (`customer.campaignBudgets`, `.campaigns`, `.adGroups`, `.adGroupAds`, `.ads`), and a typed GAQL query builder with field-literal autocomplete and row-level narrowing (`customer.gaql.from("campaign").select(...).execute()`).

  Added a generic `HttpClient` to `@openpromo/sdk-runtime` for JSON/Bearer APIs, shared by the Google Ads SDK.

  `@openpromo/ad-platforms` now re-exports the `Google` namespace alongside `Meta` and `TikTok`.

### Patch Changes

- Updated dependencies [[`4767096`](https://github.com/promobase/ad-platform-sdks/commit/4767096c5b66667c5c60dbc109fff556a6374257)]:
  - @openpromo/google-ads@0.1.0
  - @openpromo/meta@0.0.2
  - @openpromo/tiktok@0.0.2
