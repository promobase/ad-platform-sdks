// Auto-generated types for Reach & Frequency — do not edit

export interface RfInventoryEstimateParams {}


export interface RfInventoryEstimateResponse {}


export interface AdgroupRfCreateParams {}


export interface AdgroupRfCreateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  advertiser_id?: string;
  campaign_id?: string;
  adgroup_id?: string;
  share_disabled?: boolean;
  adgroup_name?: string;
  promotion_type?: "APP_ANDROID" | "APP_IOS" | "WEBSITE" | "WEBSITE_OR_DISPLAY";
  optimization_event?: string;
  app_id?: string;
  comment_disabled?: boolean;
  audience_ids?: string[];
  excluded_audience_ids?: string[];
  age_groups?: string[];
  gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  languages?: string[];
  location_ids?: string[];
  is_hfss?: boolean;
  operating_systems?: ("ANDROID" | "IOS" | "PC")[];
  network_types?: string[];
  device_model_ids?: string[];
  device_price_ranges?: number[];
  carrier_ids?: string[];
  interest_category_ids?: string[];
  rf_purchased_type?: "FIXED_SHOW" | "FIXED_REACH" | "FIXED_BUDGET";
  budget?: number;
  purchased_impression?: number;
  purchased_reach?: number;
  schedule_start_time?: string;
  schedule_end_time?: string;
  frequency?: number;
  frequency_schedule?: number;
  optimization_goal?: "REACH" | "VIDEO_VIEW" | "CLICK" | "POST_ENGAGEMENT" | "INSTALL";
  cpv_video_duration?: string;
  brand_safety_type?: "NO_BRAND_SAFETY" | "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "THIRD_PARTY";
  brand_safety_partner?: "THIRD_PARTY" | "IAS" | "OPEN_SLATE";
  category_exclusion_ids?: string[];
  video_download_disabled?: boolean;
  feed_type?: "STANDARD_FEED" | "TOP_FEED";
  delivery_mode?: "STANDARD" | "SCHEDULE" | "SEQUENCE" | "OPTIMIZE";
  schedule_infos?: {
  schedules?: {
  start_time?: string;
  end_time?: string;
}[];
  expected_orders?: number[];
  is_draft?: "true" | "false";
  schedule_id?: "true" | "false";
}[];
  notice?: string;
  contextual_tag_ids?: string[];
};
}


export interface AdgroupRfUpdateParams {}


export interface AdgroupRfUpdateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  advertiser_id?: string;
  campaign_id?: string;
  adgroup_id?: string;
  share_disabled?: boolean;
  adgroup_name?: string;
  promotion_type?: "APP_ANDROID" | "APP_IOS" | "WEBSITE" | "WEBSITE_OR_DISPLAY";
  optimization_event?: string;
  app_id?: string;
  comment_disabled?: boolean;
  audience_ids?: string[];
  excluded_audience_ids?: string[];
  age_groups?: string[];
  gender?: string;
  languages?: string[];
  location_ids?: string[];
  is_hfss?: boolean;
  operating_systems?: ("ANDROID" | "IOS" | "PC")[];
  network_types?: string[];
  device_model_ids?: string[];
  device_price_ranges?: number[];
  carrier_ids?: string[];
  interest_category_ids?: string[];
  rf_purchased_type?: "FIXED_SHOW" | "FIXED_REACH" | "FIXED_BUDGET";
  budget?: number;
  purchased_impression?: number;
  purchased_reach?: number;
  schedule_start_time?: string;
  schedule_end_time?: string;
  frequency?: number;
  frequency_schedule?: number;
  optimization_goal?: "REACH" | "VIDEO_VIEW" | "CLICK" | "POST_ENGAGEMENT" | "INSTALL";
  cpv_video_duration?: "TWO_SECONDS" | "SIX_SECONDS";
  brand_safety_type?: "NO_BRAND_SAFETY" | "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "THIRD_PARTY";
  brand_safety_partner?: "THIRD_PARTY" | "IAS" | "OPEN_SLATE";
  category_exclusion_ids?: string[];
  video_download_disabled?: boolean;
  feed_type?: "STANDARD_FEED" | "TOP_FEED";
  delivery_mode?: "STANDARD" | "SCHEDULE" | "SEQUENCE" | "OPTIMIZE";
  schedule_infos?: {
  schedules?: {
  start_time?: string;
  end_time?: string;
}[];
  expected_orders?: number[];
  is_draft?: "true" | "false";
  schedule_id?: "true" | "false";
}[];
  notice?: string;
  contextual_tag_ids?: string[];
};
}


export interface RfOrderCancelParams {}


export interface RfOrderCancelResponse {}


export interface AdgroupRfEstimatedInfoParams {}


export interface AdgroupRfEstimatedInfoResponse {}


export interface RfContractQueryParams {}


export interface RfContractQueryResponse {}


export interface RfDeliveryTimezoneParams {}


export interface RfDeliveryTimezoneResponse {}

