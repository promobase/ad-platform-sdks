// This file is generated. Do not edit by hand.

export interface AbuseReport {
  readonly abuseTypes?: ReadonlyArray<AbuseType>;
  readonly description?: string;
  readonly relatedEntities?: ReadonlyArray<RelatedEntity>;
  readonly subject?: Entity;
}

export interface AbuseType {
  readonly id?: string;
}

/** Rights management policy for YouTube resources. */
export interface AccessPolicy {
  readonly allowed?: boolean;
  readonly exception?: ReadonlyArray<string>;
}

/** An *activity* resource contains information about an action that a particular channel, or user, has taken on YouTube.The actions reported in activity feeds include rating a video, sharing a video, marking a video as a favorite, commenting on a video, uploading a video, and so forth. Each activity resource identifies the type of action, the channel associated with the action, and the resource(s) associated with the action, such as the video that was rated or uploaded. */
export interface Activity {
  readonly contentDetails?: ActivityContentDetails;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: ActivitySnippet;
}

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

/** Details about a channel bulletin post. */
export interface ActivityContentDetailsBulletin {
  readonly resourceId?: ResourceId;
}

/** Details about a resource which was added to a channel. */
export interface ActivityContentDetailsChannelItem {
  readonly resourceId?: ResourceId;
}

/** Information about a resource that received a comment. */
export interface ActivityContentDetailsComment {
  readonly resourceId?: ResourceId;
}

/** Information about a video that was marked as a favorite video. */
export interface ActivityContentDetailsFavorite {
  readonly resourceId?: ResourceId;
}

/** Information about a resource that received a positive (like) rating. */
export interface ActivityContentDetailsLike {
  readonly resourceId?: ResourceId;
}

/** Information about a new playlist item. */
export interface ActivityContentDetailsPlaylistItem {
  readonly playlistId?: string;
  readonly playlistItemId?: string;
  readonly resourceId?: ResourceId;
}

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

/** Information that identifies the recommended resource. */
export interface ActivityContentDetailsRecommendation {
  readonly reason?: "reasonUnspecified" | "videoFavorited" | "videoLiked" | "videoWatched";
  readonly resourceId?: ResourceId;
  readonly seedResourceId?: ResourceId;
}

/** Details about a social network post. */
export interface ActivityContentDetailsSocial {
  readonly author?: string;
  readonly imageUrl?: string;
  readonly referenceUrl?: string;
  readonly resourceId?: ResourceId;
  readonly type?: "unspecified" | "googlePlus" | "facebook" | "twitter";
}

/** Information about a channel that a user subscribed to. */
export interface ActivityContentDetailsSubscription {
  readonly resourceId?: ResourceId;
}

/** Information about the uploaded video. */
export interface ActivityContentDetailsUpload {
  readonly videoId?: string;
}

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

/** Basic details about an activity, including title, description, thumbnails, activity type and group. Next ID: 12 */
export interface ActivitySnippet {
  readonly channelId?: string;
  readonly channelTitle?: string;
  readonly description?: string;
  readonly groupId?: string;
  readonly publishedAt?: string;
  readonly thumbnails?: ThumbnailDetails;
  readonly title?: string;
  readonly type?: "typeUnspecified" | "upload" | "like" | "favorite" | "comment" | "subscription" | "playlistItem" | "recommendation" | "bulletin" | "social" | "channelItem" | "promotedItem";
}

/** Empty response. */
export interface AnalyticsEmptyResponse {
  readonly errors?: AnalyticsErrors;
}

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

/** Request Error information. The presence of an error field signals that the operation has failed. */
export interface AnalyticsErrors {
  readonly code?: "BAD_REQUEST" | "FORBIDDEN" | "NOT_FOUND" | "CONFLICT" | "GONE" | "PRECONDITION_FAILED" | "INTERNAL_ERROR" | "SERVICE_UNAVAILABLE";
  readonly error?: ReadonlyArray<AnalyticsErrorProto>;
  readonly requestId?: string;
}

/** A group. */
export interface AnalyticsGroup {
  readonly contentDetails?: AnalyticsGroupContentDetails;
  readonly errors?: AnalyticsErrors;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: AnalyticsGroupSnippet;
}

/** A group's content details. */
export interface AnalyticsGroupContentDetails {
  readonly itemCount?: string;
  readonly itemType?: string;
}

/** A group item. */
export interface AnalyticsGroupItem {
  readonly errors?: AnalyticsErrors;
  readonly etag?: string;
  readonly groupId?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly resource?: AnalyticsGroupItemResource;
}

export interface AnalyticsGroupItemResource {
  readonly id?: string;
  readonly kind?: string;
}

/** A group snippet. */
export interface AnalyticsGroupSnippet {
  readonly publishedAt?: string;
  readonly title?: string;
}

/** Response message for GroupsService.ListGroupItems. */
export interface AnalyticsListGroupItemsResponse {
  readonly errors?: AnalyticsErrors;
  readonly etag?: string;
  readonly items?: ReadonlyArray<AnalyticsGroupItem>;
  readonly kind?: string;
}

/** Response message for GroupsService.ListGroups. */
export interface AnalyticsListGroupsResponse {
  readonly errors?: AnalyticsErrors;
  readonly etag?: string;
  readonly items?: ReadonlyArray<AnalyticsGroup>;
  readonly kind?: string;
  readonly nextPageToken?: string;
}

/** Response message for TargetedQueriesService.Query. */
export interface AnalyticsQueryResponse {
  readonly columnHeaders?: ReadonlyArray<AnalyticsResultTableColumnHeader>;
  readonly errors?: AnalyticsErrors;
  readonly kind?: string;
  readonly rows?: ReadonlyArray<ReadonlyArray<unknown>>;
}

