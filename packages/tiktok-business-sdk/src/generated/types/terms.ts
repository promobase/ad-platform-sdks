// Auto-generated types for Terms — do not edit

export interface TermGetParams {
  advertiser_id: string;
  lang?: string;
  term_type: string;
}


export interface TermGetResponse {
  code?: number;
  message?: string;
  data?: {
  terms?: string[];
};
  request_id?: string;
}


export interface TermConfirmParams {
  advertiser_id: string;
  term_type: string;
}


export interface TermConfirmResponse {
  code?: number;
  message?: string;
  data?: Record<string, unknown>;
  request_id?: string;
}


export interface TermCheckParams {
  advertiser_id: string;
  term_type: string;
}


export interface TermCheckResponse {
  code?: number;
  message?: string;
  data?: {
  confirmed?: boolean;
};
  request_id?: string;
}

