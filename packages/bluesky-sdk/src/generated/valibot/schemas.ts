// @generated
// fingerprint: sha256:b7420a87684687afceb1ff7fbe15488946b2bb31a31d61f6ab4bba33f138150c
// DO NOT EDIT: generated file; changes will be overwritten.
// This file is generated. Do not edit by hand.
import * as v from "valibot";

export type ActivateAccountParams = {

};
export const ActivateAccountParamsSchema: v.GenericSchema<unknown, ActivateAccountParams> = v.looseObject({

});

export type ActivateAccountResponse = {

};
export const ActivateAccountResponseSchema: v.GenericSchema<unknown, ActivateAccountResponse> = v.looseObject({

});

export type AddReservedHandleParams = {
  readonly handle: string;
};
export const AddReservedHandleParamsSchema: v.GenericSchema<unknown, AddReservedHandleParams> = v.looseObject({
  handle: v.string(),
});

export type AddReservedHandleResponse = {
  readonly data: Inline734;
};
export const AddReservedHandleResponseSchema: v.GenericSchema<unknown, AddReservedHandleResponse> = v.looseObject({
  data: v.lazy(() => Inline734Schema),
});

export type AppBskyActorDefsAdultContentPref = unknown;
export const AppBskyActorDefsAdultContentPrefSchema: v.GenericSchema<unknown, AppBskyActorDefsAdultContentPref> = v.unknown();

export type AppBskyActorDefsBskyAppProgressGuide = {
  readonly guide: string;
};
export const AppBskyActorDefsBskyAppProgressGuideSchema: v.GenericSchema<unknown, AppBskyActorDefsBskyAppProgressGuide> = v.looseObject({
  guide: v.string(),
});

export type AppBskyActorDefsBskyAppStatePref = unknown;
export const AppBskyActorDefsBskyAppStatePrefSchema: v.GenericSchema<unknown, AppBskyActorDefsBskyAppStatePref> = v.unknown();

export type AppBskyActorDefsContentLabelPref = unknown;
export const AppBskyActorDefsContentLabelPrefSchema: v.GenericSchema<unknown, AppBskyActorDefsContentLabelPref> = v.unknown();

export type AppBskyActorDefsDeclaredAgePref = unknown;
export const AppBskyActorDefsDeclaredAgePrefSchema: v.GenericSchema<unknown, AppBskyActorDefsDeclaredAgePref> = v.unknown();

export type AppBskyActorDefsFeedViewPref = unknown;
export const AppBskyActorDefsFeedViewPrefSchema: v.GenericSchema<unknown, AppBskyActorDefsFeedViewPref> = v.unknown();

export type AppBskyActorDefsHiddenPostsPref = unknown;
export const AppBskyActorDefsHiddenPostsPrefSchema: v.GenericSchema<unknown, AppBskyActorDefsHiddenPostsPref> = v.unknown();

export type AppBskyActorDefsInterestsPref = unknown;
export const AppBskyActorDefsInterestsPrefSchema: v.GenericSchema<unknown, AppBskyActorDefsInterestsPref> = v.unknown();

export type AppBskyActorDefsKnownFollowers = {
  readonly count: number;
  readonly followers: ReadonlyArray<AppBskyActorDefsProfileViewBasic>;
};
export const AppBskyActorDefsKnownFollowersSchema: v.GenericSchema<unknown, AppBskyActorDefsKnownFollowers> = v.looseObject({
  count: v.number(),
  followers: v.array(v.lazy(() => AppBskyActorDefsProfileViewBasicSchema)),
});

export type AppBskyActorDefsLabelerPrefItem = {
  readonly did: string;
};
export const AppBskyActorDefsLabelerPrefItemSchema: v.GenericSchema<unknown, AppBskyActorDefsLabelerPrefItem> = v.looseObject({
  did: v.string(),
});

export type AppBskyActorDefsLabelersPref = unknown;
export const AppBskyActorDefsLabelersPrefSchema: v.GenericSchema<unknown, AppBskyActorDefsLabelersPref> = v.unknown();

export type AppBskyActorDefsLiveEventPreferences = unknown;
export const AppBskyActorDefsLiveEventPreferencesSchema: v.GenericSchema<unknown, AppBskyActorDefsLiveEventPreferences> = v.unknown();

export type AppBskyActorDefsMutedWord = {
  readonly id?: string;
  readonly value: string;
  readonly targets: ReadonlyArray<AppBskyActorDefsMutedWordTarget>;
  readonly actorTarget?: string;
  readonly expiresAt?: string;
};
export const AppBskyActorDefsMutedWordSchema: v.GenericSchema<unknown, AppBskyActorDefsMutedWord> = v.looseObject({
  id: v.optional(v.string()),
  value: v.string(),
  targets: v.array(v.lazy(() => AppBskyActorDefsMutedWordTargetSchema)),
  actorTarget: v.optional(v.string()),
  expiresAt: v.optional(v.string()),
});

export type AppBskyActorDefsMutedWordsPref = unknown;
export const AppBskyActorDefsMutedWordsPrefSchema: v.GenericSchema<unknown, AppBskyActorDefsMutedWordsPref> = v.unknown();

export type AppBskyActorDefsMutedWordTarget = string;
export const AppBskyActorDefsMutedWordTargetSchema: v.GenericSchema<unknown, AppBskyActorDefsMutedWordTarget> = v.string();

export type AppBskyActorDefsNux = {
  readonly id: string;
  readonly completed: boolean;
  readonly data?: string;
  readonly expiresAt?: string;
};
export const AppBskyActorDefsNuxSchema: v.GenericSchema<unknown, AppBskyActorDefsNux> = v.looseObject({
  id: v.string(),
  completed: v.boolean(),
  data: v.optional(v.string()),
  expiresAt: v.optional(v.string()),
});

export type AppBskyActorDefsPersonalDetailsPref = unknown;
export const AppBskyActorDefsPersonalDetailsPrefSchema: v.GenericSchema<unknown, AppBskyActorDefsPersonalDetailsPref> = v.unknown();

export type AppBskyActorDefsPostInteractionSettingsPref = unknown;
export const AppBskyActorDefsPostInteractionSettingsPrefSchema: v.GenericSchema<unknown, AppBskyActorDefsPostInteractionSettingsPref> = v.unknown();

export type AppBskyActorDefsPreferences = ReadonlyArray<AppBskyActorDefsAdultContentPref | AppBskyActorDefsContentLabelPref | AppBskyActorDefsSavedFeedsPref | AppBskyActorDefsSavedFeedsPrefV2 | AppBskyActorDefsPersonalDetailsPref | AppBskyActorDefsDeclaredAgePref | AppBskyActorDefsFeedViewPref | AppBskyActorDefsThreadViewPref | AppBskyActorDefsInterestsPref | AppBskyActorDefsMutedWordsPref | AppBskyActorDefsHiddenPostsPref | AppBskyActorDefsBskyAppStatePref | AppBskyActorDefsLabelersPref | AppBskyActorDefsPostInteractionSettingsPref | AppBskyActorDefsVerificationPrefs | AppBskyActorDefsLiveEventPreferences>;
export const AppBskyActorDefsPreferencesSchema: v.GenericSchema<unknown, AppBskyActorDefsPreferences> = v.array(v.union([v.lazy(() => AppBskyActorDefsAdultContentPrefSchema), v.lazy(() => AppBskyActorDefsContentLabelPrefSchema), v.lazy(() => AppBskyActorDefsSavedFeedsPrefSchema), v.lazy(() => AppBskyActorDefsSavedFeedsPrefV2Schema), v.lazy(() => AppBskyActorDefsPersonalDetailsPrefSchema), v.lazy(() => AppBskyActorDefsDeclaredAgePrefSchema), v.lazy(() => AppBskyActorDefsFeedViewPrefSchema), v.lazy(() => AppBskyActorDefsThreadViewPrefSchema), v.lazy(() => AppBskyActorDefsInterestsPrefSchema), v.lazy(() => AppBskyActorDefsMutedWordsPrefSchema), v.lazy(() => AppBskyActorDefsHiddenPostsPrefSchema), v.lazy(() => AppBskyActorDefsBskyAppStatePrefSchema), v.lazy(() => AppBskyActorDefsLabelersPrefSchema), v.lazy(() => AppBskyActorDefsPostInteractionSettingsPrefSchema), v.lazy(() => AppBskyActorDefsVerificationPrefsSchema), v.lazy(() => AppBskyActorDefsLiveEventPreferencesSchema)]));

export type AppBskyActorDefsProfileAssociated = unknown;
export const AppBskyActorDefsProfileAssociatedSchema: v.GenericSchema<unknown, AppBskyActorDefsProfileAssociated> = v.unknown();

export type AppBskyActorDefsProfileAssociatedActivitySubscription = {
  readonly allowSubscriptions: string;
};
export const AppBskyActorDefsProfileAssociatedActivitySubscriptionSchema: v.GenericSchema<unknown, AppBskyActorDefsProfileAssociatedActivitySubscription> = v.looseObject({
  allowSubscriptions: v.string(),
});

export type AppBskyActorDefsProfileAssociatedChat = {
  readonly allowIncoming: string;
  readonly allowGroupInvites?: string;
};
export const AppBskyActorDefsProfileAssociatedChatSchema: v.GenericSchema<unknown, AppBskyActorDefsProfileAssociatedChat> = v.looseObject({
  allowIncoming: v.string(),
  allowGroupInvites: v.optional(v.string()),
});

export type AppBskyActorDefsProfileAssociatedGerm = {
  readonly messageMeUrl: string;
  readonly showButtonTo: string;
};
export const AppBskyActorDefsProfileAssociatedGermSchema: v.GenericSchema<unknown, AppBskyActorDefsProfileAssociatedGerm> = v.looseObject({
  messageMeUrl: v.string(),
  showButtonTo: v.string(),
});

export type AppBskyActorDefsProfileView = unknown;
export const AppBskyActorDefsProfileViewSchema: v.GenericSchema<unknown, AppBskyActorDefsProfileView> = v.unknown();

export type AppBskyActorDefsProfileViewBasic = unknown;
export const AppBskyActorDefsProfileViewBasicSchema: v.GenericSchema<unknown, AppBskyActorDefsProfileViewBasic> = v.unknown();

export type AppBskyActorDefsProfileViewDetailed = {
  readonly did: string;
  readonly handle: string;
  readonly displayName?: string;
  readonly description?: string;
  readonly pronouns?: string;
  readonly website?: string;
  readonly avatar?: string;
  readonly banner?: string;
  readonly followersCount?: number;
  readonly followsCount?: number;
  readonly postsCount?: number;
  readonly associated?: AppBskyActorDefsProfileAssociated;
  readonly joinedViaStarterPack?: AppBskyGraphDefsStarterPackViewBasic;
  readonly indexedAt?: string;
  readonly createdAt?: string;
  readonly viewer?: AppBskyActorDefsViewerState;
  readonly labels?: ReadonlyArray<ComAtprotoLabelDefsLabel>;
  readonly pinnedPost?: ComAtprotoRepoStrongRef;
  readonly verification?: AppBskyActorDefsVerificationState;
  readonly status?: AppBskyActorDefsStatusView;
  readonly debug?: unknown;
};
export const AppBskyActorDefsProfileViewDetailedSchema: v.GenericSchema<unknown, AppBskyActorDefsProfileViewDetailed> = v.looseObject({
  did: v.string(),
  handle: v.string(),
  displayName: v.optional(v.string()),
  description: v.optional(v.string()),
  pronouns: v.optional(v.string()),
  website: v.optional(v.string()),
  avatar: v.optional(v.string()),
  banner: v.optional(v.string()),
  followersCount: v.optional(v.number()),
  followsCount: v.optional(v.number()),
  postsCount: v.optional(v.number()),
  associated: v.optional(v.lazy(() => AppBskyActorDefsProfileAssociatedSchema)),
  joinedViaStarterPack: v.optional(v.lazy(() => AppBskyGraphDefsStarterPackViewBasicSchema)),
  indexedAt: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  viewer: v.optional(v.lazy(() => AppBskyActorDefsViewerStateSchema)),
  labels: v.optional(v.array(v.lazy(() => ComAtprotoLabelDefsLabelSchema))),
  pinnedPost: v.optional(v.lazy(() => ComAtprotoRepoStrongRefSchema)),
  verification: v.optional(v.lazy(() => AppBskyActorDefsVerificationStateSchema)),
  status: v.optional(v.lazy(() => AppBskyActorDefsStatusViewSchema)),
  debug: v.optional(v.unknown()),
});

export type AppBskyActorDefsSavedFeed = {
  readonly id: string;
  readonly type: string;
  readonly value: string;
  readonly pinned: boolean;
};
export const AppBskyActorDefsSavedFeedSchema: v.GenericSchema<unknown, AppBskyActorDefsSavedFeed> = v.looseObject({
  id: v.string(),
  type: v.string(),
  value: v.string(),
  pinned: v.boolean(),
});

export type AppBskyActorDefsSavedFeedsPref = unknown;
export const AppBskyActorDefsSavedFeedsPrefSchema: v.GenericSchema<unknown, AppBskyActorDefsSavedFeedsPref> = v.unknown();

export type AppBskyActorDefsSavedFeedsPrefV2 = unknown;
export const AppBskyActorDefsSavedFeedsPrefV2Schema: v.GenericSchema<unknown, AppBskyActorDefsSavedFeedsPrefV2> = v.unknown();

export type AppBskyActorDefsStatusView = unknown;
export const AppBskyActorDefsStatusViewSchema: v.GenericSchema<unknown, AppBskyActorDefsStatusView> = v.unknown();

export type AppBskyActorDefsThreadViewPref = unknown;
export const AppBskyActorDefsThreadViewPrefSchema: v.GenericSchema<unknown, AppBskyActorDefsThreadViewPref> = v.unknown();

export type AppBskyActorDefsVerificationPrefs = unknown;
export const AppBskyActorDefsVerificationPrefsSchema: v.GenericSchema<unknown, AppBskyActorDefsVerificationPrefs> = v.unknown();

export type AppBskyActorDefsVerificationState = unknown;
export const AppBskyActorDefsVerificationStateSchema: v.GenericSchema<unknown, AppBskyActorDefsVerificationState> = v.unknown();

export type AppBskyActorDefsVerificationView = {
  readonly issuer: string;
  readonly issuerDisplayName?: string;
  readonly issuerHandle?: string;
  readonly uri: string;
  readonly isValid: boolean;
  readonly createdAt: string;
};
export const AppBskyActorDefsVerificationViewSchema: v.GenericSchema<unknown, AppBskyActorDefsVerificationView> = v.looseObject({
  issuer: v.string(),
  issuerDisplayName: v.optional(v.string()),
  issuerHandle: v.optional(v.string()),
  uri: v.string(),
  isValid: v.boolean(),
  createdAt: v.string(),
});

export type AppBskyActorDefsViewerState = unknown;
export const AppBskyActorDefsViewerStateSchema: v.GenericSchema<unknown, AppBskyActorDefsViewerState> = v.unknown();

export type AppBskyActorProfile = {
  readonly displayName?: string;
  readonly description?: string;
  readonly pronouns?: string;
  readonly website?: string;
  readonly avatar?: unknown;
  readonly banner?: unknown;
  readonly labels?: ComAtprotoLabelDefsSelfLabels;
  readonly joinedViaStarterPack?: ComAtprotoRepoStrongRef;
  readonly pinnedPost?: ComAtprotoRepoStrongRef;
  readonly createdAt?: string;
};
export const AppBskyActorProfileSchema: v.GenericSchema<unknown, AppBskyActorProfile> = v.looseObject({
  displayName: v.optional(v.string()),
  description: v.optional(v.string()),
  pronouns: v.optional(v.string()),
  website: v.optional(v.string()),
  avatar: v.optional(v.unknown()),
  banner: v.optional(v.unknown()),
  labels: v.optional(v.lazy(() => ComAtprotoLabelDefsSelfLabelsSchema)),
  joinedViaStarterPack: v.optional(v.lazy(() => ComAtprotoRepoStrongRefSchema)),
  pinnedPost: v.optional(v.lazy(() => ComAtprotoRepoStrongRefSchema)),
  createdAt: v.optional(v.string()),
});

export type AppBskyActorStatus = {
  readonly status: string;
  readonly embed?: AppBskyEmbedExternal;
  readonly durationMinutes?: number;
  readonly createdAt: string;
};
export const AppBskyActorStatusSchema: v.GenericSchema<unknown, AppBskyActorStatus> = v.looseObject({
  status: v.string(),
  embed: v.optional(v.lazy(() => AppBskyEmbedExternalSchema)),
  durationMinutes: v.optional(v.number()),
  createdAt: v.string(),
});

export type AppBskyAgeassuranceDefsAccess = string;
export const AppBskyAgeassuranceDefsAccessSchema: v.GenericSchema<unknown, AppBskyAgeassuranceDefsAccess> = v.string();

export type AppBskyAgeassuranceDefsConfig = {
  readonly regions: ReadonlyArray<AppBskyAgeassuranceDefsConfigRegion>;
};
export const AppBskyAgeassuranceDefsConfigSchema: v.GenericSchema<unknown, AppBskyAgeassuranceDefsConfig> = v.looseObject({
  regions: v.array(v.lazy(() => AppBskyAgeassuranceDefsConfigRegionSchema)),
});

export type AppBskyAgeassuranceDefsConfigRegion = unknown;
export const AppBskyAgeassuranceDefsConfigRegionSchema: v.GenericSchema<unknown, AppBskyAgeassuranceDefsConfigRegion> = v.unknown();

export type AppBskyAgeassuranceDefsConfigRegionRuleDefault = {
  readonly access: AppBskyAgeassuranceDefsAccess;
};
export const AppBskyAgeassuranceDefsConfigRegionRuleDefaultSchema: v.GenericSchema<unknown, AppBskyAgeassuranceDefsConfigRegionRuleDefault> = v.looseObject({
  access: v.lazy(() => AppBskyAgeassuranceDefsAccessSchema),
});

export type AppBskyAgeassuranceDefsConfigRegionRuleIfAccountNewerThan = {
  readonly date: string;
  readonly access: AppBskyAgeassuranceDefsAccess;
};
export const AppBskyAgeassuranceDefsConfigRegionRuleIfAccountNewerThanSchema: v.GenericSchema<unknown, AppBskyAgeassuranceDefsConfigRegionRuleIfAccountNewerThan> = v.looseObject({
  date: v.string(),
  access: v.lazy(() => AppBskyAgeassuranceDefsAccessSchema),
});

export type AppBskyAgeassuranceDefsConfigRegionRuleIfAccountOlderThan = {
  readonly date: string;
  readonly access: AppBskyAgeassuranceDefsAccess;
};
export const AppBskyAgeassuranceDefsConfigRegionRuleIfAccountOlderThanSchema: v.GenericSchema<unknown, AppBskyAgeassuranceDefsConfigRegionRuleIfAccountOlderThan> = v.looseObject({
  date: v.string(),
  access: v.lazy(() => AppBskyAgeassuranceDefsAccessSchema),
});

export type AppBskyAgeassuranceDefsConfigRegionRuleIfAssuredOverAge = {
  readonly age: number;
  readonly access: AppBskyAgeassuranceDefsAccess;
};
export const AppBskyAgeassuranceDefsConfigRegionRuleIfAssuredOverAgeSchema: v.GenericSchema<unknown, AppBskyAgeassuranceDefsConfigRegionRuleIfAssuredOverAge> = v.looseObject({
  age: v.number(),
  access: v.lazy(() => AppBskyAgeassuranceDefsAccessSchema),
});

export type AppBskyAgeassuranceDefsConfigRegionRuleIfAssuredUnderAge = {
  readonly age: number;
  readonly access: AppBskyAgeassuranceDefsAccess;
};
export const AppBskyAgeassuranceDefsConfigRegionRuleIfAssuredUnderAgeSchema: v.GenericSchema<unknown, AppBskyAgeassuranceDefsConfigRegionRuleIfAssuredUnderAge> = v.looseObject({
  age: v.number(),
  access: v.lazy(() => AppBskyAgeassuranceDefsAccessSchema),
});

export type AppBskyAgeassuranceDefsConfigRegionRuleIfDeclaredOverAge = {
  readonly age: number;
  readonly access: AppBskyAgeassuranceDefsAccess;
};
export const AppBskyAgeassuranceDefsConfigRegionRuleIfDeclaredOverAgeSchema: v.GenericSchema<unknown, AppBskyAgeassuranceDefsConfigRegionRuleIfDeclaredOverAge> = v.looseObject({
  age: v.number(),
  access: v.lazy(() => AppBskyAgeassuranceDefsAccessSchema),
});

export type AppBskyAgeassuranceDefsConfigRegionRuleIfDeclaredUnderAge = {
  readonly age: number;
  readonly access: AppBskyAgeassuranceDefsAccess;
};
export const AppBskyAgeassuranceDefsConfigRegionRuleIfDeclaredUnderAgeSchema: v.GenericSchema<unknown, AppBskyAgeassuranceDefsConfigRegionRuleIfDeclaredUnderAge> = v.looseObject({
  age: v.number(),
  access: v.lazy(() => AppBskyAgeassuranceDefsAccessSchema),
});

export type AppBskyAgeassuranceDefsEvent = {
  readonly createdAt: string;
  readonly attemptId: string;
  readonly status: string;
  readonly access: string;
  readonly countryCode: string;
  readonly regionCode?: string;
  readonly email?: string;
  readonly initIp?: string;
  readonly initUa?: string;
  readonly completeIp?: string;
  readonly completeUa?: string;
};
export const AppBskyAgeassuranceDefsEventSchema: v.GenericSchema<unknown, AppBskyAgeassuranceDefsEvent> = v.looseObject({
  createdAt: v.string(),
  attemptId: v.string(),
  status: v.string(),
  access: v.string(),
  countryCode: v.string(),
  regionCode: v.optional(v.string()),
  email: v.optional(v.string()),
  initIp: v.optional(v.string()),
  initUa: v.optional(v.string()),
  completeIp: v.optional(v.string()),
  completeUa: v.optional(v.string()),
});

export type AppBskyAgeassuranceDefsState = {
  readonly lastInitiatedAt?: string;
  readonly status: AppBskyAgeassuranceDefsStatus;
  readonly access: AppBskyAgeassuranceDefsAccess;
};
export const AppBskyAgeassuranceDefsStateSchema: v.GenericSchema<unknown, AppBskyAgeassuranceDefsState> = v.looseObject({
  lastInitiatedAt: v.optional(v.string()),
  status: v.lazy(() => AppBskyAgeassuranceDefsStatusSchema),
  access: v.lazy(() => AppBskyAgeassuranceDefsAccessSchema),
});

export type AppBskyAgeassuranceDefsStateMetadata = {
  readonly accountCreatedAt?: string;
};
export const AppBskyAgeassuranceDefsStateMetadataSchema: v.GenericSchema<unknown, AppBskyAgeassuranceDefsStateMetadata> = v.looseObject({
  accountCreatedAt: v.optional(v.string()),
});

export type AppBskyAgeassuranceDefsStatus = string;
export const AppBskyAgeassuranceDefsStatusSchema: v.GenericSchema<unknown, AppBskyAgeassuranceDefsStatus> = v.string();

export type AppBskyBookmarkDefsBookmark = {
  readonly subject: ComAtprotoRepoStrongRef;
};
export const AppBskyBookmarkDefsBookmarkSchema: v.GenericSchema<unknown, AppBskyBookmarkDefsBookmark> = v.looseObject({
  subject: v.lazy(() => ComAtprotoRepoStrongRefSchema),
});

export type AppBskyBookmarkDefsBookmarkView = {
  readonly subject: ComAtprotoRepoStrongRef;
  readonly createdAt?: string;
  readonly item: AppBskyFeedDefsBlockedPost | AppBskyFeedDefsNotFoundPost | AppBskyFeedDefsPostView;
};
export const AppBskyBookmarkDefsBookmarkViewSchema: v.GenericSchema<unknown, AppBskyBookmarkDefsBookmarkView> = v.looseObject({
  subject: v.lazy(() => ComAtprotoRepoStrongRefSchema),
  createdAt: v.optional(v.string()),
  item: v.union([v.lazy(() => AppBskyFeedDefsBlockedPostSchema), v.lazy(() => AppBskyFeedDefsNotFoundPostSchema), v.lazy(() => AppBskyFeedDefsPostViewSchema)]),
});

export type AppBskyContactDefsMatchAndContactIndex = {
  readonly match: AppBskyActorDefsProfileView;
  readonly contactIndex: number;
};
export const AppBskyContactDefsMatchAndContactIndexSchema: v.GenericSchema<unknown, AppBskyContactDefsMatchAndContactIndex> = v.looseObject({
  match: v.lazy(() => AppBskyActorDefsProfileViewSchema),
  contactIndex: v.number(),
});

export type AppBskyContactDefsNotification = {
  readonly from: string;
  readonly to: string;
};
export const AppBskyContactDefsNotificationSchema: v.GenericSchema<unknown, AppBskyContactDefsNotification> = v.looseObject({
  from: v.string(),
  to: v.string(),
});

export type AppBskyContactDefsSyncStatus = {
  readonly syncedAt: string;
  readonly matchesCount: number;
};
export const AppBskyContactDefsSyncStatusSchema: v.GenericSchema<unknown, AppBskyContactDefsSyncStatus> = v.looseObject({
  syncedAt: v.string(),
  matchesCount: v.number(),
});

export type AppBskyDraftDefsDraft = unknown;
export const AppBskyDraftDefsDraftSchema: v.GenericSchema<unknown, AppBskyDraftDefsDraft> = v.unknown();

export type AppBskyDraftDefsDraftEmbedCaption = {
  readonly lang: string;
  readonly content: string;
};
export const AppBskyDraftDefsDraftEmbedCaptionSchema: v.GenericSchema<unknown, AppBskyDraftDefsDraftEmbedCaption> = v.looseObject({
  lang: v.string(),
  content: v.string(),
});

export type AppBskyDraftDefsDraftEmbedExternal = unknown;
export const AppBskyDraftDefsDraftEmbedExternalSchema: v.GenericSchema<unknown, AppBskyDraftDefsDraftEmbedExternal> = v.unknown();

export type AppBskyDraftDefsDraftEmbedGallery = unknown;
export const AppBskyDraftDefsDraftEmbedGallerySchema: v.GenericSchema<unknown, AppBskyDraftDefsDraftEmbedGallery> = v.unknown();

export type AppBskyDraftDefsDraftEmbedGalleryItems = ReadonlyArray<AppBskyDraftDefsDraftEmbedImage>;
export const AppBskyDraftDefsDraftEmbedGalleryItemsSchema: v.GenericSchema<unknown, AppBskyDraftDefsDraftEmbedGalleryItems> = v.array(v.lazy(() => AppBskyDraftDefsDraftEmbedImageSchema));

export type AppBskyDraftDefsDraftEmbedImage = unknown;
export const AppBskyDraftDefsDraftEmbedImageSchema: v.GenericSchema<unknown, AppBskyDraftDefsDraftEmbedImage> = v.unknown();

export type AppBskyDraftDefsDraftEmbedLocalRef = {
  readonly path: string;
};
export const AppBskyDraftDefsDraftEmbedLocalRefSchema: v.GenericSchema<unknown, AppBskyDraftDefsDraftEmbedLocalRef> = v.looseObject({
  path: v.string(),
});

export type AppBskyDraftDefsDraftEmbedRecord = unknown;
export const AppBskyDraftDefsDraftEmbedRecordSchema: v.GenericSchema<unknown, AppBskyDraftDefsDraftEmbedRecord> = v.unknown();

export type AppBskyDraftDefsDraftEmbedVideo = unknown;
export const AppBskyDraftDefsDraftEmbedVideoSchema: v.GenericSchema<unknown, AppBskyDraftDefsDraftEmbedVideo> = v.unknown();

export type AppBskyDraftDefsDraftPost = {
  readonly text: string;
  readonly labels?: ComAtprotoLabelDefsSelfLabels;
  readonly embedImages?: ReadonlyArray<AppBskyDraftDefsDraftEmbedImage>;
  readonly embedGallery?: AppBskyDraftDefsDraftEmbedGallery;
  readonly embedVideos?: ReadonlyArray<AppBskyDraftDefsDraftEmbedVideo>;
  readonly embedExternals?: ReadonlyArray<AppBskyDraftDefsDraftEmbedExternal>;
  readonly embedRecords?: ReadonlyArray<AppBskyDraftDefsDraftEmbedRecord>;
};
export const AppBskyDraftDefsDraftPostSchema: v.GenericSchema<unknown, AppBskyDraftDefsDraftPost> = v.looseObject({
  text: v.string(),
  labels: v.optional(v.lazy(() => ComAtprotoLabelDefsSelfLabelsSchema)),
  embedImages: v.optional(v.array(v.lazy(() => AppBskyDraftDefsDraftEmbedImageSchema))),
  embedGallery: v.optional(v.lazy(() => AppBskyDraftDefsDraftEmbedGallerySchema)),
  embedVideos: v.optional(v.array(v.lazy(() => AppBskyDraftDefsDraftEmbedVideoSchema))),
  embedExternals: v.optional(v.array(v.lazy(() => AppBskyDraftDefsDraftEmbedExternalSchema))),
  embedRecords: v.optional(v.array(v.lazy(() => AppBskyDraftDefsDraftEmbedRecordSchema))),
});

export type AppBskyDraftDefsDraftView = {
  readonly id: string;
  readonly draft: AppBskyDraftDefsDraft;
  readonly createdAt: string;
  readonly updatedAt: string;
};
export const AppBskyDraftDefsDraftViewSchema: v.GenericSchema<unknown, AppBskyDraftDefsDraftView> = v.looseObject({
  id: v.string(),
  draft: v.lazy(() => AppBskyDraftDefsDraftSchema),
  createdAt: v.string(),
  updatedAt: v.string(),
});

export type AppBskyDraftDefsDraftWithId = {
  readonly id: string;
  readonly draft: AppBskyDraftDefsDraft;
};
export const AppBskyDraftDefsDraftWithIdSchema: v.GenericSchema<unknown, AppBskyDraftDefsDraftWithId> = v.looseObject({
  id: v.string(),
  draft: v.lazy(() => AppBskyDraftDefsDraftSchema),
});

export type AppBskyEmbedDefsAspectRatio = {
  readonly width: number;
  readonly height: number;
};
export const AppBskyEmbedDefsAspectRatioSchema: v.GenericSchema<unknown, AppBskyEmbedDefsAspectRatio> = v.looseObject({
  width: v.number(),
  height: v.number(),
});

export type AppBskyEmbedExternal = unknown;
export const AppBskyEmbedExternalSchema: v.GenericSchema<unknown, AppBskyEmbedExternal> = v.unknown();

export type AppBskyEmbedExternalColorRGB = unknown;
export const AppBskyEmbedExternalColorRGBSchema: v.GenericSchema<unknown, AppBskyEmbedExternalColorRGB> = v.unknown();

export type AppBskyEmbedExternalExternal = {
  readonly uri: string;
  readonly title: string;
  readonly description: string;
  readonly thumb?: unknown;
  readonly associatedRefs?: ReadonlyArray<ComAtprotoRepoStrongRef>;
};
export const AppBskyEmbedExternalExternalSchema: v.GenericSchema<unknown, AppBskyEmbedExternalExternal> = v.looseObject({
  uri: v.string(),
  title: v.string(),
  description: v.string(),
  thumb: v.optional(v.unknown()),
  associatedRefs: v.optional(v.array(v.lazy(() => ComAtprotoRepoStrongRefSchema))),
});

export type AppBskyEmbedExternalView = unknown;
export const AppBskyEmbedExternalViewSchema: v.GenericSchema<unknown, AppBskyEmbedExternalView> = v.unknown();

export type AppBskyEmbedExternalViewExternal = {
  readonly uri: string;
  readonly title: string;
  readonly description: string;
  readonly thumb?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly readingTime?: number;
  readonly labels?: ReadonlyArray<ComAtprotoLabelDefsLabel>;
  readonly source?: AppBskyEmbedExternalViewExternalSource;
  readonly associatedRefs?: ReadonlyArray<ComAtprotoRepoStrongRef>;
  readonly associatedProfiles?: ReadonlyArray<AppBskyActorDefsProfileViewBasic>;
};
export const AppBskyEmbedExternalViewExternalSchema: v.GenericSchema<unknown, AppBskyEmbedExternalViewExternal> = v.looseObject({
  uri: v.string(),
  title: v.string(),
  description: v.string(),
  thumb: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  readingTime: v.optional(v.number()),
  labels: v.optional(v.array(v.lazy(() => ComAtprotoLabelDefsLabelSchema))),
  source: v.optional(v.lazy(() => AppBskyEmbedExternalViewExternalSourceSchema)),
  associatedRefs: v.optional(v.array(v.lazy(() => ComAtprotoRepoStrongRefSchema))),
  associatedProfiles: v.optional(v.array(v.lazy(() => AppBskyActorDefsProfileViewBasicSchema))),
});

export type AppBskyEmbedExternalViewExternalSource = unknown;
export const AppBskyEmbedExternalViewExternalSourceSchema: v.GenericSchema<unknown, AppBskyEmbedExternalViewExternalSource> = v.unknown();

