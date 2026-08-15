# First-party platform parity tracker

This tracker records provider capability claims, implementation status, ownership, and proof. A
row is not complete because a generated endpoint exists; it is complete only when the curated
interface, provider semantics, types, tests, and published entrypoint agree.

Status values: `planned`, `in_progress`, `verified`, `blocked`, `not_in_scope`.

## Platform summary

| Platform | OAuth | Transport/CRUD | Publishing | Webhooks | Generated contracts | Public leaf | Overall |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Facebook | in_progress | in_progress | in_progress | verified | verified: v26 refresh | verified | in_progress |
| Instagram | in_progress | in_progress | in_progress | verified | verified: v26 refresh | verified | in_progress |
| TikTok Business | in_progress | in_progress | in_progress | in_progress | verified: source scopes | verified | in_progress |

## Cross-platform work items

| ID | Workstream | Status | Owner | Evidence/gap | Acceptance proof |
| --- | --- | --- | --- | --- | --- |
| AUTH-01 | Separate Instagram Login from Facebook Graph/Page credentials | verified | Mosaic | `createLoginClient` and `createFacebookGraphClient` select distinct hosts and expose credential-family metadata | Host/token pairing tests and distinct credential-family types pass |
| AUTH-02 | Preserve OAuth scopes and connection-family metadata | verified | Mosaic | Shared OAuth exchange/refresh inputs now carry scopes; Meta and TikTok adapters retain scopes and typed credential families while preserving platform identity | Meta and TikTok OAuth fixtures retain scopes and family metadata |
| AUTH-03 | Validate secure OAuth state by default | verified | Mosaic + consumer integration | Curated Meta and TikTok adapters require both callback state and stored expected state; low-level legacy helpers remain intentionally separate | Adapter fixtures cover missing and mismatched state |
| TRAN-01 | Use one explicit Page access token in Facebook clients | verified | Mosaic | `createFacebookPageClient` constructs its generated transport from the one explicit Page token; `api` injection was removed from the curated boundary | Meta client, AI, CLI, and messaging fixtures pass without ambiguous credentials |
| TRAN-02 | Unify TikTok generated and curated request transport | verified | Mosaic | Generated endpoints and curated JSON, multipart, app-credential, and mixed-credential property clients now use `clients/request.ts`; OAuth and Developer API remain intentionally provider-specific | Shared transport tests cover bearer JSON, multipart, app-credential management, typed errors, and cancellation |
| TRAN-03 | Refresh Meta API version and generated inputs | verified | Mosaic | Pinned Meta codegen input advanced from v25.0 to official `origin/main` v26.0; generated TypeScript, Valibot, Effect, and docs outputs were regenerated | `986` specs, `503` enums, `305` accessors; Meta typecheck, tests, and build pass |
| WEB-01 | Consolidate Meta webhook verifiers | verified | Mosaic | Legacy Meta parser exports now route to the canonical Web Crypto verifier; byte bodies are supported | Root and leaf exports share strict implementation; focused parser tests pass |
| WEB-02 | Expand Meta webhook schemas/subscription defaults | verified | Mosaic | Facebook lifecycle fields plus standby and Instagram messaging, edit, reaction, comment, mention, live-comment, story-insight, and standby fields are represented with Valibot schemas | Focused fixtures cover discriminated FB/IG events, current subscription defaults, strict parsing, and safe-result behavior |
| WEB-03 | Add TikTok Business webhook leaf and Valibot schemas | verified | Mosaic | TikTok webhook schemas now use Valibot; `@openpromo/tiktok/webhooks` and umbrella `@openpromo/ad-platforms/tiktok/webhooks` build | Leaf and umbrella builds pass; webhook fixtures pass |
| WEB-04 | Reconcile TikTok Business webhook event management | verified | Mosaic | Account management is limited to VIDEO/COMMENT and Business Messaging has explicit DIRECT_MESSAGE setup | Official categories and setup behavior are fixture-tested |
| GEN-01 | Correct Instagram generated Effect partition | verified | Mosaic codegen | Removed Facebook-shaped Instagram and Threads Effect aliases; Nimbus reference generation now states when a platform has no generated Effect contract | No public Instagram/Threads alias points to Facebook descriptors |
| GEN-02 | Populate documented required scopes/capabilities | verified | Mosaic codegen | TikTok scopes are extracted from official cached docs; Meta curated Page/Instagram operations use a reviewed source-backed rule table. Empty means undeclared, not public | TikTok parser fixture, generated descriptors, capability manifests, and Meta generated descriptors pass |
| PUB-01 | Add TikTok umbrella platform leaf | verified | Mosaic | `@openpromo/ad-platforms/tiktok` and `/tiktok/webhooks` source/build entries exist | Umbrella build and dist subpath imports pass |
| PUB-02 | Verify all platform-first exports against dist | verified | Mosaic release | `scripts/check-published-subpaths.mjs` imports every Meta, umbrella, and TikTok Business `import` export from clean `dist` output | Clean package builds plus 109 published entrypoints import successfully |

## Facebook detail

