// @generated
// fingerprint: sha256:58d2b9fd5afe5d3880b198dbadbad7f9be5e6236ba37f91a09a68023d0429a6d
// DO NOT EDIT: generated file; changes will be overwritten.
import type { UserListCustomerTypeOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateUserListCustomerTypesRequest. Do not edit by hand.
export interface MutateUserListCustomerTypesRequest {
  customerId?: string;
  operations?: UserListCustomerTypeOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
