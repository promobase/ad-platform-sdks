// This file is generated. Do not edit by hand.
import * as v from "valibot";

export type Account = {
  readonly id?: string;
  readonly name?: string;
  readonly attribution_type?: string;
  readonly click_attribution_window?: string;
  readonly view_attribution_window?: string;
  readonly currency?: string;
  readonly status?: string;
  readonly time_zone_id?: string;
  readonly created_at?: string;
};
export const AccountSchema: v.GenericSchema<unknown, Account> = v.looseObject({
  id: v.optional(v.string()),
  name: v.optional(v.string()),
  attribution_type: v.optional(v.string()),
  click_attribution_window: v.optional(v.string()),
  view_attribution_window: v.optional(v.string()),
  currency: v.optional(v.string()),
  status: v.optional(v.string()),
  time_zone_id: v.optional(v.string()),
  created_at: v.optional(v.string()),
});

export type AccountUpdate = {
  readonly attribution_type?: string;
  readonly click_attribution_window?: string;
  readonly view_attribution_window?: string;
};
export const AccountUpdateSchema: v.GenericSchema<unknown, AccountUpdate> = v.looseObject({
  attribution_type: v.optional(v.string()),
  click_attribution_window: v.optional(v.string()),
  view_attribution_window: v.optional(v.string()),
});

export type ActionSource = string;
export const ActionSourceSchema: v.GenericSchema<unknown, ActionSource> = v.string();

export type Ad = {
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
};
export const AdSchema: v.GenericSchema<unknown, Ad> = v.looseObject({
  id: v.optional(v.string()),
  account_id: v.optional(v.string()),
  campaign_id: v.optional(v.string()),
  ad_group_id: v.optional(v.string()),
  name: v.optional(v.string()),
  configured_status: v.optional(v.lazy(() => ConfiguredStatusSchema)),
  effective_status: v.optional(v.lazy(() => AdEffectiveStatusSchema)),
  post_id: v.optional(v.string()),
  click_url: v.optional(v.string()),
  click_url_query_parameters: v.optional(v.string()),
  preview_expiry: v.optional(v.string()),
  delivery_status: v.optional(v.string()),
  created_at: v.optional(v.string()),
});

export type AdCreate = {
  readonly ad_group_id: string;
  readonly name: string;
  readonly configured_status: ConfiguredStatus;
  readonly post_id?: string;
  readonly click_url: string;
  readonly click_url_query_parameters?: string;
  readonly call_to_action?: CallToAction;
};
export const AdCreateSchema: v.GenericSchema<unknown, AdCreate> = v.looseObject({
  ad_group_id: v.string(),
  name: v.string(),
  configured_status: v.lazy(() => ConfiguredStatusSchema),
  post_id: v.optional(v.string()),
  click_url: v.string(),
  click_url_query_parameters: v.optional(v.string()),
  call_to_action: v.optional(v.lazy(() => CallToActionSchema)),
});

export type AdEffectiveStatus = unknown;
export const AdEffectiveStatusSchema: v.GenericSchema<unknown, AdEffectiveStatus> = v.unknown();

export type AdGroup = {
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
};
export const AdGroupSchema: v.GenericSchema<unknown, AdGroup> = v.looseObject({
  id: v.optional(v.string()),
  account_id: v.optional(v.string()),
  campaign_id: v.optional(v.string()),
  name: v.optional(v.string()),
  configured_status: v.optional(v.lazy(() => ConfiguredStatusSchema)),
  effective_status: v.optional(v.lazy(() => CampaignEffectiveStatusSchema)),
  bid_strategy: v.optional(v.lazy(() => BidStrategySchema)),
  bid_value: v.optional(v.number()),
  goal_type: v.optional(v.lazy(() => GoalTypeSchema)),
  optimization_goal: v.optional(v.lazy(() => OptimizationGoalSchema)),
  conversion_pixel_id: v.optional(v.string()),
  start_time: v.optional(v.string()),
  end_time: v.optional(v.string()),
  delivery_status: v.optional(v.string()),
  targeting: v.optional(v.lazy(() => TargetingSchema)),
  created_at: v.optional(v.string()),
});

export type AdGroupCreate = {
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
};
export const AdGroupCreateSchema: v.GenericSchema<unknown, AdGroupCreate> = v.looseObject({
  campaign_id: v.string(),
  name: v.string(),
  configured_status: v.lazy(() => ConfiguredStatusSchema),
  bid_strategy: v.lazy(() => BidStrategySchema),
  bid_value: v.optional(v.number()),
  goal_type: v.lazy(() => GoalTypeSchema),
  optimization_goal: v.optional(v.lazy(() => OptimizationGoalSchema)),
  conversion_pixel_id: v.optional(v.string()),
  start_time: v.string(),
  end_time: v.optional(v.string()),
  targeting: v.lazy(() => TargetingSchema),
});

export type AdGroupUpdate = {
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
};
export const AdGroupUpdateSchema: v.GenericSchema<unknown, AdGroupUpdate> = v.looseObject({
  name: v.optional(v.string()),
  configured_status: v.optional(v.lazy(() => ConfiguredStatusSchema)),
  bid_strategy: v.optional(v.lazy(() => BidStrategySchema)),
  bid_value: v.optional(v.number()),
  goal_type: v.optional(v.lazy(() => GoalTypeSchema)),
  optimization_goal: v.optional(v.lazy(() => OptimizationGoalSchema)),
  conversion_pixel_id: v.optional(v.string()),
  start_time: v.optional(v.string()),
  end_time: v.optional(v.string()),
  targeting: v.optional(v.lazy(() => TargetingSchema)),
});

