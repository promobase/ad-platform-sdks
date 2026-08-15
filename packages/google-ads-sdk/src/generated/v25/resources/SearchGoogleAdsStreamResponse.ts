// @generated
// fingerprint: sha256:e6fdd0044cad341b9bfd9aea2d430764ac0dd1fb14ffdc73468cf32b2fa1d324
// DO NOT EDIT: generated file; changes will be overwritten.
import type { GoogleAdsRow, MetricAttributes } from "../index.ts";

// Generated from google.ads.googleads.v25.services.SearchGoogleAdsStreamResponse. Do not edit by hand.
export interface SearchGoogleAdsStreamResponse {
  results?: GoogleAdsRow[];
  fieldMask?: string;
  summaryRow?: GoogleAdsRow;
  requestId?: string;
  queryResourceConsumption?: string;
  metricAttributes?: MetricAttributes[];
}
