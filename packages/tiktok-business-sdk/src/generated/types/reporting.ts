// Auto-generated types for Reporting — do not edit

export interface ReportIntegratedGetParams {
  advertiser_id?: "BASIC" | "AUDIENCE" | "PLAYABLE_MATERIAL" | "CATALOG" | "TT_SHOP" | "BC";
  advertiser_ids?: ("BASIC" | "AUDIENCE")[];
  bc_id?: "BASIC" | "AUDIENCE" | "PLAYABLE_MATERIAL" | "CATALOG" | "TT_SHOP" | "BC";
  service_type?: "BC" | "AUCTION" | "RESERVATION" | "RESERVATION_TOP_VIEW";
  report_type: "BASIC" | "AUDIENCE" | "PLAYABLE_MATERIAL" | "CATALOG" | "BC" | "TT_SHOP" | "AUCTION";
  data_level?: "BC" | "BASIC" | "AUDIENCE" | "CATALOG" | "AUCTION_AD" | "AUCTION_ADGROUP" | "AUCTION_CAMPAIGN" | "AUCTION_ADVERTISER" | "RESERVATION_AD" | "RESERVATION_ADGROUP" | "RESERVATION_CAMPAIGN" | "RESERVATION_ADVERTISER" | "STATUS_NOT_DELETE" | "STATUS_ALL" | "TT_SHOP";
  dimensions: string[];
  metrics?: ("BASIC" | "AUDIENCE" | "PLAYABLE_MATERIAL" | "CATALOG" | "BC" | "TT_SHOP")[];
  enable_total_metrics?: boolean;
  start_date?: "BC" | "false";
  end_date?: "BC" | "false";
  query_lifetime?: "BASIC" | "PLAYABLE_MATERIAL";
  multi_adv_report_in_utc_time?: "false" | "true";
  order_field?: string;
  order_type?: "ASC" | "DESC";
  filtering?: ("BASIC" | "AUDIENCE" | "PLAYABLE_MATERIAL" | "CATALOG" | "BC" | "TT_SHOP")[];
  query_mode?: "BC" | "REGULAR" | "CHUNK";
  page?: number;
  page_size?: number;
}


export interface ReportIntegratedGetResponse {
  "X-Tt-Ads-Throttle"?: string;
}


export interface ReportTaskCreateParams {
  advertiser_id?: string;
  advertiser_ids?: ("BASIC" | "AUDIENCE")[];
  service_type?: "AUCTION" | "RESERVATION" | "RESERVATION_TOP_VIEW";
  report_type: "BASIC" | "AUDIENCE" | "PLAYABLE_MATERIAL" | "CATALOG" | "AUCTION";
  data_level?: "BASIC" | "AUDIENCE" | "CATALOG" | "AUCTION_AD" | "AUCTION_ADGROUP" | "AUCTION_CAMPAIGN" | "AUCTION_ADVERTISER" | "RESERVATION_AD" | "RESERVATION_ADGROUP" | "RESERVATION_CAMPAIGN" | "RESERVATION_ADVERTISER";
  dimensions: ("BASIC" | "AUDIENCE" | "CATALOG")[];
  metrics?: string[];
  start_date?: string;
  end_date?: string;
  query_lifetime?: "false" | "true";
  order_field?: string;
  order_type?: "ASC" | "DESC";
  enable_report_title_translation?: "AD ID" | "BASIC" | "AUDIENCE" | "false" | "true";
  output_format?: "CSV_STRING" | "CSV_DOWNLOAD" | "XLSX_DOWNLOAD";
  file_name?: "CSV_DOWNLOAD" | "XLSX_DOWNLOAD";
  filtering?: Record<string, unknown>[];
}


export interface ReportTaskCreateResponse {
  code?: number;
  message?: string;
  data?: {
  task_id?: string;
};
  request_id?: string;
}


export interface ReportTaskCheckParams {
  advertiser_id: string;
  task_id: string;
}


export interface ReportTaskCheckResponse {
  code?: number;
  message?: string;
  data?: {
  status?: "QUEUING" | "PROCESSING" | "SUCCESS" | "FAILED" | "CANCELED";
  message?: string;
};
  request_id?: string;
}


export interface ReportTaskDownloadParams {
  advertiser_id: string;
  task_id: string;
}


export interface ReportTaskDownloadResponse {}


export interface ReportTaskCancelParams {}


export interface ReportTaskCancelResponse {}