export type AdUpdate = {
  readonly name?: string;
  readonly configured_status?: ConfiguredStatus;
  readonly click_url?: string;
  readonly click_url_query_parameters?: string;
  readonly call_to_action?: CallToAction;
};
export const AdUpdateSchema: v.GenericSchema<unknown, AdUpdate> = v.looseObject({
  name: v.optional(v.string()),
  configured_status: v.optional(v.lazy(() => ConfiguredStatusSchema)),
  click_url: v.optional(v.string()),
  click_url_query_parameters: v.optional(v.string()),
  call_to_action: v.optional(v.lazy(() => CallToActionSchema)),
});

export type ApiResponse_Account = {
  readonly data?: Account;
};
export const ApiResponse_AccountSchema: v.GenericSchema<unknown, ApiResponse_Account> = v.looseObject({
  data: v.optional(v.lazy(() => AccountSchema)),
});

export type ApiResponse_AccountList = {
  readonly data?: ReadonlyArray<Account>;
};
export const ApiResponse_AccountListSchema: v.GenericSchema<unknown, ApiResponse_AccountList> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => AccountSchema))),
});

export type ApiResponse_Ad = {
  readonly data?: Ad;
};
export const ApiResponse_AdSchema: v.GenericSchema<unknown, ApiResponse_Ad> = v.looseObject({
  data: v.optional(v.lazy(() => AdSchema)),
});

export type ApiResponse_AdGroup = {
  readonly data?: AdGroup;
};
export const ApiResponse_AdGroupSchema: v.GenericSchema<unknown, ApiResponse_AdGroup> = v.looseObject({
  data: v.optional(v.lazy(() => AdGroupSchema)),
});

export type ApiResponse_AdGroupList = {
  readonly data?: ReadonlyArray<AdGroup>;
};
export const ApiResponse_AdGroupListSchema: v.GenericSchema<unknown, ApiResponse_AdGroupList> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => AdGroupSchema))),
});

export type ApiResponse_AdList = {
  readonly data?: ReadonlyArray<Ad>;
};
export const ApiResponse_AdListSchema: v.GenericSchema<unknown, ApiResponse_AdList> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => AdSchema))),
});

export type ApiResponse_BidSuggestion = {
  readonly data?: BidSuggestion;
};
export const ApiResponse_BidSuggestionSchema: v.GenericSchema<unknown, ApiResponse_BidSuggestion> = v.looseObject({
  data: v.optional(v.lazy(() => BidSuggestionSchema)),
});

export type ApiResponse_Campaign = {
  readonly data?: Campaign;
};
export const ApiResponse_CampaignSchema: v.GenericSchema<unknown, ApiResponse_Campaign> = v.looseObject({
  data: v.optional(v.lazy(() => CampaignSchema)),
});

export type ApiResponse_CampaignList = {
  readonly data?: ReadonlyArray<Campaign>;
};
export const ApiResponse_CampaignListSchema: v.GenericSchema<unknown, ApiResponse_CampaignList> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => CampaignSchema))),
});

export type ApiResponse_CustomAudience = {
  readonly data?: CustomAudience;
};
export const ApiResponse_CustomAudienceSchema: v.GenericSchema<unknown, ApiResponse_CustomAudience> = v.looseObject({
  data: v.optional(v.lazy(() => CustomAudienceSchema)),
});

export type ApiResponse_CustomAudienceList = {
  readonly data?: ReadonlyArray<CustomAudience>;
};
export const ApiResponse_CustomAudienceListSchema: v.GenericSchema<unknown, ApiResponse_CustomAudienceList> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => CustomAudienceSchema))),
});

export type ApiResponse_FundingInstrumentList = {
  readonly data?: ReadonlyArray<FundingInstrument>;
};
export const ApiResponse_FundingInstrumentListSchema: v.GenericSchema<unknown, ApiResponse_FundingInstrumentList> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => FundingInstrumentSchema))),
});

export type ApiResponse_GeolocationValidation = {
  readonly data?: Inline33;
};
export const ApiResponse_GeolocationValidationSchema: v.GenericSchema<unknown, ApiResponse_GeolocationValidation> = v.looseObject({
  data: v.optional(v.lazy(() => Inline33Schema)),
});

export type ApiResponse_PixelLastFired = {
  readonly data?: Inline35;
};
export const ApiResponse_PixelLastFiredSchema: v.GenericSchema<unknown, ApiResponse_PixelLastFired> = v.looseObject({
  data: v.optional(v.lazy(() => Inline35Schema)),
});

export type ApiResponse_PixelList = {
  readonly data?: ReadonlyArray<Pixel>;
};
export const ApiResponse_PixelListSchema: v.GenericSchema<unknown, ApiResponse_PixelList> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => PixelSchema))),
});

export type ApiResponse_Report = {
  readonly data?: ReadonlyArray<ReportRow>;
};
export const ApiResponse_ReportSchema: v.GenericSchema<unknown, ApiResponse_Report> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => ReportRowSchema))),
});

export type ApiResponse_SavedAudience = {
  readonly data?: SavedAudience;
};
export const ApiResponse_SavedAudienceSchema: v.GenericSchema<unknown, ApiResponse_SavedAudience> = v.looseObject({
  data: v.optional(v.lazy(() => SavedAudienceSchema)),
});

export type ApiResponse_SavedAudienceList = {
  readonly data?: ReadonlyArray<SavedAudience>;
};
export const ApiResponse_SavedAudienceListSchema: v.GenericSchema<unknown, ApiResponse_SavedAudienceList> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => SavedAudienceSchema))),
});

export type ApiResponse_StructuredPost = {
  readonly data?: StructuredPost;
};
export const ApiResponse_StructuredPostSchema: v.GenericSchema<unknown, ApiResponse_StructuredPost> = v.looseObject({
  data: v.optional(v.lazy(() => StructuredPostSchema)),
});

