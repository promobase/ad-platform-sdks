import type { CustomerManagerLinkOperation } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateCustomerManagerLinkRequest. Do not edit by hand.
export interface MutateCustomerManagerLinkRequest {
  customerId?: string;
  operations?: CustomerManagerLinkOperation[];
  validateOnly?: boolean;
}
