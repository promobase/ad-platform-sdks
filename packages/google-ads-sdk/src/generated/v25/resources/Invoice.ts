// @generated
// fingerprint: sha256:5862d6810ed694bb687234f27af13f9d828cf059ec1e3fd1e21cb6224536ea25
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AccountBudgetSummary, AccountSummary, DateRange, InvoiceType } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.Invoice. Do not edit by hand.
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
