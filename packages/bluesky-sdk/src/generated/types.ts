// Auto-generated types for AT Protocol lexicons — do not edit

export interface AppBskyActorDefsAdultContentPref {

  enabled: boolean;
}

export interface AppBskyActorDefsBskyAppProgressGuide {

  guide: string;
}

export interface AppBskyActorDefsBskyAppStatePref {

  activeProgressGuide?: AppBskyActorDefsBskyAppProgressGuide;

  /** Indicates if the user is participating in the beta features program. */
  isBetaUser?: boolean;

  /** An array of tokens which identify nudges (modals, popups, tours, highlight dots) that should be shown to the user. */
  queuedNudges?: string[];

  /** Storage for NUXs the user has encountered. */
  nuxs?: AppBskyActorDefsNux[];
}

export interface AppBskyActorDefsContentLabelPref {

  /** Which labeler does this preference apply to? If undefined, applies globally. */
  labelerDid?: string;

  label: string;

  visibility: string;
}

export interface AppBskyActorDefsDeclaredAgePref {

  /** Indicates if the user has declared that they are over 13 years of age. */
  isOverAge13?: boolean;

  /** Indicates if the user has declared that they are over 16 years of age. */
  isOverAge16?: boolean;

  /** Indicates if the user has declared that they are over 18 years of age. */
  isOverAge18?: boolean;
}

export interface AppBskyActorDefsFeedViewPref {

  /** The URI of the feed, or an identifier which describes the feed. */
  feed: string;

  /** Hide replies in the feed. */
  hideReplies?: boolean;

  /** Hide replies in the feed if they are not by followed users. */
  hideRepliesByUnfollowed?: boolean;

  /** Hide replies in the feed if they do not have this number of likes. */
  hideRepliesByLikeCount?: number;

  /** Hide reposts in the feed. */
  hideReposts?: boolean;

  /** Hide quote posts in the feed. */
  hideQuotePosts?: boolean;
}

export interface AppBskyActorDefsHiddenPostsPref {

  /** A list of URIs of posts the account owner has hidden. */
  items: string[];
}

export interface AppBskyActorDefsInterestsPref {

  /** A list of tags which describe the account owner's interests gathered during onboarding. */
  tags: string[];
}

export interface AppBskyActorDefsKnownFollowers {

  count: number;

  followers: AppBskyActorDefsProfileViewBasic[];
}

export interface AppBskyActorDefsLabelerPrefItem {

  did: string;
}

export interface AppBskyActorDefsLabelersPref {

  labelers: AppBskyActorDefsLabelerPrefItem[];
}

export interface AppBskyActorDefsLiveEventPreferences {

  /** A list of feed IDs that the user has hidden from live events. */
  hiddenFeedIds?: string[];

  /** Whether to hide all feeds from live events. */
  hideAllFeeds?: boolean;
}

export interface AppBskyActorDefsMutedWord {

  id?: string;

  /** The muted word itself. */
  value: string;

  /** The intended targets of the muted word. */
  targets: AppBskyActorDefsMutedWordTarget[];

  /** Groups of users to apply the muted word to. If undefined, applies to all users. */
  actorTarget?: string;

  /** The date and time at which the muted word will expire and no longer be applied. */
  expiresAt?: string;
}

export type AppBskyActorDefsMutedWordTarget = "content" | "tag";

export interface AppBskyActorDefsMutedWordsPref {

  /** A list of words the account owner has muted. */
  items: AppBskyActorDefsMutedWord[];
}

export interface AppBskyActorDefsNux {

  id: string;

  completed: boolean;

  /** Arbitrary data for the NUX. The structure is defined by the NUX itself. Limited to 300 characters. */
  data?: string;

  /** The date and time at which the NUX will expire and should be considered completed. */
  expiresAt?: string;
}

export interface AppBskyActorDefsPersonalDetailsPref {

  /** The birth date of account owner. */
  birthDate?: string;
}

export interface AppBskyActorDefsPostInteractionSettingsPref {

  /** Matches threadgate record. List of rules defining who can reply to this users posts. If value is an empty array, no one can reply. If value is undefined, anyone can reply. */
  threadgateAllowRules?: AppBskyFeedThreadgateMentionRule | AppBskyFeedThreadgateFollowerRule | AppBskyFeedThreadgateFollowingRule | AppBskyFeedThreadgateListRule[];

  /** Matches postgate record. List of rules defining who can embed this users posts. If value is an empty array or is undefined, no particular rules apply and anyone can embed. */
  postgateEmbeddingRules?: AppBskyFeedPostgateDisableRule[];
}

export type AppBskyActorDefsPreferences = AppBskyActorDefsAdultContentPref | AppBskyActorDefsContentLabelPref | AppBskyActorDefsSavedFeedsPref | AppBskyActorDefsSavedFeedsPrefV2 | AppBskyActorDefsPersonalDetailsPref | AppBskyActorDefsDeclaredAgePref | AppBskyActorDefsFeedViewPref | AppBskyActorDefsThreadViewPref | AppBskyActorDefsInterestsPref | AppBskyActorDefsMutedWordsPref | AppBskyActorDefsHiddenPostsPref | AppBskyActorDefsBskyAppStatePref | AppBskyActorDefsLabelersPref | AppBskyActorDefsPostInteractionSettingsPref | AppBskyActorDefsVerificationPrefs | AppBskyActorDefsLiveEventPreferences[];

export interface AppBskyActorDefsProfileAssociated {

  lists?: number;

  feedgens?: number;

  starterPacks?: number;

  labeler?: boolean;

  chat?: AppBskyActorDefsProfileAssociatedChat;

  activitySubscription?: AppBskyActorDefsProfileAssociatedActivitySubscription;

  germ?: AppBskyActorDefsProfileAssociatedGerm;
}

export interface AppBskyActorDefsProfileAssociatedActivitySubscription {

  allowSubscriptions: string;
}

export interface AppBskyActorDefsProfileAssociatedChat {

  allowIncoming: string;

  allowGroupInvites?: string;
}

export interface AppBskyActorDefsProfileAssociatedGerm {

  messageMeUrl: string;

  showButtonTo: string;
}

export interface AppBskyActorDefsProfileView {

  did: string;

  handle: string;

  displayName?: string;

  pronouns?: string;

  description?: string;

  avatar?: string;

  associated?: AppBskyActorDefsProfileAssociated;

  indexedAt?: string;

  createdAt?: string;

  viewer?: AppBskyActorDefsViewerState;

  labels?: ComAtprotoLabelDefsLabel[];

  verification?: AppBskyActorDefsVerificationState;

  status?: AppBskyActorDefsStatusView;

  /** Debug information for internal development */
  debug?: unknown;
}

export interface AppBskyActorDefsProfileViewBasic {

  did: string;

  handle: string;

  displayName?: string;

  pronouns?: string;

  avatar?: string;

  associated?: AppBskyActorDefsProfileAssociated;

  viewer?: AppBskyActorDefsViewerState;

  labels?: ComAtprotoLabelDefsLabel[];

  createdAt?: string;

  verification?: AppBskyActorDefsVerificationState;

  status?: AppBskyActorDefsStatusView;

  /** Debug information for internal development */
  debug?: unknown;
}

export interface AppBskyActorDefsProfileViewDetailed {

  did: string;

  handle: string;

  displayName?: string;

  description?: string;

  pronouns?: string;

  website?: string;

  avatar?: string;

  banner?: string;

  followersCount?: number;

  followsCount?: number;

  postsCount?: number;

  associated?: AppBskyActorDefsProfileAssociated;

  joinedViaStarterPack?: AppBskyGraphDefsStarterPackViewBasic;

  indexedAt?: string;

  createdAt?: string;

  viewer?: AppBskyActorDefsViewerState;

  labels?: ComAtprotoLabelDefsLabel[];

  pinnedPost?: ComAtprotoRepoStrongRef;

  verification?: AppBskyActorDefsVerificationState;

  status?: AppBskyActorDefsStatusView;

  /** Debug information for internal development */
  debug?: unknown;
}

export interface AppBskyActorDefsSavedFeed {

  id: string;

  type: string;

  value: string;

  pinned: boolean;
}

export interface AppBskyActorDefsSavedFeedsPref {

  pinned: string[];

  saved: string[];

  timelineIndex?: number;
}

export interface AppBskyActorDefsSavedFeedsPrefV2 {

  items: AppBskyActorDefsSavedFeed[];
}

export interface AppBskyActorDefsStatusView {

  uri?: string;

  cid?: string;

  /** The status for the account. */
  status: string;

  record: unknown;

  /** An optional embed associated with the status. */
  embed?: AppBskyEmbedExternalView;

  labels?: ComAtprotoLabelDefsLabel[];

  /** The date when this status will expire. The application might choose to no longer return the status after expiration. */
  expiresAt?: string;

  /** True if the status is not expired, false if it is expired. Only present if expiration was set. */
  isActive?: boolean;

  /** True if the user's go-live access has been disabled by a moderator, false otherwise. */
  isDisabled?: boolean;
}

export interface AppBskyActorDefsThreadViewPref {

  /** Sorting mode for threads. */
  sort?: string;
}

export interface AppBskyActorDefsVerificationPrefs {

  /** Hide the blue check badges for verified accounts and trusted verifiers. */
  hideBadges?: boolean;
}

export interface AppBskyActorDefsVerificationState {

  /** All verifications issued by trusted verifiers on behalf of this user. Verifications by untrusted verifiers are not included. */
  verifications: AppBskyActorDefsVerificationView[];

  /** The user's status as a verified account. */
  verifiedStatus: string;

  /** The user's status as a trusted verifier. */
  trustedVerifierStatus: string;
}

export interface AppBskyActorDefsVerificationView {

  /** The user who issued this verification. */
  issuer: string;

  /** The display name of the issuer. */
  issuerDisplayName?: string;

  /** The handle of the issuer. */
  issuerHandle?: string;

  /** The AT-URI of the verification record. */
  uri: string;

  /** True if the verification passes validation, otherwise false. */
  isValid: boolean;

  /** Timestamp when the verification was created. */
  createdAt: string;
}

export interface AppBskyActorDefsViewerState {

  /** Whether the account is fully muted, directly or via a mutelist. False when the mute is scoped to specific kinds; see mutedOnlyReposts and mutedOnlyQuoteposts. */
  muted?: boolean;

  /** Whether the account's reposts are muted. Scoped mutes are exclusive with muted: this can be true while muted is false. If muted is true, this will be false. */
  mutedOnlyReposts?: boolean;

  /** Whether the account's quote posts are muted. Scoped mutes are exclusive with muted: this can be true while muted is false. If muted is true, this will be false. */
  mutedOnlyQuoteposts?: boolean;

  mutedByList?: AppBskyGraphDefsListViewBasic;

  blockedBy?: boolean;

  blocking?: string;

