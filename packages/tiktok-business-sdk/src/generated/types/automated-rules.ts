// @generated
// fingerprint: sha256:2979c6c2a769567530d2c25302456cde710e71fb548233e31dfdfa3a2f2c51c5
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for Automated Rules — do not edit

export interface OptimizerRuleCreateParams {
  advertiser_id: string;
  rules?: {
  apply_objects: {
  dimension: "CAMPAIGN" | "ADGROUP" | "AD";
  dimension_ids?: string[];
  pre_condition_type: string;
}[];
  conditions: {
  subject_type: "COST" | "DAILY_BUDGET_SPENDING_RATE" | "LIFETIME_BUDGET_SPENDING_RATE" | "IMPRESSION" | "CLICK" | "CONVERSION" | "CONVERSION_SKAN" | "CVR" | "CVR_SKAN" | "CPA" | "CPM" | "CPC" | "CTR" | "COST_PER_RESULT" | "RESULT" | "RESULT_RATE" | "BID_STRATEGY" | "COST_CAP" | "BID_CAP" | "MAX_CONVERSION" | "LOWEST_COST" | "OPTIMIZATION_GOAL" | "CONVERT" | "SHOW" | "REACH" | "INSTALL" | "IN_APP_EVENT" | "LEAD_GENERATION" | "TWO_SECOND_VIDEO_VIEW" | "SIX_SECOND_VIDEO_VIEW" | "OBJECTIVE" | "TRAFFIC" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "VIDEO_VIEWS" | "NAME" | "DAYS_SINCE_CREATION" | "GT" | "LT" | "BETWEEN" | "MATCH" | "NO_CONDITION" | "ROAS_PURCHASE" | "ROAS_IMPRESSION_ADS" | "ROAS_PURCHASE_SKAN" | "ROAS_COMPLETE_PAYMENT" | "ROAS_PURCHASES_ONSITE" | "NOT_REAL_TIME_CPA" | "NOT_REAL_TIME_CONVERSION" | "NOT_REAL_TIME_CVR";
  range_type?: "TODAY" | "YESTERDAY" | "PAST_THREE_DAYS" | "PAST_FIVE_DAYS" | "PAST_SEVEN_DAYS" | "LIFETIME";
  match_type?: "GT" | "LT" | "BETWEEN" | "MATCH";
  values?: string[];
  calculation_type?: string;
}[];
  actions: {
  subject_type: "TURN_ON" | "TURN_OFF" | "MESSAGE" | "DAILY_BUDGET" | "LIFETIME_BUDGET" | "BID";
  action_type?: "INCREASE" | "DECREASE" | "ADJUST_TO";
  value_type?: "EXACT" | "PERCENT";
  value?: {
  value?: number;
  limit?: number;
};
  frequency_info?: {
  type?: "ONLY_ONCE" | "ONCE_IN_24_H" | "ONCE_IN_48_H" | "ONCE_IN_1_W" | "CUSTOM";
  custom_frequency_type?: "N_MINTUE_Y_TIMES" | "N_HOUR_Y_TIMES" | "N_DAY_Y_TIMES";
  time?: number;
  count?: number;
};
}[];
  notification: {
  notification_type: "TASK_FINISH" | "MESSAGE" | "ANY_CHANGES" | "NOT_NOTIFICATION";
  email_setting?: {
  notification_period?: "EVERY_TIME" | "TIME_SCHEDULE";
  email_exec_time?: string[];
  no_result_notification?: boolean;
  mute_option?: "MUTE" | "UNMUTE";
};
};
  rule_exec_info: {
  exec_time_type: "PER_HALF_HOUR" | "CUSTOM" | "HALF_HOUR_IN_SPECIFIC_TIME_PERIOD" | "SPECIFIC_TIME_ACCURATE_ONCE";
  exec_time?: string;
  time_period_info?: {
  num?: string;
  start_time?: string;
  end_time?: string;
  date_type?: "DAY" | "WEEK" | "MONTH";
}[];
};
  tzone?: string;
  name: string;
}[];
  lang?: "ZH" | "EN" | "JA";
}


