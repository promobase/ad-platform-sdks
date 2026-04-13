import type { CallTrackingDisplayLocation, CallType, GoogleVoiceCallStatus } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.CallView. Do not edit by hand.
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