  blockingByList?: AppBskyGraphDefsListViewBasic;

  following?: string;

  followedBy?: string;

  /** This property is present only in selected cases, as an optimization. */
  knownFollowers?: AppBskyActorDefsKnownFollowers;

  /** This property is present only in selected cases, as an optimization. */
  activitySubscription?: AppBskyNotificationDefsActivitySubscription;
}

export interface AppBskyActorProfile {

  displayName?: string;

  /** Free-form profile description text. */
  description?: string;

  /** Free-form pronouns text. */
  pronouns?: string;

  website?: string;

  /** Small image to be displayed next to posts from account. AKA, 'profile picture' */
  avatar?: { ref: { $link: string }; mimeType?: string; size?: number };

  /** Larger horizontal image to display behind profile view. */
  banner?: { ref: { $link: string }; mimeType?: string; size?: number };

  /** Self-label values, specific to the Bluesky application, on the overall account. */
  labels?: ComAtprotoLabelDefsSelfLabels;

  joinedViaStarterPack?: ComAtprotoRepoStrongRef;

  pinnedPost?: ComAtprotoRepoStrongRef;

  createdAt?: string;
}

export interface AppBskyActorStatus {

  /** The status for the account. */
  status: string;

  /** An optional embed associated with the status. */
  embed?: AppBskyEmbedExternal;

  /** The duration of the status in minutes. Applications can choose to impose minimum and maximum limits. */
  durationMinutes?: number;

  createdAt: string;
}

export type AppBskyAgeassuranceDefsAccess = "unknown" | "none" | "safe" | "full";

export interface AppBskyAgeassuranceDefsConfig {

  /** The per-region Age Assurance configuration. */
  regions: AppBskyAgeassuranceDefsConfigRegion[];
}

export interface AppBskyAgeassuranceDefsConfigRegion {

  /** The platforms this configuration applies to. If omitted, the configuration applies to all platforms. */
  platforms?: string[];

  /** The ISO 3166-1 alpha-2 country code this configuration applies to. */
  countryCode: string;

  /** The ISO 3166-2 region code this configuration applies to. If omitted, the configuration applies to the entire country. */
  regionCode?: string;

  /** The minimum age (as a whole integer) required to use Bluesky in this region. */
  minAccessAge: number;

  /** Verification methods permitted in this region in addition to the third-party (KWS) flow, which is always supported. `device` permits using the native on-device age APIs (e.g. Apple Declared Age Range, Google Play Age Signals). */
  additionalVerificationMethods?: string[];

  /** The ordered list of Age Assurance rules that apply to this region. Rules should be applied in order, and the first matching rule determines the access level granted. The rules array should always include a default rule as the last item. */
  rules: AppBskyAgeassuranceDefsConfigRegionRuleDefault | AppBskyAgeassuranceDefsConfigRegionRuleIfDeclaredOverAge | AppBskyAgeassuranceDefsConfigRegionRuleIfDeclaredUnderAge | AppBskyAgeassuranceDefsConfigRegionRuleIfAssuredOverAge | AppBskyAgeassuranceDefsConfigRegionRuleIfAssuredUnderAge | AppBskyAgeassuranceDefsConfigRegionRuleIfAccountNewerThan | AppBskyAgeassuranceDefsConfigRegionRuleIfAccountOlderThan[];
}

export interface AppBskyAgeassuranceDefsConfigRegionRuleDefault {

  access: AppBskyAgeassuranceDefsAccess;
}

export interface AppBskyAgeassuranceDefsConfigRegionRuleIfAccountNewerThan {

  /** The date threshold as a datetime string. */
  date: string;

  access: AppBskyAgeassuranceDefsAccess;
}

export interface AppBskyAgeassuranceDefsConfigRegionRuleIfAccountOlderThan {

  /** The date threshold as a datetime string. */
  date: string;

  access: AppBskyAgeassuranceDefsAccess;
}

export interface AppBskyAgeassuranceDefsConfigRegionRuleIfAssuredOverAge {

  /** The age threshold as a whole integer. */
  age: number;

  access: AppBskyAgeassuranceDefsAccess;
}

export interface AppBskyAgeassuranceDefsConfigRegionRuleIfAssuredUnderAge {

  /** The age threshold as a whole integer. */
  age: number;

  access: AppBskyAgeassuranceDefsAccess;
}

export interface AppBskyAgeassuranceDefsConfigRegionRuleIfDeclaredOverAge {

  /** The age threshold as a whole integer. */
  age: number;

  access: AppBskyAgeassuranceDefsAccess;
}

export interface AppBskyAgeassuranceDefsConfigRegionRuleIfDeclaredUnderAge {

  /** The age threshold as a whole integer. */
  age: number;

  access: AppBskyAgeassuranceDefsAccess;
}

export interface AppBskyAgeassuranceDefsEvent {

  /** The date and time of this write operation. */
  createdAt: string;

  /** The unique identifier for this instance of the Age Assurance flow, in UUID format. */
  attemptId: string;

  /** The status of the Age Assurance process. */
  status: string;

  /** The access level granted based on Age Assurance data we've processed. */
  access: string;

  /** The ISO 3166-1 alpha-2 country code provided when beginning the Age Assurance flow. */
  countryCode: string;

  /** The ISO 3166-2 region code provided when beginning the Age Assurance flow. */
  regionCode?: string;

  /** The email used for Age Assurance. */
  email?: string;

  /** The IP address used when initiating the Age Assurance flow. */
  initIp?: string;

  /** The user agent used when initiating the Age Assurance flow. */
  initUa?: string;

  /** The IP address used when completing the Age Assurance flow. */
  completeIp?: string;

  /** The user agent used when completing the Age Assurance flow. */
  completeUa?: string;
}

export interface AppBskyAgeassuranceDefsState {

  /** The timestamp when this state was last updated. */
  lastInitiatedAt?: string;

  status: AppBskyAgeassuranceDefsStatus;

  access: AppBskyAgeassuranceDefsAccess;
}

export interface AppBskyAgeassuranceDefsStateMetadata {

  /** The account creation timestamp. */
  accountCreatedAt?: string;
}

export type AppBskyAgeassuranceDefsStatus = "unknown" | "pending" | "assured" | "blocked";

export interface AppBskyBookmarkDefsBookmark {

  /** A strong ref to the record to be bookmarked. Currently, only `app.bsky.feed.post` records are supported. */
  subject: ComAtprotoRepoStrongRef;
}

export interface AppBskyBookmarkDefsBookmarkView {

  /** A strong ref to the bookmarked record. */
  subject: ComAtprotoRepoStrongRef;

  createdAt?: string;

  item: AppBskyFeedDefsBlockedPost | AppBskyFeedDefsNotFoundPost | AppBskyFeedDefsPostView;
}

export interface AppBskyContactDefsMatchAndContactIndex {

  /** Profile of the matched user. */
  match: AppBskyActorDefsProfileView;

  /** The index of this match in the import contact input. */
  contactIndex: number;
}

export interface AppBskyContactDefsNotification {

  /** The DID of who this notification comes from. */
  from: string;

  /** The DID of who this notification should go to. */
  to: string;
}

export interface AppBskyContactDefsSyncStatus {

  /** Last date when contacts where imported. */
  syncedAt: string;

  /** Number of existing contact matches resulting of the user imports and of their imported contacts having imported the user. Matches stop being counted when the user either follows the matched contact or dismisses the match. */
  matchesCount: number;
}

export interface AppBskyDraftDefsDraft {

  /** UUIDv4 identifier of the device that created this draft. */
  deviceId?: string;

  /** The device and/or platform on which the draft was created. */
  deviceName?: string;

  /** Array of draft posts that compose this draft. */
  posts: AppBskyDraftDefsDraftPost[];

  /** Indicates human language of posts primary text content. */
  langs?: string[];

  /** Embedding rules for the postgates to be created when this draft is published. */
  postgateEmbeddingRules?: AppBskyFeedPostgateDisableRule[];

  /** Allow-rules for the threadgate to be created when this draft is published. */
  threadgateAllow?: AppBskyFeedThreadgateMentionRule | AppBskyFeedThreadgateFollowerRule | AppBskyFeedThreadgateFollowingRule | AppBskyFeedThreadgateListRule[];
}

export interface AppBskyDraftDefsDraftEmbedCaption {

  lang: string;

  content: string;
}

export interface AppBskyDraftDefsDraftEmbedExternal {

  uri: string;
}

export interface AppBskyDraftDefsDraftEmbedGallery {

  items: AppBskyDraftDefsDraftEmbedGalleryItems;
}

export type AppBskyDraftDefsDraftEmbedGalleryItems = AppBskyDraftDefsDraftEmbedImage[];

export interface AppBskyDraftDefsDraftEmbedImage {

  localRef: AppBskyDraftDefsDraftEmbedLocalRef;

  alt?: string;
}

export interface AppBskyDraftDefsDraftEmbedLocalRef {

  /** Local, on-device ref to file to be embedded. Embeds are currently device-bound for drafts. */
  path: string;
}

export interface AppBskyDraftDefsDraftEmbedRecord {

  record: ComAtprotoRepoStrongRef;
}

export interface AppBskyDraftDefsDraftEmbedVideo {

  localRef: AppBskyDraftDefsDraftEmbedLocalRef;

  alt?: string;

  captions?: AppBskyDraftDefsDraftEmbedCaption[];
}

export interface AppBskyDraftDefsDraftPost {

  /** The primary post content. It has a higher limit than post contents to allow storing a larger text that can later be refined into smaller posts. */
  text: string;

  /** Self-label values for this post. Effectively content warnings. */
  labels?: ComAtprotoLabelDefsSelfLabels;

  embedImages?: AppBskyDraftDefsDraftEmbedImage[];

  embedGallery?: AppBskyDraftDefsDraftEmbedGallery;

  embedVideos?: AppBskyDraftDefsDraftEmbedVideo[];

  embedExternals?: AppBskyDraftDefsDraftEmbedExternal[];

  embedRecords?: AppBskyDraftDefsDraftEmbedRecord[];
}

export interface AppBskyDraftDefsDraftView {

  /** A TID to be used as a draft identifier. */
  id: string;

  draft: AppBskyDraftDefsDraft;

  /** The time the draft was created. */
  createdAt: string;

  /** The time the draft was last updated. */
  updatedAt: string;
}

export interface AppBskyDraftDefsDraftWithId {

  /** A TID to be used as a draft identifier. */
  id: string;

  draft: AppBskyDraftDefsDraft;
}

export interface AppBskyEmbedDefsAspectRatio {

  width: number;

  height: number;
}

export interface AppBskyEmbedExternalColorRGB {

  r: number;

  g: number;

  b: number;
}

export interface AppBskyEmbedExternalExternal {

  uri: string;

  title: string;

  description: string;

  thumb?: { ref: { $link: string }; mimeType?: string; size?: number };

