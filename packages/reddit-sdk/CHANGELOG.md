# @mosaic/reddit

## 0.2.0

### Minor Changes

- [`fff8359`](https://github.com/promobase/ad-platform-sdks/commit/fff8359973103f9055727424b07f6c0242d0f105) Thanks [@rayli09](https://github.com/rayli09)! - Add Reddit Ads API SDK (`@mosaic/reddit`) with OpenAPI-driven codegen

  New package with 40 generated endpoints across 13 resource areas (accounts,
  campaigns, ad groups, ads, targeting, custom/saved audiences, pixels, funding
  instruments, reports, structured posts, conversions, bid suggestions),
  generated from a pinned snapshot of the Reddit Ads API v3 OpenAPI spec
  (community-maintained from Reddit's official Postman collection) via a new
  OpenAPI pipeline (`bun run codegen`). Includes Reddit OAuth
  (authorize/exchange/refresh, adsread/adsedit scopes), retry with backoff, and
  Effect-native contracts. `sdk-codegen` gains the `reddit` platform id;
  `@mosaic/ad-platforms` re-exports the new namespace.
