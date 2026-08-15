// @generated
// fingerprint: sha256:d3f7c00bdf02bf811e96043bdbc8cd57a182eaa1522f749668c37825ba364bb4
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdScheduleInfo, CallConversionReportingState } from "../index.ts";

// Generated from google.ads.googleads.v23.common.CallAsset. Do not edit by hand.
export interface CallAsset {
  countryCode?: string;
  phoneNumber?: string;
  callConversionReportingState?: CallConversionReportingState;
  callConversionAction?: string;
  adScheduleTargets?: AdScheduleInfo[];
}