export type ApiResponse_StructuredPostList = {
  readonly data?: ReadonlyArray<StructuredPost>;
};
export const ApiResponse_StructuredPostListSchema: v.GenericSchema<unknown, ApiResponse_StructuredPostList> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => StructuredPostSchema))),
});

export type ApiResponse_Success = {
  readonly data?: Inline47;
};
export const ApiResponse_SuccessSchema: v.GenericSchema<unknown, ApiResponse_Success> = v.looseObject({
  data: v.optional(v.lazy(() => Inline47Schema)),
});

export type ApiResponse_TargetingOptions = {
  readonly data?: ReadonlyArray<Inline49>;
};
export const ApiResponse_TargetingOptionsSchema: v.GenericSchema<unknown, ApiResponse_TargetingOptions> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => Inline49Schema))),
});

export type ApiResponse_User = {
  readonly data?: User;
};
export const ApiResponse_UserSchema: v.GenericSchema<unknown, ApiResponse_User> = v.looseObject({
  data: v.optional(v.lazy(() => UserSchema)),
});

export type AudienceUserAction = string;
export const AudienceUserActionSchema: v.GenericSchema<unknown, AudienceUserAction> = v.string();

export type BidStrategy = unknown;
export const BidStrategySchema: v.GenericSchema<unknown, BidStrategy> = v.unknown();

export type BidSuggestion = unknown;
export const BidSuggestionSchema: v.GenericSchema<unknown, BidSuggestion> = v.unknown();

export type BidSuggestionRequest = {
  readonly targeting?: Targeting;
  readonly objective?: CampaignObjective;
  readonly goal_type?: GoalType;
};
export const BidSuggestionRequestSchema: v.GenericSchema<unknown, BidSuggestionRequest> = v.looseObject({
  targeting: v.optional(v.lazy(() => TargetingSchema)),
  objective: v.optional(v.lazy(() => CampaignObjectiveSchema)),
  goal_type: v.optional(v.lazy(() => GoalTypeSchema)),
});

export type CallToAction = unknown;
export const CallToActionSchema: v.GenericSchema<unknown, CallToAction> = v.unknown();

export type Campaign = unknown;
export const CampaignSchema: v.GenericSchema<unknown, Campaign> = v.unknown();

export type CampaignCreate = {
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
};
export const CampaignCreateSchema: v.GenericSchema<unknown, CampaignCreate> = v.looseObject({
  name: v.string(),
  objective: v.lazy(() => CampaignObjectiveSchema),
  configured_status: v.lazy(() => ConfiguredStatusSchema),
  funding_instrument_id: v.string(),
  spend_cap: v.optional(v.number()),
  goal_type: v.optional(v.lazy(() => GoalTypeSchema)),
  app_id: v.optional(v.string()),
  start_time: v.optional(v.string()),
  end_time: v.optional(v.string()),
  invoice_label: v.optional(v.string()),
});

export type CampaignEffectiveStatus = unknown;
export const CampaignEffectiveStatusSchema: v.GenericSchema<unknown, CampaignEffectiveStatus> = v.unknown();

export type CampaignObjective = unknown;
export const CampaignObjectiveSchema: v.GenericSchema<unknown, CampaignObjective> = v.unknown();

export type CampaignUpdate = {
  readonly name?: string;
  readonly configured_status?: ConfiguredStatus;
  readonly spend_cap?: number;
  readonly goal_type?: GoalType;
  readonly start_time?: string;
  readonly end_time?: string;
  readonly invoice_label?: string;
};
export const CampaignUpdateSchema: v.GenericSchema<unknown, CampaignUpdate> = v.looseObject({
  name: v.optional(v.string()),
  configured_status: v.optional(v.lazy(() => ConfiguredStatusSchema)),
  spend_cap: v.optional(v.number()),
  goal_type: v.optional(v.lazy(() => GoalTypeSchema)),
  start_time: v.optional(v.string()),
  end_time: v.optional(v.string()),
  invoice_label: v.optional(v.string()),
});

export type ConfiguredStatus = unknown;
export const ConfiguredStatusSchema: v.GenericSchema<unknown, ConfiguredStatus> = v.unknown();

export type ConversionEvent = {
  readonly event_at: number;
  readonly action_source: ActionSource;
  readonly click_id?: string;
  readonly type: ConversionEventType;
  readonly user?: ConversionUser;
  readonly metadata?: ConversionMetadata;
};
export const ConversionEventSchema: v.GenericSchema<unknown, ConversionEvent> = v.looseObject({
  event_at: v.number(),
  action_source: v.lazy(() => ActionSourceSchema),
  click_id: v.optional(v.string()),
  type: v.lazy(() => ConversionEventTypeSchema),
  user: v.optional(v.lazy(() => ConversionUserSchema)),
  metadata: v.optional(v.lazy(() => ConversionMetadataSchema)),
});

export type ConversionEventsRequest = {
  readonly events: ReadonlyArray<ConversionEvent>;
};
export const ConversionEventsRequestSchema: v.GenericSchema<unknown, ConversionEventsRequest> = v.looseObject({
  events: v.array(v.lazy(() => ConversionEventSchema)),
});

export type ConversionEventsResponse = {
  readonly data?: Inline63;
};
export const ConversionEventsResponseSchema: v.GenericSchema<unknown, ConversionEventsResponse> = v.looseObject({
  data: v.optional(v.lazy(() => Inline63Schema)),
});

export type ConversionEventType = unknown;
export const ConversionEventTypeSchema: v.GenericSchema<unknown, ConversionEventType> = v.unknown();

export type ConversionMetadata = unknown;
export const ConversionMetadataSchema: v.GenericSchema<unknown, ConversionMetadata> = v.unknown();

