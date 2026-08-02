import type { RemarketingActionOperation } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateRemarketingActionsRequest. Do not edit by hand.
export interface MutateRemarketingActionsRequest {
  customerId?: string;
  operations?: RemarketingActionOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
