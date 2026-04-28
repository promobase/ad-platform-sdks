# @promobase/x-sdk

Type-safe TypeScript SDK for X API v2 publishing, media upload, and user lookup.

This package is generated with Fern from X's official OpenAPI spec:

- Source URL: https://api.x.com/2/openapi.json
- Snapshot: `../../fern/openapi/x-openapi.json`
- Fern config: `../../fern/generators.yml`

The current SDK intentionally filters the full spec to OpenPromo's publishing migration surface:

- Posts: create, delete, get by ID, get by IDs
- Users: authenticated user, user by ID, user by username
- Media: lookup, one-shot upload, chunked initialize/append/finalize, upload status

## Generate

```bash
bun --filter='./packages/x-sdk' run codegen:check
bun --filter='./packages/x-sdk' run codegen
```

Local generation uses Fern's Docker-backed generator and does not require a `FERN_TOKEN`.

## Use

```ts
import { X } from "@promobase/x-sdk";

const client = X.createClient({ token: process.env.X_ACCESS_TOKEN! });

const post = await client.tweets.createPosts({
  text: "New launch is live.",
});

console.log(post.data?.id);
```
