// @generated
// fingerprint: sha256:271244f1b03bfb83afd44cfd9ab7cddc336c234c11c7ad59fc21701abdae7343
// DO NOT EDIT: generated file; changes will be overwritten.
// This file is generated. Do not edit by hand.
import { Schema } from "effect";

export interface Account {
  readonly id?: string;
  readonly name?: string;
  readonly attribution_type?: string;
  readonly click_attribution_window?: string;
  readonly view_attribution_window?: string;
  readonly currency?: string;
  readonly status?: string;
  readonly time_zone_id?: string;
  readonly created_at?: string;
}
export interface AccountEncoded {
  readonly id?: string;
  readonly name?: string;
  readonly attribution_type?: string;
  readonly click_attribution_window?: string;
  readonly view_attribution_window?: string;
  readonly currency?: string;
  readonly status?: string;
  readonly time_zone_id?: string;
  readonly created_at?: string;
}
export const Account: Schema.Schema<Account, AccountEncoded, never> = Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  attribution_type: Schema.optional(Schema.String),
  click_attribution_window: Schema.optional(Schema.String),
  view_attribution_window: Schema.optional(Schema.String),
  currency: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  time_zone_id: Schema.optional(Schema.String),
  created_at: Schema.optional(Schema.String),
});

export interface AccountUpdate {
  readonly attribution_type?: string;
  readonly click_attribution_window?: string;
  readonly view_attribution_window?: string;
}
export interface AccountUpdateEncoded {
  readonly attribution_type?: string;
  readonly click_attribution_window?: string;
  readonly view_attribution_window?: string;
}
export const AccountUpdate: Schema.Schema<AccountUpdate, AccountUpdateEncoded, never> = Schema.Struct({
  attribution_type: Schema.optional(Schema.String),
  click_attribution_window: Schema.optional(Schema.String),
  view_attribution_window: Schema.optional(Schema.String),
});

export type ActionSource = string;
export type ActionSourceEncoded = string;
export const ActionSource: Schema.Schema<ActionSource, ActionSourceEncoded, never> = Schema.String;

export interface Ad {
  readonly id?: string;
  readonly account_id?: string;
  readonly campaign_id?: string;
  readonly ad_group_id?: string;
  readonly name?: string;
  readonly configured_status?: ConfiguredStatus;
  readonly effective_status?: AdEffectiveStatus;
  readonly post_id?: string;
  readonly click_url?: string;
  readonly click_url_query_parameters?: string;
  readonly preview_expiry?: string;
  readonly delivery_status?: string;
  readonly created_at?: string;
}
export interface AdEncoded {
  readonly id?: string;
  readonly account_id?: string;
  readonly campaign_id?: string;
  readonly ad_group_id?: string;
  readonly name?: string;
  readonly configured_status?: ConfiguredStatusEncoded;
  readonly effective_status?: AdEffectiveStatusEncoded;
  readonly post_id?: string;
  readonly click_url?: string;
  readonly click_url_query_parameters?: string;
  readonly preview_expiry?: string;
  readonly delivery_status?: string;
  readonly created_at?: string;
}
export const Ad: Schema.Schema<Ad, AdEncoded, never> = Schema.Struct({
  id: Schema.optional(Schema.String),
  account_id: Schema.optional(Schema.String),
  campaign_id: Schema.optional(Schema.String),
  ad_group_id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  configured_status: Schema.optional(Schema.suspend(() => ConfiguredStatus)),
  effective_status: Schema.optional(Schema.suspend(() => AdEffectiveStatus)),
  post_id: Schema.optional(Schema.String),
  click_url: Schema.optional(Schema.String),
  click_url_query_parameters: Schema.optional(Schema.String),
  preview_expiry: Schema.optional(Schema.String),
  delivery_status: Schema.optional(Schema.String),
  created_at: Schema.optional(Schema.String),
});

export interface AdCreate {
  readonly ad_group_id: string;
  readonly name: string;
  readonly configured_status: ConfiguredStatus;
  readonly post_id?: string;
  readonly click_url: string;
  readonly click_url_query_parameters?: string;
  readonly call_to_action?: CallToAction;
}
export interface AdCreateEncoded {
  readonly ad_group_id: string;
  readonly name: string;
  readonly configured_status: ConfiguredStatusEncoded;
  readonly post_id?: string;
  readonly click_url: string;
  readonly click_url_query_parameters?: string;
  readonly call_to_action?: CallToActionEncoded;
}
export const AdCreate: Schema.Schema<AdCreate, AdCreateEncoded, never> = Schema.Struct({
  ad_group_id: Schema.String,
  name: Schema.String,
  configured_status: Schema.suspend(() => ConfiguredStatus),
  post_id: Schema.optional(Schema.String),
  click_url: Schema.String,
  click_url_query_parameters: Schema.optional(Schema.String),
  call_to_action: Schema.optional(Schema.suspend(() => CallToAction)),
});

export type AdEffectiveStatus = unknown;
export type AdEffectiveStatusEncoded = unknown;
export const AdEffectiveStatus: Schema.Schema<AdEffectiveStatus, AdEffectiveStatusEncoded, never> = Schema.Unknown;

export interface AdGroup {
  readonly id?: string;
  readonly account_id?: string;
  readonly campaign_id?: string;
  readonly name?: string;
  readonly configured_status?: ConfiguredStatus;
  readonly effective_status?: CampaignEffectiveStatus;
  readonly bid_strategy?: BidStrategy;
  readonly bid_value?: number;
  readonly goal_type?: GoalType;
  readonly optimization_goal?: OptimizationGoal;
  readonly conversion_pixel_id?: string;
  readonly start_time?: string;
  readonly end_time?: string;
  readonly delivery_status?: string;
  readonly targeting?: Targeting;
  readonly created_at?: string;
}
export interface AdGroupEncoded {
  readonly id?: string;
  readonly account_id?: string;
  readonly campaign_id?: string;
  readonly name?: string;
  readonly configured_status?: ConfiguredStatusEncoded;
  readonly effective_status?: CampaignEffectiveStatusEncoded;
  readonly bid_strategy?: BidStrategyEncoded;
  readonly bid_value?: number;
  readonly goal_type?: GoalTypeEncoded;
  readonly optimization_goal?: OptimizationGoalEncoded;
  readonly conversion_pixel_id?: string;
  readonly start_time?: string;
  readonly end_time?: string;
  readonly delivery_status?: string;
  readonly targeting?: TargetingEncoded;
  readonly created_at?: string;
}
export const AdGroup: Schema.Schema<AdGroup, AdGroupEncoded, never> = Schema.Struct({
  id: Schema.optional(Schema.String),
  account_id: Schema.optional(Schema.String),
  campaign_id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  configured_status: Schema.optional(Schema.suspend(() => ConfiguredStatus)),
  effective_status: Schema.optional(Schema.suspend(() => CampaignEffectiveStatus)),
  bid_strategy: Schema.optional(Schema.suspend(() => BidStrategy)),
  bid_value: Schema.optional(Schema.Number),
  goal_type: Schema.optional(Schema.suspend(() => GoalType)),
  optimization_goal: Schema.optional(Schema.suspend(() => OptimizationGoal)),
  conversion_pixel_id: Schema.optional(Schema.String),
  start_time: Schema.optional(Schema.String),
  end_time: Schema.optional(Schema.String),
  delivery_status: Schema.optional(Schema.String),
  targeting: Schema.optional(Schema.suspend(() => Targeting)),
  created_at: Schema.optional(Schema.String),
});

export interface AdGroupCreate {
  readonly campaign_id: string;
  readonly name: string;
  readonly configured_status: ConfiguredStatus;
  readonly bid_strategy: BidStrategy;
  readonly bid_value?: number;
  readonly goal_type: GoalType;
  readonly optimization_goal?: OptimizationGoal;
  readonly conversion_pixel_id?: string;
  readonly start_time: string;
  readonly end_time?: string;
  readonly targeting: Targeting;
}
export interface AdGroupCreateEncoded {
  readonly campaign_id: string;
  readonly name: string;
  readonly configured_status: ConfiguredStatusEncoded;
  readonly bid_strategy: BidStrategyEncoded;
  readonly bid_value?: number;
  readonly goal_type: GoalTypeEncoded;
  readonly optimization_goal?: OptimizationGoalEncoded;
  readonly conversion_pixel_id?: string;
  readonly start_time: string;
  readonly end_time?: string;
  readonly targeting: TargetingEncoded;
}
export const AdGroupCreate: Schema.Schema<AdGroupCreate, AdGroupCreateEncoded, never> = Schema.Struct({
  campaign_id: Schema.String,
  name: Schema.String,
  configured_status: Schema.suspend(() => ConfiguredStatus),
  bid_strategy: Schema.suspend(() => BidStrategy),
  bid_value: Schema.optional(Schema.Number),
  goal_type: Schema.suspend(() => GoalType),
  optimization_goal: Schema.optional(Schema.suspend(() => OptimizationGoal)),
  conversion_pixel_id: Schema.optional(Schema.String),
  start_time: Schema.String,
  end_time: Schema.optional(Schema.String),
  targeting: Schema.suspend(() => Targeting),
});

