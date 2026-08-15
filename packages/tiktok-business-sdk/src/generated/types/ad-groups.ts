// @generated
// fingerprint: sha256:04bca58ebb54d3fd7657cc67594cc2ac92bce03d8db1cd6476ce2a0475b889f5
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for Ad Groups — do not edit

export interface AdgroupGetParams {
  advertiser_id: string;
  fields?: string[];
  exclude_field_types_in_response?: string[];
  filtering?: {
  campaign_automation_type?: "MANUAL" | "SMART_PLUS" | "UPGRADED_SMART_PLUS";
  campaign_ids?: string[];
  campaign_system_origins?: ("PROMOTE" | "TT_ADS_PLATFORM")[];
  adgroup_ids?: string[];
  adgroup_name?: string;
  primary_status?: string;
  secondary_status?: string;
  objective_type?: string;
  buying_types?: ("AUCTION" | "RESERVATION_RF" | "RESERVATION_TOP_VIEW")[];
  optimization_goal?: string;
  promotion_type?: "APP" | "WEBSITE" | "INSTANT_FORM" | "LEAD_GEN_CLICK_TO_TT_DIRECT_MESSAGE" | "LEAD_GEN_CLICK_TO_SOCIAL_MEDIA_APP_MESSAGE" | "LEAD_GEN_CLICK_TO_CALL";
  bid_strategy?: "BID_STRATEGY_COST_CAP" | "BID_STRATEGY_MAX_CONVERSION" | "BID_STRATEGY_LOWEST_COST";
  creative_material_mode?: "CUSTOM" | "SMART_CREATIVE";
  billing_events?: string[];
  creation_filter_start_time?: string;
  creation_filter_end_time?: string;
  split_test_enabled?: boolean;
};
  page?: number;
  page_size?: number;
}


