// This file is generated. Do not edit by hand.
import * as v from "valibot";

export type AbuseReport = {
  readonly abuseTypes?: ReadonlyArray<AbuseType>;
  readonly description?: string;
  readonly relatedEntities?: ReadonlyArray<RelatedEntity>;
  readonly subject?: Entity;
};
export const AbuseReportSchema: v.GenericSchema<unknown, AbuseReport> = v.looseObject({
  abuseTypes: v.optional(v.array(v.lazy(() => AbuseTypeSchema))),
  description: v.optional(v.string()),
  relatedEntities: v.optional(v.array(v.lazy(() => RelatedEntitySchema))),
  subject: v.optional(v.lazy(() => EntitySchema)),
});

export type AbuseType = {
  readonly id?: string;
};
export const AbuseTypeSchema: v.GenericSchema<unknown, AbuseType> = v.looseObject({
  id: v.optional(v.string()),
});

/** Rights management policy for YouTube resources. */
export type AccessPolicy = {
  readonly allowed?: boolean;
  readonly exception?: ReadonlyArray<string>;
};
export const AccessPolicySchema: v.GenericSchema<unknown, AccessPolicy> = v.looseObject({
  allowed: v.optional(v.boolean()),
  exception: v.optional(v.array(v.string())),
});

/** An *activity* resource contains information about an action that a particular channel, or user, has taken on YouTube.The actions reported in activity feeds include rating a video, sharing a video, marking a video as a favorite, commenting on a video, uploading a video, and so forth. Each activity resource identifies the type of action, the channel associated with the action, and the resource(s) associated with the action, such as the video that was rated or uploaded. */
export type Activity = {
  readonly contentDetails?: ActivityContentDetails;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: ActivitySnippet;
};
export const ActivitySchema: v.GenericSchema<unknown, Activity> = v.looseObject({
  contentDetails: v.optional(v.lazy(() => ActivityContentDetailsSchema)),
  etag: v.optional(v.string()),
  id: v.optional(v.string()),
  kind: v.optional(v.string()),
  snippet: v.optional(v.lazy(() => ActivitySnippetSchema)),
});

/** Details about the content of an activity: the video that was shared, the channel that was subscribed to, etc. */
export type ActivityContentDetails = {
  readonly bulletin?: ActivityContentDetailsBulletin;
  readonly channelItem?: ActivityContentDetailsChannelItem;
  readonly comment?: ActivityContentDetailsComment;
  readonly favorite?: ActivityContentDetailsFavorite;
  readonly like?: ActivityContentDetailsLike;
  readonly playlistItem?: ActivityContentDetailsPlaylistItem;
  readonly promotedItem?: ActivityContentDetailsPromotedItem;
  readonly recommendation?: ActivityContentDetailsRecommendation;
  readonly social?: ActivityContentDetailsSocial;
  readonly subscription?: ActivityContentDetailsSubscription;
  readonly upload?: ActivityContentDetailsUpload;
};
export const ActivityContentDetailsSchema: v.GenericSchema<unknown, ActivityContentDetails> = v.looseObject({
  bulletin: v.optional(v.lazy(() => ActivityContentDetailsBulletinSchema)),
  channelItem: v.optional(v.lazy(() => ActivityContentDetailsChannelItemSchema)),
  comment: v.optional(v.lazy(() => ActivityContentDetailsCommentSchema)),
  favorite: v.optional(v.lazy(() => ActivityContentDetailsFavoriteSchema)),
  like: v.optional(v.lazy(() => ActivityContentDetailsLikeSchema)),
  playlistItem: v.optional(v.lazy(() => ActivityContentDetailsPlaylistItemSchema)),
  promotedItem: v.optional(v.lazy(() => ActivityContentDetailsPromotedItemSchema)),
  recommendation: v.optional(v.lazy(() => ActivityContentDetailsRecommendationSchema)),
  social: v.optional(v.lazy(() => ActivityContentDetailsSocialSchema)),
  subscription: v.optional(v.lazy(() => ActivityContentDetailsSubscriptionSchema)),
  upload: v.optional(v.lazy(() => ActivityContentDetailsUploadSchema)),
});

/** Details about a channel bulletin post. */
export type ActivityContentDetailsBulletin = {
  readonly resourceId?: ResourceId;
};
export const ActivityContentDetailsBulletinSchema: v.GenericSchema<unknown, ActivityContentDetailsBulletin> = v.looseObject({
  resourceId: v.optional(v.lazy(() => ResourceIdSchema)),
});

/** Details about a resource which was added to a channel. */
export type ActivityContentDetailsChannelItem = {
  readonly resourceId?: ResourceId;
};
export const ActivityContentDetailsChannelItemSchema: v.GenericSchema<unknown, ActivityContentDetailsChannelItem> = v.looseObject({
  resourceId: v.optional(v.lazy(() => ResourceIdSchema)),
});

/** Information about a resource that received a comment. */
export type ActivityContentDetailsComment = {
  readonly resourceId?: ResourceId;
};
export const ActivityContentDetailsCommentSchema: v.GenericSchema<unknown, ActivityContentDetailsComment> = v.looseObject({
  resourceId: v.optional(v.lazy(() => ResourceIdSchema)),
});

/** Information about a video that was marked as a favorite video. */
export type ActivityContentDetailsFavorite = {
  readonly resourceId?: ResourceId;
};
export const ActivityContentDetailsFavoriteSchema: v.GenericSchema<unknown, ActivityContentDetailsFavorite> = v.looseObject({
  resourceId: v.optional(v.lazy(() => ResourceIdSchema)),
});

/** Information about a resource that received a positive (like) rating. */
export type ActivityContentDetailsLike = {
  readonly resourceId?: ResourceId;
};
export const ActivityContentDetailsLikeSchema: v.GenericSchema<unknown, ActivityContentDetailsLike> = v.looseObject({
  resourceId: v.optional(v.lazy(() => ResourceIdSchema)),
});

/** Information about a new playlist item. */
export type ActivityContentDetailsPlaylistItem = {
  readonly playlistId?: string;
  readonly playlistItemId?: string;
  readonly resourceId?: ResourceId;
};
export const ActivityContentDetailsPlaylistItemSchema: v.GenericSchema<unknown, ActivityContentDetailsPlaylistItem> = v.looseObject({
  playlistId: v.optional(v.string()),
  playlistItemId: v.optional(v.string()),
  resourceId: v.optional(v.lazy(() => ResourceIdSchema)),
});

/** Details about a resource which is being promoted. */
export type ActivityContentDetailsPromotedItem = {
  readonly adTag?: string;
  readonly clickTrackingUrl?: string;
  readonly creativeViewUrl?: string;
  readonly ctaType?: "ctaTypeUnspecified" | "visitAdvertiserSite";
  readonly customCtaButtonText?: string;
  readonly descriptionText?: string;
  readonly destinationUrl?: string;
  readonly forecastingUrl?: ReadonlyArray<string>;
  readonly impressionUrl?: ReadonlyArray<string>;
  readonly videoId?: string;
};
export const ActivityContentDetailsPromotedItemSchema: v.GenericSchema<unknown, ActivityContentDetailsPromotedItem> = v.looseObject({
  adTag: v.optional(v.string()),
  clickTrackingUrl: v.optional(v.string()),
  creativeViewUrl: v.optional(v.string()),
  ctaType: v.optional(v.union([v.literal("ctaTypeUnspecified"), v.literal("visitAdvertiserSite")])),
  customCtaButtonText: v.optional(v.string()),
  descriptionText: v.optional(v.string()),
  destinationUrl: v.optional(v.string()),
  forecastingUrl: v.optional(v.array(v.string())),
  impressionUrl: v.optional(v.array(v.string())),
  videoId: v.optional(v.string()),
});

/** Information that identifies the recommended resource. */
export type ActivityContentDetailsRecommendation = {
  readonly reason?: "reasonUnspecified" | "videoFavorited" | "videoLiked" | "videoWatched";
  readonly resourceId?: ResourceId;
  readonly seedResourceId?: ResourceId;
};
export const ActivityContentDetailsRecommendationSchema: v.GenericSchema<unknown, ActivityContentDetailsRecommendation> = v.looseObject({
  reason: v.optional(v.union([v.literal("reasonUnspecified"), v.literal("videoFavorited"), v.literal("videoLiked"), v.literal("videoWatched")])),
  resourceId: v.optional(v.lazy(() => ResourceIdSchema)),
  seedResourceId: v.optional(v.lazy(() => ResourceIdSchema)),
});

/** Details about a social network post. */
export type ActivityContentDetailsSocial = {
  readonly author?: string;
  readonly imageUrl?: string;
  readonly referenceUrl?: string;
  readonly resourceId?: ResourceId;
  readonly type?: "unspecified" | "googlePlus" | "facebook" | "twitter";
};
export const ActivityContentDetailsSocialSchema: v.GenericSchema<unknown, ActivityContentDetailsSocial> = v.looseObject({
  author: v.optional(v.string()),
  imageUrl: v.optional(v.string()),
  referenceUrl: v.optional(v.string()),
  resourceId: v.optional(v.lazy(() => ResourceIdSchema)),
  type: v.optional(v.union([v.literal("unspecified"), v.literal("googlePlus"), v.literal("facebook"), v.literal("twitter")])),
});

/** Information about a channel that a user subscribed to. */
export type ActivityContentDetailsSubscription = {
  readonly resourceId?: ResourceId;
};
export const ActivityContentDetailsSubscriptionSchema: v.GenericSchema<unknown, ActivityContentDetailsSubscription> = v.looseObject({
  resourceId: v.optional(v.lazy(() => ResourceIdSchema)),
});

/** Information about the uploaded video. */
export type ActivityContentDetailsUpload = {
  readonly videoId?: string;
};
export const ActivityContentDetailsUploadSchema: v.GenericSchema<unknown, ActivityContentDetailsUpload> = v.looseObject({
  videoId: v.optional(v.string()),
});

export type ActivityListResponse = {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<Activity>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfo;
  readonly prevPageToken?: string;
  readonly tokenPagination?: TokenPagination;
  readonly visitorId?: string;
};
export const ActivityListResponseSchema: v.GenericSchema<unknown, ActivityListResponse> = v.looseObject({
  etag: v.optional(v.string()),
  eventId: v.optional(v.string()),
  items: v.optional(v.array(v.lazy(() => ActivitySchema))),
  kind: v.optional(v.string()),
  nextPageToken: v.optional(v.string()),
  pageInfo: v.optional(v.lazy(() => PageInfoSchema)),
  prevPageToken: v.optional(v.string()),
  tokenPagination: v.optional(v.lazy(() => TokenPaginationSchema)),
  visitorId: v.optional(v.string()),
});

/** Basic details about an activity, including title, description, thumbnails, activity type and group. Next ID: 12 */
export type ActivitySnippet = {
  readonly channelId?: string;
  readonly channelTitle?: string;
  readonly description?: string;
  readonly groupId?: string;
  readonly publishedAt?: string;
  readonly thumbnails?: ThumbnailDetails;
  readonly title?: string;
  readonly type?: "typeUnspecified" | "upload" | "like" | "favorite" | "comment" | "subscription" | "playlistItem" | "recommendation" | "bulletin" | "social" | "channelItem" | "promotedItem";
};
export const ActivitySnippetSchema: v.GenericSchema<unknown, ActivitySnippet> = v.looseObject({
  channelId: v.optional(v.string()),
  channelTitle: v.optional(v.string()),
  description: v.optional(v.string()),
  groupId: v.optional(v.string()),
  publishedAt: v.optional(v.pipe(v.string(), v.isoTimestamp())),
  thumbnails: v.optional(v.lazy(() => ThumbnailDetailsSchema)),
  title: v.optional(v.string()),
  type: v.optional(v.union([v.literal("typeUnspecified"), v.literal("upload"), v.literal("like"), v.literal("favorite"), v.literal("comment"), v.literal("subscription"), v.literal("playlistItem"), v.literal("recommendation"), v.literal("bulletin"), v.literal("social"), v.literal("channelItem"), v.literal("promotedItem")])),
});

/** Empty response. */
export type AnalyticsEmptyResponse = {
  readonly errors?: AnalyticsErrors;
};
export const AnalyticsEmptyResponseSchema: v.GenericSchema<unknown, AnalyticsEmptyResponse> = v.looseObject({
  errors: v.optional(v.lazy(() => AnalyticsErrorsSchema)),
});

/** Describes one specific error. */
export type AnalyticsErrorProto = {
  readonly argument?: ReadonlyArray<string>;
  readonly code?: string;
  readonly debugInfo?: string;
  readonly domain?: string;
  readonly externalErrorMessage?: string;
  readonly location?: string;
  readonly locationType?: "PATH" | "OTHER" | "PARAMETER";
};
export const AnalyticsErrorProtoSchema: v.GenericSchema<unknown, AnalyticsErrorProto> = v.looseObject({
  argument: v.optional(v.array(v.string())),
  code: v.optional(v.string()),
  debugInfo: v.optional(v.string()),
  domain: v.optional(v.string()),
  externalErrorMessage: v.optional(v.string()),
  location: v.optional(v.string()),
  locationType: v.optional(v.union([v.literal("PATH"), v.literal("OTHER"), v.literal("PARAMETER")])),
});

/** Request Error information. The presence of an error field signals that the operation has failed. */
export type AnalyticsErrors = {
  readonly code?: "BAD_REQUEST" | "FORBIDDEN" | "NOT_FOUND" | "CONFLICT" | "GONE" | "PRECONDITION_FAILED" | "INTERNAL_ERROR" | "SERVICE_UNAVAILABLE";
  readonly error?: ReadonlyArray<AnalyticsErrorProto>;
  readonly requestId?: string;
};
export const AnalyticsErrorsSchema: v.GenericSchema<unknown, AnalyticsErrors> = v.looseObject({
  code: v.optional(v.union([v.literal("BAD_REQUEST"), v.literal("FORBIDDEN"), v.literal("NOT_FOUND"), v.literal("CONFLICT"), v.literal("GONE"), v.literal("PRECONDITION_FAILED"), v.literal("INTERNAL_ERROR"), v.literal("SERVICE_UNAVAILABLE")])),
  error: v.optional(v.array(v.lazy(() => AnalyticsErrorProtoSchema))),
  requestId: v.optional(v.string()),
});

/** A group. */
export type AnalyticsGroup = {
  readonly contentDetails?: AnalyticsGroupContentDetails;
  readonly errors?: AnalyticsErrors;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: AnalyticsGroupSnippet;
};
export const AnalyticsGroupSchema: v.GenericSchema<unknown, AnalyticsGroup> = v.looseObject({
  contentDetails: v.optional(v.lazy(() => AnalyticsGroupContentDetailsSchema)),
  errors: v.optional(v.lazy(() => AnalyticsErrorsSchema)),
  etag: v.optional(v.string()),
  id: v.optional(v.string()),
  kind: v.optional(v.string()),
  snippet: v.optional(v.lazy(() => AnalyticsGroupSnippetSchema)),
});

/** A group's content details. */
export type AnalyticsGroupContentDetails = {
  readonly itemCount?: string;
  readonly itemType?: string;
};
export const AnalyticsGroupContentDetailsSchema: v.GenericSchema<unknown, AnalyticsGroupContentDetails> = v.looseObject({
  itemCount: v.optional(v.string()),
  itemType: v.optional(v.string()),
});

/** A group item. */
export type AnalyticsGroupItem = {
  readonly errors?: AnalyticsErrors;
  readonly etag?: string;
  readonly groupId?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly resource?: AnalyticsGroupItemResource;
};
export const AnalyticsGroupItemSchema: v.GenericSchema<unknown, AnalyticsGroupItem> = v.looseObject({
  errors: v.optional(v.lazy(() => AnalyticsErrorsSchema)),
  etag: v.optional(v.string()),
  groupId: v.optional(v.string()),
  id: v.optional(v.string()),
  kind: v.optional(v.string()),
  resource: v.optional(v.lazy(() => AnalyticsGroupItemResourceSchema)),
});

export type AnalyticsGroupItemResource = {
  readonly id?: string;
  readonly kind?: string;
};
export const AnalyticsGroupItemResourceSchema: v.GenericSchema<unknown, AnalyticsGroupItemResource> = v.looseObject({
  id: v.optional(v.string()),
  kind: v.optional(v.string()),
});

/** A group snippet. */
export type AnalyticsGroupSnippet = {
  readonly publishedAt?: string;
  readonly title?: string;
};
export const AnalyticsGroupSnippetSchema: v.GenericSchema<unknown, AnalyticsGroupSnippet> = v.looseObject({
  publishedAt: v.optional(v.string()),
  title: v.optional(v.string()),
});

/** Response message for GroupsService.ListGroupItems. */
export type AnalyticsListGroupItemsResponse = {
  readonly errors?: AnalyticsErrors;
  readonly etag?: string;
  readonly items?: ReadonlyArray<AnalyticsGroupItem>;
  readonly kind?: string;
};
export const AnalyticsListGroupItemsResponseSchema: v.GenericSchema<unknown, AnalyticsListGroupItemsResponse> = v.looseObject({
  errors: v.optional(v.lazy(() => AnalyticsErrorsSchema)),
  etag: v.optional(v.string()),
  items: v.optional(v.array(v.lazy(() => AnalyticsGroupItemSchema))),
  kind: v.optional(v.string()),
});

/** Response message for GroupsService.ListGroups. */
export type AnalyticsListGroupsResponse = {
  readonly errors?: AnalyticsErrors;
  readonly etag?: string;
  readonly items?: ReadonlyArray<AnalyticsGroup>;
  readonly kind?: string;
  readonly nextPageToken?: string;
};
export const AnalyticsListGroupsResponseSchema: v.GenericSchema<unknown, AnalyticsListGroupsResponse> = v.looseObject({
  errors: v.optional(v.lazy(() => AnalyticsErrorsSchema)),
  etag: v.optional(v.string()),
  items: v.optional(v.array(v.lazy(() => AnalyticsGroupSchema))),
  kind: v.optional(v.string()),
  nextPageToken: v.optional(v.string()),
});

/** Response message for TargetedQueriesService.Query. */
export type AnalyticsQueryResponse = {
  readonly columnHeaders?: ReadonlyArray<AnalyticsResultTableColumnHeader>;
  readonly errors?: AnalyticsErrors;
  readonly kind?: string;
  readonly rows?: ReadonlyArray<ReadonlyArray<unknown>>;
};
export const AnalyticsQueryResponseSchema: v.GenericSchema<unknown, AnalyticsQueryResponse> = v.looseObject({
  columnHeaders: v.optional(v.array(v.lazy(() => AnalyticsResultTableColumnHeaderSchema))),
  errors: v.optional(v.lazy(() => AnalyticsErrorsSchema)),
  kind: v.optional(v.string()),
  rows: v.optional(v.array(v.array(v.unknown()))),
});

/** The description of a column of the result table. */
export type AnalyticsResultTableColumnHeader = {
  readonly columnType?: string;
  readonly dataType?: string;
  readonly name?: string;
};
export const AnalyticsResultTableColumnHeaderSchema: v.GenericSchema<unknown, AnalyticsResultTableColumnHeader> = v.looseObject({
  columnType: v.optional(v.string()),
  dataType: v.optional(v.string()),
  name: v.optional(v.string()),
});

/** Response for the Videos.stats API. Returns VideoStat information about a batch of videos. VideoStat contains a subset of the information in Video that is relevant to statistics and content details. BatchGetStats is intentionally not atomic to provide a better user experience. BatchGetStatsResponse returns a summary to help users understand the outcome of the operation. */
export type BatchGetStatsResponse = {
  readonly etag?: string;
  readonly items?: ReadonlyArray<VideoStat>;
  readonly kind?: string;
  readonly summary?: BatchGetStatsSummary;
};
export const BatchGetStatsResponseSchema: v.GenericSchema<unknown, BatchGetStatsResponse> = v.looseObject({
  etag: v.optional(v.string()),
  items: v.optional(v.array(v.lazy(() => VideoStatSchema))),
  kind: v.optional(v.string()),
  summary: v.optional(v.lazy(() => BatchGetStatsSummarySchema)),
});

export type BatchGetStatsSummary = {
  readonly failedVideoCount?: string;
  readonly failedVideoIds?: ReadonlyArray<string>;
  readonly requestedVideoCount?: string;
  readonly succeededVideoCount?: string;
};
export const BatchGetStatsSummarySchema: v.GenericSchema<unknown, BatchGetStatsSummary> = v.looseObject({
  failedVideoCount: v.optional(v.string()),
  failedVideoIds: v.optional(v.array(v.string())),
  requestedVideoCount: v.optional(v.string()),
  succeededVideoCount: v.optional(v.string()),
});

/** Details about the brand partner linked to the video for Creator Initiated Linking (CIL). Next ID: 6 */
export type BrandPartner = {
  readonly channelHandle?: string;
  readonly channelId?: string;
};
export const BrandPartnerSchema: v.GenericSchema<unknown, BrandPartner> = v.looseObject({
  channelHandle: v.optional(v.string()),
  channelId: v.optional(v.string()),
});

/** A *caption* resource represents a YouTube caption track. A caption track is associated with exactly one YouTube video. */
export type Caption = {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: CaptionSnippet;
};
export const CaptionSchema: v.GenericSchema<unknown, Caption> = v.looseObject({
  etag: v.optional(v.string()),
  id: v.optional(v.string()),
  kind: v.optional(v.string()),
  snippet: v.optional(v.lazy(() => CaptionSnippetSchema)),
});

export type CaptionListResponse = {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<Caption>;
  readonly kind?: string;
  readonly visitorId?: string;
};
export const CaptionListResponseSchema: v.GenericSchema<unknown, CaptionListResponse> = v.looseObject({
  etag: v.optional(v.string()),
  eventId: v.optional(v.string()),
  items: v.optional(v.array(v.lazy(() => CaptionSchema))),
  kind: v.optional(v.string()),
  visitorId: v.optional(v.string()),
});

/** Basic details about a caption track, such as its language and name. */
export type CaptionSnippet = {
  readonly audioTrackType?: "unknown" | "primary" | "commentary" | "descriptive";
  readonly failureReason?: "unknownFormat" | "unsupportedFormat" | "processingFailed";
  readonly isAutoSynced?: boolean;
  readonly isCC?: boolean;
  readonly isDraft?: boolean;
  readonly isEasyReader?: boolean;
  readonly isLarge?: boolean;
  readonly language?: string;
  readonly lastUpdated?: string;
  readonly name?: string;
  readonly status?: "serving" | "syncing" | "failed";
  readonly trackKind?: "standard" | "ASR" | "forced";
  readonly videoId?: string;
};
export const CaptionSnippetSchema: v.GenericSchema<unknown, CaptionSnippet> = v.looseObject({
  audioTrackType: v.optional(v.union([v.literal("unknown"), v.literal("primary"), v.literal("commentary"), v.literal("descriptive")])),
  failureReason: v.optional(v.union([v.literal("unknownFormat"), v.literal("unsupportedFormat"), v.literal("processingFailed")])),
  isAutoSynced: v.optional(v.boolean()),
  isCC: v.optional(v.boolean()),
  isDraft: v.optional(v.boolean()),
  isEasyReader: v.optional(v.boolean()),
  isLarge: v.optional(v.boolean()),
  language: v.optional(v.string()),
  lastUpdated: v.optional(v.pipe(v.string(), v.isoTimestamp())),
  name: v.optional(v.string()),
  status: v.optional(v.union([v.literal("serving"), v.literal("syncing"), v.literal("failed")])),
  trackKind: v.optional(v.union([v.literal("standard"), v.literal("ASR"), v.literal("forced")])),
  videoId: v.optional(v.string()),
});

/** Brief description of the live stream cdn settings. */
export type CdnSettings = {
  readonly format?: string;
  readonly frameRate?: "30fps" | "60fps" | "variable";
  readonly ingestionInfo?: IngestionInfo;
  readonly ingestionType?: "rtmp" | "dash" | "webrtc" | "hls";
  readonly resolution?: "240p" | "360p" | "480p" | "720p" | "1080p" | "1440p" | "2160p" | "variable";
};
export const CdnSettingsSchema: v.GenericSchema<unknown, CdnSettings> = v.looseObject({
  format: v.optional(v.string()),
  frameRate: v.optional(v.union([v.literal("30fps"), v.literal("60fps"), v.literal("variable")])),
  ingestionInfo: v.optional(v.lazy(() => IngestionInfoSchema)),
  ingestionType: v.optional(v.union([v.literal("rtmp"), v.literal("dash"), v.literal("webrtc"), v.literal("hls")])),
  resolution: v.optional(v.union([v.literal("240p"), v.literal("360p"), v.literal("480p"), v.literal("720p"), v.literal("1080p"), v.literal("1440p"), v.literal("2160p"), v.literal("variable")])),
});

/** A *channel* resource contains information about a YouTube channel. */
export type Channel = {
  readonly auditDetails?: ChannelAuditDetails;
  readonly brandingSettings?: ChannelBrandingSettings;
  readonly contentDetails?: ChannelContentDetails;
  readonly contentOwnerDetails?: ChannelContentOwnerDetails;
  readonly conversionPings?: ChannelConversionPings;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly localizations?: Readonly<Record<string, ChannelLocalization>>;
  readonly snippet?: ChannelSnippet;
  readonly statistics?: ChannelStatistics;
  readonly status?: ChannelStatus;
  readonly topicDetails?: ChannelTopicDetails;
};
export const ChannelSchema: v.GenericSchema<unknown, Channel> = v.looseObject({
  auditDetails: v.optional(v.lazy(() => ChannelAuditDetailsSchema)),
  brandingSettings: v.optional(v.lazy(() => ChannelBrandingSettingsSchema)),
  contentDetails: v.optional(v.lazy(() => ChannelContentDetailsSchema)),
  contentOwnerDetails: v.optional(v.lazy(() => ChannelContentOwnerDetailsSchema)),
  conversionPings: v.optional(v.lazy(() => ChannelConversionPingsSchema)),
  etag: v.optional(v.string()),
  id: v.optional(v.string()),
  kind: v.optional(v.string()),
  localizations: v.optional(v.record(v.string(), v.lazy(() => ChannelLocalizationSchema))),
  snippet: v.optional(v.lazy(() => ChannelSnippetSchema)),
  statistics: v.optional(v.lazy(() => ChannelStatisticsSchema)),
  status: v.optional(v.lazy(() => ChannelStatusSchema)),
  topicDetails: v.optional(v.lazy(() => ChannelTopicDetailsSchema)),
});