export interface AdGroupUpdate {
  readonly name?: string;
  readonly configured_status?: ConfiguredStatus;
  readonly bid_strategy?: BidStrategy;
  readonly bid_value?: number;
  readonly goal_type?: GoalType;
  readonly optimization_goal?: OptimizationGoal;
  readonly conversion_pixel_id?: string;
  readonly start_time?: string;
  readonly end_time?: string;
  readonly targeting?: Targeting;
}
export interface AdGroupUpdateEncoded {
  readonly name?: string;
  readonly configured_status?: ConfiguredStatusEncoded;
  readonly bid_strategy?: BidStrategyEncoded;
  readonly bid_value?: number;
  readonly goal_type?: GoalTypeEncoded;
  readonly optimization_goal?: OptimizationGoalEncoded;
  readonly conversion_pixel_id?: string;
  readonly start_time?: string;
  readonly end_time?: string;
  readonly targeting?: TargetingEncoded;
}
export const AdGroupUpdate: Schema.Schema<AdGroupUpdate, AdGroupUpdateEncoded, never> = Schema.Struct({
  name: Schema.optional(Schema.String),
  configured_status: Schema.optional(Schema.suspend(() => ConfiguredStatus)),
  bid_strategy: Schema.optional(Schema.suspend(() => BidStrategy)),
  bid_value: Schema.optional(Schema.Number),
  goal_type: Schema.optional(Schema.suspend(() => GoalType)),
  optimization_goal: Schema.optional(Schema.suspend(() => OptimizationGoal)),
  conversion_pixel_id: Schema.optional(Schema.String),
  start_time: Schema.optional(Schema.String),
  end_time: Schema.optional(Schema.String),
  targeting: Schema.optional(Schema.suspend(() => Targeting)),
});

export interface AdUpdate {
  readonly name?: string;
  readonly configured_status?: ConfiguredStatus;
  readonly click_url?: string;
  readonly click_url_query_parameters?: string;
  readonly call_to_action?: CallToAction;
}
export interface AdUpdateEncoded {
  readonly name?: string;
  readonly configured_status?: ConfiguredStatusEncoded;
  readonly click_url?: string;
  readonly click_url_query_parameters?: string;
  readonly call_to_action?: CallToActionEncoded;
}
export const AdUpdate: Schema.Schema<AdUpdate, AdUpdateEncoded, never> = Schema.Struct({
  name: Schema.optional(Schema.String),
  configured_status: Schema.optional(Schema.suspend(() => ConfiguredStatus)),
  click_url: Schema.optional(Schema.String),
  click_url_query_parameters: Schema.optional(Schema.String),
  call_to_action: Schema.optional(Schema.suspend(() => CallToAction)),
});

export interface ApiResponse_Account {
  readonly data?: Account;
}
export interface ApiResponse_AccountEncoded {
  readonly data?: AccountEncoded;
}
export const ApiResponse_Account: Schema.Schema<ApiResponse_Account, ApiResponse_AccountEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => Account)),
});

export interface ApiResponse_AccountList {
  readonly data?: ReadonlyArray<Account>;
}
export interface ApiResponse_AccountListEncoded {
  readonly data?: ReadonlyArray<AccountEncoded>;
}
export const ApiResponse_AccountList: Schema.Schema<ApiResponse_AccountList, ApiResponse_AccountListEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => Account))),
});

export interface ApiResponse_Ad {
  readonly data?: Ad;
}
export interface ApiResponse_AdEncoded {
  readonly data?: AdEncoded;
}
export const ApiResponse_Ad: Schema.Schema<ApiResponse_Ad, ApiResponse_AdEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => Ad)),
});

export interface ApiResponse_AdGroup {
  readonly data?: AdGroup;
}
export interface ApiResponse_AdGroupEncoded {
  readonly data?: AdGroupEncoded;
}
export const ApiResponse_AdGroup: Schema.Schema<ApiResponse_AdGroup, ApiResponse_AdGroupEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => AdGroup)),
});

export interface ApiResponse_AdGroupList {
  readonly data?: ReadonlyArray<AdGroup>;
}
export interface ApiResponse_AdGroupListEncoded {
  readonly data?: ReadonlyArray<AdGroupEncoded>;
}
export const ApiResponse_AdGroupList: Schema.Schema<ApiResponse_AdGroupList, ApiResponse_AdGroupListEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => AdGroup))),
});

export interface ApiResponse_AdList {
  readonly data?: ReadonlyArray<Ad>;
}
export interface ApiResponse_AdListEncoded {
  readonly data?: ReadonlyArray<AdEncoded>;
}
export const ApiResponse_AdList: Schema.Schema<ApiResponse_AdList, ApiResponse_AdListEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => Ad))),
});

export interface ApiResponse_BidSuggestion {
  readonly data?: BidSuggestion;
}
export interface ApiResponse_BidSuggestionEncoded {
  readonly data?: BidSuggestionEncoded;
}
export const ApiResponse_BidSuggestion: Schema.Schema<ApiResponse_BidSuggestion, ApiResponse_BidSuggestionEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => BidSuggestion)),
});

export interface ApiResponse_Campaign {
  readonly data?: Campaign;
}
export interface ApiResponse_CampaignEncoded {
  readonly data?: CampaignEncoded;
}
export const ApiResponse_Campaign: Schema.Schema<ApiResponse_Campaign, ApiResponse_CampaignEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => Campaign)),
});

export interface ApiResponse_CampaignList {
  readonly data?: ReadonlyArray<Campaign>;
}
export interface ApiResponse_CampaignListEncoded {
  readonly data?: ReadonlyArray<CampaignEncoded>;
}
export const ApiResponse_CampaignList: Schema.Schema<ApiResponse_CampaignList, ApiResponse_CampaignListEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => Campaign))),
});

export interface ApiResponse_CustomAudience {
  readonly data?: CustomAudience;
}
export interface ApiResponse_CustomAudienceEncoded {
  readonly data?: CustomAudienceEncoded;
}
export const ApiResponse_CustomAudience: Schema.Schema<ApiResponse_CustomAudience, ApiResponse_CustomAudienceEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => CustomAudience)),
});

export interface ApiResponse_CustomAudienceList {
  readonly data?: ReadonlyArray<CustomAudience>;
}
export interface ApiResponse_CustomAudienceListEncoded {
  readonly data?: ReadonlyArray<CustomAudienceEncoded>;
}
export const ApiResponse_CustomAudienceList: Schema.Schema<ApiResponse_CustomAudienceList, ApiResponse_CustomAudienceListEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => CustomAudience))),
});

export interface ApiResponse_FundingInstrumentList {
  readonly data?: ReadonlyArray<FundingInstrument>;
}
export interface ApiResponse_FundingInstrumentListEncoded {
  readonly data?: ReadonlyArray<FundingInstrumentEncoded>;
}
export const ApiResponse_FundingInstrumentList: Schema.Schema<ApiResponse_FundingInstrumentList, ApiResponse_FundingInstrumentListEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => FundingInstrument))),
});

export interface ApiResponse_GeolocationValidation {
  readonly data?: Inline33;
}
export interface ApiResponse_GeolocationValidationEncoded {
  readonly data?: Inline33Encoded;
}
export const ApiResponse_GeolocationValidation: Schema.Schema<ApiResponse_GeolocationValidation, ApiResponse_GeolocationValidationEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => Inline33)),
});

export interface ApiResponse_PixelLastFired {
  readonly data?: Inline35;
}
export interface ApiResponse_PixelLastFiredEncoded {
  readonly data?: Inline35Encoded;
}
export const ApiResponse_PixelLastFired: Schema.Schema<ApiResponse_PixelLastFired, ApiResponse_PixelLastFiredEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => Inline35)),
});

