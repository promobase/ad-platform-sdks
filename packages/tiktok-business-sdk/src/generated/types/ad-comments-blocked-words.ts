// @generated
// fingerprint: sha256:6f56e5d4e51a543d5accadc7415b078f02a7c16f890363421dd9466ca5271e8b
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for Ad Comments - Blocked Words — do not edit

export interface BlockedwordCreateParams {
  advertiser_id: string;
  blocked_words: string[];
}


export interface BlockedwordCreateResponse {}


export interface BlockedwordUpdateParams {
  advertiser_id: string;
  old_word: string;
  new_word: string;
}


export interface BlockedwordUpdateResponse {
  message?: string;
  code?: number;
  request_id?: string;
}


export interface BlockedwordCheckParams {
  advertiser_id: string;
  blocked_words: string[];
}


export interface BlockedwordCheckResponse {
  results?: {
  word?: string;
  blocked?: boolean;
}[];
}


export interface BlockedwordListParams {
  advertiser_id: string;
  page_info?: {
  page_size?: number;
  page?: number;
};
}


export interface BlockedwordListResponse {
  list?: {
  bw_content?: string;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface BlockedwordDeleteParams {
  advertiser_id: string;
  blocked_words: string[];
}


export interface BlockedwordDeleteResponse {}


export interface BlockedwordTaskCreateParams {
  advertiser_id: string;
  blocked_words?: string[];
  lang?: "EN" | "JA" | "ZH";
}


export interface BlockedwordTaskCreateResponse {
  task_id?: string;
}


export interface BlockedwordTaskCheckParams {
  advertiser_id: string;
  task_id: string;
}


export interface BlockedwordTaskCheckResponse {
  task_id?: string;
  status?: string;
}


export interface BlockedwordTaskDownloadParams {
  advertiser_id: string;
  task_id: string;
}


export interface BlockedwordTaskDownloadResponse {}
