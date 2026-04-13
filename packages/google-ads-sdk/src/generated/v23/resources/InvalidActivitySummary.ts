import type { MonthOfYear } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.Invoice.InvalidActivitySummary. Do not edit by hand.
export interface InvalidActivitySummary {
  originalMonthOfService?: MonthOfYear;
  originalYearOfService?: string;
  originalInvoiceId?: string;
  originalAccountBudgetName?: string;
  originalPurchaseOrderNumber?: string;
  amountMicros?: string;
}