/** The description of a column of the result table. */
export interface AnalyticsResultTableColumnHeader {
  readonly columnType?: string;
  readonly dataType?: string;
  readonly name?: string;
}

/** Response for the Videos.stats API. Returns VideoStat information about a batch of videos. VideoStat contains a subset of the information in Video that is relevant to statistics and content details. BatchGetStats is intentionally not atomic to provide a better user experience. BatchGetStatsResponse returns a summary to help users understand the outcome of the operation. */
export interface BatchGetStatsResponse {
  readonly etag?: string;
  readonly items?: ReadonlyArray<VideoStat>;
  readonly kind?: string;
  readonly summary?: BatchGetStatsSummary;
}

export interface BatchGetStatsSummary {
  readonly failedVideoCount?: string;
  readonly failedVideoIds?: ReadonlyArray<string>;
  readonly requestedVideoCount?: string;
  readonly succeededVideoCount?: string;
}

/** Details about the brand partner linked to the video for Creator Initiated Linking (CIL). Next ID: 6 */
export interface BrandPartner {
  readonly channelHandle?: string;
  readonly channelId?: string;
}

/** A *caption* resource represents a YouTube caption track. A caption track is associated with exactly one YouTube video. */
export interface Caption {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: CaptionSnippet;
}

export interface CaptionListResponse {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<Caption>;
  readonly kind?: string;
  readonly visitorId?: string;
}

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
  readonly lastUpdated?: string;
  readonly name?: string;
  readonly status?: "serving" | "syncing" | "failed";
  readonly trackKind?: "standard" | "ASR" | "forced";
  readonly videoId?: string;
}

/** Brief description of the live stream cdn settings. */
export interface CdnSettings {
  readonly format?: string;
  readonly frameRate?: "30fps" | "60fps" | "variable";
  readonly ingestionInfo?: IngestionInfo;
  readonly ingestionType?: "rtmp" | "dash" | "webrtc" | "hls";
  readonly resolution?: "240p" | "360p" | "480p" | "720p" | "1080p" | "1440p" | "2160p" | "variable";
}

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

/** The auditDetails object encapsulates channel data that is relevant for YouTube Partners during the audit process. */
export interface ChannelAuditDetails {
  readonly communityGuidelinesGoodStanding?: boolean;
  readonly contentIdClaimsGoodStanding?: boolean;
  readonly copyrightStrikesGoodStanding?: boolean;
}

/** A channel banner returned as the response to a channel_banner.insert call. */
export interface ChannelBannerResource {
  readonly etag?: string;
  readonly kind?: string;
  readonly url?: string;
}

/** Branding properties of a YouTube channel. */
export interface ChannelBrandingSettings {
  readonly channel?: ChannelSettings;
  readonly hints?: ReadonlyArray<PropertyValue>;
  readonly image?: ImageSettings;
  readonly watch?: WatchSettings;
}

/** Details about the content of a channel. */
export interface ChannelContentDetails {
  readonly relatedPlaylists?: unknown;
}

/** The contentOwnerDetails object encapsulates channel data that is relevant for YouTube Partners linked with the channel. */
export interface ChannelContentOwnerDetails {
  readonly contentOwner?: string;
  readonly timeLinked?: string;
}

/** Pings that the app shall fire (authenticated by biscotti cookie). Each ping has a context, in which the app must fire the ping, and a url identifying the ping. */
export interface ChannelConversionPing {
  readonly context?: "subscribe" | "unsubscribe" | "cview";
  readonly conversionUrl?: string;
}

/** The conversionPings object encapsulates information about conversion pings that need to be respected by the channel. */
export interface ChannelConversionPings {
  readonly pings?: ReadonlyArray<ChannelConversionPing>;
}

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

/** Channel localization setting */
export interface ChannelLocalization {
  readonly description?: string;
  readonly title?: string;
}

export interface ChannelProfileDetails {
  readonly channelId?: string;
  readonly channelUrl?: string;
  readonly displayName?: string;
  readonly profileImageUrl?: string;
}

export interface ChannelSection {
  readonly contentDetails?: ChannelSectionContentDetails;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly localizations?: Readonly<Record<string, ChannelSectionLocalization>>;
  readonly snippet?: ChannelSectionSnippet;
  readonly targeting?: ChannelSectionTargeting;
}

/** Details about a channelsection, including playlists and channels. */
export interface ChannelSectionContentDetails {
  readonly channels?: ReadonlyArray<string>;
  readonly playlists?: ReadonlyArray<string>;
}

export interface ChannelSectionListResponse {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<ChannelSection>;
  readonly kind?: string;
  readonly visitorId?: string;
}

/** ChannelSection localization setting */
export interface ChannelSectionLocalization {
  readonly title?: string;
}

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

/** ChannelSection targeting setting. */
export interface ChannelSectionTargeting {
  readonly countries?: ReadonlyArray<string>;
  readonly languages?: ReadonlyArray<string>;
  readonly regions?: ReadonlyArray<string>;
}

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

/** Basic details about a channel, including title, description and thumbnails. */
export interface ChannelSnippet {
  readonly country?: string;
  readonly customUrl?: string;
  readonly defaultLanguage?: string;
  readonly description?: string;
  readonly localized?: ChannelLocalization;
  readonly publishedAt?: string;
  readonly thumbnails?: ThumbnailDetails;
  readonly title?: string;
}

/** Statistics about a channel: number of subscribers, number of videos in the channel, etc. */
export interface ChannelStatistics {
  readonly commentCount?: string;
  readonly hiddenSubscriberCount?: boolean;
  readonly subscriberCount?: string;
  readonly videoCount?: string;
  readonly viewCount?: string;
}

