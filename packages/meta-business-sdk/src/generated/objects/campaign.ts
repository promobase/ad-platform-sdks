import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { AdFields } from "./ad.ts";
import type { AdCampaignGroupAdvantageStateFields } from "./ad-campaign-group-advantage-state.ts";
import type { AdCampaignIssuesInfoFields } from "./ad-campaign-issues-info.ts";
import type { AdLabelFields } from "./ad-label.ts";
import type { AdPromotedObjectFields } from "./ad-promoted-object.ts";
import type { AdRecommendationFields } from "./ad-recommendation.ts";
import type { AdReportRunFields } from "./ad-report-run.ts";
import type { AdRuleFields } from "./ad-rule.ts";
import type { AdSetFields } from "./ad-set.ts";
import type { AdStudyFields } from "./ad-study.ts";
import type { AdsInsightsFields } from "./ads-insights.ts";
import type { HighDemandPeriodFields } from "./high-demand-period.ts";
import type { RecommendationFields } from "./recommendation.ts";
import type { CampaignBidStrategy, CampaignConfiguredStatus, CampaignEffectiveStatus, CampaignStatus } from "../enums.ts";

export interface CampaignFields {
  account_id: string;
  adlabels: AdLabelFields[];
  advantage_state_info: AdCampaignGroupAdvantageStateFields;
  bid_strategy: CampaignBidStrategy;
  boosted_object_id: string;
  brand_lift_studies: AdStudyFields[];
  budget_rebalance_flag: boolean;
  budget_remaining: string;
  buying_type: string;
  campaign_group_active_time: string;
  can_create_brand_lift_study: boolean;
  can_use_spend_cap: boolean;
  configured_status: CampaignConfiguredStatus;
  created_time: string;
  daily_budget: string;
  effective_status: CampaignEffectiveStatus;
  has_secondary_skadnetwork_reporting: boolean;
  id: string;
  is_adset_budget_sharing_enabled: boolean;
  is_budget_schedule_enabled: boolean;
  is_direct_send_campaign: boolean;
  is_message_campaign: boolean;
  is_skadnetwork_attribution: boolean;
  issues_info: AdCampaignIssuesInfoFields[];
  last_budget_toggling_time: string;
  lifetime_budget: string;
  name: string;
  objective: string;
  pacing_type: string[];
  primary_attribution: string;
  promoted_object: AdPromotedObjectFields;
  recommendations: AdRecommendationFields[];
  smart_promotion_type: string;
  source_campaign: CampaignFields;
  source_campaign_id: string;
  source_recommendation_type: string;
  special_ad_categories: string[];
  special_ad_category: string;
  special_ad_category_country: string[];
  spend_cap: string;
  start_time: string;
  status: CampaignStatus;
  stop_time: string;
  topline_id: string;
  updated_time: string;
}

export interface CampaignCreateAdlabelsParams {
  adlabels: Record<string, unknown>[];
  execution_options?: string[];
  [key: string]: unknown;
}

export interface CampaignListAdrulesGovernedParams {
  pass_evaluation?: boolean;
  [key: string]: unknown;
}

export interface CampaignListAdsParams {
  date_preset?: string;
  effective_status?: string[];
  time_range?: Record<string, unknown>;
  updated_since?: number;
  [key: string]: unknown;
}

