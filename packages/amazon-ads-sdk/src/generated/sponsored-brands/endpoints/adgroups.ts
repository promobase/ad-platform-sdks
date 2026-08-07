// Auto-generated client for AdGroups — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { ListSponsoredBrandsAdGroupsResponse } from "../types.ts";
import type { CreateSponsoredBrandsAdGroupParams, UpdateSponsoredBrandsAdGroupParams, DeleteSponsoredBrandsAdGroupParams, ListSponsoredBrandsAdGroupsParams } from "../params.ts";

/** AdGroups — 4 endpoints */
export function createAdgroupsClient(api: AmazonAdsApiClient) {
  return {
    /** Creates Sponsored Brands ad groups. */
    async createSponsoredBrandsAdGroup(params: CreateSponsoredBrandsAdGroupParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sb/v4/adGroups`, rest);
      return envelope;
    },

    /** Updates Sponsored Brands ad groups. */
    async updateSponsoredBrandsAdGroup(params: UpdateSponsoredBrandsAdGroupParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.put<unknown>(`/sb/v4/adGroups`, rest);
      return envelope;
    },

    /** Deletes Sponsored Brands ad groups. */
    async deleteSponsoredBrandsAdGroup(params: DeleteSponsoredBrandsAdGroupParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sb/v4/adGroups/delete`, rest);
      return envelope;
    },

    /** Lists Sponsored Brands ad groups. */
    async listSponsoredBrandsAdGroups(params: ListSponsoredBrandsAdGroupsParams): Promise<ListSponsoredBrandsAdGroupsResponse> {
      const rest = params;
      const envelope = await api.post<ListSponsoredBrandsAdGroupsResponse>(`/sb/v4/adGroups/list`, rest);
      return envelope;
    },
  };
}