export type ConversionUser = unknown;
export const ConversionUserSchema: v.GenericSchema<unknown, ConversionUser> = v.unknown();

export type CreateAdGroupParams = {
  readonly accountId: string;
  readonly body: AdGroupCreate;
};
export const CreateAdGroupParamsSchema: v.GenericSchema<unknown, CreateAdGroupParams> = v.looseObject({
  accountId: v.string(),
  body: v.lazy(() => AdGroupCreateSchema),
});

export type CreateAdGroupResponse = {
  readonly data: AdGroup;
};
export const CreateAdGroupResponseSchema: v.GenericSchema<unknown, CreateAdGroupResponse> = v.looseObject({
  data: v.lazy(() => AdGroupSchema),
});

export type CreateAdParams = {
  readonly accountId: string;
  readonly body: AdCreate;
};
export const CreateAdParamsSchema: v.GenericSchema<unknown, CreateAdParams> = v.looseObject({
  accountId: v.string(),
  body: v.lazy(() => AdCreateSchema),
});

export type CreateAdResponse = {
  readonly data: Ad;
};
export const CreateAdResponseSchema: v.GenericSchema<unknown, CreateAdResponse> = v.looseObject({
  data: v.lazy(() => AdSchema),
});

export type CreateCampaignParams = {
  readonly accountId: string;
  readonly body: CampaignCreate;
};
export const CreateCampaignParamsSchema: v.GenericSchema<unknown, CreateCampaignParams> = v.looseObject({
  accountId: v.string(),
  body: v.lazy(() => CampaignCreateSchema),
});

export type CreateCampaignResponse = {
  readonly data: Campaign;
};
export const CreateCampaignResponseSchema: v.GenericSchema<unknown, CreateCampaignResponse> = v.looseObject({
  data: v.lazy(() => CampaignSchema),
});

export type CreateCustomAudienceParams = {
  readonly accountId: string;
  readonly body: CustomAudienceCreate;
};
export const CreateCustomAudienceParamsSchema: v.GenericSchema<unknown, CreateCustomAudienceParams> = v.looseObject({
  accountId: v.string(),
  body: v.lazy(() => CustomAudienceCreateSchema),
});

export type CreateCustomAudienceResponse = {
  readonly data: CustomAudience;
};
export const CreateCustomAudienceResponseSchema: v.GenericSchema<unknown, CreateCustomAudienceResponse> = v.looseObject({
  data: v.lazy(() => CustomAudienceSchema),
});

export type CreateReportParams = {
  readonly accountId: string;
  readonly body: ReportRequest;
};
export const CreateReportParamsSchema: v.GenericSchema<unknown, CreateReportParams> = v.looseObject({
  accountId: v.string(),
  body: v.lazy(() => ReportRequestSchema),
});

export type CreateReportResponse = {
  readonly data: ReadonlyArray<ReportRow>;
};
export const CreateReportResponseSchema: v.GenericSchema<unknown, CreateReportResponse> = v.looseObject({
  data: v.array(v.lazy(() => ReportRowSchema)),
});

export type CreateStructuredPostParams = {
  readonly accountId: string;
  readonly body: StructuredPostCreate;
};
export const CreateStructuredPostParamsSchema: v.GenericSchema<unknown, CreateStructuredPostParams> = v.looseObject({
  accountId: v.string(),
  body: v.lazy(() => StructuredPostCreateSchema),
});

export type CreateStructuredPostResponse = {
  readonly data: StructuredPost;
};
export const CreateStructuredPostResponseSchema: v.GenericSchema<unknown, CreateStructuredPostResponse> = v.looseObject({
  data: v.lazy(() => StructuredPostSchema),
});

export type CustomAudience = unknown;
export const CustomAudienceSchema: v.GenericSchema<unknown, CustomAudience> = v.unknown();

export type CustomAudienceCreate = {
  readonly name: string;
  readonly type: string;
};
export const CustomAudienceCreateSchema: v.GenericSchema<unknown, CustomAudienceCreate> = v.looseObject({
  name: v.string(),
  type: v.string(),
});

export type CustomAudienceUsersUpdate = {
  readonly users: ReadonlyArray<Inline66>;
  readonly action: AudienceUserAction;
};
export const CustomAudienceUsersUpdateSchema: v.GenericSchema<unknown, CustomAudienceUsersUpdate> = v.looseObject({
  users: v.array(v.lazy(() => Inline66Schema)),
  action: v.lazy(() => AudienceUserActionSchema),
});

export type DeleteCampaignParams = {
  readonly accountId: string;
  readonly campaignId: string;
};
export const DeleteCampaignParamsSchema: v.GenericSchema<unknown, DeleteCampaignParams> = v.looseObject({
  accountId: v.string(),
  campaignId: v.string(),
});

export type DeleteCampaignResponse = {

};
export const DeleteCampaignResponseSchema: v.GenericSchema<unknown, DeleteCampaignResponse> = v.looseObject({

});

export type FundingInstrument = unknown;
export const FundingInstrumentSchema: v.GenericSchema<unknown, FundingInstrument> = v.unknown();

export type Geolocation = {
  readonly country?: string;
  readonly region?: string;
  readonly city?: string;
  readonly dma?: string;
  readonly postal_code?: string;
};
export const GeolocationSchema: v.GenericSchema<unknown, Geolocation> = v.looseObject({
  country: v.optional(v.string()),
  region: v.optional(v.string()),
  city: v.optional(v.string()),
  dma: v.optional(v.string()),
  postal_code: v.optional(v.string()),
});

export type GeolocationValidateRequest = {
  readonly geolocations?: ReadonlyArray<Geolocation>;
};
export const GeolocationValidateRequestSchema: v.GenericSchema<unknown, GeolocationValidateRequest> = v.looseObject({
  geolocations: v.optional(v.array(v.lazy(() => GeolocationSchema))),
});