export type AppBskyEmbedExternalViewExternalSourceTheme = {
  readonly backgroundRGB?: AppBskyEmbedExternalColorRGB;
  readonly foregroundRGB?: AppBskyEmbedExternalColorRGB;
  readonly accentRGB?: AppBskyEmbedExternalColorRGB;
  readonly accentForegroundRGB?: AppBskyEmbedExternalColorRGB;
};
export const AppBskyEmbedExternalViewExternalSourceThemeSchema: v.GenericSchema<unknown, AppBskyEmbedExternalViewExternalSourceTheme> = v.looseObject({
  backgroundRGB: v.optional(v.lazy(() => AppBskyEmbedExternalColorRGBSchema)),
  foregroundRGB: v.optional(v.lazy(() => AppBskyEmbedExternalColorRGBSchema)),
  accentRGB: v.optional(v.lazy(() => AppBskyEmbedExternalColorRGBSchema)),
  accentForegroundRGB: v.optional(v.lazy(() => AppBskyEmbedExternalColorRGBSchema)),
});

export type AppBskyEmbedGallery = {
  readonly items: ReadonlyArray<AppBskyEmbedGalleryImage>;
};
export const AppBskyEmbedGallerySchema: v.GenericSchema<unknown, AppBskyEmbedGallery> = v.looseObject({
  items: v.array(v.lazy(() => AppBskyEmbedGalleryImageSchema)),
});

export type AppBskyEmbedGalleryImage = {
  readonly image: unknown;
  readonly alt: string;
  readonly aspectRatio: AppBskyEmbedDefsAspectRatio;
};
export const AppBskyEmbedGalleryImageSchema: v.GenericSchema<unknown, AppBskyEmbedGalleryImage> = v.looseObject({
  image: v.unknown(),
  alt: v.string(),
  aspectRatio: v.lazy(() => AppBskyEmbedDefsAspectRatioSchema),
});

export type AppBskyEmbedGalleryView = {
  readonly items: ReadonlyArray<AppBskyEmbedGalleryViewImage>;
};
export const AppBskyEmbedGalleryViewSchema: v.GenericSchema<unknown, AppBskyEmbedGalleryView> = v.looseObject({
  items: v.array(v.lazy(() => AppBskyEmbedGalleryViewImageSchema)),
});

export type AppBskyEmbedGalleryViewImage = unknown;
export const AppBskyEmbedGalleryViewImageSchema: v.GenericSchema<unknown, AppBskyEmbedGalleryViewImage> = v.unknown();

export type AppBskyEmbedImages = {
  readonly images: ReadonlyArray<AppBskyEmbedImagesImage>;
};
export const AppBskyEmbedImagesSchema: v.GenericSchema<unknown, AppBskyEmbedImages> = v.looseObject({
  images: v.array(v.lazy(() => AppBskyEmbedImagesImageSchema)),
});

export type AppBskyEmbedImagesImage = {
  readonly image: unknown;
  readonly alt: string;
  readonly aspectRatio?: AppBskyEmbedDefsAspectRatio;
};
export const AppBskyEmbedImagesImageSchema: v.GenericSchema<unknown, AppBskyEmbedImagesImage> = v.looseObject({
  image: v.unknown(),
  alt: v.string(),
  aspectRatio: v.optional(v.lazy(() => AppBskyEmbedDefsAspectRatioSchema)),
});

export type AppBskyEmbedImagesView = {
  readonly images: ReadonlyArray<AppBskyEmbedImagesViewImage>;
};
export const AppBskyEmbedImagesViewSchema: v.GenericSchema<unknown, AppBskyEmbedImagesView> = v.looseObject({
  images: v.array(v.lazy(() => AppBskyEmbedImagesViewImageSchema)),
});

export type AppBskyEmbedImagesViewImage = unknown;
export const AppBskyEmbedImagesViewImageSchema: v.GenericSchema<unknown, AppBskyEmbedImagesViewImage> = v.unknown();

export type AppBskyEmbedRecord = {
  readonly record: ComAtprotoRepoStrongRef;
};
export const AppBskyEmbedRecordSchema: v.GenericSchema<unknown, AppBskyEmbedRecord> = v.looseObject({
  record: v.lazy(() => ComAtprotoRepoStrongRefSchema),
});

export type AppBskyEmbedRecordView = {
  readonly record: AppBskyEmbedRecordViewRecord | AppBskyEmbedRecordViewNotFound | AppBskyEmbedRecordViewBlocked | AppBskyEmbedRecordViewDetached | AppBskyFeedDefsGeneratorView | AppBskyGraphDefsListView | AppBskyLabelerDefsLabelerView | AppBskyGraphDefsStarterPackViewBasic;
};
export const AppBskyEmbedRecordViewSchema: v.GenericSchema<unknown, AppBskyEmbedRecordView> = v.looseObject({
  record: v.union([v.lazy(() => AppBskyEmbedRecordViewRecordSchema), v.lazy(() => AppBskyEmbedRecordViewNotFoundSchema), v.lazy(() => AppBskyEmbedRecordViewBlockedSchema), v.lazy(() => AppBskyEmbedRecordViewDetachedSchema), v.lazy(() => AppBskyFeedDefsGeneratorViewSchema), v.lazy(() => AppBskyGraphDefsListViewSchema), v.lazy(() => AppBskyLabelerDefsLabelerViewSchema), v.lazy(() => AppBskyGraphDefsStarterPackViewBasicSchema)]),
});

export type AppBskyEmbedRecordViewBlocked = unknown;
export const AppBskyEmbedRecordViewBlockedSchema: v.GenericSchema<unknown, AppBskyEmbedRecordViewBlocked> = v.unknown();

export type AppBskyEmbedRecordViewDetached = unknown;
export const AppBskyEmbedRecordViewDetachedSchema: v.GenericSchema<unknown, AppBskyEmbedRecordViewDetached> = v.unknown();

export type AppBskyEmbedRecordViewNotFound = unknown;
export const AppBskyEmbedRecordViewNotFoundSchema: v.GenericSchema<unknown, AppBskyEmbedRecordViewNotFound> = v.unknown();

export type AppBskyEmbedRecordViewRecord = unknown;
export const AppBskyEmbedRecordViewRecordSchema: v.GenericSchema<unknown, AppBskyEmbedRecordViewRecord> = v.unknown();

export type AppBskyEmbedRecordWithMedia = {
  readonly record: AppBskyEmbedRecord;
  readonly media: AppBskyEmbedImages | AppBskyEmbedVideo | AppBskyEmbedGallery | AppBskyEmbedExternal;
};
export const AppBskyEmbedRecordWithMediaSchema: v.GenericSchema<unknown, AppBskyEmbedRecordWithMedia> = v.looseObject({
  record: v.lazy(() => AppBskyEmbedRecordSchema),
  media: v.union([v.lazy(() => AppBskyEmbedImagesSchema), v.lazy(() => AppBskyEmbedVideoSchema), v.lazy(() => AppBskyEmbedGallerySchema), v.lazy(() => AppBskyEmbedExternalSchema)]),
});

export type AppBskyEmbedRecordWithMediaView = {
  readonly record: AppBskyEmbedRecordView;
  readonly media: AppBskyEmbedImagesView | AppBskyEmbedVideoView | AppBskyEmbedGalleryView | AppBskyEmbedExternalView;
};
export const AppBskyEmbedRecordWithMediaViewSchema: v.GenericSchema<unknown, AppBskyEmbedRecordWithMediaView> = v.looseObject({
  record: v.lazy(() => AppBskyEmbedRecordViewSchema),
  media: v.union([v.lazy(() => AppBskyEmbedImagesViewSchema), v.lazy(() => AppBskyEmbedVideoViewSchema), v.lazy(() => AppBskyEmbedGalleryViewSchema), v.lazy(() => AppBskyEmbedExternalViewSchema)]),
});

export type AppBskyEmbedVideo = unknown;
export const AppBskyEmbedVideoSchema: v.GenericSchema<unknown, AppBskyEmbedVideo> = v.unknown();

export type AppBskyEmbedVideoCaption = {
  readonly lang: string;
  readonly file: unknown;
};
export const AppBskyEmbedVideoCaptionSchema: v.GenericSchema<unknown, AppBskyEmbedVideoCaption> = v.looseObject({
  lang: v.string(),
  file: v.unknown(),
});

export type AppBskyEmbedVideoView = unknown;
export const AppBskyEmbedVideoViewSchema: v.GenericSchema<unknown, AppBskyEmbedVideoView> = v.unknown();

export type AppBskyFeedDefsBlockedAuthor = unknown;
export const AppBskyFeedDefsBlockedAuthorSchema: v.GenericSchema<unknown, AppBskyFeedDefsBlockedAuthor> = v.unknown();

export type AppBskyFeedDefsBlockedPost = unknown;
export const AppBskyFeedDefsBlockedPostSchema: v.GenericSchema<unknown, AppBskyFeedDefsBlockedPost> = v.unknown();

export type AppBskyFeedDefsFeedViewPost = {
  readonly post: AppBskyFeedDefsPostView;
  readonly reply?: AppBskyFeedDefsReplyRef;
  readonly reason?: AppBskyFeedDefsReasonRepost | AppBskyFeedDefsReasonPin;
  readonly feedContext?: string;
  readonly reqId?: string;
};
export const AppBskyFeedDefsFeedViewPostSchema: v.GenericSchema<unknown, AppBskyFeedDefsFeedViewPost> = v.looseObject({
  post: v.lazy(() => AppBskyFeedDefsPostViewSchema),
  reply: v.optional(v.lazy(() => AppBskyFeedDefsReplyRefSchema)),
  reason: v.optional(v.union([v.lazy(() => AppBskyFeedDefsReasonRepostSchema), v.lazy(() => AppBskyFeedDefsReasonPinSchema)])),
  feedContext: v.optional(v.string()),
  reqId: v.optional(v.string()),
});

export type AppBskyFeedDefsGeneratorView = unknown;
export const AppBskyFeedDefsGeneratorViewSchema: v.GenericSchema<unknown, AppBskyFeedDefsGeneratorView> = v.unknown();

export type AppBskyFeedDefsGeneratorViewerState = {
  readonly like?: string;
};
export const AppBskyFeedDefsGeneratorViewerStateSchema: v.GenericSchema<unknown, AppBskyFeedDefsGeneratorViewerState> = v.looseObject({
  like: v.optional(v.string()),
});

export type AppBskyFeedDefsInteraction = {
  readonly item?: string;
  readonly event?: string;
  readonly feedContext?: string;
  readonly reqId?: string;
};
export const AppBskyFeedDefsInteractionSchema: v.GenericSchema<unknown, AppBskyFeedDefsInteraction> = v.looseObject({
  item: v.optional(v.string()),
  event: v.optional(v.string()),
  feedContext: v.optional(v.string()),
  reqId: v.optional(v.string()),
});

export type AppBskyFeedDefsNotFoundPost = unknown;
export const AppBskyFeedDefsNotFoundPostSchema: v.GenericSchema<unknown, AppBskyFeedDefsNotFoundPost> = v.unknown();

export type AppBskyFeedDefsPostView = unknown;
export const AppBskyFeedDefsPostViewSchema: v.GenericSchema<unknown, AppBskyFeedDefsPostView> = v.unknown();

export type AppBskyFeedDefsReasonPin = unknown;
export const AppBskyFeedDefsReasonPinSchema: v.GenericSchema<unknown, AppBskyFeedDefsReasonPin> = v.unknown();

export type AppBskyFeedDefsReasonRepost = unknown;
export const AppBskyFeedDefsReasonRepostSchema: v.GenericSchema<unknown, AppBskyFeedDefsReasonRepost> = v.unknown();

export type AppBskyFeedDefsReplyRef = unknown;
export const AppBskyFeedDefsReplyRefSchema: v.GenericSchema<unknown, AppBskyFeedDefsReplyRef> = v.unknown();

export type AppBskyFeedDefsSkeletonFeedPost = {
  readonly post: string;
  readonly reason?: AppBskyFeedDefsSkeletonReasonRepost | AppBskyFeedDefsSkeletonReasonPin;
  readonly feedContext?: string;
};
export const AppBskyFeedDefsSkeletonFeedPostSchema: v.GenericSchema<unknown, AppBskyFeedDefsSkeletonFeedPost> = v.looseObject({
  post: v.string(),
  reason: v.optional(v.union([v.lazy(() => AppBskyFeedDefsSkeletonReasonRepostSchema), v.lazy(() => AppBskyFeedDefsSkeletonReasonPinSchema)])),
  feedContext: v.optional(v.string()),
});

export type AppBskyFeedDefsSkeletonReasonPin = unknown;
export const AppBskyFeedDefsSkeletonReasonPinSchema: v.GenericSchema<unknown, AppBskyFeedDefsSkeletonReasonPin> = v.unknown();

export type AppBskyFeedDefsSkeletonReasonRepost = unknown;
export const AppBskyFeedDefsSkeletonReasonRepostSchema: v.GenericSchema<unknown, AppBskyFeedDefsSkeletonReasonRepost> = v.unknown();

export type AppBskyFeedDefsThreadContext = {
  readonly rootAuthorLike?: string;
};
export const AppBskyFeedDefsThreadContextSchema: v.GenericSchema<unknown, AppBskyFeedDefsThreadContext> = v.looseObject({
  rootAuthorLike: v.optional(v.string()),
});

export type AppBskyFeedDefsThreadgateView = {
  readonly uri?: string;
  readonly cid?: string;
  readonly record?: unknown;
  readonly lists?: ReadonlyArray<AppBskyGraphDefsListViewBasic>;
};
export const AppBskyFeedDefsThreadgateViewSchema: v.GenericSchema<unknown, AppBskyFeedDefsThreadgateView> = v.looseObject({
  uri: v.optional(v.string()),
  cid: v.optional(v.string()),
  record: v.optional(v.unknown()),
  lists: v.optional(v.array(v.lazy(() => AppBskyGraphDefsListViewBasicSchema))),
});

export type AppBskyFeedDefsThreadViewPost = {
  readonly post: AppBskyFeedDefsPostView;
  readonly parent?: AppBskyFeedDefsThreadViewPost | AppBskyFeedDefsNotFoundPost | AppBskyFeedDefsBlockedPost;
  readonly replies?: ReadonlyArray<AppBskyFeedDefsThreadViewPost | AppBskyFeedDefsNotFoundPost | AppBskyFeedDefsBlockedPost>;
  readonly threadContext?: AppBskyFeedDefsThreadContext;
};
export const AppBskyFeedDefsThreadViewPostSchema: v.GenericSchema<unknown, AppBskyFeedDefsThreadViewPost> = v.looseObject({
  post: v.lazy(() => AppBskyFeedDefsPostViewSchema),
  parent: v.optional(v.union([v.lazy(() => AppBskyFeedDefsThreadViewPostSchema), v.lazy(() => AppBskyFeedDefsNotFoundPostSchema), v.lazy(() => AppBskyFeedDefsBlockedPostSchema)])),
  replies: v.optional(v.array(v.union([v.lazy(() => AppBskyFeedDefsThreadViewPostSchema), v.lazy(() => AppBskyFeedDefsNotFoundPostSchema), v.lazy(() => AppBskyFeedDefsBlockedPostSchema)]))),
  threadContext: v.optional(v.lazy(() => AppBskyFeedDefsThreadContextSchema)),
});

export type AppBskyFeedDefsViewerState = {
  readonly repost?: string;
  readonly like?: string;
  readonly bookmarked?: boolean;
  readonly threadMuted?: boolean;
  readonly replyDisabled?: boolean;
  readonly embeddingDisabled?: boolean;
  readonly pinned?: boolean;
};
export const AppBskyFeedDefsViewerStateSchema: v.GenericSchema<unknown, AppBskyFeedDefsViewerState> = v.looseObject({
  repost: v.optional(v.string()),
  like: v.optional(v.string()),
  bookmarked: v.optional(v.boolean()),
  threadMuted: v.optional(v.boolean()),
  replyDisabled: v.optional(v.boolean()),
  embeddingDisabled: v.optional(v.boolean()),
  pinned: v.optional(v.boolean()),
});

export type AppBskyFeedDescribeFeedGeneratorFeed = {
  readonly uri: string;
};
export const AppBskyFeedDescribeFeedGeneratorFeedSchema: v.GenericSchema<unknown, AppBskyFeedDescribeFeedGeneratorFeed> = v.looseObject({
  uri: v.string(),
});

export type AppBskyFeedDescribeFeedGeneratorLinks = {
  readonly privacyPolicy?: string;
  readonly termsOfService?: string;
};
export const AppBskyFeedDescribeFeedGeneratorLinksSchema: v.GenericSchema<unknown, AppBskyFeedDescribeFeedGeneratorLinks> = v.looseObject({
  privacyPolicy: v.optional(v.string()),
  termsOfService: v.optional(v.string()),
});

export type AppBskyFeedGenerator = {
  readonly did: string;
  readonly displayName: string;
  readonly description?: string;
  readonly descriptionFacets?: ReadonlyArray<AppBskyRichtextFacet>;
  readonly avatar?: unknown;
  readonly acceptsInteractions?: boolean;
  readonly labels?: ComAtprotoLabelDefsSelfLabels;
  readonly contentMode?: string;
  readonly createdAt: string;
};
export const AppBskyFeedGeneratorSchema: v.GenericSchema<unknown, AppBskyFeedGenerator> = v.looseObject({
  did: v.string(),
  displayName: v.string(),
  description: v.optional(v.string()),
  descriptionFacets: v.optional(v.array(v.lazy(() => AppBskyRichtextFacetSchema))),
  avatar: v.optional(v.unknown()),
  acceptsInteractions: v.optional(v.boolean()),
  labels: v.optional(v.lazy(() => ComAtprotoLabelDefsSelfLabelsSchema)),
  contentMode: v.optional(v.string()),
  createdAt: v.string(),
});

export type AppBskyFeedGetLikesLike = {
  readonly indexedAt: string;
  readonly createdAt: string;
  readonly actor: AppBskyActorDefsProfileView;
};
export const AppBskyFeedGetLikesLikeSchema: v.GenericSchema<unknown, AppBskyFeedGetLikesLike> = v.looseObject({
  indexedAt: v.string(),
  createdAt: v.string(),
  actor: v.lazy(() => AppBskyActorDefsProfileViewSchema),
});

export type AppBskyFeedLike = {
  readonly subject: ComAtprotoRepoStrongRef;
  readonly createdAt: string;
  readonly via?: ComAtprotoRepoStrongRef;
};
export const AppBskyFeedLikeSchema: v.GenericSchema<unknown, AppBskyFeedLike> = v.looseObject({
  subject: v.lazy(() => ComAtprotoRepoStrongRefSchema),
  createdAt: v.string(),
  via: v.optional(v.lazy(() => ComAtprotoRepoStrongRefSchema)),
});

export type AppBskyFeedPost = {
  readonly text: string;
  readonly entities?: ReadonlyArray<AppBskyFeedPostEntity>;
  readonly facets?: ReadonlyArray<AppBskyRichtextFacet>;
  readonly reply?: AppBskyFeedPostReplyRef;
  readonly embed?: AppBskyEmbedImages | AppBskyEmbedVideo | AppBskyEmbedGallery | AppBskyEmbedExternal | AppBskyEmbedRecord | AppBskyEmbedRecordWithMedia;
  readonly langs?: ReadonlyArray<string>;
  readonly labels?: ComAtprotoLabelDefsSelfLabels;
  readonly tags?: ReadonlyArray<string>;
  readonly createdAt: string;
};
export const AppBskyFeedPostSchema: v.GenericSchema<unknown, AppBskyFeedPost> = v.looseObject({
  text: v.string(),
  entities: v.optional(v.array(v.lazy(() => AppBskyFeedPostEntitySchema))),
  facets: v.optional(v.array(v.lazy(() => AppBskyRichtextFacetSchema))),
  reply: v.optional(v.lazy(() => AppBskyFeedPostReplyRefSchema)),
  embed: v.optional(v.union([v.lazy(() => AppBskyEmbedImagesSchema), v.lazy(() => AppBskyEmbedVideoSchema), v.lazy(() => AppBskyEmbedGallerySchema), v.lazy(() => AppBskyEmbedExternalSchema), v.lazy(() => AppBskyEmbedRecordSchema), v.lazy(() => AppBskyEmbedRecordWithMediaSchema)])),
  langs: v.optional(v.array(v.string())),
  labels: v.optional(v.lazy(() => ComAtprotoLabelDefsSelfLabelsSchema)),
  tags: v.optional(v.array(v.string())),
  createdAt: v.string(),
});

export type AppBskyFeedPostEntity = {
  readonly index: AppBskyFeedPostTextSlice;
  readonly type: string;
  readonly value: string;
};
export const AppBskyFeedPostEntitySchema: v.GenericSchema<unknown, AppBskyFeedPostEntity> = v.looseObject({
  index: v.lazy(() => AppBskyFeedPostTextSliceSchema),
  type: v.string(),
  value: v.string(),
});

export type AppBskyFeedPostgate = {
  readonly createdAt: string;
  readonly post: string;
  readonly detachedEmbeddingUris?: ReadonlyArray<string>;
  readonly embeddingRules?: ReadonlyArray<AppBskyFeedPostgateDisableRule>;
};
export const AppBskyFeedPostgateSchema: v.GenericSchema<unknown, AppBskyFeedPostgate> = v.looseObject({
  createdAt: v.string(),
  post: v.string(),
  detachedEmbeddingUris: v.optional(v.array(v.string())),
  embeddingRules: v.optional(v.array(v.lazy(() => AppBskyFeedPostgateDisableRuleSchema))),
});

export type AppBskyFeedPostgateDisableRule = {

};
export const AppBskyFeedPostgateDisableRuleSchema: v.GenericSchema<unknown, AppBskyFeedPostgateDisableRule> = v.looseObject({

});

export type AppBskyFeedPostReplyRef = {
  readonly root: ComAtprotoRepoStrongRef;
  readonly parent: ComAtprotoRepoStrongRef;
};
export const AppBskyFeedPostReplyRefSchema: v.GenericSchema<unknown, AppBskyFeedPostReplyRef> = v.looseObject({
  root: v.lazy(() => ComAtprotoRepoStrongRefSchema),
  parent: v.lazy(() => ComAtprotoRepoStrongRefSchema),
});

export type AppBskyFeedPostTextSlice = unknown;
export const AppBskyFeedPostTextSliceSchema: v.GenericSchema<unknown, AppBskyFeedPostTextSlice> = v.unknown();

export type AppBskyFeedRepost = {
  readonly subject: ComAtprotoRepoStrongRef;
  readonly createdAt: string;
  readonly via?: ComAtprotoRepoStrongRef;
};
export const AppBskyFeedRepostSchema: v.GenericSchema<unknown, AppBskyFeedRepost> = v.looseObject({
  subject: v.lazy(() => ComAtprotoRepoStrongRefSchema),
  createdAt: v.string(),
  via: v.optional(v.lazy(() => ComAtprotoRepoStrongRefSchema)),
});

export type AppBskyFeedThreadgate = {
  readonly post: string;
  readonly allow?: ReadonlyArray<AppBskyFeedThreadgateMentionRule | AppBskyFeedThreadgateFollowerRule | AppBskyFeedThreadgateFollowingRule | AppBskyFeedThreadgateListRule>;
  readonly createdAt: string;
  readonly hiddenReplies?: ReadonlyArray<string>;
};
export const AppBskyFeedThreadgateSchema: v.GenericSchema<unknown, AppBskyFeedThreadgate> = v.looseObject({
  post: v.string(),
  allow: v.optional(v.array(v.union([v.lazy(() => AppBskyFeedThreadgateMentionRuleSchema), v.lazy(() => AppBskyFeedThreadgateFollowerRuleSchema), v.lazy(() => AppBskyFeedThreadgateFollowingRuleSchema), v.lazy(() => AppBskyFeedThreadgateListRuleSchema)]))),
  createdAt: v.string(),
  hiddenReplies: v.optional(v.array(v.string())),
});

export type AppBskyFeedThreadgateFollowerRule = {

};
export const AppBskyFeedThreadgateFollowerRuleSchema: v.GenericSchema<unknown, AppBskyFeedThreadgateFollowerRule> = v.looseObject({

});

export type AppBskyFeedThreadgateFollowingRule = {

};
export const AppBskyFeedThreadgateFollowingRuleSchema: v.GenericSchema<unknown, AppBskyFeedThreadgateFollowingRule> = v.looseObject({

});

export type AppBskyFeedThreadgateListRule = {
  readonly list: string;
};
export const AppBskyFeedThreadgateListRuleSchema: v.GenericSchema<unknown, AppBskyFeedThreadgateListRule> = v.looseObject({
  list: v.string(),
});

export type AppBskyFeedThreadgateMentionRule = {

};
export const AppBskyFeedThreadgateMentionRuleSchema: v.GenericSchema<unknown, AppBskyFeedThreadgateMentionRule> = v.looseObject({

});

export type AppBskyGraphBlock = {
  readonly subject: string;
  readonly createdAt: string;
};
export const AppBskyGraphBlockSchema: v.GenericSchema<unknown, AppBskyGraphBlock> = v.looseObject({
  subject: v.string(),
  createdAt: v.string(),
});

export type AppBskyGraphDefsListItemView = unknown;
export const AppBskyGraphDefsListItemViewSchema: v.GenericSchema<unknown, AppBskyGraphDefsListItemView> = v.unknown();

export type AppBskyGraphDefsListPurpose = unknown;
export const AppBskyGraphDefsListPurposeSchema: v.GenericSchema<unknown, AppBskyGraphDefsListPurpose> = v.unknown();

export type AppBskyGraphDefsListView = unknown;
export const AppBskyGraphDefsListViewSchema: v.GenericSchema<unknown, AppBskyGraphDefsListView> = v.unknown();

export type AppBskyGraphDefsListViewBasic = {
  readonly uri: string;
  readonly cid: string;
  readonly name: string;
  readonly purpose: AppBskyGraphDefsListPurpose;
  readonly avatar?: string;
  readonly listItemCount?: number;
  readonly labels?: ReadonlyArray<ComAtprotoLabelDefsLabel>;
  readonly viewer?: AppBskyGraphDefsListViewerState;
  readonly indexedAt?: string;
};
export const AppBskyGraphDefsListViewBasicSchema: v.GenericSchema<unknown, AppBskyGraphDefsListViewBasic> = v.looseObject({
  uri: v.string(),
  cid: v.string(),
  name: v.string(),
  purpose: v.lazy(() => AppBskyGraphDefsListPurposeSchema),
  avatar: v.optional(v.string()),
  listItemCount: v.optional(v.number()),
  labels: v.optional(v.array(v.lazy(() => ComAtprotoLabelDefsLabelSchema))),
  viewer: v.optional(v.lazy(() => AppBskyGraphDefsListViewerStateSchema)),
  indexedAt: v.optional(v.string()),
});

export type AppBskyGraphDefsListViewerState = unknown;
export const AppBskyGraphDefsListViewerStateSchema: v.GenericSchema<unknown, AppBskyGraphDefsListViewerState> = v.unknown();

export type AppBskyGraphDefsNotFoundActor = {
  readonly actor: string;
  readonly notFound: boolean;
};
export const AppBskyGraphDefsNotFoundActorSchema: v.GenericSchema<unknown, AppBskyGraphDefsNotFoundActor> = v.looseObject({
  actor: v.string(),
  notFound: v.boolean(),
});

export type AppBskyGraphDefsRelationship = {
  readonly did: string;
  readonly following?: string;
  readonly followedBy?: string;
  readonly blocking?: string;
  readonly blockedBy?: string;
  readonly blockingByList?: string;
  readonly blockedByList?: string;
};
export const AppBskyGraphDefsRelationshipSchema: v.GenericSchema<unknown, AppBskyGraphDefsRelationship> = v.looseObject({
  did: v.string(),
  following: v.optional(v.string()),
  followedBy: v.optional(v.string()),
  blocking: v.optional(v.string()),
  blockedBy: v.optional(v.string()),
  blockingByList: v.optional(v.string()),
  blockedByList: v.optional(v.string()),
});

export type AppBskyGraphDefsStarterPackView = unknown;
export const AppBskyGraphDefsStarterPackViewSchema: v.GenericSchema<unknown, AppBskyGraphDefsStarterPackView> = v.unknown();

export type AppBskyGraphDefsStarterPackViewBasic = unknown;
export const AppBskyGraphDefsStarterPackViewBasicSchema: v.GenericSchema<unknown, AppBskyGraphDefsStarterPackViewBasic> = v.unknown();

export type AppBskyGraphFollow = {
  readonly subject: string;
  readonly createdAt: string;
  readonly via?: ComAtprotoRepoStrongRef;
};
export const AppBskyGraphFollowSchema: v.GenericSchema<unknown, AppBskyGraphFollow> = v.looseObject({
  subject: v.string(),
  createdAt: v.string(),
  via: v.optional(v.lazy(() => ComAtprotoRepoStrongRefSchema)),
});

export type AppBskyGraphGetListsWithMembershipListWithMembership = {
  readonly list: AppBskyGraphDefsListView;
  readonly listItem?: AppBskyGraphDefsListItemView;
};
export const AppBskyGraphGetListsWithMembershipListWithMembershipSchema: v.GenericSchema<unknown, AppBskyGraphGetListsWithMembershipListWithMembership> = v.looseObject({
  list: v.lazy(() => AppBskyGraphDefsListViewSchema),
  listItem: v.optional(v.lazy(() => AppBskyGraphDefsListItemViewSchema)),
});

export type AppBskyGraphGetStarterPacksWithMembershipStarterPackWithMembership = {
  readonly starterPack: AppBskyGraphDefsStarterPackView;
  readonly listItem?: AppBskyGraphDefsListItemView;
};
export const AppBskyGraphGetStarterPacksWithMembershipStarterPackWithMembershipSchema: v.GenericSchema<unknown, AppBskyGraphGetStarterPacksWithMembershipStarterPackWithMembership> = v.looseObject({
  starterPack: v.lazy(() => AppBskyGraphDefsStarterPackViewSchema),
  listItem: v.optional(v.lazy(() => AppBskyGraphDefsListItemViewSchema)),
});

export type AppBskyGraphList = {
  readonly purpose: AppBskyGraphDefsListPurpose;
  readonly name: string;
  readonly description?: string;
  readonly descriptionFacets?: ReadonlyArray<AppBskyRichtextFacet>;
  readonly avatar?: unknown;
  readonly labels?: ComAtprotoLabelDefsSelfLabels;
  readonly createdAt: string;
};
export const AppBskyGraphListSchema: v.GenericSchema<unknown, AppBskyGraphList> = v.looseObject({
  purpose: v.lazy(() => AppBskyGraphDefsListPurposeSchema),
  name: v.string(),
  description: v.optional(v.string()),
  descriptionFacets: v.optional(v.array(v.lazy(() => AppBskyRichtextFacetSchema))),
  avatar: v.optional(v.unknown()),
  labels: v.optional(v.lazy(() => ComAtprotoLabelDefsSelfLabelsSchema)),
  createdAt: v.string(),
});

export type AppBskyGraphListblock = {
  readonly subject: string;
  readonly createdAt: string;
};
export const AppBskyGraphListblockSchema: v.GenericSchema<unknown, AppBskyGraphListblock> = v.looseObject({
  subject: v.string(),
  createdAt: v.string(),
});

export type AppBskyGraphListitem = {
  readonly subject: string;
  readonly list: string;
  readonly createdAt: string;
};
export const AppBskyGraphListitemSchema: v.GenericSchema<unknown, AppBskyGraphListitem> = v.looseObject({
  subject: v.string(),
  list: v.string(),
  createdAt: v.string(),
});

export type AppBskyGraphStarterpack = {
  readonly name: string;
  readonly description?: string;
  readonly descriptionFacets?: ReadonlyArray<AppBskyRichtextFacet>;
  readonly list: string;
  readonly feeds?: ReadonlyArray<AppBskyGraphStarterpackFeedItem>;
  readonly createdAt: string;
};
export const AppBskyGraphStarterpackSchema: v.GenericSchema<unknown, AppBskyGraphStarterpack> = v.looseObject({
  name: v.string(),
  description: v.optional(v.string()),
  descriptionFacets: v.optional(v.array(v.lazy(() => AppBskyRichtextFacetSchema))),
  list: v.string(),
  feeds: v.optional(v.array(v.lazy(() => AppBskyGraphStarterpackFeedItemSchema))),
  createdAt: v.string(),
});

export type AppBskyGraphStarterpackFeedItem = {
  readonly uri: string;
};
export const AppBskyGraphStarterpackFeedItemSchema: v.GenericSchema<unknown, AppBskyGraphStarterpackFeedItem> = v.looseObject({
  uri: v.string(),
});

export type AppBskyGraphVerification = {
  readonly subject: string;
  readonly handle: string;
  readonly displayName: string;
  readonly createdAt: string;
};
export const AppBskyGraphVerificationSchema: v.GenericSchema<unknown, AppBskyGraphVerification> = v.looseObject({
  subject: v.string(),
  handle: v.string(),
  displayName: v.string(),
  createdAt: v.string(),
});

