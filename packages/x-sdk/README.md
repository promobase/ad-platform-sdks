# @openpromo/x

Type-safe TypeScript SDK for X API v2 publishing, media upload, and user lookup.

This package is generated with Fern from X's official OpenAPI spec:

- Source URL: https://api.x.com/2/openapi.json
- Snapshot: `../../fern/openapi/x-openapi.json`
- Fern config: `../../fern/generators.yml`

The generated Effect and agent catalog accounts for all 176 operations in the pinned OpenAPI
snapshot. It includes Posts, Users, Lists, Spaces, Direct Messages, Communities, Compliance,
streaming connections, webhooks, media uploads, and the other tagged X API resources. The manifest
records OAuth scopes, authentication schemes, transport protocols, and the source checksum.

X Ads is a separate provider API and is not represented by the core X API OpenAPI snapshot.

## Generate

```bash
bun --filter='./packages/x-sdk' run codegen:check
bun --filter='./packages/x-sdk' run codegen
```

Local generation uses Fern's Docker-backed generator and does not require a `FERN_TOKEN`.

## Use

```ts
import { X } from "@openpromo/x";

const client = X.createClient({ token: process.env.X_ACCESS_TOKEN! });

const post = await client.posts.createPosts({
  text: "New launch is live.",
});

console.log(post.data?.id);
```

`client.tweets` and the `@openpromo/x/tweets` export remain as compatibility aliases for the
upstream `posts` resource name introduced in OpenAPI 2.167.
