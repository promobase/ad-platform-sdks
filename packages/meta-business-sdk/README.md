<div align="center">

<a href="https://openpromo.app">
  <img src="https://openpromo.app/logo.svg" width="80" alt="openpromo" />
</a>

# @openpromo/meta

**Type-safe TypeScript SDK for the Meta (Facebook) Marketing API.**

Powering [**openpromo.app**](https://openpromo.app) — the AI-native social media workspace.

[![npm](https://img.shields.io/npm/v/@openpromo/meta.svg?label=%40openpromo%2Fmeta)](https://www.npmjs.com/package/@openpromo/meta)
[![CI](https://github.com/promobase/ad-platform-sdks/actions/workflows/ci.yml/badge.svg)](https://github.com/promobase/ad-platform-sdks/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

</div>

---

## What

A drop-in typed replacement for [`facebook-nodejs-business-sdk`](https://github.com/facebook/facebook-nodejs-business-sdk). Auto-generated from the official [API specs](https://github.com/facebook/facebook-business-sdk-codegen) — every Graph API object, edge, field, and parameter is typed. Wrong field names, missing required params, and bad enum values fail at compile time, not runtime.

## Install

```bash
bun add @openpromo/meta
# or
npm install @openpromo/meta
```

## Use

```ts
import { Facebook, Instagram, Threads, createGraphClient } from "@openpromo/meta";

const graph = createGraphClient({ accessToken: process.env.META_TOKEN! });

// Instagram publishing
const ig = Instagram.createClient({ api: graph, igAccountId: "ig_123" });
await ig.media.publishVideo({
  videoUrl: "https://cdn.example.com/reel.mp4",
  caption: "New drop 🔥",
});

// Facebook Page publishing
const fb = Facebook.createClient({
  api: graph,
  pageId: "page_456",
  accessToken: process.env.META_TOKEN!,
});
await fb.feed.publishPost({ message: "Hello Facebook!" });

// Threads
const threads = Threads.createClient({
  accessToken: process.env.THREADS_TOKEN!,
  threadsUserId: "t_789",
});
await threads.posts.publishText({ text: "Hello Threads!" });

// Worker-safe provider webhooks
import { webhooks } from "@openpromo/meta/webhooks";

const webhook = await webhooks.facebook.safeParse({
  body: rawRequestBytes,
  signature: request.headers.get("X-Hub-Signature-256") ?? "",
  appSecret,
});

if (webhook.success) {
  for (const event of webhooks.facebook.events(webhook.data)) {
    // Map the typed provider event to your application's domain handler.
    console.log(event.kind);
  }
}

// WhatsApp transport
import { WhatsApp } from "@openpromo/meta";

const whatsapp = WhatsApp.createClient({ accessToken: "wa_token", phoneNumberId: "phone_123" });

// Graph API with field-level narrowing
const campaign = await graph.adAccount("act_123").campaigns.list({
  fields: ["id", "name", "status"],  // narrows return type
});
```

## Generated contracts

The canonical Graph API model contract is emitted into separate, opt-in
surfaces from the same provider IR:

```ts
import { parse } from "valibot";
import { CampaignFieldsSchema } from "@openpromo/meta/valibot";
import type { CampaignFields } from "@openpromo/meta/types";

const campaign: CampaignFields = parse(CampaignFieldsSchema, input);
```

`@openpromo/meta/facebook/effect` provides the Effect schemas and endpoint
descriptors for the generated Graph contract. The same generated contract is
available through the direct `instagram/effect` and `threads/effect` aliases.
These generated contract surfaces are separate from the hand-authored
`@openpromo/meta/webhooks` Valibot schemas, which model provider webhook
payloads and event extraction.

For a compile-checked OAuth → connected-account → workflow publishing → webhook handoff flow, see
[`examples/openpromo-integration-flow.ts`](./examples/openpromo-integration-flow.ts).

## Features

- **985 typed Graph API objects** — AdAccount, Campaign, AdSet, Ad, Page, Business, and more
- **503 real enum values** — not `string`, actual narrowed unions
- **Field-level narrowing** — `Pick<CampaignFields, "id" | "name">` on every query
- **Publishing clients** — Instagram, Facebook, Threads (photo, video/reel, carousel, story)
- **Worker-safe webhook leaf** — Valibot schemas, Web Crypto verification, and typed Facebook/Instagram/Threads/WhatsApp event extraction via `@openpromo/meta/webhooks`
- **Native messaging transports** — typed Messenger, Instagram publishing, and WhatsApp Cloud API operations via `@openpromo/meta/transports`
- **OAuth** — token exchange, long-lived tokens, refresh
- **WhatsApp Cloud API** — typed text, media, template, interactive sends, webhook messages, and delivery statuses
- **Rate limiting** — auto-parses Graph API `x-app-usage` headers, runtime-agnostic throttling
- **Retry with exponential backoff** — automatic recovery from 5xx and network errors
- **Batch API** — typed multi-request batches
- **AI SDK tools** — 58 filterable tools with middleware and two-stage routing
- **Runtime agnostic** — native `fetch`, no axios

## Umbrella package

For a single install covering Facebook, Instagram, Threads, TikTok, and Google Ads, use [`@openpromo/ad-platforms`](https://www.npmjs.com/package/@openpromo/ad-platforms).

## License

MIT © [OpenPromo](https://openpromo.app)
