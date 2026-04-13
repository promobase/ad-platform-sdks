import type { GenerateKeywordIdeaResult, KeywordPlanAggregateMetricResults } from "../index.ts";

// Generated from google.ads.googleads.v23.services.GenerateKeywordIdeaResponse. Do not edit by hand.
export interface GenerateKeywordIdeaResponse {
  results?: GenerateKeywordIdeaResult[];
  aggregateMetricResults?: KeywordPlanAggregateMetricResults;
  nextPageToken?: string;
  totalSize?: string;
}
