# Google Ads Ergonomic Wrappers Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship hand-written ergonomic wrappers for the campaign-lifecycle resources in `@promobase/google-ads-sdk`, exposed via a `Google.Ads.customer(client, customerId)` factory.

**Architecture:** Six per-resource wrapper files under `src/clients/` plus a `types.ts` (`Ref<T>` + `resolveRef`) and a `customer.ts` factory. Wrappers compose the generated services from `src/generated/v23/services/`. No runtime magic — just closures binding `(client, customerId)` and thin `operations: [{...}]` unwrapping.

**Tech Stack:** TypeScript, Bun, `@promobase/sdk-runtime` `HttpClient`, generated v23 services.

**Spec:** `docs/superpowers/specs/2026-04-12-google-ads-ergonomic-wrappers-design.md`

---

## File Structure

All files under `packages/google-ads-sdk/src/clients/` (new directory):

- `types.ts` — `Ref<T>`, `resolveRef`
- `campaign-budgets.ts` — CampaignBudget CRUD (no refs in input)
- `campaigns.ts` — Campaign CRUD (`campaignBudget: Ref<CampaignBudget>`)
- `ad-groups.ts` — AdGroup CRUD (`campaign: Ref<Campaign>`)
- `ad-group-ads.ts` — AdGroupAd CRUD (nests full `Ad`, references `adGroup: Ref<AdGroup>`)
- `ads.ts` — Ad read-only (`get`, `list`, `remove`)
- `customer.ts` — `createCustomer(client, customerId)` factory
- `index.ts` — barrel

Modified:
- `packages/google-ads-sdk/src/namespace.ts` — add `customer` to `Google.Ads`
- `packages/google-ads-sdk/src/index.ts` — re-export `createCustomer` type
- `packages/google-ads-sdk/tests/type-safety.check.ts` — extend probe

Tests (new):
- `packages/google-ads-sdk/tests/clients/types.test.ts`
- `packages/google-ads-sdk/tests/clients/campaign-budgets.test.ts`
- `packages/google-ads-sdk/tests/clients/campaigns.test.ts`
- `packages/google-ads-sdk/tests/clients/ad-groups.test.ts`
- `packages/google-ads-sdk/tests/clients/ad-group-ads.test.ts`
- `packages/google-ads-sdk/tests/clients/ads.test.ts`
- `packages/google-ads-sdk/tests/clients/customer.test.ts`

Generated services consumed (verify these exports exist in `src/generated/v23/services/index.ts`):
- `campaignBudgetService.mutateCampaignBudgets(client, customerId, body)`
- `campaignService.mutateCampaigns(client, customerId, body)`
- `adGroupService.mutateAdGroups(client, customerId, body)`
- `adGroupAdService.mutateAdGroupAds(client, customerId, body)`
- `googleAdsService.search(client, customerId, body)` (used by all `get`/`list`)

If a method name differs, open the relevant generated service file and match the real name.

---

## Task 1: Shared types + campaign-budgets wrapper

