# Meta Business SDK TypeScript Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a type-safe TypeScript codegen that reads Meta's API spec JSONs and produces a fully typed SDK with async-iterable cursors, typed params, and string union enums.

**Architecture:** Git submodule for specs → Bun-based codegen pipeline (parse → patch → resolve types → emit TS) → lightweight fetch-based runtime (client, cursor, errors) → generated typed objects published as one npm package.

**Tech Stack:** Bun, TypeScript (strict mode), native fetch, no external deps for runtime.

---

### Task 1: Project Setup — Git Submodule, Package Config, Directory Structure

**Files:**
- Modify: `package.json`
- Modify: `tsconfig.json`
- Modify: `CLAUDE.md`
- Modify: `README.md`
- Create: `.gitignore`
- Create: `src/codegen/.gitkeep` (placeholder)
- Create: `src/runtime/.gitkeep` (placeholder)
- Create: `src/generated/.gitkeep` (placeholder)
- Create: `tests/codegen/.gitkeep` (placeholder)
- Create: `tests/runtime/.gitkeep` (placeholder)

- [ ] **Step 1: Add the git submodule**

```bash
git submodule add https://github.com/facebook/facebook-business-sdk-codegen.git api_specs
cd api_specs && git checkout main && cd ..
```

- [ ] **Step 2: Verify specs are accessible**

```bash
ls api_specs/api_specs/specs/Campaign.json
```

Expected: File exists.

- [ ] **Step 3: Create .gitignore**

```gitignore
node_modules/
dist/
*.tsbuildinfo
.env
```

- [ ] **Step 4: Update package.json**

```json
{
  "name": "meta-business-sdk-ts",
  "version": "0.1.0",
  "module": "src/generated/index.ts",
  "type": "module",
  "scripts": {
    "codegen": "bun src/codegen/index.ts",
    "typecheck": "tsc --noEmit",
    "test": "bun test",
    "build": "bun build src/generated/index.ts --outdir dist --target node"
  },
  "devDependencies": {
    "@types/bun": "latest"
  },
  "peerDependencies": {
    "typescript": "^5.9.3"
  }
}
```

- [ ] **Step 5: Update tsconfig.json**

```json
{
  "compilerOptions": {
    "lib": ["ESNext"],
    "target": "ESNext",
    "module": "Preserve",
    "moduleDetection": "force",
    "allowJs": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "noEmit": true,
    "strict": true,
    "skipLibCheck": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noPropertyAccessFromIndexSignature": false
  },
  "include": ["src/**/*.ts", "tests/**/*.ts"],
  "exclude": ["node_modules", "dist", "api_specs"]
}
```

- [ ] **Step 6: Create directory structure**

```bash
mkdir -p src/codegen src/runtime src/generated/objects src/generated/enums tests/codegen tests/runtime
```

- [ ] **Step 7: Update CLAUDE.md**

Replace the current CLAUDE.md with project-specific instructions covering:
- This is a codegen project for Meta Business SDK
- Specs live in `api_specs/api_specs/specs/`
- `bun run codegen` to regenerate
- `bun run typecheck` to validate
- `bun test` for tests
- Keep the Bun-specific guidance from current CLAUDE.md

- [ ] **Step 8: Update README.md**

Write a README covering: what this is, how to install, usage examples (createClient, list campaigns with for-await, create campaign), how to run codegen, project structure.

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "feat: project setup with git submodule, directory structure, and docs"
```

---

### Task 2: Runtime — Error Types

**Files:**
- Create: `src/runtime/errors.ts`
- Create: `tests/runtime/errors.test.ts`

- [ ] **Step 1: Write the failing test**

```ts
// tests/runtime/errors.test.ts
import { test, expect } from "bun:test";
import { FacebookApiError } from "../../src/runtime/errors.ts";

test("FacebookApiError parses Graph API error response", () => {
  const body = {
    error: {
      message: "Invalid OAuth access token.",
      type: "OAuthException",
      code: 190,
      error_subcode: 463,
      fbtrace_id: "AbC123xYz",
    },
  };

  const err = FacebookApiError.fromResponse(400, body);

  expect(err).toBeInstanceOf(FacebookApiError);
  expect(err).toBeInstanceOf(Error);
  expect(err.message).toBe("Invalid OAuth access token.");
  expect(err.status).toBe(400);
  expect(err.code).toBe(190);
  expect(err.subcode).toBe(463);
  expect(err.type).toBe("OAuthException");
  expect(err.fbtrace_id).toBe("AbC123xYz");
});

test("FacebookApiError handles missing subcode", () => {
  const body = {
    error: {
      message: "Some error",
      type: "Exception",
      code: 100,
      fbtrace_id: "xyz",
    },
  };

  const err = FacebookApiError.fromResponse(500, body);

  expect(err.subcode).toBeUndefined();
  expect(err.code).toBe(100);
});

