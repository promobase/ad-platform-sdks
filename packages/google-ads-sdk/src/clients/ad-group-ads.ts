import type { HttpClient } from "@promobase/sdk-runtime";
import type { AdGroupAd } from "../generated/v23/resources/AdGroupAd.ts";
import type { AdGroup } from "../generated/v23/resources/AdGroup.ts";
import { adGroupAdService, googleAdsService } from "../generated/v23/services/index.ts";
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
