// @generated
// fingerprint: sha256:f3c54ccd2fc557069dac0b549703f75c03ca64a03042546c23f93d7f52c967f4
// DO NOT EDIT: generated file; changes will be overwritten.
// This file is generated. Do not edit by hand.
import { Schema } from "effect";

export interface AccessTokenParams {
  readonly expires_in: number;
  readonly token_type: string;
  readonly refresh_token: string;
  readonly access_token: string;
}
export interface AccessTokenParamsEncoded {
  readonly expires_in: number;
  readonly token_type: string;
  readonly refresh_token: string;
  readonly access_token: string;
}
export const AccessTokenParams: Schema.Schema<AccessTokenParams, AccessTokenParamsEncoded, never> = Schema.Struct({
  expires_in: Schema.Number,
  token_type: Schema.String,
  refresh_token: Schema.String,
  access_token: Schema.String,
});

export interface AccessTokenResponse {
  readonly client_id?: string;
  readonly client_secret?: string;
  readonly code?: string;
  readonly grant_type?: string;
  readonly redirect_uri?: string;
}
export interface AccessTokenResponseEncoded {
  readonly client_id?: string;
  readonly client_secret?: string;
  readonly code?: string;
  readonly grant_type?: string;
  readonly redirect_uri?: string;
}
export const AccessTokenResponse: Schema.Schema<AccessTokenResponse, AccessTokenResponseEncoded, never> = Schema.Struct({
  client_id: Schema.optional(Schema.String),
  client_secret: Schema.optional(Schema.String),
  code: Schema.optional(Schema.String),
  grant_type: Schema.optional(Schema.String),
  redirect_uri: Schema.optional(Schema.String),
});

export interface AdaccountParams {
  readonly adAccountId: string;
}
export interface AdaccountParamsEncoded {
  readonly adAccountId: string;
}
export const AdaccountParams: Schema.Schema<AdaccountParams, AdaccountParamsEncoded, never> = Schema.Struct({
  adAccountId: Schema.String,
});

export interface AdaccountResponse {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly name: string;
  readonly type: string;
  readonly status: string;
  readonly organization_id: string;
  readonly funding_source_ids: ReadonlyArray<unknown>;
  readonly currency: string;
  readonly timezone: string;
  readonly advertiser: string;
}
export interface AdaccountResponseEncoded {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly name: string;
  readonly type: string;
  readonly status: string;
  readonly organization_id: string;
  readonly funding_source_ids: ReadonlyArray<unknown>;
  readonly currency: string;
  readonly timezone: string;
  readonly advertiser: string;
}
export const AdaccountResponse: Schema.Schema<AdaccountResponse, AdaccountResponseEncoded, never> = Schema.Struct({
  id: Schema.String,
  updated_at: Schema.String,
  created_at: Schema.String,
  name: Schema.String,
  type: Schema.String,
  status: Schema.String,
  organization_id: Schema.String,
  funding_source_ids: Schema.Array(Schema.Unknown),
  currency: Schema.String,
  timezone: Schema.String,
  advertiser: Schema.String,
});

export interface AdaccountsBody {
  readonly name: string;
  readonly type: string;
  readonly status: string;
  readonly organization_id: string;
  readonly funding_source_ids: ReadonlyArray<unknown>;
  readonly currency: string;
  readonly billing_type: string;
  readonly billing_center_id: string;
  readonly lifetime_spend_cap_micro: string;
  readonly timezone: string;
  readonly advertiser: string;
}
export interface AdaccountsBodyEncoded {
  readonly name: string;
  readonly type: string;
  readonly status: string;
  readonly organization_id: string;
  readonly funding_source_ids: ReadonlyArray<unknown>;
  readonly currency: string;
  readonly billing_type: string;
  readonly billing_center_id: string;
  readonly lifetime_spend_cap_micro: string;
  readonly timezone: string;
  readonly advertiser: string;
}
export const AdaccountsBody: Schema.Schema<AdaccountsBody, AdaccountsBodyEncoded, never> = Schema.Struct({
  name: Schema.String,
  type: Schema.String,
  status: Schema.String,
  organization_id: Schema.String,
  funding_source_ids: Schema.Array(Schema.Unknown),
  currency: Schema.String,
  billing_type: Schema.String,
  billing_center_id: Schema.String,
  lifetime_spend_cap_micro: Schema.String,
  timezone: Schema.String,
  advertiser: Schema.String,
});

export interface AdditionalMediaBody {
  readonly url: string;
  readonly tags: ReadonlyArray<unknown>;
}
export interface AdditionalMediaBodyEncoded {
  readonly url: string;
  readonly tags: ReadonlyArray<unknown>;
}
export const AdditionalMediaBody: Schema.Schema<AdditionalMediaBody, AdditionalMediaBodyEncoded, never> = Schema.Struct({
  url: Schema.String,
  tags: Schema.Array(Schema.Unknown),
});

export interface AddressBody {
  readonly line: string;
  readonly line2: string;
  readonly locality: string;
  readonly postal_code: string;
  readonly region: string;
  readonly country_code: string;
}
export interface AddressBodyEncoded {
  readonly line: string;
  readonly line2: string;
  readonly locality: string;
  readonly postal_code: string;
  readonly region: string;
  readonly country_code: string;
}
export const AddressBody: Schema.Schema<AddressBody, AddressBodyEncoded, never> = Schema.Struct({
  line: Schema.String,
  line2: Schema.String,
  locality: Schema.String,
  postal_code: Schema.String,
  region: Schema.String,
  country_code: Schema.String,
});

export interface AdParams {
  readonly adAccountId: string;
  readonly entity_ids: ReadonlyArray<EntityIdsBody>;
}
export interface AdParamsEncoded {
  readonly adAccountId: string;
  readonly entity_ids: ReadonlyArray<EntityIdsBodyEncoded>;
}
export const AdParams: Schema.Schema<AdParams, AdParamsEncoded, never> = Schema.Struct({
  adAccountId: Schema.String,
  entity_ids: Schema.Array(Schema.suspend(() => EntityIdsBody)),
});

export interface AdResponse {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly name: string;
  readonly ad_squad_id: string;
  readonly creative_id: string;
  readonly status: string;
  readonly type: string;
  readonly render_type: string;
  readonly review_status: string;
  readonly delivery_status: ReadonlyArray<unknown>;
}
export interface AdResponseEncoded {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly name: string;
  readonly ad_squad_id: string;
  readonly creative_id: string;
  readonly status: string;
  readonly type: string;
  readonly render_type: string;
  readonly review_status: string;
  readonly delivery_status: ReadonlyArray<unknown>;
}
export const AdResponse: Schema.Schema<AdResponse, AdResponseEncoded, never> = Schema.Struct({
  id: Schema.String,
  updated_at: Schema.String,
  created_at: Schema.String,
  name: Schema.String,
  ad_squad_id: Schema.String,
  creative_id: Schema.String,
  status: Schema.String,
  type: Schema.String,
  render_type: Schema.String,
  review_status: Schema.String,
  delivery_status: Schema.Array(Schema.Unknown),
});

export interface AdsBody {
  readonly id: string;
  readonly ad_squad_id: string;
  readonly creative_id: string;
  readonly name: string;
  readonly type: string;
  readonly status: string;
  readonly third_party_paid_impression_tracking_urls: ReadonlyArray<unknown>;
  readonly third_party_on_swipe_tracking_urls: ReadonlyArray<unknown>;
}
export interface AdsBodyEncoded {
  readonly id: string;
  readonly ad_squad_id: string;
  readonly creative_id: string;
  readonly name: string;
  readonly type: string;
  readonly status: string;
  readonly third_party_paid_impression_tracking_urls: ReadonlyArray<unknown>;
  readonly third_party_on_swipe_tracking_urls: ReadonlyArray<unknown>;
}
export const AdsBody: Schema.Schema<AdsBody, AdsBodyEncoded, never> = Schema.Struct({
  id: Schema.String,
  ad_squad_id: Schema.String,
  creative_id: Schema.String,
  name: Schema.String,
  type: Schema.String,
  status: Schema.String,
  third_party_paid_impression_tracking_urls: Schema.Array(Schema.Unknown),
  third_party_on_swipe_tracking_urls: Schema.Array(Schema.Unknown),
});

export interface AdSquadOutcomeEstimatesV2Body {
  readonly placement_v2: PlacementV2Body;
  readonly status: string;
  readonly type: string;
  readonly targeting: TargetingBody;
  readonly bid_strategy: string;
  readonly daily_budget_micro: number;
  readonly delivery_constraint: string;
  readonly start_time: string;
  readonly optimization_goal: string;
  readonly forced_view_setting: string;
  readonly estimate_ad_types: ReadonlyArray<unknown>;
  readonly pixel_id: string;
}
export interface AdSquadOutcomeEstimatesV2BodyEncoded {
  readonly placement_v2: PlacementV2BodyEncoded;
  readonly status: string;
  readonly type: string;
  readonly targeting: TargetingBodyEncoded;
  readonly bid_strategy: string;
  readonly daily_budget_micro: number;
  readonly delivery_constraint: string;
  readonly start_time: string;
  readonly optimization_goal: string;
  readonly forced_view_setting: string;
  readonly estimate_ad_types: ReadonlyArray<unknown>;
  readonly pixel_id: string;
}
export const AdSquadOutcomeEstimatesV2Body: Schema.Schema<AdSquadOutcomeEstimatesV2Body, AdSquadOutcomeEstimatesV2BodyEncoded, never> = Schema.Struct({
  placement_v2: Schema.suspend(() => PlacementV2Body),
  status: Schema.String,
  type: Schema.String,
  targeting: Schema.suspend(() => TargetingBody),
  bid_strategy: Schema.String,
  daily_budget_micro: Schema.Number,
  delivery_constraint: Schema.String,
  start_time: Schema.String,
  optimization_goal: Schema.String,
  forced_view_setting: Schema.String,
  estimate_ad_types: Schema.Array(Schema.Unknown),
  pixel_id: Schema.String,
});

export interface AdSquadOutcomeEstimateV2Params {
  readonly adAccountId: string;
  readonly ad_squad_outcome_estimates_v2: ReadonlyArray<AdSquadOutcomeEstimatesV2Body>;
}
export interface AdSquadOutcomeEstimateV2ParamsEncoded {
  readonly adAccountId: string;
  readonly ad_squad_outcome_estimates_v2: ReadonlyArray<AdSquadOutcomeEstimatesV2BodyEncoded>;
}
export const AdSquadOutcomeEstimateV2Params: Schema.Schema<AdSquadOutcomeEstimateV2Params, AdSquadOutcomeEstimateV2ParamsEncoded, never> = Schema.Struct({
  adAccountId: Schema.String,
  ad_squad_outcome_estimates_v2: Schema.Array(Schema.suspend(() => AdSquadOutcomeEstimatesV2Body)),
});

export interface AdSquadOutcomeEstimateV2Response {
  readonly request_id: string;
  readonly message: string;
  readonly error_code: string;
  readonly daily: DailyBody;
  readonly weekly: WeeklyBody;
  readonly use_case: string;
}
export interface AdSquadOutcomeEstimateV2ResponseEncoded {
  readonly request_id: string;
  readonly message: string;
  readonly error_code: string;
  readonly daily: DailyBodyEncoded;
  readonly weekly: WeeklyBodyEncoded;
  readonly use_case: string;
}
export const AdSquadOutcomeEstimateV2Response: Schema.Schema<AdSquadOutcomeEstimateV2Response, AdSquadOutcomeEstimateV2ResponseEncoded, never> = Schema.Struct({
  request_id: Schema.String,
  message: Schema.String,
  error_code: Schema.String,
  daily: Schema.suspend(() => DailyBody),
  weekly: Schema.suspend(() => WeeklyBody),
  use_case: Schema.String,
});

export interface AdsquadParams {
  readonly adAccountId: string;
  readonly entity_ids: ReadonlyArray<EntityIdsBody>;
}
export interface AdsquadParamsEncoded {
  readonly adAccountId: string;
  readonly entity_ids: ReadonlyArray<EntityIdsBodyEncoded>;
}
export const AdsquadParams: Schema.Schema<AdsquadParams, AdsquadParamsEncoded, never> = Schema.Struct({
  adAccountId: Schema.String,
  entity_ids: Schema.Array(Schema.suspend(() => EntityIdsBody)),
});

export interface AdsquadResponse {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly name: string;
  readonly status: string;
  readonly campaign_id: string;
  readonly type: string;
  readonly targeting: TargetingBody;
  readonly placement_v2: PlacementV2Body;
  readonly billing_event: string;
  readonly auto_bid: boolean;
  readonly target_bid: boolean;
  readonly bid_strategy: string;
  readonly daily_budget_micro: number;
  readonly start_time: string;
  readonly optimization_goal: string;
}
export interface AdsquadResponseEncoded {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly name: string;
  readonly status: string;
  readonly campaign_id: string;
  readonly type: string;
  readonly targeting: TargetingBodyEncoded;
  readonly placement_v2: PlacementV2BodyEncoded;
  readonly billing_event: string;
  readonly auto_bid: boolean;
  readonly target_bid: boolean;
  readonly bid_strategy: string;
  readonly daily_budget_micro: number;
  readonly start_time: string;
  readonly optimization_goal: string;
}
export const AdsquadResponse: Schema.Schema<AdsquadResponse, AdsquadResponseEncoded, never> = Schema.Struct({
  id: Schema.String,
  updated_at: Schema.String,
  created_at: Schema.String,
  name: Schema.String,
  status: Schema.String,
  campaign_id: Schema.String,
  type: Schema.String,
  targeting: Schema.suspend(() => TargetingBody),
  placement_v2: Schema.suspend(() => PlacementV2Body),
  billing_event: Schema.String,
  auto_bid: Schema.Boolean,
  target_bid: Schema.Boolean,
  bid_strategy: Schema.String,
  daily_budget_micro: Schema.Number,
  start_time: Schema.String,
  optimization_goal: Schema.String,
});

export interface AdsquadsBody {
  readonly name: string;
  readonly status: string;
  readonly campaign_id: string;
  readonly type: string;
  readonly placement: string;
  readonly billing_event: string;
  readonly bid_micro: string;
  readonly daily_budget_micro: string;
  readonly start_time: string;
  readonly end_time: string;
  readonly optimization_goal: string;
  readonly targeting: TargetingBody;
  readonly pixel_id: string;
}
export interface AdsquadsBodyEncoded {
  readonly name: string;
  readonly status: string;
  readonly campaign_id: string;
  readonly type: string;
  readonly placement: string;
  readonly billing_event: string;
  readonly bid_micro: string;
  readonly daily_budget_micro: string;
  readonly start_time: string;
  readonly end_time: string;
  readonly optimization_goal: string;
  readonly targeting: TargetingBodyEncoded;
  readonly pixel_id: string;
}
export const AdsquadsBody: Schema.Schema<AdsquadsBody, AdsquadsBodyEncoded, never> = Schema.Struct({
  name: Schema.String,
  status: Schema.String,
  campaign_id: Schema.String,
  type: Schema.String,
  placement: Schema.String,
  billing_event: Schema.String,
  bid_micro: Schema.String,
  daily_budget_micro: Schema.String,
  start_time: Schema.String,
  end_time: Schema.String,
  optimization_goal: Schema.String,
  targeting: Schema.suspend(() => TargetingBody),
  pixel_id: Schema.String,
});

