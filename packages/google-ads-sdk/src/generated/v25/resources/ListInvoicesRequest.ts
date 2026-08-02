import type { MonthOfYear } from "../index.ts";

// Generated from google.ads.googleads.v25.services.ListInvoicesRequest. Do not edit by hand.
export interface ListInvoicesRequest {
  customerId?: string;
  billingSetup?: string;
  issueYear?: string;
  issueMonth?: MonthOfYear;
  includeGranularLevelInvoiceDetails?: boolean;
}
