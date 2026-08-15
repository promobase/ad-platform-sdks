// @generated
// fingerprint: sha256:18ad68aa6c128d11b85e3397b172caec6a58ed3ae07966310bb8db218b8743bd
// DO NOT EDIT: generated file; changes will be overwritten.
// This file is generated. Do not edit by hand.
import * as v from "valibot";

export type AccessTokenParams = {
  readonly expires_in: number;
  readonly token_type: string;
  readonly refresh_token: string;
  readonly access_token: string;
};
export const AccessTokenParamsSchema: v.GenericSchema<unknown, AccessTokenParams> = v.looseObject({
  expires_in: v.number(),
  token_type: v.string(),
  refresh_token: v.string(),
  access_token: v.string(),
});

export type AccessTokenResponse = {
  readonly client_id?: string;
  readonly client_secret?: string;
  readonly code?: string;
  readonly grant_type?: string;
  readonly redirect_uri?: string;
};
export const AccessTokenResponseSchema: v.GenericSchema<unknown, AccessTokenResponse> = v.looseObject({
  client_id: v.optional(v.string()),
  client_secret: v.optional(v.string()),
  code: v.optional(v.string()),
  grant_type: v.optional(v.string()),
  redirect_uri: v.optional(v.string()),
});

export type AdaccountParams = {
  readonly adAccountId: string;
};
export const AdaccountParamsSchema: v.GenericSchema<unknown, AdaccountParams> = v.looseObject({
  adAccountId: v.string(),
});

export type AdaccountResponse = {
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
};
export const AdaccountResponseSchema: v.GenericSchema<unknown, AdaccountResponse> = v.looseObject({
  id: v.string(),
  updated_at: v.string(),
  created_at: v.string(),
  name: v.string(),
  type: v.string(),
  status: v.string(),
  organization_id: v.string(),
  funding_source_ids: v.array(v.unknown()),
  currency: v.string(),
  timezone: v.string(),
  advertiser: v.string(),
});

export type AdaccountsBody = {
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
};
export const AdaccountsBodySchema: v.GenericSchema<unknown, AdaccountsBody> = v.looseObject({
  name: v.string(),
  type: v.string(),
  status: v.string(),
  organization_id: v.string(),
  funding_source_ids: v.array(v.unknown()),
  currency: v.string(),
  billing_type: v.string(),
  billing_center_id: v.string(),
  lifetime_spend_cap_micro: v.string(),
  timezone: v.string(),
  advertiser: v.string(),
});

export type AdditionalMediaBody = {
  readonly url: string;
  readonly tags: ReadonlyArray<unknown>;
};
export const AdditionalMediaBodySchema: v.GenericSchema<unknown, AdditionalMediaBody> = v.looseObject({
  url: v.string(),
  tags: v.array(v.unknown()),
});

export type AddressBody = {
  readonly line: string;
  readonly line2: string;
  readonly locality: string;
  readonly postal_code: string;
  readonly region: string;
  readonly country_code: string;
};
export const AddressBodySchema: v.GenericSchema<unknown, AddressBody> = v.looseObject({
  line: v.string(),
  line2: v.string(),
  locality: v.string(),
  postal_code: v.string(),
  region: v.string(),
  country_code: v.string(),
});

export type AdParams = {
  readonly adAccountId: string;
  readonly entity_ids: ReadonlyArray<EntityIdsBody>;
};
export const AdParamsSchema: v.GenericSchema<unknown, AdParams> = v.looseObject({
  adAccountId: v.string(),
  entity_ids: v.array(v.lazy(() => EntityIdsBodySchema)),
});

export type AdResponse = {
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
};
export const AdResponseSchema: v.GenericSchema<unknown, AdResponse> = v.looseObject({
  id: v.string(),
  updated_at: v.string(),
  created_at: v.string(),
  name: v.string(),
  ad_squad_id: v.string(),
  creative_id: v.string(),
  status: v.string(),
  type: v.string(),
  render_type: v.string(),
  review_status: v.string(),
  delivery_status: v.array(v.unknown()),
});

export type AdsBody = {
  readonly id: string;
  readonly ad_squad_id: string;
  readonly creative_id: string;
  readonly name: string;
  readonly type: string;
  readonly status: string;
  readonly third_party_paid_impression_tracking_urls: ReadonlyArray<unknown>;
  readonly third_party_on_swipe_tracking_urls: ReadonlyArray<unknown>;
};
export const AdsBodySchema: v.GenericSchema<unknown, AdsBody> = v.looseObject({
  id: v.string(),
  ad_squad_id: v.string(),
  creative_id: v.string(),
  name: v.string(),
  type: v.string(),
  status: v.string(),
  third_party_paid_impression_tracking_urls: v.array(v.unknown()),
  third_party_on_swipe_tracking_urls: v.array(v.unknown()),
});

export type AdSquadOutcomeEstimatesV2Body = {
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
};
export const AdSquadOutcomeEstimatesV2BodySchema: v.GenericSchema<unknown, AdSquadOutcomeEstimatesV2Body> = v.looseObject({
  placement_v2: v.lazy(() => PlacementV2BodySchema),
  status: v.string(),
  type: v.string(),
  targeting: v.lazy(() => TargetingBodySchema),
  bid_strategy: v.string(),
  daily_budget_micro: v.number(),
  delivery_constraint: v.string(),
  start_time: v.string(),
  optimization_goal: v.string(),
  forced_view_setting: v.string(),
  estimate_ad_types: v.array(v.unknown()),
  pixel_id: v.string(),
});

export type AdSquadOutcomeEstimateV2Params = {
  readonly adAccountId: string;
  readonly ad_squad_outcome_estimates_v2: ReadonlyArray<AdSquadOutcomeEstimatesV2Body>;
};
export const AdSquadOutcomeEstimateV2ParamsSchema: v.GenericSchema<unknown, AdSquadOutcomeEstimateV2Params> = v.looseObject({
  adAccountId: v.string(),
  ad_squad_outcome_estimates_v2: v.array(v.lazy(() => AdSquadOutcomeEstimatesV2BodySchema)),
});

export type AdSquadOutcomeEstimateV2Response = {
  readonly request_id: string;
  readonly message: string;
  readonly error_code: string;
  readonly daily: DailyBody;
  readonly weekly: WeeklyBody;
  readonly use_case: string;
};
export const AdSquadOutcomeEstimateV2ResponseSchema: v.GenericSchema<unknown, AdSquadOutcomeEstimateV2Response> = v.looseObject({
  request_id: v.string(),
  message: v.string(),
  error_code: v.string(),
  daily: v.lazy(() => DailyBodySchema),
  weekly: v.lazy(() => WeeklyBodySchema),
  use_case: v.string(),
});

export type AdsquadParams = {
  readonly adAccountId: string;
  readonly entity_ids: ReadonlyArray<EntityIdsBody>;
};
export const AdsquadParamsSchema: v.GenericSchema<unknown, AdsquadParams> = v.looseObject({
  adAccountId: v.string(),
  entity_ids: v.array(v.lazy(() => EntityIdsBodySchema)),
});

export type AdsquadResponse = {
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
};
export const AdsquadResponseSchema: v.GenericSchema<unknown, AdsquadResponse> = v.looseObject({
  id: v.string(),
  updated_at: v.string(),
  created_at: v.string(),
  name: v.string(),
  status: v.string(),
  campaign_id: v.string(),
  type: v.string(),
  targeting: v.lazy(() => TargetingBodySchema),
  placement_v2: v.lazy(() => PlacementV2BodySchema),
  billing_event: v.string(),
  auto_bid: v.boolean(),
  target_bid: v.boolean(),
  bid_strategy: v.string(),
  daily_budget_micro: v.number(),
  start_time: v.string(),
  optimization_goal: v.string(),
});

export type AdsquadsBody = {
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
};
export const AdsquadsBodySchema: v.GenericSchema<unknown, AdsquadsBody> = v.looseObject({
  name: v.string(),
  status: v.string(),
  campaign_id: v.string(),
  type: v.string(),
  placement: v.string(),
  billing_event: v.string(),
  bid_micro: v.string(),
  daily_budget_micro: v.string(),
  start_time: v.string(),
  end_time: v.string(),
  optimization_goal: v.string(),
  targeting: v.lazy(() => TargetingBodySchema),
  pixel_id: v.string(),
});

export type AdSquadUiRenderDataBody = {
  readonly conversion_location: string;
};
export const AdSquadUiRenderDataBodySchema: v.GenericSchema<unknown, AdSquadUiRenderDataBody> = v.looseObject({
  conversion_location: v.string(),
});

export type AdSquadUiRenderDataParams = {
  readonly adAccountId: string;
  readonly limit?: string;
};
export const AdSquadUiRenderDataParamsSchema: v.GenericSchema<unknown, AdSquadUiRenderDataParams> = v.looseObject({
  adAccountId: v.string(),
  limit: v.optional(v.string()),
});

export type AdSquadUiRenderDataResponse = {
  readonly id: string;
  readonly ad_squad_id: string;
  readonly conversion_location: string;
};
export const AdSquadUiRenderDataResponseSchema: v.GenericSchema<unknown, AdSquadUiRenderDataResponse> = v.looseObject({
  id: v.string(),
  ad_squad_id: v.string(),
  conversion_location: v.string(),
});

export type AdvancedDemographicsParams = {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
};
export const AdvancedDemographicsParamsSchema: v.GenericSchema<unknown, AdvancedDemographicsParams> = v.looseObject({
  "Get a specific Ad Squad by ID": v.optional(v.string()),
  "Get all Ad Squads under a Campaign": v.optional(v.string()),
  "Get a specific Targeting Spec by ID": v.optional(v.string()),
  "Get all Targeting Specs under an Ad Squad": v.optional(v.string()),
});

export type AdvancedDemographicsResponse = {
  readonly name: string;
  readonly id: string;
};
export const AdvancedDemographicsResponseSchema: v.GenericSchema<unknown, AdvancedDemographicsResponse> = v.looseObject({
  name: v.string(),
  id: v.string(),
});

