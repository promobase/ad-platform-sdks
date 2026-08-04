// This file is generated. Do not edit by hand.
import { Schema } from "effect";

export interface AbuseReport {
  readonly abuseTypes?: ReadonlyArray<AbuseType>;
  readonly description?: string;
  readonly relatedEntities?: ReadonlyArray<RelatedEntity>;
  readonly subject?: Entity;
}
export interface AbuseReportEncoded {
  readonly abuseTypes?: ReadonlyArray<AbuseTypeEncoded>;
  readonly description?: string;
  readonly relatedEntities?: ReadonlyArray<RelatedEntityEncoded>;
  readonly subject?: EntityEncoded;
}
export const AbuseReport: Schema.Schema<AbuseReport, AbuseReportEncoded, never> = Schema.Struct({
  abuseTypes: Schema.optional(Schema.Array(Schema.suspend(() => AbuseType))),
  description: Schema.optional(Schema.String),
  relatedEntities: Schema.optional(Schema.Array(Schema.suspend(() => RelatedEntity))),
  subject: Schema.optional(Schema.suspend(() => Entity)),
});

export interface AbuseType {
  readonly id?: string;
}
export interface AbuseTypeEncoded {
  readonly id?: string;
}
export const AbuseType: Schema.Schema<AbuseType, AbuseTypeEncoded, never> = Schema.Struct({
  id: Schema.optional(Schema.String),
});

/** Rights management policy for YouTube resources. */
export interface AccessPolicy {
  readonly allowed?: boolean;
  readonly exception?: ReadonlyArray<string>;
}
export interface AccessPolicyEncoded {
  readonly allowed?: boolean;
  readonly exception?: ReadonlyArray<string>;
}
export const AccessPolicy: Schema.Schema<AccessPolicy, AccessPolicyEncoded, never> = Schema.Struct({
  allowed: Schema.optional(Schema.Boolean),
  exception: Schema.optional(Schema.Array(Schema.String)),
});

/** An *activity* resource contains information about an action that a particular channel, or user, has taken on YouTube.The actions reported in activity feeds include rating a video, sharing a video, marking a video as a favorite, commenting on a video, uploading a video, and so forth. Each activity resource identifies the type of action, the channel associated with the action, and the resource(s) associated with the action, such as the video that was rated or uploaded. */
export interface Activity {
  readonly contentDetails?: ActivityContentDetails;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: ActivitySnippet;
}
export interface ActivityEncoded {
  readonly contentDetails?: ActivityContentDetailsEncoded;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: ActivitySnippetEncoded;
}
export const Activity: Schema.Schema<Activity, ActivityEncoded, never> = Schema.Struct({
  contentDetails: Schema.optional(Schema.suspend(() => ActivityContentDetails)),
  etag: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  snippet: Schema.optional(Schema.suspend(() => ActivitySnippet)),
});

/** Details about the content of an activity: the video that was shared, the channel that was subscribed to, etc. */
export interface ActivityContentDetails {
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
}
export interface ActivityContentDetailsEncoded {
  readonly bulletin?: ActivityContentDetailsBulletinEncoded;
  readonly channelItem?: ActivityContentDetailsChannelItemEncoded;
  readonly comment?: ActivityContentDetailsCommentEncoded;
  readonly favorite?: ActivityContentDetailsFavoriteEncoded;
  readonly like?: ActivityContentDetailsLikeEncoded;
  readonly playlistItem?: ActivityContentDetailsPlaylistItemEncoded;
  readonly promotedItem?: ActivityContentDetailsPromotedItemEncoded;
  readonly recommendation?: ActivityContentDetailsRecommendationEncoded;
  readonly social?: ActivityContentDetailsSocialEncoded;
  readonly subscription?: ActivityContentDetailsSubscriptionEncoded;
  readonly upload?: ActivityContentDetailsUploadEncoded;
}
export const ActivityContentDetails: Schema.Schema<ActivityContentDetails, ActivityContentDetailsEncoded, never> = Schema.Struct({
  bulletin: Schema.optional(Schema.suspend(() => ActivityContentDetailsBulletin)),
  channelItem: Schema.optional(Schema.suspend(() => ActivityContentDetailsChannelItem)),
  comment: Schema.optional(Schema.suspend(() => ActivityContentDetailsComment)),
  favorite: Schema.optional(Schema.suspend(() => ActivityContentDetailsFavorite)),
  like: Schema.optional(Schema.suspend(() => ActivityContentDetailsLike)),
  playlistItem: Schema.optional(Schema.suspend(() => ActivityContentDetailsPlaylistItem)),
  promotedItem: Schema.optional(Schema.suspend(() => ActivityContentDetailsPromotedItem)),
  recommendation: Schema.optional(Schema.suspend(() => ActivityContentDetailsRecommendation)),
  social: Schema.optional(Schema.suspend(() => ActivityContentDetailsSocial)),
  subscription: Schema.optional(Schema.suspend(() => ActivityContentDetailsSubscription)),
  upload: Schema.optional(Schema.suspend(() => ActivityContentDetailsUpload)),
});

/** Details about a channel bulletin post. */
export interface ActivityContentDetailsBulletin {
  readonly resourceId?: ResourceId;
}
export interface ActivityContentDetailsBulletinEncoded {
  readonly resourceId?: ResourceIdEncoded;
}
export const ActivityContentDetailsBulletin: Schema.Schema<ActivityContentDetailsBulletin, ActivityContentDetailsBulletinEncoded, never> = Schema.Struct({
  resourceId: Schema.optional(Schema.suspend(() => ResourceId)),
});

/** Details about a resource which was added to a channel. */
export interface ActivityContentDetailsChannelItem {
  readonly resourceId?: ResourceId;
}
export interface ActivityContentDetailsChannelItemEncoded {
  readonly resourceId?: ResourceIdEncoded;
}
export const ActivityContentDetailsChannelItem: Schema.Schema<ActivityContentDetailsChannelItem, ActivityContentDetailsChannelItemEncoded, never> = Schema.Struct({
  resourceId: Schema.optional(Schema.suspend(() => ResourceId)),
});

/** Information about a resource that received a comment. */
export interface ActivityContentDetailsComment {
  readonly resourceId?: ResourceId;
}
export interface ActivityContentDetailsCommentEncoded {
  readonly resourceId?: ResourceIdEncoded;
}
export const ActivityContentDetailsComment: Schema.Schema<ActivityContentDetailsComment, ActivityContentDetailsCommentEncoded, never> = Schema.Struct({
  resourceId: Schema.optional(Schema.suspend(() => ResourceId)),
});

/** Information about a video that was marked as a favorite video. */
export interface ActivityContentDetailsFavorite {
  readonly resourceId?: ResourceId;
}
export interface ActivityContentDetailsFavoriteEncoded {
  readonly resourceId?: ResourceIdEncoded;
}
export const ActivityContentDetailsFavorite: Schema.Schema<ActivityContentDetailsFavorite, ActivityContentDetailsFavoriteEncoded, never> = Schema.Struct({
  resourceId: Schema.optional(Schema.suspend(() => ResourceId)),
});

/** Information about a resource that received a positive (like) rating. */
export interface ActivityContentDetailsLike {
  readonly resourceId?: ResourceId;
}
export interface ActivityContentDetailsLikeEncoded {
  readonly resourceId?: ResourceIdEncoded;
}
export const ActivityContentDetailsLike: Schema.Schema<ActivityContentDetailsLike, ActivityContentDetailsLikeEncoded, never> = Schema.Struct({
  resourceId: Schema.optional(Schema.suspend(() => ResourceId)),
});

/** Information about a new playlist item. */
export interface ActivityContentDetailsPlaylistItem {
  readonly playlistId?: string;
  readonly playlistItemId?: string;
  readonly resourceId?: ResourceId;
}
export interface ActivityContentDetailsPlaylistItemEncoded {
  readonly playlistId?: string;
  readonly playlistItemId?: string;
  readonly resourceId?: ResourceIdEncoded;
}
export const ActivityContentDetailsPlaylistItem: Schema.Schema<ActivityContentDetailsPlaylistItem, ActivityContentDetailsPlaylistItemEncoded, never> = Schema.Struct({
  playlistId: Schema.optional(Schema.String),
  playlistItemId: Schema.optional(Schema.String),
  resourceId: Schema.optional(Schema.suspend(() => ResourceId)),
});

/** Details about a resource which is being promoted. */
export interface ActivityContentDetailsPromotedItem {
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
}
export interface ActivityContentDetailsPromotedItemEncoded {
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
}
export const ActivityContentDetailsPromotedItem: Schema.Schema<ActivityContentDetailsPromotedItem, ActivityContentDetailsPromotedItemEncoded, never> = Schema.Struct({
  adTag: Schema.optional(Schema.String),
  clickTrackingUrl: Schema.optional(Schema.String),
  creativeViewUrl: Schema.optional(Schema.String),
  ctaType: Schema.optional(Schema.Union(Schema.Literal("ctaTypeUnspecified"), Schema.Literal("visitAdvertiserSite"))),
  customCtaButtonText: Schema.optional(Schema.String),
  descriptionText: Schema.optional(Schema.String),
  destinationUrl: Schema.optional(Schema.String),
  forecastingUrl: Schema.optional(Schema.Array(Schema.String)),
  impressionUrl: Schema.optional(Schema.Array(Schema.String)),
  videoId: Schema.optional(Schema.String),
});

/** Information that identifies the recommended resource. */
export interface ActivityContentDetailsRecommendation {
  readonly reason?: "reasonUnspecified" | "videoFavorited" | "videoLiked" | "videoWatched";
  readonly resourceId?: ResourceId;
  readonly seedResourceId?: ResourceId;
}
export interface ActivityContentDetailsRecommendationEncoded {
  readonly reason?: "reasonUnspecified" | "videoFavorited" | "videoLiked" | "videoWatched";
  readonly resourceId?: ResourceIdEncoded;
  readonly seedResourceId?: ResourceIdEncoded;
}
export const ActivityContentDetailsRecommendation: Schema.Schema<ActivityContentDetailsRecommendation, ActivityContentDetailsRecommendationEncoded, never> = Schema.Struct({
  reason: Schema.optional(Schema.Union(Schema.Literal("reasonUnspecified"), Schema.Literal("videoFavorited"), Schema.Literal("videoLiked"), Schema.Literal("videoWatched"))),
  resourceId: Schema.optional(Schema.suspend(() => ResourceId)),
  seedResourceId: Schema.optional(Schema.suspend(() => ResourceId)),
});

/** Details about a social network post. */
export interface ActivityContentDetailsSocial {
  readonly author?: string;
  readonly imageUrl?: string;
  readonly referenceUrl?: string;
  readonly resourceId?: ResourceId;
  readonly type?: "unspecified" | "googlePlus" | "facebook" | "twitter";
}
export interface ActivityContentDetailsSocialEncoded {
  readonly author?: string;
  readonly imageUrl?: string;
  readonly referenceUrl?: string;
  readonly resourceId?: ResourceIdEncoded;
  readonly type?: "unspecified" | "googlePlus" | "facebook" | "twitter";
}
export const ActivityContentDetailsSocial: Schema.Schema<ActivityContentDetailsSocial, ActivityContentDetailsSocialEncoded, never> = Schema.Struct({
  author: Schema.optional(Schema.String),
  imageUrl: Schema.optional(Schema.String),
  referenceUrl: Schema.optional(Schema.String),
  resourceId: Schema.optional(Schema.suspend(() => ResourceId)),
  type: Schema.optional(Schema.Union(Schema.Literal("unspecified"), Schema.Literal("googlePlus"), Schema.Literal("facebook"), Schema.Literal("twitter"))),
});

/** Information about a channel that a user subscribed to. */
export interface ActivityContentDetailsSubscription {
  readonly resourceId?: ResourceId;
}
export interface ActivityContentDetailsSubscriptionEncoded {
  readonly resourceId?: ResourceIdEncoded;
}
export const ActivityContentDetailsSubscription: Schema.Schema<ActivityContentDetailsSubscription, ActivityContentDetailsSubscriptionEncoded, never> = Schema.Struct({
  resourceId: Schema.optional(Schema.suspend(() => ResourceId)),
});

/** Information about the uploaded video. */
export interface ActivityContentDetailsUpload {
  readonly videoId?: string;
}
export interface ActivityContentDetailsUploadEncoded {
  readonly videoId?: string;
}
export const ActivityContentDetailsUpload: Schema.Schema<ActivityContentDetailsUpload, ActivityContentDetailsUploadEncoded, never> = Schema.Struct({
  videoId: Schema.optional(Schema.String),
});

export interface ActivityListResponse {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<Activity>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfo;
  readonly prevPageToken?: string;
  readonly tokenPagination?: TokenPagination;
  readonly visitorId?: string;
}
export interface ActivityListResponseEncoded {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<ActivityEncoded>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfoEncoded;
  readonly prevPageToken?: string;
  readonly tokenPagination?: TokenPaginationEncoded;
  readonly visitorId?: string;
}
export const ActivityListResponse: Schema.Schema<ActivityListResponse, ActivityListResponseEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  eventId: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Schema.suspend(() => Activity))),
  kind: Schema.optional(Schema.String),
  nextPageToken: Schema.optional(Schema.String),
  pageInfo: Schema.optional(Schema.suspend(() => PageInfo)),
  prevPageToken: Schema.optional(Schema.String),
  tokenPagination: Schema.optional(Schema.suspend(() => TokenPagination)),
  visitorId: Schema.optional(Schema.String),
});

/** Basic details about an activity, including title, description, thumbnails, activity type and group. Next ID: 12 */
export interface ActivitySnippet {
  readonly channelId?: string;
  readonly channelTitle?: string;
  readonly description?: string;
  readonly groupId?: string;
  readonly publishedAt?: Date;
  readonly thumbnails?: ThumbnailDetails;
  readonly title?: string;
  readonly type?: "typeUnspecified" | "upload" | "like" | "favorite" | "comment" | "subscription" | "playlistItem" | "recommendation" | "bulletin" | "social" | "channelItem" | "promotedItem";
}
export interface ActivitySnippetEncoded {
  readonly channelId?: string;
  readonly channelTitle?: string;
  readonly description?: string;
  readonly groupId?: string;
  readonly publishedAt?: string;
  readonly thumbnails?: ThumbnailDetailsEncoded;
  readonly title?: string;
  readonly type?: "typeUnspecified" | "upload" | "like" | "favorite" | "comment" | "subscription" | "playlistItem" | "recommendation" | "bulletin" | "social" | "channelItem" | "promotedItem";
}
export const ActivitySnippet: Schema.Schema<ActivitySnippet, ActivitySnippetEncoded, never> = Schema.Struct({
  channelId: Schema.optional(Schema.String),
  channelTitle: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  groupId: Schema.optional(Schema.String),
  publishedAt: Schema.optional(Schema.DateFromString),
  thumbnails: Schema.optional(Schema.suspend(() => ThumbnailDetails)),
  title: Schema.optional(Schema.String),
  type: Schema.optional(Schema.Union(Schema.Literal("typeUnspecified"), Schema.Literal("upload"), Schema.Literal("like"), Schema.Literal("favorite"), Schema.Literal("comment"), Schema.Literal("subscription"), Schema.Literal("playlistItem"), Schema.Literal("recommendation"), Schema.Literal("bulletin"), Schema.Literal("social"), Schema.Literal("channelItem"), Schema.Literal("promotedItem"))),
});

/** Empty response. */
export interface AnalyticsEmptyResponse {
  readonly errors?: AnalyticsErrors;
}
export interface AnalyticsEmptyResponseEncoded {
  readonly errors?: AnalyticsErrorsEncoded;
}
export const AnalyticsEmptyResponse: Schema.Schema<AnalyticsEmptyResponse, AnalyticsEmptyResponseEncoded, never> = Schema.Struct({
  errors: Schema.optional(Schema.suspend(() => AnalyticsErrors)),
});

/** Describes one specific error. */
export interface AnalyticsErrorProto {
  readonly argument?: ReadonlyArray<string>;
  readonly code?: string;
  readonly debugInfo?: string;
  readonly domain?: string;
  readonly externalErrorMessage?: string;
  readonly location?: string;
  readonly locationType?: "PATH" | "OTHER" | "PARAMETER";
}
export interface AnalyticsErrorProtoEncoded {
  readonly argument?: ReadonlyArray<string>;
  readonly code?: string;
  readonly debugInfo?: string;
  readonly domain?: string;
  readonly externalErrorMessage?: string;
  readonly location?: string;
  readonly locationType?: "PATH" | "OTHER" | "PARAMETER";
}
export const AnalyticsErrorProto: Schema.Schema<AnalyticsErrorProto, AnalyticsErrorProtoEncoded, never> = Schema.Struct({
  argument: Schema.optional(Schema.Array(Schema.String)),
  code: Schema.optional(Schema.String),
  debugInfo: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  externalErrorMessage: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  locationType: Schema.optional(Schema.Union(Schema.Literal("PATH"), Schema.Literal("OTHER"), Schema.Literal("PARAMETER"))),
});

/** Request Error information. The presence of an error field signals that the operation has failed. */
export interface AnalyticsErrors {
  readonly code?: "BAD_REQUEST" | "FORBIDDEN" | "NOT_FOUND" | "CONFLICT" | "GONE" | "PRECONDITION_FAILED" | "INTERNAL_ERROR" | "SERVICE_UNAVAILABLE";
  readonly error?: ReadonlyArray<AnalyticsErrorProto>;
  readonly requestId?: string;
}
export interface AnalyticsErrorsEncoded {
  readonly code?: "BAD_REQUEST" | "FORBIDDEN" | "NOT_FOUND" | "CONFLICT" | "GONE" | "PRECONDITION_FAILED" | "INTERNAL_ERROR" | "SERVICE_UNAVAILABLE";
  readonly error?: ReadonlyArray<AnalyticsErrorProtoEncoded>;
  readonly requestId?: string;
}
export const AnalyticsErrors: Schema.Schema<AnalyticsErrors, AnalyticsErrorsEncoded, never> = Schema.Struct({
  code: Schema.optional(Schema.Union(Schema.Literal("BAD_REQUEST"), Schema.Literal("FORBIDDEN"), Schema.Literal("NOT_FOUND"), Schema.Literal("CONFLICT"), Schema.Literal("GONE"), Schema.Literal("PRECONDITION_FAILED"), Schema.Literal("INTERNAL_ERROR"), Schema.Literal("SERVICE_UNAVAILABLE"))),
  error: Schema.optional(Schema.Array(Schema.suspend(() => AnalyticsErrorProto))),
  requestId: Schema.optional(Schema.String),
});

/** A group. */
export interface AnalyticsGroup {
  readonly contentDetails?: AnalyticsGroupContentDetails;
  readonly errors?: AnalyticsErrors;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: AnalyticsGroupSnippet;
}
export interface AnalyticsGroupEncoded {
  readonly contentDetails?: AnalyticsGroupContentDetailsEncoded;
  readonly errors?: AnalyticsErrorsEncoded;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: AnalyticsGroupSnippetEncoded;
}
export const AnalyticsGroup: Schema.Schema<AnalyticsGroup, AnalyticsGroupEncoded, never> = Schema.Struct({
  contentDetails: Schema.optional(Schema.suspend(() => AnalyticsGroupContentDetails)),
  errors: Schema.optional(Schema.suspend(() => AnalyticsErrors)),
  etag: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  snippet: Schema.optional(Schema.suspend(() => AnalyticsGroupSnippet)),
});

/** A group's content details. */
export interface AnalyticsGroupContentDetails {
  readonly itemCount?: string;
  readonly itemType?: string;
}
export interface AnalyticsGroupContentDetailsEncoded {
  readonly itemCount?: string;
  readonly itemType?: string;
}
export const AnalyticsGroupContentDetails: Schema.Schema<AnalyticsGroupContentDetails, AnalyticsGroupContentDetailsEncoded, never> = Schema.Struct({
  itemCount: Schema.optional(Schema.String),
  itemType: Schema.optional(Schema.String),
});

/** A group item. */
export interface AnalyticsGroupItem {
  readonly errors?: AnalyticsErrors;
  readonly etag?: string;
  readonly groupId?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly resource?: AnalyticsGroupItemResource;
}
export interface AnalyticsGroupItemEncoded {
  readonly errors?: AnalyticsErrorsEncoded;
  readonly etag?: string;
  readonly groupId?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly resource?: AnalyticsGroupItemResourceEncoded;
}
export const AnalyticsGroupItem: Schema.Schema<AnalyticsGroupItem, AnalyticsGroupItemEncoded, never> = Schema.Struct({
  errors: Schema.optional(Schema.suspend(() => AnalyticsErrors)),
  etag: Schema.optional(Schema.String),
  groupId: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  resource: Schema.optional(Schema.suspend(() => AnalyticsGroupItemResource)),
});

export interface AnalyticsGroupItemResource {
  readonly id?: string;
  readonly kind?: string;
}
export interface AnalyticsGroupItemResourceEncoded {
  readonly id?: string;
  readonly kind?: string;
}
export const AnalyticsGroupItemResource: Schema.Schema<AnalyticsGroupItemResource, AnalyticsGroupItemResourceEncoded, never> = Schema.Struct({
  id: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
});

/** A group snippet. */
export interface AnalyticsGroupSnippet {
  readonly publishedAt?: string;
  readonly title?: string;
}
export interface AnalyticsGroupSnippetEncoded {
  readonly publishedAt?: string;
  readonly title?: string;
}
export const AnalyticsGroupSnippet: Schema.Schema<AnalyticsGroupSnippet, AnalyticsGroupSnippetEncoded, never> = Schema.Struct({
  publishedAt: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
});

/** Response message for GroupsService.ListGroupItems. */
export interface AnalyticsListGroupItemsResponse {
  readonly errors?: AnalyticsErrors;
  readonly etag?: string;
  readonly items?: ReadonlyArray<AnalyticsGroupItem>;
  readonly kind?: string;
}
export interface AnalyticsListGroupItemsResponseEncoded {
  readonly errors?: AnalyticsErrorsEncoded;
  readonly etag?: string;
  readonly items?: ReadonlyArray<AnalyticsGroupItemEncoded>;
  readonly kind?: string;
}
export const AnalyticsListGroupItemsResponse: Schema.Schema<AnalyticsListGroupItemsResponse, AnalyticsListGroupItemsResponseEncoded, never> = Schema.Struct({
  errors: Schema.optional(Schema.suspend(() => AnalyticsErrors)),
  etag: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Schema.suspend(() => AnalyticsGroupItem))),
  kind: Schema.optional(Schema.String),
});

/** Response message for GroupsService.ListGroups. */
export interface AnalyticsListGroupsResponse {
  readonly errors?: AnalyticsErrors;
  readonly etag?: string;
  readonly items?: ReadonlyArray<AnalyticsGroup>;
  readonly kind?: string;
  readonly nextPageToken?: string;
}
export interface AnalyticsListGroupsResponseEncoded {
  readonly errors?: AnalyticsErrorsEncoded;
  readonly etag?: string;
  readonly items?: ReadonlyArray<AnalyticsGroupEncoded>;
  readonly kind?: string;
  readonly nextPageToken?: string;
}
export const AnalyticsListGroupsResponse: Schema.Schema<AnalyticsListGroupsResponse, AnalyticsListGroupsResponseEncoded, never> = Schema.Struct({
  errors: Schema.optional(Schema.suspend(() => AnalyticsErrors)),
  etag: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Schema.suspend(() => AnalyticsGroup))),
  kind: Schema.optional(Schema.String),
  nextPageToken: Schema.optional(Schema.String),
});

/** Response message for TargetedQueriesService.Query. */
export interface AnalyticsQueryResponse {
  readonly columnHeaders?: ReadonlyArray<AnalyticsResultTableColumnHeader>;
  readonly errors?: AnalyticsErrors;
  readonly kind?: string;
  readonly rows?: ReadonlyArray<ReadonlyArray<unknown>>;
}
export interface AnalyticsQueryResponseEncoded {
  readonly columnHeaders?: ReadonlyArray<AnalyticsResultTableColumnHeaderEncoded>;
  readonly errors?: AnalyticsErrorsEncoded;
  readonly kind?: string;
  readonly rows?: ReadonlyArray<ReadonlyArray<unknown>>;
}
export const AnalyticsQueryResponse: Schema.Schema<AnalyticsQueryResponse, AnalyticsQueryResponseEncoded, never> = Schema.Struct({
  columnHeaders: Schema.optional(Schema.Array(Schema.suspend(() => AnalyticsResultTableColumnHeader))),
  errors: Schema.optional(Schema.suspend(() => AnalyticsErrors)),
  kind: Schema.optional(Schema.String),
  rows: Schema.optional(Schema.Array(Schema.Array(Schema.Unknown))),
});

/** The description of a column of the result table. */
export interface AnalyticsResultTableColumnHeader {
  readonly columnType?: string;
  readonly dataType?: string;
  readonly name?: string;
}
export interface AnalyticsResultTableColumnHeaderEncoded {
  readonly columnType?: string;
  readonly dataType?: string;
  readonly name?: string;
}
export const AnalyticsResultTableColumnHeader: Schema.Schema<AnalyticsResultTableColumnHeader, AnalyticsResultTableColumnHeaderEncoded, never> = Schema.Struct({
  columnType: Schema.optional(Schema.String),
  dataType: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
});

/** Response for the Videos.stats API. Returns VideoStat information about a batch of videos. VideoStat contains a subset of the information in Video that is relevant to statistics and content details. BatchGetStats is intentionally not atomic to provide a better user experience. BatchGetStatsResponse returns a summary to help users understand the outcome of the operation. */
export interface BatchGetStatsResponse {
  readonly etag?: string;
  readonly items?: ReadonlyArray<VideoStat>;
  readonly kind?: string;
  readonly summary?: BatchGetStatsSummary;
}
export interface BatchGetStatsResponseEncoded {
  readonly etag?: string;
  readonly items?: ReadonlyArray<VideoStatEncoded>;
  readonly kind?: string;
  readonly summary?: BatchGetStatsSummaryEncoded;
}
export const BatchGetStatsResponse: Schema.Schema<BatchGetStatsResponse, BatchGetStatsResponseEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Schema.suspend(() => VideoStat))),
  kind: Schema.optional(Schema.String),
  summary: Schema.optional(Schema.suspend(() => BatchGetStatsSummary)),
});

export interface BatchGetStatsSummary {
  readonly failedVideoCount?: string;
  readonly failedVideoIds?: ReadonlyArray<string>;
  readonly requestedVideoCount?: string;
  readonly succeededVideoCount?: string;
}
export interface BatchGetStatsSummaryEncoded {
  readonly failedVideoCount?: string;
  readonly failedVideoIds?: ReadonlyArray<string>;
  readonly requestedVideoCount?: string;
  readonly succeededVideoCount?: string;
}
export const BatchGetStatsSummary: Schema.Schema<BatchGetStatsSummary, BatchGetStatsSummaryEncoded, never> = Schema.Struct({
  failedVideoCount: Schema.optional(Schema.String),
  failedVideoIds: Schema.optional(Schema.Array(Schema.String)),
  requestedVideoCount: Schema.optional(Schema.String),
  succeededVideoCount: Schema.optional(Schema.String),
});

/** Details about the brand partner linked to the video for Creator Initiated Linking (CIL). Next ID: 6 */
export interface BrandPartner {
  readonly channelHandle?: string;
  readonly channelId?: string;
}
export interface BrandPartnerEncoded {
  readonly channelHandle?: string;
  readonly channelId?: string;
}
export const BrandPartner: Schema.Schema<BrandPartner, BrandPartnerEncoded, never> = Schema.Struct({
  channelHandle: Schema.optional(Schema.String),
  channelId: Schema.optional(Schema.String),
});

/** A *caption* resource represents a YouTube caption track. A caption track is associated with exactly one YouTube video. */
export interface Caption {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: CaptionSnippet;
}
export interface CaptionEncoded {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: CaptionSnippetEncoded;
}
export const Caption: Schema.Schema<Caption, CaptionEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  snippet: Schema.optional(Schema.suspend(() => CaptionSnippet)),
});

export interface CaptionListResponse {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<Caption>;
  readonly kind?: string;
  readonly visitorId?: string;
}
export interface CaptionListResponseEncoded {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<CaptionEncoded>;
  readonly kind?: string;
  readonly visitorId?: string;
}
export const CaptionListResponse: Schema.Schema<CaptionListResponse, CaptionListResponseEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  eventId: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Schema.suspend(() => Caption))),
  kind: Schema.optional(Schema.String),
  visitorId: Schema.optional(Schema.String),
});

/** Basic details about a caption track, such as its language and name. */
export interface CaptionSnippet {
  readonly audioTrackType?: "unknown" | "primary" | "commentary" | "descriptive";
  readonly failureReason?: "unknownFormat" | "unsupportedFormat" | "processingFailed";
  readonly isAutoSynced?: boolean;
  readonly isCC?: boolean;
  readonly isDraft?: boolean;
  readonly isEasyReader?: boolean;
  readonly isLarge?: boolean;
  readonly language?: string;
  readonly lastUpdated?: Date;
  readonly name?: string;
  readonly status?: "serving" | "syncing" | "failed";
  readonly trackKind?: "standard" | "ASR" | "forced";
  readonly videoId?: string;
}
export interface CaptionSnippetEncoded {
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
}
export const CaptionSnippet: Schema.Schema<CaptionSnippet, CaptionSnippetEncoded, never> = Schema.Struct({
  audioTrackType: Schema.optional(Schema.Union(Schema.Literal("unknown"), Schema.Literal("primary"), Schema.Literal("commentary"), Schema.Literal("descriptive"))),
  failureReason: Schema.optional(Schema.Union(Schema.Literal("unknownFormat"), Schema.Literal("unsupportedFormat"), Schema.Literal("processingFailed"))),
  isAutoSynced: Schema.optional(Schema.Boolean),
  isCC: Schema.optional(Schema.Boolean),
  isDraft: Schema.optional(Schema.Boolean),
  isEasyReader: Schema.optional(Schema.Boolean),
  isLarge: Schema.optional(Schema.Boolean),
  language: Schema.optional(Schema.String),
  lastUpdated: Schema.optional(Schema.DateFromString),
  name: Schema.optional(Schema.String),
  status: Schema.optional(Schema.Union(Schema.Literal("serving"), Schema.Literal("syncing"), Schema.Literal("failed"))),
  trackKind: Schema.optional(Schema.Union(Schema.Literal("standard"), Schema.Literal("ASR"), Schema.Literal("forced"))),
  videoId: Schema.optional(Schema.String),
});

