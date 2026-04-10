// Auto-generated types for Upgraded Smart+ — do not edit

export interface SmartPlusCampaignGetParams {
  advertiser_id: string;
  fields?: string[];
  page?: number;
  page_size?: number;
  filtering?: {
  campaign_ids?: string[];
  campaign_name?: string;
  primary_status?: string;
  secondary_status?: string;
  objective_type?: string;
  sales_destination?: "WEBSITE" | "APP" | "WEB_AND_APP";
  creation_filter_start_time?: string;
  creation_filter_end_time?: string;
};
}


export interface SmartPlusCampaignGetResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  list?: {
  advertiser_id?: string;
  campaign_id?: string;
  create_time?: string;
  modify_time?: string;
  objective_type?: string;
  app_promotion_type?: "APP_INSTALL" | "APP_RETARGETING" | "MINIS";
  sales_destination?: "WEBSITE" | "APP" | "WEB_AND_APP";
  campaign_type?: "REGULAR_CAMPAIGN" | "IOS14_CAMPAIGN";
  app_id?: string;
  gaming_ad_compliance_agreement?: "ON" | "OFF";
  is_advanced_dedicated_campaign?: "true" | "false";
  disable_skan_campaign?: "true" | "false";
  bid_align_type?: "SAN" | "SKAN";
  campaign_app_profile_page_state?: "ON" | "OFF";
  catalog_enabled?: "true" | "false";
  catalog_type?: "ECOMMERCE" | "TRAVEL_ENTERTAINMENT" | "MINI_SERIES";
  campaign_name?: string;
  special_industries?: ("HOUSING" | "EMPLOYMENT" | "CREDIT")[];
  budget_optimize_on?: "true" | "false";
  budget_mode?: "BUDGET_MODE_DYNAMIC_DAILY_BUDGET" | "BUDGET_MODE_TOTAL" | "BUDGET_MODE_INFINITE" | "BUDGET_MODE_DAY" | "true" | "false";
  budget_auto_adjust_strategy?: "BUDGET_MODE_DYNAMIC_DAILY_BUDGET" | "MINIS" | "AUTO_BUDGET_INCREASE" | "UNSET" | "true";
  budget?: "UNSET" | "AUTO_BUDGET_INCREASE" | "BUDGET_MODE_DAY" | "BUDGET_MODE_TOTAL" | "true" | "false";
  current_budget?: number;
  operation_status?: "ENABLE" | "DISABLE";
  secondary_status?: string;
  smart_plus_adgroup_mode?: "SINGLE" | "MULTIPLE";
  postback_window_mode?: "POSTBACK_WINDOW_MODE1" | "POSTBACK_WINDOW_MODE2" | "POSTBACK_WINDOW_MODE3";
  po_number?: string;
  is_promotional_campaign?: "true" | "false";
  rta_id?: string;
  rta_bid_enabled?: "true" | "false";
  rta_product_selection_enabled?: "true" | "false";
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
};
}


export interface SmartPlusCampaignCreateParams {
  advertiser_id: string;
  request_id: string;
  operation_status?: "ENABLE" | "DISABLE";
  objective_type: "APP_PROMOTION" | "WEB_CONVERSIONS" | "LEAD_GENERATION";
  app_promotion_type?: "APP_PROMOTION" | "APP_INSTALL" | "APP_RETARGETING" | "MINIS";
  sales_destination?: "WEB_CONVERSIONS" | "WEBSITE" | "APP" | "ECOMMERCE" | "TRAVEL_ENTERTAINMENT" | "ECOM" | "HOTEL" | "FLIGHT" | "DESTINATION" | "ENTERTAINMENT" | "WEB_AND_APP" | "true";
  catalog_enabled?: "WEB_CONVERSIONS" | "LEAD_GENERATION" | "true" | "false";
  catalog_type?: "WEB_CONVERSIONS" | "ECOMMERCE" | "TRAVEL_ENTERTAINMENT" | "MINI_SERIES" | "true";
  campaign_type?: "REGULAR_CAMPAIGN" | "IOS14_CAMPAIGN";
  is_promotional_campaign?: "WEB_CONVERSIONS" | "false" | "true";
  app_id?: "APP_PROMOTION" | "APP_INSTALL" | "WEB_CONVERSIONS" | "APP" | "IOS14_CAMPAIGN";
  gaming_ad_compliance_agreement?: "APP_PROMOTION" | "APP_INSTALL" | "IOS14_CAMPAIGN" | "ON" | "OFF";
  campaign_app_profile_page_state?: "ON" | "OFF" | "APP_PROMOTION";
  disable_skan_campaign?: "APP_PROMOTION" | "APP_INSTALL" | "WEB_CONVERSIONS" | "APP" | "IOS14_CAMPAIGN" | "BID_TYPE_CUSTOM" | "INSTALL" | "IN_APP_EVENT" | "true" | "false";
  campaign_name: string;
  special_industries?: ("HOUSING" | "EMPLOYMENT" | "CREDIT")[];
  budget_optimize_on?: "true" | "false";
  budget_mode?: "BUDGET_MODE_DYNAMIC_DAILY_BUDGET" | "BUDGET_MODE_TOTAL" | "BUDGET_MODE_INFINITE" | "BUDGET_MODE_DAY" | "true" | "false";
  budget_auto_adjust_strategy?: "BUDGET_MODE_DYNAMIC_DAILY_BUDGET" | "MINIS" | "AUTO_BUDGET_INCREASE" | "true";
  budget?: "BUDGET_MODE_DYNAMIC_DAILY_BUDGET" | "BUDGET_MODE_TOTAL" | "BUDGET_MODE_DAY" | "UNSET" | "AUTO_BUDGET_INCREASE" | "true" | "false";
  postback_window_mode?: "IOS14_CAMPAIGN" | "DISABLE" | "POSTBACK_WINDOW_MODE1" | "POSTBACK_WINDOW_MODE2" | "POSTBACK_WINDOW_MODE3" | "ENABLE";
  po_number?: string;
  rta_id?: string;
  rta_bid_enabled?: "WEB_CONVERSIONS" | "APP" | "APP_PROMOTION" | "APP_RETARGETING" | "true" | "false";
  rta_product_selection_enabled?: "WEB_CONVERSIONS" | "APP" | "ALL" | "true" | "false";
}


export interface SmartPlusCampaignCreateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  advertiser_id?: string;
  campaign_id?: string;
  create_time?: string;
  modify_time?: string;
  objective_type?: "APP_PROMOTION" | "WEB_CONVERSIONS" | "LEAD_GENERATION";
  app_promotion_type?: "APP_INSTALL" | "APP_RETARGETING" | "MINIS";
  sales_destination?: "WEBSITE" | "APP" | "WEB_AND_APP";
  campaign_type?: "REGULAR_CAMPAIGN" | "IOS14_CAMPAIGN";
  app_id?: string;
  gaming_ad_compliance_agreement?: "ON" | "OFF";
  is_advanced_dedicated_campaign?: "true" | "false";
  disable_skan_campaign?: "true" | "false";
  bid_align_type?: "SAN" | "SKAN";
  campaign_app_profile_page_state?: "ON" | "OFF";
  catalog_enabled?: "true" | "false";
  catalog_type?: "ECOMMERCE" | "TRAVEL_ENTERTAINMENT" | "MINI_SERIES";
  campaign_name?: string;
  special_industries?: ("HOUSING" | "EMPLOYMENT" | "CREDIT")[];
  budget_optimize_on?: "true" | "false";
  budget_mode?: "BUDGET_MODE_DYNAMIC_DAILY_BUDGET" | "BUDGET_MODE_TOTAL" | "BUDGET_MODE_INFINITE" | "BUDGET_MODE_DAY" | "true" | "false";
  budget_auto_adjust_strategy?: "BUDGET_MODE_DYNAMIC_DAILY_BUDGET" | "MINIS" | "AUTO_BUDGET_INCREASE" | "UNSET" | "true";
  budget?: "UNSET" | "AUTO_BUDGET_INCREASE" | "BUDGET_MODE_DAY" | "BUDGET_MODE_TOTAL" | "true" | "false";
  current_budget?: number;
  operation_status?: "ENABLE" | "DISABLE";
  secondary_status?: string;
  smart_plus_adgroup_mode?: "SINGLE" | "MULTIPLE";
  postback_window_mode?: "POSTBACK_WINDOW_MODE1" | "POSTBACK_WINDOW_MODE2" | "POSTBACK_WINDOW_MODE3";
  po_number?: string;
  is_promotional_campaign?: "true" | "false";
  rta_id?: string;
  rta_bid_enabled?: "true" | "false";
  rta_product_selection_enabled?: "true" | "false";
};
}


export interface SmartPlusCampaignUpdateParams {
  advertiser_id: string;
  campaign_id: string;
  campaign_name?: string;
  budget_auto_adjust_strategy?: "BUDGET_MODE_DYNAMIC_DAILY_BUDGET" | "MINIS" | "AUTO_BUDGET_INCREASE" | "UNSET" | "true";
  budget?: "UNSET" | "AUTO_BUDGET_INCREASE";
  po_number?: string;
}


export interface SmartPlusCampaignUpdateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  advertiser_id?: string;
  campaign_id?: string;
  create_time?: string;
  modify_time?: string;
  objective_type?: "APP_PROMOTION" | "WEB_CONVERSIONS" | "LEAD_GENERATION";
  app_promotion_type?: "APP_INSTALL" | "APP_RETARGETING" | "MINIS";
  sales_destination?: "WEBSITE" | "APP" | "WEB_AND_APP";
  campaign_type?: "REGULAR_CAMPAIGN" | "IOS14_CAMPAIGN";
  app_id?: string;
  gaming_ad_compliance_agreement?: "ON" | "OFF";
  is_advanced_dedicated_campaign?: "true" | "false";
  disable_skan_campaign?: "true" | "false";
  bid_align_type?: "SAN" | "SKAN";
  campaign_app_profile_page_state?: "ON" | "OFF";
  catalog_enabled?: "true" | "false";
  catalog_type?: "ECOMMERCE" | "TRAVEL_ENTERTAINMENT" | "MINI_SERIES";
  campaign_name?: string;
  special_industries?: ("HOUSING" | "EMPLOYMENT" | "CREDIT")[];
  budget_optimize_on?: "true" | "false";
  budget_mode?: "BUDGET_MODE_DYNAMIC_DAILY_BUDGET" | "BUDGET_MODE_TOTAL" | "BUDGET_MODE_INFINITE" | "BUDGET_MODE_DAY" | "true" | "false";
  budget_auto_adjust_strategy?: "BUDGET_MODE_DYNAMIC_DAILY_BUDGET" | "MINIS" | "AUTO_BUDGET_INCREASE" | "UNSET" | "true";
  budget?: "UNSET" | "AUTO_BUDGET_INCREASE" | "BUDGET_MODE_DAY" | "BUDGET_MODE_TOTAL" | "true" | "false";
  current_budget?: number;
  operation_status?: "ENABLE" | "DISABLE";
  secondary_status?: string;
  smart_plus_adgroup_mode?: "SINGLE" | "MULTIPLE";
  postback_window_mode?: "POSTBACK_WINDOW_MODE1" | "POSTBACK_WINDOW_MODE2" | "POSTBACK_WINDOW_MODE3";
  po_number?: string;
  is_promotional_campaign?: "true" | "false";
  rta_id?: string;
  rta_bid_enabled?: "true" | "false";
  rta_product_selection_enabled?: "true" | "false";
};
}