/** The auditDetails object encapsulates channel data that is relevant for YouTube Partners during the audit process. */
export type ChannelAuditDetails = {
  readonly communityGuidelinesGoodStanding?: boolean;
  readonly contentIdClaimsGoodStanding?: boolean;
  readonly copyrightStrikesGoodStanding?: boolean;
};
export const ChannelAuditDetailsSchema: v.GenericSchema<unknown, ChannelAuditDetails> = v.looseObject({
  communityGuidelinesGoodStanding: v.optional(v.boolean()),
  contentIdClaimsGoodStanding: v.optional(v.boolean()),
  copyrightStrikesGoodStanding: v.optional(v.boolean()),
});

/** A channel banner returned as the response to a channel_banner.insert call. */
export type ChannelBannerResource = {
  readonly etag?: string;
  readonly kind?: string;
  readonly url?: string;
};
export const ChannelBannerResourceSchema: v.GenericSchema<unknown, ChannelBannerResource> = v.looseObject({
  etag: v.optional(v.string()),
  kind: v.optional(v.string()),
  url: v.optional(v.string()),
});

/** Branding properties of a YouTube channel. */
export type ChannelBrandingSettings = {
  readonly channel?: ChannelSettings;
  readonly hints?: ReadonlyArray<PropertyValue>;
  readonly image?: ImageSettings;
  readonly watch?: WatchSettings;
};
export const ChannelBrandingSettingsSchema: v.GenericSchema<unknown, ChannelBrandingSettings> = v.looseObject({
  channel: v.optional(v.lazy(() => ChannelSettingsSchema)),
  hints: v.optional(v.array(v.lazy(() => PropertyValueSchema))),
  image: v.optional(v.lazy(() => ImageSettingsSchema)),
  watch: v.optional(v.lazy(() => WatchSettingsSchema)),
});

/** Details about the content of a channel. */
export type ChannelContentDetails = {
  readonly relatedPlaylists?: unknown;
};
export const ChannelContentDetailsSchema: v.GenericSchema<unknown, ChannelContentDetails> = v.looseObject({
  relatedPlaylists: v.optional(v.unknown()),
});

/** The contentOwnerDetails object encapsulates channel data that is relevant for YouTube Partners linked with the channel. */
export type ChannelContentOwnerDetails = {
  readonly contentOwner?: string;
  readonly timeLinked?: string;
};
export const ChannelContentOwnerDetailsSchema: v.GenericSchema<unknown, ChannelContentOwnerDetails> = v.looseObject({
  contentOwner: v.optional(v.string()),
  timeLinked: v.optional(v.pipe(v.string(), v.isoTimestamp())),
});

/** Pings that the app shall fire (authenticated by biscotti cookie). Each ping has a context, in which the app must fire the ping, and a url identifying the ping. */
export type ChannelConversionPing = {
  readonly context?: "subscribe" | "unsubscribe" | "cview";
  readonly conversionUrl?: string;
};
export const ChannelConversionPingSchema: v.GenericSchema<unknown, ChannelConversionPing> = v.looseObject({
  context: v.optional(v.union([v.literal("subscribe"), v.literal("unsubscribe"), v.literal("cview")])),
  conversionUrl: v.optional(v.string()),
});

/** The conversionPings object encapsulates information about conversion pings that need to be respected by the channel. */
export type ChannelConversionPings = {
  readonly pings?: ReadonlyArray<ChannelConversionPing>;
};
export const ChannelConversionPingsSchema: v.GenericSchema<unknown, ChannelConversionPings> = v.looseObject({
  pings: v.optional(v.array(v.lazy(() => ChannelConversionPingSchema))),
});

export type ChannelListResponse = {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<Channel>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfo;
  readonly prevPageToken?: string;
  readonly tokenPagination?: TokenPagination;
  readonly visitorId?: string;
};
export const ChannelListResponseSchema: v.GenericSchema<unknown, ChannelListResponse> = v.looseObject({
  etag: v.optional(v.string()),
  eventId: v.optional(v.string()),
  items: v.optional(v.array(v.lazy(() => ChannelSchema))),
  kind: v.optional(v.string()),
  nextPageToken: v.optional(v.string()),
  pageInfo: v.optional(v.lazy(() => PageInfoSchema)),
  prevPageToken: v.optional(v.string()),
  tokenPagination: v.optional(v.lazy(() => TokenPaginationSchema)),
  visitorId: v.optional(v.string()),
});

/** Channel localization setting */
export type ChannelLocalization = {
  readonly description?: string;
  readonly title?: string;
};
export const ChannelLocalizationSchema: v.GenericSchema<unknown, ChannelLocalization> = v.looseObject({
  description: v.optional(v.string()),
  title: v.optional(v.string()),
});

export type ChannelProfileDetails = {
  readonly channelId?: string;
  readonly channelUrl?: string;
  readonly displayName?: string;
  readonly profileImageUrl?: string;
};
export const ChannelProfileDetailsSchema: v.GenericSchema<unknown, ChannelProfileDetails> = v.looseObject({
  channelId: v.optional(v.string()),
  channelUrl: v.optional(v.string()),
  displayName: v.optional(v.string()),
  profileImageUrl: v.optional(v.string()),
});

export type ChannelSection = {
  readonly contentDetails?: ChannelSectionContentDetails;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly localizations?: Readonly<Record<string, ChannelSectionLocalization>>;
  readonly snippet?: ChannelSectionSnippet;
  readonly targeting?: ChannelSectionTargeting;
};
export const ChannelSectionSchema: v.GenericSchema<unknown, ChannelSection> = v.looseObject({
  contentDetails: v.optional(v.lazy(() => ChannelSectionContentDetailsSchema)),
  etag: v.optional(v.string()),
  id: v.optional(v.string()),
  kind: v.optional(v.string()),
  localizations: v.optional(v.record(v.string(), v.lazy(() => ChannelSectionLocalizationSchema))),
  snippet: v.optional(v.lazy(() => ChannelSectionSnippetSchema)),
  targeting: v.optional(v.lazy(() => ChannelSectionTargetingSchema)),
});

/** Details about a channelsection, including playlists and channels. */
export type ChannelSectionContentDetails = {
  readonly channels?: ReadonlyArray<string>;
  readonly playlists?: ReadonlyArray<string>;
};
export const ChannelSectionContentDetailsSchema: v.GenericSchema<unknown, ChannelSectionContentDetails> = v.looseObject({
  channels: v.optional(v.array(v.string())),
  playlists: v.optional(v.array(v.string())),
});

export type ChannelSectionListResponse = {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<ChannelSection>;
  readonly kind?: string;
  readonly visitorId?: string;
};
export const ChannelSectionListResponseSchema: v.GenericSchema<unknown, ChannelSectionListResponse> = v.looseObject({
  etag: v.optional(v.string()),
  eventId: v.optional(v.string()),
  items: v.optional(v.array(v.lazy(() => ChannelSectionSchema))),
  kind: v.optional(v.string()),
  visitorId: v.optional(v.string()),
});

/** ChannelSection localization setting */
export type ChannelSectionLocalization = {
  readonly title?: string;
};
export const ChannelSectionLocalizationSchema: v.GenericSchema<unknown, ChannelSectionLocalization> = v.looseObject({
  title: v.optional(v.string()),
});

/** Basic details about a channel section, including title, style and position. */
export type ChannelSectionSnippet = {
  readonly channelId?: string;
  readonly defaultLanguage?: string;
  readonly localized?: ChannelSectionLocalization;
  readonly position?: number;
  readonly style?: "channelsectionStyleUnspecified" | "horizontalRow" | "verticalList";
  readonly title?: string;
  readonly type?: "channelsectionTypeUndefined" | "singlePlaylist" | "multiplePlaylists" | "popularUploads" | "recentUploads" | "likes" | "allPlaylists" | "likedPlaylists" | "recentPosts" | "recentActivity" | "liveEvents" | "upcomingEvents" | "completedEvents" | "multipleChannels" | "postedVideos" | "postedPlaylists" | "subscriptions";
};
export const ChannelSectionSnippetSchema: v.GenericSchema<unknown, ChannelSectionSnippet> = v.looseObject({
  channelId: v.optional(v.string()),
  defaultLanguage: v.optional(v.string()),
  localized: v.optional(v.lazy(() => ChannelSectionLocalizationSchema)),
  position: v.optional(v.pipe(v.number(), v.integer())),
  style: v.optional(v.union([v.literal("channelsectionStyleUnspecified"), v.literal("horizontalRow"), v.literal("verticalList")])),
  title: v.optional(v.string()),
  type: v.optional(v.union([v.literal("channelsectionTypeUndefined"), v.literal("singlePlaylist"), v.literal("multiplePlaylists"), v.literal("popularUploads"), v.literal("recentUploads"), v.literal("likes"), v.literal("allPlaylists"), v.literal("likedPlaylists"), v.literal("recentPosts"), v.literal("recentActivity"), v.literal("liveEvents"), v.literal("upcomingEvents"), v.literal("completedEvents"), v.literal("multipleChannels"), v.literal("postedVideos"), v.literal("postedPlaylists"), v.literal("subscriptions")])),
});

/** ChannelSection targeting setting. */
export type ChannelSectionTargeting = {
  readonly countries?: ReadonlyArray<string>;
  readonly languages?: ReadonlyArray<string>;
  readonly regions?: ReadonlyArray<string>;
};
export const ChannelSectionTargetingSchema: v.GenericSchema<unknown, ChannelSectionTargeting> = v.looseObject({
  countries: v.optional(v.array(v.string())),
  languages: v.optional(v.array(v.string())),
  regions: v.optional(v.array(v.string())),
});

/** Branding properties for the channel view. */
export type ChannelSettings = {
  readonly country?: string;
  readonly defaultLanguage?: string;
  readonly defaultTab?: string;
  readonly description?: string;
  readonly featuredChannelsTitle?: string;
  readonly featuredChannelsUrls?: ReadonlyArray<string>;
  readonly keywords?: string;
  readonly moderateComments?: boolean;
  readonly profileColor?: string;
  readonly showBrowseView?: boolean;
  readonly showRelatedChannels?: boolean;
  readonly title?: string;
  readonly trackingAnalyticsAccountId?: string;
  readonly unsubscribedTrailer?: string;
};
export const ChannelSettingsSchema: v.GenericSchema<unknown, ChannelSettings> = v.looseObject({
  country: v.optional(v.string()),
  defaultLanguage: v.optional(v.string()),
  defaultTab: v.optional(v.string()),
  description: v.optional(v.string()),
  featuredChannelsTitle: v.optional(v.string()),
  featuredChannelsUrls: v.optional(v.array(v.string())),
  keywords: v.optional(v.string()),
  moderateComments: v.optional(v.boolean()),
  profileColor: v.optional(v.string()),
  showBrowseView: v.optional(v.boolean()),
  showRelatedChannels: v.optional(v.boolean()),
  title: v.optional(v.string()),
  trackingAnalyticsAccountId: v.optional(v.string()),
  unsubscribedTrailer: v.optional(v.string()),
});

/** Basic details about a channel, including title, description and thumbnails. */
export type ChannelSnippet = {
  readonly country?: string;
  readonly customUrl?: string;
  readonly defaultLanguage?: string;
  readonly description?: string;
  readonly localized?: ChannelLocalization;
  readonly publishedAt?: string;
  readonly thumbnails?: ThumbnailDetails;
  readonly title?: string;
};
export const ChannelSnippetSchema: v.GenericSchema<unknown, ChannelSnippet> = v.looseObject({
  country: v.optional(v.string()),
  customUrl: v.optional(v.string()),
  defaultLanguage: v.optional(v.string()),
  description: v.optional(v.string()),
  localized: v.optional(v.lazy(() => ChannelLocalizationSchema)),
  publishedAt: v.optional(v.pipe(v.string(), v.isoTimestamp())),
  thumbnails: v.optional(v.lazy(() => ThumbnailDetailsSchema)),
  title: v.optional(v.string()),
});

/** Statistics about a channel: number of subscribers, number of videos in the channel, etc. */
export type ChannelStatistics = {
  readonly commentCount?: string;
  readonly hiddenSubscriberCount?: boolean;
  readonly subscriberCount?: string;
  readonly videoCount?: string;
  readonly viewCount?: string;
};
export const ChannelStatisticsSchema: v.GenericSchema<unknown, ChannelStatistics> = v.looseObject({
  commentCount: v.optional(v.string()),
  hiddenSubscriberCount: v.optional(v.boolean()),
  subscriberCount: v.optional(v.string()),
  videoCount: v.optional(v.string()),
  viewCount: v.optional(v.string()),
});

/** JSON template for the status part of a channel. */
export type ChannelStatus = {
  readonly isChannelMonetizationEnabled?: boolean;
  readonly isLinked?: boolean;
  readonly longUploadsStatus?: "longUploadsUnspecified" | "allowed" | "eligible" | "disallowed";
  readonly madeForKids?: boolean;
  readonly privacyStatus?: "public" | "unlisted" | "private";
  readonly selfDeclaredMadeForKids?: boolean;
};
export const ChannelStatusSchema: v.GenericSchema<unknown, ChannelStatus> = v.looseObject({
  isChannelMonetizationEnabled: v.optional(v.boolean()),
  isLinked: v.optional(v.boolean()),
  longUploadsStatus: v.optional(v.union([v.literal("longUploadsUnspecified"), v.literal("allowed"), v.literal("eligible"), v.literal("disallowed")])),
  madeForKids: v.optional(v.boolean()),
  privacyStatus: v.optional(v.union([v.literal("public"), v.literal("unlisted"), v.literal("private")])),
  selfDeclaredMadeForKids: v.optional(v.boolean()),
});

/** Information specific to a creator in an affiliate program linked to a YouTube channel. */
export type ChannelToAffiliateProgramLinkDetails = {
  readonly merchantId?: string;
  readonly programStatus?: "affiliateProgramStatusUnspecified" | "active" | "inactive";
  readonly statusUpdateReason?: string;
  readonly statusUpdateTime?: string;
};
export const ChannelToAffiliateProgramLinkDetailsSchema: v.GenericSchema<unknown, ChannelToAffiliateProgramLinkDetails> = v.looseObject({
  merchantId: v.optional(v.string()),
  programStatus: v.optional(v.union([v.literal("affiliateProgramStatusUnspecified"), v.literal("active"), v.literal("inactive")])),
  statusUpdateReason: v.optional(v.string()),
  statusUpdateTime: v.optional(v.string()),
});

/** Freebase topic information related to the channel. */
export type ChannelTopicDetails = {
  readonly topicCategories?: ReadonlyArray<string>;
  readonly topicIds?: ReadonlyArray<string>;
};
export const ChannelTopicDetailsSchema: v.GenericSchema<unknown, ChannelTopicDetails> = v.looseObject({
  topicCategories: v.optional(v.array(v.string())),
  topicIds: v.optional(v.array(v.string())),
});

/** Information specific to a store on a merchandising platform linked to a YouTube channel. */
export type ChannelToStoreLinkDetails = {
  readonly billingDetails?: ChannelToStoreLinkDetailsBillingDetails;
  readonly merchantAffiliateProgramDetails?: ChannelToStoreLinkDetailsMerchantAffiliateProgramDetails;
  readonly merchantId?: string;
  readonly storeName?: string;
  readonly storeUrl?: string;
};
export const ChannelToStoreLinkDetailsSchema: v.GenericSchema<unknown, ChannelToStoreLinkDetails> = v.looseObject({
  billingDetails: v.optional(v.lazy(() => ChannelToStoreLinkDetailsBillingDetailsSchema)),
  merchantAffiliateProgramDetails: v.optional(v.lazy(() => ChannelToStoreLinkDetailsMerchantAffiliateProgramDetailsSchema)),
  merchantId: v.optional(v.string()),
  storeName: v.optional(v.string()),
  storeUrl: v.optional(v.string()),
});

/** Information specific to billing. */
export type ChannelToStoreLinkDetailsBillingDetails = {
  readonly billingStatus?: "billingStatusUnspecified" | "billingStatusPending" | "billingStatusActive" | "billingStatusInactive";
};
export const ChannelToStoreLinkDetailsBillingDetailsSchema: v.GenericSchema<unknown, ChannelToStoreLinkDetailsBillingDetails> = v.looseObject({
  billingStatus: v.optional(v.union([v.literal("billingStatusUnspecified"), v.literal("billingStatusPending"), v.literal("billingStatusActive"), v.literal("billingStatusInactive")])),
});

/** Information specific to merchant affiliate program. */
export type ChannelToStoreLinkDetailsMerchantAffiliateProgramDetails = {
  readonly status?: "merchantAffiliateProgramStatusUnspecified" | "merchantAffiliateProgramStatusEligible" | "merchantAffiliateProgramStatusActive" | "merchantAffiliateProgramStatusPaused";
};
export const ChannelToStoreLinkDetailsMerchantAffiliateProgramDetailsSchema: v.GenericSchema<unknown, ChannelToStoreLinkDetailsMerchantAffiliateProgramDetails> = v.looseObject({
  status: v.optional(v.union([v.literal("merchantAffiliateProgramStatusUnspecified"), v.literal("merchantAffiliateProgramStatusEligible"), v.literal("merchantAffiliateProgramStatusActive"), v.literal("merchantAffiliateProgramStatusPaused")])),
});

/** A *comment* represents a single YouTube comment. */
export type Comment = {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: CommentSnippet;
};
export const CommentSchema: v.GenericSchema<unknown, Comment> = v.looseObject({
  etag: v.optional(v.string()),
  id: v.optional(v.string()),
  kind: v.optional(v.string()),
  snippet: v.optional(v.lazy(() => CommentSnippetSchema)),
});

export type CommentListResponse = {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<Comment>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfo;
  readonly tokenPagination?: TokenPagination;
  readonly visitorId?: string;
};
export const CommentListResponseSchema: v.GenericSchema<unknown, CommentListResponse> = v.looseObject({
  etag: v.optional(v.string()),
  eventId: v.optional(v.string()),
  items: v.optional(v.array(v.lazy(() => CommentSchema))),
  kind: v.optional(v.string()),
  nextPageToken: v.optional(v.string()),
  pageInfo: v.optional(v.lazy(() => PageInfoSchema)),
  tokenPagination: v.optional(v.lazy(() => TokenPaginationSchema)),
  visitorId: v.optional(v.string()),
});

/** Basic details about a comment, such as its author and text. */
export type CommentSnippet = {
  readonly authorChannelId?: CommentSnippetAuthorChannelId;
  readonly authorChannelUrl?: string;
  readonly authorDisplayName?: string;
  readonly authorProfileImageUrl?: string;
  readonly canRate?: boolean;
  readonly channelId?: string;
  readonly likeCount?: number;
  readonly moderationStatus?: "published" | "heldForReview" | "likelySpam" | "rejected";
  readonly parentId?: string;
  readonly postId?: string;
  readonly publishedAt?: string;
  readonly textDisplay?: string;
  readonly textOriginal?: string;
  readonly updatedAt?: string;
  readonly videoId?: string;
  readonly viewerRating?: "none" | "like" | "dislike";
};
export const CommentSnippetSchema: v.GenericSchema<unknown, CommentSnippet> = v.looseObject({
  authorChannelId: v.optional(v.lazy(() => CommentSnippetAuthorChannelIdSchema)),
  authorChannelUrl: v.optional(v.string()),
  authorDisplayName: v.optional(v.string()),
  authorProfileImageUrl: v.optional(v.string()),
  canRate: v.optional(v.boolean()),
  channelId: v.optional(v.string()),
  likeCount: v.optional(v.pipe(v.number(), v.integer())),
  moderationStatus: v.optional(v.union([v.literal("published"), v.literal("heldForReview"), v.literal("likelySpam"), v.literal("rejected")])),
  parentId: v.optional(v.string()),
  postId: v.optional(v.string()),
  publishedAt: v.optional(v.pipe(v.string(), v.isoTimestamp())),
  textDisplay: v.optional(v.string()),
  textOriginal: v.optional(v.string()),
  updatedAt: v.optional(v.pipe(v.string(), v.isoTimestamp())),
  videoId: v.optional(v.string()),
  viewerRating: v.optional(v.union([v.literal("none"), v.literal("like"), v.literal("dislike")])),
});

/** Contains the id of the author's YouTube channel, if any. */
export type CommentSnippetAuthorChannelId = {
  readonly value?: string;
};
export const CommentSnippetAuthorChannelIdSchema: v.GenericSchema<unknown, CommentSnippetAuthorChannelId> = v.looseObject({
  value: v.optional(v.string()),
});

/** A *comment thread* represents information that applies to a top level comment and all its replies. It can also include the top level comment itself and some of the replies. */
export type CommentThread = {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly replies?: CommentThreadReplies;
  readonly snippet?: CommentThreadSnippet;
};
export const CommentThreadSchema: v.GenericSchema<unknown, CommentThread> = v.looseObject({
  etag: v.optional(v.string()),
  id: v.optional(v.string()),
  kind: v.optional(v.string()),
  replies: v.optional(v.lazy(() => CommentThreadRepliesSchema)),
  snippet: v.optional(v.lazy(() => CommentThreadSnippetSchema)),
});

export type CommentThreadListResponse = {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<CommentThread>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfo;
  readonly tokenPagination?: TokenPagination;
  readonly visitorId?: string;
};
export const CommentThreadListResponseSchema: v.GenericSchema<unknown, CommentThreadListResponse> = v.looseObject({
  etag: v.optional(v.string()),
  eventId: v.optional(v.string()),
  items: v.optional(v.array(v.lazy(() => CommentThreadSchema))),
  kind: v.optional(v.string()),
  nextPageToken: v.optional(v.string()),
  pageInfo: v.optional(v.lazy(() => PageInfoSchema)),
  tokenPagination: v.optional(v.lazy(() => TokenPaginationSchema)),
  visitorId: v.optional(v.string()),
});

/** Comments written in (direct or indirect) reply to the top level comment. */
export type CommentThreadReplies = {
  readonly comments?: ReadonlyArray<Comment>;
};
export const CommentThreadRepliesSchema: v.GenericSchema<unknown, CommentThreadReplies> = v.looseObject({
  comments: v.optional(v.array(v.lazy(() => CommentSchema))),
});

/** Basic details about a comment thread. */
export type CommentThreadSnippet = {
  readonly canReply?: boolean;
  readonly channelId?: string;
  readonly isPublic?: boolean;
  readonly postId?: string;
  readonly topLevelComment?: Comment;
  readonly totalReplyCount?: number;
  readonly videoId?: string;
};
export const CommentThreadSnippetSchema: v.GenericSchema<unknown, CommentThreadSnippet> = v.looseObject({
  canReply: v.optional(v.boolean()),
  channelId: v.optional(v.string()),
  isPublic: v.optional(v.boolean()),
  postId: v.optional(v.string()),
  topLevelComment: v.optional(v.lazy(() => CommentSchema)),
  totalReplyCount: v.optional(v.pipe(v.number(), v.integer())),
  videoId: v.optional(v.string()),
});

