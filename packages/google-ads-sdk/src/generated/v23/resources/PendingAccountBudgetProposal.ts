import type { AccountBudgetProposalType, SpendingLimitType, TimeType } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.AccountBudget.PendingAccountBudgetProposal. Do not edit by hand.
export interface PendingAccountBudgetProposal {
  accountBudgetProposal?: string;
  proposalType?: AccountBudgetProposalType;
  name?: string;
  startDateTime?: string;
  purchaseOrderNumber?: string;
  notes?: string;
  creationDateTime?: string;
  endDateTime?: string;
  endTimeType?: TimeType;
  spendingLimitMicros?: string;
  spendingLimitType?: SpendingLimitType;
}