  /** StrongRefs (uri+cid) of the Atmosphere records that backed this view. */
  associatedRefs?: ComAtprotoRepoStrongRef[];
}

export interface AppBskyEmbedExternal {

  external: AppBskyEmbedExternalExternal;
}

export interface AppBskyEmbedExternalView {

  external: AppBskyEmbedExternalViewExternal;
}

export interface AppBskyEmbedExternalViewExternal {

  uri: string;

  title: string;

  description: string;

  thumb?: string;

  /** When the external content was created, if available. Example: a publication date, for an article. */
  createdAt?: string;

  /** When the external content was updated, if available. */
  updatedAt?: string;

  /** Estimated reading time in minutes, if applicable and available. */
  readingTime?: number;

  labels?: ComAtprotoLabelDefsLabel[];

  source?: AppBskyEmbedExternalViewExternalSource;

  /** StrongRefs (uri+cid) of the Atmosphere records that backed this view. */
  associatedRefs?: ComAtprotoRepoStrongRef[];

  /** Profiles of the owners of the Atmosphere records that backed this view. */
  associatedProfiles?: AppBskyActorDefsProfileViewBasic[];
}

export interface AppBskyEmbedExternalViewExternalSource {

  /** URI of the source, if available. Example: the https:// URL of a site.standard.publication record. */
  uri: string;

  /** Fully-qualified URL where an icon representing the source can be fetched. For example, CDN location provided by the App View. */
  icon?: string;

  title: string;

  description?: string;

  theme?: AppBskyEmbedExternalViewExternalSourceTheme;
}

export interface AppBskyEmbedExternalViewExternalSourceTheme {

  backgroundRGB?: AppBskyEmbedExternalColorRGB;

  foregroundRGB?: AppBskyEmbedExternalColorRGB;

  accentRGB?: AppBskyEmbedExternalColorRGB;

  accentForegroundRGB?: AppBskyEmbedExternalColorRGB;
}

export interface AppBskyEmbedGalleryImage {

  image: { ref: { $link: string }; mimeType?: string; size?: number };

  /** Alt text description of the image, for accessibility. */
  alt: string;

  aspectRatio: AppBskyEmbedDefsAspectRatio;
}

export interface AppBskyEmbedGallery {

  /** The schema-level maxLength of 20 is a future-proof ceiling. Clients should currently enforce a soft limit of 10 items in authoring UIs. */
  items: AppBskyEmbedGalleryImage[];
}

export interface AppBskyEmbedGalleryView {

  items: AppBskyEmbedGalleryViewImage[];
}

export interface AppBskyEmbedGalleryViewImage {

  /** Fully-qualified URL where a thumbnail of the image can be fetched. For example, CDN location provided by the App View. */
  thumbnail: string;

  /** Fully-qualified URL where a large version of the image can be fetched. May or may not be the exact original blob. For example, CDN location provided by the App View. */
  fullsize: string;

  /** Alt text description of the image, for accessibility. */
  alt: string;

  aspectRatio: AppBskyEmbedDefsAspectRatio;
}

export interface AppBskyEmbedImagesImage {

  /** The raw image file. May be up to 2 MB, formerly limited to 1 MB. */
  image: { ref: { $link: string }; mimeType?: string; size?: number };

  /** Alt text description of the image, for accessibility. */
  alt: string;

  aspectRatio?: AppBskyEmbedDefsAspectRatio;
}

export interface AppBskyEmbedImages {

  images: AppBskyEmbedImagesImage[];
}

export interface AppBskyEmbedImagesView {

  images: AppBskyEmbedImagesViewImage[];
}

export interface AppBskyEmbedImagesViewImage {

  /** Fully-qualified URL where a thumbnail of the image can be fetched. For example, CDN location provided by the App View. */
  thumb: string;

  /** Fully-qualified URL where a large version of the image can be fetched. May or may not be the exact original blob. For example, CDN location provided by the App View. */
  fullsize: string;

  /** Alt text description of the image, for accessibility. */
  alt: string;

  aspectRatio?: AppBskyEmbedDefsAspectRatio;
}

export interface AppBskyEmbedRecord {

  record: ComAtprotoRepoStrongRef;
}

export interface AppBskyEmbedRecordView {

  record: AppBskyEmbedRecordViewRecord | AppBskyEmbedRecordViewNotFound | AppBskyEmbedRecordViewBlocked | AppBskyEmbedRecordViewDetached | AppBskyFeedDefsGeneratorView | AppBskyGraphDefsListView | AppBskyLabelerDefsLabelerView | AppBskyGraphDefsStarterPackViewBasic;
}

export interface AppBskyEmbedRecordViewBlocked {

  uri: string;

  blocked: boolean;

  author: AppBskyFeedDefsBlockedAuthor;
}

export interface AppBskyEmbedRecordViewDetached {

  uri: string;

  detached: boolean;
}

export interface AppBskyEmbedRecordViewNotFound {

  uri: string;

  notFound: boolean;
}

export interface AppBskyEmbedRecordViewRecord {

  uri: string;

  cid: string;

  author: AppBskyActorDefsProfileViewBasic;

  /** The record data itself. */
  value: unknown;

  labels?: ComAtprotoLabelDefsLabel[];

  replyCount?: number;

  repostCount?: number;

  likeCount?: number;

  quoteCount?: number;

  embeds?: AppBskyEmbedImagesView | AppBskyEmbedVideoView | AppBskyEmbedGalleryView | AppBskyEmbedExternalView | AppBskyEmbedRecordView | AppBskyEmbedRecordWithMediaView[];

  indexedAt: string;
}

export interface AppBskyEmbedRecordWithMedia {

  record: AppBskyEmbedRecord;

  media: AppBskyEmbedImages | AppBskyEmbedVideo | AppBskyEmbedGallery | AppBskyEmbedExternal;
}

export interface AppBskyEmbedRecordWithMediaView {

  record: AppBskyEmbedRecordView;

  media: AppBskyEmbedImagesView | AppBskyEmbedVideoView | AppBskyEmbedGalleryView | AppBskyEmbedExternalView;
}

export interface AppBskyEmbedVideoCaption {

  lang: string;

  file: { ref: { $link: string }; mimeType?: string; size?: number };
}

export interface AppBskyEmbedVideo {

  /** The mp4 video file. May be up to 100mb, formerly limited to 50mb. */
  video: { ref: { $link: string }; mimeType?: string; size?: number };

  captions?: AppBskyEmbedVideoCaption[];

  /** Alt text description of the video, for accessibility. */
  alt?: string;

  aspectRatio?: AppBskyEmbedDefsAspectRatio;

  /** A hint to the client about how to present the video. */
  presentation?: string;
}

export interface AppBskyEmbedVideoView {

  cid: string;

  playlist: string;

  thumbnail?: string;

  alt?: string;

  aspectRatio?: AppBskyEmbedDefsAspectRatio;

  /** A hint to the client about how to present the video. */
  presentation?: string;
}

export interface AppBskyFeedDefsBlockedAuthor {

  did: string;

  viewer?: AppBskyActorDefsViewerState;
}

export interface AppBskyFeedDefsBlockedPost {

  uri: string;

  blocked: boolean;

  author: AppBskyFeedDefsBlockedAuthor;
}

export interface AppBskyFeedDefsFeedViewPost {

  post: AppBskyFeedDefsPostView;

  reply?: AppBskyFeedDefsReplyRef;

  reason?: AppBskyFeedDefsReasonRepost | AppBskyFeedDefsReasonPin;

  /** Context provided by feed generator that may be passed back alongside interactions. */
  feedContext?: string;

  /** Unique identifier per request that may be passed back alongside interactions. */
  reqId?: string;
}

export interface AppBskyFeedDefsGeneratorView {

  uri: string;

  cid: string;

  did: string;

  creator: AppBskyActorDefsProfileView;

  displayName: string;

  description?: string;

  descriptionFacets?: AppBskyRichtextFacet[];

  avatar?: string;

  likeCount?: number;

  acceptsInteractions?: boolean;

  labels?: ComAtprotoLabelDefsLabel[];

  viewer?: AppBskyFeedDefsGeneratorViewerState;

  contentMode?: string;

  indexedAt: string;
}

export interface AppBskyFeedDefsGeneratorViewerState {

  like?: string;
}

export interface AppBskyFeedDefsInteraction {

  item?: string;

  event?: string;

  /** Context on a feed item that was originally supplied by the feed generator on getFeedSkeleton. */
  feedContext?: string;

  /** Unique identifier per request that may be passed back alongside interactions. */
  reqId?: string;
}

export interface AppBskyFeedDefsNotFoundPost {

  uri: string;

  notFound: boolean;
}

export interface AppBskyFeedDefsPostView {

  uri: string;

  cid: string;

  author: AppBskyActorDefsProfileViewBasic;

  record: unknown;

  embed?: AppBskyEmbedImagesView | AppBskyEmbedVideoView | AppBskyEmbedGalleryView | AppBskyEmbedExternalView | AppBskyEmbedRecordView | AppBskyEmbedRecordWithMediaView;

  bookmarkCount?: number;

  replyCount?: number;

  repostCount?: number;

  likeCount?: number;

  quoteCount?: number;

  indexedAt: string;

  viewer?: AppBskyFeedDefsViewerState;

  labels?: ComAtprotoLabelDefsLabel[];

  threadgate?: AppBskyFeedDefsThreadgateView;

  /** Debug information for internal development */
  debug?: unknown;
}

export type AppBskyFeedDefsReasonPin = Record<string, unknown>;

export interface AppBskyFeedDefsReasonRepost {

  by: AppBskyActorDefsProfileViewBasic;

  uri?: string;

  cid?: string;

  indexedAt: string;
}

export interface AppBskyFeedDefsReplyRef {

  root: AppBskyFeedDefsPostView | AppBskyFeedDefsNotFoundPost | AppBskyFeedDefsBlockedPost;

  parent: AppBskyFeedDefsPostView | AppBskyFeedDefsNotFoundPost | AppBskyFeedDefsBlockedPost;

  /** When parent is a reply to another post, this is the author of that post. */
  grandparentAuthor?: AppBskyActorDefsProfileViewBasic;
}

export interface AppBskyFeedDefsSkeletonFeedPost {

  post: string;

  reason?: AppBskyFeedDefsSkeletonReasonRepost | AppBskyFeedDefsSkeletonReasonPin;

  /** Context that will be passed through to client and may be passed to feed generator back alongside interactions. */
  feedContext?: string;
}

export type AppBskyFeedDefsSkeletonReasonPin = Record<string, unknown>;

export interface AppBskyFeedDefsSkeletonReasonRepost {

  repost: string;
}

export interface AppBskyFeedDefsThreadContext {

  rootAuthorLike?: string;
}

export interface AppBskyFeedDefsThreadViewPost {

