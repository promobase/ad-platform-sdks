// This file is generated. Do not edit by hand.

export interface ActivateAccountParams {

}

export interface ActivateAccountResponse {

}

export interface AddReservedHandleParams {
  readonly handle: string;
}

export interface AddReservedHandleResponse {
  readonly data: Inline734;
}

export type AppBskyActorDefsAdultContentPref = unknown;

export interface AppBskyActorDefsBskyAppProgressGuide {
  readonly guide: string;
}

export type AppBskyActorDefsBskyAppStatePref = unknown;

export type AppBskyActorDefsContentLabelPref = unknown;

export type AppBskyActorDefsDeclaredAgePref = unknown;

export type AppBskyActorDefsFeedViewPref = unknown;

export type AppBskyActorDefsHiddenPostsPref = unknown;

export type AppBskyActorDefsInterestsPref = unknown;

export interface AppBskyActorDefsKnownFollowers {
  readonly count: number;
  readonly followers: ReadonlyArray<AppBskyActorDefsProfileViewBasic>;
}

export interface AppBskyActorDefsLabelerPrefItem {
  readonly did: string;
}

export type AppBskyActorDefsLabelersPref = unknown;

export type AppBskyActorDefsLiveEventPreferences = unknown;

export interface AppBskyActorDefsMutedWord {
  readonly id?: string;
  readonly value: string;
  readonly targets: ReadonlyArray<AppBskyActorDefsMutedWordTarget>;
  readonly actorTarget?: string;
  readonly expiresAt?: string;
}

export type AppBskyActorDefsMutedWordsPref = unknown;

export type AppBskyActorDefsMutedWordTarget = string;

export interface AppBskyActorDefsNux {
  readonly id: string;
  readonly completed: boolean;
  readonly data?: string;
  readonly expiresAt?: string;
}

export type AppBskyActorDefsPersonalDetailsPref = unknown;

export type AppBskyActorDefsPostInteractionSettingsPref = unknown;

export type AppBskyActorDefsPreferences = ReadonlyArray<AppBskyActorDefsAdultContentPref | AppBskyActorDefsContentLabelPref | AppBskyActorDefsSavedFeedsPref | AppBskyActorDefsSavedFeedsPrefV2 | AppBskyActorDefsPersonalDetailsPref | AppBskyActorDefsDeclaredAgePref | AppBskyActorDefsFeedViewPref | AppBskyActorDefsThreadViewPref | AppBskyActorDefsInterestsPref | AppBskyActorDefsMutedWordsPref | AppBskyActorDefsHiddenPostsPref | AppBskyActorDefsBskyAppStatePref | AppBskyActorDefsLabelersPref | AppBskyActorDefsPostInteractionSettingsPref | AppBskyActorDefsVerificationPrefs | AppBskyActorDefsLiveEventPreferences>;

export type AppBskyActorDefsProfileAssociated = unknown;

export interface AppBskyActorDefsProfileAssociatedActivitySubscription {
  readonly allowSubscriptions: string;
}

export interface AppBskyActorDefsProfileAssociatedChat {
  readonly allowIncoming: string;
  readonly allowGroupInvites?: string;
}

export interface AppBskyActorDefsProfileAssociatedGerm {
  readonly messageMeUrl: string;
  readonly showButtonTo: string;
}

export type AppBskyActorDefsProfileView = unknown;

export type AppBskyActorDefsProfileViewBasic = unknown;

export interface AppBskyActorDefsProfileViewDetailed {
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
}

export interface AppBskyActorDefsSavedFeed {
  readonly id: string;
  readonly type: string;
  readonly value: string;
  readonly pinned: boolean;
}

export type AppBskyActorDefsSavedFeedsPref = unknown;

export type AppBskyActorDefsSavedFeedsPrefV2 = unknown;

export type AppBskyActorDefsStatusView = unknown;

export type AppBskyActorDefsThreadViewPref = unknown;

export type AppBskyActorDefsVerificationPrefs = unknown;

export type AppBskyActorDefsVerificationState = unknown;

export interface AppBskyActorDefsVerificationView {
  readonly issuer: string;
  readonly issuerDisplayName?: string;
  readonly issuerHandle?: string;
  readonly uri: string;
  readonly isValid: boolean;
  readonly createdAt: string;
}

export type AppBskyActorDefsViewerState = unknown;

export interface AppBskyActorProfile {
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
}

export interface AppBskyActorStatus {
  readonly status: string;
  readonly embed?: AppBskyEmbedExternal;
  readonly durationMinutes?: number;
  readonly createdAt: string;
}

export type AppBskyAgeassuranceDefsAccess = string;

export interface AppBskyAgeassuranceDefsConfig {
  readonly regions: ReadonlyArray<AppBskyAgeassuranceDefsConfigRegion>;
}

export type AppBskyAgeassuranceDefsConfigRegion = unknown;

export interface AppBskyAgeassuranceDefsConfigRegionRuleDefault {
  readonly access: AppBskyAgeassuranceDefsAccess;
}

export interface AppBskyAgeassuranceDefsConfigRegionRuleIfAccountNewerThan {
  readonly date: string;
  readonly access: AppBskyAgeassuranceDefsAccess;
}

export interface AppBskyAgeassuranceDefsConfigRegionRuleIfAccountOlderThan {
  readonly date: string;
  readonly access: AppBskyAgeassuranceDefsAccess;
}

export interface AppBskyAgeassuranceDefsConfigRegionRuleIfAssuredOverAge {
  readonly age: number;
  readonly access: AppBskyAgeassuranceDefsAccess;
}

export interface AppBskyAgeassuranceDefsConfigRegionRuleIfAssuredUnderAge {
  readonly age: number;
  readonly access: AppBskyAgeassuranceDefsAccess;
}

export interface AppBskyAgeassuranceDefsConfigRegionRuleIfDeclaredOverAge {
  readonly age: number;
  readonly access: AppBskyAgeassuranceDefsAccess;
}

export interface AppBskyAgeassuranceDefsConfigRegionRuleIfDeclaredUnderAge {
  readonly age: number;
  readonly access: AppBskyAgeassuranceDefsAccess;
}

export interface AppBskyAgeassuranceDefsEvent {
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
}

export interface AppBskyAgeassuranceDefsState {
  readonly lastInitiatedAt?: string;
  readonly status: AppBskyAgeassuranceDefsStatus;
  readonly access: AppBskyAgeassuranceDefsAccess;
}

export interface AppBskyAgeassuranceDefsStateMetadata {
  readonly accountCreatedAt?: string;
}

export type AppBskyAgeassuranceDefsStatus = string;

export interface AppBskyBookmarkDefsBookmark {
  readonly subject: ComAtprotoRepoStrongRef;
}

export interface AppBskyBookmarkDefsBookmarkView {
  readonly subject: ComAtprotoRepoStrongRef;
  readonly createdAt?: string;
  readonly item: AppBskyFeedDefsBlockedPost | AppBskyFeedDefsNotFoundPost | AppBskyFeedDefsPostView;
}

export interface AppBskyContactDefsMatchAndContactIndex {
  readonly match: AppBskyActorDefsProfileView;
  readonly contactIndex: number;
}

export interface AppBskyContactDefsNotification {
  readonly from: string;
  readonly to: string;
}

export interface AppBskyContactDefsSyncStatus {
  readonly syncedAt: string;
  readonly matchesCount: number;
}

export type AppBskyDraftDefsDraft = unknown;

export interface AppBskyDraftDefsDraftEmbedCaption {
  readonly lang: string;
  readonly content: string;
}

export type AppBskyDraftDefsDraftEmbedExternal = unknown;

export type AppBskyDraftDefsDraftEmbedGallery = unknown;

export type AppBskyDraftDefsDraftEmbedGalleryItems = ReadonlyArray<AppBskyDraftDefsDraftEmbedImage>;

export type AppBskyDraftDefsDraftEmbedImage = unknown;

export interface AppBskyDraftDefsDraftEmbedLocalRef {
  readonly path: string;
}

export type AppBskyDraftDefsDraftEmbedRecord = unknown;

export type AppBskyDraftDefsDraftEmbedVideo = unknown;

export interface AppBskyDraftDefsDraftPost {
  readonly text: string;
  readonly labels?: ComAtprotoLabelDefsSelfLabels;
  readonly embedImages?: ReadonlyArray<AppBskyDraftDefsDraftEmbedImage>;
  readonly embedGallery?: AppBskyDraftDefsDraftEmbedGallery;
  readonly embedVideos?: ReadonlyArray<AppBskyDraftDefsDraftEmbedVideo>;
  readonly embedExternals?: ReadonlyArray<AppBskyDraftDefsDraftEmbedExternal>;
  readonly embedRecords?: ReadonlyArray<AppBskyDraftDefsDraftEmbedRecord>;
}

export interface AppBskyDraftDefsDraftView {
  readonly id: string;
  readonly draft: AppBskyDraftDefsDraft;
  readonly createdAt: string;
  readonly updatedAt: string;
}

export interface AppBskyDraftDefsDraftWithId {
  readonly id: string;
  readonly draft: AppBskyDraftDefsDraft;
}

export interface AppBskyEmbedDefsAspectRatio {
  readonly width: number;
  readonly height: number;
}

export type AppBskyEmbedExternal = unknown;

export type AppBskyEmbedExternalColorRGB = unknown;

export interface AppBskyEmbedExternalExternal {
  readonly uri: string;
  readonly title: string;
  readonly description: string;
  readonly thumb?: unknown;
  readonly associatedRefs?: ReadonlyArray<ComAtprotoRepoStrongRef>;
}

export type AppBskyEmbedExternalView = unknown;

export interface AppBskyEmbedExternalViewExternal {
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
}

export type AppBskyEmbedExternalViewExternalSource = unknown;

export interface AppBskyEmbedExternalViewExternalSourceTheme {
  readonly backgroundRGB?: AppBskyEmbedExternalColorRGB;
  readonly foregroundRGB?: AppBskyEmbedExternalColorRGB;
  readonly accentRGB?: AppBskyEmbedExternalColorRGB;
  readonly accentForegroundRGB?: AppBskyEmbedExternalColorRGB;
}

export interface AppBskyEmbedGallery {
  readonly items: ReadonlyArray<AppBskyEmbedGalleryImage>;
}

export interface AppBskyEmbedGalleryImage {
  readonly image: unknown;
  readonly alt: string;
  readonly aspectRatio: AppBskyEmbedDefsAspectRatio;
}

export interface AppBskyEmbedGalleryView {
  readonly items: ReadonlyArray<AppBskyEmbedGalleryViewImage>;
}

export type AppBskyEmbedGalleryViewImage = unknown;

export interface AppBskyEmbedImages {
  readonly images: ReadonlyArray<AppBskyEmbedImagesImage>;
}

