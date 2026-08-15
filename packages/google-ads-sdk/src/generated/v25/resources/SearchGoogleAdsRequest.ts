// @generated
// fingerprint: sha256:ce16a9b57105975990113330d6a5d8ccd47f8788576b053375b1cb1dd5fc9e9d
// DO NOT EDIT: generated file; changes will be overwritten.
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
