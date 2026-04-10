export interface AdCampaignStatsFields {
  account_id: string;
  actions: Record<string, unknown>;
  adgroup_id: string;
  campaign_id: string;
  campaign_ids: string[];
  clicks: number;
  end_time: Record<string, unknown>;
  id: string;
  impressions: string;
  inline_actions: Record<string, unknown>;
  io_number: number;
  is_completed: boolean;
  line_number: number;
  newsfeed_position: Record<string, unknown>;
  social_clicks: number;
  social_impressions: string;
  social_spent: number;
  social_unique_clicks: number;
  social_unique_impressions: string;
  spent: number;
  start_time: Record<string, unknown>;
  topline_id: string;
  unique_clicks: number;
  unique_impressions: string;
}

