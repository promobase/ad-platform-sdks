// Auto-generated endpoint params for the Reddit Ads API v3 — do not edit

import type { ConfiguredStatus, BidStrategy, GoalType, OptimizationGoal, Targeting, CallToAction, CampaignObjective, IdentifierType, AudienceUserAction, ReportLevel, ConversionEvent, Geolocation } from "./types.ts";

export interface ListAccountsParams {}


export interface GetAccountParams {
  accountId: string;
}


export interface UpdateAccountParams {
  accountId: string;
  attribution_type?: string;
  click_attribution_window?: string;
  view_attribution_window?: string;
}


export interface GetMeParams {}


export interface ListAdgroupsParams {
  accountId: string;
  campaignId?: string;
}


export interface CreateAdgroupParams {
  accountId: string;
  campaign_id: string;
  name: string;
  configured_status: ConfiguredStatus;
  bid_strategy: BidStrategy;
  bid_value?: number;
  goal_type: GoalType;
  optimization_goal?: OptimizationGoal;
  conversion_pixel_id?: string;
  start_time: string;
  end_time?: string;
  targeting: Targeting;
}


export interface GetAdgroupParams {
  accountId: string;
  adGroupId: string;
}


export interface UpdateAdgroupParams {
  accountId: string;
  adGroupId: string;
  name?: string;
  configured_status?: ConfiguredStatus;
  bid_strategy?: BidStrategy;
  bid_value?: number;
  goal_type?: GoalType;
  optimization_goal?: OptimizationGoal;
  conversion_pixel_id?: string;
  start_time?: string;
  end_time?: string;
  targeting?: Targeting;
}


export interface ListAdsParams {
  accountId: string;
  adGroupId?: string;
}


export interface CreateAdParams {
  accountId: string;
  ad_group_id: string;
  name: string;
  configured_status: ConfiguredStatus;
  post_id?: string;
  click_url: string;
  click_url_query_parameters?: string;
  call_to_action?: CallToAction;
}


export interface GetAdParams {
  accountId: string;
  adId: string;
}


export interface UpdateAdParams {
  accountId: string;
  adId: string;
  name?: string;
  configured_status?: ConfiguredStatus;
  click_url?: string;
  click_url_query_parameters?: string;
  call_to_action?: CallToAction;
}


export interface GetBidsuggestionParams {
  accountId: string;
  targeting?: Targeting;
  objective?: CampaignObjective;
  goal_type?: GoalType;
}


export interface ListCampaignsParams {
  accountId: string;
}


export interface CreateCampaignParams {
  accountId: string;
  name: string;
  objective: CampaignObjective;
  configured_status: ConfiguredStatus;
  funding_instrument_id: string;
  spend_cap?: number;
  goal_type?: GoalType;
  app_id?: string;
  start_time?: string;
  end_time?: string;
  invoice_label?: string;
}


export interface GetCampaignParams {
  accountId: string;
  campaignId: string;
}


export interface UpdateCampaignParams {
  accountId: string;
  campaignId: string;
  name?: string;
  configured_status?: ConfiguredStatus;
  spend_cap?: number;
  goal_type?: GoalType;
  start_time?: string;
  end_time?: string;
  invoice_label?: string;
}


export interface DeleteCampaignParams {
  accountId: string;
  campaignId: string;
}


export interface ListCustomaudiencesParams {
  accountId: string;
}


export interface CreateCustomaudienceParams {
  accountId: string;
  name: string;
  type: string;
}


export interface GetCustomaudienceParams {
  accountId: string;
  audienceId: string;
}


export interface UpdateCustomaudienceusersParams {
  audienceId: string;
  users: {
    identifier_type: IdentifierType;
    identifier: string;
  }[];
  action: AudienceUserAction;
}


export interface ListFundinginstrumentsbyaccountParams {
  accountId: string;
}


export interface ListFundinginstrumentsbybusinessParams {
  businessId: string;
}


export interface ListPixelsbyaccountParams {
  accountId: string;
}


export interface ListPixelsbybusinessParams {
  businessId: string;
}


export interface GetPixelapplastfiredatParams {
  pixelId: string;
}


export interface GetPixellastfiredatParams {
  pixelId: string;
}


export interface CreateReportParams {
  accountId: string;
  start_date: string;
  end_date: string;
  level: ReportLevel;
  metrics: string[];
  breakdowns?: string[];
}


export interface ListSavedaudiencesParams {
  accountId: string;
}


export interface GetSavedaudienceParams {
  accountId: string;
  audienceId: string;
}


export interface ListStructuredpostsParams {
  accountId: string;
}


export interface CreateStructuredpostParams {
  accountId: string;
}


export interface PostConversionEventsParams {
  pixelId: string;
  events: ConversionEvent[];
}


export interface ListTargetingcarriersParams {}


export interface ListTargetingcommunitiesParams {
  q?: string;
}


export interface ListTargetingdevicesParams {}


export interface ListGeolocationsParams {}


export interface ValidateGeolocationsParams {
  geolocations?: Geolocation[];
}


export interface ListTargetinginterestsParams {}
