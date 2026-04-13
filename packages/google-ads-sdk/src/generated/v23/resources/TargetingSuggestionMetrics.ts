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
