// Auto-generated types for Tools — do not edit

export interface ToolTargetingSearchParams {}


export interface ToolTargetingSearchResponse {}


export interface ToolTargetingInfoParams {}


export interface ToolTargetingInfoResponse {}


export interface SearchRegionParams {}


export interface SearchRegionResponse {}


export interface ToolLanguageParams {
  advertiser_id: string;
}


export interface ToolLanguageResponse {
  code?: number;
  message?: string;
  data?: {
  languages?: {
  code?: string;
  name?: string;
}[];
};
  request_id?: string;
}


export interface TargetingSearchParams {}


export interface TargetingSearchResponse {}


export interface ToolInterestCategoryParams {
  advertiser_id: string;
  version?: number;
  language?: string;
  placements?: string[];
  special_industries?: ("HOUSING" | "EMPLOYMENT" | "CREDIT")[];
}


export interface ToolInterestCategoryResponse {
  code?: number;
  message?: string;
  data?: {
  interest_categories?: {
  interest_category_id?: string;
  interest_category_name?: string;
  level?: number;
  sub_category_ids?: string[];
  special_industries?: ("HOUSING" | "EMPLOYMENT" | "CREDIT")[];
  placements?: string[];
}[];
};
  request_id?: string;
}


export interface ToolInterestKeywordRecommendParams {
  advertiser_id: string;
  keywords?: string[];
  keyword?: string;
  mode?: "FUZZ_MATCH" | "SEMANTIC_RECOMMEND";
  language?: string;
  limit?: number;
  audience_type?: "GENERAL_INTEREST" | "PURCHASE_INTENTION";
}


export interface ToolInterestKeywordRecommendResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  recommended_keywords?: {
  input_keyword?: string;
  keyword?: string;
  keyword_id?: string;
  language?: string;
  status?: "EFFECTIVE" | "INEFFECTIVE";
}[];
};
}


export interface ToolInterestKeywordGetParams {
  advertiser_id: string;
  keyword_query?: {
  keyword_id: string;
  language?: string;
}[];
  filtering?: {
  audience_type?: "GENERAL_INTEREST" | "PURCHASE_INTENTION";
};
}


export interface ToolInterestKeywordGetResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  keywords?: {
  keyword?: string;
  keyword_id?: string;
  status?: "EFFECTIVE" | "INEFFECTIVE";
}[];
};
}


export interface ToolActionCategoryParams {
  advertiser_id: string;
  special_industries?: ("HOUSING" | "EMPLOYMENT" | "CREDIT")[];
  language?: string;
}


export interface ToolActionCategoryResponse {
  code?: number;
  message?: string;
  data?: {
  action_categories?: {
  description?: string;
  action_category_id?: string;
  level?: number;
  sub_category_ids?: string[];
  name?: string;
  special_industries?: ("HOUSING" | "EMPLOYMENT" | "CREDIT")[];
  action_scene?: "CREATOR_RELATED" | "VIDEO_RELATED";
}[];
};
  request_id?: string;
}


export interface ToolHashtagRecommendParams {
  advertiser_id: string;
  keywords: string[];
  operator?: "AND" | "OR";
}


export interface ToolHashtagRecommendResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  recommend_keywords?: {
  input_keyword?: string;
  keyword?: string;
  keyword_id?: string;
  keyword_status?: "ONLINE" | "OFFLINE";
}[];
};
}


export interface ToolHashtagGetParams {
  advertiser_id: string;
  keyword_ids: string[];
}


export interface ToolHashtagGetResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  keywords_status?: {
  keyword?: string;
  keyword_id?: string;
  keyword_status?: "ONLINE" | "OFFLINE";
}[];
};
}


export interface ToolTargetingCategoryRecommendParams {
  advertiser_id: string;
  region_codes: string[];
  app_id?: string;
}


export interface ToolTargetingCategoryRecommendResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  interest_categories?: {
  interest_category_id?: string;
  interest_category_name?: string;
  placements?: string[];
  special_industries?: ("HOUSING" | "EMPLOYMENT" | "CREDIT")[];
}[];
  action_categories?: {
  action_category_id?: string;
  action_category_name?: string;
  description?: string;
  scene?: "CREATOR_RELATED" | "VIDEO_RELATED";
  special_industries?: ("HOUSING" | "EMPLOYMENT" | "CREDIT")[];
}[];
};
}


export interface ToolSearchKeywordRecommendParams {}


export interface ToolSearchKeywordRecommendResponse {}


export interface ToolDiagnosisSearchHealthParams {
  advertiser_id: string;
  adgroup_id?: string;
  ad_ids?: string[];
}


export interface ToolDiagnosisSearchHealthResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  search_health_status?: "GOOD" | "NEED_IMPROVEMENT" | "NO_DATA";
  search_volume?: {
  diagnosis_result?: "HIGH" | "MEDIUM" | "LOW" | "INVALID";
  total_monthly_searches?: number;
};
  total_keyword_count?: number;
  total_relevant_keyword_count?: number;
  keyword_relevance?: {
  adgroup_id?: string;
  ad_id?: string;
  keyword_relevance_status?: "TO_BE_CALCULATED" | "PARTIALLY_RELEVANT" | "RELEVANT" | "IRRELEVANT";
  relevant_keyword_count?: number;
  relevant_keywords?: string[];
  irrelevant_keyword_count?: number;
  irrelevant_keywords?: string[];
}[];
  bid_budget?: {
  bid_budget_status?: "GOOD" | "LOW_BID_AND_BUDGET" | "LOW_BUDGET" | "LOW_BID" | "NO_DATA";
  bid_suggestion_status?: "GOOD" | "LOW" | "NO_DATA";
  suggested_value?: string;
};
};
}


