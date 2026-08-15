// @generated
// fingerprint: sha256:a4ae7a994cc96e7d54755f3b3b273d6cbe3273e9350349da6755e16a232a9def
// DO NOT EDIT: generated file; changes will be overwritten.
import type { GoalOptimizationEligibility, GoalType, LoyaltyRetentionGoal, NewCustomerAcquisitionGoal, RetentionGoal } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.Goal. Do not edit by hand.
export interface Goal {
  resourceName?: string;
  goalId?: string;
  goalType?: GoalType;
  ownerCustomer?: string;
  optimizationEligibility?: GoalOptimizationEligibility;
  retentionGoalSettings?: RetentionGoal;
  newCustomerAcquisitionGoalSettings?: NewCustomerAcquisitionGoal;
  loyaltyRetentionGoalSettings?: LoyaltyRetentionGoal;
}