/** Ratings schemes. The country-specific ratings are mostly for movies and shows. LINT.IfChange */
export type ContentRating = {
  readonly acbRating?: "acbUnspecified" | "acbE" | "acbP" | "acbC" | "acbG" | "acbPg" | "acbM" | "acbMa15plus" | "acbR18plus" | "acbUnrated";
  readonly agcomRating?: "agcomUnspecified" | "agcomT" | "agcomVm14" | "agcomVm18" | "agcomUnrated";
  readonly anatelRating?: "anatelUnspecified" | "anatelF" | "anatelI" | "anatelI7" | "anatelI10" | "anatelI12" | "anatelR" | "anatelA" | "anatelUnrated";
  readonly bbfcRating?: "bbfcUnspecified" | "bbfcU" | "bbfcPg" | "bbfc12a" | "bbfc12" | "bbfc15" | "bbfc18" | "bbfcR18" | "bbfcUnrated";
  readonly bfvcRating?: "bfvcUnspecified" | "bfvcG" | "bfvcE" | "bfvc13" | "bfvc15" | "bfvc18" | "bfvc20" | "bfvcB" | "bfvcUnrated";
  readonly bmukkRating?: "bmukkUnspecified" | "bmukkAa" | "bmukk6" | "bmukk8" | "bmukk10" | "bmukk12" | "bmukk14" | "bmukk16" | "bmukkUnrated";
  readonly catvfrRating?: "catvfrUnspecified" | "catvfrG" | "catvfr8plus" | "catvfr13plus" | "catvfr16plus" | "catvfr18plus" | "catvfrUnrated" | "catvfrE";
  readonly catvRating?: "catvUnspecified" | "catvC" | "catvC8" | "catvG" | "catvPg" | "catv14plus" | "catv18plus" | "catvUnrated" | "catvE";
  readonly cbfcRating?: "cbfcUnspecified" | "cbfcU" | "cbfcUA" | "cbfcUA7plus" | "cbfcUA13plus" | "cbfcUA16plus" | "cbfcA" | "cbfcS" | "cbfcUnrated";
  readonly cccRating?: "cccUnspecified" | "cccTe" | "ccc6" | "ccc14" | "ccc18" | "ccc18v" | "ccc18s" | "cccUnrated";
  readonly cceRating?: "cceUnspecified" | "cceM4" | "cceM6" | "cceM12" | "cceM16" | "cceM18" | "cceUnrated" | "cceM14";
  readonly chfilmRating?: "chfilmUnspecified" | "chfilm0" | "chfilm6" | "chfilm12" | "chfilm16" | "chfilm18" | "chfilmUnrated";
  readonly chvrsRating?: "chvrsUnspecified" | "chvrsG" | "chvrsPg" | "chvrs14a" | "chvrs18a" | "chvrsR" | "chvrsE" | "chvrsUnrated";
  readonly cicfRating?: "cicfUnspecified" | "cicfE" | "cicfKtEa" | "cicfKntEna" | "cicfUnrated";
  readonly cnaRating?: "cnaUnspecified" | "cnaAp" | "cna12" | "cna15" | "cna18" | "cna18plus" | "cnaUnrated";
  readonly cncRating?: "cncUnspecified" | "cncT" | "cnc10" | "cnc12" | "cnc16" | "cnc18" | "cncE" | "cncInterdiction" | "cncUnrated";
  readonly csaRating?: "csaUnspecified" | "csaT" | "csa10" | "csa12" | "csa16" | "csa18" | "csaInterdiction" | "csaUnrated";
  readonly cscfRating?: "cscfUnspecified" | "cscfAl" | "cscfA" | "cscf6" | "cscf9" | "cscf12" | "cscf16" | "cscf18" | "cscfUnrated";
  readonly czfilmRating?: "czfilmUnspecified" | "czfilmU" | "czfilm12" | "czfilm14" | "czfilm18" | "czfilmUnrated";
  readonly djctqRating?: "djctqUnspecified" | "djctqL" | "djctq10" | "djctq12" | "djctq14" | "djctq16" | "djctq18" | "djctqEr" | "djctqL10" | "djctqL12" | "djctqL14" | "djctqL16" | "djctqL18" | "djctq1012" | "djctq1014" | "djctq1016" | "djctq1018" | "djctq1214" | "djctq1216" | "djctq1218" | "djctq1416" | "djctq1418" | "djctq1618" | "djctqUnrated";
  readonly djctqRatingReasons?: ReadonlyArray<"djctqRatingReasonUnspecified" | "djctqViolence" | "djctqExtremeViolence" | "djctqSexualContent" | "djctqNudity" | "djctqSex" | "djctqExplicitSex" | "djctqDrugs" | "djctqLegalDrugs" | "djctqIllegalDrugs" | "djctqInappropriateLanguage" | "djctqCriminalActs" | "djctqImpactingContent" | "djctqFear" | "djctqMedicalProcedures" | "djctqSensitiveTopics" | "djctqFantasyViolence">;
  readonly ecbmctRating?: "ecbmctUnspecified" | "ecbmctG" | "ecbmct7a" | "ecbmct7plus" | "ecbmct13a" | "ecbmct13plus" | "ecbmct15a" | "ecbmct15plus" | "ecbmct18plus" | "ecbmctUnrated";
  readonly eefilmRating?: "eefilmUnspecified" | "eefilmPere" | "eefilmL" | "eefilmMs6" | "eefilmK6" | "eefilmMs12" | "eefilmK12" | "eefilmK14" | "eefilmK16" | "eefilmUnrated";
  readonly egfilmRating?: "egfilmUnspecified" | "egfilmGn" | "egfilm18" | "egfilmBn" | "egfilmUnrated";
  readonly eirinRating?: "eirinUnspecified" | "eirinG" | "eirinPg12" | "eirinR15plus" | "eirinR18plus" | "eirinUnrated";
  readonly fcbmRating?: "fcbmUnspecified" | "fcbmU" | "fcbmPg13" | "fcbmP13" | "fcbm18" | "fcbm18sx" | "fcbm18pa" | "fcbm18sg" | "fcbm18pl" | "fcbmUnrated";
  readonly fcoRating?: "fcoUnspecified" | "fcoI" | "fcoIia" | "fcoIib" | "fcoIi" | "fcoIii" | "fcoUnrated";
  readonly fmocRating?: "fmocUnspecified" | "fmocU" | "fmoc10" | "fmoc12" | "fmoc16" | "fmoc18" | "fmocE" | "fmocUnrated";
  readonly fpbRating?: "fpbUnspecified" | "fpbA" | "fpbPg" | "fpb79Pg" | "fpb1012Pg" | "fpb13" | "fpb16" | "fpb18" | "fpbX18" | "fpbXx" | "fpbUnrated" | "fpb10";
  readonly fpbRatingReasons?: ReadonlyArray<"fpbRatingReasonUnspecified" | "fpbBlasphemy" | "fpbLanguage" | "fpbNudity" | "fpbPrejudice" | "fpbSex" | "fpbViolence" | "fpbDrugs" | "fpbSexualViolence" | "fpbHorror" | "fpbCriminalTechniques" | "fpbImitativeActsTechniques">;
  readonly fskRating?: "fskUnspecified" | "fsk0" | "fsk6" | "fsk12" | "fsk16" | "fsk18" | "fskUnrated";
  readonly grfilmRating?: "grfilmUnspecified" | "grfilmK" | "grfilmE" | "grfilmK12" | "grfilmK13" | "grfilmK15" | "grfilmK17" | "grfilmK18" | "grfilmUnrated";
  readonly icaaRating?: "icaaUnspecified" | "icaaApta" | "icaa7" | "icaa12" | "icaa13" | "icaa16" | "icaa18" | "icaaX" | "icaaUnrated";
  readonly ifcoRating?: "ifcoUnspecified" | "ifcoG" | "ifcoPg" | "ifco12" | "ifco12a" | "ifco15" | "ifco15a" | "ifco16" | "ifco18" | "ifcoUnrated";
  readonly ilfilmRating?: "ilfilmUnspecified" | "ilfilmAa" | "ilfilm12" | "ilfilm14" | "ilfilm16" | "ilfilm18" | "ilfilmUnrated";
  readonly incaaRating?: "incaaUnspecified" | "incaaAtp" | "incaaSam13" | "incaaSam16" | "incaaSam18" | "incaaC" | "incaaUnrated";
  readonly kfcbRating?: "kfcbUnspecified" | "kfcbG" | "kfcbPg" | "kfcb16plus" | "kfcbR" | "kfcbUnrated";
  readonly kijkwijzerRating?: "kijkwijzerUnspecified" | "kijkwijzerAl" | "kijkwijzer6" | "kijkwijzer9" | "kijkwijzer12" | "kijkwijzer16" | "kijkwijzer18" | "kijkwijzerUnrated";
  readonly kmrbRating?: "kmrbUnspecified" | "kmrbAll" | "kmrb12plus" | "kmrb15plus" | "kmrbTeenr" | "kmrbR" | "kmrbUnrated";
  readonly lsfRating?: "lsfUnspecified" | "lsfSu" | "lsfA" | "lsfBo" | "lsf13" | "lsfR" | "lsf17" | "lsfD" | "lsf21" | "lsfUnrated";
  readonly mccaaRating?: "mccaaUnspecified" | "mccaaU" | "mccaaPg" | "mccaa12a" | "mccaa12" | "mccaa14" | "mccaa15" | "mccaa16" | "mccaa18" | "mccaaUnrated";
  readonly mccypRating?: "mccypUnspecified" | "mccypA" | "mccyp7" | "mccyp11" | "mccyp15" | "mccypUnrated";
  readonly mcstRating?: "mcstUnspecified" | "mcstP" | "mcst0" | "mcstC13" | "mcstC16" | "mcst16plus" | "mcstC18" | "mcstGPg" | "mcstUnrated";
  readonly mdaRating?: "mdaUnspecified" | "mdaG" | "mdaPg" | "mdaPg13" | "mdaNc16" | "mdaM18" | "mdaR21" | "mdaUnrated";
  readonly medietilsynetRating?: "medietilsynetUnspecified" | "medietilsynetA" | "medietilsynet6" | "medietilsynet7" | "medietilsynet9" | "medietilsynet11" | "medietilsynet12" | "medietilsynet15" | "medietilsynet18" | "medietilsynetUnrated";
  readonly mekuRating?: "mekuUnspecified" | "mekuS" | "meku7" | "meku12" | "meku16" | "meku18" | "mekuUnrated";
  readonly menaMpaaRating?: "menaMpaaUnspecified" | "menaMpaaG" | "menaMpaaPg" | "menaMpaaPg13" | "menaMpaaR" | "menaMpaaUnrated";
  readonly mibacRating?: "mibacUnspecified" | "mibacT" | "mibacVap" | "mibacVm6" | "mibacVm12" | "mibacVm14" | "mibacVm16" | "mibacVm18" | "mibacUnrated";
  readonly mocRating?: "mocUnspecified" | "mocE" | "mocT" | "moc7" | "moc12" | "moc15" | "moc18" | "mocX" | "mocBanned" | "mocUnrated";
  readonly moctwRating?: "moctwUnspecified" | "moctwG" | "moctwP" | "moctwPg" | "moctwR" | "moctwUnrated" | "moctwR12" | "moctwR15";
  readonly mpaaRating?: "mpaaUnspecified" | "mpaaG" | "mpaaPg" | "mpaaPg13" | "mpaaR" | "mpaaNc17" | "mpaaX" | "mpaaUnrated";
  readonly mpaatRating?: "mpaatUnspecified" | "mpaatGb" | "mpaatRb";
  readonly mtrcbRating?: "mtrcbUnspecified" | "mtrcbG" | "mtrcbPg" | "mtrcbR13" | "mtrcbR16" | "mtrcbR18" | "mtrcbX" | "mtrcbUnrated";
  readonly nbcplRating?: "nbcplUnspecified" | "nbcplI" | "nbcplIi" | "nbcplIii" | "nbcplIv" | "nbcpl18plus" | "nbcplUnrated";
  readonly nbcRating?: "nbcUnspecified" | "nbcG" | "nbcPg" | "nbc12plus" | "nbc15plus" | "nbc18plus" | "nbc18plusr" | "nbcPu" | "nbcUnrated";
  readonly nfrcRating?: "nfrcUnspecified" | "nfrcA" | "nfrcB" | "nfrcC" | "nfrcD" | "nfrcX" | "nfrcUnrated";
  readonly nfvcbRating?: "nfvcbUnspecified" | "nfvcbG" | "nfvcbPg" | "nfvcb12" | "nfvcb12a" | "nfvcb15" | "nfvcb18" | "nfvcbRe" | "nfvcbUnrated";
  readonly nkclvRating?: "nkclvUnspecified" | "nkclvU" | "nkclv7plus" | "nkclv12plus" | "nkclv16plus" | "nkclv18plus" | "nkclvUnrated";
  readonly nmcRating?: "nmcUnspecified" | "nmcG" | "nmcPg" | "nmcPg13" | "nmcPg15" | "nmc15plus" | "nmc18plus" | "nmc18tc" | "nmcUnrated";
  readonly oflcRating?: "oflcUnspecified" | "oflcG" | "oflcPg" | "oflcM" | "oflcR13" | "oflcR15" | "oflcR16" | "oflcR18" | "oflcUnrated" | "oflcRp13" | "oflcRp16" | "oflcRp18";
  readonly pefilmRating?: "pefilmUnspecified" | "pefilmPt" | "pefilmPg" | "pefilm14" | "pefilm18" | "pefilmUnrated";
  readonly rcnofRating?: "rcnofUnspecified" | "rcnofI" | "rcnofIi" | "rcnofIii" | "rcnofIv" | "rcnofV" | "rcnofVi" | "rcnofUnrated";
  readonly resorteviolenciaRating?: "resorteviolenciaUnspecified" | "resorteviolenciaA" | "resorteviolenciaB" | "resorteviolenciaC" | "resorteviolenciaD" | "resorteviolenciaE" | "resorteviolenciaUnrated";
  readonly rtcRating?: "rtcUnspecified" | "rtcAa" | "rtcA" | "rtcB" | "rtcB15" | "rtcC" | "rtcD" | "rtcUnrated";
  readonly rteRating?: "rteUnspecified" | "rteGa" | "rteCh" | "rtePs" | "rteMa" | "rteUnrated";
  readonly russiaRating?: "russiaUnspecified" | "russia0" | "russia6" | "russia12" | "russia16" | "russia18" | "russiaUnrated";
  readonly skfilmRating?: "skfilmUnspecified" | "skfilmG" | "skfilmP2" | "skfilmP5" | "skfilmP8" | "skfilmUnrated";
  readonly smaisRating?: "smaisUnspecified" | "smaisL" | "smais7" | "smais12" | "smais14" | "smais16" | "smais18" | "smaisUnrated";
  readonly smsaRating?: "smsaUnspecified" | "smsaA" | "smsa7" | "smsa11" | "smsa15" | "smsaUnrated";
  readonly tvpgRating?: "tvpgUnspecified" | "tvpgY" | "tvpgY7" | "tvpgY7Fv" | "tvpgG" | "tvpgPg" | "pg14" | "tvpgMa" | "tvpgUnrated";
  readonly ytRating?: "ytUnspecified" | "ytAgeRestricted";
};
export const ContentRatingSchema: v.GenericSchema<unknown, ContentRating> = v.looseObject({
  acbRating: v.optional(v.union([v.literal("acbUnspecified"), v.literal("acbE"), v.literal("acbP"), v.literal("acbC"), v.literal("acbG"), v.literal("acbPg"), v.literal("acbM"), v.literal("acbMa15plus"), v.literal("acbR18plus"), v.literal("acbUnrated")])),
  agcomRating: v.optional(v.union([v.literal("agcomUnspecified"), v.literal("agcomT"), v.literal("agcomVm14"), v.literal("agcomVm18"), v.literal("agcomUnrated")])),
  anatelRating: v.optional(v.union([v.literal("anatelUnspecified"), v.literal("anatelF"), v.literal("anatelI"), v.literal("anatelI7"), v.literal("anatelI10"), v.literal("anatelI12"), v.literal("anatelR"), v.literal("anatelA"), v.literal("anatelUnrated")])),
  bbfcRating: v.optional(v.union([v.literal("bbfcUnspecified"), v.literal("bbfcU"), v.literal("bbfcPg"), v.literal("bbfc12a"), v.literal("bbfc12"), v.literal("bbfc15"), v.literal("bbfc18"), v.literal("bbfcR18"), v.literal("bbfcUnrated")])),
  bfvcRating: v.optional(v.union([v.literal("bfvcUnspecified"), v.literal("bfvcG"), v.literal("bfvcE"), v.literal("bfvc13"), v.literal("bfvc15"), v.literal("bfvc18"), v.literal("bfvc20"), v.literal("bfvcB"), v.literal("bfvcUnrated")])),
  bmukkRating: v.optional(v.union([v.literal("bmukkUnspecified"), v.literal("bmukkAa"), v.literal("bmukk6"), v.literal("bmukk8"), v.literal("bmukk10"), v.literal("bmukk12"), v.literal("bmukk14"), v.literal("bmukk16"), v.literal("bmukkUnrated")])),
  catvfrRating: v.optional(v.union([v.literal("catvfrUnspecified"), v.literal("catvfrG"), v.literal("catvfr8plus"), v.literal("catvfr13plus"), v.literal("catvfr16plus"), v.literal("catvfr18plus"), v.literal("catvfrUnrated"), v.literal("catvfrE")])),
  catvRating: v.optional(v.union([v.literal("catvUnspecified"), v.literal("catvC"), v.literal("catvC8"), v.literal("catvG"), v.literal("catvPg"), v.literal("catv14plus"), v.literal("catv18plus"), v.literal("catvUnrated"), v.literal("catvE")])),
  cbfcRating: v.optional(v.union([v.literal("cbfcUnspecified"), v.literal("cbfcU"), v.literal("cbfcUA"), v.literal("cbfcUA7plus"), v.literal("cbfcUA13plus"), v.literal("cbfcUA16plus"), v.literal("cbfcA"), v.literal("cbfcS"), v.literal("cbfcUnrated")])),
  cccRating: v.optional(v.union([v.literal("cccUnspecified"), v.literal("cccTe"), v.literal("ccc6"), v.literal("ccc14"), v.literal("ccc18"), v.literal("ccc18v"), v.literal("ccc18s"), v.literal("cccUnrated")])),
  cceRating: v.optional(v.union([v.literal("cceUnspecified"), v.literal("cceM4"), v.literal("cceM6"), v.literal("cceM12"), v.literal("cceM16"), v.literal("cceM18"), v.literal("cceUnrated"), v.literal("cceM14")])),
  chfilmRating: v.optional(v.union([v.literal("chfilmUnspecified"), v.literal("chfilm0"), v.literal("chfilm6"), v.literal("chfilm12"), v.literal("chfilm16"), v.literal("chfilm18"), v.literal("chfilmUnrated")])),
  chvrsRating: v.optional(v.union([v.literal("chvrsUnspecified"), v.literal("chvrsG"), v.literal("chvrsPg"), v.literal("chvrs14a"), v.literal("chvrs18a"), v.literal("chvrsR"), v.literal("chvrsE"), v.literal("chvrsUnrated")])),
  cicfRating: v.optional(v.union([v.literal("cicfUnspecified"), v.literal("cicfE"), v.literal("cicfKtEa"), v.literal("cicfKntEna"), v.literal("cicfUnrated")])),
  cnaRating: v.optional(v.union([v.literal("cnaUnspecified"), v.literal("cnaAp"), v.literal("cna12"), v.literal("cna15"), v.literal("cna18"), v.literal("cna18plus"), v.literal("cnaUnrated")])),
  cncRating: v.optional(v.union([v.literal("cncUnspecified"), v.literal("cncT"), v.literal("cnc10"), v.literal("cnc12"), v.literal("cnc16"), v.literal("cnc18"), v.literal("cncE"), v.literal("cncInterdiction"), v.literal("cncUnrated")])),
  csaRating: v.optional(v.union([v.literal("csaUnspecified"), v.literal("csaT"), v.literal("csa10"), v.literal("csa12"), v.literal("csa16"), v.literal("csa18"), v.literal("csaInterdiction"), v.literal("csaUnrated")])),
  cscfRating: v.optional(v.union([v.literal("cscfUnspecified"), v.literal("cscfAl"), v.literal("cscfA"), v.literal("cscf6"), v.literal("cscf9"), v.literal("cscf12"), v.literal("cscf16"), v.literal("cscf18"), v.literal("cscfUnrated")])),
  czfilmRating: v.optional(v.union([v.literal("czfilmUnspecified"), v.literal("czfilmU"), v.literal("czfilm12"), v.literal("czfilm14"), v.literal("czfilm18"), v.literal("czfilmUnrated")])),
  djctqRating: v.optional(v.union([v.literal("djctqUnspecified"), v.literal("djctqL"), v.literal("djctq10"), v.literal("djctq12"), v.literal("djctq14"), v.literal("djctq16"), v.literal("djctq18"), v.literal("djctqEr"), v.literal("djctqL10"), v.literal("djctqL12"), v.literal("djctqL14"), v.literal("djctqL16"), v.literal("djctqL18"), v.literal("djctq1012"), v.literal("djctq1014"), v.literal("djctq1016"), v.literal("djctq1018"), v.literal("djctq1214"), v.literal("djctq1216"), v.literal("djctq1218"), v.literal("djctq1416"), v.literal("djctq1418"), v.literal("djctq1618"), v.literal("djctqUnrated")])),
  djctqRatingReasons: v.optional(v.array(v.union([v.literal("djctqRatingReasonUnspecified"), v.literal("djctqViolence"), v.literal("djctqExtremeViolence"), v.literal("djctqSexualContent"), v.literal("djctqNudity"), v.literal("djctqSex"), v.literal("djctqExplicitSex"), v.literal("djctqDrugs"), v.literal("djctqLegalDrugs"), v.literal("djctqIllegalDrugs"), v.literal("djctqInappropriateLanguage"), v.literal("djctqCriminalActs"), v.literal("djctqImpactingContent"), v.literal("djctqFear"), v.literal("djctqMedicalProcedures"), v.literal("djctqSensitiveTopics"), v.literal("djctqFantasyViolence")]))),
  ecbmctRating: v.optional(v.union([v.literal("ecbmctUnspecified"), v.literal("ecbmctG"), v.literal("ecbmct7a"), v.literal("ecbmct7plus"), v.literal("ecbmct13a"), v.literal("ecbmct13plus"), v.literal("ecbmct15a"), v.literal("ecbmct15plus"), v.literal("ecbmct18plus"), v.literal("ecbmctUnrated")])),
  eefilmRating: v.optional(v.union([v.literal("eefilmUnspecified"), v.literal("eefilmPere"), v.literal("eefilmL"), v.literal("eefilmMs6"), v.literal("eefilmK6"), v.literal("eefilmMs12"), v.literal("eefilmK12"), v.literal("eefilmK14"), v.literal("eefilmK16"), v.literal("eefilmUnrated")])),
  egfilmRating: v.optional(v.union([v.literal("egfilmUnspecified"), v.literal("egfilmGn"), v.literal("egfilm18"), v.literal("egfilmBn"), v.literal("egfilmUnrated")])),
  eirinRating: v.optional(v.union([v.literal("eirinUnspecified"), v.literal("eirinG"), v.literal("eirinPg12"), v.literal("eirinR15plus"), v.literal("eirinR18plus"), v.literal("eirinUnrated")])),
  fcbmRating: v.optional(v.union([v.literal("fcbmUnspecified"), v.literal("fcbmU"), v.literal("fcbmPg13"), v.literal("fcbmP13"), v.literal("fcbm18"), v.literal("fcbm18sx"), v.literal("fcbm18pa"), v.literal("fcbm18sg"), v.literal("fcbm18pl"), v.literal("fcbmUnrated")])),
  fcoRating: v.optional(v.union([v.literal("fcoUnspecified"), v.literal("fcoI"), v.literal("fcoIia"), v.literal("fcoIib"), v.literal("fcoIi"), v.literal("fcoIii"), v.literal("fcoUnrated")])),
  fmocRating: v.optional(v.union([v.literal("fmocUnspecified"), v.literal("fmocU"), v.literal("fmoc10"), v.literal("fmoc12"), v.literal("fmoc16"), v.literal("fmoc18"), v.literal("fmocE"), v.literal("fmocUnrated")])),
  fpbRating: v.optional(v.union([v.literal("fpbUnspecified"), v.literal("fpbA"), v.literal("fpbPg"), v.literal("fpb79Pg"), v.literal("fpb1012Pg"), v.literal("fpb13"), v.literal("fpb16"), v.literal("fpb18"), v.literal("fpbX18"), v.literal("fpbXx"), v.literal("fpbUnrated"), v.literal("fpb10")])),
  fpbRatingReasons: v.optional(v.array(v.union([v.literal("fpbRatingReasonUnspecified"), v.literal("fpbBlasphemy"), v.literal("fpbLanguage"), v.literal("fpbNudity"), v.literal("fpbPrejudice"), v.literal("fpbSex"), v.literal("fpbViolence"), v.literal("fpbDrugs"), v.literal("fpbSexualViolence"), v.literal("fpbHorror"), v.literal("fpbCriminalTechniques"), v.literal("fpbImitativeActsTechniques")]))),
  fskRating: v.optional(v.union([v.literal("fskUnspecified"), v.literal("fsk0"), v.literal("fsk6"), v.literal("fsk12"), v.literal("fsk16"), v.literal("fsk18"), v.literal("fskUnrated")])),
  grfilmRating: v.optional(v.union([v.literal("grfilmUnspecified"), v.literal("grfilmK"), v.literal("grfilmE"), v.literal("grfilmK12"), v.literal("grfilmK13"), v.literal("grfilmK15"), v.literal("grfilmK17"), v.literal("grfilmK18"), v.literal("grfilmUnrated")])),
  icaaRating: v.optional(v.union([v.literal("icaaUnspecified"), v.literal("icaaApta"), v.literal("icaa7"), v.literal("icaa12"), v.literal("icaa13"), v.literal("icaa16"), v.literal("icaa18"), v.literal("icaaX"), v.literal("icaaUnrated")])),
  ifcoRating: v.optional(v.union([v.literal("ifcoUnspecified"), v.literal("ifcoG"), v.literal("ifcoPg"), v.literal("ifco12"), v.literal("ifco12a"), v.literal("ifco15"), v.literal("ifco15a"), v.literal("ifco16"), v.literal("ifco18"), v.literal("ifcoUnrated")])),
  ilfilmRating: v.optional(v.union([v.literal("ilfilmUnspecified"), v.literal("ilfilmAa"), v.literal("ilfilm12"), v.literal("ilfilm14"), v.literal("ilfilm16"), v.literal("ilfilm18"), v.literal("ilfilmUnrated")])),
  incaaRating: v.optional(v.union([v.literal("incaaUnspecified"), v.literal("incaaAtp"), v.literal("incaaSam13"), v.literal("incaaSam16"), v.literal("incaaSam18"), v.literal("incaaC"), v.literal("incaaUnrated")])),
  kfcbRating: v.optional(v.union([v.literal("kfcbUnspecified"), v.literal("kfcbG"), v.literal("kfcbPg"), v.literal("kfcb16plus"), v.literal("kfcbR"), v.literal("kfcbUnrated")])),
  kijkwijzerRating: v.optional(v.union([v.literal("kijkwijzerUnspecified"), v.literal("kijkwijzerAl"), v.literal("kijkwijzer6"), v.literal("kijkwijzer9"), v.literal("kijkwijzer12"), v.literal("kijkwijzer16"), v.literal("kijkwijzer18"), v.literal("kijkwijzerUnrated")])),
  kmrbRating: v.optional(v.union([v.literal("kmrbUnspecified"), v.literal("kmrbAll"), v.literal("kmrb12plus"), v.literal("kmrb15plus"), v.literal("kmrbTeenr"), v.literal("kmrbR"), v.literal("kmrbUnrated")])),
  lsfRating: v.optional(v.union([v.literal("lsfUnspecified"), v.literal("lsfSu"), v.literal("lsfA"), v.literal("lsfBo"), v.literal("lsf13"), v.literal("lsfR"), v.literal("lsf17"), v.literal("lsfD"), v.literal("lsf21"), v.literal("lsfUnrated")])),
  mccaaRating: v.optional(v.union([v.literal("mccaaUnspecified"), v.literal("mccaaU"), v.literal("mccaaPg"), v.literal("mccaa12a"), v.literal("mccaa12"), v.literal("mccaa14"), v.literal("mccaa15"), v.literal("mccaa16"), v.literal("mccaa18"), v.literal("mccaaUnrated")])),
  mccypRating: v.optional(v.union([v.literal("mccypUnspecified"), v.literal("mccypA"), v.literal("mccyp7"), v.literal("mccyp11"), v.literal("mccyp15"), v.literal("mccypUnrated")])),
  mcstRating: v.optional(v.union([v.literal("mcstUnspecified"), v.literal("mcstP"), v.literal("mcst0"), v.literal("mcstC13"), v.literal("mcstC16"), v.literal("mcst16plus"), v.literal("mcstC18"), v.literal("mcstGPg"), v.literal("mcstUnrated")])),
  mdaRating: v.optional(v.union([v.literal("mdaUnspecified"), v.literal("mdaG"), v.literal("mdaPg"), v.literal("mdaPg13"), v.literal("mdaNc16"), v.literal("mdaM18"), v.literal("mdaR21"), v.literal("mdaUnrated")])),
  medietilsynetRating: v.optional(v.union([v.literal("medietilsynetUnspecified"), v.literal("medietilsynetA"), v.literal("medietilsynet6"), v.literal("medietilsynet7"), v.literal("medietilsynet9"), v.literal("medietilsynet11"), v.literal("medietilsynet12"), v.literal("medietilsynet15"), v.literal("medietilsynet18"), v.literal("medietilsynetUnrated")])),
  mekuRating: v.optional(v.union([v.literal("mekuUnspecified"), v.literal("mekuS"), v.literal("meku7"), v.literal("meku12"), v.literal("meku16"), v.literal("meku18"), v.literal("mekuUnrated")])),
  menaMpaaRating: v.optional(v.union([v.literal("menaMpaaUnspecified"), v.literal("menaMpaaG"), v.literal("menaMpaaPg"), v.literal("menaMpaaPg13"), v.literal("menaMpaaR"), v.literal("menaMpaaUnrated")])),
  mibacRating: v.optional(v.union([v.literal("mibacUnspecified"), v.literal("mibacT"), v.literal("mibacVap"), v.literal("mibacVm6"), v.literal("mibacVm12"), v.literal("mibacVm14"), v.literal("mibacVm16"), v.literal("mibacVm18"), v.literal("mibacUnrated")])),
  mocRating: v.optional(v.union([v.literal("mocUnspecified"), v.literal("mocE"), v.literal("mocT"), v.literal("moc7"), v.literal("moc12"), v.literal("moc15"), v.literal("moc18"), v.literal("mocX"), v.literal("mocBanned"), v.literal("mocUnrated")])),
  moctwRating: v.optional(v.union([v.literal("moctwUnspecified"), v.literal("moctwG"), v.literal("moctwP"), v.literal("moctwPg"), v.literal("moctwR"), v.literal("moctwUnrated"), v.literal("moctwR12"), v.literal("moctwR15")])),
  mpaaRating: v.optional(v.union([v.literal("mpaaUnspecified"), v.literal("mpaaG"), v.literal("mpaaPg"), v.literal("mpaaPg13"), v.literal("mpaaR"), v.literal("mpaaNc17"), v.literal("mpaaX"), v.literal("mpaaUnrated")])),
  mpaatRating: v.optional(v.union([v.literal("mpaatUnspecified"), v.literal("mpaatGb"), v.literal("mpaatRb")])),
  mtrcbRating: v.optional(v.union([v.literal("mtrcbUnspecified"), v.literal("mtrcbG"), v.literal("mtrcbPg"), v.literal("mtrcbR13"), v.literal("mtrcbR16"), v.literal("mtrcbR18"), v.literal("mtrcbX"), v.literal("mtrcbUnrated")])),
  nbcplRating: v.optional(v.union([v.literal("nbcplUnspecified"), v.literal("nbcplI"), v.literal("nbcplIi"), v.literal("nbcplIii"), v.literal("nbcplIv"), v.literal("nbcpl18plus"), v.literal("nbcplUnrated")])),
  nbcRating: v.optional(v.union([v.literal("nbcUnspecified"), v.literal("nbcG"), v.literal("nbcPg"), v.literal("nbc12plus"), v.literal("nbc15plus"), v.literal("nbc18plus"), v.literal("nbc18plusr"), v.literal("nbcPu"), v.literal("nbcUnrated")])),
  nfrcRating: v.optional(v.union([v.literal("nfrcUnspecified"), v.literal("nfrcA"), v.literal("nfrcB"), v.literal("nfrcC"), v.literal("nfrcD"), v.literal("nfrcX"), v.literal("nfrcUnrated")])),
  nfvcbRating: v.optional(v.union([v.literal("nfvcbUnspecified"), v.literal("nfvcbG"), v.literal("nfvcbPg"), v.literal("nfvcb12"), v.literal("nfvcb12a"), v.literal("nfvcb15"), v.literal("nfvcb18"), v.literal("nfvcbRe"), v.literal("nfvcbUnrated")])),
  nkclvRating: v.optional(v.union([v.literal("nkclvUnspecified"), v.literal("nkclvU"), v.literal("nkclv7plus"), v.literal("nkclv12plus"), v.literal("nkclv16plus"), v.literal("nkclv18plus"), v.literal("nkclvUnrated")])),
  nmcRating: v.optional(v.union([v.literal("nmcUnspecified"), v.literal("nmcG"), v.literal("nmcPg"), v.literal("nmcPg13"), v.literal("nmcPg15"), v.literal("nmc15plus"), v.literal("nmc18plus"), v.literal("nmc18tc"), v.literal("nmcUnrated")])),
  oflcRating: v.optional(v.union([v.literal("oflcUnspecified"), v.literal("oflcG"), v.literal("oflcPg"), v.literal("oflcM"), v.literal("oflcR13"), v.literal("oflcR15"), v.literal("oflcR16"), v.literal("oflcR18"), v.literal("oflcUnrated"), v.literal("oflcRp13"), v.literal("oflcRp16"), v.literal("oflcRp18")])),
  pefilmRating: v.optional(v.union([v.literal("pefilmUnspecified"), v.literal("pefilmPt"), v.literal("pefilmPg"), v.literal("pefilm14"), v.literal("pefilm18"), v.literal("pefilmUnrated")])),
  rcnofRating: v.optional(v.union([v.literal("rcnofUnspecified"), v.literal("rcnofI"), v.literal("rcnofIi"), v.literal("rcnofIii"), v.literal("rcnofIv"), v.literal("rcnofV"), v.literal("rcnofVi"), v.literal("rcnofUnrated")])),
  resorteviolenciaRating: v.optional(v.union([v.literal("resorteviolenciaUnspecified"), v.literal("resorteviolenciaA"), v.literal("resorteviolenciaB"), v.literal("resorteviolenciaC"), v.literal("resorteviolenciaD"), v.literal("resorteviolenciaE"), v.literal("resorteviolenciaUnrated")])),
  rtcRating: v.optional(v.union([v.literal("rtcUnspecified"), v.literal("rtcAa"), v.literal("rtcA"), v.literal("rtcB"), v.literal("rtcB15"), v.literal("rtcC"), v.literal("rtcD"), v.literal("rtcUnrated")])),
  rteRating: v.optional(v.union([v.literal("rteUnspecified"), v.literal("rteGa"), v.literal("rteCh"), v.literal("rtePs"), v.literal("rteMa"), v.literal("rteUnrated")])),
  russiaRating: v.optional(v.union([v.literal("russiaUnspecified"), v.literal("russia0"), v.literal("russia6"), v.literal("russia12"), v.literal("russia16"), v.literal("russia18"), v.literal("russiaUnrated")])),
  skfilmRating: v.optional(v.union([v.literal("skfilmUnspecified"), v.literal("skfilmG"), v.literal("skfilmP2"), v.literal("skfilmP5"), v.literal("skfilmP8"), v.literal("skfilmUnrated")])),
  smaisRating: v.optional(v.union([v.literal("smaisUnspecified"), v.literal("smaisL"), v.literal("smais7"), v.literal("smais12"), v.literal("smais14"), v.literal("smais16"), v.literal("smais18"), v.literal("smaisUnrated")])),
  smsaRating: v.optional(v.union([v.literal("smsaUnspecified"), v.literal("smsaA"), v.literal("smsa7"), v.literal("smsa11"), v.literal("smsa15"), v.literal("smsaUnrated")])),
  tvpgRating: v.optional(v.union([v.literal("tvpgUnspecified"), v.literal("tvpgY"), v.literal("tvpgY7"), v.literal("tvpgY7Fv"), v.literal("tvpgG"), v.literal("tvpgPg"), v.literal("pg14"), v.literal("tvpgMa"), v.literal("tvpgUnrated")])),
  ytRating: v.optional(v.union([v.literal("ytUnspecified"), v.literal("ytAgeRestricted")])),
});

