// @generated
// fingerprint: sha256:843dafe04eb97ed71ba3d4abf792baa44a5c77586822645ed4821e1f7a1f2538
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ConversionCustomVariableOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateConversionCustomVariablesRequest. Do not edit by hand.
export interface MutateConversionCustomVariablesRequest {
  customerId?: string;
  operations?: ConversionCustomVariableOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
