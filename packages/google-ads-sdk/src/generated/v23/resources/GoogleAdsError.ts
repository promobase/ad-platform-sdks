import type { ErrorCode, ErrorDetails, ErrorLocation, Value } from "../index.ts";

// Generated from google.ads.googleads.v23.errors.GoogleAdsError. Do not edit by hand.
export interface GoogleAdsError {
  errorCode?: ErrorCode;
  message?: string;
  trigger?: Value;
  location?: ErrorLocation;
  details?: ErrorDetails;
}
