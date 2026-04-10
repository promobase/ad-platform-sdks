// Auto-generated client for Tools — do not edit
import type { ToolTargetingSearchParams, ToolTargetingSearchResponse, ToolTargetingInfoParams, ToolTargetingInfoResponse, SearchRegionParams, SearchRegionResponse, ToolLanguageParams, ToolLanguageResponse, TargetingSearchParams, TargetingSearchResponse, ToolInterestCategoryParams, ToolInterestCategoryResponse, ToolInterestKeywordRecommendParams, ToolInterestKeywordRecommendResponse, ToolInterestKeywordGetParams, ToolInterestKeywordGetResponse, ToolActionCategoryParams, ToolActionCategoryResponse, ToolHashtagRecommendParams, ToolHashtagRecommendResponse, ToolHashtagGetParams, ToolHashtagGetResponse, ToolTargetingCategoryRecommendParams, ToolTargetingCategoryRecommendResponse, ToolSearchKeywordRecommendParams, ToolSearchKeywordRecommendResponse, ToolDiagnosisSearchHealthParams, ToolDiagnosisSearchHealthResponse, ToolSearchKeywordKeywordIdeaParams, ToolSearchKeywordKeywordIdeaResponse, ToolOsVersionParams, ToolOsVersionResponse, ToolDeviceModelParams, ToolDeviceModelResponse, ToolCarrierParams, ToolCarrierResponse, ToolTargetingListParams, ToolTargetingListResponse, ToolContextualTagGetParams, ToolContextualTagGetResponse, ToolContextualTagInfoParams, ToolContextualTagInfoResponse, ToolContentExclusionGetParams, ToolContentExclusionGetResponse, ToolContentExclusionInfoParams, ToolContentExclusionInfoResponse, DeliveryBudgetRecommendParams, DeliveryBudgetRecommendResponse, DeliveryBidRecommendParams, DeliveryBidRecommendResponse, ToolBidRecommendParams, ToolBidRecommendResponse, ToolVboStatusParams, ToolVboStatusResponse, ToolBrandSafetyPartnerAuthorizeStatusParams, ToolBrandSafetyPartnerAuthorizeStatusResponse, ToolUrlValidateParams, ToolUrlValidateResponse, ToolPhoneRegionCodeParams, ToolPhoneRegionCodeResponse, ToolTimezoneParams, ToolTimezoneResponse, ToolOpenUrlParams, ToolOpenUrlResponse, CampaignLabelGetParams, CampaignLabelGetResponse, MinisGetParams, MinisGetResponse } from "../types/tools.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createTools(opts: { accessToken: string; advertiserId: string }) {
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
    /** Search for location targeting tags */
    async targetingSearch(params: ToolTargetingSearchParams): Promise<ToolTargetingSearchResponse> {
      return post<ToolTargetingSearchResponse>("/open_api/v1.3/tool/targeting/search/", params as unknown as Record<string, unknown>);
    },

    /** Obtain details about location targeting tags by ID */
    async targetingInfo(params: ToolTargetingInfoParams): Promise<ToolTargetingInfoResponse> {
      return post<ToolTargetingInfoResponse>("/open_api/v1.3/tool/targeting/info/", params as unknown as Record<string, unknown>);
    },

    /** Get available locations by advertiser ID */
    async searchRegion(params: SearchRegionParams): Promise<SearchRegionResponse> {
      return get<SearchRegionResponse>("/open_api/v1.3/search/region/", params as unknown as Record<string, unknown>);
    },

    /** Get languages */
    async toolLanguage(params: ToolLanguageParams): Promise<ToolLanguageResponse> {
      return get<ToolLanguageResponse>("/open_api/v1.3/tool/language/", params as unknown as Record<string, unknown>);
    },

    /** Search for or list targeting categories and hashtags for interests and behaviors */
    async targetingSearch2(params: TargetingSearchParams): Promise<TargetingSearchResponse> {
      return get<TargetingSearchResponse>("/open_api/v1.3/targeting/search/", params as unknown as Record<string, unknown>);
    },

    /** Get general interest categories */
    async toolInterestCategory(params: ToolInterestCategoryParams): Promise<ToolInterestCategoryResponse> {
      return get<ToolInterestCategoryResponse>("/open_api/v1.3/tool/interest_category/", params as unknown as Record<string, unknown>);
    },

    /** Search for additional interest categories */
    async interestKeywordRecommend(params: ToolInterestKeywordRecommendParams): Promise<ToolInterestKeywordRecommendResponse> {
      return get<ToolInterestKeywordRecommendResponse>("/open_api/v1.3/tool/interest_keyword/recommend/", params as unknown as Record<string, unknown>);
    },

    /** Get additional interest categories by ID */
    async getInterestKeyword(params: ToolInterestKeywordGetParams): Promise<ToolInterestKeywordGetResponse> {
      return get<ToolInterestKeywordGetResponse>("/open_api/v1.3/tool/interest_keyword/get/", params as unknown as Record<string, unknown>);
    },

    /** Get action categories */
    async toolActionCategory(params: ToolActionCategoryParams): Promise<ToolActionCategoryResponse> {
      return get<ToolActionCategoryResponse>("/open_api/v1.3/tool/action_category/", params as unknown as Record<string, unknown>);
    },

    /** Search for targeting hashtags */
    async hashtagRecommend(params: ToolHashtagRecommendParams): Promise<ToolHashtagRecommendResponse> {
      return get<ToolHashtagRecommendResponse>("/open_api/v1.3/tool/hashtag/recommend/", params as unknown as Record<string, unknown>);
    },

    /** Get targeting hashtags by ID */
    async getHashtag(params: ToolHashtagGetParams): Promise<ToolHashtagGetResponse> {
      return get<ToolHashtagGetResponse>("/open_api/v1.3/tool/hashtag/get/", params as unknown as Record<string, unknown>);
    },

    /** Get recommended interest and action categories */
    async targetingCategoryRecommend(params: ToolTargetingCategoryRecommendParams): Promise<ToolTargetingCategoryRecommendResponse> {
      return post<ToolTargetingCategoryRecommendResponse>("/open_api/v1.3/tool/targeting_category/recommend/", params as unknown as Record<string, unknown>);
    },

    /** Get recommended search keywords */
    async searchKeywordRecommend(params: ToolSearchKeywordRecommendParams): Promise<ToolSearchKeywordRecommendResponse> {
      return get<ToolSearchKeywordRecommendResponse>("/open_api/v1.3/tool/search_keyword/recommend/", params as unknown as Record<string, unknown>);
    },

    /** Get Search Ads Campaign Health diagnoses */
    async searchHealth(params: ToolDiagnosisSearchHealthParams): Promise<ToolDiagnosisSearchHealthResponse> {
      return get<ToolDiagnosisSearchHealthResponse>("/open_api/v1.3/tool/diagnosis/search/health/", params as unknown as Record<string, unknown>);
    },

    /** Discover new keywords */
    async searchKeywordKeywordIdea(params: ToolSearchKeywordKeywordIdeaParams): Promise<ToolSearchKeywordKeywordIdeaResponse> {
      return get<ToolSearchKeywordKeywordIdeaResponse>("/open_api/v1.3/tool/search_keyword/keyword_idea/", params as unknown as Record<string, unknown>);
    },

    /** Get OS versions */
    async toolOsVersion(params: ToolOsVersionParams): Promise<ToolOsVersionResponse> {
      return get<ToolOsVersionResponse>("/open_api/v1.3/tool/os_version/", params as unknown as Record<string, unknown>);
    },

    /** Get device models */
    async toolDeviceModel(params: ToolDeviceModelParams): Promise<ToolDeviceModelResponse> {
      return get<ToolDeviceModelResponse>("/open_api/v1.3/tool/device_model/", params as unknown as Record<string, unknown>);
    },

    /** Get carriers */
    async toolCarrier(params: ToolCarrierParams): Promise<ToolCarrierResponse> {
      return get<ToolCarrierResponse>("/open_api/v1.3/tool/carrier/", params as unknown as Record<string, unknown>);
    },

    /** Get internet service providers */
    async listTargeting(params: ToolTargetingListParams): Promise<ToolTargetingListResponse> {
      return get<ToolTargetingListResponse>("/open_api/v1.3/tool/targeting/list/", params as unknown as Record<string, unknown>);
    },

    /** Get available contextual tags */
    async getContextualTag(params: ToolContextualTagGetParams): Promise<ToolContextualTagGetResponse> {
      return get<ToolContextualTagGetResponse>("/open_api/v1.3/tool/contextual_tag/get/", params as unknown as Record<string, unknown>);
    },

    /** Get details of contextual tags */
    async contextualTagInfo(params: ToolContextualTagInfoParams): Promise<ToolContextualTagInfoResponse> {
      return get<ToolContextualTagInfoResponse>("/open_api/v1.3/tool/contextual_tag/info/", params as unknown as Record<string, unknown>);
    },

    /** Get available content exclusion categories */
    async getContentExclusion(params: ToolContentExclusionGetParams): Promise<ToolContentExclusionGetResponse> {
      return get<ToolContentExclusionGetResponse>("/open_api/v1.3/tool/content_exclusion/get/", params as unknown as Record<string, unknown>);
    },

    /** Get details of content exclusion categories */
    async contentExclusionInfo(params: ToolContentExclusionInfoParams): Promise<ToolContentExclusionInfoResponse> {
      return get<ToolContentExclusionInfoResponse>("/open_api/v1.3/tool/content_exclusion/info/", params as unknown as Record<string, unknown>);
    },

    /** (To-be-deprecated) Get recommended budgets */
    async budgetRecommend(params: DeliveryBudgetRecommendParams): Promise<DeliveryBudgetRecommendResponse> {
      return get<DeliveryBudgetRecommendResponse>("/open_api/v1.3/delivery/budget/recommend/", params as unknown as Record<string, unknown>);
    },

    /** (To-be-deprecated) Get recommended bids */
    async bidRecommend(params: DeliveryBidRecommendParams): Promise<DeliveryBidRecommendResponse> {
      return get<DeliveryBidRecommendResponse>("/open_api/v1.3/delivery/bid/recommend/", params as unknown as Record<string, unknown>);
    },

    /** Get a suggested bid */
    async bidRecommend2(params: ToolBidRecommendParams): Promise<ToolBidRecommendResponse> {
      return post<ToolBidRecommendResponse>("/open_api/v1.3/tool/bid/recommend/", params as unknown as Record<string, unknown>);
    },

    /** Check Value-Based Optimization eligibility */
    async toolVboStatus(params: ToolVboStatusParams): Promise<ToolVboStatusResponse> {
      return get<ToolVboStatusResponse>("/open_api/v1.3/tool/vbo_status/", params as unknown as Record<string, unknown>);
    },

    /** Get the authorization status of a Brand Safety partner */
    async authorizeStatus(params: ToolBrandSafetyPartnerAuthorizeStatusParams): Promise<ToolBrandSafetyPartnerAuthorizeStatusResponse> {
      return get<ToolBrandSafetyPartnerAuthorizeStatusResponse>("/open_api/v1.3/tool/brand_safety/partner/authorize/status/", params as unknown as Record<string, unknown>);
    },

    /** Get the verification results of a URL */
    async toolUrlValidate(params: ToolUrlValidateParams): Promise<ToolUrlValidateResponse> {
      return get<ToolUrlValidateResponse>("/open_api/v1.3/tool/url_validate/", params as unknown as Record<string, unknown>);
    },

    /** Get region calling codes and region codes for phone numbers */
    async toolPhoneRegionCode(params: ToolPhoneRegionCodeParams): Promise<ToolPhoneRegionCodeResponse> {
      return get<ToolPhoneRegionCodeResponse>("/open_api/v1.3/tool/phone_region_code/", params as unknown as Record<string, unknown>);
    },

    /** Get time zones */
    async toolTimezone(params: ToolTimezoneParams): Promise<ToolTimezoneResponse> {
      return get<ToolTimezoneResponse>("/open_api/v1.3/tool/timezone/", params as unknown as Record<string, unknown>);
    },

    /** Get a TikTok in-app link */
    async toolOpenUrl(params: ToolOpenUrlParams): Promise<ToolOpenUrlResponse> {
      return get<ToolOpenUrlResponse>("/open_api/v1.3/tool/open_url/", params as unknown as Record<string, unknown>);
    },

    /** Get the campaign labels of an ad account */
    async getCampaignLabel(params: CampaignLabelGetParams): Promise<CampaignLabelGetResponse> {
      return get<CampaignLabelGetResponse>("/open_api/v1.3/campaign_label/get/", params as unknown as Record<string, unknown>);
    },

    /** Get the TikTok Minis within an ad account */
    async getMinis(params: MinisGetParams): Promise<MinisGetResponse> {
      return get<MinisGetResponse>("/open_api/v1.3/minis/get/", params as unknown as Record<string, unknown>);
    },
  };
}
