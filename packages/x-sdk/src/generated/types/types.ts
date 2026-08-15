// @generated
// fingerprint: sha256:c024644f6194fabdabc649ec80c33226d80878cc1905e4152f07e6be13f43f15
// DO NOT EDIT: generated file; changes will be overwritten.
// This file is generated. Do not edit by hand.

export type ActivityEventId = string;

export type ActivityStreamingResponsePayload = ProfileUpdateActivityResponsePayload | NewsActivityResponsePayload | FollowActivityResponsePayload | Post | PostDeleteActivityResponsePayload | LikeWithPostAuthor;

/** An activity event or error that can be returned by the x activity streaming API. */
export interface ActivityStreamResponse {
  readonly data?: unknown;
  readonly errors?: ReadonlyArray<Problem>;
}

/** An XAA subscription filter. */
export interface ActivitySubscriptionFilter {
  readonly direction?: "inbound" | "outbound";
  readonly keyword?: Keyword;
  readonly user_id?: UserId;
}

export interface AddChatGroupMembersActionSignatures {
  readonly encoded_message_event_detail: string;
  readonly message_event_signature: AddChatGroupMembersActionSignaturesMessageEventSignature;
  readonly message_id: string;
  readonly signature_payload?: string;
}

export interface AddChatGroupMembersActionSignaturesMessageEventSignature {
  readonly message_signing_key_info_list?: ReadonlyArray<AddChatGroupMembersActionSignaturesMessageEventSignatureMessageSigningKeyInfoList>;
  readonly public_key_version: string;
  readonly signature: string;
  readonly signature_version: string;
  readonly signing_public_key?: string;
}

export interface AddChatGroupMembersActionSignaturesMessageEventSignatureMessageSigningKeyInfoList {
  readonly member_id?: string;
  readonly public_key_version?: string;
  readonly signing_public_key?: string;
}

export interface AddChatGroupMembersConversationParticipantKeys {
  readonly encrypted_conversation_key?: string;
  readonly public_key_version?: string;
  readonly user_id?: string;
}

export interface AddChatGroupMembersRequest {
  readonly action_signatures?: ReadonlyArray<AddChatGroupMembersActionSignatures>;
  readonly conversation_key_version?: string;
  readonly conversation_participant_keys?: ReadonlyArray<AddChatGroupMembersConversationParticipantKeys>;
  readonly encrypted_avatar_url?: string;
  readonly encrypted_title?: string;
  readonly user_ids: ReadonlyArray<string>;
}

