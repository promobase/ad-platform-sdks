import type { QualityScoreBucket } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.AdGroupCriterion.QualityInfo. Do not edit by hand.
export interface QualityInfo {
  qualityScore?: number;
  creativeQualityScore?: QualityScoreBucket;
  postClickQualityScore?: QualityScoreBucket;
  searchPredictedCtr?: QualityScoreBucket;
}