export interface AppBskyEmbedImagesImage {
  readonly image: unknown;
  readonly alt: string;
  readonly aspectRatio?: AppBskyEmbedDefsAspectRatio;
}

export interface AppBskyEmbedImagesView {
  readonly images: ReadonlyArray<AppBskyEmbedImagesViewImage>;
}

export type AppBskyEmbedImagesViewImage = unknown;

export interface AppBskyEmbedRecord {
  readonly record: ComAtprotoRepoStrongRef;
}

export interface AppBskyEmbedRecordView {
  readonly record: AppBskyEmbedRecordViewRecord | AppBskyEmbedRecordViewNotFound | AppBskyEmbedRecordViewBlocked | AppBskyEmbedRecordViewDetached | AppBskyFeedDefsGeneratorView | AppBskyGraphDefsListView | AppBskyLabelerDefsLabelerView | AppBskyGraphDefsStarterPackViewBasic;
}

export type AppBskyEmbedRecordViewBlocked = unknown;

export type AppBskyEmbedRecordViewDetached = unknown;

export type AppBskyEmbedRecordViewNotFound = unknown;

export type AppBskyEmbedRecordViewRecord = unknown;

export interface AppBskyEmbedRecordWithMedia {
  readonly record: AppBskyEmbedRecord;
  readonly media: AppBskyEmbedImages | AppBskyEmbedVideo | AppBskyEmbedGallery | AppBskyEmbedExternal;
}

export interface AppBskyEmbedRecordWithMediaView {
  readonly record: AppBskyEmbedRecordView;
  readonly media: AppBskyEmbedImagesView | AppBskyEmbedVideoView | AppBskyEmbedGalleryView | AppBskyEmbedExternalView;
}

export type AppBskyEmbedVideo = unknown;

export interface AppBskyEmbedVideoCaption {
  readonly lang: string;
  readonly file: unknown;
}

export type AppBskyEmbedVideoView = unknown;

export type AppBskyFeedDefsBlockedAuthor = unknown;

export type AppBskyFeedDefsBlockedPost = unknown;

export interface AppBskyFeedDefsFeedViewPost {
  readonly post: AppBskyFeedDefsPostView;
  readonly reply?: AppBskyFeedDefsReplyRef;
  readonly reason?: AppBskyFeedDefsReasonRepost | AppBskyFeedDefsReasonPin;
  readonly feedContext?: string;
  readonly reqId?: string;
}

export type AppBskyFeedDefsGeneratorView = unknown;

export interface AppBskyFeedDefsGeneratorViewerState {
  readonly like?: string;
}

export interface AppBskyFeedDefsInteraction {
  readonly item?: string;
  readonly event?: string;
  readonly feedContext?: string;
  readonly reqId?: string;
}

export type AppBskyFeedDefsNotFoundPost = unknown;

export type AppBskyFeedDefsPostView = unknown;

export type AppBskyFeedDefsReasonPin = unknown;

export type AppBskyFeedDefsReasonRepost = unknown;

export type AppBskyFeedDefsReplyRef = unknown;

export interface AppBskyFeedDefsSkeletonFeedPost {
  readonly post: string;
  readonly reason?: AppBskyFeedDefsSkeletonReasonRepost | AppBskyFeedDefsSkeletonReasonPin;
  readonly feedContext?: string;
}

export type AppBskyFeedDefsSkeletonReasonPin = unknown;

export type AppBskyFeedDefsSkeletonReasonRepost = unknown;

export interface AppBskyFeedDefsThreadContext {
  readonly rootAuthorLike?: string;
}

export interface AppBskyFeedDefsThreadgateView {
  readonly uri?: string;
  readonly cid?: string;
  readonly record?: unknown;
  readonly lists?: ReadonlyArray<AppBskyGraphDefsListViewBasic>;
}

export interface AppBskyFeedDefsThreadViewPost {
  readonly post: AppBskyFeedDefsPostView;
  readonly parent?: AppBskyFeedDefsThreadViewPost | AppBskyFeedDefsNotFoundPost | AppBskyFeedDefsBlockedPost;
  readonly replies?: ReadonlyArray<AppBskyFeedDefsThreadViewPost | AppBskyFeedDefsNotFoundPost | AppBskyFeedDefsBlockedPost>;
  readonly threadContext?: AppBskyFeedDefsThreadContext;
}

export interface AppBskyFeedDefsViewerState {
  readonly repost?: string;
  readonly like?: string;
  readonly bookmarked?: boolean;
  readonly threadMuted?: boolean;
  readonly replyDisabled?: boolean;
  readonly embeddingDisabled?: boolean;
  readonly pinned?: boolean;
}

export interface AppBskyFeedDescribeFeedGeneratorFeed {
  readonly uri: string;
}

export interface AppBskyFeedDescribeFeedGeneratorLinks {
  readonly privacyPolicy?: string;
  readonly termsOfService?: string;
}

export interface AppBskyFeedGenerator {
  readonly did: string;
  readonly displayName: string;
  readonly description?: string;
  readonly descriptionFacets?: ReadonlyArray<AppBskyRichtextFacet>;
  readonly avatar?: unknown;
  readonly acceptsInteractions?: boolean;
  readonly labels?: ComAtprotoLabelDefsSelfLabels;
  readonly contentMode?: string;
  readonly createdAt: string;
}

export interface AppBskyFeedGetLikesLike {
  readonly indexedAt: string;
  readonly createdAt: string;
  readonly actor: AppBskyActorDefsProfileView;
}

export interface AppBskyFeedLike {
  readonly subject: ComAtprotoRepoStrongRef;
  readonly createdAt: string;
  readonly via?: ComAtprotoRepoStrongRef;
}

export interface AppBskyFeedPost {
  readonly text: string;
  readonly entities?: ReadonlyArray<AppBskyFeedPostEntity>;
  readonly facets?: ReadonlyArray<AppBskyRichtextFacet>;
  readonly reply?: AppBskyFeedPostReplyRef;
  readonly embed?: AppBskyEmbedImages | AppBskyEmbedVideo | AppBskyEmbedGallery | AppBskyEmbedExternal | AppBskyEmbedRecord | AppBskyEmbedRecordWithMedia;
  readonly langs?: ReadonlyArray<string>;
  readonly labels?: ComAtprotoLabelDefsSelfLabels;
  readonly tags?: ReadonlyArray<string>;
  readonly createdAt: string;
}

export interface AppBskyFeedPostEntity {
  readonly index: AppBskyFeedPostTextSlice;
  readonly type: string;
  readonly value: string;
}

export interface AppBskyFeedPostgate {
  readonly createdAt: string;
  readonly post: string;
  readonly detachedEmbeddingUris?: ReadonlyArray<string>;
  readonly embeddingRules?: ReadonlyArray<AppBskyFeedPostgateDisableRule>;
}

export interface AppBskyFeedPostgateDisableRule {

}

export interface AppBskyFeedPostReplyRef {
  readonly root: ComAtprotoRepoStrongRef;
  readonly parent: ComAtprotoRepoStrongRef;
}

export type AppBskyFeedPostTextSlice = unknown;

export interface AppBskyFeedRepost {
  readonly subject: ComAtprotoRepoStrongRef;
  readonly createdAt: string;
  readonly via?: ComAtprotoRepoStrongRef;
}

export interface AppBskyFeedThreadgate {
  readonly post: string;
  readonly allow?: ReadonlyArray<AppBskyFeedThreadgateMentionRule | AppBskyFeedThreadgateFollowerRule | AppBskyFeedThreadgateFollowingRule | AppBskyFeedThreadgateListRule>;
  readonly createdAt: string;
  readonly hiddenReplies?: ReadonlyArray<string>;
}

export interface AppBskyFeedThreadgateFollowerRule {

}

export interface AppBskyFeedThreadgateFollowingRule {

}

export interface AppBskyFeedThreadgateListRule {
  readonly list: string;
}

export interface AppBskyFeedThreadgateMentionRule {

}

export interface AppBskyGraphBlock {
  readonly subject: string;
  readonly createdAt: string;
}

export type AppBskyGraphDefsListItemView = unknown;

export type AppBskyGraphDefsListPurpose = unknown;

export type AppBskyGraphDefsListView = unknown;

export interface AppBskyGraphDefsListViewBasic {
  readonly uri: string;
  readonly cid: string;
  readonly name: string;
  readonly purpose: AppBskyGraphDefsListPurpose;
  readonly avatar?: string;
  readonly listItemCount?: number;
  readonly labels?: ReadonlyArray<ComAtprotoLabelDefsLabel>;
  readonly viewer?: AppBskyGraphDefsListViewerState;
  readonly indexedAt?: string;
}

export type AppBskyGraphDefsListViewerState = unknown;

export interface AppBskyGraphDefsNotFoundActor {
  readonly actor: string;
  readonly notFound: boolean;
}

export interface AppBskyGraphDefsRelationship {
  readonly did: string;
  readonly following?: string;
  readonly followedBy?: string;
  readonly blocking?: string;
  readonly blockedBy?: string;
  readonly blockingByList?: string;
  readonly blockedByList?: string;
}

export type AppBskyGraphDefsStarterPackView = unknown;

export type AppBskyGraphDefsStarterPackViewBasic = unknown;

export interface AppBskyGraphFollow {
  readonly subject: string;
  readonly createdAt: string;
  readonly via?: ComAtprotoRepoStrongRef;
}

export interface AppBskyGraphGetListsWithMembershipListWithMembership {
  readonly list: AppBskyGraphDefsListView;
  readonly listItem?: AppBskyGraphDefsListItemView;
}

export interface AppBskyGraphGetStarterPacksWithMembershipStarterPackWithMembership {
  readonly starterPack: AppBskyGraphDefsStarterPackView;
  readonly listItem?: AppBskyGraphDefsListItemView;
}

export interface AppBskyGraphList {
  readonly purpose: AppBskyGraphDefsListPurpose;
  readonly name: string;
  readonly description?: string;
  readonly descriptionFacets?: ReadonlyArray<AppBskyRichtextFacet>;
  readonly avatar?: unknown;
  readonly labels?: ComAtprotoLabelDefsSelfLabels;
  readonly createdAt: string;
}

export interface AppBskyGraphListblock {
  readonly subject: string;
  readonly createdAt: string;
}

export interface AppBskyGraphListitem {
  readonly subject: string;
  readonly list: string;
  readonly createdAt: string;
}

export interface AppBskyGraphStarterpack {
  readonly name: string;
  readonly description?: string;
  readonly descriptionFacets?: ReadonlyArray<AppBskyRichtextFacet>;
  readonly list: string;
  readonly feeds?: ReadonlyArray<AppBskyGraphStarterpackFeedItem>;
  readonly createdAt: string;
}

export interface AppBskyGraphStarterpackFeedItem {
  readonly uri: string;
}

