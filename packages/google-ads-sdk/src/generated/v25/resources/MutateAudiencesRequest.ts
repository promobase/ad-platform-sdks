// @generated
// fingerprint: sha256:da877341b583ea8f521fb4da23920c5a272e39de93e0ea47eda28059fb19dc96
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AudienceOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateAudiencesRequest. Do not edit by hand.
export interface MutateAudiencesRequest {
  customerId?: string;
  operations?: AudienceOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