export type AppBskyLabelerDefsLabelerPolicies = unknown;
export const AppBskyLabelerDefsLabelerPoliciesSchema: v.GenericSchema<unknown, AppBskyLabelerDefsLabelerPolicies> = v.unknown();

export type AppBskyLabelerDefsLabelerView = unknown;
export const AppBskyLabelerDefsLabelerViewSchema: v.GenericSchema<unknown, AppBskyLabelerDefsLabelerView> = v.unknown();

export type AppBskyLabelerDefsLabelerViewDetailed = {
  readonly uri: string;
  readonly cid: string;
  readonly creator: AppBskyActorDefsProfileView;
  readonly policies: AppBskyLabelerDefsLabelerPolicies;
  readonly likeCount?: number;
  readonly viewer?: AppBskyLabelerDefsLabelerViewerState;
  readonly indexedAt: string;
  readonly labels?: ReadonlyArray<ComAtprotoLabelDefsLabel>;
  readonly reasonTypes?: ReadonlyArray<ComAtprotoModerationDefsReasonType>;
  readonly subjectTypes?: ReadonlyArray<ComAtprotoModerationDefsSubjectType>;
  readonly subjectCollections?: ReadonlyArray<string>;
};
export const AppBskyLabelerDefsLabelerViewDetailedSchema: v.GenericSchema<unknown, AppBskyLabelerDefsLabelerViewDetailed> = v.looseObject({
  uri: v.string(),
  cid: v.string(),
  creator: v.lazy(() => AppBskyActorDefsProfileViewSchema),
  policies: v.lazy(() => AppBskyLabelerDefsLabelerPoliciesSchema),
  likeCount: v.optional(v.number()),
  viewer: v.optional(v.lazy(() => AppBskyLabelerDefsLabelerViewerStateSchema)),
  indexedAt: v.string(),
  labels: v.optional(v.array(v.lazy(() => ComAtprotoLabelDefsLabelSchema))),
  reasonTypes: v.optional(v.array(v.lazy(() => ComAtprotoModerationDefsReasonTypeSchema))),
  subjectTypes: v.optional(v.array(v.lazy(() => ComAtprotoModerationDefsSubjectTypeSchema))),
  subjectCollections: v.optional(v.array(v.string())),
});

export type AppBskyLabelerDefsLabelerViewerState = unknown;
export const AppBskyLabelerDefsLabelerViewerStateSchema: v.GenericSchema<unknown, AppBskyLabelerDefsLabelerViewerState> = v.unknown();

export type AppBskyLabelerService = {
  readonly policies: AppBskyLabelerDefsLabelerPolicies;
  readonly labels?: ComAtprotoLabelDefsSelfLabels;
  readonly createdAt: string;
  readonly reasonTypes?: ReadonlyArray<ComAtprotoModerationDefsReasonType>;
  readonly subjectTypes?: ReadonlyArray<ComAtprotoModerationDefsSubjectType>;
  readonly subjectCollections?: ReadonlyArray<string>;
};
export const AppBskyLabelerServiceSchema: v.GenericSchema<unknown, AppBskyLabelerService> = v.looseObject({
  policies: v.lazy(() => AppBskyLabelerDefsLabelerPoliciesSchema),
  labels: v.optional(v.lazy(() => ComAtprotoLabelDefsSelfLabelsSchema)),
  createdAt: v.string(),
  reasonTypes: v.optional(v.array(v.lazy(() => ComAtprotoModerationDefsReasonTypeSchema))),
  subjectTypes: v.optional(v.array(v.lazy(() => ComAtprotoModerationDefsSubjectTypeSchema))),
  subjectCollections: v.optional(v.array(v.string())),
});

export type AppBskyNotificationDeclaration = {
  readonly allowSubscriptions: string;
};
export const AppBskyNotificationDeclarationSchema: v.GenericSchema<unknown, AppBskyNotificationDeclaration> = v.looseObject({
  allowSubscriptions: v.string(),
});

export type AppBskyNotificationDefsActivitySubscription = {
  readonly post: boolean;
  readonly reply: boolean;
};
export const AppBskyNotificationDefsActivitySubscriptionSchema: v.GenericSchema<unknown, AppBskyNotificationDefsActivitySubscription> = v.looseObject({
  post: v.boolean(),
  reply: v.boolean(),
});

export type AppBskyNotificationDefsChatPreference = {
  readonly include: string;
  readonly push: boolean;
};
export const AppBskyNotificationDefsChatPreferenceSchema: v.GenericSchema<unknown, AppBskyNotificationDefsChatPreference> = v.looseObject({
  include: v.string(),
  push: v.boolean(),
});

export type AppBskyNotificationDefsFilterablePreference = {
  readonly include: string;
  readonly list: boolean;
  readonly push: boolean;
};
export const AppBskyNotificationDefsFilterablePreferenceSchema: v.GenericSchema<unknown, AppBskyNotificationDefsFilterablePreference> = v.looseObject({
  include: v.string(),
  list: v.boolean(),
  push: v.boolean(),
});

export type AppBskyNotificationDefsPreference = {
  readonly list: boolean;
  readonly push: boolean;
};
export const AppBskyNotificationDefsPreferenceSchema: v.GenericSchema<unknown, AppBskyNotificationDefsPreference> = v.looseObject({
  list: v.boolean(),
  push: v.boolean(),
});

export type AppBskyNotificationDefsPreferences = {
  readonly chat: AppBskyNotificationDefsChatPreference;
  readonly follow: AppBskyNotificationDefsFilterablePreference;
  readonly like: AppBskyNotificationDefsFilterablePreference;
  readonly likeViaRepost: AppBskyNotificationDefsFilterablePreference;
  readonly mention: AppBskyNotificationDefsFilterablePreference;
  readonly quote: AppBskyNotificationDefsFilterablePreference;
  readonly reply: AppBskyNotificationDefsFilterablePreference;
  readonly repost: AppBskyNotificationDefsFilterablePreference;
  readonly repostViaRepost: AppBskyNotificationDefsFilterablePreference;
  readonly starterpackJoined: AppBskyNotificationDefsPreference;
  readonly subscribedPost: AppBskyNotificationDefsPreference;
  readonly unverified: AppBskyNotificationDefsPreference;
  readonly verified: AppBskyNotificationDefsPreference;
};
export const AppBskyNotificationDefsPreferencesSchema: v.GenericSchema<unknown, AppBskyNotificationDefsPreferences> = v.looseObject({
  chat: v.lazy(() => AppBskyNotificationDefsChatPreferenceSchema),
  follow: v.lazy(() => AppBskyNotificationDefsFilterablePreferenceSchema),
  like: v.lazy(() => AppBskyNotificationDefsFilterablePreferenceSchema),
  likeViaRepost: v.lazy(() => AppBskyNotificationDefsFilterablePreferenceSchema),
  mention: v.lazy(() => AppBskyNotificationDefsFilterablePreferenceSchema),
  quote: v.lazy(() => AppBskyNotificationDefsFilterablePreferenceSchema),
  reply: v.lazy(() => AppBskyNotificationDefsFilterablePreferenceSchema),
  repost: v.lazy(() => AppBskyNotificationDefsFilterablePreferenceSchema),
  repostViaRepost: v.lazy(() => AppBskyNotificationDefsFilterablePreferenceSchema),
  starterpackJoined: v.lazy(() => AppBskyNotificationDefsPreferenceSchema),
  subscribedPost: v.lazy(() => AppBskyNotificationDefsPreferenceSchema),
  unverified: v.lazy(() => AppBskyNotificationDefsPreferenceSchema),
  verified: v.lazy(() => AppBskyNotificationDefsPreferenceSchema),
});

export type AppBskyNotificationDefsRecordDeleted = {

};
export const AppBskyNotificationDefsRecordDeletedSchema: v.GenericSchema<unknown, AppBskyNotificationDefsRecordDeleted> = v.looseObject({

});

export type AppBskyNotificationDefsSubjectActivitySubscription = {
  readonly subject: string;
  readonly activitySubscription: AppBskyNotificationDefsActivitySubscription;
};
export const AppBskyNotificationDefsSubjectActivitySubscriptionSchema: v.GenericSchema<unknown, AppBskyNotificationDefsSubjectActivitySubscription> = v.looseObject({
  subject: v.string(),
  activitySubscription: v.lazy(() => AppBskyNotificationDefsActivitySubscriptionSchema),
});

export type AppBskyNotificationListNotificationsNotification = {
  readonly uri: string;
  readonly cid: string;
  readonly author: AppBskyActorDefsProfileView;
  readonly reason: string;
  readonly reasonSubject?: string;
  readonly record: unknown;
  readonly starterPack?: AppBskyGraphDefsStarterPackViewBasic;
  readonly isRead: boolean;
  readonly indexedAt: string;
  readonly labels?: ReadonlyArray<ComAtprotoLabelDefsLabel>;
};
export const AppBskyNotificationListNotificationsNotificationSchema: v.GenericSchema<unknown, AppBskyNotificationListNotificationsNotification> = v.looseObject({
  uri: v.string(),
  cid: v.string(),
  author: v.lazy(() => AppBskyActorDefsProfileViewSchema),
  reason: v.string(),
  reasonSubject: v.optional(v.string()),
  record: v.unknown(),
  starterPack: v.optional(v.lazy(() => AppBskyGraphDefsStarterPackViewBasicSchema)),
  isRead: v.boolean(),
  indexedAt: v.string(),
  labels: v.optional(v.array(v.lazy(() => ComAtprotoLabelDefsLabelSchema))),
});

export type AppBskyRichtextFacet = unknown;
export const AppBskyRichtextFacetSchema: v.GenericSchema<unknown, AppBskyRichtextFacet> = v.unknown();

export type AppBskyRichtextFacetByteSlice = {
  readonly byteStart: number;
  readonly byteEnd: number;
};
export const AppBskyRichtextFacetByteSliceSchema: v.GenericSchema<unknown, AppBskyRichtextFacetByteSlice> = v.looseObject({
  byteStart: v.number(),
  byteEnd: v.number(),
});

export type AppBskyRichtextFacetLink = {
  readonly uri: string;
};
export const AppBskyRichtextFacetLinkSchema: v.GenericSchema<unknown, AppBskyRichtextFacetLink> = v.looseObject({
  uri: v.string(),
});

export type AppBskyRichtextFacetMention = {
  readonly did: string;
};
export const AppBskyRichtextFacetMentionSchema: v.GenericSchema<unknown, AppBskyRichtextFacetMention> = v.looseObject({
  did: v.string(),
});

export type AppBskyRichtextFacetTag = {
  readonly tag: string;
};
export const AppBskyRichtextFacetTagSchema: v.GenericSchema<unknown, AppBskyRichtextFacetTag> = v.looseObject({
  tag: v.string(),
});

export type AppBskyUnspeccedDefsAgeAssuranceEvent = {
  readonly createdAt: string;
  readonly status: string;
  readonly attemptId: string;
  readonly email?: string;
  readonly initIp?: string;
  readonly initUa?: string;
  readonly completeIp?: string;
  readonly completeUa?: string;
};
export const AppBskyUnspeccedDefsAgeAssuranceEventSchema: v.GenericSchema<unknown, AppBskyUnspeccedDefsAgeAssuranceEvent> = v.looseObject({
  createdAt: v.string(),
  status: v.string(),
  attemptId: v.string(),
  email: v.optional(v.string()),
  initIp: v.optional(v.string()),
  initUa: v.optional(v.string()),
  completeIp: v.optional(v.string()),
  completeUa: v.optional(v.string()),
});

export type AppBskyUnspeccedDefsAgeAssuranceState = {
  readonly lastInitiatedAt?: string;
  readonly status: string;
};
export const AppBskyUnspeccedDefsAgeAssuranceStateSchema: v.GenericSchema<unknown, AppBskyUnspeccedDefsAgeAssuranceState> = v.looseObject({
  lastInitiatedAt: v.optional(v.string()),
  status: v.string(),
});

export type AppBskyUnspeccedDefsSkeletonSearchActor = {
  readonly did: string;
};
export const AppBskyUnspeccedDefsSkeletonSearchActorSchema: v.GenericSchema<unknown, AppBskyUnspeccedDefsSkeletonSearchActor> = v.looseObject({
  did: v.string(),
});

export type AppBskyUnspeccedDefsSkeletonSearchPost = {
  readonly uri: string;
};
export const AppBskyUnspeccedDefsSkeletonSearchPostSchema: v.GenericSchema<unknown, AppBskyUnspeccedDefsSkeletonSearchPost> = v.looseObject({
  uri: v.string(),
});

export type AppBskyUnspeccedDefsSkeletonSearchStarterPack = {
  readonly uri: string;
};
export const AppBskyUnspeccedDefsSkeletonSearchStarterPackSchema: v.GenericSchema<unknown, AppBskyUnspeccedDefsSkeletonSearchStarterPack> = v.looseObject({
  uri: v.string(),
});

export type AppBskyUnspeccedDefsSkeletonTrend = {
  readonly topic: string;
  readonly displayName: string;
  readonly description?: string;
  readonly link: string;
  readonly startedAt: string;
  readonly postCount: number;
  readonly status?: string;
  readonly category?: string;
  readonly dids: ReadonlyArray<string>;
};
export const AppBskyUnspeccedDefsSkeletonTrendSchema: v.GenericSchema<unknown, AppBskyUnspeccedDefsSkeletonTrend> = v.looseObject({
  topic: v.string(),
  displayName: v.string(),
  description: v.optional(v.string()),
  link: v.string(),
  startedAt: v.string(),
  postCount: v.number(),
  status: v.optional(v.string()),
  category: v.optional(v.string()),
  dids: v.array(v.string()),
});

export type AppBskyUnspeccedDefsThreadItemBlocked = {
  readonly author: AppBskyFeedDefsBlockedAuthor;
};
export const AppBskyUnspeccedDefsThreadItemBlockedSchema: v.GenericSchema<unknown, AppBskyUnspeccedDefsThreadItemBlocked> = v.looseObject({
  author: v.lazy(() => AppBskyFeedDefsBlockedAuthorSchema),
});

export type AppBskyUnspeccedDefsThreadItemNotFound = {

};
export const AppBskyUnspeccedDefsThreadItemNotFoundSchema: v.GenericSchema<unknown, AppBskyUnspeccedDefsThreadItemNotFound> = v.looseObject({

});

export type AppBskyUnspeccedDefsThreadItemNoUnauthenticated = {

};
export const AppBskyUnspeccedDefsThreadItemNoUnauthenticatedSchema: v.GenericSchema<unknown, AppBskyUnspeccedDefsThreadItemNoUnauthenticated> = v.looseObject({

});

export type AppBskyUnspeccedDefsThreadItemPost = {
  readonly post: AppBskyFeedDefsPostView;
  readonly moreParents: boolean;
  readonly moreReplies: number;
  readonly opThread: boolean;
  readonly opThreadPostIndex?: number;
  readonly opThreadPostCount?: number;
  readonly hiddenByThreadgate: boolean;
  readonly mutedByViewer: boolean;
};
export const AppBskyUnspeccedDefsThreadItemPostSchema: v.GenericSchema<unknown, AppBskyUnspeccedDefsThreadItemPost> = v.looseObject({
  post: v.lazy(() => AppBskyFeedDefsPostViewSchema),
  moreParents: v.boolean(),
  moreReplies: v.number(),
  opThread: v.boolean(),
  opThreadPostIndex: v.optional(v.number()),
  opThreadPostCount: v.optional(v.number()),
  hiddenByThreadgate: v.boolean(),
  mutedByViewer: v.boolean(),
});

export type AppBskyUnspeccedDefsTrendingTopic = {
  readonly topic: string;
  readonly displayName?: string;
  readonly description?: string;
  readonly link: string;
};
export const AppBskyUnspeccedDefsTrendingTopicSchema: v.GenericSchema<unknown, AppBskyUnspeccedDefsTrendingTopic> = v.looseObject({
  topic: v.string(),
  displayName: v.optional(v.string()),
  description: v.optional(v.string()),
  link: v.string(),
});

export type AppBskyUnspeccedDefsTrendView = {
  readonly topic: string;
  readonly displayName: string;
  readonly description?: string;
  readonly link: string;
  readonly startedAt: string;
  readonly postCount: number;
  readonly status?: string;
  readonly category?: string;
  readonly actors: ReadonlyArray<AppBskyActorDefsProfileViewBasic>;
};
export const AppBskyUnspeccedDefsTrendViewSchema: v.GenericSchema<unknown, AppBskyUnspeccedDefsTrendView> = v.looseObject({
  topic: v.string(),
  displayName: v.string(),
  description: v.optional(v.string()),
  link: v.string(),
  startedAt: v.string(),
  postCount: v.number(),
  status: v.optional(v.string()),
  category: v.optional(v.string()),
  actors: v.array(v.lazy(() => AppBskyActorDefsProfileViewBasicSchema)),
});

export type AppBskyUnspeccedGetConfigLiveNowConfig = {
  readonly did: string;
  readonly domains: ReadonlyArray<string>;
};
export const AppBskyUnspeccedGetConfigLiveNowConfigSchema: v.GenericSchema<unknown, AppBskyUnspeccedGetConfigLiveNowConfig> = v.looseObject({
  did: v.string(),
  domains: v.array(v.string()),
});

export type AppBskyUnspeccedGetPostThreadOtherV2ThreadItem = {
  readonly uri: string;
  readonly depth: number;
  readonly value: AppBskyUnspeccedDefsThreadItemPost;
};
export const AppBskyUnspeccedGetPostThreadOtherV2ThreadItemSchema: v.GenericSchema<unknown, AppBskyUnspeccedGetPostThreadOtherV2ThreadItem> = v.looseObject({
  uri: v.string(),
  depth: v.number(),
  value: v.lazy(() => AppBskyUnspeccedDefsThreadItemPostSchema),
});

export type AppBskyUnspeccedGetPostThreadV2ThreadItem = {
  readonly uri: string;
  readonly depth: number;
  readonly value: AppBskyUnspeccedDefsThreadItemPost | AppBskyUnspeccedDefsThreadItemNoUnauthenticated | AppBskyUnspeccedDefsThreadItemNotFound | AppBskyUnspeccedDefsThreadItemBlocked;
};
export const AppBskyUnspeccedGetPostThreadV2ThreadItemSchema: v.GenericSchema<unknown, AppBskyUnspeccedGetPostThreadV2ThreadItem> = v.looseObject({
  uri: v.string(),
  depth: v.number(),
  value: v.union([v.lazy(() => AppBskyUnspeccedDefsThreadItemPostSchema), v.lazy(() => AppBskyUnspeccedDefsThreadItemNoUnauthenticatedSchema), v.lazy(() => AppBskyUnspeccedDefsThreadItemNotFoundSchema), v.lazy(() => AppBskyUnspeccedDefsThreadItemBlockedSchema)]),
});

export type AppBskyUnspeccedGetTaggedSuggestionsSuggestion = {
  readonly tag: string;
  readonly subjectType: string;
  readonly subject: string;
};
export const AppBskyUnspeccedGetTaggedSuggestionsSuggestionSchema: v.GenericSchema<unknown, AppBskyUnspeccedGetTaggedSuggestionsSuggestion> = v.looseObject({
  tag: v.string(),
  subjectType: v.string(),
  subject: v.string(),
});

export type AppBskyVideoDefsJobStatus = {
  readonly jobId: string;
  readonly did: string;
  readonly state: string;
  readonly progress?: number;
  readonly blob?: unknown;
  readonly error?: string;
  readonly failureCode?: string;
  readonly message?: string;
};
export const AppBskyVideoDefsJobStatusSchema: v.GenericSchema<unknown, AppBskyVideoDefsJobStatus> = v.looseObject({
  jobId: v.string(),
  did: v.string(),
  state: v.string(),
  progress: v.optional(v.number()),
  blob: v.optional(v.unknown()),
  error: v.optional(v.string()),
  failureCode: v.optional(v.string()),
  message: v.optional(v.string()),
});

export type ApplyWritesParams = {
  readonly repo: string;
  readonly validate?: boolean;
  readonly writes: ReadonlyArray<ComAtprotoRepoApplyWritesCreate | ComAtprotoRepoApplyWritesUpdate | ComAtprotoRepoApplyWritesDelete>;
  readonly swapCommit?: string;
};
export const ApplyWritesParamsSchema: v.GenericSchema<unknown, ApplyWritesParams> = v.looseObject({
  repo: v.string(),
  validate: v.optional(v.boolean()),
  writes: v.array(v.union([v.lazy(() => ComAtprotoRepoApplyWritesCreateSchema), v.lazy(() => ComAtprotoRepoApplyWritesUpdateSchema), v.lazy(() => ComAtprotoRepoApplyWritesDeleteSchema)])),
  swapCommit: v.optional(v.string()),
});

export type ApplyWritesResponse = {
  readonly data: Inline610;
};
export const ApplyWritesResponseSchema: v.GenericSchema<unknown, ApplyWritesResponse> = v.looseObject({
  data: v.lazy(() => Inline610Schema),
});

export type BeginParams = {
  readonly email: string;
  readonly language: string;
  readonly countryCode: string;
  readonly regionCode?: string;
};
export const BeginParamsSchema: v.GenericSchema<unknown, BeginParams> = v.looseObject({
  email: v.string(),
  language: v.string(),
  countryCode: v.string(),
  regionCode: v.optional(v.string()),
});

export type BeginResponse = {
  readonly data: AppBskyAgeassuranceDefsState;
};
export const BeginResponseSchema: v.GenericSchema<unknown, BeginResponse> = v.looseObject({
  data: v.lazy(() => AppBskyAgeassuranceDefsStateSchema),
});

export type CheckAccountStatusParams = {

};
export const CheckAccountStatusParamsSchema: v.GenericSchema<unknown, CheckAccountStatusParams> = v.looseObject({

});

export type CheckAccountStatusResponse = {
  readonly data: Inline641;
};
export const CheckAccountStatusResponseSchema: v.GenericSchema<unknown, CheckAccountStatusResponse> = v.looseObject({
  data: v.lazy(() => Inline641Schema),
});

export type CheckHandleAvailabilityParams = {
  readonly handle: string;
  readonly email?: string;
  readonly birthDate?: string;
};
export const CheckHandleAvailabilityParamsSchema: v.GenericSchema<unknown, CheckHandleAvailabilityParams> = v.looseObject({
  handle: v.string(),
  email: v.optional(v.string()),
  birthDate: v.optional(v.string()),
});

export type CheckHandleAvailabilityResponse = {
  readonly data: Inline737;
};
export const CheckHandleAvailabilityResponseSchema: v.GenericSchema<unknown, CheckHandleAvailabilityResponse> = v.looseObject({
  data: v.lazy(() => Inline737Schema),
});

export type CheckSignupQueueParams = {

};
export const CheckSignupQueueParamsSchema: v.GenericSchema<unknown, CheckSignupQueueParams> = v.looseObject({

});

export type CheckSignupQueueResponse = {
  readonly data: Inline740;
};
export const CheckSignupQueueResponseSchema: v.GenericSchema<unknown, CheckSignupQueueResponse> = v.looseObject({
  data: v.lazy(() => Inline740Schema),
});

export type ComAtprotoAdminDefsAccountView = {
  readonly did: string;
  readonly handle: string;
  readonly email?: string;
  readonly relatedRecords?: ReadonlyArray<unknown>;
  readonly indexedAt: string;
  readonly invitedBy?: ComAtprotoServerDefsInviteCode;
  readonly invites?: ReadonlyArray<ComAtprotoServerDefsInviteCode>;
  readonly invitesDisabled?: boolean;
  readonly emailConfirmedAt?: string;
  readonly inviteNote?: string;
  readonly deactivatedAt?: string;
  readonly threatSignatures?: ReadonlyArray<ComAtprotoAdminDefsThreatSignature>;
};
export const ComAtprotoAdminDefsAccountViewSchema: v.GenericSchema<unknown, ComAtprotoAdminDefsAccountView> = v.looseObject({
  did: v.string(),
  handle: v.string(),
  email: v.optional(v.string()),
  relatedRecords: v.optional(v.array(v.unknown())),
  indexedAt: v.string(),
  invitedBy: v.optional(v.lazy(() => ComAtprotoServerDefsInviteCodeSchema)),
  invites: v.optional(v.array(v.lazy(() => ComAtprotoServerDefsInviteCodeSchema))),
  invitesDisabled: v.optional(v.boolean()),
  emailConfirmedAt: v.optional(v.string()),
  inviteNote: v.optional(v.string()),
  deactivatedAt: v.optional(v.string()),
  threatSignatures: v.optional(v.array(v.lazy(() => ComAtprotoAdminDefsThreatSignatureSchema))),
});

export type ComAtprotoAdminDefsRepoBlobRef = {
  readonly did: string;
  readonly cid: string;
  readonly recordUri?: string;
};
export const ComAtprotoAdminDefsRepoBlobRefSchema: v.GenericSchema<unknown, ComAtprotoAdminDefsRepoBlobRef> = v.looseObject({
  did: v.string(),
  cid: v.string(),
  recordUri: v.optional(v.string()),
});

export type ComAtprotoAdminDefsRepoRef = {
  readonly did: string;
};
export const ComAtprotoAdminDefsRepoRefSchema: v.GenericSchema<unknown, ComAtprotoAdminDefsRepoRef> = v.looseObject({
  did: v.string(),
});

export type ComAtprotoAdminDefsStatusAttr = {
  readonly applied: boolean;
  readonly ref?: string;
};
export const ComAtprotoAdminDefsStatusAttrSchema: v.GenericSchema<unknown, ComAtprotoAdminDefsStatusAttr> = v.looseObject({
  applied: v.boolean(),
  ref: v.optional(v.string()),
});

export type ComAtprotoAdminDefsThreatSignature = unknown;
export const ComAtprotoAdminDefsThreatSignatureSchema: v.GenericSchema<unknown, ComAtprotoAdminDefsThreatSignature> = v.unknown();

export type ComAtprotoIdentityDefsIdentityInfo = {
  readonly did: string;
  readonly handle: string;
  readonly didDoc: unknown;
};
export const ComAtprotoIdentityDefsIdentityInfoSchema: v.GenericSchema<unknown, ComAtprotoIdentityDefsIdentityInfo> = v.looseObject({
  did: v.string(),
  handle: v.string(),
  didDoc: v.unknown(),
});

export type ComAtprotoLabelDefsLabel = unknown;
export const ComAtprotoLabelDefsLabelSchema: v.GenericSchema<unknown, ComAtprotoLabelDefsLabel> = v.unknown();

export type ComAtprotoLabelDefsLabelValue = string;
export const ComAtprotoLabelDefsLabelValueSchema: v.GenericSchema<unknown, ComAtprotoLabelDefsLabelValue> = v.string();

export type ComAtprotoLabelDefsLabelValueDefinition = {
  readonly identifier: string;
  readonly severity: string;
  readonly blurs: string;
  readonly defaultSetting?: string;
  readonly adultOnly?: boolean;
  readonly locales: ReadonlyArray<ComAtprotoLabelDefsLabelValueDefinitionStrings>;
};
export const ComAtprotoLabelDefsLabelValueDefinitionSchema: v.GenericSchema<unknown, ComAtprotoLabelDefsLabelValueDefinition> = v.looseObject({
  identifier: v.string(),
  severity: v.string(),
  blurs: v.string(),
  defaultSetting: v.optional(v.string()),
  adultOnly: v.optional(v.boolean()),
  locales: v.array(v.lazy(() => ComAtprotoLabelDefsLabelValueDefinitionStringsSchema)),
});

export type ComAtprotoLabelDefsLabelValueDefinitionStrings = unknown;
export const ComAtprotoLabelDefsLabelValueDefinitionStringsSchema: v.GenericSchema<unknown, ComAtprotoLabelDefsLabelValueDefinitionStrings> = v.unknown();

export type ComAtprotoLabelDefsSelfLabel = {
  readonly val: string;
};
export const ComAtprotoLabelDefsSelfLabelSchema: v.GenericSchema<unknown, ComAtprotoLabelDefsSelfLabel> = v.looseObject({
  val: v.string(),
});

export type ComAtprotoLabelDefsSelfLabels = unknown;
export const ComAtprotoLabelDefsSelfLabelsSchema: v.GenericSchema<unknown, ComAtprotoLabelDefsSelfLabels> = v.unknown();

export type ComAtprotoLabelSubscribeLabelsInfo = {
  readonly name: string;
  readonly message?: string;
};
export const ComAtprotoLabelSubscribeLabelsInfoSchema: v.GenericSchema<unknown, ComAtprotoLabelSubscribeLabelsInfo> = v.looseObject({
  name: v.string(),
  message: v.optional(v.string()),
});

export type ComAtprotoLabelSubscribeLabelsLabels = {
  readonly seq: number;
  readonly labels: ReadonlyArray<ComAtprotoLabelDefsLabel>;
};
export const ComAtprotoLabelSubscribeLabelsLabelsSchema: v.GenericSchema<unknown, ComAtprotoLabelSubscribeLabelsLabels> = v.looseObject({
  seq: v.number(),
  labels: v.array(v.lazy(() => ComAtprotoLabelDefsLabelSchema)),
});

export type ComAtprotoLexiconSchema = {
  readonly lexicon: number;
};
export const ComAtprotoLexiconSchemaSchema: v.GenericSchema<unknown, ComAtprotoLexiconSchema> = v.looseObject({
  lexicon: v.number(),
});

export type ComAtprotoModerationCreateReportModTool = {
  readonly name: string;
  readonly meta?: unknown;
};
export const ComAtprotoModerationCreateReportModToolSchema: v.GenericSchema<unknown, ComAtprotoModerationCreateReportModTool> = v.looseObject({
  name: v.string(),
  meta: v.optional(v.unknown()),
});

export type ComAtprotoModerationDefsReasonType = unknown;
export const ComAtprotoModerationDefsReasonTypeSchema: v.GenericSchema<unknown, ComAtprotoModerationDefsReasonType> = v.unknown();

export type ComAtprotoModerationDefsSubjectType = unknown;
export const ComAtprotoModerationDefsSubjectTypeSchema: v.GenericSchema<unknown, ComAtprotoModerationDefsSubjectType> = v.unknown();

export type ComAtprotoRepoApplyWritesCreate = {
  readonly collection: string;
  readonly rkey?: string;
  readonly value: unknown;
};
export const ComAtprotoRepoApplyWritesCreateSchema: v.GenericSchema<unknown, ComAtprotoRepoApplyWritesCreate> = v.looseObject({
  collection: v.string(),
  rkey: v.optional(v.string()),
  value: v.unknown(),
});

export type ComAtprotoRepoApplyWritesCreateResult = {
  readonly uri: string;
  readonly cid: string;
  readonly validationStatus?: string;
};
export const ComAtprotoRepoApplyWritesCreateResultSchema: v.GenericSchema<unknown, ComAtprotoRepoApplyWritesCreateResult> = v.looseObject({
  uri: v.string(),
  cid: v.string(),
  validationStatus: v.optional(v.string()),
});

export type ComAtprotoRepoApplyWritesDelete = {
  readonly collection: string;
  readonly rkey: string;
};
export const ComAtprotoRepoApplyWritesDeleteSchema: v.GenericSchema<unknown, ComAtprotoRepoApplyWritesDelete> = v.looseObject({
  collection: v.string(),
  rkey: v.string(),
});

export type ComAtprotoRepoApplyWritesDeleteResult = {

};
export const ComAtprotoRepoApplyWritesDeleteResultSchema: v.GenericSchema<unknown, ComAtprotoRepoApplyWritesDeleteResult> = v.looseObject({

});

export type ComAtprotoRepoApplyWritesUpdate = {
  readonly collection: string;
  readonly rkey: string;
  readonly value: unknown;
};
export const ComAtprotoRepoApplyWritesUpdateSchema: v.GenericSchema<unknown, ComAtprotoRepoApplyWritesUpdate> = v.looseObject({
  collection: v.string(),
  rkey: v.string(),
  value: v.unknown(),
});

export type ComAtprotoRepoApplyWritesUpdateResult = {
  readonly uri: string;
  readonly cid: string;
  readonly validationStatus?: string;
};
export const ComAtprotoRepoApplyWritesUpdateResultSchema: v.GenericSchema<unknown, ComAtprotoRepoApplyWritesUpdateResult> = v.looseObject({
  uri: v.string(),
  cid: v.string(),
  validationStatus: v.optional(v.string()),
});

export type ComAtprotoRepoDefsCommitMeta = {
  readonly cid: string;
  readonly rev: string;
};
export const ComAtprotoRepoDefsCommitMetaSchema: v.GenericSchema<unknown, ComAtprotoRepoDefsCommitMeta> = v.looseObject({
  cid: v.string(),
  rev: v.string(),
});

export type ComAtprotoRepoDefsStrongRef = {
  readonly uri: string;
  readonly cid: string;
};
export const ComAtprotoRepoDefsStrongRefSchema: v.GenericSchema<unknown, ComAtprotoRepoDefsStrongRef> = v.looseObject({
  uri: v.string(),
  cid: v.string(),
});

