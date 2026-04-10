// Auto-generated types for Audience — do not edit

export interface DmpCustomAudienceFileUploadParams {}


export interface DmpCustomAudienceFileUploadResponse {}


export interface DmpCustomAudienceCreateParams {
  advertiser_id: string;
  custom_audience_name: string;
  audience_sub_type?: string;
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
  action?: string;
  id_schema: string[];
  batch_data: object[][];
  id?: string;
  audience_ids?: string[];
}


export interface SegmentMappingResponse {}


export interface DmpCustomAudienceUpdateParams {
  advertiser_id: string;
  custom_audience_id: string;
  custom_audience_name?: string;
  audience_sub_type?: string;
  file_paths?: string[];
  action?: string;
}


export interface DmpCustomAudienceUpdateResponse {}


export interface DmpCustomAudienceListParams {}


export interface DmpCustomAudienceListResponse {}


export interface DmpCustomAudienceGetParams {}


export interface DmpCustomAudienceGetResponse {}


export interface DmpCustomAudienceRuleCreateParams {
  advertiser_id: string;
  custom_audience_name: string;
  audience_type: string;
  audience_sub_type?: string;
  retention_in_days?: number;
  is_auto_refresh?: boolean;
  identity_id?: string;
  identity_type?: string;
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
  field?: string;
  operator?: string;
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
  field?: string;
  operator?: string;
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
  audience_sub_type?: string;
  lookalike_spec: {
  source_audience_id: string;
  include_source: boolean;
  mobile_os: string;
  placements: string[];
  location_ids: string[];
  audience_size: string;
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
  gender?: string;
  age_groups?: string[];
  languages?: string[];
  audience_ids?: string[];
  excluded_audience_ids?: string[];
  interest_category_ids?: string[];
  interest_keyword_ids?: string[];
  actions?: {
  action_category_ids?: string[];
  action_scene?: string;
  action_period?: number;
  video_user_actions?: string[];
}[];
  operating_systems?: string[];
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
  gender?: string[];
  device_price_ranges?: number[];
  min_ios_version?: string[];
  min_android_version?: string[];
  operating_systems?: string[];
  interest_category_ids?: string[];
  video_action_category_ids?: string[];
  creator_action_category_ids?: string[];
  hashtag_action_category_ids?: string[];
};
}


export interface AudienceInsightInfoResponse {}


export interface AudienceInsightOverlapParams {}


export interface AudienceInsightOverlapResponse {}