| ID | Capability | Status | Notes |
| --- | --- | --- | --- |
| FB-01 | OAuth and Page discovery | in_progress | Core flow exists; state, scope, pagination, and token-family hardening remain |
| FB-02 | Page text/photo/carousel/comment CRUD | verified | Curated helpers plus generated Graph escape hatch |
| FB-03 | Regular video publishing | verified | Curated `/videos` supports either a public `file_url` or the official resumable upload handle (`fbuploader_video_file_chunk`); ambiguous and missing sources are rejected. See [Video Uploads](https://developers.facebook.com/docs/graph-api/video-uploads) |
| FB-04 | Reels scheduling | verified | Curated Reel finish supports `videoState: SCHEDULED` and requires `scheduledPublishTime`; provider state is preserved. See [Facebook API Reel flow](https://www.postman.com/meta/facebook/documentation/r56bjfd/facebook-api?entity=request-23987686-0b79260c-96bd-49de-875b-6076213785fc) |
| FB-05 | Messenger send surface | verified | Typed text, media, quick replies, message tags, and generic/button/list/media templates with provider cardinality checks. See [Messenger Generic Template](https://www.postman.com/meta/messenger-platform-api/request/22794852-eb07fcf4-6e44-4bcf-bbd7-e58e4451fa1e) |
| FB-06 | Page webhook subscriptions | verified | Defaults include current messaging lifecycle, handover, standby, and feed fields; extraction emits typed lifecycle and standby events |
| FB-07 | Worker-safe webhook verification | verified | Legacy verifier exports route to the canonical strict implementation; focused tests cover prefix rejection and byte bodies |

## Instagram detail

| ID | Capability | Status | Notes |
| --- | --- | --- | --- |
| IG-01 | Instagram Login OAuth | verified | Official API OAuth authorize host and messaging scope defaults corrected; focused OAuth tests pass |
| IG-02 | Facebook Login/Graph compatibility | verified | Explicit Facebook Graph and Instagram Login client factories select different Graph hosts |
| IG-03 | Image/Reel/carousel/story publishing | verified | Core flow plus alt text, user tags, share-to-feed, trial parameters, exact story media input, carousel cardinality, and the documented caption limit are typed and validated |
| IG-04 | Resumable video upload | verified | Existing flow is structurally present; refresh version/source proof |
| IG-05 | Messaging | verified | Typed text, media, published-media share, quick replies with provider limits, generic/button templates, private replies, and react/unreact are supported. See [Instagram Templates and Messaging](https://www.postman.com/meta/instagram/documentation/6yqw8pt/instagram-api?entity=request-23987686-23eacf45-3728-4e41-bcc7-6d164959327c) |
| IG-06 | Comments/moderation | verified | Create/list/reply/hide/delete plus media comment enable/disable are curated and typed |
| IG-07 | Account/media insights | verified | Curated account insights and media insights preserve generated metric result types and provider-native metric names |
| IG-08 | Webhooks/subscriptions | verified | Current messaging, edit, reaction, comment, mention, live-comment, story-insight, and standby fields are parsed and extracted as discriminated events |
| IG-09 | Generated Effect entrypoint | verified | No misleading Instagram Effect entrypoint is published; use native client plus generated TypeScript/Valibot contracts until a true partition exists |

## TikTok Business detail

| ID | Capability | Status | Notes |
| --- | --- | --- | --- |
| TT-01 | Business OAuth | verified | Business adapter retains provider-granted scopes and identifies the `business-login` credential family |
| TT-02 | Marketing/Advertiser OAuth | verified | Marketing adapter identifies the `marketing-api` family, preserves caller scopes, and explicitly returns typed unsupported-operation errors for refresh/revoke because the documented advertiser flow exposes authorization-code exchange only |
| TT-03 | Generated Marketing API | verified | Broad generated surface; current v1.3 Organic API endpoint matrix is fixture-checked against the official Business API catalog |
| TT-04 | Curated Business account/content clients | verified | Account, comments, discovery, mentions, messaging, Spark Ads, properties, webhooks, photos, and videos use the shared typed transport; OAuth and Developer API retain dedicated semantics |
| TT-05 | TikTok Business webhook management | verified | Official VIDEO/COMMENT account categories plus explicit DIRECT_MESSAGE setup are typed and tested |
| TT-06 | TikTok Business webhook parsing | verified | Valibot schemas, official comment/message event variants, and hardened signature verification are tested |
| TT-07 | TikTok platform-first leaf | verified | `@openpromo/tiktok/webhooks`, `@openpromo/ad-platforms/tiktok`, and `/tiktok/webhooks` build |
| TT-08 | Generated TypeScript/Valibot/Effect parity | verified | Scope-aware IR regeneration retains TypeScript/Valibot/Effect outputs and generated fingerprints; TikTok Effect descriptors now include documented permission scopes |

## Update protocol

For each implementation slice:

1. Link the source input or official provider reference.
2. Record the exact package/path changed.
3. Add a fixture or compile-time proof for the provider behavior.
4. Run the narrowest package checks, then the cross-platform release checks.
5. Move the row to `verified` only after the published entrypoint is tested.
