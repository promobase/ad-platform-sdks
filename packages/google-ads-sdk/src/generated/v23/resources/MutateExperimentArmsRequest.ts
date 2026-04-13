import type { ExperimentArmOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateExperimentArmsRequest. Do not edit by hand.
export interface MutateExperimentArmsRequest {
  customerId?: string;
  operations?: ExperimentArmOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