/** Brief description of the live stream cdn settings. */
export interface CdnSettings {
  readonly format?: string;
  readonly frameRate?: "30fps" | "60fps" | "variable";
  readonly ingestionInfo?: IngestionInfo;
  readonly ingestionType?: "rtmp" | "dash" | "webrtc" | "hls";
  readonly resolution?: "240p" | "360p" | "480p" | "720p" | "1080p" | "1440p" | "2160p" | "variable";
}
export interface CdnSettingsEncoded {
  readonly format?: string;
  readonly frameRate?: "30fps" | "60fps" | "variable";
  readonly ingestionInfo?: IngestionInfoEncoded;
  readonly ingestionType?: "rtmp" | "dash" | "webrtc" | "hls";
  readonly resolution?: "240p" | "360p" | "480p" | "720p" | "1080p" | "1440p" | "2160p" | "variable";
}
export const CdnSettings: Schema.Schema<CdnSettings, CdnSettingsEncoded, never> = Schema.Struct({
  format: Schema.optional(Schema.String),
  frameRate: Schema.optional(Schema.Union(Schema.Literal("30fps"), Schema.Literal("60fps"), Schema.Literal("variable"))),
  ingestionInfo: Schema.optional(Schema.suspend(() => IngestionInfo)),
  ingestionType: Schema.optional(Schema.Union(Schema.Literal("rtmp"), Schema.Literal("dash"), Schema.Literal("webrtc"), Schema.Literal("hls"))),
  resolution: Schema.optional(Schema.Union(Schema.Literal("240p"), Schema.Literal("360p"), Schema.Literal("480p"), Schema.Literal("720p"), Schema.Literal("1080p"), Schema.Literal("1440p"), Schema.Literal("2160p"), Schema.Literal("variable"))),
});

/** A *channel* resource contains information about a YouTube channel. */
export interface Channel {
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
}
export interface ChannelEncoded {
  readonly auditDetails?: ChannelAuditDetailsEncoded;
  readonly brandingSettings?: ChannelBrandingSettingsEncoded;
  readonly contentDetails?: ChannelContentDetailsEncoded;
  readonly contentOwnerDetails?: ChannelContentOwnerDetailsEncoded;
  readonly conversionPings?: ChannelConversionPingsEncoded;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly localizations?: Readonly<Record<string, ChannelLocalizationEncoded>>;
  readonly snippet?: ChannelSnippetEncoded;
  readonly statistics?: ChannelStatisticsEncoded;
  readonly status?: ChannelStatusEncoded;
  readonly topicDetails?: ChannelTopicDetailsEncoded;
}
export const Channel: Schema.Schema<Channel, ChannelEncoded, never> = Schema.Struct({
  auditDetails: Schema.optional(Schema.suspend(() => ChannelAuditDetails)),
  brandingSettings: Schema.optional(Schema.suspend(() => ChannelBrandingSettings)),
  contentDetails: Schema.optional(Schema.suspend(() => ChannelContentDetails)),
  contentOwnerDetails: Schema.optional(Schema.suspend(() => ChannelContentOwnerDetails)),
  conversionPings: Schema.optional(Schema.suspend(() => ChannelConversionPings)),
  etag: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  localizations: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.suspend(() => ChannelLocalization) })),
  snippet: Schema.optional(Schema.suspend(() => ChannelSnippet)),
  statistics: Schema.optional(Schema.suspend(() => ChannelStatistics)),
  status: Schema.optional(Schema.suspend(() => ChannelStatus)),
  topicDetails: Schema.optional(Schema.suspend(() => ChannelTopicDetails)),
});

/** The auditDetails object encapsulates channel data that is relevant for YouTube Partners during the audit process. */
export interface ChannelAuditDetails {
  readonly communityGuidelinesGoodStanding?: boolean;
  readonly contentIdClaimsGoodStanding?: boolean;
  readonly copyrightStrikesGoodStanding?: boolean;
}
export interface ChannelAuditDetailsEncoded {
  readonly communityGuidelinesGoodStanding?: boolean;
  readonly contentIdClaimsGoodStanding?: boolean;
  readonly copyrightStrikesGoodStanding?: boolean;
}
export const ChannelAuditDetails: Schema.Schema<ChannelAuditDetails, ChannelAuditDetailsEncoded, never> = Schema.Struct({
  communityGuidelinesGoodStanding: Schema.optional(Schema.Boolean),
  contentIdClaimsGoodStanding: Schema.optional(Schema.Boolean),
  copyrightStrikesGoodStanding: Schema.optional(Schema.Boolean),
});

/** A channel banner returned as the response to a channel_banner.insert call. */
export interface ChannelBannerResource {
  readonly etag?: string;
  readonly kind?: string;
  readonly url?: string;
}
export interface ChannelBannerResourceEncoded {
  readonly etag?: string;
  readonly kind?: string;
  readonly url?: string;
}
export const ChannelBannerResource: Schema.Schema<ChannelBannerResource, ChannelBannerResourceEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

/** Branding properties of a YouTube channel. */
export interface ChannelBrandingSettings {
  readonly channel?: ChannelSettings;
  readonly hints?: ReadonlyArray<PropertyValue>;
  readonly image?: ImageSettings;
  readonly watch?: WatchSettings;
}
export interface ChannelBrandingSettingsEncoded {
  readonly channel?: ChannelSettingsEncoded;
  readonly hints?: ReadonlyArray<PropertyValueEncoded>;
  readonly image?: ImageSettingsEncoded;
  readonly watch?: WatchSettingsEncoded;
}
export const ChannelBrandingSettings: Schema.Schema<ChannelBrandingSettings, ChannelBrandingSettingsEncoded, never> = Schema.Struct({
  channel: Schema.optional(Schema.suspend(() => ChannelSettings)),
  hints: Schema.optional(Schema.Array(Schema.suspend(() => PropertyValue))),
  image: Schema.optional(Schema.suspend(() => ImageSettings)),
  watch: Schema.optional(Schema.suspend(() => WatchSettings)),
});

/** Details about the content of a channel. */
export interface ChannelContentDetails {
  readonly relatedPlaylists?: unknown;
}
export interface ChannelContentDetailsEncoded {
  readonly relatedPlaylists?: unknown;
}
export const ChannelContentDetails: Schema.Schema<ChannelContentDetails, ChannelContentDetailsEncoded, never> = Schema.Struct({
  relatedPlaylists: Schema.optional(Schema.Unknown),
});

/** The contentOwnerDetails object encapsulates channel data that is relevant for YouTube Partners linked with the channel. */
export interface ChannelContentOwnerDetails {
  readonly contentOwner?: string;
  readonly timeLinked?: Date;
}
export interface ChannelContentOwnerDetailsEncoded {
  readonly contentOwner?: string;
  readonly timeLinked?: string;
}
export const ChannelContentOwnerDetails: Schema.Schema<ChannelContentOwnerDetails, ChannelContentOwnerDetailsEncoded, never> = Schema.Struct({
  contentOwner: Schema.optional(Schema.String),
  timeLinked: Schema.optional(Schema.DateFromString),
});

/** Pings that the app shall fire (authenticated by biscotti cookie). Each ping has a context, in which the app must fire the ping, and a url identifying the ping. */
export interface ChannelConversionPing {
  readonly context?: "subscribe" | "unsubscribe" | "cview";
  readonly conversionUrl?: string;
}
export interface ChannelConversionPingEncoded {
  readonly context?: "subscribe" | "unsubscribe" | "cview";
  readonly conversionUrl?: string;
}
export const ChannelConversionPing: Schema.Schema<ChannelConversionPing, ChannelConversionPingEncoded, never> = Schema.Struct({
  context: Schema.optional(Schema.Union(Schema.Literal("subscribe"), Schema.Literal("unsubscribe"), Schema.Literal("cview"))),
  conversionUrl: Schema.optional(Schema.String),
});

/** The conversionPings object encapsulates information about conversion pings that need to be respected by the channel. */
export interface ChannelConversionPings {
  readonly pings?: ReadonlyArray<ChannelConversionPing>;
}
export interface ChannelConversionPingsEncoded {
  readonly pings?: ReadonlyArray<ChannelConversionPingEncoded>;
}
export const ChannelConversionPings: Schema.Schema<ChannelConversionPings, ChannelConversionPingsEncoded, never> = Schema.Struct({
  pings: Schema.optional(Schema.Array(Schema.suspend(() => ChannelConversionPing))),
});

export interface ChannelListResponse {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<Channel>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfo;
  readonly prevPageToken?: string;
  readonly tokenPagination?: TokenPagination;
  readonly visitorId?: string;
}
export interface ChannelListResponseEncoded {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<ChannelEncoded>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfoEncoded;
  readonly prevPageToken?: string;
  readonly tokenPagination?: TokenPaginationEncoded;
  readonly visitorId?: string;
}
export const ChannelListResponse: Schema.Schema<ChannelListResponse, ChannelListResponseEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  eventId: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Schema.suspend(() => Channel))),
  kind: Schema.optional(Schema.String),
  nextPageToken: Schema.optional(Schema.String),
  pageInfo: Schema.optional(Schema.suspend(() => PageInfo)),
  prevPageToken: Schema.optional(Schema.String),
  tokenPagination: Schema.optional(Schema.suspend(() => TokenPagination)),
  visitorId: Schema.optional(Schema.String),
});

/** Channel localization setting */
export interface ChannelLocalization {
  readonly description?: string;
  readonly title?: string;
}
export interface ChannelLocalizationEncoded {
  readonly description?: string;
  readonly title?: string;
}
export const ChannelLocalization: Schema.Schema<ChannelLocalization, ChannelLocalizationEncoded, never> = Schema.Struct({
  description: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
});

export interface ChannelProfileDetails {
  readonly channelId?: string;
  readonly channelUrl?: string;
  readonly displayName?: string;
  readonly profileImageUrl?: string;
}
export interface ChannelProfileDetailsEncoded {
  readonly channelId?: string;
  readonly channelUrl?: string;
  readonly displayName?: string;
  readonly profileImageUrl?: string;
}
export const ChannelProfileDetails: Schema.Schema<ChannelProfileDetails, ChannelProfileDetailsEncoded, never> = Schema.Struct({
  channelId: Schema.optional(Schema.String),
  channelUrl: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  profileImageUrl: Schema.optional(Schema.String),
});

export interface ChannelSection {
  readonly contentDetails?: ChannelSectionContentDetails;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly localizations?: Readonly<Record<string, ChannelSectionLocalization>>;
  readonly snippet?: ChannelSectionSnippet;
  readonly targeting?: ChannelSectionTargeting;
}
export interface ChannelSectionEncoded {
  readonly contentDetails?: ChannelSectionContentDetailsEncoded;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly localizations?: Readonly<Record<string, ChannelSectionLocalizationEncoded>>;
  readonly snippet?: ChannelSectionSnippetEncoded;
  readonly targeting?: ChannelSectionTargetingEncoded;
}
export const ChannelSection: Schema.Schema<ChannelSection, ChannelSectionEncoded, never> = Schema.Struct({
  contentDetails: Schema.optional(Schema.suspend(() => ChannelSectionContentDetails)),
  etag: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  localizations: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.suspend(() => ChannelSectionLocalization) })),
  snippet: Schema.optional(Schema.suspend(() => ChannelSectionSnippet)),
  targeting: Schema.optional(Schema.suspend(() => ChannelSectionTargeting)),
});

/** Details about a channelsection, including playlists and channels. */
export interface ChannelSectionContentDetails {
  readonly channels?: ReadonlyArray<string>;
  readonly playlists?: ReadonlyArray<string>;
}
export interface ChannelSectionContentDetailsEncoded {
  readonly channels?: ReadonlyArray<string>;
  readonly playlists?: ReadonlyArray<string>;
}
export const ChannelSectionContentDetails: Schema.Schema<ChannelSectionContentDetails, ChannelSectionContentDetailsEncoded, never> = Schema.Struct({
  channels: Schema.optional(Schema.Array(Schema.String)),
  playlists: Schema.optional(Schema.Array(Schema.String)),
});

export interface ChannelSectionListResponse {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<ChannelSection>;
  readonly kind?: string;
  readonly visitorId?: string;
}
export interface ChannelSectionListResponseEncoded {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<ChannelSectionEncoded>;
  readonly kind?: string;
  readonly visitorId?: string;
}
export const ChannelSectionListResponse: Schema.Schema<ChannelSectionListResponse, ChannelSectionListResponseEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  eventId: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Schema.suspend(() => ChannelSection))),
  kind: Schema.optional(Schema.String),
  visitorId: Schema.optional(Schema.String),
});

/** ChannelSection localization setting */
export interface ChannelSectionLocalization {
  readonly title?: string;
}
export interface ChannelSectionLocalizationEncoded {
  readonly title?: string;
}
export const ChannelSectionLocalization: Schema.Schema<ChannelSectionLocalization, ChannelSectionLocalizationEncoded, never> = Schema.Struct({
  title: Schema.optional(Schema.String),
});

/** Basic details about a channel section, including title, style and position. */
export interface ChannelSectionSnippet {
  readonly channelId?: string;
  readonly defaultLanguage?: string;
  readonly localized?: ChannelSectionLocalization;
  readonly position?: number;
  readonly style?: "channelsectionStyleUnspecified" | "horizontalRow" | "verticalList";
  readonly title?: string;
  readonly type?: "channelsectionTypeUndefined" | "singlePlaylist" | "multiplePlaylists" | "popularUploads" | "recentUploads" | "likes" | "allPlaylists" | "likedPlaylists" | "recentPosts" | "recentActivity" | "liveEvents" | "upcomingEvents" | "completedEvents" | "multipleChannels" | "postedVideos" | "postedPlaylists" | "subscriptions";
}
export interface ChannelSectionSnippetEncoded {
  readonly channelId?: string;
  readonly defaultLanguage?: string;
  readonly localized?: ChannelSectionLocalizationEncoded;
  readonly position?: number;
  readonly style?: "channelsectionStyleUnspecified" | "horizontalRow" | "verticalList";
  readonly title?: string;
  readonly type?: "channelsectionTypeUndefined" | "singlePlaylist" | "multiplePlaylists" | "popularUploads" | "recentUploads" | "likes" | "allPlaylists" | "likedPlaylists" | "recentPosts" | "recentActivity" | "liveEvents" | "upcomingEvents" | "completedEvents" | "multipleChannels" | "postedVideos" | "postedPlaylists" | "subscriptions";
}
export const ChannelSectionSnippet: Schema.Schema<ChannelSectionSnippet, ChannelSectionSnippetEncoded, never> = Schema.Struct({
  channelId: Schema.optional(Schema.String),
  defaultLanguage: Schema.optional(Schema.String),
  localized: Schema.optional(Schema.suspend(() => ChannelSectionLocalization)),
  position: Schema.optional(Schema.Int),
  style: Schema.optional(Schema.Union(Schema.Literal("channelsectionStyleUnspecified"), Schema.Literal("horizontalRow"), Schema.Literal("verticalList"))),
  title: Schema.optional(Schema.String),
  type: Schema.optional(Schema.Union(Schema.Literal("channelsectionTypeUndefined"), Schema.Literal("singlePlaylist"), Schema.Literal("multiplePlaylists"), Schema.Literal("popularUploads"), Schema.Literal("recentUploads"), Schema.Literal("likes"), Schema.Literal("allPlaylists"), Schema.Literal("likedPlaylists"), Schema.Literal("recentPosts"), Schema.Literal("recentActivity"), Schema.Literal("liveEvents"), Schema.Literal("upcomingEvents"), Schema.Literal("completedEvents"), Schema.Literal("multipleChannels"), Schema.Literal("postedVideos"), Schema.Literal("postedPlaylists"), Schema.Literal("subscriptions"))),
});

/** ChannelSection targeting setting. */
export interface ChannelSectionTargeting {
  readonly countries?: ReadonlyArray<string>;
  readonly languages?: ReadonlyArray<string>;
  readonly regions?: ReadonlyArray<string>;
}
export interface ChannelSectionTargetingEncoded {
  readonly countries?: ReadonlyArray<string>;
  readonly languages?: ReadonlyArray<string>;
  readonly regions?: ReadonlyArray<string>;
}
export const ChannelSectionTargeting: Schema.Schema<ChannelSectionTargeting, ChannelSectionTargetingEncoded, never> = Schema.Struct({
  countries: Schema.optional(Schema.Array(Schema.String)),
  languages: Schema.optional(Schema.Array(Schema.String)),
  regions: Schema.optional(Schema.Array(Schema.String)),
});

/** Branding properties for the channel view. */
export interface ChannelSettings {
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
}
export interface ChannelSettingsEncoded {
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
}
export const ChannelSettings: Schema.Schema<ChannelSettings, ChannelSettingsEncoded, never> = Schema.Struct({
  country: Schema.optional(Schema.String),
  defaultLanguage: Schema.optional(Schema.String),
  defaultTab: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  featuredChannelsTitle: Schema.optional(Schema.String),
  featuredChannelsUrls: Schema.optional(Schema.Array(Schema.String)),
  keywords: Schema.optional(Schema.String),
  moderateComments: Schema.optional(Schema.Boolean),
  profileColor: Schema.optional(Schema.String),
  showBrowseView: Schema.optional(Schema.Boolean),
  showRelatedChannels: Schema.optional(Schema.Boolean),
  title: Schema.optional(Schema.String),
  trackingAnalyticsAccountId: Schema.optional(Schema.String),
  unsubscribedTrailer: Schema.optional(Schema.String),
});

/** Basic details about a channel, including title, description and thumbnails. */
export interface ChannelSnippet {
  readonly country?: string;
  readonly customUrl?: string;
  readonly defaultLanguage?: string;
  readonly description?: string;
  readonly localized?: ChannelLocalization;
  readonly publishedAt?: Date;
  readonly thumbnails?: ThumbnailDetails;
  readonly title?: string;
}
export interface ChannelSnippetEncoded {
  readonly country?: string;
  readonly customUrl?: string;
  readonly defaultLanguage?: string;
  readonly description?: string;
  readonly localized?: ChannelLocalizationEncoded;
  readonly publishedAt?: string;
  readonly thumbnails?: ThumbnailDetailsEncoded;
  readonly title?: string;
}
export const ChannelSnippet: Schema.Schema<ChannelSnippet, ChannelSnippetEncoded, never> = Schema.Struct({
  country: Schema.optional(Schema.String),
  customUrl: Schema.optional(Schema.String),
  defaultLanguage: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  localized: Schema.optional(Schema.suspend(() => ChannelLocalization)),
  publishedAt: Schema.optional(Schema.DateFromString),
  thumbnails: Schema.optional(Schema.suspend(() => ThumbnailDetails)),
  title: Schema.optional(Schema.String),
});

/** Statistics about a channel: number of subscribers, number of videos in the channel, etc. */
export interface ChannelStatistics {
  readonly commentCount?: string;
  readonly hiddenSubscriberCount?: boolean;
  readonly subscriberCount?: string;
  readonly videoCount?: string;
  readonly viewCount?: string;
}
export interface ChannelStatisticsEncoded {
  readonly commentCount?: string;
  readonly hiddenSubscriberCount?: boolean;
  readonly subscriberCount?: string;
  readonly videoCount?: string;
  readonly viewCount?: string;
}
export const ChannelStatistics: Schema.Schema<ChannelStatistics, ChannelStatisticsEncoded, never> = Schema.Struct({
  commentCount: Schema.optional(Schema.String),
  hiddenSubscriberCount: Schema.optional(Schema.Boolean),
  subscriberCount: Schema.optional(Schema.String),
  videoCount: Schema.optional(Schema.String),
  viewCount: Schema.optional(Schema.String),
});

/** JSON template for the status part of a channel. */
export interface ChannelStatus {
  readonly isChannelMonetizationEnabled?: boolean;
  readonly isLinked?: boolean;
  readonly longUploadsStatus?: "longUploadsUnspecified" | "allowed" | "eligible" | "disallowed";
  readonly madeForKids?: boolean;
  readonly privacyStatus?: "public" | "unlisted" | "private";
  readonly selfDeclaredMadeForKids?: boolean;
}
export interface ChannelStatusEncoded {
  readonly isChannelMonetizationEnabled?: boolean;
  readonly isLinked?: boolean;
  readonly longUploadsStatus?: "longUploadsUnspecified" | "allowed" | "eligible" | "disallowed";
  readonly madeForKids?: boolean;
  readonly privacyStatus?: "public" | "unlisted" | "private";
  readonly selfDeclaredMadeForKids?: boolean;
}
export const ChannelStatus: Schema.Schema<ChannelStatus, ChannelStatusEncoded, never> = Schema.Struct({
  isChannelMonetizationEnabled: Schema.optional(Schema.Boolean),
  isLinked: Schema.optional(Schema.Boolean),
  longUploadsStatus: Schema.optional(Schema.Union(Schema.Literal("longUploadsUnspecified"), Schema.Literal("allowed"), Schema.Literal("eligible"), Schema.Literal("disallowed"))),
  madeForKids: Schema.optional(Schema.Boolean),
  privacyStatus: Schema.optional(Schema.Union(Schema.Literal("public"), Schema.Literal("unlisted"), Schema.Literal("private"))),
  selfDeclaredMadeForKids: Schema.optional(Schema.Boolean),
});

/** Information specific to a creator in an affiliate program linked to a YouTube channel. */
export interface ChannelToAffiliateProgramLinkDetails {
  readonly merchantId?: string;
  readonly programStatus?: "affiliateProgramStatusUnspecified" | "active" | "inactive";
  readonly statusUpdateReason?: string;
  readonly statusUpdateTime?: string;
}
export interface ChannelToAffiliateProgramLinkDetailsEncoded {
  readonly merchantId?: string;
  readonly programStatus?: "affiliateProgramStatusUnspecified" | "active" | "inactive";
  readonly statusUpdateReason?: string;
  readonly statusUpdateTime?: string;
}
export const ChannelToAffiliateProgramLinkDetails: Schema.Schema<ChannelToAffiliateProgramLinkDetails, ChannelToAffiliateProgramLinkDetailsEncoded, never> = Schema.Struct({
  merchantId: Schema.optional(Schema.String),
  programStatus: Schema.optional(Schema.Union(Schema.Literal("affiliateProgramStatusUnspecified"), Schema.Literal("active"), Schema.Literal("inactive"))),
  statusUpdateReason: Schema.optional(Schema.String),
  statusUpdateTime: Schema.optional(Schema.String),
});

/** Freebase topic information related to the channel. */
export interface ChannelTopicDetails {
  readonly topicCategories?: ReadonlyArray<string>;
  readonly topicIds?: ReadonlyArray<string>;
}
export interface ChannelTopicDetailsEncoded {
  readonly topicCategories?: ReadonlyArray<string>;
  readonly topicIds?: ReadonlyArray<string>;
}
export const ChannelTopicDetails: Schema.Schema<ChannelTopicDetails, ChannelTopicDetailsEncoded, never> = Schema.Struct({
  topicCategories: Schema.optional(Schema.Array(Schema.String)),
  topicIds: Schema.optional(Schema.Array(Schema.String)),
});

/** Information specific to a store on a merchandising platform linked to a YouTube channel. */
export interface ChannelToStoreLinkDetails {
  readonly billingDetails?: ChannelToStoreLinkDetailsBillingDetails;
  readonly merchantAffiliateProgramDetails?: ChannelToStoreLinkDetailsMerchantAffiliateProgramDetails;
  readonly merchantId?: string;
  readonly storeName?: string;
  readonly storeUrl?: string;
}
export interface ChannelToStoreLinkDetailsEncoded {
  readonly billingDetails?: ChannelToStoreLinkDetailsBillingDetailsEncoded;
  readonly merchantAffiliateProgramDetails?: ChannelToStoreLinkDetailsMerchantAffiliateProgramDetailsEncoded;
  readonly merchantId?: string;
  readonly storeName?: string;
  readonly storeUrl?: string;
}
export const ChannelToStoreLinkDetails: Schema.Schema<ChannelToStoreLinkDetails, ChannelToStoreLinkDetailsEncoded, never> = Schema.Struct({
  billingDetails: Schema.optional(Schema.suspend(() => ChannelToStoreLinkDetailsBillingDetails)),
  merchantAffiliateProgramDetails: Schema.optional(Schema.suspend(() => ChannelToStoreLinkDetailsMerchantAffiliateProgramDetails)),
  merchantId: Schema.optional(Schema.String),
  storeName: Schema.optional(Schema.String),
  storeUrl: Schema.optional(Schema.String),
});

/** Information specific to billing. */
export interface ChannelToStoreLinkDetailsBillingDetails {
  readonly billingStatus?: "billingStatusUnspecified" | "billingStatusPending" | "billingStatusActive" | "billingStatusInactive";
}
export interface ChannelToStoreLinkDetailsBillingDetailsEncoded {
  readonly billingStatus?: "billingStatusUnspecified" | "billingStatusPending" | "billingStatusActive" | "billingStatusInactive";
}
export const ChannelToStoreLinkDetailsBillingDetails: Schema.Schema<ChannelToStoreLinkDetailsBillingDetails, ChannelToStoreLinkDetailsBillingDetailsEncoded, never> = Schema.Struct({
  billingStatus: Schema.optional(Schema.Union(Schema.Literal("billingStatusUnspecified"), Schema.Literal("billingStatusPending"), Schema.Literal("billingStatusActive"), Schema.Literal("billingStatusInactive"))),
});

/** Information specific to merchant affiliate program. */
export interface ChannelToStoreLinkDetailsMerchantAffiliateProgramDetails {
  readonly status?: "merchantAffiliateProgramStatusUnspecified" | "merchantAffiliateProgramStatusEligible" | "merchantAffiliateProgramStatusActive" | "merchantAffiliateProgramStatusPaused";
}
export interface ChannelToStoreLinkDetailsMerchantAffiliateProgramDetailsEncoded {
  readonly status?: "merchantAffiliateProgramStatusUnspecified" | "merchantAffiliateProgramStatusEligible" | "merchantAffiliateProgramStatusActive" | "merchantAffiliateProgramStatusPaused";
}
export const ChannelToStoreLinkDetailsMerchantAffiliateProgramDetails: Schema.Schema<ChannelToStoreLinkDetailsMerchantAffiliateProgramDetails, ChannelToStoreLinkDetailsMerchantAffiliateProgramDetailsEncoded, never> = Schema.Struct({
  status: Schema.optional(Schema.Union(Schema.Literal("merchantAffiliateProgramStatusUnspecified"), Schema.Literal("merchantAffiliateProgramStatusEligible"), Schema.Literal("merchantAffiliateProgramStatusActive"), Schema.Literal("merchantAffiliateProgramStatusPaused"))),
});

/** A *comment* represents a single YouTube comment. */
export interface Comment {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: CommentSnippet;
}
export interface CommentEncoded {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: CommentSnippetEncoded;
}
export const Comment: Schema.Schema<Comment, CommentEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  snippet: Schema.optional(Schema.suspend(() => CommentSnippet)),
});

export interface CommentListResponse {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<Comment>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfo;
  readonly tokenPagination?: TokenPagination;
  readonly visitorId?: string;
}
export interface CommentListResponseEncoded {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<CommentEncoded>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfoEncoded;
  readonly tokenPagination?: TokenPaginationEncoded;
  readonly visitorId?: string;
}
export const CommentListResponse: Schema.Schema<CommentListResponse, CommentListResponseEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  eventId: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Schema.suspend(() => Comment))),
  kind: Schema.optional(Schema.String),
  nextPageToken: Schema.optional(Schema.String),
  pageInfo: Schema.optional(Schema.suspend(() => PageInfo)),
  tokenPagination: Schema.optional(Schema.suspend(() => TokenPagination)),
  visitorId: Schema.optional(Schema.String),
});

/** Basic details about a comment, such as its author and text. */
export interface CommentSnippet {
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
  readonly publishedAt?: Date;
  readonly textDisplay?: string;
  readonly textOriginal?: string;
  readonly updatedAt?: Date;
  readonly videoId?: string;
  readonly viewerRating?: "none" | "like" | "dislike";
}
export interface CommentSnippetEncoded {
  readonly authorChannelId?: CommentSnippetAuthorChannelIdEncoded;
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
}
export const CommentSnippet: Schema.Schema<CommentSnippet, CommentSnippetEncoded, never> = Schema.Struct({
  authorChannelId: Schema.optional(Schema.suspend(() => CommentSnippetAuthorChannelId)),
  authorChannelUrl: Schema.optional(Schema.String),
  authorDisplayName: Schema.optional(Schema.String),
  authorProfileImageUrl: Schema.optional(Schema.String),
  canRate: Schema.optional(Schema.Boolean),
  channelId: Schema.optional(Schema.String),
  likeCount: Schema.optional(Schema.Int),
  moderationStatus: Schema.optional(Schema.Union(Schema.Literal("published"), Schema.Literal("heldForReview"), Schema.Literal("likelySpam"), Schema.Literal("rejected"))),
  parentId: Schema.optional(Schema.String),
  postId: Schema.optional(Schema.String),
  publishedAt: Schema.optional(Schema.DateFromString),
  textDisplay: Schema.optional(Schema.String),
  textOriginal: Schema.optional(Schema.String),
  updatedAt: Schema.optional(Schema.DateFromString),
  videoId: Schema.optional(Schema.String),
  viewerRating: Schema.optional(Schema.Union(Schema.Literal("none"), Schema.Literal("like"), Schema.Literal("dislike"))),
});

/** Contains the id of the author's YouTube channel, if any. */
export interface CommentSnippetAuthorChannelId {
  readonly value?: string;
}
export interface CommentSnippetAuthorChannelIdEncoded {
  readonly value?: string;
}
export const CommentSnippetAuthorChannelId: Schema.Schema<CommentSnippetAuthorChannelId, CommentSnippetAuthorChannelIdEncoded, never> = Schema.Struct({
  value: Schema.optional(Schema.String),
});

/** A *comment thread* represents information that applies to a top level comment and all its replies. It can also include the top level comment itself and some of the replies. */
export interface CommentThread {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly replies?: CommentThreadReplies;
  readonly snippet?: CommentThreadSnippet;
}
export interface CommentThreadEncoded {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly replies?: CommentThreadRepliesEncoded;
  readonly snippet?: CommentThreadSnippetEncoded;
}
export const CommentThread: Schema.Schema<CommentThread, CommentThreadEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  replies: Schema.optional(Schema.suspend(() => CommentThreadReplies)),
  snippet: Schema.optional(Schema.suspend(() => CommentThreadSnippet)),
});

export interface CommentThreadListResponse {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<CommentThread>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfo;
  readonly tokenPagination?: TokenPagination;
  readonly visitorId?: string;
}
export interface CommentThreadListResponseEncoded {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<CommentThreadEncoded>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfoEncoded;
  readonly tokenPagination?: TokenPaginationEncoded;
  readonly visitorId?: string;
}
export const CommentThreadListResponse: Schema.Schema<CommentThreadListResponse, CommentThreadListResponseEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  eventId: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Schema.suspend(() => CommentThread))),
  kind: Schema.optional(Schema.String),
  nextPageToken: Schema.optional(Schema.String),
  pageInfo: Schema.optional(Schema.suspend(() => PageInfo)),
  tokenPagination: Schema.optional(Schema.suspend(() => TokenPagination)),
  visitorId: Schema.optional(Schema.String),
});

