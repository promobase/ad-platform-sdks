// Auto-generated client for BrandStores — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { QueryBrandStoreResponse } from "../types.ts";
import type { PostQueryBrandStoreParams } from "../params.ts";

/** BrandStores — 1 endpoints */
export function createBrandstoresClient(api: AmazonAdsApiClient) {
  return {
    /** QueryBrandStore
   * Requires OAuth2: advertising::campaign_management. */
    async postQueryBrandStore(params: PostQueryBrandStoreParams): Promise<QueryBrandStoreResponse> {
      const rest = params;
      const envelope = await api.post<QueryBrandStoreResponse>(`/adsApi/v1/query/brandStores`, rest);
      return envelope;
    },
  };
}
