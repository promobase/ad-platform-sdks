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
