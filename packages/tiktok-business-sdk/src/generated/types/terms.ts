// Auto-generated types for Terms — do not edit

export interface TermGetParams {
  advertiser_id: string;
  lang?: "EN" | "JA" | "ZH";
  term_type: string;
}


export interface TermGetResponse {
  terms?: string[];
}


export interface TermConfirmParams {
  advertiser_id: string;
  term_type: string;
}


export interface TermConfirmResponse {}


export interface TermCheckParams {
  advertiser_id: string;
  term_type: string;
}


export interface TermCheckResponse {
  confirmed?: boolean;
}
