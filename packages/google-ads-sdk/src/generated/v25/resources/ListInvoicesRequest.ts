// @generated
// fingerprint: sha256:13d129e73d4df8c080bffc20f2e5091a4813cb318afcc1601e360879268efb2c
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MonthOfYear } from "../index.ts";

// Generated from google.ads.googleads.v25.services.ListInvoicesRequest. Do not edit by hand.
export interface ListInvoicesRequest {
  customerId?: string;
  billingSetup?: string;
  issueYear?: string;
  issueMonth?: MonthOfYear;
  includeGranularLevelInvoiceDetails?: boolean;
}