export interface OptimizerRuleCreateResponse {
  rule_ids?: string[];
}


export interface OptimizerRuleGetParams {
  advertiser_id: string;
  rule_ids: string[];
}


export interface OptimizerRuleGetResponse {
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
  rules?: {
  apply_objects?: {
  dimesion?: "CAMPAIGN" | "ADGROUP" | "AD";
  dimension_ids?: string[];
  pre_condition_type?: string;
  bind_type?: "BIND" | "UNBIND";
}[];
  conditions?: {
  subject_type?: "COST" | "DAILY_BUDGET_SPENDING_RATE" | "LIFETIME_BUDGET_SPENDING_RATE" | "IMPRESSION" | "CLICK" | "CONVERSION" | "CONVERSION_SKAN" | "CVR" | "CVR_SKAN" | "CPA" | "CPM" | "CPC" | "CTR" | "COST_PER_RESULT" | "RESULT" | "RESULT_RATE" | "BID_STRATEGY" | "OPTIMIZATION_GOAL" | "OBJECTIVE" | "NAME" | "DAYS_SINCE_CREATION" | "NO_CONDITION" | "ROAS_PURCHASE" | "ROAS_IMPRESSION_ADS" | "ROAS_PURCHASE_SKAN" | "ROAS_COMPLETE_PAYMENT" | "ROAS_PURCHASES_ONSITE" | "NOT_REAL_TIME_CPA" | "NOT_REAL_TIME_CONVERSION" | "NOT_REAL_TIME_CVR";
  range_type?: "TODAY" | "YESTERDAY" | "PAST_THREE_DAYS" | "PAST_FIVE_DAYS" | "PAST_SEVEN_DAYS" | "LIFETIME";
  match_type?: "GT" | "LT" | "BETWEEN" | "MATCH" | "CONTAINS" | "NOT_CONTAINS" | "START_WITH" | "END_WITH" | "STRING_EQUAL";
  values?: string[];
  calculation_type?: "ALL_OBJECTS" | "OF_EACH_OBJECT";
}[];
  action?: {
  subject_type?: "TURN_ON" | "TURN_OFF" | "MESSAGE" | "DAILY_BUDGET" | "LIFERIME_BUDGET" | "BID";
  action_type?: "INCREASE" | "DECREASE" | "ADJUST_TO";
  value_type?: "EXACT" | "PERCENT";
  value?: Record<string, unknown>;
  frequency_info?: {
  type?: "ONLY_ONCE" | "ONCE_IN_24_H" | "ONCE_IN_48_H" | "ONCE_IN_1_W" | "CUSTOM";
  custom_frequency_type?: "N_MINTUE_Y_TIMES" | "N_HOUR_Y_TIMES" | "N_DAY_Y_TIMES";
  time?: number;
  count?: number;
};
}[];
  notification?: {
  notification_type?: "TASK_FINISH" | "MESSAGE" | "ANY_CHANGES" | "NOT_NOTIFICATION";
  email_setting?: {
  notification_period?: "EVERY_TIME" | "TIME_SCHEDULE";
  email_exec_time?: string[];
  no_result_notification?: boolean;
};
};
  rule_exec_info?: {
  exec_time_type?: "PER_HALF_HOUR" | "CUSTOM" | "HALF_HOUR_IN_SPECIFIC_TIME_PERIOD" | "SPECIFIC_TIME_ACCURATE_ONCE";
  exec_time?: string;
  time_period_info?: {
  num?: string;
  start_time?: string;
  end_time?: string;
  date_type?: "DAY" | "WEEK" | "MONTH";
}[];
};
  last_check_result_summary?: {
  check_datetime?: string;
  exec_datetime?: string;
  change_success?: number;
  no_change?: number;
  change_fail?: number;
  task_exec_id?: string;
};
  rule_id?: string;
  name?: string;
  rule_status?: "ON" | "OFF" | "DELETED";
  create_datetime?: string;
}[];
}


