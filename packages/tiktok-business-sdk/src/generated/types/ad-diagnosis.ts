// Auto-generated types for Ad Diagnosis — do not edit

export interface ToolDiagnosisGetParams {
  advertiser_id: string;
  filtering?: {
  adgroup_ids?: string[];
  issue_category?: ("CREATIVE" | "BID_AND_BUDGET" | "EVENT_TRACK")[];
};
}


export interface ToolDiagnosisGetResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  results?: {
  adgroup_id?: string;
  adgroup_name?: string;
  diagnosis?: {
  diagnosis_time?: string;
  suggestions?: {
  creative?: {
  suggestion_time?: string;
  vid?: string;
  name?: string;
  ad_id?: string;
  issue_suggestion?: "NOBGM" | "VIDEO_LENGTH" | "VIDEO_RESOLUTION";
  suggestion_id?: string;
}[];
  bid_and_budget?: {
  suggestion_time?: string;
  suggestion_id?: string;
  issue_suggestion?: "SUGGEST_BID" | "SUGGEST_BUDGET" | "NOBID_SWITCH" | "BUDGET_EDR" | "BID_EDR";
  bid?: number;
  budget?: "SUGGEST_BID" | "SUGGEST_BUDGET" | "NOBID_SWITCH";
  suggest_bid?: number;
  suggest_budget?: "SUGGEST_BUDGET" | "NOBID_SWITCH";
  cost_floor?: number;
  bid_edr_info?: {
  recommended_bid?: number;
  bid_increase_ratio?: number;
  estimated_cost?: number;
  cost_uplift?: number;
  cost_uplift_ratio?: number;
}[];
  budget_edr_info?: {
  recommended_budget?: number;
  budget_increase_ratio?: number;
  estimated_conversion?: number;
  conversion_uplift?: number;
  conversion_uplift_ratio?: number;
  cpa?: number;
  cpa_uplift?: number;
  cpa_uplift_ratio?: number;
  impression?: number;
}[];
}[];
  event_track?: {
  suggestion_time?: string;
  suggestion_id?: string;
  issue_suggestion?: string;
  pixel_id?: string;
  pixel_code?: string;
}[];
}[];
};
}[];
};
}

