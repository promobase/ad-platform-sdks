// Auto-generated types for lenses — do not edit

export interface Campaign {
  id: string;
  updated_at: string;
  created_at: string;
  name: string;
  ad_account_id: string;
  status: string;
  start_time: string;
}


export interface Adsquad {
  id: string;
  updated_at: string;
  created_at: string;
  name: string;
  status: string;
  campaign_id: string;
  type: string;
  targeting: {
  regulated_content: boolean;
  demographics: {
    min_age: string;
    max_age: string;
  }[];
  geos: {
    country_code: string;
  }[];
};
  targeting_reach_status: string;
  placement_v2: {
  config: string;
};
  billing_event: string;
  bid_micro: number;
  auto_bid: boolean;
  target_bid: boolean;
  daily_budget_micro: number;
  start_time: string;
  end_time: string;
  optimization_goal: string;
  delivery_constraint: string;
  pacing_type: string;
}


export interface LensPreview {}


export interface Creative {
  id: string;
  updated_at: string;
  created_at: string;
  name: string;
  ad_account_id: string;
  type: string;
  packaging_status: string;
  review_status: string;
  shareable: boolean;
  headline: string;
  brand_name: string;
  render_type: string;
  top_snap_media_id: string;
  top_snap_crop_position: string;
  ad_product: string;
}


export interface Ad {
  id: string;
  updated_at: string;
  created_at: string;
  name: string;
  ad_squad_id: string;
  creative_id: string;
  status: string;
  type: string;
}


export interface LifetimeStat {
  id: string;
  type: string;
  granularity: string;
  stats: {
  uniques: number;
  spend: number;
  total_reach: number;
  total_impressions: number;
  earned_impressions: number;
  paid_impressions: number;
  shares: number;
  saves: number;
  play_time_millis: number;
};
  start_time: string;
  end_time: string;
  finalized_data_end_time: string;
}


export interface CreateCampaignParams {
  adAccountId: string;
  name: string;
  status: string;
  start_time: string;
}


export interface CreateAdsquadParams {
  campaignId: string;
  name: string;
  status: string;
  type: string;
  placement_v2: {
  config: string;
};
  billing_event: string;
  bid_micro: string;
  daily_budget_micro: string;
  start_time: string;
  end_time: string;
  optimization_goal: string;
  targeting: {
  regulated_content: string;
  demographics: {
    min_age: string;
    max_age: string;
  }[];
  geos: {
    country_code: string;
  }[];
};
}


export interface GetMediaLensPreviewParams {
  mediaId: string;
}


export interface CreateCreativParams {
  adAccountId: string;
  name: string;
  type: string;
  top_snap_media_id: string;
  ad_product: string;
  headline: string;
  brand_name: string;
}


export interface CreateAdParams {
  adSquadId: string;
  creative_id: string;
  name: string;
  type: string;
  status: string;
}


export interface GetAdsquadStatsParams {
  adsquadId: string;
  "adsquad-id"?: string;
}
