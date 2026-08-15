// @generated
// fingerprint: sha256:5752e99d72fbd16161d4754b62c989ff8b74ed167cee148f11b3df36aabf9f6c
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for Audience — do not edit

export interface DmpCustomAudienceFileUploadParams {
  advertiser_id: string;
  file: File | Blob;
  file_signature: string;
  calculate_type: string;
}


export interface DmpCustomAudienceFileUploadResponse {
  file_path?: string;
}


export interface DmpCustomAudienceCreateParams {
  advertiser_id: string;
  custom_audience_name: string;
  audience_sub_type?: "NORMAL" | "REACH_FREQUENCY";
  file_paths: string[];
  calculate_type: string;
  retention_in_days?: number;
}


export interface DmpCustomAudienceCreateResponse {
  custom_audience_id?: string;
}


export interface SegmentAudienceParams {
  advertiser_id: string;
  action: string;
  custom_audience_name?: string;
  delete_audience_id?: string;
}


export interface SegmentAudienceResponse {
  audience_id?: string;
}


export interface SegmentMappingParams {
  advertiser_ids: string[];
  action?: string;
  id_schema: ("IDFA_MD5" | "AAID_MD5" | "IDFA_SHA256" | "AAID_SHA256" | "EMAIL_SHA256" | "PHONE_SHA256")[];
  batch_data: string;
  id?: string;
  audience_ids?: string[];
}


export interface SegmentMappingResponse {}


export interface DmpCustomAudienceUpdateParams {
  advertiser_id: string;
  custom_audience_id: string;
  custom_audience_name?: string;
  audience_sub_type?: "REACH_FREQUENCY" | "NORMAL";
  file_paths?: string[];
  action?: "APPEND" | "REMOVE" | "REPLACE";
}


export interface DmpCustomAudienceUpdateResponse {}


export interface DmpCustomAudienceListParams {
  advertiser_id: string;
  custom_audience_ids?: string[];
  page?: number;
  page_size?: number;
}