  post: AppBskyFeedDefsPostView;

  parent?: AppBskyFeedDefsThreadViewPost | AppBskyFeedDefsNotFoundPost | AppBskyFeedDefsBlockedPost;

  replies?: AppBskyFeedDefsThreadViewPost | AppBskyFeedDefsNotFoundPost | AppBskyFeedDefsBlockedPost[];

  threadContext?: AppBskyFeedDefsThreadContext;
}

export interface AppBskyFeedDefsThreadgateView {

  uri?: string;

  cid?: string;

  record?: unknown;

  lists?: AppBskyGraphDefsListViewBasic[];
}

export interface AppBskyFeedDefsViewerState {

  repost?: string;

  like?: string;

  bookmarked?: boolean;

  threadMuted?: boolean;

  replyDisabled?: boolean;

  embeddingDisabled?: boolean;

  pinned?: boolean;
}

export interface AppBskyFeedDescribeFeedGeneratorFeed {

  uri: string;
}

export interface AppBskyFeedDescribeFeedGeneratorLinks {

  privacyPolicy?: string;

  termsOfService?: string;
}

export interface AppBskyFeedGenerator {

  did: string;

  displayName: string;

  description?: string;

  descriptionFacets?: AppBskyRichtextFacet[];

  avatar?: { ref: { $link: string }; mimeType?: string; size?: number };

  /** Declaration that a feed accepts feedback interactions from a client through app.bsky.feed.sendInteractions */
  acceptsInteractions?: boolean;

  /** Self-label values */
  labels?: ComAtprotoLabelDefsSelfLabels;

  contentMode?: string;

  createdAt: string;
}

export interface AppBskyFeedGetLikesLike {

  indexedAt: string;

  createdAt: string;

  actor: AppBskyActorDefsProfileView;
}

export interface AppBskyFeedLike {

  subject: ComAtprotoRepoStrongRef;

  createdAt: string;

  via?: ComAtprotoRepoStrongRef;
}

export interface AppBskyFeedPostEntity {

  index: AppBskyFeedPostTextSlice;

  /** Expected values are 'mention' and 'link'. */
  type: string;

  value: string;
}

export interface AppBskyFeedPost {

  /** The primary post content. May be an empty string, if there are embeds. */
  text: string;

  /** DEPRECATED: replaced by app.bsky.richtext.facet. */
  entities?: AppBskyFeedPostEntity[];

  /** Annotations of text (mentions, URLs, hashtags, etc) */
  facets?: AppBskyRichtextFacet[];

  reply?: AppBskyFeedPostReplyRef;

  embed?: AppBskyEmbedImages | AppBskyEmbedVideo | AppBskyEmbedGallery | AppBskyEmbedExternal | AppBskyEmbedRecord | AppBskyEmbedRecordWithMedia;

  /** Indicates human language of post primary text content. */
  langs?: string[];

  /** Self-label values for this post. Effectively content warnings. */
  labels?: ComAtprotoLabelDefsSelfLabels;

  /** Additional hashtags, in addition to any included in post text and facets. */
  tags?: string[];

  /** Client-declared timestamp when this post was originally created. */
  createdAt: string;
}

export interface AppBskyFeedPostReplyRef {

  root: ComAtprotoRepoStrongRef;

  parent: ComAtprotoRepoStrongRef;
}

export interface AppBskyFeedPostTextSlice {

  start: number;

  end: number;
}

export type AppBskyFeedPostgateDisableRule = Record<string, unknown>;

export interface AppBskyFeedPostgate {

  createdAt: string;

  /** Reference (AT-URI) to the post record. */
  post: string;

  /** List of AT-URIs embedding this post that the author has detached from. */
  detachedEmbeddingUris?: string[];

  /** List of rules defining who can embed this post. If value is an empty array or is undefined, no particular rules apply and anyone can embed. */
  embeddingRules?: AppBskyFeedPostgateDisableRule[];
}

export interface AppBskyFeedRepost {

  subject: ComAtprotoRepoStrongRef;

  createdAt: string;

  via?: ComAtprotoRepoStrongRef;
}

export type AppBskyFeedThreadgateFollowerRule = Record<string, unknown>;

export type AppBskyFeedThreadgateFollowingRule = Record<string, unknown>;

export interface AppBskyFeedThreadgateListRule {

  list: string;
}

export interface AppBskyFeedThreadgate {

  /** Reference (AT-URI) to the post record. */
  post: string;

  /** List of rules defining who can reply to this post. If value is an empty array, no one can reply. If value is undefined, anyone can reply. */
  allow?: AppBskyFeedThreadgateMentionRule | AppBskyFeedThreadgateFollowerRule | AppBskyFeedThreadgateFollowingRule | AppBskyFeedThreadgateListRule[];

  createdAt: string;

  /** List of hidden reply URIs. */
  hiddenReplies?: string[];
}

export type AppBskyFeedThreadgateMentionRule = Record<string, unknown>;

export interface AppBskyGraphBlock {

  /** DID of the account to be blocked. */
  subject: string;

  createdAt: string;
}

export interface AppBskyGraphDefsListItemView {

  uri: string;

  subject: AppBskyActorDefsProfileView;
}

export type AppBskyGraphDefsListPurpose = "app.bsky.graph.defs#modlist" | "app.bsky.graph.defs#curatelist" | "app.bsky.graph.defs#referencelist";

export interface AppBskyGraphDefsListView {

  uri: string;

  cid: string;

  creator: AppBskyActorDefsProfileView;

  name: string;

  purpose: AppBskyGraphDefsListPurpose;

  description?: string;

  descriptionFacets?: AppBskyRichtextFacet[];

  avatar?: string;

  listItemCount?: number;

  labels?: ComAtprotoLabelDefsLabel[];

  viewer?: AppBskyGraphDefsListViewerState;

  indexedAt: string;
}

export interface AppBskyGraphDefsListViewBasic {

  uri: string;

  cid: string;

  name: string;

  purpose: AppBskyGraphDefsListPurpose;

  avatar?: string;

  listItemCount?: number;

  labels?: ComAtprotoLabelDefsLabel[];

  viewer?: AppBskyGraphDefsListViewerState;

  indexedAt?: string;
}

export interface AppBskyGraphDefsListViewerState {

  muted?: boolean;

  blocked?: string;
}

export interface AppBskyGraphDefsNotFoundActor {

  actor: string;

  notFound: boolean;
}

export interface AppBskyGraphDefsRelationship {

  did: string;

  /** if the actor follows this DID, this is the AT-URI of the follow record */
  following?: string;

  /** if the actor is followed by this DID, contains the AT-URI of the follow record */
  followedBy?: string;

  /** if the actor blocks this DID, this is the AT-URI of the block record */
  blocking?: string;

  /** if the actor is blocked by this DID, contains the AT-URI of the block record */
  blockedBy?: string;

  /** if the actor blocks this DID via a block list, this is the AT-URI of the listblock record */
  blockingByList?: string;

  /** if the actor is blocked by this DID via a block list, contains the AT-URI of the listblock record */
  blockedByList?: string;
}

export interface AppBskyGraphDefsStarterPackView {

  uri: string;

  cid: string;

  record: unknown;

  creator: AppBskyActorDefsProfileViewBasic;

  list?: AppBskyGraphDefsListViewBasic;

  listItemsSample?: AppBskyGraphDefsListItemView[];

  feeds?: AppBskyFeedDefsGeneratorView[];

  joinedWeekCount?: number;

  joinedAllTimeCount?: number;

  labels?: ComAtprotoLabelDefsLabel[];

  indexedAt: string;
}

export interface AppBskyGraphDefsStarterPackViewBasic {

  uri: string;

  cid: string;

  record: unknown;

  creator: AppBskyActorDefsProfileViewBasic;

  listItemCount?: number;

  joinedWeekCount?: number;

  joinedAllTimeCount?: number;

  labels?: ComAtprotoLabelDefsLabel[];

  indexedAt: string;
}

export interface AppBskyGraphFollow {

  subject: string;

  createdAt: string;

  via?: ComAtprotoRepoStrongRef;
}

export interface AppBskyGraphGetListsWithMembershipListWithMembership {

  list: AppBskyGraphDefsListView;

  listItem?: AppBskyGraphDefsListItemView;
}

export interface AppBskyGraphGetStarterPacksWithMembershipStarterPackWithMembership {

  starterPack: AppBskyGraphDefsStarterPackView;

  listItem?: AppBskyGraphDefsListItemView;
}

export interface AppBskyGraphList {

  /** Defines the purpose of the list (aka, moderation-oriented or curration-oriented) */
  purpose: AppBskyGraphDefsListPurpose;

  /** Display name for list; can not be empty. */
  name: string;

  description?: string;

  descriptionFacets?: AppBskyRichtextFacet[];

  avatar?: { ref: { $link: string }; mimeType?: string; size?: number };

  labels?: ComAtprotoLabelDefsSelfLabels;

  createdAt: string;
}

export interface AppBskyGraphListblock {

  /** Reference (AT-URI) to the mod list record. */
  subject: string;

  createdAt: string;
}

export interface AppBskyGraphListitem {

  /** The account which is included on the list. */
  subject: string;

  /** Reference (AT-URI) to the list record (app.bsky.graph.list). */
  list: string;

  createdAt: string;
}

export interface AppBskyGraphStarterpackFeedItem {

  uri: string;
}

export interface AppBskyGraphStarterpack {

  /** Display name for starter pack; can not be empty. */
  name: string;

  description?: string;

  descriptionFacets?: AppBskyRichtextFacet[];

  /** Reference (AT-URI) to the list record. */
  list: string;

  feeds?: AppBskyGraphStarterpackFeedItem[];

  createdAt: string;
}

export interface AppBskyGraphVerification {

  /** DID of the subject the verification applies to. */
  subject: string;

  /** Handle of the subject the verification applies to at the moment of verifying, which might not be the same at the time of viewing. The verification is only valid if the current handle matches the one at the time of verifying. */
  handle: string;

  /** Display name of the subject the verification applies to at the moment of verifying, which might not be the same at the time of viewing. The verification is only valid if the current displayName matches the one at the time of verifying. */
  displayName: string;

  /** Date of when the verification was created. */
  createdAt: string;
}

export interface AppBskyLabelerDefsLabelerPolicies {

  /** The label values which this labeler publishes. May include global or custom labels. */
  labelValues: ComAtprotoLabelDefsLabelValue[];

  /** Label values created by this labeler and scoped exclusively to it. Labels defined here will override global label definitions for this labeler. */
  labelValueDefinitions?: ComAtprotoLabelDefsLabelValueDefinition[];
}

export interface AppBskyLabelerDefsLabelerView {

  uri: string;

  cid: string;

  creator: AppBskyActorDefsProfileView;

  likeCount?: number;

  viewer?: AppBskyLabelerDefsLabelerViewerState;

  indexedAt: string;

