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
  is_smart_performance_campaign?: "true" | "false";
  creative_campaign_type?: ("SPC" | "SEARCH_CAMPAIGN" | "OTHER")[];
  split_test_enabled?: "true" | "false";
  campaign_product_source?: "CATALOG" | "STORE" | "PRODUCT_SALES";
  optimization_goal?: string;
  campaign_type?: "REGULAR_CAMPAIGN" | "IOS14_CAMPAIGN";
  creation_filter_start_time?: string;
  creation_filter_end_time?: string;
  gmv_max_promotion_types?: ("PRODUCT_GMV_MAX" | "LIVE_GMV_MAX")[];
  store_ids?: ("LIVE_GMV_MAX" | "PRODUCT_GMV_MAX")[];
};
  page?: number;
  page_size?: number;
}


export interface CampaignGetResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
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
  is_search_campaign?: "true" | "false";
  campaign_automation_type?: "MANUAL" | "SMART_PLUS" | "UPGRADED_SMART_PLUS";
  is_smart_performance_campaign?: "MANUAL" | "UPGRADED_SMART_PLUS" | "true" | "false";
  campaign_type?: "REGULAR_CAMPAIGN" | "IOS14_CAMPAIGN";
  app_id?: string;
  is_advanced_dedicated_campaign?: "true" | "false";
  disable_skan_campaign?: "true" | "false";
  bid_align_type?: "SAN" | "SKAN";
  campaign_app_profile_page_state?: "INVALID" | "UNSET" | "ON" | "OFF";
  rf_campaign_type?: "RF_REACH" | "STANDARD" | "PULSE" | "TOPVIEW";
  campaign_product_source?: "PRODUCT_SALES" | "CATALOG" | "STORE";
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
  rta_bid_enabled?: "true" | "false";
  rta_product_selection_enabled?: "true" | "false";
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
};
}


export interface CampaignCreateParams {
  advertiser_id: string;
  objective_type: string;
  app_promotion_type?: "APP_PROMOTION" | "APP_INSTALL" | "APP_RETARGETING" | "APP_PREREGISTRATION";
  virtual_objective_type?: string;
  sales_destination?: "TIKTOK_SHOP" | "WEBSITE" | "APP" | "WEB_AND_APP";
  is_search_campaign?: "true" | "false";
  campaign_type?: "REGULAR_CAMPAIGN" | "IOS14_CAMPAIGN" | "PRODUCT_SALES" | "APP_PROMOTION" | "APP_INSTALL" | "APP_RETARGETING" | "APP_PREREGISTRATION";
  app_id?: "IOS14_CAMPAIGN" | "PRODUCT_SALES" | "APP_PROMOTION" | "APP_INSTALL";
  is_advanced_dedicated_campaign?: "true" | "false";
  disable_skan_campaign?: "APP_PROMOTION" | "APP_INSTALL" | "IOS14_CAMPAIGN" | "BID_TYPE_CUSTOM" | "INSTALL" | "IN_APP_EVENT" | "true" | "false";
  campaign_app_profile_page_state?: "ON" | "OFF" | "APP_PROMOTION";
  rf_campaign_type?: "RF_REACH" | "STANDARD" | "PULSE" | "PREMIUM" | "TOP_FEED";
  campaign_product_source?: "PRODUCT_SALES" | "CATALOG" | "STORE" | "SHOWCASE";
  catalog_enabled?: "PRODUCT_SALES" | "CATALOG" | "true" | "false";
  campaign_name: string;
  request_id?: string;
  special_industries?: ("HOUSING" | "EMPLOYMENT" | "CREDIT")[];
  budget_optimize_on?: boolean;
  budget_mode?: "RF_REACH" | "BUDGET_MODE_INFINITE" | "BUDGET_MODE_TOTAL" | "BUDGET_MODE_DYNAMIC_DAILY_BUDGET" | "TRAFFIC" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "LEAD_GENERATION" | "PRODUCT_SALES" | "REACH" | "VIDEO_VIEWS" | "ENGAGEMENT" | "BUDGET_MODE_DAY";
  budget?: "BUDGET_MODE_DAY" | "BUDGET_MODE_DYNAMIC_DAILY_BUDGET" | "BUDGET_MODE_TOTAL";
  rta_id?: string;
  rta_bid_enabled?: "APP_PROMOTION" | "WEB_CONVERSIONS" | "PRODUCT_SALES" | "true" | "false";
  rta_product_selection_enabled?: "PRODUCT_SALES" | "CATALOG" | "true" | "false";
  operation_status?: "ENABLE" | "DISABLE";
  postback_window_mode?: "IOS14_CAMPAIGN" | "DISABLE" | "POSTBACK_WINDOW_MODE1" | "POSTBACK_WINDOW_MODE2" | "POSTBACK_WINDOW_MODE3" | "ENABLE";
  po_number?: string;
}


