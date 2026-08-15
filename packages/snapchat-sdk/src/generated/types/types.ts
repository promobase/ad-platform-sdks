// @generated
// fingerprint: sha256:3c25982a25d85ed14bceb0c363d8953729cd052f5a10f44ebdc1ec05a100104f
// DO NOT EDIT: generated file; changes will be overwritten.
// This file is generated. Do not edit by hand.

export interface AccessTokenParams {
  readonly expires_in: number;
  readonly token_type: string;
  readonly refresh_token: string;
  readonly access_token: string;
}

export interface AccessTokenResponse {
  readonly client_id?: string;
  readonly client_secret?: string;
  readonly code?: string;
  readonly grant_type?: string;
  readonly redirect_uri?: string;
}

export interface AdaccountParams {
  readonly adAccountId: string;
}

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

export interface AdditionalMediaBody {
  readonly url: string;
  readonly tags: ReadonlyArray<unknown>;
}

export interface AddressBody {
  readonly line: string;
  readonly line2: string;
  readonly locality: string;
  readonly postal_code: string;
  readonly region: string;
  readonly country_code: string;
}

export interface AdParams {
  readonly adAccountId: string;
  readonly entity_ids: ReadonlyArray<EntityIdsBody>;
}

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

export interface AdSquadOutcomeEstimateV2Params {
  readonly adAccountId: string;
  readonly ad_squad_outcome_estimates_v2: ReadonlyArray<AdSquadOutcomeEstimatesV2Body>;
}

export interface AdSquadOutcomeEstimateV2Response {
  readonly request_id: string;
  readonly message: string;
  readonly error_code: string;
  readonly daily: DailyBody;
  readonly weekly: WeeklyBody;
  readonly use_case: string;
}

export interface AdsquadParams {
  readonly adAccountId: string;
  readonly entity_ids: ReadonlyArray<EntityIdsBody>;
}

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

export interface AdSquadUiRenderDataBody {
  readonly conversion_location: string;
}

export interface AdSquadUiRenderDataParams {
  readonly adAccountId: string;
  readonly limit?: string;
}

export interface AdSquadUiRenderDataResponse {
  readonly id: string;
  readonly ad_squad_id: string;
  readonly conversion_location: string;
}

export interface AdvancedDemographicsParams {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}

export interface AdvancedDemographicsResponse {
  readonly name: string;
  readonly id: string;
}

export interface AgeGroupParams {
  readonly min_age?: string;
  readonly max_age?: MaxAgeEnum;
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}

export interface AgeGroupResponse {
  readonly name: string;
  readonly id: string;
}

export interface AndroidAppLinkBody {
  readonly url: string;
  readonly package: string;
  readonly app_name: string;
}

export interface AsyncStatsReportParams {
  readonly adAccountId: string;
  readonly async_format?: string;
  readonly start_time?: string;
  readonly end_time?: string;
}

export interface AsyncStatsReportResponse {
  readonly report_run_id: string;
  readonly async_status: string;
}

export interface AudienceSizeParams {
  readonly id: string;
  readonly geos: ReadonlyArray<GeosBody>;
  readonly demographics: ReadonlyArray<DemographicsBody>;
}

export interface AudienceSizeResponse {

}

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

export interface AudienceSizeV2Response {

}

export interface AVAILABILITYBody {
  readonly EQ: string;
}

export interface BaseSpecBody {
  readonly interests: ReadonlyArray<InterestsBody>;
  readonly geos: ReadonlyArray<GeosBody>;
}

export interface BidEstimateParams {
  readonly id: string;
  readonly optimization_goal: string;
  readonly targeting: TargetingBody;
}

export interface BidEstimateResponse {

}

export interface BillingcenterParams {
  readonly billingCenterId: string;
}

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

export interface CampaignParams {
  readonly adAccountId: string;
  readonly entity_ids: ReadonlyArray<EntityIdsBody>;
}

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

export interface CampaignsBody {
  readonly name: string;
  readonly ad_account_id: string;
  readonly status: string;
  readonly start_time: string;
  readonly buy_model: string;
  readonly creation_state: string;
  readonly objective_v2_properties: ObjectiveV2PropertiesBody;
}

