// @generated
// fingerprint: sha256:27db968582b0e27835d08aa22f15a75ebd7e7cbad34c6dedf683ed5f02619203
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdParameterOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateAdParametersRequest. Do not edit by hand.
export interface MutateAdParametersRequest {
  customerId?: string;
  operations?: AdParameterOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