export interface SmartPlusCampaignStatusUpdateParams {
  advertiser_id: string;
  campaign_ids: string[];
  operation_status: "DELETE" | "ENABLE";
  postback_window_mode?: "IOS14_CAMPAIGN" | "DISABLE" | "POSTBACK_WINDOW_MODE1" | "POSTBACK_WINDOW_MODE2" | "POSTBACK_WINDOW_MODE3" | "ENABLE";
}


export interface SmartPlusCampaignStatusUpdateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  campaign_list?: {
  campaign_id?: string;
  status?: "DISABLE" | "ENABLE" | "DELETE";
  postback_window_mode?: "POSTBACK_WINDOW_MODE1" | "POSTBACK_WINDOW_MODE2" | "POSTBACK_WINDOW_MODE3";
}[];
  error_list?: {
  campaign_id?: string;
  error_message?: string;
}[];
};
}


export interface SmartPlusAdgroupGetParams {
  advertiser_id: string;
  fields?: string[];
  filtering?: {
  campaign_ids?: string[];
  adgroup_ids?: string[];
  adgroup_name?: string;
  primary_status?: "STATUS_NOT_DELETE" | "STATUS_DELETE" | "STATUS_ALL";
  secondary_status?: string;
  objective_type?: "APP_PROMOTION" | "WEB_CONVERSIONS" | "LEAD_GENERATION";
  sales_destination?: "WEBSITE" | "APP" | "WEB_AND_APP";
  promotion_type?: "APP_ANDROID" | "APP_IOS" | "WEBSITE" | "LEAD_GENERATION" | "APP_PROMOTION" | "WEB_CONVERSIONS";
  optimization_goal?: "CLICK" | "INSTALL" | "IN_APP_EVENT" | "VALUE" | "CONVERT" | "TRAFFIC_LANDING_PAGE_VIEW" | "LEAD_GENERATION";
};
  page?: number;
  page_size?: number;
}


export interface SmartPlusAdgroupGetResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  list?: {
  advertiser_id?: string;
  campaign_id?: string;
  campaign_name?: string;
  adgroup_id?: string;
  adgroup_name?: string;
  catalog_id?: string;
  catalog_authorized_bc_id?: string;
  promotion_type?: "APP_ANDROID" | "APP_IOS" | "WEBSITE" | "LEAD_GENERATION" | "APP_PROMOTION" | "WEB_CONVERSIONS";
  app_id?: string;
  gaming_ad_compliance_agreement?: "APP_PROMOTION" | "APP_RETARGETING" | "APP_INSTALL" | "REGULAR_CAMPAIGN" | "ON" | "OFF";
  promotion_website_type?: string;
  optimization_goal?: string;
  pixel_id?: string;
  app_config?: {
  app_id?: string;
}[];
  minis_id?: "MINI_APP" | "MINI_GAME";
  optimization_event?: string;
  custom_conversion_id?: string;
  deep_funnel_optimization_status?: "ON" | "OFF";
  deep_funnel_event_source?: "ON" | "PIXEL" | "OFFLINE" | "CRM";
  deep_funnel_event_source_id?: "ON" | "PIXEL" | "OFFLINE" | "CRM";
  deep_funnel_optimization_event?: "ON" | "SHOPPING";
  identity_id?: string;
  identity_type?: "LEAD_GEN_CLICK_TO_TT_DIRECT_MESSAGE" | "TT_USER" | "BC_AUTH_TT";
  identity_authorized_bc_id?: string;
  messaging_app_type?: "MESSENGER" | "WHATSAPP" | "ZALO" | "LINE" | "IM_URL";
  zalo_id_type?: "ZALO_OFFICIAL_ACCOUNT" | "ZALO_PHONE_ACCOUNT";
  messaging_app_account_id?: "MESSENGER" | "LINE" | "ZALO_OFFICIAL_ACCOUNT" | "WHATSAPP" | "ZALO_PHONE_ACCOUNT";
  message_event_set_id?: string;
  phone_info?: {
  phone_region_code?: string;
  phone_region_calling_code?: string;
  phone_number?: string;
};
  bid_type?: string;
  bid_price?: number;
  conversion_bid_price?: number;
  deep_bid_type?: string;
  roas_bid?: number;
  incentive_offer_type?: "INELIGIBLE" | "COST_CAP_AND_MIN_ROAS";
  vbo_window?: "SEVEN_DAYS" | "ZERO_DAY";
  click_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS" | "THIRTY_DAYS" | "THIRTY_TWO_DAYS" | "ONE_HUNDRED_EIGHTY_DAYS";
  engaged_view_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS";
  view_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS";
  attribution_event_count?: "UNSET" | "EVERY" | "ONCE";
  billing_event?: string;
  pacing?: string;
  budget_mode?: "BUDGET_MODE_TOTAL" | "BUDGET_MODE_DYNAMIC_DAILY_BUDGET";
  budget_auto_adjust_strategy?: "BUDGET_MODE_DYNAMIC_DAILY_BUDGET" | "AUTO_BUDGET_INCREASE" | "UNSET" | "false";
  budget?: "UNSET" | "AUTO_BUDGET_INCREASE";
  current_budget?: number;
  min_budget?: number;
  schedule_type?: "SCHEDULE_FROM_NOW" | "SCHEDULE_START_END";
  schedule_start_time?: string;
  schedule_end_time?: string;
  movie_premiere_date?: string;
  dayparting?: string;
  targeting_optimization_mode?: "MANUAL" | "AUTOMATIC";
  suggestion_audience_enabled?: "true" | "false";
  targeting_spec?: {
  app_targeting_type?: "WEB_CONVERSIONS" | "APP" | "CLICK" | "IN_APP_EVENT" | "VALUE" | "PROSPECT" | "RETARGETING";
  location_ids?: string[];
  zipcode_ids?: string[];
  spc_audience_age?: "ALL" | "OVER_EIGHTEEN" | "OVER_TWENTY_FIVE";
  languages?: string[];
  operating_systems?: ("ANDROID" | "IOS")[];
  excluded_audience_ids?: string[];
  age_groups?: string[];
  gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  audience_ids?: string[];
  shopping_ads_retargeting_type?: "LAB1" | "LAB2" | "LAB3" | "OFF";
  shopping_ads_retargeting_actions_days?: "LAB1" | "LAB2";
  included_custom_actions?: {
  code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  days?: number;
}[];
  excluded_custom_actions?: {
  code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  days?: number;
}[];
  shopping_ads_retargeting_custom_audience_relation?: "OR" | "AND";
  included_pangle_audience_package_ids?: string[];
  excluded_pangle_audience_package_ids?: string[];
  interest_category_ids?: string[];
  interest_keyword_ids?: string[];
  purchase_intention_keyword_ids?: string[];
  actions?: {
  action_scene?: "VIDEO_RELATED" | "CREATOR_RELATED" | "HASHTAG_RELATED";
  action_period?: number;
  video_user_actions?: ("VIDEO_RELATED" | "WATCHED_TO_END" | "LIKED" | "COMMENTED" | "SHARED" | "CREATOR_RELATED" | "FOLLOWING" | "VIEW_HOMEPAGE" | "HASHTAG_RELATED" | "VIEW_HASHTAG")[];
  action_category_ids?: string[];
}[];
  smart_interest_behavior_enabled?: "true" | "false";
  smart_audience_enabled?: "true" | "false";
  spending_power?: "ALL" | "HIGH";
  household_income?: ("TOP5" | "TOP10" | "TOP10_25" | "TOP25_50")[];
  min_android_version?: string;
  min_ios_version?: string;
  device_model_ids?: string[];
  network_types?: string[];
  carrier_ids?: string[];
  isp_ids?: string[];
  device_price_ranges?: number[];
  saved_audience_id?: string;
  blocked_pangle_app_ids?: string[];
  brand_safety_type?: "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "NO_BRAND_SAFETY";
  category_exclusion_ids?: string[];
};
  is_hfss?: "true" | "false";
  is_lhf_compliance?: "true" | "false";
  placement_type?: ("PLACEMENT_TYPE_AUTOMATIC" | "PLACEMENT_TYPE_NORMAL")[];
  placements?: ("PLACEMENT_TIKTOK" | "PLACEMENT_PANGLE" | "PLACEMENT_GLOBAL_APP_BUNDLE")[];
  search_result_enabled?: "true" | "false";
  comment_disabled?: "true" | "false";
  share_disabled?: "true" | "false";
  video_download_disabled?: "true" | "false";
  skip_learning_phase?: boolean;
  create_time?: string;
  modify_time?: string;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
};
}