  labels?: ComAtprotoLabelDefsLabel[];
}

export interface AppBskyLabelerDefsLabelerViewDetailed {

  uri: string;

  cid: string;

  creator: AppBskyActorDefsProfileView;

  policies: AppBskyLabelerDefsLabelerPolicies;

  likeCount?: number;

  viewer?: AppBskyLabelerDefsLabelerViewerState;

  indexedAt: string;

  labels?: ComAtprotoLabelDefsLabel[];

  /** The set of report reason 'codes' which are in-scope for this service to review and action. These usually align to policy categories. If not defined (distinct from empty array), all reason types are allowed. */
  reasonTypes?: ComAtprotoModerationDefsReasonType[];

  /** The set of subject types (account, record, etc) this service accepts reports on. */
  subjectTypes?: ComAtprotoModerationDefsSubjectType[];

  /** Set of record types (collection NSIDs) which can be reported to this service. If not defined (distinct from empty array), default is any record type. */
  subjectCollections?: string[];
}

export interface AppBskyLabelerDefsLabelerViewerState {

  like?: string;
}

export interface AppBskyLabelerService {

  policies: AppBskyLabelerDefsLabelerPolicies;

  labels?: ComAtprotoLabelDefsSelfLabels;

  createdAt: string;

  /** The set of report reason 'codes' which are in-scope for this service to review and action. These usually align to policy categories. If not defined (distinct from empty array), all reason types are allowed. */
  reasonTypes?: ComAtprotoModerationDefsReasonType[];

  /** The set of subject types (account, record, etc) this service accepts reports on. */
  subjectTypes?: ComAtprotoModerationDefsSubjectType[];

  /** Set of record types (collection NSIDs) which can be reported to this service. If not defined (distinct from empty array), default is any record type. */
  subjectCollections?: string[];
}

export interface AppBskyNotificationDeclaration {

  /** A declaration of the user's preference for allowing activity subscriptions from other users. Absence of a record implies 'followers'. */
  allowSubscriptions: string;
}

export interface AppBskyNotificationDefsActivitySubscription {

  post: boolean;

  reply: boolean;
}

export interface AppBskyNotificationDefsChatPreference {

  include: string;

  push: boolean;
}

export interface AppBskyNotificationDefsFilterablePreference {

  include: string;

  list: boolean;

  push: boolean;
}

export interface AppBskyNotificationDefsPreference {

  list: boolean;

  push: boolean;
}

export interface AppBskyNotificationDefsPreferences {

  /** Deprecated: use chat.bsky.notification preferences instead. This will only return a default value. */
  chat: AppBskyNotificationDefsChatPreference;

  follow: AppBskyNotificationDefsFilterablePreference;

  like: AppBskyNotificationDefsFilterablePreference;

  likeViaRepost: AppBskyNotificationDefsFilterablePreference;

  mention: AppBskyNotificationDefsFilterablePreference;

  quote: AppBskyNotificationDefsFilterablePreference;

  reply: AppBskyNotificationDefsFilterablePreference;

  repost: AppBskyNotificationDefsFilterablePreference;

  repostViaRepost: AppBskyNotificationDefsFilterablePreference;

  starterpackJoined: AppBskyNotificationDefsPreference;

  subscribedPost: AppBskyNotificationDefsPreference;

  unverified: AppBskyNotificationDefsPreference;

  verified: AppBskyNotificationDefsPreference;
}

export type AppBskyNotificationDefsRecordDeleted = Record<string, unknown>;

export interface AppBskyNotificationDefsSubjectActivitySubscription {

  subject: string;

  activitySubscription: AppBskyNotificationDefsActivitySubscription;
}

export interface AppBskyNotificationListNotificationsNotification {

  uri: string;

  cid: string;

  author: AppBskyActorDefsProfileView;

  /** The reason why this notification was delivered - e.g. your post was liked, or you received a new follower. */
  reason: string;

  reasonSubject?: string;

  record: unknown;

  /** The starter pack associated with this notification. Present when the notification is for a follow originating from a starter pack. */
  starterPack?: AppBskyGraphDefsStarterPackViewBasic;

  isRead: boolean;

  indexedAt: string;

  labels?: ComAtprotoLabelDefsLabel[];
}

export interface AppBskyRichtextFacetByteSlice {

  byteStart: number;

  byteEnd: number;
}

export interface AppBskyRichtextFacetLink {

  uri: string;
}

export interface AppBskyRichtextFacet {

  index: AppBskyRichtextFacetByteSlice;

  features: AppBskyRichtextFacetMention | AppBskyRichtextFacetLink | AppBskyRichtextFacetTag[];
}

export interface AppBskyRichtextFacetMention {

  did: string;
}

export interface AppBskyRichtextFacetTag {

  tag: string;
}

export interface AppBskyUnspeccedDefsAgeAssuranceEvent {

  /** The date and time of this write operation. */
  createdAt: string;

  /** The status of the age assurance process. */
  status: string;

  /** The unique identifier for this instance of the age assurance flow, in UUID format. */
  attemptId: string;

  /** The email used for AA. */
  email?: string;

  /** The IP address used when initiating the AA flow. */
  initIp?: string;

  /** The user agent used when initiating the AA flow. */
  initUa?: string;

  /** The IP address used when completing the AA flow. */
  completeIp?: string;

  /** The user agent used when completing the AA flow. */
  completeUa?: string;
}

export interface AppBskyUnspeccedDefsAgeAssuranceState {

  /** The timestamp when this state was last updated. */
  lastInitiatedAt?: string;

  /** The status of the age assurance process. */
  status: string;
}

export interface AppBskyUnspeccedDefsSkeletonSearchActor {

  did: string;
}

export interface AppBskyUnspeccedDefsSkeletonSearchPost {

  uri: string;
}

export interface AppBskyUnspeccedDefsSkeletonSearchStarterPack {

  uri: string;
}

export interface AppBskyUnspeccedDefsSkeletonTrend {

  topic: string;

  displayName: string;

  description?: string;

  link: string;

  startedAt: string;

  postCount: number;

  status?: string;

  category?: string;

  dids: string[];
}

export interface AppBskyUnspeccedDefsThreadItemBlocked {

  author: AppBskyFeedDefsBlockedAuthor;
}

export type AppBskyUnspeccedDefsThreadItemNoUnauthenticated = Record<string, unknown>;

export type AppBskyUnspeccedDefsThreadItemNotFound = Record<string, unknown>;

export interface AppBskyUnspeccedDefsThreadItemPost {

  post: AppBskyFeedDefsPostView;

  /** This post has more parents that were not present in the response. This is just a boolean, without the number of parents. */
  moreParents: boolean;

  /** This post has more replies that were not present in the response. This is a numeric value, which is best-effort and might not be accurate. */
  moreReplies: number;

  /** This post is part of a contiguous thread by the OP from the thread root. Sub-threads by OP deeper in the tree are not considered an OP thread. */
  opThread: boolean;

  /** The 1-indexed position of this post within the contiguous OP thread. Only present when this post is part of the OP thread (see `opThread`). */
  opThreadPostIndex?: number;

  /** The total number of posts in the contiguous OP thread that this post belongs to. Only present when this post is part of the OP thread (see `opThread`). */
  opThreadPostCount?: number;

  /** The threadgate created by the author indicates this post as a reply to be hidden for everyone consuming the thread. */
  hiddenByThreadgate: boolean;

  /** This is by an account muted by the viewer requesting it. */
  mutedByViewer: boolean;
}

export interface AppBskyUnspeccedDefsTrendView {

  topic: string;

  displayName: string;

  description?: string;

  link: string;

  startedAt: string;

  postCount: number;

  status?: string;

  category?: string;

  actors: AppBskyActorDefsProfileViewBasic[];
}

export interface AppBskyUnspeccedDefsTrendingTopic {

  topic: string;

  displayName?: string;

  description?: string;

  link: string;
}

export interface AppBskyUnspeccedGetConfigLiveNowConfig {

  did: string;

  domains: string[];
}

export interface AppBskyUnspeccedGetPostThreadOtherV2ThreadItem {

  uri: string;

  /** The nesting level of this item in the thread. Depth 0 means the anchor item. Items above have negative depths, items below have positive depths. */
  depth: number;

  value: AppBskyUnspeccedDefsThreadItemPost;
}

export interface AppBskyUnspeccedGetPostThreadV2ThreadItem {

  uri: string;

  /** The nesting level of this item in the thread. Depth 0 means the anchor item. Items above have negative depths, items below have positive depths. */
  depth: number;

  value: AppBskyUnspeccedDefsThreadItemPost | AppBskyUnspeccedDefsThreadItemNoUnauthenticated | AppBskyUnspeccedDefsThreadItemNotFound | AppBskyUnspeccedDefsThreadItemBlocked;
}

export interface AppBskyUnspeccedGetTaggedSuggestionsSuggestion {

  tag: string;

  subjectType: string;

  subject: string;
}

export interface AppBskyVideoDefsJobStatus {

  jobId: string;

  did: string;

  /** The state of the video processing job. All values not listed as a known value indicate that the job is in process. */
  state: string;

  /** Progress within the current processing state. */
  progress?: number;

  blob?: { ref: { $link: string }; mimeType?: string; size?: number };

  error?: string;

  /** A machine-readable code for why the video processing job failed. */
  failureCode?: string;

  message?: string;
}

export interface ComAtprotoAdminDefsAccountView {

  did: string;

  handle: string;

  email?: string;

  relatedRecords?: unknown[];

  indexedAt: string;

  invitedBy?: ComAtprotoServerDefsInviteCode;

  invites?: ComAtprotoServerDefsInviteCode[];

  invitesDisabled?: boolean;

  emailConfirmedAt?: string;

  inviteNote?: string;

  deactivatedAt?: string;

  threatSignatures?: ComAtprotoAdminDefsThreatSignature[];
}

export interface ComAtprotoAdminDefsRepoBlobRef {

  did: string;

  cid: string;

  recordUri?: string;
}

export interface ComAtprotoAdminDefsRepoRef {

  did: string;
}

export interface ComAtprotoAdminDefsStatusAttr {

  applied: boolean;

  ref?: string;
}

export interface ComAtprotoAdminDefsThreatSignature {

  property: string;

  value: string;
}

export interface ComAtprotoIdentityDefsIdentityInfo {

  did: string;

  /** The validated handle of the account; or 'handle.invalid' if the handle did not bi-directionally match the DID document. */
  handle: string;

  /** The complete DID document for the identity. */
  didDoc: unknown;
}

export interface ComAtprotoLabelDefsLabel {

  /** The AT Protocol version of the label object. */
  ver?: number;

  /** DID of the actor who created this label. */
  src: string;

  /** AT URI of the record, repository (account), or other resource that this label applies to. */
  uri: string;

  /** Optionally, CID specifying the specific version of 'uri' resource this label applies to. */
  cid?: string;

