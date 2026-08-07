// Auto-generated client for BrandStorePages — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { QueryBrandStorePageResponse } from "../types.ts";
import type { PostQueryBrandStorePageParams, UpdateBrandStorePageParams } from "../params.ts";

/** BrandStorePages — 2 endpoints */
export function createBrandstorepagesClient(api: AmazonAdsApiClient) {
  return {
    /** QueryBrandStorePage
   * Requires OAuth2: advertising::campaign_management. */
    async postQueryBrandStorePage(params: PostQueryBrandStorePageParams): Promise<QueryBrandStorePageResponse> {
      const rest = params;
      const envelope = await api.post<QueryBrandStorePageResponse>(`/adsApi/v1/query/brandStorePages`, rest);
      return envelope;
    },

    /** UpdateBrandStorePage
   * Requires OAuth2: advertising::campaign_management. */
    async updateBrandStorePage(params: UpdateBrandStorePageParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/adsApi/v1/update/brandStorePages`, rest);
      return envelope;
    },
  };
}
