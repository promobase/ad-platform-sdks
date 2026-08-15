// @generated
// fingerprint: sha256:8080f1f9adfbc2d846b259296c2da0fb4e1bc003c9b922d95ee3c141fdd39725
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CampaignDraftOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCampaignDraftsRequest. Do not edit by hand.
export interface MutateCampaignDraftsRequest {
  customerId?: string;
  operations?: CampaignDraftOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
