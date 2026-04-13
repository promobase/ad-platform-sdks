# Google Ads GAQL Builder Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a typed GAQL query builder over the Google Ads SDK with field-literal autocomplete and row-level narrowing.

**Architecture:** Codegen extension emits a field catalog (`FieldMap`, per-resource field unions) from the pinned v23 protos. A phantom-typed `QueryBuilder` accumulates selections into a `Sel extends string` union; `RowOf<Sel>` converts that into a deep nested response shape via `SetPath` + `UnionToIntersection`. Raw WHERE/ORDER BY. Integrated into the existing `customer` factory.

**Tech Stack:** TypeScript, Bun, existing proto walker in `src/codegen/parser.ts`, existing `@promobase/sdk-runtime` `HttpClient`.

**Spec:** `docs/superpowers/specs/2026-04-12-google-ads-gaql-builder-design.md`

---

## File Structure

All under `packages/google-ads-sdk/`:

**New files:**
- `src/codegen/gaql-emitter.ts` — walker that converts `ProtoRoot` to GAQL field catalog
- `src/clients/gaql/builder.ts` — `QueryBuilder` class, `RowOf<>` type, entry-point `gaql`
- `src/clients/gaql/serialize.ts` — `QueryState → string`
- `src/clients/gaql/bound.ts` — `BoundQueryBuilder`, `gaqlFactory`
- `src/clients/gaql/index.ts` — barrel
- `tests/codegen/gaql-emitter.test.ts`
- `tests/codegen/fixtures/gaql_sample.proto`
- `tests/clients/gaql/serialize.test.ts`
- `tests/clients/gaql/execute.test.ts`
- `tests/clients/gaql/customer.test.ts`

**Modified files:**
- `src/codegen/index.ts` — orchestrator calls `gaql-emitter` after the existing emit pass
- `src/clients/customer.ts` — add `gaql` field to `Customer`
- `src/clients/index.ts` — re-export `QueryBuilder`, `gaql`, types
- `src/namespace.ts` — add `gaql` to `Google.Ads`
- `src/index.ts` — re-export entry-point + types
- `tests/type-safety.check.ts` — GAQL probes

**Generated (committed):**
- `src/generated/v23/gaql/resources/*.ts`
- `src/generated/v23/gaql/metrics.ts`
- `src/generated/v23/gaql/segments.ts`
- `src/generated/v23/gaql/field-map.ts`
- `src/generated/v23/gaql/resource-map.ts`
- `src/generated/v23/gaql/index.ts`

---

## Task 1: GAQL emitter walker (isolated from orchestrator)

**Scene:** The hardest task. Convert the existing `ProtoRoot` AST into a typed field catalog. Worked out with fixture protos first — before we wire it into the real v23 pipeline. The walker is pure: `(ProtoRoot) → { resources, metrics, segments, fieldMap }`.

**Files:**
- Create: `packages/google-ads-sdk/src/codegen/gaql-emitter.ts`
- Create: `packages/google-ads-sdk/tests/codegen/gaql-emitter.test.ts`
- Create: `packages/google-ads-sdk/tests/codegen/fixtures/gaql_sample.proto`

- [ ] **Step 1: Create fixture `tests/codegen/fixtures/gaql_sample.proto`**

```proto
syntax = "proto3";
package test.gaql;

enum SampleStatus {
  SAMPLE_STATUS_UNSPECIFIED = 0;
  ENABLED = 1;
  PAUSED = 2;
}

message NetworkSettings {
  bool target_google_search = 1;
  bool target_search_network = 2;
}

message CustomParam {
  string key = 1;
  string value = 2;
}

message Campaign {
  string resource_name = 1;
  int64 id = 2;
  string name = 3;
  SampleStatus status = 4;
  NetworkSettings network_settings = 5;
  repeated string final_urls = 6;
  repeated CustomParam url_custom_parameters = 7;
}
```

- [ ] **Step 2: Write failing test `tests/codegen/gaql-emitter.test.ts`**

