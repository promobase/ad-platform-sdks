// @generated
// fingerprint: sha256:62fb405b2eb64e32796caf70c16fdc86f043e0f4084ff65d90b93ecf963007e7
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ConversionValueRuleOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateConversionValueRulesRequest. Do not edit by hand.
export interface MutateConversionValueRulesRequest {
  customerId?: string;
  operations?: ConversionValueRuleOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
