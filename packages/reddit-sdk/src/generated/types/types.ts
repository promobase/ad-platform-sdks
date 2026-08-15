// @generated
// fingerprint: sha256:616b9365f1ffb0c62cedd16819b00dbdb447cc85e207e1c9ee6dd04457356f7f
// DO NOT EDIT: generated file; changes will be overwritten.
// This file is generated. Do not edit by hand.

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

export interface AccountUpdate {
  readonly attribution_type?: string;
  readonly click_attribution_window?: string;
  readonly view_attribution_window?: string;
}

export type ActionSource = string;

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

export interface AdCreate {
  readonly ad_group_id: string;
  readonly name: string;
  readonly configured_status: ConfiguredStatus;
  readonly post_id?: string;
  readonly click_url: string;
  readonly click_url_query_parameters?: string;
  readonly call_to_action?: CallToAction;
}

export type AdEffectiveStatus = unknown;

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

export interface AdUpdate {
  readonly name?: string;
  readonly configured_status?: ConfiguredStatus;
  readonly click_url?: string;
  readonly click_url_query_parameters?: string;
  readonly call_to_action?: CallToAction;
}

export interface ApiResponse_Account {
  readonly data?: Account;
}

export interface ApiResponse_AccountList {
  readonly data?: ReadonlyArray<Account>;
}

export interface ApiResponse_Ad {
  readonly data?: Ad;
}

export interface ApiResponse_AdGroup {
  readonly data?: AdGroup;
}

export interface ApiResponse_AdGroupList {
  readonly data?: ReadonlyArray<AdGroup>;
}

export interface ApiResponse_AdList {
  readonly data?: ReadonlyArray<Ad>;
}

export interface ApiResponse_BidSuggestion {
  readonly data?: BidSuggestion;
}

export interface ApiResponse_Campaign {
  readonly data?: Campaign;
}

export interface ApiResponse_CampaignList {
  readonly data?: ReadonlyArray<Campaign>;
}

export interface ApiResponse_CustomAudience {
  readonly data?: CustomAudience;
}

export interface ApiResponse_CustomAudienceList {
  readonly data?: ReadonlyArray<CustomAudience>;
}

export interface ApiResponse_FundingInstrumentList {
  readonly data?: ReadonlyArray<FundingInstrument>;
}

export interface ApiResponse_GeolocationValidation {
  readonly data?: Inline33;
}

export interface ApiResponse_PixelLastFired {
  readonly data?: Inline35;
}

export interface ApiResponse_PixelList {
  readonly data?: ReadonlyArray<Pixel>;
}

export interface ApiResponse_Report {
  readonly data?: ReadonlyArray<ReportRow>;
}

export interface ApiResponse_SavedAudience {
  readonly data?: SavedAudience;
}

export interface ApiResponse_SavedAudienceList {
  readonly data?: ReadonlyArray<SavedAudience>;
}

export interface ApiResponse_StructuredPost {
  readonly data?: StructuredPost;
}

export interface ApiResponse_StructuredPostList {
  readonly data?: ReadonlyArray<StructuredPost>;
}

export interface ApiResponse_Success {
  readonly data?: Inline47;
}

export interface ApiResponse_TargetingOptions {
  readonly data?: ReadonlyArray<Inline49>;
}

export interface ApiResponse_User {
  readonly data?: User;
}

export type AudienceUserAction = string;

export type BidStrategy = unknown;

export type BidSuggestion = unknown;

export interface BidSuggestionRequest {
  readonly targeting?: Targeting;
  readonly objective?: CampaignObjective;
  readonly goal_type?: GoalType;
}

export type CallToAction = unknown;

export type Campaign = unknown;

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

export type CampaignEffectiveStatus = unknown;

export type CampaignObjective = unknown;

export interface CampaignUpdate {
  readonly name?: string;
  readonly configured_status?: ConfiguredStatus;
  readonly spend_cap?: number;
  readonly goal_type?: GoalType;
  readonly start_time?: string;
  readonly end_time?: string;
  readonly invoice_label?: string;
}

export type ConfiguredStatus = unknown;

export interface ConversionEvent {
  readonly event_at: number;
  readonly action_source: ActionSource;
  readonly click_id?: string;
  readonly type: ConversionEventType;
  readonly user?: ConversionUser;
  readonly metadata?: ConversionMetadata;
}

export interface ConversionEventsRequest {
  readonly events: ReadonlyArray<ConversionEvent>;
}

export interface ConversionEventsResponse {
  readonly data?: Inline63;
}

export type ConversionEventType = unknown;

export type ConversionMetadata = unknown;

