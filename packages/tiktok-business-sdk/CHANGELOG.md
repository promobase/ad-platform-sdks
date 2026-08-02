# @openpromo/tiktok

## 0.2.0

### Minor Changes

- [#16](https://github.com/promobase/ad-platform-sdks/pull/16) [`6eb12ce`](https://github.com/promobase/ad-platform-sdks/commit/6eb12ce0741bd2412d661e699d9f8c5682d6d13c) Thanks [@rayli09](https://github.com/rayli09)! - Expose LinkedIn member and organization post analytics, and complete TikTok's generated Accounts API surface including profile and post metrics.

## 0.1.0

### Minor Changes

- [#13](https://github.com/promobase/ad-platform-sdks/pull/13) [`c9b8e76`](https://github.com/promobase/ad-platform-sdks/commit/c9b8e761bf71e676985b00cbdccd930ad0fb50e7) Thanks [@rayli09](https://github.com/rayli09)! - Refresh every platform integration from its current authoritative source. This adds Google Ads v25
  while retaining the raw v23 export, updates Meta v25 schemas and enums, regenerates TikTok's current
  Marketing API surface, advances LinkedIn to 202607, refreshes X OpenAPI/Fern output with Posts naming
  and Tweets compatibility aliases, and updates YouTube discovery with batch video statistics.

### Patch Changes

- [#13](https://github.com/promobase/ad-platform-sdks/pull/13) [`c9b8e76`](https://github.com/promobase/ad-platform-sdks/commit/c9b8e761bf71e676985b00cbdccd930ad0fb50e7) Thanks [@rayli09](https://github.com/rayli09)! - Adopt the stable native TypeScript 7 compiler across every workspace and accept TypeScript 7 in
  published peer dependency ranges.

- [#13](https://github.com/promobase/ad-platform-sdks/pull/13) [`c9b8e76`](https://github.com/promobase/ad-platform-sdks/commit/c9b8e761bf71e676985b00cbdccd930ad0fb50e7) Thanks [@rayli09](https://github.com/rayli09)! - Publish registry-safe dependency ranges instead of leaking `workspace:*` specifiers into npm metadata.

- Updated dependencies [[`c9b8e76`](https://github.com/promobase/ad-platform-sdks/commit/c9b8e761bf71e676985b00cbdccd930ad0fb50e7), [`c9b8e76`](https://github.com/promobase/ad-platform-sdks/commit/c9b8e761bf71e676985b00cbdccd930ad0fb50e7)]:
  - @openpromo/sdk-runtime@0.2.4

## 0.0.5

### Patch Changes

- [`b40d994`](https://github.com/promobase/ad-platform-sdks/commit/b40d99483e033e530bc461737430c8fb786d88d8) Thanks [@rayli09](https://github.com/rayli09)! - Move the public package family to the OpenPromo `@openpromo/*` scope and update workspace imports, docs, and CLI branding.

- Updated dependencies [[`b40d994`](https://github.com/promobase/ad-platform-sdks/commit/b40d99483e033e530bc461737430c8fb786d88d8)]:
  - @openpromo/sdk-runtime@0.2.3

## 0.0.4

### Patch Changes

- [`bacac64`](https://github.com/promobase/ad-platform-sdks/commit/bacac648a15e055d39675df9c35585e90ee5af2d) Thanks [@rayli09](https://github.com/rayli09)! - Make published packages installable from fresh npm, pnpm, and Bun projects by replacing workspace-only dependency specs with registry-safe semver ranges.

  Move AI tool helpers behind `/ai` subpath exports so the plain SDK entry points do not require resolving the optional `ai` peer dependency.

- Updated dependencies [[`bacac64`](https://github.com/promobase/ad-platform-sdks/commit/bacac648a15e055d39675df9c35585e90ee5af2d)]:
  - @openpromo/sdk-runtime@0.2.2

## 0.0.3

### Patch Changes

- [`da4a79a`](https://github.com/promobase/ad-platform-sdks/commit/da4a79ad8ddf8cc7b65eebd5cf3c24320a12b584) Thanks [@rayli09](https://github.com/rayli09)! - Ship compiled `dist/` output instead of raw `.ts` source so non-bun consumers (Node, older bundlers, `tsc` from a consumer project) can install without choking on `.ts` imports or re-parsing generated trees. Package entry points switch to `dist/{index,...}.{js,d.ts}`; the `exports` map keeps a `"bun"` condition pointing at `src/` so the monorepo's own workspace loop stays build-free. Every package gains `engines: { node: ">=18" }` and bundles `LICENSE`.

- Updated dependencies [[`da4a79a`](https://github.com/promobase/ad-platform-sdks/commit/da4a79ad8ddf8cc7b65eebd5cf3c24320a12b584)]:
  - @openpromo/sdk-runtime@0.2.1

## 0.0.2

### Patch Changes

- Updated dependencies [[`4767096`](https://github.com/promobase/ad-platform-sdks/commit/4767096c5b66667c5c60dbc109fff556a6374257)]:
  - @openpromo/sdk-runtime@0.2.0