export interface SmartPlusAdgroupCreateParams {
  advertiser_id: string;
  request_id: string;
  campaign_id: string;
  operation_status?: "ENABLE" | "DISABLE";
  adgroup_name: string;
  catalog_id?: string;
  catalog_authorized_bc_id?: string;
  promotion_type: "APP_ANDROID" | "APP_IOS" | "WEBSITE" | "MINI_APP" | "MINI_GAME" | "LEAD_GENERATION" | "APP_PROMOTION" | "APP_INSTAL" | "APP_RETARGETING" | "MINIS" | "WEB_CONVERSIONS" | "APP" | "LEAD_GEN_CLICK_TO_TT_DIRECT_MESSAGE" | "LEAD_GEN_CLICK_TO_SOCIAL_MEDIA_APP_MESSAGE" | "LEAD_GEN_CLICK_TO_CALL" | "true";
  promotion_target_type?: "LEAD_GENERATION" | "INSTANT_PAGE" | "EXTERNAL_WEBSITE" | "true";
  optimization_goal: "CLICK" | "INSTALL" | "IN_APP_EVENT" | "VALUE" | "CONVERT" | "TRAFFIC_LANDING_PAGE_VIEW" | "CONVERSATION" | "LEAD_GENERATION" | "LEAD_GEN_CLICK_TO_SOCIAL_MEDIA_APP_MESSAGE" | "MESSENGER" | "WHATSAPP" | "ZALO" | "true";
  app_id?: "APP_PROMOTION" | "APP_INSTALL" | "APP_RETARGETING" | "WEB_CONVERSIONS" | "APP" | "REGULAR_CAMPAIGN";
  gaming_ad_compliance_agreement?: "APP_PROMOTION" | "APP_RETARGETING" | "APP_INSTALL" | "REGULAR_CAMPAIGN" | "ON" | "OFF";
  pixel_id?: "WEB_CONVERSIONS" | "LEAD_GENERATION" | "CONVERT" | "VALUE" | "CLICK" | "INSTALL" | "IN_APP_EVENT" | "TRAFFIC_LANDING_PAGE_VIEW";
  app_config?: {
  app_id?: string;
}[];
  minis_id?: "MINI_APP" | "MINI_GAME" | "ACTIVE";
  optimization_event?: "IN_APP_EVENT" | "VALUE" | "true";
  custom_conversion_id?: "CONVERT" | "IN_APP_EVENT" | "NO_RECENT_ACTIVITY" | "ACTIVE";
  deep_funnel_optimization_status?: "LEAD_GENERATION" | "ON" | "OFF";
  deep_funnel_event_source?: "ON" | "PIXEL" | "OFFLINE" | "CRM";
  deep_funnel_event_source_id?: "ON" | "PIXEL" | "OFFLINE" | "CRM";
  deep_funnel_optimization_event?: "ON" | "SHOPPING";
  identity_id?: string;
  identity_type?: "LEAD_GEN_CLICK_TO_TT_DIRECT_MESSAGE" | "TT_USER" | "BC_AUTH_TT";
  identity_authorized_bc_id?: string;
  messaging_app_type?: "LEAD_GEN_CLICK_TO_SOCIAL_MEDIA_APP_MESSAGE" | "CONVERSATION" | "CLICK" | "IM_URL" | "MESSENGER" | "WHATSAPP" | "ZALO" | "LINE";
  zalo_id_type?: "ZALO" | "ZALO_OFFICIAL_ACCOUNT" | "ZALO_PHONE_ACCOUNT" | "CLICK";
  messaging_app_account_id?: "MESSENGER" | "LINE" | "ZALO" | "ZALO_OFFICIAL_ACCOUNT" | "WHATSAPP" | "ZALO_PHONE_ACCOUNT";
  message_event_set_id?: "LEAD_GEN_CLICK_TO_SOCIAL_MEDIA_APP_MESSAGE" | "CONVERSATION";
  phone_info?: "WHATSAPP" | "ZALO" | "ZALO_PHONE_ACCOUNT";
  bid_type: "BID_TYPE_NO_BID" | "BID_TYPE_CUSTOM" | "BUDGET_MODE_DYNAMIC_DAILY_BUDGET";
  bid_price?: "CLICK" | "BID_TYPE_CUSTOM" | "true";
  conversion_bid_price?: "CONVERT" | "TRAFFIC_LANDING_PAGE_VIEW" | "INSTALL" | "IN_APP_EVENT" | "BID_TYPE_CUSTOM" | "true";
  deep_bid_type?: "VALUE" | "DEFAULT" | "AEO" | "VO_MIN_ROAS" | "VO_HIGHEST_VALUE" | "BUDGET_MODE_DYNAMIC_DAILY_BUDGET";
  roas_bid?: "VO_MIN_ROAS" | "true";
  vbo_window?: "SEVEN_DAYS" | "ZERO_DAY";
  click_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS" | "THIRTY_DAYS" | "MINI_GAME" | "THIRTY_TWO_DAYS" | "MINI_APP" | "ACTIVE_PAY" | "ONE_HUNDRED_EIGHTY_DAYS";
  engaged_view_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS";
  view_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS";
  attribution_event_count?: "UNSET" | "EVERY" | "ONCE";
  billing_event: "OCPM" | "CPC" | "CLICK" | "true";
  targeting_optimization_mode?: "AUTOMATIC" | "APP" | "MANUAL" | "false" | "true";
  suggestion_audience_enabled?: "AUTOMATIC" | "true" | "false";
  targeting_spec: {
  app_targeting_type?: "WEB_CONVERSIONS" | "APP" | "CLICK" | "IN_APP_EVENT" | "VALUE" | "PROSPECT" | "RETARGETING" | "IOS14_CAMPAIGN";
  location_ids?: string[];
  zipcode_ids?: ("TRAVEL_ENTERTAINMENT" | "ZIP_CODE" | "RF_REACH")[];
  languages?: string[];
  operating_systems?: ("ANDROID" | "IOS" | "APP_ANDROID" | "APP_IOS")[];
  spc_audience_age?: "ALL" | "MULTIPLE";
  excluded_audience_ids?: string[];
  age_groups?: ("AGE_13_17" | "AGE_18_24" | "AGE_25_34" | "AGE_35_44" | "AGE_45_54" | "AGE_55_100" | "APP_PROMOTION" | "APP_INSTALL" | "APP_RETARGETING")[];
  gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  audience_ids?: string[];
  shopping_ads_retargeting_type?: "WEB_CONVERSION" | "WEB_AND_APP" | "ECOMMERCE" | "MANUAL" | "LAB1" | "LAB2" | "LAB3" | "OFF";
  shopping_ads_retargeting_actions_days?: "LAB1" | "LAB2";
  included_custom_actions?: {
  code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  days?: number;
}[];
  excluded_custom_actions?: {
  code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  days?: number;
}[];
  shopping_ads_retargeting_custom_audience_relation?: "LAB1" | "LAB2" | "LAB3" | "OR" | "AND";
  included_pangle_audience_package_ids?: string[];
  excluded_pangle_audience_package_ids?: string[];
  interest_category_ids?: string[];
  interest_keyword_ids?: string[];
  purchase_intention_keyword_ids?: ("PLACEMENT_TIKTOK" | "PLACEMENT_PANGLE")[];
  actions?: {
  action_scene?: "VIDEO_RELATED" | "CREATOR_RELATED" | "HASHTAG_RELATED";
  action_period?: "CREATOR_RELATED" | "HASHTAG_RELATED" | "VIDEO_RELATED";
  video_user_actions?: ("VIDEO_RELATED" | "WATCHED_TO_END" | "LIKED" | "COMMENTED" | "SHARED" | "CREATOR_RELATED" | "FOLLOWING" | "VIEW_HOMEPAGE" | "HASHTAG_RELATED" | "VIEW_HASHTAG")[];
  action_category_ids?: string[];
}[];
  smart_interest_behavior_enabled?: "true" | "false";
  smart_audience_enabled?: "true" | "false";
  spending_power?: "ALL" | "HIGH";
  household_income?: ("TOP5" | "TOP10" | "TOP10_25" | "TOP25_50")[];
  min_android_version?: string;
  min_ios_version?: string;
  device_model_ids?: string[];
  network_types?: string[];
  carrier_ids?: string[];
  isp_ids?: string[];
  device_price_ranges?: number[];
  saved_audience_id?: "PLACEMENT_TYPE_AUTOMATIC" | "PLACEMENT_TYPE_NORMAL" | "PLACEMENT_TIKTOK" | "GENDER_FEMALE" | "GENDER_MALE";
  blocked_pangle_app_ids?: string[];
};
  budget_mode?: "BUDGET_MODE_TOTAL" | "BUDGET_MODE_DYNAMIC_DAILY_BUDGET" | "SCHEDULE_START_END" | "BUDGET_MODE_DAY" | "false" | "true";
  budget_auto_adjust_strategy?: "APP_PROMOTION" | "BUDGET_MODE_DYNAMIC_DAILY_BUDGET" | "VALUE" | "VO_MIN_ROAS" | "ZERO_DAY" | "LEAD_GENERATION" | "BID_TYPE_CUSTOM" | "AUTO_BUDGET_INCREASE" | "UNSET" | "false";
  budget?: "UNSET" | "AUTO_BUDGET_INCREASE" | "false" | "true";
  min_budget?: "BUDGET_MODE_DYNAMIC_DAILY_BUDGET" | "BID_TYPE_NO_BID" | "true";
  schedule_type: "SCHEDULE_FROM_NOW" | "BUDGET_MODE_DYNAMIC_DAILY_BUDGET" | "SCHEDULE_START_END";
  schedule_start_time: string;
  schedule_end_time?: string;
  movie_premiere_date?: string;
  dayparting?: string;
  is_hfss?: "MANUAL" | "true" | "false";
  is_lhf_compliance?: "true" | "false";
  placement_type?: "PLACEMENT_TYPE_AUTOMATIC" | "PLACEMENT_TYPE_NORMAL" | "PLACEMENT_TIKTOK";
  placements?: ("PLACEMENT_TYPE_NORMAL" | "PLACEMENT_TYPE_AUTOMATIC" | "PLACEMENT_TIKTOK" | "PLACEMENT_PANGLE" | "PLACEMENT_GLOBAL_APP_BUNDLE" | "TRAFFIC_LANDING_PAGE_VIEW")[];
  comment_disabled?: "true" | "false";
  share_disabled?: "true" | "false";
  video_download_disabled?: "true" | "false";
}


export interface SmartPlusAdgroupCreateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  advertiser_id?: string;
  campaign_id?: string;
  campaign_name?: string;
  adgroup_id?: string;
  adgroup_name?: string;
  catalog_id?: string;
  catalog_authorized_bc_id?: string;
  promotion_type?: "APP_ANDROID" | "APP_IOS" | "WEBSITE" | "MINI_GAME" | "LEAD_GENERATION" | "APP_PROMOTION" | "APP_INSTAL" | "MINIS" | "MINI_APP" | "WEB_CONVERSIONS" | "APP" | "LEAD_GEN_CLICK_TO_TT_DIRECT_MESSAGE" | "LEAD_GEN_CLICK_TO_SOCIAL_MEDIA_APP_MESSAGE" | "LEAD_GEN_CLICK_TO_CALL";
  app_id?: string;
  gaming_ad_compliance_agreement?: "APP_PROMOTION" | "APP_RETARGETING" | "APP_INSTALL" | "REGULAR_CAMPAIGN" | "ON" | "OFF";
  promotion_website_type?: string;
  promotion_target_type?: "INSTANT_PAGE" | "EXTERNAL_WEBSITE";
  optimization_goal?: string;
  pixel_id?: string;
  app_config?: {
  app_id?: string;
}[];
  minis_id?: "MINI_APP" | "MINI_GAME";
  optimization_event?: string;
  custom_conversion_id?: string;
  deep_funnel_optimization_status?: "ON" | "OFF";
  deep_funnel_event_source?: "ON" | "PIXEL" | "OFFLINE" | "CRM";
  deep_funnel_event_source_id?: "ON" | "PIXEL" | "OFFLINE" | "CRM";
  deep_funnel_optimization_event?: "ON" | "SHOPPING";
  identity_id?: string;
  identity_type?: "LEAD_GEN_CLICK_TO_TT_DIRECT_MESSAGE" | "TT_USER" | "BC_AUTH_TT";
  identity_authorized_bc_id?: string;
  messaging_app_type?: "MESSENGER" | "WHATSAPP" | "ZALO" | "LINE" | "IM_URL";
  zalo_id_type?: "ZALO_OFFICIAL_ACCOUNT" | "ZALO_PHONE_ACCOUNT";
  messaging_app_account_id?: "MESSENGER" | "LINE" | "ZALO_OFFICIAL_ACCOUNT" | "WHATSAPP" | "ZALO_PHONE_ACCOUNT";
  message_event_set_id?: string;
  phone_info?: {
  phone_region_code?: string;
  phone_region_calling_code?: string;
  phone_number?: string;
};
  bid_type?: string;
  bid_price?: number;
  conversion_bid_price?: number;
  deep_bid_type?: string;
  roas_bid?: number;
  incentive_offer_type?: "INELIGIBLE" | "COST_CAP_AND_MIN_ROAS";
  vbo_window?: "SEVEN_DAYS" | "ZERO_DAY";
  click_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS" | "THIRTY_DAYS" | "THIRTY_TWO_DAYS" | "ONE_HUNDRED_EIGHTY_DAYS";
  engaged_view_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS";
  view_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS";
  attribution_event_count?: "UNSET" | "EVERY" | "ONCE";
  billing_event?: string;
  pacing?: string;
  budget_mode?: "BUDGET_MODE_TOTAL" | "BUDGET_MODE_DYNAMIC_DAILY_BUDGET";
  budget_auto_adjust_strategy?: "BUDGET_MODE_DYNAMIC_DAILY_BUDGET" | "AUTO_BUDGET_INCREASE" | "UNSET" | "false";
  budget?: "UNSET" | "AUTO_BUDGET_INCREASE";
  current_budget?: number;
  min_budget?: number;
  schedule_type?: "SCHEDULE_FROM_NOW" | "SCHEDULE_START_END";
  schedule_start_time?: string;
  schedule_end_time?: string;
  movie_premiere_date?: string;
  dayparting?: string;
  targeting_optimization_mode?: "MANUAL" | "AUTOMATIC";
  suggestion_audience_enabled?: "true" | "false";
  targeting_spec?: {
  app_targeting_type?: "WEB_CONVERSIONS" | "APP" | "CLICK" | "IN_APP_EVENT" | "VALUE" | "PROSPECT" | "RETARGETING";
  location_ids?: string[];
  zipcode_ids?: string[];
  spc_audience_age?: "ALL" | "OVER_EIGHTEEN" | "OVER_TWENTY_FIVE";
  languages?: string[];
  operating_systems?: ("ANDROID" | "IOS")[];
  excluded_audience_ids?: string[];
  age_groups?: string[];
  gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  audience_ids?: string[];
  shopping_ads_retargeting_type?: "LAB1" | "LAB2" | "LAB3" | "OFF";
  shopping_ads_retargeting_actions_days?: "LAB1" | "LAB2";
  included_custom_actions?: {
  code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  days?: number;
}[];
  excluded_custom_actions?: {
  code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  days?: number;
}[];
  shopping_ads_retargeting_custom_audience_relation?: "OR" | "AND";
  included_pangle_audience_package_ids?: string[];
  excluded_pangle_audience_package_ids?: string[];
  interest_category_ids?: string[];
  interest_keyword_ids?: string[];
  purchase_intention_keyword_ids?: string[];
  actions?: {
  action_scene?: "VIDEO_RELATED" | "CREATOR_RELATED" | "HASHTAG_RELATED";
  action_period?: number;
  video_user_actions?: ("VIDEO_RELATED" | "WATCHED_TO_END" | "LIKED" | "COMMENTED" | "SHARED" | "CREATOR_RELATED" | "FOLLOWING" | "VIEW_HOMEPAGE" | "HASHTAG_RELATED" | "VIEW_HASHTAG")[];
  action_category_ids?: string[];
}[];
  smart_interest_behavior_enabled?: "true" | "false";
  smart_audience_enabled?: "true" | "false";
  spending_power?: "ALL" | "HIGH";
  household_income?: ("TOP5" | "TOP10" | "TOP10_25" | "TOP25_50")[];
  min_android_version?: string;
  min_ios_version?: string;
  device_model_ids?: string[];
  network_types?: string[];
  carrier_ids?: string[];
  isp_ids?: string[];
  device_price_ranges?: number[];
  saved_audience_id?: string;
  blocked_pangle_app_ids?: string[];
  brand_safety_type?: "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "NO_BRAND_SAFETY";
  category_exclusion_ids?: string[];
};
  is_hfss?: "true" | "false";
  is_lhf_compliance?: "true" | "false";
  placement_type?: ("PLACEMENT_TYPE_AUTOMATIC" | "PLACEMENT_TYPE_NORMAL")[];
  placements?: ("PLACEMENT_TIKTOK" | "PLACEMENT_PANGLE" | "PLACEMENT_GLOBAL_APP_BUNDLE")[];
  search_result_enabled?: "true" | "false";
  comment_disabled?: "true" | "false";
  share_disabled?: "true" | "false";
  video_download_disabled?: "true" | "false";
  skip_learning_phase?: boolean;
  create_time?: string;
  modify_time?: string;
};
}


export interface SmartPlusAdgroupUpdateParams {
  advertiser_id: string;
  adgroup_id: string;
  adgroup_name?: string;
  bid_price?: "CLICK" | "BID_TYPE_CUSTOM" | "true";
  conversion_bid_price?: "CONVERT" | "TRAFFIC_LANDING_PAGE_VIEW" | "INSTALL" | "IN_APP_EVENT" | "BID_TYPE_CUSTOM" | "true";
  roas_bid?: "VO_MIN_ROAS" | "true";
  comment_disabled?: "true" | "false";
  share_disabled?: "true" | "false";
  schedule_type?: "SCHEDULE_FROM_NOW" | "SCHEDULE_START_END" | "BUDGET_MODE_TOTAL";
  schedule_start_time?: string;
  schedule_end_time?: string;
  dayparting?: string;
  is_hfss?: "MANUAL" | "true" | "false";
  is_lhf_compliance?: "true" | "false";
  targeting_optimization_mode?: "AUTOMATIC" | "MANUAL" | "false" | "true";
  suggestion_audience_enabled?: "AUTOMATIC" | "true" | "false";
  targeting_spec?: {
  location_ids?: string[];
  zipcode_ids?: ("TRAVEL_ENTERTAINMENT" | "ZIP_CODE" | "RF_REACH")[];
  spc_audience_age?: "ALL" | "MULTIPLE";
  languages?: string[];
  operating_systems?: ("ANDROID" | "IOS" | "APP_ANDROID" | "APP_IOS")[];
  excluded_audience_ids?: string[];
  age_groups?: ("AGE_13_17" | "AGE_18_24" | "AGE_25_34" | "AGE_35_44" | "AGE_45_54" | "AGE_55_100" | "APP_PROMOTION" | "APP_INSTALL" | "APP_RETARGETING")[];
  gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  audience_ids?: string[];
  shopping_ads_retargeting_type?: "WEB_CONVERSION" | "WEB_AND_APP" | "ECOMMERCE" | "MANUAL" | "LAB1" | "LAB2" | "LAB3" | "OFF";
  shopping_ads_retargeting_actions_days?: "LAB1" | "LAB2";
  included_custom_actions?: {
  code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  days?: number;
}[];
  excluded_custom_actions?: {
  code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  days?: number;
}[];
  shopping_ads_retargeting_custom_audience_relation?: "LAB1" | "LAB2" | "LAB3" | "OR" | "AND";
  interest_category_ids?: string[];
  interest_keyword_ids?: string[];
  purchase_intention_keyword_ids?: ("PLACEMENT_TIKTOK" | "PLACEMENT_PANGLE")[];
  actions?: {
  action_scene?: "VIDEO_RELATED" | "CREATOR_RELATED" | "HASHTAG_RELATED";
  action_period?: "CREATOR_RELATED" | "HASHTAG_RELATED" | "VIDEO_RELATED";
  video_user_actions?: ("VIDEO_RELATED" | "WATCHED_TO_END" | "LIKED" | "COMMENTED" | "SHARED" | "CREATOR_RELATED" | "FOLLOWING" | "VIEW_HOMEPAGE" | "HASHTAG_RELATED" | "VIEW_HASHTAG")[];
  action_category_ids?: string[];
}[];
  smart_interest_behavior_enabled?: "true" | "false";
  smart_audience_enabled?: "true" | "false";
  spending_power?: "ALL" | "HIGH";
  household_income?: ("TOP5" | "TOP10" | "TOP10_25" | "TOP25_50")[];
  min_android_version?: string;
  min_ios_version?: string;
  device_model_ids?: string[];
  network_types?: string[];
  carrier_ids?: string[];
  isp_ids?: string[];
  device_price_ranges?: number[];
  saved_audience_id?: "PLACEMENT_TYPE_AUTOMATIC" | "PLACEMENT_TYPE_NORMAL" | "PLACEMENT_TIKTOK" | "GENDER_FEMALE" | "GENDER_MALE";
  blocked_pangle_app_ids?: string[];
};
  budget_auto_adjust_strategy?: "APP_PROMOTION" | "BUDGET_MODE_DYNAMIC_DAILY_BUDGET" | "VALUE" | "VO_MIN_ROAS" | "ZERO_DAY" | "LEAD_GENERATION" | "BID_TYPE_CUSTOM" | "AUTO_BUDGET_INCREASE" | "UNSET" | "false";
  budget?: "UNSET" | "AUTO_BUDGET_INCREASE";
}


export interface SmartPlusAdgroupUpdateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  advertiser_id?: string;
  campaign_id?: string;
  campaign_name?: string;
  adgroup_id?: string;
  adgroup_name?: string;
  catalog_id?: string;
  catalog_authorized_bc_id?: string;
  promotion_type?: "APP_ANDROID" | "APP_IOS" | "WEBSITE" | "MINI_GAME" | "LEAD_GENERATION" | "APP_PROMOTION" | "APP_INSTAL" | "MINIS" | "MINI_APP" | "WEB_CONVERSIONS" | "APP" | "LEAD_GEN_CLICK_TO_TT_DIRECT_MESSAGE" | "LEAD_GEN_CLICK_TO_SOCIAL_MEDIA_APP_MESSAGE" | "LEAD_GEN_CLICK_TO_CALL";
  app_id?: string;
  gaming_ad_compliance_agreement?: "APP_PROMOTION" | "APP_RETARGETING" | "APP_INSTALL" | "REGULAR_CAMPAIGN" | "ON" | "OFF";
  promotion_website_type?: string;
  promotion_target_type?: "INSTANT_PAGE" | "EXTERNAL_WEBSITE";
  optimization_goal?: string;
  pixel_id?: string;
  app_config?: {
  app_id?: string;
}[];
  minis_id?: "MINI_APP" | "MINI_GAME";
  optimization_event?: string;
  custom_conversion_id?: string;
  deep_funnel_optimization_status?: "ON" | "OFF";
  deep_funnel_event_source?: "ON" | "PIXEL" | "OFFLINE" | "CRM";
  deep_funnel_event_source_id?: "ON" | "PIXEL" | "OFFLINE" | "CRM";
  deep_funnel_optimization_event?: "ON" | "SHOPPING";
  identity_id?: string;
  identity_type?: "LEAD_GEN_CLICK_TO_TT_DIRECT_MESSAGE" | "TT_USER" | "BC_AUTH_TT";
  identity_authorized_bc_id?: string;
  messaging_app_type?: "MESSENGER" | "WHATSAPP" | "ZALO" | "LINE" | "IM_URL";
  zalo_id_type?: "ZALO_OFFICIAL_ACCOUNT" | "ZALO_PHONE_ACCOUNT";
  messaging_app_account_id?: "MESSENGER" | "LINE" | "ZALO_OFFICIAL_ACCOUNT" | "WHATSAPP" | "ZALO_PHONE_ACCOUNT";
  message_event_set_id?: string;
  phone_info?: {
  phone_region_code?: string;
  phone_region_calling_code?: string;
  phone_number?: string;
};
  bid_type?: string;
  bid_price?: number;
  conversion_bid_price?: number;
  deep_bid_type?: string;
  roas_bid?: number;
  incentive_offer_type?: "INELIGIBLE" | "COST_CAP_AND_MIN_ROAS";
  vbo_window?: "SEVEN_DAYS" | "ZERO_DAY";
  click_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS" | "THIRTY_DAYS" | "THIRTY_TWO_DAYS" | "ONE_HUNDRED_EIGHTY_DAYS";
  engaged_view_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS";
  view_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS";
  attribution_event_count?: "UNSET" | "EVERY" | "ONCE";
  billing_event?: string;
  pacing?: string;
  budget_mode?: "BUDGET_MODE_TOTAL" | "BUDGET_MODE_DYNAMIC_DAILY_BUDGET";
  budget_auto_adjust_strategy?: "BUDGET_MODE_DYNAMIC_DAILY_BUDGET" | "AUTO_BUDGET_INCREASE" | "UNSET" | "false";
  budget?: "UNSET" | "AUTO_BUDGET_INCREASE";
  current_budget?: number;
  min_budget?: number;
  schedule_type?: "SCHEDULE_FROM_NOW" | "SCHEDULE_START_END";
  schedule_start_time?: string;
  schedule_end_time?: string;
  movie_premiere_date?: string;
  dayparting?: string;
  targeting_optimization_mode?: "MANUAL" | "AUTOMATIC";
  suggestion_audience_enabled?: "true" | "false";
  targeting_spec?: {
  app_targeting_type?: "WEB_CONVERSIONS" | "APP" | "CLICK" | "IN_APP_EVENT" | "VALUE" | "PROSPECT" | "RETARGETING";
  location_ids?: string[];
  zipcode_ids?: string[];
  spc_audience_age?: "ALL" | "OVER_EIGHTEEN" | "OVER_TWENTY_FIVE";
  languages?: string[];
  operating_systems?: ("ANDROID" | "IOS")[];
  excluded_audience_ids?: string[];
  age_groups?: string[];
  gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  audience_ids?: string[];
  shopping_ads_retargeting_type?: "LAB1" | "LAB2" | "LAB3" | "OFF";
  shopping_ads_retargeting_actions_days?: "LAB1" | "LAB2";
  included_custom_actions?: {
  code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  days?: number;
}[];
  excluded_custom_actions?: {
  code?: "VIEW_PRODUCT" | "ADD_TO_CART" | "PURCHASE";
  days?: number;
}[];
  shopping_ads_retargeting_custom_audience_relation?: "OR" | "AND";
  included_pangle_audience_package_ids?: string[];
  excluded_pangle_audience_package_ids?: string[];
  interest_category_ids?: string[];
  interest_keyword_ids?: string[];
  purchase_intention_keyword_ids?: string[];
  actions?: {
  action_scene?: "VIDEO_RELATED" | "CREATOR_RELATED" | "HASHTAG_RELATED";
  action_period?: number;
  video_user_actions?: ("VIDEO_RELATED" | "WATCHED_TO_END" | "LIKED" | "COMMENTED" | "SHARED" | "CREATOR_RELATED" | "FOLLOWING" | "VIEW_HOMEPAGE" | "HASHTAG_RELATED" | "VIEW_HASHTAG")[];
  action_category_ids?: string[];
}[];
  smart_interest_behavior_enabled?: "true" | "false";
  smart_audience_enabled?: "true" | "false";
  spending_power?: "ALL" | "HIGH";
  household_income?: ("TOP5" | "TOP10" | "TOP10_25" | "TOP25_50")[];
  min_android_version?: string;
  min_ios_version?: string;
  device_model_ids?: string[];
  network_types?: string[];
  carrier_ids?: string[];
  isp_ids?: string[];
  device_price_ranges?: number[];
  saved_audience_id?: string;
  blocked_pangle_app_ids?: string[];
  brand_safety_type?: "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "NO_BRAND_SAFETY";
  category_exclusion_ids?: string[];
};
  is_hfss?: "true" | "false";
  is_lhf_compliance?: "true" | "false";
  placement_type?: ("PLACEMENT_TYPE_AUTOMATIC" | "PLACEMENT_TYPE_NORMAL")[];
  placements?: ("PLACEMENT_TIKTOK" | "PLACEMENT_PANGLE" | "PLACEMENT_GLOBAL_APP_BUNDLE")[];
  search_result_enabled?: "true" | "false";
  comment_disabled?: "true" | "false";
  share_disabled?: "true" | "false";
  video_download_disabled?: "true" | "false";
  skip_learning_phase?: boolean;
  create_time?: string;
  modify_time?: string;
};
}


export interface SmartPlusAdgroupStatusUpdateParams {
  advertiser_id: string;
  adgroup_ids: string[];
  operation_status: "DISABLE" | "ENABLE" | "DELETE";
}


export interface SmartPlusAdgroupStatusUpdateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  adgroup_list?: {
  adgroup_id?: string;
  status?: "DISABLE" | "ENABLE" | "DELETE";
}[];
  error_list?: {
  adgroup_id?: string;
  error_message?: string;
}[];
};
}


export interface SmartPlusAdgroupBudgetUpdateParams {
  advertiser_id: string;
  budget?: {
  adgroup_id?: string;
  budget?: number;
}[];
  scheduled_budget?: {
  adgroup_id?: "true" | "false";
  scheduled_budget?: "true" | "false";
}[];
}


export interface SmartPlusAdgroupBudgetUpdateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: Record<string, unknown>;
}


export interface SmartPlusAdGetParams {
  advertiser_id: string;
  fields?: string[];
  filtering?: {
  campaign_ids?: string[];
  adgroup_ids?: string[];
  smart_plus_ad_ids?: string[];
  primary_status?: string;
  secondary_status?: "AD_STATUS_DELIVERY_AND_REAUDIT" | "AD_STATUS_DELIVERY_AND_TRANSCODING_FAIL" | "AD_STATUS_REVIEW_PARTIALLY_APPROVED" | "AD_STATUS_COLLECTION_TOGGLED_OFF" | "AD_STATUS_PRIVACY_POLICY_REJECTED" | "AD_STATUS_PRIVACY_POLICY_AUDIT";
  objective_type?: "APP_PROMOTION" | "WEB_CONVERSIONS" | "LEAD_GENERATION";
  sales_destination?: "WEBSITE" | "APP" | "WEB_AND_APP";
  optimization_goal?: string;
  creation_filter_start_time?: string;
  creation_filter_end_time?: string;
  modified_after?: string;
};
  page?: number;
  page_size?: number;
}


export interface SmartPlusAdGetResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  list?: {
  advertiser_id?: string;
  campaign_id?: string;
  campaign_name?: string;
  adgroup_id?: string;
  adgroup_name?: string;
  smart_plus_ad_id?: string;
  ad_name?: string;
  operation_status?: "ENABLE" | "DISABLE" | "FROZEN";
  secondary_status?: "AD_STATUS_DELIVERY_AND_REAUDIT" | "AD_STATUS_DELIVERY_AND_TRANSCODING_FAIL" | "AD_STATUS_REVIEW_PARTIALLY_APPROVED" | "AD_STATUS_COLLECTION_TOGGLED_OFF" | "AD_STATUS_PRIVACY_POLICY_REJECTED" | "AD_STATUS_PRIVACY_POLICY_AUDIT";
  create_time?: string;
  modify_time?: string;
  creative_list?: {
  ad_material_id?: string;
  material_operation_status?: "ENABLE" | "DISABLE";
  creative_info?: {
  ad_format?: "SINGLE_VIDEO" | "CAROUSEL_ADS" | "CATALOG_CAROUSEL";
  material_name?: string;
  video_info?: {
  video_id?: string;
  file_name?: string;
};
  image_info?: {
  web_uri?: string;
}[];
  music_info?: {
  music_id?: string;
};
  aigc_disclosure_type?: "SELF_DISCLOSURE" | "NOT_DECLARED";
  tiktok_item_id?: string;
  identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  identity_id?: string;
  identity_authorized_bc_id?: string;
};
}[];
  ad_text_list?: {
  ad_text?: string;
}[];
  auto_message_list?: {
  auto_message_id?: string;
}[];
  call_to_action_list?: {
  call_to_action?: string;
}[];
  interactive_add_on_list?: {
  card_id?: string;
}[];
  page_list?: {
  page_id?: string;
}[];
  landing_page_url_list?: {
  landing_page_url?: string;
}[];
  custom_product_page_list?: {
  custom_product_page_url?: string;
}[];
  deeplink_list?: {
  deeplink?: string;
  deeplink_type?: "NORMAL" | "DEFERRED_DEEPLINK";
}[];
  disclaimer?: {
  disclaimer_type?: "TEXT_LINK" | "TEXT_ONLY";
  disclaimer_text?: {
  text?: string;
};
  disclaimer_clickable_texts?: {
  text?: string;
  url?: string;
}[];
};
  ad_configuration?: {
  identity_type?: "CUSTOMIZED_USER" | "TT_USER" | "BC_AUTH_TT" | "true";
  identity_id?: string;
  identity_authorized_bc_id?: string;
  dark_post_status?: "ON" | "OFF";
  product_specific_type?: "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS";
  product_set_id?: string;
  product_ids?: string[];
  catalog_creative_toggle?: "true" | "false";
  catalog_creative_info?: {
  catalog_media_settings?: ("VIDEO" | "IMAGE" | "TEMPLATE_VIDEO")[];
  catalog_template_video_id?: string;
};
  creative_auto_add_toggle?: "true" | "false";
  creative_auto_enhancement_strategy_list?: ("TRANSLATE_AND_DUB" | "MUSIC_REFRESH" | "VIDEO_QUALITY" | "IMAGE_QUALITY" | "IMAGE_RESIZE" | "CALL_TO_ACTION_ENHANCEMENT" | "AIGC_CARD")[];
  deeplink_utm_params?: {
  key?: string;
  value?: string;
}[];
  end_card_cta?: "SEARCH_INVENTORY" | "LEARN_MORE" | "SHOP_NOW" | "SIGN_UP" | "CONTACT_US" | "BOOK_NOW" | "READ_MORE" | "VIEW_MORE" | "ORDER_NOW" | "SEND_MESSAGE";
  product_display_field_list?: ("DEALER_NAME" | "MAKE" | "MODEL" | "YEAR" | "MILEAGE" | "PRICE" | "SALE_PRICE" | "EXTERIOR_COLOR" | "TRIM" | "ADDRESS_CITY" | "VEHICLE_STATE")[];
  auto_disclaimer_types?: ("EMISSION" | "DISCOUNT")[];
  utm_params?: {
  key?: string;
  value?: string;
}[];
  fallback_type?: string;
  product_info?: {
  product_titles?: string[];
  product_image_list?: {
  web_uri?: string;
}[];
  selling_points?: string[];
  catalog_tag_list?: ("WEB_CONVERSIONS" | "ECOMMERCE" | "LEAD_GENERATION" | "PRICE" | "STRIKETHROUGH_PRICE" | "DISCOUNT" | "FREE_SHIPPING" | "DEALER_NAME" | "CURRENT_MILEAGE" | "LEAD_PRICE" | "LEAD_SALE_PRICE" | "EXTERIOR_COLOR" | "TRIM" | "ADDRESS_CITY" | "VEHICLE_STATE" | "true")[];
  promo_info_list?: {
  discount_type?: "PERCENTAGE" | "CASH";
  discount_value?: number;
  discount_currency?: string;
  promo_code?: string;
  minimum_purchase_type?: "QUANTITY" | "SUBTOTAL";
  minimum_purchase_value?: number;
  minimum_purchase_currency?: string;
  valid_start_time?: string;
  valid_end_time?: string;
}[];
};
  product_info_enabled?: "UNSET" | "NON_CATALOG" | "CATALOG";
  call_to_action_id?: string;
  phone_info?: {
  phone_region_code?: string;
  phone_region_calling_code?: string;
  phone_number?: string;
};
  tracking_info?: {
  impression_tracking_url?: string;
  click_tracking_url?: string;
  tracking_app_id?: string;
  tracking_pixel_id?: string;
  tracking_offline_event_set_ids?: string[];
  tracking_message_event_set_id?: string;
  app_tracking_info_list?: {
  app_type?: "APP_ANDROID" | "APP_IOS";
  app_id?: "APP_ANDROID" | "APP_IOS";
  impression_tracking_url?: "APP_ANDROID" | "APP_IOS";
  click_tracking_url?: "APP_ANDROID" | "APP_IOS";
}[];
};
};
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
};
}


