import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { AdFields } from "./ad.ts";
import type { AdActivityFields } from "./ad-activity.ts";
import type { AdAsyncRequestFields } from "./ad-async-request.ts";
import type { AdBidAdjustmentsFields } from "./ad-bid-adjustments.ts";
import type { AdCampaignBidConstraintFields } from "./ad-campaign-bid-constraint.ts";
import type { AdCampaignDeliveryEstimateFields } from "./ad-campaign-delivery-estimate.ts";
import type { AdCampaignFrequencyControlSpecsFields } from "./ad-campaign-frequency-control-specs.ts";
import type { AdCampaignIssuesInfoFields } from "./ad-campaign-issues-info.ts";
import type { AdCampaignLearningStageInfoFields } from "./ad-campaign-learning-stage-info.ts";
import type { AdCreativeFields } from "./ad-creative.ts";
import type { AdLabelFields } from "./ad-label.ts";
import type { AdPromotedObjectFields } from "./ad-promoted-object.ts";
import type { AdRecommendationFields } from "./ad-recommendation.ts";
import type { AdReportRunFields } from "./ad-report-run.ts";
import type { AdRuleFields } from "./ad-rule.ts";
import type { AdStudyFields } from "./ad-study.ts";
import type { AdsInsightsFields } from "./ads-insights.ts";
import type { AttributionSpecFields } from "./attribution-spec.ts";
import type { BrandSafetyCampaignConfigFields } from "./brand-safety-campaign-config.ts";
import type { CampaignFields } from "./campaign.ts";
import type { DayPartFields } from "./day-part.ts";
import type { HighDemandPeriodFields } from "./high-demand-period.ts";
import type { MessageDeliveryEstimateFields } from "./message-delivery-estimate.ts";
import type { PlacementSoftOptOutFields } from "./placement-soft-opt-out.ts";
import type { RecommendationFields } from "./recommendation.ts";
import type { RegionalRegulationIdentitiesFields } from "./regional-regulation-identities.ts";
import type { TargetingFields } from "./targeting.ts";
import type { TargetingSentenceLineFields } from "./targeting-sentence-line.ts";
import type { TrendingTopicsSpecFields } from "./trending-topics-spec.ts";

export interface AdSetFields {
  account_id: string;
  adlabels: AdLabelFields[];
  adset_schedule: DayPartFields[];
  anchor_event_attribution_window_days: number;
  asset_feed_id: string;
  attribution_count_type: string;
  attribution_spec: AttributionSpecFields[];
  automatic_manual_state: string;
  bid_adjustments: AdBidAdjustmentsFields;
  bid_amount: number;
  bid_constraints: AdCampaignBidConstraintFields;
  bid_info: Record<string, number>;
  bid_strategy: string;
  billing_event: string;
  brand_safety_config: BrandSafetyCampaignConfigFields;
  budget_remaining: string;
  campaign: CampaignFields;
  campaign_active_time: string;
  campaign_attribution: string;
  campaign_id: string;
  configured_status: string;
  created_time: string;
  creative_diversity_label: string[];
  creative_diversity_score: string[];
  creative_sequence: string[];
  creative_sequence_repetition_pattern: string;
  daily_budget: string;
  daily_min_spend_target: string;
  daily_spend_cap: string;
  destination_type: string;
  dsa_beneficiary: string;
  dsa_payor: string;
  effective_status: string;
  end_time: string;
  existing_customer_budget_percentage: number;
  frequency_control_specs: AdCampaignFrequencyControlSpecsFields[];
  full_funnel_exploration_mode: string;
  id: string;
  instagram_user_id: string;
  is_ba_skip_delayed_eligible: boolean;
  is_budget_schedule_enabled: boolean;
  is_dynamic_creative: boolean;
  is_incremental_attribution_enabled: boolean;
  issues_info: AdCampaignIssuesInfoFields[];
  learning_stage_info: AdCampaignLearningStageInfoFields;
  lifetime_budget: string;
  lifetime_imps: number;
  lifetime_min_spend_target: string;
  lifetime_spend_cap: string;
  low_creative_reach: string[];
  max_budget_spend_percentage: string;
  min_budget_spend_percentage: string;
  multi_event_conversion_attribution_window_seconds: number;
  multi_optimization_goal_weight: string;
  name: string;
  optimization_goal: string;
  optimization_sub_event: string;
  pacing_type: string[];
  placement_soft_opt_out: PlacementSoftOptOutFields;
  promoted_object: AdPromotedObjectFields;
  recommendations: AdRecommendationFields[];
  recurring_budget_semantics: boolean;
  regional_regulated_categories: string[];
  regional_regulation_identities: RegionalRegulationIdentitiesFields;
  review_feedback: string;
  rf_prediction_id: string;
  source_adset: AdSetFields;
  source_adset_id: string;
  special_ad_categories: string[];
  start_time: string;
  status: string;
  targeting: TargetingFields;
  targeting_optimization_types: Record<string, number>[];
  time_based_ad_rotation_id_blocks: number[][];
  time_based_ad_rotation_intervals: number[];
  trending_topics_spec: TrendingTopicsSpecFields;
  updated_time: string;
  use_new_app_click: boolean;
  value_rule_set_id: string;
  value_rules_applied: boolean;
}