export type AgeGroupParams = {
  readonly min_age?: string;
  readonly max_age?: MaxAgeEnum;
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
};
export const AgeGroupParamsSchema: v.GenericSchema<unknown, AgeGroupParams> = v.looseObject({
  min_age: v.optional(v.string()),
  max_age: v.optional(v.lazy(() => MaxAgeEnumSchema)),
  "Get a specific Ad Squad by ID": v.optional(v.string()),
  "Get all Ad Squads under a Campaign": v.optional(v.string()),
  "Get a specific Targeting Spec by ID": v.optional(v.string()),
  "Get all Targeting Specs under an Ad Squad": v.optional(v.string()),
});

export type AgeGroupResponse = {
  readonly name: string;
  readonly id: string;
};
export const AgeGroupResponseSchema: v.GenericSchema<unknown, AgeGroupResponse> = v.looseObject({
  name: v.string(),
  id: v.string(),
});

export type AndroidAppLinkBody = {
  readonly url: string;
  readonly package: string;
  readonly app_name: string;
};
export const AndroidAppLinkBodySchema: v.GenericSchema<unknown, AndroidAppLinkBody> = v.looseObject({
  url: v.string(),
  package: v.string(),
  app_name: v.string(),
});

export type AsyncStatsReportParams = {
  readonly adAccountId: string;
  readonly async_format?: string;
  readonly start_time?: string;
  readonly end_time?: string;
};
export const AsyncStatsReportParamsSchema: v.GenericSchema<unknown, AsyncStatsReportParams> = v.looseObject({
  adAccountId: v.string(),
  async_format: v.optional(v.string()),
  start_time: v.optional(v.string()),
  end_time: v.optional(v.string()),
});

export type AsyncStatsReportResponse = {
  readonly report_run_id: string;
  readonly async_status: string;
};
export const AsyncStatsReportResponseSchema: v.GenericSchema<unknown, AsyncStatsReportResponse> = v.looseObject({
  report_run_id: v.string(),
  async_status: v.string(),
});

export type AudienceSizeParams = {
  readonly id: string;
  readonly geos: ReadonlyArray<GeosBody>;
  readonly demographics: ReadonlyArray<DemographicsBody>;
};
export const AudienceSizeParamsSchema: v.GenericSchema<unknown, AudienceSizeParams> = v.looseObject({
  id: v.string(),
  geos: v.array(v.lazy(() => GeosBodySchema)),
  demographics: v.array(v.lazy(() => DemographicsBodySchema)),
});

export type AudienceSizeResponse = {

};
export const AudienceSizeResponseSchema: v.GenericSchema<unknown, AudienceSizeResponse> = v.looseObject({

});

export type AudienceSizeV2Params = {
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
};
export const AudienceSizeV2ParamsSchema: v.GenericSchema<unknown, AudienceSizeV2Params> = v.looseObject({
  adAccountId: v.string(),
  name: v.string(),
  status: v.string(),
  type: v.string(),
  targeting: v.lazy(() => TargetingBodySchema),
  placement: v.string(),
  bid_micro: v.number(),
  auto_bid: v.boolean(),
  daily_budget_micro: v.number(),
  delivery_constraint: v.string(),
  optimization_goal: v.string(),
  included_content_types: v.array(v.unknown()),
});

export type AudienceSizeV2Response = {

};
export const AudienceSizeV2ResponseSchema: v.GenericSchema<unknown, AudienceSizeV2Response> = v.looseObject({

});

export type AVAILABILITYBody = {
  readonly EQ: string;
};
export const AVAILABILITYBodySchema: v.GenericSchema<unknown, AVAILABILITYBody> = v.looseObject({
  EQ: v.string(),
});

export type BaseSpecBody = {
  readonly interests: ReadonlyArray<InterestsBody>;
  readonly geos: ReadonlyArray<GeosBody>;
};
export const BaseSpecBodySchema: v.GenericSchema<unknown, BaseSpecBody> = v.looseObject({
  interests: v.array(v.lazy(() => InterestsBodySchema)),
  geos: v.array(v.lazy(() => GeosBodySchema)),
});

export type BidEstimateParams = {
  readonly id: string;
  readonly optimization_goal: string;
  readonly targeting: TargetingBody;
};
export const BidEstimateParamsSchema: v.GenericSchema<unknown, BidEstimateParams> = v.looseObject({
  id: v.string(),
  optimization_goal: v.string(),
  targeting: v.lazy(() => TargetingBodySchema),
});

export type BidEstimateResponse = {

};
export const BidEstimateResponseSchema: v.GenericSchema<unknown, BidEstimateResponse> = v.looseObject({

});

export type BillingcenterParams = {
  readonly billingCenterId: string;
};
export const BillingcenterParamsSchema: v.GenericSchema<unknown, BillingcenterParams> = v.looseObject({
  billingCenterId: v.string(),
});

export type BillingcenterResponse = {
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
};
export const BillingcenterResponseSchema: v.GenericSchema<unknown, BillingcenterResponse> = v.looseObject({
  id: v.string(),
  updated_at: v.string(),
  created_at: v.string(),
  organization_id: v.string(),
  name: v.string(),
  email_address: v.string(),
  address_line_1: v.string(),
  locality: v.string(),
  administrative_district_level_1: v.string(),
  country: v.string(),
  postal_code: v.string(),
  alternative_email_addresses: v.array(v.unknown()),
});

export type BillingcentersBody = {
  readonly organization_id: string;
  readonly name: string;
  readonly email_address: string;
  readonly address_line_1: string;
  readonly locality: string;
  readonly administrative_district_level_1: string;
  readonly country: string;
  readonly postal_code: string;
  readonly alternative_email_addresses: ReadonlyArray<unknown>;
};
export const BillingcentersBodySchema: v.GenericSchema<unknown, BillingcentersBody> = v.looseObject({
  organization_id: v.string(),
  name: v.string(),
  email_address: v.string(),
  address_line_1: v.string(),
  locality: v.string(),
  administrative_district_level_1: v.string(),
  country: v.string(),
  postal_code: v.string(),
  alternative_email_addresses: v.array(v.unknown()),
});

export type CampaignParams = {
  readonly adAccountId: string;
  readonly entity_ids: ReadonlyArray<EntityIdsBody>;
};
export const CampaignParamsSchema: v.GenericSchema<unknown, CampaignParams> = v.looseObject({
  adAccountId: v.string(),
  entity_ids: v.array(v.lazy(() => EntityIdsBodySchema)),
});

export type CampaignResponse = {
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
};
export const CampaignResponseSchema: v.GenericSchema<unknown, CampaignResponse> = v.looseObject({
  id: v.string(),
  updated_at: v.string(),
  created_at: v.string(),
  name: v.string(),
  ad_account_id: v.string(),
  status: v.string(),
  objective: v.string(),
  start_time: v.string(),
  buy_model: v.string(),
  delivery_status: v.array(v.unknown()),
  creation_state: v.string(),
  objective_v2_properties: v.lazy(() => ObjectiveV2PropertiesBodySchema),
  pacing_properties_version: v.number(),
});

export type CampaignsBody = {
  readonly name: string;
  readonly ad_account_id: string;
  readonly status: string;
  readonly start_time: string;
  readonly buy_model: string;
  readonly creation_state: string;
  readonly objective_v2_properties: ObjectiveV2PropertiesBody;
};
export const CampaignsBodySchema: v.GenericSchema<unknown, CampaignsBody> = v.looseObject({
  name: v.string(),
  ad_account_id: v.string(),
  status: v.string(),
  start_time: v.string(),
  buy_model: v.string(),
  creation_state: v.string(),
  objective_v2_properties: v.lazy(() => ObjectiveV2PropertiesBodySchema),
});

export type CarrierParams = {
  readonly oSTYPE: string;
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
};
export const CarrierParamsSchema: v.GenericSchema<unknown, CarrierParams> = v.looseObject({
  oSTYPE: v.string(),
  "Get a specific Ad Squad by ID": v.optional(v.string()),
  "Get all Ad Squads under a Campaign": v.optional(v.string()),
  "Get a specific Targeting Spec by ID": v.optional(v.string()),
  "Get all Targeting Specs under an Ad Squad": v.optional(v.string()),
});

export type CarrierResponse = {
  readonly id: string;
  readonly name: string;
  readonly valid_country: string;
};
export const CarrierResponseSchema: v.GenericSchema<unknown, CarrierResponse> = v.looseObject({
  id: v.string(),
  name: v.string(),
  valid_country: v.string(),
});

export type CatalogParams = {
  readonly catalogId: string;
};
export const CatalogParamsSchema: v.GenericSchema<unknown, CatalogParams> = v.looseObject({
  catalogId: v.string(),
});

export type CatalogResponse = {
  readonly created_at: string;
  readonly updated_at: string;
  readonly id: string;
  readonly name: string;
  readonly organization_id: string;
  readonly event_sources: ReadonlyArray<EventSourcesBody>;
  readonly default_product_set_id: string;
  readonly vertical: string;
};
export const CatalogResponseSchema: v.GenericSchema<unknown, CatalogResponse> = v.looseObject({
  created_at: v.string(),
  updated_at: v.string(),
  id: v.string(),
  name: v.string(),
  organization_id: v.string(),
  event_sources: v.array(v.lazy(() => EventSourcesBodySchema)),
  default_product_set_id: v.string(),
  vertical: v.string(),
});

export type CatalogsBody = {
  readonly organization_id: string;
  readonly name: string;
  readonly vertical: string;
  readonly event_sources: ReadonlyArray<EventSourcesBody>;
};
export const CatalogsBodySchema: v.GenericSchema<unknown, CatalogsBody> = v.looseObject({
  organization_id: v.string(),
  name: v.string(),
  vertical: v.string(),
  event_sources: v.array(v.lazy(() => EventSourcesBodySchema)),
});

export type CategoriesLoiParams = {
  readonly proximity: string;
  readonly proximity_unit: string;
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
};
export const CategoriesLoiParamsSchema: v.GenericSchema<unknown, CategoriesLoiParams> = v.looseObject({
  proximity: v.string(),
  proximity_unit: v.string(),
  "Get a specific Ad Squad by ID": v.optional(v.string()),
  "Get all Ad Squads under a Campaign": v.optional(v.string()),
  "Get a specific Targeting Spec by ID": v.optional(v.string()),
  "Get all Targeting Specs under an Ad Squad": v.optional(v.string()),
});