  /** The short string name of the value or type of this label. */
  val: string;

  /** If true, this is a negation label, overwriting a previous label. */
  neg?: boolean;

  /** Timestamp when this label was created. */
  cts: string;

  /** Timestamp at which this label expires (no longer applies). */
  exp?: string;

  /** Signature of dag-cbor encoded label. */
  sig?: string;
}

export type ComAtprotoLabelDefsLabelValue = "!hide" | "!warn" | "!no-unauthenticated" | "porn" | "sexual" | "nudity" | "graphic-media" | "bot";

export interface ComAtprotoLabelDefsLabelValueDefinition {

  /** The value of the label being defined. Must only include lowercase ascii and the '-' character ([a-z-]+). */
  identifier: string;

  /** How should a client visually convey this label? 'inform' means neutral and informational; 'alert' means negative and warning; 'none' means show nothing. */
  severity: string;

  /** What should this label hide in the UI, if applied? 'content' hides all of the target; 'media' hides the images/video/audio; 'none' hides nothing. */
  blurs: string;

  /** The default setting for this label. */
  defaultSetting?: string;

  /** Does the user need to have adult content enabled in order to configure this label? */
  adultOnly?: boolean;

  locales: ComAtprotoLabelDefsLabelValueDefinitionStrings[];
}

export interface ComAtprotoLabelDefsLabelValueDefinitionStrings {

  /** The code of the language these strings are written in. */
  lang: string;

  /** A short human-readable name for the label. */
  name: string;

  /** A longer description of what the label means and why it might be applied. */
  description: string;
}

export interface ComAtprotoLabelDefsSelfLabel {

  /** The short string name of the value or type of this label. */
  val: string;
}

export interface ComAtprotoLabelDefsSelfLabels {

  values: ComAtprotoLabelDefsSelfLabel[];
}

export interface ComAtprotoLabelSubscribeLabelsInfo {

  name: string;

  message?: string;
}

export interface ComAtprotoLabelSubscribeLabelsLabels {

  seq: number;

  labels: ComAtprotoLabelDefsLabel[];
}

export interface ComAtprotoLexiconSchema {

  /** Indicates the 'version' of the Lexicon language. Must be '1' for the current atproto/Lexicon schema system. */
  lexicon: number;
}

export interface ComAtprotoModerationCreateReportModTool {

  /** Name/identifier of the source (e.g., 'bsky-app/android', 'bsky-web/chrome') */
  name: string;

  /** Additional arbitrary metadata about the source */
  meta?: unknown;
}

export type ComAtprotoModerationDefsReasonType = "com.atproto.moderation.defs#reasonSpam" | "com.atproto.moderation.defs#reasonViolation" | "com.atproto.moderation.defs#reasonMisleading" | "com.atproto.moderation.defs#reasonSexual" | "com.atproto.moderation.defs#reasonRude" | "com.atproto.moderation.defs#reasonOther" | "com.atproto.moderation.defs#reasonAppeal" | "tools.ozone.report.defs#reasonAppeal" | "tools.ozone.report.defs#reasonOther" | "tools.ozone.report.defs#reasonViolenceAnimal" | "tools.ozone.report.defs#reasonViolenceThreats" | "tools.ozone.report.defs#reasonViolenceGraphicContent" | "tools.ozone.report.defs#reasonViolenceGlorification" | "tools.ozone.report.defs#reasonViolenceExtremistContent" | "tools.ozone.report.defs#reasonViolenceTrafficking" | "tools.ozone.report.defs#reasonViolenceOther" | "tools.ozone.report.defs#reasonSexualAbuseContent" | "tools.ozone.report.defs#reasonSexualNCII" | "tools.ozone.report.defs#reasonSexualDeepfake" | "tools.ozone.report.defs#reasonSexualAnimal" | "tools.ozone.report.defs#reasonSexualUnlabeled" | "tools.ozone.report.defs#reasonSexualOther" | "tools.ozone.report.defs#reasonChildSafetyCSAM" | "tools.ozone.report.defs#reasonChildSafetyGroom" | "tools.ozone.report.defs#reasonChildSafetyPrivacy" | "tools.ozone.report.defs#reasonChildSafetyHarassment" | "tools.ozone.report.defs#reasonChildSafetyOther" | "tools.ozone.report.defs#reasonHarassmentTroll" | "tools.ozone.report.defs#reasonHarassmentTargeted" | "tools.ozone.report.defs#reasonHarassmentHateSpeech" | "tools.ozone.report.defs#reasonHarassmentDoxxing" | "tools.ozone.report.defs#reasonHarassmentOther" | "tools.ozone.report.defs#reasonMisleadingBot" | "tools.ozone.report.defs#reasonMisleadingImpersonation" | "tools.ozone.report.defs#reasonMisleadingSpam" | "tools.ozone.report.defs#reasonMisleadingScam" | "tools.ozone.report.defs#reasonMisleadingElections" | "tools.ozone.report.defs#reasonMisleadingOther" | "tools.ozone.report.defs#reasonRuleSiteSecurity" | "tools.ozone.report.defs#reasonRuleProhibitedSales" | "tools.ozone.report.defs#reasonRuleBanEvasion" | "tools.ozone.report.defs#reasonRuleOther" | "tools.ozone.report.defs#reasonSelfHarmContent" | "tools.ozone.report.defs#reasonSelfHarmED" | "tools.ozone.report.defs#reasonSelfHarmStunts" | "tools.ozone.report.defs#reasonSelfHarmSubstances" | "tools.ozone.report.defs#reasonSelfHarmOther";

export type ComAtprotoModerationDefsSubjectType = "account" | "record" | "chat";

export interface ComAtprotoRepoApplyWritesCreate {

  collection: string;

  /** NOTE: maxLength is redundant with record-key format. Keeping it temporarily to ensure backwards compatibility. */
  rkey?: string;

  value: unknown;
}

export interface ComAtprotoRepoApplyWritesCreateResult {

  uri: string;

  cid: string;

  validationStatus?: string;
}

export interface ComAtprotoRepoApplyWritesDelete {

  collection: string;

  rkey: string;
}

export type ComAtprotoRepoApplyWritesDeleteResult = Record<string, unknown>;

export interface ComAtprotoRepoApplyWritesUpdate {

  collection: string;

  rkey: string;

  value: unknown;
}

export interface ComAtprotoRepoApplyWritesUpdateResult {

  uri: string;

  cid: string;

  validationStatus?: string;
}

export interface ComAtprotoRepoDefsCommitMeta {

  cid: string;

  rev: string;
}

export interface ComAtprotoRepoDefsStrongRef {

  uri: string;

  cid: string;
}

export interface ComAtprotoRepoListMissingBlobsRecordBlob {

  cid: string;

  recordUri: string;
}

export interface ComAtprotoRepoListRecordsRecord {

  uri: string;

  cid: string;

  value: unknown;
}

export interface ComAtprotoRepoStrongRef {

  uri: string;

  cid: string;
}

export interface ComAtprotoServerCreateAppPasswordAppPassword {

  name: string;

  password: string;

  createdAt: string;

  privileged?: boolean;
}

export interface ComAtprotoServerCreateInviteCodesAccountCodes {

  account: string;

  codes: string[];
}

export interface ComAtprotoServerDefsInviteCode {

  code: string;

  available: number;

  disabled: boolean;

  forAccount: string;

  createdBy: string;

  createdAt: string;

  uses: ComAtprotoServerDefsInviteCodeUse[];
}

export interface ComAtprotoServerDefsInviteCodeUse {

  usedBy: string;

  usedAt: string;
}

export interface ComAtprotoServerDescribeServerContact {

  email?: string;
}

export interface ComAtprotoServerDescribeServerLinks {

  privacyPolicy?: string;

  termsOfService?: string;
}

export interface ComAtprotoServerListAppPasswordsAppPassword {

  name: string;

  createdAt: string;

  privileged?: boolean;
}

export type ComAtprotoSyncDefsHostStatus = "active" | "idle" | "offline" | "throttled" | "banned";

export interface ComAtprotoSyncListHostsHost {

  /** hostname of server; not a URL (no scheme) */
  hostname: string;

  /** Recent repo stream event sequence number. May be delayed from actual stream processing (eg, persisted cursor not in-memory cursor). */
  seq?: number;

  accountCount?: number;

  status?: ComAtprotoSyncDefsHostStatus;
}

export interface ComAtprotoSyncListReposRepo {

  did: string;

  /** Current repo commit CID */
  head: string;

  rev: string;

  active?: boolean;

  /** If active=false, this optional field indicates a possible reason for why the account is not active. If active=false and no status is supplied, then the host makes no claim for why the repository is no longer being hosted. */
  status?: string;
}

export interface ComAtprotoSyncListReposByCollectionRepo {

  did: string;
}

export interface ComAtprotoSyncSubscribeReposAccount {

  seq: number;

  did: string;

  time: string;

  /** Indicates that the account has a repository which can be fetched from the host that emitted this event. */
  active: boolean;

  /** If active=false, this optional field indicates a reason for why the account is not active. */
  status?: string;
}

export interface ComAtprotoSyncSubscribeReposCommit {

  /** The stream sequence number of this message. */
  seq: number;

  /** DEPRECATED -- unused */
  rebase: boolean;

  /** DEPRECATED -- replaced by #sync event and data limits. Indicates that this commit contained too many ops, or data size was too large. Consumers will need to make a separate request to get missing data. */
  tooBig: boolean;

  /** The repo this event comes from. Note that all other message types name this field 'did'. */
  repo: string;

  /** Repo commit object CID. */
  commit: string;

  /** The rev of the emitted commit. Note that this information is also in the commit object included in blocks, unless this is a tooBig event. */
  rev: string;

  /** The rev of the last emitted commit from this repo (if any). */
  since: string;

  /** CAR file containing relevant blocks, as a diff since the previous repo state. The commit must be included as a block, and the commit block CID must be the first entry in the CAR header 'roots' list. */
  blocks: string;

  ops: ComAtprotoSyncSubscribeReposRepoOp[];

  blobs: string[];

  /** The root CID of the MST tree for the previous commit from this repo (indicated by the 'since' revision field in this message). Corresponds to the 'data' field in the repo commit object. NOTE: this field is effectively required for the 'inductive' version of firehose. */
  prevData?: string;

  /** Timestamp of when this message was originally broadcast. */
  time: string;
}

export interface ComAtprotoSyncSubscribeReposIdentity {

  seq: number;

  did: string;

  time: string;

  /** The current handle for the account, or 'handle.invalid' if validation fails. This field is optional, might have been validated or passed-through from an upstream source. Semantics and behaviors for PDS vs Relay may evolve in the future; see atproto specs for more details. */
  handle?: string;
}

export interface ComAtprotoSyncSubscribeReposInfo {

  name: string;

