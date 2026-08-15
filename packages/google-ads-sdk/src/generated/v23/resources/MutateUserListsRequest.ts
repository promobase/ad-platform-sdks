// @generated
// fingerprint: sha256:21e2f5a4035e19307caae9d2d3e76c5de9e7ad3d782809e77c261dbe67139b59
// DO NOT EDIT: generated file; changes will be overwritten.
import type { UserListOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateUserListsRequest. Do not edit by hand.
export interface MutateUserListsRequest {
  customerId?: string;
  operations?: UserListOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
