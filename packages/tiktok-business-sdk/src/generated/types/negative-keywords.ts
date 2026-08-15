// @generated
// fingerprint: sha256:9fa74d50396df45933ce01e698eacebaee44cd64f160127f69216f77ef77588e
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for Negative Keywords — do not edit

export interface SearchAdNegativeKeywordGetParams {
  advertiser_id: string;
  object_type: "CAMPAIGN" | "ADGROUP";
  object_id: string;
  page?: number;
  page_size?: number;
}


export interface SearchAdNegativeKeywordGetResponse {
  keywords?: {
  keyword_id?: string;
  name?: string;
  match_type?: "PRECISE_WORD" | "PHRASE_WORD" | "BROAD_WORD";
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface SearchAdNegativeKeywordAddParams {
  advertiser_id: string;
  object_type: "CAMPAIGN" | "ADGROUP";
  object_ids: string[];
  replace?: boolean;
  keywords: {
  name: string;
  match_type?: "PRECISE_WORD" | "PHRASE_WORD" | "BROAD_WORD";
}[];
}


export interface SearchAdNegativeKeywordAddResponse {}


export interface SearchAdNegativeKeywordUpdateParams {
  advertiser_id: string;
  object_type: "CAMPAIGN" | "ADGROUP";
  object_id: string;
  old_keyword_id: string;
  keyword: {
  name: string;
  match_type?: "PRECISE_WORD" | "PHRASE_WORD" | "BROAD_WORD";
};
}


export interface SearchAdNegativeKeywordUpdateResponse {
  new_keyword_id?: string;
}


export interface SearchAdNegativeKeywordDeleteParams {
  advertiser_id: string;
  object_type: "CAMPAIGN" | "ADGROUP";
  object_id: string;
  keyword_ids: string[];
}


export interface SearchAdNegativeKeywordDeleteResponse {}


export interface SearchAdNegativeKeywordDownloadParams {
  advertiser_id: string;
  object_type: "CAMPAIGN" | "ADGROUP";
  object_id: string;
}


export interface SearchAdNegativeKeywordDownloadResponse {}