/** Comments written in (direct or indirect) reply to the top level comment. */
export interface CommentThreadReplies {
  readonly comments?: ReadonlyArray<Comment>;
}
export interface CommentThreadRepliesEncoded {
  readonly comments?: ReadonlyArray<CommentEncoded>;
}
export const CommentThreadReplies: Schema.Schema<CommentThreadReplies, CommentThreadRepliesEncoded, never> = Schema.Struct({
  comments: Schema.optional(Schema.Array(Schema.suspend(() => Comment))),
});

/** Basic details about a comment thread. */
export interface CommentThreadSnippet {
  readonly canReply?: boolean;
  readonly channelId?: string;
  readonly isPublic?: boolean;
  readonly postId?: string;
  readonly topLevelComment?: Comment;
  readonly totalReplyCount?: number;
  readonly videoId?: string;
}
export interface CommentThreadSnippetEncoded {
  readonly canReply?: boolean;
  readonly channelId?: string;
  readonly isPublic?: boolean;
  readonly postId?: string;
  readonly topLevelComment?: CommentEncoded;
  readonly totalReplyCount?: number;
  readonly videoId?: string;
}
export const CommentThreadSnippet: Schema.Schema<CommentThreadSnippet, CommentThreadSnippetEncoded, never> = Schema.Struct({
  canReply: Schema.optional(Schema.Boolean),
  channelId: Schema.optional(Schema.String),
  isPublic: Schema.optional(Schema.Boolean),
  postId: Schema.optional(Schema.String),
  topLevelComment: Schema.optional(Schema.suspend(() => Comment)),
  totalReplyCount: Schema.optional(Schema.Int),
  videoId: Schema.optional(Schema.String),
});

/** Ratings schemes. The country-specific ratings are mostly for movies and shows. LINT.IfChange */
export interface ContentRating {
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
}
export interface ContentRatingEncoded {
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
}
export const ContentRating: Schema.Schema<ContentRating, ContentRatingEncoded, never> = Schema.Struct({
  acbRating: Schema.optional(Schema.Union(Schema.Literal("acbUnspecified"), Schema.Literal("acbE"), Schema.Literal("acbP"), Schema.Literal("acbC"), Schema.Literal("acbG"), Schema.Literal("acbPg"), Schema.Literal("acbM"), Schema.Literal("acbMa15plus"), Schema.Literal("acbR18plus"), Schema.Literal("acbUnrated"))),
  agcomRating: Schema.optional(Schema.Union(Schema.Literal("agcomUnspecified"), Schema.Literal("agcomT"), Schema.Literal("agcomVm14"), Schema.Literal("agcomVm18"), Schema.Literal("agcomUnrated"))),
  anatelRating: Schema.optional(Schema.Union(Schema.Literal("anatelUnspecified"), Schema.Literal("anatelF"), Schema.Literal("anatelI"), Schema.Literal("anatelI7"), Schema.Literal("anatelI10"), Schema.Literal("anatelI12"), Schema.Literal("anatelR"), Schema.Literal("anatelA"), Schema.Literal("anatelUnrated"))),
  bbfcRating: Schema.optional(Schema.Union(Schema.Literal("bbfcUnspecified"), Schema.Literal("bbfcU"), Schema.Literal("bbfcPg"), Schema.Literal("bbfc12a"), Schema.Literal("bbfc12"), Schema.Literal("bbfc15"), Schema.Literal("bbfc18"), Schema.Literal("bbfcR18"), Schema.Literal("bbfcUnrated"))),
  bfvcRating: Schema.optional(Schema.Union(Schema.Literal("bfvcUnspecified"), Schema.Literal("bfvcG"), Schema.Literal("bfvcE"), Schema.Literal("bfvc13"), Schema.Literal("bfvc15"), Schema.Literal("bfvc18"), Schema.Literal("bfvc20"), Schema.Literal("bfvcB"), Schema.Literal("bfvcUnrated"))),
  bmukkRating: Schema.optional(Schema.Union(Schema.Literal("bmukkUnspecified"), Schema.Literal("bmukkAa"), Schema.Literal("bmukk6"), Schema.Literal("bmukk8"), Schema.Literal("bmukk10"), Schema.Literal("bmukk12"), Schema.Literal("bmukk14"), Schema.Literal("bmukk16"), Schema.Literal("bmukkUnrated"))),
  catvfrRating: Schema.optional(Schema.Union(Schema.Literal("catvfrUnspecified"), Schema.Literal("catvfrG"), Schema.Literal("catvfr8plus"), Schema.Literal("catvfr13plus"), Schema.Literal("catvfr16plus"), Schema.Literal("catvfr18plus"), Schema.Literal("catvfrUnrated"), Schema.Literal("catvfrE"))),
  catvRating: Schema.optional(Schema.Union(Schema.Literal("catvUnspecified"), Schema.Literal("catvC"), Schema.Literal("catvC8"), Schema.Literal("catvG"), Schema.Literal("catvPg"), Schema.Literal("catv14plus"), Schema.Literal("catv18plus"), Schema.Literal("catvUnrated"), Schema.Literal("catvE"))),
  cbfcRating: Schema.optional(Schema.Union(Schema.Literal("cbfcUnspecified"), Schema.Literal("cbfcU"), Schema.Literal("cbfcUA"), Schema.Literal("cbfcUA7plus"), Schema.Literal("cbfcUA13plus"), Schema.Literal("cbfcUA16plus"), Schema.Literal("cbfcA"), Schema.Literal("cbfcS"), Schema.Literal("cbfcUnrated"))),
  cccRating: Schema.optional(Schema.Union(Schema.Literal("cccUnspecified"), Schema.Literal("cccTe"), Schema.Literal("ccc6"), Schema.Literal("ccc14"), Schema.Literal("ccc18"), Schema.Literal("ccc18v"), Schema.Literal("ccc18s"), Schema.Literal("cccUnrated"))),
  cceRating: Schema.optional(Schema.Union(Schema.Literal("cceUnspecified"), Schema.Literal("cceM4"), Schema.Literal("cceM6"), Schema.Literal("cceM12"), Schema.Literal("cceM16"), Schema.Literal("cceM18"), Schema.Literal("cceUnrated"), Schema.Literal("cceM14"))),
  chfilmRating: Schema.optional(Schema.Union(Schema.Literal("chfilmUnspecified"), Schema.Literal("chfilm0"), Schema.Literal("chfilm6"), Schema.Literal("chfilm12"), Schema.Literal("chfilm16"), Schema.Literal("chfilm18"), Schema.Literal("chfilmUnrated"))),
  chvrsRating: Schema.optional(Schema.Union(Schema.Literal("chvrsUnspecified"), Schema.Literal("chvrsG"), Schema.Literal("chvrsPg"), Schema.Literal("chvrs14a"), Schema.Literal("chvrs18a"), Schema.Literal("chvrsR"), Schema.Literal("chvrsE"), Schema.Literal("chvrsUnrated"))),
  cicfRating: Schema.optional(Schema.Union(Schema.Literal("cicfUnspecified"), Schema.Literal("cicfE"), Schema.Literal("cicfKtEa"), Schema.Literal("cicfKntEna"), Schema.Literal("cicfUnrated"))),
  cnaRating: Schema.optional(Schema.Union(Schema.Literal("cnaUnspecified"), Schema.Literal("cnaAp"), Schema.Literal("cna12"), Schema.Literal("cna15"), Schema.Literal("cna18"), Schema.Literal("cna18plus"), Schema.Literal("cnaUnrated"))),
  cncRating: Schema.optional(Schema.Union(Schema.Literal("cncUnspecified"), Schema.Literal("cncT"), Schema.Literal("cnc10"), Schema.Literal("cnc12"), Schema.Literal("cnc16"), Schema.Literal("cnc18"), Schema.Literal("cncE"), Schema.Literal("cncInterdiction"), Schema.Literal("cncUnrated"))),
  csaRating: Schema.optional(Schema.Union(Schema.Literal("csaUnspecified"), Schema.Literal("csaT"), Schema.Literal("csa10"), Schema.Literal("csa12"), Schema.Literal("csa16"), Schema.Literal("csa18"), Schema.Literal("csaInterdiction"), Schema.Literal("csaUnrated"))),
  cscfRating: Schema.optional(Schema.Union(Schema.Literal("cscfUnspecified"), Schema.Literal("cscfAl"), Schema.Literal("cscfA"), Schema.Literal("cscf6"), Schema.Literal("cscf9"), Schema.Literal("cscf12"), Schema.Literal("cscf16"), Schema.Literal("cscf18"), Schema.Literal("cscfUnrated"))),
  czfilmRating: Schema.optional(Schema.Union(Schema.Literal("czfilmUnspecified"), Schema.Literal("czfilmU"), Schema.Literal("czfilm12"), Schema.Literal("czfilm14"), Schema.Literal("czfilm18"), Schema.Literal("czfilmUnrated"))),
  djctqRating: Schema.optional(Schema.Union(Schema.Literal("djctqUnspecified"), Schema.Literal("djctqL"), Schema.Literal("djctq10"), Schema.Literal("djctq12"), Schema.Literal("djctq14"), Schema.Literal("djctq16"), Schema.Literal("djctq18"), Schema.Literal("djctqEr"), Schema.Literal("djctqL10"), Schema.Literal("djctqL12"), Schema.Literal("djctqL14"), Schema.Literal("djctqL16"), Schema.Literal("djctqL18"), Schema.Literal("djctq1012"), Schema.Literal("djctq1014"), Schema.Literal("djctq1016"), Schema.Literal("djctq1018"), Schema.Literal("djctq1214"), Schema.Literal("djctq1216"), Schema.Literal("djctq1218"), Schema.Literal("djctq1416"), Schema.Literal("djctq1418"), Schema.Literal("djctq1618"), Schema.Literal("djctqUnrated"))),
  djctqRatingReasons: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("djctqRatingReasonUnspecified"), Schema.Literal("djctqViolence"), Schema.Literal("djctqExtremeViolence"), Schema.Literal("djctqSexualContent"), Schema.Literal("djctqNudity"), Schema.Literal("djctqSex"), Schema.Literal("djctqExplicitSex"), Schema.Literal("djctqDrugs"), Schema.Literal("djctqLegalDrugs"), Schema.Literal("djctqIllegalDrugs"), Schema.Literal("djctqInappropriateLanguage"), Schema.Literal("djctqCriminalActs"), Schema.Literal("djctqImpactingContent"), Schema.Literal("djctqFear"), Schema.Literal("djctqMedicalProcedures"), Schema.Literal("djctqSensitiveTopics"), Schema.Literal("djctqFantasyViolence")))),
  ecbmctRating: Schema.optional(Schema.Union(Schema.Literal("ecbmctUnspecified"), Schema.Literal("ecbmctG"), Schema.Literal("ecbmct7a"), Schema.Literal("ecbmct7plus"), Schema.Literal("ecbmct13a"), Schema.Literal("ecbmct13plus"), Schema.Literal("ecbmct15a"), Schema.Literal("ecbmct15plus"), Schema.Literal("ecbmct18plus"), Schema.Literal("ecbmctUnrated"))),
  eefilmRating: Schema.optional(Schema.Union(Schema.Literal("eefilmUnspecified"), Schema.Literal("eefilmPere"), Schema.Literal("eefilmL"), Schema.Literal("eefilmMs6"), Schema.Literal("eefilmK6"), Schema.Literal("eefilmMs12"), Schema.Literal("eefilmK12"), Schema.Literal("eefilmK14"), Schema.Literal("eefilmK16"), Schema.Literal("eefilmUnrated"))),
  egfilmRating: Schema.optional(Schema.Union(Schema.Literal("egfilmUnspecified"), Schema.Literal("egfilmGn"), Schema.Literal("egfilm18"), Schema.Literal("egfilmBn"), Schema.Literal("egfilmUnrated"))),
  eirinRating: Schema.optional(Schema.Union(Schema.Literal("eirinUnspecified"), Schema.Literal("eirinG"), Schema.Literal("eirinPg12"), Schema.Literal("eirinR15plus"), Schema.Literal("eirinR18plus"), Schema.Literal("eirinUnrated"))),
  fcbmRating: Schema.optional(Schema.Union(Schema.Literal("fcbmUnspecified"), Schema.Literal("fcbmU"), Schema.Literal("fcbmPg13"), Schema.Literal("fcbmP13"), Schema.Literal("fcbm18"), Schema.Literal("fcbm18sx"), Schema.Literal("fcbm18pa"), Schema.Literal("fcbm18sg"), Schema.Literal("fcbm18pl"), Schema.Literal("fcbmUnrated"))),
  fcoRating: Schema.optional(Schema.Union(Schema.Literal("fcoUnspecified"), Schema.Literal("fcoI"), Schema.Literal("fcoIia"), Schema.Literal("fcoIib"), Schema.Literal("fcoIi"), Schema.Literal("fcoIii"), Schema.Literal("fcoUnrated"))),
  fmocRating: Schema.optional(Schema.Union(Schema.Literal("fmocUnspecified"), Schema.Literal("fmocU"), Schema.Literal("fmoc10"), Schema.Literal("fmoc12"), Schema.Literal("fmoc16"), Schema.Literal("fmoc18"), Schema.Literal("fmocE"), Schema.Literal("fmocUnrated"))),
  fpbRating: Schema.optional(Schema.Union(Schema.Literal("fpbUnspecified"), Schema.Literal("fpbA"), Schema.Literal("fpbPg"), Schema.Literal("fpb79Pg"), Schema.Literal("fpb1012Pg"), Schema.Literal("fpb13"), Schema.Literal("fpb16"), Schema.Literal("fpb18"), Schema.Literal("fpbX18"), Schema.Literal("fpbXx"), Schema.Literal("fpbUnrated"), Schema.Literal("fpb10"))),
  fpbRatingReasons: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("fpbRatingReasonUnspecified"), Schema.Literal("fpbBlasphemy"), Schema.Literal("fpbLanguage"), Schema.Literal("fpbNudity"), Schema.Literal("fpbPrejudice"), Schema.Literal("fpbSex"), Schema.Literal("fpbViolence"), Schema.Literal("fpbDrugs"), Schema.Literal("fpbSexualViolence"), Schema.Literal("fpbHorror"), Schema.Literal("fpbCriminalTechniques"), Schema.Literal("fpbImitativeActsTechniques")))),
  fskRating: Schema.optional(Schema.Union(Schema.Literal("fskUnspecified"), Schema.Literal("fsk0"), Schema.Literal("fsk6"), Schema.Literal("fsk12"), Schema.Literal("fsk16"), Schema.Literal("fsk18"), Schema.Literal("fskUnrated"))),
  grfilmRating: Schema.optional(Schema.Union(Schema.Literal("grfilmUnspecified"), Schema.Literal("grfilmK"), Schema.Literal("grfilmE"), Schema.Literal("grfilmK12"), Schema.Literal("grfilmK13"), Schema.Literal("grfilmK15"), Schema.Literal("grfilmK17"), Schema.Literal("grfilmK18"), Schema.Literal("grfilmUnrated"))),
  icaaRating: Schema.optional(Schema.Union(Schema.Literal("icaaUnspecified"), Schema.Literal("icaaApta"), Schema.Literal("icaa7"), Schema.Literal("icaa12"), Schema.Literal("icaa13"), Schema.Literal("icaa16"), Schema.Literal("icaa18"), Schema.Literal("icaaX"), Schema.Literal("icaaUnrated"))),
  ifcoRating: Schema.optional(Schema.Union(Schema.Literal("ifcoUnspecified"), Schema.Literal("ifcoG"), Schema.Literal("ifcoPg"), Schema.Literal("ifco12"), Schema.Literal("ifco12a"), Schema.Literal("ifco15"), Schema.Literal("ifco15a"), Schema.Literal("ifco16"), Schema.Literal("ifco18"), Schema.Literal("ifcoUnrated"))),
  ilfilmRating: Schema.optional(Schema.Union(Schema.Literal("ilfilmUnspecified"), Schema.Literal("ilfilmAa"), Schema.Literal("ilfilm12"), Schema.Literal("ilfilm14"), Schema.Literal("ilfilm16"), Schema.Literal("ilfilm18"), Schema.Literal("ilfilmUnrated"))),
  incaaRating: Schema.optional(Schema.Union(Schema.Literal("incaaUnspecified"), Schema.Literal("incaaAtp"), Schema.Literal("incaaSam13"), Schema.Literal("incaaSam16"), Schema.Literal("incaaSam18"), Schema.Literal("incaaC"), Schema.Literal("incaaUnrated"))),
  kfcbRating: Schema.optional(Schema.Union(Schema.Literal("kfcbUnspecified"), Schema.Literal("kfcbG"), Schema.Literal("kfcbPg"), Schema.Literal("kfcb16plus"), Schema.Literal("kfcbR"), Schema.Literal("kfcbUnrated"))),
  kijkwijzerRating: Schema.optional(Schema.Union(Schema.Literal("kijkwijzerUnspecified"), Schema.Literal("kijkwijzerAl"), Schema.Literal("kijkwijzer6"), Schema.Literal("kijkwijzer9"), Schema.Literal("kijkwijzer12"), Schema.Literal("kijkwijzer16"), Schema.Literal("kijkwijzer18"), Schema.Literal("kijkwijzerUnrated"))),
  kmrbRating: Schema.optional(Schema.Union(Schema.Literal("kmrbUnspecified"), Schema.Literal("kmrbAll"), Schema.Literal("kmrb12plus"), Schema.Literal("kmrb15plus"), Schema.Literal("kmrbTeenr"), Schema.Literal("kmrbR"), Schema.Literal("kmrbUnrated"))),
  lsfRating: Schema.optional(Schema.Union(Schema.Literal("lsfUnspecified"), Schema.Literal("lsfSu"), Schema.Literal("lsfA"), Schema.Literal("lsfBo"), Schema.Literal("lsf13"), Schema.Literal("lsfR"), Schema.Literal("lsf17"), Schema.Literal("lsfD"), Schema.Literal("lsf21"), Schema.Literal("lsfUnrated"))),
  mccaaRating: Schema.optional(Schema.Union(Schema.Literal("mccaaUnspecified"), Schema.Literal("mccaaU"), Schema.Literal("mccaaPg"), Schema.Literal("mccaa12a"), Schema.Literal("mccaa12"), Schema.Literal("mccaa14"), Schema.Literal("mccaa15"), Schema.Literal("mccaa16"), Schema.Literal("mccaa18"), Schema.Literal("mccaaUnrated"))),
  mccypRating: Schema.optional(Schema.Union(Schema.Literal("mccypUnspecified"), Schema.Literal("mccypA"), Schema.Literal("mccyp7"), Schema.Literal("mccyp11"), Schema.Literal("mccyp15"), Schema.Literal("mccypUnrated"))),
  mcstRating: Schema.optional(Schema.Union(Schema.Literal("mcstUnspecified"), Schema.Literal("mcstP"), Schema.Literal("mcst0"), Schema.Literal("mcstC13"), Schema.Literal("mcstC16"), Schema.Literal("mcst16plus"), Schema.Literal("mcstC18"), Schema.Literal("mcstGPg"), Schema.Literal("mcstUnrated"))),
  mdaRating: Schema.optional(Schema.Union(Schema.Literal("mdaUnspecified"), Schema.Literal("mdaG"), Schema.Literal("mdaPg"), Schema.Literal("mdaPg13"), Schema.Literal("mdaNc16"), Schema.Literal("mdaM18"), Schema.Literal("mdaR21"), Schema.Literal("mdaUnrated"))),
  medietilsynetRating: Schema.optional(Schema.Union(Schema.Literal("medietilsynetUnspecified"), Schema.Literal("medietilsynetA"), Schema.Literal("medietilsynet6"), Schema.Literal("medietilsynet7"), Schema.Literal("medietilsynet9"), Schema.Literal("medietilsynet11"), Schema.Literal("medietilsynet12"), Schema.Literal("medietilsynet15"), Schema.Literal("medietilsynet18"), Schema.Literal("medietilsynetUnrated"))),
  mekuRating: Schema.optional(Schema.Union(Schema.Literal("mekuUnspecified"), Schema.Literal("mekuS"), Schema.Literal("meku7"), Schema.Literal("meku12"), Schema.Literal("meku16"), Schema.Literal("meku18"), Schema.Literal("mekuUnrated"))),
  menaMpaaRating: Schema.optional(Schema.Union(Schema.Literal("menaMpaaUnspecified"), Schema.Literal("menaMpaaG"), Schema.Literal("menaMpaaPg"), Schema.Literal("menaMpaaPg13"), Schema.Literal("menaMpaaR"), Schema.Literal("menaMpaaUnrated"))),
  mibacRating: Schema.optional(Schema.Union(Schema.Literal("mibacUnspecified"), Schema.Literal("mibacT"), Schema.Literal("mibacVap"), Schema.Literal("mibacVm6"), Schema.Literal("mibacVm12"), Schema.Literal("mibacVm14"), Schema.Literal("mibacVm16"), Schema.Literal("mibacVm18"), Schema.Literal("mibacUnrated"))),
  mocRating: Schema.optional(Schema.Union(Schema.Literal("mocUnspecified"), Schema.Literal("mocE"), Schema.Literal("mocT"), Schema.Literal("moc7"), Schema.Literal("moc12"), Schema.Literal("moc15"), Schema.Literal("moc18"), Schema.Literal("mocX"), Schema.Literal("mocBanned"), Schema.Literal("mocUnrated"))),
  moctwRating: Schema.optional(Schema.Union(Schema.Literal("moctwUnspecified"), Schema.Literal("moctwG"), Schema.Literal("moctwP"), Schema.Literal("moctwPg"), Schema.Literal("moctwR"), Schema.Literal("moctwUnrated"), Schema.Literal("moctwR12"), Schema.Literal("moctwR15"))),
  mpaaRating: Schema.optional(Schema.Union(Schema.Literal("mpaaUnspecified"), Schema.Literal("mpaaG"), Schema.Literal("mpaaPg"), Schema.Literal("mpaaPg13"), Schema.Literal("mpaaR"), Schema.Literal("mpaaNc17"), Schema.Literal("mpaaX"), Schema.Literal("mpaaUnrated"))),
  mpaatRating: Schema.optional(Schema.Union(Schema.Literal("mpaatUnspecified"), Schema.Literal("mpaatGb"), Schema.Literal("mpaatRb"))),
  mtrcbRating: Schema.optional(Schema.Union(Schema.Literal("mtrcbUnspecified"), Schema.Literal("mtrcbG"), Schema.Literal("mtrcbPg"), Schema.Literal("mtrcbR13"), Schema.Literal("mtrcbR16"), Schema.Literal("mtrcbR18"), Schema.Literal("mtrcbX"), Schema.Literal("mtrcbUnrated"))),
  nbcplRating: Schema.optional(Schema.Union(Schema.Literal("nbcplUnspecified"), Schema.Literal("nbcplI"), Schema.Literal("nbcplIi"), Schema.Literal("nbcplIii"), Schema.Literal("nbcplIv"), Schema.Literal("nbcpl18plus"), Schema.Literal("nbcplUnrated"))),
  nbcRating: Schema.optional(Schema.Union(Schema.Literal("nbcUnspecified"), Schema.Literal("nbcG"), Schema.Literal("nbcPg"), Schema.Literal("nbc12plus"), Schema.Literal("nbc15plus"), Schema.Literal("nbc18plus"), Schema.Literal("nbc18plusr"), Schema.Literal("nbcPu"), Schema.Literal("nbcUnrated"))),
  nfrcRating: Schema.optional(Schema.Union(Schema.Literal("nfrcUnspecified"), Schema.Literal("nfrcA"), Schema.Literal("nfrcB"), Schema.Literal("nfrcC"), Schema.Literal("nfrcD"), Schema.Literal("nfrcX"), Schema.Literal("nfrcUnrated"))),
  nfvcbRating: Schema.optional(Schema.Union(Schema.Literal("nfvcbUnspecified"), Schema.Literal("nfvcbG"), Schema.Literal("nfvcbPg"), Schema.Literal("nfvcb12"), Schema.Literal("nfvcb12a"), Schema.Literal("nfvcb15"), Schema.Literal("nfvcb18"), Schema.Literal("nfvcbRe"), Schema.Literal("nfvcbUnrated"))),
  nkclvRating: Schema.optional(Schema.Union(Schema.Literal("nkclvUnspecified"), Schema.Literal("nkclvU"), Schema.Literal("nkclv7plus"), Schema.Literal("nkclv12plus"), Schema.Literal("nkclv16plus"), Schema.Literal("nkclv18plus"), Schema.Literal("nkclvUnrated"))),
  nmcRating: Schema.optional(Schema.Union(Schema.Literal("nmcUnspecified"), Schema.Literal("nmcG"), Schema.Literal("nmcPg"), Schema.Literal("nmcPg13"), Schema.Literal("nmcPg15"), Schema.Literal("nmc15plus"), Schema.Literal("nmc18plus"), Schema.Literal("nmc18tc"), Schema.Literal("nmcUnrated"))),
  oflcRating: Schema.optional(Schema.Union(Schema.Literal("oflcUnspecified"), Schema.Literal("oflcG"), Schema.Literal("oflcPg"), Schema.Literal("oflcM"), Schema.Literal("oflcR13"), Schema.Literal("oflcR15"), Schema.Literal("oflcR16"), Schema.Literal("oflcR18"), Schema.Literal("oflcUnrated"), Schema.Literal("oflcRp13"), Schema.Literal("oflcRp16"), Schema.Literal("oflcRp18"))),
  pefilmRating: Schema.optional(Schema.Union(Schema.Literal("pefilmUnspecified"), Schema.Literal("pefilmPt"), Schema.Literal("pefilmPg"), Schema.Literal("pefilm14"), Schema.Literal("pefilm18"), Schema.Literal("pefilmUnrated"))),
  rcnofRating: Schema.optional(Schema.Union(Schema.Literal("rcnofUnspecified"), Schema.Literal("rcnofI"), Schema.Literal("rcnofIi"), Schema.Literal("rcnofIii"), Schema.Literal("rcnofIv"), Schema.Literal("rcnofV"), Schema.Literal("rcnofVi"), Schema.Literal("rcnofUnrated"))),
  resorteviolenciaRating: Schema.optional(Schema.Union(Schema.Literal("resorteviolenciaUnspecified"), Schema.Literal("resorteviolenciaA"), Schema.Literal("resorteviolenciaB"), Schema.Literal("resorteviolenciaC"), Schema.Literal("resorteviolenciaD"), Schema.Literal("resorteviolenciaE"), Schema.Literal("resorteviolenciaUnrated"))),
  rtcRating: Schema.optional(Schema.Union(Schema.Literal("rtcUnspecified"), Schema.Literal("rtcAa"), Schema.Literal("rtcA"), Schema.Literal("rtcB"), Schema.Literal("rtcB15"), Schema.Literal("rtcC"), Schema.Literal("rtcD"), Schema.Literal("rtcUnrated"))),
  rteRating: Schema.optional(Schema.Union(Schema.Literal("rteUnspecified"), Schema.Literal("rteGa"), Schema.Literal("rteCh"), Schema.Literal("rtePs"), Schema.Literal("rteMa"), Schema.Literal("rteUnrated"))),
  russiaRating: Schema.optional(Schema.Union(Schema.Literal("russiaUnspecified"), Schema.Literal("russia0"), Schema.Literal("russia6"), Schema.Literal("russia12"), Schema.Literal("russia16"), Schema.Literal("russia18"), Schema.Literal("russiaUnrated"))),
  skfilmRating: Schema.optional(Schema.Union(Schema.Literal("skfilmUnspecified"), Schema.Literal("skfilmG"), Schema.Literal("skfilmP2"), Schema.Literal("skfilmP5"), Schema.Literal("skfilmP8"), Schema.Literal("skfilmUnrated"))),
  smaisRating: Schema.optional(Schema.Union(Schema.Literal("smaisUnspecified"), Schema.Literal("smaisL"), Schema.Literal("smais7"), Schema.Literal("smais12"), Schema.Literal("smais14"), Schema.Literal("smais16"), Schema.Literal("smais18"), Schema.Literal("smaisUnrated"))),
  smsaRating: Schema.optional(Schema.Union(Schema.Literal("smsaUnspecified"), Schema.Literal("smsaA"), Schema.Literal("smsa7"), Schema.Literal("smsa11"), Schema.Literal("smsa15"), Schema.Literal("smsaUnrated"))),
  tvpgRating: Schema.optional(Schema.Union(Schema.Literal("tvpgUnspecified"), Schema.Literal("tvpgY"), Schema.Literal("tvpgY7"), Schema.Literal("tvpgY7Fv"), Schema.Literal("tvpgG"), Schema.Literal("tvpgPg"), Schema.Literal("pg14"), Schema.Literal("tvpgMa"), Schema.Literal("tvpgUnrated"))),
  ytRating: Schema.optional(Schema.Union(Schema.Literal("ytUnspecified"), Schema.Literal("ytAgeRestricted"))),
});

/** Note that there may be a 5-second end-point resolution issue. For instance, if a cuepoint comes in for 22:03:27, we may stuff the cuepoint into 22:03:25 or 22:03:30, depending. This is an artifact of HLS. */
export interface Cuepoint {
  readonly cueType?: "cueTypeUnspecified" | "cueTypeAd";
  readonly durationSecs?: number;
  readonly etag?: string;
  readonly id?: string;
  readonly insertionOffsetTimeMs?: string;
  readonly walltimeMs?: string;
}
export interface CuepointEncoded {
  readonly cueType?: "cueTypeUnspecified" | "cueTypeAd";
  readonly durationSecs?: number;
  readonly etag?: string;
  readonly id?: string;
  readonly insertionOffsetTimeMs?: string;
  readonly walltimeMs?: string;
}
export const Cuepoint: Schema.Schema<Cuepoint, CuepointEncoded, never> = Schema.Struct({
  cueType: Schema.optional(Schema.Union(Schema.Literal("cueTypeUnspecified"), Schema.Literal("cueTypeAd"))),
  durationSecs: Schema.optional(Schema.Int),
  etag: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  insertionOffsetTimeMs: Schema.optional(Schema.String),
  walltimeMs: Schema.optional(Schema.String),
});

/** Schedule to insert cuepoints into a broadcast by ads automator. */
export interface CuepointSchedule {
  readonly enabled?: boolean;
  readonly pauseAdsUntil?: string;
  readonly repeatIntervalSecs?: number;
  readonly scheduleStrategy?: "scheduleStrategyUnspecified" | "concurrent" | "nonConcurrent";
}
export interface CuepointScheduleEncoded {
  readonly enabled?: boolean;
  readonly pauseAdsUntil?: string;
  readonly repeatIntervalSecs?: number;
  readonly scheduleStrategy?: "scheduleStrategyUnspecified" | "concurrent" | "nonConcurrent";
}
export const CuepointSchedule: Schema.Schema<CuepointSchedule, CuepointScheduleEncoded, never> = Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
  pauseAdsUntil: Schema.optional(Schema.String),
  repeatIntervalSecs: Schema.optional(Schema.Int),
  scheduleStrategy: Schema.optional(Schema.Union(Schema.Literal("scheduleStrategyUnspecified"), Schema.Literal("concurrent"), Schema.Literal("nonConcurrent"))),
});

