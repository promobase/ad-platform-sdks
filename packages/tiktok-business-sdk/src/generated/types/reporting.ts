// @generated
// fingerprint: sha256:2e062d5f3e6de55249f1eda67b7b7c6617234cb74db57201b013067962c6805d
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for Reporting — do not edit

export interface ReportIntegratedGetParams {
  advertiser_id?: string;
  advertiser_ids?: string[];
  bc_id?: string;
  service_type?: "AUCTION" | "RESERVATION";
  report_type: "BASIC" | "AUDIENCE" | "PLAYABLE_MATERIAL" | "CATALOG" | "BC" | "TT_SHOP";
  data_level?: "AUCTION_AD" | "AUCTION_ADGROUP" | "AUCTION_CAMPAIGN" | "AUCTION_ADVERTISER" | "RESERVATION_AD" | "RESERVATION_ADGROUP" | "RESERVATION_CAMPAIGN" | "RESERVATION_ADVERTISER";
  dimensions: string[];
  metrics?: string[];
  enable_total_metrics?: boolean;
  start_date?: string;
  end_date?: string;
  query_lifetime?: boolean;
  multi_adv_report_in_utc_time?: boolean;
  order_field?: string;
  order_type?: "ASC" | "DESC";
  filtering?: {
  field_name?: string;
  filter_type?: "IN" | "CONTAIN_ANY_OF" | "MATCH" | "NOT_IN" | "GREATER_EQUAL" | "GREATER_THAN" | "LOWER_EQUAL" | "LOWER_THAN" | "BETWEEN";
  filter_value?: string;
}[];
  query_mode?: "REGULAR" | "CHUNK";
  page?: number;
  page_size?: number;
}


export interface ReportIntegratedGetResponse {
  total_metrics?: {
  campaign_name?: string;
  spend?: string;
  impressions?: string;
  reach?: string;
};
  list?: {
  dimensions?: {
  advertiser_id?: string;
  campaign_id?: string;
  adgroup_id?: string;
  ad_id?: string;
  ad_id_v2?: string;
  stat_time_day?: string;
  stat_time_hour?: string;
  ac?: string;
  age?: string;
  country_code?: string;
  interest_category?: string;
  interest_category_v2?: string;
  gender?: "FEMALE" | "MALE" | "NONE";
  language?: string;
  placement?: string;
  platform?: string;
  contextual_tag?: string;
};
  metrics?: {
  campaign_name?: string;
  spend?: string;
  impressions?: string;
  reach?: string;
  advertiser_id?: string;
  timezone?: string;
  currency?: string;
  campaign_automation_type?: "MANUAL" | "SMART_PLUS" | "UPGRADED_SMART_PLUS";
  ad_id_v2?: string;
  ad_text_list?: string[];
  call_to_action_list?: string[];
  ad_profile_image_list?: string[];
  ad_url_list?: string[];
  image_mode_list?: string[];
  image_info_list?: string[];
  ad_display_name_list?: string[];
  identity_type_list?: string[];
  profile_image_list?: string[];
};
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface ReportTaskCreateParams {
  advertiser_id?: string;
  advertiser_ids?: string[];
  service_type?: "AUCTION" | "RESERVATION";
  report_type: "BASIC" | "AUDIENCE" | "PLAYABLE_MATERIAL" | "CATALOG";
  data_level?: "AUCTION_AD" | "AUCTION_ADGROUP" | "AUCTION_CAMPAIGN" | "AUCTION_ADVERTISER" | "RESERVATION_AD" | "RESERVATION_ADGROUP" | "RESERVATION_CAMPAIGN" | "RESERVATION_ADVERTISER";
  dimensions: string[];
  metrics?: string[];
  start_date?: string;
  end_date?: string;
  query_lifetime?: boolean;
  order_field?: string;
  order_type?: "ASC" | "DESC";
  enable_report_title_translation?: boolean;
  output_format?: "CSV_STRING" | "CSV_DOWNLOAD" | "XLSX_DOWNLOAD";
  file_name?: string;
  filtering?: Record<string, unknown>[];
}


export interface ReportTaskCreateResponse {
  task_id?: string;
}


export interface ReportTaskCheckParams {
  advertiser_id: string;
  task_id: string;
}


export interface ReportTaskCheckResponse {
  status?: "QUEUING" | "PROCESSING" | "SUCCESS" | "FAILED" | "CANCELED";
  message?: string;
}


export interface ReportTaskDownloadParams {
  advertiser_id: string;
  task_id: string;
}


export interface ReportTaskDownloadResponse {
  download_url?: string;
  file_name?: string;
  output_format?: "CSV_DOWNLOAD" | "XLSX_DOWNLOAD";
}


export interface ReportTaskCancelParams {
  advertiser_id: string;
  task_id: string;
}


export interface ReportTaskCancelResponse {
  status?: string;
}