/** Note that there may be a 5-second end-point resolution issue. For instance, if a cuepoint comes in for 22:03:27, we may stuff the cuepoint into 22:03:25 or 22:03:30, depending. This is an artifact of HLS. */
export type Cuepoint = {
  readonly cueType?: "cueTypeUnspecified" | "cueTypeAd";
  readonly durationSecs?: number;
  readonly etag?: string;
  readonly id?: string;
  readonly insertionOffsetTimeMs?: string;
  readonly walltimeMs?: string;
};
export const CuepointSchema: v.GenericSchema<unknown, Cuepoint> = v.looseObject({
  cueType: v.optional(v.union([v.literal("cueTypeUnspecified"), v.literal("cueTypeAd")])),
  durationSecs: v.optional(v.pipe(v.number(), v.integer())),
  etag: v.optional(v.string()),
  id: v.optional(v.string()),
  insertionOffsetTimeMs: v.optional(v.string()),
  walltimeMs: v.optional(v.string()),
});

/** Schedule to insert cuepoints into a broadcast by ads automator. */
export type CuepointSchedule = {
  readonly enabled?: boolean;
  readonly pauseAdsUntil?: string;
  readonly repeatIntervalSecs?: number;
  readonly scheduleStrategy?: "scheduleStrategyUnspecified" | "concurrent" | "nonConcurrent";
};
export const CuepointScheduleSchema: v.GenericSchema<unknown, CuepointSchedule> = v.looseObject({
  enabled: v.optional(v.boolean()),
  pauseAdsUntil: v.optional(v.string()),
  repeatIntervalSecs: v.optional(v.pipe(v.number(), v.integer())),
  scheduleStrategy: v.optional(v.union([v.literal("scheduleStrategyUnspecified"), v.literal("concurrent"), v.literal("nonConcurrent")])),
});

export type Entity = {
  readonly id?: string;
  readonly typeId?: string;
  readonly url?: string;
};
export const EntitySchema: v.GenericSchema<unknown, Entity> = v.looseObject({
  id: v.optional(v.string()),
  typeId: v.optional(v.string()),
  url: v.optional(v.string()),
});

/** Geographical coordinates of a point, in WGS84. */
export type GeoPoint = {
  readonly altitude?: number;
  readonly latitude?: number;
  readonly longitude?: number;
};
export const GeoPointSchema: v.GenericSchema<unknown, GeoPoint> = v.looseObject({
  altitude: v.optional(v.number()),
  latitude: v.optional(v.number()),
  longitude: v.optional(v.number()),
});

/** An *i18nLanguage* resource identifies a UI language currently supported by YouTube. */
export type I18nLanguage = {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: I18nLanguageSnippet;
};
export const I18nLanguageSchema: v.GenericSchema<unknown, I18nLanguage> = v.looseObject({
  etag: v.optional(v.string()),
  id: v.optional(v.string()),
  kind: v.optional(v.string()),
  snippet: v.optional(v.lazy(() => I18nLanguageSnippetSchema)),
});

export type I18nLanguageListResponse = {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<I18nLanguage>;
  readonly kind?: string;
  readonly visitorId?: string;
};
export const I18nLanguageListResponseSchema: v.GenericSchema<unknown, I18nLanguageListResponse> = v.looseObject({
  etag: v.optional(v.string()),
  eventId: v.optional(v.string()),
  items: v.optional(v.array(v.lazy(() => I18nLanguageSchema))),
  kind: v.optional(v.string()),
  visitorId: v.optional(v.string()),
});

/** Basic details about an i18n language, such as language code and human-readable name. */
export type I18nLanguageSnippet = {
  readonly hl?: string;
  readonly name?: string;
};
export const I18nLanguageSnippetSchema: v.GenericSchema<unknown, I18nLanguageSnippet> = v.looseObject({
  hl: v.optional(v.string()),
  name: v.optional(v.string()),
});

/** A *i18nRegion* resource identifies a region where YouTube is available. */
export type I18nRegion = {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: I18nRegionSnippet;
};
export const I18nRegionSchema: v.GenericSchema<unknown, I18nRegion> = v.looseObject({
  etag: v.optional(v.string()),
  id: v.optional(v.string()),
  kind: v.optional(v.string()),
  snippet: v.optional(v.lazy(() => I18nRegionSnippetSchema)),
});

export type I18nRegionListResponse = {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<I18nRegion>;
  readonly kind?: string;
  readonly visitorId?: string;
};
export const I18nRegionListResponseSchema: v.GenericSchema<unknown, I18nRegionListResponse> = v.looseObject({
  etag: v.optional(v.string()),
  eventId: v.optional(v.string()),
  items: v.optional(v.array(v.lazy(() => I18nRegionSchema))),
  kind: v.optional(v.string()),
  visitorId: v.optional(v.string()),
});

/** Basic details about an i18n region, such as region code and human-readable name. */
export type I18nRegionSnippet = {
  readonly gl?: string;
  readonly name?: string;
};
export const I18nRegionSnippetSchema: v.GenericSchema<unknown, I18nRegionSnippet> = v.looseObject({
  gl: v.optional(v.string()),
  name: v.optional(v.string()),
});

/** Branding properties for images associated with the channel. */
export type ImageSettings = {
  readonly backgroundImageUrl?: LocalizedProperty;
  readonly bannerExternalUrl?: string;
  readonly bannerImageUrl?: string;
  readonly bannerMobileExtraHdImageUrl?: string;
  readonly bannerMobileHdImageUrl?: string;
  readonly bannerMobileImageUrl?: string;
  readonly bannerMobileLowImageUrl?: string;
  readonly bannerMobileMediumHdImageUrl?: string;
  readonly bannerTabletExtraHdImageUrl?: string;
  readonly bannerTabletHdImageUrl?: string;
  readonly bannerTabletImageUrl?: string;
  readonly bannerTabletLowImageUrl?: string;
  readonly bannerTvHighImageUrl?: string;
  readonly bannerTvImageUrl?: string;
  readonly bannerTvLowImageUrl?: string;
  readonly bannerTvMediumImageUrl?: string;
  readonly largeBrandedBannerImageImapScript?: LocalizedProperty;
  readonly largeBrandedBannerImageUrl?: LocalizedProperty;
  readonly smallBrandedBannerImageImapScript?: LocalizedProperty;
  readonly smallBrandedBannerImageUrl?: LocalizedProperty;
  readonly trackingImageUrl?: string;
  readonly watchIconImageUrl?: string;
};
export const ImageSettingsSchema: v.GenericSchema<unknown, ImageSettings> = v.looseObject({
  backgroundImageUrl: v.optional(v.lazy(() => LocalizedPropertySchema)),
  bannerExternalUrl: v.optional(v.string()),
  bannerImageUrl: v.optional(v.string()),
  bannerMobileExtraHdImageUrl: v.optional(v.string()),
  bannerMobileHdImageUrl: v.optional(v.string()),
  bannerMobileImageUrl: v.optional(v.string()),
  bannerMobileLowImageUrl: v.optional(v.string()),
  bannerMobileMediumHdImageUrl: v.optional(v.string()),
  bannerTabletExtraHdImageUrl: v.optional(v.string()),
  bannerTabletHdImageUrl: v.optional(v.string()),
  bannerTabletImageUrl: v.optional(v.string()),
  bannerTabletLowImageUrl: v.optional(v.string()),
  bannerTvHighImageUrl: v.optional(v.string()),
  bannerTvImageUrl: v.optional(v.string()),
  bannerTvLowImageUrl: v.optional(v.string()),
  bannerTvMediumImageUrl: v.optional(v.string()),
  largeBrandedBannerImageImapScript: v.optional(v.lazy(() => LocalizedPropertySchema)),
  largeBrandedBannerImageUrl: v.optional(v.lazy(() => LocalizedPropertySchema)),
  smallBrandedBannerImageImapScript: v.optional(v.lazy(() => LocalizedPropertySchema)),
  smallBrandedBannerImageUrl: v.optional(v.lazy(() => LocalizedPropertySchema)),
  trackingImageUrl: v.optional(v.string()),
  watchIconImageUrl: v.optional(v.string()),
});

/** Describes information necessary for ingesting an RTMP, HTTP, or SRT stream. */
export type IngestionInfo = {
  readonly backupIngestionAddress?: string;
  readonly ingestionAddress?: string;
  readonly rtmpsBackupIngestionAddress?: string;
  readonly rtmpsIngestionAddress?: string;
  readonly streamName?: string;
};
export const IngestionInfoSchema: v.GenericSchema<unknown, IngestionInfo> = v.looseObject({
  backupIngestionAddress: v.optional(v.string()),
  ingestionAddress: v.optional(v.string()),
  rtmpsBackupIngestionAddress: v.optional(v.string()),
  rtmpsIngestionAddress: v.optional(v.string()),
  streamName: v.optional(v.string()),
});

/** Describes an invideo branding. */
export type InvideoBranding = {
  readonly imageBytes?: string;
  readonly imageUrl?: string;
  readonly position?: InvideoPosition;
  readonly targetChannelId?: string;
  readonly timing?: InvideoTiming;
};
export const InvideoBrandingSchema: v.GenericSchema<unknown, InvideoBranding> = v.looseObject({
  imageBytes: v.optional(v.string()),
  imageUrl: v.optional(v.string()),
  position: v.optional(v.lazy(() => InvideoPositionSchema)),
  targetChannelId: v.optional(v.string()),
  timing: v.optional(v.lazy(() => InvideoTimingSchema)),
});

/** Describes the spatial position of a visual widget inside a video. It is a union of various position types, out of which only will be set one. */
export type InvideoPosition = {
  readonly cornerPosition?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
  readonly type?: "corner";
};
export const InvideoPositionSchema: v.GenericSchema<unknown, InvideoPosition> = v.looseObject({
  cornerPosition: v.optional(v.union([v.literal("topLeft"), v.literal("topRight"), v.literal("bottomLeft"), v.literal("bottomRight")])),
  type: v.optional(v.literal("corner")),
});

/** Describes a temporal position of a visual widget inside a video. */
export type InvideoTiming = {
  readonly durationMs?: string;
  readonly offsetMs?: string;
  readonly type?: "offsetFromStart" | "offsetFromEnd";
};
export const InvideoTimingSchema: v.GenericSchema<unknown, InvideoTiming> = v.looseObject({
  durationMs: v.optional(v.string()),
  offsetMs: v.optional(v.string()),
  type: v.optional(v.union([v.literal("offsetFromStart"), v.literal("offsetFromEnd")])),
});

export type LanguageTag = {
  readonly value?: string;
};
export const LanguageTagSchema: v.GenericSchema<unknown, LanguageTag> = v.looseObject({
  value: v.optional(v.string()),
});

export type LevelDetails = {
  readonly displayName?: string;
};
export const LevelDetailsSchema: v.GenericSchema<unknown, LevelDetails> = v.looseObject({
  displayName: v.optional(v.string()),
});

/** A *liveBroadcast* resource represents an event that will be streamed, via live video, on YouTube. */
export type LiveBroadcast = {
  readonly contentDetails?: LiveBroadcastContentDetails;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly monetizationDetails?: LiveBroadcastMonetizationDetails;
  readonly snippet?: LiveBroadcastSnippet;
  readonly statistics?: LiveBroadcastStatistics;
  readonly status?: LiveBroadcastStatus;
};
export const LiveBroadcastSchema: v.GenericSchema<unknown, LiveBroadcast> = v.looseObject({
  contentDetails: v.optional(v.lazy(() => LiveBroadcastContentDetailsSchema)),
  etag: v.optional(v.string()),
  id: v.optional(v.string()),
  kind: v.optional(v.string()),
  monetizationDetails: v.optional(v.lazy(() => LiveBroadcastMonetizationDetailsSchema)),
  snippet: v.optional(v.lazy(() => LiveBroadcastSnippetSchema)),
  statistics: v.optional(v.lazy(() => LiveBroadcastStatisticsSchema)),
  status: v.optional(v.lazy(() => LiveBroadcastStatusSchema)),
});

/** Detailed settings of a broadcast. */
export type LiveBroadcastContentDetails = {
  readonly boundStreamId?: string;
  readonly boundStreamLastUpdateTimeMs?: string;
  readonly closedCaptionsType?: "closedCaptionsTypeUnspecified" | "closedCaptionsDisabled" | "closedCaptionsHttpPost" | "closedCaptionsEmbedded";
  readonly enableAutoStart?: boolean;
  readonly enableAutoStop?: boolean;
  readonly enableClosedCaptions?: boolean;
  readonly enableContentEncryption?: boolean;
  readonly enableDvr?: boolean;
  readonly enableEmbed?: boolean;
  readonly enableLowLatency?: boolean;
  readonly latencyPreference?: "latencyPreferenceUnspecified" | "normal" | "low" | "ultraLow";
  readonly mesh?: string;
  readonly monitorStream?: MonitorStreamInfo;
  readonly projection?: "projectionUnspecified" | "rectangular" | "360" | "mesh";
  readonly recordFromStart?: boolean;
  readonly startWithSlate?: boolean;
  readonly stereoLayout?: "stereoLayoutUnspecified" | "mono" | "leftRight" | "topBottom";
};
export const LiveBroadcastContentDetailsSchema: v.GenericSchema<unknown, LiveBroadcastContentDetails> = v.looseObject({
  boundStreamId: v.optional(v.string()),
  boundStreamLastUpdateTimeMs: v.optional(v.pipe(v.string(), v.isoTimestamp())),
  closedCaptionsType: v.optional(v.union([v.literal("closedCaptionsTypeUnspecified"), v.literal("closedCaptionsDisabled"), v.literal("closedCaptionsHttpPost"), v.literal("closedCaptionsEmbedded")])),
  enableAutoStart: v.optional(v.boolean()),
  enableAutoStop: v.optional(v.boolean()),
  enableClosedCaptions: v.optional(v.boolean()),
  enableContentEncryption: v.optional(v.boolean()),
  enableDvr: v.optional(v.boolean()),
  enableEmbed: v.optional(v.boolean()),
  enableLowLatency: v.optional(v.boolean()),
  latencyPreference: v.optional(v.union([v.literal("latencyPreferenceUnspecified"), v.literal("normal"), v.literal("low"), v.literal("ultraLow")])),
  mesh: v.optional(v.string()),
  monitorStream: v.optional(v.lazy(() => MonitorStreamInfoSchema)),
  projection: v.optional(v.union([v.literal("projectionUnspecified"), v.literal("rectangular"), v.literal("360"), v.literal("mesh")])),
  recordFromStart: v.optional(v.boolean()),
  startWithSlate: v.optional(v.boolean()),
  stereoLayout: v.optional(v.union([v.literal("stereoLayoutUnspecified"), v.literal("mono"), v.literal("leftRight"), v.literal("topBottom")])),
});

export type LiveBroadcastListResponse = {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<LiveBroadcast>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfo;
  readonly prevPageToken?: string;
  readonly tokenPagination?: TokenPagination;
  readonly visitorId?: string;
};
export const LiveBroadcastListResponseSchema: v.GenericSchema<unknown, LiveBroadcastListResponse> = v.looseObject({
  etag: v.optional(v.string()),
  eventId: v.optional(v.string()),
  items: v.optional(v.array(v.lazy(() => LiveBroadcastSchema))),
  kind: v.optional(v.string()),
  nextPageToken: v.optional(v.string()),
  pageInfo: v.optional(v.lazy(() => PageInfoSchema)),
  prevPageToken: v.optional(v.string()),
  tokenPagination: v.optional(v.lazy(() => TokenPaginationSchema)),
  visitorId: v.optional(v.string()),
});

/** Monetization settings of a broadcast. */
export type LiveBroadcastMonetizationDetails = {
  readonly cuepointSchedule?: CuepointSchedule;
};
export const LiveBroadcastMonetizationDetailsSchema: v.GenericSchema<unknown, LiveBroadcastMonetizationDetails> = v.looseObject({
  cuepointSchedule: v.optional(v.lazy(() => CuepointScheduleSchema)),
});

/** Basic broadcast information. */
export type LiveBroadcastSnippet = {
  readonly actualEndTime?: string;
  readonly actualStartTime?: string;
  readonly channelId?: string;
  readonly description?: string;
  readonly isDefaultBroadcast?: boolean;
  readonly liveChatId?: string;
  readonly publishedAt?: string;
  readonly scheduledEndTime?: string;
  readonly scheduledStartTime?: string;
  readonly thumbnails?: ThumbnailDetails;
  readonly title?: string;
};
export const LiveBroadcastSnippetSchema: v.GenericSchema<unknown, LiveBroadcastSnippet> = v.looseObject({
  actualEndTime: v.optional(v.pipe(v.string(), v.isoTimestamp())),
  actualStartTime: v.optional(v.pipe(v.string(), v.isoTimestamp())),
  channelId: v.optional(v.string()),
  description: v.optional(v.string()),
  isDefaultBroadcast: v.optional(v.boolean()),
  liveChatId: v.optional(v.string()),
  publishedAt: v.optional(v.pipe(v.string(), v.isoTimestamp())),
  scheduledEndTime: v.optional(v.pipe(v.string(), v.isoTimestamp())),
  scheduledStartTime: v.optional(v.pipe(v.string(), v.isoTimestamp())),
  thumbnails: v.optional(v.lazy(() => ThumbnailDetailsSchema)),
  title: v.optional(v.string()),
});

