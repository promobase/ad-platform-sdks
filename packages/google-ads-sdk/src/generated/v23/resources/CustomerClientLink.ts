import type { ManagerLinkStatus } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.CustomerClientLink. Do not edit by hand.
export interface CustomerClientLink {
  resourceName?: string;
  clientCustomer?: string;
  managerLinkId?: string;
  status?: ManagerLinkStatus;
  hidden?: boolean;
}
