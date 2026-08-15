// @generated
// fingerprint: sha256:1d9a8093aa6f996e49a01bc2d00886eb2d9f7eab336f67589f5a6672b13bf909
// DO NOT EDIT: generated file; changes will be overwritten.
import type { UserListOperation } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateUserListsRequest. Do not edit by hand.
export interface MutateUserListsRequest {
  customerId?: string;
  operations?: UserListOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
