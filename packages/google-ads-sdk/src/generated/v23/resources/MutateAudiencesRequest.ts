import type { AudienceOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateAudiencesRequest. Do not edit by hand.
export interface MutateAudiencesRequest {
  customerId?: string;
  operations?: AudienceOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
