// Auto-generated types for Reporting — do not edit

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

