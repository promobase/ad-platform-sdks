// @generated
// fingerprint: sha256:f4b4432f7bf26b2070bf52a4371c91fefad447c6f3536fcc45230088294bbb59
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CustomerStatus } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.CustomerClient. Do not edit by hand.
export interface CustomerClient {
  resourceName?: string;
  clientCustomer?: string;
  hidden?: boolean;
  level?: string;
  timeZone?: string;
  testAccount?: boolean;
  manager?: boolean;
  descriptiveName?: string;
  currencyCode?: string;
  id?: string;
  appliedLabels?: string[];
  status?: CustomerStatus;
}