export interface AppBskyGraphVerification {
  readonly subject: string;
  readonly handle: string;
  readonly displayName: string;
  readonly createdAt: string;
}

export type AppBskyLabelerDefsLabelerPolicies = unknown;

export type AppBskyLabelerDefsLabelerView = unknown;

export interface AppBskyLabelerDefsLabelerViewDetailed {
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
}

export type AppBskyLabelerDefsLabelerViewerState = unknown;

export interface AppBskyLabelerService {
  readonly policies: AppBskyLabelerDefsLabelerPolicies;
  readonly labels?: ComAtprotoLabelDefsSelfLabels;
  readonly createdAt: string;
  readonly reasonTypes?: ReadonlyArray<ComAtprotoModerationDefsReasonType>;
  readonly subjectTypes?: ReadonlyArray<ComAtprotoModerationDefsSubjectType>;
  readonly subjectCollections?: ReadonlyArray<string>;
}

export interface AppBskyNotificationDeclaration {
  readonly allowSubscriptions: string;
}

export interface AppBskyNotificationDefsActivitySubscription {
  readonly post: boolean;
  readonly reply: boolean;
}

export interface AppBskyNotificationDefsChatPreference {
  readonly include: string;
  readonly push: boolean;
}

export interface AppBskyNotificationDefsFilterablePreference {
  readonly include: string;
  readonly list: boolean;
  readonly push: boolean;
}

export interface AppBskyNotificationDefsPreference {
  readonly list: boolean;
  readonly push: boolean;
}

export interface AppBskyNotificationDefsPreferences {
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
}

export interface AppBskyNotificationDefsRecordDeleted {

}

export interface AppBskyNotificationDefsSubjectActivitySubscription {
  readonly subject: string;
  readonly activitySubscription: AppBskyNotificationDefsActivitySubscription;
}

export interface AppBskyNotificationListNotificationsNotification {
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
}

export type AppBskyRichtextFacet = unknown;

export interface AppBskyRichtextFacetByteSlice {
  readonly byteStart: number;
  readonly byteEnd: number;
}

export interface AppBskyRichtextFacetLink {
  readonly uri: string;
}

export interface AppBskyRichtextFacetMention {
  readonly did: string;
}

export interface AppBskyRichtextFacetTag {
  readonly tag: string;
}

export interface AppBskyUnspeccedDefsAgeAssuranceEvent {
  readonly createdAt: string;
  readonly status: string;
  readonly attemptId: string;
  readonly email?: string;
  readonly initIp?: string;
  readonly initUa?: string;
  readonly completeIp?: string;
  readonly completeUa?: string;
}

export interface AppBskyUnspeccedDefsAgeAssuranceState {
  readonly lastInitiatedAt?: string;
  readonly status: string;
}

export interface AppBskyUnspeccedDefsSkeletonSearchActor {
  readonly did: string;
}

export interface AppBskyUnspeccedDefsSkeletonSearchPost {
  readonly uri: string;
}

export interface AppBskyUnspeccedDefsSkeletonSearchStarterPack {
  readonly uri: string;
}

export interface AppBskyUnspeccedDefsSkeletonTrend {
  readonly topic: string;
  readonly displayName: string;
  readonly description?: string;
  readonly link: string;
  readonly startedAt: string;
  readonly postCount: number;
  readonly status?: string;
  readonly category?: string;
  readonly dids: ReadonlyArray<string>;
}

export interface AppBskyUnspeccedDefsThreadItemBlocked {
  readonly author: AppBskyFeedDefsBlockedAuthor;
}

export interface AppBskyUnspeccedDefsThreadItemNotFound {

}

export interface AppBskyUnspeccedDefsThreadItemNoUnauthenticated {

}

export interface AppBskyUnspeccedDefsThreadItemPost {
  readonly post: AppBskyFeedDefsPostView;
  readonly moreParents: boolean;
  readonly moreReplies: number;
  readonly opThread: boolean;
  readonly opThreadPostIndex?: number;
  readonly opThreadPostCount?: number;
  readonly hiddenByThreadgate: boolean;
  readonly mutedByViewer: boolean;
}

export interface AppBskyUnspeccedDefsTrendingTopic {
  readonly topic: string;
  readonly displayName?: string;
  readonly description?: string;
  readonly link: string;
}

export interface AppBskyUnspeccedDefsTrendView {
  readonly topic: string;
  readonly displayName: string;
  readonly description?: string;
  readonly link: string;
  readonly startedAt: string;
  readonly postCount: number;
  readonly status?: string;
  readonly category?: string;
  readonly actors: ReadonlyArray<AppBskyActorDefsProfileViewBasic>;
}

export interface AppBskyUnspeccedGetConfigLiveNowConfig {
  readonly did: string;
  readonly domains: ReadonlyArray<string>;
}

export interface AppBskyUnspeccedGetPostThreadOtherV2ThreadItem {
  readonly uri: string;
  readonly depth: number;
  readonly value: AppBskyUnspeccedDefsThreadItemPost;
}

export interface AppBskyUnspeccedGetPostThreadV2ThreadItem {
  readonly uri: string;
  readonly depth: number;
  readonly value: AppBskyUnspeccedDefsThreadItemPost | AppBskyUnspeccedDefsThreadItemNoUnauthenticated | AppBskyUnspeccedDefsThreadItemNotFound | AppBskyUnspeccedDefsThreadItemBlocked;
}

export interface AppBskyUnspeccedGetTaggedSuggestionsSuggestion {
  readonly tag: string;
  readonly subjectType: string;
  readonly subject: string;
}

export interface AppBskyVideoDefsJobStatus {
  readonly jobId: string;
  readonly did: string;
  readonly state: string;
  readonly progress?: number;
  readonly blob?: unknown;
  readonly error?: string;
  readonly failureCode?: string;
  readonly message?: string;
}

export interface ApplyWritesParams {
  readonly repo: string;
  readonly validate?: boolean;
  readonly writes: ReadonlyArray<ComAtprotoRepoApplyWritesCreate | ComAtprotoRepoApplyWritesUpdate | ComAtprotoRepoApplyWritesDelete>;
  readonly swapCommit?: string;
}

export interface ApplyWritesResponse {
  readonly data: Inline610;
}

export interface BeginParams {
  readonly email: string;
  readonly language: string;
  readonly countryCode: string;
  readonly regionCode?: string;
}

export interface BeginResponse {
  readonly data: AppBskyAgeassuranceDefsState;
}

export interface CheckAccountStatusParams {

}

export interface CheckAccountStatusResponse {
  readonly data: Inline641;
}

export interface CheckHandleAvailabilityParams {
  readonly handle: string;
  readonly email?: string;
  readonly birthDate?: string;
}

export interface CheckHandleAvailabilityResponse {
  readonly data: Inline737;
}

export interface CheckSignupQueueParams {

}

export interface CheckSignupQueueResponse {
  readonly data: Inline740;
}

export interface ComAtprotoAdminDefsAccountView {
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
}

export interface ComAtprotoAdminDefsRepoBlobRef {
  readonly did: string;
  readonly cid: string;
  readonly recordUri?: string;
}

export interface ComAtprotoAdminDefsRepoRef {
  readonly did: string;
}

export interface ComAtprotoAdminDefsStatusAttr {
  readonly applied: boolean;
  readonly ref?: string;
}

export type ComAtprotoAdminDefsThreatSignature = unknown;

export interface ComAtprotoIdentityDefsIdentityInfo {
  readonly did: string;
  readonly handle: string;
  readonly didDoc: unknown;
}

export type ComAtprotoLabelDefsLabel = unknown;

export type ComAtprotoLabelDefsLabelValue = string;

export interface ComAtprotoLabelDefsLabelValueDefinition {
  readonly identifier: string;
  readonly severity: string;
  readonly blurs: string;
  readonly defaultSetting?: string;
  readonly adultOnly?: boolean;
  readonly locales: ReadonlyArray<ComAtprotoLabelDefsLabelValueDefinitionStrings>;
}

export type ComAtprotoLabelDefsLabelValueDefinitionStrings = unknown;

export interface ComAtprotoLabelDefsSelfLabel {
  readonly val: string;
}

export type ComAtprotoLabelDefsSelfLabels = unknown;

export interface ComAtprotoLabelSubscribeLabelsInfo {
  readonly name: string;
  readonly message?: string;
}

export interface ComAtprotoLabelSubscribeLabelsLabels {
  readonly seq: number;
  readonly labels: ReadonlyArray<ComAtprotoLabelDefsLabel>;
}

export interface ComAtprotoLexiconSchema {
  readonly lexicon: number;
}

export interface ComAtprotoModerationCreateReportModTool {
  readonly name: string;
  readonly meta?: unknown;
}

export type ComAtprotoModerationDefsReasonType = unknown;

export type ComAtprotoModerationDefsSubjectType = unknown;

export interface ComAtprotoRepoApplyWritesCreate {
  readonly collection: string;
  readonly rkey?: string;
  readonly value: unknown;
}

export interface ComAtprotoRepoApplyWritesCreateResult {
  readonly uri: string;
  readonly cid: string;
  readonly validationStatus?: string;
}

export interface ComAtprotoRepoApplyWritesDelete {
  readonly collection: string;
  readonly rkey: string;
}

export interface ComAtprotoRepoApplyWritesDeleteResult {

}

export interface ComAtprotoRepoApplyWritesUpdate {
  readonly collection: string;
  readonly rkey: string;
  readonly value: unknown;
}

export interface ComAtprotoRepoApplyWritesUpdateResult {
  readonly uri: string;
  readonly cid: string;
  readonly validationStatus?: string;
}

export interface ComAtprotoRepoDefsCommitMeta {
  readonly cid: string;
  readonly rev: string;
}

export interface ComAtprotoRepoDefsStrongRef {
  readonly uri: string;
  readonly cid: string;
}

export interface ComAtprotoRepoListMissingBlobsRecordBlob {
  readonly cid: string;
  readonly recordUri: string;
}

export interface ComAtprotoRepoListRecordsRecord {
  readonly uri: string;
  readonly cid: string;
  readonly value: unknown;
}

export type ComAtprotoRepoStrongRef = unknown;

export interface ComAtprotoServerCreateAppPasswordAppPassword {
  readonly name: string;
  readonly password: string;
  readonly createdAt: string;
  readonly privileged?: boolean;
}

export interface ComAtprotoServerCreateInviteCodesAccountCodes {
  readonly account: string;
  readonly codes: ReadonlyArray<string>;
}

export type ComAtprotoServerDefsInviteCode = unknown;

export interface ComAtprotoServerDefsInviteCodeUse {
  readonly usedBy: string;
  readonly usedAt: string;
}

export interface ComAtprotoServerDescribeServerContact {
  readonly email?: string;
}

