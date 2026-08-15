// @generated
// fingerprint: sha256:4cde39535ccb1e426e2c263ba344c3acb63e4fd5ddae7d184cf9ec9e2be5610a
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CampaignDraftStatus } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.CampaignDraft. Do not edit by hand.
export interface CampaignDraft {
  resourceName?: string;
  draftId?: string;
  baseCampaign?: string;
  name?: string;
  draftCampaign?: string;
  status?: CampaignDraftStatus;
  hasExperimentRunning?: boolean;
  longRunningOperation?: string;
}