export interface OptimizerRuleListParams {
  advertiser_id: string;
  filtering?: {
  status?: "ON" | "OFF" | "DELETED";
  rule_info?: string[];
  data_dimension?: "CAMPAIGN" | "ADGROUP" | "AD";
};
  tzone?: string;
  page?: number;
  page_size?: number;
}


export interface OptimizerRuleListResponse {
  rules?: {
  apply_objects?: {
  dimesion?: "CAMPAIGN" | "ADGROUP" | "AD";
  dimension_ids?: string[];
  pre_condition_type?: "SELECTED" | "ALL_ACTIVE_CAMPAIGN" | "ALL_ACTIVE_AD_GROUP" | "ALL_ACTIVE_AD" | "ALL_ACTIVE_AD_UNDER_SELECTED" | "ALL_INACTIVE_CAMPAIGN" | "ALL_INACTIVE_AD_GROUP" | "ALL_INACTIVE_AD" | "ALL_INACTIVE_AD_GROUP_UNDER_SELECTED" | "ALL_INACTIVE_AD_UNDER_SELECTED";
  bind_type?: "BIND" | "UNBIND";
}[];
  conditions?: {
  subject_type?: "COST" | "DAILY_BUDGET_SPENDING_RATE" | "LIFETIME_BUDGET_SPENDING_RATE" | "IMPRESSION" | "CLICK" | "CONVERSION" | "CONVERSION_SKAN" | "CVR" | "CVR_SKAN" | "CPA" | "CPM" | "CPC" | "CTR" | "COST_PER_RESULT" | "RESULT" | "RESULT_RATE" | "BID_STRATEGY" | "OPTIMIZATION_GOAL" | "OBJECTIVE" | "NAME" | "DAYS_SINCE_CREATION" | "NO_CONDITION" | "ROAS_PURCHASE" | "ROAS_IMPRESSION_ADS" | "ROAS_PURCHASE_SKAN" | "ROAS_COMPLETE_PAYMENT" | "ROAS_PURCHASES_ONSITE" | "NOT_REAL_TIME_CPA" | "NOT_REAL_TIME_CONVERSION" | "NOT_REAL_TIME_CVR";
  range_type?: "TODAY" | "YESTERDAY" | "PAST_THREE_DAYS" | "PAST_FIVE_DAYS" | "PAST_SEVEN_DAYS" | "LIFETIME";
  match_type?: "GT" | "LT" | "BETWEEN" | "MATCH" | "CONTAINS" | "NOT_CONTAINS" | "START_WITH" | "END_WITH" | "STRING_EQUAL";
  values?: string[];
  calculation_type?: "ALL_OBJECTS" | "OF_EACH_OBJECT";
}[];
  action?: {
  subject_type?: "TURN_ON" | "TURN_OFF" | "MESSAGE" | "DAILY_BUDGET" | "LIFETIME_BUDGET" | "BID";
  action_type?: "INCREASE" | "DECREASE" | "ADJUST_TO";
  value_type?: "EXACT" | "PERCENT";
  value?: Record<string, unknown>;
  frequency_info?: {
  type?: "ONLY_ONCE" | "ONCE_IN_24_H" | "ONCE_IN_48_H" | "ONCE_IN_1_W" | "CUSTOM";
  custom_frequency_type?: "N_MINTUE_Y_TIMES" | "N_HOUR_Y_TIMES" | "N_DAY_Y_TIMES";
  time?: number;
  count?: number;
};
}[];
  notification?: {
  notification_type?: "TASK_FINISH" | "MESSAGE" | "ANY_CHANGES" | "NOT_NOTIFICATION";
  email_setting?: {
  notification_period?: "EVERY_TIME" | "TIME_SCHEDULE";
  email_exec_time?: string[];
  no_result_notification?: boolean;
};
};
  rule_exec_info?: {
  exec_time_type?: "PER_HALF_HOUR" | "CUSTOM" | "HALF_HOUR_IN_SPECIFIC_TIME_PERIOD" | "SPECIFIC_TIME_ACCURATE_ONCE";
  exec_time?: string;
  time_period_info?: {
  num?: string;
  start_time?: string;
  end_time?: string;
  date_type?: "DAY" | "WEEK" | "MONTH";
}[];
};
  last_check_result_summary?: {
  check_datetime?: string;
  exec_datetime?: string;
  change_success?: number;
  no_change?: number;
  change_fail?: number;
  task_exec_id?: string;
};
  rule_id?: string;
  name?: string;
  rule_status?: "ON" | "OFF" | "DELETED";
  create_datetime?: string;
}[];
}


