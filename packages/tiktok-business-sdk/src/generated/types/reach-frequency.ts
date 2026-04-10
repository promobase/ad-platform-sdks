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
  promotion_type?: string;
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
  operating_systems?: string[];
  network_types?: string[];
  device_model_ids?: string[];
  device_price_ranges?: number[];
  carrier_ids?: string[];
  interest_category_ids?: string[];
  rf_purchased_type?: string;
  budget?: number;
  purchased_impression?: number;
  purchased_reach?: number;
  schedule_start_time?: string;
  schedule_end_time?: string;
  frequency?: number;
  frequency_schedule?: number;
  optimization_goal?: string;
  cpv_video_duration?: string;
  brand_safety_type?: string;
  brand_safety_partner?: string;
  category_exclusion_ids?: string[];
  video_download_disabled?: boolean;
  feed_type?: string;
  delivery_mode?: string;
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
  promotion_type?: string;
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
  operating_systems?: string[];
  network_types?: string[];
  device_model_ids?: string[];
  device_price_ranges?: number[];
  carrier_ids?: string[];
  interest_category_ids?: string[];
  rf_purchased_type?: string;
  budget?: number;
  purchased_impression?: number;
  purchased_reach?: number;
  schedule_start_time?: string;
  schedule_end_time?: string;
  frequency?: number;
  frequency_schedule?: number;
  optimization_goal?: string;
  cpv_video_duration?: string;
  brand_safety_type?: string;
  brand_safety_partner?: string;
  category_exclusion_ids?: string[];
  video_download_disabled?: boolean;
  feed_type?: string;
  delivery_mode?: string;
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