export interface SmartPlusAdCreateParams {
  advertiser_id: string;
  adgroup_id: string;
  ad_name?: string;
  operation_status?: "ENABLE" | "DISABLE";
  creative_list: {
  creative_info: {
  ad_format: "SINGLE_VIDEO" | "CAROUSEL_ADS" | "CATALOG_CAROUSEL";
  video_info?: {
  video_id?: string;
  file_name?: string;
};
  image_info?: {
  web_uri?: string;
}[];
  music_info?: "WEB_CONVERSIONS" | "LEAD_GENERATION" | "true";
  aigc_disclosure_type?: "CUSTOMIZED_USER" | "SELF_DISCLOSURE" | "NOT_DECLARED";
  tiktok_item_id?: string;
  identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "PLACEMENT_TYPE_NORMAL" | "PLACEMENT_TIKTOK" | "PLACEMENT_TYPE_AUTOMATIC";
  identity_id?: string;
  identity_authorized_bc_id?: string;
};
}[];
  ad_text_list?: {
  ad_text?: string;
}[];
  auto_message_list?: {
  auto_message_id?: string;
}[];
  call_to_action_list?: ("LEAD_GENERATION" | "PLACEMENT_TYPE_NORMAL" | "PLACEMENT_TIKTOK" | "PLACEMENT_TYPE_AUTOMATIC" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "TT_USER" | "BC_AUTH_TT" | "AUTH_CODE")[];
  interactive_add_on_list?: {
  card_id?: string;
}[];
  page_list?: {
  page_id?: string;
}[];
  landing_page_url_list?: {
  landing_page_url?: string;
}[];
  custom_product_page_list?: ("APP_PROMOTION" | "APP_RETARGETING")[];
  deeplink_list?: {
  deeplink?: string;
  deeplink_type?: "DEFERRED_DEEPLINK" | "NORMAL";
}[];
  disclaimer?: "APP_PROMOTION" | "WEB_CONVERSIONS" | "LEAD_GENERATION" | "PLACEMENT_TYPE_NORMAL" | "PLACEMENT_TIKTOK" | "false";
  ad_configuration?: {
  identity_type?: "CUSTOMIZED_USER" | "TT_USER" | "BC_AUTH_TT" | "true";
  identity_id?: string;
  identity_authorized_bc_id?: string;
  dark_post_status?: "ON" | "OFF";
  product_specific_type?: "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS" | "true";
  product_set_id?: string;
  product_ids?: string[];
  catalog_creative_toggle?: "true" | "false";
  catalog_creative_info?: {
  catalog_media_settings?: ("VIDEO" | "IMAGE" | "TEMPLATE_VIDEO" | "false")[];
  catalog_template_video_id?: string;
};
  creative_auto_add_toggle?: "WEB_CONVERSIONS" | "WEBSITE" | "LEAD_GENERATION" | "INSTANT_PAGE" | "EXTERNAL_WEBSITE" | "true" | "false";
  creative_auto_enhancement_strategy_list?: ("TRANSLATE_AND_DUB" | "MUSIC_REFRESH" | "VIDEO_QUALITY" | "IMAGE_QUALITY" | "IMAGE_RESIZE")[];
  deeplink_utm_params?: ("WEB_CONVERSIONS" | "APP" | "DEFERRED_DEEPLINK")[];
  end_card_cta?: "LEAD_GENERATION" | "SEARCH_INVENTORY" | "LEARN_MORE" | "SHOP_NOW" | "SIGN_UP" | "CONTACT_US" | "BOOK_NOW" | "READ_MORE" | "VIEW_MORE" | "ORDER_NOW" | "SEND_MESSAGE" | "true";
  product_display_field_list?: ("LEAD_GENERATION" | "DEALER_NAME" | "MAKE" | "MODEL" | "YEAR" | "MILEAGE" | "PRICE" | "SALE_PRICE" | "EXTERIOR_COLOR" | "TRIM" | "ADDRESS_CITY" | "VEHICLE_STATE" | "true")[];
  auto_disclaimer_types?: ("LEAD_GENERATION" | "EMISSION" | "DISCOUNT" | "true")[];
  utm_params?: {
  key?: string;
  value?: string;
}[];
  fallback_type?: "LEAD_GEN_CLICK_TO_SOCIAL_MEDIA_APP_MESSAGE" | "IM_URL" | "WEBSITE";
  product_info?: {
  product_titles?: string[];
  product_image_list?: {
  web_uri?: string;
}[];
  selling_points?: string[];
  catalog_tag_list?: ("WEB_CONVERSIONS" | "ECOMMERCE" | "LEAD_GENERATION" | "PRICE" | "STRIKETHROUGH_PRICE" | "DISCOUNT" | "FREE_SHIPPING" | "DEALER_NAME" | "CURRENT_MILEAGE" | "LEAD_PRICE" | "LEAD_SALE_PRICE" | "EXTERIOR_COLOR" | "TRIM" | "ADDRESS_CITY" | "VEHICLE_STATE" | "true")[];
  promo_info_list?: {
  discount_type?: "PERCENTAGE" | "CASH";
  discount_value?: "PERCENTAGE" | "CASH";
  discount_currency?: string;
  promo_code?: string;
  minimum_purchase_type?: "QUANTITY" | "SUBTOTAL";
  minimum_purchase_value?: "QUANTITY" | "SUBTOTAL";
  minimum_purchase_currency?: string;
  valid_start_time?: string;
  valid_end_time?: string;
}[];
};
  product_info_enabled?: "UNSET" | "NON_CATALOG" | "CATALOG" | "MINIS" | "true";
  call_to_action_id?: "LEAD_GENERATION" | "PLACEMENT_TYPE_NORMAL" | "PLACEMENT_TIKTOK" | "PLACEMENT_TYPE_AUTOMATIC" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "TT_USER" | "BC_AUTH_TT" | "AUTH_CODE";
  phone_info?: {
  phone_region_code?: string;
  phone_region_calling_code?: string;
  phone_number?: string;
};
  tracking_info?: {
  impression_tracking_url?: string;
  click_tracking_url?: string;
  tracking_app_id?: "WEB_CONVERSIONS" | "LEAD_GENERATION";
  tracking_pixel_id?: "APP_PROMOTION" | "APP_INSTALL" | "APP_RETARGETING";
  tracking_offline_event_set_ids?: ("APP_PROMOTION" | "APP_INSTALL" | "APP_RETARGETING" | "true")[];
  tracking_message_event_set_id?: "LEAD_GEN_CLICK_TO_SOCIAL_MEDIA_APP_MESSAGE" | "CLICK" | "MESSENGER" | "WHATSAPP";
  app_tracking_info_list?: {
  app_type?: "APP_ANDROID" | "APP_IOS";
  app_id?: "APP_ANDROID" | "APP_IOS";
  impression_tracking_url?: "APP_ANDROID" | "APP_IOS";
  click_tracking_url?: "APP_ANDROID" | "APP_IOS";
}[];
};
};
}


