import type { SearchSettings } from "../index.ts";

// Generated from google.ads.googleads.v25.services.SearchGoogleAdsRequest. Do not edit by hand.
export interface SearchGoogleAdsRequest {
  customerId?: string;
  query?: string;
  pageToken?: string;
  pageSize?: number;
  validateOnly?: boolean;
  searchSettings?: SearchSettings;
}
