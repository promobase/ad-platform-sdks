# @promobase/linkedin-sdk

## 0.5.0

### Minor Changes

- [#20](https://github.com/promobase/ad-platform-sdks/pull/20) [`a5574eb`](https://github.com/promobase/ad-platform-sdks/commit/a5574eb5e62e06f40667ca1984a9b3930d6a305b) Thanks [@rayli09](https://github.com/rayli09)! - Add complete OpenPromo first-party provider coverage: Google Business Profile, provider OAuth and
  inbox lifecycle primitives, TikTok Developer backfill and publishing, injectable transports, and
  normalized single and bulk post metrics.

## 0.4.0

### Minor Changes

- [#16](https://github.com/promobase/ad-platform-sdks/pull/16) [`6eb12ce`](https://github.com/promobase/ad-platform-sdks/commit/6eb12ce0741bd2412d661e699d9f8c5682d6d13c) Thanks [@rayli09](https://github.com/rayli09)! - Expose LinkedIn member and organization post analytics, and complete TikTok's generated Accounts API surface including profile and post metrics.

## 0.3.0

### Minor Changes

- [#13](https://github.com/promobase/ad-platform-sdks/pull/13) [`c9b8e76`](https://github.com/promobase/ad-platform-sdks/commit/c9b8e761bf71e676985b00cbdccd930ad0fb50e7) Thanks [@rayli09](https://github.com/rayli09)! - Refresh every platform integration from its current authoritative source. This adds Google Ads v25
  while retaining the raw v23 export, updates Meta v25 schemas and enums, regenerates TikTok's current
  Marketing API surface, advances LinkedIn to 202607, refreshes X OpenAPI/Fern output with Posts naming
  and Tweets compatibility aliases, and updates YouTube discovery with batch video statistics.

### Patch Changes

- [#13](https://github.com/promobase/ad-platform-sdks/pull/13) [`c9b8e76`](https://github.com/promobase/ad-platform-sdks/commit/c9b8e761bf71e676985b00cbdccd930ad0fb50e7) Thanks [@rayli09](https://github.com/rayli09)! - Adopt the stable native TypeScript 7 compiler across every workspace and accept TypeScript 7 in
  published peer dependency ranges.

## 0.2.1

### Patch Changes

- [`b40d994`](https://github.com/promobase/ad-platform-sdks/commit/b40d99483e033e530bc461737430c8fb786d88d8) Thanks [@rayli09](https://github.com/rayli09)! - Move the public package family to the OpenPromo `@openpromo/*` scope and update workspace imports, docs, and CLI branding.

## 0.2.0

### Minor Changes

- [`3e6a4bf`](https://github.com/promobase/ad-platform-sdks/commit/3e6a4bfef0d363638e5bf8a97ce055044b6828eb) Thanks [@rayli09](https://github.com/rayli09)! - Add first-class LinkedIn SDK support for OAuth, organization lookup, image/video upload helpers, posts, and comments, and re-export it from the umbrella ad-platforms package.
