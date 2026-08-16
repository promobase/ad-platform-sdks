# @openpromo/pinterest

## 0.3.2

### Patch Changes

- Updated dependencies [[`5eecfab`](https://github.com/promobase/ad-platform-sdks/commit/5eecfab2499261d279a7ada7fd485b2158fcea99)]:
  - @openpromo/sdk-runtime@0.8.0

## 0.3.1

### Patch Changes

- [`3e4a908`](https://github.com/promobase/ad-platform-sdks/commit/3e4a9082099715fa2720a1240c88c250db1cdd82) Thanks [@rayli09](https://github.com/rayli09)! - Add provider-specific OAuth scope catalogs and typed adapter inputs across the supported platform
  SDKs. Add an explicit `customOAuthScope` escape hatch for provider permissions not yet in a catalog,
  while preserving provider-granted scopes as forward-compatible strings.
- Updated dependencies [[`269d091`](https://github.com/promobase/ad-platform-sdks/commit/269d09195c5e33b995c90333674f423b0fd0241e), [`6a12a9c`](https://github.com/promobase/ad-platform-sdks/commit/6a12a9cd0a18980bb9a44fb334e9bc606e3a894f), [`3e4a908`](https://github.com/promobase/ad-platform-sdks/commit/3e4a9082099715fa2720a1240c88c250db1cdd82)]:
  - @openpromo/sdk-runtime@0.7.0

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
