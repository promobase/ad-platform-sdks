# Google Ads SDK Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Scaffold `@promobase/google-ads-sdk` — a type-safe, fetch-based Google Ads API v23 SDK generated from protobuf definitions via REST transcoding.

**Architecture:** Three layers — (1) shared `HttpClient` in `@promobase/sdk-runtime` for JSON/fetch/retry/rate-limit primitives, (2) codegen pipeline that loads v23 protos via `protobufjs`, extracts `google.api.http` REST bindings, and emits typed services, and (3) a thin runtime wrapper exposing the `Google` namespace. All ergonomic resource wrappers and AI tools are deferred.

**Tech Stack:** TypeScript, Bun, `protobufjs` (codegen only), `@promobase/sdk-runtime`, Google Ads API v23 REST.

**Spec:** `docs/superpowers/specs/2026-04-12-google-ads-sdk-design.md`

---

## File Structure

**`packages/sdk-runtime/src/`** (modified)
- `http-client.ts` (new) — generic fetch client with retry, rate-limit hooks, JSON bodies, pluggable header builder. Used by Google Ads; Meta's existing `ApiClient` stays as-is.
- `index.ts` — exports `HttpClient`, `HttpClientOptions`, `HttpError`.

**`packages/google-ads-sdk/`** (new package)
- `package.json`, `tsconfig.json`, `CLAUDE.md`
- `vendor/googleapis/` — git submodule pinned
- `src/index.ts` — re-exports `Google` namespace
- `src/namespace.ts` — `Google.createClient`, `Google.Ads`, `Google.Errors`
- `src/client.ts` — `createClient(opts)` wrapping `HttpClient`
- `src/errors.ts` — `GoogleAdsError` + error-body parser
- `src/pagination.ts` — `paginate()` async iterable over `search` pages
- `src/codegen/parser.ts` — protobuf loader
- `src/codegen/type-resolver.ts` — proto → TS type mapping
- `src/codegen/http-binding.ts` — `google.api.http` parser
- `src/codegen/emitter.ts` — string emitter for resources, enums, services
- `src/codegen/index.ts` — `bun run codegen` orchestrator
- `src/generated/v23/resources/**` — generated message types
- `src/generated/v23/enums/**` — generated enums
- `src/generated/v23/services/**` — generated service objects
- `src/generated/v23/index.ts` — barrel
- `tests/codegen.test.ts`, `tests/client.test.ts`, `tests/pagination.test.ts`, `tests/errors.test.ts`
- `tests/fixtures/*.proto` — small proto fixtures for parser/resolver/binding tests

**`packages/ad-platforms/`** (modified)
- `package.json` — add `@promobase/google-ads-sdk` workspace dep
- `src/index.ts` — re-export `Google`

**`CLAUDE.md`** (modified) — new row in packages table.

**`.gitmodules`** (modified) — add `vendor/googleapis` submodule entry under `packages/google-ads-sdk/`.

---

## Task 1: Add generic `HttpClient` to `sdk-runtime`

**Files:**
- Create: `packages/sdk-runtime/src/http-client.ts`
- Create: `packages/sdk-runtime/tests/http-client.test.ts`
- Modify: `packages/sdk-runtime/src/index.ts`

**Scene:** Existing `ApiClient` is Meta-shaped (form-encoded POST, `access_token` as query param). Google Ads needs JSON bodies and a `Bearer` header. Rather than overloading `ApiClient`, introduce a sibling `HttpClient` that both SDKs can depend on going forward. Meta keeps `ApiClient` untouched.

- [ ] **Step 1: Write failing test**

```ts
// packages/sdk-runtime/tests/http-client.test.ts
import { test, expect, mock } from "bun:test";
import { HttpClient, HttpError } from "../src/http-client.ts";

test("HttpClient sends JSON POST with custom headers", async () => {
  const fetchMock = mock(async (url: string, init?: RequestInit) => {
    expect(url).toBe("https://api.example.com/v1/things:mutate");
    expect(init?.method).toBe("POST");
    const headers = init?.headers as Record<string, string>;
    expect(headers.authorization).toBe("Bearer tok");
    expect(headers["x-custom"]).toBe("val");
    expect(headers["content-type"]).toBe("application/json");
    expect(init?.body).toBe(JSON.stringify({ name: "foo" }));
    return new Response(JSON.stringify({ id: "1" }), { status: 200 });
  });

  const client = new HttpClient({
    baseUrl: "https://api.example.com",
    getHeaders: async () => ({ authorization: "Bearer tok", "x-custom": "val" }),
    fetch: fetchMock as unknown as typeof fetch,
  });

  const result = await client.post<{ id: string }>("/v1/things:mutate", { name: "foo" });
  expect(result).toEqual({ id: "1" });
});

test("HttpClient throws HttpError on non-2xx", async () => {
  const fetchMock = mock(async () =>
    new Response(JSON.stringify({ error: { code: 400, message: "bad" } }), { status: 400 }),
  );
  const client = new HttpClient({
    baseUrl: "https://api.example.com",
    getHeaders: async () => ({}),
    fetch: fetchMock as unknown as typeof fetch,
  });
  await expect(client.post("/v1/x", {})).rejects.toBeInstanceOf(HttpError);
});

test("HttpClient GET appends query params", async () => {
  let capturedUrl = "";
  const fetchMock = mock(async (url: string) => {
    capturedUrl = url;
    return new Response("{}", { status: 200 });
  });
  const client = new HttpClient({
    baseUrl: "https://api.example.com",
    getHeaders: async () => ({}),
    fetch: fetchMock as unknown as typeof fetch,
  });
  await client.get("/v1/thing", { query: { pageSize: 10, filter: "x" } });
  expect(capturedUrl).toBe("https://api.example.com/v1/thing?pageSize=10&filter=x");
});

test("HttpClient retries retryable statuses", async () => {
  let calls = 0;
  const fetchMock = mock(async () => {
    calls++;
    if (calls < 3) return new Response("{}", { status: 503 });
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  });
  const client = new HttpClient({
    baseUrl: "https://api.example.com",
    getHeaders: async () => ({}),
    fetch: fetchMock as unknown as typeof fetch,
    retry: { maxRetries: 3, initialBackoffMs: 1 },
    delay: async () => {},
  });
  const result = await client.get<{ ok: boolean }>("/v1/x");
  expect(result.ok).toBe(true);
  expect(calls).toBe(3);
});

test("HttpClient uses custom onError", async () => {
  class MyError extends Error {
    constructor(public status: number, public body: unknown) { super("my"); }
  }
  const fetchMock = mock(async () => new Response('{"msg":"nope"}', { status: 403 }));
  const client = new HttpClient({
    baseUrl: "https://api.example.com",
    getHeaders: async () => ({}),
    fetch: fetchMock as unknown as typeof fetch,
    onError: (status, body) => new MyError(status, body),
  });
  await expect(client.get("/v1/x")).rejects.toBeInstanceOf(MyError);
});
```

- [ ] **Step 2: Run tests — verify they fail**

Run: `cd packages/sdk-runtime && bun test tests/http-client.test.ts`
Expected: FAIL with `Cannot find module '../src/http-client.ts'`.

- [ ] **Step 3: Implement `HttpClient`**

Create `packages/sdk-runtime/src/http-client.ts`:

