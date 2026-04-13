import type { UserListOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateUserListsRequest. Do not edit by hand.
export interface MutateUserListsRequest {
  customerId?: string;
  operations?: UserListOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
