<div align="center">

<a href="https://openpromo.app">
  <img src="https://openpromo.app/logo.svg" width="80" alt="OpenPromo" />
</a>

# OpenPromo Ad Platform SDKs

**Type-safe TypeScript SDKs for every ad platform. AI-agent ready.**

Powering [**OpenPromo**](https://openpromo.app) — the AI-native social media workspace.

[![npm](https://img.shields.io/npm/v/@openpromo/ad-platforms.svg?label=%40openpromo%2Fad-platforms)](https://www.npmjs.com/package/@openpromo/ad-platforms)
[![CI](https://github.com/promobase/ad-platform-sdks/actions/workflows/ci.yml/badge.svg)](https://github.com/promobase/ad-platform-sdks/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

</div>

---

## What

One SDK family for **Meta** (Facebook, Instagram, Threads), **TikTok**, **LinkedIn**, **X**, **YouTube**, and **Google Ads**. Fully typed, generated from official specs where available, with high-level clients for publishing, messaging, and ad management, plus AI tools and a discoverable CLI for agents.

## Install

```bash
bun add @openpromo/ad-platforms
```

## Use

```ts
import { Meta, TikTok } from "@openpromo/ad-platforms";
import { createAllTools } from "@openpromo/ad-platforms/ai";
import { generateText } from "ai";
import { anthropic } from "@ai-sdk/anthropic";

const meta = Meta.createClient({ accessToken: process.env.META_TOKEN! });
const ig = Meta.Instagram.createClient({ api: meta, igAccountId: "ig_123" });

// Publish a reel from a public URL — handles container creation and polling
await ig.media.publishVideo({
  videoUrl: "https://cdn.example.com/reel.mp4",
  caption: "New drop 🔥",
});

// Give an AI agent access to every platform
const tools = createAllTools({
  meta: { api: meta, igAccountId: "ig_123", pageId: "p_456", pageAccessToken: "..." },
  tiktok: { accessToken: "...", businessId: "biz_789" },
});

await generateText({
  model: anthropic("claude-sonnet-4-20250514"),
  tools,
  maxSteps: 10,
  prompt: "Post this photo to Instagram and TikTok, then reply to recent comments",
});
```

## Features

- **994 typed Meta Graph API objects** with 483 real enum values (not `string`)
- **Field-level type narrowing** — `Pick<CampaignFields, "id" | "name">` on every query
- **Publishing clients** for Instagram, Facebook, Threads, and TikTok (photo, video/reel, carousel, story)
- **Full inbox** — DMs, comments, private replies with Zod-validated webhook payloads
- **OAuth** — token exchange, long-lived tokens, refresh for all platforms
- **Rate limiting** — auto-parses Meta's `x-app-usage` headers, runtime-agnostic throttling
- **Retry with exponential backoff** — automatic recovery from 5xx and network errors
- **Batch API** — typed multi-request batches for Meta
- **58 AI SDK tools** — type-safe, filterable, with middleware and two-stage routing
- **Runtime agnostic** — native `fetch`, no axios, works in Bun, Node, Deno, edge

## Packages

| Package | Description |
|---------|-------------|
| [`@openpromo/ad-platforms`](./packages/ad-platforms/) | Umbrella package — all platforms, single install |
| [`@openpromo/meta`](./packages/meta-business-sdk/) | Meta only (Facebook, Instagram, Threads) |
| [`@openpromo/tiktok`](./packages/tiktok-business-sdk/) | TikTok only |

## Why

The official ad platform SDKs are either untyped JavaScript, incomplete, or abandoned. If you've used `facebook-nodejs-business-sdk`, you know — `params: Object` everywhere, no autocomplete, no compile-time safety.

We built this because [openpromo.app](https://openpromo.app) needs production-grade typed access to every major ad platform, and the AI agents powering it need structured tools they can reason about. Everything here is battle-tested in production.

## Development

```bash
git clone --recurse-submodules https://github.com/promobase/ad-platform-sdks.git
cd ad-platform-sdks
bun install

# Per package
cd packages/meta-business-sdk && bun test tests/
cd packages/meta-business-sdk && bun run codegen   # regenerate from specs
```

## License

MIT © [OpenPromo](https://openpromo.app)
