// @generated
// fingerprint: sha256:a39c72264695db7c0f731f724ddeb2fdaf4efb1c3fdab0a73eb6b3b08c3c0022
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CampaignBidModifierOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCampaignBidModifiersRequest. Do not edit by hand.
export interface MutateCampaignBidModifiersRequest {
  customerId?: string;
  operations?: CampaignBidModifierOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
