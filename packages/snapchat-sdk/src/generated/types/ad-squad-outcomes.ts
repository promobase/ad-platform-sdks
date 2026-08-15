// @generated
// fingerprint: sha256:ec3d19259b7510146b35d449ccf1f4a7b0f028b237249edb5edfbcc1eabf1fcf
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for ad-squad-outcomes — do not edit

export interface AdSquadOutcomeEstimateV2 {
  request_id: string;
  message: string;
  error_code: string;
  daily: {
  conversions_lower: number;
  conversions_upper: number;
  reaches_lower: number;
  reaches_upper: number;
  impressions_lower: number;
  impressions_upper: number;
  is_budget_hit: boolean;
  budget_left: number;
  budget_spent_ratio: number;
};
  weekly: {
  conversions_lower: number;
  conversions_upper: number;
  reaches_lower: number;
  reaches_upper: number;
  impressions_lower: number;
  impressions_upper: number;
  is_budget_hit: boolean;
  budget_left: number;
  budget_spent_ratio: number;
};
  use_case: string;
}


export interface CreateAdSquadOutcomeEstimatesV2Params {
  adAccountId: string;
  placement_v2: {
  config: string;
  inclusion: {
    premium_content_bundle_ids: unknown[];
  };
  platforms: unknown[];
  snapchat_positions: unknown[];
};
  status: string;
  type: string;
  targeting: {
  geos: {
    country_code: string;
  }[];
  demographics: {
    min_age: string;
  }[];
  enable_targeting_expansion: boolean;
  auto_expansion_options: {
    interest_expansion_option: {
      enabled: boolean;
    };
    custom_audience_expansion_option: {
      enabled: boolean;
    };
  };
};
  bid_strategy: string;
  daily_budget_micro: number;
  delivery_constraint: string;
  start_time: string;
  optimization_goal: string;
  forced_view_setting: string;
  estimate_ad_types: unknown[];
  pixel_id: string;
}
