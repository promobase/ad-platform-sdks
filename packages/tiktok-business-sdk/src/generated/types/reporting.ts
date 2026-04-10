// Auto-generated types for Reporting — do not edit

export interface ReportTaskCreateParams {
  advertiser_id?: string;
  advertiser_ids?: string[];
  service_type?: string;
  report_type: string;
  data_level?: string;
  dimensions: string[];
  metrics?: string[];
  start_date?: string;
  end_date?: string;
  query_lifetime?: boolean;
  order_field?: string;
  order_type?: string;
  enable_report_title_translation?: boolean;
  output_format?: string;
  file_name?: string;
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
  status?: string;
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