export type GetAccountParams = {
  readonly accountId: string;
};
export const GetAccountParamsSchema: v.GenericSchema<unknown, GetAccountParams> = v.looseObject({
  accountId: v.string(),
});

export type GetAccountResponse = {
  readonly data: Account;
};
export const GetAccountResponseSchema: v.GenericSchema<unknown, GetAccountResponse> = v.looseObject({
  data: v.lazy(() => AccountSchema),
});

export type GetAdGroupParams = {
  readonly accountId: string;
  readonly adGroupId: string;
};
export const GetAdGroupParamsSchema: v.GenericSchema<unknown, GetAdGroupParams> = v.looseObject({
  accountId: v.string(),
  adGroupId: v.string(),
});

export type GetAdGroupResponse = {
  readonly data: AdGroup;
};
export const GetAdGroupResponseSchema: v.GenericSchema<unknown, GetAdGroupResponse> = v.looseObject({
  data: v.lazy(() => AdGroupSchema),
});

export type GetAdParams = {
  readonly accountId: string;
  readonly adId: string;
};
export const GetAdParamsSchema: v.GenericSchema<unknown, GetAdParams> = v.looseObject({
  accountId: v.string(),
  adId: v.string(),
});

export type GetAdResponse = {
  readonly data: Ad;
};
export const GetAdResponseSchema: v.GenericSchema<unknown, GetAdResponse> = v.looseObject({
  data: v.lazy(() => AdSchema),
});

export type GetBidSuggestionParams = {
  readonly accountId: string;
  readonly body: BidSuggestionRequest;
};
export const GetBidSuggestionParamsSchema: v.GenericSchema<unknown, GetBidSuggestionParams> = v.looseObject({
  accountId: v.string(),
  body: v.lazy(() => BidSuggestionRequestSchema),
});

export type GetBidSuggestionResponse = {
  readonly data: BidSuggestion;
};
export const GetBidSuggestionResponseSchema: v.GenericSchema<unknown, GetBidSuggestionResponse> = v.looseObject({
  data: v.lazy(() => BidSuggestionSchema),
});

export type GetCampaignParams = {
  readonly accountId: string;
  readonly campaignId: string;
};
export const GetCampaignParamsSchema: v.GenericSchema<unknown, GetCampaignParams> = v.looseObject({
  accountId: v.string(),
  campaignId: v.string(),
});

export type GetCampaignResponse = {
  readonly data: Campaign;
};
export const GetCampaignResponseSchema: v.GenericSchema<unknown, GetCampaignResponse> = v.looseObject({
  data: v.lazy(() => CampaignSchema),
});

export type GetCustomAudienceParams = {
  readonly accountId: string;
  readonly audienceId: string;
};
export const GetCustomAudienceParamsSchema: v.GenericSchema<unknown, GetCustomAudienceParams> = v.looseObject({
  accountId: v.string(),
  audienceId: v.string(),
});

export type GetCustomAudienceResponse = {
  readonly data: CustomAudience;
};
export const GetCustomAudienceResponseSchema: v.GenericSchema<unknown, GetCustomAudienceResponse> = v.looseObject({
  data: v.lazy(() => CustomAudienceSchema),
});

export type GetMeParams = {

};
export const GetMeParamsSchema: v.GenericSchema<unknown, GetMeParams> = v.looseObject({

});

export type GetMeResponse = {
  readonly data: User;
};
export const GetMeResponseSchema: v.GenericSchema<unknown, GetMeResponse> = v.looseObject({
  data: v.lazy(() => UserSchema),
});

export type GetPixelAppLastFiredAtParams = {
  readonly pixelId: string;
};
export const GetPixelAppLastFiredAtParamsSchema: v.GenericSchema<unknown, GetPixelAppLastFiredAtParams> = v.looseObject({
  pixelId: v.string(),
});

export type GetPixelAppLastFiredAtResponse = {
  readonly data: Inline139;
};
export const GetPixelAppLastFiredAtResponseSchema: v.GenericSchema<unknown, GetPixelAppLastFiredAtResponse> = v.looseObject({
  data: v.lazy(() => Inline139Schema),
});

export type GetPixelLastFiredAtParams = {
  readonly pixelId: string;
};
export const GetPixelLastFiredAtParamsSchema: v.GenericSchema<unknown, GetPixelLastFiredAtParams> = v.looseObject({
  pixelId: v.string(),
});

export type GetPixelLastFiredAtResponse = {
  readonly data: Inline144;
};
export const GetPixelLastFiredAtResponseSchema: v.GenericSchema<unknown, GetPixelLastFiredAtResponse> = v.looseObject({
  data: v.lazy(() => Inline144Schema),
});

export type GetSavedAudienceParams = {
  readonly accountId: string;
  readonly audienceId: string;
};
export const GetSavedAudienceParamsSchema: v.GenericSchema<unknown, GetSavedAudienceParams> = v.looseObject({
  accountId: v.string(),
  audienceId: v.string(),
});

export type GetSavedAudienceResponse = {
  readonly data: SavedAudience;
};
export const GetSavedAudienceResponseSchema: v.GenericSchema<unknown, GetSavedAudienceResponse> = v.looseObject({
  data: v.lazy(() => SavedAudienceSchema),
});

export type GoalType = unknown;
export const GoalTypeSchema: v.GenericSchema<unknown, GoalType> = v.unknown();

export type IdentifierType = unknown;
export const IdentifierTypeSchema: v.GenericSchema<unknown, IdentifierType> = v.unknown();

export type Inline134 = {
  readonly message?: string;
};
export const Inline134Schema: v.GenericSchema<unknown, Inline134> = v.looseObject({
  message: v.optional(v.string()),
});

