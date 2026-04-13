# @promobase/ad-platforms

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
