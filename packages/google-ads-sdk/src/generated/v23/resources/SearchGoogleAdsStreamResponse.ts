import type { GoogleAdsRow, MetricAttributes } from "../index.ts";

// Generated from google.ads.googleads.v23.services.SearchGoogleAdsStreamResponse. Do not edit by hand.
export interface SearchGoogleAdsStreamResponse {
  results?: GoogleAdsRow[];
  fieldMask?: string;
  summaryRow?: GoogleAdsRow;
  requestId?: string;
  queryResourceConsumption?: string;
  metricAttributes?: MetricAttributes[];
}