export type Inline139 = {
  readonly last_fired_at?: string;
};
export const Inline139Schema: v.GenericSchema<unknown, Inline139> = v.looseObject({
  last_fired_at: v.optional(v.string()),
});

export type Inline144 = {
  readonly last_fired_at?: string;
};
export const Inline144Schema: v.GenericSchema<unknown, Inline144> = v.looseObject({
  last_fired_at: v.optional(v.string()),
});

export type Inline147 = {

};
export const Inline147Schema: v.GenericSchema<unknown, Inline147> = v.looseObject({

});

export type Inline150 = {

};
export const Inline150Schema: v.GenericSchema<unknown, Inline150> = v.looseObject({

});

export type Inline153 = {

};
export const Inline153Schema: v.GenericSchema<unknown, Inline153> = v.looseObject({

});

export type Inline156 = {

};
export const Inline156Schema: v.GenericSchema<unknown, Inline156> = v.looseObject({

});

export type Inline159 = {

};
export const Inline159Schema: v.GenericSchema<unknown, Inline159> = v.looseObject({

});

export type Inline162 = {

};
export const Inline162Schema: v.GenericSchema<unknown, Inline162> = v.looseObject({

});

export type Inline33 = {

};
export const Inline33Schema: v.GenericSchema<unknown, Inline33> = v.looseObject({

});

export type Inline35 = {
  readonly last_fired_at?: string;
};
export const Inline35Schema: v.GenericSchema<unknown, Inline35> = v.looseObject({
  last_fired_at: v.optional(v.string()),
});

export type Inline47 = {
  readonly message?: string;
};
export const Inline47Schema: v.GenericSchema<unknown, Inline47> = v.looseObject({
  message: v.optional(v.string()),
});

export type Inline49 = {

};
export const Inline49Schema: v.GenericSchema<unknown, Inline49> = v.looseObject({

});

export type Inline63 = {
  readonly message?: string;
};
export const Inline63Schema: v.GenericSchema<unknown, Inline63> = v.looseObject({
  message: v.optional(v.string()),
});

export type Inline66 = {
  readonly identifier_type: IdentifierType;
  readonly identifier: string;
};
export const Inline66Schema: v.GenericSchema<unknown, Inline66> = v.looseObject({
  identifier_type: v.lazy(() => IdentifierTypeSchema),
  identifier: v.string(),
});

export type ListAccountsParams = {

};
export const ListAccountsParamsSchema: v.GenericSchema<unknown, ListAccountsParams> = v.looseObject({

});

export type ListAccountsResponse = {
  readonly data: ReadonlyArray<Account>;
};
export const ListAccountsResponseSchema: v.GenericSchema<unknown, ListAccountsResponse> = v.looseObject({
  data: v.array(v.lazy(() => AccountSchema)),
});

export type ListAdGroupsParams = {
  readonly accountId: string;
  readonly campaignId?: string;
};
export const ListAdGroupsParamsSchema: v.GenericSchema<unknown, ListAdGroupsParams> = v.looseObject({
  accountId: v.string(),
  campaignId: v.optional(v.string()),
});

export type ListAdGroupsResponse = {
  readonly data: ReadonlyArray<AdGroup>;
};
export const ListAdGroupsResponseSchema: v.GenericSchema<unknown, ListAdGroupsResponse> = v.looseObject({
  data: v.array(v.lazy(() => AdGroupSchema)),
});

export type ListAdsParams = {
  readonly accountId: string;
  readonly adGroupId?: string;
};
export const ListAdsParamsSchema: v.GenericSchema<unknown, ListAdsParams> = v.looseObject({
  accountId: v.string(),
  adGroupId: v.optional(v.string()),
});

export type ListAdsResponse = {
  readonly data: ReadonlyArray<Ad>;
};
export const ListAdsResponseSchema: v.GenericSchema<unknown, ListAdsResponse> = v.looseObject({
  data: v.array(v.lazy(() => AdSchema)),
});

export type ListCampaignsParams = {
  readonly accountId: string;
};
export const ListCampaignsParamsSchema: v.GenericSchema<unknown, ListCampaignsParams> = v.looseObject({
  accountId: v.string(),
});

export type ListCampaignsResponse = {
  readonly data: ReadonlyArray<Campaign>;
};
export const ListCampaignsResponseSchema: v.GenericSchema<unknown, ListCampaignsResponse> = v.looseObject({
  data: v.array(v.lazy(() => CampaignSchema)),
});

export type ListCustomAudiencesParams = {
  readonly accountId: string;
};
export const ListCustomAudiencesParamsSchema: v.GenericSchema<unknown, ListCustomAudiencesParams> = v.looseObject({
  accountId: v.string(),
});

export type ListCustomAudiencesResponse = {
  readonly data: ReadonlyArray<CustomAudience>;
};
export const ListCustomAudiencesResponseSchema: v.GenericSchema<unknown, ListCustomAudiencesResponse> = v.looseObject({
  data: v.array(v.lazy(() => CustomAudienceSchema)),
});

export type ListFundingInstrumentsByAccountParams = {
  readonly accountId: string;
};
export const ListFundingInstrumentsByAccountParamsSchema: v.GenericSchema<unknown, ListFundingInstrumentsByAccountParams> = v.looseObject({
  accountId: v.string(),
});

export type ListFundingInstrumentsByAccountResponse = {
  readonly data: ReadonlyArray<FundingInstrument>;
};
export const ListFundingInstrumentsByAccountResponseSchema: v.GenericSchema<unknown, ListFundingInstrumentsByAccountResponse> = v.looseObject({
  data: v.array(v.lazy(() => FundingInstrumentSchema)),
});

export type ListFundingInstrumentsByBusinessParams = {
  readonly businessId: string;
};
export const ListFundingInstrumentsByBusinessParamsSchema: v.GenericSchema<unknown, ListFundingInstrumentsByBusinessParams> = v.looseObject({
  businessId: v.string(),
});

