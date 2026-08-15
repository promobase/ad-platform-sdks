// @generated
// fingerprint: sha256:2b1c565f8297c7c87d9881b2742aba498c1a2f58491c3d67d464c03b6c70d0d2
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated endpoint params for AT Protocol lexicons — do not edit

import type { AppBskyActorDefsPreferences, AppBskyDraftDefsDraft, AppBskyDraftDefsDraftWithId, AppBskyFeedDefsInteraction, AppBskyNotificationDefsActivitySubscription, AppBskyNotificationDefsChatPreference, AppBskyNotificationDefsFilterablePreference, AppBskyNotificationDefsPreference, ComAtprotoAdminDefsRepoRef, ComAtprotoRepoStrongRef, ComAtprotoAdminDefsRepoBlobRef, ComAtprotoAdminDefsStatusAttr, ComAtprotoModerationDefsReasonType, ComAtprotoModerationCreateReportModTool, ComAtprotoRepoApplyWritesCreate, ComAtprotoRepoApplyWritesUpdate, ComAtprotoRepoApplyWritesDelete } from "./types.ts";

export interface GetPreferencesParams {}


export interface GetProfileParams {
  actor: string;
}


export interface GetProfilesParams {
  actors: string[];
}


export interface GetSuggestionsParams {
  limit?: number;
  cursor?: string;
}


export interface PutPreferencesParams {
  preferences: AppBskyActorDefsPreferences;
}


export interface SearchActorsParams {
  term?: string;
  q?: string;
  limit?: number;
  cursor?: string;
}


export interface SearchActorsTypeaheadParams {
  term?: string;
  q?: string;
  limit?: number;
}


export interface BeginParams {
  email: string;
  language: string;
  countryCode: string;
  regionCode?: string;
}


export interface GetConfigParams {}


export interface GetStateParams {
  countryCode: string;
  regionCode?: string;
}


export interface CreateBookmarkParams {
  uri: string;
  cid: string;
}


export interface DeleteBookmarkParams {
  uri: string;
}


export interface GetBookmarksParams {
  limit?: number;
  cursor?: string;
}


export interface DismissMatchParams {
  subject: string;
}


export interface GetMatchesParams {
  limit?: number;
  cursor?: string;
}


export interface GetSyncStatusParams {}


export interface ImportContactsParams {
  token: string;
  contacts: string[];
}


export interface RemoveDataParams {}


export interface SendNotificationParams {
  from: string;
  to: string;
}


export interface StartPhoneVerificationParams {
  phone: string;
}


export interface VerifyPhoneParams {
  phone: string;
  code: string;
}


export interface CreateDraftParams {
  draft: AppBskyDraftDefsDraft;
}


export interface DeleteDraftParams {
  id: string;
}


export interface GetDraftsParams {
  limit?: number;
  cursor?: string;
}


export interface UpdateDraftParams {
  draft: AppBskyDraftDefsDraftWithId;
}


export interface GetEmbedExternalViewParams {
  url: string;
  uris: string[];
}


export interface DescribeFeedGeneratorParams {}


export interface GetActorFeedsParams {
  actor: string;
  limit?: number;
  cursor?: string;
}


export interface GetActorLikesParams {
  actor: string;
  limit?: number;
  cursor?: string;
}


export interface GetAuthorFeedParams {
  actor: string;
  limit?: number;
  cursor?: string;
  filter?: string;
  includePins?: boolean;
}


export interface GetFeedParams {
  feed: string;
  limit?: number;
  cursor?: string;
}


export interface GetFeedGeneratorParams {
  feed: string;
}


export interface GetFeedGeneratorsParams {
  feeds: string[];
}


export interface GetFeedSkeletonParams {
  feed: string;
  limit?: number;
  cursor?: string;
}


export interface GetLikesParams {
  uri: string;
  cid?: string;
  limit?: number;
  cursor?: string;
}


export interface GetListFeedParams {
  list: string;
  limit?: number;
  cursor?: string;
}


export interface GetPostsParams {
  uris: string[];
}


export interface GetPostThreadParams {
  uri: string;
  depth?: number;
  parentHeight?: number;
}


