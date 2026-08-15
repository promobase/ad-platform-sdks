// @generated
// fingerprint: sha256:d6682f9bd350324ba925224dffa43d56ce264b72f003ea964cf893ec6dcec5fa
// DO NOT EDIT: generated file; changes will be overwritten.
import type { QualityScoreBucket } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.AdGroupCriterion.QualityInfo. Do not edit by hand.
export interface QualityInfo {
  qualityScore?: number;
  creativeQualityScore?: QualityScoreBucket;
  postClickQualityScore?: QualityScoreBucket;
  searchPredictedCtr?: QualityScoreBucket;
}
