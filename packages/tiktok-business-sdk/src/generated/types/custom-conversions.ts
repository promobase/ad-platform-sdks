// Auto-generated types for Custom Conversions — do not edit

export interface CustomConversionListParams {
  advertiser_id: string;
  event_source_type: "PIXEL" | "APP";
  event_source_id: string;
  search_keyword?: string;
  sort_field?: "CREATE_TIME" | "TOTAL_COUNT";
  sort_type?: "DESC" | "ASC";
  page?: number;
  page_size?: number;
}


export interface CustomConversionListResponse {
  list?: {
  custom_conversion_id?: string;
  name?: string;
  description?: string;
  event_source_type?: "PIXEL" | "APP";
  event_source_id?: string;
  activity_info?: {
  activity_status?: "NO_RECENT_ACTIVITY" | "ACTIVE" | "WAITING_FOR_ACTIVITY";
  total_count?: number;
  last_record_time?: string;
};
  optimization_event?: string;
  rules?: {
  parameter?: "BRAND" | "CONTENT_CATEGORY" | "CONTENT_ID" | "CONTENT_NAME" | "CONTENT_TYPE" | "CURRENCY" | "DESCRIPTION" | "EVENT_ID" | "NUM_ITEMS" | "PRICE" | "SEARCH_STRING" | "STATUS" | "URL" | "VALUE";
  operator?: string;
  values?: string[];
  create_time?: string;
  update_time?: string;
}[];
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface CustomConversionGetParams {
  advertiser_id: string;
  custom_conversion_id: string;
  event_source_type: "PIXEL" | "APP";
  event_source_id: string;
}


export interface CustomConversionGetResponse {
  custom_conversion_id?: string;
  name?: string;
  description?: string;
  event_source_type?: "PIXEL" | "APP";
  event_source_id?: string;
  activity_status?: "NO_RECENT_ACTIVITY" | "ACTIVE" | "WAITING_FOR_ACTIVITY";
  optimization_event?: string;
  rules?: {
  parameter?: "BRAND" | "CONTENT_CATEGORY" | "CONTENT_ID" | "CONTENT_NAME" | "CONTENT_TYPE" | "CURRENCY" | "DESCRIPTION" | "EVENT_ID" | "NUM_ITEMS" | "PRICE" | "SEARCH_STRING" | "STATUS" | "URL" | "VALUE";
  operator?: string;
  values?: string[];
  create_time?: string;
  update_time?: string;
}[];
}


export interface CustomConversionCreateParams {
  advertiser_id: string;
  name: string;
  description?: string;
  event_source_type: "PIXEL" | "APP";
  event_source_id: string;
  optimization_event?: string;
  custom_event_type?: string;
  rules: {
  parameter: "BRAND" | "CONTENT_CATEGORY" | "CONTENT_ID" | "CONTENT_NAME" | "CONTENT_TYPE" | "CURRENCY" | "DESCRIPTION" | "EVENT_ID" | "NUM_ITEMS" | "PRICE" | "SEARCH_STRING" | "STATUS" | "URL" | "VALUE";
  operator: string;
  values: string[];
}[];
}


export interface CustomConversionCreateResponse {
  custom_conversion_id?: string;
}


export interface CustomConversionUpdateParams {
  advertiser_id: string;
  custom_conversion_id: string;
  name?: string;
  description?: string;
}


export interface CustomConversionUpdateResponse {}


export interface CustomConversionDeleteParams {
  advertiser_id: string;
  custom_conversion_id: string;
}


export interface CustomConversionDeleteResponse {}
