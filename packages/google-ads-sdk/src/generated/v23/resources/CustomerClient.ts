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
