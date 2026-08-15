// @generated
// fingerprint: sha256:666b3c773961a646e1effe609f120a312ed7cd8e4e53882d33f752c840e78d97
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for Leads — do not edit

export interface PageLeadMockCreateParams {
  lead_source?: "INSTANT_FORM" | "DIRECT_MESSAGE";
  advertiser_id?: string;
  library_id?: string;
  page_id?: string;
}


export interface PageLeadMockCreateResponse {
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
}


export interface PageLeadMockGetParams {
  lead_source?: "INSTANT_FORM" | "DIRECT_MESSAGE";
  advertiser_id?: string;
  library_id?: string;
  page_id?: string;
}


export interface PageLeadMockGetResponse {
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
}


export interface PageLeadMockDeleteParams {
  advertiser_id?: string;
  library_id?: string;
  lead_id: string;
}


export interface PageLeadMockDeleteResponse {}


export interface PageLeadTaskParams {
  advertiser_id?: string;
  library_id?: string;
  ad_id?: string;
  page_id?: string;
  task_id?: string;
}


export interface PageLeadTaskResponse {
  status?: "CREATED" | "FAILED" | "RUNNING" | "SUCCEED";
  task_id?: string;
  file_name?: string;
  file_type?: string;
}


export interface PageLeadTaskDownloadParams {
  advertiser_id?: string;
  library_id?: string;
  task_id: string;
}


export interface PageLeadTaskDownloadResponse {}


export interface PageLibraryGetParams {
  page?: number;
  page_size?: number;
}


export interface PageLibraryGetResponse {
  list?: {
  library_id?: string;
  library_name?: string;
  advertiser_id?: string;
  create_time?: string;
  update_time?: string;
}[];
}


export interface PageLibraryTransferParams {
  advertiser_id: string;
  bc_id: string;
}


export interface PageLibraryTransferResponse {
  library_id?: string;
}


export interface PageFieldGetParams {
  advertiser_id: string;
  page_id: string;
}


export interface PageFieldGetResponse {
  fields?: string;
  meta_data?: {
  page_id?: string;
  create_time?: string;
  page_name?: string;
  page_url?: string;
};
}


export interface LeadFieldGetParams {
  lead_source: "INSTANT_FORM" | "DIRECT_MESSAGE";
  advertiser_id?: string;
  library_id?: string;
  page_id?: string;
}


export interface LeadFieldGetResponse {
  fields?: string[];
  meta_data?: {
  create_time?: string;
  page_id?: string;
  page_name?: string;
  page_url?: string;
};
}


export interface LeadGetParams {
  lead_source: "INSTANT_FORM" | "DIRECT_MESSAGE";
  advertiser_id?: string;
  library_id?: string;
  page_id?: string;
}


export interface LeadGetResponse {
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
}