export interface Entity {
  readonly id?: string;
  readonly typeId?: string;
  readonly url?: string;
}
export interface EntityEncoded {
  readonly id?: string;
  readonly typeId?: string;
  readonly url?: string;
}
export const Entity: Schema.Schema<Entity, EntityEncoded, never> = Schema.Struct({
  id: Schema.optional(Schema.String),
  typeId: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

/** Geographical coordinates of a point, in WGS84. */
export interface GeoPoint {
  readonly altitude?: number;
  readonly latitude?: number;
  readonly longitude?: number;
}
export interface GeoPointEncoded {
  readonly altitude?: number;
  readonly latitude?: number;
  readonly longitude?: number;
}
export const GeoPoint: Schema.Schema<GeoPoint, GeoPointEncoded, never> = Schema.Struct({
  altitude: Schema.optional(Schema.Number),
  latitude: Schema.optional(Schema.Number),
  longitude: Schema.optional(Schema.Number),
});

/** An *i18nLanguage* resource identifies a UI language currently supported by YouTube. */
export interface I18nLanguage {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: I18nLanguageSnippet;
}
export interface I18nLanguageEncoded {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: I18nLanguageSnippetEncoded;
}
export const I18nLanguage: Schema.Schema<I18nLanguage, I18nLanguageEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  snippet: Schema.optional(Schema.suspend(() => I18nLanguageSnippet)),
});

export interface I18nLanguageListResponse {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<I18nLanguage>;
  readonly kind?: string;
  readonly visitorId?: string;
}
export interface I18nLanguageListResponseEncoded {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<I18nLanguageEncoded>;
  readonly kind?: string;
  readonly visitorId?: string;
}
export const I18nLanguageListResponse: Schema.Schema<I18nLanguageListResponse, I18nLanguageListResponseEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  eventId: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Schema.suspend(() => I18nLanguage))),
  kind: Schema.optional(Schema.String),
  visitorId: Schema.optional(Schema.String),
});

/** Basic details about an i18n language, such as language code and human-readable name. */
export interface I18nLanguageSnippet {
  readonly hl?: string;
  readonly name?: string;
}
export interface I18nLanguageSnippetEncoded {
  readonly hl?: string;
  readonly name?: string;
}
export const I18nLanguageSnippet: Schema.Schema<I18nLanguageSnippet, I18nLanguageSnippetEncoded, never> = Schema.Struct({
  hl: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
});

/** A *i18nRegion* resource identifies a region where YouTube is available. */
export interface I18nRegion {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: I18nRegionSnippet;
}
export interface I18nRegionEncoded {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: I18nRegionSnippetEncoded;
}
export const I18nRegion: Schema.Schema<I18nRegion, I18nRegionEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  snippet: Schema.optional(Schema.suspend(() => I18nRegionSnippet)),
});

export interface I18nRegionListResponse {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<I18nRegion>;
  readonly kind?: string;
  readonly visitorId?: string;
}
export interface I18nRegionListResponseEncoded {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<I18nRegionEncoded>;
  readonly kind?: string;
  readonly visitorId?: string;
}
export const I18nRegionListResponse: Schema.Schema<I18nRegionListResponse, I18nRegionListResponseEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  eventId: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Schema.suspend(() => I18nRegion))),
  kind: Schema.optional(Schema.String),
  visitorId: Schema.optional(Schema.String),
});

/** Basic details about an i18n region, such as region code and human-readable name. */
export interface I18nRegionSnippet {
  readonly gl?: string;
  readonly name?: string;
}
export interface I18nRegionSnippetEncoded {
  readonly gl?: string;
  readonly name?: string;
}
export const I18nRegionSnippet: Schema.Schema<I18nRegionSnippet, I18nRegionSnippetEncoded, never> = Schema.Struct({
  gl: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
});

/** Branding properties for images associated with the channel. */
export interface ImageSettings {
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
}
export interface ImageSettingsEncoded {
  readonly backgroundImageUrl?: LocalizedPropertyEncoded;
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
  readonly largeBrandedBannerImageImapScript?: LocalizedPropertyEncoded;
  readonly largeBrandedBannerImageUrl?: LocalizedPropertyEncoded;
  readonly smallBrandedBannerImageImapScript?: LocalizedPropertyEncoded;
  readonly smallBrandedBannerImageUrl?: LocalizedPropertyEncoded;
  readonly trackingImageUrl?: string;
  readonly watchIconImageUrl?: string;
}
export const ImageSettings: Schema.Schema<ImageSettings, ImageSettingsEncoded, never> = Schema.Struct({
  backgroundImageUrl: Schema.optional(Schema.suspend(() => LocalizedProperty)),
  bannerExternalUrl: Schema.optional(Schema.String),
  bannerImageUrl: Schema.optional(Schema.String),
  bannerMobileExtraHdImageUrl: Schema.optional(Schema.String),
  bannerMobileHdImageUrl: Schema.optional(Schema.String),
  bannerMobileImageUrl: Schema.optional(Schema.String),
  bannerMobileLowImageUrl: Schema.optional(Schema.String),
  bannerMobileMediumHdImageUrl: Schema.optional(Schema.String),
  bannerTabletExtraHdImageUrl: Schema.optional(Schema.String),
  bannerTabletHdImageUrl: Schema.optional(Schema.String),
  bannerTabletImageUrl: Schema.optional(Schema.String),
  bannerTabletLowImageUrl: Schema.optional(Schema.String),
  bannerTvHighImageUrl: Schema.optional(Schema.String),
  bannerTvImageUrl: Schema.optional(Schema.String),
  bannerTvLowImageUrl: Schema.optional(Schema.String),
  bannerTvMediumImageUrl: Schema.optional(Schema.String),
  largeBrandedBannerImageImapScript: Schema.optional(Schema.suspend(() => LocalizedProperty)),
  largeBrandedBannerImageUrl: Schema.optional(Schema.suspend(() => LocalizedProperty)),
  smallBrandedBannerImageImapScript: Schema.optional(Schema.suspend(() => LocalizedProperty)),
  smallBrandedBannerImageUrl: Schema.optional(Schema.suspend(() => LocalizedProperty)),
  trackingImageUrl: Schema.optional(Schema.String),
  watchIconImageUrl: Schema.optional(Schema.String),
});

/** Describes information necessary for ingesting an RTMP, HTTP, or SRT stream. */
export interface IngestionInfo {
  readonly backupIngestionAddress?: string;
  readonly ingestionAddress?: string;
  readonly rtmpsBackupIngestionAddress?: string;
  readonly rtmpsIngestionAddress?: string;
  readonly streamName?: string;
}
export interface IngestionInfoEncoded {
  readonly backupIngestionAddress?: string;
  readonly ingestionAddress?: string;
  readonly rtmpsBackupIngestionAddress?: string;
  readonly rtmpsIngestionAddress?: string;
  readonly streamName?: string;
}
export const IngestionInfo: Schema.Schema<IngestionInfo, IngestionInfoEncoded, never> = Schema.Struct({
  backupIngestionAddress: Schema.optional(Schema.String),
  ingestionAddress: Schema.optional(Schema.String),
  rtmpsBackupIngestionAddress: Schema.optional(Schema.String),
  rtmpsIngestionAddress: Schema.optional(Schema.String),
  streamName: Schema.optional(Schema.String),
});

/** Describes an invideo branding. */
export interface InvideoBranding {
  readonly imageBytes?: string;
  readonly imageUrl?: string;
  readonly position?: InvideoPosition;
  readonly targetChannelId?: string;
  readonly timing?: InvideoTiming;
}
export interface InvideoBrandingEncoded {
  readonly imageBytes?: string;
  readonly imageUrl?: string;
  readonly position?: InvideoPositionEncoded;
  readonly targetChannelId?: string;
  readonly timing?: InvideoTimingEncoded;
}
export const InvideoBranding: Schema.Schema<InvideoBranding, InvideoBrandingEncoded, never> = Schema.Struct({
  imageBytes: Schema.optional(Schema.String),
  imageUrl: Schema.optional(Schema.String),
  position: Schema.optional(Schema.suspend(() => InvideoPosition)),
  targetChannelId: Schema.optional(Schema.String),
  timing: Schema.optional(Schema.suspend(() => InvideoTiming)),
});

/** Describes the spatial position of a visual widget inside a video. It is a union of various position types, out of which only will be set one. */
export interface InvideoPosition {
  readonly cornerPosition?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
  readonly type?: "corner";
}
export interface InvideoPositionEncoded {
  readonly cornerPosition?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
  readonly type?: "corner";
}
export const InvideoPosition: Schema.Schema<InvideoPosition, InvideoPositionEncoded, never> = Schema.Struct({
  cornerPosition: Schema.optional(Schema.Union(Schema.Literal("topLeft"), Schema.Literal("topRight"), Schema.Literal("bottomLeft"), Schema.Literal("bottomRight"))),
  type: Schema.optional(Schema.Union(Schema.Literal("corner"))),
});

/** Describes a temporal position of a visual widget inside a video. */
export interface InvideoTiming {
  readonly durationMs?: string;
  readonly offsetMs?: string;
  readonly type?: "offsetFromStart" | "offsetFromEnd";
}
export interface InvideoTimingEncoded {
  readonly durationMs?: string;
  readonly offsetMs?: string;
  readonly type?: "offsetFromStart" | "offsetFromEnd";
}
export const InvideoTiming: Schema.Schema<InvideoTiming, InvideoTimingEncoded, never> = Schema.Struct({
  durationMs: Schema.optional(Schema.String),
  offsetMs: Schema.optional(Schema.String),
  type: Schema.optional(Schema.Union(Schema.Literal("offsetFromStart"), Schema.Literal("offsetFromEnd"))),
});

export interface LanguageTag {
  readonly value?: string;
}
export interface LanguageTagEncoded {
  readonly value?: string;
}
export const LanguageTag: Schema.Schema<LanguageTag, LanguageTagEncoded, never> = Schema.Struct({
  value: Schema.optional(Schema.String),
});

export interface LevelDetails {
  readonly displayName?: string;
}
export interface LevelDetailsEncoded {
  readonly displayName?: string;
}
export const LevelDetails: Schema.Schema<LevelDetails, LevelDetailsEncoded, never> = Schema.Struct({
  displayName: Schema.optional(Schema.String),
});

/** A *liveBroadcast* resource represents an event that will be streamed, via live video, on YouTube. */
export interface LiveBroadcast {
  readonly contentDetails?: LiveBroadcastContentDetails;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly monetizationDetails?: LiveBroadcastMonetizationDetails;
  readonly snippet?: LiveBroadcastSnippet;
  readonly statistics?: LiveBroadcastStatistics;
  readonly status?: LiveBroadcastStatus;
}
export interface LiveBroadcastEncoded {
  readonly contentDetails?: LiveBroadcastContentDetailsEncoded;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly monetizationDetails?: LiveBroadcastMonetizationDetailsEncoded;
  readonly snippet?: LiveBroadcastSnippetEncoded;
  readonly statistics?: LiveBroadcastStatisticsEncoded;
  readonly status?: LiveBroadcastStatusEncoded;
}
export const LiveBroadcast: Schema.Schema<LiveBroadcast, LiveBroadcastEncoded, never> = Schema.Struct({
  contentDetails: Schema.optional(Schema.suspend(() => LiveBroadcastContentDetails)),
  etag: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  monetizationDetails: Schema.optional(Schema.suspend(() => LiveBroadcastMonetizationDetails)),
  snippet: Schema.optional(Schema.suspend(() => LiveBroadcastSnippet)),
  statistics: Schema.optional(Schema.suspend(() => LiveBroadcastStatistics)),
  status: Schema.optional(Schema.suspend(() => LiveBroadcastStatus)),
});

/** Detailed settings of a broadcast. */
export interface LiveBroadcastContentDetails {
  readonly boundStreamId?: string;
  readonly boundStreamLastUpdateTimeMs?: Date;
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
}
export interface LiveBroadcastContentDetailsEncoded {
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
  readonly monitorStream?: MonitorStreamInfoEncoded;
  readonly projection?: "projectionUnspecified" | "rectangular" | "360" | "mesh";
  readonly recordFromStart?: boolean;
  readonly startWithSlate?: boolean;
  readonly stereoLayout?: "stereoLayoutUnspecified" | "mono" | "leftRight" | "topBottom";
}
export const LiveBroadcastContentDetails: Schema.Schema<LiveBroadcastContentDetails, LiveBroadcastContentDetailsEncoded, never> = Schema.Struct({
  boundStreamId: Schema.optional(Schema.String),
  boundStreamLastUpdateTimeMs: Schema.optional(Schema.DateFromString),
  closedCaptionsType: Schema.optional(Schema.Union(Schema.Literal("closedCaptionsTypeUnspecified"), Schema.Literal("closedCaptionsDisabled"), Schema.Literal("closedCaptionsHttpPost"), Schema.Literal("closedCaptionsEmbedded"))),
  enableAutoStart: Schema.optional(Schema.Boolean),
  enableAutoStop: Schema.optional(Schema.Boolean),
  enableClosedCaptions: Schema.optional(Schema.Boolean),
  enableContentEncryption: Schema.optional(Schema.Boolean),
  enableDvr: Schema.optional(Schema.Boolean),
  enableEmbed: Schema.optional(Schema.Boolean),
  enableLowLatency: Schema.optional(Schema.Boolean),
  latencyPreference: Schema.optional(Schema.Union(Schema.Literal("latencyPreferenceUnspecified"), Schema.Literal("normal"), Schema.Literal("low"), Schema.Literal("ultraLow"))),
  mesh: Schema.optional(Schema.String),
  monitorStream: Schema.optional(Schema.suspend(() => MonitorStreamInfo)),
  projection: Schema.optional(Schema.Union(Schema.Literal("projectionUnspecified"), Schema.Literal("rectangular"), Schema.Literal("360"), Schema.Literal("mesh"))),
  recordFromStart: Schema.optional(Schema.Boolean),
  startWithSlate: Schema.optional(Schema.Boolean),
  stereoLayout: Schema.optional(Schema.Union(Schema.Literal("stereoLayoutUnspecified"), Schema.Literal("mono"), Schema.Literal("leftRight"), Schema.Literal("topBottom"))),
});

export interface LiveBroadcastListResponse {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<LiveBroadcast>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfo;
  readonly prevPageToken?: string;
  readonly tokenPagination?: TokenPagination;
  readonly visitorId?: string;
}
export interface LiveBroadcastListResponseEncoded {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<LiveBroadcastEncoded>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfoEncoded;
  readonly prevPageToken?: string;
  readonly tokenPagination?: TokenPaginationEncoded;
  readonly visitorId?: string;
}
export const LiveBroadcastListResponse: Schema.Schema<LiveBroadcastListResponse, LiveBroadcastListResponseEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  eventId: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Schema.suspend(() => LiveBroadcast))),
  kind: Schema.optional(Schema.String),
  nextPageToken: Schema.optional(Schema.String),
  pageInfo: Schema.optional(Schema.suspend(() => PageInfo)),
  prevPageToken: Schema.optional(Schema.String),
  tokenPagination: Schema.optional(Schema.suspend(() => TokenPagination)),
  visitorId: Schema.optional(Schema.String),
});

/** Monetization settings of a broadcast. */
export interface LiveBroadcastMonetizationDetails {
  readonly cuepointSchedule?: CuepointSchedule;
}
export interface LiveBroadcastMonetizationDetailsEncoded {
  readonly cuepointSchedule?: CuepointScheduleEncoded;
}
export const LiveBroadcastMonetizationDetails: Schema.Schema<LiveBroadcastMonetizationDetails, LiveBroadcastMonetizationDetailsEncoded, never> = Schema.Struct({
  cuepointSchedule: Schema.optional(Schema.suspend(() => CuepointSchedule)),
});

/** Basic broadcast information. */
export interface LiveBroadcastSnippet {
  readonly actualEndTime?: Date;
  readonly actualStartTime?: Date;
  readonly channelId?: string;
  readonly description?: string;
  readonly isDefaultBroadcast?: boolean;
  readonly liveChatId?: string;
  readonly publishedAt?: Date;
  readonly scheduledEndTime?: Date;
  readonly scheduledStartTime?: Date;
  readonly thumbnails?: ThumbnailDetails;
  readonly title?: string;
}
export interface LiveBroadcastSnippetEncoded {
  readonly actualEndTime?: string;
  readonly actualStartTime?: string;
  readonly channelId?: string;
  readonly description?: string;
  readonly isDefaultBroadcast?: boolean;
  readonly liveChatId?: string;
  readonly publishedAt?: string;
  readonly scheduledEndTime?: string;
  readonly scheduledStartTime?: string;
  readonly thumbnails?: ThumbnailDetailsEncoded;
  readonly title?: string;
}
export const LiveBroadcastSnippet: Schema.Schema<LiveBroadcastSnippet, LiveBroadcastSnippetEncoded, never> = Schema.Struct({
  actualEndTime: Schema.optional(Schema.DateFromString),
  actualStartTime: Schema.optional(Schema.DateFromString),
  channelId: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  isDefaultBroadcast: Schema.optional(Schema.Boolean),
  liveChatId: Schema.optional(Schema.String),
  publishedAt: Schema.optional(Schema.DateFromString),
  scheduledEndTime: Schema.optional(Schema.DateFromString),
  scheduledStartTime: Schema.optional(Schema.DateFromString),
  thumbnails: Schema.optional(Schema.suspend(() => ThumbnailDetails)),
  title: Schema.optional(Schema.String),
});

/** Statistics about the live broadcast. These represent a snapshot of the values at the time of the request. Statistics are only returned for live broadcasts. */
export interface LiveBroadcastStatistics {
  readonly concurrentViewers?: string;
}
export interface LiveBroadcastStatisticsEncoded {
  readonly concurrentViewers?: string;
}
export const LiveBroadcastStatistics: Schema.Schema<LiveBroadcastStatistics, LiveBroadcastStatisticsEncoded, never> = Schema.Struct({
  concurrentViewers: Schema.optional(Schema.String),
});

/** Live broadcast state. */
export interface LiveBroadcastStatus {
  readonly lifeCycleStatus?: "lifeCycleStatusUnspecified" | "created" | "ready" | "testing" | "live" | "complete" | "revoked" | "testStarting" | "liveStarting";
  readonly liveBroadcastPriority?: "liveBroadcastPriorityUnspecified" | "low" | "normal" | "high";
  readonly madeForKids?: boolean;
  readonly privacyStatus?: "public" | "unlisted" | "private";
  readonly recordingStatus?: "liveBroadcastRecordingStatusUnspecified" | "notRecording" | "recording" | "recorded";
  readonly selfDeclaredMadeForKids?: boolean;
}
export interface LiveBroadcastStatusEncoded {
  readonly lifeCycleStatus?: "lifeCycleStatusUnspecified" | "created" | "ready" | "testing" | "live" | "complete" | "revoked" | "testStarting" | "liveStarting";
  readonly liveBroadcastPriority?: "liveBroadcastPriorityUnspecified" | "low" | "normal" | "high";
  readonly madeForKids?: boolean;
  readonly privacyStatus?: "public" | "unlisted" | "private";
  readonly recordingStatus?: "liveBroadcastRecordingStatusUnspecified" | "notRecording" | "recording" | "recorded";
  readonly selfDeclaredMadeForKids?: boolean;
}
export const LiveBroadcastStatus: Schema.Schema<LiveBroadcastStatus, LiveBroadcastStatusEncoded, never> = Schema.Struct({
  lifeCycleStatus: Schema.optional(Schema.Union(Schema.Literal("lifeCycleStatusUnspecified"), Schema.Literal("created"), Schema.Literal("ready"), Schema.Literal("testing"), Schema.Literal("live"), Schema.Literal("complete"), Schema.Literal("revoked"), Schema.Literal("testStarting"), Schema.Literal("liveStarting"))),
  liveBroadcastPriority: Schema.optional(Schema.Union(Schema.Literal("liveBroadcastPriorityUnspecified"), Schema.Literal("low"), Schema.Literal("normal"), Schema.Literal("high"))),
  madeForKids: Schema.optional(Schema.Boolean),
  privacyStatus: Schema.optional(Schema.Union(Schema.Literal("public"), Schema.Literal("unlisted"), Schema.Literal("private"))),
  recordingStatus: Schema.optional(Schema.Union(Schema.Literal("liveBroadcastRecordingStatusUnspecified"), Schema.Literal("notRecording"), Schema.Literal("recording"), Schema.Literal("recorded"))),
  selfDeclaredMadeForKids: Schema.optional(Schema.Boolean),
});

/** A `__liveChatBan__` resource represents a ban for a YouTube live chat. */
export interface LiveChatBan {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: LiveChatBanSnippet;
}
export interface LiveChatBanEncoded {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: LiveChatBanSnippetEncoded;
}
export const LiveChatBan: Schema.Schema<LiveChatBan, LiveChatBanEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  snippet: Schema.optional(Schema.suspend(() => LiveChatBanSnippet)),
});

export interface LiveChatBanSnippet {
  readonly banDurationSeconds?: string;
  readonly bannedUserDetails?: ChannelProfileDetails;
  readonly liveChatId?: string;
  readonly type?: "liveChatBanTypeUnspecified" | "permanent" | "temporary";
}
export interface LiveChatBanSnippetEncoded {
  readonly banDurationSeconds?: string;
  readonly bannedUserDetails?: ChannelProfileDetailsEncoded;
  readonly liveChatId?: string;
  readonly type?: "liveChatBanTypeUnspecified" | "permanent" | "temporary";
}
export const LiveChatBanSnippet: Schema.Schema<LiveChatBanSnippet, LiveChatBanSnippetEncoded, never> = Schema.Struct({
  banDurationSeconds: Schema.optional(Schema.String),
  bannedUserDetails: Schema.optional(Schema.suspend(() => ChannelProfileDetails)),
  liveChatId: Schema.optional(Schema.String),
  type: Schema.optional(Schema.Union(Schema.Literal("liveChatBanTypeUnspecified"), Schema.Literal("permanent"), Schema.Literal("temporary"))),
});

export interface LiveChatFanFundingEventDetails {
  readonly amountDisplayString?: string;
  readonly amountMicros?: string;
  readonly currency?: string;
  readonly userComment?: string;
}
export interface LiveChatFanFundingEventDetailsEncoded {
  readonly amountDisplayString?: string;
  readonly amountMicros?: string;
  readonly currency?: string;
  readonly userComment?: string;
}
export const LiveChatFanFundingEventDetails: Schema.Schema<LiveChatFanFundingEventDetails, LiveChatFanFundingEventDetailsEncoded, never> = Schema.Struct({
  amountDisplayString: Schema.optional(Schema.String),
  amountMicros: Schema.optional(Schema.String),
  currency: Schema.optional(Schema.String),
  userComment: Schema.optional(Schema.String),
});

/** Details about the gift event, this is only set if the type is 'giftEvent'. */
export interface LiveChatGiftDetails {
  readonly altText?: string;
  readonly comboCount?: number;
  readonly giftDuration?: string;
  readonly giftName?: string;
  readonly giftUrl?: string;
  readonly hasVisualEffect?: boolean;
  readonly jewelsAmount?: number;
  readonly language?: string;
}
export interface LiveChatGiftDetailsEncoded {
  readonly altText?: string;
  readonly comboCount?: number;
  readonly giftDuration?: string;
  readonly giftName?: string;
  readonly giftUrl?: string;
  readonly hasVisualEffect?: boolean;
  readonly jewelsAmount?: number;
  readonly language?: string;
}
export const LiveChatGiftDetails: Schema.Schema<LiveChatGiftDetails, LiveChatGiftDetailsEncoded, never> = Schema.Struct({
  altText: Schema.optional(Schema.String),
  comboCount: Schema.optional(Schema.Int),
  giftDuration: Schema.optional(Schema.String),
  giftName: Schema.optional(Schema.String),
  giftUrl: Schema.optional(Schema.String),
  hasVisualEffect: Schema.optional(Schema.Boolean),
  jewelsAmount: Schema.optional(Schema.Int),
  language: Schema.optional(Schema.String),
});

export interface LiveChatGiftMembershipReceivedDetails {
  readonly associatedMembershipGiftingMessageId?: string;
  readonly gifterChannelId?: string;
  readonly memberLevelName?: string;
}
export interface LiveChatGiftMembershipReceivedDetailsEncoded {
  readonly associatedMembershipGiftingMessageId?: string;
  readonly gifterChannelId?: string;
  readonly memberLevelName?: string;
}
export const LiveChatGiftMembershipReceivedDetails: Schema.Schema<LiveChatGiftMembershipReceivedDetails, LiveChatGiftMembershipReceivedDetailsEncoded, never> = Schema.Struct({
  associatedMembershipGiftingMessageId: Schema.optional(Schema.String),
  gifterChannelId: Schema.optional(Schema.String),
  memberLevelName: Schema.optional(Schema.String),
});

export interface LiveChatMemberMilestoneChatDetails {
  readonly memberLevelName?: string;
  readonly memberMonth?: number;
  readonly userComment?: string;
}
export interface LiveChatMemberMilestoneChatDetailsEncoded {
  readonly memberLevelName?: string;
  readonly memberMonth?: number;
  readonly userComment?: string;
}
export const LiveChatMemberMilestoneChatDetails: Schema.Schema<LiveChatMemberMilestoneChatDetails, LiveChatMemberMilestoneChatDetailsEncoded, never> = Schema.Struct({
  memberLevelName: Schema.optional(Schema.String),
  memberMonth: Schema.optional(Schema.Int),
  userComment: Schema.optional(Schema.String),
});

export interface LiveChatMembershipGiftingDetails {
  readonly giftMembershipsCount?: number;
  readonly giftMembershipsLevelName?: string;
}
export interface LiveChatMembershipGiftingDetailsEncoded {
  readonly giftMembershipsCount?: number;
  readonly giftMembershipsLevelName?: string;
}
export const LiveChatMembershipGiftingDetails: Schema.Schema<LiveChatMembershipGiftingDetails, LiveChatMembershipGiftingDetailsEncoded, never> = Schema.Struct({
  giftMembershipsCount: Schema.optional(Schema.Int),
  giftMembershipsLevelName: Schema.optional(Schema.String),
});

/** A *liveChatMessage* resource represents a chat message in a YouTube Live Chat. */
export interface LiveChatMessage {
  readonly authorDetails?: LiveChatMessageAuthorDetails;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: LiveChatMessageSnippet;
}
export interface LiveChatMessageEncoded {
  readonly authorDetails?: LiveChatMessageAuthorDetailsEncoded;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: LiveChatMessageSnippetEncoded;
}
export const LiveChatMessage: Schema.Schema<LiveChatMessage, LiveChatMessageEncoded, never> = Schema.Struct({
  authorDetails: Schema.optional(Schema.suspend(() => LiveChatMessageAuthorDetails)),
  etag: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  snippet: Schema.optional(Schema.suspend(() => LiveChatMessageSnippet)),
});

export interface LiveChatMessageAuthorDetails {
  readonly channelId?: string;
  readonly channelUrl?: string;
  readonly displayName?: string;
  readonly isChatModerator?: boolean;
  readonly isChatOwner?: boolean;
  readonly isChatSponsor?: boolean;
  readonly isVerified?: boolean;
  readonly profileImageUrl?: string;
}
export interface LiveChatMessageAuthorDetailsEncoded {
  readonly channelId?: string;
  readonly channelUrl?: string;
  readonly displayName?: string;
  readonly isChatModerator?: boolean;
  readonly isChatOwner?: boolean;
  readonly isChatSponsor?: boolean;
  readonly isVerified?: boolean;
  readonly profileImageUrl?: string;
}
export const LiveChatMessageAuthorDetails: Schema.Schema<LiveChatMessageAuthorDetails, LiveChatMessageAuthorDetailsEncoded, never> = Schema.Struct({
  channelId: Schema.optional(Schema.String),
  channelUrl: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  isChatModerator: Schema.optional(Schema.Boolean),
  isChatOwner: Schema.optional(Schema.Boolean),
  isChatSponsor: Schema.optional(Schema.Boolean),
  isVerified: Schema.optional(Schema.Boolean),
  profileImageUrl: Schema.optional(Schema.String),
});

export interface LiveChatMessageDeletedDetails {
  readonly deletedMessageId?: string;
}
export interface LiveChatMessageDeletedDetailsEncoded {
  readonly deletedMessageId?: string;
}
export const LiveChatMessageDeletedDetails: Schema.Schema<LiveChatMessageDeletedDetails, LiveChatMessageDeletedDetailsEncoded, never> = Schema.Struct({
  deletedMessageId: Schema.optional(Schema.String),
});

export interface LiveChatMessageListResponse {
  readonly activePollItem?: LiveChatMessage;
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<LiveChatMessage>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly offlineAt?: Date;
  readonly pageInfo?: PageInfo;
  readonly pollingIntervalMillis?: number;
  readonly tokenPagination?: TokenPagination;
  readonly visitorId?: string;
}
export interface LiveChatMessageListResponseEncoded {
  readonly activePollItem?: LiveChatMessageEncoded;
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<LiveChatMessageEncoded>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly offlineAt?: string;
  readonly pageInfo?: PageInfoEncoded;
  readonly pollingIntervalMillis?: number;
  readonly tokenPagination?: TokenPaginationEncoded;
  readonly visitorId?: string;
}
export const LiveChatMessageListResponse: Schema.Schema<LiveChatMessageListResponse, LiveChatMessageListResponseEncoded, never> = Schema.Struct({
  activePollItem: Schema.optional(Schema.suspend(() => LiveChatMessage)),
  etag: Schema.optional(Schema.String),
  eventId: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Schema.suspend(() => LiveChatMessage))),
  kind: Schema.optional(Schema.String),
  nextPageToken: Schema.optional(Schema.String),
  offlineAt: Schema.optional(Schema.DateFromString),
  pageInfo: Schema.optional(Schema.suspend(() => PageInfo)),
  pollingIntervalMillis: Schema.optional(Schema.Int),
  tokenPagination: Schema.optional(Schema.suspend(() => TokenPagination)),
  visitorId: Schema.optional(Schema.String),
});

export interface LiveChatMessageRetractedDetails {
  readonly retractedMessageId?: string;
}
export interface LiveChatMessageRetractedDetailsEncoded {
  readonly retractedMessageId?: string;
}
export const LiveChatMessageRetractedDetails: Schema.Schema<LiveChatMessageRetractedDetails, LiveChatMessageRetractedDetailsEncoded, never> = Schema.Struct({
  retractedMessageId: Schema.optional(Schema.String),
});

