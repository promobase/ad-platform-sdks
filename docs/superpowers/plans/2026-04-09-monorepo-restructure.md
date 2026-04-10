# Monorepo Restructure Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure the single-package `meta-business-sdk-ts` repo into a Bun workspaces monorepo (`ad-platform-sdks`) with a shared private `sdk-runtime` package and the Meta SDK as the first workspace package.

**Architecture:** Root workspace with `packages/sdk-runtime/` (private, generic fetch client + pluggable cursor + base error) and `packages/meta-business-sdk/` (published, Meta-specific codegen + generated objects + FacebookApiError). The codegen emitter is updated to import from `@promobase/sdk-runtime` instead of relative `../../runtime/` paths.

**Tech Stack:** Bun workspaces, TypeScript strict mode, native fetch

---

### Task 1: Create Root Workspace Structure

**Files:**
- Modify: `package.json` (replace with workspace root)
- Create: `tsconfig.base.json`
- Modify: `.gitignore`

- [ ] **Step 1: Update root package.json to workspace root**

Replace the entire `package.json` with:

```json
{
  "name": "ad-platform-sdks",
  "private": true,
  "workspaces": ["packages/*"],
  "scripts": {
    "test": "bun test packages/*/tests/",
    "typecheck": "tsc --build packages/*/tsconfig.json"
  }
}
```

- [ ] **Step 2: Create tsconfig.base.json**

```json
{
  "compilerOptions": {
    "lib": ["ESNext"],
    "types": ["bun-types"],
    "target": "ESNext",
    "module": "Preserve",
    "moduleDetection": "force",
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
  }
}
```

- [ ] **Step 3: Update .gitignore**

```
node_modules/
dist/
*.tsbuildinfo
.env
```

- [ ] **Step 4: Create packages directory**

```bash
mkdir -p packages
```

- [ ] **Step 5: Commit**

```bash
git add package.json tsconfig.base.json .gitignore
git commit -m "chore: convert to Bun workspaces monorepo root"
```

---

### Task 2: Create sdk-runtime Package

**Files:**
- Create: `packages/sdk-runtime/package.json`
- Create: `packages/sdk-runtime/tsconfig.json`
- Create: `packages/sdk-runtime/src/errors.ts`
- Create: `packages/sdk-runtime/src/client.ts`
- Create: `packages/sdk-runtime/src/cursor.ts`
- Create: `packages/sdk-runtime/src/types.ts`
- Create: `packages/sdk-runtime/src/index.ts`
- Create: `packages/sdk-runtime/tests/errors.test.ts`
- Create: `packages/sdk-runtime/tests/client.test.ts`
- Create: `packages/sdk-runtime/tests/cursor.test.ts`

- [ ] **Step 1: Create package.json**

```json
{
  "name": "@promobase/sdk-runtime",
  "version": "0.1.0",
  "private": true,
  "module": "src/index.ts",
  "main": "src/index.ts",
  "types": "src/index.ts",
  "type": "module",
  "scripts": {
    "test": "bun test tests/",
    "typecheck": "tsc --noEmit"
  },
  "devDependencies": {
    "@types/bun": "latest"
  },
  "peerDependencies": {
    "typescript": "^5.9.3"
  }
}
```

- [ ] **Step 2: Create tsconfig.json**

```json
{
  "extends": "../../tsconfig.base.json",
  "include": ["src/**/*.ts", "tests/**/*.ts"],
  "exclude": ["node_modules", "dist"]
}
```

- [ ] **Step 3: Create src/errors.ts — base ApiError**

```ts
export class ApiError extends Error {
  readonly status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}
```

- [ ] **Step 4: Create src/client.ts — generic API client**

Same as current `src/runtime/client.ts` but:
- `baseUrl` is **required** (no default)
- No `apiVersion` default — pass empty string if not needed
- Error handling throws base `ApiError` instead of `FacebookApiError`
- Accepts an `onError` callback for SDK-specific error parsing
- Remove `[Meta SDK]` debug prefix — use `[SDK]`

