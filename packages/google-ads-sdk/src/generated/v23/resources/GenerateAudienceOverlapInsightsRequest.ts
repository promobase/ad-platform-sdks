import type { AdditionalApplicationInfo, AudienceInsightsAttribute, AudienceInsightsDimension, LocationInfo } from "../index.ts";

// Generated from google.ads.googleads.v23.services.GenerateAudienceOverlapInsightsRequest. Do not edit by hand.
export interface GenerateAudienceOverlapInsightsRequest {
  customerId?: string;
  countryLocation?: LocationInfo;
  primaryAttribute?: AudienceInsightsAttribute;
  dimensions?: AudienceInsightsDimension[];
  customerInsightsGroup?: string;
  insightsApplicationInfo?: AdditionalApplicationInfo;
}
