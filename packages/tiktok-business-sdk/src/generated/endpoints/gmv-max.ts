// Auto-generated client for GMV Max — do not edit
import type { GmvMaxCampaignGetParams, GmvMaxCampaignGetResponse, CampaignGmvMaxInfoParams, CampaignGmvMaxInfoResponse, CampaignGmvMaxCreateParams, CampaignGmvMaxCreateResponse, CampaignGmvMaxUpdateParams, CampaignGmvMaxUpdateResponse, GmvMaxBidRecommendParams, GmvMaxBidRecommendResponse, CampaignGmvMaxSessionCreateParams, CampaignGmvMaxSessionCreateResponse, CampaignGmvMaxSessionUpdateParams, CampaignGmvMaxSessionUpdateResponse, CampaignGmvMaxSessionListParams, CampaignGmvMaxSessionListResponse, CampaignGmvMaxSessionGetParams, CampaignGmvMaxSessionGetResponse, CampaignGmvMaxSessionDeleteParams, CampaignGmvMaxSessionDeleteResponse, GmvMaxStoreListParams, GmvMaxStoreListResponse, GmvMaxStoreShopAdUsageCheckParams, GmvMaxStoreShopAdUsageCheckResponse, GmvMaxIdentityGetParams, GmvMaxIdentityGetResponse, GmvMaxOccupiedCustomShopAdsListParams, GmvMaxOccupiedCustomShopAdsListResponse, GmvMaxVideoGetParams, GmvMaxVideoGetResponse, GmvMaxCustomAnchorVideoListGetParams, GmvMaxCustomAnchorVideoListGetResponse, CampaignGmvMaxCreativeUpdateParams, CampaignGmvMaxCreativeUpdateResponse, GmvMaxExclusiveAuthorizationGetParams, GmvMaxExclusiveAuthorizationGetResponse, GmvMaxExclusiveAuthorizationCreateParams, GmvMaxExclusiveAuthorizationCreateResponse } from "../types/gmv-max.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createGmvMax(opts: { accessToken: string; advertiserId: string }) {
  async function get<T>(path: string, params: Record<string, unknown>): Promise<T> {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null) {
        searchParams.set(key, typeof value === "object" ? JSON.stringify(value) : String(value));
      }
    }
    const response = await fetch(`${TT_API_BASE}${path}?${searchParams.toString()}`, {
      headers: { "Access-Token": opts.accessToken },
    });
    const body = (await response.json()) as TikTokResponse<T>;
    if (!response.ok || body.code !== 0) {
      throw new Error(`TikTok API error: ${body.message} (code ${body.code}, request_id ${body.request_id})`);
    }
    return body.data;
  }

  async function post<T>(path: string, body: Record<string, unknown>): Promise<T> {
    const response = await fetch(`${TT_API_BASE}${path}`, {
      method: "POST",
      headers: { "Access-Token": opts.accessToken, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const responseBody = (await response.json()) as TikTokResponse<T>;
    if (!response.ok || responseBody.code !== 0) {
      throw new Error(`TikTok API error: ${responseBody.message} (code ${responseBody.code}, request_id ${responseBody.request_id})`);
    }
    return responseBody.data;
  }

  return {
    /** Get GMV Max Campaigns */
    async getCampaign(params: GmvMaxCampaignGetParams): Promise<GmvMaxCampaignGetResponse> {
      return get<GmvMaxCampaignGetResponse>("/open_api/v1.3/gmv_max/campaign/get/", params as unknown as Record<string, unknown>);
    },

    /** Get the details of a GMV Max Campaign */
    async gmvMaxInfo(params: CampaignGmvMaxInfoParams): Promise<CampaignGmvMaxInfoResponse> {
      return get<CampaignGmvMaxInfoResponse>("/open_api/v1.3/campaign/gmv_max/info/", params as unknown as Record<string, unknown>);
    },

    /** Create a GMV Max Campaign */
    async createGmvMax(params: CampaignGmvMaxCreateParams): Promise<CampaignGmvMaxCreateResponse> {
      return post<CampaignGmvMaxCreateResponse>("/open_api/v1.3/campaign/gmv_max/create/", params as unknown as Record<string, unknown>);
    },

    /** Update a GMV Max Campaign */
    async updateGmvMax(params: CampaignGmvMaxUpdateParams): Promise<CampaignGmvMaxUpdateResponse> {
      return post<CampaignGmvMaxUpdateResponse>("/open_api/v1.3/campaign/gmv_max/update/", params as unknown as Record<string, unknown>);
    },

    /** Get the recommended GMV Max ROI target and budget */
    async bidRecommend(params: GmvMaxBidRecommendParams): Promise<GmvMaxBidRecommendResponse> {
      return get<GmvMaxBidRecommendResponse>("/open_api/v1.3/gmv_max/bid/recommend/", params as unknown as Record<string, unknown>);
    },

    /** Create a max delivery or creative boost session */
    async createSession(params: CampaignGmvMaxSessionCreateParams): Promise<CampaignGmvMaxSessionCreateResponse> {
      return post<CampaignGmvMaxSessionCreateResponse>("/open_api/v1.3/campaign/gmv_max/session/create/", params as unknown as Record<string, unknown>);
    },

    /** Update a max delivery or creative boost session */
    async updateSession(params: CampaignGmvMaxSessionUpdateParams): Promise<CampaignGmvMaxSessionUpdateResponse> {
      return post<CampaignGmvMaxSessionUpdateResponse>("/open_api/v1.3/campaign/gmv_max/session/update/", params as unknown as Record<string, unknown>);
    },

    /** Get max delivery or creative boost sessions within a campaign */
    async listSession(params: CampaignGmvMaxSessionListParams): Promise<CampaignGmvMaxSessionListResponse> {
      return get<CampaignGmvMaxSessionListResponse>("/open_api/v1.3/campaign/gmv_max/session/list/", params as unknown as Record<string, unknown>);
    },

    /** Get details of max delivery or creative boost sessions */
    async getSession(params: CampaignGmvMaxSessionGetParams): Promise<CampaignGmvMaxSessionGetResponse> {
      return get<CampaignGmvMaxSessionGetResponse>("/open_api/v1.3/campaign/gmv_max/session/get/", params as unknown as Record<string, unknown>);
    },

    /** Delete a max delivery or creative boost session */
    async deleteSession(params: CampaignGmvMaxSessionDeleteParams): Promise<CampaignGmvMaxSessionDeleteResponse> {
      return post<CampaignGmvMaxSessionDeleteResponse>("/open_api/v1.3/campaign/gmv_max/session/delete/", params as unknown as Record<string, unknown>);
    },

    /** Get TikTok Shops for GMV Max Campaigns */
    async listStore(params: GmvMaxStoreListParams): Promise<GmvMaxStoreListResponse> {
      return get<GmvMaxStoreListResponse>("/open_api/v1.3/gmv_max/store/list/", params as unknown as Record<string, unknown>);
    },

    /** Check the availability of a TikTok Shop for Product GMV Max Campaigns */
    async storeShopAdUsageCheck(params: GmvMaxStoreShopAdUsageCheckParams): Promise<GmvMaxStoreShopAdUsageCheckResponse> {
      return get<GmvMaxStoreShopAdUsageCheckResponse>("/open_api/v1.3/gmv_max/store/shop_ad_usage_check/", params as unknown as Record<string, unknown>);
    },

    /** Get identities for GMV Max Campaigns */
    async getIdentity(params: GmvMaxIdentityGetParams): Promise<GmvMaxIdentityGetResponse> {
      return get<GmvMaxIdentityGetResponse>("/open_api/v1.3/gmv_max/identity/get/", params as unknown as Record<string, unknown>);
    },

    /** Check the occupancy of identities or products in Shopping Ads */
    async listOccupiedCustomShopAds(params: GmvMaxOccupiedCustomShopAdsListParams): Promise<GmvMaxOccupiedCustomShopAdsListResponse> {
      return get<GmvMaxOccupiedCustomShopAdsListResponse>("/open_api/v1.3/gmv_max/occupied_custom_shop_ads/list/", params as unknown as Record<string, unknown>);
    },

    /** Get posts for a Product GMV Max Campaign */
    async getVideo(params: GmvMaxVideoGetParams): Promise<GmvMaxVideoGetResponse> {
      return get<GmvMaxVideoGetResponse>("/open_api/v1.3/gmv_max/video/get/", params as unknown as Record<string, unknown>);
    },

    /** Get details of videos in customized posts */
    async getCustomAnchorVideoList(params: GmvMaxCustomAnchorVideoListGetParams): Promise<GmvMaxCustomAnchorVideoListGetResponse> {
      return get<GmvMaxCustomAnchorVideoListGetResponse>("/open_api/v1.3/gmv_max/custom_anchor_video_list/get/", params as unknown as Record<string, unknown>);
    },

    /** Remove or add back creatives in a GMV Max Campaign */
    async updateCreative(params: CampaignGmvMaxCreativeUpdateParams): Promise<CampaignGmvMaxCreativeUpdateResponse> {
      return post<CampaignGmvMaxCreativeUpdateResponse>("/open_api/v1.3/campaign/gmv_max/creative/update/", params as unknown as Record<string, unknown>);
    },

    /** Get the TikTok Shop exclusive authorization status of an ad account */
    async getExclusiveAuthorization(params: GmvMaxExclusiveAuthorizationGetParams): Promise<GmvMaxExclusiveAuthorizationGetResponse> {
      return get<GmvMaxExclusiveAuthorizationGetResponse>("/open_api/v1.3/gmv_max/exclusive_authorization/get/", params as unknown as Record<string, unknown>);
    },

    /** Grant an ad account exclusive authorization for a TikTok Shop */
    async createExclusiveAuthorization(params: GmvMaxExclusiveAuthorizationCreateParams): Promise<GmvMaxExclusiveAuthorizationCreateResponse> {
      return post<GmvMaxExclusiveAuthorizationCreateResponse>("/open_api/v1.3/gmv_max/exclusive_authorization/create/", params as unknown as Record<string, unknown>);
    },
  };
}
