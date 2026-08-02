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
  list?: {
  advertiser_id?: string;
  campaign_id?: string;
  create_time?: string;
  modify_time?: string;
  objective_type?: string;
  app_promotion_type?: "APP_INSTALL" | "APP_RETARGETING" | "MINIS";
  sales_destination?: "WEBSITE" | "APP" | "WEB_AND_APP";
  campaign_type?: string;
  app_id?: string;
  gaming_ad_compliance_agreement?: "ON" | "OFF";
  is_advanced_dedicated_campaign?: boolean;
  disable_skan_campaign?: boolean;
  bid_align_type?: "SAN" | "SKAN";
  campaign_app_profile_page_state?: "ON" | "OFF";
  catalog_enabled?: boolean;
  catalog_type?: "ECOMMERCE" | "TRAVEL_ENTERTAINMENT" | "MINI_SERIES";
  campaign_name?: string;
  special_industries?: ("HOUSING" | "EMPLOYMENT" | "CREDIT")[];
  budget_optimize_on?: boolean;
  budget_mode?: string;
  budget_auto_adjust_strategy?: string;
  budget?: number;
  current_budget?: number;
  operation_status?: "ENABLE" | "DISABLE";
  secondary_status?: string;
  smart_plus_adgroup_mode?: "SINGLE" | "MULTIPLE";
  postback_window_mode?: "POSTBACK_WINDOW_MODE1" | "POSTBACK_WINDOW_MODE2" | "POSTBACK_WINDOW_MODE3";
  po_number?: string;
  is_promotional_campaign?: boolean;
  rta_id?: string;
  rta_bid_enabled?: boolean;
  rta_product_selection_enabled?: boolean;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface SmartPlusCampaignCreateParams {
  advertiser_id: string;
  request_id: string;
  operation_status?: "ENABLE" | "DISABLE";
  objective_type: string;
  app_promotion_type?: "APP_INSTALL" | "APP_RETARGETING" | "MINIS";
  sales_destination?: "WEBSITE" | "APP";
  catalog_enabled?: boolean;
  catalog_type?: "ECOMMERCE" | "TRAVEL_ENTERTAINMENT" | "MINI_SERIES";
  campaign_type?: "REGULAR_CAMPAIGN" | "IOS14_CAMPAIGN";
  is_promotional_campaign?: boolean;
  app_id?: string;
  gaming_ad_compliance_agreement?: "ON" | "OFF";
  campaign_app_profile_page_state?: "ON" | "OFF";
  disable_skan_campaign?: boolean;
  campaign_name: string;
  special_industries?: ("HOUSING" | "EMPLOYMENT" | "CREDIT")[];
  budget_optimize_on?: boolean;
  budget_mode?: string;
  budget_auto_adjust_strategy?: string;
  budget?: number;
  postback_window_mode?: "POSTBACK_WINDOW_MODE1" | "POSTBACK_WINDOW_MODE2" | "POSTBACK_WINDOW_MODE3" | "ENABLE";
  po_number?: string;
  rta_id?: string;
  rta_bid_enabled?: boolean;
  rta_product_selection_enabled?: boolean;
}


export interface SmartPlusCampaignCreateResponse {
  advertiser_id?: string;
  campaign_id?: string;
  create_time?: string;
  modify_time?: string;
  objective_type?: string;
  app_promotion_type?: "APP_INSTALL" | "APP_RETARGETING" | "MINIS";
  sales_destination?: "WEBSITE" | "APP" | "WEB_AND_APP";
  campaign_type?: string;
  app_id?: string;
  gaming_ad_compliance_agreement?: "ON" | "OFF";
  is_advanced_dedicated_campaign?: boolean;
  disable_skan_campaign?: boolean;
  bid_align_type?: "SAN" | "SKAN";
  campaign_app_profile_page_state?: "ON" | "OFF";
  catalog_enabled?: boolean;
  catalog_type?: "ECOMMERCE" | "TRAVEL_ENTERTAINMENT" | "MINI_SERIES";
  campaign_name?: string;
  special_industries?: ("HOUSING" | "EMPLOYMENT" | "CREDIT")[];
  budget_optimize_on?: boolean;
  budget_mode?: string;
  budget_auto_adjust_strategy?: string;
  budget?: number;
  current_budget?: number;
  operation_status?: "ENABLE" | "DISABLE";
  secondary_status?: string;
  smart_plus_adgroup_mode?: "SINGLE" | "MULTIPLE";
  postback_window_mode?: "POSTBACK_WINDOW_MODE1" | "POSTBACK_WINDOW_MODE2" | "POSTBACK_WINDOW_MODE3";
  po_number?: string;
  is_promotional_campaign?: boolean;
  rta_id?: string;
  rta_bid_enabled?: boolean;
  rta_product_selection_enabled?: boolean;
}


export interface SmartPlusCampaignUpdateParams {
  advertiser_id: string;
  campaign_id: string;
  campaign_name?: string;
  budget_auto_adjust_strategy?: string;
  budget?: number;
  po_number?: string;
}


export interface SmartPlusCampaignUpdateResponse {
  advertiser_id?: string;
  campaign_id?: string;
  create_time?: string;
  modify_time?: string;
  objective_type?: string;
  app_promotion_type?: "APP_INSTALL" | "APP_RETARGETING" | "MINIS";
  sales_destination?: "WEBSITE" | "APP" | "WEB_AND_APP";
  campaign_type?: string;
  app_id?: string;
  gaming_ad_compliance_agreement?: "ON" | "OFF";
  is_advanced_dedicated_campaign?: boolean;
  disable_skan_campaign?: boolean;
  bid_align_type?: "SAN" | "SKAN";
  campaign_app_profile_page_state?: "ON" | "OFF";
  catalog_enabled?: boolean;
  catalog_type?: "ECOMMERCE" | "TRAVEL_ENTERTAINMENT" | "MINI_SERIES";
  campaign_name?: string;
  special_industries?: ("HOUSING" | "EMPLOYMENT" | "CREDIT")[];
  budget_optimize_on?: boolean;
  budget_mode?: string;
  budget_auto_adjust_strategy?: string;
  budget?: number;
  current_budget?: number;
  operation_status?: "ENABLE" | "DISABLE";
  secondary_status?: string;
  smart_plus_adgroup_mode?: "SINGLE" | "MULTIPLE";
  postback_window_mode?: "POSTBACK_WINDOW_MODE1" | "POSTBACK_WINDOW_MODE2" | "POSTBACK_WINDOW_MODE3";
  po_number?: string;
  is_promotional_campaign?: boolean;
  rta_id?: string;
  rta_bid_enabled?: boolean;
  rta_product_selection_enabled?: boolean;
}


export interface SmartPlusCampaignStatusUpdateParams {
  advertiser_id: string;
  campaign_ids: string[];
  operation_status: "DELETE" | "ENABLE";
  postback_window_mode?: "POSTBACK_WINDOW_MODE1" | "POSTBACK_WINDOW_MODE2" | "POSTBACK_WINDOW_MODE3" | "ENABLE";
}


export interface SmartPlusCampaignStatusUpdateResponse {
  campaign_list?: {
  campaign_id?: string;
  status?: "DISABLE" | "ENABLE" | "DELETE";
  postback_window_mode?: "POSTBACK_WINDOW_MODE1" | "POSTBACK_WINDOW_MODE2" | "POSTBACK_WINDOW_MODE3";
}[];
  error_list?: {
  campaign_id?: string;
  error_message?: string;
}[];
}


export interface SmartPlusCampaignCopyTaskCreateParams {
  advertiser_id: string;
  request_id: string;
  campaign_id: string;
  operation_status?: "ENABLE" | "DISABLE";
  campaign_name?: string;
  budget?: number;
  schedule_type?: "SCHEDULE_START_END" | "SCHEDULE_FROM_NOW";
  schedule_start_time?: string;
  schedule_end_time?: string;
  dayparting?: string;
  deep_copy_mode?: "DEFAULT" | "CUSTOM";
  adgroup_list?: {
  adgroup_id?: string;
  operation_status?: "ENABLE" | "DISABLE";
  adgroup_name?: string;
  budget?: number;
  min_budget?: number;
  targeting_spec?: {
  location_ids?: string[];
  zipcode_ids?: string[];
  excluded_audience_ids?: string[];
  audience_ids?: string[];
  saved_audience_id?: string;
};
  ad_list?: {
  smart_plus_ad_id?: string;
  operation_status?: "ENABLE" | "DISABLE";
  ad_name?: string;
  creative_list?: {
  creative_info?: {
  ad_format?: string;
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
  call_to_action_list?: {
  call_to_action?: string;
}[];
  landing_page_url_list?: {
  landing_page_url?: string;
}[];
  ad_configuration?: {
  utm_params?: {
  key?: string;
  value?: string;
}[];
  call_to_action_id?: string;
};
}[];
}[];
}


export interface SmartPlusCampaignCopyTaskCreateResponse {
  task_id?: string;
  adgroup_error_list?: {
  adgroup_id?: string;
  error_message?: string;
}[];
}


export interface SmartPlusCampaignCopyTaskCheckParams {
  advertiser_id: string;
  task_id: string;
}


export interface SmartPlusCampaignCopyTaskCheckResponse {
  task_status?: "RUNNING" | "SUCCESS" | "FAILURE";
  task_info?: {
  total_ad_count?: number;
  success_ad_count?: number;
};
  task_result?: {
  campaign_id?: string;
  campaign_name?: string;
  campaign_error_infos?: string[];
  adgroup_result_list?: {
  adgroup_id?: string;
  adgroup_name?: string;
  total_ad_count?: number;
  success_ad_count?: number;
  adgroup_error_list?: string[];
  ad_status?: "ALL_SUCCESS" | "PARTIAL_SUCCESS";
  ad_result_list?: {
  is_success?: boolean;
  smart_plus_ad_id?: string;
  ad_name?: string;
  ad_error_list?: string[];
}[];
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
  primary_status?: string;
  secondary_status?: string;
  objective_type?: string;
  sales_destination?: "WEBSITE" | "APP" | "WEB_AND_APP";
  promotion_type?: "APP" | "WEBSITE" | "INSTANT_FORM" | "LEAD_GEN_CLICK_TO_TT_DIRECT_MESSAGE" | "LEAD_GEN_CLICK_TO_SOCIAL_MEDIA_APP_MESSAGE" | "LEAD_GEN_CLICK_TO_CALL";
  optimization_goal?: string;
};
  page?: number;
  page_size?: number;
}


export interface SmartPlusAdgroupGetResponse {
  list?: {
  advertiser_id?: string;
  campaign_id?: string;
  campaign_name?: string;
  adgroup_id?: string;
  adgroup_name?: string;
  catalog_id?: string;
  catalog_authorized_bc_id?: string;
  promotion_type?: string;
  app_id?: string;
  gaming_ad_compliance_agreement?: "ON" | "OFF";
  promotion_website_type?: string;
  optimization_goal?: string;
  pixel_id?: string;
  app_config?: {
  app_id?: string;
}[];
  minis_id?: string;
  optimization_event?: string;
  custom_conversion_id?: string;
  deep_funnel_optimization_status?: "ON" | "OFF";
  deep_funnel_event_source?: "PIXEL" | "OFFLINE" | "CRM";
  deep_funnel_event_source_id?: string;
  deep_funnel_optimization_event?: string;
  app_attribution_source?: "MMP" | "SAN";
  app_data_source?: "MMP" | "EVENT_SDK" | "EVENT_API";
  identity_id?: string;
  identity_type?: "TT_USER" | "BC_AUTH_TT";
  identity_authorized_bc_id?: string;
  native_series_id?: string;
  messaging_app_type?: "MESSENGER" | "WHATSAPP" | "ZALO" | "LINE" | "IM_URL";
  zalo_id_type?: "ZALO_OFFICIAL_ACCOUNT" | "ZALO_PHONE_ACCOUNT";
  messaging_app_account_id?: string;
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
  budget_auto_adjust_strategy?: string;
  budget?: number;
  current_budget?: number;
  min_budget?: number;
  schedule_type?: "SCHEDULE_FROM_NOW" | "SCHEDULE_START_END";
  schedule_start_time?: string;
  schedule_end_time?: string;
  movie_premiere_date?: string;
  dayparting?: string;
  targeting_optimization_mode?: "MANUAL" | "AUTOMATIC";
  suggestion_audience_enabled?: boolean;
  targeting_spec?: {
  app_targeting_type?: "PROSPECT" | "RETARGETING";
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
  included_pangle_audience_package_ids?: string[];
  excluded_pangle_audience_package_ids?: string[];
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
  smart_audience_enabled?: boolean;
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
  is_hfss?: boolean;
  is_lhf_compliance?: boolean;
  placement_type?: ("PLACEMENT_TYPE_AUTOMATIC" | "PLACEMENT_TYPE_NORMAL")[];
  placements?: ("PLACEMENT_TIKTOK" | "PLACEMENT_PANGLE" | "PLACEMENT_GLOBAL_APP_BUNDLE")[];
  tiktok_subplacements?: ("LEMON8" | "PINE_DRAMA")[];
  search_result_enabled?: boolean;
  comment_disabled?: boolean;
  share_disabled?: boolean;
  video_download_disabled?: boolean;
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
}


export interface SmartPlusAdgroupCreateParams {
  advertiser_id: string;
  request_id: string;
  campaign_id: string;
  operation_status?: "ENABLE" | "DISABLE";
  adgroup_name: string;
  catalog_id?: string;
  catalog_authorized_bc_id?: string;
  promotion_type: string;
  promotion_target_type?: "INSTANT_PAGE" | "EXTERNAL_WEBSITE" | "true";
  optimization_goal: string;
  app_id?: string;
  gaming_ad_compliance_agreement?: "ON" | "OFF";
  pixel_id?: string;
  app_config?: {
  app_id?: string;
}[];
  minis_id?: string;
  optimization_event?: string;
  custom_conversion_id?: string;
  deep_funnel_optimization_status?: "ON" | "OFF";
  deep_funnel_event_source?: "PIXEL" | "OFFLINE" | "CRM";
  deep_funnel_event_source_id?: string;
  deep_funnel_optimization_event?: string;
  app_attribution_source?: "MMP" | "SAN" | "true";
  app_data_source?: "MMP" | "EVENT_SDK" | "EVENT_API" | "true";
  identity_id?: string;
  identity_type?: "TT_USER" | "BC_AUTH_TT";
  identity_authorized_bc_id?: string;
  native_series_id?: string;
  messaging_app_type?: "MESSENGER" | "WHATSAPP" | "ZALO" | "LINE" | "IM_URL";
  zalo_id_type?: "ZALO_OFFICIAL_ACCOUNT" | "ZALO_PHONE_ACCOUNT";
  messaging_app_account_id?: string;
  message_event_set_id?: string;
  phone_info?: {
  phone_region_code?: string;
  phone_region_calling_code?: string;
  phone_number?: string;
};
  bid_type: "BID_TYPE_NO_BID" | "BID_TYPE_CUSTOM";
  bid_price?: number;
  conversion_bid_price?: number;
  deep_bid_type?: "DEFAULT" | "AEO" | "VO_MIN_ROAS" | "VO_HIGHEST_VALUE" | "BUDGET_MODE_DYNAMIC_DAILY_BUDGET";
  roas_bid?: number;
  vbo_window?: "SEVEN_DAYS" | "ZERO_DAY";
  click_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS" | "THIRTY_DAYS";
  engaged_view_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS";
  view_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS";
  attribution_event_count?: "UNSET" | "EVERY" | "ONCE";
  billing_event: string;
  targeting_optimization_mode?: string;
  suggestion_audience_enabled?: boolean;
  targeting_spec: {
  app_targeting_type?: "PROSPECT" | "RETARGETING";
  location_ids?: string[];
  zipcode_ids?: string[];
  languages?: string[];
  operating_systems?: ("ANDROID" | "IOS")[];
  spc_audience_age?: "ALL" | "OVER_EIGHTEEN" | "OVER_TWENTY_FIVE";
  excluded_audience_ids?: string[];
  age_groups?: ("AGE_13_17" | "AGE_18_24" | "AGE_25_34" | "AGE_35_44" | "AGE_45_54" | "AGE_55_100" | "APP_PROMOTION" | "APP_INSTALL" | "APP_RETARGETING")[];
  gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  audience_ids?: string[];
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
  included_pangle_audience_package_ids?: string[];
  excluded_pangle_audience_package_ids?: string[];
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
  smart_audience_enabled?: boolean;
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
};
  budget_mode?: "BUDGET_MODE_TOTAL" | "BUDGET_MODE_DYNAMIC_DAILY_BUDGET" | "SCHEDULE_START_END" | "BUDGET_MODE_DAY" | "false";
  budget_auto_adjust_strategy?: string;
  budget?: number;
  min_budget?: number;
  schedule_type: "SCHEDULE_FROM_NOW" | "BUDGET_MODE_DYNAMIC_DAILY_BUDGET" | "SCHEDULE_START_END";
  schedule_start_time: string;
  schedule_end_time?: string;
  movie_premiere_date?: string;
  dayparting?: string;
  is_hfss?: boolean;
  is_lhf_compliance?: boolean;
  placement_type?: "PLACEMENT_TYPE_AUTOMATIC" | "PLACEMENT_TYPE_NORMAL" | "PLACEMENT_TIKTOK";
  placements?: ("PLACEMENT_TIKTOK" | "PLACEMENT_PANGLE" | "PLACEMENT_GLOBAL_APP_BUNDLE" | "TRAFFIC_LANDING_PAGE_VIEW")[];
  tiktok_subplacements?: ("LEMON8" | "PINE_DRAMA")[];
  comment_disabled?: boolean;
  share_disabled?: boolean;
  video_download_disabled?: boolean;
}


export interface SmartPlusAdgroupCreateResponse {
  advertiser_id?: string;
  campaign_id?: string;
  campaign_name?: string;
  adgroup_id?: string;
  adgroup_name?: string;
  catalog_id?: string;
  catalog_authorized_bc_id?: string;
  promotion_type?: string;
  app_id?: string;
  gaming_ad_compliance_agreement?: "ON" | "OFF";
  promotion_website_type?: string;
  promotion_target_type?: "INSTANT_PAGE" | "EXTERNAL_WEBSITE";
  optimization_goal?: string;
  pixel_id?: string;
  app_config?: {
  app_id?: string;
}[];
  minis_id?: string;
  optimization_event?: string;
  custom_conversion_id?: string;
  deep_funnel_optimization_status?: "ON" | "OFF";
  deep_funnel_event_source?: "PIXEL" | "OFFLINE" | "CRM";
  deep_funnel_event_source_id?: string;
  deep_funnel_optimization_event?: string;
  app_attribution_source?: "MMP" | "SAN";
  app_data_source?: "MMP" | "EVENT_SDK" | "EVENT_API";
  identity_id?: string;
  identity_type?: "TT_USER" | "BC_AUTH_TT";
  identity_authorized_bc_id?: string;
  native_series_id?: string;
  messaging_app_type?: "MESSENGER" | "WHATSAPP" | "ZALO" | "LINE" | "IM_URL";
  zalo_id_type?: "ZALO_OFFICIAL_ACCOUNT" | "ZALO_PHONE_ACCOUNT";
  messaging_app_account_id?: string;
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
  budget_auto_adjust_strategy?: string;
  budget?: number;
  current_budget?: number;
  min_budget?: number;
  schedule_type?: "SCHEDULE_FROM_NOW" | "SCHEDULE_START_END";
  schedule_start_time?: string;
  schedule_end_time?: string;
  movie_premiere_date?: string;
  dayparting?: string;
  targeting_optimization_mode?: string;
  suggestion_audience_enabled?: boolean;
  targeting_spec?: {
  app_targeting_type?: "PROSPECT" | "RETARGETING";
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
  included_pangle_audience_package_ids?: string[];
  excluded_pangle_audience_package_ids?: string[];
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
  smart_audience_enabled?: boolean;
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
  is_hfss?: boolean;
  is_lhf_compliance?: boolean;
  placement_type?: ("PLACEMENT_TYPE_AUTOMATIC" | "PLACEMENT_TYPE_NORMAL")[];
  placements?: ("PLACEMENT_TIKTOK" | "PLACEMENT_PANGLE" | "PLACEMENT_GLOBAL_APP_BUNDLE")[];
  tiktok_subplacements?: ("LEMON8" | "PINE_DRAMA")[];
  search_result_enabled?: boolean;
  comment_disabled?: boolean;
  share_disabled?: boolean;
  video_download_disabled?: boolean;
  skip_learning_phase?: boolean;
  create_time?: string;
  modify_time?: string;
}


export interface SmartPlusAdgroupUpdateParams {
  advertiser_id: string;
  adgroup_id: string;
  adgroup_name?: string;
  bid_price?: number;
  conversion_bid_price?: number;
  roas_bid?: number;
  comment_disabled?: boolean;
  share_disabled?: boolean;
  schedule_type?: "SCHEDULE_FROM_NOW" | "SCHEDULE_START_END" | "BUDGET_MODE_TOTAL";
  schedule_start_time?: string;
  schedule_end_time?: string;
  dayparting?: string;
  is_hfss?: boolean;
  is_lhf_compliance?: boolean;
  targeting_optimization_mode?: string;
  suggestion_audience_enabled?: boolean;
  targeting_spec?: {
  location_ids?: string[];
  zipcode_ids?: string[];
  spc_audience_age?: "ALL" | "OVER_EIGHTEEN" | "OVER_TWENTY_FIVE" | "MULTIPLE";
  languages?: string[];
  operating_systems?: ("ANDROID" | "IOS")[];
  excluded_audience_ids?: string[];
  age_groups?: ("AGE_13_17" | "AGE_18_24" | "AGE_25_34" | "AGE_35_44" | "AGE_45_54" | "AGE_55_100" | "APP_PROMOTION" | "APP_INSTALL" | "APP_RETARGETING")[];
  gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  audience_ids?: string[];
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
  smart_audience_enabled?: boolean;
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
};
  budget_auto_adjust_strategy?: string;
  budget?: number;
}


export interface SmartPlusAdgroupUpdateResponse {
  advertiser_id?: string;
  campaign_id?: string;
  campaign_name?: string;
  adgroup_id?: string;
  adgroup_name?: string;
  catalog_id?: string;
  catalog_authorized_bc_id?: string;
  promotion_type?: string;
  app_id?: string;
  gaming_ad_compliance_agreement?: "ON" | "OFF";
  promotion_website_type?: string;
  promotion_target_type?: "INSTANT_PAGE" | "EXTERNAL_WEBSITE";
  optimization_goal?: string;
  pixel_id?: string;
  app_config?: {
  app_id?: string;
}[];
  minis_id?: string;
  optimization_event?: string;
  custom_conversion_id?: string;
  deep_funnel_optimization_status?: "ON" | "OFF";
  deep_funnel_event_source?: "PIXEL" | "OFFLINE" | "CRM";
  deep_funnel_event_source_id?: string;
  deep_funnel_optimization_event?: string;
  app_attribution_source?: "MMP" | "SAN";
  app_data_source?: "MMP" | "EVENT_SDK" | "EVENT_API";
  identity_id?: string;
  identity_type?: "TT_USER" | "BC_AUTH_TT";
  identity_authorized_bc_id?: string;
  native_series_id?: string;
  messaging_app_type?: "MESSENGER" | "WHATSAPP" | "ZALO" | "LINE" | "IM_URL";
  zalo_id_type?: "ZALO_OFFICIAL_ACCOUNT" | "ZALO_PHONE_ACCOUNT";
  messaging_app_account_id?: string;
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
  budget_auto_adjust_strategy?: string;
  budget?: number;
  current_budget?: number;
  min_budget?: number;
  schedule_type?: "SCHEDULE_FROM_NOW" | "SCHEDULE_START_END";
  schedule_start_time?: string;
  schedule_end_time?: string;
  movie_premiere_date?: string;
  dayparting?: string;
  targeting_optimization_mode?: string;
  suggestion_audience_enabled?: boolean;
  targeting_spec?: {
  app_targeting_type?: "PROSPECT" | "RETARGETING";
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
  included_pangle_audience_package_ids?: string[];
  excluded_pangle_audience_package_ids?: string[];
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
  smart_audience_enabled?: boolean;
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
  is_hfss?: boolean;
  is_lhf_compliance?: boolean;
  placement_type?: ("PLACEMENT_TYPE_AUTOMATIC" | "PLACEMENT_TYPE_NORMAL")[];
  placements?: ("PLACEMENT_TIKTOK" | "PLACEMENT_PANGLE" | "PLACEMENT_GLOBAL_APP_BUNDLE")[];
  tiktok_subplacements?: ("LEMON8" | "PINE_DRAMA")[];
  search_result_enabled?: boolean;
  comment_disabled?: boolean;
  share_disabled?: boolean;
  video_download_disabled?: boolean;
  skip_learning_phase?: boolean;
  create_time?: string;
  modify_time?: string;
}


export interface SmartPlusAdgroupStatusUpdateParams {
  advertiser_id: string;
  adgroup_ids: string[];
  operation_status: "DISABLE" | "ENABLE" | "DELETE";
}


export interface SmartPlusAdgroupStatusUpdateResponse {
  adgroup_list?: {
  adgroup_id?: string;
  status?: "DISABLE" | "ENABLE" | "DELETE";
}[];
  error_list?: {
  adgroup_id?: string;
  error_message?: string;
}[];
}


export interface SmartPlusAdgroupBudgetUpdateParams {
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


export interface SmartPlusAdgroupBudgetUpdateResponse {}


export interface SmartPlusAdGetParams {
  advertiser_id: string;
  fields?: string[];
  filtering?: {
  campaign_ids?: string[];
  adgroup_ids?: string[];
  smart_plus_ad_ids?: string[];
  primary_status?: string;
  secondary_status?: string;
  objective_type?: string;
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
  list?: {
  advertiser_id?: string;
  campaign_id?: string;
  campaign_name?: string;
  adgroup_id?: string;
  adgroup_name?: string;
  smart_plus_ad_id?: string;
  ad_name?: string;
  operation_status?: "ENABLE" | "DISABLE" | "FROZEN";
  secondary_status?: string;
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
  playable_list?: {
  playable_url?: string;
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
  identity_type?: string;
  identity_id?: string;
  identity_authorized_bc_id?: string;
  dark_post_status?: "ON" | "OFF";
  product_specific_type?: "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS" | "UNSET";
  product_set_id?: string;
  product_ids?: string[];
  catalog_creative_toggle?: boolean;
  catalog_creative_info?: {
  catalog_media_settings?: string[];
  catalog_template_video_id?: string;
};
  creative_auto_add_toggle?: boolean;
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
  catalog_tag_list?: string[];
  product_card_type?: ("PRODUCT_CARD" | "PRODUCT_TILE" | "PRODUCT_INFO_CARD" | "PRODUCT_SHOWCASE_TILE" | "ANCHOR" | "CAROUSEL_LABEL")[];
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
  viewability_postbid_partner?: "DOUBLE_VERIFY" | "IAS" | "ZEFR";
  viewability_vast_url?: string;
  brand_safety_postbid_partner?: "DOUBLE_VERIFY" | "IAS" | "ZEFR";
  brand_safety_vast_url?: string;
  impression_tracking_url?: string;
  click_tracking_url?: string;
  tracking_app_id?: string;
  tracking_pixel_id?: string;
  tracking_offline_event_set_ids?: string[];
  tracking_message_event_set_id?: string;
  app_tracking_info_list?: {
  app_type?: "APP_ANDROID" | "APP_IOS";
  app_id?: string;
  impression_tracking_url?: string;
  click_tracking_url?: string;
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
}


export interface SmartPlusAdCreateParams {
  advertiser_id: string;
  adgroup_id: string;
  ad_name?: string;
  operation_status?: "ENABLE" | "DISABLE";
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
  aigc_disclosure_type?: "SELF_DISCLOSURE" | "NOT_DECLARED";
  tiktok_item_id?: string;
  identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "PLACEMENT_TYPE_NORMAL" | "PLACEMENT_TIKTOK" | "PLACEMENT_TYPE_AUTOMATIC";
  identity_id?: string;
  identity_authorized_bc_id?: string;
};
}[];
  playable_list?: {
  playable_url?: string;
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
  deeplink_type?: "DEFERRED_DEEPLINK" | "NORMAL";
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
  identity_type?: string;
  identity_id?: string;
  identity_authorized_bc_id?: string;
  dark_post_status?: "ON" | "OFF";
  product_specific_type?: "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS" | "UNSET";
  product_set_id?: string;
  product_ids?: string[];
  catalog_creative_toggle?: boolean;
  catalog_creative_info?: {
  catalog_media_settings?: string[];
  catalog_template_video_id?: string;
};
  creative_auto_add_toggle?: boolean;
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
  catalog_tag_list?: string[];
  product_card_type?: ("PRODUCT_CARD" | "PRODUCT_TILE" | "PRODUCT_INFO_CARD" | "PRODUCT_SHOWCASE_TILE" | "ANCHOR" | "CAROUSEL_LABEL")[];
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
  viewability_postbid_partner?: "DOUBLE_VERIFY" | "IAS" | "ZEFR";
  viewability_vast_url?: string;
  brand_safety_postbid_partner?: "DOUBLE_VERIFY" | "IAS" | "ZEFR";
  brand_safety_vast_url?: string;
  impression_tracking_url?: string;
  click_tracking_url?: string;
  tracking_app_id?: string;
  tracking_pixel_id?: string;
  tracking_offline_event_set_ids?: string[];
  tracking_message_event_set_id?: string;
  app_tracking_info_list?: {
  app_type?: "APP_ANDROID" | "APP_IOS";
  app_id?: string;
  impression_tracking_url?: string;
  click_tracking_url?: string;
}[];
};
};
}


export interface SmartPlusAdCreateResponse {
  advertiser_id?: string;
  campaign_id?: string;
  campaign_name?: string;
  adgroup_id?: string;
  adgroup_name?: string;
  smart_plus_ad_id?: string;
  ad_name?: string;
  operation_status?: "ENABLE" | "DISABLE" | "FROZEN";
  secondary_status?: string;
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
  playable_list?: {
  playable_url?: string;
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
  identity_type?: string;
  identity_id?: string;
  identity_authorized_bc_id?: string;
  dark_post_status?: "ON" | "OFF";
  product_specific_type?: "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS" | "UNSET";
  product_set_id?: string;
  product_ids?: string[];
  catalog_creative_toggle?: boolean;
  catalog_creative_info?: {
  catalog_media_settings?: string[];
  catalog_template_video_id?: string;
};
  creative_auto_add_toggle?: boolean;
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
  catalog_tag_list?: string[];
  product_card_type?: ("PRODUCT_CARD" | "PRODUCT_TILE" | "PRODUCT_INFO_CARD" | "PRODUCT_SHOWCASE_TILE" | "ANCHOR" | "CAROUSEL_LABEL")[];
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
  viewability_postbid_partner?: "DOUBLE_VERIFY" | "IAS" | "ZEFR";
  viewability_vast_url?: string;
  brand_safety_postbid_partner?: "DOUBLE_VERIFY" | "IAS" | "ZEFR";
  brand_safety_vast_url?: string;
  impression_tracking_url?: string;
  click_tracking_url?: string;
  tracking_app_id?: string;
  tracking_pixel_id?: string;
  tracking_offline_event_set_ids?: string[];
  tracking_message_event_set_id?: string;
  app_tracking_info_list?: {
  app_type?: "APP_ANDROID" | "APP_IOS";
  app_id?: string;
  impression_tracking_url?: string;
  click_tracking_url?: string;
}[];
};
};
}


export interface SmartPlusAdUpdateParams {
  advertiser_id: string;
  smart_plus_ad_id: string;
  ad_name?: string;
  creative_list?: {
  ad_material_id?: string;
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
  aigc_disclosure_type?: "SELF_DISCLOSURE" | "NOT_DECLARED";
  tiktok_item_id?: string;
  identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "PLACEMENT_TYPE_NORMAL" | "PLACEMENT_TIKTOK" | "PLACEMENT_TYPE_AUTOMATIC";
  identity_id?: string;
  identity_authorized_bc_id?: string;
};
}[];
  playable_list?: {
  playable_url?: string;
}[];
  ad_text_list?: {
  ad_text?: string;
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
  deeplink_type?: string;
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
  identity_type?: string;
  identity_id?: string;
  identity_authorized_bc_id?: string;
  dark_post_status?: "ON" | "OFF";
  product_specific_type?: "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS" | "UNSET";
  product_set_id?: string;
  product_ids?: string[];
  catalog_creative_toggle?: boolean;
  catalog_creative_info?: {
  catalog_media_settings?: string[];
  catalog_template_video_id?: string;
};
  creative_auto_add_toggle?: boolean;
  creative_auto_enhancement_strategy_list?: ("TRANSLATE_AND_DUB" | "MUSIC_REFRESH" | "VIDEO_QUALITY" | "IMAGE_QUALITY" | "IMAGE_RESIZE")[];
  deeplink_utm_params?: {
  key?: string;
  value?: string;
}[];
  end_card_cta?: "SEARCH_INVENTORY" | "LEARN_MORE" | "SHOP_NOW" | "SIGN_UP" | "CONTACT_US" | "BOOK_NOW" | "READ_MORE" | "VIEW_MORE" | "ORDER_NOW" | "SEND_MESSAGE";
  auto_disclaimer_types?: ("EMISSION" | "DISCOUNT")[];
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
  catalog_tag_list?: string[];
  product_card_type?: ("PRODUCT_CARD" | "PRODUCT_TILE" | "PRODUCT_INFO_CARD" | "PRODUCT_SHOWCASE_TILE" | "ANCHOR" | "CAROUSEL_LABEL")[];
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
  product_info_enabled?: "UNSET" | "NON_CATALOG" | "CATALOG" | "MINIS" | "true";
  call_to_action_id?: string;
  tracking_info?: {
  viewability_postbid_partner?: "DOUBLE_VERIFY" | "IAS" | "ZEFR";
  viewability_vast_url?: string;
  brand_safety_postbid_partner?: "DOUBLE_VERIFY" | "IAS" | "ZEFR";
  brand_safety_vast_url?: string;
  impression_tracking_url?: string;
  click_tracking_url?: string;
  tracking_app_id?: string;
  tracking_pixel_id?: string;
  tracking_offline_event_set_ids?: string[];
};
};
}


export interface SmartPlusAdUpdateResponse {
  advertiser_id?: string;
  campaign_id?: string;
  campaign_name?: string;
  adgroup_id?: string;
  adgroup_name?: string;
  smart_plus_ad_id?: string;
  ad_name?: string;
  operation_status?: "ENABLE" | "DISABLE" | "FROZEN";
  secondary_status?: string;
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
  playable_list?: {
  playable_url?: string;
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
  identity_type?: string;
  identity_id?: string;
  identity_authorized_bc_id?: string;
  dark_post_status?: "ON" | "OFF";
  product_specific_type?: "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS" | "UNSET";
  product_set_id?: string;
  product_ids?: string[];
  catalog_creative_toggle?: boolean;
  catalog_creative_info?: {
  catalog_media_settings?: string[];
  catalog_template_video_id?: string;
};
  creative_auto_add_toggle?: boolean;
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
  catalog_tag_list?: string[];
  product_card_type?: ("PRODUCT_CARD" | "PRODUCT_TILE" | "PRODUCT_INFO_CARD" | "PRODUCT_SHOWCASE_TILE" | "ANCHOR" | "CAROUSEL_LABEL")[];
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
  viewability_postbid_partner?: "DOUBLE_VERIFY" | "IAS" | "ZEFR";
  viewability_vast_url?: string;
  brand_safety_postbid_partner?: "DOUBLE_VERIFY" | "IAS" | "ZEFR";
  brand_safety_vast_url?: string;
  impression_tracking_url?: string;
  click_tracking_url?: string;
  tracking_app_id?: string;
  tracking_pixel_id?: string;
  tracking_offline_event_set_ids?: string[];
  tracking_message_event_set_id?: string;
  app_tracking_info_list?: {
  app_type?: "APP_ANDROID" | "APP_IOS";
  app_id?: string;
  impression_tracking_url?: string;
  click_tracking_url?: string;
}[];
};
};
}


export interface SmartPlusAdStatusUpdateParams {
  advertiser_id: string;
  smart_plus_ad_ids: string[];
  operation_status: "DISABLE" | "ENABLE" | "DELETE";
}


export interface SmartPlusAdStatusUpdateResponse {
  smart_plus_ad_ids?: string[];
  status?: "DISABLE" | "ENABLE" | "DELETE";
}


export interface SmartPlusAdMaterialStatusUpdateParams {
  advertiser_id: string;
  smart_plus_ad_id: string;
  ad_material_ids: string[];
  operation_status: "DISABLE" | "ENABLE";
}


export interface SmartPlusAdMaterialStatusUpdateResponse {
  smart_plus_ad_id?: string[];
  ad_material_ids?: string[];
  material_status?: "DISABLE" | "ENABLE";
}


export interface SmartPlusAdPreviewParams {
  advertiser_id: string;
  preview_type: string;
  catalog_enabled?: boolean;
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
  music_info?: {
  music_id?: string;
};
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
  call_to_action?: string;
}[];
  ad_configuration?: {
  identity_type?: string;
  identity_id?: string;
  identity_authorized_bc_id?: string;
  product_specific_type?: "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS";
  product_set_id?: string;
  product_ids?: string[];
  catalog_creative_toggle?: boolean;
  catalog_creative_info?: {
  catalog_media_settings?: string[];
  catalog_template_video_id?: string;
};
  call_to_action_id?: string;
};
}


export interface SmartPlusAdPreviewResponse {
  preview_link?: string;
  iframe?: string;
}


export interface SmartPlusAdReviewInfoParams {
  advertiser_id: string;
  smart_plus_ad_ids: string[];
  lang?: string;
  extra_info_setting?: {
  include_reject_info?: boolean;
  include_violation_frame?: boolean;
};
}


export interface SmartPlusAdReviewInfoResponse {
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
}


export interface SmartPlusMaterialReviewInfoParams {
  advertiser_id: string;
  ad_material_ids: string[];
  lang?: string;
  extra_info_setting?: {
  include_reject_info?: boolean;
  include_violation_frame?: boolean;
};
}


export interface SmartPlusMaterialReviewInfoResponse {
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
}


export interface SmartPlusAdAppealParams {
  advertiser_id: string;
  smart_plus_ad_id: string;
  appeal_reason?: string;
  attachment_list?: string[];
}


export interface SmartPlusAdAppealResponse {}
