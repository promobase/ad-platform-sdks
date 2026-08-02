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
