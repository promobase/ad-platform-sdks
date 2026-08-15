// @generated
// fingerprint: sha256:43388f087af2a31f241e979a12c65f3c7aacdf55c284b8a59504ed54e9fc70e7
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ResponseContentType, SharedSetOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateSharedSetsRequest. Do not edit by hand.
export interface MutateSharedSetsRequest {
  customerId?: string;
  operations?: SharedSetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