/** Statistics about the live broadcast. These represent a snapshot of the values at the time of the request. Statistics are only returned for live broadcasts. */
export type LiveBroadcastStatistics = {
  readonly concurrentViewers?: string;
};
export const LiveBroadcastStatisticsSchema: v.GenericSchema<unknown, LiveBroadcastStatistics> = v.looseObject({
  concurrentViewers: v.optional(v.string()),
});

/** Live broadcast state. */
export type LiveBroadcastStatus = {
  readonly lifeCycleStatus?: "lifeCycleStatusUnspecified" | "created" | "ready" | "testing" | "live" | "complete" | "revoked" | "testStarting" | "liveStarting";
  readonly liveBroadcastPriority?: "liveBroadcastPriorityUnspecified" | "low" | "normal" | "high";
  readonly madeForKids?: boolean;
  readonly privacyStatus?: "public" | "unlisted" | "private";
  readonly recordingStatus?: "liveBroadcastRecordingStatusUnspecified" | "notRecording" | "recording" | "recorded";
  readonly selfDeclaredMadeForKids?: boolean;
};
export const LiveBroadcastStatusSchema: v.GenericSchema<unknown, LiveBroadcastStatus> = v.looseObject({
  lifeCycleStatus: v.optional(v.union([v.literal("lifeCycleStatusUnspecified"), v.literal("created"), v.literal("ready"), v.literal("testing"), v.literal("live"), v.literal("complete"), v.literal("revoked"), v.literal("testStarting"), v.literal("liveStarting")])),
  liveBroadcastPriority: v.optional(v.union([v.literal("liveBroadcastPriorityUnspecified"), v.literal("low"), v.literal("normal"), v.literal("high")])),
  madeForKids: v.optional(v.boolean()),
  privacyStatus: v.optional(v.union([v.literal("public"), v.literal("unlisted"), v.literal("private")])),
  recordingStatus: v.optional(v.union([v.literal("liveBroadcastRecordingStatusUnspecified"), v.literal("notRecording"), v.literal("recording"), v.literal("recorded")])),
  selfDeclaredMadeForKids: v.optional(v.boolean()),
});

/** A `__liveChatBan__` resource represents a ban for a YouTube live chat. */
export type LiveChatBan = {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: LiveChatBanSnippet;
};
export const LiveChatBanSchema: v.GenericSchema<unknown, LiveChatBan> = v.looseObject({
  etag: v.optional(v.string()),
  id: v.optional(v.string()),
  kind: v.optional(v.string()),
  snippet: v.optional(v.lazy(() => LiveChatBanSnippetSchema)),
});

export type LiveChatBanSnippet = {
  readonly banDurationSeconds?: string;
  readonly bannedUserDetails?: ChannelProfileDetails;
  readonly liveChatId?: string;
  readonly type?: "liveChatBanTypeUnspecified" | "permanent" | "temporary";
};
export const LiveChatBanSnippetSchema: v.GenericSchema<unknown, LiveChatBanSnippet> = v.looseObject({
  banDurationSeconds: v.optional(v.string()),
  bannedUserDetails: v.optional(v.lazy(() => ChannelProfileDetailsSchema)),
  liveChatId: v.optional(v.string()),
  type: v.optional(v.union([v.literal("liveChatBanTypeUnspecified"), v.literal("permanent"), v.literal("temporary")])),
});

export type LiveChatFanFundingEventDetails = {
  readonly amountDisplayString?: string;
  readonly amountMicros?: string;
  readonly currency?: string;
  readonly userComment?: string;
};
export const LiveChatFanFundingEventDetailsSchema: v.GenericSchema<unknown, LiveChatFanFundingEventDetails> = v.looseObject({
  amountDisplayString: v.optional(v.string()),
  amountMicros: v.optional(v.string()),
  currency: v.optional(v.string()),
  userComment: v.optional(v.string()),
});

/** Details about the gift event, this is only set if the type is 'giftEvent'. */
export type LiveChatGiftDetails = {
  readonly altText?: string;
  readonly comboCount?: number;
  readonly giftDuration?: string;
  readonly giftName?: string;
  readonly giftUrl?: string;
  readonly hasVisualEffect?: boolean;
  readonly jewelsAmount?: number;
  readonly language?: string;
};
export const LiveChatGiftDetailsSchema: v.GenericSchema<unknown, LiveChatGiftDetails> = v.looseObject({
  altText: v.optional(v.string()),
  comboCount: v.optional(v.pipe(v.number(), v.integer())),
  giftDuration: v.optional(v.string()),
  giftName: v.optional(v.string()),
  giftUrl: v.optional(v.string()),
  hasVisualEffect: v.optional(v.boolean()),
  jewelsAmount: v.optional(v.pipe(v.number(), v.integer())),
  language: v.optional(v.string()),
});

export type LiveChatGiftMembershipReceivedDetails = {
  readonly associatedMembershipGiftingMessageId?: string;
  readonly gifterChannelId?: string;
  readonly memberLevelName?: string;
};
export const LiveChatGiftMembershipReceivedDetailsSchema: v.GenericSchema<unknown, LiveChatGiftMembershipReceivedDetails> = v.looseObject({
  associatedMembershipGiftingMessageId: v.optional(v.string()),
  gifterChannelId: v.optional(v.string()),
  memberLevelName: v.optional(v.string()),
});

export type LiveChatMemberMilestoneChatDetails = {
  readonly memberLevelName?: string;
  readonly memberMonth?: number;
  readonly userComment?: string;
};
export const LiveChatMemberMilestoneChatDetailsSchema: v.GenericSchema<unknown, LiveChatMemberMilestoneChatDetails> = v.looseObject({
  memberLevelName: v.optional(v.string()),
  memberMonth: v.optional(v.pipe(v.number(), v.integer())),
  userComment: v.optional(v.string()),
});

export type LiveChatMembershipGiftingDetails = {
  readonly giftMembershipsCount?: number;
  readonly giftMembershipsLevelName?: string;
};
export const LiveChatMembershipGiftingDetailsSchema: v.GenericSchema<unknown, LiveChatMembershipGiftingDetails> = v.looseObject({
  giftMembershipsCount: v.optional(v.pipe(v.number(), v.integer())),
  giftMembershipsLevelName: v.optional(v.string()),
});

/** A *liveChatMessage* resource represents a chat message in a YouTube Live Chat. */
export type LiveChatMessage = {
  readonly authorDetails?: LiveChatMessageAuthorDetails;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: LiveChatMessageSnippet;
};
export const LiveChatMessageSchema: v.GenericSchema<unknown, LiveChatMessage> = v.looseObject({
  authorDetails: v.optional(v.lazy(() => LiveChatMessageAuthorDetailsSchema)),
  etag: v.optional(v.string()),
  id: v.optional(v.string()),
  kind: v.optional(v.string()),
  snippet: v.optional(v.lazy(() => LiveChatMessageSnippetSchema)),
});

export type LiveChatMessageAuthorDetails = {
  readonly channelId?: string;
  readonly channelUrl?: string;
  readonly displayName?: string;
  readonly isChatModerator?: boolean;
  readonly isChatOwner?: boolean;
  readonly isChatSponsor?: boolean;
  readonly isVerified?: boolean;
  readonly profileImageUrl?: string;
};
export const LiveChatMessageAuthorDetailsSchema: v.GenericSchema<unknown, LiveChatMessageAuthorDetails> = v.looseObject({
  channelId: v.optional(v.string()),
  channelUrl: v.optional(v.string()),
  displayName: v.optional(v.string()),
  isChatModerator: v.optional(v.boolean()),
  isChatOwner: v.optional(v.boolean()),
  isChatSponsor: v.optional(v.boolean()),
  isVerified: v.optional(v.boolean()),
  profileImageUrl: v.optional(v.string()),
});

export type LiveChatMessageDeletedDetails = {
  readonly deletedMessageId?: string;
};
export const LiveChatMessageDeletedDetailsSchema: v.GenericSchema<unknown, LiveChatMessageDeletedDetails> = v.looseObject({
  deletedMessageId: v.optional(v.string()),
});

export type LiveChatMessageListResponse = {
  readonly activePollItem?: LiveChatMessage;
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<LiveChatMessage>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly offlineAt?: string;
  readonly pageInfo?: PageInfo;
  readonly pollingIntervalMillis?: number;
  readonly tokenPagination?: TokenPagination;
  readonly visitorId?: string;
};
export const LiveChatMessageListResponseSchema: v.GenericSchema<unknown, LiveChatMessageListResponse> = v.looseObject({
  activePollItem: v.optional(v.lazy(() => LiveChatMessageSchema)),
  etag: v.optional(v.string()),
  eventId: v.optional(v.string()),
  items: v.optional(v.array(v.lazy(() => LiveChatMessageSchema))),
  kind: v.optional(v.string()),
  nextPageToken: v.optional(v.string()),
  offlineAt: v.optional(v.pipe(v.string(), v.isoTimestamp())),
  pageInfo: v.optional(v.lazy(() => PageInfoSchema)),
  pollingIntervalMillis: v.optional(v.pipe(v.number(), v.integer())),
  tokenPagination: v.optional(v.lazy(() => TokenPaginationSchema)),
  visitorId: v.optional(v.string()),
});

export type LiveChatMessageRetractedDetails = {
  readonly retractedMessageId?: string;
};
export const LiveChatMessageRetractedDetailsSchema: v.GenericSchema<unknown, LiveChatMessageRetractedDetails> = v.looseObject({
  retractedMessageId: v.optional(v.string()),
});

/** Next ID: 35 */
export type LiveChatMessageSnippet = {
  readonly authorChannelId?: string;
  readonly displayMessage?: string;
  readonly fanFundingEventDetails?: LiveChatFanFundingEventDetails;
  readonly giftDetails?: LiveChatGiftDetails;
  readonly giftMembershipReceivedDetails?: LiveChatGiftMembershipReceivedDetails;
  readonly hasDisplayContent?: boolean;
  readonly liveChatId?: string;
  readonly memberMilestoneChatDetails?: LiveChatMemberMilestoneChatDetails;
  readonly membershipGiftingDetails?: LiveChatMembershipGiftingDetails;
  readonly messageDeletedDetails?: LiveChatMessageDeletedDetails;
  readonly messageRetractedDetails?: LiveChatMessageRetractedDetails;
  readonly newSponsorDetails?: LiveChatNewSponsorDetails;
  readonly pollDetails?: LiveChatPollDetails;
  readonly publishedAt?: string;
  readonly superChatDetails?: LiveChatSuperChatDetails;
  readonly superStickerDetails?: LiveChatSuperStickerDetails;
  readonly textMessageDetails?: LiveChatTextMessageDetails;
  readonly type?: "invalidType" | "textMessageEvent" | "tombstone" | "fanFundingEvent" | "chatEndedEvent" | "sponsorOnlyModeStartedEvent" | "sponsorOnlyModeEndedEvent" | "newSponsorEvent" | "memberMilestoneChatEvent" | "membershipGiftingEvent" | "giftMembershipReceivedEvent" | "messageDeletedEvent" | "messageRetractedEvent" | "userBannedEvent" | "superChatEvent" | "superStickerEvent" | "pollEvent" | "giftEvent";
  readonly userBannedDetails?: LiveChatUserBannedMessageDetails;
};
export const LiveChatMessageSnippetSchema: v.GenericSchema<unknown, LiveChatMessageSnippet> = v.looseObject({
  authorChannelId: v.optional(v.string()),
  displayMessage: v.optional(v.string()),
  fanFundingEventDetails: v.optional(v.lazy(() => LiveChatFanFundingEventDetailsSchema)),
  giftDetails: v.optional(v.lazy(() => LiveChatGiftDetailsSchema)),
  giftMembershipReceivedDetails: v.optional(v.lazy(() => LiveChatGiftMembershipReceivedDetailsSchema)),
  hasDisplayContent: v.optional(v.boolean()),
  liveChatId: v.optional(v.string()),
  memberMilestoneChatDetails: v.optional(v.lazy(() => LiveChatMemberMilestoneChatDetailsSchema)),
  membershipGiftingDetails: v.optional(v.lazy(() => LiveChatMembershipGiftingDetailsSchema)),
  messageDeletedDetails: v.optional(v.lazy(() => LiveChatMessageDeletedDetailsSchema)),
  messageRetractedDetails: v.optional(v.lazy(() => LiveChatMessageRetractedDetailsSchema)),
  newSponsorDetails: v.optional(v.lazy(() => LiveChatNewSponsorDetailsSchema)),
  pollDetails: v.optional(v.lazy(() => LiveChatPollDetailsSchema)),
  publishedAt: v.optional(v.pipe(v.string(), v.isoTimestamp())),
  superChatDetails: v.optional(v.lazy(() => LiveChatSuperChatDetailsSchema)),
  superStickerDetails: v.optional(v.lazy(() => LiveChatSuperStickerDetailsSchema)),
  textMessageDetails: v.optional(v.lazy(() => LiveChatTextMessageDetailsSchema)),
  type: v.optional(v.union([v.literal("invalidType"), v.literal("textMessageEvent"), v.literal("tombstone"), v.literal("fanFundingEvent"), v.literal("chatEndedEvent"), v.literal("sponsorOnlyModeStartedEvent"), v.literal("sponsorOnlyModeEndedEvent"), v.literal("newSponsorEvent"), v.literal("memberMilestoneChatEvent"), v.literal("membershipGiftingEvent"), v.literal("giftMembershipReceivedEvent"), v.literal("messageDeletedEvent"), v.literal("messageRetractedEvent"), v.literal("userBannedEvent"), v.literal("superChatEvent"), v.literal("superStickerEvent"), v.literal("pollEvent"), v.literal("giftEvent")])),
  userBannedDetails: v.optional(v.lazy(() => LiveChatUserBannedMessageDetailsSchema)),
});

/** A *liveChatModerator* resource represents a moderator for a YouTube live chat. A chat moderator has the ability to ban/unban users from a chat, remove message, etc. */
export type LiveChatModerator = {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: LiveChatModeratorSnippet;
};
export const LiveChatModeratorSchema: v.GenericSchema<unknown, LiveChatModerator> = v.looseObject({
  etag: v.optional(v.string()),
  id: v.optional(v.string()),
  kind: v.optional(v.string()),
  snippet: v.optional(v.lazy(() => LiveChatModeratorSnippetSchema)),
});

export type LiveChatModeratorListResponse = {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<LiveChatModerator>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfo;
  readonly prevPageToken?: string;
  readonly tokenPagination?: TokenPagination;
  readonly visitorId?: string;
};
export const LiveChatModeratorListResponseSchema: v.GenericSchema<unknown, LiveChatModeratorListResponse> = v.looseObject({
  etag: v.optional(v.string()),
  eventId: v.optional(v.string()),
  items: v.optional(v.array(v.lazy(() => LiveChatModeratorSchema))),
  kind: v.optional(v.string()),
  nextPageToken: v.optional(v.string()),
  pageInfo: v.optional(v.lazy(() => PageInfoSchema)),
  prevPageToken: v.optional(v.string()),
  tokenPagination: v.optional(v.lazy(() => TokenPaginationSchema)),
  visitorId: v.optional(v.string()),
});

export type LiveChatModeratorSnippet = {
  readonly liveChatId?: string;
  readonly moderatorDetails?: ChannelProfileDetails;
};
export const LiveChatModeratorSnippetSchema: v.GenericSchema<unknown, LiveChatModeratorSnippet> = v.looseObject({
  liveChatId: v.optional(v.string()),
  moderatorDetails: v.optional(v.lazy(() => ChannelProfileDetailsSchema)),
});

export type LiveChatNewSponsorDetails = {
  readonly isUpgrade?: boolean;
  readonly memberLevelName?: string;
};
export const LiveChatNewSponsorDetailsSchema: v.GenericSchema<unknown, LiveChatNewSponsorDetails> = v.looseObject({
  isUpgrade: v.optional(v.boolean()),
  memberLevelName: v.optional(v.string()),
});

export type LiveChatPollDetails = {
  readonly metadata?: LiveChatPollDetailsPollMetadata;
  readonly status?: "unknown" | "active" | "closed";
};
export const LiveChatPollDetailsSchema: v.GenericSchema<unknown, LiveChatPollDetails> = v.looseObject({
  metadata: v.optional(v.lazy(() => LiveChatPollDetailsPollMetadataSchema)),
  status: v.optional(v.union([v.literal("unknown"), v.literal("active"), v.literal("closed")])),
});

export type LiveChatPollDetailsPollMetadata = {
  readonly options?: ReadonlyArray<LiveChatPollDetailsPollMetadataPollOption>;
  readonly questionText?: string;
};
export const LiveChatPollDetailsPollMetadataSchema: v.GenericSchema<unknown, LiveChatPollDetailsPollMetadata> = v.looseObject({
  options: v.optional(v.array(v.lazy(() => LiveChatPollDetailsPollMetadataPollOptionSchema))),
  questionText: v.optional(v.string()),
});

export type LiveChatPollDetailsPollMetadataPollOption = {
  readonly optionText?: string;
  readonly tally?: string;
};
export const LiveChatPollDetailsPollMetadataPollOptionSchema: v.GenericSchema<unknown, LiveChatPollDetailsPollMetadataPollOption> = v.looseObject({
  optionText: v.optional(v.string()),
  tally: v.optional(v.string()),
});

export type LiveChatSuperChatDetails = {
  readonly amountDisplayString?: string;
  readonly amountMicros?: string;
  readonly currency?: string;
  readonly tier?: number;
  readonly userComment?: string;
};
export const LiveChatSuperChatDetailsSchema: v.GenericSchema<unknown, LiveChatSuperChatDetails> = v.looseObject({
  amountDisplayString: v.optional(v.string()),
  amountMicros: v.optional(v.string()),
  currency: v.optional(v.string()),
  tier: v.optional(v.pipe(v.number(), v.integer())),
  userComment: v.optional(v.string()),
});

export type LiveChatSuperStickerDetails = {
  readonly amountDisplayString?: string;
  readonly amountMicros?: string;
  readonly currency?: string;
  readonly superStickerMetadata?: SuperStickerMetadata;
  readonly tier?: number;
};
export const LiveChatSuperStickerDetailsSchema: v.GenericSchema<unknown, LiveChatSuperStickerDetails> = v.looseObject({
  amountDisplayString: v.optional(v.string()),
  amountMicros: v.optional(v.string()),
  currency: v.optional(v.string()),
  superStickerMetadata: v.optional(v.lazy(() => SuperStickerMetadataSchema)),
  tier: v.optional(v.pipe(v.number(), v.integer())),
});

export type LiveChatTextMessageDetails = {
  readonly messageText?: string;
};
export const LiveChatTextMessageDetailsSchema: v.GenericSchema<unknown, LiveChatTextMessageDetails> = v.looseObject({
  messageText: v.optional(v.string()),
});

export type LiveChatUserBannedMessageDetails = {
  readonly banDurationSeconds?: string;
  readonly bannedUserDetails?: ChannelProfileDetails;
  readonly banType?: "permanent" | "temporary";
};
export const LiveChatUserBannedMessageDetailsSchema: v.GenericSchema<unknown, LiveChatUserBannedMessageDetails> = v.looseObject({
  banDurationSeconds: v.optional(v.string()),
  bannedUserDetails: v.optional(v.lazy(() => ChannelProfileDetailsSchema)),
  banType: v.optional(v.union([v.literal("permanent"), v.literal("temporary")])),
});

/** A live stream describes a live ingestion point. */
export type LiveStream = {
  readonly cdn?: CdnSettings;
  readonly contentDetails?: LiveStreamContentDetails;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: LiveStreamSnippet;
  readonly status?: LiveStreamStatus;
};
export const LiveStreamSchema: v.GenericSchema<unknown, LiveStream> = v.looseObject({
  cdn: v.optional(v.lazy(() => CdnSettingsSchema)),
  contentDetails: v.optional(v.lazy(() => LiveStreamContentDetailsSchema)),
  etag: v.optional(v.string()),
  id: v.optional(v.string()),
  kind: v.optional(v.string()),
  snippet: v.optional(v.lazy(() => LiveStreamSnippetSchema)),
  status: v.optional(v.lazy(() => LiveStreamStatusSchema)),
});

export type LiveStreamConfigurationIssue = {
  readonly description?: string;
  readonly reason?: string;
  readonly severity?: "info" | "warning" | "error";
  readonly type?: "gopSizeOver" | "gopSizeLong" | "gopSizeShort" | "openGop" | "badContainer" | "audioBitrateHigh" | "audioBitrateLow" | "audioSampleRate" | "bitrateHigh" | "bitrateLow" | "audioCodec" | "videoCodec" | "noAudioStream" | "noVideoStream" | "multipleVideoStreams" | "multipleAudioStreams" | "audioTooManyChannels" | "interlacedVideo" | "frameRateHigh" | "resolutionMismatch" | "videoCodecMismatch" | "videoInterlaceMismatch" | "videoProfileMismatch" | "videoBitrateMismatch" | "framerateMismatch" | "gopMismatch" | "audioSampleRateMismatch" | "audioStereoMismatch" | "audioCodecMismatch" | "audioBitrateMismatch" | "videoResolutionSuboptimal" | "videoResolutionUnsupported" | "videoIngestionStarved" | "videoIngestionFasterThanRealtime";
};
export const LiveStreamConfigurationIssueSchema: v.GenericSchema<unknown, LiveStreamConfigurationIssue> = v.looseObject({
  description: v.optional(v.string()),
  reason: v.optional(v.string()),
  severity: v.optional(v.union([v.literal("info"), v.literal("warning"), v.literal("error")])),
  type: v.optional(v.union([v.literal("gopSizeOver"), v.literal("gopSizeLong"), v.literal("gopSizeShort"), v.literal("openGop"), v.literal("badContainer"), v.literal("audioBitrateHigh"), v.literal("audioBitrateLow"), v.literal("audioSampleRate"), v.literal("bitrateHigh"), v.literal("bitrateLow"), v.literal("audioCodec"), v.literal("videoCodec"), v.literal("noAudioStream"), v.literal("noVideoStream"), v.literal("multipleVideoStreams"), v.literal("multipleAudioStreams"), v.literal("audioTooManyChannels"), v.literal("interlacedVideo"), v.literal("frameRateHigh"), v.literal("resolutionMismatch"), v.literal("videoCodecMismatch"), v.literal("videoInterlaceMismatch"), v.literal("videoProfileMismatch"), v.literal("videoBitrateMismatch"), v.literal("framerateMismatch"), v.literal("gopMismatch"), v.literal("audioSampleRateMismatch"), v.literal("audioStereoMismatch"), v.literal("audioCodecMismatch"), v.literal("audioBitrateMismatch"), v.literal("videoResolutionSuboptimal"), v.literal("videoResolutionUnsupported"), v.literal("videoIngestionStarved"), v.literal("videoIngestionFasterThanRealtime")])),
});

/** Detailed settings of a stream. */
export type LiveStreamContentDetails = {
  readonly closedCaptionsIngestionUrl?: string;
  readonly isReusable?: boolean;
};
export const LiveStreamContentDetailsSchema: v.GenericSchema<unknown, LiveStreamContentDetails> = v.looseObject({
  closedCaptionsIngestionUrl: v.optional(v.string()),
  isReusable: v.optional(v.boolean()),
});

export type LiveStreamHealthStatus = {
  readonly configurationIssues?: ReadonlyArray<LiveStreamConfigurationIssue>;
  readonly lastUpdateTimeSeconds?: string;
  readonly status?: "good" | "ok" | "bad" | "noData" | "revoked";
};
export const LiveStreamHealthStatusSchema: v.GenericSchema<unknown, LiveStreamHealthStatus> = v.looseObject({
  configurationIssues: v.optional(v.array(v.lazy(() => LiveStreamConfigurationIssueSchema))),
  lastUpdateTimeSeconds: v.optional(v.string()),
  status: v.optional(v.union([v.literal("good"), v.literal("ok"), v.literal("bad"), v.literal("noData"), v.literal("revoked")])),
});

export type LiveStreamListResponse = {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<LiveStream>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfo;
  readonly prevPageToken?: string;
  readonly tokenPagination?: TokenPagination;
  readonly visitorId?: string;
};
export const LiveStreamListResponseSchema: v.GenericSchema<unknown, LiveStreamListResponse> = v.looseObject({
  etag: v.optional(v.string()),
  eventId: v.optional(v.string()),
  items: v.optional(v.array(v.lazy(() => LiveStreamSchema))),
  kind: v.optional(v.string()),
  nextPageToken: v.optional(v.string()),
  pageInfo: v.optional(v.lazy(() => PageInfoSchema)),
  prevPageToken: v.optional(v.string()),
  tokenPagination: v.optional(v.lazy(() => TokenPaginationSchema)),
  visitorId: v.optional(v.string()),
});

export type LiveStreamSnippet = {
  readonly channelId?: string;
  readonly description?: string;
  readonly isDefaultStream?: boolean;
  readonly publishedAt?: string;
  readonly title?: string;
};
export const LiveStreamSnippetSchema: v.GenericSchema<unknown, LiveStreamSnippet> = v.looseObject({
  channelId: v.optional(v.string()),
  description: v.optional(v.string()),
  isDefaultStream: v.optional(v.boolean()),
  publishedAt: v.optional(v.pipe(v.string(), v.isoTimestamp())),
  title: v.optional(v.string()),
});

/** Brief description of the live stream status. */
export type LiveStreamStatus = {
  readonly healthStatus?: LiveStreamHealthStatus;
  readonly streamStatus?: "created" | "ready" | "active" | "inactive" | "error";
};
export const LiveStreamStatusSchema: v.GenericSchema<unknown, LiveStreamStatus> = v.looseObject({
  healthStatus: v.optional(v.lazy(() => LiveStreamHealthStatusSchema)),
  streamStatus: v.optional(v.union([v.literal("created"), v.literal("ready"), v.literal("active"), v.literal("inactive"), v.literal("error")])),
});

export type LocalizedProperty = {
  readonly default?: string;
  readonly defaultLanguage?: LanguageTag;
  readonly localized?: ReadonlyArray<LocalizedString>;
};
export const LocalizedPropertySchema: v.GenericSchema<unknown, LocalizedProperty> = v.looseObject({
  default: v.optional(v.string()),
  defaultLanguage: v.optional(v.lazy(() => LanguageTagSchema)),
  localized: v.optional(v.array(v.lazy(() => LocalizedStringSchema))),
});

