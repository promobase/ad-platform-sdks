// @generated
// fingerprint: sha256:90ac0c9a7df02c955e8614f807256af9c640d6648f42b0c45bc6b50c7544078b
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ErrorCode, ErrorDetails, ErrorLocation, Value } from "../index.ts";

// Generated from google.ads.googleads.v23.errors.GoogleAdsError. Do not edit by hand.
export interface GoogleAdsError {
  errorCode?: ErrorCode;
  message?: string;
  trigger?: Value;
  location?: ErrorLocation;
  details?: ErrorDetails;
}
