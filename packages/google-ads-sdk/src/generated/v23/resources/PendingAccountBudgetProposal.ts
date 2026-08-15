// @generated
// fingerprint: sha256:96b962a9f37f973e4458291fbd5077d8cf296e3e05d02d0a8eeb98e1ea544651
// DO NOT EDIT: generated file; changes will be overwritten.
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
