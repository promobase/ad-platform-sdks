// @generated
// fingerprint: sha256:0b0bd3c06af3a527940e26bac1132f10e2ab122d2e7036abc933199fd9929358
// DO NOT EDIT: generated file; changes will be overwritten.
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
