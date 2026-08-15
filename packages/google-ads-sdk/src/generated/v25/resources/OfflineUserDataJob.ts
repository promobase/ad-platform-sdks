// @generated
// fingerprint: sha256:cb017064f9fc85682b6137e9dbcc7433e10fe3c80a2a46fdcb93450576f32676
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CustomerMatchUserListMetadata, OfflineUserDataJobFailureReason, OfflineUserDataJobMetadata, OfflineUserDataJobStatus, OfflineUserDataJobType, StoreSalesMetadata } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.OfflineUserDataJob. Do not edit by hand.
export interface OfflineUserDataJob {
  resourceName?: string;
  id?: string;
  externalId?: string;
  type?: OfflineUserDataJobType;
  status?: OfflineUserDataJobStatus;
  failureReason?: OfflineUserDataJobFailureReason;
  operationMetadata?: OfflineUserDataJobMetadata;
  customerMatchUserListMetadata?: CustomerMatchUserListMetadata;
  storeSalesMetadata?: StoreSalesMetadata;
}