export interface AddChatGroupMembersResponse {
  readonly data?: Post;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface AddConversationKeysActionSignatures {
  readonly encoded_message_event_detail: string;
  readonly message_event_signature: AddConversationKeysActionSignaturesMessageEventSignature;
  readonly message_id: string;
  readonly signature_payload?: string;
}

export interface AddConversationKeysActionSignaturesMessageEventSignature {
  readonly message_signing_key_info_list?: ReadonlyArray<AddConversationKeysActionSignaturesMessageEventSignatureMessageSigningKeyInfoList>;
  readonly public_key_version: string;
  readonly signature: string;
  readonly signature_version: string;
  readonly signing_public_key?: string;
}

export interface AddConversationKeysActionSignaturesMessageEventSignatureMessageSigningKeyInfoList {
  readonly member_id?: string;
  readonly public_key_version?: string;
  readonly signing_public_key?: string;
}

export interface AddConversationKeysConversationParticipantKeys {
  readonly encrypted_conversation_key?: string;
  readonly public_key_version?: string;
  readonly user_id?: string;
}

export interface AddConversationKeysRequest {
  readonly action_signatures?: ReadonlyArray<AddConversationKeysActionSignatures>;
  readonly base64_encoded_key_rotation?: string;
  readonly conversation_key_version: string;
  readonly conversation_participant_keys: ReadonlyArray<AddConversationKeysConversationParticipantKeys>;
}

export interface AddConversationKeysResponse {
  readonly data?: AddConversationKeysResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface AddConversationKeysResponseData {
  readonly conversation_id?: string;
  readonly sequence_id?: string;
}

export interface AddListsMemberRequest {
  readonly user_id: string;
}

export interface AddListsMemberResponse {
  readonly data?: AddListsMemberResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface AddListsMemberResponseData {
  readonly is_member: boolean;
}

export interface AddUserPublicKeyPublicKey {
  readonly identity_public_key_signature?: string;
  readonly public_key?: string;
  readonly public_key_fingerprint?: string;
  readonly registration_method?: string;
  readonly signing_public_key?: string;
  readonly signing_public_key_signature?: string;
}

export interface AddUserPublicKeyRequest {
  readonly generate_version?: boolean;
  readonly public_key: AddUserPublicKeyPublicKey;
  readonly version: string;
}

export interface AddUserPublicKeyResponse {
  readonly data?: AddUserPublicKeyResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface AddUserPublicKeyResponseData {
  readonly juicebox_config?: unknown;
  readonly public_key_version?: string;
}

export interface Analytics {
  readonly app_install_attempts?: number;
  readonly app_opens?: number;
  readonly bookmarks?: number;
  readonly detail_expands?: number;
  readonly email_tweet?: number;
  readonly engagements?: number;
  readonly follows?: number;
  readonly hashtag_clicks?: number;
  readonly id?: string;
  readonly impressions?: number;
  readonly likes?: number;
  readonly media_views?: number;
  readonly permalink_clicks?: number;
  readonly quote_tweets?: number;
  readonly replies?: number;
  readonly retweets?: number;
  readonly shares?: number;
  readonly timestamp?: string;
  readonly timestamped_metrics?: AnalyticsTimestampedMetrics;
  readonly unfollows?: number;
  readonly unlikes?: number;
  readonly url_clicks?: number;
  readonly user_profile_clicks?: number;
}

export type AnalyticsId = string;

export type AnalyticsTimestampedMetrics = ReadonlyArray<unknown>;

export interface AppendMediaUploadRequest {
  readonly media: string | string;
  readonly segment_index: number;
}

export interface AppendMediaUploadResponse {
  readonly data?: AppendMediaUploadResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface AppendMediaUploadResponseData {
  readonly expires_at?: number;
}

export interface ArticleCreateDraftContentState {
  readonly blocks: ReadonlyArray<ArticleCreateDraftContentStateBlocks>;
  readonly entities: ReadonlyArray<ArticleCreateDraftContentStateEntities>;
}

export interface ArticleCreateDraftContentStateBlocks {
  readonly data?: ArticleCreateDraftContentStateBlocksData;
  readonly entity_ranges?: ReadonlyArray<ArticleCreateDraftContentStateBlocksEntityRanges>;
  readonly inline_style_ranges?: ReadonlyArray<ArticleCreateDraftContentStateBlocksInlineStyleRanges>;
  readonly key?: string;
  readonly text: string;
  readonly type: "unstyled" | "header-one" | "header-two" | "header-three" | "unordered-list-item" | "ordered-list-item" | "blockquote" | "atomic";
}

export interface ArticleCreateDraftContentStateBlocksData {
  readonly cashtags?: ReadonlyArray<ArticleCreateDraftContentStateBlocksDataCashtags>;
  readonly hashtags?: ReadonlyArray<ArticleCreateDraftContentStateBlocksDataHashtags>;
  readonly mentions?: ReadonlyArray<ArticleCreateDraftContentStateBlocksDataMentions>;
  readonly urls?: ReadonlyArray<ArticleCreateDraftContentStateBlocksDataUrls>;
}

export interface ArticleCreateDraftContentStateBlocksDataCashtags {
  readonly from_index: number;
  readonly text: string;
  readonly to_index: number;
}

export interface ArticleCreateDraftContentStateBlocksDataHashtags {
  readonly from_index: number;
  readonly text: string;
  readonly to_index: number;
}

export interface ArticleCreateDraftContentStateBlocksDataMentions {
  readonly from_index: number;
  readonly text: string;
  readonly to_index: number;
}

export interface ArticleCreateDraftContentStateBlocksDataUrls {
  readonly from_index: number;
  readonly text: string;
  readonly to_index: number;
}

export interface ArticleCreateDraftContentStateBlocksEntityRanges {
  readonly key: number;
  readonly length: number;
  readonly offset: number;
}

export interface ArticleCreateDraftContentStateBlocksInlineStyleRanges {
  readonly length: number;
  readonly offset: number;
  readonly style: "bold" | "italic" | "strikethrough";
}

export interface ArticleCreateDraftContentStateEntities {
  readonly key: string;
  readonly value: ArticleCreateDraftContentStateEntitiesValue;
}

export interface ArticleCreateDraftContentStateEntitiesValue {
  readonly data: ArticleCreateDraftContentStateEntitiesValueData;
  readonly mutability: "immutable" | "mutable" | "segmented";
  readonly type: "post" | "link" | "image" | "emoji" | "markdown" | "divider" | "latex";
}

export interface ArticleCreateDraftContentStateEntitiesValueData {
  readonly caption?: string;
  readonly entity_key?: string;
  readonly markdown?: string;
  readonly media_items?: ReadonlyArray<ArticleCreateDraftContentStateEntitiesValueDataMediaItems>;
  readonly post_id?: string;
  readonly url?: string;
}

export interface ArticleCreateDraftContentStateEntitiesValueDataMediaItems {
  readonly media_category: string;
  readonly media_id: string;
}

export interface ArticleCreateDraftCoverMedia {
  readonly media_category: string;
  readonly media_id: string;
}

export interface ArticleCreateDraftRequest {
  readonly content_state: ArticleCreateDraftContentState;
  readonly cover_media?: ArticleCreateDraftCoverMedia;
  readonly title: string;
}

export interface ArticleCreateDraftResponse {
  readonly data?: ArticleCreateDraftResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface ArticleCreateDraftResponseData {
  readonly id: string;
  readonly title: string;
}

export interface ArticlePublishResponse {
  readonly data?: ArticlePublishResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface ArticlePublishResponseData {
  readonly post_id: string;
}

export interface BlockUsersDmsResponse {
  readonly data?: BlockUsersDmsResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface BlockUsersDmsResponseData {
  readonly blocked: boolean;
}

export interface Broadcast {
  readonly available_for_replay?: boolean;
  readonly broadcast_id?: string;
  readonly chat_option?: number;
  readonly created_at_ms?: string;
  readonly end_ms?: string;
  readonly height?: number;
  readonly id?: string;
  readonly image_url?: string;
  readonly image_url_medium?: string;
  readonly image_url_small?: string;
  readonly is_high_latency?: boolean;
  readonly language?: string;
  readonly media_key?: string;
  readonly scheduled_end_ms?: string;
  readonly scheduled_start_ms?: string;
  readonly share_url?: string;
  readonly source_id?: string;
  readonly start_ms?: string;
  readonly state?: string;
  readonly title?: string;
  readonly total_watched?: string;
  readonly total_watching?: string;
  readonly tweet_id?: string;
  readonly twitter_user_id?: string;
  readonly updated_at_ms?: string;
  readonly width?: number;
}

export interface ChatConversation {
  readonly admin_ids?: ReadonlyArray<string>;
  readonly created_at?: string;
  readonly group_avatar_url?: string;
  readonly group_name?: string;
  readonly id?: string;
  readonly is_muted?: boolean;
  readonly member_ids?: ReadonlyArray<string>;
  readonly message_ttl_ms?: number;
  readonly participant_ids?: ReadonlyArray<string>;
  readonly screen_capture_blocking_enabled?: boolean;
  readonly screen_capture_detection_enabled?: boolean;
  readonly type?: string;
  readonly updated_at?: string;
}

export interface ChatMediaUploadAppendRequest {
  readonly conversation_id: string;
  readonly media: string | string;
  readonly media_hash_key: string;
  readonly segment_index: number;
}

export interface ChatMediaUploadAppendResponse {
  readonly data?: ChatMediaUploadAppendResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface ChatMediaUploadAppendResponseData {
  readonly expires_at?: number;
}

export interface ChatMediaUploadFinalizeRequest {
  readonly conversation_id: string;
  readonly media_hash_key: string;
  readonly message_id?: string;
  readonly num_parts: string;
  readonly ttl_msec?: string;
}

export interface ChatMediaUploadFinalizeResponse {
  readonly data?: ChatMediaUploadFinalizeResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface ChatMediaUploadFinalizeResponseData {
  readonly success: boolean;
}

export interface ChatMediaUploadInitializeRequest {
  readonly conversation_id: string;
  readonly total_bytes: number;
}

export interface ChatMediaUploadInitializeResponse {
  readonly data?: ChatMediaUploadInitializeResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface ChatMediaUploadInitializeResponseData {
  readonly conversation_id: string;
  readonly media_hash_key: string;
  readonly session_id: string;
}

export interface ChatMessageEvent {
  readonly conversation_id?: string;
  readonly conversation_token?: string;
  readonly created_at?: string;
  readonly encoded_event?: string;
  readonly id?: string;
  readonly is_trusted?: boolean;
  readonly message_event_signature?: unknown;
  readonly previous_id?: string;
  readonly sender_id?: string;
}

export interface Community {
  readonly access?: string;
  readonly created_at?: string;
  readonly description?: string;
  readonly id?: string;
  readonly join_policy?: string;
  readonly member_count?: number;
  readonly name?: string;
}

export type CommunityId = string;

export interface ComplianceJob {
  readonly created_at?: string;
  readonly download_expires_at?: string;
  readonly download_url?: string;
  readonly id?: string;
  readonly name?: string;
  readonly resumable?: boolean;
  readonly status?: string;
  readonly type?: string;
  readonly upload_expires_at?: string;
  readonly upload_url?: string;
}

export interface Connection {
  readonly client_ip?: string;
  readonly connected_at?: string;
  readonly disconnect_reason?: string;
  readonly disconnected_at?: string;
  readonly endpoint_name?: string;
  readonly id?: string;
}

export type CountryCode = string;

export interface CreateAccountActivitySubscriptionRequest {

}

export interface CreateAccountActivitySubscriptionResponse {
  readonly data?: CreateAccountActivitySubscriptionResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface CreateAccountActivitySubscriptionResponseData {
  readonly subscribed: boolean;
}

export interface CreateActivitySubscriptionFilter {
  readonly direction?: "inbound" | "outbound";
  readonly keyword?: string;
  readonly user_id?: string;
}

export interface CreateActivitySubscriptionRequest {
  readonly event_type: "profile.update.bio" | "profile.update.profile_picture" | "profile.update.banner_picture" | "profile.update.screenname" | "profile.update.geo" | "profile.update.url" | "profile.update.verified_badge" | "profile.update.affiliate_badge" | "profile.update.handle" | "news.new" | "follow.follow" | "follow.unfollow" | "spaces.start" | "spaces.end" | "chat.received" | "chat.sent" | "chat.conversation.join" | "chat.conversation_join" | "chat.conversation.member_added" | "chat.conversation.member_removed" | "chat.conversation.admin_added" | "chat.conversation.admin_removed" | "chat.update.group_name" | "chat.update.restrictions" | "dm.sent" | "dm.received" | "dm.indicate_typing" | "dm.read" | "post.create" | "post.delete" | "post.mention.create" | "like.create" | "mute.mute" | "mute.unmute" | "block.block" | "block.unblock";
  readonly filter: CreateActivitySubscriptionFilter;
  readonly tag?: string;
  readonly webhook_id?: string;
}

export interface CreateActivitySubscriptionResponse {
  readonly data?: CreateActivitySubscriptionResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface CreateActivitySubscriptionResponseData {
  readonly subscription?: CreateActivitySubscriptionResponseDataSubscription;
}

export interface CreateActivitySubscriptionResponseDataSubscription {
  readonly created_at?: string;
  readonly event_type?: string;
  readonly filter?: CreateActivitySubscriptionResponseDataSubscriptionFilter;
  readonly subscription_id?: string;
  readonly tag?: string;
  readonly updated_at?: string;
  readonly webhook_id?: string;
}

export interface CreateActivitySubscriptionResponseDataSubscriptionFilter {
  readonly direction?: string;
  readonly keyword?: string;
  readonly user_id?: string;
}

export interface CreateChatConversationActionSignatures {
  readonly encoded_message_event_detail: string;
  readonly message_event_signature: CreateChatConversationActionSignaturesMessageEventSignature;
  readonly message_id: string;
  readonly signature_payload?: string;
}

export interface CreateChatConversationActionSignaturesMessageEventSignature {
  readonly message_signing_key_info_list?: ReadonlyArray<CreateChatConversationActionSignaturesMessageEventSignatureMessageSigningKeyInfoList>;
  readonly public_key_version: string;
  readonly signature: string;
  readonly signature_version: string;
  readonly signing_public_key?: string;
}

export interface CreateChatConversationActionSignaturesMessageEventSignatureMessageSigningKeyInfoList {
  readonly member_id?: string;
  readonly public_key_version?: string;
  readonly signing_public_key?: string;
}

export interface CreateChatConversationConversationParticipantKeys {
  readonly encrypted_conversation_key?: string;
  readonly public_key_version?: string;
  readonly user_id?: string;
}

export interface CreateChatConversationRequest {
  readonly action_signatures?: ReadonlyArray<CreateChatConversationActionSignatures>;
  readonly base64_encoded_key_rotation?: string;
  readonly conversation_id: string;
  readonly conversation_key_version: string;
  readonly conversation_participant_keys: ReadonlyArray<CreateChatConversationConversationParticipantKeys>;
  readonly group_admins?: ReadonlyArray<string>;
  readonly group_avatar_url?: string;
  readonly group_description?: string;
  readonly group_members: ReadonlyArray<string>;
  readonly group_name?: string;
  readonly ttl_msec?: string;
}

export interface CreateChatConversationResponse {
  readonly data?: CreateChatConversationResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface CreateChatConversationResponseData {
  readonly conversation_id: string;
  readonly conversation_key_change_sequence_id?: string;
}

export interface CreateCommunityNotesInfo {
  readonly classification: "misinformed_or_potentially_misleading" | "not_misleading";
  readonly is_media_note?: boolean;
  readonly misleading_tags: ReadonlyArray<"disputed_claim_as_fact" | "factual_error" | "manipulated_media" | "misinterpreted_satire" | "missing_important_context" | "other" | "outdated_information">;
  readonly text: string;
  readonly trustworthy_sources: boolean;
}

export interface CreateCommunityNotesRequest {
  readonly info: CreateCommunityNotesInfo;
  readonly post_id: string;
  readonly test_mode: boolean;
}

export interface CreateCommunityNotesResponse {
  readonly data?: CreateCommunityNotesResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface CreateCommunityNotesResponseData {
  readonly id: string;
}

export interface CreateComplianceJobsRequest {
  readonly name?: string;
  readonly resumable?: boolean;
  readonly type: "tweets" | "users";
}

export interface CreateComplianceJobsResponse {
  readonly data?: ComplianceJob;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface CreateDirectMessagesByConversationIdAttachments {
  readonly media_id: string;
}

/** At least one of `text`, `attachments` is required. */
export interface CreateDirectMessagesByConversationIdRequest {
  readonly attachments?: ReadonlyArray<CreateDirectMessagesByConversationIdAttachments>;
  readonly text?: string;
}

export interface CreateDirectMessagesByConversationIdResponse {
  readonly data?: CreateDirectMessagesByConversationIdResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface CreateDirectMessagesByConversationIdResponseData {
  readonly dm_conversation_id: string;
  readonly dm_event_id: string;
}

export interface CreateDirectMessagesByParticipantIdAttachments {
  readonly media_id: string;
}

/** At least one of `text`, `attachments` is required. */
export interface CreateDirectMessagesByParticipantIdRequest {
  readonly attachments?: ReadonlyArray<CreateDirectMessagesByParticipantIdAttachments>;
  readonly text?: string;
}

export interface CreateDirectMessagesByParticipantIdResponse {
  readonly data?: CreateDirectMessagesByParticipantIdResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface CreateDirectMessagesByParticipantIdResponseData {
  readonly dm_conversation_id: string;
  readonly dm_event_id: string;
}

export interface CreateDirectMessagesConversationMessage {
  readonly attachments?: ReadonlyArray<CreateDirectMessagesConversationMessageAttachments>;
  readonly text?: string;
}

export interface CreateDirectMessagesConversationMessageAttachments {
  readonly media_id: string;
}

export interface CreateDirectMessagesConversationRequest {
  readonly conversation_type: "Group";
  readonly message: CreateDirectMessagesConversationMessage;
  readonly participant_ids: ReadonlyArray<string>;
}

export interface CreateDirectMessagesConversationResponse {
  readonly data?: CreateDirectMessagesConversationResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface CreateDirectMessagesConversationResponseData {
  readonly dm_conversation_id: string;
  readonly dm_event_id: string;
}

export interface CreateListsRequest {
  readonly description?: string;
  readonly name: string;
  readonly private?: boolean;
}

export interface CreateListsResponse {
  readonly data?: CreateListsResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface CreateListsResponseData {
  readonly id: string;
  readonly name: string;
}

export interface CreateMediaMetadataMetadata {
  readonly allow_download_status?: CreateMediaMetadataMetadataAllowDownloadStatus;
  readonly alt_text?: CreateMediaMetadataMetadataAltText;
  readonly audience_policy?: unknown;
  readonly content_expiration?: CreateMediaMetadataMetadataContentExpiration;
  readonly domain_restrictions?: CreateMediaMetadataMetadataDomainRestrictions;
  readonly found_media_origin?: CreateMediaMetadataMetadataFoundMediaOrigin;
  readonly geo_restrictions?: unknown;
  readonly management_info?: CreateMediaMetadataMetadataManagementInfo;
  readonly preview_image?: CreateMediaMetadataMetadataPreviewImage;
  readonly sensitive_media_warning?: unknown;
  readonly shared_info?: CreateMediaMetadataMetadataSharedInfo;
  readonly sticker_info?: CreateMediaMetadataMetadataStickerInfo;
  readonly upload_source?: CreateMediaMetadataMetadataUploadSource;
}

export interface CreateMediaMetadataMetadataAllowDownloadStatus {
  readonly allow_download?: boolean;
}

export interface CreateMediaMetadataMetadataAltText {
  readonly text: string;
}

export interface CreateMediaMetadataMetadataContentExpiration {
  readonly timestamp_sec: number;
}

export interface CreateMediaMetadataMetadataDomainRestrictions {
  readonly whitelist: ReadonlyArray<string>;
}

export interface CreateMediaMetadataMetadataFoundMediaOrigin {
  readonly id: string;
  readonly provider: string;
}

export interface CreateMediaMetadataMetadataManagementInfo {
  readonly managed: boolean;
}

export interface CreateMediaMetadataMetadataPreviewImage {
  readonly media_key: unknown;
}

export interface CreateMediaMetadataMetadataSharedInfo {
  readonly shared: boolean;
}

export interface CreateMediaMetadataMetadataStickerInfo {
  readonly stickers: ReadonlyArray<CreateMediaMetadataMetadataStickerInfoStickers>;
}

export interface CreateMediaMetadataMetadataStickerInfoStickers {

}

export interface CreateMediaMetadataMetadataUploadSource {
  readonly upload_source: string;
}

export interface CreateMediaMetadataRequest {
  readonly id: string;
  readonly metadata?: CreateMediaMetadataMetadata;
}

export interface CreateMediaMetadataResponse {
  readonly data?: CreateMediaMetadataResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface CreateMediaMetadataResponseData {
  readonly associated_metadata?: unknown;
  readonly id: string;
}

export interface CreateMediaSubtitlesRequest {
  readonly id?: string;
  readonly media_category?: "AmplifyVideo" | "TweetVideo";
  readonly subtitles?: CreateMediaSubtitlesSubtitles;
}

export interface CreateMediaSubtitlesResponse {
  readonly data?: CreateMediaSubtitlesResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface CreateMediaSubtitlesResponseData {
  readonly associated_subtitles?: unknown;
  readonly id?: string;
  readonly media_category?: string;
}

export interface CreateMediaSubtitlesSubtitles {
  readonly display_name?: string;
  readonly id?: string;
  readonly language_code?: string;
}

export interface CreatePostsEditOptions {
  readonly previous_post_id: string;
}

export interface CreatePostsGeo {
  readonly place_id: string;
}

export interface CreatePostsMedia {
  readonly call_to_actions?: CreatePostsMediaCallToActions;
  readonly description?: string;
  readonly embeddable?: boolean;
  readonly media_ids: ReadonlyArray<string>;
  readonly preview_media_id?: string;
  readonly tagged_user_ids?: ReadonlyArray<string>;
  readonly title?: string;
}

export interface CreatePostsMediaCallToActions {
  readonly app_install?: CreatePostsMediaCallToActionsAppInstall;
  readonly visit_site?: CreatePostsMediaCallToActionsVisitSite;
  readonly watch_now?: CreatePostsMediaCallToActionsWatchNow;
}

export interface CreatePostsMediaCallToActionsAppInstall {
  readonly app_store_id?: string;
  readonly ipad_app_store_id?: string;
  readonly play_store_id?: string;
}

export interface CreatePostsMediaCallToActionsVisitSite {
  readonly url: string;
}

export interface CreatePostsMediaCallToActionsWatchNow {
  readonly url: string;
}

export interface CreatePostsPoll {
  readonly duration_minutes: number;
  readonly options: ReadonlyArray<string>;
  readonly reply_settings?: "following" | "mentionedUsers" | "subscribers" | "verified";
}

export interface CreatePostsReply {
  readonly auto_populate_reply_metadata?: boolean;
  readonly exclude_reply_user_ids?: ReadonlyArray<string>;
  readonly in_reply_to_tweet_id: string;
}

export interface CreatePostsRequest {
  readonly card_uri?: string;
  readonly community_id?: string;
  readonly direct_message_deep_link?: string;
  readonly edit_options?: CreatePostsEditOptions;
  readonly for_super_followers_only?: boolean;
  readonly geo?: CreatePostsGeo;
  readonly made_with_ai?: boolean;
  readonly media?: CreatePostsMedia;
  readonly nullcast?: boolean;
  readonly paid_partnership?: boolean;
  readonly poll?: CreatePostsPoll;
  readonly quote_tweet_id?: string;
  readonly reply?: CreatePostsReply;
  readonly reply_settings?: "following" | "mentionedUsers" | "subscribers" | "verified";
  readonly share_with_followers?: boolean;
  readonly text?: string;
}

export interface CreatePostsResponse {
  readonly data?: CreatePostsResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface CreatePostsResponseData {
  readonly edit_history_post_ids?: ReadonlyArray<string>;
  readonly id: string;
  readonly text: string;
}

export interface CreateScheduledBroadcastRecurrence {
  readonly frequency: "Daily" | "Weekly";
  readonly repeats: string;
}

export interface CreateScheduledBroadcastRequest {
  readonly available_for_replay?: boolean;
  readonly chat_option?: string;
  readonly description?: string;
  readonly is_locked?: boolean;
  readonly locale?: string;
  readonly manual_publish?: boolean;
  readonly recurrence?: CreateScheduledBroadcastRecurrence;
  readonly scheduled_end_ms: string;
  readonly scheduled_start_ms: string;
  readonly source_id: string;
  readonly telecast_id?: string;
  readonly thumbnail_media_id?: string;
  readonly title?: string;
}

export interface CreateScheduledBroadcastResponse {
  readonly data?: CreateScheduledBroadcastResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface CreateScheduledBroadcastResponseData {
  readonly available_for_replay?: boolean;
  readonly broadcast_id?: string;
  readonly chat_option?: string;
  readonly description?: string;
  readonly locale?: string;
  readonly manual_publish?: boolean;
  readonly recurring_schedule_id?: string;
  readonly scheduled_broadcast_id?: string;
  readonly scheduled_end_ms?: string;
  readonly scheduled_start_ms?: string;
  readonly source_id?: string;
  readonly state?: string;
  readonly telecast_id?: string;
  readonly thumbnail_media_id?: string;
  readonly title?: string;
}

export interface CreateUsersBookmarkFolderRequest {
  readonly name: string;
}

export interface CreateUsersBookmarkFolderResponse {
  readonly data?: CreateUsersBookmarkFolderResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface CreateUsersBookmarkFolderResponseData {
  readonly id: string;
  readonly name: string;
}

export interface CreateUsersBookmarkRequest {
  readonly folder_id?: string;
  readonly tweet_id: string;
}

export interface CreateUsersBookmarkResponse {
  readonly data?: CreateUsersBookmarkResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface CreateUsersBookmarkResponseData {
  readonly bookmarked: boolean;
}

export interface CreateWebhookReplayJobRequest {
  readonly from_date: string;
  readonly to_date: string;
  readonly webhook_id: string;
}

export interface CreateWebhookReplayJobResponse {
  readonly data?: CreateWebhookReplayJobResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface CreateWebhookReplayJobResponseData {
  readonly created_at: string;
  readonly job_id: string;
}

export interface CreateWebhooksRequest {
  readonly url: string;
}

export interface CreateWebhooksResponse {
  readonly data?: CreateWebhooksResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface CreateWebhooksResponseData {
  readonly created_at: string;
  readonly id: string;
  readonly url: string;
  readonly valid: boolean;
}

export interface CreateWebhooksStreamLinkResponse {
  readonly data?: CreateWebhooksStreamLinkResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface CreateWebhooksStreamLinkResponseData {
  readonly provisioned: boolean;
}

export interface DeleteAccountActivitySubscriptionResponse {
  readonly data?: DeleteAccountActivitySubscriptionResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface DeleteAccountActivitySubscriptionResponseData {
  readonly subscribed: boolean;
}

export interface DeleteActivitySubscriptionResponse {
  readonly data?: DeleteActivitySubscriptionResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface DeleteActivitySubscriptionResponseData {
  readonly deleted: boolean;
}

export interface DeleteActivitySubscriptionsByIdsResponse {
  readonly data?: ReadonlyArray<unknown>;
  readonly errors?: ReadonlyArray<unknown>;
  readonly meta?: unknown;
}

export interface DeleteAllConnectionsResponse {
  readonly data?: DeleteAllConnectionsResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface DeleteAllConnectionsResponseData {
  readonly failed_kills: number;
  readonly results?: ReadonlyArray<DeleteAllConnectionsResponseDataResults>;
  readonly successful_kills: number;
}

export interface DeleteAllConnectionsResponseDataResults {
  readonly error_message?: string;
  readonly success: boolean;
  readonly uuid: string;
}

export interface DeleteBroadcastChatMessageResponse {
  readonly data?: DeleteBroadcastChatMessageResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface DeleteBroadcastChatMessageResponseData {
  readonly deleted: boolean;
}

export interface DeleteChatMessagesActionSignatures {
  readonly encoded_message_event_detail: string;
  readonly message_event_signature: DeleteChatMessagesActionSignaturesMessageEventSignature;
  readonly message_id: string;
  readonly signature_payload?: string;
}

export interface DeleteChatMessagesActionSignaturesMessageEventSignature {
  readonly message_signing_key_info_list?: ReadonlyArray<DeleteChatMessagesActionSignaturesMessageEventSignatureMessageSigningKeyInfoList>;
  readonly public_key_version: string;
  readonly signature: string;
  readonly signature_version: string;
  readonly signing_public_key?: string;
}

export interface DeleteChatMessagesActionSignaturesMessageEventSignatureMessageSigningKeyInfoList {
  readonly member_id?: string;
  readonly public_key_version?: string;
  readonly signing_public_key?: string;
}

export interface DeleteChatMessagesRequest {
  readonly action_signatures: ReadonlyArray<DeleteChatMessagesActionSignatures>;
  readonly delete_message_action: "delete_for_all" | "delete_for_self";
  readonly media_hash_keys?: ReadonlyArray<string>;
  readonly sequence_ids: ReadonlyArray<string>;
}

export interface DeleteChatMessagesResponse {
  readonly data?: DeleteChatMessagesResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface DeleteChatMessagesResponseData {
  readonly deleted: boolean;
}

export interface DeleteCommunityNotesResponse {
  readonly data?: DeleteCommunityNotesResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface DeleteCommunityNotesResponseData {
  readonly deleted: boolean;
}

export interface DeleteConnectionsByEndpointResponse {
  readonly data?: DeleteConnectionsByEndpointResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface DeleteConnectionsByEndpointResponseData {
  readonly failed_kills: number;
  readonly results?: ReadonlyArray<DeleteConnectionsByEndpointResponseDataResults>;
  readonly successful_kills: number;
}

export interface DeleteConnectionsByEndpointResponseDataResults {
  readonly error_message?: string;
  readonly success: boolean;
  readonly uuid: string;
}

export interface DeleteConnectionsByUuidsRequest {
  readonly uuids: ReadonlyArray<string>;
}

export interface DeleteConnectionsByUuidsResponse {
  readonly data?: DeleteConnectionsByUuidsResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface DeleteConnectionsByUuidsResponseData {
  readonly failed_kills: number;
  readonly results?: ReadonlyArray<DeleteConnectionsByUuidsResponseDataResults>;
  readonly successful_kills: number;
}

export interface DeleteConnectionsByUuidsResponseDataResults {
  readonly error_message?: string;
  readonly success: boolean;
  readonly uuid: string;
}

export interface DeleteDirectMessagesEventsResponse {
  readonly data?: DeleteDirectMessagesEventsResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface DeleteDirectMessagesEventsResponseData {
  readonly deleted: boolean;
}

export interface DeleteListsResponse {
  readonly data?: DeleteListsResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface DeleteListsResponseData {
  readonly deleted: boolean;
}

export interface DeleteMediaSubtitlesRequest {
  readonly id: string;
  readonly language_code: string;
  readonly media_category: string;
}

export interface DeleteMediaSubtitlesResponse {
  readonly data?: DeleteMediaSubtitlesResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface DeleteMediaSubtitlesResponseData {
  readonly deleted: boolean;
}

export interface DeletePostsResponse {
  readonly data?: DeletePostsResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface DeletePostsResponseData {
  readonly deleted: boolean;
}

export interface DeleteScheduledBroadcastResponse {
  readonly data?: DeleteScheduledBroadcastResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface DeleteScheduledBroadcastResponseData {
  readonly deleted: boolean;
}

export interface DeleteUsersBookmarkResponse {
  readonly data?: DeleteUsersBookmarkResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface DeleteUsersBookmarkResponseData {
  readonly bookmarked: boolean;
}

export interface DeleteWebhooksResponse {
  readonly data?: DeleteWebhooksResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface DeleteWebhooksResponseData {
  readonly deleted: boolean;
}

export interface DeleteWebhooksStreamLinkResponse {
  readonly data?: DeleteWebhooksStreamLinkResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface DeleteWebhooksStreamLinkResponseData {
  readonly deleted: boolean;
}

export interface DisallowedResourceProblem {
  readonly detail: string;
  readonly resource_id?: string;
  readonly resource_type?: string;
  readonly section?: string;
  readonly status?: number;
  readonly title: string;
  readonly type: "https://api.x.com/2/problems/disallowed-resource";
}

export interface DmEvent {
  readonly attachments?: DmEventAttachments;
  readonly created_at?: string;
  readonly dm_conversation_id?: string;
  readonly entities?: DmEventEntities;
  readonly event_type?: string;
  readonly id?: string;
  readonly participant_ids?: ReadonlyArray<string>;
  readonly referenced_posts?: DmEventReferencedPosts;
  readonly sender_id?: string;
  readonly text?: string;
}

/** Media and card attachments present in this Direct Message event. */
export interface DmEventAttachments {
  readonly card_ids?: ReadonlyArray<string> | null;
  readonly media_keys?: ReadonlyArray<string> | null;
}

/** A list of metadata entities (hashtags, cashtags, mentions, URLs) found in the Direct Message text. */
export interface DmEventEntities {
  readonly cashtags?: ReadonlyArray<unknown> | null;
  readonly hashtags?: ReadonlyArray<unknown> | null;
  readonly mentions?: ReadonlyArray<unknown> | null;
  readonly urls?: ReadonlyArray<unknown> | null;
}

export type DmEventReferencedPosts = ReadonlyArray<unknown>;

export interface Error {
  readonly code: number;
  readonly message: string;
}

export interface EvaluateCommunityNotesRequest {
  readonly note_text: string;
  readonly post_id: string;
}

export interface EvaluateCommunityNotesResponse {
  readonly data?: EvaluateCommunityNotesResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface EvaluateCommunityNotesResponseData {
  readonly claim_opinion_score?: number;
}

export interface Expansions {
  readonly media?: ReadonlyArray<Media>;
  readonly places?: ReadonlyArray<Place>;
  readonly polls?: ReadonlyArray<Poll>;
  readonly posts?: ReadonlyArray<Post>;
  readonly topics?: ReadonlyArray<Topic>;
  readonly users?: ReadonlyArray<User>;
}

export interface FieldHydrationFailureProblem {
  readonly detail: string;
  readonly field: string;
  readonly resource_type?: string;
  readonly section?: string;
  readonly status?: number;
  readonly title: string;
  readonly type: "https://api.x.com/2/problems/field-hydration-failure";
}

export interface FieldUnauthorizedProblem {
  readonly detail: string;
  readonly field: string;
  readonly resource_type?: string;
  readonly section?: string;
  readonly status?: number;
  readonly title: string;
  readonly type: "https://api.x.com/2/problems/field-unauthorized";
}

export interface FinalizeMediaUploadResponse {
  readonly data?: FinalizeMediaUploadResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface FinalizeMediaUploadResponseData {
  readonly expires_after_secs?: number;
  readonly id: string;
  readonly image?: FinalizeMediaUploadResponseDataImage;
  readonly media_key?: string;
  readonly processing_info?: FinalizeMediaUploadResponseDataProcessingInfo;
  readonly size?: number;
  readonly video?: FinalizeMediaUploadResponseDataVideo;
}

export interface FinalizeMediaUploadResponseDataImage {
  readonly h?: number;
  readonly image_type?: string;
  readonly w?: number;
}

export interface FinalizeMediaUploadResponseDataProcessingInfo {
  readonly check_after_secs?: number;
  readonly progress_percent?: number;
  readonly state?: string;
}

export interface FinalizeMediaUploadResponseDataVideo {
  readonly video_type?: string;
}

export interface FollowActivityResponsePayload {
  readonly source?: User;
  readonly target?: User;
}

export interface FollowListRequest {
  readonly list_id: string;
}

export interface FollowListResponse {
  readonly data?: FollowListResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface FollowListResponseData {
  readonly following: boolean;
}

export interface FollowUserRequest {
  readonly target_user_id: string;
}

export interface FollowUserResponse {
  readonly data?: FollowUserResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface FollowUserResponseData {
  readonly following: boolean;
  readonly pending_follow: boolean;
}

export interface GetAccountActivitySubscriptionCountResponse {
  readonly data?: GetAccountActivitySubscriptionCountResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface GetAccountActivitySubscriptionCountResponseData {
  readonly account_name?: string;
  readonly provisioned_count?: string;
  readonly subscriptions_count_all?: string;
  readonly subscriptions_count_direct_messages?: string;
}

export interface GetAccountActivitySubscriptionsResponse {
  readonly data?: GetAccountActivitySubscriptionsResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface GetAccountActivitySubscriptionsResponseData {
  readonly application_id?: string;
  readonly subscriptions?: ReadonlyArray<GetAccountActivitySubscriptionsResponseDataSubscriptions>;
  readonly webhook_id?: string;
  readonly webhook_url?: string;
}

export interface GetAccountActivitySubscriptionsResponseDataSubscriptions {
  readonly user_id?: string;
}

export interface GetActivitySubscriptionsResponse {
  readonly data?: ReadonlyArray<GetActivitySubscriptionsResponseData>;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface GetActivitySubscriptionsResponseData {
  readonly created_at?: string;
  readonly event_type?: string;
  readonly filter?: GetActivitySubscriptionsResponseDataFilter;
  readonly subscription_id?: string;
  readonly tag?: string;
  readonly updated_at?: string;
  readonly webhook_id?: string;
}

export interface GetActivitySubscriptionsResponseDataFilter {
  readonly direction?: string;
  readonly keyword?: string;
  readonly user_id?: string;
}

export interface GetBroadcastResponse {
  readonly data?: Broadcast;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface GetChatConversationEventsResponse {
  readonly data?: ReadonlyArray<ChatMessageEvent>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly meta?: unknown;
}

export interface GetChatConversationResponse {
  readonly data?: ChatConversation;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}

export interface GetChatConversationsResponse {
  readonly data?: ReadonlyArray<ChatConversation>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}

export interface GetCommunitiesByIdResponse {
  readonly data?: Community;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface GetComplianceJobsByIdResponse {
  readonly data?: ComplianceJob;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface GetComplianceJobsResponse {
  readonly data?: ReadonlyArray<ComplianceJob>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly meta?: unknown;
}

export interface GetConnectionHistoryResponse {
  readonly data?: ReadonlyArray<Connection>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly meta?: unknown;
}

export interface GetDirectMessagesEventsByConversationIdResponse {
  readonly data?: ReadonlyArray<DmEvent>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}

export interface GetDirectMessagesEventsByIdResponse {
  readonly data?: DmEvent;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}

export interface GetDirectMessagesEventsByParticipantIdResponse {
  readonly data?: ReadonlyArray<DmEvent>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}

export interface GetDirectMessagesEventsResponse {
  readonly data?: ReadonlyArray<DmEvent>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}

export interface GetListsByIdResponse {
  readonly data?: List;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}

export interface GetListsFollowersResponse {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}

export interface GetListsMembersResponse {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}

export interface GetListsPostsResponse {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}

export interface GetMediaAnalyticsResponse {
  readonly data?: ReadonlyArray<MediaAnalytics>;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface GetMediaByMediaKeyResponse {
  readonly data?: Media;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface GetMediaByMediaKeysResponse {
  readonly data?: ReadonlyArray<Media>;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface GetMediaUploadStatusResponse {
  readonly data?: GetMediaUploadStatusResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface GetMediaUploadStatusResponseData {
  readonly expires_after_secs?: number;
  readonly id: string;
  readonly image?: GetMediaUploadStatusResponseDataImage;
  readonly media_key?: string;
  readonly processing_info?: GetMediaUploadStatusResponseDataProcessingInfo;
  readonly size?: number;
  readonly video?: GetMediaUploadStatusResponseDataVideo;
}

export interface GetMediaUploadStatusResponseDataImage {
  readonly h?: number;
  readonly image_type?: string;
  readonly w?: number;
}

export interface GetMediaUploadStatusResponseDataProcessingInfo {
  readonly check_after_secs?: number;
  readonly progress_percent?: number;
  readonly state?: string;
}

export interface GetMediaUploadStatusResponseDataVideo {
  readonly video_type?: string;
}

export interface GetNewsResponse {
  readonly data?: News;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface GetPostsAnalyticsResponse {
  readonly data?: ReadonlyArray<Analytics>;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface GetPostsByIdResponse {
  readonly data?: Post;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}

export interface GetPostsByIdsResponse {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}

export interface GetPostsCountsAllResponse {
  readonly data?: ReadonlyArray<GetPostsCountsAllResponseData>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly meta?: unknown;
}

export interface GetPostsCountsAllResponseData {
  readonly end: string;
  readonly post_count: number;
  readonly start: string;
}

export interface GetPostsCountsRecentResponse {
  readonly data?: ReadonlyArray<GetPostsCountsRecentResponseData>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly meta?: unknown;
}

export interface GetPostsCountsRecentResponseData {
  readonly end: string;
  readonly post_count: number;
  readonly start: string;
}

export interface GetPostsLikingUsersResponse {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}

export interface GetPostsQuotedPostsResponse {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}

export interface GetPostsRepostedByResponse {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}

export interface GetPostsRepostsResponse {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}

export interface GetRuleCountsResponse {
  readonly data?: GetRuleCountsResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface GetRuleCountsResponseData {
  readonly all_project_client_apps?: ReadonlyArray<GetRuleCountsResponseDataAllProjectClientApps>;
  readonly cap_per_client_app: string;
  readonly cap_per_project: string;
  readonly client_app_rules_count: GetRuleCountsResponseDataClientAppRulesCount;
  readonly project_rules_count: string;
}

export interface GetRuleCountsResponseDataAllProjectClientApps {
  readonly client_app_id?: string;
  readonly rule_count: number;
}

export interface GetRuleCountsResponseDataClientAppRulesCount {
  readonly client_app_id?: string;
  readonly rule_count: number;
}

export interface GetRulesResponse {
  readonly data?: ReadonlyArray<GetRulesResponseData>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly meta?: unknown;
}

export interface GetRulesResponseData {
  readonly id?: string;
  readonly tag?: string;
  readonly value?: string;
}

export interface GetScheduledBroadcastResponse {
  readonly data?: GetScheduledBroadcastResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface GetScheduledBroadcastResponseData {
  readonly available_for_replay?: boolean;
  readonly broadcast_id?: string;
  readonly chat_option?: string;
  readonly description?: string;
  readonly locale?: string;
  readonly manual_publish?: boolean;
  readonly recurring_schedule_id?: string;
  readonly scheduled_broadcast_id?: string;
  readonly scheduled_end_ms?: string;
  readonly scheduled_start_ms?: string;
  readonly source_id?: string;
  readonly state?: string;
  readonly telecast_id?: string;
  readonly thumbnail_media_id?: string;
  readonly title?: string;
}

export interface GetSpacesBuyersResponse {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}

export interface GetSpacesByCreatorIdsResponse {
  readonly data?: ReadonlyArray<Space>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}

export interface GetSpacesByIdResponse {
  readonly data?: Space;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}

export interface GetSpacesByIdsResponse {
  readonly data?: ReadonlyArray<Space>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}

export interface GetSpacesPostsResponse {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}

export interface GetTrendsByWoeidResponse {
  readonly data?: ReadonlyArray<Trend>;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface GetTrendsPersonalizedTrendsResponse {
  readonly data?: ReadonlyArray<PersonalizedTrend>;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface GetUsageResponse {
  readonly data?: Usage;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface GetUsersAffiliatesResponse {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}

export interface GetUsersBlockingResponse {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}

export interface GetUsersBookmarkFoldersResponse {
  readonly data?: ReadonlyArray<GetUsersBookmarkFoldersResponseData>;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface GetUsersBookmarkFoldersResponseData {
  readonly id: string;
  readonly name: string;
}

export interface GetUsersBookmarksByFolderIdResponse {
  readonly data?: ReadonlyArray<unknown>;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface GetUsersBookmarksResponse {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}

export interface GetUsersByIdResponse {
  readonly data?: User;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}

export interface GetUsersByIdsResponse {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}

export interface GetUsersByUsernameResponse {
  readonly data?: User;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}

export interface GetUsersByUsernamesResponse {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}

export interface GetUsersFollowedListsResponse {
  readonly data?: ReadonlyArray<List>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}

export interface GetUsersFollowersResponse {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}

export interface GetUsersFollowingResponse {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}

export interface GetUsersLikedPostsResponse {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}

export interface GetUsersListMembershipsResponse {
  readonly data?: ReadonlyArray<List>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}

export interface GetUsersMentionsResponse {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}

export interface GetUsersMeResponse {
  readonly data?: User;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}

export interface GetUsersMutingResponse {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}

export interface GetUsersOwnedListsResponse {
  readonly data?: ReadonlyArray<List>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}

export interface GetUsersPinnedListsResponse {
  readonly data?: ReadonlyArray<List>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}

export interface GetUsersPostsResponse {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}

export interface GetUsersPublicKeyResponse {
  readonly data?: ReadonlyArray<PublicKey>;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface GetUsersPublicKeysResponse {
  readonly data?: ReadonlyArray<PublicKey>;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface GetUsersRepostsOfMeResponse {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}

export interface GetUsersTimelineResponse {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}

export interface GetWebhooksResponse {
  readonly data?: ReadonlyArray<WebhookConfig>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly meta?: unknown;
}

export interface GetWebhooksStreamLinksResponse {
  readonly data?: ReadonlyArray<GetWebhooksStreamLinksResponseData>;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface GetWebhooksStreamLinksResponseData {
  readonly application_id?: string;
  readonly business_user_id?: string;
  readonly created_at?: string;
  readonly fields?: ReadonlyArray<string>;
  readonly instance_id?: string;
  readonly webhook_id?: string;
}

export interface GoLiveScheduledBroadcastResponse {
  readonly data?: GoLiveScheduledBroadcastResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface GoLiveScheduledBroadcastResponseData {
  readonly available_for_replay?: boolean;
  readonly broadcast_id?: string;
  readonly chat_option?: string;
  readonly description?: string;
  readonly locale?: string;
  readonly manual_publish?: boolean;
  readonly recurring_schedule_id?: string;
  readonly scheduled_broadcast_id?: string;
  readonly scheduled_end_ms?: string;
  readonly scheduled_start_ms?: string;
  readonly source_id?: string;
  readonly state?: string;
  readonly telecast_id?: string;
  readonly thumbnail_media_id?: string;
  readonly title?: string;
}

export interface HidePostsReplyRequest {
  readonly hidden: boolean;
}

export interface HidePostsReplyResponse {
  readonly data?: HidePostsReplyResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface HidePostsReplyResponseData {
  readonly hidden?: boolean;
}

export interface InitializeChatGroupResponse {
  readonly data?: InitializeChatGroupResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface InitializeChatGroupResponseData {
  readonly conversation_id: string;
}

export interface InitializeMediaUploadRequest {
  readonly additional_owners?: ReadonlyArray<string>;
  readonly media_category?: "amplify_video" | "tweet_gif" | "tweet_image" | "tweet_video" | "dm_gif" | "dm_image" | "dm_video" | "subtitles";
  readonly media_type?: "video/mp4" | "video/webm" | "video/mp2t" | "video/quicktime" | "text/srt" | "text/vtt" | "image/jpeg" | "image/gif" | "image/bmp" | "image/png" | "image/webp" | "image/pjpeg" | "image/tiff" | "model/gltf-binary" | "model/vnd.usdz+zip";
  readonly shared?: boolean;
  readonly total_bytes?: number;
}

export interface InitializeMediaUploadResponse {
  readonly data?: InitializeMediaUploadResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface InitializeMediaUploadResponseData {
  readonly expires_after_secs?: number;
  readonly id: string;
  readonly media_key?: string;
}

export interface InternalErrorProblem {
  readonly detail: string;
  readonly status?: number;
  readonly title: string;
  readonly type: "https://api.x.com/2/problems/internal-error";
}

export interface InvalidRequestProblem {
  readonly detail: string;
  readonly parameter?: string;
  readonly status?: number;
  readonly title: string;
  readonly type: "https://api.x.com/2/problems/invalid-request";
  readonly value?: string;
}

export type Keyword = string;

export interface LikeComplianceSchema {
  readonly delete: UnlikeComplianceSchema;
}

export type LikeId = string;

export interface LikePostRequest {
  readonly tweet_id: string;
}

export interface LikePostResponse {
  readonly data?: LikePostResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface LikePostResponseData {
  readonly liked: boolean;
}

/** A Like event, with the tweet author user and the tweet being liked */
export interface LikeWithPostAuthor {
  readonly created_at?: string;
  readonly id?: LikeId;
  readonly liked_tweet_id?: PostId;
  readonly timestamp_ms?: number;
  readonly tweet_author_id?: UserId;
}

export interface List {
  readonly created_at?: string;
  readonly description?: string;
  readonly follower_count?: ListFollowerCount;
  readonly id?: string;
  readonly member_count?: ListMemberCount;
  readonly name?: string;
  readonly owner_id?: string;
  readonly private?: boolean;
}

export type ListFollowerCount = number;

export type ListId = string;

export type ListMemberCount = number;

export interface ListScheduledBroadcastsResponse {
  readonly data?: ReadonlyArray<ListScheduledBroadcastsResponseData>;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface ListScheduledBroadcastsResponseData {
  readonly available_for_replay?: boolean;
  readonly broadcast_id?: string;
  readonly chat_option?: string;
  readonly description?: string;
  readonly locale?: string;
  readonly manual_publish?: boolean;
  readonly recurring_schedule_id?: string;
  readonly scheduled_broadcast_id?: string;
  readonly scheduled_end_ms?: string;
  readonly scheduled_start_ms?: string;
  readonly source_id?: string;
  readonly state?: string;
  readonly telecast_id?: string;
  readonly thumbnail_media_id?: string;
  readonly title?: string;
}

export interface MarkChatConversationReadRequest {
  readonly seen_until_sequence_id: string;
}

export interface MarkChatConversationReadResponse {
  readonly data?: MarkChatConversationReadResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface MarkChatConversationReadResponseData {
  readonly success: boolean;
}

export interface Media {
  readonly alt_text?: string;
  readonly duration_ms?: number;
  readonly height?: number;
  readonly media_key?: string;
  readonly non_public_metrics?: MediaNonPublicMetrics;
  readonly organic_metrics?: MediaOrganicMetrics;
  readonly preview_image_url?: string;
  readonly promoted_metrics?: MediaPromotedMetrics;
  readonly public_metrics?: MediaPublicMetrics;
  readonly type?: string;
  readonly url?: string;
  readonly variants?: MediaVariants;
  readonly width?: number;
}

export interface MediaAnalytics {
  readonly cta_url_clicks?: number;
  readonly cta_watch_clicks?: number;
  readonly media_key?: string;
  readonly play_from_tap?: number;
  readonly playback_complete?: number;
  readonly playback_start?: number;
  readonly playback25?: number;
  readonly playback50?: number;
  readonly playback75?: number;
  readonly timestamp?: string;
  readonly timestamped_metrics?: MediaAnalyticsTimestampedMetrics;
  readonly video_views?: number;
  readonly watch_time_ms?: number;
}

export type MediaAnalyticsTimestampedMetrics = ReadonlyArray<unknown>;

export type MediaId = string;

/** Nonpublic engagement metrics for the media at the time of the request. */
export interface MediaNonPublicMetrics {
  readonly playback_0_count?: number | null;
  readonly playback_100_count?: number | null;
  readonly playback_25_count?: number | null;
  readonly playback_50_count?: number | null;
  readonly playback_75_count?: number | null;
}

/** Organic nonpublic engagement metrics for the media at the time of the request. */
export interface MediaOrganicMetrics {
  readonly playback_0_count?: number | null;
  readonly playback_100_count?: number | null;
  readonly playback_25_count?: number | null;
  readonly playback_50_count?: number | null;
  readonly playback_75_count?: number | null;
  readonly view_count?: number | null;
}

/** Promoted nonpublic engagement metrics for the media at the time of the request. */
export interface MediaPromotedMetrics {
  readonly playback_0_count?: number | null;
  readonly playback_100_count?: number | null;
  readonly playback_25_count?: number | null;
  readonly playback_50_count?: number | null;
  readonly playback_75_count?: number | null;
  readonly view_count?: number | null;
}

/** Public engagement metrics for the media at the time of the request. */
export interface MediaPublicMetrics {
  readonly view_count: number;
}

export interface MediaUploadRequest {
  readonly additional_owners?: string;
  readonly media: string | string;
  readonly media_category: "tweet_image" | "tweet_video" | "tweet_gif" | "dm_image" | "dm_video" | "dm_gif" | "subtitles";
}

export interface MediaUploadResponse {
  readonly data?: MediaUploadResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface MediaUploadResponseData {
  readonly expires_after_secs?: number;
  readonly id: string;
  readonly image?: MediaUploadResponseDataImage;
  readonly media_key?: string;
  readonly processing_info?: MediaUploadResponseDataProcessingInfo;
  readonly size?: number;
  readonly video?: MediaUploadResponseDataVideo;
}

export interface MediaUploadResponseDataImage {
  readonly h?: number;
  readonly image_type?: string;
  readonly w?: number;
}

export interface MediaUploadResponseDataProcessingInfo {
  readonly check_after_secs?: number;
  readonly progress_percent?: number;
  readonly state?: string;
}

export interface MediaUploadResponseDataVideo {
  readonly video_type?: string;
}

export type MediaVariants = ReadonlyArray<unknown>;

export interface MuteBroadcastChatUserRequest {
  readonly message_id?: string;
  readonly user_id: string;
}

export interface MuteBroadcastChatUserResponse {
  readonly data?: MuteBroadcastChatUserResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface MuteBroadcastChatUserResponseData {
  readonly muted: boolean;
}

export interface MuteUserRequest {
  readonly target_user_id: string;
}

export interface MuteUserResponse {
  readonly data?: MuteUserResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface MuteUserResponseData {
  readonly muting: boolean;
}

export interface News {
  readonly category?: string;
  readonly cluster_posts_results?: NewsClusterPostsResults;
  readonly contexts?: unknown;
  readonly disclaimer?: string;
  readonly hook?: string;
  readonly id?: string;
  readonly keywords?: unknown;
  readonly name?: string;
  readonly summary?: string;
  readonly updated_at?: string;
}

export interface NewsActivityResponsePayload {
  readonly category?: string;
  readonly headline?: string;
  readonly hook?: string;
  readonly summary?: string;
}

export type NewsClusterPostsResults = ReadonlyArray<unknown>;

export interface NotAuthorizedForFieldProblem {
  readonly detail: string;
  readonly field: string;
  readonly parameter?: string;
  readonly resource_id?: string;
  readonly resource_type?: string;
  readonly section?: string;
  readonly status?: number;
  readonly title: string;
  readonly type: "https://api.x.com/2/problems/not-authorized-for-field";
  readonly value?: string;
}

export interface NotAuthorizedForResourceProblem {
  readonly detail: string;
  readonly parameter?: string;
  readonly resource_id?: string;
  readonly resource_type: string;
  readonly section?: string;
  readonly status?: number;
  readonly title: string;
  readonly type: "https://api.x.com/2/problems/not-authorized-for-resource";
  readonly value?: string;
}

export interface Note {
  readonly id?: string;
  readonly info?: NoteInfo;
  readonly scoring_status?: NoteScoringStatus;
  readonly status?: string;
  readonly test_result?: NoteTestResult;
}

export type NoteId = string;

/** Details about the Community Note's content, classification and source. */
export interface NoteInfo {
  readonly classification?: string | null;
  readonly misleading_tags?: ReadonlyArray<string> | null;
  readonly post_id?: string | null;
  readonly rating_status?: string | null;
  readonly text?: string | null;
  readonly trustworthy_sources?: boolean | null;
}

/** Per-model scoring breakdown for the Community Note. */
export interface NoteScoringStatus {
  readonly has_access?: boolean | null;
  readonly rating_counts_per_model?: ReadonlyArray<unknown> | null;
}

/** AI evaluation results for the Community Note (returned in test mode). */
export interface NoteTestResult {
  readonly evaluation_outcome?: ReadonlyArray<unknown> | null;
}

export interface PersonalizedTrend {
  readonly category?: string;
  readonly post_count?: string;
  readonly trend_name?: string;
  readonly trending_since?: string;
}

export interface PinListRequest {
  readonly list_id: string;
}

export interface PinListResponse {
  readonly data?: PinListResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface PinListResponseData {
  readonly pinned: boolean;
}

export interface Place {
  readonly contained_within?: PlaceContainedWithin;
  readonly country?: string;
  readonly country_code?: string;
  readonly full_name?: string;
  readonly geo?: PlaceGeo;
  readonly id?: string;
  readonly name?: string;
  readonly place_type?: string;
}

export type PlaceContainedWithin = ReadonlyArray<string>;

/** The geographic location of this place, expressed as a GeoJSON Feature. */
export interface PlaceGeo {
  readonly bbox: ReadonlyArray<number>;
  readonly properties: unknown;
  readonly type: "Feature";
}

export interface Poll {
  readonly duration_minutes?: number;
  readonly end_datetime?: string;
  readonly id?: string;
  readonly options?: PollOptions;
  readonly voting_status?: string;
}

export type PollOptions = ReadonlyArray<unknown>;

export interface Post {
  readonly article?: unknown;
  readonly article_title?: unknown;
  readonly attachments?: PostAttachments;
  readonly author_id?: string;
  readonly card_uri?: string;
  readonly community_id?: string;
  readonly context_annotations?: PostContextAnnotations;
  readonly conversation_id?: string;
  readonly created_at?: string;
  readonly display_text_range?: PostDisplayTextRange;
  readonly edit_controls?: PostEditControls;
  readonly edit_history_post_ids?: ReadonlyArray<string>;
  readonly entities?: PostEntities;
  readonly geo?: PostGeo;
  readonly id?: string;
  readonly in_reply_to_user_id?: string;
  readonly lang?: string;
  readonly matched_media_notes?: PostMatchedMediaNotes;
  readonly media_metadata?: PostMediaMetadata;
  readonly non_public_metrics?: unknown;
  readonly note_post?: PostNotePost;
  readonly note_request_suggestions?: PostNoteRequestSuggestions;
  readonly organic_metrics?: unknown;
  readonly paid_partnership?: boolean;
  readonly possibly_sensitive?: boolean;
  readonly promoted_metrics?: unknown;
  readonly public_metrics?: PostPublicMetrics;
  readonly referenced_posts?: PostReferencedPosts;
  readonly reply_settings?: string;
  readonly scopes?: PostScopes;
  readonly source?: string;
  readonly suggested_source_links?: PostSuggestedSourceLinks;
  readonly suggested_source_links_with_counts?: PostSuggestedSourceLinksWithCounts;
  readonly text?: string;
  readonly username?: string;
  readonly withheld?: PostWithheld;
}

/** Specifies the type of attachments (if any) present in this Post. */
export interface PostAttachments {
  readonly media_keys?: ReadonlyArray<string> | null;
  readonly media_source_tweet_id?: ReadonlyArray<string> | null;
  readonly poll_ids?: ReadonlyArray<string> | null;
}

export type PostComplianceData = PostDeleteComplianceSchema | PostWithheldComplianceSchema | PostDropComplianceSchema | PostUndropComplianceSchema | PostEditComplianceSchema;

export interface PostComplianceSchema {
  readonly event_at: string;
  readonly quote_tweet_id?: PostId;
  readonly tweet: unknown;
}

export type PostContextAnnotations = ReadonlyArray<unknown>;

/** The identity of a deleted Post. */
export interface PostDeleteActivityResponsePayload {
  readonly author_id: UserId;
  readonly id: PostId;
}

export interface PostDeleteComplianceSchema {
  readonly delete: PostComplianceSchema;
}

export type PostDisplayTextRange = ReadonlyArray<number>;

export interface PostDropComplianceSchema {
  readonly drop: PostComplianceSchema;
}

export interface PostEditComplianceObjectSchema {
  readonly edit_tweet_ids: ReadonlyArray<PostId>;
  readonly event_at: string;
  readonly initial_tweet_id: PostId;
  readonly tweet: unknown;
}

export interface PostEditComplianceSchema {
  readonly tweet_edit: PostEditComplianceObjectSchema;
}

/** Indicates how much longer (if at all) this Post can be edited. */
export interface PostEditControls {
  readonly editable_until?: string | null;
  readonly edits_remaining?: number | null;
  readonly is_edit_eligible?: boolean | null;
}

/** A list of metadata entities (hashtags, mentions, URLs) found in the Post text. */
export interface PostEntities {
  readonly cashtags?: ReadonlyArray<unknown> | null;
  readonly hashtags?: ReadonlyArray<unknown> | null;
  readonly mentions?: ReadonlyArray<unknown> | null;
  readonly urls?: ReadonlyArray<unknown> | null;
}

/** The location tagged on the Post, if the user provided one. */
export interface PostGeo {
  readonly coordinates?: unknown | null;
  readonly place_id?: string | null;
}

export type PostId = string;

export type PostLabelData = PostNoticeSchema | PostUnviewableSchema;

export type PostMatchedMediaNotes = ReadonlyArray<unknown>;

export type PostMediaMetadata = ReadonlyArray<unknown>;

/** The full content of the Post, including text beyond 280 characters. */
export interface PostNotePost {
  readonly entities?: unknown | null;
  readonly text: string;
}

export type PostNoteRequestSuggestions = ReadonlyArray<unknown>;

export interface PostNotice {
  readonly application: string;
  readonly details?: string;
  readonly event_at: string;
  readonly event_type: string;
  readonly extended_details_url?: string;
  readonly label_title?: string;
  readonly tweet: unknown;
}

export interface PostNoticeSchema {
  readonly public_tweet_notice: PostNotice;
}

/** Engagement metrics for the Post at the time of the request. */
export interface PostPublicMetrics {
  readonly bookmark_count: number;
  readonly impression_count: number;
  readonly like_count: number;
  readonly quote_count: number;
  readonly reply_count: number;
  readonly repost_count: number;
}

export type PostReferencedPosts = ReadonlyArray<unknown>;

/** The scopes for this Post. */
export interface PostScopes {
  readonly followers: boolean;
}

export type PostSuggestedSourceLinks = ReadonlyArray<string>;

export type PostSuggestedSourceLinksWithCounts = ReadonlyArray<unknown>;

export interface PostTakedownComplianceSchema {
  readonly event_at: string;
  readonly quote_tweet_id?: PostId;
  readonly tweet: unknown;
  readonly withheld_in_countries: ReadonlyArray<CountryCode>;
}

export interface PostUndropComplianceSchema {
  readonly undrop: PostComplianceSchema;
}

export interface PostUnviewable {
  readonly application: string;
  readonly event_at: string;
  readonly tweet: unknown;
}

export interface PostUnviewableSchema {
  readonly public_tweet_unviewable: PostUnviewable;
}

/** Withholding details for withheld content. */
export interface PostWithheld {
  readonly copyright: boolean;
  readonly country_codes: ReadonlyArray<string>;
  readonly scope?: "post" | "user" | null;
}

export interface PostWithheldComplianceSchema {
  readonly withheld: PostTakedownComplianceSchema;
}

export type Problem = ResourceNotFoundProblem | InvalidRequestProblem | NotAuthorizedForResourceProblem | NotAuthorizedForFieldProblem | FieldUnauthorizedProblem | FieldHydrationFailureProblem | ResourceUnavailableProblem | DisallowedResourceProblem | InternalErrorProblem;

export interface ProfileUpdateActivityResponsePayload {
  readonly after?: string;
  readonly before?: string;
}

export interface PublicKey {
  readonly identity_public_key_signature?: string;
  readonly juicebox_config?: unknown;
  readonly public_key?: string;
  readonly public_key_version?: string;
  readonly signing_public_key?: string;
}

export type PublicKeyId = string;

export interface RemoveListsMemberByUserIdResponse {
  readonly data?: RemoveListsMemberByUserIdResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface RemoveListsMemberByUserIdResponseData {
  readonly is_member: boolean;
}

export interface RepostPostRequest {
  readonly tweet_id: string;
}

export interface RepostPostResponse {
  readonly data?: RepostPostResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface RepostPostResponseData {
  readonly rest_id: string;
  readonly retweeted: boolean;
}

export interface ResourceNotFoundProblem {
  readonly detail: string;
  readonly parameter?: string;
  readonly resource_id?: string;
  readonly resource_type: string;
  readonly status?: number;
  readonly title: string;
  readonly type: "https://api.x.com/2/problems/resource-not-found";
  readonly value?: string;
}

export interface ResourceUnavailableProblem {
  readonly detail: string;
  readonly resource_id?: string;
  readonly resource_type: string;
  readonly status?: number;
  readonly title: string;
  readonly type: "https://api.x.com/2/problems/resource-unavailable";
}

export type RuleId = string;

export interface RulesCount {
  readonly all_project_client_apps?: RulesCountAllProjectClientApps;
  readonly cap_per_client_app?: string;
  readonly cap_per_project?: string;
  readonly client_app_rules_count?: RulesCountClientAppRulesCount;
  readonly project_rules_count?: string;
}

export type RulesCountAllProjectClientApps = ReadonlyArray<unknown>;

/** A count of filtered-stream rules for a single client application. */
export interface RulesCountClientAppRulesCount {
  readonly client_app_id?: string | null;
  readonly rule_count: number;
}

export type RuleTag = string;

export interface SearchCommunitiesResponse {
  readonly data?: ReadonlyArray<Community>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly meta?: unknown;
}

export interface SearchCommunityNotesWrittenResponse {
  readonly data?: ReadonlyArray<Note>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly meta?: unknown;
}

export interface SearchEligiblePostsResponse {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}

export interface SearchNewsResponse {
  readonly data?: ReadonlyArray<News>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly meta?: unknown;
}

export interface SearchPostsAllResponse {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}

export interface SearchPostsRecentResponse {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}

export interface SearchSpacesResponse {
  readonly data?: ReadonlyArray<Space>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}

export interface SearchUsersResponse {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}

export interface SendBroadcastChatRequest {
  readonly reply_to?: string;
  readonly text: string;
}

export interface SendBroadcastChatResponse {
  readonly data?: SendBroadcastChatResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface SendBroadcastChatResponseData {
  readonly success: boolean;
  readonly timestamp: string;
}

export interface SendChatMessageRequest {
  readonly conversation_token?: string;
  readonly encoded_message_create_event: string;
  readonly encoded_message_event_signature?: string;
  readonly message_id: string;
}

export interface SendChatMessageResponse {
  readonly data?: SendChatMessageResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface SendChatMessageResponseData {
  readonly encoded_message_event: string;
}

export interface SendChatTypingIndicatorResponse {
  readonly data?: SendChatTypingIndicatorResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface SendChatTypingIndicatorResponseData {
  readonly success: boolean;
}

export interface Space {
  readonly created_at?: string;
  readonly creator_id?: string;
  readonly ended_at?: string;
  readonly host_ids?: SpaceHostIds;
  readonly id?: string;
  readonly invited_user_ids?: SpaceInvitedUserIds;
  readonly is_ticketed?: boolean;
  readonly lang?: string;
  readonly participant_count?: number;
  readonly scheduled_start?: string;
  readonly speaker_ids?: SpaceSpeakerIds;
  readonly started_at?: string;
  readonly state?: string;
  readonly subscriber_count?: number;
  readonly title?: string;
  readonly topic_ids?: SpaceTopicIds;
  readonly updated_at?: string;
}

export type SpaceHostIds = ReadonlyArray<string>;

export type SpaceInvitedUserIds = ReadonlyArray<string>;

export type SpaceSpeakerIds = ReadonlyArray<string>;

export type SpaceTopicIds = ReadonlyArray<string>;

export type StreamLabelsComplianceResponse = unknown | unknown;

export type StreamLikesComplianceResponse = unknown | unknown;

export interface StreamLikesFirehoseResponse {
  readonly data?: LikeWithPostAuthor;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}

export interface StreamLikesSample10Response {
  readonly data?: LikeWithPostAuthor;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}

export type StreamPostsComplianceResponse = unknown | unknown;

export interface StreamPostsFirehoseEnResponse {
  readonly data?: Post;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}

export interface StreamPostsFirehoseJaResponse {
  readonly data?: Post;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}

export interface StreamPostsFirehoseKoResponse {
  readonly data?: Post;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}

export interface StreamPostsFirehosePtResponse {
  readonly data?: Post;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}

export interface StreamPostsFirehoseResponse {
  readonly data?: Post;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}

/** A Tweet or error that can be returned by the streaming Tweet API. The values returned with a successful streamed Tweet includes the user provided rules that the Tweet matched. */
export interface StreamPostsResponse {
  readonly data?: Post;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly matching_rules?: ReadonlyArray<unknown>;
}

export interface StreamPostsSample10Response {
  readonly data?: Post;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}

export interface StreamPostsSampleResponse {
  readonly data?: Post;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}

export type StreamUsersComplianceResponse = unknown | unknown;

export interface Topic {
  readonly description?: string;
  readonly id?: string;
  readonly name?: string;
}

export interface Trend {
  readonly trend_name?: string;
  readonly tweet_count?: number;
}

export interface UnblockUsersDmsResponse {
  readonly data?: UnblockUsersDmsResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface UnblockUsersDmsResponseData {
  readonly blocked: boolean;
}

export interface UnfollowListResponse {
  readonly data?: UnfollowListResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface UnfollowListResponseData {
  readonly following: boolean;
}

export interface UnfollowUserResponse {
  readonly data?: UnfollowUserResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface UnfollowUserResponseData {
  readonly following: boolean;
}

export interface UnlikeComplianceSchema {
  readonly event_at: string;
  readonly favorite: unknown;
}

export interface UnlikePostResponse {
  readonly data?: UnlikePostResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface UnlikePostResponseData {
  readonly liked: boolean;
}

export interface UnmuteBroadcastChatUserResponse {
  readonly data?: UnmuteBroadcastChatUserResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface UnmuteBroadcastChatUserResponseData {
  readonly muted: boolean;
}

export interface UnmuteUserResponse {
  readonly data?: UnmuteUserResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface UnmuteUserResponseData {
  readonly muting: boolean;
}

export interface UnpinListResponse {
  readonly data?: UnpinListResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface UnpinListResponseData {
  readonly pinned: boolean;
}

export interface UnrepostPostResponse {
  readonly data?: UnrepostPostResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface UnrepostPostResponseData {
  readonly retweeted: boolean;
}

export interface UpdateActivitySubscriptionRequest {
  readonly tag?: string;
  readonly webhook_id?: string;
}

export interface UpdateActivitySubscriptionResponse {
  readonly data?: UpdateActivitySubscriptionResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface UpdateActivitySubscriptionResponseData {
  readonly subscription?: UpdateActivitySubscriptionResponseDataSubscription;
  readonly total_subscriptions?: number;
}

export interface UpdateActivitySubscriptionResponseDataSubscription {
  readonly created_at?: string;
  readonly event_type?: string;
  readonly filter?: UpdateActivitySubscriptionResponseDataSubscriptionFilter;
  readonly subscription_id?: string;
  readonly tag?: string;
  readonly updated_at?: string;
  readonly webhook_id?: string;
}

export interface UpdateActivitySubscriptionResponseDataSubscriptionFilter {
  readonly direction?: string;
  readonly keyword?: string;
  readonly user_id?: string;
}

export interface UpdateListsRequest {
  readonly description?: string;
  readonly name?: string;
  readonly private?: boolean;
}

export interface UpdateListsResponse {
  readonly data?: UpdateListsResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface UpdateListsResponseData {
  readonly updated: boolean;
}

export interface UpdateRulesAdd {
  readonly tag?: string;
  readonly value: string;
}

export interface UpdateRulesDelete {
  readonly ids?: ReadonlyArray<string>;
  readonly values?: ReadonlyArray<string>;
}

export interface UpdateRulesRequest {
  readonly add?: ReadonlyArray<UpdateRulesAdd>;
  readonly delete?: UpdateRulesDelete;
}

export interface UpdateRulesResponse {
  readonly data?: ReadonlyArray<UpdateRulesResponseData>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly meta?: unknown;
}

export interface UpdateRulesResponseData {
  readonly id?: string;
  readonly tag?: string;
  readonly value?: string;
}

export interface UpdateScheduledBroadcastRequest {
  readonly available_for_replay?: boolean;
  readonly chat_option?: string;
  readonly description?: string;
  readonly is_locked?: boolean;
  readonly locale?: string;
  readonly manual_publish?: boolean;
  readonly roll_forward?: boolean;
  readonly scheduled_broadcast_id: string;
  readonly scheduled_end_ms: string;
  readonly scheduled_start_ms: string;
  readonly source_id?: string;
  readonly thumbnail_media_id?: string;
  readonly title?: string;
}

export interface UpdateScheduledBroadcastResponse {
  readonly data?: UpdateScheduledBroadcastResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface UpdateScheduledBroadcastResponseData {
  readonly available_for_replay?: boolean;
  readonly broadcast_id?: string;
  readonly chat_option?: string;
  readonly description?: string;
  readonly locale?: string;
  readonly manual_publish?: boolean;
  readonly recurring_schedule_id?: string;
  readonly scheduled_broadcast_id?: string;
  readonly scheduled_end_ms?: string;
  readonly scheduled_start_ms?: string;
  readonly source_id?: string;
  readonly state?: string;
  readonly telecast_id?: string;
  readonly thumbnail_media_id?: string;
  readonly title?: string;
}

export interface Usage {
  readonly cap_reset_day?: number;
  readonly daily_client_app_usage?: UsageDailyClientAppUsage;
  readonly daily_project_usage?: UsageDailyProjectUsage;
  readonly project_cap?: string;
  readonly project_id?: string;
  readonly project_usage?: string;
}

export type UsageDailyClientAppUsage = ReadonlyArray<unknown>;

/** Project-level daily Post usage for the caller's project. */
export interface UsageDailyProjectUsage {
  readonly project_id?: string | null;
  readonly usage?: ReadonlyArray<unknown> | null;
}

export interface User {
  readonly affiliation?: UserAffiliation;
  readonly confirmed_email?: string;
  readonly connection_status?: UserConnectionStatus;
  readonly created_at?: string;
  readonly description?: string;
  readonly entities?: UserEntities;
  readonly id?: string;
  readonly is_identity_verified?: boolean;
  readonly location?: string;
  readonly most_recent_post_id?: string;
  readonly name?: string;
  readonly parody?: boolean;
  readonly pinned_post_id?: string;
  readonly profile_banner_url?: string;
  readonly profile_image_url?: string;
  readonly protected?: boolean;
  readonly public_metrics?: UserPublicMetrics;
  readonly receives_your_dm?: boolean;
  readonly subscribes_to_you?: boolean;
  readonly subscription?: UserSubscription;
  readonly subscription_type?: string;
  readonly url?: string;
  readonly username?: string;
  readonly verified?: boolean;
  readonly verified_followers_count?: number;
  readonly verified_type?: string;
  readonly withheld?: UserWithheld;
}

/** Metadata about a user's affiliation. */
export interface UserAffiliation {
  readonly badge_url?: string | null;
  readonly description?: string | null;
  readonly url?: string | null;
  readonly user_id?: ReadonlyArray<string> | null;
}

export type UserComplianceData = UserProtectComplianceSchema | UserUnprotectComplianceSchema | UserDeleteComplianceSchema | UserUndeleteComplianceSchema | UserSuspendComplianceSchema | UserUnsuspendComplianceSchema | UserWithheldComplianceSchema | UserScrubGeoSchema | UserProfileModificationComplianceSchema;

export interface UserComplianceSchema {
  readonly event_at: string;
  readonly user: unknown;
}

export type UserConnectionStatus = ReadonlyArray<"blocking" | "follow_request_received" | "follow_request_sent" | "followed_by" | "following" | "muting">;

export interface UserDeleteComplianceSchema {
  readonly user_delete: UserComplianceSchema;
}

/** A list of metadata found in the User's profile description. */
export interface UserEntities {
  readonly description?: unknown | null;
  readonly url?: unknown | null;
}

export type UserId = string;

export interface UserProfileModificationComplianceSchema {
  readonly user_profile_modification: UserProfileModificationObjectSchema;
}

export interface UserProfileModificationObjectSchema {
  readonly event_at: string;
  readonly new_value: string;
  readonly profile_field: string;
  readonly user: unknown;
}

export interface UserProtectComplianceSchema {
  readonly user_protect: UserComplianceSchema;
}

/** A list of metrics for this User. */
export interface UserPublicMetrics {
  readonly followers_count: number;
  readonly following_count: number;
  readonly like_count?: number | null;
  readonly listed_count: number;
  readonly media_count?: number | null;
  readonly post_count: number;
}

export interface UserScrubGeoObjectSchema {
  readonly event_at: string;
  readonly up_to_tweet_id: PostId;
  readonly user: unknown;
}

export interface UserScrubGeoSchema {
  readonly scrub_geo: UserScrubGeoObjectSchema;
}

/** The subscription relationship between this User and you. */
export interface UserSubscription {
  readonly subscribes_to_you: boolean;
}

export interface UserSuspendComplianceSchema {
  readonly user_suspend: UserComplianceSchema;
}

export interface UserTakedownComplianceSchema {
  readonly event_at: string;
  readonly user: unknown;
  readonly withheld_in_countries: ReadonlyArray<CountryCode>;
}

export interface UserUndeleteComplianceSchema {
  readonly user_undelete: UserComplianceSchema;
}

export interface UserUnprotectComplianceSchema {
  readonly user_unprotect: UserComplianceSchema;
}

export interface UserUnsuspendComplianceSchema {
  readonly user_unsuspend: UserComplianceSchema;
}

/** Withholding details for withheld content. */
export interface UserWithheld {
  readonly country_codes?: ReadonlyArray<string> | null;
  readonly scope?: "user" | null;
}

export interface UserWithheldComplianceSchema {
  readonly user_withheld: UserTakedownComplianceSchema;
}

export interface ValidateAccountActivitySubscriptionResponse {
  readonly data?: ValidateAccountActivitySubscriptionResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface ValidateAccountActivitySubscriptionResponseData {
  readonly subscribed: boolean;
}

export interface ValidateWebhooksResponse {
  readonly data?: ValidateWebhooksResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}

export interface ValidateWebhooksResponseData {
  readonly valid: boolean;
}

export interface WebhookConfig {
  readonly created_at?: string;
  readonly id?: string;
  readonly url?: string;
  readonly valid?: boolean;
}

export type WebhookConfigId = string;
