// @generated
// fingerprint: sha256:40748ef80bef9f2a466728705c6a9ea89e1acca96d8a86b74b174208a8185bbd
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CampaignOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateCampaignsRequest. Do not edit by hand.
export interface MutateCampaignsRequest {
  customerId?: string;
  operations?: CampaignOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
