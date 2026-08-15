// @generated
// fingerprint: sha256:dd63875454fadbde2d1e70afc727e1196d3e30465b1f680baf9f0a09746956fa
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CampaignDraftStatus } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.CampaignDraft. Do not edit by hand.
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
