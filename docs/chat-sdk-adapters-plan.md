# Chat SDK Adapters — Plan

> Status: M3 transport seam in progress (2026-08-16) — Messenger + Instagram
> DM adapters with official parity, Meta comment adapters, and the full TikTok
> package (comments + Business Messaging DMs). The next exit is a generic,
> runtime-independent webhook extraction contract for OpenPromo's durable
> ingress.
> Owner: Ad Platform SDKs. Companion to
> [`openpromo-migration.md`](./openpromo-migration.md) — this plan extends its
> ownership boundary to Chat SDK adapter packages.

## Decision

Mosaic ships **first-party Chat SDK adapters** for the provider surfaces
OpenPromo needs, built on this repository's generated clients and webhook
schemas — not on Vercel's `@chat-adapter/*` implementations. Two tracks:

1. **Cross-validate** surfaces that already have an official Chat SDK adapter
   (Messenger DMs, Instagram DMs, and X): we still ship our own implementation
   where OpenPromo needs a Mosaic-owned transport, but the official adapter
   serves as a behavioral oracle. X is currently selected for official-adapter
   consumption rather than a Mosaic reimplementation.
2. **Build** surfaces with no official adapter: Facebook/Instagram **post
   comments**, **TikTok** (comments + messaging), Threads replies (backlog).

The official adapter catalog today (`chat-sdk.dev`, checked 2026-08-15): Slack,
Teams, Google Chat, Discord, Telegram, GitHub, Linear, Notion, WhatsApp,
Twilio, Messenger (FB DMs), Instagram (IG DMs), X, XChat, Web. **No Threads,
no TikTok, and no post-comment surface for Facebook or Instagram.**

## Ownership boundary

Per `openpromo-migration.md`, the SDK owns provider HTTP, auth protocol,
pagination, retries, typed errors, **webhook verification and payload
parsing**, and inbox primitives. A Chat SDK adapter is exactly that: webhook
verification → payload parsing → normalized inbound events → outbound send.
The adapter is a thin transport shell over machinery this repository already
owns; building it in OpenPromo would duplicate the schemas and clients here.

OpenPromo keeps what it owns: webhook routing, durable event handling,
credentials, canonical storage, review policy. It consumes the adapters from
the per-workspace Chat ingress (fan-out) and keeps InboxAgent as the decision
brain, admitted through `submitInboxMessageEvent`.

The adapter's existing protected `parseWebhook()` methods remain the
provider-specific decoding layer. The public `parseWebhookEvents(request)` seam
only adds verified, thread-normalized extraction without requiring a Chat
runtime. It does not persist, deduplicate, enqueue, or invoke an agent; the
caller must durably offload the returned events before acknowledging a webhook.

## Surface inventory

| Surface                                                                                | Official adapter             | Mosaic building blocks (exist today)                                                                                  | Track               |
| -------------------------------------------------------------------------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Facebook Messenger DMs                                                                 | ✅ `@chat-adapter/messenger` | `parseFacebookWebhook`/`safeParseFacebookWebhook`, `fbWebhookPayloadSchema`, `facebook/messaging.ts` (send, reply)    | Validate            |
| Instagram DMs                                                                          | ✅ `@chat-adapter/instagram` | `parseInstagramWebhook`, `igWebhookPayloadSchema`, `instagram/messaging.ts` (send, reply, privateReply)               | Validate            |
| Facebook post comments                                                                 | ❌                           | `facebook/comments.ts` (create, list, reply, hide, delete), feed `changes` webhook value schema                       | Build               |
| Instagram post comments                                                                | ❌                           | `instagram/comments.ts` (create, list, reply, hide, delete), comments webhook field schema                            | Build               |
| Threads replies                                                                        | ❌                           | `parseThreadsWebhook`, `threadsWebhookPayloadSchema`                                                                  | Build (backlog)     |
| TikTok comments                                                                        | ❌ (no adapter anywhere)     | `tiktok-business-sdk`: `clients/webhooks.ts` (config list/update/delete), `webhook-schemas.ts`, `clients/comments.ts` | Build               |
| TikTok messaging                                                                       | ❌ (no adapter anywhere)     | `tiktok-business-sdk`: `clients/messaging.ts` (conversations, messages, auto-messages)                                | Build (complete)    |
| X DMs / mentions                                                                       | ✅ `@chat-adapter/x`         | Official Chat SDK adapter selected for transport validation and OpenPromo ingress composition                         | Validate (selected) |
| WhatsApp, Slack, Discord, Telegram, Teams, Google Chat, Twilio, GitHub, Linear, Notion | ✅                           | n/a — not OpenPromo product surfaces today                                                                            | Validate (backlog)  |

