# First-party platform parity plan

## Objective

Make Facebook, Instagram, and TikTok Business first-party-quality Mosaic adapters for the
provider capabilities this repository claims to support: OAuth, typed transport/CRUD, publishing,
webhooks, generated TypeScript/Valibot/Effect contracts, and ergonomic platform-first exports.

The SDK remains provider-native. OpenPromo continues to own token persistence, connected-account
resolution, workflow orchestration, policy, idempotency, Inbox/domain processing, and normalized
product read models.

## Decision: start with Instagram authentication

The first implementation slice is Instagram authentication because the current surface can combine
two different documented Meta API families:

1. Instagram Login, using Instagram User tokens and the Instagram API hosts.
2. Facebook Login/Page access, using Graph API clients and Page/User token discovery.

These should become explicit, type-distinct adapters. We should not silently change the existing
client's host or token behavior. The adapter result must identify its credential family so a caller
cannot accidentally pass an Instagram Login token to a Facebook Graph client.

## Non-goals

- Do not implement OpenPromo `Ent` classes, Inbox handlers, publisher workflows, or policy here.
- Do not normalize provider payloads into product-domain records inside Mosaic.
- Do not include TikTok consumer Login Kit or consumer Content Posting API in the TikTok Business
  parity target.
- Do not hand-edit generated trees; update their source inputs and regenerate them.
- Do not remove `@openpromo/meta` compatibility exports until platform-first parity is proven.

## Work nodes

### M1 — Make Instagram credential families explicit

- Add separate Instagram Login and Facebook Graph/Page OAuth/client types.
- Correct the Instagram Login authorization host and messaging scope defaults.
- Preserve scopes and credential-family metadata in normalized OAuth results.
- Add compile-time and fixture tests proving host/token pairing.

### M2 — Harden Facebook provider transport and current API coverage

- Bind Page clients to an explicit Page access token.
- Revalidate the current Meta API version and regenerate from pinned official inputs.
- Replace or deprecate stale ordinary video and unsupported video-node helpers.
- Add current Reel scheduling options and preserve all provider-native IDs.
- Consolidate legacy and canonical webhook verification on the hardened implementation.

### M3 — Bring Facebook and Instagram webhooks to current parity

- Expand schemas and event extraction for currently documented subscription fields.
- Align subscription helpers with provider field names and defaults.
- Keep fast acknowledgement and domain admission outside Mosaic.
- Add raw fixtures and discriminated event tests for every supported event family.

### M4 — Complete Instagram curated transport coverage

- Add typed messaging variants supported by the current Messaging API.
- Add account insights and missing comment moderation helpers where provider APIs support them.
- Expose current publishing options such as alt text, AI labeling, trials, sharing, and tagging.
- Fix container ID and story input types without unsafe casts.

### M5 — Make TikTok Business first-class

- Add `@openpromo/ad-platforms/tiktok` and a dedicated TikTok Business webhook leaf.
- Migrate hand-authored webhook schemas from Zod to Valibot and harden signature handling.
- Reconcile webhook management event coverage with the Business API docs.
- Unify generated and curated TikTok request, envelope, error, retry, and rate-limit behavior.
- Model Business Login and Marketing/Advertiser credentials as distinct families while retaining
  the direct `AllPlatforms.TIKTOK` platform identity.
- Populate required scopes/capability metadata where the official source documents them.

### M6 — Release and parity gate

- Add published-package subpath resolution tests, not only source-relative tests.
- Verify TypeScript, Valibot, and Effect outputs for all three platform surfaces.
- Run focused tests, codegen checks, package builds, docs checks, lint, format, and release checks.
- Update the tracker and platform docs so claims match verified coverage.

## Acceptance criteria

- [ ] Instagram Login and Facebook Graph/Page credentials are type-distinct and host-correct.
- [ ] Facebook and Instagram curated clients use explicit provider credentials and preserve native
  IDs/statuses.
- [ ] Meta webhook parsing and subscription helpers cover the documented event families claimed by
  the package.
- [ ] TikTok Business has first-class OAuth, generated contracts, curated Business API clients,
  webhook parsing/management, and platform-first package exports.
- [ ] No supported surface relies on a weaker duplicate verifier or an undocumented fallback path.
- [ ] OpenPromo can consume provider-native results without Mosaic owning product workflow logic.

## Source references

