// @generated
// fingerprint: sha256:ab8832cabdf925bd08200026a7cabb25b088e32e6badaacaf671c1339d10a241
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ExperimentOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateExperimentsRequest. Do not edit by hand.
export interface MutateExperimentsRequest {
  customerId?: string;
  operations?: ExperimentOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
