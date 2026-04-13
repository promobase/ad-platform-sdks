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
