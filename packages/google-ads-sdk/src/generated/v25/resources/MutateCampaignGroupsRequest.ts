// @generated
// fingerprint: sha256:d33b2185b2b348c884ad88c674abcad4eab33f3db4ec06c06e0c4044cde546dd
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CampaignGroupOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateCampaignGroupsRequest. Do not edit by hand.
export interface MutateCampaignGroupsRequest {
  customerId?: string;
  operations?: CampaignGroupOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
