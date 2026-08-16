# @openpromo/tiktok

## 0.8.0

### Minor Changes

- [`0df6f0c`](https://github.com/promobase/ad-platform-sdks/commit/0df6f0ca74fec291b00ab6e2bf7c1cd503286f2b) Thanks [@rayli09](https://github.com/rayli09)! - Unify every package on a single shared `0.x.0` version line. All packages
  release together with one version number; this release moves the family to
  `0.10.0` (a forced downgrade for `@openpromo/meta`, previously 2.x).

### Patch Changes

- Updated dependencies [[`0df6f0c`](https://github.com/promobase/ad-platform-sdks/commit/0df6f0ca74fec291b00ab6e2bf7c1cd503286f2b)]:
  - @openpromo/sdk-runtime@0.9.0

## 0.7.0

### Minor Changes

- [`22899be`](https://github.com/promobase/ad-platform-sdks/commit/22899beb81f69883a6667e1623f7dd4a2556511a) Thanks [@rayli09](https://github.com/rayli09)! - Stripe-style unified webhook event surface: one-call `constructEvents` /
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

### Patch Changes

- [`44216a3`](https://github.com/promobase/ad-platform-sdks/commit/44216a35b5500a48e602625b28068564632932f6) Thanks [@rayli09](https://github.com/rayli09)! - Make webhook payload schemas tolerant of provider-added fields and event
  kinds. Meta change arrays previously rejected any delivery carrying an
  unmodeled `field` (e.g. `likes`, `leadgen`, `story_insights`), and Threads
  rejected unknown `values.field` values; TikTok rejected unknown event kinds.
  Known fields/events keep their rich parse (catch-alls sit last in the
  unions); unknown ones now deliver instead of dropping the whole payload.
  Adds production-tolerance tests covering unknown-field deliveries and
  signature rejection.
- Updated dependencies [[`5eecfab`](https://github.com/promobase/ad-platform-sdks/commit/5eecfab2499261d279a7ada7fd485b2158fcea99)]:
  - @openpromo/sdk-runtime@0.8.0

## 0.6.0

### Minor Changes

- [`b634096`](https://github.com/promobase/ad-platform-sdks/commit/b63409694bc926969595ddcaa03bab8123ad8415) Thanks [@rayli09](https://github.com/rayli09)! - Complete a first-party platform parity slice with secure curated OAuth state validation, a
  single-credential Facebook Page client boundary, typed Facebook/Instagram messaging and publishing
  helpers, Instagram account insights, generated Meta permission metadata, and source-extracted TikTok
  Business permission metadata. TikTok Marketing API refresh/revoke limitations are now explicit typed
  adapter errors.

- [`269d091`](https://github.com/promobase/ad-platform-sdks/commit/269d09195c5e33b995c90333674f423b0fd0241e) Thanks [@rayli09](https://github.com/rayli09)! - Add explicit Instagram credential-family clients, hardened Meta webhook parity, and first-class
  TikTok Business webhook parsing, management, and platform-first entrypoints.

- [`6a12a9c`](https://github.com/promobase/ad-platform-sdks/commit/6a12a9cd0a18980bb9a44fb334e9bc606e3a894f) Thanks [@rayli09](https://github.com/rayli09)! - Route curated TikTok Business clients through the shared typed transport, including JSON, app-credential,
  and multipart requests, while preserving external cancellation and typed provider errors.

- [`118f255`](https://github.com/promobase/ad-platform-sdks/commit/118f255c412181bc75c4c61dfdc1aa41f4ae052f) Thanks [@rayli09](https://github.com/rayli09)! - Route generated TikTok Business endpoint clients through the shared typed request and provider-error transport.

- [`3e4a908`](https://github.com/promobase/ad-platform-sdks/commit/3e4a9082099715fa2720a1240c88c250db1cdd82) Thanks [@rayli09](https://github.com/rayli09)! - Add provider-specific OAuth scope catalogs and typed adapter inputs across the supported platform
  SDKs. Add an explicit `customOAuthScope` escape hatch for provider permissions not yet in a catalog,
  while preserving provider-granted scopes as forward-compatible strings.

### Patch Changes

- Updated dependencies [[`269d091`](https://github.com/promobase/ad-platform-sdks/commit/269d09195c5e33b995c90333674f423b0fd0241e), [`6a12a9c`](https://github.com/promobase/ad-platform-sdks/commit/6a12a9cd0a18980bb9a44fb334e9bc606e3a894f), [`3e4a908`](https://github.com/promobase/ad-platform-sdks/commit/3e4a9082099715fa2720a1240c88c250db1cdd82)]:
  - @openpromo/sdk-runtime@0.7.0

## 0.5.0

### Minor Changes

- [`e715e0b`](https://github.com/promobase/ad-platform-sdks/commit/e715e0b3b806bde3e50bad736c1a6ea810cf6378) Thanks [@rayli09](https://github.com/rayli09)! - Add the canonical `AllPlatforms` identifiers and Valibot runtime schema,
  normalized OAuth adapters for OpenPromo's first-party flows, and first-party
  quality typed low-level Facebook, Instagram, and TikTok client operations for
  Mosaic consumers.

- [`70ca858`](https://github.com/promobase/ad-platform-sdks/commit/70ca8589c2570c13d738c7f9551ed4b2724d77ef) Thanks [@rayli09](https://github.com/rayli09)! - Generate TypeScript model types and lightweight Valibot schemas from the same
  canonical SDK IR across all generated platform packages, alongside their
  existing Effect surfaces. Webhook schemas remain hand-authored and separate.

### Patch Changes

- [`d745356`](https://github.com/promobase/ad-platform-sdks/commit/d74535616061f4a0eddb42e6b8bd4f24a8565908) Thanks [@rayli09](https://github.com/rayli09)! - Expose Better Result-backed OAuth adapter outcomes through `.result`, with
  tagged `OAuthAdapterError` values and preserved provider-specific adapter types.
- Updated dependencies [[`e715e0b`](https://github.com/promobase/ad-platform-sdks/commit/e715e0b3b806bde3e50bad736c1a6ea810cf6378), [`d745356`](https://github.com/promobase/ad-platform-sdks/commit/d74535616061f4a0eddb42e6b8bd4f24a8565908), [`73f4b90`](https://github.com/promobase/ad-platform-sdks/commit/73f4b9019e8ecc0295e4969d5e136af8a87fab9b)]:
  - @openpromo/sdk-runtime@0.6.0

## 0.4.1

### Patch Changes

- [#34](https://github.com/promobase/ad-platform-sdks/pull/34) [`24aa151`](https://github.com/promobase/ad-platform-sdks/commit/24aa1514bfad63fa817e9124ba8e0674d9951484) Thanks [@rayli09](https://github.com/rayli09)! - Add enforceable source coverage ledgers and source revisions across generated SDKs. Generate all
  X OpenAPI operations, all YouTube Data resources plus Analytics and Reporting, and the complete
  Google Business Profile discovery suite. Record provider auth and protocol metadata and improve
  Google Ads protobuf reference fidelity.
- Updated dependencies [[`24aa151`](https://github.com/promobase/ad-platform-sdks/commit/24aa1514bfad63fa817e9124ba8e0674d9951484)]:
  - @openpromo/sdk-runtime@0.5.0

## 0.4.0

### Minor Changes

- [#22](https://github.com/promobase/ad-platform-sdks/pull/22) [`61c19de`](https://github.com/promobase/ad-platform-sdks/commit/61c19de459fc70eb32231a13022708ff69d743ea) Thanks [@rayli09](https://github.com/rayli09)! - Add a canonical SDK codegen IR, generated Effect Schema contracts and endpoint descriptors,
  Effect-native transport services and typed errors, matching Promise clients, and descriptor-backed
  AI SDK, Code Mode, CLI, and MCP projections across every platform integration.

### Patch Changes

- Updated dependencies [[`61c19de`](https://github.com/promobase/ad-platform-sdks/commit/61c19de459fc70eb32231a13022708ff69d743ea)]:
  - @openpromo/sdk-runtime@0.4.0

## 0.3.0

### Minor Changes

- [#20](https://github.com/promobase/ad-platform-sdks/pull/20) [`a5574eb`](https://github.com/promobase/ad-platform-sdks/commit/a5574eb5e62e06f40667ca1984a9b3930d6a305b) Thanks [@rayli09](https://github.com/rayli09)! - Add complete OpenPromo first-party provider coverage: Google Business Profile, provider OAuth and
  inbox lifecycle primitives, TikTok Developer backfill and publishing, injectable transports, and
  normalized single and bulk post metrics.

### Patch Changes

- Updated dependencies [[`a5574eb`](https://github.com/promobase/ad-platform-sdks/commit/a5574eb5e62e06f40667ca1984a9b3930d6a305b)]:
  - @openpromo/sdk-runtime@0.3.0

## 0.2.0

### Minor Changes

- [#16](https://github.com/promobase/ad-platform-sdks/pull/16) [`6eb12ce`](https://github.com/promobase/ad-platform-sdks/commit/6eb12ce0741bd2412d661e699d9f8c5682d6d13c) Thanks [@rayli09](https://github.com/rayli09)! - Expose LinkedIn member and organization post analytics, and complete TikTok's generated Accounts API surface including profile and post metrics.

## 0.1.0

### Minor Changes

- [#13](https://github.com/promobase/ad-platform-sdks/pull/13) [`c9b8e76`](https://github.com/promobase/ad-platform-sdks/commit/c9b8e761bf71e676985b00cbdccd930ad0fb50e7) Thanks [@rayli09](https://github.com/rayli09)! - Refresh every platform integration from its current authoritative source. This adds Google Ads v25
  while retaining the raw v23 export, updates Meta v25 schemas and enums, regenerates TikTok's current
  Marketing API surface, advances LinkedIn to 202607, refreshes X OpenAPI/Fern output with Posts naming
  and Tweets compatibility aliases, and updates YouTube discovery with batch video statistics.

### Patch Changes

- [#13](https://github.com/promobase/ad-platform-sdks/pull/13) [`c9b8e76`](https://github.com/promobase/ad-platform-sdks/commit/c9b8e761bf71e676985b00cbdccd930ad0fb50e7) Thanks [@rayli09](https://github.com/rayli09)! - Adopt the stable native TypeScript 7 compiler across every workspace and accept TypeScript 7 in
  published peer dependency ranges.

- [#13](https://github.com/promobase/ad-platform-sdks/pull/13) [`c9b8e76`](https://github.com/promobase/ad-platform-sdks/commit/c9b8e761bf71e676985b00cbdccd930ad0fb50e7) Thanks [@rayli09](https://github.com/rayli09)! - Publish registry-safe dependency ranges instead of leaking `workspace:*` specifiers into npm metadata.

- Updated dependencies [[`c9b8e76`](https://github.com/promobase/ad-platform-sdks/commit/c9b8e761bf71e676985b00cbdccd930ad0fb50e7), [`c9b8e76`](https://github.com/promobase/ad-platform-sdks/commit/c9b8e761bf71e676985b00cbdccd930ad0fb50e7)]:
  - @openpromo/sdk-runtime@0.2.4

## 0.0.5

### Patch Changes

- [`b40d994`](https://github.com/promobase/ad-platform-sdks/commit/b40d99483e033e530bc461737430c8fb786d88d8) Thanks [@rayli09](https://github.com/rayli09)! - Move the public package family to the OpenPromo `@openpromo/*` scope and update workspace imports, docs, and CLI branding.

- Updated dependencies [[`b40d994`](https://github.com/promobase/ad-platform-sdks/commit/b40d99483e033e530bc461737430c8fb786d88d8)]:
  - @openpromo/sdk-runtime@0.2.3

## 0.0.4

### Patch Changes

- [`bacac64`](https://github.com/promobase/ad-platform-sdks/commit/bacac648a15e055d39675df9c35585e90ee5af2d) Thanks [@rayli09](https://github.com/rayli09)! - Make published packages installable from fresh npm, pnpm, and Bun projects by replacing workspace-only dependency specs with registry-safe semver ranges.

  Move AI tool helpers behind `/ai` subpath exports so the plain SDK entry points do not require resolving the optional `ai` peer dependency.

- Updated dependencies [[`bacac64`](https://github.com/promobase/ad-platform-sdks/commit/bacac648a15e055d39675df9c35585e90ee5af2d)]:
  - @openpromo/sdk-runtime@0.2.2

## 0.0.3

### Patch Changes

- [`da4a79a`](https://github.com/promobase/ad-platform-sdks/commit/da4a79ad8ddf8cc7b65eebd5cf3c24320a12b584) Thanks [@rayli09](https://github.com/rayli09)! - Ship compiled `dist/` output instead of raw `.ts` source so non-bun consumers (Node, older bundlers, `tsc` from a consumer project) can install without choking on `.ts` imports or re-parsing generated trees. Package entry points switch to `dist/{index,...}.{js,d.ts}`; the `exports` map keeps a `"bun"` condition pointing at `src/` so the monorepo's own workspace loop stays build-free. Every package gains `engines: { node: ">=18" }` and bundles `LICENSE`.

- Updated dependencies [[`da4a79a`](https://github.com/promobase/ad-platform-sdks/commit/da4a79ad8ddf8cc7b65eebd5cf3c24320a12b584)]:
  - @openpromo/sdk-runtime@0.2.1

## 0.0.2

### Patch Changes

- Updated dependencies [[`4767096`](https://github.com/promobase/ad-platform-sdks/commit/4767096c5b66667c5c60dbc109fff556a6374257)]:
  - @openpromo/sdk-runtime@0.2.0
