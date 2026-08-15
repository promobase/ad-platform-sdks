// @generated
// fingerprint: sha256:40ebd84f85cfcf24ec365f7ef8e54ab3395e52e7b9765bb08f0152007e7c907c
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Campaigns — do not edit
import type { RedditApiClient } from "../../api-client.ts";
import type { RedditEnvelope } from "../../envelope.ts";
import type { Campaign, CampaignCreate, CampaignUpdate } from "../types.ts";
import type { ListCampaignsParams, CreateCampaignParams, GetCampaignParams, UpdateCampaignParams, DeleteCampaignParams } from "../params.ts";

/** Campaigns — 5 endpoints */
export function createCampaignsClient(api: RedditApiClient) {
  return {
    /** List campaigns */
    async listCampaigns(params: ListCampaignsParams): Promise<Campaign[]> {
      const { accountId, ...query } = params;
      const envelope = await api.get<RedditEnvelope>(`/accounts/${accountId}/campaigns`, query);
      return envelope.data as Campaign[];
    },

    /** Create campaign */
    async createCampaign(params: CreateCampaignParams): Promise<Campaign> {
      const { accountId, ...rest } = params;
      const envelope = await api.post<RedditEnvelope>(`/accounts/${accountId}/campaigns`, rest);
      return envelope.data as Campaign;
    },

    /** Get campaign */
    async getCampaign(params: GetCampaignParams): Promise<Campaign> {
      const { accountId, campaignId, ...query } = params;
      const envelope = await api.get<RedditEnvelope>(`/accounts/${accountId}/campaigns/${campaignId}`, query);
      return envelope.data as Campaign;
    },

    /** Update campaign */
    async updateCampaign(params: UpdateCampaignParams): Promise<Campaign> {
      const { accountId, campaignId, ...rest } = params;
      const envelope = await api.post<RedditEnvelope>(`/accounts/${accountId}/campaigns/${campaignId}`, rest);
      return envelope.data as Campaign;
    },

    /** Delete campaign */
    async deleteCampaign(params: DeleteCampaignParams): Promise<void> {
      const { accountId, campaignId } = params;
      await api.delete<RedditEnvelope>(`/accounts/${accountId}/campaigns/${campaignId}`);
    },
  };
}