export interface AdSquadUiRenderDataBody {
  readonly conversion_location: string;
}
export interface AdSquadUiRenderDataBodyEncoded {
  readonly conversion_location: string;
}
export const AdSquadUiRenderDataBody: Schema.Schema<AdSquadUiRenderDataBody, AdSquadUiRenderDataBodyEncoded, never> = Schema.Struct({
  conversion_location: Schema.String,
});

export interface AdSquadUiRenderDataParams {
  readonly adAccountId: string;
  readonly limit?: string;
}
export interface AdSquadUiRenderDataParamsEncoded {
  readonly adAccountId: string;
  readonly limit?: string;
}
export const AdSquadUiRenderDataParams: Schema.Schema<AdSquadUiRenderDataParams, AdSquadUiRenderDataParamsEncoded, never> = Schema.Struct({
  adAccountId: Schema.String,
  limit: Schema.optional(Schema.String),
});

export interface AdSquadUiRenderDataResponse {
  readonly id: string;
  readonly ad_squad_id: string;
  readonly conversion_location: string;
}
export interface AdSquadUiRenderDataResponseEncoded {
  readonly id: string;
  readonly ad_squad_id: string;
  readonly conversion_location: string;
}
export const AdSquadUiRenderDataResponse: Schema.Schema<AdSquadUiRenderDataResponse, AdSquadUiRenderDataResponseEncoded, never> = Schema.Struct({
  id: Schema.String,
  ad_squad_id: Schema.String,
  conversion_location: Schema.String,
});

export interface AdvancedDemographicsParams {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}
export interface AdvancedDemographicsParamsEncoded {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}
export const AdvancedDemographicsParams: Schema.Schema<AdvancedDemographicsParams, AdvancedDemographicsParamsEncoded, never> = Schema.Struct({
  "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
  "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
  "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
  "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
});

export interface AdvancedDemographicsResponse {
  readonly name: string;
  readonly id: string;
}
export interface AdvancedDemographicsResponseEncoded {
  readonly name: string;
  readonly id: string;
}
export const AdvancedDemographicsResponse: Schema.Schema<AdvancedDemographicsResponse, AdvancedDemographicsResponseEncoded, never> = Schema.Struct({
  name: Schema.String,
  id: Schema.String,
});

export interface AgeGroupParams {
  readonly min_age?: string;
  readonly max_age?: MaxAgeEnum;
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}
export interface AgeGroupParamsEncoded {
  readonly min_age?: string;
  readonly max_age?: MaxAgeEnumEncoded;
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}
export const AgeGroupParams: Schema.Schema<AgeGroupParams, AgeGroupParamsEncoded, never> = Schema.Struct({
  min_age: Schema.optional(Schema.String),
  max_age: Schema.optional(Schema.suspend(() => MaxAgeEnum)),
  "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
  "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
  "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
  "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
});

export interface AgeGroupResponse {
  readonly name: string;
  readonly id: string;
}
export interface AgeGroupResponseEncoded {
  readonly name: string;
  readonly id: string;
}
export const AgeGroupResponse: Schema.Schema<AgeGroupResponse, AgeGroupResponseEncoded, never> = Schema.Struct({
  name: Schema.String,
  id: Schema.String,
});

export interface AndroidAppLinkBody {
  readonly url: string;
  readonly package: string;
  readonly app_name: string;
}
export interface AndroidAppLinkBodyEncoded {
  readonly url: string;
  readonly package: string;
  readonly app_name: string;
}
export const AndroidAppLinkBody: Schema.Schema<AndroidAppLinkBody, AndroidAppLinkBodyEncoded, never> = Schema.Struct({
  url: Schema.String,
  package: Schema.String,
  app_name: Schema.String,
});

export interface AsyncStatsReportParams {
  readonly adAccountId: string;
  readonly async_format?: string;
  readonly start_time?: string;
  readonly end_time?: string;
}
export interface AsyncStatsReportParamsEncoded {
  readonly adAccountId: string;
  readonly async_format?: string;
  readonly start_time?: string;
  readonly end_time?: string;
}
export const AsyncStatsReportParams: Schema.Schema<AsyncStatsReportParams, AsyncStatsReportParamsEncoded, never> = Schema.Struct({
  adAccountId: Schema.String,
  async_format: Schema.optional(Schema.String),
  start_time: Schema.optional(Schema.String),
  end_time: Schema.optional(Schema.String),
});

export interface AsyncStatsReportResponse {
  readonly report_run_id: string;
  readonly async_status: string;
}
export interface AsyncStatsReportResponseEncoded {
  readonly report_run_id: string;
  readonly async_status: string;
}
export const AsyncStatsReportResponse: Schema.Schema<AsyncStatsReportResponse, AsyncStatsReportResponseEncoded, never> = Schema.Struct({
  report_run_id: Schema.String,
  async_status: Schema.String,
});

export interface AudienceSizeParams {
  readonly id: string;
  readonly geos: ReadonlyArray<GeosBody>;
  readonly demographics: ReadonlyArray<DemographicsBody>;
}
export interface AudienceSizeParamsEncoded {
  readonly id: string;
  readonly geos: ReadonlyArray<GeosBodyEncoded>;
  readonly demographics: ReadonlyArray<DemographicsBodyEncoded>;
}
export const AudienceSizeParams: Schema.Schema<AudienceSizeParams, AudienceSizeParamsEncoded, never> = Schema.Struct({
  id: Schema.String,
  geos: Schema.Array(Schema.suspend(() => GeosBody)),
  demographics: Schema.Array(Schema.suspend(() => DemographicsBody)),
});

export interface AudienceSizeResponse {

}
export interface AudienceSizeResponseEncoded {

}
export const AudienceSizeResponse: Schema.Schema<AudienceSizeResponse, AudienceSizeResponseEncoded, never> = Schema.Struct({

});

export interface AudienceSizeV2Params {
  readonly adAccountId: string;
  readonly name: string;
  readonly status: string;
  readonly type: string;
  readonly targeting: TargetingBody;
  readonly placement: string;
  readonly bid_micro: number;
  readonly auto_bid: boolean;
  readonly daily_budget_micro: number;
  readonly delivery_constraint: string;
  readonly optimization_goal: string;
  readonly included_content_types: ReadonlyArray<unknown>;
}
export interface AudienceSizeV2ParamsEncoded {
  readonly adAccountId: string;
  readonly name: string;
  readonly status: string;
  readonly type: string;
  readonly targeting: TargetingBodyEncoded;
  readonly placement: string;
  readonly bid_micro: number;
  readonly auto_bid: boolean;
  readonly daily_budget_micro: number;
  readonly delivery_constraint: string;
  readonly optimization_goal: string;
  readonly included_content_types: ReadonlyArray<unknown>;
}
export const AudienceSizeV2Params: Schema.Schema<AudienceSizeV2Params, AudienceSizeV2ParamsEncoded, never> = Schema.Struct({
  adAccountId: Schema.String,
  name: Schema.String,
  status: Schema.String,
  type: Schema.String,
  targeting: Schema.suspend(() => TargetingBody),
  placement: Schema.String,
  bid_micro: Schema.Number,
  auto_bid: Schema.Boolean,
  daily_budget_micro: Schema.Number,
  delivery_constraint: Schema.String,
  optimization_goal: Schema.String,
  included_content_types: Schema.Array(Schema.Unknown),
});

export interface AudienceSizeV2Response {

}
export interface AudienceSizeV2ResponseEncoded {

}
export const AudienceSizeV2Response: Schema.Schema<AudienceSizeV2Response, AudienceSizeV2ResponseEncoded, never> = Schema.Struct({

});

export interface AVAILABILITYBody {
  readonly EQ: string;
}
export interface AVAILABILITYBodyEncoded {
  readonly EQ: string;
}
export const AVAILABILITYBody: Schema.Schema<AVAILABILITYBody, AVAILABILITYBodyEncoded, never> = Schema.Struct({
  EQ: Schema.String,
});

export interface BaseSpecBody {
  readonly interests: ReadonlyArray<InterestsBody>;
  readonly geos: ReadonlyArray<GeosBody>;
}
export interface BaseSpecBodyEncoded {
  readonly interests: ReadonlyArray<InterestsBodyEncoded>;
  readonly geos: ReadonlyArray<GeosBodyEncoded>;
}
export const BaseSpecBody: Schema.Schema<BaseSpecBody, BaseSpecBodyEncoded, never> = Schema.Struct({
  interests: Schema.Array(Schema.suspend(() => InterestsBody)),
  geos: Schema.Array(Schema.suspend(() => GeosBody)),
});

export interface BidEstimateParams {
  readonly id: string;
  readonly optimization_goal: string;
  readonly targeting: TargetingBody;
}
export interface BidEstimateParamsEncoded {
  readonly id: string;
  readonly optimization_goal: string;
  readonly targeting: TargetingBodyEncoded;
}
export const BidEstimateParams: Schema.Schema<BidEstimateParams, BidEstimateParamsEncoded, never> = Schema.Struct({
  id: Schema.String,
  optimization_goal: Schema.String,
  targeting: Schema.suspend(() => TargetingBody),
});

export interface BidEstimateResponse {

}
export interface BidEstimateResponseEncoded {

}
export const BidEstimateResponse: Schema.Schema<BidEstimateResponse, BidEstimateResponseEncoded, never> = Schema.Struct({

});

export interface BillingcenterParams {
  readonly billingCenterId: string;
}
export interface BillingcenterParamsEncoded {
  readonly billingCenterId: string;
}
export const BillingcenterParams: Schema.Schema<BillingcenterParams, BillingcenterParamsEncoded, never> = Schema.Struct({
  billingCenterId: Schema.String,
});

export interface BillingcenterResponse {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly organization_id: string;
  readonly name: string;
  readonly email_address: string;
  readonly address_line_1: string;
  readonly locality: string;
  readonly administrative_district_level_1: string;
  readonly country: string;
  readonly postal_code: string;
  readonly alternative_email_addresses: ReadonlyArray<unknown>;
}
export interface BillingcenterResponseEncoded {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly organization_id: string;
  readonly name: string;
  readonly email_address: string;
  readonly address_line_1: string;
  readonly locality: string;
  readonly administrative_district_level_1: string;
  readonly country: string;
  readonly postal_code: string;
  readonly alternative_email_addresses: ReadonlyArray<unknown>;
}
export const BillingcenterResponse: Schema.Schema<BillingcenterResponse, BillingcenterResponseEncoded, never> = Schema.Struct({
  id: Schema.String,
  updated_at: Schema.String,
  created_at: Schema.String,
  organization_id: Schema.String,
  name: Schema.String,
  email_address: Schema.String,
  address_line_1: Schema.String,
  locality: Schema.String,
  administrative_district_level_1: Schema.String,
  country: Schema.String,
  postal_code: Schema.String,
  alternative_email_addresses: Schema.Array(Schema.Unknown),
});

export interface BillingcentersBody {
  readonly organization_id: string;
  readonly name: string;
  readonly email_address: string;
  readonly address_line_1: string;
  readonly locality: string;
  readonly administrative_district_level_1: string;
  readonly country: string;
  readonly postal_code: string;
  readonly alternative_email_addresses: ReadonlyArray<unknown>;
}
export interface BillingcentersBodyEncoded {
  readonly organization_id: string;
  readonly name: string;
  readonly email_address: string;
  readonly address_line_1: string;
  readonly locality: string;
  readonly administrative_district_level_1: string;
  readonly country: string;
  readonly postal_code: string;
  readonly alternative_email_addresses: ReadonlyArray<unknown>;
}
export const BillingcentersBody: Schema.Schema<BillingcentersBody, BillingcentersBodyEncoded, never> = Schema.Struct({
  organization_id: Schema.String,
  name: Schema.String,
  email_address: Schema.String,
  address_line_1: Schema.String,
  locality: Schema.String,
  administrative_district_level_1: Schema.String,
  country: Schema.String,
  postal_code: Schema.String,
  alternative_email_addresses: Schema.Array(Schema.Unknown),
});

export interface CampaignParams {
  readonly adAccountId: string;
  readonly entity_ids: ReadonlyArray<EntityIdsBody>;
}
export interface CampaignParamsEncoded {
  readonly adAccountId: string;
  readonly entity_ids: ReadonlyArray<EntityIdsBodyEncoded>;
}
export const CampaignParams: Schema.Schema<CampaignParams, CampaignParamsEncoded, never> = Schema.Struct({
  adAccountId: Schema.String,
  entity_ids: Schema.Array(Schema.suspend(() => EntityIdsBody)),
});

export interface CampaignResponse {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly name: string;
  readonly ad_account_id: string;
  readonly status: string;
  readonly objective: string;
  readonly start_time: string;
  readonly buy_model: string;
  readonly delivery_status: ReadonlyArray<unknown>;
  readonly creation_state: string;
  readonly objective_v2_properties: ObjectiveV2PropertiesBody;
  readonly pacing_properties_version: number;
}
export interface CampaignResponseEncoded {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly name: string;
  readonly ad_account_id: string;
  readonly status: string;
  readonly objective: string;
  readonly start_time: string;
  readonly buy_model: string;
  readonly delivery_status: ReadonlyArray<unknown>;
  readonly creation_state: string;
  readonly objective_v2_properties: ObjectiveV2PropertiesBodyEncoded;
  readonly pacing_properties_version: number;
}
export const CampaignResponse: Schema.Schema<CampaignResponse, CampaignResponseEncoded, never> = Schema.Struct({
  id: Schema.String,
  updated_at: Schema.String,
  created_at: Schema.String,
  name: Schema.String,
  ad_account_id: Schema.String,
  status: Schema.String,
  objective: Schema.String,
  start_time: Schema.String,
  buy_model: Schema.String,
  delivery_status: Schema.Array(Schema.Unknown),
  creation_state: Schema.String,
  objective_v2_properties: Schema.suspend(() => ObjectiveV2PropertiesBody),
  pacing_properties_version: Schema.Number,
});

export interface CampaignsBody {
  readonly name: string;
  readonly ad_account_id: string;
  readonly status: string;
  readonly start_time: string;
  readonly buy_model: string;
  readonly creation_state: string;
  readonly objective_v2_properties: ObjectiveV2PropertiesBody;
}
export interface CampaignsBodyEncoded {
  readonly name: string;
  readonly ad_account_id: string;
  readonly status: string;
  readonly start_time: string;
  readonly buy_model: string;
  readonly creation_state: string;
  readonly objective_v2_properties: ObjectiveV2PropertiesBodyEncoded;
}
export const CampaignsBody: Schema.Schema<CampaignsBody, CampaignsBodyEncoded, never> = Schema.Struct({
  name: Schema.String,
  ad_account_id: Schema.String,
  status: Schema.String,
  start_time: Schema.String,
  buy_model: Schema.String,
  creation_state: Schema.String,
  objective_v2_properties: Schema.suspend(() => ObjectiveV2PropertiesBody),
});

export interface CarrierParams {
  readonly oSTYPE: string;
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}
export interface CarrierParamsEncoded {
  readonly oSTYPE: string;
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}
export const CarrierParams: Schema.Schema<CarrierParams, CarrierParamsEncoded, never> = Schema.Struct({
  oSTYPE: Schema.String,
  "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
  "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
  "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
  "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
});

export interface CarrierResponse {
  readonly id: string;
  readonly name: string;
  readonly valid_country: string;
}
export interface CarrierResponseEncoded {
  readonly id: string;
  readonly name: string;
  readonly valid_country: string;
}
export const CarrierResponse: Schema.Schema<CarrierResponse, CarrierResponseEncoded, never> = Schema.Struct({
  id: Schema.String,
  name: Schema.String,
  valid_country: Schema.String,
});