export type ComAtprotoRepoListMissingBlobsRecordBlob = {
  readonly cid: string;
  readonly recordUri: string;
};
export const ComAtprotoRepoListMissingBlobsRecordBlobSchema: v.GenericSchema<unknown, ComAtprotoRepoListMissingBlobsRecordBlob> = v.looseObject({
  cid: v.string(),
  recordUri: v.string(),
});

export type ComAtprotoRepoListRecordsRecord = {
  readonly uri: string;
  readonly cid: string;
  readonly value: unknown;
};
export const ComAtprotoRepoListRecordsRecordSchema: v.GenericSchema<unknown, ComAtprotoRepoListRecordsRecord> = v.looseObject({
  uri: v.string(),
  cid: v.string(),
  value: v.unknown(),
});

export type ComAtprotoRepoStrongRef = unknown;
export const ComAtprotoRepoStrongRefSchema: v.GenericSchema<unknown, ComAtprotoRepoStrongRef> = v.unknown();

export type ComAtprotoServerCreateAppPasswordAppPassword = {
  readonly name: string;
  readonly password: string;
  readonly createdAt: string;
  readonly privileged?: boolean;
};
export const ComAtprotoServerCreateAppPasswordAppPasswordSchema: v.GenericSchema<unknown, ComAtprotoServerCreateAppPasswordAppPassword> = v.looseObject({
  name: v.string(),
  password: v.string(),
  createdAt: v.string(),
  privileged: v.optional(v.boolean()),
});

export type ComAtprotoServerCreateInviteCodesAccountCodes = {
  readonly account: string;
  readonly codes: ReadonlyArray<string>;
};
export const ComAtprotoServerCreateInviteCodesAccountCodesSchema: v.GenericSchema<unknown, ComAtprotoServerCreateInviteCodesAccountCodes> = v.looseObject({
  account: v.string(),
  codes: v.array(v.string()),
});

export type ComAtprotoServerDefsInviteCode = unknown;
export const ComAtprotoServerDefsInviteCodeSchema: v.GenericSchema<unknown, ComAtprotoServerDefsInviteCode> = v.unknown();

export type ComAtprotoServerDefsInviteCodeUse = {
  readonly usedBy: string;
  readonly usedAt: string;
};
export const ComAtprotoServerDefsInviteCodeUseSchema: v.GenericSchema<unknown, ComAtprotoServerDefsInviteCodeUse> = v.looseObject({
  usedBy: v.string(),
  usedAt: v.string(),
});

export type ComAtprotoServerDescribeServerContact = {
  readonly email?: string;
};
export const ComAtprotoServerDescribeServerContactSchema: v.GenericSchema<unknown, ComAtprotoServerDescribeServerContact> = v.looseObject({
  email: v.optional(v.string()),
});

export type ComAtprotoServerDescribeServerLinks = {
  readonly privacyPolicy?: string;
  readonly termsOfService?: string;
};
export const ComAtprotoServerDescribeServerLinksSchema: v.GenericSchema<unknown, ComAtprotoServerDescribeServerLinks> = v.looseObject({
  privacyPolicy: v.optional(v.string()),
  termsOfService: v.optional(v.string()),
});

export type ComAtprotoServerListAppPasswordsAppPassword = {
  readonly name: string;
  readonly createdAt: string;
  readonly privileged?: boolean;
};
export const ComAtprotoServerListAppPasswordsAppPasswordSchema: v.GenericSchema<unknown, ComAtprotoServerListAppPasswordsAppPassword> = v.looseObject({
  name: v.string(),
  createdAt: v.string(),
  privileged: v.optional(v.boolean()),
});

export type ComAtprotoSyncDefsHostStatus = string;
export const ComAtprotoSyncDefsHostStatusSchema: v.GenericSchema<unknown, ComAtprotoSyncDefsHostStatus> = v.string();

export type ComAtprotoSyncListHostsHost = {
  readonly hostname: string;
  readonly seq?: number;
  readonly accountCount?: number;
  readonly status?: ComAtprotoSyncDefsHostStatus;
};
export const ComAtprotoSyncListHostsHostSchema: v.GenericSchema<unknown, ComAtprotoSyncListHostsHost> = v.looseObject({
  hostname: v.string(),
  seq: v.optional(v.number()),
  accountCount: v.optional(v.number()),
  status: v.optional(v.lazy(() => ComAtprotoSyncDefsHostStatusSchema)),
});

export type ComAtprotoSyncListReposByCollectionRepo = {
  readonly did: string;
};
export const ComAtprotoSyncListReposByCollectionRepoSchema: v.GenericSchema<unknown, ComAtprotoSyncListReposByCollectionRepo> = v.looseObject({
  did: v.string(),
});

export type ComAtprotoSyncListReposRepo = {
  readonly did: string;
  readonly head: string;
  readonly rev: string;
  readonly active?: boolean;
  readonly status?: string;
};
export const ComAtprotoSyncListReposRepoSchema: v.GenericSchema<unknown, ComAtprotoSyncListReposRepo> = v.looseObject({
  did: v.string(),
  head: v.string(),
  rev: v.string(),
  active: v.optional(v.boolean()),
  status: v.optional(v.string()),
});

export type ComAtprotoSyncSubscribeReposAccount = {
  readonly seq: number;
  readonly did: string;
  readonly time: string;
  readonly active: boolean;
  readonly status?: string;
};
export const ComAtprotoSyncSubscribeReposAccountSchema: v.GenericSchema<unknown, ComAtprotoSyncSubscribeReposAccount> = v.looseObject({
  seq: v.number(),
  did: v.string(),
  time: v.string(),
  active: v.boolean(),
  status: v.optional(v.string()),
});

export type ComAtprotoSyncSubscribeReposCommit = {
  readonly seq: number;
  readonly rebase: boolean;
  readonly tooBig: boolean;
  readonly repo: string;
  readonly commit: string;
  readonly rev: string;
  readonly since: string;
  readonly blocks: string;
  readonly ops: ReadonlyArray<ComAtprotoSyncSubscribeReposRepoOp>;
  readonly blobs: ReadonlyArray<string>;
  readonly prevData?: string;
  readonly time: string;
};
export const ComAtprotoSyncSubscribeReposCommitSchema: v.GenericSchema<unknown, ComAtprotoSyncSubscribeReposCommit> = v.looseObject({
  seq: v.number(),
  rebase: v.boolean(),
  tooBig: v.boolean(),
  repo: v.string(),
  commit: v.string(),
  rev: v.string(),
  since: v.string(),
  blocks: v.string(),
  ops: v.array(v.lazy(() => ComAtprotoSyncSubscribeReposRepoOpSchema)),
  blobs: v.array(v.string()),
  prevData: v.optional(v.string()),
  time: v.string(),
});

export type ComAtprotoSyncSubscribeReposIdentity = {
  readonly seq: number;
  readonly did: string;
  readonly time: string;
  readonly handle?: string;
};
export const ComAtprotoSyncSubscribeReposIdentitySchema: v.GenericSchema<unknown, ComAtprotoSyncSubscribeReposIdentity> = v.looseObject({
  seq: v.number(),
  did: v.string(),
  time: v.string(),
  handle: v.optional(v.string()),
});

export type ComAtprotoSyncSubscribeReposInfo = {
  readonly name: string;
  readonly message?: string;
};
export const ComAtprotoSyncSubscribeReposInfoSchema: v.GenericSchema<unknown, ComAtprotoSyncSubscribeReposInfo> = v.looseObject({
  name: v.string(),
  message: v.optional(v.string()),
});

export type ComAtprotoSyncSubscribeReposRepoOp = unknown;
export const ComAtprotoSyncSubscribeReposRepoOpSchema: v.GenericSchema<unknown, ComAtprotoSyncSubscribeReposRepoOp> = v.unknown();

export type ComAtprotoSyncSubscribeReposSync = {
  readonly seq: number;
  readonly did: string;
  readonly blocks: string;
  readonly rev: string;
  readonly time: string;
};
export const ComAtprotoSyncSubscribeReposSyncSchema: v.GenericSchema<unknown, ComAtprotoSyncSubscribeReposSync> = v.looseObject({
  seq: v.number(),
  did: v.string(),
  blocks: v.string(),
  rev: v.string(),
  time: v.string(),
});

export type ComAtprotoTempCheckHandleAvailabilityResultAvailable = {

};
export const ComAtprotoTempCheckHandleAvailabilityResultAvailableSchema: v.GenericSchema<unknown, ComAtprotoTempCheckHandleAvailabilityResultAvailable> = v.looseObject({

});

export type ComAtprotoTempCheckHandleAvailabilityResultUnavailable = {
  readonly suggestions: ReadonlyArray<ComAtprotoTempCheckHandleAvailabilitySuggestion>;
};
export const ComAtprotoTempCheckHandleAvailabilityResultUnavailableSchema: v.GenericSchema<unknown, ComAtprotoTempCheckHandleAvailabilityResultUnavailable> = v.looseObject({
  suggestions: v.array(v.lazy(() => ComAtprotoTempCheckHandleAvailabilitySuggestionSchema)),
});

export type ComAtprotoTempCheckHandleAvailabilitySuggestion = unknown;
export const ComAtprotoTempCheckHandleAvailabilitySuggestionSchema: v.GenericSchema<unknown, ComAtprotoTempCheckHandleAvailabilitySuggestion> = v.unknown();

export type ConfirmEmailParams = {
  readonly email: string;
  readonly token: string;
};
export const ConfirmEmailParamsSchema: v.GenericSchema<unknown, ConfirmEmailParams> = v.looseObject({
  email: v.string(),
  token: v.string(),
});

export type ConfirmEmailResponse = {

};
export const ConfirmEmailResponseSchema: v.GenericSchema<unknown, ConfirmEmailResponse> = v.looseObject({

});

export type CreateAccountParams = {
  readonly email?: string;
  readonly handle: string;
  readonly did?: string;
  readonly inviteCode?: string;
  readonly verificationCode?: string;
  readonly verificationPhone?: string;
  readonly password?: string;
  readonly recoveryKey?: string;
  readonly plcOp?: unknown;
};
export const CreateAccountParamsSchema: v.GenericSchema<unknown, CreateAccountParams> = v.looseObject({
  email: v.optional(v.string()),
  handle: v.string(),
  did: v.optional(v.string()),
  inviteCode: v.optional(v.string()),
  verificationCode: v.optional(v.string()),
  verificationPhone: v.optional(v.string()),
  password: v.optional(v.string()),
  recoveryKey: v.optional(v.string()),
  plcOp: v.optional(v.unknown()),
});

export type CreateAccountResponse = {
  readonly data: Inline646;
};
export const CreateAccountResponseSchema: v.GenericSchema<unknown, CreateAccountResponse> = v.looseObject({
  data: v.lazy(() => Inline646Schema),
});

export type CreateAppPasswordParams = {
  readonly name: string;
  readonly privileged?: boolean;
};
export const CreateAppPasswordParamsSchema: v.GenericSchema<unknown, CreateAppPasswordParams> = v.looseObject({
  name: v.string(),
  privileged: v.optional(v.boolean()),
});

export type CreateAppPasswordResponse = {
  readonly data: ComAtprotoServerCreateAppPasswordAppPassword;
};
export const CreateAppPasswordResponseSchema: v.GenericSchema<unknown, CreateAppPasswordResponse> = v.looseObject({
  data: v.lazy(() => ComAtprotoServerCreateAppPasswordAppPasswordSchema),
});

export type CreateBookmarkParams = {
  readonly uri: string;
  readonly cid: string;
};
export const CreateBookmarkParamsSchema: v.GenericSchema<unknown, CreateBookmarkParams> = v.looseObject({
  uri: v.string(),
  cid: v.string(),
});

export type CreateBookmarkResponse = {

};
export const CreateBookmarkResponseSchema: v.GenericSchema<unknown, CreateBookmarkResponse> = v.looseObject({

});

export type CreateDraftParams = {
  readonly draft: AppBskyDraftDefsDraft;
};
export const CreateDraftParamsSchema: v.GenericSchema<unknown, CreateDraftParams> = v.looseObject({
  draft: v.lazy(() => AppBskyDraftDefsDraftSchema),
});

export type CreateDraftResponse = {
  readonly data: Inline292;
};
export const CreateDraftResponseSchema: v.GenericSchema<unknown, CreateDraftResponse> = v.looseObject({
  data: v.lazy(() => Inline292Schema),
});

export type CreateInviteCodeParams = {
  readonly useCount: number;
  readonly forAccount?: string;
};
export const CreateInviteCodeParamsSchema: v.GenericSchema<unknown, CreateInviteCodeParams> = v.looseObject({
  useCount: v.number(),
  forAccount: v.optional(v.string()),
});

export type CreateInviteCodeResponse = {
  readonly data: Inline651;
};
export const CreateInviteCodeResponseSchema: v.GenericSchema<unknown, CreateInviteCodeResponse> = v.looseObject({
  data: v.lazy(() => Inline651Schema),
});

export type CreateInviteCodesParams = {
  readonly codeCount: number;
  readonly useCount: number;
  readonly forAccounts?: ReadonlyArray<string>;
};
export const CreateInviteCodesParamsSchema: v.GenericSchema<unknown, CreateInviteCodesParams> = v.looseObject({
  codeCount: v.number(),
  useCount: v.number(),
  forAccounts: v.optional(v.array(v.string())),
});

export type CreateInviteCodesResponse = {
  readonly data: Inline654;
};
export const CreateInviteCodesResponseSchema: v.GenericSchema<unknown, CreateInviteCodesResponse> = v.looseObject({
  data: v.lazy(() => Inline654Schema),
});

export type CreateRecordParams = {
  readonly repo: string;
  readonly collection: string;
  readonly rkey?: string;
  readonly validate?: boolean;
  readonly record: unknown;
  readonly swapCommit?: string;
};
export const CreateRecordParamsSchema: v.GenericSchema<unknown, CreateRecordParams> = v.looseObject({
  repo: v.string(),
  collection: v.string(),
  rkey: v.optional(v.string()),
  validate: v.optional(v.boolean()),
  record: v.unknown(),
  swapCommit: v.optional(v.string()),
});

export type CreateRecordResponse = {
  readonly data: Inline613;
};
export const CreateRecordResponseSchema: v.GenericSchema<unknown, CreateRecordResponse> = v.looseObject({
  data: v.lazy(() => Inline613Schema),
});

export type CreateReportParams = {
  readonly reasonType: ComAtprotoModerationDefsReasonType;
  readonly reason?: string;
  readonly subject: ComAtprotoAdminDefsRepoRef | ComAtprotoRepoStrongRef;
  readonly modTool?: ComAtprotoModerationCreateReportModTool;
};
export const CreateReportParamsSchema: v.GenericSchema<unknown, CreateReportParams> = v.looseObject({
  reasonType: v.lazy(() => ComAtprotoModerationDefsReasonTypeSchema),
  reason: v.optional(v.string()),
  subject: v.union([v.lazy(() => ComAtprotoAdminDefsRepoRefSchema), v.lazy(() => ComAtprotoRepoStrongRefSchema)]),
  modTool: v.optional(v.lazy(() => ComAtprotoModerationCreateReportModToolSchema)),
});

export type CreateReportResponse = {
  readonly data: Inline607;
};
export const CreateReportResponseSchema: v.GenericSchema<unknown, CreateReportResponse> = v.looseObject({
  data: v.lazy(() => Inline607Schema),
});

export type CreateSessionParams = {
  readonly identifier: string;
  readonly password: string;
  readonly authFactorToken?: string;
  readonly allowTakendown?: boolean;
};
export const CreateSessionParamsSchema: v.GenericSchema<unknown, CreateSessionParams> = v.looseObject({
  identifier: v.string(),
  password: v.string(),
  authFactorToken: v.optional(v.string()),
  allowTakendown: v.optional(v.boolean()),
});

export type CreateSessionResponse = {
  readonly data: Inline657;
};
export const CreateSessionResponseSchema: v.GenericSchema<unknown, CreateSessionResponse> = v.looseObject({
  data: v.lazy(() => Inline657Schema),
});

export type DeactivateAccountParams = {
  readonly deleteAfter?: string;
};
export const DeactivateAccountParamsSchema: v.GenericSchema<unknown, DeactivateAccountParams> = v.looseObject({
  deleteAfter: v.optional(v.string()),
});

export type DeactivateAccountResponse = {

};
export const DeactivateAccountResponseSchema: v.GenericSchema<unknown, DeactivateAccountResponse> = v.looseObject({

});

export type DeleteAccountParams = {
  readonly did: string;
};
export const DeleteAccountParamsSchema: v.GenericSchema<unknown, DeleteAccountParams> = v.looseObject({
  did: v.string(),
});

export type DeleteAccountResponse = {

};
export const DeleteAccountResponseSchema: v.GenericSchema<unknown, DeleteAccountResponse> = v.looseObject({

});

export type DeleteBookmarkParams = {
  readonly uri: string;
};
export const DeleteBookmarkParamsSchema: v.GenericSchema<unknown, DeleteBookmarkParams> = v.looseObject({
  uri: v.string(),
});

export type DeleteBookmarkResponse = {

};
export const DeleteBookmarkResponseSchema: v.GenericSchema<unknown, DeleteBookmarkResponse> = v.looseObject({

});

export type DeleteDraftParams = {
  readonly id: string;
};
export const DeleteDraftParamsSchema: v.GenericSchema<unknown, DeleteDraftParams> = v.looseObject({
  id: v.string(),
});

export type DeleteDraftResponse = {

};
export const DeleteDraftResponseSchema: v.GenericSchema<unknown, DeleteDraftResponse> = v.looseObject({

});

export type DeleteRecordParams = {
  readonly repo: string;
  readonly collection: string;
  readonly rkey: string;
  readonly swapRecord?: string;
  readonly swapCommit?: string;
};
export const DeleteRecordParamsSchema: v.GenericSchema<unknown, DeleteRecordParams> = v.looseObject({
  repo: v.string(),
  collection: v.string(),
  rkey: v.string(),
  swapRecord: v.optional(v.string()),
  swapCommit: v.optional(v.string()),
});

export type DeleteRecordResponse = {
  readonly data: Inline616;
};
export const DeleteRecordResponseSchema: v.GenericSchema<unknown, DeleteRecordResponse> = v.looseObject({
  data: v.lazy(() => Inline616Schema),
});

export type DeleteSessionParams = {

};
export const DeleteSessionParamsSchema: v.GenericSchema<unknown, DeleteSessionParams> = v.looseObject({

});

export type DeleteSessionResponse = {

};
export const DeleteSessionResponseSchema: v.GenericSchema<unknown, DeleteSessionResponse> = v.looseObject({

});

export type DereferenceScopeParams = {
  readonly scope: string;
};
export const DereferenceScopeParamsSchema: v.GenericSchema<unknown, DereferenceScopeParams> = v.looseObject({
  scope: v.string(),
});

export type DereferenceScopeResponse = {
  readonly data: Inline743;
};
export const DereferenceScopeResponseSchema: v.GenericSchema<unknown, DereferenceScopeResponse> = v.looseObject({
  data: v.lazy(() => Inline743Schema),
});

export type DescribeFeedGeneratorParams = {

};
export const DescribeFeedGeneratorParamsSchema: v.GenericSchema<unknown, DescribeFeedGeneratorParams> = v.looseObject({

});

export type DescribeFeedGeneratorResponse = {
  readonly data: Inline305;
};
export const DescribeFeedGeneratorResponseSchema: v.GenericSchema<unknown, DescribeFeedGeneratorResponse> = v.looseObject({
  data: v.lazy(() => Inline305Schema),
});

export type DescribeRepoParams = {
  readonly repo: string;
};
export const DescribeRepoParamsSchema: v.GenericSchema<unknown, DescribeRepoParams> = v.looseObject({
  repo: v.string(),
});

export type DescribeRepoResponse = {
  readonly data: Inline619;
};
export const DescribeRepoResponseSchema: v.GenericSchema<unknown, DescribeRepoResponse> = v.looseObject({
  data: v.lazy(() => Inline619Schema),
});

export type DescribeServerParams = {

};
export const DescribeServerParamsSchema: v.GenericSchema<unknown, DescribeServerParams> = v.looseObject({

});

export type DescribeServerResponse = {
  readonly data: Inline664;
};
export const DescribeServerResponseSchema: v.GenericSchema<unknown, DescribeServerResponse> = v.looseObject({
  data: v.lazy(() => Inline664Schema),
});

export type DisableAccountInvitesParams = {
  readonly account: string;
  readonly note?: string;
};
export const DisableAccountInvitesParamsSchema: v.GenericSchema<unknown, DisableAccountInvitesParams> = v.looseObject({
  account: v.string(),
  note: v.optional(v.string()),
});

export type DisableAccountInvitesResponse = {

};
export const DisableAccountInvitesResponseSchema: v.GenericSchema<unknown, DisableAccountInvitesResponse> = v.looseObject({

});

export type DisableInviteCodesParams = {
  readonly codes?: ReadonlyArray<string>;
  readonly accounts?: ReadonlyArray<string>;
};
export const DisableInviteCodesParamsSchema: v.GenericSchema<unknown, DisableInviteCodesParams> = v.looseObject({
  codes: v.optional(v.array(v.string())),
  accounts: v.optional(v.array(v.string())),
});

export type DisableInviteCodesResponse = {

};
export const DisableInviteCodesResponseSchema: v.GenericSchema<unknown, DisableInviteCodesResponse> = v.looseObject({

});

export type DismissMatchParams = {
  readonly subject: string;
};
export const DismissMatchParamsSchema: v.GenericSchema<unknown, DismissMatchParams> = v.looseObject({
  subject: v.string(),
});

export type DismissMatchResponse = {
  readonly data: Inline268;
};
export const DismissMatchResponseSchema: v.GenericSchema<unknown, DismissMatchResponse> = v.looseObject({
  data: v.lazy(() => Inline268Schema),
});

export type EnableAccountInvitesParams = {
  readonly account: string;
  readonly note?: string;
};
export const EnableAccountInvitesParamsSchema: v.GenericSchema<unknown, EnableAccountInvitesParams> = v.looseObject({
  account: v.string(),
  note: v.optional(v.string()),
});

export type EnableAccountInvitesResponse = {

};
export const EnableAccountInvitesResponseSchema: v.GenericSchema<unknown, EnableAccountInvitesResponse> = v.looseObject({

});

export type FetchLabelsParams = {
  readonly since?: number;
  readonly limit?: number;
};
export const FetchLabelsParamsSchema: v.GenericSchema<unknown, FetchLabelsParams> = v.looseObject({
  since: v.optional(v.number()),
  limit: v.optional(v.number()),
});

export type FetchLabelsResponse = {
  readonly data: Inline746;
};
export const FetchLabelsResponseSchema: v.GenericSchema<unknown, FetchLabelsResponse> = v.looseObject({
  data: v.lazy(() => Inline746Schema),
});

export type GetAccountInfoParams = {
  readonly did: string;
};
export const GetAccountInfoParamsSchema: v.GenericSchema<unknown, GetAccountInfoParams> = v.looseObject({
  did: v.string(),
});

export type GetAccountInfoResponse = {
  readonly data: ComAtprotoAdminDefsAccountView;
};
export const GetAccountInfoResponseSchema: v.GenericSchema<unknown, GetAccountInfoResponse> = v.looseObject({
  data: v.lazy(() => ComAtprotoAdminDefsAccountViewSchema),
});

export type GetAccountInfosParams = {
  readonly dids: ReadonlyArray<string>;
};
export const GetAccountInfosParamsSchema: v.GenericSchema<unknown, GetAccountInfosParams> = v.looseObject({
  dids: v.array(v.string()),
});

export type GetAccountInfosResponse = {
  readonly data: Inline553;
};
export const GetAccountInfosResponseSchema: v.GenericSchema<unknown, GetAccountInfosResponse> = v.looseObject({
  data: v.lazy(() => Inline553Schema),
});

export type GetAccountInviteCodesParams = {
  readonly includeUsed?: boolean;
  readonly createAvailable?: boolean;
};
export const GetAccountInviteCodesParamsSchema: v.GenericSchema<unknown, GetAccountInviteCodesParams> = v.looseObject({
  includeUsed: v.optional(v.boolean()),
  createAvailable: v.optional(v.boolean()),
});

export type GetAccountInviteCodesResponse = {
  readonly data: Inline667;
};
export const GetAccountInviteCodesResponseSchema: v.GenericSchema<unknown, GetAccountInviteCodesResponse> = v.looseObject({
  data: v.lazy(() => Inline667Schema),
});

export type GetActorFeedsParams = {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
};
export const GetActorFeedsParamsSchema: v.GenericSchema<unknown, GetActorFeedsParams> = v.looseObject({
  actor: v.string(),
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
});

export type GetActorFeedsResponse = {
  readonly data: Inline308;
};
export const GetActorFeedsResponseSchema: v.GenericSchema<unknown, GetActorFeedsResponse> = v.looseObject({
  data: v.lazy(() => Inline308Schema),
});

export type GetActorLikesParams = {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
};
export const GetActorLikesParamsSchema: v.GenericSchema<unknown, GetActorLikesParams> = v.looseObject({
  actor: v.string(),
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
});

export type GetActorLikesResponse = {
  readonly data: Inline311;
};
export const GetActorLikesResponseSchema: v.GenericSchema<unknown, GetActorLikesResponse> = v.looseObject({
  data: v.lazy(() => Inline311Schema),
});

export type GetActorStarterPacksParams = {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
};
export const GetActorStarterPacksParamsSchema: v.GenericSchema<unknown, GetActorStarterPacksParams> = v.looseObject({
  actor: v.string(),
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
});

export type GetActorStarterPacksResponse = {
  readonly data: Inline362;
};
export const GetActorStarterPacksResponseSchema: v.GenericSchema<unknown, GetActorStarterPacksResponse> = v.looseObject({
  data: v.lazy(() => Inline362Schema),
});

export type GetAgeAssuranceStateParams = {

};
export const GetAgeAssuranceStateParamsSchema: v.GenericSchema<unknown, GetAgeAssuranceStateParams> = v.looseObject({

});

export type GetAgeAssuranceStateResponse = {
  readonly data: AppBskyUnspeccedDefsAgeAssuranceState;
};
export const GetAgeAssuranceStateResponseSchema: v.GenericSchema<unknown, GetAgeAssuranceStateResponse> = v.looseObject({
  data: v.lazy(() => AppBskyUnspeccedDefsAgeAssuranceStateSchema),
});

export type GetAuthorFeedParams = {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
  readonly filter?: string;
  readonly includePins?: boolean;
};
export const GetAuthorFeedParamsSchema: v.GenericSchema<unknown, GetAuthorFeedParams> = v.looseObject({
  actor: v.string(),
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
  filter: v.optional(v.string()),
  includePins: v.optional(v.boolean()),
});

export type GetAuthorFeedResponse = {
  readonly data: Inline314;
};
export const GetAuthorFeedResponseSchema: v.GenericSchema<unknown, GetAuthorFeedResponse> = v.looseObject({
  data: v.lazy(() => Inline314Schema),
});

export type GetBlobParams = {
  readonly did: string;
  readonly cid: string;
};
export const GetBlobParamsSchema: v.GenericSchema<unknown, GetBlobParams> = v.looseObject({
  did: v.string(),
  cid: v.string(),
});

export type GetBlobResponse = {

};
export const GetBlobResponseSchema: v.GenericSchema<unknown, GetBlobResponse> = v.looseObject({

});

export type GetBlocksParams = {
  readonly limit?: number;
  readonly cursor?: string;
};
export const GetBlocksParamsSchema: v.GenericSchema<unknown, GetBlocksParams> = v.looseObject({
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
});

export type GetBlocksResponse = {
  readonly data: Inline365;
};
export const GetBlocksResponseSchema: v.GenericSchema<unknown, GetBlocksResponse> = v.looseObject({
  data: v.lazy(() => Inline365Schema),
});

export type GetBookmarksParams = {
  readonly limit?: number;
  readonly cursor?: string;
};
export const GetBookmarksParamsSchema: v.GenericSchema<unknown, GetBookmarksParams> = v.looseObject({
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
});

export type GetBookmarksResponse = {
  readonly data: Inline265;
};
export const GetBookmarksResponseSchema: v.GenericSchema<unknown, GetBookmarksResponse> = v.looseObject({
  data: v.lazy(() => Inline265Schema),
});

export type GetCheckoutParams = {
  readonly did: string;
};
export const GetCheckoutParamsSchema: v.GenericSchema<unknown, GetCheckoutParams> = v.looseObject({
  did: v.string(),
});

export type GetCheckoutResponse = {

};
export const GetCheckoutResponseSchema: v.GenericSchema<unknown, GetCheckoutResponse> = v.looseObject({

});

export type GetConfigParams = {

};
export const GetConfigParamsSchema: v.GenericSchema<unknown, GetConfigParams> = v.looseObject({

});

export type GetConfigResponse = {
  readonly data: AppBskyAgeassuranceDefsConfig;
};
export const GetConfigResponseSchema: v.GenericSchema<unknown, GetConfigResponse> = v.looseObject({
  data: v.lazy(() => AppBskyAgeassuranceDefsConfigSchema),
});

export type GetDraftsParams = {
  readonly limit?: number;
  readonly cursor?: string;
};
export const GetDraftsParamsSchema: v.GenericSchema<unknown, GetDraftsParams> = v.looseObject({
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
});

export type GetDraftsResponse = {
  readonly data: Inline297;
};
export const GetDraftsResponseSchema: v.GenericSchema<unknown, GetDraftsResponse> = v.looseObject({
  data: v.lazy(() => Inline297Schema),
});

export type GetEmbedExternalViewParams = {
  readonly url: string;
  readonly uris: ReadonlyArray<string>;
};
export const GetEmbedExternalViewParamsSchema: v.GenericSchema<unknown, GetEmbedExternalViewParams> = v.looseObject({
  url: v.string(),
  uris: v.array(v.string()),
});

export type GetEmbedExternalViewResponse = {
  readonly data: Inline302;
};
export const GetEmbedExternalViewResponseSchema: v.GenericSchema<unknown, GetEmbedExternalViewResponse> = v.looseObject({
  data: v.lazy(() => Inline302Schema),
});

export type GetFeedGeneratorParams = {
  readonly feed: string;
};
export const GetFeedGeneratorParamsSchema: v.GenericSchema<unknown, GetFeedGeneratorParams> = v.looseObject({
  feed: v.string(),
});

export type GetFeedGeneratorResponse = {
  readonly data: Inline320;
};
export const GetFeedGeneratorResponseSchema: v.GenericSchema<unknown, GetFeedGeneratorResponse> = v.looseObject({
  data: v.lazy(() => Inline320Schema),
});

export type GetFeedGeneratorsParams = {
  readonly feeds: ReadonlyArray<string>;
};
export const GetFeedGeneratorsParamsSchema: v.GenericSchema<unknown, GetFeedGeneratorsParams> = v.looseObject({
  feeds: v.array(v.string()),
});

export type GetFeedGeneratorsResponse = {
  readonly data: Inline323;
};
export const GetFeedGeneratorsResponseSchema: v.GenericSchema<unknown, GetFeedGeneratorsResponse> = v.looseObject({
  data: v.lazy(() => Inline323Schema),
});

export type GetFeedParams = {
  readonly feed: string;
  readonly limit?: number;
  readonly cursor?: string;
};
export const GetFeedParamsSchema: v.GenericSchema<unknown, GetFeedParams> = v.looseObject({
  feed: v.string(),
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
});

export type GetFeedResponse = {
  readonly data: Inline317;
};
export const GetFeedResponseSchema: v.GenericSchema<unknown, GetFeedResponse> = v.looseObject({
  data: v.lazy(() => Inline317Schema),
});

export type GetFeedSkeletonParams = {
  readonly feed: string;
  readonly limit?: number;
  readonly cursor?: string;
};
export const GetFeedSkeletonParamsSchema: v.GenericSchema<unknown, GetFeedSkeletonParams> = v.looseObject({
  feed: v.string(),
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
});

export type GetFeedSkeletonResponse = {
  readonly data: Inline326;
};
export const GetFeedSkeletonResponseSchema: v.GenericSchema<unknown, GetFeedSkeletonResponse> = v.looseObject({
  data: v.lazy(() => Inline326Schema),
});

export type GetFollowersParams = {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
  readonly sort?: string;
};
export const GetFollowersParamsSchema: v.GenericSchema<unknown, GetFollowersParams> = v.looseObject({
  actor: v.string(),
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
  sort: v.optional(v.string()),
});

export type GetFollowersResponse = {
  readonly data: Inline368;
};
export const GetFollowersResponseSchema: v.GenericSchema<unknown, GetFollowersResponse> = v.looseObject({
  data: v.lazy(() => Inline368Schema),
});

export type GetFollowsParams = {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
  readonly sort?: string;
};
export const GetFollowsParamsSchema: v.GenericSchema<unknown, GetFollowsParams> = v.looseObject({
  actor: v.string(),
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
  sort: v.optional(v.string()),
});

export type GetFollowsResponse = {
  readonly data: Inline371;
};
export const GetFollowsResponseSchema: v.GenericSchema<unknown, GetFollowsResponse> = v.looseObject({
  data: v.lazy(() => Inline371Schema),
});

export type GetHeadParams = {
  readonly did: string;
};
export const GetHeadParamsSchema: v.GenericSchema<unknown, GetHeadParams> = v.looseObject({
  did: v.string(),
});

