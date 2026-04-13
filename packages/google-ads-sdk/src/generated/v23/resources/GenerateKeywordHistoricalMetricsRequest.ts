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
