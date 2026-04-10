// Auto-generated types for Events 1.0 — do not edit

export interface AppTrackParams {
  tiktok_app_id: string;
  event?: "INSTALLAPP" | "PURCHASE";
  timestamp?: string;
  context: Record<string, unknown>;
  properties?: Record<string, unknown>;
}


export interface AppTrackResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: Record<string, unknown>;
}


export interface AppBatchParams {
  tiktok_app_id: string;
  batch: {
  type: string;
  event?: "INSTALLAPP" | "PURCHASE";
  timestamp?: string;
  context: Record<string, unknown>;
  properties?: Record<string, unknown>;
}[];
}


export interface AppBatchResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  partial_failure?: boolean;
  failed_events?: {
  order_in_batch?: number;
  error?: string;
}[];
};
}


export interface AppInfoParams {}


export interface AppInfoResponse {}


export interface AppCreateParams {}


export interface AppCreateResponse {}


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


export interface AppListParams {}


export interface AppListResponse {}


export interface AppOptimizationEventParams {
  advertiser_id: string;
  app_id: string;
  placement_type?: "PLACEMENT_TYPE_AUTOMATIC" | "PLACEMENT_TYPE_NORMAL";
  placement?: ("PLACEMENT_TYPE_NORMAL" | "PLACEMENT_TYPE_AUTOMATIC" | "PLACEMENT_TIKTOK" | "PLACEMENT_PANGLE" | "PLACEMENT_GLOBAL_APP_BUNDLE" | "PLACEMENT_TOPBUZZ" | "PLACEMENT_HELO" | "PRODUCT_SALES")[];
  optimization_goal: string;
  objective: string;
  app_promotion_type?: "APP_PROMOTION" | "APP_INSTALL" | "APP_RETARGETING";
  available_only?: boolean;
  is_skan?: boolean;
}


export interface AppOptimizationEventResponse {
  code?: number;
  message?: string;
  data?: {
  optimization_events?: {
  optimization_event?: string;
  statistic_type?: "EVERYTIME" | "NONE";
  availability_status?: "INACTIVE" | "INSUFFICIENT_POSTBACK" | "READY";
  conversions?: number;
  unlock_threshold?: "INSUFFICIENT_POSTBACK" | "READY";
  is_beta?: boolean;
  bid_type_availability?: {
  no_bid_enabled?: boolean;
  auto_bid_enabled?: boolean;
  multi_bid_enabled?: boolean;
};
  deep_optimization_events?: {
  optimization_event?: string;
  statistic_type?: "EVERYTIME" | "NONE";
  availability_status?: "INACTIVE" | "INSUFFICIENT_POSTBACK" | "READY";
  conversions?: number;
  unlock_threshold?: "INSUFFICIENT_POSTBACK" | "READY";
};
}[];
};
  request_id?: string;
}


export interface AppOptimizationEventRetargetingParams {
  advertiser_id: string;
  app_id: string;
}


export interface AppOptimizationEventRetargetingResponse {
  code?: number;
  message?: string;
  data?: {
  optimization_events?: string[];
};
  request_id?: string;
}


export interface PixelTrackParams {
  pixel_code: string;
  event: string;
  event_id?: string;
  timestamp?: string;
  context: Record<string, unknown>;
  properties?: Record<string, unknown>;
}


export interface PixelTrackResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: Record<string, unknown>;
}


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
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  partial_failure?: boolean;
  failed_events?: {
  order_in_batch?: number;
  error?: string;
}[];
};
}


export interface PixelListParams {
  advertiser_id: string;
  code?: string;
  pixel_id?: string;
  name?: string;
  order_by?: "EARLIEST_CREATE" | "LATEST_CREATE";
  filtering?: {
  available_for_catalog_only?: boolean;
};
  page?: number;
  page_size?: number;
}


