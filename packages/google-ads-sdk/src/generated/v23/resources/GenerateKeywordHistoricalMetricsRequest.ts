// @generated
// fingerprint: sha256:6f0d6358253f8cc949bf7c9c2b25960b5ae1e21c9fec350d254be1013fd40dd0
// DO NOT EDIT: generated file; changes will be overwritten.
import type { HistoricalMetricsOptions, KeywordPlanAggregateMetrics, KeywordPlanNetwork } from "../index.ts";

// Generated from google.ads.googleads.v23.services.GenerateKeywordHistoricalMetricsRequest. Do not edit by hand.
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
