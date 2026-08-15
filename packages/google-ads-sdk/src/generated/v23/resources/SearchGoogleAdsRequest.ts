// @generated
// fingerprint: sha256:8f30a4c0643816243d4d2610fa5a8c47d63902d17b99c550f809b2ec48aa84d3
// DO NOT EDIT: generated file; changes will be overwritten.
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
