// @generated
// fingerprint: sha256:554d3ece577b62e23e8304cfe00553f337d4f8a9400085106840b775a70297f1
// DO NOT EDIT: generated file; changes will be overwritten.
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