export type LocalizedString = {
  readonly language?: string;
  readonly value?: string;
};
export const LocalizedStringSchema: v.GenericSchema<unknown, LocalizedString> = v.looseObject({
  language: v.optional(v.string()),
  value: v.optional(v.string()),
});

/** A *member* resource represents a member for a YouTube channel. A member provides recurring monetary support to a creator and receives special benefits. */
export type Member = {
  readonly etag?: string;
  readonly kind?: string;
  readonly snippet?: MemberSnippet;
};
export const MemberSchema: v.GenericSchema<unknown, Member> = v.looseObject({
  etag: v.optional(v.string()),
  kind: v.optional(v.string()),
  snippet: v.optional(v.lazy(() => MemberSnippetSchema)),
});

export type MemberListResponse = {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<Member>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfo;
  readonly tokenPagination?: TokenPagination;
  readonly visitorId?: string;
};
export const MemberListResponseSchema: v.GenericSchema<unknown, MemberListResponse> = v.looseObject({
  etag: v.optional(v.string()),
  eventId: v.optional(v.string()),
  items: v.optional(v.array(v.lazy(() => MemberSchema))),
  kind: v.optional(v.string()),
  nextPageToken: v.optional(v.string()),
  pageInfo: v.optional(v.lazy(() => PageInfoSchema)),
  tokenPagination: v.optional(v.lazy(() => TokenPaginationSchema)),
  visitorId: v.optional(v.string()),
});

export type MembershipsDetails = {
  readonly accessibleLevels?: ReadonlyArray<string>;
  readonly highestAccessibleLevel?: string;
  readonly highestAccessibleLevelDisplayName?: string;
  readonly membershipsDuration?: MembershipsDuration;
  readonly membershipsDurationAtLevels?: ReadonlyArray<MembershipsDurationAtLevel>;
};
export const MembershipsDetailsSchema: v.GenericSchema<unknown, MembershipsDetails> = v.looseObject({
  accessibleLevels: v.optional(v.array(v.string())),
  highestAccessibleLevel: v.optional(v.string()),
  highestAccessibleLevelDisplayName: v.optional(v.string()),
  membershipsDuration: v.optional(v.lazy(() => MembershipsDurationSchema)),
  membershipsDurationAtLevels: v.optional(v.array(v.lazy(() => MembershipsDurationAtLevelSchema))),
});

export type MembershipsDuration = {
  readonly memberSince?: string;
  readonly memberTotalDurationMonths?: number;
};
export const MembershipsDurationSchema: v.GenericSchema<unknown, MembershipsDuration> = v.looseObject({
  memberSince: v.optional(v.string()),
  memberTotalDurationMonths: v.optional(v.pipe(v.number(), v.integer())),
});

export type MembershipsDurationAtLevel = {
  readonly level?: string;
  readonly memberSince?: string;
  readonly memberTotalDurationMonths?: number;
};
export const MembershipsDurationAtLevelSchema: v.GenericSchema<unknown, MembershipsDurationAtLevel> = v.looseObject({
  level: v.optional(v.string()),
  memberSince: v.optional(v.string()),
  memberTotalDurationMonths: v.optional(v.pipe(v.number(), v.integer())),
});

/** A *membershipsLevel* resource represents an offer made by YouTube creators for their fans. Users can become members of the channel by joining one of the available levels. They will provide recurring monetary support and receives special benefits. */
export type MembershipsLevel = {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: MembershipsLevelSnippet;
};
export const MembershipsLevelSchema: v.GenericSchema<unknown, MembershipsLevel> = v.looseObject({
  etag: v.optional(v.string()),
  id: v.optional(v.string()),
  kind: v.optional(v.string()),
  snippet: v.optional(v.lazy(() => MembershipsLevelSnippetSchema)),
});

export type MembershipsLevelListResponse = {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<MembershipsLevel>;
  readonly kind?: string;
  readonly visitorId?: string;
};
export const MembershipsLevelListResponseSchema: v.GenericSchema<unknown, MembershipsLevelListResponse> = v.looseObject({
  etag: v.optional(v.string()),
  eventId: v.optional(v.string()),
  items: v.optional(v.array(v.lazy(() => MembershipsLevelSchema))),
  kind: v.optional(v.string()),
  visitorId: v.optional(v.string()),
});

export type MembershipsLevelSnippet = {
  readonly creatorChannelId?: string;
  readonly levelDetails?: LevelDetails;
};
export const MembershipsLevelSnippetSchema: v.GenericSchema<unknown, MembershipsLevelSnippet> = v.looseObject({
  creatorChannelId: v.optional(v.string()),
  levelDetails: v.optional(v.lazy(() => LevelDetailsSchema)),
});

export type MemberSnippet = {
  readonly creatorChannelId?: string;
  readonly memberDetails?: ChannelProfileDetails;
  readonly membershipsDetails?: MembershipsDetails;
};
export const MemberSnippetSchema: v.GenericSchema<unknown, MemberSnippet> = v.looseObject({
  creatorChannelId: v.optional(v.string()),
  memberDetails: v.optional(v.lazy(() => ChannelProfileDetailsSchema)),
  membershipsDetails: v.optional(v.lazy(() => MembershipsDetailsSchema)),
});

/** Settings and Info of the monitor stream */
export type MonitorStreamInfo = {
  readonly broadcastStreamDelayMs?: number;
  readonly embedHtml?: string;
  readonly enableMonitorStream?: boolean;
};
export const MonitorStreamInfoSchema: v.GenericSchema<unknown, MonitorStreamInfo> = v.looseObject({
  broadcastStreamDelayMs: v.optional(v.pipe(v.number(), v.integer())),
  embedHtml: v.optional(v.string()),
  enableMonitorStream: v.optional(v.boolean()),
});

/** Paging details for lists of resources, including total number of items available and number of resources returned in a single page. */
export type PageInfo = {
  readonly resultsPerPage?: number;
  readonly totalResults?: number;
};
export const PageInfoSchema: v.GenericSchema<unknown, PageInfo> = v.looseObject({
  resultsPerPage: v.optional(v.pipe(v.number(), v.integer())),
  totalResults: v.optional(v.pipe(v.number(), v.integer())),
});

/** A *playlist* resource represents a YouTube playlist. A playlist is a collection of videos that can be viewed sequentially and shared with other users. A playlist can contain up to 200 videos, and YouTube does not limit the number of playlists that each user creates. By default, playlists are publicly visible to other users, but playlists can be public or private. YouTube also uses playlists to identify special collections of videos for a channel, such as: - uploaded videos - favorite videos - positively rated (liked) videos - watch history - watch later To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information. You can retrieve the playlist IDs for each of these lists from the channel resource for a given channel. You can then use the playlistItems.list method to retrieve any of those lists. You can also add or remove items from those lists by calling the playlistItems.insert and playlistItems.delete methods. */
export type Playlist = {
  readonly contentDetails?: PlaylistContentDetails;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly localizations?: Readonly<Record<string, PlaylistLocalization>>;
  readonly player?: PlaylistPlayer;
  readonly snippet?: PlaylistSnippet;
  readonly status?: PlaylistStatus;
};
export const PlaylistSchema: v.GenericSchema<unknown, Playlist> = v.looseObject({
  contentDetails: v.optional(v.lazy(() => PlaylistContentDetailsSchema)),
  etag: v.optional(v.string()),
  id: v.optional(v.string()),
  kind: v.optional(v.string()),
  localizations: v.optional(v.record(v.string(), v.lazy(() => PlaylistLocalizationSchema))),
  player: v.optional(v.lazy(() => PlaylistPlayerSchema)),
  snippet: v.optional(v.lazy(() => PlaylistSnippetSchema)),
  status: v.optional(v.lazy(() => PlaylistStatusSchema)),
});

export type PlaylistContentDetails = {
  readonly itemCount?: number;
};
export const PlaylistContentDetailsSchema: v.GenericSchema<unknown, PlaylistContentDetails> = v.looseObject({
  itemCount: v.optional(v.pipe(v.number(), v.integer())),
});

export type PlaylistImage = {
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: PlaylistImageSnippet;
};
export const PlaylistImageSchema: v.GenericSchema<unknown, PlaylistImage> = v.looseObject({
  id: v.optional(v.string()),
  kind: v.optional(v.string()),
  snippet: v.optional(v.lazy(() => PlaylistImageSnippetSchema)),
});

export type PlaylistImageListResponse = {
  readonly items?: ReadonlyArray<PlaylistImage>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfo;
  readonly prevPageToken?: string;
};
export const PlaylistImageListResponseSchema: v.GenericSchema<unknown, PlaylistImageListResponse> = v.looseObject({
  items: v.optional(v.array(v.lazy(() => PlaylistImageSchema))),
  kind: v.optional(v.string()),
  nextPageToken: v.optional(v.string()),
  pageInfo: v.optional(v.lazy(() => PageInfoSchema)),
  prevPageToken: v.optional(v.string()),
});

/** A *playlistImage* resource identifies another resource, such as a image, that is associated with a playlist. In addition, the playlistImage resource contains details about the included resource that pertain specifically to how that resource is used in that playlist. YouTube uses playlists to identify special collections of videos for a channel, such as: - uploaded videos - favorite videos - positively rated (liked) videos - watch history To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information. You can retrieve the playlist IDs for each of these lists from the channel resource for a given channel. You can then use the playlistImages.list method to retrieve image data for any of those playlists. You can also add or remove images from those lists by calling the playlistImages.insert and playlistImages.delete methods. */
export type PlaylistImageSnippet = {
  readonly height?: number;
  readonly playlistId?: string;
  readonly type?: "hero";
  readonly width?: number;
};
export const PlaylistImageSnippetSchema: v.GenericSchema<unknown, PlaylistImageSnippet> = v.looseObject({
  height: v.optional(v.pipe(v.number(), v.integer())),
  playlistId: v.optional(v.string()),
  type: v.optional(v.literal("hero")),
  width: v.optional(v.pipe(v.number(), v.integer())),
});

/** A *playlistItem* resource identifies another resource, such as a video, that is included in a playlist. In addition, the playlistItem resource contains details about the included resource that pertain specifically to how that resource is used in that playlist. YouTube uses playlists to identify special collections of videos for a channel, such as: - uploaded videos - favorite videos - positively rated (liked) videos - watch history - watch later To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information. You can retrieve the playlist IDs for each of these lists from the channel resource for a given channel. You can then use the playlistItems.list method to retrieve any of those lists. You can also add or remove items from those lists by calling the playlistItems.insert and playlistItems.delete methods. For example, if a user gives a positive rating to a video, you would insert that video into the liked videos playlist for that user's channel. */
export type PlaylistItem = {
  readonly contentDetails?: PlaylistItemContentDetails;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: PlaylistItemSnippet;
  readonly status?: PlaylistItemStatus;
};
export const PlaylistItemSchema: v.GenericSchema<unknown, PlaylistItem> = v.looseObject({
  contentDetails: v.optional(v.lazy(() => PlaylistItemContentDetailsSchema)),
  etag: v.optional(v.string()),
  id: v.optional(v.string()),
  kind: v.optional(v.string()),
  snippet: v.optional(v.lazy(() => PlaylistItemSnippetSchema)),
  status: v.optional(v.lazy(() => PlaylistItemStatusSchema)),
});

export type PlaylistItemContentDetails = {
  readonly endAt?: string;
  readonly note?: string;
  readonly startAt?: string;
  readonly videoId?: string;
  readonly videoPublishedAt?: string;
};
export const PlaylistItemContentDetailsSchema: v.GenericSchema<unknown, PlaylistItemContentDetails> = v.looseObject({
  endAt: v.optional(v.string()),
  note: v.optional(v.string()),
  startAt: v.optional(v.string()),
  videoId: v.optional(v.string()),
  videoPublishedAt: v.optional(v.pipe(v.string(), v.isoTimestamp())),
});

export type PlaylistItemListResponse = {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<PlaylistItem>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfo;
  readonly prevPageToken?: string;
  readonly tokenPagination?: TokenPagination;
  readonly visitorId?: string;
};
export const PlaylistItemListResponseSchema: v.GenericSchema<unknown, PlaylistItemListResponse> = v.looseObject({
  etag: v.optional(v.string()),
  eventId: v.optional(v.string()),
  items: v.optional(v.array(v.lazy(() => PlaylistItemSchema))),
  kind: v.optional(v.string()),
  nextPageToken: v.optional(v.string()),
  pageInfo: v.optional(v.lazy(() => PageInfoSchema)),
  prevPageToken: v.optional(v.string()),
  tokenPagination: v.optional(v.lazy(() => TokenPaginationSchema)),
  visitorId: v.optional(v.string()),
});

/** Basic details about a playlist, including title, description and thumbnails. Basic details of a YouTube Playlist item provided by the author. Next ID: 15 */
export type PlaylistItemSnippet = {
  readonly channelId?: string;
  readonly channelTitle?: string;
  readonly description?: string;
  readonly playlistId?: string;
  readonly position?: number;
  readonly publishedAt?: string;
  readonly resourceId?: ResourceId;
  readonly thumbnails?: ThumbnailDetails;
  readonly title?: string;
  readonly videoOwnerChannelId?: string;
  readonly videoOwnerChannelTitle?: string;
};
export const PlaylistItemSnippetSchema: v.GenericSchema<unknown, PlaylistItemSnippet> = v.looseObject({
  channelId: v.optional(v.string()),
  channelTitle: v.optional(v.string()),
  description: v.optional(v.string()),
  playlistId: v.optional(v.string()),
  position: v.optional(v.pipe(v.number(), v.integer())),
  publishedAt: v.optional(v.pipe(v.string(), v.isoTimestamp())),
  resourceId: v.optional(v.lazy(() => ResourceIdSchema)),
  thumbnails: v.optional(v.lazy(() => ThumbnailDetailsSchema)),
  title: v.optional(v.string()),
  videoOwnerChannelId: v.optional(v.string()),
  videoOwnerChannelTitle: v.optional(v.string()),
});

/** Information about the playlist item's privacy status. */
export type PlaylistItemStatus = {
  readonly privacyStatus?: "public" | "unlisted" | "private";
};
export const PlaylistItemStatusSchema: v.GenericSchema<unknown, PlaylistItemStatus> = v.looseObject({
  privacyStatus: v.optional(v.union([v.literal("public"), v.literal("unlisted"), v.literal("private")])),
});

export type PlaylistListResponse = {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<Playlist>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfo;
  readonly prevPageToken?: string;
  readonly tokenPagination?: TokenPagination;
  readonly visitorId?: string;
};
export const PlaylistListResponseSchema: v.GenericSchema<unknown, PlaylistListResponse> = v.looseObject({
  etag: v.optional(v.string()),
  eventId: v.optional(v.string()),
  items: v.optional(v.array(v.lazy(() => PlaylistSchema))),
  kind: v.optional(v.string()),
  nextPageToken: v.optional(v.string()),
  pageInfo: v.optional(v.lazy(() => PageInfoSchema)),
  prevPageToken: v.optional(v.string()),
  tokenPagination: v.optional(v.lazy(() => TokenPaginationSchema)),
  visitorId: v.optional(v.string()),
});

/** Playlist localization setting */
export type PlaylistLocalization = {
  readonly description?: string;
  readonly title?: string;
};
export const PlaylistLocalizationSchema: v.GenericSchema<unknown, PlaylistLocalization> = v.looseObject({
  description: v.optional(v.string()),
  title: v.optional(v.string()),
});

export type PlaylistPlayer = {
  readonly embedHtml?: string;
};
export const PlaylistPlayerSchema: v.GenericSchema<unknown, PlaylistPlayer> = v.looseObject({
  embedHtml: v.optional(v.string()),
});

/** Basic details about a playlist, including title, description and thumbnails. */
export type PlaylistSnippet = {
  readonly channelId?: string;
  readonly channelTitle?: string;
  readonly defaultLanguage?: string;
  readonly description?: string;
  readonly localized?: PlaylistLocalization;
  readonly publishedAt?: string;
  readonly tags?: ReadonlyArray<string>;
  readonly thumbnails?: ThumbnailDetails;
  readonly thumbnailVideoId?: string;
  readonly title?: string;
};
export const PlaylistSnippetSchema: v.GenericSchema<unknown, PlaylistSnippet> = v.looseObject({
  channelId: v.optional(v.string()),
  channelTitle: v.optional(v.string()),
  defaultLanguage: v.optional(v.string()),
  description: v.optional(v.string()),
  localized: v.optional(v.lazy(() => PlaylistLocalizationSchema)),
  publishedAt: v.optional(v.pipe(v.string(), v.isoTimestamp())),
  tags: v.optional(v.array(v.string())),
  thumbnails: v.optional(v.lazy(() => ThumbnailDetailsSchema)),
  thumbnailVideoId: v.optional(v.string()),
  title: v.optional(v.string()),
});

export type PlaylistStatus = {
  readonly podcastStatus?: "enabled" | "disabled";
  readonly privacyStatus?: "public" | "unlisted" | "private";
};
export const PlaylistStatusSchema: v.GenericSchema<unknown, PlaylistStatus> = v.looseObject({
  podcastStatus: v.optional(v.union([v.literal("enabled"), v.literal("disabled")])),
  privacyStatus: v.optional(v.union([v.literal("public"), v.literal("unlisted"), v.literal("private")])),
});

/** A pair Property / Value. */
export type PropertyValue = {
  readonly property?: string;
  readonly value?: string;
};
export const PropertyValueSchema: v.GenericSchema<unknown, PropertyValue> = v.looseObject({
  property: v.optional(v.string()),
  value: v.optional(v.string()),
});

export type RelatedEntity = {
  readonly entity?: Entity;
};
export const RelatedEntitySchema: v.GenericSchema<unknown, RelatedEntity> = v.looseObject({
  entity: v.optional(v.lazy(() => EntitySchema)),
});

/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
export type ReportingEmpty = {

};
export const ReportingEmptySchema: v.GenericSchema<unknown, ReportingEmpty> = v.looseObject({

});

/** gdata */
export type ReportingGdataBlobstore2Info = {
  readonly blobGeneration?: string;
  readonly blobId?: string;
  readonly downloadExternalReadToken?: string;
  readonly downloadReadHandle?: string;
  readonly readToken?: string;
  readonly uploadFragmentListCreationInfo?: string;
  readonly uploadMetadataContainer?: string;
};
export const ReportingGdataBlobstore2InfoSchema: v.GenericSchema<unknown, ReportingGdataBlobstore2Info> = v.looseObject({
  blobGeneration: v.optional(v.string()),
  blobId: v.optional(v.string()),
  downloadExternalReadToken: v.optional(v.string()),
  downloadReadHandle: v.optional(v.string()),
  readToken: v.optional(v.string()),
  uploadFragmentListCreationInfo: v.optional(v.string()),
  uploadMetadataContainer: v.optional(v.string()),
});

/** gdata */
export type ReportingGdataCompositeMedia = {
  readonly blobRef?: string;
  readonly blobstore2Info?: ReportingGdataBlobstore2Info;
  readonly cosmoBinaryReference?: string;
  readonly crc32cHash?: number;
  readonly inline?: string;
  readonly length?: string;
  readonly md5Hash?: string;
  readonly objectId?: ReportingGdataObjectId;
  readonly path?: string;
  readonly referenceType?: "PATH" | "BLOB_REF" | "INLINE" | "BIGSTORE_REF" | "COSMO_BINARY_REFERENCE";
  readonly sha1Hash?: string;
};
export const ReportingGdataCompositeMediaSchema: v.GenericSchema<unknown, ReportingGdataCompositeMedia> = v.looseObject({
  blobRef: v.optional(v.string()),
  blobstore2Info: v.optional(v.lazy(() => ReportingGdataBlobstore2InfoSchema)),
  cosmoBinaryReference: v.optional(v.string()),
  crc32cHash: v.optional(v.pipe(v.number(), v.integer())),
  inline: v.optional(v.string()),
  length: v.optional(v.string()),
  md5Hash: v.optional(v.string()),
  objectId: v.optional(v.lazy(() => ReportingGdataObjectIdSchema)),
  path: v.optional(v.string()),
  referenceType: v.optional(v.union([v.literal("PATH"), v.literal("BLOB_REF"), v.literal("INLINE"), v.literal("BIGSTORE_REF"), v.literal("COSMO_BINARY_REFERENCE")])),
  sha1Hash: v.optional(v.string()),
});

/** gdata */
export type ReportingGdataContentTypeInfo = {
  readonly bestGuess?: string;
  readonly fromBytes?: string;
  readonly fromFileName?: string;
  readonly fromFusionId?: string;
  readonly fromHeader?: string;
  readonly fromUrlPath?: string;
  readonly fusionIdDetectionMetadata?: string;
};
export const ReportingGdataContentTypeInfoSchema: v.GenericSchema<unknown, ReportingGdataContentTypeInfo> = v.looseObject({
  bestGuess: v.optional(v.string()),
  fromBytes: v.optional(v.string()),
  fromFileName: v.optional(v.string()),
  fromFusionId: v.optional(v.string()),
  fromHeader: v.optional(v.string()),
  fromUrlPath: v.optional(v.string()),
  fusionIdDetectionMetadata: v.optional(v.string()),
});

/** gdata */
export type ReportingGdataDiffChecksumsResponse = {
  readonly checksumsLocation?: ReportingGdataCompositeMedia;
  readonly chunkSizeBytes?: string;
  readonly objectLocation?: ReportingGdataCompositeMedia;
  readonly objectSizeBytes?: string;
  readonly objectVersion?: string;
};
export const ReportingGdataDiffChecksumsResponseSchema: v.GenericSchema<unknown, ReportingGdataDiffChecksumsResponse> = v.looseObject({
  checksumsLocation: v.optional(v.lazy(() => ReportingGdataCompositeMediaSchema)),
  chunkSizeBytes: v.optional(v.string()),
  objectLocation: v.optional(v.lazy(() => ReportingGdataCompositeMediaSchema)),
  objectSizeBytes: v.optional(v.string()),
  objectVersion: v.optional(v.string()),
});

/** gdata */
export type ReportingGdataDiffDownloadResponse = {
  readonly objectLocation?: ReportingGdataCompositeMedia;
};
export const ReportingGdataDiffDownloadResponseSchema: v.GenericSchema<unknown, ReportingGdataDiffDownloadResponse> = v.looseObject({
  objectLocation: v.optional(v.lazy(() => ReportingGdataCompositeMediaSchema)),
});

/** gdata */
export type ReportingGdataDiffUploadRequest = {
  readonly checksumsInfo?: ReportingGdataCompositeMedia;
  readonly objectInfo?: ReportingGdataCompositeMedia;
  readonly objectVersion?: string;
};
export const ReportingGdataDiffUploadRequestSchema: v.GenericSchema<unknown, ReportingGdataDiffUploadRequest> = v.looseObject({
  checksumsInfo: v.optional(v.lazy(() => ReportingGdataCompositeMediaSchema)),
  objectInfo: v.optional(v.lazy(() => ReportingGdataCompositeMediaSchema)),
  objectVersion: v.optional(v.string()),
});

/** gdata */
export type ReportingGdataDiffUploadResponse = {
  readonly objectVersion?: string;
  readonly originalObject?: ReportingGdataCompositeMedia;
};
export const ReportingGdataDiffUploadResponseSchema: v.GenericSchema<unknown, ReportingGdataDiffUploadResponse> = v.looseObject({
  objectVersion: v.optional(v.string()),
  originalObject: v.optional(v.lazy(() => ReportingGdataCompositeMediaSchema)),
});

/** gdata */
export type ReportingGdataDiffVersionResponse = {
  readonly objectSizeBytes?: string;
  readonly objectVersion?: string;
};
export const ReportingGdataDiffVersionResponseSchema: v.GenericSchema<unknown, ReportingGdataDiffVersionResponse> = v.looseObject({
  objectSizeBytes: v.optional(v.string()),
  objectVersion: v.optional(v.string()),
});

/** gdata */
export type ReportingGdataDownloadParameters = {
  readonly allowGzipCompression?: boolean;
  readonly ignoreRange?: boolean;
};
export const ReportingGdataDownloadParametersSchema: v.GenericSchema<unknown, ReportingGdataDownloadParameters> = v.looseObject({
  allowGzipCompression: v.optional(v.boolean()),
  ignoreRange: v.optional(v.boolean()),
});