/** JSON template for the status part of a channel. */
export interface ChannelStatus {
  readonly isChannelMonetizationEnabled?: boolean;
  readonly isLinked?: boolean;
  readonly longUploadsStatus?: "longUploadsUnspecified" | "allowed" | "eligible" | "disallowed";
  readonly madeForKids?: boolean;
  readonly privacyStatus?: "public" | "unlisted" | "private";
  readonly selfDeclaredMadeForKids?: boolean;
}

/** Information specific to a creator in an affiliate program linked to a YouTube channel. */
export interface ChannelToAffiliateProgramLinkDetails {
  readonly merchantId?: string;
  readonly programStatus?: "affiliateProgramStatusUnspecified" | "active" | "inactive";
  readonly statusUpdateReason?: string;
  readonly statusUpdateTime?: string;
}

/** Freebase topic information related to the channel. */
export interface ChannelTopicDetails {
  readonly topicCategories?: ReadonlyArray<string>;
  readonly topicIds?: ReadonlyArray<string>;
}

/** Information specific to a store on a merchandising platform linked to a YouTube channel. */
export interface ChannelToStoreLinkDetails {
  readonly billingDetails?: ChannelToStoreLinkDetailsBillingDetails;
  readonly merchantAffiliateProgramDetails?: ChannelToStoreLinkDetailsMerchantAffiliateProgramDetails;
  readonly merchantId?: string;
  readonly storeName?: string;
  readonly storeUrl?: string;
}

/** Information specific to billing. */
export interface ChannelToStoreLinkDetailsBillingDetails {
  readonly billingStatus?: "billingStatusUnspecified" | "billingStatusPending" | "billingStatusActive" | "billingStatusInactive";
}

/** Information specific to merchant affiliate program. */
export interface ChannelToStoreLinkDetailsMerchantAffiliateProgramDetails {
  readonly status?: "merchantAffiliateProgramStatusUnspecified" | "merchantAffiliateProgramStatusEligible" | "merchantAffiliateProgramStatusActive" | "merchantAffiliateProgramStatusPaused";
}

/** A *comment* represents a single YouTube comment. */
export interface Comment {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: CommentSnippet;
}

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
  readonly publishedAt?: string;
  readonly textDisplay?: string;
  readonly textOriginal?: string;
  readonly updatedAt?: string;
  readonly videoId?: string;
  readonly viewerRating?: "none" | "like" | "dislike";
}

/** Contains the id of the author's YouTube channel, if any. */
export interface CommentSnippetAuthorChannelId {
  readonly value?: string;
}

/** A *comment thread* represents information that applies to a top level comment and all its replies. It can also include the top level comment itself and some of the replies. */
export interface CommentThread {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly replies?: CommentThreadReplies;
  readonly snippet?: CommentThreadSnippet;
}

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

/** Comments written in (direct or indirect) reply to the top level comment. */
export interface CommentThreadReplies {
  readonly comments?: ReadonlyArray<Comment>;
}

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

/** Note that there may be a 5-second end-point resolution issue. For instance, if a cuepoint comes in for 22:03:27, we may stuff the cuepoint into 22:03:25 or 22:03:30, depending. This is an artifact of HLS. */
export interface Cuepoint {
  readonly cueType?: "cueTypeUnspecified" | "cueTypeAd";
  readonly durationSecs?: number;
  readonly etag?: string;
  readonly id?: string;
  readonly insertionOffsetTimeMs?: string;
  readonly walltimeMs?: string;
}

/** Schedule to insert cuepoints into a broadcast by ads automator. */
export interface CuepointSchedule {
  readonly enabled?: boolean;
  readonly pauseAdsUntil?: string;
  readonly repeatIntervalSecs?: number;
  readonly scheduleStrategy?: "scheduleStrategyUnspecified" | "concurrent" | "nonConcurrent";
}

export interface Entity {
  readonly id?: string;
  readonly typeId?: string;
  readonly url?: string;
}

/** Geographical coordinates of a point, in WGS84. */
export interface GeoPoint {
  readonly altitude?: number;
  readonly latitude?: number;
  readonly longitude?: number;
}

/** An *i18nLanguage* resource identifies a UI language currently supported by YouTube. */
export interface I18nLanguage {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: I18nLanguageSnippet;
}

export interface I18nLanguageListResponse {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<I18nLanguage>;
  readonly kind?: string;
  readonly visitorId?: string;
}

/** Basic details about an i18n language, such as language code and human-readable name. */
export interface I18nLanguageSnippet {
  readonly hl?: string;
  readonly name?: string;
}

/** A *i18nRegion* resource identifies a region where YouTube is available. */
export interface I18nRegion {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: I18nRegionSnippet;
}

export interface I18nRegionListResponse {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<I18nRegion>;
  readonly kind?: string;
  readonly visitorId?: string;
}

/** Basic details about an i18n region, such as region code and human-readable name. */
export interface I18nRegionSnippet {
  readonly gl?: string;
  readonly name?: string;
}

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

/** Describes information necessary for ingesting an RTMP, HTTP, or SRT stream. */
export interface IngestionInfo {
  readonly backupIngestionAddress?: string;
  readonly ingestionAddress?: string;
  readonly rtmpsBackupIngestionAddress?: string;
  readonly rtmpsIngestionAddress?: string;
  readonly streamName?: string;
}

/** Describes an invideo branding. */
export interface InvideoBranding {
  readonly imageBytes?: string;
  readonly imageUrl?: string;
  readonly position?: InvideoPosition;
  readonly targetChannelId?: string;
  readonly timing?: InvideoTiming;
}

/** Describes the spatial position of a visual widget inside a video. It is a union of various position types, out of which only will be set one. */
export interface InvideoPosition {
  readonly cornerPosition?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
  readonly type?: "corner";
}

