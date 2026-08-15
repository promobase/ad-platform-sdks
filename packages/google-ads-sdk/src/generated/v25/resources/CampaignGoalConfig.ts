// @generated
// fingerprint: sha256:402ba6a4ef778bdaef3558f48ace282569f1a2a3b7d3c4bffabe6d2ad68990f5
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CampaignLoyaltyRetentionGoalSettings, CampaignNewCustomerAcquisitionGoalSettings, CampaignRetentionGoalSettings, GoalType } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.CampaignGoalConfig. Do not edit by hand.
export interface CampaignGoalConfig {
  resourceName?: string;
  campaign?: string;
  goal?: string;
  goalType?: GoalType;
  campaignRetentionSettings?: CampaignRetentionGoalSettings;
  campaignNewCustomerAcquisitionSettings?: CampaignNewCustomerAcquisitionGoalSettings;
  campaignLoyaltyRetentionSettings?: CampaignLoyaltyRetentionGoalSettings;
}
