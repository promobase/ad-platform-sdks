import type { ConversionValueRuleOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateConversionValueRulesRequest. Do not edit by hand.
export interface MutateConversionValueRulesRequest {
  customerId?: string;
  operations?: ConversionValueRuleOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
