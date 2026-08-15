// @generated
// fingerprint: sha256:49b738887c75bfe670539f05e6ba11258c67cafa19ba9cf4a19f4f9d62210175
// DO NOT EDIT: generated file; changes will be overwritten.
import type { GoalOptimizationEligibility, GoalType, RetentionGoal } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.Goal. Do not edit by hand.
export interface Goal {
  resourceName?: string;
  goalId?: string;
  goalType?: GoalType;
  ownerCustomer?: string;
  optimizationEligibility?: GoalOptimizationEligibility;
  retentionGoalSettings?: RetentionGoal;
}