export interface CatalogParams {
  readonly catalogId: string;
}
export interface CatalogParamsEncoded {
  readonly catalogId: string;
}
export const CatalogParams: Schema.Schema<CatalogParams, CatalogParamsEncoded, never> = Schema.Struct({
  catalogId: Schema.String,
});

export interface CatalogResponse {
  readonly created_at: string;
  readonly updated_at: string;
  readonly id: string;
  readonly name: string;
  readonly organization_id: string;
  readonly event_sources: ReadonlyArray<EventSourcesBody>;
  readonly default_product_set_id: string;
  readonly vertical: string;
}
export interface CatalogResponseEncoded {
  readonly created_at: string;
  readonly updated_at: string;
  readonly id: string;
  readonly name: string;
  readonly organization_id: string;
  readonly event_sources: ReadonlyArray<EventSourcesBodyEncoded>;
  readonly default_product_set_id: string;
  readonly vertical: string;
}
export const CatalogResponse: Schema.Schema<CatalogResponse, CatalogResponseEncoded, never> = Schema.Struct({
  created_at: Schema.String,
  updated_at: Schema.String,
  id: Schema.String,
  name: Schema.String,
  organization_id: Schema.String,
  event_sources: Schema.Array(Schema.suspend(() => EventSourcesBody)),
  default_product_set_id: Schema.String,
  vertical: Schema.String,
});

export interface CatalogsBody {
  readonly organization_id: string;
  readonly name: string;
  readonly vertical: string;
  readonly event_sources: ReadonlyArray<EventSourcesBody>;
}
export interface CatalogsBodyEncoded {
  readonly organization_id: string;
  readonly name: string;
  readonly vertical: string;
  readonly event_sources: ReadonlyArray<EventSourcesBodyEncoded>;
}
export const CatalogsBody: Schema.Schema<CatalogsBody, CatalogsBodyEncoded, never> = Schema.Struct({
  organization_id: Schema.String,
  name: Schema.String,
  vertical: Schema.String,
  event_sources: Schema.Array(Schema.suspend(() => EventSourcesBody)),
});

export interface CategoriesLoiParams {
  readonly proximity: string;
  readonly proximity_unit: string;
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}
export interface CategoriesLoiParamsEncoded {
  readonly proximity: string;
  readonly proximity_unit: string;
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}
export const CategoriesLoiParams: Schema.Schema<CategoriesLoiParams, CategoriesLoiParamsEncoded, never> = Schema.Struct({
  proximity: Schema.String,
  proximity_unit: Schema.String,
  "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
  "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
  "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
  "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
});

export interface CategoriesLoiResponse {
  readonly proximity: string;
  readonly proximity_unit: string;
}
export interface CategoriesLoiResponseEncoded {
  readonly proximity: string;
  readonly proximity_unit: string;
}
export const CategoriesLoiResponse: Schema.Schema<CategoriesLoiResponse, CategoriesLoiResponseEncoded, never> = Schema.Struct({
  proximity: Schema.String,
  proximity_unit: Schema.String,
});

export interface ChangelogParams {
  readonly adId: string;
  readonly limit?: string;
}
export interface ChangelogParamsEncoded {
  readonly adId: string;
  readonly limit?: string;
}
export const ChangelogParams: Schema.Schema<ChangelogParams, ChangelogParamsEncoded, never> = Schema.Struct({
  adId: Schema.String,
  limit: Schema.optional(Schema.String),
});

export interface ChangelogResponse {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly name: string;
  readonly action: string;
  readonly user_id: string;
  readonly email: string;
  readonly event_at: string;
  readonly app_id: string;
  readonly app_name: string;
  readonly entity_id: string;
  readonly entity_type: string;
  readonly update_value_records: UpdateValueRecordsBody;
}
export interface ChangelogResponseEncoded {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly name: string;
  readonly action: string;
  readonly user_id: string;
  readonly email: string;
  readonly event_at: string;
  readonly app_id: string;
  readonly app_name: string;
  readonly entity_id: string;
  readonly entity_type: string;
  readonly update_value_records: UpdateValueRecordsBodyEncoded;
}
export const ChangelogResponse: Schema.Schema<ChangelogResponse, ChangelogResponseEncoded, never> = Schema.Struct({
  id: Schema.String,
  updated_at: Schema.String,
  created_at: Schema.String,
  name: Schema.String,
  action: Schema.String,
  user_id: Schema.String,
  email: Schema.String,
  event_at: Schema.String,
  app_id: Schema.String,
  app_name: Schema.String,
  entity_id: Schema.String,
  entity_type: Schema.String,
  update_value_records: Schema.suspend(() => UpdateValueRecordsBody),
});

export type CollectionPropertiesDefaultFallbackInteractionTypeEnum = "WEB_VIEW" | "APP_INSTALL" | "DEEP_LINK" | string;
export type CollectionPropertiesDefaultFallbackInteractionTypeEnumEncoded = "WEB_VIEW" | "APP_INSTALL" | "DEEP_LINK" | string;
export const CollectionPropertiesDefaultFallbackInteractionTypeEnum: Schema.Schema<CollectionPropertiesDefaultFallbackInteractionTypeEnum, CollectionPropertiesDefaultFallbackInteractionTypeEnumEncoded, never> = Schema.Union(Schema.Literal("WEB_VIEW", "APP_INSTALL", "DEEP_LINK"), Schema.String);

export interface ContinentBody {
  readonly id: string;
  readonly name: string;
}
export interface ContinentBodyEncoded {
  readonly id: string;
  readonly name: string;
}
export const ContinentBody: Schema.Schema<ContinentBody, ContinentBodyEncoded, never> = Schema.Struct({
  id: Schema.String,
  name: Schema.String,
});

export interface CountryBody {
  readonly id: string;
  readonly name: string;
  readonly code: string;
  readonly code2: string;
}
export interface CountryBodyEncoded {
  readonly id: string;
  readonly name: string;
  readonly code: string;
  readonly code2: string;
}
export const CountryBody: Schema.Schema<CountryBody, CountryBodyEncoded, never> = Schema.Struct({
  id: Schema.String,
  name: Schema.String,
  code: Schema.String,
  code2: Schema.String,
});

export interface CountryParams {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}
export interface CountryParamsEncoded {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}
export const CountryParams: Schema.Schema<CountryParams, CountryParamsEncoded, never> = Schema.Struct({
  "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
  "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
  "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
  "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
});

export interface CountryResponse {

}
export interface CountryResponseEncoded {

}
export const CountryResponse: Schema.Schema<CountryResponse, CountryResponseEncoded, never> = Schema.Struct({

});

export interface CreativeElementParams {
  readonly adAccountId: string;
  readonly name: string;
  readonly type: TypeEnum;
  readonly title?: string;
  readonly description?: string;
  readonly interaction_type: InteractionTypeEnum;
  readonly render_type: RenderTypeEnum;
}
export interface CreativeElementParamsEncoded {
  readonly adAccountId: string;
  readonly name: string;
  readonly type: TypeEnumEncoded;
  readonly title?: string;
  readonly description?: string;
  readonly interaction_type: InteractionTypeEnumEncoded;
  readonly render_type: RenderTypeEnumEncoded;
}
export const CreativeElementParams: Schema.Schema<CreativeElementParams, CreativeElementParamsEncoded, never> = Schema.Struct({
  adAccountId: Schema.String,
  name: Schema.String,
  type: Schema.suspend(() => TypeEnum),
  title: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  interaction_type: Schema.suspend(() => InteractionTypeEnum),
  render_type: Schema.suspend(() => RenderTypeEnum),
});

export interface CreativeElementResponse {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly name: string;
  readonly ad_account_id: string;
  readonly type: string;
  readonly interaction_type: string;
  readonly render_type: string;
}
export interface CreativeElementResponseEncoded {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly name: string;
  readonly ad_account_id: string;
  readonly type: string;
  readonly interaction_type: string;
  readonly render_type: string;
}
export const CreativeElementResponse: Schema.Schema<CreativeElementResponse, CreativeElementResponseEncoded, never> = Schema.Struct({
  id: Schema.String,
  updated_at: Schema.String,
  created_at: Schema.String,
  name: Schema.String,
  ad_account_id: Schema.String,
  type: Schema.String,
  interaction_type: Schema.String,
  render_type: Schema.String,
});

export interface CreativeParams {
  readonly adAccountId: string;
  readonly name: string;
  readonly ad_account_id: string;
  readonly type: TypeEnum;
  readonly shareable?: string;
  readonly render_type: RenderTypeEnum;
  readonly "preview_properties.preview_media_id"?: string;
  readonly "preview_properties.logo_media_id"?: string;
  readonly "preview_properties.preview_headline": string;
  readonly "dynamic_render_properties.dynamic_template_id"?: string;
  readonly "dynamic_render_properties.product_set_id"?: string;
}
export interface CreativeParamsEncoded {
  readonly adAccountId: string;
  readonly name: string;
  readonly ad_account_id: string;
  readonly type: TypeEnumEncoded;
  readonly shareable?: string;
  readonly render_type: RenderTypeEnumEncoded;
  readonly "preview_properties.preview_media_id"?: string;
  readonly "preview_properties.logo_media_id"?: string;
  readonly "preview_properties.preview_headline": string;
  readonly "dynamic_render_properties.dynamic_template_id"?: string;
  readonly "dynamic_render_properties.product_set_id"?: string;
}
export const CreativeParams: Schema.Schema<CreativeParams, CreativeParamsEncoded, never> = Schema.Struct({
  adAccountId: Schema.String,
  name: Schema.String,
  ad_account_id: Schema.String,
  type: Schema.suspend(() => TypeEnum),
  shareable: Schema.optional(Schema.String),
  render_type: Schema.suspend(() => RenderTypeEnum),
  "preview_properties.preview_media_id": Schema.optional(Schema.String),
  "preview_properties.logo_media_id": Schema.optional(Schema.String),
  "preview_properties.preview_headline": Schema.String,
  "dynamic_render_properties.dynamic_template_id": Schema.optional(Schema.String),
  "dynamic_render_properties.product_set_id": Schema.optional(Schema.String),
});

export interface CreativePreviewParams {
  readonly creativeId: string;
}
export interface CreativePreviewParamsEncoded {
  readonly creativeId: string;
}
export const CreativePreviewParams: Schema.Schema<CreativePreviewParams, CreativePreviewParamsEncoded, never> = Schema.Struct({
  creativeId: Schema.String,
});

export interface CreativePreviewResponse {

}
export interface CreativePreviewResponseEncoded {

}
export const CreativePreviewResponse: Schema.Schema<CreativePreviewResponse, CreativePreviewResponseEncoded, never> = Schema.Struct({

});

export interface CreativeResponse {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly name: string;
  readonly ad_account_id: string;
  readonly type: string;
  readonly packaging_status: string;
  readonly review_status: string;
  readonly shareable: boolean;
  readonly render_type: string;
  readonly top_snap_crop_position: string;
  readonly preview_properties: PreviewPropertiesBody;
  readonly ad_product: string;
}
export interface CreativeResponseEncoded {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly name: string;
  readonly ad_account_id: string;
  readonly type: string;
  readonly packaging_status: string;
  readonly review_status: string;
  readonly shareable: boolean;
  readonly render_type: string;
  readonly top_snap_crop_position: string;
  readonly preview_properties: PreviewPropertiesBodyEncoded;
  readonly ad_product: string;
}
export const CreativeResponse: Schema.Schema<CreativeResponse, CreativeResponseEncoded, never> = Schema.Struct({
  id: Schema.String,
  updated_at: Schema.String,
  created_at: Schema.String,
  name: Schema.String,
  ad_account_id: Schema.String,
  type: Schema.String,
  packaging_status: Schema.String,
  review_status: Schema.String,
  shareable: Schema.Boolean,
  render_type: Schema.String,
  top_snap_crop_position: Schema.String,
  preview_properties: Schema.suspend(() => PreviewPropertiesBody),
  ad_product: Schema.String,
});

export interface CreativesBody {
  readonly ad_account_id: string;
  readonly top_snap_media_id: string;
  readonly name: string;
  readonly profile_properties: ProfilePropertiesBody;
  readonly type: string;
  readonly headline: string;
  readonly shareable: boolean;
}
export interface CreativesBodyEncoded {
  readonly ad_account_id: string;
  readonly top_snap_media_id: string;
  readonly name: string;
  readonly profile_properties: ProfilePropertiesBodyEncoded;
  readonly type: string;
  readonly headline: string;
  readonly shareable: boolean;
}
export const CreativesBody: Schema.Schema<CreativesBody, CreativesBodyEncoded, never> = Schema.Struct({
  ad_account_id: Schema.String,
  top_snap_media_id: Schema.String,
  name: Schema.String,
  profile_properties: Schema.suspend(() => ProfilePropertiesBody),
  type: Schema.String,
  headline: Schema.String,
  shareable: Schema.Boolean,
});

export interface CustomerBody {
  readonly name: string;
  readonly netsuite_id: string;
}
export interface CustomerBodyEncoded {
  readonly name: string;
  readonly netsuite_id: string;
}
export const CustomerBody: Schema.Schema<CustomerBody, CustomerBodyEncoded, never> = Schema.Struct({
  name: Schema.String,
  netsuite_id: Schema.String,
});

export interface DailyBody {
  readonly conversions_lower: number;
  readonly conversions_upper: number;
  readonly reaches_lower: number;
  readonly reaches_upper: number;
  readonly impressions_lower: number;
  readonly impressions_upper: number;
  readonly is_budget_hit: boolean;
  readonly budget_left: number;
  readonly budget_spent_ratio: number;
}
export interface DailyBodyEncoded {
  readonly conversions_lower: number;
  readonly conversions_upper: number;
  readonly reaches_lower: number;
  readonly reaches_upper: number;
  readonly impressions_lower: number;
  readonly impressions_upper: number;
  readonly is_budget_hit: boolean;
  readonly budget_left: number;
  readonly budget_spent_ratio: number;
}
export const DailyBody: Schema.Schema<DailyBody, DailyBodyEncoded, never> = Schema.Struct({
  conversions_lower: Schema.Number,
  conversions_upper: Schema.Number,
  reaches_lower: Schema.Number,
  reaches_upper: Schema.Number,
  impressions_lower: Schema.Number,
  impressions_upper: Schema.Number,
  is_budget_hit: Schema.Boolean,
  budget_left: Schema.Number,
  budget_spent_ratio: Schema.Number,
});

export interface DemographicsBody {
  readonly age_groups: ReadonlyArray<unknown>;
}
export interface DemographicsBodyEncoded {
  readonly age_groups: ReadonlyArray<unknown>;
}
export const DemographicsBody: Schema.Schema<DemographicsBody, DemographicsBodyEncoded, never> = Schema.Struct({
  age_groups: Schema.Array(Schema.Unknown),
});

export type DimensionEnum = "GEO" | "DEMO" | "INTEREST" | "DEVICE" | string;
export type DimensionEnumEncoded = "GEO" | "DEMO" | "INTEREST" | "DEVICE" | string;
export const DimensionEnum: Schema.Schema<DimensionEnum, DimensionEnumEncoded, never> = Schema.Union(Schema.Literal("GEO", "DEMO", "INTEREST", "DEVICE"), Schema.String);