export interface ApiResponse_PixelList {
  readonly data?: ReadonlyArray<Pixel>;
}
export interface ApiResponse_PixelListEncoded {
  readonly data?: ReadonlyArray<PixelEncoded>;
}
export const ApiResponse_PixelList: Schema.Schema<ApiResponse_PixelList, ApiResponse_PixelListEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => Pixel))),
});

export interface ApiResponse_Report {
  readonly data?: ReadonlyArray<ReportRow>;
}
export interface ApiResponse_ReportEncoded {
  readonly data?: ReadonlyArray<ReportRowEncoded>;
}
export const ApiResponse_Report: Schema.Schema<ApiResponse_Report, ApiResponse_ReportEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => ReportRow))),
});

export interface ApiResponse_SavedAudience {
  readonly data?: SavedAudience;
}
export interface ApiResponse_SavedAudienceEncoded {
  readonly data?: SavedAudienceEncoded;
}
export const ApiResponse_SavedAudience: Schema.Schema<ApiResponse_SavedAudience, ApiResponse_SavedAudienceEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => SavedAudience)),
});

export interface ApiResponse_SavedAudienceList {
  readonly data?: ReadonlyArray<SavedAudience>;
}
export interface ApiResponse_SavedAudienceListEncoded {
  readonly data?: ReadonlyArray<SavedAudienceEncoded>;
}
export const ApiResponse_SavedAudienceList: Schema.Schema<ApiResponse_SavedAudienceList, ApiResponse_SavedAudienceListEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => SavedAudience))),
});

export interface ApiResponse_StructuredPost {
  readonly data?: StructuredPost;
}
export interface ApiResponse_StructuredPostEncoded {
  readonly data?: StructuredPostEncoded;
}
export const ApiResponse_StructuredPost: Schema.Schema<ApiResponse_StructuredPost, ApiResponse_StructuredPostEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => StructuredPost)),
});

export interface ApiResponse_StructuredPostList {
  readonly data?: ReadonlyArray<StructuredPost>;
}
export interface ApiResponse_StructuredPostListEncoded {
  readonly data?: ReadonlyArray<StructuredPostEncoded>;
}
export const ApiResponse_StructuredPostList: Schema.Schema<ApiResponse_StructuredPostList, ApiResponse_StructuredPostListEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => StructuredPost))),
});

export interface ApiResponse_Success {
  readonly data?: Inline47;
}
export interface ApiResponse_SuccessEncoded {
  readonly data?: Inline47Encoded;
}
export const ApiResponse_Success: Schema.Schema<ApiResponse_Success, ApiResponse_SuccessEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => Inline47)),
});

export interface ApiResponse_TargetingOptions {
  readonly data?: ReadonlyArray<Inline49>;
}
export interface ApiResponse_TargetingOptionsEncoded {
  readonly data?: ReadonlyArray<Inline49Encoded>;
}
export const ApiResponse_TargetingOptions: Schema.Schema<ApiResponse_TargetingOptions, ApiResponse_TargetingOptionsEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => Inline49))),
});

export interface ApiResponse_User {
  readonly data?: User;
}
export interface ApiResponse_UserEncoded {
  readonly data?: UserEncoded;
}
export const ApiResponse_User: Schema.Schema<ApiResponse_User, ApiResponse_UserEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => User)),
});

export type AudienceUserAction = string;
export type AudienceUserActionEncoded = string;
export const AudienceUserAction: Schema.Schema<AudienceUserAction, AudienceUserActionEncoded, never> = Schema.String;

export type BidStrategy = unknown;
export type BidStrategyEncoded = unknown;
export const BidStrategy: Schema.Schema<BidStrategy, BidStrategyEncoded, never> = Schema.Unknown;

export type BidSuggestion = unknown;
export type BidSuggestionEncoded = unknown;
export const BidSuggestion: Schema.Schema<BidSuggestion, BidSuggestionEncoded, never> = Schema.Unknown;

export interface BidSuggestionRequest {
  readonly targeting?: Targeting;
  readonly objective?: CampaignObjective;
  readonly goal_type?: GoalType;
}
export interface BidSuggestionRequestEncoded {
  readonly targeting?: TargetingEncoded;
  readonly objective?: CampaignObjectiveEncoded;
  readonly goal_type?: GoalTypeEncoded;
}
export const BidSuggestionRequest: Schema.Schema<BidSuggestionRequest, BidSuggestionRequestEncoded, never> = Schema.Struct({
  targeting: Schema.optional(Schema.suspend(() => Targeting)),
  objective: Schema.optional(Schema.suspend(() => CampaignObjective)),
  goal_type: Schema.optional(Schema.suspend(() => GoalType)),
});

export type CallToAction = unknown;
export type CallToActionEncoded = unknown;
export const CallToAction: Schema.Schema<CallToAction, CallToActionEncoded, never> = Schema.Unknown;

export type Campaign = unknown;
export type CampaignEncoded = unknown;
export const Campaign: Schema.Schema<Campaign, CampaignEncoded, never> = Schema.Unknown;

export interface CampaignCreate {
  readonly name: string;
  readonly objective: CampaignObjective;
  readonly configured_status: ConfiguredStatus;
  readonly funding_instrument_id: string;
  readonly spend_cap?: number;
  readonly goal_type?: GoalType;
  readonly app_id?: string;
  readonly start_time?: string;
  readonly end_time?: string;
  readonly invoice_label?: string;
}
export interface CampaignCreateEncoded {
  readonly name: string;
  readonly objective: CampaignObjectiveEncoded;
  readonly configured_status: ConfiguredStatusEncoded;
  readonly funding_instrument_id: string;
  readonly spend_cap?: number;
  readonly goal_type?: GoalTypeEncoded;
  readonly app_id?: string;
  readonly start_time?: string;
  readonly end_time?: string;
  readonly invoice_label?: string;
}
export const CampaignCreate: Schema.Schema<CampaignCreate, CampaignCreateEncoded, never> = Schema.Struct({
  name: Schema.String,
  objective: Schema.suspend(() => CampaignObjective),
  configured_status: Schema.suspend(() => ConfiguredStatus),
  funding_instrument_id: Schema.String,
  spend_cap: Schema.optional(Schema.Number),
  goal_type: Schema.optional(Schema.suspend(() => GoalType)),
  app_id: Schema.optional(Schema.String),
  start_time: Schema.optional(Schema.String),
  end_time: Schema.optional(Schema.String),
  invoice_label: Schema.optional(Schema.String),
});

export type CampaignEffectiveStatus = unknown;
export type CampaignEffectiveStatusEncoded = unknown;
export const CampaignEffectiveStatus: Schema.Schema<CampaignEffectiveStatus, CampaignEffectiveStatusEncoded, never> = Schema.Unknown;

export type CampaignObjective = unknown;
export type CampaignObjectiveEncoded = unknown;
export const CampaignObjective: Schema.Schema<CampaignObjective, CampaignObjectiveEncoded, never> = Schema.Unknown;

export interface CampaignUpdate {
  readonly name?: string;
  readonly configured_status?: ConfiguredStatus;
  readonly spend_cap?: number;
  readonly goal_type?: GoalType;
  readonly start_time?: string;
  readonly end_time?: string;
  readonly invoice_label?: string;
}
export interface CampaignUpdateEncoded {
  readonly name?: string;
  readonly configured_status?: ConfiguredStatusEncoded;
  readonly spend_cap?: number;
  readonly goal_type?: GoalTypeEncoded;
  readonly start_time?: string;
  readonly end_time?: string;
  readonly invoice_label?: string;
}
export const CampaignUpdate: Schema.Schema<CampaignUpdate, CampaignUpdateEncoded, never> = Schema.Struct({
  name: Schema.optional(Schema.String),
  configured_status: Schema.optional(Schema.suspend(() => ConfiguredStatus)),
  spend_cap: Schema.optional(Schema.Number),
  goal_type: Schema.optional(Schema.suspend(() => GoalType)),
  start_time: Schema.optional(Schema.String),
  end_time: Schema.optional(Schema.String),
  invoice_label: Schema.optional(Schema.String),
});

export type ConfiguredStatus = unknown;
export type ConfiguredStatusEncoded = unknown;
export const ConfiguredStatus: Schema.Schema<ConfiguredStatus, ConfiguredStatusEncoded, never> = Schema.Unknown;