/** Next ID: 35 */
export interface LiveChatMessageSnippet {
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
  readonly publishedAt?: Date;
  readonly superChatDetails?: LiveChatSuperChatDetails;
  readonly superStickerDetails?: LiveChatSuperStickerDetails;
  readonly textMessageDetails?: LiveChatTextMessageDetails;
  readonly type?: "invalidType" | "textMessageEvent" | "tombstone" | "fanFundingEvent" | "chatEndedEvent" | "sponsorOnlyModeStartedEvent" | "sponsorOnlyModeEndedEvent" | "newSponsorEvent" | "memberMilestoneChatEvent" | "membershipGiftingEvent" | "giftMembershipReceivedEvent" | "messageDeletedEvent" | "messageRetractedEvent" | "userBannedEvent" | "superChatEvent" | "superStickerEvent" | "pollEvent" | "giftEvent";
  readonly userBannedDetails?: LiveChatUserBannedMessageDetails;
}
export interface LiveChatMessageSnippetEncoded {
  readonly authorChannelId?: string;
  readonly displayMessage?: string;
  readonly fanFundingEventDetails?: LiveChatFanFundingEventDetailsEncoded;
  readonly giftDetails?: LiveChatGiftDetailsEncoded;
  readonly giftMembershipReceivedDetails?: LiveChatGiftMembershipReceivedDetailsEncoded;
  readonly hasDisplayContent?: boolean;
  readonly liveChatId?: string;
  readonly memberMilestoneChatDetails?: LiveChatMemberMilestoneChatDetailsEncoded;
  readonly membershipGiftingDetails?: LiveChatMembershipGiftingDetailsEncoded;
  readonly messageDeletedDetails?: LiveChatMessageDeletedDetailsEncoded;
  readonly messageRetractedDetails?: LiveChatMessageRetractedDetailsEncoded;
  readonly newSponsorDetails?: LiveChatNewSponsorDetailsEncoded;
  readonly pollDetails?: LiveChatPollDetailsEncoded;
  readonly publishedAt?: string;
  readonly superChatDetails?: LiveChatSuperChatDetailsEncoded;
  readonly superStickerDetails?: LiveChatSuperStickerDetailsEncoded;
  readonly textMessageDetails?: LiveChatTextMessageDetailsEncoded;
  readonly type?: "invalidType" | "textMessageEvent" | "tombstone" | "fanFundingEvent" | "chatEndedEvent" | "sponsorOnlyModeStartedEvent" | "sponsorOnlyModeEndedEvent" | "newSponsorEvent" | "memberMilestoneChatEvent" | "membershipGiftingEvent" | "giftMembershipReceivedEvent" | "messageDeletedEvent" | "messageRetractedEvent" | "userBannedEvent" | "superChatEvent" | "superStickerEvent" | "pollEvent" | "giftEvent";
  readonly userBannedDetails?: LiveChatUserBannedMessageDetailsEncoded;
}
export const LiveChatMessageSnippet: Schema.Schema<LiveChatMessageSnippet, LiveChatMessageSnippetEncoded, never> = Schema.Struct({
  authorChannelId: Schema.optional(Schema.String),
  displayMessage: Schema.optional(Schema.String),
  fanFundingEventDetails: Schema.optional(Schema.suspend(() => LiveChatFanFundingEventDetails)),
  giftDetails: Schema.optional(Schema.suspend(() => LiveChatGiftDetails)),
  giftMembershipReceivedDetails: Schema.optional(Schema.suspend(() => LiveChatGiftMembershipReceivedDetails)),
  hasDisplayContent: Schema.optional(Schema.Boolean),
  liveChatId: Schema.optional(Schema.String),
  memberMilestoneChatDetails: Schema.optional(Schema.suspend(() => LiveChatMemberMilestoneChatDetails)),
  membershipGiftingDetails: Schema.optional(Schema.suspend(() => LiveChatMembershipGiftingDetails)),
  messageDeletedDetails: Schema.optional(Schema.suspend(() => LiveChatMessageDeletedDetails)),
  messageRetractedDetails: Schema.optional(Schema.suspend(() => LiveChatMessageRetractedDetails)),
  newSponsorDetails: Schema.optional(Schema.suspend(() => LiveChatNewSponsorDetails)),
  pollDetails: Schema.optional(Schema.suspend(() => LiveChatPollDetails)),
  publishedAt: Schema.optional(Schema.DateFromString),
  superChatDetails: Schema.optional(Schema.suspend(() => LiveChatSuperChatDetails)),
  superStickerDetails: Schema.optional(Schema.suspend(() => LiveChatSuperStickerDetails)),
  textMessageDetails: Schema.optional(Schema.suspend(() => LiveChatTextMessageDetails)),
  type: Schema.optional(Schema.Union(Schema.Literal("invalidType"), Schema.Literal("textMessageEvent"), Schema.Literal("tombstone"), Schema.Literal("fanFundingEvent"), Schema.Literal("chatEndedEvent"), Schema.Literal("sponsorOnlyModeStartedEvent"), Schema.Literal("sponsorOnlyModeEndedEvent"), Schema.Literal("newSponsorEvent"), Schema.Literal("memberMilestoneChatEvent"), Schema.Literal("membershipGiftingEvent"), Schema.Literal("giftMembershipReceivedEvent"), Schema.Literal("messageDeletedEvent"), Schema.Literal("messageRetractedEvent"), Schema.Literal("userBannedEvent"), Schema.Literal("superChatEvent"), Schema.Literal("superStickerEvent"), Schema.Literal("pollEvent"), Schema.Literal("giftEvent"))),
  userBannedDetails: Schema.optional(Schema.suspend(() => LiveChatUserBannedMessageDetails)),
});

/** A *liveChatModerator* resource represents a moderator for a YouTube live chat. A chat moderator has the ability to ban/unban users from a chat, remove message, etc. */
export interface LiveChatModerator {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: LiveChatModeratorSnippet;
}
export interface LiveChatModeratorEncoded {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: LiveChatModeratorSnippetEncoded;
}
export const LiveChatModerator: Schema.Schema<LiveChatModerator, LiveChatModeratorEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  snippet: Schema.optional(Schema.suspend(() => LiveChatModeratorSnippet)),
});

export interface LiveChatModeratorListResponse {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<LiveChatModerator>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfo;
  readonly prevPageToken?: string;
  readonly tokenPagination?: TokenPagination;
  readonly visitorId?: string;
}
export interface LiveChatModeratorListResponseEncoded {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<LiveChatModeratorEncoded>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfoEncoded;
  readonly prevPageToken?: string;
  readonly tokenPagination?: TokenPaginationEncoded;
  readonly visitorId?: string;
}
export const LiveChatModeratorListResponse: Schema.Schema<LiveChatModeratorListResponse, LiveChatModeratorListResponseEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  eventId: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Schema.suspend(() => LiveChatModerator))),
  kind: Schema.optional(Schema.String),
  nextPageToken: Schema.optional(Schema.String),
  pageInfo: Schema.optional(Schema.suspend(() => PageInfo)),
  prevPageToken: Schema.optional(Schema.String),
  tokenPagination: Schema.optional(Schema.suspend(() => TokenPagination)),
  visitorId: Schema.optional(Schema.String),
});

export interface LiveChatModeratorSnippet {
  readonly liveChatId?: string;
  readonly moderatorDetails?: ChannelProfileDetails;
}
export interface LiveChatModeratorSnippetEncoded {
  readonly liveChatId?: string;
  readonly moderatorDetails?: ChannelProfileDetailsEncoded;
}
export const LiveChatModeratorSnippet: Schema.Schema<LiveChatModeratorSnippet, LiveChatModeratorSnippetEncoded, never> = Schema.Struct({
  liveChatId: Schema.optional(Schema.String),
  moderatorDetails: Schema.optional(Schema.suspend(() => ChannelProfileDetails)),
});

export interface LiveChatNewSponsorDetails {
  readonly isUpgrade?: boolean;
  readonly memberLevelName?: string;
}
export interface LiveChatNewSponsorDetailsEncoded {
  readonly isUpgrade?: boolean;
  readonly memberLevelName?: string;
}
export const LiveChatNewSponsorDetails: Schema.Schema<LiveChatNewSponsorDetails, LiveChatNewSponsorDetailsEncoded, never> = Schema.Struct({
  isUpgrade: Schema.optional(Schema.Boolean),
  memberLevelName: Schema.optional(Schema.String),
});

export interface LiveChatPollDetails {
  readonly metadata?: LiveChatPollDetailsPollMetadata;
  readonly status?: "unknown" | "active" | "closed";
}
export interface LiveChatPollDetailsEncoded {
  readonly metadata?: LiveChatPollDetailsPollMetadataEncoded;
  readonly status?: "unknown" | "active" | "closed";
}
export const LiveChatPollDetails: Schema.Schema<LiveChatPollDetails, LiveChatPollDetailsEncoded, never> = Schema.Struct({
  metadata: Schema.optional(Schema.suspend(() => LiveChatPollDetailsPollMetadata)),
  status: Schema.optional(Schema.Union(Schema.Literal("unknown"), Schema.Literal("active"), Schema.Literal("closed"))),
});

export interface LiveChatPollDetailsPollMetadata {
  readonly options?: ReadonlyArray<LiveChatPollDetailsPollMetadataPollOption>;
  readonly questionText?: string;
}
export interface LiveChatPollDetailsPollMetadataEncoded {
  readonly options?: ReadonlyArray<LiveChatPollDetailsPollMetadataPollOptionEncoded>;
  readonly questionText?: string;
}
export const LiveChatPollDetailsPollMetadata: Schema.Schema<LiveChatPollDetailsPollMetadata, LiveChatPollDetailsPollMetadataEncoded, never> = Schema.Struct({
  options: Schema.optional(Schema.Array(Schema.suspend(() => LiveChatPollDetailsPollMetadataPollOption))),
  questionText: Schema.optional(Schema.String),
});

export interface LiveChatPollDetailsPollMetadataPollOption {
  readonly optionText?: string;
  readonly tally?: string;
}
export interface LiveChatPollDetailsPollMetadataPollOptionEncoded {
  readonly optionText?: string;
  readonly tally?: string;
}
export const LiveChatPollDetailsPollMetadataPollOption: Schema.Schema<LiveChatPollDetailsPollMetadataPollOption, LiveChatPollDetailsPollMetadataPollOptionEncoded, never> = Schema.Struct({
  optionText: Schema.optional(Schema.String),
  tally: Schema.optional(Schema.String),
});

export interface LiveChatSuperChatDetails {
  readonly amountDisplayString?: string;
  readonly amountMicros?: string;
  readonly currency?: string;
  readonly tier?: number;
  readonly userComment?: string;
}
export interface LiveChatSuperChatDetailsEncoded {
  readonly amountDisplayString?: string;
  readonly amountMicros?: string;
  readonly currency?: string;
  readonly tier?: number;
  readonly userComment?: string;
}
export const LiveChatSuperChatDetails: Schema.Schema<LiveChatSuperChatDetails, LiveChatSuperChatDetailsEncoded, never> = Schema.Struct({
  amountDisplayString: Schema.optional(Schema.String),
  amountMicros: Schema.optional(Schema.String),
  currency: Schema.optional(Schema.String),
  tier: Schema.optional(Schema.Int),
  userComment: Schema.optional(Schema.String),
});

export interface LiveChatSuperStickerDetails {
  readonly amountDisplayString?: string;
  readonly amountMicros?: string;
  readonly currency?: string;
  readonly superStickerMetadata?: SuperStickerMetadata;
  readonly tier?: number;
}
export interface LiveChatSuperStickerDetailsEncoded {
  readonly amountDisplayString?: string;
  readonly amountMicros?: string;
  readonly currency?: string;
  readonly superStickerMetadata?: SuperStickerMetadataEncoded;
  readonly tier?: number;
}
export const LiveChatSuperStickerDetails: Schema.Schema<LiveChatSuperStickerDetails, LiveChatSuperStickerDetailsEncoded, never> = Schema.Struct({
  amountDisplayString: Schema.optional(Schema.String),
  amountMicros: Schema.optional(Schema.String),
  currency: Schema.optional(Schema.String),
  superStickerMetadata: Schema.optional(Schema.suspend(() => SuperStickerMetadata)),
  tier: Schema.optional(Schema.Int),
});

export interface LiveChatTextMessageDetails {
  readonly messageText?: string;
}
export interface LiveChatTextMessageDetailsEncoded {
  readonly messageText?: string;
}
export const LiveChatTextMessageDetails: Schema.Schema<LiveChatTextMessageDetails, LiveChatTextMessageDetailsEncoded, never> = Schema.Struct({
  messageText: Schema.optional(Schema.String),
});

export interface LiveChatUserBannedMessageDetails {
  readonly banDurationSeconds?: string;
  readonly bannedUserDetails?: ChannelProfileDetails;
  readonly banType?: "permanent" | "temporary";
}
export interface LiveChatUserBannedMessageDetailsEncoded {
  readonly banDurationSeconds?: string;
  readonly bannedUserDetails?: ChannelProfileDetailsEncoded;
  readonly banType?: "permanent" | "temporary";
}
export const LiveChatUserBannedMessageDetails: Schema.Schema<LiveChatUserBannedMessageDetails, LiveChatUserBannedMessageDetailsEncoded, never> = Schema.Struct({
  banDurationSeconds: Schema.optional(Schema.String),
  bannedUserDetails: Schema.optional(Schema.suspend(() => ChannelProfileDetails)),
  banType: Schema.optional(Schema.Union(Schema.Literal("permanent"), Schema.Literal("temporary"))),
});

/** A live stream describes a live ingestion point. */
export interface LiveStream {
  readonly cdn?: CdnSettings;
  readonly contentDetails?: LiveStreamContentDetails;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: LiveStreamSnippet;
  readonly status?: LiveStreamStatus;
}
export interface LiveStreamEncoded {
  readonly cdn?: CdnSettingsEncoded;
  readonly contentDetails?: LiveStreamContentDetailsEncoded;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: LiveStreamSnippetEncoded;
  readonly status?: LiveStreamStatusEncoded;
}
export const LiveStream: Schema.Schema<LiveStream, LiveStreamEncoded, never> = Schema.Struct({
  cdn: Schema.optional(Schema.suspend(() => CdnSettings)),
  contentDetails: Schema.optional(Schema.suspend(() => LiveStreamContentDetails)),
  etag: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  snippet: Schema.optional(Schema.suspend(() => LiveStreamSnippet)),
  status: Schema.optional(Schema.suspend(() => LiveStreamStatus)),
});

export interface LiveStreamConfigurationIssue {
  readonly description?: string;
  readonly reason?: string;
  readonly severity?: "info" | "warning" | "error";
  readonly type?: "gopSizeOver" | "gopSizeLong" | "gopSizeShort" | "openGop" | "badContainer" | "audioBitrateHigh" | "audioBitrateLow" | "audioSampleRate" | "bitrateHigh" | "bitrateLow" | "audioCodec" | "videoCodec" | "noAudioStream" | "noVideoStream" | "multipleVideoStreams" | "multipleAudioStreams" | "audioTooManyChannels" | "interlacedVideo" | "frameRateHigh" | "resolutionMismatch" | "videoCodecMismatch" | "videoInterlaceMismatch" | "videoProfileMismatch" | "videoBitrateMismatch" | "framerateMismatch" | "gopMismatch" | "audioSampleRateMismatch" | "audioStereoMismatch" | "audioCodecMismatch" | "audioBitrateMismatch" | "videoResolutionSuboptimal" | "videoResolutionUnsupported" | "videoIngestionStarved" | "videoIngestionFasterThanRealtime";
}
export interface LiveStreamConfigurationIssueEncoded {
  readonly description?: string;
  readonly reason?: string;
  readonly severity?: "info" | "warning" | "error";
  readonly type?: "gopSizeOver" | "gopSizeLong" | "gopSizeShort" | "openGop" | "badContainer" | "audioBitrateHigh" | "audioBitrateLow" | "audioSampleRate" | "bitrateHigh" | "bitrateLow" | "audioCodec" | "videoCodec" | "noAudioStream" | "noVideoStream" | "multipleVideoStreams" | "multipleAudioStreams" | "audioTooManyChannels" | "interlacedVideo" | "frameRateHigh" | "resolutionMismatch" | "videoCodecMismatch" | "videoInterlaceMismatch" | "videoProfileMismatch" | "videoBitrateMismatch" | "framerateMismatch" | "gopMismatch" | "audioSampleRateMismatch" | "audioStereoMismatch" | "audioCodecMismatch" | "audioBitrateMismatch" | "videoResolutionSuboptimal" | "videoResolutionUnsupported" | "videoIngestionStarved" | "videoIngestionFasterThanRealtime";
}
export const LiveStreamConfigurationIssue: Schema.Schema<LiveStreamConfigurationIssue, LiveStreamConfigurationIssueEncoded, never> = Schema.Struct({
  description: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  severity: Schema.optional(Schema.Union(Schema.Literal("info"), Schema.Literal("warning"), Schema.Literal("error"))),
  type: Schema.optional(Schema.Union(Schema.Literal("gopSizeOver"), Schema.Literal("gopSizeLong"), Schema.Literal("gopSizeShort"), Schema.Literal("openGop"), Schema.Literal("badContainer"), Schema.Literal("audioBitrateHigh"), Schema.Literal("audioBitrateLow"), Schema.Literal("audioSampleRate"), Schema.Literal("bitrateHigh"), Schema.Literal("bitrateLow"), Schema.Literal("audioCodec"), Schema.Literal("videoCodec"), Schema.Literal("noAudioStream"), Schema.Literal("noVideoStream"), Schema.Literal("multipleVideoStreams"), Schema.Literal("multipleAudioStreams"), Schema.Literal("audioTooManyChannels"), Schema.Literal("interlacedVideo"), Schema.Literal("frameRateHigh"), Schema.Literal("resolutionMismatch"), Schema.Literal("videoCodecMismatch"), Schema.Literal("videoInterlaceMismatch"), Schema.Literal("videoProfileMismatch"), Schema.Literal("videoBitrateMismatch"), Schema.Literal("framerateMismatch"), Schema.Literal("gopMismatch"), Schema.Literal("audioSampleRateMismatch"), Schema.Literal("audioStereoMismatch"), Schema.Literal("audioCodecMismatch"), Schema.Literal("audioBitrateMismatch"), Schema.Literal("videoResolutionSuboptimal"), Schema.Literal("videoResolutionUnsupported"), Schema.Literal("videoIngestionStarved"), Schema.Literal("videoIngestionFasterThanRealtime"))),
});

/** Detailed settings of a stream. */
export interface LiveStreamContentDetails {
  readonly closedCaptionsIngestionUrl?: string;
  readonly isReusable?: boolean;
}
export interface LiveStreamContentDetailsEncoded {
  readonly closedCaptionsIngestionUrl?: string;
  readonly isReusable?: boolean;
}
export const LiveStreamContentDetails: Schema.Schema<LiveStreamContentDetails, LiveStreamContentDetailsEncoded, never> = Schema.Struct({
  closedCaptionsIngestionUrl: Schema.optional(Schema.String),
  isReusable: Schema.optional(Schema.Boolean),
});

export interface LiveStreamHealthStatus {
  readonly configurationIssues?: ReadonlyArray<LiveStreamConfigurationIssue>;
  readonly lastUpdateTimeSeconds?: string;
  readonly status?: "good" | "ok" | "bad" | "noData" | "revoked";
}
export interface LiveStreamHealthStatusEncoded {
  readonly configurationIssues?: ReadonlyArray<LiveStreamConfigurationIssueEncoded>;
  readonly lastUpdateTimeSeconds?: string;
  readonly status?: "good" | "ok" | "bad" | "noData" | "revoked";
}
export const LiveStreamHealthStatus: Schema.Schema<LiveStreamHealthStatus, LiveStreamHealthStatusEncoded, never> = Schema.Struct({
  configurationIssues: Schema.optional(Schema.Array(Schema.suspend(() => LiveStreamConfigurationIssue))),
  lastUpdateTimeSeconds: Schema.optional(Schema.String),
  status: Schema.optional(Schema.Union(Schema.Literal("good"), Schema.Literal("ok"), Schema.Literal("bad"), Schema.Literal("noData"), Schema.Literal("revoked"))),
});

export interface LiveStreamListResponse {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<LiveStream>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfo;
  readonly prevPageToken?: string;
  readonly tokenPagination?: TokenPagination;
  readonly visitorId?: string;
}
export interface LiveStreamListResponseEncoded {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<LiveStreamEncoded>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfoEncoded;
  readonly prevPageToken?: string;
  readonly tokenPagination?: TokenPaginationEncoded;
  readonly visitorId?: string;
}
export const LiveStreamListResponse: Schema.Schema<LiveStreamListResponse, LiveStreamListResponseEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  eventId: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Schema.suspend(() => LiveStream))),
  kind: Schema.optional(Schema.String),
  nextPageToken: Schema.optional(Schema.String),
  pageInfo: Schema.optional(Schema.suspend(() => PageInfo)),
  prevPageToken: Schema.optional(Schema.String),
  tokenPagination: Schema.optional(Schema.suspend(() => TokenPagination)),
  visitorId: Schema.optional(Schema.String),
});

export interface LiveStreamSnippet {
  readonly channelId?: string;
  readonly description?: string;
  readonly isDefaultStream?: boolean;
  readonly publishedAt?: Date;
  readonly title?: string;
}
export interface LiveStreamSnippetEncoded {
  readonly channelId?: string;
  readonly description?: string;
  readonly isDefaultStream?: boolean;
  readonly publishedAt?: string;
  readonly title?: string;
}
export const LiveStreamSnippet: Schema.Schema<LiveStreamSnippet, LiveStreamSnippetEncoded, never> = Schema.Struct({
  channelId: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  isDefaultStream: Schema.optional(Schema.Boolean),
  publishedAt: Schema.optional(Schema.DateFromString),
  title: Schema.optional(Schema.String),
});

/** Brief description of the live stream status. */
export interface LiveStreamStatus {
  readonly healthStatus?: LiveStreamHealthStatus;
  readonly streamStatus?: "created" | "ready" | "active" | "inactive" | "error";
}
export interface LiveStreamStatusEncoded {
  readonly healthStatus?: LiveStreamHealthStatusEncoded;
  readonly streamStatus?: "created" | "ready" | "active" | "inactive" | "error";
}
export const LiveStreamStatus: Schema.Schema<LiveStreamStatus, LiveStreamStatusEncoded, never> = Schema.Struct({
  healthStatus: Schema.optional(Schema.suspend(() => LiveStreamHealthStatus)),
  streamStatus: Schema.optional(Schema.Union(Schema.Literal("created"), Schema.Literal("ready"), Schema.Literal("active"), Schema.Literal("inactive"), Schema.Literal("error"))),
});

export interface LocalizedProperty {
  readonly default?: string;
  readonly defaultLanguage?: LanguageTag;
  readonly localized?: ReadonlyArray<LocalizedString>;
}
export interface LocalizedPropertyEncoded {
  readonly default?: string;
  readonly defaultLanguage?: LanguageTagEncoded;
  readonly localized?: ReadonlyArray<LocalizedStringEncoded>;
}
export const LocalizedProperty: Schema.Schema<LocalizedProperty, LocalizedPropertyEncoded, never> = Schema.Struct({
  default: Schema.optional(Schema.String),
  defaultLanguage: Schema.optional(Schema.suspend(() => LanguageTag)),
  localized: Schema.optional(Schema.Array(Schema.suspend(() => LocalizedString))),
});

export interface LocalizedString {
  readonly language?: string;
  readonly value?: string;
}
export interface LocalizedStringEncoded {
  readonly language?: string;
  readonly value?: string;
}
export const LocalizedString: Schema.Schema<LocalizedString, LocalizedStringEncoded, never> = Schema.Struct({
  language: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
});

/** A *member* resource represents a member for a YouTube channel. A member provides recurring monetary support to a creator and receives special benefits. */
export interface Member {
  readonly etag?: string;
  readonly kind?: string;
  readonly snippet?: MemberSnippet;
}
export interface MemberEncoded {
  readonly etag?: string;
  readonly kind?: string;
  readonly snippet?: MemberSnippetEncoded;
}
export const Member: Schema.Schema<Member, MemberEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  snippet: Schema.optional(Schema.suspend(() => MemberSnippet)),
});

export interface MemberListResponse {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<Member>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfo;
  readonly tokenPagination?: TokenPagination;
  readonly visitorId?: string;
}
export interface MemberListResponseEncoded {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<MemberEncoded>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfoEncoded;
  readonly tokenPagination?: TokenPaginationEncoded;
  readonly visitorId?: string;
}
export const MemberListResponse: Schema.Schema<MemberListResponse, MemberListResponseEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  eventId: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Schema.suspend(() => Member))),
  kind: Schema.optional(Schema.String),
  nextPageToken: Schema.optional(Schema.String),
  pageInfo: Schema.optional(Schema.suspend(() => PageInfo)),
  tokenPagination: Schema.optional(Schema.suspend(() => TokenPagination)),
  visitorId: Schema.optional(Schema.String),
});

export interface MembershipsDetails {
  readonly accessibleLevels?: ReadonlyArray<string>;
  readonly highestAccessibleLevel?: string;
  readonly highestAccessibleLevelDisplayName?: string;
  readonly membershipsDuration?: MembershipsDuration;
  readonly membershipsDurationAtLevels?: ReadonlyArray<MembershipsDurationAtLevel>;
}
export interface MembershipsDetailsEncoded {
  readonly accessibleLevels?: ReadonlyArray<string>;
  readonly highestAccessibleLevel?: string;
  readonly highestAccessibleLevelDisplayName?: string;
  readonly membershipsDuration?: MembershipsDurationEncoded;
  readonly membershipsDurationAtLevels?: ReadonlyArray<MembershipsDurationAtLevelEncoded>;
}
export const MembershipsDetails: Schema.Schema<MembershipsDetails, MembershipsDetailsEncoded, never> = Schema.Struct({
  accessibleLevels: Schema.optional(Schema.Array(Schema.String)),
  highestAccessibleLevel: Schema.optional(Schema.String),
  highestAccessibleLevelDisplayName: Schema.optional(Schema.String),
  membershipsDuration: Schema.optional(Schema.suspend(() => MembershipsDuration)),
  membershipsDurationAtLevels: Schema.optional(Schema.Array(Schema.suspend(() => MembershipsDurationAtLevel))),
});

export interface MembershipsDuration {
  readonly memberSince?: string;
  readonly memberTotalDurationMonths?: number;
}
export interface MembershipsDurationEncoded {
  readonly memberSince?: string;
  readonly memberTotalDurationMonths?: number;
}
export const MembershipsDuration: Schema.Schema<MembershipsDuration, MembershipsDurationEncoded, never> = Schema.Struct({
  memberSince: Schema.optional(Schema.String),
  memberTotalDurationMonths: Schema.optional(Schema.Int),
});

export interface MembershipsDurationAtLevel {
  readonly level?: string;
  readonly memberSince?: string;
  readonly memberTotalDurationMonths?: number;
}
export interface MembershipsDurationAtLevelEncoded {
  readonly level?: string;
  readonly memberSince?: string;
  readonly memberTotalDurationMonths?: number;
}
export const MembershipsDurationAtLevel: Schema.Schema<MembershipsDurationAtLevel, MembershipsDurationAtLevelEncoded, never> = Schema.Struct({
  level: Schema.optional(Schema.String),
  memberSince: Schema.optional(Schema.String),
  memberTotalDurationMonths: Schema.optional(Schema.Int),
});

/** A *membershipsLevel* resource represents an offer made by YouTube creators for their fans. Users can become members of the channel by joining one of the available levels. They will provide recurring monetary support and receives special benefits. */
export interface MembershipsLevel {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: MembershipsLevelSnippet;
}
export interface MembershipsLevelEncoded {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: MembershipsLevelSnippetEncoded;
}
export const MembershipsLevel: Schema.Schema<MembershipsLevel, MembershipsLevelEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  snippet: Schema.optional(Schema.suspend(() => MembershipsLevelSnippet)),
});

export interface MembershipsLevelListResponse {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<MembershipsLevel>;
  readonly kind?: string;
  readonly visitorId?: string;
}
export interface MembershipsLevelListResponseEncoded {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<MembershipsLevelEncoded>;
  readonly kind?: string;
  readonly visitorId?: string;
}
export const MembershipsLevelListResponse: Schema.Schema<MembershipsLevelListResponse, MembershipsLevelListResponseEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  eventId: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Schema.suspend(() => MembershipsLevel))),
  kind: Schema.optional(Schema.String),
  visitorId: Schema.optional(Schema.String),
});

export interface MembershipsLevelSnippet {
  readonly creatorChannelId?: string;
  readonly levelDetails?: LevelDetails;
}
export interface MembershipsLevelSnippetEncoded {
  readonly creatorChannelId?: string;
  readonly levelDetails?: LevelDetailsEncoded;
}
export const MembershipsLevelSnippet: Schema.Schema<MembershipsLevelSnippet, MembershipsLevelSnippetEncoded, never> = Schema.Struct({
  creatorChannelId: Schema.optional(Schema.String),
  levelDetails: Schema.optional(Schema.suspend(() => LevelDetails)),
});

export interface MemberSnippet {
  readonly creatorChannelId?: string;
  readonly memberDetails?: ChannelProfileDetails;
  readonly membershipsDetails?: MembershipsDetails;
}
export interface MemberSnippetEncoded {
  readonly creatorChannelId?: string;
  readonly memberDetails?: ChannelProfileDetailsEncoded;
  readonly membershipsDetails?: MembershipsDetailsEncoded;
}
export const MemberSnippet: Schema.Schema<MemberSnippet, MemberSnippetEncoded, never> = Schema.Struct({
  creatorChannelId: Schema.optional(Schema.String),
  memberDetails: Schema.optional(Schema.suspend(() => ChannelProfileDetails)),
  membershipsDetails: Schema.optional(Schema.suspend(() => MembershipsDetails)),
});

/** Settings and Info of the monitor stream */
export interface MonitorStreamInfo {
  readonly broadcastStreamDelayMs?: number;
  readonly embedHtml?: string;
  readonly enableMonitorStream?: boolean;
}
export interface MonitorStreamInfoEncoded {
  readonly broadcastStreamDelayMs?: number;
  readonly embedHtml?: string;
  readonly enableMonitorStream?: boolean;
}
export const MonitorStreamInfo: Schema.Schema<MonitorStreamInfo, MonitorStreamInfoEncoded, never> = Schema.Struct({
  broadcastStreamDelayMs: Schema.optional(Schema.Int),
  embedHtml: Schema.optional(Schema.String),
  enableMonitorStream: Schema.optional(Schema.Boolean),
});

/** Paging details for lists of resources, including total number of items available and number of resources returned in a single page. */
export interface PageInfo {
  readonly resultsPerPage?: number;
  readonly totalResults?: number;
}
export interface PageInfoEncoded {
  readonly resultsPerPage?: number;
  readonly totalResults?: number;
}
export const PageInfo: Schema.Schema<PageInfo, PageInfoEncoded, never> = Schema.Struct({
  resultsPerPage: Schema.optional(Schema.Int),
  totalResults: Schema.optional(Schema.Int),
});

