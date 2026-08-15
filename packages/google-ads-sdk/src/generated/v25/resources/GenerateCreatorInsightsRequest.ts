// @generated
// fingerprint: sha256:5a1c3ed4a7b75485f2f730a479ca8a706527b6fe6137cd584d683055edc19853
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdditionalApplicationInfo, ContentCreatorInsightsSupplementalData, LocationInfo, SearchAttributes, SearchTopics, YouTubeChannels } from "../index.ts";

// Generated from google.ads.googleads.v25.services.GenerateCreatorInsightsRequest. Do not edit by hand.
export interface GenerateCreatorInsightsRequest {
  customerId?: string;
  customerInsightsGroup?: string;
  insightsApplicationInfo?: AdditionalApplicationInfo;
  countryLocations?: LocationInfo[];
  subCountryLocations?: LocationInfo[];
  supplementalData?: ContentCreatorInsightsSupplementalData[];
  searchAttributes?: SearchAttributes;
  searchChannels?: YouTubeChannels;
  searchTopics?: SearchTopics;
}