export interface GetQuotesParams {
  uri: string;
  cid?: string;
  limit?: number;
  cursor?: string;
}


export interface GetRepostedByParams {
  uri: string;
  cid?: string;
  limit?: number;
  cursor?: string;
}


export interface GetSuggestedFeedsParams {
  limit?: number;
  cursor?: string;
}


export interface GetTimelineParams {
  algorithm?: string;
  limit?: number;
  cursor?: string;
}


export interface SearchPostsParams {
  q: string;
  sort?: string;
  since?: string;
  until?: string;
  mentions?: string;
  author?: string;
  lang?: string;
  domain?: string;
  url?: string;
  tag?: string[];
  limit?: number;
  cursor?: string;
}


export interface SearchPostsV2Params {
  cursor?: string;
  limit?: number;
  query?: string;
  sort?: string;
  authors?: string[];
  mentions?: string[];
  domains?: string[];
  urls?: string[];
  embeddedAtUris?: string[];
  hashtags?: string[];
  excludeAuthors?: string[];
  excludeMentions?: string[];
  excludeDomains?: string[];
  excludeUrls?: string[];
  excludeEmbeddedAtUris?: string[];
  excludeHashtags?: string[];
  since?: string;
  until?: string;
  allTime?: boolean;
  languages?: string[];
  excludeLanguages?: string[];
  hasMedia?: boolean;
  hasVideo?: boolean;
  replyParentUri?: string;
  threadRootUri?: string;
  excludeReplies?: boolean;
  repliesOnly?: boolean;
  following?: boolean;
  queryLanguage?: string;
}


export interface SendInteractionsParams {
  feed?: string;
  interactions: AppBskyFeedDefsInteraction[];
}


export interface GetActorStarterPacksParams {
  actor: string;
  limit?: number;
  cursor?: string;
}


export interface GetBlocksParams {
  limit?: number;
  cursor?: string;
}


export interface GetFollowersParams {
  actor: string;
  limit?: number;
  cursor?: string;
  sort?: string;
}


export interface GetFollowsParams {
  actor: string;
  limit?: number;
  cursor?: string;
  sort?: string;
}


export interface GetKnownFollowersParams {
  actor: string;
  limit?: number;
  cursor?: string;
}


export interface GetListParams {
  list: string;
  limit?: number;
  cursor?: string;
}


export interface GetListBlocksParams {
  limit?: number;
  cursor?: string;
}


export interface GetListMutesParams {
  limit?: number;
  cursor?: string;
}


export interface GetListsParams {
  actor: string;
  limit?: number;
  cursor?: string;
  purposes?: string[];
}


export interface GetListsWithMembershipParams {
  actor: string;
  limit?: number;
  cursor?: string;
  purposes?: string[];
}


export interface GetMutesParams {
  limit?: number;
  cursor?: string;
}


export interface GetRelationshipsParams {
  actor: string;
  others?: string[];
}


export interface GetStarterPackParams {
  starterPack: string;
}


export interface GetStarterPacksParams {
  uris: string[];
}


export interface GetStarterPacksWithMembershipParams {
  actor: string;
  limit?: number;
  cursor?: string;
}


export interface GetSuggestedFollowsByActorParams {
  actor: string;
}


export interface MuteActorParams {
  actor: string;
  onlyReposts?: boolean;
  onlyQuoteposts?: boolean;
}


export interface MuteActorListParams {
  list: string;
}


export interface MuteThreadParams {
  root: string;
}


export interface SearchStarterPacksParams {
  q: string;
  limit?: number;
  cursor?: string;
}


export interface SearchStarterPacksV2Params {
  q: string;
  limit?: number;
  cursor?: string;
}


export interface UnmuteActorParams {
  actor: string;
}


export interface UnmuteActorListParams {
  list: string;
}


export interface UnmuteThreadParams {
  root: string;
}


export interface GetServicesParams {
  dids: string[];
  detailed?: boolean;
}


export interface GetPreferences2Params {}


export interface GetUnreadCountParams {
  priority?: boolean;
  seenAt?: string;
}


export interface ListActivitySubscriptionsParams {
  limit?: number;
  cursor?: string;
}