test("FacebookApiError handles malformed response body", () => {
  const err = FacebookApiError.fromResponse(502, { unexpected: "shape" });

  expect(err.message).toBe("Unknown Facebook API error");
  expect(err.status).toBe(502);
  expect(err.code).toBe(0);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bun test tests/runtime/errors.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 3: Write the implementation**

```ts
// src/runtime/errors.ts
export class FacebookApiError extends Error {
  readonly status: number;
  readonly code: number;
  readonly subcode: number | undefined;
  readonly type: string;
  readonly fbtrace_id: string;

  constructor(opts: {
    message: string;
    status: number;
    code: number;
    subcode?: number;
    type: string;
    fbtrace_id: string;
  }) {
    super(opts.message);
    this.name = "FacebookApiError";
    this.status = opts.status;
    this.code = opts.code;
    this.subcode = opts.subcode;
    this.type = opts.type;
    this.fbtrace_id = opts.fbtrace_id;
  }

  static fromResponse(status: number, body: unknown): FacebookApiError {
    if (
      typeof body === "object" &&
      body !== null &&
      "error" in body &&
      typeof (body as Record<string, unknown>).error === "object"
    ) {
      const err = (body as { error: Record<string, unknown> }).error;
      return new FacebookApiError({
        message: typeof err.message === "string" ? err.message : "Unknown Facebook API error",
        status,
        code: typeof err.code === "number" ? err.code : 0,
        subcode: typeof err.error_subcode === "number" ? err.error_subcode : undefined,
        type: typeof err.type === "string" ? err.type : "Unknown",
        fbtrace_id: typeof err.fbtrace_id === "string" ? err.fbtrace_id : "",
      });
    }

    return new FacebookApiError({
      message: "Unknown Facebook API error",
      status,
      code: 0,
      type: "Unknown",
      fbtrace_id: "",
    });
  }
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `bun test tests/runtime/errors.test.ts`
Expected: 3 tests PASS.

- [ ] **Step 5: Commit**

```bash
git add src/runtime/errors.ts tests/runtime/errors.test.ts
git commit -m "feat: add FacebookApiError with Graph API error parsing"
```

---

### Task 3: Runtime — API Client

**Files:**
- Create: `src/runtime/client.ts`
- Create: `tests/runtime/client.test.ts`

- [ ] **Step 1: Write the failing test**

```ts
// tests/runtime/client.test.ts
import { test, expect, mock, beforeEach, afterEach } from "bun:test";
import { ApiClient } from "../../src/runtime/client.ts";
import { FacebookApiError } from "../../src/runtime/errors.ts";

// Mock fetch globally
const originalFetch = globalThis.fetch;

function mockFetch(response: { status: number; body: unknown }) {
  globalThis.fetch = mock(() =>
    Promise.resolve(new Response(JSON.stringify(response.body), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    }))
  ) as typeof fetch;
}

afterEach(() => {
  globalThis.fetch = originalFetch;
});

test("ApiClient.get sends GET with access token and fields", async () => {
  mockFetch({ status: 200, body: { id: "123", name: "Test" } });

  const client = new ApiClient({ accessToken: "tok_123" });
  const result = await client.get<{ id: string; name: string }>("123", {
    fields: ["id", "name"],
  });

  expect(result).toEqual({ id: "123", name: "Test" });

  const [url] = (globalThis.fetch as ReturnType<typeof mock>).mock.calls[0] as [string];
  expect(url).toContain("https://graph.facebook.com/v25.0/123");
  expect(url).toContain("access_token=tok_123");
  expect(url).toContain("fields=id%2Cname");
});

test("ApiClient.post sends POST with params as form body", async () => {
  mockFetch({ status: 200, body: { id: "456" } });

  const client = new ApiClient({ accessToken: "tok_123" });
  const result = await client.post<{ id: string }>("act_123/campaigns", {
    name: "My Campaign",
    objective: "OUTCOME_SALES",
  });

  expect(result).toEqual({ id: "456" });

  const [url, init] = (globalThis.fetch as ReturnType<typeof mock>).mock.calls[0] as [string, RequestInit];
  expect(url).toContain("https://graph.facebook.com/v25.0/act_123/campaigns");
  expect(init.method).toBe("POST");
});

test("ApiClient throws FacebookApiError on error response", async () => {
  mockFetch({
    status: 400,
    body: {
      error: {
        message: "Invalid token",
        type: "OAuthException",
        code: 190,
        fbtrace_id: "abc",
      },
    },
  });

  const client = new ApiClient({ accessToken: "bad_token" });

  expect(client.get("123", { fields: ["id"] })).rejects.toBeInstanceOf(FacebookApiError);
});

test("ApiClient.getEdge returns paginated response shape", async () => {
  mockFetch({
    status: 200,
    body: {
      data: [{ id: "1" }, { id: "2" }],
      paging: { cursors: { after: "cursor_abc" }, next: "https://..." },
    },
  });

  const client = new ApiClient({ accessToken: "tok_123" });
  const result = await client.getEdge("act_123/campaigns", {
    fields: ["id"],
  });

  expect(result.data).toHaveLength(2);
  expect(result.paging.cursors.after).toBe("cursor_abc");
});

test("ApiClient respects custom apiVersion and baseUrl", async () => {
  mockFetch({ status: 200, body: {} });

  const client = new ApiClient({
    accessToken: "tok",
    apiVersion: "v24.0",
    baseUrl: "https://custom.graph.com",
  });
  await client.get("123", { fields: [] });

  const [url] = (globalThis.fetch as ReturnType<typeof mock>).mock.calls[0] as [string];
  expect(url).toContain("https://custom.graph.com/v24.0/123");
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bun test tests/runtime/client.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 3: Write the implementation**

```ts
// src/runtime/client.ts
import { FacebookApiError } from "./errors.ts";

export interface PaginatedResponse<T = Record<string, unknown>> {
  data: T[];
  paging: {
    cursors: { before?: string; after?: string };
    next?: string;
    previous?: string;
  };
}

export interface ApiClientOptions {
  accessToken: string;
  apiVersion?: string;
  baseUrl?: string;
  debug?: boolean;
}

export class ApiClient {
  private readonly accessToken: string;
  private readonly apiVersion: string;
  private readonly baseUrl: string;
  private readonly debug: boolean;

  constructor(opts: ApiClientOptions) {
    this.accessToken = opts.accessToken;
    this.apiVersion = opts.apiVersion ?? "v25.0";
    this.baseUrl = opts.baseUrl ?? "https://graph.facebook.com";
    this.debug = opts.debug ?? false;
  }

  private buildUrl(path: string, params?: Record<string, unknown>): string {
    const url = new URL(`${this.apiVersion}/${path}`, this.baseUrl);
    url.searchParams.set("access_token", this.accessToken);
    if (params) {
      for (const [key, value] of Object.entries(params)) {
        if (value !== undefined && value !== null) {
          url.searchParams.set(
            key,
            typeof value === "object" ? JSON.stringify(value) : String(value),
          );
        }
      }
    }
    return url.toString();
  }

  private async request<T>(method: string, url: string, body?: Record<string, unknown>): Promise<T> {
    if (this.debug) {
      console.log(`[Meta SDK] ${method} ${url}`);
    }

    const init: RequestInit = { method };
    if (body && (method === "POST" || method === "PUT")) {
      const formData = new URLSearchParams();
      for (const [key, value] of Object.entries(body)) {
        if (value !== undefined && value !== null) {
          formData.set(
            key,
            typeof value === "object" ? JSON.stringify(value) : String(value),
          );
        }
      }
      init.body = formData;
      init.headers = { "Content-Type": "application/x-www-form-urlencoded" };
    }

    const response = await fetch(url, init);
    const responseBody = await response.json();

    if (this.debug) {
      console.log(`[Meta SDK] ${response.status}`, responseBody);
    }

    if (!response.ok) {
      throw FacebookApiError.fromResponse(response.status, responseBody);
    }

    return responseBody as T;
  }

  async get<T>(path: string, opts: { fields: string[]; params?: Record<string, unknown> }): Promise<T> {
    const params = { ...opts.params, fields: opts.fields.join(",") };
    const url = this.buildUrl(path, params);
    return this.request<T>("GET", url);
  }

  async post<T>(path: string, params: Record<string, unknown>): Promise<T> {
    const url = this.buildUrl(path);
    return this.request<T>("POST", url, params);
  }

  async delete(path: string, params?: Record<string, unknown>): Promise<void> {
    const url = this.buildUrl(path, params);
    await this.request<unknown>("DELETE", url);
  }

  async getEdge<T = Record<string, unknown>>(
    path: string,
    opts: { fields: string[]; params?: Record<string, unknown> },
  ): Promise<PaginatedResponse<T>> {
    const params = { ...opts.params, fields: opts.fields.join(",") };
    const url = this.buildUrl(path, params);
    return this.request<PaginatedResponse<T>>("GET", url);
  }

  async getUrl<T>(url: string): Promise<T> {
    return this.request<T>("GET", url);
  }
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `bun test tests/runtime/client.test.ts`
Expected: 5 tests PASS.

- [ ] **Step 5: Commit**

```bash
git add src/runtime/client.ts tests/runtime/client.test.ts
git commit -m "feat: add ApiClient with GET/POST/DELETE and pagination support"
```

---

### Task 4: Runtime — Typed Async-Iterable Cursor

**Files:**
- Create: `src/runtime/cursor.ts`
- Create: `tests/runtime/cursor.test.ts`

- [ ] **Step 1: Write the failing test**

```ts
// tests/runtime/cursor.test.ts
import { test, expect, mock, afterEach } from "bun:test";
import { Cursor } from "../../src/runtime/cursor.ts";
import { ApiClient } from "../../src/runtime/client.ts";

const originalFetch = globalThis.fetch;

function mockFetchPages(pages: { data: unknown[]; after?: string }[]) {
  let callIndex = 0;
  globalThis.fetch = mock(() => {
    const page = pages[callIndex++]!;
    return Promise.resolve(
      new Response(
        JSON.stringify({
          data: page.data,
          paging: {
            cursors: { after: page.after },
            ...(page.after ? { next: "https://graph.facebook.com/next" } : {}),
          },
        }),
        { status: 200, headers: { "Content-Type": "application/json" } },
      ),
    );
  }) as typeof fetch;
}

afterEach(() => {
  globalThis.fetch = originalFetch;
});

test("Cursor.next() returns first page of results", async () => {
  mockFetchPages([
    { data: [{ id: "1", name: "A" }, { id: "2", name: "B" }], after: "cur1" },
  ]);

  const client = new ApiClient({ accessToken: "tok" });
  const cursor = new Cursor<{ id: string; name: string }>(
    client,
    "act_123/campaigns",
    { fields: ["id", "name"] },
  );

  const page = await cursor.next();
  expect(page.data).toHaveLength(2);
  expect(page.data[0]!.id).toBe("1");
  expect(page.hasNext).toBe(true);
});

test("Cursor detects last page (no next)", async () => {
  mockFetchPages([
    { data: [{ id: "1" }] }, // no after cursor
  ]);

  const client = new ApiClient({ accessToken: "tok" });
  const cursor = new Cursor<{ id: string }>(client, "path", { fields: ["id"] });

  const page = await cursor.next();
  expect(page.hasNext).toBe(false);
});

test("Cursor is async-iterable across multiple pages", async () => {
  mockFetchPages([
    { data: [{ id: "1" }, { id: "2" }], after: "cur1" },
    { data: [{ id: "3" }] },
  ]);

  const client = new ApiClient({ accessToken: "tok" });
  const cursor = new Cursor<{ id: string }>(client, "path", { fields: ["id"] });

  const ids: string[] = [];
  for await (const item of cursor) {
    ids.push(item.id);
  }

  expect(ids).toEqual(["1", "2", "3"]);
});

test("Cursor.toArray() collects all pages", async () => {
  mockFetchPages([
    { data: [{ id: "1" }], after: "cur1" },
    { data: [{ id: "2" }] },
  ]);

  const client = new ApiClient({ accessToken: "tok" });
  const cursor = new Cursor<{ id: string }>(client, "path", { fields: ["id"] });

  const all = await cursor.toArray();
  expect(all).toHaveLength(2);
  expect(all.map((x) => x.id)).toEqual(["1", "2"]);
});

test("Cursor.take(n) stops after n items across pages", async () => {
  mockFetchPages([
    { data: [{ id: "1" }, { id: "2" }], after: "cur1" },
    { data: [{ id: "3" }, { id: "4" }] },
  ]);

  const client = new ApiClient({ accessToken: "tok" });
  const cursor = new Cursor<{ id: string }>(client, "path", { fields: ["id"] });

  const first3 = await cursor.take(3);
  expect(first3).toHaveLength(3);
  expect(first3.map((x) => x.id)).toEqual(["1", "2", "3"]);
});

test("Cursor is lazy — no fetch until next() or iteration", () => {
  // If Cursor fetched on construction, this would fail because fetch is not mocked
  const client = new ApiClient({ accessToken: "tok" });
  const _cursor = new Cursor<{ id: string }>(client, "path", { fields: ["id"] });
  // No exception = lazy
  expect(true).toBe(true);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bun test tests/runtime/cursor.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 3: Write the implementation**

```ts
// src/runtime/cursor.ts
import type { ApiClient, PaginatedResponse } from "./client.ts";

export class Cursor<T> implements AsyncIterable<T> {
  private readonly client: ApiClient;
  private readonly path: string;
  private readonly fields: string[];
  private readonly params: Record<string, unknown>;
  private readonly deserialize: ((raw: unknown) => T) | undefined;

  private afterCursor: string | undefined = undefined;
  private hasMore = true;
  private started = false;

  constructor(
    client: ApiClient,
    path: string,
    opts: { fields: string[]; params?: Record<string, unknown> },
    deserialize?: (raw: unknown) => T,
  ) {
    this.client = client;
    this.path = path;
    this.fields = opts.fields;
    this.params = opts.params ?? {};
    this.deserialize = deserialize;
  }

  async next(): Promise<{ data: T[]; hasNext: boolean }> {
    if (!this.hasMore && this.started) {
      return { data: [], hasNext: false };
    }

    this.started = true;

    const params: Record<string, unknown> = { ...this.params };
    if (this.afterCursor) {
      params.after = this.afterCursor;
    }

    const response = await this.client.getEdge<Record<string, unknown>>(this.path, {
      fields: this.fields,
      params,
    });

    this.afterCursor = response.paging?.cursors?.after;
    this.hasMore = !!response.paging?.next;

    const data = response.data.map((item) =>
      this.deserialize ? this.deserialize(item) : (item as T),
    );

    return { data, hasNext: this.hasMore };
  }

  async *[Symbol.asyncIterator](): AsyncIterator<T> {
    while (true) {
      const page = await this.next();
      yield* page.data;
      if (!page.hasNext) break;
    }
  }

  async toArray(): Promise<T[]> {
    const result: T[] = [];
    for await (const item of this) {
      result.push(item);
    }
    return result;
  }

  async take(n: number): Promise<T[]> {
    const result: T[] = [];
    for await (const item of this) {
      result.push(item);
      if (result.length >= n) break;
    }
    return result;
  }
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `bun test tests/runtime/cursor.test.ts`
Expected: 6 tests PASS.

- [ ] **Step 5: Commit**

```bash
git add src/runtime/cursor.ts tests/runtime/cursor.test.ts
git commit -m "feat: add async-iterable Cursor with pagination, toArray, and take"
```

---

### Task 5: Runtime — Barrel Export and createClient

**Files:**
- Create: `src/runtime/types.ts`
- Create: `src/runtime/index.ts`

- [ ] **Step 1: Write types.ts**

```ts
// src/runtime/types.ts
export type EdgeMethod = "GET" | "POST" | "DELETE";
```

- [ ] **Step 2: Write the runtime barrel export with createClient**

```ts
// src/runtime/index.ts
export { ApiClient } from "./client.ts";
export type { ApiClientOptions, PaginatedResponse } from "./client.ts";
export { Cursor } from "./cursor.ts";
export { FacebookApiError } from "./errors.ts";
export type { EdgeMethod } from "./types.ts";

import { ApiClient } from "./client.ts";
import type { ApiClientOptions } from "./client.ts";

export function createClient(opts: ApiClientOptions): ApiClient {
  return new ApiClient(opts);
}
```

- [ ] **Step 3: Verify typecheck passes**

Run: `bun run typecheck`
Expected: No errors.

- [ ] **Step 4: Commit**

```bash
git add src/runtime/types.ts src/runtime/index.ts
git commit -m "feat: add runtime barrel export and createClient factory"
```

---

### Task 6: Codegen — Spec Parser with SDKCodegen.json Patching

**Files:**
- Create: `src/codegen/parser.ts`
- Create: `tests/codegen/parser.test.ts`

- [ ] **Step 1: Write the failing test**

```ts
// tests/codegen/parser.test.ts
import { test, expect } from "bun:test";
import { parseSpecs, applyPatches, type SpecField, type SpecApi } from "../../src/codegen/parser.ts";

test("parseSpecs loads a spec file into the map", async () => {
  const specs = await parseSpecs("api_specs/api_specs/specs");

  expect(specs.size).toBeGreaterThan(900);
  expect(specs.has("Campaign")).toBe(true);

  const campaign = specs.get("Campaign")!;
  expect(campaign.fields.length).toBeGreaterThan(10);
  expect(campaign.apis.length).toBeGreaterThan(5);
});

test("parseSpecs parses field shape correctly", async () => {
  const specs = await parseSpecs("api_specs/api_specs/specs");
  const campaign = specs.get("Campaign")!;

  const idField = campaign.fields.find((f) => f.name === "id");
  expect(idField).toBeDefined();
  expect(idField!.type).toBe("string");

  const bidField = campaign.fields.find((f) => f.name === "bid_strategy");
  expect(bidField).toBeDefined();
  expect(bidField!.type).toBe("Campaign_bid_strategy");
});

test("parseSpecs parses api shape correctly", async () => {
  const specs = await parseSpecs("api_specs/api_specs/specs");
  const campaign = specs.get("Campaign")!;

  // Edge API
  const getAds = campaign.apis.find((a) => a.endpoint === "ads" && a.method === "GET");
  expect(getAds).toBeDefined();
  expect(getAds!.return).toBe("Ad");
  expect(getAds!.params.length).toBeGreaterThan(0);

  // Node API (self)
  const selfGet = campaign.apis.find((a) => a.name === "#get");
  expect(selfGet).toBeDefined();
  expect(selfGet!.method).toBe("GET");
  expect(selfGet!.return).toBe("Campaign");
});

test("parseSpecs handles pure data objects (no apis)", async () => {
  const specs = await parseSpecs("api_specs/api_specs/specs");
  const insights = specs.get("AdsInsights")!;

  expect(insights.fields.length).toBeGreaterThan(10);
  expect(insights.apis).toHaveLength(0);
});

test("applyPatches overrides return types from SDKCodegen.json", async () => {
  const specs = await parseSpecs("api_specs/api_specs/specs");
  const patched = await applyPatches(specs, "api_specs/api_specs/SDKCodegen.json");

  const campaign = patched.get("Campaign")!;
  const postInsights = campaign.apis.find(
    (a) => a.method === "POST" && a.endpoint === "insights",
  );
  expect(postInsights!.return).toBe("AdReportRun");
});

test("applyPatches marks fields as not_visible", async () => {
  const specs = await parseSpecs("api_specs/api_specs/specs");
  const patched = await applyPatches(specs, "api_specs/api_specs/SDKCodegen.json");

  const business = patched.get("Business")!;
  const paymentField = business.fields.find((f) => f.name === "payment_account_id");
  expect(paymentField?.not_visible).toBe(true);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bun test tests/codegen/parser.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 3: Write the implementation**

```ts
// src/codegen/parser.ts
import { readdir } from "node:fs/promises";
import { join, basename } from "node:path";

export interface SpecField {
  name: string;
  type: string;
  not_visible?: boolean;
  is_file_param?: boolean;
  keyvalue?: boolean;
  context?: string;
}

export interface SpecParam {
  name: string;
  type: string;
  required: boolean;
  is_file_param?: boolean;
}

export interface SpecApi {
  name?: string; // "#get", "#update", "#delete" for node ops; absent for edges
  method: "GET" | "POST" | "DELETE";
  endpoint?: string; // absent for node ops
  return: string;
  params: SpecParam[];
  allow_file_upload?: boolean;
  use_graph_video_endpoint?: boolean;
  preferred_creation_endpoint?: boolean;
}

export interface Spec {
  name: string;
  fields: SpecField[];
  apis: SpecApi[];
}

export async function parseSpecs(specsDir: string): Promise<Map<string, Spec>> {
  const specs = new Map<string, Spec>();
  const files = await readdir(specsDir);

  for (const file of files) {
    if (!file.endsWith(".json")) continue;
    const name = basename(file, ".json");
    const content = await Bun.file(join(specsDir, file)).json();

    specs.set(name, {
      name,
      fields: (content.fields ?? []) as SpecField[],
      apis: (content.apis ?? []) as SpecApi[],
    });
  }

  return specs;
}

interface PatchEntry {
  [jsonPath: string]: Record<string, unknown>;
}

interface SDKCodegenJson {
  spec_overriding?: Record<string, PatchEntry>;
  enum_overriding?: Record<string, string[]>;
  read_endpoints?: Record<string, string>;
  flags?: Record<string, Record<string, unknown>>;
}

export async function applyPatches(
  specs: Map<string, Spec>,
  sdkCodegenPath: string,
): Promise<Map<string, Spec>> {
  const codegen: SDKCodegenJson = await Bun.file(sdkCodegenPath).json();

  if (!codegen.spec_overriding) return specs;

  for (const [objectName, patches] of Object.entries(codegen.spec_overriding)) {
    const spec = specs.get(objectName);
    if (!spec) continue;

    for (const [path, overrides] of Object.entries(patches)) {
      // Parse simple JSONPath patterns used by SDKCodegen.json
      // Pattern: $.apis[?(@.method=='X' && @.endpoint=='Y')]
      // Pattern: $.fields[?(@.name=='X')]
      // Pattern: $.apis[...].params[?(@.name=='X')]
      // Pattern: $ (root level)

      if (path === "$") {
        // Root-level flags on the spec
        Object.assign(spec, overrides);
        continue;
      }

      const apisMatch = path.match(
        /^\$\.apis\[\?\(@\.method=='(\w+)'\s*&&\s*@\.endpoint=='([^']+)'\)\]$/,
      );
      if (apisMatch) {
        const [, method, endpoint] = apisMatch;
        const api = spec.apis.find(
          (a) => a.method === method && a.endpoint === endpoint,
        );
        if (api) Object.assign(api, overrides);
        continue;
      }

      const apiParamMatch = path.match(
        /^\$\.apis\[\?\(@\.method=='(\w+)'\s*&&\s*@\.endpoint=='([^']+)'\)\](?:\['params'\]|\.\params)\[\?\(@\.name=='([^']+)'\)\]$/,
      );
      if (apiParamMatch) {
        const [, method, endpoint, paramName] = apiParamMatch;
        const api = spec.apis.find(
          (a) => a.method === method && a.endpoint === endpoint,
        );
        if (api) {
          const param = api.params.find((p) => p.name === paramName);
          if (param) Object.assign(param, overrides);
        }
        continue;
      }

      const fieldsMatch = path.match(
        /^\$\.fields\[\?\(@\.name=='([^']+)'\)\]$/,
      );
      if (fieldsMatch) {
        const [, fieldName] = fieldsMatch;
        const field = spec.fields.find((f) => f.name === fieldName);
        if (field) Object.assign(field, overrides);
        continue;
      }
    }
  }

  return specs;
}

export async function loadReadEndpoints(
  sdkCodegenPath: string,
): Promise<Map<string, string>> {
  const codegen: SDKCodegenJson = await Bun.file(sdkCodegenPath).json();
  return new Map(Object.entries(codegen.read_endpoints ?? {}));
}

export async function loadEnumOverrides(
  sdkCodegenPath: string,
): Promise<Map<string, string[]>> {
  const codegen: SDKCodegenJson = await Bun.file(sdkCodegenPath).json();
  return new Map(Object.entries(codegen.enum_overriding ?? {}));
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `bun test tests/codegen/parser.test.ts`
Expected: 6 tests PASS.

- [ ] **Step 5: Commit**

```bash
git add src/codegen/parser.ts tests/codegen/parser.test.ts
git commit -m "feat: add spec parser with SDKCodegen.json patching"
```

---

### Task 7: Codegen — Type Resolver

**Files:**
- Create: `src/codegen/type-resolver.ts`
- Create: `tests/codegen/type-resolver.test.ts`

- [ ] **Step 1: Write the failing test**

```ts
// tests/codegen/type-resolver.test.ts
import { test, expect } from "bun:test";
import { resolveType, parseGenericType } from "../../src/codegen/type-resolver.ts";

// Known spec object names for resolution
const knownObjects = new Set(["Campaign", "AdSet", "Ad", "AdLabel", "AdsActionStats", "AdCreative"]);
const knownEnums = new Set(["Campaign_bid_strategy", "Campaign_effective_status", "adcampaigngroup_objective"]);

const ctx = { knownObjects, knownEnums };

test("resolves primitive types", () => {
  expect(resolveType("string", ctx)).toBe("string");
  expect(resolveType("bool", ctx)).toBe("boolean");
  expect(resolveType("int", ctx)).toBe("number");
  expect(resolveType("unsigned int", ctx)).toBe("number");
  expect(resolveType("float", ctx)).toBe("number");
  expect(resolveType("datetime", ctx)).toBe("string");
  expect(resolveType("file", ctx)).toBe("File | Blob | ReadableStream");
});

test("resolves bare containers", () => {
  expect(resolveType("Object", ctx)).toBe("Record<string, unknown>");
  expect(resolveType("map", ctx)).toBe("Record<string, unknown>");
  expect(resolveType("list", ctx)).toBe("unknown[]");
});

test("resolves list<primitive>", () => {
  expect(resolveType("list<string>", ctx)).toBe("string[]");
  expect(resolveType("list<int>", ctx)).toBe("number[]");
  expect(resolveType("list<bool>", ctx)).toBe("boolean[]");
  expect(resolveType("list<Object>", ctx)).toBe("Record<string, unknown>[]");
});

test("resolves map<K, V>", () => {
  expect(resolveType("map<string, string>", ctx)).toBe("Record<string, string>");
  expect(resolveType("map<string, int>", ctx)).toBe("Record<string, number>");
  expect(resolveType("map<string, Object>", ctx)).toBe("Record<string, Record<string, unknown>>");
  expect(resolveType("map<string, bool>", ctx)).toBe("Record<string, boolean>");
});

test("resolves nested generics", () => {
  expect(resolveType("list<map<string, string>>", ctx)).toBe("Record<string, string>[]");
  expect(resolveType("list<list<int>>", ctx)).toBe("number[][]");
  expect(resolveType("list<map<string, list<map<string, string>>>>", ctx)).toBe(
    "Record<string, Record<string, string>[]>[]",
  );
});

test("resolves object references", () => {
  expect(resolveType("Campaign", ctx)).toBe("CampaignFields");
  expect(resolveType("AdSet", ctx)).toBe("AdSetFields");
  expect(resolveType("list<AdLabel>", ctx)).toBe("AdLabelFields[]");
});

test("resolves enum types", () => {
  expect(resolveType("Campaign_bid_strategy", ctx)).toBe("CampaignBidStrategy");
  expect(resolveType("Campaign_effective_status", ctx)).toBe("CampaignEffectiveStatus");
  expect(resolveType("list<Campaign_effective_status>", ctx)).toBe("CampaignEffectiveStatus[]");
});

test("resolves param enum types (lowercased convention)", () => {
  expect(resolveType("adcampaigngroup_objective", ctx)).toBe("AdcampaigngroupObjective");
});

test("parseGenericType parses nested angle brackets", () => {
  expect(parseGenericType("list<string>")).toEqual({ outer: "list", inner: ["string"] });
  expect(parseGenericType("map<string, int>")).toEqual({ outer: "map", inner: ["string", "int"] });
  expect(parseGenericType("list<map<string, string>>")).toEqual({
    outer: "list",
    inner: ["map<string, string>"],
  });
  expect(parseGenericType("Campaign")).toBeNull();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bun test tests/codegen/type-resolver.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 3: Write the implementation**

```ts
// src/codegen/type-resolver.ts

export interface TypeResolverContext {
  knownObjects: Set<string>;
  knownEnums: Set<string>;
}

export interface GenericParse {
  outer: string;
  inner: string[];
}

/**
 * Parse a generic type like "list<map<string, string>>" into its outer and inner parts.
 * Handles nested angle brackets correctly.
 */
export function parseGenericType(typeStr: string): GenericParse | null {
  const openIdx = typeStr.indexOf("<");
  if (openIdx === -1) return null;

  const outer = typeStr.substring(0, openIdx);
  // Strip outer angle brackets
  const innerStr = typeStr.substring(openIdx + 1, typeStr.length - 1);

  // Split on commas, but only at depth 0
  const inner: string[] = [];
  let depth = 0;
  let current = "";

  for (const ch of innerStr) {
    if (ch === "<") depth++;
    if (ch === ">") depth--;
    if (ch === "," && depth === 0) {
      inner.push(current.trim());
      current = "";
    } else {
      current += ch;
    }
  }
  if (current.trim()) inner.push(current.trim());

  return { outer, inner };
}

/**
 * Convert a spec enum type name to a PascalCase TypeScript type name.
 * "Campaign_bid_strategy" -> "CampaignBidStrategy"
 * "adcampaigngroup_objective" -> "AdcampaigngroupObjective"
 */
export function enumTypeToTsName(enumType: string): string {
  // Split on underscores and PascalCase each segment
  // But for field enums like "Campaign_bid_strategy", the first part is already PascalCase
  return enumType
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

/**
 * Resolve a spec type string to a TypeScript type expression.
 */
export function resolveType(typeStr: string, ctx: TypeResolverContext): string {
  // Primitives
  switch (typeStr) {
    case "string":
      return "string";
    case "bool":
      return "boolean";
    case "int":
    case "unsigned int":
    case "float":
      return "number";
    case "datetime":
      return "string";
    case "file":
      return "File | Blob | ReadableStream";
    case "Object":
      return "Record<string, unknown>";
    case "map":
      return "Record<string, unknown>";
    case "list":
      return "unknown[]";
  }

  // Generic types
  const generic = parseGenericType(typeStr);
  if (generic) {
    if (generic.outer === "list") {
      const innerType = resolveType(generic.inner[0]!, ctx);
      return `${innerType}[]`;
    }
    if (generic.outer === "map") {
      const keyType = resolveType(generic.inner[0]!, ctx);
      const valueType = resolveType(generic.inner[1]!, ctx);
      return `Record<${keyType}, ${valueType}>`;
    }
  }

  // Known enum types
  if (ctx.knownEnums.has(typeStr)) {
    return enumTypeToTsName(typeStr);
  }

  // Param enum types (end with _enum_param or match the lowercase convention)
  if (typeStr.endsWith("_enum_param") || typeStr.match(/^[a-z]+_[a-z_]+$/)) {
    return enumTypeToTsName(typeStr);
  }

  // Known object references
  if (ctx.knownObjects.has(typeStr)) {
    return `${typeStr}Fields`;
  }

  // Unknown — treat as object reference (may be a spec we haven't categorized)
  // If it starts with uppercase, it's likely an object reference
  if (typeStr.charAt(0) === typeStr.charAt(0).toUpperCase() && typeStr.charAt(0).match(/[A-Z]/)) {
    return `${typeStr}Fields`;
  }

  // Fallback: treat as enum-like
  return enumTypeToTsName(typeStr);
}

/**
 * Extract all type references from a resolved type string.
 * Returns the set of referenced object/enum names (not primitive TS types).
 */
export function extractTypeReferences(typeStr: string, ctx: TypeResolverContext): Set<string> {
  const refs = new Set<string>();

  const generic = parseGenericType(typeStr);
  if (generic) {
    for (const inner of generic.inner) {
      for (const ref of extractTypeReferences(inner, ctx)) {
        refs.add(ref);
      }
    }
    return refs;
  }

  if (ctx.knownObjects.has(typeStr)) {
    refs.add(typeStr);
  }
  if (ctx.knownEnums.has(typeStr)) {
    refs.add(typeStr);
  }

  return refs;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `bun test tests/codegen/type-resolver.test.ts`
Expected: 10 tests PASS.

- [ ] **Step 5: Commit**

```bash
git add src/codegen/type-resolver.ts tests/codegen/type-resolver.test.ts
git commit -m "feat: add type resolver mapping spec types to TypeScript types"
```

---

### Task 8: Codegen — Enum Extractor

**Files:**
- Create: `src/codegen/enum-extractor.ts`
- Create: `tests/codegen/enum-extractor.test.ts`

- [ ] **Step 1: Write the failing test**

The enum values aren't in the raw spec JSON — they need to be scraped from the existing Node SDK. We parse the `static get EnumName()` patterns from the generated `.js` files.

```ts
// tests/codegen/enum-extractor.test.ts
import { test, expect } from "bun:test";
import { extractEnumsFromSource, parseEnumBlock, type EnumMap } from "../../src/codegen/enum-extractor.ts";

test("parseEnumBlock extracts key-value pairs from frozen object", () => {
  const source = `
  static get BidStrategy (): Object {
    return Object.freeze({
      cost_cap: 'COST_CAP',
      lowest_cost_without_cap: 'LOWEST_COST_WITHOUT_CAP',
    });
  }`;

  const result = parseEnumBlock(source);
  expect(result).toEqual({
    cost_cap: "COST_CAP",
    lowest_cost_without_cap: "LOWEST_COST_WITHOUT_CAP",
  });
});

test("extractEnumsFromSource extracts all enums from a class source", () => {
  const source = `
export default class Campaign extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      id: 'id',
      name: 'name',
    });
  }
  static get BidStrategy (): Object {
    return Object.freeze({
      cost_cap: 'COST_CAP',
      lowest_cost_without_cap: 'LOWEST_COST_WITHOUT_CAP',
    });
  }
  static get Status (): Object {
    return Object.freeze({
      active: 'ACTIVE',
      paused: 'PAUSED',
    });
  }
}`;

  const enums = extractEnumsFromSource("Campaign", source);

  // Fields should be excluded — it's not an enum
  expect(enums.has("Campaign_BidStrategy")).toBe(true);
  expect(enums.has("Campaign_Status")).toBe(true);
  expect(enums.has("Campaign_Fields")).toBe(false);

  expect(enums.get("Campaign_BidStrategy")).toEqual(["COST_CAP", "LOWEST_COST_WITHOUT_CAP"]);
  expect(enums.get("Campaign_Status")).toEqual(["ACTIVE", "PAUSED"]);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bun test tests/codegen/enum-extractor.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 3: Write the implementation**

```ts
// src/codegen/enum-extractor.ts
import { readdir } from "node:fs/promises";
import { join, basename } from "node:path";

export type EnumMap = Map<string, string[]>;

/**
 * Parse a single Object.freeze({...}) block and extract key-value pairs.
 * Returns a map of key -> value string.
 */
export function parseEnumBlock(source: string): Record<string, string> {
  const result: Record<string, string> = {};
  // Match key: 'VALUE' patterns
  const regex = /(\w+)\s*:\s*'([^']+)'/g;
  let match;
  while ((match = regex.exec(source)) !== null) {
    result[match[1]!] = match[2]!;
  }
  return result;
}

/**
 * Extract all enum definitions from a single generated JS class source.
 * Skips "Fields" which is not an enum.
 * Returns Map<"ClassName_EnumName", string[]> (values only).
 */
export function extractEnumsFromSource(className: string, source: string): EnumMap {
  const enums: EnumMap = new Map();

  // Match: static get EnumName (): Object { return Object.freeze({ ... }); }
  const regex = /static\s+get\s+(\w+)\s*\(\)\s*:\s*Object\s*\{[^}]*return\s+Object\.freeze\(\{([^}]*)\}\)/gs;
  let match;

  while ((match = regex.exec(source)) !== null) {
    const enumName = match[1]!;
    const body = match[2]!;

    // Skip Fields — it's the field name mapping, not an enum
    if (enumName === "Fields") continue;

    const pairs = parseEnumBlock(body);
    const values = Object.values(pairs);
    if (values.length > 0) {
      enums.set(`${className}_${enumName}`, values);
    }
  }

  return enums;
}

/**
 * Scan all generated JS files from the Node SDK and extract all enum definitions.
 * Returns a merged Map of all enums across all objects.
 */
export async function extractAllEnums(nodeSdkObjectsDir: string): Promise<EnumMap> {
  const allEnums: EnumMap = new Map();
  const files = await readdir(nodeSdkObjectsDir);

  for (const file of files) {
    if (!file.endsWith(".js")) continue;

    const content = await Bun.file(join(nodeSdkObjectsDir, file)).text();

    // Extract class name from "export default class X extends"
    const classMatch = content.match(/export\s+default\s+class\s+(\w+)\s+extends/);
    if (!classMatch) continue;

    const className = classMatch[1]!;
    const enums = extractEnumsFromSource(className, content);

    for (const [key, values] of enums) {
      allEnums.set(key, values);
    }
  }

  return allEnums;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `bun test tests/codegen/enum-extractor.test.ts`
Expected: 2 tests PASS.

- [ ] **Step 5: Commit**

```bash
git add src/codegen/enum-extractor.ts tests/codegen/enum-extractor.test.ts
git commit -m "feat: add enum extractor for scraping enum values from Node SDK"
```

---

### Task 9: Codegen — Dependency Graph and Circular Import Detection

**Files:**
- Create: `src/codegen/dep-graph.ts`
- Create: `tests/codegen/dep-graph.test.ts`

- [ ] **Step 1: Write the failing test**

```ts
// tests/codegen/dep-graph.test.ts
import { test, expect } from "bun:test";
import { buildDepGraph, findCycles, type DepGraph } from "../../src/codegen/dep-graph.ts";
import type { Spec } from "../../src/codegen/parser.ts";

function makeSpec(name: string, fieldTypes: string[], apiReturnTypes: string[]): Spec {
  return {
    name,
    fields: fieldTypes.map((t, i) => ({ name: `field_${i}`, type: t })),
    apis: apiReturnTypes.map((r, i) => ({
      method: "GET" as const,
      endpoint: `edge_${i}`,
      return: r,
      params: [],
    })),
  };
}

test("buildDepGraph identifies object references from fields and api returns", () => {
  const specs = new Map<string, Spec>([
    ["Campaign", makeSpec("Campaign", ["string", "AdSet"], ["Ad"])],
    ["AdSet", makeSpec("AdSet", ["string"], ["Campaign"])],
    ["Ad", makeSpec("Ad", ["string"], [])],
  ]);

  const graph = buildDepGraph(specs);

  expect(graph.get("Campaign")).toContain("AdSet");
  expect(graph.get("Campaign")).toContain("Ad");
  expect(graph.get("AdSet")).toContain("Campaign");
  expect(graph.get("Ad")?.size ?? 0).toBe(0);
});

test("buildDepGraph tracks dependencies through list<X> types", () => {
  const specs = new Map<string, Spec>([
    ["Campaign", makeSpec("Campaign", ["list<AdLabel>"], [])],
    ["AdLabel", makeSpec("AdLabel", [], [])],
  ]);

  const graph = buildDepGraph(specs);
  expect(graph.get("Campaign")).toContain("AdLabel");
});

test("findCycles detects circular dependencies", () => {
  const graph: DepGraph = new Map([
    ["A", new Set(["B"])],
    ["B", new Set(["C"])],
    ["C", new Set(["A"])],
    ["D", new Set(["E"])],
    ["E", new Set()],
  ]);

  const cycles = findCycles(graph);

  // A, B, C form a cycle
  expect(cycles.size).toBeGreaterThan(0);
  expect(cycles.has("A")).toBe(true);
  expect(cycles.has("B")).toBe(true);
  expect(cycles.has("C")).toBe(true);
  expect(cycles.has("D")).toBe(false);
  expect(cycles.has("E")).toBe(false);
});

test("findCycles returns empty set when no cycles", () => {
  const graph: DepGraph = new Map([
    ["A", new Set(["B"])],
    ["B", new Set(["C"])],
    ["C", new Set()],
  ]);

  const cycles = findCycles(graph);
  expect(cycles.size).toBe(0);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bun test tests/codegen/dep-graph.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 3: Write the implementation**

```ts
// src/codegen/dep-graph.ts
import type { Spec } from "./parser.ts";
import { parseGenericType } from "./type-resolver.ts";

export type DepGraph = Map<string, Set<string>>;

/**
 * Extract all object name references from a type string.
 * Recursively unwraps list<X> and map<K, V>.
 */
function extractObjectRefs(typeStr: string, knownObjects: Set<string>): string[] {
  const refs: string[] = [];

  const generic = parseGenericType(typeStr);
  if (generic) {
    for (const inner of generic.inner) {
      refs.push(...extractObjectRefs(inner, knownObjects));
    }
    return refs;
  }

  // Check if this type is a known object name
  if (knownObjects.has(typeStr)) {
    refs.push(typeStr);
  }

  return refs;
}

/**
 * Build a dependency graph from specs.
 * An edge A -> B means object A references object B (via field types or API return types).
 */
export function buildDepGraph(specs: Map<string, Spec>): DepGraph {
  const knownObjects = new Set(specs.keys());
  const graph: DepGraph = new Map();

  for (const [name, spec] of specs) {
    const deps = new Set<string>();

    // Fields reference types
    for (const field of spec.fields) {
      for (const ref of extractObjectRefs(field.type, knownObjects)) {
        if (ref !== name) deps.add(ref); // skip self-references
      }
    }

    // API return types reference objects
    for (const api of spec.apis) {
      if (api.return && knownObjects.has(api.return) && api.return !== name) {
        deps.add(api.return);
      }
      // Param types can reference objects too
      for (const param of api.params) {
        for (const ref of extractObjectRefs(param.type, knownObjects)) {
          if (ref !== name) deps.add(ref);
        }
      }
    }

    graph.set(name, deps);
  }

  return graph;
}

/**
 * Find all nodes that participate in cycles using Tarjan's SCC algorithm.
 * Returns the set of node names that are in a cycle (SCC of size > 1).
 */
export function findCycles(graph: DepGraph): Set<string> {
  const cycleNodes = new Set<string>();

  let index = 0;
  const nodeIndex = new Map<string, number>();
  const nodeLowlink = new Map<string, number>();
  const onStack = new Set<string>();
  const stack: string[] = [];

  function strongconnect(v: string) {
    nodeIndex.set(v, index);
    nodeLowlink.set(v, index);
    index++;
    stack.push(v);
    onStack.add(v);

    const deps = graph.get(v) ?? new Set();
    for (const w of deps) {
      if (!nodeIndex.has(w)) {
        strongconnect(w);
        nodeLowlink.set(v, Math.min(nodeLowlink.get(v)!, nodeLowlink.get(w)!));
      } else if (onStack.has(w)) {
        nodeLowlink.set(v, Math.min(nodeLowlink.get(v)!, nodeIndex.get(w)!));
      }
    }

    // Root of SCC
    if (nodeLowlink.get(v) === nodeIndex.get(v)) {
      const scc: string[] = [];
      let w: string;
      do {
        w = stack.pop()!;
        onStack.delete(w);
        scc.push(w);
      } while (w !== v);

      // Only mark as cyclic if SCC has more than 1 node
      if (scc.length > 1) {
        for (const node of scc) {
          cycleNodes.add(node);
        }
      }
    }
  }

  for (const v of graph.keys()) {
    if (!nodeIndex.has(v)) {
      strongconnect(v);
    }
  }

  return cycleNodes;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `bun test tests/codegen/dep-graph.test.ts`
Expected: 4 tests PASS.

- [ ] **Step 5: Commit**

```bash
git add src/codegen/dep-graph.ts tests/codegen/dep-graph.test.ts
git commit -m "feat: add dependency graph builder with Tarjan cycle detection"
```

---

### Task 10: Codegen — TypeScript Emitter

**Files:**
- Create: `src/codegen/emitter.ts`
- Create: `tests/codegen/emitter.test.ts`

This is the largest task. The emitter takes a parsed+patched spec and produces a `.ts` file string.

- [ ] **Step 1: Write the failing test**

```ts
// tests/codegen/emitter.test.ts
import { test, expect } from "bun:test";
import {
  emitFieldsInterface,
  emitEnumType,
  emitParamsInterface,
  emitNodeFactory,
  specNameToFileName,
  specNameToFieldsType,
  endpointToMethodName,
} from "../../src/codegen/emitter.ts";

test("specNameToFileName converts PascalCase to kebab-case", () => {
  expect(specNameToFileName("Campaign")).toBe("campaign");
  expect(specNameToFileName("AdAccount")).toBe("ad-account");
  expect(specNameToFileName("AdsInsights")).toBe("ads-insights");
  expect(specNameToFileName("AdCampaignGroupAdvantageState")).toBe("ad-campaign-group-advantage-state");
});

test("specNameToFieldsType converts spec name to interface name", () => {
  expect(specNameToFieldsType("Campaign")).toBe("CampaignFields");
  expect(specNameToFieldsType("AdSet")).toBe("AdSetFields");
});

test("endpointToMethodName converts endpoint to camelCase method name", () => {
  expect(endpointToMethodName("GET", "campaigns")).toBe("campaigns");
  expect(endpointToMethodName("POST", "campaigns")).toBe("createCampaign");
  expect(endpointToMethodName("DELETE", "campaigns")).toBe("deleteCampaigns");
  expect(endpointToMethodName("GET", "ad_studies")).toBe("adStudies");
  expect(endpointToMethodName("POST", "ad_place_page_sets")).toBe("createAdPlacePageSet");
  expect(endpointToMethodName("GET", "adrules_governed")).toBe("adrulesGoverned");
});

test("emitEnumType generates string union type", () => {
  const result = emitEnumType("CampaignBidStrategy", ["COST_CAP", "LOWEST_COST_WITHOUT_CAP"]);
  expect(result).toContain('export type CampaignBidStrategy = "COST_CAP" | "LOWEST_COST_WITHOUT_CAP"');
});

test("emitFieldsInterface generates interface with typed fields", () => {
  const result = emitFieldsInterface("Campaign", [
    { name: "id", resolvedType: "string" },
    { name: "name", resolvedType: "string" },
    { name: "bid_strategy", resolvedType: "CampaignBidStrategy" },
    { name: "adlabels", resolvedType: "AdLabelFields[]" },
    { name: "1d_click", resolvedType: "string" },
  ]);

  expect(result).toContain("export interface CampaignFields {");
  expect(result).toContain("  id: string;");
  expect(result).toContain("  name: string;");
  expect(result).toContain("  bid_strategy: CampaignBidStrategy;");
  expect(result).toContain("  adlabels: AdLabelFields[];");
  expect(result).toContain('  "1d_click": string;');
  expect(result).toContain("}");
});

test("emitParamsInterface generates interface with required/optional params", () => {
  const result = emitParamsInterface("CampaignCreateParams", [
    { name: "name", resolvedType: "string", required: true },
    { name: "objective", resolvedType: "CampaignObjective", required: true },
    { name: "status", resolvedType: "CampaignStatus", required: false },
    { name: "daily_budget", resolvedType: "number", required: false },
  ]);

  expect(result).toContain("export interface CampaignCreateParams {");
  expect(result).toContain("  name: string;");
  expect(result).toContain("  objective: CampaignObjective;");
  expect(result).toContain("  status?: CampaignStatus;");
  expect(result).toContain("  daily_budget?: number;");
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bun test tests/codegen/emitter.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 3: Write the implementation**

```ts
// src/codegen/emitter.ts
import type { Spec, SpecApi, SpecField, SpecParam } from "./parser.ts";
import { resolveType, type TypeResolverContext } from "./type-resolver.ts";

// --- Naming Helpers ---

export function specNameToFileName(name: string): string {
  // Insert hyphens before uppercase letters, then lowercase
  return name
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
}

export function specNameToFieldsType(name: string): string {
  return `${name}Fields`;
}

function isValidIdentifier(name: string): boolean {
  return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name);
}

function singularize(word: string): string {
  if (word.endsWith("ies")) return word.slice(0, -3) + "y";
  if (word.endsWith("ses")) return word.slice(0, -2);
  if (word.endsWith("s") && !word.endsWith("ss")) return word.slice(0, -1);
  return word;
}

function snakeToCamel(str: string): string {
  return str.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
}

export function endpointToMethodName(method: string, endpoint: string): string {
  const camel = snakeToCamel(endpoint);

  switch (method) {
    case "GET":
      return camel;
    case "POST":
      return `create${singularize(camel.charAt(0).toUpperCase() + camel.slice(1))}`;
    case "DELETE":
      return `delete${camel.charAt(0).toUpperCase() + camel.slice(1)}`;
    default:
      return camel;
  }
}

// --- Emit Helpers ---

export function emitEnumType(name: string, values: string[]): string {
  const valueStr = values.map((v) => `"${v}"`).join(" | ");
  return `export type ${name} = ${valueStr};\n`;
}

interface ResolvedField {
  name: string;
  resolvedType: string;
}

export function emitFieldsInterface(objectName: string, fields: ResolvedField[]): string {
  const lines: string[] = [];
  lines.push(`export interface ${objectName}Fields {`);
  for (const field of fields) {
    const key = isValidIdentifier(field.name) ? field.name : `"${field.name}"`;
    lines.push(`  ${key}: ${field.resolvedType};`);
  }
  lines.push("}");
  return lines.join("\n") + "\n";
}

interface ResolvedParam {
  name: string;
  resolvedType: string;
  required: boolean;
}

export function emitParamsInterface(name: string, params: ResolvedParam[]): string {
  const lines: string[] = [];
  lines.push(`export interface ${name} {`);
  for (const param of params) {
    const key = isValidIdentifier(param.name) ? param.name : `"${param.name}"`;
    const optional = param.required ? "" : "?";
    lines.push(`  ${key}${optional}: ${param.resolvedType};`);
  }
  lines.push("}");
  return lines.join("\n") + "\n";
}

// --- Full Object File Emitter ---

export interface EmitContext {
  spec: Spec;
  typeCtx: TypeResolverContext;
  cycleNodes: Set<string>;
  allSpecs: Map<string, Spec>;
}

export function emitObjectFile(ctx: EmitContext): string {
  const { spec, typeCtx, cycleNodes } = ctx;
  const lines: string[] = [];
  const imports = new Map<string, Set<string>>(); // file -> set of named imports
  const typeImports = new Map<string, Set<string>>(); // file -> set of type-only imports

  function addImport(file: string, name: string, typeOnly: boolean) {
    const map = typeOnly ? typeImports : imports;
    if (!map.has(file)) map.set(file, new Set());
    map.get(file)!.add(name);
  }

  // Track which object types are referenced
  const referencedObjects = new Set<string>();
  const referencedEnums = new Set<string>();

  // Resolve fields
  const resolvedFields: ResolvedField[] = [];
  for (const field of spec.fields) {
    if (field.not_visible) continue;
    const resolved = resolveType(field.type, typeCtx);
    resolvedFields.push({ name: field.name, resolvedType: resolved });

    // Track references
    collectTypeRefs(field.type, typeCtx, referencedObjects, referencedEnums);
  }

  // Categorize APIs
  const nodeApis: SpecApi[] = [];
  const getEdges: SpecApi[] = [];
  const postEdges: SpecApi[] = [];
  const deleteEdges: SpecApi[] = [];

  for (const api of spec.apis) {
    if (api.name?.startsWith("#")) {
      nodeApis.push(api);
    } else if (api.method === "GET") {
      getEdges.push(api);
    } else if (api.method === "POST") {
      postEdges.push(api);
    } else if (api.method === "DELETE") {
      deleteEdges.push(api);
    }
  }

  // Resolve params and collect references
  const paramInterfaces: string[] = [];
  const edgeParamMap = new Map<string, string>(); // "GET:endpoint" -> "ParamsInterfaceName"

  for (const api of [...getEdges, ...postEdges, ...deleteEdges]) {
    if (api.params.length === 0) continue;

    const endpoint = api.endpoint!;
    const methodPrefix = api.method === "GET" ? "List" : api.method === "POST" ? "Create" : "Delete";
    const endpointPascal = snakeToCamel(endpoint).charAt(0).toUpperCase() + snakeToCamel(endpoint).slice(1);
    const paramsName = `${spec.name}${methodPrefix}${endpointPascal}Params`;

    const resolvedParams: ResolvedParam[] = api.params.map((p) => {
      collectTypeRefs(p.type, typeCtx, referencedObjects, referencedEnums);
      return {
        name: p.name,
        resolvedType: resolveType(p.type, typeCtx),
        required: p.required,
      };
    });

    paramInterfaces.push(emitParamsInterface(paramsName, resolvedParams));
    edgeParamMap.set(`${api.method}:${endpoint}`, paramsName);
  }

  // Node update params
  const updateApi = nodeApis.find((a) => a.name === "#update");
  let updateParamsName: string | undefined;
  if (updateApi && updateApi.params.length > 0) {
    updateParamsName = `${spec.name}UpdateParams`;
    const resolvedParams: ResolvedParam[] = updateApi.params.map((p) => {
      collectTypeRefs(p.type, typeCtx, referencedObjects, referencedEnums);
      return {
        name: p.name,
        resolvedType: resolveType(p.type, typeCtx),
        required: false, // update params are always optional
      };
    });
    paramInterfaces.push(emitParamsInterface(updateParamsName, resolvedParams));
  }

  // Build imports
  addImport("../../runtime/client.ts", "ApiClient", true);

  const hasGetEdges = getEdges.length > 0;
  if (hasGetEdges) {
    addImport("../../runtime/cursor.ts", "Cursor", false);
  }

  // Object type imports
  for (const ref of referencedObjects) {
    if (ref === spec.name) continue;
    const fileName = specNameToFileName(ref);
    const isCircular = cycleNodes.has(spec.name) && cycleNodes.has(ref);
    addImport(`./${fileName}.ts`, `${ref}Fields`, true); // always type-only
  }

  // Emit imports
  for (const [file, names] of typeImports) {
    const sortedNames = [...names].sort();
    lines.push(`import type { ${sortedNames.join(", ")} } from "${file}";`);
  }
  for (const [file, names] of imports) {
    const sortedNames = [...names].sort();
    lines.push(`import { ${sortedNames.join(", ")} } from "${file}";`);
  }

  if (lines.length > 0) lines.push("");

  // Emit fields interface
  lines.push(emitFieldsInterface(spec.name, resolvedFields));

  // Emit params interfaces
  for (const pi of paramInterfaces) {
    lines.push(pi);
  }

  // Emit node factory (only if object has APIs)
  if (spec.apis.length > 0) {
    lines.push(emitNodeFactory({
      spec,
      getEdges,
      postEdges,
      deleteEdges,
      nodeApis,
      edgeParamMap,
      updateParamsName,
      cycleNodes,
      typeCtx,
    }));
  }

  return lines.join("\n");
}

interface NodeFactoryCtx {
  spec: Spec;
  getEdges: SpecApi[];
  postEdges: SpecApi[];
  deleteEdges: SpecApi[];
  nodeApis: SpecApi[];
  edgeParamMap: Map<string, string>;
  updateParamsName?: string;
  cycleNodes: Set<string>;
  typeCtx: TypeResolverContext;
}

export function emitNodeFactory(ctx: NodeFactoryCtx): string {
  const { spec, getEdges, postEdges, deleteEdges, nodeApis, edgeParamMap, updateParamsName } = ctx;
  const factoryName = spec.name.charAt(0).toLowerCase() + spec.name.slice(1) + "Node";
  const lines: string[] = [];

  lines.push(`export function ${factoryName}(client: ApiClient, id: string) {`);
  lines.push("  return {");

  // Self operations
  const hasGet = nodeApis.some((a) => a.name === "#get");
  const hasUpdate = nodeApis.some((a) => a.name === "#update");
  const hasDelete = nodeApis.some((a) => a.name === "#delete");

  if (hasGet) {
    lines.push(`    get: <F extends (keyof ${spec.name}Fields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>`);
    lines.push(`      client.get<Pick<${spec.name}Fields, F[number]>>(\`\${id}\`, opts),`);
  }

  if (hasUpdate) {
    const paramType = updateParamsName ?? "Record<string, unknown>";
    lines.push(`    update: (params: ${paramType}) =>`);
    lines.push(`      client.post<${spec.name}Fields>(\`\${id}\`, params),`);
  }

  if (hasDelete) {
    lines.push("    delete: () =>");
    lines.push("      client.delete(`${id}`),");
  }

  // Edge accessors — group GET and POST edges by endpoint
  const edgeEndpoints = new Set<string>();
  for (const api of [...getEdges, ...postEdges, ...deleteEdges]) {
    if (api.endpoint) edgeEndpoints.add(api.endpoint);
  }

  for (const endpoint of edgeEndpoints) {
    const getApi = getEdges.find((a) => a.endpoint === endpoint);
    const postApi = postEdges.find((a) => a.endpoint === endpoint);
    const deleteApi = deleteEdges.find((a) => a.endpoint === endpoint);

    const edgeName = snakeToCamel(endpoint);
    lines.push(`    ${edgeName}: {`);

    if (getApi) {
      const returnType = getApi.return && getApi.return !== "Object"
        ? `${getApi.return}Fields`
        : "Record<string, unknown>";
      const listParamsName = edgeParamMap.get(`GET:${endpoint}`);
      const paramsType = listParamsName ?? "Record<string, unknown>";

      lines.push(`      list: <F extends (keyof ${returnType})[]>(opts: { fields: F; params?: ${paramsType} }) =>`);
      lines.push(`        new Cursor<Pick<${returnType}, F[number]>>(client, \`\${id}/${endpoint}\`, opts),`);
    }

    if (postApi) {
      const returnType = postApi.return && postApi.return !== "Object"
        ? `${postApi.return}Fields`
        : "Record<string, unknown>";
      const createParamsName = edgeParamMap.get(`POST:${endpoint}`);
      const paramsType = createParamsName ?? "Record<string, unknown>";

      lines.push(`      create: (params: ${paramsType}) =>`);
      lines.push(`        client.post<${returnType}>(\`\${id}/${endpoint}\`, params),`);
    }

    if (deleteApi) {
      const deleteParamsName = edgeParamMap.get(`DELETE:${endpoint}`);
      const paramsType = deleteParamsName ?? "Record<string, unknown>";

      lines.push(`      delete: (params?: ${paramsType}) =>`);
      lines.push(`        client.delete(\`\${id}/${endpoint}\`, params),`);
    }

    lines.push("    },");
  }

  lines.push("  };");
  lines.push("}");

  return lines.join("\n") + "\n";
}

// --- Helpers ---

function collectTypeRefs(
  typeStr: string,
  ctx: TypeResolverContext,
  objects: Set<string>,
  enums: Set<string>,
): void {
  const { parseGenericType } = require("./type-resolver.ts");
  const generic = parseGenericType(typeStr);

  if (generic) {
    for (const inner of generic.inner) {
      collectTypeRefs(inner, ctx, objects, enums);
    }
    return;
  }

  if (ctx.knownObjects.has(typeStr)) objects.add(typeStr);
  if (ctx.knownEnums.has(typeStr)) enums.add(typeStr);
}

function snakeToCamel(str: string): string {
  return str.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `bun test tests/codegen/emitter.test.ts`
Expected: 6 tests PASS.

- [ ] **Step 5: Commit**

```bash
git add src/codegen/emitter.ts tests/codegen/emitter.test.ts
git commit -m "feat: add TypeScript emitter for objects, fields, params, and node factories"
```

---

### Task 11: Codegen — Orchestrator

**Files:**
- Create: `src/codegen/index.ts`
- Create: `tests/codegen/integration.test.ts`

- [ ] **Step 1: Write the failing integration test**

```ts
// tests/codegen/integration.test.ts
import { test, expect } from "bun:test";
import { runCodegen } from "../../src/codegen/index.ts";
import { existsSync } from "node:fs";

test("runCodegen generates Campaign object file", async () => {
  await runCodegen({
    specsDir: "api_specs/api_specs/specs",
    sdkCodegenPath: "api_specs/api_specs/SDKCodegen.json",
    outputDir: "src/generated",
    // Skip enum scraping for test — use empty enums
    enumSourceDir: undefined,
  });

  expect(existsSync("src/generated/objects/campaign.ts")).toBe(true);
  expect(existsSync("src/generated/index.ts")).toBe(true);

  // Read and validate the generated Campaign file
  const content = await Bun.file("src/generated/objects/campaign.ts").text();
  expect(content).toContain("export interface CampaignFields");
  expect(content).toContain("id: string");
  expect(content).toContain("name: string");
  expect(content).toContain("campaignNode");
});

test("runCodegen generates pure data objects (no node factory)", async () => {
  await runCodegen({
    specsDir: "api_specs/api_specs/specs",
    sdkCodegenPath: "api_specs/api_specs/SDKCodegen.json",
    outputDir: "src/generated",
    enumSourceDir: undefined,
  });

  const content = await Bun.file("src/generated/objects/ads-insights.ts").text();
  expect(content).toContain("export interface AdsInsightsFields");
  // Should NOT have a node factory since AdsInsights has no APIs
  expect(content).not.toContain("adsInsightsNode");
});

test("runCodegen generates barrel export index.ts", async () => {
  await runCodegen({
    specsDir: "api_specs/api_specs/specs",
    sdkCodegenPath: "api_specs/api_specs/SDKCodegen.json",
    outputDir: "src/generated",
    enumSourceDir: undefined,
  });

  const content = await Bun.file("src/generated/index.ts").text();
  expect(content).toContain("campaign");
  expect(content).toContain("ad-account");
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bun test tests/codegen/integration.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 3: Write the implementation**

```ts
// src/codegen/index.ts
import { mkdir, rm } from "node:fs/promises";
import { join } from "node:path";
import { parseSpecs, applyPatches } from "./parser.ts";
import { resolveType, type TypeResolverContext } from "./type-resolver.ts";
import { extractAllEnums, type EnumMap } from "./enum-extractor.ts";
import { buildDepGraph, findCycles } from "./dep-graph.ts";
import { emitObjectFile, emitEnumType, specNameToFileName, specNameToFieldsType } from "./emitter.ts";

export interface CodegenOptions {
  specsDir: string;
  sdkCodegenPath: string;
  outputDir: string;
  enumSourceDir?: string; // Path to Node SDK's src/objects/ for enum scraping
}

export async function runCodegen(opts: CodegenOptions): Promise<void> {
  console.log("Parsing specs...");
  let specs = await parseSpecs(opts.specsDir);
  console.log(`  Loaded ${specs.size} specs`);

  console.log("Applying SDKCodegen.json patches...");
  specs = await applyPatches(specs, opts.sdkCodegenPath);

  // Extract or load enums
  let enumMap: EnumMap = new Map();
  if (opts.enumSourceDir) {
    console.log("Extracting enums from Node SDK...");
    enumMap = await extractAllEnums(opts.enumSourceDir);
    console.log(`  Found ${enumMap.size} enum types`);
  }

  // Build known sets for type resolution
  const knownObjects = new Set(specs.keys());
  const knownEnums = new Set(enumMap.keys());

  // Also add enum types referenced in fields (pattern: ObjectName_field_name)
  for (const [, spec] of specs) {
    for (const field of spec.fields) {
      if (field.type.match(/^[A-Z]\w+_\w+$/) && !knownObjects.has(field.type)) {
        knownEnums.add(field.type);
      }
    }
    for (const api of spec.apis) {
      for (const param of api.params) {
        if (param.type.match(/_enum_param$/) || param.type.match(/^[a-z]\w+_\w+$/)) {
          knownEnums.add(param.type);
        }
      }
    }
  }

  const typeCtx: TypeResolverContext = { knownObjects, knownEnums };

  console.log("Building dependency graph...");
  const depGraph = buildDepGraph(specs);
  const cycleNodes = findCycles(depGraph);
  console.log(`  Found ${cycleNodes.size} objects in circular dependency cycles`);

  // Create output directories
  const objectsDir = join(opts.outputDir, "objects");
  const enumsDir = join(opts.outputDir, "enums");
  await mkdir(objectsDir, { recursive: true });
  await mkdir(enumsDir, { recursive: true });

  // Emit object files
  console.log("Emitting object files...");
  let emittedCount = 0;
  const exportLines: string[] = [];

  for (const [name, spec] of specs) {
    const fileName = specNameToFileName(name);
    const content = emitObjectFile({ spec, typeCtx, cycleNodes, allSpecs: specs });
    await Bun.write(join(objectsDir, `${fileName}.ts`), content);
    emittedCount++;

    exportLines.push(`export type { ${name}Fields } from "./objects/${fileName}.ts";`);
  }

  console.log(`  Emitted ${emittedCount} object files`);

  // Emit enum files
  console.log("Emitting enum files...");
  let enumCount = 0;
  for (const [enumName, values] of enumMap) {
    const tsName = enumName
      .split("_")
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
      .join("");
    const fileName = specNameToFileName(enumName.split("_")[0]!);
    const content = emitEnumType(tsName, values);

    // Append to existing file or create new
    const filePath = join(enumsDir, `${fileName}.ts`);
    const existing = await Bun.file(filePath).text().catch(() => "");
    await Bun.write(filePath, existing + content);
    enumCount++;
  }
  console.log(`  Emitted ${enumCount} enum types`);

  // Emit barrel export
  exportLines.push("");
  exportLines.push('export { createClient } from "../runtime/index.ts";');
  exportLines.push('export type { ApiClient, ApiClientOptions } from "../runtime/client.ts";');
  exportLines.push('export { Cursor } from "../runtime/cursor.ts";');
  exportLines.push('export { FacebookApiError } from "../runtime/errors.ts";');

  await Bun.write(join(opts.outputDir, "index.ts"), exportLines.join("\n") + "\n");

  console.log("Codegen complete!");
}

// CLI entry point
if (import.meta.main) {
  await runCodegen({
    specsDir: "api_specs/api_specs/specs",
    sdkCodegenPath: "api_specs/api_specs/SDKCodegen.json",
    outputDir: "src/generated",
    enumSourceDir: undefined, // Set to Node SDK path when available
  });
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `bun test tests/codegen/integration.test.ts`
Expected: 3 tests PASS.

- [ ] **Step 5: Run the actual codegen and typecheck**

```bash
bun run codegen
bun run typecheck
```

Expected: Codegen produces ~995 files. Typecheck may have errors from unresolved enum imports — that's expected at this stage and addressed in Task 12.

- [ ] **Step 6: Commit**

```bash
git add src/codegen/index.ts tests/codegen/integration.test.ts
git commit -m "feat: add codegen orchestrator with full pipeline"
```

---

### Task 12: Codegen — Run Full Codegen, Fix Type Errors, Validate

**Files:**
- Modify: `src/codegen/emitter.ts` (fix issues found during typecheck)
- Modify: `src/codegen/type-resolver.ts` (fix edge cases)
- Modify: `src/generated/**` (regenerated output)

This is an iterative task — run codegen, run typecheck, fix emitter bugs, repeat.

- [ ] **Step 1: Run codegen**

```bash
bun run codegen
```

- [ ] **Step 2: Run typecheck and collect errors**

```bash
bun run typecheck 2>&1 | head -100
```

- [ ] **Step 3: Fix emitter issues**

Common issues to expect and fix:
1. **Duplicate `snakeToCamel` function** — the emitter has a local copy that conflicts with the import. Remove the duplicate.
2. **`require()` in emitter** — replace the `require("./type-resolver.ts")` in `collectTypeRefs` with a proper import of `parseGenericType` at the top of the file.
3. **Unresolved enum type imports** — when enum types are referenced in fields but no enum file exists (because we skipped enum scraping), the import will fail. Fix: emit enum types as `string` fallback when no enum values are available.
4. **Template literal escaping** — ensure `\`\${id}\`` generates correctly in the node factory.

Fix each issue in the emitter/resolver, re-run codegen, re-run typecheck. Repeat until `tsc --noEmit` passes with zero errors.

- [ ] **Step 4: Run typecheck with zero errors**

```bash
bun run typecheck
```

Expected: Exit code 0, no errors.

- [ ] **Step 5: Run all tests**

```bash
bun test
```

Expected: All tests pass.

- [ ] **Step 6: Commit the generated output and fixes**

```bash
git add -A
git commit -m "feat: generate full typed SDK from API specs — typecheck passes"
```

---

### Task 13: Public API — createClient with Typed Node Accessors

**Files:**
- Modify: `src/runtime/index.ts`
- Create: `src/generated/client-factory.ts`
- Create: `tests/runtime/client-factory.test.ts`

This task wires up `createClient()` to return an object with typed node accessor methods like `api.adAccount(id)`, `api.campaign(id)`, etc.

- [ ] **Step 1: Write the failing test**

```ts
// tests/runtime/client-factory.test.ts
import { test, expect, mock, afterEach } from "bun:test";

const originalFetch = globalThis.fetch;

function mockFetchJson(body: unknown) {
  globalThis.fetch = mock(() =>
    Promise.resolve(
      new Response(JSON.stringify(body), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }),
    ),
  ) as typeof fetch;
}

afterEach(() => {
  globalThis.fetch = originalFetch;
});

test("createClient returns object with adAccount accessor", async () => {
  // Dynamic import to get the generated factory
  const { createClient } = await import("../../src/generated/index.ts");
  const api = createClient({ accessToken: "test_token" });

  // Should have adAccount method
  expect(typeof api.adAccount).toBe("function");
});

test("adAccount node has campaigns edge with list method", async () => {
  mockFetchJson({
    data: [{ id: "1", name: "Test Campaign" }],
    paging: { cursors: {} },
  });

  const { createClient } = await import("../../src/generated/index.ts");
  const api = createClient({ accessToken: "test_token" });

  const acct = api.adAccount("act_123");
  expect(acct.campaigns).toBeDefined();
  expect(typeof acct.campaigns.list).toBe("function");

  // list() should return a Cursor
  const cursor = acct.campaigns.list({ fields: ["id", "name"] });
  const page = await cursor.next();
  expect(page.data).toHaveLength(1);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bun test tests/runtime/client-factory.test.ts`
Expected: FAIL — createClient doesn't have node accessors yet.

- [ ] **Step 3: Write client-factory.ts**

This file is generated by the codegen but we write it manually first to establish the pattern, then make the codegen produce it.

```ts
// src/generated/client-factory.ts
import { ApiClient, type ApiClientOptions } from "../runtime/client.ts";

// Import node factories for objects that have read_endpoints
// These imports will be generated by codegen
import { adAccountNode } from "./objects/ad-account.ts";
import { campaignNode } from "./objects/campaign.ts";
import { adNode } from "./objects/ad.ts";
import { adSetNode } from "./objects/ad-set.ts";
// ... more will be added by codegen

export function createTypedClient(opts: ApiClientOptions) {
  const client = new ApiClient(opts);

  return {
    adAccount: (id: string) => adAccountNode(client, id),
    campaign: (id: string) => campaignNode(client, id),
    ad: (id: string) => adNode(client, id),
    adSet: (id: string) => adSetNode(client, id),
    // Raw client access for advanced use
    client,
  };
}
```

- [ ] **Step 4: Update src/generated/index.ts to re-export createClient from the factory**

```ts
// src/generated/index.ts (update the createClient export)
export { createTypedClient as createClient } from "./client-factory.ts";
// ... rest of exports
```

- [ ] **Step 5: Run test to verify it passes**

Run: `bun test tests/runtime/client-factory.test.ts`
Expected: 2 tests PASS.

- [ ] **Step 6: Update codegen to auto-generate client-factory.ts**

Add to `src/codegen/index.ts` — after emitting object files, emit `client-factory.ts` using the `read_endpoints` mapping from SDKCodegen.json.

- [ ] **Step 7: Run all tests**

Run: `bun test`
Expected: All tests pass.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat: add createClient with typed node accessors for all API objects"
```

---

### Task 14: End-to-End Validation — Type Safety Smoke Test

**Files:**
- Create: `tests/e2e/type-safety.test.ts`

This test doesn't hit the real API — it validates that the TypeScript type system works as designed.

- [ ] **Step 1: Write the type safety test**

```ts
// tests/e2e/type-safety.test.ts
import { test, expect, mock, afterEach } from "bun:test";
import { createClient } from "../../src/generated/index.ts";

const originalFetch = globalThis.fetch;

function mockFetchJson(body: unknown) {
  globalThis.fetch = mock(() =>
    Promise.resolve(
      new Response(JSON.stringify(body), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }),
    ),
  ) as typeof fetch;
}

afterEach(() => {
  globalThis.fetch = originalFetch;
});

test("field selection narrows return type via Pick<>", async () => {
  mockFetchJson({ id: "123", name: "Test" });

  const api = createClient({ accessToken: "tok" });
  const result = await api.adAccount("act_123").get({
    fields: ["id", "name"],
  });

  // These should compile — they're in the requested fields
  expect(result.id).toBe("123");
  expect(result.name).toBe("Test");

  // This is the runtime check — at compile time, accessing a field not in
  // the fields array would be a TS error (can't test that at runtime, but
  // the typecheck in Task 12 validates it)
});

test("cursor async iteration works with typed results", async () => {
  mockFetchJson({
    data: [
      { id: "1", name: "Campaign A" },
      { id: "2", name: "Campaign B" },
    ],
    paging: { cursors: {} },
  });

  const api = createClient({ accessToken: "tok" });
  const items: { id: string; name: string }[] = [];

  for await (const campaign of api.adAccount("act_123").campaigns.list({
    fields: ["id", "name"],
  })) {
    items.push({ id: campaign.id, name: campaign.name });
  }

  expect(items).toHaveLength(2);
  expect(items[0]!.name).toBe("Campaign A");
});

test("create edge sends POST with params", async () => {
  mockFetchJson({ id: "new_campaign_123" });

  const api = createClient({ accessToken: "tok" });
  const result = await api.adAccount("act_123").campaigns.create({
    name: "New Campaign",
    objective: "OUTCOME_SALES",
    special_ad_categories: [],
  });

  expect(result).toBeDefined();

  // Verify POST was called
  const [url, init] = (globalThis.fetch as ReturnType<typeof mock>).mock.calls[0] as [string, RequestInit];
  expect(url).toContain("act_123/campaigns");
  expect(init.method).toBe("POST");
});

test("delete operation works", async () => {
  mockFetchJson({ success: true });

  const api = createClient({ accessToken: "tok" });
  await api.campaign("123456").delete();

  const [url, init] = (globalThis.fetch as ReturnType<typeof mock>).mock.calls[0] as [string, RequestInit];
  expect(url).toContain("123456");
  expect(init.method).toBe("DELETE");
});
```

- [ ] **Step 2: Run the test**

Run: `bun test tests/e2e/type-safety.test.ts`
Expected: 4 tests PASS.

- [ ] **Step 3: Run full test suite**

Run: `bun test`
Expected: All tests pass.

- [ ] **Step 4: Run typecheck one final time**

Run: `bun run typecheck`
Expected: Exit code 0.

- [ ] **Step 5: Commit**

```bash
git add tests/e2e/type-safety.test.ts
git commit -m "feat: add end-to-end type safety smoke tests"
```

---

### Task 15: Documentation — Update CLAUDE.md and README.md

**Files:**
- Modify: `CLAUDE.md`
- Modify: `README.md`

- [ ] **Step 1: Update CLAUDE.md**

Replace with project-specific codegen instructions:

```markdown
# Meta Business SDK TypeScript

Type-safe TypeScript SDK for the Meta Marketing API, generated from official API specs.

## Quick Reference

- `bun run codegen` — regenerate SDK from API specs
- `bun run typecheck` — run `tsc --noEmit` to validate types
- `bun test` — run all tests
- `bun run build` — build for publishing

## Project Structure

- `api_specs/` — git submodule with API spec JSONs (don't edit directly)
- `src/codegen/` — the code generator (dev-only, not published)
- `src/runtime/` — fetch-based API client, cursor, errors (published)
- `src/generated/` — output of codegen (published, don't edit manually)
- `tests/` — tests for codegen and runtime

## Codegen Pipeline

1. `parser.ts` — reads spec JSONs, applies SDKCodegen.json patches
2. `type-resolver.ts` — maps spec types to TypeScript types
3. `enum-extractor.ts` — scrapes enum values from Node SDK
4. `dep-graph.ts` — detects circular imports
5. `emitter.ts` — generates .ts files as strings
6. `index.ts` — orchestrates the pipeline

## Conventions

- Use Bun for everything (see below)
- Generated files go in `src/generated/` — never edit by hand
- All runtime code must work with native `fetch` (no axios, node-fetch)
- Enums are string union types, not objects or TS enums
- Circular imports resolved via `import type` (type-only) for type references

## Bun

- Use `bun <file>` instead of `node <file>`
- Use `bun test` instead of jest/vitest
- Use `bun install` instead of npm/yarn/pnpm install
- Bun automatically loads .env
```

- [ ] **Step 2: Update README.md**

Write comprehensive README with: overview, installation, usage examples (createClient, list with for-await, create, update, delete, manual pagination), development setup, codegen instructions, contributing notes.

- [ ] **Step 3: Commit**

```bash
git add CLAUDE.md README.md
git commit -m "docs: update CLAUDE.md and README.md for codegen project"
```
