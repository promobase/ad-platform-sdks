// @generated
// fingerprint: sha256:617f61b9feaf3e2a76adf25e6052f5444864a6dd671f19ae7ab316670ae8d7bc
// DO NOT EDIT: generated file; changes will be overwritten.
import type { GoogleAdsRow, MetricAttributes } from "../index.ts";

// Generated from google.ads.googleads.v25.services.SearchGoogleAdsResponse. Do not edit by hand.
export interface SearchGoogleAdsResponse {
  results?: GoogleAdsRow[];
  nextPageToken?: string;
  totalResultsCount?: string;
  fieldMask?: string;
  summaryRow?: GoogleAdsRow;
  queryResourceConsumption?: string;
  metricAttributes?: MetricAttributes[];
}
