// Auto-generated types for Reach & Frequency — do not edit

export interface RfInventoryEstimateParams {
  advertiser_id: string;
  audience_info: {
  audience_ids?: string[];
  excluded_audience_ids?: string[];
  age_groups?: string[];
  gender?: string;
  languages?: string[];
  location_ids: string[];
  operating_systems?: string[];
  network_types?: string[];
  device_model_ids?: string[];
  device_price_ranges?: number[];
  carrier_ids?: string[];
  interest_category_ids?: string[];
  brand_safety_type?: "NO_BRAND_SAFETY" | "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "THIRD_PARTY";
  contextual_tag_ids?: string[];
};
  schedule_start_time: string;
  schedule_end_time: string;
  frequency: number;
  frequency_schedule: number;
  objective_type: string;
  cpv_video_duration?: "SIX_SECONDS" | "TWO_SECONDS";
  feed_type?: "STANDARD_FEED" | "TOP_FEED";
  rf_purchased_type?: "FIXED_SHOW" | "FIXED_REACH" | "FIXED_BUDGET";
  budget?: number;
  purchased_impression?: number;
  purchased_reach?: number;
  rf_campaign_type?: "STANDARD" | "PULSE";
}


export interface RfInventoryEstimateResponse {
  default_result?: {
  base_info?: {
  budget?: number;
  cpm?: number;
  impression?: number;
  reach?: number;
  max_reach?: number;
  average_frequency?: number;
};
  daily_cost?: {
  cost?: number;
  date?: string;
};
  frequency_per_person?: {
  frequency?: number;
  percentage?: number;
};
};
  results?: {
  base_info?: {
  budget?: number;
  cpm?: number;
  impression?: number;
  reach?: number;
  average_frequency?: number;
};
  daily_cost?: {
  cost?: number;
  date?: string;
};
  frequency_per_person?: {
  frequency?: number;
  percentage?: number;
}[];
}[];
}


export interface AdgroupRfCreateParams {
  request_id: string;
  advertiser_id: string;
  campaign_id: string;
  share_disabled?: boolean;
  adgroup_name: string;
  promotion_type: "APP_ANDROID" | "APP_IOS" | "WEBSITE" | "WEBSITE_OR_DISPLAY" | "RF_REACH";
  optimization_event?: string;
  app_id?: string;
  comment_disabled?: boolean;
  audience_ids?: string[];
  excluded_audience_ids?: string[];
  age_groups?: string[];
  gender?: string;
  languages?: string[];
  location_ids: string[];
  is_hfss?: boolean;
  operating_systems?: ("ANDROID" | "IOS" | "PC")[];
  network_types?: string[];
  device_model_ids?: string[];
  device_price_ranges?: number[];
  carrier_ids?: string[];
  interest_category_ids?: string[];
  rf_purchased_type: "FIXED_SHOW" | "FIXED_REACH" | "FIXED_BUDGET";
  budget: number;
  purchased_impression: number;
  purchased_reach: number;
  schedule_start_time: string;
  schedule_end_time: string;
  frequency: number;
  frequency_schedule: number;
  optimization_goal: "REACH" | "VIDEO_VIEW" | "CLICK" | "POST_ENGAGEMENT" | "INSTALL" | "PULSE" | "SIX_SECONDS";
  cpv_video_duration?: "SIX_SECONDS" | "PULSE" | "REACH";
  brand_safety_type?: "NO_BRAND_SAFETY" | "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "THIRD_PARTY";
  brand_safety_partner?: "IAS" | "OPEN_SLATE";
  category_exclusion_ids?: string[];
  video_download_disabled?: boolean;
  feed_type?: "STANDARD_FEED" | "TOP_FEED";
  delivery_mode?: "STANDARD" | "REACH" | "SIX_SECONDS" | "SCHEDULE" | "SEQUENCE" | "VIEW_OPTIMIZE" | "OPTIMIZE";
  schedule_infos?: {
  schedules?: {
  start_time?: string;
  end_time?: string;
}[];
  expected_orders?: number[];
}[];
  contextual_tag_ids?: string[];
}


