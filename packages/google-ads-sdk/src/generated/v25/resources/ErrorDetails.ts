import type { BudgetPerDayMinimumErrorDetails, IncompatibleCloGoalsErrorDetails, PolicyFindingDetails, PolicyViolationDetails, QuotaErrorDetails, ReservationErrorDetails, ResourceCountDetails } from "../index.ts";

// Generated from google.ads.googleads.v25.errors.ErrorDetails. Do not edit by hand.
export interface ErrorDetails {
  unpublishedErrorCode?: string;
  policyViolationDetails?: PolicyViolationDetails;
  policyFindingDetails?: PolicyFindingDetails;
  quotaErrorDetails?: QuotaErrorDetails;
  resourceCountDetails?: ResourceCountDetails;
  budgetPerDayMinimumErrorDetails?: BudgetPerDayMinimumErrorDetails;
  reservationErrorDetails?: ReservationErrorDetails;
  incompatibleCloGoalErrorDetails?: IncompatibleCloGoalsErrorDetails;
}
