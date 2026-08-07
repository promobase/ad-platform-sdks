// Auto-generated client for ads — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { AdPreviewsCreateResponse, AdsListResponse, AdsCreateResponse, AdsUpdateResponse, AdsGetResponse, AdsAnalyticsResponse, AdTargetingAnalyticsGetResponse, CampaignAdPreviewCreateResponse, CampaignAdPreviewReadResponse, CampaignAdPreviewDeleteResponse } from "../types.ts";
import type { CreateAdPreviewParams, ListAdsParams, CreateAdParams, UpdateAdParams, GetAdsParams, ListAdsAnalyticsParams, GetAdTargetingAnalyticsParams, CreateCampaignAdPreviewParams, ListCampaignAdPreviewReadParams, DeleteCampaignAdPreviewParams } from "../params.ts";

/** ads — 10 endpoints */
export function createAdsClient(api: PinterestApiClient) {
  return {
    /** Create ad preview with pin or image
   * Requires pinterest_oauth2: ads:write. */
    async createAdPreview(params: CreateAdPreviewParams): Promise<AdPreviewsCreateResponse> {
      const { adAccountId, body, ...query } = params;
      const envelope = await api.post<AdPreviewsCreateResponse>(`/ad_accounts/${adAccountId}/ad_previews`, body);
      return envelope;
    },

    /** List ads
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async listAds(params: ListAdsParams): Promise<AdsListResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<AdsListResponse>(`/ad_accounts/${adAccountId}/ads`, query);
      return envelope;
    },

    /** Create ads
   * Requires pinterest_oauth2: ads:write. */
    async createAd(params: CreateAdParams): Promise<AdsCreateResponse> {
      const { adAccountId, body, ...query } = params;
      const envelope = await api.post<AdsCreateResponse>(`/ad_accounts/${adAccountId}/ads`, body);
      return envelope;
    },

    /** Update ads
   * Requires pinterest_oauth2: ads:write. */
    async updateAd(params: UpdateAdParams): Promise<AdsUpdateResponse> {
      const { adAccountId, body, ...query } = params;
      const envelope = await api.patch<AdsUpdateResponse>(`/ad_accounts/${adAccountId}/ads`, body);
      return envelope;
    },

    /** Get ad
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async getAds(params: GetAdsParams): Promise<AdsGetResponse> {
      const { adId, adAccountId, ...query } = params;
      const envelope = await api.get<AdsGetResponse>(`/ad_accounts/${adAccountId}/ads/${adId}`, query);
      return envelope;
    },

    /** Get ad analytics
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async listAdsAnalytics(params: ListAdsAnalyticsParams): Promise<AdsAnalyticsResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<AdsAnalyticsResponse>(`/ad_accounts/${adAccountId}/ads/analytics`, query);
      return envelope;
    },

    /** Get targeting analytics for ads
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async getAdTargetingAnalytics(params: GetAdTargetingAnalyticsParams): Promise<AdTargetingAnalyticsGetResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<AdTargetingAnalyticsGetResponse>(`/ad_accounts/${adAccountId}/ads/targeting_analytics`, query);
      return envelope;
    },

    /** Create ad preview records for one or more ad groups
   * Requires pinterest_oauth2: ads:write. */
    async createCampaignAdPreview(params: CreateCampaignAdPreviewParams): Promise<CampaignAdPreviewCreateResponse> {
      const { adAccountId, body, ...query } = params;
      const envelope = await api.post<CampaignAdPreviewCreateResponse>(`/ad_accounts/${adAccountId}/campaign_ad_preview`, body);
      return envelope;
    },

    /** Fetch ad preview records for one or more ad groups
   * Requires pinterest_oauth2: ads:read. */
    async listCampaignAdPreviewRead(params: ListCampaignAdPreviewReadParams): Promise<CampaignAdPreviewReadResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<CampaignAdPreviewReadResponse>(`/ad_accounts/${adAccountId}/campaign_ad_preview`, query);
      return envelope;
    },

    /** Delete ad preview records for one or more ad groups
   * Requires pinterest_oauth2: ads:write. */
    async deleteCampaignAdPreview(params: DeleteCampaignAdPreviewParams): Promise<CampaignAdPreviewDeleteResponse> {
      const { adAccountId } = params;
      const envelope = await api.delete<CampaignAdPreviewDeleteResponse>(`/ad_accounts/${adAccountId}/campaign_ad_preview`);
      return envelope;
    },
  };
}
