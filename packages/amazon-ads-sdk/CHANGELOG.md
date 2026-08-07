# @mosaic/amazon-ads

## 0.2.0

### Minor Changes

- [`183e0c6`](https://github.com/promobase/ad-platform-sdks/commit/183e0c6bc05f66b365246da23844e04c9c502b73) Thanks [@rayli09](https://github.com/rayli09)! - Add Amazon Ads SDK (`@mosaic/amazon-ads`) with OpenAPI-driven codegen

  New package with 166 generated endpoints across four official Amazon Ads API
  v3 specs (Sponsored Products 80, Sponsored Brands 56, Sponsored Display 22,
  Amazon Ads API 8), pinned from Amazon's official docs CloudFront distribution.
  Includes LWA OAuth (authorize/exchange/refresh, `advertising::campaign_management`
  scope), the three required request headers (Bearer, ClientId, Scope), NA/EU/FE
  region base URLs, vendored content-type handling (`application/vnd.spCampaign.v3+json`),
  and Effect-native contracts per spec. Type names collide across specs and are
  exposed namespaced (`SponsoredProductsTypes`, etc.). `sdk-codegen` gains the
  `amazon-ads` platform id; `@mosaic/ad-platforms` re-exports the new namespace.
