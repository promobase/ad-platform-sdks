// Auto-generated types for (To be deprecated) Legacy Smart+ — do not edit

export interface CampaignSpcQuotaGetParams {}


export interface CampaignSpcQuotaGetResponse {}


export interface CampaignSpcCreateParams {
  advertiser_id: string;
  operation_status?: "ENABLE" | "DISABLE";
  objective_type: "APP_PROMOTION" | "WEB_CONVERSIONS" | "LEAD_GENERATION";
  spc_type?: "WEB_CONVERSIONS" | "WEB_ALL_IN_ONE" | "UNSET";
  web_all_in_one_catalog_status?: "WEB_ALL_IN_ONE" | "OPEN" | "UNSET";
  app_promotion_type?: "APP_PROMOTION" | "APP_INSTALL";
  virtual_objective_type?: string;
  sales_destination?: "WEBSITE" | "WEB_AND_APP" | "OPEN";
  campaign_type?: "REGULAR_CAMPAIGN" | "IOS14_CAMPAIGN";
  campaign_app_profile_page_state?: "ON" | "OFF" | "APP_PROMOTION";
  is_advanced_dedicated_campaign?: "true" | "false";
  disable_skan_campaign?: "APP_PROMOTION" | "APP_INSTALL" | "IOS14_CAMPAIGN" | "BID_TYPE_CUSTOM" | "INSTALL" | "IN_APP_EVENT" | "true" | "false";
  campaign_name: string;
  special_industries?: ("HOUSING" | "EMPLOYMENT" | "CREDIT")[];
  product_source?: "OPEN" | "CATALOG";
  catalog_id?: string;
  catalog_authorized_bc_id?: string;
  product_specific_type?: "OPEN" | "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS";
  product_set_id?: string;
  product_ids?: string[];
  promotion_type: "APP_ANDROID" | "APP_IOS" | "WEBSITE" | "LEAD_GENERATION" | "APP_PROMOTION" | "WEB_CONVERSIONS";
  app_id?: "APP_PROMOTION" | "APP_INSTALL";
  promotion_website_type?: "WEB_CONVERSIONS" | "UNSET" | "TIKTOK_NATIVE_PAGE";
  promotion_target_type?: "LEAD_GENERATION" | "INSTANT_PAGE" | "EXTERNAL_WEBSITE";
  optimization_goal: "CLICK" | "INSTALL" | "IN_APP_EVENT" | "VALUE" | "CONVERT" | "TRAFFIC_LANDING_PAGE_VIEW" | "LEAD_GENERATION";
  pixel_id?: "CONVERT" | "VALUE";
  optimization_event?: "IN_APP_EVENT" | "VALUE";
  app_config?: {
  app_id?: string;
}[];
  deep_funnel_optimization_status?: "LEAD_GENERATION" | "ON" | "OFF";
  deep_funnel_event_source?: "ON" | "PIXEL" | "OFFLINE" | "CRM";
  deep_funnel_event_source_id?: "ON" | "PIXEL" | "OFFLINE" | "CRM";
  deep_funnel_optimization_event?: "ON" | "SHOPPING";
  bid_type?: "BID_TYPE_NO_BID" | "BID_TYPE_CUSTOM";
  bid_price?: "WEB_ALL_IN_ONE" | "CLICK" | "BID_TYPE_CUSTOM";
  conversion_bid_price?: "WEB_ALL_IN_ONE" | "CONVERT" | "TRAFFIC_LANDING_PAGE_VIEW" | "BID_TYPE_CUSTOM";
  deep_bid_type?: "DEFAULT" | "AEO" | "VO_MIN_ROAS" | "VO_HIGHEST_VALUE";
  roas_bid?: number;
  vbo_window?: "SEVEN_DAYS" | "ZERO_DAY";
  click_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS";
  engaged_view_attribution_window?: "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS";
  view_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS";
  attribution_event_count?: "UNSET" | "EVERY" | "ONCE";
  billing_event: "OCPM" | "CPC";
  location_ids: string[];
  languages?: string[];
  gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  spc_audience_age?: string;
  exclude_age_under_eighteen?: boolean;
  excluded_audience_ids?: string[];
  placement_type?: "PLACEMENT_TYPE_NORMAL" | "PLACEMENT_TYPE_AUTOMATIC" | "APP_ANDROID" | "APP_IOS" | "LEAD_GENERATION";
  placements?: ("PLACEMENT_TIKTOK" | "APP_ANDROID" | "PLACEMENT_TYPE_AUTOMATIC" | "APP_IOS" | "PLACEMENT_TYPE_NORMAL" | "LEAD_GENERATION")[];
  comment_disabled?: boolean;
  share_disabled?: "true" | "false";
  video_download_disabled?: boolean;
  blocked_pangle_app_ids?: string[];
  budget_mode?: "BUDGET_MODE_DYNAMIC_DAILY_BUDGET" | "BUDGET_MODE_DAY";
  budget_auto_adjust_strategy?: "BUDGET_MODE_DYNAMIC_DAILY_BUDGET" | "AUTO_BUDGET_INCREASE";
  budget: "UNSET" | "AUTO_BUDGET_INCREASE";
  schedule_type: "SCHEDULE_START_END" | "SCHEDULE_FROM_NOW";
  schedule_start_time: string;
  schedule_end_time?: string;
  dayparting?: string;
  identity_type?: string;
  identity_id?: string;
  media_info_list: {
  media_info: {
  video_info?: {
  video_id?: string;
  file_name?: string;
};
  image_info?: {
  web_uri?: string;
}[];
  music_info?: {
  music_id?: "CAROUSEL_ADS" | "UPLOAD_BY_FILE_ID" | "CATALOG_CAROUSEL";
};
  aigc_disclosure_type?: "CUSTOMIZED_USER" | "SELF_DISCLOSURE" | "NOT_DECLARED";
  tiktok_item_id?: string;
  identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "APP_PROMOTION" | "WEB_CONVERSIONS";
  identity_id?: string;
  identity_authorized_bc_id?: string;
};
}[];
  dark_post_status?: "ON" | "OFF";
  catalog_creative_toggle?: "OPEN" | "true" | "false";
  title_list?: {
  title?: string;
}[];
  call_to_action_id?: "LEAD_GENERATION" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "TT_USER" | "BC_AUTH_TT" | "AUTH_CODE";
  call_to_action_list?: ("LEAD_GENERATION" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "TT_USER" | "BC_AUTH_TT" | "AUTH_CODE")[];
  product_info?: {
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
  card_list?: {
  card_id?: string;
}[];
  automatic_add_on_enabled?: "OPEN" | "true" | "false";
  page_list?: {
  page_id?: string;
}[];
  deeplink?: string;
  deeplink_type?: string;
  landing_page_urls?: ("WEB_CONVERSIONS" | "WEBSITE" | "UNSET")[];
  utm_params?: {
  key?: string;
  value?: string;
}[];
  disclaimer_info?: {
  disclaimer_type?: "TEXT_LINK" | "TEXT_ONLY";
  disclaimer_text?: {
  text?: string;
};
  disclaimer_clickable_texts?: {
  text?: string;
  url?: string;
}[];
};
  tracking_app_id?: string;
  impression_tracking_url?: string;
  click_tracking_url?: string;
  app_tracking_info_list?: {
  app_type?: "APP_ANDROID" | "APP_IOS";
  app_id?: "APP_ANDROID" | "APP_IOS";
  impression_tracking_url?: "APP_ANDROID" | "APP_IOS";
  click_tracking_url?: "APP_ANDROID" | "APP_IOS";
}[];
}


export interface CampaignSpcCreateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  advertiser_id?: string;
  campaign_id?: string;
  operation_status?: "ENABLE" | "DISABLE";
  campaign_secondary_status?: string;
  is_smart_performance_campaign?: "WEB_CONVERSIONS" | "true" | "false";
  objective_type?: "APP_PROMOTION" | "WEB_CONVERSIONS" | "LEAD_GENERATION";
  spc_type?: "WEB_ALL_IN_ONE" | "UNSET";
  web_all_in_one_catalog_status?: "OPEN" | "UNSET";
  app_promotion_type?: string;
  virtual_objective_type?: string;
  sales_destination?: "WEBSITE" | "WEB_AND_APP";
  campaign_type?: "REGULAR_CAMPAIGN" | "IOS14_CAMPAIGN";
  campaign_app_profile_page_state?: "INVALID" | "UNSET" | "ON" | "OFF";
  is_advanced_dedicated_campaign?: "true" | "false";
  disable_skan_campaign?: "true" | "false";
  bid_align_type?: "SAN" | "SKAN";
  campaign_name?: string;
  special_industries?: ("HOUSING" | "EMPLOYMENT" | "CREDIT")[];
  adgroup_secondary_status?: string;
  product_source?: string;
  catalog_id?: string;
  catalog_authorized_bc_id?: string;
  product_specific_type?: "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS";
  product_set_id?: string;
  product_ids?: string[];
  promotion_type?: string;
  app_id?: string;
  app_type?: "APP_ANDROID" | "APP_IOS";
  promotion_website_type?: string;
  promotion_target_type?: "INSTANT_PAGE" | "EXTERNAL_WEBSITE";
  optimization_goal?: string;
  pixel_id?: string;
  optimization_event?: string;
  app_config?: {
  app_id?: string;
}[];
  deep_funnel_optimization_status?: "ON" | "OFF";
  deep_funnel_event_source?: "ON" | "PIXEL" | "OFFLINE" | "CRM";
  deep_funnel_event_source_id?: "ON" | "PIXEL" | "OFFLINE" | "CRM";
  deep_funnel_optimization_event?: "ON" | "SHOPPING";
  bid_type?: string;
  bid_price?: number;
  conversion_bid_price?: number;
  deep_bid_type?: string;
  roas_bid?: number;
  incentive_offer_type?: "INELIGIBLE" | "COST_CAP_AND_MIN_ROAS";
  vbo_window?: "SEVEN_DAYS" | "ZERO_DAY";
  click_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS";
  engaged_view_attribution_window?: "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS";
  view_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS";
  attribution_event_count?: "UNSET" | "EVERY" | "ONCE";
  billing_event?: string;
  location_ids?: string[];
  languages?: string[];
  gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  spc_audience_age?: string;
  exclude_age_under_eighteen?: boolean;
  excluded_audience_ids?: string[];
  placement_type?: "PLACEMENT_TYPE_NORMAL" | "PLACEMENT_TYPE_AUTOMATIC";
  placements?: ("PLACEMENT_TIKTOK" | "PLACEMENT_PANGLE")[];
  comment_disabled?: boolean;
  share_disabled?: boolean;
  video_download_disabled?: boolean;
  blocked_pangle_app_ids?: string[];
  brand_safety_type?: "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "NO_BRAND_SAFETY";
  category_exclusion_ids?: string[];
  budget_mode?: string;
  budget_auto_adjust_strategy?: "BUDGET_MODE_DYNAMIC_DAILY_BUDGET" | "AUTO_BUDGET_INCREASE" | "UNSET";
  budget?: "UNSET" | "AUTO_BUDGET_INCREASE";
  current_budget?: number;
  scheduled_budget?: number;
  schedule_type?: "SCHEDULE_START_END" | "SCHEDULE_FROM_NOW";
  schedule_start_time?: string;
  schedule_end_time?: string;
  dayparting?: string;
  skip_learning_phase?: boolean;
  identity_id?: string;
  identity_type?: string;
  app_download_url?: string;
  app_name?: string;
  media_info_list?: {
  media_info?: {
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
  identity_id?: string;
  identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  identity_authorized_bc_id?: string;
};
}[];
  dark_post_status?: "ON" | "OFF";
  catalog_creative_toggle?: "true" | "false";
  title_list?: {
  title?: string;
}[];
  call_to_action_id?: string;
  call_to_action_list?: {
  call_to_action?: string;
}[];
  product_info?: {
  promo_info_list?: {
  discount_type?: "PERCENTAGE" | "CASH";
  discount_value?: "PERCENTAGE" | "CASH";
  discount_currency?: string;
  minimum_purchase_type?: "QUANTITY" | "SUBTOTAL";
  minimum_purchase_value?: "QUANTITY" | "SUBTOTAL";
  minimum_purchase_currency?: string;
  valid_start_time?: string;
  valid_end_time?: string;
}[];
};
  card_list?: {
  card_id?: string;
}[];
  automatic_add_on_enabled?: "true" | "false";
  page_list?: {
  page_id?: string;
}[];
  deeplink?: string;
  deeplink_type?: string;
  landing_page_urls?: {
  landing_page_url?: string;
  video_id?: string;
  tiktok_item_id?: string;
}[];
  utm_params?: {
  key?: string;
  value?: string;
}[];
  disclaimer_info?: {
  disclaimer_type?: "TEXT_LINK" | "TEXT_ONLY";
  disclaimer_text?: {
  text?: string;
};
  disclaimer_clickable_texts?: {
  text?: string;
  url?: string;
}[];
};
  tracking_app_id?: string;
  impression_tracking_url?: string;
  click_tracking_url?: string;
  app_tracking_info_list?: {
  app_type?: "APP_ANDROID" | "APP_IOS";
  app_id?: "APP_ANDROID" | "APP_IOS";
  impression_tracking_url?: "APP_ANDROID" | "APP_IOS";
  click_tracking_url?: "APP_ANDROID" | "APP_IOS";
}[];
  create_time?: string;
  modify_time?: string;
};
}


