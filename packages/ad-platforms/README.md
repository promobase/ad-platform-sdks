<div align="center">

<a href="https://openpromo.app">
  <img src="https://openpromo.app/logo.svg" width="80" alt="openpromo" />
</a>

# @openpromo/ad-platforms

**Type-safe TypeScript SDKs for every ad platform. One install. AI-agent ready.**

Powering [**openpromo.app**](https://openpromo.app) — the AI-native social media workspace.

[![npm](https://img.shields.io/npm/v/@openpromo/ad-platforms.svg?label=%40openpromo%2Fad-platforms)](https://www.npmjs.com/package/@openpromo/ad-platforms)
[![CI](https://github.com/promobase/ad-platform-sdks/actions/workflows/ci.yml/badge.svg)](https://github.com/promobase/ad-platform-sdks/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

</div>

---

## What

One umbrella package for **Meta** (Facebook, Instagram, Threads), **TikTok**, **LinkedIn**, **X**, **YouTube**, and **Google Ads**. Fully typed, generated from official specs where available, with high-level clients for publishing, messaging, ad management, and typed GAQL queries — plus AI SDK tools ready to drop into any agent.

## Install

```bash
bun add @openpromo/ad-platforms
# or
npm install @openpromo/ad-platforms
```

## Use

```ts
import { Meta, TikTok, LinkedIn, Google } from "@openpromo/ad-platforms";
import { X } from "@openpromo/ad-platforms/x";
import { YouTube } from "@openpromo/ad-platforms/youtube";
import { createAllTools } from "@openpromo/ad-platforms/ai";
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
| [`@openpromo/meta`](https://www.npmjs.com/package/@openpromo/meta) | Meta only (Facebook, Instagram, Threads) |
| [`@openpromo/tiktok`](https://www.npmjs.com/package/@openpromo/tiktok) | TikTok only |
| [`@openpromo/linkedin`](https://www.npmjs.com/package/@openpromo/linkedin) | LinkedIn only |
| [`@openpromo/x`](https://www.npmjs.com/package/@openpromo/x) | X only |
| [`@openpromo/youtube`](https://www.npmjs.com/package/@openpromo/youtube) | YouTube only |
| [`@openpromo/google-ads`](https://www.npmjs.com/package/@openpromo/google-ads) | Google Ads only |

## License

MIT © [OpenPromo](https://openpromo.app)