```ts
import { test, expect } from "bun:test";
import path from "node:path";
import { loadProtos } from "../../src/codegen/parser.ts";
import { emitGaqlCatalog } from "../../src/codegen/gaql-emitter.ts";

const FIXTURES = path.resolve(import.meta.dir, "fixtures");

test("emitGaqlCatalog walks scalar leaves and nested messages", async () => {
  const root = await loadProtos([path.join(FIXTURES, "gaql_sample.proto")], [FIXTURES]);
  const catalog = emitGaqlCatalog(root, {
    resourcesPackagePrefix: "test.gaql",
    metricsMessageFullName: null,
    segmentsMessageFullName: null,
  });

  // Campaign resource file contents
  const campaign = catalog.resources.get("campaign");
  expect(campaign).toBeDefined();
  const fields = campaign!.fields.map((f) => f.gaqlKey).sort();
  expect(fields).toEqual([
    "campaign.final_urls",
    "campaign.id",
    "campaign.name",
    "campaign.network_settings.target_google_search",
    "campaign.network_settings.target_search_network",
    "campaign.resource_name",
    "campaign.status",
    "campaign.url_custom_parameters",
  ]);

  // Repeated message is a leaf (selectable as the whole array) — not recursed
  const customParams = campaign!.fields.find((f) => f.gaqlKey === "campaign.url_custom_parameters");
  expect(customParams).toBeDefined();
  expect(customParams!.tsType).toBe("CustomParam[]");

  // Enum field resolves to the enum type name
  const status = campaign!.fields.find((f) => f.gaqlKey === "campaign.status");
  expect(status!.tsType).toBe("SampleStatus");

  // Nested scalar path
  const targetSearch = campaign!.fields.find(
    (f) => f.gaqlKey === "campaign.network_settings.target_google_search",
  );
  expect(targetSearch!.namespace).toBe("campaign");
  expect(targetSearch!.camelPath).toBe("networkSettings.targetGoogleSearch");
  expect(targetSearch!.tsType).toBe("boolean");

  // int64 → string
  const id = campaign!.fields.find((f) => f.gaqlKey === "campaign.id");
  expect(id!.tsType).toBe("string");

  // Repeated scalar
  const urls = campaign!.fields.find((f) => f.gaqlKey === "campaign.final_urls");
  expect(urls!.tsType).toBe("string[]");
  expect(urls!.camelPath).toBe("finalUrls");
});

test("emitGaqlCatalog renders resource union file", async () => {
  const root = await loadProtos([path.join(FIXTURES, "gaql_sample.proto")], [FIXTURES]);
  const catalog = emitGaqlCatalog(root, {
    resourcesPackagePrefix: "test.gaql",
    metricsMessageFullName: null,
    segmentsMessageFullName: null,
  });
  const rendered = catalog.renderResourceFile("campaign");
  expect(rendered).toContain("export type CampaignSelectableField =");
  expect(rendered).toContain('"campaign.id"');
  expect(rendered).toContain('"campaign.network_settings.target_google_search"');
});

test("emitGaqlCatalog renders field-map file with imports", async () => {
  const root = await loadProtos([path.join(FIXTURES, "gaql_sample.proto")], [FIXTURES]);
  const catalog = emitGaqlCatalog(root, {
    resourcesPackagePrefix: "test.gaql",
    metricsMessageFullName: null,
    segmentsMessageFullName: null,
  });
  const rendered = catalog.renderFieldMapFile();
  expect(rendered).toContain("export type FieldMap =");
  expect(rendered).toContain('"campaign.status": FieldInfo<"campaign", "status", SampleStatus>');
  expect(rendered).toContain('"campaign.network_settings.target_google_search": FieldInfo<"campaign", "networkSettings.targetGoogleSearch", boolean>');
  // Enum import line
  expect(rendered).toMatch(/import type \{ SampleStatus \}/);
});
```

- [ ] **Step 3: Run — verify fail**

Run: `cd packages/google-ads-sdk && bun test tests/codegen/gaql-emitter.test.ts`
Expected: "Cannot find module '../../src/codegen/gaql-emitter.ts'".

- [ ] **Step 4: Implement `src/codegen/gaql-emitter.ts`**

```ts
import type { ProtoRoot, MessageAst, FieldAst } from "./parser.ts";
import { resolveType } from "./type-resolver.ts";
import { snakeToCamel } from "./http-binding.ts";

export interface GaqlFieldEntry {
  gaqlKey: string;       // "campaign.network_settings.target_google_search"
  namespace: string;     // "campaign"
  camelPath: string;     // "networkSettings.targetGoogleSearch"
  tsType: string;        // "boolean" | "string" | "string[]" | "SampleStatus" | ...
  enumImport?: string;   // "SampleStatus" if tsType is a non-wellknown type
}

export interface GaqlResourceCatalog {
  resourceName: string;       // "campaign" (FROM clause)
  typeAlias: string;          // "CampaignSelectableField"
  fields: GaqlFieldEntry[];
}

export interface GaqlCatalog {
  resources: Map<string, GaqlResourceCatalog>;
  metrics: GaqlFieldEntry[];
  segments: GaqlFieldEntry[];
  renderResourceFile(resource: string): string;
  renderMetricsFile(): string;
  renderSegmentsFile(): string;
  renderFieldMapFile(): string;
  renderResourceMapFile(): string;
  renderIndexFile(): string;
}

export interface EmitterOptions {
  resourcesPackagePrefix: string;      // e.g. "google.ads.googleads.v23.resources"
  metricsMessageFullName: string | null;  // e.g. "google.ads.googleads.v23.common.Metrics"
  segmentsMessageFullName: string | null; // e.g. "google.ads.googleads.v23.common.Segments"
}

const MAX_DEPTH = 6;

export function emitGaqlCatalog(root: ProtoRoot, opts: EmitterOptions): GaqlCatalog {
  const messageIndex = new Map<string, MessageAst>();
  for (const m of root.messages) messageIndex.set(m.fullName, m);

  const resources = new Map<string, GaqlResourceCatalog>();
  for (const m of root.messages) {
    if (!m.fullName.startsWith(`${opts.resourcesPackagePrefix}.`)) continue;
    if (m.fullName.split(".").length !== opts.resourcesPackagePrefix.split(".").length + 1) {
      // Only top-level messages in the resources package
      continue;
    }
    const resourceName = toSnakeCase(m.name);
    const typeAlias = `${m.name}SelectableField`;
    const fields: GaqlFieldEntry[] = [];
    walkMessage(m, [resourceName], [], fields, messageIndex, 0);
    resources.set(resourceName, { resourceName, typeAlias, fields });
  }

  const metrics: GaqlFieldEntry[] = [];
  if (opts.metricsMessageFullName) {
    const metricsMsg = messageIndex.get(opts.metricsMessageFullName);
    if (metricsMsg) {
      walkMessage(metricsMsg, ["metrics"], [], metrics, messageIndex, 0);
    }
  }

  const segments: GaqlFieldEntry[] = [];
  if (opts.segmentsMessageFullName) {
    const segmentsMsg = messageIndex.get(opts.segmentsMessageFullName);
    if (segmentsMsg) {
      walkMessage(segmentsMsg, ["segments"], [], segments, messageIndex, 0);
    }
  }

  return {
    resources,
    metrics,
    segments,
    renderResourceFile(resource) {
      const cat = resources.get(resource);
      if (!cat) throw new Error(`unknown resource: ${resource}`);
      const lines = cat.fields.map((f) => `  | "${f.gaqlKey}"`);
      return `// Generated. Do not edit by hand.\nexport type ${cat.typeAlias} =\n${lines.join("\n")};\n`;
    },
    renderMetricsFile() {
      const lines = metrics.map((f) => `  | "${f.gaqlKey}"`);
      return `// Generated. Do not edit by hand.\nexport type MetricField =\n${lines.join("\n") || '  never'};\n`;
    },
    renderSegmentsFile() {
      const lines = segments.map((f) => `  | "${f.gaqlKey}"`);
      return `// Generated. Do not edit by hand.\nexport type SegmentField =\n${lines.join("\n") || '  never'};\n`;
    },
    renderFieldMapFile() {
      const all = [
        ...[...resources.values()].flatMap((r) => r.fields),
        ...metrics,
        ...segments,
      ];
      const enumImports = new Set<string>();
      for (const f of all) if (f.enumImport) enumImports.add(f.enumImport);
      const importLines = [...enumImports]
        .sort()
        .map((name) => `import type { ${name} } from "../enums/${name}.ts";`)
        .join("\n");
      const entries = all
        .map(
          (f) =>
            `  "${f.gaqlKey}": FieldInfo<"${f.namespace}", "${f.camelPath}", ${f.tsType}>;`,
        )
        .join("\n");
      return `${importLines}\n\n// Generated. Do not edit by hand.\nexport interface FieldInfo<NS extends string, P extends string, T> {\n  namespace: NS;\n  path: P;\n  tsType: T;\n}\n\nexport type FieldMap = {\n${entries}\n};\n`;
    },
    renderResourceMapFile() {
      const resImports = [...resources.values()]
        .map((r) => `import type { ${r.typeAlias} } from "./resources/${r.resourceName}.ts";`)
        .join("\n");
      const entries = [...resources.values()]
        .map(
          (r) => `  ${r.resourceName}: ${r.typeAlias} | MetricField | SegmentField;`,
        )
        .join("\n");
      return `${resImports}\nimport type { MetricField } from "./metrics.ts";\nimport type { SegmentField } from "./segments.ts";\n\n// Generated. Do not edit by hand.\nexport type ResourceFieldMap = {\n${entries}\n};\n\nexport type GaqlResource = keyof ResourceFieldMap;\n`;
    },
    renderIndexFile() {
      const lines = [
        `export * from "./field-map.ts";`,
        `export * from "./resource-map.ts";`,
        `export * from "./metrics.ts";`,
        `export * from "./segments.ts";`,
      ];
      for (const r of resources.values()) {
        lines.push(`export * from "./resources/${r.resourceName}.ts";`);
      }
      return lines.join("\n") + "\n";
    },
  };
}

