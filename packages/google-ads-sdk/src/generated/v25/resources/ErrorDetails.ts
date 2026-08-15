// @generated
// fingerprint: sha256:92d20afea43be61d1582ba743a785172a84f31938f74b57b632bca3e193238a3
// DO NOT EDIT: generated file; changes will be overwritten.
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
