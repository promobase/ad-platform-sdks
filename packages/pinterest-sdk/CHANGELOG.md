# @openpromo/pinterest

## 0.2.0

### Minor Changes

- [`0fdf7fb`](https://github.com/promobase/ad-platform-sdks/commit/0fdf7fb34547b1772b1ecb3467af3d9e38651739) Thanks [@rayli09](https://github.com/rayli09)! - Add Pinterest REST API SDK (`@openpromo/pinterest`) with OpenAPI-driven codegen

  New package with 266 generated endpoints across 51 resource areas (ad
  accounts, campaigns, ad groups, ads, targeting, boards, pins, catalogs,
  conversions, analytics, audiences, billing, and more), generated from a pinned
  snapshot of Pinterest's official OpenAPI spec (`pinterest/api-description`,
  REST API v5.28.0) via an OpenAPI pipeline (`bun run codegen`). Includes
  Pinterest OAuth (authorize/exchange/refresh, all 16 documented scopes), retry
  with backoff, per-endpoint scope documentation, and Effect-native contracts.
  `sdk-codegen` gains the `pinterest` platform id; `@openpromo/ad-platforms`
  re-exports the new namespace.