export interface ConversionEvent {
  readonly event_at: number;
  readonly action_source: ActionSource;
  readonly click_id?: string;
  readonly type: ConversionEventType;
  readonly user?: ConversionUser;
  readonly metadata?: ConversionMetadata;
}
export interface ConversionEventEncoded {
  readonly event_at: number;
  readonly action_source: ActionSourceEncoded;
  readonly click_id?: string;
  readonly type: ConversionEventTypeEncoded;
  readonly user?: ConversionUserEncoded;
  readonly metadata?: ConversionMetadataEncoded;
}
export const ConversionEvent: Schema.Schema<ConversionEvent, ConversionEventEncoded, never> = Schema.Struct({
  event_at: Schema.Number,
  action_source: Schema.suspend(() => ActionSource),
  click_id: Schema.optional(Schema.String),
  type: Schema.suspend(() => ConversionEventType),
  user: Schema.optional(Schema.suspend(() => ConversionUser)),
  metadata: Schema.optional(Schema.suspend(() => ConversionMetadata)),
});

export interface ConversionEventsRequest {
  readonly events: ReadonlyArray<ConversionEvent>;
}
export interface ConversionEventsRequestEncoded {
  readonly events: ReadonlyArray<ConversionEventEncoded>;
}
export const ConversionEventsRequest: Schema.Schema<ConversionEventsRequest, ConversionEventsRequestEncoded, never> = Schema.Struct({
  events: Schema.Array(Schema.suspend(() => ConversionEvent)),
});

export interface ConversionEventsResponse {
  readonly data?: Inline63;
}
export interface ConversionEventsResponseEncoded {
  readonly data?: Inline63Encoded;
}
export const ConversionEventsResponse: Schema.Schema<ConversionEventsResponse, ConversionEventsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => Inline63)),
});

export type ConversionEventType = unknown;
export type ConversionEventTypeEncoded = unknown;
export const ConversionEventType: Schema.Schema<ConversionEventType, ConversionEventTypeEncoded, never> = Schema.Unknown;

export type ConversionMetadata = unknown;
export type ConversionMetadataEncoded = unknown;
export const ConversionMetadata: Schema.Schema<ConversionMetadata, ConversionMetadataEncoded, never> = Schema.Unknown;

export type ConversionUser = unknown;
export type ConversionUserEncoded = unknown;
export const ConversionUser: Schema.Schema<ConversionUser, ConversionUserEncoded, never> = Schema.Unknown;

export interface CreateAdGroupParams {
  readonly accountId: string;
  readonly body: AdGroupCreate;
}
export interface CreateAdGroupParamsEncoded {
  readonly accountId: string;
  readonly body: AdGroupCreateEncoded;
}
export const CreateAdGroupParams: Schema.Schema<CreateAdGroupParams, CreateAdGroupParamsEncoded, never> = Schema.Struct({
  accountId: Schema.String,
  body: Schema.suspend(() => AdGroupCreate),
});

export interface CreateAdGroupResponse {
  readonly data: AdGroup;
}
export interface CreateAdGroupResponseEncoded {
  readonly data: AdGroupEncoded;
}
export const CreateAdGroupResponse: Schema.Schema<CreateAdGroupResponse, CreateAdGroupResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => AdGroup),
});

export interface CreateAdParams {
  readonly accountId: string;
  readonly body: AdCreate;
}
export interface CreateAdParamsEncoded {
  readonly accountId: string;
  readonly body: AdCreateEncoded;
}
export const CreateAdParams: Schema.Schema<CreateAdParams, CreateAdParamsEncoded, never> = Schema.Struct({
  accountId: Schema.String,
  body: Schema.suspend(() => AdCreate),
});

export interface CreateAdResponse {
  readonly data: Ad;
}
export interface CreateAdResponseEncoded {
  readonly data: AdEncoded;
}
export const CreateAdResponse: Schema.Schema<CreateAdResponse, CreateAdResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Ad),
});

export interface CreateCampaignParams {
  readonly accountId: string;
  readonly body: CampaignCreate;
}
export interface CreateCampaignParamsEncoded {
  readonly accountId: string;
  readonly body: CampaignCreateEncoded;
}
export const CreateCampaignParams: Schema.Schema<CreateCampaignParams, CreateCampaignParamsEncoded, never> = Schema.Struct({
  accountId: Schema.String,
  body: Schema.suspend(() => CampaignCreate),
});

export interface CreateCampaignResponse {
  readonly data: Campaign;
}
export interface CreateCampaignResponseEncoded {
  readonly data: CampaignEncoded;
}
export const CreateCampaignResponse: Schema.Schema<CreateCampaignResponse, CreateCampaignResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Campaign),
});

export interface CreateCustomAudienceParams {
  readonly accountId: string;
  readonly body: CustomAudienceCreate;
}
export interface CreateCustomAudienceParamsEncoded {
  readonly accountId: string;
  readonly body: CustomAudienceCreateEncoded;
}
export const CreateCustomAudienceParams: Schema.Schema<CreateCustomAudienceParams, CreateCustomAudienceParamsEncoded, never> = Schema.Struct({
  accountId: Schema.String,
  body: Schema.suspend(() => CustomAudienceCreate),
});

export interface CreateCustomAudienceResponse {
  readonly data: CustomAudience;
}
export interface CreateCustomAudienceResponseEncoded {
  readonly data: CustomAudienceEncoded;
}
export const CreateCustomAudienceResponse: Schema.Schema<CreateCustomAudienceResponse, CreateCustomAudienceResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => CustomAudience),
});

export interface CreateReportParams {
  readonly accountId: string;
  readonly body: ReportRequest;
}
export interface CreateReportParamsEncoded {
  readonly accountId: string;
  readonly body: ReportRequestEncoded;
}
export const CreateReportParams: Schema.Schema<CreateReportParams, CreateReportParamsEncoded, never> = Schema.Struct({
  accountId: Schema.String,
  body: Schema.suspend(() => ReportRequest),
});

export interface CreateReportResponse {
  readonly data: ReadonlyArray<ReportRow>;
}
export interface CreateReportResponseEncoded {
  readonly data: ReadonlyArray<ReportRowEncoded>;
}
export const CreateReportResponse: Schema.Schema<CreateReportResponse, CreateReportResponseEncoded, never> = Schema.Struct({
  data: Schema.Array(Schema.suspend(() => ReportRow)),
});

export interface CreateStructuredPostParams {
  readonly accountId: string;
  readonly body: StructuredPostCreate;
}
export interface CreateStructuredPostParamsEncoded {
  readonly accountId: string;
  readonly body: StructuredPostCreateEncoded;
}
export const CreateStructuredPostParams: Schema.Schema<CreateStructuredPostParams, CreateStructuredPostParamsEncoded, never> = Schema.Struct({
  accountId: Schema.String,
  body: Schema.suspend(() => StructuredPostCreate),
});

export interface CreateStructuredPostResponse {
  readonly data: StructuredPost;
}
export interface CreateStructuredPostResponseEncoded {
  readonly data: StructuredPostEncoded;
}
export const CreateStructuredPostResponse: Schema.Schema<CreateStructuredPostResponse, CreateStructuredPostResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => StructuredPost),
});

export type CustomAudience = unknown;
export type CustomAudienceEncoded = unknown;
export const CustomAudience: Schema.Schema<CustomAudience, CustomAudienceEncoded, never> = Schema.Unknown;

export interface CustomAudienceCreate {
  readonly name: string;
  readonly type: string;
}
export interface CustomAudienceCreateEncoded {
  readonly name: string;
  readonly type: string;
}
export const CustomAudienceCreate: Schema.Schema<CustomAudienceCreate, CustomAudienceCreateEncoded, never> = Schema.Struct({
  name: Schema.String,
  type: Schema.String,
});

export interface CustomAudienceUsersUpdate {
  readonly users: ReadonlyArray<Inline66>;
  readonly action: AudienceUserAction;
}
export interface CustomAudienceUsersUpdateEncoded {
  readonly users: ReadonlyArray<Inline66Encoded>;
  readonly action: AudienceUserActionEncoded;
}
export const CustomAudienceUsersUpdate: Schema.Schema<CustomAudienceUsersUpdate, CustomAudienceUsersUpdateEncoded, never> = Schema.Struct({
  users: Schema.Array(Schema.suspend(() => Inline66)),
  action: Schema.suspend(() => AudienceUserAction),
});

export interface DeleteCampaignParams {
  readonly accountId: string;
  readonly campaignId: string;
}
export interface DeleteCampaignParamsEncoded {
  readonly accountId: string;
  readonly campaignId: string;
}
export const DeleteCampaignParams: Schema.Schema<DeleteCampaignParams, DeleteCampaignParamsEncoded, never> = Schema.Struct({
  accountId: Schema.String,
  campaignId: Schema.String,
});

