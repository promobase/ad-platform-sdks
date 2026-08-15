# Effect API Migration

The SDK remains source-compatible for consumers of the existing Promise clients. Effect is now the
canonical runtime for newly generated contracts and the cross-platform operation catalog; Promise,
agent, CLI, and MCP APIs are projections at the boundary.

## Generated platform clients

Import the narrow platform entrypoint. It exports generated Effect schemas, endpoint descriptors,
capabilities, and `createEffectClient`.

```ts
import {
  createEffectClient,
  youtube_videos_list,
} from "@openpromo/youtube/effect";

const youtube = createEffectClient({
  baseUrl: "https://www.googleapis.com/",
  headers: { authorization: `Bearer ${accessToken}` },
});

// Typed errors remain in the Effect error channel.
const program = youtube.effect(youtube_videos_list, {
  part: "statistics",
  id: "video-id",
});

// The compatibility boundary runs the exact same descriptor and decoders.
const result = await youtube.promise(youtube_videos_list, {
  part: "statistics",
  id: "video-id",
});

await youtube.dispose();
```

The umbrella package exposes lazy platform subpaths such as
`@openpromo/ad-platforms/youtube/effect`, `@openpromo/ad-platforms/facebook/effect`, and
`@openpromo/ad-platforms/google-ads/v25/effect`. `@openpromo/ad-platforms/effect` exports only the
shared runtime so importing it does not eagerly load every provider schema.

Use `resolveRequest` when a provider requires protocol-specific serialization that cannot be
derived from path/query/header/body metadata. Credentials stay client-scoped; never put workspace
credentials in a process-global Layer.

## Cross-platform operations

Operation definitions now use Effect Schema. The catalog offers both boundaries:

```ts
import { Effect, Schema } from "effect";
import {
  createOperationCatalog,
  defineOperation,
} from "@openpromo/ad-platforms/operations";

const getPost = defineOperation({
  id: "example.posts.get",
  platform: "youtube",
  summary: "Get a post",
  tags: ["posts"],
  inputSchema: Schema.Struct({ postId: Schema.String }),
  outputSchema: Schema.Struct({ postId: Schema.String }),
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiresApproval: false,
  execute: ({ postId }) => Effect.succeed({ postId }),
});

const catalog = createOperationCatalog([getPost] as const);
const effect = catalog.invokeEffect("example.posts.get", { postId: "id" });
const result = await catalog.invoke("example.posts.get", { postId: "id" });
```

AI SDK uses Effect's Standard Schema v1 projection. Code Mode and CLI consume JSON Schema derived
from the same Effect Schema. The MCP server currently accepts Zod only, so its adapter converts the
derived JSON Schema to a transient Zod schema at registration time; Effect Schema remains the sole
contract source.

## Error and retry behavior

- Handle expected failures through tagged `PlatformError` variants.
- Reads retry bounded transient failures. Unsafe writes do not retry.
- Keyed writes retry only when the request includes an idempotency key.
- Aborting the Promise boundary interrupts the Effect fiber and underlying Fetch request.
- OpenPromo still owns durable retries, persisted idempotency, approvals, billing, and polling.

Run `bun run effect:check` to verify browser-compatible bundles and cold-import budgets, then run
the normal repository gates before publishing.