export interface PixelListResponse {
  code?: number;
  message?: string;
  data?: {
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
  phone_number?: "true" | "false";
  email?: "true" | "false";
};
  automatic_advanced_matching_fields?: {
  phone_number?: "true" | "false";
  email?: "true" | "false";
  name?: "true" | "false";
  address?: "true" | "false";
  external_id?: "true" | "false";
};
  enable_first_party_cookies?: "true" | "false";
  enable_expanded_data_sharing?: "true" | "false";
  asset_ownership?: {
  asset_relation_status?: "TRANSFERRED" | "SHARED" | "UNBOUND";
  ownership_status?: "TRANSFERRED" | "SHARED" | "UNBOUND" | "true" | "false";
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
  statistic_type?: "EVERY_TIME" | "ONCE";
  rules?: {
  operator?: "OPERATORTYPE_CONTAINS" | "OPERATORTYPE_DOES_NOT_EQUAL" | "OPERATORTYPE_EQUALS";
  trigger?: "TRIGGERTYPE_CLICK" | "TRIGGERTYPE_PAGEVIEW";
  value?: string;
  variable?: "ELEMENT" | "PAGE_HOSTNAME" | "PAGE_PATH" | "PAGE_URL";
}[];
}[];
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
};
  request_id?: string;
}


export interface PixelCreateParams {
  advertiser_id: string;
  pixel_name: string;
  pixel_category?: string;
}


export interface PixelCreateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
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
};
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
  phone_number?: "true" | "false";
  email?: "true" | "false";
  name?: "true" | "false";
  address?: "true" | "false";
  external_id?: "true" | "false";
};
  enable_first_party_cookies?: "true" | "false";
  enable_expanded_data_sharing?: "true" | "false";
}


export interface PixelUpdateResponse {
  code?: number;
  message?: string;
  data?: Record<string, unknown>;
  request_id?: string;
}


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


export interface PixelEventCreateResponse {
  code?: number;
  message?: string;
  data?: Record<string, unknown>;
  request_id?: string;
}


export interface PixelEventUpdateParams {
  advertiser_id: string;
  currency_value?: string;
  currency?: "INR" | "USD";
  event_id: string;
  event_name: string;
}


export interface PixelEventUpdateResponse {
  code?: number;
  message?: string;
  data?: Record<string, unknown>;
  request_id?: string;
}


export interface PixelEventDeleteParams {
  advertiser_id: string;
  event_id: string;
}


export interface PixelEventDeleteResponse {
  code?: number;
  message?: string;
  data?: Record<string, unknown>;
  request_id?: string;
}


export interface PixelInstantPageEventParams {
  advertiser_id: string;
  objective_type: "CONVERSIONS" | "APP_PROMOTION";
  optimization_goal: string;
  is_retargeting?: boolean;
}


export interface PixelInstantPageEventResponse {
  code?: number;
  message?: string;
  data?: {
  list?: {
  business_type?: string;
  instant_page_events?: {
  objective_types?: {
  objective_type?: "CONVERSIONS" | "APP_PROMOTION";
  optimization_goals?: {
  optimization_goal?: string;
  optimization_events?: string[];
}[];
}[];
};
}[];
};
  request_id?: string;
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
  code?: number;
  message?: string;
  data?: {
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
};
  request_id?: string;
}


export interface OfflineCreateParams {
  advertiser_id: string;
  name: string;
  description?: string;
  auto_tracking?: "true" | "false";
}


export interface OfflineCreateResponse {
  event_set_id?: string;
}


export interface OfflineUpdateParams {}


export interface OfflineUpdateResponse {}


export interface OfflineDeleteParams {}


export interface OfflineDeleteResponse {}


export interface OfflineGetParams {}


export interface OfflineGetResponse {}


export interface OfflineTrackParams {
  event: string;
  event_set_id: string;
  event_id?: string;
  context: Record<string, unknown>;
  properties: Record<string, unknown>;
  timestamp: string;
}


export interface OfflineTrackResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: Record<string, unknown>;
}


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


export interface OfflineBatchResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: Record<string, unknown>;
}


export interface CrmListParams {}


export interface CrmListResponse {}


export interface CrmCreateParams {}


export interface CrmCreateResponse {}


export interface CtmMessageEventSetGetParams {}


export interface CtmMessageEventSetGetResponse {}

