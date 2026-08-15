// @generated
// fingerprint: sha256:cb54cd6dcefec195bbd78b1f0f5d7670ae352d1cdf2b6de4874db44ff09e1871
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for audience-size — do not edit

export interface AudienceSizeV2 {}


export interface AudienceSize {}


export interface CreateAudienceSizeV2Params {
  adAccountId: string;
  name: string;
  status: string;
  type: string;
  targeting: {
  geos: {
    country_code: string;
  }[];
  demographics: {
    age_groups: unknown[];
  }[];
};
  placement: string;
  bid_micro: number;
  auto_bid: boolean;
  daily_budget_micro: number;
  delivery_constraint: string;
  optimization_goal: string;
  included_content_types: unknown[];
}


export interface ListAudienceSizeV2Params {
  adSquadId: string;
}


export interface CreateAudienceSizeParams {
  id: string;
  country_code: string;
}
