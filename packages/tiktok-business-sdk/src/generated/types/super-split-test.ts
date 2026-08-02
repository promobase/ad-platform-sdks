// Auto-generated types for Super Split Test — do not edit

export interface SplitTestCreateParams {
  advertiser_id: string;
  split_test_level?: "ADGROUP" | "CAMPAIGN";
  object_ids?: string[];
  cells?: {
  object_ids?: string[];
}[];
  test_variable?: "BIDDING_OPTIMIZATION" | "TARGTING" | "CREATIVE" | "CUSTOM";
  key_metric?: "UNSET" | "CONVERT_RATE" | "CLICK_THROUGH_RATE" | "COST_PER_SHOW" | "COST_PER_CONVERT" | "COST_PER_REACH" | "COST_PER_CLICK" | "COST_PER_FOCUSED_VIEW" | "FOCUSED_VIEW_RATE" | "COMPLETE_PAYMENT_ROAS" | "COST_PER_LANDING_PAGE_VIEW" | "LANDING_PAGE_VIEW_RATE" | "CLICK" | "REACH" | "SHOW" | "CONVERT" | "COST";
  budget?: number;
  start_time: string;
  end_time: string;
}


export interface SplitTestCreateResponse {
  split_test_group_id?: string;
}


export interface SplitTestUpdateParams {
  advertiser_id: string;
  split_test_group_id: string;
  start_time: string;
  end_time: string;
}


export interface SplitTestUpdateResponse {}


export interface SplitTestEndParams {
  advertiser_id: string;
  split_test_group_id: string;
}


export interface SplitTestEndResponse {}


export interface SplitTestResultGetParams {
  advertiser_id: string;
  split_test_group_id: string;
}


export interface SplitTestResultGetResponse {
  split_test_status?: "UNKNOWN" | "NOT_STARTED" | "IN_PROGRESS" | "REPORTING_GENERATING" | "COMPLETED" | "CANCELLED";
  split_test_level?: "ADGROUP" | "CAMPAIGN";
  object_info?: {
  adgroup_id?: string;
  adgroup_name?: string;
  optimization_goal?: string;
}[];
  cells?: {
  object_ids?: string[];
}[];
  test_variable?: "BIDDING_OPTIMIZATION" | "TARGTING" | "CREATIVE" | "CUSTOM";
  key_metric?: string;
  start_time?: string;
  end_time?: string;
  p_value_info?: {
  metric?: string;
  p_value?: number;
}[];
}


export interface SplitTestPromoteParams {
  advertiser_id: string;
  split_test_group_id: string;
  winning_object_id: string;
}


export interface SplitTestPromoteResponse {}
