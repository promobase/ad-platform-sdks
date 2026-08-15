// @generated
// fingerprint: sha256:f200d42813660b098a447cd386ea245ab808dad1af5baf6dc81bcf18e30d7969
// DO NOT EDIT: generated file; changes will be overwritten.
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
