// @generated
// fingerprint: sha256:5425493e66cc79a72a0543e44370639fa0a7c693e000065d3806ae431d5b3453
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AgeRangeInfo, AudienceInsightsAttributeMetadata, AudienceInsightsAttributeMetadataGroup, GenderInfo, ParentalStatusInfo } from "../index.ts";

// Generated from google.ads.googleads.v25.services.TargetingSuggestionMetrics. Do not edit by hand.
export interface TargetingSuggestionMetrics {
  locations?: AudienceInsightsAttributeMetadata[];
  ageRanges?: AgeRangeInfo[];
  gender?: GenderInfo;
  parentalStatus?: ParentalStatusInfo;
  userInterests?: AudienceInsightsAttributeMetadataGroup[];
  coverage?: number;
  index?: number;
  potentialYoutubeReach?: string;
}
