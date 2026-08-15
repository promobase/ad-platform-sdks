// @generated
// fingerprint: sha256:1f1d717aba8598ecf50d9a75b27af432c4e3451c149aa27b0dd08e5484be7cf9
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CampaignDraftOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateCampaignDraftsRequest. Do not edit by hand.
export interface MutateCampaignDraftsRequest {
  customerId?: string;
  operations?: CampaignDraftOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
