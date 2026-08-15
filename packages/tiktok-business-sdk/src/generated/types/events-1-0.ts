// @generated
// fingerprint: sha256:5605e7803cc36f6108d55dc1384a1bf969836906f5d9ef8413d43d93e5a99555
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for Events 1.0 — do not edit

export interface AppTrackParams {
  tiktok_app_id: string;
  event?: string;
  timestamp?: string;
  context: Record<string, unknown>;
  properties?: Record<string, unknown>;
}


export interface AppTrackResponse {}


export interface AppBatchParams {
  tiktok_app_id: string;
  batch: {
  type: string;
  event?: string;
  timestamp?: string;
  context: Record<string, unknown>;
  properties?: Record<string, unknown>;
}[];
}


export interface AppBatchResponse {
  partial_failure?: boolean;
  failed_events?: {
  order_in_batch?: number;
  error?: string;
}[];
}


export interface AppInfoParams {
  advertiser_id: string;
  app_id: string;
}


export interface AppInfoResponse {
  app?: {
  advertiser_id?: string;
  app_platform_id?: string;
  app_name?: string;
  self_attribution_enabled?: boolean;
  skan_allowed?: "ALLOWED" | "NOT_ALLOWED";
  advanced_dedicated_campaign_allowed?: boolean;
  is_attribution_flex_enable?: boolean;
  download_url?: string;
  icon?: {
  height?: number;
  web_uri?: string;
  width?: number;
};
  app_id?: string;
  package_name?: string;
  tiktok_apps?: {
  tiktok_app_id?: string;
}[];
  partner?: {
  partner_id?: string;
  partner_logo?: string;
  partner_name?: string;
};
  platform?: "ANDROID" | "IOS";
  enable_retargeting?: "RETARGETING" | "NON_RETARGETING";
  tracking_url?: {
  click_url?: string;
  impression_url?: string;
  retargeting_click_url?: string;
  retargeting_impression_url?: string;
};
  create_time?: string;
};
}


export interface AppCreateParams {
  advertiser_id: string;
  download_url: string;
  partner?: string;
  tracking_url?: {
  click_url?: string;
  impression_url?: string;
};
}


export interface AppCreateResponse {
  app_id?: string;
}


export interface AppUpdateParams {
  advertiser_id: string;
  download_url?: string;
  platform?: "ANDROID" | "IOS";
  app_id: string;
  partner?: string;
  tracking_url?: {
  click_url?: string;
  impression_url?: string;
};
  enable_retargeting?: "RETARGETING" | "NON_RETARGETING";
}


export interface AppUpdateResponse {}


export interface AppListParams {
  advertiser_id: string;
  app_platform_ids?: string[];
}


export interface AppListResponse {
  apps?: {
  advertiser_id?: string;
  app_platform_id?: string;
  app_name?: string;
  self_attribution_enabled?: boolean;
  skan_allowed?: "ALLOWED" | "NOT_ALLOWED";
  advanced_dedicated_campaign_allowed?: boolean;
  is_attribution_flex_enable?: boolean;
  download_url?: string;
  icon?: {
  height?: number;
  web_uri?: string;
  width?: number;
};
  app_id?: string;
  package_name?: string;
  tiktok_apps?: {
  tiktok_app_id?: string;
}[];
  partner?: {
  partner_id?: string;
  partner_logo?: string;
  partner_name?: string;
};
  platform?: "ANDROID" | "IOS";
  enable_retargeting?: "RETARGETING" | "NON_RETARGETING";
  tracking_url?: {
  click_url?: string;
  impression_url?: string;
  retargeting_click_url?: string;
  retargeting_impression_url?: string;
};
  create_time?: string;
}[];
}


export interface AppOptimizationEventParams {
  advertiser_id: string;
  app_id: string;
  placement_type?: "PLACEMENT_TYPE_AUTOMATIC" | "PLACEMENT_TYPE_NORMAL";
  placement?: string[];
  optimization_goal: string;
  objective: string;
  app_promotion_type?: "APP_INSTALL" | "APP_RETARGETING";
  available_only?: boolean;
  is_skan?: boolean;
}


export interface AppOptimizationEventResponse {
  optimization_events?: {
  optimization_event?: string;
  statistic_type?: string;
  availability_status?: string;
  conversions?: number;
  unlock_threshold?: number;
  is_beta?: boolean;
  bid_type_availability?: {
  no_bid_enabled?: boolean;
  auto_bid_enabled?: boolean;
  multi_bid_enabled?: boolean;
};
  deep_optimization_events?: {
  optimization_event?: string;
  statistic_type?: string;
  availability_status?: "INACTIVE" | "INSUFFICIENT_POSTBACK" | "READY";
  conversions?: number;
  unlock_threshold?: number;
};
}[];
}


