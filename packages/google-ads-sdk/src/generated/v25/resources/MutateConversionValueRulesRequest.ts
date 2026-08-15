// @generated
// fingerprint: sha256:6612a0037fffe811bb14d9527343c68ce2003f0164c866643fd4ecfe422e9ebd
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ConversionValueRuleOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateConversionValueRulesRequest. Do not edit by hand.
export interface MutateConversionValueRulesRequest {
  customerId?: string;
  operations?: ConversionValueRuleOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
