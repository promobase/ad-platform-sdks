# First-party platform parity tracker

This tracker records provider capability claims, implementation status, ownership, and proof. A
row is not complete because a generated endpoint exists; it is complete only when the curated
interface, provider semantics, types, tests, and published entrypoint agree.

Status values: `planned`, `in_progress`, `verified`, `blocked`, `not_in_scope`.

## Platform summary

| Platform | OAuth | Transport/CRUD | Publishing | Webhooks | Generated contracts | Public leaf | Overall |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Facebook | in_progress | in_progress | in_progress | in_progress | verified with refresh needed | verified | in_progress |
| Instagram | in_progress | in_progress | in_progress | in_progress | blocked by misleading Effect alias | verified | in_progress |
| TikTok Business | in_progress | in_progress | in_progress | in_progress | verified with scope metadata gap | planned | in_progress |

## Cross-platform work items

| ID | Workstream | Status | Owner | Evidence/gap | Acceptance proof |
| --- | --- | --- | --- | --- | --- |
| AUTH-01 | Separate Instagram Login from Facebook Graph/Page credentials | verified | Mosaic | `createLoginClient` and `createFacebookGraphClient` select distinct hosts and expose credential-family metadata | Host/token pairing tests and distinct credential-family types pass |
| AUTH-02 | Preserve OAuth scopes and connection-family metadata | verified | Mosaic | Shared OAuth exchange/refresh inputs now carry scopes; Meta and TikTok adapters retain scopes and typed credential families while preserving platform identity | Meta and TikTok OAuth fixtures retain scopes and family metadata |
| AUTH-03 | Validate secure OAuth state by default | planned | Mosaic + consumer integration | Legacy helpers allow optional state | Unsafe path removed or explicitly marked low-level |
| TRAN-01 | Use one explicit Page access token in Facebook clients | planned | Mosaic | `api` and `accessToken` can diverge | Client construction rejects ambiguous credentials |
| TRAN-02 | Unify TikTok generated and curated request transport | planned | Mosaic | Duplicate request/envelope/error/retry logic | One transport seam exercised by both surfaces |
| TRAN-03 | Refresh Meta API version and generated inputs | planned | Mosaic | v25 pinned while current docs show v26 | Deterministic regeneration and version fixtures |
| WEB-01 | Consolidate Meta webhook verifiers | verified | Mosaic | Legacy Meta parser exports now route to the canonical Web Crypto verifier; byte bodies are supported | Root and leaf exports share strict implementation; focused parser tests pass |
| WEB-02 | Expand Meta webhook schemas/subscription defaults | planned | Mosaic | Delivery/read/postback/referral and Instagram current fields incomplete | Provider fixture corpus and discriminated event tests |
| WEB-03 | Add TikTok Business webhook leaf and Valibot schemas | verified | Mosaic | TikTok webhook schemas now use Valibot; `@openpromo/tiktok/webhooks` and umbrella `@openpromo/ad-platforms/tiktok/webhooks` build | Leaf and umbrella builds pass; webhook fixtures pass |
| WEB-04 | Reconcile TikTok Business webhook event management | verified | Mosaic | Account management is limited to VIDEO/COMMENT and Business Messaging has explicit DIRECT_MESSAGE setup | Official categories and setup behavior are fixture-tested |
| GEN-01 | Correct Instagram generated Effect partition | planned | Mosaic codegen | Instagram Effect path points to Facebook descriptors | Either true Instagram partition or remove misleading alias |
| GEN-02 | Populate documented required scopes/capabilities | planned | Mosaic codegen | Generated Meta/TikTok descriptors mostly expose empty scopes | Source-backed scope metadata fixtures |
| PUB-01 | Add TikTok umbrella platform leaf | verified | Mosaic | `@openpromo/ad-platforms/tiktok` and `/tiktok/webhooks` source/build entries exist | Umbrella build and dist subpath imports pass |
| PUB-02 | Verify all platform-first exports against dist | planned | Mosaic release | Existing tests import source files directly | Build then import every published subpath |

## Facebook detail

| ID | Capability | Status | Notes |
| --- | --- | --- | --- |
| FB-01 | OAuth and Page discovery | in_progress | Core flow exists; state, scope, pagination, and token-family hardening remain |
| FB-02 | Page text/photo/carousel/comment CRUD | verified | Curated helpers plus generated Graph escape hatch |
| FB-03 | Regular video publishing | blocked | Current `/videos` + `file_url` path needs revalidation against Video API |
| FB-04 | Reels scheduling | planned | Add `SCHEDULED` and `scheduled_publish_time` if current source confirms |
| FB-05 | Messenger send surface | in_progress | Typed basics exist; message tags/content variants remain |
| FB-06 | Page webhook subscriptions | in_progress | Defaults now include delivery/read/postback/referral fields; feed/change coverage still needs current parity |
| FB-07 | Worker-safe webhook verification | verified | Legacy verifier exports route to the canonical strict implementation; focused tests cover prefix rejection and byte bodies |

## Instagram detail

| ID | Capability | Status | Notes |
| --- | --- | --- | --- |
| IG-01 | Instagram Login OAuth | verified | Official API OAuth authorize host and messaging scope defaults corrected; focused OAuth tests pass |
| IG-02 | Facebook Login/Graph compatibility | verified | Explicit Facebook Graph and Instagram Login client factories select different Graph hosts |
| IG-03 | Image/Reel/carousel/story publishing | in_progress | Core flow exists; current options and input constraints need parity |
| IG-04 | Resumable video upload | verified | Existing flow is structurally present; refresh version/source proof |
| IG-05 | Messaging | in_progress | Text/image/private reply exist; current media/template/reaction types missing |
| IG-06 | Comments/moderation | in_progress | Core actions exist; replies and comment toggles remain |
| IG-07 | Account/media insights | planned | Account insights need a curated typed client |
| IG-08 | Webhooks/subscriptions | in_progress | Current change fields and defaults are incomplete |
| IG-09 | Generated Effect entrypoint | blocked | Current Instagram alias is Facebook-shaped |

## TikTok Business detail

| ID | Capability | Status | Notes |
| --- | --- | --- | --- |
| TT-01 | Business OAuth | verified | Business adapter retains provider-granted scopes and identifies the `business-login` credential family |
| TT-02 | Marketing/Advertiser OAuth | in_progress | Marketing adapter now identifies the `marketing-api` family and preserves caller scope context; refresh/revoke semantics remain |
| TT-03 | Generated Marketing API | verified | Broad generated surface; live-doc refresh and scope metadata remain |
| TT-04 | Curated Business account/content clients | in_progress | Useful clients exist; transport duplication remains |
| TT-05 | TikTok Business webhook management | verified | Official VIDEO/COMMENT account categories plus explicit DIRECT_MESSAGE setup are typed and tested |
| TT-06 | TikTok Business webhook parsing | verified | Valibot schemas, official comment/message event variants, and hardened signature verification are tested |
| TT-07 | TikTok platform-first leaf | verified | `@openpromo/tiktok/webhooks`, `@openpromo/ad-platforms/tiktok`, and `/tiktok/webhooks` build |
| TT-08 | Generated TypeScript/Valibot/Effect parity | in_progress | Targets exist; verify generated source and error behavior together |

## Update protocol

For each implementation slice:

1. Link the source input or official provider reference.
2. Record the exact package/path changed.
3. Add a fixture or compile-time proof for the provider behavior.
4. Run the narrowest package checks, then the cross-platform release checks.
5. Move the row to `verified` only after the published entrypoint is tested.