export type GetHeadResponse = {
  readonly data: Inline704;
};
export const GetHeadResponseSchema: v.GenericSchema<unknown, GetHeadResponse> = v.looseObject({
  data: v.lazy(() => Inline704Schema),
});

export type GetHostStatusParams = {
  readonly hostname: string;
};
export const GetHostStatusParamsSchema: v.GenericSchema<unknown, GetHostStatusParams> = v.looseObject({
  hostname: v.string(),
});

export type GetHostStatusResponse = {
  readonly data: Inline707;
};
export const GetHostStatusResponseSchema: v.GenericSchema<unknown, GetHostStatusResponse> = v.looseObject({
  data: v.lazy(() => Inline707Schema),
});

export type GetInviteCodesParams = {
  readonly sort?: string;
  readonly limit?: number;
  readonly cursor?: string;
};
export const GetInviteCodesParamsSchema: v.GenericSchema<unknown, GetInviteCodesParams> = v.looseObject({
  sort: v.optional(v.string()),
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
});

export type GetInviteCodesResponse = {
  readonly data: Inline556;
};
export const GetInviteCodesResponseSchema: v.GenericSchema<unknown, GetInviteCodesResponse> = v.looseObject({
  data: v.lazy(() => Inline556Schema),
});

export type GetJobStatusParams = {
  readonly jobId: string;
};
export const GetJobStatusParamsSchema: v.GenericSchema<unknown, GetJobStatusParams> = v.looseObject({
  jobId: v.string(),
});

export type GetJobStatusResponse = {
  readonly data: Inline534;
};
export const GetJobStatusResponseSchema: v.GenericSchema<unknown, GetJobStatusResponse> = v.looseObject({
  data: v.lazy(() => Inline534Schema),
});

export type GetKnownFollowersParams = {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
};
export const GetKnownFollowersParamsSchema: v.GenericSchema<unknown, GetKnownFollowersParams> = v.looseObject({
  actor: v.string(),
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
});

export type GetKnownFollowersResponse = {
  readonly data: Inline374;
};
export const GetKnownFollowersResponseSchema: v.GenericSchema<unknown, GetKnownFollowersResponse> = v.looseObject({
  data: v.lazy(() => Inline374Schema),
});

export type GetLatestCommitParams = {
  readonly did: string;
};
export const GetLatestCommitParamsSchema: v.GenericSchema<unknown, GetLatestCommitParams> = v.looseObject({
  did: v.string(),
});

export type GetLatestCommitResponse = {
  readonly data: Inline710;
};
export const GetLatestCommitResponseSchema: v.GenericSchema<unknown, GetLatestCommitResponse> = v.looseObject({
  data: v.lazy(() => Inline710Schema),
});

export type GetLikesParams = {
  readonly uri: string;
  readonly cid?: string;
  readonly limit?: number;
  readonly cursor?: string;
};
export const GetLikesParamsSchema: v.GenericSchema<unknown, GetLikesParams> = v.looseObject({
  uri: v.string(),
  cid: v.optional(v.string()),
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
});

export type GetLikesResponse = {
  readonly data: Inline329;
};
export const GetLikesResponseSchema: v.GenericSchema<unknown, GetLikesResponse> = v.looseObject({
  data: v.lazy(() => Inline329Schema),
});

export type GetListBlocksParams = {
  readonly limit?: number;
  readonly cursor?: string;
};
export const GetListBlocksParamsSchema: v.GenericSchema<unknown, GetListBlocksParams> = v.looseObject({
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
});

export type GetListBlocksResponse = {
  readonly data: Inline380;
};
export const GetListBlocksResponseSchema: v.GenericSchema<unknown, GetListBlocksResponse> = v.looseObject({
  data: v.lazy(() => Inline380Schema),
});

export type GetListFeedParams = {
  readonly list: string;
  readonly limit?: number;
  readonly cursor?: string;
};
export const GetListFeedParamsSchema: v.GenericSchema<unknown, GetListFeedParams> = v.looseObject({
  list: v.string(),
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
});

export type GetListFeedResponse = {
  readonly data: Inline332;
};
export const GetListFeedResponseSchema: v.GenericSchema<unknown, GetListFeedResponse> = v.looseObject({
  data: v.lazy(() => Inline332Schema),
});

export type GetListMutesParams = {
  readonly limit?: number;
  readonly cursor?: string;
};
export const GetListMutesParamsSchema: v.GenericSchema<unknown, GetListMutesParams> = v.looseObject({
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
});

export type GetListMutesResponse = {
  readonly data: Inline383;
};
export const GetListMutesResponseSchema: v.GenericSchema<unknown, GetListMutesResponse> = v.looseObject({
  data: v.lazy(() => Inline383Schema),
});

export type GetListParams = {
  readonly list: string;
  readonly limit?: number;
  readonly cursor?: string;
};
export const GetListParamsSchema: v.GenericSchema<unknown, GetListParams> = v.looseObject({
  list: v.string(),
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
});

export type GetListResponse = {
  readonly data: Inline377;
};
export const GetListResponseSchema: v.GenericSchema<unknown, GetListResponse> = v.looseObject({
  data: v.lazy(() => Inline377Schema),
});

export type GetListsParams = {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
  readonly purposes?: ReadonlyArray<string>;
};
export const GetListsParamsSchema: v.GenericSchema<unknown, GetListsParams> = v.looseObject({
  actor: v.string(),
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
  purposes: v.optional(v.array(v.string())),
});

export type GetListsResponse = {
  readonly data: Inline386;
};
export const GetListsResponseSchema: v.GenericSchema<unknown, GetListsResponse> = v.looseObject({
  data: v.lazy(() => Inline386Schema),
});

export type GetListsWithMembershipParams = {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
  readonly purposes?: ReadonlyArray<string>;
};
export const GetListsWithMembershipParamsSchema: v.GenericSchema<unknown, GetListsWithMembershipParams> = v.looseObject({
  actor: v.string(),
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
  purposes: v.optional(v.array(v.string())),
});

export type GetListsWithMembershipResponse = {
  readonly data: Inline389;
};
export const GetListsWithMembershipResponseSchema: v.GenericSchema<unknown, GetListsWithMembershipResponse> = v.looseObject({
  data: v.lazy(() => Inline389Schema),
});

export type GetMatchesParams = {
  readonly limit?: number;
  readonly cursor?: string;
};
export const GetMatchesParamsSchema: v.GenericSchema<unknown, GetMatchesParams> = v.looseObject({
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
});

export type GetMatchesResponse = {
  readonly data: Inline271;
};
export const GetMatchesResponseSchema: v.GenericSchema<unknown, GetMatchesResponse> = v.looseObject({
  data: v.lazy(() => Inline271Schema),
});

export type GetMutesParams = {
  readonly limit?: number;
  readonly cursor?: string;
};
export const GetMutesParamsSchema: v.GenericSchema<unknown, GetMutesParams> = v.looseObject({
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
});

export type GetMutesResponse = {
  readonly data: Inline392;
};
export const GetMutesResponseSchema: v.GenericSchema<unknown, GetMutesResponse> = v.looseObject({
  data: v.lazy(() => Inline392Schema),
});

export type GetOnboardingSuggestedStarterPacksParams = {
  readonly limit?: number;
};
export const GetOnboardingSuggestedStarterPacksParamsSchema: v.GenericSchema<unknown, GetOnboardingSuggestedStarterPacksParams> = v.looseObject({
  limit: v.optional(v.number()),
});

export type GetOnboardingSuggestedStarterPacksResponse = {
  readonly data: Inline454;
};
export const GetOnboardingSuggestedStarterPacksResponseSchema: v.GenericSchema<unknown, GetOnboardingSuggestedStarterPacksResponse> = v.looseObject({
  data: v.lazy(() => Inline454Schema),
});

export type GetOnboardingSuggestedStarterPacksSkeletonParams = {
  readonly viewer?: string;
  readonly limit?: number;
};
export const GetOnboardingSuggestedStarterPacksSkeletonParamsSchema: v.GenericSchema<unknown, GetOnboardingSuggestedStarterPacksSkeletonParams> = v.looseObject({
  viewer: v.optional(v.string()),
  limit: v.optional(v.number()),
});

export type GetOnboardingSuggestedStarterPacksSkeletonResponse = {
  readonly data: Inline457;
};
export const GetOnboardingSuggestedStarterPacksSkeletonResponseSchema: v.GenericSchema<unknown, GetOnboardingSuggestedStarterPacksSkeletonResponse> = v.looseObject({
  data: v.lazy(() => Inline457Schema),
});

export type GetOnboardingSuggestedUsersSkeletonParams = {
  readonly viewer?: string;
  readonly category?: string;
  readonly limit?: number;
};
export const GetOnboardingSuggestedUsersSkeletonParamsSchema: v.GenericSchema<unknown, GetOnboardingSuggestedUsersSkeletonParams> = v.looseObject({
  viewer: v.optional(v.string()),
  category: v.optional(v.string()),
  limit: v.optional(v.number()),
});

export type GetOnboardingSuggestedUsersSkeletonResponse = {
  readonly data: Inline460;
};
export const GetOnboardingSuggestedUsersSkeletonResponseSchema: v.GenericSchema<unknown, GetOnboardingSuggestedUsersSkeletonResponse> = v.looseObject({
  data: v.lazy(() => Inline460Schema),
});

export type GetPopularFeedGeneratorsParams = {
  readonly limit?: number;
  readonly cursor?: string;
  readonly query?: string;
};
export const GetPopularFeedGeneratorsParamsSchema: v.GenericSchema<unknown, GetPopularFeedGeneratorsParams> = v.looseObject({
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
  query: v.optional(v.string()),
});

export type GetPopularFeedGeneratorsResponse = {
  readonly data: Inline463;
};
export const GetPopularFeedGeneratorsResponseSchema: v.GenericSchema<unknown, GetPopularFeedGeneratorsResponse> = v.looseObject({
  data: v.lazy(() => Inline463Schema),
});

export type GetPostsParams = {
  readonly uris: ReadonlyArray<string>;
};
export const GetPostsParamsSchema: v.GenericSchema<unknown, GetPostsParams> = v.looseObject({
  uris: v.array(v.string()),
});

export type GetPostsResponse = {
  readonly data: Inline335;
};
export const GetPostsResponseSchema: v.GenericSchema<unknown, GetPostsResponse> = v.looseObject({
  data: v.lazy(() => Inline335Schema),
});

export type GetPostThreadOtherV2Params = {
  readonly anchor: string;
};
export const GetPostThreadOtherV2ParamsSchema: v.GenericSchema<unknown, GetPostThreadOtherV2Params> = v.looseObject({
  anchor: v.string(),
});

export type GetPostThreadOtherV2Response = {
  readonly data: Inline466;
};
export const GetPostThreadOtherV2ResponseSchema: v.GenericSchema<unknown, GetPostThreadOtherV2Response> = v.looseObject({
  data: v.lazy(() => Inline466Schema),
});

export type GetPostThreadParams = {
  readonly uri: string;
  readonly depth?: number;
  readonly parentHeight?: number;
};
export const GetPostThreadParamsSchema: v.GenericSchema<unknown, GetPostThreadParams> = v.looseObject({
  uri: v.string(),
  depth: v.optional(v.number()),
  parentHeight: v.optional(v.number()),
});

export type GetPostThreadResponse = {
  readonly data: Inline338;
};
export const GetPostThreadResponseSchema: v.GenericSchema<unknown, GetPostThreadResponse> = v.looseObject({
  data: v.lazy(() => Inline338Schema),
});

export type GetPostThreadV2Params = {
  readonly anchor: string;
  readonly above?: boolean;
  readonly below?: number;
  readonly branchingFactor?: number;
  readonly sort?: string;
};
export const GetPostThreadV2ParamsSchema: v.GenericSchema<unknown, GetPostThreadV2Params> = v.looseObject({
  anchor: v.string(),
  above: v.optional(v.boolean()),
  below: v.optional(v.number()),
  branchingFactor: v.optional(v.number()),
  sort: v.optional(v.string()),
});

export type GetPostThreadV2Response = {
  readonly data: Inline469;
};
export const GetPostThreadV2ResponseSchema: v.GenericSchema<unknown, GetPostThreadV2Response> = v.looseObject({
  data: v.lazy(() => Inline469Schema),
});

export type GetPreferencesParams = {

};
export const GetPreferencesParamsSchema: v.GenericSchema<unknown, GetPreferencesParams> = v.looseObject({

});

export type GetPreferencesResponse = {
  readonly data: Inline235;
};
export const GetPreferencesResponseSchema: v.GenericSchema<unknown, GetPreferencesResponse> = v.looseObject({
  data: v.lazy(() => Inline235Schema),
});

export type GetProfileParams = {
  readonly actor: string;
};
export const GetProfileParamsSchema: v.GenericSchema<unknown, GetProfileParams> = v.looseObject({
  actor: v.string(),
});

export type GetProfileResponse = {
  readonly data: AppBskyActorDefsProfileViewDetailed;
};
export const GetProfileResponseSchema: v.GenericSchema<unknown, GetProfileResponse> = v.looseObject({
  data: v.lazy(() => AppBskyActorDefsProfileViewDetailedSchema),
});

export type GetProfilesParams = {
  readonly actors: ReadonlyArray<string>;
};
export const GetProfilesParamsSchema: v.GenericSchema<unknown, GetProfilesParams> = v.looseObject({
  actors: v.array(v.string()),
});

export type GetProfilesResponse = {
  readonly data: Inline240;
};
export const GetProfilesResponseSchema: v.GenericSchema<unknown, GetProfilesResponse> = v.looseObject({
  data: v.lazy(() => Inline240Schema),
});

export type GetQuotesParams = {
  readonly uri: string;
  readonly cid?: string;
  readonly limit?: number;
  readonly cursor?: string;
};
export const GetQuotesParamsSchema: v.GenericSchema<unknown, GetQuotesParams> = v.looseObject({
  uri: v.string(),
  cid: v.optional(v.string()),
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
});

export type GetQuotesResponse = {
  readonly data: Inline341;
};
export const GetQuotesResponseSchema: v.GenericSchema<unknown, GetQuotesResponse> = v.looseObject({
  data: v.lazy(() => Inline341Schema),
});

export type GetRecommendedDidCredentialsParams = {

};
export const GetRecommendedDidCredentialsParamsSchema: v.GenericSchema<unknown, GetRecommendedDidCredentialsParams> = v.looseObject({

});

export type GetRecommendedDidCredentialsResponse = {
  readonly data: Inline579;
};
export const GetRecommendedDidCredentialsResponseSchema: v.GenericSchema<unknown, GetRecommendedDidCredentialsResponse> = v.looseObject({
  data: v.lazy(() => Inline579Schema),
});

export type GetRecordParams = {
  readonly repo: string;
  readonly collection: string;
  readonly rkey: string;
  readonly cid?: string;
};
export const GetRecordParamsSchema: v.GenericSchema<unknown, GetRecordParams> = v.looseObject({
  repo: v.string(),
  collection: v.string(),
  rkey: v.string(),
  cid: v.optional(v.string()),
});

export type GetRecordResponse = {
  readonly data: Inline622;
};
export const GetRecordResponseSchema: v.GenericSchema<unknown, GetRecordResponse> = v.looseObject({
  data: v.lazy(() => Inline622Schema),
});

export type GetRelationshipsParams = {
  readonly actor: string;
  readonly others?: ReadonlyArray<string>;
};
export const GetRelationshipsParamsSchema: v.GenericSchema<unknown, GetRelationshipsParams> = v.looseObject({
  actor: v.string(),
  others: v.optional(v.array(v.string())),
});

export type GetRelationshipsResponse = {
  readonly data: Inline395;
};
export const GetRelationshipsResponseSchema: v.GenericSchema<unknown, GetRelationshipsResponse> = v.looseObject({
  data: v.lazy(() => Inline395Schema),
});

export type GetRepoParams = {
  readonly did: string;
  readonly since?: string;
};
export const GetRepoParamsSchema: v.GenericSchema<unknown, GetRepoParams> = v.looseObject({
  did: v.string(),
  since: v.optional(v.string()),
});

export type GetRepoResponse = {

};
export const GetRepoResponseSchema: v.GenericSchema<unknown, GetRepoResponse> = v.looseObject({

});

export type GetRepoStatusParams = {
  readonly did: string;
};
export const GetRepoStatusParamsSchema: v.GenericSchema<unknown, GetRepoStatusParams> = v.looseObject({
  did: v.string(),
});

export type GetRepoStatusResponse = {
  readonly data: Inline715;
};
export const GetRepoStatusResponseSchema: v.GenericSchema<unknown, GetRepoStatusResponse> = v.looseObject({
  data: v.lazy(() => Inline715Schema),
});

export type GetRepostedByParams = {
  readonly uri: string;
  readonly cid?: string;
  readonly limit?: number;
  readonly cursor?: string;
};
export const GetRepostedByParamsSchema: v.GenericSchema<unknown, GetRepostedByParams> = v.looseObject({
  uri: v.string(),
  cid: v.optional(v.string()),
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
});

export type GetRepostedByResponse = {
  readonly data: Inline344;
};
export const GetRepostedByResponseSchema: v.GenericSchema<unknown, GetRepostedByResponse> = v.looseObject({
  data: v.lazy(() => Inline344Schema),
});

export type GetServiceAuthParams = {
  readonly aud: string;
  readonly exp?: number;
  readonly lxm?: string;
};
export const GetServiceAuthParamsSchema: v.GenericSchema<unknown, GetServiceAuthParams> = v.looseObject({
  aud: v.string(),
  exp: v.optional(v.number()),
  lxm: v.optional(v.string()),
});

export type GetServiceAuthResponse = {
  readonly data: Inline670;
};
export const GetServiceAuthResponseSchema: v.GenericSchema<unknown, GetServiceAuthResponse> = v.looseObject({
  data: v.lazy(() => Inline670Schema),
});

export type GetServicesParams = {
  readonly dids: ReadonlyArray<string>;
  readonly detailed?: boolean;
};
export const GetServicesParamsSchema: v.GenericSchema<unknown, GetServicesParams> = v.looseObject({
  dids: v.array(v.string()),
  detailed: v.optional(v.boolean()),
});

export type GetServicesResponse = {
  readonly data: Inline428;
};
export const GetServicesResponseSchema: v.GenericSchema<unknown, GetServicesResponse> = v.looseObject({
  data: v.lazy(() => Inline428Schema),
});

export type GetSessionParams = {

};
export const GetSessionParamsSchema: v.GenericSchema<unknown, GetSessionParams> = v.looseObject({

});

export type GetSessionResponse = {
  readonly data: Inline673;
};
export const GetSessionResponseSchema: v.GenericSchema<unknown, GetSessionResponse> = v.looseObject({
  data: v.lazy(() => Inline673Schema),
});

export type GetStarterPackParams = {
  readonly starterPack: string;
};
export const GetStarterPackParamsSchema: v.GenericSchema<unknown, GetStarterPackParams> = v.looseObject({
  starterPack: v.string(),
});

export type GetStarterPackResponse = {
  readonly data: Inline398;
};
export const GetStarterPackResponseSchema: v.GenericSchema<unknown, GetStarterPackResponse> = v.looseObject({
  data: v.lazy(() => Inline398Schema),
});

export type GetStarterPacksParams = {
  readonly uris: ReadonlyArray<string>;
};
export const GetStarterPacksParamsSchema: v.GenericSchema<unknown, GetStarterPacksParams> = v.looseObject({
  uris: v.array(v.string()),
});

export type GetStarterPacksResponse = {
  readonly data: Inline401;
};
export const GetStarterPacksResponseSchema: v.GenericSchema<unknown, GetStarterPacksResponse> = v.looseObject({
  data: v.lazy(() => Inline401Schema),
});

export type GetStarterPacksWithMembershipParams = {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
};
export const GetStarterPacksWithMembershipParamsSchema: v.GenericSchema<unknown, GetStarterPacksWithMembershipParams> = v.looseObject({
  actor: v.string(),
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
});

export type GetStarterPacksWithMembershipResponse = {
  readonly data: Inline404;
};
export const GetStarterPacksWithMembershipResponseSchema: v.GenericSchema<unknown, GetStarterPacksWithMembershipResponse> = v.looseObject({
  data: v.lazy(() => Inline404Schema),
});

export type GetStateParams = {
  readonly countryCode: string;
  readonly regionCode?: string;
};
export const GetStateParamsSchema: v.GenericSchema<unknown, GetStateParams> = v.looseObject({
  countryCode: v.string(),
  regionCode: v.optional(v.string()),
});

export type GetStateResponse = {
  readonly data: Inline258;
};
export const GetStateResponseSchema: v.GenericSchema<unknown, GetStateResponse> = v.looseObject({
  data: v.lazy(() => Inline258Schema),
});

export type GetSubjectStatusParams = {
  readonly did?: string;
  readonly uri?: string;
  readonly blob?: string;
};
export const GetSubjectStatusParamsSchema: v.GenericSchema<unknown, GetSubjectStatusParams> = v.looseObject({
  did: v.optional(v.string()),
  uri: v.optional(v.string()),
  blob: v.optional(v.string()),
});

export type GetSubjectStatusResponse = {
  readonly data: Inline559;
};
export const GetSubjectStatusResponseSchema: v.GenericSchema<unknown, GetSubjectStatusResponse> = v.looseObject({
  data: v.lazy(() => Inline559Schema),
});

export type GetSuggestedFeedsParams = {
  readonly limit?: number;
  readonly cursor?: string;
};
export const GetSuggestedFeedsParamsSchema: v.GenericSchema<unknown, GetSuggestedFeedsParams> = v.looseObject({
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
});

export type GetSuggestedFeedsResponse = {
  readonly data: Inline347;
};
export const GetSuggestedFeedsResponseSchema: v.GenericSchema<unknown, GetSuggestedFeedsResponse> = v.looseObject({
  data: v.lazy(() => Inline347Schema),
});

export type GetSuggestedFeedsSkeletonParams = {
  readonly viewer?: string;
  readonly limit?: number;
};
export const GetSuggestedFeedsSkeletonParamsSchema: v.GenericSchema<unknown, GetSuggestedFeedsSkeletonParams> = v.looseObject({
  viewer: v.optional(v.string()),
  limit: v.optional(v.number()),
});

export type GetSuggestedFeedsSkeletonResponse = {
  readonly data: Inline472;
};
export const GetSuggestedFeedsSkeletonResponseSchema: v.GenericSchema<unknown, GetSuggestedFeedsSkeletonResponse> = v.looseObject({
  data: v.lazy(() => Inline472Schema),
});

export type GetSuggestedFollowsByActorParams = {
  readonly actor: string;
};
export const GetSuggestedFollowsByActorParamsSchema: v.GenericSchema<unknown, GetSuggestedFollowsByActorParams> = v.looseObject({
  actor: v.string(),
});

export type GetSuggestedFollowsByActorResponse = {
  readonly data: Inline407;
};
export const GetSuggestedFollowsByActorResponseSchema: v.GenericSchema<unknown, GetSuggestedFollowsByActorResponse> = v.looseObject({
  data: v.lazy(() => Inline407Schema),
});

export type GetSuggestedOnboardingUsersParams = {
  readonly category?: string;
  readonly limit?: number;
};
export const GetSuggestedOnboardingUsersParamsSchema: v.GenericSchema<unknown, GetSuggestedOnboardingUsersParams> = v.looseObject({
  category: v.optional(v.string()),
  limit: v.optional(v.number()),
});

export type GetSuggestedOnboardingUsersResponse = {
  readonly data: Inline475;
};
export const GetSuggestedOnboardingUsersResponseSchema: v.GenericSchema<unknown, GetSuggestedOnboardingUsersResponse> = v.looseObject({
  data: v.lazy(() => Inline475Schema),
});

export type GetSuggestedStarterPacksParams = {
  readonly limit?: number;
};
export const GetSuggestedStarterPacksParamsSchema: v.GenericSchema<unknown, GetSuggestedStarterPacksParams> = v.looseObject({
  limit: v.optional(v.number()),
});

export type GetSuggestedStarterPacksResponse = {
  readonly data: Inline478;
};
export const GetSuggestedStarterPacksResponseSchema: v.GenericSchema<unknown, GetSuggestedStarterPacksResponse> = v.looseObject({
  data: v.lazy(() => Inline478Schema),
});

export type GetSuggestedStarterPacksSkeletonParams = {
  readonly viewer?: string;
  readonly limit?: number;
};
export const GetSuggestedStarterPacksSkeletonParamsSchema: v.GenericSchema<unknown, GetSuggestedStarterPacksSkeletonParams> = v.looseObject({
  viewer: v.optional(v.string()),
  limit: v.optional(v.number()),
});

export type GetSuggestedStarterPacksSkeletonResponse = {
  readonly data: Inline481;
};
export const GetSuggestedStarterPacksSkeletonResponseSchema: v.GenericSchema<unknown, GetSuggestedStarterPacksSkeletonResponse> = v.looseObject({
  data: v.lazy(() => Inline481Schema),
});

export type GetSuggestedUsersForDiscoverParams = {
  readonly limit?: number;
};
export const GetSuggestedUsersForDiscoverParamsSchema: v.GenericSchema<unknown, GetSuggestedUsersForDiscoverParams> = v.looseObject({
  limit: v.optional(v.number()),
});

export type GetSuggestedUsersForDiscoverResponse = {
  readonly data: Inline487;
};
export const GetSuggestedUsersForDiscoverResponseSchema: v.GenericSchema<unknown, GetSuggestedUsersForDiscoverResponse> = v.looseObject({
  data: v.lazy(() => Inline487Schema),
});

export type GetSuggestedUsersForDiscoverSkeletonParams = {
  readonly viewer?: string;
  readonly limit?: number;
};
export const GetSuggestedUsersForDiscoverSkeletonParamsSchema: v.GenericSchema<unknown, GetSuggestedUsersForDiscoverSkeletonParams> = v.looseObject({
  viewer: v.optional(v.string()),
  limit: v.optional(v.number()),
});

export type GetSuggestedUsersForDiscoverSkeletonResponse = {
  readonly data: Inline490;
};
export const GetSuggestedUsersForDiscoverSkeletonResponseSchema: v.GenericSchema<unknown, GetSuggestedUsersForDiscoverSkeletonResponse> = v.looseObject({
  data: v.lazy(() => Inline490Schema),
});

export type GetSuggestedUsersForExploreParams = {
  readonly category?: string;
  readonly limit?: number;
};
export const GetSuggestedUsersForExploreParamsSchema: v.GenericSchema<unknown, GetSuggestedUsersForExploreParams> = v.looseObject({
  category: v.optional(v.string()),
  limit: v.optional(v.number()),
});

export type GetSuggestedUsersForExploreResponse = {
  readonly data: Inline493;
};
export const GetSuggestedUsersForExploreResponseSchema: v.GenericSchema<unknown, GetSuggestedUsersForExploreResponse> = v.looseObject({
  data: v.lazy(() => Inline493Schema),
});

export type GetSuggestedUsersForExploreSkeletonParams = {
  readonly viewer?: string;
  readonly category?: string;
  readonly limit?: number;
};
export const GetSuggestedUsersForExploreSkeletonParamsSchema: v.GenericSchema<unknown, GetSuggestedUsersForExploreSkeletonParams> = v.looseObject({
  viewer: v.optional(v.string()),
  category: v.optional(v.string()),
  limit: v.optional(v.number()),
});

export type GetSuggestedUsersForExploreSkeletonResponse = {
  readonly data: Inline496;
};
export const GetSuggestedUsersForExploreSkeletonResponseSchema: v.GenericSchema<unknown, GetSuggestedUsersForExploreSkeletonResponse> = v.looseObject({
  data: v.lazy(() => Inline496Schema),
});

export type GetSuggestedUsersForSeeMoreParams = {
  readonly category?: string;
  readonly limit?: number;
};
export const GetSuggestedUsersForSeeMoreParamsSchema: v.GenericSchema<unknown, GetSuggestedUsersForSeeMoreParams> = v.looseObject({
  category: v.optional(v.string()),
  limit: v.optional(v.number()),
});

export type GetSuggestedUsersForSeeMoreResponse = {
  readonly data: Inline499;
};
export const GetSuggestedUsersForSeeMoreResponseSchema: v.GenericSchema<unknown, GetSuggestedUsersForSeeMoreResponse> = v.looseObject({
  data: v.lazy(() => Inline499Schema),
});

export type GetSuggestedUsersForSeeMoreSkeletonParams = {
  readonly viewer?: string;
  readonly category?: string;
  readonly limit?: number;
};
export const GetSuggestedUsersForSeeMoreSkeletonParamsSchema: v.GenericSchema<unknown, GetSuggestedUsersForSeeMoreSkeletonParams> = v.looseObject({
  viewer: v.optional(v.string()),
  category: v.optional(v.string()),
  limit: v.optional(v.number()),
});

export type GetSuggestedUsersForSeeMoreSkeletonResponse = {
  readonly data: Inline502;
};
export const GetSuggestedUsersForSeeMoreSkeletonResponseSchema: v.GenericSchema<unknown, GetSuggestedUsersForSeeMoreSkeletonResponse> = v.looseObject({
  data: v.lazy(() => Inline502Schema),
});

export type GetSuggestedUsersParams = {
  readonly category?: string;
  readonly limit?: number;
};
export const GetSuggestedUsersParamsSchema: v.GenericSchema<unknown, GetSuggestedUsersParams> = v.looseObject({
  category: v.optional(v.string()),
  limit: v.optional(v.number()),
});

export type GetSuggestedUsersResponse = {
  readonly data: Inline484;
};
export const GetSuggestedUsersResponseSchema: v.GenericSchema<unknown, GetSuggestedUsersResponse> = v.looseObject({
  data: v.lazy(() => Inline484Schema),
});

export type GetSuggestedUsersSkeletonParams = {
  readonly viewer?: string;
  readonly category?: string;
  readonly limit?: number;
};
export const GetSuggestedUsersSkeletonParamsSchema: v.GenericSchema<unknown, GetSuggestedUsersSkeletonParams> = v.looseObject({
  viewer: v.optional(v.string()),
  category: v.optional(v.string()),
  limit: v.optional(v.number()),
});

export type GetSuggestedUsersSkeletonResponse = {
  readonly data: Inline505;
};
export const GetSuggestedUsersSkeletonResponseSchema: v.GenericSchema<unknown, GetSuggestedUsersSkeletonResponse> = v.looseObject({
  data: v.lazy(() => Inline505Schema),
});

export type GetSuggestionsParams = {
  readonly limit?: number;
  readonly cursor?: string;
};
export const GetSuggestionsParamsSchema: v.GenericSchema<unknown, GetSuggestionsParams> = v.looseObject({
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
});

export type GetSuggestionsResponse = {
  readonly data: Inline243;
};
export const GetSuggestionsResponseSchema: v.GenericSchema<unknown, GetSuggestionsResponse> = v.looseObject({
  data: v.lazy(() => Inline243Schema),
});

export type GetSuggestionsSkeletonParams = {
  readonly viewer?: string;
  readonly limit?: number;
  readonly cursor?: string;
  readonly relativeToDid?: string;
};
export const GetSuggestionsSkeletonParamsSchema: v.GenericSchema<unknown, GetSuggestionsSkeletonParams> = v.looseObject({
  viewer: v.optional(v.string()),
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
  relativeToDid: v.optional(v.string()),
});

export type GetSuggestionsSkeletonResponse = {
  readonly data: Inline508;
};
export const GetSuggestionsSkeletonResponseSchema: v.GenericSchema<unknown, GetSuggestionsSkeletonResponse> = v.looseObject({
  data: v.lazy(() => Inline508Schema),
});

export type GetSyncStatusParams = {

};
export const GetSyncStatusParamsSchema: v.GenericSchema<unknown, GetSyncStatusParams> = v.looseObject({

});

export type GetSyncStatusResponse = {
  readonly data: Inline274;
};
export const GetSyncStatusResponseSchema: v.GenericSchema<unknown, GetSyncStatusResponse> = v.looseObject({
  data: v.lazy(() => Inline274Schema),
});

export type GetTaggedSuggestionsParams = {

};
export const GetTaggedSuggestionsParamsSchema: v.GenericSchema<unknown, GetTaggedSuggestionsParams> = v.looseObject({

});

export type GetTaggedSuggestionsResponse = {
  readonly data: Inline511;
};
export const GetTaggedSuggestionsResponseSchema: v.GenericSchema<unknown, GetTaggedSuggestionsResponse> = v.looseObject({
  data: v.lazy(() => Inline511Schema),
});

export type GetTimelineParams = {
  readonly algorithm?: string;
  readonly limit?: number;
  readonly cursor?: string;
};
export const GetTimelineParamsSchema: v.GenericSchema<unknown, GetTimelineParams> = v.looseObject({
  algorithm: v.optional(v.string()),
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
});

export type GetTimelineResponse = {
  readonly data: Inline350;
};
export const GetTimelineResponseSchema: v.GenericSchema<unknown, GetTimelineResponse> = v.looseObject({
  data: v.lazy(() => Inline350Schema),
});