export type ListFundingInstrumentsByBusinessResponse = {
  readonly data: ReadonlyArray<FundingInstrument>;
};
export const ListFundingInstrumentsByBusinessResponseSchema: v.GenericSchema<unknown, ListFundingInstrumentsByBusinessResponse> = v.looseObject({
  data: v.array(v.lazy(() => FundingInstrumentSchema)),
});

export type ListGeolocationsParams = {

};
export const ListGeolocationsParamsSchema: v.GenericSchema<unknown, ListGeolocationsParams> = v.looseObject({

});

export type ListGeolocationsResponse = {
  readonly data: ReadonlyArray<Inline156>;
};
export const ListGeolocationsResponseSchema: v.GenericSchema<unknown, ListGeolocationsResponse> = v.looseObject({
  data: v.array(v.lazy(() => Inline156Schema)),
});

export type ListPixelsByAccountParams = {
  readonly accountId: string;
};
export const ListPixelsByAccountParamsSchema: v.GenericSchema<unknown, ListPixelsByAccountParams> = v.looseObject({
  accountId: v.string(),
});

export type ListPixelsByAccountResponse = {
  readonly data: ReadonlyArray<Pixel>;
};
export const ListPixelsByAccountResponseSchema: v.GenericSchema<unknown, ListPixelsByAccountResponse> = v.looseObject({
  data: v.array(v.lazy(() => PixelSchema)),
});

export type ListPixelsByBusinessParams = {
  readonly businessId: string;
};
export const ListPixelsByBusinessParamsSchema: v.GenericSchema<unknown, ListPixelsByBusinessParams> = v.looseObject({
  businessId: v.string(),
});

export type ListPixelsByBusinessResponse = {
  readonly data: ReadonlyArray<Pixel>;
};
export const ListPixelsByBusinessResponseSchema: v.GenericSchema<unknown, ListPixelsByBusinessResponse> = v.looseObject({
  data: v.array(v.lazy(() => PixelSchema)),
});

export type ListSavedAudiencesParams = {
  readonly accountId: string;
};
export const ListSavedAudiencesParamsSchema: v.GenericSchema<unknown, ListSavedAudiencesParams> = v.looseObject({
  accountId: v.string(),
});

export type ListSavedAudiencesResponse = {
  readonly data: ReadonlyArray<SavedAudience>;
};
export const ListSavedAudiencesResponseSchema: v.GenericSchema<unknown, ListSavedAudiencesResponse> = v.looseObject({
  data: v.array(v.lazy(() => SavedAudienceSchema)),
});

export type ListStructuredPostsParams = {
  readonly accountId: string;
};
export const ListStructuredPostsParamsSchema: v.GenericSchema<unknown, ListStructuredPostsParams> = v.looseObject({
  accountId: v.string(),
});

export type ListStructuredPostsResponse = {
  readonly data: ReadonlyArray<StructuredPost>;
};
export const ListStructuredPostsResponseSchema: v.GenericSchema<unknown, ListStructuredPostsResponse> = v.looseObject({
  data: v.array(v.lazy(() => StructuredPostSchema)),
});

export type ListTargetingCarriersParams = {

};
export const ListTargetingCarriersParamsSchema: v.GenericSchema<unknown, ListTargetingCarriersParams> = v.looseObject({

});

export type ListTargetingCarriersResponse = {
  readonly data: ReadonlyArray<Inline147>;
};
export const ListTargetingCarriersResponseSchema: v.GenericSchema<unknown, ListTargetingCarriersResponse> = v.looseObject({
  data: v.array(v.lazy(() => Inline147Schema)),
});

export type ListTargetingCommunitiesParams = {
  readonly q?: string;
};
export const ListTargetingCommunitiesParamsSchema: v.GenericSchema<unknown, ListTargetingCommunitiesParams> = v.looseObject({
  q: v.optional(v.string()),
});

export type ListTargetingCommunitiesResponse = {
  readonly data: ReadonlyArray<Inline150>;
};
export const ListTargetingCommunitiesResponseSchema: v.GenericSchema<unknown, ListTargetingCommunitiesResponse> = v.looseObject({
  data: v.array(v.lazy(() => Inline150Schema)),
});

export type ListTargetingDevicesParams = {

};
export const ListTargetingDevicesParamsSchema: v.GenericSchema<unknown, ListTargetingDevicesParams> = v.looseObject({

});

export type ListTargetingDevicesResponse = {
  readonly data: ReadonlyArray<Inline153>;
};
export const ListTargetingDevicesResponseSchema: v.GenericSchema<unknown, ListTargetingDevicesResponse> = v.looseObject({
  data: v.array(v.lazy(() => Inline153Schema)),
});

export type ListTargetingInterestsParams = {

};
export const ListTargetingInterestsParamsSchema: v.GenericSchema<unknown, ListTargetingInterestsParams> = v.looseObject({

});

export type ListTargetingInterestsResponse = {
  readonly data: ReadonlyArray<Inline162>;
};
export const ListTargetingInterestsResponseSchema: v.GenericSchema<unknown, ListTargetingInterestsResponse> = v.looseObject({
  data: v.array(v.lazy(() => Inline162Schema)),
});

export type OptimizationGoal = unknown;
export const OptimizationGoalSchema: v.GenericSchema<unknown, OptimizationGoal> = v.unknown();

export type Pixel = unknown;
export const PixelSchema: v.GenericSchema<unknown, Pixel> = v.unknown();

export type PostConversionEventsParams = {
  readonly pixelId: string;
  readonly body: ConversionEventsRequest;
};
export const PostConversionEventsParamsSchema: v.GenericSchema<unknown, PostConversionEventsParams> = v.looseObject({
  pixelId: v.string(),
  body: v.lazy(() => ConversionEventsRequestSchema),
});

