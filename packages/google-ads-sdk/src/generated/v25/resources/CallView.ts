// @generated
// fingerprint: sha256:06231fb130821bf4798927db9fc849501f31968bbaaaf052a63490562890eb9c
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CallTrackingDisplayLocation, CallType, GoogleVoiceCallStatus } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.CallView. Do not edit by hand.
export interface CallView {
  resourceName?: string;
  callerCountryCode?: string;
  callerAreaCode?: string;
  callDurationSeconds?: string;
  startCallDateTime?: string;
  endCallDateTime?: string;
  callTrackingDisplayLocation?: CallTrackingDisplayLocation;
  type?: CallType;
  callStatus?: GoogleVoiceCallStatus;
}
