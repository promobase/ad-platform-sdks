---
"@mosaic/amazon-ads": minor
"@mosaic/ad-platforms": minor
"@mosaic/sdk-codegen": patch
---

Add Amazon Ads SDK (`@mosaic/amazon-ads`) with OpenAPI-driven codegen

New package with 166 generated endpoints across four official Amazon Ads API
v3 specs (Sponsored Products 80, Sponsored Brands 56, Sponsored Display 22,
Amazon Ads API 8), pinned from Amazon's official docs CloudFront distribution.
Includes LWA OAuth (authorize/exchange/refresh, `advertising::campaign_management`
scope), the three required request headers (Bearer, ClientId, Scope), NA/EU/FE
region base URLs, vendored content-type handling (`application/vnd.spCampaign.v3+json`),
and Effect-native contracts per spec. Type names collide across specs and are
exposed namespaced (`SponsoredProductsTypes`, etc.). `sdk-codegen` gains the
`amazon-ads` platform id; `@mosaic/ad-platforms` re-exports the new namespace.
