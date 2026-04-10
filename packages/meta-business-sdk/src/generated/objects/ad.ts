import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { AdCreativeFields } from "./ad-creative.ts";
import type { AdCreativeAssetGroupsSpecFields } from "./ad-creative-asset-groups-spec.ts";
import type { AdLabelFields } from "./ad-label.ts";
import type { AdPreviewFields } from "./ad-preview.ts";
import type { AdRecommendationFields } from "./ad-recommendation.ts";
import type { AdReportRunFields } from "./ad-report-run.ts";
import type { AdRuleFields } from "./ad-rule.ts";
import type { AdSetFields } from "./ad-set.ts";
import type { AdgroupIssuesInfoFields } from "./adgroup-issues-info.ts";
import type { AdgroupReviewFeedbackFields } from "./adgroup-review-feedback.ts";
import type { AdsInsightsFields } from "./ads-insights.ts";
import type { CampaignFields } from "./campaign.ts";
import type { ConversionActionQueryFields } from "./conversion-action-query.ts";
import type { DeliveryCheckFields } from "./delivery-check.ts";
import type { LeadFields } from "./lead.ts";
import type { PlacementFields } from "./placement.ts";
import type { RecommendationFields } from "./recommendation.ts";
import type { TargetingFields } from "./targeting.ts";
import type { TargetingSentenceLineFields } from "./targeting-sentence-line.ts";
import type { TrackingAndConversionWithDefaultsFields } from "./tracking-and-conversion-with-defaults.ts";

export interface AdFields {
  account_id: string;
  ad_active_time: string;
  ad_review_feedback: AdgroupReviewFeedbackFields;
  ad_schedule_end_time: string;
  ad_schedule_start_time: string;
  adlabels: AdLabelFields[];
  adset: AdSetFields;
  adset_id: string;
  bid_amount: number;
  bid_info: Record<string, number>;
  bid_type: string;
  campaign: CampaignFields;
  campaign_id: string;
  configured_status: string;
  conversion_domain: string;
  conversion_specs: ConversionActionQueryFields[];
  created_time: string;
  creative: AdCreativeFields;
  creative_asset_groups_spec: AdCreativeAssetGroupsSpecFields;
  demolink_hash: string;
  display_sequence: number;
  effective_status: string;
  engagement_audience: boolean;
  failed_delivery_checks: DeliveryCheckFields[];
  id: string;
  issues_info: AdgroupIssuesInfoFields[];
  last_updated_by_app_id: string;
  name: string;
  placement: PlacementFields;
  preview_shareable_link: string;
  priority: number;
  recommendations: AdRecommendationFields[];
  source_ad: AdFields;
  source_ad_id: string;
  special_ad_categories: string[];
  status: string;
  targeting: TargetingFields;
  tracking_and_conversion_with_defaults: TrackingAndConversionWithDefaultsFields;
  tracking_specs: ConversionActionQueryFields[];
  updated_time: string;
}

export interface AdCreateAdlabelsParams {
  adlabels: Record<string, unknown>[];
  execution_options?: string[];
  [key: string]: unknown;
}

export interface AdListAdrulesGovernedParams {
  pass_evaluation?: boolean;
  [key: string]: unknown;
}

export interface AdListCopiesParams {
  date_preset?: string;
  effective_status?: string[];
  time_range?: Record<string, unknown>;
  updated_since?: number;
  [key: string]: unknown;
}

export interface AdCreateCopiesParams {
  adset_id?: string;
  creative_parameters?: AdCreativeFields;
  rename_options?: Record<string, unknown>;
  status_option?: string;
  [key: string]: unknown;
}

export interface AdListInsightsParams {
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

export interface AdCreateInsightsParams {
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

export interface AdListPreviewsParams {
  ad_format: string;
  creative_feature?: string;
  dynamic_asset_label?: string;
  dynamic_creative_spec?: Record<string, unknown>;
  dynamic_customization?: Record<string, unknown>;
  end_date?: string;
  height?: number;
  locale?: string;
  place_page_id?: number;
  post?: Record<string, unknown>;
  product_item_ids?: string[];
  render_type?: string;
  start_date?: string;
  width?: number;
  [key: string]: unknown;
}

export interface AdUpdateParams {
  ad_schedule_end_time?: string;
  ad_schedule_start_time?: string;
  adlabels?: Record<string, unknown>[];
  adset_spec?: AdSetFields;
  audience_id?: string;
  bid_amount?: number;
  conversion_domain?: string;
  creative?: AdCreativeFields;
  creative_asset_groups_spec?: Record<string, unknown>;
  display_sequence?: number;
  draft_adgroup_id?: string;
  engagement_audience?: boolean;
  execution_options?: string[];
  include_demolink_hashes?: boolean;
  name?: string;
  priority?: number;
  status?: string;
  tracking_specs?: Record<string, unknown>;
  [key: string]: unknown;
}

export function adNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdFields,
    get: <F extends (keyof AdFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdFields, F[number]>>(`${id}`, opts),
    update: (params: AdUpdateParams) =>
      client.post<AdFields>(`${id}`, params as Record<string, unknown>),
    delete: () =>
      client.delete(`${id}`, {}),
    adcreatives: <F extends (keyof AdCreativeFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdCreativeFields, F[number]>>(client, `${id}/adcreatives`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    createAdlabel: (params: AdCreateAdlabelsParams) =>
      client.post<AdFields>(`${id}/adlabels`, params as Record<string, unknown>),
    adrulesGoverned: <F extends (keyof AdRuleFields)[]>(opts: { fields: F; params?: AdListAdrulesGovernedParams }) =>
      new Cursor<Pick<AdRuleFields, F[number]>>(client, `${id}/adrules_governed`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    copies: {
      __path: `${id}/copies`,
      __brand: undefined as unknown as AdFields,
      list: <F extends (keyof AdFields)[]>(opts: { fields: F; params?: AdListCopiesParams }) =>
        new Cursor<Pick<AdFields, F[number]>>(client, `${id}/copies`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: AdCreateCopiesParams) =>
        client.post<AdFields>(`${id}/copies`, params as Record<string, unknown>),
    },
    insights: {
      __path: `${id}/insights`,
      __brand: undefined as unknown as AdsInsightsFields,
      list: <F extends (keyof AdsInsightsFields)[]>(opts: { fields: F; params?: AdListInsightsParams }) =>
        new Cursor<Pick<AdsInsightsFields, F[number]>>(client, `${id}/insights`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: AdCreateInsightsParams) =>
        client.post<AdReportRunFields>(`${id}/insights`, params as Record<string, unknown>),
    },
    leads: <F extends (keyof LeadFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<LeadFields, F[number]>>(client, `${id}/leads`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    previews: <F extends (keyof AdPreviewFields)[]>(opts: { fields: F; params?: AdListPreviewsParams }) =>
      new Cursor<Pick<AdPreviewFields, F[number]>>(client, `${id}/previews`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    targetingsentencelines: <F extends (keyof TargetingSentenceLineFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<TargetingSentenceLineFields, F[number]>>(client, `${id}/targetingsentencelines`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