```ts
import type { RateLimiter, DelayFn, RetryConfig } from "./client.ts";

export class HttpError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly body: unknown,
  ) {
    super(message);
    this.name = "HttpError";
  }
}

export type HeaderBuilder = () => Record<string, string> | Promise<Record<string, string>>;
export type HttpErrorHandler = (status: number, body: unknown) => Error;

export interface HttpClientOptions {
  baseUrl: string;
  getHeaders: HeaderBuilder;
  fetch?: typeof fetch;
  onError?: HttpErrorHandler;
  rateLimiter?: RateLimiter;
  delay?: DelayFn;
  retry?: Partial<RetryConfig>;
  debug?: boolean;
}

const DEFAULT_RETRY: RetryConfig = {
  maxRetries: 3,
  initialBackoffMs: 1000,
  retryableStatuses: [429, 500, 502, 503, 504],
  retryOnNetworkError: true,
};

export interface RequestOptions {
  query?: Record<string, string | number | boolean | undefined>;
  headers?: Record<string, string>;
}

export class HttpClient {
  private readonly baseUrl: string;
  private readonly getHeaders: HeaderBuilder;
  private readonly fetchImpl: typeof fetch;
  private readonly onError: HttpErrorHandler;
  private readonly rateLimiter?: RateLimiter;
  private readonly delay?: DelayFn;
  private readonly retryConfig: RetryConfig;
  private readonly debug: boolean;

  constructor(opts: HttpClientOptions) {
    this.baseUrl = opts.baseUrl.replace(/\/$/, "");
    this.getHeaders = opts.getHeaders;
    this.fetchImpl = opts.fetch ?? fetch;
    this.onError = opts.onError ?? ((status, body) => new HttpError(`HTTP ${status}`, status, body));
    this.rateLimiter = opts.rateLimiter;
    this.delay = opts.delay;
    this.retryConfig = opts.retry ? { ...DEFAULT_RETRY, ...opts.retry } : DEFAULT_RETRY;
    this.debug = opts.debug ?? false;
  }

  private buildUrl(path: string, query?: RequestOptions["query"]): string {
    const url = new URL(path, this.baseUrl + "/");
    if (query) {
      for (const [k, v] of Object.entries(query)) {
        if (v !== undefined) url.searchParams.set(k, String(v));
      }
    }
    return url.toString();
  }

  async get<T>(path: string, opts: RequestOptions = {}): Promise<T> {
    return this.request<T>("GET", path, undefined, opts);
  }

  async post<T>(path: string, body: unknown, opts: RequestOptions = {}): Promise<T> {
    return this.request<T>("POST", path, body, opts);
  }

  async delete<T>(path: string, opts: RequestOptions = {}): Promise<T> {
    return this.request<T>("DELETE", path, undefined, opts);
  }

  private async request<T>(
    method: string,
    path: string,
    body: unknown,
    opts: RequestOptions,
  ): Promise<T> {
    if (this.rateLimiter) {
      const check = this.rateLimiter.check();
      if (check.shouldWait && this.delay) await this.delay(check.waitMs);
    }

    const url = this.buildUrl(path, opts.query);
    const baseHeaders = await this.getHeaders();
    const headers: Record<string, string> = { ...baseHeaders, ...opts.headers };
    if (body !== undefined) headers["content-type"] ??= "application/json";

    const init: RequestInit = { method, headers };
    if (body !== undefined) init.body = JSON.stringify(body);

    const maxAttempts = 1 + this.retryConfig.maxRetries;
    let lastErr: unknown;

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      try {
        if (this.debug) console.log(`[HttpClient] ${method} ${url}`);
        const response = await this.fetchImpl(url, init);
        const text = await response.text();
        const parsed: unknown = text ? JSON.parse(text) : undefined;

        if (this.rateLimiter) this.rateLimiter.afterResponse(response.status, response.headers);

        if (!response.ok) {
          if (attempt < maxAttempts - 1 && this.retryConfig.retryableStatuses.includes(response.status)) {
            if (this.delay) await this.delay(this.retryConfig.initialBackoffMs * 2 ** attempt);
            continue;
          }
          throw this.onError(response.status, parsed);
        }
        return parsed as T;
      } catch (err) {
        if (err instanceof TypeError && this.retryConfig.retryOnNetworkError && attempt < maxAttempts - 1) {
          lastErr = err;
          if (this.delay) await this.delay(this.retryConfig.initialBackoffMs * 2 ** attempt);
          continue;
        }
        throw err;
      }
    }
    throw lastErr;
  }
}
```

- [ ] **Step 4: Export from sdk-runtime barrel**

Modify `packages/sdk-runtime/src/index.ts` — add:

```ts
export { HttpClient, HttpError } from "./http-client.ts";
export type { HttpClientOptions, HeaderBuilder, HttpErrorHandler, RequestOptions } from "./http-client.ts";
```

- [ ] **Step 5: Run tests — verify they pass**

Run: `cd packages/sdk-runtime && bun test tests/http-client.test.ts`
Expected: PASS (5 tests).

- [ ] **Step 6: Typecheck**

Run: `cd packages/sdk-runtime && bun run typecheck`
Expected: no errors.

- [ ] **Step 7: Commit**

```bash
git add packages/sdk-runtime/src/http-client.ts packages/sdk-runtime/tests/http-client.test.ts packages/sdk-runtime/src/index.ts
git commit -m "feat(sdk-runtime): add generic HttpClient for JSON/Bearer APIs"
```

---

## Task 2: Scaffold `@promobase/google-ads-sdk` package

**Files:**
- Create: `packages/google-ads-sdk/package.json`
- Create: `packages/google-ads-sdk/tsconfig.json`
- Create: `packages/google-ads-sdk/CLAUDE.md`
- Create: `packages/google-ads-sdk/src/index.ts` (stub)
- Modify: `CLAUDE.md` (root) — add package row

- [ ] **Step 1: Create `package.json`**

```json
{
  "name": "@promobase/google-ads-sdk",
  "version": "0.0.1",
  "description": "Type-safe Google Ads API v23 SDK, runtime-agnostic, generated from protobuf.",
  "type": "module",
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "exports": {
    ".": "./src/index.ts",
    "./v23": "./src/generated/v23/index.ts"
  },
  "scripts": {
    "codegen": "bun run src/codegen/index.ts",
    "typecheck": "tsc --noEmit",
    "test": "bun test tests/"
  },
  "keywords": ["google-ads", "google", "ads", "sdk", "typescript", "protobuf"],
  "license": "MIT",
  "dependencies": {
    "@promobase/sdk-runtime": "workspace:*"
  },
  "devDependencies": {
    "@types/bun": "latest",
    "protobufjs": "^7.4.0",
    "typescript": "^5.6.0"
  }
}
```

- [ ] **Step 2: Create `tsconfig.json`**

```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "types": ["@types/bun"]
  },
  "include": ["src/**/*.ts", "tests/**/*.ts"],
  "exclude": ["node_modules", "dist", "vendor"]
}
```

- [ ] **Step 3: Create package `CLAUDE.md`**

```md
# @promobase/google-ads-sdk

Type-safe Google Ads API v23 SDK. Generated from protobuf definitions via REST transcoding.

## Commands (run from this dir)

- `bun run codegen` — regenerate `src/generated/v23/` from `vendor/googleapis/`
- `bun test tests/` — run tests
- `bun run typecheck` — typecheck

## Protos

Protos live in `vendor/googleapis/` (git submodule pinned to a commit containing `google/ads/googleads/v23/`). To update:

```bash
cd vendor/googleapis
git fetch origin master
git checkout <new-sha>
cd ../.. && bun run codegen
```

## No live API tests

Google Ads requires an approved developer token. Tests mock `fetch`. Consumers run their own integration tests against test accounts.
```

- [ ] **Step 4: Create stub `src/index.ts`**

```ts
export {};
```

- [ ] **Step 5: Add workspace package row to root `CLAUDE.md`**

Open `CLAUDE.md` (root) and add to the Packages table after the TikTok row:

```md
| `@promobase/google-ads-sdk` | `packages/google-ads-sdk/` | Yes |
```

- [ ] **Step 6: Install deps at workspace root**

Run: `bun install`
Expected: adds `protobufjs`, links `@promobase/google-ads-sdk` into the workspace.

- [ ] **Step 7: Typecheck the empty package**

Run: `cd packages/google-ads-sdk && bun run typecheck`
Expected: no errors.

- [ ] **Step 8: Commit**

```bash
git add packages/google-ads-sdk/package.json packages/google-ads-sdk/tsconfig.json packages/google-ads-sdk/CLAUDE.md packages/google-ads-sdk/src/index.ts CLAUDE.md bun.lock
git commit -m "feat(google-ads-sdk): scaffold package"
```

---

## Task 3: Add `googleapis` submodule

**Files:**
- Create: `packages/google-ads-sdk/vendor/googleapis/` (submodule)
- Modify: `.gitmodules`

**Scene:** The `googleapis/googleapis` repo contains all Google API protos including `google/ads/googleads/v23`. We pin to a specific commit.

- [ ] **Step 1: Add submodule**

Run:
```bash
git submodule add https://github.com/googleapis/googleapis.git packages/google-ads-sdk/vendor/googleapis
```

- [ ] **Step 2: Pin to a commit that contains `google/ads/googleads/v23/`**

Run:
```bash
cd packages/google-ads-sdk/vendor/googleapis
# Find the newest commit touching v23; pin to master HEAD at time of setup
git rev-parse HEAD
# Back out
cd ../../../..
```

Then verify the v23 dir exists:
```bash
ls packages/google-ads-sdk/vendor/googleapis/google/ads/googleads/v23/
```
Expected: contains `services/`, `resources/`, `enums/`, `common/`, `errors/`.

If v23 is not present, check out an older master commit that has it (Google rotates versions).

- [ ] **Step 3: Verify an example service proto**

Run: `ls packages/google-ads-sdk/vendor/googleapis/google/ads/googleads/v23/services/campaign_service.proto`
Expected: file exists.

