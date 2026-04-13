import type { UserListCustomerTypeOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateUserListCustomerTypesRequest. Do not edit by hand.
export interface MutateUserListCustomerTypesRequest {
  customerId?: string;
  operations?: UserListCustomerTypeOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