export interface DlxcParams {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}
export interface DlxcParamsEncoded {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}
export const DlxcParams: Schema.Schema<DlxcParams, DlxcParamsEncoded, never> = Schema.Struct({
  "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
  "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
  "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
  "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
});

export interface DlxcResponse {
  readonly name: string;
  readonly id: string;
}
export interface DlxcResponseEncoded {
  readonly name: string;
  readonly id: string;
}
export const DlxcResponse: Schema.Schema<DlxcResponse, DlxcResponseEncoded, never> = Schema.Struct({
  name: Schema.String,
  id: Schema.String,
});

export interface DlxpParams {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}
export interface DlxpParamsEncoded {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}
export const DlxpParams: Schema.Schema<DlxpParams, DlxpParamsEncoded, never> = Schema.Struct({
  "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
  "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
  "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
  "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
});

export interface DlxpResponse {
  readonly id: string;
  readonly name: string;
}
export interface DlxpResponseEncoded {
  readonly id: string;
  readonly name: string;
}
export const DlxpResponse: Schema.Schema<DlxpResponse, DlxpResponseEncoded, never> = Schema.Struct({
  id: Schema.String,
  name: Schema.String,
});

export interface DlxsParams {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}
export interface DlxsParamsEncoded {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}
export const DlxsParams: Schema.Schema<DlxsParams, DlxsParamsEncoded, never> = Schema.Struct({
  "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
  "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
  "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
  "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
});

export interface DlxsResponse {
  readonly name: string;
  readonly id: string;
}
export interface DlxsResponseEncoded {
  readonly name: string;
  readonly id: string;
}
export const DlxsResponse: Schema.Schema<DlxsResponse, DlxsResponseEncoded, never> = Schema.Struct({
  name: Schema.String,
  id: Schema.String,
});

export interface DynamicTemplateParams {
  readonly adAccountId: string;
  readonly dynamic_templates: ReadonlyArray<DynamicTemplatesBody>;
}
export interface DynamicTemplateParamsEncoded {
  readonly adAccountId: string;
  readonly dynamic_templates: ReadonlyArray<DynamicTemplatesBodyEncoded>;
}
export const DynamicTemplateParams: Schema.Schema<DynamicTemplateParams, DynamicTemplateParamsEncoded, never> = Schema.Struct({
  adAccountId: Schema.String,
  dynamic_templates: Schema.Array(Schema.suspend(() => DynamicTemplatesBody)),
});

export interface DynamicTemplateResponse {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly name: string;
  readonly ad_account_id: string;
  readonly ios_url: string;
  readonly android_url: string;
  readonly layout: string;
  readonly text_fields: ReadonlyArray<unknown>;
}
export interface DynamicTemplateResponseEncoded {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly name: string;
  readonly ad_account_id: string;
  readonly ios_url: string;
  readonly android_url: string;
  readonly layout: string;
  readonly text_fields: ReadonlyArray<unknown>;
}
export const DynamicTemplateResponse: Schema.Schema<DynamicTemplateResponse, DynamicTemplateResponseEncoded, never> = Schema.Struct({
  id: Schema.String,
  updated_at: Schema.String,
  created_at: Schema.String,
  name: Schema.String,
  ad_account_id: Schema.String,
  ios_url: Schema.String,
  android_url: Schema.String,
  layout: Schema.String,
  text_fields: Schema.Array(Schema.Unknown),
});

export interface DynamicTemplatesBody {
  readonly ad_account_id: string;
  readonly name: string;
  readonly ios_url: string;
  readonly android_url: string;
  readonly layout: string;
  readonly text_fields: ReadonlyArray<unknown>;
}
export interface DynamicTemplatesBodyEncoded {
  readonly ad_account_id: string;
  readonly name: string;
  readonly ios_url: string;
  readonly android_url: string;
  readonly layout: string;
  readonly text_fields: ReadonlyArray<unknown>;
}
export const DynamicTemplatesBody: Schema.Schema<DynamicTemplatesBody, DynamicTemplatesBodyEncoded, never> = Schema.Struct({
  ad_account_id: Schema.String,
  name: Schema.String,
  ios_url: Schema.String,
  android_url: Schema.String,
  layout: Schema.String,
  text_fields: Schema.Array(Schema.Unknown),
});

export interface EcidStatuParams {
  readonly snapAppId: string;
}
export interface EcidStatuParamsEncoded {
  readonly snapAppId: string;
}
export const EcidStatuParams: Schema.Schema<EcidStatuParams, EcidStatuParamsEncoded, never> = Schema.Struct({
  snapAppId: Schema.String,
});

export interface EcidStatuResponse {

}
export interface EcidStatuResponseEncoded {

}
export const EcidStatuResponse: Schema.Schema<EcidStatuResponse, EcidStatuResponseEncoded, never> = Schema.Struct({

});

export interface EntityIdsBody {
  readonly id: string;
}
export interface EntityIdsBodyEncoded {
  readonly id: string;
}
export const EntityIdsBody: Schema.Schema<EntityIdsBody, EntityIdsBodyEncoded, never> = Schema.Struct({
  id: Schema.String,
});

export interface EventDetailParams {
  readonly adAccountId: string;
  readonly ad_account_id?: string;
}
export interface EventDetailParamsEncoded {
  readonly adAccountId: string;
  readonly ad_account_id?: string;
}
export const EventDetailParams: Schema.Schema<EventDetailParams, EventDetailParamsEncoded, never> = Schema.Struct({
  adAccountId: Schema.String,
  ad_account_id: Schema.optional(Schema.String),
});

export interface EventDetailResponse {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly event_name: string;
  readonly event_start_time: string;
  readonly event_time_zone: string;
  readonly ad_account_id: string;
}
export interface EventDetailResponseEncoded {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly event_name: string;
  readonly event_start_time: string;
  readonly event_time_zone: string;
  readonly ad_account_id: string;
}
export const EventDetailResponse: Schema.Schema<EventDetailResponse, EventDetailResponseEncoded, never> = Schema.Struct({
  id: Schema.String,
  updated_at: Schema.String,
  created_at: Schema.String,
  event_name: Schema.String,
  event_start_time: Schema.String,
  event_time_zone: Schema.String,
  ad_account_id: Schema.String,
});

export interface EventSourcesBody {
  readonly id: string;
  readonly type: string;
}
export interface EventSourcesBodyEncoded {
  readonly id: string;
  readonly type: string;
}
export const EventSourcesBody: Schema.Schema<EventSourcesBody, EventSourcesBodyEncoded, never> = Schema.Struct({
  id: Schema.String,
  type: Schema.String,
});

export interface FacetParams {
  readonly catalogId: string;
  readonly facets: ReadonlyArray<FacetsBody>;
  readonly filter: FilterBody;
}
export interface FacetParamsEncoded {
  readonly catalogId: string;
  readonly facets: ReadonlyArray<FacetsBodyEncoded>;
  readonly filter: FilterBodyEncoded;
}
export const FacetParams: Schema.Schema<FacetParams, FacetParamsEncoded, never> = Schema.Struct({
  catalogId: Schema.String,
  facets: Schema.Array(Schema.suspend(() => FacetsBody)),
  filter: Schema.suspend(() => FilterBody),
});

export interface FacetResponse {
  readonly property: string;
}
export interface FacetResponseEncoded {
  readonly property: string;
}
export const FacetResponse: Schema.Schema<FacetResponse, FacetResponseEncoded, never> = Schema.Struct({
  property: Schema.String,
});

export interface FacetsBody {
  readonly property: string;
}
export interface FacetsBodyEncoded {
  readonly property: string;
}
export const FacetsBody: Schema.Schema<FacetsBody, FacetsBodyEncoded, never> = Schema.Struct({
  property: Schema.String,
});

export interface FeedUploadParams {
  readonly productFeedId: string;
}
export interface FeedUploadParamsEncoded {
  readonly productFeedId: string;
}
export const FeedUploadParams: Schema.Schema<FeedUploadParams, FeedUploadParamsEncoded, never> = Schema.Struct({
  productFeedId: Schema.String,
});

export interface FeedUploadResponse {
  readonly created_at: string;
  readonly updated_at: string;
  readonly id: string;
  readonly feed_id: string;
  readonly summary: SummaryBody;
  readonly url: string;
  readonly update_type: string;
  readonly status: string;
}
export interface FeedUploadResponseEncoded {
  readonly created_at: string;
  readonly updated_at: string;
  readonly id: string;
  readonly feed_id: string;
  readonly summary: SummaryBodyEncoded;
  readonly url: string;
  readonly update_type: string;
  readonly status: string;
}
export const FeedUploadResponse: Schema.Schema<FeedUploadResponse, FeedUploadResponseEncoded, never> = Schema.Struct({
  created_at: Schema.String,
  updated_at: Schema.String,
  id: Schema.String,
  feed_id: Schema.String,
  summary: Schema.suspend(() => SummaryBody),
  url: Schema.String,
  update_type: Schema.String,
  status: Schema.String,
});

export interface FilterBody {
  readonly AVAILABILITY: AVAILABILITYBody;
}
export interface FilterBodyEncoded {
  readonly AVAILABILITY: AVAILABILITYBodyEncoded;
}
export const FilterBody: Schema.Schema<FilterBody, FilterBodyEncoded, never> = Schema.Struct({
  AVAILABILITY: Schema.suspend(() => AVAILABILITYBody),
});

export interface FormFieldsBody {
  readonly type: string;
}
export interface FormFieldsBodyEncoded {
  readonly type: string;
}
export const FormFieldsBody: Schema.Schema<FormFieldsBody, FormFieldsBodyEncoded, never> = Schema.Struct({
  type: Schema.String,
});

export interface FundingsourceParams {
  readonly fundingSourceId: string;
}
export interface FundingsourceParamsEncoded {
  readonly fundingSourceId: string;
}
export const FundingsourceParams: Schema.Schema<FundingsourceParams, FundingsourceParamsEncoded, never> = Schema.Struct({
  fundingSourceId: Schema.String,
});

export interface FundingsourceResponse {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly name: string;
  readonly type: string;
  readonly organization_id: string;
  readonly currency: string;
}
export interface FundingsourceResponseEncoded {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly name: string;
  readonly type: string;
  readonly organization_id: string;
  readonly currency: string;
}
export const FundingsourceResponse: Schema.Schema<FundingsourceResponse, FundingsourceResponseEncoded, never> = Schema.Struct({
  id: Schema.String,
  updated_at: Schema.String,
  created_at: Schema.String,
  name: Schema.String,
  type: Schema.String,
  organization_id: Schema.String,
  currency: Schema.String,
});

export interface GenderParams {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}
export interface GenderParamsEncoded {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}
export const GenderParams: Schema.Schema<GenderParams, GenderParamsEncoded, never> = Schema.Struct({
  "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
  "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
  "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
  "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
});

export interface GenderResponse {
  readonly name: string;
  readonly id: string;
}
export interface GenderResponseEncoded {
  readonly name: string;
  readonly id: string;
}
export const GenderResponse: Schema.Schema<GenderResponse, GenderResponseEncoded, never> = Schema.Struct({
  name: Schema.String,
  id: Schema.String,
});

export interface GeographicCoordinatesBody {
  readonly longitude: number;
  readonly latitude: number;
}
export interface GeographicCoordinatesBodyEncoded {
  readonly longitude: number;
  readonly latitude: number;
}
export const GeographicCoordinatesBody: Schema.Schema<GeographicCoordinatesBody, GeographicCoordinatesBodyEncoded, never> = Schema.Struct({
  longitude: Schema.Number,
  latitude: Schema.Number,
});

export interface GeosBody {
  readonly country_code: string;
}
export interface GeosBodyEncoded {
  readonly country_code: string;
}
export const GeosBody: Schema.Schema<GeosBody, GeosBodyEncoded, never> = Schema.Struct({
  country_code: Schema.String,
});

export type GranularityEnum = "TOTAL" | "DAY" | "HOUR" | "LIFETIME" | string;
export type GranularityEnumEncoded = "TOTAL" | "DAY" | "HOUR" | "LIFETIME" | string;
export const GranularityEnum: Schema.Schema<GranularityEnum, GranularityEnumEncoded, never> = Schema.Union(Schema.Literal("TOTAL", "DAY", "HOUR", "LIFETIME"), Schema.String);

export interface GuestRatingsBody {
  readonly rating_system: string;
  readonly score: string;
  readonly max_score: string;
  readonly number_of_reviewers: string;
}
export interface GuestRatingsBodyEncoded {
  readonly rating_system: string;
  readonly score: string;
  readonly max_score: string;
  readonly number_of_reviewers: string;
}
export const GuestRatingsBody: Schema.Schema<GuestRatingsBody, GuestRatingsBodyEncoded, never> = Schema.Struct({
  rating_system: Schema.String,
  score: Schema.String,
  max_score: Schema.String,
  number_of_reviewers: Schema.String,
});

export type HeadlineEnum = "APPLY_NOW" | "BOOK_NOW" | "BUY_TICKETS" | "DONATE" | "DOWNLOAD" | "GET_NOW" | "INSTALL_NOW" | "LISTEN" | "MORE" | "OPEN_APP" | "ORDER_NOW" | "PLAY" | "READ" | "RESPOND" | "SHOP_NOW" | "SHOW" | "SHOWTIMES" | "SIGN_UP" | "TRY" | "USE_APP" | "VIEW" | "WATCH" | string;
export type HeadlineEnumEncoded = "APPLY_NOW" | "BOOK_NOW" | "BUY_TICKETS" | "DONATE" | "DOWNLOAD" | "GET_NOW" | "INSTALL_NOW" | "LISTEN" | "MORE" | "OPEN_APP" | "ORDER_NOW" | "PLAY" | "READ" | "RESPOND" | "SHOP_NOW" | "SHOW" | "SHOWTIMES" | "SIGN_UP" | "TRY" | "USE_APP" | "VIEW" | "WATCH" | string;
export const HeadlineEnum: Schema.Schema<HeadlineEnum, HeadlineEnumEncoded, never> = Schema.Union(Schema.Literal("APPLY_NOW", "BOOK_NOW", "BUY_TICKETS", "DONATE", "DOWNLOAD", "GET_NOW", "INSTALL_NOW", "LISTEN", "MORE", "OPEN_APP", "ORDER_NOW", "PLAY", "READ", "RESPOND", "SHOP_NOW", "SHOW", "SHOWTIMES", "SIGN_UP", "TRY", "USE_APP", "VIEW", "WATCH"), Schema.String);

export type InteractionTypeEnum = "WEB_VIEW" | "APP_INSTALL" | "DEEP_LINK" | string;
export type InteractionTypeEnumEncoded = "WEB_VIEW" | "APP_INSTALL" | "DEEP_LINK" | string;
export const InteractionTypeEnum: Schema.Schema<InteractionTypeEnum, InteractionTypeEnumEncoded, never> = Schema.Union(Schema.Literal("WEB_VIEW", "APP_INSTALL", "DEEP_LINK"), Schema.String);

export interface InteractionZoneParams {
  readonly adAccountId: string;
  readonly name: string;
  readonly render_type: RenderTypeEnum;
  readonly creative_elements: string;
  readonly headline: HeadlineEnum;
}
export interface InteractionZoneParamsEncoded {
  readonly adAccountId: string;
  readonly name: string;
  readonly render_type: RenderTypeEnumEncoded;
  readonly creative_elements: string;
  readonly headline: HeadlineEnumEncoded;
}
export const InteractionZoneParams: Schema.Schema<InteractionZoneParams, InteractionZoneParamsEncoded, never> = Schema.Struct({
  adAccountId: Schema.String,
  name: Schema.String,
  render_type: Schema.suspend(() => RenderTypeEnum),
  creative_elements: Schema.String,
  headline: Schema.suspend(() => HeadlineEnum),
});

