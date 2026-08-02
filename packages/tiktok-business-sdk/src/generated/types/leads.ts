// Auto-generated types for Leads — do not edit

export interface PageLeadMockCreateParams {
  lead_source?: "INSTANT_FORM" | "DIRECT_MESSAGE";
  advertiser_id?: "ADVERTISER" | "ADMIN";
  library_id?: string;
  page_id?: "INSTANT_FORM" | "DIRECT_MESSAGE" | "LEAD_GEN";
}


export interface PageLeadMockCreateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  lead_data?: Record<string, unknown>;
  meta_data?: {
  lead_source?: "INSTANT_FORM" | "DIRECT_MESSAGE";
  lead_id?: string;
  page_id?: string;
  campaign_id?: string;
  campaign_name?: string;
  adgroup_id?: string;
  adgroup_name?: string;
  ad_id?: string;
  ad_name?: string;
  create_time?: string;
};
};
}


export interface PageLeadMockGetParams {
  lead_source?: "INSTANT_FORM" | "DIRECT_MESSAGE";
  advertiser_id?: "ADVERTISER" | "ADMIN";
  library_id?: string;
  page_id?: "INSTANT_FORM" | "DIRECT_MESSAGE" | "LEAD_GEN";
}


export interface PageLeadMockGetResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  lead_data?: Record<string, unknown>;
  meta_data?: {
  lead_source?: "INSTANT_FORM" | "DIRECT_MESSAGE";
  lead_id?: string;
  page_id?: string;
  campaign_id?: string;
  campaign_name?: string;
  adgroup_id?: string;
  adgroup_name?: string;
  ad_id?: string;
  ad_name?: string;
  create_time?: string;
};
};
}


export interface PageLeadMockDeleteParams {
  advertiser_id?: string;
  library_id?: string;
  lead_id: string;
}


export interface PageLeadMockDeleteResponse {
  code?: number;
  message?: string;
  data?: Record<string, unknown>;
  request_id?: string;
}


export interface PageLeadTaskParams {
  advertiser_id?: string;
  library_id?: string;
  ad_id?: string;
  page_id?: string;
  task_id?: string;
}


export interface PageLeadTaskResponse {
  code?: number;
  message?: string;
  data?: {
  status?: "CREATED" | "FAILED" | "RUNNING" | "SUCCEED";
  task_id?: string;
  file_name?: string;
  file_type?: string;
};
  request_id?: string;
}


export interface PageLeadTaskDownloadParams {
  advertiser_id?: string;
  library_id?: string;
  task_id: string;
}


export interface PageLeadTaskDownloadResponse {}


export interface PageLibraryGetParams {}


export interface PageLibraryGetResponse {}


export interface PageLibraryTransferParams {}


export interface PageLibraryTransferResponse {}


export interface PageFieldGetParams {
  advertiser_id: string;
  page_id: string;
}


export interface PageFieldGetResponse {
  code?: number;
  message?: string;
  data?: {
  fields?: string;
  meta_data?: {
  page_id?: string;
  create_time?: string;
  page_name?: string;
  page_url?: string;
};
};
  request_id?: string;
}


export interface LeadFieldGetParams {}


export interface LeadFieldGetResponse {}


export interface LeadGetParams {
  lead_source: "INSTANT_FORM" | "DIRECT_MESSAGE";
  advertiser_id?: string;
  library_id?: string;
  page_id?: "INSTANT_FORM" | "DIRECT_MESSAGE" | "LEAD_GEN";
}


export interface LeadGetResponse {}

