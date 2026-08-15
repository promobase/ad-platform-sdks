// @generated
// fingerprint: sha256:7895842d9bcfe4ebfb4e49068d9cec852de1bd548017af1ec3e39ea125e3b15a
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateGoogleAdsRequest. Do not edit by hand.
export interface MutateGoogleAdsRequest {
  customerId?: string;
  mutateOperations?: MutateOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