- [ ] **Step 4: Commit submodule**

```bash
git add .gitmodules packages/google-ads-sdk/vendor/googleapis
git commit -m "feat(google-ads-sdk): add googleapis submodule pinned to v23"
```

---

## Task 4: Codegen — parser

**Files:**
- Create: `packages/google-ads-sdk/src/codegen/parser.ts`
- Create: `packages/google-ads-sdk/tests/codegen.test.ts`
- Create: `packages/google-ads-sdk/tests/fixtures/simple.proto`
- Create: `packages/google-ads-sdk/tests/fixtures/with_service.proto`

**Scene:** Use `protobufjs`'s `Root.load()` to parse `.proto` files including their transitive imports. The parser returns a normalized AST containing messages, enums, and services.

- [ ] **Step 1: Create fixture `simple.proto`**

```proto
// packages/google-ads-sdk/tests/fixtures/simple.proto
syntax = "proto3";
package test.simple;

enum Color {
  COLOR_UNSPECIFIED = 0;
  RED = 1;
  BLUE = 2;
}

message Shape {
  string id = 1;
  Color color = 2;
  repeated string tags = 3;
  map<string, int32> counts = 4;
}
```

- [ ] **Step 2: Create fixture `with_service.proto`**

```proto
// packages/google-ads-sdk/tests/fixtures/with_service.proto
syntax = "proto3";
package test.svc;

import "google/api/annotations.proto";

message GetThingRequest { string name = 1; }
message Thing { string id = 1; string name = 2; }

service ThingService {
  rpc GetThing(GetThingRequest) returns (Thing) {
    option (google.api.http) = {
      get: "/v1/{name=things/*}"
    };
  }
}
```

- [ ] **Step 3: Write failing test**

```ts
// packages/google-ads-sdk/tests/codegen.test.ts
import { test, expect } from "bun:test";
import { loadProtos } from "../src/codegen/parser.ts";
import path from "node:path";

const FIXTURES = path.resolve(import.meta.dir, "fixtures");

test("loadProtos parses messages, enums, fields", async () => {
  const root = await loadProtos([path.join(FIXTURES, "simple.proto")], [FIXTURES]);
  const messages = root.messages.filter((m) => m.fullName === "test.simple.Shape");
  expect(messages).toHaveLength(1);
  const shape = messages[0]!;
  expect(shape.fields.map((f) => f.name)).toEqual(["id", "color", "tags", "counts"]);
  const enums = root.enums.filter((e) => e.fullName === "test.simple.Color");
  expect(enums).toHaveLength(1);
  expect(enums[0]!.values.map((v) => v.name)).toEqual(["COLOR_UNSPECIFIED", "RED", "BLUE"]);
});

test("loadProtos parses service with google.api.http option", async () => {
  const googleapis = path.resolve(
    import.meta.dir,
    "../vendor/googleapis",
  );
  const root = await loadProtos(
    [path.join(FIXTURES, "with_service.proto")],
    [FIXTURES, googleapis],
  );
  const svcs = root.services.filter((s) => s.fullName === "test.svc.ThingService");
  expect(svcs).toHaveLength(1);
  const svc = svcs[0]!;
  expect(svc.methods).toHaveLength(1);
  expect(svc.methods[0]!.name).toBe("GetThing");
  expect(svc.methods[0]!.requestType).toBe("test.svc.GetThingRequest");
  expect(svc.methods[0]!.responseType).toBe("test.svc.Thing");
  expect(svc.methods[0]!.httpOption).toBeTruthy();
});
```

- [ ] **Step 4: Run tests — verify they fail**

Run: `cd packages/google-ads-sdk && bun test tests/codegen.test.ts`
Expected: FAIL, `Cannot find module '../src/codegen/parser.ts'`.

- [ ] **Step 5: Implement `parser.ts`**

```ts
// packages/google-ads-sdk/src/codegen/parser.ts
import protobuf from "protobufjs";

export interface FieldAst {
  name: string;
  type: string;              // e.g. "string", "int32", ".test.Shape"
  id: number;
  repeated: boolean;
  optional: boolean;
  map?: { keyType: string; valueType: string };
  oneofName?: string;
}

export interface MessageAst {
  fullName: string;           // e.g. "google.ads.googleads.v23.resources.Campaign"
  name: string;
  fields: FieldAst[];
  nestedMessages: MessageAst[];
  nestedEnums: EnumAst[];
  oneofs: { name: string; fieldNames: string[] }[];
}

export interface EnumValueAst {
  name: string;
  number: number;
}

export interface EnumAst {
  fullName: string;
  name: string;
  values: EnumValueAst[];
}

export interface HttpOption {
  verb: "get" | "post" | "put" | "patch" | "delete";
  path: string;
  body?: string;
}

export interface MethodAst {
  name: string;
  requestType: string;
  responseType: string;
  httpOption?: HttpOption;
}

export interface ServiceAst {
  fullName: string;
  name: string;
  methods: MethodAst[];
}

export interface ProtoRoot {
  messages: MessageAst[];
  enums: EnumAst[];
  services: ServiceAst[];
}

export async function loadProtos(entryFiles: string[], includePaths: string[]): Promise<ProtoRoot> {
  const root = new protobuf.Root();
  root.resolvePath = (_origin, target) => {
    // Try each include path
    for (const dir of includePaths) {
      const candidate = `${dir}/${target}`;
      try {
        // Bun/Node: check file existence
        const fs = require("node:fs");
        if (fs.existsSync(candidate)) return candidate;
      } catch {}
    }
    return target;
  };
  await root.load(entryFiles, { keepCase: true });
  root.resolveAll();

  const messages: MessageAst[] = [];
  const enums: EnumAst[] = [];
  const services: ServiceAst[] = [];

  function walk(ns: protobuf.NamespaceBase) {
    for (const child of ns.nestedArray) {
      if (child instanceof protobuf.Type) {
        messages.push(toMessage(child));
        walk(child);
      } else if (child instanceof protobuf.Enum) {
        enums.push(toEnum(child));
      } else if (child instanceof protobuf.Service) {
        services.push(toService(child));
      } else if (child instanceof protobuf.Namespace) {
        walk(child);
      }
    }
  }
  walk(root);

  return { messages, enums, services };
}

function toMessage(t: protobuf.Type): MessageAst {
  const fields: FieldAst[] = t.fieldsArray.map((f) => {
    const ast: FieldAst = {
      name: f.name,
      type: f.type,
      id: f.id,
      repeated: f.repeated,
      optional: f.optional ?? false,
    };
    if (f instanceof protobuf.MapField) {
      ast.map = { keyType: f.keyType, valueType: f.type };
    }
    if (f.partOf) ast.oneofName = f.partOf.name;
    return ast;
  });

  const nestedMessages: MessageAst[] = [];
  const nestedEnums: EnumAst[] = [];
  for (const n of t.nestedArray) {
    if (n instanceof protobuf.Type) nestedMessages.push(toMessage(n));
    else if (n instanceof protobuf.Enum) nestedEnums.push(toEnum(n));
  }

  return {
    fullName: t.fullName.replace(/^\./, ""),
    name: t.name,
    fields,
    nestedMessages,
    nestedEnums,
    oneofs: t.oneofsArray.map((o) => ({ name: o.name, fieldNames: o.oneof })),
  };
}

function toEnum(e: protobuf.Enum): EnumAst {
  return {
    fullName: e.fullName.replace(/^\./, ""),
    name: e.name,
    values: Object.entries(e.values).map(([name, number]) => ({ name, number: number as number })),
  };
}

function toService(s: protobuf.Service): ServiceAst {
  const methods: MethodAst[] = s.methodsArray.map((m) => {
    const opts = (m.parsedOptions ?? []) as Array<Record<string, unknown>>;
    const httpOpt = opts
      .map((o) => o["google.api.http"] as Record<string, string> | undefined)
      .find((v) => v !== undefined);
    let httpOption: HttpOption | undefined;
    if (httpOpt) {
      for (const verb of ["get", "post", "put", "patch", "delete"] as const) {
        const path = httpOpt[verb];
        if (typeof path === "string") {
          httpOption = { verb, path, body: typeof httpOpt.body === "string" ? httpOpt.body : undefined };
          break;
        }
      }
    }
    return {
      name: m.name,
      requestType: m.resolvedRequestType?.fullName.replace(/^\./, "") ?? m.requestType,
      responseType: m.resolvedResponseType?.fullName.replace(/^\./, "") ?? m.responseType,
      httpOption,
    };
  });
  return { fullName: s.fullName.replace(/^\./, ""), name: s.name, methods };
}
```

- [ ] **Step 6: Run tests — verify they pass**

