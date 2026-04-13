import type { AccountBudgetStatus, PendingAccountBudgetProposal, SpendingLimitType, TimeType } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.AccountBudget. Do not edit by hand.
export interface AccountBudget {
  resourceName?: string;
  id?: string;
  billingSetup?: string;
  status?: AccountBudgetStatus;
  name?: string;
  proposedStartDateTime?: string;
  approvedStartDateTime?: string;
  totalAdjustmentsMicros?: string;
  amountServedMicros?: string;
  purchaseOrderNumber?: string;
  notes?: string;
  pendingProposal?: PendingAccountBudgetProposal;
  proposedEndDateTime?: string;
  proposedEndTimeType?: TimeType;
  approvedEndDateTime?: string;
  approvedEndTimeType?: TimeType;
  proposedSpendingLimitMicros?: string;
  proposedSpendingLimitType?: SpendingLimitType;
  approvedSpendingLimitMicros?: string;
  approvedSpendingLimitType?: SpendingLimitType;
  adjustedSpendingLimitMicros?: string;
  adjustedSpendingLimitType?: SpendingLimitType;
}