export interface OptimizerRuleResultListParams {
  advertiser_id: string;
  filtering?: {
  status?: "ON" | "OFF" | "DELETED";
  rule_info?: string[];
  action?: "TURN_ON" | "TURN_OFF" | "MESSAGE" | "DAILY_BUDGET" | "LIFERIME_BUDGET" | "BID";
  time?: string[];
  data_dimension?: "CAMPAIGN" | "ADGROUP";
};
  page?: number;
  page_size?: number;
  lang?: string;
}


export interface OptimizerRuleResultListResponse {
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
  rules?: {
  apply_objects?: {
  dimesion?: "CAMPAIGN" | "ADGROUP" | "AD";
  dimension_ids?: string[];
  pre_condition_type?: "SELECTED" | "ALL_ACTIVE_CAMPAIGN" | "ALL_ACTIVE_AD_GROUP" | "ALL_ACTIVE_AD" | "ALL_ACTIVE_AD_UNDER_SELECTED" | "ALL_INACTIVE_CAMPAIGN" | "ALL_INACTIVE_AD_GROUP" | "ALL_INACTIVE_AD" | "ALL_INACTIVE_AD_GROUP_UNDER_SELECTED" | "ALL_INACTIVE_AD_UNDER_SELECTED";
  bind_type?: "BIND" | "UNBIND";
}[];
  conditions?: {
  subject_type?: "COST" | "DAILY_BUDGET_SPENDING_RATE" | "LIFETIME_BUDGET_SPENDING_RATE" | "IMPRESSION" | "CLICK" | "CONVERSION" | "CONVERSION_SKAN" | "CVR" | "CVR_SKAN" | "CPA" | "CPM" | "CPC" | "CTR" | "COST_PER_RESULT" | "RESULT" | "RESULT_RATE" | "BID_STRATEGY" | "OPTIMIZATION_GOAL" | "OBJECTIVE" | "NAME" | "DAYS_SINCE_CREATION" | "NO_CONDITION" | "ROAS_PURCHASE" | "ROAS_IMPRESSION_ADS" | "ROAS_PURCHASE_SKAN" | "ROAS_COMPLETE_PAYMENT" | "ROAS_PURCHASES_ONSITE" | "NOT_REAL_TIME_CPA" | "NOT_REAL_TIME_CONVERSION" | "NOT_REAL_TIME_CVR";
  range_type?: "TODAY" | "YESTERDAY" | "PAST_THREE_DAYS" | "PAST_FIVE_DAYS" | "PAST_SEVEN_DAYS" | "LIFETIME";
  match_type?: "GT" | "LT" | "BETWEEN" | "MATCH" | "CONTAINS" | "NOT_CONTAINS" | "START_WITH" | "END_WITH" | "STRING_EQUAL";
  values?: string[];
  calculation_type?: "ALL_OBJECTS" | "OF_EACH_OBJECT";
}[];
  action?: {
  subject_type?: "TURN_ON" | "TURN_OFF" | "MESSAGE" | "DAILY_BUDGET" | "LIFERIME_BUDGET" | "BID";
  action_type?: "INCREASE" | "DECREASE" | "ADJUST_TO";
  value_type?: "EXACT" | "PERCENT";
  value?: Record<string, unknown>;
  frequency_info?: {
  type?: "ONLY_ONCE" | "ONCE_IN_24_H" | "ONCE_IN_48_H" | "ONCE_IN_1_W" | "CUSTOM";
  custom_frequency_type?: "N_MINTUE_Y_TIMES" | "N_HOUR_Y_TIMES" | "N_DAY_Y_TIMES";
  time?: number;
  count?: number;
};
}[];
  notification?: {
  notification_type?: "TASK_FINISH" | "MESSAGE" | "ANY_CHANGES" | "NOT_NOTIFICATION";
  email_setting?: {
  notification_period?: "EVERY_TIME" | "TIME_SCHEDULE";
  email_exec_time?: string[];
  no_result_notification?: boolean;
};
};
  rule_exec_info?: {
  exec_time_type?: "PER_HALF_HOUR" | "CUSTOM" | "HALF_HOUR_IN_SPECIFIC_TIME_PERIOD" | "SPECIFIC_TIME_ACCURATE_ONCE";
  exec_time?: string;
  time_period_info?: {
  num?: string;
  start_time?: string;
  end_time?: string;
  date_type?: "DAY" | "WEEK" | "MONTH";
}[];
};
  last_check_result_summary?: {
  check_datetime?: string;
  exec_datetime?: string;
  change_success?: number;
  no_change?: number;
  change_fail?: number;
  task_exec_id?: string;
};
  rule_id?: string;
  name?: string;
  rule_status?: "ON" | "OFF" | "DELETED";
  create_datetime?: string;
}[];
}


