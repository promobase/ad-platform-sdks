// @generated
// fingerprint: sha256:73f9c6c057312041bb78c4b007fb88b124bef70c090b02c5fc2d40881096b060
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CampaignOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCampaignsRequest. Do not edit by hand.
export interface MutateCampaignsRequest {
  customerId?: string;
  operations?: CampaignOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