export interface InteractionZoneResponse {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly name: string;
  readonly ad_account_id: string;
  readonly headline: string;
  readonly creative_element_ids: ReadonlyArray<unknown>;
  readonly render_type: string;
}
export interface InteractionZoneResponseEncoded {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly name: string;
  readonly ad_account_id: string;
  readonly headline: string;
  readonly creative_element_ids: ReadonlyArray<unknown>;
  readonly render_type: string;
}
export const InteractionZoneResponse: Schema.Schema<InteractionZoneResponse, InteractionZoneResponseEncoded, never> = Schema.Struct({
  id: Schema.String,
  updated_at: Schema.String,
  created_at: Schema.String,
  name: Schema.String,
  ad_account_id: Schema.String,
  headline: Schema.String,
  creative_element_ids: Schema.Array(Schema.Unknown),
  render_type: Schema.String,
});

export interface InterestsBody {
  readonly category_id: ReadonlyArray<unknown>;
}
export interface InterestsBodyEncoded {
  readonly category_id: ReadonlyArray<unknown>;
}
export const InterestsBody: Schema.Schema<InterestsBody, InterestsBodyEncoded, never> = Schema.Struct({
  category_id: Schema.Array(Schema.Unknown),
});

export interface InvoiceParams {
  readonly adAccountId: string;
}
export interface InvoiceParamsEncoded {
  readonly adAccountId: string;
}
export const InvoiceParams: Schema.Schema<InvoiceParams, InvoiceParamsEncoded, never> = Schema.Struct({
  adAccountId: Schema.String,
});

export interface InvoiceResponse {
  readonly org_id: string;
  readonly invoice_id: string;
  readonly netsuite_file_id: string;
  readonly ad_account_id: string;
  readonly customer: CustomerBody;
  readonly document_number: string;
  readonly line_last_modified: string;
  readonly last_modified: string;
  readonly amount_cent: number;
  readonly currency: string;
  readonly billing_period: string;
  readonly due_date: string;
  readonly created_at: string;
  readonly invoice_status: string;
}
export interface InvoiceResponseEncoded {
  readonly org_id: string;
  readonly invoice_id: string;
  readonly netsuite_file_id: string;
  readonly ad_account_id: string;
  readonly customer: CustomerBodyEncoded;
  readonly document_number: string;
  readonly line_last_modified: string;
  readonly last_modified: string;
  readonly amount_cent: number;
  readonly currency: string;
  readonly billing_period: string;
  readonly due_date: string;
  readonly created_at: string;
  readonly invoice_status: string;
}
export const InvoiceResponse: Schema.Schema<InvoiceResponse, InvoiceResponseEncoded, never> = Schema.Struct({
  org_id: Schema.String,
  invoice_id: Schema.String,
  netsuite_file_id: Schema.String,
  ad_account_id: Schema.String,
  customer: Schema.suspend(() => CustomerBody),
  document_number: Schema.String,
  line_last_modified: Schema.String,
  last_modified: Schema.String,
  amount_cent: Schema.Number,
  currency: Schema.String,
  billing_period: Schema.String,
  due_date: Schema.String,
  created_at: Schema.String,
  invoice_status: Schema.String,
});

export interface IosAppLinkBody {
  readonly url: string;
  readonly app_store_id: string;
  readonly app_name: string;
}
export interface IosAppLinkBodyEncoded {
  readonly url: string;
  readonly app_store_id: string;
  readonly app_name: string;
}
export const IosAppLinkBody: Schema.Schema<IosAppLinkBody, IosAppLinkBodyEncoded, never> = Schema.Struct({
  url: Schema.String,
  app_store_id: Schema.String,
  app_name: Schema.String,
});

export interface LanguagesParams {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}
export interface LanguagesParamsEncoded {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}
export const LanguagesParams: Schema.Schema<LanguagesParams, LanguagesParamsEncoded, never> = Schema.Struct({
  "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
  "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
  "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
  "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
});

export interface LanguagesResponse {
  readonly id: string;
  readonly name: string;
}
export interface LanguagesResponseEncoded {
  readonly id: string;
  readonly name: string;
}
export const LanguagesResponse: Schema.Schema<LanguagesResponse, LanguagesResponseEncoded, never> = Schema.Struct({
  id: Schema.String,
  name: Schema.String,
});

export interface LeadGenerationFormParams {
  readonly adAccountId: string;
}
export interface LeadGenerationFormParamsEncoded {
  readonly adAccountId: string;
}
export const LeadGenerationFormParams: Schema.Schema<LeadGenerationFormParams, LeadGenerationFormParamsEncoded, never> = Schema.Struct({
  adAccountId: Schema.String,
});

export interface LeadGenerationFormResponse {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly name: string;
  readonly ad_account_id: string;
  readonly privacy_policy_url: string;
  readonly description: string;
  readonly title: string;
  readonly form_fields: ReadonlyArray<FormFieldsBody>;
  readonly legal_disclosures: LegalDisclosuresBody;
  readonly strategy_type: string;
}
export interface LeadGenerationFormResponseEncoded {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly name: string;
  readonly ad_account_id: string;
  readonly privacy_policy_url: string;
  readonly description: string;
  readonly title: string;
  readonly form_fields: ReadonlyArray<FormFieldsBodyEncoded>;
  readonly legal_disclosures: LegalDisclosuresBodyEncoded;
  readonly strategy_type: string;
}
export const LeadGenerationFormResponse: Schema.Schema<LeadGenerationFormResponse, LeadGenerationFormResponseEncoded, never> = Schema.Struct({
  id: Schema.String,
  updated_at: Schema.String,
  created_at: Schema.String,
  name: Schema.String,
  ad_account_id: Schema.String,
  privacy_policy_url: Schema.String,
  description: Schema.String,
  title: Schema.String,
  form_fields: Schema.Array(Schema.suspend(() => FormFieldsBody)),
  legal_disclosures: Schema.suspend(() => LegalDisclosuresBody),
  strategy_type: Schema.String,
});

export interface LegalDisclosuresBody {
  readonly title: string;
  readonly description: string;
}
export interface LegalDisclosuresBodyEncoded {
  readonly title: string;
  readonly description: string;
}
export const LegalDisclosuresBody: Schema.Schema<LegalDisclosuresBody, LegalDisclosuresBodyEncoded, never> = Schema.Struct({
  title: Schema.String,
  description: Schema.String,
});

export interface LensPreviewParams {
  readonly mediaId: string;
}
export interface LensPreviewParamsEncoded {
  readonly mediaId: string;
}
export const LensPreviewParams: Schema.Schema<LensPreviewParams, LensPreviewParamsEncoded, never> = Schema.Struct({
  mediaId: Schema.String,
});

export interface LensPreviewResponse {

}
export interface LensPreviewResponseEncoded {

}
export const LensPreviewResponse: Schema.Schema<LensPreviewResponse, LensPreviewResponseEncoded, never> = Schema.Struct({

});

export interface LifetimeStatParams {
  readonly adsquadId: string;
  readonly "adsquad-id"?: string;
}
export interface LifetimeStatParamsEncoded {
  readonly adsquadId: string;
  readonly "adsquad-id"?: string;
}
export const LifetimeStatParams: Schema.Schema<LifetimeStatParams, LifetimeStatParamsEncoded, never> = Schema.Struct({
  adsquadId: Schema.String,
  "adsquad-id": Schema.optional(Schema.String),
});

export interface LifetimeStatResponse {
  readonly id: string;
  readonly type: string;
  readonly granularity: string;
  readonly stats: StatsBody;
  readonly start_time: string;
  readonly end_time: string;
  readonly finalized_data_end_time: string;
}
export interface LifetimeStatResponseEncoded {
  readonly id: string;
  readonly type: string;
  readonly granularity: string;
  readonly stats: StatsBodyEncoded;
  readonly start_time: string;
  readonly end_time: string;
  readonly finalized_data_end_time: string;
}
export const LifetimeStatResponse: Schema.Schema<LifetimeStatResponse, LifetimeStatResponseEncoded, never> = Schema.Struct({
  id: Schema.String,
  type: Schema.String,
  granularity: Schema.String,
  stats: Schema.suspend(() => StatsBody),
  start_time: Schema.String,
  end_time: Schema.String,
  finalized_data_end_time: Schema.String,
});

export type LimitEnum = "50-1000" | string;
export type LimitEnumEncoded = "50-1000" | string;
export const LimitEnum: Schema.Schema<LimitEnum, LimitEnumEncoded, never> = Schema.Union(Schema.Literal("50-1000"), Schema.String);

export interface MainMediaBody {
  readonly url: string;
  readonly tags: ReadonlyArray<unknown>;
}
export interface MainMediaBodyEncoded {
  readonly url: string;
  readonly tags: ReadonlyArray<unknown>;
}
export const MainMediaBody: Schema.Schema<MainMediaBody, MainMediaBodyEncoded, never> = Schema.Struct({
  url: Schema.String,
  tags: Schema.Array(Schema.Unknown),
});

export interface MarketingNameParams {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}
export interface MarketingNameParamsEncoded {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}
export const MarketingNameParams: Schema.Schema<MarketingNameParams, MarketingNameParamsEncoded, never> = Schema.Struct({
  "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
  "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
  "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
  "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
});

export interface MarketingNameResponse {

}
export interface MarketingNameResponseEncoded {

}
export const MarketingNameResponse: Schema.Schema<MarketingNameResponse, MarketingNameResponseEncoded, never> = Schema.Struct({

});

export type MaxAgeEnum = "13" | "-" | "55" | string;
export type MaxAgeEnumEncoded = "13" | "-" | "55" | string;
export const MaxAgeEnum: Schema.Schema<MaxAgeEnum, MaxAgeEnumEncoded, never> = Schema.Union(Schema.Literal("13", "-", "55"), Schema.String);

export interface MediaBody {
  readonly name: string;
  readonly type: string;
  readonly ad_account_id: string;
}
export interface MediaBodyEncoded {
  readonly name: string;
  readonly type: string;
  readonly ad_account_id: string;
}
export const MediaBody: Schema.Schema<MediaBody, MediaBodyEncoded, never> = Schema.Struct({
  name: Schema.String,
  type: Schema.String,
  ad_account_id: Schema.String,
});

export interface MediaCopyBody {
  readonly source_media_id: string;
  readonly source_ad_account_id: string;
}
export interface MediaCopyBodyEncoded {
  readonly source_media_id: string;
  readonly source_ad_account_id: string;
}
export const MediaCopyBody: Schema.Schema<MediaCopyBody, MediaCopyBodyEncoded, never> = Schema.Struct({
  source_media_id: Schema.String,
  source_ad_account_id: Schema.String,
});

export interface MediaParams {
  readonly adAccountId: string;
  readonly entity_ids: ReadonlyArray<EntityIdsBody>;
}
export interface MediaParamsEncoded {
  readonly adAccountId: string;
  readonly entity_ids: ReadonlyArray<EntityIdsBodyEncoded>;
}
export const MediaParams: Schema.Schema<MediaParams, MediaParamsEncoded, never> = Schema.Struct({
  adAccountId: Schema.String,
  entity_ids: Schema.Array(Schema.suspend(() => EntityIdsBody)),
});

export interface MediaResponse {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly name: string;
  readonly ad_account_id: string;
  readonly type: string;
  readonly media_status: string;
  readonly is_demo_media: boolean;
  readonly visibility: string;
}
export interface MediaResponseEncoded {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly name: string;
  readonly ad_account_id: string;
  readonly type: string;
  readonly media_status: string;
  readonly is_demo_media: boolean;
  readonly visibility: string;
}
export const MediaResponse: Schema.Schema<MediaResponse, MediaResponseEncoded, never> = Schema.Struct({
  id: Schema.String,
  updated_at: Schema.String,
  created_at: Schema.String,
  name: Schema.String,
  ad_account_id: Schema.String,
  type: Schema.String,
  media_status: Schema.String,
  is_demo_media: Schema.Boolean,
  visibility: Schema.String,
});

export interface MemberParams {
  readonly memberId: string;
}
export interface MemberParamsEncoded {
  readonly memberId: string;
}
export const MemberParams: Schema.Schema<MemberParams, MemberParamsEncoded, never> = Schema.Struct({
  memberId: Schema.String,
});

export interface MemberResponse {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly email: string;
  readonly organization_id: string;
  readonly display_name: string;
  readonly member_status: string;
}
export interface MemberResponseEncoded {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly email: string;
  readonly organization_id: string;
  readonly display_name: string;
  readonly member_status: string;
}
export const MemberResponse: Schema.Schema<MemberResponse, MemberResponseEncoded, never> = Schema.Struct({
  id: Schema.String,
  updated_at: Schema.String,
  created_at: Schema.String,
  email: Schema.String,
  organization_id: Schema.String,
  display_name: Schema.String,
  member_status: Schema.String,
});

export interface MembersBody {
  readonly email: string;
  readonly organization_id: string;
  readonly display_name: string;
}
export interface MembersBodyEncoded {
  readonly email: string;
  readonly organization_id: string;
  readonly display_name: string;
}
export const MembersBody: Schema.Schema<MembersBody, MembersBodyEncoded, never> = Schema.Struct({
  email: Schema.String,
  organization_id: Schema.String,
  display_name: Schema.String,
});

export interface MeParams {

}
export interface MeParamsEncoded {

}
export const MeParams: Schema.Schema<MeParams, MeParamsEncoded, never> = Schema.Struct({

});

export interface MeResponse {

}
export interface MeResponseEncoded {

}
export const MeResponse: Schema.Schema<MeResponse, MeResponseEncoded, never> = Schema.Struct({

});

export interface MetroBody {
  readonly id: string;
  readonly name: string;
  readonly regions: string;
}
export interface MetroBodyEncoded {
  readonly id: string;
  readonly name: string;
  readonly regions: string;
}
export const MetroBody: Schema.Schema<MetroBody, MetroBodyEncoded, never> = Schema.Struct({
  id: Schema.String,
  name: Schema.String,
  regions: Schema.String,
});

export interface MetroParams {
  readonly countryCode: string;
  readonly country_code?: string;
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}
export interface MetroParamsEncoded {
  readonly countryCode: string;
  readonly country_code?: string;
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}
export const MetroParams: Schema.Schema<MetroParams, MetroParamsEncoded, never> = Schema.Struct({
  countryCode: Schema.String,
  country_code: Schema.optional(Schema.String),
  "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
  "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
  "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
  "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
});

export interface MetroResponse {
  readonly lat: number;
  readonly lon: number;
  readonly continent: ContinentBody;
  readonly country: CountryBody;
  readonly metro: MetroBody;
}
export interface MetroResponseEncoded {
  readonly lat: number;
  readonly lon: number;
  readonly continent: ContinentBodyEncoded;
  readonly country: CountryBodyEncoded;
  readonly metro: MetroBodyEncoded;
}
export const MetroResponse: Schema.Schema<MetroResponse, MetroResponseEncoded, never> = Schema.Struct({
  lat: Schema.Number,
  lon: Schema.Number,
  continent: Schema.suspend(() => ContinentBody),
  country: Schema.suspend(() => CountryBody),
  metro: Schema.suspend(() => MetroBody),
});