export interface CarrierParams {
  readonly oSTYPE: string;
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}

export interface CarrierResponse {
  readonly id: string;
  readonly name: string;
  readonly valid_country: string;
}

export interface CatalogParams {
  readonly catalogId: string;
}

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

export interface CatalogsBody {
  readonly organization_id: string;
  readonly name: string;
  readonly vertical: string;
  readonly event_sources: ReadonlyArray<EventSourcesBody>;
}

export interface CategoriesLoiParams {
  readonly proximity: string;
  readonly proximity_unit: string;
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}

export interface CategoriesLoiResponse {
  readonly proximity: string;
  readonly proximity_unit: string;
}

export interface ChangelogParams {
  readonly adId: string;
  readonly limit?: string;
}

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

export type CollectionPropertiesDefaultFallbackInteractionTypeEnum = "WEB_VIEW" | "APP_INSTALL" | "DEEP_LINK" | string;

export interface ContinentBody {
  readonly id: string;
  readonly name: string;
}

export interface CountryBody {
  readonly id: string;
  readonly name: string;
  readonly code: string;
  readonly code2: string;
}

export interface CountryParams {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}

export interface CountryResponse {

}

export interface CreativeElementParams {
  readonly adAccountId: string;
  readonly name: string;
  readonly type: TypeEnum;
  readonly title?: string;
  readonly description?: string;
  readonly interaction_type: InteractionTypeEnum;
  readonly render_type: RenderTypeEnum;
}

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

export interface CreativePreviewParams {
  readonly creativeId: string;
}

export interface CreativePreviewResponse {

}

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

export interface CreativesBody {
  readonly ad_account_id: string;
  readonly top_snap_media_id: string;
  readonly name: string;
  readonly profile_properties: ProfilePropertiesBody;
  readonly type: string;
  readonly headline: string;
  readonly shareable: boolean;
}

export interface CustomerBody {
  readonly name: string;
  readonly netsuite_id: string;
}

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

export interface DemographicsBody {
  readonly age_groups: ReadonlyArray<unknown>;
}

export type DimensionEnum = "GEO" | "DEMO" | "INTEREST" | "DEVICE" | string;

export interface DlxcParams {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}

export interface DlxcResponse {
  readonly name: string;
  readonly id: string;
}

export interface DlxpParams {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}

export interface DlxpResponse {
  readonly id: string;
  readonly name: string;
}

export interface DlxsParams {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}

export interface DlxsResponse {
  readonly name: string;
  readonly id: string;
}

export interface DynamicTemplateParams {
  readonly adAccountId: string;
  readonly dynamic_templates: ReadonlyArray<DynamicTemplatesBody>;
}

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

export interface DynamicTemplatesBody {
  readonly ad_account_id: string;
  readonly name: string;
  readonly ios_url: string;
  readonly android_url: string;
  readonly layout: string;
  readonly text_fields: ReadonlyArray<unknown>;
}

export interface EcidStatuParams {
  readonly snapAppId: string;
}

export interface EcidStatuResponse {

}

export interface EntityIdsBody {
  readonly id: string;
}

export interface EventDetailParams {
  readonly adAccountId: string;
  readonly ad_account_id?: string;
}

export interface EventDetailResponse {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly event_name: string;
  readonly event_start_time: string;
  readonly event_time_zone: string;
  readonly ad_account_id: string;
}

export interface EventSourcesBody {
  readonly id: string;
  readonly type: string;
}

export interface FacetParams {
  readonly catalogId: string;
  readonly facets: ReadonlyArray<FacetsBody>;
  readonly filter: FilterBody;
}

export interface FacetResponse {
  readonly property: string;
}

export interface FacetsBody {
  readonly property: string;
}

export interface FeedUploadParams {
  readonly productFeedId: string;
}

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

export interface FilterBody {
  readonly AVAILABILITY: AVAILABILITYBody;
}

export interface FormFieldsBody {
  readonly type: string;
}

export interface FundingsourceParams {
  readonly fundingSourceId: string;
}

