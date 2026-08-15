// @generated
// fingerprint: sha256:5e30375f3260c4e4fbaf1d3916bc12b4412819795c415cd1e9e279fee98770c6
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MonthOfYear } from "../index.ts";

// Generated from google.ads.googleads.v23.services.ListInvoicesRequest. Do not edit by hand.
export interface ListInvoicesRequest {
  customerId?: string;
  billingSetup?: string;
  issueYear?: string;
  issueMonth?: MonthOfYear;
  includeGranularLevelInvoiceDetails?: boolean;
}
