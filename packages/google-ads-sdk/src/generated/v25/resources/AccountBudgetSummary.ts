// @generated
// fingerprint: sha256:3e4a1f4cd85dc5804e41fbbb7841add139653463735746a9f94f2d44d26c26cd
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CampaignSummary, DateRange, InvalidActivitySummary } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.Invoice.AccountBudgetSummary. Do not edit by hand.
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
