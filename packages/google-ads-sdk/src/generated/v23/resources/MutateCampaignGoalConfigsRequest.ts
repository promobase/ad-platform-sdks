// @generated
// fingerprint: sha256:36bb7f25d5bd3de1f53318a8ce07248979762e1a1557cb9609a30dbd19a8dba3
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CampaignGoalConfigOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCampaignGoalConfigsRequest. Do not edit by hand.
export interface MutateCampaignGoalConfigsRequest {
  customerId?: string;
  operations?: CampaignGoalConfigOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
