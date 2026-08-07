# @openpromo/snapchat

## 0.2.0

### Minor Changes

- [`fff8359`](https://github.com/promobase/ad-platform-sdks/commit/fff8359973103f9055727424b07f6c0242d0f105) Thanks [@rayli09](https://github.com/rayli09)! - Add Snapchat Marketing API SDK (`@openpromo/snapchat`) with documentation-driven codegen

  New package with 214 generated endpoints across 36 resource pages (campaigns, ad
  squads, ads, media, creatives, targeting, audiences, measurement, billing, and
  more), generated from the official developers.snap.com Marketing API docs via a
  new scraper/parser/emitter pipeline (`bun run codegen`). Includes OAuth
  (authorize/exchange/refresh), retry with backoff, pagination cursors, multipart
  media uploads, and Effect-native contracts. `sdk-codegen` gains the `snapchat`
  platform id; `@openpromo/ad-platforms` re-exports the new namespace.
