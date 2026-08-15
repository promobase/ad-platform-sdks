// @generated
// fingerprint: sha256:ca20d5196194cd9ac20c8c220793b84e2838aed6ee09969fa0ebe7ecd3d9bb94
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AccountBudgetProposalStatus, AccountBudgetProposalType, SpendingLimitType, TimeType } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.AccountBudgetProposal. Do not edit by hand.
export interface AccountBudgetProposal {
  resourceName?: string;
  id?: string;
  billingSetup?: string;
  accountBudget?: string;
  proposalType?: AccountBudgetProposalType;
  status?: AccountBudgetProposalStatus;
  proposedName?: string;
  approvedStartDateTime?: string;
  proposedPurchaseOrderNumber?: string;
  proposedNotes?: string;
  creationDateTime?: string;
  approvalDateTime?: string;
  proposedStartDateTime?: string;
  proposedStartTimeType?: TimeType;
  proposedEndDateTime?: string;
  proposedEndTimeType?: TimeType;
  approvedEndDateTime?: string;
  approvedEndTimeType?: TimeType;
  proposedSpendingLimitMicros?: string;
  proposedSpendingLimitType?: SpendingLimitType;
  approvedSpendingLimitMicros?: string;
  approvedSpendingLimitType?: SpendingLimitType;
}
