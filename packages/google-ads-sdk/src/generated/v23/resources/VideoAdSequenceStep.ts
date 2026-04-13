import type { AdGroupType, VideoAdSequenceInteractionType } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.Campaign.VideoCampaignSettings.VideoAdSequenceStep. Do not edit by hand.
export interface VideoAdSequenceStep {
  videoAdSequenceStepId?: string;
  assetId?: string;
  adGroupType?: AdGroupType;
  previousStepId?: string;
  previousStepInteractionType?: VideoAdSequenceInteractionType;
}
