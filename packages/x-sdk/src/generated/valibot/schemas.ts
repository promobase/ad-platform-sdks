// This file is generated. Do not edit by hand.
import * as v from "valibot";

export type ActivityEventId = string;
export const ActivityEventIdSchema: v.GenericSchema<unknown, ActivityEventId> = v.string();

export type ActivityStreamingResponsePayload = ProfileUpdateActivityResponsePayload | NewsActivityResponsePayload | FollowActivityResponsePayload | Post | PostDeleteActivityResponsePayload | LikeWithPostAuthor;
export const ActivityStreamingResponsePayloadSchema: v.GenericSchema<unknown, ActivityStreamingResponsePayload> = v.union([v.lazy(() => ProfileUpdateActivityResponsePayloadSchema), v.lazy(() => NewsActivityResponsePayloadSchema), v.lazy(() => FollowActivityResponsePayloadSchema), v.lazy(() => PostSchema), v.lazy(() => PostDeleteActivityResponsePayloadSchema), v.lazy(() => LikeWithPostAuthorSchema)]);

/** An activity event or error that can be returned by the x activity streaming API. */
export type ActivityStreamResponse = {
  readonly data?: unknown;
  readonly errors?: ReadonlyArray<Problem>;
};
export const ActivityStreamResponseSchema: v.GenericSchema<unknown, ActivityStreamResponse> = v.looseObject({
  data: v.optional(v.unknown()),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

/** An XAA subscription filter. */
export type ActivitySubscriptionFilter = {
  readonly direction?: "inbound" | "outbound";
  readonly keyword?: Keyword;
  readonly user_id?: UserId;
};
export const ActivitySubscriptionFilterSchema: v.GenericSchema<unknown, ActivitySubscriptionFilter> = v.looseObject({
  direction: v.optional(v.union([v.literal("inbound"), v.literal("outbound")])),
  keyword: v.optional(v.lazy(() => KeywordSchema)),
  user_id: v.optional(v.lazy(() => UserIdSchema)),
});

export type AddChatGroupMembersActionSignatures = {
  readonly encoded_message_event_detail: string;
  readonly message_event_signature: AddChatGroupMembersActionSignaturesMessageEventSignature;
  readonly message_id: string;
  readonly signature_payload?: string;
};
export const AddChatGroupMembersActionSignaturesSchema: v.GenericSchema<unknown, AddChatGroupMembersActionSignatures> = v.looseObject({
  encoded_message_event_detail: v.string(),
  message_event_signature: v.lazy(() => AddChatGroupMembersActionSignaturesMessageEventSignatureSchema),
  message_id: v.string(),
  signature_payload: v.optional(v.string()),
});

export type AddChatGroupMembersActionSignaturesMessageEventSignature = {
  readonly message_signing_key_info_list?: ReadonlyArray<AddChatGroupMembersActionSignaturesMessageEventSignatureMessageSigningKeyInfoList>;
  readonly public_key_version: string;
  readonly signature: string;
  readonly signature_version: string;
  readonly signing_public_key?: string;
};
export const AddChatGroupMembersActionSignaturesMessageEventSignatureSchema: v.GenericSchema<unknown, AddChatGroupMembersActionSignaturesMessageEventSignature> = v.looseObject({
  message_signing_key_info_list: v.optional(v.array(v.lazy(() => AddChatGroupMembersActionSignaturesMessageEventSignatureMessageSigningKeyInfoListSchema))),
  public_key_version: v.string(),
  signature: v.string(),
  signature_version: v.string(),
  signing_public_key: v.optional(v.string()),
});

export type AddChatGroupMembersActionSignaturesMessageEventSignatureMessageSigningKeyInfoList = {
  readonly member_id?: string;
  readonly public_key_version?: string;
  readonly signing_public_key?: string;
};
export const AddChatGroupMembersActionSignaturesMessageEventSignatureMessageSigningKeyInfoListSchema: v.GenericSchema<unknown, AddChatGroupMembersActionSignaturesMessageEventSignatureMessageSigningKeyInfoList> = v.looseObject({
  member_id: v.optional(v.string()),
  public_key_version: v.optional(v.string()),
  signing_public_key: v.optional(v.string()),
});

export type AddChatGroupMembersConversationParticipantKeys = {
  readonly encrypted_conversation_key?: string;
  readonly public_key_version?: string;
  readonly user_id?: string;
};
export const AddChatGroupMembersConversationParticipantKeysSchema: v.GenericSchema<unknown, AddChatGroupMembersConversationParticipantKeys> = v.looseObject({
  encrypted_conversation_key: v.optional(v.string()),
  public_key_version: v.optional(v.string()),
  user_id: v.optional(v.string()),
});

export type AddChatGroupMembersRequest = {
  readonly action_signatures?: ReadonlyArray<AddChatGroupMembersActionSignatures>;
  readonly conversation_key_version?: string;
  readonly conversation_participant_keys?: ReadonlyArray<AddChatGroupMembersConversationParticipantKeys>;
  readonly encrypted_avatar_url?: string;
  readonly encrypted_title?: string;
  readonly user_ids: ReadonlyArray<string>;
};
export const AddChatGroupMembersRequestSchema: v.GenericSchema<unknown, AddChatGroupMembersRequest> = v.looseObject({
  action_signatures: v.optional(v.array(v.lazy(() => AddChatGroupMembersActionSignaturesSchema))),
  conversation_key_version: v.optional(v.string()),
  conversation_participant_keys: v.optional(v.array(v.lazy(() => AddChatGroupMembersConversationParticipantKeysSchema))),
  encrypted_avatar_url: v.optional(v.string()),
  encrypted_title: v.optional(v.string()),
  user_ids: v.array(v.string()),
});

export type AddChatGroupMembersResponse = {
  readonly data?: Post;
  readonly errors?: ReadonlyArray<Problem>;
};
export const AddChatGroupMembersResponseSchema: v.GenericSchema<unknown, AddChatGroupMembersResponse> = v.looseObject({
  data: v.optional(v.lazy(() => PostSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type AddConversationKeysActionSignatures = {
  readonly encoded_message_event_detail: string;
  readonly message_event_signature: AddConversationKeysActionSignaturesMessageEventSignature;
  readonly message_id: string;
  readonly signature_payload?: string;
};
export const AddConversationKeysActionSignaturesSchema: v.GenericSchema<unknown, AddConversationKeysActionSignatures> = v.looseObject({
  encoded_message_event_detail: v.string(),
  message_event_signature: v.lazy(() => AddConversationKeysActionSignaturesMessageEventSignatureSchema),
  message_id: v.string(),
  signature_payload: v.optional(v.string()),
});

export type AddConversationKeysActionSignaturesMessageEventSignature = {
  readonly message_signing_key_info_list?: ReadonlyArray<AddConversationKeysActionSignaturesMessageEventSignatureMessageSigningKeyInfoList>;
  readonly public_key_version: string;
  readonly signature: string;
  readonly signature_version: string;
  readonly signing_public_key?: string;
};
export const AddConversationKeysActionSignaturesMessageEventSignatureSchema: v.GenericSchema<unknown, AddConversationKeysActionSignaturesMessageEventSignature> = v.looseObject({
  message_signing_key_info_list: v.optional(v.array(v.lazy(() => AddConversationKeysActionSignaturesMessageEventSignatureMessageSigningKeyInfoListSchema))),
  public_key_version: v.string(),
  signature: v.string(),
  signature_version: v.string(),
  signing_public_key: v.optional(v.string()),
});

export type AddConversationKeysActionSignaturesMessageEventSignatureMessageSigningKeyInfoList = {
  readonly member_id?: string;
  readonly public_key_version?: string;
  readonly signing_public_key?: string;
};
export const AddConversationKeysActionSignaturesMessageEventSignatureMessageSigningKeyInfoListSchema: v.GenericSchema<unknown, AddConversationKeysActionSignaturesMessageEventSignatureMessageSigningKeyInfoList> = v.looseObject({
  member_id: v.optional(v.string()),
  public_key_version: v.optional(v.string()),
  signing_public_key: v.optional(v.string()),
});

export type AddConversationKeysConversationParticipantKeys = {
  readonly encrypted_conversation_key?: string;
  readonly public_key_version?: string;
  readonly user_id?: string;
};
export const AddConversationKeysConversationParticipantKeysSchema: v.GenericSchema<unknown, AddConversationKeysConversationParticipantKeys> = v.looseObject({
  encrypted_conversation_key: v.optional(v.string()),
  public_key_version: v.optional(v.string()),
  user_id: v.optional(v.string()),
});

export type AddConversationKeysRequest = {
  readonly action_signatures?: ReadonlyArray<AddConversationKeysActionSignatures>;
  readonly base64_encoded_key_rotation?: string;
  readonly conversation_key_version: string;
  readonly conversation_participant_keys: ReadonlyArray<AddConversationKeysConversationParticipantKeys>;
};
export const AddConversationKeysRequestSchema: v.GenericSchema<unknown, AddConversationKeysRequest> = v.looseObject({
  action_signatures: v.optional(v.array(v.lazy(() => AddConversationKeysActionSignaturesSchema))),
  base64_encoded_key_rotation: v.optional(v.string()),
  conversation_key_version: v.string(),
  conversation_participant_keys: v.array(v.lazy(() => AddConversationKeysConversationParticipantKeysSchema)),
});

export type AddConversationKeysResponse = {
  readonly data?: AddConversationKeysResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const AddConversationKeysResponseSchema: v.GenericSchema<unknown, AddConversationKeysResponse> = v.looseObject({
  data: v.optional(v.lazy(() => AddConversationKeysResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type AddConversationKeysResponseData = {
  readonly conversation_id?: string;
  readonly sequence_id?: string;
};
export const AddConversationKeysResponseDataSchema: v.GenericSchema<unknown, AddConversationKeysResponseData> = v.looseObject({
  conversation_id: v.optional(v.string()),
  sequence_id: v.optional(v.string()),
});

export type AddListsMemberRequest = {
  readonly user_id: string;
};
export const AddListsMemberRequestSchema: v.GenericSchema<unknown, AddListsMemberRequest> = v.looseObject({
  user_id: v.string(),
});

export type AddListsMemberResponse = {
  readonly data?: AddListsMemberResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const AddListsMemberResponseSchema: v.GenericSchema<unknown, AddListsMemberResponse> = v.looseObject({
  data: v.optional(v.lazy(() => AddListsMemberResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type AddListsMemberResponseData = {
  readonly is_member: boolean;
};
export const AddListsMemberResponseDataSchema: v.GenericSchema<unknown, AddListsMemberResponseData> = v.looseObject({
  is_member: v.boolean(),
});

export type AddUserPublicKeyPublicKey = {
  readonly identity_public_key_signature?: string;
  readonly public_key?: string;
  readonly public_key_fingerprint?: string;
  readonly registration_method?: string;
  readonly signing_public_key?: string;
  readonly signing_public_key_signature?: string;
};
export const AddUserPublicKeyPublicKeySchema: v.GenericSchema<unknown, AddUserPublicKeyPublicKey> = v.looseObject({
  identity_public_key_signature: v.optional(v.string()),
  public_key: v.optional(v.string()),
  public_key_fingerprint: v.optional(v.string()),
  registration_method: v.optional(v.string()),
  signing_public_key: v.optional(v.string()),
  signing_public_key_signature: v.optional(v.string()),
});

export type AddUserPublicKeyRequest = {
  readonly generate_version?: boolean;
  readonly public_key: AddUserPublicKeyPublicKey;
  readonly version: string;
};
export const AddUserPublicKeyRequestSchema: v.GenericSchema<unknown, AddUserPublicKeyRequest> = v.looseObject({
  generate_version: v.optional(v.boolean()),
  public_key: v.lazy(() => AddUserPublicKeyPublicKeySchema),
  version: v.string(),
});

export type AddUserPublicKeyResponse = {
  readonly data?: AddUserPublicKeyResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const AddUserPublicKeyResponseSchema: v.GenericSchema<unknown, AddUserPublicKeyResponse> = v.looseObject({
  data: v.optional(v.lazy(() => AddUserPublicKeyResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type AddUserPublicKeyResponseData = {
  readonly juicebox_config?: unknown;
  readonly public_key_version?: string;
};
export const AddUserPublicKeyResponseDataSchema: v.GenericSchema<unknown, AddUserPublicKeyResponseData> = v.looseObject({
  juicebox_config: v.optional(v.unknown()),
  public_key_version: v.optional(v.string()),
});

export type Analytics = {
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
};
export const AnalyticsSchema: v.GenericSchema<unknown, Analytics> = v.looseObject({
  app_install_attempts: v.optional(v.pipe(v.number(), v.integer())),
  app_opens: v.optional(v.pipe(v.number(), v.integer())),
  bookmarks: v.optional(v.pipe(v.number(), v.integer())),
  detail_expands: v.optional(v.pipe(v.number(), v.integer())),
  email_tweet: v.optional(v.pipe(v.number(), v.integer())),
  engagements: v.optional(v.pipe(v.number(), v.integer())),
  follows: v.optional(v.pipe(v.number(), v.integer())),
  hashtag_clicks: v.optional(v.pipe(v.number(), v.integer())),
  id: v.optional(v.string()),
  impressions: v.optional(v.pipe(v.number(), v.integer())),
  likes: v.optional(v.pipe(v.number(), v.integer())),
  media_views: v.optional(v.pipe(v.number(), v.integer())),
  permalink_clicks: v.optional(v.pipe(v.number(), v.integer())),
  quote_tweets: v.optional(v.pipe(v.number(), v.integer())),
  replies: v.optional(v.pipe(v.number(), v.integer())),
  retweets: v.optional(v.pipe(v.number(), v.integer())),
  shares: v.optional(v.pipe(v.number(), v.integer())),
  timestamp: v.optional(v.string()),
  timestamped_metrics: v.optional(v.lazy(() => AnalyticsTimestampedMetricsSchema)),
  unfollows: v.optional(v.pipe(v.number(), v.integer())),
  unlikes: v.optional(v.pipe(v.number(), v.integer())),
  url_clicks: v.optional(v.pipe(v.number(), v.integer())),
  user_profile_clicks: v.optional(v.pipe(v.number(), v.integer())),
});

export type AnalyticsId = string;
export const AnalyticsIdSchema: v.GenericSchema<unknown, AnalyticsId> = v.string();

export type AnalyticsTimestampedMetrics = ReadonlyArray<unknown>;
export const AnalyticsTimestampedMetricsSchema: v.GenericSchema<unknown, AnalyticsTimestampedMetrics> = v.array(v.unknown());

export type AppendMediaUploadRequest = {
  readonly media: string | string;
  readonly segment_index: number;
};
export const AppendMediaUploadRequestSchema: v.GenericSchema<unknown, AppendMediaUploadRequest> = v.looseObject({
  media: v.union([v.string(), v.string()]),
  segment_index: v.pipe(v.number(), v.integer()),
});

export type AppendMediaUploadResponse = {
  readonly data?: AppendMediaUploadResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const AppendMediaUploadResponseSchema: v.GenericSchema<unknown, AppendMediaUploadResponse> = v.looseObject({
  data: v.optional(v.lazy(() => AppendMediaUploadResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type AppendMediaUploadResponseData = {
  readonly expires_at?: number;
};
export const AppendMediaUploadResponseDataSchema: v.GenericSchema<unknown, AppendMediaUploadResponseData> = v.looseObject({
  expires_at: v.optional(v.pipe(v.number(), v.integer())),
});

export type ArticleCreateDraftContentState = {
  readonly blocks: ReadonlyArray<ArticleCreateDraftContentStateBlocks>;
  readonly entities: ReadonlyArray<ArticleCreateDraftContentStateEntities>;
};
export const ArticleCreateDraftContentStateSchema: v.GenericSchema<unknown, ArticleCreateDraftContentState> = v.looseObject({
  blocks: v.array(v.lazy(() => ArticleCreateDraftContentStateBlocksSchema)),
  entities: v.array(v.lazy(() => ArticleCreateDraftContentStateEntitiesSchema)),
});

export type ArticleCreateDraftContentStateBlocks = {
  readonly data?: ArticleCreateDraftContentStateBlocksData;
  readonly entity_ranges?: ReadonlyArray<ArticleCreateDraftContentStateBlocksEntityRanges>;
  readonly inline_style_ranges?: ReadonlyArray<ArticleCreateDraftContentStateBlocksInlineStyleRanges>;
  readonly key?: string;
  readonly text: string;
  readonly type: "unstyled" | "header-one" | "header-two" | "header-three" | "unordered-list-item" | "ordered-list-item" | "blockquote" | "atomic";
};
export const ArticleCreateDraftContentStateBlocksSchema: v.GenericSchema<unknown, ArticleCreateDraftContentStateBlocks> = v.looseObject({
  data: v.optional(v.lazy(() => ArticleCreateDraftContentStateBlocksDataSchema)),
  entity_ranges: v.optional(v.array(v.lazy(() => ArticleCreateDraftContentStateBlocksEntityRangesSchema))),
  inline_style_ranges: v.optional(v.array(v.lazy(() => ArticleCreateDraftContentStateBlocksInlineStyleRangesSchema))),
  key: v.optional(v.string()),
  text: v.string(),
  type: v.union([v.literal("unstyled"), v.literal("header-one"), v.literal("header-two"), v.literal("header-three"), v.literal("unordered-list-item"), v.literal("ordered-list-item"), v.literal("blockquote"), v.literal("atomic")]),
});

export type ArticleCreateDraftContentStateBlocksData = {
  readonly cashtags?: ReadonlyArray<ArticleCreateDraftContentStateBlocksDataCashtags>;
  readonly hashtags?: ReadonlyArray<ArticleCreateDraftContentStateBlocksDataHashtags>;
  readonly mentions?: ReadonlyArray<ArticleCreateDraftContentStateBlocksDataMentions>;
  readonly urls?: ReadonlyArray<ArticleCreateDraftContentStateBlocksDataUrls>;
};
export const ArticleCreateDraftContentStateBlocksDataSchema: v.GenericSchema<unknown, ArticleCreateDraftContentStateBlocksData> = v.looseObject({
  cashtags: v.optional(v.array(v.lazy(() => ArticleCreateDraftContentStateBlocksDataCashtagsSchema))),
  hashtags: v.optional(v.array(v.lazy(() => ArticleCreateDraftContentStateBlocksDataHashtagsSchema))),
  mentions: v.optional(v.array(v.lazy(() => ArticleCreateDraftContentStateBlocksDataMentionsSchema))),
  urls: v.optional(v.array(v.lazy(() => ArticleCreateDraftContentStateBlocksDataUrlsSchema))),
});

export type ArticleCreateDraftContentStateBlocksDataCashtags = {
  readonly from_index: number;
  readonly text: string;
  readonly to_index: number;
};
export const ArticleCreateDraftContentStateBlocksDataCashtagsSchema: v.GenericSchema<unknown, ArticleCreateDraftContentStateBlocksDataCashtags> = v.looseObject({
  from_index: v.pipe(v.number(), v.integer()),
  text: v.string(),
  to_index: v.pipe(v.number(), v.integer()),
});

export type ArticleCreateDraftContentStateBlocksDataHashtags = {
  readonly from_index: number;
  readonly text: string;
  readonly to_index: number;
};
export const ArticleCreateDraftContentStateBlocksDataHashtagsSchema: v.GenericSchema<unknown, ArticleCreateDraftContentStateBlocksDataHashtags> = v.looseObject({
  from_index: v.pipe(v.number(), v.integer()),
  text: v.string(),
  to_index: v.pipe(v.number(), v.integer()),
});

export type ArticleCreateDraftContentStateBlocksDataMentions = {
  readonly from_index: number;
  readonly text: string;
  readonly to_index: number;
};
export const ArticleCreateDraftContentStateBlocksDataMentionsSchema: v.GenericSchema<unknown, ArticleCreateDraftContentStateBlocksDataMentions> = v.looseObject({
  from_index: v.pipe(v.number(), v.integer()),
  text: v.string(),
  to_index: v.pipe(v.number(), v.integer()),
});

export type ArticleCreateDraftContentStateBlocksDataUrls = {
  readonly from_index: number;
  readonly text: string;
  readonly to_index: number;
};
export const ArticleCreateDraftContentStateBlocksDataUrlsSchema: v.GenericSchema<unknown, ArticleCreateDraftContentStateBlocksDataUrls> = v.looseObject({
  from_index: v.pipe(v.number(), v.integer()),
  text: v.string(),
  to_index: v.pipe(v.number(), v.integer()),
});

export type ArticleCreateDraftContentStateBlocksEntityRanges = {
  readonly key: number;
  readonly length: number;
  readonly offset: number;
};
export const ArticleCreateDraftContentStateBlocksEntityRangesSchema: v.GenericSchema<unknown, ArticleCreateDraftContentStateBlocksEntityRanges> = v.looseObject({
  key: v.pipe(v.number(), v.integer()),
  length: v.pipe(v.number(), v.integer()),
  offset: v.pipe(v.number(), v.integer()),
});

export type ArticleCreateDraftContentStateBlocksInlineStyleRanges = {
  readonly length: number;
  readonly offset: number;
  readonly style: "bold" | "italic" | "strikethrough";
};
export const ArticleCreateDraftContentStateBlocksInlineStyleRangesSchema: v.GenericSchema<unknown, ArticleCreateDraftContentStateBlocksInlineStyleRanges> = v.looseObject({
  length: v.pipe(v.number(), v.integer()),
  offset: v.pipe(v.number(), v.integer()),
  style: v.union([v.literal("bold"), v.literal("italic"), v.literal("strikethrough")]),
});

export type ArticleCreateDraftContentStateEntities = {
  readonly key: string;
  readonly value: ArticleCreateDraftContentStateEntitiesValue;
};
export const ArticleCreateDraftContentStateEntitiesSchema: v.GenericSchema<unknown, ArticleCreateDraftContentStateEntities> = v.looseObject({
  key: v.string(),
  value: v.lazy(() => ArticleCreateDraftContentStateEntitiesValueSchema),
});

export type ArticleCreateDraftContentStateEntitiesValue = {
  readonly data: ArticleCreateDraftContentStateEntitiesValueData;
  readonly mutability: "immutable" | "mutable" | "segmented";
  readonly type: "post" | "link" | "image" | "emoji" | "markdown" | "divider" | "latex";
};
export const ArticleCreateDraftContentStateEntitiesValueSchema: v.GenericSchema<unknown, ArticleCreateDraftContentStateEntitiesValue> = v.looseObject({
  data: v.lazy(() => ArticleCreateDraftContentStateEntitiesValueDataSchema),
  mutability: v.union([v.literal("immutable"), v.literal("mutable"), v.literal("segmented")]),
  type: v.union([v.literal("post"), v.literal("link"), v.literal("image"), v.literal("emoji"), v.literal("markdown"), v.literal("divider"), v.literal("latex")]),
});

export type ArticleCreateDraftContentStateEntitiesValueData = {
  readonly caption?: string;
  readonly entity_key?: string;
  readonly markdown?: string;
  readonly media_items?: ReadonlyArray<ArticleCreateDraftContentStateEntitiesValueDataMediaItems>;
  readonly post_id?: string;
  readonly url?: string;
};
export const ArticleCreateDraftContentStateEntitiesValueDataSchema: v.GenericSchema<unknown, ArticleCreateDraftContentStateEntitiesValueData> = v.looseObject({
  caption: v.optional(v.string()),
  entity_key: v.optional(v.string()),
  markdown: v.optional(v.string()),
  media_items: v.optional(v.array(v.lazy(() => ArticleCreateDraftContentStateEntitiesValueDataMediaItemsSchema))),
  post_id: v.optional(v.string()),
  url: v.optional(v.string()),
});

export type ArticleCreateDraftContentStateEntitiesValueDataMediaItems = {
  readonly media_category: string;
  readonly media_id: string;
};
export const ArticleCreateDraftContentStateEntitiesValueDataMediaItemsSchema: v.GenericSchema<unknown, ArticleCreateDraftContentStateEntitiesValueDataMediaItems> = v.looseObject({
  media_category: v.string(),
  media_id: v.string(),
});

export type ArticleCreateDraftCoverMedia = {
  readonly media_category: string;
  readonly media_id: string;
};
export const ArticleCreateDraftCoverMediaSchema: v.GenericSchema<unknown, ArticleCreateDraftCoverMedia> = v.looseObject({
  media_category: v.string(),
  media_id: v.string(),
});

export type ArticleCreateDraftRequest = {
  readonly content_state: ArticleCreateDraftContentState;
  readonly cover_media?: ArticleCreateDraftCoverMedia;
  readonly title: string;
};
export const ArticleCreateDraftRequestSchema: v.GenericSchema<unknown, ArticleCreateDraftRequest> = v.looseObject({
  content_state: v.lazy(() => ArticleCreateDraftContentStateSchema),
  cover_media: v.optional(v.lazy(() => ArticleCreateDraftCoverMediaSchema)),
  title: v.string(),
});

export type ArticleCreateDraftResponse = {
  readonly data?: ArticleCreateDraftResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const ArticleCreateDraftResponseSchema: v.GenericSchema<unknown, ArticleCreateDraftResponse> = v.looseObject({
  data: v.optional(v.lazy(() => ArticleCreateDraftResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type ArticleCreateDraftResponseData = {
  readonly id: string;
  readonly title: string;
};
export const ArticleCreateDraftResponseDataSchema: v.GenericSchema<unknown, ArticleCreateDraftResponseData> = v.looseObject({
  id: v.string(),
  title: v.string(),
});

export type ArticlePublishResponse = {
  readonly data?: ArticlePublishResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const ArticlePublishResponseSchema: v.GenericSchema<unknown, ArticlePublishResponse> = v.looseObject({
  data: v.optional(v.lazy(() => ArticlePublishResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type ArticlePublishResponseData = {
  readonly post_id: string;
};
export const ArticlePublishResponseDataSchema: v.GenericSchema<unknown, ArticlePublishResponseData> = v.looseObject({
  post_id: v.string(),
});

export type BlockUsersDmsResponse = {
  readonly data?: BlockUsersDmsResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const BlockUsersDmsResponseSchema: v.GenericSchema<unknown, BlockUsersDmsResponse> = v.looseObject({
  data: v.optional(v.lazy(() => BlockUsersDmsResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type BlockUsersDmsResponseData = {
  readonly blocked: boolean;
};
export const BlockUsersDmsResponseDataSchema: v.GenericSchema<unknown, BlockUsersDmsResponseData> = v.looseObject({
  blocked: v.boolean(),
});

export type Broadcast = {
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
};
export const BroadcastSchema: v.GenericSchema<unknown, Broadcast> = v.looseObject({
  available_for_replay: v.optional(v.boolean()),
  broadcast_id: v.optional(v.string()),
  chat_option: v.optional(v.pipe(v.number(), v.integer())),
  created_at_ms: v.optional(v.string()),
  end_ms: v.optional(v.string()),
  height: v.optional(v.pipe(v.number(), v.integer())),
  id: v.optional(v.string()),
  image_url: v.optional(v.string()),
  image_url_medium: v.optional(v.string()),
  image_url_small: v.optional(v.string()),
  is_high_latency: v.optional(v.boolean()),
  language: v.optional(v.string()),
  media_key: v.optional(v.string()),
  scheduled_end_ms: v.optional(v.string()),
  scheduled_start_ms: v.optional(v.string()),
  share_url: v.optional(v.string()),
  source_id: v.optional(v.string()),
  start_ms: v.optional(v.string()),
  state: v.optional(v.string()),
  title: v.optional(v.string()),
  total_watched: v.optional(v.string()),
  total_watching: v.optional(v.string()),
  tweet_id: v.optional(v.string()),
  twitter_user_id: v.optional(v.string()),
  updated_at_ms: v.optional(v.string()),
  width: v.optional(v.pipe(v.number(), v.integer())),
});

export type ChatConversation = {
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
};
export const ChatConversationSchema: v.GenericSchema<unknown, ChatConversation> = v.looseObject({
  admin_ids: v.optional(v.array(v.string())),
  created_at: v.optional(v.pipe(v.string(), v.isoTimestamp())),
  group_avatar_url: v.optional(v.string()),
  group_name: v.optional(v.string()),
  id: v.optional(v.string()),
  is_muted: v.optional(v.boolean()),
  member_ids: v.optional(v.array(v.string())),
  message_ttl_ms: v.optional(v.pipe(v.number(), v.integer())),
  participant_ids: v.optional(v.array(v.string())),
  screen_capture_blocking_enabled: v.optional(v.boolean()),
  screen_capture_detection_enabled: v.optional(v.boolean()),
  type: v.optional(v.string()),
  updated_at: v.optional(v.pipe(v.string(), v.isoTimestamp())),
});

export type ChatMediaUploadAppendRequest = {
  readonly conversation_id: string;
  readonly media: string | string;
  readonly media_hash_key: string;
  readonly segment_index: number;
};
export const ChatMediaUploadAppendRequestSchema: v.GenericSchema<unknown, ChatMediaUploadAppendRequest> = v.looseObject({
  conversation_id: v.string(),
  media: v.union([v.string(), v.string()]),
  media_hash_key: v.string(),
  segment_index: v.pipe(v.number(), v.integer()),
});

export type ChatMediaUploadAppendResponse = {
  readonly data?: ChatMediaUploadAppendResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const ChatMediaUploadAppendResponseSchema: v.GenericSchema<unknown, ChatMediaUploadAppendResponse> = v.looseObject({
  data: v.optional(v.lazy(() => ChatMediaUploadAppendResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type ChatMediaUploadAppendResponseData = {
  readonly expires_at?: number;
};
export const ChatMediaUploadAppendResponseDataSchema: v.GenericSchema<unknown, ChatMediaUploadAppendResponseData> = v.looseObject({
  expires_at: v.optional(v.pipe(v.number(), v.integer())),
});

export type ChatMediaUploadFinalizeRequest = {
  readonly conversation_id: string;
  readonly media_hash_key: string;
  readonly message_id?: string;
  readonly num_parts: string;
  readonly ttl_msec?: string;
};
export const ChatMediaUploadFinalizeRequestSchema: v.GenericSchema<unknown, ChatMediaUploadFinalizeRequest> = v.looseObject({
  conversation_id: v.string(),
  media_hash_key: v.string(),
  message_id: v.optional(v.string()),
  num_parts: v.string(),
  ttl_msec: v.optional(v.string()),
});

export type ChatMediaUploadFinalizeResponse = {
  readonly data?: ChatMediaUploadFinalizeResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const ChatMediaUploadFinalizeResponseSchema: v.GenericSchema<unknown, ChatMediaUploadFinalizeResponse> = v.looseObject({
  data: v.optional(v.lazy(() => ChatMediaUploadFinalizeResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type ChatMediaUploadFinalizeResponseData = {
  readonly success: boolean;
};
export const ChatMediaUploadFinalizeResponseDataSchema: v.GenericSchema<unknown, ChatMediaUploadFinalizeResponseData> = v.looseObject({
  success: v.boolean(),
});

export type ChatMediaUploadInitializeRequest = {
  readonly conversation_id: string;
  readonly total_bytes: number;
};
export const ChatMediaUploadInitializeRequestSchema: v.GenericSchema<unknown, ChatMediaUploadInitializeRequest> = v.looseObject({
  conversation_id: v.string(),
  total_bytes: v.pipe(v.number(), v.integer()),
});

export type ChatMediaUploadInitializeResponse = {
  readonly data?: ChatMediaUploadInitializeResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const ChatMediaUploadInitializeResponseSchema: v.GenericSchema<unknown, ChatMediaUploadInitializeResponse> = v.looseObject({
  data: v.optional(v.lazy(() => ChatMediaUploadInitializeResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type ChatMediaUploadInitializeResponseData = {
  readonly conversation_id: string;
  readonly media_hash_key: string;
  readonly session_id: string;
};
export const ChatMediaUploadInitializeResponseDataSchema: v.GenericSchema<unknown, ChatMediaUploadInitializeResponseData> = v.looseObject({
  conversation_id: v.string(),
  media_hash_key: v.string(),
  session_id: v.string(),
});

export type ChatMessageEvent = {
  readonly conversation_id?: string;
  readonly conversation_token?: string;
  readonly created_at?: string;
  readonly encoded_event?: string;
  readonly id?: string;
  readonly is_trusted?: boolean;
  readonly message_event_signature?: unknown;
  readonly previous_id?: string;
  readonly sender_id?: string;
};
export const ChatMessageEventSchema: v.GenericSchema<unknown, ChatMessageEvent> = v.looseObject({
  conversation_id: v.optional(v.string()),
  conversation_token: v.optional(v.string()),
  created_at: v.optional(v.pipe(v.string(), v.isoTimestamp())),
  encoded_event: v.optional(v.string()),
  id: v.optional(v.string()),
  is_trusted: v.optional(v.boolean()),
  message_event_signature: v.optional(v.unknown()),
  previous_id: v.optional(v.string()),
  sender_id: v.optional(v.string()),
});

export type Community = {
  readonly access?: string;
  readonly created_at?: string;
  readonly description?: string;
  readonly id?: string;
  readonly join_policy?: string;
  readonly member_count?: number;
  readonly name?: string;
};
export const CommunitySchema: v.GenericSchema<unknown, Community> = v.looseObject({
  access: v.optional(v.string()),
  created_at: v.optional(v.string()),
  description: v.optional(v.string()),
  id: v.optional(v.string()),
  join_policy: v.optional(v.string()),
  member_count: v.optional(v.pipe(v.number(), v.integer())),
  name: v.optional(v.string()),
});

export type CommunityId = string;
export const CommunityIdSchema: v.GenericSchema<unknown, CommunityId> = v.string();

export type ComplianceJob = {
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
};
export const ComplianceJobSchema: v.GenericSchema<unknown, ComplianceJob> = v.looseObject({
  created_at: v.optional(v.string()),
  download_expires_at: v.optional(v.string()),
  download_url: v.optional(v.string()),
  id: v.optional(v.string()),
  name: v.optional(v.string()),
  resumable: v.optional(v.boolean()),
  status: v.optional(v.string()),
  type: v.optional(v.string()),
  upload_expires_at: v.optional(v.string()),
  upload_url: v.optional(v.string()),
});

export type Connection = {
  readonly client_ip?: string;
  readonly connected_at?: string;
  readonly disconnect_reason?: string;
  readonly disconnected_at?: string;
  readonly endpoint_name?: string;
  readonly id?: string;
};
export const ConnectionSchema: v.GenericSchema<unknown, Connection> = v.looseObject({
  client_ip: v.optional(v.string()),
  connected_at: v.optional(v.pipe(v.string(), v.isoTimestamp())),
  disconnect_reason: v.optional(v.string()),
  disconnected_at: v.optional(v.pipe(v.string(), v.isoTimestamp())),
  endpoint_name: v.optional(v.string()),
  id: v.optional(v.string()),
});

export type CountryCode = string;
export const CountryCodeSchema: v.GenericSchema<unknown, CountryCode> = v.string();

export type CreateAccountActivitySubscriptionRequest = {

};
export const CreateAccountActivitySubscriptionRequestSchema: v.GenericSchema<unknown, CreateAccountActivitySubscriptionRequest> = v.looseObject({

});

export type CreateAccountActivitySubscriptionResponse = {
  readonly data?: CreateAccountActivitySubscriptionResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const CreateAccountActivitySubscriptionResponseSchema: v.GenericSchema<unknown, CreateAccountActivitySubscriptionResponse> = v.looseObject({
  data: v.optional(v.lazy(() => CreateAccountActivitySubscriptionResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type CreateAccountActivitySubscriptionResponseData = {
  readonly subscribed: boolean;
};
export const CreateAccountActivitySubscriptionResponseDataSchema: v.GenericSchema<unknown, CreateAccountActivitySubscriptionResponseData> = v.looseObject({
  subscribed: v.boolean(),
});

export type CreateActivitySubscriptionFilter = {
  readonly direction?: "inbound" | "outbound";
  readonly keyword?: string;
  readonly user_id?: string;
};
export const CreateActivitySubscriptionFilterSchema: v.GenericSchema<unknown, CreateActivitySubscriptionFilter> = v.looseObject({
  direction: v.optional(v.union([v.literal("inbound"), v.literal("outbound")])),
  keyword: v.optional(v.string()),
  user_id: v.optional(v.string()),
});

export type CreateActivitySubscriptionRequest = {
  readonly event_type: "profile.update.bio" | "profile.update.profile_picture" | "profile.update.banner_picture" | "profile.update.screenname" | "profile.update.geo" | "profile.update.url" | "profile.update.verified_badge" | "profile.update.affiliate_badge" | "profile.update.handle" | "news.new" | "follow.follow" | "follow.unfollow" | "spaces.start" | "spaces.end" | "chat.received" | "chat.sent" | "chat.conversation.join" | "chat.conversation_join" | "chat.conversation.member_added" | "chat.conversation.member_removed" | "chat.conversation.admin_added" | "chat.conversation.admin_removed" | "chat.update.group_name" | "chat.update.restrictions" | "dm.sent" | "dm.received" | "dm.indicate_typing" | "dm.read" | "post.create" | "post.delete" | "post.mention.create" | "like.create" | "mute.mute" | "mute.unmute" | "block.block" | "block.unblock";
  readonly filter: CreateActivitySubscriptionFilter;
  readonly tag?: string;
  readonly webhook_id?: string;
};
export const CreateActivitySubscriptionRequestSchema: v.GenericSchema<unknown, CreateActivitySubscriptionRequest> = v.looseObject({
  event_type: v.union([v.literal("profile.update.bio"), v.literal("profile.update.profile_picture"), v.literal("profile.update.banner_picture"), v.literal("profile.update.screenname"), v.literal("profile.update.geo"), v.literal("profile.update.url"), v.literal("profile.update.verified_badge"), v.literal("profile.update.affiliate_badge"), v.literal("profile.update.handle"), v.literal("news.new"), v.literal("follow.follow"), v.literal("follow.unfollow"), v.literal("spaces.start"), v.literal("spaces.end"), v.literal("chat.received"), v.literal("chat.sent"), v.literal("chat.conversation.join"), v.literal("chat.conversation_join"), v.literal("chat.conversation.member_added"), v.literal("chat.conversation.member_removed"), v.literal("chat.conversation.admin_added"), v.literal("chat.conversation.admin_removed"), v.literal("chat.update.group_name"), v.literal("chat.update.restrictions"), v.literal("dm.sent"), v.literal("dm.received"), v.literal("dm.indicate_typing"), v.literal("dm.read"), v.literal("post.create"), v.literal("post.delete"), v.literal("post.mention.create"), v.literal("like.create"), v.literal("mute.mute"), v.literal("mute.unmute"), v.literal("block.block"), v.literal("block.unblock")]),
  filter: v.lazy(() => CreateActivitySubscriptionFilterSchema),
  tag: v.optional(v.string()),
  webhook_id: v.optional(v.string()),
});

export type CreateActivitySubscriptionResponse = {
  readonly data?: CreateActivitySubscriptionResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const CreateActivitySubscriptionResponseSchema: v.GenericSchema<unknown, CreateActivitySubscriptionResponse> = v.looseObject({
  data: v.optional(v.lazy(() => CreateActivitySubscriptionResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type CreateActivitySubscriptionResponseData = {
  readonly subscription?: CreateActivitySubscriptionResponseDataSubscription;
};
export const CreateActivitySubscriptionResponseDataSchema: v.GenericSchema<unknown, CreateActivitySubscriptionResponseData> = v.looseObject({
  subscription: v.optional(v.lazy(() => CreateActivitySubscriptionResponseDataSubscriptionSchema)),
});

export type CreateActivitySubscriptionResponseDataSubscription = {
  readonly created_at?: string;
  readonly event_type?: string;
  readonly filter?: CreateActivitySubscriptionResponseDataSubscriptionFilter;
  readonly subscription_id?: string;
  readonly tag?: string;
  readonly updated_at?: string;
  readonly webhook_id?: string;
};
export const CreateActivitySubscriptionResponseDataSubscriptionSchema: v.GenericSchema<unknown, CreateActivitySubscriptionResponseDataSubscription> = v.looseObject({
  created_at: v.optional(v.string()),
  event_type: v.optional(v.string()),
  filter: v.optional(v.lazy(() => CreateActivitySubscriptionResponseDataSubscriptionFilterSchema)),
  subscription_id: v.optional(v.string()),
  tag: v.optional(v.string()),
  updated_at: v.optional(v.string()),
  webhook_id: v.optional(v.string()),
});

export type CreateActivitySubscriptionResponseDataSubscriptionFilter = {
  readonly direction?: string;
  readonly keyword?: string;
  readonly user_id?: string;
};
export const CreateActivitySubscriptionResponseDataSubscriptionFilterSchema: v.GenericSchema<unknown, CreateActivitySubscriptionResponseDataSubscriptionFilter> = v.looseObject({
  direction: v.optional(v.string()),
  keyword: v.optional(v.string()),
  user_id: v.optional(v.string()),
});

export type CreateChatConversationActionSignatures = {
  readonly encoded_message_event_detail: string;
  readonly message_event_signature: CreateChatConversationActionSignaturesMessageEventSignature;
  readonly message_id: string;
  readonly signature_payload?: string;
};
export const CreateChatConversationActionSignaturesSchema: v.GenericSchema<unknown, CreateChatConversationActionSignatures> = v.looseObject({
  encoded_message_event_detail: v.string(),
  message_event_signature: v.lazy(() => CreateChatConversationActionSignaturesMessageEventSignatureSchema),
  message_id: v.string(),
  signature_payload: v.optional(v.string()),
});

export type CreateChatConversationActionSignaturesMessageEventSignature = {
  readonly message_signing_key_info_list?: ReadonlyArray<CreateChatConversationActionSignaturesMessageEventSignatureMessageSigningKeyInfoList>;
  readonly public_key_version: string;
  readonly signature: string;
  readonly signature_version: string;
  readonly signing_public_key?: string;
};
export const CreateChatConversationActionSignaturesMessageEventSignatureSchema: v.GenericSchema<unknown, CreateChatConversationActionSignaturesMessageEventSignature> = v.looseObject({
  message_signing_key_info_list: v.optional(v.array(v.lazy(() => CreateChatConversationActionSignaturesMessageEventSignatureMessageSigningKeyInfoListSchema))),
  public_key_version: v.string(),
  signature: v.string(),
  signature_version: v.string(),
  signing_public_key: v.optional(v.string()),
});

export type CreateChatConversationActionSignaturesMessageEventSignatureMessageSigningKeyInfoList = {
  readonly member_id?: string;
  readonly public_key_version?: string;
  readonly signing_public_key?: string;
};
export const CreateChatConversationActionSignaturesMessageEventSignatureMessageSigningKeyInfoListSchema: v.GenericSchema<unknown, CreateChatConversationActionSignaturesMessageEventSignatureMessageSigningKeyInfoList> = v.looseObject({
  member_id: v.optional(v.string()),
  public_key_version: v.optional(v.string()),
  signing_public_key: v.optional(v.string()),
});

export type CreateChatConversationConversationParticipantKeys = {
  readonly encrypted_conversation_key?: string;
  readonly public_key_version?: string;
  readonly user_id?: string;
};
export const CreateChatConversationConversationParticipantKeysSchema: v.GenericSchema<unknown, CreateChatConversationConversationParticipantKeys> = v.looseObject({
  encrypted_conversation_key: v.optional(v.string()),
  public_key_version: v.optional(v.string()),
  user_id: v.optional(v.string()),
});

export type CreateChatConversationRequest = {
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
};
export const CreateChatConversationRequestSchema: v.GenericSchema<unknown, CreateChatConversationRequest> = v.looseObject({
  action_signatures: v.optional(v.array(v.lazy(() => CreateChatConversationActionSignaturesSchema))),
  base64_encoded_key_rotation: v.optional(v.string()),
  conversation_id: v.string(),
  conversation_key_version: v.string(),
  conversation_participant_keys: v.array(v.lazy(() => CreateChatConversationConversationParticipantKeysSchema)),
  group_admins: v.optional(v.array(v.string())),
  group_avatar_url: v.optional(v.string()),
  group_description: v.optional(v.string()),
  group_members: v.array(v.string()),
  group_name: v.optional(v.string()),
  ttl_msec: v.optional(v.string()),
});

export type CreateChatConversationResponse = {
  readonly data?: CreateChatConversationResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const CreateChatConversationResponseSchema: v.GenericSchema<unknown, CreateChatConversationResponse> = v.looseObject({
  data: v.optional(v.lazy(() => CreateChatConversationResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type CreateChatConversationResponseData = {
  readonly conversation_id: string;
  readonly conversation_key_change_sequence_id?: string;
};
export const CreateChatConversationResponseDataSchema: v.GenericSchema<unknown, CreateChatConversationResponseData> = v.looseObject({
  conversation_id: v.string(),
  conversation_key_change_sequence_id: v.optional(v.string()),
});

export type CreateCommunityNotesInfo = {
  readonly classification: "misinformed_or_potentially_misleading" | "not_misleading";
  readonly is_media_note?: boolean;
  readonly misleading_tags: ReadonlyArray<"disputed_claim_as_fact" | "factual_error" | "manipulated_media" | "misinterpreted_satire" | "missing_important_context" | "other" | "outdated_information">;
  readonly text: string;
  readonly trustworthy_sources: boolean;
};
export const CreateCommunityNotesInfoSchema: v.GenericSchema<unknown, CreateCommunityNotesInfo> = v.looseObject({
  classification: v.union([v.literal("misinformed_or_potentially_misleading"), v.literal("not_misleading")]),
  is_media_note: v.optional(v.boolean()),
  misleading_tags: v.array(v.union([v.literal("disputed_claim_as_fact"), v.literal("factual_error"), v.literal("manipulated_media"), v.literal("misinterpreted_satire"), v.literal("missing_important_context"), v.literal("other"), v.literal("outdated_information")])),
  text: v.string(),
  trustworthy_sources: v.boolean(),
});

export type CreateCommunityNotesRequest = {
  readonly info: CreateCommunityNotesInfo;
  readonly post_id: string;
  readonly test_mode: boolean;
};
export const CreateCommunityNotesRequestSchema: v.GenericSchema<unknown, CreateCommunityNotesRequest> = v.looseObject({
  info: v.lazy(() => CreateCommunityNotesInfoSchema),
  post_id: v.string(),
  test_mode: v.boolean(),
});

export type CreateCommunityNotesResponse = {
  readonly data?: CreateCommunityNotesResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const CreateCommunityNotesResponseSchema: v.GenericSchema<unknown, CreateCommunityNotesResponse> = v.looseObject({
  data: v.optional(v.lazy(() => CreateCommunityNotesResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type CreateCommunityNotesResponseData = {
  readonly id: string;
};
export const CreateCommunityNotesResponseDataSchema: v.GenericSchema<unknown, CreateCommunityNotesResponseData> = v.looseObject({
  id: v.string(),
});

export type CreateComplianceJobsRequest = {
  readonly name?: string;
  readonly resumable?: boolean;
  readonly type: "tweets" | "users";
};
export const CreateComplianceJobsRequestSchema: v.GenericSchema<unknown, CreateComplianceJobsRequest> = v.looseObject({
  name: v.optional(v.string()),
  resumable: v.optional(v.boolean()),
  type: v.union([v.literal("tweets"), v.literal("users")]),
});

export type CreateComplianceJobsResponse = {
  readonly data?: ComplianceJob;
  readonly errors?: ReadonlyArray<Problem>;
};
export const CreateComplianceJobsResponseSchema: v.GenericSchema<unknown, CreateComplianceJobsResponse> = v.looseObject({
  data: v.optional(v.lazy(() => ComplianceJobSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type CreateDirectMessagesByConversationIdAttachments = {
  readonly media_id: string;
};
export const CreateDirectMessagesByConversationIdAttachmentsSchema: v.GenericSchema<unknown, CreateDirectMessagesByConversationIdAttachments> = v.looseObject({
  media_id: v.string(),
});

/** At least one of `text`, `attachments` is required. */
export type CreateDirectMessagesByConversationIdRequest = {
  readonly attachments?: ReadonlyArray<CreateDirectMessagesByConversationIdAttachments>;
  readonly text?: string;
};
export const CreateDirectMessagesByConversationIdRequestSchema: v.GenericSchema<unknown, CreateDirectMessagesByConversationIdRequest> = v.looseObject({
  attachments: v.optional(v.array(v.lazy(() => CreateDirectMessagesByConversationIdAttachmentsSchema))),
  text: v.optional(v.string()),
});

export type CreateDirectMessagesByConversationIdResponse = {
  readonly data?: CreateDirectMessagesByConversationIdResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const CreateDirectMessagesByConversationIdResponseSchema: v.GenericSchema<unknown, CreateDirectMessagesByConversationIdResponse> = v.looseObject({
  data: v.optional(v.lazy(() => CreateDirectMessagesByConversationIdResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type CreateDirectMessagesByConversationIdResponseData = {
  readonly dm_conversation_id: string;
  readonly dm_event_id: string;
};
export const CreateDirectMessagesByConversationIdResponseDataSchema: v.GenericSchema<unknown, CreateDirectMessagesByConversationIdResponseData> = v.looseObject({
  dm_conversation_id: v.string(),
  dm_event_id: v.string(),
});

export type CreateDirectMessagesByParticipantIdAttachments = {
  readonly media_id: string;
};
export const CreateDirectMessagesByParticipantIdAttachmentsSchema: v.GenericSchema<unknown, CreateDirectMessagesByParticipantIdAttachments> = v.looseObject({
  media_id: v.string(),
});

/** At least one of `text`, `attachments` is required. */
export type CreateDirectMessagesByParticipantIdRequest = {
  readonly attachments?: ReadonlyArray<CreateDirectMessagesByParticipantIdAttachments>;
  readonly text?: string;
};
export const CreateDirectMessagesByParticipantIdRequestSchema: v.GenericSchema<unknown, CreateDirectMessagesByParticipantIdRequest> = v.looseObject({
  attachments: v.optional(v.array(v.lazy(() => CreateDirectMessagesByParticipantIdAttachmentsSchema))),
  text: v.optional(v.string()),
});

export type CreateDirectMessagesByParticipantIdResponse = {
  readonly data?: CreateDirectMessagesByParticipantIdResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const CreateDirectMessagesByParticipantIdResponseSchema: v.GenericSchema<unknown, CreateDirectMessagesByParticipantIdResponse> = v.looseObject({
  data: v.optional(v.lazy(() => CreateDirectMessagesByParticipantIdResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type CreateDirectMessagesByParticipantIdResponseData = {
  readonly dm_conversation_id: string;
  readonly dm_event_id: string;
};
export const CreateDirectMessagesByParticipantIdResponseDataSchema: v.GenericSchema<unknown, CreateDirectMessagesByParticipantIdResponseData> = v.looseObject({
  dm_conversation_id: v.string(),
  dm_event_id: v.string(),
});

export type CreateDirectMessagesConversationMessage = {
  readonly attachments?: ReadonlyArray<CreateDirectMessagesConversationMessageAttachments>;
  readonly text?: string;
};
export const CreateDirectMessagesConversationMessageSchema: v.GenericSchema<unknown, CreateDirectMessagesConversationMessage> = v.looseObject({
  attachments: v.optional(v.array(v.lazy(() => CreateDirectMessagesConversationMessageAttachmentsSchema))),
  text: v.optional(v.string()),
});

export type CreateDirectMessagesConversationMessageAttachments = {
  readonly media_id: string;
};
export const CreateDirectMessagesConversationMessageAttachmentsSchema: v.GenericSchema<unknown, CreateDirectMessagesConversationMessageAttachments> = v.looseObject({
  media_id: v.string(),
});

export type CreateDirectMessagesConversationRequest = {
  readonly conversation_type: "Group";
  readonly message: CreateDirectMessagesConversationMessage;
  readonly participant_ids: ReadonlyArray<string>;
};
export const CreateDirectMessagesConversationRequestSchema: v.GenericSchema<unknown, CreateDirectMessagesConversationRequest> = v.looseObject({
  conversation_type: v.literal("Group"),
  message: v.lazy(() => CreateDirectMessagesConversationMessageSchema),
  participant_ids: v.array(v.string()),
});

export type CreateDirectMessagesConversationResponse = {
  readonly data?: CreateDirectMessagesConversationResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const CreateDirectMessagesConversationResponseSchema: v.GenericSchema<unknown, CreateDirectMessagesConversationResponse> = v.looseObject({
  data: v.optional(v.lazy(() => CreateDirectMessagesConversationResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type CreateDirectMessagesConversationResponseData = {
  readonly dm_conversation_id: string;
  readonly dm_event_id: string;
};
export const CreateDirectMessagesConversationResponseDataSchema: v.GenericSchema<unknown, CreateDirectMessagesConversationResponseData> = v.looseObject({
  dm_conversation_id: v.string(),
  dm_event_id: v.string(),
});

export type CreateListsRequest = {
  readonly description?: string;
  readonly name: string;
  readonly private?: boolean;
};
export const CreateListsRequestSchema: v.GenericSchema<unknown, CreateListsRequest> = v.looseObject({
  description: v.optional(v.string()),
  name: v.string(),
  private: v.optional(v.boolean()),
});

export type CreateListsResponse = {
  readonly data?: CreateListsResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const CreateListsResponseSchema: v.GenericSchema<unknown, CreateListsResponse> = v.looseObject({
  data: v.optional(v.lazy(() => CreateListsResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type CreateListsResponseData = {
  readonly id: string;
  readonly name: string;
};
export const CreateListsResponseDataSchema: v.GenericSchema<unknown, CreateListsResponseData> = v.looseObject({
  id: v.string(),
  name: v.string(),
});

export type CreateMediaMetadataMetadata = {
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
};
export const CreateMediaMetadataMetadataSchema: v.GenericSchema<unknown, CreateMediaMetadataMetadata> = v.looseObject({
  allow_download_status: v.optional(v.lazy(() => CreateMediaMetadataMetadataAllowDownloadStatusSchema)),
  alt_text: v.optional(v.lazy(() => CreateMediaMetadataMetadataAltTextSchema)),
  audience_policy: v.optional(v.unknown()),
  content_expiration: v.optional(v.lazy(() => CreateMediaMetadataMetadataContentExpirationSchema)),
  domain_restrictions: v.optional(v.lazy(() => CreateMediaMetadataMetadataDomainRestrictionsSchema)),
  found_media_origin: v.optional(v.lazy(() => CreateMediaMetadataMetadataFoundMediaOriginSchema)),
  geo_restrictions: v.optional(v.unknown()),
  management_info: v.optional(v.lazy(() => CreateMediaMetadataMetadataManagementInfoSchema)),
  preview_image: v.optional(v.lazy(() => CreateMediaMetadataMetadataPreviewImageSchema)),
  sensitive_media_warning: v.optional(v.unknown()),
  shared_info: v.optional(v.lazy(() => CreateMediaMetadataMetadataSharedInfoSchema)),
  sticker_info: v.optional(v.lazy(() => CreateMediaMetadataMetadataStickerInfoSchema)),
  upload_source: v.optional(v.lazy(() => CreateMediaMetadataMetadataUploadSourceSchema)),
});

export type CreateMediaMetadataMetadataAllowDownloadStatus = {
  readonly allow_download?: boolean;
};
export const CreateMediaMetadataMetadataAllowDownloadStatusSchema: v.GenericSchema<unknown, CreateMediaMetadataMetadataAllowDownloadStatus> = v.looseObject({
  allow_download: v.optional(v.boolean()),
});

export type CreateMediaMetadataMetadataAltText = {
  readonly text: string;
};
export const CreateMediaMetadataMetadataAltTextSchema: v.GenericSchema<unknown, CreateMediaMetadataMetadataAltText> = v.looseObject({
  text: v.string(),
});

export type CreateMediaMetadataMetadataContentExpiration = {
  readonly timestamp_sec: number;
};
export const CreateMediaMetadataMetadataContentExpirationSchema: v.GenericSchema<unknown, CreateMediaMetadataMetadataContentExpiration> = v.looseObject({
  timestamp_sec: v.number(),
});

export type CreateMediaMetadataMetadataDomainRestrictions = {
  readonly whitelist: ReadonlyArray<string>;
};
export const CreateMediaMetadataMetadataDomainRestrictionsSchema: v.GenericSchema<unknown, CreateMediaMetadataMetadataDomainRestrictions> = v.looseObject({
  whitelist: v.array(v.string()),
});

export type CreateMediaMetadataMetadataFoundMediaOrigin = {
  readonly id: string;
  readonly provider: string;
};
export const CreateMediaMetadataMetadataFoundMediaOriginSchema: v.GenericSchema<unknown, CreateMediaMetadataMetadataFoundMediaOrigin> = v.looseObject({
  id: v.string(),
  provider: v.string(),
});

export type CreateMediaMetadataMetadataManagementInfo = {
  readonly managed: boolean;
};
export const CreateMediaMetadataMetadataManagementInfoSchema: v.GenericSchema<unknown, CreateMediaMetadataMetadataManagementInfo> = v.looseObject({
  managed: v.boolean(),
});

export type CreateMediaMetadataMetadataPreviewImage = {
  readonly media_key: unknown;
};
export const CreateMediaMetadataMetadataPreviewImageSchema: v.GenericSchema<unknown, CreateMediaMetadataMetadataPreviewImage> = v.looseObject({
  media_key: v.unknown(),
});

export type CreateMediaMetadataMetadataSharedInfo = {
  readonly shared: boolean;
};
export const CreateMediaMetadataMetadataSharedInfoSchema: v.GenericSchema<unknown, CreateMediaMetadataMetadataSharedInfo> = v.looseObject({
  shared: v.boolean(),
});

export type CreateMediaMetadataMetadataStickerInfo = {
  readonly stickers: ReadonlyArray<CreateMediaMetadataMetadataStickerInfoStickers>;
};
export const CreateMediaMetadataMetadataStickerInfoSchema: v.GenericSchema<unknown, CreateMediaMetadataMetadataStickerInfo> = v.looseObject({
  stickers: v.array(v.lazy(() => CreateMediaMetadataMetadataStickerInfoStickersSchema)),
});

export type CreateMediaMetadataMetadataStickerInfoStickers = {

};
export const CreateMediaMetadataMetadataStickerInfoStickersSchema: v.GenericSchema<unknown, CreateMediaMetadataMetadataStickerInfoStickers> = v.looseObject({

});

export type CreateMediaMetadataMetadataUploadSource = {
  readonly upload_source: string;
};
export const CreateMediaMetadataMetadataUploadSourceSchema: v.GenericSchema<unknown, CreateMediaMetadataMetadataUploadSource> = v.looseObject({
  upload_source: v.string(),
});

export type CreateMediaMetadataRequest = {
  readonly id: string;
  readonly metadata?: CreateMediaMetadataMetadata;
};
export const CreateMediaMetadataRequestSchema: v.GenericSchema<unknown, CreateMediaMetadataRequest> = v.looseObject({
  id: v.string(),
  metadata: v.optional(v.lazy(() => CreateMediaMetadataMetadataSchema)),
});

export type CreateMediaMetadataResponse = {
  readonly data?: CreateMediaMetadataResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const CreateMediaMetadataResponseSchema: v.GenericSchema<unknown, CreateMediaMetadataResponse> = v.looseObject({
  data: v.optional(v.lazy(() => CreateMediaMetadataResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type CreateMediaMetadataResponseData = {
  readonly associated_metadata?: unknown;
  readonly id: string;
};
export const CreateMediaMetadataResponseDataSchema: v.GenericSchema<unknown, CreateMediaMetadataResponseData> = v.looseObject({
  associated_metadata: v.optional(v.unknown()),
  id: v.string(),
});

export type CreateMediaSubtitlesRequest = {
  readonly id?: string;
  readonly media_category?: "AmplifyVideo" | "TweetVideo";
  readonly subtitles?: CreateMediaSubtitlesSubtitles;
};
export const CreateMediaSubtitlesRequestSchema: v.GenericSchema<unknown, CreateMediaSubtitlesRequest> = v.looseObject({
  id: v.optional(v.string()),
  media_category: v.optional(v.union([v.literal("AmplifyVideo"), v.literal("TweetVideo")])),
  subtitles: v.optional(v.lazy(() => CreateMediaSubtitlesSubtitlesSchema)),
});

export type CreateMediaSubtitlesResponse = {
  readonly data?: CreateMediaSubtitlesResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const CreateMediaSubtitlesResponseSchema: v.GenericSchema<unknown, CreateMediaSubtitlesResponse> = v.looseObject({
  data: v.optional(v.lazy(() => CreateMediaSubtitlesResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type CreateMediaSubtitlesResponseData = {
  readonly associated_subtitles?: unknown;
  readonly id?: string;
  readonly media_category?: string;
};
export const CreateMediaSubtitlesResponseDataSchema: v.GenericSchema<unknown, CreateMediaSubtitlesResponseData> = v.looseObject({
  associated_subtitles: v.optional(v.unknown()),
  id: v.optional(v.string()),
  media_category: v.optional(v.string()),
});

export type CreateMediaSubtitlesSubtitles = {
  readonly display_name?: string;
  readonly id?: string;
  readonly language_code?: string;
};
export const CreateMediaSubtitlesSubtitlesSchema: v.GenericSchema<unknown, CreateMediaSubtitlesSubtitles> = v.looseObject({
  display_name: v.optional(v.string()),
  id: v.optional(v.string()),
  language_code: v.optional(v.string()),
});

export type CreatePostsEditOptions = {
  readonly previous_post_id: string;
};
export const CreatePostsEditOptionsSchema: v.GenericSchema<unknown, CreatePostsEditOptions> = v.looseObject({
  previous_post_id: v.string(),
});

export type CreatePostsGeo = {
  readonly place_id: string;
};
export const CreatePostsGeoSchema: v.GenericSchema<unknown, CreatePostsGeo> = v.looseObject({
  place_id: v.string(),
});

export type CreatePostsMedia = {
  readonly call_to_actions?: CreatePostsMediaCallToActions;
  readonly description?: string;
  readonly embeddable?: boolean;
  readonly media_ids: ReadonlyArray<string>;
  readonly preview_media_id?: string;
  readonly tagged_user_ids?: ReadonlyArray<string>;
  readonly title?: string;
};
export const CreatePostsMediaSchema: v.GenericSchema<unknown, CreatePostsMedia> = v.looseObject({
  call_to_actions: v.optional(v.lazy(() => CreatePostsMediaCallToActionsSchema)),
  description: v.optional(v.string()),
  embeddable: v.optional(v.boolean()),
  media_ids: v.array(v.string()),
  preview_media_id: v.optional(v.string()),
  tagged_user_ids: v.optional(v.array(v.string())),
  title: v.optional(v.string()),
});

export type CreatePostsMediaCallToActions = {
  readonly app_install?: CreatePostsMediaCallToActionsAppInstall;
  readonly visit_site?: CreatePostsMediaCallToActionsVisitSite;
  readonly watch_now?: CreatePostsMediaCallToActionsWatchNow;
};
export const CreatePostsMediaCallToActionsSchema: v.GenericSchema<unknown, CreatePostsMediaCallToActions> = v.looseObject({
  app_install: v.optional(v.lazy(() => CreatePostsMediaCallToActionsAppInstallSchema)),
  visit_site: v.optional(v.lazy(() => CreatePostsMediaCallToActionsVisitSiteSchema)),
  watch_now: v.optional(v.lazy(() => CreatePostsMediaCallToActionsWatchNowSchema)),
});

export type CreatePostsMediaCallToActionsAppInstall = {
  readonly app_store_id?: string;
  readonly ipad_app_store_id?: string;
  readonly play_store_id?: string;
};
export const CreatePostsMediaCallToActionsAppInstallSchema: v.GenericSchema<unknown, CreatePostsMediaCallToActionsAppInstall> = v.looseObject({
  app_store_id: v.optional(v.string()),
  ipad_app_store_id: v.optional(v.string()),
  play_store_id: v.optional(v.string()),
});

export type CreatePostsMediaCallToActionsVisitSite = {
  readonly url: string;
};
export const CreatePostsMediaCallToActionsVisitSiteSchema: v.GenericSchema<unknown, CreatePostsMediaCallToActionsVisitSite> = v.looseObject({
  url: v.string(),
});

export type CreatePostsMediaCallToActionsWatchNow = {
  readonly url: string;
};
export const CreatePostsMediaCallToActionsWatchNowSchema: v.GenericSchema<unknown, CreatePostsMediaCallToActionsWatchNow> = v.looseObject({
  url: v.string(),
});

export type CreatePostsPoll = {
  readonly duration_minutes: number;
  readonly options: ReadonlyArray<string>;
  readonly reply_settings?: "following" | "mentionedUsers" | "subscribers" | "verified";
};
export const CreatePostsPollSchema: v.GenericSchema<unknown, CreatePostsPoll> = v.looseObject({
  duration_minutes: v.pipe(v.number(), v.integer()),
  options: v.array(v.string()),
  reply_settings: v.optional(v.union([v.literal("following"), v.literal("mentionedUsers"), v.literal("subscribers"), v.literal("verified")])),
});

export type CreatePostsReply = {
  readonly auto_populate_reply_metadata?: boolean;
  readonly exclude_reply_user_ids?: ReadonlyArray<string>;
  readonly in_reply_to_tweet_id: string;
};
export const CreatePostsReplySchema: v.GenericSchema<unknown, CreatePostsReply> = v.looseObject({
  auto_populate_reply_metadata: v.optional(v.boolean()),
  exclude_reply_user_ids: v.optional(v.array(v.string())),
  in_reply_to_tweet_id: v.string(),
});

export type CreatePostsRequest = {
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
};
export const CreatePostsRequestSchema: v.GenericSchema<unknown, CreatePostsRequest> = v.looseObject({
  card_uri: v.optional(v.string()),
  community_id: v.optional(v.string()),
  direct_message_deep_link: v.optional(v.string()),
  edit_options: v.optional(v.lazy(() => CreatePostsEditOptionsSchema)),
  for_super_followers_only: v.optional(v.boolean()),
  geo: v.optional(v.lazy(() => CreatePostsGeoSchema)),
  made_with_ai: v.optional(v.boolean()),
  media: v.optional(v.lazy(() => CreatePostsMediaSchema)),
  nullcast: v.optional(v.boolean()),
  paid_partnership: v.optional(v.boolean()),
  poll: v.optional(v.lazy(() => CreatePostsPollSchema)),
  quote_tweet_id: v.optional(v.string()),
  reply: v.optional(v.lazy(() => CreatePostsReplySchema)),
  reply_settings: v.optional(v.union([v.literal("following"), v.literal("mentionedUsers"), v.literal("subscribers"), v.literal("verified")])),
  share_with_followers: v.optional(v.boolean()),
  text: v.optional(v.string()),
});

export type CreatePostsResponse = {
  readonly data?: CreatePostsResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const CreatePostsResponseSchema: v.GenericSchema<unknown, CreatePostsResponse> = v.looseObject({
  data: v.optional(v.lazy(() => CreatePostsResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type CreatePostsResponseData = {
  readonly edit_history_post_ids?: ReadonlyArray<string>;
  readonly id: string;
  readonly text: string;
};
export const CreatePostsResponseDataSchema: v.GenericSchema<unknown, CreatePostsResponseData> = v.looseObject({
  edit_history_post_ids: v.optional(v.array(v.string())),
  id: v.string(),
  text: v.string(),
});

export type CreateScheduledBroadcastRecurrence = {
  readonly frequency: "Daily" | "Weekly";
  readonly repeats: string;
};
export const CreateScheduledBroadcastRecurrenceSchema: v.GenericSchema<unknown, CreateScheduledBroadcastRecurrence> = v.looseObject({
  frequency: v.union([v.literal("Daily"), v.literal("Weekly")]),
  repeats: v.string(),
});

export type CreateScheduledBroadcastRequest = {
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
};
export const CreateScheduledBroadcastRequestSchema: v.GenericSchema<unknown, CreateScheduledBroadcastRequest> = v.looseObject({
  available_for_replay: v.optional(v.boolean()),
  chat_option: v.optional(v.string()),
  description: v.optional(v.string()),
  is_locked: v.optional(v.boolean()),
  locale: v.optional(v.string()),
  manual_publish: v.optional(v.boolean()),
  recurrence: v.optional(v.lazy(() => CreateScheduledBroadcastRecurrenceSchema)),
  scheduled_end_ms: v.string(),
  scheduled_start_ms: v.string(),
  source_id: v.string(),
  telecast_id: v.optional(v.string()),
  thumbnail_media_id: v.optional(v.string()),
  title: v.optional(v.string()),
});

export type CreateScheduledBroadcastResponse = {
  readonly data?: CreateScheduledBroadcastResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const CreateScheduledBroadcastResponseSchema: v.GenericSchema<unknown, CreateScheduledBroadcastResponse> = v.looseObject({
  data: v.optional(v.lazy(() => CreateScheduledBroadcastResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type CreateScheduledBroadcastResponseData = {
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
};
export const CreateScheduledBroadcastResponseDataSchema: v.GenericSchema<unknown, CreateScheduledBroadcastResponseData> = v.looseObject({
  available_for_replay: v.optional(v.boolean()),
  broadcast_id: v.optional(v.string()),
  chat_option: v.optional(v.string()),
  description: v.optional(v.string()),
  locale: v.optional(v.string()),
  manual_publish: v.optional(v.boolean()),
  recurring_schedule_id: v.optional(v.string()),
  scheduled_broadcast_id: v.optional(v.string()),
  scheduled_end_ms: v.optional(v.string()),
  scheduled_start_ms: v.optional(v.string()),
  source_id: v.optional(v.string()),
  state: v.optional(v.string()),
  telecast_id: v.optional(v.string()),
  thumbnail_media_id: v.optional(v.string()),
  title: v.optional(v.string()),
});

export type CreateUsersBookmarkFolderRequest = {
  readonly name: string;
};
export const CreateUsersBookmarkFolderRequestSchema: v.GenericSchema<unknown, CreateUsersBookmarkFolderRequest> = v.looseObject({
  name: v.string(),
});

export type CreateUsersBookmarkFolderResponse = {
  readonly data?: CreateUsersBookmarkFolderResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const CreateUsersBookmarkFolderResponseSchema: v.GenericSchema<unknown, CreateUsersBookmarkFolderResponse> = v.looseObject({
  data: v.optional(v.lazy(() => CreateUsersBookmarkFolderResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type CreateUsersBookmarkFolderResponseData = {
  readonly id: string;
  readonly name: string;
};
export const CreateUsersBookmarkFolderResponseDataSchema: v.GenericSchema<unknown, CreateUsersBookmarkFolderResponseData> = v.looseObject({
  id: v.string(),
  name: v.string(),
});

export type CreateUsersBookmarkRequest = {
  readonly folder_id?: string;
  readonly tweet_id: string;
};
export const CreateUsersBookmarkRequestSchema: v.GenericSchema<unknown, CreateUsersBookmarkRequest> = v.looseObject({
  folder_id: v.optional(v.string()),
  tweet_id: v.string(),
});

export type CreateUsersBookmarkResponse = {
  readonly data?: CreateUsersBookmarkResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const CreateUsersBookmarkResponseSchema: v.GenericSchema<unknown, CreateUsersBookmarkResponse> = v.looseObject({
  data: v.optional(v.lazy(() => CreateUsersBookmarkResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type CreateUsersBookmarkResponseData = {
  readonly bookmarked: boolean;
};
export const CreateUsersBookmarkResponseDataSchema: v.GenericSchema<unknown, CreateUsersBookmarkResponseData> = v.looseObject({
  bookmarked: v.boolean(),
});

export type CreateWebhookReplayJobRequest = {
  readonly from_date: string;
  readonly to_date: string;
  readonly webhook_id: string;
};
export const CreateWebhookReplayJobRequestSchema: v.GenericSchema<unknown, CreateWebhookReplayJobRequest> = v.looseObject({
  from_date: v.string(),
  to_date: v.string(),
  webhook_id: v.string(),
});

export type CreateWebhookReplayJobResponse = {
  readonly data?: CreateWebhookReplayJobResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const CreateWebhookReplayJobResponseSchema: v.GenericSchema<unknown, CreateWebhookReplayJobResponse> = v.looseObject({
  data: v.optional(v.lazy(() => CreateWebhookReplayJobResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type CreateWebhookReplayJobResponseData = {
  readonly created_at: string;
  readonly job_id: string;
};
export const CreateWebhookReplayJobResponseDataSchema: v.GenericSchema<unknown, CreateWebhookReplayJobResponseData> = v.looseObject({
  created_at: v.string(),
  job_id: v.string(),
});

export type CreateWebhooksRequest = {
  readonly url: string;
};
export const CreateWebhooksRequestSchema: v.GenericSchema<unknown, CreateWebhooksRequest> = v.looseObject({
  url: v.string(),
});

export type CreateWebhooksResponse = {
  readonly data?: CreateWebhooksResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const CreateWebhooksResponseSchema: v.GenericSchema<unknown, CreateWebhooksResponse> = v.looseObject({
  data: v.optional(v.lazy(() => CreateWebhooksResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type CreateWebhooksResponseData = {
  readonly created_at: string;
  readonly id: string;
  readonly url: string;
  readonly valid: boolean;
};
export const CreateWebhooksResponseDataSchema: v.GenericSchema<unknown, CreateWebhooksResponseData> = v.looseObject({
  created_at: v.string(),
  id: v.string(),
  url: v.string(),
  valid: v.boolean(),
});

export type CreateWebhooksStreamLinkResponse = {
  readonly data?: CreateWebhooksStreamLinkResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const CreateWebhooksStreamLinkResponseSchema: v.GenericSchema<unknown, CreateWebhooksStreamLinkResponse> = v.looseObject({
  data: v.optional(v.lazy(() => CreateWebhooksStreamLinkResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type CreateWebhooksStreamLinkResponseData = {
  readonly provisioned: boolean;
};
export const CreateWebhooksStreamLinkResponseDataSchema: v.GenericSchema<unknown, CreateWebhooksStreamLinkResponseData> = v.looseObject({
  provisioned: v.boolean(),
});

export type DeleteAccountActivitySubscriptionResponse = {
  readonly data?: DeleteAccountActivitySubscriptionResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const DeleteAccountActivitySubscriptionResponseSchema: v.GenericSchema<unknown, DeleteAccountActivitySubscriptionResponse> = v.looseObject({
  data: v.optional(v.lazy(() => DeleteAccountActivitySubscriptionResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type DeleteAccountActivitySubscriptionResponseData = {
  readonly subscribed: boolean;
};
export const DeleteAccountActivitySubscriptionResponseDataSchema: v.GenericSchema<unknown, DeleteAccountActivitySubscriptionResponseData> = v.looseObject({
  subscribed: v.boolean(),
});

export type DeleteActivitySubscriptionResponse = {
  readonly data?: DeleteActivitySubscriptionResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const DeleteActivitySubscriptionResponseSchema: v.GenericSchema<unknown, DeleteActivitySubscriptionResponse> = v.looseObject({
  data: v.optional(v.lazy(() => DeleteActivitySubscriptionResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type DeleteActivitySubscriptionResponseData = {
  readonly deleted: boolean;
};
export const DeleteActivitySubscriptionResponseDataSchema: v.GenericSchema<unknown, DeleteActivitySubscriptionResponseData> = v.looseObject({
  deleted: v.boolean(),
});

export type DeleteActivitySubscriptionsByIdsResponse = {
  readonly data?: ReadonlyArray<unknown>;
  readonly errors?: ReadonlyArray<unknown>;
  readonly meta?: unknown;
};
export const DeleteActivitySubscriptionsByIdsResponseSchema: v.GenericSchema<unknown, DeleteActivitySubscriptionsByIdsResponse> = v.looseObject({
  data: v.optional(v.array(v.unknown())),
  errors: v.optional(v.array(v.unknown())),
  meta: v.optional(v.unknown()),
});

export type DeleteAllConnectionsResponse = {
  readonly data?: DeleteAllConnectionsResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const DeleteAllConnectionsResponseSchema: v.GenericSchema<unknown, DeleteAllConnectionsResponse> = v.looseObject({
  data: v.optional(v.lazy(() => DeleteAllConnectionsResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type DeleteAllConnectionsResponseData = {
  readonly failed_kills: number;
  readonly results?: ReadonlyArray<DeleteAllConnectionsResponseDataResults>;
  readonly successful_kills: number;
};
export const DeleteAllConnectionsResponseDataSchema: v.GenericSchema<unknown, DeleteAllConnectionsResponseData> = v.looseObject({
  failed_kills: v.pipe(v.number(), v.integer()),
  results: v.optional(v.array(v.lazy(() => DeleteAllConnectionsResponseDataResultsSchema))),
  successful_kills: v.pipe(v.number(), v.integer()),
});

export type DeleteAllConnectionsResponseDataResults = {
  readonly error_message?: string;
  readonly success: boolean;
  readonly uuid: string;
};
export const DeleteAllConnectionsResponseDataResultsSchema: v.GenericSchema<unknown, DeleteAllConnectionsResponseDataResults> = v.looseObject({
  error_message: v.optional(v.string()),
  success: v.boolean(),
  uuid: v.string(),
});

export type DeleteBroadcastChatMessageResponse = {
  readonly data?: DeleteBroadcastChatMessageResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const DeleteBroadcastChatMessageResponseSchema: v.GenericSchema<unknown, DeleteBroadcastChatMessageResponse> = v.looseObject({
  data: v.optional(v.lazy(() => DeleteBroadcastChatMessageResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type DeleteBroadcastChatMessageResponseData = {
  readonly deleted: boolean;
};
export const DeleteBroadcastChatMessageResponseDataSchema: v.GenericSchema<unknown, DeleteBroadcastChatMessageResponseData> = v.looseObject({
  deleted: v.boolean(),
});

export type DeleteChatMessagesActionSignatures = {
  readonly encoded_message_event_detail: string;
  readonly message_event_signature: DeleteChatMessagesActionSignaturesMessageEventSignature;
  readonly message_id: string;
  readonly signature_payload?: string;
};
export const DeleteChatMessagesActionSignaturesSchema: v.GenericSchema<unknown, DeleteChatMessagesActionSignatures> = v.looseObject({
  encoded_message_event_detail: v.string(),
  message_event_signature: v.lazy(() => DeleteChatMessagesActionSignaturesMessageEventSignatureSchema),
  message_id: v.string(),
  signature_payload: v.optional(v.string()),
});

export type DeleteChatMessagesActionSignaturesMessageEventSignature = {
  readonly message_signing_key_info_list?: ReadonlyArray<DeleteChatMessagesActionSignaturesMessageEventSignatureMessageSigningKeyInfoList>;
  readonly public_key_version: string;
  readonly signature: string;
  readonly signature_version: string;
  readonly signing_public_key?: string;
};
export const DeleteChatMessagesActionSignaturesMessageEventSignatureSchema: v.GenericSchema<unknown, DeleteChatMessagesActionSignaturesMessageEventSignature> = v.looseObject({
  message_signing_key_info_list: v.optional(v.array(v.lazy(() => DeleteChatMessagesActionSignaturesMessageEventSignatureMessageSigningKeyInfoListSchema))),
  public_key_version: v.string(),
  signature: v.string(),
  signature_version: v.string(),
  signing_public_key: v.optional(v.string()),
});

export type DeleteChatMessagesActionSignaturesMessageEventSignatureMessageSigningKeyInfoList = {
  readonly member_id?: string;
  readonly public_key_version?: string;
  readonly signing_public_key?: string;
};
export const DeleteChatMessagesActionSignaturesMessageEventSignatureMessageSigningKeyInfoListSchema: v.GenericSchema<unknown, DeleteChatMessagesActionSignaturesMessageEventSignatureMessageSigningKeyInfoList> = v.looseObject({
  member_id: v.optional(v.string()),
  public_key_version: v.optional(v.string()),
  signing_public_key: v.optional(v.string()),
});

export type DeleteChatMessagesRequest = {
  readonly action_signatures: ReadonlyArray<DeleteChatMessagesActionSignatures>;
  readonly delete_message_action: "delete_for_all" | "delete_for_self";
  readonly media_hash_keys?: ReadonlyArray<string>;
  readonly sequence_ids: ReadonlyArray<string>;
};
export const DeleteChatMessagesRequestSchema: v.GenericSchema<unknown, DeleteChatMessagesRequest> = v.looseObject({
  action_signatures: v.array(v.lazy(() => DeleteChatMessagesActionSignaturesSchema)),
  delete_message_action: v.union([v.literal("delete_for_all"), v.literal("delete_for_self")]),
  media_hash_keys: v.optional(v.array(v.string())),
  sequence_ids: v.array(v.string()),
});

export type DeleteChatMessagesResponse = {
  readonly data?: DeleteChatMessagesResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const DeleteChatMessagesResponseSchema: v.GenericSchema<unknown, DeleteChatMessagesResponse> = v.looseObject({
  data: v.optional(v.lazy(() => DeleteChatMessagesResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type DeleteChatMessagesResponseData = {
  readonly deleted: boolean;
};
export const DeleteChatMessagesResponseDataSchema: v.GenericSchema<unknown, DeleteChatMessagesResponseData> = v.looseObject({
  deleted: v.boolean(),
});

export type DeleteCommunityNotesResponse = {
  readonly data?: DeleteCommunityNotesResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const DeleteCommunityNotesResponseSchema: v.GenericSchema<unknown, DeleteCommunityNotesResponse> = v.looseObject({
  data: v.optional(v.lazy(() => DeleteCommunityNotesResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type DeleteCommunityNotesResponseData = {
  readonly deleted: boolean;
};
export const DeleteCommunityNotesResponseDataSchema: v.GenericSchema<unknown, DeleteCommunityNotesResponseData> = v.looseObject({
  deleted: v.boolean(),
});

export type DeleteConnectionsByEndpointResponse = {
  readonly data?: DeleteConnectionsByEndpointResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const DeleteConnectionsByEndpointResponseSchema: v.GenericSchema<unknown, DeleteConnectionsByEndpointResponse> = v.looseObject({
  data: v.optional(v.lazy(() => DeleteConnectionsByEndpointResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type DeleteConnectionsByEndpointResponseData = {
  readonly failed_kills: number;
  readonly results?: ReadonlyArray<DeleteConnectionsByEndpointResponseDataResults>;
  readonly successful_kills: number;
};
export const DeleteConnectionsByEndpointResponseDataSchema: v.GenericSchema<unknown, DeleteConnectionsByEndpointResponseData> = v.looseObject({
  failed_kills: v.pipe(v.number(), v.integer()),
  results: v.optional(v.array(v.lazy(() => DeleteConnectionsByEndpointResponseDataResultsSchema))),
  successful_kills: v.pipe(v.number(), v.integer()),
});

export type DeleteConnectionsByEndpointResponseDataResults = {
  readonly error_message?: string;
  readonly success: boolean;
  readonly uuid: string;
};
export const DeleteConnectionsByEndpointResponseDataResultsSchema: v.GenericSchema<unknown, DeleteConnectionsByEndpointResponseDataResults> = v.looseObject({
  error_message: v.optional(v.string()),
  success: v.boolean(),
  uuid: v.string(),
});

export type DeleteConnectionsByUuidsRequest = {
  readonly uuids: ReadonlyArray<string>;
};
export const DeleteConnectionsByUuidsRequestSchema: v.GenericSchema<unknown, DeleteConnectionsByUuidsRequest> = v.looseObject({
  uuids: v.array(v.string()),
});

export type DeleteConnectionsByUuidsResponse = {
  readonly data?: DeleteConnectionsByUuidsResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const DeleteConnectionsByUuidsResponseSchema: v.GenericSchema<unknown, DeleteConnectionsByUuidsResponse> = v.looseObject({
  data: v.optional(v.lazy(() => DeleteConnectionsByUuidsResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type DeleteConnectionsByUuidsResponseData = {
  readonly failed_kills: number;
  readonly results?: ReadonlyArray<DeleteConnectionsByUuidsResponseDataResults>;
  readonly successful_kills: number;
};
export const DeleteConnectionsByUuidsResponseDataSchema: v.GenericSchema<unknown, DeleteConnectionsByUuidsResponseData> = v.looseObject({
  failed_kills: v.pipe(v.number(), v.integer()),
  results: v.optional(v.array(v.lazy(() => DeleteConnectionsByUuidsResponseDataResultsSchema))),
  successful_kills: v.pipe(v.number(), v.integer()),
});

export type DeleteConnectionsByUuidsResponseDataResults = {
  readonly error_message?: string;
  readonly success: boolean;
  readonly uuid: string;
};
export const DeleteConnectionsByUuidsResponseDataResultsSchema: v.GenericSchema<unknown, DeleteConnectionsByUuidsResponseDataResults> = v.looseObject({
  error_message: v.optional(v.string()),
  success: v.boolean(),
  uuid: v.string(),
});

export type DeleteDirectMessagesEventsResponse = {
  readonly data?: DeleteDirectMessagesEventsResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const DeleteDirectMessagesEventsResponseSchema: v.GenericSchema<unknown, DeleteDirectMessagesEventsResponse> = v.looseObject({
  data: v.optional(v.lazy(() => DeleteDirectMessagesEventsResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type DeleteDirectMessagesEventsResponseData = {
  readonly deleted: boolean;
};
export const DeleteDirectMessagesEventsResponseDataSchema: v.GenericSchema<unknown, DeleteDirectMessagesEventsResponseData> = v.looseObject({
  deleted: v.boolean(),
});

export type DeleteListsResponse = {
  readonly data?: DeleteListsResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const DeleteListsResponseSchema: v.GenericSchema<unknown, DeleteListsResponse> = v.looseObject({
  data: v.optional(v.lazy(() => DeleteListsResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type DeleteListsResponseData = {
  readonly deleted: boolean;
};
export const DeleteListsResponseDataSchema: v.GenericSchema<unknown, DeleteListsResponseData> = v.looseObject({
  deleted: v.boolean(),
});

export type DeleteMediaSubtitlesRequest = {
  readonly id: string;
  readonly language_code: string;
  readonly media_category: string;
};
export const DeleteMediaSubtitlesRequestSchema: v.GenericSchema<unknown, DeleteMediaSubtitlesRequest> = v.looseObject({
  id: v.string(),
  language_code: v.string(),
  media_category: v.string(),
});

export type DeleteMediaSubtitlesResponse = {
  readonly data?: DeleteMediaSubtitlesResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const DeleteMediaSubtitlesResponseSchema: v.GenericSchema<unknown, DeleteMediaSubtitlesResponse> = v.looseObject({
  data: v.optional(v.lazy(() => DeleteMediaSubtitlesResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type DeleteMediaSubtitlesResponseData = {
  readonly deleted: boolean;
};
export const DeleteMediaSubtitlesResponseDataSchema: v.GenericSchema<unknown, DeleteMediaSubtitlesResponseData> = v.looseObject({
  deleted: v.boolean(),
});

export type DeletePostsResponse = {
  readonly data?: DeletePostsResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const DeletePostsResponseSchema: v.GenericSchema<unknown, DeletePostsResponse> = v.looseObject({
  data: v.optional(v.lazy(() => DeletePostsResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type DeletePostsResponseData = {
  readonly deleted: boolean;
};
export const DeletePostsResponseDataSchema: v.GenericSchema<unknown, DeletePostsResponseData> = v.looseObject({
  deleted: v.boolean(),
});

export type DeleteScheduledBroadcastResponse = {
  readonly data?: DeleteScheduledBroadcastResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const DeleteScheduledBroadcastResponseSchema: v.GenericSchema<unknown, DeleteScheduledBroadcastResponse> = v.looseObject({
  data: v.optional(v.lazy(() => DeleteScheduledBroadcastResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type DeleteScheduledBroadcastResponseData = {
  readonly deleted: boolean;
};
export const DeleteScheduledBroadcastResponseDataSchema: v.GenericSchema<unknown, DeleteScheduledBroadcastResponseData> = v.looseObject({
  deleted: v.boolean(),
});

export type DeleteUsersBookmarkResponse = {
  readonly data?: DeleteUsersBookmarkResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const DeleteUsersBookmarkResponseSchema: v.GenericSchema<unknown, DeleteUsersBookmarkResponse> = v.looseObject({
  data: v.optional(v.lazy(() => DeleteUsersBookmarkResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type DeleteUsersBookmarkResponseData = {
  readonly bookmarked: boolean;
};
export const DeleteUsersBookmarkResponseDataSchema: v.GenericSchema<unknown, DeleteUsersBookmarkResponseData> = v.looseObject({
  bookmarked: v.boolean(),
});

export type DeleteWebhooksResponse = {
  readonly data?: DeleteWebhooksResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const DeleteWebhooksResponseSchema: v.GenericSchema<unknown, DeleteWebhooksResponse> = v.looseObject({
  data: v.optional(v.lazy(() => DeleteWebhooksResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type DeleteWebhooksResponseData = {
  readonly deleted: boolean;
};
export const DeleteWebhooksResponseDataSchema: v.GenericSchema<unknown, DeleteWebhooksResponseData> = v.looseObject({
  deleted: v.boolean(),
});

export type DeleteWebhooksStreamLinkResponse = {
  readonly data?: DeleteWebhooksStreamLinkResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const DeleteWebhooksStreamLinkResponseSchema: v.GenericSchema<unknown, DeleteWebhooksStreamLinkResponse> = v.looseObject({
  data: v.optional(v.lazy(() => DeleteWebhooksStreamLinkResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type DeleteWebhooksStreamLinkResponseData = {
  readonly deleted: boolean;
};
export const DeleteWebhooksStreamLinkResponseDataSchema: v.GenericSchema<unknown, DeleteWebhooksStreamLinkResponseData> = v.looseObject({
  deleted: v.boolean(),
});

export type DisallowedResourceProblem = {
  readonly detail: string;
  readonly resource_id?: string;
  readonly resource_type?: string;
  readonly section?: string;
  readonly status?: number;
  readonly title: string;
  readonly type: "https://api.x.com/2/problems/disallowed-resource";
};
export const DisallowedResourceProblemSchema: v.GenericSchema<unknown, DisallowedResourceProblem> = v.looseObject({
  detail: v.string(),
  resource_id: v.optional(v.string()),
  resource_type: v.optional(v.string()),
  section: v.optional(v.string()),
  status: v.optional(v.pipe(v.number(), v.integer())),
  title: v.string(),
  type: v.literal("https://api.x.com/2/problems/disallowed-resource"),
});

export type DmEvent = {
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
};
export const DmEventSchema: v.GenericSchema<unknown, DmEvent> = v.looseObject({
  attachments: v.optional(v.lazy(() => DmEventAttachmentsSchema)),
  created_at: v.optional(v.pipe(v.string(), v.isoTimestamp())),
  dm_conversation_id: v.optional(v.string()),
  entities: v.optional(v.lazy(() => DmEventEntitiesSchema)),
  event_type: v.optional(v.string()),
  id: v.optional(v.string()),
  participant_ids: v.optional(v.array(v.string())),
  referenced_posts: v.optional(v.lazy(() => DmEventReferencedPostsSchema)),
  sender_id: v.optional(v.string()),
  text: v.optional(v.string()),
});

/** Media and card attachments present in this Direct Message event. */
export type DmEventAttachments = {
  readonly card_ids?: ReadonlyArray<string> | null;
  readonly media_keys?: ReadonlyArray<string> | null;
};
export const DmEventAttachmentsSchema: v.GenericSchema<unknown, DmEventAttachments> = v.looseObject({
  card_ids: v.optional(v.nullable(v.array(v.string()))),
  media_keys: v.optional(v.nullable(v.array(v.string()))),
});

/** A list of metadata entities (hashtags, cashtags, mentions, URLs) found in the Direct Message text. */
export type DmEventEntities = {
  readonly cashtags?: ReadonlyArray<unknown> | null;
  readonly hashtags?: ReadonlyArray<unknown> | null;
  readonly mentions?: ReadonlyArray<unknown> | null;
  readonly urls?: ReadonlyArray<unknown> | null;
};
export const DmEventEntitiesSchema: v.GenericSchema<unknown, DmEventEntities> = v.looseObject({
  cashtags: v.optional(v.nullable(v.array(v.unknown()))),
  hashtags: v.optional(v.nullable(v.array(v.unknown()))),
  mentions: v.optional(v.nullable(v.array(v.unknown()))),
  urls: v.optional(v.nullable(v.array(v.unknown()))),
});

export type DmEventReferencedPosts = ReadonlyArray<unknown>;
export const DmEventReferencedPostsSchema: v.GenericSchema<unknown, DmEventReferencedPosts> = v.array(v.unknown());

export type Error = {
  readonly code: number;
  readonly message: string;
};
export const ErrorSchema: v.GenericSchema<unknown, Error> = v.looseObject({
  code: v.pipe(v.number(), v.integer()),
  message: v.string(),
});

export type EvaluateCommunityNotesRequest = {
  readonly note_text: string;
  readonly post_id: string;
};
export const EvaluateCommunityNotesRequestSchema: v.GenericSchema<unknown, EvaluateCommunityNotesRequest> = v.looseObject({
  note_text: v.string(),
  post_id: v.string(),
});

export type EvaluateCommunityNotesResponse = {
  readonly data?: EvaluateCommunityNotesResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const EvaluateCommunityNotesResponseSchema: v.GenericSchema<unknown, EvaluateCommunityNotesResponse> = v.looseObject({
  data: v.optional(v.lazy(() => EvaluateCommunityNotesResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type EvaluateCommunityNotesResponseData = {
  readonly claim_opinion_score?: number;
};
export const EvaluateCommunityNotesResponseDataSchema: v.GenericSchema<unknown, EvaluateCommunityNotesResponseData> = v.looseObject({
  claim_opinion_score: v.optional(v.number()),
});

export type Expansions = {
  readonly media?: ReadonlyArray<Media>;
  readonly places?: ReadonlyArray<Place>;
  readonly polls?: ReadonlyArray<Poll>;
  readonly posts?: ReadonlyArray<Post>;
  readonly topics?: ReadonlyArray<Topic>;
  readonly users?: ReadonlyArray<User>;
};
export const ExpansionsSchema: v.GenericSchema<unknown, Expansions> = v.looseObject({
  media: v.optional(v.array(v.lazy(() => MediaSchema))),
  places: v.optional(v.array(v.lazy(() => PlaceSchema))),
  polls: v.optional(v.array(v.lazy(() => PollSchema))),
  posts: v.optional(v.array(v.lazy(() => PostSchema))),
  topics: v.optional(v.array(v.lazy(() => TopicSchema))),
  users: v.optional(v.array(v.lazy(() => UserSchema))),
});

export type FieldHydrationFailureProblem = {
  readonly detail: string;
  readonly field: string;
  readonly resource_type?: string;
  readonly section?: string;
  readonly status?: number;
  readonly title: string;
  readonly type: "https://api.x.com/2/problems/field-hydration-failure";
};
export const FieldHydrationFailureProblemSchema: v.GenericSchema<unknown, FieldHydrationFailureProblem> = v.looseObject({
  detail: v.string(),
  field: v.string(),
  resource_type: v.optional(v.string()),
  section: v.optional(v.string()),
  status: v.optional(v.pipe(v.number(), v.integer())),
  title: v.string(),
  type: v.literal("https://api.x.com/2/problems/field-hydration-failure"),
});

export type FieldUnauthorizedProblem = {
  readonly detail: string;
  readonly field: string;
  readonly resource_type?: string;
  readonly section?: string;
  readonly status?: number;
  readonly title: string;
  readonly type: "https://api.x.com/2/problems/field-unauthorized";
};
export const FieldUnauthorizedProblemSchema: v.GenericSchema<unknown, FieldUnauthorizedProblem> = v.looseObject({
  detail: v.string(),
  field: v.string(),
  resource_type: v.optional(v.string()),
  section: v.optional(v.string()),
  status: v.optional(v.pipe(v.number(), v.integer())),
  title: v.string(),
  type: v.literal("https://api.x.com/2/problems/field-unauthorized"),
});

export type FinalizeMediaUploadResponse = {
  readonly data?: FinalizeMediaUploadResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const FinalizeMediaUploadResponseSchema: v.GenericSchema<unknown, FinalizeMediaUploadResponse> = v.looseObject({
  data: v.optional(v.lazy(() => FinalizeMediaUploadResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type FinalizeMediaUploadResponseData = {
  readonly expires_after_secs?: number;
  readonly id: string;
  readonly image?: FinalizeMediaUploadResponseDataImage;
  readonly media_key?: string;
  readonly processing_info?: FinalizeMediaUploadResponseDataProcessingInfo;
  readonly size?: number;
  readonly video?: FinalizeMediaUploadResponseDataVideo;
};
export const FinalizeMediaUploadResponseDataSchema: v.GenericSchema<unknown, FinalizeMediaUploadResponseData> = v.looseObject({
  expires_after_secs: v.optional(v.pipe(v.number(), v.integer())),
  id: v.string(),
  image: v.optional(v.lazy(() => FinalizeMediaUploadResponseDataImageSchema)),
  media_key: v.optional(v.string()),
  processing_info: v.optional(v.lazy(() => FinalizeMediaUploadResponseDataProcessingInfoSchema)),
  size: v.optional(v.pipe(v.number(), v.integer())),
  video: v.optional(v.lazy(() => FinalizeMediaUploadResponseDataVideoSchema)),
});

export type FinalizeMediaUploadResponseDataImage = {
  readonly h?: number;
  readonly image_type?: string;
  readonly w?: number;
};
export const FinalizeMediaUploadResponseDataImageSchema: v.GenericSchema<unknown, FinalizeMediaUploadResponseDataImage> = v.looseObject({
  h: v.optional(v.pipe(v.number(), v.integer())),
  image_type: v.optional(v.string()),
  w: v.optional(v.pipe(v.number(), v.integer())),
});

export type FinalizeMediaUploadResponseDataProcessingInfo = {
  readonly check_after_secs?: number;
  readonly progress_percent?: number;
  readonly state?: string;
};
export const FinalizeMediaUploadResponseDataProcessingInfoSchema: v.GenericSchema<unknown, FinalizeMediaUploadResponseDataProcessingInfo> = v.looseObject({
  check_after_secs: v.optional(v.pipe(v.number(), v.integer())),
  progress_percent: v.optional(v.pipe(v.number(), v.integer())),
  state: v.optional(v.string()),
});

export type FinalizeMediaUploadResponseDataVideo = {
  readonly video_type?: string;
};
export const FinalizeMediaUploadResponseDataVideoSchema: v.GenericSchema<unknown, FinalizeMediaUploadResponseDataVideo> = v.looseObject({
  video_type: v.optional(v.string()),
});

export type FollowActivityResponsePayload = {
  readonly source?: User;
  readonly target?: User;
};
export const FollowActivityResponsePayloadSchema: v.GenericSchema<unknown, FollowActivityResponsePayload> = v.looseObject({
  source: v.optional(v.lazy(() => UserSchema)),
  target: v.optional(v.lazy(() => UserSchema)),
});

export type FollowListRequest = {
  readonly list_id: string;
};
export const FollowListRequestSchema: v.GenericSchema<unknown, FollowListRequest> = v.looseObject({
  list_id: v.string(),
});

export type FollowListResponse = {
  readonly data?: FollowListResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const FollowListResponseSchema: v.GenericSchema<unknown, FollowListResponse> = v.looseObject({
  data: v.optional(v.lazy(() => FollowListResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type FollowListResponseData = {
  readonly following: boolean;
};
export const FollowListResponseDataSchema: v.GenericSchema<unknown, FollowListResponseData> = v.looseObject({
  following: v.boolean(),
});

export type FollowUserRequest = {
  readonly target_user_id: string;
};
export const FollowUserRequestSchema: v.GenericSchema<unknown, FollowUserRequest> = v.looseObject({
  target_user_id: v.string(),
});

export type FollowUserResponse = {
  readonly data?: FollowUserResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const FollowUserResponseSchema: v.GenericSchema<unknown, FollowUserResponse> = v.looseObject({
  data: v.optional(v.lazy(() => FollowUserResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type FollowUserResponseData = {
  readonly following: boolean;
  readonly pending_follow: boolean;
};
export const FollowUserResponseDataSchema: v.GenericSchema<unknown, FollowUserResponseData> = v.looseObject({
  following: v.boolean(),
  pending_follow: v.boolean(),
});

export type GetAccountActivitySubscriptionCountResponse = {
  readonly data?: GetAccountActivitySubscriptionCountResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const GetAccountActivitySubscriptionCountResponseSchema: v.GenericSchema<unknown, GetAccountActivitySubscriptionCountResponse> = v.looseObject({
  data: v.optional(v.lazy(() => GetAccountActivitySubscriptionCountResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type GetAccountActivitySubscriptionCountResponseData = {
  readonly account_name?: string;
  readonly provisioned_count?: string;
  readonly subscriptions_count_all?: string;
  readonly subscriptions_count_direct_messages?: string;
};
export const GetAccountActivitySubscriptionCountResponseDataSchema: v.GenericSchema<unknown, GetAccountActivitySubscriptionCountResponseData> = v.looseObject({
  account_name: v.optional(v.string()),
  provisioned_count: v.optional(v.string()),
  subscriptions_count_all: v.optional(v.string()),
  subscriptions_count_direct_messages: v.optional(v.string()),
});

export type GetAccountActivitySubscriptionsResponse = {
  readonly data?: GetAccountActivitySubscriptionsResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const GetAccountActivitySubscriptionsResponseSchema: v.GenericSchema<unknown, GetAccountActivitySubscriptionsResponse> = v.looseObject({
  data: v.optional(v.lazy(() => GetAccountActivitySubscriptionsResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type GetAccountActivitySubscriptionsResponseData = {
  readonly application_id?: string;
  readonly subscriptions?: ReadonlyArray<GetAccountActivitySubscriptionsResponseDataSubscriptions>;
  readonly webhook_id?: string;
  readonly webhook_url?: string;
};
export const GetAccountActivitySubscriptionsResponseDataSchema: v.GenericSchema<unknown, GetAccountActivitySubscriptionsResponseData> = v.looseObject({
  application_id: v.optional(v.string()),
  subscriptions: v.optional(v.array(v.lazy(() => GetAccountActivitySubscriptionsResponseDataSubscriptionsSchema))),
  webhook_id: v.optional(v.string()),
  webhook_url: v.optional(v.string()),
});

export type GetAccountActivitySubscriptionsResponseDataSubscriptions = {
  readonly user_id?: string;
};
export const GetAccountActivitySubscriptionsResponseDataSubscriptionsSchema: v.GenericSchema<unknown, GetAccountActivitySubscriptionsResponseDataSubscriptions> = v.looseObject({
  user_id: v.optional(v.string()),
});

export type GetActivitySubscriptionsResponse = {
  readonly data?: ReadonlyArray<GetActivitySubscriptionsResponseData>;
  readonly errors?: ReadonlyArray<Problem>;
};
export const GetActivitySubscriptionsResponseSchema: v.GenericSchema<unknown, GetActivitySubscriptionsResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => GetActivitySubscriptionsResponseDataSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type GetActivitySubscriptionsResponseData = {
  readonly created_at?: string;
  readonly event_type?: string;
  readonly filter?: GetActivitySubscriptionsResponseDataFilter;
  readonly subscription_id?: string;
  readonly tag?: string;
  readonly updated_at?: string;
  readonly webhook_id?: string;
};
export const GetActivitySubscriptionsResponseDataSchema: v.GenericSchema<unknown, GetActivitySubscriptionsResponseData> = v.looseObject({
  created_at: v.optional(v.string()),
  event_type: v.optional(v.string()),
  filter: v.optional(v.lazy(() => GetActivitySubscriptionsResponseDataFilterSchema)),
  subscription_id: v.optional(v.string()),
  tag: v.optional(v.string()),
  updated_at: v.optional(v.string()),
  webhook_id: v.optional(v.string()),
});

export type GetActivitySubscriptionsResponseDataFilter = {
  readonly direction?: string;
  readonly keyword?: string;
  readonly user_id?: string;
};
export const GetActivitySubscriptionsResponseDataFilterSchema: v.GenericSchema<unknown, GetActivitySubscriptionsResponseDataFilter> = v.looseObject({
  direction: v.optional(v.string()),
  keyword: v.optional(v.string()),
  user_id: v.optional(v.string()),
});

export type GetBroadcastResponse = {
  readonly data?: Broadcast;
  readonly errors?: ReadonlyArray<Problem>;
};
export const GetBroadcastResponseSchema: v.GenericSchema<unknown, GetBroadcastResponse> = v.looseObject({
  data: v.optional(v.lazy(() => BroadcastSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type GetChatConversationEventsResponse = {
  readonly data?: ReadonlyArray<ChatMessageEvent>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly meta?: unknown;
};
export const GetChatConversationEventsResponseSchema: v.GenericSchema<unknown, GetChatConversationEventsResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => ChatMessageEventSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  meta: v.optional(v.unknown()),
});

export type GetChatConversationResponse = {
  readonly data?: ChatConversation;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
};
export const GetChatConversationResponseSchema: v.GenericSchema<unknown, GetChatConversationResponse> = v.looseObject({
  data: v.optional(v.lazy(() => ChatConversationSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
});

export type GetChatConversationsResponse = {
  readonly data?: ReadonlyArray<ChatConversation>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
};
export const GetChatConversationsResponseSchema: v.GenericSchema<unknown, GetChatConversationsResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => ChatConversationSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
  meta: v.optional(v.unknown()),
});

export type GetCommunitiesByIdResponse = {
  readonly data?: Community;
  readonly errors?: ReadonlyArray<Problem>;
};
export const GetCommunitiesByIdResponseSchema: v.GenericSchema<unknown, GetCommunitiesByIdResponse> = v.looseObject({
  data: v.optional(v.lazy(() => CommunitySchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type GetComplianceJobsByIdResponse = {
  readonly data?: ComplianceJob;
  readonly errors?: ReadonlyArray<Problem>;
};
export const GetComplianceJobsByIdResponseSchema: v.GenericSchema<unknown, GetComplianceJobsByIdResponse> = v.looseObject({
  data: v.optional(v.lazy(() => ComplianceJobSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type GetComplianceJobsResponse = {
  readonly data?: ReadonlyArray<ComplianceJob>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly meta?: unknown;
};
export const GetComplianceJobsResponseSchema: v.GenericSchema<unknown, GetComplianceJobsResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => ComplianceJobSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  meta: v.optional(v.unknown()),
});

export type GetConnectionHistoryResponse = {
  readonly data?: ReadonlyArray<Connection>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly meta?: unknown;
};
export const GetConnectionHistoryResponseSchema: v.GenericSchema<unknown, GetConnectionHistoryResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => ConnectionSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  meta: v.optional(v.unknown()),
});

export type GetDirectMessagesEventsByConversationIdResponse = {
  readonly data?: ReadonlyArray<DmEvent>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
};
export const GetDirectMessagesEventsByConversationIdResponseSchema: v.GenericSchema<unknown, GetDirectMessagesEventsByConversationIdResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => DmEventSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
  meta: v.optional(v.unknown()),
});

export type GetDirectMessagesEventsByIdResponse = {
  readonly data?: DmEvent;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
};
export const GetDirectMessagesEventsByIdResponseSchema: v.GenericSchema<unknown, GetDirectMessagesEventsByIdResponse> = v.looseObject({
  data: v.optional(v.lazy(() => DmEventSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
});

export type GetDirectMessagesEventsByParticipantIdResponse = {
  readonly data?: ReadonlyArray<DmEvent>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
};
export const GetDirectMessagesEventsByParticipantIdResponseSchema: v.GenericSchema<unknown, GetDirectMessagesEventsByParticipantIdResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => DmEventSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
  meta: v.optional(v.unknown()),
});

export type GetDirectMessagesEventsResponse = {
  readonly data?: ReadonlyArray<DmEvent>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
};
export const GetDirectMessagesEventsResponseSchema: v.GenericSchema<unknown, GetDirectMessagesEventsResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => DmEventSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
  meta: v.optional(v.unknown()),
});

export type GetListsByIdResponse = {
  readonly data?: List;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
};
export const GetListsByIdResponseSchema: v.GenericSchema<unknown, GetListsByIdResponse> = v.looseObject({
  data: v.optional(v.lazy(() => ListSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
});

export type GetListsFollowersResponse = {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
};
export const GetListsFollowersResponseSchema: v.GenericSchema<unknown, GetListsFollowersResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => UserSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
  meta: v.optional(v.unknown()),
});

export type GetListsMembersResponse = {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
};
export const GetListsMembersResponseSchema: v.GenericSchema<unknown, GetListsMembersResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => UserSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
  meta: v.optional(v.unknown()),
});

export type GetListsPostsResponse = {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
};
export const GetListsPostsResponseSchema: v.GenericSchema<unknown, GetListsPostsResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => PostSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
  meta: v.optional(v.unknown()),
});

export type GetMediaAnalyticsResponse = {
  readonly data?: ReadonlyArray<MediaAnalytics>;
  readonly errors?: ReadonlyArray<Problem>;
};
export const GetMediaAnalyticsResponseSchema: v.GenericSchema<unknown, GetMediaAnalyticsResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => MediaAnalyticsSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type GetMediaByMediaKeyResponse = {
  readonly data?: Media;
  readonly errors?: ReadonlyArray<Problem>;
};
export const GetMediaByMediaKeyResponseSchema: v.GenericSchema<unknown, GetMediaByMediaKeyResponse> = v.looseObject({
  data: v.optional(v.lazy(() => MediaSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type GetMediaByMediaKeysResponse = {
  readonly data?: ReadonlyArray<Media>;
  readonly errors?: ReadonlyArray<Problem>;
};
export const GetMediaByMediaKeysResponseSchema: v.GenericSchema<unknown, GetMediaByMediaKeysResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => MediaSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type GetMediaUploadStatusResponse = {
  readonly data?: GetMediaUploadStatusResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const GetMediaUploadStatusResponseSchema: v.GenericSchema<unknown, GetMediaUploadStatusResponse> = v.looseObject({
  data: v.optional(v.lazy(() => GetMediaUploadStatusResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type GetMediaUploadStatusResponseData = {
  readonly expires_after_secs?: number;
  readonly id: string;
  readonly image?: GetMediaUploadStatusResponseDataImage;
  readonly media_key?: string;
  readonly processing_info?: GetMediaUploadStatusResponseDataProcessingInfo;
  readonly size?: number;
  readonly video?: GetMediaUploadStatusResponseDataVideo;
};
export const GetMediaUploadStatusResponseDataSchema: v.GenericSchema<unknown, GetMediaUploadStatusResponseData> = v.looseObject({
  expires_after_secs: v.optional(v.pipe(v.number(), v.integer())),
  id: v.string(),
  image: v.optional(v.lazy(() => GetMediaUploadStatusResponseDataImageSchema)),
  media_key: v.optional(v.string()),
  processing_info: v.optional(v.lazy(() => GetMediaUploadStatusResponseDataProcessingInfoSchema)),
  size: v.optional(v.pipe(v.number(), v.integer())),
  video: v.optional(v.lazy(() => GetMediaUploadStatusResponseDataVideoSchema)),
});

export type GetMediaUploadStatusResponseDataImage = {
  readonly h?: number;
  readonly image_type?: string;
  readonly w?: number;
};
export const GetMediaUploadStatusResponseDataImageSchema: v.GenericSchema<unknown, GetMediaUploadStatusResponseDataImage> = v.looseObject({
  h: v.optional(v.pipe(v.number(), v.integer())),
  image_type: v.optional(v.string()),
  w: v.optional(v.pipe(v.number(), v.integer())),
});

export type GetMediaUploadStatusResponseDataProcessingInfo = {
  readonly check_after_secs?: number;
  readonly progress_percent?: number;
  readonly state?: string;
};
export const GetMediaUploadStatusResponseDataProcessingInfoSchema: v.GenericSchema<unknown, GetMediaUploadStatusResponseDataProcessingInfo> = v.looseObject({
  check_after_secs: v.optional(v.pipe(v.number(), v.integer())),
  progress_percent: v.optional(v.pipe(v.number(), v.integer())),
  state: v.optional(v.string()),
});

export type GetMediaUploadStatusResponseDataVideo = {
  readonly video_type?: string;
};
export const GetMediaUploadStatusResponseDataVideoSchema: v.GenericSchema<unknown, GetMediaUploadStatusResponseDataVideo> = v.looseObject({
  video_type: v.optional(v.string()),
});

export type GetNewsResponse = {
  readonly data?: News;
  readonly errors?: ReadonlyArray<Problem>;
};
export const GetNewsResponseSchema: v.GenericSchema<unknown, GetNewsResponse> = v.looseObject({
  data: v.optional(v.lazy(() => NewsSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type GetPostsAnalyticsResponse = {
  readonly data?: ReadonlyArray<Analytics>;
  readonly errors?: ReadonlyArray<Problem>;
};
export const GetPostsAnalyticsResponseSchema: v.GenericSchema<unknown, GetPostsAnalyticsResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => AnalyticsSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type GetPostsByIdResponse = {
  readonly data?: Post;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
};
export const GetPostsByIdResponseSchema: v.GenericSchema<unknown, GetPostsByIdResponse> = v.looseObject({
  data: v.optional(v.lazy(() => PostSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
});

export type GetPostsByIdsResponse = {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
};
export const GetPostsByIdsResponseSchema: v.GenericSchema<unknown, GetPostsByIdsResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => PostSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
  meta: v.optional(v.unknown()),
});

export type GetPostsCountsAllResponse = {
  readonly data?: ReadonlyArray<GetPostsCountsAllResponseData>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly meta?: unknown;
};
export const GetPostsCountsAllResponseSchema: v.GenericSchema<unknown, GetPostsCountsAllResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => GetPostsCountsAllResponseDataSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  meta: v.optional(v.unknown()),
});

export type GetPostsCountsAllResponseData = {
  readonly end: string;
  readonly post_count: number;
  readonly start: string;
};
export const GetPostsCountsAllResponseDataSchema: v.GenericSchema<unknown, GetPostsCountsAllResponseData> = v.looseObject({
  end: v.string(),
  post_count: v.pipe(v.number(), v.integer()),
  start: v.string(),
});

export type GetPostsCountsRecentResponse = {
  readonly data?: ReadonlyArray<GetPostsCountsRecentResponseData>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly meta?: unknown;
};
export const GetPostsCountsRecentResponseSchema: v.GenericSchema<unknown, GetPostsCountsRecentResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => GetPostsCountsRecentResponseDataSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  meta: v.optional(v.unknown()),
});

export type GetPostsCountsRecentResponseData = {
  readonly end: string;
  readonly post_count: number;
  readonly start: string;
};
export const GetPostsCountsRecentResponseDataSchema: v.GenericSchema<unknown, GetPostsCountsRecentResponseData> = v.looseObject({
  end: v.string(),
  post_count: v.pipe(v.number(), v.integer()),
  start: v.string(),
});

export type GetPostsLikingUsersResponse = {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
};
export const GetPostsLikingUsersResponseSchema: v.GenericSchema<unknown, GetPostsLikingUsersResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => UserSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
  meta: v.optional(v.unknown()),
});

export type GetPostsQuotedPostsResponse = {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
};
export const GetPostsQuotedPostsResponseSchema: v.GenericSchema<unknown, GetPostsQuotedPostsResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => PostSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
  meta: v.optional(v.unknown()),
});

export type GetPostsRepostedByResponse = {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
};
export const GetPostsRepostedByResponseSchema: v.GenericSchema<unknown, GetPostsRepostedByResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => UserSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
  meta: v.optional(v.unknown()),
});

export type GetPostsRepostsResponse = {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
};
export const GetPostsRepostsResponseSchema: v.GenericSchema<unknown, GetPostsRepostsResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => PostSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
  meta: v.optional(v.unknown()),
});

export type GetRuleCountsResponse = {
  readonly data?: GetRuleCountsResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const GetRuleCountsResponseSchema: v.GenericSchema<unknown, GetRuleCountsResponse> = v.looseObject({
  data: v.optional(v.lazy(() => GetRuleCountsResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type GetRuleCountsResponseData = {
  readonly all_project_client_apps?: ReadonlyArray<GetRuleCountsResponseDataAllProjectClientApps>;
  readonly cap_per_client_app: string;
  readonly cap_per_project: string;
  readonly client_app_rules_count: GetRuleCountsResponseDataClientAppRulesCount;
  readonly project_rules_count: string;
};
export const GetRuleCountsResponseDataSchema: v.GenericSchema<unknown, GetRuleCountsResponseData> = v.looseObject({
  all_project_client_apps: v.optional(v.array(v.lazy(() => GetRuleCountsResponseDataAllProjectClientAppsSchema))),
  cap_per_client_app: v.string(),
  cap_per_project: v.string(),
  client_app_rules_count: v.lazy(() => GetRuleCountsResponseDataClientAppRulesCountSchema),
  project_rules_count: v.string(),
});

export type GetRuleCountsResponseDataAllProjectClientApps = {
  readonly client_app_id?: string;
  readonly rule_count: number;
};
export const GetRuleCountsResponseDataAllProjectClientAppsSchema: v.GenericSchema<unknown, GetRuleCountsResponseDataAllProjectClientApps> = v.looseObject({
  client_app_id: v.optional(v.string()),
  rule_count: v.pipe(v.number(), v.integer()),
});

export type GetRuleCountsResponseDataClientAppRulesCount = {
  readonly client_app_id?: string;
  readonly rule_count: number;
};
export const GetRuleCountsResponseDataClientAppRulesCountSchema: v.GenericSchema<unknown, GetRuleCountsResponseDataClientAppRulesCount> = v.looseObject({
  client_app_id: v.optional(v.string()),
  rule_count: v.pipe(v.number(), v.integer()),
});

export type GetRulesResponse = {
  readonly data?: ReadonlyArray<GetRulesResponseData>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly meta?: unknown;
};
export const GetRulesResponseSchema: v.GenericSchema<unknown, GetRulesResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => GetRulesResponseDataSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  meta: v.optional(v.unknown()),
});

export type GetRulesResponseData = {
  readonly id?: string;
  readonly tag?: string;
  readonly value?: string;
};
export const GetRulesResponseDataSchema: v.GenericSchema<unknown, GetRulesResponseData> = v.looseObject({
  id: v.optional(v.string()),
  tag: v.optional(v.string()),
  value: v.optional(v.string()),
});

export type GetScheduledBroadcastResponse = {
  readonly data?: GetScheduledBroadcastResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const GetScheduledBroadcastResponseSchema: v.GenericSchema<unknown, GetScheduledBroadcastResponse> = v.looseObject({
  data: v.optional(v.lazy(() => GetScheduledBroadcastResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type GetScheduledBroadcastResponseData = {
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
};
export const GetScheduledBroadcastResponseDataSchema: v.GenericSchema<unknown, GetScheduledBroadcastResponseData> = v.looseObject({
  available_for_replay: v.optional(v.boolean()),
  broadcast_id: v.optional(v.string()),
  chat_option: v.optional(v.string()),
  description: v.optional(v.string()),
  locale: v.optional(v.string()),
  manual_publish: v.optional(v.boolean()),
  recurring_schedule_id: v.optional(v.string()),
  scheduled_broadcast_id: v.optional(v.string()),
  scheduled_end_ms: v.optional(v.string()),
  scheduled_start_ms: v.optional(v.string()),
  source_id: v.optional(v.string()),
  state: v.optional(v.string()),
  telecast_id: v.optional(v.string()),
  thumbnail_media_id: v.optional(v.string()),
  title: v.optional(v.string()),
});

export type GetSpacesBuyersResponse = {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
};
export const GetSpacesBuyersResponseSchema: v.GenericSchema<unknown, GetSpacesBuyersResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => UserSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
  meta: v.optional(v.unknown()),
});

export type GetSpacesByCreatorIdsResponse = {
  readonly data?: ReadonlyArray<Space>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
};
export const GetSpacesByCreatorIdsResponseSchema: v.GenericSchema<unknown, GetSpacesByCreatorIdsResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => SpaceSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
  meta: v.optional(v.unknown()),
});

export type GetSpacesByIdResponse = {
  readonly data?: Space;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
};
export const GetSpacesByIdResponseSchema: v.GenericSchema<unknown, GetSpacesByIdResponse> = v.looseObject({
  data: v.optional(v.lazy(() => SpaceSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
});

export type GetSpacesByIdsResponse = {
  readonly data?: ReadonlyArray<Space>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
};
export const GetSpacesByIdsResponseSchema: v.GenericSchema<unknown, GetSpacesByIdsResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => SpaceSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
});

export type GetSpacesPostsResponse = {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
};
export const GetSpacesPostsResponseSchema: v.GenericSchema<unknown, GetSpacesPostsResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => PostSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
  meta: v.optional(v.unknown()),
});

export type GetTrendsByWoeidResponse = {
  readonly data?: ReadonlyArray<Trend>;
  readonly errors?: ReadonlyArray<Problem>;
};
export const GetTrendsByWoeidResponseSchema: v.GenericSchema<unknown, GetTrendsByWoeidResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => TrendSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type GetTrendsPersonalizedTrendsResponse = {
  readonly data?: ReadonlyArray<PersonalizedTrend>;
  readonly errors?: ReadonlyArray<Problem>;
};
export const GetTrendsPersonalizedTrendsResponseSchema: v.GenericSchema<unknown, GetTrendsPersonalizedTrendsResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => PersonalizedTrendSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type GetUsageResponse = {
  readonly data?: Usage;
  readonly errors?: ReadonlyArray<Problem>;
};
export const GetUsageResponseSchema: v.GenericSchema<unknown, GetUsageResponse> = v.looseObject({
  data: v.optional(v.lazy(() => UsageSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type GetUsersAffiliatesResponse = {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
};
export const GetUsersAffiliatesResponseSchema: v.GenericSchema<unknown, GetUsersAffiliatesResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => UserSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
  meta: v.optional(v.unknown()),
});

export type GetUsersBlockingResponse = {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
};
export const GetUsersBlockingResponseSchema: v.GenericSchema<unknown, GetUsersBlockingResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => UserSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
  meta: v.optional(v.unknown()),
});

export type GetUsersBookmarkFoldersResponse = {
  readonly data?: ReadonlyArray<GetUsersBookmarkFoldersResponseData>;
  readonly errors?: ReadonlyArray<Problem>;
};
export const GetUsersBookmarkFoldersResponseSchema: v.GenericSchema<unknown, GetUsersBookmarkFoldersResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => GetUsersBookmarkFoldersResponseDataSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type GetUsersBookmarkFoldersResponseData = {
  readonly id: string;
  readonly name: string;
};
export const GetUsersBookmarkFoldersResponseDataSchema: v.GenericSchema<unknown, GetUsersBookmarkFoldersResponseData> = v.looseObject({
  id: v.string(),
  name: v.string(),
});

export type GetUsersBookmarksByFolderIdResponse = {
  readonly data?: ReadonlyArray<unknown>;
  readonly errors?: ReadonlyArray<Problem>;
};
export const GetUsersBookmarksByFolderIdResponseSchema: v.GenericSchema<unknown, GetUsersBookmarksByFolderIdResponse> = v.looseObject({
  data: v.optional(v.array(v.unknown())),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type GetUsersBookmarksResponse = {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
};
export const GetUsersBookmarksResponseSchema: v.GenericSchema<unknown, GetUsersBookmarksResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => PostSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
  meta: v.optional(v.unknown()),
});

export type GetUsersByIdResponse = {
  readonly data?: User;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
};
export const GetUsersByIdResponseSchema: v.GenericSchema<unknown, GetUsersByIdResponse> = v.looseObject({
  data: v.optional(v.lazy(() => UserSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
});

export type GetUsersByIdsResponse = {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
};
export const GetUsersByIdsResponseSchema: v.GenericSchema<unknown, GetUsersByIdsResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => UserSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
});

export type GetUsersByUsernameResponse = {
  readonly data?: User;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
};
export const GetUsersByUsernameResponseSchema: v.GenericSchema<unknown, GetUsersByUsernameResponse> = v.looseObject({
  data: v.optional(v.lazy(() => UserSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
});

export type GetUsersByUsernamesResponse = {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
};
export const GetUsersByUsernamesResponseSchema: v.GenericSchema<unknown, GetUsersByUsernamesResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => UserSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
});

export type GetUsersFollowedListsResponse = {
  readonly data?: ReadonlyArray<List>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
};
export const GetUsersFollowedListsResponseSchema: v.GenericSchema<unknown, GetUsersFollowedListsResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => ListSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
  meta: v.optional(v.unknown()),
});

export type GetUsersFollowersResponse = {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
};
export const GetUsersFollowersResponseSchema: v.GenericSchema<unknown, GetUsersFollowersResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => UserSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
  meta: v.optional(v.unknown()),
});

export type GetUsersFollowingResponse = {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
};
export const GetUsersFollowingResponseSchema: v.GenericSchema<unknown, GetUsersFollowingResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => UserSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
  meta: v.optional(v.unknown()),
});

export type GetUsersLikedPostsResponse = {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
};
export const GetUsersLikedPostsResponseSchema: v.GenericSchema<unknown, GetUsersLikedPostsResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => PostSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
  meta: v.optional(v.unknown()),
});

export type GetUsersListMembershipsResponse = {
  readonly data?: ReadonlyArray<List>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
};
export const GetUsersListMembershipsResponseSchema: v.GenericSchema<unknown, GetUsersListMembershipsResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => ListSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
  meta: v.optional(v.unknown()),
});

export type GetUsersMentionsResponse = {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
};
export const GetUsersMentionsResponseSchema: v.GenericSchema<unknown, GetUsersMentionsResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => PostSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
  meta: v.optional(v.unknown()),
});

export type GetUsersMeResponse = {
  readonly data?: User;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
};
export const GetUsersMeResponseSchema: v.GenericSchema<unknown, GetUsersMeResponse> = v.looseObject({
  data: v.optional(v.lazy(() => UserSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
});

export type GetUsersMutingResponse = {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
};
export const GetUsersMutingResponseSchema: v.GenericSchema<unknown, GetUsersMutingResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => UserSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
  meta: v.optional(v.unknown()),
});

export type GetUsersOwnedListsResponse = {
  readonly data?: ReadonlyArray<List>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
};
export const GetUsersOwnedListsResponseSchema: v.GenericSchema<unknown, GetUsersOwnedListsResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => ListSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
  meta: v.optional(v.unknown()),
});

export type GetUsersPinnedListsResponse = {
  readonly data?: ReadonlyArray<List>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
};
export const GetUsersPinnedListsResponseSchema: v.GenericSchema<unknown, GetUsersPinnedListsResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => ListSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
  meta: v.optional(v.unknown()),
});

export type GetUsersPostsResponse = {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
};
export const GetUsersPostsResponseSchema: v.GenericSchema<unknown, GetUsersPostsResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => PostSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
  meta: v.optional(v.unknown()),
});

export type GetUsersPublicKeyResponse = {
  readonly data?: ReadonlyArray<PublicKey>;
  readonly errors?: ReadonlyArray<Problem>;
};
export const GetUsersPublicKeyResponseSchema: v.GenericSchema<unknown, GetUsersPublicKeyResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => PublicKeySchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type GetUsersPublicKeysResponse = {
  readonly data?: ReadonlyArray<PublicKey>;
  readonly errors?: ReadonlyArray<Problem>;
};
export const GetUsersPublicKeysResponseSchema: v.GenericSchema<unknown, GetUsersPublicKeysResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => PublicKeySchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type GetUsersRepostsOfMeResponse = {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
};
export const GetUsersRepostsOfMeResponseSchema: v.GenericSchema<unknown, GetUsersRepostsOfMeResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => PostSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
  meta: v.optional(v.unknown()),
});

export type GetUsersTimelineResponse = {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
};
export const GetUsersTimelineResponseSchema: v.GenericSchema<unknown, GetUsersTimelineResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => PostSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
  meta: v.optional(v.unknown()),
});

export type GetWebhooksResponse = {
  readonly data?: ReadonlyArray<WebhookConfig>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly meta?: unknown;
};
export const GetWebhooksResponseSchema: v.GenericSchema<unknown, GetWebhooksResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => WebhookConfigSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  meta: v.optional(v.unknown()),
});

export type GetWebhooksStreamLinksResponse = {
  readonly data?: ReadonlyArray<GetWebhooksStreamLinksResponseData>;
  readonly errors?: ReadonlyArray<Problem>;
};
export const GetWebhooksStreamLinksResponseSchema: v.GenericSchema<unknown, GetWebhooksStreamLinksResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => GetWebhooksStreamLinksResponseDataSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type GetWebhooksStreamLinksResponseData = {
  readonly application_id?: string;
  readonly business_user_id?: string;
  readonly created_at?: string;
  readonly fields?: ReadonlyArray<string>;
  readonly instance_id?: string;
  readonly webhook_id?: string;
};
export const GetWebhooksStreamLinksResponseDataSchema: v.GenericSchema<unknown, GetWebhooksStreamLinksResponseData> = v.looseObject({
  application_id: v.optional(v.string()),
  business_user_id: v.optional(v.string()),
  created_at: v.optional(v.string()),
  fields: v.optional(v.array(v.string())),
  instance_id: v.optional(v.string()),
  webhook_id: v.optional(v.string()),
});

export type GoLiveScheduledBroadcastResponse = {
  readonly data?: GoLiveScheduledBroadcastResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const GoLiveScheduledBroadcastResponseSchema: v.GenericSchema<unknown, GoLiveScheduledBroadcastResponse> = v.looseObject({
  data: v.optional(v.lazy(() => GoLiveScheduledBroadcastResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type GoLiveScheduledBroadcastResponseData = {
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
};
export const GoLiveScheduledBroadcastResponseDataSchema: v.GenericSchema<unknown, GoLiveScheduledBroadcastResponseData> = v.looseObject({
  available_for_replay: v.optional(v.boolean()),
  broadcast_id: v.optional(v.string()),
  chat_option: v.optional(v.string()),
  description: v.optional(v.string()),
  locale: v.optional(v.string()),
  manual_publish: v.optional(v.boolean()),
  recurring_schedule_id: v.optional(v.string()),
  scheduled_broadcast_id: v.optional(v.string()),
  scheduled_end_ms: v.optional(v.string()),
  scheduled_start_ms: v.optional(v.string()),
  source_id: v.optional(v.string()),
  state: v.optional(v.string()),
  telecast_id: v.optional(v.string()),
  thumbnail_media_id: v.optional(v.string()),
  title: v.optional(v.string()),
});

export type HidePostsReplyRequest = {
  readonly hidden: boolean;
};
export const HidePostsReplyRequestSchema: v.GenericSchema<unknown, HidePostsReplyRequest> = v.looseObject({
  hidden: v.boolean(),
});

export type HidePostsReplyResponse = {
  readonly data?: HidePostsReplyResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const HidePostsReplyResponseSchema: v.GenericSchema<unknown, HidePostsReplyResponse> = v.looseObject({
  data: v.optional(v.lazy(() => HidePostsReplyResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type HidePostsReplyResponseData = {
  readonly hidden?: boolean;
};
export const HidePostsReplyResponseDataSchema: v.GenericSchema<unknown, HidePostsReplyResponseData> = v.looseObject({
  hidden: v.optional(v.boolean()),
});

export type InitializeChatGroupResponse = {
  readonly data?: InitializeChatGroupResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const InitializeChatGroupResponseSchema: v.GenericSchema<unknown, InitializeChatGroupResponse> = v.looseObject({
  data: v.optional(v.lazy(() => InitializeChatGroupResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type InitializeChatGroupResponseData = {
  readonly conversation_id: string;
};
export const InitializeChatGroupResponseDataSchema: v.GenericSchema<unknown, InitializeChatGroupResponseData> = v.looseObject({
  conversation_id: v.string(),
});

export type InitializeMediaUploadRequest = {
  readonly additional_owners?: ReadonlyArray<string>;
  readonly media_category?: "amplify_video" | "tweet_gif" | "tweet_image" | "tweet_video" | "dm_gif" | "dm_image" | "dm_video" | "subtitles";
  readonly media_type?: "video/mp4" | "video/webm" | "video/mp2t" | "video/quicktime" | "text/srt" | "text/vtt" | "image/jpeg" | "image/gif" | "image/bmp" | "image/png" | "image/webp" | "image/pjpeg" | "image/tiff" | "model/gltf-binary" | "model/vnd.usdz+zip";
  readonly shared?: boolean;
  readonly total_bytes?: number;
};
export const InitializeMediaUploadRequestSchema: v.GenericSchema<unknown, InitializeMediaUploadRequest> = v.looseObject({
  additional_owners: v.optional(v.array(v.string())),
  media_category: v.optional(v.union([v.literal("amplify_video"), v.literal("tweet_gif"), v.literal("tweet_image"), v.literal("tweet_video"), v.literal("dm_gif"), v.literal("dm_image"), v.literal("dm_video"), v.literal("subtitles")])),
  media_type: v.optional(v.union([v.literal("video/mp4"), v.literal("video/webm"), v.literal("video/mp2t"), v.literal("video/quicktime"), v.literal("text/srt"), v.literal("text/vtt"), v.literal("image/jpeg"), v.literal("image/gif"), v.literal("image/bmp"), v.literal("image/png"), v.literal("image/webp"), v.literal("image/pjpeg"), v.literal("image/tiff"), v.literal("model/gltf-binary"), v.literal("model/vnd.usdz+zip")])),
  shared: v.optional(v.boolean()),
  total_bytes: v.optional(v.pipe(v.number(), v.integer())),
});

export type InitializeMediaUploadResponse = {
  readonly data?: InitializeMediaUploadResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const InitializeMediaUploadResponseSchema: v.GenericSchema<unknown, InitializeMediaUploadResponse> = v.looseObject({
  data: v.optional(v.lazy(() => InitializeMediaUploadResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type InitializeMediaUploadResponseData = {
  readonly expires_after_secs?: number;
  readonly id: string;
  readonly media_key?: string;
};
export const InitializeMediaUploadResponseDataSchema: v.GenericSchema<unknown, InitializeMediaUploadResponseData> = v.looseObject({
  expires_after_secs: v.optional(v.pipe(v.number(), v.integer())),
  id: v.string(),
  media_key: v.optional(v.string()),
});

export type InternalErrorProblem = {
  readonly detail: string;
  readonly status?: number;
  readonly title: string;
  readonly type: "https://api.x.com/2/problems/internal-error";
};
export const InternalErrorProblemSchema: v.GenericSchema<unknown, InternalErrorProblem> = v.looseObject({
  detail: v.string(),
  status: v.optional(v.pipe(v.number(), v.integer())),
  title: v.string(),
  type: v.literal("https://api.x.com/2/problems/internal-error"),
});

export type InvalidRequestProblem = {
  readonly detail: string;
  readonly parameter?: string;
  readonly status?: number;
  readonly title: string;
  readonly type: "https://api.x.com/2/problems/invalid-request";
  readonly value?: string;
};
export const InvalidRequestProblemSchema: v.GenericSchema<unknown, InvalidRequestProblem> = v.looseObject({
  detail: v.string(),
  parameter: v.optional(v.string()),
  status: v.optional(v.pipe(v.number(), v.integer())),
  title: v.string(),
  type: v.literal("https://api.x.com/2/problems/invalid-request"),
  value: v.optional(v.string()),
});

export type Keyword = string;
export const KeywordSchema: v.GenericSchema<unknown, Keyword> = v.string();

export type LikeComplianceSchema = {
  readonly delete: UnlikeComplianceSchema;
};
export const LikeComplianceSchemaSchema: v.GenericSchema<unknown, LikeComplianceSchema> = v.looseObject({
  delete: v.lazy(() => UnlikeComplianceSchemaSchema),
});

export type LikeId = string;
export const LikeIdSchema: v.GenericSchema<unknown, LikeId> = v.string();

export type LikePostRequest = {
  readonly tweet_id: string;
};
export const LikePostRequestSchema: v.GenericSchema<unknown, LikePostRequest> = v.looseObject({
  tweet_id: v.string(),
});

export type LikePostResponse = {
  readonly data?: LikePostResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const LikePostResponseSchema: v.GenericSchema<unknown, LikePostResponse> = v.looseObject({
  data: v.optional(v.lazy(() => LikePostResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type LikePostResponseData = {
  readonly liked: boolean;
};
export const LikePostResponseDataSchema: v.GenericSchema<unknown, LikePostResponseData> = v.looseObject({
  liked: v.boolean(),
});

/** A Like event, with the tweet author user and the tweet being liked */
export type LikeWithPostAuthor = {
  readonly created_at?: string;
  readonly id?: LikeId;
  readonly liked_tweet_id?: PostId;
  readonly timestamp_ms?: number;
  readonly tweet_author_id?: UserId;
};
export const LikeWithPostAuthorSchema: v.GenericSchema<unknown, LikeWithPostAuthor> = v.looseObject({
  created_at: v.optional(v.pipe(v.string(), v.isoTimestamp())),
  id: v.optional(v.lazy(() => LikeIdSchema)),
  liked_tweet_id: v.optional(v.lazy(() => PostIdSchema)),
  timestamp_ms: v.optional(v.pipe(v.number(), v.integer())),
  tweet_author_id: v.optional(v.lazy(() => UserIdSchema)),
});

export type List = {
  readonly created_at?: string;
  readonly description?: string;
  readonly follower_count?: ListFollowerCount;
  readonly id?: string;
  readonly member_count?: ListMemberCount;
  readonly name?: string;
  readonly owner_id?: string;
  readonly private?: boolean;
};
export const ListSchema: v.GenericSchema<unknown, List> = v.looseObject({
  created_at: v.optional(v.string()),
  description: v.optional(v.string()),
  follower_count: v.optional(v.lazy(() => ListFollowerCountSchema)),
  id: v.optional(v.string()),
  member_count: v.optional(v.lazy(() => ListMemberCountSchema)),
  name: v.optional(v.string()),
  owner_id: v.optional(v.string()),
  private: v.optional(v.boolean()),
});

export type ListFollowerCount = number;
export const ListFollowerCountSchema: v.GenericSchema<unknown, ListFollowerCount> = v.pipe(v.number(), v.integer());

export type ListId = string;
export const ListIdSchema: v.GenericSchema<unknown, ListId> = v.string();

export type ListMemberCount = number;
export const ListMemberCountSchema: v.GenericSchema<unknown, ListMemberCount> = v.pipe(v.number(), v.integer());

export type ListScheduledBroadcastsResponse = {
  readonly data?: ReadonlyArray<ListScheduledBroadcastsResponseData>;
  readonly errors?: ReadonlyArray<Problem>;
};
export const ListScheduledBroadcastsResponseSchema: v.GenericSchema<unknown, ListScheduledBroadcastsResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => ListScheduledBroadcastsResponseDataSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type ListScheduledBroadcastsResponseData = {
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
};
export const ListScheduledBroadcastsResponseDataSchema: v.GenericSchema<unknown, ListScheduledBroadcastsResponseData> = v.looseObject({
  available_for_replay: v.optional(v.boolean()),
  broadcast_id: v.optional(v.string()),
  chat_option: v.optional(v.string()),
  description: v.optional(v.string()),
  locale: v.optional(v.string()),
  manual_publish: v.optional(v.boolean()),
  recurring_schedule_id: v.optional(v.string()),
  scheduled_broadcast_id: v.optional(v.string()),
  scheduled_end_ms: v.optional(v.string()),
  scheduled_start_ms: v.optional(v.string()),
  source_id: v.optional(v.string()),
  state: v.optional(v.string()),
  telecast_id: v.optional(v.string()),
  thumbnail_media_id: v.optional(v.string()),
  title: v.optional(v.string()),
});

export type MarkChatConversationReadRequest = {
  readonly seen_until_sequence_id: string;
};
export const MarkChatConversationReadRequestSchema: v.GenericSchema<unknown, MarkChatConversationReadRequest> = v.looseObject({
  seen_until_sequence_id: v.string(),
});

export type MarkChatConversationReadResponse = {
  readonly data?: MarkChatConversationReadResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const MarkChatConversationReadResponseSchema: v.GenericSchema<unknown, MarkChatConversationReadResponse> = v.looseObject({
  data: v.optional(v.lazy(() => MarkChatConversationReadResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type MarkChatConversationReadResponseData = {
  readonly success: boolean;
};
export const MarkChatConversationReadResponseDataSchema: v.GenericSchema<unknown, MarkChatConversationReadResponseData> = v.looseObject({
  success: v.boolean(),
});

export type Media = {
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
};
export const MediaSchema: v.GenericSchema<unknown, Media> = v.looseObject({
  alt_text: v.optional(v.string()),
  duration_ms: v.optional(v.pipe(v.number(), v.integer())),
  height: v.optional(v.pipe(v.number(), v.integer())),
  media_key: v.optional(v.string()),
  non_public_metrics: v.optional(v.lazy(() => MediaNonPublicMetricsSchema)),
  organic_metrics: v.optional(v.lazy(() => MediaOrganicMetricsSchema)),
  preview_image_url: v.optional(v.string()),
  promoted_metrics: v.optional(v.lazy(() => MediaPromotedMetricsSchema)),
  public_metrics: v.optional(v.lazy(() => MediaPublicMetricsSchema)),
  type: v.optional(v.string()),
  url: v.optional(v.string()),
  variants: v.optional(v.lazy(() => MediaVariantsSchema)),
  width: v.optional(v.pipe(v.number(), v.integer())),
});

export type MediaAnalytics = {
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
};
export const MediaAnalyticsSchema: v.GenericSchema<unknown, MediaAnalytics> = v.looseObject({
  cta_url_clicks: v.optional(v.pipe(v.number(), v.integer())),
  cta_watch_clicks: v.optional(v.pipe(v.number(), v.integer())),
  media_key: v.optional(v.string()),
  play_from_tap: v.optional(v.pipe(v.number(), v.integer())),
  playback_complete: v.optional(v.pipe(v.number(), v.integer())),
  playback_start: v.optional(v.pipe(v.number(), v.integer())),
  playback25: v.optional(v.pipe(v.number(), v.integer())),
  playback50: v.optional(v.pipe(v.number(), v.integer())),
  playback75: v.optional(v.pipe(v.number(), v.integer())),
  timestamp: v.optional(v.string()),
  timestamped_metrics: v.optional(v.lazy(() => MediaAnalyticsTimestampedMetricsSchema)),
  video_views: v.optional(v.pipe(v.number(), v.integer())),
  watch_time_ms: v.optional(v.pipe(v.number(), v.integer())),
});

export type MediaAnalyticsTimestampedMetrics = ReadonlyArray<unknown>;
export const MediaAnalyticsTimestampedMetricsSchema: v.GenericSchema<unknown, MediaAnalyticsTimestampedMetrics> = v.array(v.unknown());

export type MediaId = string;
export const MediaIdSchema: v.GenericSchema<unknown, MediaId> = v.string();

/** Nonpublic engagement metrics for the media at the time of the request. */
export type MediaNonPublicMetrics = {
  readonly playback_0_count?: number | null;
  readonly playback_100_count?: number | null;
  readonly playback_25_count?: number | null;
  readonly playback_50_count?: number | null;
  readonly playback_75_count?: number | null;
};
export const MediaNonPublicMetricsSchema: v.GenericSchema<unknown, MediaNonPublicMetrics> = v.looseObject({
  playback_0_count: v.optional(v.nullable(v.pipe(v.number(), v.integer()))),
  playback_100_count: v.optional(v.nullable(v.pipe(v.number(), v.integer()))),
  playback_25_count: v.optional(v.nullable(v.pipe(v.number(), v.integer()))),
  playback_50_count: v.optional(v.nullable(v.pipe(v.number(), v.integer()))),
  playback_75_count: v.optional(v.nullable(v.pipe(v.number(), v.integer()))),
});

/** Organic nonpublic engagement metrics for the media at the time of the request. */
export type MediaOrganicMetrics = {
  readonly playback_0_count?: number | null;
  readonly playback_100_count?: number | null;
  readonly playback_25_count?: number | null;
  readonly playback_50_count?: number | null;
  readonly playback_75_count?: number | null;
  readonly view_count?: number | null;
};
export const MediaOrganicMetricsSchema: v.GenericSchema<unknown, MediaOrganicMetrics> = v.looseObject({
  playback_0_count: v.optional(v.nullable(v.pipe(v.number(), v.integer()))),
  playback_100_count: v.optional(v.nullable(v.pipe(v.number(), v.integer()))),
  playback_25_count: v.optional(v.nullable(v.pipe(v.number(), v.integer()))),
  playback_50_count: v.optional(v.nullable(v.pipe(v.number(), v.integer()))),
  playback_75_count: v.optional(v.nullable(v.pipe(v.number(), v.integer()))),
  view_count: v.optional(v.nullable(v.pipe(v.number(), v.integer()))),
});

/** Promoted nonpublic engagement metrics for the media at the time of the request. */
export type MediaPromotedMetrics = {
  readonly playback_0_count?: number | null;
  readonly playback_100_count?: number | null;
  readonly playback_25_count?: number | null;
  readonly playback_50_count?: number | null;
  readonly playback_75_count?: number | null;
  readonly view_count?: number | null;
};
export const MediaPromotedMetricsSchema: v.GenericSchema<unknown, MediaPromotedMetrics> = v.looseObject({
  playback_0_count: v.optional(v.nullable(v.pipe(v.number(), v.integer()))),
  playback_100_count: v.optional(v.nullable(v.pipe(v.number(), v.integer()))),
  playback_25_count: v.optional(v.nullable(v.pipe(v.number(), v.integer()))),
  playback_50_count: v.optional(v.nullable(v.pipe(v.number(), v.integer()))),
  playback_75_count: v.optional(v.nullable(v.pipe(v.number(), v.integer()))),
  view_count: v.optional(v.nullable(v.pipe(v.number(), v.integer()))),
});

/** Public engagement metrics for the media at the time of the request. */
export type MediaPublicMetrics = {
  readonly view_count: number;
};
export const MediaPublicMetricsSchema: v.GenericSchema<unknown, MediaPublicMetrics> = v.looseObject({
  view_count: v.pipe(v.number(), v.integer()),
});

export type MediaUploadRequest = {
  readonly additional_owners?: string;
  readonly media: string | string;
  readonly media_category: "tweet_image" | "tweet_video" | "tweet_gif" | "dm_image" | "dm_video" | "dm_gif" | "subtitles";
};
export const MediaUploadRequestSchema: v.GenericSchema<unknown, MediaUploadRequest> = v.looseObject({
  additional_owners: v.optional(v.string()),
  media: v.union([v.string(), v.string()]),
  media_category: v.union([v.literal("tweet_image"), v.literal("tweet_video"), v.literal("tweet_gif"), v.literal("dm_image"), v.literal("dm_video"), v.literal("dm_gif"), v.literal("subtitles")]),
});

export type MediaUploadResponse = {
  readonly data?: MediaUploadResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const MediaUploadResponseSchema: v.GenericSchema<unknown, MediaUploadResponse> = v.looseObject({
  data: v.optional(v.lazy(() => MediaUploadResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type MediaUploadResponseData = {
  readonly expires_after_secs?: number;
  readonly id: string;
  readonly image?: MediaUploadResponseDataImage;
  readonly media_key?: string;
  readonly processing_info?: MediaUploadResponseDataProcessingInfo;
  readonly size?: number;
  readonly video?: MediaUploadResponseDataVideo;
};
export const MediaUploadResponseDataSchema: v.GenericSchema<unknown, MediaUploadResponseData> = v.looseObject({
  expires_after_secs: v.optional(v.pipe(v.number(), v.integer())),
  id: v.string(),
  image: v.optional(v.lazy(() => MediaUploadResponseDataImageSchema)),
  media_key: v.optional(v.string()),
  processing_info: v.optional(v.lazy(() => MediaUploadResponseDataProcessingInfoSchema)),
  size: v.optional(v.pipe(v.number(), v.integer())),
  video: v.optional(v.lazy(() => MediaUploadResponseDataVideoSchema)),
});

export type MediaUploadResponseDataImage = {
  readonly h?: number;
  readonly image_type?: string;
  readonly w?: number;
};
export const MediaUploadResponseDataImageSchema: v.GenericSchema<unknown, MediaUploadResponseDataImage> = v.looseObject({
  h: v.optional(v.pipe(v.number(), v.integer())),
  image_type: v.optional(v.string()),
  w: v.optional(v.pipe(v.number(), v.integer())),
});

export type MediaUploadResponseDataProcessingInfo = {
  readonly check_after_secs?: number;
  readonly progress_percent?: number;
  readonly state?: string;
};
export const MediaUploadResponseDataProcessingInfoSchema: v.GenericSchema<unknown, MediaUploadResponseDataProcessingInfo> = v.looseObject({
  check_after_secs: v.optional(v.pipe(v.number(), v.integer())),
  progress_percent: v.optional(v.pipe(v.number(), v.integer())),
  state: v.optional(v.string()),
});

export type MediaUploadResponseDataVideo = {
  readonly video_type?: string;
};
export const MediaUploadResponseDataVideoSchema: v.GenericSchema<unknown, MediaUploadResponseDataVideo> = v.looseObject({
  video_type: v.optional(v.string()),
});

export type MediaVariants = ReadonlyArray<unknown>;
export const MediaVariantsSchema: v.GenericSchema<unknown, MediaVariants> = v.array(v.unknown());

export type MuteBroadcastChatUserRequest = {
  readonly message_id?: string;
  readonly user_id: string;
};
export const MuteBroadcastChatUserRequestSchema: v.GenericSchema<unknown, MuteBroadcastChatUserRequest> = v.looseObject({
  message_id: v.optional(v.string()),
  user_id: v.string(),
});

export type MuteBroadcastChatUserResponse = {
  readonly data?: MuteBroadcastChatUserResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const MuteBroadcastChatUserResponseSchema: v.GenericSchema<unknown, MuteBroadcastChatUserResponse> = v.looseObject({
  data: v.optional(v.lazy(() => MuteBroadcastChatUserResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type MuteBroadcastChatUserResponseData = {
  readonly muted: boolean;
};
export const MuteBroadcastChatUserResponseDataSchema: v.GenericSchema<unknown, MuteBroadcastChatUserResponseData> = v.looseObject({
  muted: v.boolean(),
});

export type MuteUserRequest = {
  readonly target_user_id: string;
};
export const MuteUserRequestSchema: v.GenericSchema<unknown, MuteUserRequest> = v.looseObject({
  target_user_id: v.string(),
});

export type MuteUserResponse = {
  readonly data?: MuteUserResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const MuteUserResponseSchema: v.GenericSchema<unknown, MuteUserResponse> = v.looseObject({
  data: v.optional(v.lazy(() => MuteUserResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type MuteUserResponseData = {
  readonly muting: boolean;
};
export const MuteUserResponseDataSchema: v.GenericSchema<unknown, MuteUserResponseData> = v.looseObject({
  muting: v.boolean(),
});

export type News = {
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
};
export const NewsSchema: v.GenericSchema<unknown, News> = v.looseObject({
  category: v.optional(v.string()),
  cluster_posts_results: v.optional(v.lazy(() => NewsClusterPostsResultsSchema)),
  contexts: v.optional(v.unknown()),
  disclaimer: v.optional(v.string()),
  hook: v.optional(v.string()),
  id: v.optional(v.string()),
  keywords: v.optional(v.unknown()),
  name: v.optional(v.string()),
  summary: v.optional(v.string()),
  updated_at: v.optional(v.string()),
});

export type NewsActivityResponsePayload = {
  readonly category?: string;
  readonly headline?: string;
  readonly hook?: string;
  readonly summary?: string;
};
export const NewsActivityResponsePayloadSchema: v.GenericSchema<unknown, NewsActivityResponsePayload> = v.looseObject({
  category: v.optional(v.string()),
  headline: v.optional(v.string()),
  hook: v.optional(v.string()),
  summary: v.optional(v.string()),
});

export type NewsClusterPostsResults = ReadonlyArray<unknown>;
export const NewsClusterPostsResultsSchema: v.GenericSchema<unknown, NewsClusterPostsResults> = v.array(v.unknown());

export type NotAuthorizedForFieldProblem = {
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
};
export const NotAuthorizedForFieldProblemSchema: v.GenericSchema<unknown, NotAuthorizedForFieldProblem> = v.looseObject({
  detail: v.string(),
  field: v.string(),
  parameter: v.optional(v.string()),
  resource_id: v.optional(v.string()),
  resource_type: v.optional(v.string()),
  section: v.optional(v.string()),
  status: v.optional(v.pipe(v.number(), v.integer())),
  title: v.string(),
  type: v.literal("https://api.x.com/2/problems/not-authorized-for-field"),
  value: v.optional(v.string()),
});

export type NotAuthorizedForResourceProblem = {
  readonly detail: string;
  readonly parameter?: string;
  readonly resource_id?: string;
  readonly resource_type: string;
  readonly section?: string;
  readonly status?: number;
  readonly title: string;
  readonly type: "https://api.x.com/2/problems/not-authorized-for-resource";
  readonly value?: string;
};
export const NotAuthorizedForResourceProblemSchema: v.GenericSchema<unknown, NotAuthorizedForResourceProblem> = v.looseObject({
  detail: v.string(),
  parameter: v.optional(v.string()),
  resource_id: v.optional(v.string()),
  resource_type: v.string(),
  section: v.optional(v.string()),
  status: v.optional(v.pipe(v.number(), v.integer())),
  title: v.string(),
  type: v.literal("https://api.x.com/2/problems/not-authorized-for-resource"),
  value: v.optional(v.string()),
});

export type Note = {
  readonly id?: string;
  readonly info?: NoteInfo;
  readonly scoring_status?: NoteScoringStatus;
  readonly status?: string;
  readonly test_result?: NoteTestResult;
};
export const NoteSchema: v.GenericSchema<unknown, Note> = v.looseObject({
  id: v.optional(v.string()),
  info: v.optional(v.lazy(() => NoteInfoSchema)),
  scoring_status: v.optional(v.lazy(() => NoteScoringStatusSchema)),
  status: v.optional(v.string()),
  test_result: v.optional(v.lazy(() => NoteTestResultSchema)),
});

export type NoteId = string;
export const NoteIdSchema: v.GenericSchema<unknown, NoteId> = v.string();

/** Details about the Community Note's content, classification and source. */
export type NoteInfo = {
  readonly classification?: string | null;
  readonly misleading_tags?: ReadonlyArray<string> | null;
  readonly post_id?: string | null;
  readonly rating_status?: string | null;
  readonly text?: string | null;
  readonly trustworthy_sources?: boolean | null;
};
export const NoteInfoSchema: v.GenericSchema<unknown, NoteInfo> = v.looseObject({
  classification: v.optional(v.nullable(v.string())),
  misleading_tags: v.optional(v.nullable(v.array(v.string()))),
  post_id: v.optional(v.nullable(v.string())),
  rating_status: v.optional(v.nullable(v.string())),
  text: v.optional(v.nullable(v.string())),
  trustworthy_sources: v.optional(v.nullable(v.boolean())),
});

/** Per-model scoring breakdown for the Community Note. */
export type NoteScoringStatus = {
  readonly has_access?: boolean | null;
  readonly rating_counts_per_model?: ReadonlyArray<unknown> | null;
};
export const NoteScoringStatusSchema: v.GenericSchema<unknown, NoteScoringStatus> = v.looseObject({
  has_access: v.optional(v.nullable(v.boolean())),
  rating_counts_per_model: v.optional(v.nullable(v.array(v.unknown()))),
});

/** AI evaluation results for the Community Note (returned in test mode). */
export type NoteTestResult = {
  readonly evaluation_outcome?: ReadonlyArray<unknown> | null;
};
export const NoteTestResultSchema: v.GenericSchema<unknown, NoteTestResult> = v.looseObject({
  evaluation_outcome: v.optional(v.nullable(v.array(v.unknown()))),
});

export type PersonalizedTrend = {
  readonly category?: string;
  readonly post_count?: string;
  readonly trend_name?: string;
  readonly trending_since?: string;
};
export const PersonalizedTrendSchema: v.GenericSchema<unknown, PersonalizedTrend> = v.looseObject({
  category: v.optional(v.string()),
  post_count: v.optional(v.string()),
  trend_name: v.optional(v.string()),
  trending_since: v.optional(v.string()),
});

export type PinListRequest = {
  readonly list_id: string;
};
export const PinListRequestSchema: v.GenericSchema<unknown, PinListRequest> = v.looseObject({
  list_id: v.string(),
});

export type PinListResponse = {
  readonly data?: PinListResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const PinListResponseSchema: v.GenericSchema<unknown, PinListResponse> = v.looseObject({
  data: v.optional(v.lazy(() => PinListResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type PinListResponseData = {
  readonly pinned: boolean;
};
export const PinListResponseDataSchema: v.GenericSchema<unknown, PinListResponseData> = v.looseObject({
  pinned: v.boolean(),
});

export type Place = {
  readonly contained_within?: PlaceContainedWithin;
  readonly country?: string;
  readonly country_code?: string;
  readonly full_name?: string;
  readonly geo?: PlaceGeo;
  readonly id?: string;
  readonly name?: string;
  readonly place_type?: string;
};
export const PlaceSchema: v.GenericSchema<unknown, Place> = v.looseObject({
  contained_within: v.optional(v.lazy(() => PlaceContainedWithinSchema)),
  country: v.optional(v.string()),
  country_code: v.optional(v.string()),
  full_name: v.optional(v.string()),
  geo: v.optional(v.lazy(() => PlaceGeoSchema)),
  id: v.optional(v.string()),
  name: v.optional(v.string()),
  place_type: v.optional(v.string()),
});

export type PlaceContainedWithin = ReadonlyArray<string>;
export const PlaceContainedWithinSchema: v.GenericSchema<unknown, PlaceContainedWithin> = v.array(v.string());

/** The geographic location of this place, expressed as a GeoJSON Feature. */
export type PlaceGeo = {
  readonly bbox: ReadonlyArray<number>;
  readonly properties: unknown;
  readonly type: "Feature";
};
export const PlaceGeoSchema: v.GenericSchema<unknown, PlaceGeo> = v.looseObject({
  bbox: v.array(v.number()),
  properties: v.unknown(),
  type: v.literal("Feature"),
});

export type Poll = {
  readonly duration_minutes?: number;
  readonly end_datetime?: string;
  readonly id?: string;
  readonly options?: PollOptions;
  readonly voting_status?: string;
};
export const PollSchema: v.GenericSchema<unknown, Poll> = v.looseObject({
  duration_minutes: v.optional(v.pipe(v.number(), v.integer())),
  end_datetime: v.optional(v.string()),
  id: v.optional(v.string()),
  options: v.optional(v.lazy(() => PollOptionsSchema)),
  voting_status: v.optional(v.string()),
});

export type PollOptions = ReadonlyArray<unknown>;
export const PollOptionsSchema: v.GenericSchema<unknown, PollOptions> = v.array(v.unknown());

export type Post = {
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
};
export const PostSchema: v.GenericSchema<unknown, Post> = v.looseObject({
  article: v.optional(v.unknown()),
  article_title: v.optional(v.unknown()),
  attachments: v.optional(v.lazy(() => PostAttachmentsSchema)),
  author_id: v.optional(v.string()),
  card_uri: v.optional(v.string()),
  community_id: v.optional(v.string()),
  context_annotations: v.optional(v.lazy(() => PostContextAnnotationsSchema)),
  conversation_id: v.optional(v.string()),
  created_at: v.optional(v.pipe(v.string(), v.isoTimestamp())),
  display_text_range: v.optional(v.lazy(() => PostDisplayTextRangeSchema)),
  edit_controls: v.optional(v.lazy(() => PostEditControlsSchema)),
  edit_history_post_ids: v.optional(v.array(v.string())),
  entities: v.optional(v.lazy(() => PostEntitiesSchema)),
  geo: v.optional(v.lazy(() => PostGeoSchema)),
  id: v.optional(v.string()),
  in_reply_to_user_id: v.optional(v.string()),
  lang: v.optional(v.string()),
  matched_media_notes: v.optional(v.lazy(() => PostMatchedMediaNotesSchema)),
  media_metadata: v.optional(v.lazy(() => PostMediaMetadataSchema)),
  non_public_metrics: v.optional(v.unknown()),
  note_post: v.optional(v.lazy(() => PostNotePostSchema)),
  note_request_suggestions: v.optional(v.lazy(() => PostNoteRequestSuggestionsSchema)),
  organic_metrics: v.optional(v.unknown()),
  paid_partnership: v.optional(v.boolean()),
  possibly_sensitive: v.optional(v.boolean()),
  promoted_metrics: v.optional(v.unknown()),
  public_metrics: v.optional(v.lazy(() => PostPublicMetricsSchema)),
  referenced_posts: v.optional(v.lazy(() => PostReferencedPostsSchema)),
  reply_settings: v.optional(v.string()),
  scopes: v.optional(v.lazy(() => PostScopesSchema)),
  source: v.optional(v.string()),
  suggested_source_links: v.optional(v.lazy(() => PostSuggestedSourceLinksSchema)),
  suggested_source_links_with_counts: v.optional(v.lazy(() => PostSuggestedSourceLinksWithCountsSchema)),
  text: v.optional(v.string()),
  username: v.optional(v.string()),
  withheld: v.optional(v.lazy(() => PostWithheldSchema)),
});

/** Specifies the type of attachments (if any) present in this Post. */
export type PostAttachments = {
  readonly media_keys?: ReadonlyArray<string> | null;
  readonly media_source_tweet_id?: ReadonlyArray<string> | null;
  readonly poll_ids?: ReadonlyArray<string> | null;
};
export const PostAttachmentsSchema: v.GenericSchema<unknown, PostAttachments> = v.looseObject({
  media_keys: v.optional(v.nullable(v.array(v.string()))),
  media_source_tweet_id: v.optional(v.nullable(v.array(v.string()))),
  poll_ids: v.optional(v.nullable(v.array(v.string()))),
});

export type PostComplianceData = PostDeleteComplianceSchema | PostWithheldComplianceSchema | PostDropComplianceSchema | PostUndropComplianceSchema | PostEditComplianceSchema;
export const PostComplianceDataSchema: v.GenericSchema<unknown, PostComplianceData> = v.union([v.lazy(() => PostDeleteComplianceSchemaSchema), v.lazy(() => PostWithheldComplianceSchemaSchema), v.lazy(() => PostDropComplianceSchemaSchema), v.lazy(() => PostUndropComplianceSchemaSchema), v.lazy(() => PostEditComplianceSchemaSchema)]);

export type PostComplianceSchema = {
  readonly event_at: string;
  readonly quote_tweet_id?: PostId;
  readonly tweet: unknown;
};
export const PostComplianceSchemaSchema: v.GenericSchema<unknown, PostComplianceSchema> = v.looseObject({
  event_at: v.pipe(v.string(), v.isoTimestamp()),
  quote_tweet_id: v.optional(v.lazy(() => PostIdSchema)),
  tweet: v.unknown(),
});

export type PostContextAnnotations = ReadonlyArray<unknown>;
export const PostContextAnnotationsSchema: v.GenericSchema<unknown, PostContextAnnotations> = v.array(v.unknown());

/** The identity of a deleted Post. */
export type PostDeleteActivityResponsePayload = {
  readonly author_id: UserId;
  readonly id: PostId;
};
export const PostDeleteActivityResponsePayloadSchema: v.GenericSchema<unknown, PostDeleteActivityResponsePayload> = v.looseObject({
  author_id: v.lazy(() => UserIdSchema),
  id: v.lazy(() => PostIdSchema),
});

export type PostDeleteComplianceSchema = {
  readonly delete: PostComplianceSchema;
};
export const PostDeleteComplianceSchemaSchema: v.GenericSchema<unknown, PostDeleteComplianceSchema> = v.looseObject({
  delete: v.lazy(() => PostComplianceSchemaSchema),
});

export type PostDisplayTextRange = ReadonlyArray<number>;
export const PostDisplayTextRangeSchema: v.GenericSchema<unknown, PostDisplayTextRange> = v.array(v.pipe(v.number(), v.integer()));

export type PostDropComplianceSchema = {
  readonly drop: PostComplianceSchema;
};
export const PostDropComplianceSchemaSchema: v.GenericSchema<unknown, PostDropComplianceSchema> = v.looseObject({
  drop: v.lazy(() => PostComplianceSchemaSchema),
});

export type PostEditComplianceObjectSchema = {
  readonly edit_tweet_ids: ReadonlyArray<PostId>;
  readonly event_at: string;
  readonly initial_tweet_id: PostId;
  readonly tweet: unknown;
};
export const PostEditComplianceObjectSchemaSchema: v.GenericSchema<unknown, PostEditComplianceObjectSchema> = v.looseObject({
  edit_tweet_ids: v.array(v.lazy(() => PostIdSchema)),
  event_at: v.pipe(v.string(), v.isoTimestamp()),
  initial_tweet_id: v.lazy(() => PostIdSchema),
  tweet: v.unknown(),
});

export type PostEditComplianceSchema = {
  readonly tweet_edit: PostEditComplianceObjectSchema;
};
export const PostEditComplianceSchemaSchema: v.GenericSchema<unknown, PostEditComplianceSchema> = v.looseObject({
  tweet_edit: v.lazy(() => PostEditComplianceObjectSchemaSchema),
});

/** Indicates how much longer (if at all) this Post can be edited. */
export type PostEditControls = {
  readonly editable_until?: string | null;
  readonly edits_remaining?: number | null;
  readonly is_edit_eligible?: boolean | null;
};
export const PostEditControlsSchema: v.GenericSchema<unknown, PostEditControls> = v.looseObject({
  editable_until: v.optional(v.nullable(v.string())),
  edits_remaining: v.optional(v.nullable(v.pipe(v.number(), v.integer()))),
  is_edit_eligible: v.optional(v.nullable(v.boolean())),
});

/** A list of metadata entities (hashtags, mentions, URLs) found in the Post text. */
export type PostEntities = {
  readonly cashtags?: ReadonlyArray<unknown> | null;
  readonly hashtags?: ReadonlyArray<unknown> | null;
  readonly mentions?: ReadonlyArray<unknown> | null;
  readonly urls?: ReadonlyArray<unknown> | null;
};
export const PostEntitiesSchema: v.GenericSchema<unknown, PostEntities> = v.looseObject({
  cashtags: v.optional(v.nullable(v.array(v.unknown()))),
  hashtags: v.optional(v.nullable(v.array(v.unknown()))),
  mentions: v.optional(v.nullable(v.array(v.unknown()))),
  urls: v.optional(v.nullable(v.array(v.unknown()))),
});

/** The location tagged on the Post, if the user provided one. */
export type PostGeo = {
  readonly coordinates?: unknown | null;
  readonly place_id?: string | null;
};
export const PostGeoSchema: v.GenericSchema<unknown, PostGeo> = v.looseObject({
  coordinates: v.optional(v.nullable(v.unknown())),
  place_id: v.optional(v.nullable(v.string())),
});

export type PostId = string;
export const PostIdSchema: v.GenericSchema<unknown, PostId> = v.string();

export type PostLabelData = PostNoticeSchema | PostUnviewableSchema;
export const PostLabelDataSchema: v.GenericSchema<unknown, PostLabelData> = v.union([v.lazy(() => PostNoticeSchemaSchema), v.lazy(() => PostUnviewableSchemaSchema)]);

export type PostMatchedMediaNotes = ReadonlyArray<unknown>;
export const PostMatchedMediaNotesSchema: v.GenericSchema<unknown, PostMatchedMediaNotes> = v.array(v.unknown());

export type PostMediaMetadata = ReadonlyArray<unknown>;
export const PostMediaMetadataSchema: v.GenericSchema<unknown, PostMediaMetadata> = v.array(v.unknown());

/** The full content of the Post, including text beyond 280 characters. */
export type PostNotePost = {
  readonly entities?: unknown | null;
  readonly text: string;
};
export const PostNotePostSchema: v.GenericSchema<unknown, PostNotePost> = v.looseObject({
  entities: v.optional(v.nullable(v.unknown())),
  text: v.string(),
});

export type PostNoteRequestSuggestions = ReadonlyArray<unknown>;
export const PostNoteRequestSuggestionsSchema: v.GenericSchema<unknown, PostNoteRequestSuggestions> = v.array(v.unknown());

export type PostNotice = {
  readonly application: string;
  readonly details?: string;
  readonly event_at: string;
  readonly event_type: string;
  readonly extended_details_url?: string;
  readonly label_title?: string;
  readonly tweet: unknown;
};
export const PostNoticeSchema: v.GenericSchema<unknown, PostNotice> = v.looseObject({
  application: v.string(),
  details: v.optional(v.string()),
  event_at: v.pipe(v.string(), v.isoTimestamp()),
  event_type: v.string(),
  extended_details_url: v.optional(v.string()),
  label_title: v.optional(v.string()),
  tweet: v.unknown(),
});

export type PostNoticeSchema = {
  readonly public_tweet_notice: PostNotice;
};
export const PostNoticeSchemaSchema: v.GenericSchema<unknown, PostNoticeSchema> = v.looseObject({
  public_tweet_notice: v.lazy(() => PostNoticeSchema),
});

/** Engagement metrics for the Post at the time of the request. */
export type PostPublicMetrics = {
  readonly bookmark_count: number;
  readonly impression_count: number;
  readonly like_count: number;
  readonly quote_count: number;
  readonly reply_count: number;
  readonly repost_count: number;
};
export const PostPublicMetricsSchema: v.GenericSchema<unknown, PostPublicMetrics> = v.looseObject({
  bookmark_count: v.pipe(v.number(), v.integer()),
  impression_count: v.pipe(v.number(), v.integer()),
  like_count: v.pipe(v.number(), v.integer()),
  quote_count: v.pipe(v.number(), v.integer()),
  reply_count: v.pipe(v.number(), v.integer()),
  repost_count: v.pipe(v.number(), v.integer()),
});

export type PostReferencedPosts = ReadonlyArray<unknown>;
export const PostReferencedPostsSchema: v.GenericSchema<unknown, PostReferencedPosts> = v.array(v.unknown());

/** The scopes for this Post. */
export type PostScopes = {
  readonly followers: boolean;
};
export const PostScopesSchema: v.GenericSchema<unknown, PostScopes> = v.looseObject({
  followers: v.boolean(),
});

export type PostSuggestedSourceLinks = ReadonlyArray<string>;
export const PostSuggestedSourceLinksSchema: v.GenericSchema<unknown, PostSuggestedSourceLinks> = v.array(v.string());

export type PostSuggestedSourceLinksWithCounts = ReadonlyArray<unknown>;
export const PostSuggestedSourceLinksWithCountsSchema: v.GenericSchema<unknown, PostSuggestedSourceLinksWithCounts> = v.array(v.unknown());

export type PostTakedownComplianceSchema = {
  readonly event_at: string;
  readonly quote_tweet_id?: PostId;
  readonly tweet: unknown;
  readonly withheld_in_countries: ReadonlyArray<CountryCode>;
};
export const PostTakedownComplianceSchemaSchema: v.GenericSchema<unknown, PostTakedownComplianceSchema> = v.looseObject({
  event_at: v.pipe(v.string(), v.isoTimestamp()),
  quote_tweet_id: v.optional(v.lazy(() => PostIdSchema)),
  tweet: v.unknown(),
  withheld_in_countries: v.array(v.lazy(() => CountryCodeSchema)),
});

export type PostUndropComplianceSchema = {
  readonly undrop: PostComplianceSchema;
};
export const PostUndropComplianceSchemaSchema: v.GenericSchema<unknown, PostUndropComplianceSchema> = v.looseObject({
  undrop: v.lazy(() => PostComplianceSchemaSchema),
});

export type PostUnviewable = {
  readonly application: string;
  readonly event_at: string;
  readonly tweet: unknown;
};
export const PostUnviewableSchema: v.GenericSchema<unknown, PostUnviewable> = v.looseObject({
  application: v.string(),
  event_at: v.pipe(v.string(), v.isoTimestamp()),
  tweet: v.unknown(),
});

export type PostUnviewableSchema = {
  readonly public_tweet_unviewable: PostUnviewable;
};
export const PostUnviewableSchemaSchema: v.GenericSchema<unknown, PostUnviewableSchema> = v.looseObject({
  public_tweet_unviewable: v.lazy(() => PostUnviewableSchema),
});

/** Withholding details for withheld content. */
export type PostWithheld = {
  readonly copyright: boolean;
  readonly country_codes: ReadonlyArray<string>;
  readonly scope?: "post" | "user" | null;
};
export const PostWithheldSchema: v.GenericSchema<unknown, PostWithheld> = v.looseObject({
  copyright: v.boolean(),
  country_codes: v.array(v.string()),
  scope: v.optional(v.nullable(v.union([v.literal("post"), v.literal("user")]))),
});

export type PostWithheldComplianceSchema = {
  readonly withheld: PostTakedownComplianceSchema;
};
export const PostWithheldComplianceSchemaSchema: v.GenericSchema<unknown, PostWithheldComplianceSchema> = v.looseObject({
  withheld: v.lazy(() => PostTakedownComplianceSchemaSchema),
});

export type Problem = ResourceNotFoundProblem | InvalidRequestProblem | NotAuthorizedForResourceProblem | NotAuthorizedForFieldProblem | FieldUnauthorizedProblem | FieldHydrationFailureProblem | ResourceUnavailableProblem | DisallowedResourceProblem | InternalErrorProblem;
export const ProblemSchema: v.GenericSchema<unknown, Problem> = v.union([v.lazy(() => ResourceNotFoundProblemSchema), v.lazy(() => InvalidRequestProblemSchema), v.lazy(() => NotAuthorizedForResourceProblemSchema), v.lazy(() => NotAuthorizedForFieldProblemSchema), v.lazy(() => FieldUnauthorizedProblemSchema), v.lazy(() => FieldHydrationFailureProblemSchema), v.lazy(() => ResourceUnavailableProblemSchema), v.lazy(() => DisallowedResourceProblemSchema), v.lazy(() => InternalErrorProblemSchema)]);

export type ProfileUpdateActivityResponsePayload = {
  readonly after?: string;
  readonly before?: string;
};
export const ProfileUpdateActivityResponsePayloadSchema: v.GenericSchema<unknown, ProfileUpdateActivityResponsePayload> = v.looseObject({
  after: v.optional(v.string()),
  before: v.optional(v.string()),
});

export type PublicKey = {
  readonly identity_public_key_signature?: string;
  readonly juicebox_config?: unknown;
  readonly public_key?: string;
  readonly public_key_version?: string;
  readonly signing_public_key?: string;
};
export const PublicKeySchema: v.GenericSchema<unknown, PublicKey> = v.looseObject({
  identity_public_key_signature: v.optional(v.string()),
  juicebox_config: v.optional(v.unknown()),
  public_key: v.optional(v.string()),
  public_key_version: v.optional(v.string()),
  signing_public_key: v.optional(v.string()),
});

export type PublicKeyId = string;
export const PublicKeyIdSchema: v.GenericSchema<unknown, PublicKeyId> = v.string();

export type RemoveListsMemberByUserIdResponse = {
  readonly data?: RemoveListsMemberByUserIdResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const RemoveListsMemberByUserIdResponseSchema: v.GenericSchema<unknown, RemoveListsMemberByUserIdResponse> = v.looseObject({
  data: v.optional(v.lazy(() => RemoveListsMemberByUserIdResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type RemoveListsMemberByUserIdResponseData = {
  readonly is_member: boolean;
};
export const RemoveListsMemberByUserIdResponseDataSchema: v.GenericSchema<unknown, RemoveListsMemberByUserIdResponseData> = v.looseObject({
  is_member: v.boolean(),
});

export type RepostPostRequest = {
  readonly tweet_id: string;
};
export const RepostPostRequestSchema: v.GenericSchema<unknown, RepostPostRequest> = v.looseObject({
  tweet_id: v.string(),
});

export type RepostPostResponse = {
  readonly data?: RepostPostResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const RepostPostResponseSchema: v.GenericSchema<unknown, RepostPostResponse> = v.looseObject({
  data: v.optional(v.lazy(() => RepostPostResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type RepostPostResponseData = {
  readonly rest_id: string;
  readonly retweeted: boolean;
};
export const RepostPostResponseDataSchema: v.GenericSchema<unknown, RepostPostResponseData> = v.looseObject({
  rest_id: v.string(),
  retweeted: v.boolean(),
});

export type ResourceNotFoundProblem = {
  readonly detail: string;
  readonly parameter?: string;
  readonly resource_id?: string;
  readonly resource_type: string;
  readonly status?: number;
  readonly title: string;
  readonly type: "https://api.x.com/2/problems/resource-not-found";
  readonly value?: string;
};
export const ResourceNotFoundProblemSchema: v.GenericSchema<unknown, ResourceNotFoundProblem> = v.looseObject({
  detail: v.string(),
  parameter: v.optional(v.string()),
  resource_id: v.optional(v.string()),
  resource_type: v.string(),
  status: v.optional(v.pipe(v.number(), v.integer())),
  title: v.string(),
  type: v.literal("https://api.x.com/2/problems/resource-not-found"),
  value: v.optional(v.string()),
});

export type ResourceUnavailableProblem = {
  readonly detail: string;
  readonly resource_id?: string;
  readonly resource_type: string;
  readonly status?: number;
  readonly title: string;
  readonly type: "https://api.x.com/2/problems/resource-unavailable";
};
export const ResourceUnavailableProblemSchema: v.GenericSchema<unknown, ResourceUnavailableProblem> = v.looseObject({
  detail: v.string(),
  resource_id: v.optional(v.string()),
  resource_type: v.string(),
  status: v.optional(v.pipe(v.number(), v.integer())),
  title: v.string(),
  type: v.literal("https://api.x.com/2/problems/resource-unavailable"),
});

export type RuleId = string;
export const RuleIdSchema: v.GenericSchema<unknown, RuleId> = v.string();

export type RulesCount = {
  readonly all_project_client_apps?: RulesCountAllProjectClientApps;
  readonly cap_per_client_app?: string;
  readonly cap_per_project?: string;
  readonly client_app_rules_count?: RulesCountClientAppRulesCount;
  readonly project_rules_count?: string;
};
export const RulesCountSchema: v.GenericSchema<unknown, RulesCount> = v.looseObject({
  all_project_client_apps: v.optional(v.lazy(() => RulesCountAllProjectClientAppsSchema)),
  cap_per_client_app: v.optional(v.string()),
  cap_per_project: v.optional(v.string()),
  client_app_rules_count: v.optional(v.lazy(() => RulesCountClientAppRulesCountSchema)),
  project_rules_count: v.optional(v.string()),
});

export type RulesCountAllProjectClientApps = ReadonlyArray<unknown>;
export const RulesCountAllProjectClientAppsSchema: v.GenericSchema<unknown, RulesCountAllProjectClientApps> = v.array(v.unknown());

/** A count of filtered-stream rules for a single client application. */
export type RulesCountClientAppRulesCount = {
  readonly client_app_id?: string | null;
  readonly rule_count: number;
};
export const RulesCountClientAppRulesCountSchema: v.GenericSchema<unknown, RulesCountClientAppRulesCount> = v.looseObject({
  client_app_id: v.optional(v.nullable(v.string())),
  rule_count: v.pipe(v.number(), v.integer()),
});

export type RuleTag = string;
export const RuleTagSchema: v.GenericSchema<unknown, RuleTag> = v.string();

export type SearchCommunitiesResponse = {
  readonly data?: ReadonlyArray<Community>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly meta?: unknown;
};
export const SearchCommunitiesResponseSchema: v.GenericSchema<unknown, SearchCommunitiesResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => CommunitySchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  meta: v.optional(v.unknown()),
});

export type SearchCommunityNotesWrittenResponse = {
  readonly data?: ReadonlyArray<Note>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly meta?: unknown;
};
export const SearchCommunityNotesWrittenResponseSchema: v.GenericSchema<unknown, SearchCommunityNotesWrittenResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => NoteSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  meta: v.optional(v.unknown()),
});

export type SearchEligiblePostsResponse = {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
};
export const SearchEligiblePostsResponseSchema: v.GenericSchema<unknown, SearchEligiblePostsResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => PostSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
  meta: v.optional(v.unknown()),
});

export type SearchNewsResponse = {
  readonly data?: ReadonlyArray<News>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly meta?: unknown;
};
export const SearchNewsResponseSchema: v.GenericSchema<unknown, SearchNewsResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => NewsSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  meta: v.optional(v.unknown()),
});

export type SearchPostsAllResponse = {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
};
export const SearchPostsAllResponseSchema: v.GenericSchema<unknown, SearchPostsAllResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => PostSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
  meta: v.optional(v.unknown()),
});

export type SearchPostsRecentResponse = {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
};
export const SearchPostsRecentResponseSchema: v.GenericSchema<unknown, SearchPostsRecentResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => PostSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
  meta: v.optional(v.unknown()),
});

export type SearchSpacesResponse = {
  readonly data?: ReadonlyArray<Space>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
};
export const SearchSpacesResponseSchema: v.GenericSchema<unknown, SearchSpacesResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => SpaceSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
  meta: v.optional(v.unknown()),
});

export type SearchUsersResponse = {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
};
export const SearchUsersResponseSchema: v.GenericSchema<unknown, SearchUsersResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => UserSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
  meta: v.optional(v.unknown()),
});

export type SendBroadcastChatRequest = {
  readonly reply_to?: string;
  readonly text: string;
};
export const SendBroadcastChatRequestSchema: v.GenericSchema<unknown, SendBroadcastChatRequest> = v.looseObject({
  reply_to: v.optional(v.string()),
  text: v.string(),
});

export type SendBroadcastChatResponse = {
  readonly data?: SendBroadcastChatResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const SendBroadcastChatResponseSchema: v.GenericSchema<unknown, SendBroadcastChatResponse> = v.looseObject({
  data: v.optional(v.lazy(() => SendBroadcastChatResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type SendBroadcastChatResponseData = {
  readonly success: boolean;
  readonly timestamp: string;
};
export const SendBroadcastChatResponseDataSchema: v.GenericSchema<unknown, SendBroadcastChatResponseData> = v.looseObject({
  success: v.boolean(),
  timestamp: v.string(),
});

export type SendChatMessageRequest = {
  readonly conversation_token?: string;
  readonly encoded_message_create_event: string;
  readonly encoded_message_event_signature?: string;
  readonly message_id: string;
};
export const SendChatMessageRequestSchema: v.GenericSchema<unknown, SendChatMessageRequest> = v.looseObject({
  conversation_token: v.optional(v.string()),
  encoded_message_create_event: v.string(),
  encoded_message_event_signature: v.optional(v.string()),
  message_id: v.string(),
});

export type SendChatMessageResponse = {
  readonly data?: SendChatMessageResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const SendChatMessageResponseSchema: v.GenericSchema<unknown, SendChatMessageResponse> = v.looseObject({
  data: v.optional(v.lazy(() => SendChatMessageResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type SendChatMessageResponseData = {
  readonly encoded_message_event: string;
};
export const SendChatMessageResponseDataSchema: v.GenericSchema<unknown, SendChatMessageResponseData> = v.looseObject({
  encoded_message_event: v.string(),
});

export type SendChatTypingIndicatorResponse = {
  readonly data?: SendChatTypingIndicatorResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const SendChatTypingIndicatorResponseSchema: v.GenericSchema<unknown, SendChatTypingIndicatorResponse> = v.looseObject({
  data: v.optional(v.lazy(() => SendChatTypingIndicatorResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type SendChatTypingIndicatorResponseData = {
  readonly success: boolean;
};
export const SendChatTypingIndicatorResponseDataSchema: v.GenericSchema<unknown, SendChatTypingIndicatorResponseData> = v.looseObject({
  success: v.boolean(),
});

export type Space = {
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
};
export const SpaceSchema: v.GenericSchema<unknown, Space> = v.looseObject({
  created_at: v.optional(v.pipe(v.string(), v.isoTimestamp())),
  creator_id: v.optional(v.string()),
  ended_at: v.optional(v.pipe(v.string(), v.isoTimestamp())),
  host_ids: v.optional(v.lazy(() => SpaceHostIdsSchema)),
  id: v.optional(v.string()),
  invited_user_ids: v.optional(v.lazy(() => SpaceInvitedUserIdsSchema)),
  is_ticketed: v.optional(v.boolean()),
  lang: v.optional(v.string()),
  participant_count: v.optional(v.pipe(v.number(), v.integer())),
  scheduled_start: v.optional(v.pipe(v.string(), v.isoTimestamp())),
  speaker_ids: v.optional(v.lazy(() => SpaceSpeakerIdsSchema)),
  started_at: v.optional(v.pipe(v.string(), v.isoTimestamp())),
  state: v.optional(v.string()),
  subscriber_count: v.optional(v.pipe(v.number(), v.integer())),
  title: v.optional(v.string()),
  topic_ids: v.optional(v.lazy(() => SpaceTopicIdsSchema)),
  updated_at: v.optional(v.pipe(v.string(), v.isoTimestamp())),
});

export type SpaceHostIds = ReadonlyArray<string>;
export const SpaceHostIdsSchema: v.GenericSchema<unknown, SpaceHostIds> = v.array(v.string());

export type SpaceInvitedUserIds = ReadonlyArray<string>;
export const SpaceInvitedUserIdsSchema: v.GenericSchema<unknown, SpaceInvitedUserIds> = v.array(v.string());

export type SpaceSpeakerIds = ReadonlyArray<string>;
export const SpaceSpeakerIdsSchema: v.GenericSchema<unknown, SpaceSpeakerIds> = v.array(v.string());

export type SpaceTopicIds = ReadonlyArray<string>;
export const SpaceTopicIdsSchema: v.GenericSchema<unknown, SpaceTopicIds> = v.array(v.string());

export type StreamLabelsComplianceResponse = unknown | unknown;
export const StreamLabelsComplianceResponseSchema: v.GenericSchema<unknown, StreamLabelsComplianceResponse> = v.union([v.unknown(), v.unknown()]);

export type StreamLikesComplianceResponse = unknown | unknown;
export const StreamLikesComplianceResponseSchema: v.GenericSchema<unknown, StreamLikesComplianceResponse> = v.union([v.unknown(), v.unknown()]);

export type StreamLikesFirehoseResponse = {
  readonly data?: LikeWithPostAuthor;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
};
export const StreamLikesFirehoseResponseSchema: v.GenericSchema<unknown, StreamLikesFirehoseResponse> = v.looseObject({
  data: v.optional(v.lazy(() => LikeWithPostAuthorSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
});

export type StreamLikesSample10Response = {
  readonly data?: LikeWithPostAuthor;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
};
export const StreamLikesSample10ResponseSchema: v.GenericSchema<unknown, StreamLikesSample10Response> = v.looseObject({
  data: v.optional(v.lazy(() => LikeWithPostAuthorSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
});

export type StreamPostsComplianceResponse = unknown | unknown;
export const StreamPostsComplianceResponseSchema: v.GenericSchema<unknown, StreamPostsComplianceResponse> = v.union([v.unknown(), v.unknown()]);

export type StreamPostsFirehoseEnResponse = {
  readonly data?: Post;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
};
export const StreamPostsFirehoseEnResponseSchema: v.GenericSchema<unknown, StreamPostsFirehoseEnResponse> = v.looseObject({
  data: v.optional(v.lazy(() => PostSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
});

export type StreamPostsFirehoseJaResponse = {
  readonly data?: Post;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
};
export const StreamPostsFirehoseJaResponseSchema: v.GenericSchema<unknown, StreamPostsFirehoseJaResponse> = v.looseObject({
  data: v.optional(v.lazy(() => PostSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
});

export type StreamPostsFirehoseKoResponse = {
  readonly data?: Post;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
};
export const StreamPostsFirehoseKoResponseSchema: v.GenericSchema<unknown, StreamPostsFirehoseKoResponse> = v.looseObject({
  data: v.optional(v.lazy(() => PostSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
});

export type StreamPostsFirehosePtResponse = {
  readonly data?: Post;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
};
export const StreamPostsFirehosePtResponseSchema: v.GenericSchema<unknown, StreamPostsFirehosePtResponse> = v.looseObject({
  data: v.optional(v.lazy(() => PostSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
});

export type StreamPostsFirehoseResponse = {
  readonly data?: Post;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
};
export const StreamPostsFirehoseResponseSchema: v.GenericSchema<unknown, StreamPostsFirehoseResponse> = v.looseObject({
  data: v.optional(v.lazy(() => PostSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
});

/** A Tweet or error that can be returned by the streaming Tweet API. The values returned with a successful streamed Tweet includes the user provided rules that the Tweet matched. */
export type StreamPostsResponse = {
  readonly data?: Post;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly matching_rules?: ReadonlyArray<unknown>;
};
export const StreamPostsResponseSchema: v.GenericSchema<unknown, StreamPostsResponse> = v.looseObject({
  data: v.optional(v.lazy(() => PostSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
  matching_rules: v.optional(v.array(v.unknown())),
});

export type StreamPostsSample10Response = {
  readonly data?: Post;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
};
export const StreamPostsSample10ResponseSchema: v.GenericSchema<unknown, StreamPostsSample10Response> = v.looseObject({
  data: v.optional(v.lazy(() => PostSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
});

export type StreamPostsSampleResponse = {
  readonly data?: Post;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
};
export const StreamPostsSampleResponseSchema: v.GenericSchema<unknown, StreamPostsSampleResponse> = v.looseObject({
  data: v.optional(v.lazy(() => PostSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  includes: v.optional(v.lazy(() => ExpansionsSchema)),
});

export type StreamUsersComplianceResponse = unknown | unknown;
export const StreamUsersComplianceResponseSchema: v.GenericSchema<unknown, StreamUsersComplianceResponse> = v.union([v.unknown(), v.unknown()]);

export type Topic = {
  readonly description?: string;
  readonly id?: string;
  readonly name?: string;
};
export const TopicSchema: v.GenericSchema<unknown, Topic> = v.looseObject({
  description: v.optional(v.string()),
  id: v.optional(v.string()),
  name: v.optional(v.string()),
});

export type Trend = {
  readonly trend_name?: string;
  readonly tweet_count?: number;
};
export const TrendSchema: v.GenericSchema<unknown, Trend> = v.looseObject({
  trend_name: v.optional(v.string()),
  tweet_count: v.optional(v.pipe(v.number(), v.integer())),
});

export type UnblockUsersDmsResponse = {
  readonly data?: UnblockUsersDmsResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const UnblockUsersDmsResponseSchema: v.GenericSchema<unknown, UnblockUsersDmsResponse> = v.looseObject({
  data: v.optional(v.lazy(() => UnblockUsersDmsResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type UnblockUsersDmsResponseData = {
  readonly blocked: boolean;
};
export const UnblockUsersDmsResponseDataSchema: v.GenericSchema<unknown, UnblockUsersDmsResponseData> = v.looseObject({
  blocked: v.boolean(),
});

export type UnfollowListResponse = {
  readonly data?: UnfollowListResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const UnfollowListResponseSchema: v.GenericSchema<unknown, UnfollowListResponse> = v.looseObject({
  data: v.optional(v.lazy(() => UnfollowListResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type UnfollowListResponseData = {
  readonly following: boolean;
};
export const UnfollowListResponseDataSchema: v.GenericSchema<unknown, UnfollowListResponseData> = v.looseObject({
  following: v.boolean(),
});

export type UnfollowUserResponse = {
  readonly data?: UnfollowUserResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const UnfollowUserResponseSchema: v.GenericSchema<unknown, UnfollowUserResponse> = v.looseObject({
  data: v.optional(v.lazy(() => UnfollowUserResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type UnfollowUserResponseData = {
  readonly following: boolean;
};
export const UnfollowUserResponseDataSchema: v.GenericSchema<unknown, UnfollowUserResponseData> = v.looseObject({
  following: v.boolean(),
});

export type UnlikeComplianceSchema = {
  readonly event_at: string;
  readonly favorite: unknown;
};
export const UnlikeComplianceSchemaSchema: v.GenericSchema<unknown, UnlikeComplianceSchema> = v.looseObject({
  event_at: v.pipe(v.string(), v.isoTimestamp()),
  favorite: v.unknown(),
});

export type UnlikePostResponse = {
  readonly data?: UnlikePostResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const UnlikePostResponseSchema: v.GenericSchema<unknown, UnlikePostResponse> = v.looseObject({
  data: v.optional(v.lazy(() => UnlikePostResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type UnlikePostResponseData = {
  readonly liked: boolean;
};
export const UnlikePostResponseDataSchema: v.GenericSchema<unknown, UnlikePostResponseData> = v.looseObject({
  liked: v.boolean(),
});

export type UnmuteBroadcastChatUserResponse = {
  readonly data?: UnmuteBroadcastChatUserResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const UnmuteBroadcastChatUserResponseSchema: v.GenericSchema<unknown, UnmuteBroadcastChatUserResponse> = v.looseObject({
  data: v.optional(v.lazy(() => UnmuteBroadcastChatUserResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type UnmuteBroadcastChatUserResponseData = {
  readonly muted: boolean;
};
export const UnmuteBroadcastChatUserResponseDataSchema: v.GenericSchema<unknown, UnmuteBroadcastChatUserResponseData> = v.looseObject({
  muted: v.boolean(),
});

export type UnmuteUserResponse = {
  readonly data?: UnmuteUserResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const UnmuteUserResponseSchema: v.GenericSchema<unknown, UnmuteUserResponse> = v.looseObject({
  data: v.optional(v.lazy(() => UnmuteUserResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type UnmuteUserResponseData = {
  readonly muting: boolean;
};
export const UnmuteUserResponseDataSchema: v.GenericSchema<unknown, UnmuteUserResponseData> = v.looseObject({
  muting: v.boolean(),
});

export type UnpinListResponse = {
  readonly data?: UnpinListResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const UnpinListResponseSchema: v.GenericSchema<unknown, UnpinListResponse> = v.looseObject({
  data: v.optional(v.lazy(() => UnpinListResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type UnpinListResponseData = {
  readonly pinned: boolean;
};
export const UnpinListResponseDataSchema: v.GenericSchema<unknown, UnpinListResponseData> = v.looseObject({
  pinned: v.boolean(),
});

export type UnrepostPostResponse = {
  readonly data?: UnrepostPostResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const UnrepostPostResponseSchema: v.GenericSchema<unknown, UnrepostPostResponse> = v.looseObject({
  data: v.optional(v.lazy(() => UnrepostPostResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type UnrepostPostResponseData = {
  readonly retweeted: boolean;
};
export const UnrepostPostResponseDataSchema: v.GenericSchema<unknown, UnrepostPostResponseData> = v.looseObject({
  retweeted: v.boolean(),
});

export type UpdateActivitySubscriptionRequest = {
  readonly tag?: string;
  readonly webhook_id?: string;
};
export const UpdateActivitySubscriptionRequestSchema: v.GenericSchema<unknown, UpdateActivitySubscriptionRequest> = v.looseObject({
  tag: v.optional(v.string()),
  webhook_id: v.optional(v.string()),
});

export type UpdateActivitySubscriptionResponse = {
  readonly data?: UpdateActivitySubscriptionResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const UpdateActivitySubscriptionResponseSchema: v.GenericSchema<unknown, UpdateActivitySubscriptionResponse> = v.looseObject({
  data: v.optional(v.lazy(() => UpdateActivitySubscriptionResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type UpdateActivitySubscriptionResponseData = {
  readonly subscription?: UpdateActivitySubscriptionResponseDataSubscription;
  readonly total_subscriptions?: number;
};
export const UpdateActivitySubscriptionResponseDataSchema: v.GenericSchema<unknown, UpdateActivitySubscriptionResponseData> = v.looseObject({
  subscription: v.optional(v.lazy(() => UpdateActivitySubscriptionResponseDataSubscriptionSchema)),
  total_subscriptions: v.optional(v.pipe(v.number(), v.integer())),
});

export type UpdateActivitySubscriptionResponseDataSubscription = {
  readonly created_at?: string;
  readonly event_type?: string;
  readonly filter?: UpdateActivitySubscriptionResponseDataSubscriptionFilter;
  readonly subscription_id?: string;
  readonly tag?: string;
  readonly updated_at?: string;
  readonly webhook_id?: string;
};
export const UpdateActivitySubscriptionResponseDataSubscriptionSchema: v.GenericSchema<unknown, UpdateActivitySubscriptionResponseDataSubscription> = v.looseObject({
  created_at: v.optional(v.string()),
  event_type: v.optional(v.string()),
  filter: v.optional(v.lazy(() => UpdateActivitySubscriptionResponseDataSubscriptionFilterSchema)),
  subscription_id: v.optional(v.string()),
  tag: v.optional(v.string()),
  updated_at: v.optional(v.string()),
  webhook_id: v.optional(v.string()),
});

export type UpdateActivitySubscriptionResponseDataSubscriptionFilter = {
  readonly direction?: string;
  readonly keyword?: string;
  readonly user_id?: string;
};
export const UpdateActivitySubscriptionResponseDataSubscriptionFilterSchema: v.GenericSchema<unknown, UpdateActivitySubscriptionResponseDataSubscriptionFilter> = v.looseObject({
  direction: v.optional(v.string()),
  keyword: v.optional(v.string()),
  user_id: v.optional(v.string()),
});

export type UpdateListsRequest = {
  readonly description?: string;
  readonly name?: string;
  readonly private?: boolean;
};
export const UpdateListsRequestSchema: v.GenericSchema<unknown, UpdateListsRequest> = v.looseObject({
  description: v.optional(v.string()),
  name: v.optional(v.string()),
  private: v.optional(v.boolean()),
});

export type UpdateListsResponse = {
  readonly data?: UpdateListsResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const UpdateListsResponseSchema: v.GenericSchema<unknown, UpdateListsResponse> = v.looseObject({
  data: v.optional(v.lazy(() => UpdateListsResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type UpdateListsResponseData = {
  readonly updated: boolean;
};
export const UpdateListsResponseDataSchema: v.GenericSchema<unknown, UpdateListsResponseData> = v.looseObject({
  updated: v.boolean(),
});

export type UpdateRulesAdd = {
  readonly tag?: string;
  readonly value: string;
};
export const UpdateRulesAddSchema: v.GenericSchema<unknown, UpdateRulesAdd> = v.looseObject({
  tag: v.optional(v.string()),
  value: v.string(),
});

export type UpdateRulesDelete = {
  readonly ids?: ReadonlyArray<string>;
  readonly values?: ReadonlyArray<string>;
};
export const UpdateRulesDeleteSchema: v.GenericSchema<unknown, UpdateRulesDelete> = v.looseObject({
  ids: v.optional(v.array(v.string())),
  values: v.optional(v.array(v.string())),
});

export type UpdateRulesRequest = {
  readonly add?: ReadonlyArray<UpdateRulesAdd>;
  readonly delete?: UpdateRulesDelete;
};
export const UpdateRulesRequestSchema: v.GenericSchema<unknown, UpdateRulesRequest> = v.looseObject({
  add: v.optional(v.array(v.lazy(() => UpdateRulesAddSchema))),
  delete: v.optional(v.lazy(() => UpdateRulesDeleteSchema)),
});

export type UpdateRulesResponse = {
  readonly data?: ReadonlyArray<UpdateRulesResponseData>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly meta?: unknown;
};
export const UpdateRulesResponseSchema: v.GenericSchema<unknown, UpdateRulesResponse> = v.looseObject({
  data: v.optional(v.array(v.lazy(() => UpdateRulesResponseDataSchema))),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
  meta: v.optional(v.unknown()),
});

export type UpdateRulesResponseData = {
  readonly id?: string;
  readonly tag?: string;
  readonly value?: string;
};
export const UpdateRulesResponseDataSchema: v.GenericSchema<unknown, UpdateRulesResponseData> = v.looseObject({
  id: v.optional(v.string()),
  tag: v.optional(v.string()),
  value: v.optional(v.string()),
});

export type UpdateScheduledBroadcastRequest = {
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
};
export const UpdateScheduledBroadcastRequestSchema: v.GenericSchema<unknown, UpdateScheduledBroadcastRequest> = v.looseObject({
  available_for_replay: v.optional(v.boolean()),
  chat_option: v.optional(v.string()),
  description: v.optional(v.string()),
  is_locked: v.optional(v.boolean()),
  locale: v.optional(v.string()),
  manual_publish: v.optional(v.boolean()),
  roll_forward: v.optional(v.boolean()),
  scheduled_broadcast_id: v.string(),
  scheduled_end_ms: v.string(),
  scheduled_start_ms: v.string(),
  source_id: v.optional(v.string()),
  thumbnail_media_id: v.optional(v.string()),
  title: v.optional(v.string()),
});

export type UpdateScheduledBroadcastResponse = {
  readonly data?: UpdateScheduledBroadcastResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const UpdateScheduledBroadcastResponseSchema: v.GenericSchema<unknown, UpdateScheduledBroadcastResponse> = v.looseObject({
  data: v.optional(v.lazy(() => UpdateScheduledBroadcastResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type UpdateScheduledBroadcastResponseData = {
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
};
export const UpdateScheduledBroadcastResponseDataSchema: v.GenericSchema<unknown, UpdateScheduledBroadcastResponseData> = v.looseObject({
  available_for_replay: v.optional(v.boolean()),
  broadcast_id: v.optional(v.string()),
  chat_option: v.optional(v.string()),
  description: v.optional(v.string()),
  locale: v.optional(v.string()),
  manual_publish: v.optional(v.boolean()),
  recurring_schedule_id: v.optional(v.string()),
  scheduled_broadcast_id: v.optional(v.string()),
  scheduled_end_ms: v.optional(v.string()),
  scheduled_start_ms: v.optional(v.string()),
  source_id: v.optional(v.string()),
  state: v.optional(v.string()),
  telecast_id: v.optional(v.string()),
  thumbnail_media_id: v.optional(v.string()),
  title: v.optional(v.string()),
});

export type Usage = {
  readonly cap_reset_day?: number;
  readonly daily_client_app_usage?: UsageDailyClientAppUsage;
  readonly daily_project_usage?: UsageDailyProjectUsage;
  readonly project_cap?: string;
  readonly project_id?: string;
  readonly project_usage?: string;
};
export const UsageSchema: v.GenericSchema<unknown, Usage> = v.looseObject({
  cap_reset_day: v.optional(v.pipe(v.number(), v.integer())),
  daily_client_app_usage: v.optional(v.lazy(() => UsageDailyClientAppUsageSchema)),
  daily_project_usage: v.optional(v.lazy(() => UsageDailyProjectUsageSchema)),
  project_cap: v.optional(v.string()),
  project_id: v.optional(v.string()),
  project_usage: v.optional(v.string()),
});

export type UsageDailyClientAppUsage = ReadonlyArray<unknown>;
export const UsageDailyClientAppUsageSchema: v.GenericSchema<unknown, UsageDailyClientAppUsage> = v.array(v.unknown());

/** Project-level daily Post usage for the caller's project. */
export type UsageDailyProjectUsage = {
  readonly project_id?: string | null;
  readonly usage?: ReadonlyArray<unknown> | null;
};
export const UsageDailyProjectUsageSchema: v.GenericSchema<unknown, UsageDailyProjectUsage> = v.looseObject({
  project_id: v.optional(v.nullable(v.string())),
  usage: v.optional(v.nullable(v.array(v.unknown()))),
});

export type User = {
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
};
export const UserSchema: v.GenericSchema<unknown, User> = v.looseObject({
  affiliation: v.optional(v.lazy(() => UserAffiliationSchema)),
  confirmed_email: v.optional(v.string()),
  connection_status: v.optional(v.lazy(() => UserConnectionStatusSchema)),
  created_at: v.optional(v.pipe(v.string(), v.isoTimestamp())),
  description: v.optional(v.string()),
  entities: v.optional(v.lazy(() => UserEntitiesSchema)),
  id: v.optional(v.string()),
  is_identity_verified: v.optional(v.boolean()),
  location: v.optional(v.string()),
  most_recent_post_id: v.optional(v.string()),
  name: v.optional(v.string()),
  parody: v.optional(v.boolean()),
  pinned_post_id: v.optional(v.string()),
  profile_banner_url: v.optional(v.string()),
  profile_image_url: v.optional(v.string()),
  protected: v.optional(v.boolean()),
  public_metrics: v.optional(v.lazy(() => UserPublicMetricsSchema)),
  receives_your_dm: v.optional(v.boolean()),
  subscribes_to_you: v.optional(v.boolean()),
  subscription: v.optional(v.lazy(() => UserSubscriptionSchema)),
  subscription_type: v.optional(v.string()),
  url: v.optional(v.string()),
  username: v.optional(v.string()),
  verified: v.optional(v.boolean()),
  verified_followers_count: v.optional(v.pipe(v.number(), v.integer())),
  verified_type: v.optional(v.string()),
  withheld: v.optional(v.lazy(() => UserWithheldSchema)),
});

/** Metadata about a user's affiliation. */
export type UserAffiliation = {
  readonly badge_url?: string | null;
  readonly description?: string | null;
  readonly url?: string | null;
  readonly user_id?: ReadonlyArray<string> | null;
};
export const UserAffiliationSchema: v.GenericSchema<unknown, UserAffiliation> = v.looseObject({
  badge_url: v.optional(v.nullable(v.string())),
  description: v.optional(v.nullable(v.string())),
  url: v.optional(v.nullable(v.string())),
  user_id: v.optional(v.nullable(v.array(v.string()))),
});

export type UserComplianceData = UserProtectComplianceSchema | UserUnprotectComplianceSchema | UserDeleteComplianceSchema | UserUndeleteComplianceSchema | UserSuspendComplianceSchema | UserUnsuspendComplianceSchema | UserWithheldComplianceSchema | UserScrubGeoSchema | UserProfileModificationComplianceSchema;
export const UserComplianceDataSchema: v.GenericSchema<unknown, UserComplianceData> = v.union([v.lazy(() => UserProtectComplianceSchemaSchema), v.lazy(() => UserUnprotectComplianceSchemaSchema), v.lazy(() => UserDeleteComplianceSchemaSchema), v.lazy(() => UserUndeleteComplianceSchemaSchema), v.lazy(() => UserSuspendComplianceSchemaSchema), v.lazy(() => UserUnsuspendComplianceSchemaSchema), v.lazy(() => UserWithheldComplianceSchemaSchema), v.lazy(() => UserScrubGeoSchemaSchema), v.lazy(() => UserProfileModificationComplianceSchemaSchema)]);

export type UserComplianceSchema = {
  readonly event_at: string;
  readonly user: unknown;
};
export const UserComplianceSchemaSchema: v.GenericSchema<unknown, UserComplianceSchema> = v.looseObject({
  event_at: v.pipe(v.string(), v.isoTimestamp()),
  user: v.unknown(),
});

export type UserConnectionStatus = ReadonlyArray<"blocking" | "follow_request_received" | "follow_request_sent" | "followed_by" | "following" | "muting">;
export const UserConnectionStatusSchema: v.GenericSchema<unknown, UserConnectionStatus> = v.array(v.union([v.literal("blocking"), v.literal("follow_request_received"), v.literal("follow_request_sent"), v.literal("followed_by"), v.literal("following"), v.literal("muting")]));

export type UserDeleteComplianceSchema = {
  readonly user_delete: UserComplianceSchema;
};
export const UserDeleteComplianceSchemaSchema: v.GenericSchema<unknown, UserDeleteComplianceSchema> = v.looseObject({
  user_delete: v.lazy(() => UserComplianceSchemaSchema),
});

/** A list of metadata found in the User's profile description. */
export type UserEntities = {
  readonly description?: unknown | null;
  readonly url?: unknown | null;
};
export const UserEntitiesSchema: v.GenericSchema<unknown, UserEntities> = v.looseObject({
  description: v.optional(v.nullable(v.unknown())),
  url: v.optional(v.nullable(v.unknown())),
});

export type UserId = string;
export const UserIdSchema: v.GenericSchema<unknown, UserId> = v.string();

export type UserProfileModificationComplianceSchema = {
  readonly user_profile_modification: UserProfileModificationObjectSchema;
};
export const UserProfileModificationComplianceSchemaSchema: v.GenericSchema<unknown, UserProfileModificationComplianceSchema> = v.looseObject({
  user_profile_modification: v.lazy(() => UserProfileModificationObjectSchemaSchema),
});

export type UserProfileModificationObjectSchema = {
  readonly event_at: string;
  readonly new_value: string;
  readonly profile_field: string;
  readonly user: unknown;
};
export const UserProfileModificationObjectSchemaSchema: v.GenericSchema<unknown, UserProfileModificationObjectSchema> = v.looseObject({
  event_at: v.pipe(v.string(), v.isoTimestamp()),
  new_value: v.string(),
  profile_field: v.string(),
  user: v.unknown(),
});

export type UserProtectComplianceSchema = {
  readonly user_protect: UserComplianceSchema;
};
export const UserProtectComplianceSchemaSchema: v.GenericSchema<unknown, UserProtectComplianceSchema> = v.looseObject({
  user_protect: v.lazy(() => UserComplianceSchemaSchema),
});

/** A list of metrics for this User. */
export type UserPublicMetrics = {
  readonly followers_count: number;
  readonly following_count: number;
  readonly like_count?: number | null;
  readonly listed_count: number;
  readonly media_count?: number | null;
  readonly post_count: number;
};
export const UserPublicMetricsSchema: v.GenericSchema<unknown, UserPublicMetrics> = v.looseObject({
  followers_count: v.pipe(v.number(), v.integer()),
  following_count: v.pipe(v.number(), v.integer()),
  like_count: v.optional(v.nullable(v.pipe(v.number(), v.integer()))),
  listed_count: v.pipe(v.number(), v.integer()),
  media_count: v.optional(v.nullable(v.pipe(v.number(), v.integer()))),
  post_count: v.pipe(v.number(), v.integer()),
});

export type UserScrubGeoObjectSchema = {
  readonly event_at: string;
  readonly up_to_tweet_id: PostId;
  readonly user: unknown;
};
export const UserScrubGeoObjectSchemaSchema: v.GenericSchema<unknown, UserScrubGeoObjectSchema> = v.looseObject({
  event_at: v.pipe(v.string(), v.isoTimestamp()),
  up_to_tweet_id: v.lazy(() => PostIdSchema),
  user: v.unknown(),
});

export type UserScrubGeoSchema = {
  readonly scrub_geo: UserScrubGeoObjectSchema;
};
export const UserScrubGeoSchemaSchema: v.GenericSchema<unknown, UserScrubGeoSchema> = v.looseObject({
  scrub_geo: v.lazy(() => UserScrubGeoObjectSchemaSchema),
});

/** The subscription relationship between this User and you. */
export type UserSubscription = {
  readonly subscribes_to_you: boolean;
};
export const UserSubscriptionSchema: v.GenericSchema<unknown, UserSubscription> = v.looseObject({
  subscribes_to_you: v.boolean(),
});

export type UserSuspendComplianceSchema = {
  readonly user_suspend: UserComplianceSchema;
};
export const UserSuspendComplianceSchemaSchema: v.GenericSchema<unknown, UserSuspendComplianceSchema> = v.looseObject({
  user_suspend: v.lazy(() => UserComplianceSchemaSchema),
});

export type UserTakedownComplianceSchema = {
  readonly event_at: string;
  readonly user: unknown;
  readonly withheld_in_countries: ReadonlyArray<CountryCode>;
};
export const UserTakedownComplianceSchemaSchema: v.GenericSchema<unknown, UserTakedownComplianceSchema> = v.looseObject({
  event_at: v.pipe(v.string(), v.isoTimestamp()),
  user: v.unknown(),
  withheld_in_countries: v.array(v.lazy(() => CountryCodeSchema)),
});

export type UserUndeleteComplianceSchema = {
  readonly user_undelete: UserComplianceSchema;
};
export const UserUndeleteComplianceSchemaSchema: v.GenericSchema<unknown, UserUndeleteComplianceSchema> = v.looseObject({
  user_undelete: v.lazy(() => UserComplianceSchemaSchema),
});

export type UserUnprotectComplianceSchema = {
  readonly user_unprotect: UserComplianceSchema;
};
export const UserUnprotectComplianceSchemaSchema: v.GenericSchema<unknown, UserUnprotectComplianceSchema> = v.looseObject({
  user_unprotect: v.lazy(() => UserComplianceSchemaSchema),
});

export type UserUnsuspendComplianceSchema = {
  readonly user_unsuspend: UserComplianceSchema;
};
export const UserUnsuspendComplianceSchemaSchema: v.GenericSchema<unknown, UserUnsuspendComplianceSchema> = v.looseObject({
  user_unsuspend: v.lazy(() => UserComplianceSchemaSchema),
});

/** Withholding details for withheld content. */
export type UserWithheld = {
  readonly country_codes?: ReadonlyArray<string> | null;
  readonly scope?: "user" | null;
};
export const UserWithheldSchema: v.GenericSchema<unknown, UserWithheld> = v.looseObject({
  country_codes: v.optional(v.nullable(v.array(v.string()))),
  scope: v.optional(v.nullable(v.literal("user"))),
});

export type UserWithheldComplianceSchema = {
  readonly user_withheld: UserTakedownComplianceSchema;
};
export const UserWithheldComplianceSchemaSchema: v.GenericSchema<unknown, UserWithheldComplianceSchema> = v.looseObject({
  user_withheld: v.lazy(() => UserTakedownComplianceSchemaSchema),
});

export type ValidateAccountActivitySubscriptionResponse = {
  readonly data?: ValidateAccountActivitySubscriptionResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const ValidateAccountActivitySubscriptionResponseSchema: v.GenericSchema<unknown, ValidateAccountActivitySubscriptionResponse> = v.looseObject({
  data: v.optional(v.lazy(() => ValidateAccountActivitySubscriptionResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type ValidateAccountActivitySubscriptionResponseData = {
  readonly subscribed: boolean;
};
export const ValidateAccountActivitySubscriptionResponseDataSchema: v.GenericSchema<unknown, ValidateAccountActivitySubscriptionResponseData> = v.looseObject({
  subscribed: v.boolean(),
});

export type ValidateWebhooksResponse = {
  readonly data?: ValidateWebhooksResponseData;
  readonly errors?: ReadonlyArray<Problem>;
};
export const ValidateWebhooksResponseSchema: v.GenericSchema<unknown, ValidateWebhooksResponse> = v.looseObject({
  data: v.optional(v.lazy(() => ValidateWebhooksResponseDataSchema)),
  errors: v.optional(v.array(v.lazy(() => ProblemSchema))),
});

export type ValidateWebhooksResponseData = {
  readonly valid: boolean;
};
export const ValidateWebhooksResponseDataSchema: v.GenericSchema<unknown, ValidateWebhooksResponseData> = v.looseObject({
  valid: v.boolean(),
});

export type WebhookConfig = {
  readonly created_at?: string;
  readonly id?: string;
  readonly url?: string;
  readonly valid?: boolean;
};
export const WebhookConfigSchema: v.GenericSchema<unknown, WebhookConfig> = v.looseObject({
  created_at: v.optional(v.string()),
  id: v.optional(v.string()),
  url: v.optional(v.string()),
  valid: v.optional(v.boolean()),
});

export type WebhookConfigId = string;
export const WebhookConfigIdSchema: v.GenericSchema<unknown, WebhookConfigId> = v.string();
