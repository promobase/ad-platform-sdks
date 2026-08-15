// @generated
// fingerprint: sha256:4964171e045debd48b71781995dae2b248bce41d919e716e1e4b381fbf872392
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CustomerStatus } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.CustomerClient. Do not edit by hand.
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