export interface DeleteCampaignResponse {

}
export interface DeleteCampaignResponseEncoded {

}
export const DeleteCampaignResponse: Schema.Schema<DeleteCampaignResponse, DeleteCampaignResponseEncoded, never> = Schema.Struct({

});

export type FundingInstrument = unknown;
export type FundingInstrumentEncoded = unknown;
export const FundingInstrument: Schema.Schema<FundingInstrument, FundingInstrumentEncoded, never> = Schema.Unknown;

export interface Geolocation {
  readonly country?: string;
  readonly region?: string;
  readonly city?: string;
  readonly dma?: string;
  readonly postal_code?: string;
}
export interface GeolocationEncoded {
  readonly country?: string;
  readonly region?: string;
  readonly city?: string;
  readonly dma?: string;
  readonly postal_code?: string;
}
export const Geolocation: Schema.Schema<Geolocation, GeolocationEncoded, never> = Schema.Struct({
  country: Schema.optional(Schema.String),
  region: Schema.optional(Schema.String),
  city: Schema.optional(Schema.String),
  dma: Schema.optional(Schema.String),
  postal_code: Schema.optional(Schema.String),
});

export interface GeolocationValidateRequest {
  readonly geolocations?: ReadonlyArray<Geolocation>;
}
export interface GeolocationValidateRequestEncoded {
  readonly geolocations?: ReadonlyArray<GeolocationEncoded>;
}
export const GeolocationValidateRequest: Schema.Schema<GeolocationValidateRequest, GeolocationValidateRequestEncoded, never> = Schema.Struct({
  geolocations: Schema.optional(Schema.Array(Schema.suspend(() => Geolocation))),
});

export interface GetAccountParams {
  readonly accountId: string;
}
export interface GetAccountParamsEncoded {
  readonly accountId: string;
}
export const GetAccountParams: Schema.Schema<GetAccountParams, GetAccountParamsEncoded, never> = Schema.Struct({
  accountId: Schema.String,
});

export interface GetAccountResponse {
  readonly data: Account;
}
export interface GetAccountResponseEncoded {
  readonly data: AccountEncoded;
}
export const GetAccountResponse: Schema.Schema<GetAccountResponse, GetAccountResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Account),
});

export interface GetAdGroupParams {
  readonly accountId: string;
  readonly adGroupId: string;
}
export interface GetAdGroupParamsEncoded {
  readonly accountId: string;
  readonly adGroupId: string;
}
export const GetAdGroupParams: Schema.Schema<GetAdGroupParams, GetAdGroupParamsEncoded, never> = Schema.Struct({
  accountId: Schema.String,
  adGroupId: Schema.String,
});

export interface GetAdGroupResponse {
  readonly data: AdGroup;
}
export interface GetAdGroupResponseEncoded {
  readonly data: AdGroupEncoded;
}
export const GetAdGroupResponse: Schema.Schema<GetAdGroupResponse, GetAdGroupResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => AdGroup),
});

export interface GetAdParams {
  readonly accountId: string;
  readonly adId: string;
}
export interface GetAdParamsEncoded {
  readonly accountId: string;
  readonly adId: string;
}
export const GetAdParams: Schema.Schema<GetAdParams, GetAdParamsEncoded, never> = Schema.Struct({
  accountId: Schema.String,
  adId: Schema.String,
});

export interface GetAdResponse {
  readonly data: Ad;
}
export interface GetAdResponseEncoded {
  readonly data: AdEncoded;
}
export const GetAdResponse: Schema.Schema<GetAdResponse, GetAdResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Ad),
});

export interface GetBidSuggestionParams {
  readonly accountId: string;
  readonly body: BidSuggestionRequest;
}
export interface GetBidSuggestionParamsEncoded {
  readonly accountId: string;
  readonly body: BidSuggestionRequestEncoded;
}
export const GetBidSuggestionParams: Schema.Schema<GetBidSuggestionParams, GetBidSuggestionParamsEncoded, never> = Schema.Struct({
  accountId: Schema.String,
  body: Schema.suspend(() => BidSuggestionRequest),
});

export interface GetBidSuggestionResponse {
  readonly data: BidSuggestion;
}
export interface GetBidSuggestionResponseEncoded {
  readonly data: BidSuggestionEncoded;
}
export const GetBidSuggestionResponse: Schema.Schema<GetBidSuggestionResponse, GetBidSuggestionResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => BidSuggestion),
});

export interface GetCampaignParams {
  readonly accountId: string;
  readonly campaignId: string;
}
export interface GetCampaignParamsEncoded {
  readonly accountId: string;
  readonly campaignId: string;
}
export const GetCampaignParams: Schema.Schema<GetCampaignParams, GetCampaignParamsEncoded, never> = Schema.Struct({
  accountId: Schema.String,
  campaignId: Schema.String,
});

export interface GetCampaignResponse {
  readonly data: Campaign;
}
export interface GetCampaignResponseEncoded {
  readonly data: CampaignEncoded;
}
export const GetCampaignResponse: Schema.Schema<GetCampaignResponse, GetCampaignResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Campaign),
});

export interface GetCustomAudienceParams {
  readonly accountId: string;
  readonly audienceId: string;
}
export interface GetCustomAudienceParamsEncoded {
  readonly accountId: string;
  readonly audienceId: string;
}
export const GetCustomAudienceParams: Schema.Schema<GetCustomAudienceParams, GetCustomAudienceParamsEncoded, never> = Schema.Struct({
  accountId: Schema.String,
  audienceId: Schema.String,
});

export interface GetCustomAudienceResponse {
  readonly data: CustomAudience;
}
export interface GetCustomAudienceResponseEncoded {
  readonly data: CustomAudienceEncoded;
}
export const GetCustomAudienceResponse: Schema.Schema<GetCustomAudienceResponse, GetCustomAudienceResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => CustomAudience),
});

export interface GetMeParams {

}
export interface GetMeParamsEncoded {

}
export const GetMeParams: Schema.Schema<GetMeParams, GetMeParamsEncoded, never> = Schema.Struct({

});

export interface GetMeResponse {
  readonly data: User;
}
export interface GetMeResponseEncoded {
  readonly data: UserEncoded;
}
export const GetMeResponse: Schema.Schema<GetMeResponse, GetMeResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => User),
});

export interface GetPixelAppLastFiredAtParams {
  readonly pixelId: string;
}
export interface GetPixelAppLastFiredAtParamsEncoded {
  readonly pixelId: string;
}
export const GetPixelAppLastFiredAtParams: Schema.Schema<GetPixelAppLastFiredAtParams, GetPixelAppLastFiredAtParamsEncoded, never> = Schema.Struct({
  pixelId: Schema.String,
});

export interface GetPixelAppLastFiredAtResponse {
  readonly data: Inline139;
}
export interface GetPixelAppLastFiredAtResponseEncoded {
  readonly data: Inline139Encoded;
}
export const GetPixelAppLastFiredAtResponse: Schema.Schema<GetPixelAppLastFiredAtResponse, GetPixelAppLastFiredAtResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline139),
});

export interface GetPixelLastFiredAtParams {
  readonly pixelId: string;
}
export interface GetPixelLastFiredAtParamsEncoded {
  readonly pixelId: string;
}
export const GetPixelLastFiredAtParams: Schema.Schema<GetPixelLastFiredAtParams, GetPixelLastFiredAtParamsEncoded, never> = Schema.Struct({
  pixelId: Schema.String,
});

export interface GetPixelLastFiredAtResponse {
  readonly data: Inline144;
}
export interface GetPixelLastFiredAtResponseEncoded {
  readonly data: Inline144Encoded;
}
export const GetPixelLastFiredAtResponse: Schema.Schema<GetPixelLastFiredAtResponse, GetPixelLastFiredAtResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline144),
});

export interface GetSavedAudienceParams {
  readonly accountId: string;
  readonly audienceId: string;
}
export interface GetSavedAudienceParamsEncoded {
  readonly accountId: string;
  readonly audienceId: string;
}
export const GetSavedAudienceParams: Schema.Schema<GetSavedAudienceParams, GetSavedAudienceParamsEncoded, never> = Schema.Struct({
  accountId: Schema.String,
  audienceId: Schema.String,
});

export interface GetSavedAudienceResponse {
  readonly data: SavedAudience;
}
export interface GetSavedAudienceResponseEncoded {
  readonly data: SavedAudienceEncoded;
}
export const GetSavedAudienceResponse: Schema.Schema<GetSavedAudienceResponse, GetSavedAudienceResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => SavedAudience),
});