export type CategoriesLoiResponse = {
  readonly proximity: string;
  readonly proximity_unit: string;
};
export const CategoriesLoiResponseSchema: v.GenericSchema<unknown, CategoriesLoiResponse> = v.looseObject({
  proximity: v.string(),
  proximity_unit: v.string(),
});

export type ChangelogParams = {
  readonly adId: string;
  readonly limit?: string;
};
export const ChangelogParamsSchema: v.GenericSchema<unknown, ChangelogParams> = v.looseObject({
  adId: v.string(),
  limit: v.optional(v.string()),
});

export type ChangelogResponse = {
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
};
export const ChangelogResponseSchema: v.GenericSchema<unknown, ChangelogResponse> = v.looseObject({
  id: v.string(),
  updated_at: v.string(),
  created_at: v.string(),
  name: v.string(),
  action: v.string(),
  user_id: v.string(),
  email: v.string(),
  event_at: v.string(),
  app_id: v.string(),
  app_name: v.string(),
  entity_id: v.string(),
  entity_type: v.string(),
  update_value_records: v.lazy(() => UpdateValueRecordsBodySchema),
});

export type CollectionPropertiesDefaultFallbackInteractionTypeEnum = "WEB_VIEW" | "APP_INSTALL" | "DEEP_LINK" | string;
export const CollectionPropertiesDefaultFallbackInteractionTypeEnumSchema: v.GenericSchema<unknown, CollectionPropertiesDefaultFallbackInteractionTypeEnum> = v.union([v.picklist(["WEB_VIEW", "APP_INSTALL", "DEEP_LINK"]), v.string()]);

export type ContinentBody = {
  readonly id: string;
  readonly name: string;
};
export const ContinentBodySchema: v.GenericSchema<unknown, ContinentBody> = v.looseObject({
  id: v.string(),
  name: v.string(),
});

export type CountryBody = {
  readonly id: string;
  readonly name: string;
  readonly code: string;
  readonly code2: string;
};
export const CountryBodySchema: v.GenericSchema<unknown, CountryBody> = v.looseObject({
  id: v.string(),
  name: v.string(),
  code: v.string(),
  code2: v.string(),
});

export type CountryParams = {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
};
export const CountryParamsSchema: v.GenericSchema<unknown, CountryParams> = v.looseObject({
  "Get a specific Ad Squad by ID": v.optional(v.string()),
  "Get all Ad Squads under a Campaign": v.optional(v.string()),
  "Get a specific Targeting Spec by ID": v.optional(v.string()),
  "Get all Targeting Specs under an Ad Squad": v.optional(v.string()),
});

export type CountryResponse = {

};
export const CountryResponseSchema: v.GenericSchema<unknown, CountryResponse> = v.looseObject({

});

export type CreativeElementParams = {
  readonly adAccountId: string;
  readonly name: string;
  readonly type: TypeEnum;
  readonly title?: string;
  readonly description?: string;
  readonly interaction_type: InteractionTypeEnum;
  readonly render_type: RenderTypeEnum;
};
export const CreativeElementParamsSchema: v.GenericSchema<unknown, CreativeElementParams> = v.looseObject({
  adAccountId: v.string(),
  name: v.string(),
  type: v.lazy(() => TypeEnumSchema),
  title: v.optional(v.string()),
  description: v.optional(v.string()),
  interaction_type: v.lazy(() => InteractionTypeEnumSchema),
  render_type: v.lazy(() => RenderTypeEnumSchema),
});

export type CreativeElementResponse = {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly name: string;
  readonly ad_account_id: string;
  readonly type: string;
  readonly interaction_type: string;
  readonly render_type: string;
};
export const CreativeElementResponseSchema: v.GenericSchema<unknown, CreativeElementResponse> = v.looseObject({
  id: v.string(),
  updated_at: v.string(),
  created_at: v.string(),
  name: v.string(),
  ad_account_id: v.string(),
  type: v.string(),
  interaction_type: v.string(),
  render_type: v.string(),
});

export type CreativeParams = {
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
};
export const CreativeParamsSchema: v.GenericSchema<unknown, CreativeParams> = v.looseObject({
  adAccountId: v.string(),
  name: v.string(),
  ad_account_id: v.string(),
  type: v.lazy(() => TypeEnumSchema),
  shareable: v.optional(v.string()),
  render_type: v.lazy(() => RenderTypeEnumSchema),
  "preview_properties.preview_media_id": v.optional(v.string()),
  "preview_properties.logo_media_id": v.optional(v.string()),
  "preview_properties.preview_headline": v.string(),
  "dynamic_render_properties.dynamic_template_id": v.optional(v.string()),
  "dynamic_render_properties.product_set_id": v.optional(v.string()),
});

export type CreativePreviewParams = {
  readonly creativeId: string;
};
export const CreativePreviewParamsSchema: v.GenericSchema<unknown, CreativePreviewParams> = v.looseObject({
  creativeId: v.string(),
});

export type CreativePreviewResponse = {

};
export const CreativePreviewResponseSchema: v.GenericSchema<unknown, CreativePreviewResponse> = v.looseObject({

});

export type CreativeResponse = {
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
};
export const CreativeResponseSchema: v.GenericSchema<unknown, CreativeResponse> = v.looseObject({
  id: v.string(),
  updated_at: v.string(),
  created_at: v.string(),
  name: v.string(),
  ad_account_id: v.string(),
  type: v.string(),
  packaging_status: v.string(),
  review_status: v.string(),
  shareable: v.boolean(),
  render_type: v.string(),
  top_snap_crop_position: v.string(),
  preview_properties: v.lazy(() => PreviewPropertiesBodySchema),
  ad_product: v.string(),
});

export type CreativesBody = {
  readonly ad_account_id: string;
  readonly top_snap_media_id: string;
  readonly name: string;
  readonly profile_properties: ProfilePropertiesBody;
  readonly type: string;
  readonly headline: string;
  readonly shareable: boolean;
};
export const CreativesBodySchema: v.GenericSchema<unknown, CreativesBody> = v.looseObject({
  ad_account_id: v.string(),
  top_snap_media_id: v.string(),
  name: v.string(),
  profile_properties: v.lazy(() => ProfilePropertiesBodySchema),
  type: v.string(),
  headline: v.string(),
  shareable: v.boolean(),
});

export type CustomerBody = {
  readonly name: string;
  readonly netsuite_id: string;
};
export const CustomerBodySchema: v.GenericSchema<unknown, CustomerBody> = v.looseObject({
  name: v.string(),
  netsuite_id: v.string(),
});

export type DailyBody = {
  readonly conversions_lower: number;
  readonly conversions_upper: number;
  readonly reaches_lower: number;
  readonly reaches_upper: number;
  readonly impressions_lower: number;
  readonly impressions_upper: number;
  readonly is_budget_hit: boolean;
  readonly budget_left: number;
  readonly budget_spent_ratio: number;
};
export const DailyBodySchema: v.GenericSchema<unknown, DailyBody> = v.looseObject({
  conversions_lower: v.number(),
  conversions_upper: v.number(),
  reaches_lower: v.number(),
  reaches_upper: v.number(),
  impressions_lower: v.number(),
  impressions_upper: v.number(),
  is_budget_hit: v.boolean(),
  budget_left: v.number(),
  budget_spent_ratio: v.number(),
});

export type DemographicsBody = {
  readonly age_groups: ReadonlyArray<unknown>;
};
export const DemographicsBodySchema: v.GenericSchema<unknown, DemographicsBody> = v.looseObject({
  age_groups: v.array(v.unknown()),
});

export type DimensionEnum = "GEO" | "DEMO" | "INTEREST" | "DEVICE" | string;
export const DimensionEnumSchema: v.GenericSchema<unknown, DimensionEnum> = v.union([v.picklist(["GEO", "DEMO", "INTEREST", "DEVICE"]), v.string()]);

export type DlxcParams = {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
};
export const DlxcParamsSchema: v.GenericSchema<unknown, DlxcParams> = v.looseObject({
  "Get a specific Ad Squad by ID": v.optional(v.string()),
  "Get all Ad Squads under a Campaign": v.optional(v.string()),
  "Get a specific Targeting Spec by ID": v.optional(v.string()),
  "Get all Targeting Specs under an Ad Squad": v.optional(v.string()),
});

export type DlxcResponse = {
  readonly name: string;
  readonly id: string;
};
export const DlxcResponseSchema: v.GenericSchema<unknown, DlxcResponse> = v.looseObject({
  name: v.string(),
  id: v.string(),
});

export type DlxpParams = {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
};
export const DlxpParamsSchema: v.GenericSchema<unknown, DlxpParams> = v.looseObject({
  "Get a specific Ad Squad by ID": v.optional(v.string()),
  "Get all Ad Squads under a Campaign": v.optional(v.string()),
  "Get a specific Targeting Spec by ID": v.optional(v.string()),
  "Get all Targeting Specs under an Ad Squad": v.optional(v.string()),
});

export type DlxpResponse = {
  readonly id: string;
  readonly name: string;
};
export const DlxpResponseSchema: v.GenericSchema<unknown, DlxpResponse> = v.looseObject({
  id: v.string(),
  name: v.string(),
});

export type DlxsParams = {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
};
export const DlxsParamsSchema: v.GenericSchema<unknown, DlxsParams> = v.looseObject({
  "Get a specific Ad Squad by ID": v.optional(v.string()),
  "Get all Ad Squads under a Campaign": v.optional(v.string()),
  "Get a specific Targeting Spec by ID": v.optional(v.string()),
  "Get all Targeting Specs under an Ad Squad": v.optional(v.string()),
});

export type DlxsResponse = {
  readonly name: string;
  readonly id: string;
};
export const DlxsResponseSchema: v.GenericSchema<unknown, DlxsResponse> = v.looseObject({
  name: v.string(),
  id: v.string(),
});

export type DynamicTemplateParams = {
  readonly adAccountId: string;
  readonly dynamic_templates: ReadonlyArray<DynamicTemplatesBody>;
};
export const DynamicTemplateParamsSchema: v.GenericSchema<unknown, DynamicTemplateParams> = v.looseObject({
  adAccountId: v.string(),
  dynamic_templates: v.array(v.lazy(() => DynamicTemplatesBodySchema)),
});

