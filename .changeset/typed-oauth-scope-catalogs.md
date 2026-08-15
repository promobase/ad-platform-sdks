---
"@openpromo/sdk-runtime": minor
"@openpromo/meta": minor
"@openpromo/tiktok": minor
"@openpromo/linkedin": minor
"@openpromo/youtube": minor
"@openpromo/google-business-profile": minor
"@openpromo/x": minor
"@openpromo/pinterest": patch
"@openpromo/snapchat": patch
"@openpromo/reddit": patch
"@openpromo/amazon-ads": patch
"@openpromo/ad-platforms": minor
---

Add provider-specific OAuth scope catalogs and typed adapter inputs across the supported platform
SDKs. Add an explicit `customOAuthScope` escape hatch for provider permissions not yet in a catalog,
while preserving provider-granted scopes as forward-compatible strings.
