// @generated
// fingerprint: sha256:5b55f398bdadf42238f5fcc020f4b310495c2c3e8683194f3e60c4e10d0268cf
// DO NOT EDIT: generated file; changes will be overwritten.
import type { BiddingDataExclusionOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateBiddingDataExclusionsRequest. Do not edit by hand.
export interface MutateBiddingDataExclusionsRequest {
  customerId?: string;
  operations?: BiddingDataExclusionOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
