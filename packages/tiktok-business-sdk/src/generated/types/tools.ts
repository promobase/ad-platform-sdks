// Auto-generated types for Tools — do not edit

export interface ToolTargetingSearchParams {
  advertiser_id: string;
  objective_type: "REACH" | "TRAFFIC" | "VIDEO_VIEWS" | "LEAD_GENERATION" | "ENGAGEMENT" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "PRODUCT_SALES";
  promotion_type?: string;
  placements: string[];
  search_type: "FUZZY_SEARCH" | "BATCH_REGION_SEARCH" | "BATCH_ZIPCODE_SEARCH";
  keywords: string[];
  geo_types?: ("COUNTRY" | "PROVINCE" | "CITY" | "DISTRICT" | "DMA" | "ZIP_CODE" | "FUZZY_SEARCH" | "BATCH_ZIPCODE_SEARCH" | "BATCH_REGION_SEARCH")[];
  region_codes?: string[];
  operating_system?: "ANDROID" | "IOS";
  brand_safety_type?: "NO_BRAND_SAFETY" | "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "THIRD_PARTY" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "TRAFFIC" | "LEAD_GENERATION";
  brand_safety_partner?: "IAS" | "OPEN_SLATE";
}


export interface ToolTargetingSearchResponse {
  targeting_tag_list?: {
  keyword?: string;
  targeting_type?: string;
  name?: string;
  status_info?: {
  status?: "ENABLED" | "DISABLED";
  reason?: "OFFLINE" | "NOT_SUPPORTED";
};
  geo?: {
  geo_id?: string;
  geo_type?: "COUNTRY" | "PROVINCE" | "CITY" | "DISTRICT" | "DMA" | "ZIP_CODE";
  description?: string;
  region_code?: string;
  parent_id?: string;
};
}[];
  parent_tags?: {
  targeting_type?: string;
  name?: string;
  status_info?: {
  status?: "ENABLED" | "DISABLED";
  reason?: "OFFLINE" | "NOT_SUPPORTED";
};
  geo?: {
  geo_id?: string;
  geo_type?: "COUNTRY" | "PROVINCE" | "CITY" | "DISTRICT" | "DMA" | "ZIP_CODE";
  description?: string;
  region_code?: string;
  parent_id?: string;
};
}[];
}


export interface ToolTargetingInfoParams {
  advertiser_id: string;
  scene?: "GEO" | "ISP";
  targeting_ids: string[];
  objective_type?: "REACH" | "TRAFFIC" | "VIDEO_VIEWS" | "LEAD_GENERATION" | "ENGAGEMENT" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "PRODUCT_SALES";
  promotion_type?: string;
  placements?: string[];
  operating_system?: "ANDROID" | "IOS";
  brand_safety_type?: "NO_BRAND_SAFETY" | "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "THIRD_PARTY" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "TRAFFIC" | "LEAD_GENERATION";
  brand_safety_partner?: "IAS" | "OPEN_SLATE";
}


export interface ToolTargetingInfoResponse {
  targeting_tag_list?: {
  targeting_type?: "GEO" | "ISP";
  name?: string;
  status_info?: {
  status?: "ENABLED" | "DISABLED";
  reason?: "OFFLINE" | "NOT_SUPPORTED";
};
  geo?: {
  geo_id?: string;
  geo_type?: "COUNTRY" | "PROVINCE" | "CITY" | "DISTRICT" | "DMA" | "ZIP_CODE";
  description?: string;
  region_code?: string;
  parent_id?: string;
};
  isp?: {
  isp_id?: string;
  location_id?: string;
  region_code?: string;
};
}[];
  parent_tags?: {
  targeting_type?: string;
  name?: string;
  status_info?: {
  status?: "ENABLED" | "DISABLED";
  reason?: "OFFLINE" | "NOT_SUPPORTED";
};
  geo?: {
  geo_id?: string;
  geo_type?: "COUNTRY" | "PROVINCE" | "CITY" | "DISTRICT" | "DMA" | "ZIP_CODE";
  description?: string;
  region_code?: string;
  parent_id?: string;
};
}[];
}


export interface ToolRegionParams {
  advertiser_id: string;
  placements: string[];
  objective_type: string;
  app_promotion_type?: "APP_INSTALL" | "APP_RETARGETING" | "APP_PREREGISTRATION" | "MINIS";
  level_range?: "ALL" | "TO_COUNTRY" | "TO_PROVINCE" | "TO_CITY" | "TO_DISTRICT";
  language?: string;
  shopping_ads_type?: "VIDEO" | "LIVE" | "PRODUCT_SHOPPING_ADS";
  promotion_type?: string;
  promotion_target_type?: "INSTANT_PAGE" | "EXTERNAL_WEBSITE";
  operating_system?: "ANDROID" | "IOS";
  brand_safety_type?: "NO_BRAND_SAFETY" | "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "THIRD_PARTY" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "TRAFFIC" | "LEAD_GENERATION";
  brand_safety_partner?: "IAS" | "OPEN_SLATE";
  rf_campaign_type?: "STANDARD" | "PULSE";
}


