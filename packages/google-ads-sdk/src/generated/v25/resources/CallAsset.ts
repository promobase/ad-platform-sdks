import type { AdScheduleInfo, CallConversionReportingState } from "../index.ts";

// Generated from google.ads.googleads.v25.common.CallAsset. Do not edit by hand.
export interface CallAsset {
  countryCode?: string;
  phoneNumber?: string;
  callConversionReportingState?: CallConversionReportingState;
  callConversionAction?: string;
  adScheduleTargets?: AdScheduleInfo[];
}
