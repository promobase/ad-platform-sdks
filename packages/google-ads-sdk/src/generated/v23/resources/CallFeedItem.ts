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
