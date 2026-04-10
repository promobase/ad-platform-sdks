# Monorepo Restructure — ad-platform-sdks

## Overview

Restructure the current `meta-business-sdk-ts` single-package repo into a Bun workspaces monorepo called `ad-platform-sdks`. Extract a shared runtime package, keep the Meta SDK as the first workspace package, and prepare the structure for future TikTok and Google SDK packages.

## Target Structure

```
ad-platform-sdks/
├── packages/
│   ├── sdk-runtime/                    # @promobase/sdk-runtime
│   │   ├── src/
│   │   │   ├── client.ts              # Generic fetch wrapper (auth, URL building, debug)
│   │   │   ├── cursor.ts             # Async-iterable cursor with pluggable pagination
│   │   │   ├── errors.ts             # Base ApiError class
│   │   │   ├── types.ts              # Shared types (EdgeMethod, etc.)
│   │   │   └── index.ts              # Barrel export
│   │   ├── tests/
│   │   │   ├── client.test.ts
│   │   │   ├── cursor.test.ts
│   │   │   └── errors.test.ts
│   │   ├── package.json               # @promobase/sdk-runtime
│   │   └── tsconfig.json
│   │
│   ├── meta-business-sdk/              # @promobase/meta-business-sdk-ts
│   │   ├── api_specs/                  # git submodule (unchanged)
│   │   ├── src/
│   │   │   ├── codegen/               # Meta-specific codegen (unchanged)
│   │   │   ├── generated/             # Codegen output (regenerated with new imports)
│   │   │   ├── errors.ts             # FacebookApiError extends ApiError
│   │   │   └── index.ts              # Re-exports generated + FacebookApiError
│   │   ├── tests/
│   │   │   ├── codegen/               # Codegen tests (unchanged)
│   │   │   ├── runtime/               # Meta-specific runtime tests
│   │   │   └── e2e/                   # E2E tests (unchanged)
│   │   ├── examples/                   # Usage examples (unchanged)
│   │   ├── package.json               # depends on @promobase/sdk-runtime
│   │   ├── tsconfig.json
│   │   ├── CLAUDE.md                  # Meta SDK-specific instructions
│   │   └── README.md                  # Meta SDK README
│   │
│   ├── tiktok-business-sdk/           # future — @promobase/tiktok-business-sdk-ts
│   └── google-business-sdk/           # future — @promobase/google-business-sdk-ts
│
├── package.json                        # Bun workspace root
├── tsconfig.base.json                  # Shared compiler options
├── CLAUDE.md                           # Root project instructions
├── README.md                           # Monorepo overview
├── LICENSE
└── .gitignore
```

## Package Details

### @promobase/sdk-runtime

Extracted from current `src/runtime/`. Generalized to work across different API platforms.

**client.ts** — Generic fetch-based API client:
```ts
export interface ApiClientOptions {
  accessToken: string;
  apiVersion?: string;
  baseUrl: string;       // required — no default (each SDK provides its own)
  debug?: boolean;
}

export class ApiClient {
  // Same as current implementation but:
  // - baseUrl is required (no Meta default)
  // - Error handling uses base ApiError (not FacebookApiError)
  get<T>(path, opts): Promise<T>
  post<T>(path, params): Promise<T>
  delete(path, params?): Promise<void>
  getEdge<T>(path, opts): Promise<PaginatedResponse<T>>
  getUrl<T>(url): Promise<T>
}
```

**cursor.ts** — Async-iterable cursor with pluggable pagination:
```ts
export interface PaginationStrategy<T> {
  // Extract items from raw API response
  getData(response: unknown): T[];
  // Extract the params needed for the next page (null = no more pages)
  getNextPageParams(response: unknown): Record<string, unknown> | null;
}

export class Cursor<T> implements AsyncIterable<T> {
  constructor(
    client: ApiClient,
    path: string,
    opts: { fields: readonly string[]; params?: Record<string, unknown> },
    pagination: PaginationStrategy<T>,
  )

  next(): Promise<{ data: T[]; hasNext: boolean }>
  [Symbol.asyncIterator](): AsyncIterator<T>
  toArray(): Promise<T[]>
  take(n: number): Promise<T[]>
}
```

The Meta SDK provides its own pagination strategy:
```ts
// In meta-business-sdk/src/pagination.ts
export const metaPagination: PaginationStrategy<T> = {
  getData: (response) => response.data,
  getNextPageParams: (response) => {
    const after = response.paging?.cursors?.after;
    return after ? { after } : null;
  },
};
```

**errors.ts** — Base error class:
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

### @promobase/meta-business-sdk-ts

Keeps all Meta-specific code. Depends on `@promobase/sdk-runtime`.

**Changes from current:**
- `src/runtime/` removed — now imports from `@promobase/sdk-runtime`
- `src/errors.ts` — `FacebookApiError extends ApiError` with `code`, `subcode`, `type`, `fbtrace_id`
- `src/codegen/` — emitter updated to import from `@promobase/sdk-runtime` instead of `../../runtime/`
- `src/generated/` — regenerated with new import paths
- Tests that were in `tests/runtime/` for generic client/cursor move to `sdk-runtime`. Meta-specific tests (FacebookApiError, client-factory) stay.

### Root Workspace

**package.json:**
```json
{
  "name": "ad-platform-sdks",
  "private": true,
  "workspaces": ["packages/*"]
}
```

**tsconfig.base.json** — shared compiler options that each package extends:
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

Each package's tsconfig:
```json
{
  "extends": "../../tsconfig.base.json",
  "include": ["src/**/*.ts", "tests/**/*.ts"],
  "exclude": ["node_modules", "dist"]
}
```

## Migration Steps (High Level)

1. Create new directory structure at root level
2. Create root package.json with workspaces
3. Create tsconfig.base.json
4. Move `src/runtime/` → `packages/sdk-runtime/src/`, generalize (remove Meta defaults, add PaginationStrategy)
5. Move runtime tests → `packages/sdk-runtime/tests/`
6. Create `packages/sdk-runtime/package.json`
7. Move everything else → `packages/meta-business-sdk/`
8. Create `FacebookApiError extends ApiError` in meta-business-sdk
9. Create Meta pagination strategy
10. Update codegen emitter to use new import paths (`@promobase/sdk-runtime` instead of `../../runtime/`)
11. Regenerate all 994 files
12. Update all test imports
13. Verify: `bun install` → `bun run typecheck` → `bun test` in both packages
14. Update root CLAUDE.md and README.md

## Out of Scope

- TikTok SDK implementation (future)
- Google SDK implementation (future)
- CI/CD pipeline
- Changesets / versioning automation