export interface MobileAppParams {
  readonly adaccountId: string;
}
export interface MobileAppParamsEncoded {
  readonly adaccountId: string;
}
export const MobileAppParams: Schema.Schema<MobileAppParams, MobileAppParamsEncoded, never> = Schema.Struct({
  adaccountId: Schema.String,
});

export interface MobileAppResponse {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly container_kind: string;
  readonly container_id: string;
  readonly name: string;
  readonly ios_app_id: string;
  readonly android_app_url: string;
  readonly mobile_measurement_partners: ReadonlyArray<unknown>;
}
export interface MobileAppResponseEncoded {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly container_kind: string;
  readonly container_id: string;
  readonly name: string;
  readonly ios_app_id: string;
  readonly android_app_url: string;
  readonly mobile_measurement_partners: ReadonlyArray<unknown>;
}
export const MobileAppResponse: Schema.Schema<MobileAppResponse, MobileAppResponseEncoded, never> = Schema.Struct({
  id: Schema.String,
  updated_at: Schema.String,
  created_at: Schema.String,
  container_kind: Schema.String,
  container_id: Schema.String,
  name: Schema.String,
  ios_app_id: Schema.String,
  android_app_url: Schema.String,
  mobile_measurement_partners: Schema.Array(Schema.Unknown),
});

export interface NlnParams {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}
export interface NlnParamsEncoded {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}
export const NlnParams: Schema.Schema<NlnParams, NlnParamsEncoded, never> = Schema.Struct({
  "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
  "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
  "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
  "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
});

export interface NlnResponse {
  readonly id: string;
  readonly name: string;
  readonly path: string;
  readonly source: string;
}
export interface NlnResponseEncoded {
  readonly id: string;
  readonly name: string;
  readonly path: string;
  readonly source: string;
}
export const NlnResponse: Schema.Schema<NlnResponse, NlnResponseEncoded, never> = Schema.Struct({
  id: Schema.String,
  name: Schema.String,
  path: Schema.String,
  source: Schema.String,
});

export interface ObjectiveV2PropertiesBody {
  readonly objective_v2_type: string;
}
export interface ObjectiveV2PropertiesBodyEncoded {
  readonly objective_v2_type: string;
}
export const ObjectiveV2PropertiesBody: Schema.Schema<ObjectiveV2PropertiesBody, ObjectiveV2PropertiesBodyEncoded, never> = Schema.Struct({
  objective_v2_type: Schema.String,
});

export interface OptionParams {
  readonly country_code: string;
  readonly is_intl_vac_enabled?: string;
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}
export interface OptionParamsEncoded {
  readonly country_code: string;
  readonly is_intl_vac_enabled?: string;
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}
export const OptionParams: Schema.Schema<OptionParams, OptionParamsEncoded, never> = Schema.Struct({
  country_code: Schema.String,
  is_intl_vac_enabled: Schema.optional(Schema.String),
  "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
  "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
  "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
  "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
});

export interface OptionResponse {

}
export interface OptionResponseEncoded {

}
export const OptionResponse: Schema.Schema<OptionResponse, OptionResponseEncoded, never> = Schema.Struct({

});

export interface OrganizationParams {

}
export interface OrganizationParamsEncoded {

}
export const OrganizationParams: Schema.Schema<OrganizationParams, OrganizationParamsEncoded, never> = Schema.Struct({

});

export interface OrganizationResponse {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly name: string;
  readonly address_line_1: string;
  readonly locality: string;
  readonly administrative_district_level_1: string;
  readonly country: string;
  readonly postal_code: string;
  readonly type: string;
}
export interface OrganizationResponseEncoded {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly name: string;
  readonly address_line_1: string;
  readonly locality: string;
  readonly administrative_district_level_1: string;
  readonly country: string;
  readonly postal_code: string;
  readonly type: string;
}
export const OrganizationResponse: Schema.Schema<OrganizationResponse, OrganizationResponseEncoded, never> = Schema.Struct({
  id: Schema.String,
  updated_at: Schema.String,
  created_at: Schema.String,
  name: Schema.String,
  address_line_1: Schema.String,
  locality: Schema.String,
  administrative_district_level_1: Schema.String,
  country: Schema.String,
  postal_code: Schema.String,
  type: Schema.String,
});

export interface OsTypeParams {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}
export interface OsTypeParamsEncoded {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}
export const OsTypeParams: Schema.Schema<OsTypeParams, OsTypeParamsEncoded, never> = Schema.Struct({
  "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
  "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
  "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
  "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
});

export interface OsTypeResponse {
  readonly id: string;
  readonly name: string;
}
export interface OsTypeResponseEncoded {
  readonly id: string;
  readonly name: string;
}
export const OsTypeResponse: Schema.Schema<OsTypeResponse, OsTypeResponseEncoded, never> = Schema.Struct({
  id: Schema.String,
  name: Schema.String,
});

export interface PaymentItemsBody {
  readonly payment_item_id: string;
  readonly name: string;
  readonly start_date: string;
  readonly end_date: string;
  readonly subtotal_amount: SubtotalAmountBody;
  readonly quantity: number;
}
export interface PaymentItemsBodyEncoded {
  readonly payment_item_id: string;
  readonly name: string;
  readonly start_date: string;
  readonly end_date: string;
  readonly subtotal_amount: SubtotalAmountBodyEncoded;
  readonly quantity: number;
}
export const PaymentItemsBody: Schema.Schema<PaymentItemsBody, PaymentItemsBodyEncoded, never> = Schema.Struct({
  payment_item_id: Schema.String,
  name: Schema.String,
  start_date: Schema.String,
  end_date: Schema.String,
  subtotal_amount: Schema.suspend(() => SubtotalAmountBody),
  quantity: Schema.Number,
});

export interface PhoneNumberParams {
  readonly adAccountId: string;
}
export interface PhoneNumberParamsEncoded {
  readonly adAccountId: string;
}
export const PhoneNumberParams: Schema.Schema<PhoneNumberParams, PhoneNumberParamsEncoded, never> = Schema.Struct({
  adAccountId: Schema.String,
});

export interface PhoneNumberResponse {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly name: string;
  readonly country_code: string;
  readonly numerical_country_code: string;
  readonly phone_number: string;
  readonly verification_status: string;
}
export interface PhoneNumberResponseEncoded {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly name: string;
  readonly country_code: string;
  readonly numerical_country_code: string;
  readonly phone_number: string;
  readonly verification_status: string;
}
export const PhoneNumberResponse: Schema.Schema<PhoneNumberResponse, PhoneNumberResponseEncoded, never> = Schema.Struct({
  id: Schema.String,
  updated_at: Schema.String,
  created_at: Schema.String,
  name: Schema.String,
  country_code: Schema.String,
  numerical_country_code: Schema.String,
  phone_number: Schema.String,
  verification_status: Schema.String,
});

export interface PixelParams {
  readonly adAccountId: string;
}
export interface PixelParamsEncoded {
  readonly adAccountId: string;
}
export const PixelParams: Schema.Schema<PixelParams, PixelParamsEncoded, never> = Schema.Struct({
  adAccountId: Schema.String,
});

export interface PixelResponse {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly effective_status: string;
  readonly name: string;
  readonly ad_account_id: string;
  readonly status: string;
  readonly pixel_javascript: string;
}
export interface PixelResponseEncoded {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly effective_status: string;
  readonly name: string;
  readonly ad_account_id: string;
  readonly status: string;
  readonly pixel_javascript: string;
}
export const PixelResponse: Schema.Schema<PixelResponse, PixelResponseEncoded, never> = Schema.Struct({
  id: Schema.String,
  updated_at: Schema.String,
  created_at: Schema.String,
  effective_status: Schema.String,
  name: Schema.String,
  ad_account_id: Schema.String,
  status: Schema.String,
  pixel_javascript: Schema.String,
});

export interface PlacementV2Body {
  readonly config: string;
}
export interface PlacementV2BodyEncoded {
  readonly config: string;
}
export const PlacementV2Body: Schema.Schema<PlacementV2Body, PlacementV2BodyEncoded, never> = Schema.Struct({
  config: Schema.String,
});

export interface PostalCodeParams {
  readonly countryCode: string;
  readonly cursor?: string;
  readonly limit?: string;
  readonly country_code?: string;
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}
export interface PostalCodeParamsEncoded {
  readonly countryCode: string;
  readonly cursor?: string;
  readonly limit?: string;
  readonly country_code?: string;
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}
export const PostalCodeParams: Schema.Schema<PostalCodeParams, PostalCodeParamsEncoded, never> = Schema.Struct({
  countryCode: Schema.String,
  cursor: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.String),
  country_code: Schema.optional(Schema.String),
  "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
  "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
  "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
  "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
});

export interface PostalCodeResponse {
  readonly country_code?: string;
  readonly cursor?: string;
  readonly limit?: string;
}
export interface PostalCodeResponseEncoded {
  readonly country_code?: string;
  readonly cursor?: string;
  readonly limit?: string;
}
export const PostalCodeResponse: Schema.Schema<PostalCodeResponse, PostalCodeResponseEncoded, never> = Schema.Struct({
  country_code: Schema.optional(Schema.String),
  cursor: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.String),
});

export interface PreviewParams {
  readonly mediaId: string;
}
export interface PreviewParamsEncoded {
  readonly mediaId: string;
}
export const PreviewParams: Schema.Schema<PreviewParams, PreviewParamsEncoded, never> = Schema.Struct({
  mediaId: Schema.String,
});

export interface PreviewPropertiesBody {
  readonly preview_media_id: string;
  readonly logo_media_id: string;
  readonly preview_headline: string;
}
export interface PreviewPropertiesBodyEncoded {
  readonly preview_media_id: string;
  readonly logo_media_id: string;
  readonly preview_headline: string;
}
export const PreviewPropertiesBody: Schema.Schema<PreviewPropertiesBody, PreviewPropertiesBodyEncoded, never> = Schema.Struct({
  preview_media_id: Schema.String,
  logo_media_id: Schema.String,
  preview_headline: Schema.String,
});

export interface PreviewResponse {

}
export interface PreviewResponseEncoded {

}
export const PreviewResponse: Schema.Schema<PreviewResponse, PreviewResponseEncoded, never> = Schema.Struct({

});

export interface PriceBody {
  readonly value: string;
  readonly currency: string;
}
export interface PriceBodyEncoded {
  readonly value: string;
  readonly currency: string;
}
export const PriceBody: Schema.Schema<PriceBody, PriceBodyEncoded, never> = Schema.Struct({
  value: Schema.String,
  currency: Schema.String,
});

export interface ProductFeedParams {
  readonly catalogId: string;
  readonly product_feeds: ReadonlyArray<ProductFeedsBody>;
}
export interface ProductFeedParamsEncoded {
  readonly catalogId: string;
  readonly product_feeds: ReadonlyArray<ProductFeedsBodyEncoded>;
}
export const ProductFeedParams: Schema.Schema<ProductFeedParams, ProductFeedParamsEncoded, never> = Schema.Struct({
  catalogId: Schema.String,
  product_feeds: Schema.Array(Schema.suspend(() => ProductFeedsBody)),
});

export interface ProductFeedResponse {
  readonly created_at: string;
  readonly updated_at: string;
  readonly id: string;
  readonly catalog_id: string;
  readonly name: string;
  readonly default_currency: string;
  readonly schedule: ScheduleBody;
}
export interface ProductFeedResponseEncoded {
  readonly created_at: string;
  readonly updated_at: string;
  readonly id: string;
  readonly catalog_id: string;
  readonly name: string;
  readonly default_currency: string;
  readonly schedule: ScheduleBodyEncoded;
}
export const ProductFeedResponse: Schema.Schema<ProductFeedResponse, ProductFeedResponseEncoded, never> = Schema.Struct({
  created_at: Schema.String,
  updated_at: Schema.String,
  id: Schema.String,
  catalog_id: Schema.String,
  name: Schema.String,
  default_currency: Schema.String,
  schedule: Schema.suspend(() => ScheduleBody),
});

export interface ProductFeedsBody {
  readonly catalog_id: string;
  readonly name: string;
  readonly default_currency: string;
  readonly status: string;
  readonly schedule: ScheduleBody;
}
export interface ProductFeedsBodyEncoded {
  readonly catalog_id: string;
  readonly name: string;
  readonly default_currency: string;
  readonly status: string;
  readonly schedule: ScheduleBodyEncoded;
}
export const ProductFeedsBody: Schema.Schema<ProductFeedsBody, ProductFeedsBodyEncoded, never> = Schema.Struct({
  catalog_id: Schema.String,
  name: Schema.String,
  default_currency: Schema.String,
  status: Schema.String,
  schedule: Schema.suspend(() => ScheduleBody),
});

export interface ProductParams {
  readonly catalogId: string;
  readonly limit: number;
}
export interface ProductParamsEncoded {
  readonly catalogId: string;
  readonly limit: number;
}
export const ProductParams: Schema.Schema<ProductParams, ProductParamsEncoded, never> = Schema.Struct({
  catalogId: Schema.String,
  limit: Schema.Number,
});

export interface ProductResponse {
  readonly id: string;
  readonly external_id: string;
  readonly created_at: string;
  readonly updated_at: string;
  readonly catalog_id: string;
  readonly name: string;
  readonly description: string;
  readonly link: string;
  readonly mobile_link: string;
  readonly main_media: MainMediaBody;
  readonly additional_media: ReadonlyArray<AdditionalMediaBody>;
  readonly address: AddressBody;
  readonly price: PriceBody;
  readonly sale_price: SalePriceBody;
  readonly neighborhoods: ReadonlyArray<unknown>;
  readonly geographic_coordinates: GeographicCoordinatesBody;
  readonly guest_ratings: GuestRatingsBody;
  readonly star_rating: string;
  readonly ios_app_link: IosAppLinkBody;
  readonly android_app_link: AndroidAppLinkBody;
  readonly loyalty_program: string;
  readonly custom_labels: unknown;
  readonly activity: string;
}
export interface ProductResponseEncoded {
  readonly id: string;
  readonly external_id: string;
  readonly created_at: string;
  readonly updated_at: string;
  readonly catalog_id: string;
  readonly name: string;
  readonly description: string;
  readonly link: string;
  readonly mobile_link: string;
  readonly main_media: MainMediaBodyEncoded;
  readonly additional_media: ReadonlyArray<AdditionalMediaBodyEncoded>;
  readonly address: AddressBodyEncoded;
  readonly price: PriceBodyEncoded;
  readonly sale_price: SalePriceBodyEncoded;
  readonly neighborhoods: ReadonlyArray<unknown>;
  readonly geographic_coordinates: GeographicCoordinatesBodyEncoded;
  readonly guest_ratings: GuestRatingsBodyEncoded;
  readonly star_rating: string;
  readonly ios_app_link: IosAppLinkBodyEncoded;
  readonly android_app_link: AndroidAppLinkBodyEncoded;
  readonly loyalty_program: string;
  readonly custom_labels: unknown;
  readonly activity: string;
}
export const ProductResponse: Schema.Schema<ProductResponse, ProductResponseEncoded, never> = Schema.Struct({
  id: Schema.String,
  external_id: Schema.String,
  created_at: Schema.String,
  updated_at: Schema.String,
  catalog_id: Schema.String,
  name: Schema.String,
  description: Schema.String,
  link: Schema.String,
  mobile_link: Schema.String,
  main_media: Schema.suspend(() => MainMediaBody),
  additional_media: Schema.Array(Schema.suspend(() => AdditionalMediaBody)),
  address: Schema.suspend(() => AddressBody),
  price: Schema.suspend(() => PriceBody),
  sale_price: Schema.suspend(() => SalePriceBody),
  neighborhoods: Schema.Array(Schema.Unknown),
  geographic_coordinates: Schema.suspend(() => GeographicCoordinatesBody),
  guest_ratings: Schema.suspend(() => GuestRatingsBody),
  star_rating: Schema.String,
  ios_app_link: Schema.suspend(() => IosAppLinkBody),
  android_app_link: Schema.suspend(() => AndroidAppLinkBody),
  loyalty_program: Schema.String,
  custom_labels: Schema.Unknown,
  activity: Schema.String,
});

