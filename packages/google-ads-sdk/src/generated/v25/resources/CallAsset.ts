// @generated
// fingerprint: sha256:e8bf8dc00b7f5cbd3b2c60232cc2b1d0a9e6c279561c50aa8440420431af6a64
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdScheduleInfo, CallConversionReportingState } from "../index.ts";

// Generated from google.ads.googleads.v25.common.CallAsset. Do not edit by hand.
export interface CallAsset {
  countryCode?: string;
  phoneNumber?: string;
  callConversionReportingState?: CallConversionReportingState;
  callConversionAction?: string;
  adScheduleTargets?: AdScheduleInfo[];
}
