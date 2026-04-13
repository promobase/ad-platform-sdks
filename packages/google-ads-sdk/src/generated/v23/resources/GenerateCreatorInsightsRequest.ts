import type { AdditionalApplicationInfo, LocationInfo, SearchAttributes, SearchBrand, YouTubeChannels } from "../index.ts";

// Generated from google.ads.googleads.v23.services.GenerateCreatorInsightsRequest. Do not edit by hand.
export interface GenerateCreatorInsightsRequest {
  customerId?: string;
  customerInsightsGroup?: string;
  insightsApplicationInfo?: AdditionalApplicationInfo;
  countryLocations?: LocationInfo[];
  subCountryLocations?: LocationInfo[];
  searchAttributes?: SearchAttributes;
  searchBrand?: SearchBrand;
  searchChannels?: YouTubeChannels;
}
