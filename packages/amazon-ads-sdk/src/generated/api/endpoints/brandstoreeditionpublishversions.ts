// @generated
// fingerprint: sha256:b6698f036b05a33c87effaafb0e7948d129ca8cde51bca1bb14c7afca49aca74
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for BrandStoreEditionPublishVersions — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { QueryBrandStoreEditionPublishVersionResponse } from "../types.ts";
import type { PostQueryBrandStoreEditionPublishVersionParams, UpdateBrandStoreEditionPublishVersionParams } from "../params.ts";

/** BrandStoreEditionPublishVersions — 2 endpoints */
export function createBrandstoreeditionpublishversionsClient(api: AmazonAdsApiClient) {
  return {
    /** QueryBrandStoreEditionPublishVersion
   * Requires OAuth2: advertising::campaign_management. */
    async postQueryBrandStoreEditionPublishVersion(params: PostQueryBrandStoreEditionPublishVersionParams): Promise<QueryBrandStoreEditionPublishVersionResponse> {
      const rest = params;
      const envelope = await api.post<QueryBrandStoreEditionPublishVersionResponse>(`/adsApi/v1/query/brandStoreEditionPublishVersions`, rest);
      return envelope;
    },

    /** UpdateBrandStoreEditionPublishVersion
   * Requires OAuth2: advertising::campaign_management. */
    async updateBrandStoreEditionPublishVersion(params: UpdateBrandStoreEditionPublishVersionParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/adsApi/v1/update/brandStoreEditionPublishVersions`, rest);
      return envelope;
    },
  };
}
