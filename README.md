# ad-platform-sdks

**Type-safe TypeScript SDKs for every major ad platform. Fully typed, auto-generated, AI-agent ready.**

One install for all platforms. Wrong field names, missing params, and bad enum values fail at compile time.

## Packages

| Package | Platforms | npm |
|---------|-----------|-----|
| [`@promobase/ad-platforms`](./packages/ad-platforms/) | **All platforms — single install** | [![npm](https://img.shields.io/npm/v/@promobase/ad-platforms.svg)](https://www.npmjs.com/package/@promobase/ad-platforms) |
| [`@promobase/meta-business-sdk-ts`](./packages/meta-business-sdk/) | Meta (Facebook, Instagram, Threads) | [![npm](https://img.shields.io/npm/v/@promobase/meta-business-sdk-ts.svg)](https://www.npmjs.com/package/@promobase/meta-business-sdk-ts) |
| [`@promobase/tiktok-business-sdk`](./packages/tiktok-business-sdk/) | TikTok Business API | [![npm](https://img.shields.io/npm/v/@promobase/tiktok-business-sdk.svg)](https://www.npmjs.com/package/@promobase/tiktok-business-sdk) |

## Why This Exists

The official SDKs for Meta, TikTok, and Google ad platforms are either untyped JavaScript, incomplete, or poorly maintained. If you've used `facebook-nodejs-business-sdk`, you know the pain — `params: Object` everywhere, no autocomplete, no compile-time safety.

This project generates fully typed TypeScript clients directly from each platform's official API specs and wraps them in ergonomic client libraries:

- **994 typed Meta Graph API objects** — every node, edge, param, and enum
- **Field-level type narrowing** — request `["id", "name"]`, get `Pick<CampaignFields, "id" | "name">`
- **483 real enum values** — `status: "ACTIVE" | "PAUSED" | "DELETED"`, not `string`
- **High-level publishing clients** — `ig.media.publishPhoto()`, `fb.feed.publishVideoReel()`, `threads.posts.publishCarousel()`
- **Full messaging/inbox** — DMs, comments, replies, private replies with Zod-validated webhook payloads
- **OAuth + token refresh** — full flows for Instagram, Facebook, Threads
- **Batch API** — typed multi-request batches
- **Rate limiting** — auto-parses Meta's `x-app-usage` headers, configurable throttling
- **Retry with backoff** — exponential retry on 5xx and network errors
- **58 AI SDK tools** — expose everything as typed tools for LLM agents
- **Zero runtime dependencies** — native `fetch`, no axios

## Quick Start

```bash
bun add @promobase/ad-platforms
```

```typescript
import { Meta, TikTok } from "@promobase/ad-platforms";

// Meta (Facebook, Instagram, Threads)
const meta = Meta.createClient({ accessToken: process.env.META_TOKEN! });

const ig = Meta.Instagram.createClient({ api: meta, igAccountId: "ig_123" });
await ig.media.publishPhoto({ imageUrl: "...", caption: "Hello!" });

const fb = Meta.Facebook.createClient({
  api: meta,
  pageId: "page_456",
  accessToken: process.env.META_TOKEN!,
});
await fb.feed.publishPost({ message: "Hello Facebook!" });

const threads = Meta.Threads.createClient({
  accessToken: process.env.THREADS_TOKEN!,
  threadsUserId: "t_789",
});
await threads.posts.publishText({ text: "Hello Threads!" });

// TikTok
const tiktok = TikTok.createClient({
  accessToken: process.env.TIKTOK_TOKEN!,
  businessId: "biz_123",
});
```

## Typed Field Narrowing

```typescript
// Ask for specific fields → get only those fields (typed)
for await (const campaign of meta.adAccount("act_123").campaigns.list({
  fields: ["id", "name", "status", "daily_budget"],
})) {
  campaign.name;         // string
  campaign.status;       // "ACTIVE" | "PAUSED" | "DELETED" | ...
  campaign.foo;          // ❌ TS error — not in requested fields
}

// Create with typed required/optional params
await meta.adAccount("act_123").campaigns.create({
  name: "Summer Sale 2025",     // required
  objective: "OUTCOME_SALES",   // required (enum, autocomplete)
  special_ad_categories: [],    // required
  status: "PAUSED",             // optional
  // missing 'name'?            // ❌ TS error
});
```

## AI Agent Integration

Expose all platforms as AI SDK tools with a single call:

```typescript
import { createAllTools, Meta, TikTok } from "@promobase/ad-platforms";
import { generateText } from "ai";
import { anthropic } from "@ai-sdk/anthropic";

const meta = Meta.createClient({ accessToken: process.env.META_TOKEN! });

const tools = createAllTools({
  meta: {
    api: meta,
    igAccountId: "ig_123",
    pageId: "page_456",
    pageAccessToken: process.env.META_TOKEN!,
    adAccountId: "act_789",
    // Type-safe filter — agent only gets these tool groups
    include: ["instagram", "facebook", "campaigns"],
  },
  tiktok: {
    accessToken: process.env.TIKTOK_TOKEN!,
    businessId: "biz_123",
  },
});

// Agent now has 58+ typed tools
await generateText({
  model: anthropic("claude-sonnet-4-20250514"),
  tools,
  maxSteps: 10,
  prompt: "Post this photo to Instagram and TikTok, then check ad performance for last 7 days",
});
```

For larger tool sets, use middleware and routing:

```typescript
import { Meta } from "@promobase/ad-platforms";

// Middleware for logging, approval gates, analytics
const tools = Meta.AI.withMiddleware(
  Meta.AI.createTools({ api, igAccountId, pageId, pageAccessToken }),
  {
    beforeExecute: (ctx) => logger.info(`Calling ${ctx.toolName}`, ctx.params),
    afterExecute: (ctx) => metrics.track("tool_call", { durationMs: ctx.durationMs }),
    onError: (ctx) => alerting.notify(ctx.error),
  },
);

// Two-stage router — agent picks domain first, then gets specific tools
const router = Meta.AI.createRouter({
  tools: allTools,
  categories: ["instagram", "facebook", "campaigns"],
});
```

## Webhooks with Zod Validation

```typescript
import { Meta } from "@promobase/ad-platforms";

// GET handler — challenge verification
app.get("/webhooks/instagram", (req) => {
  const { valid, challenge } = Meta.Webhooks.verifyChallenge(req.query, VERIFY_TOKEN);
  return valid ? new Response(challenge) : new Response("Forbidden", { status: 403 });
});

// POST handler — never throws, validates signature + payload shape
app.post("/webhooks/instagram", async (req) => {
  const result = await Meta.Webhooks.safeParse.instagram({
    body: await req.text(),
    signature: req.headers.get("X-Hub-Signature-256")!,
    appSecret: INSTAGRAM_APP_SECRET,
  });

  if (!result.success) {
    switch (result.error.code) {
      case "INVALID_SIGNATURE": return new Response("Forbidden", { status: 403 });
      case "INVALID_PAYLOAD": return new Response("Bad Request", { status: 400 });
    }
  }

  // result.data is fully typed IGWebhookPayload
  for (const entry of result.data.entry) {
    for (const change of entry.changes ?? []) {
      if (change.field === "comments") {
        console.log(change.value.text); // string | undefined
      }
    }
  }
});
```

## Rate Limiting

```typescript
const api = Meta.createClient({
  accessToken: "...",
  rateLimiter: Meta.RateLimiter.create({
    highWaterMark: 0.9,  // pause at 90% usage
    onThrottle: ({ waitMs, usage }) => console.log(`Throttled, ${usage.callCount}%`),
  }),
  delay: (ms) => new Promise(r => setTimeout(r, ms)),
  retry: { maxRetries: 3, initialBackoffMs: 1000 },
});

// Every request: rate limit check → fetch → retry on 5xx → update usage from headers
```

## Who Is This For

- Teams running **Facebook/Instagram/TikTok ads** who want type safety and autocomplete
- Teams running **multi-platform ad campaigns** who want a consistent SDK experience
- Teams building **AI agents** for content publishing, campaign management, or ad ops
- Anyone tired of the official `facebook-nodejs-business-sdk` and its `Object` params
- TypeScript-first teams building **ad tech**, **marketing automation**, or **campaign management** tools

## Architecture

Each SDK follows the same pattern:

1. **Codegen** reads platform-specific API specs → generates fully typed TypeScript (994 objects for Meta, 150+ endpoints for TikTok)
2. **Shared runtime** (`@promobase/sdk-runtime`) provides the generic fetch client, async-iterable cursor, retry, rate limiting, and base error types
3. Each SDK provides its own **error class**, **pagination strategy**, **OAuth handlers**, and **high-level clients**
4. **AI tools layer** wraps everything as AI SDK tools with Zod schemas

## Development

```bash
git clone --recurse-submodules https://github.com/promobase/ad-platform-sdks.git
cd ad-platform-sdks
bun install

# Run tests (per package)
cd packages/meta-business-sdk && bun test tests/
cd packages/tiktok-business-sdk && bun test tests/

# Regenerate Meta SDK from API specs
cd packages/meta-business-sdk && bun run codegen
```

## Related

- [`facebook-nodejs-business-sdk`](https://github.com/facebook/facebook-nodejs-business-sdk) — the official (untyped) Node.js SDK this replaces
- [`facebook-business-sdk-codegen`](https://github.com/facebook/facebook-business-sdk-codegen) — the official API spec source
- [AI SDK](https://ai-sdk.dev/) — the framework our AI tools integrate with

## License

MIT
