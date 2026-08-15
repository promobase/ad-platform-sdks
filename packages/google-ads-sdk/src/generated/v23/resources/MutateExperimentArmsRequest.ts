// @generated
// fingerprint: sha256:e7c9137f90330d58ffdb63c12f4e59b53fa984d9557a09411f5ed5776abc57db
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ExperimentArmOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateExperimentArmsRequest. Do not edit by hand.
export interface MutateExperimentArmsRequest {
  customerId?: string;
  operations?: ExperimentArmOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