export interface FundingsourceResponse {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly name: string;
  readonly type: string;
  readonly organization_id: string;
  readonly currency: string;
}

export interface GenderParams {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}

export interface GenderResponse {
  readonly name: string;
  readonly id: string;
}

export interface GeographicCoordinatesBody {
  readonly longitude: number;
  readonly latitude: number;
}

export interface GeosBody {
  readonly country_code: string;
}

export type GranularityEnum = "TOTAL" | "DAY" | "HOUR" | "LIFETIME" | string;

export interface GuestRatingsBody {
  readonly rating_system: string;
  readonly score: string;
  readonly max_score: string;
  readonly number_of_reviewers: string;
}

export type HeadlineEnum = "APPLY_NOW" | "BOOK_NOW" | "BUY_TICKETS" | "DONATE" | "DOWNLOAD" | "GET_NOW" | "INSTALL_NOW" | "LISTEN" | "MORE" | "OPEN_APP" | "ORDER_NOW" | "PLAY" | "READ" | "RESPOND" | "SHOP_NOW" | "SHOW" | "SHOWTIMES" | "SIGN_UP" | "TRY" | "USE_APP" | "VIEW" | "WATCH" | string;

export type InteractionTypeEnum = "WEB_VIEW" | "APP_INSTALL" | "DEEP_LINK" | string;

export interface InteractionZoneParams {
  readonly adAccountId: string;
  readonly name: string;
  readonly render_type: RenderTypeEnum;
  readonly creative_elements: string;
  readonly headline: HeadlineEnum;
}

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

export interface InterestsBody {
  readonly category_id: ReadonlyArray<unknown>;
}

export interface InvoiceParams {
  readonly adAccountId: string;
}

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

export interface IosAppLinkBody {
  readonly url: string;
  readonly app_store_id: string;
  readonly app_name: string;
}

export interface LanguagesParams {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}

export interface LanguagesResponse {
  readonly id: string;
  readonly name: string;
}

export interface LeadGenerationFormParams {
  readonly adAccountId: string;
}

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

export interface LegalDisclosuresBody {
  readonly title: string;
  readonly description: string;
}

export interface LensPreviewParams {
  readonly mediaId: string;
}

export interface LensPreviewResponse {

}

export interface LifetimeStatParams {
  readonly adsquadId: string;
  readonly "adsquad-id"?: string;
}

export interface LifetimeStatResponse {
  readonly id: string;
  readonly type: string;
  readonly granularity: string;
  readonly stats: StatsBody;
  readonly start_time: string;
  readonly end_time: string;
  readonly finalized_data_end_time: string;
}

export type LimitEnum = "50-1000" | string;

export interface MainMediaBody {
  readonly url: string;
  readonly tags: ReadonlyArray<unknown>;
}

export interface MarketingNameParams {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}

export interface MarketingNameResponse {

}

export type MaxAgeEnum = "13" | "-" | "55" | string;

export interface MediaBody {
  readonly name: string;
  readonly type: string;
  readonly ad_account_id: string;
}

export interface MediaCopyBody {
  readonly source_media_id: string;
  readonly source_ad_account_id: string;
}

export interface MediaParams {
  readonly adAccountId: string;
  readonly entity_ids: ReadonlyArray<EntityIdsBody>;
}

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

export interface MemberParams {
  readonly memberId: string;
}

export interface MemberResponse {
  readonly id: string;
  readonly updated_at: string;
  readonly created_at: string;
  readonly email: string;
  readonly organization_id: string;
  readonly display_name: string;
  readonly member_status: string;
}

export interface MembersBody {
  readonly email: string;
  readonly organization_id: string;
  readonly display_name: string;
}

export interface MeParams {

}

export interface MeResponse {

}

export interface MetroBody {
  readonly id: string;
  readonly name: string;
  readonly regions: string;
}

export interface MetroParams {
  readonly countryCode: string;
  readonly country_code?: string;
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}

export interface MetroResponse {
  readonly lat: number;
  readonly lon: number;
  readonly continent: ContinentBody;
  readonly country: CountryBody;
  readonly metro: MetroBody;
}

