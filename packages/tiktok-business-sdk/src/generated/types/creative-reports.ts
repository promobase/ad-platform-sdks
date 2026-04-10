// Auto-generated types for Creative Reports — do not edit

export interface ReportAdBenchmarkGetParams {
  advertiser_id: string;
  compare_time_window?: string;
  dimensions: ("LOCATION" | "AD_CATEGORY" | "EXTERNAL_ACTION" | "PLACEMENT")[];
  metrics_fields?: string[];
  filtering: {
  ad_ids?: string[];
  adgroup_ids?: string[];
  campaign_ids?: string[];
};
  sort_field?: string;
  sort_type?: "ASC" | "DES";
  page?: number;
  page_size?: number;
}


export interface ReportAdBenchmarkGetResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  compare_date?: string;
  list?: {
  info?: {
  ad_id?: string;
  location?: string;
  placement?: string;
  ad_category?: number;
  external_action?: string;
};
  metrics?: {
  metric_name?: number;
};
};
  page_info?: {
  page?: number;
  total_page?: number;
  page_size?: number;
  total_number?: number;
};
};
}


export interface ReportVideoPerformanceGetParams {
  advertiser_id: string;
  report_type?: "AD" | "VIDEO";
  metrics_fields?: string[];
  filtering: "AD" | "VIDEO";
  sort_field?: string;
  sort_type?: "ASC" | "DES";
  page?: number;
  page_size?: number;
}


export interface ReportVideoPerformanceGetResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  list?: {
  info?: {
  ad_id?: string;
  video_id?: string;
  duration?: number;
};
  metrics?: {
  metric_name?: number[];
};
};
  page_info?: {
  page?: number;
  total_page?: number;
  page_size?: number;
  total_number?: number;
};
};
}

