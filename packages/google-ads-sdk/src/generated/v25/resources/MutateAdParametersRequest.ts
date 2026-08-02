import type { AdParameterOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateAdParametersRequest. Do not edit by hand.
export interface MutateAdParametersRequest {
  customerId?: string;
  operations?: AdParameterOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