export type PostConversionEventsResponse = {
  readonly data: ConversionEventsResponse;
};
export const PostConversionEventsResponseSchema: v.GenericSchema<unknown, PostConversionEventsResponse> = v.looseObject({
  data: v.lazy(() => ConversionEventsResponseSchema),
});

export type ReportLevel = string;
export const ReportLevelSchema: v.GenericSchema<unknown, ReportLevel> = v.string();

export type ReportRequest = {
  readonly start_date: string;
  readonly end_date: string;
  readonly level: ReportLevel;
  readonly metrics: ReadonlyArray<string>;
  readonly breakdowns?: ReadonlyArray<string>;
};
export const ReportRequestSchema: v.GenericSchema<unknown, ReportRequest> = v.looseObject({
  start_date: v.string(),
  end_date: v.string(),
  level: v.lazy(() => ReportLevelSchema),
  metrics: v.array(v.string()),
  breakdowns: v.optional(v.array(v.string())),
});

export type ReportRow = unknown;
export const ReportRowSchema: v.GenericSchema<unknown, ReportRow> = v.unknown();

export type SavedAudience = unknown;
export const SavedAudienceSchema: v.GenericSchema<unknown, SavedAudience> = v.unknown();

export type StructuredPost = unknown;
export const StructuredPostSchema: v.GenericSchema<unknown, StructuredPost> = v.unknown();

export type StructuredPostCreate = {

};
export const StructuredPostCreateSchema: v.GenericSchema<unknown, StructuredPostCreate> = v.looseObject({

});

export type Targeting = unknown;
export const TargetingSchema: v.GenericSchema<unknown, Targeting> = v.unknown();

export type TrackingType = string;
export const TrackingTypeSchema: v.GenericSchema<unknown, TrackingType> = v.string();

export type UpdateAccountParams = {
  readonly accountId: string;
  readonly body: AccountUpdate;
};
export const UpdateAccountParamsSchema: v.GenericSchema<unknown, UpdateAccountParams> = v.looseObject({
  accountId: v.string(),
  body: v.lazy(() => AccountUpdateSchema),
});

export type UpdateAccountResponse = {
  readonly data: Account;
};
export const UpdateAccountResponseSchema: v.GenericSchema<unknown, UpdateAccountResponse> = v.looseObject({
  data: v.lazy(() => AccountSchema),
});

export type UpdateAdGroupParams = {
  readonly accountId: string;
  readonly adGroupId: string;
  readonly body: AdGroupUpdate;
};
export const UpdateAdGroupParamsSchema: v.GenericSchema<unknown, UpdateAdGroupParams> = v.looseObject({
  accountId: v.string(),
  adGroupId: v.string(),
  body: v.lazy(() => AdGroupUpdateSchema),
});

export type UpdateAdGroupResponse = {
  readonly data: AdGroup;
};
export const UpdateAdGroupResponseSchema: v.GenericSchema<unknown, UpdateAdGroupResponse> = v.looseObject({
  data: v.lazy(() => AdGroupSchema),
});

export type UpdateAdParams = {
  readonly accountId: string;
  readonly adId: string;
  readonly body: AdUpdate;
};
export const UpdateAdParamsSchema: v.GenericSchema<unknown, UpdateAdParams> = v.looseObject({
  accountId: v.string(),
  adId: v.string(),
  body: v.lazy(() => AdUpdateSchema),
});

export type UpdateAdResponse = {
  readonly data: Ad;
};
export const UpdateAdResponseSchema: v.GenericSchema<unknown, UpdateAdResponse> = v.looseObject({
  data: v.lazy(() => AdSchema),
});

export type UpdateCampaignParams = {
  readonly accountId: string;
  readonly campaignId: string;
  readonly body: CampaignUpdate;
};
export const UpdateCampaignParamsSchema: v.GenericSchema<unknown, UpdateCampaignParams> = v.looseObject({
  accountId: v.string(),
  campaignId: v.string(),
  body: v.lazy(() => CampaignUpdateSchema),
});

export type UpdateCampaignResponse = {
  readonly data: Campaign;
};
export const UpdateCampaignResponseSchema: v.GenericSchema<unknown, UpdateCampaignResponse> = v.looseObject({
  data: v.lazy(() => CampaignSchema),
});

export type UpdateCustomAudienceUsersParams = {
  readonly audienceId: string;
  readonly body: CustomAudienceUsersUpdate;
};
export const UpdateCustomAudienceUsersParamsSchema: v.GenericSchema<unknown, UpdateCustomAudienceUsersParams> = v.looseObject({
  audienceId: v.string(),
  body: v.lazy(() => CustomAudienceUsersUpdateSchema),
});

export type UpdateCustomAudienceUsersResponse = {
  readonly data: Inline134;
};
export const UpdateCustomAudienceUsersResponseSchema: v.GenericSchema<unknown, UpdateCustomAudienceUsersResponse> = v.looseObject({
  data: v.lazy(() => Inline134Schema),
});

export type User = unknown;
export const UserSchema: v.GenericSchema<unknown, User> = v.unknown();

export type ValidateGeolocationsParams = {
  readonly body: GeolocationValidateRequest;
};
export const ValidateGeolocationsParamsSchema: v.GenericSchema<unknown, ValidateGeolocationsParams> = v.looseObject({
  body: v.lazy(() => GeolocationValidateRequestSchema),
});

export type ValidateGeolocationsResponse = {
  readonly data: Inline159;
};
export const ValidateGeolocationsResponseSchema: v.GenericSchema<unknown, ValidateGeolocationsResponse> = v.looseObject({
  data: v.lazy(() => Inline159Schema),
});