export interface AdSetListActivitiesParams {
  after?: string;
  business_id?: string;
  category?: string;
  limit?: number;
  since?: string;
  uid?: number;
  until?: string;
  [key: string]: unknown;
}

export interface AdSetDeleteAdlabelsParams {
  adlabels: Record<string, unknown>[];
  execution_options?: string[];
  [key: string]: unknown;
}

export interface AdSetCreateAdlabelsParams {
  adlabels: Record<string, unknown>[];
  execution_options?: string[];
  [key: string]: unknown;
}

export interface AdSetListAdrulesGovernedParams {
  pass_evaluation?: boolean;
  [key: string]: unknown;
}

export interface AdSetListAdsParams {
  date_preset?: string;
  effective_status?: string[];
  time_range?: Record<string, unknown>;
  updated_since?: number;
  [key: string]: unknown;
}

export interface AdSetListAsyncadrequestsParams {
  statuses?: string[];
  [key: string]: unknown;
}

export interface AdSetListBudgetSchedulesParams {
  time_start?: string;
  time_stop?: string;
  [key: string]: unknown;
}

export interface AdSetCreateBudgetSchedulesParams {
  budget_value: number;
  budget_value_type: string;
  time_end: number;
  time_start: number;
  [key: string]: unknown;
}

export interface AdSetListCopiesParams {
  date_preset?: string;
  effective_status?: string[];
  is_completed?: boolean;
  time_range?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface AdSetCreateCopiesParams {
  campaign_id?: string;
  create_dco_adset?: boolean;
  deep_copy?: boolean;
  end_time?: string;
  rename_options?: Record<string, unknown>;
  start_time?: string;
  status_option?: string;
  [key: string]: unknown;
}

export interface AdSetListDeliveryEstimateParams {
  optimization_goal?: string;
  promoted_object?: Record<string, unknown>;
  targeting_spec?: TargetingFields;
  [key: string]: unknown;
}

export interface AdSetListInsightsParams {
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

export interface AdSetCreateInsightsParams {
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

export interface AdSetListMessageDeliveryEstimateParams {
  bid_amount?: number;
  daily_budget?: number;
  is_direct_send_campaign?: boolean;
  lifetime_budget?: number;
  lifetime_in_days?: number;
  optimization_goal?: string;
  pacing_type?: string;
  promoted_object?: Record<string, unknown>;
  targeting_spec?: TargetingFields;
  [key: string]: unknown;
}

export interface AdSetUpdateParams {
  account_id?: string;
  adlabels?: Record<string, unknown>[];
  adset_schedule?: Record<string, unknown>[];
  attribution_spec?: Record<string, unknown>[];
  automatic_manual_state?: string;
  bid_adjustments?: Record<string, unknown>;
  bid_amount?: number;
  bid_constraints?: Record<string, Record<string, unknown>>;
  bid_strategy?: string;
  billing_event?: string;
  budget_schedule_specs?: Record<string, unknown>[];
  campaign_attribution?: Record<string, unknown>;
  campaign_spec?: Record<string, unknown>;
  creative_sequence?: string[];
  creative_sequence_repetition_pattern?: string;
  daily_budget?: number;
  daily_imps?: number;
  daily_min_spend_target?: number;
  daily_spend_cap?: number;
  date_format?: string;
  destination_type?: string;
  dsa_beneficiary?: string;
  dsa_payor?: string;
  end_time?: string;
  execution_options?: string[];
  existing_customer_budget_percentage?: number;
  frequency_control_specs?: Record<string, unknown>[];
  full_funnel_exploration_mode?: string;
  is_ba_skip_delayed_eligible?: boolean;
  is_budget_schedule_enabled?: boolean;
  is_incremental_attribution_enabled?: boolean;
  is_sac_cfca_terms_certified?: boolean;
  lifetime_budget?: number;
  lifetime_imps?: number;
  lifetime_min_spend_target?: number;
  lifetime_spend_cap?: number;
  max_budget_spend_percentage?: number;
  min_budget_spend_percentage?: number;
  multi_event_conversion_attribution_window_seconds?: number;
  multi_optimization_goal_weight?: string;
  name?: string;
  optimization_goal?: string;
  optimization_sub_event?: string;
  pacing_type?: string[];
  placement_soft_opt_out?: Record<string, unknown>;
  promoted_object?: Record<string, unknown>;
  rb_prediction_id?: string;
  regional_regulated_categories?: string[];
  regional_regulation_identities?: Record<string, unknown>;
  rf_prediction_id?: string;
  start_time?: string;
  status?: string;
  targeting?: TargetingFields;
  time_based_ad_rotation_id_blocks?: number[][];
  time_based_ad_rotation_intervals?: number[];
  time_start?: string;
  time_stop?: string;
  trending_topics_spec?: Record<string, unknown>;
  tune_for_category?: string;
  value_rule_set_id?: string;
  value_rules_applied?: boolean;
  [key: string]: unknown;
}

export function adSetNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof AdSetFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdSetFields, F[number]>>(`${id}`, opts),
    update: (params: AdSetUpdateParams) =>
      client.post<AdSetFields>(`${id}`, params as Record<string, unknown>),
    delete: () =>
      client.delete(`${id}`, {}),
    activities: <F extends (keyof AdActivityFields)[]>(opts: { fields: F; params?: AdSetListActivitiesParams }) =>
      new Cursor<Pick<AdActivityFields, F[number]>>(client, `${id}/activities`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    adStudies: <F extends (keyof AdStudyFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdStudyFields, F[number]>>(client, `${id}/ad_studies`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    adcreatives: <F extends (keyof AdCreativeFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdCreativeFields, F[number]>>(client, `${id}/adcreatives`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    adlabels: {
      create: (params: AdSetCreateAdlabelsParams) =>
        client.post<AdSetFields>(`${id}/adlabels`, params as Record<string, unknown>),
      delete: (params: AdSetDeleteAdlabelsParams) =>
        client.delete(`${id}/adlabels`, params as Record<string, unknown> ?? {}),
    },
    adrulesGoverned: <F extends (keyof AdRuleFields)[]>(opts: { fields: F; params?: AdSetListAdrulesGovernedParams }) =>
      new Cursor<Pick<AdRuleFields, F[number]>>(client, `${id}/adrules_governed`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    ads: <F extends (keyof AdFields)[]>(opts: { fields: F; params?: AdSetListAdsParams }) =>
      new Cursor<Pick<AdFields, F[number]>>(client, `${id}/ads`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    asyncadrequests: <F extends (keyof AdAsyncRequestFields)[]>(opts: { fields: F; params?: AdSetListAsyncadrequestsParams }) =>
      new Cursor<Pick<AdAsyncRequestFields, F[number]>>(client, `${id}/asyncadrequests`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    budgetSchedules: {
      list: <F extends (keyof HighDemandPeriodFields)[]>(opts: { fields: F; params?: AdSetListBudgetSchedulesParams }) =>
        new Cursor<Pick<HighDemandPeriodFields, F[number]>>(client, `${id}/budget_schedules`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: AdSetCreateBudgetSchedulesParams) =>
        client.post<HighDemandPeriodFields>(`${id}/budget_schedules`, params as Record<string, unknown>),
    },
    copies: {
      list: <F extends (keyof AdSetFields)[]>(opts: { fields: F; params?: AdSetListCopiesParams }) =>
        new Cursor<Pick<AdSetFields, F[number]>>(client, `${id}/copies`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: AdSetCreateCopiesParams) =>
        client.post<AdSetFields>(`${id}/copies`, params as Record<string, unknown>),
    },
    deliveryEstimate: <F extends (keyof AdCampaignDeliveryEstimateFields)[]>(opts: { fields: F; params?: AdSetListDeliveryEstimateParams }) =>
      new Cursor<Pick<AdCampaignDeliveryEstimateFields, F[number]>>(client, `${id}/delivery_estimate`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    insights: {
      list: <F extends (keyof AdsInsightsFields)[]>(opts: { fields: F; params?: AdSetListInsightsParams }) =>
        new Cursor<Pick<AdsInsightsFields, F[number]>>(client, `${id}/insights`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: AdSetCreateInsightsParams) =>
        client.post<AdReportRunFields>(`${id}/insights`, params as Record<string, unknown>),
    },
    messageDeliveryEstimate: <F extends (keyof MessageDeliveryEstimateFields)[]>(opts: { fields: F; params?: AdSetListMessageDeliveryEstimateParams }) =>
      new Cursor<Pick<MessageDeliveryEstimateFields, F[number]>>(client, `${id}/message_delivery_estimate`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    targetingsentencelines: <F extends (keyof TargetingSentenceLineFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<TargetingSentenceLineFields, F[number]>>(client, `${id}/targetingsentencelines`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