  message?: string;
}

export interface ComAtprotoSyncSubscribeReposRepoOp {

  action: string;

  path: string;

  /** For creates and updates, the new record CID. For deletions, null. */
  cid: string;

  /** For updates and deletes, the previous record CID (required for inductive firehose). For creations, field should not be defined. */
  prev?: string;
}

export interface ComAtprotoSyncSubscribeReposSync {

  /** The stream sequence number of this message. */
  seq: number;

  /** The account this repo event corresponds to. Must match that in the commit object. */
  did: string;

  /** CAR file containing the commit, as a block. The CAR header must include the commit block CID as the first 'root'. */
  blocks: string;

  /** The rev of the commit. This value must match that in the commit object. */
  rev: string;

  /** Timestamp of when this message was originally broadcast. */
  time: string;
}

export type ComAtprotoTempCheckHandleAvailabilityResultAvailable = Record<string, unknown>;

export interface ComAtprotoTempCheckHandleAvailabilityResultUnavailable {

  /** List of suggested handles based on the provided inputs. */
  suggestions: ComAtprotoTempCheckHandleAvailabilitySuggestion[];
}

export interface ComAtprotoTempCheckHandleAvailabilitySuggestion {

  handle: string;

  /** Method used to build this suggestion. Should be considered opaque to clients. Can be used for metrics. */
  method: string;
}
// Auto-generated endpoint response types — do not edit

export type GetPreferencesResponse = {
  preferences: AppBskyActorDefsPreferences;
};

export type GetProfileResponse = AppBskyActorDefsProfileViewDetailed;

export type GetProfilesResponse = {
  profiles: AppBskyActorDefsProfileViewDetailed[];
};

export type GetSuggestionsResponse = {
  cursor?: string;
  actors: AppBskyActorDefsProfileView[];
  recId?: number;
  recIdStr?: string;
};

export type SearchActorsResponse = {
  cursor?: string;
  actors: AppBskyActorDefsProfileView[];
};

export type SearchActorsTypeaheadResponse = {
  actors: AppBskyActorDefsProfileViewBasic[];
};

export type BeginResponse = AppBskyAgeassuranceDefsState;

export type GetConfigResponse = AppBskyAgeassuranceDefsConfig;

export type GetStateResponse = {
  state: AppBskyAgeassuranceDefsState;
  metadata: AppBskyAgeassuranceDefsStateMetadata;
};

export type GetBookmarksResponse = {
  cursor?: string;
  bookmarks: AppBskyBookmarkDefsBookmarkView[];
};

export type DismissMatchResponse = {

};

export type GetMatchesResponse = {
  cursor?: string;
  matches: AppBskyActorDefsProfileView[];
};

export type GetSyncStatusResponse = {
  syncStatus?: AppBskyContactDefsSyncStatus;
};

export type ImportContactsResponse = {
  matchesAndContactIndexes: AppBskyContactDefsMatchAndContactIndex[];
};

export type RemoveDataResponse = {

};

export type SendNotificationResponse = {

};

export type StartPhoneVerificationResponse = {

};

export type VerifyPhoneResponse = {
  token: string;
};

export type CreateDraftResponse = {
  id: string;
};

export type GetDraftsResponse = {
  cursor?: string;
  drafts: AppBskyDraftDefsDraftView[];
};

export type GetEmbedExternalViewResponse = {
  view?: AppBskyEmbedExternalView;
  associatedRefs?: ComAtprotoRepoStrongRef[];
  associatedRecords?: unknown[];
};

export type DescribeFeedGeneratorResponse = {
  did: string;
  feeds: AppBskyFeedDescribeFeedGeneratorFeed[];
  links?: AppBskyFeedDescribeFeedGeneratorLinks;
};

export type GetActorFeedsResponse = {
  cursor?: string;
  feeds: AppBskyFeedDefsGeneratorView[];
};

export type GetActorLikesResponse = {
  cursor?: string;
  feed: AppBskyFeedDefsFeedViewPost[];
};

export type GetAuthorFeedResponse = {
  cursor?: string;
  feed: AppBskyFeedDefsFeedViewPost[];
};

export type GetFeedResponse = {
  cursor?: string;
  feed: AppBskyFeedDefsFeedViewPost[];
};

export type GetFeedGeneratorResponse = {
  view: AppBskyFeedDefsGeneratorView;
  isOnline: boolean;
  isValid: boolean;
};

export type GetFeedGeneratorsResponse = {
  feeds: AppBskyFeedDefsGeneratorView[];
};

export type GetFeedSkeletonResponse = {
  cursor?: string;
  feed: AppBskyFeedDefsSkeletonFeedPost[];
  reqId?: string;
};

export type GetLikesResponse = {
  uri: string;
  cid?: string;
  cursor?: string;
  likes: AppBskyFeedGetLikesLike[];
};

export type GetListFeedResponse = {
  cursor?: string;
  feed: AppBskyFeedDefsFeedViewPost[];
};

export type GetPostsResponse = {
  posts: AppBskyFeedDefsPostView[];
};

export type GetPostThreadResponse = {
  thread: AppBskyFeedDefsThreadViewPost | AppBskyFeedDefsNotFoundPost | AppBskyFeedDefsBlockedPost;
  threadgate?: AppBskyFeedDefsThreadgateView;
};

export type GetQuotesResponse = {
  uri: string;
  cid?: string;
  cursor?: string;
  posts: AppBskyFeedDefsPostView[];
};

export type GetRepostedByResponse = {
  uri: string;
  cid?: string;
  cursor?: string;
  repostedBy: AppBskyActorDefsProfileView[];
};

export type GetSuggestedFeedsResponse = {
  cursor?: string;
  feeds: AppBskyFeedDefsGeneratorView[];
};

export type GetTimelineResponse = {
  cursor?: string;
  feed: AppBskyFeedDefsFeedViewPost[];
};

export type SearchPostsResponse = {
  cursor?: string;
  hitsTotal?: number;
  posts: AppBskyFeedDefsPostView[];
};

export type SearchPostsV2Response = {
  cursor?: string;
  hitsTotal?: number;
  posts: AppBskyFeedDefsPostView[];
  detectedQueryLanguages?: string[];
};

export type SendInteractionsResponse = {

};

export type GetActorStarterPacksResponse = {
  cursor?: string;
  starterPacks: AppBskyGraphDefsStarterPackViewBasic[];
};

export type GetBlocksResponse = {
  cursor?: string;
  blocks: AppBskyActorDefsProfileView[];
};

export type GetFollowersResponse = {
  subject: AppBskyActorDefsProfileView;
  cursor?: string;
  followers: AppBskyActorDefsProfileView[];
};

export type GetFollowsResponse = {
  subject: AppBskyActorDefsProfileView;
  cursor?: string;
  follows: AppBskyActorDefsProfileView[];
};

export type GetKnownFollowersResponse = {
  subject: AppBskyActorDefsProfileView;
  cursor?: string;
  followers: AppBskyActorDefsProfileView[];
};

export type GetListResponse = {
  cursor?: string;
  list: AppBskyGraphDefsListView;
  items: AppBskyGraphDefsListItemView[];
};

export type GetListBlocksResponse = {
  cursor?: string;
  lists: AppBskyGraphDefsListView[];
};

export type GetListMutesResponse = {
  cursor?: string;
  lists: AppBskyGraphDefsListView[];
};

export type GetListsResponse = {
  cursor?: string;
  lists: AppBskyGraphDefsListView[];
};

export type GetListsWithMembershipResponse = {
  cursor?: string;
  listsWithMembership: AppBskyGraphGetListsWithMembershipListWithMembership[];
};

export type GetMutesResponse = {
  cursor?: string;
  mutes: AppBskyActorDefsProfileView[];
};

export type GetRelationshipsResponse = {
  actor?: string;
  relationships: AppBskyGraphDefsRelationship | AppBskyGraphDefsNotFoundActor[];
};

export type GetStarterPackResponse = {
  starterPack: AppBskyGraphDefsStarterPackView;
};

export type GetStarterPacksResponse = {
  starterPacks: AppBskyGraphDefsStarterPackViewBasic[];
};

export type GetStarterPacksWithMembershipResponse = {
  cursor?: string;
  starterPacksWithMembership: AppBskyGraphGetStarterPacksWithMembershipStarterPackWithMembership[];
};

export type GetSuggestedFollowsByActorResponse = {
  suggestions: AppBskyActorDefsProfileView[];
  recIdStr?: string;
  isFallback?: boolean;
  recId?: number;
};

export type SearchStarterPacksResponse = {
  cursor?: string;
  starterPacks: AppBskyGraphDefsStarterPackViewBasic[];
};

export type SearchStarterPacksV2Response = {
  cursor?: string;
  hitsTotal?: number;
  starterPacks: AppBskyGraphDefsStarterPackView[];
};

export type GetServicesResponse = {
  views: AppBskyLabelerDefsLabelerView | AppBskyLabelerDefsLabelerViewDetailed[];
};

export type GetPreferences2Response = {
  preferences: AppBskyNotificationDefsPreferences;
};

export type GetUnreadCountResponse = {
  count: number;
};

export type ListActivitySubscriptionsResponse = {
  cursor?: string;
  subscriptions: AppBskyActorDefsProfileView[];
};

export type ListNotificationsResponse = {
  cursor?: string;
  notifications: AppBskyNotificationListNotificationsNotification[];
  priority?: boolean;
  seenAt?: string;
};

export type PutActivitySubscriptionResponse = {
  subject: string;
  activitySubscription?: AppBskyNotificationDefsActivitySubscription;
};

export type PutPreferencesV2Response = {
  preferences: AppBskyNotificationDefsPreferences;
};

export type GetAgeAssuranceStateResponse = AppBskyUnspeccedDefsAgeAssuranceState;

export type GetConfig2Response = {
  checkEmailConfirmed?: boolean;
  liveNow?: AppBskyUnspeccedGetConfigLiveNowConfig[];
};

export type GetOnboardingSuggestedStarterPacksResponse = {
  starterPacks: AppBskyGraphDefsStarterPackView[];
};

export type GetOnboardingSuggestedStarterPacksSkeletonResponse = {
  starterPacks: string[];
};

export type GetOnboardingSuggestedUsersSkeletonResponse = {
  dids: string[];
  recId?: string;
  recIdStr?: string;
};

export type GetPopularFeedGeneratorsResponse = {
  cursor?: string;
  feeds: AppBskyFeedDefsGeneratorView[];
};

export type GetPostThreadOtherV2Response = {
  thread: AppBskyUnspeccedGetPostThreadOtherV2ThreadItem[];
};

export type GetPostThreadV2Response = {
  thread: AppBskyUnspeccedGetPostThreadV2ThreadItem[];
  threadgate?: AppBskyFeedDefsThreadgateView;
  hasOtherReplies: boolean;
};

