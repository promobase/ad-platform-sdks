# Examples

Runnable showcases for the OpenPromo SDK family. Every example is
type-checked by CI (`bun run typecheck:examples`).

| Example | Shows |
| --- | --- |
| [`webhooks/construct-events.ts`](./webhooks/construct-events.ts) | The unified Stripe-style webhook surface: one call verifies + parses + extracts typed `{ type, data }` events for exhaustive pattern matching across Facebook, Instagram, Threads, TikTok, and X. **Self-contained** — run it without credentials. |
| [`oauth/oauth-flow.ts`](./oauth/oauth-flow.ts) | The normalized `oauth` adapter contract: authorize, exchangeCode, `.result` façades, PKCE, and token redaction. |
| [`quickstart.ts`](./quickstart.ts) | Construct typed clients for every platform from the umbrella package. |

Package-level examples also live next to their packages, e.g.
[`packages/meta-business-sdk/examples/`](../packages/meta-business-sdk/examples/).

## Run

```bash
bun install
bun examples/webhooks/construct-events.ts          # no credentials needed
META_APP_ID=... META_APP_SECRET=... bun examples/oauth/oauth-flow.ts
META_TOKEN=... bun examples/quickstart.ts
```
