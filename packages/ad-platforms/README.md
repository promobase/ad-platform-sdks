# @promobase/ad-platforms

**One install. All ad platforms. Fully typed.**

Unified TypeScript SDK for Meta (Facebook, Instagram, Threads), TikTok, and (soon) Google Ads. Single install, single namespace, fully type-safe, and ready for AI agents.

## Installation

```bash
bun add @promobase/ad-platforms
# or
npm install @promobase/ad-platforms
```

## Quick Start

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
const tiktok = TikTok.createClient({ accessToken: process.env.TIKTOK_TOKEN! });
// ... use tiktok client
```

## AI Agent Integration

Expose all platforms as AI SDK tools:

```typescript
import { createAllTools } from "@promobase/ad-platforms";
import { generateText } from "ai";
import { anthropic } from "@ai-sdk/anthropic";

const tools = createAllTools({
  meta: {
    api: meta,
    igAccountId: "ig_123",
    pageId: "page_456",
    pageAccessToken: process.env.META_TOKEN!,
    adAccountId: "act_789",
  },
  tiktok: {
    client: tiktok.client,
    advertiserId: "adv_123",
  },
});

await generateText({
  model: anthropic("claude-sonnet-4-20250514"),
  tools,
  maxSteps: 10,
  prompt: "Post this photo to Instagram and TikTok, then check ad account performance",
});
```

## Platforms

| Platform | Status | Features |
|---|---|---|
| Meta (Facebook, Instagram, Threads) | Available | Publishing, comments, DMs, stories, webhooks, OAuth, ad management, insights, batch API, rate limiting |
| TikTok Business | Available | Video/photo publishing, comments, account insights, OAuth, webhooks |
| Google Ads | Planned | — |

## Individual Packages

Prefer smaller bundles? Install platform-specific packages:

- [`@promobase/meta-business-sdk-ts`](https://www.npmjs.com/package/@promobase/meta-business-sdk-ts) — Meta only
- [`@promobase/tiktok-business-sdk`](https://www.npmjs.com/package/@promobase/tiktok-business-sdk) — TikTok only

## License

MIT
