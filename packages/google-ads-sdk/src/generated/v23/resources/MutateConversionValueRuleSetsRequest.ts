import type { ConversionValueRuleSetOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateConversionValueRuleSetsRequest. Do not edit by hand.
export interface MutateConversionValueRuleSetsRequest {
  customerId?: string;
  operations?: ConversionValueRuleSetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
