// @generated
// fingerprint: sha256:9b59b5930ad2d752e85b7baf6aa9da076ce3344f54c3b1486c5c184d02b320ae
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CallConversionReportingState } from "../index.ts";

// Generated from google.ads.googleads.v23.common.CallFeedItem. Do not edit by hand.
export interface CallFeedItem {
  phoneNumber?: string;
  countryCode?: string;
  callTrackingEnabled?: boolean;
  callConversionAction?: string;
  callConversionTrackingDisabled?: boolean;
  callConversionReportingState?: CallConversionReportingState;
}