export interface ComAtprotoServerDescribeServerLinks {
  readonly privacyPolicy?: string;
  readonly termsOfService?: string;
}

export interface ComAtprotoServerListAppPasswordsAppPassword {
  readonly name: string;
  readonly createdAt: string;
  readonly privileged?: boolean;
}

export type ComAtprotoSyncDefsHostStatus = string;

export interface ComAtprotoSyncListHostsHost {
  readonly hostname: string;
  readonly seq?: number;
  readonly accountCount?: number;
  readonly status?: ComAtprotoSyncDefsHostStatus;
}

export interface ComAtprotoSyncListReposByCollectionRepo {
  readonly did: string;
}

export interface ComAtprotoSyncListReposRepo {
  readonly did: string;
  readonly head: string;
  readonly rev: string;
  readonly active?: boolean;
  readonly status?: string;
}

export interface ComAtprotoSyncSubscribeReposAccount {
  readonly seq: number;
  readonly did: string;
  readonly time: string;
  readonly active: boolean;
  readonly status?: string;
}

export interface ComAtprotoSyncSubscribeReposCommit {
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
}

export interface ComAtprotoSyncSubscribeReposIdentity {
  readonly seq: number;
  readonly did: string;
  readonly time: string;
  readonly handle?: string;
}

export interface ComAtprotoSyncSubscribeReposInfo {
  readonly name: string;
  readonly message?: string;
}

export type ComAtprotoSyncSubscribeReposRepoOp = unknown;

export interface ComAtprotoSyncSubscribeReposSync {
  readonly seq: number;
  readonly did: string;
  readonly blocks: string;
  readonly rev: string;
  readonly time: string;
}

export interface ComAtprotoTempCheckHandleAvailabilityResultAvailable {

}

export interface ComAtprotoTempCheckHandleAvailabilityResultUnavailable {
  readonly suggestions: ReadonlyArray<ComAtprotoTempCheckHandleAvailabilitySuggestion>;
}

export type ComAtprotoTempCheckHandleAvailabilitySuggestion = unknown;

export interface ConfirmEmailParams {
  readonly email: string;
  readonly token: string;
}

export interface ConfirmEmailResponse {

}

export interface CreateAccountParams {
  readonly email?: string;
  readonly handle: string;
  readonly did?: string;
  readonly inviteCode?: string;
  readonly verificationCode?: string;
  readonly verificationPhone?: string;
  readonly password?: string;
  readonly recoveryKey?: string;
  readonly plcOp?: unknown;
}

export interface CreateAccountResponse {
  readonly data: Inline646;
}

export interface CreateAppPasswordParams {
  readonly name: string;
  readonly privileged?: boolean;
}

export interface CreateAppPasswordResponse {
  readonly data: ComAtprotoServerCreateAppPasswordAppPassword;
}

export interface CreateBookmarkParams {
  readonly uri: string;
  readonly cid: string;
}

export interface CreateBookmarkResponse {

}

export interface CreateDraftParams {
  readonly draft: AppBskyDraftDefsDraft;
}

export interface CreateDraftResponse {
  readonly data: Inline292;
}

export interface CreateInviteCodeParams {
  readonly useCount: number;
  readonly forAccount?: string;
}

export interface CreateInviteCodeResponse {
  readonly data: Inline651;
}

export interface CreateInviteCodesParams {
  readonly codeCount: number;
  readonly useCount: number;
  readonly forAccounts?: ReadonlyArray<string>;
}

export interface CreateInviteCodesResponse {
  readonly data: Inline654;
}

export interface CreateRecordParams {
  readonly repo: string;
  readonly collection: string;
  readonly rkey?: string;
  readonly validate?: boolean;
  readonly record: unknown;
  readonly swapCommit?: string;
}

export interface CreateRecordResponse {
  readonly data: Inline613;
}

export interface CreateReportParams {
  readonly reasonType: ComAtprotoModerationDefsReasonType;
  readonly reason?: string;
  readonly subject: ComAtprotoAdminDefsRepoRef | ComAtprotoRepoStrongRef;
  readonly modTool?: ComAtprotoModerationCreateReportModTool;
}

export interface CreateReportResponse {
  readonly data: Inline607;
}

export interface CreateSessionParams {
  readonly identifier: string;
  readonly password: string;
  readonly authFactorToken?: string;
  readonly allowTakendown?: boolean;
}

export interface CreateSessionResponse {
  readonly data: Inline657;
}

export interface DeactivateAccountParams {
  readonly deleteAfter?: string;
}

export interface DeactivateAccountResponse {

}

export interface DeleteAccountParams {
  readonly did: string;
}

export interface DeleteAccountResponse {

}

export interface DeleteBookmarkParams {
  readonly uri: string;
}

export interface DeleteBookmarkResponse {

}

export interface DeleteDraftParams {
  readonly id: string;
}

export interface DeleteDraftResponse {

}

export interface DeleteRecordParams {
  readonly repo: string;
  readonly collection: string;
  readonly rkey: string;
  readonly swapRecord?: string;
  readonly swapCommit?: string;
}

export interface DeleteRecordResponse {
  readonly data: Inline616;
}

export interface DeleteSessionParams {

}

export interface DeleteSessionResponse {

}

export interface DereferenceScopeParams {
  readonly scope: string;
}

export interface DereferenceScopeResponse {
  readonly data: Inline743;
}

export interface DescribeFeedGeneratorParams {

}

export interface DescribeFeedGeneratorResponse {
  readonly data: Inline305;
}

export interface DescribeRepoParams {
  readonly repo: string;
}

export interface DescribeRepoResponse {
  readonly data: Inline619;
}

export interface DescribeServerParams {

}

export interface DescribeServerResponse {
  readonly data: Inline664;
}

export interface DisableAccountInvitesParams {
  readonly account: string;
  readonly note?: string;
}

export interface DisableAccountInvitesResponse {

}

export interface DisableInviteCodesParams {
  readonly codes?: ReadonlyArray<string>;
  readonly accounts?: ReadonlyArray<string>;
}

export interface DisableInviteCodesResponse {

}

export interface DismissMatchParams {
  readonly subject: string;
}

export interface DismissMatchResponse {
  readonly data: Inline268;
}

export interface EnableAccountInvitesParams {
  readonly account: string;
  readonly note?: string;
}

export interface EnableAccountInvitesResponse {

}

export interface FetchLabelsParams {
  readonly since?: number;
  readonly limit?: number;
}

export interface FetchLabelsResponse {
  readonly data: Inline746;
}

export interface GetAccountInfoParams {
  readonly did: string;
}

export interface GetAccountInfoResponse {
  readonly data: ComAtprotoAdminDefsAccountView;
}

export interface GetAccountInfosParams {
  readonly dids: ReadonlyArray<string>;
}

export interface GetAccountInfosResponse {
  readonly data: Inline553;
}

export interface GetAccountInviteCodesParams {
  readonly includeUsed?: boolean;
  readonly createAvailable?: boolean;
}

export interface GetAccountInviteCodesResponse {
  readonly data: Inline667;
}

export interface GetActorFeedsParams {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
}

export interface GetActorFeedsResponse {
  readonly data: Inline308;
}

export interface GetActorLikesParams {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
}

export interface GetActorLikesResponse {
  readonly data: Inline311;
}

export interface GetActorStarterPacksParams {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
}

export interface GetActorStarterPacksResponse {
  readonly data: Inline362;
}

export interface GetAgeAssuranceStateParams {

}

export interface GetAgeAssuranceStateResponse {
  readonly data: AppBskyUnspeccedDefsAgeAssuranceState;
}

export interface GetAuthorFeedParams {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
  readonly filter?: string;
  readonly includePins?: boolean;
}

export interface GetAuthorFeedResponse {
  readonly data: Inline314;
}

export interface GetBlobParams {
  readonly did: string;
  readonly cid: string;
}

export interface GetBlobResponse {

}

export interface GetBlocksParams {
  readonly limit?: number;
  readonly cursor?: string;
}

export interface GetBlocksResponse {
  readonly data: Inline365;
}

export interface GetBookmarksParams {
  readonly limit?: number;
  readonly cursor?: string;
}

export interface GetBookmarksResponse {
  readonly data: Inline265;
}

export interface GetCheckoutParams {
  readonly did: string;
}

export interface GetCheckoutResponse {

}

export interface GetConfigParams {

}

export interface GetConfigResponse {
  readonly data: AppBskyAgeassuranceDefsConfig;
}

export interface GetDraftsParams {
  readonly limit?: number;
  readonly cursor?: string;
}

export interface GetDraftsResponse {
  readonly data: Inline297;
}

export interface GetEmbedExternalViewParams {
  readonly url: string;
  readonly uris: ReadonlyArray<string>;
}

export interface GetEmbedExternalViewResponse {
  readonly data: Inline302;
}

export interface GetFeedGeneratorParams {
  readonly feed: string;
}

export interface GetFeedGeneratorResponse {
  readonly data: Inline320;
}

export interface GetFeedGeneratorsParams {
  readonly feeds: ReadonlyArray<string>;
}

export interface GetFeedGeneratorsResponse {
  readonly data: Inline323;
}

export interface GetFeedParams {
  readonly feed: string;
  readonly limit?: number;
  readonly cursor?: string;
}

export interface GetFeedResponse {
  readonly data: Inline317;
}

export interface GetFeedSkeletonParams {
  readonly feed: string;
  readonly limit?: number;
  readonly cursor?: string;
}

export interface GetFeedSkeletonResponse {
  readonly data: Inline326;
}

export interface GetFollowersParams {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
  readonly sort?: string;
}

export interface GetFollowersResponse {
  readonly data: Inline368;
}

export interface GetFollowsParams {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
  readonly sort?: string;
}

export interface GetFollowsResponse {
  readonly data: Inline371;
}

export interface GetHeadParams {
  readonly did: string;
}

export interface GetHeadResponse {
  readonly data: Inline704;
}

export interface GetHostStatusParams {
  readonly hostname: string;
}

export interface GetHostStatusResponse {
  readonly data: Inline707;
}

export interface GetInviteCodesParams {
  readonly sort?: string;
  readonly limit?: number;
  readonly cursor?: string;
}

export interface GetInviteCodesResponse {
  readonly data: Inline556;
}

export interface GetJobStatusParams {
  readonly jobId: string;
}

export interface GetJobStatusResponse {
  readonly data: Inline534;
}

export interface GetKnownFollowersParams {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
}

export interface GetKnownFollowersResponse {
  readonly data: Inline374;
}

export interface GetLatestCommitParams {
  readonly did: string;
}

export interface GetLatestCommitResponse {
  readonly data: Inline710;
}

export interface GetLikesParams {
  readonly uri: string;
  readonly cid?: string;
  readonly limit?: number;
  readonly cursor?: string;
}

export interface GetLikesResponse {
  readonly data: Inline329;
}

