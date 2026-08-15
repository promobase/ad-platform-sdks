// @generated
// fingerprint: sha256:bf6519e8638eabfccc84d1efa03293711e44d11eb79548e4637f820b6c8645a2
// DO NOT EDIT: generated file; changes will be overwritten.
import type { BudgetPerDayMinimumErrorDetails, PolicyFindingDetails, PolicyViolationDetails, QuotaErrorDetails, ReservationErrorDetails, ResourceCountDetails } from "../index.ts";

// Generated from google.ads.googleads.v23.errors.ErrorDetails. Do not edit by hand.
export interface ErrorDetails {
  unpublishedErrorCode?: string;
  policyViolationDetails?: PolicyViolationDetails;
  policyFindingDetails?: PolicyFindingDetails;
  quotaErrorDetails?: QuotaErrorDetails;
  resourceCountDetails?: ResourceCountDetails;
  budgetPerDayMinimumErrorDetails?: BudgetPerDayMinimumErrorDetails;
  reservationErrorDetails?: ReservationErrorDetails;
}
