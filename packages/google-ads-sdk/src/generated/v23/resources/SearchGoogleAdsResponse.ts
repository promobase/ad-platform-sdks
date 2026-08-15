// @generated
// fingerprint: sha256:2ce85861dc1e73c69e17514c3b8aba5029cafe7b7c6eebe8c70b6f8b8d14b657
// DO NOT EDIT: generated file; changes will be overwritten.
import type { GoogleAdsRow, MetricAttributes } from "../index.ts";

// Generated from google.ads.googleads.v23.services.SearchGoogleAdsResponse. Do not edit by hand.
export interface SearchGoogleAdsResponse {
  results?: GoogleAdsRow[];
  nextPageToken?: string;
  totalResultsCount?: string;
  fieldMask?: string;
  summaryRow?: GoogleAdsRow;
  queryResourceConsumption?: string;
  metricAttributes?: MetricAttributes[];
}
