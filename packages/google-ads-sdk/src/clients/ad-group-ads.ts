import type { HttpClient } from "@promobase/sdk-runtime";
import type { AdGroup } from "../generated/v23/resources/AdGroup.ts";
import type { AdGroupAd } from "../generated/v23/resources/AdGroupAd.ts";
import { adGroupAdService, googleAdsService } from "../generated/v23/services/index.ts";
import { type Ref, resolveRef } from "./types.ts";

const GAQL_FIELDS =
  "ad_group_ad.resource_name, ad_group_ad.status, ad_group_ad.ad.id, ad_group_ad.ad.resource_name, ad_group_ad.ad.type, ad_group_ad.ad.final_urls";

export type CreateAdGroupAdInput = Omit<AdGroupAd, "resourceName" | "adGroup"> & {
  adGroup: Ref<AdGroup>;
};

function assertSafeResourceName(name: string) {
  if (name.includes("'")) throw new Error(`unsafe resource name: ${name}`);
}

function normalize(input: CreateAdGroupAdInput): AdGroupAd {
  const { adGroup, ...rest } = input;
  return { ...rest, adGroup: resolveRef(adGroup) };
}

export function adGroupAds(client: HttpClient, customerId: string) {
  return {
    async create(input: CreateAdGroupAdInput): Promise<AdGroupAd & { resourceName: string }> {
      const normalized = normalize(input);
      const res = await adGroupAdService.mutateAdGroupAds(client, customerId, {
        operations: [{ create: normalized }],
      });
      const resourceName = res.results?.[0]?.resourceName;
      if (!resourceName) throw new Error("adGroupAds.create returned no resourceName");
      return { ...normalized, resourceName };
    },

    async createMany(
      inputs: CreateAdGroupAdInput[],
    ): Promise<Array<AdGroupAd & { resourceName: string }>> {
      const normalized = inputs.map(normalize);
      const res = await adGroupAdService.mutateAdGroupAds(client, customerId, {
        operations: normalized.map((create) => ({ create })),
      });
      const results = res.results ?? [];
      if (results.length !== inputs.length) {
        throw new Error(
          `adGroupAds.createMany: expected ${inputs.length} results, got ${results.length}`,
        );
      }
      return normalized.map((n, i) => {
        const rn = results[i]!.resourceName;
        if (!rn) throw new Error("adGroupAds.createMany: missing resourceName");
        return { ...n, resourceName: rn };
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
