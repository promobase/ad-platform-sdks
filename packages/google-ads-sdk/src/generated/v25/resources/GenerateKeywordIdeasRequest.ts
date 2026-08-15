// @generated
// fingerprint: sha256:e9d740322758a80501f653ab0fd653d430a09947cd16c6334af2ce72954614ce
// DO NOT EDIT: generated file; changes will be overwritten.
import type { HistoricalMetricsOptions, KeywordAndUrlSeed, KeywordPlanAggregateMetrics, KeywordPlanKeywordAnnotation, KeywordPlanNetwork, KeywordSeed, SiteSeed, UrlSeed } from "../index.ts";

// Generated from google.ads.googleads.v25.services.GenerateKeywordIdeasRequest. Do not edit by hand.
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
