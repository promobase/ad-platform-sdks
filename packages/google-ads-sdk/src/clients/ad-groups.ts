import type { HttpClient } from "@promobase/sdk-runtime";
import type { AdGroup } from "../generated/v23/resources/AdGroup.ts";
import type { Campaign } from "../generated/v23/resources/Campaign.ts";
import { adGroupService, googleAdsService } from "../generated/v23/services/index.ts";
import { type Ref, resolveRef } from "./types.ts";

const GAQL_FIELDS =
  "ad_group.id, ad_group.name, ad_group.status, ad_group.campaign, ad_group.type, ad_group.cpc_bid_micros, ad_group.resource_name";

export type CreateAdGroupInput = Omit<
  AdGroup,
  "resourceName" | "id" | "baseAdGroup" | "campaign"
> & {
  campaign: Ref<Campaign>;
};

function assertSafeResourceName(name: string) {
  if (name.includes("'")) throw new Error(`unsafe resource name: ${name}`);
}

function normalize(input: CreateAdGroupInput): AdGroup {
  const { campaign, ...rest } = input;
  return { ...rest, campaign: resolveRef(campaign) };
}

export function adGroups(client: HttpClient, customerId: string) {
  return {
    async create(input: CreateAdGroupInput): Promise<AdGroup & { resourceName: string }> {
      const normalized = normalize(input);
      const res = await adGroupService.mutateAdGroups(client, customerId, {
        operations: [{ create: normalized }],
      });
      const resourceName = res.results?.[0]?.resourceName;
      if (!resourceName) throw new Error("adGroups.create returned no resourceName");
      return { ...normalized, resourceName };
    },

    async createMany(
      inputs: CreateAdGroupInput[],
    ): Promise<Array<AdGroup & { resourceName: string }>> {
      const normalized = inputs.map(normalize);
      const res = await adGroupService.mutateAdGroups(client, customerId, {
        operations: normalized.map((create) => ({ create })),
      });
      const results = res.results ?? [];
      if (results.length !== inputs.length) {
        throw new Error(
          `adGroups.createMany: expected ${inputs.length} results, got ${results.length}`,
        );
      }
      return normalized.map((n, i) => {
        const rn = results[i]!.resourceName;
        if (!rn) throw new Error("adGroups.createMany: missing resourceName");
        return { ...n, resourceName: rn };
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
      return (res.results ?? []).map((r) => r.adGroup).filter((g): g is AdGroup => g !== undefined);
    },
  };
}