export type GetTrendingTopicsParams = {
  readonly viewer?: string;
  readonly limit?: number;
};
export const GetTrendingTopicsParamsSchema: v.GenericSchema<unknown, GetTrendingTopicsParams> = v.looseObject({
  viewer: v.optional(v.string()),
  limit: v.optional(v.number()),
});

export type GetTrendingTopicsResponse = {
  readonly data: Inline514;
};
export const GetTrendingTopicsResponseSchema: v.GenericSchema<unknown, GetTrendingTopicsResponse> = v.looseObject({
  data: v.lazy(() => Inline514Schema),
});

export type GetTrendsParams = {
  readonly limit?: number;
};
export const GetTrendsParamsSchema: v.GenericSchema<unknown, GetTrendsParams> = v.looseObject({
  limit: v.optional(v.number()),
});

export type GetTrendsResponse = {
  readonly data: Inline517;
};
export const GetTrendsResponseSchema: v.GenericSchema<unknown, GetTrendsResponse> = v.looseObject({
  data: v.lazy(() => Inline517Schema),
});

export type GetTrendsSkeletonParams = {
  readonly viewer?: string;
  readonly limit?: number;
};
export const GetTrendsSkeletonParamsSchema: v.GenericSchema<unknown, GetTrendsSkeletonParams> = v.looseObject({
  viewer: v.optional(v.string()),
  limit: v.optional(v.number()),
});

export type GetTrendsSkeletonResponse = {
  readonly data: Inline520;
};
export const GetTrendsSkeletonResponseSchema: v.GenericSchema<unknown, GetTrendsSkeletonResponse> = v.looseObject({
  data: v.lazy(() => Inline520Schema),
});

export type GetUnreadCountParams = {
  readonly priority?: boolean;
  readonly seenAt?: string;
};
export const GetUnreadCountParamsSchema: v.GenericSchema<unknown, GetUnreadCountParams> = v.looseObject({
  priority: v.optional(v.boolean()),
  seenAt: v.optional(v.string()),
});

export type GetUnreadCountResponse = {
  readonly data: Inline431;
};
export const GetUnreadCountResponseSchema: v.GenericSchema<unknown, GetUnreadCountResponse> = v.looseObject({
  data: v.lazy(() => Inline431Schema),
});

export type GetUploadLimitsParams = {

};
export const GetUploadLimitsParamsSchema: v.GenericSchema<unknown, GetUploadLimitsParams> = v.looseObject({

});

export type GetUploadLimitsResponse = {
  readonly data: Inline537;
};
export const GetUploadLimitsResponseSchema: v.GenericSchema<unknown, GetUploadLimitsResponse> = v.looseObject({
  data: v.lazy(() => Inline537Schema),
});

export type ImportContactsParams = {
  readonly token: string;
  readonly contacts: ReadonlyArray<string>;
};
export const ImportContactsParamsSchema: v.GenericSchema<unknown, ImportContactsParams> = v.looseObject({
  token: v.string(),
  contacts: v.array(v.string()),
});

export type ImportContactsResponse = {
  readonly data: Inline277;
};
export const ImportContactsResponseSchema: v.GenericSchema<unknown, ImportContactsResponse> = v.looseObject({
  data: v.lazy(() => Inline277Schema),
});

export type ImportRepoParams = {

};
export const ImportRepoParamsSchema: v.GenericSchema<unknown, ImportRepoParams> = v.looseObject({

});

export type ImportRepoResponse = {

};
export const ImportRepoResponseSchema: v.GenericSchema<unknown, ImportRepoResponse> = v.looseObject({

});

export type InitAgeAssuranceParams = {
  readonly email: string;
  readonly language: string;
  readonly countryCode: string;
};
export const InitAgeAssuranceParamsSchema: v.GenericSchema<unknown, InitAgeAssuranceParams> = v.looseObject({
  email: v.string(),
  language: v.string(),
  countryCode: v.string(),
});

export type InitAgeAssuranceResponse = {
  readonly data: AppBskyUnspeccedDefsAgeAssuranceState;
};
export const InitAgeAssuranceResponseSchema: v.GenericSchema<unknown, InitAgeAssuranceResponse> = v.looseObject({
  data: v.lazy(() => AppBskyUnspeccedDefsAgeAssuranceStateSchema),
});

export type Inline235 = {
  readonly preferences: AppBskyActorDefsPreferences;
};
export const Inline235Schema: v.GenericSchema<unknown, Inline235> = v.looseObject({
  preferences: v.lazy(() => AppBskyActorDefsPreferencesSchema),
});

export type Inline240 = {
  readonly profiles: ReadonlyArray<AppBskyActorDefsProfileViewDetailed>;
};
export const Inline240Schema: v.GenericSchema<unknown, Inline240> = v.looseObject({
  profiles: v.array(v.lazy(() => AppBskyActorDefsProfileViewDetailedSchema)),
});

export type Inline243 = {
  readonly cursor?: string;
  readonly actors: ReadonlyArray<AppBskyActorDefsProfileView>;
  readonly recId?: number;
  readonly recIdStr?: string;
};
export const Inline243Schema: v.GenericSchema<unknown, Inline243> = v.looseObject({
  cursor: v.optional(v.string()),
  actors: v.array(v.lazy(() => AppBskyActorDefsProfileViewSchema)),
  recId: v.optional(v.number()),
  recIdStr: v.optional(v.string()),
});

export type Inline248 = {
  readonly cursor?: string;
  readonly actors: ReadonlyArray<AppBskyActorDefsProfileView>;
};
export const Inline248Schema: v.GenericSchema<unknown, Inline248> = v.looseObject({
  cursor: v.optional(v.string()),
  actors: v.array(v.lazy(() => AppBskyActorDefsProfileViewSchema)),
});

export type Inline251 = {
  readonly actors: ReadonlyArray<AppBskyActorDefsProfileViewBasic>;
};
export const Inline251Schema: v.GenericSchema<unknown, Inline251> = v.looseObject({
  actors: v.array(v.lazy(() => AppBskyActorDefsProfileViewBasicSchema)),
});

export type Inline258 = {
  readonly state: AppBskyAgeassuranceDefsState;
  readonly metadata: AppBskyAgeassuranceDefsStateMetadata;
};
export const Inline258Schema: v.GenericSchema<unknown, Inline258> = v.looseObject({
  state: v.lazy(() => AppBskyAgeassuranceDefsStateSchema),
  metadata: v.lazy(() => AppBskyAgeassuranceDefsStateMetadataSchema),
});

export type Inline265 = {
  readonly cursor?: string;
  readonly bookmarks: ReadonlyArray<AppBskyBookmarkDefsBookmarkView>;
};
export const Inline265Schema: v.GenericSchema<unknown, Inline265> = v.looseObject({
  cursor: v.optional(v.string()),
  bookmarks: v.array(v.lazy(() => AppBskyBookmarkDefsBookmarkViewSchema)),
});

export type Inline268 = {

};
export const Inline268Schema: v.GenericSchema<unknown, Inline268> = v.looseObject({

});

export type Inline271 = {
  readonly cursor?: string;
  readonly matches: ReadonlyArray<AppBskyActorDefsProfileView>;
};
export const Inline271Schema: v.GenericSchema<unknown, Inline271> = v.looseObject({
  cursor: v.optional(v.string()),
  matches: v.array(v.lazy(() => AppBskyActorDefsProfileViewSchema)),
});

export type Inline274 = {
  readonly syncStatus?: AppBskyContactDefsSyncStatus;
};
export const Inline274Schema: v.GenericSchema<unknown, Inline274> = v.looseObject({
  syncStatus: v.optional(v.lazy(() => AppBskyContactDefsSyncStatusSchema)),
});

export type Inline277 = {
  readonly matchesAndContactIndexes: ReadonlyArray<AppBskyContactDefsMatchAndContactIndex>;
};
export const Inline277Schema: v.GenericSchema<unknown, Inline277> = v.looseObject({
  matchesAndContactIndexes: v.array(v.lazy(() => AppBskyContactDefsMatchAndContactIndexSchema)),
});

export type Inline280 = {

};
export const Inline280Schema: v.GenericSchema<unknown, Inline280> = v.looseObject({

});

export type Inline283 = {

};
export const Inline283Schema: v.GenericSchema<unknown, Inline283> = v.looseObject({

});

export type Inline286 = {

};
export const Inline286Schema: v.GenericSchema<unknown, Inline286> = v.looseObject({

});

export type Inline289 = {
  readonly token: string;
};
export const Inline289Schema: v.GenericSchema<unknown, Inline289> = v.looseObject({
  token: v.string(),
});

export type Inline292 = {
  readonly id: string;
};
export const Inline292Schema: v.GenericSchema<unknown, Inline292> = v.looseObject({
  id: v.string(),
});

export type Inline297 = {
  readonly cursor?: string;
  readonly drafts: ReadonlyArray<AppBskyDraftDefsDraftView>;
};
export const Inline297Schema: v.GenericSchema<unknown, Inline297> = v.looseObject({
  cursor: v.optional(v.string()),
  drafts: v.array(v.lazy(() => AppBskyDraftDefsDraftViewSchema)),
});

export type Inline302 = {
  readonly view?: AppBskyEmbedExternalView;
  readonly associatedRefs?: ReadonlyArray<ComAtprotoRepoStrongRef>;
  readonly associatedRecords?: ReadonlyArray<unknown>;
};
export const Inline302Schema: v.GenericSchema<unknown, Inline302> = v.looseObject({
  view: v.optional(v.lazy(() => AppBskyEmbedExternalViewSchema)),
  associatedRefs: v.optional(v.array(v.lazy(() => ComAtprotoRepoStrongRefSchema))),
  associatedRecords: v.optional(v.array(v.unknown())),
});

export type Inline305 = {
  readonly did: string;
  readonly feeds: ReadonlyArray<AppBskyFeedDescribeFeedGeneratorFeed>;
  readonly links?: AppBskyFeedDescribeFeedGeneratorLinks;
};
export const Inline305Schema: v.GenericSchema<unknown, Inline305> = v.looseObject({
  did: v.string(),
  feeds: v.array(v.lazy(() => AppBskyFeedDescribeFeedGeneratorFeedSchema)),
  links: v.optional(v.lazy(() => AppBskyFeedDescribeFeedGeneratorLinksSchema)),
});

export type Inline308 = {
  readonly cursor?: string;
  readonly feeds: ReadonlyArray<AppBskyFeedDefsGeneratorView>;
};
export const Inline308Schema: v.GenericSchema<unknown, Inline308> = v.looseObject({
  cursor: v.optional(v.string()),
  feeds: v.array(v.lazy(() => AppBskyFeedDefsGeneratorViewSchema)),
});

export type Inline311 = {
  readonly cursor?: string;
  readonly feed: ReadonlyArray<AppBskyFeedDefsFeedViewPost>;
};
export const Inline311Schema: v.GenericSchema<unknown, Inline311> = v.looseObject({
  cursor: v.optional(v.string()),
  feed: v.array(v.lazy(() => AppBskyFeedDefsFeedViewPostSchema)),
});

export type Inline314 = {
  readonly cursor?: string;
  readonly feed: ReadonlyArray<AppBskyFeedDefsFeedViewPost>;
};
export const Inline314Schema: v.GenericSchema<unknown, Inline314> = v.looseObject({
  cursor: v.optional(v.string()),
  feed: v.array(v.lazy(() => AppBskyFeedDefsFeedViewPostSchema)),
});

export type Inline317 = {
  readonly cursor?: string;
  readonly feed: ReadonlyArray<AppBskyFeedDefsFeedViewPost>;
};
export const Inline317Schema: v.GenericSchema<unknown, Inline317> = v.looseObject({
  cursor: v.optional(v.string()),
  feed: v.array(v.lazy(() => AppBskyFeedDefsFeedViewPostSchema)),
});

export type Inline320 = {
  readonly view: AppBskyFeedDefsGeneratorView;
  readonly isOnline: boolean;
  readonly isValid: boolean;
};
export const Inline320Schema: v.GenericSchema<unknown, Inline320> = v.looseObject({
  view: v.lazy(() => AppBskyFeedDefsGeneratorViewSchema),
  isOnline: v.boolean(),
  isValid: v.boolean(),
});

export type Inline323 = {
  readonly feeds: ReadonlyArray<AppBskyFeedDefsGeneratorView>;
};
export const Inline323Schema: v.GenericSchema<unknown, Inline323> = v.looseObject({
  feeds: v.array(v.lazy(() => AppBskyFeedDefsGeneratorViewSchema)),
});

export type Inline326 = {
  readonly cursor?: string;
  readonly feed: ReadonlyArray<AppBskyFeedDefsSkeletonFeedPost>;
  readonly reqId?: string;
};
export const Inline326Schema: v.GenericSchema<unknown, Inline326> = v.looseObject({
  cursor: v.optional(v.string()),
  feed: v.array(v.lazy(() => AppBskyFeedDefsSkeletonFeedPostSchema)),
  reqId: v.optional(v.string()),
});

export type Inline329 = {
  readonly uri: string;
  readonly cid?: string;
  readonly cursor?: string;
  readonly likes: ReadonlyArray<AppBskyFeedGetLikesLike>;
};
export const Inline329Schema: v.GenericSchema<unknown, Inline329> = v.looseObject({
  uri: v.string(),
  cid: v.optional(v.string()),
  cursor: v.optional(v.string()),
  likes: v.array(v.lazy(() => AppBskyFeedGetLikesLikeSchema)),
});

export type Inline332 = {
  readonly cursor?: string;
  readonly feed: ReadonlyArray<AppBskyFeedDefsFeedViewPost>;
};
export const Inline332Schema: v.GenericSchema<unknown, Inline332> = v.looseObject({
  cursor: v.optional(v.string()),
  feed: v.array(v.lazy(() => AppBskyFeedDefsFeedViewPostSchema)),
});

export type Inline335 = {
  readonly posts: ReadonlyArray<AppBskyFeedDefsPostView>;
};
export const Inline335Schema: v.GenericSchema<unknown, Inline335> = v.looseObject({
  posts: v.array(v.lazy(() => AppBskyFeedDefsPostViewSchema)),
});

export type Inline338 = {
  readonly thread: AppBskyFeedDefsThreadViewPost | AppBskyFeedDefsNotFoundPost | AppBskyFeedDefsBlockedPost;
  readonly threadgate?: AppBskyFeedDefsThreadgateView;
};
export const Inline338Schema: v.GenericSchema<unknown, Inline338> = v.looseObject({
  thread: v.union([v.lazy(() => AppBskyFeedDefsThreadViewPostSchema), v.lazy(() => AppBskyFeedDefsNotFoundPostSchema), v.lazy(() => AppBskyFeedDefsBlockedPostSchema)]),
  threadgate: v.optional(v.lazy(() => AppBskyFeedDefsThreadgateViewSchema)),
});

export type Inline341 = {
  readonly uri: string;
  readonly cid?: string;
  readonly cursor?: string;
  readonly posts: ReadonlyArray<AppBskyFeedDefsPostView>;
};
export const Inline341Schema: v.GenericSchema<unknown, Inline341> = v.looseObject({
  uri: v.string(),
  cid: v.optional(v.string()),
  cursor: v.optional(v.string()),
  posts: v.array(v.lazy(() => AppBskyFeedDefsPostViewSchema)),
});

export type Inline344 = {
  readonly uri: string;
  readonly cid?: string;
  readonly cursor?: string;
  readonly repostedBy: ReadonlyArray<AppBskyActorDefsProfileView>;
};
export const Inline344Schema: v.GenericSchema<unknown, Inline344> = v.looseObject({
  uri: v.string(),
  cid: v.optional(v.string()),
  cursor: v.optional(v.string()),
  repostedBy: v.array(v.lazy(() => AppBskyActorDefsProfileViewSchema)),
});

export type Inline347 = {
  readonly cursor?: string;
  readonly feeds: ReadonlyArray<AppBskyFeedDefsGeneratorView>;
};
export const Inline347Schema: v.GenericSchema<unknown, Inline347> = v.looseObject({
  cursor: v.optional(v.string()),
  feeds: v.array(v.lazy(() => AppBskyFeedDefsGeneratorViewSchema)),
});

export type Inline350 = {
  readonly cursor?: string;
  readonly feed: ReadonlyArray<AppBskyFeedDefsFeedViewPost>;
};
export const Inline350Schema: v.GenericSchema<unknown, Inline350> = v.looseObject({
  cursor: v.optional(v.string()),
  feed: v.array(v.lazy(() => AppBskyFeedDefsFeedViewPostSchema)),
});

export type Inline353 = {
  readonly cursor?: string;
  readonly hitsTotal?: number;
  readonly posts: ReadonlyArray<AppBskyFeedDefsPostView>;
};
export const Inline353Schema: v.GenericSchema<unknown, Inline353> = v.looseObject({
  cursor: v.optional(v.string()),
  hitsTotal: v.optional(v.number()),
  posts: v.array(v.lazy(() => AppBskyFeedDefsPostViewSchema)),
});

export type Inline356 = {
  readonly cursor?: string;
  readonly hitsTotal?: number;
  readonly posts: ReadonlyArray<AppBskyFeedDefsPostView>;
  readonly detectedQueryLanguages?: ReadonlyArray<string>;
};
export const Inline356Schema: v.GenericSchema<unknown, Inline356> = v.looseObject({
  cursor: v.optional(v.string()),
  hitsTotal: v.optional(v.number()),
  posts: v.array(v.lazy(() => AppBskyFeedDefsPostViewSchema)),
  detectedQueryLanguages: v.optional(v.array(v.string())),
});

export type Inline359 = {

};
export const Inline359Schema: v.GenericSchema<unknown, Inline359> = v.looseObject({

});

export type Inline362 = {
  readonly cursor?: string;
  readonly starterPacks: ReadonlyArray<AppBskyGraphDefsStarterPackViewBasic>;
};
export const Inline362Schema: v.GenericSchema<unknown, Inline362> = v.looseObject({
  cursor: v.optional(v.string()),
  starterPacks: v.array(v.lazy(() => AppBskyGraphDefsStarterPackViewBasicSchema)),
});

export type Inline365 = {
  readonly cursor?: string;
  readonly blocks: ReadonlyArray<AppBskyActorDefsProfileView>;
};
export const Inline365Schema: v.GenericSchema<unknown, Inline365> = v.looseObject({
  cursor: v.optional(v.string()),
  blocks: v.array(v.lazy(() => AppBskyActorDefsProfileViewSchema)),
});

export type Inline368 = {
  readonly subject: AppBskyActorDefsProfileView;
  readonly cursor?: string;
  readonly followers: ReadonlyArray<AppBskyActorDefsProfileView>;
};
export const Inline368Schema: v.GenericSchema<unknown, Inline368> = v.looseObject({
  subject: v.lazy(() => AppBskyActorDefsProfileViewSchema),
  cursor: v.optional(v.string()),
  followers: v.array(v.lazy(() => AppBskyActorDefsProfileViewSchema)),
});

export type Inline371 = {
  readonly subject: AppBskyActorDefsProfileView;
  readonly cursor?: string;
  readonly follows: ReadonlyArray<AppBskyActorDefsProfileView>;
};
export const Inline371Schema: v.GenericSchema<unknown, Inline371> = v.looseObject({
  subject: v.lazy(() => AppBskyActorDefsProfileViewSchema),
  cursor: v.optional(v.string()),
  follows: v.array(v.lazy(() => AppBskyActorDefsProfileViewSchema)),
});

export type Inline374 = {
  readonly subject: AppBskyActorDefsProfileView;
  readonly cursor?: string;
  readonly followers: ReadonlyArray<AppBskyActorDefsProfileView>;
};
export const Inline374Schema: v.GenericSchema<unknown, Inline374> = v.looseObject({
  subject: v.lazy(() => AppBskyActorDefsProfileViewSchema),
  cursor: v.optional(v.string()),
  followers: v.array(v.lazy(() => AppBskyActorDefsProfileViewSchema)),
});

export type Inline377 = {
  readonly cursor?: string;
  readonly list: AppBskyGraphDefsListView;
  readonly items: ReadonlyArray<AppBskyGraphDefsListItemView>;
};
export const Inline377Schema: v.GenericSchema<unknown, Inline377> = v.looseObject({
  cursor: v.optional(v.string()),
  list: v.lazy(() => AppBskyGraphDefsListViewSchema),
  items: v.array(v.lazy(() => AppBskyGraphDefsListItemViewSchema)),
});

export type Inline380 = {
  readonly cursor?: string;
  readonly lists: ReadonlyArray<AppBskyGraphDefsListView>;
};
export const Inline380Schema: v.GenericSchema<unknown, Inline380> = v.looseObject({
  cursor: v.optional(v.string()),
  lists: v.array(v.lazy(() => AppBskyGraphDefsListViewSchema)),
});

export type Inline383 = {
  readonly cursor?: string;
  readonly lists: ReadonlyArray<AppBskyGraphDefsListView>;
};
export const Inline383Schema: v.GenericSchema<unknown, Inline383> = v.looseObject({
  cursor: v.optional(v.string()),
  lists: v.array(v.lazy(() => AppBskyGraphDefsListViewSchema)),
});

export type Inline386 = {
  readonly cursor?: string;
  readonly lists: ReadonlyArray<AppBskyGraphDefsListView>;
};
export const Inline386Schema: v.GenericSchema<unknown, Inline386> = v.looseObject({
  cursor: v.optional(v.string()),
  lists: v.array(v.lazy(() => AppBskyGraphDefsListViewSchema)),
});

export type Inline389 = {
  readonly cursor?: string;
  readonly listsWithMembership: ReadonlyArray<AppBskyGraphGetListsWithMembershipListWithMembership>;
};
export const Inline389Schema: v.GenericSchema<unknown, Inline389> = v.looseObject({
  cursor: v.optional(v.string()),
  listsWithMembership: v.array(v.lazy(() => AppBskyGraphGetListsWithMembershipListWithMembershipSchema)),
});

export type Inline392 = {
  readonly cursor?: string;
  readonly mutes: ReadonlyArray<AppBskyActorDefsProfileView>;
};
export const Inline392Schema: v.GenericSchema<unknown, Inline392> = v.looseObject({
  cursor: v.optional(v.string()),
  mutes: v.array(v.lazy(() => AppBskyActorDefsProfileViewSchema)),
});

export type Inline395 = {
  readonly actor?: string;
  readonly relationships: ReadonlyArray<AppBskyGraphDefsRelationship | AppBskyGraphDefsNotFoundActor>;
};
export const Inline395Schema: v.GenericSchema<unknown, Inline395> = v.looseObject({
  actor: v.optional(v.string()),
  relationships: v.array(v.union([v.lazy(() => AppBskyGraphDefsRelationshipSchema), v.lazy(() => AppBskyGraphDefsNotFoundActorSchema)])),
});

export type Inline398 = {
  readonly starterPack: AppBskyGraphDefsStarterPackView;
};
export const Inline398Schema: v.GenericSchema<unknown, Inline398> = v.looseObject({
  starterPack: v.lazy(() => AppBskyGraphDefsStarterPackViewSchema),
});

export type Inline401 = {
  readonly starterPacks: ReadonlyArray<AppBskyGraphDefsStarterPackViewBasic>;
};
export const Inline401Schema: v.GenericSchema<unknown, Inline401> = v.looseObject({
  starterPacks: v.array(v.lazy(() => AppBskyGraphDefsStarterPackViewBasicSchema)),
});

export type Inline404 = {
  readonly cursor?: string;
  readonly starterPacksWithMembership: ReadonlyArray<AppBskyGraphGetStarterPacksWithMembershipStarterPackWithMembership>;
};
export const Inline404Schema: v.GenericSchema<unknown, Inline404> = v.looseObject({
  cursor: v.optional(v.string()),
  starterPacksWithMembership: v.array(v.lazy(() => AppBskyGraphGetStarterPacksWithMembershipStarterPackWithMembershipSchema)),
});

export type Inline407 = {
  readonly suggestions: ReadonlyArray<AppBskyActorDefsProfileView>;
  readonly recIdStr?: string;
  readonly isFallback?: boolean;
  readonly recId?: number;
};
export const Inline407Schema: v.GenericSchema<unknown, Inline407> = v.looseObject({
  suggestions: v.array(v.lazy(() => AppBskyActorDefsProfileViewSchema)),
  recIdStr: v.optional(v.string()),
  isFallback: v.optional(v.boolean()),
  recId: v.optional(v.number()),
});

export type Inline416 = {
  readonly cursor?: string;
  readonly starterPacks: ReadonlyArray<AppBskyGraphDefsStarterPackViewBasic>;
};
export const Inline416Schema: v.GenericSchema<unknown, Inline416> = v.looseObject({
  cursor: v.optional(v.string()),
  starterPacks: v.array(v.lazy(() => AppBskyGraphDefsStarterPackViewBasicSchema)),
});

export type Inline419 = {
  readonly cursor?: string;
  readonly hitsTotal?: number;
  readonly starterPacks: ReadonlyArray<AppBskyGraphDefsStarterPackView>;
};
export const Inline419Schema: v.GenericSchema<unknown, Inline419> = v.looseObject({
  cursor: v.optional(v.string()),
  hitsTotal: v.optional(v.number()),
  starterPacks: v.array(v.lazy(() => AppBskyGraphDefsStarterPackViewSchema)),
});

export type Inline428 = {
  readonly views: ReadonlyArray<AppBskyLabelerDefsLabelerView | AppBskyLabelerDefsLabelerViewDetailed>;
};
export const Inline428Schema: v.GenericSchema<unknown, Inline428> = v.looseObject({
  views: v.array(v.union([v.lazy(() => AppBskyLabelerDefsLabelerViewSchema), v.lazy(() => AppBskyLabelerDefsLabelerViewDetailedSchema)])),
});

export type Inline431 = {
  readonly count: number;
};
export const Inline431Schema: v.GenericSchema<unknown, Inline431> = v.looseObject({
  count: v.number(),
});

export type Inline434 = {
  readonly cursor?: string;
  readonly subscriptions: ReadonlyArray<AppBskyActorDefsProfileView>;
};
export const Inline434Schema: v.GenericSchema<unknown, Inline434> = v.looseObject({
  cursor: v.optional(v.string()),
  subscriptions: v.array(v.lazy(() => AppBskyActorDefsProfileViewSchema)),
});

export type Inline437 = {
  readonly cursor?: string;
  readonly notifications: ReadonlyArray<AppBskyNotificationListNotificationsNotification>;
  readonly priority?: boolean;
  readonly seenAt?: string;
};
export const Inline437Schema: v.GenericSchema<unknown, Inline437> = v.looseObject({
  cursor: v.optional(v.string()),
  notifications: v.array(v.lazy(() => AppBskyNotificationListNotificationsNotificationSchema)),
  priority: v.optional(v.boolean()),
  seenAt: v.optional(v.string()),
});

export type Inline440 = {
  readonly subject: string;
  readonly activitySubscription?: AppBskyNotificationDefsActivitySubscription;
};
export const Inline440Schema: v.GenericSchema<unknown, Inline440> = v.looseObject({
  subject: v.string(),
  activitySubscription: v.optional(v.lazy(() => AppBskyNotificationDefsActivitySubscriptionSchema)),
});

export type Inline443 = {
  readonly preferences: AppBskyNotificationDefsPreferences;
};
export const Inline443Schema: v.GenericSchema<unknown, Inline443> = v.looseObject({
  preferences: v.lazy(() => AppBskyNotificationDefsPreferencesSchema),
});

export type Inline454 = {
  readonly starterPacks: ReadonlyArray<AppBskyGraphDefsStarterPackView>;
};
export const Inline454Schema: v.GenericSchema<unknown, Inline454> = v.looseObject({
  starterPacks: v.array(v.lazy(() => AppBskyGraphDefsStarterPackViewSchema)),
});

export type Inline457 = {
  readonly starterPacks: ReadonlyArray<string>;
};
export const Inline457Schema: v.GenericSchema<unknown, Inline457> = v.looseObject({
  starterPacks: v.array(v.string()),
});

export type Inline460 = {
  readonly dids: ReadonlyArray<string>;
  readonly recId?: string;
  readonly recIdStr?: string;
};
export const Inline460Schema: v.GenericSchema<unknown, Inline460> = v.looseObject({
  dids: v.array(v.string()),
  recId: v.optional(v.string()),
  recIdStr: v.optional(v.string()),
});

export type Inline463 = {
  readonly cursor?: string;
  readonly feeds: ReadonlyArray<AppBskyFeedDefsGeneratorView>;
};
export const Inline463Schema: v.GenericSchema<unknown, Inline463> = v.looseObject({
  cursor: v.optional(v.string()),
  feeds: v.array(v.lazy(() => AppBskyFeedDefsGeneratorViewSchema)),
});

export type Inline466 = {
  readonly thread: ReadonlyArray<AppBskyUnspeccedGetPostThreadOtherV2ThreadItem>;
};
export const Inline466Schema: v.GenericSchema<unknown, Inline466> = v.looseObject({
  thread: v.array(v.lazy(() => AppBskyUnspeccedGetPostThreadOtherV2ThreadItemSchema)),
});

export type Inline469 = {
  readonly thread: ReadonlyArray<AppBskyUnspeccedGetPostThreadV2ThreadItem>;
  readonly threadgate?: AppBskyFeedDefsThreadgateView;
  readonly hasOtherReplies: boolean;
};
export const Inline469Schema: v.GenericSchema<unknown, Inline469> = v.looseObject({
  thread: v.array(v.lazy(() => AppBskyUnspeccedGetPostThreadV2ThreadItemSchema)),
  threadgate: v.optional(v.lazy(() => AppBskyFeedDefsThreadgateViewSchema)),
  hasOtherReplies: v.boolean(),
});

export type Inline472 = {
  readonly feeds: ReadonlyArray<string>;
};
export const Inline472Schema: v.GenericSchema<unknown, Inline472> = v.looseObject({
  feeds: v.array(v.string()),
});

export type Inline475 = {
  readonly actors: ReadonlyArray<AppBskyActorDefsProfileView>;
  readonly recId?: string;
  readonly recIdStr?: string;
};
export const Inline475Schema: v.GenericSchema<unknown, Inline475> = v.looseObject({
  actors: v.array(v.lazy(() => AppBskyActorDefsProfileViewSchema)),
  recId: v.optional(v.string()),
  recIdStr: v.optional(v.string()),
});

export type Inline478 = {
  readonly starterPacks: ReadonlyArray<AppBskyGraphDefsStarterPackView>;
};
export const Inline478Schema: v.GenericSchema<unknown, Inline478> = v.looseObject({
  starterPacks: v.array(v.lazy(() => AppBskyGraphDefsStarterPackViewSchema)),
});

export type Inline481 = {
  readonly starterPacks: ReadonlyArray<string>;
};
export const Inline481Schema: v.GenericSchema<unknown, Inline481> = v.looseObject({
  starterPacks: v.array(v.string()),
});

export type Inline484 = {
  readonly actors: ReadonlyArray<AppBskyActorDefsProfileView>;
  readonly recId?: string;
  readonly recIdStr?: string;
};
export const Inline484Schema: v.GenericSchema<unknown, Inline484> = v.looseObject({
  actors: v.array(v.lazy(() => AppBskyActorDefsProfileViewSchema)),
  recId: v.optional(v.string()),
  recIdStr: v.optional(v.string()),
});

export type Inline487 = {
  readonly actors: ReadonlyArray<AppBskyActorDefsProfileView>;
  readonly recIdStr?: string;
};
export const Inline487Schema: v.GenericSchema<unknown, Inline487> = v.looseObject({
  actors: v.array(v.lazy(() => AppBskyActorDefsProfileViewSchema)),
  recIdStr: v.optional(v.string()),
});

export type Inline490 = {
  readonly dids: ReadonlyArray<string>;
  readonly recIdStr?: string;
};
export const Inline490Schema: v.GenericSchema<unknown, Inline490> = v.looseObject({
  dids: v.array(v.string()),
  recIdStr: v.optional(v.string()),
});

export type Inline493 = {
  readonly actors: ReadonlyArray<AppBskyActorDefsProfileView>;
  readonly recIdStr?: string;
};
export const Inline493Schema: v.GenericSchema<unknown, Inline493> = v.looseObject({
  actors: v.array(v.lazy(() => AppBskyActorDefsProfileViewSchema)),
  recIdStr: v.optional(v.string()),
});

export type Inline496 = {
  readonly dids: ReadonlyArray<string>;
  readonly recIdStr?: string;
};
export const Inline496Schema: v.GenericSchema<unknown, Inline496> = v.looseObject({
  dids: v.array(v.string()),
  recIdStr: v.optional(v.string()),
});

export type Inline499 = {
  readonly actors: ReadonlyArray<AppBskyActorDefsProfileView>;
  readonly recIdStr?: string;
};
export const Inline499Schema: v.GenericSchema<unknown, Inline499> = v.looseObject({
  actors: v.array(v.lazy(() => AppBskyActorDefsProfileViewSchema)),
  recIdStr: v.optional(v.string()),
});

export type Inline502 = {
  readonly dids: ReadonlyArray<string>;
  readonly recIdStr?: string;
};
export const Inline502Schema: v.GenericSchema<unknown, Inline502> = v.looseObject({
  dids: v.array(v.string()),
  recIdStr: v.optional(v.string()),
});

