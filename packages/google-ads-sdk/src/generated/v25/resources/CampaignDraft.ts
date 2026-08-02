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