export interface MobileAppParams {
  readonly adaccountId: string;
}

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

export interface NlnParams {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}

export interface NlnResponse {
  readonly id: string;
  readonly name: string;
  readonly path: string;
  readonly source: string;
}

export interface ObjectiveV2PropertiesBody {
  readonly objective_v2_type: string;
}

export interface OptionParams {
  readonly country_code: string;
  readonly is_intl_vac_enabled?: string;
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}

export interface OptionResponse {

}

export interface OrganizationParams {

}

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

export interface OsTypeParams {
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}

export interface OsTypeResponse {
  readonly id: string;
  readonly name: string;
}

export interface PaymentItemsBody {
  readonly payment_item_id: string;
  readonly name: string;
  readonly start_date: string;
  readonly end_date: string;
  readonly subtotal_amount: SubtotalAmountBody;
  readonly quantity: number;
}

export interface PhoneNumberParams {
  readonly adAccountId: string;
}

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

export interface PixelParams {
  readonly adAccountId: string;
}

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

export interface PlacementV2Body {
  readonly config: string;
}

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

export interface PostalCodeResponse {
  readonly country_code?: string;
  readonly cursor?: string;
  readonly limit?: string;
}

export interface PreviewParams {
  readonly mediaId: string;
}

export interface PreviewPropertiesBody {
  readonly preview_media_id: string;
  readonly logo_media_id: string;
  readonly preview_headline: string;
}

export interface PreviewResponse {

}

export interface PriceBody {
  readonly value: string;
  readonly currency: string;
}

export interface ProductFeedParams {
  readonly catalogId: string;
  readonly product_feeds: ReadonlyArray<ProductFeedsBody>;
}

export interface ProductFeedResponse {
  readonly created_at: string;
  readonly updated_at: string;
  readonly id: string;
  readonly catalog_id: string;
  readonly name: string;
  readonly default_currency: string;
  readonly schedule: ScheduleBody;
}

export interface ProductFeedsBody {
  readonly catalog_id: string;
  readonly name: string;
  readonly default_currency: string;
  readonly status: string;
  readonly schedule: ScheduleBody;
}

export interface ProductParams {
  readonly catalogId: string;
  readonly limit: number;
}

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

export interface ProductSetParams {
  readonly catalogId: string;
  readonly limit: number;
}

export interface ProductSetResponse {
  readonly id: string;
  readonly catalog_id: string;
  readonly name: string;
  readonly filter: FilterBody;
  readonly created_at: string;
  readonly updated_at: string;
}

export interface ProductSetsBody {
  readonly id: string;
  readonly name: string;
  readonly filter: FilterBody;
}

export interface ProfilePropertiesBody {
  readonly profile_id: string;
}

export type RenderTypeEnum = "STATIC" | "DYNAMIC" | string;

export interface ReservedForecastingParams {
  readonly adAccountId: string;
  readonly adsquads: ReadonlyArray<AdsquadsBody>;
}

export interface ReservedForecastingResponse {
  readonly ad_account_id?: string;
}

export type ReviewStatusEnum = "PENDING_REVIEW" | "APPROVED" | "DISAPPROVED" | string;

export interface RoleParams {
  readonly adAccountId: string;
  readonly limit?: string;
}

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

export interface RolesBody {
  readonly member_id: string;
  readonly ad_account_id: string;
  readonly type: string;
}

export interface RolParams {
  readonly roleId: string;
  readonly role_id?: string;
}

export interface RolResponse {

}

export interface SalePriceBody {
  readonly value: string;
  readonly currency: string;
}

export interface ScheduleBody {
  readonly url: string;
  readonly username: string;
  readonly password: string;
  readonly interval_type: string;
  readonly interval_count: string;
  readonly timezone: string;
  readonly minute: string;
}

export interface SclParams {
  readonly country_code?: string;
  readonly is_hec?: string;
  readonly limit?: string;
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}

export interface SclResponse {
  readonly country_code?: string;
  readonly is_hec?: string;
  readonly limit?: string;
}

export interface SearchParams {
  readonly catalogId: string;
  readonly limit: number;
}

