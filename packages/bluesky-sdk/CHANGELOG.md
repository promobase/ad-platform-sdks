# @openpromo/bluesky

## 0.10.1

### Patch Changes

- Updated dependencies [[`121fdf8`](https://github.com/promobase/ad-platform-sdks/commit/121fdf866e24083e949af589b422273f36efa5e9), [`da6decd`](https://github.com/promobase/ad-platform-sdks/commit/da6decda34c8d09b9ae5d729ee5de4680ab54e9c)]:
  - @openpromo/sdk-runtime@0.11.0

## 0.3.3

### Patch Changes

- Updated dependencies [[`0df6f0c`](https://github.com/promobase/ad-platform-sdks/commit/0df6f0ca74fec291b00ab6e2bf7c1cd503286f2b)]:
  - @openpromo/sdk-runtime@0.9.0

## 0.3.2

### Patch Changes

- Updated dependencies [[`5eecfab`](https://github.com/promobase/ad-platform-sdks/commit/5eecfab2499261d279a7ada7fd485b2158fcea99)]:
  - @openpromo/sdk-runtime@0.8.0

## 0.3.1

### Patch Changes

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

- [`537365f`](https://github.com/promobase/ad-platform-sdks/commit/537365f101d89211713306e2ea4ad06df50b3e1f) Thanks [@rayli09](https://github.com/rayli09)! - Add Bluesky SDK (`@openpromo/bluesky`) with lexicon-driven codegen

  New package with 197 generated endpoints across 21 AT Protocol namespaces
  (feed, actor, graph, repo, server, notification, identity, sync, bookmark,
  labeler, and more), generated from the official AT Protocol lexicons pinned
  from bluesky-social/atproto with per-file checksums. Includes app-password
  auth (plus session tokens), custom PDS service URLs, a publishing convenience
  (`posts.createPost`) that auto-detects richtext link facets and uploads/embeds
  images, and Effect-native contracts. `sdk-codegen` gains the `bluesky` platform
  id; `@openpromo/ad-platforms` re-exports the new namespace.
