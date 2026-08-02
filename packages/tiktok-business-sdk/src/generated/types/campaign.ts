// Auto-generated types for Campaign — do not edit

export interface CampaignGetParams {
  advertiser_id: string;
  fields?: string[];
  exclude_field_types_in_response?: string[];
  filtering?: {
  campaign_automation_type?: "MANUAL" | "SMART_PLUS" | "UPGRADED_SMART_PLUS";
  campaign_ids?: string[];
  campaign_name?: string;
  campaign_system_origins?: ("PROMOTE" | "TT_ADS_PLATFORM")[];
  primary_status?: string;
  secondary_status?: string;
  objective_type?: string;
  sales_destination?: "TIKTOK_SHOP" | "WEBSITE" | "APP" | "WEB_AND_APP";
  buying_types?: ("AUCTION" | "RESERVATION_RF" | "RESERVATION_TOP_VIEW")[];
  is_smart_performance_campaign?: boolean;
  creative_campaign_type?: ("SPC" | "SEARCH_CAMPAIGN" | "OTHER")[];
  split_test_enabled?: boolean;
  campaign_product_source?: "CATALOG" | "STORE" | "PRODUCT_SALES";
  optimization_goal?: string;
  campaign_type?: "REGULAR_CAMPAIGN" | "IOS14_CAMPAIGN";
  creation_filter_start_time?: string;
  creation_filter_end_time?: string;
  gmv_max_promotion_types?: ("PRODUCT_GMV_MAX" | "LIVE_GMV_MAX")[];
  store_ids?: string[];
};
  page?: number;
  page_size?: number;
}


