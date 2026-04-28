# @promobase/ad-platforms

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
  - @promobase/meta-business-sdk-ts@0.0.4
  - @promobase/tiktok-business-sdk@0.0.4
  - @promobase/google-ads-sdk@0.1.2

## 0.1.1

### Patch Changes

- [`da4a79a`](https://github.com/promobase/ad-platform-sdks/commit/da4a79ad8ddf8cc7b65eebd5cf3c24320a12b584) Thanks [@rayli09](https://github.com/rayli09)! - Ship compiled `dist/` output instead of raw `.ts` source so non-bun consumers (Node, older bundlers, `tsc` from a consumer project) can install without choking on `.ts` imports or re-parsing generated trees. Package entry points switch to `dist/{index,...}.{js,d.ts}`; the `exports` map keeps a `"bun"` condition pointing at `src/` so the monorepo's own workspace loop stays build-free. Every package gains `engines: { node: ">=18" }` and bundles `LICENSE`.

- Updated dependencies [[`da4a79a`](https://github.com/promobase/ad-platform-sdks/commit/da4a79ad8ddf8cc7b65eebd5cf3c24320a12b584)]:
  - @promobase/meta-business-sdk-ts@0.0.3
  - @promobase/tiktok-business-sdk@0.0.3
  - @promobase/google-ads-sdk@0.1.1

## 0.1.0

### Minor Changes

- [`4767096`](https://github.com/promobase/ad-platform-sdks/commit/4767096c5b66667c5c60dbc109fff556a6374257) Thanks [@rayli09](https://github.com/rayli09)! - Initial release of `@promobase/google-ads-sdk` with full v23 codegen (184 resources, 111 services, 543 enums), customer-bound ergonomic wrappers for the campaign lifecycle (`customer.campaignBudgets`, `.campaigns`, `.adGroups`, `.adGroupAds`, `.ads`), and a typed GAQL query builder with field-literal autocomplete and row-level narrowing (`customer.gaql.from("campaign").select(...).execute()`).

  Added a generic `HttpClient` to `@promobase/sdk-runtime` for JSON/Bearer APIs, shared by the Google Ads SDK.

  `@promobase/ad-platforms` now re-exports the `Google` namespace alongside `Meta` and `TikTok`.

### Patch Changes

- Updated dependencies [[`4767096`](https://github.com/promobase/ad-platform-sdks/commit/4767096c5b66667c5c60dbc109fff556a6374257)]:
  - @promobase/google-ads-sdk@0.1.0
  - @promobase/meta-business-sdk-ts@0.0.2
  - @promobase/tiktok-business-sdk@0.0.2