Run: `cd packages/google-ads-sdk && bun test tests/codegen.test.ts`
Expected: PASS (2 tests).

- [ ] **Step 7: Commit**

```bash
git add packages/google-ads-sdk/src/codegen/parser.ts packages/google-ads-sdk/tests/codegen.test.ts packages/google-ads-sdk/tests/fixtures/
git commit -m "feat(google-ads-sdk): add proto parser via protobufjs"
```

---

## Task 5: Codegen — type resolver

**Files:**
- Create: `packages/google-ads-sdk/src/codegen/type-resolver.ts`
- Modify: `packages/google-ads-sdk/tests/codegen.test.ts` (add tests)

**Scene:** Given a proto type string (e.g. `"string"`, `"int64"`, `".google.ads.googleads.v23.resources.Campaign"`), return the corresponding TS type expression, plus any type imports needed.

- [ ] **Step 1: Add failing tests**

Append to `packages/google-ads-sdk/tests/codegen.test.ts`:

```ts
import { resolveType } from "../src/codegen/type-resolver.ts";

test("resolveType maps scalars", () => {
  expect(resolveType("string", false, null).tsType).toBe("string");
  expect(resolveType("int32", false, null).tsType).toBe("number");
  expect(resolveType("bool", false, null).tsType).toBe("boolean");
  expect(resolveType("int64", false, null).tsType).toBe("string");
  expect(resolveType("bytes", false, null).tsType).toBe("string");
});

test("resolveType maps repeated fields", () => {
  expect(resolveType("string", true, null).tsType).toBe("string[]");
});

test("resolveType maps maps", () => {
  expect(resolveType("int32", false, { keyType: "string", valueType: "int32" }).tsType).toBe("Record<string, number>");
});

test("resolveType unwraps well-known wrappers", () => {
  expect(resolveType("google.protobuf.StringValue", false, null).tsType).toBe("string");
  expect(resolveType("google.protobuf.Int64Value", false, null).tsType).toBe("string");
  expect(resolveType("google.protobuf.Timestamp", false, null).tsType).toBe("string");
  expect(resolveType("google.protobuf.Duration", false, null).tsType).toBe("string");
  expect(resolveType("google.protobuf.FieldMask", false, null).tsType).toBe("string");
});

test("resolveType maps message refs to short TS names", () => {
  const r = resolveType("google.ads.googleads.v23.resources.Campaign", false, null);
  expect(r.tsType).toBe("Campaign");
  expect(r.imports).toEqual([{ name: "Campaign", fullName: "google.ads.googleads.v23.resources.Campaign" }]);
});
```

- [ ] **Step 2: Run — verify failure**

Run: `cd packages/google-ads-sdk && bun test tests/codegen.test.ts`
Expected: FAIL with missing module.

- [ ] **Step 3: Implement `type-resolver.ts`**

```ts
// packages/google-ads-sdk/src/codegen/type-resolver.ts
export interface ResolvedType {
  tsType: string;
  imports: { name: string; fullName: string }[];
}

const SCALAR_MAP: Record<string, string> = {
  string: "string",
  bool: "boolean",
  bytes: "string",
  double: "number",
  float: "number",
  int32: "number",
  uint32: "number",
  sint32: "number",
  fixed32: "number",
  sfixed32: "number",
  int64: "string",
  uint64: "string",
  sint64: "string",
  fixed64: "string",
  sfixed64: "string",
};

const WELL_KNOWN_SCALAR: Record<string, string> = {
  "google.protobuf.StringValue": "string",
  "google.protobuf.BytesValue": "string",
  "google.protobuf.BoolValue": "boolean",
  "google.protobuf.DoubleValue": "number",
  "google.protobuf.FloatValue": "number",
  "google.protobuf.Int32Value": "number",
  "google.protobuf.UInt32Value": "number",
  "google.protobuf.Int64Value": "string",
  "google.protobuf.UInt64Value": "string",
  "google.protobuf.Timestamp": "string",
  "google.protobuf.Duration": "string",
  "google.protobuf.FieldMask": "string",
  "google.protobuf.Empty": "Record<string, never>",
  "google.protobuf.Any": "unknown",
  "google.protobuf.Struct": "Record<string, unknown>",
  "google.protobuf.Value": "unknown",
  "google.protobuf.ListValue": "unknown[]",
};

export function resolveType(
  protoType: string,
  repeated: boolean,
  mapInfo: { keyType: string; valueType: string } | null,
): ResolvedType {
  if (mapInfo) {
    const key = resolveType(mapInfo.keyType, false, null);
    const value = resolveType(mapInfo.valueType, false, null);
    return {
      tsType: `Record<${key.tsType === "number" ? "number" : "string"}, ${value.tsType}>`,
      imports: value.imports,
    };
  }

  const base = resolveBase(protoType);
  const tsType = repeated ? `${base.tsType}[]` : base.tsType;
  return { tsType, imports: base.imports };
}

function resolveBase(protoType: string): ResolvedType {
  if (SCALAR_MAP[protoType]) return { tsType: SCALAR_MAP[protoType], imports: [] };

  const normalized = protoType.replace(/^\./, "");
  if (WELL_KNOWN_SCALAR[normalized]) return { tsType: WELL_KNOWN_SCALAR[normalized], imports: [] };

  // Message or enum reference — take the short name and record import.
  const parts = normalized.split(".");
  const short = parts[parts.length - 1]!;
  return { tsType: short, imports: [{ name: short, fullName: normalized }] };
}
```

- [ ] **Step 4: Run tests — verify they pass**

Run: `cd packages/google-ads-sdk && bun test tests/codegen.test.ts`
Expected: PASS (all tests).

- [ ] **Step 5: Commit**

```bash
git add packages/google-ads-sdk/src/codegen/type-resolver.ts packages/google-ads-sdk/tests/codegen.test.ts
git commit -m "feat(google-ads-sdk): add type resolver for proto → TS"
```

---

## Task 6: Codegen — HTTP binding extractor

**Files:**
- Create: `packages/google-ads-sdk/src/codegen/http-binding.ts`
- Modify: `packages/google-ads-sdk/tests/codegen.test.ts` (add tests)

**Scene:** Given an `HttpOption` from the parser, extract path parameters (e.g. `{customer_id}`) and produce a TS path template for the emitter, along with the list of param names.

- [ ] **Step 1: Add failing tests**

Append to `tests/codegen.test.ts`:

```ts
import { parseHttpPath } from "../src/codegen/http-binding.ts";

test("parseHttpPath extracts simple param", () => {
  const r = parseHttpPath("/v23/customers/{customer_id}/campaigns:mutate");
  expect(r.pathParams).toEqual(["customer_id"]);
  expect(r.template).toBe("/v23/customers/${customerId}/campaigns:mutate");
});

test("parseHttpPath extracts resource-template param", () => {
  const r = parseHttpPath("/v23/{resource_name=customers/*/campaigns/*}");
  expect(r.pathParams).toEqual(["resource_name"]);
  expect(r.template).toBe("/v23/${resourceName}");
});

test("parseHttpPath extracts multiple params", () => {
  const r = parseHttpPath("/v23/customers/{customer_id}/adGroups/{ad_group_id}");
  expect(r.pathParams).toEqual(["customer_id", "ad_group_id"]);
  expect(r.template).toBe("/v23/customers/${customerId}/adGroups/${adGroupId}");
});

test("parseHttpPath handles no params", () => {
  const r = parseHttpPath("/v23/customers:listAccessibleCustomers");
  expect(r.pathParams).toEqual([]);
  expect(r.template).toBe("/v23/customers:listAccessibleCustomers");
});
```

- [ ] **Step 2: Run — verify failure**

Run: `cd packages/google-ads-sdk && bun test tests/codegen.test.ts`
Expected: FAIL on missing module.

- [ ] **Step 3: Implement `http-binding.ts`**

```ts
// packages/google-ads-sdk/src/codegen/http-binding.ts
export interface ParsedHttpPath {
  template: string;      // e.g. "/v23/customers/${customerId}/campaigns:mutate"
  pathParams: string[];  // proto snake_case names, e.g. ["customer_id"]
}

export function parseHttpPath(path: string): ParsedHttpPath {
  const pathParams: string[] = [];
  // Match {name} or {name=pattern}
  const template = path.replace(/\{([a-z_][a-z_0-9]*)(?:=[^}]*)?\}/g, (_, name: string) => {
    pathParams.push(name);
    return `\${${snakeToCamel(name)}}`;
  });
  return { template, pathParams };
}

export function snakeToCamel(s: string): string {
  return s.replace(/_([a-z])/g, (_, c: string) => c.toUpperCase());
}
```

