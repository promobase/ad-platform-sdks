// @generated
// fingerprint: sha256:197b2c672c53a81368d533bc459075b689d76fbda0778e2f2131edfc435339f3
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for measurement — do not edit

export interface AsyncStatsReport {
  report_run_id: string;
  async_status: string;
}


export interface TotalStat {
  id: string;
  type: string;
  granularity: string;
  stats: {
  impressions: number;
  swipes: number;
  spend: number;
  quartile_1: number;
  quartile_2: number;
  quartile_3: number;
  view_completion: number;
  screen_time_millis: number;
};
}


export interface LifetimeStat {
  id: string;
  type: string;
  granularity: string;
  stats: {
  impressions: number;
  swipes: number;
  engaged_views: number;
  video_views_5s: number;
  conversion_sign_ups: number;
};
  start_time: string;
  end_time: string;
  finalized_data_end_time: string;
  conversion_data_processed_end_time: string;
}


export interface GetAdaccountStatsParams {
  adAccountId: string;
  overlap?: boolean;
  overlap_type?: string;
  ids?: string;
  start_time?: string;
  end_time?: string;
  async_format?: string;
  "1"?: string;
  "2"?: string;
  "3"?: string;
  "4"?: string;
  "5"?: string;
  "6"?: string;
  "7"?: string;
  "8"?: string;
  "9"?: string;
  breakdown?: string;
  async?: string;
  fields?: string;
  granularity: "TOTAL" | "DAY" | "HOUR" | "LIFETIME";
  test?: string;
  dimension?: "GEO" | "DEMO" | "INTEREST" | "DEVICE";
  pivot?: string;
  action_report_time?: string;
  swipe_up_attribution_window?: string;
  view_attribution_window?: string;
  position_stats?: string;
  omit_empty?: string;
  conversion_source_types?: string;
  limit?: string;
}


export interface ListStatsReportParams {
  adAccountId: string;
  breakdown?: string;
  async?: string;
  async_format?: string;
  fields?: string;
  end_time?: string;
  start_time?: string;
  granularity: "TOTAL" | "DAY" | "HOUR" | "LIFETIME";
  test?: string;
  dimension?: "GEO" | "DEMO" | "INTEREST" | "DEVICE";
  pivot?: string;
  action_report_time?: string;
  swipe_up_attribution_window?: string;
  view_attribution_window?: string;
  position_stats?: string;
  omit_empty?: string;
  conversion_source_types?: string;
  limit?: string;
}


export interface GetCampaignStatsParams {
  campaignId: string;
  breakdown?: string;
  async?: string;
  async_format?: string;
  fields?: string;
  end_time?: string;
  start_time?: string;
  granularity: "TOTAL" | "DAY" | "HOUR" | "LIFETIME";
  test?: string;
  dimension?: "GEO" | "DEMO" | "INTEREST" | "DEVICE";
  pivot?: string;
  action_report_time?: string;
  swipe_up_attribution_window?: string;
  view_attribution_window?: string;
  position_stats?: string;
  omit_empty?: string;
  conversion_source_types?: string;
  limit?: string;
}


export interface GetAdsquadStatsParams {
  adsquadId: string;
  breakdown?: string;
  async?: string;
  async_format?: string;
  fields?: string;
  end_time?: string;
  start_time?: string;
  granularity: "TOTAL" | "DAY" | "HOUR" | "LIFETIME";
  test?: string;
  dimension?: "GEO" | "DEMO" | "INTEREST" | "DEVICE";
  pivot?: string;
  action_report_time?: string;
  swipe_up_attribution_window?: string;
  view_attribution_window?: string;
  position_stats?: string;
  omit_empty?: string;
  conversion_source_types?: string;
  limit?: string;
}


export interface GetAdStatsParams {
  adId: string;
  breakdown?: string;
  async?: string;
  async_format?: string;
  fields?: string;
  end_time?: string;
  start_time?: string;
  granularity: "TOTAL" | "DAY" | "HOUR" | "LIFETIME";
  test?: string;
  dimension?: "GEO" | "DEMO" | "INTEREST" | "DEVICE";
  pivot?: string;
  action_report_time?: string;
  swipe_up_attribution_window?: string;
  view_attribution_window?: string;
  position_stats?: string;
  omit_empty?: string;
  conversion_source_types?: string;
  limit?: string;
}


export interface GetCreativStatsParams {
  creativeId: string;
  breakdown?: string;
  async?: string;
  async_format?: string;
  fields?: string;
  end_time?: string;
  start_time?: string;
  granularity: "TOTAL" | "DAY" | "HOUR" | "LIFETIME";
  test?: string;
  dimension?: "GEO" | "DEMO" | "INTEREST" | "DEVICE";
  pivot?: string;
  action_report_time?: string;
  swipe_up_attribution_window?: string;
  view_attribution_window?: string;
  position_stats?: string;
  omit_empty?: string;
  conversion_source_types?: string;
  limit?: string;
}


export interface GetMediaStatsParams {
  mediaId: string;
  breakdown?: string;
  async?: string;
  async_format?: string;
  fields?: string;
  end_time?: string;
  start_time?: string;
  granularity: "TOTAL" | "DAY" | "HOUR" | "LIFETIME";
  test?: string;
  dimension?: "GEO" | "DEMO" | "INTEREST" | "DEVICE";
  pivot?: string;
  action_report_time?: string;
  swipe_up_attribution_window?: string;
  view_attribution_window?: string;
  position_stats?: string;
  omit_empty?: string;
  conversion_source_types?: string;
  limit?: string;
}


export interface GetAdsquadStats2Params {
  adsquadId: string;
  "adsquad-id"?: string;
  breakdown?: string;
  async?: string;
  async_format?: string;
  fields?: string;
  end_time?: string;
  start_time?: string;
  granularity: "TOTAL" | "DAY" | "HOUR" | "LIFETIME";
  test?: string;
  dimension?: "GEO" | "DEMO" | "INTEREST" | "DEVICE";
  pivot?: string;
  action_report_time?: string;
  swipe_up_attribution_window?: string;
  view_attribution_window?: string;
  position_stats?: string;
  omit_empty?: string;
  conversion_source_types?: string;
  limit?: string;
}


export interface CreateLeadsReportParams {
  adAccountId: string;
}


export interface ListLeadsReportParams {
  adAccountId: string;
  breakdown?: string;
  async?: string;
  async_format?: string;
  fields?: string;
  end_time?: string;
  start_time?: string;
  granularity: "TOTAL" | "DAY" | "HOUR" | "LIFETIME";
  test?: string;
  dimension?: "GEO" | "DEMO" | "INTEREST" | "DEVICE";
  pivot?: string;
  action_report_time?: string;
  swipe_up_attribution_window?: string;
  view_attribution_window?: string;
  position_stats?: string;
  omit_empty?: string;
  conversion_source_types?: string;
  limit?: string;
}
