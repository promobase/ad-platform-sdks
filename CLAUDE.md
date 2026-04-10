# ad-platform-sdks

Bun workspaces monorepo for type-safe ad platform SDKs.

## Packages

| Package | Path | Published |
|---------|------|-----------|
| `@promobase/sdk-runtime` | `packages/sdk-runtime/` | No (private) |
| `@promobase/meta-business-sdk-ts` | `packages/meta-business-sdk/` | Yes |
| `@promobase/tiktok-business-sdk` | `packages/tiktok-business-sdk/` | Yes |

## Commands

From root:
- `bun install` — install all workspace deps

Per package (run from package dir):
- `bun test tests/` — run tests
- `bun run typecheck` — typecheck

Meta SDK specific:
- `cd packages/meta-business-sdk && bun run codegen` — regenerate from API specs
- `cd packages/meta-business-sdk && bun publish --access public` — publish

## TikTok Business API Docs

The TikTok Business API docs portal (https://business-api.tiktok.com/portal/docs/) is a Next.js SPA that loads doc content via an iframe backed by a JSON API. The YAML specs in the GitHub SDK repo (https://github.com/tiktok/tiktok-business-api-sdk) have **untyped responses** (`data: {}`) and are not useful for codegen on their own.

### Docs JSON API

The actual typed documentation is served by these endpoints:

**Doc tree (full index of all endpoints):**
```
GET https://business-api.tiktok.com/gateway/api/doc/client/platform/tree/get/
  ?language=ENGLISH
  &identify_key=c0138ffadd90a955c1f0670a56fe348d1d40680b3c89461e09f78ed26785164b
  &is_need_content=false
```
Returns hierarchical JSON with `doc_id` and `title` for every doc page.

**Doc content (single endpoint's full spec):**
```
GET https://business-api.tiktok.com/gateway/api/doc/client/node/get/
  ?language=ENGLISH
  &identify_key=c0138ffadd90a955c1f0670a56fe348d1d40680b3c89461e09f78ed26785164b
  &doc_id={doc_id}
```
Returns `{ code: 0, data: { content: "...", title: "...", type: "MARKDOWN" } }`.

### Doc content format

The markdown content uses `xtable` blocks for structured parameter/response tables:
- Pipe-delimited columns: Field, Data Type, Param Location, Description
- `{Required}` / `{+Conditional}` markers in field names
- `#` prefix = nested under parent object, `##` = doubly nested
- Response body tables have: Field, Type, Description
- Enum values and constraints are embedded in description text

### Codegen strategy (planned)

1. Scrape the doc tree to get all doc_ids
2. Fetch each doc and parse `xtable` markdown into typed request/response schemas
3. Generate TypeScript interfaces and client methods reusing `sdk-runtime` (ApiClient, Cursor, PaginationStrategy)

## Conventions

- Bun for everything (runtime, test, build, install)
- Each SDK depends on `@promobase/sdk-runtime` via `workspace:*`
- Only client SDK packages are published; sdk-runtime is private
- Each SDK has its own codegen, errors, pagination strategy
- Tests must be run from the package directory (not root)
