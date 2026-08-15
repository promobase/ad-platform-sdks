// @generated
// fingerprint: sha256:7cee6fcccbb67fd3357c557cd39c67cfc81e35592add092bb601dc778f9b1666
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ExperimentOperation } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateExperimentsRequest. Do not edit by hand.
export interface MutateExperimentsRequest {
  customerId?: string;
  operations?: ExperimentOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