export interface GetListBlocksParams {
  readonly limit?: number;
  readonly cursor?: string;
}

export interface GetListBlocksResponse {
  readonly data: Inline380;
}

export interface GetListFeedParams {
  readonly list: string;
  readonly limit?: number;
  readonly cursor?: string;
}

export interface GetListFeedResponse {
  readonly data: Inline332;
}

export interface GetListMutesParams {
  readonly limit?: number;
  readonly cursor?: string;
}

export interface GetListMutesResponse {
  readonly data: Inline383;
}

export interface GetListParams {
  readonly list: string;
  readonly limit?: number;
  readonly cursor?: string;
}

export interface GetListResponse {
  readonly data: Inline377;
}

export interface GetListsParams {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
  readonly purposes?: ReadonlyArray<string>;
}

export interface GetListsResponse {
  readonly data: Inline386;
}

export interface GetListsWithMembershipParams {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
  readonly purposes?: ReadonlyArray<string>;
}

export interface GetListsWithMembershipResponse {
  readonly data: Inline389;
}

export interface GetMatchesParams {
  readonly limit?: number;
  readonly cursor?: string;
}

export interface GetMatchesResponse {
  readonly data: Inline271;
}

export interface GetMutesParams {
  readonly limit?: number;
  readonly cursor?: string;
}

export interface GetMutesResponse {
  readonly data: Inline392;
}

export interface GetOnboardingSuggestedStarterPacksParams {
  readonly limit?: number;
}

export interface GetOnboardingSuggestedStarterPacksResponse {
  readonly data: Inline454;
}

export interface GetOnboardingSuggestedStarterPacksSkeletonParams {
  readonly viewer?: string;
  readonly limit?: number;
}

export interface GetOnboardingSuggestedStarterPacksSkeletonResponse {
  readonly data: Inline457;
}

export interface GetOnboardingSuggestedUsersSkeletonParams {
  readonly viewer?: string;
  readonly category?: string;
  readonly limit?: number;
}

export interface GetOnboardingSuggestedUsersSkeletonResponse {
  readonly data: Inline460;
}

export interface GetPopularFeedGeneratorsParams {
  readonly limit?: number;
  readonly cursor?: string;
  readonly query?: string;
}

export interface GetPopularFeedGeneratorsResponse {
  readonly data: Inline463;
}

export interface GetPostsParams {
  readonly uris: ReadonlyArray<string>;
}

export interface GetPostsResponse {
  readonly data: Inline335;
}

export interface GetPostThreadOtherV2Params {
  readonly anchor: string;
}

export interface GetPostThreadOtherV2Response {
  readonly data: Inline466;
}

export interface GetPostThreadParams {
  readonly uri: string;
  readonly depth?: number;
  readonly parentHeight?: number;
}

export interface GetPostThreadResponse {
  readonly data: Inline338;
}

export interface GetPostThreadV2Params {
  readonly anchor: string;
  readonly above?: boolean;
  readonly below?: number;
  readonly branchingFactor?: number;
  readonly sort?: string;
}

export interface GetPostThreadV2Response {
  readonly data: Inline469;
}

export interface GetPreferencesParams {

}

export interface GetPreferencesResponse {
  readonly data: Inline235;
}

export interface GetProfileParams {
  readonly actor: string;
}

export interface GetProfileResponse {
  readonly data: AppBskyActorDefsProfileViewDetailed;
}

export interface GetProfilesParams {
  readonly actors: ReadonlyArray<string>;
}

export interface GetProfilesResponse {
  readonly data: Inline240;
}

export interface GetQuotesParams {
  readonly uri: string;
  readonly cid?: string;
  readonly limit?: number;
  readonly cursor?: string;
}

export interface GetQuotesResponse {
  readonly data: Inline341;
}

export interface GetRecommendedDidCredentialsParams {

}

export interface GetRecommendedDidCredentialsResponse {
  readonly data: Inline579;
}

export interface GetRecordParams {
  readonly repo: string;
  readonly collection: string;
  readonly rkey: string;
  readonly cid?: string;
}

export interface GetRecordResponse {
  readonly data: Inline622;
}

export interface GetRelationshipsParams {
  readonly actor: string;
  readonly others?: ReadonlyArray<string>;
}

export interface GetRelationshipsResponse {
  readonly data: Inline395;
}

export interface GetRepoParams {
  readonly did: string;
  readonly since?: string;
}

export interface GetRepoResponse {

}

export interface GetRepoStatusParams {
  readonly did: string;
}

export interface GetRepoStatusResponse {
  readonly data: Inline715;
}

export interface GetRepostedByParams {
  readonly uri: string;
  readonly cid?: string;
  readonly limit?: number;
  readonly cursor?: string;
}

export interface GetRepostedByResponse {
  readonly data: Inline344;
}

export interface GetServiceAuthParams {
  readonly aud: string;
  readonly exp?: number;
  readonly lxm?: string;
}

export interface GetServiceAuthResponse {
  readonly data: Inline670;
}

export interface GetServicesParams {
  readonly dids: ReadonlyArray<string>;
  readonly detailed?: boolean;
}

export interface GetServicesResponse {
  readonly data: Inline428;
}

export interface GetSessionParams {

}

export interface GetSessionResponse {
  readonly data: Inline673;
}

export interface GetStarterPackParams {
  readonly starterPack: string;
}

export interface GetStarterPackResponse {
  readonly data: Inline398;
}

export interface GetStarterPacksParams {
  readonly uris: ReadonlyArray<string>;
}

export interface GetStarterPacksResponse {
  readonly data: Inline401;
}

export interface GetStarterPacksWithMembershipParams {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
}

export interface GetStarterPacksWithMembershipResponse {
  readonly data: Inline404;
}

export interface GetStateParams {
  readonly countryCode: string;
  readonly regionCode?: string;
}

export interface GetStateResponse {
  readonly data: Inline258;
}

export interface GetSubjectStatusParams {
  readonly did?: string;
  readonly uri?: string;
  readonly blob?: string;
}

export interface GetSubjectStatusResponse {
  readonly data: Inline559;
}

export interface GetSuggestedFeedsParams {
  readonly limit?: number;
  readonly cursor?: string;
}

export interface GetSuggestedFeedsResponse {
  readonly data: Inline347;
}

export interface GetSuggestedFeedsSkeletonParams {
  readonly viewer?: string;
  readonly limit?: number;
}

export interface GetSuggestedFeedsSkeletonResponse {
  readonly data: Inline472;
}

export interface GetSuggestedFollowsByActorParams {
  readonly actor: string;
}

export interface GetSuggestedFollowsByActorResponse {
  readonly data: Inline407;
}

export interface GetSuggestedOnboardingUsersParams {
  readonly category?: string;
  readonly limit?: number;
}

export interface GetSuggestedOnboardingUsersResponse {
  readonly data: Inline475;
}

export interface GetSuggestedStarterPacksParams {
  readonly limit?: number;
}

export interface GetSuggestedStarterPacksResponse {
  readonly data: Inline478;
}

export interface GetSuggestedStarterPacksSkeletonParams {
  readonly viewer?: string;
  readonly limit?: number;
}

export interface GetSuggestedStarterPacksSkeletonResponse {
  readonly data: Inline481;
}

export interface GetSuggestedUsersForDiscoverParams {
  readonly limit?: number;
}

export interface GetSuggestedUsersForDiscoverResponse {
  readonly data: Inline487;
}

export interface GetSuggestedUsersForDiscoverSkeletonParams {
  readonly viewer?: string;
  readonly limit?: number;
}

export interface GetSuggestedUsersForDiscoverSkeletonResponse {
  readonly data: Inline490;
}

export interface GetSuggestedUsersForExploreParams {
  readonly category?: string;
  readonly limit?: number;
}

export interface GetSuggestedUsersForExploreResponse {
  readonly data: Inline493;
}

export interface GetSuggestedUsersForExploreSkeletonParams {
  readonly viewer?: string;
  readonly category?: string;
  readonly limit?: number;
}

export interface GetSuggestedUsersForExploreSkeletonResponse {
  readonly data: Inline496;
}

export interface GetSuggestedUsersForSeeMoreParams {
  readonly category?: string;
  readonly limit?: number;
}

export interface GetSuggestedUsersForSeeMoreResponse {
  readonly data: Inline499;
}

export interface GetSuggestedUsersForSeeMoreSkeletonParams {
  readonly viewer?: string;
  readonly category?: string;
  readonly limit?: number;
}

export interface GetSuggestedUsersForSeeMoreSkeletonResponse {
  readonly data: Inline502;
}

export interface GetSuggestedUsersParams {
  readonly category?: string;
  readonly limit?: number;
}

export interface GetSuggestedUsersResponse {
  readonly data: Inline484;
}

export interface GetSuggestedUsersSkeletonParams {
  readonly viewer?: string;
  readonly category?: string;
  readonly limit?: number;
}

export interface GetSuggestedUsersSkeletonResponse {
  readonly data: Inline505;
}

export interface GetSuggestionsParams {
  readonly limit?: number;
  readonly cursor?: string;
}

export interface GetSuggestionsResponse {
  readonly data: Inline243;
}

export interface GetSuggestionsSkeletonParams {
  readonly viewer?: string;
  readonly limit?: number;
  readonly cursor?: string;
  readonly relativeToDid?: string;
}

export interface GetSuggestionsSkeletonResponse {
  readonly data: Inline508;
}

export interface GetSyncStatusParams {

}

export interface GetSyncStatusResponse {
  readonly data: Inline274;
}

export interface GetTaggedSuggestionsParams {

}

export interface GetTaggedSuggestionsResponse {
  readonly data: Inline511;
}

export interface GetTimelineParams {
  readonly algorithm?: string;
  readonly limit?: number;
  readonly cursor?: string;
}

export interface GetTimelineResponse {
  readonly data: Inline350;
}

export interface GetTrendingTopicsParams {
  readonly viewer?: string;
  readonly limit?: number;
}

export interface GetTrendingTopicsResponse {
  readonly data: Inline514;
}

export interface GetTrendsParams {
  readonly limit?: number;
}

export interface GetTrendsResponse {
  readonly data: Inline517;
}

export interface GetTrendsSkeletonParams {
  readonly viewer?: string;
  readonly limit?: number;
}

export interface GetTrendsSkeletonResponse {
  readonly data: Inline520;
}

export interface GetUnreadCountParams {
  readonly priority?: boolean;
  readonly seenAt?: string;
}

export interface GetUnreadCountResponse {
  readonly data: Inline431;
}

export interface GetUploadLimitsParams {

}

export interface GetUploadLimitsResponse {
  readonly data: Inline537;
}

export interface ImportContactsParams {
  readonly token: string;
  readonly contacts: ReadonlyArray<string>;
}

export interface ImportContactsResponse {
  readonly data: Inline277;
}

