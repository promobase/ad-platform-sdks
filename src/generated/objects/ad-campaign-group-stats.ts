export interface AdCampaignGroupStatsFields {
  actions: Record<string, number>;
  campaign_group_id: string;
  clicks: number;
  end_time: string;
  impressions: number;
  inline_actions: Record<string, number>;
  social_clicks: number;
  social_impressions: number;
  social_spent: number;
  social_unique_clicks: number;
  social_unique_impressions: number;
  spent: number;
  start_time: string;
  unique_clicks: number;
  unique_impressions: number;
}

