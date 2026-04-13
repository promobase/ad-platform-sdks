# @promobase/tiktok-business-sdk

## 0.0.3

### Patch Changes

- [`da4a79a`](https://github.com/promobase/ad-platform-sdks/commit/da4a79ad8ddf8cc7b65eebd5cf3c24320a12b584) Thanks [@rayli09](https://github.com/rayli09)! - Ship compiled `dist/` output instead of raw `.ts` source so non-bun consumers (Node, older bundlers, `tsc` from a consumer project) can install without choking on `.ts` imports or re-parsing generated trees. Package entry points switch to `dist/{index,...}.{js,d.ts}`; the `exports` map keeps a `"bun"` condition pointing at `src/` so the monorepo's own workspace loop stays build-free. Every package gains `engines: { node: ">=18" }` and bundles `LICENSE`.

- Updated dependencies [[`da4a79a`](https://github.com/promobase/ad-platform-sdks/commit/da4a79ad8ddf8cc7b65eebd5cf3c24320a12b584)]:
  - @promobase/sdk-runtime@0.2.1

## 0.0.2

### Patch Changes

- Updated dependencies [[`4767096`](https://github.com/promobase/ad-platform-sdks/commit/4767096c5b66667c5c60dbc109fff556a6374257)]:
  - @promobase/sdk-runtime@0.2.0
