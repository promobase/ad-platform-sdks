// @generated
// fingerprint: sha256:9bad6ad0d650b428614aee3dca775182439a5812e9f17cac2239dd4a97abad81
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CustomerMatchUserListMetadata, OfflineUserDataJobFailureReason, OfflineUserDataJobMetadata, OfflineUserDataJobStatus, OfflineUserDataJobType, StoreSalesMetadata } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.OfflineUserDataJob. Do not edit by hand.
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