export interface SearchResponse {
  readonly catalog_id: string;
}

export interface SegmentParams {
  readonly adAccountId: string;
  readonly segments: ReadonlyArray<SegmentsBody>;
}

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

export interface SegmentsBody {
  readonly name: string;
  readonly description: string;
  readonly source_type: string;
  readonly retention_in_days: number;
  readonly ad_account_id: string;
}

export interface ShpParams {
  readonly country_code?: string;
  readonly limit?: string;
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}

export interface ShpResponse {
  readonly country_code?: string;
  readonly limit?: string;
}

export interface SnapcodeParams {
  readonly creativeId: string;
}

export interface SnapcodeResponse {

}

export interface StatsBody {
  readonly spend: number;
}

export interface StatsParams {
  readonly pixelId: string;
  readonly "pixel-id"?: string;
}

export interface StatsResponse {
  readonly "pixel-id"?: string;
}

export interface StatusBody {
  readonly before_value: string;
  readonly after_value: string;
}

export interface SubtotalAmountBody {
  readonly amount: number;
  readonly currency_type: string;
}

export interface SummaryBody {
  readonly issues_summary: unknown;
}

export interface TargetingBody {
  readonly regulated_content: boolean;
  readonly geos: ReadonlyArray<GeosBody>;
}

export interface TargetingInsightParams {
  readonly adAccountId: string;
  readonly base_spec: BaseSpecBody;
  readonly targeting_spec: TargetingSpecBody;
}

export interface TargetingInsightResponse {
  readonly ad_account_id?: string;
}

export interface TargetingSpecBody {
  readonly interests: ReadonlyArray<InterestsBody>;
  readonly geos: ReadonlyArray<GeosBody>;
}

export type TargetingV2Enum = "ENABLED" | string;

export interface ThumbnailParams {
  readonly mediaId: string;
}

export interface ThumbnailResponse {

}

export interface TimeseriesBody {
  readonly start_time: string;
  readonly end_time: string;
  readonly stats: StatsBody;
}

export interface TimeseriesStatParams {
  readonly adId: string;
  readonly "ad-id"?: string;
}

export interface TimeseriesStatResponse {
  readonly id: string;
  readonly type: string;
  readonly granularity: string;
  readonly start_time: string;
  readonly end_time: string;
  readonly finalized_data_end_time: string;
  readonly timeseries: ReadonlyArray<TimeseriesBody>;
}

export interface TotalAmountBody {
  readonly amount: number;
  readonly currency_type: string;
}

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

export interface TotalStatResponse {
  readonly id: string;
  readonly type: string;
  readonly granularity: string;
  readonly stats: StatsBody;
  readonly finalized_data_end_time: string;
}

export interface TransactionParams {
  readonly organizationId: string;
  readonly start_time?: string;
  readonly end_time?: string;
}

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

export type TypeEnum = "PREVIEW" | string;

export interface UpdateValueRecordsBody {
  readonly status: StatusBody;
}

export interface UserParams {
  readonly segmentId: string;
  readonly users: ReadonlyArray<UsersBody>;
}

export interface UserResponse {
  readonly number_uploaded_users: number;
}

export interface UsersBody {
  readonly schema: ReadonlyArray<unknown>;
  readonly data: string;
}

export interface V1Params {
  readonly memberId: string;
  readonly member_id?: string;
}

export interface V1Response {

}

export interface VacParams {
  readonly country_code?: string;
  readonly is_hec?: string;
  readonly limit?: string;
  readonly "Get a specific Ad Squad by ID"?: string;
  readonly "Get all Ad Squads under a Campaign"?: string;
  readonly "Get a specific Targeting Spec by ID"?: string;
  readonly "Get all Targeting Specs under an Ad Squad"?: string;
}

export interface VacResponse {
  readonly country_code?: string;
  readonly is_hec?: string;
  readonly limit?: string;
}

export interface WebViewPropertiesParams {
  readonly adAccountId: string;
  readonly creatives: ReadonlyArray<CreativesBody>;
}

export interface WebViewPropertiesResponse {
  readonly url: string;
  readonly block_preload: boolean;
}

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
