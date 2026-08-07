# OpenPromo First-Party SDK Migration

OpenPromo should consume provider behavior from this repository and retain only product-specific
orchestration in the application. The migration is complete when OpenPromo adapters translate its
stored account records into SDK configuration and no longer contain provider HTTP routes, OAuth
protocol code, response normalization, or polling implementations.

## Ownership boundary

The SDK owns:

- provider HTTP requests, authentication protocol details, pagination, retries, and typed errors;
- publishing, inbox, lifecycle, backfill, and metrics primitives;
- provider response types and cross-platform normalized post metrics;
- injectable `fetch` and `AbortSignal` boundaries for Workers, tests, and tracing;
- agent-facing operations whose schemas can be reused by AI SDK, Code Mode, MCP, or CLI hosts.

OpenPromo owns:

- encrypted credentials and account/workspace authorization;
- database records, idempotency keys, billing, durable workflows, polling schedules, and webhooks;
- media storage, public asset URLs, review/approval policy, and product-level error messages;
- mapping provider identifiers to OpenPromo posts and persisting both normalized and raw results.

Do not wrap the SDK with another general provider client. A thin adapter may load credentials,
construct a client, execute one SDK primitive, and map the result into OpenPromo's domain model.

## Provider coverage

| Platform                | Authentication                     | Publish and lifecycle                                         | Inbox and engagement                     | Backfill and metrics                                                    |
| ----------------------- | ---------------------------------- | ------------------------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------- |
| Facebook                | OAuth, profile, permissions, pages | feed, photos, video, stories, webhook subscribe/unsubscribe   | comments, private replies, conversations | page/post insights and normalized post metrics                          |
| Instagram               | OAuth and business profile         | containers, publishing, status, webhook subscribe/unsubscribe | comments, replies, messaging             | media insights with feed/reel/story-aware defaults                      |
| Threads                 | OAuth and refresh                  | containers, publishing, status                                | replies and webhooks                     | media insights                                                          |
| TikTok Business         | Business OAuth and refresh         | photo/video publishing and status                             | comments, mentions, messaging, webhooks  | account/video reads and normalized metrics                              |
| TikTok Developer        | Login Kit OAuth with PKCE          | direct post, file upload, photo post, status                  | creator information                      | Display API video list/query and normalized metrics                     |
| LinkedIn                | OAuth and user info                | personal and organization posts, image/video upload           | comments and reactions                   | author post listing, social metadata, member and organization analytics |
| X                       | OAuth 2 with PKCE, refresh, revoke | posts and media upload                                        | direct-message list/send                 | post lookup with public and owner metrics                               |
| YouTube                 | offline OAuth, refresh, revoke     | resumable video upload                                        | comments through Data API resources      | video statistics and normalized metrics                                 |
| Google Business Profile | offline OAuth and refresh          | local post create/get/list/update/delete                      | call-to-action and offer/event post data | batched post insights and daily location performance                    |

TikTok Developer support is intentionally retained for existing Login Kit/Content Posting accounts.
New TikTok Business features should use the Business client when the provider grants equivalent
access, but existing connections can migrate without changing their authorization model.

## Recommended adapter shape

```ts
import { Meta, TikTok } from "@mosaic/ad-platforms";
import { createAdPlatforms } from "@mosaic/ad-platforms/operations";

export function createWorkspacePlatforms(credentials: {
  metaToken: string;
  instagramAccountId: string;
  tiktokToken: string;
  tiktokBusinessId: string;
}) {
  const meta = Meta.createClient({ accessToken: credentials.metaToken });

  return createAdPlatforms({
    connections: {
      instagram: Meta.Instagram.createClient({
        api: meta,
        igAccountId: credentials.instagramAccountId,
      }),
      tiktok: TikTok.createClient({
        accessToken: credentials.tiktokToken,
        businessId: credentials.tiktokBusinessId,
      }),
    },
  });
}
```

Use `platform.posts.getMetrics()` for one post and `platform.posts.getMetricsMany()` for backfills.
The bulk result preserves input order among successes and returns indexed failures without dropping
the successful provider responses. Persist `common` for cross-platform reporting and `provider` for
provider-specific features and future re-normalization.

## Migration sequence

1. Inventory each OpenPromo provider route by OAuth, publishing, inbox, webhooks, metrics, and
   backfill. Map it to the table above before deleting code.
2. Replace raw OAuth and refresh requests first so all later work shares one token contract.
3. Replace read-only account, content, inbox, and metrics calls; compare stored raw fixtures before
   switching production reads.
4. Replace publishing and upload calls behind the existing durable-operation boundary. Keep
   OpenPromo's idempotency, billing, polling, and persistence unchanged.
5. Move webhook verification and payload parsing to the SDK while retaining OpenPromo routing and
   durable event handling.
6. Delete superseded provider clients only after focused tests prove all call sites use the SDK.

Live provider validation remains a separate credentialed acceptance step. Repository tests use
mocked transports and prove request/response contracts without spending provider quota or
publishing content.