export interface SmartPlusAdCreateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  advertiser_id?: string;
  campaign_id?: string;
  campaign_name?: string;
  adgroup_id?: string;
  adgroup_name?: string;
  smart_plus_ad_id?: string;
  ad_name?: string;
  operation_status?: "ENABLE" | "DISABLE" | "FROZEN";
  secondary_status?: "AD_STATUS_DELIVERY_AND_REAUDIT" | "AD_STATUS_DELIVERY_AND_TRANSCODING_FAIL" | "AD_STATUS_REVIEW_PARTIALLY_APPROVED" | "AD_STATUS_COLLECTION_TOGGLED_OFF" | "AD_STATUS_PRIVACY_POLICY_REJECTED" | "AD_STATUS_PRIVACY_POLICY_AUDIT";
  create_time?: string;
  modify_time?: string;
  creative_list?: {
  ad_material_id?: string;
  material_operation_status?: "ENABLE" | "DISABLE";
  creative_info?: {
  ad_format?: "SINGLE_VIDEO" | "CAROUSEL_ADS" | "CATALOG_CAROUSEL";
  material_name?: string;
  video_info?: {
  video_id?: string;
  file_name?: string;
};
  image_info?: {
  web_uri?: string;
}[];
  music_info?: {
  music_id?: string;
};
  aigc_disclosure_type?: "SELF_DISCLOSURE" | "NOT_DECLARED";
  tiktok_item_id?: string;
  identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  identity_id?: string;
  identity_authorized_bc_id?: string;
};
}[];
  ad_text_list?: {
  ad_text?: string;
}[];
  auto_message_list?: {
  auto_message_id?: string;
}[];
  call_to_action_list?: {
  call_to_action?: string;
}[];
  interactive_add_on_list?: {
  card_id?: string;
}[];
  page_list?: {
  page_id?: string;
}[];
  landing_page_url_list?: {
  landing_page_url?: string;
}[];
  custom_product_page_list?: {
  custom_product_page_url?: string;
}[];
  deeplink_list?: {
  deeplink?: string;
  deeplink_type?: "NORMAL" | "DEFERRED_DEEPLINK";
}[];
  disclaimer?: {
  disclaimer_type?: "TEXT_ONLY" | "TEXT_LINK";
  disclaimer_text?: {
  text?: string;
};
  disclaimer_clickable_texts?: {
  text?: string;
  url?: string;
}[];
};
  ad_configuration?: {
  identity_type?: "CUSTOMIZED_USER" | "TT_USER" | "BC_AUTH_TT" | "true";
  identity_id?: string;
  identity_authorized_bc_id?: string;
  dark_post_status?: "ON" | "OFF";
  product_specific_type?: "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS";
  product_set_id?: string;
  product_ids?: string[];
  catalog_creative_toggle?: "true" | "false";
  catalog_creative_info?: {
  catalog_media_settings?: ("VIDEO" | "IMAGE" | "TEMPLATE_VIDEO")[];
  catalog_template_video_id?: string;
};
  creative_auto_add_toggle?: "true" | "false";
  creative_auto_enhancement_strategy_list?: ("TRANSLATE_AND_DUB" | "MUSIC_REFRESH" | "VIDEO_QUALITY" | "IMAGE_QUALITY" | "IMAGE_RESIZE")[];
  deeplink_utm_params?: {
  key?: string;
  value?: string;
}[];
  end_card_cta?: "SEARCH_INVENTORY" | "LEARN_MORE" | "SHOP_NOW" | "SIGN_UP" | "CONTACT_US" | "BOOK_NOW" | "READ_MORE" | "VIEW_MORE" | "ORDER_NOW" | "SEND_MESSAGE";
  product_display_field_list?: ("DEALER_NAME" | "MAKE" | "MODEL" | "YEAR" | "MILEAGE" | "PRICE" | "SALE_PRICE" | "EXTERIOR_COLOR" | "TRIM" | "ADDRESS_CITY" | "VEHICLE_STATE")[];
  auto_disclaimer_types?: ("EMISSION" | "DISCOUNT")[];
  utm_params?: {
  key?: string;
  value?: string;
}[];
  fallback_type?: string;
  product_info?: {
  product_titles?: string[];
  product_image_list?: {
  web_uri?: string;
}[];
  selling_points?: string[];
  catalog_tag_list?: ("WEB_CONVERSIONS" | "ECOMMERCE" | "LEAD_GENERATION" | "PRICE" | "STRIKETHROUGH_PRICE" | "DISCOUNT" | "FREE_SHIPPING" | "DEALER_NAME" | "CURRENT_MILEAGE" | "LEAD_PRICE" | "LEAD_SALE_PRICE" | "EXTERIOR_COLOR" | "TRIM" | "ADDRESS_CITY" | "VEHICLE_STATE" | "true")[];
  promo_info_list?: {
  discount_type?: "PERCENTAGE" | "CASH";
  discount_value?: number;
  discount_currency?: string;
  promo_code?: string;
  minimum_purchase_type?: "QUANTITY" | "SUBTOTAL";
  minimum_purchase_value?: number;
  minimum_purchase_currency?: string;
  valid_start_time?: string;
  valid_end_time?: string;
}[];
};
  product_info_enabled?: "UNSET" | "NON_CATALOG" | "CATALOG";
  call_to_action_id?: string;
  phone_info?: {
  phone_region_code?: string;
  phone_region_calling_code?: string;
  phone_number?: string;
};
  tracking_info?: {
  impression_tracking_url?: string;
  click_tracking_url?: string;
  tracking_app_id?: string;
  tracking_pixel_id?: string;
  tracking_offline_event_set_ids?: string[];
  tracking_message_event_set_id?: string;
  app_tracking_info_list?: {
  app_type?: "APP_ANDROID" | "APP_IOS";
  app_id?: "APP_ANDROID" | "APP_IOS";
  impression_tracking_url?: "APP_ANDROID" | "APP_IOS";
  click_tracking_url?: "APP_ANDROID" | "APP_IOS";
}[];
};
};
};
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface SmartPlusAdUpdateParams {
  advertiser_id: string;
  smart_plus_ad_id: string;
  ad_name?: string;
  creative_list?: {
  creative_info?: {
  ad_format?: "SINGLE_VIDEO" | "CAROUSEL_ADS" | "CATALOG_CAROUSEL";
  video_info?: {
  video_id?: string;
  file_name?: string;
};
  image_info?: {
  web_uri?: string;
}[];
  music_info?: {
  music_id?: string;
};
  aigc_disclosure_type?: "CUSTOMIZED_USER" | "SELF_DISCLOSURE" | "NOT_DECLARED";
  tiktok_item_id?: string;
  identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "PLACEMENT_TYPE_NORMAL" | "PLACEMENT_TIKTOK" | "PLACEMENT_TYPE_AUTOMATIC";
  identity_id?: string;
  identity_authorized_bc_id?: string;
};
}[];
  ad_text_list?: {
  ad_text?: string;
}[];
  call_to_action_list?: ("LEAD_GENERATION" | "PLACEMENT_TYPE_NORMAL" | "PLACEMENT_TIKTOK" | "PLACEMENT_TYPE_AUTOMATIC" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "TT_USER" | "BC_AUTH_TT" | "AUTH_CODE")[];
  interactive_add_on_list?: {
  card_id?: string;
}[];
  page_list?: {
  page_id?: string;
}[];
  landing_page_url_list?: {
  landing_page_url?: string;
}[];
  custom_product_page_list?: ("APP_PROMOTION" | "APP_RETARGETING")[];
  deeplink_list?: {
  deeplink?: string;
  deeplink_type?: string;
}[];
  disclaimer?: "APP_PROMOTION" | "WEB_CONVERSIONS" | "LEAD_GENERATION" | "PLACEMENT_TYPE_NORMAL" | "PLACEMENT_TIKTOK" | "TEXT_ONLY" | "TEXT_LINK" | "false";
  ad_configuration?: {
  identity_type?: "CUSTOMIZED_USER" | "TT_USER" | "BC_AUTH_TT" | "true";
  identity_id?: string;
  identity_authorized_bc_id?: string;
  dark_post_status?: "ON" | "OFF";
  product_specific_type?: "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS" | "true";
  product_set_id?: string;
  product_ids?: string[];
  catalog_creative_toggle?: "true" | "false";
  catalog_creative_info?: {
  catalog_media_settings?: ("VIDEO" | "IMAGE" | "TEMPLATE_VIDEO" | "false")[];
  catalog_template_video_id?: string;
};
  creative_auto_add_toggle?: "WEB_CONVERSIONS" | "WEBSITE" | "LEAD_GENERATION" | "INSTANT_PAGE" | "EXTERNAL_WEBSITE" | "true" | "false";
  creative_auto_enhancement_strategy_list?: ("TRANSLATE_AND_DUB" | "MUSIC_REFRESH" | "VIDEO_QUALITY" | "IMAGE_QUALITY" | "IMAGE_RESIZE")[];
  deeplink_utm_params?: ("WEB_CONVERSIONS" | "APP" | "DEFERRED_DEEPLINK")[];
  end_card_cta?: "LEAD_GENERATION" | "SEARCH_INVENTORY" | "LEARN_MORE" | "SHOP_NOW" | "SIGN_UP" | "CONTACT_US" | "BOOK_NOW" | "READ_MORE" | "VIEW_MORE" | "ORDER_NOW" | "SEND_MESSAGE" | "true";
  auto_disclaimer_types?: ("LEAD_GENERATION" | "EMISSION" | "DISCOUNT" | "true")[];
  utm_params?: {
  key?: string;
  value?: string;
}[];
  product_info?: {
  product_titles?: string[];
  product_image_list?: {
  web_uri?: string;
}[];
  selling_points?: string[];
  catalog_tag_list?: ("WEB_CONVERSIONS" | "ECOMMERCE" | "LEAD_GENERATION" | "PRICE" | "STRIKETHROUGH_PRICE" | "DISCOUNT" | "FREE_SHIPPING" | "DEALER_NAME" | "CURRENT_MILEAGE" | "LEAD_PRICE" | "LEAD_SALE_PRICE" | "EXTERIOR_COLOR" | "TRIM" | "ADDRESS_CITY" | "VEHICLE_STATE" | "true")[];
  promo_info_list?: {
  discount_type?: "PERCENTAGE" | "CASH";
  discount_value?: "PERCENTAGE" | "CASH";
  discount_currency?: string;
  promo_code?: string;
  minimum_purchase_type?: "QUANTITY" | "SUBTOTAL";
  minimum_purchase_value?: "QUANTITY" | "SUBTOTAL";
  minimum_purchase_currency?: string;
  valid_start_time?: string;
  valid_end_time?: string;
}[];
};
  product_info_enabled?: "UNSET" | "NON_CATALOG" | "CATALOG" | "MINIS" | "true";
  call_to_action_id?: "LEAD_GENERATION" | "PLACEMENT_TYPE_NORMAL" | "PLACEMENT_TIKTOK" | "PLACEMENT_TYPE_AUTOMATIC" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "TT_USER" | "BC_AUTH_TT" | "AUTH_CODE";
  tracking_info?: {
  impression_tracking_url?: string;
  click_tracking_url?: string;
  tracking_app_id?: string;
  tracking_pixel_id?: "APP_PROMOTION" | "APP_INSTALL" | "APP_RETARGETING";
  tracking_offline_event_set_ids?: ("APP_PROMOTION" | "APP_INSTALL" | "APP_RETARGETING" | "true")[];
};
};
}