/** Describes a temporal position of a visual widget inside a video. */
export interface InvideoTiming {
  readonly durationMs?: string;
  readonly offsetMs?: string;
  readonly type?: "offsetFromStart" | "offsetFromEnd";
}

export interface LanguageTag {
  readonly value?: string;
}

export interface LevelDetails {
  readonly displayName?: string;
}

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

/** Detailed settings of a broadcast. */
export interface LiveBroadcastContentDetails {
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
}

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

/** Monetization settings of a broadcast. */
export interface LiveBroadcastMonetizationDetails {
  readonly cuepointSchedule?: CuepointSchedule;
}

/** Basic broadcast information. */
export interface LiveBroadcastSnippet {
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
}

/** Statistics about the live broadcast. These represent a snapshot of the values at the time of the request. Statistics are only returned for live broadcasts. */
export interface LiveBroadcastStatistics {
  readonly concurrentViewers?: string;
}

/** Live broadcast state. */
export interface LiveBroadcastStatus {
  readonly lifeCycleStatus?: "lifeCycleStatusUnspecified" | "created" | "ready" | "testing" | "live" | "complete" | "revoked" | "testStarting" | "liveStarting";
  readonly liveBroadcastPriority?: "liveBroadcastPriorityUnspecified" | "low" | "normal" | "high";
  readonly madeForKids?: boolean;
  readonly privacyStatus?: "public" | "unlisted" | "private";
  readonly recordingStatus?: "liveBroadcastRecordingStatusUnspecified" | "notRecording" | "recording" | "recorded";
  readonly selfDeclaredMadeForKids?: boolean;
}

/** A `__liveChatBan__` resource represents a ban for a YouTube live chat. */
export interface LiveChatBan {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: LiveChatBanSnippet;
}

export interface LiveChatBanSnippet {
  readonly banDurationSeconds?: string;
  readonly bannedUserDetails?: ChannelProfileDetails;
  readonly liveChatId?: string;
  readonly type?: "liveChatBanTypeUnspecified" | "permanent" | "temporary";
}

export interface LiveChatFanFundingEventDetails {
  readonly amountDisplayString?: string;
  readonly amountMicros?: string;
  readonly currency?: string;
  readonly userComment?: string;
}

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

export interface LiveChatGiftMembershipReceivedDetails {
  readonly associatedMembershipGiftingMessageId?: string;
  readonly gifterChannelId?: string;
  readonly memberLevelName?: string;
}

export interface LiveChatMemberMilestoneChatDetails {
  readonly memberLevelName?: string;
  readonly memberMonth?: number;
  readonly userComment?: string;
}

export interface LiveChatMembershipGiftingDetails {
  readonly giftMembershipsCount?: number;
  readonly giftMembershipsLevelName?: string;
}

/** A *liveChatMessage* resource represents a chat message in a YouTube Live Chat. */
export interface LiveChatMessage {
  readonly authorDetails?: LiveChatMessageAuthorDetails;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: LiveChatMessageSnippet;
}

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

export interface LiveChatMessageDeletedDetails {
  readonly deletedMessageId?: string;
}

export interface LiveChatMessageListResponse {
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
}

export interface LiveChatMessageRetractedDetails {
  readonly retractedMessageId?: string;
}

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
  readonly publishedAt?: string;
  readonly superChatDetails?: LiveChatSuperChatDetails;
  readonly superStickerDetails?: LiveChatSuperStickerDetails;
  readonly textMessageDetails?: LiveChatTextMessageDetails;
  readonly type?: "invalidType" | "textMessageEvent" | "tombstone" | "fanFundingEvent" | "chatEndedEvent" | "sponsorOnlyModeStartedEvent" | "sponsorOnlyModeEndedEvent" | "newSponsorEvent" | "memberMilestoneChatEvent" | "membershipGiftingEvent" | "giftMembershipReceivedEvent" | "messageDeletedEvent" | "messageRetractedEvent" | "userBannedEvent" | "superChatEvent" | "superStickerEvent" | "pollEvent" | "giftEvent";
  readonly userBannedDetails?: LiveChatUserBannedMessageDetails;
}

/** A *liveChatModerator* resource represents a moderator for a YouTube live chat. A chat moderator has the ability to ban/unban users from a chat, remove message, etc. */
export interface LiveChatModerator {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: LiveChatModeratorSnippet;
}

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

export interface LiveChatModeratorSnippet {
  readonly liveChatId?: string;
  readonly moderatorDetails?: ChannelProfileDetails;
}

export interface LiveChatNewSponsorDetails {
  readonly isUpgrade?: boolean;
  readonly memberLevelName?: string;
}

export interface LiveChatPollDetails {
  readonly metadata?: LiveChatPollDetailsPollMetadata;
  readonly status?: "unknown" | "active" | "closed";
}

export interface LiveChatPollDetailsPollMetadata {
  readonly options?: ReadonlyArray<LiveChatPollDetailsPollMetadataPollOption>;
  readonly questionText?: string;
}

export interface LiveChatPollDetailsPollMetadataPollOption {
  readonly optionText?: string;
  readonly tally?: string;
}

export interface LiveChatSuperChatDetails {
  readonly amountDisplayString?: string;
  readonly amountMicros?: string;
  readonly currency?: string;
  readonly tier?: number;
  readonly userComment?: string;
}

export interface LiveChatSuperStickerDetails {
  readonly amountDisplayString?: string;
  readonly amountMicros?: string;
  readonly currency?: string;
  readonly superStickerMetadata?: SuperStickerMetadata;
  readonly tier?: number;
}

export interface LiveChatTextMessageDetails {
  readonly messageText?: string;
}