export interface CampaignSpcUpdateParams {
  advertiser_id: string;
  campaign_id: string;
  campaign_name?: string;
  special_industries?: ("HOUSING" | "EMPLOYMENT" | "CREDIT")[];
  product_specific_type?: "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS";
  product_set_id?: string;
  product_ids?: string[];
  bid_price?: "WEB_ALL_IN_ONE" | "CLICK" | "BID_TYPE_CUSTOM";
  conversion_bid_price?: "WEB_ALL_IN_ONE" | "CONVERT" | "TRAFFIC_LANDING_PAGE_VIEW" | "BID_TYPE_CUSTOM";
  roas_bid?: number;
  location_ids?: string[];
  languages?: string[];
  gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  spc_audience_age?: string;
  exclude_age_under_eighteen?: "false" | "true";
  excluded_audience_ids?: string[];
  comment_disabled?: "true" | "false";
  share_disabled?: "true" | "false";
  blocked_pangle_app_ids?: string[];
  budget_auto_adjust_strategy?: "BUDGET_MODE_DYNAMIC_DAILY_BUDGET" | "AUTO_BUDGET_INCREASE" | "UNSET";
  budget?: "UNSET" | "AUTO_BUDGET_INCREASE";
  schedule_type?: "SCHEDULE_START_END" | "SCHEDULE_FROM_NOW";
  schedule_start_time?: string;
  schedule_end_time?: string;
  dayparting?: string;
  identity_id?: string;
  media_info_list?: {
  media_info?: {
  video_info?: {
  video_id?: string;
  file_name?: string;
};
  image_info?: {
  web_uri?: string;
}[];
  music_info?: "WEB_CONVERSIONS" | "true";
  aigc_disclosure_type?: "CUSTOMIZED_USER" | "SELF_DISCLOSURE" | "NOT_DECLARED";
  tiktok_item_id?: string;
  identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "APP_PROMOTION" | "WEB_CONVERSIONS";
  identity_id?: string;
  identity_authorized_bc_id?: string;
};
}[];
  dark_post_status?: "ON" | "OFF";
  catalog_creative_toggle?: "OPEN" | "true" | "false";
  title_list?: {
  title?: string;
}[];
  call_to_action_id?: "LEAD_GENERATION" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "TT_USER" | "BC_AUTH_TT" | "AUTH_CODE";
  call_to_action_list?: ("LEAD_GENERATION" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "TT_USER" | "BC_AUTH_TT" | "AUTH_CODE")[];
  product_info?: {
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
  card_list?: {
  card_id?: string;
}[];
  page_list?: {
  page_id?: string;
}[];
  deeplink_type?: string;
  deeplink?: string;
  landing_page_urls?: ("WEB_CONVERSIONS" | "WEBSITE" | "UNSET")[];
  utm_params?: {
  key?: string;
  value?: string;
}[];
  disclaimer_info?: {
  disclaimer_type?: "TEXT_LINK" | "TEXT_ONLY";
  disclaimer_text?: {
  text?: string;
};
  disclaimer_clickable_texts?: {
  text?: string;
  url?: string;
}[];
};
  tracking_app_id?: string;
  impression_tracking_url?: string;
  click_tracking_url?: string;
}


export interface CampaignSpcUpdateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  advertiser_id?: string;
  campaign_id?: string;
  operation_status?: "ENABLE" | "DISABLE";
  campaign_secondary_status?: string;
  is_smart_performance_campaign?: "WEB_CONVERSIONS" | "true" | "false";
  objective_type?: "APP_PROMOTION" | "WEB_CONVERSIONS" | "LEAD_GENERATION";
  spc_type?: "WEB_ALL_IN_ONE" | "UNSET";
  web_all_in_one_catalog_status?: "OPEN" | "UNSET";
  app_promotion_type?: string;
  virtual_objective_type?: string;
  sales_destination?: "WEBSITE" | "WEB_AND_APP";
  campaign_type?: "REGULAR_CAMPAIGN" | "IOS14_CAMPAIGN";
  campaign_app_profile_page_state?: "INVALID" | "UNSET" | "ON" | "OFF";
  is_advanced_dedicated_campaign?: "true" | "false";
  disable_skan_campaign?: "true" | "false";
  bid_align_type?: "SAN" | "SKAN";
  campaign_name?: string;
  special_industries?: ("HOUSING" | "EMPLOYMENT" | "CREDIT")[];
  adgroup_secondary_status?: string;
  product_source?: string;
  catalog_id?: string;
  catalog_authorized_bc_id?: string;
  product_specific_type?: "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS";
  product_set_id?: string;
  product_ids?: string[];
  promotion_type?: string;
  app_id?: string;
  app_type?: "APP_ANDROID" | "APP_IOS";
  promotion_website_type?: string;
  promotion_target_type?: "INSTANT_PAGE" | "EXTERNAL_WEBSITE";
  optimization_goal?: string;
  pixel_id?: string;
  optimization_event?: string;
  app_config?: {
  app_id?: string;
}[];
  deep_funnel_optimization_status?: "ON" | "OFF";
  deep_funnel_event_source?: "ON" | "PIXEL" | "OFFLINE" | "CRM";
  deep_funnel_event_source_id?: "ON" | "PIXEL" | "OFFLINE" | "CRM";
  deep_funnel_optimization_event?: "ON" | "SHOPPING";
  bid_type?: string;
  bid_price?: number;
  conversion_bid_price?: number;
  deep_bid_type?: string;
  roas_bid?: number;
  incentive_offer_type?: "INELIGIBLE" | "COST_CAP_AND_MIN_ROAS";
  vbo_window?: "SEVEN_DAYS" | "ZERO_DAY";
  click_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS";
  engaged_view_attribution_window?: "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS" | "TWENTY_EIGHT_DAYS";
  view_attribution_window?: "OFF" | "ONE_DAY" | "SEVEN_DAYS";
  attribution_event_count?: "UNSET" | "EVERY" | "ONCE";
  billing_event?: string;
  location_ids?: string[];
  languages?: string[];
  gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  spc_audience_age?: "LEAD_GENERATION" | "APP_PROMOTION" | "WEB_CONVERSIONS";
  exclude_age_under_eighteen?: boolean;
  excluded_audience_ids?: string[];
  placement_type?: "PLACEMENT_TYPE_NORMAL" | "PLACEMENT_TYPE_AUTOMATIC";
  placements?: ("PLACEMENT_TIKTOK" | "PLACEMENT_PANGLE")[];
  comment_disabled?: boolean;
  share_disabled?: boolean;
  video_download_disabled?: boolean;
  blocked_pangle_app_ids?: string[];
  brand_safety_type?: "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "NO_BRAND_SAFETY";
  category_exclusion_ids?: string[];
  budget_mode?: string;
  budget_auto_adjust_strategy?: "BUDGET_MODE_DYNAMIC_DAILY_BUDGET" | "AUTO_BUDGET_INCREASE" | "UNSET";
  budget?: "UNSET" | "AUTO_BUDGET_INCREASE";
  current_budget?: number;
  scheduled_budget?: number;
  schedule_type?: "SCHEDULE_START_END" | "SCHEDULE_FROM_NOW";
  schedule_start_time?: string;
  schedule_end_time?: string;
  dayparting?: string;
  skip_learning_phase?: boolean;
  identity_id?: string;
  identity_type?: string;
  app_download_url?: string;
  app_name?: string;
  media_info_list?: {
  media_info?: {
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
  dark_post_status?: "ON" | "OFF";
  catalog_creative_toggle?: "true" | "false";
  title_list?: {
  title?: string;
}[];
  call_to_action_id?: string;
  call_to_action_list?: {
  call_to_action?: string;
}[];
  product_info?: {
  promo_info_list?: {
  discount_type?: "PERCENTAGE" | "CASH";
  discount_value?: "PERCENTAGE" | "CASH";
  discount_currency?: string;
  minimum_purchase_type?: "QUANTITY" | "SUBTOTAL";
  minimum_purchase_value?: "QUANTITY" | "SUBTOTAL";
  minimum_purchase_currency?: string;
  valid_start_time?: string;
  valid_end_time?: string;
}[];
};
  card_list?: {
  card_id?: string;
}[];
  automatic_add_on_enabled?: "true" | "false";
  page_list?: {
  page_id?: string;
}[];
  deeplink?: string;
  deeplink_type?: string;
  landing_page_urls?: {
  landing_page_url?: string;
  video_id?: string;
  tiktok_item_id?: string;
}[];
  utm_params?: {
  key?: string;
  value?: string;
}[];
  disclaimer_info?: {
  disclaimer_type?: "TEXT_LINK" | "TEXT_ONLY";
  disclaimer_text?: {
  text?: string;
};
  disclaimer_clickable_texts?: {
  text?: string;
  url?: string;
}[];
};
  tracking_app_id?: string;
  impression_tracking_url?: string;
  click_tracking_url?: string;
  app_tracking_info_list?: {
  app_type?: "APP_ANDROID" | "APP_IOS";
  app_id?: "APP_ANDROID" | "APP_IOS";
  impression_tracking_url?: "APP_ANDROID" | "APP_IOS";
  click_tracking_url?: "APP_ANDROID" | "APP_IOS";
}[];
  create_time?: string;
  modify_time?: string;
};
}


export interface CampaignSpcMaterialStatusUpdateParams {}


export interface CampaignSpcMaterialStatusUpdateResponse {}

