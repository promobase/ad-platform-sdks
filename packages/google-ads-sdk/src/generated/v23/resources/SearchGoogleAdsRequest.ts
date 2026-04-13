import type { SearchSettings } from "../index.ts";

// Generated from google.ads.googleads.v23.services.SearchGoogleAdsRequest. Do not edit by hand.
export interface SearchGoogleAdsRequest {
  customerId?: string;
  query?: string;
  pageToken?: string;
  pageSize?: number;
  validateOnly?: boolean;
  searchSettings?: SearchSettings;
}