export type Inline505 = {
  readonly dids: ReadonlyArray<string>;
  readonly recId?: string;
  readonly recIdStr?: string;
};
export const Inline505Schema: v.GenericSchema<unknown, Inline505> = v.looseObject({
  dids: v.array(v.string()),
  recId: v.optional(v.string()),
  recIdStr: v.optional(v.string()),
});

export type Inline508 = {
  readonly cursor?: string;
  readonly actors: ReadonlyArray<AppBskyUnspeccedDefsSkeletonSearchActor>;
  readonly relativeToDid?: string;
  readonly recId?: number;
  readonly recIdStr?: string;
};
export const Inline508Schema: v.GenericSchema<unknown, Inline508> = v.looseObject({
  cursor: v.optional(v.string()),
  actors: v.array(v.lazy(() => AppBskyUnspeccedDefsSkeletonSearchActorSchema)),
  relativeToDid: v.optional(v.string()),
  recId: v.optional(v.number()),
  recIdStr: v.optional(v.string()),
});

export type Inline511 = {
  readonly suggestions: ReadonlyArray<AppBskyUnspeccedGetTaggedSuggestionsSuggestion>;
};
export const Inline511Schema: v.GenericSchema<unknown, Inline511> = v.looseObject({
  suggestions: v.array(v.lazy(() => AppBskyUnspeccedGetTaggedSuggestionsSuggestionSchema)),
});

export type Inline514 = {
  readonly topics: ReadonlyArray<AppBskyUnspeccedDefsTrendingTopic>;
  readonly suggested: ReadonlyArray<AppBskyUnspeccedDefsTrendingTopic>;
};
export const Inline514Schema: v.GenericSchema<unknown, Inline514> = v.looseObject({
  topics: v.array(v.lazy(() => AppBskyUnspeccedDefsTrendingTopicSchema)),
  suggested: v.array(v.lazy(() => AppBskyUnspeccedDefsTrendingTopicSchema)),
});

export type Inline517 = {
  readonly trends: ReadonlyArray<AppBskyUnspeccedDefsTrendView>;
  readonly recIdStr?: string;
};
export const Inline517Schema: v.GenericSchema<unknown, Inline517> = v.looseObject({
  trends: v.array(v.lazy(() => AppBskyUnspeccedDefsTrendViewSchema)),
  recIdStr: v.optional(v.string()),
});

export type Inline520 = {
  readonly trends: ReadonlyArray<AppBskyUnspeccedDefsSkeletonTrend>;
  readonly recIdStr?: string;
};
export const Inline520Schema: v.GenericSchema<unknown, Inline520> = v.looseObject({
  trends: v.array(v.lazy(() => AppBskyUnspeccedDefsSkeletonTrendSchema)),
  recIdStr: v.optional(v.string()),
});

export type Inline525 = {
  readonly cursor?: string;
  readonly hitsTotal?: number;
  readonly actors: ReadonlyArray<AppBskyUnspeccedDefsSkeletonSearchActor>;
};
export const Inline525Schema: v.GenericSchema<unknown, Inline525> = v.looseObject({
  cursor: v.optional(v.string()),
  hitsTotal: v.optional(v.number()),
  actors: v.array(v.lazy(() => AppBskyUnspeccedDefsSkeletonSearchActorSchema)),
});

export type Inline528 = {
  readonly cursor?: string;
  readonly hitsTotal?: number;
  readonly posts: ReadonlyArray<AppBskyUnspeccedDefsSkeletonSearchPost>;
};
export const Inline528Schema: v.GenericSchema<unknown, Inline528> = v.looseObject({
  cursor: v.optional(v.string()),
  hitsTotal: v.optional(v.number()),
  posts: v.array(v.lazy(() => AppBskyUnspeccedDefsSkeletonSearchPostSchema)),
});

export type Inline531 = {
  readonly cursor?: string;
  readonly hitsTotal?: number;
  readonly starterPacks: ReadonlyArray<AppBskyUnspeccedDefsSkeletonSearchStarterPack>;
};
export const Inline531Schema: v.GenericSchema<unknown, Inline531> = v.looseObject({
  cursor: v.optional(v.string()),
  hitsTotal: v.optional(v.number()),
  starterPacks: v.array(v.lazy(() => AppBskyUnspeccedDefsSkeletonSearchStarterPackSchema)),
});

export type Inline534 = {
  readonly jobStatus: AppBskyVideoDefsJobStatus;
};
export const Inline534Schema: v.GenericSchema<unknown, Inline534> = v.looseObject({
  jobStatus: v.lazy(() => AppBskyVideoDefsJobStatusSchema),
});

export type Inline537 = {
  readonly canUpload: boolean;
  readonly remainingDailyVideos?: number;
  readonly remainingDailyBytes?: number;
  readonly message?: string;
  readonly error?: string;
};
export const Inline537Schema: v.GenericSchema<unknown, Inline537> = v.looseObject({
  canUpload: v.boolean(),
  remainingDailyVideos: v.optional(v.number()),
  remainingDailyBytes: v.optional(v.number()),
  message: v.optional(v.string()),
  error: v.optional(v.string()),
});

export type Inline540 = {
  readonly jobStatus: AppBskyVideoDefsJobStatus;
};
export const Inline540Schema: v.GenericSchema<unknown, Inline540> = v.looseObject({
  jobStatus: v.lazy(() => AppBskyVideoDefsJobStatusSchema),
});

export type Inline553 = {
  readonly infos: ReadonlyArray<ComAtprotoAdminDefsAccountView>;
};
export const Inline553Schema: v.GenericSchema<unknown, Inline553> = v.looseObject({
  infos: v.array(v.lazy(() => ComAtprotoAdminDefsAccountViewSchema)),
});

export type Inline556 = {
  readonly cursor?: string;
  readonly codes: ReadonlyArray<ComAtprotoServerDefsInviteCode>;
};
export const Inline556Schema: v.GenericSchema<unknown, Inline556> = v.looseObject({
  cursor: v.optional(v.string()),
  codes: v.array(v.lazy(() => ComAtprotoServerDefsInviteCodeSchema)),
});

export type Inline559 = {
  readonly subject: ComAtprotoAdminDefsRepoRef | ComAtprotoRepoStrongRef | ComAtprotoAdminDefsRepoBlobRef;
  readonly takedown?: ComAtprotoAdminDefsStatusAttr;
  readonly deactivated?: ComAtprotoAdminDefsStatusAttr;
};
export const Inline559Schema: v.GenericSchema<unknown, Inline559> = v.looseObject({
  subject: v.union([v.lazy(() => ComAtprotoAdminDefsRepoRefSchema), v.lazy(() => ComAtprotoRepoStrongRefSchema), v.lazy(() => ComAtprotoAdminDefsRepoBlobRefSchema)]),
  takedown: v.optional(v.lazy(() => ComAtprotoAdminDefsStatusAttrSchema)),
  deactivated: v.optional(v.lazy(() => ComAtprotoAdminDefsStatusAttrSchema)),
});

export type Inline562 = {
  readonly cursor?: string;
  readonly accounts: ReadonlyArray<ComAtprotoAdminDefsAccountView>;
};
export const Inline562Schema: v.GenericSchema<unknown, Inline562> = v.looseObject({
  cursor: v.optional(v.string()),
  accounts: v.array(v.lazy(() => ComAtprotoAdminDefsAccountViewSchema)),
});

export type Inline565 = {
  readonly sent: boolean;
};
export const Inline565Schema: v.GenericSchema<unknown, Inline565> = v.looseObject({
  sent: v.boolean(),
});

export type Inline576 = {
  readonly subject: ComAtprotoAdminDefsRepoRef | ComAtprotoRepoStrongRef | ComAtprotoAdminDefsRepoBlobRef;
  readonly takedown?: ComAtprotoAdminDefsStatusAttr;
};
export const Inline576Schema: v.GenericSchema<unknown, Inline576> = v.looseObject({
  subject: v.union([v.lazy(() => ComAtprotoAdminDefsRepoRefSchema), v.lazy(() => ComAtprotoRepoStrongRefSchema), v.lazy(() => ComAtprotoAdminDefsRepoBlobRefSchema)]),
  takedown: v.optional(v.lazy(() => ComAtprotoAdminDefsStatusAttrSchema)),
});

export type Inline579 = {
  readonly rotationKeys?: ReadonlyArray<string>;
  readonly alsoKnownAs?: ReadonlyArray<string>;
  readonly verificationMethods?: unknown;
  readonly services?: unknown;
};
export const Inline579Schema: v.GenericSchema<unknown, Inline579> = v.looseObject({
  rotationKeys: v.optional(v.array(v.string())),
  alsoKnownAs: v.optional(v.array(v.string())),
  verificationMethods: v.optional(v.unknown()),
  services: v.optional(v.unknown()),
});

export type Inline586 = {
  readonly didDoc: unknown;
};
export const Inline586Schema: v.GenericSchema<unknown, Inline586> = v.looseObject({
  didDoc: v.unknown(),
});

export type Inline589 = {
  readonly did: string;
};
export const Inline589Schema: v.GenericSchema<unknown, Inline589> = v.looseObject({
  did: v.string(),
});

export type Inline594 = {
  readonly operation: unknown;
};
export const Inline594Schema: v.GenericSchema<unknown, Inline594> = v.looseObject({
  operation: v.unknown(),
});

export type Inline601 = {
  readonly cursor?: string;
  readonly labels: ReadonlyArray<ComAtprotoLabelDefsLabel>;
};
export const Inline601Schema: v.GenericSchema<unknown, Inline601> = v.looseObject({
  cursor: v.optional(v.string()),
  labels: v.array(v.lazy(() => ComAtprotoLabelDefsLabelSchema)),
});

export type Inline604 = {
  readonly cid: string;
  readonly schema: ComAtprotoLexiconSchema;
  readonly uri: string;
};
export const Inline604Schema: v.GenericSchema<unknown, Inline604> = v.looseObject({
  cid: v.string(),
  schema: v.lazy(() => ComAtprotoLexiconSchemaSchema),
  uri: v.string(),
});

export type Inline607 = {
  readonly id: number;
  readonly reasonType: ComAtprotoModerationDefsReasonType;
  readonly reason?: string;
  readonly subject: ComAtprotoAdminDefsRepoRef | ComAtprotoRepoStrongRef;
  readonly reportedBy: string;
  readonly createdAt: string;
};
export const Inline607Schema: v.GenericSchema<unknown, Inline607> = v.looseObject({
  id: v.number(),
  reasonType: v.lazy(() => ComAtprotoModerationDefsReasonTypeSchema),
  reason: v.optional(v.string()),
  subject: v.union([v.lazy(() => ComAtprotoAdminDefsRepoRefSchema), v.lazy(() => ComAtprotoRepoStrongRefSchema)]),
  reportedBy: v.string(),
  createdAt: v.string(),
});

export type Inline610 = {
  readonly commit?: ComAtprotoRepoDefsCommitMeta;
  readonly results?: ReadonlyArray<ComAtprotoRepoApplyWritesCreateResult | ComAtprotoRepoApplyWritesUpdateResult | ComAtprotoRepoApplyWritesDeleteResult>;
};
export const Inline610Schema: v.GenericSchema<unknown, Inline610> = v.looseObject({
  commit: v.optional(v.lazy(() => ComAtprotoRepoDefsCommitMetaSchema)),
  results: v.optional(v.array(v.union([v.lazy(() => ComAtprotoRepoApplyWritesCreateResultSchema), v.lazy(() => ComAtprotoRepoApplyWritesUpdateResultSchema), v.lazy(() => ComAtprotoRepoApplyWritesDeleteResultSchema)]))),
});

export type Inline613 = {
  readonly uri: string;
  readonly cid: string;
  readonly commit?: ComAtprotoRepoDefsCommitMeta;
  readonly validationStatus?: string;
};
export const Inline613Schema: v.GenericSchema<unknown, Inline613> = v.looseObject({
  uri: v.string(),
  cid: v.string(),
  commit: v.optional(v.lazy(() => ComAtprotoRepoDefsCommitMetaSchema)),
  validationStatus: v.optional(v.string()),
});

export type Inline616 = {
  readonly commit?: ComAtprotoRepoDefsCommitMeta;
};
export const Inline616Schema: v.GenericSchema<unknown, Inline616> = v.looseObject({
  commit: v.optional(v.lazy(() => ComAtprotoRepoDefsCommitMetaSchema)),
});

export type Inline619 = {
  readonly handle: string;
  readonly did: string;
  readonly didDoc: unknown;
  readonly collections: ReadonlyArray<string>;
  readonly handleIsCorrect: boolean;
};
export const Inline619Schema: v.GenericSchema<unknown, Inline619> = v.looseObject({
  handle: v.string(),
  did: v.string(),
  didDoc: v.unknown(),
  collections: v.array(v.string()),
  handleIsCorrect: v.boolean(),
});

export type Inline622 = {
  readonly uri: string;
  readonly cid?: string;
  readonly value: unknown;
};
export const Inline622Schema: v.GenericSchema<unknown, Inline622> = v.looseObject({
  uri: v.string(),
  cid: v.optional(v.string()),
  value: v.unknown(),
});

export type Inline627 = {
  readonly cursor?: string;
  readonly blobs: ReadonlyArray<ComAtprotoRepoListMissingBlobsRecordBlob>;
};
export const Inline627Schema: v.GenericSchema<unknown, Inline627> = v.looseObject({
  cursor: v.optional(v.string()),
  blobs: v.array(v.lazy(() => ComAtprotoRepoListMissingBlobsRecordBlobSchema)),
});

export type Inline630 = {
  readonly cursor?: string;
  readonly records: ReadonlyArray<ComAtprotoRepoListRecordsRecord>;
};
export const Inline630Schema: v.GenericSchema<unknown, Inline630> = v.looseObject({
  cursor: v.optional(v.string()),
  records: v.array(v.lazy(() => ComAtprotoRepoListRecordsRecordSchema)),
});

export type Inline633 = {
  readonly uri: string;
  readonly cid: string;
  readonly commit?: ComAtprotoRepoDefsCommitMeta;
  readonly validationStatus?: string;
};
export const Inline633Schema: v.GenericSchema<unknown, Inline633> = v.looseObject({
  uri: v.string(),
  cid: v.string(),
  commit: v.optional(v.lazy(() => ComAtprotoRepoDefsCommitMetaSchema)),
  validationStatus: v.optional(v.string()),
});

export type Inline636 = {
  readonly blob: unknown;
};
export const Inline636Schema: v.GenericSchema<unknown, Inline636> = v.looseObject({
  blob: v.unknown(),
});

export type Inline641 = {
  readonly activated: boolean;
  readonly validDid: boolean;
  readonly repoCommit: string;
  readonly repoRev: string;
  readonly repoBlocks: number;
  readonly indexedRecords: number;
  readonly privateStateValues: number;
  readonly expectedBlobs: number;
  readonly importedBlobs: number;
};
export const Inline641Schema: v.GenericSchema<unknown, Inline641> = v.looseObject({
  activated: v.boolean(),
  validDid: v.boolean(),
  repoCommit: v.string(),
  repoRev: v.string(),
  repoBlocks: v.number(),
  indexedRecords: v.number(),
  privateStateValues: v.number(),
  expectedBlobs: v.number(),
  importedBlobs: v.number(),
});

export type Inline646 = {
  readonly accessJwt: string;
  readonly refreshJwt: string;
  readonly handle: string;
  readonly did: string;
  readonly didDoc?: unknown;
};
export const Inline646Schema: v.GenericSchema<unknown, Inline646> = v.looseObject({
  accessJwt: v.string(),
  refreshJwt: v.string(),
  handle: v.string(),
  did: v.string(),
  didDoc: v.optional(v.unknown()),
});

export type Inline651 = {
  readonly code: string;
};
export const Inline651Schema: v.GenericSchema<unknown, Inline651> = v.looseObject({
  code: v.string(),
});

export type Inline654 = {
  readonly codes: ReadonlyArray<ComAtprotoServerCreateInviteCodesAccountCodes>;
};
export const Inline654Schema: v.GenericSchema<unknown, Inline654> = v.looseObject({
  codes: v.array(v.lazy(() => ComAtprotoServerCreateInviteCodesAccountCodesSchema)),
});

export type Inline657 = {
  readonly accessJwt: string;
  readonly refreshJwt: string;
  readonly handle: string;
  readonly did: string;
  readonly didDoc?: unknown;
  readonly email?: string;
  readonly emailConfirmed?: boolean;
  readonly emailAuthFactor?: boolean;
  readonly active?: boolean;
  readonly status?: string;
};
export const Inline657Schema: v.GenericSchema<unknown, Inline657> = v.looseObject({
  accessJwt: v.string(),
  refreshJwt: v.string(),
  handle: v.string(),
  did: v.string(),
  didDoc: v.optional(v.unknown()),
  email: v.optional(v.string()),
  emailConfirmed: v.optional(v.boolean()),
  emailAuthFactor: v.optional(v.boolean()),
  active: v.optional(v.boolean()),
  status: v.optional(v.string()),
});

export type Inline664 = {
  readonly inviteCodeRequired?: boolean;
  readonly phoneVerificationRequired?: boolean;
  readonly blobUploadLimit?: number;
  readonly availableUserDomains: ReadonlyArray<string>;
  readonly links?: ComAtprotoServerDescribeServerLinks;
  readonly contact?: ComAtprotoServerDescribeServerContact;
  readonly did: string;
};
export const Inline664Schema: v.GenericSchema<unknown, Inline664> = v.looseObject({
  inviteCodeRequired: v.optional(v.boolean()),
  phoneVerificationRequired: v.optional(v.boolean()),
  blobUploadLimit: v.optional(v.number()),
  availableUserDomains: v.array(v.string()),
  links: v.optional(v.lazy(() => ComAtprotoServerDescribeServerLinksSchema)),
  contact: v.optional(v.lazy(() => ComAtprotoServerDescribeServerContactSchema)),
  did: v.string(),
});

export type Inline667 = {
  readonly codes: ReadonlyArray<ComAtprotoServerDefsInviteCode>;
};
export const Inline667Schema: v.GenericSchema<unknown, Inline667> = v.looseObject({
  codes: v.array(v.lazy(() => ComAtprotoServerDefsInviteCodeSchema)),
});

export type Inline670 = {
  readonly token: string;
};
export const Inline670Schema: v.GenericSchema<unknown, Inline670> = v.looseObject({
  token: v.string(),
});

export type Inline673 = {
  readonly handle: string;
  readonly did: string;
  readonly didDoc?: unknown;
  readonly email?: string;
  readonly emailConfirmed?: boolean;
  readonly emailAuthFactor?: boolean;
  readonly active?: boolean;
  readonly status?: string;
};
export const Inline673Schema: v.GenericSchema<unknown, Inline673> = v.looseObject({
  handle: v.string(),
  did: v.string(),
  didDoc: v.optional(v.unknown()),
  email: v.optional(v.string()),
  emailConfirmed: v.optional(v.boolean()),
  emailAuthFactor: v.optional(v.boolean()),
  active: v.optional(v.boolean()),
  status: v.optional(v.string()),
});

export type Inline676 = {
  readonly passwords: ReadonlyArray<ComAtprotoServerListAppPasswordsAppPassword>;
};
export const Inline676Schema: v.GenericSchema<unknown, Inline676> = v.looseObject({
  passwords: v.array(v.lazy(() => ComAtprotoServerListAppPasswordsAppPasswordSchema)),
});

export type Inline679 = {
  readonly accessJwt: string;
  readonly refreshJwt: string;
  readonly handle: string;
  readonly did: string;
  readonly didDoc?: unknown;
  readonly email?: string;
  readonly emailConfirmed?: boolean;
  readonly emailAuthFactor?: boolean;
  readonly active?: boolean;
  readonly status?: string;
};
export const Inline679Schema: v.GenericSchema<unknown, Inline679> = v.looseObject({
  accessJwt: v.string(),
  refreshJwt: v.string(),
  handle: v.string(),
  did: v.string(),
  didDoc: v.optional(v.unknown()),
  email: v.optional(v.string()),
  emailConfirmed: v.optional(v.boolean()),
  emailAuthFactor: v.optional(v.boolean()),
  active: v.optional(v.boolean()),
  status: v.optional(v.string()),
});

export type Inline686 = {
  readonly tokenRequired: boolean;
};
export const Inline686Schema: v.GenericSchema<unknown, Inline686> = v.looseObject({
  tokenRequired: v.boolean(),
});

export type Inline691 = {
  readonly signingKey: string;
};
export const Inline691Schema: v.GenericSchema<unknown, Inline691> = v.looseObject({
  signingKey: v.string(),
});

export type Inline704 = {
  readonly root: string;
};
export const Inline704Schema: v.GenericSchema<unknown, Inline704> = v.looseObject({
  root: v.string(),
});

export type Inline707 = {
  readonly hostname: string;
  readonly seq?: number;
  readonly accountCount?: number;
  readonly status?: ComAtprotoSyncDefsHostStatus;
};
export const Inline707Schema: v.GenericSchema<unknown, Inline707> = v.looseObject({
  hostname: v.string(),
  seq: v.optional(v.number()),
  accountCount: v.optional(v.number()),
  status: v.optional(v.lazy(() => ComAtprotoSyncDefsHostStatusSchema)),
});

export type Inline710 = {
  readonly cid: string;
  readonly rev: string;
};
export const Inline710Schema: v.GenericSchema<unknown, Inline710> = v.looseObject({
  cid: v.string(),
  rev: v.string(),
});

export type Inline715 = {
  readonly did: string;
  readonly active: boolean;
  readonly status?: string;
  readonly rev?: string;
};
export const Inline715Schema: v.GenericSchema<unknown, Inline715> = v.looseObject({
  did: v.string(),
  active: v.boolean(),
  status: v.optional(v.string()),
  rev: v.optional(v.string()),
});

export type Inline718 = {
  readonly cursor?: string;
  readonly cids: ReadonlyArray<string>;
};
export const Inline718Schema: v.GenericSchema<unknown, Inline718> = v.looseObject({
  cursor: v.optional(v.string()),
  cids: v.array(v.string()),
});

export type Inline721 = {
  readonly cursor?: string;
  readonly hosts: ReadonlyArray<ComAtprotoSyncListHostsHost>;
};
export const Inline721Schema: v.GenericSchema<unknown, Inline721> = v.looseObject({
  cursor: v.optional(v.string()),
  hosts: v.array(v.lazy(() => ComAtprotoSyncListHostsHostSchema)),
});

export type Inline724 = {
  readonly cursor?: string;
  readonly repos: ReadonlyArray<ComAtprotoSyncListReposRepo>;
};
export const Inline724Schema: v.GenericSchema<unknown, Inline724> = v.looseObject({
  cursor: v.optional(v.string()),
  repos: v.array(v.lazy(() => ComAtprotoSyncListReposRepoSchema)),
});

export type Inline727 = {
  readonly cursor?: string;
  readonly repos: ReadonlyArray<ComAtprotoSyncListReposByCollectionRepo>;
};
export const Inline727Schema: v.GenericSchema<unknown, Inline727> = v.looseObject({
  cursor: v.optional(v.string()),
  repos: v.array(v.lazy(() => ComAtprotoSyncListReposByCollectionRepoSchema)),
});

export type Inline734 = {

};
export const Inline734Schema: v.GenericSchema<unknown, Inline734> = v.looseObject({

});

export type Inline737 = {
  readonly handle: string;
  readonly result: ComAtprotoTempCheckHandleAvailabilityResultAvailable | ComAtprotoTempCheckHandleAvailabilityResultUnavailable;
};
export const Inline737Schema: v.GenericSchema<unknown, Inline737> = v.looseObject({
  handle: v.string(),
  result: v.union([v.lazy(() => ComAtprotoTempCheckHandleAvailabilityResultAvailableSchema), v.lazy(() => ComAtprotoTempCheckHandleAvailabilityResultUnavailableSchema)]),
});

export type Inline740 = {
  readonly activated: boolean;
  readonly placeInQueue?: number;
  readonly estimatedTimeMs?: number;
};
export const Inline740Schema: v.GenericSchema<unknown, Inline740> = v.looseObject({
  activated: v.boolean(),
  placeInQueue: v.optional(v.number()),
  estimatedTimeMs: v.optional(v.number()),
});

export type Inline743 = {
  readonly scope: string;
};
export const Inline743Schema: v.GenericSchema<unknown, Inline743> = v.looseObject({
  scope: v.string(),
});

export type Inline746 = {
  readonly labels: ReadonlyArray<ComAtprotoLabelDefsLabel>;
};
export const Inline746Schema: v.GenericSchema<unknown, Inline746> = v.looseObject({
  labels: v.array(v.lazy(() => ComAtprotoLabelDefsLabelSchema)),
});

export type ListActivitySubscriptionsParams = {
  readonly limit?: number;
  readonly cursor?: string;
};
export const ListActivitySubscriptionsParamsSchema: v.GenericSchema<unknown, ListActivitySubscriptionsParams> = v.looseObject({
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
});

export type ListActivitySubscriptionsResponse = {
  readonly data: Inline434;
};
export const ListActivitySubscriptionsResponseSchema: v.GenericSchema<unknown, ListActivitySubscriptionsResponse> = v.looseObject({
  data: v.lazy(() => Inline434Schema),
});

export type ListAppPasswordsParams = {

};
export const ListAppPasswordsParamsSchema: v.GenericSchema<unknown, ListAppPasswordsParams> = v.looseObject({

});

export type ListAppPasswordsResponse = {
  readonly data: Inline676;
};
export const ListAppPasswordsResponseSchema: v.GenericSchema<unknown, ListAppPasswordsResponse> = v.looseObject({
  data: v.lazy(() => Inline676Schema),
});

export type ListBlobsParams = {
  readonly did: string;
  readonly since?: string;
  readonly limit?: number;
  readonly cursor?: string;
};
export const ListBlobsParamsSchema: v.GenericSchema<unknown, ListBlobsParams> = v.looseObject({
  did: v.string(),
  since: v.optional(v.string()),
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
});

export type ListBlobsResponse = {
  readonly data: Inline718;
};
export const ListBlobsResponseSchema: v.GenericSchema<unknown, ListBlobsResponse> = v.looseObject({
  data: v.lazy(() => Inline718Schema),
});

export type ListHostsParams = {
  readonly limit?: number;
  readonly cursor?: string;
};
export const ListHostsParamsSchema: v.GenericSchema<unknown, ListHostsParams> = v.looseObject({
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
});

export type ListHostsResponse = {
  readonly data: Inline721;
};
export const ListHostsResponseSchema: v.GenericSchema<unknown, ListHostsResponse> = v.looseObject({
  data: v.lazy(() => Inline721Schema),
});

export type ListMissingBlobsParams = {
  readonly limit?: number;
  readonly cursor?: string;
};
export const ListMissingBlobsParamsSchema: v.GenericSchema<unknown, ListMissingBlobsParams> = v.looseObject({
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
});

export type ListMissingBlobsResponse = {
  readonly data: Inline627;
};
export const ListMissingBlobsResponseSchema: v.GenericSchema<unknown, ListMissingBlobsResponse> = v.looseObject({
  data: v.lazy(() => Inline627Schema),
});

export type ListNotificationsParams = {
  readonly reasons?: ReadonlyArray<string>;
  readonly limit?: number;
  readonly priority?: boolean;
  readonly cursor?: string;
  readonly seenAt?: string;
};
export const ListNotificationsParamsSchema: v.GenericSchema<unknown, ListNotificationsParams> = v.looseObject({
  reasons: v.optional(v.array(v.string())),
  limit: v.optional(v.number()),
  priority: v.optional(v.boolean()),
  cursor: v.optional(v.string()),
  seenAt: v.optional(v.string()),
});

export type ListNotificationsResponse = {
  readonly data: Inline437;
};
export const ListNotificationsResponseSchema: v.GenericSchema<unknown, ListNotificationsResponse> = v.looseObject({
  data: v.lazy(() => Inline437Schema),
});

export type ListRecordsParams = {
  readonly repo: string;
  readonly collection: string;
  readonly limit?: number;
  readonly cursor?: string;
  readonly reverse?: boolean;
};
export const ListRecordsParamsSchema: v.GenericSchema<unknown, ListRecordsParams> = v.looseObject({
  repo: v.string(),
  collection: v.string(),
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
  reverse: v.optional(v.boolean()),
});

export type ListRecordsResponse = {
  readonly data: Inline630;
};
export const ListRecordsResponseSchema: v.GenericSchema<unknown, ListRecordsResponse> = v.looseObject({
  data: v.lazy(() => Inline630Schema),
});

export type ListReposByCollectionParams = {
  readonly collection: string;
  readonly limit?: number;
  readonly cursor?: string;
};
export const ListReposByCollectionParamsSchema: v.GenericSchema<unknown, ListReposByCollectionParams> = v.looseObject({
  collection: v.string(),
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
});

export type ListReposByCollectionResponse = {
  readonly data: Inline727;
};
export const ListReposByCollectionResponseSchema: v.GenericSchema<unknown, ListReposByCollectionResponse> = v.looseObject({
  data: v.lazy(() => Inline727Schema),
});

export type ListReposParams = {
  readonly limit?: number;
  readonly cursor?: string;
};
export const ListReposParamsSchema: v.GenericSchema<unknown, ListReposParams> = v.looseObject({
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
});

export type ListReposResponse = {
  readonly data: Inline724;
};
export const ListReposResponseSchema: v.GenericSchema<unknown, ListReposResponse> = v.looseObject({
  data: v.lazy(() => Inline724Schema),
});

export type MuteActorListParams = {
  readonly list: string;
};
export const MuteActorListParamsSchema: v.GenericSchema<unknown, MuteActorListParams> = v.looseObject({
  list: v.string(),
});

export type MuteActorListResponse = {

};
export const MuteActorListResponseSchema: v.GenericSchema<unknown, MuteActorListResponse> = v.looseObject({

});

export type MuteActorParams = {
  readonly actor: string;
  readonly onlyReposts?: boolean;
  readonly onlyQuoteposts?: boolean;
};
export const MuteActorParamsSchema: v.GenericSchema<unknown, MuteActorParams> = v.looseObject({
  actor: v.string(),
  onlyReposts: v.optional(v.boolean()),
  onlyQuoteposts: v.optional(v.boolean()),
});

export type MuteActorResponse = {

};
export const MuteActorResponseSchema: v.GenericSchema<unknown, MuteActorResponse> = v.looseObject({

});

export type MuteThreadParams = {
  readonly root: string;
};
export const MuteThreadParamsSchema: v.GenericSchema<unknown, MuteThreadParams> = v.looseObject({
  root: v.string(),
});

export type MuteThreadResponse = {

};
export const MuteThreadResponseSchema: v.GenericSchema<unknown, MuteThreadResponse> = v.looseObject({

});

export type NotifyOfUpdateParams = {
  readonly hostname: string;
};
export const NotifyOfUpdateParamsSchema: v.GenericSchema<unknown, NotifyOfUpdateParams> = v.looseObject({
  hostname: v.string(),
});

export type NotifyOfUpdateResponse = {

};
export const NotifyOfUpdateResponseSchema: v.GenericSchema<unknown, NotifyOfUpdateResponse> = v.looseObject({

});

export type PutActivitySubscriptionParams = {
  readonly subject: string;
  readonly activitySubscription: AppBskyNotificationDefsActivitySubscription;
};
export const PutActivitySubscriptionParamsSchema: v.GenericSchema<unknown, PutActivitySubscriptionParams> = v.looseObject({
  subject: v.string(),
  activitySubscription: v.lazy(() => AppBskyNotificationDefsActivitySubscriptionSchema),
});

export type PutActivitySubscriptionResponse = {
  readonly data: Inline440;
};
export const PutActivitySubscriptionResponseSchema: v.GenericSchema<unknown, PutActivitySubscriptionResponse> = v.looseObject({
  data: v.lazy(() => Inline440Schema),
});

export type PutPreferencesParams = {
  readonly preferences: AppBskyActorDefsPreferences;
};
export const PutPreferencesParamsSchema: v.GenericSchema<unknown, PutPreferencesParams> = v.looseObject({
  preferences: v.lazy(() => AppBskyActorDefsPreferencesSchema),
});

export type PutPreferencesResponse = {

};
export const PutPreferencesResponseSchema: v.GenericSchema<unknown, PutPreferencesResponse> = v.looseObject({

});

