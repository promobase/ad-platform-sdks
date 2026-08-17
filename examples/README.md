# Examples

Runnable showcases for the OpenPromo SDK family. Every example is
type-checked by CI (`bun run typecheck:examples`).

The `inbox/chat-sdk-think-inbox.ts` example is Worker-runtime code: it is
type-checked here but must run inside the Cloudflare Agent/Worker runtime,
because `agents` and Think import Cloudflare-only modules. The webhook examples
below are the local Bun-runnable samples.

| Example                                                                      | Shows                                                                                                                                                                                                                                                                 |
| ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`inbox/chat-sdk-think-inbox.ts`](./inbox/chat-sdk-think-inbox.ts)           | The intended OpenPromo composition: Mosaic adapter + Chat SDK transport ingress + canonical persistence + one workspace Think InboxAgent with its own durable submission/batching lane. It explicitly avoids Chat SDK burst/debounce and per-thread reasoning agents. |
| [`webhooks/chat-adapter-ingress.ts`](./webhooks/chat-adapter-ingress.ts)     | Compose Mosaic's first-party Chat adapters and official X callbacks into a generic, durable workspace ingress; the same seam accepts future iMessage/email adapters. **Self-contained** — run it without credentials.                                                 |
| [`webhooks/construct-events.ts`](./webhooks/construct-events.ts)             | The unified Stripe-style webhook surface: one call verifies + parses + extracts typed `{ type, data }` events for exhaustive pattern matching across Facebook, Instagram, Threads, TikTok, and X. **Self-contained** — run it without credentials.                    |
| [`oauth/oauth-flow.ts`](./oauth/oauth-flow.ts)                               | The normalized `oauth` adapter contract: authorize, exchangeCode, `.result` façades, PKCE, and token redaction.                                                                                                                                                       |
| [`quickstart.ts`](./quickstart.ts)                                           | Construct typed clients for every platform from the umbrella package.                                                                                                                                                                                                 |
| [`meta/basic-usage.ts`](./meta/basic-usage.ts)                               | Meta Graph: read an ad account, list campaigns, create a campaign.                                                                                                                                                                                                    |
| [`meta/crud-operations.ts`](./meta/crud-operations.ts)                       | Create, read, update, and delete operations on generated objects.                                                                                                                                                                                                     |
| [`meta/pagination.ts`](./meta/pagination.ts)                                 | Async-iterate paginated collections with typed items.                                                                                                                                                                                                                 |
| [`meta/type-safety-demo.ts`](./meta/type-safety-demo.ts)                     | Compile-time field and enum validation on generated endpoints.                                                                                                                                                                                                        |
| [`meta/openpromo-integration-flow.ts`](./meta/openpromo-integration-flow.ts) | The OpenPromo composition seam: OAuth, grants, clients, and durable steps.                                                                                                                                                                                            |

## Run

```bash
bun install
bun examples/webhooks/construct-events.ts          # no credentials needed
META_APP_ID=... META_APP_SECRET=... bun examples/oauth/oauth-flow.ts
META_TOKEN=... bun examples/quickstart.ts
```