- [ ] **Step 4: Run tests — verify they pass**

Run: `cd packages/google-ads-sdk && bun test tests/codegen.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add packages/google-ads-sdk/src/codegen/http-binding.ts packages/google-ads-sdk/tests/codegen.test.ts
git commit -m "feat(google-ads-sdk): add HTTP path binding parser"
```

---

## Task 7: Codegen — emitter

**Files:**
- Create: `packages/google-ads-sdk/src/codegen/emitter.ts`
- Modify: `packages/google-ads-sdk/tests/codegen.test.ts` (add emitter tests)

**Scene:** Given `ProtoRoot`, emit four categories of TS files: enums, resource interfaces, service objects, and barrel indexes. The emitter is string-based to keep generator deterministic and debuggable. Output goes to `src/generated/v23/`.

- [ ] **Step 1: Add failing emitter tests**

Append to `tests/codegen.test.ts`:

```ts
import { emitEnum, emitMessage, emitService } from "../src/codegen/emitter.ts";

test("emitEnum produces string union", () => {
  const out = emitEnum({
    fullName: "test.Color",
    name: "Color",
    values: [
      { name: "COLOR_UNSPECIFIED", number: 0 },
      { name: "RED", number: 1 },
      { name: "BLUE", number: 2 },
    ],
  });
  expect(out).toContain('export type Color =');
  expect(out).toContain('"COLOR_UNSPECIFIED"');
  expect(out).toContain('"RED"');
  expect(out).toContain('"BLUE"');
});

test("emitMessage produces interface with optional fields", () => {
  const out = emitMessage({
    fullName: "test.Shape",
    name: "Shape",
    fields: [
      { name: "id", type: "string", id: 1, repeated: false, optional: false },
      { name: "tags", type: "string", id: 2, repeated: true, optional: false },
    ],
    nestedMessages: [],
    nestedEnums: [],
    oneofs: [],
  });
  expect(out).toContain("export interface Shape");
  expect(out).toContain("id?: string");
  expect(out).toContain("tags?: string[]");
});

test("emitService produces callable method", () => {
  const out = emitService(
    {
      fullName: "test.svc.CampaignService",
      name: "CampaignService",
      methods: [
        {
          name: "Mutate",
          requestType: "test.svc.MutateCampaignsRequest",
          responseType: "test.svc.MutateCampaignsResponse",
          httpOption: {
            verb: "post",
            path: "/v23/customers/{customer_id}/campaigns:mutate",
            body: "*",
          },
        },
      ],
    },
    new Map([
      [
        "test.svc.MutateCampaignsRequest",
        {
          fullName: "test.svc.MutateCampaignsRequest",
          name: "MutateCampaignsRequest",
          fields: [
            { name: "customer_id", type: "string", id: 1, repeated: false, optional: false },
            { name: "operations", type: "test.svc.CampaignOperation", id: 2, repeated: true, optional: false },
          ],
          nestedMessages: [],
          nestedEnums: [],
          oneofs: [],
        },
      ],
    ]),
  );
  expect(out).toContain("export const campaignService");
  expect(out).toContain("mutate(");
  expect(out).toContain("customerId: string");
  expect(out).toContain('client.post(`/v23/customers/${customerId}/campaigns:mutate`');
  expect(out).toContain("MutateCampaignsResponse");
});
```

- [ ] **Step 2: Run — verify failure**

Run: `cd packages/google-ads-sdk && bun test tests/codegen.test.ts`
Expected: FAIL on missing module.

- [ ] **Step 3: Implement `emitter.ts`**

```ts
// packages/google-ads-sdk/src/codegen/emitter.ts
import type { EnumAst, MessageAst, ServiceAst, MethodAst } from "./parser.ts";
import { resolveType } from "./type-resolver.ts";
import { parseHttpPath, snakeToCamel } from "./http-binding.ts";

export function emitEnum(e: EnumAst): string {
  const values = e.values.map((v) => `  | "${v.name}"`).join("\n");
  return `// Generated from ${e.fullName}. Do not edit by hand.\nexport type ${e.name} =\n${values};\n`;
}

export function emitMessage(m: MessageAst): string {
  const imports = new Set<string>();
  const lines: string[] = [];
  for (const f of m.fields) {
    const resolved = resolveType(f.type, f.repeated, f.map ?? null);
    for (const imp of resolved.imports) {
      if (imp.name !== m.name) imports.add(imp.name);
    }
    const jsName = snakeToCamel(f.name);
    lines.push(`  ${jsName}?: ${resolved.tsType};`);
  }
  const importLine =
    imports.size > 0
      ? `import type { ${[...imports].sort().join(", ")} } from "../index.ts";\n\n`
      : "";
  return `${importLine}// Generated from ${m.fullName}. Do not edit by hand.\nexport interface ${m.name} {\n${lines.join("\n")}\n}\n`;
}

export function emitService(s: ServiceAst, messageIndex: Map<string, MessageAst>): string {
  const methodNames = s.methods
    .map((m) => emitMethod(m, messageIndex))
    .filter((x): x is string => x !== null);
  const instance = s.name.charAt(0).toLowerCase() + s.name.slice(1);
  const usedTypes = collectServiceTypes(s, messageIndex);
  const importBlock =
    usedTypes.size > 0
      ? `import type { ${[...usedTypes].sort().join(", ")} } from "../index.ts";\n`
      : "";
  return `${importBlock}import type { HttpClient } from "@promobase/sdk-runtime";\n\n// Generated from ${s.fullName}. Do not edit by hand.\nexport const ${instance} = {\n${methodNames.join(",\n\n")}\n};\n`;
}

function emitMethod(m: MethodAst, messageIndex: Map<string, MessageAst>): string | null {
  if (!m.httpOption) return null;
  const parsed = parseHttpPath(m.httpOption.path);
  const methodName = m.name.charAt(0).toLowerCase() + m.name.slice(1);
  const reqShort = shortName(m.requestType);
  const resShort = shortName(m.responseType);

  const req = messageIndex.get(m.requestType);
  const pathParamSet = new Set(parsed.pathParams);
  const pathParamSignature = parsed.pathParams
    .map((p) => `${snakeToCamel(p)}: string`)
    .join(", ");

  // Remaining request fields for body/query
  const bodyFieldsTs = req
    ? `Omit<${reqShort}, ${parsed.pathParams.map((p) => `"${snakeToCamel(p)}"`).join(" | ") || "never"}>`
    : "Record<string, unknown>";

  const verb = m.httpOption.verb;
  const needsBody = verb === "post" || verb === "put" || verb === "patch";
  const bodyParam = needsBody ? `, body: ${bodyFieldsTs}` : "";
  const queryParam = !needsBody && req && req.fields.some((f) => !pathParamSet.has(f.name))
    ? `, query: ${bodyFieldsTs} = {} as ${bodyFieldsTs}`
    : "";

  const call = needsBody
    ? `client.post<${resShort}>(\`${parsed.template}\`, body)`
    : verb === "delete"
    ? `client.delete<${resShort}>(\`${parsed.template}\`)`
    : `client.get<${resShort}>(\`${parsed.template}\`${queryParam ? `, { query: query as Record<string, string | number | boolean | undefined> }` : ""})`;

  return `  ${methodName}(client: HttpClient${pathParamSignature ? `, ${pathParamSignature}` : ""}${bodyParam}${queryParam}): Promise<${resShort}> {\n    return ${call};\n  }`;
}

function shortName(fullName: string): string {
  const parts = fullName.split(".");
  return parts[parts.length - 1]!;
}

function collectServiceTypes(s: ServiceAst, messageIndex: Map<string, MessageAst>): Set<string> {
  const types = new Set<string>();
  for (const m of s.methods) {
    types.add(shortName(m.requestType));
    types.add(shortName(m.responseType));
  }
  return types;
}
```

- [ ] **Step 4: Run tests — verify they pass**

Run: `cd packages/google-ads-sdk && bun test tests/codegen.test.ts`
Expected: PASS (all).

- [ ] **Step 5: Commit**

```bash
git add packages/google-ads-sdk/src/codegen/emitter.ts packages/google-ads-sdk/tests/codegen.test.ts
git commit -m "feat(google-ads-sdk): add string emitter for enums/messages/services"
```

---

## Task 8: Codegen — orchestrator

**Files:**
- Create: `packages/google-ads-sdk/src/codegen/index.ts`
- Create: `packages/google-ads-sdk/src/generated/v23/.gitkeep`

**Scene:** The orchestrator walks the v23 proto tree, runs parser → resolver → emitter, writes all generated files to `src/generated/v23/`, writes barrel `index.ts` files, and does a final format pass.

- [ ] **Step 1: Create `.gitkeep`**

Create `packages/google-ads-sdk/src/generated/v23/.gitkeep` (empty file).

- [ ] **Step 2: Implement `codegen/index.ts`**

```ts
// packages/google-ads-sdk/src/codegen/index.ts
import path from "node:path";
import fs from "node:fs/promises";
import { loadProtos, type MessageAst } from "./parser.ts";
import { emitEnum, emitMessage, emitService } from "./emitter.ts";

