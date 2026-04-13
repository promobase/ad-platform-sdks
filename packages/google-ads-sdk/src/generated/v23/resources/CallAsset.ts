import type { AdScheduleInfo, CallConversionReportingState } from "../index.ts";

// Generated from google.ads.googleads.v23.common.CallAsset. Do not edit by hand.
export interface CallAsset {
  countryCode?: string;
  phoneNumber?: string;
  callConversionReportingState?: CallConversionReportingState;
  callConversionAction?: string;
  adScheduleTargets?: AdScheduleInfo[];
}