export interface AdgroupRfCreateResponse {
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
  brand_safety_partner?: "IAS" | "OPEN_SLATE";
  category_exclusion_ids?: string[];
  video_download_disabled?: boolean;
  feed_type?: "STANDARD_FEED" | "TOP_FEED";
  delivery_mode?: "STANDARD" | "SCHEDULE" | "SEQUENCE" | "VIEW_OPTIMIZE" | "OPTIMIZE";
  schedule_infos?: {
  schedules?: {
  start_time?: string;
  end_time?: string;
}[];
  expected_orders?: number[];
  is_draft?: boolean;
  schedule_id?: string;
}[];
  notice?: string;
  contextual_tag_ids?: string[];
}


export interface AdgroupRfUpdateParams {
  advertiser_id: string;
  adgroup_id: string;
  share_disabled?: boolean;
  adgroup_name?: string;
  comment_disabled?: boolean;
  audience_ids?: string[];
  excluded_audience_ids?: string[];
  age_groups?: string[];
  gender?: string;
  languages?: string[];
  location_ids?: string[];
  is_hfss?: boolean;
  operating_systems?: string[];
  network_types?: string[];
  device_model_ids?: string[];
  device_price_ranges?: number[];
  carrier_ids?: string[];
  interest_category_ids?: string[];
  rf_purchased_type?: "FIXED_SHOW" | "FIXED_REACH" | "FIXED_BUDGE";
  budget?: number;
  purchased_impression?: number;
  purchased_reach?: number;
  schedule_start_time?: string;
  schedule_end_time?: string;
  frequency?: number;
  frequency_schedule?: number;
  feed_type?: "STANDARD_FEED" | "TOP_FEED";
  delivery_mode?: "STANDARD" | "REACH" | "SIX_SECONDS" | "SCHEDULE" | "SEQUENCE" | "VIEW_OPTIMIZE" | "OPTIMIZE";
  schedule_infos?: {
  schedules?: {
  start_time?: string;
  end_time?: string;
}[];
  expected_orders?: number[];
}[];
  contextual_tag_ids?: string[];
  brand_safety_type?: "EXPANDED_INVENTORY" | "NO_BRAND_SAFETY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY";
  category_exclusion_ids?: string[];
}


export interface AdgroupRfUpdateResponse {
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
  brand_safety_partner?: "IAS" | "OPEN_SLATE";
  category_exclusion_ids?: string[];
  video_download_disabled?: boolean;
  feed_type?: "STANDARD_FEED" | "TOP_FEED";
  delivery_mode?: "STANDARD" | "SCHEDULE" | "SEQUENCE" | "VIEW_OPTIMIZE" | "OPTIMIZE";
  schedule_infos?: {
  schedules?: {
  start_time?: string;
  end_time?: string;
}[];
  expected_orders?: number[];
  is_draft?: boolean;
  schedule_id?: string;
}[];
  notice?: string;
  contextual_tag_ids?: string[];
}


export interface RfOrderCancelParams {
  advertiser_id: string;
  adgroup_ids: string[];
}


export interface RfOrderCancelResponse {
  fail_adgroup_ids?: string[];
}


export interface AdgroupRfEstimatedInfoParams {
  advertiser_id: string;
  adgroup_ids: string[];
}


export interface AdgroupRfEstimatedInfoResponse {
  estimated_info?: {
  adgroup_id?: string;
  base_info?: {
  budget?: number;
  cpm?: number;
  impression?: number;
  reach?: number;
  average_frequency?: number;
};
  daily_cost?: {
  cost?: number;
  date?: string;
};
  frequency_per_person?: {
  frequency?: number;
  percentage?: number;
};
}[];
}


export interface RfContractQueryParams {
  advertiser_id: string;
  included_date: string;
  rf_campaign_type?: "STANDARD" | "PULSE";
}


export interface RfContractQueryResponse {
  has_valid_contract?: boolean;
  pulse_start_date?: string;
  pulse_end_date?: string;
  start_date?: string;
  end_date?: string;
}


export interface RfDeliveryTimezoneParams {
  advertiser_id: string;
  region_codes: string[];
}


export interface RfDeliveryTimezoneResponse {
  timezone_info?: {
  region_code?: string;
  delivery_timezone?: string[];
}[];
}
