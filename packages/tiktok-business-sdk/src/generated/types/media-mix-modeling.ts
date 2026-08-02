// Auto-generated types for Media Mix Modeling — do not edit

export interface MmmApiCreateParams {
  advertiser_ids: string[];
  request_info: {
  targets: {
  advertiser_id: string;
  campaign_ids?: string[];
  brand?: string;
  sub_brand?: string;
}[];
  from_date: string;
  to_date: string;
  country_code?: string[];
  media_type?: string;
};
  email?: string;
}


export interface MmmApiCreateResponse {
  mmm_request_id?: string;
}


export interface MmmApiCheckParams {
  mmm_request_id: string;
}


export interface MmmApiCheckResponse {
  status?: string;
  message?: string;
}


export interface MmmApiDownloadParams {
  mmm_request_id: string;
}


export interface MmmApiDownloadResponse {
  download_url?: string;
}


export interface MmmApiHistoryParams {
  from_date: string;
  end_date: string;
}


export interface MmmApiHistoryResponse {
  historical_requests?: string[];
}