function walkMessage(
  msg: MessageAst,
  namespacePath: string[],    // ["campaign"] or ["campaign", "network_settings"]
  camelPath: string[],        // [] for root, ["networkSettings"] for nested
  out: GaqlFieldEntry[],
  messageIndex: Map<string, MessageAst>,
  depth: number,
) {
  if (depth > MAX_DEPTH) return;
  for (const field of msg.fields) {
    const snakeLeaf = field.name;
    const camelLeaf = snakeToCamel(field.name);
    const gaqlKey = [...namespacePath, snakeLeaf].join(".");

    if (field.map) {
      // Map fields are not GAQL-selectable in our v1 — skip
      continue;
    }

    const resolved = resolveType(field.type, field.repeated, null);
    const isScalarOrEnum =
      !isMessageRef(field.type) || isWellKnown(field.type);

    if (isScalarOrEnum) {
      out.push({
        gaqlKey,
        namespace: namespacePath[0]!,
        camelPath: [...camelPath, camelLeaf].join("."),
        tsType: resolved.tsType,
        enumImport: pickEnumImport(resolved),
      });
      continue;
    }

    // Message-typed
    if (field.repeated) {
      // Repeated message → leaf with array tsType; don't recurse
      out.push({
        gaqlKey,
        namespace: namespacePath[0]!,
        camelPath: [...camelPath, camelLeaf].join("."),
        tsType: resolved.tsType,
        enumImport: pickEnumImport(resolved),
      });
      continue;
    }

    // Singular message → recurse
    const nested = messageIndex.get(field.type.replace(/^\./, ""));
    if (!nested) {
      // Unknown message type — treat as leaf
      out.push({
        gaqlKey,
        namespace: namespacePath[0]!,
        camelPath: [...camelPath, camelLeaf].join("."),
        tsType: resolved.tsType,
        enumImport: pickEnumImport(resolved),
      });
      continue;
    }
    walkMessage(
      nested,
      [...namespacePath, snakeLeaf],
      [...camelPath, camelLeaf],
      out,
      messageIndex,
      depth + 1,
    );
  }
}

function isMessageRef(protoType: string): boolean {
  return protoType.includes(".");
}

function isWellKnown(protoType: string): boolean {
  const t = protoType.replace(/^\./, "");
  return (
    t.startsWith("google.protobuf.") &&
    (t.endsWith("Value") ||
      t === "google.protobuf.Timestamp" ||
      t === "google.protobuf.Duration" ||
      t === "google.protobuf.FieldMask" ||
      t === "google.protobuf.Empty" ||
      t === "google.protobuf.Any" ||
      t === "google.protobuf.Struct")
  );
}

function pickEnumImport(resolved: { tsType: string; imports: { name: string }[] }): string | undefined {
  // Only care about named type references (enums & messages), not scalars / array-wrappers
  const base = resolved.tsType.replace(/\[\]$/, "");
  if (["string", "number", "boolean", "unknown"].includes(base)) return undefined;
  if (base.startsWith("Record<")) return undefined;
  return resolved.imports.find((i) => i.name === base)?.name;
}