export interface CampaignGetResponse {
  list?: {
  advertiser_id?: string;
  campaign_id?: string;
  campaign_system_origin?: string;
  create_time?: string;
  modify_time?: string;
  objective_type?: string;
  app_promotion_type?: "APP_INSTALL" | "APP_RETARGETING" | "APP_PREREGISTRATION" | "APP_POSTS_PROMOTION";
  virtual_objective_type?: string;
  sales_destination?: "TIKTOK_SHOP" | "WEBSITE" | "APP" | "WEB_AND_APP";
  is_search_campaign?: boolean;
  campaign_automation_type?: "MANUAL" | "SMART_PLUS" | "UPGRADED_SMART_PLUS";
  is_smart_performance_campaign?: boolean;
  campaign_type?: "REGULAR_CAMPAIGN" | "IOS14_CAMPAIGN";
  app_id?: string;
  is_advanced_dedicated_campaign?: boolean;
  disable_skan_campaign?: boolean;
  bid_align_type?: "SAN" | "SKAN";
  campaign_app_profile_page_state?: "INVALID" | "UNSET" | "ON" | "OFF";
  rf_campaign_type?: "STANDARD" | "PULSE" | "TOPVIEW";
  campaign_product_source?: "CATALOG" | "STORE";
  catalog_enabled?: boolean;
  campaign_name?: string;
  special_industries?: ("HOUSING" | "EMPLOYMENT" | "CREDIT")[];
  budget_optimize_on?: boolean;
  bid_type?: string;
  deep_bid_type?: string;
  roas_bid?: number;
  optimization_goal?: string;
  budget_mode?: "BUDGET_MODE_INFINITE" | "BUDGET_MODE_TOTAL" | "BUDGET_MODE_DAY" | "BUDGET_MODE_DYNAMIC_DAILY_BUDGET";
  budget?: number;
  rta_id?: string;
  rta_bid_enabled?: boolean;
  rta_product_selection_enabled?: boolean;
  operation_status?: "ENABLE" | "DISABLE";
  secondary_status?: string;
  postback_window_mode?: "POSTBACK_WINDOW_MODE1" | "POSTBACK_WINDOW_MODE2" | "POSTBACK_WINDOW_MODE3";
  is_new_structure?: boolean;
  objective?: "APP" | "LANDING_PAGE";
  po_number?: string;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface CampaignCreateParams {
  advertiser_id: string;
  objective_type: string;
  app_promotion_type?: "APP_INSTALL" | "APP_RETARGETING" | "APP_PREREGISTRATION";
  virtual_objective_type?: string;
  sales_destination?: "TIKTOK_SHOP" | "WEBSITE" | "APP" | "WEB_AND_APP";
  is_search_campaign?: boolean;
  campaign_type?: string;
  app_id?: string;
  is_advanced_dedicated_campaign?: boolean;
  disable_skan_campaign?: boolean;
  campaign_app_profile_page_state?: "ON" | "OFF";
  rf_campaign_type?: "STANDARD" | "PULSE" | "PREMIUM" | "TOP_FEED";
  campaign_product_source?: "CATALOG" | "STORE" | "PRODUCT_SALES" | "SHOWCASE";
  catalog_enabled?: boolean;
  campaign_name: string;
  request_id?: string;
  special_industries?: ("HOUSING" | "EMPLOYMENT" | "CREDIT")[];
  budget_optimize_on?: boolean;
  budget_mode?: "BUDGET_MODE_TOTAL" | "BUDGET_MODE_DYNAMIC_DAILY_BUDGET";
  budget?: number;
  rta_id?: string;
  rta_bid_enabled?: boolean;
  rta_product_selection_enabled?: boolean;
  operation_status?: "ENABLE" | "DISABLE";
  postback_window_mode?: "POSTBACK_WINDOW_MODE1" | "POSTBACK_WINDOW_MODE2" | "POSTBACK_WINDOW_MODE3" | "ENABLE";
  po_number?: string;
}


export interface CampaignCreateResponse {
  advertiser_id?: string;
  campaign_id?: string;
  create_time?: string;
  modify_time?: string;
  objective_type?: string;
  app_promotion_type?: "APP_INSTALL" | "APP_RETARGETING" | "APP_PREREGISTRATION";
  virtual_objective_type?: string;
  sales_destination?: "TIKTOK_SHOP" | "WEBSITE" | "APP" | "WEB_AND_APP";
  is_search_campaign?: boolean;
  is_smart_performance_campaign?: boolean;
  campaign_type?: "REGULAR_CAMPAIGN" | "IOS14_CAMPAIGN";
  app_id?: string;
  is_advanced_dedicated_campaign?: boolean;
  disable_skan_campaign?: boolean;
  bid_align_type?: "SAN" | "SKAN";
  campaign_app_profile_page_state?: "INVALID" | "UNSET" | "ON" | "OFF";
  rf_campaign_type?: "STANDARD" | "PULSE";
  campaign_product_source?: "CATALOG" | "STORE";
  catalog_enabled?: boolean;
  campaign_name?: string;
  special_industries?: ("HOUSING" | "EMPLOYMENT" | "CREDIT")[];
  budget_optimize_on?: boolean;
  bid_type?: string;
  deep_bid_type?: string;
  roas_bid?: number;
  optimization_goal?: string;
  budget_mode?: "BUDGET_MODE_INFINITE" | "BUDGET_MODE_TOTAL" | "BUDGET_MODE_DAY" | "BUDGET_MODE_DYNAMIC_DAILY_BUDGET";
  budget?: number;
  rta_id?: string;
  rta_bid_enabled?: boolean;
  rta_product_selection_enabled?: boolean;
  operation_status?: "ENABLE" | "DISABLE";
  secondary_status?: string;
  postback_window_mode?: "POSTBACK_WINDOW_MODE1" | "POSTBACK_WINDOW_MODE2" | "POSTBACK_WINDOW_MODE3";
  is_new_structure?: boolean;
  objective?: "APP" | "LANDING_PAGE";
  po_number?: string;
}


export interface CampaignUpdateParams {
  advertiser_id: string;
  campaign_id: string;
  campaign_name?: string;
  special_industries?: ("HOUSING" | "EMPLOYMENT" | "CREDIT")[];
  budget?: number;
  po_number?: string;
}


export interface CampaignUpdateResponse {
  advertiser_id?: string;
  campaign_id?: string;
  create_time?: string;
  modify_time?: string;
  objective_type?: string;
  app_promotion_type?: "APP_INSTALL" | "APP_RETARGETING" | "APP_PREREGISTRATION" | "APP_POSTS_PROMOTION";
  virtual_objective_type?: string;
  sales_destination?: "TIKTOK_SHOP" | "WEBSITE" | "APP" | "WEB_AND_APP";
  is_search_campaign?: boolean;
  is_smart_performance_campaign?: boolean;
  campaign_type?: "REGULAR_CAMPAIGN" | "IOS14_CAMPAIGN";
  app_id?: string;
  is_advanced_dedicated_campaign?: boolean;
  disable_skan_campaign?: boolean;
  bid_align_type?: "SAN" | "SKAN";
  campaign_app_profile_page_state?: "INVALID" | "UNSET" | "ON" | "OFF";
  rf_campaign_type?: "STANDARD" | "PULSE";
  campaign_product_source?: "CATALOG" | "STORE";
  catalog_enabled?: boolean;
  campaign_name?: string;
  special_industries?: ("HOUSING" | "EMPLOYMENT" | "CREDIT")[];
  budget_optimize_on?: boolean;
  bid_type?: string;
  deep_bid_type?: string;
  roas_bid?: number;
  optimization_goal?: string;
  budget_mode?: "BUDGET_MODE_INFINITE" | "BUDGET_MODE_TOTAL" | "BUDGET_MODE_DAY" | "BUDGET_MODE_DYNAMIC_DAILY_BUDGET";
  budget?: number;
  rta_id?: string;
  rta_bid_enabled?: boolean;
  rta_product_selection_enabled?: boolean;
  operation_status?: "ENABLE" | "DISABLE";
  secondary_status?: string;
  postback_window_mode?: "POSTBACK_WINDOW_MODE1" | "POSTBACK_WINDOW_MODE2" | "POSTBACK_WINDOW_MODE3";
  is_new_structure?: boolean;
  objective?: "APP" | "LANDING_PAGE";
  po_number?: string;
}


export interface CampaignStatusUpdateParams {
  advertiser_id: string;
  campaign_ids: string[];
  operation_status: string;
  postback_window_mode?: string;
}


export interface CampaignStatusUpdateResponse {
  campaign_ids?: string[];
  status?: string;
  campaign_list?: {
  campaign_id?: string;
  status?: "DELETE" | "DISABLE" | "ENABLE";
  postback_window_mode?: "POSTBACK_WINDOW_MODE1" | "POSTBACK_WINDOW_MODE2" | "POSTBACK_WINDOW_MODE3";
}[];
}


export interface CampaignQuotaInfoParams {
  advertiser_id: string;
  app_id: string;
  campaign_id?: string;
  adgroup_id?: string;
  has_advertiser_quota?: boolean;
}


export interface CampaignQuotaInfoResponse {
  split_test_quota?: {
  max_test_number?: number;
  available_test_group?: number;
  used_test_group?: number;
  releasing_test_group?: number;
  used_quota?: number;
  releasing_quota?: number;
};
  campaign_quota_info?: {
  tiktok_campaign_quota_info?: {
  total_campaign_quota_info?: {
  total_campaign_quota?: number;
  used_campaign_quota?: number;
  releasing_campaign_quota?: number;
  available_campaign_quota?: number;
  used_campaign_ids?: string[];
  releasing_campaign_ids?: string[];
};
  campaign_quota_by_adv?: {
  used_campaign_quota?: number;
  releasing_campaign_quota?: number;
  advertiser_id?: string;
}[];
};
  pangle_campaign_quota_info?: {
  total_campaign_quota_info?: {
  total_campaign_quota?: number;
  used_campaign_quota?: number;
  releasing_campaign_quota?: number;
  available_campaign_quota?: number;
  used_campaign_ids?: string[];
  releasing_campaign_ids?: string[];
};
  campaign_quota_by_adv?: {
  used_campaign_quota?: number;
  releasing_campaign_quota?: number;
  advertiser_id?: string;
}[];
};
};
  adgroup_quota_info?: {
  total_adgroup_quota?: number;
  used_adgroup_quota?: number;
  available_adgroup_quota?: number;
  placements?: string[];
  campaign_id?: string;
};
  ad_quota_info?: {
  total_ad_quota?: number;
  used_ad_quota?: number;
  available_ad_quota?: number;
  adgroup_id?: string;
};
}


export interface CampaignCopyTaskCreateParams {
  advertiser_id: string;
  campaign_id: string;
  request_id: string;
  operation_status?: "ENABLE" | "DISABLE";
  virtual_objective_type?: string;
  sales_destination?: "TIKTOK_SHOP" | "WEBSITE" | "APP";
  campaign_name?: string;
  is_advanced_dedicated_campaign?: boolean;
  budget?: number;
  rta_id?: string;
  po_number?: string;
  schedule_type?: "SCHEDULE_START_END" | "SCHEDULE_FROM_NOW";
  schedule_start_time?: string;
  schedule_end_time?: string;
  deep_copy_mode?: "DEFAULT" | "CUSTOM";
  adgroup_list?: {
  adgroup_id?: string;
  operation_status?: "ENABLE" | "DISABLE";
  adgroup_name?: string;
  automated_keywords_enabled?: boolean;
  location_ids?: string[];
  zipcode_ids?: string[];
  audience_ids?: string[];
  excluded_audience_ids?: string[];
  age_groups?: string[];
  budget?: number;
  schedule_type?: "SCHEDULE_START_END" | "SCHEDULE_FROM_NOW";
  schedule_start_time?: string;
  schedule_end_time?: string;
  ad_list?: {
  ad_id?: string;
  operation_status?: "ENABLE" | "DISABLE";
  ad_name?: string;
  identity_type?: "CUSTOMIZED_USER" | "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  identity_id?: string;
  identity_authorized_bc_id?: string;
  ad_format?: "SINGLE_VIDEO" | "SINGLE_IMAGE" | "CAROUSEL_ADS";
  video_id?: string;
  image_ids?: string[];
  music_id?: string;
  tiktok_item_id?: string;
  ad_text?: string;
  aigc_disclosure_type?: "SELF_DISCLOSURE" | "NOT_DECLARED";
  creative_auto_enhancement_strategy_list?: ("VIDEO_QUALITY" | "MUSIC_REFRESH" | "IMAGE_QUALITY" | "IMAGE_RESIZE")[];
  tracking_pixel_id?: string;
  tracking_app_id?: string;
}[];
  smart_creative_info?: {
  media_info_list?: {
  media_info?: {
  image_info?: {
  web_uri?: string;
  file_name?: string;
}[];
  video_info?: {
  video_id?: string;
  file_name?: string;
};
  aigc_disclosure_type?: "SELF_DISCLOSURE" | "NOT_DECLARED";
  tiktok_item_id?: string;
  identity_id?: string;
  identity_type?: "AUTH_CODE" | "TT_USER";
};
}[];
  title_list?: {
  title?: string;
}[];
  call_to_action_list?: {
  call_to_action?: string;
}[];
  deeplink_list?: {
  deeplink?: string;
  deeplink_type?: "NORMAL" | "DEFERRED_DEEPLINK";
}[];
  display_name_list?: {
  app_name?: string;
  landing_page_name?: string;
}[];
  page_list?: {
  page_id?: string;
}[];
  card_list?: {
  card_id?: string;
}[];
  landing_page_urls?: {
  landing_page_url?: string;
}[];
  common_material?: {
  identity_id?: string;
  identity_type?: string;
  ad_name?: string;
  call_to_action_id?: string;
  creative_authorized?: string;
  playable_url?: string;
  fallback_type?: "APP_INSTALL" | "WEBSITE";
  tracking_info?: {
  impression_tracking_urls?: string[];
  click_tracking_urls?: string[];
  tracking_pixel_id?: string;
  tracking_app_id?: string;
  tracking_offline_event_set_ids?: string[];
};
};
};
}[];
}


export interface CampaignCopyTaskCreateResponse {
  task_id?: string;
  adgroup_error_list?: {
  adgroup_id?: string;
  error_message?: string;
}[];
}


export interface CampaignCopyTaskCheckParams {
  advertiser_id: string;
  task_id: string;
}


export interface CampaignCopyTaskCheckResponse {
  task_status?: "RUNNING" | "SUCCESS" | "FAILURE";
  task_info?: {
  total_ad_count?: number;
  success_ad_count?: number;
  total_smart_creative_adgroup_count?: number;
  success_smart_creative_adgroup_count?: number;
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
  is_smart_creative?: boolean;
  smart_creative_result?: {
  is_success?: boolean;
  smart_creative_error_list?: string[];
};
  ad_result_list?: {
  is_success?: boolean;
  ad_id?: string;
  ad_name?: string;
  ad_error_list?: string[];
}[];
}[];
};
}


export interface CampaignQuotaGetParams {
  advertiser_id: string;
  app_id: string;
  campaign_id?: string;
}


export interface CampaignQuotaGetResponse {
  campaign_quota?: {
  used_quota?: number;
  releasing_quota?: number;
  available_quota?: number;
  total_quota?: number;
};
  adgroup_quota?: {
  campaign_id?: number;
  used_quota?: number;
  available_quota?: number;
  total_quota?: number;
};
  split_test_quota?: {
  max_test_number?: number;
  available_test_group?: number;
  used_test_group?: number;
  releasing_test_group?: number;
  used_quota?: number;
  releasing_quota?: number;
};
}
