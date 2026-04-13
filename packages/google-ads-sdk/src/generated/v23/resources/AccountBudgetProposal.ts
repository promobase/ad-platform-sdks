import type { AccountBudgetProposalStatus, AccountBudgetProposalType, SpendingLimitType, TimeType } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.AccountBudgetProposal. Do not edit by hand.
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