/** A *playlist* resource represents a YouTube playlist. A playlist is a collection of videos that can be viewed sequentially and shared with other users. A playlist can contain up to 200 videos, and YouTube does not limit the number of playlists that each user creates. By default, playlists are publicly visible to other users, but playlists can be public or private. YouTube also uses playlists to identify special collections of videos for a channel, such as: - uploaded videos - favorite videos - positively rated (liked) videos - watch history - watch later To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information. You can retrieve the playlist IDs for each of these lists from the channel resource for a given channel. You can then use the playlistItems.list method to retrieve any of those lists. You can also add or remove items from those lists by calling the playlistItems.insert and playlistItems.delete methods. */
export interface Playlist {
  readonly contentDetails?: PlaylistContentDetails;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly localizations?: Readonly<Record<string, PlaylistLocalization>>;
  readonly player?: PlaylistPlayer;
  readonly snippet?: PlaylistSnippet;
  readonly status?: PlaylistStatus;
}
export interface PlaylistEncoded {
  readonly contentDetails?: PlaylistContentDetailsEncoded;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly localizations?: Readonly<Record<string, PlaylistLocalizationEncoded>>;
  readonly player?: PlaylistPlayerEncoded;
  readonly snippet?: PlaylistSnippetEncoded;
  readonly status?: PlaylistStatusEncoded;
}
export const Playlist: Schema.Schema<Playlist, PlaylistEncoded, never> = Schema.Struct({
  contentDetails: Schema.optional(Schema.suspend(() => PlaylistContentDetails)),
  etag: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  localizations: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.suspend(() => PlaylistLocalization) })),
  player: Schema.optional(Schema.suspend(() => PlaylistPlayer)),
  snippet: Schema.optional(Schema.suspend(() => PlaylistSnippet)),
  status: Schema.optional(Schema.suspend(() => PlaylistStatus)),
});

export interface PlaylistContentDetails {
  readonly itemCount?: number;
}
export interface PlaylistContentDetailsEncoded {
  readonly itemCount?: number;
}
export const PlaylistContentDetails: Schema.Schema<PlaylistContentDetails, PlaylistContentDetailsEncoded, never> = Schema.Struct({
  itemCount: Schema.optional(Schema.Int),
});

export interface PlaylistImage {
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: PlaylistImageSnippet;
}
export interface PlaylistImageEncoded {
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: PlaylistImageSnippetEncoded;
}
export const PlaylistImage: Schema.Schema<PlaylistImage, PlaylistImageEncoded, never> = Schema.Struct({
  id: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  snippet: Schema.optional(Schema.suspend(() => PlaylistImageSnippet)),
});

export interface PlaylistImageListResponse {
  readonly items?: ReadonlyArray<PlaylistImage>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfo;
  readonly prevPageToken?: string;
}
export interface PlaylistImageListResponseEncoded {
  readonly items?: ReadonlyArray<PlaylistImageEncoded>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfoEncoded;
  readonly prevPageToken?: string;
}
export const PlaylistImageListResponse: Schema.Schema<PlaylistImageListResponse, PlaylistImageListResponseEncoded, never> = Schema.Struct({
  items: Schema.optional(Schema.Array(Schema.suspend(() => PlaylistImage))),
  kind: Schema.optional(Schema.String),
  nextPageToken: Schema.optional(Schema.String),
  pageInfo: Schema.optional(Schema.suspend(() => PageInfo)),
  prevPageToken: Schema.optional(Schema.String),
});

/** A *playlistImage* resource identifies another resource, such as a image, that is associated with a playlist. In addition, the playlistImage resource contains details about the included resource that pertain specifically to how that resource is used in that playlist. YouTube uses playlists to identify special collections of videos for a channel, such as: - uploaded videos - favorite videos - positively rated (liked) videos - watch history To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information. You can retrieve the playlist IDs for each of these lists from the channel resource for a given channel. You can then use the playlistImages.list method to retrieve image data for any of those playlists. You can also add or remove images from those lists by calling the playlistImages.insert and playlistImages.delete methods. */
export interface PlaylistImageSnippet {
  readonly height?: number;
  readonly playlistId?: string;
  readonly type?: "hero";
  readonly width?: number;
}
export interface PlaylistImageSnippetEncoded {
  readonly height?: number;
  readonly playlistId?: string;
  readonly type?: "hero";
  readonly width?: number;
}
export const PlaylistImageSnippet: Schema.Schema<PlaylistImageSnippet, PlaylistImageSnippetEncoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Int),
  playlistId: Schema.optional(Schema.String),
  type: Schema.optional(Schema.Union(Schema.Literal("hero"))),
  width: Schema.optional(Schema.Int),
});

/** A *playlistItem* resource identifies another resource, such as a video, that is included in a playlist. In addition, the playlistItem resource contains details about the included resource that pertain specifically to how that resource is used in that playlist. YouTube uses playlists to identify special collections of videos for a channel, such as: - uploaded videos - favorite videos - positively rated (liked) videos - watch history - watch later To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information. You can retrieve the playlist IDs for each of these lists from the channel resource for a given channel. You can then use the playlistItems.list method to retrieve any of those lists. You can also add or remove items from those lists by calling the playlistItems.insert and playlistItems.delete methods. For example, if a user gives a positive rating to a video, you would insert that video into the liked videos playlist for that user's channel. */
export interface PlaylistItem {
  readonly contentDetails?: PlaylistItemContentDetails;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: PlaylistItemSnippet;
  readonly status?: PlaylistItemStatus;
}
export interface PlaylistItemEncoded {
  readonly contentDetails?: PlaylistItemContentDetailsEncoded;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: PlaylistItemSnippetEncoded;
  readonly status?: PlaylistItemStatusEncoded;
}
export const PlaylistItem: Schema.Schema<PlaylistItem, PlaylistItemEncoded, never> = Schema.Struct({
  contentDetails: Schema.optional(Schema.suspend(() => PlaylistItemContentDetails)),
  etag: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  snippet: Schema.optional(Schema.suspend(() => PlaylistItemSnippet)),
  status: Schema.optional(Schema.suspend(() => PlaylistItemStatus)),
});

export interface PlaylistItemContentDetails {
  readonly endAt?: string;
  readonly note?: string;
  readonly startAt?: string;
  readonly videoId?: string;
  readonly videoPublishedAt?: Date;
}
export interface PlaylistItemContentDetailsEncoded {
  readonly endAt?: string;
  readonly note?: string;
  readonly startAt?: string;
  readonly videoId?: string;
  readonly videoPublishedAt?: string;
}
export const PlaylistItemContentDetails: Schema.Schema<PlaylistItemContentDetails, PlaylistItemContentDetailsEncoded, never> = Schema.Struct({
  endAt: Schema.optional(Schema.String),
  note: Schema.optional(Schema.String),
  startAt: Schema.optional(Schema.String),
  videoId: Schema.optional(Schema.String),
  videoPublishedAt: Schema.optional(Schema.DateFromString),
});

export interface PlaylistItemListResponse {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<PlaylistItem>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfo;
  readonly prevPageToken?: string;
  readonly tokenPagination?: TokenPagination;
  readonly visitorId?: string;
}
export interface PlaylistItemListResponseEncoded {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<PlaylistItemEncoded>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfoEncoded;
  readonly prevPageToken?: string;
  readonly tokenPagination?: TokenPaginationEncoded;
  readonly visitorId?: string;
}
export const PlaylistItemListResponse: Schema.Schema<PlaylistItemListResponse, PlaylistItemListResponseEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  eventId: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Schema.suspend(() => PlaylistItem))),
  kind: Schema.optional(Schema.String),
  nextPageToken: Schema.optional(Schema.String),
  pageInfo: Schema.optional(Schema.suspend(() => PageInfo)),
  prevPageToken: Schema.optional(Schema.String),
  tokenPagination: Schema.optional(Schema.suspend(() => TokenPagination)),
  visitorId: Schema.optional(Schema.String),
});

/** Basic details about a playlist, including title, description and thumbnails. Basic details of a YouTube Playlist item provided by the author. Next ID: 15 */
export interface PlaylistItemSnippet {
  readonly channelId?: string;
  readonly channelTitle?: string;
  readonly description?: string;
  readonly playlistId?: string;
  readonly position?: number;
  readonly publishedAt?: Date;
  readonly resourceId?: ResourceId;
  readonly thumbnails?: ThumbnailDetails;
  readonly title?: string;
  readonly videoOwnerChannelId?: string;
  readonly videoOwnerChannelTitle?: string;
}
export interface PlaylistItemSnippetEncoded {
  readonly channelId?: string;
  readonly channelTitle?: string;
  readonly description?: string;
  readonly playlistId?: string;
  readonly position?: number;
  readonly publishedAt?: string;
  readonly resourceId?: ResourceIdEncoded;
  readonly thumbnails?: ThumbnailDetailsEncoded;
  readonly title?: string;
  readonly videoOwnerChannelId?: string;
  readonly videoOwnerChannelTitle?: string;
}
export const PlaylistItemSnippet: Schema.Schema<PlaylistItemSnippet, PlaylistItemSnippetEncoded, never> = Schema.Struct({
  channelId: Schema.optional(Schema.String),
  channelTitle: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  playlistId: Schema.optional(Schema.String),
  position: Schema.optional(Schema.Int),
  publishedAt: Schema.optional(Schema.DateFromString),
  resourceId: Schema.optional(Schema.suspend(() => ResourceId)),
  thumbnails: Schema.optional(Schema.suspend(() => ThumbnailDetails)),
  title: Schema.optional(Schema.String),
  videoOwnerChannelId: Schema.optional(Schema.String),
  videoOwnerChannelTitle: Schema.optional(Schema.String),
});

/** Information about the playlist item's privacy status. */
export interface PlaylistItemStatus {
  readonly privacyStatus?: "public" | "unlisted" | "private";
}
export interface PlaylistItemStatusEncoded {
  readonly privacyStatus?: "public" | "unlisted" | "private";
}
export const PlaylistItemStatus: Schema.Schema<PlaylistItemStatus, PlaylistItemStatusEncoded, never> = Schema.Struct({
  privacyStatus: Schema.optional(Schema.Union(Schema.Literal("public"), Schema.Literal("unlisted"), Schema.Literal("private"))),
});

export interface PlaylistListResponse {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<Playlist>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfo;
  readonly prevPageToken?: string;
  readonly tokenPagination?: TokenPagination;
  readonly visitorId?: string;
}
export interface PlaylistListResponseEncoded {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<PlaylistEncoded>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfoEncoded;
  readonly prevPageToken?: string;
  readonly tokenPagination?: TokenPaginationEncoded;
  readonly visitorId?: string;
}
export const PlaylistListResponse: Schema.Schema<PlaylistListResponse, PlaylistListResponseEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  eventId: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Schema.suspend(() => Playlist))),
  kind: Schema.optional(Schema.String),
  nextPageToken: Schema.optional(Schema.String),
  pageInfo: Schema.optional(Schema.suspend(() => PageInfo)),
  prevPageToken: Schema.optional(Schema.String),
  tokenPagination: Schema.optional(Schema.suspend(() => TokenPagination)),
  visitorId: Schema.optional(Schema.String),
});

/** Playlist localization setting */
export interface PlaylistLocalization {
  readonly description?: string;
  readonly title?: string;
}
export interface PlaylistLocalizationEncoded {
  readonly description?: string;
  readonly title?: string;
}
export const PlaylistLocalization: Schema.Schema<PlaylistLocalization, PlaylistLocalizationEncoded, never> = Schema.Struct({
  description: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
});

export interface PlaylistPlayer {
  readonly embedHtml?: string;
}
export interface PlaylistPlayerEncoded {
  readonly embedHtml?: string;
}
export const PlaylistPlayer: Schema.Schema<PlaylistPlayer, PlaylistPlayerEncoded, never> = Schema.Struct({
  embedHtml: Schema.optional(Schema.String),
});

/** Basic details about a playlist, including title, description and thumbnails. */
export interface PlaylistSnippet {
  readonly channelId?: string;
  readonly channelTitle?: string;
  readonly defaultLanguage?: string;
  readonly description?: string;
  readonly localized?: PlaylistLocalization;
  readonly publishedAt?: Date;
  readonly tags?: ReadonlyArray<string>;
  readonly thumbnails?: ThumbnailDetails;
  readonly thumbnailVideoId?: string;
  readonly title?: string;
}
export interface PlaylistSnippetEncoded {
  readonly channelId?: string;
  readonly channelTitle?: string;
  readonly defaultLanguage?: string;
  readonly description?: string;
  readonly localized?: PlaylistLocalizationEncoded;
  readonly publishedAt?: string;
  readonly tags?: ReadonlyArray<string>;
  readonly thumbnails?: ThumbnailDetailsEncoded;
  readonly thumbnailVideoId?: string;
  readonly title?: string;
}
export const PlaylistSnippet: Schema.Schema<PlaylistSnippet, PlaylistSnippetEncoded, never> = Schema.Struct({
  channelId: Schema.optional(Schema.String),
  channelTitle: Schema.optional(Schema.String),
  defaultLanguage: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  localized: Schema.optional(Schema.suspend(() => PlaylistLocalization)),
  publishedAt: Schema.optional(Schema.DateFromString),
  tags: Schema.optional(Schema.Array(Schema.String)),
  thumbnails: Schema.optional(Schema.suspend(() => ThumbnailDetails)),
  thumbnailVideoId: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
});

export interface PlaylistStatus {
  readonly podcastStatus?: "enabled" | "disabled";
  readonly privacyStatus?: "public" | "unlisted" | "private";
}
export interface PlaylistStatusEncoded {
  readonly podcastStatus?: "enabled" | "disabled";
  readonly privacyStatus?: "public" | "unlisted" | "private";
}
export const PlaylistStatus: Schema.Schema<PlaylistStatus, PlaylistStatusEncoded, never> = Schema.Struct({
  podcastStatus: Schema.optional(Schema.Union(Schema.Literal("enabled"), Schema.Literal("disabled"))),
  privacyStatus: Schema.optional(Schema.Union(Schema.Literal("public"), Schema.Literal("unlisted"), Schema.Literal("private"))),
});

/** A pair Property / Value. */
export interface PropertyValue {
  readonly property?: string;
  readonly value?: string;
}
export interface PropertyValueEncoded {
  readonly property?: string;
  readonly value?: string;
}
export const PropertyValue: Schema.Schema<PropertyValue, PropertyValueEncoded, never> = Schema.Struct({
  property: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
});

export interface RelatedEntity {
  readonly entity?: Entity;
}
export interface RelatedEntityEncoded {
  readonly entity?: EntityEncoded;
}
export const RelatedEntity: Schema.Schema<RelatedEntity, RelatedEntityEncoded, never> = Schema.Struct({
  entity: Schema.optional(Schema.suspend(() => Entity)),
});

/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
export interface ReportingEmpty {

}
export interface ReportingEmptyEncoded {

}
export const ReportingEmpty: Schema.Schema<ReportingEmpty, ReportingEmptyEncoded, never> = Schema.Struct({

});

/** gdata */
export interface ReportingGdataBlobstore2Info {
  readonly blobGeneration?: string;
  readonly blobId?: string;
  readonly downloadExternalReadToken?: string;
  readonly downloadReadHandle?: string;
  readonly readToken?: string;
  readonly uploadFragmentListCreationInfo?: string;
  readonly uploadMetadataContainer?: string;
}
export interface ReportingGdataBlobstore2InfoEncoded {
  readonly blobGeneration?: string;
  readonly blobId?: string;
  readonly downloadExternalReadToken?: string;
  readonly downloadReadHandle?: string;
  readonly readToken?: string;
  readonly uploadFragmentListCreationInfo?: string;
  readonly uploadMetadataContainer?: string;
}
export const ReportingGdataBlobstore2Info: Schema.Schema<ReportingGdataBlobstore2Info, ReportingGdataBlobstore2InfoEncoded, never> = Schema.Struct({
  blobGeneration: Schema.optional(Schema.String),
  blobId: Schema.optional(Schema.String),
  downloadExternalReadToken: Schema.optional(Schema.String),
  downloadReadHandle: Schema.optional(Schema.String),
  readToken: Schema.optional(Schema.String),
  uploadFragmentListCreationInfo: Schema.optional(Schema.String),
  uploadMetadataContainer: Schema.optional(Schema.String),
});

/** gdata */
export interface ReportingGdataCompositeMedia {
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
}
export interface ReportingGdataCompositeMediaEncoded {
  readonly blobRef?: string;
  readonly blobstore2Info?: ReportingGdataBlobstore2InfoEncoded;
  readonly cosmoBinaryReference?: string;
  readonly crc32cHash?: number;
  readonly inline?: string;
  readonly length?: string;
  readonly md5Hash?: string;
  readonly objectId?: ReportingGdataObjectIdEncoded;
  readonly path?: string;
  readonly referenceType?: "PATH" | "BLOB_REF" | "INLINE" | "BIGSTORE_REF" | "COSMO_BINARY_REFERENCE";
  readonly sha1Hash?: string;
}
export const ReportingGdataCompositeMedia: Schema.Schema<ReportingGdataCompositeMedia, ReportingGdataCompositeMediaEncoded, never> = Schema.Struct({
  blobRef: Schema.optional(Schema.String),
  blobstore2Info: Schema.optional(Schema.suspend(() => ReportingGdataBlobstore2Info)),
  cosmoBinaryReference: Schema.optional(Schema.String),
  crc32cHash: Schema.optional(Schema.Int),
  inline: Schema.optional(Schema.String),
  length: Schema.optional(Schema.String),
  md5Hash: Schema.optional(Schema.String),
  objectId: Schema.optional(Schema.suspend(() => ReportingGdataObjectId)),
  path: Schema.optional(Schema.String),
  referenceType: Schema.optional(Schema.Union(Schema.Literal("PATH"), Schema.Literal("BLOB_REF"), Schema.Literal("INLINE"), Schema.Literal("BIGSTORE_REF"), Schema.Literal("COSMO_BINARY_REFERENCE"))),
  sha1Hash: Schema.optional(Schema.String),
});

/** gdata */
export interface ReportingGdataContentTypeInfo {
  readonly bestGuess?: string;
  readonly fromBytes?: string;
  readonly fromFileName?: string;
  readonly fromFusionId?: string;
  readonly fromHeader?: string;
  readonly fromUrlPath?: string;
  readonly fusionIdDetectionMetadata?: string;
}
export interface ReportingGdataContentTypeInfoEncoded {
  readonly bestGuess?: string;
  readonly fromBytes?: string;
  readonly fromFileName?: string;
  readonly fromFusionId?: string;
  readonly fromHeader?: string;
  readonly fromUrlPath?: string;
  readonly fusionIdDetectionMetadata?: string;
}
export const ReportingGdataContentTypeInfo: Schema.Schema<ReportingGdataContentTypeInfo, ReportingGdataContentTypeInfoEncoded, never> = Schema.Struct({
  bestGuess: Schema.optional(Schema.String),
  fromBytes: Schema.optional(Schema.String),
  fromFileName: Schema.optional(Schema.String),
  fromFusionId: Schema.optional(Schema.String),
  fromHeader: Schema.optional(Schema.String),
  fromUrlPath: Schema.optional(Schema.String),
  fusionIdDetectionMetadata: Schema.optional(Schema.String),
});

/** gdata */
export interface ReportingGdataDiffChecksumsResponse {
  readonly checksumsLocation?: ReportingGdataCompositeMedia;
  readonly chunkSizeBytes?: string;
  readonly objectLocation?: ReportingGdataCompositeMedia;
  readonly objectSizeBytes?: string;
  readonly objectVersion?: string;
}
export interface ReportingGdataDiffChecksumsResponseEncoded {
  readonly checksumsLocation?: ReportingGdataCompositeMediaEncoded;
  readonly chunkSizeBytes?: string;
  readonly objectLocation?: ReportingGdataCompositeMediaEncoded;
  readonly objectSizeBytes?: string;
  readonly objectVersion?: string;
}
export const ReportingGdataDiffChecksumsResponse: Schema.Schema<ReportingGdataDiffChecksumsResponse, ReportingGdataDiffChecksumsResponseEncoded, never> = Schema.Struct({
  checksumsLocation: Schema.optional(Schema.suspend(() => ReportingGdataCompositeMedia)),
  chunkSizeBytes: Schema.optional(Schema.String),
  objectLocation: Schema.optional(Schema.suspend(() => ReportingGdataCompositeMedia)),
  objectSizeBytes: Schema.optional(Schema.String),
  objectVersion: Schema.optional(Schema.String),
});

/** gdata */
export interface ReportingGdataDiffDownloadResponse {
  readonly objectLocation?: ReportingGdataCompositeMedia;
}
export interface ReportingGdataDiffDownloadResponseEncoded {
  readonly objectLocation?: ReportingGdataCompositeMediaEncoded;
}
export const ReportingGdataDiffDownloadResponse: Schema.Schema<ReportingGdataDiffDownloadResponse, ReportingGdataDiffDownloadResponseEncoded, never> = Schema.Struct({
  objectLocation: Schema.optional(Schema.suspend(() => ReportingGdataCompositeMedia)),
});

/** gdata */
export interface ReportingGdataDiffUploadRequest {
  readonly checksumsInfo?: ReportingGdataCompositeMedia;
  readonly objectInfo?: ReportingGdataCompositeMedia;
  readonly objectVersion?: string;
}
export interface ReportingGdataDiffUploadRequestEncoded {
  readonly checksumsInfo?: ReportingGdataCompositeMediaEncoded;
  readonly objectInfo?: ReportingGdataCompositeMediaEncoded;
  readonly objectVersion?: string;
}
export const ReportingGdataDiffUploadRequest: Schema.Schema<ReportingGdataDiffUploadRequest, ReportingGdataDiffUploadRequestEncoded, never> = Schema.Struct({
  checksumsInfo: Schema.optional(Schema.suspend(() => ReportingGdataCompositeMedia)),
  objectInfo: Schema.optional(Schema.suspend(() => ReportingGdataCompositeMedia)),
  objectVersion: Schema.optional(Schema.String),
});

/** gdata */
export interface ReportingGdataDiffUploadResponse {
  readonly objectVersion?: string;
  readonly originalObject?: ReportingGdataCompositeMedia;
}
export interface ReportingGdataDiffUploadResponseEncoded {
  readonly objectVersion?: string;
  readonly originalObject?: ReportingGdataCompositeMediaEncoded;
}
export const ReportingGdataDiffUploadResponse: Schema.Schema<ReportingGdataDiffUploadResponse, ReportingGdataDiffUploadResponseEncoded, never> = Schema.Struct({
  objectVersion: Schema.optional(Schema.String),
  originalObject: Schema.optional(Schema.suspend(() => ReportingGdataCompositeMedia)),
});

/** gdata */
export interface ReportingGdataDiffVersionResponse {
  readonly objectSizeBytes?: string;
  readonly objectVersion?: string;
}
export interface ReportingGdataDiffVersionResponseEncoded {
  readonly objectSizeBytes?: string;
  readonly objectVersion?: string;
}
export const ReportingGdataDiffVersionResponse: Schema.Schema<ReportingGdataDiffVersionResponse, ReportingGdataDiffVersionResponseEncoded, never> = Schema.Struct({
  objectSizeBytes: Schema.optional(Schema.String),
  objectVersion: Schema.optional(Schema.String),
});

/** gdata */
export interface ReportingGdataDownloadParameters {
  readonly allowGzipCompression?: boolean;
  readonly ignoreRange?: boolean;
}
export interface ReportingGdataDownloadParametersEncoded {
  readonly allowGzipCompression?: boolean;
  readonly ignoreRange?: boolean;
}
export const ReportingGdataDownloadParameters: Schema.Schema<ReportingGdataDownloadParameters, ReportingGdataDownloadParametersEncoded, never> = Schema.Struct({
  allowGzipCompression: Schema.optional(Schema.Boolean),
  ignoreRange: Schema.optional(Schema.Boolean),
});

/** gdata */
export interface ReportingGdataMedia {
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
}
export interface ReportingGdataMediaEncoded {
  readonly algorithm?: string;
  readonly bigstoreObjectRef?: string;
  readonly blobRef?: string;
  readonly blobstore2Info?: ReportingGdataBlobstore2InfoEncoded;
  readonly compositeMedia?: ReadonlyArray<ReportingGdataCompositeMediaEncoded>;
  readonly contentType?: string;
  readonly contentTypeInfo?: ReportingGdataContentTypeInfoEncoded;
  readonly cosmoBinaryReference?: string;
  readonly crc32cHash?: number;
  readonly diffChecksumsResponse?: ReportingGdataDiffChecksumsResponseEncoded;
  readonly diffDownloadResponse?: ReportingGdataDiffDownloadResponseEncoded;
  readonly diffUploadRequest?: ReportingGdataDiffUploadRequestEncoded;
  readonly diffUploadResponse?: ReportingGdataDiffUploadResponseEncoded;
  readonly diffVersionResponse?: ReportingGdataDiffVersionResponseEncoded;
  readonly downloadParameters?: ReportingGdataDownloadParametersEncoded;
  readonly filename?: string;
  readonly hash?: string;
  readonly hashVerified?: boolean;
  readonly inline?: string;
  readonly isPotentialRetry?: boolean;
  readonly length?: string;
  readonly md5Hash?: string;
  readonly mediaId?: string;
  readonly objectId?: ReportingGdataObjectIdEncoded;
  readonly path?: string;
  readonly referenceType?: "PATH" | "BLOB_REF" | "INLINE" | "GET_MEDIA" | "COMPOSITE_MEDIA" | "BIGSTORE_REF" | "DIFF_VERSION_RESPONSE" | "DIFF_CHECKSUMS_RESPONSE" | "DIFF_DOWNLOAD_RESPONSE" | "DIFF_UPLOAD_REQUEST" | "DIFF_UPLOAD_RESPONSE" | "COSMO_BINARY_REFERENCE" | "ARBITRARY_BYTES";
  readonly sha1Hash?: string;
  readonly sha256Hash?: string;
  readonly sha512Hash?: string;
  readonly timestamp?: string;
  readonly token?: string;
}
export const ReportingGdataMedia: Schema.Schema<ReportingGdataMedia, ReportingGdataMediaEncoded, never> = Schema.Struct({
  algorithm: Schema.optional(Schema.String),
  bigstoreObjectRef: Schema.optional(Schema.String),
  blobRef: Schema.optional(Schema.String),
  blobstore2Info: Schema.optional(Schema.suspend(() => ReportingGdataBlobstore2Info)),
  compositeMedia: Schema.optional(Schema.Array(Schema.suspend(() => ReportingGdataCompositeMedia))),
  contentType: Schema.optional(Schema.String),
  contentTypeInfo: Schema.optional(Schema.suspend(() => ReportingGdataContentTypeInfo)),
  cosmoBinaryReference: Schema.optional(Schema.String),
  crc32cHash: Schema.optional(Schema.Int),
  diffChecksumsResponse: Schema.optional(Schema.suspend(() => ReportingGdataDiffChecksumsResponse)),
  diffDownloadResponse: Schema.optional(Schema.suspend(() => ReportingGdataDiffDownloadResponse)),
  diffUploadRequest: Schema.optional(Schema.suspend(() => ReportingGdataDiffUploadRequest)),
  diffUploadResponse: Schema.optional(Schema.suspend(() => ReportingGdataDiffUploadResponse)),
  diffVersionResponse: Schema.optional(Schema.suspend(() => ReportingGdataDiffVersionResponse)),
  downloadParameters: Schema.optional(Schema.suspend(() => ReportingGdataDownloadParameters)),
  filename: Schema.optional(Schema.String),
  hash: Schema.optional(Schema.String),
  hashVerified: Schema.optional(Schema.Boolean),
  inline: Schema.optional(Schema.String),
  isPotentialRetry: Schema.optional(Schema.Boolean),
  length: Schema.optional(Schema.String),
  md5Hash: Schema.optional(Schema.String),
  mediaId: Schema.optional(Schema.String),
  objectId: Schema.optional(Schema.suspend(() => ReportingGdataObjectId)),
  path: Schema.optional(Schema.String),
  referenceType: Schema.optional(Schema.Union(Schema.Literal("PATH"), Schema.Literal("BLOB_REF"), Schema.Literal("INLINE"), Schema.Literal("GET_MEDIA"), Schema.Literal("COMPOSITE_MEDIA"), Schema.Literal("BIGSTORE_REF"), Schema.Literal("DIFF_VERSION_RESPONSE"), Schema.Literal("DIFF_CHECKSUMS_RESPONSE"), Schema.Literal("DIFF_DOWNLOAD_RESPONSE"), Schema.Literal("DIFF_UPLOAD_REQUEST"), Schema.Literal("DIFF_UPLOAD_RESPONSE"), Schema.Literal("COSMO_BINARY_REFERENCE"), Schema.Literal("ARBITRARY_BYTES"))),
  sha1Hash: Schema.optional(Schema.String),
  sha256Hash: Schema.optional(Schema.String),
  sha512Hash: Schema.optional(Schema.String),
  timestamp: Schema.optional(Schema.String),
  token: Schema.optional(Schema.String),
});

/** gdata */
export interface ReportingGdataObjectId {
  readonly bucketName?: string;
  readonly generation?: string;
  readonly objectName?: string;
}
export interface ReportingGdataObjectIdEncoded {
  readonly bucketName?: string;
  readonly generation?: string;
  readonly objectName?: string;
}
export const ReportingGdataObjectId: Schema.Schema<ReportingGdataObjectId, ReportingGdataObjectIdEncoded, never> = Schema.Struct({
  bucketName: Schema.optional(Schema.String),
  generation: Schema.optional(Schema.String),
  objectName: Schema.optional(Schema.String),
});

/** A job creating reports of a specific type. */
export interface ReportingJob {
  readonly createTime?: string;
  readonly expireTime?: string;
  readonly id?: string;
  readonly name?: string;
  readonly reportTypeId?: string;
  readonly systemManaged?: boolean;
}
export interface ReportingJobEncoded {
  readonly createTime?: string;
  readonly expireTime?: string;
  readonly id?: string;
  readonly name?: string;
  readonly reportTypeId?: string;
  readonly systemManaged?: boolean;
}
export const ReportingJob: Schema.Schema<ReportingJob, ReportingJobEncoded, never> = Schema.Struct({
  createTime: Schema.optional(Schema.String),
  expireTime: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  reportTypeId: Schema.optional(Schema.String),
  systemManaged: Schema.optional(Schema.Boolean),
});

/** Response message for ReportingService.ListJobs. */
export interface ReportingListJobsResponse {
  readonly jobs?: ReadonlyArray<ReportingJob>;
  readonly nextPageToken?: string;
}
export interface ReportingListJobsResponseEncoded {
  readonly jobs?: ReadonlyArray<ReportingJobEncoded>;
  readonly nextPageToken?: string;
}
export const ReportingListJobsResponse: Schema.Schema<ReportingListJobsResponse, ReportingListJobsResponseEncoded, never> = Schema.Struct({
  jobs: Schema.optional(Schema.Array(Schema.suspend(() => ReportingJob))),
  nextPageToken: Schema.optional(Schema.String),
});