export type PutPreferencesV2Params = {
  readonly chat?: AppBskyNotificationDefsChatPreference;
  readonly follow?: AppBskyNotificationDefsFilterablePreference;
  readonly like?: AppBskyNotificationDefsFilterablePreference;
  readonly likeViaRepost?: AppBskyNotificationDefsFilterablePreference;
  readonly mention?: AppBskyNotificationDefsFilterablePreference;
  readonly quote?: AppBskyNotificationDefsFilterablePreference;
  readonly reply?: AppBskyNotificationDefsFilterablePreference;
  readonly repost?: AppBskyNotificationDefsFilterablePreference;
  readonly repostViaRepost?: AppBskyNotificationDefsFilterablePreference;
  readonly starterpackJoined?: AppBskyNotificationDefsPreference;
  readonly subscribedPost?: AppBskyNotificationDefsPreference;
  readonly unverified?: AppBskyNotificationDefsPreference;
  readonly verified?: AppBskyNotificationDefsPreference;
};
export const PutPreferencesV2ParamsSchema: v.GenericSchema<unknown, PutPreferencesV2Params> = v.looseObject({
  chat: v.optional(v.lazy(() => AppBskyNotificationDefsChatPreferenceSchema)),
  follow: v.optional(v.lazy(() => AppBskyNotificationDefsFilterablePreferenceSchema)),
  like: v.optional(v.lazy(() => AppBskyNotificationDefsFilterablePreferenceSchema)),
  likeViaRepost: v.optional(v.lazy(() => AppBskyNotificationDefsFilterablePreferenceSchema)),
  mention: v.optional(v.lazy(() => AppBskyNotificationDefsFilterablePreferenceSchema)),
  quote: v.optional(v.lazy(() => AppBskyNotificationDefsFilterablePreferenceSchema)),
  reply: v.optional(v.lazy(() => AppBskyNotificationDefsFilterablePreferenceSchema)),
  repost: v.optional(v.lazy(() => AppBskyNotificationDefsFilterablePreferenceSchema)),
  repostViaRepost: v.optional(v.lazy(() => AppBskyNotificationDefsFilterablePreferenceSchema)),
  starterpackJoined: v.optional(v.lazy(() => AppBskyNotificationDefsPreferenceSchema)),
  subscribedPost: v.optional(v.lazy(() => AppBskyNotificationDefsPreferenceSchema)),
  unverified: v.optional(v.lazy(() => AppBskyNotificationDefsPreferenceSchema)),
  verified: v.optional(v.lazy(() => AppBskyNotificationDefsPreferenceSchema)),
});

export type PutPreferencesV2Response = {
  readonly data: Inline443;
};
export const PutPreferencesV2ResponseSchema: v.GenericSchema<unknown, PutPreferencesV2Response> = v.looseObject({
  data: v.lazy(() => Inline443Schema),
});

export type PutRecordParams = {
  readonly repo: string;
  readonly collection: string;
  readonly rkey: string;
  readonly validate?: boolean;
  readonly record: unknown;
  readonly swapRecord?: string;
  readonly swapCommit?: string;
};
export const PutRecordParamsSchema: v.GenericSchema<unknown, PutRecordParams> = v.looseObject({
  repo: v.string(),
  collection: v.string(),
  rkey: v.string(),
  validate: v.optional(v.boolean()),
  record: v.unknown(),
  swapRecord: v.optional(v.string()),
  swapCommit: v.optional(v.string()),
});

export type PutRecordResponse = {
  readonly data: Inline633;
};
export const PutRecordResponseSchema: v.GenericSchema<unknown, PutRecordResponse> = v.looseObject({
  data: v.lazy(() => Inline633Schema),
});

export type QueryLabelsParams = {
  readonly uriPatterns: ReadonlyArray<string>;
  readonly sources?: ReadonlyArray<string>;
  readonly limit?: number;
  readonly cursor?: string;
};
export const QueryLabelsParamsSchema: v.GenericSchema<unknown, QueryLabelsParams> = v.looseObject({
  uriPatterns: v.array(v.string()),
  sources: v.optional(v.array(v.string())),
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
});

export type QueryLabelsResponse = {
  readonly data: Inline601;
};
export const QueryLabelsResponseSchema: v.GenericSchema<unknown, QueryLabelsResponse> = v.looseObject({
  data: v.lazy(() => Inline601Schema),
});

export type RefreshIdentityParams = {
  readonly identifier: string;
};
export const RefreshIdentityParamsSchema: v.GenericSchema<unknown, RefreshIdentityParams> = v.looseObject({
  identifier: v.string(),
});

export type RefreshIdentityResponse = {
  readonly data: ComAtprotoIdentityDefsIdentityInfo;
};
export const RefreshIdentityResponseSchema: v.GenericSchema<unknown, RefreshIdentityResponse> = v.looseObject({
  data: v.lazy(() => ComAtprotoIdentityDefsIdentityInfoSchema),
});

export type RefreshSessionParams = {

};
export const RefreshSessionParamsSchema: v.GenericSchema<unknown, RefreshSessionParams> = v.looseObject({

});

export type RefreshSessionResponse = {
  readonly data: Inline679;
};
export const RefreshSessionResponseSchema: v.GenericSchema<unknown, RefreshSessionResponse> = v.looseObject({
  data: v.lazy(() => Inline679Schema),
});

export type RegisterPushParams = {
  readonly serviceDid: string;
  readonly token: string;
  readonly platform: string;
  readonly appId: string;
  readonly ageRestricted?: boolean;
};
export const RegisterPushParamsSchema: v.GenericSchema<unknown, RegisterPushParams> = v.looseObject({
  serviceDid: v.string(),
  token: v.string(),
  platform: v.string(),
  appId: v.string(),
  ageRestricted: v.optional(v.boolean()),
});

export type RegisterPushResponse = {

};
export const RegisterPushResponseSchema: v.GenericSchema<unknown, RegisterPushResponse> = v.looseObject({

});

export type RemoveDataParams = {

};
export const RemoveDataParamsSchema: v.GenericSchema<unknown, RemoveDataParams> = v.looseObject({

});

export type RemoveDataResponse = {
  readonly data: Inline280;
};
export const RemoveDataResponseSchema: v.GenericSchema<unknown, RemoveDataResponse> = v.looseObject({
  data: v.lazy(() => Inline280Schema),
});

export type RequestAccountDeleteParams = {

};
export const RequestAccountDeleteParamsSchema: v.GenericSchema<unknown, RequestAccountDeleteParams> = v.looseObject({

});

export type RequestAccountDeleteResponse = {

};
export const RequestAccountDeleteResponseSchema: v.GenericSchema<unknown, RequestAccountDeleteResponse> = v.looseObject({

});

export type RequestCrawlParams = {
  readonly hostname: string;
};
export const RequestCrawlParamsSchema: v.GenericSchema<unknown, RequestCrawlParams> = v.looseObject({
  hostname: v.string(),
});

export type RequestCrawlResponse = {

};
export const RequestCrawlResponseSchema: v.GenericSchema<unknown, RequestCrawlResponse> = v.looseObject({

});

export type RequestEmailConfirmationParams = {

};
export const RequestEmailConfirmationParamsSchema: v.GenericSchema<unknown, RequestEmailConfirmationParams> = v.looseObject({

});

export type RequestEmailConfirmationResponse = {

};
export const RequestEmailConfirmationResponseSchema: v.GenericSchema<unknown, RequestEmailConfirmationResponse> = v.looseObject({

});

export type RequestEmailUpdateParams = {

};
export const RequestEmailUpdateParamsSchema: v.GenericSchema<unknown, RequestEmailUpdateParams> = v.looseObject({

});

export type RequestEmailUpdateResponse = {
  readonly data: Inline686;
};
export const RequestEmailUpdateResponseSchema: v.GenericSchema<unknown, RequestEmailUpdateResponse> = v.looseObject({
  data: v.lazy(() => Inline686Schema),
});

export type RequestPasswordResetParams = {
  readonly email: string;
};
export const RequestPasswordResetParamsSchema: v.GenericSchema<unknown, RequestPasswordResetParams> = v.looseObject({
  email: v.string(),
});

export type RequestPasswordResetResponse = {

};
export const RequestPasswordResetResponseSchema: v.GenericSchema<unknown, RequestPasswordResetResponse> = v.looseObject({

});

export type RequestPhoneVerificationParams = {
  readonly phoneNumber: string;
};
export const RequestPhoneVerificationParamsSchema: v.GenericSchema<unknown, RequestPhoneVerificationParams> = v.looseObject({
  phoneNumber: v.string(),
});

export type RequestPhoneVerificationResponse = {

};
export const RequestPhoneVerificationResponseSchema: v.GenericSchema<unknown, RequestPhoneVerificationResponse> = v.looseObject({

});

export type RequestPlcOperationSignatureParams = {

};
export const RequestPlcOperationSignatureParamsSchema: v.GenericSchema<unknown, RequestPlcOperationSignatureParams> = v.looseObject({

});

export type RequestPlcOperationSignatureResponse = {

};
export const RequestPlcOperationSignatureResponseSchema: v.GenericSchema<unknown, RequestPlcOperationSignatureResponse> = v.looseObject({

});

export type ReserveSigningKeyParams = {
  readonly did?: string;
};
export const ReserveSigningKeyParamsSchema: v.GenericSchema<unknown, ReserveSigningKeyParams> = v.looseObject({
  did: v.optional(v.string()),
});

export type ReserveSigningKeyResponse = {
  readonly data: Inline691;
};
export const ReserveSigningKeyResponseSchema: v.GenericSchema<unknown, ReserveSigningKeyResponse> = v.looseObject({
  data: v.lazy(() => Inline691Schema),
});

export type ResetPasswordParams = {
  readonly token: string;
  readonly password: string;
};
export const ResetPasswordParamsSchema: v.GenericSchema<unknown, ResetPasswordParams> = v.looseObject({
  token: v.string(),
  password: v.string(),
});

export type ResetPasswordResponse = {

};
export const ResetPasswordResponseSchema: v.GenericSchema<unknown, ResetPasswordResponse> = v.looseObject({

});

export type ResolveDidParams = {
  readonly did: string;
};
export const ResolveDidParamsSchema: v.GenericSchema<unknown, ResolveDidParams> = v.looseObject({
  did: v.string(),
});

export type ResolveDidResponse = {
  readonly data: Inline586;
};
export const ResolveDidResponseSchema: v.GenericSchema<unknown, ResolveDidResponse> = v.looseObject({
  data: v.lazy(() => Inline586Schema),
});

export type ResolveHandleParams = {
  readonly handle: string;
};
export const ResolveHandleParamsSchema: v.GenericSchema<unknown, ResolveHandleParams> = v.looseObject({
  handle: v.string(),
});

export type ResolveHandleResponse = {
  readonly data: Inline589;
};
export const ResolveHandleResponseSchema: v.GenericSchema<unknown, ResolveHandleResponse> = v.looseObject({
  data: v.lazy(() => Inline589Schema),
});

export type ResolveIdentityParams = {
  readonly identifier: string;
};
export const ResolveIdentityParamsSchema: v.GenericSchema<unknown, ResolveIdentityParams> = v.looseObject({
  identifier: v.string(),
});

export type ResolveIdentityResponse = {
  readonly data: ComAtprotoIdentityDefsIdentityInfo;
};
export const ResolveIdentityResponseSchema: v.GenericSchema<unknown, ResolveIdentityResponse> = v.looseObject({
  data: v.lazy(() => ComAtprotoIdentityDefsIdentityInfoSchema),
});

export type ResolveLexiconParams = {
  readonly nsid: string;
};
export const ResolveLexiconParamsSchema: v.GenericSchema<unknown, ResolveLexiconParams> = v.looseObject({
  nsid: v.string(),
});

export type ResolveLexiconResponse = {
  readonly data: Inline604;
};
export const ResolveLexiconResponseSchema: v.GenericSchema<unknown, ResolveLexiconResponse> = v.looseObject({
  data: v.lazy(() => Inline604Schema),
});

export type RevokeAccountCredentialsParams = {
  readonly account: string;
};
export const RevokeAccountCredentialsParamsSchema: v.GenericSchema<unknown, RevokeAccountCredentialsParams> = v.looseObject({
  account: v.string(),
});

export type RevokeAccountCredentialsResponse = {

};
export const RevokeAccountCredentialsResponseSchema: v.GenericSchema<unknown, RevokeAccountCredentialsResponse> = v.looseObject({

});

export type RevokeAppPasswordParams = {
  readonly name: string;
};
export const RevokeAppPasswordParamsSchema: v.GenericSchema<unknown, RevokeAppPasswordParams> = v.looseObject({
  name: v.string(),
});

export type RevokeAppPasswordResponse = {

};
export const RevokeAppPasswordResponseSchema: v.GenericSchema<unknown, RevokeAppPasswordResponse> = v.looseObject({

});

export type SearchAccountsParams = {
  readonly email?: string;
  readonly cursor?: string;
  readonly limit?: number;
};
export const SearchAccountsParamsSchema: v.GenericSchema<unknown, SearchAccountsParams> = v.looseObject({
  email: v.optional(v.string()),
  cursor: v.optional(v.string()),
  limit: v.optional(v.number()),
});

export type SearchAccountsResponse = {
  readonly data: Inline562;
};
export const SearchAccountsResponseSchema: v.GenericSchema<unknown, SearchAccountsResponse> = v.looseObject({
  data: v.lazy(() => Inline562Schema),
});

export type SearchActorsParams = {
  readonly term?: string;
  readonly q?: string;
  readonly limit?: number;
  readonly cursor?: string;
};
export const SearchActorsParamsSchema: v.GenericSchema<unknown, SearchActorsParams> = v.looseObject({
  term: v.optional(v.string()),
  q: v.optional(v.string()),
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
});

export type SearchActorsResponse = {
  readonly data: Inline248;
};
export const SearchActorsResponseSchema: v.GenericSchema<unknown, SearchActorsResponse> = v.looseObject({
  data: v.lazy(() => Inline248Schema),
});

export type SearchActorsSkeletonParams = {
  readonly q: string;
  readonly viewer?: string;
  readonly typeahead?: boolean;
  readonly limit?: number;
  readonly cursor?: string;
};
export const SearchActorsSkeletonParamsSchema: v.GenericSchema<unknown, SearchActorsSkeletonParams> = v.looseObject({
  q: v.string(),
  viewer: v.optional(v.string()),
  typeahead: v.optional(v.boolean()),
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
});

export type SearchActorsSkeletonResponse = {
  readonly data: Inline525;
};
export const SearchActorsSkeletonResponseSchema: v.GenericSchema<unknown, SearchActorsSkeletonResponse> = v.looseObject({
  data: v.lazy(() => Inline525Schema),
});

export type SearchActorsTypeaheadParams = {
  readonly term?: string;
  readonly q?: string;
  readonly limit?: number;
};
export const SearchActorsTypeaheadParamsSchema: v.GenericSchema<unknown, SearchActorsTypeaheadParams> = v.looseObject({
  term: v.optional(v.string()),
  q: v.optional(v.string()),
  limit: v.optional(v.number()),
});

export type SearchActorsTypeaheadResponse = {
  readonly data: Inline251;
};
export const SearchActorsTypeaheadResponseSchema: v.GenericSchema<unknown, SearchActorsTypeaheadResponse> = v.looseObject({
  data: v.lazy(() => Inline251Schema),
});

export type SearchPostsParams = {
  readonly q: string;
  readonly sort?: string;
  readonly since?: string;
  readonly until?: string;
  readonly mentions?: string;
  readonly author?: string;
  readonly lang?: string;
  readonly domain?: string;
  readonly url?: string;
  readonly tag?: ReadonlyArray<string>;
  readonly limit?: number;
  readonly cursor?: string;
};
export const SearchPostsParamsSchema: v.GenericSchema<unknown, SearchPostsParams> = v.looseObject({
  q: v.string(),
  sort: v.optional(v.string()),
  since: v.optional(v.string()),
  until: v.optional(v.string()),
  mentions: v.optional(v.string()),
  author: v.optional(v.string()),
  lang: v.optional(v.string()),
  domain: v.optional(v.string()),
  url: v.optional(v.string()),
  tag: v.optional(v.array(v.string())),
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
});

export type SearchPostsResponse = {
  readonly data: Inline353;
};
export const SearchPostsResponseSchema: v.GenericSchema<unknown, SearchPostsResponse> = v.looseObject({
  data: v.lazy(() => Inline353Schema),
});

export type SearchPostsSkeletonParams = {
  readonly q: string;
  readonly sort?: string;
  readonly since?: string;
  readonly until?: string;
  readonly mentions?: string;
  readonly author?: string;
  readonly lang?: string;
  readonly domain?: string;
  readonly url?: string;
  readonly tag?: ReadonlyArray<string>;
  readonly viewer?: string;
  readonly limit?: number;
  readonly cursor?: string;
};
export const SearchPostsSkeletonParamsSchema: v.GenericSchema<unknown, SearchPostsSkeletonParams> = v.looseObject({
  q: v.string(),
  sort: v.optional(v.string()),
  since: v.optional(v.string()),
  until: v.optional(v.string()),
  mentions: v.optional(v.string()),
  author: v.optional(v.string()),
  lang: v.optional(v.string()),
  domain: v.optional(v.string()),
  url: v.optional(v.string()),
  tag: v.optional(v.array(v.string())),
  viewer: v.optional(v.string()),
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
});

export type SearchPostsSkeletonResponse = {
  readonly data: Inline528;
};
export const SearchPostsSkeletonResponseSchema: v.GenericSchema<unknown, SearchPostsSkeletonResponse> = v.looseObject({
  data: v.lazy(() => Inline528Schema),
});

export type SearchPostsV2Params = {
  readonly cursor?: string;
  readonly limit?: number;
  readonly query?: string;
  readonly sort?: string;
  readonly authors?: ReadonlyArray<string>;
  readonly mentions?: ReadonlyArray<string>;
  readonly domains?: ReadonlyArray<string>;
  readonly urls?: ReadonlyArray<string>;
  readonly embeddedAtUris?: ReadonlyArray<string>;
  readonly hashtags?: ReadonlyArray<string>;
  readonly excludeAuthors?: ReadonlyArray<string>;
  readonly excludeMentions?: ReadonlyArray<string>;
  readonly excludeDomains?: ReadonlyArray<string>;
  readonly excludeUrls?: ReadonlyArray<string>;
  readonly excludeEmbeddedAtUris?: ReadonlyArray<string>;
  readonly excludeHashtags?: ReadonlyArray<string>;
  readonly since?: string;
  readonly until?: string;
  readonly allTime?: boolean;
  readonly languages?: ReadonlyArray<string>;
  readonly excludeLanguages?: ReadonlyArray<string>;
  readonly hasMedia?: boolean;
  readonly hasVideo?: boolean;
  readonly replyParentUri?: string;
  readonly threadRootUri?: string;
  readonly excludeReplies?: boolean;
  readonly repliesOnly?: boolean;
  readonly following?: boolean;
  readonly queryLanguage?: string;
};
export const SearchPostsV2ParamsSchema: v.GenericSchema<unknown, SearchPostsV2Params> = v.looseObject({
  cursor: v.optional(v.string()),
  limit: v.optional(v.number()),
  query: v.optional(v.string()),
  sort: v.optional(v.string()),
  authors: v.optional(v.array(v.string())),
  mentions: v.optional(v.array(v.string())),
  domains: v.optional(v.array(v.string())),
  urls: v.optional(v.array(v.string())),
  embeddedAtUris: v.optional(v.array(v.string())),
  hashtags: v.optional(v.array(v.string())),
  excludeAuthors: v.optional(v.array(v.string())),
  excludeMentions: v.optional(v.array(v.string())),
  excludeDomains: v.optional(v.array(v.string())),
  excludeUrls: v.optional(v.array(v.string())),
  excludeEmbeddedAtUris: v.optional(v.array(v.string())),
  excludeHashtags: v.optional(v.array(v.string())),
  since: v.optional(v.string()),
  until: v.optional(v.string()),
  allTime: v.optional(v.boolean()),
  languages: v.optional(v.array(v.string())),
  excludeLanguages: v.optional(v.array(v.string())),
  hasMedia: v.optional(v.boolean()),
  hasVideo: v.optional(v.boolean()),
  replyParentUri: v.optional(v.string()),
  threadRootUri: v.optional(v.string()),
  excludeReplies: v.optional(v.boolean()),
  repliesOnly: v.optional(v.boolean()),
  following: v.optional(v.boolean()),
  queryLanguage: v.optional(v.string()),
});

export type SearchPostsV2Response = {
  readonly data: Inline356;
};
export const SearchPostsV2ResponseSchema: v.GenericSchema<unknown, SearchPostsV2Response> = v.looseObject({
  data: v.lazy(() => Inline356Schema),
});

export type SearchStarterPacksParams = {
  readonly q: string;
  readonly limit?: number;
  readonly cursor?: string;
};
export const SearchStarterPacksParamsSchema: v.GenericSchema<unknown, SearchStarterPacksParams> = v.looseObject({
  q: v.string(),
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
});

export type SearchStarterPacksResponse = {
  readonly data: Inline416;
};
export const SearchStarterPacksResponseSchema: v.GenericSchema<unknown, SearchStarterPacksResponse> = v.looseObject({
  data: v.lazy(() => Inline416Schema),
});

export type SearchStarterPacksSkeletonParams = {
  readonly q: string;
  readonly viewer?: string;
  readonly limit?: number;
  readonly cursor?: string;
};
export const SearchStarterPacksSkeletonParamsSchema: v.GenericSchema<unknown, SearchStarterPacksSkeletonParams> = v.looseObject({
  q: v.string(),
  viewer: v.optional(v.string()),
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
});

export type SearchStarterPacksSkeletonResponse = {
  readonly data: Inline531;
};
export const SearchStarterPacksSkeletonResponseSchema: v.GenericSchema<unknown, SearchStarterPacksSkeletonResponse> = v.looseObject({
  data: v.lazy(() => Inline531Schema),
});

export type SearchStarterPacksV2Params = {
  readonly q: string;
  readonly limit?: number;
  readonly cursor?: string;
};
export const SearchStarterPacksV2ParamsSchema: v.GenericSchema<unknown, SearchStarterPacksV2Params> = v.looseObject({
  q: v.string(),
  limit: v.optional(v.number()),
  cursor: v.optional(v.string()),
});

export type SearchStarterPacksV2Response = {
  readonly data: Inline419;
};
export const SearchStarterPacksV2ResponseSchema: v.GenericSchema<unknown, SearchStarterPacksV2Response> = v.looseObject({
  data: v.lazy(() => Inline419Schema),
});

export type SendEmailParams = {
  readonly recipientDid: string;
  readonly content: string;
  readonly subject?: string;
  readonly senderDid: string;
  readonly comment?: string;
};
export const SendEmailParamsSchema: v.GenericSchema<unknown, SendEmailParams> = v.looseObject({
  recipientDid: v.string(),
  content: v.string(),
  subject: v.optional(v.string()),
  senderDid: v.string(),
  comment: v.optional(v.string()),
});

export type SendEmailResponse = {
  readonly data: Inline565;
};
export const SendEmailResponseSchema: v.GenericSchema<unknown, SendEmailResponse> = v.looseObject({
  data: v.lazy(() => Inline565Schema),
});

export type SendInteractionsParams = {
  readonly feed?: string;
  readonly interactions: ReadonlyArray<AppBskyFeedDefsInteraction>;
};
export const SendInteractionsParamsSchema: v.GenericSchema<unknown, SendInteractionsParams> = v.looseObject({
  feed: v.optional(v.string()),
  interactions: v.array(v.lazy(() => AppBskyFeedDefsInteractionSchema)),
});

export type SendInteractionsResponse = {
  readonly data: Inline359;
};
export const SendInteractionsResponseSchema: v.GenericSchema<unknown, SendInteractionsResponse> = v.looseObject({
  data: v.lazy(() => Inline359Schema),
});

export type SendNotificationParams = {
  readonly from: string;
  readonly to: string;
};
export const SendNotificationParamsSchema: v.GenericSchema<unknown, SendNotificationParams> = v.looseObject({
  from: v.string(),
  to: v.string(),
});

export type SendNotificationResponse = {
  readonly data: Inline283;
};
export const SendNotificationResponseSchema: v.GenericSchema<unknown, SendNotificationResponse> = v.looseObject({
  data: v.lazy(() => Inline283Schema),
});

export type SignPlcOperationParams = {
  readonly token?: string;
  readonly rotationKeys?: ReadonlyArray<string>;
  readonly alsoKnownAs?: ReadonlyArray<string>;
  readonly verificationMethods?: unknown;
  readonly services?: unknown;
};
export const SignPlcOperationParamsSchema: v.GenericSchema<unknown, SignPlcOperationParams> = v.looseObject({
  token: v.optional(v.string()),
  rotationKeys: v.optional(v.array(v.string())),
  alsoKnownAs: v.optional(v.array(v.string())),
  verificationMethods: v.optional(v.unknown()),
  services: v.optional(v.unknown()),
});

export type SignPlcOperationResponse = {
  readonly data: Inline594;
};
export const SignPlcOperationResponseSchema: v.GenericSchema<unknown, SignPlcOperationResponse> = v.looseObject({
  data: v.lazy(() => Inline594Schema),
});

export type StartPhoneVerificationParams = {
  readonly phone: string;
};
export const StartPhoneVerificationParamsSchema: v.GenericSchema<unknown, StartPhoneVerificationParams> = v.looseObject({
  phone: v.string(),
});

export type StartPhoneVerificationResponse = {
  readonly data: Inline286;
};
export const StartPhoneVerificationResponseSchema: v.GenericSchema<unknown, StartPhoneVerificationResponse> = v.looseObject({
  data: v.lazy(() => Inline286Schema),
});

export type SubmitPlcOperationParams = {
  readonly operation: unknown;
};
export const SubmitPlcOperationParamsSchema: v.GenericSchema<unknown, SubmitPlcOperationParams> = v.looseObject({
  operation: v.unknown(),
});

export type SubmitPlcOperationResponse = {

};
export const SubmitPlcOperationResponseSchema: v.GenericSchema<unknown, SubmitPlcOperationResponse> = v.looseObject({

});

export type UnmuteActorListParams = {
  readonly list: string;
};
export const UnmuteActorListParamsSchema: v.GenericSchema<unknown, UnmuteActorListParams> = v.looseObject({
  list: v.string(),
});

export type UnmuteActorListResponse = {

};
export const UnmuteActorListResponseSchema: v.GenericSchema<unknown, UnmuteActorListResponse> = v.looseObject({

});

export type UnmuteActorParams = {
  readonly actor: string;
};
export const UnmuteActorParamsSchema: v.GenericSchema<unknown, UnmuteActorParams> = v.looseObject({
  actor: v.string(),
});

export type UnmuteActorResponse = {

};
export const UnmuteActorResponseSchema: v.GenericSchema<unknown, UnmuteActorResponse> = v.looseObject({

});

export type UnmuteThreadParams = {
  readonly root: string;
};
export const UnmuteThreadParamsSchema: v.GenericSchema<unknown, UnmuteThreadParams> = v.looseObject({
  root: v.string(),
});

export type UnmuteThreadResponse = {

};
export const UnmuteThreadResponseSchema: v.GenericSchema<unknown, UnmuteThreadResponse> = v.looseObject({

});

export type UnregisterPushParams = {
  readonly serviceDid: string;
  readonly token: string;
  readonly platform: string;
  readonly appId: string;
};
export const UnregisterPushParamsSchema: v.GenericSchema<unknown, UnregisterPushParams> = v.looseObject({
  serviceDid: v.string(),
  token: v.string(),
  platform: v.string(),
  appId: v.string(),
});

export type UnregisterPushResponse = {

};
export const UnregisterPushResponseSchema: v.GenericSchema<unknown, UnregisterPushResponse> = v.looseObject({

});

export type UpdateAccountEmailParams = {
  readonly account: string;
  readonly email: string;
};
export const UpdateAccountEmailParamsSchema: v.GenericSchema<unknown, UpdateAccountEmailParams> = v.looseObject({
  account: v.string(),
  email: v.string(),
});

export type UpdateAccountEmailResponse = {

};
export const UpdateAccountEmailResponseSchema: v.GenericSchema<unknown, UpdateAccountEmailResponse> = v.looseObject({

});

export type UpdateAccountHandleParams = {
  readonly did: string;
  readonly handle: string;
};
export const UpdateAccountHandleParamsSchema: v.GenericSchema<unknown, UpdateAccountHandleParams> = v.looseObject({
  did: v.string(),
  handle: v.string(),
});

export type UpdateAccountHandleResponse = {

};
export const UpdateAccountHandleResponseSchema: v.GenericSchema<unknown, UpdateAccountHandleResponse> = v.looseObject({

});

export type UpdateAccountPasswordParams = {
  readonly did: string;
  readonly password: string;
};
export const UpdateAccountPasswordParamsSchema: v.GenericSchema<unknown, UpdateAccountPasswordParams> = v.looseObject({
  did: v.string(),
  password: v.string(),
});

export type UpdateAccountPasswordResponse = {

};
export const UpdateAccountPasswordResponseSchema: v.GenericSchema<unknown, UpdateAccountPasswordResponse> = v.looseObject({

});

export type UpdateAccountSigningKeyParams = {
  readonly did: string;
  readonly signingKey: string;
};
export const UpdateAccountSigningKeyParamsSchema: v.GenericSchema<unknown, UpdateAccountSigningKeyParams> = v.looseObject({
  did: v.string(),
  signingKey: v.string(),
});

export type UpdateAccountSigningKeyResponse = {

};
export const UpdateAccountSigningKeyResponseSchema: v.GenericSchema<unknown, UpdateAccountSigningKeyResponse> = v.looseObject({

});

export type UpdateDraftParams = {
  readonly draft: AppBskyDraftDefsDraftWithId;
};
export const UpdateDraftParamsSchema: v.GenericSchema<unknown, UpdateDraftParams> = v.looseObject({
  draft: v.lazy(() => AppBskyDraftDefsDraftWithIdSchema),
});

export type UpdateDraftResponse = {

};
export const UpdateDraftResponseSchema: v.GenericSchema<unknown, UpdateDraftResponse> = v.looseObject({

});

export type UpdateEmailParams = {
  readonly email: string;
  readonly emailAuthFactor?: boolean;
  readonly token?: string;
};
export const UpdateEmailParamsSchema: v.GenericSchema<unknown, UpdateEmailParams> = v.looseObject({
  email: v.string(),
  emailAuthFactor: v.optional(v.boolean()),
  token: v.optional(v.string()),
});

export type UpdateEmailResponse = {

};
export const UpdateEmailResponseSchema: v.GenericSchema<unknown, UpdateEmailResponse> = v.looseObject({

});

export type UpdateHandleParams = {
  readonly handle: string;
};
export const UpdateHandleParamsSchema: v.GenericSchema<unknown, UpdateHandleParams> = v.looseObject({
  handle: v.string(),
});

export type UpdateHandleResponse = {

};
export const UpdateHandleResponseSchema: v.GenericSchema<unknown, UpdateHandleResponse> = v.looseObject({

});

export type UpdateSeenParams = {
  readonly seenAt: string;
};
export const UpdateSeenParamsSchema: v.GenericSchema<unknown, UpdateSeenParams> = v.looseObject({
  seenAt: v.string(),
});

export type UpdateSeenResponse = {

};
export const UpdateSeenResponseSchema: v.GenericSchema<unknown, UpdateSeenResponse> = v.looseObject({

});

export type UpdateSubjectStatusParams = {
  readonly subject: ComAtprotoAdminDefsRepoRef | ComAtprotoRepoStrongRef | ComAtprotoAdminDefsRepoBlobRef;
  readonly takedown?: ComAtprotoAdminDefsStatusAttr;
  readonly deactivated?: ComAtprotoAdminDefsStatusAttr;
};
export const UpdateSubjectStatusParamsSchema: v.GenericSchema<unknown, UpdateSubjectStatusParams> = v.looseObject({
  subject: v.union([v.lazy(() => ComAtprotoAdminDefsRepoRefSchema), v.lazy(() => ComAtprotoRepoStrongRefSchema), v.lazy(() => ComAtprotoAdminDefsRepoBlobRefSchema)]),
  takedown: v.optional(v.lazy(() => ComAtprotoAdminDefsStatusAttrSchema)),
  deactivated: v.optional(v.lazy(() => ComAtprotoAdminDefsStatusAttrSchema)),
});

export type UpdateSubjectStatusResponse = {
  readonly data: Inline576;
};
export const UpdateSubjectStatusResponseSchema: v.GenericSchema<unknown, UpdateSubjectStatusResponse> = v.looseObject({
  data: v.lazy(() => Inline576Schema),
});

export type UploadBlobParams = {

};
export const UploadBlobParamsSchema: v.GenericSchema<unknown, UploadBlobParams> = v.looseObject({

});

export type UploadBlobResponse = {
  readonly data: Inline636;
};
export const UploadBlobResponseSchema: v.GenericSchema<unknown, UploadBlobResponse> = v.looseObject({
  data: v.lazy(() => Inline636Schema),
});

export type UploadVideoParams = {

};
export const UploadVideoParamsSchema: v.GenericSchema<unknown, UploadVideoParams> = v.looseObject({

});

export type UploadVideoResponse = {
  readonly data: Inline540;
};
export const UploadVideoResponseSchema: v.GenericSchema<unknown, UploadVideoResponse> = v.looseObject({
  data: v.lazy(() => Inline540Schema),
});

export type VerifyPhoneParams = {
  readonly phone: string;
  readonly code: string;
};
export const VerifyPhoneParamsSchema: v.GenericSchema<unknown, VerifyPhoneParams> = v.looseObject({
  phone: v.string(),
  code: v.string(),
});

export type VerifyPhoneResponse = {
  readonly data: Inline289;
};
export const VerifyPhoneResponseSchema: v.GenericSchema<unknown, VerifyPhoneResponse> = v.looseObject({
  data: v.lazy(() => Inline289Schema),
});
