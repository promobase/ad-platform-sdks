// @generated
// fingerprint: sha256:ff5aa833b3cdf52ad5166d664bd17f2f91c6ec7239265fede710e434c2693efe
// DO NOT EDIT: generated file; changes will be overwritten.
import type { BiddingDataExclusionOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateBiddingDataExclusionsRequest. Do not edit by hand.
export interface MutateBiddingDataExclusionsRequest {
  customerId?: string;
  operations?: BiddingDataExclusionOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
