import type { AdditionalApplicationInfo, ContentCreatorInsightsSupplementalData, LocationInfo, SearchAudience, SearchTopics } from "../index.ts";

// Generated from google.ads.googleads.v25.services.GenerateTrendingInsightsRequest. Do not edit by hand.
export interface GenerateTrendingInsightsRequest {
  customerId?: string;
  customerInsightsGroup?: string;
  insightsApplicationInfo?: AdditionalApplicationInfo;
  countryLocation?: LocationInfo;
  subCountryLocations?: LocationInfo[];
  supplementalData?: ContentCreatorInsightsSupplementalData[];
  searchAudience?: SearchAudience;
  searchTopics?: SearchTopics;
}
