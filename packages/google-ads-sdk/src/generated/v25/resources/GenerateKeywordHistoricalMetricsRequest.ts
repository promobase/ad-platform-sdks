// @generated
// fingerprint: sha256:3730fac97b47d6ed266429188caf7914f7a12efe06de73b80b750300a3c773a3
// DO NOT EDIT: generated file; changes will be overwritten.
import type { HistoricalMetricsOptions, KeywordPlanAggregateMetrics, KeywordPlanNetwork } from "../index.ts";

// Generated from google.ads.googleads.v25.services.GenerateKeywordHistoricalMetricsRequest. Do not edit by hand.
export interface GenerateKeywordHistoricalMetricsRequest {
  customerId?: string;
  keywords?: string[];
  language?: string;
  includeAdultKeywords?: boolean;
  geoTargetConstants?: string[];
  keywordPlanNetwork?: KeywordPlanNetwork;
  aggregateMetrics?: KeywordPlanAggregateMetrics;
  historicalMetricsOptions?: HistoricalMetricsOptions;
}