export type GetSuggestedFeeds2Response = {
  feeds: AppBskyFeedDefsGeneratorView[];
};

export type GetSuggestedFeedsSkeletonResponse = {
  feeds: string[];
};

export type GetSuggestedOnboardingUsersResponse = {
  actors: AppBskyActorDefsProfileView[];
  recId?: string;
  recIdStr?: string;
};

export type GetSuggestedStarterPacksResponse = {
  starterPacks: AppBskyGraphDefsStarterPackView[];
};

export type GetSuggestedStarterPacksSkeletonResponse = {
  starterPacks: string[];
};

export type GetSuggestedUsersResponse = {
  actors: AppBskyActorDefsProfileView[];
  recId?: string;
  recIdStr?: string;
};

export type GetSuggestedUsersForDiscoverResponse = {
  actors: AppBskyActorDefsProfileView[];
  recIdStr?: string;
};

export type GetSuggestedUsersForDiscoverSkeletonResponse = {
  dids: string[];
  recIdStr?: string;
};

export type GetSuggestedUsersForExploreResponse = {
  actors: AppBskyActorDefsProfileView[];
  recIdStr?: string;
};

export type GetSuggestedUsersForExploreSkeletonResponse = {
  dids: string[];
  recIdStr?: string;
};

export type GetSuggestedUsersForSeeMoreResponse = {
  actors: AppBskyActorDefsProfileView[];
  recIdStr?: string;
};

export type GetSuggestedUsersForSeeMoreSkeletonResponse = {
  dids: string[];
  recIdStr?: string;
};

export type GetSuggestedUsersSkeletonResponse = {
  dids: string[];
  recId?: string;
  recIdStr?: string;
};

export type GetSuggestionsSkeletonResponse = {
  cursor?: string;
  actors: AppBskyUnspeccedDefsSkeletonSearchActor[];
  relativeToDid?: string;
  recId?: number;
  recIdStr?: string;
};

export type GetTaggedSuggestionsResponse = {
  suggestions: AppBskyUnspeccedGetTaggedSuggestionsSuggestion[];
};

export type GetTrendingTopicsResponse = {
  topics: AppBskyUnspeccedDefsTrendingTopic[];
  suggested: AppBskyUnspeccedDefsTrendingTopic[];
};

export type GetTrendsResponse = {
  trends: AppBskyUnspeccedDefsTrendView[];
  recIdStr?: string;
};

export type GetTrendsSkeletonResponse = {
  trends: AppBskyUnspeccedDefsSkeletonTrend[];
  recIdStr?: string;
};

export type InitAgeAssuranceResponse = AppBskyUnspeccedDefsAgeAssuranceState;

export type SearchActorsSkeletonResponse = {
  cursor?: string;
  hitsTotal?: number;
  actors: AppBskyUnspeccedDefsSkeletonSearchActor[];
};

export type SearchPostsSkeletonResponse = {
  cursor?: string;
  hitsTotal?: number;
  posts: AppBskyUnspeccedDefsSkeletonSearchPost[];
};

export type SearchStarterPacksSkeletonResponse = {
  cursor?: string;
  hitsTotal?: number;
  starterPacks: AppBskyUnspeccedDefsSkeletonSearchStarterPack[];
};

export type GetJobStatusResponse = {
  jobStatus: AppBskyVideoDefsJobStatus;
};

export type GetUploadLimitsResponse = {
  canUpload: boolean;
  remainingDailyVideos?: number;
  remainingDailyBytes?: number;
  message?: string;
  error?: string;
};

export type UploadVideoResponse = {
  jobStatus: AppBskyVideoDefsJobStatus;
};

export type GetAccountInfoResponse = ComAtprotoAdminDefsAccountView;

export type GetAccountInfosResponse = {
  infos: ComAtprotoAdminDefsAccountView[];
};

export type GetInviteCodesResponse = {
  cursor?: string;
  codes: ComAtprotoServerDefsInviteCode[];
};

export type GetSubjectStatusResponse = {
  subject: ComAtprotoAdminDefsRepoRef | ComAtprotoRepoStrongRef | ComAtprotoAdminDefsRepoBlobRef;
  takedown?: ComAtprotoAdminDefsStatusAttr;
  deactivated?: ComAtprotoAdminDefsStatusAttr;
};

export type SearchAccountsResponse = {
  cursor?: string;
  accounts: ComAtprotoAdminDefsAccountView[];
};

export type SendEmailResponse = {
  sent: boolean;
};

export type UpdateSubjectStatusResponse = {
  subject: ComAtprotoAdminDefsRepoRef | ComAtprotoRepoStrongRef | ComAtprotoAdminDefsRepoBlobRef;
  takedown?: ComAtprotoAdminDefsStatusAttr;
};

export type GetRecommendedDidCredentialsResponse = {
  rotationKeys?: string[];
  alsoKnownAs?: string[];
  verificationMethods?: unknown;
  services?: unknown;
};

export type RefreshIdentityResponse = ComAtprotoIdentityDefsIdentityInfo;

export type ResolveDidResponse = {
  didDoc: unknown;
};

export type ResolveHandleResponse = {
  did: string;
};

export type ResolveIdentityResponse = ComAtprotoIdentityDefsIdentityInfo;

export type SignPlcOperationResponse = {
  operation: unknown;
};

export type QueryLabelsResponse = {
  cursor?: string;
  labels: ComAtprotoLabelDefsLabel[];
};

export type ResolveLexiconResponse = {
  cid: string;
  schema: ComAtprotoLexiconSchema;
  uri: string;
};

export type CreateReportResponse = {
  id: number;
  reasonType: ComAtprotoModerationDefsReasonType;
  reason?: string;
  subject: ComAtprotoAdminDefsRepoRef | ComAtprotoRepoStrongRef;
  reportedBy: string;
  createdAt: string;
};

export type ApplyWritesResponse = {
  commit?: ComAtprotoRepoDefsCommitMeta;
  results?: ComAtprotoRepoApplyWritesCreateResult | ComAtprotoRepoApplyWritesUpdateResult | ComAtprotoRepoApplyWritesDeleteResult[];
};

export type CreateRecordResponse = {
  uri: string;
  cid: string;
  commit?: ComAtprotoRepoDefsCommitMeta;
  validationStatus?: string;
};

export type DeleteRecordResponse = {
  commit?: ComAtprotoRepoDefsCommitMeta;
};

export type DescribeRepoResponse = {
  handle: string;
  did: string;
  didDoc: unknown;
  collections: string[];
  handleIsCorrect: boolean;
};

export type GetRecordResponse = {
  uri: string;
  cid?: string;
  value: unknown;
};

export type ListMissingBlobsResponse = {
  cursor?: string;
  blobs: ComAtprotoRepoListMissingBlobsRecordBlob[];
};

export type ListRecordsResponse = {
  cursor?: string;
  records: ComAtprotoRepoListRecordsRecord[];
};

export type PutRecordResponse = {
  uri: string;
  cid: string;
  commit?: ComAtprotoRepoDefsCommitMeta;
  validationStatus?: string;
};

export type UploadBlobResponse = {
  blob: { ref: { $link: string }; mimeType?: string; size?: number };
};

export type CheckAccountStatusResponse = {
  activated: boolean;
  validDid: boolean;
  repoCommit: string;
  repoRev: string;
  repoBlocks: number;
  indexedRecords: number;
  privateStateValues: number;
  expectedBlobs: number;
  importedBlobs: number;
};

export type CreateAccountResponse = {
  accessJwt: string;
  refreshJwt: string;
  handle: string;
  did: string;
  didDoc?: unknown;
};

export type CreateAppPasswordResponse = ComAtprotoServerCreateAppPasswordAppPassword;

export type CreateInviteCodeResponse = {
  code: string;
};

export type CreateInviteCodesResponse = {
  codes: ComAtprotoServerCreateInviteCodesAccountCodes[];
};

export type CreateSessionResponse = {
  accessJwt: string;
  refreshJwt: string;
  handle: string;
  did: string;
  didDoc?: unknown;
  email?: string;
  emailConfirmed?: boolean;
  emailAuthFactor?: boolean;
  active?: boolean;
  status?: string;
};

export type DescribeServerResponse = {
  inviteCodeRequired?: boolean;
  phoneVerificationRequired?: boolean;
  blobUploadLimit?: number;
  availableUserDomains: string[];
  links?: ComAtprotoServerDescribeServerLinks;
  contact?: ComAtprotoServerDescribeServerContact;
  did: string;
};

export type GetAccountInviteCodesResponse = {
  codes: ComAtprotoServerDefsInviteCode[];
};

export type GetServiceAuthResponse = {
  token: string;
};

export type GetSessionResponse = {
  handle: string;
  did: string;
  didDoc?: unknown;
  email?: string;
  emailConfirmed?: boolean;
  emailAuthFactor?: boolean;
  active?: boolean;
  status?: string;
};

export type ListAppPasswordsResponse = {
  passwords: ComAtprotoServerListAppPasswordsAppPassword[];
};

export type RefreshSessionResponse = {
  accessJwt: string;
  refreshJwt: string;
  handle: string;
  did: string;
  didDoc?: unknown;
  email?: string;
  emailConfirmed?: boolean;
  emailAuthFactor?: boolean;
  active?: boolean;
  status?: string;
};

export type RequestEmailUpdateResponse = {
  tokenRequired: boolean;
};

export type ReserveSigningKeyResponse = {
  signingKey: string;
};

export type GetHeadResponse = {
  root: string;
};

export type GetHostStatusResponse = {
  hostname: string;
  seq?: number;
  accountCount?: number;
  status?: ComAtprotoSyncDefsHostStatus;
};

export type GetLatestCommitResponse = {
  cid: string;
  rev: string;
};

export type GetRepoStatusResponse = {
  did: string;
  active: boolean;
  status?: string;
  rev?: string;
};

export type ListBlobsResponse = {
  cursor?: string;
  cids: string[];
};

export type ListHostsResponse = {
  cursor?: string;
  hosts: ComAtprotoSyncListHostsHost[];
};

export type ListReposResponse = {
  cursor?: string;
  repos: ComAtprotoSyncListReposRepo[];
};

export type ListReposByCollectionResponse = {
  cursor?: string;
  repos: ComAtprotoSyncListReposByCollectionRepo[];
};

export type AddReservedHandleResponse = {

};

export type CheckHandleAvailabilityResponse = {
  handle: string;
  result: ComAtprotoTempCheckHandleAvailabilityResultAvailable | ComAtprotoTempCheckHandleAvailabilityResultUnavailable;
};

export type CheckSignupQueueResponse = {
  activated: boolean;
  placeInQueue?: number;
  estimatedTimeMs?: number;
};

export type DereferenceScopeResponse = {
  scope: string;
};

export type FetchLabelsResponse = {
  labels: ComAtprotoLabelDefsLabel[];
};