export interface SmartPlusAdUpdateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  advertiser_id?: string;
  campaign_id?: string;
  campaign_name?: string;
  adgroup_id?: string;
  adgroup_name?: string;
  smart_plus_ad_id?: string;
  ad_name?: string;
  operation_status?: "ENABLE" | "DISABLE" | "FROZEN";
  secondary_status?: "AD_STATUS_DELIVERY_AND_REAUDIT" | "AD_STATUS_DELIVERY_AND_TRANSCODING_FAIL" | "AD_STATUS_REVIEW_PARTIALLY_APPROVED" | "AD_STATUS_COLLECTION_TOGGLED_OFF" | "AD_STATUS_PRIVACY_POLICY_REJECTED" | "AD_STATUS_PRIVACY_POLICY_AUDIT";
  create_time?: string;
  modify_time?: string;
  creative_list?: {
  ad_material_id?: string;
  material_operation_status?: "ENABLE" | "DISABLE";
  creative_info?: {
  ad_format?: "SINGLE_VIDEO" | "CAROUSEL_ADS" | "CATALOG_CAROUSEL";
  material_name?: string;
  video_info?: {
  video_id?: string;
  file_name?: string;
};
  image_info?: {
  web_uri?: string;
}[];
  music_info?: {
  music_id?: string;
};
  aigc_disclosure_type?: "SELF_DISCLOSURE" | "NOT_DECLARED";
  tiktok_item_id?: string;
  identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  identity_id?: string;
  identity_authorized_bc_id?: string;
};
}[];
  ad_text_list?: {
  ad_text?: string;
}[];
  auto_message_list?: {
  auto_message_id?: string;
}[];
  call_to_action_list?: {
  call_to_action?: string;
}[];
  interactive_add_on_list?: {
  card_id?: string;
}[];
  page_list?: {
  page_id?: string;
}[];
  landing_page_url_list?: {
  landing_page_url?: string;
}[];
  custom_product_page_list?: {
  custom_product_page_url?: string;
}[];
  deeplink_list?: {
  deeplink?: string;
  deeplink_type?: "NORMAL" | "DEFERRED_DEEPLINK";
}[];
  disclaimer?: {
  disclaimer_type?: "TEXT_ONLY" | "TEXT_LINK";
  disclaimer_text?: {
  text?: string;
};
  disclaimer_clickable_texts?: {
  text?: string;
  url?: string;
}[];
};
  ad_configuration?: {
  identity_type?: "CUSTOMIZED_USER" | "TT_USER" | "BC_AUTH_TT" | "true";
  identity_id?: string;
  identity_authorized_bc_id?: string;
  dark_post_status?: "ON" | "OFF";
  product_specific_type?: "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS";
  product_set_id?: string;
  product_ids?: string[];
  catalog_creative_toggle?: "true" | "false";
  catalog_creative_info?: {
  catalog_media_settings?: ("VIDEO" | "IMAGE" | "TEMPLATE_VIDEO")[];
  catalog_template_video_id?: string;
};
  creative_auto_add_toggle?: "true" | "false";
  creative_auto_enhancement_strategy_list?: ("TRANSLATE_AND_DUB" | "MUSIC_REFRESH" | "VIDEO_QUALITY" | "IMAGE_QUALITY" | "IMAGE_RESIZE" | "CALL_TO_ACTION_ENHANCEMENT" | "AIGC_CARD")[];
  deeplink_utm_params?: {
  key?: string;
  value?: string;
}[];
  end_card_cta?: "SEARCH_INVENTORY" | "LEARN_MORE" | "SHOP_NOW" | "SIGN_UP" | "CONTACT_US" | "BOOK_NOW" | "READ_MORE" | "VIEW_MORE" | "ORDER_NOW" | "SEND_MESSAGE";
  product_display_field_list?: ("DEALER_NAME" | "MAKE" | "MODEL" | "YEAR" | "MILEAGE" | "PRICE" | "SALE_PRICE" | "EXTERIOR_COLOR" | "TRIM" | "ADDRESS_CITY" | "VEHICLE_STATE")[];
  auto_disclaimer_types?: ("EMISSION" | "DISCOUNT")[];
  utm_params?: {
  key?: string;
  value?: string;
}[];
  fallback_type?: string;
  product_info?: {
  product_titles?: string[];
  product_image_list?: {
  web_uri?: string;
}[];
  selling_points?: string[];
  catalog_tag_list?: ("WEB_CONVERSIONS" | "ECOMMERCE" | "LEAD_GENERATION" | "PRICE" | "STRIKETHROUGH_PRICE" | "DISCOUNT" | "FREE_SHIPPING" | "DEALER_NAME" | "CURRENT_MILEAGE" | "LEAD_PRICE" | "LEAD_SALE_PRICE" | "EXTERIOR_COLOR" | "TRIM" | "ADDRESS_CITY" | "VEHICLE_STATE" | "true")[];
  promo_info_list?: {
  discount_type?: "PERCENTAGE" | "CASH";
  discount_value?: number;
  discount_currency?: string;
  promo_code?: string;
  minimum_purchase_type?: "QUANTITY" | "SUBTOTAL";
  minimum_purchase_value?: number;
  minimum_purchase_currency?: string;
  valid_start_time?: string;
  valid_end_time?: string;
}[];
};
  product_info_enabled?: "UNSET" | "NON_CATALOG" | "CATALOG";
  call_to_action_id?: string;
  phone_info?: {
  phone_region_code?: string;
  phone_region_calling_code?: string;
  phone_number?: string;
};
  tracking_info?: {
  impression_tracking_url?: string;
  click_tracking_url?: string;
  tracking_app_id?: string;
  tracking_pixel_id?: string;
  tracking_offline_event_set_ids?: string[];
  tracking_message_event_set_id?: string;
  app_tracking_info_list?: {
  app_type?: "APP_ANDROID" | "APP_IOS";
  app_id?: "APP_ANDROID" | "APP_IOS";
  impression_tracking_url?: "APP_ANDROID" | "APP_IOS";
  click_tracking_url?: "APP_ANDROID" | "APP_IOS";
}[];
};
};
};
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface SmartPlusAdStatusUpdateParams {
  advertiser_id: string;
  smart_plus_ad_ids: string[];
  operation_status: "DISABLE" | "ENABLE" | "DELETE";
}


export interface SmartPlusAdStatusUpdateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  smart_plus_ad_ids?: string[];
  status?: "DISABLE" | "ENABLE" | "DELETE";
};
}


export interface SmartPlusAdMaterialStatusUpdateParams {
  advertiser_id: string;
  smart_plus_ad_id: string;
  ad_material_ids: string[];
  operation_status: "DISABLE" | "ENABLE";
}


export interface SmartPlusAdMaterialStatusUpdateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  smart_plus_ad_id?: string[];
  ad_material_ids?: string[];
  material_status?: "DISABLE" | "ENABLE";
};
}


export interface SmartPlusAdPreviewParams {
  advertiser_id: string;
  preview_type: string;
  catalog_enabled?: "true" | "false";
  catalog_id?: string;
  catalog_authorized_bc_id?: string;
  creative_list: {
  creative_info: {
  video_info?: {
  video_id?: string;
};
  image_info?: {
  web_uri?: string;
}[];
  music_info?: "WEB_CONVERSIONS" | "true";
  tiktok_item_id?: string;
  identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "PLACEMENT_TYPE_NORMAL" | "PLACEMENT_TIKTOK" | "PLACEMENT_TYPE_AUTOMATIC";
  identity_id?: string;
  identity_authorized_bc_id?: string;
};
}[];
  ad_text_list?: {
  ad_text?: string;
}[];
  call_to_action_list?: {
  call_to_action?: Record<string, unknown>;
}[];
  ad_configuration?: {
  identity_type?: "CUSTOMIZED_USER" | "TT_USER" | "BC_AUTH_TT" | "true";
  identity_id?: string;
  identity_authorized_bc_id?: string;
  product_specific_type?: "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS" | "true";
  product_set_id?: string;
  product_ids?: string[];
  catalog_creative_toggle?: "true" | "false";
  catalog_creative_info?: {
  catalog_media_settings?: ("VIDEO" | "IMAGE" | "TEMPLATE_VIDEO")[];
  catalog_template_video_id?: string;
};
};
}


export interface SmartPlusAdPreviewResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  preview_link?: string;
  iframe?: string;
};
}


export interface SmartPlusAdReviewInfoParams {
  advertiser_id: string;
  smart_plus_ad_ids: string[];
  lang?: string;
  extra_info_setting?: {
  include_reject_info?: "true" | "false";
  include_violation_frame?: "true" | "false";
};
}


export interface SmartPlusAdReviewInfoResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  smart_plus_ad_review_infos?: {
  smart_plus_ad_id?: string;
  review_status?: "ALL_AVAILABLE" | "PART_AVAILABLE" | "UNAVAILABLE";
  passed_locations?: string[];
  appeal_status?: "NOT_APPEALED" | "APPEALING" | "APPEAL_SUCCESSFUL" | "APPEAL_FAILED" | "APPEAL_DONE";
  appeal_reject_reasons?: string[];
  reject_info?: {
  reasons?: string[];
  suggestion?: string;
  forbidden_ages?: string[];
  forbidden_locations?: string[];
  forbidden_placements?: string[];
  content_info?: {
  content_type?: string;
  text_content?: string;
  image_content?: {
  image_id?: string;
};
  video_content?: {
  video_id?: string;
};
  carousel_music_info?: {
  music_id?: string;
};
};
  violation_frames?: {
  type?: string;
  video_id?: string;
  web_url_list?: string[];
  violation_frame_material_type?: "DOWNLOAD URL" | "EXTERNAL_URL" | "INSTANT_PAGE" | "LEAD_GENERATION" | "OPEN_URL" | "VIDEO" | "UNSET";
}[];
  specification?: string;
  video_violation_frames?: {
  web_url?: string;
  hover_periods?: string[];
  thumbnail_periods?: string[];
}[];
}[];
}[];
  material_review_infos?: {
  ad_material_id?: string;
  smart_plus_ad_id?: string;
  review_status?: "ALL_AVAILABLE" | "PART_AVAILABLE" | "UNAVAILABLE";
  passed_locations?: string[];
  reject_info?: {
  reasons?: string[];
  suggestion?: string;
  forbidden_ages?: string[];
  forbidden_locations?: string[];
  forbidden_placements?: string[];
  content_info?: {
  content_type?: string;
  text_content?: string;
  image_content?: {
  image_id?: string;
};
  video_content?: {
  video_id?: string;
};
  carousel_music_info?: {
  music_id?: string;
};
};
  violation_frames?: {
  type?: string;
  video_id?: string;
  web_url_list?: string[];
  violation_frame_material_type?: "DOWNLOAD URL" | "EXTERNAL_URL" | "INSTANT_PAGE" | "LEAD_GENERATION" | "OPEN_URL" | "VIDEO" | "UNSET";
}[];
  specification?: string;
  video_violation_frames?: {
  web_url?: string;
  hover_periods?: string[];
  thumbnail_periods?: string[];
}[];
}[];
}[];
};
}


export interface SmartPlusMaterialReviewInfoParams {
  advertiser_id: string;
  ad_material_ids: string[];
  lang?: string;
  extra_info_setting?: {
  include_reject_info?: "true" | "false";
  include_violation_frame?: "true" | "false";
};
}


export interface SmartPlusMaterialReviewInfoResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  material_review_infos?: {
  ad_material_id?: string;
  smart_plus_ad_id?: string;
  passed_locations?: string[];
  review_status?: "ALL_AVAILABLE" | "PART_AVAILABLE" | "UNAVAILABLE";
  reject_info?: {
  reasons?: string[];
  suggestion?: string;
  forbidden_ages?: string[];
  forbidden_locations?: string[];
  forbidden_placements?: string[];
  content_info?: {
  content_type?: string;
  text_content?: string;
  image_content?: {
  image_id?: string;
};
  video_content?: {
  video_id?: string;
};
  carousel_music_info?: {
  music_id?: string;
};
};
  violation_frames?: {
  type?: string;
  video_id?: string;
  web_url_list?: string[];
  violation_frame_material_type?: "DOWNLOAD URL" | "EXTERNAL_URL" | "INSTANT_PAGE" | "LEAD_GENERATION" | "OPEN_URL" | "VIDEO" | "UNSET";
}[];
  specification?: string;
  video_violation_frames?: {
  web_url?: string;
  hover_periods?: string[];
  thumbnail_periods?: string[];
}[];
}[];
}[];
};
}


export interface SmartPlusAdAppealParams {
  advertiser_id: string;
  smart_plus_ad_id: string;
  appeal_reason?: string;
  attachment_list?: string[];
}


export interface SmartPlusAdAppealResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: Record<string, unknown>;
}