/** gdata */
export type ReportingGdataMedia = {
  readonly algorithm?: string;
  readonly bigstoreObjectRef?: string;
  readonly blobRef?: string;
  readonly blobstore2Info?: ReportingGdataBlobstore2Info;
  readonly compositeMedia?: ReadonlyArray<ReportingGdataCompositeMedia>;
  readonly contentType?: string;
  readonly contentTypeInfo?: ReportingGdataContentTypeInfo;
  readonly cosmoBinaryReference?: string;
  readonly crc32cHash?: number;
  readonly diffChecksumsResponse?: ReportingGdataDiffChecksumsResponse;
  readonly diffDownloadResponse?: ReportingGdataDiffDownloadResponse;
  readonly diffUploadRequest?: ReportingGdataDiffUploadRequest;
  readonly diffUploadResponse?: ReportingGdataDiffUploadResponse;
  readonly diffVersionResponse?: ReportingGdataDiffVersionResponse;
  readonly downloadParameters?: ReportingGdataDownloadParameters;
  readonly filename?: string;
  readonly hash?: string;
  readonly hashVerified?: boolean;
  readonly inline?: string;
  readonly isPotentialRetry?: boolean;
  readonly length?: string;
  readonly md5Hash?: string;
  readonly mediaId?: string;
  readonly objectId?: ReportingGdataObjectId;
  readonly path?: string;
  readonly referenceType?: "PATH" | "BLOB_REF" | "INLINE" | "GET_MEDIA" | "COMPOSITE_MEDIA" | "BIGSTORE_REF" | "DIFF_VERSION_RESPONSE" | "DIFF_CHECKSUMS_RESPONSE" | "DIFF_DOWNLOAD_RESPONSE" | "DIFF_UPLOAD_REQUEST" | "DIFF_UPLOAD_RESPONSE" | "COSMO_BINARY_REFERENCE" | "ARBITRARY_BYTES";
  readonly sha1Hash?: string;
  readonly sha256Hash?: string;
  readonly sha512Hash?: string;
  readonly timestamp?: string;
  readonly token?: string;
};
export const ReportingGdataMediaSchema: v.GenericSchema<unknown, ReportingGdataMedia> = v.looseObject({
  algorithm: v.optional(v.string()),
  bigstoreObjectRef: v.optional(v.string()),
  blobRef: v.optional(v.string()),
  blobstore2Info: v.optional(v.lazy(() => ReportingGdataBlobstore2InfoSchema)),
  compositeMedia: v.optional(v.array(v.lazy(() => ReportingGdataCompositeMediaSchema))),
  contentType: v.optional(v.string()),
  contentTypeInfo: v.optional(v.lazy(() => ReportingGdataContentTypeInfoSchema)),
  cosmoBinaryReference: v.optional(v.string()),
  crc32cHash: v.optional(v.pipe(v.number(), v.integer())),
  diffChecksumsResponse: v.optional(v.lazy(() => ReportingGdataDiffChecksumsResponseSchema)),
  diffDownloadResponse: v.optional(v.lazy(() => ReportingGdataDiffDownloadResponseSchema)),
  diffUploadRequest: v.optional(v.lazy(() => ReportingGdataDiffUploadRequestSchema)),
  diffUploadResponse: v.optional(v.lazy(() => ReportingGdataDiffUploadResponseSchema)),
  diffVersionResponse: v.optional(v.lazy(() => ReportingGdataDiffVersionResponseSchema)),
  downloadParameters: v.optional(v.lazy(() => ReportingGdataDownloadParametersSchema)),
  filename: v.optional(v.string()),
  hash: v.optional(v.string()),
  hashVerified: v.optional(v.boolean()),
  inline: v.optional(v.string()),
  isPotentialRetry: v.optional(v.boolean()),
  length: v.optional(v.string()),
  md5Hash: v.optional(v.string()),
  mediaId: v.optional(v.string()),
  objectId: v.optional(v.lazy(() => ReportingGdataObjectIdSchema)),
  path: v.optional(v.string()),
  referenceType: v.optional(v.union([v.literal("PATH"), v.literal("BLOB_REF"), v.literal("INLINE"), v.literal("GET_MEDIA"), v.literal("COMPOSITE_MEDIA"), v.literal("BIGSTORE_REF"), v.literal("DIFF_VERSION_RESPONSE"), v.literal("DIFF_CHECKSUMS_RESPONSE"), v.literal("DIFF_DOWNLOAD_RESPONSE"), v.literal("DIFF_UPLOAD_REQUEST"), v.literal("DIFF_UPLOAD_RESPONSE"), v.literal("COSMO_BINARY_REFERENCE"), v.literal("ARBITRARY_BYTES")])),
  sha1Hash: v.optional(v.string()),
  sha256Hash: v.optional(v.string()),
  sha512Hash: v.optional(v.string()),
  timestamp: v.optional(v.string()),
  token: v.optional(v.string()),
});

/** gdata */
export type ReportingGdataObjectId = {
  readonly bucketName?: string;
  readonly generation?: string;
  readonly objectName?: string;
};
export const ReportingGdataObjectIdSchema: v.GenericSchema<unknown, ReportingGdataObjectId> = v.looseObject({
  bucketName: v.optional(v.string()),
  generation: v.optional(v.string()),
  objectName: v.optional(v.string()),
});

/** A job creating reports of a specific type. */
export type ReportingJob = {
  readonly createTime?: string;
  readonly expireTime?: string;
  readonly id?: string;
  readonly name?: string;
  readonly reportTypeId?: string;
  readonly systemManaged?: boolean;
};
export const ReportingJobSchema: v.GenericSchema<unknown, ReportingJob> = v.looseObject({
  createTime: v.optional(v.string()),
  expireTime: v.optional(v.string()),
  id: v.optional(v.string()),
  name: v.optional(v.string()),
  reportTypeId: v.optional(v.string()),
  systemManaged: v.optional(v.boolean()),
});

/** Response message for ReportingService.ListJobs. */
export type ReportingListJobsResponse = {
  readonly jobs?: ReadonlyArray<ReportingJob>;
  readonly nextPageToken?: string;
};
export const ReportingListJobsResponseSchema: v.GenericSchema<unknown, ReportingListJobsResponse> = v.looseObject({
  jobs: v.optional(v.array(v.lazy(() => ReportingJobSchema))),
  nextPageToken: v.optional(v.string()),
});

/** Response message for ReportingService.ListReports. */
export type ReportingListReportsResponse = {
  readonly nextPageToken?: string;
  readonly reports?: ReadonlyArray<ReportingReport>;
};
export const ReportingListReportsResponseSchema: v.GenericSchema<unknown, ReportingListReportsResponse> = v.looseObject({
  nextPageToken: v.optional(v.string()),
  reports: v.optional(v.array(v.lazy(() => ReportingReportSchema))),
});

/** Response message for ReportingService.ListReportTypes. */
export type ReportingListReportTypesResponse = {
  readonly nextPageToken?: string;
  readonly reportTypes?: ReadonlyArray<ReportingReportType>;
};
export const ReportingListReportTypesResponseSchema: v.GenericSchema<unknown, ReportingListReportTypesResponse> = v.looseObject({
  nextPageToken: v.optional(v.string()),
  reportTypes: v.optional(v.array(v.lazy(() => ReportingReportTypeSchema))),
});

/** A report's metadata including the URL from which the report itself can be downloaded. */
export type ReportingReport = {
  readonly createTime?: string;
  readonly downloadUrl?: string;
  readonly endTime?: string;
  readonly id?: string;
  readonly jobExpireTime?: string;
  readonly jobId?: string;
  readonly startTime?: string;
};
export const ReportingReportSchema: v.GenericSchema<unknown, ReportingReport> = v.looseObject({
  createTime: v.optional(v.string()),
  downloadUrl: v.optional(v.string()),
  endTime: v.optional(v.string()),
  id: v.optional(v.string()),
  jobExpireTime: v.optional(v.string()),
  jobId: v.optional(v.string()),
  startTime: v.optional(v.string()),
});

/** A report type. */
export type ReportingReportType = {
  readonly deprecateTime?: string;
  readonly id?: string;
  readonly name?: string;
  readonly systemManaged?: boolean;
};
export const ReportingReportTypeSchema: v.GenericSchema<unknown, ReportingReportType> = v.looseObject({
  deprecateTime: v.optional(v.string()),
  id: v.optional(v.string()),
  name: v.optional(v.string()),
  systemManaged: v.optional(v.boolean()),
});

/** A resource id is a generic reference that points to another YouTube resource. */
export type ResourceId = {
  readonly channelId?: string;
  readonly kind?: string;
  readonly playlistId?: string;
  readonly videoId?: string;
};
export const ResourceIdSchema: v.GenericSchema<unknown, ResourceId> = v.looseObject({
  channelId: v.optional(v.string()),
  kind: v.optional(v.string()),
  playlistId: v.optional(v.string()),
  videoId: v.optional(v.string()),
});

export type SearchListResponse = {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<SearchResult>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfo;
  readonly prevPageToken?: string;
  readonly regionCode?: string;
  readonly tokenPagination?: TokenPagination;
  readonly visitorId?: string;
};
export const SearchListResponseSchema: v.GenericSchema<unknown, SearchListResponse> = v.looseObject({
  etag: v.optional(v.string()),
  eventId: v.optional(v.string()),
  items: v.optional(v.array(v.lazy(() => SearchResultSchema))),
  kind: v.optional(v.string()),
  nextPageToken: v.optional(v.string()),
  pageInfo: v.optional(v.lazy(() => PageInfoSchema)),
  prevPageToken: v.optional(v.string()),
  regionCode: v.optional(v.string()),
  tokenPagination: v.optional(v.lazy(() => TokenPaginationSchema)),
  visitorId: v.optional(v.string()),
});

/** A search result contains information about a YouTube video, channel, or playlist that matches the search parameters specified in an API request. While a search result points to a uniquely identifiable resource, like a video, it does not have its own persistent data. */
export type SearchResult = {
  readonly etag?: string;
  readonly id?: ResourceId;
  readonly kind?: string;
  readonly snippet?: SearchResultSnippet;
};
export const SearchResultSchema: v.GenericSchema<unknown, SearchResult> = v.looseObject({
  etag: v.optional(v.string()),
  id: v.optional(v.lazy(() => ResourceIdSchema)),
  kind: v.optional(v.string()),
  snippet: v.optional(v.lazy(() => SearchResultSnippetSchema)),
});

/** Basic details about a search result, including title, description and thumbnails of the item referenced by the search result. */
export type SearchResultSnippet = {
  readonly channelId?: string;
  readonly channelTitle?: string;
  readonly description?: string;
  readonly liveBroadcastContent?: "none" | "upcoming" | "live" | "completed";
  readonly publishedAt?: string;
  readonly thumbnails?: ThumbnailDetails;
  readonly title?: string;
};
export const SearchResultSnippetSchema: v.GenericSchema<unknown, SearchResultSnippet> = v.looseObject({
  channelId: v.optional(v.string()),
  channelTitle: v.optional(v.string()),
  description: v.optional(v.string()),
  liveBroadcastContent: v.optional(v.union([v.literal("none"), v.literal("upcoming"), v.literal("live"), v.literal("completed")])),
  publishedAt: v.optional(v.pipe(v.string(), v.isoTimestamp())),
  thumbnails: v.optional(v.lazy(() => ThumbnailDetailsSchema)),
  title: v.optional(v.string()),
});

/** A *subscription* resource contains information about a YouTube user subscription. A subscription notifies a user when new videos are added to a channel or when another user takes one of several actions on YouTube, such as uploading a video, rating a video, or commenting on a video. */
export type Subscription = {
  readonly contentDetails?: SubscriptionContentDetails;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: SubscriptionSnippet;
  readonly subscriberSnippet?: SubscriptionSubscriberSnippet;
};
export const SubscriptionSchema: v.GenericSchema<unknown, Subscription> = v.looseObject({
  contentDetails: v.optional(v.lazy(() => SubscriptionContentDetailsSchema)),
  etag: v.optional(v.string()),
  id: v.optional(v.string()),
  kind: v.optional(v.string()),
  snippet: v.optional(v.lazy(() => SubscriptionSnippetSchema)),
  subscriberSnippet: v.optional(v.lazy(() => SubscriptionSubscriberSnippetSchema)),
});

/** Details about the content to witch a subscription refers. */
export type SubscriptionContentDetails = {
  readonly activityType?: "subscriptionActivityTypeUnspecified" | "all" | "uploads";
  readonly newItemCount?: number;
  readonly totalItemCount?: number;
};
export const SubscriptionContentDetailsSchema: v.GenericSchema<unknown, SubscriptionContentDetails> = v.looseObject({
  activityType: v.optional(v.union([v.literal("subscriptionActivityTypeUnspecified"), v.literal("all"), v.literal("uploads")])),
  newItemCount: v.optional(v.pipe(v.number(), v.integer())),
  totalItemCount: v.optional(v.pipe(v.number(), v.integer())),
});

export type SubscriptionListResponse = {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<Subscription>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfo;
  readonly prevPageToken?: string;
  readonly tokenPagination?: TokenPagination;
  readonly visitorId?: string;
};
export const SubscriptionListResponseSchema: v.GenericSchema<unknown, SubscriptionListResponse> = v.looseObject({
  etag: v.optional(v.string()),
  eventId: v.optional(v.string()),
  items: v.optional(v.array(v.lazy(() => SubscriptionSchema))),
  kind: v.optional(v.string()),
  nextPageToken: v.optional(v.string()),
  pageInfo: v.optional(v.lazy(() => PageInfoSchema)),
  prevPageToken: v.optional(v.string()),
  tokenPagination: v.optional(v.lazy(() => TokenPaginationSchema)),
  visitorId: v.optional(v.string()),
});

/** Basic details about a subscription, including title, description and thumbnails of the subscribed item. */
export type SubscriptionSnippet = {
  readonly channelId?: string;
  readonly description?: string;
  readonly publishedAt?: string;
  readonly resourceId?: ResourceId;
  readonly thumbnails?: ThumbnailDetails;
  readonly title?: string;
};
export const SubscriptionSnippetSchema: v.GenericSchema<unknown, SubscriptionSnippet> = v.looseObject({
  channelId: v.optional(v.string()),
  description: v.optional(v.string()),
  publishedAt: v.optional(v.pipe(v.string(), v.isoTimestamp())),
  resourceId: v.optional(v.lazy(() => ResourceIdSchema)),
  thumbnails: v.optional(v.lazy(() => ThumbnailDetailsSchema)),
  title: v.optional(v.string()),
});

/** Basic details about a subscription's subscriber including title, description, channel ID and thumbnails. */
export type SubscriptionSubscriberSnippet = {
  readonly channelId?: string;
  readonly description?: string;
  readonly thumbnails?: ThumbnailDetails;
  readonly title?: string;
};
export const SubscriptionSubscriberSnippetSchema: v.GenericSchema<unknown, SubscriptionSubscriberSnippet> = v.looseObject({
  channelId: v.optional(v.string()),
  description: v.optional(v.string()),
  thumbnails: v.optional(v.lazy(() => ThumbnailDetailsSchema)),
  title: v.optional(v.string()),
});

/** A `__superChatEvent__` resource represents a Super Chat purchase on a YouTube channel. */
export type SuperChatEvent = {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: SuperChatEventSnippet;
};
export const SuperChatEventSchema: v.GenericSchema<unknown, SuperChatEvent> = v.looseObject({
  etag: v.optional(v.string()),
  id: v.optional(v.string()),
  kind: v.optional(v.string()),
  snippet: v.optional(v.lazy(() => SuperChatEventSnippetSchema)),
});

export type SuperChatEventListResponse = {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<SuperChatEvent>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfo;
  readonly tokenPagination?: TokenPagination;
  readonly visitorId?: string;
};
export const SuperChatEventListResponseSchema: v.GenericSchema<unknown, SuperChatEventListResponse> = v.looseObject({
  etag: v.optional(v.string()),
  eventId: v.optional(v.string()),
  items: v.optional(v.array(v.lazy(() => SuperChatEventSchema))),
  kind: v.optional(v.string()),
  nextPageToken: v.optional(v.string()),
  pageInfo: v.optional(v.lazy(() => PageInfoSchema)),
  tokenPagination: v.optional(v.lazy(() => TokenPaginationSchema)),
  visitorId: v.optional(v.string()),
});

export type SuperChatEventSnippet = {
  readonly amountMicros?: string;
  readonly channelId?: string;
  readonly commentText?: string;
  readonly createdAt?: string;
  readonly currency?: string;
  readonly displayString?: string;
  readonly isSuperStickerEvent?: boolean;
  readonly messageType?: number;
  readonly superStickerMetadata?: SuperStickerMetadata;
  readonly supporterDetails?: ChannelProfileDetails;
};
export const SuperChatEventSnippetSchema: v.GenericSchema<unknown, SuperChatEventSnippet> = v.looseObject({
  amountMicros: v.optional(v.string()),
  channelId: v.optional(v.string()),
  commentText: v.optional(v.string()),
  createdAt: v.optional(v.pipe(v.string(), v.isoTimestamp())),
  currency: v.optional(v.string()),
  displayString: v.optional(v.string()),
  isSuperStickerEvent: v.optional(v.boolean()),
  messageType: v.optional(v.pipe(v.number(), v.integer())),
  superStickerMetadata: v.optional(v.lazy(() => SuperStickerMetadataSchema)),
  supporterDetails: v.optional(v.lazy(() => ChannelProfileDetailsSchema)),
});

export type SuperStickerMetadata = {
  readonly altText?: string;
  readonly altTextLanguage?: string;
  readonly stickerId?: string;
};
export const SuperStickerMetadataSchema: v.GenericSchema<unknown, SuperStickerMetadata> = v.looseObject({
  altText: v.optional(v.string()),
  altTextLanguage: v.optional(v.string()),
  stickerId: v.optional(v.string()),
});

export type TestItem = {
  readonly etag?: string;
  readonly featuredPart?: boolean;
  readonly gaia?: string;
  readonly id?: string;
  readonly snippet?: TestItemTestItemSnippet;
};
export const TestItemSchema: v.GenericSchema<unknown, TestItem> = v.looseObject({
  etag: v.optional(v.string()),
  featuredPart: v.optional(v.boolean()),
  gaia: v.optional(v.string()),
  id: v.optional(v.string()),
  snippet: v.optional(v.lazy(() => TestItemTestItemSnippetSchema)),
});

export type TestItemTestItemSnippet = {

};
export const TestItemTestItemSnippetSchema: v.GenericSchema<unknown, TestItemTestItemSnippet> = v.looseObject({

});

/** A *third party account link* resource represents a link between a YouTube account or a channel and an account on a third-party service. */
export type ThirdPartyLink = {
  readonly etag?: string;
  readonly kind?: string;
  readonly linkingToken?: string;
  readonly snippet?: ThirdPartyLinkSnippet;
  readonly status?: ThirdPartyLinkStatus;
};
export const ThirdPartyLinkSchema: v.GenericSchema<unknown, ThirdPartyLink> = v.looseObject({
  etag: v.optional(v.string()),
  kind: v.optional(v.string()),
  linkingToken: v.optional(v.string()),
  snippet: v.optional(v.lazy(() => ThirdPartyLinkSnippetSchema)),
  status: v.optional(v.lazy(() => ThirdPartyLinkStatusSchema)),
});

export type ThirdPartyLinkListResponse = {
  readonly etag?: string;
  readonly items?: ReadonlyArray<ThirdPartyLink>;
  readonly kind?: string;
};
export const ThirdPartyLinkListResponseSchema: v.GenericSchema<unknown, ThirdPartyLinkListResponse> = v.looseObject({
  etag: v.optional(v.string()),
  items: v.optional(v.array(v.lazy(() => ThirdPartyLinkSchema))),
  kind: v.optional(v.string()),
});

/** Basic information about a third party account link, including its type and type-specific information. */
export type ThirdPartyLinkSnippet = {
  readonly channelToAffiliateProgramLink?: ChannelToAffiliateProgramLinkDetails;
  readonly channelToStoreLink?: ChannelToStoreLinkDetails;
  readonly type?: "linkUnspecified" | "channelToStoreLink" | "channelToAffiliateProgramLink";
};
export const ThirdPartyLinkSnippetSchema: v.GenericSchema<unknown, ThirdPartyLinkSnippet> = v.looseObject({
  channelToAffiliateProgramLink: v.optional(v.lazy(() => ChannelToAffiliateProgramLinkDetailsSchema)),
  channelToStoreLink: v.optional(v.lazy(() => ChannelToStoreLinkDetailsSchema)),
  type: v.optional(v.union([v.literal("linkUnspecified"), v.literal("channelToStoreLink"), v.literal("channelToAffiliateProgramLink")])),
});

/** The third-party link status object contains information about the status of the link. */
export type ThirdPartyLinkStatus = {
  readonly linkStatus?: "unknown" | "failed" | "pending" | "linked";
};
export const ThirdPartyLinkStatusSchema: v.GenericSchema<unknown, ThirdPartyLinkStatus> = v.looseObject({
  linkStatus: v.optional(v.union([v.literal("unknown"), v.literal("failed"), v.literal("pending"), v.literal("linked")])),
});

/** A thumbnail is an image representing a YouTube resource. */
export type Thumbnail = {
  readonly height?: number;
  readonly url?: string;
  readonly width?: number;
};
export const ThumbnailSchema: v.GenericSchema<unknown, Thumbnail> = v.looseObject({
  height: v.optional(v.pipe(v.number(), v.integer())),
  url: v.optional(v.string()),
  width: v.optional(v.pipe(v.number(), v.integer())),
});

/** Internal representation of thumbnails for a YouTube resource. */
export type ThumbnailDetails = {
  readonly default?: Thumbnail;
  readonly high?: Thumbnail;
  readonly maxres?: Thumbnail;
  readonly medium?: Thumbnail;
  readonly standard?: Thumbnail;
};
export const ThumbnailDetailsSchema: v.GenericSchema<unknown, ThumbnailDetails> = v.looseObject({
  default: v.optional(v.lazy(() => ThumbnailSchema)),
  high: v.optional(v.lazy(() => ThumbnailSchema)),
  maxres: v.optional(v.lazy(() => ThumbnailSchema)),
  medium: v.optional(v.lazy(() => ThumbnailSchema)),
  standard: v.optional(v.lazy(() => ThumbnailSchema)),
});

export type ThumbnailSetResponse = {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<ThumbnailDetails>;
  readonly kind?: string;
  readonly visitorId?: string;
};
export const ThumbnailSetResponseSchema: v.GenericSchema<unknown, ThumbnailSetResponse> = v.looseObject({
  etag: v.optional(v.string()),
  eventId: v.optional(v.string()),
  items: v.optional(v.array(v.lazy(() => ThumbnailDetailsSchema))),
  kind: v.optional(v.string()),
  visitorId: v.optional(v.string()),
});

/** Stub token pagination template to suppress results. */
export type TokenPagination = {

};
export const TokenPaginationSchema: v.GenericSchema<unknown, TokenPagination> = v.looseObject({

});

/** A *video* resource represents a YouTube video. */
export type Video = {
  readonly ageGating?: VideoAgeGating;
  readonly brandPartner?: BrandPartner;
  readonly contentDetails?: VideoContentDetails;
  readonly etag?: string;
  readonly fileDetails?: VideoFileDetails;
  readonly id?: string;
  readonly kind?: string;
  readonly liveStreamingDetails?: VideoLiveStreamingDetails;
  readonly localizations?: Readonly<Record<string, VideoLocalization>>;
  readonly monetizationDetails?: VideoMonetizationDetails;
  readonly paidProductPlacementDetails?: VideoPaidProductPlacementDetails;
  readonly player?: VideoPlayer;
  readonly processingDetails?: VideoProcessingDetails;
  readonly projectDetails?: VideoProjectDetails;
  readonly recordingDetails?: VideoRecordingDetails;
  readonly snippet?: VideoSnippet;
  readonly statistics?: VideoStatistics;
  readonly status?: VideoStatus;
  readonly suggestions?: VideoSuggestions;
  readonly topicDetails?: VideoTopicDetails;
};
export const VideoSchema: v.GenericSchema<unknown, Video> = v.looseObject({
  ageGating: v.optional(v.lazy(() => VideoAgeGatingSchema)),
  brandPartner: v.optional(v.lazy(() => BrandPartnerSchema)),
  contentDetails: v.optional(v.lazy(() => VideoContentDetailsSchema)),
  etag: v.optional(v.string()),
  fileDetails: v.optional(v.lazy(() => VideoFileDetailsSchema)),
  id: v.optional(v.string()),
  kind: v.optional(v.string()),
  liveStreamingDetails: v.optional(v.lazy(() => VideoLiveStreamingDetailsSchema)),
  localizations: v.optional(v.record(v.string(), v.lazy(() => VideoLocalizationSchema))),
  monetizationDetails: v.optional(v.lazy(() => VideoMonetizationDetailsSchema)),
  paidProductPlacementDetails: v.optional(v.lazy(() => VideoPaidProductPlacementDetailsSchema)),
  player: v.optional(v.lazy(() => VideoPlayerSchema)),
  processingDetails: v.optional(v.lazy(() => VideoProcessingDetailsSchema)),
  projectDetails: v.optional(v.lazy(() => VideoProjectDetailsSchema)),
  recordingDetails: v.optional(v.lazy(() => VideoRecordingDetailsSchema)),
  snippet: v.optional(v.lazy(() => VideoSnippetSchema)),
  statistics: v.optional(v.lazy(() => VideoStatisticsSchema)),
  status: v.optional(v.lazy(() => VideoStatusSchema)),
  suggestions: v.optional(v.lazy(() => VideoSuggestionsSchema)),
  topicDetails: v.optional(v.lazy(() => VideoTopicDetailsSchema)),
});

export type VideoAbuseReport = {
  readonly comments?: string;
  readonly language?: string;
  readonly reasonId?: string;
  readonly secondaryReasonId?: string;
  readonly videoId?: string;
};
export const VideoAbuseReportSchema: v.GenericSchema<unknown, VideoAbuseReport> = v.looseObject({
  comments: v.optional(v.string()),
  language: v.optional(v.string()),
  reasonId: v.optional(v.string()),
  secondaryReasonId: v.optional(v.string()),
  videoId: v.optional(v.string()),
});

/** A `__videoAbuseReportReason__` resource identifies a reason that a video could be reported as abusive. Video abuse report reasons are used with `video.ReportAbuse`. */
export type VideoAbuseReportReason = {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: VideoAbuseReportReasonSnippet;
};
export const VideoAbuseReportReasonSchema: v.GenericSchema<unknown, VideoAbuseReportReason> = v.looseObject({
  etag: v.optional(v.string()),
  id: v.optional(v.string()),
  kind: v.optional(v.string()),
  snippet: v.optional(v.lazy(() => VideoAbuseReportReasonSnippetSchema)),
});

export type VideoAbuseReportReasonListResponse = {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<VideoAbuseReportReason>;
  readonly kind?: string;
  readonly visitorId?: string;
};
export const VideoAbuseReportReasonListResponseSchema: v.GenericSchema<unknown, VideoAbuseReportReasonListResponse> = v.looseObject({
  etag: v.optional(v.string()),
  eventId: v.optional(v.string()),
  items: v.optional(v.array(v.lazy(() => VideoAbuseReportReasonSchema))),
  kind: v.optional(v.string()),
  visitorId: v.optional(v.string()),
});