export interface LiveChatUserBannedMessageDetails {
  readonly banDurationSeconds?: string;
  readonly bannedUserDetails?: ChannelProfileDetails;
  readonly banType?: "permanent" | "temporary";
}

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

export interface LiveStreamConfigurationIssue {
  readonly description?: string;
  readonly reason?: string;
  readonly severity?: "info" | "warning" | "error";
  readonly type?: "gopSizeOver" | "gopSizeLong" | "gopSizeShort" | "openGop" | "badContainer" | "audioBitrateHigh" | "audioBitrateLow" | "audioSampleRate" | "bitrateHigh" | "bitrateLow" | "audioCodec" | "videoCodec" | "noAudioStream" | "noVideoStream" | "multipleVideoStreams" | "multipleAudioStreams" | "audioTooManyChannels" | "interlacedVideo" | "frameRateHigh" | "resolutionMismatch" | "videoCodecMismatch" | "videoInterlaceMismatch" | "videoProfileMismatch" | "videoBitrateMismatch" | "framerateMismatch" | "gopMismatch" | "audioSampleRateMismatch" | "audioStereoMismatch" | "audioCodecMismatch" | "audioBitrateMismatch" | "videoResolutionSuboptimal" | "videoResolutionUnsupported" | "videoIngestionStarved" | "videoIngestionFasterThanRealtime";
}

/** Detailed settings of a stream. */
export interface LiveStreamContentDetails {
  readonly closedCaptionsIngestionUrl?: string;
  readonly isReusable?: boolean;
}

export interface LiveStreamHealthStatus {
  readonly configurationIssues?: ReadonlyArray<LiveStreamConfigurationIssue>;
  readonly lastUpdateTimeSeconds?: string;
  readonly status?: "good" | "ok" | "bad" | "noData" | "revoked";
}

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

export interface LiveStreamSnippet {
  readonly channelId?: string;
  readonly description?: string;
  readonly isDefaultStream?: boolean;
  readonly publishedAt?: string;
  readonly title?: string;
}

/** Brief description of the live stream status. */
export interface LiveStreamStatus {
  readonly healthStatus?: LiveStreamHealthStatus;
  readonly streamStatus?: "created" | "ready" | "active" | "inactive" | "error";
}

export interface LocalizedProperty {
  readonly default?: string;
  readonly defaultLanguage?: LanguageTag;
  readonly localized?: ReadonlyArray<LocalizedString>;
}

export interface LocalizedString {
  readonly language?: string;
  readonly value?: string;
}

/** A *member* resource represents a member for a YouTube channel. A member provides recurring monetary support to a creator and receives special benefits. */
export interface Member {
  readonly etag?: string;
  readonly kind?: string;
  readonly snippet?: MemberSnippet;
}

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

export interface MembershipsDetails {
  readonly accessibleLevels?: ReadonlyArray<string>;
  readonly highestAccessibleLevel?: string;
  readonly highestAccessibleLevelDisplayName?: string;
  readonly membershipsDuration?: MembershipsDuration;
  readonly membershipsDurationAtLevels?: ReadonlyArray<MembershipsDurationAtLevel>;
}

export interface MembershipsDuration {
  readonly memberSince?: string;
  readonly memberTotalDurationMonths?: number;
}

export interface MembershipsDurationAtLevel {
  readonly level?: string;
  readonly memberSince?: string;
  readonly memberTotalDurationMonths?: number;
}

/** A *membershipsLevel* resource represents an offer made by YouTube creators for their fans. Users can become members of the channel by joining one of the available levels. They will provide recurring monetary support and receives special benefits. */
export interface MembershipsLevel {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: MembershipsLevelSnippet;
}

export interface MembershipsLevelListResponse {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<MembershipsLevel>;
  readonly kind?: string;
  readonly visitorId?: string;
}

export interface MembershipsLevelSnippet {
  readonly creatorChannelId?: string;
  readonly levelDetails?: LevelDetails;
}

export interface MemberSnippet {
  readonly creatorChannelId?: string;
  readonly memberDetails?: ChannelProfileDetails;
  readonly membershipsDetails?: MembershipsDetails;
}

/** Settings and Info of the monitor stream */
export interface MonitorStreamInfo {
  readonly broadcastStreamDelayMs?: number;
  readonly embedHtml?: string;
  readonly enableMonitorStream?: boolean;
}

/** Paging details for lists of resources, including total number of items available and number of resources returned in a single page. */
export interface PageInfo {
  readonly resultsPerPage?: number;
  readonly totalResults?: number;
}

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

export interface PlaylistContentDetails {
  readonly itemCount?: number;
}

export interface PlaylistImage {
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: PlaylistImageSnippet;
}

export interface PlaylistImageListResponse {
  readonly items?: ReadonlyArray<PlaylistImage>;
  readonly kind?: string;
  readonly nextPageToken?: string;
  readonly pageInfo?: PageInfo;
  readonly prevPageToken?: string;
}

/** A *playlistImage* resource identifies another resource, such as a image, that is associated with a playlist. In addition, the playlistImage resource contains details about the included resource that pertain specifically to how that resource is used in that playlist. YouTube uses playlists to identify special collections of videos for a channel, such as: - uploaded videos - favorite videos - positively rated (liked) videos - watch history To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information. You can retrieve the playlist IDs for each of these lists from the channel resource for a given channel. You can then use the playlistImages.list method to retrieve image data for any of those playlists. You can also add or remove images from those lists by calling the playlistImages.insert and playlistImages.delete methods. */
export interface PlaylistImageSnippet {
  readonly height?: number;
  readonly playlistId?: string;
  readonly type?: "hero";
  readonly width?: number;
}

