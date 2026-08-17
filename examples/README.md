# Examples

Runnable showcases for the OpenPromo SDK family. Every example is
type-checked by CI (`bun run typecheck:examples`).

| Example                                                                      | Shows                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`webhooks/chat-adapter-ingress.ts`](./webhooks/chat-adapter-ingress.ts)     | Compose Mosaic's first-party Chat adapters and official X callbacks into a generic, durable workspace ingress; the same seam accepts future iMessage/email adapters. **Self-contained** — run it without credentials.                              |
| [`webhooks/construct-events.ts`](./webhooks/construct-events.ts)             | The unified Stripe-style webhook surface: one call verifies + parses + extracts typed `{ type, data }` events for exhaustive pattern matching across Facebook, Instagram, Threads, TikTok, and X. **Self-contained** — run it without credentials. |
| [`oauth/oauth-flow.ts`](./oauth/oauth-flow.ts)                               | The normalized `oauth` adapter contract: authorize, exchangeCode, `.result` façades, PKCE, and token redaction.                                                                                                                                    |
| [`quickstart.ts`](./quickstart.ts)                                           | Construct typed clients for every platform from the umbrella package.                                                                                                                                                                              |
| [`meta/basic-usage.ts`](./meta/basic-usage.ts)                               | Meta Graph: read an ad account, list campaigns, create a campaign.                                                                                                                                                                                 |
| [`meta/crud-operations.ts`](./meta/crud-operations.ts)                       | Create, read, update, and delete operations on generated objects.                                                                                                                                                                                  |
| [`meta/pagination.ts`](./meta/pagination.ts)                                 | Async-iterate paginated collections with typed items.                                                                                                                                                                                              |
| [`meta/type-safety-demo.ts`](./meta/type-safety-demo.ts)                     | Compile-time field and enum validation on generated endpoints.                                                                                                                                                                                     |
| [`meta/openpromo-integration-flow.ts`](./meta/openpromo-integration-flow.ts) | The OpenPromo composition seam: OAuth, grants, clients, and durable steps.                                                                                                                                                                         |

## Run

```bash
bun install
bun examples/webhooks/construct-events.ts          # no credentials needed
META_APP_ID=... META_APP_SECRET=... bun examples/oauth/oauth-flow.ts
META_TOKEN=... bun examples/quickstart.ts
```