## Package layout

Mirror the repository convention (per-platform packages + umbrella):

```text
packages/chat-adapter-core/     # shared: comments-as-threads normalization,
                                # thread-id helpers, capability table,
                                # webhook verification/extraction, generic event
                                # contract, @chat-adapter/tests wiring, adapter base
packages/chat-adapter-meta/     # createMessengerAdapter(), createInstagramAdapter()
                                # (DMs + comments)
packages/chat-adapter-tiktok/   # createTikTokAdapter() (comments + messaging)
packages/chat-adapters/         # umbrella re-export (@openpromo/chat-adapters)
```

Dependencies: `chat` + `@chat-adapter/shared` (peer), `@chat-adapter/tests`
(dev), and the owning platform SDK via `workspace:*`. Adapters accept
credentials per-instance (matching OpenPromo's per-account tokens), not the
official adapters' single-tenant env auto-detect.

## Adapter contract

Implement the Chat SDK `Adapter` surface (see `chat-sdk.dev/docs/contributing/building.md`):

- `webhooks[adapterName](request)` — verification (reuse `verifyWebhookSignature`
  - Zod parsers), provider ack, GET challenge handling.
- Thread/Message normalization with stable thread-id schemes:
  - DMs: `messenger:{accountId}:{recipientId}`,
    `instagram:{accountId}:{userId}`. Account scope is required when one
    workspace Chat runtime mounts multiple connected accounts; the official
    Messenger account-less shape is not safe for this multi-tenant runtime.
  - Comments: `{platform}:{accountId}:comment:{parentCommentId}` (see below).
- Posting: `thread.post`, `startTyping`, `markAsRead`; capability flags for
  edits (unsupported on both Meta surfaces), streaming (buffered), reactions
  (receive-only), cards/quick replies.
- Provider send calls go through the owning platform SDK clients
  (`createMessaging`, `createComments`), never raw fetch in the adapter.
- `parseWebhookEvents(request)` verifies the request, calls the adapter's
  existing provider parser, and returns generic `AdapterWebhookEvent` values.
  The event contract has stable common fields (`kind`, `threadId`, optional
  `eventId`, message/action/reaction, raw payload) plus open-ended `metadata`
  and custom event kinds. It contains no workspace, account, Inbox, or
  provider-family fields.
- Adapter instances accept an explicit runtime name so one workspace can mount
  multiple accounts/surfaces without Chat SDK name collisions. Callers that
  own canonical history can disable Chat SDK thread-history persistence.
- Official X remains a special composition: its Chat SDK adapter is mounted in
  the ingress Chat runtime and its callback output is translated into the same
  application-level event envelope. Mosaic does not duplicate X's webhook
  parser merely to force it through the first-party base classes.

## Comments-as-threads model (the differentiating piece)

The official adapters ignore comments entirely; this is why first-party
adapters win:

- **Thread identity**: one thread per comment tree, rooted at the top-level
  comment id. Customer top-level comment → thread created; business reply and
  customer replies are messages in the same thread.
- **Message identity**: comment id; verbs `add`/`remove`/`hide`/`delete` map
  to create/delete message semantics; edits update text in place.
- **Thread metadata**: post/media id, permalink, caption snapshot (feeds
  OpenPromo's `contentId`/post-context needs without live API calls on every
  event).
- **IG specifics**: story replies arrive as DM threads; `move_to_dm` private
  replies map to `instagram/messaging.ts: privateReply`.
- **TikTok**: comment tree keyed by `parent_comment_id` (falls back to
  `comment_id`), video id in thread metadata; delete events tombstone when the
  comment is already gone from the API.

## Cross-validation track (official-adapter surfaces)

For Messenger DMs and Instagram DMs, before/while shipping our own adapter:

1. **Event-shape parity**: run real webhook fixtures through both the official
   adapter and our Zod schemas; diff normalized Thread/Message output.
2. **Outbound parity**: same message via official adapter and via our clients;
   assert identical provider payloads.
3. **Capability diff**: record official capability table; ours must not
   under-declare (or must document why).
4. **Auth diff**: official adapters auto-detect env credentials; ours take
   per-instance tokens — validate refresh/long-lived-token flows against the
   existing OAuth services.
5. **Decision rule**: default is our first-party implementation; adopt the
   official adapter behind a facade only if validation reveals an official
   capability (e.g. postback handling) we do not want to own, and record that
   in this doc.

## Build track (missing surfaces)

- **Phase 1 — Meta adapter**: `chat-adapter-core` + `chat-adapter-meta`
  (messenger + instagram DMs, comments-as-threads). Highest value; unblocks
  both Meta comment surfaces with one design.
- **Phase 2 — TikTok adapter**: `chat-adapter-tiktok` (comments + messaging;
  note the 10-message/48h Business Messaging API limit).
- **Phase 3 — Transport extraction**: generic verified event extraction,
  account-scoped adapter names, and a no-Chat-runtime path for the durable
  OpenPromo ingress.
- **Phase 4 — Threads replies** and the other official-adapter platforms as
  validation-only backlog entries. X uses the official adapter unless Mosaic
  later needs provider-owned capabilities that justify a facade.

## Testing and verification

- Unit tests with `@chat-adapter/tests` factories/matchers per adapter.
- Replay fixtures: captured real Meta/TikTok webhook payloads parsed through
  our Zod schemas (repo rule: no live provider calls in tests; mock transport).
- Cross-validation fixtures diff official vs our adapter output (Track 1).
- OpenPromo-side E2E (out of scope here): signed webhook → adapter extraction →
  durable ingress → InboxAgent admission → review, per the OpenPromo harness.

## Milestones

| Milestone | Scope                                                                                                                   | Exit proof                                                               |
| --------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| M0 spike  | `chat-adapter-core` scaffold; messenger+instagram DM adapters with replay fixtures; comments-as-threads shape confirmed | Fixture parity run vs official adapters; both DMs post via our clients   |
| M1        | `chat-adapter-meta` completes (comments surfaces)                                                                       | Comment-thread fixtures pass; OpenPromo ingress spike                    |
| M2        | `chat-adapter-tiktok`                                                                                                   | TikTok comment + messaging fixtures pass                                 |
| M3        | Generic transport extraction for all first-party adapters                                                               | Signed requests normalize without a Chat runtime; context is preserved   |
| M4        | Validation backlog for other official-adapter platforms                                                                 | Capability matrix filled in; X is validated through the official adapter |

## Non-goals

- No changes to codegen or the generated trees; webhook envelopes stay
  hand-maintained Zod schemas (the codegen owns Graph API objects/endpoints).
- No MCP/CLI exposure of the adapter packages.
- No live-provider tests in this repository.
- No migration of OpenPromo's webhook routes into Mosaic (routing stays
  OpenPromo's, per `openpromo-migration.md`). Mosaic owns verification and
  provider parsing; OpenPromo owns routing and durable admission.

## Open questions

- Base branch: **resolved** — work lives on `feat/chat-sdk-adapters` off `master`
  (the effect-native branch was a parallel `codex/` fork; adapters build on the
  same generated clients either way).
- Publish to chat-sdk.dev's vendor-official tier, or keep first-party only
  initially?
- `chat` peer-dep pinning and release cadence across adapter packages.
- Threads priority: after Phase 2 or parked with the validation backlog?
- Future iMessage and email adapters should implement the same generic
  extraction contract (or a small standalone equivalent) and put transport
  facts in `metadata`; do not extend the contract with DM/comment-only fields.
