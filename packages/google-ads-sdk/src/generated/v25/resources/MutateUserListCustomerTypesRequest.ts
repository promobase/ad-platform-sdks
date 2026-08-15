// @generated
// fingerprint: sha256:64c65535f7c466daa4fab4db45d33c75d50f2b88795ff101b20664fff8c3cb97
// DO NOT EDIT: generated file; changes will be overwritten.
import type { UserListCustomerTypeOperation } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateUserListCustomerTypesRequest. Do not edit by hand.
export interface MutateUserListCustomerTypesRequest {
  customerId?: string;
  operations?: UserListCustomerTypeOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
