import type { GoalOperation } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateGoalsRequest. Do not edit by hand.
export interface MutateGoalsRequest {
  customerId?: string;
  operations?: GoalOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
