// @generated
// fingerprint: sha256:d716730e886e39ee7d7a899578800ee45dbb2588b9b8825502287f66b8da63c3
// DO NOT EDIT: generated file; changes will be overwritten.
import type { GoalOperation } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateGoalsRequest. Do not edit by hand.
export interface MutateGoalsRequest {
  customerId?: string;
  operations?: GoalOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