export type DynamicTemplateResponse = {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly name: string;
  readonly ad_account_id: string;
  readonly ios_url: string;
  readonly android_url: string;
  readonly layout: string;
  readonly text_fields: ReadonlyArray<unknown>;
};
export const DynamicTemplateResponseSchema: v.GenericSchema<unknown, DynamicTemplateResponse> = v.looseObject({
  id: v.string(),
  updated_at: v.string(),
  created_at: v.string(),
  name: v.string(),
  ad_account_id: v.string(),
  ios_url: v.string(),
  android_url: v.string(),
  layout: v.string(),
  text_fields: v.array(v.unknown()),
});

export type DynamicTemplatesBody = {
  readonly ad_account_id: string;
  readonly name: string;
  readonly ios_url: string;
  readonly android_url: string;
  readonly layout: string;
  readonly text_fields: ReadonlyArray<unknown>;
};
export const DynamicTemplatesBodySchema: v.GenericSchema<unknown, DynamicTemplatesBody> = v.looseObject({
  ad_account_id: v.string(),
  name: v.string(),
  ios_url: v.string(),
  android_url: v.string(),
  layout: v.string(),
  text_fields: v.array(v.unknown()),
});

export type EcidStatuParams = {
  readonly snapAppId: string;
};
export const EcidStatuParamsSchema: v.GenericSchema<unknown, EcidStatuParams> = v.looseObject({
  snapAppId: v.string(),
});

export type EcidStatuResponse = {

};
export const EcidStatuResponseSchema: v.GenericSchema<unknown, EcidStatuResponse> = v.looseObject({

});

export type EntityIdsBody = {
  readonly id: string;
};
export const EntityIdsBodySchema: v.GenericSchema<unknown, EntityIdsBody> = v.looseObject({
  id: v.string(),
});

export type EventDetailParams = {
  readonly adAccountId: string;
  readonly ad_account_id?: string;
};
export const EventDetailParamsSchema: v.GenericSchema<unknown, EventDetailParams> = v.looseObject({
  adAccountId: v.string(),
  ad_account_id: v.optional(v.string()),
});

export type EventDetailResponse = {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly event_name: string;
  readonly event_start_time: string;
  readonly event_time_zone: string;
  readonly ad_account_id: string;
};
export const EventDetailResponseSchema: v.GenericSchema<unknown, EventDetailResponse> = v.looseObject({
  id: v.string(),
  updated_at: v.string(),
  created_at: v.string(),
  event_name: v.string(),
  event_start_time: v.string(),
  event_time_zone: v.string(),
  ad_account_id: v.string(),
});

export type EventSourcesBody = {
  readonly id: string;
  readonly type: string;
};
export const EventSourcesBodySchema: v.GenericSchema<unknown, EventSourcesBody> = v.looseObject({
  id: v.string(),
  type: v.string(),
});

export type FacetParams = {
  readonly catalogId: string;
  readonly facets: ReadonlyArray<FacetsBody>;
  readonly filter: FilterBody;
};
export const FacetParamsSchema: v.GenericSchema<unknown, FacetParams> = v.looseObject({
  catalogId: v.string(),
  facets: v.array(v.lazy(() => FacetsBodySchema)),
  filter: v.lazy(() => FilterBodySchema),
});

export type FacetResponse = {
  readonly property: string;
};
export const FacetResponseSchema: v.GenericSchema<unknown, FacetResponse> = v.looseObject({
  property: v.string(),
});

export type FacetsBody = {
  readonly property: string;
};
export const FacetsBodySchema: v.GenericSchema<unknown, FacetsBody> = v.looseObject({
  property: v.string(),
});

export type FeedUploadParams = {
  readonly productFeedId: string;
};
export const FeedUploadParamsSchema: v.GenericSchema<unknown, FeedUploadParams> = v.looseObject({
  productFeedId: v.string(),
});

export type FeedUploadResponse = {
  readonly created_at: string;
  readonly updated_at: string;
  readonly id: string;
  readonly feed_id: string;
  readonly summary: SummaryBody;
  readonly url: string;
  readonly update_type: string;
  readonly status: string;
};
export const FeedUploadResponseSchema: v.GenericSchema<unknown, FeedUploadResponse> = v.looseObject({
  created_at: v.string(),
  updated_at: v.string(),
  id: v.string(),
  feed_id: v.string(),
  summary: v.lazy(() => SummaryBodySchema),
  url: v.string(),
  update_type: v.string(),
  status: v.string(),
});

export type FilterBody = {
  readonly AVAILABILITY: AVAILABILITYBody;
};
export const FilterBodySchema: v.GenericSchema<unknown, FilterBody> = v.looseObject({
  AVAILABILITY: v.lazy(() => AVAILABILITYBodySchema),
});

export type FormFieldsBody = {
  readonly type: string;
};
export const FormFieldsBodySchema: v.GenericSchema<unknown, FormFieldsBody> = v.looseObject({
  type: v.string(),
});

export type FundingsourceParams = {
  readonly fundingSourceId: string;
};
export const FundingsourceParamsSchema: v.GenericSchema<unknown, FundingsourceParams> = v.looseObject({
  fundingSourceId: v.string(),
});

export type FundingsourceResponse = {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly name: string;
  readonly type: string;
  readonly organization_id: string;
  readonly currency: string;
};
export const FundingsourceResponseSchema: v.GenericSchema<unknown, FundingsourceResponse> = v.looseObject({
  id: v.string(),
  updated_at: v.string(),
  created_at: v.string(),
  name: v.string(),
  type: v.string(),
  organization_id: v.string(),
  currency: v.string(),
});

export type GenderParams = {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
};
export const GenderParamsSchema: v.GenericSchema<unknown, GenderParams> = v.looseObject({
  "Get a specific Ad Squad by ID": v.optional(v.string()),
  "Get all Ad Squads under a Campaign": v.optional(v.string()),
  "Get a specific Targeting Spec by ID": v.optional(v.string()),
  "Get all Targeting Specs under an Ad Squad": v.optional(v.string()),
});

export type GenderResponse = {
  readonly name: string;
  readonly id: string;
};
export const GenderResponseSchema: v.GenericSchema<unknown, GenderResponse> = v.looseObject({
  name: v.string(),
  id: v.string(),
});

export type GeographicCoordinatesBody = {
  readonly longitude: number;
  readonly latitude: number;
};
export const GeographicCoordinatesBodySchema: v.GenericSchema<unknown, GeographicCoordinatesBody> = v.looseObject({
  longitude: v.number(),
  latitude: v.number(),
});

export type GeosBody = {
  readonly country_code: string;
};
export const GeosBodySchema: v.GenericSchema<unknown, GeosBody> = v.looseObject({
  country_code: v.string(),
});

export type GranularityEnum = "TOTAL" | "DAY" | "HOUR" | "LIFETIME" | string;
export const GranularityEnumSchema: v.GenericSchema<unknown, GranularityEnum> = v.union([v.picklist(["TOTAL", "DAY", "HOUR", "LIFETIME"]), v.string()]);

export type GuestRatingsBody = {
  readonly rating_system: string;
  readonly score: string;
  readonly max_score: string;
  readonly number_of_reviewers: string;
};
export const GuestRatingsBodySchema: v.GenericSchema<unknown, GuestRatingsBody> = v.looseObject({
  rating_system: v.string(),
  score: v.string(),
  max_score: v.string(),
  number_of_reviewers: v.string(),
});

export type HeadlineEnum = "APPLY_NOW" | "BOOK_NOW" | "BUY_TICKETS" | "DONATE" | "DOWNLOAD" | "GET_NOW" | "INSTALL_NOW" | "LISTEN" | "MORE" | "OPEN_APP" | "ORDER_NOW" | "PLAY" | "READ" | "RESPOND" | "SHOP_NOW" | "SHOW" | "SHOWTIMES" | "SIGN_UP" | "TRY" | "USE_APP" | "VIEW" | "WATCH" | string;
export const HeadlineEnumSchema: v.GenericSchema<unknown, HeadlineEnum> = v.union([v.picklist(["APPLY_NOW", "BOOK_NOW", "BUY_TICKETS", "DONATE", "DOWNLOAD", "GET_NOW", "INSTALL_NOW", "LISTEN", "MORE", "OPEN_APP", "ORDER_NOW", "PLAY", "READ", "RESPOND", "SHOP_NOW", "SHOW", "SHOWTIMES", "SIGN_UP", "TRY", "USE_APP", "VIEW", "WATCH"]), v.string()]);

export type InteractionTypeEnum = "WEB_VIEW" | "APP_INSTALL" | "DEEP_LINK" | string;
export const InteractionTypeEnumSchema: v.GenericSchema<unknown, InteractionTypeEnum> = v.union([v.picklist(["WEB_VIEW", "APP_INSTALL", "DEEP_LINK"]), v.string()]);

export type InteractionZoneParams = {
  readonly adAccountId: string;
  readonly name: string;
  readonly render_type: RenderTypeEnum;
  readonly creative_elements: string;
  readonly headline: HeadlineEnum;
};
export const InteractionZoneParamsSchema: v.GenericSchema<unknown, InteractionZoneParams> = v.looseObject({
  adAccountId: v.string(),
  name: v.string(),
  render_type: v.lazy(() => RenderTypeEnumSchema),
  creative_elements: v.string(),
  headline: v.lazy(() => HeadlineEnumSchema),
});

export type InteractionZoneResponse = {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly name: string;
  readonly ad_account_id: string;
  readonly headline: string;
  readonly creative_element_ids: ReadonlyArray<unknown>;
  readonly render_type: string;
};
export const InteractionZoneResponseSchema: v.GenericSchema<unknown, InteractionZoneResponse> = v.looseObject({
  id: v.string(),
  updated_at: v.string(),
  created_at: v.string(),
  name: v.string(),
  ad_account_id: v.string(),
  headline: v.string(),
  creative_element_ids: v.array(v.unknown()),
  render_type: v.string(),
});

export type InterestsBody = {
  readonly category_id: ReadonlyArray<unknown>;
};
export const InterestsBodySchema: v.GenericSchema<unknown, InterestsBody> = v.looseObject({
  category_id: v.array(v.unknown()),
});