export interface ListNotificationsParams {
  reasons?: string[];
  limit?: number;
  priority?: boolean;
  cursor?: string;
  seenAt?: string;
}


export interface PutActivitySubscriptionParams {
  subject: string;
  activitySubscription: AppBskyNotificationDefsActivitySubscription;
}


export interface PutPreferences2Params {
  priority: boolean;
}


export interface PutPreferencesV2Params {
  chat?: AppBskyNotificationDefsChatPreference;
  follow?: AppBskyNotificationDefsFilterablePreference;
  like?: AppBskyNotificationDefsFilterablePreference;
  likeViaRepost?: AppBskyNotificationDefsFilterablePreference;
  mention?: AppBskyNotificationDefsFilterablePreference;
  quote?: AppBskyNotificationDefsFilterablePreference;
  reply?: AppBskyNotificationDefsFilterablePreference;
  repost?: AppBskyNotificationDefsFilterablePreference;
  repostViaRepost?: AppBskyNotificationDefsFilterablePreference;
  starterpackJoined?: AppBskyNotificationDefsPreference;
  subscribedPost?: AppBskyNotificationDefsPreference;
  unverified?: AppBskyNotificationDefsPreference;
  verified?: AppBskyNotificationDefsPreference;
}


export interface RegisterPushParams {
  serviceDid: string;
  token: string;
  platform: string;
  appId: string;
  ageRestricted?: boolean;
}


export interface UnregisterPushParams {
  serviceDid: string;
  token: string;
  platform: string;
  appId: string;
}


export interface UpdateSeenParams {
  seenAt: string;
}


export interface GetAgeAssuranceStateParams {}


export interface GetConfig2Params {}


export interface GetOnboardingSuggestedStarterPacksParams {
  limit?: number;
}


export interface GetOnboardingSuggestedStarterPacksSkeletonParams {
  viewer?: string;
  limit?: number;
}


export interface GetOnboardingSuggestedUsersSkeletonParams {
  viewer?: string;
  category?: string;
  limit?: number;
}


export interface GetPopularFeedGeneratorsParams {
  limit?: number;
  cursor?: string;
  query?: string;
}


export interface GetPostThreadOtherV2Params {
  anchor: string;
}


export interface GetPostThreadV2Params {
  anchor: string;
  above?: boolean;
  below?: number;
  branchingFactor?: number;
  sort?: string;
}


export interface GetSuggestedFeeds2Params {
  limit?: number;
}


export interface GetSuggestedFeedsSkeletonParams {
  viewer?: string;
  limit?: number;
}


export interface GetSuggestedOnboardingUsersParams {
  category?: string;
  limit?: number;
}


export interface GetSuggestedStarterPacksParams {
  limit?: number;
}


export interface GetSuggestedStarterPacksSkeletonParams {
  viewer?: string;
  limit?: number;
}


export interface GetSuggestedUsersParams {
  category?: string;
  limit?: number;
}


export interface GetSuggestedUsersForDiscoverParams {
  limit?: number;
}


export interface GetSuggestedUsersForDiscoverSkeletonParams {
  viewer?: string;
  limit?: number;
}


export interface GetSuggestedUsersForExploreParams {
  category?: string;
  limit?: number;
}


export interface GetSuggestedUsersForExploreSkeletonParams {
  viewer?: string;
  category?: string;
  limit?: number;
}


export interface GetSuggestedUsersForSeeMoreParams {
  category?: string;
  limit?: number;
}


export interface GetSuggestedUsersForSeeMoreSkeletonParams {
  viewer?: string;
  category?: string;
  limit?: number;
}


export interface GetSuggestedUsersSkeletonParams {
  viewer?: string;
  category?: string;
  limit?: number;
}


export interface GetSuggestionsSkeletonParams {
  viewer?: string;
  limit?: number;
  cursor?: string;
  relativeToDid?: string;
}


export interface GetTaggedSuggestionsParams {}


export interface GetTrendingTopicsParams {
  viewer?: string;
  limit?: number;
}


export interface GetTrendsParams {
  limit?: number;
}


export interface GetTrendsSkeletonParams {
  viewer?: string;
  limit?: number;
}