export interface ImportRepoParams {

}

export interface ImportRepoResponse {

}

export interface InitAgeAssuranceParams {
  readonly email: string;
  readonly language: string;
  readonly countryCode: string;
}

export interface InitAgeAssuranceResponse {
  readonly data: AppBskyUnspeccedDefsAgeAssuranceState;
}

export interface Inline235 {
  readonly preferences: AppBskyActorDefsPreferences;
}

export interface Inline240 {
  readonly profiles: ReadonlyArray<AppBskyActorDefsProfileViewDetailed>;
}

export interface Inline243 {
  readonly cursor?: string;
  readonly actors: ReadonlyArray<AppBskyActorDefsProfileView>;
  readonly recId?: number;
  readonly recIdStr?: string;
}

export interface Inline248 {
  readonly cursor?: string;
  readonly actors: ReadonlyArray<AppBskyActorDefsProfileView>;
}

export interface Inline251 {
  readonly actors: ReadonlyArray<AppBskyActorDefsProfileViewBasic>;
}

export interface Inline258 {
  readonly state: AppBskyAgeassuranceDefsState;
  readonly metadata: AppBskyAgeassuranceDefsStateMetadata;
}

export interface Inline265 {
  readonly cursor?: string;
  readonly bookmarks: ReadonlyArray<AppBskyBookmarkDefsBookmarkView>;
}

export interface Inline268 {

}

export interface Inline271 {
  readonly cursor?: string;
  readonly matches: ReadonlyArray<AppBskyActorDefsProfileView>;
}

export interface Inline274 {
  readonly syncStatus?: AppBskyContactDefsSyncStatus;
}

export interface Inline277 {
  readonly matchesAndContactIndexes: ReadonlyArray<AppBskyContactDefsMatchAndContactIndex>;
}

export interface Inline280 {

}

export interface Inline283 {

}

export interface Inline286 {

}

export interface Inline289 {
  readonly token: string;
}

export interface Inline292 {
  readonly id: string;
}

export interface Inline297 {
  readonly cursor?: string;
  readonly drafts: ReadonlyArray<AppBskyDraftDefsDraftView>;
}

export interface Inline302 {
  readonly view?: AppBskyEmbedExternalView;
  readonly associatedRefs?: ReadonlyArray<ComAtprotoRepoStrongRef>;
  readonly associatedRecords?: ReadonlyArray<unknown>;
}

export interface Inline305 {
  readonly did: string;
  readonly feeds: ReadonlyArray<AppBskyFeedDescribeFeedGeneratorFeed>;
  readonly links?: AppBskyFeedDescribeFeedGeneratorLinks;
}

export interface Inline308 {
  readonly cursor?: string;
  readonly feeds: ReadonlyArray<AppBskyFeedDefsGeneratorView>;
}

export interface Inline311 {
  readonly cursor?: string;
  readonly feed: ReadonlyArray<AppBskyFeedDefsFeedViewPost>;
}

export interface Inline314 {
  readonly cursor?: string;
  readonly feed: ReadonlyArray<AppBskyFeedDefsFeedViewPost>;
}

export interface Inline317 {
  readonly cursor?: string;
  readonly feed: ReadonlyArray<AppBskyFeedDefsFeedViewPost>;
}

export interface Inline320 {
  readonly view: AppBskyFeedDefsGeneratorView;
  readonly isOnline: boolean;
  readonly isValid: boolean;
}

export interface Inline323 {
  readonly feeds: ReadonlyArray<AppBskyFeedDefsGeneratorView>;
}

export interface Inline326 {
  readonly cursor?: string;
  readonly feed: ReadonlyArray<AppBskyFeedDefsSkeletonFeedPost>;
  readonly reqId?: string;
}

export interface Inline329 {
  readonly uri: string;
  readonly cid?: string;
  readonly cursor?: string;
  readonly likes: ReadonlyArray<AppBskyFeedGetLikesLike>;
}

export interface Inline332 {
  readonly cursor?: string;
  readonly feed: ReadonlyArray<AppBskyFeedDefsFeedViewPost>;
}

export interface Inline335 {
  readonly posts: ReadonlyArray<AppBskyFeedDefsPostView>;
}

export interface Inline338 {
  readonly thread: AppBskyFeedDefsThreadViewPost | AppBskyFeedDefsNotFoundPost | AppBskyFeedDefsBlockedPost;
  readonly threadgate?: AppBskyFeedDefsThreadgateView;
}

export interface Inline341 {
  readonly uri: string;
  readonly cid?: string;
  readonly cursor?: string;
  readonly posts: ReadonlyArray<AppBskyFeedDefsPostView>;
}

export interface Inline344 {
  readonly uri: string;
  readonly cid?: string;
  readonly cursor?: string;
  readonly repostedBy: ReadonlyArray<AppBskyActorDefsProfileView>;
}

export interface Inline347 {
  readonly cursor?: string;
  readonly feeds: ReadonlyArray<AppBskyFeedDefsGeneratorView>;
}

export interface Inline350 {
  readonly cursor?: string;
  readonly feed: ReadonlyArray<AppBskyFeedDefsFeedViewPost>;
}

export interface Inline353 {
  readonly cursor?: string;
  readonly hitsTotal?: number;
  readonly posts: ReadonlyArray<AppBskyFeedDefsPostView>;
}

export interface Inline356 {
  readonly cursor?: string;
  readonly hitsTotal?: number;
  readonly posts: ReadonlyArray<AppBskyFeedDefsPostView>;
  readonly detectedQueryLanguages?: ReadonlyArray<string>;
}

export interface Inline359 {

}

export interface Inline362 {
  readonly cursor?: string;
  readonly starterPacks: ReadonlyArray<AppBskyGraphDefsStarterPackViewBasic>;
}

export interface Inline365 {
  readonly cursor?: string;
  readonly blocks: ReadonlyArray<AppBskyActorDefsProfileView>;
}

export interface Inline368 {
  readonly subject: AppBskyActorDefsProfileView;
  readonly cursor?: string;
  readonly followers: ReadonlyArray<AppBskyActorDefsProfileView>;
}

export interface Inline371 {
  readonly subject: AppBskyActorDefsProfileView;
  readonly cursor?: string;
  readonly follows: ReadonlyArray<AppBskyActorDefsProfileView>;
}

export interface Inline374 {
  readonly subject: AppBskyActorDefsProfileView;
  readonly cursor?: string;
  readonly followers: ReadonlyArray<AppBskyActorDefsProfileView>;
}

export interface Inline377 {
  readonly cursor?: string;
  readonly list: AppBskyGraphDefsListView;
  readonly items: ReadonlyArray<AppBskyGraphDefsListItemView>;
}

export interface Inline380 {
  readonly cursor?: string;
  readonly lists: ReadonlyArray<AppBskyGraphDefsListView>;
}

export interface Inline383 {
  readonly cursor?: string;
  readonly lists: ReadonlyArray<AppBskyGraphDefsListView>;
}

export interface Inline386 {
  readonly cursor?: string;
  readonly lists: ReadonlyArray<AppBskyGraphDefsListView>;
}

export interface Inline389 {
  readonly cursor?: string;
  readonly listsWithMembership: ReadonlyArray<AppBskyGraphGetListsWithMembershipListWithMembership>;
}

export interface Inline392 {
  readonly cursor?: string;
  readonly mutes: ReadonlyArray<AppBskyActorDefsProfileView>;
}

export interface Inline395 {
  readonly actor?: string;
  readonly relationships: ReadonlyArray<AppBskyGraphDefsRelationship | AppBskyGraphDefsNotFoundActor>;
}

export interface Inline398 {
  readonly starterPack: AppBskyGraphDefsStarterPackView;
}

export interface Inline401 {
  readonly starterPacks: ReadonlyArray<AppBskyGraphDefsStarterPackViewBasic>;
}

export interface Inline404 {
  readonly cursor?: string;
  readonly starterPacksWithMembership: ReadonlyArray<AppBskyGraphGetStarterPacksWithMembershipStarterPackWithMembership>;
}

export interface Inline407 {
  readonly suggestions: ReadonlyArray<AppBskyActorDefsProfileView>;
  readonly recIdStr?: string;
  readonly isFallback?: boolean;
  readonly recId?: number;
}

export interface Inline416 {
  readonly cursor?: string;
  readonly starterPacks: ReadonlyArray<AppBskyGraphDefsStarterPackViewBasic>;
}

export interface Inline419 {
  readonly cursor?: string;
  readonly hitsTotal?: number;
  readonly starterPacks: ReadonlyArray<AppBskyGraphDefsStarterPackView>;
}

export interface Inline428 {
  readonly views: ReadonlyArray<AppBskyLabelerDefsLabelerView | AppBskyLabelerDefsLabelerViewDetailed>;
}

export interface Inline431 {
  readonly count: number;
}

export interface Inline434 {
  readonly cursor?: string;
  readonly subscriptions: ReadonlyArray<AppBskyActorDefsProfileView>;
}

export interface Inline437 {
  readonly cursor?: string;
  readonly notifications: ReadonlyArray<AppBskyNotificationListNotificationsNotification>;
  readonly priority?: boolean;
  readonly seenAt?: string;
}

export interface Inline440 {
  readonly subject: string;
  readonly activitySubscription?: AppBskyNotificationDefsActivitySubscription;
}

export interface Inline443 {
  readonly preferences: AppBskyNotificationDefsPreferences;
}

export interface Inline454 {
  readonly starterPacks: ReadonlyArray<AppBskyGraphDefsStarterPackView>;
}

export interface Inline457 {
  readonly starterPacks: ReadonlyArray<string>;
}

export interface Inline460 {
  readonly dids: ReadonlyArray<string>;
  readonly recId?: string;
  readonly recIdStr?: string;
}

export interface Inline463 {
  readonly cursor?: string;
  readonly feeds: ReadonlyArray<AppBskyFeedDefsGeneratorView>;
}

export interface Inline466 {
  readonly thread: ReadonlyArray<AppBskyUnspeccedGetPostThreadOtherV2ThreadItem>;
}

export interface Inline469 {
  readonly thread: ReadonlyArray<AppBskyUnspeccedGetPostThreadV2ThreadItem>;
  readonly threadgate?: AppBskyFeedDefsThreadgateView;
  readonly hasOtherReplies: boolean;
}

export interface Inline472 {
  readonly feeds: ReadonlyArray<string>;
}

export interface Inline475 {
  readonly actors: ReadonlyArray<AppBskyActorDefsProfileView>;
  readonly recId?: string;
  readonly recIdStr?: string;
}

export interface Inline478 {
  readonly starterPacks: ReadonlyArray<AppBskyGraphDefsStarterPackView>;
}

export interface Inline481 {
  readonly starterPacks: ReadonlyArray<string>;
}