export type InvoiceParams = {
  readonly adAccountId: string;
};
export const InvoiceParamsSchema: v.GenericSchema<unknown, InvoiceParams> = v.looseObject({
  adAccountId: v.string(),
});

export type InvoiceResponse = {
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
};
export const InvoiceResponseSchema: v.GenericSchema<unknown, InvoiceResponse> = v.looseObject({
  org_id: v.string(),
  invoice_id: v.string(),
  netsuite_file_id: v.string(),
  ad_account_id: v.string(),
  customer: v.lazy(() => CustomerBodySchema),
  document_number: v.string(),
  line_last_modified: v.string(),
  last_modified: v.string(),
  amount_cent: v.number(),
  currency: v.string(),
  billing_period: v.string(),
  due_date: v.string(),
  created_at: v.string(),
  invoice_status: v.string(),
});

export type IosAppLinkBody = {
  readonly url: string;
  readonly app_store_id: string;
  readonly app_name: string;
};
export const IosAppLinkBodySchema: v.GenericSchema<unknown, IosAppLinkBody> = v.looseObject({
  url: v.string(),
  app_store_id: v.string(),
  app_name: v.string(),
});

export type LanguagesParams = {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
};
export const LanguagesParamsSchema: v.GenericSchema<unknown, LanguagesParams> = v.looseObject({
  "Get a specific Ad Squad by ID": v.optional(v.string()),
  "Get all Ad Squads under a Campaign": v.optional(v.string()),
  "Get a specific Targeting Spec by ID": v.optional(v.string()),
  "Get all Targeting Specs under an Ad Squad": v.optional(v.string()),
});

export type LanguagesResponse = {
  readonly id: string;
  readonly name: string;
};
export const LanguagesResponseSchema: v.GenericSchema<unknown, LanguagesResponse> = v.looseObject({
  id: v.string(),
  name: v.string(),
});

export type LeadGenerationFormParams = {
  readonly adAccountId: string;
};
export const LeadGenerationFormParamsSchema: v.GenericSchema<unknown, LeadGenerationFormParams> = v.looseObject({
  adAccountId: v.string(),
});

export type LeadGenerationFormResponse = {
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
};
export const LeadGenerationFormResponseSchema: v.GenericSchema<unknown, LeadGenerationFormResponse> = v.looseObject({
  id: v.string(),
  updated_at: v.string(),
  created_at: v.string(),
  name: v.string(),
  ad_account_id: v.string(),
  privacy_policy_url: v.string(),
  description: v.string(),
  title: v.string(),
  form_fields: v.array(v.lazy(() => FormFieldsBodySchema)),
  legal_disclosures: v.lazy(() => LegalDisclosuresBodySchema),
  strategy_type: v.string(),
});

export type LegalDisclosuresBody = {
  readonly title: string;
  readonly description: string;
};
export const LegalDisclosuresBodySchema: v.GenericSchema<unknown, LegalDisclosuresBody> = v.looseObject({
  title: v.string(),
  description: v.string(),
});

export type LensPreviewParams = {
  readonly mediaId: string;
};
export const LensPreviewParamsSchema: v.GenericSchema<unknown, LensPreviewParams> = v.looseObject({
  mediaId: v.string(),
});

export type LensPreviewResponse = {

};
export const LensPreviewResponseSchema: v.GenericSchema<unknown, LensPreviewResponse> = v.looseObject({

});

export type LifetimeStatParams = {
  readonly adsquadId: string;
  readonly "adsquad-id"?: string;
};
export const LifetimeStatParamsSchema: v.GenericSchema<unknown, LifetimeStatParams> = v.looseObject({
  adsquadId: v.string(),
  "adsquad-id": v.optional(v.string()),
});

export type LifetimeStatResponse = {
  readonly id: string;
  readonly type: string;
  readonly granularity: string;
  readonly stats: StatsBody;
  readonly start_time: string;
  readonly end_time: string;
  readonly finalized_data_end_time: string;
};
export const LifetimeStatResponseSchema: v.GenericSchema<unknown, LifetimeStatResponse> = v.looseObject({
  id: v.string(),
  type: v.string(),
  granularity: v.string(),
  stats: v.lazy(() => StatsBodySchema),
  start_time: v.string(),
  end_time: v.string(),
  finalized_data_end_time: v.string(),
});

export type LimitEnum = "50-1000" | string;
export const LimitEnumSchema: v.GenericSchema<unknown, LimitEnum> = v.union([v.picklist(["50-1000"]), v.string()]);

export type MainMediaBody = {
  readonly url: string;
  readonly tags: ReadonlyArray<unknown>;
};
export const MainMediaBodySchema: v.GenericSchema<unknown, MainMediaBody> = v.looseObject({
  url: v.string(),
  tags: v.array(v.unknown()),
});

export type MarketingNameParams = {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
};
export const MarketingNameParamsSchema: v.GenericSchema<unknown, MarketingNameParams> = v.looseObject({
  "Get a specific Ad Squad by ID": v.optional(v.string()),
  "Get all Ad Squads under a Campaign": v.optional(v.string()),
  "Get a specific Targeting Spec by ID": v.optional(v.string()),
  "Get all Targeting Specs under an Ad Squad": v.optional(v.string()),
});

export type MarketingNameResponse = {

};
export const MarketingNameResponseSchema: v.GenericSchema<unknown, MarketingNameResponse> = v.looseObject({

});

export type MaxAgeEnum = "13" | "-" | "55" | string;
export const MaxAgeEnumSchema: v.GenericSchema<unknown, MaxAgeEnum> = v.union([v.picklist(["13", "-", "55"]), v.string()]);

export type MediaBody = {
  readonly name: string;
  readonly type: string;
  readonly ad_account_id: string;
};
export const MediaBodySchema: v.GenericSchema<unknown, MediaBody> = v.looseObject({
  name: v.string(),
  type: v.string(),
  ad_account_id: v.string(),
});

export type MediaCopyBody = {
  readonly source_media_id: string;
  readonly source_ad_account_id: string;
};
export const MediaCopyBodySchema: v.GenericSchema<unknown, MediaCopyBody> = v.looseObject({
  source_media_id: v.string(),
  source_ad_account_id: v.string(),
});

export type MediaParams = {
  readonly adAccountId: string;
  readonly entity_ids: ReadonlyArray<EntityIdsBody>;
};
export const MediaParamsSchema: v.GenericSchema<unknown, MediaParams> = v.looseObject({
  adAccountId: v.string(),
  entity_ids: v.array(v.lazy(() => EntityIdsBodySchema)),
});

export type MediaResponse = {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly name: string;
  readonly ad_account_id: string;
  readonly type: string;
  readonly media_status: string;
  readonly is_demo_media: boolean;
  readonly visibility: string;
};
export const MediaResponseSchema: v.GenericSchema<unknown, MediaResponse> = v.looseObject({
  id: v.string(),
  updated_at: v.string(),
  created_at: v.string(),
  name: v.string(),
  ad_account_id: v.string(),
  type: v.string(),
  media_status: v.string(),
  is_demo_media: v.boolean(),
  visibility: v.string(),
});

export type MemberParams = {
  readonly memberId: string;
};
export const MemberParamsSchema: v.GenericSchema<unknown, MemberParams> = v.looseObject({
  memberId: v.string(),
});

export type MemberResponse = {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly email: string;
  readonly organization_id: string;
  readonly display_name: string;
  readonly member_status: string;
};
export const MemberResponseSchema: v.GenericSchema<unknown, MemberResponse> = v.looseObject({
  id: v.string(),
  updated_at: v.string(),
  created_at: v.string(),
  email: v.string(),
  organization_id: v.string(),
  display_name: v.string(),
  member_status: v.string(),
});

export type MembersBody = {
  readonly email: string;
  readonly organization_id: string;
  readonly display_name: string;
};
export const MembersBodySchema: v.GenericSchema<unknown, MembersBody> = v.looseObject({
  email: v.string(),
  organization_id: v.string(),
  display_name: v.string(),
});

export type MeParams = {

};
export const MeParamsSchema: v.GenericSchema<unknown, MeParams> = v.looseObject({

});

export type MeResponse = {

};
export const MeResponseSchema: v.GenericSchema<unknown, MeResponse> = v.looseObject({

});

export type MetroBody = {
  readonly id: string;
  readonly name: string;
  readonly regions: string;
};
export const MetroBodySchema: v.GenericSchema<unknown, MetroBody> = v.looseObject({
  id: v.string(),
  name: v.string(),
  regions: v.string(),
});

export type MetroParams = {
  readonly countryCode: string;
  readonly country_code?: string;
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
};
export const MetroParamsSchema: v.GenericSchema<unknown, MetroParams> = v.looseObject({
  countryCode: v.string(),
  country_code: v.optional(v.string()),
  "Get a specific Ad Squad by ID": v.optional(v.string()),
  "Get all Ad Squads under a Campaign": v.optional(v.string()),
  "Get a specific Targeting Spec by ID": v.optional(v.string()),
  "Get all Targeting Specs under an Ad Squad": v.optional(v.string()),
});

export type MetroResponse = {
  readonly lat: number;
  readonly lon: number;
  readonly continent: ContinentBody;
  readonly country: CountryBody;
  readonly metro: MetroBody;
};
export const MetroResponseSchema: v.GenericSchema<unknown, MetroResponse> = v.looseObject({
  lat: v.number(),
  lon: v.number(),
  continent: v.lazy(() => ContinentBodySchema),
  country: v.lazy(() => CountryBodySchema),
  metro: v.lazy(() => MetroBodySchema),
});

export type MobileAppParams = {
  readonly adaccountId: string;
};
export const MobileAppParamsSchema: v.GenericSchema<unknown, MobileAppParams> = v.looseObject({
  adaccountId: v.string(),
});

export type MobileAppResponse = {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly container_kind: string;
  readonly container_id: string;
  readonly name: string;
  readonly ios_app_id: string;
  readonly android_app_url: string;
  readonly mobile_measurement_partners: ReadonlyArray<unknown>;
};
export const MobileAppResponseSchema: v.GenericSchema<unknown, MobileAppResponse> = v.looseObject({
  id: v.string(),
  updated_at: v.string(),
  created_at: v.string(),
  container_kind: v.string(),
  container_id: v.string(),
  name: v.string(),
  ios_app_id: v.string(),
  android_app_url: v.string(),
  mobile_measurement_partners: v.array(v.unknown()),
});

