<div align="center">

<a href="https://openpromo.app">
  <img src="https://openpromo.app/logo.svg" width="80" alt="openpromo" />
</a>

# @openpromo/sdk-runtime

**Shared runtime primitives for @openpromo ad platform SDKs.**

Powering [**openpromo.app**](https://openpromo.app) — the AI-native social media workspace.

[![npm](https://img.shields.io/npm/v/@openpromo/sdk-runtime.svg?label=%40openpromo%2Fsdk-runtime)](https://www.npmjs.com/package/@openpromo/sdk-runtime)
[![CI](https://github.com/promobase/ad-platform-sdks/actions/workflows/ci.yml/badge.svg)](https://github.com/promobase/ad-platform-sdks/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

</div>

---

## What

The low-level building blocks shared by every `@openpromo/*` package: a fetch-based `HttpClient` for JSON/Bearer APIs, cursor pagination, retry with exponential backoff, and pluggable rate limiting. Runtime-agnostic — works in Bun, Node, Deno, and edge.

You don't install this directly. It's a transitive dependency of the platform SDKs.

## What's inside

- **`HttpClient`** — JSON POST/GET/DELETE with pluggable header builder, retry, rate limiter hooks
- **`ApiClient`** — the original Meta-shaped client (form-encoded POST, `access_token` query)
- **`Cursor`** — generic async-iterable pagination adapter
- **`RateLimiter` / `DelayFn`** — runtime-agnostic throttling interfaces
- **`ApiError`** — base error type

## Used by

- [`@openpromo/meta`](https://www.npmjs.com/package/@openpromo/meta)
- [`@openpromo/tiktok`](https://www.npmjs.com/package/@openpromo/tiktok)
- [`@openpromo/google-ads`](https://www.npmjs.com/package/@openpromo/google-ads)
- [`@openpromo/ad-platforms`](https://www.npmjs.com/package/@openpromo/ad-platforms)

## License

MIT © [OpenPromo](https://openpromo.app)
