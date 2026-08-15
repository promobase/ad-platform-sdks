// @generated
// fingerprint: sha256:d55f78bc7bd84d5683ea97745666b87cce318d1794adff78d8f7daeb2517c51e
// DO NOT EDIT: generated file; changes will be overwritten.
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
