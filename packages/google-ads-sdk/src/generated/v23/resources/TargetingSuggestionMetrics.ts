// @generated
// fingerprint: sha256:902bc6d40a6910cb9fc11991582f8ad607fd0cd0a000473beabf5768562d548f
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AgeRangeInfo, AudienceInsightsAttributeMetadata, AudienceInsightsAttributeMetadataGroup, GenderInfo, ParentalStatusInfo } from "../index.ts";

// Generated from google.ads.googleads.v23.services.TargetingSuggestionMetrics. Do not edit by hand.
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
