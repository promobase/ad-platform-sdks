import type { ConversionCustomVariableOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateConversionCustomVariablesRequest. Do not edit by hand.
export interface MutateConversionCustomVariablesRequest {
  customerId?: string;
  operations?: ConversionCustomVariableOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
