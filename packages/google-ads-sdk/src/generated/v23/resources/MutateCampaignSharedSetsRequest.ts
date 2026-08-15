// @generated
// fingerprint: sha256:bb6d1d0b2186a8dd8073495faf357e109c4434dd9dfd2c1b5c1648418d672396
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CampaignSharedSetOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCampaignSharedSetsRequest. Do not edit by hand.
export interface MutateCampaignSharedSetsRequest {
  customerId?: string;
  operations?: CampaignSharedSetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