export interface ToolSearchKeywordKeywordIdeaParams {
  advertiser_id: string;
  keywords: string[];
  order_field?: "AVG_MONTHLY_SEARCHES" | "THREE_MONTH_CHANGE" | "YEAR_OVER_YEAR_CHANGE" | "COMPETITION";
  order_type?: "ASC" | "DESC";
  brand_type?: "BRAND" | "NON_BRAND" | "ALL";
  country_codes?: string[];
}


export interface ToolSearchKeywordKeywordIdeaResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  total_search_volume_lower?: number;
  total_search_volume_upper?: number;
  keywords?: {
  recommended_keyword?: string;
  avg_monthly_searches_lower?: number;
  avg_monthly_searches_upper?: number;
  three_month_change?: number;
  year_over_year_change?: number;
  competition?: "HIGH" | "MEDIUM" | "LOW";
  estimated_cpc_lower?: number;
  estimated_cpc_upper?: number;
}[];
};
}


export interface ToolOsVersionParams {
  advertiser_id: string;
  os_type: "ANDROID" | "IOS";
}


export interface ToolOsVersionResponse {
  code?: number;
  message?: string;
  data?: {
  os_versions?: {
  os_id?: string;
  os_type?: string;
  version?: string;
  name?: string;
}[];
};
  request_id?: string;
}


export interface ToolDeviceModelParams {
  advertiser_id: string;
}


export interface ToolDeviceModelResponse {
  code?: number;
  message?: string;
  data?: string;
  device_models?: {
  device_model_id?: string;
  device_model_name?: string;
  child_device_ids?: string[];
  is_active?: boolean;
  level?: "BRAND" | "SERIES" | "MODEL";
  os_type?: "ANDROID" | "IOS";
}[];
  request_id?: string;
}


export interface ToolCarrierParams {
  advertiser_id: string;
}


export interface ToolCarrierResponse {
  code?: number;
  message?: string;
  data?: {
  countries?: {
  country_code?: string;
  carriers?: {
  carrier_id?: string;
  in_use?: boolean;
  name?: string;
  value?: {
  hni_id?: number;
  in_use?: boolean;
}[];
}[];
}[];
};
  request_id?: string;
}


export interface ToolTargetingListParams {}


export interface ToolTargetingListResponse {}


export interface ToolContextualTagGetParams {}


export interface ToolContextualTagGetResponse {}


export interface ToolContextualTagInfoParams {}


export interface ToolContextualTagInfoResponse {}


export interface ToolContentExclusionGetParams {
  advertiser_id: string;
  objective_type: "REACH" | "VIDEO_VIEWS" | "ENGAGEMENT";
  brand_safety_type?: "NO_BRAND_SAFETY" | "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY";
}


export interface ToolContentExclusionGetResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  excluded_category_list?: {
  category_id?: string;
  category_name?: string;
  supported_regions?: string[];
  description?: string;
  category_type?: string;
}[];
  vertical_sensitivity_list?: {
  category_id?: string;
  category_name?: string;
  supported_regions?: string[];
  description?: string;
  category_type?: string;
}[];
};
}


export interface ToolContentExclusionInfoParams {
  advertiser_id: string;
  category_ids: string[];
}


export interface ToolContentExclusionInfoResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  content_exclusion_list?: {
  category_id?: string;
  category_name?: string;
  supported_regions?: string[];
  description?: string;
  category_type?: "CATEGORY_TYPE_EXCLUSION" | "CATEGORY_TYPE_VERTICAL";
}[];
};
}


export interface DeliveryBudgetRecommendParams {}


export interface DeliveryBudgetRecommendResponse {}


export interface DeliveryBidRecommendParams {}


export interface DeliveryBidRecommendResponse {}


export interface ToolBidRecommendParams {
  advertiser_id: string;
  campaign_id?: string;
  objective_type: string;
  location_ids: string[];
  external_action?: string;
}


export interface ToolBidRecommendResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  bid?: number;
};
}


export interface ToolVboStatusParams {}


export interface ToolVboStatusResponse {}


export interface ToolBrandSafetyPartnerAuthorizeStatusParams {
  advertiser_id: string;
  partner: string;
}


export interface ToolBrandSafetyPartnerAuthorizeStatusResponse {
  code?: number;
  message?: string;
  data?: {
  status?: "OK" | "NOT_FOUND";
};
  request_id?: string;
}


export interface ToolUrlValidateParams {}


export interface ToolUrlValidateResponse {}


export interface ToolPhoneRegionCodeParams {}


export interface ToolPhoneRegionCodeResponse {}


export interface ToolTimezoneParams {
  advertiser_id: string;
}


export interface ToolTimezoneResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  timezones?: {
  timezone?: string;
  gmt_offset?: string;
}[];
};
}


export interface ToolOpenUrlParams {
  advertiser_id: string;
  url: string;
  url_type: "USER_PROFILE" | "VIDEO" | "HASHTAG_CHALLENGE" | "MUSIC" | "STICKER" | "STICKER_SHOOTER";
}


export interface ToolOpenUrlResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  open_url?: string;
  supported_regions?: ("STICKER" | "STICKER_SHOOTER")[];
};
}


export interface CampaignLabelGetParams {
  advertiser_id: string;
  campaign_label_ids?: string[];
  campaign_label_names?: string[];
  campaign_label_types?: ("GENERAL" | "MARKETING_EVENT")[];
  page?: number;
  page_size?: number;
}


export interface CampaignLabelGetResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  list?: {
  campaign_label_id?: string;
  campaign_label_name?: string;
  campaign_label_type?: "GENERAL" | "MARKETING_EVENT";
  campaign_label_color?: string;
  create_time?: string;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
};
}


export interface MinisGetParams {}


export interface MinisGetResponse {}