/** A *playlistItem* resource identifies another resource, such as a video, that is included in a playlist. In addition, the playlistItem resource contains details about the included resource that pertain specifically to how that resource is used in that playlist. YouTube uses playlists to identify special collections of videos for a channel, such as: - uploaded videos - favorite videos - positively rated (liked) videos - watch history - watch later To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information. You can retrieve the playlist IDs for each of these lists from the channel resource for a given channel. You can then use the playlistItems.list method to retrieve any of those lists. You can also add or remove items from those lists by calling the playlistItems.insert and playlistItems.delete methods. For example, if a user gives a positive rating to a video, you would insert that video into the liked videos playlist for that user's channel. */
export interface PlaylistItem {
  readonly contentDetails?: PlaylistItemContentDetails;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: PlaylistItemSnippet;
  readonly status?: PlaylistItemStatus;
}

export interface PlaylistItemContentDetails {
  readonly endAt?: string;
  readonly note?: string;
  readonly startAt?: string;
  readonly videoId?: string;
  readonly videoPublishedAt?: string;
}

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

/** Basic details about a playlist, including title, description and thumbnails. Basic details of a YouTube Playlist item provided by the author. Next ID: 15 */
export interface PlaylistItemSnippet {
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
}

/** Information about the playlist item's privacy status. */
export interface PlaylistItemStatus {
  readonly privacyStatus?: "public" | "unlisted" | "private";
}

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

/** Playlist localization setting */
export interface PlaylistLocalization {
  readonly description?: string;
  readonly title?: string;
}

export interface PlaylistPlayer {
  readonly embedHtml?: string;
}

/** Basic details about a playlist, including title, description and thumbnails. */
export interface PlaylistSnippet {
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
}

export interface PlaylistStatus {
  readonly podcastStatus?: "enabled" | "disabled";
  readonly privacyStatus?: "public" | "unlisted" | "private";
}

/** A pair Property / Value. */
export interface PropertyValue {
  readonly property?: string;
  readonly value?: string;
}

export interface RelatedEntity {
  readonly entity?: Entity;
}

/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
export interface ReportingEmpty {

}

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

/** gdata */
export interface ReportingGdataDiffChecksumsResponse {
  readonly checksumsLocation?: ReportingGdataCompositeMedia;
  readonly chunkSizeBytes?: string;
  readonly objectLocation?: ReportingGdataCompositeMedia;
  readonly objectSizeBytes?: string;
  readonly objectVersion?: string;
}

/** gdata */
export interface ReportingGdataDiffDownloadResponse {
  readonly objectLocation?: ReportingGdataCompositeMedia;
}

/** gdata */
export interface ReportingGdataDiffUploadRequest {
  readonly checksumsInfo?: ReportingGdataCompositeMedia;
  readonly objectInfo?: ReportingGdataCompositeMedia;
  readonly objectVersion?: string;
}

/** gdata */
export interface ReportingGdataDiffUploadResponse {
  readonly objectVersion?: string;
  readonly originalObject?: ReportingGdataCompositeMedia;
}

/** gdata */
export interface ReportingGdataDiffVersionResponse {
  readonly objectSizeBytes?: string;
  readonly objectVersion?: string;
}

/** gdata */
export interface ReportingGdataDownloadParameters {
  readonly allowGzipCompression?: boolean;
  readonly ignoreRange?: boolean;
}

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

/** gdata */
export interface ReportingGdataObjectId {
  readonly bucketName?: string;
  readonly generation?: string;
  readonly objectName?: string;
}

/** A job creating reports of a specific type. */
export interface ReportingJob {
  readonly createTime?: string;
  readonly expireTime?: string;
  readonly id?: string;
  readonly name?: string;
  readonly reportTypeId?: string;
  readonly systemManaged?: boolean;
}

/** Response message for ReportingService.ListJobs. */
export interface ReportingListJobsResponse {
  readonly jobs?: ReadonlyArray<ReportingJob>;
  readonly nextPageToken?: string;
}

/** Response message for ReportingService.ListReports. */
export interface ReportingListReportsResponse {
  readonly nextPageToken?: string;
  readonly reports?: ReadonlyArray<ReportingReport>;
}

/** Response message for ReportingService.ListReportTypes. */
export interface ReportingListReportTypesResponse {
  readonly nextPageToken?: string;
  readonly reportTypes?: ReadonlyArray<ReportingReportType>;
}

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

/** A report type. */
export interface ReportingReportType {
  readonly deprecateTime?: string;
  readonly id?: string;
  readonly name?: string;
  readonly systemManaged?: boolean;
}

/** A resource id is a generic reference that points to another YouTube resource. */
export interface ResourceId {
  readonly channelId?: string;
  readonly kind?: string;
  readonly playlistId?: string;
  readonly videoId?: string;
}

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

/** A search result contains information about a YouTube video, channel, or playlist that matches the search parameters specified in an API request. While a search result points to a uniquely identifiable resource, like a video, it does not have its own persistent data. */
export interface SearchResult {
  readonly etag?: string;
  readonly id?: ResourceId;
  readonly kind?: string;
  readonly snippet?: SearchResultSnippet;
}

/** Basic details about a search result, including title, description and thumbnails of the item referenced by the search result. */
export interface SearchResultSnippet {
  readonly channelId?: string;
  readonly channelTitle?: string;
  readonly description?: string;
  readonly liveBroadcastContent?: "none" | "upcoming" | "live" | "completed";
  readonly publishedAt?: string;
  readonly thumbnails?: ThumbnailDetails;
  readonly title?: string;
}

/** A *subscription* resource contains information about a YouTube user subscription. A subscription notifies a user when new videos are added to a channel or when another user takes one of several actions on YouTube, such as uploading a video, rating a video, or commenting on a video. */
export interface Subscription {
  readonly contentDetails?: SubscriptionContentDetails;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: SubscriptionSnippet;
  readonly subscriberSnippet?: SubscriptionSubscriberSnippet;
}