export interface ProductSetParams {
  readonly catalogId: string;
  readonly limit: number;
}
export interface ProductSetParamsEncoded {
  readonly catalogId: string;
  readonly limit: number;
}
export const ProductSetParams: Schema.Schema<ProductSetParams, ProductSetParamsEncoded, never> = Schema.Struct({
  catalogId: Schema.String,
  limit: Schema.Number,
});

export interface ProductSetResponse {
  readonly id: string;
  readonly catalog_id: string;
  readonly name: string;
  readonly filter: FilterBody;
  readonly created_at: string;
  readonly updated_at: string;
}
export interface ProductSetResponseEncoded {
  readonly id: string;
  readonly catalog_id: string;
  readonly name: string;
  readonly filter: FilterBodyEncoded;
  readonly created_at: string;
  readonly updated_at: string;
}
export const ProductSetResponse: Schema.Schema<ProductSetResponse, ProductSetResponseEncoded, never> = Schema.Struct({
  id: Schema.String,
  catalog_id: Schema.String,
  name: Schema.String,
  filter: Schema.suspend(() => FilterBody),
  created_at: Schema.String,
  updated_at: Schema.String,
});

export interface ProductSetsBody {
  readonly id: string;
  readonly name: string;
  readonly filter: FilterBody;
}
export interface ProductSetsBodyEncoded {
  readonly id: string;
  readonly name: string;
  readonly filter: FilterBodyEncoded;
}
export const ProductSetsBody: Schema.Schema<ProductSetsBody, ProductSetsBodyEncoded, never> = Schema.Struct({
  id: Schema.String,
  name: Schema.String,
  filter: Schema.suspend(() => FilterBody),
});

export interface ProfilePropertiesBody {
  readonly profile_id: string;
}
export interface ProfilePropertiesBodyEncoded {
  readonly profile_id: string;
}
export const ProfilePropertiesBody: Schema.Schema<ProfilePropertiesBody, ProfilePropertiesBodyEncoded, never> = Schema.Struct({
  profile_id: Schema.String,
});

export type RenderTypeEnum = "STATIC" | "DYNAMIC" | string;
export type RenderTypeEnumEncoded = "STATIC" | "DYNAMIC" | string;
export const RenderTypeEnum: Schema.Schema<RenderTypeEnum, RenderTypeEnumEncoded, never> = Schema.Union(Schema.Literal("STATIC", "DYNAMIC"), Schema.String);

export interface ReservedForecastingParams {
  readonly adAccountId: string;
  readonly adsquads: ReadonlyArray<AdsquadsBody>;
}
export interface ReservedForecastingParamsEncoded {
  readonly adAccountId: string;
  readonly adsquads: ReadonlyArray<AdsquadsBodyEncoded>;
}
export const ReservedForecastingParams: Schema.Schema<ReservedForecastingParams, ReservedForecastingParamsEncoded, never> = Schema.Struct({
  adAccountId: Schema.String,
  adsquads: Schema.Array(Schema.suspend(() => AdsquadsBody)),
});

export interface ReservedForecastingResponse {
  readonly ad_account_id?: string;
}
export interface ReservedForecastingResponseEncoded {
  readonly ad_account_id?: string;
}
export const ReservedForecastingResponse: Schema.Schema<ReservedForecastingResponse, ReservedForecastingResponseEncoded, never> = Schema.Struct({
  ad_account_id: Schema.optional(Schema.String),
});

export type ReviewStatusEnum = "PENDING_REVIEW" | "APPROVED" | "DISAPPROVED" | string;
export type ReviewStatusEnumEncoded = "PENDING_REVIEW" | "APPROVED" | "DISAPPROVED" | string;
export const ReviewStatusEnum: Schema.Schema<ReviewStatusEnum, ReviewStatusEnumEncoded, never> = Schema.Union(Schema.Literal("PENDING_REVIEW", "APPROVED", "DISAPPROVED"), Schema.String);

export interface RoleParams {
  readonly adAccountId: string;
  readonly limit?: string;
}
export interface RoleParamsEncoded {
  readonly adAccountId: string;
  readonly limit?: string;
}
export const RoleParams: Schema.Schema<RoleParams, RoleParamsEncoded, never> = Schema.Struct({
  adAccountId: Schema.String,
  limit: Schema.optional(Schema.String),
});

export interface RoleResponse {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly container_kind: string;
  readonly container_id: string;
  readonly member_id: string;
  readonly ad_account_id: string;
  readonly type: string;
}
export interface RoleResponseEncoded {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly container_kind: string;
  readonly container_id: string;
  readonly member_id: string;
  readonly ad_account_id: string;
  readonly type: string;
}
export const RoleResponse: Schema.Schema<RoleResponse, RoleResponseEncoded, never> = Schema.Struct({
  id: Schema.String,
  updated_at: Schema.String,
  created_at: Schema.String,
  container_kind: Schema.String,
  container_id: Schema.String,
  member_id: Schema.String,
  ad_account_id: Schema.String,
  type: Schema.String,
});

export interface RolesBody {
  readonly member_id: string;
  readonly ad_account_id: string;
  readonly type: string;
}
export interface RolesBodyEncoded {
  readonly member_id: string;
  readonly ad_account_id: string;
  readonly type: string;
}
export const RolesBody: Schema.Schema<RolesBody, RolesBodyEncoded, never> = Schema.Struct({
  member_id: Schema.String,
  ad_account_id: Schema.String,
  type: Schema.String,
});

export interface RolParams {
  readonly roleId: string;
  readonly role_id?: string;
}
export interface RolParamsEncoded {
  readonly roleId: string;
  readonly role_id?: string;
}
export const RolParams: Schema.Schema<RolParams, RolParamsEncoded, never> = Schema.Struct({
  roleId: Schema.String,
  role_id: Schema.optional(Schema.String),
});

export interface RolResponse {

}
export interface RolResponseEncoded {

}
export const RolResponse: Schema.Schema<RolResponse, RolResponseEncoded, never> = Schema.Struct({

});

export interface SalePriceBody {
  readonly value: string;
  readonly currency: string;
}
export interface SalePriceBodyEncoded {
  readonly value: string;
  readonly currency: string;
}
export const SalePriceBody: Schema.Schema<SalePriceBody, SalePriceBodyEncoded, never> = Schema.Struct({
  value: Schema.String,
  currency: Schema.String,
});

export interface ScheduleBody {
  readonly url: string;
  readonly username: string;
  readonly password: string;
  readonly interval_type: string;
  readonly interval_count: string;
  readonly timezone: string;
  readonly minute: string;
}
export interface ScheduleBodyEncoded {
  readonly url: string;
  readonly username: string;
  readonly password: string;
  readonly interval_type: string;
  readonly interval_count: string;
  readonly timezone: string;
  readonly minute: string;
}
export const ScheduleBody: Schema.Schema<ScheduleBody, ScheduleBodyEncoded, never> = Schema.Struct({
  url: Schema.String,
  username: Schema.String,
  password: Schema.String,
  interval_type: Schema.String,
  interval_count: Schema.String,
  timezone: Schema.String,
  minute: Schema.String,
});

export interface SclParams {
  readonly country_code?: string;
  readonly is_hec?: string;
  readonly limit?: string;
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}
export interface SclParamsEncoded {
  readonly country_code?: string;
  readonly is_hec?: string;
  readonly limit?: string;
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}
export const SclParams: Schema.Schema<SclParams, SclParamsEncoded, never> = Schema.Struct({
  country_code: Schema.optional(Schema.String),
  is_hec: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.String),
  "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
  "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
  "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
  "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
});

export interface SclResponse {
  readonly country_code?: string;
  readonly is_hec?: string;
  readonly limit?: string;
}
export interface SclResponseEncoded {
  readonly country_code?: string;
  readonly is_hec?: string;
  readonly limit?: string;
}
export const SclResponse: Schema.Schema<SclResponse, SclResponseEncoded, never> = Schema.Struct({
  country_code: Schema.optional(Schema.String),
  is_hec: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.String),
});

export interface SearchParams {
  readonly catalogId: string;
  readonly limit: number;
}
export interface SearchParamsEncoded {
  readonly catalogId: string;
  readonly limit: number;
}
export const SearchParams: Schema.Schema<SearchParams, SearchParamsEncoded, never> = Schema.Struct({
  catalogId: Schema.String,
  limit: Schema.Number,
});

export interface SearchResponse {
  readonly catalog_id: string;
}
export interface SearchResponseEncoded {
  readonly catalog_id: string;
}
export const SearchResponse: Schema.Schema<SearchResponse, SearchResponseEncoded, never> = Schema.Struct({
  catalog_id: Schema.String,
});

export interface SegmentParams {
  readonly adAccountId: string;
  readonly segments: ReadonlyArray<SegmentsBody>;
}
export interface SegmentParamsEncoded {
  readonly adAccountId: string;
  readonly segments: ReadonlyArray<SegmentsBodyEncoded>;
}
export const SegmentParams: Schema.Schema<SegmentParams, SegmentParamsEncoded, never> = Schema.Struct({
  adAccountId: Schema.String,
  segments: Schema.Array(Schema.suspend(() => SegmentsBody)),
});

export interface SegmentResponse {
  readonly updated_at: string;
  readonly created_at: string;
  readonly name: string;
  readonly id: string;
  readonly ad_account_id: string;
  readonly description: string;
  readonly status: string;
  readonly source_type: string;
  readonly retention_in_days: number;
  readonly approximate_number_users: number;
}
export interface SegmentResponseEncoded {
  readonly updated_at: string;
  readonly created_at: string;
  readonly name: string;
  readonly id: string;
  readonly ad_account_id: string;
  readonly description: string;
  readonly status: string;
  readonly source_type: string;
  readonly retention_in_days: number;
  readonly approximate_number_users: number;
}
export const SegmentResponse: Schema.Schema<SegmentResponse, SegmentResponseEncoded, never> = Schema.Struct({
  updated_at: Schema.String,
  created_at: Schema.String,
  name: Schema.String,
  id: Schema.String,
  ad_account_id: Schema.String,
  description: Schema.String,
  status: Schema.String,
  source_type: Schema.String,
  retention_in_days: Schema.Number,
  approximate_number_users: Schema.Number,
});

export interface SegmentsBody {
  readonly name: string;
  readonly description: string;
  readonly source_type: string;
  readonly retention_in_days: number;
  readonly ad_account_id: string;
}
export interface SegmentsBodyEncoded {
  readonly name: string;
  readonly description: string;
  readonly source_type: string;
  readonly retention_in_days: number;
  readonly ad_account_id: string;
}
export const SegmentsBody: Schema.Schema<SegmentsBody, SegmentsBodyEncoded, never> = Schema.Struct({
  name: Schema.String,
  description: Schema.String,
  source_type: Schema.String,
  retention_in_days: Schema.Number,
  ad_account_id: Schema.String,
});

export interface ShpParams {
  readonly country_code?: string;
  readonly limit?: string;
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}
export interface ShpParamsEncoded {
  readonly country_code?: string;
  readonly limit?: string;
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}
export const ShpParams: Schema.Schema<ShpParams, ShpParamsEncoded, never> = Schema.Struct({
  country_code: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.String),
  "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
  "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
  "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
  "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
});

export interface ShpResponse {
  readonly country_code?: string;
  readonly limit?: string;
}
export interface ShpResponseEncoded {
  readonly country_code?: string;
  readonly limit?: string;
}
export const ShpResponse: Schema.Schema<ShpResponse, ShpResponseEncoded, never> = Schema.Struct({
  country_code: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.String),
});

export interface SnapcodeParams {
  readonly creativeId: string;
}
export interface SnapcodeParamsEncoded {
  readonly creativeId: string;
}
export const SnapcodeParams: Schema.Schema<SnapcodeParams, SnapcodeParamsEncoded, never> = Schema.Struct({
  creativeId: Schema.String,
});

export interface SnapcodeResponse {

}
export interface SnapcodeResponseEncoded {

}
export const SnapcodeResponse: Schema.Schema<SnapcodeResponse, SnapcodeResponseEncoded, never> = Schema.Struct({

});

export interface StatsBody {
  readonly spend: number;
}
export interface StatsBodyEncoded {
  readonly spend: number;
}
export const StatsBody: Schema.Schema<StatsBody, StatsBodyEncoded, never> = Schema.Struct({
  spend: Schema.Number,
});

export interface StatsParams {
  readonly pixelId: string;
  readonly "pixel-id"?: string;
}
export interface StatsParamsEncoded {
  readonly pixelId: string;
  readonly "pixel-id"?: string;
}
export const StatsParams: Schema.Schema<StatsParams, StatsParamsEncoded, never> = Schema.Struct({
  pixelId: Schema.String,
  "pixel-id": Schema.optional(Schema.String),
});

export interface StatsResponse {
  readonly "pixel-id"?: string;
}
export interface StatsResponseEncoded {
  readonly "pixel-id"?: string;
}
export const StatsResponse: Schema.Schema<StatsResponse, StatsResponseEncoded, never> = Schema.Struct({
  "pixel-id": Schema.optional(Schema.String),
});

export interface StatusBody {
  readonly before_value: string;
  readonly after_value: string;
}
export interface StatusBodyEncoded {
  readonly before_value: string;
  readonly after_value: string;
}
export const StatusBody: Schema.Schema<StatusBody, StatusBodyEncoded, never> = Schema.Struct({
  before_value: Schema.String,
  after_value: Schema.String,
});

export interface SubtotalAmountBody {
  readonly amount: number;
  readonly currency_type: string;
}
export interface SubtotalAmountBodyEncoded {
  readonly amount: number;
  readonly currency_type: string;
}
export const SubtotalAmountBody: Schema.Schema<SubtotalAmountBody, SubtotalAmountBodyEncoded, never> = Schema.Struct({
  amount: Schema.Number,
  currency_type: Schema.String,
});

export interface SummaryBody {
  readonly issues_summary: unknown;
}
export interface SummaryBodyEncoded {
  readonly issues_summary: unknown;
}
export const SummaryBody: Schema.Schema<SummaryBody, SummaryBodyEncoded, never> = Schema.Struct({
  issues_summary: Schema.Unknown,
});

export interface TargetingBody {
  readonly regulated_content: boolean;
  readonly geos: ReadonlyArray<GeosBody>;
}
export interface TargetingBodyEncoded {
  readonly regulated_content: boolean;
  readonly geos: ReadonlyArray<GeosBodyEncoded>;
}
export const TargetingBody: Schema.Schema<TargetingBody, TargetingBodyEncoded, never> = Schema.Struct({
  regulated_content: Schema.Boolean,
  geos: Schema.Array(Schema.suspend(() => GeosBody)),
});