export interface OptimizerRuleResultGetParams {
  advertiser_id: string;
  result_detail: {
  exec_id: string;
  rule_id: string;
}[];
  lang?: "ZH" | "EN" | "JA";
}


export interface OptimizerRuleResultGetResponse {
  result_details?: {
  rule_id?: string;
  exec_id?: string;
  action_subject_type?: "TURN_ON" | "TURN_OFF" | "MESSAGE";
  status?: "SUCCESS" | "FAIL";
  error_message?: string;
  object_dimension?: "CAMPAIGN" | "ADGROUP" | "AD";
  object_dimension_id?: string;
  object_name?: string;
}[];
}


export interface OptimizerRuleUpdateParams {
  advertiser_id: string;
  rules?: {
  apply_objects: {
  dimension: "CAMPAIGN" | "ADGROUP" | "AD";
  dimension_ids?: string[];
  pre_condition_type: "SELECTED" | "ALL_ACTIVE_CAMPAIGN" | "ALL_ACTIVE_AD_GROUP" | "ALL_ACTIVE_AD" | "ALL_ACTIVE_AD_UNDER_SELECTED" | "ALL_INACTIVE_CAMPAIGN" | "ALL_INACTIVE_AD_GROUP" | "ALL_INACTIVE_AD" | "ALL_INACTIVE_AD_GROUP_UNDER_SELECTED" | "ALL_INACTIVE_AD_UNDER_SELECTED";
}[];
  conditions: {
  subject_type: "COST" | "DAILY_BUDGET_SPENDING_RATE" | "LIFETIME_BUDGET_SPENDING_RATE" | "IMPRESSION" | "CLICK" | "CONVERSION" | "CONVERSION_SKAN" | "CVR" | "CVR_SKAN" | "CPA" | "CPM" | "CPC" | "CTR" | "COST_PER_RESULT" | "RESULT" | "RESULT_RATE" | "BID_STRATEGY" | "COST_CAP" | "BID_CAP" | "MAX_CONVERSION" | "LOWEST_COST" | "OPTIMIZATION_GOAL" | "CONVERT" | "SHOW" | "REACH" | "INSTALL" | "IN_APP_EVENT" | "LEAD_GENERATION" | "TWO_SECOND_VIDEO_VIEW" | "SIX_SECOND_VIDEO_VIEW" | "OBJECTIVE" | "TRAFFIC" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "VIDEO_VIEWS" | "NAME" | "DAYS_SINCE_CREATION" | "GT" | "LT" | "BETWEEN" | "MATCH" | "NO_CONDITION" | "ROAS_PURCHASE" | "ROAS_IMPRESSION_ADS" | "ROAS_PURCHASE_SKAN" | "ROAS_COMPLETE_PAYMENT" | "ROAS_PURCHASES_ONSITE" | "NOT_REAL_TIME_CPA" | "NOT_REAL_TIME_CONVERSION" | "NOT_REAL_TIME_CVR";
  range_type?: "TODAY" | "YESTERDAY" | "PAST_THREE_DAYS" | "PAST_FIVE_DAYS" | "PAST_SEVEN_DAYS" | "LIFETIME";
  match_type?: "GT" | "LT" | "BETWEEN" | "MATCH" | "NAME" | "CONTAINS" | "NOT_CONTAINS" | "START_WITH" | "END_WITH" | "STRING_EQUAL";
  values?: string[];
  calculation_type?: string;
}[];
  actions: {
  subject_type: "TURN_ON" | "TURN_OFF" | "MESSAGE" | "DAILY_BUDGET" | "LIFETIME_BUDGET" | "BID";
  action_type?: "INCREASE" | "DECREASE" | "ADJUST_TO";
  value_type?: "EXACT" | "PERCENT";
  value?: {
  value?: number;
  limit?: number;
  use_limit?: boolean;
};
  frequency_info?: {
  type?: "ONLY_ONCE" | "ONCE_IN_24_H" | "ONCE_IN_48_H" | "ONCE_IN_1_W" | "CUSTOM";
  custom_frequency_type?: "N_MINTUE_Y_TIMES" | "N_HOUR_Y_TIMES" | "N_DAY_Y_TIMES";
  time?: number;
  count?: number;
};
}[];
  notification: {
  notification_type: "TASK_FINISH" | "MESSAGE" | "ANY_CHANGES" | "NOT_NOTIFICATION";
  email_setting?: {
  notification_period?: "EVERY_TIME" | "TIME_SCHEDULE";
  email_exec_time?: string[];
  no_result_notification?: boolean;
  mute_option?: "MUTE" | "UNMUTE";
};
};
  rule_exec_info: {
  exec_time_type: "PER_HALF_HOUR" | "CUSTOM" | "HALF_HOUR_IN_SPECIFIC_TIME_PERIOD" | "SPECIFIC_TIME_ACCURATE_ONCE";
  exec_time?: string;
  time_period_info?: {
  num?: string;
  start_time?: string;
  end_time?: string;
  date_type?: "DAY" | "WEEK" | "MONTH";
}[];
};
  tzone?: string;
  rule_id: string;
  name: string;
}[];
  lang?: "ZH" | "EN" | "JA";
}


export interface OptimizerRuleUpdateResponse {
  rule_ids?: string[];
}


export interface OptimizerRuleUpdateStatusParams {
  advertiser_id: string;
  rule_ids: string[];
  operate_type: "TURN_ON" | "TURN_OFF" | "DELETE";
  lang?: "ZH" | "EN" | "JA";
}


export interface OptimizerRuleUpdateStatusResponse {
  rule_ids?: string[];
}


export interface OptimizerRuleBatchBindParams {
  advertiser_id: string;
  bind_info: {
  rule_id: string;
  dimension: "CAMPAIGN" | "ADGROUP" | "AD";
  dimension_ids: string[];
  bind_type: "BIND" | "UNBIND";
}[];
  lang?: "ZH" | "EN" | "JA";
}


export interface OptimizerRuleBatchBindResponse {
  code?: number;
  message?: string;
  request_id?: string;
}
