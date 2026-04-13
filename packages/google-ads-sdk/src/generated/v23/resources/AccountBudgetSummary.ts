import type { CampaignSummary, DateRange, InvalidActivitySummary } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.Invoice.AccountBudgetSummary. Do not edit by hand.
export interface AccountBudgetSummary {
  customer?: string;
  customerDescriptiveName?: string;
  accountBudget?: string;
  accountBudgetName?: string;
  purchaseOrderNumber?: string;
  subtotalAmountMicros?: string;
  taxAmountMicros?: string;
  totalAmountMicros?: string;
  billableActivityDateRange?: DateRange;
  servedAmountMicros?: string;
  billedAmountMicros?: string;
  overdeliveryAmountMicros?: string;
  invalidActivityAmountMicros?: string;
  invalidActivitySummaries?: InvalidActivitySummary[];
  campaignSummaries?: CampaignSummary[];
}
