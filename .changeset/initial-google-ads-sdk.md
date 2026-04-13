---
"@promobase/google-ads-sdk": minor
"@promobase/ad-platforms": minor
"@promobase/sdk-runtime": minor
---

Initial release of `@promobase/google-ads-sdk` with full v23 codegen (184 resources, 111 services, 543 enums), customer-bound ergonomic wrappers for the campaign lifecycle (`customer.campaignBudgets`, `.campaigns`, `.adGroups`, `.adGroupAds`, `.ads`), and a typed GAQL query builder with field-literal autocomplete and row-level narrowing (`customer.gaql.from("campaign").select(...).execute()`).

Added a generic `HttpClient` to `@promobase/sdk-runtime` for JSON/Bearer APIs, shared by the Google Ads SDK.

`@promobase/ad-platforms` now re-exports the `Google` namespace alongside `Meta` and `TikTok`.