export type ConversionUser = unknown;

export interface CreateAdGroupParams {
  readonly accountId: string;
  readonly body: AdGroupCreate;
}

export interface CreateAdGroupResponse {
  readonly data: AdGroup;
}

export interface CreateAdParams {
  readonly accountId: string;
  readonly body: AdCreate;
}

export interface CreateAdResponse {
  readonly data: Ad;
}

export interface CreateCampaignParams {
  readonly accountId: string;
  readonly body: CampaignCreate;
}

export interface CreateCampaignResponse {
  readonly data: Campaign;
}

export interface CreateCustomAudienceParams {
  readonly accountId: string;
  readonly body: CustomAudienceCreate;
}

export interface CreateCustomAudienceResponse {
  readonly data: CustomAudience;
}

export interface CreateReportParams {
  readonly accountId: string;
  readonly body: ReportRequest;
}

export interface CreateReportResponse {
  readonly data: ReadonlyArray<ReportRow>;
}

export interface CreateStructuredPostParams {
  readonly accountId: string;
  readonly body: StructuredPostCreate;
}

export interface CreateStructuredPostResponse {
  readonly data: StructuredPost;
}

export type CustomAudience = unknown;

export interface CustomAudienceCreate {
  readonly name: string;
  readonly type: string;
}

export interface CustomAudienceUsersUpdate {
  readonly users: ReadonlyArray<Inline66>;
  readonly action: AudienceUserAction;
}

export interface DeleteCampaignParams {
  readonly accountId: string;
  readonly campaignId: string;
}

export interface DeleteCampaignResponse {

}

export type FundingInstrument = unknown;

export interface Geolocation {
  readonly country?: string;
  readonly region?: string;
  readonly city?: string;
  readonly dma?: string;
  readonly postal_code?: string;
}

export interface GeolocationValidateRequest {
  readonly geolocations?: ReadonlyArray<Geolocation>;
}

export interface GetAccountParams {
  readonly accountId: string;
}

export interface GetAccountResponse {
  readonly data: Account;
}

export interface GetAdGroupParams {
  readonly accountId: string;
  readonly adGroupId: string;
}

export interface GetAdGroupResponse {
  readonly data: AdGroup;
}

export interface GetAdParams {
  readonly accountId: string;
  readonly adId: string;
}

export interface GetAdResponse {
  readonly data: Ad;
}

export interface GetBidSuggestionParams {
  readonly accountId: string;
  readonly body: BidSuggestionRequest;
}

export interface GetBidSuggestionResponse {
  readonly data: BidSuggestion;
}

export interface GetCampaignParams {
  readonly accountId: string;
  readonly campaignId: string;
}

export interface GetCampaignResponse {
  readonly data: Campaign;
}

export interface GetCustomAudienceParams {
  readonly accountId: string;
  readonly audienceId: string;
}

export interface GetCustomAudienceResponse {
  readonly data: CustomAudience;
}

export interface GetMeParams {

}

export interface GetMeResponse {
  readonly data: User;
}

export interface GetPixelAppLastFiredAtParams {
  readonly pixelId: string;
}

export interface GetPixelAppLastFiredAtResponse {
  readonly data: Inline139;
}

export interface GetPixelLastFiredAtParams {
  readonly pixelId: string;
}

export interface GetPixelLastFiredAtResponse {
  readonly data: Inline144;
}

export interface GetSavedAudienceParams {
  readonly accountId: string;
  readonly audienceId: string;
}

export interface GetSavedAudienceResponse {
  readonly data: SavedAudience;
}

export type GoalType = unknown;

export type IdentifierType = unknown;

export interface Inline134 {
  readonly message?: string;
}

export interface Inline139 {
  readonly last_fired_at?: string;
}

export interface Inline144 {
  readonly last_fired_at?: string;
}

export interface Inline147 {

}

export interface Inline150 {

}

export interface Inline153 {

}

export interface Inline156 {

}

export interface Inline159 {

}

export interface Inline162 {

}

export interface Inline33 {

}

export interface Inline35 {
  readonly last_fired_at?: string;
}

export interface Inline47 {
  readonly message?: string;
}

export interface Inline49 {

}

export interface Inline63 {
  readonly message?: string;
}

export interface Inline66 {
  readonly identifier_type: IdentifierType;
  readonly identifier: string;
}

export interface ListAccountsParams {

}

export interface ListAccountsResponse {
  readonly data: ReadonlyArray<Account>;
}

export interface ListAdGroupsParams {
  readonly accountId: string;
  readonly campaignId?: string;
}

