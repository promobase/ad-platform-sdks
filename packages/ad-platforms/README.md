<div align="center">

<a href="https://openpromo.app">
  <img src="https://openpromo.app/logo.svg" width="80" alt="openpromo" />
</a>

# @mosaic/ad-platforms

**Type-safe TypeScript SDKs for every ad platform. One install. AI-agent ready.**

Powering [**openpromo.app**](https://openpromo.app) — the AI-native social media workspace.

[![npm](https://img.shields.io/npm/v/@mosaic/ad-platforms.svg?label=%40openpromo%2Fad-platforms)](https://www.npmjs.com/package/@mosaic/ad-platforms)
[![CI](https://github.com/promobase/ad-platform-sdks/actions/workflows/ci.yml/badge.svg)](https://github.com/promobase/ad-platform-sdks/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

</div>

---

## What

One umbrella package for **Meta** (Facebook, Instagram, Threads), **TikTok**, **LinkedIn**, **X**, **YouTube**, and **Google Ads**. Fully typed, generated from official specs where available, with high-level clients for publishing, messaging, ad management, and typed GAQL queries — plus AI SDK tools ready to drop into any agent.

## Install

```bash
bun add @mosaic/ad-platforms
# or
npm install @mosaic/ad-platforms
```

## Agent-native operations

The operation catalog is the stable layer for code-writing agents, MCP hosts, and applications that
want consistent cross-platform semantics. Provider SDKs remain available as the raw layer.

Configure existing platform clients once and use the normalized direct API:

```ts
import { Meta, TikTok } from "@mosaic/ad-platforms";
import { createAdPlatforms } from "@mosaic/ad-platforms/operations";
import { YouTube } from "@mosaic/ad-platforms/youtube";

const meta = Meta.createClient({ accessToken: process.env.META_TOKEN! });
const instagram = Meta.Instagram.createClient({ api: meta, igAccountId: "ig_123" });
const tiktok = TikTok.createClient({
  accessToken: process.env.TIKTOK_TOKEN!,
  businessId: "business_123",
});
const youtube = YouTube.createClient({ accessToken: process.env.YOUTUBE_TOKEN! });

const ads = createAdPlatforms({
  connections: { instagram, tiktok, youtube },
});

const metrics = await ads.instagram.posts.getMetrics({
  postId: "media_123",
  metrics: ["views", "reach", "likes"],
});

// Common metrics are portable; provider retains the native response.
console.log(metrics.common.views, metrics.provider);
```

The same invocation and schemas power discovery and generic execution:

```ts
const matches = ads.operations.search("YouTube video statistics");
const docs = ads.operations.describe("youtube.posts.metrics.get");
const result = await ads.operations.invoke("youtube.posts.metrics.get", {
  postId: "video_123",
});
```

### AI SDK

```ts
import { toAiSdkTools } from "@mosaic/ad-platforms/operations/ai";

const tools = toAiSdkTools(ads.operations, { platform: ["instagram", "youtube"] });
```

### Cloudflare Code Mode

The Code Mode adapter has no Cloudflare runtime dependency. It returns a structural connector
definition whose `tools` can be returned directly from a `CodemodeConnector.tools()` implementation.

```ts
import { toCodemodeConnector } from "@mosaic/ad-platforms/operations/codemode";

const instagram = toCodemodeConnector(ads.operations, { platform: "instagram" });

// In a CodemodeConnector subclass:
// name() { return instagram.name }
// instructions() { return instagram.instructions }
// tools() { return instagram.tools }
```

Each definition includes input and output JSON Schema, read/write effect metadata, approval policy,
replay behavior, and optional rollback support derived from the canonical operation definition.

### MCP and CLI hosts

`@mosaic/ad-platforms-cli/mcp` exports `registerOperationCatalog()`. The companion
`@mosaic/ad-platforms-cli/operations` entry exports `registerOperationCatalogCommands()` for
adding `operations list`, `search`, `describe`, and `invoke` commands to a Commander program.

The initial catalog intentionally contains read-only `posts.getMetrics` operations for Instagram,
Facebook, Threads, TikTok, LinkedIn, X, and YouTube. Generated and provider-native APIs remain
available through each SDK for capabilities that have not yet been promoted into the canonical
operation layer.

## Use

```ts
import { Meta, TikTok, LinkedIn, Google } from "@mosaic/ad-platforms";
import { X } from "@mosaic/ad-platforms/x";
import { YouTube } from "@mosaic/ad-platforms/youtube";
import { createAllTools } from "@mosaic/ad-platforms/ai";
import { generateText } from "ai";
import { anthropic } from "@ai-sdk/anthropic";

// Meta (Facebook, Instagram, Threads)
const meta = Meta.createClient({ accessToken: process.env.META_TOKEN! });
const ig = Meta.Instagram.createClient({ api: meta, igAccountId: "ig_123" });
await ig.media.publishVideo({
  videoUrl: "https://cdn.example.com/reel.mp4",
  caption: "New drop 🔥",
});

// TikTok
const tiktok = TikTok.createClient({
  accessToken: process.env.TIKTOK_TOKEN!,
  businessId: "biz_456",
});

// LinkedIn organic publishing
const linkedin = LinkedIn.createClient({
  accessToken: process.env.LINKEDIN_TOKEN!,
});
await linkedin.posts.createText({
  authorUrn: "urn:li:organization:123456",
  commentary: "New launch is live.",
});

// X organic publishing
const x = X.createClient({
  token: process.env.X_TOKEN!,
});
await x.tweets.createPosts({
  text: "New launch is live.",
});

// YouTube publishing
const youtube = YouTube.createClient({
  accessToken: process.env.YOUTUBE_TOKEN!,
});
await youtube.resources.channels.list({
  part: ["snippet"],
  mine: true,
});

// Google Ads — customer-bound ergonomic flows + typed GAQL
const google = Google.createClient({
  getAccessToken: async () => process.env.GOOGLE_ADS_TOKEN!,
  developerToken: process.env.GOOGLE_ADS_DEV_TOKEN!,
});
const customer = Google.Ads.customer(google, "9999999999");
const { rows } = await customer.gaql
  .from("campaign")
  .select("campaign.id", "campaign.name", "metrics.clicks")
  .where("campaign.status = 'ENABLED'")
  .limit(100)
  .execute();

// Give an AI agent access to every platform
const tools = createAllTools({
  meta: { api: meta, igAccountId: "ig_123", pageId: "p_456", pageAccessToken: "..." },
  tiktok: { accessToken: "...", businessId: "biz_456" },
});

await generateText({
  model: anthropic("claude-sonnet-4-20250514"),
  tools,
  maxSteps: 10,
  prompt: "Post this photo to Instagram and TikTok, then reply to recent comments",
});
```

## Features

- **Meta** — 994 typed Graph API objects, field-level narrowing via `Pick<>`, IG/FB/Threads publishing, inbox, OAuth, rate limiting, batch API
- **TikTok** — OAuth, content publishing, comments, webhooks
- **LinkedIn** — OAuth, organization lookup, organic text/image/multi-image/video posts, comments, media upload helpers
- **X** — Fern-generated X API v2 client for posts, users, and media upload from the official OpenAPI spec
- **YouTube** — Discovery-generated YouTube Data API v3 client plus resumable video upload helper
- **Google Ads** — 184 resource types, 111 services, customer-bound factory, typed GAQL builder with row-level narrowing
- **AI SDK tools** — filterable, middleware-ready, two-stage routing
- **Runtime agnostic** — native `fetch`, no axios, works in Bun, Node, Deno, edge
- **Retry + rate limiting** — automatic recovery, pluggable throttling

## Individual packages

| Package | Description |
|---------|-------------|
| [`@mosaic/meta`](https://www.npmjs.com/package/@mosaic/meta) | Meta only (Facebook, Instagram, Threads) |
| [`@mosaic/tiktok`](https://www.npmjs.com/package/@mosaic/tiktok) | TikTok only |
| [`@mosaic/linkedin`](https://www.npmjs.com/package/@mosaic/linkedin) | LinkedIn only |
| [`@mosaic/x`](https://www.npmjs.com/package/@mosaic/x) | X only |
| [`@mosaic/youtube`](https://www.npmjs.com/package/@mosaic/youtube) | YouTube only |
| [`@mosaic/google-ads`](https://www.npmjs.com/package/@mosaic/google-ads) | Google Ads only |

## License

MIT © [OpenPromo](https://openpromo.app)