export type NlnParams = {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
};
export const NlnParamsSchema: v.GenericSchema<unknown, NlnParams> = v.looseObject({
  "Get a specific Ad Squad by ID": v.optional(v.string()),
  "Get all Ad Squads under a Campaign": v.optional(v.string()),
  "Get a specific Targeting Spec by ID": v.optional(v.string()),
  "Get all Targeting Specs under an Ad Squad": v.optional(v.string()),
});

export type NlnResponse = {
  readonly id: string;
  readonly name: string;
  readonly path: string;
  readonly source: string;
};
export const NlnResponseSchema: v.GenericSchema<unknown, NlnResponse> = v.looseObject({
  id: v.string(),
  name: v.string(),
  path: v.string(),
  source: v.string(),
});

export type ObjectiveV2PropertiesBody = {
  readonly objective_v2_type: string;
};
export const ObjectiveV2PropertiesBodySchema: v.GenericSchema<unknown, ObjectiveV2PropertiesBody> = v.looseObject({
  objective_v2_type: v.string(),
});

export type OptionParams = {
  readonly country_code: string;
  readonly is_intl_vac_enabled?: string;
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
};
export const OptionParamsSchema: v.GenericSchema<unknown, OptionParams> = v.looseObject({
  country_code: v.string(),
  is_intl_vac_enabled: v.optional(v.string()),
  "Get a specific Ad Squad by ID": v.optional(v.string()),
  "Get all Ad Squads under a Campaign": v.optional(v.string()),
  "Get a specific Targeting Spec by ID": v.optional(v.string()),
  "Get all Targeting Specs under an Ad Squad": v.optional(v.string()),
});

export type OptionResponse = {

};
export const OptionResponseSchema: v.GenericSchema<unknown, OptionResponse> = v.looseObject({

});

export type OrganizationParams = {

};
export const OrganizationParamsSchema: v.GenericSchema<unknown, OrganizationParams> = v.looseObject({

});

export type OrganizationResponse = {
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
};
export const OrganizationResponseSchema: v.GenericSchema<unknown, OrganizationResponse> = v.looseObject({
  id: v.string(),
  updated_at: v.string(),
  created_at: v.string(),
  name: v.string(),
  address_line_1: v.string(),
  locality: v.string(),
  administrative_district_level_1: v.string(),
  country: v.string(),
  postal_code: v.string(),
  type: v.string(),
});

export type OsTypeParams = {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
};
export const OsTypeParamsSchema: v.GenericSchema<unknown, OsTypeParams> = v.looseObject({
  "Get a specific Ad Squad by ID": v.optional(v.string()),
  "Get all Ad Squads under a Campaign": v.optional(v.string()),
  "Get a specific Targeting Spec by ID": v.optional(v.string()),
  "Get all Targeting Specs under an Ad Squad": v.optional(v.string()),
});

export type OsTypeResponse = {
  readonly id: string;
  readonly name: string;
};
export const OsTypeResponseSchema: v.GenericSchema<unknown, OsTypeResponse> = v.looseObject({
  id: v.string(),
  name: v.string(),
});

export type PaymentItemsBody = {
  readonly payment_item_id: string;
  readonly name: string;
  readonly start_date: string;
  readonly end_date: string;
  readonly subtotal_amount: SubtotalAmountBody;
  readonly quantity: number;
};
export const PaymentItemsBodySchema: v.GenericSchema<unknown, PaymentItemsBody> = v.looseObject({
  payment_item_id: v.string(),
  name: v.string(),
  start_date: v.string(),
  end_date: v.string(),
  subtotal_amount: v.lazy(() => SubtotalAmountBodySchema),
  quantity: v.number(),
});

export type PhoneNumberParams = {
  readonly adAccountId: string;
};
export const PhoneNumberParamsSchema: v.GenericSchema<unknown, PhoneNumberParams> = v.looseObject({
  adAccountId: v.string(),
});

export type PhoneNumberResponse = {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly name: string;
  readonly country_code: string;
  readonly numerical_country_code: string;
  readonly phone_number: string;
  readonly verification_status: string;
};
export const PhoneNumberResponseSchema: v.GenericSchema<unknown, PhoneNumberResponse> = v.looseObject({
  id: v.string(),
  updated_at: v.string(),
  created_at: v.string(),
  name: v.string(),
  country_code: v.string(),
  numerical_country_code: v.string(),
  phone_number: v.string(),
  verification_status: v.string(),
});

export type PixelParams = {
  readonly adAccountId: string;
};
export const PixelParamsSchema: v.GenericSchema<unknown, PixelParams> = v.looseObject({
  adAccountId: v.string(),
});

export type PixelResponse = {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly effective_status: string;
  readonly name: string;
  readonly ad_account_id: string;
  readonly status: string;
  readonly pixel_javascript: string;
};
export const PixelResponseSchema: v.GenericSchema<unknown, PixelResponse> = v.looseObject({
  id: v.string(),
  updated_at: v.string(),
  created_at: v.string(),
  effective_status: v.string(),
  name: v.string(),
  ad_account_id: v.string(),
  status: v.string(),
  pixel_javascript: v.string(),
});

export type PlacementV2Body = {
  readonly config: string;
};
export const PlacementV2BodySchema: v.GenericSchema<unknown, PlacementV2Body> = v.looseObject({
  config: v.string(),
});

export type PostalCodeParams = {
  readonly countryCode: string;
  readonly cursor?: string;
  readonly limit?: string;
  readonly country_code?: string;
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
};
export const PostalCodeParamsSchema: v.GenericSchema<unknown, PostalCodeParams> = v.looseObject({
  countryCode: v.string(),
  cursor: v.optional(v.string()),
  limit: v.optional(v.string()),
  country_code: v.optional(v.string()),
  "Get a specific Ad Squad by ID": v.optional(v.string()),
  "Get all Ad Squads under a Campaign": v.optional(v.string()),
  "Get a specific Targeting Spec by ID": v.optional(v.string()),
  "Get all Targeting Specs under an Ad Squad": v.optional(v.string()),
});

export type PostalCodeResponse = {
  readonly country_code?: string;
  readonly cursor?: string;
  readonly limit?: string;
};
export const PostalCodeResponseSchema: v.GenericSchema<unknown, PostalCodeResponse> = v.looseObject({
  country_code: v.optional(v.string()),
  cursor: v.optional(v.string()),
  limit: v.optional(v.string()),
});

export type PreviewParams = {
  readonly mediaId: string;
};
export const PreviewParamsSchema: v.GenericSchema<unknown, PreviewParams> = v.looseObject({
  mediaId: v.string(),
});

export type PreviewPropertiesBody = {
  readonly preview_media_id: string;
  readonly logo_media_id: string;
  readonly preview_headline: string;
};
export const PreviewPropertiesBodySchema: v.GenericSchema<unknown, PreviewPropertiesBody> = v.looseObject({
  preview_media_id: v.string(),
  logo_media_id: v.string(),
  preview_headline: v.string(),
});

export type PreviewResponse = {

};
export const PreviewResponseSchema: v.GenericSchema<unknown, PreviewResponse> = v.looseObject({

});

export type PriceBody = {
  readonly value: string;
  readonly currency: string;
};
export const PriceBodySchema: v.GenericSchema<unknown, PriceBody> = v.looseObject({
  value: v.string(),
  currency: v.string(),
});

export type ProductFeedParams = {
  readonly catalogId: string;
  readonly product_feeds: ReadonlyArray<ProductFeedsBody>;
};
export const ProductFeedParamsSchema: v.GenericSchema<unknown, ProductFeedParams> = v.looseObject({
  catalogId: v.string(),
  product_feeds: v.array(v.lazy(() => ProductFeedsBodySchema)),
});

export type ProductFeedResponse = {
  readonly created_at: string;
  readonly updated_at: string;
  readonly id: string;
  readonly catalog_id: string;
  readonly name: string;
  readonly default_currency: string;
  readonly schedule: ScheduleBody;
};
export const ProductFeedResponseSchema: v.GenericSchema<unknown, ProductFeedResponse> = v.looseObject({
  created_at: v.string(),
  updated_at: v.string(),
  id: v.string(),
  catalog_id: v.string(),
  name: v.string(),
  default_currency: v.string(),
  schedule: v.lazy(() => ScheduleBodySchema),
});

export type ProductFeedsBody = {
  readonly catalog_id: string;
  readonly name: string;
  readonly default_currency: string;
  readonly status: string;
  readonly schedule: ScheduleBody;
};
export const ProductFeedsBodySchema: v.GenericSchema<unknown, ProductFeedsBody> = v.looseObject({
  catalog_id: v.string(),
  name: v.string(),
  default_currency: v.string(),
  status: v.string(),
  schedule: v.lazy(() => ScheduleBodySchema),
});

export type ProductParams = {
  readonly catalogId: string;
  readonly limit: number;
};
export const ProductParamsSchema: v.GenericSchema<unknown, ProductParams> = v.looseObject({
  catalogId: v.string(),
  limit: v.number(),
});

export type ProductResponse = {
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
};
export const ProductResponseSchema: v.GenericSchema<unknown, ProductResponse> = v.looseObject({
  id: v.string(),
  external_id: v.string(),
  created_at: v.string(),
  updated_at: v.string(),
  catalog_id: v.string(),
  name: v.string(),
  description: v.string(),
  link: v.string(),
  mobile_link: v.string(),
  main_media: v.lazy(() => MainMediaBodySchema),
  additional_media: v.array(v.lazy(() => AdditionalMediaBodySchema)),
  address: v.lazy(() => AddressBodySchema),
  price: v.lazy(() => PriceBodySchema),
  sale_price: v.lazy(() => SalePriceBodySchema),
  neighborhoods: v.array(v.unknown()),
  geographic_coordinates: v.lazy(() => GeographicCoordinatesBodySchema),
  guest_ratings: v.lazy(() => GuestRatingsBodySchema),
  star_rating: v.string(),
  ios_app_link: v.lazy(() => IosAppLinkBodySchema),
  android_app_link: v.lazy(() => AndroidAppLinkBodySchema),
  loyalty_program: v.string(),
  custom_labels: v.unknown(),
  activity: v.string(),
});

