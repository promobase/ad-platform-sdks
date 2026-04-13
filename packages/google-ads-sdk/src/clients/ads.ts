import type { HttpClient } from "@promobase/sdk-runtime";
import type { Ad } from "../generated/v23/resources/Ad.ts";
import { adGroupAdService, googleAdsService } from "../generated/v23/services/index.ts";

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
