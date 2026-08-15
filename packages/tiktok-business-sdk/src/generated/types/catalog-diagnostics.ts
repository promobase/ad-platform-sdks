// @generated
// fingerprint: sha256:7addb32e7906ab6ee84257a7244f85aecac69356f005c95f8e131073f8716014
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for Catalog Diagnostics — do not edit

export interface DiagnosticCatalogParams {
  catalog_id: string;
  bc_id: string;
  feed_id?: string;
  filtering?: {
  issue_level?: "CRITICAL" | "WARNING";
  issue_category?: "PRODUCT_ATTRIBUTES" | "PRODUCT_REVIEW" | "CATALOG" | "PIXEL_OR_EVENT" | "FILE_UPLOAD_OR_FEED";
};
  lang?: string;
  page?: number;
  page_size?: number;
}


export interface DiagnosticCatalogResponse {
  diagnostic_date?: string;
  issues?: {
  issue_id?: string;
  issue_title?: string;
  reason_and_suggestion?: string;
  issue_level?: "CRITICAL" | "WARNING";
  issue_category?: "PRODUCT_ATTRIBUTES" | "PRODUCT_REVIEW" | "CATALOG" | "PIXEL_OR_EVENT" | "FILE_UPLOAD_OR_FEED";
  issue_product_field?: string;
  affected_product_count?: number;
  affected_product_percentage?: number;
  example_affected_products?: Record<string, unknown>[];
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface DiagnosticCatalogProductTaskCreateParams {
  catalog_id: string;
  bc_id: string;
  feed_id?: string;
  lang?: string;
  issue_id?: string;
}


export interface DiagnosticCatalogProductTaskCreateResponse {
  task_id?: string;
}


export interface DiagnosticCatalogProductTaskGetParams {
  catalog_id: string;
  bc_id: string;
  task_id: string;
}


export interface DiagnosticCatalogProductTaskGetResponse {
  status?: "SUCCEED" | "PROCESSING" | "FAILED";
  diagnostic_file_url?: string;
}


export interface DiagnosticCatalogEventsourceIssueParams {
  bc_id: string;
  catalog_id: string;
  event_source_type: "APP" | "PIXEL";
  app_id?: string;
  pixel_code?: string;
  event_type?: "VIEW_CONTENT" | "ADD_TO_CART" | "PURCHASE";
  time_range?: "YESTERDAY" | "LAST_7_DAYS" | "LAST_30_DAYS";
}


export interface DiagnosticCatalogEventsourceIssueResponse {
  list?: {
  diagnostic_result?: string;
  level?: "ERROR" | "WARNING" | "INFO";
  diagnostic_solution?: string;
}[];
}


export interface DiagnosticCatalogEventsourceMetricParams {
  bc_id: string;
  catalog_id: string;
  event_source_type: "APP" | "PIXEL";
  app_id?: string;
  pixel_code?: string;
  event_type?: "VIEW_CONTENT" | "ADD_TO_CART" | "PURCHASE";
  time_range?: "YESTERDAY" | "LAST_7_DAYS" | "LAST_30_DAYS";
}


export interface DiagnosticCatalogEventsourceMetricResponse {
  list?: {
  available_type?: "EVENT_RECEIVED" | "EVENT_WITH_CONTENT_ID" | "EVENT_WITH_CONTENT_ID_MATCHING_INVENTORY";
  event_details?: {
  date?: string;
  count?: string;
  percentage?: string;
}[];
}[];
}