export type ProductSetParams = {
  readonly catalogId: string;
  readonly limit: number;
};
export const ProductSetParamsSchema: v.GenericSchema<unknown, ProductSetParams> = v.looseObject({
  catalogId: v.string(),
  limit: v.number(),
});

export type ProductSetResponse = {
  readonly id: string;
  readonly catalog_id: string;
  readonly name: string;
  readonly filter: FilterBody;
  readonly created_at: string;
  readonly updated_at: string;
};
export const ProductSetResponseSchema: v.GenericSchema<unknown, ProductSetResponse> = v.looseObject({
  id: v.string(),
  catalog_id: v.string(),
  name: v.string(),
  filter: v.lazy(() => FilterBodySchema),
  created_at: v.string(),
  updated_at: v.string(),
});

export type ProductSetsBody = {
  readonly id: string;
  readonly name: string;
  readonly filter: FilterBody;
};
export const ProductSetsBodySchema: v.GenericSchema<unknown, ProductSetsBody> = v.looseObject({
  id: v.string(),
  name: v.string(),
  filter: v.lazy(() => FilterBodySchema),
});

export type ProfilePropertiesBody = {
  readonly profile_id: string;
};
export const ProfilePropertiesBodySchema: v.GenericSchema<unknown, ProfilePropertiesBody> = v.looseObject({
  profile_id: v.string(),
});

export type RenderTypeEnum = "STATIC" | "DYNAMIC" | string;
export const RenderTypeEnumSchema: v.GenericSchema<unknown, RenderTypeEnum> = v.union([v.picklist(["STATIC", "DYNAMIC"]), v.string()]);

export type ReservedForecastingParams = {
  readonly adAccountId: string;
  readonly adsquads: ReadonlyArray<AdsquadsBody>;
};
export const ReservedForecastingParamsSchema: v.GenericSchema<unknown, ReservedForecastingParams> = v.looseObject({
  adAccountId: v.string(),
  adsquads: v.array(v.lazy(() => AdsquadsBodySchema)),
});

export type ReservedForecastingResponse = {
  readonly ad_account_id?: string;
};
export const ReservedForecastingResponseSchema: v.GenericSchema<unknown, ReservedForecastingResponse> = v.looseObject({
  ad_account_id: v.optional(v.string()),
});

export type ReviewStatusEnum = "PENDING_REVIEW" | "APPROVED" | "DISAPPROVED" | string;
export const ReviewStatusEnumSchema: v.GenericSchema<unknown, ReviewStatusEnum> = v.union([v.picklist(["PENDING_REVIEW", "APPROVED", "DISAPPROVED"]), v.string()]);

export type RoleParams = {
  readonly adAccountId: string;
  readonly limit?: string;
};
export const RoleParamsSchema: v.GenericSchema<unknown, RoleParams> = v.looseObject({
  adAccountId: v.string(),
  limit: v.optional(v.string()),
});

export type RoleResponse = {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly container_kind: string;
  readonly container_id: string;
  readonly member_id: string;
  readonly ad_account_id: string;
  readonly type: string;
};
export const RoleResponseSchema: v.GenericSchema<unknown, RoleResponse> = v.looseObject({
  id: v.string(),
  updated_at: v.string(),
  created_at: v.string(),
  container_kind: v.string(),
  container_id: v.string(),
  member_id: v.string(),
  ad_account_id: v.string(),
  type: v.string(),
});

export type RolesBody = {
  readonly member_id: string;
  readonly ad_account_id: string;
  readonly type: string;
};
export const RolesBodySchema: v.GenericSchema<unknown, RolesBody> = v.looseObject({
  member_id: v.string(),
  ad_account_id: v.string(),
  type: v.string(),
});

export type RolParams = {
  readonly roleId: string;
  readonly role_id?: string;
};
export const RolParamsSchema: v.GenericSchema<unknown, RolParams> = v.looseObject({
  roleId: v.string(),
  role_id: v.optional(v.string()),
});

export type RolResponse = {

};
export const RolResponseSchema: v.GenericSchema<unknown, RolResponse> = v.looseObject({

});

export type SalePriceBody = {
  readonly value: string;
  readonly currency: string;
};
export const SalePriceBodySchema: v.GenericSchema<unknown, SalePriceBody> = v.looseObject({
  value: v.string(),
  currency: v.string(),
});

export type ScheduleBody = {
  readonly url: string;
  readonly username: string;
  readonly password: string;
  readonly interval_type: string;
  readonly interval_count: string;
  readonly timezone: string;
  readonly minute: string;
};
export const ScheduleBodySchema: v.GenericSchema<unknown, ScheduleBody> = v.looseObject({
  url: v.string(),
  username: v.string(),
  password: v.string(),
  interval_type: v.string(),
  interval_count: v.string(),
  timezone: v.string(),
  minute: v.string(),
});

export type SclParams = {
  readonly country_code?: string;
  readonly is_hec?: string;
  readonly limit?: string;
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
};
export const SclParamsSchema: v.GenericSchema<unknown, SclParams> = v.looseObject({
  country_code: v.optional(v.string()),
  is_hec: v.optional(v.string()),
  limit: v.optional(v.string()),
  "Get a specific Ad Squad by ID": v.optional(v.string()),
  "Get all Ad Squads under a Campaign": v.optional(v.string()),
  "Get a specific Targeting Spec by ID": v.optional(v.string()),
  "Get all Targeting Specs under an Ad Squad": v.optional(v.string()),
});

export type SclResponse = {
  readonly country_code?: string;
  readonly is_hec?: string;
  readonly limit?: string;
};
export const SclResponseSchema: v.GenericSchema<unknown, SclResponse> = v.looseObject({
  country_code: v.optional(v.string()),
  is_hec: v.optional(v.string()),
  limit: v.optional(v.string()),
});

export type SearchParams = {
  readonly catalogId: string;
  readonly limit: number;
};
export const SearchParamsSchema: v.GenericSchema<unknown, SearchParams> = v.looseObject({
  catalogId: v.string(),
  limit: v.number(),
});

export type SearchResponse = {
  readonly catalog_id: string;
};
export const SearchResponseSchema: v.GenericSchema<unknown, SearchResponse> = v.looseObject({
  catalog_id: v.string(),
});

export type SegmentParams = {
  readonly adAccountId: string;
  readonly segments: ReadonlyArray<SegmentsBody>;
};
export const SegmentParamsSchema: v.GenericSchema<unknown, SegmentParams> = v.looseObject({
  adAccountId: v.string(),
  segments: v.array(v.lazy(() => SegmentsBodySchema)),
});

export type SegmentResponse = {
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
};
export const SegmentResponseSchema: v.GenericSchema<unknown, SegmentResponse> = v.looseObject({
  updated_at: v.string(),
  created_at: v.string(),
  name: v.string(),
  id: v.string(),
  ad_account_id: v.string(),
  description: v.string(),
  status: v.string(),
  source_type: v.string(),
  retention_in_days: v.number(),
  approximate_number_users: v.number(),
});

export type SegmentsBody = {
  readonly name: string;
  readonly description: string;
  readonly source_type: string;
  readonly retention_in_days: number;
  readonly ad_account_id: string;
};
export const SegmentsBodySchema: v.GenericSchema<unknown, SegmentsBody> = v.looseObject({
  name: v.string(),
  description: v.string(),
  source_type: v.string(),
  retention_in_days: v.number(),
  ad_account_id: v.string(),
});

export type ShpParams = {
  readonly country_code?: string;
  readonly limit?: string;
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
};
export const ShpParamsSchema: v.GenericSchema<unknown, ShpParams> = v.looseObject({
  country_code: v.optional(v.string()),
  limit: v.optional(v.string()),
  "Get a specific Ad Squad by ID": v.optional(v.string()),
  "Get all Ad Squads under a Campaign": v.optional(v.string()),
  "Get a specific Targeting Spec by ID": v.optional(v.string()),
  "Get all Targeting Specs under an Ad Squad": v.optional(v.string()),
});

export type ShpResponse = {
  readonly country_code?: string;
  readonly limit?: string;
};
export const ShpResponseSchema: v.GenericSchema<unknown, ShpResponse> = v.looseObject({
  country_code: v.optional(v.string()),
  limit: v.optional(v.string()),
});

export type SnapcodeParams = {
  readonly creativeId: string;
};
export const SnapcodeParamsSchema: v.GenericSchema<unknown, SnapcodeParams> = v.looseObject({
  creativeId: v.string(),
});

export type SnapcodeResponse = {

};
export const SnapcodeResponseSchema: v.GenericSchema<unknown, SnapcodeResponse> = v.looseObject({

});

export type StatsBody = {
  readonly spend: number;
};
export const StatsBodySchema: v.GenericSchema<unknown, StatsBody> = v.looseObject({
  spend: v.number(),
});

export type StatsParams = {
  readonly pixelId: string;
  readonly "pixel-id"?: string;
};
export const StatsParamsSchema: v.GenericSchema<unknown, StatsParams> = v.looseObject({
  pixelId: v.string(),
  "pixel-id": v.optional(v.string()),
});

export type StatsResponse = {
  readonly "pixel-id"?: string;
};
export const StatsResponseSchema: v.GenericSchema<unknown, StatsResponse> = v.looseObject({
  "pixel-id": v.optional(v.string()),
});

export type StatusBody = {
  readonly before_value: string;
  readonly after_value: string;
};
export const StatusBodySchema: v.GenericSchema<unknown, StatusBody> = v.looseObject({
  before_value: v.string(),
  after_value: v.string(),
});

export type SubtotalAmountBody = {
  readonly amount: number;
  readonly currency_type: string;
};
export const SubtotalAmountBodySchema: v.GenericSchema<unknown, SubtotalAmountBody> = v.looseObject({
  amount: v.number(),
  currency_type: v.string(),
});

export type SummaryBody = {
  readonly issues_summary: unknown;
};
export const SummaryBodySchema: v.GenericSchema<unknown, SummaryBody> = v.looseObject({
  issues_summary: v.unknown(),
});

