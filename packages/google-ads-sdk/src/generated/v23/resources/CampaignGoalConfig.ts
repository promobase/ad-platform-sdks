import type { CampaignRetentionGoalSettings, GoalType } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.CampaignGoalConfig. Do not edit by hand.
export interface CampaignGoalConfig {
  resourceName?: string;
  campaign?: string;
  goal?: string;
  goalType?: GoalType;
  campaignRetentionSettings?: CampaignRetentionGoalSettings;
}
