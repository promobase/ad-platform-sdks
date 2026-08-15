// @generated
// fingerprint: sha256:89bc7605531015442c94c2b5f198364d811a964931f9828dd9f0f1dc17fb9aab
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CampaignLabelOperation } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateCampaignLabelsRequest. Do not edit by hand.
export interface MutateCampaignLabelsRequest {
  customerId?: string;
  operations?: CampaignLabelOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
