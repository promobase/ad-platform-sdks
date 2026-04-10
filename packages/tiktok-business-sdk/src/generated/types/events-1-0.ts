// Auto-generated types for Events 1.0 — do not edit

export interface AppTrackParams {
  tiktok_app_id: string;
  event?: string;
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
  event?: string;
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
  platform?: string;
  app_id: string;
  partner?: string;
  tracking_url?: {
  click_url?: string;
  impression_url?: string;
};
  enable_retargeting?: string;
}


export interface AppUpdateResponse {}


export interface AppListParams {}


export interface AppListResponse {}


export interface AppOptimizationEventParams {
  advertiser_id: string;
  app_id: string;
  placement_type?: string;
  placement?: string[];
  optimization_goal: string;
  objective: string;
  app_promotion_type?: string;
  available_only?: boolean;
  is_skan?: boolean;
}


export interface AppOptimizationEventResponse {
  code?: number;
  message?: string;
  data?: {
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
  availability_status?: string;
  conversions?: number;
  unlock_threshold?: number;
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
  order_by?: string;
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
  pixel_category?: string;
  pixel_script?: string;
  create_time?: string;
  pixel_setup_mode?: string;
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
  asset_relation_status?: string;
  ownership_status?: boolean;
  owner_bc_id?: string;
  updated_at?: number;
};
  events?: {
  currency_value?: string;
  currency?: string;
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
  pixel_category?: string;
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
  phone_number?: boolean;
  email?: boolean;
  name?: boolean;
  address?: boolean;
  external_id?: boolean;
};
  enable_first_party_cookies?: boolean;
  enable_expanded_data_sharing?: boolean;
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
  currency?: string;
  event_name?: string;
  event_type: string;
  event_code?: string;
  event_id?: string;
  statistic_type?: string;
  rules?: {
  trigger: string;
  operator: string;
  value: string;
  variable: string;
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
  currency?: string;
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
  objective_type: string;
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
  objective_type?: string;
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
  auto_tracking?: boolean;
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

