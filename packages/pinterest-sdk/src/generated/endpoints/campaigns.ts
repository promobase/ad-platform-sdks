// @generated
// fingerprint: sha256:403c9436295982d4efc1840a99754e3508273d74eb076f9a94099161607fd9ca
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for campaigns — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { CampaignsListResponse, CampaignsCreateResponse, CampaignsUpdateResponse, CampaignsGetResponse, CampaignsAnalyticsResponse, GetCampaignDeliveryEstimatesResponse, CampaignTargetingAnalyticsGetResponse, AdPinsAnalyticsResponse } from "../types.ts";
import type { ListCampaignsParams, CreateCampaignParams, UpdateCampaignParams, GetCampaignsParams, ListCampaignsAnalyticsParams, PostGetCampaignDeliveryEstimatesParams, GetCampaignTargetingAnalyticsParams, ListAdPinsAnalyticsParams } from "../params.ts";

/** campaigns — 8 endpoints */
export function createCampaignsClient(api: PinterestApiClient) {
  return {
    /** List campaigns
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async listCampaigns(params: ListCampaignsParams): Promise<CampaignsListResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<CampaignsListResponse>(`/ad_accounts/${adAccountId}/campaigns`, query);
      return envelope;
    },

    /** Create campaigns
   * Requires pinterest_oauth2: ads:write. */
    async createCampaign(params: CreateCampaignParams): Promise<CampaignsCreateResponse> {
      const { adAccountId, body, ...query } = params;
      const envelope = await api.post<CampaignsCreateResponse>(`/ad_accounts/${adAccountId}/campaigns`, body);
      return envelope;
    },

    /** Update campaigns
   * Requires pinterest_oauth2: ads:write. */
    async updateCampaign(params: UpdateCampaignParams): Promise<CampaignsUpdateResponse> {
      const { adAccountId, body, ...query } = params;
      const envelope = await api.patch<CampaignsUpdateResponse>(`/ad_accounts/${adAccountId}/campaigns`, body);
      return envelope;
    },

    /** Get campaign
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async getCampaigns(params: GetCampaignsParams): Promise<CampaignsGetResponse> {
      const { campaignId, adAccountId, ...query } = params;
      const envelope = await api.get<CampaignsGetResponse>(`/ad_accounts/${adAccountId}/campaigns/${campaignId}`, query);
      return envelope;
    },

    /** Get campaign analytics
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async listCampaignsAnalytics(params: ListCampaignsAnalyticsParams): Promise<CampaignsAnalyticsResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<CampaignsAnalyticsResponse>(`/ad_accounts/${adAccountId}/campaigns/analytics`, query);
      return envelope;
    },

    /** Get campaign delivery estimates
   * Requires pinterest_oauth2: ads:read. */
    async postGetCampaignDeliveryEstimates(params: PostGetCampaignDeliveryEstimatesParams): Promise<GetCampaignDeliveryEstimatesResponse> {
      const { adAccountId, body, ...query } = params;
      const envelope = await api.post<GetCampaignDeliveryEstimatesResponse>(`/ad_accounts/${adAccountId}/campaigns/delivery_estimates`, body);
      return envelope;
    },

    /** Get targeting analytics for campaigns
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async getCampaignTargetingAnalytics(params: GetCampaignTargetingAnalyticsParams): Promise<CampaignTargetingAnalyticsGetResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<CampaignTargetingAnalyticsGetResponse>(`/ad_accounts/${adAccountId}/campaigns/targeting_analytics`, query);
      return envelope;
    },

    /** Get pins analytics
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async listAdPinsAnalytics(params: ListAdPinsAnalyticsParams): Promise<AdPinsAnalyticsResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<AdPinsAnalyticsResponse>(`/ad_accounts/${adAccountId}/pins/analytics`, query);
      return envelope;
    },
  };
}