export type GoalType = unknown;
export type GoalTypeEncoded = unknown;
export const GoalType: Schema.Schema<GoalType, GoalTypeEncoded, never> = Schema.Unknown;

export type IdentifierType = unknown;
export type IdentifierTypeEncoded = unknown;
export const IdentifierType: Schema.Schema<IdentifierType, IdentifierTypeEncoded, never> = Schema.Unknown;

export interface Inline134 {
  readonly message?: string;
}
export interface Inline134Encoded {
  readonly message?: string;
}
export const Inline134: Schema.Schema<Inline134, Inline134Encoded, never> = Schema.Struct({
  message: Schema.optional(Schema.String),
});

export interface Inline139 {
  readonly last_fired_at?: string;
}
export interface Inline139Encoded {
  readonly last_fired_at?: string;
}
export const Inline139: Schema.Schema<Inline139, Inline139Encoded, never> = Schema.Struct({
  last_fired_at: Schema.optional(Schema.String),
});

export interface Inline144 {
  readonly last_fired_at?: string;
}
export interface Inline144Encoded {
  readonly last_fired_at?: string;
}
export const Inline144: Schema.Schema<Inline144, Inline144Encoded, never> = Schema.Struct({
  last_fired_at: Schema.optional(Schema.String),
});

export interface Inline147 {

}
export interface Inline147Encoded {

}
export const Inline147: Schema.Schema<Inline147, Inline147Encoded, never> = Schema.Struct({

});

export interface Inline150 {

}
export interface Inline150Encoded {

}
export const Inline150: Schema.Schema<Inline150, Inline150Encoded, never> = Schema.Struct({

});

export interface Inline153 {

}
export interface Inline153Encoded {

}
export const Inline153: Schema.Schema<Inline153, Inline153Encoded, never> = Schema.Struct({

});

export interface Inline156 {

}
export interface Inline156Encoded {

}
export const Inline156: Schema.Schema<Inline156, Inline156Encoded, never> = Schema.Struct({

});

export interface Inline159 {

}
export interface Inline159Encoded {

}
export const Inline159: Schema.Schema<Inline159, Inline159Encoded, never> = Schema.Struct({

});

export interface Inline162 {

}
export interface Inline162Encoded {

}
export const Inline162: Schema.Schema<Inline162, Inline162Encoded, never> = Schema.Struct({

});

export interface Inline33 {

}
export interface Inline33Encoded {

}
export const Inline33: Schema.Schema<Inline33, Inline33Encoded, never> = Schema.Struct({

});

export interface Inline35 {
  readonly last_fired_at?: string;
}
export interface Inline35Encoded {
  readonly last_fired_at?: string;
}
export const Inline35: Schema.Schema<Inline35, Inline35Encoded, never> = Schema.Struct({
  last_fired_at: Schema.optional(Schema.String),
});

export interface Inline47 {
  readonly message?: string;
}
export interface Inline47Encoded {
  readonly message?: string;
}
export const Inline47: Schema.Schema<Inline47, Inline47Encoded, never> = Schema.Struct({
  message: Schema.optional(Schema.String),
});

export interface Inline49 {

}
export interface Inline49Encoded {

}
export const Inline49: Schema.Schema<Inline49, Inline49Encoded, never> = Schema.Struct({

});

export interface Inline63 {
  readonly message?: string;
}
export interface Inline63Encoded {
  readonly message?: string;
}
export const Inline63: Schema.Schema<Inline63, Inline63Encoded, never> = Schema.Struct({
  message: Schema.optional(Schema.String),
});

export interface Inline66 {
  readonly identifier_type: IdentifierType;
  readonly identifier: string;
}
export interface Inline66Encoded {
  readonly identifier_type: IdentifierTypeEncoded;
  readonly identifier: string;
}
export const Inline66: Schema.Schema<Inline66, Inline66Encoded, never> = Schema.Struct({
  identifier_type: Schema.suspend(() => IdentifierType),
  identifier: Schema.String,
});

export interface ListAccountsParams {

}
export interface ListAccountsParamsEncoded {

}
export const ListAccountsParams: Schema.Schema<ListAccountsParams, ListAccountsParamsEncoded, never> = Schema.Struct({

});

export interface ListAccountsResponse {
  readonly data: ReadonlyArray<Account>;
}
export interface ListAccountsResponseEncoded {
  readonly data: ReadonlyArray<AccountEncoded>;
}
export const ListAccountsResponse: Schema.Schema<ListAccountsResponse, ListAccountsResponseEncoded, never> = Schema.Struct({
  data: Schema.Array(Schema.suspend(() => Account)),
});

export interface ListAdGroupsParams {
  readonly accountId: string;
  readonly campaignId?: string;
}
export interface ListAdGroupsParamsEncoded {
  readonly accountId: string;
  readonly campaignId?: string;
}
export const ListAdGroupsParams: Schema.Schema<ListAdGroupsParams, ListAdGroupsParamsEncoded, never> = Schema.Struct({
  accountId: Schema.String,
  campaignId: Schema.optional(Schema.String),
});

export interface ListAdGroupsResponse {
  readonly data: ReadonlyArray<AdGroup>;
}
export interface ListAdGroupsResponseEncoded {
  readonly data: ReadonlyArray<AdGroupEncoded>;
}
export const ListAdGroupsResponse: Schema.Schema<ListAdGroupsResponse, ListAdGroupsResponseEncoded, never> = Schema.Struct({
  data: Schema.Array(Schema.suspend(() => AdGroup)),
});

export interface ListAdsParams {
  readonly accountId: string;
  readonly adGroupId?: string;
}
export interface ListAdsParamsEncoded {
  readonly accountId: string;
  readonly adGroupId?: string;
}
export const ListAdsParams: Schema.Schema<ListAdsParams, ListAdsParamsEncoded, never> = Schema.Struct({
  accountId: Schema.String,
  adGroupId: Schema.optional(Schema.String),
});

export interface ListAdsResponse {
  readonly data: ReadonlyArray<Ad>;
}
export interface ListAdsResponseEncoded {
  readonly data: ReadonlyArray<AdEncoded>;
}
export const ListAdsResponse: Schema.Schema<ListAdsResponse, ListAdsResponseEncoded, never> = Schema.Struct({
  data: Schema.Array(Schema.suspend(() => Ad)),
});

export interface ListCampaignsParams {
  readonly accountId: string;
}
export interface ListCampaignsParamsEncoded {
  readonly accountId: string;
}
export const ListCampaignsParams: Schema.Schema<ListCampaignsParams, ListCampaignsParamsEncoded, never> = Schema.Struct({
  accountId: Schema.String,
});

export interface ListCampaignsResponse {
  readonly data: ReadonlyArray<Campaign>;
}
export interface ListCampaignsResponseEncoded {
  readonly data: ReadonlyArray<CampaignEncoded>;
}
export const ListCampaignsResponse: Schema.Schema<ListCampaignsResponse, ListCampaignsResponseEncoded, never> = Schema.Struct({
  data: Schema.Array(Schema.suspend(() => Campaign)),
});

export interface ListCustomAudiencesParams {
  readonly accountId: string;
}
export interface ListCustomAudiencesParamsEncoded {
  readonly accountId: string;
}
export const ListCustomAudiencesParams: Schema.Schema<ListCustomAudiencesParams, ListCustomAudiencesParamsEncoded, never> = Schema.Struct({
  accountId: Schema.String,
});

export interface ListCustomAudiencesResponse {
  readonly data: ReadonlyArray<CustomAudience>;
}
export interface ListCustomAudiencesResponseEncoded {
  readonly data: ReadonlyArray<CustomAudienceEncoded>;
}
export const ListCustomAudiencesResponse: Schema.Schema<ListCustomAudiencesResponse, ListCustomAudiencesResponseEncoded, never> = Schema.Struct({
  data: Schema.Array(Schema.suspend(() => CustomAudience)),
});

export interface ListFundingInstrumentsByAccountParams {
  readonly accountId: string;
}
export interface ListFundingInstrumentsByAccountParamsEncoded {
  readonly accountId: string;
}
export const ListFundingInstrumentsByAccountParams: Schema.Schema<ListFundingInstrumentsByAccountParams, ListFundingInstrumentsByAccountParamsEncoded, never> = Schema.Struct({
  accountId: Schema.String,
});

export interface ListFundingInstrumentsByAccountResponse {
  readonly data: ReadonlyArray<FundingInstrument>;
}
export interface ListFundingInstrumentsByAccountResponseEncoded {
  readonly data: ReadonlyArray<FundingInstrumentEncoded>;
}
export const ListFundingInstrumentsByAccountResponse: Schema.Schema<ListFundingInstrumentsByAccountResponse, ListFundingInstrumentsByAccountResponseEncoded, never> = Schema.Struct({
  data: Schema.Array(Schema.suspend(() => FundingInstrument)),
});