/** Basic details about a video category, such as its localized title. */
export type VideoAbuseReportReasonSnippet = {
  readonly label?: string;
  readonly secondaryReasons?: ReadonlyArray<VideoAbuseReportSecondaryReason>;
};
export const VideoAbuseReportReasonSnippetSchema: v.GenericSchema<unknown, VideoAbuseReportReasonSnippet> = v.looseObject({
  label: v.optional(v.string()),
  secondaryReasons: v.optional(v.array(v.lazy(() => VideoAbuseReportSecondaryReasonSchema))),
});

export type VideoAbuseReportSecondaryReason = {
  readonly id?: string;
  readonly label?: string;
};
export const VideoAbuseReportSecondaryReasonSchema: v.GenericSchema<unknown, VideoAbuseReportSecondaryReason> = v.looseObject({
  id: v.optional(v.string()),
  label: v.optional(v.string()),
});

export type VideoAgeGating = {
  readonly alcoholContent?: boolean;
  readonly restricted?: boolean;
  readonly videoGameRating?: "anyone" | "m15Plus" | "m16Plus" | "m17Plus";
};
export const VideoAgeGatingSchema: v.GenericSchema<unknown, VideoAgeGating> = v.looseObject({
  alcoholContent: v.optional(v.boolean()),
  restricted: v.optional(v.boolean()),
  videoGameRating: v.optional(v.union([v.literal("anyone"), v.literal("m15Plus"), v.literal("m16Plus"), v.literal("m17Plus")])),
});

/** A *videoCategory* resource identifies a category that has been or could be associated with uploaded videos. */
export type VideoCategory = {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: VideoCategorySnippet;
};
export const VideoCategorySchema: v.GenericSchema<unknown, VideoCategory> = v.looseObject({
  etag: v.optional(v.string()),
  id: v.optional(v.string()),
  kind: v.optional(v.string()),
  snippet: v.optional(v.lazy(() => VideoCategorySnippetSchema)),
});

export type VideoCategoryListResponse = {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<VideoCategory>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfo;
  readonly prevPageToken?: string;
  readonly tokenPagination?: TokenPagination;
  readonly visitorId?: string;
};
export const VideoCategoryListResponseSchema: v.GenericSchema<unknown, VideoCategoryListResponse> = v.looseObject({
  etag: v.optional(v.string()),
  eventId: v.optional(v.string()),
  items: v.optional(v.array(v.lazy(() => VideoCategorySchema))),
  kind: v.optional(v.string()),
  nextPageToken: v.optional(v.string()),
  pageInfo: v.optional(v.lazy(() => PageInfoSchema)),
  prevPageToken: v.optional(v.string()),
  tokenPagination: v.optional(v.lazy(() => TokenPaginationSchema)),
  visitorId: v.optional(v.string()),
});

/** Basic details about a video category, such as its localized title. */
export type VideoCategorySnippet = {
  readonly assignable?: boolean;
  readonly channelId?: string;
  readonly title?: string;
};
export const VideoCategorySnippetSchema: v.GenericSchema<unknown, VideoCategorySnippet> = v.looseObject({
  assignable: v.optional(v.boolean()),
  channelId: v.optional(v.string()),
  title: v.optional(v.string()),
});

/** Details about the content of a YouTube Video. */
export type VideoContentDetails = {
  readonly caption?: "true" | "false";
  readonly contentRating?: ContentRating;
  readonly countryRestriction?: AccessPolicy;
  readonly definition?: "sd" | "hd";
  readonly dimension?: string;
  readonly duration?: string;
  readonly hasCustomThumbnail?: boolean;
  readonly licensedContent?: boolean;
  readonly projection?: "rectangular" | "360";
  readonly regionRestriction?: VideoContentDetailsRegionRestriction;
};
export const VideoContentDetailsSchema: v.GenericSchema<unknown, VideoContentDetails> = v.looseObject({
  caption: v.optional(v.union([v.literal("true"), v.literal("false")])),
  contentRating: v.optional(v.lazy(() => ContentRatingSchema)),
  countryRestriction: v.optional(v.lazy(() => AccessPolicySchema)),
  definition: v.optional(v.union([v.literal("sd"), v.literal("hd")])),
  dimension: v.optional(v.string()),
  duration: v.optional(v.string()),
  hasCustomThumbnail: v.optional(v.boolean()),
  licensedContent: v.optional(v.boolean()),
  projection: v.optional(v.union([v.literal("rectangular"), v.literal("360")])),
  regionRestriction: v.optional(v.lazy(() => VideoContentDetailsRegionRestrictionSchema)),
});

/** DEPRECATED Region restriction of the video. */
export type VideoContentDetailsRegionRestriction = {
  readonly allowed?: ReadonlyArray<string>;
  readonly blocked?: ReadonlyArray<string>;
};
export const VideoContentDetailsRegionRestrictionSchema: v.GenericSchema<unknown, VideoContentDetailsRegionRestriction> = v.looseObject({
  allowed: v.optional(v.array(v.string())),
  blocked: v.optional(v.array(v.string())),
});

/** Describes original video file properties, including technical details about audio and video streams, but also metadata information like content length, digitization time, or geotagging information. */
export type VideoFileDetails = {
  readonly audioStreams?: ReadonlyArray<VideoFileDetailsAudioStream>;
  readonly bitrateBps?: string;
  readonly container?: string;
  readonly creationTime?: string;
  readonly durationMs?: string;
  readonly fileName?: string;
  readonly fileSize?: string;
  readonly fileType?: "video" | "audio" | "image" | "archive" | "document" | "project" | "other";
  readonly videoStreams?: ReadonlyArray<VideoFileDetailsVideoStream>;
};
export const VideoFileDetailsSchema: v.GenericSchema<unknown, VideoFileDetails> = v.looseObject({
  audioStreams: v.optional(v.array(v.lazy(() => VideoFileDetailsAudioStreamSchema))),
  bitrateBps: v.optional(v.string()),
  container: v.optional(v.string()),
  creationTime: v.optional(v.string()),
  durationMs: v.optional(v.string()),
  fileName: v.optional(v.string()),
  fileSize: v.optional(v.string()),
  fileType: v.optional(v.union([v.literal("video"), v.literal("audio"), v.literal("image"), v.literal("archive"), v.literal("document"), v.literal("project"), v.literal("other")])),
  videoStreams: v.optional(v.array(v.lazy(() => VideoFileDetailsVideoStreamSchema))),
});

/** Information about an audio stream. */
export type VideoFileDetailsAudioStream = {
  readonly bitrateBps?: string;
  readonly channelCount?: number;
  readonly codec?: string;
  readonly vendor?: string;
};
export const VideoFileDetailsAudioStreamSchema: v.GenericSchema<unknown, VideoFileDetailsAudioStream> = v.looseObject({
  bitrateBps: v.optional(v.string()),
  channelCount: v.optional(v.pipe(v.number(), v.integer())),
  codec: v.optional(v.string()),
  vendor: v.optional(v.string()),
});

/** Information about a video stream. */
export type VideoFileDetailsVideoStream = {
  readonly aspectRatio?: number;
  readonly bitrateBps?: string;
  readonly codec?: string;
  readonly frameRateFps?: number;
  readonly heightPixels?: number;
  readonly rotation?: "none" | "clockwise" | "upsideDown" | "counterClockwise" | "other";
  readonly vendor?: string;
  readonly widthPixels?: number;
};
export const VideoFileDetailsVideoStreamSchema: v.GenericSchema<unknown, VideoFileDetailsVideoStream> = v.looseObject({
  aspectRatio: v.optional(v.number()),
  bitrateBps: v.optional(v.string()),
  codec: v.optional(v.string()),
  frameRateFps: v.optional(v.number()),
  heightPixels: v.optional(v.pipe(v.number(), v.integer())),
  rotation: v.optional(v.union([v.literal("none"), v.literal("clockwise"), v.literal("upsideDown"), v.literal("counterClockwise"), v.literal("other")])),
  vendor: v.optional(v.string()),
  widthPixels: v.optional(v.pipe(v.number(), v.integer())),
});

export type VideoGetRatingResponse = {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<VideoRating>;
  readonly kind?: string;
  readonly visitorId?: string;
};
export const VideoGetRatingResponseSchema: v.GenericSchema<unknown, VideoGetRatingResponse> = v.looseObject({
  etag: v.optional(v.string()),
  eventId: v.optional(v.string()),
  items: v.optional(v.array(v.lazy(() => VideoRatingSchema))),
  kind: v.optional(v.string()),
  visitorId: v.optional(v.string()),
});

export type VideoListResponse = {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<Video>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfo;
  readonly prevPageToken?: string;
  readonly tokenPagination?: TokenPagination;
  readonly visitorId?: string;
};
export const VideoListResponseSchema: v.GenericSchema<unknown, VideoListResponse> = v.looseObject({
  etag: v.optional(v.string()),
  eventId: v.optional(v.string()),
  items: v.optional(v.array(v.lazy(() => VideoSchema))),
  kind: v.optional(v.string()),
  nextPageToken: v.optional(v.string()),
  pageInfo: v.optional(v.lazy(() => PageInfoSchema)),
  prevPageToken: v.optional(v.string()),
  tokenPagination: v.optional(v.lazy(() => TokenPaginationSchema)),
  visitorId: v.optional(v.string()),
});

/** Details about the live streaming metadata. */
export type VideoLiveStreamingDetails = {
  readonly activeLiveChatId?: string;
  readonly actualEndTime?: string;
  readonly actualStartTime?: string;
  readonly concurrentViewers?: string;
  readonly scheduledEndTime?: string;
  readonly scheduledStartTime?: string;
};
export const VideoLiveStreamingDetailsSchema: v.GenericSchema<unknown, VideoLiveStreamingDetails> = v.looseObject({
  activeLiveChatId: v.optional(v.string()),
  actualEndTime: v.optional(v.pipe(v.string(), v.isoTimestamp())),
  actualStartTime: v.optional(v.pipe(v.string(), v.isoTimestamp())),
  concurrentViewers: v.optional(v.string()),
  scheduledEndTime: v.optional(v.pipe(v.string(), v.isoTimestamp())),
  scheduledStartTime: v.optional(v.pipe(v.string(), v.isoTimestamp())),
});

/** Localized versions of certain video properties (e.g. title). */
export type VideoLocalization = {
  readonly description?: string;
  readonly title?: string;
};
export const VideoLocalizationSchema: v.GenericSchema<unknown, VideoLocalization> = v.looseObject({
  description: v.optional(v.string()),
  title: v.optional(v.string()),
});

/** Details about monetization of a YouTube Video. */
export type VideoMonetizationDetails = {
  readonly access?: AccessPolicy;
};
export const VideoMonetizationDetailsSchema: v.GenericSchema<unknown, VideoMonetizationDetails> = v.looseObject({
  access: v.optional(v.lazy(() => AccessPolicySchema)),
});

/** Details about paid content, such as paid product placement, sponsorships or endorsement, contained in a YouTube video and a method to inform viewers of paid promotion. This data can only be retrieved by the video owner. */
export type VideoPaidProductPlacementDetails = {
  readonly hasPaidProductPlacement?: boolean;
};
export const VideoPaidProductPlacementDetailsSchema: v.GenericSchema<unknown, VideoPaidProductPlacementDetails> = v.looseObject({
  hasPaidProductPlacement: v.optional(v.boolean()),
});

/** Player to be used for a video playback. */
export type VideoPlayer = {
  readonly embedHeight?: string;
  readonly embedHtml?: string;
  readonly embedWidth?: string;
};
export const VideoPlayerSchema: v.GenericSchema<unknown, VideoPlayer> = v.looseObject({
  embedHeight: v.optional(v.string()),
  embedHtml: v.optional(v.string()),
  embedWidth: v.optional(v.string()),
});

/** Describes processing status and progress and availability of some other Video resource parts. */
export type VideoProcessingDetails = {
  readonly editorSuggestionsAvailability?: string;
  readonly fileDetailsAvailability?: string;
  readonly processingFailureReason?: "uploadFailed" | "transcodeFailed" | "streamingFailed" | "other";
  readonly processingIssuesAvailability?: string;
  readonly processingProgress?: VideoProcessingDetailsProcessingProgress;
  readonly processingStatus?: "processing" | "succeeded" | "failed" | "terminated";
  readonly tagSuggestionsAvailability?: string;
  readonly thumbnailsAvailability?: string;
};
export const VideoProcessingDetailsSchema: v.GenericSchema<unknown, VideoProcessingDetails> = v.looseObject({
  editorSuggestionsAvailability: v.optional(v.string()),
  fileDetailsAvailability: v.optional(v.string()),
  processingFailureReason: v.optional(v.union([v.literal("uploadFailed"), v.literal("transcodeFailed"), v.literal("streamingFailed"), v.literal("other")])),
  processingIssuesAvailability: v.optional(v.string()),
  processingProgress: v.optional(v.lazy(() => VideoProcessingDetailsProcessingProgressSchema)),
  processingStatus: v.optional(v.union([v.literal("processing"), v.literal("succeeded"), v.literal("failed"), v.literal("terminated")])),
  tagSuggestionsAvailability: v.optional(v.string()),
  thumbnailsAvailability: v.optional(v.string()),
});

/** Video processing progress and completion time estimate. */
export type VideoProcessingDetailsProcessingProgress = {
  readonly partsProcessed?: string;
  readonly partsTotal?: string;
  readonly timeLeftMs?: string;
};
export const VideoProcessingDetailsProcessingProgressSchema: v.GenericSchema<unknown, VideoProcessingDetailsProcessingProgress> = v.looseObject({
  partsProcessed: v.optional(v.string()),
  partsTotal: v.optional(v.string()),
  timeLeftMs: v.optional(v.string()),
});

/** DEPRECATED. b/157517979: This part was never populated after it was added. However, it sees non-zero traffic because there is generated client code in the wild that refers to it [1]. We keep this field and do NOT remove it because otherwise V3 would return an error when this part gets requested [2]. [1] https://developers.google.com/resources/api-libraries/documentation/youtube/v3/csharp/latest/classGoogle_1_1Apis_1_1YouTube_1_1v3_1_1Data_1_1VideoProjectDetails.html [2] http://google3/video/youtube/src/python/servers/data_api/common.py?l=1565-1569&rcl=344141677 */
export type VideoProjectDetails = {

};
export const VideoProjectDetailsSchema: v.GenericSchema<unknown, VideoProjectDetails> = v.looseObject({

});

/** Basic details about rating of a video. */
export type VideoRating = {
  readonly rating?: "none" | "like" | "dislike";
  readonly videoId?: string;
};
export const VideoRatingSchema: v.GenericSchema<unknown, VideoRating> = v.looseObject({
  rating: v.optional(v.union([v.literal("none"), v.literal("like"), v.literal("dislike")])),
  videoId: v.optional(v.string()),
});

/** Recording information associated with the video. */
export type VideoRecordingDetails = {
  readonly location?: GeoPoint;
  readonly locationDescription?: string;
  readonly recordingDate?: string;
};
export const VideoRecordingDetailsSchema: v.GenericSchema<unknown, VideoRecordingDetails> = v.looseObject({
  location: v.optional(v.lazy(() => GeoPointSchema)),
  locationDescription: v.optional(v.string()),
  recordingDate: v.optional(v.pipe(v.string(), v.isoTimestamp())),
});

/** Basic details about a video, including title, description, uploader, thumbnails and category. */
export type VideoSnippet = {
  readonly categoryId?: string;
  readonly channelId?: string;
  readonly channelTitle?: string;
  readonly defaultAudioLanguage?: string;
  readonly defaultLanguage?: string;
  readonly description?: string;
  readonly liveBroadcastContent?: "none" | "upcoming" | "live" | "completed";
  readonly localized?: VideoLocalization;
  readonly publishedAt?: string;
  readonly tags?: ReadonlyArray<string>;
  readonly thumbnails?: ThumbnailDetails;
  readonly title?: string;
};
export const VideoSnippetSchema: v.GenericSchema<unknown, VideoSnippet> = v.looseObject({
  categoryId: v.optional(v.string()),
  channelId: v.optional(v.string()),
  channelTitle: v.optional(v.string()),
  defaultAudioLanguage: v.optional(v.string()),
  defaultLanguage: v.optional(v.string()),
  description: v.optional(v.string()),
  liveBroadcastContent: v.optional(v.union([v.literal("none"), v.literal("upcoming"), v.literal("live"), v.literal("completed")])),
  localized: v.optional(v.lazy(() => VideoLocalizationSchema)),
  publishedAt: v.optional(v.pipe(v.string(), v.isoTimestamp())),
  tags: v.optional(v.array(v.string())),
  thumbnails: v.optional(v.lazy(() => ThumbnailDetailsSchema)),
  title: v.optional(v.string()),
});

/** A *VideoStat* resource represents a YouTube video's stats. */
export type VideoStat = {
  readonly contentDetails?: VideoStatsContentDetails;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: VideoStatsSnippet;
  readonly statistics?: VideoStatsStatistics;
};
export const VideoStatSchema: v.GenericSchema<unknown, VideoStat> = v.looseObject({
  contentDetails: v.optional(v.lazy(() => VideoStatsContentDetailsSchema)),
  etag: v.optional(v.string()),
  id: v.optional(v.string()),
  kind: v.optional(v.string()),
  snippet: v.optional(v.lazy(() => VideoStatsSnippetSchema)),
  statistics: v.optional(v.lazy(() => VideoStatsStatisticsSchema)),
});

/** Statistics about the video, such as the number of times the video was viewed or liked. */
export type VideoStatistics = {
  readonly commentCount?: string;
  readonly dislikeCount?: string;
  readonly favoriteCount?: string;
  readonly likeCount?: string;
  readonly viewCount?: string;
};
export const VideoStatisticsSchema: v.GenericSchema<unknown, VideoStatistics> = v.looseObject({
  commentCount: v.optional(v.string()),
  dislikeCount: v.optional(v.string()),
  favoriteCount: v.optional(v.string()),
  likeCount: v.optional(v.string()),
  viewCount: v.optional(v.string()),
});

/** Details about the content of a YouTube Video. This is a subset of the information in VideoContentDetails specifically for the Videos.stats API. */
export type VideoStatsContentDetails = {
  readonly duration?: string;
  readonly durationMillis?: string;
};
export const VideoStatsContentDetailsSchema: v.GenericSchema<unknown, VideoStatsContentDetails> = v.looseObject({
  duration: v.optional(v.string()),
  durationMillis: v.optional(v.string()),
});

/** Basic details about a video. This is a subset of the information in VideoSnippet specifically for the Videos.stats API. */
export type VideoStatsSnippet = {
  readonly publishTime?: string;
};
export const VideoStatsSnippetSchema: v.GenericSchema<unknown, VideoStatsSnippet> = v.looseObject({
  publishTime: v.optional(v.string()),
});

/** Statistics about the video, such as the number of times the video was viewed or liked. */
export type VideoStatsStatistics = {
  readonly commentCount?: string;
  readonly likeCount?: string;
  readonly viewCount?: string;
};
export const VideoStatsStatisticsSchema: v.GenericSchema<unknown, VideoStatsStatistics> = v.looseObject({
  commentCount: v.optional(v.string()),
  likeCount: v.optional(v.string()),
  viewCount: v.optional(v.string()),
});

/** Basic details about a video category, such as its localized title. Next Id: 19 */
export type VideoStatus = {
  readonly containsSyntheticMedia?: boolean;
  readonly embeddable?: boolean;
  readonly failureReason?: "conversion" | "invalidFile" | "emptyFile" | "tooSmall" | "codec" | "uploadAborted";
  readonly license?: "youtube" | "creativeCommon";
  readonly madeForKids?: boolean;
  readonly privacyStatus?: "public" | "unlisted" | "private";
  readonly publicStatsViewable?: boolean;
  readonly publishAt?: string;
  readonly rejectionReason?: "copyright" | "inappropriate" | "duplicate" | "termsOfUse" | "uploaderAccountSuspended" | "length" | "claim" | "uploaderAccountClosed" | "trademark" | "legal";
  readonly selfDeclaredMadeForKids?: boolean;
  readonly uploadStatus?: "uploaded" | "processed" | "failed" | "rejected" | "deleted";
};
export const VideoStatusSchema: v.GenericSchema<unknown, VideoStatus> = v.looseObject({
  containsSyntheticMedia: v.optional(v.boolean()),
  embeddable: v.optional(v.boolean()),
  failureReason: v.optional(v.union([v.literal("conversion"), v.literal("invalidFile"), v.literal("emptyFile"), v.literal("tooSmall"), v.literal("codec"), v.literal("uploadAborted")])),
  license: v.optional(v.union([v.literal("youtube"), v.literal("creativeCommon")])),
  madeForKids: v.optional(v.boolean()),
  privacyStatus: v.optional(v.union([v.literal("public"), v.literal("unlisted"), v.literal("private")])),
  publicStatsViewable: v.optional(v.boolean()),
  publishAt: v.optional(v.pipe(v.string(), v.isoTimestamp())),
  rejectionReason: v.optional(v.union([v.literal("copyright"), v.literal("inappropriate"), v.literal("duplicate"), v.literal("termsOfUse"), v.literal("uploaderAccountSuspended"), v.literal("length"), v.literal("claim"), v.literal("uploaderAccountClosed"), v.literal("trademark"), v.literal("legal")])),
  selfDeclaredMadeForKids: v.optional(v.boolean()),
  uploadStatus: v.optional(v.union([v.literal("uploaded"), v.literal("processed"), v.literal("failed"), v.literal("rejected"), v.literal("deleted")])),
});

/** Specifies suggestions on how to improve video content, including encoding hints, tag suggestions, and editor suggestions. */
export type VideoSuggestions = {
  readonly editorSuggestions?: ReadonlyArray<"videoAutoLevels" | "videoStabilize" | "videoCrop" | "audioQuietAudioSwap">;
  readonly processingErrors?: ReadonlyArray<"audioFile" | "imageFile" | "projectFile" | "notAVideoFile" | "docFile" | "archiveFile" | "unsupportedSpatialAudioLayout">;
  readonly processingHints?: ReadonlyArray<"nonStreamableMov" | "sendBestQualityVideo" | "sphericalVideo" | "spatialAudio" | "vrVideo" | "hdrVideo">;
  readonly processingWarnings?: ReadonlyArray<"unknownContainer" | "unknownVideoCodec" | "unknownAudioCodec" | "inconsistentResolution" | "hasEditlist" | "problematicVideoCodec" | "problematicAudioCodec" | "unsupportedVrStereoMode" | "unsupportedSphericalProjectionType" | "unsupportedHdrPixelFormat" | "unsupportedHdrColorMetadata" | "problematicHdrLookupTable">;
  readonly tagSuggestions?: ReadonlyArray<VideoSuggestionsTagSuggestion>;
};
export const VideoSuggestionsSchema: v.GenericSchema<unknown, VideoSuggestions> = v.looseObject({
  editorSuggestions: v.optional(v.array(v.union([v.literal("videoAutoLevels"), v.literal("videoStabilize"), v.literal("videoCrop"), v.literal("audioQuietAudioSwap")]))),
  processingErrors: v.optional(v.array(v.union([v.literal("audioFile"), v.literal("imageFile"), v.literal("projectFile"), v.literal("notAVideoFile"), v.literal("docFile"), v.literal("archiveFile"), v.literal("unsupportedSpatialAudioLayout")]))),
  processingHints: v.optional(v.array(v.union([v.literal("nonStreamableMov"), v.literal("sendBestQualityVideo"), v.literal("sphericalVideo"), v.literal("spatialAudio"), v.literal("vrVideo"), v.literal("hdrVideo")]))),
  processingWarnings: v.optional(v.array(v.union([v.literal("unknownContainer"), v.literal("unknownVideoCodec"), v.literal("unknownAudioCodec"), v.literal("inconsistentResolution"), v.literal("hasEditlist"), v.literal("problematicVideoCodec"), v.literal("problematicAudioCodec"), v.literal("unsupportedVrStereoMode"), v.literal("unsupportedSphericalProjectionType"), v.literal("unsupportedHdrPixelFormat"), v.literal("unsupportedHdrColorMetadata"), v.literal("problematicHdrLookupTable")]))),
  tagSuggestions: v.optional(v.array(v.lazy(() => VideoSuggestionsTagSuggestionSchema))),
});

/** A single tag suggestion with its relevance information. */
export type VideoSuggestionsTagSuggestion = {
  readonly categoryRestricts?: ReadonlyArray<string>;
  readonly tag?: string;
};
export const VideoSuggestionsTagSuggestionSchema: v.GenericSchema<unknown, VideoSuggestionsTagSuggestion> = v.looseObject({
  categoryRestricts: v.optional(v.array(v.string())),
  tag: v.optional(v.string()),
});

/** Freebase topic information related to the video. */
export type VideoTopicDetails = {
  readonly relevantTopicIds?: ReadonlyArray<string>;
  readonly topicCategories?: ReadonlyArray<string>;
  readonly topicIds?: ReadonlyArray<string>;
};
export const VideoTopicDetailsSchema: v.GenericSchema<unknown, VideoTopicDetails> = v.looseObject({
  relevantTopicIds: v.optional(v.array(v.string())),
  topicCategories: v.optional(v.array(v.string())),
  topicIds: v.optional(v.array(v.string())),
});

/** Specifies who is allowed to train on the video. */
export type VideoTrainability = {
  readonly etag?: string;
  readonly kind?: string;
  readonly permitted?: ReadonlyArray<string>;
  readonly videoId?: string;
};
export const VideoTrainabilitySchema: v.GenericSchema<unknown, VideoTrainability> = v.looseObject({
  etag: v.optional(v.string()),
  kind: v.optional(v.string()),
  permitted: v.optional(v.array(v.string())),
  videoId: v.optional(v.string()),
});

/** Branding properties for the watch. All deprecated. */
export type WatchSettings = {
  readonly backgroundColor?: string;
  readonly featuredPlaylistId?: string;
  readonly textColor?: string;
};
export const WatchSettingsSchema: v.GenericSchema<unknown, WatchSettings> = v.looseObject({
  backgroundColor: v.optional(v.string()),
  featuredPlaylistId: v.optional(v.string()),
  textColor: v.optional(v.string()),
});