export interface InitAgeAssuranceParams {
  email: string;
  language: string;
  countryCode: string;
}


export interface SearchActorsSkeletonParams {
  q: string;
  viewer?: string;
  typeahead?: boolean;
  limit?: number;
  cursor?: string;
}


export interface SearchPostsSkeletonParams {
  q: string;
  sort?: string;
  since?: string;
  until?: string;
  mentions?: string;
  author?: string;
  lang?: string;
  domain?: string;
  url?: string;
  tag?: string[];
  viewer?: string;
  limit?: number;
  cursor?: string;
}


export interface SearchStarterPacksSkeletonParams {
  q: string;
  viewer?: string;
  limit?: number;
  cursor?: string;
}


export interface GetJobStatusParams {
  jobId: string;
}


export interface GetUploadLimitsParams {}


export interface UploadVideoParams {}


export interface DeleteAccountParams {
  did: string;
}


export interface DisableAccountInvitesParams {
  account: string;
  note?: string;
}


export interface DisableInviteCodesParams {
  codes?: string[];
  accounts?: string[];
}


export interface EnableAccountInvitesParams {
  account: string;
  note?: string;
}


export interface GetAccountInfoParams {
  did: string;
}


export interface GetAccountInfosParams {
  dids: string[];
}


export interface GetInviteCodesParams {
  sort?: string;
  limit?: number;
  cursor?: string;
}


export interface GetSubjectStatusParams {
  did?: string;
  uri?: string;
  blob?: string;
}


export interface SearchAccountsParams {
  email?: string;
  cursor?: string;
  limit?: number;
}


export interface SendEmailParams {
  recipientDid: string;
  content: string;
  subject?: string;
  senderDid: string;
  comment?: string;
}


export interface UpdateAccountEmailParams {
  account: string;
  email: string;
}


export interface UpdateAccountHandleParams {
  did: string;
  handle: string;
}


export interface UpdateAccountPasswordParams {
  did: string;
  password: string;
}


export interface UpdateAccountSigningKeyParams {
  did: string;
  signingKey: string;
}


export interface UpdateSubjectStatusParams {
  subject: ComAtprotoAdminDefsRepoRef | ComAtprotoRepoStrongRef | ComAtprotoAdminDefsRepoBlobRef;
  takedown?: ComAtprotoAdminDefsStatusAttr;
  deactivated?: ComAtprotoAdminDefsStatusAttr;
}


export interface GetRecommendedDidCredentialsParams {}


export interface RefreshIdentityParams {
  identifier: string;
}


export interface RequestPlcOperationSignatureParams {}


export interface ResolveDidParams {
  did: string;
}


export interface ResolveHandleParams {
  handle: string;
}


export interface ResolveIdentityParams {
  identifier: string;
}


export interface SignPlcOperationParams {
  token?: string;
  rotationKeys?: string[];
  alsoKnownAs?: string[];
  verificationMethods?: unknown;
  services?: unknown;
}


export interface SubmitPlcOperationParams {
  operation: unknown;
}


export interface UpdateHandleParams {
  handle: string;
}


export interface QueryLabelsParams {
  uriPatterns: string[];
  sources?: string[];
  limit?: number;
  cursor?: string;
}


export interface ResolveLexiconParams {
  nsid: string;
}


export interface CreateReportParams {
  reasonType: ComAtprotoModerationDefsReasonType;
  reason?: string;
  subject: ComAtprotoAdminDefsRepoRef | ComAtprotoRepoStrongRef;
  modTool?: ComAtprotoModerationCreateReportModTool;
}


export interface ApplyWritesParams {
  repo: string;
  validate?: boolean;
  writes: ComAtprotoRepoApplyWritesCreate | ComAtprotoRepoApplyWritesUpdate | ComAtprotoRepoApplyWritesDelete[];
  swapCommit?: string;
}


export interface CreateRecordParams {
  repo: string;
  collection: string;
  rkey?: string;
  validate?: boolean;
  record: unknown;
  swapCommit?: string;
}


export interface DeleteRecordParams {
  repo: string;
  collection: string;
  rkey: string;
  swapRecord?: string;
  swapCommit?: string;
}


