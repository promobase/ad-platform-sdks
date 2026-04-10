// Auto-generated types for Audience — do not edit

export interface DmpCustomAudienceFileUploadParams {}


export interface DmpCustomAudienceFileUploadResponse {}


export interface DmpCustomAudienceCreateParams {
  advertiser_id: string;
  custom_audience_name: string;
  audience_sub_type?: "NORMAL" | "REACH_FREQUENCY";
  file_paths: string[];
  calculate_type: string;
  retention_in_days?: number;
}


export interface DmpCustomAudienceCreateResponse {}


export interface SegmentAudienceParams {
  advertiser_id: string;
  action: string;
  custom_audience_name?: string;
  delete_audience_id?: string;
}


export interface SegmentAudienceResponse {}


export interface SegmentMappingParams {
  advertiser_ids: string[];
  action?: "IDFA_MD5" | "AAID_MD5" | "IDFA_SHA256" | "AAID_SHA256" | "EMAIL_SHA256" | "PHONE_SHA256";
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
  file_paths?: ("APPEND" | "REMOVE" | "REPLACE")[];
  action?: "APPEND" | "REMOVE" | "REPLACE";
}


export interface DmpCustomAudienceUpdateResponse {}


export interface DmpCustomAudienceListParams {}


export interface DmpCustomAudienceListResponse {}


export interface DmpCustomAudienceGetParams {}


export interface DmpCustomAudienceGetResponse {}


export interface DmpCustomAudienceRuleCreateParams {
  advertiser_id: string;
  custom_audience_name: string;
  audience_type: "ENGAGEMENT" | "ENGAGEMENT_ORGANIC_VIDEO" | "ENGAGEMENT_LIVE_VIDEO" | "APP" | "PIXEL" | "LEAD_GENERATION" | "BUSINESS_ACCOUNT" | "TIKTOK_SHOP" | "OFFLINE";
  audience_sub_type?: "NORMAL" | "REACH_FREQUENCY";
  retention_in_days?: number;
  is_auto_refresh?: "true" | "false";
  identity_id?: "ENGAGEMENT_LIVE_VIDEO" | "ENGAGEMENT_ORGANIC_VIDEO";
  identity_type?: "ENGAGEMENT_LIVE_VIDEO" | "ENGAGEMENT_ORGANIC_VIDEO" | "TT_USER" | "BC_AUTH_TT";
  identity_authorized_bc_id?: string;
  rule_spec: {
  inclusion_rule_set: {
  operator: string;
  rules: {
  event_source_ids?: ("ENGAGEMENT" | "LEAD_GENERATION")[];
  retention_days: "BUSINESS_ACCOUNT" | "BUSINESS ACCOUNT PROFILE FOLLOW" | "ENGAGEMENT_LIVE_VIDEO" | "ENGAGEMENT_ORGANIC_VIDEO";
  filter_set: {
  operator: string;
  filters: {
  field: string;
  operator: string;
  value: string;
  parameter_filters?: {
  field?: "URL" | "CONTENT_TYPE" | "PRICE" | "VALUE" | "CONTENT_ID" | "CONTENT_CATEGORY";
  operator?: "CONTAINS" | "DOES_NOT_CONTAIN" | "EQ" | "IS_LESS_THAN" | "IS_GREATER_THAN" | "IS_LESS_THAN_OR_EQUAL_TO" | "IS_GRETER_THAN_OR_EQUAL_TO" | "URL" | "DOES_NOT_CONTAINS" | "IS_GREATER_THAN_OR_EQUAL_TO";
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
  retention_days?: "BUSINESS_ACCOUNT" | "BUSINESS ACCOUNT PROFILE FOLLOW" | "ENGAGEMENT_LIVE_VIDEO" | "ENGAGEMENT_ORGANIC_VIDEO";
  filter_set?: {
  operator?: string;
  filters?: {
  field?: string;
  operator?: string;
  value?: string;
  parameter_filters?: {
  field?: "URL" | "CONTENT_TYPE" | "PRICE" | "VALUE" | "CONTENT_ID" | "CONTENT_CATEGORY";
  operator?: "CONTAINS" | "DOES_NOT_CONTAIN" | "EQ" | "IS_LESS_THAN" | "IS_GREATER_THAN" | "IS_LESS_THAN_OR_EQUAL_TO" | "IS_GRETER_THAN_OR_EQUAL_TO" | "URL" | "DOES_NOT_CONTAINS" | "IS_GREATER_THAN_OR_EQUAL_TO";
  values?: string[];
}[];
}[];
};
}[];
};
};
}


export interface DmpCustomAudienceRuleCreateResponse {}


export interface DmpCustomAudienceLookalikeCreateParams {
  advertiser_id: string;
  custom_audience_name: string;
  audience_sub_type?: "NORMAL" | "REACH_FREQUENCY";
  lookalike_spec: {
  source_audience_id: string;
  include_source: boolean;
  mobile_os: "ALL" | "ANDROID" | "IOS";
  placements: string[];
  location_ids: string[];
  audience_size: "NARROW" | "BALANCED" | "BROAD";
};
}


export interface DmpCustomAudienceLookalikeCreateResponse {}


export interface DmpCustomAudienceLookalikeUpdateParams {
  advertiser_id: string;
  custom_audience_ids: string;
}


export interface DmpCustomAudienceLookalikeUpdateResponse {}


export interface DmpCustomAudienceDeleteParams {}


export interface DmpCustomAudienceDeleteResponse {}


export interface DmpCustomAudienceShareParams {}


export interface DmpCustomAudienceShareResponse {}


export interface DmpCustomAudienceShareCancelParams {}


export interface DmpCustomAudienceShareCancelResponse {}


export interface DmpCustomAudienceShareLogParams {}


export interface DmpCustomAudienceShareLogResponse {}


export interface DmpCustomAudienceApplyParams {
  advertiser_id: string;
  custom_audience_id: string;
  adgroup_ids: string;
  action_mode: string;
  usage_mode?: string;
}


export interface DmpCustomAudienceApplyResponse {}


export interface DmpCustomAudienceApplyLogParams {}


export interface DmpCustomAudienceApplyLogResponse {}


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
  action_period?: "CREATOR_RELATED" | "HASHTAG_RELATED";
  video_user_actions?: ("VIDEO_RELATED" | "WATCHED_TO_END" | "LIKED" | "COMMENTED" | "SHARED" | "CREATOR_RELATED" | "FOLLOWING" | "VIEW_HOMEPAGE" | "HASHTAG_RELATED" | "VIEW_HASHTAG")[];
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
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  saved_audience_id?: string;
};
}


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
  min_ios_version?: string[];
  min_android_version?: string[];
  operating_systems?: ("ANDROID" | "IOS")[];
  interest_category_ids?: string[];
  video_action_category_ids?: string[];
  creator_action_category_ids?: string[];
  hashtag_action_category_ids?: string[];
};
}


export interface AudienceInsightInfoResponse {}


export interface AudienceInsightOverlapParams {}


export interface AudienceInsightOverlapResponse {}

