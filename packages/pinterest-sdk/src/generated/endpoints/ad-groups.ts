// @generated
// fingerprint: sha256:27b044343906b17f0e6d7b908ab5db8f6094bd9c21eafddf6d1392d89abb05b5
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for ad_groups — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { AdGroupsListResponse, AdGroupsCreateResponse, AdGroupsUpdateResponse, AdGroupsGetResponse, AdGroupsDynamicTitlesProcessCsvResponse, AdGroupsDynamicTitlesDownloadCsvResponse, AdGroupsDynamicTitlesGetStatusResponse, AdGroupsDynamicTitlesGetUploadUrlResponse, AdGroupsAnalyticsResponse, AdGroupsAudienceSizingResponse, AdGroupsTargetingAnalyticsGetResponse, AdGroupsBidFloorGetResponse, GetAdGroupsByPromotionIdsListResponse } from "../types.ts";
import type { ListAdGroupsParams, CreateAdGroupParams, UpdateAdGroupParams, GetAdGroupsParams, PostAdGroupsDynamicTitlesProcessCsvParams, GetAdGroupsDynamicTitlesDownloadCsvParams, GetAdGroupsDynamicTitlesGetStatusParams, GetAdGroupsDynamicTitlesGetUploadUrlParams, ListAdGroupsAnalyticsParams, PostAdGroupsAudienceSizingParams, GetAdGroupsTargetingAnalyticsParams, GetAdGroupsBidFloorParams, ListGetAdGroupsByPromotionIdsParams } from "../params.ts";

/** ad_groups — 13 endpoints */
export function createAdGroupsClient(api: PinterestApiClient) {
  return {
    /** List ad groups
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async listAdGroups(params: ListAdGroupsParams): Promise<AdGroupsListResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<AdGroupsListResponse>(`/ad_accounts/${adAccountId}/ad_groups`, query);
      return envelope;
    },

    /** Create ad groups
   * Requires pinterest_oauth2: ads:write. */
    async createAdGroup(params: CreateAdGroupParams): Promise<AdGroupsCreateResponse> {
      const { adAccountId, body, ...query } = params;
      const envelope = await api.post<AdGroupsCreateResponse>(`/ad_accounts/${adAccountId}/ad_groups`, body);
      return envelope;
    },

    /** Update ad groups
   * Requires pinterest_oauth2: ads:write. */
    async updateAdGroup(params: UpdateAdGroupParams): Promise<AdGroupsUpdateResponse> {
      const { adAccountId, body, ...query } = params;
      const envelope = await api.patch<AdGroupsUpdateResponse>(`/ad_accounts/${adAccountId}/ad_groups`, body);
      return envelope;
    },

    /** Get ad group
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async getAdGroups(params: GetAdGroupsParams): Promise<AdGroupsGetResponse> {
      const { adGroupId, adAccountId, ...query } = params;
      const envelope = await api.get<AdGroupsGetResponse>(`/ad_accounts/${adAccountId}/ad_groups/${adGroupId}`, query);
      return envelope;
    },

    /** Process dynamic titles CSV
   * Requires pinterest_oauth2: ads:write. */
    async postAdGroupsDynamicTitlesProcessCsv(params: PostAdGroupsDynamicTitlesProcessCsvParams): Promise<AdGroupsDynamicTitlesProcessCsvResponse> {
      const { adAccountId, adGroupId, ...rest } = params;
      const envelope = await api.post<AdGroupsDynamicTitlesProcessCsvResponse>(`/ad_accounts/${adAccountId}/ad_groups/${adGroupId}/dynamic_titles`, rest);
      return envelope;
    },

    /** Get dynamic titles CSV download URL
   * Requires pinterest_oauth2: ads:read. */
    async getAdGroupsDynamicTitlesDownloadCsv(params: GetAdGroupsDynamicTitlesDownloadCsvParams): Promise<AdGroupsDynamicTitlesDownloadCsvResponse> {
      const { adAccountId, adGroupId, ...query } = params;
      const envelope = await api.get<AdGroupsDynamicTitlesDownloadCsvResponse>(`/ad_accounts/${adAccountId}/ad_groups/${adGroupId}/dynamic_titles/csv`, query);
      return envelope;
    },

    /** Get dynamic titles status
   * Requires pinterest_oauth2: ads:read. */
    async getAdGroupsDynamicTitlesGetStatus(params: GetAdGroupsDynamicTitlesGetStatusParams): Promise<AdGroupsDynamicTitlesGetStatusResponse> {
      const { adAccountId, adGroupId, ...query } = params;
      const envelope = await api.get<AdGroupsDynamicTitlesGetStatusResponse>(`/ad_accounts/${adAccountId}/ad_groups/${adGroupId}/dynamic_titles/status`, query);
      return envelope;
    },

    /** Get dynamic titles upload URL
   * Requires pinterest_oauth2: ads:read. */
    async getAdGroupsDynamicTitlesGetUploadUrl(params: GetAdGroupsDynamicTitlesGetUploadUrlParams): Promise<AdGroupsDynamicTitlesGetUploadUrlResponse> {
      const { adAccountId, adGroupId, ...query } = params;
      const envelope = await api.get<AdGroupsDynamicTitlesGetUploadUrlResponse>(`/ad_accounts/${adAccountId}/ad_groups/${adGroupId}/dynamic_titles/uploads`, query);
      return envelope;
    },

    /** Get ad group analytics
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async listAdGroupsAnalytics(params: ListAdGroupsAnalyticsParams): Promise<AdGroupsAnalyticsResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<AdGroupsAnalyticsResponse>(`/ad_accounts/${adAccountId}/ad_groups/analytics`, query);
      return envelope;
    },

    /** Get audience sizing
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async postAdGroupsAudienceSizing(params: PostAdGroupsAudienceSizingParams): Promise<AdGroupsAudienceSizingResponse> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<AdGroupsAudienceSizingResponse>(`/ad_accounts/${adAccountId}/ad_groups/audience_sizing`, rest);
      return envelope;
    },

    /** Get targeting analytics for ad groups
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async getAdGroupsTargetingAnalytics(params: GetAdGroupsTargetingAnalyticsParams): Promise<AdGroupsTargetingAnalyticsGetResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<AdGroupsTargetingAnalyticsGetResponse>(`/ad_accounts/${adAccountId}/ad_groups/targeting_analytics`, query);
      return envelope;
    },

    /** Get bid floors
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async getAdGroupsBidFloor(params: GetAdGroupsBidFloorParams): Promise<AdGroupsBidFloorGetResponse> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<AdGroupsBidFloorGetResponse>(`/ad_accounts/${adAccountId}/bid_floor`, rest);
      return envelope;
    },

    /** List of ad groups using promotions IDs.
   * Requires pinterest_oauth2: ads:read. */
    async listGetAdGroupsByPromotionIds(params: ListGetAdGroupsByPromotionIdsParams): Promise<GetAdGroupsByPromotionIdsListResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<GetAdGroupsByPromotionIdsListResponse>(`/ad_accounts/${adAccountId}/promotion_applied_entities`, query);
      return envelope;
    },
  };
}