export type TargetingBody = {
  readonly regulated_content: boolean;
  readonly geos: ReadonlyArray<GeosBody>;
};
export const TargetingBodySchema: v.GenericSchema<unknown, TargetingBody> = v.looseObject({
  regulated_content: v.boolean(),
  geos: v.array(v.lazy(() => GeosBodySchema)),
});

export type TargetingInsightParams = {
  readonly adAccountId: string;
  readonly base_spec: BaseSpecBody;
  readonly targeting_spec: TargetingSpecBody;
};
export const TargetingInsightParamsSchema: v.GenericSchema<unknown, TargetingInsightParams> = v.looseObject({
  adAccountId: v.string(),
  base_spec: v.lazy(() => BaseSpecBodySchema),
  targeting_spec: v.lazy(() => TargetingSpecBodySchema),
});

export type TargetingInsightResponse = {
  readonly ad_account_id?: string;
};
export const TargetingInsightResponseSchema: v.GenericSchema<unknown, TargetingInsightResponse> = v.looseObject({
  ad_account_id: v.optional(v.string()),
});

export type TargetingSpecBody = {
  readonly interests: ReadonlyArray<InterestsBody>;
  readonly geos: ReadonlyArray<GeosBody>;
};
export const TargetingSpecBodySchema: v.GenericSchema<unknown, TargetingSpecBody> = v.looseObject({
  interests: v.array(v.lazy(() => InterestsBodySchema)),
  geos: v.array(v.lazy(() => GeosBodySchema)),
});

export type TargetingV2Enum = "ENABLED" | string;
export const TargetingV2EnumSchema: v.GenericSchema<unknown, TargetingV2Enum> = v.union([v.picklist(["ENABLED"]), v.string()]);

export type ThumbnailParams = {
  readonly mediaId: string;
};
export const ThumbnailParamsSchema: v.GenericSchema<unknown, ThumbnailParams> = v.looseObject({
  mediaId: v.string(),
});

export type ThumbnailResponse = {

};
export const ThumbnailResponseSchema: v.GenericSchema<unknown, ThumbnailResponse> = v.looseObject({

});

export type TimeseriesBody = {
  readonly start_time: string;
  readonly end_time: string;
  readonly stats: StatsBody;
};
export const TimeseriesBodySchema: v.GenericSchema<unknown, TimeseriesBody> = v.looseObject({
  start_time: v.string(),
  end_time: v.string(),
  stats: v.lazy(() => StatsBodySchema),
});

export type TimeseriesStatParams = {
  readonly adId: string;
  readonly "ad-id"?: string;
};
export const TimeseriesStatParamsSchema: v.GenericSchema<unknown, TimeseriesStatParams> = v.looseObject({
  adId: v.string(),
  "ad-id": v.optional(v.string()),
});

export type TimeseriesStatResponse = {
  readonly id: string;
  readonly type: string;
  readonly granularity: string;
  readonly start_time: string;
  readonly end_time: string;
  readonly finalized_data_end_time: string;
  readonly timeseries: ReadonlyArray<TimeseriesBody>;
};
export const TimeseriesStatResponseSchema: v.GenericSchema<unknown, TimeseriesStatResponse> = v.looseObject({
  id: v.string(),
  type: v.string(),
  granularity: v.string(),
  start_time: v.string(),
  end_time: v.string(),
  finalized_data_end_time: v.string(),
  timeseries: v.array(v.lazy(() => TimeseriesBodySchema)),
});

export type TotalAmountBody = {
  readonly amount: number;
  readonly currency_type: string;
};
export const TotalAmountBodySchema: v.GenericSchema<unknown, TotalAmountBody> = v.looseObject({
  amount: v.number(),
  currency_type: v.string(),
});

export type TotalStatParams = {
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
};
export const TotalStatParamsSchema: v.GenericSchema<unknown, TotalStatParams> = v.looseObject({
  adAccountId: v.string(),
  breakdown: v.optional(v.string()),
  async: v.optional(v.string()),
  async_format: v.optional(v.string()),
  fields: v.optional(v.string()),
  end_time: v.optional(v.string()),
  start_time: v.optional(v.string()),
  granularity: v.lazy(() => GranularityEnumSchema),
  test: v.optional(v.string()),
  dimension: v.optional(v.lazy(() => DimensionEnumSchema)),
  pivot: v.optional(v.string()),
  action_report_time: v.optional(v.string()),
  swipe_up_attribution_window: v.optional(v.string()),
  view_attribution_window: v.optional(v.string()),
  position_stats: v.optional(v.string()),
  omit_empty: v.optional(v.string()),
  conversion_source_types: v.optional(v.string()),
  limit: v.optional(v.string()),
});

export type TotalStatResponse = {
  readonly id: string;
  readonly type: string;
  readonly granularity: string;
  readonly stats: StatsBody;
  readonly finalized_data_end_time: string;
};
export const TotalStatResponseSchema: v.GenericSchema<unknown, TotalStatResponse> = v.looseObject({
  id: v.string(),
  type: v.string(),
  granularity: v.string(),
  stats: v.lazy(() => StatsBodySchema),
  finalized_data_end_time: v.string(),
});

export type TransactionParams = {
  readonly organizationId: string;
  readonly start_time?: string;
  readonly end_time?: string;
};
export const TransactionParamsSchema: v.GenericSchema<unknown, TransactionParams> = v.looseObject({
  organizationId: v.string(),
  start_time: v.optional(v.string()),
  end_time: v.optional(v.string()),
});

export type TransactionResponse = {
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
};
export const TransactionResponseSchema: v.GenericSchema<unknown, TransactionResponse> = v.looseObject({
  id: v.string(),
  account_id: v.string(),
  payment_items: v.array(v.lazy(() => PaymentItemsBodySchema)),
  payment_action_id: v.string(),
  payment_action_type: v.string(),
  credential_type: v.string(),
  credential_id: v.string(),
  payment_method_id: v.string(),
  total_amount: v.lazy(() => TotalAmountBodySchema),
  status: v.string(),
  created_time: v.string(),
  last_update_time: v.string(),
});

export type TypeEnum = "PREVIEW" | string;
export const TypeEnumSchema: v.GenericSchema<unknown, TypeEnum> = v.union([v.picklist(["PREVIEW"]), v.string()]);

export type UpdateValueRecordsBody = {
  readonly status: StatusBody;
};
export const UpdateValueRecordsBodySchema: v.GenericSchema<unknown, UpdateValueRecordsBody> = v.looseObject({
  status: v.lazy(() => StatusBodySchema),
});

export type UserParams = {
  readonly segmentId: string;
  readonly users: ReadonlyArray<UsersBody>;
};
export const UserParamsSchema: v.GenericSchema<unknown, UserParams> = v.looseObject({
  segmentId: v.string(),
  users: v.array(v.lazy(() => UsersBodySchema)),
});

export type UserResponse = {
  readonly number_uploaded_users: number;
};
export const UserResponseSchema: v.GenericSchema<unknown, UserResponse> = v.looseObject({
  number_uploaded_users: v.number(),
});

export type UsersBody = {
  readonly schema: ReadonlyArray<unknown>;
  readonly data: string;
};
export const UsersBodySchema: v.GenericSchema<unknown, UsersBody> = v.looseObject({
  schema: v.array(v.unknown()),
  data: v.string(),
});

export type V1Params = {
  readonly memberId: string;
  readonly member_id?: string;
};
export const V1ParamsSchema: v.GenericSchema<unknown, V1Params> = v.looseObject({
  memberId: v.string(),
  member_id: v.optional(v.string()),
});

export type V1Response = {

};
export const V1ResponseSchema: v.GenericSchema<unknown, V1Response> = v.looseObject({

});

export type VacParams = {
  readonly country_code?: string;
  readonly is_hec?: string;
  readonly limit?: string;
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
};
export const VacParamsSchema: v.GenericSchema<unknown, VacParams> = v.looseObject({
  country_code: v.optional(v.string()),
  is_hec: v.optional(v.string()),
  limit: v.optional(v.string()),
  "Get a specific Ad Squad by ID": v.optional(v.string()),
  "Get all Ad Squads under a Campaign": v.optional(v.string()),
  "Get a specific Targeting Spec by ID": v.optional(v.string()),
  "Get all Targeting Specs under an Ad Squad": v.optional(v.string()),
});

export type VacResponse = {
  readonly country_code?: string;
  readonly is_hec?: string;
  readonly limit?: string;
};
export const VacResponseSchema: v.GenericSchema<unknown, VacResponse> = v.looseObject({
  country_code: v.optional(v.string()),
  is_hec: v.optional(v.string()),
  limit: v.optional(v.string()),
});

export type WebViewPropertiesParams = {
  readonly adAccountId: string;
  readonly creatives: ReadonlyArray<CreativesBody>;
};
export const WebViewPropertiesParamsSchema: v.GenericSchema<unknown, WebViewPropertiesParams> = v.looseObject({
  adAccountId: v.string(),
  creatives: v.array(v.lazy(() => CreativesBodySchema)),
});

export type WebViewPropertiesResponse = {
  readonly url: string;
  readonly block_preload: boolean;
};
export const WebViewPropertiesResponseSchema: v.GenericSchema<unknown, WebViewPropertiesResponse> = v.looseObject({
  url: v.string(),
  block_preload: v.boolean(),
});

export type WeeklyBody = {
  readonly conversions_lower: number;
  readonly conversions_upper: number;
  readonly reaches_lower: number;
  readonly reaches_upper: number;
  readonly impressions_lower: number;
  readonly impressions_upper: number;
  readonly is_budget_hit: boolean;
  readonly budget_left: number;
  readonly budget_spent_ratio: number;
};
export const WeeklyBodySchema: v.GenericSchema<unknown, WeeklyBody> = v.looseObject({
  conversions_lower: v.number(),
  conversions_upper: v.number(),
  reaches_lower: v.number(),
  reaches_upper: v.number(),
  impressions_lower: v.number(),
  impressions_upper: v.number(),
  is_budget_hit: v.boolean(),
  budget_left: v.number(),
  budget_spent_ratio: v.number(),
});
