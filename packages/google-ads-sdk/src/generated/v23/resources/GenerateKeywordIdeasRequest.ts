// @generated
// fingerprint: sha256:fac8fc5868d44cadd30c78d9fcb634504fd428ec4463f7e8787e4d10aac23792
// DO NOT EDIT: generated file; changes will be overwritten.
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
