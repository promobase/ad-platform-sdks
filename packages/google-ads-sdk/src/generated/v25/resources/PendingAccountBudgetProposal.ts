// @generated
// fingerprint: sha256:3a2c4f16800344ec950b0d602abcecb66290e3f6b26d5c9e815d18234328448b
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AccountBudgetProposalType, SpendingLimitType, TimeType } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.AccountBudget.PendingAccountBudgetProposal. Do not edit by hand.
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
