import type { HistoricalMetricsOptions, KeywordAndUrlSeed, KeywordPlanAggregateMetrics, KeywordPlanKeywordAnnotation, KeywordPlanNetwork, KeywordSeed, SiteSeed, UrlSeed } from "../index.ts";

// Generated from google.ads.googleads.v23.services.GenerateKeywordIdeasRequest. Do not edit by hand.
export interface GenerateKeywordIdeasRequest {
  customerId?: string;
  language?: string;
  geoTargetConstants?: string[];
  includeAdultKeywords?: boolean;
  pageToken?: string;
  pageSize?: number;
  keywordPlanNetwork?: KeywordPlanNetwork;
  keywordAnnotation?: KeywordPlanKeywordAnnotation[];
  aggregateMetrics?: KeywordPlanAggregateMetrics;
  historicalMetricsOptions?: HistoricalMetricsOptions;
  keywordAndUrlSeed?: KeywordAndUrlSeed;
  keywordSeed?: KeywordSeed;
  urlSeed?: UrlSeed;
  siteSeed?: SiteSeed;
}