export interface AdgroupGetResponse {
  list?: {
  advertiser_id?: string;
  campaign_id?: string;
  campaign_name?: string;
  campaign_system_origin?: string;
  campaign_automation_type?: "MANUAL" | "SMART_PLUS" | "UPGRADED_SMART_PLUS";
  is_smart_performance_campaign?: boolean;
  adgroup_id?: string;
  adgroup_name?: string;
  create_time?: string;
  modify_time?: string;
  shopping_ads_type?: "VIDEO" | "LIVE" | "PRODUCT_SHOPPING_ADS" | "CATALOG_LISTING_ADS" | "UNSET";
  identity_id?: string;
  identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  identity_authorized_bc_id?: string;
  product_source?: "UNSET" | "CATALOG" | "STORE" | "SHOWCASE";
  catalog_id?: string;
  catalog_authorized_bc_id?: string;
  store_id?: string;
  store_authorized_bc_id?: string;
  promotion_type?: string;
  promotion_target_type?: "INSTANT_PAGE" | "EXTERNAL_WEBSITE" | "UNSET";
  messaging_app_type?: "MESSENGER" | "WHATSAPP" | "ZALO" | "LINE" | "IM_URL";
  messaging_app_account_id?: string;
  phone_region_code?: string;
  phone_region_calling_code?: string;
  phone_number?: string;
  promotion_website_type?: "UNSET" | "TIKTOK_NATIVE_PAGE";
  app_id?: string;
  app_type?: "APP_ANDROID" | "APP_IOS";
  app_download_url?: string;
  pixel_id?: string;
  optimization_event?: string;
  custom_conversion_id?: string;
  app_config?: {
  app_id?: string;
}[];
  deep_funnel_optimization_status?: "ON" | "OFF";
  deep_funnel_event_source?: "PIXEL" | "OFFLINE" | "CRM";
  deep_funnel_event_source_id?: string;
  deep_funnel_optimization_event?: string;
  placement_type?: "PLACEMENT_TYPE_AUTOMATIC" | "PLACEMENT_TYPE_NORMAL";
  placements?: string[];
  tiktok_subplacements?: ("IN_FEED" | "SEARCH_FEED" | "TIKTOK_LITE" | "LEMON8")[];
  search_result_enabled?: boolean;
  automated_keywords_enabled?: boolean;
  search_keywords?: {
  keyword?: string;
  match_type?: "PRECISE_WORD" | "PHRASE_WORD" | "BROAD_WORD";
  keyword_bid_type?: "FOLLOW_ADGROUP" | "CUSTOM";
  keyword_bid?: number;
  audit_status?: "AUDITING" | "PASS" | "REJECTED";
  reject_info?: {
  forbidden_location?: string;
  reject_reasons?: {
  reason?: string;
}[];
}[];
}[];
  comment_disabled?: boolean;
  video_download_disabled?: boolean;
  share_disabled?: boolean;
  blocked_pangle_app_ids?: string[];
  audience_type?: string;
  audience_rule?: Record<string, unknown>;
  auto_targeting_enabled?: boolean;
  shopping_ads_retargeting_type?: "LAB1" | "LAB2" | "LAB3" | "OFF";
  shopping_ads_retargeting_actions_days?: number;
  included_custom_actions?: {
  code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  days?: number;
}[];
  excluded_custom_actions?: {
  code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  days?: number;
}[];
  shopping_ads_retargeting_custom_audience_relation?: "OR" | "AND";
  location_ids?: string[];
  zipcode_ids?: string[];
  languages?: string[];
  gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  age_groups?: string[];
  spending_power?: "ALL" | "HIGH";
  household_income?: ("TOP5" | "TOP10" | "TOP10_25" | "TOP25_50")[];
  audience_ids?: string[];
  smart_audience_enabled?: boolean;
  excluded_audience_ids?: string[];
  interest_category_ids?: string[];
  interest_keyword_ids?: string[];
  purchase_intention_keyword_ids?: string[];
  actions?: {
  action_scene?: "VIDEO_RELATED" | "CREATOR_RELATED" | "HASHTAG_RELATED";
  action_period?: number;
  video_user_actions?: string[];
  action_category_ids?: string[];
}[];
  smart_interest_behavior_enabled?: boolean;
  included_pangle_audience_package_ids?: string[];
  excluded_pangle_audience_package_ids?: string[];
  operating_systems?: ("ANDROID" | "IOS")[];
  min_android_version?: string;
  ios14_targeting?: "UNSET" | "IOS14_MINUS" | "IOS14_PLUS" | "ALL";
  min_ios_version?: string;
  ios14_quota_type?: "OCCUPIED" | "UNOCCUPIED";
  device_model_ids?: string[];
  network_types?: string[];
  carrier_ids?: string[];
  isp_ids?: string[];
  device_price_ranges?: number[];
  targeting_expansion?: {
  expansion_enabled?: boolean;
  expansion_types?: string[];
};
  saved_audience_id?: string;
  contextual_tag_ids?: string[];
  brand_safety_type?: "NO_BRAND_SAFETY" | "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "THIRD_PARTY" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "TRAFFIC" | "LEAD_GENERATION" | "PRODUCT_SALES";
  brand_safety_partner?: "IAS" | "OPEN_SLATE";
  inventory_filter_enabled?: boolean;
  category_exclusion_ids?: string[];
  vertical_sensitivity_id?: string;
  budget_mode?: string;
  budget?: number;
  scheduled_budget?: number;
  schedule_type?: string;
  schedule_start_time?: string;
  schedule_end_time?: string;
  predict_impression?: number;
  topview_reach_range?: number[];
  pre_discount_cpm?: number;
  cpm?: number;
  discount_type?: "NO_DISCOUNT" | "BY_PERCENTAGE" | "BY_AMOUNT";
  discount_amount?: number;
  discount_percentage?: number;
  pre_discount_budget?: number;
  schedule_infos?: {
  schedules?: {
  start_time?: string;
  end_time?: string;
}[];
  expected_orders?: number[];
  is_draft?: boolean;
  schedule_id?: string;
}[];
  delivery_mode?: "STANDARD" | "SCHEDULE" | "SEQUENCE" | "VIEW_OPTIMIZE" | "OPTIMIZE";
  dayparting?: string;
  optimization_goal?: string;
  secondary_optimization_event?: string;
  message_event_set_id?: string;
  frequency?: number;
  frequency_schedule?: number;
  bid_type?: string;
  bid_price?: number;
  conversion_bid_price?: number;
  deep_bid_type?: string;
  roas_bid?: number;
  vbo_window?: "SEVEN_DAYS" | "ZERO_DAY";
  bid_display_mode?: string;
  deep_cpa_bid?: number;
  cpv_video_duration?: string;
  next_day_retention?: number;
  click_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS";
  engaged_view_attribution_window?: "ONE_DAY" | "SEVEN_DAYS";
  view_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS";
  attribution_event_count?: "UNSET" | "EVERY" | "ONCE";
  billing_event?: string;
  pacing?: string;
  operation_status?: "ENABLE" | "DISABLE" | "FROZEN";
  secondary_status?: string;
  statistic_type?: string;
  is_hfss?: boolean;
  is_lhf_compliance?: boolean;
  creative_material_mode?: "CUSTOM" | "DYNAMIC" | "SMART_CREATIVE";
  adgroup_app_profile_page_state?: "INVALID" | "UNSET" | "ON" | "OFF";
  feed_type?: "STANDARD_FEED" | "TOP_FEED";
  rf_purchased_type?: string;
  purchased_impression?: number;
  purchased_reach?: number;
  rf_estimated_cpr?: number;
  rf_estimated_frequency?: number;
  split_test_group_id?: string;
  split_test_status?: string;
  is_new_structure?: boolean;
  skip_learning_phase?: boolean;
  "conversion_window (deprecated)"?: string;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface AdgroupQuotaParams {
  advertiser_id: string;
}


export interface AdgroupQuotaResponse {
  total_adgroup_quota?: number;
  used_adgroup_quota?: number;
}


export interface AdAudienceSizeEstimateParams {
  advertiser_id: string;
  placement_type?: "PLACEMENT_TYPE_AUTOMATIC" | "PLACEMENT_TYPE_NORMAL";
  placements?: string[];
  app_id?: string;
  pixel_id?: string;
  ios14_targeting?: string;
  objective_type: string;
  optimization_goal: string;
  promotion_type?: string;
  product_source?: "UNSET" | "CATALOG" | "STORE";
  catalog_id?: string;
  product_set_id?: string;
  catalog_authorized_bc_id?: string;
  shopping_ads_retargeting_type?: "LAB1" | "LAB2" | "LAB3" | "OFF";
  shopping_ads_retargeting_actions_days?: number;
  included_custom_actions?: {
  code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  days?: number;
}[];
  excluded_custom_actions?: {
  code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  days?: number;
}[];
  audience_ids?: string[];
  excluded_audience_ids?: string[];
  audience_rule?: Record<string, unknown>;
  audience_type?: string;
  location_ids?: string[];
  zipcode_ids?: string[];
  isp_ids?: string[];
  gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  age_groups?: string[];
  languages?: string[];
  interest_category_ids?: string[];
  interest_keyword_ids?: string[];
  purchase_intention_keyword_ids?: string[];
  actions?: {
  action_scene?: "VIDEO_RELATED" | "CREATOR_RELATED" | "HASHTAG_RELATED";
  action_period?: number;
  video_user_actions?: string[];
  action_category_ids?: string[];
}[];
  operating_systems?: ("ANDROID" | "IOS" | "APP_PROMOTION" | "TRAFFIC" | "APP_IOS" | "APP_ANDROID")[];
  min_ios_version?: string;
  min_android_version?: string;
  device_model_ids?: string[];
  network_types?: string[];
  household_income?: ("TOP5" | "TOP10" | "TOP10_25" | "TOP25_50")[];
  spending_power?: "ALL" | "HIGH" | "PRODUCT_SALES" | "RF_REACH" | "PLACEMENT_TYPE_AUTOMATIC" | "PLACEMENT_TIKTOK";
  device_price_ranges?: number[];
  carrier_ids?: string[];
  included_pangle_audience_package_ids?: string[];
  excluded_pangle_audience_package_ids?: string[];
  blocked_pangle_app_ids?: string[];
  targeting_expansion?: {
  expansion_enabled?: boolean;
  expansion_types?: ("AGE" | "GENDER" | "INTEREST_AND_BEHAVIOR" | "CUSTOM_AUDIENCE")[];
};
  auto_targeting_enabled?: boolean;
  contextual_tag_ids?: string[];
}


export interface AdAudienceSizeEstimateResponse {
  user_count_stage?: number;
  user_count?: {
  lower_end?: number;
  upper_end?: number;
};
  purchase_intention_keyword_ids?: string[];
}


export interface AdgroupCreateParams {
  advertiser_id: string;
  campaign_id: string;
  adgroup_name: string;
  request_id?: string;
  shopping_ads_type?: "VIDEO" | "LIVE" | "PRODUCT_SHOPPING_ADS";
  identity_id?: string;
  identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  identity_authorized_bc_id?: string;
  product_source?: "UNSET" | "CATALOG" | "STORE" | "SHOWCASE";
  catalog_id?: string;
  catalog_authorized_bc_id?: string;
  store_id?: string;
  store_authorized_bc_id?: string;
  promotion_type?: string;
  promotion_target_type?: "INSTANT_PAGE" | "EXTERNAL_WEBSITE" | "CLICK";
  messaging_app_type?: "MESSENGER" | "WHATSAPP" | "ZALO" | "LINE" | "IM_URL";
  messaging_app_account_id?: string;
  phone_region_code?: string;
  phone_region_calling_code?: string;
  phone_number?: string;
  promotion_website_type?: "UNSET" | "TIKTOK_NATIVE_PAGE";
  app_id?: string;
  pixel_id?: string;
  optimization_event?: string;
  custom_conversion_id?: string;
  app_config?: {
  app_id?: string;
}[];
  deep_funnel_optimization_status?: "ON" | "OFF";
  deep_funnel_event_source?: "PIXEL" | "OFFLINE" | "CRM";
  deep_funnel_event_source_id?: string;
  deep_funnel_optimization_event?: string;
  placement_type?: "PLACEMENT_TYPE_AUTOMATIC" | "PLACEMENT_TYPE_NORMAL";
  placements?: string[];
  tiktok_subplacements?: ("IN_FEED" | "SEARCH_FEED" | "TIKTOK_LITE" | "LEMON8")[];
  search_result_enabled?: boolean;
  automated_keywords_enabled?: boolean;
  search_keywords?: {
  keyword?: string;
  match_type?: "PRECISE_WORD" | "PHRASE_WORD" | "BROAD_WORD";
  keyword_bid_type?: "FOLLOW_ADGROUP" | "CUSTOM";
  keyword_bid?: number;
}[];
  comment_disabled?: boolean;
  video_download_disabled?: boolean;
  share_disabled?: boolean;
  blocked_pangle_app_ids?: string[];
  saved_audience_id?: string;
  auto_targeting_enabled?: boolean;
  shopping_ads_retargeting_type?: "LAB1" | "LAB2" | "LAB3" | "OFF";
  shopping_ads_retargeting_actions_days?: number;
  included_custom_actions?: {
  code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  days?: number;
}[];
  excluded_custom_actions?: {
  code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  days?: number;
}[];
  shopping_ads_retargeting_custom_audience_relation?: "OR" | "AND";
  location_ids?: string[];
  zipcode_ids?: string[];
  languages?: string[];
  gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  age_groups?: string[];
  spending_power?: "ALL" | "HIGH" | "PRODUCT_SALES" | "RF_REACH" | "PLACEMENT_TYPE_AUTOMATIC" | "PLACEMENT_TIKTOK";
  household_income?: ("TOP5" | "TOP10" | "TOP10_25" | "TOP25_50")[];
  audience_ids?: string[];
  smart_audience_enabled?: boolean;
  excluded_audience_ids?: string[];
  interest_category_ids?: string[];
  interest_keyword_ids?: string[];
  purchase_intention_keyword_ids?: string[];
  actions?: {
  action_scene?: "VIDEO_RELATED" | "CREATOR_RELATED" | "HASHTAG_RELATED";
  action_period?: number;
  video_user_actions?: string[];
  action_category_ids?: string[];
}[];
  smart_interest_behavior_enabled?: boolean;
  included_pangle_audience_package_ids?: string[];
  excluded_pangle_audience_package_ids?: string[];
  operating_systems?: ("ANDROID" | "IOS" | "APP_PROMOTION" | "TRAFFIC" | "APP_IOS" | "APP_ANDROID")[];
  min_android_version?: string;
  ios14_targeting?: "UNSET" | "IOS14_MINUS" | "IOS14_PLUS" | "ALL" | "APP_RETARGETING" | "APP_IOS" | "VIDEO" | "CATALOG" | "OFF";
  min_ios_version?: string;
  device_model_ids?: string[];
  network_types?: string[];
  carrier_ids?: string[];
  isp_ids?: string[];
  device_price_ranges?: number[];
  targeting_expansion?: {
  expansion_enabled?: boolean;
  expansion_types?: ("AGE" | "GENDER" | "INTEREST_AND_BEHAVIOR" | "CUSTOM_AUDIENCE")[];
};
  audience_type?: string;
  audience_rule?: Record<string, unknown>;
  contextual_tag_ids?: string[];
  brand_safety_type?: "NO_BRAND_SAFETY" | "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "THIRD_PARTY" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "TRAFFIC" | "LEAD_GENERATION" | "PRODUCT_SALES";
  brand_safety_partner?: "IAS" | "OPEN_SLATE";
  category_exclusion_ids?: string[];
  vertical_sensitivity_id?: string;
  budget_mode: "BUDGET_MODE_TOTAL" | "BUDGET_MODE_DYNAMIC_DAILY_BUDGET";
  budget: number;
  schedule_type: string;
  schedule_start_time: string;
  schedule_end_time?: string;
  dayparting?: string;
  optimization_goal: string;
  secondary_optimization_event?: string;
  message_event_set_id?: string;
  frequency?: number;
  frequency_schedule?: number;
  bid_type?: string;
  bid_price?: number;
  conversion_bid_price?: number;
  deep_bid_type?: "VO_MIN_ROAS" | "VO_HIGHEST_VALUE";
  roas_bid?: number;
  vbo_window?: "SEVEN_DAYS" | "ZERO_DAY";
  bid_display_mode?: string;
  next_day_retention?: number;
  click_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS";
  engaged_view_attribution_window?: "ONE_DAY" | "SEVEN_DAYS";
  view_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS";
  attribution_event_count?: "UNSET" | "EVERY" | "ONCE";
  billing_event: string;
  pacing: string;
  statistic_type?: string;
  is_hfss?: boolean;
  is_lhf_compliance?: boolean;
  operation_status?: "ENABLE" | "DISABLE";
  creative_material_mode?: string;
  adgroup_app_profile_page_state?: "ON" | "OFF" | "IOS14_PLUS" | "IN_APP_EVENT" | "BID_TYPE_CUSTOM";
  "conversion_window (deprecated)"?: string;
}


export interface AdgroupCreateResponse {
  advertiser_id?: string;
  campaign_id?: string;
  campaign_name?: string;
  adgroup_id?: string;
  adgroup_name?: string;
  create_time?: string;
  modify_time?: string;
  shopping_ads_type?: "VIDEO" | "LIVE" | "PRODUCT_SHOPPING_ADS" | "CATALOG_LISTING_ADS" | "UNSET";
  identity_id?: string;
  identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  identity_authorized_bc_id?: string;
  product_source?: "UNSET" | "CATALOG" | "STORE" | "SHOWCASE";
  catalog_id?: string;
  catalog_authorized_bc_id?: string;
  store_id?: string;
  store_authorized_bc_id?: string;
  promotion_type?: string;
  promotion_target_type?: "INSTANT_PAGE" | "EXTERNAL_WEBSITE" | "UNSET";
  messaging_app_type?: "MESSENGER" | "WHATSAPP" | "ZALO" | "LINE" | "IM_URL";
  messaging_app_account_id?: string;
  phone_region_code?: string;
  phone_region_calling_code?: string;
  phone_number?: string;
  promotion_website_type?: "UNSET" | "TIKTOK_NATIVE_PAGE";
  app_id?: string;
  app_type?: "APP_ANDROID" | "APP_IOS";
  app_download_url?: string;
  pixel_id?: string;
  optimization_event?: string;
  custom_conversion_id?: string;
  app_config?: {
  app_id?: string;
}[];
  deep_funnel_optimization_status?: "ON" | "OFF";
  deep_funnel_event_source?: "PIXEL" | "OFFLINE" | "CRM";
  deep_funnel_event_source_id?: string;
  deep_funnel_optimization_event?: string;
  placement_type?: "PLACEMENT_TYPE_AUTOMATIC" | "PLACEMENT_TYPE_NORMAL";
  placements?: string[];
  tiktok_subplacements?: ("IN_FEED" | "SEARCH_FEED" | "TIKTOK_LITE" | "LEMON8")[];
  search_result_enabled?: boolean;
  automated_keywords_enabled?: boolean;
  search_keywords?: {
  keyword?: string;
  match_type?: "PRECISE_WORD" | "PHRASE_WORD" | "BROAD_WORD";
  keyword_bid_type?: "FOLLOW_ADGROUP" | "CUSTOM";
  keyword_bid?: number;
  audit_status?: "AUDITING" | "PASS" | "REJECTED";
  reject_info?: {
  forbidden_location?: string;
  reject_reasons?: {
  reason?: string;
}[];
}[];
}[];
  comment_disabled?: boolean;
  video_download_disabled?: boolean;
  share_disabled?: boolean;
  blocked_pangle_app_ids?: string[];
  audience_rule?: Record<string, unknown>;
  audience_type?: string;
  saved_audience_id?: string;
  auto_targeting_enabled?: boolean;
  shopping_ads_retargeting_type?: "LAB1" | "LAB2" | "LAB3" | "OFF";
  shopping_ads_retargeting_actions_days?: number;
  included_custom_actions?: {
  code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  days?: number;
}[];
  excluded_custom_actions?: {
  code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  days?: number;
}[];
  shopping_ads_retargeting_custom_audience_relation?: "OR" | "AND";
  location_ids?: string[];
  zipcode_ids?: string[];
  languages?: string[];
  gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  age_groups?: string[];
  spending_power?: "ALL" | "HIGH";
  household_income?: ("TOP5" | "TOP10" | "TOP10_25" | "TOP25_50")[];
  audience_ids?: string[];
  smart_audience_enabled?: boolean;
  excluded_audience_ids?: string[];
  interest_category_ids?: string[];
  interest_keyword_ids?: string[];
  purchase_intention_keyword_ids?: string[];
  actions?: {
  action_scene?: "VIDEO_RELATED" | "CREATOR_RELATED" | "HASHTAG_RELATED";
  action_period?: number;
  video_user_actions?: string[];
  action_category_ids?: string[];
}[];
  smart_interest_behavior_enabled?: boolean;
  included_pangle_audience_package_ids?: string[];
  excluded_pangle_audience_package_ids?: string[];
  operating_systems?: ("ANDROID" | "IOS")[];
  min_android_version?: string;
  ios14_targeting?: "UNSET" | "IOS14_MINUS" | "IOS14_PLUS" | "ALL";
  min_ios_version?: string;
  ios14_quota_type?: "OCCUPIED" | "UNOCCUPIED";
  device_model_ids?: string[];
  network_types?: string[];
  carrier_ids?: string[];
  isp_ids?: string[];
  device_price_ranges?: number[];
  targeting_expansion?: {
  expansion_enabled?: boolean;
  expansion_types?: string[];
};
  contextual_tag_ids?: string[];
  brand_safety_type?: "NO_BRAND_SAFETY" | "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "THIRD_PARTY";
  brand_safety_partner?: "IAS" | "OPEN_SLATE";
  inventory_filter_enabled?: boolean;
  category_exclusion_ids?: string[];
  vertical_sensitivity_id?: string;
  budget_mode?: string;
  budget?: number;
  scheduled_budget?: number;
  schedule_type?: string;
  schedule_start_time?: string;
  schedule_end_time?: string;
  delivery_mode?: "STANDARD" | "SCHEDULE" | "SEQUENCE" | "OPTIMIZE";
  dayparting?: string;
  optimization_goal?: string;
  secondary_optimization_event?: string;
  message_event_set_id?: string;
  frequency?: number;
  frequency_schedule?: number;
  bid_type?: string;
  bid_price?: number;
  conversion_bid_price?: number;
  deep_bid_type?: string;
  roas_bid?: number;
  vbo_window?: "SEVEN_DAYS" | "ZERO_DAY";
  bid_display_mode?: string;
  deep_cpa_bid?: number;
  cpv_video_duration?: string;
  next_day_retention?: number;
  click_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS";
  engaged_view_attribution_window?: "ONE_DAY" | "SEVEN_DAYS";
  view_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS";
  attribution_event_count?: "UNSET" | "EVERY" | "ONCE";
  billing_event?: string;
  pacing?: string;
  operation_status?: "ENABLE" | "DISABLE" | "FROZEN";
  secondary_status?: string;
  statistic_type?: string;
  is_hfss?: boolean;
  is_lhf_compliance?: boolean;
  creative_material_mode?: string;
  adgroup_app_profile_page_state?: "INVALID" | "UNSET" | "ON" | "OFF";
  rf_purchased_type?: string;
  purchased_impression?: number;
  purchased_reach?: number;
  rf_estimated_cpr?: number;
  rf_estimated_frequency?: number;
  is_new_structure?: boolean;
  skip_learning_phase?: boolean;
  "conversion_window (deprecated)"?: string;
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface AdgroupUpdateParams {
  adgroup_id: string;
  advertiser_id: string;
  adgroup_name?: string;
  catalog_authorized_bc_id?: string;
  deep_funnel_optimization_status?: "ON" | "OFF";
  deep_funnel_event_source?: "PIXEL" | "OFFLINE" | "CRM";
  deep_funnel_event_source_id?: string;
  deep_funnel_optimization_event?: string;
  comment_disabled?: boolean;
  share_disabled?: boolean;
  blocked_pangle_app_ids?: string[];
  search_result_enabled?: boolean;
  automated_keywords_enabled?: boolean;
  search_keywords?: {
  keyword?: string;
  match_type?: "PRECISE_WORD" | "PHRASE_WORD" | "BROAD_WORD";
  keyword_bid_type?: "FOLLOW_ADGROUP" | "CUSTOM";
  keyword_bid?: number;
}[];
  audience_type?: string;
  audience_rule?: Record<string, unknown>;
  saved_audience_id?: string;
  auto_targeting_enabled?: boolean;
  shopping_ads_retargeting_type?: "LAB1" | "LAB2" | "LAB3" | "OFF";
  shopping_ads_retargeting_actions_days?: number;
  included_custom_actions?: {
  code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  days?: number;
}[];
  excluded_custom_actions?: {
  code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  days?: number;
}[];
  shopping_ads_retargeting_custom_audience_relation?: "OR" | "AND";
  location_ids?: string[];
  zipcode_ids?: string[];
  languages?: string[];
  gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  age_groups?: string[];
  exclude_age_under_eighteen?: boolean;
  spending_power?: "ALL" | "HIGH" | "PRODUCT_SALES" | "RF_REACH" | "PLACEMENT_TYPE_AUTOMATIC" | "PLACEMENT_TIKTOK";
  household_income?: ("TOP5" | "TOP10" | "TOP10_25" | "TOP25_50")[];
  audience_ids?: string[];
  smart_audience_enabled?: boolean;
  excluded_audience_ids?: string[];
  interest_category_ids?: string[];
  interest_keyword_ids?: string[];
  purchase_intention_keyword_ids?: string[];
  actions?: {
  action_scene?: "VIDEO_RELATED" | "CREATOR_RELATED" | "HASHTAG_RELATED";
  action_period?: number;
  video_user_actions?: string[];
  action_category_ids?: string[];
}[];
  smart_interest_behavior_enabled?: boolean;
  included_pangle_audience_package_ids?: string[];
  excluded_pangle_audience_package_ids?: string[];
  operating_systems?: ("ANDROID" | "IOS" | "APP_PROMOTION" | "TRAFFIC" | "APP_IOS" | "APP_ANDROID")[];
  min_android_version?: string;
  ios14_targeting?: "UNSET" | "IOS14_MINUS" | "IOS14_PLUS" | "ALL" | "APP_RETARGETING" | "APP_IOS" | "VIDEO" | "CATALOG" | "OFF";
  min_ios_version?: string;
  device_model_ids?: string[];
  network_types?: string[];
  carrier_ids?: string[];
  isp_ids?: string[];
  device_price_ranges?: number[];
  targeting_expansion?: {
  expansion_enabled?: boolean;
  expansion_types?: ("AGE" | "GENDER" | "INTEREST_AND_BEHAVIOR" | "CUSTOM_AUDIENCE")[];
};
  contextual_tag_ids?: string[];
  brand_safety_type?: "EXPANDED_INVENTORY" | "NO_BRAND_SAFETY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "TRAFFIC" | "LEAD_GENERATION" | "PRODUCT_SALES";
  category_exclusion_ids?: string[];
  vertical_sensitivity_id?: string;
  budget?: number;
  schedule_type?: string;
  schedule_start_time?: string;
  schedule_end_time?: string;
  dayparting?: string;
  frequency?: number;
  frequency_schedule?: number;
  secondary_optimization_event?: string;
  bid_type?: string;
  bid_price?: number;
  conversion_bid_price?: number;
  deep_bid_type?: string;
  roas_bid?: number;
  deep_cpa_bid?: number;
  next_day_retention?: number;
  pacing?: string;
  is_hfss?: boolean;
  is_lhf_compliance?: boolean;
}


export interface AdgroupUpdateResponse {
  advertiser_id?: string;
  campaign_id?: string;
  campaign_name?: string;
  adgroup_id?: string;
  adgroup_name?: string;
  create_time?: string;
  modify_time?: string;
  shopping_ads_type?: "VIDEO" | "LIVE" | "PRODUCT_SHOPPING_ADS" | "CATALOG_LISTING_ADS" | "UNSET";
  identity_id?: string;
  identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  identity_authorized_bc_id?: string;
  product_source?: "UNSET" | "CATALOG" | "STORE" | "SHOWCASE";
  catalog_id?: string;
  catalog_authorized_bc_id?: string;
  store_id?: string;
  store_authorized_bc_id?: string;
  promotion_type?: string;
  promotion_target_type?: "INSTANT_PAGE" | "EXTERNAL_WEBSITE" | "UNSET";
  messaging_app_type?: "MESSENGER" | "WHATSAPP" | "ZALO" | "LINE" | "IM_URL";
  messaging_app_account_id?: string;
  phone_region_code?: string;
  phone_region_calling_code?: string;
  phone_number?: string;
  promotion_website_type?: "UNSET" | "TIKTOK_NATIVE_PAGE";
  app_id?: string;
  app_type?: "APP_ANDROID" | "APP_IOS";
  app_download_url?: string;
  pixel_id?: string;
  optimization_event?: string;
  custom_conversion_id?: string;
  app_config?: {
  app_id?: string;
}[];
  deep_funnel_optimization_status?: "ON" | "OFF";
  deep_funnel_event_source?: "PIXEL" | "OFFLINE" | "CRM";
  deep_funnel_event_source_id?: string;
  deep_funnel_optimization_event?: string;
  placement_type?: "PLACEMENT_TYPE_AUTOMATIC" | "PLACEMENT_TYPE_NORMAL";
  placements?: string[];
  tiktok_subplacements?: ("IN_FEED" | "SEARCH_FEED" | "TIKTOK_LITE" | "LEMON8")[];
  search_result_enabled?: boolean;
  automated_keywords_enabled?: boolean;
  search_keywords?: {
  keyword?: string;
  match_type?: "PRECISE_WORD" | "PHRASE_WORD" | "BROAD_WORD";
  keyword_bid_type?: "FOLLOW_ADGROUP" | "CUSTOM";
  keyword_bid?: number;
  audit_status?: "AUDITING" | "PASS" | "REJECTED";
  reject_info?: {
  forbidden_location?: string;
  reject_reasons?: {
  reason?: string;
}[];
}[];
}[];
  comment_disabled?: boolean;
  video_download_disabled?: boolean;
  share_disabled?: boolean;
  blocked_pangle_app_ids?: string[];
  audience_type?: string;
  audience_rule?: Record<string, unknown>;
  saved_audience_id?: string;
  auto_targeting_enabled?: boolean;
  shopping_ads_retargeting_type?: "LAB1" | "LAB2" | "LAB3" | "OFF";
  shopping_ads_retargeting_actions_days?: number;
  included_custom_actions?: {
  code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  days?: number;
}[];
  excluded_custom_actions?: {
  code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  days?: number;
}[];
  shopping_ads_retargeting_custom_audience_relation?: "OR" | "AND";
  location_ids?: string[];
  zipcode_ids?: string[];
  languages?: string[];
  gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  age_groups?: string[];
  spending_power?: "ALL" | "HIGH";
  household_income?: ("TOP5" | "TOP10" | "TOP10_25" | "TOP25_50")[];
  audience_ids?: string[];
  smart_audience_enabled?: boolean;
  excluded_audience_ids?: string[];
  interest_category_ids?: string[];
  interest_keyword_ids?: string[];
  purchase_intention_keyword_ids?: string[];
  actions?: {
  action_scene?: "VIDEO_RELATED" | "CREATOR_RELATED" | "HASHTAG_RELATED";
  action_period?: number;
  video_user_actions?: string[];
  action_category_ids?: string[];
}[];
  smart_interest_behavior_enabled?: boolean;
  included_pangle_audience_package_ids?: string[];
  excluded_pangle_audience_package_ids?: string[];
  operating_systems?: ("ANDROID" | "IOS")[];
  min_android_version?: string;
  ios14_targeting?: "UNSET" | "IOS14_MINUS" | "IOS14_PLUS" | "ALL";
  min_ios_version?: string;
  ios14_quota_type?: "OCCUPIED" | "UNOCCUPIED";
  device_model_ids?: string[];
  network_types?: string[];
  carrier_ids?: string[];
  isp_ids?: string[];
  device_price_ranges?: number[];
  targeting_expansion?: {
  expansion_enabled?: boolean;
  expansion_types?: string[];
};
  contextual_tag_ids?: string[];
  brand_safety_type?: "NO_BRAND_SAFETY" | "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "THIRD_PARTY";
  brand_safety_partner?: "IAS" | "OPEN_SLATE";
  inventory_filter_enabled?: boolean;
  category_exclusion_ids?: string[];
  vertical_sensitivity_id?: string;
  budget_mode?: string;
  budget?: number;
  scheduled_budget?: number;
  schedule_type?: string;
  schedule_start_time?: string;
  schedule_end_time?: string;
  delivery_mode?: "STANDARD" | "SCHEDULE" | "SEQUENCE" | "OPTIMIZE";
  dayparting?: string;
  optimization_goal?: string;
  secondary_optimization_event?: string;
  message_event_set_id?: string;
  frequency?: number;
  frequency_schedule?: number;
  bid_type?: string;
  bid_price?: number;
  conversion_bid_price?: number;
  deep_bid_type?: string;
  roas_bid?: number;
  vbo_window?: "SEVEN_DAYS" | "ZERO_DAY";
  bid_display_mode?: string;
  deep_cpa_bid?: number;
  cpv_video_duration?: string;
  next_day_retention?: number;
  click_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS";
  engaged_view_attribution_window?: "ONE_DAY" | "SEVEN_DAYS";
  view_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS";
  attribution_event_count?: "UNSET" | "EVERY" | "ONCE";
  billing_event?: string;
  pacing?: string;
  operation_status?: "ENABLE" | "DISABLE" | "FROZEN";
  secondary_status?: string;
  statistic_type?: string;
  is_hfss?: boolean;
  is_lhf_compliance?: boolean;
  creative_material_mode?: "CUSTOM" | "DYNAMIC" | "SMART_CREATIVE";
  adgroup_app_profile_page_state?: "INVALID" | "UNSET" | "ON" | "OFF";
  feed_type?: "STANDARD_FEED" | "TOP_FEED";
  rf_purchased_type?: string;
  purchased_impression?: number;
  purchased_reach?: number;
  rf_estimated_cpr?: number;
  rf_estimated_frequency?: number;
  is_new_structure?: boolean;
  skip_learning_phase?: boolean;
  conversion_window?: string;
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface AdgroupStatusUpdateParams {
  advertiser_id: string;
  adgroup_ids: string[];
  operation_status: "DISABLE" | "ENABLE" | "DELETE";
  allow_partial_success?: boolean;
}


export interface AdgroupStatusUpdateResponse {
  adgroup_ids?: string[];
  status?: "DISABLE" | "ENABLE" | "DELETE";
  error_list?: {
  adgroup_id?: string;
  error_message?: string;
}[];
}


export interface AdgroupBudgetUpdateParams {
  advertiser_id: string;
  budget?: {
  adgroup_id?: string;
  budget?: number;
}[];
  scheduled_budget?: {
  adgroup_id?: string;
  scheduled_budget?: number;
}[];
}


export interface AdgroupBudgetUpdateResponse {}
