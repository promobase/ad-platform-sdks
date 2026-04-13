import type { AccountLinkOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateAccountLinkRequest. Do not edit by hand.
export interface MutateAccountLinkRequest {
  customerId?: string;
  operation?: AccountLinkOperation;
  partialFailure?: boolean;
  validateOnly?: boolean;
}
