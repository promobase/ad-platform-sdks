// @generated
// fingerprint: sha256:957f42f4e0d9c0ea4373cefaed39f3df76426741855c0c5dc509dfee190ae5af
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ErrorCode, ErrorDetails, ErrorLocation, Value } from "../index.ts";

// Generated from google.ads.googleads.v25.errors.GoogleAdsError. Do not edit by hand.
export interface GoogleAdsError {
  errorCode?: ErrorCode;
  message?: string;
  trigger?: Value;
  location?: ErrorLocation;
  details?: ErrorDetails;
}