export interface ListFundingInstrumentsByBusinessParams {
  readonly businessId: string;
}
export interface ListFundingInstrumentsByBusinessParamsEncoded {
  readonly businessId: string;
}
export const ListFundingInstrumentsByBusinessParams: Schema.Schema<ListFundingInstrumentsByBusinessParams, ListFundingInstrumentsByBusinessParamsEncoded, never> = Schema.Struct({
  businessId: Schema.String,
});

export interface ListFundingInstrumentsByBusinessResponse {
  readonly data: ReadonlyArray<FundingInstrument>;
}
export interface ListFundingInstrumentsByBusinessResponseEncoded {
  readonly data: ReadonlyArray<FundingInstrumentEncoded>;
}
export const ListFundingInstrumentsByBusinessResponse: Schema.Schema<ListFundingInstrumentsByBusinessResponse, ListFundingInstrumentsByBusinessResponseEncoded, never> = Schema.Struct({
  data: Schema.Array(Schema.suspend(() => FundingInstrument)),
});

export interface ListGeolocationsParams {

}
export interface ListGeolocationsParamsEncoded {

}
export const ListGeolocationsParams: Schema.Schema<ListGeolocationsParams, ListGeolocationsParamsEncoded, never> = Schema.Struct({

});

export interface ListGeolocationsResponse {
  readonly data: ReadonlyArray<Inline156>;
}
export interface ListGeolocationsResponseEncoded {
  readonly data: ReadonlyArray<Inline156Encoded>;
}
export const ListGeolocationsResponse: Schema.Schema<ListGeolocationsResponse, ListGeolocationsResponseEncoded, never> = Schema.Struct({
  data: Schema.Array(Schema.suspend(() => Inline156)),
});

export interface ListPixelsByAccountParams {
  readonly accountId: string;
}
export interface ListPixelsByAccountParamsEncoded {
  readonly accountId: string;
}
export const ListPixelsByAccountParams: Schema.Schema<ListPixelsByAccountParams, ListPixelsByAccountParamsEncoded, never> = Schema.Struct({
  accountId: Schema.String,
});

export interface ListPixelsByAccountResponse {
  readonly data: ReadonlyArray<Pixel>;
}
export interface ListPixelsByAccountResponseEncoded {
  readonly data: ReadonlyArray<PixelEncoded>;
}
export const ListPixelsByAccountResponse: Schema.Schema<ListPixelsByAccountResponse, ListPixelsByAccountResponseEncoded, never> = Schema.Struct({
  data: Schema.Array(Schema.suspend(() => Pixel)),
});

export interface ListPixelsByBusinessParams {
  readonly businessId: string;
}
export interface ListPixelsByBusinessParamsEncoded {
  readonly businessId: string;
}
export const ListPixelsByBusinessParams: Schema.Schema<ListPixelsByBusinessParams, ListPixelsByBusinessParamsEncoded, never> = Schema.Struct({
  businessId: Schema.String,
});

export interface ListPixelsByBusinessResponse {
  readonly data: ReadonlyArray<Pixel>;
}
export interface ListPixelsByBusinessResponseEncoded {
  readonly data: ReadonlyArray<PixelEncoded>;
}
export const ListPixelsByBusinessResponse: Schema.Schema<ListPixelsByBusinessResponse, ListPixelsByBusinessResponseEncoded, never> = Schema.Struct({
  data: Schema.Array(Schema.suspend(() => Pixel)),
});

export interface ListSavedAudiencesParams {
  readonly accountId: string;
}
export interface ListSavedAudiencesParamsEncoded {
  readonly accountId: string;
}
export const ListSavedAudiencesParams: Schema.Schema<ListSavedAudiencesParams, ListSavedAudiencesParamsEncoded, never> = Schema.Struct({
  accountId: Schema.String,
});

export interface ListSavedAudiencesResponse {
  readonly data: ReadonlyArray<SavedAudience>;
}
export interface ListSavedAudiencesResponseEncoded {
  readonly data: ReadonlyArray<SavedAudienceEncoded>;
}
export const ListSavedAudiencesResponse: Schema.Schema<ListSavedAudiencesResponse, ListSavedAudiencesResponseEncoded, never> = Schema.Struct({
  data: Schema.Array(Schema.suspend(() => SavedAudience)),
});

export interface ListStructuredPostsParams {
  readonly accountId: string;
}
export interface ListStructuredPostsParamsEncoded {
  readonly accountId: string;
}
export const ListStructuredPostsParams: Schema.Schema<ListStructuredPostsParams, ListStructuredPostsParamsEncoded, never> = Schema.Struct({
  accountId: Schema.String,
});

export interface ListStructuredPostsResponse {
  readonly data: ReadonlyArray<StructuredPost>;
}
export interface ListStructuredPostsResponseEncoded {
  readonly data: ReadonlyArray<StructuredPostEncoded>;
}
export const ListStructuredPostsResponse: Schema.Schema<ListStructuredPostsResponse, ListStructuredPostsResponseEncoded, never> = Schema.Struct({
  data: Schema.Array(Schema.suspend(() => StructuredPost)),
});

export interface ListTargetingCarriersParams {

}
export interface ListTargetingCarriersParamsEncoded {

}
export const ListTargetingCarriersParams: Schema.Schema<ListTargetingCarriersParams, ListTargetingCarriersParamsEncoded, never> = Schema.Struct({

});

export interface ListTargetingCarriersResponse {
  readonly data: ReadonlyArray<Inline147>;
}
export interface ListTargetingCarriersResponseEncoded {
  readonly data: ReadonlyArray<Inline147Encoded>;
}
export const ListTargetingCarriersResponse: Schema.Schema<ListTargetingCarriersResponse, ListTargetingCarriersResponseEncoded, never> = Schema.Struct({
  data: Schema.Array(Schema.suspend(() => Inline147)),
});

export interface ListTargetingCommunitiesParams {
  readonly q?: string;
}
export interface ListTargetingCommunitiesParamsEncoded {
  readonly q?: string;
}
export const ListTargetingCommunitiesParams: Schema.Schema<ListTargetingCommunitiesParams, ListTargetingCommunitiesParamsEncoded, never> = Schema.Struct({
  q: Schema.optional(Schema.String),
});

export interface ListTargetingCommunitiesResponse {
  readonly data: ReadonlyArray<Inline150>;
}
export interface ListTargetingCommunitiesResponseEncoded {
  readonly data: ReadonlyArray<Inline150Encoded>;
}
export const ListTargetingCommunitiesResponse: Schema.Schema<ListTargetingCommunitiesResponse, ListTargetingCommunitiesResponseEncoded, never> = Schema.Struct({
  data: Schema.Array(Schema.suspend(() => Inline150)),
});

export interface ListTargetingDevicesParams {

}
export interface ListTargetingDevicesParamsEncoded {

}
export const ListTargetingDevicesParams: Schema.Schema<ListTargetingDevicesParams, ListTargetingDevicesParamsEncoded, never> = Schema.Struct({

});

export interface ListTargetingDevicesResponse {
  readonly data: ReadonlyArray<Inline153>;
}
export interface ListTargetingDevicesResponseEncoded {
  readonly data: ReadonlyArray<Inline153Encoded>;
}
export const ListTargetingDevicesResponse: Schema.Schema<ListTargetingDevicesResponse, ListTargetingDevicesResponseEncoded, never> = Schema.Struct({
  data: Schema.Array(Schema.suspend(() => Inline153)),
});

export interface ListTargetingInterestsParams {

}
export interface ListTargetingInterestsParamsEncoded {

}
export const ListTargetingInterestsParams: Schema.Schema<ListTargetingInterestsParams, ListTargetingInterestsParamsEncoded, never> = Schema.Struct({

});

export interface ListTargetingInterestsResponse {
  readonly data: ReadonlyArray<Inline162>;
}
export interface ListTargetingInterestsResponseEncoded {
  readonly data: ReadonlyArray<Inline162Encoded>;
}
export const ListTargetingInterestsResponse: Schema.Schema<ListTargetingInterestsResponse, ListTargetingInterestsResponseEncoded, never> = Schema.Struct({
  data: Schema.Array(Schema.suspend(() => Inline162)),
});

