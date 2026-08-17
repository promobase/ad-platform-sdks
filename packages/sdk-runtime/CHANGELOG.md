# @openpromo/sdk-runtime

## 0.11.0

### Minor Changes

- [`121fdf8`](https://github.com/promobase/ad-platform-sdks/commit/121fdf866e24083e949af589b422273f36efa5e9) Thanks [@rayli09](https://github.com/rayli09)! - Add `createOAuthFlow()` and `OAuthFlow` to encapsulate authorization and
  callback completion while preserving each provider adapter's native typed
  discovery methods.

- [`da6decd`](https://github.com/promobase/ad-platform-sdks/commit/da6decda34c8d09b9ae5d729ee5de4680ab54e9c) Thanks [@rayli09](https://github.com/rayli09)! - Centralize HMAC, signature encoding/decoding, raw-body, and timing-safe webhook
  verification primitives in `@openpromo/sdk-runtime/webhooks`. Harden the
  Meta-family Chat adapter, TikTok, and X webhook verifiers to use the shared
  implementation while preserving their provider-specific header and challenge
  protocols.

## 0.9.0

### Minor Changes

- [`0df6f0c`](https://github.com/promobase/ad-platform-sdks/commit/0df6f0ca74fec291b00ab6e2bf7c1cd503286f2b) Thanks [@rayli09](https://github.com/rayli09)! - Unify every package on a single shared `0.x.0` version line. All packages
  release together with one version number; this release moves the family to
  `0.10.0` (a forced downgrade for `@openpromo/meta`, previously 2.x).

## 0.8.0

### Minor Changes

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

## 0.7.0

### Minor Changes

- [`269d091`](https://github.com/promobase/ad-platform-sdks/commit/269d09195c5e33b995c90333674f423b0fd0241e) Thanks [@rayli09](https://github.com/rayli09)! - Add explicit Instagram credential-family clients, hardened Meta webhook parity, and first-class
  TikTok Business webhook parsing, management, and platform-first entrypoints.

- [`6a12a9c`](https://github.com/promobase/ad-platform-sdks/commit/6a12a9cd0a18980bb9a44fb334e9bc606e3a894f) Thanks [@rayli09](https://github.com/rayli09)! - Route curated TikTok Business clients through the shared typed transport, including JSON, app-credential,
  and multipart requests, while preserving external cancellation and typed provider errors.

- [`3e4a908`](https://github.com/promobase/ad-platform-sdks/commit/3e4a9082099715fa2720a1240c88c250db1cdd82) Thanks [@rayli09](https://github.com/rayli09)! - Add provider-specific OAuth scope catalogs and typed adapter inputs across the supported platform
  SDKs. Add an explicit `customOAuthScope` escape hatch for provider permissions not yet in a catalog,
  while preserving provider-granted scopes as forward-compatible strings.

## 0.6.0

### Minor Changes

- [`e715e0b`](https://github.com/promobase/ad-platform-sdks/commit/e715e0b3b806bde3e50bad736c1a6ea810cf6378) Thanks [@rayli09](https://github.com/rayli09)! - Add the canonical `AllPlatforms` identifiers and Valibot runtime schema,
  normalized OAuth adapters for OpenPromo's first-party flows, and first-party
  quality typed low-level Facebook, Instagram, and TikTok client operations for
  Mosaic consumers.

- [`d745356`](https://github.com/promobase/ad-platform-sdks/commit/d74535616061f4a0eddb42e6b8bd4f24a8565908) Thanks [@rayli09](https://github.com/rayli09)! - Expose Better Result-backed OAuth adapter outcomes through `.result`, with
  tagged `OAuthAdapterError` values and preserved provider-specific adapter types.

- [`73f4b90`](https://github.com/promobase/ad-platform-sdks/commit/73f4b9019e8ecc0295e4969d5e136af8a87fab9b) Thanks [@rayli09](https://github.com/rayli09)! - Add a `better-result` Promise boundary and explicit idempotency and
  reconciliation outcomes for provider operations. Publishing orchestration and
  provider-specific result shapes remain in the consuming application.

## 0.5.0

### Minor Changes

- [#34](https://github.com/promobase/ad-platform-sdks/pull/34) [`24aa151`](https://github.com/promobase/ad-platform-sdks/commit/24aa1514bfad63fa817e9124ba8e0674d9951484) Thanks [@rayli09](https://github.com/rayli09)! - Generate a searchable LinkedIn Marketing API operation catalog from all public official Postman
  collections and add Rest.li nested query values, batch method headers, static descriptor headers,
  and query tunneling support.

## 0.4.0

### Minor Changes

- [#22](https://github.com/promobase/ad-platform-sdks/pull/22) [`61c19de`](https://github.com/promobase/ad-platform-sdks/commit/61c19de459fc70eb32231a13022708ff69d743ea) Thanks [@rayli09](https://github.com/rayli09)! - Add a canonical SDK codegen IR, generated Effect Schema contracts and endpoint descriptors,
  Effect-native transport services and typed errors, matching Promise clients, and descriptor-backed
  AI SDK, Code Mode, CLI, and MCP projections across every platform integration.

## 0.3.0

### Minor Changes

- [#20](https://github.com/promobase/ad-platform-sdks/pull/20) [`a5574eb`](https://github.com/promobase/ad-platform-sdks/commit/a5574eb5e62e06f40667ca1984a9b3930d6a305b) Thanks [@rayli09](https://github.com/rayli09)! - Add complete OpenPromo first-party provider coverage: Google Business Profile, provider OAuth and
  inbox lifecycle primitives, TikTok Developer backfill and publishing, injectable transports, and
  normalized single and bulk post metrics.

## 0.2.4

### Patch Changes

- [#13](https://github.com/promobase/ad-platform-sdks/pull/13) [`c9b8e76`](https://github.com/promobase/ad-platform-sdks/commit/c9b8e761bf71e676985b00cbdccd930ad0fb50e7) Thanks [@rayli09](https://github.com/rayli09)! - Adopt the stable native TypeScript 7 compiler across every workspace and accept TypeScript 7 in
  published peer dependency ranges.

- [#13](https://github.com/promobase/ad-platform-sdks/pull/13) [`c9b8e76`](https://github.com/promobase/ad-platform-sdks/commit/c9b8e761bf71e676985b00cbdccd930ad0fb50e7) Thanks [@rayli09](https://github.com/rayli09)! - Refresh every platform integration from its current authoritative source. This adds Google Ads v25
  while retaining the raw v23 export, updates Meta v25 schemas and enums, regenerates TikTok's current
  Marketing API surface, advances LinkedIn to 202607, refreshes X OpenAPI/Fern output with Posts naming
  and Tweets compatibility aliases, and updates YouTube discovery with batch video statistics.

## 0.2.3

### Patch Changes

- [`b40d994`](https://github.com/promobase/ad-platform-sdks/commit/b40d99483e033e530bc461737430c8fb786d88d8) Thanks [@rayli09](https://github.com/rayli09)! - Move the public package family to the OpenPromo `@openpromo/*` scope and update workspace imports, docs, and CLI branding.

## 0.2.2

### Patch Changes

- [`bacac64`](https://github.com/promobase/ad-platform-sdks/commit/bacac648a15e055d39675df9c35585e90ee5af2d) Thanks [@rayli09](https://github.com/rayli09)! - Make published packages installable from fresh npm, pnpm, and Bun projects by replacing workspace-only dependency specs with registry-safe semver ranges.

  Move AI tool helpers behind `/ai` subpath exports so the plain SDK entry points do not require resolving the optional `ai` peer dependency.

## 0.2.1

### Patch Changes

- [`da4a79a`](https://github.com/promobase/ad-platform-sdks/commit/da4a79ad8ddf8cc7b65eebd5cf3c24320a12b584) Thanks [@rayli09](https://github.com/rayli09)! - Ship compiled `dist/` output instead of raw `.ts` source so non-bun consumers (Node, older bundlers, `tsc` from a consumer project) can install without choking on `.ts` imports or re-parsing generated trees. Package entry points switch to `dist/{index,...}.{js,d.ts}`; the `exports` map keeps a `"bun"` condition pointing at `src/` so the monorepo's own workspace loop stays build-free. Every package gains `engines: { node: ">=18" }` and bundles `LICENSE`.

## 0.2.0

### Minor Changes

- [`4767096`](https://github.com/promobase/ad-platform-sdks/commit/4767096c5b66667c5c60dbc109fff556a6374257) Thanks [@rayli09](https://github.com/rayli09)! - Initial release of `@openpromo/google-ads` with full v23 codegen (184 resources, 111 services, 543 enums), customer-bound ergonomic wrappers for the campaign lifecycle (`customer.campaignBudgets`, `.campaigns`, `.adGroups`, `.adGroupAds`, `.ads`), and a typed GAQL query builder with field-literal autocomplete and row-level narrowing (`customer.gaql.from("campaign").select(...).execute()`).

  Added a generic `HttpClient` to `@openpromo/sdk-runtime` for JSON/Bearer APIs, shared by the Google Ads SDK.

  `@openpromo/ad-platforms` now re-exports the `Google` namespace alongside `Meta` and `TikTok`.
