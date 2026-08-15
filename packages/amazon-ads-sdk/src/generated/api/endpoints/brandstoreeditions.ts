// @generated
// fingerprint: sha256:a4c746889e1c4f5f89cd683175ceab3d05f67006850462b296cfda9979d8f8c9
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for BrandStoreEditions — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { ListBrandStoreEditionResponse } from "../types.ts";
import type { ListBrandStoreEditionParams } from "../params.ts";

/** BrandStoreEditions — 1 endpoints */
export function createBrandstoreeditionsClient(api: AmazonAdsApiClient) {
  return {
    /** ListBrandStoreEdition
   * Requires OAuth2: advertising::campaign_management. */
    async listBrandStoreEdition(params: ListBrandStoreEditionParams): Promise<ListBrandStoreEditionResponse> {
      const query = params;
      const envelope = await api.get<ListBrandStoreEditionResponse>(`/adsApi/v1/brandStoreEditions`, query);
      return envelope;
    },
  };
}
