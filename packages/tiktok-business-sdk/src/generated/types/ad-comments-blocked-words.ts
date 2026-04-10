// Auto-generated types for Ad Comments - Blocked Words — do not edit

export interface BlockedwordCreateParams {
  advertiser_id: string;
  blocked_words: string[];
}


export interface BlockedwordCreateResponse {
  message?: string;
  code?: number;
  data?: Record<string, unknown>;
  request_id?: string;
}


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
  message?: string;
  code?: number;
  data?: {
  results?: {
  word?: string;
  blocked?: boolean;
}[];
};
  request_id?: string;
}


export interface BlockedwordListParams {
  advertiser_id: string;
  page_info?: {
  page_size?: number;
  page?: number;
};
}


export interface BlockedwordListResponse {
  message?: string;
  code?: number;
  data?: {
  list?: {
  bw_content?: string;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
};
  request_id?: string;
}


export interface BlockedwordDeleteParams {
  advertiser_id: string;
  blocked_words: string[];
}


export interface BlockedwordDeleteResponse {
  message?: string;
  code?: number;
  data?: Record<string, unknown>;
  request_id?: string;
}


export interface BlockedwordTaskCreateParams {
  advertiser_id: string;
  blocked_words?: string[];
  language?: string;
}


export interface BlockedwordTaskCreateResponse {
  message?: string;
  code?: number;
  data?: {
  task_id?: string;
};
  request_id?: string;
}


export interface BlockedwordTaskCheckParams {
  advertiser_id: string;
  task_id: string;
}


export interface BlockedwordTaskCheckResponse {
  message?: string;
  code?: number;
  data?: {
  task_id?: string;
  status?: string;
};
  request_id?: string;
}


export interface BlockedwordTaskDownloadParams {
  advertiser_id: string;
  task_id: string;
}


export interface BlockedwordTaskDownloadResponse {}