```ts
import { ApiError } from "./errors.ts";

export interface PaginatedResponse<T = Record<string, unknown>> {
  data: T[];
  paging: { cursors: { before?: string; after?: string }; next?: string; previous?: string };
}

export type ErrorHandler = (status: number, body: unknown) => Error;

export interface ApiClientOptions {
  accessToken: string;
  apiVersion?: string;
  baseUrl: string;
  debug?: boolean;
  onError?: ErrorHandler;
}

export class ApiClient {
  private readonly accessToken: string;
  private readonly apiVersion: string;
  private readonly baseUrl: string;
  private readonly debug: boolean;
  private readonly onError: ErrorHandler;

  constructor(opts: ApiClientOptions) {
    this.accessToken = opts.accessToken;
    this.apiVersion = opts.apiVersion ?? "";
    this.baseUrl = opts.baseUrl;
    this.debug = opts.debug ?? false;
    this.onError = opts.onError ?? ((status, _body) => new ApiError("API request failed", status));
  }

  private buildUrl(path: string, params?: Record<string, unknown>): string {
    const prefix = this.apiVersion ? `${this.apiVersion}/${path}` : path;
    const url = new URL(prefix, this.baseUrl);
    url.searchParams.set("access_token", this.accessToken);
    if (params) {
      for (const [key, value] of Object.entries(params)) {
        if (value !== undefined && value !== null) {
          url.searchParams.set(key, typeof value === "object" ? JSON.stringify(value) : String(value));
        }
      }
    }
    return url.toString();
  }

  private async request<T>(method: string, url: string, body?: Record<string, unknown>): Promise<T> {
    if (this.debug) console.log(`[SDK] ${method} ${url}`);
    const init: RequestInit = { method };
    if (body && (method === "POST" || method === "PUT")) {
      const formData = new URLSearchParams();
      for (const [key, value] of Object.entries(body)) {
        if (value !== undefined && value !== null) {
          formData.set(key, typeof value === "object" ? JSON.stringify(value) : String(value));
        }
      }
      init.body = formData;
      init.headers = { "Content-Type": "application/x-www-form-urlencoded" };
    }
    const response = await fetch(url, init);
    const responseBody = await response.json();
    if (this.debug) console.log(`[SDK] ${response.status}`, responseBody);
    if (!response.ok) throw this.onError(response.status, responseBody);
    return responseBody as T;
  }

  async get<T>(path: string, opts: { fields: readonly string[]; params?: Record<string, unknown> }): Promise<T> {
    const params = { ...opts.params, fields: opts.fields.join(",") };
    return this.request<T>("GET", this.buildUrl(path, params));
  }

  async post<T>(path: string, params: Record<string, unknown>): Promise<T> {
    return this.request<T>("POST", this.buildUrl(path), params);
  }

  async delete(path: string, params?: Record<string, unknown>): Promise<void> {
    await this.request<unknown>("DELETE", this.buildUrl(path, params));
  }

  async getEdge<T = Record<string, unknown>>(path: string, opts: { fields: readonly string[]; params?: Record<string, unknown> }): Promise<PaginatedResponse<T>> {
    const params = { ...opts.params, fields: opts.fields.join(",") };
    return this.request<PaginatedResponse<T>>("GET", this.buildUrl(path, params));
  }

  async getUrl<T>(url: string): Promise<T> {
    return this.request<T>("GET", url);
  }
}
```

- [ ] **Step 5: Create src/cursor.ts — pluggable pagination**

