// @generated
// fingerprint: sha256:7ca5fb04567daf8d09ebc1221544dae45ecf5955a9316f6dda359629d6ce50c8
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CallConversionReportingState } from "../index.ts";

// Generated from google.ads.googleads.v25.common.CallFeedItem. Do not edit by hand.
export interface CallFeedItem {
  phoneNumber?: string;
  countryCode?: string;
  callTrackingEnabled?: boolean;
  callConversionAction?: string;
  callConversionTrackingDisabled?: boolean;
  callConversionReportingState?: CallConversionReportingState;
}
