# @openpromo/amazon-ads

## 0.3.0

### Minor Changes

- [`70ca858`](https://github.com/promobase/ad-platform-sdks/commit/70ca8589c2570c13d738c7f9551ed4b2724d77ef) Thanks [@rayli09](https://github.com/rayli09)! - Generate TypeScript model types and lightweight Valibot schemas from the same
  canonical SDK IR across all generated platform packages, alongside their
  existing Effect surfaces. Webhook schemas remain hand-authored and separate.

### Patch Changes

- Updated dependencies [[`e715e0b`](https://github.com/promobase/ad-platform-sdks/commit/e715e0b3b806bde3e50bad736c1a6ea810cf6378), [`d745356`](https://github.com/promobase/ad-platform-sdks/commit/d74535616061f4a0eddb42e6b8bd4f24a8565908), [`73f4b90`](https://github.com/promobase/ad-platform-sdks/commit/73f4b9019e8ecc0295e4969d5e136af8a87fab9b)]:
  - @openpromo/sdk-runtime@0.6.0

## 0.2.0

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
