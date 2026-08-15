// @generated
// fingerprint: sha256:9958a33e9440c6c5fb0f1265993a127e54290109f931c7839d5baaa5fbd19653
// DO NOT EDIT: generated file; changes will be overwritten.
import type { SmartCampaignEligibleDetails, SmartCampaignEndedDetails, SmartCampaignNotEligibleDetails, SmartCampaignPausedDetails, SmartCampaignRemovedDetails, SmartCampaignStatus } from "../index.ts";

// Generated from google.ads.googleads.v25.services.GetSmartCampaignStatusResponse. Do not edit by hand.
export interface GetSmartCampaignStatusResponse {
  smartCampaignStatus?: SmartCampaignStatus;
  notEligibleDetails?: SmartCampaignNotEligibleDetails;
  eligibleDetails?: SmartCampaignEligibleDetails;
  pausedDetails?: SmartCampaignPausedDetails;
  removedDetails?: SmartCampaignRemovedDetails;
  endedDetails?: SmartCampaignEndedDetails;
}
