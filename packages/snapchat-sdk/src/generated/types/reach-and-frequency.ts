// Auto-generated types for reach-and-frequency — do not edit

export interface Campaign {
  id: string;
  updated_at: string;
  created_at: string;
  name: string;
  ad_account_id: string;
  status: string;
  start_time: string;
  reserved_type: string;
  objective: string;
  buy_model: string;
}


export interface ReservedForecasting {
  ad_account_id?: string;
}


export interface Adsquad {
  campaign_id?: string;
}


export interface CreateCampaignParams {
  adAccountId: string;
  name: string;
  status: string;
  start_time: string;
  buy_model: string;
  reserved_type: string;
  objective: string;
}


export interface CreateReservedForecastingParams {
  adAccountId: string;
  name: string;
  placement_v2: {
  config: string;
};
  start_time: string;
  end_time: string;
  delivery_constraint: string;
  pixel_id: unknown;
  campaign_id: string;
  daily_budget_micro: unknown;
  targeting: {
  geos: {
    country_code: string;
  }[];
};
  cap_and_exclusion_config: {
  frequency_cap_config: {
    frequency_cap_count: number;
    time_interval: number;
    frequency_cap_interval: string;
    frequency_cap_type: string;
  }[];
};
  type: string;
  conversion_window: unknown;
  status: string;
  auto_bid: boolean;
  optimization_goal: string;
  reach_goal: number;
  impression_goal: number;
  lifetime_budget_micro: number;
  reach_and_frequency_status: string;
}


export interface CreateAdsquadParams {
  campaignId: string;
}


export interface UpdateAdsquadParams {
  campaignId: string;
}
