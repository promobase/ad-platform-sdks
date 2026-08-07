// Auto-generated client for Ad groups — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { ListSponsoredProductsAdGroupsResponse } from "../types.ts";
import type { CreateSponsoredProductsAdGroupParams, UpdateSponsoredProductsAdGroupParams, DeleteSponsoredProductsAdGroupParams, ListSponsoredProductsAdGroupsParams } from "../params.ts";

/** Ad groups — 4 endpoints */
export function createAdGroupsClient(api: AmazonAdsApiClient) {
  return {
    /** CreateSponsoredProductsAdGroups */
    async createSponsoredProductsAdGroup(params: CreateSponsoredProductsAdGroupParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sp/adGroups`, rest);
      return envelope;
    },

    /** UpdateSponsoredProductsAdGroups */
    async updateSponsoredProductsAdGroup(params: UpdateSponsoredProductsAdGroupParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.put<unknown>(`/sp/adGroups`, rest);
      return envelope;
    },

    /** DeleteSponsoredProductsAdGroups */
    async deleteSponsoredProductsAdGroup(params: DeleteSponsoredProductsAdGroupParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sp/adGroups/delete`, rest);
      return envelope;
    },

    /** ListSponsoredProductsAdGroups */
    async listSponsoredProductsAdGroups(params: ListSponsoredProductsAdGroupsParams): Promise<ListSponsoredProductsAdGroupsResponse> {
      const rest = params;
      const envelope = await api.post<ListSponsoredProductsAdGroupsResponse>(`/sp/adGroups/list`, rest);
      return envelope;
    },
  };
}
