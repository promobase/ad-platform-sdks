// @generated
// fingerprint: sha256:129cccaf0f86929ad095d4a71e8aaf43296200e56bef26d7c9d683d8c876cd71
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdParameterOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateAdParametersRequest. Do not edit by hand.
export interface MutateAdParametersRequest {
  customerId?: string;
  operations?: AdParameterOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
