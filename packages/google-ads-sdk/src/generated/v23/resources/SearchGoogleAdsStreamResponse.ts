// @generated
// fingerprint: sha256:b1b6b77304fe053732e939165ca37b1196d07aff322e4ba84b1fe5c063b16d62
// DO NOT EDIT: generated file; changes will be overwritten.
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
