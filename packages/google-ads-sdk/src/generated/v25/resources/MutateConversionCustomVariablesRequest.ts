// @generated
// fingerprint: sha256:a7d413ee222bbe95a78f07f7e62a2a8f222930ef97f6043c554f124c32122021
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ConversionCustomVariableOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateConversionCustomVariablesRequest. Do not edit by hand.
export interface MutateConversionCustomVariablesRequest {
  customerId?: string;
  operations?: ConversionCustomVariableOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