/** Response message for ReportingService.ListReports. */
export interface ReportingListReportsResponse {
  readonly nextPageToken?: string;
  readonly reports?: ReadonlyArray<ReportingReport>;
}
export interface ReportingListReportsResponseEncoded {
  readonly nextPageToken?: string;
  readonly reports?: ReadonlyArray<ReportingReportEncoded>;
}
export const ReportingListReportsResponse: Schema.Schema<ReportingListReportsResponse, ReportingListReportsResponseEncoded, never> = Schema.Struct({
  nextPageToken: Schema.optional(Schema.String),
  reports: Schema.optional(Schema.Array(Schema.suspend(() => ReportingReport))),
});

/** Response message for ReportingService.ListReportTypes. */
export interface ReportingListReportTypesResponse {
  readonly nextPageToken?: string;
  readonly reportTypes?: ReadonlyArray<ReportingReportType>;
}
export interface ReportingListReportTypesResponseEncoded {
  readonly nextPageToken?: string;
  readonly reportTypes?: ReadonlyArray<ReportingReportTypeEncoded>;
}
export const ReportingListReportTypesResponse: Schema.Schema<ReportingListReportTypesResponse, ReportingListReportTypesResponseEncoded, never> = Schema.Struct({
  nextPageToken: Schema.optional(Schema.String),
  reportTypes: Schema.optional(Schema.Array(Schema.suspend(() => ReportingReportType))),
});

/** A report's metadata including the URL from which the report itself can be downloaded. */
export interface ReportingReport {
  readonly createTime?: string;
  readonly downloadUrl?: string;
  readonly endTime?: string;
  readonly id?: string;
  readonly jobExpireTime?: string;
  readonly jobId?: string;
  readonly startTime?: string;
}
export interface ReportingReportEncoded {
  readonly createTime?: string;
  readonly downloadUrl?: string;
  readonly endTime?: string;
  readonly id?: string;
  readonly jobExpireTime?: string;
  readonly jobId?: string;
  readonly startTime?: string;
}
export const ReportingReport: Schema.Schema<ReportingReport, ReportingReportEncoded, never> = Schema.Struct({
  createTime: Schema.optional(Schema.String),
  downloadUrl: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  jobExpireTime: Schema.optional(Schema.String),
  jobId: Schema.optional(Schema.String),
  startTime: Schema.optional(Schema.String),
});

/** A report type. */
export interface ReportingReportType {
  readonly deprecateTime?: string;
  readonly id?: string;
  readonly name?: string;
  readonly systemManaged?: boolean;
}
export interface ReportingReportTypeEncoded {
  readonly deprecateTime?: string;
  readonly id?: string;
  readonly name?: string;
  readonly systemManaged?: boolean;
}
export const ReportingReportType: Schema.Schema<ReportingReportType, ReportingReportTypeEncoded, never> = Schema.Struct({
  deprecateTime: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  systemManaged: Schema.optional(Schema.Boolean),
});

/** A resource id is a generic reference that points to another YouTube resource. */
export interface ResourceId {
  readonly channelId?: string;
  readonly kind?: string;
  readonly playlistId?: string;
  readonly videoId?: string;
}
export interface ResourceIdEncoded {
  readonly channelId?: string;
  readonly kind?: string;
  readonly playlistId?: string;
  readonly videoId?: string;
}
export const ResourceId: Schema.Schema<ResourceId, ResourceIdEncoded, never> = Schema.Struct({
  channelId: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  playlistId: Schema.optional(Schema.String),
  videoId: Schema.optional(Schema.String),
});

export interface SearchListResponse {
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
}
export interface SearchListResponseEncoded {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<SearchResultEncoded>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfoEncoded;
  readonly prevPageToken?: string;
  readonly regionCode?: string;
  readonly tokenPagination?: TokenPaginationEncoded;
  readonly visitorId?: string;
}
export const SearchListResponse: Schema.Schema<SearchListResponse, SearchListResponseEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  eventId: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Schema.suspend(() => SearchResult))),
  kind: Schema.optional(Schema.String),
  nextPageToken: Schema.optional(Schema.String),
  pageInfo: Schema.optional(Schema.suspend(() => PageInfo)),
  prevPageToken: Schema.optional(Schema.String),
  regionCode: Schema.optional(Schema.String),
  tokenPagination: Schema.optional(Schema.suspend(() => TokenPagination)),
  visitorId: Schema.optional(Schema.String),
});

/** A search result contains information about a YouTube video, channel, or playlist that matches the search parameters specified in an API request. While a search result points to a uniquely identifiable resource, like a video, it does not have its own persistent data. */
export interface SearchResult {
  readonly etag?: string;
  readonly id?: ResourceId;
  readonly kind?: string;
  readonly snippet?: SearchResultSnippet;
}
export interface SearchResultEncoded {
  readonly etag?: string;
  readonly id?: ResourceIdEncoded;
  readonly kind?: string;
  readonly snippet?: SearchResultSnippetEncoded;
}
export const SearchResult: Schema.Schema<SearchResult, SearchResultEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  id: Schema.optional(Schema.suspend(() => ResourceId)),
  kind: Schema.optional(Schema.String),
  snippet: Schema.optional(Schema.suspend(() => SearchResultSnippet)),
});

/** Basic details about a search result, including title, description and thumbnails of the item referenced by the search result. */
export interface SearchResultSnippet {
  readonly channelId?: string;
  readonly channelTitle?: string;
  readonly description?: string;
  readonly liveBroadcastContent?: "none" | "upcoming" | "live" | "completed";
  readonly publishedAt?: Date;
  readonly thumbnails?: ThumbnailDetails;
  readonly title?: string;
}
export interface SearchResultSnippetEncoded {
  readonly channelId?: string;
  readonly channelTitle?: string;
  readonly description?: string;
  readonly liveBroadcastContent?: "none" | "upcoming" | "live" | "completed";
  readonly publishedAt?: string;
  readonly thumbnails?: ThumbnailDetailsEncoded;
  readonly title?: string;
}
export const SearchResultSnippet: Schema.Schema<SearchResultSnippet, SearchResultSnippetEncoded, never> = Schema.Struct({
  channelId: Schema.optional(Schema.String),
  channelTitle: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  liveBroadcastContent: Schema.optional(Schema.Union(Schema.Literal("none"), Schema.Literal("upcoming"), Schema.Literal("live"), Schema.Literal("completed"))),
  publishedAt: Schema.optional(Schema.DateFromString),
  thumbnails: Schema.optional(Schema.suspend(() => ThumbnailDetails)),
  title: Schema.optional(Schema.String),
});

/** A *subscription* resource contains information about a YouTube user subscription. A subscription notifies a user when new videos are added to a channel or when another user takes one of several actions on YouTube, such as uploading a video, rating a video, or commenting on a video. */
export interface Subscription {
  readonly contentDetails?: SubscriptionContentDetails;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: SubscriptionSnippet;
  readonly subscriberSnippet?: SubscriptionSubscriberSnippet;
}
export interface SubscriptionEncoded {
  readonly contentDetails?: SubscriptionContentDetailsEncoded;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: SubscriptionSnippetEncoded;
  readonly subscriberSnippet?: SubscriptionSubscriberSnippetEncoded;
}
export const Subscription: Schema.Schema<Subscription, SubscriptionEncoded, never> = Schema.Struct({
  contentDetails: Schema.optional(Schema.suspend(() => SubscriptionContentDetails)),
  etag: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  snippet: Schema.optional(Schema.suspend(() => SubscriptionSnippet)),
  subscriberSnippet: Schema.optional(Schema.suspend(() => SubscriptionSubscriberSnippet)),
});

/** Details about the content to witch a subscription refers. */
export interface SubscriptionContentDetails {
  readonly activityType?: "subscriptionActivityTypeUnspecified" | "all" | "uploads";
  readonly newItemCount?: number;
  readonly totalItemCount?: number;
}
export interface SubscriptionContentDetailsEncoded {
  readonly activityType?: "subscriptionActivityTypeUnspecified" | "all" | "uploads";
  readonly newItemCount?: number;
  readonly totalItemCount?: number;
}
export const SubscriptionContentDetails: Schema.Schema<SubscriptionContentDetails, SubscriptionContentDetailsEncoded, never> = Schema.Struct({
  activityType: Schema.optional(Schema.Union(Schema.Literal("subscriptionActivityTypeUnspecified"), Schema.Literal("all"), Schema.Literal("uploads"))),
  newItemCount: Schema.optional(Schema.Int),
  totalItemCount: Schema.optional(Schema.Int),
});

export interface SubscriptionListResponse {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<Subscription>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfo;
  readonly prevPageToken?: string;
  readonly tokenPagination?: TokenPagination;
  readonly visitorId?: string;
}
export interface SubscriptionListResponseEncoded {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<SubscriptionEncoded>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfoEncoded;
  readonly prevPageToken?: string;
  readonly tokenPagination?: TokenPaginationEncoded;
  readonly visitorId?: string;
}
export const SubscriptionListResponse: Schema.Schema<SubscriptionListResponse, SubscriptionListResponseEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  eventId: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Schema.suspend(() => Subscription))),
  kind: Schema.optional(Schema.String),
  nextPageToken: Schema.optional(Schema.String),
  pageInfo: Schema.optional(Schema.suspend(() => PageInfo)),
  prevPageToken: Schema.optional(Schema.String),
  tokenPagination: Schema.optional(Schema.suspend(() => TokenPagination)),
  visitorId: Schema.optional(Schema.String),
});

/** Basic details about a subscription, including title, description and thumbnails of the subscribed item. */
export interface SubscriptionSnippet {
  readonly channelId?: string;
  readonly description?: string;
  readonly publishedAt?: Date;
  readonly resourceId?: ResourceId;
  readonly thumbnails?: ThumbnailDetails;
  readonly title?: string;
}
export interface SubscriptionSnippetEncoded {
  readonly channelId?: string;
  readonly description?: string;
  readonly publishedAt?: string;
  readonly resourceId?: ResourceIdEncoded;
  readonly thumbnails?: ThumbnailDetailsEncoded;
  readonly title?: string;
}
export const SubscriptionSnippet: Schema.Schema<SubscriptionSnippet, SubscriptionSnippetEncoded, never> = Schema.Struct({
  channelId: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  publishedAt: Schema.optional(Schema.DateFromString),
  resourceId: Schema.optional(Schema.suspend(() => ResourceId)),
  thumbnails: Schema.optional(Schema.suspend(() => ThumbnailDetails)),
  title: Schema.optional(Schema.String),
});

/** Basic details about a subscription's subscriber including title, description, channel ID and thumbnails. */
export interface SubscriptionSubscriberSnippet {
  readonly channelId?: string;
  readonly description?: string;
  readonly thumbnails?: ThumbnailDetails;
  readonly title?: string;
}
export interface SubscriptionSubscriberSnippetEncoded {
  readonly channelId?: string;
  readonly description?: string;
  readonly thumbnails?: ThumbnailDetailsEncoded;
  readonly title?: string;
}
export const SubscriptionSubscriberSnippet: Schema.Schema<SubscriptionSubscriberSnippet, SubscriptionSubscriberSnippetEncoded, never> = Schema.Struct({
  channelId: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  thumbnails: Schema.optional(Schema.suspend(() => ThumbnailDetails)),
  title: Schema.optional(Schema.String),
});

/** A `__superChatEvent__` resource represents a Super Chat purchase on a YouTube channel. */
export interface SuperChatEvent {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: SuperChatEventSnippet;
}
export interface SuperChatEventEncoded {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: SuperChatEventSnippetEncoded;
}
export const SuperChatEvent: Schema.Schema<SuperChatEvent, SuperChatEventEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  snippet: Schema.optional(Schema.suspend(() => SuperChatEventSnippet)),
});

export interface SuperChatEventListResponse {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<SuperChatEvent>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfo;
  readonly tokenPagination?: TokenPagination;
  readonly visitorId?: string;
}
export interface SuperChatEventListResponseEncoded {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<SuperChatEventEncoded>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfoEncoded;
  readonly tokenPagination?: TokenPaginationEncoded;
  readonly visitorId?: string;
}
export const SuperChatEventListResponse: Schema.Schema<SuperChatEventListResponse, SuperChatEventListResponseEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  eventId: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Schema.suspend(() => SuperChatEvent))),
  kind: Schema.optional(Schema.String),
  nextPageToken: Schema.optional(Schema.String),
  pageInfo: Schema.optional(Schema.suspend(() => PageInfo)),
  tokenPagination: Schema.optional(Schema.suspend(() => TokenPagination)),
  visitorId: Schema.optional(Schema.String),
});

export interface SuperChatEventSnippet {
  readonly amountMicros?: string;
  readonly channelId?: string;
  readonly commentText?: string;
  readonly createdAt?: Date;
  readonly currency?: string;
  readonly displayString?: string;
  readonly isSuperStickerEvent?: boolean;
  readonly messageType?: number;
  readonly superStickerMetadata?: SuperStickerMetadata;
  readonly supporterDetails?: ChannelProfileDetails;
}
export interface SuperChatEventSnippetEncoded {
  readonly amountMicros?: string;
  readonly channelId?: string;
  readonly commentText?: string;
  readonly createdAt?: string;
  readonly currency?: string;
  readonly displayString?: string;
  readonly isSuperStickerEvent?: boolean;
  readonly messageType?: number;
  readonly superStickerMetadata?: SuperStickerMetadataEncoded;
  readonly supporterDetails?: ChannelProfileDetailsEncoded;
}
export const SuperChatEventSnippet: Schema.Schema<SuperChatEventSnippet, SuperChatEventSnippetEncoded, never> = Schema.Struct({
  amountMicros: Schema.optional(Schema.String),
  channelId: Schema.optional(Schema.String),
  commentText: Schema.optional(Schema.String),
  createdAt: Schema.optional(Schema.DateFromString),
  currency: Schema.optional(Schema.String),
  displayString: Schema.optional(Schema.String),
  isSuperStickerEvent: Schema.optional(Schema.Boolean),
  messageType: Schema.optional(Schema.Int),
  superStickerMetadata: Schema.optional(Schema.suspend(() => SuperStickerMetadata)),
  supporterDetails: Schema.optional(Schema.suspend(() => ChannelProfileDetails)),
});

export interface SuperStickerMetadata {
  readonly altText?: string;
  readonly altTextLanguage?: string;
  readonly stickerId?: string;
}
export interface SuperStickerMetadataEncoded {
  readonly altText?: string;
  readonly altTextLanguage?: string;
  readonly stickerId?: string;
}
export const SuperStickerMetadata: Schema.Schema<SuperStickerMetadata, SuperStickerMetadataEncoded, never> = Schema.Struct({
  altText: Schema.optional(Schema.String),
  altTextLanguage: Schema.optional(Schema.String),
  stickerId: Schema.optional(Schema.String),
});

export interface TestItem {
  readonly etag?: string;
  readonly featuredPart?: boolean;
  readonly gaia?: string;
  readonly id?: string;
  readonly snippet?: TestItemTestItemSnippet;
}
export interface TestItemEncoded {
  readonly etag?: string;
  readonly featuredPart?: boolean;
  readonly gaia?: string;
  readonly id?: string;
  readonly snippet?: TestItemTestItemSnippetEncoded;
}
export const TestItem: Schema.Schema<TestItem, TestItemEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  featuredPart: Schema.optional(Schema.Boolean),
  gaia: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  snippet: Schema.optional(Schema.suspend(() => TestItemTestItemSnippet)),
});

export interface TestItemTestItemSnippet {

}
export interface TestItemTestItemSnippetEncoded {

}
export const TestItemTestItemSnippet: Schema.Schema<TestItemTestItemSnippet, TestItemTestItemSnippetEncoded, never> = Schema.Struct({

});

/** A *third party account link* resource represents a link between a YouTube account or a channel and an account on a third-party service. */
export interface ThirdPartyLink {
  readonly etag?: string;
  readonly kind?: string;
  readonly linkingToken?: string;
  readonly snippet?: ThirdPartyLinkSnippet;
  readonly status?: ThirdPartyLinkStatus;
}
export interface ThirdPartyLinkEncoded {
  readonly etag?: string;
  readonly kind?: string;
  readonly linkingToken?: string;
  readonly snippet?: ThirdPartyLinkSnippetEncoded;
  readonly status?: ThirdPartyLinkStatusEncoded;
}
export const ThirdPartyLink: Schema.Schema<ThirdPartyLink, ThirdPartyLinkEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  linkingToken: Schema.optional(Schema.String),
  snippet: Schema.optional(Schema.suspend(() => ThirdPartyLinkSnippet)),
  status: Schema.optional(Schema.suspend(() => ThirdPartyLinkStatus)),
});

export interface ThirdPartyLinkListResponse {
  readonly etag?: string;
  readonly items?: ReadonlyArray<ThirdPartyLink>;
  readonly kind?: string;
}
export interface ThirdPartyLinkListResponseEncoded {
  readonly etag?: string;
  readonly items?: ReadonlyArray<ThirdPartyLinkEncoded>;
  readonly kind?: string;
}
export const ThirdPartyLinkListResponse: Schema.Schema<ThirdPartyLinkListResponse, ThirdPartyLinkListResponseEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Schema.suspend(() => ThirdPartyLink))),
  kind: Schema.optional(Schema.String),
});

/** Basic information about a third party account link, including its type and type-specific information. */
export interface ThirdPartyLinkSnippet {
  readonly channelToAffiliateProgramLink?: ChannelToAffiliateProgramLinkDetails;
  readonly channelToStoreLink?: ChannelToStoreLinkDetails;
  readonly type?: "linkUnspecified" | "channelToStoreLink" | "channelToAffiliateProgramLink";
}
export interface ThirdPartyLinkSnippetEncoded {
  readonly channelToAffiliateProgramLink?: ChannelToAffiliateProgramLinkDetailsEncoded;
  readonly channelToStoreLink?: ChannelToStoreLinkDetailsEncoded;
  readonly type?: "linkUnspecified" | "channelToStoreLink" | "channelToAffiliateProgramLink";
}
export const ThirdPartyLinkSnippet: Schema.Schema<ThirdPartyLinkSnippet, ThirdPartyLinkSnippetEncoded, never> = Schema.Struct({
  channelToAffiliateProgramLink: Schema.optional(Schema.suspend(() => ChannelToAffiliateProgramLinkDetails)),
  channelToStoreLink: Schema.optional(Schema.suspend(() => ChannelToStoreLinkDetails)),
  type: Schema.optional(Schema.Union(Schema.Literal("linkUnspecified"), Schema.Literal("channelToStoreLink"), Schema.Literal("channelToAffiliateProgramLink"))),
});

/** The third-party link status object contains information about the status of the link. */
export interface ThirdPartyLinkStatus {
  readonly linkStatus?: "unknown" | "failed" | "pending" | "linked";
}
export interface ThirdPartyLinkStatusEncoded {
  readonly linkStatus?: "unknown" | "failed" | "pending" | "linked";
}
export const ThirdPartyLinkStatus: Schema.Schema<ThirdPartyLinkStatus, ThirdPartyLinkStatusEncoded, never> = Schema.Struct({
  linkStatus: Schema.optional(Schema.Union(Schema.Literal("unknown"), Schema.Literal("failed"), Schema.Literal("pending"), Schema.Literal("linked"))),
});

/** A thumbnail is an image representing a YouTube resource. */
export interface Thumbnail {
  readonly height?: number;
  readonly url?: string;
  readonly width?: number;
}
export interface ThumbnailEncoded {
  readonly height?: number;
  readonly url?: string;
  readonly width?: number;
}
export const Thumbnail: Schema.Schema<Thumbnail, ThumbnailEncoded, never> = Schema.Struct({
  height: Schema.optional(Schema.Int),
  url: Schema.optional(Schema.String),
  width: Schema.optional(Schema.Int),
});

/** Internal representation of thumbnails for a YouTube resource. */
export interface ThumbnailDetails {
  readonly default?: Thumbnail;
  readonly high?: Thumbnail;
  readonly maxres?: Thumbnail;
  readonly medium?: Thumbnail;
  readonly standard?: Thumbnail;
}
export interface ThumbnailDetailsEncoded {
  readonly default?: ThumbnailEncoded;
  readonly high?: ThumbnailEncoded;
  readonly maxres?: ThumbnailEncoded;
  readonly medium?: ThumbnailEncoded;
  readonly standard?: ThumbnailEncoded;
}
export const ThumbnailDetails: Schema.Schema<ThumbnailDetails, ThumbnailDetailsEncoded, never> = Schema.Struct({
  default: Schema.optional(Schema.suspend(() => Thumbnail)),
  high: Schema.optional(Schema.suspend(() => Thumbnail)),
  maxres: Schema.optional(Schema.suspend(() => Thumbnail)),
  medium: Schema.optional(Schema.suspend(() => Thumbnail)),
  standard: Schema.optional(Schema.suspend(() => Thumbnail)),
});

export interface ThumbnailSetResponse {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<ThumbnailDetails>;
  readonly kind?: string;
  readonly visitorId?: string;
}
export interface ThumbnailSetResponseEncoded {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<ThumbnailDetailsEncoded>;
  readonly kind?: string;
  readonly visitorId?: string;
}
export const ThumbnailSetResponse: Schema.Schema<ThumbnailSetResponse, ThumbnailSetResponseEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  eventId: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Schema.suspend(() => ThumbnailDetails))),
  kind: Schema.optional(Schema.String),
  visitorId: Schema.optional(Schema.String),
});

/** Stub token pagination template to suppress results. */
export interface TokenPagination {

}
export interface TokenPaginationEncoded {

}
export const TokenPagination: Schema.Schema<TokenPagination, TokenPaginationEncoded, never> = Schema.Struct({

});

/** A *video* resource represents a YouTube video. */
export interface Video {
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
}
export interface VideoEncoded {
  readonly ageGating?: VideoAgeGatingEncoded;
  readonly brandPartner?: BrandPartnerEncoded;
  readonly contentDetails?: VideoContentDetailsEncoded;
  readonly etag?: string;
  readonly fileDetails?: VideoFileDetailsEncoded;
  readonly id?: string;
  readonly kind?: string;
  readonly liveStreamingDetails?: VideoLiveStreamingDetailsEncoded;
  readonly localizations?: Readonly<Record<string, VideoLocalizationEncoded>>;
  readonly monetizationDetails?: VideoMonetizationDetailsEncoded;
  readonly paidProductPlacementDetails?: VideoPaidProductPlacementDetailsEncoded;
  readonly player?: VideoPlayerEncoded;
  readonly processingDetails?: VideoProcessingDetailsEncoded;
  readonly projectDetails?: VideoProjectDetailsEncoded;
  readonly recordingDetails?: VideoRecordingDetailsEncoded;
  readonly snippet?: VideoSnippetEncoded;
  readonly statistics?: VideoStatisticsEncoded;
  readonly status?: VideoStatusEncoded;
  readonly suggestions?: VideoSuggestionsEncoded;
  readonly topicDetails?: VideoTopicDetailsEncoded;
}
export const Video: Schema.Schema<Video, VideoEncoded, never> = Schema.Struct({
  ageGating: Schema.optional(Schema.suspend(() => VideoAgeGating)),
  brandPartner: Schema.optional(Schema.suspend(() => BrandPartner)),
  contentDetails: Schema.optional(Schema.suspend(() => VideoContentDetails)),
  etag: Schema.optional(Schema.String),
  fileDetails: Schema.optional(Schema.suspend(() => VideoFileDetails)),
  id: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  liveStreamingDetails: Schema.optional(Schema.suspend(() => VideoLiveStreamingDetails)),
  localizations: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.suspend(() => VideoLocalization) })),
  monetizationDetails: Schema.optional(Schema.suspend(() => VideoMonetizationDetails)),
  paidProductPlacementDetails: Schema.optional(Schema.suspend(() => VideoPaidProductPlacementDetails)),
  player: Schema.optional(Schema.suspend(() => VideoPlayer)),
  processingDetails: Schema.optional(Schema.suspend(() => VideoProcessingDetails)),
  projectDetails: Schema.optional(Schema.suspend(() => VideoProjectDetails)),
  recordingDetails: Schema.optional(Schema.suspend(() => VideoRecordingDetails)),
  snippet: Schema.optional(Schema.suspend(() => VideoSnippet)),
  statistics: Schema.optional(Schema.suspend(() => VideoStatistics)),
  status: Schema.optional(Schema.suspend(() => VideoStatus)),
  suggestions: Schema.optional(Schema.suspend(() => VideoSuggestions)),
  topicDetails: Schema.optional(Schema.suspend(() => VideoTopicDetails)),
});

export interface VideoAbuseReport {
  readonly comments?: string;
  readonly language?: string;
  readonly reasonId?: string;
  readonly secondaryReasonId?: string;
  readonly videoId?: string;
}
export interface VideoAbuseReportEncoded {
  readonly comments?: string;
  readonly language?: string;
  readonly reasonId?: string;
  readonly secondaryReasonId?: string;
  readonly videoId?: string;
}
export const VideoAbuseReport: Schema.Schema<VideoAbuseReport, VideoAbuseReportEncoded, never> = Schema.Struct({
  comments: Schema.optional(Schema.String),
  language: Schema.optional(Schema.String),
  reasonId: Schema.optional(Schema.String),
  secondaryReasonId: Schema.optional(Schema.String),
  videoId: Schema.optional(Schema.String),
});

/** A `__videoAbuseReportReason__` resource identifies a reason that a video could be reported as abusive. Video abuse report reasons are used with `video.ReportAbuse`. */
export interface VideoAbuseReportReason {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: VideoAbuseReportReasonSnippet;
}
export interface VideoAbuseReportReasonEncoded {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: VideoAbuseReportReasonSnippetEncoded;
}
export const VideoAbuseReportReason: Schema.Schema<VideoAbuseReportReason, VideoAbuseReportReasonEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  snippet: Schema.optional(Schema.suspend(() => VideoAbuseReportReasonSnippet)),
});

export interface VideoAbuseReportReasonListResponse {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<VideoAbuseReportReason>;
  readonly kind?: string;
  readonly visitorId?: string;
}
export interface VideoAbuseReportReasonListResponseEncoded {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<VideoAbuseReportReasonEncoded>;
  readonly kind?: string;
  readonly visitorId?: string;
}
export const VideoAbuseReportReasonListResponse: Schema.Schema<VideoAbuseReportReasonListResponse, VideoAbuseReportReasonListResponseEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  eventId: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Schema.suspend(() => VideoAbuseReportReason))),
  kind: Schema.optional(Schema.String),
  visitorId: Schema.optional(Schema.String),
});

/** Basic details about a video category, such as its localized title. */
export interface VideoAbuseReportReasonSnippet {
  readonly label?: string;
  readonly secondaryReasons?: ReadonlyArray<VideoAbuseReportSecondaryReason>;
}
export interface VideoAbuseReportReasonSnippetEncoded {
  readonly label?: string;
  readonly secondaryReasons?: ReadonlyArray<VideoAbuseReportSecondaryReasonEncoded>;
}
export const VideoAbuseReportReasonSnippet: Schema.Schema<VideoAbuseReportReasonSnippet, VideoAbuseReportReasonSnippetEncoded, never> = Schema.Struct({
  label: Schema.optional(Schema.String),
  secondaryReasons: Schema.optional(Schema.Array(Schema.suspend(() => VideoAbuseReportSecondaryReason))),
});

export interface VideoAbuseReportSecondaryReason {
  readonly id?: string;
  readonly label?: string;
}
export interface VideoAbuseReportSecondaryReasonEncoded {
  readonly id?: string;
  readonly label?: string;
}
export const VideoAbuseReportSecondaryReason: Schema.Schema<VideoAbuseReportSecondaryReason, VideoAbuseReportSecondaryReasonEncoded, never> = Schema.Struct({
  id: Schema.optional(Schema.String),
  label: Schema.optional(Schema.String),
});

export interface VideoAgeGating {
  readonly alcoholContent?: boolean;
  readonly restricted?: boolean;
  readonly videoGameRating?: "anyone" | "m15Plus" | "m16Plus" | "m17Plus";
}
export interface VideoAgeGatingEncoded {
  readonly alcoholContent?: boolean;
  readonly restricted?: boolean;
  readonly videoGameRating?: "anyone" | "m15Plus" | "m16Plus" | "m17Plus";
}
export const VideoAgeGating: Schema.Schema<VideoAgeGating, VideoAgeGatingEncoded, never> = Schema.Struct({
  alcoholContent: Schema.optional(Schema.Boolean),
  restricted: Schema.optional(Schema.Boolean),
  videoGameRating: Schema.optional(Schema.Union(Schema.Literal("anyone"), Schema.Literal("m15Plus"), Schema.Literal("m16Plus"), Schema.Literal("m17Plus"))),
});

/** A *videoCategory* resource identifies a category that has been or could be associated with uploaded videos. */
export interface VideoCategory {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: VideoCategorySnippet;
}
export interface VideoCategoryEncoded {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: VideoCategorySnippetEncoded;
}
export const VideoCategory: Schema.Schema<VideoCategory, VideoCategoryEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  snippet: Schema.optional(Schema.suspend(() => VideoCategorySnippet)),
});

export interface VideoCategoryListResponse {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<VideoCategory>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfo;
  readonly prevPageToken?: string;
  readonly tokenPagination?: TokenPagination;
  readonly visitorId?: string;
}
export interface VideoCategoryListResponseEncoded {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<VideoCategoryEncoded>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfoEncoded;
  readonly prevPageToken?: string;
  readonly tokenPagination?: TokenPaginationEncoded;
  readonly visitorId?: string;
}
export const VideoCategoryListResponse: Schema.Schema<VideoCategoryListResponse, VideoCategoryListResponseEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  eventId: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Schema.suspend(() => VideoCategory))),
  kind: Schema.optional(Schema.String),
  nextPageToken: Schema.optional(Schema.String),
  pageInfo: Schema.optional(Schema.suspend(() => PageInfo)),
  prevPageToken: Schema.optional(Schema.String),
  tokenPagination: Schema.optional(Schema.suspend(() => TokenPagination)),
  visitorId: Schema.optional(Schema.String),
});

/** Basic details about a video category, such as its localized title. */
export interface VideoCategorySnippet {
  readonly assignable?: boolean;
  readonly channelId?: string;
  readonly title?: string;
}
export interface VideoCategorySnippetEncoded {
  readonly assignable?: boolean;
  readonly channelId?: string;
  readonly title?: string;
}
export const VideoCategorySnippet: Schema.Schema<VideoCategorySnippet, VideoCategorySnippetEncoded, never> = Schema.Struct({
  assignable: Schema.optional(Schema.Boolean),
  channelId: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
});