```ts
import type { ApiClient } from "./client.ts";

export interface PaginationStrategy<T> {
  getData(response: unknown): T[];
  getNextPageParams(response: unknown): Record<string, unknown> | null;
}

export class Cursor<T> implements AsyncIterable<T> {
  private readonly client: ApiClient;
  private readonly path: string;
  private readonly fields: readonly string[];
  private readonly params: Record<string, unknown>;
  private readonly pagination: PaginationStrategy<T>;
  private nextPageParams: Record<string, unknown> | null = null;
  private hasMore = true;
  private started = false;

  constructor(
    client: ApiClient,
    path: string,
    opts: { fields: readonly string[]; params?: Record<string, unknown> },
    pagination: PaginationStrategy<T>,
  ) {
    this.client = client;
    this.path = path;
    this.fields = opts.fields;
    this.params = opts.params ?? {};
    this.pagination = pagination;
  }

  async next(): Promise<{ data: T[]; hasNext: boolean }> {
    if (!this.hasMore && this.started) return { data: [], hasNext: false };
    this.started = true;
    const params: Record<string, unknown> = { ...this.params, ...this.nextPageParams };
    const response = await this.client.getEdge(this.path, { fields: this.fields, params });
    const data = this.pagination.getData(response);
    this.nextPageParams = this.pagination.getNextPageParams(response);
    this.hasMore = this.nextPageParams !== null;
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
    for await (const item of this) result.push(item);
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

- [ ] **Step 6: Create src/types.ts**

```ts
export type EdgeMethod = "GET" | "POST" | "DELETE";
```

- [ ] **Step 7: Create src/index.ts — barrel export**

```ts
export { ApiClient } from "./client.ts";
export type { ApiClientOptions, PaginatedResponse, ErrorHandler } from "./client.ts";
export { Cursor } from "./cursor.ts";
export type { PaginationStrategy } from "./cursor.ts";
export { ApiError } from "./errors.ts";
export type { EdgeMethod } from "./types.ts";
```

- [ ] **Step 8: Move and adapt tests**

Copy existing `tests/runtime/errors.test.ts`, `client.test.ts`, `cursor.test.ts` to `packages/sdk-runtime/tests/`, updating:
- Import paths to `../../src/` instead of `../../src/runtime/`
- `FacebookApiError` → `ApiError` in errors test
- Client tests: `baseUrl` is now required, remove Facebook-specific error assertions
- Cursor tests: pass a `PaginationStrategy` to the constructor instead of relying on hardcoded Meta pagination

The cursor test pagination strategy:
```ts
const metaPagination: PaginationStrategy<any> = {
  getData: (response: any) => response.data,
  getNextPageParams: (response: any) => {
    const after = response.paging?.cursors?.after;
    return after ? { after } : null;
  },
};
```

- [ ] **Step 9: Run tests**

```bash
cd packages/sdk-runtime && bun test tests/
```

Expected: All tests pass.

- [ ] **Step 10: Run typecheck**

```bash
cd packages/sdk-runtime && bun run typecheck
```

Expected: Clean.

- [ ] **Step 11: Commit**

```bash
git add packages/sdk-runtime/
git commit -m "feat: add @promobase/sdk-runtime with generic client, cursor, and errors"
```

---

### Task 3: Move Meta SDK into packages/meta-business-sdk

**Files:**
- Create: `packages/meta-business-sdk/package.json`
- Create: `packages/meta-business-sdk/tsconfig.json`
- Move: `src/codegen/` → `packages/meta-business-sdk/src/codegen/`
- Move: `src/generated/` → `packages/meta-business-sdk/src/generated/`
- Move: `examples/` → `packages/meta-business-sdk/examples/`
- Move: `api_specs/` → `packages/meta-business-sdk/api_specs/`
- Move: `tests/codegen/` → `packages/meta-business-sdk/tests/codegen/`
- Move: `tests/e2e/` → `packages/meta-business-sdk/tests/e2e/`
- Create: `packages/meta-business-sdk/src/errors.ts` (FacebookApiError extending ApiError)
- Create: `packages/meta-business-sdk/src/pagination.ts` (Meta pagination strategy)
- Create: `packages/meta-business-sdk/tests/runtime/errors.test.ts` (Meta-specific error tests)
- Create: `packages/meta-business-sdk/tests/runtime/client-factory.test.ts` (move from tests/runtime/)
- Create: `packages/meta-business-sdk/CLAUDE.md`
- Create: `packages/meta-business-sdk/README.md`

- [ ] **Step 1: Create package.json**

```json
{
  "name": "@promobase/meta-business-sdk-ts",
  "version": "0.1.0",
  "description": "Type-safe TypeScript SDK for the Meta Marketing API",
  "module": "src/generated/index.ts",
  "main": "src/generated/index.ts",
  "types": "src/generated/index.ts",
  "type": "module",
  "files": [
    "src/generated/**/*.ts",
    "src/errors.ts",
    "src/pagination.ts",
    "README.md",
    "LICENSE"
  ],
  "scripts": {
    "codegen": "bun src/codegen/index.ts",
    "typecheck": "tsc --noEmit",
    "test": "bun test tests/",
    "build": "bun build src/generated/index.ts --outdir dist --target node"
  },
  "publishConfig": {
    "access": "public"
  },
  "keywords": ["meta", "facebook", "marketing-api", "graph-api", "typescript", "sdk"],
  "license": "MIT",
  "dependencies": {
    "@promobase/sdk-runtime": "workspace:*"
  },
  "devDependencies": {
    "@types/bun": "latest"
  },
  "peerDependencies": {
    "typescript": "^5.9.3"
  }
}
```

- [ ] **Step 2: Create tsconfig.json**

```json
{
  "extends": "../../tsconfig.base.json",
  "include": ["src/**/*.ts", "tests/**/*.ts", "examples/**/*.ts"],
  "exclude": ["node_modules", "dist", "api_specs"]
}
```

- [ ] **Step 3: Move files**

```bash
mkdir -p packages/meta-business-sdk/src packages/meta-business-sdk/tests
mv src/codegen packages/meta-business-sdk/src/
mv src/generated packages/meta-business-sdk/src/
mv examples packages/meta-business-sdk/
mv tests/codegen packages/meta-business-sdk/tests/
mv tests/e2e packages/meta-business-sdk/tests/
mkdir -p packages/meta-business-sdk/tests/runtime
mv tests/runtime/client-factory.test.ts packages/meta-business-sdk/tests/runtime/
```

Move the git submodule — this requires updating `.gitmodules`:

```bash
git mv api_specs packages/meta-business-sdk/api_specs
```

- [ ] **Step 4: Create src/errors.ts — FacebookApiError extending ApiError**

```ts
import { ApiError } from "@promobase/sdk-runtime";

