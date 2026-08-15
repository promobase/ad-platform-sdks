// @generated
// fingerprint: sha256:a325aefd3296524203ab44a41b8f158a8eec6f8da86dbac7b7369cf591862a75
// DO NOT EDIT: generated file; changes will be overwritten.
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
