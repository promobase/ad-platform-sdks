<div align="center">

<a href="https://openpromo.app">
  <img src="https://openpromo.app/logo.svg" width="80" alt="openpromo" />
</a>

# @promobase/sdk-runtime

**Shared runtime primitives for @promobase ad platform SDKs.**

Powering [**openpromo.app**](https://openpromo.app) — the AI-native social media workspace.

[![npm](https://img.shields.io/npm/v/@promobase/sdk-runtime.svg?label=%40promobase%2Fsdk-runtime)](https://www.npmjs.com/package/@promobase/sdk-runtime)
[![CI](https://github.com/promobase/ad-platform-sdks/actions/workflows/ci.yml/badge.svg)](https://github.com/promobase/ad-platform-sdks/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

</div>

---

## What

The low-level building blocks shared by every `@promobase/*-sdk` package: a fetch-based `HttpClient` for JSON/Bearer APIs, cursor pagination, retry with exponential backoff, and pluggable rate limiting. Runtime-agnostic — works in Bun, Node, Deno, and edge.

You don't install this directly. It's a transitive dependency of the platform SDKs.

## What's inside

- **`HttpClient`** — JSON POST/GET/DELETE with pluggable header builder, retry, rate limiter hooks
- **`ApiClient`** — the original Meta-shaped client (form-encoded POST, `access_token` query)
- **`Cursor`** — generic async-iterable pagination adapter
- **`RateLimiter` / `DelayFn`** — runtime-agnostic throttling interfaces
- **`ApiError`** — base error type

## Used by

- [`@promobase/meta-business-sdk-ts`](https://www.npmjs.com/package/@promobase/meta-business-sdk-ts)
- [`@promobase/tiktok-business-sdk`](https://www.npmjs.com/package/@promobase/tiktok-business-sdk)
- [`@promobase/google-ads-sdk`](https://www.npmjs.com/package/@promobase/google-ads-sdk)
- [`@promobase/ad-platforms`](https://www.npmjs.com/package/@promobase/ad-platforms)

## License

MIT © [Promobase](https://openpromo.app)