export type OptimizationGoal = unknown;
export type OptimizationGoalEncoded = unknown;
export const OptimizationGoal: Schema.Schema<OptimizationGoal, OptimizationGoalEncoded, never> = Schema.Unknown;

export type Pixel = unknown;
export type PixelEncoded = unknown;
export const Pixel: Schema.Schema<Pixel, PixelEncoded, never> = Schema.Unknown;

export interface PostConversionEventsParams {
  readonly pixelId: string;
  readonly body: ConversionEventsRequest;
}
export interface PostConversionEventsParamsEncoded {
  readonly pixelId: string;
  readonly body: ConversionEventsRequestEncoded;
}
export const PostConversionEventsParams: Schema.Schema<PostConversionEventsParams, PostConversionEventsParamsEncoded, never> = Schema.Struct({
  pixelId: Schema.String,
  body: Schema.suspend(() => ConversionEventsRequest),
});

export interface PostConversionEventsResponse {
  readonly data: ConversionEventsResponse;
}
export interface PostConversionEventsResponseEncoded {
  readonly data: ConversionEventsResponseEncoded;
}
export const PostConversionEventsResponse: Schema.Schema<PostConversionEventsResponse, PostConversionEventsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => ConversionEventsResponse),
});

export type ReportLevel = string;
export type ReportLevelEncoded = string;
export const ReportLevel: Schema.Schema<ReportLevel, ReportLevelEncoded, never> = Schema.String;

export interface ReportRequest {
  readonly start_date: string;
  readonly end_date: string;
  readonly level: ReportLevel;
  readonly metrics: ReadonlyArray<string>;
  readonly breakdowns?: ReadonlyArray<string>;
}
export interface ReportRequestEncoded {
  readonly start_date: string;
  readonly end_date: string;
  readonly level: ReportLevelEncoded;
  readonly metrics: ReadonlyArray<string>;
  readonly breakdowns?: ReadonlyArray<string>;
}
export const ReportRequest: Schema.Schema<ReportRequest, ReportRequestEncoded, never> = Schema.Struct({
  start_date: Schema.String,
  end_date: Schema.String,
  level: Schema.suspend(() => ReportLevel),
  metrics: Schema.Array(Schema.String),
  breakdowns: Schema.optional(Schema.Array(Schema.String)),
});

export type ReportRow = unknown;
export type ReportRowEncoded = unknown;
export const ReportRow: Schema.Schema<ReportRow, ReportRowEncoded, never> = Schema.Unknown;

export type SavedAudience = unknown;
export type SavedAudienceEncoded = unknown;
export const SavedAudience: Schema.Schema<SavedAudience, SavedAudienceEncoded, never> = Schema.Unknown;

export type StructuredPost = unknown;
export type StructuredPostEncoded = unknown;
export const StructuredPost: Schema.Schema<StructuredPost, StructuredPostEncoded, never> = Schema.Unknown;

export interface StructuredPostCreate {

}
export interface StructuredPostCreateEncoded {

}
export const StructuredPostCreate: Schema.Schema<StructuredPostCreate, StructuredPostCreateEncoded, never> = Schema.Struct({

});

export type Targeting = unknown;
export type TargetingEncoded = unknown;
export const Targeting: Schema.Schema<Targeting, TargetingEncoded, never> = Schema.Unknown;

export type TrackingType = string;
export type TrackingTypeEncoded = string;
export const TrackingType: Schema.Schema<TrackingType, TrackingTypeEncoded, never> = Schema.String;

export interface UpdateAccountParams {
  readonly accountId: string;
  readonly body: AccountUpdate;
}
export interface UpdateAccountParamsEncoded {
  readonly accountId: string;
  readonly body: AccountUpdateEncoded;
}
export const UpdateAccountParams: Schema.Schema<UpdateAccountParams, UpdateAccountParamsEncoded, never> = Schema.Struct({
  accountId: Schema.String,
  body: Schema.suspend(() => AccountUpdate),
});

export interface UpdateAccountResponse {
  readonly data: Account;
}
export interface UpdateAccountResponseEncoded {
  readonly data: AccountEncoded;
}
export const UpdateAccountResponse: Schema.Schema<UpdateAccountResponse, UpdateAccountResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Account),
});

export interface UpdateAdGroupParams {
  readonly accountId: string;
  readonly adGroupId: string;
  readonly body: AdGroupUpdate;
}
export interface UpdateAdGroupParamsEncoded {
  readonly accountId: string;
  readonly adGroupId: string;
  readonly body: AdGroupUpdateEncoded;
}
export const UpdateAdGroupParams: Schema.Schema<UpdateAdGroupParams, UpdateAdGroupParamsEncoded, never> = Schema.Struct({
  accountId: Schema.String,
  adGroupId: Schema.String,
  body: Schema.suspend(() => AdGroupUpdate),
});

export interface UpdateAdGroupResponse {
  readonly data: AdGroup;
}
export interface UpdateAdGroupResponseEncoded {
  readonly data: AdGroupEncoded;
}
export const UpdateAdGroupResponse: Schema.Schema<UpdateAdGroupResponse, UpdateAdGroupResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => AdGroup),
});

export interface UpdateAdParams {
  readonly accountId: string;
  readonly adId: string;
  readonly body: AdUpdate;
}
export interface UpdateAdParamsEncoded {
  readonly accountId: string;
  readonly adId: string;
  readonly body: AdUpdateEncoded;
}
export const UpdateAdParams: Schema.Schema<UpdateAdParams, UpdateAdParamsEncoded, never> = Schema.Struct({
  accountId: Schema.String,
  adId: Schema.String,
  body: Schema.suspend(() => AdUpdate),
});

export interface UpdateAdResponse {
  readonly data: Ad;
}
export interface UpdateAdResponseEncoded {
  readonly data: AdEncoded;
}
export const UpdateAdResponse: Schema.Schema<UpdateAdResponse, UpdateAdResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Ad),
});

export interface UpdateCampaignParams {
  readonly accountId: string;
  readonly campaignId: string;
  readonly body: CampaignUpdate;
}
export interface UpdateCampaignParamsEncoded {
  readonly accountId: string;
  readonly campaignId: string;
  readonly body: CampaignUpdateEncoded;
}
export const UpdateCampaignParams: Schema.Schema<UpdateCampaignParams, UpdateCampaignParamsEncoded, never> = Schema.Struct({
  accountId: Schema.String,
  campaignId: Schema.String,
  body: Schema.suspend(() => CampaignUpdate),
});

export interface UpdateCampaignResponse {
  readonly data: Campaign;
}
export interface UpdateCampaignResponseEncoded {
  readonly data: CampaignEncoded;
}
export const UpdateCampaignResponse: Schema.Schema<UpdateCampaignResponse, UpdateCampaignResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Campaign),
});

export interface UpdateCustomAudienceUsersParams {
  readonly audienceId: string;
  readonly body: CustomAudienceUsersUpdate;
}
export interface UpdateCustomAudienceUsersParamsEncoded {
  readonly audienceId: string;
  readonly body: CustomAudienceUsersUpdateEncoded;
}
export const UpdateCustomAudienceUsersParams: Schema.Schema<UpdateCustomAudienceUsersParams, UpdateCustomAudienceUsersParamsEncoded, never> = Schema.Struct({
  audienceId: Schema.String,
  body: Schema.suspend(() => CustomAudienceUsersUpdate),
});

export interface UpdateCustomAudienceUsersResponse {
  readonly data: Inline134;
}
export interface UpdateCustomAudienceUsersResponseEncoded {
  readonly data: Inline134Encoded;
}
export const UpdateCustomAudienceUsersResponse: Schema.Schema<UpdateCustomAudienceUsersResponse, UpdateCustomAudienceUsersResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline134),
});

export type User = unknown;
export type UserEncoded = unknown;
export const User: Schema.Schema<User, UserEncoded, never> = Schema.Unknown;

export interface ValidateGeolocationsParams {
  readonly body: GeolocationValidateRequest;
}
export interface ValidateGeolocationsParamsEncoded {
  readonly body: GeolocationValidateRequestEncoded;
}
export const ValidateGeolocationsParams: Schema.Schema<ValidateGeolocationsParams, ValidateGeolocationsParamsEncoded, never> = Schema.Struct({
  body: Schema.suspend(() => GeolocationValidateRequest),
});

export interface ValidateGeolocationsResponse {
  readonly data: Inline159;
}
export interface ValidateGeolocationsResponseEncoded {
  readonly data: Inline159Encoded;
}
export const ValidateGeolocationsResponse: Schema.Schema<ValidateGeolocationsResponse, ValidateGeolocationsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline159),
});
