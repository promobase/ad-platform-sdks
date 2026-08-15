// @generated
// fingerprint: sha256:4b69a40dfc6f3d5f85c16ef3950f701d5a6c1ed15185af883591badf6a88b8bb
// DO NOT EDIT: generated file; changes will be overwritten.
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
