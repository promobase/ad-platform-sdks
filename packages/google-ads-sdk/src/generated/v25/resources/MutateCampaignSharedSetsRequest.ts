// @generated
// fingerprint: sha256:881b9153570083d9ad8e9a81f02db441ba5bda3df411fee46b4aa41d95083c5e
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CampaignSharedSetOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateCampaignSharedSetsRequest. Do not edit by hand.
export interface MutateCampaignSharedSetsRequest {
  customerId?: string;
  operations?: CampaignSharedSetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
