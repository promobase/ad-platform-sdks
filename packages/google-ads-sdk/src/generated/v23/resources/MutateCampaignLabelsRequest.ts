// @generated
// fingerprint: sha256:e5f44f04d8cd160f61a1e9e986e4fbb7aba7fca9452cea1ffd51baad7540ce6f
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CampaignLabelOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCampaignLabelsRequest. Do not edit by hand.
export interface MutateCampaignLabelsRequest {
  customerId?: string;
  operations?: CampaignLabelOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