/** Details about the content to witch a subscription refers. */
export interface SubscriptionContentDetails {
  readonly activityType?: "subscriptionActivityTypeUnspecified" | "all" | "uploads";
  readonly newItemCount?: number;
  readonly totalItemCount?: number;
}

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

/** Basic details about a subscription, including title, description and thumbnails of the subscribed item. */
export interface SubscriptionSnippet {
  readonly channelId?: string;
  readonly description?: string;
  readonly publishedAt?: string;
  readonly resourceId?: ResourceId;
  readonly thumbnails?: ThumbnailDetails;
  readonly title?: string;
}

/** Basic details about a subscription's subscriber including title, description, channel ID and thumbnails. */
export interface SubscriptionSubscriberSnippet {
  readonly channelId?: string;
  readonly description?: string;
  readonly thumbnails?: ThumbnailDetails;
  readonly title?: string;
}

/** A `__superChatEvent__` resource represents a Super Chat purchase on a YouTube channel. */
export interface SuperChatEvent {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: SuperChatEventSnippet;
}

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

export interface SuperChatEventSnippet {
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
}

export interface SuperStickerMetadata {
  readonly altText?: string;
  readonly altTextLanguage?: string;
  readonly stickerId?: string;
}

export interface TestItem {
  readonly etag?: string;
  readonly featuredPart?: boolean;
  readonly gaia?: string;
  readonly id?: string;
  readonly snippet?: TestItemTestItemSnippet;
}

export interface TestItemTestItemSnippet {

}

/** A *third party account link* resource represents a link between a YouTube account or a channel and an account on a third-party service. */
export interface ThirdPartyLink {
  readonly etag?: string;
  readonly kind?: string;
  readonly linkingToken?: string;
  readonly snippet?: ThirdPartyLinkSnippet;
  readonly status?: ThirdPartyLinkStatus;
}

export interface ThirdPartyLinkListResponse {
  readonly etag?: string;
  readonly items?: ReadonlyArray<ThirdPartyLink>;
  readonly kind?: string;
}

/** Basic information about a third party account link, including its type and type-specific information. */
export interface ThirdPartyLinkSnippet {
  readonly channelToAffiliateProgramLink?: ChannelToAffiliateProgramLinkDetails;
  readonly channelToStoreLink?: ChannelToStoreLinkDetails;
  readonly type?: "linkUnspecified" | "channelToStoreLink" | "channelToAffiliateProgramLink";
}

/** The third-party link status object contains information about the status of the link. */
export interface ThirdPartyLinkStatus {
  readonly linkStatus?: "unknown" | "failed" | "pending" | "linked";
}

/** A thumbnail is an image representing a YouTube resource. */
export interface Thumbnail {
  readonly height?: number;
  readonly url?: string;
  readonly width?: number;
}

/** Internal representation of thumbnails for a YouTube resource. */
export interface ThumbnailDetails {
  readonly default?: Thumbnail;
  readonly high?: Thumbnail;
  readonly maxres?: Thumbnail;
  readonly medium?: Thumbnail;
  readonly standard?: Thumbnail;
}

export interface ThumbnailSetResponse {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<ThumbnailDetails>;
  readonly kind?: string;
  readonly visitorId?: string;
}

/** Stub token pagination template to suppress results. */
export interface TokenPagination {

}

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

export interface VideoAbuseReport {
  readonly comments?: string;
  readonly language?: string;
  readonly reasonId?: string;
  readonly secondaryReasonId?: string;
  readonly videoId?: string;
}

/** A `__videoAbuseReportReason__` resource identifies a reason that a video could be reported as abusive. Video abuse report reasons are used with `video.ReportAbuse`. */
export interface VideoAbuseReportReason {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: VideoAbuseReportReasonSnippet;
}

export interface VideoAbuseReportReasonListResponse {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<VideoAbuseReportReason>;
  readonly kind?: string;
  readonly visitorId?: string;
}

/** Basic details about a video category, such as its localized title. */
export interface VideoAbuseReportReasonSnippet {
  readonly label?: string;
  readonly secondaryReasons?: ReadonlyArray<VideoAbuseReportSecondaryReason>;
}

export interface VideoAbuseReportSecondaryReason {
  readonly id?: string;
  readonly label?: string;
}

export interface VideoAgeGating {
  readonly alcoholContent?: boolean;
  readonly restricted?: boolean;
  readonly videoGameRating?: "anyone" | "m15Plus" | "m16Plus" | "m17Plus";
}

/** A *videoCategory* resource identifies a category that has been or could be associated with uploaded videos. */
export interface VideoCategory {
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: VideoCategorySnippet;
}

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

/** Basic details about a video category, such as its localized title. */
export interface VideoCategorySnippet {
  readonly assignable?: boolean;
  readonly channelId?: string;
  readonly title?: string;
}

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

/** DEPRECATED Region restriction of the video. */
export interface VideoContentDetailsRegionRestriction {
  readonly allowed?: ReadonlyArray<string>;
  readonly blocked?: ReadonlyArray<string>;
}

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

/** Information about an audio stream. */
export interface VideoFileDetailsAudioStream {
  readonly bitrateBps?: string;
  readonly channelCount?: number;
  readonly codec?: string;
  readonly vendor?: string;
}

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

export interface VideoGetRatingResponse {
  readonly etag?: string;
  readonly eventId?: string;
  readonly items?: ReadonlyArray<VideoRating>;
  readonly kind?: string;
  readonly visitorId?: string;
}

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

/** Details about the live streaming metadata. */
export interface VideoLiveStreamingDetails {
  readonly activeLiveChatId?: string;
  readonly actualEndTime?: string;
  readonly actualStartTime?: string;
  readonly concurrentViewers?: string;
  readonly scheduledEndTime?: string;
  readonly scheduledStartTime?: string;
}

