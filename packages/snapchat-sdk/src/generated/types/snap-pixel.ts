// Auto-generated types for snap-pixel — do not edit

export interface Pixel {
  id: string;
  updated_at: string;
  created_at: string;
  last_updated_by_app_id: string;
  last_updated_by_user: string;
  name: string;
  organization_id: string;
  ad_account_id: string;
  status: string;
  pixel_javascript: string;
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
  geos: {
    country_code: string;
  }[];
};
  placement: string;
  billing_event: string;
  bid_micro: number;
  daily_budget_micro: number;
  start_time: string;
  end_time: string;
  optimization_goal: string;
  pixel_id: string;
}


export interface TimeseriesStat {
  id: string;
  type: string;
  granularity: string;
  start_time: string;
  end_time: string;
  finalized_data_end_time: string;
  timeseries: {
  start_time: string;
  end_time: string;
  stats: {
    impressions: number;
    swipes: number;
    conversion_purchases: number;
    conversion_save: number;
    conversion_start_checkout: number;
    conversion_add_cart: number;
    conversion_view_content: number;
    conversion_add_billing: number;
    conversion_sign_ups: number;
    conversion_searches: number;
    conversion_level_completes: number;
    conversion_app_opens: number;
    conversion_page_views: number;
  };
}[];
}


export interface TotalStat {
  id: string;
  type: string;
  granularity: string;
  stats: {
  impressions: number;
  swipes: number;
  conversion_purchases: number;
  conversion_save: number;
  conversion_start_checkout: number;
  conversion_add_cart: number;
  conversion_view_content: number;
  conversion_add_billing: number;
  conversion_sign_ups: number;
  conversion_searches: number;
  conversion_level_completes: number;
  conversion_app_opens: number;
  conversion_page_views: number;
};
  finalized_data_end_time: string;
}


export interface Stats {
  "pixel-id"?: string;
}


export interface ListPixelsParams {
  adAccountId: string;
}


export interface ListPixels2Params {
  organizationId: string;
}


export interface GetPixelParams {
  pIXELID: string;
}


export interface UpdatePixelParams {
  organizationId: string;
}


export interface UpdatePixel2Params {
  adAccountId: string;
  name: string;
  status: string;
  campaign_id: string;
  type: string;
  placement: string;
  billing_event: string;
  bid_micro: string;
  daily_budget_micro: string;
  start_time: string;
  end_time: string;
  optimization_goal: string;
  targeting: {
  regulated_content: boolean;
  geos: {
    country_code: string;
  }[];
};
  pixel_id: string;
}


export interface GetCampaignStatsParams {
  campaignId: string;
  "campaign-id"?: string;
}


export interface GetAdsquadStatsParams {
  adsquadId: string;
  "adsquad-id"?: string;
}


export interface GetAdStatsParams {
  adId: string;
  "ad-id"?: string;
}


export interface GetDomainStatsParams {
  pixelId: string;
  "pixel-id"?: string;
}


export interface GetPixelStatsParams {
  pixelId: string;
  "pixel-id"?: string;
}