export interface CampaignCreateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  advertiser_id?: string;
  campaign_id?: string;
  create_time?: string;
  modify_time?: string;
  objective_type?: string;
  app_promotion_type?: "APP_INSTALL" | "APP_RETARGETING" | "APP_PREREGISTRATION";
  virtual_objective_type?: string;
  sales_destination?: "TIKTOK_SHOP" | "WEBSITE" | "APP" | "WEB_AND_APP";
  is_search_campaign?: "true" | "false";
  is_smart_performance_campaign?: "WEB_CONVERSIONS" | "true" | "false";
  campaign_type?: "REGULAR_CAMPAIGN" | "IOS14_CAMPAIGN";
  app_id?: string;
  is_advanced_dedicated_campaign?: "true" | "false";
  disable_skan_campaign?: "true" | "false";
  bid_align_type?: "SAN" | "SKAN";
  campaign_app_profile_page_state?: "INVALID" | "UNSET" | "ON" | "OFF";
  rf_campaign_type?: "RF_REACH" | "STANDARD" | "PULSE";
  campaign_product_source?: "PRODUCT_SALES" | "CATALOG" | "STORE";
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
  rta_bid_enabled?: "true" | "false";
  rta_product_selection_enabled?: "true" | "false";
  operation_status?: "ENABLE" | "DISABLE";
  secondary_status?: string;
  postback_window_mode?: "POSTBACK_WINDOW_MODE1" | "POSTBACK_WINDOW_MODE2" | "POSTBACK_WINDOW_MODE3";
  is_new_structure?: boolean;
  objective?: "APP" | "LANDING_PAGE";
  po_number?: string;
};
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
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  advertiser_id?: string;
  campaign_id?: string;
  create_time?: string;
  modify_time?: string;
  objective_type?: string;
  app_promotion_type?: "APP_INSTALL" | "APP_RETARGETING" | "APP_PREREGISTRATION" | "APP_POSTS_PROMOTION";
  virtual_objective_type?: string;
  sales_destination?: "TIKTOK_SHOP" | "WEBSITE" | "APP" | "WEB_AND_APP";
  is_search_campaign?: "true" | "false";
  is_smart_performance_campaign?: "WEB_CONVERSIONS" | "true" | "false";
  campaign_type?: "REGULAR_CAMPAIGN" | "IOS14_CAMPAIGN";
  app_id?: string;
  is_advanced_dedicated_campaign?: "true" | "false";
  disable_skan_campaign?: "true" | "false";
  bid_align_type?: "SAN" | "SKAN";
  campaign_app_profile_page_state?: "INVALID" | "UNSET" | "ON" | "OFF";
  rf_campaign_type?: "RF_REACH" | "STANDARD" | "PULSE";
  campaign_product_source?: "PRODUCT_SALES" | "CATALOG" | "STORE";
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
  rta_bid_enabled?: "true" | "false";
  rta_product_selection_enabled?: "true" | "false";
  operation_status?: "ENABLE" | "DISABLE";
  secondary_status?: string;
  postback_window_mode?: "POSTBACK_WINDOW_MODE1" | "POSTBACK_WINDOW_MODE2" | "POSTBACK_WINDOW_MODE3";
  is_new_structure?: boolean;
  objective?: "APP" | "LANDING_PAGE";
  po_number?: string;
};
}


export interface CampaignStatusUpdateParams {
  advertiser_id: string;
  campaign_ids: string[];
  operation_status: string;
  postback_window_mode?: string;
}


export interface CampaignStatusUpdateResponse {
  code?: number;
  message?: string;
  data?: {
  campaign_ids?: string[];
  status?: "DELETE" | "DISABLE" | "ENABLE";
  campaign_list?: {
  campaign_id?: string;
  status?: "DELETE" | "DISABLE" | "ENABLE";
  postback_window_mode?: "POSTBACK_WINDOW_MODE1" | "POSTBACK_WINDOW_MODE2" | "POSTBACK_WINDOW_MODE3";
}[];
};
  request_id?: string;
}


export interface CampaignQuotaInfoParams {
  advertiser_id: string;
  app_id: string;
  campaign_id?: string;
  adgroup_id?: string;
  has_advertiser_quota?: "true" | "false";
}


export interface CampaignQuotaInfoResponse {
  code?: number;
  message?: string;
  data?: {
  split_test_quota?: {
  max_test_number?: number;
  available_test_group?: number;
  used_test_group?: number;
  releasing_test_group?: number;
  used_quota?: number;
  releasing_quota?: number;
};
  campaign_quota_info?: {
  tiktok_campaign_quota_info?: "PLACEMENT_TIKTOK" | "PLACEMENT_GLOBAL_APP_BUNDLE";
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
};
  request_id?: string;
}


export interface CampaignCopyTaskCreateParams {}


export interface CampaignCopyTaskCreateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  task_id?: string;
  adgroup_error_list?: {
  adgroup_id?: string;
  error_message?: string;
}[];
};
}


export interface CampaignCopyTaskCheckParams {}


export interface CampaignCopyTaskCheckResponse {}


export interface CampaignQuotaGetParams {
  advertiser_id: string;
  app_id: string;
  campaign_id?: string;
}


export interface CampaignQuotaGetResponse {
  code?: number;
  message?: string;
  data?: {
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
};
  request_id?: string;
}