export interface DmpCustomAudienceListResponse {
  list?: {
  shared?: boolean;
  is_creator?: boolean;
  audience_id?: string;
  cover_num?: number;
  create_time?: string;
  is_valid?: boolean;
  is_expiring?: boolean;
  expired_time?: string;
  name?: string;
  audience_type?: string;
  calculate_type?: string;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface DmpCustomAudienceGetParams {
  advertiser_id: string;
  custom_audience_ids: string[];
  history_size?: number;
}


export interface DmpCustomAudienceGetResponse {
  list?: {
  audience_details?: {
  audience_id?: string;
  msg?: string;
  audience_sub_type?: "NORMAL" | "REACH_FREQUENCY";
  error_msg?: string;
  is_valid?: boolean;
  is_expiring?: boolean;
  expired_time?: string;
  name?: string;
  rule?: string;
  is_auto_refresh?: boolean;
  shared?: boolean;
  is_creator?: boolean;
  owner_id?: string;
  create_time?: string;
  type?: string;
  cover_num?: number;
  calculate_type?: string;
  lookalike_spec?: {
  source_audience_id?: string;
  include_source?: boolean;
  mobile_os?: string;
  placements?: string;
  location_ids?: string[];
  audience_size?: "NARROW" | "BALANCED" | "BROAD";
}[];
};
  audience_history?: {
  action?: string;
  action_detail?: string;
  editor?: string;
  msg?: string;
  opt_time?: string;
}[];
}[];
}


export interface DmpCustomAudienceRuleCreateParams {
  advertiser_id: string;
  custom_audience_name: string;
  audience_type: "ENGAGEMENT" | "ENGAGEMENT_ORGANIC_VIDEO" | "ENGAGEMENT_LIVE_VIDEO" | "APP" | "PIXEL" | "LEAD_GENERATION" | "BUSINESS_ACCOUNT" | "TIKTOK_SHOP" | "OFFLINE";
  audience_sub_type?: "NORMAL" | "REACH_FREQUENCY";
  retention_in_days?: number;
  is_auto_refresh?: boolean;
  identity_id?: string;
  identity_type?: "TT_USER" | "BC_AUTH_TT";
  identity_authorized_bc_id?: string;
  rule_spec: {
  inclusion_rule_set: {
  operator: string;
  rules: {
  event_source_ids?: string[];
  retention_days: number;
  filter_set: {
  operator: string;
  filters: {
  field: string;
  operator: string;
  value: string;
  parameter_filters?: {
  field?: "URL" | "CONTENT_TYPE" | "PRICE" | "VALUE" | "CONTENT_ID" | "CONTENT_CATEGORY";
  operator?: "CONTAINS" | "DOES_NOT_CONTAIN" | "EQ" | "NOT_EQUAL" | "IS_LESS_THAN" | "IS_GREATER_THAN" | "IS_LESS_THAN_OR_EQUAL_TO" | "IS_GREATER_THAN_OR_EQUAL_TO" | "URL" | "DOES_NOT_CONTAINS";
  values?: string[];
}[];
}[];
};
}[];
};
  exclusion_rule_set?: {
  operator?: string;
  rules?: {
  event_source_ids?: string[];
  retention_days?: number;
  filter_set?: {
  operator?: string;
  filters?: {
  field?: string;
  operator?: string;
  value?: string;
  parameter_filters?: {
  field?: "URL" | "CONTENT_TYPE" | "PRICE" | "VALUE" | "CONTENT_ID" | "CONTENT_CATEGORY";
  operator?: "CONTAINS" | "DOES_NOT_CONTAIN" | "EQ" | "NOT_EQUAL" | "IS_LESS_THAN" | "IS_GREATER_THAN" | "IS_LESS_THAN_OR_EQUAL_TO" | "IS_GREATER_THAN_OR_EQUAL_TO" | "URL" | "DOES_NOT_CONTAINS";
  values?: string[];
}[];
}[];
};
}[];
};
};
}


export interface DmpCustomAudienceRuleCreateResponse {
  custom_audience_id?: string;
}


export interface DmpCustomAudienceLookalikeCreateParams {
  advertiser_id: string;
  custom_audience_name: string;
  audience_sub_type?: "NORMAL" | "REACH_FREQUENCY";
  lookalike_spec: {
  source_audience_id: string;
  include_source: boolean;
  mobile_os: string;
  placements: string[];
  location_ids: string[];
  audience_size: "NARROW" | "BALANCED" | "BROAD";
};
}


export interface DmpCustomAudienceLookalikeCreateResponse {
  custom_audience_id?: string;
}


export interface DmpCustomAudienceLookalikeUpdateParams {
  advertiser_id: string;
  custom_audience_ids: string[];
}


export interface DmpCustomAudienceLookalikeUpdateResponse {}


export interface DmpCustomAudienceDeleteParams {
  advertiser_id: string;
  custom_audience_ids: string[];
}


export interface DmpCustomAudienceDeleteResponse {}


export interface DmpCustomAudienceShareParams {
  custom_audience_ids: string[];
  shared_advertiser_ids: string[];
  advertiser_id: string;
}


export interface DmpCustomAudienceShareResponse {}


export interface DmpCustomAudienceShareCancelParams {
  custom_audience_id: string;
  shared_advertiser_id: string;
  advertiser_id: string;
}


export interface DmpCustomAudienceShareCancelResponse {}


export interface DmpCustomAudienceShareLogParams {
  custom_audience_id: string;
  advertiser_id: string;
}


export interface DmpCustomAudienceShareLogResponse {
  list?: {
  shared_advertiser_id?: string;
  shared_advertiser_name?: string;
  custom_audience_id?: string;
  status?: string;
}[];
}


export interface DmpCustomAudienceApplyParams {
  advertiser_id: string;
  custom_audience_id: string;
  adgroup_ids: string[];
  action_mode: string;
  usage_mode?: string;
}


export interface DmpCustomAudienceApplyResponse {}


export interface DmpCustomAudienceApplyLogParams {
  advertiser_id: string;
  custom_audience_ids: string[];
  page?: number;
  page_size?: number;
  timezone?: string;
}


export interface DmpCustomAudienceApplyLogResponse {
  advertiser_id?: string;
  list?: string[];
  audience_id?: string;
  adgroup_id?: string;
  adgroup_name?: string;
  usage_mode?: string;
  editor?: string;
  action_timestamp?: string;
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface DmpSavedAudienceCreateParams {
  advertiser_id: string;
  saved_audience_name: string;
  location_ids: string[];
  gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  age_groups?: string[];
  languages?: string[];
  audience_ids?: string[];
  excluded_audience_ids?: string[];
  interest_category_ids?: string[];
  interest_keyword_ids?: string[];
  actions?: {
  action_category_ids?: string[];
  action_scene?: "VIDEO_RELATED" | "CREATOR_RELATED" | "HASHTAG_RELATED";
  action_period?: number;
  video_user_actions?: string[];
}[];
  operating_systems?: ("ANDROID" | "IOS")[];
  min_android_version?: string;
  min_ios_version?: string;
  device_model_ids?: string[];
  network_types?: string[];
  carrier_ids?: string[];
  device_price_ranges?: number[];
}


export interface DmpSavedAudienceCreateResponse {
  saved_audience_id?: string;
}


export interface DmpSavedAudienceListParams {
  advertiser_id: string;
  saved_audience_ids?: string[];
}


export interface DmpSavedAudienceListResponse {
  saved_audiences?: {
  saved_audience_id?: string;
  saved_audience_name?: string;
  location_ids?: string[];
  gender?: "GENDER_FEMALE" | "GENDER_MALE" | "GENDER_UNLIMITED";
  age_groups?: string[];
  languages?: string[];
  audience_ids?: string[];
  excluded_audience_ids?: string[];
  interest_category_ids?: string[];
  interest_keyword_ids?: string[];
  actions?: {
  action_category_ids?: string[];
  action_scene?: "VIDEO_RELATED" | "CREATOR_RELATED" | "HASHTAG_RELATED";
  action_period?: number;
  video_user_actions?: string[];
}[];
  operating_systems?: ("ANDROID" | "IOS")[];
  min_android_version?: string;
  min_ios_version?: string;
  device_model_ids?: string[];
  network_types?: string[];
  carrier_ids?: string[];
  device_price_ranges?: number[];
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface DmpSavedAudienceDeleteParams {
  advertiser_id: string;
  saved_audience_ids: string[];
}


export interface DmpSavedAudienceDeleteResponse {}


export interface AudienceInsightInfoParams {
  advertiser_id: string;
  custom_audience_id?: string;
  locations?: {
  country_code: string;
  location_ids?: string[];
}[];
  dimensions: string[];
  selected_audience?: {
  top_regions_country_code?: string;
  languages?: string[];
  age_groups?: string[];
  gender?: ("GENDER_FEMALE" | "GENDER_MALE")[];
  device_price_ranges?: number[];
  min_ios_version?: string;
  min_android_version?: string;
  operating_systems?: ("ANDROID" | "IOS")[];
  interest_category_ids?: string[];
  video_action_category_ids?: string[];
  creator_action_category_ids?: string[];
  hashtag_action_category_ids?: string[];
};
}


export interface AudienceInsightInfoResponse {
  age?: {
  all?: Record<string, unknown>[];
  selected?: Record<string, unknown>[];
};
  gender?: {
  all?: Record<string, unknown>[];
  selected?: Record<string, unknown>[];
};
  country?: {
  all?: Record<string, unknown>[];
  selected?: Record<string, unknown>[];
};
  top_regions?: {
  all?: Record<string, unknown>[];
  selected?: Record<string, unknown>[];
};
  operating_system?: {
  all?: Record<string, unknown>[];
  selected?: Record<string, unknown>[];
};
  operating_system_version?: {
  all?: Record<string, unknown>[];
  selected?: Record<string, unknown>[];
};
  device_price?: {
  all?: Record<string, unknown>[];
  selected?: Record<string, unknown>[];
};
  top_interests?: {
  all?: Record<string, unknown>[];
  selected?: Record<string, unknown>[];
};
  bottom_interests?: {
  all?: Record<string, unknown>[];
  selected?: Record<string, unknown>[];
};
  ad_interest_categories?: {
  all?: Record<string, unknown>[];
  selected?: Record<string, unknown>[];
};
  top_hashtags?: {
  hashtag_id?: string;
  hashtag_name?: string;
  count?: number;
};
  engagement?: {
  all?: Record<string, unknown>[];
  selected?: Record<string, unknown>[];
};
}


export interface AudienceInsightOverlapParams {
  advertiser_id: string;
  benchmark_custom_audience_id: string;
  comparison_custom_audience_ids?: string[];
}


export interface AudienceInsightOverlapResponse {
  benchmark_audience?: {
  audience_id?: string;
  audience_name?: string;
  audience_size?: number;
  targetable_users_count_range?: string;
};
  comparison_audiences?: {
  audience_id?: string;
  audience_name?: string;
  audience_size?: number;
  targetable_users_count_range?: string;
  benchmark_overlap_rate?: string;
  benchmark_overlap_rate_range?: string;
  benchmark_overlap_count_range?: string;
}[];
}
