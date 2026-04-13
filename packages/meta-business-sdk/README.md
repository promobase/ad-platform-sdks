<div align="center">

<a href="https://openpromo.app">
  <img src="https://openpromo.app/logo.svg" width="80" alt="openpromo" />
</a>

# @promobase/meta-business-sdk-ts

**Type-safe TypeScript SDK for the Meta (Facebook) Marketing API.**

Powering [**openpromo.app**](https://openpromo.app) — the AI-native social media workspace.

[![npm](https://img.shields.io/npm/v/@promobase/meta-business-sdk-ts.svg?label=%40promobase%2Fmeta-business-sdk-ts)](https://www.npmjs.com/package/@promobase/meta-business-sdk-ts)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

</div>

---

## What

A drop-in typed replacement for [`facebook-nodejs-business-sdk`](https://github.com/facebook/facebook-nodejs-business-sdk). Auto-generated from the official [API specs](https://github.com/facebook/facebook-business-sdk-codegen) — every Graph API object, edge, field, and parameter is typed. Wrong field names, missing required params, and bad enum values fail at compile time, not runtime.

## Install

```bash
bun add @promobase/meta-business-sdk-ts
# or
npm install @promobase/meta-business-sdk-ts
```

## Use

```ts
import { Meta } from "@promobase/meta-business-sdk-ts";

const meta = Meta.createClient({ accessToken: process.env.META_TOKEN! });

// Instagram publishing
const ig = Meta.Instagram.createClient({ api: meta, igAccountId: "ig_123" });
await ig.media.publishVideo({
  videoUrl: "https://cdn.example.com/reel.mp4",
  caption: "New drop 🔥",
});

// Facebook Page publishing
const fb = Meta.Facebook.createClient({
  api: meta,
  pageId: "page_456",
  accessToken: process.env.META_TOKEN!,
});
await fb.feed.publishPost({ message: "Hello Facebook!" });

// Threads
const threads = Meta.Threads.createClient({
  accessToken: process.env.THREADS_TOKEN!,
  threadsUserId: "t_789",
});
await threads.posts.publishText({ text: "Hello Threads!" });

// Graph API with field-level narrowing
const campaign = await meta.adAccount("act_123").campaigns.list({
  fields: ["id", "name", "status"],  // narrows return type
});
```

## Features

- **994 typed Graph API objects** — AdAccount, Campaign, AdSet, Ad, Page, Business, and more
- **483 real enum values** — not `string`, actual narrowed unions
- **Field-level narrowing** — `Pick<CampaignFields, "id" | "name">` on every query
- **Publishing clients** — Instagram, Facebook, Threads (photo, video/reel, carousel, story)
- **Full inbox** — DMs, comments, private replies with Zod-validated webhook payloads
- **OAuth** — token exchange, long-lived tokens, refresh
- **Rate limiting** — auto-parses Meta's `x-app-usage` headers, runtime-agnostic throttling
- **Retry with exponential backoff** — automatic recovery from 5xx and network errors
- **Batch API** — typed multi-request batches
- **AI SDK tools** — 58 filterable tools with middleware and two-stage routing
- **Runtime agnostic** — native `fetch`, no axios

## Umbrella package

For a single install covering Meta + TikTok + Google Ads, use [`@promobase/ad-platforms`](https://www.npmjs.com/package/@promobase/ad-platforms).

## License

MIT © [Promobase](https://openpromo.app)
