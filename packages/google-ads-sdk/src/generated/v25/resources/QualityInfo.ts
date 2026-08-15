// @generated
// fingerprint: sha256:e994be4c50f72f015ba335b0fee62132074306c371717fb0dd6f7c57987da618
// DO NOT EDIT: generated file; changes will be overwritten.
import type { QualityScoreBucket } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.AdGroupCriterion.QualityInfo. Do not edit by hand.
export interface QualityInfo {
  qualityScore?: number;
  creativeQualityScore?: QualityScoreBucket;
  postClickQualityScore?: QualityScoreBucket;
  searchPredictedCtr?: QualityScoreBucket;
}
