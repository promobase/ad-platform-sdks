import type { AdditionalApplicationInfo, LocationInfo, SearchAudience, SearchTopics } from "../index.ts";

// Generated from google.ads.googleads.v23.services.GenerateTrendingInsightsRequest. Do not edit by hand.
export interface GenerateTrendingInsightsRequest {
  customerId?: string;
  customerInsightsGroup?: string;
  insightsApplicationInfo?: AdditionalApplicationInfo;
  countryLocation?: LocationInfo;
  searchAudience?: SearchAudience;
  searchTopics?: SearchTopics;
}
