// @generated
// fingerprint: sha256:a9937f8a2644ba181884fb14cd817c6380c13a3db95b76bd39aada6d2eae11ed
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ConversionValueRuleSetOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateConversionValueRuleSetsRequest. Do not edit by hand.
export interface MutateConversionValueRuleSetsRequest {
  customerId?: string;
  operations?: ConversionValueRuleSetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