export interface ToolRegionResponse {
  region_list?: string[];
  region_info?: {
  location_id?: string;
  name?: string;
  parent_id?: string;
  region_code?: string;
  next_level_ids?: string[];
  area_type?: "ADMIN" | "METROPOLITAN_OR_DMA";
  level?: "COUNTRY" | "PROVINCE" | "CITY" | "DISTRICT";
  support_below_18?: boolean;
}[];
}


export interface SearchRegionParams {
  advertiser_id: string;
  language?: string;
}


export interface SearchRegionResponse {
  region_list?: {
  region_id?: string;
  region_name?: string;
  region_level?: "COUNTRY" | "PROVINCE" | "CITY" | "DISTRICT";
  country_code?: string;
  parent_id?: string;
  area_type?: "ADMIN" | "METROPOLITAN_OR_DMA";
  support_below_18?: boolean;
}[];
}


export interface ToolLanguageParams {
  advertiser_id: string;
}


export interface ToolLanguageResponse {
  languages?: {
  code?: string;
  name?: string;
}[];
}


export interface TargetingSearchParams {
  advertiser_id: string;
  targeting_type: string;
  sub_targeting_types?: ("GENERAL_INTEREST" | "ADDITIONAL_INTEREST" | "PURCHASE_INTENTION" | "VIDEO_INTERACTION" | "CREATOR_INTERACTION" | "HASHTAG_INTERACTION")[];
  search_keywords?: string[];
  language?: string;
  filtering?: {
  special_industries?: ("HOUSING" | "EMPLOYMENT" | "CREDIT")[];
};
}


export interface TargetingSearchResponse {
  general_interest?: {
  list_result?: {
  sub_targeting_type?: string;
  id?: string;
  name?: string;
  supported_special_industries?: ("HOUSING" | "EMPLOYMENT" | "CREDIT")[];
  level?: number;
  children_ids?: string[];
  hashtag_type?: string;
}[];
  search_result?: string;
};
  additional_interest?: {
  search_result?: string;
};
  purchase_intention?: {
  list_result?: {
  sub_targeting_type?: string;
  id?: string;
  name?: string;
  supported_special_industries?: ("HOUSING" | "EMPLOYMENT" | "CREDIT")[];
  level?: number;
  children_ids?: string[];
  hashtag_type?: string;
}[];
  search_result?: string;
};
  video_interaction?: {
  list_result?: {
  sub_targeting_type?: string;
  id?: string;
  name?: string;
  supported_special_industries?: ("HOUSING" | "EMPLOYMENT" | "CREDIT")[];
  level?: number;
  children_ids?: string[];
  hashtag_type?: string;
}[];
  search_result?: string;
};
  creator_interaction?: {
  list_result?: {
  sub_targeting_type?: string;
  id?: string;
  name?: string;
  supported_special_industries?: ("HOUSING" | "EMPLOYMENT" | "CREDIT")[];
  level?: number;
  children_ids?: string[];
  hashtag_type?: string;
}[];
  search_result?: string;
};
  hashtag_interaction?: {
  list_result?: {
  sub_targeting_type?: string;
  id?: string;
  name?: string;
  supported_special_industries?: ("HOUSING" | "EMPLOYMENT" | "CREDIT")[];
  level?: number;
  children_ids?: string[];
  hashtag_type?: string;
}[];
  search_result?: string;
};
}


export interface ToolInterestCategoryParams {
  advertiser_id: string;
  version?: number;
  language?: string;
  placements?: string[];
  special_industries?: ("HOUSING" | "EMPLOYMENT" | "CREDIT")[];
}


export interface ToolInterestCategoryResponse {
  interest_categories?: {
  interest_category_id?: string;
  interest_category_name?: string;
  level?: number;
  sub_category_ids?: string[];
  special_industries?: ("HOUSING" | "EMPLOYMENT" | "CREDIT")[];
  placements?: string[];
}[];
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
  recommended_keywords?: {
  input_keyword?: string;
  keyword?: string;
  keyword_id?: string;
  language?: string;
  status?: "EFFECTIVE" | "INEFFECTIVE";
}[];
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
  keywords?: {
  keyword?: string;
  keyword_id?: string;
  status?: "EFFECTIVE" | "INEFFECTIVE";
}[];
}


