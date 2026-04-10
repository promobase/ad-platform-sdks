export interface CustomAudienceSharedAccountCampaignInfoFields {
  account_id: string;
  account_name: string;
  adset_excluding_count: number;
  adset_including_count: number;
  campaign_delivery_status: string;
  campaign_objective: string;
  campaign_pages: Record<string, unknown>[];
  campaign_schedule: string;
}

