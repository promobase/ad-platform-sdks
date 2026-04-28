---
"@promobase/meta-business-sdk-ts": patch
"@promobase/tiktok-business-sdk": patch
"@promobase/google-ads-sdk": patch
"@promobase/ad-platforms": patch
"@promobase/sdk-runtime": patch
---

Make published packages installable from fresh npm, pnpm, and Bun projects by replacing workspace-only dependency specs with registry-safe semver ranges.

Move AI tool helpers behind `/ai` subpath exports so the plain SDK entry points do not require resolving the optional `ai` peer dependency.
