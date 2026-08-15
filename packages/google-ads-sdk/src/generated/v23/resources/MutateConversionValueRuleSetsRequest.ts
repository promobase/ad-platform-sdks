// @generated
// fingerprint: sha256:3da941c32ef2f11c99c5083f9c0fc44b9671bdb59466adcb0b68f4be90fbf1eb
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ConversionValueRuleSetOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateConversionValueRuleSetsRequest. Do not edit by hand.
export interface MutateConversionValueRuleSetsRequest {
  customerId?: string;
  operations?: ConversionValueRuleSetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
