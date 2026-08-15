// @generated
// fingerprint: sha256:28f5d1dd159c1cfc4e5778886ac457d9eab64089ddb2178370e63a93720b3aac
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ExperimentArmOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateExperimentArmsRequest. Do not edit by hand.
export interface MutateExperimentArmsRequest {
  customerId?: string;
  operations?: ExperimentArmOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