export interface ListAdGroupsResponse {
  readonly data: ReadonlyArray<AdGroup>;
}

export interface ListAdsParams {
  readonly accountId: string;
  readonly adGroupId?: string;
}

export interface ListAdsResponse {
  readonly data: ReadonlyArray<Ad>;
}

export interface ListCampaignsParams {
  readonly accountId: string;
}

export interface ListCampaignsResponse {
  readonly data: ReadonlyArray<Campaign>;
}

export interface ListCustomAudiencesParams {
  readonly accountId: string;
}

export interface ListCustomAudiencesResponse {
  readonly data: ReadonlyArray<CustomAudience>;
}

export interface ListFundingInstrumentsByAccountParams {
  readonly accountId: string;
}

export interface ListFundingInstrumentsByAccountResponse {
  readonly data: ReadonlyArray<FundingInstrument>;
}

export interface ListFundingInstrumentsByBusinessParams {
  readonly businessId: string;
}

export interface ListFundingInstrumentsByBusinessResponse {
  readonly data: ReadonlyArray<FundingInstrument>;
}

export interface ListGeolocationsParams {

}

export interface ListGeolocationsResponse {
  readonly data: ReadonlyArray<Inline156>;
}

export interface ListPixelsByAccountParams {
  readonly accountId: string;
}

export interface ListPixelsByAccountResponse {
  readonly data: ReadonlyArray<Pixel>;
}

export interface ListPixelsByBusinessParams {
  readonly businessId: string;
}

export interface ListPixelsByBusinessResponse {
  readonly data: ReadonlyArray<Pixel>;
}

export interface ListSavedAudiencesParams {
  readonly accountId: string;
}

export interface ListSavedAudiencesResponse {
  readonly data: ReadonlyArray<SavedAudience>;
}

export interface ListStructuredPostsParams {
  readonly accountId: string;
}

export interface ListStructuredPostsResponse {
  readonly data: ReadonlyArray<StructuredPost>;
}

export interface ListTargetingCarriersParams {

}

export interface ListTargetingCarriersResponse {
  readonly data: ReadonlyArray<Inline147>;
}

export interface ListTargetingCommunitiesParams {
  readonly q?: string;
}

export interface ListTargetingCommunitiesResponse {
  readonly data: ReadonlyArray<Inline150>;
}

export interface ListTargetingDevicesParams {

}

export interface ListTargetingDevicesResponse {
  readonly data: ReadonlyArray<Inline153>;
}

export interface ListTargetingInterestsParams {

}

export interface ListTargetingInterestsResponse {
  readonly data: ReadonlyArray<Inline162>;
}

export type OptimizationGoal = unknown;

export type Pixel = unknown;

export interface PostConversionEventsParams {
  readonly pixelId: string;
  readonly body: ConversionEventsRequest;
}

export interface PostConversionEventsResponse {
  readonly data: ConversionEventsResponse;
}

export type ReportLevel = string;

export interface ReportRequest {
  readonly start_date: string;
  readonly end_date: string;
  readonly level: ReportLevel;
  readonly metrics: ReadonlyArray<string>;
  readonly breakdowns?: ReadonlyArray<string>;
}

export type ReportRow = unknown;

export type SavedAudience = unknown;

export type StructuredPost = unknown;

export interface StructuredPostCreate {

}

export type Targeting = unknown;

export type TrackingType = string;

export interface UpdateAccountParams {
  readonly accountId: string;
  readonly body: AccountUpdate;
}

export interface UpdateAccountResponse {
  readonly data: Account;
}

export interface UpdateAdGroupParams {
  readonly accountId: string;
  readonly adGroupId: string;
  readonly body: AdGroupUpdate;
}

export interface UpdateAdGroupResponse {
  readonly data: AdGroup;
}

export interface UpdateAdParams {
  readonly accountId: string;
  readonly adId: string;
  readonly body: AdUpdate;
}

export interface UpdateAdResponse {
  readonly data: Ad;
}

export interface UpdateCampaignParams {
  readonly accountId: string;
  readonly campaignId: string;
  readonly body: CampaignUpdate;
}

export interface UpdateCampaignResponse {
  readonly data: Campaign;
}

export interface UpdateCustomAudienceUsersParams {
  readonly audienceId: string;
  readonly body: CustomAudienceUsersUpdate;
}

export interface UpdateCustomAudienceUsersResponse {
  readonly data: Inline134;
}

export type User = unknown;

export interface ValidateGeolocationsParams {
  readonly body: GeolocationValidateRequest;
}

export interface ValidateGeolocationsResponse {
  readonly data: Inline159;
}