- [Meta Facebook Login manual flow](https://developers.facebook.com/docs/facebook-login/guides/advanced/manual-flow/)
- [Instagram Login](https://developers.facebook.com/documentation/instagram-platform/instagram-api-with-instagram-login)
- [Instagram OAuth authorize](https://developers.facebook.com/documentation/instagram-platform/reference/oauth-authorize)
- [Instagram Content Publishing](https://developers.facebook.com/documentation/instagram-platform/content-publishing)
- [Instagram Messaging API](https://developers.facebook.com/documentation/instagram-platform/instagram-api-with-instagram-login/messaging-api)
- [Instagram webhooks](https://developers.facebook.com/documentation/instagram-platform/webhooks)
- [Facebook Page Posts](https://developers.facebook.com/docs/pages-api/posts/)
- [Facebook Page Messages](https://developers.facebook.com/docs/graph-api/reference/page/messages/)
- [Facebook Page subscribed apps](https://developers.facebook.com/docs/graph-api/reference/page/subscribed_apps/)
- [TikTok API for Business](https://business-api.tiktok.com/portal)
- [TikTok Business authentication](https://business-api.tiktok.com/portal/docs/authentication/v1.3)
- [TikTok Marketing API authorization](https://business-api.tiktok.com/portal/docs/marketing-api-authorization/v1.3)
- [TikTok Accounts Webhooks](https://business-api.tiktok.com/portal/docs/accounts-api-webhooks-reference/v1.3)
- [TikTok Business Messaging webhooks](https://business-api.tiktok.com/portal/docs/subscribe-to-business-messaging-webhook-events-via-webhooks-api/v1.3)

## Current state

- Status: in_progress
- Completed slices: Instagram credential-family transport split; Meta verifier consolidation; TikTok Business webhook Valibot/leaf parity; removal of misleading Meta Effect aliases; published platform subpath verification
- Current blocker: none
- Consumer impact: no OpenPromo changes until adapter parity is verified

## Checkpoint — 2026-08-15

- Changed: Instagram client factories/types/OAuth defaults, normalized Graph credential-family
  metadata, Facebook webhook defaults/verifier routing, TikTok Business webhook schemas/signatures/
  management, and platform-first TikTok exports.
- Proof: Meta focused tests (83) and typecheck; TikTok Business tests (26), typecheck, and build;
  umbrella package typecheck/build/tests (25); root format, lint, docs lint, release, effect, and
  generated-fingerprint checks pass; built platform leaves import successfully from `dist`.
- Remaining: current Meta API regeneration, Instagram/Facebook webhook schema parity, curated
  publishing/transport gaps, TikTok transport unification, and published-dist subpath verification.

## Checkpoint — 2026-08-15 — OAuth metadata slice

- Changed: `sdk-runtime` OAuth exchange/refresh inputs now accept scope context; Meta adapters
  preserve scope context and typed Graph credential families; TikTok Business, Marketing API, and
  Developer compatibility adapters expose typed credential-family metadata.
- Proof: runtime, Meta, and TikTok OAuth typechecks pass; Meta OAuth fixtures (4) and TikTok OAuth
  fixtures (3) pass; clean-commit `bun run codegen:check` passes.
- Remaining: current Meta API regeneration, richer FB/IG webhook schema parity, curated publishing
  gaps, and TikTok transport unification.

## Checkpoint — 2026-08-15 — generated Effect partition

- Changed: removed the misleading `@openpromo/meta/instagram/effect`,
  `@openpromo/meta/threads/effect`, and umbrella aliases; Nimbus reference generation now emits a
  truthful native TypeScript/Valibot note when no generated Effect partition exists.
- Proof: generated-contract docs and package exports no longer advertise Facebook-shaped aliases;
  the next package/codegen checks will verify the public surface.
- Remaining: create a true Instagram/Threads Effect partition only if a source-backed IR exists;
  otherwise keep the aliases absent.

## Checkpoint — 2026-08-15 — published platform subpaths

- Changed: added `scripts/check-published-subpaths.mjs` and the `published:check` command. The
  checker reads package export maps, resolves concrete and wildcard `import` targets, and imports
  the built files for Meta, the umbrella package, and TikTok Business.
- Proof: clean package builds followed by `bun run published:check` successfully imported 109
  published entrypoints, including the remaining Facebook Effect path and the direct FB/IG/TT
  leaves.
- Remaining: current Meta API regeneration, required scope metadata, TikTok transport unification,
  and curated Facebook/Instagram/TikTok capability gaps.