export interface Inline484 {
  readonly actors: ReadonlyArray<AppBskyActorDefsProfileView>;
  readonly recId?: string;
  readonly recIdStr?: string;
}

export interface Inline487 {
  readonly actors: ReadonlyArray<AppBskyActorDefsProfileView>;
  readonly recIdStr?: string;
}

export interface Inline490 {
  readonly dids: ReadonlyArray<string>;
  readonly recIdStr?: string;
}

export interface Inline493 {
  readonly actors: ReadonlyArray<AppBskyActorDefsProfileView>;
  readonly recIdStr?: string;
}

export interface Inline496 {
  readonly dids: ReadonlyArray<string>;
  readonly recIdStr?: string;
}

export interface Inline499 {
  readonly actors: ReadonlyArray<AppBskyActorDefsProfileView>;
  readonly recIdStr?: string;
}

export interface Inline502 {
  readonly dids: ReadonlyArray<string>;
  readonly recIdStr?: string;
}

export interface Inline505 {
  readonly dids: ReadonlyArray<string>;
  readonly recId?: string;
  readonly recIdStr?: string;
}

export interface Inline508 {
  readonly cursor?: string;
  readonly actors: ReadonlyArray<AppBskyUnspeccedDefsSkeletonSearchActor>;
  readonly relativeToDid?: string;
  readonly recId?: number;
  readonly recIdStr?: string;
}

export interface Inline511 {
  readonly suggestions: ReadonlyArray<AppBskyUnspeccedGetTaggedSuggestionsSuggestion>;
}

export interface Inline514 {
  readonly topics: ReadonlyArray<AppBskyUnspeccedDefsTrendingTopic>;
  readonly suggested: ReadonlyArray<AppBskyUnspeccedDefsTrendingTopic>;
}

export interface Inline517 {
  readonly trends: ReadonlyArray<AppBskyUnspeccedDefsTrendView>;
  readonly recIdStr?: string;
}

export interface Inline520 {
  readonly trends: ReadonlyArray<AppBskyUnspeccedDefsSkeletonTrend>;
  readonly recIdStr?: string;
}

export interface Inline525 {
  readonly cursor?: string;
  readonly hitsTotal?: number;
  readonly actors: ReadonlyArray<AppBskyUnspeccedDefsSkeletonSearchActor>;
}

export interface Inline528 {
  readonly cursor?: string;
  readonly hitsTotal?: number;
  readonly posts: ReadonlyArray<AppBskyUnspeccedDefsSkeletonSearchPost>;
}

export interface Inline531 {
  readonly cursor?: string;
  readonly hitsTotal?: number;
  readonly starterPacks: ReadonlyArray<AppBskyUnspeccedDefsSkeletonSearchStarterPack>;
}

export interface Inline534 {
  readonly jobStatus: AppBskyVideoDefsJobStatus;
}

export interface Inline537 {
  readonly canUpload: boolean;
  readonly remainingDailyVideos?: number;
  readonly remainingDailyBytes?: number;
  readonly message?: string;
  readonly error?: string;
}

export interface Inline540 {
  readonly jobStatus: AppBskyVideoDefsJobStatus;
}

export interface Inline553 {
  readonly infos: ReadonlyArray<ComAtprotoAdminDefsAccountView>;
}

export interface Inline556 {
  readonly cursor?: string;
  readonly codes: ReadonlyArray<ComAtprotoServerDefsInviteCode>;
}

export interface Inline559 {
  readonly subject: ComAtprotoAdminDefsRepoRef | ComAtprotoRepoStrongRef | ComAtprotoAdminDefsRepoBlobRef;
  readonly takedown?: ComAtprotoAdminDefsStatusAttr;
  readonly deactivated?: ComAtprotoAdminDefsStatusAttr;
}

export interface Inline562 {
  readonly cursor?: string;
  readonly accounts: ReadonlyArray<ComAtprotoAdminDefsAccountView>;
}

export interface Inline565 {
  readonly sent: boolean;
}

export interface Inline576 {
  readonly subject: ComAtprotoAdminDefsRepoRef | ComAtprotoRepoStrongRef | ComAtprotoAdminDefsRepoBlobRef;
  readonly takedown?: ComAtprotoAdminDefsStatusAttr;
}

export interface Inline579 {
  readonly rotationKeys?: ReadonlyArray<string>;
  readonly alsoKnownAs?: ReadonlyArray<string>;
  readonly verificationMethods?: unknown;
  readonly services?: unknown;
}

export interface Inline586 {
  readonly didDoc: unknown;
}

export interface Inline589 {
  readonly did: string;
}

export interface Inline594 {
  readonly operation: unknown;
}

export interface Inline601 {
  readonly cursor?: string;
  readonly labels: ReadonlyArray<ComAtprotoLabelDefsLabel>;
}

export interface Inline604 {
  readonly cid: string;
  readonly schema: ComAtprotoLexiconSchema;
  readonly uri: string;
}

export interface Inline607 {
  readonly id: number;
  readonly reasonType: ComAtprotoModerationDefsReasonType;
  readonly reason?: string;
  readonly subject: ComAtprotoAdminDefsRepoRef | ComAtprotoRepoStrongRef;
  readonly reportedBy: string;
  readonly createdAt: string;
}

export interface Inline610 {
  readonly commit?: ComAtprotoRepoDefsCommitMeta;
  readonly results?: ReadonlyArray<ComAtprotoRepoApplyWritesCreateResult | ComAtprotoRepoApplyWritesUpdateResult | ComAtprotoRepoApplyWritesDeleteResult>;
}

export interface Inline613 {
  readonly uri: string;
  readonly cid: string;
  readonly commit?: ComAtprotoRepoDefsCommitMeta;
  readonly validationStatus?: string;
}

export interface Inline616 {
  readonly commit?: ComAtprotoRepoDefsCommitMeta;
}

export interface Inline619 {
  readonly handle: string;
  readonly did: string;
  readonly didDoc: unknown;
  readonly collections: ReadonlyArray<string>;
  readonly handleIsCorrect: boolean;
}

export interface Inline622 {
  readonly uri: string;
  readonly cid?: string;
  readonly value: unknown;
}

export interface Inline627 {
  readonly cursor?: string;
  readonly blobs: ReadonlyArray<ComAtprotoRepoListMissingBlobsRecordBlob>;
}

export interface Inline630 {
  readonly cursor?: string;
  readonly records: ReadonlyArray<ComAtprotoRepoListRecordsRecord>;
}

export interface Inline633 {
  readonly uri: string;
  readonly cid: string;
  readonly commit?: ComAtprotoRepoDefsCommitMeta;
  readonly validationStatus?: string;
}

export interface Inline636 {
  readonly blob: unknown;
}

export interface Inline641 {
  readonly activated: boolean;
  readonly validDid: boolean;
  readonly repoCommit: string;
  readonly repoRev: string;
  readonly repoBlocks: number;
  readonly indexedRecords: number;
  readonly privateStateValues: number;
  readonly expectedBlobs: number;
  readonly importedBlobs: number;
}

export interface Inline646 {
  readonly accessJwt: string;
  readonly refreshJwt: string;
  readonly handle: string;
  readonly did: string;
  readonly didDoc?: unknown;
}

export interface Inline651 {
  readonly code: string;
}

export interface Inline654 {
  readonly codes: ReadonlyArray<ComAtprotoServerCreateInviteCodesAccountCodes>;
}

export interface Inline657 {
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
}

export interface Inline664 {
  readonly inviteCodeRequired?: boolean;
  readonly phoneVerificationRequired?: boolean;
  readonly blobUploadLimit?: number;
  readonly availableUserDomains: ReadonlyArray<string>;
  readonly links?: ComAtprotoServerDescribeServerLinks;
  readonly contact?: ComAtprotoServerDescribeServerContact;
  readonly did: string;
}

export interface Inline667 {
  readonly codes: ReadonlyArray<ComAtprotoServerDefsInviteCode>;
}

export interface Inline670 {
  readonly token: string;
}

export interface Inline673 {
  readonly handle: string;
  readonly did: string;
  readonly didDoc?: unknown;
  readonly email?: string;
  readonly emailConfirmed?: boolean;
  readonly emailAuthFactor?: boolean;
  readonly active?: boolean;
  readonly status?: string;
}

export interface Inline676 {
  readonly passwords: ReadonlyArray<ComAtprotoServerListAppPasswordsAppPassword>;
}

export interface Inline679 {
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
}

export interface Inline686 {
  readonly tokenRequired: boolean;
}

export interface Inline691 {
  readonly signingKey: string;
}

export interface Inline704 {
  readonly root: string;
}

export interface Inline707 {
  readonly hostname: string;
  readonly seq?: number;
  readonly accountCount?: number;
  readonly status?: ComAtprotoSyncDefsHostStatus;
}

export interface Inline710 {
  readonly cid: string;
  readonly rev: string;
}

export interface Inline715 {
  readonly did: string;
  readonly active: boolean;
  readonly status?: string;
  readonly rev?: string;
}

export interface Inline718 {
  readonly cursor?: string;
  readonly cids: ReadonlyArray<string>;
}

export interface Inline721 {
  readonly cursor?: string;
  readonly hosts: ReadonlyArray<ComAtprotoSyncListHostsHost>;
}

export interface Inline724 {
  readonly cursor?: string;
  readonly repos: ReadonlyArray<ComAtprotoSyncListReposRepo>;
}

export interface Inline727 {
  readonly cursor?: string;
  readonly repos: ReadonlyArray<ComAtprotoSyncListReposByCollectionRepo>;
}

export interface Inline734 {

}

export interface Inline737 {
  readonly handle: string;
  readonly result: ComAtprotoTempCheckHandleAvailabilityResultAvailable | ComAtprotoTempCheckHandleAvailabilityResultUnavailable;
}

export interface Inline740 {
  readonly activated: boolean;
  readonly placeInQueue?: number;
  readonly estimatedTimeMs?: number;
}

export interface Inline743 {
  readonly scope: string;
}

export interface Inline746 {
  readonly labels: ReadonlyArray<ComAtprotoLabelDefsLabel>;
}

export interface ListActivitySubscriptionsParams {
  readonly limit?: number;
  readonly cursor?: string;
}

export interface ListActivitySubscriptionsResponse {
  readonly data: Inline434;
}

export interface ListAppPasswordsParams {

}

export interface ListAppPasswordsResponse {
  readonly data: Inline676;
}

export interface ListBlobsParams {
  readonly did: string;
  readonly since?: string;
  readonly limit?: number;
  readonly cursor?: string;
}

export interface ListBlobsResponse {
  readonly data: Inline718;
}

export interface ListHostsParams {
  readonly limit?: number;
  readonly cursor?: string;
}

export interface ListHostsResponse {
  readonly data: Inline721;
}