/** Details about the content of a YouTube Video. */
export interface VideoContentDetails {
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
}
export interface VideoContentDetailsEncoded {
  readonly caption?: "true" | "false";
  readonly contentRating?: ContentRatingEncoded;
  readonly countryRestriction?: AccessPolicyEncoded;
  readonly definition?: "sd" | "hd";
  readonly dimension?: string;
  readonly duration?: string;
  readonly hasCustomThumbnail?: boolean;
  readonly licensedContent?: boolean;
  readonly projection?: "rectangular" | "360";
  readonly regionRestriction?: VideoContentDetailsRegionRestrictionEncoded;
}
export const VideoContentDetails: Schema.Schema<VideoContentDetails, VideoContentDetailsEncoded, never> = Schema.Struct({
  caption: Schema.optional(Schema.Union(Schema.Literal("true"), Schema.Literal("false"))),
  contentRating: Schema.optional(Schema.suspend(() => ContentRating)),
  countryRestriction: Schema.optional(Schema.suspend(() => AccessPolicy)),
  definition: Schema.optional(Schema.Union(Schema.Literal("sd"), Schema.Literal("hd"))),
  dimension: Schema.optional(Schema.String),
  duration: Schema.optional(Schema.String),
  hasCustomThumbnail: Schema.optional(Schema.Boolean),
  licensedContent: Schema.optional(Schema.Boolean),
  projection: Schema.optional(Schema.Union(Schema.Literal("rectangular"), Schema.Literal("360"))),
  regionRestriction: Schema.optional(Schema.suspend(() => VideoContentDetailsRegionRestriction)),
});

/** DEPRECATED Region restriction of the video. */
export interface VideoContentDetailsRegionRestriction {
  readonly allowed?: ReadonlyArray<string>;
  readonly blocked?: ReadonlyArray<string>;
}
export interface VideoContentDetailsRegionRestrictionEncoded {
  readonly allowed?: ReadonlyArray<string>;
  readonly blocked?: ReadonlyArray<string>;
}
export const VideoContentDetailsRegionRestriction: Schema.Schema<VideoContentDetailsRegionRestriction, VideoContentDetailsRegionRestrictionEncoded, never> = Schema.Struct({
  allowed: Schema.optional(Schema.Array(Schema.String)),
  blocked: Schema.optional(Schema.Array(Schema.String)),
});

/** Describes original video file properties, including technical details about audio and video streams, but also metadata information like content length, digitization time, or geotagging information. */
export interface VideoFileDetails {
  readonly audioStreams?: ReadonlyArray<VideoFileDetailsAudioStream>;
  readonly bitrateBps?: string;
  readonly container?: string;
  readonly creationTime?: string;
  readonly durationMs?: string;
  readonly fileName?: string;
  readonly fileSize?: string;
  readonly fileType?: "video" | "audio" | "image" | "archive" | "document" | "project" | "other";
  readonly videoStreams?: ReadonlyArray<VideoFileDetailsVideoStream>;
}
export interface VideoFileDetailsEncoded {
  readonly audioStreams?: ReadonlyArray<VideoFileDetailsAudioStreamEncoded>;
  readonly bitrateBps?: string;
  readonly container?: string;
  readonly creationTime?: string;
  readonly durationMs?: string;
  readonly fileName?: string;
  readonly fileSize?: string;
  readonly fileType?: "video" | "audio" | "image" | "archive" | "document" | "project" | "other";
  readonly videoStreams?: ReadonlyArray<VideoFileDetailsVideoStreamEncoded>;
}
export const VideoFileDetails: Schema.Schema<VideoFileDetails, VideoFileDetailsEncoded, never> = Schema.Struct({
  audioStreams: Schema.optional(Schema.Array(Schema.suspend(() => VideoFileDetailsAudioStream))),
  bitrateBps: Schema.optional(Schema.String),
  container: Schema.optional(Schema.String),
  creationTime: Schema.optional(Schema.String),
  durationMs: Schema.optional(Schema.String),
  fileName: Schema.optional(Schema.String),
  fileSize: Schema.optional(Schema.String),
  fileType: Schema.optional(Schema.Union(Schema.Literal("video"), Schema.Literal("audio"), Schema.Literal("image"), Schema.Literal("archive"), Schema.Literal("document"), Schema.Literal("project"), Schema.Literal("other"))),
  videoStreams: Schema.optional(Schema.Array(Schema.suspend(() => VideoFileDetailsVideoStream))),
});

/** Information about an audio stream. */
export interface VideoFileDetailsAudioStream {
  readonly bitrateBps?: string;
  readonly channelCount?: number;
  readonly codec?: string;
  readonly vendor?: string;
}
export interface VideoFileDetailsAudioStreamEncoded {
  readonly bitrateBps?: string;
  readonly channelCount?: number;
  readonly codec?: string;
  readonly vendor?: string;
}
export const VideoFileDetailsAudioStream: Schema.Schema<VideoFileDetailsAudioStream, VideoFileDetailsAudioStreamEncoded, never> = Schema.Struct({
  bitrateBps: Schema.optional(Schema.String),
  channelCount: Schema.optional(Schema.Int),
  codec: Schema.optional(Schema.String),
  vendor: Schema.optional(Schema.String),
});

/** Information about a video stream. */
export interface VideoFileDetailsVideoStream {
  readonly aspectRatio?: number;
  readonly bitrateBps?: string;
  readonly codec?: string;
  readonly frameRateFps?: number;
  readonly heightPixels?: number;
  readonly rotation?: "none" | "clockwise" | "upsideDown" | "counterClockwise" | "other";
  readonly vendor?: string;
  readonly widthPixels?: number;
}
export interface VideoFileDetailsVideoStreamEncoded {
  readonly aspectRatio?: number;
  readonly bitrateBps?: string;
  readonly codec?: string;
  readonly frameRateFps?: number;
  readonly heightPixels?: number;
  readonly rotation?: "none" | "clockwise" | "upsideDown" | "counterClockwise" | "other";
  readonly vendor?: string;
  readonly widthPixels?: number;
}
export const VideoFileDetailsVideoStream: Schema.Schema<VideoFileDetailsVideoStream, VideoFileDetailsVideoStreamEncoded, never> = Schema.Struct({
  aspectRatio: Schema.optional(Schema.Number),
  bitrateBps: Schema.optional(Schema.String),
  codec: Schema.optional(Schema.String),
  frameRateFps: Schema.optional(Schema.Number),
  heightPixels: Schema.optional(Schema.Int),
  rotation: Schema.optional(Schema.Union(Schema.Literal("none"), Schema.Literal("clockwise"), Schema.Literal("upsideDown"), Schema.Literal("counterClockwise"), Schema.Literal("other"))),
  vendor: Schema.optional(Schema.String),
  widthPixels: Schema.optional(Schema.Int),
});

export interface VideoGetRatingResponse {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<VideoRating>;
  readonly kind?: string;
  readonly visitorId?: string;
}
export interface VideoGetRatingResponseEncoded {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<VideoRatingEncoded>;
  readonly kind?: string;
  readonly visitorId?: string;
}
export const VideoGetRatingResponse: Schema.Schema<VideoGetRatingResponse, VideoGetRatingResponseEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  eventId: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Schema.suspend(() => VideoRating))),
  kind: Schema.optional(Schema.String),
  visitorId: Schema.optional(Schema.String),
});

export interface VideoListResponse {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<Video>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfo;
  readonly prevPageToken?: string;
  readonly tokenPagination?: TokenPagination;
  readonly visitorId?: string;
}
export interface VideoListResponseEncoded {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<VideoEncoded>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfoEncoded;
  readonly prevPageToken?: string;
  readonly tokenPagination?: TokenPaginationEncoded;
  readonly visitorId?: string;
}
export const VideoListResponse: Schema.Schema<VideoListResponse, VideoListResponseEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  eventId: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Schema.suspend(() => Video))),
  kind: Schema.optional(Schema.String),
  nextPageToken: Schema.optional(Schema.String),
  pageInfo: Schema.optional(Schema.suspend(() => PageInfo)),
  prevPageToken: Schema.optional(Schema.String),
  tokenPagination: Schema.optional(Schema.suspend(() => TokenPagination)),
  visitorId: Schema.optional(Schema.String),
});

/** Details about the live streaming metadata. */
export interface VideoLiveStreamingDetails {
  readonly activeLiveChatId?: string;
  readonly actualEndTime?: Date;
  readonly actualStartTime?: Date;
  readonly concurrentViewers?: string;
  readonly scheduledEndTime?: Date;
  readonly scheduledStartTime?: Date;
}
export interface VideoLiveStreamingDetailsEncoded {
  readonly activeLiveChatId?: string;
  readonly actualEndTime?: string;
  readonly actualStartTime?: string;
  readonly concurrentViewers?: string;
  readonly scheduledEndTime?: string;
  readonly scheduledStartTime?: string;
}
export const VideoLiveStreamingDetails: Schema.Schema<VideoLiveStreamingDetails, VideoLiveStreamingDetailsEncoded, never> = Schema.Struct({
  activeLiveChatId: Schema.optional(Schema.String),
  actualEndTime: Schema.optional(Schema.DateFromString),
  actualStartTime: Schema.optional(Schema.DateFromString),
  concurrentViewers: Schema.optional(Schema.String),
  scheduledEndTime: Schema.optional(Schema.DateFromString),
  scheduledStartTime: Schema.optional(Schema.DateFromString),
});

/** Localized versions of certain video properties (e.g. title). */
export interface VideoLocalization {
  readonly description?: string;
  readonly title?: string;
}
export interface VideoLocalizationEncoded {
  readonly description?: string;
  readonly title?: string;
}
export const VideoLocalization: Schema.Schema<VideoLocalization, VideoLocalizationEncoded, never> = Schema.Struct({
  description: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
});

/** Details about monetization of a YouTube Video. */
export interface VideoMonetizationDetails {
  readonly access?: AccessPolicy;
}
export interface VideoMonetizationDetailsEncoded {
  readonly access?: AccessPolicyEncoded;
}
export const VideoMonetizationDetails: Schema.Schema<VideoMonetizationDetails, VideoMonetizationDetailsEncoded, never> = Schema.Struct({
  access: Schema.optional(Schema.suspend(() => AccessPolicy)),
});

/** Details about paid content, such as paid product placement, sponsorships or endorsement, contained in a YouTube video and a method to inform viewers of paid promotion. This data can only be retrieved by the video owner. */
export interface VideoPaidProductPlacementDetails {
  readonly hasPaidProductPlacement?: boolean;
}
export interface VideoPaidProductPlacementDetailsEncoded {
  readonly hasPaidProductPlacement?: boolean;
}
export const VideoPaidProductPlacementDetails: Schema.Schema<VideoPaidProductPlacementDetails, VideoPaidProductPlacementDetailsEncoded, never> = Schema.Struct({
  hasPaidProductPlacement: Schema.optional(Schema.Boolean),
});

/** Player to be used for a video playback. */
export interface VideoPlayer {
  readonly embedHeight?: string;
  readonly embedHtml?: string;
  readonly embedWidth?: string;
}
export interface VideoPlayerEncoded {
  readonly embedHeight?: string;
  readonly embedHtml?: string;
  readonly embedWidth?: string;
}
export const VideoPlayer: Schema.Schema<VideoPlayer, VideoPlayerEncoded, never> = Schema.Struct({
  embedHeight: Schema.optional(Schema.String),
  embedHtml: Schema.optional(Schema.String),
  embedWidth: Schema.optional(Schema.String),
});

/** Describes processing status and progress and availability of some other Video resource parts. */
export interface VideoProcessingDetails {
  readonly editorSuggestionsAvailability?: string;
  readonly fileDetailsAvailability?: string;
  readonly processingFailureReason?: "uploadFailed" | "transcodeFailed" | "streamingFailed" | "other";
  readonly processingIssuesAvailability?: string;
  readonly processingProgress?: VideoProcessingDetailsProcessingProgress;
  readonly processingStatus?: "processing" | "succeeded" | "failed" | "terminated";
  readonly tagSuggestionsAvailability?: string;
  readonly thumbnailsAvailability?: string;
}
export interface VideoProcessingDetailsEncoded {
  readonly editorSuggestionsAvailability?: string;
  readonly fileDetailsAvailability?: string;
  readonly processingFailureReason?: "uploadFailed" | "transcodeFailed" | "streamingFailed" | "other";
  readonly processingIssuesAvailability?: string;
  readonly processingProgress?: VideoProcessingDetailsProcessingProgressEncoded;
  readonly processingStatus?: "processing" | "succeeded" | "failed" | "terminated";
  readonly tagSuggestionsAvailability?: string;
  readonly thumbnailsAvailability?: string;
}
export const VideoProcessingDetails: Schema.Schema<VideoProcessingDetails, VideoProcessingDetailsEncoded, never> = Schema.Struct({
  editorSuggestionsAvailability: Schema.optional(Schema.String),
  fileDetailsAvailability: Schema.optional(Schema.String),
  processingFailureReason: Schema.optional(Schema.Union(Schema.Literal("uploadFailed"), Schema.Literal("transcodeFailed"), Schema.Literal("streamingFailed"), Schema.Literal("other"))),
  processingIssuesAvailability: Schema.optional(Schema.String),
  processingProgress: Schema.optional(Schema.suspend(() => VideoProcessingDetailsProcessingProgress)),
  processingStatus: Schema.optional(Schema.Union(Schema.Literal("processing"), Schema.Literal("succeeded"), Schema.Literal("failed"), Schema.Literal("terminated"))),
  tagSuggestionsAvailability: Schema.optional(Schema.String),
  thumbnailsAvailability: Schema.optional(Schema.String),
});

/** Video processing progress and completion time estimate. */
export interface VideoProcessingDetailsProcessingProgress {
  readonly partsProcessed?: string;
  readonly partsTotal?: string;
  readonly timeLeftMs?: string;
}
export interface VideoProcessingDetailsProcessingProgressEncoded {
  readonly partsProcessed?: string;
  readonly partsTotal?: string;
  readonly timeLeftMs?: string;
}
export const VideoProcessingDetailsProcessingProgress: Schema.Schema<VideoProcessingDetailsProcessingProgress, VideoProcessingDetailsProcessingProgressEncoded, never> = Schema.Struct({
  partsProcessed: Schema.optional(Schema.String),
  partsTotal: Schema.optional(Schema.String),
  timeLeftMs: Schema.optional(Schema.String),
});

/** DEPRECATED. b/157517979: This part was never populated after it was added. However, it sees non-zero traffic because there is generated client code in the wild that refers to it [1]. We keep this field and do NOT remove it because otherwise V3 would return an error when this part gets requested [2]. [1] https://developers.google.com/resources/api-libraries/documentation/youtube/v3/csharp/latest/classGoogle_1_1Apis_1_1YouTube_1_1v3_1_1Data_1_1VideoProjectDetails.html [2] http://google3/video/youtube/src/python/servers/data_api/common.py?l=1565-1569&rcl=344141677 */
export interface VideoProjectDetails {

}
export interface VideoProjectDetailsEncoded {

}
export const VideoProjectDetails: Schema.Schema<VideoProjectDetails, VideoProjectDetailsEncoded, never> = Schema.Struct({

});

/** Basic details about rating of a video. */
export interface VideoRating {
  readonly rating?: "none" | "like" | "dislike";
  readonly videoId?: string;
}
export interface VideoRatingEncoded {
  readonly rating?: "none" | "like" | "dislike";
  readonly videoId?: string;
}
export const VideoRating: Schema.Schema<VideoRating, VideoRatingEncoded, never> = Schema.Struct({
  rating: Schema.optional(Schema.Union(Schema.Literal("none"), Schema.Literal("like"), Schema.Literal("dislike"))),
  videoId: Schema.optional(Schema.String),
});

/** Recording information associated with the video. */
export interface VideoRecordingDetails {
  readonly location?: GeoPoint;
  readonly locationDescription?: string;
  readonly recordingDate?: Date;
}
export interface VideoRecordingDetailsEncoded {
  readonly location?: GeoPointEncoded;
  readonly locationDescription?: string;
  readonly recordingDate?: string;
}
export const VideoRecordingDetails: Schema.Schema<VideoRecordingDetails, VideoRecordingDetailsEncoded, never> = Schema.Struct({
  location: Schema.optional(Schema.suspend(() => GeoPoint)),
  locationDescription: Schema.optional(Schema.String),
  recordingDate: Schema.optional(Schema.DateFromString),
});

/** Basic details about a video, including title, description, uploader, thumbnails and category. */
export interface VideoSnippet {
  readonly categoryId?: string;
  readonly channelId?: string;
  readonly channelTitle?: string;
  readonly defaultAudioLanguage?: string;
  readonly defaultLanguage?: string;
  readonly description?: string;
  readonly liveBroadcastContent?: "none" | "upcoming" | "live" | "completed";
  readonly localized?: VideoLocalization;
  readonly publishedAt?: Date;
  readonly tags?: ReadonlyArray<string>;
  readonly thumbnails?: ThumbnailDetails;
  readonly title?: string;
}
export interface VideoSnippetEncoded {
  readonly categoryId?: string;
  readonly channelId?: string;
  readonly channelTitle?: string;
  readonly defaultAudioLanguage?: string;
  readonly defaultLanguage?: string;
  readonly description?: string;
  readonly liveBroadcastContent?: "none" | "upcoming" | "live" | "completed";
  readonly localized?: VideoLocalizationEncoded;
  readonly publishedAt?: string;
  readonly tags?: ReadonlyArray<string>;
  readonly thumbnails?: ThumbnailDetailsEncoded;
  readonly title?: string;
}
export const VideoSnippet: Schema.Schema<VideoSnippet, VideoSnippetEncoded, never> = Schema.Struct({
  categoryId: Schema.optional(Schema.String),
  channelId: Schema.optional(Schema.String),
  channelTitle: Schema.optional(Schema.String),
  defaultAudioLanguage: Schema.optional(Schema.String),
  defaultLanguage: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  liveBroadcastContent: Schema.optional(Schema.Union(Schema.Literal("none"), Schema.Literal("upcoming"), Schema.Literal("live"), Schema.Literal("completed"))),
  localized: Schema.optional(Schema.suspend(() => VideoLocalization)),
  publishedAt: Schema.optional(Schema.DateFromString),
  tags: Schema.optional(Schema.Array(Schema.String)),
  thumbnails: Schema.optional(Schema.suspend(() => ThumbnailDetails)),
  title: Schema.optional(Schema.String),
});

/** A *VideoStat* resource represents a YouTube video's stats. */
export interface VideoStat {
  readonly contentDetails?: VideoStatsContentDetails;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: VideoStatsSnippet;
  readonly statistics?: VideoStatsStatistics;
}
export interface VideoStatEncoded {
  readonly contentDetails?: VideoStatsContentDetailsEncoded;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: VideoStatsSnippetEncoded;
  readonly statistics?: VideoStatsStatisticsEncoded;
}
export const VideoStat: Schema.Schema<VideoStat, VideoStatEncoded, never> = Schema.Struct({
  contentDetails: Schema.optional(Schema.suspend(() => VideoStatsContentDetails)),
  etag: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  snippet: Schema.optional(Schema.suspend(() => VideoStatsSnippet)),
  statistics: Schema.optional(Schema.suspend(() => VideoStatsStatistics)),
});

/** Statistics about the video, such as the number of times the video was viewed or liked. */
export interface VideoStatistics {
  readonly commentCount?: string;
  readonly dislikeCount?: string;
  readonly favoriteCount?: string;
  readonly likeCount?: string;
  readonly viewCount?: string;
}
export interface VideoStatisticsEncoded {
  readonly commentCount?: string;
  readonly dislikeCount?: string;
  readonly favoriteCount?: string;
  readonly likeCount?: string;
  readonly viewCount?: string;
}
export const VideoStatistics: Schema.Schema<VideoStatistics, VideoStatisticsEncoded, never> = Schema.Struct({
  commentCount: Schema.optional(Schema.String),
  dislikeCount: Schema.optional(Schema.String),
  favoriteCount: Schema.optional(Schema.String),
  likeCount: Schema.optional(Schema.String),
  viewCount: Schema.optional(Schema.String),
});

/** Details about the content of a YouTube Video. This is a subset of the information in VideoContentDetails specifically for the Videos.stats API. */
export interface VideoStatsContentDetails {
  readonly duration?: string;
  readonly durationMillis?: string;
}
export interface VideoStatsContentDetailsEncoded {
  readonly duration?: string;
  readonly durationMillis?: string;
}
export const VideoStatsContentDetails: Schema.Schema<VideoStatsContentDetails, VideoStatsContentDetailsEncoded, never> = Schema.Struct({
  duration: Schema.optional(Schema.String),
  durationMillis: Schema.optional(Schema.String),
});

/** Basic details about a video. This is a subset of the information in VideoSnippet specifically for the Videos.stats API. */
export interface VideoStatsSnippet {
  readonly publishTime?: string;
}
export interface VideoStatsSnippetEncoded {
  readonly publishTime?: string;
}
export const VideoStatsSnippet: Schema.Schema<VideoStatsSnippet, VideoStatsSnippetEncoded, never> = Schema.Struct({
  publishTime: Schema.optional(Schema.String),
});

/** Statistics about the video, such as the number of times the video was viewed or liked. */
export interface VideoStatsStatistics {
  readonly commentCount?: string;
  readonly likeCount?: string;
  readonly viewCount?: string;
}
export interface VideoStatsStatisticsEncoded {
  readonly commentCount?: string;
  readonly likeCount?: string;
  readonly viewCount?: string;
}
export const VideoStatsStatistics: Schema.Schema<VideoStatsStatistics, VideoStatsStatisticsEncoded, never> = Schema.Struct({
  commentCount: Schema.optional(Schema.String),
  likeCount: Schema.optional(Schema.String),
  viewCount: Schema.optional(Schema.String),
});

/** Basic details about a video category, such as its localized title. Next Id: 19 */
export interface VideoStatus {
  readonly containsSyntheticMedia?: boolean;
  readonly embeddable?: boolean;
  readonly failureReason?: "conversion" | "invalidFile" | "emptyFile" | "tooSmall" | "codec" | "uploadAborted";
  readonly license?: "youtube" | "creativeCommon";
  readonly madeForKids?: boolean;
  readonly privacyStatus?: "public" | "unlisted" | "private";
  readonly publicStatsViewable?: boolean;
  readonly publishAt?: Date;
  readonly rejectionReason?: "copyright" | "inappropriate" | "duplicate" | "termsOfUse" | "uploaderAccountSuspended" | "length" | "claim" | "uploaderAccountClosed" | "trademark" | "legal";
  readonly selfDeclaredMadeForKids?: boolean;
  readonly uploadStatus?: "uploaded" | "processed" | "failed" | "rejected" | "deleted";
}
export interface VideoStatusEncoded {
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
}
export const VideoStatus: Schema.Schema<VideoStatus, VideoStatusEncoded, never> = Schema.Struct({
  containsSyntheticMedia: Schema.optional(Schema.Boolean),
  embeddable: Schema.optional(Schema.Boolean),
  failureReason: Schema.optional(Schema.Union(Schema.Literal("conversion"), Schema.Literal("invalidFile"), Schema.Literal("emptyFile"), Schema.Literal("tooSmall"), Schema.Literal("codec"), Schema.Literal("uploadAborted"))),
  license: Schema.optional(Schema.Union(Schema.Literal("youtube"), Schema.Literal("creativeCommon"))),
  madeForKids: Schema.optional(Schema.Boolean),
  privacyStatus: Schema.optional(Schema.Union(Schema.Literal("public"), Schema.Literal("unlisted"), Schema.Literal("private"))),
  publicStatsViewable: Schema.optional(Schema.Boolean),
  publishAt: Schema.optional(Schema.DateFromString),
  rejectionReason: Schema.optional(Schema.Union(Schema.Literal("copyright"), Schema.Literal("inappropriate"), Schema.Literal("duplicate"), Schema.Literal("termsOfUse"), Schema.Literal("uploaderAccountSuspended"), Schema.Literal("length"), Schema.Literal("claim"), Schema.Literal("uploaderAccountClosed"), Schema.Literal("trademark"), Schema.Literal("legal"))),
  selfDeclaredMadeForKids: Schema.optional(Schema.Boolean),
  uploadStatus: Schema.optional(Schema.Union(Schema.Literal("uploaded"), Schema.Literal("processed"), Schema.Literal("failed"), Schema.Literal("rejected"), Schema.Literal("deleted"))),
});

/** Specifies suggestions on how to improve video content, including encoding hints, tag suggestions, and editor suggestions. */
export interface VideoSuggestions {
  readonly editorSuggestions?: ReadonlyArray<"videoAutoLevels" | "videoStabilize" | "videoCrop" | "audioQuietAudioSwap">;
  readonly processingErrors?: ReadonlyArray<"audioFile" | "imageFile" | "projectFile" | "notAVideoFile" | "docFile" | "archiveFile" | "unsupportedSpatialAudioLayout">;
  readonly processingHints?: ReadonlyArray<"nonStreamableMov" | "sendBestQualityVideo" | "sphericalVideo" | "spatialAudio" | "vrVideo" | "hdrVideo">;
  readonly processingWarnings?: ReadonlyArray<"unknownContainer" | "unknownVideoCodec" | "unknownAudioCodec" | "inconsistentResolution" | "hasEditlist" | "problematicVideoCodec" | "problematicAudioCodec" | "unsupportedVrStereoMode" | "unsupportedSphericalProjectionType" | "unsupportedHdrPixelFormat" | "unsupportedHdrColorMetadata" | "problematicHdrLookupTable">;
  readonly tagSuggestions?: ReadonlyArray<VideoSuggestionsTagSuggestion>;
}
export interface VideoSuggestionsEncoded {
  readonly editorSuggestions?: ReadonlyArray<"videoAutoLevels" | "videoStabilize" | "videoCrop" | "audioQuietAudioSwap">;
  readonly processingErrors?: ReadonlyArray<"audioFile" | "imageFile" | "projectFile" | "notAVideoFile" | "docFile" | "archiveFile" | "unsupportedSpatialAudioLayout">;
  readonly processingHints?: ReadonlyArray<"nonStreamableMov" | "sendBestQualityVideo" | "sphericalVideo" | "spatialAudio" | "vrVideo" | "hdrVideo">;
  readonly processingWarnings?: ReadonlyArray<"unknownContainer" | "unknownVideoCodec" | "unknownAudioCodec" | "inconsistentResolution" | "hasEditlist" | "problematicVideoCodec" | "problematicAudioCodec" | "unsupportedVrStereoMode" | "unsupportedSphericalProjectionType" | "unsupportedHdrPixelFormat" | "unsupportedHdrColorMetadata" | "problematicHdrLookupTable">;
  readonly tagSuggestions?: ReadonlyArray<VideoSuggestionsTagSuggestionEncoded>;
}
export const VideoSuggestions: Schema.Schema<VideoSuggestions, VideoSuggestionsEncoded, never> = Schema.Struct({
  editorSuggestions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("videoAutoLevels"), Schema.Literal("videoStabilize"), Schema.Literal("videoCrop"), Schema.Literal("audioQuietAudioSwap")))),
  processingErrors: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("audioFile"), Schema.Literal("imageFile"), Schema.Literal("projectFile"), Schema.Literal("notAVideoFile"), Schema.Literal("docFile"), Schema.Literal("archiveFile"), Schema.Literal("unsupportedSpatialAudioLayout")))),
  processingHints: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("nonStreamableMov"), Schema.Literal("sendBestQualityVideo"), Schema.Literal("sphericalVideo"), Schema.Literal("spatialAudio"), Schema.Literal("vrVideo"), Schema.Literal("hdrVideo")))),
  processingWarnings: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("unknownContainer"), Schema.Literal("unknownVideoCodec"), Schema.Literal("unknownAudioCodec"), Schema.Literal("inconsistentResolution"), Schema.Literal("hasEditlist"), Schema.Literal("problematicVideoCodec"), Schema.Literal("problematicAudioCodec"), Schema.Literal("unsupportedVrStereoMode"), Schema.Literal("unsupportedSphericalProjectionType"), Schema.Literal("unsupportedHdrPixelFormat"), Schema.Literal("unsupportedHdrColorMetadata"), Schema.Literal("problematicHdrLookupTable")))),
  tagSuggestions: Schema.optional(Schema.Array(Schema.suspend(() => VideoSuggestionsTagSuggestion))),
});

/** A single tag suggestion with its relevance information. */
export interface VideoSuggestionsTagSuggestion {
  readonly categoryRestricts?: ReadonlyArray<string>;
  readonly tag?: string;
}
export interface VideoSuggestionsTagSuggestionEncoded {
  readonly categoryRestricts?: ReadonlyArray<string>;
  readonly tag?: string;
}
export const VideoSuggestionsTagSuggestion: Schema.Schema<VideoSuggestionsTagSuggestion, VideoSuggestionsTagSuggestionEncoded, never> = Schema.Struct({
  categoryRestricts: Schema.optional(Schema.Array(Schema.String)),
  tag: Schema.optional(Schema.String),
});

/** Freebase topic information related to the video. */
export interface VideoTopicDetails {
  readonly relevantTopicIds?: ReadonlyArray<string>;
  readonly topicCategories?: ReadonlyArray<string>;
  readonly topicIds?: ReadonlyArray<string>;
}
export interface VideoTopicDetailsEncoded {
  readonly relevantTopicIds?: ReadonlyArray<string>;
  readonly topicCategories?: ReadonlyArray<string>;
  readonly topicIds?: ReadonlyArray<string>;
}
export const VideoTopicDetails: Schema.Schema<VideoTopicDetails, VideoTopicDetailsEncoded, never> = Schema.Struct({
  relevantTopicIds: Schema.optional(Schema.Array(Schema.String)),
  topicCategories: Schema.optional(Schema.Array(Schema.String)),
  topicIds: Schema.optional(Schema.Array(Schema.String)),
});

/** Specifies who is allowed to train on the video. */
export interface VideoTrainability {
  readonly etag?: string;
  readonly kind?: string;
  readonly permitted?: ReadonlyArray<string>;
  readonly videoId?: string;
}
export interface VideoTrainabilityEncoded {
  readonly etag?: string;
  readonly kind?: string;
  readonly permitted?: ReadonlyArray<string>;
  readonly videoId?: string;
}
export const VideoTrainability: Schema.Schema<VideoTrainability, VideoTrainabilityEncoded, never> = Schema.Struct({
  etag: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  permitted: Schema.optional(Schema.Array(Schema.String)),
  videoId: Schema.optional(Schema.String),
});

/** Branding properties for the watch. All deprecated. */
export interface WatchSettings {
  readonly backgroundColor?: string;
  readonly featuredPlaylistId?: string;
  readonly textColor?: string;
}
export interface WatchSettingsEncoded {
  readonly backgroundColor?: string;
  readonly featuredPlaylistId?: string;
  readonly textColor?: string;
}
export const WatchSettings: Schema.Schema<WatchSettings, WatchSettingsEncoded, never> = Schema.Struct({
  backgroundColor: Schema.optional(Schema.String),
  featuredPlaylistId: Schema.optional(Schema.String),
  textColor: Schema.optional(Schema.String),
});
