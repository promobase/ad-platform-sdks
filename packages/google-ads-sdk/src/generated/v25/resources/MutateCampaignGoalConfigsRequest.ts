// @generated
// fingerprint: sha256:9f9ee205420d4fb38337689b403f1f86d489eea6b908ff0b0b63bdb4f0c882c8
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CampaignGoalConfigOperation } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateCampaignGoalConfigsRequest. Do not edit by hand.
export interface MutateCampaignGoalConfigsRequest {
  customerId?: string;
  operations?: CampaignGoalConfigOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
