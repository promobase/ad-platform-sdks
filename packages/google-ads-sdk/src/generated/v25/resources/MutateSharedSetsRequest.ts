// @generated
// fingerprint: sha256:8c55a987a9c944d30f8134fcf18a3374301a062c8c0eea733f4d285e40915003
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ResponseContentType, SharedSetOperation } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateSharedSetsRequest. Do not edit by hand.
export interface MutateSharedSetsRequest {
  customerId?: string;
  operations?: SharedSetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