export interface AppOptimizationEventRetargetingParams {
  advertiser_id: string;
  app_id: string;
}


export interface AppOptimizationEventRetargetingResponse {
  optimization_events?: string[];
}


export interface PixelTrackParams {
  pixel_code: string;
  event: string;
  event_id?: string;
  timestamp?: string;
  context: Record<string, unknown>;
  properties?: Record<string, unknown>;
}


export interface PixelTrackResponse {}


export interface PixelBatchParams {
  pixel_code: string;
  batch?: {
  type?: string;
  event?: string;
  event_id?: string;
  timestamp?: string;
  context?: Record<string, unknown>;
  properties?: Record<string, unknown>;
}[];
}


export interface PixelBatchResponse {
  partial_failure?: boolean;
  failed_events?: {
  order_in_batch?: number;
  error?: string;
}[];
}


export interface PixelListParams {
  advertiser_id: string;
  code?: string;
  pixel_id?: string;
  name?: string;
  order_by?: string;
  filtering?: {
  available_for_catalog_only?: boolean;
};
  page?: number;
  page_size?: number;
}


export interface PixelListResponse {
  pixels?: {
  pixel_id?: string;
  pixel_code?: string;
  pixel_name?: string;
  pixel_category?: "ONLINE_STORE" | "FILLING_FORM" | "CONTACTS" | "LANDING_PAGE" | "CUSTOMIZE_EVENTS";
  pixel_script?: string;
  create_time?: string;
  pixel_setup_mode?: "STANDARD" | "DEVELOPER";
  partner_name?: string;
  advanced_matching_fields?: {
  phone_number?: boolean;
  email?: boolean;
};
  automatic_advanced_matching_fields?: {
  phone_number?: boolean;
  email?: boolean;
  name?: boolean;
  address?: boolean;
  external_id?: boolean;
};
  enable_first_party_cookies?: boolean;
  enable_expanded_data_sharing?: boolean;
  asset_ownership?: {
  asset_relation_status?: "TRANSFERRED" | "SHARED" | "UNBOUND";
  ownership_status?: boolean;
  owner_bc_id?: string;
  updated_at?: number;
};
  events?: {
  currency_value?: string;
  currency?: "INR" | "JPY" | "USD";
  name?: string;
  deprecated?: boolean;
  event_type?: string;
  optimization_event?: string;
  custom_event_type?: string;
  event_code?: string;
  event_id?: string;
  statistic_type?: string;
  rules?: {
  operator?: string;
  trigger?: string;
  value?: string;
  variable?: string;
}[];
}[];
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface PixelCreateParams {
  advertiser_id: string;
  pixel_name: string;
  pixel_category?: string;
}


export interface PixelCreateResponse {
  pixel_code?: string;
  pixel_id?: string;
  pixel_name?: string;
  pixel_category?: "ONLINE_STORE" | "FILLING_FORM" | "CONTACTS" | "LANDING_PAGE" | "CUSTOMIZE_EVENTS";
  partner_name?: string;
  advanced_matching_fields?: {
  phone_number?: boolean;
  email?: boolean;
};
  automatic_advanced_matching_fields?: {
  phone_number?: boolean;
  email?: boolean;
  name?: boolean;
  address?: boolean;
  external_id?: boolean;
};
  enable_first_party_cookies?: boolean;
  enable_expanded_data_sharing?: boolean;
}


export interface PixelUpdateParams {
  advertiser_id: string;
  pixel_name: string;
  pixel_id: string;
  advanced_matching_fields?: {
  phone_number?: boolean;
  email?: boolean;
};
  automatic_advanced_matching_fields?: {
  phone_number?: boolean;
  email?: boolean;
  name?: boolean;
  address?: boolean;
  external_id?: boolean;
};
  enable_first_party_cookies?: boolean;
  enable_expanded_data_sharing?: boolean;
}


export interface PixelUpdateResponse {}


export interface PixelEventCreateParams {
  advertiser_id: string;
  pixel_events: {
  currency_value?: string;
  currency?: "INR" | "USD";
  event_name?: string;
  event_type: string;
  event_code?: string;
  event_id?: string;
  statistic_type?: string;
  rules?: {
  trigger: "TRIGGERTYPE_CLICK" | "TRIGGERTYPE_PAGEVIEW";
  operator: "OPERATORTYPE_CONTAINS" | "OPERATORTYPE_DOES_NOT_EQUAL" | "OPERATORTYPE_EQUALS";
  value: string;
  variable: "ELEMENT" | "PAGE_HOSTNAME" | "PAGE_PATH" | "PAGE_URL";
}[];
}[];
  pixel_id: string;
}


export interface PixelEventCreateResponse {}


export interface PixelEventUpdateParams {
  advertiser_id: string;
  currency_value?: string;
  currency?: string;
  event_id: string;
  event_name: string;
}


export interface PixelEventUpdateResponse {}


export interface PixelEventDeleteParams {
  advertiser_id: string;
  event_id: string;
}


export interface PixelEventDeleteResponse {}


export interface PixelInstantPageEventParams {
  advertiser_id: string;
  objective_type: string;
  optimization_goal: string;
  is_retargeting?: boolean;
}


export interface PixelInstantPageEventResponse {
  list?: {
  business_type?: string;
  instant_page_events?: {
  objective_types?: {
  objective_type?: string;
  optimization_goals?: {
  optimization_goal?: string;
  optimization_events?: string[];
}[];
}[];
};
}[];
}


export interface PixelEventStatsParams {
  advertiser_id: string;
  date_range: {
  start_date: string;
  end_date: string;
};
  pixel_ids: string[];
}


export interface PixelEventStatsResponse {
  list?: {
  pixel_id?: string;
  statistics?: {
  pixel_event_type?: string;
  custom_event_type?: string;
  attributed_count?: number;
  preview_count?: number;
  total_count?: number;
  browser_event_total_count?: number;
  server_event_total_count?: number;
}[];
}[];
}


export interface OfflineCreateParams {
  advertiser_id: string;
  name: string;
  description?: string;
  auto_tracking?: boolean;
}


export interface OfflineCreateResponse {
  event_set_id?: string;
}


export interface OfflineUpdateParams {
  advertiser_id: string;
  event_set_id: string;
  name?: string;
  auto_tracking?: boolean;
}


export interface OfflineUpdateResponse {
  advertiser_id?: string;
  event_set_id?: string;
  name?: string;
  description?: string;
  auto_tracking?: boolean;
  create_time?: string;
  update_time?: string;
}


export interface OfflineDeleteParams {
  advertiser_id: string;
  event_set_id: string;
}


export interface OfflineDeleteResponse {}


export interface OfflineGetParams {
  advertiser_id: string;
  event_set_ids?: string[];
  name?: string;
}


export interface OfflineGetResponse {
  event_set_list?: {
  advertiser_id?: string;
  event_set_id?: string;
  name?: string;
  description?: string;
  auto_tracking?: boolean;
  create_time?: string;
  update_time?: string;
}[];
}


export interface OfflineTrackParams {
  event: string;
  event_set_id: string;
  event_id?: string;
  context: Record<string, unknown>;
  properties: Record<string, unknown>;
  timestamp: string;
}


export interface OfflineTrackResponse {}


export interface OfflineBatchParams {
  event_set_id: string;
  batch?: {
  event: string;
  event_id?: string;
  context: Record<string, unknown>;
  properties: Record<string, unknown>;
  timestamp: string;
}[];
}


export interface OfflineBatchResponse {}


export interface CrmListParams {
  advertiser_id: string;
  name?: string;
  event_set_ids?: string[];
}


export interface CrmListResponse {
  crm_event_sets?: {
  event_set_id?: string;
  name?: string;
  create_time?: string;
}[];
}


export interface CrmCreateParams {
  advertiser_id: string;
  name: string;
}


export interface CrmCreateResponse {
  event_set_id?: string;
  name?: string;
  create_time?: string;
}


export interface CtmMessageEventSetGetParams {
  advertiser_id: string;
  messaging_app_type: "MESSENGER" | "WHATSAPP" | "ZALO";
  messaging_app_account_id: string;
  message_event_name?: string;
  message_event_set_ids?: string[];
}


export interface CtmMessageEventSetGetResponse {
  message_event_set_list?: {
  message_event_set_id?: string;
  message_event_name?: string;
  create_time?: string;
}[];
  matched_event_set?: {
  message_event_set_id?: string;
  message_event_name?: string;
  create_time?: string;
};
}