export interface TargetingInsightParams {
  readonly adAccountId: string;
  readonly base_spec: BaseSpecBody;
  readonly targeting_spec: TargetingSpecBody;
}
export interface TargetingInsightParamsEncoded {
  readonly adAccountId: string;
  readonly base_spec: BaseSpecBodyEncoded;
  readonly targeting_spec: TargetingSpecBodyEncoded;
}
export const TargetingInsightParams: Schema.Schema<TargetingInsightParams, TargetingInsightParamsEncoded, never> = Schema.Struct({
  adAccountId: Schema.String,
  base_spec: Schema.suspend(() => BaseSpecBody),
  targeting_spec: Schema.suspend(() => TargetingSpecBody),
});

export interface TargetingInsightResponse {
  readonly ad_account_id?: string;
}
export interface TargetingInsightResponseEncoded {
  readonly ad_account_id?: string;
}
export const TargetingInsightResponse: Schema.Schema<TargetingInsightResponse, TargetingInsightResponseEncoded, never> = Schema.Struct({
  ad_account_id: Schema.optional(Schema.String),
});

export interface TargetingSpecBody {
  readonly interests: ReadonlyArray<InterestsBody>;
  readonly geos: ReadonlyArray<GeosBody>;
}
export interface TargetingSpecBodyEncoded {
  readonly interests: ReadonlyArray<InterestsBodyEncoded>;
  readonly geos: ReadonlyArray<GeosBodyEncoded>;
}
export const TargetingSpecBody: Schema.Schema<TargetingSpecBody, TargetingSpecBodyEncoded, never> = Schema.Struct({
  interests: Schema.Array(Schema.suspend(() => InterestsBody)),
  geos: Schema.Array(Schema.suspend(() => GeosBody)),
});

export type TargetingV2Enum = "ENABLED" | string;
export type TargetingV2EnumEncoded = "ENABLED" | string;
export const TargetingV2Enum: Schema.Schema<TargetingV2Enum, TargetingV2EnumEncoded, never> = Schema.Union(Schema.Literal("ENABLED"), Schema.String);

export interface ThumbnailParams {
  readonly mediaId: string;
}
export interface ThumbnailParamsEncoded {
  readonly mediaId: string;
}
export const ThumbnailParams: Schema.Schema<ThumbnailParams, ThumbnailParamsEncoded, never> = Schema.Struct({
  mediaId: Schema.String,
});

export interface ThumbnailResponse {

}
export interface ThumbnailResponseEncoded {

}
export const ThumbnailResponse: Schema.Schema<ThumbnailResponse, ThumbnailResponseEncoded, never> = Schema.Struct({

});

export interface TimeseriesBody {
  readonly start_time: string;
  readonly end_time: string;
  readonly stats: StatsBody;
}
export interface TimeseriesBodyEncoded {
  readonly start_time: string;
  readonly end_time: string;
  readonly stats: StatsBodyEncoded;
}
export const TimeseriesBody: Schema.Schema<TimeseriesBody, TimeseriesBodyEncoded, never> = Schema.Struct({
  start_time: Schema.String,
  end_time: Schema.String,
  stats: Schema.suspend(() => StatsBody),
});

export interface TimeseriesStatParams {
  readonly adId: string;
  readonly "ad-id"?: string;
}
export interface TimeseriesStatParamsEncoded {
  readonly adId: string;
  readonly "ad-id"?: string;
}
export const TimeseriesStatParams: Schema.Schema<TimeseriesStatParams, TimeseriesStatParamsEncoded, never> = Schema.Struct({
  adId: Schema.String,
  "ad-id": Schema.optional(Schema.String),
});

export interface TimeseriesStatResponse {
  readonly id: string;
  readonly type: string;
  readonly granularity: string;
  readonly start_time: string;
  readonly end_time: string;
  readonly finalized_data_end_time: string;
  readonly timeseries: ReadonlyArray<TimeseriesBody>;
}
export interface TimeseriesStatResponseEncoded {
  readonly id: string;
  readonly type: string;
  readonly granularity: string;
  readonly start_time: string;
  readonly end_time: string;
  readonly finalized_data_end_time: string;
  readonly timeseries: ReadonlyArray<TimeseriesBodyEncoded>;
}
export const TimeseriesStatResponse: Schema.Schema<TimeseriesStatResponse, TimeseriesStatResponseEncoded, never> = Schema.Struct({
  id: Schema.String,
  type: Schema.String,
  granularity: Schema.String,
  start_time: Schema.String,
  end_time: Schema.String,
  finalized_data_end_time: Schema.String,
  timeseries: Schema.Array(Schema.suspend(() => TimeseriesBody)),
});

export interface TotalAmountBody {
  readonly amount: number;
  readonly currency_type: string;
}
export interface TotalAmountBodyEncoded {
  readonly amount: number;
  readonly currency_type: string;
}
export const TotalAmountBody: Schema.Schema<TotalAmountBody, TotalAmountBodyEncoded, never> = Schema.Struct({
  amount: Schema.Number,
  currency_type: Schema.String,
});

export interface TotalStatParams {
  readonly adAccountId: string;
  readonly breakdown?: string;
  readonly async?: string;
  readonly async_format?: string;
  readonly fields?: string;
  readonly end_time?: string;
  readonly start_time?: string;
  readonly granularity: GranularityEnum;
  readonly test?: string;
  readonly dimension?: DimensionEnum;
  readonly pivot?: string;
  readonly action_report_time?: string;
  readonly swipe_up_attribution_window?: string;
  readonly view_attribution_window?: string;
  readonly position_stats?: string;
  readonly omit_empty?: string;
  readonly conversion_source_types?: string;
  readonly limit?: string;
}
export interface TotalStatParamsEncoded {
  readonly adAccountId: string;
  readonly breakdown?: string;
  readonly async?: string;
  readonly async_format?: string;
  readonly fields?: string;
  readonly end_time?: string;
  readonly start_time?: string;
  readonly granularity: GranularityEnumEncoded;
  readonly test?: string;
  readonly dimension?: DimensionEnumEncoded;
  readonly pivot?: string;
  readonly action_report_time?: string;
  readonly swipe_up_attribution_window?: string;
  readonly view_attribution_window?: string;
  readonly position_stats?: string;
  readonly omit_empty?: string;
  readonly conversion_source_types?: string;
  readonly limit?: string;
}
export const TotalStatParams: Schema.Schema<TotalStatParams, TotalStatParamsEncoded, never> = Schema.Struct({
  adAccountId: Schema.String,
  breakdown: Schema.optional(Schema.String),
  async: Schema.optional(Schema.String),
  async_format: Schema.optional(Schema.String),
  fields: Schema.optional(Schema.String),
  end_time: Schema.optional(Schema.String),
  start_time: Schema.optional(Schema.String),
  granularity: Schema.suspend(() => GranularityEnum),
  test: Schema.optional(Schema.String),
  dimension: Schema.optional(Schema.suspend(() => DimensionEnum)),
  pivot: Schema.optional(Schema.String),
  action_report_time: Schema.optional(Schema.String),
  swipe_up_attribution_window: Schema.optional(Schema.String),
  view_attribution_window: Schema.optional(Schema.String),
  position_stats: Schema.optional(Schema.String),
  omit_empty: Schema.optional(Schema.String),
  conversion_source_types: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.String),
});

export interface TotalStatResponse {
  readonly id: string;
  readonly type: string;
  readonly granularity: string;
  readonly stats: StatsBody;
  readonly finalized_data_end_time: string;
}
export interface TotalStatResponseEncoded {
  readonly id: string;
  readonly type: string;
  readonly granularity: string;
  readonly stats: StatsBodyEncoded;
  readonly finalized_data_end_time: string;
}
export const TotalStatResponse: Schema.Schema<TotalStatResponse, TotalStatResponseEncoded, never> = Schema.Struct({
  id: Schema.String,
  type: Schema.String,
  granularity: Schema.String,
  stats: Schema.suspend(() => StatsBody),
  finalized_data_end_time: Schema.String,
});

export interface TransactionParams {
  readonly organizationId: string;
  readonly start_time?: string;
  readonly end_time?: string;
}
export interface TransactionParamsEncoded {
  readonly organizationId: string;
  readonly start_time?: string;
  readonly end_time?: string;
}
export const TransactionParams: Schema.Schema<TransactionParams, TransactionParamsEncoded, never> = Schema.Struct({
  organizationId: Schema.String,
  start_time: Schema.optional(Schema.String),
  end_time: Schema.optional(Schema.String),
});

export interface TransactionResponse {
  readonly id: string;
  readonly account_id: string;
  readonly payment_items: ReadonlyArray<PaymentItemsBody>;
  readonly payment_action_id: string;
  readonly payment_action_type: string;
  readonly credential_type: string;
  readonly credential_id: string;
  readonly payment_method_id: string;
  readonly total_amount: TotalAmountBody;
  readonly status: string;
  readonly created_time: string;
  readonly last_update_time: string;
}
export interface TransactionResponseEncoded {
  readonly id: string;
  readonly account_id: string;
  readonly payment_items: ReadonlyArray<PaymentItemsBodyEncoded>;
  readonly payment_action_id: string;
  readonly payment_action_type: string;
  readonly credential_type: string;
  readonly credential_id: string;
  readonly payment_method_id: string;
  readonly total_amount: TotalAmountBodyEncoded;
  readonly status: string;
  readonly created_time: string;
  readonly last_update_time: string;
}
export const TransactionResponse: Schema.Schema<TransactionResponse, TransactionResponseEncoded, never> = Schema.Struct({
  id: Schema.String,
  account_id: Schema.String,
  payment_items: Schema.Array(Schema.suspend(() => PaymentItemsBody)),
  payment_action_id: Schema.String,
  payment_action_type: Schema.String,
  credential_type: Schema.String,
  credential_id: Schema.String,
  payment_method_id: Schema.String,
  total_amount: Schema.suspend(() => TotalAmountBody),
  status: Schema.String,
  created_time: Schema.String,
  last_update_time: Schema.String,
});

export type TypeEnum = "PREVIEW" | string;
export type TypeEnumEncoded = "PREVIEW" | string;
export const TypeEnum: Schema.Schema<TypeEnum, TypeEnumEncoded, never> = Schema.Union(Schema.Literal("PREVIEW"), Schema.String);

export interface UpdateValueRecordsBody {
  readonly status: StatusBody;
}
export interface UpdateValueRecordsBodyEncoded {
  readonly status: StatusBodyEncoded;
}
export const UpdateValueRecordsBody: Schema.Schema<UpdateValueRecordsBody, UpdateValueRecordsBodyEncoded, never> = Schema.Struct({
  status: Schema.suspend(() => StatusBody),
});

export interface UserParams {
  readonly segmentId: string;
  readonly users: ReadonlyArray<UsersBody>;
}
export interface UserParamsEncoded {
  readonly segmentId: string;
  readonly users: ReadonlyArray<UsersBodyEncoded>;
}
export const UserParams: Schema.Schema<UserParams, UserParamsEncoded, never> = Schema.Struct({
  segmentId: Schema.String,
  users: Schema.Array(Schema.suspend(() => UsersBody)),
});

export interface UserResponse {
  readonly number_uploaded_users: number;
}
export interface UserResponseEncoded {
  readonly number_uploaded_users: number;
}
export const UserResponse: Schema.Schema<UserResponse, UserResponseEncoded, never> = Schema.Struct({
  number_uploaded_users: Schema.Number,
});

export interface UsersBody {
  readonly schema: ReadonlyArray<unknown>;
  readonly data: string;
}
export interface UsersBodyEncoded {
  readonly schema: ReadonlyArray<unknown>;
  readonly data: string;
}
export const UsersBody: Schema.Schema<UsersBody, UsersBodyEncoded, never> = Schema.Struct({
  schema: Schema.Array(Schema.Unknown),
  data: Schema.String,
});

export interface V1Params {
  readonly memberId: string;
  readonly member_id?: string;
}
export interface V1ParamsEncoded {
  readonly memberId: string;
  readonly member_id?: string;
}
export const V1Params: Schema.Schema<V1Params, V1ParamsEncoded, never> = Schema.Struct({
  memberId: Schema.String,
  member_id: Schema.optional(Schema.String),
});

export interface V1Response {

}
export interface V1ResponseEncoded {

}
export const V1Response: Schema.Schema<V1Response, V1ResponseEncoded, never> = Schema.Struct({

});

export interface VacParams {
  readonly country_code?: string;
  readonly is_hec?: string;
  readonly limit?: string;
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}
export interface VacParamsEncoded {
  readonly country_code?: string;
  readonly is_hec?: string;
  readonly limit?: string;
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}
export const VacParams: Schema.Schema<VacParams, VacParamsEncoded, never> = Schema.Struct({
  country_code: Schema.optional(Schema.String),
  is_hec: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.String),
  "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
  "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
  "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
  "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
});

export interface VacResponse {
  readonly country_code?: string;
  readonly is_hec?: string;
  readonly limit?: string;
}
export interface VacResponseEncoded {
  readonly country_code?: string;
  readonly is_hec?: string;
  readonly limit?: string;
}
export const VacResponse: Schema.Schema<VacResponse, VacResponseEncoded, never> = Schema.Struct({
  country_code: Schema.optional(Schema.String),
  is_hec: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.String),
});

export interface WebViewPropertiesParams {
  readonly adAccountId: string;
  readonly creatives: ReadonlyArray<CreativesBody>;
}
export interface WebViewPropertiesParamsEncoded {
  readonly adAccountId: string;
  readonly creatives: ReadonlyArray<CreativesBodyEncoded>;
}
export const WebViewPropertiesParams: Schema.Schema<WebViewPropertiesParams, WebViewPropertiesParamsEncoded, never> = Schema.Struct({
  adAccountId: Schema.String,
  creatives: Schema.Array(Schema.suspend(() => CreativesBody)),
});

export interface WebViewPropertiesResponse {
  readonly url: string;
  readonly block_preload: boolean;
}
export interface WebViewPropertiesResponseEncoded {
  readonly url: string;
  readonly block_preload: boolean;
}
export const WebViewPropertiesResponse: Schema.Schema<WebViewPropertiesResponse, WebViewPropertiesResponseEncoded, never> = Schema.Struct({
  url: Schema.String,
  block_preload: Schema.Boolean,
});

export interface WeeklyBody {
  readonly conversions_lower: number;
  readonly conversions_upper: number;
  readonly reaches_lower: number;
  readonly reaches_upper: number;
  readonly impressions_lower: number;
  readonly impressions_upper: number;
  readonly is_budget_hit: boolean;
  readonly budget_left: number;
  readonly budget_spent_ratio: number;
}
export interface WeeklyBodyEncoded {
  readonly conversions_lower: number;
  readonly conversions_upper: number;
  readonly reaches_lower: number;
  readonly reaches_upper: number;
  readonly impressions_lower: number;
  readonly impressions_upper: number;
  readonly is_budget_hit: boolean;
  readonly budget_left: number;
  readonly budget_spent_ratio: number;
}
export const WeeklyBody: Schema.Schema<WeeklyBody, WeeklyBodyEncoded, never> = Schema.Struct({
  conversions_lower: Schema.Number,
  conversions_upper: Schema.Number,
  reaches_lower: Schema.Number,
  reaches_upper: Schema.Number,
  impressions_lower: Schema.Number,
  impressions_upper: Schema.Number,
  is_budget_hit: Schema.Boolean,
  budget_left: Schema.Number,
  budget_spent_ratio: Schema.Number,
});
