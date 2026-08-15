// @generated
// fingerprint: sha256:7f5697364b4c2dbf5ad9268dffcbca6af908201505839a927ed5d7ed2dd2d244
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdGroupOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateAdGroupsRequest. Do not edit by hand.
export interface MutateAdGroupsRequest {
  customerId?: string;
  operations?: AdGroupOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
