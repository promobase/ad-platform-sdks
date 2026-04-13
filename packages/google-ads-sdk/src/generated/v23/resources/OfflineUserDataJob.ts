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