export interface CampaignListAdsetsParams {
  date_preset?: string;
  effective_status?: string[];
  is_completed?: boolean;
  time_range?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface CampaignListBudgetSchedulesParams {
  time_start?: string;
  time_stop?: string;
  [key: string]: unknown;
}

export interface CampaignCreateBudgetSchedulesParams {
  budget_value: number;
  budget_value_type: string;
  time_end: number;
  time_start: number;
  [key: string]: unknown;
}

export interface CampaignListCopiesParams {
  date_preset?: string;
  effective_status?: string[];
  is_completed?: boolean;
  time_range?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface CampaignCreateCopiesParams {
  deep_copy?: boolean;
  end_time?: string;
  migrate_to_advantage_plus?: boolean;
  parameter_overrides?: Record<string, unknown>;
  rename_options?: Record<string, unknown>;
  start_time?: string;
  status_option?: string;
  [key: string]: unknown;
}

export interface CampaignListInsightsParams {
  action_attribution_windows?: string[];
  action_breakdowns?: string[];
  action_report_time?: string;
  breakdowns?: string[];
  date_preset?: string;
  default_summary?: boolean;
  export_columns?: string[];
  export_format?: string;
  export_name?: string;
  fields?: string[];
  filtering?: Record<string, unknown>[];
  graph_cache?: boolean;
  level?: string;
  limit?: number;
  product_id_limit?: number;
  sort?: string[];
  summary?: string[];
  summary_action_breakdowns?: string[];
  time_increment?: string;
  time_range?: Record<string, unknown>;
  time_ranges?: Record<string, unknown>[];
  use_account_attribution_setting?: boolean;
  use_unified_attribution_setting?: boolean;
  [key: string]: unknown;
}

export interface CampaignCreateInsightsParams {
  action_attribution_windows?: string[];
  action_breakdowns?: string[];
  action_report_time?: string;
  breakdowns?: string[];
  date_preset?: string;
  default_summary?: boolean;
  export_columns?: string[];
  export_format?: string;
  export_name?: string;
  fields?: string[];
  filtering?: Record<string, unknown>[];
  graph_cache?: boolean;
  level?: string;
  limit?: number;
  product_id_limit?: number;
  sort?: string[];
  summary?: string[];
  summary_action_breakdowns?: string[];
  time_increment?: string;
  time_range?: Record<string, unknown>;
  time_ranges?: Record<string, unknown>[];
  use_account_attribution_setting?: boolean;
  use_unified_attribution_setting?: boolean;
  [key: string]: unknown;
}

export interface CampaignUpdateParams {
  adlabels?: Record<string, unknown>[];
  adset_bid_amounts?: Record<string, unknown>;
  adset_budgets?: Record<string, unknown>[];
  bid_strategy?: string;
  budget_rebalance_flag?: boolean;
  budget_schedule_specs?: Record<string, unknown>[];
  daily_budget?: number;
  execution_options?: string[];
  is_adset_budget_sharing_enabled?: boolean;
  is_budget_schedule_enabled?: boolean;
  is_direct_send_campaign?: boolean;
  is_message_campaign?: boolean;
  is_skadnetwork_attribution?: boolean;
  iterative_split_test_configs?: Record<string, unknown>[];
  lifetime_budget?: number;
  migrate_to_advantage_plus?: boolean;
  name?: string;
  objective?: string;
  pacing_type?: string[];
  promoted_object?: Record<string, unknown>;
  smart_promotion_type?: string;
  special_ad_categories?: string[];
  special_ad_category?: string;
  special_ad_category_country?: string[];
  spend_cap?: number;
  start_time?: string;
  status?: string;
  stop_time?: string;
  [key: string]: unknown;
}

export function campaignNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as CampaignFields,
    get: <F extends (keyof CampaignFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CampaignFields, F[number]>>(`${id}`, opts),
    update: (params: CampaignUpdateParams) =>
      client.post<CampaignFields>(`${id}`, params as Record<string, unknown>),
    delete: () =>
      client.delete(`${id}`, {}),
    adStudies: <F extends (keyof AdStudyFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdStudyFields, F[number]>>(client, `${id}/ad_studies`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    createAdlabel: (params: CampaignCreateAdlabelsParams) =>
      client.post<CampaignFields>(`${id}/adlabels`, params as Record<string, unknown>),
    adrulesGoverned: <F extends (keyof AdRuleFields)[]>(opts: { fields: F; params?: CampaignListAdrulesGovernedParams }) =>
      new Cursor<Pick<AdRuleFields, F[number]>>(client, `${id}/adrules_governed`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    ads: <F extends (keyof AdFields)[]>(opts: { fields: F; params?: CampaignListAdsParams }) =>
      new Cursor<Pick<AdFields, F[number]>>(client, `${id}/ads`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    adsets: <F extends (keyof AdSetFields)[]>(opts: { fields: F; params?: CampaignListAdsetsParams }) =>
      new Cursor<Pick<AdSetFields, F[number]>>(client, `${id}/adsets`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    budgetSchedules: {
      __path: `${id}/budget_schedules`,
      __brand: undefined as unknown as HighDemandPeriodFields,
      list: <F extends (keyof HighDemandPeriodFields)[]>(opts: { fields: F; params?: CampaignListBudgetSchedulesParams }) =>
        new Cursor<Pick<HighDemandPeriodFields, F[number]>>(client, `${id}/budget_schedules`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: CampaignCreateBudgetSchedulesParams) =>
        client.post<HighDemandPeriodFields>(`${id}/budget_schedules`, params as Record<string, unknown>),
    },
    copies: {
      __path: `${id}/copies`,
      __brand: undefined as unknown as CampaignFields,
      list: <F extends (keyof CampaignFields)[]>(opts: { fields: F; params?: CampaignListCopiesParams }) =>
        new Cursor<Pick<CampaignFields, F[number]>>(client, `${id}/copies`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: CampaignCreateCopiesParams) =>
        client.post<CampaignFields>(`${id}/copies`, params as Record<string, unknown>),
    },
    insights: {
      __path: `${id}/insights`,
      __brand: undefined as unknown as AdsInsightsFields,
      list: <F extends (keyof AdsInsightsFields)[]>(opts: { fields: F; params?: CampaignListInsightsParams }) =>
        new Cursor<Pick<AdsInsightsFields, F[number]>>(client, `${id}/insights`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: CampaignCreateInsightsParams) =>
        client.post<AdReportRunFields>(`${id}/insights`, params as Record<string, unknown>),
    },
  };
}