/** Localized versions of certain video properties (e.g. title). */
export interface VideoLocalization {
  readonly description?: string;
  readonly title?: string;
}

/** Details about monetization of a YouTube Video. */
export interface VideoMonetizationDetails {
  readonly access?: AccessPolicy;
}

/** Details about paid content, such as paid product placement, sponsorships or endorsement, contained in a YouTube video and a method to inform viewers of paid promotion. This data can only be retrieved by the video owner. */
export interface VideoPaidProductPlacementDetails {
  readonly hasPaidProductPlacement?: boolean;
}

/** Player to be used for a video playback. */
export interface VideoPlayer {
  readonly embedHeight?: string;
  readonly embedHtml?: string;
  readonly embedWidth?: string;
}

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

/** Video processing progress and completion time estimate. */
export interface VideoProcessingDetailsProcessingProgress {
  readonly partsProcessed?: string;
  readonly partsTotal?: string;
  readonly timeLeftMs?: string;
}

/** DEPRECATED. b/157517979: This part was never populated after it was added. However, it sees non-zero traffic because there is generated client code in the wild that refers to it [1]. We keep this field and do NOT remove it because otherwise V3 would return an error when this part gets requested [2]. [1] https://developers.google.com/resources/api-libraries/documentation/youtube/v3/csharp/latest/classGoogle_1_1Apis_1_1YouTube_1_1v3_1_1Data_1_1VideoProjectDetails.html [2] http://google3/video/youtube/src/python/servers/data_api/common.py?l=1565-1569&rcl=344141677 */
export interface VideoProjectDetails {

}

/** Basic details about rating of a video. */
export interface VideoRating {
  readonly rating?: "none" | "like" | "dislike";
  readonly videoId?: string;
}

/** Recording information associated with the video. */
export interface VideoRecordingDetails {
  readonly location?: GeoPoint;
  readonly locationDescription?: string;
  readonly recordingDate?: string;
}

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
  readonly publishedAt?: string;
  readonly tags?: ReadonlyArray<string>;
  readonly thumbnails?: ThumbnailDetails;
  readonly title?: string;
}

/** A *VideoStat* resource represents a YouTube video's stats. */
export interface VideoStat {
  readonly contentDetails?: VideoStatsContentDetails;
  readonly etag?: string;
  readonly id?: string;
  readonly kind?: string;
  readonly snippet?: VideoStatsSnippet;
  readonly statistics?: VideoStatsStatistics;
}

/** Statistics about the video, such as the number of times the video was viewed or liked. */
export interface VideoStatistics {
  readonly commentCount?: string;
  readonly dislikeCount?: string;
  readonly favoriteCount?: string;
  readonly likeCount?: string;
  readonly viewCount?: string;
}

/** Details about the content of a YouTube Video. This is a subset of the information in VideoContentDetails specifically for the Videos.stats API. */
export interface VideoStatsContentDetails {
  readonly duration?: string;
  readonly durationMillis?: string;
}

/** Basic details about a video. This is a subset of the information in VideoSnippet specifically for the Videos.stats API. */
export interface VideoStatsSnippet {
  readonly publishTime?: string;
}

/** Statistics about the video, such as the number of times the video was viewed or liked. */
export interface VideoStatsStatistics {
  readonly commentCount?: string;
  readonly likeCount?: string;
  readonly viewCount?: string;
}

/** Basic details about a video category, such as its localized title. Next Id: 19 */
export interface VideoStatus {
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

/** Specifies suggestions on how to improve video content, including encoding hints, tag suggestions, and editor suggestions. */
export interface VideoSuggestions {
  readonly editorSuggestions?: ReadonlyArray<"videoAutoLevels" | "videoStabilize" | "videoCrop" | "audioQuietAudioSwap">;
  readonly processingErrors?: ReadonlyArray<"audioFile" | "imageFile" | "projectFile" | "notAVideoFile" | "docFile" | "archiveFile" | "unsupportedSpatialAudioLayout">;
  readonly processingHints?: ReadonlyArray<"nonStreamableMov" | "sendBestQualityVideo" | "sphericalVideo" | "spatialAudio" | "vrVideo" | "hdrVideo">;
  readonly processingWarnings?: ReadonlyArray<"unknownContainer" | "unknownVideoCodec" | "unknownAudioCodec" | "inconsistentResolution" | "hasEditlist" | "problematicVideoCodec" | "problematicAudioCodec" | "unsupportedVrStereoMode" | "unsupportedSphericalProjectionType" | "unsupportedHdrPixelFormat" | "unsupportedHdrColorMetadata" | "problematicHdrLookupTable">;
  readonly tagSuggestions?: ReadonlyArray<VideoSuggestionsTagSuggestion>;
}

/** A single tag suggestion with its relevance information. */
export interface VideoSuggestionsTagSuggestion {
  readonly categoryRestricts?: ReadonlyArray<string>;
  readonly tag?: string;
}

/** Freebase topic information related to the video. */
export interface VideoTopicDetails {
  readonly relevantTopicIds?: ReadonlyArray<string>;
  readonly topicCategories?: ReadonlyArray<string>;
  readonly topicIds?: ReadonlyArray<string>;
}

/** Specifies who is allowed to train on the video. */
export interface VideoTrainability {
  readonly etag?: string;
  readonly kind?: string;
  readonly permitted?: ReadonlyArray<string>;
  readonly videoId?: string;
}

/** Branding properties for the watch. All deprecated. */
export interface WatchSettings {
  readonly backgroundColor?: string;
  readonly featuredPlaylistId?: string;
  readonly textColor?: string;
}