export interface ToolActionCategoryParams {
  advertiser_id: string;
  special_industries?: ("HOUSING" | "EMPLOYMENT" | "CREDIT")[];
  language?: string;
}


export interface ToolActionCategoryResponse {
  action_categories?: {
  description?: string;
  action_category_id?: string;
  level?: number;
  sub_category_ids?: string[];
  name?: string;
  special_industries?: ("HOUSING" | "EMPLOYMENT" | "CREDIT")[];
  action_scene?: "CREATOR_RELATED" | "VIDEO_RELATED";
}[];
}


export interface ToolHashtagRecommendParams {
  advertiser_id: string;
  keywords: string[];
  operator?: "AND" | "OR";
}


export interface ToolHashtagRecommendResponse {
  recommend_keywords?: {
  input_keyword?: string;
  keyword?: string;
  keyword_id?: string;
  keyword_status?: "ONLINE" | "OFFLINE";
}[];
}


export interface ToolHashtagGetParams {
  advertiser_id: string;
  keyword_ids: string[];
}


export interface ToolHashtagGetResponse {
  keywords_status?: {
  keyword?: string;
  keyword_id?: string;
  keyword_status?: "ONLINE" | "OFFLINE";
}[];
}


export interface ToolTargetingCategoryRecommendParams {
  advertiser_id: string;
  region_codes: string[];
  app_id?: string;
}


export interface ToolTargetingCategoryRecommendResponse {
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
}


export interface ToolSearchKeywordRecommendParams {
  advertiser_id: string;
  search_queries?: string[];
  ad_ids?: string[];
  landing_page_urls?: string[];
  regions: string[];
  order_field?: "RELEVANCE" | "MONTHLY_SEARCHES";
  order_type?: "ASC" | "DESC";
  total_size?: number;
  page?: number;
  page_size?: number;
}


