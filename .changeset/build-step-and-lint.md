---
"@promobase/sdk-runtime": patch
"@promobase/meta-business-sdk-ts": patch
"@promobase/tiktok-business-sdk": patch
"@promobase/google-ads-sdk": patch
"@promobase/ad-platforms": patch
---

Ship compiled `dist/` output instead of raw `.ts` source so non-bun consumers (Node, older bundlers, `tsc` from a consumer project) can install without choking on `.ts` imports or re-parsing generated trees. Package entry points switch to `dist/{index,...}.{js,d.ts}`; the `exports` map keeps a `"bun"` condition pointing at `src/` so the monorepo's own workspace loop stays build-free. Every package gains `engines: { node: ">=18" }` and bundles `LICENSE`.