export class FacebookApiError extends ApiError {
  readonly code: number;
  readonly subcode: number | undefined;
  readonly type: string;
  readonly fbtrace_id: string;

  constructor(opts: {
    message: string; status: number; code: number;
    subcode?: number; type: string; fbtrace_id: string;
  }) {
    super(opts.message, opts.status);
    this.name = "FacebookApiError";
    this.code = opts.code;
    this.subcode = opts.subcode;
    this.type = opts.type;
    this.fbtrace_id = opts.fbtrace_id;
  }

  static fromResponse(status: number, body: unknown): FacebookApiError {
    if (typeof body === "object" && body !== null && "error" in body &&
        typeof (body as Record<string, unknown>).error === "object") {
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
    return new FacebookApiError({ message: "Unknown Facebook API error", status, code: 0, type: "Unknown", fbtrace_id: "" });
  }
}
```

- [ ] **Step 5: Create src/pagination.ts — Meta pagination strategy**

```ts
import type { PaginationStrategy } from "@promobase/sdk-runtime";

export function metaPagination<T>(): PaginationStrategy<T> {
  return {
    getData(response: unknown): T[] {
      return (response as { data: T[] }).data ?? [];
    },
    getNextPageParams(response: unknown): Record<string, unknown> | null {
      const paging = (response as { paging?: { cursors?: { after?: string }; next?: string } }).paging;
      const after = paging?.cursors?.after;
      return after && paging?.next ? { after } : null;
    },
  };
}
```

- [ ] **Step 6: Create Meta-specific error test**

```ts
// packages/meta-business-sdk/tests/runtime/errors.test.ts
import { test, expect } from "bun:test";
import { FacebookApiError } from "../../src/errors.ts";
import { ApiError } from "@promobase/sdk-runtime";

test("FacebookApiError extends ApiError", () => {
  const err = FacebookApiError.fromResponse(400, {
    error: { message: "Bad", type: "OAuthException", code: 190, fbtrace_id: "abc" },
  });
  expect(err).toBeInstanceOf(FacebookApiError);
  expect(err).toBeInstanceOf(ApiError);
  expect(err).toBeInstanceOf(Error);
  expect(err.status).toBe(400);
  expect(err.code).toBe(190);
  expect(err.type).toBe("OAuthException");
});
```

- [ ] **Step 7: Commit the move**

```bash
git add -A
git commit -m "refactor: move Meta SDK into packages/meta-business-sdk"
```

---

### Task 4: Update Codegen Emitter for New Import Paths

**Files:**
- Modify: `packages/meta-business-sdk/src/codegen/emitter.ts`
- Modify: `packages/meta-business-sdk/src/codegen/index.ts`

The emitter currently generates imports like:
```ts
import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
```

These must change to:
```ts
import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
```

And the barrel/client-factory must import `FacebookApiError` from the local `src/errors.ts` and pass `metaPagination` to Cursor.

- [ ] **Step 1: Update emitter.ts import generation**

In `emitObjectFile`, change the import generation section:

Replace:
```ts
out.push(`import type { ApiClient } from "../../runtime/client.ts";`);
```
With:
```ts
out.push(`import type { ApiClient } from "@promobase/sdk-runtime";`);
```

Replace:
```ts
out.push(`import { Cursor } from "../../runtime/cursor.ts";`);
```
With:
```ts
out.push(`import { Cursor } from "@promobase/sdk-runtime";`);
out.push(`import { metaPagination } from "../../pagination.ts";`);
```

Also update every `new Cursor<...>(client, path, opts)` to add the pagination strategy:
```ts
new Cursor<...>(client, path, opts, metaPagination())
```

- [ ] **Step 2: Update index.ts (orchestrator) barrel generation**

In the barrel generation section, change:
```ts
barrelLines.push(`export type { ApiClient, ApiClientOptions } from "../runtime/client.ts";`);
barrelLines.push(`export { Cursor } from "../runtime/cursor.ts";`);
barrelLines.push(`export { FacebookApiError } from "../runtime/errors.ts";`);
```
To:
```ts
barrelLines.push(`export type { ApiClient, ApiClientOptions } from "@promobase/sdk-runtime";`);
barrelLines.push(`export { Cursor } from "@promobase/sdk-runtime";`);
barrelLines.push(`export { FacebookApiError } from "../errors.ts";`);
```

In the client-factory generation, change:
```ts
factoryLines.push(`import { ApiClient, type ApiClientOptions } from "../runtime/client.ts";`);
```
To:
```ts
factoryLines.push(`import { ApiClient, type ApiClientOptions } from "@promobase/sdk-runtime";`);
factoryLines.push(`import { FacebookApiError } from "../errors.ts";`);
```

Also add the `onError` callback when constructing `ApiClient`:
```ts
factoryLines.push("  const client = new ApiClient({");
factoryLines.push("    ...opts,");
factoryLines.push("    baseUrl: opts.baseUrl ?? \"https://graph.facebook.com\",");
factoryLines.push("    onError: FacebookApiError.fromResponse,");
factoryLines.push("  });");
```

- [ ] **Step 3: Update codegen parser test paths**

Parser tests reference `api_specs/api_specs/specs` — update to `packages/meta-business-sdk/api_specs/api_specs/specs` or make them relative. Since tests run from the package dir, use relative paths. Check the test and update `parseSpecs("api_specs/api_specs/specs")` to work from the package directory by either:
- Running tests from `packages/meta-business-sdk/` (preferred)
- Or updating paths

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "refactor: update codegen emitter for @promobase/sdk-runtime imports"
```

---

### Task 5: Regenerate and Fix

**Files:**
- Modify: all files under `packages/meta-business-sdk/src/generated/`
- Modify: test files as needed for import path fixes

- [ ] **Step 1: Install workspace deps**

```bash
bun install
```

- [ ] **Step 2: Run codegen from the meta-business-sdk package**

```bash
cd packages/meta-business-sdk && bun run codegen
```

- [ ] **Step 3: Update test import paths**

All tests that import from `../../src/runtime/` need updating to either `@promobase/sdk-runtime` or the new local paths. All tests that import from `../../src/codegen/` or `../../src/generated/` stay as relative paths (they're within the same package now).

Update `tests/runtime/client-factory.test.ts`:
```ts
import { createClient } from "../../src/generated/index.ts";
```

Update `tests/e2e/type-safety.test.ts`:
```ts
import { createClient } from "../../src/generated/index.ts";
```

Update codegen tests to use correct relative spec paths.

- [ ] **Step 4: Run typecheck on both packages**

```bash
cd packages/sdk-runtime && bun run typecheck
cd packages/meta-business-sdk && bun run typecheck
```

Expected: Both clean.

- [ ] **Step 5: Run tests on both packages**

```bash
cd packages/sdk-runtime && bun test tests/
cd packages/meta-business-sdk && bun test tests/
```

Expected: All pass.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: regenerate Meta SDK with @promobase/sdk-runtime imports"
```

---

### Task 6: Clean Up Old Files and Root Docs

**Files:**
- Delete: `src/` (old, now in packages)
- Delete: `tests/` (old, now in packages)
- Delete: `tsconfig.json` (replaced by tsconfig.base.json)
- Modify: `CLAUDE.md` (root monorepo instructions)
- Modify: `README.md` (monorepo overview)
- Move: `LICENSE` stays at root

- [ ] **Step 1: Remove old directories**

```bash
rm -rf src/ tests/
rm tsconfig.json
```

- [ ] **Step 2: Write root CLAUDE.md**

```markdown
# ad-platform-sdks

Bun workspaces monorepo for type-safe ad platform SDKs.

## Packages

| Package | Path | Published |
|---------|------|-----------|
| `@promobase/sdk-runtime` | `packages/sdk-runtime/` | No (private) |
| `@promobase/meta-business-sdk-ts` | `packages/meta-business-sdk/` | Yes |

## Commands

From root:
- `bun install` — install all workspace deps
- `bun test packages/*/tests/` — run all tests
- `bun run typecheck` — typecheck all packages

Per package:
- `cd packages/meta-business-sdk && bun run codegen` — regenerate Meta SDK
- `cd packages/meta-business-sdk && bun test tests/` — test Meta SDK
- `cd packages/meta-business-sdk && bun publish --access public` — publish

## Conventions

- Bun for everything
- Each SDK depends on `@promobase/sdk-runtime` via `workspace:*`
- Only client SDK packages are published; sdk-runtime is private
- Each SDK has its own codegen, errors, pagination strategy
```

- [ ] **Step 3: Write root README.md**

Brief monorepo overview pointing to each package's README.

- [ ] **Step 4: Final verification**

```bash
bun install
cd packages/sdk-runtime && bun run typecheck && bun test tests/
cd ../meta-business-sdk && bun run typecheck && bun test tests/
```

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: clean up old files, add root monorepo docs"
```
