// @generated
// fingerprint: sha256:362c5f706cf52f77e16b2f3ebe4258c408407d8ea1222b0f13dba80e3d3d1b84
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for ad-squads — do not edit

export interface EcidStatu {}


export interface Adsquad {
  id: string;
  updated_at: string;
  created_at: string;
  created_by_app_id: string;
  created_by_user: string;
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
  devices: {
    os_type: string;
    os_version_min: string;
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
  bid_strategy: string;
  daily_budget_micro: number;
  start_time: string;
  end_time: string;
  optimization_goal: string;
  event_sources: {
  MOBILE_APP: unknown[];
};
  delivery_constraint: string;
  pacing_type: string;
  creation_state: string;
  delivery_status: unknown[];
  skadnetwork_properties: {
  status: string;
};
}


export interface ListEcidStatusParams {
  snapAppId: string;
}


export interface ListSkadnetworkAdsquadsParams {
  mobileAppId: string;
}


export interface CreateAdsquadParams {
  campaignId: string;
  name: string;
  type: string;
  placement_v2: {
  config: string;
};
  optimization_goal: string;
  bid_micro: number;
  daily_budget_micro: number;
  bid_strategy: string;
  billing_event: string;
  targeting: {
  geos: {
    country_code: string;
  }[];
};
  start_time: string;
}


export interface UpdateAdsquadParams {
  campaignId: string;
  status: string;
  adsquad: {
  id: string;
  updated_at: string;
  created_at: string;
  name: string;
  campaign_id: string;
  type: string;
  placement_v2: {
    config: string;
  };
  optimization_goal: string;
  bid_micro: number;
  bid_strategy: string;
  daily_budget_micro: number;
};
}


export interface ListAdsquadsParams {
  campaignId: string;
  limit?: "50-1000";
  sort?: string;
  return_placement_v2?: string;
}


export interface ListAdsquads2Params {
  adAccountId: string;
  limit?: "50-1000";
  sort?: string;
  return_placement_v2?: string;
  read_deleted_entities?: string;
}


export interface GetAdsquadParams {
  adSquadId: string;
  return_placement_v2?: string;
  read_deleted_entities?: string;
  targeting_v2?: "ENABLED";
}


export interface GetAdsquadByIdsParams {
  adAccountId: string;
  entity_ids: {
  id: string;
}[];
}


export interface DeleteAdsquadParams {
  id: string;
}
