// @generated
// fingerprint: sha256:8811a3a123804fd7ecb628ada7ceb637679c2dd4a17fa0d7e6bc809dc244f51f
// DO NOT EDIT: generated file; changes will be overwritten.
// This file is generated. Do not edit by hand.
import { Schema } from "effect";

export interface ActivateAccountParams {

}
export interface ActivateAccountParamsEncoded {

}
export const ActivateAccountParams: Schema.Schema<ActivateAccountParams, ActivateAccountParamsEncoded, never> = Schema.Struct({

});

export interface ActivateAccountResponse {

}
export interface ActivateAccountResponseEncoded {

}
export const ActivateAccountResponse: Schema.Schema<ActivateAccountResponse, ActivateAccountResponseEncoded, never> = Schema.Struct({

});

export interface AddReservedHandleParams {
  readonly handle: string;
}
export interface AddReservedHandleParamsEncoded {
  readonly handle: string;
}
export const AddReservedHandleParams: Schema.Schema<AddReservedHandleParams, AddReservedHandleParamsEncoded, never> = Schema.Struct({
  handle: Schema.String,
});

export interface AddReservedHandleResponse {
  readonly data: Inline734;
}
export interface AddReservedHandleResponseEncoded {
  readonly data: Inline734Encoded;
}
export const AddReservedHandleResponse: Schema.Schema<AddReservedHandleResponse, AddReservedHandleResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline734),
});

export type AppBskyActorDefsAdultContentPref = unknown;
export type AppBskyActorDefsAdultContentPrefEncoded = unknown;
export const AppBskyActorDefsAdultContentPref: Schema.Schema<AppBskyActorDefsAdultContentPref, AppBskyActorDefsAdultContentPrefEncoded, never> = Schema.Unknown;

export interface AppBskyActorDefsBskyAppProgressGuide {
  readonly guide: string;
}
export interface AppBskyActorDefsBskyAppProgressGuideEncoded {
  readonly guide: string;
}
export const AppBskyActorDefsBskyAppProgressGuide: Schema.Schema<AppBskyActorDefsBskyAppProgressGuide, AppBskyActorDefsBskyAppProgressGuideEncoded, never> = Schema.Struct({
  guide: Schema.String,
});

export type AppBskyActorDefsBskyAppStatePref = unknown;
export type AppBskyActorDefsBskyAppStatePrefEncoded = unknown;
export const AppBskyActorDefsBskyAppStatePref: Schema.Schema<AppBskyActorDefsBskyAppStatePref, AppBskyActorDefsBskyAppStatePrefEncoded, never> = Schema.Unknown;

export type AppBskyActorDefsContentLabelPref = unknown;
export type AppBskyActorDefsContentLabelPrefEncoded = unknown;
export const AppBskyActorDefsContentLabelPref: Schema.Schema<AppBskyActorDefsContentLabelPref, AppBskyActorDefsContentLabelPrefEncoded, never> = Schema.Unknown;

export type AppBskyActorDefsDeclaredAgePref = unknown;
export type AppBskyActorDefsDeclaredAgePrefEncoded = unknown;
export const AppBskyActorDefsDeclaredAgePref: Schema.Schema<AppBskyActorDefsDeclaredAgePref, AppBskyActorDefsDeclaredAgePrefEncoded, never> = Schema.Unknown;

export type AppBskyActorDefsFeedViewPref = unknown;
export type AppBskyActorDefsFeedViewPrefEncoded = unknown;
export const AppBskyActorDefsFeedViewPref: Schema.Schema<AppBskyActorDefsFeedViewPref, AppBskyActorDefsFeedViewPrefEncoded, never> = Schema.Unknown;

export type AppBskyActorDefsHiddenPostsPref = unknown;
export type AppBskyActorDefsHiddenPostsPrefEncoded = unknown;
export const AppBskyActorDefsHiddenPostsPref: Schema.Schema<AppBskyActorDefsHiddenPostsPref, AppBskyActorDefsHiddenPostsPrefEncoded, never> = Schema.Unknown;

export type AppBskyActorDefsInterestsPref = unknown;
export type AppBskyActorDefsInterestsPrefEncoded = unknown;
export const AppBskyActorDefsInterestsPref: Schema.Schema<AppBskyActorDefsInterestsPref, AppBskyActorDefsInterestsPrefEncoded, never> = Schema.Unknown;

export interface AppBskyActorDefsKnownFollowers {
  readonly count: number;
  readonly followers: ReadonlyArray<AppBskyActorDefsProfileViewBasic>;
}
export interface AppBskyActorDefsKnownFollowersEncoded {
  readonly count: number;
  readonly followers: ReadonlyArray<AppBskyActorDefsProfileViewBasicEncoded>;
}
export const AppBskyActorDefsKnownFollowers: Schema.Schema<AppBskyActorDefsKnownFollowers, AppBskyActorDefsKnownFollowersEncoded, never> = Schema.Struct({
  count: Schema.Number,
  followers: Schema.Array(Schema.suspend(() => AppBskyActorDefsProfileViewBasic)),
});

export interface AppBskyActorDefsLabelerPrefItem {
  readonly did: string;
}
export interface AppBskyActorDefsLabelerPrefItemEncoded {
  readonly did: string;
}
export const AppBskyActorDefsLabelerPrefItem: Schema.Schema<AppBskyActorDefsLabelerPrefItem, AppBskyActorDefsLabelerPrefItemEncoded, never> = Schema.Struct({
  did: Schema.String,
});

export type AppBskyActorDefsLabelersPref = unknown;
export type AppBskyActorDefsLabelersPrefEncoded = unknown;
export const AppBskyActorDefsLabelersPref: Schema.Schema<AppBskyActorDefsLabelersPref, AppBskyActorDefsLabelersPrefEncoded, never> = Schema.Unknown;

export type AppBskyActorDefsLiveEventPreferences = unknown;
export type AppBskyActorDefsLiveEventPreferencesEncoded = unknown;
export const AppBskyActorDefsLiveEventPreferences: Schema.Schema<AppBskyActorDefsLiveEventPreferences, AppBskyActorDefsLiveEventPreferencesEncoded, never> = Schema.Unknown;

export interface AppBskyActorDefsMutedWord {
  readonly id?: string;
  readonly value: string;
  readonly targets: ReadonlyArray<AppBskyActorDefsMutedWordTarget>;
  readonly actorTarget?: string;
  readonly expiresAt?: string;
}
export interface AppBskyActorDefsMutedWordEncoded {
  readonly id?: string;
  readonly value: string;
  readonly targets: ReadonlyArray<AppBskyActorDefsMutedWordTargetEncoded>;
  readonly actorTarget?: string;
  readonly expiresAt?: string;
}
export const AppBskyActorDefsMutedWord: Schema.Schema<AppBskyActorDefsMutedWord, AppBskyActorDefsMutedWordEncoded, never> = Schema.Struct({
  id: Schema.optional(Schema.String),
  value: Schema.String,
  targets: Schema.Array(Schema.suspend(() => AppBskyActorDefsMutedWordTarget)),
  actorTarget: Schema.optional(Schema.String),
  expiresAt: Schema.optional(Schema.String),
});

export type AppBskyActorDefsMutedWordsPref = unknown;
export type AppBskyActorDefsMutedWordsPrefEncoded = unknown;
export const AppBskyActorDefsMutedWordsPref: Schema.Schema<AppBskyActorDefsMutedWordsPref, AppBskyActorDefsMutedWordsPrefEncoded, never> = Schema.Unknown;

export type AppBskyActorDefsMutedWordTarget = string;
export type AppBskyActorDefsMutedWordTargetEncoded = string;
export const AppBskyActorDefsMutedWordTarget: Schema.Schema<AppBskyActorDefsMutedWordTarget, AppBskyActorDefsMutedWordTargetEncoded, never> = Schema.String;

export interface AppBskyActorDefsNux {
  readonly id: string;
  readonly completed: boolean;
  readonly data?: string;
  readonly expiresAt?: string;
}
export interface AppBskyActorDefsNuxEncoded {
  readonly id: string;
  readonly completed: boolean;
  readonly data?: string;
  readonly expiresAt?: string;
}
export const AppBskyActorDefsNux: Schema.Schema<AppBskyActorDefsNux, AppBskyActorDefsNuxEncoded, never> = Schema.Struct({
  id: Schema.String,
  completed: Schema.Boolean,
  data: Schema.optional(Schema.String),
  expiresAt: Schema.optional(Schema.String),
});

export type AppBskyActorDefsPersonalDetailsPref = unknown;
export type AppBskyActorDefsPersonalDetailsPrefEncoded = unknown;
export const AppBskyActorDefsPersonalDetailsPref: Schema.Schema<AppBskyActorDefsPersonalDetailsPref, AppBskyActorDefsPersonalDetailsPrefEncoded, never> = Schema.Unknown;

export type AppBskyActorDefsPostInteractionSettingsPref = unknown;
export type AppBskyActorDefsPostInteractionSettingsPrefEncoded = unknown;
export const AppBskyActorDefsPostInteractionSettingsPref: Schema.Schema<AppBskyActorDefsPostInteractionSettingsPref, AppBskyActorDefsPostInteractionSettingsPrefEncoded, never> = Schema.Unknown;

export type AppBskyActorDefsPreferences = ReadonlyArray<AppBskyActorDefsAdultContentPref | AppBskyActorDefsContentLabelPref | AppBskyActorDefsSavedFeedsPref | AppBskyActorDefsSavedFeedsPrefV2 | AppBskyActorDefsPersonalDetailsPref | AppBskyActorDefsDeclaredAgePref | AppBskyActorDefsFeedViewPref | AppBskyActorDefsThreadViewPref | AppBskyActorDefsInterestsPref | AppBskyActorDefsMutedWordsPref | AppBskyActorDefsHiddenPostsPref | AppBskyActorDefsBskyAppStatePref | AppBskyActorDefsLabelersPref | AppBskyActorDefsPostInteractionSettingsPref | AppBskyActorDefsVerificationPrefs | AppBskyActorDefsLiveEventPreferences>;
export type AppBskyActorDefsPreferencesEncoded = ReadonlyArray<AppBskyActorDefsAdultContentPrefEncoded | AppBskyActorDefsContentLabelPrefEncoded | AppBskyActorDefsSavedFeedsPrefEncoded | AppBskyActorDefsSavedFeedsPrefV2Encoded | AppBskyActorDefsPersonalDetailsPrefEncoded | AppBskyActorDefsDeclaredAgePrefEncoded | AppBskyActorDefsFeedViewPrefEncoded | AppBskyActorDefsThreadViewPrefEncoded | AppBskyActorDefsInterestsPrefEncoded | AppBskyActorDefsMutedWordsPrefEncoded | AppBskyActorDefsHiddenPostsPrefEncoded | AppBskyActorDefsBskyAppStatePrefEncoded | AppBskyActorDefsLabelersPrefEncoded | AppBskyActorDefsPostInteractionSettingsPrefEncoded | AppBskyActorDefsVerificationPrefsEncoded | AppBskyActorDefsLiveEventPreferencesEncoded>;
export const AppBskyActorDefsPreferences: Schema.Schema<AppBskyActorDefsPreferences, AppBskyActorDefsPreferencesEncoded, never> = Schema.Array(Schema.Union(Schema.suspend(() => AppBskyActorDefsAdultContentPref), Schema.suspend(() => AppBskyActorDefsContentLabelPref), Schema.suspend(() => AppBskyActorDefsSavedFeedsPref), Schema.suspend(() => AppBskyActorDefsSavedFeedsPrefV2), Schema.suspend(() => AppBskyActorDefsPersonalDetailsPref), Schema.suspend(() => AppBskyActorDefsDeclaredAgePref), Schema.suspend(() => AppBskyActorDefsFeedViewPref), Schema.suspend(() => AppBskyActorDefsThreadViewPref), Schema.suspend(() => AppBskyActorDefsInterestsPref), Schema.suspend(() => AppBskyActorDefsMutedWordsPref), Schema.suspend(() => AppBskyActorDefsHiddenPostsPref), Schema.suspend(() => AppBskyActorDefsBskyAppStatePref), Schema.suspend(() => AppBskyActorDefsLabelersPref), Schema.suspend(() => AppBskyActorDefsPostInteractionSettingsPref), Schema.suspend(() => AppBskyActorDefsVerificationPrefs), Schema.suspend(() => AppBskyActorDefsLiveEventPreferences)));

export type AppBskyActorDefsProfileAssociated = unknown;
export type AppBskyActorDefsProfileAssociatedEncoded = unknown;
export const AppBskyActorDefsProfileAssociated: Schema.Schema<AppBskyActorDefsProfileAssociated, AppBskyActorDefsProfileAssociatedEncoded, never> = Schema.Unknown;

export interface AppBskyActorDefsProfileAssociatedActivitySubscription {
  readonly allowSubscriptions: string;
}
export interface AppBskyActorDefsProfileAssociatedActivitySubscriptionEncoded {
  readonly allowSubscriptions: string;
}
export const AppBskyActorDefsProfileAssociatedActivitySubscription: Schema.Schema<AppBskyActorDefsProfileAssociatedActivitySubscription, AppBskyActorDefsProfileAssociatedActivitySubscriptionEncoded, never> = Schema.Struct({
  allowSubscriptions: Schema.String,
});

export interface AppBskyActorDefsProfileAssociatedChat {
  readonly allowIncoming: string;
  readonly allowGroupInvites?: string;
}
export interface AppBskyActorDefsProfileAssociatedChatEncoded {
  readonly allowIncoming: string;
  readonly allowGroupInvites?: string;
}
export const AppBskyActorDefsProfileAssociatedChat: Schema.Schema<AppBskyActorDefsProfileAssociatedChat, AppBskyActorDefsProfileAssociatedChatEncoded, never> = Schema.Struct({
  allowIncoming: Schema.String,
  allowGroupInvites: Schema.optional(Schema.String),
});

export interface AppBskyActorDefsProfileAssociatedGerm {
  readonly messageMeUrl: string;
  readonly showButtonTo: string;
}
export interface AppBskyActorDefsProfileAssociatedGermEncoded {
  readonly messageMeUrl: string;
  readonly showButtonTo: string;
}
export const AppBskyActorDefsProfileAssociatedGerm: Schema.Schema<AppBskyActorDefsProfileAssociatedGerm, AppBskyActorDefsProfileAssociatedGermEncoded, never> = Schema.Struct({
  messageMeUrl: Schema.String,
  showButtonTo: Schema.String,
});

export type AppBskyActorDefsProfileView = unknown;
export type AppBskyActorDefsProfileViewEncoded = unknown;
export const AppBskyActorDefsProfileView: Schema.Schema<AppBskyActorDefsProfileView, AppBskyActorDefsProfileViewEncoded, never> = Schema.Unknown;

export type AppBskyActorDefsProfileViewBasic = unknown;
export type AppBskyActorDefsProfileViewBasicEncoded = unknown;
export const AppBskyActorDefsProfileViewBasic: Schema.Schema<AppBskyActorDefsProfileViewBasic, AppBskyActorDefsProfileViewBasicEncoded, never> = Schema.Unknown;

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
export interface AppBskyActorDefsProfileViewDetailedEncoded {
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
  readonly associated?: AppBskyActorDefsProfileAssociatedEncoded;
  readonly joinedViaStarterPack?: AppBskyGraphDefsStarterPackViewBasicEncoded;
  readonly indexedAt?: string;
  readonly createdAt?: string;
  readonly viewer?: AppBskyActorDefsViewerStateEncoded;
  readonly labels?: ReadonlyArray<ComAtprotoLabelDefsLabelEncoded>;
  readonly pinnedPost?: ComAtprotoRepoStrongRefEncoded;
  readonly verification?: AppBskyActorDefsVerificationStateEncoded;
  readonly status?: AppBskyActorDefsStatusViewEncoded;
  readonly debug?: unknown;
}
export const AppBskyActorDefsProfileViewDetailed: Schema.Schema<AppBskyActorDefsProfileViewDetailed, AppBskyActorDefsProfileViewDetailedEncoded, never> = Schema.Struct({
  did: Schema.String,
  handle: Schema.String,
  displayName: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  pronouns: Schema.optional(Schema.String),
  website: Schema.optional(Schema.String),
  avatar: Schema.optional(Schema.String),
  banner: Schema.optional(Schema.String),
  followersCount: Schema.optional(Schema.Number),
  followsCount: Schema.optional(Schema.Number),
  postsCount: Schema.optional(Schema.Number),
  associated: Schema.optional(Schema.suspend(() => AppBskyActorDefsProfileAssociated)),
  joinedViaStarterPack: Schema.optional(Schema.suspend(() => AppBskyGraphDefsStarterPackViewBasic)),
  indexedAt: Schema.optional(Schema.String),
  createdAt: Schema.optional(Schema.String),
  viewer: Schema.optional(Schema.suspend(() => AppBskyActorDefsViewerState)),
  labels: Schema.optional(Schema.Array(Schema.suspend(() => ComAtprotoLabelDefsLabel))),
  pinnedPost: Schema.optional(Schema.suspend(() => ComAtprotoRepoStrongRef)),
  verification: Schema.optional(Schema.suspend(() => AppBskyActorDefsVerificationState)),
  status: Schema.optional(Schema.suspend(() => AppBskyActorDefsStatusView)),
  debug: Schema.optional(Schema.Unknown),
});

export interface AppBskyActorDefsSavedFeed {
  readonly id: string;
  readonly type: string;
  readonly value: string;
  readonly pinned: boolean;
}
export interface AppBskyActorDefsSavedFeedEncoded {
  readonly id: string;
  readonly type: string;
  readonly value: string;
  readonly pinned: boolean;
}
export const AppBskyActorDefsSavedFeed: Schema.Schema<AppBskyActorDefsSavedFeed, AppBskyActorDefsSavedFeedEncoded, never> = Schema.Struct({
  id: Schema.String,
  type: Schema.String,
  value: Schema.String,
  pinned: Schema.Boolean,
});

export type AppBskyActorDefsSavedFeedsPref = unknown;
export type AppBskyActorDefsSavedFeedsPrefEncoded = unknown;
export const AppBskyActorDefsSavedFeedsPref: Schema.Schema<AppBskyActorDefsSavedFeedsPref, AppBskyActorDefsSavedFeedsPrefEncoded, never> = Schema.Unknown;

export type AppBskyActorDefsSavedFeedsPrefV2 = unknown;
export type AppBskyActorDefsSavedFeedsPrefV2Encoded = unknown;
export const AppBskyActorDefsSavedFeedsPrefV2: Schema.Schema<AppBskyActorDefsSavedFeedsPrefV2, AppBskyActorDefsSavedFeedsPrefV2Encoded, never> = Schema.Unknown;

export type AppBskyActorDefsStatusView = unknown;
export type AppBskyActorDefsStatusViewEncoded = unknown;
export const AppBskyActorDefsStatusView: Schema.Schema<AppBskyActorDefsStatusView, AppBskyActorDefsStatusViewEncoded, never> = Schema.Unknown;

export type AppBskyActorDefsThreadViewPref = unknown;
export type AppBskyActorDefsThreadViewPrefEncoded = unknown;
export const AppBskyActorDefsThreadViewPref: Schema.Schema<AppBskyActorDefsThreadViewPref, AppBskyActorDefsThreadViewPrefEncoded, never> = Schema.Unknown;

export type AppBskyActorDefsVerificationPrefs = unknown;
export type AppBskyActorDefsVerificationPrefsEncoded = unknown;
export const AppBskyActorDefsVerificationPrefs: Schema.Schema<AppBskyActorDefsVerificationPrefs, AppBskyActorDefsVerificationPrefsEncoded, never> = Schema.Unknown;

export type AppBskyActorDefsVerificationState = unknown;
export type AppBskyActorDefsVerificationStateEncoded = unknown;
export const AppBskyActorDefsVerificationState: Schema.Schema<AppBskyActorDefsVerificationState, AppBskyActorDefsVerificationStateEncoded, never> = Schema.Unknown;

export interface AppBskyActorDefsVerificationView {
  readonly issuer: string;
  readonly issuerDisplayName?: string;
  readonly issuerHandle?: string;
  readonly uri: string;
  readonly isValid: boolean;
  readonly createdAt: string;
}
export interface AppBskyActorDefsVerificationViewEncoded {
  readonly issuer: string;
  readonly issuerDisplayName?: string;
  readonly issuerHandle?: string;
  readonly uri: string;
  readonly isValid: boolean;
  readonly createdAt: string;
}
export const AppBskyActorDefsVerificationView: Schema.Schema<AppBskyActorDefsVerificationView, AppBskyActorDefsVerificationViewEncoded, never> = Schema.Struct({
  issuer: Schema.String,
  issuerDisplayName: Schema.optional(Schema.String),
  issuerHandle: Schema.optional(Schema.String),
  uri: Schema.String,
  isValid: Schema.Boolean,
  createdAt: Schema.String,
});

export type AppBskyActorDefsViewerState = unknown;
export type AppBskyActorDefsViewerStateEncoded = unknown;
export const AppBskyActorDefsViewerState: Schema.Schema<AppBskyActorDefsViewerState, AppBskyActorDefsViewerStateEncoded, never> = Schema.Unknown;

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
export interface AppBskyActorProfileEncoded {
  readonly displayName?: string;
  readonly description?: string;
  readonly pronouns?: string;
  readonly website?: string;
  readonly avatar?: unknown;
  readonly banner?: unknown;
  readonly labels?: ComAtprotoLabelDefsSelfLabelsEncoded;
  readonly joinedViaStarterPack?: ComAtprotoRepoStrongRefEncoded;
  readonly pinnedPost?: ComAtprotoRepoStrongRefEncoded;
  readonly createdAt?: string;
}
export const AppBskyActorProfile: Schema.Schema<AppBskyActorProfile, AppBskyActorProfileEncoded, never> = Schema.Struct({
  displayName: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  pronouns: Schema.optional(Schema.String),
  website: Schema.optional(Schema.String),
  avatar: Schema.optional(Schema.Unknown),
  banner: Schema.optional(Schema.Unknown),
  labels: Schema.optional(Schema.suspend(() => ComAtprotoLabelDefsSelfLabels)),
  joinedViaStarterPack: Schema.optional(Schema.suspend(() => ComAtprotoRepoStrongRef)),
  pinnedPost: Schema.optional(Schema.suspend(() => ComAtprotoRepoStrongRef)),
  createdAt: Schema.optional(Schema.String),
});

export interface AppBskyActorStatus {
  readonly status: string;
  readonly embed?: AppBskyEmbedExternal;
  readonly durationMinutes?: number;
  readonly createdAt: string;
}
export interface AppBskyActorStatusEncoded {
  readonly status: string;
  readonly embed?: AppBskyEmbedExternalEncoded;
  readonly durationMinutes?: number;
  readonly createdAt: string;
}
export const AppBskyActorStatus: Schema.Schema<AppBskyActorStatus, AppBskyActorStatusEncoded, never> = Schema.Struct({
  status: Schema.String,
  embed: Schema.optional(Schema.suspend(() => AppBskyEmbedExternal)),
  durationMinutes: Schema.optional(Schema.Number),
  createdAt: Schema.String,
});

export type AppBskyAgeassuranceDefsAccess = string;
export type AppBskyAgeassuranceDefsAccessEncoded = string;
export const AppBskyAgeassuranceDefsAccess: Schema.Schema<AppBskyAgeassuranceDefsAccess, AppBskyAgeassuranceDefsAccessEncoded, never> = Schema.String;

export interface AppBskyAgeassuranceDefsConfig {
  readonly regions: ReadonlyArray<AppBskyAgeassuranceDefsConfigRegion>;
}
export interface AppBskyAgeassuranceDefsConfigEncoded {
  readonly regions: ReadonlyArray<AppBskyAgeassuranceDefsConfigRegionEncoded>;
}
export const AppBskyAgeassuranceDefsConfig: Schema.Schema<AppBskyAgeassuranceDefsConfig, AppBskyAgeassuranceDefsConfigEncoded, never> = Schema.Struct({
  regions: Schema.Array(Schema.suspend(() => AppBskyAgeassuranceDefsConfigRegion)),
});

export type AppBskyAgeassuranceDefsConfigRegion = unknown;
export type AppBskyAgeassuranceDefsConfigRegionEncoded = unknown;
export const AppBskyAgeassuranceDefsConfigRegion: Schema.Schema<AppBskyAgeassuranceDefsConfigRegion, AppBskyAgeassuranceDefsConfigRegionEncoded, never> = Schema.Unknown;

export interface AppBskyAgeassuranceDefsConfigRegionRuleDefault {
  readonly access: AppBskyAgeassuranceDefsAccess;
}
export interface AppBskyAgeassuranceDefsConfigRegionRuleDefaultEncoded {
  readonly access: AppBskyAgeassuranceDefsAccessEncoded;
}
export const AppBskyAgeassuranceDefsConfigRegionRuleDefault: Schema.Schema<AppBskyAgeassuranceDefsConfigRegionRuleDefault, AppBskyAgeassuranceDefsConfigRegionRuleDefaultEncoded, never> = Schema.Struct({
  access: Schema.suspend(() => AppBskyAgeassuranceDefsAccess),
});

export interface AppBskyAgeassuranceDefsConfigRegionRuleIfAccountNewerThan {
  readonly date: string;
  readonly access: AppBskyAgeassuranceDefsAccess;
}
export interface AppBskyAgeassuranceDefsConfigRegionRuleIfAccountNewerThanEncoded {
  readonly date: string;
  readonly access: AppBskyAgeassuranceDefsAccessEncoded;
}
export const AppBskyAgeassuranceDefsConfigRegionRuleIfAccountNewerThan: Schema.Schema<AppBskyAgeassuranceDefsConfigRegionRuleIfAccountNewerThan, AppBskyAgeassuranceDefsConfigRegionRuleIfAccountNewerThanEncoded, never> = Schema.Struct({
  date: Schema.String,
  access: Schema.suspend(() => AppBskyAgeassuranceDefsAccess),
});

export interface AppBskyAgeassuranceDefsConfigRegionRuleIfAccountOlderThan {
  readonly date: string;
  readonly access: AppBskyAgeassuranceDefsAccess;
}
export interface AppBskyAgeassuranceDefsConfigRegionRuleIfAccountOlderThanEncoded {
  readonly date: string;
  readonly access: AppBskyAgeassuranceDefsAccessEncoded;
}
export const AppBskyAgeassuranceDefsConfigRegionRuleIfAccountOlderThan: Schema.Schema<AppBskyAgeassuranceDefsConfigRegionRuleIfAccountOlderThan, AppBskyAgeassuranceDefsConfigRegionRuleIfAccountOlderThanEncoded, never> = Schema.Struct({
  date: Schema.String,
  access: Schema.suspend(() => AppBskyAgeassuranceDefsAccess),
});

export interface AppBskyAgeassuranceDefsConfigRegionRuleIfAssuredOverAge {
  readonly age: number;
  readonly access: AppBskyAgeassuranceDefsAccess;
}
export interface AppBskyAgeassuranceDefsConfigRegionRuleIfAssuredOverAgeEncoded {
  readonly age: number;
  readonly access: AppBskyAgeassuranceDefsAccessEncoded;
}
export const AppBskyAgeassuranceDefsConfigRegionRuleIfAssuredOverAge: Schema.Schema<AppBskyAgeassuranceDefsConfigRegionRuleIfAssuredOverAge, AppBskyAgeassuranceDefsConfigRegionRuleIfAssuredOverAgeEncoded, never> = Schema.Struct({
  age: Schema.Number,
  access: Schema.suspend(() => AppBskyAgeassuranceDefsAccess),
});

export interface AppBskyAgeassuranceDefsConfigRegionRuleIfAssuredUnderAge {
  readonly age: number;
  readonly access: AppBskyAgeassuranceDefsAccess;
}
export interface AppBskyAgeassuranceDefsConfigRegionRuleIfAssuredUnderAgeEncoded {
  readonly age: number;
  readonly access: AppBskyAgeassuranceDefsAccessEncoded;
}
export const AppBskyAgeassuranceDefsConfigRegionRuleIfAssuredUnderAge: Schema.Schema<AppBskyAgeassuranceDefsConfigRegionRuleIfAssuredUnderAge, AppBskyAgeassuranceDefsConfigRegionRuleIfAssuredUnderAgeEncoded, never> = Schema.Struct({
  age: Schema.Number,
  access: Schema.suspend(() => AppBskyAgeassuranceDefsAccess),
});

export interface AppBskyAgeassuranceDefsConfigRegionRuleIfDeclaredOverAge {
  readonly age: number;
  readonly access: AppBskyAgeassuranceDefsAccess;
}
export interface AppBskyAgeassuranceDefsConfigRegionRuleIfDeclaredOverAgeEncoded {
  readonly age: number;
  readonly access: AppBskyAgeassuranceDefsAccessEncoded;
}
export const AppBskyAgeassuranceDefsConfigRegionRuleIfDeclaredOverAge: Schema.Schema<AppBskyAgeassuranceDefsConfigRegionRuleIfDeclaredOverAge, AppBskyAgeassuranceDefsConfigRegionRuleIfDeclaredOverAgeEncoded, never> = Schema.Struct({
  age: Schema.Number,
  access: Schema.suspend(() => AppBskyAgeassuranceDefsAccess),
});

export interface AppBskyAgeassuranceDefsConfigRegionRuleIfDeclaredUnderAge {
  readonly age: number;
  readonly access: AppBskyAgeassuranceDefsAccess;
}
export interface AppBskyAgeassuranceDefsConfigRegionRuleIfDeclaredUnderAgeEncoded {
  readonly age: number;
  readonly access: AppBskyAgeassuranceDefsAccessEncoded;
}
export const AppBskyAgeassuranceDefsConfigRegionRuleIfDeclaredUnderAge: Schema.Schema<AppBskyAgeassuranceDefsConfigRegionRuleIfDeclaredUnderAge, AppBskyAgeassuranceDefsConfigRegionRuleIfDeclaredUnderAgeEncoded, never> = Schema.Struct({
  age: Schema.Number,
  access: Schema.suspend(() => AppBskyAgeassuranceDefsAccess),
});

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
export interface AppBskyAgeassuranceDefsEventEncoded {
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
export const AppBskyAgeassuranceDefsEvent: Schema.Schema<AppBskyAgeassuranceDefsEvent, AppBskyAgeassuranceDefsEventEncoded, never> = Schema.Struct({
  createdAt: Schema.String,
  attemptId: Schema.String,
  status: Schema.String,
  access: Schema.String,
  countryCode: Schema.String,
  regionCode: Schema.optional(Schema.String),
  email: Schema.optional(Schema.String),
  initIp: Schema.optional(Schema.String),
  initUa: Schema.optional(Schema.String),
  completeIp: Schema.optional(Schema.String),
  completeUa: Schema.optional(Schema.String),
});

export interface AppBskyAgeassuranceDefsState {
  readonly lastInitiatedAt?: string;
  readonly status: AppBskyAgeassuranceDefsStatus;
  readonly access: AppBskyAgeassuranceDefsAccess;
}
export interface AppBskyAgeassuranceDefsStateEncoded {
  readonly lastInitiatedAt?: string;
  readonly status: AppBskyAgeassuranceDefsStatusEncoded;
  readonly access: AppBskyAgeassuranceDefsAccessEncoded;
}
export const AppBskyAgeassuranceDefsState: Schema.Schema<AppBskyAgeassuranceDefsState, AppBskyAgeassuranceDefsStateEncoded, never> = Schema.Struct({
  lastInitiatedAt: Schema.optional(Schema.String),
  status: Schema.suspend(() => AppBskyAgeassuranceDefsStatus),
  access: Schema.suspend(() => AppBskyAgeassuranceDefsAccess),
});

export interface AppBskyAgeassuranceDefsStateMetadata {
  readonly accountCreatedAt?: string;
}
export interface AppBskyAgeassuranceDefsStateMetadataEncoded {
  readonly accountCreatedAt?: string;
}
export const AppBskyAgeassuranceDefsStateMetadata: Schema.Schema<AppBskyAgeassuranceDefsStateMetadata, AppBskyAgeassuranceDefsStateMetadataEncoded, never> = Schema.Struct({
  accountCreatedAt: Schema.optional(Schema.String),
});

export type AppBskyAgeassuranceDefsStatus = string;
export type AppBskyAgeassuranceDefsStatusEncoded = string;
export const AppBskyAgeassuranceDefsStatus: Schema.Schema<AppBskyAgeassuranceDefsStatus, AppBskyAgeassuranceDefsStatusEncoded, never> = Schema.String;

export interface AppBskyBookmarkDefsBookmark {
  readonly subject: ComAtprotoRepoStrongRef;
}
export interface AppBskyBookmarkDefsBookmarkEncoded {
  readonly subject: ComAtprotoRepoStrongRefEncoded;
}
export const AppBskyBookmarkDefsBookmark: Schema.Schema<AppBskyBookmarkDefsBookmark, AppBskyBookmarkDefsBookmarkEncoded, never> = Schema.Struct({
  subject: Schema.suspend(() => ComAtprotoRepoStrongRef),
});

export interface AppBskyBookmarkDefsBookmarkView {
  readonly subject: ComAtprotoRepoStrongRef;
  readonly createdAt?: string;
  readonly item: AppBskyFeedDefsBlockedPost | AppBskyFeedDefsNotFoundPost | AppBskyFeedDefsPostView;
}
export interface AppBskyBookmarkDefsBookmarkViewEncoded {
  readonly subject: ComAtprotoRepoStrongRefEncoded;
  readonly createdAt?: string;
  readonly item: AppBskyFeedDefsBlockedPostEncoded | AppBskyFeedDefsNotFoundPostEncoded | AppBskyFeedDefsPostViewEncoded;
}
export const AppBskyBookmarkDefsBookmarkView: Schema.Schema<AppBskyBookmarkDefsBookmarkView, AppBskyBookmarkDefsBookmarkViewEncoded, never> = Schema.Struct({
  subject: Schema.suspend(() => ComAtprotoRepoStrongRef),
  createdAt: Schema.optional(Schema.String),
  item: Schema.Union(Schema.suspend(() => AppBskyFeedDefsBlockedPost), Schema.suspend(() => AppBskyFeedDefsNotFoundPost), Schema.suspend(() => AppBskyFeedDefsPostView)),
});

export interface AppBskyContactDefsMatchAndContactIndex {
  readonly match: AppBskyActorDefsProfileView;
  readonly contactIndex: number;
}
export interface AppBskyContactDefsMatchAndContactIndexEncoded {
  readonly match: AppBskyActorDefsProfileViewEncoded;
  readonly contactIndex: number;
}
export const AppBskyContactDefsMatchAndContactIndex: Schema.Schema<AppBskyContactDefsMatchAndContactIndex, AppBskyContactDefsMatchAndContactIndexEncoded, never> = Schema.Struct({
  match: Schema.suspend(() => AppBskyActorDefsProfileView),
  contactIndex: Schema.Number,
});

export interface AppBskyContactDefsNotification {
  readonly from: string;
  readonly to: string;
}
export interface AppBskyContactDefsNotificationEncoded {
  readonly from: string;
  readonly to: string;
}
export const AppBskyContactDefsNotification: Schema.Schema<AppBskyContactDefsNotification, AppBskyContactDefsNotificationEncoded, never> = Schema.Struct({
  from: Schema.String,
  to: Schema.String,
});

export interface AppBskyContactDefsSyncStatus {
  readonly syncedAt: string;
  readonly matchesCount: number;
}
export interface AppBskyContactDefsSyncStatusEncoded {
  readonly syncedAt: string;
  readonly matchesCount: number;
}
export const AppBskyContactDefsSyncStatus: Schema.Schema<AppBskyContactDefsSyncStatus, AppBskyContactDefsSyncStatusEncoded, never> = Schema.Struct({
  syncedAt: Schema.String,
  matchesCount: Schema.Number,
});

export type AppBskyDraftDefsDraft = unknown;
export type AppBskyDraftDefsDraftEncoded = unknown;
export const AppBskyDraftDefsDraft: Schema.Schema<AppBskyDraftDefsDraft, AppBskyDraftDefsDraftEncoded, never> = Schema.Unknown;

export interface AppBskyDraftDefsDraftEmbedCaption {
  readonly lang: string;
  readonly content: string;
}
export interface AppBskyDraftDefsDraftEmbedCaptionEncoded {
  readonly lang: string;
  readonly content: string;
}
export const AppBskyDraftDefsDraftEmbedCaption: Schema.Schema<AppBskyDraftDefsDraftEmbedCaption, AppBskyDraftDefsDraftEmbedCaptionEncoded, never> = Schema.Struct({
  lang: Schema.String,
  content: Schema.String,
});

export type AppBskyDraftDefsDraftEmbedExternal = unknown;
export type AppBskyDraftDefsDraftEmbedExternalEncoded = unknown;
export const AppBskyDraftDefsDraftEmbedExternal: Schema.Schema<AppBskyDraftDefsDraftEmbedExternal, AppBskyDraftDefsDraftEmbedExternalEncoded, never> = Schema.Unknown;

export type AppBskyDraftDefsDraftEmbedGallery = unknown;
export type AppBskyDraftDefsDraftEmbedGalleryEncoded = unknown;
export const AppBskyDraftDefsDraftEmbedGallery: Schema.Schema<AppBskyDraftDefsDraftEmbedGallery, AppBskyDraftDefsDraftEmbedGalleryEncoded, never> = Schema.Unknown;

export type AppBskyDraftDefsDraftEmbedGalleryItems = ReadonlyArray<AppBskyDraftDefsDraftEmbedImage>;
export type AppBskyDraftDefsDraftEmbedGalleryItemsEncoded = ReadonlyArray<AppBskyDraftDefsDraftEmbedImageEncoded>;
export const AppBskyDraftDefsDraftEmbedGalleryItems: Schema.Schema<AppBskyDraftDefsDraftEmbedGalleryItems, AppBskyDraftDefsDraftEmbedGalleryItemsEncoded, never> = Schema.Array(Schema.suspend(() => AppBskyDraftDefsDraftEmbedImage));

export type AppBskyDraftDefsDraftEmbedImage = unknown;
export type AppBskyDraftDefsDraftEmbedImageEncoded = unknown;
export const AppBskyDraftDefsDraftEmbedImage: Schema.Schema<AppBskyDraftDefsDraftEmbedImage, AppBskyDraftDefsDraftEmbedImageEncoded, never> = Schema.Unknown;

export interface AppBskyDraftDefsDraftEmbedLocalRef {
  readonly path: string;
}
export interface AppBskyDraftDefsDraftEmbedLocalRefEncoded {
  readonly path: string;
}
export const AppBskyDraftDefsDraftEmbedLocalRef: Schema.Schema<AppBskyDraftDefsDraftEmbedLocalRef, AppBskyDraftDefsDraftEmbedLocalRefEncoded, never> = Schema.Struct({
  path: Schema.String,
});

export type AppBskyDraftDefsDraftEmbedRecord = unknown;
export type AppBskyDraftDefsDraftEmbedRecordEncoded = unknown;
export const AppBskyDraftDefsDraftEmbedRecord: Schema.Schema<AppBskyDraftDefsDraftEmbedRecord, AppBskyDraftDefsDraftEmbedRecordEncoded, never> = Schema.Unknown;

export type AppBskyDraftDefsDraftEmbedVideo = unknown;
export type AppBskyDraftDefsDraftEmbedVideoEncoded = unknown;
export const AppBskyDraftDefsDraftEmbedVideo: Schema.Schema<AppBskyDraftDefsDraftEmbedVideo, AppBskyDraftDefsDraftEmbedVideoEncoded, never> = Schema.Unknown;

export interface AppBskyDraftDefsDraftPost {
  readonly text: string;
  readonly labels?: ComAtprotoLabelDefsSelfLabels;
  readonly embedImages?: ReadonlyArray<AppBskyDraftDefsDraftEmbedImage>;
  readonly embedGallery?: AppBskyDraftDefsDraftEmbedGallery;
  readonly embedVideos?: ReadonlyArray<AppBskyDraftDefsDraftEmbedVideo>;
  readonly embedExternals?: ReadonlyArray<AppBskyDraftDefsDraftEmbedExternal>;
  readonly embedRecords?: ReadonlyArray<AppBskyDraftDefsDraftEmbedRecord>;
}
export interface AppBskyDraftDefsDraftPostEncoded {
  readonly text: string;
  readonly labels?: ComAtprotoLabelDefsSelfLabelsEncoded;
  readonly embedImages?: ReadonlyArray<AppBskyDraftDefsDraftEmbedImageEncoded>;
  readonly embedGallery?: AppBskyDraftDefsDraftEmbedGalleryEncoded;
  readonly embedVideos?: ReadonlyArray<AppBskyDraftDefsDraftEmbedVideoEncoded>;
  readonly embedExternals?: ReadonlyArray<AppBskyDraftDefsDraftEmbedExternalEncoded>;
  readonly embedRecords?: ReadonlyArray<AppBskyDraftDefsDraftEmbedRecordEncoded>;
}
export const AppBskyDraftDefsDraftPost: Schema.Schema<AppBskyDraftDefsDraftPost, AppBskyDraftDefsDraftPostEncoded, never> = Schema.Struct({
  text: Schema.String,
  labels: Schema.optional(Schema.suspend(() => ComAtprotoLabelDefsSelfLabels)),
  embedImages: Schema.optional(Schema.Array(Schema.suspend(() => AppBskyDraftDefsDraftEmbedImage))),
  embedGallery: Schema.optional(Schema.suspend(() => AppBskyDraftDefsDraftEmbedGallery)),
  embedVideos: Schema.optional(Schema.Array(Schema.suspend(() => AppBskyDraftDefsDraftEmbedVideo))),
  embedExternals: Schema.optional(Schema.Array(Schema.suspend(() => AppBskyDraftDefsDraftEmbedExternal))),
  embedRecords: Schema.optional(Schema.Array(Schema.suspend(() => AppBskyDraftDefsDraftEmbedRecord))),
});

export interface AppBskyDraftDefsDraftView {
  readonly id: string;
  readonly draft: AppBskyDraftDefsDraft;
  readonly createdAt: string;
  readonly updatedAt: string;
}
export interface AppBskyDraftDefsDraftViewEncoded {
  readonly id: string;
  readonly draft: AppBskyDraftDefsDraftEncoded;
  readonly createdAt: string;
  readonly updatedAt: string;
}
export const AppBskyDraftDefsDraftView: Schema.Schema<AppBskyDraftDefsDraftView, AppBskyDraftDefsDraftViewEncoded, never> = Schema.Struct({
  id: Schema.String,
  draft: Schema.suspend(() => AppBskyDraftDefsDraft),
  createdAt: Schema.String,
  updatedAt: Schema.String,
});

export interface AppBskyDraftDefsDraftWithId {
  readonly id: string;
  readonly draft: AppBskyDraftDefsDraft;
}
export interface AppBskyDraftDefsDraftWithIdEncoded {
  readonly id: string;
  readonly draft: AppBskyDraftDefsDraftEncoded;
}
export const AppBskyDraftDefsDraftWithId: Schema.Schema<AppBskyDraftDefsDraftWithId, AppBskyDraftDefsDraftWithIdEncoded, never> = Schema.Struct({
  id: Schema.String,
  draft: Schema.suspend(() => AppBskyDraftDefsDraft),
});

export interface AppBskyEmbedDefsAspectRatio {
  readonly width: number;
  readonly height: number;
}
export interface AppBskyEmbedDefsAspectRatioEncoded {
  readonly width: number;
  readonly height: number;
}
export const AppBskyEmbedDefsAspectRatio: Schema.Schema<AppBskyEmbedDefsAspectRatio, AppBskyEmbedDefsAspectRatioEncoded, never> = Schema.Struct({
  width: Schema.Number,
  height: Schema.Number,
});

export type AppBskyEmbedExternal = unknown;
export type AppBskyEmbedExternalEncoded = unknown;
export const AppBskyEmbedExternal: Schema.Schema<AppBskyEmbedExternal, AppBskyEmbedExternalEncoded, never> = Schema.Unknown;

export type AppBskyEmbedExternalColorRGB = unknown;
export type AppBskyEmbedExternalColorRGBEncoded = unknown;
export const AppBskyEmbedExternalColorRGB: Schema.Schema<AppBskyEmbedExternalColorRGB, AppBskyEmbedExternalColorRGBEncoded, never> = Schema.Unknown;

export interface AppBskyEmbedExternalExternal {
  readonly uri: string;
  readonly title: string;
  readonly description: string;
  readonly thumb?: unknown;
  readonly associatedRefs?: ReadonlyArray<ComAtprotoRepoStrongRef>;
}
export interface AppBskyEmbedExternalExternalEncoded {
  readonly uri: string;
  readonly title: string;
  readonly description: string;
  readonly thumb?: unknown;
  readonly associatedRefs?: ReadonlyArray<ComAtprotoRepoStrongRefEncoded>;
}
export const AppBskyEmbedExternalExternal: Schema.Schema<AppBskyEmbedExternalExternal, AppBskyEmbedExternalExternalEncoded, never> = Schema.Struct({
  uri: Schema.String,
  title: Schema.String,
  description: Schema.String,
  thumb: Schema.optional(Schema.Unknown),
  associatedRefs: Schema.optional(Schema.Array(Schema.suspend(() => ComAtprotoRepoStrongRef))),
});

export type AppBskyEmbedExternalView = unknown;
export type AppBskyEmbedExternalViewEncoded = unknown;
export const AppBskyEmbedExternalView: Schema.Schema<AppBskyEmbedExternalView, AppBskyEmbedExternalViewEncoded, never> = Schema.Unknown;

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
export interface AppBskyEmbedExternalViewExternalEncoded {
  readonly uri: string;
  readonly title: string;
  readonly description: string;
  readonly thumb?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly readingTime?: number;
  readonly labels?: ReadonlyArray<ComAtprotoLabelDefsLabelEncoded>;
  readonly source?: AppBskyEmbedExternalViewExternalSourceEncoded;
  readonly associatedRefs?: ReadonlyArray<ComAtprotoRepoStrongRefEncoded>;
  readonly associatedProfiles?: ReadonlyArray<AppBskyActorDefsProfileViewBasicEncoded>;
}
export const AppBskyEmbedExternalViewExternal: Schema.Schema<AppBskyEmbedExternalViewExternal, AppBskyEmbedExternalViewExternalEncoded, never> = Schema.Struct({
  uri: Schema.String,
  title: Schema.String,
  description: Schema.String,
  thumb: Schema.optional(Schema.String),
  createdAt: Schema.optional(Schema.String),
  updatedAt: Schema.optional(Schema.String),
  readingTime: Schema.optional(Schema.Number),
  labels: Schema.optional(Schema.Array(Schema.suspend(() => ComAtprotoLabelDefsLabel))),
  source: Schema.optional(Schema.suspend(() => AppBskyEmbedExternalViewExternalSource)),
  associatedRefs: Schema.optional(Schema.Array(Schema.suspend(() => ComAtprotoRepoStrongRef))),
  associatedProfiles: Schema.optional(Schema.Array(Schema.suspend(() => AppBskyActorDefsProfileViewBasic))),
});

export type AppBskyEmbedExternalViewExternalSource = unknown;
export type AppBskyEmbedExternalViewExternalSourceEncoded = unknown;
export const AppBskyEmbedExternalViewExternalSource: Schema.Schema<AppBskyEmbedExternalViewExternalSource, AppBskyEmbedExternalViewExternalSourceEncoded, never> = Schema.Unknown;

export interface AppBskyEmbedExternalViewExternalSourceTheme {
  readonly backgroundRGB?: AppBskyEmbedExternalColorRGB;
  readonly foregroundRGB?: AppBskyEmbedExternalColorRGB;
  readonly accentRGB?: AppBskyEmbedExternalColorRGB;
  readonly accentForegroundRGB?: AppBskyEmbedExternalColorRGB;
}
export interface AppBskyEmbedExternalViewExternalSourceThemeEncoded {
  readonly backgroundRGB?: AppBskyEmbedExternalColorRGBEncoded;
  readonly foregroundRGB?: AppBskyEmbedExternalColorRGBEncoded;
  readonly accentRGB?: AppBskyEmbedExternalColorRGBEncoded;
  readonly accentForegroundRGB?: AppBskyEmbedExternalColorRGBEncoded;
}
export const AppBskyEmbedExternalViewExternalSourceTheme: Schema.Schema<AppBskyEmbedExternalViewExternalSourceTheme, AppBskyEmbedExternalViewExternalSourceThemeEncoded, never> = Schema.Struct({
  backgroundRGB: Schema.optional(Schema.suspend(() => AppBskyEmbedExternalColorRGB)),
  foregroundRGB: Schema.optional(Schema.suspend(() => AppBskyEmbedExternalColorRGB)),
  accentRGB: Schema.optional(Schema.suspend(() => AppBskyEmbedExternalColorRGB)),
  accentForegroundRGB: Schema.optional(Schema.suspend(() => AppBskyEmbedExternalColorRGB)),
});

export interface AppBskyEmbedGallery {
  readonly items: ReadonlyArray<AppBskyEmbedGalleryImage>;
}
export interface AppBskyEmbedGalleryEncoded {
  readonly items: ReadonlyArray<AppBskyEmbedGalleryImageEncoded>;
}
export const AppBskyEmbedGallery: Schema.Schema<AppBskyEmbedGallery, AppBskyEmbedGalleryEncoded, never> = Schema.Struct({
  items: Schema.Array(Schema.suspend(() => AppBskyEmbedGalleryImage)),
});

export interface AppBskyEmbedGalleryImage {
  readonly image: unknown;
  readonly alt: string;
  readonly aspectRatio: AppBskyEmbedDefsAspectRatio;
}
export interface AppBskyEmbedGalleryImageEncoded {
  readonly image: unknown;
  readonly alt: string;
  readonly aspectRatio: AppBskyEmbedDefsAspectRatioEncoded;
}
export const AppBskyEmbedGalleryImage: Schema.Schema<AppBskyEmbedGalleryImage, AppBskyEmbedGalleryImageEncoded, never> = Schema.Struct({
  image: Schema.Unknown,
  alt: Schema.String,
  aspectRatio: Schema.suspend(() => AppBskyEmbedDefsAspectRatio),
});

export interface AppBskyEmbedGalleryView {
  readonly items: ReadonlyArray<AppBskyEmbedGalleryViewImage>;
}
export interface AppBskyEmbedGalleryViewEncoded {
  readonly items: ReadonlyArray<AppBskyEmbedGalleryViewImageEncoded>;
}
export const AppBskyEmbedGalleryView: Schema.Schema<AppBskyEmbedGalleryView, AppBskyEmbedGalleryViewEncoded, never> = Schema.Struct({
  items: Schema.Array(Schema.suspend(() => AppBskyEmbedGalleryViewImage)),
});

export type AppBskyEmbedGalleryViewImage = unknown;
export type AppBskyEmbedGalleryViewImageEncoded = unknown;
export const AppBskyEmbedGalleryViewImage: Schema.Schema<AppBskyEmbedGalleryViewImage, AppBskyEmbedGalleryViewImageEncoded, never> = Schema.Unknown;

export interface AppBskyEmbedImages {
  readonly images: ReadonlyArray<AppBskyEmbedImagesImage>;
}
export interface AppBskyEmbedImagesEncoded {
  readonly images: ReadonlyArray<AppBskyEmbedImagesImageEncoded>;
}
export const AppBskyEmbedImages: Schema.Schema<AppBskyEmbedImages, AppBskyEmbedImagesEncoded, never> = Schema.Struct({
  images: Schema.Array(Schema.suspend(() => AppBskyEmbedImagesImage)),
});

export interface AppBskyEmbedImagesImage {
  readonly image: unknown;
  readonly alt: string;
  readonly aspectRatio?: AppBskyEmbedDefsAspectRatio;
}
export interface AppBskyEmbedImagesImageEncoded {
  readonly image: unknown;
  readonly alt: string;
  readonly aspectRatio?: AppBskyEmbedDefsAspectRatioEncoded;
}
export const AppBskyEmbedImagesImage: Schema.Schema<AppBskyEmbedImagesImage, AppBskyEmbedImagesImageEncoded, never> = Schema.Struct({
  image: Schema.Unknown,
  alt: Schema.String,
  aspectRatio: Schema.optional(Schema.suspend(() => AppBskyEmbedDefsAspectRatio)),
});

export interface AppBskyEmbedImagesView {
  readonly images: ReadonlyArray<AppBskyEmbedImagesViewImage>;
}
export interface AppBskyEmbedImagesViewEncoded {
  readonly images: ReadonlyArray<AppBskyEmbedImagesViewImageEncoded>;
}
export const AppBskyEmbedImagesView: Schema.Schema<AppBskyEmbedImagesView, AppBskyEmbedImagesViewEncoded, never> = Schema.Struct({
  images: Schema.Array(Schema.suspend(() => AppBskyEmbedImagesViewImage)),
});

export type AppBskyEmbedImagesViewImage = unknown;
export type AppBskyEmbedImagesViewImageEncoded = unknown;
export const AppBskyEmbedImagesViewImage: Schema.Schema<AppBskyEmbedImagesViewImage, AppBskyEmbedImagesViewImageEncoded, never> = Schema.Unknown;

export interface AppBskyEmbedRecord {
  readonly record: ComAtprotoRepoStrongRef;
}
export interface AppBskyEmbedRecordEncoded {
  readonly record: ComAtprotoRepoStrongRefEncoded;
}
export const AppBskyEmbedRecord: Schema.Schema<AppBskyEmbedRecord, AppBskyEmbedRecordEncoded, never> = Schema.Struct({
  record: Schema.suspend(() => ComAtprotoRepoStrongRef),
});

export interface AppBskyEmbedRecordView {
  readonly record: AppBskyEmbedRecordViewRecord | AppBskyEmbedRecordViewNotFound | AppBskyEmbedRecordViewBlocked | AppBskyEmbedRecordViewDetached | AppBskyFeedDefsGeneratorView | AppBskyGraphDefsListView | AppBskyLabelerDefsLabelerView | AppBskyGraphDefsStarterPackViewBasic;
}
export interface AppBskyEmbedRecordViewEncoded {
  readonly record: AppBskyEmbedRecordViewRecordEncoded | AppBskyEmbedRecordViewNotFoundEncoded | AppBskyEmbedRecordViewBlockedEncoded | AppBskyEmbedRecordViewDetachedEncoded | AppBskyFeedDefsGeneratorViewEncoded | AppBskyGraphDefsListViewEncoded | AppBskyLabelerDefsLabelerViewEncoded | AppBskyGraphDefsStarterPackViewBasicEncoded;
}
export const AppBskyEmbedRecordView: Schema.Schema<AppBskyEmbedRecordView, AppBskyEmbedRecordViewEncoded, never> = Schema.Struct({
  record: Schema.Union(Schema.suspend(() => AppBskyEmbedRecordViewRecord), Schema.suspend(() => AppBskyEmbedRecordViewNotFound), Schema.suspend(() => AppBskyEmbedRecordViewBlocked), Schema.suspend(() => AppBskyEmbedRecordViewDetached), Schema.suspend(() => AppBskyFeedDefsGeneratorView), Schema.suspend(() => AppBskyGraphDefsListView), Schema.suspend(() => AppBskyLabelerDefsLabelerView), Schema.suspend(() => AppBskyGraphDefsStarterPackViewBasic)),
});

export type AppBskyEmbedRecordViewBlocked = unknown;
export type AppBskyEmbedRecordViewBlockedEncoded = unknown;
export const AppBskyEmbedRecordViewBlocked: Schema.Schema<AppBskyEmbedRecordViewBlocked, AppBskyEmbedRecordViewBlockedEncoded, never> = Schema.Unknown;

export type AppBskyEmbedRecordViewDetached = unknown;
export type AppBskyEmbedRecordViewDetachedEncoded = unknown;
export const AppBskyEmbedRecordViewDetached: Schema.Schema<AppBskyEmbedRecordViewDetached, AppBskyEmbedRecordViewDetachedEncoded, never> = Schema.Unknown;

export type AppBskyEmbedRecordViewNotFound = unknown;
export type AppBskyEmbedRecordViewNotFoundEncoded = unknown;
export const AppBskyEmbedRecordViewNotFound: Schema.Schema<AppBskyEmbedRecordViewNotFound, AppBskyEmbedRecordViewNotFoundEncoded, never> = Schema.Unknown;

export type AppBskyEmbedRecordViewRecord = unknown;
export type AppBskyEmbedRecordViewRecordEncoded = unknown;
export const AppBskyEmbedRecordViewRecord: Schema.Schema<AppBskyEmbedRecordViewRecord, AppBskyEmbedRecordViewRecordEncoded, never> = Schema.Unknown;

export interface AppBskyEmbedRecordWithMedia {
  readonly record: AppBskyEmbedRecord;
  readonly media: AppBskyEmbedImages | AppBskyEmbedVideo | AppBskyEmbedGallery | AppBskyEmbedExternal;
}
export interface AppBskyEmbedRecordWithMediaEncoded {
  readonly record: AppBskyEmbedRecordEncoded;
  readonly media: AppBskyEmbedImagesEncoded | AppBskyEmbedVideoEncoded | AppBskyEmbedGalleryEncoded | AppBskyEmbedExternalEncoded;
}
export const AppBskyEmbedRecordWithMedia: Schema.Schema<AppBskyEmbedRecordWithMedia, AppBskyEmbedRecordWithMediaEncoded, never> = Schema.Struct({
  record: Schema.suspend(() => AppBskyEmbedRecord),
  media: Schema.Union(Schema.suspend(() => AppBskyEmbedImages), Schema.suspend(() => AppBskyEmbedVideo), Schema.suspend(() => AppBskyEmbedGallery), Schema.suspend(() => AppBskyEmbedExternal)),
});

export interface AppBskyEmbedRecordWithMediaView {
  readonly record: AppBskyEmbedRecordView;
  readonly media: AppBskyEmbedImagesView | AppBskyEmbedVideoView | AppBskyEmbedGalleryView | AppBskyEmbedExternalView;
}
export interface AppBskyEmbedRecordWithMediaViewEncoded {
  readonly record: AppBskyEmbedRecordViewEncoded;
  readonly media: AppBskyEmbedImagesViewEncoded | AppBskyEmbedVideoViewEncoded | AppBskyEmbedGalleryViewEncoded | AppBskyEmbedExternalViewEncoded;
}
export const AppBskyEmbedRecordWithMediaView: Schema.Schema<AppBskyEmbedRecordWithMediaView, AppBskyEmbedRecordWithMediaViewEncoded, never> = Schema.Struct({
  record: Schema.suspend(() => AppBskyEmbedRecordView),
  media: Schema.Union(Schema.suspend(() => AppBskyEmbedImagesView), Schema.suspend(() => AppBskyEmbedVideoView), Schema.suspend(() => AppBskyEmbedGalleryView), Schema.suspend(() => AppBskyEmbedExternalView)),
});

export type AppBskyEmbedVideo = unknown;
export type AppBskyEmbedVideoEncoded = unknown;
export const AppBskyEmbedVideo: Schema.Schema<AppBskyEmbedVideo, AppBskyEmbedVideoEncoded, never> = Schema.Unknown;

export interface AppBskyEmbedVideoCaption {
  readonly lang: string;
  readonly file: unknown;
}
export interface AppBskyEmbedVideoCaptionEncoded {
  readonly lang: string;
  readonly file: unknown;
}
export const AppBskyEmbedVideoCaption: Schema.Schema<AppBskyEmbedVideoCaption, AppBskyEmbedVideoCaptionEncoded, never> = Schema.Struct({
  lang: Schema.String,
  file: Schema.Unknown,
});

export type AppBskyEmbedVideoView = unknown;
export type AppBskyEmbedVideoViewEncoded = unknown;
export const AppBskyEmbedVideoView: Schema.Schema<AppBskyEmbedVideoView, AppBskyEmbedVideoViewEncoded, never> = Schema.Unknown;

export type AppBskyFeedDefsBlockedAuthor = unknown;
export type AppBskyFeedDefsBlockedAuthorEncoded = unknown;
export const AppBskyFeedDefsBlockedAuthor: Schema.Schema<AppBskyFeedDefsBlockedAuthor, AppBskyFeedDefsBlockedAuthorEncoded, never> = Schema.Unknown;

export type AppBskyFeedDefsBlockedPost = unknown;
export type AppBskyFeedDefsBlockedPostEncoded = unknown;
export const AppBskyFeedDefsBlockedPost: Schema.Schema<AppBskyFeedDefsBlockedPost, AppBskyFeedDefsBlockedPostEncoded, never> = Schema.Unknown;

export interface AppBskyFeedDefsFeedViewPost {
  readonly post: AppBskyFeedDefsPostView;
  readonly reply?: AppBskyFeedDefsReplyRef;
  readonly reason?: AppBskyFeedDefsReasonRepost | AppBskyFeedDefsReasonPin;
  readonly feedContext?: string;
  readonly reqId?: string;
}
export interface AppBskyFeedDefsFeedViewPostEncoded {
  readonly post: AppBskyFeedDefsPostViewEncoded;
  readonly reply?: AppBskyFeedDefsReplyRefEncoded;
  readonly reason?: AppBskyFeedDefsReasonRepostEncoded | AppBskyFeedDefsReasonPinEncoded;
  readonly feedContext?: string;
  readonly reqId?: string;
}
export const AppBskyFeedDefsFeedViewPost: Schema.Schema<AppBskyFeedDefsFeedViewPost, AppBskyFeedDefsFeedViewPostEncoded, never> = Schema.Struct({
  post: Schema.suspend(() => AppBskyFeedDefsPostView),
  reply: Schema.optional(Schema.suspend(() => AppBskyFeedDefsReplyRef)),
  reason: Schema.optional(Schema.Union(Schema.suspend(() => AppBskyFeedDefsReasonRepost), Schema.suspend(() => AppBskyFeedDefsReasonPin))),
  feedContext: Schema.optional(Schema.String),
  reqId: Schema.optional(Schema.String),
});

export type AppBskyFeedDefsGeneratorView = unknown;
export type AppBskyFeedDefsGeneratorViewEncoded = unknown;
export const AppBskyFeedDefsGeneratorView: Schema.Schema<AppBskyFeedDefsGeneratorView, AppBskyFeedDefsGeneratorViewEncoded, never> = Schema.Unknown;

export interface AppBskyFeedDefsGeneratorViewerState {
  readonly like?: string;
}
export interface AppBskyFeedDefsGeneratorViewerStateEncoded {
  readonly like?: string;
}
export const AppBskyFeedDefsGeneratorViewerState: Schema.Schema<AppBskyFeedDefsGeneratorViewerState, AppBskyFeedDefsGeneratorViewerStateEncoded, never> = Schema.Struct({
  like: Schema.optional(Schema.String),
});

export interface AppBskyFeedDefsInteraction {
  readonly item?: string;
  readonly event?: string;
  readonly feedContext?: string;
  readonly reqId?: string;
}
export interface AppBskyFeedDefsInteractionEncoded {
  readonly item?: string;
  readonly event?: string;
  readonly feedContext?: string;
  readonly reqId?: string;
}
export const AppBskyFeedDefsInteraction: Schema.Schema<AppBskyFeedDefsInteraction, AppBskyFeedDefsInteractionEncoded, never> = Schema.Struct({
  item: Schema.optional(Schema.String),
  event: Schema.optional(Schema.String),
  feedContext: Schema.optional(Schema.String),
  reqId: Schema.optional(Schema.String),
});

export type AppBskyFeedDefsNotFoundPost = unknown;
export type AppBskyFeedDefsNotFoundPostEncoded = unknown;
export const AppBskyFeedDefsNotFoundPost: Schema.Schema<AppBskyFeedDefsNotFoundPost, AppBskyFeedDefsNotFoundPostEncoded, never> = Schema.Unknown;

export type AppBskyFeedDefsPostView = unknown;
export type AppBskyFeedDefsPostViewEncoded = unknown;
export const AppBskyFeedDefsPostView: Schema.Schema<AppBskyFeedDefsPostView, AppBskyFeedDefsPostViewEncoded, never> = Schema.Unknown;

export type AppBskyFeedDefsReasonPin = unknown;
export type AppBskyFeedDefsReasonPinEncoded = unknown;
export const AppBskyFeedDefsReasonPin: Schema.Schema<AppBskyFeedDefsReasonPin, AppBskyFeedDefsReasonPinEncoded, never> = Schema.Unknown;

export type AppBskyFeedDefsReasonRepost = unknown;
export type AppBskyFeedDefsReasonRepostEncoded = unknown;
export const AppBskyFeedDefsReasonRepost: Schema.Schema<AppBskyFeedDefsReasonRepost, AppBskyFeedDefsReasonRepostEncoded, never> = Schema.Unknown;

export type AppBskyFeedDefsReplyRef = unknown;
export type AppBskyFeedDefsReplyRefEncoded = unknown;
export const AppBskyFeedDefsReplyRef: Schema.Schema<AppBskyFeedDefsReplyRef, AppBskyFeedDefsReplyRefEncoded, never> = Schema.Unknown;

export interface AppBskyFeedDefsSkeletonFeedPost {
  readonly post: string;
  readonly reason?: AppBskyFeedDefsSkeletonReasonRepost | AppBskyFeedDefsSkeletonReasonPin;
  readonly feedContext?: string;
}
export interface AppBskyFeedDefsSkeletonFeedPostEncoded {
  readonly post: string;
  readonly reason?: AppBskyFeedDefsSkeletonReasonRepostEncoded | AppBskyFeedDefsSkeletonReasonPinEncoded;
  readonly feedContext?: string;
}
export const AppBskyFeedDefsSkeletonFeedPost: Schema.Schema<AppBskyFeedDefsSkeletonFeedPost, AppBskyFeedDefsSkeletonFeedPostEncoded, never> = Schema.Struct({
  post: Schema.String,
  reason: Schema.optional(Schema.Union(Schema.suspend(() => AppBskyFeedDefsSkeletonReasonRepost), Schema.suspend(() => AppBskyFeedDefsSkeletonReasonPin))),
  feedContext: Schema.optional(Schema.String),
});

export type AppBskyFeedDefsSkeletonReasonPin = unknown;
export type AppBskyFeedDefsSkeletonReasonPinEncoded = unknown;
export const AppBskyFeedDefsSkeletonReasonPin: Schema.Schema<AppBskyFeedDefsSkeletonReasonPin, AppBskyFeedDefsSkeletonReasonPinEncoded, never> = Schema.Unknown;

export type AppBskyFeedDefsSkeletonReasonRepost = unknown;
export type AppBskyFeedDefsSkeletonReasonRepostEncoded = unknown;
export const AppBskyFeedDefsSkeletonReasonRepost: Schema.Schema<AppBskyFeedDefsSkeletonReasonRepost, AppBskyFeedDefsSkeletonReasonRepostEncoded, never> = Schema.Unknown;

export interface AppBskyFeedDefsThreadContext {
  readonly rootAuthorLike?: string;
}
export interface AppBskyFeedDefsThreadContextEncoded {
  readonly rootAuthorLike?: string;
}
export const AppBskyFeedDefsThreadContext: Schema.Schema<AppBskyFeedDefsThreadContext, AppBskyFeedDefsThreadContextEncoded, never> = Schema.Struct({
  rootAuthorLike: Schema.optional(Schema.String),
});

export interface AppBskyFeedDefsThreadgateView {
  readonly uri?: string;
  readonly cid?: string;
  readonly record?: unknown;
  readonly lists?: ReadonlyArray<AppBskyGraphDefsListViewBasic>;
}
export interface AppBskyFeedDefsThreadgateViewEncoded {
  readonly uri?: string;
  readonly cid?: string;
  readonly record?: unknown;
  readonly lists?: ReadonlyArray<AppBskyGraphDefsListViewBasicEncoded>;
}
export const AppBskyFeedDefsThreadgateView: Schema.Schema<AppBskyFeedDefsThreadgateView, AppBskyFeedDefsThreadgateViewEncoded, never> = Schema.Struct({
  uri: Schema.optional(Schema.String),
  cid: Schema.optional(Schema.String),
  record: Schema.optional(Schema.Unknown),
  lists: Schema.optional(Schema.Array(Schema.suspend(() => AppBskyGraphDefsListViewBasic))),
});

export interface AppBskyFeedDefsThreadViewPost {
  readonly post: AppBskyFeedDefsPostView;
  readonly parent?: AppBskyFeedDefsThreadViewPost | AppBskyFeedDefsNotFoundPost | AppBskyFeedDefsBlockedPost;
  readonly replies?: ReadonlyArray<AppBskyFeedDefsThreadViewPost | AppBskyFeedDefsNotFoundPost | AppBskyFeedDefsBlockedPost>;
  readonly threadContext?: AppBskyFeedDefsThreadContext;
}
export interface AppBskyFeedDefsThreadViewPostEncoded {
  readonly post: AppBskyFeedDefsPostViewEncoded;
  readonly parent?: AppBskyFeedDefsThreadViewPostEncoded | AppBskyFeedDefsNotFoundPostEncoded | AppBskyFeedDefsBlockedPostEncoded;
  readonly replies?: ReadonlyArray<AppBskyFeedDefsThreadViewPostEncoded | AppBskyFeedDefsNotFoundPostEncoded | AppBskyFeedDefsBlockedPostEncoded>;
  readonly threadContext?: AppBskyFeedDefsThreadContextEncoded;
}
export const AppBskyFeedDefsThreadViewPost: Schema.Schema<AppBskyFeedDefsThreadViewPost, AppBskyFeedDefsThreadViewPostEncoded, never> = Schema.Struct({
  post: Schema.suspend(() => AppBskyFeedDefsPostView),
  parent: Schema.optional(Schema.Union(Schema.suspend(() => AppBskyFeedDefsThreadViewPost), Schema.suspend(() => AppBskyFeedDefsNotFoundPost), Schema.suspend(() => AppBskyFeedDefsBlockedPost))),
  replies: Schema.optional(Schema.Array(Schema.Union(Schema.suspend(() => AppBskyFeedDefsThreadViewPost), Schema.suspend(() => AppBskyFeedDefsNotFoundPost), Schema.suspend(() => AppBskyFeedDefsBlockedPost)))),
  threadContext: Schema.optional(Schema.suspend(() => AppBskyFeedDefsThreadContext)),
});

export interface AppBskyFeedDefsViewerState {
  readonly repost?: string;
  readonly like?: string;
  readonly bookmarked?: boolean;
  readonly threadMuted?: boolean;
  readonly replyDisabled?: boolean;
  readonly embeddingDisabled?: boolean;
  readonly pinned?: boolean;
}
export interface AppBskyFeedDefsViewerStateEncoded {
  readonly repost?: string;
  readonly like?: string;
  readonly bookmarked?: boolean;
  readonly threadMuted?: boolean;
  readonly replyDisabled?: boolean;
  readonly embeddingDisabled?: boolean;
  readonly pinned?: boolean;
}
export const AppBskyFeedDefsViewerState: Schema.Schema<AppBskyFeedDefsViewerState, AppBskyFeedDefsViewerStateEncoded, never> = Schema.Struct({
  repost: Schema.optional(Schema.String),
  like: Schema.optional(Schema.String),
  bookmarked: Schema.optional(Schema.Boolean),
  threadMuted: Schema.optional(Schema.Boolean),
  replyDisabled: Schema.optional(Schema.Boolean),
  embeddingDisabled: Schema.optional(Schema.Boolean),
  pinned: Schema.optional(Schema.Boolean),
});

export interface AppBskyFeedDescribeFeedGeneratorFeed {
  readonly uri: string;
}
export interface AppBskyFeedDescribeFeedGeneratorFeedEncoded {
  readonly uri: string;
}
export const AppBskyFeedDescribeFeedGeneratorFeed: Schema.Schema<AppBskyFeedDescribeFeedGeneratorFeed, AppBskyFeedDescribeFeedGeneratorFeedEncoded, never> = Schema.Struct({
  uri: Schema.String,
});

export interface AppBskyFeedDescribeFeedGeneratorLinks {
  readonly privacyPolicy?: string;
  readonly termsOfService?: string;
}
export interface AppBskyFeedDescribeFeedGeneratorLinksEncoded {
  readonly privacyPolicy?: string;
  readonly termsOfService?: string;
}
export const AppBskyFeedDescribeFeedGeneratorLinks: Schema.Schema<AppBskyFeedDescribeFeedGeneratorLinks, AppBskyFeedDescribeFeedGeneratorLinksEncoded, never> = Schema.Struct({
  privacyPolicy: Schema.optional(Schema.String),
  termsOfService: Schema.optional(Schema.String),
});

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
export interface AppBskyFeedGeneratorEncoded {
  readonly did: string;
  readonly displayName: string;
  readonly description?: string;
  readonly descriptionFacets?: ReadonlyArray<AppBskyRichtextFacetEncoded>;
  readonly avatar?: unknown;
  readonly acceptsInteractions?: boolean;
  readonly labels?: ComAtprotoLabelDefsSelfLabelsEncoded;
  readonly contentMode?: string;
  readonly createdAt: string;
}
export const AppBskyFeedGenerator: Schema.Schema<AppBskyFeedGenerator, AppBskyFeedGeneratorEncoded, never> = Schema.Struct({
  did: Schema.String,
  displayName: Schema.String,
  description: Schema.optional(Schema.String),
  descriptionFacets: Schema.optional(Schema.Array(Schema.suspend(() => AppBskyRichtextFacet))),
  avatar: Schema.optional(Schema.Unknown),
  acceptsInteractions: Schema.optional(Schema.Boolean),
  labels: Schema.optional(Schema.suspend(() => ComAtprotoLabelDefsSelfLabels)),
  contentMode: Schema.optional(Schema.String),
  createdAt: Schema.String,
});

export interface AppBskyFeedGetLikesLike {
  readonly indexedAt: string;
  readonly createdAt: string;
  readonly actor: AppBskyActorDefsProfileView;
}
export interface AppBskyFeedGetLikesLikeEncoded {
  readonly indexedAt: string;
  readonly createdAt: string;
  readonly actor: AppBskyActorDefsProfileViewEncoded;
}
export const AppBskyFeedGetLikesLike: Schema.Schema<AppBskyFeedGetLikesLike, AppBskyFeedGetLikesLikeEncoded, never> = Schema.Struct({
  indexedAt: Schema.String,
  createdAt: Schema.String,
  actor: Schema.suspend(() => AppBskyActorDefsProfileView),
});

export interface AppBskyFeedLike {
  readonly subject: ComAtprotoRepoStrongRef;
  readonly createdAt: string;
  readonly via?: ComAtprotoRepoStrongRef;
}
export interface AppBskyFeedLikeEncoded {
  readonly subject: ComAtprotoRepoStrongRefEncoded;
  readonly createdAt: string;
  readonly via?: ComAtprotoRepoStrongRefEncoded;
}
export const AppBskyFeedLike: Schema.Schema<AppBskyFeedLike, AppBskyFeedLikeEncoded, never> = Schema.Struct({
  subject: Schema.suspend(() => ComAtprotoRepoStrongRef),
  createdAt: Schema.String,
  via: Schema.optional(Schema.suspend(() => ComAtprotoRepoStrongRef)),
});

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
export interface AppBskyFeedPostEncoded {
  readonly text: string;
  readonly entities?: ReadonlyArray<AppBskyFeedPostEntityEncoded>;
  readonly facets?: ReadonlyArray<AppBskyRichtextFacetEncoded>;
  readonly reply?: AppBskyFeedPostReplyRefEncoded;
  readonly embed?: AppBskyEmbedImagesEncoded | AppBskyEmbedVideoEncoded | AppBskyEmbedGalleryEncoded | AppBskyEmbedExternalEncoded | AppBskyEmbedRecordEncoded | AppBskyEmbedRecordWithMediaEncoded;
  readonly langs?: ReadonlyArray<string>;
  readonly labels?: ComAtprotoLabelDefsSelfLabelsEncoded;
  readonly tags?: ReadonlyArray<string>;
  readonly createdAt: string;
}
export const AppBskyFeedPost: Schema.Schema<AppBskyFeedPost, AppBskyFeedPostEncoded, never> = Schema.Struct({
  text: Schema.String,
  entities: Schema.optional(Schema.Array(Schema.suspend(() => AppBskyFeedPostEntity))),
  facets: Schema.optional(Schema.Array(Schema.suspend(() => AppBskyRichtextFacet))),
  reply: Schema.optional(Schema.suspend(() => AppBskyFeedPostReplyRef)),
  embed: Schema.optional(Schema.Union(Schema.suspend(() => AppBskyEmbedImages), Schema.suspend(() => AppBskyEmbedVideo), Schema.suspend(() => AppBskyEmbedGallery), Schema.suspend(() => AppBskyEmbedExternal), Schema.suspend(() => AppBskyEmbedRecord), Schema.suspend(() => AppBskyEmbedRecordWithMedia))),
  langs: Schema.optional(Schema.Array(Schema.String)),
  labels: Schema.optional(Schema.suspend(() => ComAtprotoLabelDefsSelfLabels)),
  tags: Schema.optional(Schema.Array(Schema.String)),
  createdAt: Schema.String,
});

export interface AppBskyFeedPostEntity {
  readonly index: AppBskyFeedPostTextSlice;
  readonly type: string;
  readonly value: string;
}
export interface AppBskyFeedPostEntityEncoded {
  readonly index: AppBskyFeedPostTextSliceEncoded;
  readonly type: string;
  readonly value: string;
}
export const AppBskyFeedPostEntity: Schema.Schema<AppBskyFeedPostEntity, AppBskyFeedPostEntityEncoded, never> = Schema.Struct({
  index: Schema.suspend(() => AppBskyFeedPostTextSlice),
  type: Schema.String,
  value: Schema.String,
});

export interface AppBskyFeedPostgate {
  readonly createdAt: string;
  readonly post: string;
  readonly detachedEmbeddingUris?: ReadonlyArray<string>;
  readonly embeddingRules?: ReadonlyArray<AppBskyFeedPostgateDisableRule>;
}
export interface AppBskyFeedPostgateEncoded {
  readonly createdAt: string;
  readonly post: string;
  readonly detachedEmbeddingUris?: ReadonlyArray<string>;
  readonly embeddingRules?: ReadonlyArray<AppBskyFeedPostgateDisableRuleEncoded>;
}
export const AppBskyFeedPostgate: Schema.Schema<AppBskyFeedPostgate, AppBskyFeedPostgateEncoded, never> = Schema.Struct({
  createdAt: Schema.String,
  post: Schema.String,
  detachedEmbeddingUris: Schema.optional(Schema.Array(Schema.String)),
  embeddingRules: Schema.optional(Schema.Array(Schema.suspend(() => AppBskyFeedPostgateDisableRule))),
});

export interface AppBskyFeedPostgateDisableRule {

}
export interface AppBskyFeedPostgateDisableRuleEncoded {

}
export const AppBskyFeedPostgateDisableRule: Schema.Schema<AppBskyFeedPostgateDisableRule, AppBskyFeedPostgateDisableRuleEncoded, never> = Schema.Struct({

});

export interface AppBskyFeedPostReplyRef {
  readonly root: ComAtprotoRepoStrongRef;
  readonly parent: ComAtprotoRepoStrongRef;
}
export interface AppBskyFeedPostReplyRefEncoded {
  readonly root: ComAtprotoRepoStrongRefEncoded;
  readonly parent: ComAtprotoRepoStrongRefEncoded;
}
export const AppBskyFeedPostReplyRef: Schema.Schema<AppBskyFeedPostReplyRef, AppBskyFeedPostReplyRefEncoded, never> = Schema.Struct({
  root: Schema.suspend(() => ComAtprotoRepoStrongRef),
  parent: Schema.suspend(() => ComAtprotoRepoStrongRef),
});

export type AppBskyFeedPostTextSlice = unknown;
export type AppBskyFeedPostTextSliceEncoded = unknown;
export const AppBskyFeedPostTextSlice: Schema.Schema<AppBskyFeedPostTextSlice, AppBskyFeedPostTextSliceEncoded, never> = Schema.Unknown;

export interface AppBskyFeedRepost {
  readonly subject: ComAtprotoRepoStrongRef;
  readonly createdAt: string;
  readonly via?: ComAtprotoRepoStrongRef;
}
export interface AppBskyFeedRepostEncoded {
  readonly subject: ComAtprotoRepoStrongRefEncoded;
  readonly createdAt: string;
  readonly via?: ComAtprotoRepoStrongRefEncoded;
}
export const AppBskyFeedRepost: Schema.Schema<AppBskyFeedRepost, AppBskyFeedRepostEncoded, never> = Schema.Struct({
  subject: Schema.suspend(() => ComAtprotoRepoStrongRef),
  createdAt: Schema.String,
  via: Schema.optional(Schema.suspend(() => ComAtprotoRepoStrongRef)),
});

export interface AppBskyFeedThreadgate {
  readonly post: string;
  readonly allow?: ReadonlyArray<AppBskyFeedThreadgateMentionRule | AppBskyFeedThreadgateFollowerRule | AppBskyFeedThreadgateFollowingRule | AppBskyFeedThreadgateListRule>;
  readonly createdAt: string;
  readonly hiddenReplies?: ReadonlyArray<string>;
}
export interface AppBskyFeedThreadgateEncoded {
  readonly post: string;
  readonly allow?: ReadonlyArray<AppBskyFeedThreadgateMentionRuleEncoded | AppBskyFeedThreadgateFollowerRuleEncoded | AppBskyFeedThreadgateFollowingRuleEncoded | AppBskyFeedThreadgateListRuleEncoded>;
  readonly createdAt: string;
  readonly hiddenReplies?: ReadonlyArray<string>;
}
export const AppBskyFeedThreadgate: Schema.Schema<AppBskyFeedThreadgate, AppBskyFeedThreadgateEncoded, never> = Schema.Struct({
  post: Schema.String,
  allow: Schema.optional(Schema.Array(Schema.Union(Schema.suspend(() => AppBskyFeedThreadgateMentionRule), Schema.suspend(() => AppBskyFeedThreadgateFollowerRule), Schema.suspend(() => AppBskyFeedThreadgateFollowingRule), Schema.suspend(() => AppBskyFeedThreadgateListRule)))),
  createdAt: Schema.String,
  hiddenReplies: Schema.optional(Schema.Array(Schema.String)),
});

export interface AppBskyFeedThreadgateFollowerRule {

}
export interface AppBskyFeedThreadgateFollowerRuleEncoded {

}
export const AppBskyFeedThreadgateFollowerRule: Schema.Schema<AppBskyFeedThreadgateFollowerRule, AppBskyFeedThreadgateFollowerRuleEncoded, never> = Schema.Struct({

});

export interface AppBskyFeedThreadgateFollowingRule {

}
export interface AppBskyFeedThreadgateFollowingRuleEncoded {

}
export const AppBskyFeedThreadgateFollowingRule: Schema.Schema<AppBskyFeedThreadgateFollowingRule, AppBskyFeedThreadgateFollowingRuleEncoded, never> = Schema.Struct({

});

export interface AppBskyFeedThreadgateListRule {
  readonly list: string;
}
export interface AppBskyFeedThreadgateListRuleEncoded {
  readonly list: string;
}
export const AppBskyFeedThreadgateListRule: Schema.Schema<AppBskyFeedThreadgateListRule, AppBskyFeedThreadgateListRuleEncoded, never> = Schema.Struct({
  list: Schema.String,
});

export interface AppBskyFeedThreadgateMentionRule {

}
export interface AppBskyFeedThreadgateMentionRuleEncoded {

}
export const AppBskyFeedThreadgateMentionRule: Schema.Schema<AppBskyFeedThreadgateMentionRule, AppBskyFeedThreadgateMentionRuleEncoded, never> = Schema.Struct({

});

export interface AppBskyGraphBlock {
  readonly subject: string;
  readonly createdAt: string;
}
export interface AppBskyGraphBlockEncoded {
  readonly subject: string;
  readonly createdAt: string;
}
export const AppBskyGraphBlock: Schema.Schema<AppBskyGraphBlock, AppBskyGraphBlockEncoded, never> = Schema.Struct({
  subject: Schema.String,
  createdAt: Schema.String,
});

export type AppBskyGraphDefsListItemView = unknown;
export type AppBskyGraphDefsListItemViewEncoded = unknown;
export const AppBskyGraphDefsListItemView: Schema.Schema<AppBskyGraphDefsListItemView, AppBskyGraphDefsListItemViewEncoded, never> = Schema.Unknown;

export type AppBskyGraphDefsListPurpose = unknown;
export type AppBskyGraphDefsListPurposeEncoded = unknown;
export const AppBskyGraphDefsListPurpose: Schema.Schema<AppBskyGraphDefsListPurpose, AppBskyGraphDefsListPurposeEncoded, never> = Schema.Unknown;

export type AppBskyGraphDefsListView = unknown;
export type AppBskyGraphDefsListViewEncoded = unknown;
export const AppBskyGraphDefsListView: Schema.Schema<AppBskyGraphDefsListView, AppBskyGraphDefsListViewEncoded, never> = Schema.Unknown;

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
export interface AppBskyGraphDefsListViewBasicEncoded {
  readonly uri: string;
  readonly cid: string;
  readonly name: string;
  readonly purpose: AppBskyGraphDefsListPurposeEncoded;
  readonly avatar?: string;
  readonly listItemCount?: number;
  readonly labels?: ReadonlyArray<ComAtprotoLabelDefsLabelEncoded>;
  readonly viewer?: AppBskyGraphDefsListViewerStateEncoded;
  readonly indexedAt?: string;
}
export const AppBskyGraphDefsListViewBasic: Schema.Schema<AppBskyGraphDefsListViewBasic, AppBskyGraphDefsListViewBasicEncoded, never> = Schema.Struct({
  uri: Schema.String,
  cid: Schema.String,
  name: Schema.String,
  purpose: Schema.suspend(() => AppBskyGraphDefsListPurpose),
  avatar: Schema.optional(Schema.String),
  listItemCount: Schema.optional(Schema.Number),
  labels: Schema.optional(Schema.Array(Schema.suspend(() => ComAtprotoLabelDefsLabel))),
  viewer: Schema.optional(Schema.suspend(() => AppBskyGraphDefsListViewerState)),
  indexedAt: Schema.optional(Schema.String),
});

export type AppBskyGraphDefsListViewerState = unknown;
export type AppBskyGraphDefsListViewerStateEncoded = unknown;
export const AppBskyGraphDefsListViewerState: Schema.Schema<AppBskyGraphDefsListViewerState, AppBskyGraphDefsListViewerStateEncoded, never> = Schema.Unknown;

export interface AppBskyGraphDefsNotFoundActor {
  readonly actor: string;
  readonly notFound: boolean;
}
export interface AppBskyGraphDefsNotFoundActorEncoded {
  readonly actor: string;
  readonly notFound: boolean;
}
export const AppBskyGraphDefsNotFoundActor: Schema.Schema<AppBskyGraphDefsNotFoundActor, AppBskyGraphDefsNotFoundActorEncoded, never> = Schema.Struct({
  actor: Schema.String,
  notFound: Schema.Boolean,
});

export interface AppBskyGraphDefsRelationship {
  readonly did: string;
  readonly following?: string;
  readonly followedBy?: string;
  readonly blocking?: string;
  readonly blockedBy?: string;
  readonly blockingByList?: string;
  readonly blockedByList?: string;
}
export interface AppBskyGraphDefsRelationshipEncoded {
  readonly did: string;
  readonly following?: string;
  readonly followedBy?: string;
  readonly blocking?: string;
  readonly blockedBy?: string;
  readonly blockingByList?: string;
  readonly blockedByList?: string;
}
export const AppBskyGraphDefsRelationship: Schema.Schema<AppBskyGraphDefsRelationship, AppBskyGraphDefsRelationshipEncoded, never> = Schema.Struct({
  did: Schema.String,
  following: Schema.optional(Schema.String),
  followedBy: Schema.optional(Schema.String),
  blocking: Schema.optional(Schema.String),
  blockedBy: Schema.optional(Schema.String),
  blockingByList: Schema.optional(Schema.String),
  blockedByList: Schema.optional(Schema.String),
});

export type AppBskyGraphDefsStarterPackView = unknown;
export type AppBskyGraphDefsStarterPackViewEncoded = unknown;
export const AppBskyGraphDefsStarterPackView: Schema.Schema<AppBskyGraphDefsStarterPackView, AppBskyGraphDefsStarterPackViewEncoded, never> = Schema.Unknown;

export type AppBskyGraphDefsStarterPackViewBasic = unknown;
export type AppBskyGraphDefsStarterPackViewBasicEncoded = unknown;
export const AppBskyGraphDefsStarterPackViewBasic: Schema.Schema<AppBskyGraphDefsStarterPackViewBasic, AppBskyGraphDefsStarterPackViewBasicEncoded, never> = Schema.Unknown;

export interface AppBskyGraphFollow {
  readonly subject: string;
  readonly createdAt: string;
  readonly via?: ComAtprotoRepoStrongRef;
}
export interface AppBskyGraphFollowEncoded {
  readonly subject: string;
  readonly createdAt: string;
  readonly via?: ComAtprotoRepoStrongRefEncoded;
}
export const AppBskyGraphFollow: Schema.Schema<AppBskyGraphFollow, AppBskyGraphFollowEncoded, never> = Schema.Struct({
  subject: Schema.String,
  createdAt: Schema.String,
  via: Schema.optional(Schema.suspend(() => ComAtprotoRepoStrongRef)),
});

export interface AppBskyGraphGetListsWithMembershipListWithMembership {
  readonly list: AppBskyGraphDefsListView;
  readonly listItem?: AppBskyGraphDefsListItemView;
}
export interface AppBskyGraphGetListsWithMembershipListWithMembershipEncoded {
  readonly list: AppBskyGraphDefsListViewEncoded;
  readonly listItem?: AppBskyGraphDefsListItemViewEncoded;
}
export const AppBskyGraphGetListsWithMembershipListWithMembership: Schema.Schema<AppBskyGraphGetListsWithMembershipListWithMembership, AppBskyGraphGetListsWithMembershipListWithMembershipEncoded, never> = Schema.Struct({
  list: Schema.suspend(() => AppBskyGraphDefsListView),
  listItem: Schema.optional(Schema.suspend(() => AppBskyGraphDefsListItemView)),
});

export interface AppBskyGraphGetStarterPacksWithMembershipStarterPackWithMembership {
  readonly starterPack: AppBskyGraphDefsStarterPackView;
  readonly listItem?: AppBskyGraphDefsListItemView;
}
export interface AppBskyGraphGetStarterPacksWithMembershipStarterPackWithMembershipEncoded {
  readonly starterPack: AppBskyGraphDefsStarterPackViewEncoded;
  readonly listItem?: AppBskyGraphDefsListItemViewEncoded;
}
export const AppBskyGraphGetStarterPacksWithMembershipStarterPackWithMembership: Schema.Schema<AppBskyGraphGetStarterPacksWithMembershipStarterPackWithMembership, AppBskyGraphGetStarterPacksWithMembershipStarterPackWithMembershipEncoded, never> = Schema.Struct({
  starterPack: Schema.suspend(() => AppBskyGraphDefsStarterPackView),
  listItem: Schema.optional(Schema.suspend(() => AppBskyGraphDefsListItemView)),
});

export interface AppBskyGraphList {
  readonly purpose: AppBskyGraphDefsListPurpose;
  readonly name: string;
  readonly description?: string;
  readonly descriptionFacets?: ReadonlyArray<AppBskyRichtextFacet>;
  readonly avatar?: unknown;
  readonly labels?: ComAtprotoLabelDefsSelfLabels;
  readonly createdAt: string;
}
export interface AppBskyGraphListEncoded {
  readonly purpose: AppBskyGraphDefsListPurposeEncoded;
  readonly name: string;
  readonly description?: string;
  readonly descriptionFacets?: ReadonlyArray<AppBskyRichtextFacetEncoded>;
  readonly avatar?: unknown;
  readonly labels?: ComAtprotoLabelDefsSelfLabelsEncoded;
  readonly createdAt: string;
}
export const AppBskyGraphList: Schema.Schema<AppBskyGraphList, AppBskyGraphListEncoded, never> = Schema.Struct({
  purpose: Schema.suspend(() => AppBskyGraphDefsListPurpose),
  name: Schema.String,
  description: Schema.optional(Schema.String),
  descriptionFacets: Schema.optional(Schema.Array(Schema.suspend(() => AppBskyRichtextFacet))),
  avatar: Schema.optional(Schema.Unknown),
  labels: Schema.optional(Schema.suspend(() => ComAtprotoLabelDefsSelfLabels)),
  createdAt: Schema.String,
});

export interface AppBskyGraphListblock {
  readonly subject: string;
  readonly createdAt: string;
}
export interface AppBskyGraphListblockEncoded {
  readonly subject: string;
  readonly createdAt: string;
}
export const AppBskyGraphListblock: Schema.Schema<AppBskyGraphListblock, AppBskyGraphListblockEncoded, never> = Schema.Struct({
  subject: Schema.String,
  createdAt: Schema.String,
});

export interface AppBskyGraphListitem {
  readonly subject: string;
  readonly list: string;
  readonly createdAt: string;
}
export interface AppBskyGraphListitemEncoded {
  readonly subject: string;
  readonly list: string;
  readonly createdAt: string;
}
export const AppBskyGraphListitem: Schema.Schema<AppBskyGraphListitem, AppBskyGraphListitemEncoded, never> = Schema.Struct({
  subject: Schema.String,
  list: Schema.String,
  createdAt: Schema.String,
});

export interface AppBskyGraphStarterpack {
  readonly name: string;
  readonly description?: string;
  readonly descriptionFacets?: ReadonlyArray<AppBskyRichtextFacet>;
  readonly list: string;
  readonly feeds?: ReadonlyArray<AppBskyGraphStarterpackFeedItem>;
  readonly createdAt: string;
}
export interface AppBskyGraphStarterpackEncoded {
  readonly name: string;
  readonly description?: string;
  readonly descriptionFacets?: ReadonlyArray<AppBskyRichtextFacetEncoded>;
  readonly list: string;
  readonly feeds?: ReadonlyArray<AppBskyGraphStarterpackFeedItemEncoded>;
  readonly createdAt: string;
}
export const AppBskyGraphStarterpack: Schema.Schema<AppBskyGraphStarterpack, AppBskyGraphStarterpackEncoded, never> = Schema.Struct({
  name: Schema.String,
  description: Schema.optional(Schema.String),
  descriptionFacets: Schema.optional(Schema.Array(Schema.suspend(() => AppBskyRichtextFacet))),
  list: Schema.String,
  feeds: Schema.optional(Schema.Array(Schema.suspend(() => AppBskyGraphStarterpackFeedItem))),
  createdAt: Schema.String,
});

export interface AppBskyGraphStarterpackFeedItem {
  readonly uri: string;
}
export interface AppBskyGraphStarterpackFeedItemEncoded {
  readonly uri: string;
}
export const AppBskyGraphStarterpackFeedItem: Schema.Schema<AppBskyGraphStarterpackFeedItem, AppBskyGraphStarterpackFeedItemEncoded, never> = Schema.Struct({
  uri: Schema.String,
});

export interface AppBskyGraphVerification {
  readonly subject: string;
  readonly handle: string;
  readonly displayName: string;
  readonly createdAt: string;
}
export interface AppBskyGraphVerificationEncoded {
  readonly subject: string;
  readonly handle: string;
  readonly displayName: string;
  readonly createdAt: string;
}
export const AppBskyGraphVerification: Schema.Schema<AppBskyGraphVerification, AppBskyGraphVerificationEncoded, never> = Schema.Struct({
  subject: Schema.String,
  handle: Schema.String,
  displayName: Schema.String,
  createdAt: Schema.String,
});

export type AppBskyLabelerDefsLabelerPolicies = unknown;
export type AppBskyLabelerDefsLabelerPoliciesEncoded = unknown;
export const AppBskyLabelerDefsLabelerPolicies: Schema.Schema<AppBskyLabelerDefsLabelerPolicies, AppBskyLabelerDefsLabelerPoliciesEncoded, never> = Schema.Unknown;

export type AppBskyLabelerDefsLabelerView = unknown;
export type AppBskyLabelerDefsLabelerViewEncoded = unknown;
export const AppBskyLabelerDefsLabelerView: Schema.Schema<AppBskyLabelerDefsLabelerView, AppBskyLabelerDefsLabelerViewEncoded, never> = Schema.Unknown;

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
export interface AppBskyLabelerDefsLabelerViewDetailedEncoded {
  readonly uri: string;
  readonly cid: string;
  readonly creator: AppBskyActorDefsProfileViewEncoded;
  readonly policies: AppBskyLabelerDefsLabelerPoliciesEncoded;
  readonly likeCount?: number;
  readonly viewer?: AppBskyLabelerDefsLabelerViewerStateEncoded;
  readonly indexedAt: string;
  readonly labels?: ReadonlyArray<ComAtprotoLabelDefsLabelEncoded>;
  readonly reasonTypes?: ReadonlyArray<ComAtprotoModerationDefsReasonTypeEncoded>;
  readonly subjectTypes?: ReadonlyArray<ComAtprotoModerationDefsSubjectTypeEncoded>;
  readonly subjectCollections?: ReadonlyArray<string>;
}
export const AppBskyLabelerDefsLabelerViewDetailed: Schema.Schema<AppBskyLabelerDefsLabelerViewDetailed, AppBskyLabelerDefsLabelerViewDetailedEncoded, never> = Schema.Struct({
  uri: Schema.String,
  cid: Schema.String,
  creator: Schema.suspend(() => AppBskyActorDefsProfileView),
  policies: Schema.suspend(() => AppBskyLabelerDefsLabelerPolicies),
  likeCount: Schema.optional(Schema.Number),
  viewer: Schema.optional(Schema.suspend(() => AppBskyLabelerDefsLabelerViewerState)),
  indexedAt: Schema.String,
  labels: Schema.optional(Schema.Array(Schema.suspend(() => ComAtprotoLabelDefsLabel))),
  reasonTypes: Schema.optional(Schema.Array(Schema.suspend(() => ComAtprotoModerationDefsReasonType))),
  subjectTypes: Schema.optional(Schema.Array(Schema.suspend(() => ComAtprotoModerationDefsSubjectType))),
  subjectCollections: Schema.optional(Schema.Array(Schema.String)),
});

export type AppBskyLabelerDefsLabelerViewerState = unknown;
export type AppBskyLabelerDefsLabelerViewerStateEncoded = unknown;
export const AppBskyLabelerDefsLabelerViewerState: Schema.Schema<AppBskyLabelerDefsLabelerViewerState, AppBskyLabelerDefsLabelerViewerStateEncoded, never> = Schema.Unknown;

export interface AppBskyLabelerService {
  readonly policies: AppBskyLabelerDefsLabelerPolicies;
  readonly labels?: ComAtprotoLabelDefsSelfLabels;
  readonly createdAt: string;
  readonly reasonTypes?: ReadonlyArray<ComAtprotoModerationDefsReasonType>;
  readonly subjectTypes?: ReadonlyArray<ComAtprotoModerationDefsSubjectType>;
  readonly subjectCollections?: ReadonlyArray<string>;
}
export interface AppBskyLabelerServiceEncoded {
  readonly policies: AppBskyLabelerDefsLabelerPoliciesEncoded;
  readonly labels?: ComAtprotoLabelDefsSelfLabelsEncoded;
  readonly createdAt: string;
  readonly reasonTypes?: ReadonlyArray<ComAtprotoModerationDefsReasonTypeEncoded>;
  readonly subjectTypes?: ReadonlyArray<ComAtprotoModerationDefsSubjectTypeEncoded>;
  readonly subjectCollections?: ReadonlyArray<string>;
}
export const AppBskyLabelerService: Schema.Schema<AppBskyLabelerService, AppBskyLabelerServiceEncoded, never> = Schema.Struct({
  policies: Schema.suspend(() => AppBskyLabelerDefsLabelerPolicies),
  labels: Schema.optional(Schema.suspend(() => ComAtprotoLabelDefsSelfLabels)),
  createdAt: Schema.String,
  reasonTypes: Schema.optional(Schema.Array(Schema.suspend(() => ComAtprotoModerationDefsReasonType))),
  subjectTypes: Schema.optional(Schema.Array(Schema.suspend(() => ComAtprotoModerationDefsSubjectType))),
  subjectCollections: Schema.optional(Schema.Array(Schema.String)),
});

export interface AppBskyNotificationDeclaration {
  readonly allowSubscriptions: string;
}
export interface AppBskyNotificationDeclarationEncoded {
  readonly allowSubscriptions: string;
}
export const AppBskyNotificationDeclaration: Schema.Schema<AppBskyNotificationDeclaration, AppBskyNotificationDeclarationEncoded, never> = Schema.Struct({
  allowSubscriptions: Schema.String,
});

export interface AppBskyNotificationDefsActivitySubscription {
  readonly post: boolean;
  readonly reply: boolean;
}
export interface AppBskyNotificationDefsActivitySubscriptionEncoded {
  readonly post: boolean;
  readonly reply: boolean;
}
export const AppBskyNotificationDefsActivitySubscription: Schema.Schema<AppBskyNotificationDefsActivitySubscription, AppBskyNotificationDefsActivitySubscriptionEncoded, never> = Schema.Struct({
  post: Schema.Boolean,
  reply: Schema.Boolean,
});

export interface AppBskyNotificationDefsChatPreference {
  readonly include: string;
  readonly push: boolean;
}
export interface AppBskyNotificationDefsChatPreferenceEncoded {
  readonly include: string;
  readonly push: boolean;
}
export const AppBskyNotificationDefsChatPreference: Schema.Schema<AppBskyNotificationDefsChatPreference, AppBskyNotificationDefsChatPreferenceEncoded, never> = Schema.Struct({
  include: Schema.String,
  push: Schema.Boolean,
});

export interface AppBskyNotificationDefsFilterablePreference {
  readonly include: string;
  readonly list: boolean;
  readonly push: boolean;
}
export interface AppBskyNotificationDefsFilterablePreferenceEncoded {
  readonly include: string;
  readonly list: boolean;
  readonly push: boolean;
}
export const AppBskyNotificationDefsFilterablePreference: Schema.Schema<AppBskyNotificationDefsFilterablePreference, AppBskyNotificationDefsFilterablePreferenceEncoded, never> = Schema.Struct({
  include: Schema.String,
  list: Schema.Boolean,
  push: Schema.Boolean,
});

export interface AppBskyNotificationDefsPreference {
  readonly list: boolean;
  readonly push: boolean;
}
export interface AppBskyNotificationDefsPreferenceEncoded {
  readonly list: boolean;
  readonly push: boolean;
}
export const AppBskyNotificationDefsPreference: Schema.Schema<AppBskyNotificationDefsPreference, AppBskyNotificationDefsPreferenceEncoded, never> = Schema.Struct({
  list: Schema.Boolean,
  push: Schema.Boolean,
});

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
export interface AppBskyNotificationDefsPreferencesEncoded {
  readonly chat: AppBskyNotificationDefsChatPreferenceEncoded;
  readonly follow: AppBskyNotificationDefsFilterablePreferenceEncoded;
  readonly like: AppBskyNotificationDefsFilterablePreferenceEncoded;
  readonly likeViaRepost: AppBskyNotificationDefsFilterablePreferenceEncoded;
  readonly mention: AppBskyNotificationDefsFilterablePreferenceEncoded;
  readonly quote: AppBskyNotificationDefsFilterablePreferenceEncoded;
  readonly reply: AppBskyNotificationDefsFilterablePreferenceEncoded;
  readonly repost: AppBskyNotificationDefsFilterablePreferenceEncoded;
  readonly repostViaRepost: AppBskyNotificationDefsFilterablePreferenceEncoded;
  readonly starterpackJoined: AppBskyNotificationDefsPreferenceEncoded;
  readonly subscribedPost: AppBskyNotificationDefsPreferenceEncoded;
  readonly unverified: AppBskyNotificationDefsPreferenceEncoded;
  readonly verified: AppBskyNotificationDefsPreferenceEncoded;
}
export const AppBskyNotificationDefsPreferences: Schema.Schema<AppBskyNotificationDefsPreferences, AppBskyNotificationDefsPreferencesEncoded, never> = Schema.Struct({
  chat: Schema.suspend(() => AppBskyNotificationDefsChatPreference),
  follow: Schema.suspend(() => AppBskyNotificationDefsFilterablePreference),
  like: Schema.suspend(() => AppBskyNotificationDefsFilterablePreference),
  likeViaRepost: Schema.suspend(() => AppBskyNotificationDefsFilterablePreference),
  mention: Schema.suspend(() => AppBskyNotificationDefsFilterablePreference),
  quote: Schema.suspend(() => AppBskyNotificationDefsFilterablePreference),
  reply: Schema.suspend(() => AppBskyNotificationDefsFilterablePreference),
  repost: Schema.suspend(() => AppBskyNotificationDefsFilterablePreference),
  repostViaRepost: Schema.suspend(() => AppBskyNotificationDefsFilterablePreference),
  starterpackJoined: Schema.suspend(() => AppBskyNotificationDefsPreference),
  subscribedPost: Schema.suspend(() => AppBskyNotificationDefsPreference),
  unverified: Schema.suspend(() => AppBskyNotificationDefsPreference),
  verified: Schema.suspend(() => AppBskyNotificationDefsPreference),
});

export interface AppBskyNotificationDefsRecordDeleted {

}
export interface AppBskyNotificationDefsRecordDeletedEncoded {

}
export const AppBskyNotificationDefsRecordDeleted: Schema.Schema<AppBskyNotificationDefsRecordDeleted, AppBskyNotificationDefsRecordDeletedEncoded, never> = Schema.Struct({

});

export interface AppBskyNotificationDefsSubjectActivitySubscription {
  readonly subject: string;
  readonly activitySubscription: AppBskyNotificationDefsActivitySubscription;
}
export interface AppBskyNotificationDefsSubjectActivitySubscriptionEncoded {
  readonly subject: string;
  readonly activitySubscription: AppBskyNotificationDefsActivitySubscriptionEncoded;
}
export const AppBskyNotificationDefsSubjectActivitySubscription: Schema.Schema<AppBskyNotificationDefsSubjectActivitySubscription, AppBskyNotificationDefsSubjectActivitySubscriptionEncoded, never> = Schema.Struct({
  subject: Schema.String,
  activitySubscription: Schema.suspend(() => AppBskyNotificationDefsActivitySubscription),
});

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
export interface AppBskyNotificationListNotificationsNotificationEncoded {
  readonly uri: string;
  readonly cid: string;
  readonly author: AppBskyActorDefsProfileViewEncoded;
  readonly reason: string;
  readonly reasonSubject?: string;
  readonly record: unknown;
  readonly starterPack?: AppBskyGraphDefsStarterPackViewBasicEncoded;
  readonly isRead: boolean;
  readonly indexedAt: string;
  readonly labels?: ReadonlyArray<ComAtprotoLabelDefsLabelEncoded>;
}
export const AppBskyNotificationListNotificationsNotification: Schema.Schema<AppBskyNotificationListNotificationsNotification, AppBskyNotificationListNotificationsNotificationEncoded, never> = Schema.Struct({
  uri: Schema.String,
  cid: Schema.String,
  author: Schema.suspend(() => AppBskyActorDefsProfileView),
  reason: Schema.String,
  reasonSubject: Schema.optional(Schema.String),
  record: Schema.Unknown,
  starterPack: Schema.optional(Schema.suspend(() => AppBskyGraphDefsStarterPackViewBasic)),
  isRead: Schema.Boolean,
  indexedAt: Schema.String,
  labels: Schema.optional(Schema.Array(Schema.suspend(() => ComAtprotoLabelDefsLabel))),
});

export type AppBskyRichtextFacet = unknown;
export type AppBskyRichtextFacetEncoded = unknown;
export const AppBskyRichtextFacet: Schema.Schema<AppBskyRichtextFacet, AppBskyRichtextFacetEncoded, never> = Schema.Unknown;

export interface AppBskyRichtextFacetByteSlice {
  readonly byteStart: number;
  readonly byteEnd: number;
}
export interface AppBskyRichtextFacetByteSliceEncoded {
  readonly byteStart: number;
  readonly byteEnd: number;
}
export const AppBskyRichtextFacetByteSlice: Schema.Schema<AppBskyRichtextFacetByteSlice, AppBskyRichtextFacetByteSliceEncoded, never> = Schema.Struct({
  byteStart: Schema.Number,
  byteEnd: Schema.Number,
});

export interface AppBskyRichtextFacetLink {
  readonly uri: string;
}
export interface AppBskyRichtextFacetLinkEncoded {
  readonly uri: string;
}
export const AppBskyRichtextFacetLink: Schema.Schema<AppBskyRichtextFacetLink, AppBskyRichtextFacetLinkEncoded, never> = Schema.Struct({
  uri: Schema.String,
});

export interface AppBskyRichtextFacetMention {
  readonly did: string;
}
export interface AppBskyRichtextFacetMentionEncoded {
  readonly did: string;
}
export const AppBskyRichtextFacetMention: Schema.Schema<AppBskyRichtextFacetMention, AppBskyRichtextFacetMentionEncoded, never> = Schema.Struct({
  did: Schema.String,
});

export interface AppBskyRichtextFacetTag {
  readonly tag: string;
}
export interface AppBskyRichtextFacetTagEncoded {
  readonly tag: string;
}
export const AppBskyRichtextFacetTag: Schema.Schema<AppBskyRichtextFacetTag, AppBskyRichtextFacetTagEncoded, never> = Schema.Struct({
  tag: Schema.String,
});

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
export interface AppBskyUnspeccedDefsAgeAssuranceEventEncoded {
  readonly createdAt: string;
  readonly status: string;
  readonly attemptId: string;
  readonly email?: string;
  readonly initIp?: string;
  readonly initUa?: string;
  readonly completeIp?: string;
  readonly completeUa?: string;
}
export const AppBskyUnspeccedDefsAgeAssuranceEvent: Schema.Schema<AppBskyUnspeccedDefsAgeAssuranceEvent, AppBskyUnspeccedDefsAgeAssuranceEventEncoded, never> = Schema.Struct({
  createdAt: Schema.String,
  status: Schema.String,
  attemptId: Schema.String,
  email: Schema.optional(Schema.String),
  initIp: Schema.optional(Schema.String),
  initUa: Schema.optional(Schema.String),
  completeIp: Schema.optional(Schema.String),
  completeUa: Schema.optional(Schema.String),
});

export interface AppBskyUnspeccedDefsAgeAssuranceState {
  readonly lastInitiatedAt?: string;
  readonly status: string;
}
export interface AppBskyUnspeccedDefsAgeAssuranceStateEncoded {
  readonly lastInitiatedAt?: string;
  readonly status: string;
}
export const AppBskyUnspeccedDefsAgeAssuranceState: Schema.Schema<AppBskyUnspeccedDefsAgeAssuranceState, AppBskyUnspeccedDefsAgeAssuranceStateEncoded, never> = Schema.Struct({
  lastInitiatedAt: Schema.optional(Schema.String),
  status: Schema.String,
});

export interface AppBskyUnspeccedDefsSkeletonSearchActor {
  readonly did: string;
}
export interface AppBskyUnspeccedDefsSkeletonSearchActorEncoded {
  readonly did: string;
}
export const AppBskyUnspeccedDefsSkeletonSearchActor: Schema.Schema<AppBskyUnspeccedDefsSkeletonSearchActor, AppBskyUnspeccedDefsSkeletonSearchActorEncoded, never> = Schema.Struct({
  did: Schema.String,
});

export interface AppBskyUnspeccedDefsSkeletonSearchPost {
  readonly uri: string;
}
export interface AppBskyUnspeccedDefsSkeletonSearchPostEncoded {
  readonly uri: string;
}
export const AppBskyUnspeccedDefsSkeletonSearchPost: Schema.Schema<AppBskyUnspeccedDefsSkeletonSearchPost, AppBskyUnspeccedDefsSkeletonSearchPostEncoded, never> = Schema.Struct({
  uri: Schema.String,
});

export interface AppBskyUnspeccedDefsSkeletonSearchStarterPack {
  readonly uri: string;
}
export interface AppBskyUnspeccedDefsSkeletonSearchStarterPackEncoded {
  readonly uri: string;
}
export const AppBskyUnspeccedDefsSkeletonSearchStarterPack: Schema.Schema<AppBskyUnspeccedDefsSkeletonSearchStarterPack, AppBskyUnspeccedDefsSkeletonSearchStarterPackEncoded, never> = Schema.Struct({
  uri: Schema.String,
});

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
export interface AppBskyUnspeccedDefsSkeletonTrendEncoded {
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
export const AppBskyUnspeccedDefsSkeletonTrend: Schema.Schema<AppBskyUnspeccedDefsSkeletonTrend, AppBskyUnspeccedDefsSkeletonTrendEncoded, never> = Schema.Struct({
  topic: Schema.String,
  displayName: Schema.String,
  description: Schema.optional(Schema.String),
  link: Schema.String,
  startedAt: Schema.String,
  postCount: Schema.Number,
  status: Schema.optional(Schema.String),
  category: Schema.optional(Schema.String),
  dids: Schema.Array(Schema.String),
});

export interface AppBskyUnspeccedDefsThreadItemBlocked {
  readonly author: AppBskyFeedDefsBlockedAuthor;
}
export interface AppBskyUnspeccedDefsThreadItemBlockedEncoded {
  readonly author: AppBskyFeedDefsBlockedAuthorEncoded;
}
export const AppBskyUnspeccedDefsThreadItemBlocked: Schema.Schema<AppBskyUnspeccedDefsThreadItemBlocked, AppBskyUnspeccedDefsThreadItemBlockedEncoded, never> = Schema.Struct({
  author: Schema.suspend(() => AppBskyFeedDefsBlockedAuthor),
});

export interface AppBskyUnspeccedDefsThreadItemNotFound {

}
export interface AppBskyUnspeccedDefsThreadItemNotFoundEncoded {

}
export const AppBskyUnspeccedDefsThreadItemNotFound: Schema.Schema<AppBskyUnspeccedDefsThreadItemNotFound, AppBskyUnspeccedDefsThreadItemNotFoundEncoded, never> = Schema.Struct({

});

export interface AppBskyUnspeccedDefsThreadItemNoUnauthenticated {

}
export interface AppBskyUnspeccedDefsThreadItemNoUnauthenticatedEncoded {

}
export const AppBskyUnspeccedDefsThreadItemNoUnauthenticated: Schema.Schema<AppBskyUnspeccedDefsThreadItemNoUnauthenticated, AppBskyUnspeccedDefsThreadItemNoUnauthenticatedEncoded, never> = Schema.Struct({

});

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
export interface AppBskyUnspeccedDefsThreadItemPostEncoded {
  readonly post: AppBskyFeedDefsPostViewEncoded;
  readonly moreParents: boolean;
  readonly moreReplies: number;
  readonly opThread: boolean;
  readonly opThreadPostIndex?: number;
  readonly opThreadPostCount?: number;
  readonly hiddenByThreadgate: boolean;
  readonly mutedByViewer: boolean;
}
export const AppBskyUnspeccedDefsThreadItemPost: Schema.Schema<AppBskyUnspeccedDefsThreadItemPost, AppBskyUnspeccedDefsThreadItemPostEncoded, never> = Schema.Struct({
  post: Schema.suspend(() => AppBskyFeedDefsPostView),
  moreParents: Schema.Boolean,
  moreReplies: Schema.Number,
  opThread: Schema.Boolean,
  opThreadPostIndex: Schema.optional(Schema.Number),
  opThreadPostCount: Schema.optional(Schema.Number),
  hiddenByThreadgate: Schema.Boolean,
  mutedByViewer: Schema.Boolean,
});

export interface AppBskyUnspeccedDefsTrendingTopic {
  readonly topic: string;
  readonly displayName?: string;
  readonly description?: string;
  readonly link: string;
}
export interface AppBskyUnspeccedDefsTrendingTopicEncoded {
  readonly topic: string;
  readonly displayName?: string;
  readonly description?: string;
  readonly link: string;
}
export const AppBskyUnspeccedDefsTrendingTopic: Schema.Schema<AppBskyUnspeccedDefsTrendingTopic, AppBskyUnspeccedDefsTrendingTopicEncoded, never> = Schema.Struct({
  topic: Schema.String,
  displayName: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  link: Schema.String,
});

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
export interface AppBskyUnspeccedDefsTrendViewEncoded {
  readonly topic: string;
  readonly displayName: string;
  readonly description?: string;
  readonly link: string;
  readonly startedAt: string;
  readonly postCount: number;
  readonly status?: string;
  readonly category?: string;
  readonly actors: ReadonlyArray<AppBskyActorDefsProfileViewBasicEncoded>;
}
export const AppBskyUnspeccedDefsTrendView: Schema.Schema<AppBskyUnspeccedDefsTrendView, AppBskyUnspeccedDefsTrendViewEncoded, never> = Schema.Struct({
  topic: Schema.String,
  displayName: Schema.String,
  description: Schema.optional(Schema.String),
  link: Schema.String,
  startedAt: Schema.String,
  postCount: Schema.Number,
  status: Schema.optional(Schema.String),
  category: Schema.optional(Schema.String),
  actors: Schema.Array(Schema.suspend(() => AppBskyActorDefsProfileViewBasic)),
});

export interface AppBskyUnspeccedGetConfigLiveNowConfig {
  readonly did: string;
  readonly domains: ReadonlyArray<string>;
}
export interface AppBskyUnspeccedGetConfigLiveNowConfigEncoded {
  readonly did: string;
  readonly domains: ReadonlyArray<string>;
}
export const AppBskyUnspeccedGetConfigLiveNowConfig: Schema.Schema<AppBskyUnspeccedGetConfigLiveNowConfig, AppBskyUnspeccedGetConfigLiveNowConfigEncoded, never> = Schema.Struct({
  did: Schema.String,
  domains: Schema.Array(Schema.String),
});

export interface AppBskyUnspeccedGetPostThreadOtherV2ThreadItem {
  readonly uri: string;
  readonly depth: number;
  readonly value: AppBskyUnspeccedDefsThreadItemPost;
}
export interface AppBskyUnspeccedGetPostThreadOtherV2ThreadItemEncoded {
  readonly uri: string;
  readonly depth: number;
  readonly value: AppBskyUnspeccedDefsThreadItemPostEncoded;
}
export const AppBskyUnspeccedGetPostThreadOtherV2ThreadItem: Schema.Schema<AppBskyUnspeccedGetPostThreadOtherV2ThreadItem, AppBskyUnspeccedGetPostThreadOtherV2ThreadItemEncoded, never> = Schema.Struct({
  uri: Schema.String,
  depth: Schema.Number,
  value: Schema.suspend(() => AppBskyUnspeccedDefsThreadItemPost),
});

export interface AppBskyUnspeccedGetPostThreadV2ThreadItem {
  readonly uri: string;
  readonly depth: number;
  readonly value: AppBskyUnspeccedDefsThreadItemPost | AppBskyUnspeccedDefsThreadItemNoUnauthenticated | AppBskyUnspeccedDefsThreadItemNotFound | AppBskyUnspeccedDefsThreadItemBlocked;
}
export interface AppBskyUnspeccedGetPostThreadV2ThreadItemEncoded {
  readonly uri: string;
  readonly depth: number;
  readonly value: AppBskyUnspeccedDefsThreadItemPostEncoded | AppBskyUnspeccedDefsThreadItemNoUnauthenticatedEncoded | AppBskyUnspeccedDefsThreadItemNotFoundEncoded | AppBskyUnspeccedDefsThreadItemBlockedEncoded;
}
export const AppBskyUnspeccedGetPostThreadV2ThreadItem: Schema.Schema<AppBskyUnspeccedGetPostThreadV2ThreadItem, AppBskyUnspeccedGetPostThreadV2ThreadItemEncoded, never> = Schema.Struct({
  uri: Schema.String,
  depth: Schema.Number,
  value: Schema.Union(Schema.suspend(() => AppBskyUnspeccedDefsThreadItemPost), Schema.suspend(() => AppBskyUnspeccedDefsThreadItemNoUnauthenticated), Schema.suspend(() => AppBskyUnspeccedDefsThreadItemNotFound), Schema.suspend(() => AppBskyUnspeccedDefsThreadItemBlocked)),
});

export interface AppBskyUnspeccedGetTaggedSuggestionsSuggestion {
  readonly tag: string;
  readonly subjectType: string;
  readonly subject: string;
}
export interface AppBskyUnspeccedGetTaggedSuggestionsSuggestionEncoded {
  readonly tag: string;
  readonly subjectType: string;
  readonly subject: string;
}
export const AppBskyUnspeccedGetTaggedSuggestionsSuggestion: Schema.Schema<AppBskyUnspeccedGetTaggedSuggestionsSuggestion, AppBskyUnspeccedGetTaggedSuggestionsSuggestionEncoded, never> = Schema.Struct({
  tag: Schema.String,
  subjectType: Schema.String,
  subject: Schema.String,
});

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
export interface AppBskyVideoDefsJobStatusEncoded {
  readonly jobId: string;
  readonly did: string;
  readonly state: string;
  readonly progress?: number;
  readonly blob?: unknown;
  readonly error?: string;
  readonly failureCode?: string;
  readonly message?: string;
}
export const AppBskyVideoDefsJobStatus: Schema.Schema<AppBskyVideoDefsJobStatus, AppBskyVideoDefsJobStatusEncoded, never> = Schema.Struct({
  jobId: Schema.String,
  did: Schema.String,
  state: Schema.String,
  progress: Schema.optional(Schema.Number),
  blob: Schema.optional(Schema.Unknown),
  error: Schema.optional(Schema.String),
  failureCode: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
});

export interface ApplyWritesParams {
  readonly repo: string;
  readonly validate?: boolean;
  readonly writes: ReadonlyArray<ComAtprotoRepoApplyWritesCreate | ComAtprotoRepoApplyWritesUpdate | ComAtprotoRepoApplyWritesDelete>;
  readonly swapCommit?: string;
}
export interface ApplyWritesParamsEncoded {
  readonly repo: string;
  readonly validate?: boolean;
  readonly writes: ReadonlyArray<ComAtprotoRepoApplyWritesCreateEncoded | ComAtprotoRepoApplyWritesUpdateEncoded | ComAtprotoRepoApplyWritesDeleteEncoded>;
  readonly swapCommit?: string;
}
export const ApplyWritesParams: Schema.Schema<ApplyWritesParams, ApplyWritesParamsEncoded, never> = Schema.Struct({
  repo: Schema.String,
  validate: Schema.optional(Schema.Boolean),
  writes: Schema.Array(Schema.Union(Schema.suspend(() => ComAtprotoRepoApplyWritesCreate), Schema.suspend(() => ComAtprotoRepoApplyWritesUpdate), Schema.suspend(() => ComAtprotoRepoApplyWritesDelete))),
  swapCommit: Schema.optional(Schema.String),
});

export interface ApplyWritesResponse {
  readonly data: Inline610;
}
export interface ApplyWritesResponseEncoded {
  readonly data: Inline610Encoded;
}
export const ApplyWritesResponse: Schema.Schema<ApplyWritesResponse, ApplyWritesResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline610),
});

export interface BeginParams {
  readonly email: string;
  readonly language: string;
  readonly countryCode: string;
  readonly regionCode?: string;
}
export interface BeginParamsEncoded {
  readonly email: string;
  readonly language: string;
  readonly countryCode: string;
  readonly regionCode?: string;
}
export const BeginParams: Schema.Schema<BeginParams, BeginParamsEncoded, never> = Schema.Struct({
  email: Schema.String,
  language: Schema.String,
  countryCode: Schema.String,
  regionCode: Schema.optional(Schema.String),
});

export interface BeginResponse {
  readonly data: AppBskyAgeassuranceDefsState;
}
export interface BeginResponseEncoded {
  readonly data: AppBskyAgeassuranceDefsStateEncoded;
}
export const BeginResponse: Schema.Schema<BeginResponse, BeginResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => AppBskyAgeassuranceDefsState),
});

export interface CheckAccountStatusParams {

}
export interface CheckAccountStatusParamsEncoded {

}
export const CheckAccountStatusParams: Schema.Schema<CheckAccountStatusParams, CheckAccountStatusParamsEncoded, never> = Schema.Struct({

});

export interface CheckAccountStatusResponse {
  readonly data: Inline641;
}
export interface CheckAccountStatusResponseEncoded {
  readonly data: Inline641Encoded;
}
export const CheckAccountStatusResponse: Schema.Schema<CheckAccountStatusResponse, CheckAccountStatusResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline641),
});

export interface CheckHandleAvailabilityParams {
  readonly handle: string;
  readonly email?: string;
  readonly birthDate?: string;
}
export interface CheckHandleAvailabilityParamsEncoded {
  readonly handle: string;
  readonly email?: string;
  readonly birthDate?: string;
}
export const CheckHandleAvailabilityParams: Schema.Schema<CheckHandleAvailabilityParams, CheckHandleAvailabilityParamsEncoded, never> = Schema.Struct({
  handle: Schema.String,
  email: Schema.optional(Schema.String),
  birthDate: Schema.optional(Schema.String),
});

export interface CheckHandleAvailabilityResponse {
  readonly data: Inline737;
}
export interface CheckHandleAvailabilityResponseEncoded {
  readonly data: Inline737Encoded;
}
export const CheckHandleAvailabilityResponse: Schema.Schema<CheckHandleAvailabilityResponse, CheckHandleAvailabilityResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline737),
});

export interface CheckSignupQueueParams {

}
export interface CheckSignupQueueParamsEncoded {

}
export const CheckSignupQueueParams: Schema.Schema<CheckSignupQueueParams, CheckSignupQueueParamsEncoded, never> = Schema.Struct({

});

export interface CheckSignupQueueResponse {
  readonly data: Inline740;
}
export interface CheckSignupQueueResponseEncoded {
  readonly data: Inline740Encoded;
}
export const CheckSignupQueueResponse: Schema.Schema<CheckSignupQueueResponse, CheckSignupQueueResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline740),
});

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
export interface ComAtprotoAdminDefsAccountViewEncoded {
  readonly did: string;
  readonly handle: string;
  readonly email?: string;
  readonly relatedRecords?: ReadonlyArray<unknown>;
  readonly indexedAt: string;
  readonly invitedBy?: ComAtprotoServerDefsInviteCodeEncoded;
  readonly invites?: ReadonlyArray<ComAtprotoServerDefsInviteCodeEncoded>;
  readonly invitesDisabled?: boolean;
  readonly emailConfirmedAt?: string;
  readonly inviteNote?: string;
  readonly deactivatedAt?: string;
  readonly threatSignatures?: ReadonlyArray<ComAtprotoAdminDefsThreatSignatureEncoded>;
}
export const ComAtprotoAdminDefsAccountView: Schema.Schema<ComAtprotoAdminDefsAccountView, ComAtprotoAdminDefsAccountViewEncoded, never> = Schema.Struct({
  did: Schema.String,
  handle: Schema.String,
  email: Schema.optional(Schema.String),
  relatedRecords: Schema.optional(Schema.Array(Schema.Unknown)),
  indexedAt: Schema.String,
  invitedBy: Schema.optional(Schema.suspend(() => ComAtprotoServerDefsInviteCode)),
  invites: Schema.optional(Schema.Array(Schema.suspend(() => ComAtprotoServerDefsInviteCode))),
  invitesDisabled: Schema.optional(Schema.Boolean),
  emailConfirmedAt: Schema.optional(Schema.String),
  inviteNote: Schema.optional(Schema.String),
  deactivatedAt: Schema.optional(Schema.String),
  threatSignatures: Schema.optional(Schema.Array(Schema.suspend(() => ComAtprotoAdminDefsThreatSignature))),
});

export interface ComAtprotoAdminDefsRepoBlobRef {
  readonly did: string;
  readonly cid: string;
  readonly recordUri?: string;
}
export interface ComAtprotoAdminDefsRepoBlobRefEncoded {
  readonly did: string;
  readonly cid: string;
  readonly recordUri?: string;
}
export const ComAtprotoAdminDefsRepoBlobRef: Schema.Schema<ComAtprotoAdminDefsRepoBlobRef, ComAtprotoAdminDefsRepoBlobRefEncoded, never> = Schema.Struct({
  did: Schema.String,
  cid: Schema.String,
  recordUri: Schema.optional(Schema.String),
});

export interface ComAtprotoAdminDefsRepoRef {
  readonly did: string;
}
export interface ComAtprotoAdminDefsRepoRefEncoded {
  readonly did: string;
}
export const ComAtprotoAdminDefsRepoRef: Schema.Schema<ComAtprotoAdminDefsRepoRef, ComAtprotoAdminDefsRepoRefEncoded, never> = Schema.Struct({
  did: Schema.String,
});

export interface ComAtprotoAdminDefsStatusAttr {
  readonly applied: boolean;
  readonly ref?: string;
}
export interface ComAtprotoAdminDefsStatusAttrEncoded {
  readonly applied: boolean;
  readonly ref?: string;
}
export const ComAtprotoAdminDefsStatusAttr: Schema.Schema<ComAtprotoAdminDefsStatusAttr, ComAtprotoAdminDefsStatusAttrEncoded, never> = Schema.Struct({
  applied: Schema.Boolean,
  ref: Schema.optional(Schema.String),
});

export type ComAtprotoAdminDefsThreatSignature = unknown;
export type ComAtprotoAdminDefsThreatSignatureEncoded = unknown;
export const ComAtprotoAdminDefsThreatSignature: Schema.Schema<ComAtprotoAdminDefsThreatSignature, ComAtprotoAdminDefsThreatSignatureEncoded, never> = Schema.Unknown;

export interface ComAtprotoIdentityDefsIdentityInfo {
  readonly did: string;
  readonly handle: string;
  readonly didDoc: unknown;
}
export interface ComAtprotoIdentityDefsIdentityInfoEncoded {
  readonly did: string;
  readonly handle: string;
  readonly didDoc: unknown;
}
export const ComAtprotoIdentityDefsIdentityInfo: Schema.Schema<ComAtprotoIdentityDefsIdentityInfo, ComAtprotoIdentityDefsIdentityInfoEncoded, never> = Schema.Struct({
  did: Schema.String,
  handle: Schema.String,
  didDoc: Schema.Unknown,
});

export type ComAtprotoLabelDefsLabel = unknown;
export type ComAtprotoLabelDefsLabelEncoded = unknown;
export const ComAtprotoLabelDefsLabel: Schema.Schema<ComAtprotoLabelDefsLabel, ComAtprotoLabelDefsLabelEncoded, never> = Schema.Unknown;

export type ComAtprotoLabelDefsLabelValue = string;
export type ComAtprotoLabelDefsLabelValueEncoded = string;
export const ComAtprotoLabelDefsLabelValue: Schema.Schema<ComAtprotoLabelDefsLabelValue, ComAtprotoLabelDefsLabelValueEncoded, never> = Schema.String;

export interface ComAtprotoLabelDefsLabelValueDefinition {
  readonly identifier: string;
  readonly severity: string;
  readonly blurs: string;
  readonly defaultSetting?: string;
  readonly adultOnly?: boolean;
  readonly locales: ReadonlyArray<ComAtprotoLabelDefsLabelValueDefinitionStrings>;
}
export interface ComAtprotoLabelDefsLabelValueDefinitionEncoded {
  readonly identifier: string;
  readonly severity: string;
  readonly blurs: string;
  readonly defaultSetting?: string;
  readonly adultOnly?: boolean;
  readonly locales: ReadonlyArray<ComAtprotoLabelDefsLabelValueDefinitionStringsEncoded>;
}
export const ComAtprotoLabelDefsLabelValueDefinition: Schema.Schema<ComAtprotoLabelDefsLabelValueDefinition, ComAtprotoLabelDefsLabelValueDefinitionEncoded, never> = Schema.Struct({
  identifier: Schema.String,
  severity: Schema.String,
  blurs: Schema.String,
  defaultSetting: Schema.optional(Schema.String),
  adultOnly: Schema.optional(Schema.Boolean),
  locales: Schema.Array(Schema.suspend(() => ComAtprotoLabelDefsLabelValueDefinitionStrings)),
});

export type ComAtprotoLabelDefsLabelValueDefinitionStrings = unknown;
export type ComAtprotoLabelDefsLabelValueDefinitionStringsEncoded = unknown;
export const ComAtprotoLabelDefsLabelValueDefinitionStrings: Schema.Schema<ComAtprotoLabelDefsLabelValueDefinitionStrings, ComAtprotoLabelDefsLabelValueDefinitionStringsEncoded, never> = Schema.Unknown;

export interface ComAtprotoLabelDefsSelfLabel {
  readonly val: string;
}
export interface ComAtprotoLabelDefsSelfLabelEncoded {
  readonly val: string;
}
export const ComAtprotoLabelDefsSelfLabel: Schema.Schema<ComAtprotoLabelDefsSelfLabel, ComAtprotoLabelDefsSelfLabelEncoded, never> = Schema.Struct({
  val: Schema.String,
});

export type ComAtprotoLabelDefsSelfLabels = unknown;
export type ComAtprotoLabelDefsSelfLabelsEncoded = unknown;
export const ComAtprotoLabelDefsSelfLabels: Schema.Schema<ComAtprotoLabelDefsSelfLabels, ComAtprotoLabelDefsSelfLabelsEncoded, never> = Schema.Unknown;

export interface ComAtprotoLabelSubscribeLabelsInfo {
  readonly name: string;
  readonly message?: string;
}
export interface ComAtprotoLabelSubscribeLabelsInfoEncoded {
  readonly name: string;
  readonly message?: string;
}
export const ComAtprotoLabelSubscribeLabelsInfo: Schema.Schema<ComAtprotoLabelSubscribeLabelsInfo, ComAtprotoLabelSubscribeLabelsInfoEncoded, never> = Schema.Struct({
  name: Schema.String,
  message: Schema.optional(Schema.String),
});

export interface ComAtprotoLabelSubscribeLabelsLabels {
  readonly seq: number;
  readonly labels: ReadonlyArray<ComAtprotoLabelDefsLabel>;
}
export interface ComAtprotoLabelSubscribeLabelsLabelsEncoded {
  readonly seq: number;
  readonly labels: ReadonlyArray<ComAtprotoLabelDefsLabelEncoded>;
}
export const ComAtprotoLabelSubscribeLabelsLabels: Schema.Schema<ComAtprotoLabelSubscribeLabelsLabels, ComAtprotoLabelSubscribeLabelsLabelsEncoded, never> = Schema.Struct({
  seq: Schema.Number,
  labels: Schema.Array(Schema.suspend(() => ComAtprotoLabelDefsLabel)),
});

export interface ComAtprotoLexiconSchema {
  readonly lexicon: number;
}
export interface ComAtprotoLexiconSchemaEncoded {
  readonly lexicon: number;
}
export const ComAtprotoLexiconSchema: Schema.Schema<ComAtprotoLexiconSchema, ComAtprotoLexiconSchemaEncoded, never> = Schema.Struct({
  lexicon: Schema.Number,
});

export interface ComAtprotoModerationCreateReportModTool {
  readonly name: string;
  readonly meta?: unknown;
}
export interface ComAtprotoModerationCreateReportModToolEncoded {
  readonly name: string;
  readonly meta?: unknown;
}
export const ComAtprotoModerationCreateReportModTool: Schema.Schema<ComAtprotoModerationCreateReportModTool, ComAtprotoModerationCreateReportModToolEncoded, never> = Schema.Struct({
  name: Schema.String,
  meta: Schema.optional(Schema.Unknown),
});

export type ComAtprotoModerationDefsReasonType = unknown;
export type ComAtprotoModerationDefsReasonTypeEncoded = unknown;
export const ComAtprotoModerationDefsReasonType: Schema.Schema<ComAtprotoModerationDefsReasonType, ComAtprotoModerationDefsReasonTypeEncoded, never> = Schema.Unknown;

export type ComAtprotoModerationDefsSubjectType = unknown;
export type ComAtprotoModerationDefsSubjectTypeEncoded = unknown;
export const ComAtprotoModerationDefsSubjectType: Schema.Schema<ComAtprotoModerationDefsSubjectType, ComAtprotoModerationDefsSubjectTypeEncoded, never> = Schema.Unknown;

export interface ComAtprotoRepoApplyWritesCreate {
  readonly collection: string;
  readonly rkey?: string;
  readonly value: unknown;
}
export interface ComAtprotoRepoApplyWritesCreateEncoded {
  readonly collection: string;
  readonly rkey?: string;
  readonly value: unknown;
}
export const ComAtprotoRepoApplyWritesCreate: Schema.Schema<ComAtprotoRepoApplyWritesCreate, ComAtprotoRepoApplyWritesCreateEncoded, never> = Schema.Struct({
  collection: Schema.String,
  rkey: Schema.optional(Schema.String),
  value: Schema.Unknown,
});

export interface ComAtprotoRepoApplyWritesCreateResult {
  readonly uri: string;
  readonly cid: string;
  readonly validationStatus?: string;
}
export interface ComAtprotoRepoApplyWritesCreateResultEncoded {
  readonly uri: string;
  readonly cid: string;
  readonly validationStatus?: string;
}
export const ComAtprotoRepoApplyWritesCreateResult: Schema.Schema<ComAtprotoRepoApplyWritesCreateResult, ComAtprotoRepoApplyWritesCreateResultEncoded, never> = Schema.Struct({
  uri: Schema.String,
  cid: Schema.String,
  validationStatus: Schema.optional(Schema.String),
});

export interface ComAtprotoRepoApplyWritesDelete {
  readonly collection: string;
  readonly rkey: string;
}
export interface ComAtprotoRepoApplyWritesDeleteEncoded {
  readonly collection: string;
  readonly rkey: string;
}
export const ComAtprotoRepoApplyWritesDelete: Schema.Schema<ComAtprotoRepoApplyWritesDelete, ComAtprotoRepoApplyWritesDeleteEncoded, never> = Schema.Struct({
  collection: Schema.String,
  rkey: Schema.String,
});

export interface ComAtprotoRepoApplyWritesDeleteResult {

}
export interface ComAtprotoRepoApplyWritesDeleteResultEncoded {

}
export const ComAtprotoRepoApplyWritesDeleteResult: Schema.Schema<ComAtprotoRepoApplyWritesDeleteResult, ComAtprotoRepoApplyWritesDeleteResultEncoded, never> = Schema.Struct({

});

export interface ComAtprotoRepoApplyWritesUpdate {
  readonly collection: string;
  readonly rkey: string;
  readonly value: unknown;
}
export interface ComAtprotoRepoApplyWritesUpdateEncoded {
  readonly collection: string;
  readonly rkey: string;
  readonly value: unknown;
}
export const ComAtprotoRepoApplyWritesUpdate: Schema.Schema<ComAtprotoRepoApplyWritesUpdate, ComAtprotoRepoApplyWritesUpdateEncoded, never> = Schema.Struct({
  collection: Schema.String,
  rkey: Schema.String,
  value: Schema.Unknown,
});

export interface ComAtprotoRepoApplyWritesUpdateResult {
  readonly uri: string;
  readonly cid: string;
  readonly validationStatus?: string;
}
export interface ComAtprotoRepoApplyWritesUpdateResultEncoded {
  readonly uri: string;
  readonly cid: string;
  readonly validationStatus?: string;
}
export const ComAtprotoRepoApplyWritesUpdateResult: Schema.Schema<ComAtprotoRepoApplyWritesUpdateResult, ComAtprotoRepoApplyWritesUpdateResultEncoded, never> = Schema.Struct({
  uri: Schema.String,
  cid: Schema.String,
  validationStatus: Schema.optional(Schema.String),
});

export interface ComAtprotoRepoDefsCommitMeta {
  readonly cid: string;
  readonly rev: string;
}
export interface ComAtprotoRepoDefsCommitMetaEncoded {
  readonly cid: string;
  readonly rev: string;
}
export const ComAtprotoRepoDefsCommitMeta: Schema.Schema<ComAtprotoRepoDefsCommitMeta, ComAtprotoRepoDefsCommitMetaEncoded, never> = Schema.Struct({
  cid: Schema.String,
  rev: Schema.String,
});

export interface ComAtprotoRepoDefsStrongRef {
  readonly uri: string;
  readonly cid: string;
}
export interface ComAtprotoRepoDefsStrongRefEncoded {
  readonly uri: string;
  readonly cid: string;
}
export const ComAtprotoRepoDefsStrongRef: Schema.Schema<ComAtprotoRepoDefsStrongRef, ComAtprotoRepoDefsStrongRefEncoded, never> = Schema.Struct({
  uri: Schema.String,
  cid: Schema.String,
});

export interface ComAtprotoRepoListMissingBlobsRecordBlob {
  readonly cid: string;
  readonly recordUri: string;
}
export interface ComAtprotoRepoListMissingBlobsRecordBlobEncoded {
  readonly cid: string;
  readonly recordUri: string;
}
export const ComAtprotoRepoListMissingBlobsRecordBlob: Schema.Schema<ComAtprotoRepoListMissingBlobsRecordBlob, ComAtprotoRepoListMissingBlobsRecordBlobEncoded, never> = Schema.Struct({
  cid: Schema.String,
  recordUri: Schema.String,
});

export interface ComAtprotoRepoListRecordsRecord {
  readonly uri: string;
  readonly cid: string;
  readonly value: unknown;
}
export interface ComAtprotoRepoListRecordsRecordEncoded {
  readonly uri: string;
  readonly cid: string;
  readonly value: unknown;
}
export const ComAtprotoRepoListRecordsRecord: Schema.Schema<ComAtprotoRepoListRecordsRecord, ComAtprotoRepoListRecordsRecordEncoded, never> = Schema.Struct({
  uri: Schema.String,
  cid: Schema.String,
  value: Schema.Unknown,
});

export type ComAtprotoRepoStrongRef = unknown;
export type ComAtprotoRepoStrongRefEncoded = unknown;
export const ComAtprotoRepoStrongRef: Schema.Schema<ComAtprotoRepoStrongRef, ComAtprotoRepoStrongRefEncoded, never> = Schema.Unknown;

export interface ComAtprotoServerCreateAppPasswordAppPassword {
  readonly name: string;
  readonly password: string;
  readonly createdAt: string;
  readonly privileged?: boolean;
}
export interface ComAtprotoServerCreateAppPasswordAppPasswordEncoded {
  readonly name: string;
  readonly password: string;
  readonly createdAt: string;
  readonly privileged?: boolean;
}
export const ComAtprotoServerCreateAppPasswordAppPassword: Schema.Schema<ComAtprotoServerCreateAppPasswordAppPassword, ComAtprotoServerCreateAppPasswordAppPasswordEncoded, never> = Schema.Struct({
  name: Schema.String,
  password: Schema.String,
  createdAt: Schema.String,
  privileged: Schema.optional(Schema.Boolean),
});

export interface ComAtprotoServerCreateInviteCodesAccountCodes {
  readonly account: string;
  readonly codes: ReadonlyArray<string>;
}
export interface ComAtprotoServerCreateInviteCodesAccountCodesEncoded {
  readonly account: string;
  readonly codes: ReadonlyArray<string>;
}
export const ComAtprotoServerCreateInviteCodesAccountCodes: Schema.Schema<ComAtprotoServerCreateInviteCodesAccountCodes, ComAtprotoServerCreateInviteCodesAccountCodesEncoded, never> = Schema.Struct({
  account: Schema.String,
  codes: Schema.Array(Schema.String),
});

export type ComAtprotoServerDefsInviteCode = unknown;
export type ComAtprotoServerDefsInviteCodeEncoded = unknown;
export const ComAtprotoServerDefsInviteCode: Schema.Schema<ComAtprotoServerDefsInviteCode, ComAtprotoServerDefsInviteCodeEncoded, never> = Schema.Unknown;

export interface ComAtprotoServerDefsInviteCodeUse {
  readonly usedBy: string;
  readonly usedAt: string;
}
export interface ComAtprotoServerDefsInviteCodeUseEncoded {
  readonly usedBy: string;
  readonly usedAt: string;
}
export const ComAtprotoServerDefsInviteCodeUse: Schema.Schema<ComAtprotoServerDefsInviteCodeUse, ComAtprotoServerDefsInviteCodeUseEncoded, never> = Schema.Struct({
  usedBy: Schema.String,
  usedAt: Schema.String,
});

export interface ComAtprotoServerDescribeServerContact {
  readonly email?: string;
}
export interface ComAtprotoServerDescribeServerContactEncoded {
  readonly email?: string;
}
export const ComAtprotoServerDescribeServerContact: Schema.Schema<ComAtprotoServerDescribeServerContact, ComAtprotoServerDescribeServerContactEncoded, never> = Schema.Struct({
  email: Schema.optional(Schema.String),
});

export interface ComAtprotoServerDescribeServerLinks {
  readonly privacyPolicy?: string;
  readonly termsOfService?: string;
}
export interface ComAtprotoServerDescribeServerLinksEncoded {
  readonly privacyPolicy?: string;
  readonly termsOfService?: string;
}
export const ComAtprotoServerDescribeServerLinks: Schema.Schema<ComAtprotoServerDescribeServerLinks, ComAtprotoServerDescribeServerLinksEncoded, never> = Schema.Struct({
  privacyPolicy: Schema.optional(Schema.String),
  termsOfService: Schema.optional(Schema.String),
});

export interface ComAtprotoServerListAppPasswordsAppPassword {
  readonly name: string;
  readonly createdAt: string;
  readonly privileged?: boolean;
}
export interface ComAtprotoServerListAppPasswordsAppPasswordEncoded {
  readonly name: string;
  readonly createdAt: string;
  readonly privileged?: boolean;
}
export const ComAtprotoServerListAppPasswordsAppPassword: Schema.Schema<ComAtprotoServerListAppPasswordsAppPassword, ComAtprotoServerListAppPasswordsAppPasswordEncoded, never> = Schema.Struct({
  name: Schema.String,
  createdAt: Schema.String,
  privileged: Schema.optional(Schema.Boolean),
});

export type ComAtprotoSyncDefsHostStatus = string;
export type ComAtprotoSyncDefsHostStatusEncoded = string;
export const ComAtprotoSyncDefsHostStatus: Schema.Schema<ComAtprotoSyncDefsHostStatus, ComAtprotoSyncDefsHostStatusEncoded, never> = Schema.String;

export interface ComAtprotoSyncListHostsHost {
  readonly hostname: string;
  readonly seq?: number;
  readonly accountCount?: number;
  readonly status?: ComAtprotoSyncDefsHostStatus;
}
export interface ComAtprotoSyncListHostsHostEncoded {
  readonly hostname: string;
  readonly seq?: number;
  readonly accountCount?: number;
  readonly status?: ComAtprotoSyncDefsHostStatusEncoded;
}
export const ComAtprotoSyncListHostsHost: Schema.Schema<ComAtprotoSyncListHostsHost, ComAtprotoSyncListHostsHostEncoded, never> = Schema.Struct({
  hostname: Schema.String,
  seq: Schema.optional(Schema.Number),
  accountCount: Schema.optional(Schema.Number),
  status: Schema.optional(Schema.suspend(() => ComAtprotoSyncDefsHostStatus)),
});

export interface ComAtprotoSyncListReposByCollectionRepo {
  readonly did: string;
}
export interface ComAtprotoSyncListReposByCollectionRepoEncoded {
  readonly did: string;
}
export const ComAtprotoSyncListReposByCollectionRepo: Schema.Schema<ComAtprotoSyncListReposByCollectionRepo, ComAtprotoSyncListReposByCollectionRepoEncoded, never> = Schema.Struct({
  did: Schema.String,
});

export interface ComAtprotoSyncListReposRepo {
  readonly did: string;
  readonly head: string;
  readonly rev: string;
  readonly active?: boolean;
  readonly status?: string;
}
export interface ComAtprotoSyncListReposRepoEncoded {
  readonly did: string;
  readonly head: string;
  readonly rev: string;
  readonly active?: boolean;
  readonly status?: string;
}
export const ComAtprotoSyncListReposRepo: Schema.Schema<ComAtprotoSyncListReposRepo, ComAtprotoSyncListReposRepoEncoded, never> = Schema.Struct({
  did: Schema.String,
  head: Schema.String,
  rev: Schema.String,
  active: Schema.optional(Schema.Boolean),
  status: Schema.optional(Schema.String),
});

export interface ComAtprotoSyncSubscribeReposAccount {
  readonly seq: number;
  readonly did: string;
  readonly time: string;
  readonly active: boolean;
  readonly status?: string;
}
export interface ComAtprotoSyncSubscribeReposAccountEncoded {
  readonly seq: number;
  readonly did: string;
  readonly time: string;
  readonly active: boolean;
  readonly status?: string;
}
export const ComAtprotoSyncSubscribeReposAccount: Schema.Schema<ComAtprotoSyncSubscribeReposAccount, ComAtprotoSyncSubscribeReposAccountEncoded, never> = Schema.Struct({
  seq: Schema.Number,
  did: Schema.String,
  time: Schema.String,
  active: Schema.Boolean,
  status: Schema.optional(Schema.String),
});

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
export interface ComAtprotoSyncSubscribeReposCommitEncoded {
  readonly seq: number;
  readonly rebase: boolean;
  readonly tooBig: boolean;
  readonly repo: string;
  readonly commit: string;
  readonly rev: string;
  readonly since: string;
  readonly blocks: string;
  readonly ops: ReadonlyArray<ComAtprotoSyncSubscribeReposRepoOpEncoded>;
  readonly blobs: ReadonlyArray<string>;
  readonly prevData?: string;
  readonly time: string;
}
export const ComAtprotoSyncSubscribeReposCommit: Schema.Schema<ComAtprotoSyncSubscribeReposCommit, ComAtprotoSyncSubscribeReposCommitEncoded, never> = Schema.Struct({
  seq: Schema.Number,
  rebase: Schema.Boolean,
  tooBig: Schema.Boolean,
  repo: Schema.String,
  commit: Schema.String,
  rev: Schema.String,
  since: Schema.String,
  blocks: Schema.String,
  ops: Schema.Array(Schema.suspend(() => ComAtprotoSyncSubscribeReposRepoOp)),
  blobs: Schema.Array(Schema.String),
  prevData: Schema.optional(Schema.String),
  time: Schema.String,
});

export interface ComAtprotoSyncSubscribeReposIdentity {
  readonly seq: number;
  readonly did: string;
  readonly time: string;
  readonly handle?: string;
}
export interface ComAtprotoSyncSubscribeReposIdentityEncoded {
  readonly seq: number;
  readonly did: string;
  readonly time: string;
  readonly handle?: string;
}
export const ComAtprotoSyncSubscribeReposIdentity: Schema.Schema<ComAtprotoSyncSubscribeReposIdentity, ComAtprotoSyncSubscribeReposIdentityEncoded, never> = Schema.Struct({
  seq: Schema.Number,
  did: Schema.String,
  time: Schema.String,
  handle: Schema.optional(Schema.String),
});

export interface ComAtprotoSyncSubscribeReposInfo {
  readonly name: string;
  readonly message?: string;
}
export interface ComAtprotoSyncSubscribeReposInfoEncoded {
  readonly name: string;
  readonly message?: string;
}
export const ComAtprotoSyncSubscribeReposInfo: Schema.Schema<ComAtprotoSyncSubscribeReposInfo, ComAtprotoSyncSubscribeReposInfoEncoded, never> = Schema.Struct({
  name: Schema.String,
  message: Schema.optional(Schema.String),
});

export type ComAtprotoSyncSubscribeReposRepoOp = unknown;
export type ComAtprotoSyncSubscribeReposRepoOpEncoded = unknown;
export const ComAtprotoSyncSubscribeReposRepoOp: Schema.Schema<ComAtprotoSyncSubscribeReposRepoOp, ComAtprotoSyncSubscribeReposRepoOpEncoded, never> = Schema.Unknown;

export interface ComAtprotoSyncSubscribeReposSync {
  readonly seq: number;
  readonly did: string;
  readonly blocks: string;
  readonly rev: string;
  readonly time: string;
}
export interface ComAtprotoSyncSubscribeReposSyncEncoded {
  readonly seq: number;
  readonly did: string;
  readonly blocks: string;
  readonly rev: string;
  readonly time: string;
}
export const ComAtprotoSyncSubscribeReposSync: Schema.Schema<ComAtprotoSyncSubscribeReposSync, ComAtprotoSyncSubscribeReposSyncEncoded, never> = Schema.Struct({
  seq: Schema.Number,
  did: Schema.String,
  blocks: Schema.String,
  rev: Schema.String,
  time: Schema.String,
});

export interface ComAtprotoTempCheckHandleAvailabilityResultAvailable {

}
export interface ComAtprotoTempCheckHandleAvailabilityResultAvailableEncoded {

}
export const ComAtprotoTempCheckHandleAvailabilityResultAvailable: Schema.Schema<ComAtprotoTempCheckHandleAvailabilityResultAvailable, ComAtprotoTempCheckHandleAvailabilityResultAvailableEncoded, never> = Schema.Struct({

});

export interface ComAtprotoTempCheckHandleAvailabilityResultUnavailable {
  readonly suggestions: ReadonlyArray<ComAtprotoTempCheckHandleAvailabilitySuggestion>;
}
export interface ComAtprotoTempCheckHandleAvailabilityResultUnavailableEncoded {
  readonly suggestions: ReadonlyArray<ComAtprotoTempCheckHandleAvailabilitySuggestionEncoded>;
}
export const ComAtprotoTempCheckHandleAvailabilityResultUnavailable: Schema.Schema<ComAtprotoTempCheckHandleAvailabilityResultUnavailable, ComAtprotoTempCheckHandleAvailabilityResultUnavailableEncoded, never> = Schema.Struct({
  suggestions: Schema.Array(Schema.suspend(() => ComAtprotoTempCheckHandleAvailabilitySuggestion)),
});

export type ComAtprotoTempCheckHandleAvailabilitySuggestion = unknown;
export type ComAtprotoTempCheckHandleAvailabilitySuggestionEncoded = unknown;
export const ComAtprotoTempCheckHandleAvailabilitySuggestion: Schema.Schema<ComAtprotoTempCheckHandleAvailabilitySuggestion, ComAtprotoTempCheckHandleAvailabilitySuggestionEncoded, never> = Schema.Unknown;

export interface ConfirmEmailParams {
  readonly email: string;
  readonly token: string;
}
export interface ConfirmEmailParamsEncoded {
  readonly email: string;
  readonly token: string;
}
export const ConfirmEmailParams: Schema.Schema<ConfirmEmailParams, ConfirmEmailParamsEncoded, never> = Schema.Struct({
  email: Schema.String,
  token: Schema.String,
});

export interface ConfirmEmailResponse {

}
export interface ConfirmEmailResponseEncoded {

}
export const ConfirmEmailResponse: Schema.Schema<ConfirmEmailResponse, ConfirmEmailResponseEncoded, never> = Schema.Struct({

});

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
export interface CreateAccountParamsEncoded {
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
export const CreateAccountParams: Schema.Schema<CreateAccountParams, CreateAccountParamsEncoded, never> = Schema.Struct({
  email: Schema.optional(Schema.String),
  handle: Schema.String,
  did: Schema.optional(Schema.String),
  inviteCode: Schema.optional(Schema.String),
  verificationCode: Schema.optional(Schema.String),
  verificationPhone: Schema.optional(Schema.String),
  password: Schema.optional(Schema.String),
  recoveryKey: Schema.optional(Schema.String),
  plcOp: Schema.optional(Schema.Unknown),
});

export interface CreateAccountResponse {
  readonly data: Inline646;
}
export interface CreateAccountResponseEncoded {
  readonly data: Inline646Encoded;
}
export const CreateAccountResponse: Schema.Schema<CreateAccountResponse, CreateAccountResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline646),
});

export interface CreateAppPasswordParams {
  readonly name: string;
  readonly privileged?: boolean;
}
export interface CreateAppPasswordParamsEncoded {
  readonly name: string;
  readonly privileged?: boolean;
}
export const CreateAppPasswordParams: Schema.Schema<CreateAppPasswordParams, CreateAppPasswordParamsEncoded, never> = Schema.Struct({
  name: Schema.String,
  privileged: Schema.optional(Schema.Boolean),
});

export interface CreateAppPasswordResponse {
  readonly data: ComAtprotoServerCreateAppPasswordAppPassword;
}
export interface CreateAppPasswordResponseEncoded {
  readonly data: ComAtprotoServerCreateAppPasswordAppPasswordEncoded;
}
export const CreateAppPasswordResponse: Schema.Schema<CreateAppPasswordResponse, CreateAppPasswordResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => ComAtprotoServerCreateAppPasswordAppPassword),
});

export interface CreateBookmarkParams {
  readonly uri: string;
  readonly cid: string;
}
export interface CreateBookmarkParamsEncoded {
  readonly uri: string;
  readonly cid: string;
}
export const CreateBookmarkParams: Schema.Schema<CreateBookmarkParams, CreateBookmarkParamsEncoded, never> = Schema.Struct({
  uri: Schema.String,
  cid: Schema.String,
});

export interface CreateBookmarkResponse {

}
export interface CreateBookmarkResponseEncoded {

}
export const CreateBookmarkResponse: Schema.Schema<CreateBookmarkResponse, CreateBookmarkResponseEncoded, never> = Schema.Struct({

});

export interface CreateDraftParams {
  readonly draft: AppBskyDraftDefsDraft;
}
export interface CreateDraftParamsEncoded {
  readonly draft: AppBskyDraftDefsDraftEncoded;
}
export const CreateDraftParams: Schema.Schema<CreateDraftParams, CreateDraftParamsEncoded, never> = Schema.Struct({
  draft: Schema.suspend(() => AppBskyDraftDefsDraft),
});

export interface CreateDraftResponse {
  readonly data: Inline292;
}
export interface CreateDraftResponseEncoded {
  readonly data: Inline292Encoded;
}
export const CreateDraftResponse: Schema.Schema<CreateDraftResponse, CreateDraftResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline292),
});

export interface CreateInviteCodeParams {
  readonly useCount: number;
  readonly forAccount?: string;
}
export interface CreateInviteCodeParamsEncoded {
  readonly useCount: number;
  readonly forAccount?: string;
}
export const CreateInviteCodeParams: Schema.Schema<CreateInviteCodeParams, CreateInviteCodeParamsEncoded, never> = Schema.Struct({
  useCount: Schema.Number,
  forAccount: Schema.optional(Schema.String),
});

export interface CreateInviteCodeResponse {
  readonly data: Inline651;
}
export interface CreateInviteCodeResponseEncoded {
  readonly data: Inline651Encoded;
}
export const CreateInviteCodeResponse: Schema.Schema<CreateInviteCodeResponse, CreateInviteCodeResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline651),
});

export interface CreateInviteCodesParams {
  readonly codeCount: number;
  readonly useCount: number;
  readonly forAccounts?: ReadonlyArray<string>;
}
export interface CreateInviteCodesParamsEncoded {
  readonly codeCount: number;
  readonly useCount: number;
  readonly forAccounts?: ReadonlyArray<string>;
}
export const CreateInviteCodesParams: Schema.Schema<CreateInviteCodesParams, CreateInviteCodesParamsEncoded, never> = Schema.Struct({
  codeCount: Schema.Number,
  useCount: Schema.Number,
  forAccounts: Schema.optional(Schema.Array(Schema.String)),
});

export interface CreateInviteCodesResponse {
  readonly data: Inline654;
}
export interface CreateInviteCodesResponseEncoded {
  readonly data: Inline654Encoded;
}
export const CreateInviteCodesResponse: Schema.Schema<CreateInviteCodesResponse, CreateInviteCodesResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline654),
});

export interface CreateRecordParams {
  readonly repo: string;
  readonly collection: string;
  readonly rkey?: string;
  readonly validate?: boolean;
  readonly record: unknown;
  readonly swapCommit?: string;
}
export interface CreateRecordParamsEncoded {
  readonly repo: string;
  readonly collection: string;
  readonly rkey?: string;
  readonly validate?: boolean;
  readonly record: unknown;
  readonly swapCommit?: string;
}
export const CreateRecordParams: Schema.Schema<CreateRecordParams, CreateRecordParamsEncoded, never> = Schema.Struct({
  repo: Schema.String,
  collection: Schema.String,
  rkey: Schema.optional(Schema.String),
  validate: Schema.optional(Schema.Boolean),
  record: Schema.Unknown,
  swapCommit: Schema.optional(Schema.String),
});

export interface CreateRecordResponse {
  readonly data: Inline613;
}
export interface CreateRecordResponseEncoded {
  readonly data: Inline613Encoded;
}
export const CreateRecordResponse: Schema.Schema<CreateRecordResponse, CreateRecordResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline613),
});

export interface CreateReportParams {
  readonly reasonType: ComAtprotoModerationDefsReasonType;
  readonly reason?: string;
  readonly subject: ComAtprotoAdminDefsRepoRef | ComAtprotoRepoStrongRef;
  readonly modTool?: ComAtprotoModerationCreateReportModTool;
}
export interface CreateReportParamsEncoded {
  readonly reasonType: ComAtprotoModerationDefsReasonTypeEncoded;
  readonly reason?: string;
  readonly subject: ComAtprotoAdminDefsRepoRefEncoded | ComAtprotoRepoStrongRefEncoded;
  readonly modTool?: ComAtprotoModerationCreateReportModToolEncoded;
}
export const CreateReportParams: Schema.Schema<CreateReportParams, CreateReportParamsEncoded, never> = Schema.Struct({
  reasonType: Schema.suspend(() => ComAtprotoModerationDefsReasonType),
  reason: Schema.optional(Schema.String),
  subject: Schema.Union(Schema.suspend(() => ComAtprotoAdminDefsRepoRef), Schema.suspend(() => ComAtprotoRepoStrongRef)),
  modTool: Schema.optional(Schema.suspend(() => ComAtprotoModerationCreateReportModTool)),
});

export interface CreateReportResponse {
  readonly data: Inline607;
}
export interface CreateReportResponseEncoded {
  readonly data: Inline607Encoded;
}
export const CreateReportResponse: Schema.Schema<CreateReportResponse, CreateReportResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline607),
});

export interface CreateSessionParams {
  readonly identifier: string;
  readonly password: string;
  readonly authFactorToken?: string;
  readonly allowTakendown?: boolean;
}
export interface CreateSessionParamsEncoded {
  readonly identifier: string;
  readonly password: string;
  readonly authFactorToken?: string;
  readonly allowTakendown?: boolean;
}
export const CreateSessionParams: Schema.Schema<CreateSessionParams, CreateSessionParamsEncoded, never> = Schema.Struct({
  identifier: Schema.String,
  password: Schema.String,
  authFactorToken: Schema.optional(Schema.String),
  allowTakendown: Schema.optional(Schema.Boolean),
});

export interface CreateSessionResponse {
  readonly data: Inline657;
}
export interface CreateSessionResponseEncoded {
  readonly data: Inline657Encoded;
}
export const CreateSessionResponse: Schema.Schema<CreateSessionResponse, CreateSessionResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline657),
});

export interface DeactivateAccountParams {
  readonly deleteAfter?: string;
}
export interface DeactivateAccountParamsEncoded {
  readonly deleteAfter?: string;
}
export const DeactivateAccountParams: Schema.Schema<DeactivateAccountParams, DeactivateAccountParamsEncoded, never> = Schema.Struct({
  deleteAfter: Schema.optional(Schema.String),
});

export interface DeactivateAccountResponse {

}
export interface DeactivateAccountResponseEncoded {

}
export const DeactivateAccountResponse: Schema.Schema<DeactivateAccountResponse, DeactivateAccountResponseEncoded, never> = Schema.Struct({

});

export interface DeleteAccountParams {
  readonly did: string;
}
export interface DeleteAccountParamsEncoded {
  readonly did: string;
}
export const DeleteAccountParams: Schema.Schema<DeleteAccountParams, DeleteAccountParamsEncoded, never> = Schema.Struct({
  did: Schema.String,
});

export interface DeleteAccountResponse {

}
export interface DeleteAccountResponseEncoded {

}
export const DeleteAccountResponse: Schema.Schema<DeleteAccountResponse, DeleteAccountResponseEncoded, never> = Schema.Struct({

});

export interface DeleteBookmarkParams {
  readonly uri: string;
}
export interface DeleteBookmarkParamsEncoded {
  readonly uri: string;
}
export const DeleteBookmarkParams: Schema.Schema<DeleteBookmarkParams, DeleteBookmarkParamsEncoded, never> = Schema.Struct({
  uri: Schema.String,
});

export interface DeleteBookmarkResponse {

}
export interface DeleteBookmarkResponseEncoded {

}
export const DeleteBookmarkResponse: Schema.Schema<DeleteBookmarkResponse, DeleteBookmarkResponseEncoded, never> = Schema.Struct({

});

export interface DeleteDraftParams {
  readonly id: string;
}
export interface DeleteDraftParamsEncoded {
  readonly id: string;
}
export const DeleteDraftParams: Schema.Schema<DeleteDraftParams, DeleteDraftParamsEncoded, never> = Schema.Struct({
  id: Schema.String,
});

export interface DeleteDraftResponse {

}
export interface DeleteDraftResponseEncoded {

}
export const DeleteDraftResponse: Schema.Schema<DeleteDraftResponse, DeleteDraftResponseEncoded, never> = Schema.Struct({

});

export interface DeleteRecordParams {
  readonly repo: string;
  readonly collection: string;
  readonly rkey: string;
  readonly swapRecord?: string;
  readonly swapCommit?: string;
}
export interface DeleteRecordParamsEncoded {
  readonly repo: string;
  readonly collection: string;
  readonly rkey: string;
  readonly swapRecord?: string;
  readonly swapCommit?: string;
}
export const DeleteRecordParams: Schema.Schema<DeleteRecordParams, DeleteRecordParamsEncoded, never> = Schema.Struct({
  repo: Schema.String,
  collection: Schema.String,
  rkey: Schema.String,
  swapRecord: Schema.optional(Schema.String),
  swapCommit: Schema.optional(Schema.String),
});

export interface DeleteRecordResponse {
  readonly data: Inline616;
}
export interface DeleteRecordResponseEncoded {
  readonly data: Inline616Encoded;
}
export const DeleteRecordResponse: Schema.Schema<DeleteRecordResponse, DeleteRecordResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline616),
});

export interface DeleteSessionParams {

}
export interface DeleteSessionParamsEncoded {

}
export const DeleteSessionParams: Schema.Schema<DeleteSessionParams, DeleteSessionParamsEncoded, never> = Schema.Struct({

});

export interface DeleteSessionResponse {

}
export interface DeleteSessionResponseEncoded {

}
export const DeleteSessionResponse: Schema.Schema<DeleteSessionResponse, DeleteSessionResponseEncoded, never> = Schema.Struct({

});

export interface DereferenceScopeParams {
  readonly scope: string;
}
export interface DereferenceScopeParamsEncoded {
  readonly scope: string;
}
export const DereferenceScopeParams: Schema.Schema<DereferenceScopeParams, DereferenceScopeParamsEncoded, never> = Schema.Struct({
  scope: Schema.String,
});

export interface DereferenceScopeResponse {
  readonly data: Inline743;
}
export interface DereferenceScopeResponseEncoded {
  readonly data: Inline743Encoded;
}
export const DereferenceScopeResponse: Schema.Schema<DereferenceScopeResponse, DereferenceScopeResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline743),
});

export interface DescribeFeedGeneratorParams {

}
export interface DescribeFeedGeneratorParamsEncoded {

}
export const DescribeFeedGeneratorParams: Schema.Schema<DescribeFeedGeneratorParams, DescribeFeedGeneratorParamsEncoded, never> = Schema.Struct({

});

export interface DescribeFeedGeneratorResponse {
  readonly data: Inline305;
}
export interface DescribeFeedGeneratorResponseEncoded {
  readonly data: Inline305Encoded;
}
export const DescribeFeedGeneratorResponse: Schema.Schema<DescribeFeedGeneratorResponse, DescribeFeedGeneratorResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline305),
});

export interface DescribeRepoParams {
  readonly repo: string;
}
export interface DescribeRepoParamsEncoded {
  readonly repo: string;
}
export const DescribeRepoParams: Schema.Schema<DescribeRepoParams, DescribeRepoParamsEncoded, never> = Schema.Struct({
  repo: Schema.String,
});

export interface DescribeRepoResponse {
  readonly data: Inline619;
}
export interface DescribeRepoResponseEncoded {
  readonly data: Inline619Encoded;
}
export const DescribeRepoResponse: Schema.Schema<DescribeRepoResponse, DescribeRepoResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline619),
});

export interface DescribeServerParams {

}
export interface DescribeServerParamsEncoded {

}
export const DescribeServerParams: Schema.Schema<DescribeServerParams, DescribeServerParamsEncoded, never> = Schema.Struct({

});

export interface DescribeServerResponse {
  readonly data: Inline664;
}
export interface DescribeServerResponseEncoded {
  readonly data: Inline664Encoded;
}
export const DescribeServerResponse: Schema.Schema<DescribeServerResponse, DescribeServerResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline664),
});

export interface DisableAccountInvitesParams {
  readonly account: string;
  readonly note?: string;
}
export interface DisableAccountInvitesParamsEncoded {
  readonly account: string;
  readonly note?: string;
}
export const DisableAccountInvitesParams: Schema.Schema<DisableAccountInvitesParams, DisableAccountInvitesParamsEncoded, never> = Schema.Struct({
  account: Schema.String,
  note: Schema.optional(Schema.String),
});

export interface DisableAccountInvitesResponse {

}
export interface DisableAccountInvitesResponseEncoded {

}
export const DisableAccountInvitesResponse: Schema.Schema<DisableAccountInvitesResponse, DisableAccountInvitesResponseEncoded, never> = Schema.Struct({

});

export interface DisableInviteCodesParams {
  readonly codes?: ReadonlyArray<string>;
  readonly accounts?: ReadonlyArray<string>;
}
export interface DisableInviteCodesParamsEncoded {
  readonly codes?: ReadonlyArray<string>;
  readonly accounts?: ReadonlyArray<string>;
}
export const DisableInviteCodesParams: Schema.Schema<DisableInviteCodesParams, DisableInviteCodesParamsEncoded, never> = Schema.Struct({
  codes: Schema.optional(Schema.Array(Schema.String)),
  accounts: Schema.optional(Schema.Array(Schema.String)),
});

export interface DisableInviteCodesResponse {

}
export interface DisableInviteCodesResponseEncoded {

}
export const DisableInviteCodesResponse: Schema.Schema<DisableInviteCodesResponse, DisableInviteCodesResponseEncoded, never> = Schema.Struct({

});

export interface DismissMatchParams {
  readonly subject: string;
}
export interface DismissMatchParamsEncoded {
  readonly subject: string;
}
export const DismissMatchParams: Schema.Schema<DismissMatchParams, DismissMatchParamsEncoded, never> = Schema.Struct({
  subject: Schema.String,
});

export interface DismissMatchResponse {
  readonly data: Inline268;
}
export interface DismissMatchResponseEncoded {
  readonly data: Inline268Encoded;
}
export const DismissMatchResponse: Schema.Schema<DismissMatchResponse, DismissMatchResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline268),
});

export interface EnableAccountInvitesParams {
  readonly account: string;
  readonly note?: string;
}
export interface EnableAccountInvitesParamsEncoded {
  readonly account: string;
  readonly note?: string;
}
export const EnableAccountInvitesParams: Schema.Schema<EnableAccountInvitesParams, EnableAccountInvitesParamsEncoded, never> = Schema.Struct({
  account: Schema.String,
  note: Schema.optional(Schema.String),
});

export interface EnableAccountInvitesResponse {

}
export interface EnableAccountInvitesResponseEncoded {

}
export const EnableAccountInvitesResponse: Schema.Schema<EnableAccountInvitesResponse, EnableAccountInvitesResponseEncoded, never> = Schema.Struct({

});

export interface FetchLabelsParams {
  readonly since?: number;
  readonly limit?: number;
}
export interface FetchLabelsParamsEncoded {
  readonly since?: number;
  readonly limit?: number;
}
export const FetchLabelsParams: Schema.Schema<FetchLabelsParams, FetchLabelsParamsEncoded, never> = Schema.Struct({
  since: Schema.optional(Schema.Number),
  limit: Schema.optional(Schema.Number),
});

export interface FetchLabelsResponse {
  readonly data: Inline746;
}
export interface FetchLabelsResponseEncoded {
  readonly data: Inline746Encoded;
}
export const FetchLabelsResponse: Schema.Schema<FetchLabelsResponse, FetchLabelsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline746),
});

export interface GetAccountInfoParams {
  readonly did: string;
}
export interface GetAccountInfoParamsEncoded {
  readonly did: string;
}
export const GetAccountInfoParams: Schema.Schema<GetAccountInfoParams, GetAccountInfoParamsEncoded, never> = Schema.Struct({
  did: Schema.String,
});

export interface GetAccountInfoResponse {
  readonly data: ComAtprotoAdminDefsAccountView;
}
export interface GetAccountInfoResponseEncoded {
  readonly data: ComAtprotoAdminDefsAccountViewEncoded;
}
export const GetAccountInfoResponse: Schema.Schema<GetAccountInfoResponse, GetAccountInfoResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => ComAtprotoAdminDefsAccountView),
});

export interface GetAccountInfosParams {
  readonly dids: ReadonlyArray<string>;
}
export interface GetAccountInfosParamsEncoded {
  readonly dids: ReadonlyArray<string>;
}
export const GetAccountInfosParams: Schema.Schema<GetAccountInfosParams, GetAccountInfosParamsEncoded, never> = Schema.Struct({
  dids: Schema.Array(Schema.String),
});

export interface GetAccountInfosResponse {
  readonly data: Inline553;
}
export interface GetAccountInfosResponseEncoded {
  readonly data: Inline553Encoded;
}
export const GetAccountInfosResponse: Schema.Schema<GetAccountInfosResponse, GetAccountInfosResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline553),
});

export interface GetAccountInviteCodesParams {
  readonly includeUsed?: boolean;
  readonly createAvailable?: boolean;
}
export interface GetAccountInviteCodesParamsEncoded {
  readonly includeUsed?: boolean;
  readonly createAvailable?: boolean;
}
export const GetAccountInviteCodesParams: Schema.Schema<GetAccountInviteCodesParams, GetAccountInviteCodesParamsEncoded, never> = Schema.Struct({
  includeUsed: Schema.optional(Schema.Boolean),
  createAvailable: Schema.optional(Schema.Boolean),
});

export interface GetAccountInviteCodesResponse {
  readonly data: Inline667;
}
export interface GetAccountInviteCodesResponseEncoded {
  readonly data: Inline667Encoded;
}
export const GetAccountInviteCodesResponse: Schema.Schema<GetAccountInviteCodesResponse, GetAccountInviteCodesResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline667),
});

export interface GetActorFeedsParams {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export interface GetActorFeedsParamsEncoded {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export const GetActorFeedsParams: Schema.Schema<GetActorFeedsParams, GetActorFeedsParamsEncoded, never> = Schema.Struct({
  actor: Schema.String,
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
});

export interface GetActorFeedsResponse {
  readonly data: Inline308;
}
export interface GetActorFeedsResponseEncoded {
  readonly data: Inline308Encoded;
}
export const GetActorFeedsResponse: Schema.Schema<GetActorFeedsResponse, GetActorFeedsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline308),
});

export interface GetActorLikesParams {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export interface GetActorLikesParamsEncoded {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export const GetActorLikesParams: Schema.Schema<GetActorLikesParams, GetActorLikesParamsEncoded, never> = Schema.Struct({
  actor: Schema.String,
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
});

export interface GetActorLikesResponse {
  readonly data: Inline311;
}
export interface GetActorLikesResponseEncoded {
  readonly data: Inline311Encoded;
}
export const GetActorLikesResponse: Schema.Schema<GetActorLikesResponse, GetActorLikesResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline311),
});

export interface GetActorStarterPacksParams {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export interface GetActorStarterPacksParamsEncoded {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export const GetActorStarterPacksParams: Schema.Schema<GetActorStarterPacksParams, GetActorStarterPacksParamsEncoded, never> = Schema.Struct({
  actor: Schema.String,
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
});

export interface GetActorStarterPacksResponse {
  readonly data: Inline362;
}
export interface GetActorStarterPacksResponseEncoded {
  readonly data: Inline362Encoded;
}
export const GetActorStarterPacksResponse: Schema.Schema<GetActorStarterPacksResponse, GetActorStarterPacksResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline362),
});

export interface GetAgeAssuranceStateParams {

}
export interface GetAgeAssuranceStateParamsEncoded {

}
export const GetAgeAssuranceStateParams: Schema.Schema<GetAgeAssuranceStateParams, GetAgeAssuranceStateParamsEncoded, never> = Schema.Struct({

});

export interface GetAgeAssuranceStateResponse {
  readonly data: AppBskyUnspeccedDefsAgeAssuranceState;
}
export interface GetAgeAssuranceStateResponseEncoded {
  readonly data: AppBskyUnspeccedDefsAgeAssuranceStateEncoded;
}
export const GetAgeAssuranceStateResponse: Schema.Schema<GetAgeAssuranceStateResponse, GetAgeAssuranceStateResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => AppBskyUnspeccedDefsAgeAssuranceState),
});

export interface GetAuthorFeedParams {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
  readonly filter?: string;
  readonly includePins?: boolean;
}
export interface GetAuthorFeedParamsEncoded {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
  readonly filter?: string;
  readonly includePins?: boolean;
}
export const GetAuthorFeedParams: Schema.Schema<GetAuthorFeedParams, GetAuthorFeedParamsEncoded, never> = Schema.Struct({
  actor: Schema.String,
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
  filter: Schema.optional(Schema.String),
  includePins: Schema.optional(Schema.Boolean),
});

export interface GetAuthorFeedResponse {
  readonly data: Inline314;
}
export interface GetAuthorFeedResponseEncoded {
  readonly data: Inline314Encoded;
}
export const GetAuthorFeedResponse: Schema.Schema<GetAuthorFeedResponse, GetAuthorFeedResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline314),
});

export interface GetBlobParams {
  readonly did: string;
  readonly cid: string;
}
export interface GetBlobParamsEncoded {
  readonly did: string;
  readonly cid: string;
}
export const GetBlobParams: Schema.Schema<GetBlobParams, GetBlobParamsEncoded, never> = Schema.Struct({
  did: Schema.String,
  cid: Schema.String,
});

export interface GetBlobResponse {

}
export interface GetBlobResponseEncoded {

}
export const GetBlobResponse: Schema.Schema<GetBlobResponse, GetBlobResponseEncoded, never> = Schema.Struct({

});

export interface GetBlocksParams {
  readonly limit?: number;
  readonly cursor?: string;
}
export interface GetBlocksParamsEncoded {
  readonly limit?: number;
  readonly cursor?: string;
}
export const GetBlocksParams: Schema.Schema<GetBlocksParams, GetBlocksParamsEncoded, never> = Schema.Struct({
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
});

export interface GetBlocksResponse {
  readonly data: Inline365;
}
export interface GetBlocksResponseEncoded {
  readonly data: Inline365Encoded;
}
export const GetBlocksResponse: Schema.Schema<GetBlocksResponse, GetBlocksResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline365),
});

export interface GetBookmarksParams {
  readonly limit?: number;
  readonly cursor?: string;
}
export interface GetBookmarksParamsEncoded {
  readonly limit?: number;
  readonly cursor?: string;
}
export const GetBookmarksParams: Schema.Schema<GetBookmarksParams, GetBookmarksParamsEncoded, never> = Schema.Struct({
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
});

export interface GetBookmarksResponse {
  readonly data: Inline265;
}
export interface GetBookmarksResponseEncoded {
  readonly data: Inline265Encoded;
}
export const GetBookmarksResponse: Schema.Schema<GetBookmarksResponse, GetBookmarksResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline265),
});

export interface GetCheckoutParams {
  readonly did: string;
}
export interface GetCheckoutParamsEncoded {
  readonly did: string;
}
export const GetCheckoutParams: Schema.Schema<GetCheckoutParams, GetCheckoutParamsEncoded, never> = Schema.Struct({
  did: Schema.String,
});

export interface GetCheckoutResponse {

}
export interface GetCheckoutResponseEncoded {

}
export const GetCheckoutResponse: Schema.Schema<GetCheckoutResponse, GetCheckoutResponseEncoded, never> = Schema.Struct({

});

export interface GetConfigParams {

}
export interface GetConfigParamsEncoded {

}
export const GetConfigParams: Schema.Schema<GetConfigParams, GetConfigParamsEncoded, never> = Schema.Struct({

});

export interface GetConfigResponse {
  readonly data: AppBskyAgeassuranceDefsConfig;
}
export interface GetConfigResponseEncoded {
  readonly data: AppBskyAgeassuranceDefsConfigEncoded;
}
export const GetConfigResponse: Schema.Schema<GetConfigResponse, GetConfigResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => AppBskyAgeassuranceDefsConfig),
});

export interface GetDraftsParams {
  readonly limit?: number;
  readonly cursor?: string;
}
export interface GetDraftsParamsEncoded {
  readonly limit?: number;
  readonly cursor?: string;
}
export const GetDraftsParams: Schema.Schema<GetDraftsParams, GetDraftsParamsEncoded, never> = Schema.Struct({
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
});

export interface GetDraftsResponse {
  readonly data: Inline297;
}
export interface GetDraftsResponseEncoded {
  readonly data: Inline297Encoded;
}
export const GetDraftsResponse: Schema.Schema<GetDraftsResponse, GetDraftsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline297),
});

export interface GetEmbedExternalViewParams {
  readonly url: string;
  readonly uris: ReadonlyArray<string>;
}
export interface GetEmbedExternalViewParamsEncoded {
  readonly url: string;
  readonly uris: ReadonlyArray<string>;
}
export const GetEmbedExternalViewParams: Schema.Schema<GetEmbedExternalViewParams, GetEmbedExternalViewParamsEncoded, never> = Schema.Struct({
  url: Schema.String,
  uris: Schema.Array(Schema.String),
});

export interface GetEmbedExternalViewResponse {
  readonly data: Inline302;
}
export interface GetEmbedExternalViewResponseEncoded {
  readonly data: Inline302Encoded;
}
export const GetEmbedExternalViewResponse: Schema.Schema<GetEmbedExternalViewResponse, GetEmbedExternalViewResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline302),
});

export interface GetFeedGeneratorParams {
  readonly feed: string;
}
export interface GetFeedGeneratorParamsEncoded {
  readonly feed: string;
}
export const GetFeedGeneratorParams: Schema.Schema<GetFeedGeneratorParams, GetFeedGeneratorParamsEncoded, never> = Schema.Struct({
  feed: Schema.String,
});

export interface GetFeedGeneratorResponse {
  readonly data: Inline320;
}
export interface GetFeedGeneratorResponseEncoded {
  readonly data: Inline320Encoded;
}
export const GetFeedGeneratorResponse: Schema.Schema<GetFeedGeneratorResponse, GetFeedGeneratorResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline320),
});

export interface GetFeedGeneratorsParams {
  readonly feeds: ReadonlyArray<string>;
}
export interface GetFeedGeneratorsParamsEncoded {
  readonly feeds: ReadonlyArray<string>;
}
export const GetFeedGeneratorsParams: Schema.Schema<GetFeedGeneratorsParams, GetFeedGeneratorsParamsEncoded, never> = Schema.Struct({
  feeds: Schema.Array(Schema.String),
});

export interface GetFeedGeneratorsResponse {
  readonly data: Inline323;
}
export interface GetFeedGeneratorsResponseEncoded {
  readonly data: Inline323Encoded;
}
export const GetFeedGeneratorsResponse: Schema.Schema<GetFeedGeneratorsResponse, GetFeedGeneratorsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline323),
});

export interface GetFeedParams {
  readonly feed: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export interface GetFeedParamsEncoded {
  readonly feed: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export const GetFeedParams: Schema.Schema<GetFeedParams, GetFeedParamsEncoded, never> = Schema.Struct({
  feed: Schema.String,
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
});

export interface GetFeedResponse {
  readonly data: Inline317;
}
export interface GetFeedResponseEncoded {
  readonly data: Inline317Encoded;
}
export const GetFeedResponse: Schema.Schema<GetFeedResponse, GetFeedResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline317),
});

export interface GetFeedSkeletonParams {
  readonly feed: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export interface GetFeedSkeletonParamsEncoded {
  readonly feed: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export const GetFeedSkeletonParams: Schema.Schema<GetFeedSkeletonParams, GetFeedSkeletonParamsEncoded, never> = Schema.Struct({
  feed: Schema.String,
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
});

export interface GetFeedSkeletonResponse {
  readonly data: Inline326;
}
export interface GetFeedSkeletonResponseEncoded {
  readonly data: Inline326Encoded;
}
export const GetFeedSkeletonResponse: Schema.Schema<GetFeedSkeletonResponse, GetFeedSkeletonResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline326),
});

export interface GetFollowersParams {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
  readonly sort?: string;
}
export interface GetFollowersParamsEncoded {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
  readonly sort?: string;
}
export const GetFollowersParams: Schema.Schema<GetFollowersParams, GetFollowersParamsEncoded, never> = Schema.Struct({
  actor: Schema.String,
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
  sort: Schema.optional(Schema.String),
});

export interface GetFollowersResponse {
  readonly data: Inline368;
}
export interface GetFollowersResponseEncoded {
  readonly data: Inline368Encoded;
}
export const GetFollowersResponse: Schema.Schema<GetFollowersResponse, GetFollowersResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline368),
});

export interface GetFollowsParams {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
  readonly sort?: string;
}
export interface GetFollowsParamsEncoded {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
  readonly sort?: string;
}
export const GetFollowsParams: Schema.Schema<GetFollowsParams, GetFollowsParamsEncoded, never> = Schema.Struct({
  actor: Schema.String,
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
  sort: Schema.optional(Schema.String),
});

export interface GetFollowsResponse {
  readonly data: Inline371;
}
export interface GetFollowsResponseEncoded {
  readonly data: Inline371Encoded;
}
export const GetFollowsResponse: Schema.Schema<GetFollowsResponse, GetFollowsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline371),
});

export interface GetHeadParams {
  readonly did: string;
}
export interface GetHeadParamsEncoded {
  readonly did: string;
}
export const GetHeadParams: Schema.Schema<GetHeadParams, GetHeadParamsEncoded, never> = Schema.Struct({
  did: Schema.String,
});

export interface GetHeadResponse {
  readonly data: Inline704;
}
export interface GetHeadResponseEncoded {
  readonly data: Inline704Encoded;
}
export const GetHeadResponse: Schema.Schema<GetHeadResponse, GetHeadResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline704),
});

export interface GetHostStatusParams {
  readonly hostname: string;
}
export interface GetHostStatusParamsEncoded {
  readonly hostname: string;
}
export const GetHostStatusParams: Schema.Schema<GetHostStatusParams, GetHostStatusParamsEncoded, never> = Schema.Struct({
  hostname: Schema.String,
});

export interface GetHostStatusResponse {
  readonly data: Inline707;
}
export interface GetHostStatusResponseEncoded {
  readonly data: Inline707Encoded;
}
export const GetHostStatusResponse: Schema.Schema<GetHostStatusResponse, GetHostStatusResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline707),
});

export interface GetInviteCodesParams {
  readonly sort?: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export interface GetInviteCodesParamsEncoded {
  readonly sort?: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export const GetInviteCodesParams: Schema.Schema<GetInviteCodesParams, GetInviteCodesParamsEncoded, never> = Schema.Struct({
  sort: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
});

export interface GetInviteCodesResponse {
  readonly data: Inline556;
}
export interface GetInviteCodesResponseEncoded {
  readonly data: Inline556Encoded;
}
export const GetInviteCodesResponse: Schema.Schema<GetInviteCodesResponse, GetInviteCodesResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline556),
});

export interface GetJobStatusParams {
  readonly jobId: string;
}
export interface GetJobStatusParamsEncoded {
  readonly jobId: string;
}
export const GetJobStatusParams: Schema.Schema<GetJobStatusParams, GetJobStatusParamsEncoded, never> = Schema.Struct({
  jobId: Schema.String,
});

export interface GetJobStatusResponse {
  readonly data: Inline534;
}
export interface GetJobStatusResponseEncoded {
  readonly data: Inline534Encoded;
}
export const GetJobStatusResponse: Schema.Schema<GetJobStatusResponse, GetJobStatusResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline534),
});

export interface GetKnownFollowersParams {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export interface GetKnownFollowersParamsEncoded {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export const GetKnownFollowersParams: Schema.Schema<GetKnownFollowersParams, GetKnownFollowersParamsEncoded, never> = Schema.Struct({
  actor: Schema.String,
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
});

export interface GetKnownFollowersResponse {
  readonly data: Inline374;
}
export interface GetKnownFollowersResponseEncoded {
  readonly data: Inline374Encoded;
}
export const GetKnownFollowersResponse: Schema.Schema<GetKnownFollowersResponse, GetKnownFollowersResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline374),
});

export interface GetLatestCommitParams {
  readonly did: string;
}
export interface GetLatestCommitParamsEncoded {
  readonly did: string;
}
export const GetLatestCommitParams: Schema.Schema<GetLatestCommitParams, GetLatestCommitParamsEncoded, never> = Schema.Struct({
  did: Schema.String,
});

export interface GetLatestCommitResponse {
  readonly data: Inline710;
}
export interface GetLatestCommitResponseEncoded {
  readonly data: Inline710Encoded;
}
export const GetLatestCommitResponse: Schema.Schema<GetLatestCommitResponse, GetLatestCommitResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline710),
});

export interface GetLikesParams {
  readonly uri: string;
  readonly cid?: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export interface GetLikesParamsEncoded {
  readonly uri: string;
  readonly cid?: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export const GetLikesParams: Schema.Schema<GetLikesParams, GetLikesParamsEncoded, never> = Schema.Struct({
  uri: Schema.String,
  cid: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
});

export interface GetLikesResponse {
  readonly data: Inline329;
}
export interface GetLikesResponseEncoded {
  readonly data: Inline329Encoded;
}
export const GetLikesResponse: Schema.Schema<GetLikesResponse, GetLikesResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline329),
});

export interface GetListBlocksParams {
  readonly limit?: number;
  readonly cursor?: string;
}
export interface GetListBlocksParamsEncoded {
  readonly limit?: number;
  readonly cursor?: string;
}
export const GetListBlocksParams: Schema.Schema<GetListBlocksParams, GetListBlocksParamsEncoded, never> = Schema.Struct({
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
});

export interface GetListBlocksResponse {
  readonly data: Inline380;
}
export interface GetListBlocksResponseEncoded {
  readonly data: Inline380Encoded;
}
export const GetListBlocksResponse: Schema.Schema<GetListBlocksResponse, GetListBlocksResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline380),
});

export interface GetListFeedParams {
  readonly list: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export interface GetListFeedParamsEncoded {
  readonly list: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export const GetListFeedParams: Schema.Schema<GetListFeedParams, GetListFeedParamsEncoded, never> = Schema.Struct({
  list: Schema.String,
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
});

export interface GetListFeedResponse {
  readonly data: Inline332;
}
export interface GetListFeedResponseEncoded {
  readonly data: Inline332Encoded;
}
export const GetListFeedResponse: Schema.Schema<GetListFeedResponse, GetListFeedResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline332),
});

export interface GetListMutesParams {
  readonly limit?: number;
  readonly cursor?: string;
}
export interface GetListMutesParamsEncoded {
  readonly limit?: number;
  readonly cursor?: string;
}
export const GetListMutesParams: Schema.Schema<GetListMutesParams, GetListMutesParamsEncoded, never> = Schema.Struct({
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
});

export interface GetListMutesResponse {
  readonly data: Inline383;
}
export interface GetListMutesResponseEncoded {
  readonly data: Inline383Encoded;
}
export const GetListMutesResponse: Schema.Schema<GetListMutesResponse, GetListMutesResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline383),
});

export interface GetListParams {
  readonly list: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export interface GetListParamsEncoded {
  readonly list: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export const GetListParams: Schema.Schema<GetListParams, GetListParamsEncoded, never> = Schema.Struct({
  list: Schema.String,
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
});

export interface GetListResponse {
  readonly data: Inline377;
}
export interface GetListResponseEncoded {
  readonly data: Inline377Encoded;
}
export const GetListResponse: Schema.Schema<GetListResponse, GetListResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline377),
});

export interface GetListsParams {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
  readonly purposes?: ReadonlyArray<string>;
}
export interface GetListsParamsEncoded {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
  readonly purposes?: ReadonlyArray<string>;
}
export const GetListsParams: Schema.Schema<GetListsParams, GetListsParamsEncoded, never> = Schema.Struct({
  actor: Schema.String,
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
  purposes: Schema.optional(Schema.Array(Schema.String)),
});

export interface GetListsResponse {
  readonly data: Inline386;
}
export interface GetListsResponseEncoded {
  readonly data: Inline386Encoded;
}
export const GetListsResponse: Schema.Schema<GetListsResponse, GetListsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline386),
});

export interface GetListsWithMembershipParams {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
  readonly purposes?: ReadonlyArray<string>;
}
export interface GetListsWithMembershipParamsEncoded {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
  readonly purposes?: ReadonlyArray<string>;
}
export const GetListsWithMembershipParams: Schema.Schema<GetListsWithMembershipParams, GetListsWithMembershipParamsEncoded, never> = Schema.Struct({
  actor: Schema.String,
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
  purposes: Schema.optional(Schema.Array(Schema.String)),
});

export interface GetListsWithMembershipResponse {
  readonly data: Inline389;
}
export interface GetListsWithMembershipResponseEncoded {
  readonly data: Inline389Encoded;
}
export const GetListsWithMembershipResponse: Schema.Schema<GetListsWithMembershipResponse, GetListsWithMembershipResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline389),
});

export interface GetMatchesParams {
  readonly limit?: number;
  readonly cursor?: string;
}
export interface GetMatchesParamsEncoded {
  readonly limit?: number;
  readonly cursor?: string;
}
export const GetMatchesParams: Schema.Schema<GetMatchesParams, GetMatchesParamsEncoded, never> = Schema.Struct({
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
});

export interface GetMatchesResponse {
  readonly data: Inline271;
}
export interface GetMatchesResponseEncoded {
  readonly data: Inline271Encoded;
}
export const GetMatchesResponse: Schema.Schema<GetMatchesResponse, GetMatchesResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline271),
});

export interface GetMutesParams {
  readonly limit?: number;
  readonly cursor?: string;
}
export interface GetMutesParamsEncoded {
  readonly limit?: number;
  readonly cursor?: string;
}
export const GetMutesParams: Schema.Schema<GetMutesParams, GetMutesParamsEncoded, never> = Schema.Struct({
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
});

export interface GetMutesResponse {
  readonly data: Inline392;
}
export interface GetMutesResponseEncoded {
  readonly data: Inline392Encoded;
}
export const GetMutesResponse: Schema.Schema<GetMutesResponse, GetMutesResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline392),
});

export interface GetOnboardingSuggestedStarterPacksParams {
  readonly limit?: number;
}
export interface GetOnboardingSuggestedStarterPacksParamsEncoded {
  readonly limit?: number;
}
export const GetOnboardingSuggestedStarterPacksParams: Schema.Schema<GetOnboardingSuggestedStarterPacksParams, GetOnboardingSuggestedStarterPacksParamsEncoded, never> = Schema.Struct({
  limit: Schema.optional(Schema.Number),
});

export interface GetOnboardingSuggestedStarterPacksResponse {
  readonly data: Inline454;
}
export interface GetOnboardingSuggestedStarterPacksResponseEncoded {
  readonly data: Inline454Encoded;
}
export const GetOnboardingSuggestedStarterPacksResponse: Schema.Schema<GetOnboardingSuggestedStarterPacksResponse, GetOnboardingSuggestedStarterPacksResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline454),
});

export interface GetOnboardingSuggestedStarterPacksSkeletonParams {
  readonly viewer?: string;
  readonly limit?: number;
}
export interface GetOnboardingSuggestedStarterPacksSkeletonParamsEncoded {
  readonly viewer?: string;
  readonly limit?: number;
}
export const GetOnboardingSuggestedStarterPacksSkeletonParams: Schema.Schema<GetOnboardingSuggestedStarterPacksSkeletonParams, GetOnboardingSuggestedStarterPacksSkeletonParamsEncoded, never> = Schema.Struct({
  viewer: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
});

export interface GetOnboardingSuggestedStarterPacksSkeletonResponse {
  readonly data: Inline457;
}
export interface GetOnboardingSuggestedStarterPacksSkeletonResponseEncoded {
  readonly data: Inline457Encoded;
}
export const GetOnboardingSuggestedStarterPacksSkeletonResponse: Schema.Schema<GetOnboardingSuggestedStarterPacksSkeletonResponse, GetOnboardingSuggestedStarterPacksSkeletonResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline457),
});

export interface GetOnboardingSuggestedUsersSkeletonParams {
  readonly viewer?: string;
  readonly category?: string;
  readonly limit?: number;
}
export interface GetOnboardingSuggestedUsersSkeletonParamsEncoded {
  readonly viewer?: string;
  readonly category?: string;
  readonly limit?: number;
}
export const GetOnboardingSuggestedUsersSkeletonParams: Schema.Schema<GetOnboardingSuggestedUsersSkeletonParams, GetOnboardingSuggestedUsersSkeletonParamsEncoded, never> = Schema.Struct({
  viewer: Schema.optional(Schema.String),
  category: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
});

export interface GetOnboardingSuggestedUsersSkeletonResponse {
  readonly data: Inline460;
}
export interface GetOnboardingSuggestedUsersSkeletonResponseEncoded {
  readonly data: Inline460Encoded;
}
export const GetOnboardingSuggestedUsersSkeletonResponse: Schema.Schema<GetOnboardingSuggestedUsersSkeletonResponse, GetOnboardingSuggestedUsersSkeletonResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline460),
});

export interface GetPopularFeedGeneratorsParams {
  readonly limit?: number;
  readonly cursor?: string;
  readonly query?: string;
}
export interface GetPopularFeedGeneratorsParamsEncoded {
  readonly limit?: number;
  readonly cursor?: string;
  readonly query?: string;
}
export const GetPopularFeedGeneratorsParams: Schema.Schema<GetPopularFeedGeneratorsParams, GetPopularFeedGeneratorsParamsEncoded, never> = Schema.Struct({
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
  query: Schema.optional(Schema.String),
});

export interface GetPopularFeedGeneratorsResponse {
  readonly data: Inline463;
}
export interface GetPopularFeedGeneratorsResponseEncoded {
  readonly data: Inline463Encoded;
}
export const GetPopularFeedGeneratorsResponse: Schema.Schema<GetPopularFeedGeneratorsResponse, GetPopularFeedGeneratorsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline463),
});

export interface GetPostsParams {
  readonly uris: ReadonlyArray<string>;
}
export interface GetPostsParamsEncoded {
  readonly uris: ReadonlyArray<string>;
}
export const GetPostsParams: Schema.Schema<GetPostsParams, GetPostsParamsEncoded, never> = Schema.Struct({
  uris: Schema.Array(Schema.String),
});

export interface GetPostsResponse {
  readonly data: Inline335;
}
export interface GetPostsResponseEncoded {
  readonly data: Inline335Encoded;
}
export const GetPostsResponse: Schema.Schema<GetPostsResponse, GetPostsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline335),
});

export interface GetPostThreadOtherV2Params {
  readonly anchor: string;
}
export interface GetPostThreadOtherV2ParamsEncoded {
  readonly anchor: string;
}
export const GetPostThreadOtherV2Params: Schema.Schema<GetPostThreadOtherV2Params, GetPostThreadOtherV2ParamsEncoded, never> = Schema.Struct({
  anchor: Schema.String,
});

export interface GetPostThreadOtherV2Response {
  readonly data: Inline466;
}
export interface GetPostThreadOtherV2ResponseEncoded {
  readonly data: Inline466Encoded;
}
export const GetPostThreadOtherV2Response: Schema.Schema<GetPostThreadOtherV2Response, GetPostThreadOtherV2ResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline466),
});

export interface GetPostThreadParams {
  readonly uri: string;
  readonly depth?: number;
  readonly parentHeight?: number;
}
export interface GetPostThreadParamsEncoded {
  readonly uri: string;
  readonly depth?: number;
  readonly parentHeight?: number;
}
export const GetPostThreadParams: Schema.Schema<GetPostThreadParams, GetPostThreadParamsEncoded, never> = Schema.Struct({
  uri: Schema.String,
  depth: Schema.optional(Schema.Number),
  parentHeight: Schema.optional(Schema.Number),
});

export interface GetPostThreadResponse {
  readonly data: Inline338;
}
export interface GetPostThreadResponseEncoded {
  readonly data: Inline338Encoded;
}
export const GetPostThreadResponse: Schema.Schema<GetPostThreadResponse, GetPostThreadResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline338),
});

export interface GetPostThreadV2Params {
  readonly anchor: string;
  readonly above?: boolean;
  readonly below?: number;
  readonly branchingFactor?: number;
  readonly sort?: string;
}
export interface GetPostThreadV2ParamsEncoded {
  readonly anchor: string;
  readonly above?: boolean;
  readonly below?: number;
  readonly branchingFactor?: number;
  readonly sort?: string;
}
export const GetPostThreadV2Params: Schema.Schema<GetPostThreadV2Params, GetPostThreadV2ParamsEncoded, never> = Schema.Struct({
  anchor: Schema.String,
  above: Schema.optional(Schema.Boolean),
  below: Schema.optional(Schema.Number),
  branchingFactor: Schema.optional(Schema.Number),
  sort: Schema.optional(Schema.String),
});

export interface GetPostThreadV2Response {
  readonly data: Inline469;
}
export interface GetPostThreadV2ResponseEncoded {
  readonly data: Inline469Encoded;
}
export const GetPostThreadV2Response: Schema.Schema<GetPostThreadV2Response, GetPostThreadV2ResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline469),
});

export interface GetPreferencesParams {

}
export interface GetPreferencesParamsEncoded {

}
export const GetPreferencesParams: Schema.Schema<GetPreferencesParams, GetPreferencesParamsEncoded, never> = Schema.Struct({

});

export interface GetPreferencesResponse {
  readonly data: Inline235;
}
export interface GetPreferencesResponseEncoded {
  readonly data: Inline235Encoded;
}
export const GetPreferencesResponse: Schema.Schema<GetPreferencesResponse, GetPreferencesResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline235),
});

export interface GetProfileParams {
  readonly actor: string;
}
export interface GetProfileParamsEncoded {
  readonly actor: string;
}
export const GetProfileParams: Schema.Schema<GetProfileParams, GetProfileParamsEncoded, never> = Schema.Struct({
  actor: Schema.String,
});

export interface GetProfileResponse {
  readonly data: AppBskyActorDefsProfileViewDetailed;
}
export interface GetProfileResponseEncoded {
  readonly data: AppBskyActorDefsProfileViewDetailedEncoded;
}
export const GetProfileResponse: Schema.Schema<GetProfileResponse, GetProfileResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => AppBskyActorDefsProfileViewDetailed),
});

export interface GetProfilesParams {
  readonly actors: ReadonlyArray<string>;
}
export interface GetProfilesParamsEncoded {
  readonly actors: ReadonlyArray<string>;
}
export const GetProfilesParams: Schema.Schema<GetProfilesParams, GetProfilesParamsEncoded, never> = Schema.Struct({
  actors: Schema.Array(Schema.String),
});

export interface GetProfilesResponse {
  readonly data: Inline240;
}
export interface GetProfilesResponseEncoded {
  readonly data: Inline240Encoded;
}
export const GetProfilesResponse: Schema.Schema<GetProfilesResponse, GetProfilesResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline240),
});

export interface GetQuotesParams {
  readonly uri: string;
  readonly cid?: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export interface GetQuotesParamsEncoded {
  readonly uri: string;
  readonly cid?: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export const GetQuotesParams: Schema.Schema<GetQuotesParams, GetQuotesParamsEncoded, never> = Schema.Struct({
  uri: Schema.String,
  cid: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
});

export interface GetQuotesResponse {
  readonly data: Inline341;
}
export interface GetQuotesResponseEncoded {
  readonly data: Inline341Encoded;
}
export const GetQuotesResponse: Schema.Schema<GetQuotesResponse, GetQuotesResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline341),
});

export interface GetRecommendedDidCredentialsParams {

}
export interface GetRecommendedDidCredentialsParamsEncoded {

}
export const GetRecommendedDidCredentialsParams: Schema.Schema<GetRecommendedDidCredentialsParams, GetRecommendedDidCredentialsParamsEncoded, never> = Schema.Struct({

});

export interface GetRecommendedDidCredentialsResponse {
  readonly data: Inline579;
}
export interface GetRecommendedDidCredentialsResponseEncoded {
  readonly data: Inline579Encoded;
}
export const GetRecommendedDidCredentialsResponse: Schema.Schema<GetRecommendedDidCredentialsResponse, GetRecommendedDidCredentialsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline579),
});

export interface GetRecordParams {
  readonly repo: string;
  readonly collection: string;
  readonly rkey: string;
  readonly cid?: string;
}
export interface GetRecordParamsEncoded {
  readonly repo: string;
  readonly collection: string;
  readonly rkey: string;
  readonly cid?: string;
}
export const GetRecordParams: Schema.Schema<GetRecordParams, GetRecordParamsEncoded, never> = Schema.Struct({
  repo: Schema.String,
  collection: Schema.String,
  rkey: Schema.String,
  cid: Schema.optional(Schema.String),
});

export interface GetRecordResponse {
  readonly data: Inline622;
}
export interface GetRecordResponseEncoded {
  readonly data: Inline622Encoded;
}
export const GetRecordResponse: Schema.Schema<GetRecordResponse, GetRecordResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline622),
});

export interface GetRelationshipsParams {
  readonly actor: string;
  readonly others?: ReadonlyArray<string>;
}
export interface GetRelationshipsParamsEncoded {
  readonly actor: string;
  readonly others?: ReadonlyArray<string>;
}
export const GetRelationshipsParams: Schema.Schema<GetRelationshipsParams, GetRelationshipsParamsEncoded, never> = Schema.Struct({
  actor: Schema.String,
  others: Schema.optional(Schema.Array(Schema.String)),
});

export interface GetRelationshipsResponse {
  readonly data: Inline395;
}
export interface GetRelationshipsResponseEncoded {
  readonly data: Inline395Encoded;
}
export const GetRelationshipsResponse: Schema.Schema<GetRelationshipsResponse, GetRelationshipsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline395),
});

export interface GetRepoParams {
  readonly did: string;
  readonly since?: string;
}
export interface GetRepoParamsEncoded {
  readonly did: string;
  readonly since?: string;
}
export const GetRepoParams: Schema.Schema<GetRepoParams, GetRepoParamsEncoded, never> = Schema.Struct({
  did: Schema.String,
  since: Schema.optional(Schema.String),
});

export interface GetRepoResponse {

}
export interface GetRepoResponseEncoded {

}
export const GetRepoResponse: Schema.Schema<GetRepoResponse, GetRepoResponseEncoded, never> = Schema.Struct({

});

export interface GetRepoStatusParams {
  readonly did: string;
}
export interface GetRepoStatusParamsEncoded {
  readonly did: string;
}
export const GetRepoStatusParams: Schema.Schema<GetRepoStatusParams, GetRepoStatusParamsEncoded, never> = Schema.Struct({
  did: Schema.String,
});

export interface GetRepoStatusResponse {
  readonly data: Inline715;
}
export interface GetRepoStatusResponseEncoded {
  readonly data: Inline715Encoded;
}
export const GetRepoStatusResponse: Schema.Schema<GetRepoStatusResponse, GetRepoStatusResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline715),
});

export interface GetRepostedByParams {
  readonly uri: string;
  readonly cid?: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export interface GetRepostedByParamsEncoded {
  readonly uri: string;
  readonly cid?: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export const GetRepostedByParams: Schema.Schema<GetRepostedByParams, GetRepostedByParamsEncoded, never> = Schema.Struct({
  uri: Schema.String,
  cid: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
});

export interface GetRepostedByResponse {
  readonly data: Inline344;
}
export interface GetRepostedByResponseEncoded {
  readonly data: Inline344Encoded;
}
export const GetRepostedByResponse: Schema.Schema<GetRepostedByResponse, GetRepostedByResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline344),
});

export interface GetServiceAuthParams {
  readonly aud: string;
  readonly exp?: number;
  readonly lxm?: string;
}
export interface GetServiceAuthParamsEncoded {
  readonly aud: string;
  readonly exp?: number;
  readonly lxm?: string;
}
export const GetServiceAuthParams: Schema.Schema<GetServiceAuthParams, GetServiceAuthParamsEncoded, never> = Schema.Struct({
  aud: Schema.String,
  exp: Schema.optional(Schema.Number),
  lxm: Schema.optional(Schema.String),
});

export interface GetServiceAuthResponse {
  readonly data: Inline670;
}
export interface GetServiceAuthResponseEncoded {
  readonly data: Inline670Encoded;
}
export const GetServiceAuthResponse: Schema.Schema<GetServiceAuthResponse, GetServiceAuthResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline670),
});

export interface GetServicesParams {
  readonly dids: ReadonlyArray<string>;
  readonly detailed?: boolean;
}
export interface GetServicesParamsEncoded {
  readonly dids: ReadonlyArray<string>;
  readonly detailed?: boolean;
}
export const GetServicesParams: Schema.Schema<GetServicesParams, GetServicesParamsEncoded, never> = Schema.Struct({
  dids: Schema.Array(Schema.String),
  detailed: Schema.optional(Schema.Boolean),
});

export interface GetServicesResponse {
  readonly data: Inline428;
}
export interface GetServicesResponseEncoded {
  readonly data: Inline428Encoded;
}
export const GetServicesResponse: Schema.Schema<GetServicesResponse, GetServicesResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline428),
});

export interface GetSessionParams {

}
export interface GetSessionParamsEncoded {

}
export const GetSessionParams: Schema.Schema<GetSessionParams, GetSessionParamsEncoded, never> = Schema.Struct({

});

export interface GetSessionResponse {
  readonly data: Inline673;
}
export interface GetSessionResponseEncoded {
  readonly data: Inline673Encoded;
}
export const GetSessionResponse: Schema.Schema<GetSessionResponse, GetSessionResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline673),
});

export interface GetStarterPackParams {
  readonly starterPack: string;
}
export interface GetStarterPackParamsEncoded {
  readonly starterPack: string;
}
export const GetStarterPackParams: Schema.Schema<GetStarterPackParams, GetStarterPackParamsEncoded, never> = Schema.Struct({
  starterPack: Schema.String,
});

export interface GetStarterPackResponse {
  readonly data: Inline398;
}
export interface GetStarterPackResponseEncoded {
  readonly data: Inline398Encoded;
}
export const GetStarterPackResponse: Schema.Schema<GetStarterPackResponse, GetStarterPackResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline398),
});

export interface GetStarterPacksParams {
  readonly uris: ReadonlyArray<string>;
}
export interface GetStarterPacksParamsEncoded {
  readonly uris: ReadonlyArray<string>;
}
export const GetStarterPacksParams: Schema.Schema<GetStarterPacksParams, GetStarterPacksParamsEncoded, never> = Schema.Struct({
  uris: Schema.Array(Schema.String),
});

export interface GetStarterPacksResponse {
  readonly data: Inline401;
}
export interface GetStarterPacksResponseEncoded {
  readonly data: Inline401Encoded;
}
export const GetStarterPacksResponse: Schema.Schema<GetStarterPacksResponse, GetStarterPacksResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline401),
});

export interface GetStarterPacksWithMembershipParams {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export interface GetStarterPacksWithMembershipParamsEncoded {
  readonly actor: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export const GetStarterPacksWithMembershipParams: Schema.Schema<GetStarterPacksWithMembershipParams, GetStarterPacksWithMembershipParamsEncoded, never> = Schema.Struct({
  actor: Schema.String,
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
});

export interface GetStarterPacksWithMembershipResponse {
  readonly data: Inline404;
}
export interface GetStarterPacksWithMembershipResponseEncoded {
  readonly data: Inline404Encoded;
}
export const GetStarterPacksWithMembershipResponse: Schema.Schema<GetStarterPacksWithMembershipResponse, GetStarterPacksWithMembershipResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline404),
});

export interface GetStateParams {
  readonly countryCode: string;
  readonly regionCode?: string;
}
export interface GetStateParamsEncoded {
  readonly countryCode: string;
  readonly regionCode?: string;
}
export const GetStateParams: Schema.Schema<GetStateParams, GetStateParamsEncoded, never> = Schema.Struct({
  countryCode: Schema.String,
  regionCode: Schema.optional(Schema.String),
});

export interface GetStateResponse {
  readonly data: Inline258;
}
export interface GetStateResponseEncoded {
  readonly data: Inline258Encoded;
}
export const GetStateResponse: Schema.Schema<GetStateResponse, GetStateResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline258),
});

export interface GetSubjectStatusParams {
  readonly did?: string;
  readonly uri?: string;
  readonly blob?: string;
}
export interface GetSubjectStatusParamsEncoded {
  readonly did?: string;
  readonly uri?: string;
  readonly blob?: string;
}
export const GetSubjectStatusParams: Schema.Schema<GetSubjectStatusParams, GetSubjectStatusParamsEncoded, never> = Schema.Struct({
  did: Schema.optional(Schema.String),
  uri: Schema.optional(Schema.String),
  blob: Schema.optional(Schema.String),
});

export interface GetSubjectStatusResponse {
  readonly data: Inline559;
}
export interface GetSubjectStatusResponseEncoded {
  readonly data: Inline559Encoded;
}
export const GetSubjectStatusResponse: Schema.Schema<GetSubjectStatusResponse, GetSubjectStatusResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline559),
});

export interface GetSuggestedFeedsParams {
  readonly limit?: number;
  readonly cursor?: string;
}
export interface GetSuggestedFeedsParamsEncoded {
  readonly limit?: number;
  readonly cursor?: string;
}
export const GetSuggestedFeedsParams: Schema.Schema<GetSuggestedFeedsParams, GetSuggestedFeedsParamsEncoded, never> = Schema.Struct({
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
});

export interface GetSuggestedFeedsResponse {
  readonly data: Inline347;
}
export interface GetSuggestedFeedsResponseEncoded {
  readonly data: Inline347Encoded;
}
export const GetSuggestedFeedsResponse: Schema.Schema<GetSuggestedFeedsResponse, GetSuggestedFeedsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline347),
});

export interface GetSuggestedFeedsSkeletonParams {
  readonly viewer?: string;
  readonly limit?: number;
}
export interface GetSuggestedFeedsSkeletonParamsEncoded {
  readonly viewer?: string;
  readonly limit?: number;
}
export const GetSuggestedFeedsSkeletonParams: Schema.Schema<GetSuggestedFeedsSkeletonParams, GetSuggestedFeedsSkeletonParamsEncoded, never> = Schema.Struct({
  viewer: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
});

export interface GetSuggestedFeedsSkeletonResponse {
  readonly data: Inline472;
}
export interface GetSuggestedFeedsSkeletonResponseEncoded {
  readonly data: Inline472Encoded;
}
export const GetSuggestedFeedsSkeletonResponse: Schema.Schema<GetSuggestedFeedsSkeletonResponse, GetSuggestedFeedsSkeletonResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline472),
});

export interface GetSuggestedFollowsByActorParams {
  readonly actor: string;
}
export interface GetSuggestedFollowsByActorParamsEncoded {
  readonly actor: string;
}
export const GetSuggestedFollowsByActorParams: Schema.Schema<GetSuggestedFollowsByActorParams, GetSuggestedFollowsByActorParamsEncoded, never> = Schema.Struct({
  actor: Schema.String,
});

export interface GetSuggestedFollowsByActorResponse {
  readonly data: Inline407;
}
export interface GetSuggestedFollowsByActorResponseEncoded {
  readonly data: Inline407Encoded;
}
export const GetSuggestedFollowsByActorResponse: Schema.Schema<GetSuggestedFollowsByActorResponse, GetSuggestedFollowsByActorResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline407),
});

export interface GetSuggestedOnboardingUsersParams {
  readonly category?: string;
  readonly limit?: number;
}
export interface GetSuggestedOnboardingUsersParamsEncoded {
  readonly category?: string;
  readonly limit?: number;
}
export const GetSuggestedOnboardingUsersParams: Schema.Schema<GetSuggestedOnboardingUsersParams, GetSuggestedOnboardingUsersParamsEncoded, never> = Schema.Struct({
  category: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
});

export interface GetSuggestedOnboardingUsersResponse {
  readonly data: Inline475;
}
export interface GetSuggestedOnboardingUsersResponseEncoded {
  readonly data: Inline475Encoded;
}
export const GetSuggestedOnboardingUsersResponse: Schema.Schema<GetSuggestedOnboardingUsersResponse, GetSuggestedOnboardingUsersResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline475),
});

export interface GetSuggestedStarterPacksParams {
  readonly limit?: number;
}
export interface GetSuggestedStarterPacksParamsEncoded {
  readonly limit?: number;
}
export const GetSuggestedStarterPacksParams: Schema.Schema<GetSuggestedStarterPacksParams, GetSuggestedStarterPacksParamsEncoded, never> = Schema.Struct({
  limit: Schema.optional(Schema.Number),
});

export interface GetSuggestedStarterPacksResponse {
  readonly data: Inline478;
}
export interface GetSuggestedStarterPacksResponseEncoded {
  readonly data: Inline478Encoded;
}
export const GetSuggestedStarterPacksResponse: Schema.Schema<GetSuggestedStarterPacksResponse, GetSuggestedStarterPacksResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline478),
});

export interface GetSuggestedStarterPacksSkeletonParams {
  readonly viewer?: string;
  readonly limit?: number;
}
export interface GetSuggestedStarterPacksSkeletonParamsEncoded {
  readonly viewer?: string;
  readonly limit?: number;
}
export const GetSuggestedStarterPacksSkeletonParams: Schema.Schema<GetSuggestedStarterPacksSkeletonParams, GetSuggestedStarterPacksSkeletonParamsEncoded, never> = Schema.Struct({
  viewer: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
});

export interface GetSuggestedStarterPacksSkeletonResponse {
  readonly data: Inline481;
}
export interface GetSuggestedStarterPacksSkeletonResponseEncoded {
  readonly data: Inline481Encoded;
}
export const GetSuggestedStarterPacksSkeletonResponse: Schema.Schema<GetSuggestedStarterPacksSkeletonResponse, GetSuggestedStarterPacksSkeletonResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline481),
});

export interface GetSuggestedUsersForDiscoverParams {
  readonly limit?: number;
}
export interface GetSuggestedUsersForDiscoverParamsEncoded {
  readonly limit?: number;
}
export const GetSuggestedUsersForDiscoverParams: Schema.Schema<GetSuggestedUsersForDiscoverParams, GetSuggestedUsersForDiscoverParamsEncoded, never> = Schema.Struct({
  limit: Schema.optional(Schema.Number),
});

export interface GetSuggestedUsersForDiscoverResponse {
  readonly data: Inline487;
}
export interface GetSuggestedUsersForDiscoverResponseEncoded {
  readonly data: Inline487Encoded;
}
export const GetSuggestedUsersForDiscoverResponse: Schema.Schema<GetSuggestedUsersForDiscoverResponse, GetSuggestedUsersForDiscoverResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline487),
});

export interface GetSuggestedUsersForDiscoverSkeletonParams {
  readonly viewer?: string;
  readonly limit?: number;
}
export interface GetSuggestedUsersForDiscoverSkeletonParamsEncoded {
  readonly viewer?: string;
  readonly limit?: number;
}
export const GetSuggestedUsersForDiscoverSkeletonParams: Schema.Schema<GetSuggestedUsersForDiscoverSkeletonParams, GetSuggestedUsersForDiscoverSkeletonParamsEncoded, never> = Schema.Struct({
  viewer: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
});

export interface GetSuggestedUsersForDiscoverSkeletonResponse {
  readonly data: Inline490;
}
export interface GetSuggestedUsersForDiscoverSkeletonResponseEncoded {
  readonly data: Inline490Encoded;
}
export const GetSuggestedUsersForDiscoverSkeletonResponse: Schema.Schema<GetSuggestedUsersForDiscoverSkeletonResponse, GetSuggestedUsersForDiscoverSkeletonResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline490),
});

export interface GetSuggestedUsersForExploreParams {
  readonly category?: string;
  readonly limit?: number;
}
export interface GetSuggestedUsersForExploreParamsEncoded {
  readonly category?: string;
  readonly limit?: number;
}
export const GetSuggestedUsersForExploreParams: Schema.Schema<GetSuggestedUsersForExploreParams, GetSuggestedUsersForExploreParamsEncoded, never> = Schema.Struct({
  category: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
});

export interface GetSuggestedUsersForExploreResponse {
  readonly data: Inline493;
}
export interface GetSuggestedUsersForExploreResponseEncoded {
  readonly data: Inline493Encoded;
}
export const GetSuggestedUsersForExploreResponse: Schema.Schema<GetSuggestedUsersForExploreResponse, GetSuggestedUsersForExploreResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline493),
});

export interface GetSuggestedUsersForExploreSkeletonParams {
  readonly viewer?: string;
  readonly category?: string;
  readonly limit?: number;
}
export interface GetSuggestedUsersForExploreSkeletonParamsEncoded {
  readonly viewer?: string;
  readonly category?: string;
  readonly limit?: number;
}
export const GetSuggestedUsersForExploreSkeletonParams: Schema.Schema<GetSuggestedUsersForExploreSkeletonParams, GetSuggestedUsersForExploreSkeletonParamsEncoded, never> = Schema.Struct({
  viewer: Schema.optional(Schema.String),
  category: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
});

export interface GetSuggestedUsersForExploreSkeletonResponse {
  readonly data: Inline496;
}
export interface GetSuggestedUsersForExploreSkeletonResponseEncoded {
  readonly data: Inline496Encoded;
}
export const GetSuggestedUsersForExploreSkeletonResponse: Schema.Schema<GetSuggestedUsersForExploreSkeletonResponse, GetSuggestedUsersForExploreSkeletonResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline496),
});

export interface GetSuggestedUsersForSeeMoreParams {
  readonly category?: string;
  readonly limit?: number;
}
export interface GetSuggestedUsersForSeeMoreParamsEncoded {
  readonly category?: string;
  readonly limit?: number;
}
export const GetSuggestedUsersForSeeMoreParams: Schema.Schema<GetSuggestedUsersForSeeMoreParams, GetSuggestedUsersForSeeMoreParamsEncoded, never> = Schema.Struct({
  category: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
});

export interface GetSuggestedUsersForSeeMoreResponse {
  readonly data: Inline499;
}
export interface GetSuggestedUsersForSeeMoreResponseEncoded {
  readonly data: Inline499Encoded;
}
export const GetSuggestedUsersForSeeMoreResponse: Schema.Schema<GetSuggestedUsersForSeeMoreResponse, GetSuggestedUsersForSeeMoreResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline499),
});

export interface GetSuggestedUsersForSeeMoreSkeletonParams {
  readonly viewer?: string;
  readonly category?: string;
  readonly limit?: number;
}
export interface GetSuggestedUsersForSeeMoreSkeletonParamsEncoded {
  readonly viewer?: string;
  readonly category?: string;
  readonly limit?: number;
}
export const GetSuggestedUsersForSeeMoreSkeletonParams: Schema.Schema<GetSuggestedUsersForSeeMoreSkeletonParams, GetSuggestedUsersForSeeMoreSkeletonParamsEncoded, never> = Schema.Struct({
  viewer: Schema.optional(Schema.String),
  category: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
});

export interface GetSuggestedUsersForSeeMoreSkeletonResponse {
  readonly data: Inline502;
}
export interface GetSuggestedUsersForSeeMoreSkeletonResponseEncoded {
  readonly data: Inline502Encoded;
}
export const GetSuggestedUsersForSeeMoreSkeletonResponse: Schema.Schema<GetSuggestedUsersForSeeMoreSkeletonResponse, GetSuggestedUsersForSeeMoreSkeletonResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline502),
});

export interface GetSuggestedUsersParams {
  readonly category?: string;
  readonly limit?: number;
}
export interface GetSuggestedUsersParamsEncoded {
  readonly category?: string;
  readonly limit?: number;
}
export const GetSuggestedUsersParams: Schema.Schema<GetSuggestedUsersParams, GetSuggestedUsersParamsEncoded, never> = Schema.Struct({
  category: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
});

export interface GetSuggestedUsersResponse {
  readonly data: Inline484;
}
export interface GetSuggestedUsersResponseEncoded {
  readonly data: Inline484Encoded;
}
export const GetSuggestedUsersResponse: Schema.Schema<GetSuggestedUsersResponse, GetSuggestedUsersResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline484),
});

export interface GetSuggestedUsersSkeletonParams {
  readonly viewer?: string;
  readonly category?: string;
  readonly limit?: number;
}
export interface GetSuggestedUsersSkeletonParamsEncoded {
  readonly viewer?: string;
  readonly category?: string;
  readonly limit?: number;
}
export const GetSuggestedUsersSkeletonParams: Schema.Schema<GetSuggestedUsersSkeletonParams, GetSuggestedUsersSkeletonParamsEncoded, never> = Schema.Struct({
  viewer: Schema.optional(Schema.String),
  category: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
});

export interface GetSuggestedUsersSkeletonResponse {
  readonly data: Inline505;
}
export interface GetSuggestedUsersSkeletonResponseEncoded {
  readonly data: Inline505Encoded;
}
export const GetSuggestedUsersSkeletonResponse: Schema.Schema<GetSuggestedUsersSkeletonResponse, GetSuggestedUsersSkeletonResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline505),
});

export interface GetSuggestionsParams {
  readonly limit?: number;
  readonly cursor?: string;
}
export interface GetSuggestionsParamsEncoded {
  readonly limit?: number;
  readonly cursor?: string;
}
export const GetSuggestionsParams: Schema.Schema<GetSuggestionsParams, GetSuggestionsParamsEncoded, never> = Schema.Struct({
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
});

export interface GetSuggestionsResponse {
  readonly data: Inline243;
}
export interface GetSuggestionsResponseEncoded {
  readonly data: Inline243Encoded;
}
export const GetSuggestionsResponse: Schema.Schema<GetSuggestionsResponse, GetSuggestionsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline243),
});

export interface GetSuggestionsSkeletonParams {
  readonly viewer?: string;
  readonly limit?: number;
  readonly cursor?: string;
  readonly relativeToDid?: string;
}
export interface GetSuggestionsSkeletonParamsEncoded {
  readonly viewer?: string;
  readonly limit?: number;
  readonly cursor?: string;
  readonly relativeToDid?: string;
}
export const GetSuggestionsSkeletonParams: Schema.Schema<GetSuggestionsSkeletonParams, GetSuggestionsSkeletonParamsEncoded, never> = Schema.Struct({
  viewer: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
  relativeToDid: Schema.optional(Schema.String),
});

export interface GetSuggestionsSkeletonResponse {
  readonly data: Inline508;
}
export interface GetSuggestionsSkeletonResponseEncoded {
  readonly data: Inline508Encoded;
}
export const GetSuggestionsSkeletonResponse: Schema.Schema<GetSuggestionsSkeletonResponse, GetSuggestionsSkeletonResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline508),
});

export interface GetSyncStatusParams {

}
export interface GetSyncStatusParamsEncoded {

}
export const GetSyncStatusParams: Schema.Schema<GetSyncStatusParams, GetSyncStatusParamsEncoded, never> = Schema.Struct({

});

export interface GetSyncStatusResponse {
  readonly data: Inline274;
}
export interface GetSyncStatusResponseEncoded {
  readonly data: Inline274Encoded;
}
export const GetSyncStatusResponse: Schema.Schema<GetSyncStatusResponse, GetSyncStatusResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline274),
});

export interface GetTaggedSuggestionsParams {

}
export interface GetTaggedSuggestionsParamsEncoded {

}
export const GetTaggedSuggestionsParams: Schema.Schema<GetTaggedSuggestionsParams, GetTaggedSuggestionsParamsEncoded, never> = Schema.Struct({

});

export interface GetTaggedSuggestionsResponse {
  readonly data: Inline511;
}
export interface GetTaggedSuggestionsResponseEncoded {
  readonly data: Inline511Encoded;
}
export const GetTaggedSuggestionsResponse: Schema.Schema<GetTaggedSuggestionsResponse, GetTaggedSuggestionsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline511),
});

export interface GetTimelineParams {
  readonly algorithm?: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export interface GetTimelineParamsEncoded {
  readonly algorithm?: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export const GetTimelineParams: Schema.Schema<GetTimelineParams, GetTimelineParamsEncoded, never> = Schema.Struct({
  algorithm: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
});

export interface GetTimelineResponse {
  readonly data: Inline350;
}
export interface GetTimelineResponseEncoded {
  readonly data: Inline350Encoded;
}
export const GetTimelineResponse: Schema.Schema<GetTimelineResponse, GetTimelineResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline350),
});

export interface GetTrendingTopicsParams {
  readonly viewer?: string;
  readonly limit?: number;
}
export interface GetTrendingTopicsParamsEncoded {
  readonly viewer?: string;
  readonly limit?: number;
}
export const GetTrendingTopicsParams: Schema.Schema<GetTrendingTopicsParams, GetTrendingTopicsParamsEncoded, never> = Schema.Struct({
  viewer: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
});

export interface GetTrendingTopicsResponse {
  readonly data: Inline514;
}
export interface GetTrendingTopicsResponseEncoded {
  readonly data: Inline514Encoded;
}
export const GetTrendingTopicsResponse: Schema.Schema<GetTrendingTopicsResponse, GetTrendingTopicsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline514),
});

export interface GetTrendsParams {
  readonly limit?: number;
}
export interface GetTrendsParamsEncoded {
  readonly limit?: number;
}
export const GetTrendsParams: Schema.Schema<GetTrendsParams, GetTrendsParamsEncoded, never> = Schema.Struct({
  limit: Schema.optional(Schema.Number),
});

export interface GetTrendsResponse {
  readonly data: Inline517;
}
export interface GetTrendsResponseEncoded {
  readonly data: Inline517Encoded;
}
export const GetTrendsResponse: Schema.Schema<GetTrendsResponse, GetTrendsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline517),
});

export interface GetTrendsSkeletonParams {
  readonly viewer?: string;
  readonly limit?: number;
}
export interface GetTrendsSkeletonParamsEncoded {
  readonly viewer?: string;
  readonly limit?: number;
}
export const GetTrendsSkeletonParams: Schema.Schema<GetTrendsSkeletonParams, GetTrendsSkeletonParamsEncoded, never> = Schema.Struct({
  viewer: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
});

export interface GetTrendsSkeletonResponse {
  readonly data: Inline520;
}
export interface GetTrendsSkeletonResponseEncoded {
  readonly data: Inline520Encoded;
}
export const GetTrendsSkeletonResponse: Schema.Schema<GetTrendsSkeletonResponse, GetTrendsSkeletonResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline520),
});

export interface GetUnreadCountParams {
  readonly priority?: boolean;
  readonly seenAt?: string;
}
export interface GetUnreadCountParamsEncoded {
  readonly priority?: boolean;
  readonly seenAt?: string;
}
export const GetUnreadCountParams: Schema.Schema<GetUnreadCountParams, GetUnreadCountParamsEncoded, never> = Schema.Struct({
  priority: Schema.optional(Schema.Boolean),
  seenAt: Schema.optional(Schema.String),
});

export interface GetUnreadCountResponse {
  readonly data: Inline431;
}
export interface GetUnreadCountResponseEncoded {
  readonly data: Inline431Encoded;
}
export const GetUnreadCountResponse: Schema.Schema<GetUnreadCountResponse, GetUnreadCountResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline431),
});

export interface GetUploadLimitsParams {

}
export interface GetUploadLimitsParamsEncoded {

}
export const GetUploadLimitsParams: Schema.Schema<GetUploadLimitsParams, GetUploadLimitsParamsEncoded, never> = Schema.Struct({

});

export interface GetUploadLimitsResponse {
  readonly data: Inline537;
}
export interface GetUploadLimitsResponseEncoded {
  readonly data: Inline537Encoded;
}
export const GetUploadLimitsResponse: Schema.Schema<GetUploadLimitsResponse, GetUploadLimitsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline537),
});

export interface ImportContactsParams {
  readonly token: string;
  readonly contacts: ReadonlyArray<string>;
}
export interface ImportContactsParamsEncoded {
  readonly token: string;
  readonly contacts: ReadonlyArray<string>;
}
export const ImportContactsParams: Schema.Schema<ImportContactsParams, ImportContactsParamsEncoded, never> = Schema.Struct({
  token: Schema.String,
  contacts: Schema.Array(Schema.String),
});

export interface ImportContactsResponse {
  readonly data: Inline277;
}
export interface ImportContactsResponseEncoded {
  readonly data: Inline277Encoded;
}
export const ImportContactsResponse: Schema.Schema<ImportContactsResponse, ImportContactsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline277),
});

export interface ImportRepoParams {

}
export interface ImportRepoParamsEncoded {

}
export const ImportRepoParams: Schema.Schema<ImportRepoParams, ImportRepoParamsEncoded, never> = Schema.Struct({

});

export interface ImportRepoResponse {

}
export interface ImportRepoResponseEncoded {

}
export const ImportRepoResponse: Schema.Schema<ImportRepoResponse, ImportRepoResponseEncoded, never> = Schema.Struct({

});

export interface InitAgeAssuranceParams {
  readonly email: string;
  readonly language: string;
  readonly countryCode: string;
}
export interface InitAgeAssuranceParamsEncoded {
  readonly email: string;
  readonly language: string;
  readonly countryCode: string;
}
export const InitAgeAssuranceParams: Schema.Schema<InitAgeAssuranceParams, InitAgeAssuranceParamsEncoded, never> = Schema.Struct({
  email: Schema.String,
  language: Schema.String,
  countryCode: Schema.String,
});

export interface InitAgeAssuranceResponse {
  readonly data: AppBskyUnspeccedDefsAgeAssuranceState;
}
export interface InitAgeAssuranceResponseEncoded {
  readonly data: AppBskyUnspeccedDefsAgeAssuranceStateEncoded;
}
export const InitAgeAssuranceResponse: Schema.Schema<InitAgeAssuranceResponse, InitAgeAssuranceResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => AppBskyUnspeccedDefsAgeAssuranceState),
});

export interface Inline235 {
  readonly preferences: AppBskyActorDefsPreferences;
}
export interface Inline235Encoded {
  readonly preferences: AppBskyActorDefsPreferencesEncoded;
}
export const Inline235: Schema.Schema<Inline235, Inline235Encoded, never> = Schema.Struct({
  preferences: Schema.suspend(() => AppBskyActorDefsPreferences),
});

export interface Inline240 {
  readonly profiles: ReadonlyArray<AppBskyActorDefsProfileViewDetailed>;
}
export interface Inline240Encoded {
  readonly profiles: ReadonlyArray<AppBskyActorDefsProfileViewDetailedEncoded>;
}
export const Inline240: Schema.Schema<Inline240, Inline240Encoded, never> = Schema.Struct({
  profiles: Schema.Array(Schema.suspend(() => AppBskyActorDefsProfileViewDetailed)),
});

export interface Inline243 {
  readonly cursor?: string;
  readonly actors: ReadonlyArray<AppBskyActorDefsProfileView>;
  readonly recId?: number;
  readonly recIdStr?: string;
}
export interface Inline243Encoded {
  readonly cursor?: string;
  readonly actors: ReadonlyArray<AppBskyActorDefsProfileViewEncoded>;
  readonly recId?: number;
  readonly recIdStr?: string;
}
export const Inline243: Schema.Schema<Inline243, Inline243Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  actors: Schema.Array(Schema.suspend(() => AppBskyActorDefsProfileView)),
  recId: Schema.optional(Schema.Number),
  recIdStr: Schema.optional(Schema.String),
});

export interface Inline248 {
  readonly cursor?: string;
  readonly actors: ReadonlyArray<AppBskyActorDefsProfileView>;
}
export interface Inline248Encoded {
  readonly cursor?: string;
  readonly actors: ReadonlyArray<AppBskyActorDefsProfileViewEncoded>;
}
export const Inline248: Schema.Schema<Inline248, Inline248Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  actors: Schema.Array(Schema.suspend(() => AppBskyActorDefsProfileView)),
});

export interface Inline251 {
  readonly actors: ReadonlyArray<AppBskyActorDefsProfileViewBasic>;
}
export interface Inline251Encoded {
  readonly actors: ReadonlyArray<AppBskyActorDefsProfileViewBasicEncoded>;
}
export const Inline251: Schema.Schema<Inline251, Inline251Encoded, never> = Schema.Struct({
  actors: Schema.Array(Schema.suspend(() => AppBskyActorDefsProfileViewBasic)),
});

export interface Inline258 {
  readonly state: AppBskyAgeassuranceDefsState;
  readonly metadata: AppBskyAgeassuranceDefsStateMetadata;
}
export interface Inline258Encoded {
  readonly state: AppBskyAgeassuranceDefsStateEncoded;
  readonly metadata: AppBskyAgeassuranceDefsStateMetadataEncoded;
}
export const Inline258: Schema.Schema<Inline258, Inline258Encoded, never> = Schema.Struct({
  state: Schema.suspend(() => AppBskyAgeassuranceDefsState),
  metadata: Schema.suspend(() => AppBskyAgeassuranceDefsStateMetadata),
});

export interface Inline265 {
  readonly cursor?: string;
  readonly bookmarks: ReadonlyArray<AppBskyBookmarkDefsBookmarkView>;
}
export interface Inline265Encoded {
  readonly cursor?: string;
  readonly bookmarks: ReadonlyArray<AppBskyBookmarkDefsBookmarkViewEncoded>;
}
export const Inline265: Schema.Schema<Inline265, Inline265Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  bookmarks: Schema.Array(Schema.suspend(() => AppBskyBookmarkDefsBookmarkView)),
});

export interface Inline268 {

}
export interface Inline268Encoded {

}
export const Inline268: Schema.Schema<Inline268, Inline268Encoded, never> = Schema.Struct({

});

export interface Inline271 {
  readonly cursor?: string;
  readonly matches: ReadonlyArray<AppBskyActorDefsProfileView>;
}
export interface Inline271Encoded {
  readonly cursor?: string;
  readonly matches: ReadonlyArray<AppBskyActorDefsProfileViewEncoded>;
}
export const Inline271: Schema.Schema<Inline271, Inline271Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  matches: Schema.Array(Schema.suspend(() => AppBskyActorDefsProfileView)),
});

export interface Inline274 {
  readonly syncStatus?: AppBskyContactDefsSyncStatus;
}
export interface Inline274Encoded {
  readonly syncStatus?: AppBskyContactDefsSyncStatusEncoded;
}
export const Inline274: Schema.Schema<Inline274, Inline274Encoded, never> = Schema.Struct({
  syncStatus: Schema.optional(Schema.suspend(() => AppBskyContactDefsSyncStatus)),
});

export interface Inline277 {
  readonly matchesAndContactIndexes: ReadonlyArray<AppBskyContactDefsMatchAndContactIndex>;
}
export interface Inline277Encoded {
  readonly matchesAndContactIndexes: ReadonlyArray<AppBskyContactDefsMatchAndContactIndexEncoded>;
}
export const Inline277: Schema.Schema<Inline277, Inline277Encoded, never> = Schema.Struct({
  matchesAndContactIndexes: Schema.Array(Schema.suspend(() => AppBskyContactDefsMatchAndContactIndex)),
});

export interface Inline280 {

}
export interface Inline280Encoded {

}
export const Inline280: Schema.Schema<Inline280, Inline280Encoded, never> = Schema.Struct({

});

export interface Inline283 {

}
export interface Inline283Encoded {

}
export const Inline283: Schema.Schema<Inline283, Inline283Encoded, never> = Schema.Struct({

});

export interface Inline286 {

}
export interface Inline286Encoded {

}
export const Inline286: Schema.Schema<Inline286, Inline286Encoded, never> = Schema.Struct({

});

export interface Inline289 {
  readonly token: string;
}
export interface Inline289Encoded {
  readonly token: string;
}
export const Inline289: Schema.Schema<Inline289, Inline289Encoded, never> = Schema.Struct({
  token: Schema.String,
});

export interface Inline292 {
  readonly id: string;
}
export interface Inline292Encoded {
  readonly id: string;
}
export const Inline292: Schema.Schema<Inline292, Inline292Encoded, never> = Schema.Struct({
  id: Schema.String,
});

export interface Inline297 {
  readonly cursor?: string;
  readonly drafts: ReadonlyArray<AppBskyDraftDefsDraftView>;
}
export interface Inline297Encoded {
  readonly cursor?: string;
  readonly drafts: ReadonlyArray<AppBskyDraftDefsDraftViewEncoded>;
}
export const Inline297: Schema.Schema<Inline297, Inline297Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  drafts: Schema.Array(Schema.suspend(() => AppBskyDraftDefsDraftView)),
});

export interface Inline302 {
  readonly view?: AppBskyEmbedExternalView;
  readonly associatedRefs?: ReadonlyArray<ComAtprotoRepoStrongRef>;
  readonly associatedRecords?: ReadonlyArray<unknown>;
}
export interface Inline302Encoded {
  readonly view?: AppBskyEmbedExternalViewEncoded;
  readonly associatedRefs?: ReadonlyArray<ComAtprotoRepoStrongRefEncoded>;
  readonly associatedRecords?: ReadonlyArray<unknown>;
}
export const Inline302: Schema.Schema<Inline302, Inline302Encoded, never> = Schema.Struct({
  view: Schema.optional(Schema.suspend(() => AppBskyEmbedExternalView)),
  associatedRefs: Schema.optional(Schema.Array(Schema.suspend(() => ComAtprotoRepoStrongRef))),
  associatedRecords: Schema.optional(Schema.Array(Schema.Unknown)),
});

export interface Inline305 {
  readonly did: string;
  readonly feeds: ReadonlyArray<AppBskyFeedDescribeFeedGeneratorFeed>;
  readonly links?: AppBskyFeedDescribeFeedGeneratorLinks;
}
export interface Inline305Encoded {
  readonly did: string;
  readonly feeds: ReadonlyArray<AppBskyFeedDescribeFeedGeneratorFeedEncoded>;
  readonly links?: AppBskyFeedDescribeFeedGeneratorLinksEncoded;
}
export const Inline305: Schema.Schema<Inline305, Inline305Encoded, never> = Schema.Struct({
  did: Schema.String,
  feeds: Schema.Array(Schema.suspend(() => AppBskyFeedDescribeFeedGeneratorFeed)),
  links: Schema.optional(Schema.suspend(() => AppBskyFeedDescribeFeedGeneratorLinks)),
});

export interface Inline308 {
  readonly cursor?: string;
  readonly feeds: ReadonlyArray<AppBskyFeedDefsGeneratorView>;
}
export interface Inline308Encoded {
  readonly cursor?: string;
  readonly feeds: ReadonlyArray<AppBskyFeedDefsGeneratorViewEncoded>;
}
export const Inline308: Schema.Schema<Inline308, Inline308Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  feeds: Schema.Array(Schema.suspend(() => AppBskyFeedDefsGeneratorView)),
});

export interface Inline311 {
  readonly cursor?: string;
  readonly feed: ReadonlyArray<AppBskyFeedDefsFeedViewPost>;
}
export interface Inline311Encoded {
  readonly cursor?: string;
  readonly feed: ReadonlyArray<AppBskyFeedDefsFeedViewPostEncoded>;
}
export const Inline311: Schema.Schema<Inline311, Inline311Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  feed: Schema.Array(Schema.suspend(() => AppBskyFeedDefsFeedViewPost)),
});

export interface Inline314 {
  readonly cursor?: string;
  readonly feed: ReadonlyArray<AppBskyFeedDefsFeedViewPost>;
}
export interface Inline314Encoded {
  readonly cursor?: string;
  readonly feed: ReadonlyArray<AppBskyFeedDefsFeedViewPostEncoded>;
}
export const Inline314: Schema.Schema<Inline314, Inline314Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  feed: Schema.Array(Schema.suspend(() => AppBskyFeedDefsFeedViewPost)),
});

export interface Inline317 {
  readonly cursor?: string;
  readonly feed: ReadonlyArray<AppBskyFeedDefsFeedViewPost>;
}
export interface Inline317Encoded {
  readonly cursor?: string;
  readonly feed: ReadonlyArray<AppBskyFeedDefsFeedViewPostEncoded>;
}
export const Inline317: Schema.Schema<Inline317, Inline317Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  feed: Schema.Array(Schema.suspend(() => AppBskyFeedDefsFeedViewPost)),
});

export interface Inline320 {
  readonly view: AppBskyFeedDefsGeneratorView;
  readonly isOnline: boolean;
  readonly isValid: boolean;
}
export interface Inline320Encoded {
  readonly view: AppBskyFeedDefsGeneratorViewEncoded;
  readonly isOnline: boolean;
  readonly isValid: boolean;
}
export const Inline320: Schema.Schema<Inline320, Inline320Encoded, never> = Schema.Struct({
  view: Schema.suspend(() => AppBskyFeedDefsGeneratorView),
  isOnline: Schema.Boolean,
  isValid: Schema.Boolean,
});

export interface Inline323 {
  readonly feeds: ReadonlyArray<AppBskyFeedDefsGeneratorView>;
}
export interface Inline323Encoded {
  readonly feeds: ReadonlyArray<AppBskyFeedDefsGeneratorViewEncoded>;
}
export const Inline323: Schema.Schema<Inline323, Inline323Encoded, never> = Schema.Struct({
  feeds: Schema.Array(Schema.suspend(() => AppBskyFeedDefsGeneratorView)),
});

export interface Inline326 {
  readonly cursor?: string;
  readonly feed: ReadonlyArray<AppBskyFeedDefsSkeletonFeedPost>;
  readonly reqId?: string;
}
export interface Inline326Encoded {
  readonly cursor?: string;
  readonly feed: ReadonlyArray<AppBskyFeedDefsSkeletonFeedPostEncoded>;
  readonly reqId?: string;
}
export const Inline326: Schema.Schema<Inline326, Inline326Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  feed: Schema.Array(Schema.suspend(() => AppBskyFeedDefsSkeletonFeedPost)),
  reqId: Schema.optional(Schema.String),
});

export interface Inline329 {
  readonly uri: string;
  readonly cid?: string;
  readonly cursor?: string;
  readonly likes: ReadonlyArray<AppBskyFeedGetLikesLike>;
}
export interface Inline329Encoded {
  readonly uri: string;
  readonly cid?: string;
  readonly cursor?: string;
  readonly likes: ReadonlyArray<AppBskyFeedGetLikesLikeEncoded>;
}
export const Inline329: Schema.Schema<Inline329, Inline329Encoded, never> = Schema.Struct({
  uri: Schema.String,
  cid: Schema.optional(Schema.String),
  cursor: Schema.optional(Schema.String),
  likes: Schema.Array(Schema.suspend(() => AppBskyFeedGetLikesLike)),
});

export interface Inline332 {
  readonly cursor?: string;
  readonly feed: ReadonlyArray<AppBskyFeedDefsFeedViewPost>;
}
export interface Inline332Encoded {
  readonly cursor?: string;
  readonly feed: ReadonlyArray<AppBskyFeedDefsFeedViewPostEncoded>;
}
export const Inline332: Schema.Schema<Inline332, Inline332Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  feed: Schema.Array(Schema.suspend(() => AppBskyFeedDefsFeedViewPost)),
});

export interface Inline335 {
  readonly posts: ReadonlyArray<AppBskyFeedDefsPostView>;
}
export interface Inline335Encoded {
  readonly posts: ReadonlyArray<AppBskyFeedDefsPostViewEncoded>;
}
export const Inline335: Schema.Schema<Inline335, Inline335Encoded, never> = Schema.Struct({
  posts: Schema.Array(Schema.suspend(() => AppBskyFeedDefsPostView)),
});

export interface Inline338 {
  readonly thread: AppBskyFeedDefsThreadViewPost | AppBskyFeedDefsNotFoundPost | AppBskyFeedDefsBlockedPost;
  readonly threadgate?: AppBskyFeedDefsThreadgateView;
}
export interface Inline338Encoded {
  readonly thread: AppBskyFeedDefsThreadViewPostEncoded | AppBskyFeedDefsNotFoundPostEncoded | AppBskyFeedDefsBlockedPostEncoded;
  readonly threadgate?: AppBskyFeedDefsThreadgateViewEncoded;
}
export const Inline338: Schema.Schema<Inline338, Inline338Encoded, never> = Schema.Struct({
  thread: Schema.Union(Schema.suspend(() => AppBskyFeedDefsThreadViewPost), Schema.suspend(() => AppBskyFeedDefsNotFoundPost), Schema.suspend(() => AppBskyFeedDefsBlockedPost)),
  threadgate: Schema.optional(Schema.suspend(() => AppBskyFeedDefsThreadgateView)),
});

export interface Inline341 {
  readonly uri: string;
  readonly cid?: string;
  readonly cursor?: string;
  readonly posts: ReadonlyArray<AppBskyFeedDefsPostView>;
}
export interface Inline341Encoded {
  readonly uri: string;
  readonly cid?: string;
  readonly cursor?: string;
  readonly posts: ReadonlyArray<AppBskyFeedDefsPostViewEncoded>;
}
export const Inline341: Schema.Schema<Inline341, Inline341Encoded, never> = Schema.Struct({
  uri: Schema.String,
  cid: Schema.optional(Schema.String),
  cursor: Schema.optional(Schema.String),
  posts: Schema.Array(Schema.suspend(() => AppBskyFeedDefsPostView)),
});

export interface Inline344 {
  readonly uri: string;
  readonly cid?: string;
  readonly cursor?: string;
  readonly repostedBy: ReadonlyArray<AppBskyActorDefsProfileView>;
}
export interface Inline344Encoded {
  readonly uri: string;
  readonly cid?: string;
  readonly cursor?: string;
  readonly repostedBy: ReadonlyArray<AppBskyActorDefsProfileViewEncoded>;
}
export const Inline344: Schema.Schema<Inline344, Inline344Encoded, never> = Schema.Struct({
  uri: Schema.String,
  cid: Schema.optional(Schema.String),
  cursor: Schema.optional(Schema.String),
  repostedBy: Schema.Array(Schema.suspend(() => AppBskyActorDefsProfileView)),
});

export interface Inline347 {
  readonly cursor?: string;
  readonly feeds: ReadonlyArray<AppBskyFeedDefsGeneratorView>;
}
export interface Inline347Encoded {
  readonly cursor?: string;
  readonly feeds: ReadonlyArray<AppBskyFeedDefsGeneratorViewEncoded>;
}
export const Inline347: Schema.Schema<Inline347, Inline347Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  feeds: Schema.Array(Schema.suspend(() => AppBskyFeedDefsGeneratorView)),
});

export interface Inline350 {
  readonly cursor?: string;
  readonly feed: ReadonlyArray<AppBskyFeedDefsFeedViewPost>;
}
export interface Inline350Encoded {
  readonly cursor?: string;
  readonly feed: ReadonlyArray<AppBskyFeedDefsFeedViewPostEncoded>;
}
export const Inline350: Schema.Schema<Inline350, Inline350Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  feed: Schema.Array(Schema.suspend(() => AppBskyFeedDefsFeedViewPost)),
});

export interface Inline353 {
  readonly cursor?: string;
  readonly hitsTotal?: number;
  readonly posts: ReadonlyArray<AppBskyFeedDefsPostView>;
}
export interface Inline353Encoded {
  readonly cursor?: string;
  readonly hitsTotal?: number;
  readonly posts: ReadonlyArray<AppBskyFeedDefsPostViewEncoded>;
}
export const Inline353: Schema.Schema<Inline353, Inline353Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  hitsTotal: Schema.optional(Schema.Number),
  posts: Schema.Array(Schema.suspend(() => AppBskyFeedDefsPostView)),
});

export interface Inline356 {
  readonly cursor?: string;
  readonly hitsTotal?: number;
  readonly posts: ReadonlyArray<AppBskyFeedDefsPostView>;
  readonly detectedQueryLanguages?: ReadonlyArray<string>;
}
export interface Inline356Encoded {
  readonly cursor?: string;
  readonly hitsTotal?: number;
  readonly posts: ReadonlyArray<AppBskyFeedDefsPostViewEncoded>;
  readonly detectedQueryLanguages?: ReadonlyArray<string>;
}
export const Inline356: Schema.Schema<Inline356, Inline356Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  hitsTotal: Schema.optional(Schema.Number),
  posts: Schema.Array(Schema.suspend(() => AppBskyFeedDefsPostView)),
  detectedQueryLanguages: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline359 {

}
export interface Inline359Encoded {

}
export const Inline359: Schema.Schema<Inline359, Inline359Encoded, never> = Schema.Struct({

});

export interface Inline362 {
  readonly cursor?: string;
  readonly starterPacks: ReadonlyArray<AppBskyGraphDefsStarterPackViewBasic>;
}
export interface Inline362Encoded {
  readonly cursor?: string;
  readonly starterPacks: ReadonlyArray<AppBskyGraphDefsStarterPackViewBasicEncoded>;
}
export const Inline362: Schema.Schema<Inline362, Inline362Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  starterPacks: Schema.Array(Schema.suspend(() => AppBskyGraphDefsStarterPackViewBasic)),
});

export interface Inline365 {
  readonly cursor?: string;
  readonly blocks: ReadonlyArray<AppBskyActorDefsProfileView>;
}
export interface Inline365Encoded {
  readonly cursor?: string;
  readonly blocks: ReadonlyArray<AppBskyActorDefsProfileViewEncoded>;
}
export const Inline365: Schema.Schema<Inline365, Inline365Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  blocks: Schema.Array(Schema.suspend(() => AppBskyActorDefsProfileView)),
});

export interface Inline368 {
  readonly subject: AppBskyActorDefsProfileView;
  readonly cursor?: string;
  readonly followers: ReadonlyArray<AppBskyActorDefsProfileView>;
}
export interface Inline368Encoded {
  readonly subject: AppBskyActorDefsProfileViewEncoded;
  readonly cursor?: string;
  readonly followers: ReadonlyArray<AppBskyActorDefsProfileViewEncoded>;
}
export const Inline368: Schema.Schema<Inline368, Inline368Encoded, never> = Schema.Struct({
  subject: Schema.suspend(() => AppBskyActorDefsProfileView),
  cursor: Schema.optional(Schema.String),
  followers: Schema.Array(Schema.suspend(() => AppBskyActorDefsProfileView)),
});

export interface Inline371 {
  readonly subject: AppBskyActorDefsProfileView;
  readonly cursor?: string;
  readonly follows: ReadonlyArray<AppBskyActorDefsProfileView>;
}
export interface Inline371Encoded {
  readonly subject: AppBskyActorDefsProfileViewEncoded;
  readonly cursor?: string;
  readonly follows: ReadonlyArray<AppBskyActorDefsProfileViewEncoded>;
}
export const Inline371: Schema.Schema<Inline371, Inline371Encoded, never> = Schema.Struct({
  subject: Schema.suspend(() => AppBskyActorDefsProfileView),
  cursor: Schema.optional(Schema.String),
  follows: Schema.Array(Schema.suspend(() => AppBskyActorDefsProfileView)),
});

export interface Inline374 {
  readonly subject: AppBskyActorDefsProfileView;
  readonly cursor?: string;
  readonly followers: ReadonlyArray<AppBskyActorDefsProfileView>;
}
export interface Inline374Encoded {
  readonly subject: AppBskyActorDefsProfileViewEncoded;
  readonly cursor?: string;
  readonly followers: ReadonlyArray<AppBskyActorDefsProfileViewEncoded>;
}
export const Inline374: Schema.Schema<Inline374, Inline374Encoded, never> = Schema.Struct({
  subject: Schema.suspend(() => AppBskyActorDefsProfileView),
  cursor: Schema.optional(Schema.String),
  followers: Schema.Array(Schema.suspend(() => AppBskyActorDefsProfileView)),
});

export interface Inline377 {
  readonly cursor?: string;
  readonly list: AppBskyGraphDefsListView;
  readonly items: ReadonlyArray<AppBskyGraphDefsListItemView>;
}
export interface Inline377Encoded {
  readonly cursor?: string;
  readonly list: AppBskyGraphDefsListViewEncoded;
  readonly items: ReadonlyArray<AppBskyGraphDefsListItemViewEncoded>;
}
export const Inline377: Schema.Schema<Inline377, Inline377Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  list: Schema.suspend(() => AppBskyGraphDefsListView),
  items: Schema.Array(Schema.suspend(() => AppBskyGraphDefsListItemView)),
});

export interface Inline380 {
  readonly cursor?: string;
  readonly lists: ReadonlyArray<AppBskyGraphDefsListView>;
}
export interface Inline380Encoded {
  readonly cursor?: string;
  readonly lists: ReadonlyArray<AppBskyGraphDefsListViewEncoded>;
}
export const Inline380: Schema.Schema<Inline380, Inline380Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  lists: Schema.Array(Schema.suspend(() => AppBskyGraphDefsListView)),
});

export interface Inline383 {
  readonly cursor?: string;
  readonly lists: ReadonlyArray<AppBskyGraphDefsListView>;
}
export interface Inline383Encoded {
  readonly cursor?: string;
  readonly lists: ReadonlyArray<AppBskyGraphDefsListViewEncoded>;
}
export const Inline383: Schema.Schema<Inline383, Inline383Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  lists: Schema.Array(Schema.suspend(() => AppBskyGraphDefsListView)),
});

export interface Inline386 {
  readonly cursor?: string;
  readonly lists: ReadonlyArray<AppBskyGraphDefsListView>;
}
export interface Inline386Encoded {
  readonly cursor?: string;
  readonly lists: ReadonlyArray<AppBskyGraphDefsListViewEncoded>;
}
export const Inline386: Schema.Schema<Inline386, Inline386Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  lists: Schema.Array(Schema.suspend(() => AppBskyGraphDefsListView)),
});

export interface Inline389 {
  readonly cursor?: string;
  readonly listsWithMembership: ReadonlyArray<AppBskyGraphGetListsWithMembershipListWithMembership>;
}
export interface Inline389Encoded {
  readonly cursor?: string;
  readonly listsWithMembership: ReadonlyArray<AppBskyGraphGetListsWithMembershipListWithMembershipEncoded>;
}
export const Inline389: Schema.Schema<Inline389, Inline389Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  listsWithMembership: Schema.Array(Schema.suspend(() => AppBskyGraphGetListsWithMembershipListWithMembership)),
});

export interface Inline392 {
  readonly cursor?: string;
  readonly mutes: ReadonlyArray<AppBskyActorDefsProfileView>;
}
export interface Inline392Encoded {
  readonly cursor?: string;
  readonly mutes: ReadonlyArray<AppBskyActorDefsProfileViewEncoded>;
}
export const Inline392: Schema.Schema<Inline392, Inline392Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  mutes: Schema.Array(Schema.suspend(() => AppBskyActorDefsProfileView)),
});

export interface Inline395 {
  readonly actor?: string;
  readonly relationships: ReadonlyArray<AppBskyGraphDefsRelationship | AppBskyGraphDefsNotFoundActor>;
}
export interface Inline395Encoded {
  readonly actor?: string;
  readonly relationships: ReadonlyArray<AppBskyGraphDefsRelationshipEncoded | AppBskyGraphDefsNotFoundActorEncoded>;
}
export const Inline395: Schema.Schema<Inline395, Inline395Encoded, never> = Schema.Struct({
  actor: Schema.optional(Schema.String),
  relationships: Schema.Array(Schema.Union(Schema.suspend(() => AppBskyGraphDefsRelationship), Schema.suspend(() => AppBskyGraphDefsNotFoundActor))),
});

export interface Inline398 {
  readonly starterPack: AppBskyGraphDefsStarterPackView;
}
export interface Inline398Encoded {
  readonly starterPack: AppBskyGraphDefsStarterPackViewEncoded;
}
export const Inline398: Schema.Schema<Inline398, Inline398Encoded, never> = Schema.Struct({
  starterPack: Schema.suspend(() => AppBskyGraphDefsStarterPackView),
});

export interface Inline401 {
  readonly starterPacks: ReadonlyArray<AppBskyGraphDefsStarterPackViewBasic>;
}
export interface Inline401Encoded {
  readonly starterPacks: ReadonlyArray<AppBskyGraphDefsStarterPackViewBasicEncoded>;
}
export const Inline401: Schema.Schema<Inline401, Inline401Encoded, never> = Schema.Struct({
  starterPacks: Schema.Array(Schema.suspend(() => AppBskyGraphDefsStarterPackViewBasic)),
});

export interface Inline404 {
  readonly cursor?: string;
  readonly starterPacksWithMembership: ReadonlyArray<AppBskyGraphGetStarterPacksWithMembershipStarterPackWithMembership>;
}
export interface Inline404Encoded {
  readonly cursor?: string;
  readonly starterPacksWithMembership: ReadonlyArray<AppBskyGraphGetStarterPacksWithMembershipStarterPackWithMembershipEncoded>;
}
export const Inline404: Schema.Schema<Inline404, Inline404Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  starterPacksWithMembership: Schema.Array(Schema.suspend(() => AppBskyGraphGetStarterPacksWithMembershipStarterPackWithMembership)),
});

export interface Inline407 {
  readonly suggestions: ReadonlyArray<AppBskyActorDefsProfileView>;
  readonly recIdStr?: string;
  readonly isFallback?: boolean;
  readonly recId?: number;
}
export interface Inline407Encoded {
  readonly suggestions: ReadonlyArray<AppBskyActorDefsProfileViewEncoded>;
  readonly recIdStr?: string;
  readonly isFallback?: boolean;
  readonly recId?: number;
}
export const Inline407: Schema.Schema<Inline407, Inline407Encoded, never> = Schema.Struct({
  suggestions: Schema.Array(Schema.suspend(() => AppBskyActorDefsProfileView)),
  recIdStr: Schema.optional(Schema.String),
  isFallback: Schema.optional(Schema.Boolean),
  recId: Schema.optional(Schema.Number),
});

export interface Inline416 {
  readonly cursor?: string;
  readonly starterPacks: ReadonlyArray<AppBskyGraphDefsStarterPackViewBasic>;
}
export interface Inline416Encoded {
  readonly cursor?: string;
  readonly starterPacks: ReadonlyArray<AppBskyGraphDefsStarterPackViewBasicEncoded>;
}
export const Inline416: Schema.Schema<Inline416, Inline416Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  starterPacks: Schema.Array(Schema.suspend(() => AppBskyGraphDefsStarterPackViewBasic)),
});

export interface Inline419 {
  readonly cursor?: string;
  readonly hitsTotal?: number;
  readonly starterPacks: ReadonlyArray<AppBskyGraphDefsStarterPackView>;
}
export interface Inline419Encoded {
  readonly cursor?: string;
  readonly hitsTotal?: number;
  readonly starterPacks: ReadonlyArray<AppBskyGraphDefsStarterPackViewEncoded>;
}
export const Inline419: Schema.Schema<Inline419, Inline419Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  hitsTotal: Schema.optional(Schema.Number),
  starterPacks: Schema.Array(Schema.suspend(() => AppBskyGraphDefsStarterPackView)),
});

export interface Inline428 {
  readonly views: ReadonlyArray<AppBskyLabelerDefsLabelerView | AppBskyLabelerDefsLabelerViewDetailed>;
}
export interface Inline428Encoded {
  readonly views: ReadonlyArray<AppBskyLabelerDefsLabelerViewEncoded | AppBskyLabelerDefsLabelerViewDetailedEncoded>;
}
export const Inline428: Schema.Schema<Inline428, Inline428Encoded, never> = Schema.Struct({
  views: Schema.Array(Schema.Union(Schema.suspend(() => AppBskyLabelerDefsLabelerView), Schema.suspend(() => AppBskyLabelerDefsLabelerViewDetailed))),
});

export interface Inline431 {
  readonly count: number;
}
export interface Inline431Encoded {
  readonly count: number;
}
export const Inline431: Schema.Schema<Inline431, Inline431Encoded, never> = Schema.Struct({
  count: Schema.Number,
});

export interface Inline434 {
  readonly cursor?: string;
  readonly subscriptions: ReadonlyArray<AppBskyActorDefsProfileView>;
}
export interface Inline434Encoded {
  readonly cursor?: string;
  readonly subscriptions: ReadonlyArray<AppBskyActorDefsProfileViewEncoded>;
}
export const Inline434: Schema.Schema<Inline434, Inline434Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  subscriptions: Schema.Array(Schema.suspend(() => AppBskyActorDefsProfileView)),
});

export interface Inline437 {
  readonly cursor?: string;
  readonly notifications: ReadonlyArray<AppBskyNotificationListNotificationsNotification>;
  readonly priority?: boolean;
  readonly seenAt?: string;
}
export interface Inline437Encoded {
  readonly cursor?: string;
  readonly notifications: ReadonlyArray<AppBskyNotificationListNotificationsNotificationEncoded>;
  readonly priority?: boolean;
  readonly seenAt?: string;
}
export const Inline437: Schema.Schema<Inline437, Inline437Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  notifications: Schema.Array(Schema.suspend(() => AppBskyNotificationListNotificationsNotification)),
  priority: Schema.optional(Schema.Boolean),
  seenAt: Schema.optional(Schema.String),
});

export interface Inline440 {
  readonly subject: string;
  readonly activitySubscription?: AppBskyNotificationDefsActivitySubscription;
}
export interface Inline440Encoded {
  readonly subject: string;
  readonly activitySubscription?: AppBskyNotificationDefsActivitySubscriptionEncoded;
}
export const Inline440: Schema.Schema<Inline440, Inline440Encoded, never> = Schema.Struct({
  subject: Schema.String,
  activitySubscription: Schema.optional(Schema.suspend(() => AppBskyNotificationDefsActivitySubscription)),
});

export interface Inline443 {
  readonly preferences: AppBskyNotificationDefsPreferences;
}
export interface Inline443Encoded {
  readonly preferences: AppBskyNotificationDefsPreferencesEncoded;
}
export const Inline443: Schema.Schema<Inline443, Inline443Encoded, never> = Schema.Struct({
  preferences: Schema.suspend(() => AppBskyNotificationDefsPreferences),
});

export interface Inline454 {
  readonly starterPacks: ReadonlyArray<AppBskyGraphDefsStarterPackView>;
}
export interface Inline454Encoded {
  readonly starterPacks: ReadonlyArray<AppBskyGraphDefsStarterPackViewEncoded>;
}
export const Inline454: Schema.Schema<Inline454, Inline454Encoded, never> = Schema.Struct({
  starterPacks: Schema.Array(Schema.suspend(() => AppBskyGraphDefsStarterPackView)),
});

export interface Inline457 {
  readonly starterPacks: ReadonlyArray<string>;
}
export interface Inline457Encoded {
  readonly starterPacks: ReadonlyArray<string>;
}
export const Inline457: Schema.Schema<Inline457, Inline457Encoded, never> = Schema.Struct({
  starterPacks: Schema.Array(Schema.String),
});

export interface Inline460 {
  readonly dids: ReadonlyArray<string>;
  readonly recId?: string;
  readonly recIdStr?: string;
}
export interface Inline460Encoded {
  readonly dids: ReadonlyArray<string>;
  readonly recId?: string;
  readonly recIdStr?: string;
}
export const Inline460: Schema.Schema<Inline460, Inline460Encoded, never> = Schema.Struct({
  dids: Schema.Array(Schema.String),
  recId: Schema.optional(Schema.String),
  recIdStr: Schema.optional(Schema.String),
});

export interface Inline463 {
  readonly cursor?: string;
  readonly feeds: ReadonlyArray<AppBskyFeedDefsGeneratorView>;
}
export interface Inline463Encoded {
  readonly cursor?: string;
  readonly feeds: ReadonlyArray<AppBskyFeedDefsGeneratorViewEncoded>;
}
export const Inline463: Schema.Schema<Inline463, Inline463Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  feeds: Schema.Array(Schema.suspend(() => AppBskyFeedDefsGeneratorView)),
});

export interface Inline466 {
  readonly thread: ReadonlyArray<AppBskyUnspeccedGetPostThreadOtherV2ThreadItem>;
}
export interface Inline466Encoded {
  readonly thread: ReadonlyArray<AppBskyUnspeccedGetPostThreadOtherV2ThreadItemEncoded>;
}
export const Inline466: Schema.Schema<Inline466, Inline466Encoded, never> = Schema.Struct({
  thread: Schema.Array(Schema.suspend(() => AppBskyUnspeccedGetPostThreadOtherV2ThreadItem)),
});

export interface Inline469 {
  readonly thread: ReadonlyArray<AppBskyUnspeccedGetPostThreadV2ThreadItem>;
  readonly threadgate?: AppBskyFeedDefsThreadgateView;
  readonly hasOtherReplies: boolean;
}
export interface Inline469Encoded {
  readonly thread: ReadonlyArray<AppBskyUnspeccedGetPostThreadV2ThreadItemEncoded>;
  readonly threadgate?: AppBskyFeedDefsThreadgateViewEncoded;
  readonly hasOtherReplies: boolean;
}
export const Inline469: Schema.Schema<Inline469, Inline469Encoded, never> = Schema.Struct({
  thread: Schema.Array(Schema.suspend(() => AppBskyUnspeccedGetPostThreadV2ThreadItem)),
  threadgate: Schema.optional(Schema.suspend(() => AppBskyFeedDefsThreadgateView)),
  hasOtherReplies: Schema.Boolean,
});

export interface Inline472 {
  readonly feeds: ReadonlyArray<string>;
}
export interface Inline472Encoded {
  readonly feeds: ReadonlyArray<string>;
}
export const Inline472: Schema.Schema<Inline472, Inline472Encoded, never> = Schema.Struct({
  feeds: Schema.Array(Schema.String),
});

export interface Inline475 {
  readonly actors: ReadonlyArray<AppBskyActorDefsProfileView>;
  readonly recId?: string;
  readonly recIdStr?: string;
}
export interface Inline475Encoded {
  readonly actors: ReadonlyArray<AppBskyActorDefsProfileViewEncoded>;
  readonly recId?: string;
  readonly recIdStr?: string;
}
export const Inline475: Schema.Schema<Inline475, Inline475Encoded, never> = Schema.Struct({
  actors: Schema.Array(Schema.suspend(() => AppBskyActorDefsProfileView)),
  recId: Schema.optional(Schema.String),
  recIdStr: Schema.optional(Schema.String),
});

export interface Inline478 {
  readonly starterPacks: ReadonlyArray<AppBskyGraphDefsStarterPackView>;
}
export interface Inline478Encoded {
  readonly starterPacks: ReadonlyArray<AppBskyGraphDefsStarterPackViewEncoded>;
}
export const Inline478: Schema.Schema<Inline478, Inline478Encoded, never> = Schema.Struct({
  starterPacks: Schema.Array(Schema.suspend(() => AppBskyGraphDefsStarterPackView)),
});

export interface Inline481 {
  readonly starterPacks: ReadonlyArray<string>;
}
export interface Inline481Encoded {
  readonly starterPacks: ReadonlyArray<string>;
}
export const Inline481: Schema.Schema<Inline481, Inline481Encoded, never> = Schema.Struct({
  starterPacks: Schema.Array(Schema.String),
});

export interface Inline484 {
  readonly actors: ReadonlyArray<AppBskyActorDefsProfileView>;
  readonly recId?: string;
  readonly recIdStr?: string;
}
export interface Inline484Encoded {
  readonly actors: ReadonlyArray<AppBskyActorDefsProfileViewEncoded>;
  readonly recId?: string;
  readonly recIdStr?: string;
}
export const Inline484: Schema.Schema<Inline484, Inline484Encoded, never> = Schema.Struct({
  actors: Schema.Array(Schema.suspend(() => AppBskyActorDefsProfileView)),
  recId: Schema.optional(Schema.String),
  recIdStr: Schema.optional(Schema.String),
});

export interface Inline487 {
  readonly actors: ReadonlyArray<AppBskyActorDefsProfileView>;
  readonly recIdStr?: string;
}
export interface Inline487Encoded {
  readonly actors: ReadonlyArray<AppBskyActorDefsProfileViewEncoded>;
  readonly recIdStr?: string;
}
export const Inline487: Schema.Schema<Inline487, Inline487Encoded, never> = Schema.Struct({
  actors: Schema.Array(Schema.suspend(() => AppBskyActorDefsProfileView)),
  recIdStr: Schema.optional(Schema.String),
});

export interface Inline490 {
  readonly dids: ReadonlyArray<string>;
  readonly recIdStr?: string;
}
export interface Inline490Encoded {
  readonly dids: ReadonlyArray<string>;
  readonly recIdStr?: string;
}
export const Inline490: Schema.Schema<Inline490, Inline490Encoded, never> = Schema.Struct({
  dids: Schema.Array(Schema.String),
  recIdStr: Schema.optional(Schema.String),
});

export interface Inline493 {
  readonly actors: ReadonlyArray<AppBskyActorDefsProfileView>;
  readonly recIdStr?: string;
}
export interface Inline493Encoded {
  readonly actors: ReadonlyArray<AppBskyActorDefsProfileViewEncoded>;
  readonly recIdStr?: string;
}
export const Inline493: Schema.Schema<Inline493, Inline493Encoded, never> = Schema.Struct({
  actors: Schema.Array(Schema.suspend(() => AppBskyActorDefsProfileView)),
  recIdStr: Schema.optional(Schema.String),
});

export interface Inline496 {
  readonly dids: ReadonlyArray<string>;
  readonly recIdStr?: string;
}
export interface Inline496Encoded {
  readonly dids: ReadonlyArray<string>;
  readonly recIdStr?: string;
}
export const Inline496: Schema.Schema<Inline496, Inline496Encoded, never> = Schema.Struct({
  dids: Schema.Array(Schema.String),
  recIdStr: Schema.optional(Schema.String),
});

export interface Inline499 {
  readonly actors: ReadonlyArray<AppBskyActorDefsProfileView>;
  readonly recIdStr?: string;
}
export interface Inline499Encoded {
  readonly actors: ReadonlyArray<AppBskyActorDefsProfileViewEncoded>;
  readonly recIdStr?: string;
}
export const Inline499: Schema.Schema<Inline499, Inline499Encoded, never> = Schema.Struct({
  actors: Schema.Array(Schema.suspend(() => AppBskyActorDefsProfileView)),
  recIdStr: Schema.optional(Schema.String),
});

export interface Inline502 {
  readonly dids: ReadonlyArray<string>;
  readonly recIdStr?: string;
}
export interface Inline502Encoded {
  readonly dids: ReadonlyArray<string>;
  readonly recIdStr?: string;
}
export const Inline502: Schema.Schema<Inline502, Inline502Encoded, never> = Schema.Struct({
  dids: Schema.Array(Schema.String),
  recIdStr: Schema.optional(Schema.String),
});

export interface Inline505 {
  readonly dids: ReadonlyArray<string>;
  readonly recId?: string;
  readonly recIdStr?: string;
}
export interface Inline505Encoded {
  readonly dids: ReadonlyArray<string>;
  readonly recId?: string;
  readonly recIdStr?: string;
}
export const Inline505: Schema.Schema<Inline505, Inline505Encoded, never> = Schema.Struct({
  dids: Schema.Array(Schema.String),
  recId: Schema.optional(Schema.String),
  recIdStr: Schema.optional(Schema.String),
});

export interface Inline508 {
  readonly cursor?: string;
  readonly actors: ReadonlyArray<AppBskyUnspeccedDefsSkeletonSearchActor>;
  readonly relativeToDid?: string;
  readonly recId?: number;
  readonly recIdStr?: string;
}
export interface Inline508Encoded {
  readonly cursor?: string;
  readonly actors: ReadonlyArray<AppBskyUnspeccedDefsSkeletonSearchActorEncoded>;
  readonly relativeToDid?: string;
  readonly recId?: number;
  readonly recIdStr?: string;
}
export const Inline508: Schema.Schema<Inline508, Inline508Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  actors: Schema.Array(Schema.suspend(() => AppBskyUnspeccedDefsSkeletonSearchActor)),
  relativeToDid: Schema.optional(Schema.String),
  recId: Schema.optional(Schema.Number),
  recIdStr: Schema.optional(Schema.String),
});

export interface Inline511 {
  readonly suggestions: ReadonlyArray<AppBskyUnspeccedGetTaggedSuggestionsSuggestion>;
}
export interface Inline511Encoded {
  readonly suggestions: ReadonlyArray<AppBskyUnspeccedGetTaggedSuggestionsSuggestionEncoded>;
}
export const Inline511: Schema.Schema<Inline511, Inline511Encoded, never> = Schema.Struct({
  suggestions: Schema.Array(Schema.suspend(() => AppBskyUnspeccedGetTaggedSuggestionsSuggestion)),
});

export interface Inline514 {
  readonly topics: ReadonlyArray<AppBskyUnspeccedDefsTrendingTopic>;
  readonly suggested: ReadonlyArray<AppBskyUnspeccedDefsTrendingTopic>;
}
export interface Inline514Encoded {
  readonly topics: ReadonlyArray<AppBskyUnspeccedDefsTrendingTopicEncoded>;
  readonly suggested: ReadonlyArray<AppBskyUnspeccedDefsTrendingTopicEncoded>;
}
export const Inline514: Schema.Schema<Inline514, Inline514Encoded, never> = Schema.Struct({
  topics: Schema.Array(Schema.suspend(() => AppBskyUnspeccedDefsTrendingTopic)),
  suggested: Schema.Array(Schema.suspend(() => AppBskyUnspeccedDefsTrendingTopic)),
});

export interface Inline517 {
  readonly trends: ReadonlyArray<AppBskyUnspeccedDefsTrendView>;
  readonly recIdStr?: string;
}
export interface Inline517Encoded {
  readonly trends: ReadonlyArray<AppBskyUnspeccedDefsTrendViewEncoded>;
  readonly recIdStr?: string;
}
export const Inline517: Schema.Schema<Inline517, Inline517Encoded, never> = Schema.Struct({
  trends: Schema.Array(Schema.suspend(() => AppBskyUnspeccedDefsTrendView)),
  recIdStr: Schema.optional(Schema.String),
});

export interface Inline520 {
  readonly trends: ReadonlyArray<AppBskyUnspeccedDefsSkeletonTrend>;
  readonly recIdStr?: string;
}
export interface Inline520Encoded {
  readonly trends: ReadonlyArray<AppBskyUnspeccedDefsSkeletonTrendEncoded>;
  readonly recIdStr?: string;
}
export const Inline520: Schema.Schema<Inline520, Inline520Encoded, never> = Schema.Struct({
  trends: Schema.Array(Schema.suspend(() => AppBskyUnspeccedDefsSkeletonTrend)),
  recIdStr: Schema.optional(Schema.String),
});

export interface Inline525 {
  readonly cursor?: string;
  readonly hitsTotal?: number;
  readonly actors: ReadonlyArray<AppBskyUnspeccedDefsSkeletonSearchActor>;
}
export interface Inline525Encoded {
  readonly cursor?: string;
  readonly hitsTotal?: number;
  readonly actors: ReadonlyArray<AppBskyUnspeccedDefsSkeletonSearchActorEncoded>;
}
export const Inline525: Schema.Schema<Inline525, Inline525Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  hitsTotal: Schema.optional(Schema.Number),
  actors: Schema.Array(Schema.suspend(() => AppBskyUnspeccedDefsSkeletonSearchActor)),
});

export interface Inline528 {
  readonly cursor?: string;
  readonly hitsTotal?: number;
  readonly posts: ReadonlyArray<AppBskyUnspeccedDefsSkeletonSearchPost>;
}
export interface Inline528Encoded {
  readonly cursor?: string;
  readonly hitsTotal?: number;
  readonly posts: ReadonlyArray<AppBskyUnspeccedDefsSkeletonSearchPostEncoded>;
}
export const Inline528: Schema.Schema<Inline528, Inline528Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  hitsTotal: Schema.optional(Schema.Number),
  posts: Schema.Array(Schema.suspend(() => AppBskyUnspeccedDefsSkeletonSearchPost)),
});

export interface Inline531 {
  readonly cursor?: string;
  readonly hitsTotal?: number;
  readonly starterPacks: ReadonlyArray<AppBskyUnspeccedDefsSkeletonSearchStarterPack>;
}
export interface Inline531Encoded {
  readonly cursor?: string;
  readonly hitsTotal?: number;
  readonly starterPacks: ReadonlyArray<AppBskyUnspeccedDefsSkeletonSearchStarterPackEncoded>;
}
export const Inline531: Schema.Schema<Inline531, Inline531Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  hitsTotal: Schema.optional(Schema.Number),
  starterPacks: Schema.Array(Schema.suspend(() => AppBskyUnspeccedDefsSkeletonSearchStarterPack)),
});

export interface Inline534 {
  readonly jobStatus: AppBskyVideoDefsJobStatus;
}
export interface Inline534Encoded {
  readonly jobStatus: AppBskyVideoDefsJobStatusEncoded;
}
export const Inline534: Schema.Schema<Inline534, Inline534Encoded, never> = Schema.Struct({
  jobStatus: Schema.suspend(() => AppBskyVideoDefsJobStatus),
});

export interface Inline537 {
  readonly canUpload: boolean;
  readonly remainingDailyVideos?: number;
  readonly remainingDailyBytes?: number;
  readonly message?: string;
  readonly error?: string;
}
export interface Inline537Encoded {
  readonly canUpload: boolean;
  readonly remainingDailyVideos?: number;
  readonly remainingDailyBytes?: number;
  readonly message?: string;
  readonly error?: string;
}
export const Inline537: Schema.Schema<Inline537, Inline537Encoded, never> = Schema.Struct({
  canUpload: Schema.Boolean,
  remainingDailyVideos: Schema.optional(Schema.Number),
  remainingDailyBytes: Schema.optional(Schema.Number),
  message: Schema.optional(Schema.String),
  error: Schema.optional(Schema.String),
});

export interface Inline540 {
  readonly jobStatus: AppBskyVideoDefsJobStatus;
}
export interface Inline540Encoded {
  readonly jobStatus: AppBskyVideoDefsJobStatusEncoded;
}
export const Inline540: Schema.Schema<Inline540, Inline540Encoded, never> = Schema.Struct({
  jobStatus: Schema.suspend(() => AppBskyVideoDefsJobStatus),
});

export interface Inline553 {
  readonly infos: ReadonlyArray<ComAtprotoAdminDefsAccountView>;
}
export interface Inline553Encoded {
  readonly infos: ReadonlyArray<ComAtprotoAdminDefsAccountViewEncoded>;
}
export const Inline553: Schema.Schema<Inline553, Inline553Encoded, never> = Schema.Struct({
  infos: Schema.Array(Schema.suspend(() => ComAtprotoAdminDefsAccountView)),
});

export interface Inline556 {
  readonly cursor?: string;
  readonly codes: ReadonlyArray<ComAtprotoServerDefsInviteCode>;
}
export interface Inline556Encoded {
  readonly cursor?: string;
  readonly codes: ReadonlyArray<ComAtprotoServerDefsInviteCodeEncoded>;
}
export const Inline556: Schema.Schema<Inline556, Inline556Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  codes: Schema.Array(Schema.suspend(() => ComAtprotoServerDefsInviteCode)),
});

export interface Inline559 {
  readonly subject: ComAtprotoAdminDefsRepoRef | ComAtprotoRepoStrongRef | ComAtprotoAdminDefsRepoBlobRef;
  readonly takedown?: ComAtprotoAdminDefsStatusAttr;
  readonly deactivated?: ComAtprotoAdminDefsStatusAttr;
}
export interface Inline559Encoded {
  readonly subject: ComAtprotoAdminDefsRepoRefEncoded | ComAtprotoRepoStrongRefEncoded | ComAtprotoAdminDefsRepoBlobRefEncoded;
  readonly takedown?: ComAtprotoAdminDefsStatusAttrEncoded;
  readonly deactivated?: ComAtprotoAdminDefsStatusAttrEncoded;
}
export const Inline559: Schema.Schema<Inline559, Inline559Encoded, never> = Schema.Struct({
  subject: Schema.Union(Schema.suspend(() => ComAtprotoAdminDefsRepoRef), Schema.suspend(() => ComAtprotoRepoStrongRef), Schema.suspend(() => ComAtprotoAdminDefsRepoBlobRef)),
  takedown: Schema.optional(Schema.suspend(() => ComAtprotoAdminDefsStatusAttr)),
  deactivated: Schema.optional(Schema.suspend(() => ComAtprotoAdminDefsStatusAttr)),
});

export interface Inline562 {
  readonly cursor?: string;
  readonly accounts: ReadonlyArray<ComAtprotoAdminDefsAccountView>;
}
export interface Inline562Encoded {
  readonly cursor?: string;
  readonly accounts: ReadonlyArray<ComAtprotoAdminDefsAccountViewEncoded>;
}
export const Inline562: Schema.Schema<Inline562, Inline562Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  accounts: Schema.Array(Schema.suspend(() => ComAtprotoAdminDefsAccountView)),
});

export interface Inline565 {
  readonly sent: boolean;
}
export interface Inline565Encoded {
  readonly sent: boolean;
}
export const Inline565: Schema.Schema<Inline565, Inline565Encoded, never> = Schema.Struct({
  sent: Schema.Boolean,
});

export interface Inline576 {
  readonly subject: ComAtprotoAdminDefsRepoRef | ComAtprotoRepoStrongRef | ComAtprotoAdminDefsRepoBlobRef;
  readonly takedown?: ComAtprotoAdminDefsStatusAttr;
}
export interface Inline576Encoded {
  readonly subject: ComAtprotoAdminDefsRepoRefEncoded | ComAtprotoRepoStrongRefEncoded | ComAtprotoAdminDefsRepoBlobRefEncoded;
  readonly takedown?: ComAtprotoAdminDefsStatusAttrEncoded;
}
export const Inline576: Schema.Schema<Inline576, Inline576Encoded, never> = Schema.Struct({
  subject: Schema.Union(Schema.suspend(() => ComAtprotoAdminDefsRepoRef), Schema.suspend(() => ComAtprotoRepoStrongRef), Schema.suspend(() => ComAtprotoAdminDefsRepoBlobRef)),
  takedown: Schema.optional(Schema.suspend(() => ComAtprotoAdminDefsStatusAttr)),
});

export interface Inline579 {
  readonly rotationKeys?: ReadonlyArray<string>;
  readonly alsoKnownAs?: ReadonlyArray<string>;
  readonly verificationMethods?: unknown;
  readonly services?: unknown;
}
export interface Inline579Encoded {
  readonly rotationKeys?: ReadonlyArray<string>;
  readonly alsoKnownAs?: ReadonlyArray<string>;
  readonly verificationMethods?: unknown;
  readonly services?: unknown;
}
export const Inline579: Schema.Schema<Inline579, Inline579Encoded, never> = Schema.Struct({
  rotationKeys: Schema.optional(Schema.Array(Schema.String)),
  alsoKnownAs: Schema.optional(Schema.Array(Schema.String)),
  verificationMethods: Schema.optional(Schema.Unknown),
  services: Schema.optional(Schema.Unknown),
});

export interface Inline586 {
  readonly didDoc: unknown;
}
export interface Inline586Encoded {
  readonly didDoc: unknown;
}
export const Inline586: Schema.Schema<Inline586, Inline586Encoded, never> = Schema.Struct({
  didDoc: Schema.Unknown,
});

export interface Inline589 {
  readonly did: string;
}
export interface Inline589Encoded {
  readonly did: string;
}
export const Inline589: Schema.Schema<Inline589, Inline589Encoded, never> = Schema.Struct({
  did: Schema.String,
});

export interface Inline594 {
  readonly operation: unknown;
}
export interface Inline594Encoded {
  readonly operation: unknown;
}
export const Inline594: Schema.Schema<Inline594, Inline594Encoded, never> = Schema.Struct({
  operation: Schema.Unknown,
});

export interface Inline601 {
  readonly cursor?: string;
  readonly labels: ReadonlyArray<ComAtprotoLabelDefsLabel>;
}
export interface Inline601Encoded {
  readonly cursor?: string;
  readonly labels: ReadonlyArray<ComAtprotoLabelDefsLabelEncoded>;
}
export const Inline601: Schema.Schema<Inline601, Inline601Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  labels: Schema.Array(Schema.suspend(() => ComAtprotoLabelDefsLabel)),
});

export interface Inline604 {
  readonly cid: string;
  readonly schema: ComAtprotoLexiconSchema;
  readonly uri: string;
}
export interface Inline604Encoded {
  readonly cid: string;
  readonly schema: ComAtprotoLexiconSchemaEncoded;
  readonly uri: string;
}
export const Inline604: Schema.Schema<Inline604, Inline604Encoded, never> = Schema.Struct({
  cid: Schema.String,
  schema: Schema.suspend(() => ComAtprotoLexiconSchema),
  uri: Schema.String,
});

export interface Inline607 {
  readonly id: number;
  readonly reasonType: ComAtprotoModerationDefsReasonType;
  readonly reason?: string;
  readonly subject: ComAtprotoAdminDefsRepoRef | ComAtprotoRepoStrongRef;
  readonly reportedBy: string;
  readonly createdAt: string;
}
export interface Inline607Encoded {
  readonly id: number;
  readonly reasonType: ComAtprotoModerationDefsReasonTypeEncoded;
  readonly reason?: string;
  readonly subject: ComAtprotoAdminDefsRepoRefEncoded | ComAtprotoRepoStrongRefEncoded;
  readonly reportedBy: string;
  readonly createdAt: string;
}
export const Inline607: Schema.Schema<Inline607, Inline607Encoded, never> = Schema.Struct({
  id: Schema.Number,
  reasonType: Schema.suspend(() => ComAtprotoModerationDefsReasonType),
  reason: Schema.optional(Schema.String),
  subject: Schema.Union(Schema.suspend(() => ComAtprotoAdminDefsRepoRef), Schema.suspend(() => ComAtprotoRepoStrongRef)),
  reportedBy: Schema.String,
  createdAt: Schema.String,
});

export interface Inline610 {
  readonly commit?: ComAtprotoRepoDefsCommitMeta;
  readonly results?: ReadonlyArray<ComAtprotoRepoApplyWritesCreateResult | ComAtprotoRepoApplyWritesUpdateResult | ComAtprotoRepoApplyWritesDeleteResult>;
}
export interface Inline610Encoded {
  readonly commit?: ComAtprotoRepoDefsCommitMetaEncoded;
  readonly results?: ReadonlyArray<ComAtprotoRepoApplyWritesCreateResultEncoded | ComAtprotoRepoApplyWritesUpdateResultEncoded | ComAtprotoRepoApplyWritesDeleteResultEncoded>;
}
export const Inline610: Schema.Schema<Inline610, Inline610Encoded, never> = Schema.Struct({
  commit: Schema.optional(Schema.suspend(() => ComAtprotoRepoDefsCommitMeta)),
  results: Schema.optional(Schema.Array(Schema.Union(Schema.suspend(() => ComAtprotoRepoApplyWritesCreateResult), Schema.suspend(() => ComAtprotoRepoApplyWritesUpdateResult), Schema.suspend(() => ComAtprotoRepoApplyWritesDeleteResult)))),
});

export interface Inline613 {
  readonly uri: string;
  readonly cid: string;
  readonly commit?: ComAtprotoRepoDefsCommitMeta;
  readonly validationStatus?: string;
}
export interface Inline613Encoded {
  readonly uri: string;
  readonly cid: string;
  readonly commit?: ComAtprotoRepoDefsCommitMetaEncoded;
  readonly validationStatus?: string;
}
export const Inline613: Schema.Schema<Inline613, Inline613Encoded, never> = Schema.Struct({
  uri: Schema.String,
  cid: Schema.String,
  commit: Schema.optional(Schema.suspend(() => ComAtprotoRepoDefsCommitMeta)),
  validationStatus: Schema.optional(Schema.String),
});

export interface Inline616 {
  readonly commit?: ComAtprotoRepoDefsCommitMeta;
}
export interface Inline616Encoded {
  readonly commit?: ComAtprotoRepoDefsCommitMetaEncoded;
}
export const Inline616: Schema.Schema<Inline616, Inline616Encoded, never> = Schema.Struct({
  commit: Schema.optional(Schema.suspend(() => ComAtprotoRepoDefsCommitMeta)),
});

export interface Inline619 {
  readonly handle: string;
  readonly did: string;
  readonly didDoc: unknown;
  readonly collections: ReadonlyArray<string>;
  readonly handleIsCorrect: boolean;
}
export interface Inline619Encoded {
  readonly handle: string;
  readonly did: string;
  readonly didDoc: unknown;
  readonly collections: ReadonlyArray<string>;
  readonly handleIsCorrect: boolean;
}
export const Inline619: Schema.Schema<Inline619, Inline619Encoded, never> = Schema.Struct({
  handle: Schema.String,
  did: Schema.String,
  didDoc: Schema.Unknown,
  collections: Schema.Array(Schema.String),
  handleIsCorrect: Schema.Boolean,
});

export interface Inline622 {
  readonly uri: string;
  readonly cid?: string;
  readonly value: unknown;
}
export interface Inline622Encoded {
  readonly uri: string;
  readonly cid?: string;
  readonly value: unknown;
}
export const Inline622: Schema.Schema<Inline622, Inline622Encoded, never> = Schema.Struct({
  uri: Schema.String,
  cid: Schema.optional(Schema.String),
  value: Schema.Unknown,
});

export interface Inline627 {
  readonly cursor?: string;
  readonly blobs: ReadonlyArray<ComAtprotoRepoListMissingBlobsRecordBlob>;
}
export interface Inline627Encoded {
  readonly cursor?: string;
  readonly blobs: ReadonlyArray<ComAtprotoRepoListMissingBlobsRecordBlobEncoded>;
}
export const Inline627: Schema.Schema<Inline627, Inline627Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  blobs: Schema.Array(Schema.suspend(() => ComAtprotoRepoListMissingBlobsRecordBlob)),
});

export interface Inline630 {
  readonly cursor?: string;
  readonly records: ReadonlyArray<ComAtprotoRepoListRecordsRecord>;
}
export interface Inline630Encoded {
  readonly cursor?: string;
  readonly records: ReadonlyArray<ComAtprotoRepoListRecordsRecordEncoded>;
}
export const Inline630: Schema.Schema<Inline630, Inline630Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  records: Schema.Array(Schema.suspend(() => ComAtprotoRepoListRecordsRecord)),
});

export interface Inline633 {
  readonly uri: string;
  readonly cid: string;
  readonly commit?: ComAtprotoRepoDefsCommitMeta;
  readonly validationStatus?: string;
}
export interface Inline633Encoded {
  readonly uri: string;
  readonly cid: string;
  readonly commit?: ComAtprotoRepoDefsCommitMetaEncoded;
  readonly validationStatus?: string;
}
export const Inline633: Schema.Schema<Inline633, Inline633Encoded, never> = Schema.Struct({
  uri: Schema.String,
  cid: Schema.String,
  commit: Schema.optional(Schema.suspend(() => ComAtprotoRepoDefsCommitMeta)),
  validationStatus: Schema.optional(Schema.String),
});

export interface Inline636 {
  readonly blob: unknown;
}
export interface Inline636Encoded {
  readonly blob: unknown;
}
export const Inline636: Schema.Schema<Inline636, Inline636Encoded, never> = Schema.Struct({
  blob: Schema.Unknown,
});

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
export interface Inline641Encoded {
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
export const Inline641: Schema.Schema<Inline641, Inline641Encoded, never> = Schema.Struct({
  activated: Schema.Boolean,
  validDid: Schema.Boolean,
  repoCommit: Schema.String,
  repoRev: Schema.String,
  repoBlocks: Schema.Number,
  indexedRecords: Schema.Number,
  privateStateValues: Schema.Number,
  expectedBlobs: Schema.Number,
  importedBlobs: Schema.Number,
});

export interface Inline646 {
  readonly accessJwt: string;
  readonly refreshJwt: string;
  readonly handle: string;
  readonly did: string;
  readonly didDoc?: unknown;
}
export interface Inline646Encoded {
  readonly accessJwt: string;
  readonly refreshJwt: string;
  readonly handle: string;
  readonly did: string;
  readonly didDoc?: unknown;
}
export const Inline646: Schema.Schema<Inline646, Inline646Encoded, never> = Schema.Struct({
  accessJwt: Schema.String,
  refreshJwt: Schema.String,
  handle: Schema.String,
  did: Schema.String,
  didDoc: Schema.optional(Schema.Unknown),
});

export interface Inline651 {
  readonly code: string;
}
export interface Inline651Encoded {
  readonly code: string;
}
export const Inline651: Schema.Schema<Inline651, Inline651Encoded, never> = Schema.Struct({
  code: Schema.String,
});

export interface Inline654 {
  readonly codes: ReadonlyArray<ComAtprotoServerCreateInviteCodesAccountCodes>;
}
export interface Inline654Encoded {
  readonly codes: ReadonlyArray<ComAtprotoServerCreateInviteCodesAccountCodesEncoded>;
}
export const Inline654: Schema.Schema<Inline654, Inline654Encoded, never> = Schema.Struct({
  codes: Schema.Array(Schema.suspend(() => ComAtprotoServerCreateInviteCodesAccountCodes)),
});

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
export interface Inline657Encoded {
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
export const Inline657: Schema.Schema<Inline657, Inline657Encoded, never> = Schema.Struct({
  accessJwt: Schema.String,
  refreshJwt: Schema.String,
  handle: Schema.String,
  did: Schema.String,
  didDoc: Schema.optional(Schema.Unknown),
  email: Schema.optional(Schema.String),
  emailConfirmed: Schema.optional(Schema.Boolean),
  emailAuthFactor: Schema.optional(Schema.Boolean),
  active: Schema.optional(Schema.Boolean),
  status: Schema.optional(Schema.String),
});

export interface Inline664 {
  readonly inviteCodeRequired?: boolean;
  readonly phoneVerificationRequired?: boolean;
  readonly blobUploadLimit?: number;
  readonly availableUserDomains: ReadonlyArray<string>;
  readonly links?: ComAtprotoServerDescribeServerLinks;
  readonly contact?: ComAtprotoServerDescribeServerContact;
  readonly did: string;
}
export interface Inline664Encoded {
  readonly inviteCodeRequired?: boolean;
  readonly phoneVerificationRequired?: boolean;
  readonly blobUploadLimit?: number;
  readonly availableUserDomains: ReadonlyArray<string>;
  readonly links?: ComAtprotoServerDescribeServerLinksEncoded;
  readonly contact?: ComAtprotoServerDescribeServerContactEncoded;
  readonly did: string;
}
export const Inline664: Schema.Schema<Inline664, Inline664Encoded, never> = Schema.Struct({
  inviteCodeRequired: Schema.optional(Schema.Boolean),
  phoneVerificationRequired: Schema.optional(Schema.Boolean),
  blobUploadLimit: Schema.optional(Schema.Number),
  availableUserDomains: Schema.Array(Schema.String),
  links: Schema.optional(Schema.suspend(() => ComAtprotoServerDescribeServerLinks)),
  contact: Schema.optional(Schema.suspend(() => ComAtprotoServerDescribeServerContact)),
  did: Schema.String,
});

export interface Inline667 {
  readonly codes: ReadonlyArray<ComAtprotoServerDefsInviteCode>;
}
export interface Inline667Encoded {
  readonly codes: ReadonlyArray<ComAtprotoServerDefsInviteCodeEncoded>;
}
export const Inline667: Schema.Schema<Inline667, Inline667Encoded, never> = Schema.Struct({
  codes: Schema.Array(Schema.suspend(() => ComAtprotoServerDefsInviteCode)),
});

export interface Inline670 {
  readonly token: string;
}
export interface Inline670Encoded {
  readonly token: string;
}
export const Inline670: Schema.Schema<Inline670, Inline670Encoded, never> = Schema.Struct({
  token: Schema.String,
});

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
export interface Inline673Encoded {
  readonly handle: string;
  readonly did: string;
  readonly didDoc?: unknown;
  readonly email?: string;
  readonly emailConfirmed?: boolean;
  readonly emailAuthFactor?: boolean;
  readonly active?: boolean;
  readonly status?: string;
}
export const Inline673: Schema.Schema<Inline673, Inline673Encoded, never> = Schema.Struct({
  handle: Schema.String,
  did: Schema.String,
  didDoc: Schema.optional(Schema.Unknown),
  email: Schema.optional(Schema.String),
  emailConfirmed: Schema.optional(Schema.Boolean),
  emailAuthFactor: Schema.optional(Schema.Boolean),
  active: Schema.optional(Schema.Boolean),
  status: Schema.optional(Schema.String),
});

export interface Inline676 {
  readonly passwords: ReadonlyArray<ComAtprotoServerListAppPasswordsAppPassword>;
}
export interface Inline676Encoded {
  readonly passwords: ReadonlyArray<ComAtprotoServerListAppPasswordsAppPasswordEncoded>;
}
export const Inline676: Schema.Schema<Inline676, Inline676Encoded, never> = Schema.Struct({
  passwords: Schema.Array(Schema.suspend(() => ComAtprotoServerListAppPasswordsAppPassword)),
});

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
export interface Inline679Encoded {
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
export const Inline679: Schema.Schema<Inline679, Inline679Encoded, never> = Schema.Struct({
  accessJwt: Schema.String,
  refreshJwt: Schema.String,
  handle: Schema.String,
  did: Schema.String,
  didDoc: Schema.optional(Schema.Unknown),
  email: Schema.optional(Schema.String),
  emailConfirmed: Schema.optional(Schema.Boolean),
  emailAuthFactor: Schema.optional(Schema.Boolean),
  active: Schema.optional(Schema.Boolean),
  status: Schema.optional(Schema.String),
});

export interface Inline686 {
  readonly tokenRequired: boolean;
}
export interface Inline686Encoded {
  readonly tokenRequired: boolean;
}
export const Inline686: Schema.Schema<Inline686, Inline686Encoded, never> = Schema.Struct({
  tokenRequired: Schema.Boolean,
});

export interface Inline691 {
  readonly signingKey: string;
}
export interface Inline691Encoded {
  readonly signingKey: string;
}
export const Inline691: Schema.Schema<Inline691, Inline691Encoded, never> = Schema.Struct({
  signingKey: Schema.String,
});

export interface Inline704 {
  readonly root: string;
}
export interface Inline704Encoded {
  readonly root: string;
}
export const Inline704: Schema.Schema<Inline704, Inline704Encoded, never> = Schema.Struct({
  root: Schema.String,
});

export interface Inline707 {
  readonly hostname: string;
  readonly seq?: number;
  readonly accountCount?: number;
  readonly status?: ComAtprotoSyncDefsHostStatus;
}
export interface Inline707Encoded {
  readonly hostname: string;
  readonly seq?: number;
  readonly accountCount?: number;
  readonly status?: ComAtprotoSyncDefsHostStatusEncoded;
}
export const Inline707: Schema.Schema<Inline707, Inline707Encoded, never> = Schema.Struct({
  hostname: Schema.String,
  seq: Schema.optional(Schema.Number),
  accountCount: Schema.optional(Schema.Number),
  status: Schema.optional(Schema.suspend(() => ComAtprotoSyncDefsHostStatus)),
});

export interface Inline710 {
  readonly cid: string;
  readonly rev: string;
}
export interface Inline710Encoded {
  readonly cid: string;
  readonly rev: string;
}
export const Inline710: Schema.Schema<Inline710, Inline710Encoded, never> = Schema.Struct({
  cid: Schema.String,
  rev: Schema.String,
});

export interface Inline715 {
  readonly did: string;
  readonly active: boolean;
  readonly status?: string;
  readonly rev?: string;
}
export interface Inline715Encoded {
  readonly did: string;
  readonly active: boolean;
  readonly status?: string;
  readonly rev?: string;
}
export const Inline715: Schema.Schema<Inline715, Inline715Encoded, never> = Schema.Struct({
  did: Schema.String,
  active: Schema.Boolean,
  status: Schema.optional(Schema.String),
  rev: Schema.optional(Schema.String),
});

export interface Inline718 {
  readonly cursor?: string;
  readonly cids: ReadonlyArray<string>;
}
export interface Inline718Encoded {
  readonly cursor?: string;
  readonly cids: ReadonlyArray<string>;
}
export const Inline718: Schema.Schema<Inline718, Inline718Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  cids: Schema.Array(Schema.String),
});

export interface Inline721 {
  readonly cursor?: string;
  readonly hosts: ReadonlyArray<ComAtprotoSyncListHostsHost>;
}
export interface Inline721Encoded {
  readonly cursor?: string;
  readonly hosts: ReadonlyArray<ComAtprotoSyncListHostsHostEncoded>;
}
export const Inline721: Schema.Schema<Inline721, Inline721Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  hosts: Schema.Array(Schema.suspend(() => ComAtprotoSyncListHostsHost)),
});

export interface Inline724 {
  readonly cursor?: string;
  readonly repos: ReadonlyArray<ComAtprotoSyncListReposRepo>;
}
export interface Inline724Encoded {
  readonly cursor?: string;
  readonly repos: ReadonlyArray<ComAtprotoSyncListReposRepoEncoded>;
}
export const Inline724: Schema.Schema<Inline724, Inline724Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  repos: Schema.Array(Schema.suspend(() => ComAtprotoSyncListReposRepo)),
});

export interface Inline727 {
  readonly cursor?: string;
  readonly repos: ReadonlyArray<ComAtprotoSyncListReposByCollectionRepo>;
}
export interface Inline727Encoded {
  readonly cursor?: string;
  readonly repos: ReadonlyArray<ComAtprotoSyncListReposByCollectionRepoEncoded>;
}
export const Inline727: Schema.Schema<Inline727, Inline727Encoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  repos: Schema.Array(Schema.suspend(() => ComAtprotoSyncListReposByCollectionRepo)),
});

export interface Inline734 {

}
export interface Inline734Encoded {

}
export const Inline734: Schema.Schema<Inline734, Inline734Encoded, never> = Schema.Struct({

});

export interface Inline737 {
  readonly handle: string;
  readonly result: ComAtprotoTempCheckHandleAvailabilityResultAvailable | ComAtprotoTempCheckHandleAvailabilityResultUnavailable;
}
export interface Inline737Encoded {
  readonly handle: string;
  readonly result: ComAtprotoTempCheckHandleAvailabilityResultAvailableEncoded | ComAtprotoTempCheckHandleAvailabilityResultUnavailableEncoded;
}
export const Inline737: Schema.Schema<Inline737, Inline737Encoded, never> = Schema.Struct({
  handle: Schema.String,
  result: Schema.Union(Schema.suspend(() => ComAtprotoTempCheckHandleAvailabilityResultAvailable), Schema.suspend(() => ComAtprotoTempCheckHandleAvailabilityResultUnavailable)),
});

export interface Inline740 {
  readonly activated: boolean;
  readonly placeInQueue?: number;
  readonly estimatedTimeMs?: number;
}
export interface Inline740Encoded {
  readonly activated: boolean;
  readonly placeInQueue?: number;
  readonly estimatedTimeMs?: number;
}
export const Inline740: Schema.Schema<Inline740, Inline740Encoded, never> = Schema.Struct({
  activated: Schema.Boolean,
  placeInQueue: Schema.optional(Schema.Number),
  estimatedTimeMs: Schema.optional(Schema.Number),
});

export interface Inline743 {
  readonly scope: string;
}
export interface Inline743Encoded {
  readonly scope: string;
}
export const Inline743: Schema.Schema<Inline743, Inline743Encoded, never> = Schema.Struct({
  scope: Schema.String,
});

export interface Inline746 {
  readonly labels: ReadonlyArray<ComAtprotoLabelDefsLabel>;
}
export interface Inline746Encoded {
  readonly labels: ReadonlyArray<ComAtprotoLabelDefsLabelEncoded>;
}
export const Inline746: Schema.Schema<Inline746, Inline746Encoded, never> = Schema.Struct({
  labels: Schema.Array(Schema.suspend(() => ComAtprotoLabelDefsLabel)),
});

export interface ListActivitySubscriptionsParams {
  readonly limit?: number;
  readonly cursor?: string;
}
export interface ListActivitySubscriptionsParamsEncoded {
  readonly limit?: number;
  readonly cursor?: string;
}
export const ListActivitySubscriptionsParams: Schema.Schema<ListActivitySubscriptionsParams, ListActivitySubscriptionsParamsEncoded, never> = Schema.Struct({
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
});

export interface ListActivitySubscriptionsResponse {
  readonly data: Inline434;
}
export interface ListActivitySubscriptionsResponseEncoded {
  readonly data: Inline434Encoded;
}
export const ListActivitySubscriptionsResponse: Schema.Schema<ListActivitySubscriptionsResponse, ListActivitySubscriptionsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline434),
});

export interface ListAppPasswordsParams {

}
export interface ListAppPasswordsParamsEncoded {

}
export const ListAppPasswordsParams: Schema.Schema<ListAppPasswordsParams, ListAppPasswordsParamsEncoded, never> = Schema.Struct({

});

export interface ListAppPasswordsResponse {
  readonly data: Inline676;
}
export interface ListAppPasswordsResponseEncoded {
  readonly data: Inline676Encoded;
}
export const ListAppPasswordsResponse: Schema.Schema<ListAppPasswordsResponse, ListAppPasswordsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline676),
});

export interface ListBlobsParams {
  readonly did: string;
  readonly since?: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export interface ListBlobsParamsEncoded {
  readonly did: string;
  readonly since?: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export const ListBlobsParams: Schema.Schema<ListBlobsParams, ListBlobsParamsEncoded, never> = Schema.Struct({
  did: Schema.String,
  since: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
});

export interface ListBlobsResponse {
  readonly data: Inline718;
}
export interface ListBlobsResponseEncoded {
  readonly data: Inline718Encoded;
}
export const ListBlobsResponse: Schema.Schema<ListBlobsResponse, ListBlobsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline718),
});

export interface ListHostsParams {
  readonly limit?: number;
  readonly cursor?: string;
}
export interface ListHostsParamsEncoded {
  readonly limit?: number;
  readonly cursor?: string;
}
export const ListHostsParams: Schema.Schema<ListHostsParams, ListHostsParamsEncoded, never> = Schema.Struct({
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
});

export interface ListHostsResponse {
  readonly data: Inline721;
}
export interface ListHostsResponseEncoded {
  readonly data: Inline721Encoded;
}
export const ListHostsResponse: Schema.Schema<ListHostsResponse, ListHostsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline721),
});

export interface ListMissingBlobsParams {
  readonly limit?: number;
  readonly cursor?: string;
}
export interface ListMissingBlobsParamsEncoded {
  readonly limit?: number;
  readonly cursor?: string;
}
export const ListMissingBlobsParams: Schema.Schema<ListMissingBlobsParams, ListMissingBlobsParamsEncoded, never> = Schema.Struct({
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
});

export interface ListMissingBlobsResponse {
  readonly data: Inline627;
}
export interface ListMissingBlobsResponseEncoded {
  readonly data: Inline627Encoded;
}
export const ListMissingBlobsResponse: Schema.Schema<ListMissingBlobsResponse, ListMissingBlobsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline627),
});

export interface ListNotificationsParams {
  readonly reasons?: ReadonlyArray<string>;
  readonly limit?: number;
  readonly priority?: boolean;
  readonly cursor?: string;
  readonly seenAt?: string;
}
export interface ListNotificationsParamsEncoded {
  readonly reasons?: ReadonlyArray<string>;
  readonly limit?: number;
  readonly priority?: boolean;
  readonly cursor?: string;
  readonly seenAt?: string;
}
export const ListNotificationsParams: Schema.Schema<ListNotificationsParams, ListNotificationsParamsEncoded, never> = Schema.Struct({
  reasons: Schema.optional(Schema.Array(Schema.String)),
  limit: Schema.optional(Schema.Number),
  priority: Schema.optional(Schema.Boolean),
  cursor: Schema.optional(Schema.String),
  seenAt: Schema.optional(Schema.String),
});

export interface ListNotificationsResponse {
  readonly data: Inline437;
}
export interface ListNotificationsResponseEncoded {
  readonly data: Inline437Encoded;
}
export const ListNotificationsResponse: Schema.Schema<ListNotificationsResponse, ListNotificationsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline437),
});

export interface ListRecordsParams {
  readonly repo: string;
  readonly collection: string;
  readonly limit?: number;
  readonly cursor?: string;
  readonly reverse?: boolean;
}
export interface ListRecordsParamsEncoded {
  readonly repo: string;
  readonly collection: string;
  readonly limit?: number;
  readonly cursor?: string;
  readonly reverse?: boolean;
}
export const ListRecordsParams: Schema.Schema<ListRecordsParams, ListRecordsParamsEncoded, never> = Schema.Struct({
  repo: Schema.String,
  collection: Schema.String,
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
  reverse: Schema.optional(Schema.Boolean),
});

export interface ListRecordsResponse {
  readonly data: Inline630;
}
export interface ListRecordsResponseEncoded {
  readonly data: Inline630Encoded;
}
export const ListRecordsResponse: Schema.Schema<ListRecordsResponse, ListRecordsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline630),
});

export interface ListReposByCollectionParams {
  readonly collection: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export interface ListReposByCollectionParamsEncoded {
  readonly collection: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export const ListReposByCollectionParams: Schema.Schema<ListReposByCollectionParams, ListReposByCollectionParamsEncoded, never> = Schema.Struct({
  collection: Schema.String,
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
});

export interface ListReposByCollectionResponse {
  readonly data: Inline727;
}
export interface ListReposByCollectionResponseEncoded {
  readonly data: Inline727Encoded;
}
export const ListReposByCollectionResponse: Schema.Schema<ListReposByCollectionResponse, ListReposByCollectionResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline727),
});

export interface ListReposParams {
  readonly limit?: number;
  readonly cursor?: string;
}
export interface ListReposParamsEncoded {
  readonly limit?: number;
  readonly cursor?: string;
}
export const ListReposParams: Schema.Schema<ListReposParams, ListReposParamsEncoded, never> = Schema.Struct({
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
});

export interface ListReposResponse {
  readonly data: Inline724;
}
export interface ListReposResponseEncoded {
  readonly data: Inline724Encoded;
}
export const ListReposResponse: Schema.Schema<ListReposResponse, ListReposResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline724),
});

export interface MuteActorListParams {
  readonly list: string;
}
export interface MuteActorListParamsEncoded {
  readonly list: string;
}
export const MuteActorListParams: Schema.Schema<MuteActorListParams, MuteActorListParamsEncoded, never> = Schema.Struct({
  list: Schema.String,
});

export interface MuteActorListResponse {

}
export interface MuteActorListResponseEncoded {

}
export const MuteActorListResponse: Schema.Schema<MuteActorListResponse, MuteActorListResponseEncoded, never> = Schema.Struct({

});

export interface MuteActorParams {
  readonly actor: string;
  readonly onlyReposts?: boolean;
  readonly onlyQuoteposts?: boolean;
}
export interface MuteActorParamsEncoded {
  readonly actor: string;
  readonly onlyReposts?: boolean;
  readonly onlyQuoteposts?: boolean;
}
export const MuteActorParams: Schema.Schema<MuteActorParams, MuteActorParamsEncoded, never> = Schema.Struct({
  actor: Schema.String,
  onlyReposts: Schema.optional(Schema.Boolean),
  onlyQuoteposts: Schema.optional(Schema.Boolean),
});

export interface MuteActorResponse {

}
export interface MuteActorResponseEncoded {

}
export const MuteActorResponse: Schema.Schema<MuteActorResponse, MuteActorResponseEncoded, never> = Schema.Struct({

});

export interface MuteThreadParams {
  readonly root: string;
}
export interface MuteThreadParamsEncoded {
  readonly root: string;
}
export const MuteThreadParams: Schema.Schema<MuteThreadParams, MuteThreadParamsEncoded, never> = Schema.Struct({
  root: Schema.String,
});

export interface MuteThreadResponse {

}
export interface MuteThreadResponseEncoded {

}
export const MuteThreadResponse: Schema.Schema<MuteThreadResponse, MuteThreadResponseEncoded, never> = Schema.Struct({

});

export interface NotifyOfUpdateParams {
  readonly hostname: string;
}
export interface NotifyOfUpdateParamsEncoded {
  readonly hostname: string;
}
export const NotifyOfUpdateParams: Schema.Schema<NotifyOfUpdateParams, NotifyOfUpdateParamsEncoded, never> = Schema.Struct({
  hostname: Schema.String,
});

export interface NotifyOfUpdateResponse {

}
export interface NotifyOfUpdateResponseEncoded {

}
export const NotifyOfUpdateResponse: Schema.Schema<NotifyOfUpdateResponse, NotifyOfUpdateResponseEncoded, never> = Schema.Struct({

});

export interface PutActivitySubscriptionParams {
  readonly subject: string;
  readonly activitySubscription: AppBskyNotificationDefsActivitySubscription;
}
export interface PutActivitySubscriptionParamsEncoded {
  readonly subject: string;
  readonly activitySubscription: AppBskyNotificationDefsActivitySubscriptionEncoded;
}
export const PutActivitySubscriptionParams: Schema.Schema<PutActivitySubscriptionParams, PutActivitySubscriptionParamsEncoded, never> = Schema.Struct({
  subject: Schema.String,
  activitySubscription: Schema.suspend(() => AppBskyNotificationDefsActivitySubscription),
});

export interface PutActivitySubscriptionResponse {
  readonly data: Inline440;
}
export interface PutActivitySubscriptionResponseEncoded {
  readonly data: Inline440Encoded;
}
export const PutActivitySubscriptionResponse: Schema.Schema<PutActivitySubscriptionResponse, PutActivitySubscriptionResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline440),
});

export interface PutPreferencesParams {
  readonly preferences: AppBskyActorDefsPreferences;
}
export interface PutPreferencesParamsEncoded {
  readonly preferences: AppBskyActorDefsPreferencesEncoded;
}
export const PutPreferencesParams: Schema.Schema<PutPreferencesParams, PutPreferencesParamsEncoded, never> = Schema.Struct({
  preferences: Schema.suspend(() => AppBskyActorDefsPreferences),
});

export interface PutPreferencesResponse {

}
export interface PutPreferencesResponseEncoded {

}
export const PutPreferencesResponse: Schema.Schema<PutPreferencesResponse, PutPreferencesResponseEncoded, never> = Schema.Struct({

});

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
export interface PutPreferencesV2ParamsEncoded {
  readonly chat?: AppBskyNotificationDefsChatPreferenceEncoded;
  readonly follow?: AppBskyNotificationDefsFilterablePreferenceEncoded;
  readonly like?: AppBskyNotificationDefsFilterablePreferenceEncoded;
  readonly likeViaRepost?: AppBskyNotificationDefsFilterablePreferenceEncoded;
  readonly mention?: AppBskyNotificationDefsFilterablePreferenceEncoded;
  readonly quote?: AppBskyNotificationDefsFilterablePreferenceEncoded;
  readonly reply?: AppBskyNotificationDefsFilterablePreferenceEncoded;
  readonly repost?: AppBskyNotificationDefsFilterablePreferenceEncoded;
  readonly repostViaRepost?: AppBskyNotificationDefsFilterablePreferenceEncoded;
  readonly starterpackJoined?: AppBskyNotificationDefsPreferenceEncoded;
  readonly subscribedPost?: AppBskyNotificationDefsPreferenceEncoded;
  readonly unverified?: AppBskyNotificationDefsPreferenceEncoded;
  readonly verified?: AppBskyNotificationDefsPreferenceEncoded;
}
export const PutPreferencesV2Params: Schema.Schema<PutPreferencesV2Params, PutPreferencesV2ParamsEncoded, never> = Schema.Struct({
  chat: Schema.optional(Schema.suspend(() => AppBskyNotificationDefsChatPreference)),
  follow: Schema.optional(Schema.suspend(() => AppBskyNotificationDefsFilterablePreference)),
  like: Schema.optional(Schema.suspend(() => AppBskyNotificationDefsFilterablePreference)),
  likeViaRepost: Schema.optional(Schema.suspend(() => AppBskyNotificationDefsFilterablePreference)),
  mention: Schema.optional(Schema.suspend(() => AppBskyNotificationDefsFilterablePreference)),
  quote: Schema.optional(Schema.suspend(() => AppBskyNotificationDefsFilterablePreference)),
  reply: Schema.optional(Schema.suspend(() => AppBskyNotificationDefsFilterablePreference)),
  repost: Schema.optional(Schema.suspend(() => AppBskyNotificationDefsFilterablePreference)),
  repostViaRepost: Schema.optional(Schema.suspend(() => AppBskyNotificationDefsFilterablePreference)),
  starterpackJoined: Schema.optional(Schema.suspend(() => AppBskyNotificationDefsPreference)),
  subscribedPost: Schema.optional(Schema.suspend(() => AppBskyNotificationDefsPreference)),
  unverified: Schema.optional(Schema.suspend(() => AppBskyNotificationDefsPreference)),
  verified: Schema.optional(Schema.suspend(() => AppBskyNotificationDefsPreference)),
});

export interface PutPreferencesV2Response {
  readonly data: Inline443;
}
export interface PutPreferencesV2ResponseEncoded {
  readonly data: Inline443Encoded;
}
export const PutPreferencesV2Response: Schema.Schema<PutPreferencesV2Response, PutPreferencesV2ResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline443),
});

export interface PutRecordParams {
  readonly repo: string;
  readonly collection: string;
  readonly rkey: string;
  readonly validate?: boolean;
  readonly record: unknown;
  readonly swapRecord?: string;
  readonly swapCommit?: string;
}
export interface PutRecordParamsEncoded {
  readonly repo: string;
  readonly collection: string;
  readonly rkey: string;
  readonly validate?: boolean;
  readonly record: unknown;
  readonly swapRecord?: string;
  readonly swapCommit?: string;
}
export const PutRecordParams: Schema.Schema<PutRecordParams, PutRecordParamsEncoded, never> = Schema.Struct({
  repo: Schema.String,
  collection: Schema.String,
  rkey: Schema.String,
  validate: Schema.optional(Schema.Boolean),
  record: Schema.Unknown,
  swapRecord: Schema.optional(Schema.String),
  swapCommit: Schema.optional(Schema.String),
});

export interface PutRecordResponse {
  readonly data: Inline633;
}
export interface PutRecordResponseEncoded {
  readonly data: Inline633Encoded;
}
export const PutRecordResponse: Schema.Schema<PutRecordResponse, PutRecordResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline633),
});

export interface QueryLabelsParams {
  readonly uriPatterns: ReadonlyArray<string>;
  readonly sources?: ReadonlyArray<string>;
  readonly limit?: number;
  readonly cursor?: string;
}
export interface QueryLabelsParamsEncoded {
  readonly uriPatterns: ReadonlyArray<string>;
  readonly sources?: ReadonlyArray<string>;
  readonly limit?: number;
  readonly cursor?: string;
}
export const QueryLabelsParams: Schema.Schema<QueryLabelsParams, QueryLabelsParamsEncoded, never> = Schema.Struct({
  uriPatterns: Schema.Array(Schema.String),
  sources: Schema.optional(Schema.Array(Schema.String)),
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
});

export interface QueryLabelsResponse {
  readonly data: Inline601;
}
export interface QueryLabelsResponseEncoded {
  readonly data: Inline601Encoded;
}
export const QueryLabelsResponse: Schema.Schema<QueryLabelsResponse, QueryLabelsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline601),
});

export interface RefreshIdentityParams {
  readonly identifier: string;
}
export interface RefreshIdentityParamsEncoded {
  readonly identifier: string;
}
export const RefreshIdentityParams: Schema.Schema<RefreshIdentityParams, RefreshIdentityParamsEncoded, never> = Schema.Struct({
  identifier: Schema.String,
});

export interface RefreshIdentityResponse {
  readonly data: ComAtprotoIdentityDefsIdentityInfo;
}
export interface RefreshIdentityResponseEncoded {
  readonly data: ComAtprotoIdentityDefsIdentityInfoEncoded;
}
export const RefreshIdentityResponse: Schema.Schema<RefreshIdentityResponse, RefreshIdentityResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => ComAtprotoIdentityDefsIdentityInfo),
});

export interface RefreshSessionParams {

}
export interface RefreshSessionParamsEncoded {

}
export const RefreshSessionParams: Schema.Schema<RefreshSessionParams, RefreshSessionParamsEncoded, never> = Schema.Struct({

});

export interface RefreshSessionResponse {
  readonly data: Inline679;
}
export interface RefreshSessionResponseEncoded {
  readonly data: Inline679Encoded;
}
export const RefreshSessionResponse: Schema.Schema<RefreshSessionResponse, RefreshSessionResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline679),
});

export interface RegisterPushParams {
  readonly serviceDid: string;
  readonly token: string;
  readonly platform: string;
  readonly appId: string;
  readonly ageRestricted?: boolean;
}
export interface RegisterPushParamsEncoded {
  readonly serviceDid: string;
  readonly token: string;
  readonly platform: string;
  readonly appId: string;
  readonly ageRestricted?: boolean;
}
export const RegisterPushParams: Schema.Schema<RegisterPushParams, RegisterPushParamsEncoded, never> = Schema.Struct({
  serviceDid: Schema.String,
  token: Schema.String,
  platform: Schema.String,
  appId: Schema.String,
  ageRestricted: Schema.optional(Schema.Boolean),
});

export interface RegisterPushResponse {

}
export interface RegisterPushResponseEncoded {

}
export const RegisterPushResponse: Schema.Schema<RegisterPushResponse, RegisterPushResponseEncoded, never> = Schema.Struct({

});

export interface RemoveDataParams {

}
export interface RemoveDataParamsEncoded {

}
export const RemoveDataParams: Schema.Schema<RemoveDataParams, RemoveDataParamsEncoded, never> = Schema.Struct({

});

export interface RemoveDataResponse {
  readonly data: Inline280;
}
export interface RemoveDataResponseEncoded {
  readonly data: Inline280Encoded;
}
export const RemoveDataResponse: Schema.Schema<RemoveDataResponse, RemoveDataResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline280),
});

export interface RequestAccountDeleteParams {

}
export interface RequestAccountDeleteParamsEncoded {

}
export const RequestAccountDeleteParams: Schema.Schema<RequestAccountDeleteParams, RequestAccountDeleteParamsEncoded, never> = Schema.Struct({

});

export interface RequestAccountDeleteResponse {

}
export interface RequestAccountDeleteResponseEncoded {

}
export const RequestAccountDeleteResponse: Schema.Schema<RequestAccountDeleteResponse, RequestAccountDeleteResponseEncoded, never> = Schema.Struct({

});

export interface RequestCrawlParams {
  readonly hostname: string;
}
export interface RequestCrawlParamsEncoded {
  readonly hostname: string;
}
export const RequestCrawlParams: Schema.Schema<RequestCrawlParams, RequestCrawlParamsEncoded, never> = Schema.Struct({
  hostname: Schema.String,
});

export interface RequestCrawlResponse {

}
export interface RequestCrawlResponseEncoded {

}
export const RequestCrawlResponse: Schema.Schema<RequestCrawlResponse, RequestCrawlResponseEncoded, never> = Schema.Struct({

});

export interface RequestEmailConfirmationParams {

}
export interface RequestEmailConfirmationParamsEncoded {

}
export const RequestEmailConfirmationParams: Schema.Schema<RequestEmailConfirmationParams, RequestEmailConfirmationParamsEncoded, never> = Schema.Struct({

});

export interface RequestEmailConfirmationResponse {

}
export interface RequestEmailConfirmationResponseEncoded {

}
export const RequestEmailConfirmationResponse: Schema.Schema<RequestEmailConfirmationResponse, RequestEmailConfirmationResponseEncoded, never> = Schema.Struct({

});

export interface RequestEmailUpdateParams {

}
export interface RequestEmailUpdateParamsEncoded {

}
export const RequestEmailUpdateParams: Schema.Schema<RequestEmailUpdateParams, RequestEmailUpdateParamsEncoded, never> = Schema.Struct({

});

export interface RequestEmailUpdateResponse {
  readonly data: Inline686;
}
export interface RequestEmailUpdateResponseEncoded {
  readonly data: Inline686Encoded;
}
export const RequestEmailUpdateResponse: Schema.Schema<RequestEmailUpdateResponse, RequestEmailUpdateResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline686),
});

export interface RequestPasswordResetParams {
  readonly email: string;
}
export interface RequestPasswordResetParamsEncoded {
  readonly email: string;
}
export const RequestPasswordResetParams: Schema.Schema<RequestPasswordResetParams, RequestPasswordResetParamsEncoded, never> = Schema.Struct({
  email: Schema.String,
});

export interface RequestPasswordResetResponse {

}
export interface RequestPasswordResetResponseEncoded {

}
export const RequestPasswordResetResponse: Schema.Schema<RequestPasswordResetResponse, RequestPasswordResetResponseEncoded, never> = Schema.Struct({

});

export interface RequestPhoneVerificationParams {
  readonly phoneNumber: string;
}
export interface RequestPhoneVerificationParamsEncoded {
  readonly phoneNumber: string;
}
export const RequestPhoneVerificationParams: Schema.Schema<RequestPhoneVerificationParams, RequestPhoneVerificationParamsEncoded, never> = Schema.Struct({
  phoneNumber: Schema.String,
});

export interface RequestPhoneVerificationResponse {

}
export interface RequestPhoneVerificationResponseEncoded {

}
export const RequestPhoneVerificationResponse: Schema.Schema<RequestPhoneVerificationResponse, RequestPhoneVerificationResponseEncoded, never> = Schema.Struct({

});

export interface RequestPlcOperationSignatureParams {

}
export interface RequestPlcOperationSignatureParamsEncoded {

}
export const RequestPlcOperationSignatureParams: Schema.Schema<RequestPlcOperationSignatureParams, RequestPlcOperationSignatureParamsEncoded, never> = Schema.Struct({

});

export interface RequestPlcOperationSignatureResponse {

}
export interface RequestPlcOperationSignatureResponseEncoded {

}
export const RequestPlcOperationSignatureResponse: Schema.Schema<RequestPlcOperationSignatureResponse, RequestPlcOperationSignatureResponseEncoded, never> = Schema.Struct({

});

export interface ReserveSigningKeyParams {
  readonly did?: string;
}
export interface ReserveSigningKeyParamsEncoded {
  readonly did?: string;
}
export const ReserveSigningKeyParams: Schema.Schema<ReserveSigningKeyParams, ReserveSigningKeyParamsEncoded, never> = Schema.Struct({
  did: Schema.optional(Schema.String),
});

export interface ReserveSigningKeyResponse {
  readonly data: Inline691;
}
export interface ReserveSigningKeyResponseEncoded {
  readonly data: Inline691Encoded;
}
export const ReserveSigningKeyResponse: Schema.Schema<ReserveSigningKeyResponse, ReserveSigningKeyResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline691),
});

export interface ResetPasswordParams {
  readonly token: string;
  readonly password: string;
}
export interface ResetPasswordParamsEncoded {
  readonly token: string;
  readonly password: string;
}
export const ResetPasswordParams: Schema.Schema<ResetPasswordParams, ResetPasswordParamsEncoded, never> = Schema.Struct({
  token: Schema.String,
  password: Schema.String,
});

export interface ResetPasswordResponse {

}
export interface ResetPasswordResponseEncoded {

}
export const ResetPasswordResponse: Schema.Schema<ResetPasswordResponse, ResetPasswordResponseEncoded, never> = Schema.Struct({

});

export interface ResolveDidParams {
  readonly did: string;
}
export interface ResolveDidParamsEncoded {
  readonly did: string;
}
export const ResolveDidParams: Schema.Schema<ResolveDidParams, ResolveDidParamsEncoded, never> = Schema.Struct({
  did: Schema.String,
});

export interface ResolveDidResponse {
  readonly data: Inline586;
}
export interface ResolveDidResponseEncoded {
  readonly data: Inline586Encoded;
}
export const ResolveDidResponse: Schema.Schema<ResolveDidResponse, ResolveDidResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline586),
});

export interface ResolveHandleParams {
  readonly handle: string;
}
export interface ResolveHandleParamsEncoded {
  readonly handle: string;
}
export const ResolveHandleParams: Schema.Schema<ResolveHandleParams, ResolveHandleParamsEncoded, never> = Schema.Struct({
  handle: Schema.String,
});

export interface ResolveHandleResponse {
  readonly data: Inline589;
}
export interface ResolveHandleResponseEncoded {
  readonly data: Inline589Encoded;
}
export const ResolveHandleResponse: Schema.Schema<ResolveHandleResponse, ResolveHandleResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline589),
});

export interface ResolveIdentityParams {
  readonly identifier: string;
}
export interface ResolveIdentityParamsEncoded {
  readonly identifier: string;
}
export const ResolveIdentityParams: Schema.Schema<ResolveIdentityParams, ResolveIdentityParamsEncoded, never> = Schema.Struct({
  identifier: Schema.String,
});

export interface ResolveIdentityResponse {
  readonly data: ComAtprotoIdentityDefsIdentityInfo;
}
export interface ResolveIdentityResponseEncoded {
  readonly data: ComAtprotoIdentityDefsIdentityInfoEncoded;
}
export const ResolveIdentityResponse: Schema.Schema<ResolveIdentityResponse, ResolveIdentityResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => ComAtprotoIdentityDefsIdentityInfo),
});

export interface ResolveLexiconParams {
  readonly nsid: string;
}
export interface ResolveLexiconParamsEncoded {
  readonly nsid: string;
}
export const ResolveLexiconParams: Schema.Schema<ResolveLexiconParams, ResolveLexiconParamsEncoded, never> = Schema.Struct({
  nsid: Schema.String,
});

export interface ResolveLexiconResponse {
  readonly data: Inline604;
}
export interface ResolveLexiconResponseEncoded {
  readonly data: Inline604Encoded;
}
export const ResolveLexiconResponse: Schema.Schema<ResolveLexiconResponse, ResolveLexiconResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline604),
});

export interface RevokeAccountCredentialsParams {
  readonly account: string;
}
export interface RevokeAccountCredentialsParamsEncoded {
  readonly account: string;
}
export const RevokeAccountCredentialsParams: Schema.Schema<RevokeAccountCredentialsParams, RevokeAccountCredentialsParamsEncoded, never> = Schema.Struct({
  account: Schema.String,
});

export interface RevokeAccountCredentialsResponse {

}
export interface RevokeAccountCredentialsResponseEncoded {

}
export const RevokeAccountCredentialsResponse: Schema.Schema<RevokeAccountCredentialsResponse, RevokeAccountCredentialsResponseEncoded, never> = Schema.Struct({

});

export interface RevokeAppPasswordParams {
  readonly name: string;
}
export interface RevokeAppPasswordParamsEncoded {
  readonly name: string;
}
export const RevokeAppPasswordParams: Schema.Schema<RevokeAppPasswordParams, RevokeAppPasswordParamsEncoded, never> = Schema.Struct({
  name: Schema.String,
});

export interface RevokeAppPasswordResponse {

}
export interface RevokeAppPasswordResponseEncoded {

}
export const RevokeAppPasswordResponse: Schema.Schema<RevokeAppPasswordResponse, RevokeAppPasswordResponseEncoded, never> = Schema.Struct({

});

export interface SearchAccountsParams {
  readonly email?: string;
  readonly cursor?: string;
  readonly limit?: number;
}
export interface SearchAccountsParamsEncoded {
  readonly email?: string;
  readonly cursor?: string;
  readonly limit?: number;
}
export const SearchAccountsParams: Schema.Schema<SearchAccountsParams, SearchAccountsParamsEncoded, never> = Schema.Struct({
  email: Schema.optional(Schema.String),
  cursor: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
});

export interface SearchAccountsResponse {
  readonly data: Inline562;
}
export interface SearchAccountsResponseEncoded {
  readonly data: Inline562Encoded;
}
export const SearchAccountsResponse: Schema.Schema<SearchAccountsResponse, SearchAccountsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline562),
});

export interface SearchActorsParams {
  readonly term?: string;
  readonly q?: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export interface SearchActorsParamsEncoded {
  readonly term?: string;
  readonly q?: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export const SearchActorsParams: Schema.Schema<SearchActorsParams, SearchActorsParamsEncoded, never> = Schema.Struct({
  term: Schema.optional(Schema.String),
  q: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
});

export interface SearchActorsResponse {
  readonly data: Inline248;
}
export interface SearchActorsResponseEncoded {
  readonly data: Inline248Encoded;
}
export const SearchActorsResponse: Schema.Schema<SearchActorsResponse, SearchActorsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline248),
});

export interface SearchActorsSkeletonParams {
  readonly q: string;
  readonly viewer?: string;
  readonly typeahead?: boolean;
  readonly limit?: number;
  readonly cursor?: string;
}
export interface SearchActorsSkeletonParamsEncoded {
  readonly q: string;
  readonly viewer?: string;
  readonly typeahead?: boolean;
  readonly limit?: number;
  readonly cursor?: string;
}
export const SearchActorsSkeletonParams: Schema.Schema<SearchActorsSkeletonParams, SearchActorsSkeletonParamsEncoded, never> = Schema.Struct({
  q: Schema.String,
  viewer: Schema.optional(Schema.String),
  typeahead: Schema.optional(Schema.Boolean),
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
});

export interface SearchActorsSkeletonResponse {
  readonly data: Inline525;
}
export interface SearchActorsSkeletonResponseEncoded {
  readonly data: Inline525Encoded;
}
export const SearchActorsSkeletonResponse: Schema.Schema<SearchActorsSkeletonResponse, SearchActorsSkeletonResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline525),
});

export interface SearchActorsTypeaheadParams {
  readonly term?: string;
  readonly q?: string;
  readonly limit?: number;
}
export interface SearchActorsTypeaheadParamsEncoded {
  readonly term?: string;
  readonly q?: string;
  readonly limit?: number;
}
export const SearchActorsTypeaheadParams: Schema.Schema<SearchActorsTypeaheadParams, SearchActorsTypeaheadParamsEncoded, never> = Schema.Struct({
  term: Schema.optional(Schema.String),
  q: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
});

export interface SearchActorsTypeaheadResponse {
  readonly data: Inline251;
}
export interface SearchActorsTypeaheadResponseEncoded {
  readonly data: Inline251Encoded;
}
export const SearchActorsTypeaheadResponse: Schema.Schema<SearchActorsTypeaheadResponse, SearchActorsTypeaheadResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline251),
});

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
export interface SearchPostsParamsEncoded {
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
export const SearchPostsParams: Schema.Schema<SearchPostsParams, SearchPostsParamsEncoded, never> = Schema.Struct({
  q: Schema.String,
  sort: Schema.optional(Schema.String),
  since: Schema.optional(Schema.String),
  until: Schema.optional(Schema.String),
  mentions: Schema.optional(Schema.String),
  author: Schema.optional(Schema.String),
  lang: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
  tag: Schema.optional(Schema.Array(Schema.String)),
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
});

export interface SearchPostsResponse {
  readonly data: Inline353;
}
export interface SearchPostsResponseEncoded {
  readonly data: Inline353Encoded;
}
export const SearchPostsResponse: Schema.Schema<SearchPostsResponse, SearchPostsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline353),
});

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
export interface SearchPostsSkeletonParamsEncoded {
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
export const SearchPostsSkeletonParams: Schema.Schema<SearchPostsSkeletonParams, SearchPostsSkeletonParamsEncoded, never> = Schema.Struct({
  q: Schema.String,
  sort: Schema.optional(Schema.String),
  since: Schema.optional(Schema.String),
  until: Schema.optional(Schema.String),
  mentions: Schema.optional(Schema.String),
  author: Schema.optional(Schema.String),
  lang: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
  tag: Schema.optional(Schema.Array(Schema.String)),
  viewer: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
});

export interface SearchPostsSkeletonResponse {
  readonly data: Inline528;
}
export interface SearchPostsSkeletonResponseEncoded {
  readonly data: Inline528Encoded;
}
export const SearchPostsSkeletonResponse: Schema.Schema<SearchPostsSkeletonResponse, SearchPostsSkeletonResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline528),
});

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
export interface SearchPostsV2ParamsEncoded {
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
export const SearchPostsV2Params: Schema.Schema<SearchPostsV2Params, SearchPostsV2ParamsEncoded, never> = Schema.Struct({
  cursor: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  query: Schema.optional(Schema.String),
  sort: Schema.optional(Schema.String),
  authors: Schema.optional(Schema.Array(Schema.String)),
  mentions: Schema.optional(Schema.Array(Schema.String)),
  domains: Schema.optional(Schema.Array(Schema.String)),
  urls: Schema.optional(Schema.Array(Schema.String)),
  embeddedAtUris: Schema.optional(Schema.Array(Schema.String)),
  hashtags: Schema.optional(Schema.Array(Schema.String)),
  excludeAuthors: Schema.optional(Schema.Array(Schema.String)),
  excludeMentions: Schema.optional(Schema.Array(Schema.String)),
  excludeDomains: Schema.optional(Schema.Array(Schema.String)),
  excludeUrls: Schema.optional(Schema.Array(Schema.String)),
  excludeEmbeddedAtUris: Schema.optional(Schema.Array(Schema.String)),
  excludeHashtags: Schema.optional(Schema.Array(Schema.String)),
  since: Schema.optional(Schema.String),
  until: Schema.optional(Schema.String),
  allTime: Schema.optional(Schema.Boolean),
  languages: Schema.optional(Schema.Array(Schema.String)),
  excludeLanguages: Schema.optional(Schema.Array(Schema.String)),
  hasMedia: Schema.optional(Schema.Boolean),
  hasVideo: Schema.optional(Schema.Boolean),
  replyParentUri: Schema.optional(Schema.String),
  threadRootUri: Schema.optional(Schema.String),
  excludeReplies: Schema.optional(Schema.Boolean),
  repliesOnly: Schema.optional(Schema.Boolean),
  following: Schema.optional(Schema.Boolean),
  queryLanguage: Schema.optional(Schema.String),
});

export interface SearchPostsV2Response {
  readonly data: Inline356;
}
export interface SearchPostsV2ResponseEncoded {
  readonly data: Inline356Encoded;
}
export const SearchPostsV2Response: Schema.Schema<SearchPostsV2Response, SearchPostsV2ResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline356),
});

export interface SearchStarterPacksParams {
  readonly q: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export interface SearchStarterPacksParamsEncoded {
  readonly q: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export const SearchStarterPacksParams: Schema.Schema<SearchStarterPacksParams, SearchStarterPacksParamsEncoded, never> = Schema.Struct({
  q: Schema.String,
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
});

export interface SearchStarterPacksResponse {
  readonly data: Inline416;
}
export interface SearchStarterPacksResponseEncoded {
  readonly data: Inline416Encoded;
}
export const SearchStarterPacksResponse: Schema.Schema<SearchStarterPacksResponse, SearchStarterPacksResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline416),
});

export interface SearchStarterPacksSkeletonParams {
  readonly q: string;
  readonly viewer?: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export interface SearchStarterPacksSkeletonParamsEncoded {
  readonly q: string;
  readonly viewer?: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export const SearchStarterPacksSkeletonParams: Schema.Schema<SearchStarterPacksSkeletonParams, SearchStarterPacksSkeletonParamsEncoded, never> = Schema.Struct({
  q: Schema.String,
  viewer: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
});

export interface SearchStarterPacksSkeletonResponse {
  readonly data: Inline531;
}
export interface SearchStarterPacksSkeletonResponseEncoded {
  readonly data: Inline531Encoded;
}
export const SearchStarterPacksSkeletonResponse: Schema.Schema<SearchStarterPacksSkeletonResponse, SearchStarterPacksSkeletonResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline531),
});

export interface SearchStarterPacksV2Params {
  readonly q: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export interface SearchStarterPacksV2ParamsEncoded {
  readonly q: string;
  readonly limit?: number;
  readonly cursor?: string;
}
export const SearchStarterPacksV2Params: Schema.Schema<SearchStarterPacksV2Params, SearchStarterPacksV2ParamsEncoded, never> = Schema.Struct({
  q: Schema.String,
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
});

export interface SearchStarterPacksV2Response {
  readonly data: Inline419;
}
export interface SearchStarterPacksV2ResponseEncoded {
  readonly data: Inline419Encoded;
}
export const SearchStarterPacksV2Response: Schema.Schema<SearchStarterPacksV2Response, SearchStarterPacksV2ResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline419),
});

export interface SendEmailParams {
  readonly recipientDid: string;
  readonly content: string;
  readonly subject?: string;
  readonly senderDid: string;
  readonly comment?: string;
}
export interface SendEmailParamsEncoded {
  readonly recipientDid: string;
  readonly content: string;
  readonly subject?: string;
  readonly senderDid: string;
  readonly comment?: string;
}
export const SendEmailParams: Schema.Schema<SendEmailParams, SendEmailParamsEncoded, never> = Schema.Struct({
  recipientDid: Schema.String,
  content: Schema.String,
  subject: Schema.optional(Schema.String),
  senderDid: Schema.String,
  comment: Schema.optional(Schema.String),
});

export interface SendEmailResponse {
  readonly data: Inline565;
}
export interface SendEmailResponseEncoded {
  readonly data: Inline565Encoded;
}
export const SendEmailResponse: Schema.Schema<SendEmailResponse, SendEmailResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline565),
});

export interface SendInteractionsParams {
  readonly feed?: string;
  readonly interactions: ReadonlyArray<AppBskyFeedDefsInteraction>;
}
export interface SendInteractionsParamsEncoded {
  readonly feed?: string;
  readonly interactions: ReadonlyArray<AppBskyFeedDefsInteractionEncoded>;
}
export const SendInteractionsParams: Schema.Schema<SendInteractionsParams, SendInteractionsParamsEncoded, never> = Schema.Struct({
  feed: Schema.optional(Schema.String),
  interactions: Schema.Array(Schema.suspend(() => AppBskyFeedDefsInteraction)),
});

export interface SendInteractionsResponse {
  readonly data: Inline359;
}
export interface SendInteractionsResponseEncoded {
  readonly data: Inline359Encoded;
}
export const SendInteractionsResponse: Schema.Schema<SendInteractionsResponse, SendInteractionsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline359),
});

export interface SendNotificationParams {
  readonly from: string;
  readonly to: string;
}
export interface SendNotificationParamsEncoded {
  readonly from: string;
  readonly to: string;
}
export const SendNotificationParams: Schema.Schema<SendNotificationParams, SendNotificationParamsEncoded, never> = Schema.Struct({
  from: Schema.String,
  to: Schema.String,
});

export interface SendNotificationResponse {
  readonly data: Inline283;
}
export interface SendNotificationResponseEncoded {
  readonly data: Inline283Encoded;
}
export const SendNotificationResponse: Schema.Schema<SendNotificationResponse, SendNotificationResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline283),
});

export interface SignPlcOperationParams {
  readonly token?: string;
  readonly rotationKeys?: ReadonlyArray<string>;
  readonly alsoKnownAs?: ReadonlyArray<string>;
  readonly verificationMethods?: unknown;
  readonly services?: unknown;
}
export interface SignPlcOperationParamsEncoded {
  readonly token?: string;
  readonly rotationKeys?: ReadonlyArray<string>;
  readonly alsoKnownAs?: ReadonlyArray<string>;
  readonly verificationMethods?: unknown;
  readonly services?: unknown;
}
export const SignPlcOperationParams: Schema.Schema<SignPlcOperationParams, SignPlcOperationParamsEncoded, never> = Schema.Struct({
  token: Schema.optional(Schema.String),
  rotationKeys: Schema.optional(Schema.Array(Schema.String)),
  alsoKnownAs: Schema.optional(Schema.Array(Schema.String)),
  verificationMethods: Schema.optional(Schema.Unknown),
  services: Schema.optional(Schema.Unknown),
});

export interface SignPlcOperationResponse {
  readonly data: Inline594;
}
export interface SignPlcOperationResponseEncoded {
  readonly data: Inline594Encoded;
}
export const SignPlcOperationResponse: Schema.Schema<SignPlcOperationResponse, SignPlcOperationResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline594),
});

export interface StartPhoneVerificationParams {
  readonly phone: string;
}
export interface StartPhoneVerificationParamsEncoded {
  readonly phone: string;
}
export const StartPhoneVerificationParams: Schema.Schema<StartPhoneVerificationParams, StartPhoneVerificationParamsEncoded, never> = Schema.Struct({
  phone: Schema.String,
});

export interface StartPhoneVerificationResponse {
  readonly data: Inline286;
}
export interface StartPhoneVerificationResponseEncoded {
  readonly data: Inline286Encoded;
}
export const StartPhoneVerificationResponse: Schema.Schema<StartPhoneVerificationResponse, StartPhoneVerificationResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline286),
});

export interface SubmitPlcOperationParams {
  readonly operation: unknown;
}
export interface SubmitPlcOperationParamsEncoded {
  readonly operation: unknown;
}
export const SubmitPlcOperationParams: Schema.Schema<SubmitPlcOperationParams, SubmitPlcOperationParamsEncoded, never> = Schema.Struct({
  operation: Schema.Unknown,
});

export interface SubmitPlcOperationResponse {

}
export interface SubmitPlcOperationResponseEncoded {

}
export const SubmitPlcOperationResponse: Schema.Schema<SubmitPlcOperationResponse, SubmitPlcOperationResponseEncoded, never> = Schema.Struct({

});

export interface UnmuteActorListParams {
  readonly list: string;
}
export interface UnmuteActorListParamsEncoded {
  readonly list: string;
}
export const UnmuteActorListParams: Schema.Schema<UnmuteActorListParams, UnmuteActorListParamsEncoded, never> = Schema.Struct({
  list: Schema.String,
});

export interface UnmuteActorListResponse {

}
export interface UnmuteActorListResponseEncoded {

}
export const UnmuteActorListResponse: Schema.Schema<UnmuteActorListResponse, UnmuteActorListResponseEncoded, never> = Schema.Struct({

});

export interface UnmuteActorParams {
  readonly actor: string;
}
export interface UnmuteActorParamsEncoded {
  readonly actor: string;
}
export const UnmuteActorParams: Schema.Schema<UnmuteActorParams, UnmuteActorParamsEncoded, never> = Schema.Struct({
  actor: Schema.String,
});

export interface UnmuteActorResponse {

}
export interface UnmuteActorResponseEncoded {

}
export const UnmuteActorResponse: Schema.Schema<UnmuteActorResponse, UnmuteActorResponseEncoded, never> = Schema.Struct({

});

export interface UnmuteThreadParams {
  readonly root: string;
}
export interface UnmuteThreadParamsEncoded {
  readonly root: string;
}
export const UnmuteThreadParams: Schema.Schema<UnmuteThreadParams, UnmuteThreadParamsEncoded, never> = Schema.Struct({
  root: Schema.String,
});

export interface UnmuteThreadResponse {

}
export interface UnmuteThreadResponseEncoded {

}
export const UnmuteThreadResponse: Schema.Schema<UnmuteThreadResponse, UnmuteThreadResponseEncoded, never> = Schema.Struct({

});

export interface UnregisterPushParams {
  readonly serviceDid: string;
  readonly token: string;
  readonly platform: string;
  readonly appId: string;
}
export interface UnregisterPushParamsEncoded {
  readonly serviceDid: string;
  readonly token: string;
  readonly platform: string;
  readonly appId: string;
}
export const UnregisterPushParams: Schema.Schema<UnregisterPushParams, UnregisterPushParamsEncoded, never> = Schema.Struct({
  serviceDid: Schema.String,
  token: Schema.String,
  platform: Schema.String,
  appId: Schema.String,
});

export interface UnregisterPushResponse {

}
export interface UnregisterPushResponseEncoded {

}
export const UnregisterPushResponse: Schema.Schema<UnregisterPushResponse, UnregisterPushResponseEncoded, never> = Schema.Struct({

});

export interface UpdateAccountEmailParams {
  readonly account: string;
  readonly email: string;
}
export interface UpdateAccountEmailParamsEncoded {
  readonly account: string;
  readonly email: string;
}
export const UpdateAccountEmailParams: Schema.Schema<UpdateAccountEmailParams, UpdateAccountEmailParamsEncoded, never> = Schema.Struct({
  account: Schema.String,
  email: Schema.String,
});

export interface UpdateAccountEmailResponse {

}
export interface UpdateAccountEmailResponseEncoded {

}
export const UpdateAccountEmailResponse: Schema.Schema<UpdateAccountEmailResponse, UpdateAccountEmailResponseEncoded, never> = Schema.Struct({

});

export interface UpdateAccountHandleParams {
  readonly did: string;
  readonly handle: string;
}
export interface UpdateAccountHandleParamsEncoded {
  readonly did: string;
  readonly handle: string;
}
export const UpdateAccountHandleParams: Schema.Schema<UpdateAccountHandleParams, UpdateAccountHandleParamsEncoded, never> = Schema.Struct({
  did: Schema.String,
  handle: Schema.String,
});

export interface UpdateAccountHandleResponse {

}
export interface UpdateAccountHandleResponseEncoded {

}
export const UpdateAccountHandleResponse: Schema.Schema<UpdateAccountHandleResponse, UpdateAccountHandleResponseEncoded, never> = Schema.Struct({

});

export interface UpdateAccountPasswordParams {
  readonly did: string;
  readonly password: string;
}
export interface UpdateAccountPasswordParamsEncoded {
  readonly did: string;
  readonly password: string;
}
export const UpdateAccountPasswordParams: Schema.Schema<UpdateAccountPasswordParams, UpdateAccountPasswordParamsEncoded, never> = Schema.Struct({
  did: Schema.String,
  password: Schema.String,
});

export interface UpdateAccountPasswordResponse {

}
export interface UpdateAccountPasswordResponseEncoded {

}
export const UpdateAccountPasswordResponse: Schema.Schema<UpdateAccountPasswordResponse, UpdateAccountPasswordResponseEncoded, never> = Schema.Struct({

});

export interface UpdateAccountSigningKeyParams {
  readonly did: string;
  readonly signingKey: string;
}
export interface UpdateAccountSigningKeyParamsEncoded {
  readonly did: string;
  readonly signingKey: string;
}
export const UpdateAccountSigningKeyParams: Schema.Schema<UpdateAccountSigningKeyParams, UpdateAccountSigningKeyParamsEncoded, never> = Schema.Struct({
  did: Schema.String,
  signingKey: Schema.String,
});

export interface UpdateAccountSigningKeyResponse {

}
export interface UpdateAccountSigningKeyResponseEncoded {

}
export const UpdateAccountSigningKeyResponse: Schema.Schema<UpdateAccountSigningKeyResponse, UpdateAccountSigningKeyResponseEncoded, never> = Schema.Struct({

});

export interface UpdateDraftParams {
  readonly draft: AppBskyDraftDefsDraftWithId;
}
export interface UpdateDraftParamsEncoded {
  readonly draft: AppBskyDraftDefsDraftWithIdEncoded;
}
export const UpdateDraftParams: Schema.Schema<UpdateDraftParams, UpdateDraftParamsEncoded, never> = Schema.Struct({
  draft: Schema.suspend(() => AppBskyDraftDefsDraftWithId),
});

export interface UpdateDraftResponse {

}
export interface UpdateDraftResponseEncoded {

}
export const UpdateDraftResponse: Schema.Schema<UpdateDraftResponse, UpdateDraftResponseEncoded, never> = Schema.Struct({

});

export interface UpdateEmailParams {
  readonly email: string;
  readonly emailAuthFactor?: boolean;
  readonly token?: string;
}
export interface UpdateEmailParamsEncoded {
  readonly email: string;
  readonly emailAuthFactor?: boolean;
  readonly token?: string;
}
export const UpdateEmailParams: Schema.Schema<UpdateEmailParams, UpdateEmailParamsEncoded, never> = Schema.Struct({
  email: Schema.String,
  emailAuthFactor: Schema.optional(Schema.Boolean),
  token: Schema.optional(Schema.String),
});

export interface UpdateEmailResponse {

}
export interface UpdateEmailResponseEncoded {

}
export const UpdateEmailResponse: Schema.Schema<UpdateEmailResponse, UpdateEmailResponseEncoded, never> = Schema.Struct({

});

export interface UpdateHandleParams {
  readonly handle: string;
}
export interface UpdateHandleParamsEncoded {
  readonly handle: string;
}
export const UpdateHandleParams: Schema.Schema<UpdateHandleParams, UpdateHandleParamsEncoded, never> = Schema.Struct({
  handle: Schema.String,
});

export interface UpdateHandleResponse {

}
export interface UpdateHandleResponseEncoded {

}
export const UpdateHandleResponse: Schema.Schema<UpdateHandleResponse, UpdateHandleResponseEncoded, never> = Schema.Struct({

});

export interface UpdateSeenParams {
  readonly seenAt: string;
}
export interface UpdateSeenParamsEncoded {
  readonly seenAt: string;
}
export const UpdateSeenParams: Schema.Schema<UpdateSeenParams, UpdateSeenParamsEncoded, never> = Schema.Struct({
  seenAt: Schema.String,
});

export interface UpdateSeenResponse {

}
export interface UpdateSeenResponseEncoded {

}
export const UpdateSeenResponse: Schema.Schema<UpdateSeenResponse, UpdateSeenResponseEncoded, never> = Schema.Struct({

});

export interface UpdateSubjectStatusParams {
  readonly subject: ComAtprotoAdminDefsRepoRef | ComAtprotoRepoStrongRef | ComAtprotoAdminDefsRepoBlobRef;
  readonly takedown?: ComAtprotoAdminDefsStatusAttr;
  readonly deactivated?: ComAtprotoAdminDefsStatusAttr;
}
export interface UpdateSubjectStatusParamsEncoded {
  readonly subject: ComAtprotoAdminDefsRepoRefEncoded | ComAtprotoRepoStrongRefEncoded | ComAtprotoAdminDefsRepoBlobRefEncoded;
  readonly takedown?: ComAtprotoAdminDefsStatusAttrEncoded;
  readonly deactivated?: ComAtprotoAdminDefsStatusAttrEncoded;
}
export const UpdateSubjectStatusParams: Schema.Schema<UpdateSubjectStatusParams, UpdateSubjectStatusParamsEncoded, never> = Schema.Struct({
  subject: Schema.Union(Schema.suspend(() => ComAtprotoAdminDefsRepoRef), Schema.suspend(() => ComAtprotoRepoStrongRef), Schema.suspend(() => ComAtprotoAdminDefsRepoBlobRef)),
  takedown: Schema.optional(Schema.suspend(() => ComAtprotoAdminDefsStatusAttr)),
  deactivated: Schema.optional(Schema.suspend(() => ComAtprotoAdminDefsStatusAttr)),
});

export interface UpdateSubjectStatusResponse {
  readonly data: Inline576;
}
export interface UpdateSubjectStatusResponseEncoded {
  readonly data: Inline576Encoded;
}
export const UpdateSubjectStatusResponse: Schema.Schema<UpdateSubjectStatusResponse, UpdateSubjectStatusResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline576),
});

export interface UploadBlobParams {

}
export interface UploadBlobParamsEncoded {

}
export const UploadBlobParams: Schema.Schema<UploadBlobParams, UploadBlobParamsEncoded, never> = Schema.Struct({

});

export interface UploadBlobResponse {
  readonly data: Inline636;
}
export interface UploadBlobResponseEncoded {
  readonly data: Inline636Encoded;
}
export const UploadBlobResponse: Schema.Schema<UploadBlobResponse, UploadBlobResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline636),
});

export interface UploadVideoParams {

}
export interface UploadVideoParamsEncoded {

}
export const UploadVideoParams: Schema.Schema<UploadVideoParams, UploadVideoParamsEncoded, never> = Schema.Struct({

});

export interface UploadVideoResponse {
  readonly data: Inline540;
}
export interface UploadVideoResponseEncoded {
  readonly data: Inline540Encoded;
}
export const UploadVideoResponse: Schema.Schema<UploadVideoResponse, UploadVideoResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline540),
});

export interface VerifyPhoneParams {
  readonly phone: string;
  readonly code: string;
}
export interface VerifyPhoneParamsEncoded {
  readonly phone: string;
  readonly code: string;
}
export const VerifyPhoneParams: Schema.Schema<VerifyPhoneParams, VerifyPhoneParamsEncoded, never> = Schema.Struct({
  phone: Schema.String,
  code: Schema.String,
});

export interface VerifyPhoneResponse {
  readonly data: Inline289;
}
export interface VerifyPhoneResponseEncoded {
  readonly data: Inline289Encoded;
}
export const VerifyPhoneResponse: Schema.Schema<VerifyPhoneResponse, VerifyPhoneResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline289),
});