export interface ToolSearchKeywordRecommendResponse {
  recommended_keywords?: {
  recommended_keyword?: string;
  monthly_searches?: number;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface ToolDiagnosisSearchHealthParams {
  advertiser_id: string;
  adgroup_id?: string;
  ad_ids?: string[];
}


export interface ToolDiagnosisSearchHealthResponse {
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
}


export interface ToolOsVersionParams {
  advertiser_id: string;
  os_type: "ANDROID" | "IOS";
}


export interface ToolOsVersionResponse {
  os_versions?: {
  os_id?: string;
  os_type?: string;
  version?: string;
  name?: string;
}[];
}


export interface ToolDeviceModelParams {
  advertiser_id: string;
}


export interface ToolDeviceModelResponse {}


export interface ToolCarrierParams {
  advertiser_id: string;
}


export interface ToolCarrierResponse {
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
}


export interface ToolTargetingListParams {
  advertiser_id: string;
  location_ids: string[];
  scene: string;
}


export interface ToolTargetingListResponse {
  targeting_tag_list?: {
  targeting_type?: string;
  name?: string;
  status_info?: {
  status?: "ENABLED" | "DISABLED";
  reason?: "OFFLINE" | "NOT_SUPPORTED";
};
  isp?: {
  isp_id?: string;
  location_id?: string;
  region_code?: string;
};
  geo?: Record<string, unknown>;
}[];
  parent_tags?: Record<string, unknown>[];
}


export interface ToolContextualTagGetParams {
  advertiser_id: string;
  objective_type: string;
  region_codes?: string[];
  brand_safety_type?: "EXPANDED_INVENTORY" | "NO_BRAND_SAFETY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "TRAFFIC" | "LEAD_GENERATION";
  rf_campaign_type?: "STANDARD" | "PULSE";
}


export interface ToolContextualTagGetResponse {
  contextual_tag_list?: {
  contextual_tag_id?: string;
  name?: string;
  type?: "GENERAL" | "PREMIUM";
  content_lineup_type?: "MAX_PULSE" | "CUSTOM" | "CATEGORY" | "SEASONAL" | "AE" | "AU" | "BR" | "CA" | "DE" | "ES" | "FR" | "GB" | "IT" | "MX" | "SA" | "TR" | "US";
  status?: "ONLINE" | "OFFLINE";
  description?: string;
  objective_types?: string[];
  region_codes?: string[];
}[];
}


export interface ToolContextualTagInfoParams {
  advertiser_id: string;
  contextual_tag_ids: string[];
}


export interface ToolContextualTagInfoResponse {
  contextual_tag_list?: {
  contextual_tag_id?: string;
  name?: string;
  type?: "GENERAL" | "PREMIUM";
  content_lineup_type?: "MAX_PULSE" | "CUSTOM" | "CATEGORY" | "SEASONAL" | "AE" | "AU" | "BR" | "CA" | "DE" | "ES" | "FR" | "GB" | "IT" | "MX" | "SA" | "TR" | "US";
  status?: "ONLINE" | "OFFLINE";
  description?: string;
  objective_types?: string[];
  region_codes?: string[];
}[];
}


export interface ToolContentExclusionGetParams {
  advertiser_id: string;
  objective_type: string;
  brand_safety_type?: "NO_BRAND_SAFETY" | "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY";
}


export interface ToolContentExclusionGetResponse {
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
}


export interface ToolContentExclusionInfoParams {
  advertiser_id: string;
  category_ids: string[];
}


export interface ToolContentExclusionInfoResponse {
  content_exclusion_list?: {
  category_id?: string;
  category_name?: string;
  supported_regions?: string[];
  description?: string;
  category_type?: "CATEGORY_TYPE_EXCLUSION" | "CATEGORY_TYPE_VERTICAL";
}[];
}


export interface DeliveryBudgetRecommendParams {
  advertiser_id: string;
  adgroup_ids: string[];
}


export interface DeliveryBudgetRecommendResponse {
  results?: {
  adgroup_id?: string;
  recommendations?: {
  recommended_budget?: number;
  budget_increase_ratio?: number;
  estimated_conversion?: number;
  conversion_uplift?: number;
  conversion_uplift_ratio?: number;
}[];
}[];
}


export interface DeliveryBidRecommendParams {
  advertiser_id: string;
  adgroup_ids: string[];
}


export interface DeliveryBidRecommendResponse {
  results?: {
  adgroup_id?: string;
  recommendations?: {
  recommended_bid?: number;
  bid_increase_ratio?: number;
  estimated_cost?: number;
  cost_uplift?: number;
  cost_uplift_ratio?: number;
}[];
}[];
}


export interface ToolBidRecommendParams {
  advertiser_id: string;
  campaign_id?: string;
  objective_type: string;
  location_ids: string[];
  external_action?: string;
}


export interface ToolBidRecommendResponse {
  bid?: number;
}


export interface ToolVboStatusParams {
  advertiser_id: string;
  objective_type: string;
  app_promotion_type?: "APP_INSTALL" | "APP_RETARGETING" | "MINIS";
  campaign_type?: string;
  is_advanced_dedicated_campaign?: boolean;
  disable_skan_campaign?: boolean;
  bid_align_type?: "SAN" | "SKAN";
  promotion_type: string;
  placements: string[];
  ios14_quota_type?: "OCCUPIED" | "UNOCCUPIED";
  campaign_app_profile_page_state?: "ON" | "OFF";
  pixel_id?: string;
  app_id?: string;
  optimization_event?: string;
  store_id?: string;
  is_smart_performance_campaign?: boolean;
  campaign_automation_type?: "MANUAL" | "SMART_PLUS" | "UPGRADED_SMART_PLUS";
  budget_optimize_on?: boolean;
}


export interface ToolVboStatusResponse {
  vo_status?: "QUALIFIED" | "NO_EVENT" | "NO_VALUE" | "INSUFFICIENT_EVENTS" | "NOT_SUPPORT";
  vo_min?: "QUALIFIED" | "NO_EVENT" | "NO_VALUE" | "INSUFFICIENT_EVENTS" | "NOT_SUPPORT";
  vo_min_roas?: "QUALIFIED" | "NO_EVENT" | "NO_VALUE" | "INSUFFICIENT_EVENTS" | "NOT_SUPPORT";
  vo_highest_value?: "QUALIFIED" | "NO_EVENT" | "NO_VALUE" | "INSUFFICIENT_EVENTS" | "NOT_SUPPORT";
  vo_iaa_min_roas?: "QUALIFIED" | "NO_EVENT" | "NO_VALUE" | "INSUFFICIENT_EVENTS" | "NOT_SUPPORT";
  vo_iaa_highest_value?: "QUALIFIED" | "NO_EVENT" | "NO_VALUE" | "INSUFFICIENT_EVENTS" | "NOT_SUPPORT";
  vo_iaa_min_roas_zero_day?: "QUALIFIED" | "NO_EVENT" | "NO_VALUE" | "INSUFFICIENT_EVENTS" | "NOT_SUPPORT";
  vo_iaa_highest_value_zero_day?: "QUALIFIED" | "NO_EVENT" | "NO_VALUE" | "INSUFFICIENT_EVENTS" | "NOT_SUPPORT";
  roas_status_day7?: "QUALIFIED" | "NO_EVENT" | "NO_VALUE" | "INSUFFICIENT_EVENTS" | "NOT_SUPPORT";
  highest_value_status_day7?: "QUALIFIED" | "NO_EVENT" | "NO_VALUE" | "INSUFFICIENT_EVENTS" | "NOT_SUPPORT";
  roas_status_day0?: "QUALIFIED" | "NO_EVENT" | "NO_VALUE" | "INSUFFICIENT_EVENTS" | "NOT_SUPPORT";
  highest_value_status_day0?: "QUALIFIED" | "NO_EVENT" | "NO_VALUE" | "INSUFFICIENT_EVENTS" | "NOT_SUPPORT";
}


export interface ToolBrandSafetyPartnerAuthorizeStatusParams {
  advertiser_id: string;
  partner: string;
}


export interface ToolBrandSafetyPartnerAuthorizeStatusResponse {
  status?: "OK" | "NOT_FOUND";
}


export interface ToolVastOptionParams {
  advertiser_id: string;
  objective_type: string;
  region_codes?: string[];
  brand_safety_type?: "STANDARD_INVENTORY" | "LIMITED_INVENTORY";
}


export interface ToolVastOptionResponse {
  option_list?: {
  partner?: "MOAT" | "DOUBLE_VERIFY" | "IAS" | "ZEFR";
  partner_name?: string;
  vast_type?: "VIEWABILITY" | "BRAND_SAFETY";
  is_require_url?: boolean;
  is_available?: boolean;
  unavailable_reason?: {
  reason?: string;
  reason_type?: "UNSUPPORTED_PARTNER" | "UNSUPPORTED_OBJ_TYPE" | "UNSUPPORTED_COUNTRY" | "UNSUPPORTED_PREBID";
}[];
}[];
}


export interface ToolUrlValidateParams {
  advertiser_id: string;
  url: string;
}


export interface ToolUrlValidateResponse {
  landing_page_url_info?: {
  validate_info?: {
  is_scheme_link?: boolean;
  is_valid_url?: boolean;
  is_valid_scheme?: boolean;
};
};
}


export interface ToolPhoneRegionCodeParams {
  advertiser_id: string;
}


export interface ToolPhoneRegionCodeResponse {
  phone_region_code_infos?: {
  phone_region_name?: string;
  phone_region_code?: string;
  phone_region_calling_code?: string;
}[];
}


export interface ToolTimezoneParams {
  advertiser_id: string;
}


export interface ToolTimezoneResponse {
  timezones?: {
  timezone?: string;
  gmt_offset?: string;
}[];
}


export interface ToolOpenUrlParams {
  advertiser_id: string;
  url: string;
  url_type: "USER_PROFILE" | "VIDEO" | "HASHTAG_CHALLENGE" | "MUSIC" | "STICKER" | "STICKER_SHOOTER";
}


export interface ToolOpenUrlResponse {
  open_url?: string;
  supported_regions?: string[];
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
}


export interface MinisGetParams {
  advertiser_id: string;
  page?: number;
  page_size?: number;
}


export interface MinisGetResponse {
  list?: {
  minis_id?: string;
  minis_name?: string;
  minis_icon_url?: string;
  minis_status?: "ACTIVE" | "INACTIVE";
  minis_type?: "MINI_SERIES" | "MINI_GAME";
  region_codes?: string[];
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface IdentityNativeSeriesGetParams {
  advertiser_id: string;
  identity_id: string;
  identity_type: "TT_USER" | "BC_AUTH_TT";
  identity_authorized_bc_id?: string;
  cursor?: number;
  count?: number;
}


export interface IdentityNativeSeriesGetResponse {
  list?: {
  native_series_id?: string;
  native_series_name?: string;
  native_series_cover_url?: string;
  native_series_total_episode?: number;
  native_series_total_duration?: number;
}[];
  cursor?: number;
  has_more?: boolean;
}


export interface ToolAvailableAttributionSourceParams {
  advertiser_id: string;
  app_id: string;
  optimization_event?: string;
  campaign_type?: "REGULAR_CAMPAIGN" | "IOS14_CAMPAIGN";
}


export interface ToolAvailableAttributionSourceResponse {
  connected_data_source?: ("MMP" | "EVENT_SDK" | "EVENT_API")[];
  available_attribution_source_list?: {
  available_attribution_source?: "MMP" | "SAN";
  available_data_source?: ("MMP" | "EVENT_SDK" | "EVENT_API")[];
}[];
}
