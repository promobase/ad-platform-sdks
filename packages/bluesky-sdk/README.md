# @openpromo/bluesky

Type-safe TypeScript SDK for **Bluesky and the AT Protocol** — posts (with rich text facets and image embeds), feeds, profiles, graph operations, notifications, and sessions. Generated directly from the official AT Protocol lexicons.

## Install

```bash
bun add @openpromo/bluesky
```

## Quick start

```ts
import { Bluesky } from "@openpromo/bluesky";

// Auth: app passwords are the standard for bots and agents.
// Create one at Settings → Security → App passwords.
const bsky = Bluesky.createClient({
  handle: "user.bsky.social",
  appPassword: "xxxx-xxxx-xxxx-xxxx",
});

// Post — auto-detects link facets, uploads and embeds images
const post = await bsky.posts.createPost({
  text: "Hello from OpenPromo! https://openpromo.app",
  image: { bytes: imageBytes, alt: "Screenshot of the app" },
});

// Feeds, profiles, graph, notifications
const timeline = await bsky.feed.getTimeline({ limit: 50 });
const profile = await bsky.actor.getProfile({ actor: "bsky.app" });
const followers = await bsky.graph.getFollowers({ actor: "me.bsky.social" });
const unread = await bsky.notification.getUnreadCount({});

// Sessions (alternative to app passwords for interactive apps)
const session = await bsky.server.createSession({ identifier: "user.bsky.social", password: "..." });
const clientWithToken = Bluesky.createClient({ accessToken: session.accessJwt });
```

## Error handling

All failures throw `BlueskyApiError` (extends the shared runtime `ApiError`) with the XRPC error code:

```ts
try {
  await bsky.actor.getProfile({ actor: "not-a-real-handle" });
} catch (error) {
  if (error instanceof Bluesky.ApiError) {
    console.log(error.status, error.errorCode); // 400, "InvalidRequest"
  }
}
```

The client handles **retries with exponential backoff** (429/5xx) and supports custom PDS base URLs (`service` option) for other AT Protocol servers.

## Generated surface

The SDK is **lexicon-driven codegen** — all 197 endpoints across 21 namespaces are generated from the official AT Protocol lexicons (pinned from `bluesky-social/atproto` with per-file checksums):

```bash
bun run codegen             # regenerate from the pinned lexicons
bun run codegen:refresh     # re-pin upstream lexicons, then regenerate
```

Client sections: `actor`, `feed`, `graph`, `repo`, `server`, `notification`, `identity`, `sync`, `bookmark`, `labeler`, `unspecced`, and more. Endpoints map to XRPC calls (`/xrpc/app.bsky.feed.getTimeline`, etc.).

## Namespace

| Member | Description |
| ------ | ----------- |
| `Bluesky.createClient(opts)` | Full AT Protocol client (197 generated endpoints) |
| `Bluesky.posts.createPost(opts)` | Publishing convenience — richtext facets + image embeds |
| `Bluesky.ApiClient` | Core HTTP client (app-password or session auth) |
| `Bluesky.ApiError` | Typed error class |

## Generated contracts

Generated TypeScript and Valibot contracts are available from `@openpromo/bluesky/types` and
`@openpromo/bluesky/valibot`; the existing Effect surface remains at `@openpromo/bluesky/effect`.
