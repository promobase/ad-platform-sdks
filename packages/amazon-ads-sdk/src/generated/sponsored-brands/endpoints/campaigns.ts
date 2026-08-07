// Auto-generated client for Campaigns — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { ListSponsoredBrandsCampaignsResponse } from "../types.ts";
import type { CreateSponsoredBrandsCampaignParams, UpdateSponsoredBrandsCampaignParams, DeleteSponsoredBrandsCampaignParams, ListSponsoredBrandsCampaignsParams } from "../params.ts";

/** Campaigns — 4 endpoints */
export function createCampaignsClient(api: AmazonAdsApiClient) {
  return {
    /** Creates Sponsored Brands campaigns. */
    async createSponsoredBrandsCampaign(params: CreateSponsoredBrandsCampaignParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sb/v4/campaigns`, rest);
      return envelope;
    },

    /** Updates Sponsored Brands campaigns. */
    async updateSponsoredBrandsCampaign(params: UpdateSponsoredBrandsCampaignParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.put<unknown>(`/sb/v4/campaigns`, rest);
      return envelope;
    },

    /** Deletes Sponsored Brands campaigns. */
    async deleteSponsoredBrandsCampaign(params: DeleteSponsoredBrandsCampaignParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sb/v4/campaigns/delete`, rest);
      return envelope;
    },

    /** Lists Sponsored Brands campaigns. */
    async listSponsoredBrandsCampaigns(params: ListSponsoredBrandsCampaignsParams): Promise<ListSponsoredBrandsCampaignsResponse> {
      const rest = params;
      const envelope = await api.post<ListSponsoredBrandsCampaignsResponse>(`/sb/v4/campaigns/list`, rest);
      return envelope;
    },
  };
}
