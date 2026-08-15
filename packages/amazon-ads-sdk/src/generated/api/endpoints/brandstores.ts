// @generated
// fingerprint: sha256:5758447934cde1cfded9226d4291344ecc5dcd66583b38bd2ff1a54a8b479255
// DO NOT EDIT: generated file; changes will be overwritten.
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