export interface ListMissingBlobsParams {
  readonly limit?: number;
  readonly cursor?: string;
}

export interface ListMissingBlobsResponse {
  readonly data: Inline627;
}

export interface ListNotificationsParams {
  readonly reasons?: ReadonlyArray<string>;
  readonly limit?: number;
  readonly priority?: boolean;
  readonly cursor?: string;
  readonly seenAt?: string;
}

export interface ListNotificationsResponse {
  readonly data: Inline437;
}

export interface ListRecordsParams {
  readonly repo: string;
  readonly collection: string;
  readonly limit?: number;
  readonly cursor?: string;
  readonly reverse?: boolean;
}

export interface ListRecordsResponse {
  readonly data: Inline630;
}

export interface ListReposByCollectionParams {
  readonly collection: string;
  readonly limit?: number;
  readonly cursor?: string;
}

export interface ListReposByCollectionResponse {
  readonly data: Inline727;
}

export interface ListReposParams {
  readonly limit?: number;
  readonly cursor?: string;
}

export interface ListReposResponse {
  readonly data: Inline724;
}

export interface MuteActorListParams {
  readonly list: string;
}

export interface MuteActorListResponse {

}

export interface MuteActorParams {
  readonly actor: string;
  readonly onlyReposts?: boolean;
  readonly onlyQuoteposts?: boolean;
}

export interface MuteActorResponse {

}

export interface MuteThreadParams {
  readonly root: string;
}

export interface MuteThreadResponse {

}

export interface NotifyOfUpdateParams {
  readonly hostname: string;
}

export interface NotifyOfUpdateResponse {

}

export interface PutActivitySubscriptionParams {
  readonly subject: string;
  readonly activitySubscription: AppBskyNotificationDefsActivitySubscription;
}

export interface PutActivitySubscriptionResponse {
  readonly data: Inline440;
}

export interface PutPreferencesParams {
  readonly preferences: AppBskyActorDefsPreferences;
}

export interface PutPreferencesResponse {

}

export interface PutPreferencesV2Params {
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
}

export interface PutPreferencesV2Response {
  readonly data: Inline443;
}

export interface PutRecordParams {
  readonly repo: string;
  readonly collection: string;
  readonly rkey: string;
  readonly validate?: boolean;
  readonly record: unknown;
  readonly swapRecord?: string;
  readonly swapCommit?: string;
}

export interface PutRecordResponse {
  readonly data: Inline633;
}

export interface QueryLabelsParams {
  readonly uriPatterns: ReadonlyArray<string>;
  readonly sources?: ReadonlyArray<string>;
  readonly limit?: number;
  readonly cursor?: string;
}

export interface QueryLabelsResponse {
  readonly data: Inline601;
}

export interface RefreshIdentityParams {
  readonly identifier: string;
}

export interface RefreshIdentityResponse {
  readonly data: ComAtprotoIdentityDefsIdentityInfo;
}

export interface RefreshSessionParams {

}

export interface RefreshSessionResponse {
  readonly data: Inline679;
}

export interface RegisterPushParams {
  readonly serviceDid: string;
  readonly token: string;
  readonly platform: string;
  readonly appId: string;
  readonly ageRestricted?: boolean;
}

export interface RegisterPushResponse {

}

export interface RemoveDataParams {

}

export interface RemoveDataResponse {
  readonly data: Inline280;
}

export interface RequestAccountDeleteParams {

}

export interface RequestAccountDeleteResponse {

}

export interface RequestCrawlParams {
  readonly hostname: string;
}

export interface RequestCrawlResponse {

}

export interface RequestEmailConfirmationParams {

}

export interface RequestEmailConfirmationResponse {

}

export interface RequestEmailUpdateParams {

}

export interface RequestEmailUpdateResponse {
  readonly data: Inline686;
}

export interface RequestPasswordResetParams {
  readonly email: string;
}

export interface RequestPasswordResetResponse {

}

export interface RequestPhoneVerificationParams {
  readonly phoneNumber: string;
}

export interface RequestPhoneVerificationResponse {

}

export interface RequestPlcOperationSignatureParams {

}

export interface RequestPlcOperationSignatureResponse {

}

export interface ReserveSigningKeyParams {
  readonly did?: string;
}

export interface ReserveSigningKeyResponse {
  readonly data: Inline691;
}

export interface ResetPasswordParams {
  readonly token: string;
  readonly password: string;
}

export interface ResetPasswordResponse {

}

export interface ResolveDidParams {
  readonly did: string;
}

export interface ResolveDidResponse {
  readonly data: Inline586;
}

export interface ResolveHandleParams {
  readonly handle: string;
}

export interface ResolveHandleResponse {
  readonly data: Inline589;
}

export interface ResolveIdentityParams {
  readonly identifier: string;
}

export interface ResolveIdentityResponse {
  readonly data: ComAtprotoIdentityDefsIdentityInfo;
}

export interface ResolveLexiconParams {
  readonly nsid: string;
}

export interface ResolveLexiconResponse {
  readonly data: Inline604;
}

export interface RevokeAccountCredentialsParams {
  readonly account: string;
}

export interface RevokeAccountCredentialsResponse {

}

export interface RevokeAppPasswordParams {
  readonly name: string;
}

export interface RevokeAppPasswordResponse {

}

export interface SearchAccountsParams {
  readonly email?: string;
  readonly cursor?: string;
  readonly limit?: number;
}

export interface SearchAccountsResponse {
  readonly data: Inline562;
}

export interface SearchActorsParams {
  readonly term?: string;
  readonly q?: string;
  readonly limit?: number;
  readonly cursor?: string;
}

export interface SearchActorsResponse {
  readonly data: Inline248;
}

export interface SearchActorsSkeletonParams {
  readonly q: string;
  readonly viewer?: string;
  readonly typeahead?: boolean;
  readonly limit?: number;
  readonly cursor?: string;
}

export interface SearchActorsSkeletonResponse {
  readonly data: Inline525;
}

export interface SearchActorsTypeaheadParams {
  readonly term?: string;
  readonly q?: string;
  readonly limit?: number;
}

export interface SearchActorsTypeaheadResponse {
  readonly data: Inline251;
}

export interface SearchPostsParams {
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
}

export interface SearchPostsResponse {
  readonly data: Inline353;
}

export interface SearchPostsSkeletonParams {
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
}

export interface SearchPostsSkeletonResponse {
  readonly data: Inline528;
}

export interface SearchPostsV2Params {
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
}

export interface SearchPostsV2Response {
  readonly data: Inline356;
}

export interface SearchStarterPacksParams {
  readonly q: string;
  readonly limit?: number;
  readonly cursor?: string;
}

export interface SearchStarterPacksResponse {
  readonly data: Inline416;
}

export interface SearchStarterPacksSkeletonParams {
  readonly q: string;
  readonly viewer?: string;
  readonly limit?: number;
  readonly cursor?: string;
}

export interface SearchStarterPacksSkeletonResponse {
  readonly data: Inline531;
}

export interface SearchStarterPacksV2Params {
  readonly q: string;
  readonly limit?: number;
  readonly cursor?: string;
}

export interface SearchStarterPacksV2Response {
  readonly data: Inline419;
}

export interface SendEmailParams {
  readonly recipientDid: string;
  readonly content: string;
  readonly subject?: string;
  readonly senderDid: string;
  readonly comment?: string;
}

export interface SendEmailResponse {
  readonly data: Inline565;
}

export interface SendInteractionsParams {
  readonly feed?: string;
  readonly interactions: ReadonlyArray<AppBskyFeedDefsInteraction>;
}

export interface SendInteractionsResponse {
  readonly data: Inline359;
}

export interface SendNotificationParams {
  readonly from: string;
  readonly to: string;
}

export interface SendNotificationResponse {
  readonly data: Inline283;
}

export interface SignPlcOperationParams {
  readonly token?: string;
  readonly rotationKeys?: ReadonlyArray<string>;
  readonly alsoKnownAs?: ReadonlyArray<string>;
  readonly verificationMethods?: unknown;
  readonly services?: unknown;
}

export interface SignPlcOperationResponse {
  readonly data: Inline594;
}

export interface StartPhoneVerificationParams {
  readonly phone: string;
}

export interface StartPhoneVerificationResponse {
  readonly data: Inline286;
}

export interface SubmitPlcOperationParams {
  readonly operation: unknown;
}

export interface SubmitPlcOperationResponse {

}

export interface UnmuteActorListParams {
  readonly list: string;
}

export interface UnmuteActorListResponse {

}

export interface UnmuteActorParams {
  readonly actor: string;
}

export interface UnmuteActorResponse {

}

export interface UnmuteThreadParams {
  readonly root: string;
}

export interface UnmuteThreadResponse {

}

export interface UnregisterPushParams {
  readonly serviceDid: string;
  readonly token: string;
  readonly platform: string;
  readonly appId: string;
}

export interface UnregisterPushResponse {

}

export interface UpdateAccountEmailParams {
  readonly account: string;
  readonly email: string;
}

export interface UpdateAccountEmailResponse {

}

export interface UpdateAccountHandleParams {
  readonly did: string;
  readonly handle: string;
}

export interface UpdateAccountHandleResponse {

}

export interface UpdateAccountPasswordParams {
  readonly did: string;
  readonly password: string;
}

export interface UpdateAccountPasswordResponse {

}

export interface UpdateAccountSigningKeyParams {
  readonly did: string;
  readonly signingKey: string;
}

export interface UpdateAccountSigningKeyResponse {

}

export interface UpdateDraftParams {
  readonly draft: AppBskyDraftDefsDraftWithId;
}

export interface UpdateDraftResponse {

}

export interface UpdateEmailParams {
  readonly email: string;
  readonly emailAuthFactor?: boolean;
  readonly token?: string;
}

export interface UpdateEmailResponse {

}

export interface UpdateHandleParams {
  readonly handle: string;
}

export interface UpdateHandleResponse {

}

export interface UpdateSeenParams {
  readonly seenAt: string;
}

export interface UpdateSeenResponse {

}

export interface UpdateSubjectStatusParams {
  readonly subject: ComAtprotoAdminDefsRepoRef | ComAtprotoRepoStrongRef | ComAtprotoAdminDefsRepoBlobRef;
  readonly takedown?: ComAtprotoAdminDefsStatusAttr;
  readonly deactivated?: ComAtprotoAdminDefsStatusAttr;
}

export interface UpdateSubjectStatusResponse {
  readonly data: Inline576;
}

export interface UploadBlobParams {

}

export interface UploadBlobResponse {
  readonly data: Inline636;
}

export interface UploadVideoParams {

}

export interface UploadVideoResponse {
  readonly data: Inline540;
}

export interface VerifyPhoneParams {
  readonly phone: string;
  readonly code: string;
}

export interface VerifyPhoneResponse {
  readonly data: Inline289;
}