function toSnakeCase(s: string): string {
  return s
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1_$2")
    .toLowerCase();
}
```

- [ ] **Step 5: Run tests — verify pass**

Run: `cd packages/google-ads-sdk && bun test tests/codegen/gaql-emitter.test.ts`
Expected: 3 tests PASS.

If a test fails, it's almost certainly because the walker missed something (skipping map fields, nested oneof, well-known-type handling). Debug against the fixture. Update the walker until tests pass.

- [ ] **Step 6: Typecheck**

Run: `cd packages/google-ads-sdk && bun run typecheck`
Expected: clean.

- [ ] **Step 7: Commit**

```bash
cd /Users/ruizeli/dev/meta-business-sdk-ts
git add packages/google-ads-sdk/src/codegen/gaql-emitter.ts packages/google-ads-sdk/tests/codegen/gaql-emitter.test.ts packages/google-ads-sdk/tests/codegen/fixtures/gaql_sample.proto
git commit -m "feat(google-ads-sdk): add GAQL catalog emitter + tests"
```

---

## Task 2: Orchestrator wiring + first real run

**Scene:** Run the emitter against v23 and see what breaks. Highest-risk task after Task 1. Measure typecheck performance on the generated `field-map.ts`. If it's unacceptable, split the field-map into declaration-merged interfaces.

**Files:**
- Modify: `packages/google-ads-sdk/src/codegen/index.ts`

- [ ] **Step 1: Inspect v23 protos to find the metrics and segments message full names**

Run:
```bash
grep -l "^message Metrics" packages/google-ads-sdk/vendor/googleapis/google/ads/googleads/v23/common/*.proto
grep -l "^message Segments" packages/google-ads-sdk/vendor/googleapis/google/ads/googleads/v23/common/*.proto
```

Note the full names — they're almost certainly:
- `google.ads.googleads.v23.common.Metrics`
- `google.ads.googleads.v23.common.Segments`

If they live in different files or packages, use the real names.

- [ ] **Step 2: Modify `src/codegen/index.ts` to invoke `emitGaqlCatalog` after the existing pass**

Read the current `index.ts` first, then add after the existing generated file writes:

```ts
import { emitGaqlCatalog } from "./gaql-emitter.ts";

// ... existing code that produces root and writes resources/enums/services ...

// GAQL catalog
const gaqlCatalog = emitGaqlCatalog(root, {
  resourcesPackagePrefix: "google.ads.googleads.v23.resources",
  metricsMessageFullName: "google.ads.googleads.v23.common.Metrics",
  segmentsMessageFullName: "google.ads.googleads.v23.common.Segments",
});

const GAQL_OUT = path.join(OUT, "gaql");
await fs.mkdir(GAQL_OUT, { recursive: true });
await fs.mkdir(path.join(GAQL_OUT, "resources"), { recursive: true });

for (const [name, _r] of gaqlCatalog.resources) {
  await writeFile(path.join(GAQL_OUT, "resources", `${name}.ts`), gaqlCatalog.renderResourceFile(name));
}
await writeFile(path.join(GAQL_OUT, "metrics.ts"), gaqlCatalog.renderMetricsFile());
await writeFile(path.join(GAQL_OUT, "segments.ts"), gaqlCatalog.renderSegmentsFile());
await writeFile(path.join(GAQL_OUT, "field-map.ts"), gaqlCatalog.renderFieldMapFile());
await writeFile(path.join(GAQL_OUT, "resource-map.ts"), gaqlCatalog.renderResourceMapFile());
await writeFile(path.join(GAQL_OUT, "index.ts"), gaqlCatalog.renderIndexFile());

console.log(
  `[codegen] gaql: ${gaqlCatalog.resources.size} resources, ${gaqlCatalog.metrics.length} metrics, ${gaqlCatalog.segments.length} segments`,
);
```

Note: `OUT` is the existing variable pointing at `src/generated/v23`.

- [ ] **Step 3: Run codegen**

```bash
cd packages/google-ads-sdk && bun run codegen
```
Expected: output includes `[codegen] gaql: ~150 resources, ~250 metrics, ~100 segments`.

If the emitter crashes, fix it — common issues:
- A resource message with no fields (skip cleanly)
- A map field (already skipped in Task 1)
- A deeply nested oneof (the walker handles each oneof member as a regular field; should be fine)
- An enum/message reference that `resolveType` can't resolve (check the `pickEnumImport` helper)

- [ ] **Step 4: Typecheck generated output AND measure perf**

```bash
cd packages/google-ads-sdk && time bun run typecheck
```
Expected: clean typecheck. Note the elapsed time.

**Performance budget:** if `tsc --noEmit` takes more than 30 seconds on the full workspace, stop and split `FieldMap` into declaration-merged interfaces before proceeding. The split strategy:

- `renderFieldMapFile()` writes multiple `interface FieldMap { ... }` blocks, one per top-level namespace (`campaign`, `ad_group`, etc.) plus one for metrics and one for segments
- TS merges them into a single `FieldMap` type
- Each file lazily loads only what it needs

If perf is fine (under 30s), keep the monolithic form and move on.

If you have to change the emitter, update `gaql-emitter.test.ts` to match the new renderer output, re-run tests, then re-run codegen + typecheck.

- [ ] **Step 5: Commit**

Commit emitter changes first (if any), then the generated output:

```bash
cd /Users/ruizeli/dev/meta-business-sdk-ts

# If gaql-emitter.ts changed:
git add packages/google-ads-sdk/src/codegen/gaql-emitter.ts packages/google-ads-sdk/tests/codegen/gaql-emitter.test.ts
git commit -m "fix(google-ads-sdk): adjust GAQL emitter for real v23 protos"

# Then orchestrator + generated output:
git add packages/google-ads-sdk/src/codegen/index.ts packages/google-ads-sdk/src/generated/v23/gaql/
git commit -m "feat(google-ads-sdk): generate v23 GAQL field catalog"
```

- [ ] **Step 6: Run existing tests**

```bash
cd packages/google-ads-sdk && bun test tests/
```
Expected: all existing tests still pass. The generated GAQL folder shouldn't affect them.

---

## Task 3: QueryBuilder class + serialize + RowOf types

**Files:**
- Create: `packages/google-ads-sdk/src/clients/gaql/serialize.ts`
- Create: `packages/google-ads-sdk/src/clients/gaql/builder.ts`
- Create: `packages/google-ads-sdk/tests/clients/gaql/serialize.test.ts`

- [ ] **Step 1: Write failing `tests/clients/gaql/serialize.test.ts`**

```ts
import { test, expect } from "bun:test";
import { serialize } from "../../../src/clients/gaql/serialize.ts";

test("serialize minimum query", () => {
  expect(
    serialize({
      from: "campaign",
      select: ["campaign.id", "campaign.name"],
    }),
  ).toBe("SELECT campaign.id, campaign.name FROM campaign");
});

test("serialize with where/order/limit/parameters", () => {
  expect(
    serialize({
      from: "ad_group",
      select: ["ad_group.id"],
      where: "ad_group.status = 'ENABLED'",
      orderBy: "ad_group.id",
      limit: 100,
      parameters: "include_drafts=true",
    }),
  ).toBe(
    "SELECT ad_group.id FROM ad_group WHERE ad_group.status = 'ENABLED' ORDER BY ad_group.id LIMIT 100 PARAMETERS include_drafts=true",
  );
});

test("serialize throws on empty select", () => {
  expect(() =>
    serialize({ from: "campaign", select: [] }),
  ).toThrow(/at least one field/);
});
```

- [ ] **Step 2: Run — verify fail**

- [ ] **Step 3: Implement `src/clients/gaql/serialize.ts`**

```ts
export interface QueryState<FromR extends string, Sel extends string> {
  readonly from: FromR;
  readonly select: readonly Sel[];
  readonly where?: string;
  readonly orderBy?: string;
  readonly limit?: number;
  readonly parameters?: string;
}

export function serialize<R extends string, S extends string>(
  state: QueryState<R, S>,
): string {
  if (state.select.length === 0) {
    throw new Error("gaql: select() must be called with at least one field");
  }
  const parts: string[] = [
    `SELECT ${state.select.join(", ")}`,
    `FROM ${state.from}`,
  ];
  if (state.where) parts.push(`WHERE ${state.where}`);
  if (state.orderBy) parts.push(`ORDER BY ${state.orderBy}`);
  if (state.limit !== undefined) parts.push(`LIMIT ${state.limit}`);
  if (state.parameters) parts.push(`PARAMETERS ${state.parameters}`);
  return parts.join(" ");
}
```

- [ ] **Step 4: Run tests — pass**

- [ ] **Step 5: Implement `src/clients/gaql/builder.ts`**

```ts
import type { HttpClient } from "@promobase/sdk-runtime";
import type { FieldInfo, FieldMap } from "../../generated/v23/gaql/field-map.ts";
import type { GaqlResource, ResourceFieldMap } from "../../generated/v23/gaql/resource-map.ts";
import { googleAdsService } from "../../generated/v23/services/index.ts";
import { paginate } from "../../pagination.ts";
import { serialize, type QueryState } from "./serialize.ts";

type SplitDots<S extends string> =
  S extends `${infer H}.${infer T}` ? [H, ...SplitDots<T>] : [S];

type SetPath<Root, Path extends readonly string[], V> =
  Path extends readonly [infer Head extends string, ...infer Rest extends string[]]
    ? Rest extends readonly []
      ? Root & { [K in Head]: V }
      : Root & {
          [K in Head]: SetPath<
            Root extends Record<Head, infer Sub> ? Sub : Record<string, unknown>,
            Rest,
            V
          >;
        }
    : Root;

type ContributionOf<K extends string> =
  K extends keyof FieldMap
    ? FieldMap[K] extends FieldInfo<infer NS, infer P, infer T>
      ? SetPath<{}, [NS, ...SplitDots<P>], T>
      : never
    : never;

type UnionToIntersection<U> =
  (U extends unknown ? (_: U) => void : never) extends (_: infer I) => void ? I : never;

export type RowOf<Sel extends string> = UnionToIntersection<ContributionOf<Sel>>;

export class QueryBuilder<FromR extends GaqlResource, Sel extends string = never> {
  constructor(readonly state: QueryState<FromR, Sel>) {}

  select<F extends ResourceFieldMap[FromR] & string>(
    ...fields: readonly F[]
  ): QueryBuilder<FromR, Sel | F> {
    return new QueryBuilder({
      ...this.state,
      select: [...this.state.select, ...fields] as readonly (Sel | F)[],
    });
  }

  where(clause: string): QueryBuilder<FromR, Sel> {
    return new QueryBuilder({ ...this.state, where: clause });
  }

  orderBy(clause: string): QueryBuilder<FromR, Sel> {
    return new QueryBuilder({ ...this.state, orderBy: clause });
  }

  limit(n: number): QueryBuilder<FromR, Sel> {
    return new QueryBuilder({ ...this.state, limit: n });
  }

  parameters(clause: string): QueryBuilder<FromR, Sel> {
    return new QueryBuilder({ ...this.state, parameters: clause });
  }

  toQuery(): string {
    return serialize(this.state);
  }

  async execute(
    client: HttpClient,
    customerId: string,
  ): Promise<{ rows: RowOf<Sel>[]; nextPageToken?: string }> {
    const res = await googleAdsService.search(client, customerId, {
      query: this.toQuery(),
    });
    return {
      rows: (res.results ?? []) as RowOf<Sel>[],
      nextPageToken: res.nextPageToken,
    };
  }

  stream(client: HttpClient, customerId: string): AsyncIterable<RowOf<Sel>> {
    const query = this.toQuery();
    return (async function* () {
      for await (const row of paginate(
        (req) => googleAdsService.search(client, customerId, req),
        { query },
      )) {
        yield row as RowOf<Sel>;
      }
    })();
  }

  async toArray(client: HttpClient, customerId: string): Promise<RowOf<Sel>[]> {
    const out: RowOf<Sel>[] = [];
    for await (const row of this.stream(client, customerId)) out.push(row);
    return out;
  }

  async take(n: number, client: HttpClient, customerId: string): Promise<RowOf<Sel>[]> {
    const out: RowOf<Sel>[] = [];
    for await (const row of this.stream(client, customerId)) {
      out.push(row);
      if (out.length >= n) break;
    }
    return out;
  }

  async first(client: HttpClient, customerId: string): Promise<RowOf<Sel> | null> {
    for await (const row of this.stream(client, customerId)) return row;
    return null;
  }
}

export const gaql = {
  from<R extends GaqlResource>(resource: R): QueryBuilder<R, never> {
    return new QueryBuilder({ from: resource, select: [] });
  },
};
```

- [ ] **Step 6: Write failing `tests/clients/gaql/execute.test.ts`**

```ts
import { test, expect, mock } from "bun:test";
import { HttpClient } from "@promobase/sdk-runtime";
import { gaql } from "../../../src/clients/gaql/builder.ts";

function makeClient(respond: (url: string, init?: RequestInit) => Response): HttpClient {
  const fetchMock = mock(async (url: string, init?: RequestInit) => respond(url, init));
  return new HttpClient({
    baseUrl: "https://googleads.googleapis.com",
    getHeaders: async () => ({ authorization: "Bearer tok" }),
    fetch: fetchMock as unknown as typeof fetch,
    retry: { maxRetries: 0 },
  });
}

test("execute posts serialized GAQL and returns rows", async () => {
  let body: any;
  const client = makeClient((url, init) => {
    body = JSON.parse(init?.body as string);
    expect(url).toContain("/v23/customers/123/googleAds:search");
    return new Response(
      JSON.stringify({
        results: [
          { campaign: { id: "1", name: "A" } },
          { campaign: { id: "2", name: "B" } },
        ],
      }),
      { status: 200 },
    );
  });
  const res = await gaql
    .from("campaign")
    .select("campaign.id", "campaign.name")
    .execute(client, "123");

  expect(body.query).toBe("SELECT campaign.id, campaign.name FROM campaign");
  expect(res.rows).toHaveLength(2);
  expect(res.rows[0]!.campaign.id).toBe("1");
});

test("stream paginates through nextPageToken", async () => {
  let call = 0;
  const client = makeClient(() => {
    call++;
    if (call === 1) {
      return new Response(
        JSON.stringify({
          results: [{ campaign: { id: "1" } }, { campaign: { id: "2" } }],
          nextPageToken: "p2",
        }),
        { status: 200 },
      );
    }
    return new Response(
      JSON.stringify({ results: [{ campaign: { id: "3" } }] }),
      { status: 200 },
    );
  });

  const out: string[] = [];
  for await (const row of gaql
    .from("campaign")
    .select("campaign.id")
    .stream(client, "123")) {
    out.push(row.campaign.id);
  }
  expect(out).toEqual(["1", "2", "3"]);
});

test("toArray/take/first work", async () => {
  const client = makeClient(() =>
    new Response(
      JSON.stringify({
        results: [
          { campaign: { id: "1" } },
          { campaign: { id: "2" } },
          { campaign: { id: "3" } },
        ],
      }),
      { status: 200 },
    ),
  );

  const all = await gaql.from("campaign").select("campaign.id").toArray(client, "123");
  expect(all.map((r) => r.campaign.id)).toEqual(["1", "2", "3"]);

  const two = await gaql.from("campaign").select("campaign.id").take(2, client, "123");
  expect(two).toHaveLength(2);

  const firstRow = await gaql.from("campaign").select("campaign.id").first(client, "123");
  expect(firstRow?.campaign.id).toBe("1");
});
```

- [ ] **Step 7: Run tests + typecheck**

```bash
cd packages/google-ads-sdk && bun test tests/clients/gaql/ && bun run typecheck
```
Expected: all PASS, clean.

If typecheck fails on `RowOf<Sel>` being `unknown` because some field lookup fails, verify that the test is using field literals that actually exist in `FieldMap` (i.e., fields that Task 2 generated). If `campaign.id` isn't in the generated map, something went wrong upstream — fix Task 2 before continuing.

- [ ] **Step 8: Commit**

```bash
cd /Users/ruizeli/dev/meta-business-sdk-ts
git add packages/google-ads-sdk/src/clients/gaql/serialize.ts packages/google-ads-sdk/src/clients/gaql/builder.ts packages/google-ads-sdk/tests/clients/gaql/serialize.test.ts packages/google-ads-sdk/tests/clients/gaql/execute.test.ts
git commit -m "feat(google-ads-sdk): add typed GAQL query builder"
```

---

## Task 4: Bound query builder + customer integration

**Files:**
- Create: `packages/google-ads-sdk/src/clients/gaql/bound.ts`
- Create: `packages/google-ads-sdk/src/clients/gaql/index.ts`
- Modify: `packages/google-ads-sdk/src/clients/customer.ts`
- Modify: `packages/google-ads-sdk/src/clients/index.ts`
- Modify: `packages/google-ads-sdk/src/namespace.ts`
- Modify: `packages/google-ads-sdk/src/index.ts`
- Create: `packages/google-ads-sdk/tests/clients/gaql/customer.test.ts`

- [ ] **Step 1: Implement `src/clients/gaql/bound.ts`**

```ts
import type { HttpClient } from "@promobase/sdk-runtime";
import type { GaqlResource, ResourceFieldMap } from "../../generated/v23/gaql/resource-map.ts";
import { QueryBuilder, type RowOf } from "./builder.ts";

export class BoundQueryBuilder<FromR extends GaqlResource, Sel extends string = never> {
  constructor(
    private readonly inner: QueryBuilder<FromR, Sel>,
    private readonly client: HttpClient,
    private readonly customerId: string,
  ) {}

  select<F extends ResourceFieldMap[FromR] & string>(
    ...fields: readonly F[]
  ): BoundQueryBuilder<FromR, Sel | F> {
    return new BoundQueryBuilder(this.inner.select(...fields), this.client, this.customerId);
  }

  where(clause: string): BoundQueryBuilder<FromR, Sel> {
    return new BoundQueryBuilder(this.inner.where(clause), this.client, this.customerId);
  }

  orderBy(clause: string): BoundQueryBuilder<FromR, Sel> {
    return new BoundQueryBuilder(this.inner.orderBy(clause), this.client, this.customerId);
  }

  limit(n: number): BoundQueryBuilder<FromR, Sel> {
    return new BoundQueryBuilder(this.inner.limit(n), this.client, this.customerId);
  }

  parameters(clause: string): BoundQueryBuilder<FromR, Sel> {
    return new BoundQueryBuilder(this.inner.parameters(clause), this.client, this.customerId);
  }

  toQuery(): string {
    return this.inner.toQuery();
  }

  execute(): Promise<{ rows: RowOf<Sel>[]; nextPageToken?: string }> {
    return this.inner.execute(this.client, this.customerId);
  }

  stream(): AsyncIterable<RowOf<Sel>> {
    return this.inner.stream(this.client, this.customerId);
  }

  toArray(): Promise<RowOf<Sel>[]> {
    return this.inner.toArray(this.client, this.customerId);
  }

  take(n: number): Promise<RowOf<Sel>[]> {
    return this.inner.take(n, this.client, this.customerId);
  }

  first(): Promise<RowOf<Sel> | null> {
    return this.inner.first(this.client, this.customerId);
  }
}

export function gaqlFactory(client: HttpClient, customerId: string) {
  return {
    from<R extends GaqlResource>(resource: R): BoundQueryBuilder<R, never> {
      return new BoundQueryBuilder(
        new QueryBuilder({ from: resource, select: [] }),
        client,
        customerId,
      );
    },
  };
}
```

- [ ] **Step 2: Create `src/clients/gaql/index.ts`**

```ts
export { QueryBuilder, gaql, type RowOf } from "./builder.ts";
export { BoundQueryBuilder, gaqlFactory } from "./bound.ts";
export type { QueryState } from "./serialize.ts";
```

- [ ] **Step 3: Modify `src/clients/customer.ts`**

Read the existing file. Add `gaql` field to `Customer` and wire it in `createCustomer`:

```ts
import type { HttpClient } from "@promobase/sdk-runtime";
import { campaignBudgets } from "./campaign-budgets.ts";
import { campaigns } from "./campaigns.ts";
import { adGroups } from "./ad-groups.ts";
import { adGroupAds } from "./ad-group-ads.ts";
import { ads } from "./ads.ts";
import { gaqlFactory } from "./gaql/bound.ts";

export interface Customer {
  campaignBudgets: ReturnType<typeof campaignBudgets>;
  campaigns: ReturnType<typeof campaigns>;
  adGroups: ReturnType<typeof adGroups>;
  adGroupAds: ReturnType<typeof adGroupAds>;
  ads: ReturnType<typeof ads>;
  gaql: ReturnType<typeof gaqlFactory>;
}

export function createCustomer(client: HttpClient, customerId: string): Customer {
  return {
    campaignBudgets: campaignBudgets(client, customerId),
    campaigns: campaigns(client, customerId),
    adGroups: adGroups(client, customerId),
    adGroupAds: adGroupAds(client, customerId),
    ads: ads(client, customerId),
    gaql: gaqlFactory(client, customerId),
  };
}
```

- [ ] **Step 4: Modify `src/clients/index.ts`**

Append:

```ts
export { QueryBuilder, BoundQueryBuilder, gaql, gaqlFactory } from "./gaql/index.ts";
export type { RowOf, QueryState } from "./gaql/index.ts";
```

- [ ] **Step 5: Modify `src/namespace.ts`**

Add `gaql` import and to `Google.Ads`:

```ts
import { gaql } from "./clients/gaql/builder.ts";

export const Google = {
  createClient,
  Ads: {
    ...services,
    paginate,
    customer: (client: GoogleAdsClient, customerId: string) =>
      createCustomer(client.http, customerId),
    gaql,
  },
  Errors: { GoogleAdsError },
} as const;
```

- [ ] **Step 6: Modify `src/index.ts`**

Append:

```ts
export { QueryBuilder, gaql } from "./clients/gaql/builder.ts";
export { BoundQueryBuilder, gaqlFactory } from "./clients/gaql/bound.ts";
export type { RowOf } from "./clients/gaql/builder.ts";
```

- [ ] **Step 7: Write `tests/clients/gaql/customer.test.ts`**

```ts
import { test, expect, mock } from "bun:test";
import { Google } from "../../../src/index.ts";

test("customer.gaql binds client + customerId", async () => {
  const calls: { url: string; body: any }[] = [];
  const fetchMock = mock(async (url: string, init?: RequestInit) => {
    calls.push({ url, body: init?.body ? JSON.parse(init.body as string) : null });
    return new Response(
      JSON.stringify({
        results: [{ campaign: { id: "1", name: "A" } }],
      }),
      { status: 200 },
    );
  });

  const client = Google.createClient({
    getAccessToken: async () => "tok",
    developerToken: "dev",
    fetch: fetchMock as unknown as typeof fetch,
    retry: { maxRetries: 0 },
  });
  const customer = Google.Ads.customer(client, "123");

  const row = await customer.gaql
    .from("campaign")
    .select("campaign.id", "campaign.name")
    .limit(1)
    .first();

  expect(calls).toHaveLength(1);
  expect(calls[0]!.url).toContain("/v23/customers/123/googleAds:search");
  expect(calls[0]!.body.query).toBe(
    "SELECT campaign.id, campaign.name FROM campaign LIMIT 1",
  );
  expect(row?.campaign.id).toBe("1");
});

test("Google.Ads.gaql unbound requires explicit client + customerId", async () => {
  const fetchMock = mock(async () =>
    new Response(JSON.stringify({ results: [] }), { status: 200 }),
  );
  const client = Google.createClient({
    getAccessToken: async () => "tok",
    developerToken: "dev",
    fetch: fetchMock as unknown as typeof fetch,
    retry: { maxRetries: 0 },
  });

  const { rows } = await Google.Ads.gaql
    .from("campaign")
    .select("campaign.id")
    .execute(client.http, "999");
  expect(rows).toEqual([]);
});
```

- [ ] **Step 8: Run tests + typecheck**

```bash
cd packages/google-ads-sdk && bun test tests/ && bun run typecheck
```
Expected: all PASS, clean.

- [ ] **Step 9: Commit**

```bash
cd /Users/ruizeli/dev/meta-business-sdk-ts
git add packages/google-ads-sdk/src/clients/gaql/bound.ts packages/google-ads-sdk/src/clients/gaql/index.ts packages/google-ads-sdk/src/clients/customer.ts packages/google-ads-sdk/src/clients/index.ts packages/google-ads-sdk/src/namespace.ts packages/google-ads-sdk/src/index.ts packages/google-ads-sdk/tests/clients/gaql/customer.test.ts
git commit -m "feat(google-ads-sdk): wire GAQL builder into customer factory and namespace"
```

---

## Task 5: Type-safety probe extension

**Files:**
- Modify: `packages/google-ads-sdk/tests/type-safety.check.ts`

- [ ] **Step 1: Append GAQL probes**

Read the existing file first. Add these at the end (before the final `void [...]` statement). Update that statement to reference the new symbols:

```ts
// 9. GAQL builder type safety.
import type { RowOf } from "../src/clients/gaql/builder.ts";

async function gaqlChecks() {
  // Good: field literal accepted, row narrowed
  const customer = Google.Ads.customer(client, "123");
  const result = await customer.gaql
    .from("campaign")
    .select("campaign.id", "campaign.name", "metrics.clicks")
    .limit(10)
    .execute();

  // row shape check: both namespaces present with the selected fields
  const row = result.rows[0]!;
  const id: string = row.campaign.id;
  const name: string = row.campaign.name;
  const clicks: string = row.metrics.clicks;
  void [id, name, clicks];

  // @ts-expect-error — "bogus.field" not in the catalog
  await customer.gaql.from("campaign").select("bogus.field").execute();

  // @ts-expect-error — FROM "not_a_resource" not in GaqlResource
  await customer.gaql.from("not_a_resource").select("campaign.id").execute();

  // Selecting a field that belongs to a different FROM is rejected
  // @ts-expect-error — ad_group.id is not valid with FROM campaign (wrong resource field union)
  await customer.gaql.from("campaign").select("ad_group.id").execute();
}

// 10. RowOf<> assertions via explicit type assignment.
type Row1 = RowOf<"campaign.id">;
const row1Check: Row1 = { campaign: { id: "abc" } };
void row1Check;

type Row2 = RowOf<"campaign.id" | "metrics.clicks">;
const row2Check: Row2 = {
  campaign: { id: "1" },
  metrics: { clicks: "42" },
};
void row2Check;
```

Then update the final line:

```ts
void [good1, bad1, goodCampaign, badCampaign1, badCampaign2, badCampaign3, badClient, searchOk, searchBad, mutateOk, mutateBad, handle, specPaginateExample, wrapperChecks, gaqlChecks];
```

- [ ] **Step 2: Typecheck**

```bash
cd packages/google-ads-sdk && bun run typecheck
```
Expected: clean. Every `@ts-expect-error` must catch a real error; no unused directives.

If a `@ts-expect-error` is reported as unused, the type constraint isn't working. Most likely cause: the field literal lookup isn't filtering by FROM resource. Fix `QueryBuilder.select` to use `ResourceFieldMap[FromR]`, not a generic field union.

If `Row1`/`Row2` assertions fail, `RowOf<>` isn't producing the expected shape. Debug by hovering the type in the editor or writing a temporary `type Debug = RowOf<"campaign.id">` and checking what TS reports.

- [ ] **Step 3: Run all tests one more time**

```bash
cd packages/google-ads-sdk && bun test tests/
```
Expected: all PASS.

- [ ] **Step 4: Commit**

```bash
cd /Users/ruizeli/dev/meta-business-sdk-ts
git add packages/google-ads-sdk/tests/type-safety.check.ts
git commit -m "test(google-ads-sdk): extend type-safety probe for GAQL builder"
```

---

## Done criteria

- [ ] `bun run codegen` produces `src/generated/v23/gaql/**` with per-resource field unions + master `FieldMap`.
- [ ] `Google.Ads.gaql.from("campaign").select("campaign.id").execute(client.http, "123")` compiles and runs.
- [ ] `customer.gaql.from(...).select(...).first()` compiles and runs, bound to the customer.
- [ ] Selected fields are rejected at compile time if not in the catalog for the FROM.
- [ ] `RowOf<Sel>` produces a deep nested object with correct leaf types (including narrowed enums).
- [ ] `bun test tests/` passes all existing tests plus new serialize/execute/customer/emitter tests.
- [ ] `bun run typecheck` is clean on `sdk-runtime`, `google-ads-sdk`, `ad-platforms`.
- [ ] Codegen + typecheck time on the full workspace is under 30 seconds.

## Deferred

- Typed WHERE clause helpers (operator builders, IN, BETWEEN, date literals)
- Compatibility matrix enforcement (which segments work with which FROM)
- ORDER BY / GROUP BY narrowing
- Nested message field selection
- GAQL parameters as typed inputs
- AI SDK tool wrapper around the builder
