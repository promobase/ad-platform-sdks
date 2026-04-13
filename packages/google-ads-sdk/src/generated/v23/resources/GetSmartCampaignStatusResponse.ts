import type { SmartCampaignEligibleDetails, SmartCampaignEndedDetails, SmartCampaignNotEligibleDetails, SmartCampaignPausedDetails, SmartCampaignRemovedDetails, SmartCampaignStatus } from "../index.ts";

// Generated from google.ads.googleads.v23.services.GetSmartCampaignStatusResponse. Do not edit by hand.
export interface GetSmartCampaignStatusResponse {
  smartCampaignStatus?: SmartCampaignStatus;
  notEligibleDetails?: SmartCampaignNotEligibleDetails;
  eligibleDetails?: SmartCampaignEligibleDetails;
  pausedDetails?: SmartCampaignPausedDetails;
  removedDetails?: SmartCampaignRemovedDetails;
  endedDetails?: SmartCampaignEndedDetails;
}
