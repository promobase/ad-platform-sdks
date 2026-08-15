// @generated
// fingerprint: sha256:d893d02e6f4079c9d0a4b60f9a2b16ee2b7bdeec8ce170491a050efffd648726
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CampaignGroupOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCampaignGroupsRequest. Do not edit by hand.
export interface MutateCampaignGroupsRequest {
  customerId?: string;
  operations?: CampaignGroupOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
