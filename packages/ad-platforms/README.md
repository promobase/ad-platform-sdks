<div align="center">

<a href="https://openpromo.app">
  <img src="https://openpromo.app/logo.svg" width="80" alt="openpromo" />
</a>

# @promobase/ad-platforms

**Type-safe TypeScript SDKs for every ad platform. One install. AI-agent ready.**

Powering [**openpromo.app**](https://openpromo.app) — the AI-native social media workspace.

[![npm](https://img.shields.io/npm/v/@promobase/ad-platforms.svg?label=%40promobase%2Fad-platforms)](https://www.npmjs.com/package/@promobase/ad-platforms)
[![CI](https://github.com/promobase/ad-platform-sdks/actions/workflows/ci.yml/badge.svg)](https://github.com/promobase/ad-platform-sdks/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

</div>

---

## What

One umbrella package for **Meta** (Facebook, Instagram, Threads), **TikTok**, **LinkedIn**, and **Google Ads**. Fully typed, generated from official specs where available, with high-level clients for publishing, messaging, ad management, and typed GAQL queries — plus AI SDK tools ready to drop into any agent.

## Install

```bash
bun add @promobase/ad-platforms
# or
npm install @promobase/ad-platforms
```

## Use

```ts
import { Meta, TikTok, LinkedIn, Google } from "@promobase/ad-platforms";
import { createAllTools } from "@promobase/ad-platforms/ai";
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
- **Google Ads** — 184 resource types, 111 services, customer-bound factory, typed GAQL builder with row-level narrowing
- **AI SDK tools** — filterable, middleware-ready, two-stage routing
- **Runtime agnostic** — native `fetch`, no axios, works in Bun, Node, Deno, edge
- **Retry + rate limiting** — automatic recovery, pluggable throttling

## Individual packages

| Package | Description |
|---------|-------------|
| [`@promobase/meta-business-sdk-ts`](https://www.npmjs.com/package/@promobase/meta-business-sdk-ts) | Meta only (Facebook, Instagram, Threads) |
| [`@promobase/tiktok-business-sdk`](https://www.npmjs.com/package/@promobase/tiktok-business-sdk) | TikTok only |
| [`@promobase/linkedin-sdk`](https://www.npmjs.com/package/@promobase/linkedin-sdk) | LinkedIn only |
| [`@promobase/google-ads-sdk`](https://www.npmjs.com/package/@promobase/google-ads-sdk) | Google Ads only |

## License

MIT © [Promobase](https://openpromo.app)
