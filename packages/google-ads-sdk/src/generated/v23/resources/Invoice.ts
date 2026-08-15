// @generated
// fingerprint: sha256:8b5cd03b23835d56e8c4dc4b541871cc679137f7fed0f22bca96d453ce7f02c6
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AccountBudgetSummary, AccountSummary, DateRange, InvoiceType } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.Invoice. Do not edit by hand.
export interface Invoice {
  resourceName?: string;
  id?: string;
  type?: InvoiceType;
  billingSetup?: string;
  paymentsAccountId?: string;
  paymentsProfileId?: string;
  issueDate?: string;
  dueDate?: string;
  serviceDateRange?: DateRange;
  currencyCode?: string;
  adjustmentsSubtotalAmountMicros?: string;
  adjustmentsTaxAmountMicros?: string;
  adjustmentsTotalAmountMicros?: string;
  regulatoryCostsSubtotalAmountMicros?: string;
  regulatoryCostsTaxAmountMicros?: string;
  regulatoryCostsTotalAmountMicros?: string;
  exportChargeSubtotalAmountMicros?: string;
  exportChargeTaxAmountMicros?: string;
  exportChargeTotalAmountMicros?: string;
  subtotalAmountMicros?: string;
  taxAmountMicros?: string;
  totalAmountMicros?: string;
  correctedInvoice?: string;
  replacedInvoices?: string[];
  pdfUrl?: string;
  accountBudgetSummaries?: AccountBudgetSummary[];
  accountSummaries?: AccountSummary[];
}
