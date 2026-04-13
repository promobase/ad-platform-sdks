# Google Ads Typed GAQL Builder — Design Spec

**Date:** 2026-04-12
**Package:** `@promobase/google-ads-sdk` (additive)
**Status:** Approved, ready for implementation plan

## Goal

Ship a typed GAQL query builder so callers get autocomplete on the ~10k selectable field literals, compile-time rejection of invalid field names, and row result types narrowed to exactly the fields selected.

## Motivation

Today, running GAQL from the SDK looks like:

```ts
const { results } = await googleAdsService.search(client.http, "123", {
  query: "SELECT campaign.id, campaign.name, metrics.clicks FROM campaign WHERE campaign.status = 'ENABLED'",
});
// results: GoogleAdsRow[] — all fields optional, no narrowing
```

No autocomplete on field names, no narrowing on row shape, typos caught only at runtime via API errors. For a reporting-heavy product (openpromo's growth dashboards), this is the single biggest DX gap in the SDK.

## Non-goals (v1)

- **Typed WHERE clause.** WHERE stays raw string. Operator helpers deferred to a follow-up.
- **Compatibility matrix enforcement.** Selecting `segments.date` with `FROM customer` may fail at runtime — we don't stop it at the type level.
- **ORDER BY / GROUP BY narrowing.** These stay raw strings too.
- **Nested message selection.** Only scalar leaves are selectable. GAQL itself follows this rule.
- **Parameters/named arguments in GAQL.** Raw string only.

## Scope

1. Extend the existing codegen pipeline to emit a new `src/generated/v23/gaql/` folder containing field-literal unions per resource, plus a master `FieldMap` from literal → response path + TS type.
2. Ship a phantom-typed `QueryBuilder` class with chainable `.from / .select / .where / .orderBy / .limit / .parameters / .execute / .stream / .toQuery / .toArray / .take / .first`.
3. Row narrowing via `RowOf<Sel>` — a type helper that converts a selected-field union into a deep nested object shape with snake_case namespaces and camelCase leaves.
4. Integrate with the existing `customer` factory as `customer.gaql`. Also expose `Google.Ads.gaql` as an unbound entry point.

## File structure

```
packages/google-ads-sdk/src/
├── codegen/
│   ├── gaql-emitter.ts        (new) — walks protos, emits gaql/*
│   └── index.ts               (modified) — invoke gaql-emitter in orchestrator
├── clients/
│   ├── gaql/
│   │   ├── builder.ts         (new) — QueryBuilder class, RowOf<>, types
│   │   ├── serialize.ts       (new) — QueryState → GAQL string
│   │   ├── bound.ts           (new) — customer-bound factory
│   │   └── index.ts           (new) — barrel + Google.Ads.gaql entry
│   ├── customer.ts            (modified) — add gaql to Customer
│   └── index.ts               (modified) — re-exports
├── generated/v23/gaql/
│   ├── resources/             (generated) — one file per FROM (campaign.ts, ad_group.ts, ...)
│   ├── metrics.ts             (generated) — all metrics.* field literals
│   ├── segments.ts            (generated) — all segments.* field literals
│   ├── field-map.ts           (generated) — master literal → path/type map
│   ├── resource-map.ts        (generated) — FROM resource name → its selectable field union
│   └── index.ts               (generated) — barrel
└── namespace.ts               (modified) — expose Google.Ads.gaql

tests/
├── codegen/
│   └── gaql-emitter.test.ts   (new) — unit tests against fixture protos
├── clients/
│   ├── gaql/
│   │   ├── serialize.test.ts  (new) — builder → GAQL string
│   │   ├── execute.test.ts    (new) — mocked fetch round-trip
│   │   └── customer.test.ts   (new) — bound factory integration
└── type-safety.check.ts       (modified) — RowOf<> probes
```

## Field catalog codegen

The existing codegen already walks `vendor/googleapis/google/ads/googleads/v23/**/*.proto`. A new `gaql-emitter.ts` joins the pipeline and:

1. For each proto under `v23/resources/`, walk all scalar leaf fields (recursing through nested message fields) and emit a snake_case path like `campaign.network_settings.target_google_search`. Collect these per resource.
2. For each proto under `v23/common/` that defines metrics (likely `metrics.proto`), walk leaves and emit `metrics.clicks`, `metrics.cost_micros`, etc.
3. Same for `segments.proto`.
4. For each field, record `{ namespace, gaqlKey, camelPath, tsType }` — `camelPath` is the response-shape path (`advertisingChannelType`), `tsType` is the resolved TS type (`AdvertisingChannelType`, `string`, `number`, `string[]`).
5. Emit one file per FROM resource under `gaql/resources/`, plus `metrics.ts`, `segments.ts`, `field-map.ts`, `resource-map.ts`, `index.ts`.

**Example emitted `gaql/resources/campaign.ts`:**

```ts
// Generated. Do not edit by hand.
export type CampaignSelectableField =
  | "campaign.id"
  | "campaign.name"
  | "campaign.status"
  | "campaign.advertising_channel_type"
  | "campaign.network_settings.target_google_search"
  | ...;
```

**Example emitted `gaql/field-map.ts`:**

```ts
// Generated. Do not edit by hand.
import type { AdvertisingChannelType } from "../enums/AdvertisingChannelType.ts";
import type { CampaignStatus } from "../enums/CampaignStatus.ts";
// ... ~200 more imports

export interface FieldInfo<NS extends string, P extends string, T> {
  namespace: NS;
  path: P;
  tsType: T;
}

export type FieldMap = {
  "campaign.id": FieldInfo<"campaign", "id", string>;
  "campaign.name": FieldInfo<"campaign", "name", string>;
  "campaign.advertising_channel_type": FieldInfo<"campaign", "advertisingChannelType", AdvertisingChannelType>;
  "campaign.network_settings.target_google_search": FieldInfo<"campaign", "networkSettings.targetGoogleSearch", boolean>;
  "metrics.clicks": FieldInfo<"metrics", "clicks", string>;
  ...
};
```

`tsType` is a phantom — it exists only in the type system. At runtime `FieldMap` is just `{}`. That keeps the generated file mostly types; the only runtime impact is the imports, which TS erases to nothing.

**Example emitted `gaql/resource-map.ts`:**

```ts
import type { CampaignSelectableField } from "./resources/campaign.ts";
import type { AdGroupSelectableField } from "./resources/ad_group.ts";
// ...
import type { MetricField } from "./metrics.ts";
import type { SegmentField } from "./segments.ts";

export type ResourceFieldMap = {
  campaign: CampaignSelectableField | MetricField | SegmentField;
  ad_group: AdGroupSelectableField | MetricField | SegmentField;
  ...
};

export type GaqlResource = keyof ResourceFieldMap;
```

**Notes on the walker:**

- A "leaf" is a scalar-typed field (string/number/bool/enum/repeated scalar). Message-typed fields are recursed into for path extension but are not themselves selectable.
- Repeated scalars become `T[]` in `tsType` and are still selectable. Repeated messages are walked for nested leaves.
- `oneof` groups don't affect selectability — each member is walked independently.
- Proto `google.protobuf.Int64Value` etc. unwrap to the existing wrapper rules (`string` for int64).
- Well-known types (`Timestamp` → `string`) match the existing resolver.
- Recursion is capped at depth 6 as a safety net against accidental cycles (none expected in v23).

**GAQL "views":** some FROM clauses (`search_term_view`, `geographic_view`) are queryable-only resources. Their `.proto` files live under `resources/` and look like regular messages. The walker treats them the same; the `FROM` name is derived from the file name (snake_case), not the message type name.

## Builder shape

```ts
// clients/gaql/builder.ts
import type { HttpClient } from "@promobase/sdk-runtime";
import type { FieldMap } from "../../generated/v23/gaql/field-map.ts";
import type { ResourceFieldMap, GaqlResource } from "../../generated/v23/gaql/resource-map.ts";

export interface QueryState<FromR extends GaqlResource, Sel extends string> {
  readonly from: FromR;
  readonly select: readonly Sel[];
  readonly where?: string;
  readonly orderBy?: string;
  readonly limit?: number;
  readonly parameters?: string;
}

export class QueryBuilder<FromR extends GaqlResource, Sel extends string = never> {
  constructor(readonly state: QueryState<FromR, Sel>) {}

  select<F extends ResourceFieldMap[FromR]>(
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

  toQuery(): string { return serialize(this.state); }

  async execute(client: HttpClient, customerId: string): Promise<{
    rows: RowOf<Sel>[];
    nextPageToken?: string;
  }> {
    const res = await googleAdsService.search(client, customerId, { query: this.toQuery() });
    return {
      rows: (res.results ?? []) as RowOf<Sel>[],
      nextPageToken: res.nextPageToken,
    };
  }

  stream(client: HttpClient, customerId: string): AsyncIterable<RowOf<Sel>> {
    const state = this.state;
    return (async function* () {
      for await (const row of paginate(
        (req) => googleAdsService.search(client, customerId, req),
        { query: serialize(state) },
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
```

Free-standing entry point:

```ts
export const gaql = {
  from<R extends GaqlResource>(resource: R): QueryBuilder<R, never> {
    return new QueryBuilder({ from: resource, select: [] });
  },
};
```

## Row narrowing

```ts
// clients/gaql/builder.ts
type SplitDots<S extends string> =
  S extends `${infer H}.${infer T}` ? [H, ...SplitDots<T>] : [S];

type SetPath<Root, Path extends readonly string[], V> =
  Path extends readonly [infer Head extends string, ...infer Rest extends string[]]
    ? Rest extends readonly []
      ? Root & { [K in Head]: V }
      : Root & {
          [K in Head]: SetPath<
            Root extends Record<Head, infer Sub> ? Sub : {},
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

export type RowOf<Sel extends string> =
  UnionToIntersection<ContributionOf<Sel>>;
```

**Walk-through:** `.select("campaign.id", "metrics.clicks")`:
- `Sel` = `"campaign.id" | "metrics.clicks"`
- `ContributionOf<"campaign.id">` = `{ campaign: { id: string } }`
- `ContributionOf<"metrics.clicks">` = `{ metrics: { clicks: string } }`
- `UnionToIntersection<...>` = `{ campaign: { id: string }; metrics: { clicks: string } }`
- `RowOf<Sel>` = the above

At runtime, Google Ads search responses return exactly that shape (proto3 JSON is camelCase, deeply nested). No transformation needed — the `as RowOf<Sel>` cast is safe by construction.

## Serialization

```ts
// clients/gaql/serialize.ts
export function serialize<R extends string, S extends string>(state: QueryState<R, S>): string {
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

No escaping because we don't interpolate user data into the WHERE/ORDER BY strings — those are passed through verbatim. The field list is already compile-time-checked against `ResourceFieldMap[FromR]`.

## Customer factory integration

```ts
// clients/gaql/bound.ts
import type { HttpClient } from "@promobase/sdk-runtime";
import type { GaqlResource } from "../../generated/v23/gaql/resource-map.ts";
import { QueryBuilder } from "./builder.ts";

export function gaqlFactory(client: HttpClient, customerId: string) {
  return {
    from<R extends GaqlResource>(resource: R) {
      return new BoundQueryBuilder(
        new QueryBuilder({ from: resource, select: [] }),
        client,
        customerId,
      );
    },
  };
}

class BoundQueryBuilder<FromR extends GaqlResource, Sel extends string = never> {
  constructor(
    private readonly inner: QueryBuilder<FromR, Sel>,
    private readonly client: HttpClient,
    private readonly customerId: string,
  ) {}

  select<F extends ResourceFieldMap[FromR]>(
    ...fields: readonly F[]
  ): BoundQueryBuilder<FromR, Sel | F> {
    return new BoundQueryBuilder(this.inner.select(...fields), this.client, this.customerId);
  }

  where(clause: string) { return new BoundQueryBuilder(this.inner.where(clause), this.client, this.customerId); }
  orderBy(clause: string) { return new BoundQueryBuilder(this.inner.orderBy(clause), this.client, this.customerId); }
  limit(n: number) { return new BoundQueryBuilder(this.inner.limit(n), this.client, this.customerId); }
  parameters(clause: string) { return new BoundQueryBuilder(this.inner.parameters(clause), this.client, this.customerId); }

  toQuery() { return this.inner.toQuery(); }
  execute() { return this.inner.execute(this.client, this.customerId); }
  stream() { return this.inner.stream(this.client, this.customerId); }
  toArray() { return this.inner.toArray(this.client, this.customerId); }
  take(n: number) { return this.inner.take(n, this.client, this.customerId); }
  first() { return this.inner.first(this.client, this.customerId); }
}
```

Wired into `createCustomer`:

```ts
return {
  campaignBudgets: campaignBudgets(client, customerId),
  campaigns: campaigns(client, customerId),
  adGroups: adGroups(client, customerId),
  adGroupAds: adGroupAds(client, customerId),
  ads: ads(client, customerId),
  gaql: gaqlFactory(client, customerId),
};
```

Namespace:

```ts
export const Google = {
  createClient,
  Ads: {
    ...services,
    paginate,
    customer: ...,
    gaql,  // unbound entry point — uses explicit client/customerId at execute()
  },
  Errors: { GoogleAdsError },
} as const;
```

## Consumer usage

```ts
const customer = Google.Ads.customer(client, "123");

// Single page
const { rows } = await customer.gaql
  .from("campaign")
  .select("campaign.id", "campaign.name", "campaign.status", "metrics.clicks")
  .where("campaign.status = 'ENABLED'")
  .limit(100)
  .execute();

// rows is:
//   Array<{
//     campaign: { id: string; name: string; status: CampaignStatus };
//     metrics: { clicks: string };
//   }>

for (const row of rows) {
  console.log(row.campaign.id, row.campaign.name, row.metrics.clicks);
  // row.campaign.status has narrowed CampaignStatus type
}

// Streaming
for await (const row of customer.gaql
  .from("ad_group_ad")
  .select("ad_group_ad.resource_name", "ad_group_ad.ad.id", "metrics.impressions")
  .stream()) {
  // row is narrowed: { adGroupAd: { resourceName: string; ad: { id: string } }; metrics: { impressions: string } }
}

// Unbound (explicit client + customerId)
const rows2 = await Google.Ads.gaql
  .from("customer")
  .select("customer.id", "customer.descriptive_name")
  .execute(client.http, "123");
```

## Testing

1. **Codegen emitter unit tests** (`tests/codegen/gaql-emitter.test.ts`) — point at fixture protos that include a resource with scalar + enum + repeated + nested message fields. Assert:
   - Field literal union contains the expected snake_case paths
   - `FieldMap` entries have correct `namespace`/`path`/`tsType`
   - Nested fields produce dotted paths like `campaign.network_settings.target_google_search`
   - Repeated scalars marked `T[]`
   - Enum-typed fields reference the generated enum name

2. **Serialize tests** (`tests/clients/gaql/serialize.test.ts`) — build queries with various clause combinations, assert the exact GAQL output string.

3. **Execute tests** (`tests/clients/gaql/execute.test.ts`) — mocked `fetch`, assert URL, body shape, and returned row types. Empty select throws before reaching the API.

4. **Customer integration** (`tests/clients/gaql/customer.test.ts`) — `customer.gaql.from(...).first()` binds client + customerId and round-trips through paginate.

5. **Type-safety probe** (`tests/type-safety.check.ts`) — add:
   - `.select("bogus.field")` rejected at compile time
   - `RowOf<"campaign.id">` asserts `{ campaign: { id: string } }` via explicit type assignment
   - `RowOf<"campaign.id" | "metrics.clicks">` asserts both namespaces
   - `.from("nonsense")` rejected
   - Selected enum field produces narrowed enum type in the row

## Scope risks

1. **Typecheck performance.** A single `FieldMap` with ~10k entries is the biggest risk. Mitigation options in priority order:
   - Split `FieldMap` per-resource via the module system and intersect on demand (probably not enough — `RowOf` walks the whole map).
   - Interface-merged form: multiple `interface FieldMap { ... }` blocks in separate files so TS lazily loads. TypeScript's interface merging is designed for this.
   - If neither helps, fall back to a simpler `Record<Sel, unknown>` row shape and accept lost field-level narrowing (enum types still narrow via the selected-field literal lookup).
   - Measure early — generate an initial field-map and time `tsc --noEmit` before committing to the full approach.

2. **FieldMap bundle size at runtime.** The generated file is ~10k type entries but only the imports contribute to runtime size. If we import ~200 enum types, that's ~200 zero-cost type imports. Bundle impact should be negligible. Verify.

3. **Walker completeness.** Missing a field means it's rejected at compile time even though it works at runtime — bad. Mitigation: compare the emitted field list against `GoogleAdsFieldService.search` output in a one-off script before shipping. Log any deltas.

4. **GAQL view resources.** Views like `search_term_view` live in `v23/resources/` alongside "real" resources. The walker treats them the same way. Some views have different selectable-field rules (e.g., you can only select certain metrics) — out of scope for v1, documented.

5. **Repeated message fields.** A field like `campaign.url_custom_parameters` is `repeated CustomParameter`. GAQL treats this as selectable by leaf: `campaign.url_custom_parameters` returns the whole array in the response. The walker must emit the parent path with `tsType: CustomParameter[]`, not recurse into its leaves.

6. **Nested oneof.** Proto oneof groups emit each member as a separate path. GAQL accepts any member. Handled naturally by the walker since each member is a regular field.

## Open decisions deferred to plan

- Whether to split `FieldMap` into per-namespace declaration-merged interfaces up front, or start monolithic and split if typecheck is slow.
- Whether to memoize the stringified GAQL on the builder (probably not — queries are typically built once and executed once).
- Whether `toArray()` has a `maxRows` safety cap. Default no — streaming is the opt-in for large result sets.
