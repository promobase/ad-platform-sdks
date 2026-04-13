import type { AdditionalApplicationInfo, AudienceInsightsDimension, LocationInfo } from "../index.ts";

// Generated from google.ads.googleads.v23.services.ListAudienceInsightsAttributesRequest. Do not edit by hand.
export interface ListAudienceInsightsAttributesRequest {
  customerId?: string;
  dimensions?: AudienceInsightsDimension[];
  queryText?: string;
  customerInsightsGroup?: string;
  insightsApplicationInfo?: AdditionalApplicationInfo;
  locationCountryFilters?: LocationInfo[];
  youtubeReachLocation?: LocationInfo;
}