**Scene:** First wrapper. No references in the input (CampaignBudget has no parent reference — it's top-level under the customer). Establishes the pattern every other wrapper follows: `create / createMany / update / remove / get / list`, input type is `Omit<Resource, managedFields>`, `create` returns `input & { resourceName }`.

**Files:**
- Create: `packages/google-ads-sdk/src/clients/types.ts`
- Create: `packages/google-ads-sdk/src/clients/campaign-budgets.ts`
- Create: `packages/google-ads-sdk/tests/clients/types.test.ts`
- Create: `packages/google-ads-sdk/tests/clients/campaign-budgets.test.ts`

- [ ] **Step 1: Write failing test `tests/clients/types.test.ts`**

```ts
import { test, expect } from "bun:test";
import { resolveRef } from "../../src/clients/types.ts";

test("resolveRef unwraps string refs", () => {
  expect(resolveRef("customers/123/campaigns/456")).toBe("customers/123/campaigns/456");
});

test("resolveRef unwraps rich-object refs", () => {
  const obj = { name: "foo", resourceName: "customers/123/campaigns/456" as const };
  expect(resolveRef(obj)).toBe("customers/123/campaigns/456");
});
```

- [ ] **Step 2: Run — verify fail**

Run: `cd packages/google-ads-sdk && bun test tests/clients/types.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 3: Implement `src/clients/types.ts`**

```ts
export type Ref<T extends { resourceName?: string }> =
  | string
  | (T & { resourceName: string });

export function resolveRef<T extends { resourceName?: string }>(ref: Ref<T>): string {
  return typeof ref === "string" ? ref : ref.resourceName;
}
```

- [ ] **Step 4: Run — verify pass**

Run: `cd packages/google-ads-sdk && bun test tests/clients/types.test.ts`
Expected: 2 tests PASS.

- [ ] **Step 5: Write failing test `tests/clients/campaign-budgets.test.ts`**

```ts
import { test, expect, mock } from "bun:test";
import { HttpClient } from "@promobase/sdk-runtime";
import { campaignBudgets } from "../../src/clients/campaign-budgets.ts";

function makeClient(respond: (url: string, init?: RequestInit) => Response): HttpClient {
  const fetchMock = mock(async (url: string, init?: RequestInit) => respond(url, init));
  return new HttpClient({
    baseUrl: "https://googleads.googleapis.com",
    getHeaders: async () => ({ authorization: "Bearer tok" }),
    fetch: fetchMock as unknown as typeof fetch,
    retry: { maxRetries: 0 },
  });
}

test("create wraps input in operations array, returns resourceName", async () => {
  const calls: { url: string; init?: RequestInit }[] = [];
  const client = makeClient((url, init) => {
    calls.push({ url, init });
    return new Response(
      JSON.stringify({ results: [{ resourceName: "customers/123/campaignBudgets/789" }] }),
      { status: 200 },
    );
  });
  const api = campaignBudgets(client, "123");
  const result = await api.create({ name: "Q1", amountMicros: "5000000" });

  expect(calls).toHaveLength(1);
  expect(calls[0]!.url).toContain("/v23/customers/123/campaignBudgets:mutate");
  expect(calls[0]!.init?.method).toBe("POST");
  const body = JSON.parse(calls[0]!.init?.body as string);
  expect(body.operations).toEqual([{ create: { name: "Q1", amountMicros: "5000000" } }]);

  expect(result.resourceName).toBe("customers/123/campaignBudgets/789");
  expect(result.name).toBe("Q1");
});

test("createMany preserves input ↔ result order", async () => {
  const client = makeClient(() =>
    new Response(
      JSON.stringify({
        results: [
          { resourceName: "customers/123/campaignBudgets/1" },
          { resourceName: "customers/123/campaignBudgets/2" },
        ],
      }),
      { status: 200 },
    ),
  );
  const api = campaignBudgets(client, "123");
  const [a, b] = await api.createMany([
    { name: "A", amountMicros: "1000000" },
    { name: "B", amountMicros: "2000000" },
  ]);
  expect(a!.name).toBe("A");
  expect(a!.resourceName).toBe("customers/123/campaignBudgets/1");
  expect(b!.name).toBe("B");
  expect(b!.resourceName).toBe("customers/123/campaignBudgets/2");
});

test("create throws when response lacks resourceName", async () => {
  const client = makeClient(() => new Response(JSON.stringify({ results: [{}] }), { status: 200 }));
  const api = campaignBudgets(client, "123");
  await expect(api.create({ name: "x", amountMicros: "1" })).rejects.toThrow(/resourceName/);
});

test("update builds updateMask from patch keys", async () => {
  let capturedBody: unknown;
  const client = makeClient((_url, init) => {
    capturedBody = JSON.parse(init?.body as string);
    return new Response("{}", { status: 200 });
  });
  const api = campaignBudgets(client, "123");
  await api.update("customers/123/campaignBudgets/789", { amountMicros: "7000000" });
  expect(capturedBody).toEqual({
    operations: [
      {
        update: { resourceName: "customers/123/campaignBudgets/789", amountMicros: "7000000" },
        updateMask: "amountMicros",
      },
    ],
  });
});

test("remove sends remove-only operation", async () => {
  let capturedBody: unknown;
  const client = makeClient((_url, init) => {
    capturedBody = JSON.parse(init?.body as string);
    return new Response("{}", { status: 200 });
  });
  const api = campaignBudgets(client, "123");
  await api.remove("customers/123/campaignBudgets/789");
  expect(capturedBody).toEqual({
    operations: [{ remove: "customers/123/campaignBudgets/789" }],
  });
});

test("get returns single budget or null", async () => {
  const client = makeClient((url, init) => {
    expect(url).toContain("/v23/customers/123/googleAds:search");
    const body = JSON.parse(init?.body as string);
    expect(body.query).toContain("campaign_budget.resource_name = 'customers/123/campaignBudgets/789'");
    return new Response(
      JSON.stringify({
        results: [{ campaignBudget: { id: "789", name: "Q1", amountMicros: "5000000" } }],
      }),
      { status: 200 },
    );
  });
  const api = campaignBudgets(client, "123");
  const got = await api.get("customers/123/campaignBudgets/789");
  expect(got?.name).toBe("Q1");
});

test("get returns null on empty results", async () => {
  const client = makeClient(() => new Response(JSON.stringify({ results: [] }), { status: 200 }));
  const api = campaignBudgets(client, "123");
  const got = await api.get("customers/123/campaignBudgets/789");
  expect(got).toBeNull();
});

test("list returns array of budgets", async () => {
  const client = makeClient(() =>
    new Response(
      JSON.stringify({
        results: [
          { campaignBudget: { id: "1", name: "A" } },
          { campaignBudget: { id: "2", name: "B" } },
        ],
      }),
      { status: 200 },
    ),
  );
  const api = campaignBudgets(client, "123");
  const all = await api.list();
  expect(all.map((b) => b.name)).toEqual(["A", "B"]);
});
```

- [ ] **Step 6: Run — verify fail**

Run: `cd packages/google-ads-sdk && bun test tests/clients/campaign-budgets.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 7: Implement `src/clients/campaign-budgets.ts`**

```ts
import type { HttpClient } from "@promobase/sdk-runtime";
import type { CampaignBudget } from "../generated/v23/resources/CampaignBudget.ts";
import { campaignBudgetService } from "../generated/v23/services/index.ts";
import { googleAdsService } from "../generated/v23/services/index.ts";

const GAQL_FIELDS =
  "campaign_budget.id, campaign_budget.name, campaign_budget.amount_micros, campaign_budget.delivery_method, campaign_budget.resource_name";

export type CreateCampaignBudgetInput = Omit<
  CampaignBudget,
  | "resourceName"
  | "id"
  | "referenceCount"
  | "hasRecommendedBudget"
  | "recommendedBudgetAmountMicros"
>;

function assertSafeResourceName(name: string) {
  if (name.includes("'")) throw new Error(`unsafe resource name: ${name}`);
}

export function campaignBudgets(client: HttpClient, customerId: string) {
  return {
    async create(
      input: CreateCampaignBudgetInput,
    ): Promise<CreateCampaignBudgetInput & { resourceName: string }> {
      const res = await campaignBudgetService.mutateCampaignBudgets(client, customerId, {
        operations: [{ create: input }],
      });
      const resourceName = res.results?.[0]?.resourceName;
      if (!resourceName) throw new Error("campaignBudgets.create returned no resourceName");
      return { ...input, resourceName };
    },

    async createMany(
      inputs: CreateCampaignBudgetInput[],
    ): Promise<Array<CreateCampaignBudgetInput & { resourceName: string }>> {
      const res = await campaignBudgetService.mutateCampaignBudgets(client, customerId, {
        operations: inputs.map((input) => ({ create: input })),
      });
      const results = res.results ?? [];
      if (results.length !== inputs.length) {
        throw new Error(
          `campaignBudgets.createMany: expected ${inputs.length} results, got ${results.length}`,
        );
      }
      return inputs.map((input, i) => {
        const rn = results[i]!.resourceName;
        if (!rn) throw new Error("campaignBudgets.createMany: missing resourceName");
        return { ...input, resourceName: rn };
      });
    },

    async update(resourceName: string, patch: Partial<CampaignBudget>): Promise<void> {
      assertSafeResourceName(resourceName);
      await campaignBudgetService.mutateCampaignBudgets(client, customerId, {
        operations: [
          {
            update: { ...patch, resourceName },
            updateMask: Object.keys(patch).join(","),
          },
        ],
      });
    },

    async remove(resourceName: string): Promise<void> {
      assertSafeResourceName(resourceName);
      await campaignBudgetService.mutateCampaignBudgets(client, customerId, {
        operations: [{ remove: resourceName }],
      });
    },

    async get(resourceName: string): Promise<CampaignBudget | null> {
      assertSafeResourceName(resourceName);
      const res = await googleAdsService.search(client, customerId, {
        query: `SELECT ${GAQL_FIELDS} FROM campaign_budget WHERE campaign_budget.resource_name = '${resourceName}'`,
      });
      return res.results?.[0]?.campaignBudget ?? null;
    },

    async list(): Promise<CampaignBudget[]> {
      const res = await googleAdsService.search(client, customerId, {
        query: `SELECT ${GAQL_FIELDS} FROM campaign_budget`,
      });
      return (res.results ?? [])
        .map((r) => r.campaignBudget)
        .filter((b): b is CampaignBudget => b !== undefined);
    },
  };
}
```

Verify the actual exported method on `campaignBudgetService` — it may be `mutateCampaignBudgets` (verify in `src/generated/v23/services/CampaignBudgetService.ts`). If the name differs, use whatever is generated.

Also verify the exact path in `GoogleAdsRow.campaign_budget` → the search response type. Read `src/generated/v23/resources/GoogleAdsRow.ts` and find the `campaignBudget` field.

- [ ] **Step 8: Run tests — verify pass**

Run: `cd packages/google-ads-sdk && bun test tests/clients/`
Expected: all PASS (both test files).

- [ ] **Step 9: Typecheck**

Run: `cd packages/google-ads-sdk && bun run typecheck`
Expected: clean.

- [ ] **Step 10: Commit**

```bash
cd /Users/ruizeli/dev/meta-business-sdk-ts
git add packages/google-ads-sdk/src/clients/types.ts packages/google-ads-sdk/src/clients/campaign-budgets.ts packages/google-ads-sdk/tests/clients/types.test.ts packages/google-ads-sdk/tests/clients/campaign-budgets.test.ts
git commit -m "feat(google-ads-sdk): add campaign-budgets wrapper + Ref type"
```

---

## Task 2: Campaigns wrapper (first with Ref)

**Scene:** Adds `campaignBudget: Ref<CampaignBudget>` to the input type. This is the first wrapper to exercise the `Ref<T>` resolution pattern. The rich-object path is the primary use case: users pass the return value from `campaignBudgets.create(...)` directly.

**Files:**
- Create: `packages/google-ads-sdk/src/clients/campaigns.ts`
- Create: `packages/google-ads-sdk/tests/clients/campaigns.test.ts`

- [ ] **Step 1: Write failing test `tests/clients/campaigns.test.ts`**

```ts
import { test, expect, mock } from "bun:test";
import { HttpClient } from "@promobase/sdk-runtime";
import { campaigns } from "../../src/clients/campaigns.ts";

function makeClient(respond: (url: string, init?: RequestInit) => Response): HttpClient {
  const fetchMock = mock(async (url: string, init?: RequestInit) => respond(url, init));
  return new HttpClient({
    baseUrl: "https://googleads.googleapis.com",
    getHeaders: async () => ({ authorization: "Bearer tok" }),
    fetch: fetchMock as unknown as typeof fetch,
    retry: { maxRetries: 0 },
  });
}

test("create accepts string ref and rich-object ref for campaignBudget", async () => {
  const bodies: unknown[] = [];
  const client = makeClient((_url, init) => {
    bodies.push(JSON.parse(init?.body as string));
    return new Response(
      JSON.stringify({ results: [{ resourceName: "customers/123/campaigns/555" }] }),
      { status: 200 },
    );
  });
  const api = campaigns(client, "123");

  await api.create({
    name: "A",
    status: "PAUSED",
    advertisingChannelType: "SEARCH",
    campaignBudget: "customers/123/campaignBudgets/789",
  });

  await api.create({
    name: "B",
    status: "PAUSED",
    advertisingChannelType: "SEARCH",
    campaignBudget: {
      name: "Q1",
      amountMicros: "5000000",
      resourceName: "customers/123/campaignBudgets/999",
    },
  });

  expect((bodies[0] as any).operations[0].create.campaignBudget).toBe(
    "customers/123/campaignBudgets/789",
  );
  expect((bodies[1] as any).operations[0].create.campaignBudget).toBe(
    "customers/123/campaignBudgets/999",
  );
});

test("create returns input merged with resourceName", async () => {
  const client = makeClient(() =>
    new Response(
      JSON.stringify({ results: [{ resourceName: "customers/123/campaigns/555" }] }),
      { status: 200 },
    ),
  );
  const result = await campaigns(client, "123").create({
    name: "A",
    status: "ENABLED",
    advertisingChannelType: "SEARCH",
    campaignBudget: "customers/123/campaignBudgets/789",
  });
  expect(result.resourceName).toBe("customers/123/campaigns/555");
  expect(result.name).toBe("A");
  expect(result.status).toBe("ENABLED");
});

test("update sends updateMask from patch keys", async () => {
  let body: any;
  const client = makeClient((_url, init) => {
    body = JSON.parse(init?.body as string);
    return new Response("{}", { status: 200 });
  });
  await campaigns(client, "123").update("customers/123/campaigns/555", {
    status: "PAUSED",
    name: "renamed",
  });
  expect(body.operations[0].updateMask).toBe("status,name");
  expect(body.operations[0].update.resourceName).toBe("customers/123/campaigns/555");
});

test("remove sends remove-only op", async () => {
  let body: any;
  const client = makeClient((_url, init) => {
    body = JSON.parse(init?.body as string);
    return new Response("{}", { status: 200 });
  });
  await campaigns(client, "123").remove("customers/123/campaigns/555");
  expect(body.operations[0].remove).toBe("customers/123/campaigns/555");
});

test("get issues GAQL with resource_name filter", async () => {
  let body: any;
  const client = makeClient((_url, init) => {
    body = JSON.parse(init?.body as string);
    return new Response(
      JSON.stringify({ results: [{ campaign: { id: "555", name: "A" } }] }),
      { status: 200 },
    );
  });
  const got = await campaigns(client, "123").get("customers/123/campaigns/555");
  expect(body.query).toContain("FROM campaign");
  expect(body.query).toContain("campaign.resource_name = 'customers/123/campaigns/555'");
  expect(got?.name).toBe("A");
});

test("list returns array", async () => {
  const client = makeClient(() =>
    new Response(
      JSON.stringify({
        results: [{ campaign: { id: "1", name: "A" } }, { campaign: { id: "2", name: "B" } }],
      }),
      { status: 200 },
    ),
  );
  const all = await campaigns(client, "123").list();
  expect(all.map((c) => c.name)).toEqual(["A", "B"]);
});
```

- [ ] **Step 2: Run — verify fail**

Run: `cd packages/google-ads-sdk && bun test tests/clients/campaigns.test.ts`
Expected: FAIL.

- [ ] **Step 3: Implement `src/clients/campaigns.ts`**

```ts
import type { HttpClient } from "@promobase/sdk-runtime";
import type { Campaign } from "../generated/v23/resources/Campaign.ts";
import type { CampaignBudget } from "../generated/v23/resources/CampaignBudget.ts";
import { campaignService } from "../generated/v23/services/index.ts";
import { googleAdsService } from "../generated/v23/services/index.ts";
import { resolveRef, type Ref } from "./types.ts";

const GAQL_FIELDS =
  "campaign.id, campaign.name, campaign.status, campaign.advertising_channel_type, campaign.campaign_budget, campaign.start_date, campaign.end_date, campaign.resource_name";

export type CreateCampaignInput = Omit<
  Campaign,
  "resourceName" | "id" | "baseCampaign" | "trackingUrlTemplate" | "campaignBudget"
> & {
  campaignBudget: Ref<CampaignBudget>;
};

function assertSafeResourceName(name: string) {
  if (name.includes("'")) throw new Error(`unsafe resource name: ${name}`);
}

function toCreateOp(input: CreateCampaignInput) {
  const { campaignBudget, ...rest } = input;
  return { create: { ...rest, campaignBudget: resolveRef(campaignBudget) } };
}

export function campaigns(client: HttpClient, customerId: string) {
  return {
    async create(input: CreateCampaignInput): Promise<CreateCampaignInput & { resourceName: string }> {
      const res = await campaignService.mutateCampaigns(client, customerId, {
        operations: [toCreateOp(input)],
      });
      const resourceName = res.results?.[0]?.resourceName;
      if (!resourceName) throw new Error("campaigns.create returned no resourceName");
      return { ...input, resourceName };
    },

    async createMany(
      inputs: CreateCampaignInput[],
    ): Promise<Array<CreateCampaignInput & { resourceName: string }>> {
      const res = await campaignService.mutateCampaigns(client, customerId, {
        operations: inputs.map(toCreateOp),
      });
      const results = res.results ?? [];
      if (results.length !== inputs.length) {
        throw new Error(
          `campaigns.createMany: expected ${inputs.length} results, got ${results.length}`,
        );
      }
      return inputs.map((input, i) => {
        const rn = results[i]!.resourceName;
        if (!rn) throw new Error("campaigns.createMany: missing resourceName");
        return { ...input, resourceName: rn };
      });
    },

    async update(resourceName: string, patch: Partial<Campaign>): Promise<void> {
      assertSafeResourceName(resourceName);
      await campaignService.mutateCampaigns(client, customerId, {
        operations: [
          {
            update: { ...patch, resourceName },
            updateMask: Object.keys(patch).join(","),
          },
        ],
      });
    },

    async remove(resourceName: string): Promise<void> {
      assertSafeResourceName(resourceName);
      await campaignService.mutateCampaigns(client, customerId, {
        operations: [{ remove: resourceName }],
      });
    },

    async get(resourceName: string): Promise<Campaign | null> {
      assertSafeResourceName(resourceName);
      const res = await googleAdsService.search(client, customerId, {
        query: `SELECT ${GAQL_FIELDS} FROM campaign WHERE campaign.resource_name = '${resourceName}'`,
      });
      return res.results?.[0]?.campaign ?? null;
    },

    async list(): Promise<Campaign[]> {
      const res = await googleAdsService.search(client, customerId, {
        query: `SELECT ${GAQL_FIELDS} FROM campaign`,
      });
      return (res.results ?? [])
        .map((r) => r.campaign)
        .filter((c): c is Campaign => c !== undefined);
    },
  };
}
```

- [ ] **Step 4: Run tests + typecheck**

```bash
cd packages/google-ads-sdk && bun test tests/clients/campaigns.test.ts && bun run typecheck
```
Expected: all PASS, clean.

- [ ] **Step 5: Commit**

```bash
cd /Users/ruizeli/dev/meta-business-sdk-ts
git add packages/google-ads-sdk/src/clients/campaigns.ts packages/google-ads-sdk/tests/clients/campaigns.test.ts
git commit -m "feat(google-ads-sdk): add campaigns wrapper with Ref<CampaignBudget>"
```

---

## Task 3: Ad groups wrapper

**Scene:** AdGroup references a Campaign. Same pattern as Task 2 but with `campaign: Ref<Campaign>`.

**Files:**
- Create: `packages/google-ads-sdk/src/clients/ad-groups.ts`
- Create: `packages/google-ads-sdk/tests/clients/ad-groups.test.ts`

- [ ] **Step 1: Write failing test `tests/clients/ad-groups.test.ts`**

```ts
import { test, expect, mock } from "bun:test";
import { HttpClient } from "@promobase/sdk-runtime";
import { adGroups } from "../../src/clients/ad-groups.ts";

function makeClient(respond: (url: string, init?: RequestInit) => Response): HttpClient {
  const fetchMock = mock(async (url: string, init?: RequestInit) => respond(url, init));
  return new HttpClient({
    baseUrl: "https://googleads.googleapis.com",
    getHeaders: async () => ({ authorization: "Bearer tok" }),
    fetch: fetchMock as unknown as typeof fetch,
    retry: { maxRetries: 0 },
  });
}

test("create resolves Ref<Campaign> and posts the correct body", async () => {
  let body: any;
  const client = makeClient((url, init) => {
    body = JSON.parse(init?.body as string);
    expect(url).toContain("/v23/customers/123/adGroups:mutate");
    return new Response(
      JSON.stringify({ results: [{ resourceName: "customers/123/adGroups/777" }] }),
      { status: 200 },
    );
  });
  const result = await adGroups(client, "123").create({
    name: "Shoes",
    status: "ENABLED",
    type: "SEARCH_STANDARD",
    campaign: {
      name: "Q1",
      resourceName: "customers/123/campaigns/555",
      advertisingChannelType: "SEARCH",
    } as any,
  });
  expect(body.operations[0].create.campaign).toBe("customers/123/campaigns/555");
  expect(result.resourceName).toBe("customers/123/adGroups/777");
});

test("create accepts string ref", async () => {
  let body: any;
  const client = makeClient((_u, init) => {
    body = JSON.parse(init?.body as string);
    return new Response(
      JSON.stringify({ results: [{ resourceName: "customers/123/adGroups/777" }] }),
      { status: 200 },
    );
  });
  await adGroups(client, "123").create({
    name: "Shoes",
    status: "ENABLED",
    type: "SEARCH_STANDARD",
    campaign: "customers/123/campaigns/555",
  });
  expect(body.operations[0].create.campaign).toBe("customers/123/campaigns/555");
});

test("update/remove/get/list basic shapes", async () => {
  const bodies: any[] = [];
  const client = makeClient((_u, init) => {
    bodies.push(init?.body ? JSON.parse(init.body as string) : null);
    return new Response(
      JSON.stringify({ results: [{ adGroup: { id: "777", name: "Shoes" } }] }),
      { status: 200 },
    );
  });
  const api = adGroups(client, "123");
  await api.update("customers/123/adGroups/777", { status: "PAUSED" });
  await api.remove("customers/123/adGroups/777");
  const got = await api.get("customers/123/adGroups/777");
  const all = await api.list();

  expect(bodies[0].operations[0].updateMask).toBe("status");
  expect(bodies[1].operations[0].remove).toBe("customers/123/adGroups/777");
  expect(bodies[2].query).toContain("ad_group.resource_name = 'customers/123/adGroups/777'");
  expect(bodies[3].query).toContain("FROM ad_group");
  expect(got?.name).toBe("Shoes");
  expect(all).toHaveLength(1);
});
```

- [ ] **Step 2: Run — verify fail**

- [ ] **Step 3: Implement `src/clients/ad-groups.ts`**

```ts
import type { HttpClient } from "@promobase/sdk-runtime";
import type { AdGroup } from "../generated/v23/resources/AdGroup.ts";
import type { Campaign } from "../generated/v23/resources/Campaign.ts";
import { adGroupService } from "../generated/v23/services/index.ts";
import { googleAdsService } from "../generated/v23/services/index.ts";
import { resolveRef, type Ref } from "./types.ts";

const GAQL_FIELDS =
  "ad_group.id, ad_group.name, ad_group.status, ad_group.campaign, ad_group.type, ad_group.cpc_bid_micros, ad_group.resource_name";

export type CreateAdGroupInput = Omit<AdGroup, "resourceName" | "id" | "baseAdGroup" | "campaign"> & {
  campaign: Ref<Campaign>;
};

function assertSafeResourceName(name: string) {
  if (name.includes("'")) throw new Error(`unsafe resource name: ${name}`);
}

function toCreateOp(input: CreateAdGroupInput) {
  const { campaign, ...rest } = input;
  return { create: { ...rest, campaign: resolveRef(campaign) } };
}

export function adGroups(client: HttpClient, customerId: string) {
  return {
    async create(input: CreateAdGroupInput): Promise<CreateAdGroupInput & { resourceName: string }> {
      const res = await adGroupService.mutateAdGroups(client, customerId, {
        operations: [toCreateOp(input)],
      });
      const resourceName = res.results?.[0]?.resourceName;
      if (!resourceName) throw new Error("adGroups.create returned no resourceName");
      return { ...input, resourceName };
    },

    async createMany(
      inputs: CreateAdGroupInput[],
    ): Promise<Array<CreateAdGroupInput & { resourceName: string }>> {
      const res = await adGroupService.mutateAdGroups(client, customerId, {
        operations: inputs.map(toCreateOp),
      });
      const results = res.results ?? [];
      if (results.length !== inputs.length) {
        throw new Error(
          `adGroups.createMany: expected ${inputs.length} results, got ${results.length}`,
        );
      }
      return inputs.map((input, i) => {
        const rn = results[i]!.resourceName;
        if (!rn) throw new Error("adGroups.createMany: missing resourceName");
        return { ...input, resourceName: rn };
      });
    },

    async update(resourceName: string, patch: Partial<AdGroup>): Promise<void> {
      assertSafeResourceName(resourceName);
      await adGroupService.mutateAdGroups(client, customerId, {
        operations: [
          {
            update: { ...patch, resourceName },
            updateMask: Object.keys(patch).join(","),
          },
        ],
      });
    },

    async remove(resourceName: string): Promise<void> {
      assertSafeResourceName(resourceName);
      await adGroupService.mutateAdGroups(client, customerId, {
        operations: [{ remove: resourceName }],
      });
    },

    async get(resourceName: string): Promise<AdGroup | null> {
      assertSafeResourceName(resourceName);
      const res = await googleAdsService.search(client, customerId, {
        query: `SELECT ${GAQL_FIELDS} FROM ad_group WHERE ad_group.resource_name = '${resourceName}'`,
      });
      return res.results?.[0]?.adGroup ?? null;
    },

    async list(): Promise<AdGroup[]> {
      const res = await googleAdsService.search(client, customerId, {
        query: `SELECT ${GAQL_FIELDS} FROM ad_group`,
      });
      return (res.results ?? [])
        .map((r) => r.adGroup)
        .filter((g): g is AdGroup => g !== undefined);
    },
  };
}
```

- [ ] **Step 4: Run tests + typecheck + commit**

```bash
cd packages/google-ads-sdk && bun test tests/clients/ad-groups.test.ts && bun run typecheck
cd /Users/ruizeli/dev/meta-business-sdk-ts
git add packages/google-ads-sdk/src/clients/ad-groups.ts packages/google-ads-sdk/tests/clients/ad-groups.test.ts
git commit -m "feat(google-ads-sdk): add ad-groups wrapper with Ref<Campaign>"
```

---

## Task 4: Ad-group-ads and ads wrappers (coupled)

**Scene:** `AdGroupAd` nests a full `Ad` object inside the operation body, and references an `AdGroup`. The `ads` wrapper is read-only (`get`, `list`, `remove`) because Google Ads disallows mutating most ad fields after creation. These two wrappers ship together because the ads wrapper's list/get share GAQL with what ad-group-ads tests check.

**Files:**
- Create: `packages/google-ads-sdk/src/clients/ad-group-ads.ts`
- Create: `packages/google-ads-sdk/src/clients/ads.ts`
- Create: `packages/google-ads-sdk/tests/clients/ad-group-ads.test.ts`
- Create: `packages/google-ads-sdk/tests/clients/ads.test.ts`

- [ ] **Step 1: Write failing test `tests/clients/ad-group-ads.test.ts`**

```ts
import { test, expect, mock } from "bun:test";
import { HttpClient } from "@promobase/sdk-runtime";
import { adGroupAds } from "../../src/clients/ad-group-ads.ts";

function makeClient(respond: (url: string, init?: RequestInit) => Response): HttpClient {
  const fetchMock = mock(async (url: string, init?: RequestInit) => respond(url, init));
  return new HttpClient({
    baseUrl: "https://googleads.googleapis.com",
    getHeaders: async () => ({ authorization: "Bearer tok" }),
    fetch: fetchMock as unknown as typeof fetch,
    retry: { maxRetries: 0 },
  });
}

test("create resolves adGroup ref and nests full Ad in the operation", async () => {
  let body: any;
  const client = makeClient((_u, init) => {
    body = JSON.parse(init?.body as string);
    return new Response(
      JSON.stringify({
        results: [{ resourceName: "customers/123/adGroupAds/777~888" }],
      }),
      { status: 200 },
    );
  });
  const result = await adGroupAds(client, "123").create({
    adGroup: "customers/123/adGroups/777",
    status: "ENABLED",
    ad: {
      finalUrls: ["https://example.com"],
      responsiveSearchAd: {
        headlines: [{ text: "Buy shoes" }, { text: "Best deals" }, { text: "Free ship" }],
        descriptions: [{ text: "On sale now" }, { text: "Trusted brand" }],
      },
    },
  });
  const op = body.operations[0].create;
  expect(op.adGroup).toBe("customers/123/adGroups/777");
  expect(op.ad.finalUrls).toEqual(["https://example.com"]);
  expect(op.ad.responsiveSearchAd.headlines).toHaveLength(3);
  expect(result.resourceName).toBe("customers/123/adGroupAds/777~888");
});

test("remove + update basic shapes", async () => {
  const bodies: any[] = [];
  const client = makeClient((_u, init) => {
    bodies.push(JSON.parse(init?.body as string));
    return new Response("{}", { status: 200 });
  });
  const api = adGroupAds(client, "123");
  await api.update("customers/123/adGroupAds/777~888", { status: "PAUSED" });
  await api.remove("customers/123/adGroupAds/777~888");
  expect(bodies[0].operations[0].update.resourceName).toBe("customers/123/adGroupAds/777~888");
  expect(bodies[0].operations[0].updateMask).toBe("status");
  expect(bodies[1].operations[0].remove).toBe("customers/123/adGroupAds/777~888");
});

test("get returns first row's adGroupAd or null", async () => {
  const client = makeClient((_u, init) => {
    const body = JSON.parse(init?.body as string);
    expect(body.query).toContain("FROM ad_group_ad");
    return new Response(
      JSON.stringify({
        results: [{ adGroupAd: { resourceName: "customers/123/adGroupAds/777~888", status: "ENABLED" } }],
      }),
      { status: 200 },
    );
  });
  const got = await adGroupAds(client, "123").get("customers/123/adGroupAds/777~888");
  expect(got?.status).toBe("ENABLED");
});
```

- [ ] **Step 2: Write failing test `tests/clients/ads.test.ts`**

```ts
import { test, expect, mock } from "bun:test";
import { HttpClient } from "@promobase/sdk-runtime";
import { ads } from "../../src/clients/ads.ts";

function makeClient(respond: (url: string, init?: RequestInit) => Response): HttpClient {
  const fetchMock = mock(async (url: string, init?: RequestInit) => respond(url, init));
  return new HttpClient({
    baseUrl: "https://googleads.googleapis.com",
    getHeaders: async () => ({ authorization: "Bearer tok" }),
    fetch: fetchMock as unknown as typeof fetch,
    retry: { maxRetries: 0 },
  });
}

test("ads exposes get/list/remove only (create not on type surface)", () => {
  const client = makeClient(() => new Response("{}", { status: 200 }));
  const api = ads(client, "123");
  expect(typeof api.get).toBe("function");
  expect(typeof api.list).toBe("function");
  expect(typeof api.remove).toBe("function");
  expect((api as Record<string, unknown>).create).toBeUndefined();
});

test("get queries FROM ad_group_ad and extracts ad", async () => {
  const client = makeClient((_u, init) => {
    const body = JSON.parse(init?.body as string);
    expect(body.query).toContain("FROM ad_group_ad");
    expect(body.query).toContain("ad_group_ad.ad.resource_name = 'customers/123/ads/999'");
    return new Response(
      JSON.stringify({
        results: [{ adGroupAd: { ad: { id: "999", resourceName: "customers/123/ads/999" } } }],
      }),
      { status: 200 },
    );
  });
  const got = await ads(client, "123").get("customers/123/ads/999");
  expect(got?.id).toBe("999");
});

test("list returns ads from ad_group_ad rows", async () => {
  const client = makeClient(() =>
    new Response(
      JSON.stringify({
        results: [
          { adGroupAd: { ad: { id: "1" } } },
          { adGroupAd: { ad: { id: "2" } } },
        ],
      }),
      { status: 200 },
    ),
  );
  const all = await ads(client, "123").list();
  expect(all.map((a) => a.id)).toEqual(["1", "2"]);
});

test("remove delegates to adGroupAdService.mutateAdGroupAds", async () => {
  let body: any;
  const client = makeClient((url, init) => {
    body = JSON.parse(init?.body as string);
    expect(url).toContain("/v23/customers/123/adGroupAds:mutate");
    return new Response("{}", { status: 200 });
  });
  await ads(client, "123").remove("customers/123/adGroupAds/777~888");
  expect(body.operations[0].remove).toBe("customers/123/adGroupAds/777~888");
});
```

- [ ] **Step 3: Implement `src/clients/ad-group-ads.ts`**

```ts
import type { HttpClient } from "@promobase/sdk-runtime";
import type { AdGroupAd } from "../generated/v23/resources/AdGroupAd.ts";
import type { AdGroup } from "../generated/v23/resources/AdGroup.ts";
import { adGroupAdService } from "../generated/v23/services/index.ts";
import { googleAdsService } from "../generated/v23/services/index.ts";
import { resolveRef, type Ref } from "./types.ts";

const GAQL_FIELDS =
  "ad_group_ad.resource_name, ad_group_ad.status, ad_group_ad.ad.id, ad_group_ad.ad.resource_name, ad_group_ad.ad.type, ad_group_ad.ad.final_urls";

export type CreateAdGroupAdInput = Omit<AdGroupAd, "resourceName" | "adGroup"> & {
  adGroup: Ref<AdGroup>;
};

function assertSafeResourceName(name: string) {
  if (name.includes("'")) throw new Error(`unsafe resource name: ${name}`);
}

function toCreateOp(input: CreateAdGroupAdInput) {
  const { adGroup, ...rest } = input;
  return { create: { ...rest, adGroup: resolveRef(adGroup) } };
}

export function adGroupAds(client: HttpClient, customerId: string) {
  return {
    async create(
      input: CreateAdGroupAdInput,
    ): Promise<CreateAdGroupAdInput & { resourceName: string }> {
      const res = await adGroupAdService.mutateAdGroupAds(client, customerId, {
        operations: [toCreateOp(input)],
      });
      const resourceName = res.results?.[0]?.resourceName;
      if (!resourceName) throw new Error("adGroupAds.create returned no resourceName");
      return { ...input, resourceName };
    },

    async createMany(
      inputs: CreateAdGroupAdInput[],
    ): Promise<Array<CreateAdGroupAdInput & { resourceName: string }>> {
      const res = await adGroupAdService.mutateAdGroupAds(client, customerId, {
        operations: inputs.map(toCreateOp),
      });
      const results = res.results ?? [];
      if (results.length !== inputs.length) {
        throw new Error(
          `adGroupAds.createMany: expected ${inputs.length} results, got ${results.length}`,
        );
      }
      return inputs.map((input, i) => {
        const rn = results[i]!.resourceName;
        if (!rn) throw new Error("adGroupAds.createMany: missing resourceName");
        return { ...input, resourceName: rn };
      });
    },

    async update(resourceName: string, patch: Partial<AdGroupAd>): Promise<void> {
      assertSafeResourceName(resourceName);
      await adGroupAdService.mutateAdGroupAds(client, customerId, {
        operations: [
          {
            update: { ...patch, resourceName },
            updateMask: Object.keys(patch).join(","),
          },
        ],
      });
    },

    async remove(resourceName: string): Promise<void> {
      assertSafeResourceName(resourceName);
      await adGroupAdService.mutateAdGroupAds(client, customerId, {
        operations: [{ remove: resourceName }],
      });
    },

    async get(resourceName: string): Promise<AdGroupAd | null> {
      assertSafeResourceName(resourceName);
      const res = await googleAdsService.search(client, customerId, {
        query: `SELECT ${GAQL_FIELDS} FROM ad_group_ad WHERE ad_group_ad.resource_name = '${resourceName}'`,
      });
      return res.results?.[0]?.adGroupAd ?? null;
    },

    async list(): Promise<AdGroupAd[]> {
      const res = await googleAdsService.search(client, customerId, {
        query: `SELECT ${GAQL_FIELDS} FROM ad_group_ad`,
      });
      return (res.results ?? [])
        .map((r) => r.adGroupAd)
        .filter((a): a is AdGroupAd => a !== undefined);
    },
  };
}
```

- [ ] **Step 4: Implement `src/clients/ads.ts`**

```ts
import type { HttpClient } from "@promobase/sdk-runtime";
import type { Ad } from "../generated/v23/resources/Ad.ts";
import { adGroupAdService } from "../generated/v23/services/index.ts";
import { googleAdsService } from "../generated/v23/services/index.ts";

const GAQL_FIELDS =
  "ad_group_ad.ad.id, ad_group_ad.ad.resource_name, ad_group_ad.ad.type, ad_group_ad.ad.final_urls, ad_group_ad.ad.name";

function assertSafeResourceName(name: string) {
  if (name.includes("'")) throw new Error(`unsafe resource name: ${name}`);
}

/**
 * Ad wrapper — read-only by design.
 *
 * Google Ads v23 does not permit mutating most Ad fields after creation
 * (headlines, descriptions, URLs are immutable). Ad creation goes through
 * `adGroupAds.create`, which nests a full Ad object inside the operation body.
 *
 * This wrapper exposes only `get`, `list`, and `remove`. `remove` deletes the
 * containing AdGroupAd association, not the Ad itself (Google Ads' model).
 */
export function ads(client: HttpClient, customerId: string) {
  return {
    async get(adResourceName: string): Promise<Ad | null> {
      assertSafeResourceName(adResourceName);
      const res = await googleAdsService.search(client, customerId, {
        query: `SELECT ${GAQL_FIELDS} FROM ad_group_ad WHERE ad_group_ad.ad.resource_name = '${adResourceName}'`,
      });
      return res.results?.[0]?.adGroupAd?.ad ?? null;
    },

    async list(): Promise<Ad[]> {
      const res = await googleAdsService.search(client, customerId, {
        query: `SELECT ${GAQL_FIELDS} FROM ad_group_ad`,
      });
      return (res.results ?? [])
        .map((r) => r.adGroupAd?.ad)
        .filter((a): a is Ad => a !== undefined);
    },

    async remove(adGroupAdResourceName: string): Promise<void> {
      assertSafeResourceName(adGroupAdResourceName);
      await adGroupAdService.mutateAdGroupAds(client, customerId, {
        operations: [{ remove: adGroupAdResourceName }],
      });
    },
  };
}
```

- [ ] **Step 5: Run tests + typecheck**

```bash
cd packages/google-ads-sdk && bun test tests/clients/ad-group-ads.test.ts tests/clients/ads.test.ts && bun run typecheck
```
Expected: all PASS, clean.

- [ ] **Step 6: Commit**

```bash
cd /Users/ruizeli/dev/meta-business-sdk-ts
git add packages/google-ads-sdk/src/clients/ad-group-ads.ts packages/google-ads-sdk/src/clients/ads.ts packages/google-ads-sdk/tests/clients/ad-group-ads.test.ts packages/google-ads-sdk/tests/clients/ads.test.ts
git commit -m "feat(google-ads-sdk): add ad-group-ads + read-only ads wrappers"
```

---

## Task 5: Customer factory + namespace export

**Files:**
- Create: `packages/google-ads-sdk/src/clients/customer.ts`
- Create: `packages/google-ads-sdk/src/clients/index.ts`
- Modify: `packages/google-ads-sdk/src/namespace.ts`
- Modify: `packages/google-ads-sdk/src/index.ts`
- Create: `packages/google-ads-sdk/tests/clients/customer.test.ts`

- [ ] **Step 1: Implement `src/clients/customer.ts`**

```ts
import type { HttpClient } from "@promobase/sdk-runtime";
import { campaignBudgets } from "./campaign-budgets.ts";
import { campaigns } from "./campaigns.ts";
import { adGroups } from "./ad-groups.ts";
import { adGroupAds } from "./ad-group-ads.ts";
import { ads } from "./ads.ts";

export interface Customer {
  campaignBudgets: ReturnType<typeof campaignBudgets>;
  campaigns: ReturnType<typeof campaigns>;
  adGroups: ReturnType<typeof adGroups>;
  adGroupAds: ReturnType<typeof adGroupAds>;
  ads: ReturnType<typeof ads>;
}

export function createCustomer(client: HttpClient, customerId: string): Customer {
  return {
    campaignBudgets: campaignBudgets(client, customerId),
    campaigns: campaigns(client, customerId),
    adGroups: adGroups(client, customerId),
    adGroupAds: adGroupAds(client, customerId),
    ads: ads(client, customerId),
  };
}
```

- [ ] **Step 2: Create barrel `src/clients/index.ts`**

```ts
export { createCustomer } from "./customer.ts";
export type { Customer } from "./customer.ts";
export { campaignBudgets } from "./campaign-budgets.ts";
export type { CreateCampaignBudgetInput } from "./campaign-budgets.ts";
export { campaigns } from "./campaigns.ts";
export type { CreateCampaignInput } from "./campaigns.ts";
export { adGroups } from "./ad-groups.ts";
export type { CreateAdGroupInput } from "./ad-groups.ts";
export { adGroupAds } from "./ad-group-ads.ts";
export type { CreateAdGroupAdInput } from "./ad-group-ads.ts";
export { ads } from "./ads.ts";
export { resolveRef } from "./types.ts";
export type { Ref } from "./types.ts";
```

- [ ] **Step 3: Modify `src/namespace.ts`** — read the file, then add to the `Google.Ads` block. The final file should look like:

```ts
import { createClient, type GoogleAdsClient } from "./client.ts";
import { GoogleAdsError } from "./errors.ts";
import { paginate } from "./pagination.ts";
import * as services from "./generated/v23/services/index.ts";
import { createCustomer } from "./clients/customer.ts";

export const Google = {
  createClient,
  Ads: {
    ...services,
    paginate,
    customer: (client: GoogleAdsClient, customerId: string) =>
      createCustomer(client.http, customerId),
  },
  Errors: { GoogleAdsError },
} as const;
```

If the existing `namespace.ts` doesn't import `GoogleAdsClient`, add the import. The `client.ts` file already exports `GoogleAdsClient`.

- [ ] **Step 4: Modify `src/index.ts`** — append:

```ts
export { createCustomer } from "./clients/customer.ts";
export type { Customer } from "./clients/customer.ts";
export type {
  CreateCampaignBudgetInput,
  CreateCampaignInput,
  CreateAdGroupInput,
  CreateAdGroupAdInput,
  Ref,
} from "./clients/index.ts";
```

- [ ] **Step 5: Write integration test `tests/clients/customer.test.ts`**

```ts
import { test, expect, mock } from "bun:test";
import { Google } from "../../src/index.ts";

test("customer factory chains budget → campaign → ad group → ad group ad via rich refs", async () => {
  const calls: { url: string; body: any }[] = [];
  const fetchMock = mock(async (url: string, init?: RequestInit) => {
    const body = init?.body ? JSON.parse(init.body as string) : null;
    calls.push({ url, body });

    if (url.includes("campaignBudgets:mutate")) {
      return new Response(
        JSON.stringify({ results: [{ resourceName: "customers/123/campaignBudgets/1" }] }),
        { status: 200 },
      );
    }
    if (url.includes("campaigns:mutate")) {
      return new Response(
        JSON.stringify({ results: [{ resourceName: "customers/123/campaigns/2" }] }),
        { status: 200 },
      );
    }
    if (url.includes("adGroups:mutate")) {
      return new Response(
        JSON.stringify({ results: [{ resourceName: "customers/123/adGroups/3" }] }),
        { status: 200 },
      );
    }
    if (url.includes("adGroupAds:mutate")) {
      return new Response(
        JSON.stringify({ results: [{ resourceName: "customers/123/adGroupAds/3~4" }] }),
        { status: 200 },
      );
    }
    return new Response("{}", { status: 200 });
  });

  const client = Google.createClient({
    getAccessToken: async () => "tok",
    developerToken: "dev",
    fetch: fetchMock as unknown as typeof fetch,
    retry: { maxRetries: 0 },
  });
  const customer = Google.Ads.customer(client, "123");

  const budget = await customer.campaignBudgets.create({ name: "Q1", amountMicros: "5000000" });
  const campaign = await customer.campaigns.create({
    name: "Search Q1",
    status: "PAUSED",
    advertisingChannelType: "SEARCH",
    campaignBudget: budget,
  });
  const adGroup = await customer.adGroups.create({
    name: "Shoes",
    status: "ENABLED",
    type: "SEARCH_STANDARD",
    campaign,
  });
  const adGroupAd = await customer.adGroupAds.create({
    adGroup,
    status: "ENABLED",
    ad: {
      finalUrls: ["https://example.com"],
      responsiveSearchAd: {
        headlines: [{ text: "A" }, { text: "B" }, { text: "C" }],
        descriptions: [{ text: "X" }, { text: "Y" }],
      },
    },
  });

  expect(budget.resourceName).toBe("customers/123/campaignBudgets/1");
  expect(campaign.resourceName).toBe("customers/123/campaigns/2");
  expect(adGroup.resourceName).toBe("customers/123/adGroups/3");
  expect(adGroupAd.resourceName).toBe("customers/123/adGroupAds/3~4");

  // Verify refs were resolved from rich objects (not passed as-is):
  expect(calls[1]!.body.operations[0].create.campaignBudget).toBe(
    "customers/123/campaignBudgets/1",
  );
  expect(calls[2]!.body.operations[0].create.campaign).toBe("customers/123/campaigns/2");
  expect(calls[3]!.body.operations[0].create.adGroup).toBe("customers/123/adGroups/3");
});
```

- [ ] **Step 6: Run tests + typecheck**

```bash
cd packages/google-ads-sdk && bun test tests/clients/ && bun run typecheck
```
Expected: all PASS, clean. If the existing smoke test breaks (it shouldn't — namespace is additive), investigate.

- [ ] **Step 7: Commit**

```bash
cd /Users/ruizeli/dev/meta-business-sdk-ts
git add packages/google-ads-sdk/src/clients/customer.ts packages/google-ads-sdk/src/clients/index.ts packages/google-ads-sdk/src/namespace.ts packages/google-ads-sdk/src/index.ts packages/google-ads-sdk/tests/clients/customer.test.ts
git commit -m "feat(google-ads-sdk): add Customer factory and wire Google.Ads.customer"
```

---

## Task 6: Type-safety probe extension

**Files:**
- Modify: `packages/google-ads-sdk/tests/type-safety.check.ts`

**Scene:** Extend the existing type-safety probe with checks that verify the wrapper input types enforce the right constraints. This guards the ergonomic surface against future drift.

- [ ] **Step 1: Append to `tests/type-safety.check.ts`**

Read the existing file first. Add these at the bottom (before the final `void [...]` statement), and extend that statement to reference the new symbols:

```ts
// 8. Ergonomic wrapper type safety.
async function wrapperChecks() {
  const customer = Google.Ads.customer(client, "123");

  // Good: minimal create
  const budget = await customer.campaignBudgets.create({ name: "Q1", amountMicros: "5000000" });

  // Good: rich-object Ref feeds directly into next call
  const campaign = await customer.campaigns.create({
    name: "A",
    status: "PAUSED",
    advertisingChannelType: "SEARCH",
    campaignBudget: budget,
  });

  // Good: string Ref also works
  await customer.campaigns.create({
    name: "B",
    status: "PAUSED",
    advertisingChannelType: "SEARCH",
    campaignBudget: "customers/123/campaignBudgets/789",
  });

  // @ts-expect-error — campaignBudget required
  await customer.campaigns.create({ name: "C", status: "PAUSED", advertisingChannelType: "SEARCH" });

  // @ts-expect-error — resourceName is a managed field, omitted from input
  await customer.campaigns.create({
    name: "D",
    status: "PAUSED",
    advertisingChannelType: "SEARCH",
    campaignBudget: budget,
    resourceName: "customers/123/campaigns/forbidden",
  });

  // @ts-expect-error — status "BOGUS" not assignable to CampaignStatus
  await customer.campaigns.create({
    name: "E",
    status: "BOGUS",
    advertisingChannelType: "SEARCH",
    campaignBudget: budget,
  });

  // Chain: campaign return value is usable as Ref<Campaign>
  await customer.adGroups.create({
    name: "G1",
    status: "ENABLED",
    type: "SEARCH_STANDARD",
    campaign,
  });

  // @ts-expect-error — passing a CampaignBudget where a Campaign ref is required
  await customer.adGroups.create({
    name: "G2",
    status: "ENABLED",
    type: "SEARCH_STANDARD",
    campaign: budget,
  });

  // ads wrapper: no create method
  // @ts-expect-error — ads.create does not exist; use adGroupAds.create
  await customer.ads.create({});
}
```

Then update the final `void [...]` line to include `wrapperChecks`.

- [ ] **Step 2: Typecheck**

Run: `cd packages/google-ads-sdk && bun run typecheck`
Expected: clean. Every `@ts-expect-error` must match an actual error; no unused directives.

If a `@ts-expect-error` is unused, it means the wrapper isn't enforcing that constraint — FIX THE WRAPPER, not the probe. E.g., if `resourceName` isn't being rejected, the `Omit<Campaign, "resourceName" | ...>` is missing a key.

- [ ] **Step 3: Run all tests once more**

```bash
cd packages/google-ads-sdk && bun test tests/
```
Expected: all PASS.

- [ ] **Step 4: Commit**

```bash
cd /Users/ruizeli/dev/meta-business-sdk-ts
git add packages/google-ads-sdk/tests/type-safety.check.ts
git commit -m "test(google-ads-sdk): extend type-safety probe for wrappers"
```

---

## Done criteria

- [ ] `Google.Ads.customer(client, "123")` returns an object with `campaignBudgets`, `campaigns`, `adGroups`, `adGroupAds`, `ads`.
- [ ] Each wrapper (except `ads`) exposes `create`, `createMany`, `update`, `remove`, `get`, `list` with typed inputs.
- [ ] `ads` exposes only `get`, `list`, `remove` with a JSDoc explaining why.
- [ ] Rich-object refs from `create` return values feed directly into subsequent calls as typed refs.
- [ ] Type-safety probe confirms input types reject managed fields, wrong-type refs, and invalid enums.
- [ ] `bun test tests/` passes the existing 29 tests plus new wrapper tests.
- [ ] `bun run typecheck` is clean across sdk-runtime, google-ads-sdk, ad-platforms.

## Deferred

- Transactional multi-resource helpers via temporary IDs
- Typed GAQL query builder with field-literal narrowing
- Custom field sets on `get`/`list`
- Assets, audiences, conversion tracking wrappers
- AI SDK tool integration for the wrappers
