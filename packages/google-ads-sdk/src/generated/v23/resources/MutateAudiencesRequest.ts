// @generated
// fingerprint: sha256:034e512bf17764213d9ccc8a538033d1c91108ec0de36bfeed6177f8b4cc0836
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AudienceOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateAudiencesRequest. Do not edit by hand.
export interface MutateAudiencesRequest {
  customerId?: string;
  operations?: AudienceOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