const PKG_ROOT = path.resolve(import.meta.dir, "../..");
const GOOGLEAPIS = path.join(PKG_ROOT, "vendor/googleapis");
const V23_DIR = path.join(GOOGLEAPIS, "google/ads/googleads/v23");
const OUT = path.join(PKG_ROOT, "src/generated/v23");

async function walkProtos(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const out: string[] = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walkProtos(full)));
    else if (e.name.endsWith(".proto")) out.push(full);
  }
  return out;
}

async function writeFile(target: string, content: string) {
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, content);
}

async function main() {
  console.log(`[codegen] scanning ${V23_DIR}`);
  const protoFiles = await walkProtos(V23_DIR);
  console.log(`[codegen] found ${protoFiles.length} .proto files`);

  const root = await loadProtos(protoFiles, [GOOGLEAPIS]);
  console.log(
    `[codegen] parsed: ${root.messages.length} messages, ${root.enums.length} enums, ${root.services.length} services`,
  );

  // Clean output
  await fs.rm(OUT, { recursive: true, force: true });
  await fs.mkdir(OUT, { recursive: true });

  // Build message index for emitter
  const messageIndex = new Map<string, MessageAst>();
  for (const m of root.messages) messageIndex.set(m.fullName, m);

  // Only emit v23 types
  const isV23 = (fullName: string) => fullName.startsWith("google.ads.googleads.v23.");

  // Emit enums
  const enumNames: string[] = [];
  for (const e of root.enums) {
    if (!isV23(e.fullName)) continue;
    const file = path.join(OUT, "enums", `${e.name}.ts`);
    await writeFile(file, emitEnum(e));
    enumNames.push(e.name);
  }

  // Emit messages (top-level v23 messages only; nested messages are inlined via type references)
  const messageNames: string[] = [];
  for (const m of root.messages) {
    if (!isV23(m.fullName)) continue;
    const file = path.join(OUT, "resources", `${m.name}.ts`);
    await writeFile(file, emitMessage(m));
    messageNames.push(m.name);
  }

  // Emit services
  const serviceInstances: { name: string; instance: string }[] = [];
  for (const s of root.services) {
    if (!isV23(s.fullName)) continue;
    const file = path.join(OUT, "services", `${s.name}.ts`);
    await writeFile(file, emitService(s, messageIndex));
    const instance = s.name.charAt(0).toLowerCase() + s.name.slice(1);
    serviceInstances.push({ name: s.name, instance });
  }

  // Barrels
  await writeFile(
    path.join(OUT, "enums/index.ts"),
    enumNames.sort().map((n) => `export type { ${n} } from "./${n}.ts";`).join("\n") + "\n",
  );
  await writeFile(
    path.join(OUT, "resources/index.ts"),
    messageNames.sort().map((n) => `export type { ${n} } from "./${n}.ts";`).join("\n") + "\n",
  );
  await writeFile(
    path.join(OUT, "services/index.ts"),
    serviceInstances
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((s) => `export { ${s.instance} } from "./${s.name}.ts";`)
      .join("\n") + "\n",
  );

  // Top-level v23 barrel — re-exports everything flat so emitted `../index.ts` imports work.
  await writeFile(
    path.join(OUT, "index.ts"),
    `export * from "./enums/index.ts";\nexport * from "./resources/index.ts";\nexport * from "./services/index.ts";\n`,
  );

  console.log(`[codegen] done: ${enumNames.length} enums, ${messageNames.length} resources, ${serviceInstances.length} services`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
```

- [ ] **Step 3: Commit orchestrator (without running codegen yet)**

```bash
git add packages/google-ads-sdk/src/codegen/index.ts packages/google-ads-sdk/src/generated/v23/.gitkeep
git commit -m "feat(google-ads-sdk): add codegen orchestrator"
```

---

## Task 9: Run codegen; fix generated output; commit

**Scene:** First run of the codegen pipeline against real v23 protos. Expect issues to surface. Fix them iteratively until `bun run typecheck` passes on the generated tree.

- [ ] **Step 1: Run codegen**

Run: `cd packages/google-ads-sdk && bun run codegen`
Expected: output like `[codegen] done: ~400 enums, ~500 resources, ~200 services`.

- [ ] **Step 2: Typecheck generated output**

Run: `cd packages/google-ads-sdk && bun run typecheck`

Expected: likely errors on first pass. Common issues and fixes:

- **Duplicate short names across packages.** If `Campaign` exists both as a resource and as a nested message somewhere, emit detects collisions → rename with package suffix. Fix in `emitter.ts`/`type-resolver.ts` by keeping a short-name → fullName index in the orchestrator and qualifying duplicates as `CampaignBudget_Resource` etc.
- **Missing imports for cross-file references.** If `Campaign` references `Money` (in `common`), the resources barrel must include it. Ensure the `isV23` filter keeps `google.ads.googleads.v23.common.*` types.
- **Enums referenced by resources are under `enums/...`**: they still export from the same flat barrel (`../index.ts`), so both directories re-export into `v23/index.ts`. Confirm.
- **`oneof` fields emit as plain optional fields** — acceptable per spec.
- **`bytes` → `string`** — documented.

Iterate on `emitter.ts` / `codegen/index.ts` until typecheck is clean.

- [ ] **Step 3: Mark generated as linguist-generated**

Create `packages/google-ads-sdk/.gitattributes`:

```
src/generated/** linguist-generated=true
```

- [ ] **Step 4: Commit generated output**

```bash
git add packages/google-ads-sdk/src/generated/ packages/google-ads-sdk/.gitattributes
git commit -m "feat(google-ads-sdk): generate v23 types, enums, services"
```

If you needed to patch the codegen to make typecheck pass, amend those changes into a preceding commit or add a new `fix(google-ads-sdk): ...` commit before this one.

---

## Task 10: Runtime client

**Files:**
- Create: `packages/google-ads-sdk/src/client.ts`
- Create: `packages/google-ads-sdk/tests/client.test.ts`

- [ ] **Step 1: Write failing test**

```ts
// packages/google-ads-sdk/tests/client.test.ts
import { test, expect, mock } from "bun:test";
import { createClient } from "../src/client.ts";

test("createClient builds headers with Bearer, developer-token, login-customer-id", async () => {
  const calls: { url: string; init?: RequestInit }[] = [];
  const fetchMock = mock(async (url: string, init?: RequestInit) => {
    calls.push({ url, init });
    return new Response("{}", { status: 200 });
  });

  const client = createClient({
    getAccessToken: async () => "tok",
    developerToken: "dev",
    loginCustomerId: "1234567890",
    fetch: fetchMock as unknown as typeof fetch,
  });

  await client.http.get("/v23/customers:listAccessibleCustomers");

  expect(calls).toHaveLength(1);
  const headers = calls[0]!.init?.headers as Record<string, string>;
  expect(headers.authorization).toBe("Bearer tok");
  expect(headers["developer-token"]).toBe("dev");
  expect(headers["login-customer-id"]).toBe("1234567890");
});

test("createClient omits login-customer-id when not provided", async () => {
  let capturedHeaders: Record<string, string> = {};
  const fetchMock = mock(async (_url: string, init?: RequestInit) => {
    capturedHeaders = init?.headers as Record<string, string>;
    return new Response("{}", { status: 200 });
  });

  const client = createClient({
    getAccessToken: async () => "tok",
    developerToken: "dev",
    fetch: fetchMock as unknown as typeof fetch,
  });
  await client.http.get("/v23/customers:listAccessibleCustomers");
  expect(capturedHeaders["login-customer-id"]).toBeUndefined();
});
```

- [ ] **Step 2: Run — verify failure**

Run: `cd packages/google-ads-sdk && bun test tests/client.test.ts`
Expected: FAIL on missing module.

- [ ] **Step 3: Implement `client.ts`**

```ts
// packages/google-ads-sdk/src/client.ts
import { HttpClient, type RateLimiter, type DelayFn } from "@promobase/sdk-runtime";
import { parseGoogleAdsError } from "./errors.ts";

export interface GoogleAdsClientOptions {
  getAccessToken: () => string | Promise<string>;
  developerToken: string;
  loginCustomerId?: string;
  apiVersion?: "v23";
  fetch?: typeof fetch;
  rateLimiter?: RateLimiter;
  delay?: DelayFn;
  debug?: boolean;
}

export interface GoogleAdsClient {
  http: HttpClient;
  apiVersion: string;
}

export function createClient(opts: GoogleAdsClientOptions): GoogleAdsClient {
  const apiVersion = opts.apiVersion ?? "v23";
  const http = new HttpClient({
    baseUrl: "https://googleads.googleapis.com",
    getHeaders: async () => {
      const token = await opts.getAccessToken();
      const headers: Record<string, string> = {
        authorization: `Bearer ${token}`,
        "developer-token": opts.developerToken,
      };
      if (opts.loginCustomerId) headers["login-customer-id"] = opts.loginCustomerId;
      return headers;
    },
    fetch: opts.fetch,
    rateLimiter: opts.rateLimiter,
    delay: opts.delay,
    debug: opts.debug,
    onError: (status, body) => parseGoogleAdsError(status, body),
  });
  return { http, apiVersion };
}
```

- [ ] **Step 4: Tests still fail — `errors.ts` missing**

Proceed to Task 11.

---

## Task 11: Errors

**Files:**
- Create: `packages/google-ads-sdk/src/errors.ts`
- Create: `packages/google-ads-sdk/tests/errors.test.ts`

- [ ] **Step 1: Write failing tests**

```ts
// packages/google-ads-sdk/tests/errors.test.ts
import { test, expect } from "bun:test";
import { GoogleAdsError, parseGoogleAdsError } from "../src/errors.ts";

test("parseGoogleAdsError extracts nested GoogleAdsFailure details", () => {
  const body = {
    error: {
      code: 400,
      message: "Request contains an invalid argument.",
      status: "INVALID_ARGUMENT",
      details: [
        {
          "@type": "type.googleapis.com/google.ads.googleads.v23.errors.GoogleAdsFailure",
          errors: [
            {
              errorCode: { authenticationError: "NOT_ADS_USER" },
              message: "No Google Ads account",
              location: { fieldPathElements: [{ fieldName: "customer_id" }] },
            },
          ],
          requestId: "abc123",
        },
      ],
    },
  };

  const err = parseGoogleAdsError(400, body);
  expect(err).toBeInstanceOf(GoogleAdsError);
  expect(err.httpStatus).toBe(400);
  expect(err.requestId).toBe("abc123");
  expect(err.errors).toHaveLength(1);
  expect(err.errors[0]!.message).toBe("No Google Ads account");
  expect(err.errors[0]!.errorCode.authenticationError).toBe("NOT_ADS_USER");
  expect(err.message).toContain("NOT_ADS_USER");
});

test("parseGoogleAdsError falls back gracefully for unexpected shapes", () => {
  const err = parseGoogleAdsError(500, { something: "else" });
  expect(err).toBeInstanceOf(GoogleAdsError);
  expect(err.httpStatus).toBe(500);
  expect(err.errors).toEqual([]);
});
```

- [ ] **Step 2: Run — verify failure**

Run: `cd packages/google-ads-sdk && bun test tests/errors.test.ts`
Expected: FAIL on missing module.

- [ ] **Step 3: Implement `errors.ts`**

```ts
// packages/google-ads-sdk/src/errors.ts
export interface GoogleAdsErrorDetail {
  errorCode: Record<string, string>;
  message: string;
  trigger?: { stringValue?: string };
  location?: { fieldPathElements: { fieldName: string; index?: number }[] };
}

export class GoogleAdsError extends Error {
  readonly httpStatus: number;
  readonly requestId?: string;
  readonly errors: GoogleAdsErrorDetail[];
  readonly raw: unknown;

  constructor(opts: {
    message: string;
    httpStatus: number;
    requestId?: string;
    errors: GoogleAdsErrorDetail[];
    raw: unknown;
  }) {
    super(opts.message);
    this.name = "GoogleAdsError";
    this.httpStatus = opts.httpStatus;
    this.requestId = opts.requestId;
    this.errors = opts.errors;
    this.raw = opts.raw;
  }
}

interface GoogleErrorBody {
  error?: {
    code?: number;
    message?: string;
    status?: string;
    details?: Array<{
      "@type"?: string;
      errors?: GoogleAdsErrorDetail[];
      requestId?: string;
    }>;
  };
}

export function parseGoogleAdsError(httpStatus: number, body: unknown): GoogleAdsError {
  const b = body as GoogleErrorBody;
  const details = b?.error?.details ?? [];
  const failure = details.find((d) => (d["@type"] ?? "").includes("GoogleAdsFailure"));
  const errors = failure?.errors ?? [];
  const requestId = failure?.requestId;
  const topMessage = b?.error?.message ?? `HTTP ${httpStatus}`;
  const firstCode = errors[0] ? Object.values(errors[0].errorCode)[0] : undefined;
  const message = firstCode ? `${topMessage} [${firstCode}]` : topMessage;
  return new GoogleAdsError({ message, httpStatus, requestId, errors, raw: body });
}
```

- [ ] **Step 4: Run all tests — verify they pass**

Run: `cd packages/google-ads-sdk && bun test tests/`
Expected: client.test.ts and errors.test.ts PASS.

- [ ] **Step 5: Commit**

```bash
git add packages/google-ads-sdk/src/client.ts packages/google-ads-sdk/src/errors.ts packages/google-ads-sdk/tests/client.test.ts packages/google-ads-sdk/tests/errors.test.ts
git commit -m "feat(google-ads-sdk): add runtime client and error parser"
```

---

## Task 12: Pagination helper

**Files:**
- Create: `packages/google-ads-sdk/src/pagination.ts`
- Create: `packages/google-ads-sdk/tests/pagination.test.ts`

**Scene:** Google Ads `search` returns `{ results, nextPageToken }`. The helper wraps any such endpoint in an async iterable.

- [ ] **Step 1: Write failing test**

```ts
// packages/google-ads-sdk/tests/pagination.test.ts
import { test, expect } from "bun:test";
import { paginate } from "../src/pagination.ts";

type Row = { id: string };
type Res = { results?: Row[]; nextPageToken?: string };

test("paginate yields all rows across pages", async () => {
  const pages: Res[] = [
    { results: [{ id: "1" }, { id: "2" }], nextPageToken: "p2" },
    { results: [{ id: "3" }], nextPageToken: "p3" },
    { results: [{ id: "4" }] },
  ];
  let i = 0;
  const fetchPage = async (_req: { query: string; pageToken?: string }): Promise<Res> => {
    return pages[i++]!;
  };
  const out: Row[] = [];
  for await (const row of paginate(fetchPage, { query: "SELECT x" })) out.push(row);
  expect(out.map((r) => r.id)).toEqual(["1", "2", "3", "4"]);
});

test("paginate stops when no nextPageToken", async () => {
  const fetchPage = async () => ({ results: [{ id: "only" }] });
  const rows: Row[] = [];
  for await (const row of paginate(fetchPage, { query: "SELECT x" })) rows.push(row);
  expect(rows).toHaveLength(1);
});

test("paginate handles empty results", async () => {
  const fetchPage = async () => ({});
  const rows: Row[] = [];
  for await (const row of paginate(fetchPage, { query: "SELECT x" })) rows.push(row);
  expect(rows).toHaveLength(0);
});
```

- [ ] **Step 2: Run — verify failure**

Run: `cd packages/google-ads-sdk && bun test tests/pagination.test.ts`
Expected: FAIL on missing module.

- [ ] **Step 3: Implement `pagination.ts`**

```ts
// packages/google-ads-sdk/src/pagination.ts
export interface SearchRequest {
  query: string;
  pageToken?: string;
  pageSize?: number;
}

export interface SearchResponse<T> {
  results?: T[];
  nextPageToken?: string;
}

export async function* paginate<T>(
  fetchPage: (req: SearchRequest) => Promise<SearchResponse<T>>,
  initial: SearchRequest,
): AsyncIterable<T> {
  let pageToken: string | undefined = initial.pageToken;
  while (true) {
    const res = await fetchPage({ ...initial, pageToken });
    for (const row of res.results ?? []) yield row;
    if (!res.nextPageToken) return;
    pageToken = res.nextPageToken;
  }
}
```

- [ ] **Step 4: Run tests — verify they pass**

Run: `cd packages/google-ads-sdk && bun test tests/pagination.test.ts`
Expected: PASS (3 tests).

- [ ] **Step 5: Commit**

```bash
git add packages/google-ads-sdk/src/pagination.ts packages/google-ads-sdk/tests/pagination.test.ts
git commit -m "feat(google-ads-sdk): add pagination helper for search endpoints"
```

---

## Task 13: Namespace + public API

**Files:**
- Modify: `packages/google-ads-sdk/src/index.ts`
- Create: `packages/google-ads-sdk/src/namespace.ts`

- [ ] **Step 1: Create `namespace.ts`**

```ts
// packages/google-ads-sdk/src/namespace.ts
import { createClient } from "./client.ts";
import { GoogleAdsError } from "./errors.ts";
import { paginate } from "./pagination.ts";
import * as services from "./generated/v23/services/index.ts";

export const Google = {
  createClient,
  Ads: {
    ...services,
    paginate,
  },
  Errors: { GoogleAdsError },
} as const;
```

- [ ] **Step 2: Replace stub `src/index.ts`**

```ts
// packages/google-ads-sdk/src/index.ts
export { Google } from "./namespace.ts";
export { createClient } from "./client.ts";
export type { GoogleAdsClient, GoogleAdsClientOptions } from "./client.ts";
export { GoogleAdsError, parseGoogleAdsError } from "./errors.ts";
export type { GoogleAdsErrorDetail } from "./errors.ts";
export { paginate } from "./pagination.ts";
export type { SearchRequest, SearchResponse } from "./pagination.ts";
```

- [ ] **Step 3: Typecheck**

Run: `cd packages/google-ads-sdk && bun run typecheck`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add packages/google-ads-sdk/src/namespace.ts packages/google-ads-sdk/src/index.ts
git commit -m "feat(google-ads-sdk): expose Google namespace"
```

---

## Task 14: Umbrella integration

**Files:**
- Modify: `packages/ad-platforms/package.json`
- Modify: `packages/ad-platforms/src/index.ts`
- Modify: `packages/ad-platforms/tests/umbrella.test.ts`

- [ ] **Step 1: Add workspace dep**

Edit `packages/ad-platforms/package.json` — in `"dependencies"`, add:

```json
"@promobase/google-ads-sdk": "workspace:*"
```

Run: `bun install` (from repo root) to re-link.

- [ ] **Step 2: Re-export from umbrella**

Edit `packages/ad-platforms/src/index.ts` — after the `TikTok` export, add:

```ts
// --- Google Ads ---
export { Google } from "@promobase/google-ads-sdk";
export {
  createClient as createGoogleAdsClient,
  GoogleAdsError,
  paginate as googleAdsPaginate,
} from "@promobase/google-ads-sdk";
export type {
  GoogleAdsClient,
  GoogleAdsClientOptions,
  GoogleAdsErrorDetail,
  SearchRequest as GoogleAdsSearchRequest,
  SearchResponse as GoogleAdsSearchResponse,
} from "@promobase/google-ads-sdk";
```

- [ ] **Step 3: Add smoke test to umbrella**

Edit `packages/ad-platforms/tests/umbrella.test.ts` — append:

```ts
test("Google namespace is accessible", () => {
  const { Google } = require("../src/index.ts") as typeof import("../src/index.ts");
  expect(Google.createClient).toBeDefined();
  expect(Google.Ads.paginate).toBeDefined();
  expect(Google.Errors.GoogleAdsError).toBeDefined();
});
```

- [ ] **Step 4: Run umbrella tests**

Run: `cd packages/ad-platforms && bun test tests/umbrella.test.ts`
Expected: all PASS, including the new Google test.

- [ ] **Step 5: Typecheck umbrella**

Run: `cd packages/ad-platforms && bun run typecheck`
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add packages/ad-platforms/package.json packages/ad-platforms/src/index.ts packages/ad-platforms/tests/umbrella.test.ts bun.lock
git commit -m "feat(ad-platforms): re-export Google Ads SDK through umbrella"
```

---

## Task 15: End-to-end smoke test

**Files:**
- Create: `packages/google-ads-sdk/tests/smoke.test.ts`

**Scene:** Verify that a generated service can actually be invoked through the runtime client with a mocked fetch. This is the most important test — it proves the whole pipeline (codegen → emitter → runtime → error parser) works together.

- [ ] **Step 1: Write smoke test**

```ts
// packages/google-ads-sdk/tests/smoke.test.ts
import { test, expect, mock } from "bun:test";
import { Google } from "../src/index.ts";
import { googleAdsService } from "../src/generated/v23/services/index.ts";

test("googleAdsService.search hits the right URL with correct body", async () => {
  const calls: { url: string; init?: RequestInit }[] = [];
  const fetchMock = mock(async (url: string, init?: RequestInit) => {
    calls.push({ url, init });
    return new Response(
      JSON.stringify({
        results: [{ campaign: { resourceName: "customers/123/campaigns/456", id: "456", name: "Test" } }],
      }),
      { status: 200 },
    );
  });

  const client = Google.createClient({
    getAccessToken: async () => "tok",
    developerToken: "dev",
    fetch: fetchMock as unknown as typeof fetch,
  });

  const res = await googleAdsService.search(client.http, "123", {
    query: "SELECT campaign.id, campaign.name FROM campaign",
  });

  expect(calls).toHaveLength(1);
  expect(calls[0]!.url).toContain("/v23/customers/123/googleAds:search");
  expect(calls[0]!.init?.method).toBe("POST");
  const body = JSON.parse(calls[0]!.init?.body as string);
  expect(body.query).toBe("SELECT campaign.id, campaign.name FROM campaign");
  expect(res.results).toHaveLength(1);
});

test("GoogleAdsError surfaces when API returns failure", async () => {
  const fetchMock = mock(async () =>
    new Response(
      JSON.stringify({
        error: {
          code: 400,
          message: "invalid",
          details: [
            {
              "@type": "type.googleapis.com/google.ads.googleads.v23.errors.GoogleAdsFailure",
              errors: [{ errorCode: { queryError: "BAD_FIELD_NAME" }, message: "bad field" }],
              requestId: "req-1",
            },
          ],
        },
      }),
      { status: 400 },
    ),
  );

  const client = Google.createClient({
    getAccessToken: async () => "tok",
    developerToken: "dev",
    fetch: fetchMock as unknown as typeof fetch,
  });

  try {
    await googleAdsService.search(client.http, "123", { query: "SELECT bogus FROM campaign" });
    expect.unreachable("should have thrown");
  } catch (err) {
    expect(err).toBeInstanceOf(Google.Errors.GoogleAdsError);
    const e = err as InstanceType<typeof Google.Errors.GoogleAdsError>;
    expect(e.httpStatus).toBe(400);
    expect(e.requestId).toBe("req-1");
    expect(e.errors[0]!.errorCode.queryError).toBe("BAD_FIELD_NAME");
  }
});
```

- [ ] **Step 2: Run smoke test**

Run: `cd packages/google-ads-sdk && bun test tests/smoke.test.ts`
Expected: PASS (2 tests).

If the service instance name differs (e.g. `googleAdsService` not generated because the proto service name differs), check `src/generated/v23/services/` and adjust the import. If there are no generated services yet (codegen didn't emit GoogleAdsService), treat this as a codegen bug and fix Task 9.

- [ ] **Step 3: Run all tests once more for the package**

Run: `cd packages/google-ads-sdk && bun test tests/`
Expected: all tests PASS.

- [ ] **Step 4: Final typecheck across workspace**

Run the per-package typecheck in each modified package:

```bash
cd packages/sdk-runtime && bun run typecheck
cd ../google-ads-sdk && bun run typecheck
cd ../ad-platforms && bun run typecheck
```

Expected: all clean.

- [ ] **Step 5: Commit**

```bash
git add packages/google-ads-sdk/tests/smoke.test.ts
git commit -m "test(google-ads-sdk): end-to-end smoke via generated service"
```

---

## Done criteria

- [ ] `@promobase/google-ads-sdk` exists and is installed in the workspace.
- [ ] `bun run codegen` produces a committed `src/generated/v23/` tree that typechecks.
- [ ] `Google.createClient`, `Google.Ads.googleAdsService.search`, `Google.Ads.paginate`, and `Google.Errors.GoogleAdsError` are reachable from `@promobase/google-ads-sdk` and `@promobase/ad-platforms`.
- [ ] All unit tests (`sdk-runtime/http-client`, `google-ads-sdk/*`, `ad-platforms/umbrella`) pass.
- [ ] A smoke test invokes at least one generated service via a mocked fetch and parses a Google Ads error body into `GoogleAdsError`.

## Deferred (follow-up plans)

- Ergonomic resource wrappers (`Google.Ads.campaigns.create(...)` etc.).
- Typed GAQL query builder with field-literal narrowing.
- AI SDK tool generation and integration with `createAllTools`.
- True `searchStream` streaming over NDJSON.
- OAuth2 refresh flow helper (currently caller's responsibility).
- Publishing to npm.