export interface DescribeRepoParams {
  repo: string;
}


export interface GetRecordParams {
  repo: string;
  collection: string;
  rkey: string;
  cid?: string;
}


export interface ImportRepoParams {}


export interface ListMissingBlobsParams {
  limit?: number;
  cursor?: string;
}


export interface ListRecordsParams {
  repo: string;
  collection: string;
  limit?: number;
  cursor?: string;
  reverse?: boolean;
}


export interface PutRecordParams {
  repo: string;
  collection: string;
  rkey: string;
  validate?: boolean;
  record: unknown;
  swapRecord?: string;
  swapCommit?: string;
}


export interface UploadBlobParams {}


export interface ActivateAccountParams {}


export interface CheckAccountStatusParams {}


export interface ConfirmEmailParams {
  email: string;
  token: string;
}


export interface CreateAccountParams {
  email?: string;
  handle: string;
  did?: string;
  inviteCode?: string;
  verificationCode?: string;
  verificationPhone?: string;
  password?: string;
  recoveryKey?: string;
  plcOp?: unknown;
}


export interface CreateAppPasswordParams {
  name: string;
  privileged?: boolean;
}


export interface CreateInviteCodeParams {
  useCount: number;
  forAccount?: string;
}


export interface CreateInviteCodesParams {
  codeCount: number;
  useCount: number;
  forAccounts?: string[];
}


export interface CreateSessionParams {
  identifier: string;
  password: string;
  authFactorToken?: string;
  allowTakendown?: boolean;
}


export interface DeactivateAccountParams {
  deleteAfter?: string;
}


export interface DeleteAccount2Params {
  did: string;
  password: string;
  token: string;
}


export interface DeleteSessionParams {}


export interface DescribeServerParams {}


export interface GetAccountInviteCodesParams {
  includeUsed?: boolean;
  createAvailable?: boolean;
}


export interface GetServiceAuthParams {
  aud: string;
  exp?: number;
  lxm?: string;
}


export interface GetSessionParams {}


export interface ListAppPasswordsParams {}


export interface RefreshSessionParams {}


export interface RequestAccountDeleteParams {}


export interface RequestEmailConfirmationParams {}


export interface RequestEmailUpdateParams {}


export interface RequestPasswordResetParams {
  email: string;
}


export interface ReserveSigningKeyParams {
  did?: string;
}


export interface ResetPasswordParams {
  token: string;
  password: string;
}


export interface RevokeAppPasswordParams {
  name: string;
}


export interface UpdateEmailParams {
  email: string;
  emailAuthFactor?: boolean;
  token?: string;
}


export interface GetBlobParams {
  did: string;
  cid: string;
}


export interface GetBlocks2Params {
  did: string;
  cids: string[];
}


export interface GetCheckoutParams {
  did: string;
}


export interface GetHeadParams {
  did: string;
}


export interface GetHostStatusParams {
  hostname: string;
}


export interface GetLatestCommitParams {
  did: string;
}


export interface GetRecord2Params {
  did: string;
  collection: string;
  rkey: string;
}


export interface GetRepoParams {
  did: string;
  since?: string;
}


export interface GetRepoStatusParams {
  did: string;
}


export interface ListBlobsParams {
  did: string;
  since?: string;
  limit?: number;
  cursor?: string;
}


export interface ListHostsParams {
  limit?: number;
  cursor?: string;
}


export interface ListReposParams {
  limit?: number;
  cursor?: string;
}


export interface ListReposByCollectionParams {
  collection: string;
  limit?: number;
  cursor?: string;
}


export interface NotifyOfUpdateParams {
  hostname: string;
}


export interface RequestCrawlParams {
  hostname: string;
}


export interface AddReservedHandleParams {
  handle: string;
}


export interface CheckHandleAvailabilityParams {
  handle: string;
  email?: string;
  birthDate?: string;
}


export interface CheckSignupQueueParams {}


export interface DereferenceScopeParams {
  scope: string;
}


export interface FetchLabelsParams {
  since?: number;
  limit?: number;
}


export interface RequestPhoneVerificationParams {
  phoneNumber: string;
}


export interface RevokeAccountCredentialsParams {
  account: string;
}
