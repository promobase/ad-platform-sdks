// This file is generated. Do not edit by hand.
import { Schema } from "effect";

export type ActivityEventId = string;
export type ActivityEventIdEncoded = string;
export const ActivityEventId: Schema.Schema<ActivityEventId, ActivityEventIdEncoded, never> = Schema.String;

export type ActivityStreamingResponsePayload = ProfileUpdateActivityResponsePayload | NewsActivityResponsePayload | FollowActivityResponsePayload | Post | PostDeleteActivityResponsePayload | LikeWithPostAuthor;
export type ActivityStreamingResponsePayloadEncoded = ProfileUpdateActivityResponsePayloadEncoded | NewsActivityResponsePayloadEncoded | FollowActivityResponsePayloadEncoded | PostEncoded | PostDeleteActivityResponsePayloadEncoded | LikeWithPostAuthorEncoded;
export const ActivityStreamingResponsePayload: Schema.Schema<ActivityStreamingResponsePayload, ActivityStreamingResponsePayloadEncoded, never> = Schema.Union(Schema.suspend(() => ProfileUpdateActivityResponsePayload), Schema.suspend(() => NewsActivityResponsePayload), Schema.suspend(() => FollowActivityResponsePayload), Schema.suspend(() => Post), Schema.suspend(() => PostDeleteActivityResponsePayload), Schema.suspend(() => LikeWithPostAuthor));

/** An activity event or error that can be returned by the x activity streaming API. */
export interface ActivityStreamResponse {
  readonly data?: unknown;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface ActivityStreamResponseEncoded {
  readonly data?: unknown;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const ActivityStreamResponse: Schema.Schema<ActivityStreamResponse, ActivityStreamResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Unknown),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

/** An XAA subscription filter. */
export interface ActivitySubscriptionFilter {
  readonly direction?: "inbound" | "outbound";
  readonly keyword?: Keyword;
  readonly user_id?: UserId;
}
export interface ActivitySubscriptionFilterEncoded {
  readonly direction?: "inbound" | "outbound";
  readonly keyword?: KeywordEncoded;
  readonly user_id?: UserIdEncoded;
}
export const ActivitySubscriptionFilter: Schema.Schema<ActivitySubscriptionFilter, ActivitySubscriptionFilterEncoded, never> = Schema.Struct({
  direction: Schema.optional(Schema.Union(Schema.Literal("inbound"), Schema.Literal("outbound"))),
  keyword: Schema.optional(Schema.suspend(() => Keyword)),
  user_id: Schema.optional(Schema.suspend(() => UserId)),
});

export interface AddChatGroupMembersActionSignatures {
  readonly encoded_message_event_detail: string;
  readonly message_event_signature: AddChatGroupMembersActionSignaturesMessageEventSignature;
  readonly message_id: string;
  readonly signature_payload?: string;
}
export interface AddChatGroupMembersActionSignaturesEncoded {
  readonly encoded_message_event_detail: string;
  readonly message_event_signature: AddChatGroupMembersActionSignaturesMessageEventSignatureEncoded;
  readonly message_id: string;
  readonly signature_payload?: string;
}
export const AddChatGroupMembersActionSignatures: Schema.Schema<AddChatGroupMembersActionSignatures, AddChatGroupMembersActionSignaturesEncoded, never> = Schema.Struct({
  encoded_message_event_detail: Schema.String,
  message_event_signature: Schema.suspend(() => AddChatGroupMembersActionSignaturesMessageEventSignature),
  message_id: Schema.String,
  signature_payload: Schema.optional(Schema.String),
});

export interface AddChatGroupMembersActionSignaturesMessageEventSignature {
  readonly message_signing_key_info_list?: ReadonlyArray<AddChatGroupMembersActionSignaturesMessageEventSignatureMessageSigningKeyInfoList>;
  readonly public_key_version: string;
  readonly signature: string;
  readonly signature_version: string;
  readonly signing_public_key?: string;
}
export interface AddChatGroupMembersActionSignaturesMessageEventSignatureEncoded {
  readonly message_signing_key_info_list?: ReadonlyArray<AddChatGroupMembersActionSignaturesMessageEventSignatureMessageSigningKeyInfoListEncoded>;
  readonly public_key_version: string;
  readonly signature: string;
  readonly signature_version: string;
  readonly signing_public_key?: string;
}
export const AddChatGroupMembersActionSignaturesMessageEventSignature: Schema.Schema<AddChatGroupMembersActionSignaturesMessageEventSignature, AddChatGroupMembersActionSignaturesMessageEventSignatureEncoded, never> = Schema.Struct({
  message_signing_key_info_list: Schema.optional(Schema.Array(Schema.suspend(() => AddChatGroupMembersActionSignaturesMessageEventSignatureMessageSigningKeyInfoList))),
  public_key_version: Schema.String,
  signature: Schema.String,
  signature_version: Schema.String,
  signing_public_key: Schema.optional(Schema.String),
});

export interface AddChatGroupMembersActionSignaturesMessageEventSignatureMessageSigningKeyInfoList {
  readonly member_id?: string;
  readonly public_key_version?: string;
  readonly signing_public_key?: string;
}
export interface AddChatGroupMembersActionSignaturesMessageEventSignatureMessageSigningKeyInfoListEncoded {
  readonly member_id?: string;
  readonly public_key_version?: string;
  readonly signing_public_key?: string;
}
export const AddChatGroupMembersActionSignaturesMessageEventSignatureMessageSigningKeyInfoList: Schema.Schema<AddChatGroupMembersActionSignaturesMessageEventSignatureMessageSigningKeyInfoList, AddChatGroupMembersActionSignaturesMessageEventSignatureMessageSigningKeyInfoListEncoded, never> = Schema.Struct({
  member_id: Schema.optional(Schema.String),
  public_key_version: Schema.optional(Schema.String),
  signing_public_key: Schema.optional(Schema.String),
});

export interface AddChatGroupMembersConversationParticipantKeys {
  readonly encrypted_conversation_key?: string;
  readonly public_key_version?: string;
  readonly user_id?: string;
}
export interface AddChatGroupMembersConversationParticipantKeysEncoded {
  readonly encrypted_conversation_key?: string;
  readonly public_key_version?: string;
  readonly user_id?: string;
}
export const AddChatGroupMembersConversationParticipantKeys: Schema.Schema<AddChatGroupMembersConversationParticipantKeys, AddChatGroupMembersConversationParticipantKeysEncoded, never> = Schema.Struct({
  encrypted_conversation_key: Schema.optional(Schema.String),
  public_key_version: Schema.optional(Schema.String),
  user_id: Schema.optional(Schema.String),
});

export interface AddChatGroupMembersRequest {
  readonly action_signatures?: ReadonlyArray<AddChatGroupMembersActionSignatures>;
  readonly conversation_key_version?: string;
  readonly conversation_participant_keys?: ReadonlyArray<AddChatGroupMembersConversationParticipantKeys>;
  readonly encrypted_avatar_url?: string;
  readonly encrypted_title?: string;
  readonly user_ids: ReadonlyArray<string>;
}
export interface AddChatGroupMembersRequestEncoded {
  readonly action_signatures?: ReadonlyArray<AddChatGroupMembersActionSignaturesEncoded>;
  readonly conversation_key_version?: string;
  readonly conversation_participant_keys?: ReadonlyArray<AddChatGroupMembersConversationParticipantKeysEncoded>;
  readonly encrypted_avatar_url?: string;
  readonly encrypted_title?: string;
  readonly user_ids: ReadonlyArray<string>;
}
export const AddChatGroupMembersRequest: Schema.Schema<AddChatGroupMembersRequest, AddChatGroupMembersRequestEncoded, never> = Schema.Struct({
  action_signatures: Schema.optional(Schema.Array(Schema.suspend(() => AddChatGroupMembersActionSignatures))),
  conversation_key_version: Schema.optional(Schema.String),
  conversation_participant_keys: Schema.optional(Schema.Array(Schema.suspend(() => AddChatGroupMembersConversationParticipantKeys))),
  encrypted_avatar_url: Schema.optional(Schema.String),
  encrypted_title: Schema.optional(Schema.String),
  user_ids: Schema.Array(Schema.String),
});

export interface AddChatGroupMembersResponse {
  readonly data?: Post;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface AddChatGroupMembersResponseEncoded {
  readonly data?: PostEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const AddChatGroupMembersResponse: Schema.Schema<AddChatGroupMembersResponse, AddChatGroupMembersResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => Post)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface AddConversationKeysActionSignatures {
  readonly encoded_message_event_detail: string;
  readonly message_event_signature: AddConversationKeysActionSignaturesMessageEventSignature;
  readonly message_id: string;
  readonly signature_payload?: string;
}
export interface AddConversationKeysActionSignaturesEncoded {
  readonly encoded_message_event_detail: string;
  readonly message_event_signature: AddConversationKeysActionSignaturesMessageEventSignatureEncoded;
  readonly message_id: string;
  readonly signature_payload?: string;
}
export const AddConversationKeysActionSignatures: Schema.Schema<AddConversationKeysActionSignatures, AddConversationKeysActionSignaturesEncoded, never> = Schema.Struct({
  encoded_message_event_detail: Schema.String,
  message_event_signature: Schema.suspend(() => AddConversationKeysActionSignaturesMessageEventSignature),
  message_id: Schema.String,
  signature_payload: Schema.optional(Schema.String),
});

export interface AddConversationKeysActionSignaturesMessageEventSignature {
  readonly message_signing_key_info_list?: ReadonlyArray<AddConversationKeysActionSignaturesMessageEventSignatureMessageSigningKeyInfoList>;
  readonly public_key_version: string;
  readonly signature: string;
  readonly signature_version: string;
  readonly signing_public_key?: string;
}
export interface AddConversationKeysActionSignaturesMessageEventSignatureEncoded {
  readonly message_signing_key_info_list?: ReadonlyArray<AddConversationKeysActionSignaturesMessageEventSignatureMessageSigningKeyInfoListEncoded>;
  readonly public_key_version: string;
  readonly signature: string;
  readonly signature_version: string;
  readonly signing_public_key?: string;
}
export const AddConversationKeysActionSignaturesMessageEventSignature: Schema.Schema<AddConversationKeysActionSignaturesMessageEventSignature, AddConversationKeysActionSignaturesMessageEventSignatureEncoded, never> = Schema.Struct({
  message_signing_key_info_list: Schema.optional(Schema.Array(Schema.suspend(() => AddConversationKeysActionSignaturesMessageEventSignatureMessageSigningKeyInfoList))),
  public_key_version: Schema.String,
  signature: Schema.String,
  signature_version: Schema.String,
  signing_public_key: Schema.optional(Schema.String),
});

export interface AddConversationKeysActionSignaturesMessageEventSignatureMessageSigningKeyInfoList {
  readonly member_id?: string;
  readonly public_key_version?: string;
  readonly signing_public_key?: string;
}
export interface AddConversationKeysActionSignaturesMessageEventSignatureMessageSigningKeyInfoListEncoded {
  readonly member_id?: string;
  readonly public_key_version?: string;
  readonly signing_public_key?: string;
}
export const AddConversationKeysActionSignaturesMessageEventSignatureMessageSigningKeyInfoList: Schema.Schema<AddConversationKeysActionSignaturesMessageEventSignatureMessageSigningKeyInfoList, AddConversationKeysActionSignaturesMessageEventSignatureMessageSigningKeyInfoListEncoded, never> = Schema.Struct({
  member_id: Schema.optional(Schema.String),
  public_key_version: Schema.optional(Schema.String),
  signing_public_key: Schema.optional(Schema.String),
});

export interface AddConversationKeysConversationParticipantKeys {
  readonly encrypted_conversation_key?: string;
  readonly public_key_version?: string;
  readonly user_id?: string;
}
export interface AddConversationKeysConversationParticipantKeysEncoded {
  readonly encrypted_conversation_key?: string;
  readonly public_key_version?: string;
  readonly user_id?: string;
}
export const AddConversationKeysConversationParticipantKeys: Schema.Schema<AddConversationKeysConversationParticipantKeys, AddConversationKeysConversationParticipantKeysEncoded, never> = Schema.Struct({
  encrypted_conversation_key: Schema.optional(Schema.String),
  public_key_version: Schema.optional(Schema.String),
  user_id: Schema.optional(Schema.String),
});

export interface AddConversationKeysRequest {
  readonly action_signatures?: ReadonlyArray<AddConversationKeysActionSignatures>;
  readonly base64_encoded_key_rotation?: string;
  readonly conversation_key_version: string;
  readonly conversation_participant_keys: ReadonlyArray<AddConversationKeysConversationParticipantKeys>;
}
export interface AddConversationKeysRequestEncoded {
  readonly action_signatures?: ReadonlyArray<AddConversationKeysActionSignaturesEncoded>;
  readonly base64_encoded_key_rotation?: string;
  readonly conversation_key_version: string;
  readonly conversation_participant_keys: ReadonlyArray<AddConversationKeysConversationParticipantKeysEncoded>;
}
export const AddConversationKeysRequest: Schema.Schema<AddConversationKeysRequest, AddConversationKeysRequestEncoded, never> = Schema.Struct({
  action_signatures: Schema.optional(Schema.Array(Schema.suspend(() => AddConversationKeysActionSignatures))),
  base64_encoded_key_rotation: Schema.optional(Schema.String),
  conversation_key_version: Schema.String,
  conversation_participant_keys: Schema.Array(Schema.suspend(() => AddConversationKeysConversationParticipantKeys)),
});

export interface AddConversationKeysResponse {
  readonly data?: AddConversationKeysResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface AddConversationKeysResponseEncoded {
  readonly data?: AddConversationKeysResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const AddConversationKeysResponse: Schema.Schema<AddConversationKeysResponse, AddConversationKeysResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => AddConversationKeysResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface AddConversationKeysResponseData {
  readonly conversation_id?: string;
  readonly sequence_id?: string;
}
export interface AddConversationKeysResponseDataEncoded {
  readonly conversation_id?: string;
  readonly sequence_id?: string;
}
export const AddConversationKeysResponseData: Schema.Schema<AddConversationKeysResponseData, AddConversationKeysResponseDataEncoded, never> = Schema.Struct({
  conversation_id: Schema.optional(Schema.String),
  sequence_id: Schema.optional(Schema.String),
});

export interface AddListsMemberRequest {
  readonly user_id: string;
}
export interface AddListsMemberRequestEncoded {
  readonly user_id: string;
}
export const AddListsMemberRequest: Schema.Schema<AddListsMemberRequest, AddListsMemberRequestEncoded, never> = Schema.Struct({
  user_id: Schema.String,
});

export interface AddListsMemberResponse {
  readonly data?: AddListsMemberResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface AddListsMemberResponseEncoded {
  readonly data?: AddListsMemberResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const AddListsMemberResponse: Schema.Schema<AddListsMemberResponse, AddListsMemberResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => AddListsMemberResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface AddListsMemberResponseData {
  readonly is_member: boolean;
}
export interface AddListsMemberResponseDataEncoded {
  readonly is_member: boolean;
}
export const AddListsMemberResponseData: Schema.Schema<AddListsMemberResponseData, AddListsMemberResponseDataEncoded, never> = Schema.Struct({
  is_member: Schema.Boolean,
});

export interface AddUserPublicKeyPublicKey {
  readonly identity_public_key_signature?: string;
  readonly public_key?: string;
  readonly public_key_fingerprint?: string;
  readonly registration_method?: string;
  readonly signing_public_key?: string;
  readonly signing_public_key_signature?: string;
}
export interface AddUserPublicKeyPublicKeyEncoded {
  readonly identity_public_key_signature?: string;
  readonly public_key?: string;
  readonly public_key_fingerprint?: string;
  readonly registration_method?: string;
  readonly signing_public_key?: string;
  readonly signing_public_key_signature?: string;
}
export const AddUserPublicKeyPublicKey: Schema.Schema<AddUserPublicKeyPublicKey, AddUserPublicKeyPublicKeyEncoded, never> = Schema.Struct({
  identity_public_key_signature: Schema.optional(Schema.String),
  public_key: Schema.optional(Schema.String),
  public_key_fingerprint: Schema.optional(Schema.String),
  registration_method: Schema.optional(Schema.String),
  signing_public_key: Schema.optional(Schema.String),
  signing_public_key_signature: Schema.optional(Schema.String),
});

export interface AddUserPublicKeyRequest {
  readonly generate_version?: boolean;
  readonly public_key: AddUserPublicKeyPublicKey;
  readonly version: string;
}
export interface AddUserPublicKeyRequestEncoded {
  readonly generate_version?: boolean;
  readonly public_key: AddUserPublicKeyPublicKeyEncoded;
  readonly version: string;
}
export const AddUserPublicKeyRequest: Schema.Schema<AddUserPublicKeyRequest, AddUserPublicKeyRequestEncoded, never> = Schema.Struct({
  generate_version: Schema.optional(Schema.Boolean),
  public_key: Schema.suspend(() => AddUserPublicKeyPublicKey),
  version: Schema.String,
});

export interface AddUserPublicKeyResponse {
  readonly data?: AddUserPublicKeyResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface AddUserPublicKeyResponseEncoded {
  readonly data?: AddUserPublicKeyResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const AddUserPublicKeyResponse: Schema.Schema<AddUserPublicKeyResponse, AddUserPublicKeyResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => AddUserPublicKeyResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface AddUserPublicKeyResponseData {
  readonly juicebox_config?: unknown;
  readonly public_key_version?: string;
}
export interface AddUserPublicKeyResponseDataEncoded {
  readonly juicebox_config?: unknown;
  readonly public_key_version?: string;
}
export const AddUserPublicKeyResponseData: Schema.Schema<AddUserPublicKeyResponseData, AddUserPublicKeyResponseDataEncoded, never> = Schema.Struct({
  juicebox_config: Schema.optional(Schema.Unknown),
  public_key_version: Schema.optional(Schema.String),
});

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
export interface AnalyticsEncoded {
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
  readonly timestamped_metrics?: AnalyticsTimestampedMetricsEncoded;
  readonly unfollows?: number;
  readonly unlikes?: number;
  readonly url_clicks?: number;
  readonly user_profile_clicks?: number;
}
export const Analytics: Schema.Schema<Analytics, AnalyticsEncoded, never> = Schema.Struct({
  app_install_attempts: Schema.optional(Schema.Int),
  app_opens: Schema.optional(Schema.Int),
  bookmarks: Schema.optional(Schema.Int),
  detail_expands: Schema.optional(Schema.Int),
  email_tweet: Schema.optional(Schema.Int),
  engagements: Schema.optional(Schema.Int),
  follows: Schema.optional(Schema.Int),
  hashtag_clicks: Schema.optional(Schema.Int),
  id: Schema.optional(Schema.String),
  impressions: Schema.optional(Schema.Int),
  likes: Schema.optional(Schema.Int),
  media_views: Schema.optional(Schema.Int),
  permalink_clicks: Schema.optional(Schema.Int),
  quote_tweets: Schema.optional(Schema.Int),
  replies: Schema.optional(Schema.Int),
  retweets: Schema.optional(Schema.Int),
  shares: Schema.optional(Schema.Int),
  timestamp: Schema.optional(Schema.String),
  timestamped_metrics: Schema.optional(Schema.suspend(() => AnalyticsTimestampedMetrics)),
  unfollows: Schema.optional(Schema.Int),
  unlikes: Schema.optional(Schema.Int),
  url_clicks: Schema.optional(Schema.Int),
  user_profile_clicks: Schema.optional(Schema.Int),
});

export type AnalyticsId = string;
export type AnalyticsIdEncoded = string;
export const AnalyticsId: Schema.Schema<AnalyticsId, AnalyticsIdEncoded, never> = Schema.String;

export type AnalyticsTimestampedMetrics = ReadonlyArray<unknown>;
export type AnalyticsTimestampedMetricsEncoded = ReadonlyArray<unknown>;
export const AnalyticsTimestampedMetrics: Schema.Schema<AnalyticsTimestampedMetrics, AnalyticsTimestampedMetricsEncoded, never> = Schema.Array(Schema.Unknown);

export interface AppendMediaUploadRequest {
  readonly media: string | string;
  readonly segment_index: number;
}
export interface AppendMediaUploadRequestEncoded {
  readonly media: string | string;
  readonly segment_index: number;
}
export const AppendMediaUploadRequest: Schema.Schema<AppendMediaUploadRequest, AppendMediaUploadRequestEncoded, never> = Schema.Struct({
  media: Schema.Union(Schema.String, Schema.String),
  segment_index: Schema.Int,
});

export interface AppendMediaUploadResponse {
  readonly data?: AppendMediaUploadResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface AppendMediaUploadResponseEncoded {
  readonly data?: AppendMediaUploadResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const AppendMediaUploadResponse: Schema.Schema<AppendMediaUploadResponse, AppendMediaUploadResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => AppendMediaUploadResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface AppendMediaUploadResponseData {
  readonly expires_at?: number;
}
export interface AppendMediaUploadResponseDataEncoded {
  readonly expires_at?: number;
}
export const AppendMediaUploadResponseData: Schema.Schema<AppendMediaUploadResponseData, AppendMediaUploadResponseDataEncoded, never> = Schema.Struct({
  expires_at: Schema.optional(Schema.Int),
});

export interface ArticleCreateDraftContentState {
  readonly blocks: ReadonlyArray<ArticleCreateDraftContentStateBlocks>;
  readonly entities: ReadonlyArray<ArticleCreateDraftContentStateEntities>;
}
export interface ArticleCreateDraftContentStateEncoded {
  readonly blocks: ReadonlyArray<ArticleCreateDraftContentStateBlocksEncoded>;
  readonly entities: ReadonlyArray<ArticleCreateDraftContentStateEntitiesEncoded>;
}
export const ArticleCreateDraftContentState: Schema.Schema<ArticleCreateDraftContentState, ArticleCreateDraftContentStateEncoded, never> = Schema.Struct({
  blocks: Schema.Array(Schema.suspend(() => ArticleCreateDraftContentStateBlocks)),
  entities: Schema.Array(Schema.suspend(() => ArticleCreateDraftContentStateEntities)),
});

export interface ArticleCreateDraftContentStateBlocks {
  readonly data?: ArticleCreateDraftContentStateBlocksData;
  readonly entity_ranges?: ReadonlyArray<ArticleCreateDraftContentStateBlocksEntityRanges>;
  readonly inline_style_ranges?: ReadonlyArray<ArticleCreateDraftContentStateBlocksInlineStyleRanges>;
  readonly key?: string;
  readonly text: string;
  readonly type: "unstyled" | "header-one" | "header-two" | "header-three" | "unordered-list-item" | "ordered-list-item" | "blockquote" | "atomic";
}
export interface ArticleCreateDraftContentStateBlocksEncoded {
  readonly data?: ArticleCreateDraftContentStateBlocksDataEncoded;
  readonly entity_ranges?: ReadonlyArray<ArticleCreateDraftContentStateBlocksEntityRangesEncoded>;
  readonly inline_style_ranges?: ReadonlyArray<ArticleCreateDraftContentStateBlocksInlineStyleRangesEncoded>;
  readonly key?: string;
  readonly text: string;
  readonly type: "unstyled" | "header-one" | "header-two" | "header-three" | "unordered-list-item" | "ordered-list-item" | "blockquote" | "atomic";
}
export const ArticleCreateDraftContentStateBlocks: Schema.Schema<ArticleCreateDraftContentStateBlocks, ArticleCreateDraftContentStateBlocksEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => ArticleCreateDraftContentStateBlocksData)),
  entity_ranges: Schema.optional(Schema.Array(Schema.suspend(() => ArticleCreateDraftContentStateBlocksEntityRanges))),
  inline_style_ranges: Schema.optional(Schema.Array(Schema.suspend(() => ArticleCreateDraftContentStateBlocksInlineStyleRanges))),
  key: Schema.optional(Schema.String),
  text: Schema.String,
  type: Schema.Union(Schema.Literal("unstyled"), Schema.Literal("header-one"), Schema.Literal("header-two"), Schema.Literal("header-three"), Schema.Literal("unordered-list-item"), Schema.Literal("ordered-list-item"), Schema.Literal("blockquote"), Schema.Literal("atomic")),
});

export interface ArticleCreateDraftContentStateBlocksData {
  readonly cashtags?: ReadonlyArray<ArticleCreateDraftContentStateBlocksDataCashtags>;
  readonly hashtags?: ReadonlyArray<ArticleCreateDraftContentStateBlocksDataHashtags>;
  readonly mentions?: ReadonlyArray<ArticleCreateDraftContentStateBlocksDataMentions>;
  readonly urls?: ReadonlyArray<ArticleCreateDraftContentStateBlocksDataUrls>;
}
export interface ArticleCreateDraftContentStateBlocksDataEncoded {
  readonly cashtags?: ReadonlyArray<ArticleCreateDraftContentStateBlocksDataCashtagsEncoded>;
  readonly hashtags?: ReadonlyArray<ArticleCreateDraftContentStateBlocksDataHashtagsEncoded>;
  readonly mentions?: ReadonlyArray<ArticleCreateDraftContentStateBlocksDataMentionsEncoded>;
  readonly urls?: ReadonlyArray<ArticleCreateDraftContentStateBlocksDataUrlsEncoded>;
}
export const ArticleCreateDraftContentStateBlocksData: Schema.Schema<ArticleCreateDraftContentStateBlocksData, ArticleCreateDraftContentStateBlocksDataEncoded, never> = Schema.Struct({
  cashtags: Schema.optional(Schema.Array(Schema.suspend(() => ArticleCreateDraftContentStateBlocksDataCashtags))),
  hashtags: Schema.optional(Schema.Array(Schema.suspend(() => ArticleCreateDraftContentStateBlocksDataHashtags))),
  mentions: Schema.optional(Schema.Array(Schema.suspend(() => ArticleCreateDraftContentStateBlocksDataMentions))),
  urls: Schema.optional(Schema.Array(Schema.suspend(() => ArticleCreateDraftContentStateBlocksDataUrls))),
});

export interface ArticleCreateDraftContentStateBlocksDataCashtags {
  readonly from_index: number;
  readonly text: string;
  readonly to_index: number;
}
export interface ArticleCreateDraftContentStateBlocksDataCashtagsEncoded {
  readonly from_index: number;
  readonly text: string;
  readonly to_index: number;
}
export const ArticleCreateDraftContentStateBlocksDataCashtags: Schema.Schema<ArticleCreateDraftContentStateBlocksDataCashtags, ArticleCreateDraftContentStateBlocksDataCashtagsEncoded, never> = Schema.Struct({
  from_index: Schema.Int,
  text: Schema.String,
  to_index: Schema.Int,
});

export interface ArticleCreateDraftContentStateBlocksDataHashtags {
  readonly from_index: number;
  readonly text: string;
  readonly to_index: number;
}
export interface ArticleCreateDraftContentStateBlocksDataHashtagsEncoded {
  readonly from_index: number;
  readonly text: string;
  readonly to_index: number;
}
export const ArticleCreateDraftContentStateBlocksDataHashtags: Schema.Schema<ArticleCreateDraftContentStateBlocksDataHashtags, ArticleCreateDraftContentStateBlocksDataHashtagsEncoded, never> = Schema.Struct({
  from_index: Schema.Int,
  text: Schema.String,
  to_index: Schema.Int,
});

export interface ArticleCreateDraftContentStateBlocksDataMentions {
  readonly from_index: number;
  readonly text: string;
  readonly to_index: number;
}
export interface ArticleCreateDraftContentStateBlocksDataMentionsEncoded {
  readonly from_index: number;
  readonly text: string;
  readonly to_index: number;
}
export const ArticleCreateDraftContentStateBlocksDataMentions: Schema.Schema<ArticleCreateDraftContentStateBlocksDataMentions, ArticleCreateDraftContentStateBlocksDataMentionsEncoded, never> = Schema.Struct({
  from_index: Schema.Int,
  text: Schema.String,
  to_index: Schema.Int,
});

export interface ArticleCreateDraftContentStateBlocksDataUrls {
  readonly from_index: number;
  readonly text: string;
  readonly to_index: number;
}
export interface ArticleCreateDraftContentStateBlocksDataUrlsEncoded {
  readonly from_index: number;
  readonly text: string;
  readonly to_index: number;
}
export const ArticleCreateDraftContentStateBlocksDataUrls: Schema.Schema<ArticleCreateDraftContentStateBlocksDataUrls, ArticleCreateDraftContentStateBlocksDataUrlsEncoded, never> = Schema.Struct({
  from_index: Schema.Int,
  text: Schema.String,
  to_index: Schema.Int,
});

export interface ArticleCreateDraftContentStateBlocksEntityRanges {
  readonly key: number;
  readonly length: number;
  readonly offset: number;
}
export interface ArticleCreateDraftContentStateBlocksEntityRangesEncoded {
  readonly key: number;
  readonly length: number;
  readonly offset: number;
}
export const ArticleCreateDraftContentStateBlocksEntityRanges: Schema.Schema<ArticleCreateDraftContentStateBlocksEntityRanges, ArticleCreateDraftContentStateBlocksEntityRangesEncoded, never> = Schema.Struct({
  key: Schema.Int,
  length: Schema.Int,
  offset: Schema.Int,
});

export interface ArticleCreateDraftContentStateBlocksInlineStyleRanges {
  readonly length: number;
  readonly offset: number;
  readonly style: "bold" | "italic" | "strikethrough";
}
export interface ArticleCreateDraftContentStateBlocksInlineStyleRangesEncoded {
  readonly length: number;
  readonly offset: number;
  readonly style: "bold" | "italic" | "strikethrough";
}
export const ArticleCreateDraftContentStateBlocksInlineStyleRanges: Schema.Schema<ArticleCreateDraftContentStateBlocksInlineStyleRanges, ArticleCreateDraftContentStateBlocksInlineStyleRangesEncoded, never> = Schema.Struct({
  length: Schema.Int,
  offset: Schema.Int,
  style: Schema.Union(Schema.Literal("bold"), Schema.Literal("italic"), Schema.Literal("strikethrough")),
});

export interface ArticleCreateDraftContentStateEntities {
  readonly key: string;
  readonly value: ArticleCreateDraftContentStateEntitiesValue;
}
export interface ArticleCreateDraftContentStateEntitiesEncoded {
  readonly key: string;
  readonly value: ArticleCreateDraftContentStateEntitiesValueEncoded;
}
export const ArticleCreateDraftContentStateEntities: Schema.Schema<ArticleCreateDraftContentStateEntities, ArticleCreateDraftContentStateEntitiesEncoded, never> = Schema.Struct({
  key: Schema.String,
  value: Schema.suspend(() => ArticleCreateDraftContentStateEntitiesValue),
});

export interface ArticleCreateDraftContentStateEntitiesValue {
  readonly data: ArticleCreateDraftContentStateEntitiesValueData;
  readonly mutability: "immutable" | "mutable" | "segmented";
  readonly type: "post" | "link" | "image" | "emoji" | "markdown" | "divider" | "latex";
}
export interface ArticleCreateDraftContentStateEntitiesValueEncoded {
  readonly data: ArticleCreateDraftContentStateEntitiesValueDataEncoded;
  readonly mutability: "immutable" | "mutable" | "segmented";
  readonly type: "post" | "link" | "image" | "emoji" | "markdown" | "divider" | "latex";
}
export const ArticleCreateDraftContentStateEntitiesValue: Schema.Schema<ArticleCreateDraftContentStateEntitiesValue, ArticleCreateDraftContentStateEntitiesValueEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => ArticleCreateDraftContentStateEntitiesValueData),
  mutability: Schema.Union(Schema.Literal("immutable"), Schema.Literal("mutable"), Schema.Literal("segmented")),
  type: Schema.Union(Schema.Literal("post"), Schema.Literal("link"), Schema.Literal("image"), Schema.Literal("emoji"), Schema.Literal("markdown"), Schema.Literal("divider"), Schema.Literal("latex")),
});

export interface ArticleCreateDraftContentStateEntitiesValueData {
  readonly caption?: string;
  readonly entity_key?: string;
  readonly markdown?: string;
  readonly media_items?: ReadonlyArray<ArticleCreateDraftContentStateEntitiesValueDataMediaItems>;
  readonly post_id?: string;
  readonly url?: string;
}
export interface ArticleCreateDraftContentStateEntitiesValueDataEncoded {
  readonly caption?: string;
  readonly entity_key?: string;
  readonly markdown?: string;
  readonly media_items?: ReadonlyArray<ArticleCreateDraftContentStateEntitiesValueDataMediaItemsEncoded>;
  readonly post_id?: string;
  readonly url?: string;
}
export const ArticleCreateDraftContentStateEntitiesValueData: Schema.Schema<ArticleCreateDraftContentStateEntitiesValueData, ArticleCreateDraftContentStateEntitiesValueDataEncoded, never> = Schema.Struct({
  caption: Schema.optional(Schema.String),
  entity_key: Schema.optional(Schema.String),
  markdown: Schema.optional(Schema.String),
  media_items: Schema.optional(Schema.Array(Schema.suspend(() => ArticleCreateDraftContentStateEntitiesValueDataMediaItems))),
  post_id: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});

export interface ArticleCreateDraftContentStateEntitiesValueDataMediaItems {
  readonly media_category: string;
  readonly media_id: string;
}
export interface ArticleCreateDraftContentStateEntitiesValueDataMediaItemsEncoded {
  readonly media_category: string;
  readonly media_id: string;
}
export const ArticleCreateDraftContentStateEntitiesValueDataMediaItems: Schema.Schema<ArticleCreateDraftContentStateEntitiesValueDataMediaItems, ArticleCreateDraftContentStateEntitiesValueDataMediaItemsEncoded, never> = Schema.Struct({
  media_category: Schema.String,
  media_id: Schema.String,
});

export interface ArticleCreateDraftCoverMedia {
  readonly media_category: string;
  readonly media_id: string;
}
export interface ArticleCreateDraftCoverMediaEncoded {
  readonly media_category: string;
  readonly media_id: string;
}
export const ArticleCreateDraftCoverMedia: Schema.Schema<ArticleCreateDraftCoverMedia, ArticleCreateDraftCoverMediaEncoded, never> = Schema.Struct({
  media_category: Schema.String,
  media_id: Schema.String,
});

export interface ArticleCreateDraftRequest {
  readonly content_state: ArticleCreateDraftContentState;
  readonly cover_media?: ArticleCreateDraftCoverMedia;
  readonly title: string;
}
export interface ArticleCreateDraftRequestEncoded {
  readonly content_state: ArticleCreateDraftContentStateEncoded;
  readonly cover_media?: ArticleCreateDraftCoverMediaEncoded;
  readonly title: string;
}
export const ArticleCreateDraftRequest: Schema.Schema<ArticleCreateDraftRequest, ArticleCreateDraftRequestEncoded, never> = Schema.Struct({
  content_state: Schema.suspend(() => ArticleCreateDraftContentState),
  cover_media: Schema.optional(Schema.suspend(() => ArticleCreateDraftCoverMedia)),
  title: Schema.String,
});

export interface ArticleCreateDraftResponse {
  readonly data?: ArticleCreateDraftResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface ArticleCreateDraftResponseEncoded {
  readonly data?: ArticleCreateDraftResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const ArticleCreateDraftResponse: Schema.Schema<ArticleCreateDraftResponse, ArticleCreateDraftResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => ArticleCreateDraftResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface ArticleCreateDraftResponseData {
  readonly id: string;
  readonly title: string;
}
export interface ArticleCreateDraftResponseDataEncoded {
  readonly id: string;
  readonly title: string;
}
export const ArticleCreateDraftResponseData: Schema.Schema<ArticleCreateDraftResponseData, ArticleCreateDraftResponseDataEncoded, never> = Schema.Struct({
  id: Schema.String,
  title: Schema.String,
});

export interface ArticlePublishResponse {
  readonly data?: ArticlePublishResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface ArticlePublishResponseEncoded {
  readonly data?: ArticlePublishResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const ArticlePublishResponse: Schema.Schema<ArticlePublishResponse, ArticlePublishResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => ArticlePublishResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface ArticlePublishResponseData {
  readonly post_id: string;
}
export interface ArticlePublishResponseDataEncoded {
  readonly post_id: string;
}
export const ArticlePublishResponseData: Schema.Schema<ArticlePublishResponseData, ArticlePublishResponseDataEncoded, never> = Schema.Struct({
  post_id: Schema.String,
});

export interface BlockUsersDmsResponse {
  readonly data?: BlockUsersDmsResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface BlockUsersDmsResponseEncoded {
  readonly data?: BlockUsersDmsResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const BlockUsersDmsResponse: Schema.Schema<BlockUsersDmsResponse, BlockUsersDmsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => BlockUsersDmsResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface BlockUsersDmsResponseData {
  readonly blocked: boolean;
}
export interface BlockUsersDmsResponseDataEncoded {
  readonly blocked: boolean;
}
export const BlockUsersDmsResponseData: Schema.Schema<BlockUsersDmsResponseData, BlockUsersDmsResponseDataEncoded, never> = Schema.Struct({
  blocked: Schema.Boolean,
});

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
export interface BroadcastEncoded {
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
export const Broadcast: Schema.Schema<Broadcast, BroadcastEncoded, never> = Schema.Struct({
  available_for_replay: Schema.optional(Schema.Boolean),
  broadcast_id: Schema.optional(Schema.String),
  chat_option: Schema.optional(Schema.Int),
  created_at_ms: Schema.optional(Schema.String),
  end_ms: Schema.optional(Schema.String),
  height: Schema.optional(Schema.Int),
  id: Schema.optional(Schema.String),
  image_url: Schema.optional(Schema.String),
  image_url_medium: Schema.optional(Schema.String),
  image_url_small: Schema.optional(Schema.String),
  is_high_latency: Schema.optional(Schema.Boolean),
  language: Schema.optional(Schema.String),
  media_key: Schema.optional(Schema.String),
  scheduled_end_ms: Schema.optional(Schema.String),
  scheduled_start_ms: Schema.optional(Schema.String),
  share_url: Schema.optional(Schema.String),
  source_id: Schema.optional(Schema.String),
  start_ms: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
  total_watched: Schema.optional(Schema.String),
  total_watching: Schema.optional(Schema.String),
  tweet_id: Schema.optional(Schema.String),
  twitter_user_id: Schema.optional(Schema.String),
  updated_at_ms: Schema.optional(Schema.String),
  width: Schema.optional(Schema.Int),
});

export interface ChatConversation {
  readonly admin_ids?: ReadonlyArray<string>;
  readonly created_at?: Date;
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
  readonly updated_at?: Date;
}
export interface ChatConversationEncoded {
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
export const ChatConversation: Schema.Schema<ChatConversation, ChatConversationEncoded, never> = Schema.Struct({
  admin_ids: Schema.optional(Schema.Array(Schema.String)),
  created_at: Schema.optional(Schema.DateFromString),
  group_avatar_url: Schema.optional(Schema.String),
  group_name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  is_muted: Schema.optional(Schema.Boolean),
  member_ids: Schema.optional(Schema.Array(Schema.String)),
  message_ttl_ms: Schema.optional(Schema.Int),
  participant_ids: Schema.optional(Schema.Array(Schema.String)),
  screen_capture_blocking_enabled: Schema.optional(Schema.Boolean),
  screen_capture_detection_enabled: Schema.optional(Schema.Boolean),
  type: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.DateFromString),
});

export interface ChatMediaUploadAppendRequest {
  readonly conversation_id: string;
  readonly media: string | string;
  readonly media_hash_key: string;
  readonly segment_index: number;
}
export interface ChatMediaUploadAppendRequestEncoded {
  readonly conversation_id: string;
  readonly media: string | string;
  readonly media_hash_key: string;
  readonly segment_index: number;
}
export const ChatMediaUploadAppendRequest: Schema.Schema<ChatMediaUploadAppendRequest, ChatMediaUploadAppendRequestEncoded, never> = Schema.Struct({
  conversation_id: Schema.String,
  media: Schema.Union(Schema.String, Schema.String),
  media_hash_key: Schema.String,
  segment_index: Schema.Int,
});

export interface ChatMediaUploadAppendResponse {
  readonly data?: ChatMediaUploadAppendResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface ChatMediaUploadAppendResponseEncoded {
  readonly data?: ChatMediaUploadAppendResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const ChatMediaUploadAppendResponse: Schema.Schema<ChatMediaUploadAppendResponse, ChatMediaUploadAppendResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => ChatMediaUploadAppendResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface ChatMediaUploadAppendResponseData {
  readonly expires_at?: number;
}
export interface ChatMediaUploadAppendResponseDataEncoded {
  readonly expires_at?: number;
}
export const ChatMediaUploadAppendResponseData: Schema.Schema<ChatMediaUploadAppendResponseData, ChatMediaUploadAppendResponseDataEncoded, never> = Schema.Struct({
  expires_at: Schema.optional(Schema.Int),
});

export interface ChatMediaUploadFinalizeRequest {
  readonly conversation_id: string;
  readonly media_hash_key: string;
  readonly message_id?: string;
  readonly num_parts: string;
  readonly ttl_msec?: string;
}
export interface ChatMediaUploadFinalizeRequestEncoded {
  readonly conversation_id: string;
  readonly media_hash_key: string;
  readonly message_id?: string;
  readonly num_parts: string;
  readonly ttl_msec?: string;
}
export const ChatMediaUploadFinalizeRequest: Schema.Schema<ChatMediaUploadFinalizeRequest, ChatMediaUploadFinalizeRequestEncoded, never> = Schema.Struct({
  conversation_id: Schema.String,
  media_hash_key: Schema.String,
  message_id: Schema.optional(Schema.String),
  num_parts: Schema.String,
  ttl_msec: Schema.optional(Schema.String),
});

export interface ChatMediaUploadFinalizeResponse {
  readonly data?: ChatMediaUploadFinalizeResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface ChatMediaUploadFinalizeResponseEncoded {
  readonly data?: ChatMediaUploadFinalizeResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const ChatMediaUploadFinalizeResponse: Schema.Schema<ChatMediaUploadFinalizeResponse, ChatMediaUploadFinalizeResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => ChatMediaUploadFinalizeResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface ChatMediaUploadFinalizeResponseData {
  readonly success: boolean;
}
export interface ChatMediaUploadFinalizeResponseDataEncoded {
  readonly success: boolean;
}
export const ChatMediaUploadFinalizeResponseData: Schema.Schema<ChatMediaUploadFinalizeResponseData, ChatMediaUploadFinalizeResponseDataEncoded, never> = Schema.Struct({
  success: Schema.Boolean,
});

export interface ChatMediaUploadInitializeRequest {
  readonly conversation_id: string;
  readonly total_bytes: number;
}
export interface ChatMediaUploadInitializeRequestEncoded {
  readonly conversation_id: string;
  readonly total_bytes: number;
}
export const ChatMediaUploadInitializeRequest: Schema.Schema<ChatMediaUploadInitializeRequest, ChatMediaUploadInitializeRequestEncoded, never> = Schema.Struct({
  conversation_id: Schema.String,
  total_bytes: Schema.Int,
});

export interface ChatMediaUploadInitializeResponse {
  readonly data?: ChatMediaUploadInitializeResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface ChatMediaUploadInitializeResponseEncoded {
  readonly data?: ChatMediaUploadInitializeResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const ChatMediaUploadInitializeResponse: Schema.Schema<ChatMediaUploadInitializeResponse, ChatMediaUploadInitializeResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => ChatMediaUploadInitializeResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface ChatMediaUploadInitializeResponseData {
  readonly conversation_id: string;
  readonly media_hash_key: string;
  readonly session_id: string;
}
export interface ChatMediaUploadInitializeResponseDataEncoded {
  readonly conversation_id: string;
  readonly media_hash_key: string;
  readonly session_id: string;
}
export const ChatMediaUploadInitializeResponseData: Schema.Schema<ChatMediaUploadInitializeResponseData, ChatMediaUploadInitializeResponseDataEncoded, never> = Schema.Struct({
  conversation_id: Schema.String,
  media_hash_key: Schema.String,
  session_id: Schema.String,
});

export interface ChatMessageEvent {
  readonly conversation_id?: string;
  readonly conversation_token?: string;
  readonly created_at?: Date;
  readonly encoded_event?: string;
  readonly id?: string;
  readonly is_trusted?: boolean;
  readonly message_event_signature?: unknown;
  readonly previous_id?: string;
  readonly sender_id?: string;
}
export interface ChatMessageEventEncoded {
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
export const ChatMessageEvent: Schema.Schema<ChatMessageEvent, ChatMessageEventEncoded, never> = Schema.Struct({
  conversation_id: Schema.optional(Schema.String),
  conversation_token: Schema.optional(Schema.String),
  created_at: Schema.optional(Schema.DateFromString),
  encoded_event: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  is_trusted: Schema.optional(Schema.Boolean),
  message_event_signature: Schema.optional(Schema.Unknown),
  previous_id: Schema.optional(Schema.String),
  sender_id: Schema.optional(Schema.String),
});

export interface Community {
  readonly access?: string;
  readonly created_at?: string;
  readonly description?: string;
  readonly id?: string;
  readonly join_policy?: string;
  readonly member_count?: number;
  readonly name?: string;
}
export interface CommunityEncoded {
  readonly access?: string;
  readonly created_at?: string;
  readonly description?: string;
  readonly id?: string;
  readonly join_policy?: string;
  readonly member_count?: number;
  readonly name?: string;
}
export const Community: Schema.Schema<Community, CommunityEncoded, never> = Schema.Struct({
  access: Schema.optional(Schema.String),
  created_at: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  join_policy: Schema.optional(Schema.String),
  member_count: Schema.optional(Schema.Int),
  name: Schema.optional(Schema.String),
});

export type CommunityId = string;
export type CommunityIdEncoded = string;
export const CommunityId: Schema.Schema<CommunityId, CommunityIdEncoded, never> = Schema.String;

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
export interface ComplianceJobEncoded {
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
export const ComplianceJob: Schema.Schema<ComplianceJob, ComplianceJobEncoded, never> = Schema.Struct({
  created_at: Schema.optional(Schema.String),
  download_expires_at: Schema.optional(Schema.String),
  download_url: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  resumable: Schema.optional(Schema.Boolean),
  status: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  upload_expires_at: Schema.optional(Schema.String),
  upload_url: Schema.optional(Schema.String),
});

export interface Connection {
  readonly client_ip?: string;
  readonly connected_at?: Date;
  readonly disconnect_reason?: string;
  readonly disconnected_at?: Date;
  readonly endpoint_name?: string;
  readonly id?: string;
}
export interface ConnectionEncoded {
  readonly client_ip?: string;
  readonly connected_at?: string;
  readonly disconnect_reason?: string;
  readonly disconnected_at?: string;
  readonly endpoint_name?: string;
  readonly id?: string;
}
export const Connection: Schema.Schema<Connection, ConnectionEncoded, never> = Schema.Struct({
  client_ip: Schema.optional(Schema.String),
  connected_at: Schema.optional(Schema.DateFromString),
  disconnect_reason: Schema.optional(Schema.String),
  disconnected_at: Schema.optional(Schema.DateFromString),
  endpoint_name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
});

export type CountryCode = string;
export type CountryCodeEncoded = string;
export const CountryCode: Schema.Schema<CountryCode, CountryCodeEncoded, never> = Schema.String;

export interface CreateAccountActivitySubscriptionRequest {

}
export interface CreateAccountActivitySubscriptionRequestEncoded {

}
export const CreateAccountActivitySubscriptionRequest: Schema.Schema<CreateAccountActivitySubscriptionRequest, CreateAccountActivitySubscriptionRequestEncoded, never> = Schema.Struct({

});

export interface CreateAccountActivitySubscriptionResponse {
  readonly data?: CreateAccountActivitySubscriptionResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface CreateAccountActivitySubscriptionResponseEncoded {
  readonly data?: CreateAccountActivitySubscriptionResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const CreateAccountActivitySubscriptionResponse: Schema.Schema<CreateAccountActivitySubscriptionResponse, CreateAccountActivitySubscriptionResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => CreateAccountActivitySubscriptionResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface CreateAccountActivitySubscriptionResponseData {
  readonly subscribed: boolean;
}
export interface CreateAccountActivitySubscriptionResponseDataEncoded {
  readonly subscribed: boolean;
}
export const CreateAccountActivitySubscriptionResponseData: Schema.Schema<CreateAccountActivitySubscriptionResponseData, CreateAccountActivitySubscriptionResponseDataEncoded, never> = Schema.Struct({
  subscribed: Schema.Boolean,
});

export interface CreateActivitySubscriptionFilter {
  readonly direction?: "inbound" | "outbound";
  readonly keyword?: string;
  readonly user_id?: string;
}
export interface CreateActivitySubscriptionFilterEncoded {
  readonly direction?: "inbound" | "outbound";
  readonly keyword?: string;
  readonly user_id?: string;
}
export const CreateActivitySubscriptionFilter: Schema.Schema<CreateActivitySubscriptionFilter, CreateActivitySubscriptionFilterEncoded, never> = Schema.Struct({
  direction: Schema.optional(Schema.Union(Schema.Literal("inbound"), Schema.Literal("outbound"))),
  keyword: Schema.optional(Schema.String),
  user_id: Schema.optional(Schema.String),
});

export interface CreateActivitySubscriptionRequest {
  readonly event_type: "profile.update.bio" | "profile.update.profile_picture" | "profile.update.banner_picture" | "profile.update.screenname" | "profile.update.geo" | "profile.update.url" | "profile.update.verified_badge" | "profile.update.affiliate_badge" | "profile.update.handle" | "news.new" | "follow.follow" | "follow.unfollow" | "spaces.start" | "spaces.end" | "chat.received" | "chat.sent" | "chat.conversation.join" | "chat.conversation_join" | "chat.conversation.member_added" | "chat.conversation.member_removed" | "chat.conversation.admin_added" | "chat.conversation.admin_removed" | "chat.update.group_name" | "chat.update.restrictions" | "dm.sent" | "dm.received" | "dm.indicate_typing" | "dm.read" | "post.create" | "post.delete" | "post.mention.create" | "like.create" | "mute.mute" | "mute.unmute" | "block.block" | "block.unblock";
  readonly filter: CreateActivitySubscriptionFilter;
  readonly tag?: string;
  readonly webhook_id?: string;
}
export interface CreateActivitySubscriptionRequestEncoded {
  readonly event_type: "profile.update.bio" | "profile.update.profile_picture" | "profile.update.banner_picture" | "profile.update.screenname" | "profile.update.geo" | "profile.update.url" | "profile.update.verified_badge" | "profile.update.affiliate_badge" | "profile.update.handle" | "news.new" | "follow.follow" | "follow.unfollow" | "spaces.start" | "spaces.end" | "chat.received" | "chat.sent" | "chat.conversation.join" | "chat.conversation_join" | "chat.conversation.member_added" | "chat.conversation.member_removed" | "chat.conversation.admin_added" | "chat.conversation.admin_removed" | "chat.update.group_name" | "chat.update.restrictions" | "dm.sent" | "dm.received" | "dm.indicate_typing" | "dm.read" | "post.create" | "post.delete" | "post.mention.create" | "like.create" | "mute.mute" | "mute.unmute" | "block.block" | "block.unblock";
  readonly filter: CreateActivitySubscriptionFilterEncoded;
  readonly tag?: string;
  readonly webhook_id?: string;
}
export const CreateActivitySubscriptionRequest: Schema.Schema<CreateActivitySubscriptionRequest, CreateActivitySubscriptionRequestEncoded, never> = Schema.Struct({
  event_type: Schema.Union(Schema.Literal("profile.update.bio"), Schema.Literal("profile.update.profile_picture"), Schema.Literal("profile.update.banner_picture"), Schema.Literal("profile.update.screenname"), Schema.Literal("profile.update.geo"), Schema.Literal("profile.update.url"), Schema.Literal("profile.update.verified_badge"), Schema.Literal("profile.update.affiliate_badge"), Schema.Literal("profile.update.handle"), Schema.Literal("news.new"), Schema.Literal("follow.follow"), Schema.Literal("follow.unfollow"), Schema.Literal("spaces.start"), Schema.Literal("spaces.end"), Schema.Literal("chat.received"), Schema.Literal("chat.sent"), Schema.Literal("chat.conversation.join"), Schema.Literal("chat.conversation_join"), Schema.Literal("chat.conversation.member_added"), Schema.Literal("chat.conversation.member_removed"), Schema.Literal("chat.conversation.admin_added"), Schema.Literal("chat.conversation.admin_removed"), Schema.Literal("chat.update.group_name"), Schema.Literal("chat.update.restrictions"), Schema.Literal("dm.sent"), Schema.Literal("dm.received"), Schema.Literal("dm.indicate_typing"), Schema.Literal("dm.read"), Schema.Literal("post.create"), Schema.Literal("post.delete"), Schema.Literal("post.mention.create"), Schema.Literal("like.create"), Schema.Literal("mute.mute"), Schema.Literal("mute.unmute"), Schema.Literal("block.block"), Schema.Literal("block.unblock")),
  filter: Schema.suspend(() => CreateActivitySubscriptionFilter),
  tag: Schema.optional(Schema.String),
  webhook_id: Schema.optional(Schema.String),
});

export interface CreateActivitySubscriptionResponse {
  readonly data?: CreateActivitySubscriptionResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface CreateActivitySubscriptionResponseEncoded {
  readonly data?: CreateActivitySubscriptionResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const CreateActivitySubscriptionResponse: Schema.Schema<CreateActivitySubscriptionResponse, CreateActivitySubscriptionResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => CreateActivitySubscriptionResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface CreateActivitySubscriptionResponseData {
  readonly subscription?: CreateActivitySubscriptionResponseDataSubscription;
}
export interface CreateActivitySubscriptionResponseDataEncoded {
  readonly subscription?: CreateActivitySubscriptionResponseDataSubscriptionEncoded;
}
export const CreateActivitySubscriptionResponseData: Schema.Schema<CreateActivitySubscriptionResponseData, CreateActivitySubscriptionResponseDataEncoded, never> = Schema.Struct({
  subscription: Schema.optional(Schema.suspend(() => CreateActivitySubscriptionResponseDataSubscription)),
});

export interface CreateActivitySubscriptionResponseDataSubscription {
  readonly created_at?: string;
  readonly event_type?: string;
  readonly filter?: CreateActivitySubscriptionResponseDataSubscriptionFilter;
  readonly subscription_id?: string;
  readonly tag?: string;
  readonly updated_at?: string;
  readonly webhook_id?: string;
}
export interface CreateActivitySubscriptionResponseDataSubscriptionEncoded {
  readonly created_at?: string;
  readonly event_type?: string;
  readonly filter?: CreateActivitySubscriptionResponseDataSubscriptionFilterEncoded;
  readonly subscription_id?: string;
  readonly tag?: string;
  readonly updated_at?: string;
  readonly webhook_id?: string;
}
export const CreateActivitySubscriptionResponseDataSubscription: Schema.Schema<CreateActivitySubscriptionResponseDataSubscription, CreateActivitySubscriptionResponseDataSubscriptionEncoded, never> = Schema.Struct({
  created_at: Schema.optional(Schema.String),
  event_type: Schema.optional(Schema.String),
  filter: Schema.optional(Schema.suspend(() => CreateActivitySubscriptionResponseDataSubscriptionFilter)),
  subscription_id: Schema.optional(Schema.String),
  tag: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
  webhook_id: Schema.optional(Schema.String),
});

export interface CreateActivitySubscriptionResponseDataSubscriptionFilter {
  readonly direction?: string;
  readonly keyword?: string;
  readonly user_id?: string;
}
export interface CreateActivitySubscriptionResponseDataSubscriptionFilterEncoded {
  readonly direction?: string;
  readonly keyword?: string;
  readonly user_id?: string;
}
export const CreateActivitySubscriptionResponseDataSubscriptionFilter: Schema.Schema<CreateActivitySubscriptionResponseDataSubscriptionFilter, CreateActivitySubscriptionResponseDataSubscriptionFilterEncoded, never> = Schema.Struct({
  direction: Schema.optional(Schema.String),
  keyword: Schema.optional(Schema.String),
  user_id: Schema.optional(Schema.String),
});

export interface CreateChatConversationActionSignatures {
  readonly encoded_message_event_detail: string;
  readonly message_event_signature: CreateChatConversationActionSignaturesMessageEventSignature;
  readonly message_id: string;
  readonly signature_payload?: string;
}
export interface CreateChatConversationActionSignaturesEncoded {
  readonly encoded_message_event_detail: string;
  readonly message_event_signature: CreateChatConversationActionSignaturesMessageEventSignatureEncoded;
  readonly message_id: string;
  readonly signature_payload?: string;
}
export const CreateChatConversationActionSignatures: Schema.Schema<CreateChatConversationActionSignatures, CreateChatConversationActionSignaturesEncoded, never> = Schema.Struct({
  encoded_message_event_detail: Schema.String,
  message_event_signature: Schema.suspend(() => CreateChatConversationActionSignaturesMessageEventSignature),
  message_id: Schema.String,
  signature_payload: Schema.optional(Schema.String),
});

export interface CreateChatConversationActionSignaturesMessageEventSignature {
  readonly message_signing_key_info_list?: ReadonlyArray<CreateChatConversationActionSignaturesMessageEventSignatureMessageSigningKeyInfoList>;
  readonly public_key_version: string;
  readonly signature: string;
  readonly signature_version: string;
  readonly signing_public_key?: string;
}
export interface CreateChatConversationActionSignaturesMessageEventSignatureEncoded {
  readonly message_signing_key_info_list?: ReadonlyArray<CreateChatConversationActionSignaturesMessageEventSignatureMessageSigningKeyInfoListEncoded>;
  readonly public_key_version: string;
  readonly signature: string;
  readonly signature_version: string;
  readonly signing_public_key?: string;
}
export const CreateChatConversationActionSignaturesMessageEventSignature: Schema.Schema<CreateChatConversationActionSignaturesMessageEventSignature, CreateChatConversationActionSignaturesMessageEventSignatureEncoded, never> = Schema.Struct({
  message_signing_key_info_list: Schema.optional(Schema.Array(Schema.suspend(() => CreateChatConversationActionSignaturesMessageEventSignatureMessageSigningKeyInfoList))),
  public_key_version: Schema.String,
  signature: Schema.String,
  signature_version: Schema.String,
  signing_public_key: Schema.optional(Schema.String),
});

export interface CreateChatConversationActionSignaturesMessageEventSignatureMessageSigningKeyInfoList {
  readonly member_id?: string;
  readonly public_key_version?: string;
  readonly signing_public_key?: string;
}
export interface CreateChatConversationActionSignaturesMessageEventSignatureMessageSigningKeyInfoListEncoded {
  readonly member_id?: string;
  readonly public_key_version?: string;
  readonly signing_public_key?: string;
}
export const CreateChatConversationActionSignaturesMessageEventSignatureMessageSigningKeyInfoList: Schema.Schema<CreateChatConversationActionSignaturesMessageEventSignatureMessageSigningKeyInfoList, CreateChatConversationActionSignaturesMessageEventSignatureMessageSigningKeyInfoListEncoded, never> = Schema.Struct({
  member_id: Schema.optional(Schema.String),
  public_key_version: Schema.optional(Schema.String),
  signing_public_key: Schema.optional(Schema.String),
});

export interface CreateChatConversationConversationParticipantKeys {
  readonly encrypted_conversation_key?: string;
  readonly public_key_version?: string;
  readonly user_id?: string;
}
export interface CreateChatConversationConversationParticipantKeysEncoded {
  readonly encrypted_conversation_key?: string;
  readonly public_key_version?: string;
  readonly user_id?: string;
}
export const CreateChatConversationConversationParticipantKeys: Schema.Schema<CreateChatConversationConversationParticipantKeys, CreateChatConversationConversationParticipantKeysEncoded, never> = Schema.Struct({
  encrypted_conversation_key: Schema.optional(Schema.String),
  public_key_version: Schema.optional(Schema.String),
  user_id: Schema.optional(Schema.String),
});

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
export interface CreateChatConversationRequestEncoded {
  readonly action_signatures?: ReadonlyArray<CreateChatConversationActionSignaturesEncoded>;
  readonly base64_encoded_key_rotation?: string;
  readonly conversation_id: string;
  readonly conversation_key_version: string;
  readonly conversation_participant_keys: ReadonlyArray<CreateChatConversationConversationParticipantKeysEncoded>;
  readonly group_admins?: ReadonlyArray<string>;
  readonly group_avatar_url?: string;
  readonly group_description?: string;
  readonly group_members: ReadonlyArray<string>;
  readonly group_name?: string;
  readonly ttl_msec?: string;
}
export const CreateChatConversationRequest: Schema.Schema<CreateChatConversationRequest, CreateChatConversationRequestEncoded, never> = Schema.Struct({
  action_signatures: Schema.optional(Schema.Array(Schema.suspend(() => CreateChatConversationActionSignatures))),
  base64_encoded_key_rotation: Schema.optional(Schema.String),
  conversation_id: Schema.String,
  conversation_key_version: Schema.String,
  conversation_participant_keys: Schema.Array(Schema.suspend(() => CreateChatConversationConversationParticipantKeys)),
  group_admins: Schema.optional(Schema.Array(Schema.String)),
  group_avatar_url: Schema.optional(Schema.String),
  group_description: Schema.optional(Schema.String),
  group_members: Schema.Array(Schema.String),
  group_name: Schema.optional(Schema.String),
  ttl_msec: Schema.optional(Schema.String),
});

export interface CreateChatConversationResponse {
  readonly data?: CreateChatConversationResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface CreateChatConversationResponseEncoded {
  readonly data?: CreateChatConversationResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const CreateChatConversationResponse: Schema.Schema<CreateChatConversationResponse, CreateChatConversationResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => CreateChatConversationResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface CreateChatConversationResponseData {
  readonly conversation_id: string;
  readonly conversation_key_change_sequence_id?: string;
}
export interface CreateChatConversationResponseDataEncoded {
  readonly conversation_id: string;
  readonly conversation_key_change_sequence_id?: string;
}
export const CreateChatConversationResponseData: Schema.Schema<CreateChatConversationResponseData, CreateChatConversationResponseDataEncoded, never> = Schema.Struct({
  conversation_id: Schema.String,
  conversation_key_change_sequence_id: Schema.optional(Schema.String),
});

export interface CreateCommunityNotesInfo {
  readonly classification: "misinformed_or_potentially_misleading" | "not_misleading";
  readonly is_media_note?: boolean;
  readonly misleading_tags: ReadonlyArray<"disputed_claim_as_fact" | "factual_error" | "manipulated_media" | "misinterpreted_satire" | "missing_important_context" | "other" | "outdated_information">;
  readonly text: string;
  readonly trustworthy_sources: boolean;
}
export interface CreateCommunityNotesInfoEncoded {
  readonly classification: "misinformed_or_potentially_misleading" | "not_misleading";
  readonly is_media_note?: boolean;
  readonly misleading_tags: ReadonlyArray<"disputed_claim_as_fact" | "factual_error" | "manipulated_media" | "misinterpreted_satire" | "missing_important_context" | "other" | "outdated_information">;
  readonly text: string;
  readonly trustworthy_sources: boolean;
}
export const CreateCommunityNotesInfo: Schema.Schema<CreateCommunityNotesInfo, CreateCommunityNotesInfoEncoded, never> = Schema.Struct({
  classification: Schema.Union(Schema.Literal("misinformed_or_potentially_misleading"), Schema.Literal("not_misleading")),
  is_media_note: Schema.optional(Schema.Boolean),
  misleading_tags: Schema.Array(Schema.Union(Schema.Literal("disputed_claim_as_fact"), Schema.Literal("factual_error"), Schema.Literal("manipulated_media"), Schema.Literal("misinterpreted_satire"), Schema.Literal("missing_important_context"), Schema.Literal("other"), Schema.Literal("outdated_information"))),
  text: Schema.String,
  trustworthy_sources: Schema.Boolean,
});

export interface CreateCommunityNotesRequest {
  readonly info: CreateCommunityNotesInfo;
  readonly post_id: string;
  readonly test_mode: boolean;
}
export interface CreateCommunityNotesRequestEncoded {
  readonly info: CreateCommunityNotesInfoEncoded;
  readonly post_id: string;
  readonly test_mode: boolean;
}
export const CreateCommunityNotesRequest: Schema.Schema<CreateCommunityNotesRequest, CreateCommunityNotesRequestEncoded, never> = Schema.Struct({
  info: Schema.suspend(() => CreateCommunityNotesInfo),
  post_id: Schema.String,
  test_mode: Schema.Boolean,
});

export interface CreateCommunityNotesResponse {
  readonly data?: CreateCommunityNotesResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface CreateCommunityNotesResponseEncoded {
  readonly data?: CreateCommunityNotesResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const CreateCommunityNotesResponse: Schema.Schema<CreateCommunityNotesResponse, CreateCommunityNotesResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => CreateCommunityNotesResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface CreateCommunityNotesResponseData {
  readonly id: string;
}
export interface CreateCommunityNotesResponseDataEncoded {
  readonly id: string;
}
export const CreateCommunityNotesResponseData: Schema.Schema<CreateCommunityNotesResponseData, CreateCommunityNotesResponseDataEncoded, never> = Schema.Struct({
  id: Schema.String,
});

export interface CreateComplianceJobsRequest {
  readonly name?: string;
  readonly resumable?: boolean;
  readonly type: "tweets" | "users";
}
export interface CreateComplianceJobsRequestEncoded {
  readonly name?: string;
  readonly resumable?: boolean;
  readonly type: "tweets" | "users";
}
export const CreateComplianceJobsRequest: Schema.Schema<CreateComplianceJobsRequest, CreateComplianceJobsRequestEncoded, never> = Schema.Struct({
  name: Schema.optional(Schema.String),
  resumable: Schema.optional(Schema.Boolean),
  type: Schema.Union(Schema.Literal("tweets"), Schema.Literal("users")),
});

export interface CreateComplianceJobsResponse {
  readonly data?: ComplianceJob;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface CreateComplianceJobsResponseEncoded {
  readonly data?: ComplianceJobEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const CreateComplianceJobsResponse: Schema.Schema<CreateComplianceJobsResponse, CreateComplianceJobsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => ComplianceJob)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface CreateDirectMessagesByConversationIdAttachments {
  readonly media_id: string;
}
export interface CreateDirectMessagesByConversationIdAttachmentsEncoded {
  readonly media_id: string;
}
export const CreateDirectMessagesByConversationIdAttachments: Schema.Schema<CreateDirectMessagesByConversationIdAttachments, CreateDirectMessagesByConversationIdAttachmentsEncoded, never> = Schema.Struct({
  media_id: Schema.String,
});

/** At least one of `text`, `attachments` is required. */
export interface CreateDirectMessagesByConversationIdRequest {
  readonly attachments?: ReadonlyArray<CreateDirectMessagesByConversationIdAttachments>;
  readonly text?: string;
}
export interface CreateDirectMessagesByConversationIdRequestEncoded {
  readonly attachments?: ReadonlyArray<CreateDirectMessagesByConversationIdAttachmentsEncoded>;
  readonly text?: string;
}
export const CreateDirectMessagesByConversationIdRequest: Schema.Schema<CreateDirectMessagesByConversationIdRequest, CreateDirectMessagesByConversationIdRequestEncoded, never> = Schema.Struct({
  attachments: Schema.optional(Schema.Array(Schema.suspend(() => CreateDirectMessagesByConversationIdAttachments))),
  text: Schema.optional(Schema.String),
});

export interface CreateDirectMessagesByConversationIdResponse {
  readonly data?: CreateDirectMessagesByConversationIdResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface CreateDirectMessagesByConversationIdResponseEncoded {
  readonly data?: CreateDirectMessagesByConversationIdResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const CreateDirectMessagesByConversationIdResponse: Schema.Schema<CreateDirectMessagesByConversationIdResponse, CreateDirectMessagesByConversationIdResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => CreateDirectMessagesByConversationIdResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface CreateDirectMessagesByConversationIdResponseData {
  readonly dm_conversation_id: string;
  readonly dm_event_id: string;
}
export interface CreateDirectMessagesByConversationIdResponseDataEncoded {
  readonly dm_conversation_id: string;
  readonly dm_event_id: string;
}
export const CreateDirectMessagesByConversationIdResponseData: Schema.Schema<CreateDirectMessagesByConversationIdResponseData, CreateDirectMessagesByConversationIdResponseDataEncoded, never> = Schema.Struct({
  dm_conversation_id: Schema.String,
  dm_event_id: Schema.String,
});

export interface CreateDirectMessagesByParticipantIdAttachments {
  readonly media_id: string;
}
export interface CreateDirectMessagesByParticipantIdAttachmentsEncoded {
  readonly media_id: string;
}
export const CreateDirectMessagesByParticipantIdAttachments: Schema.Schema<CreateDirectMessagesByParticipantIdAttachments, CreateDirectMessagesByParticipantIdAttachmentsEncoded, never> = Schema.Struct({
  media_id: Schema.String,
});

/** At least one of `text`, `attachments` is required. */
export interface CreateDirectMessagesByParticipantIdRequest {
  readonly attachments?: ReadonlyArray<CreateDirectMessagesByParticipantIdAttachments>;
  readonly text?: string;
}
export interface CreateDirectMessagesByParticipantIdRequestEncoded {
  readonly attachments?: ReadonlyArray<CreateDirectMessagesByParticipantIdAttachmentsEncoded>;
  readonly text?: string;
}
export const CreateDirectMessagesByParticipantIdRequest: Schema.Schema<CreateDirectMessagesByParticipantIdRequest, CreateDirectMessagesByParticipantIdRequestEncoded, never> = Schema.Struct({
  attachments: Schema.optional(Schema.Array(Schema.suspend(() => CreateDirectMessagesByParticipantIdAttachments))),
  text: Schema.optional(Schema.String),
});

export interface CreateDirectMessagesByParticipantIdResponse {
  readonly data?: CreateDirectMessagesByParticipantIdResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface CreateDirectMessagesByParticipantIdResponseEncoded {
  readonly data?: CreateDirectMessagesByParticipantIdResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const CreateDirectMessagesByParticipantIdResponse: Schema.Schema<CreateDirectMessagesByParticipantIdResponse, CreateDirectMessagesByParticipantIdResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => CreateDirectMessagesByParticipantIdResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface CreateDirectMessagesByParticipantIdResponseData {
  readonly dm_conversation_id: string;
  readonly dm_event_id: string;
}
export interface CreateDirectMessagesByParticipantIdResponseDataEncoded {
  readonly dm_conversation_id: string;
  readonly dm_event_id: string;
}
export const CreateDirectMessagesByParticipantIdResponseData: Schema.Schema<CreateDirectMessagesByParticipantIdResponseData, CreateDirectMessagesByParticipantIdResponseDataEncoded, never> = Schema.Struct({
  dm_conversation_id: Schema.String,
  dm_event_id: Schema.String,
});

export interface CreateDirectMessagesConversationMessage {
  readonly attachments?: ReadonlyArray<CreateDirectMessagesConversationMessageAttachments>;
  readonly text?: string;
}
export interface CreateDirectMessagesConversationMessageEncoded {
  readonly attachments?: ReadonlyArray<CreateDirectMessagesConversationMessageAttachmentsEncoded>;
  readonly text?: string;
}
export const CreateDirectMessagesConversationMessage: Schema.Schema<CreateDirectMessagesConversationMessage, CreateDirectMessagesConversationMessageEncoded, never> = Schema.Struct({
  attachments: Schema.optional(Schema.Array(Schema.suspend(() => CreateDirectMessagesConversationMessageAttachments))),
  text: Schema.optional(Schema.String),
});

export interface CreateDirectMessagesConversationMessageAttachments {
  readonly media_id: string;
}
export interface CreateDirectMessagesConversationMessageAttachmentsEncoded {
  readonly media_id: string;
}
export const CreateDirectMessagesConversationMessageAttachments: Schema.Schema<CreateDirectMessagesConversationMessageAttachments, CreateDirectMessagesConversationMessageAttachmentsEncoded, never> = Schema.Struct({
  media_id: Schema.String,
});

export interface CreateDirectMessagesConversationRequest {
  readonly conversation_type: "Group";
  readonly message: CreateDirectMessagesConversationMessage;
  readonly participant_ids: ReadonlyArray<string>;
}
export interface CreateDirectMessagesConversationRequestEncoded {
  readonly conversation_type: "Group";
  readonly message: CreateDirectMessagesConversationMessageEncoded;
  readonly participant_ids: ReadonlyArray<string>;
}
export const CreateDirectMessagesConversationRequest: Schema.Schema<CreateDirectMessagesConversationRequest, CreateDirectMessagesConversationRequestEncoded, never> = Schema.Struct({
  conversation_type: Schema.Union(Schema.Literal("Group")),
  message: Schema.suspend(() => CreateDirectMessagesConversationMessage),
  participant_ids: Schema.Array(Schema.String),
});

export interface CreateDirectMessagesConversationResponse {
  readonly data?: CreateDirectMessagesConversationResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface CreateDirectMessagesConversationResponseEncoded {
  readonly data?: CreateDirectMessagesConversationResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const CreateDirectMessagesConversationResponse: Schema.Schema<CreateDirectMessagesConversationResponse, CreateDirectMessagesConversationResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => CreateDirectMessagesConversationResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface CreateDirectMessagesConversationResponseData {
  readonly dm_conversation_id: string;
  readonly dm_event_id: string;
}
export interface CreateDirectMessagesConversationResponseDataEncoded {
  readonly dm_conversation_id: string;
  readonly dm_event_id: string;
}
export const CreateDirectMessagesConversationResponseData: Schema.Schema<CreateDirectMessagesConversationResponseData, CreateDirectMessagesConversationResponseDataEncoded, never> = Schema.Struct({
  dm_conversation_id: Schema.String,
  dm_event_id: Schema.String,
});

export interface CreateListsRequest {
  readonly description?: string;
  readonly name: string;
  readonly private?: boolean;
}
export interface CreateListsRequestEncoded {
  readonly description?: string;
  readonly name: string;
  readonly private?: boolean;
}
export const CreateListsRequest: Schema.Schema<CreateListsRequest, CreateListsRequestEncoded, never> = Schema.Struct({
  description: Schema.optional(Schema.String),
  name: Schema.String,
  private: Schema.optional(Schema.Boolean),
});

export interface CreateListsResponse {
  readonly data?: CreateListsResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface CreateListsResponseEncoded {
  readonly data?: CreateListsResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const CreateListsResponse: Schema.Schema<CreateListsResponse, CreateListsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => CreateListsResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface CreateListsResponseData {
  readonly id: string;
  readonly name: string;
}
export interface CreateListsResponseDataEncoded {
  readonly id: string;
  readonly name: string;
}
export const CreateListsResponseData: Schema.Schema<CreateListsResponseData, CreateListsResponseDataEncoded, never> = Schema.Struct({
  id: Schema.String,
  name: Schema.String,
});

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
export interface CreateMediaMetadataMetadataEncoded {
  readonly allow_download_status?: CreateMediaMetadataMetadataAllowDownloadStatusEncoded;
  readonly alt_text?: CreateMediaMetadataMetadataAltTextEncoded;
  readonly audience_policy?: unknown;
  readonly content_expiration?: CreateMediaMetadataMetadataContentExpirationEncoded;
  readonly domain_restrictions?: CreateMediaMetadataMetadataDomainRestrictionsEncoded;
  readonly found_media_origin?: CreateMediaMetadataMetadataFoundMediaOriginEncoded;
  readonly geo_restrictions?: unknown;
  readonly management_info?: CreateMediaMetadataMetadataManagementInfoEncoded;
  readonly preview_image?: CreateMediaMetadataMetadataPreviewImageEncoded;
  readonly sensitive_media_warning?: unknown;
  readonly shared_info?: CreateMediaMetadataMetadataSharedInfoEncoded;
  readonly sticker_info?: CreateMediaMetadataMetadataStickerInfoEncoded;
  readonly upload_source?: CreateMediaMetadataMetadataUploadSourceEncoded;
}
export const CreateMediaMetadataMetadata: Schema.Schema<CreateMediaMetadataMetadata, CreateMediaMetadataMetadataEncoded, never> = Schema.Struct({
  allow_download_status: Schema.optional(Schema.suspend(() => CreateMediaMetadataMetadataAllowDownloadStatus)),
  alt_text: Schema.optional(Schema.suspend(() => CreateMediaMetadataMetadataAltText)),
  audience_policy: Schema.optional(Schema.Unknown),
  content_expiration: Schema.optional(Schema.suspend(() => CreateMediaMetadataMetadataContentExpiration)),
  domain_restrictions: Schema.optional(Schema.suspend(() => CreateMediaMetadataMetadataDomainRestrictions)),
  found_media_origin: Schema.optional(Schema.suspend(() => CreateMediaMetadataMetadataFoundMediaOrigin)),
  geo_restrictions: Schema.optional(Schema.Unknown),
  management_info: Schema.optional(Schema.suspend(() => CreateMediaMetadataMetadataManagementInfo)),
  preview_image: Schema.optional(Schema.suspend(() => CreateMediaMetadataMetadataPreviewImage)),
  sensitive_media_warning: Schema.optional(Schema.Unknown),
  shared_info: Schema.optional(Schema.suspend(() => CreateMediaMetadataMetadataSharedInfo)),
  sticker_info: Schema.optional(Schema.suspend(() => CreateMediaMetadataMetadataStickerInfo)),
  upload_source: Schema.optional(Schema.suspend(() => CreateMediaMetadataMetadataUploadSource)),
});

export interface CreateMediaMetadataMetadataAllowDownloadStatus {
  readonly allow_download?: boolean;
}
export interface CreateMediaMetadataMetadataAllowDownloadStatusEncoded {
  readonly allow_download?: boolean;
}
export const CreateMediaMetadataMetadataAllowDownloadStatus: Schema.Schema<CreateMediaMetadataMetadataAllowDownloadStatus, CreateMediaMetadataMetadataAllowDownloadStatusEncoded, never> = Schema.Struct({
  allow_download: Schema.optional(Schema.Boolean),
});

export interface CreateMediaMetadataMetadataAltText {
  readonly text: string;
}
export interface CreateMediaMetadataMetadataAltTextEncoded {
  readonly text: string;
}
export const CreateMediaMetadataMetadataAltText: Schema.Schema<CreateMediaMetadataMetadataAltText, CreateMediaMetadataMetadataAltTextEncoded, never> = Schema.Struct({
  text: Schema.String,
});

export interface CreateMediaMetadataMetadataContentExpiration {
  readonly timestamp_sec: number;
}
export interface CreateMediaMetadataMetadataContentExpirationEncoded {
  readonly timestamp_sec: number;
}
export const CreateMediaMetadataMetadataContentExpiration: Schema.Schema<CreateMediaMetadataMetadataContentExpiration, CreateMediaMetadataMetadataContentExpirationEncoded, never> = Schema.Struct({
  timestamp_sec: Schema.Number,
});

export interface CreateMediaMetadataMetadataDomainRestrictions {
  readonly whitelist: ReadonlyArray<string>;
}
export interface CreateMediaMetadataMetadataDomainRestrictionsEncoded {
  readonly whitelist: ReadonlyArray<string>;
}
export const CreateMediaMetadataMetadataDomainRestrictions: Schema.Schema<CreateMediaMetadataMetadataDomainRestrictions, CreateMediaMetadataMetadataDomainRestrictionsEncoded, never> = Schema.Struct({
  whitelist: Schema.Array(Schema.String),
});

export interface CreateMediaMetadataMetadataFoundMediaOrigin {
  readonly id: string;
  readonly provider: string;
}
export interface CreateMediaMetadataMetadataFoundMediaOriginEncoded {
  readonly id: string;
  readonly provider: string;
}
export const CreateMediaMetadataMetadataFoundMediaOrigin: Schema.Schema<CreateMediaMetadataMetadataFoundMediaOrigin, CreateMediaMetadataMetadataFoundMediaOriginEncoded, never> = Schema.Struct({
  id: Schema.String,
  provider: Schema.String,
});

export interface CreateMediaMetadataMetadataManagementInfo {
  readonly managed: boolean;
}
export interface CreateMediaMetadataMetadataManagementInfoEncoded {
  readonly managed: boolean;
}
export const CreateMediaMetadataMetadataManagementInfo: Schema.Schema<CreateMediaMetadataMetadataManagementInfo, CreateMediaMetadataMetadataManagementInfoEncoded, never> = Schema.Struct({
  managed: Schema.Boolean,
});

export interface CreateMediaMetadataMetadataPreviewImage {
  readonly media_key: unknown;
}
export interface CreateMediaMetadataMetadataPreviewImageEncoded {
  readonly media_key: unknown;
}
export const CreateMediaMetadataMetadataPreviewImage: Schema.Schema<CreateMediaMetadataMetadataPreviewImage, CreateMediaMetadataMetadataPreviewImageEncoded, never> = Schema.Struct({
  media_key: Schema.Unknown,
});

export interface CreateMediaMetadataMetadataSharedInfo {
  readonly shared: boolean;
}
export interface CreateMediaMetadataMetadataSharedInfoEncoded {
  readonly shared: boolean;
}
export const CreateMediaMetadataMetadataSharedInfo: Schema.Schema<CreateMediaMetadataMetadataSharedInfo, CreateMediaMetadataMetadataSharedInfoEncoded, never> = Schema.Struct({
  shared: Schema.Boolean,
});

export interface CreateMediaMetadataMetadataStickerInfo {
  readonly stickers: ReadonlyArray<CreateMediaMetadataMetadataStickerInfoStickers>;
}
export interface CreateMediaMetadataMetadataStickerInfoEncoded {
  readonly stickers: ReadonlyArray<CreateMediaMetadataMetadataStickerInfoStickersEncoded>;
}
export const CreateMediaMetadataMetadataStickerInfo: Schema.Schema<CreateMediaMetadataMetadataStickerInfo, CreateMediaMetadataMetadataStickerInfoEncoded, never> = Schema.Struct({
  stickers: Schema.Array(Schema.suspend(() => CreateMediaMetadataMetadataStickerInfoStickers)),
});

export interface CreateMediaMetadataMetadataStickerInfoStickers {

}
export interface CreateMediaMetadataMetadataStickerInfoStickersEncoded {

}
export const CreateMediaMetadataMetadataStickerInfoStickers: Schema.Schema<CreateMediaMetadataMetadataStickerInfoStickers, CreateMediaMetadataMetadataStickerInfoStickersEncoded, never> = Schema.Struct({

});

export interface CreateMediaMetadataMetadataUploadSource {
  readonly upload_source: string;
}
export interface CreateMediaMetadataMetadataUploadSourceEncoded {
  readonly upload_source: string;
}
export const CreateMediaMetadataMetadataUploadSource: Schema.Schema<CreateMediaMetadataMetadataUploadSource, CreateMediaMetadataMetadataUploadSourceEncoded, never> = Schema.Struct({
  upload_source: Schema.String,
});

export interface CreateMediaMetadataRequest {
  readonly id: string;
  readonly metadata?: CreateMediaMetadataMetadata;
}
export interface CreateMediaMetadataRequestEncoded {
  readonly id: string;
  readonly metadata?: CreateMediaMetadataMetadataEncoded;
}
export const CreateMediaMetadataRequest: Schema.Schema<CreateMediaMetadataRequest, CreateMediaMetadataRequestEncoded, never> = Schema.Struct({
  id: Schema.String,
  metadata: Schema.optional(Schema.suspend(() => CreateMediaMetadataMetadata)),
});

export interface CreateMediaMetadataResponse {
  readonly data?: CreateMediaMetadataResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface CreateMediaMetadataResponseEncoded {
  readonly data?: CreateMediaMetadataResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const CreateMediaMetadataResponse: Schema.Schema<CreateMediaMetadataResponse, CreateMediaMetadataResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => CreateMediaMetadataResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface CreateMediaMetadataResponseData {
  readonly associated_metadata?: unknown;
  readonly id: string;
}
export interface CreateMediaMetadataResponseDataEncoded {
  readonly associated_metadata?: unknown;
  readonly id: string;
}
export const CreateMediaMetadataResponseData: Schema.Schema<CreateMediaMetadataResponseData, CreateMediaMetadataResponseDataEncoded, never> = Schema.Struct({
  associated_metadata: Schema.optional(Schema.Unknown),
  id: Schema.String,
});

export interface CreateMediaSubtitlesRequest {
  readonly id?: string;
  readonly media_category?: "AmplifyVideo" | "TweetVideo";
  readonly subtitles?: CreateMediaSubtitlesSubtitles;
}
export interface CreateMediaSubtitlesRequestEncoded {
  readonly id?: string;
  readonly media_category?: "AmplifyVideo" | "TweetVideo";
  readonly subtitles?: CreateMediaSubtitlesSubtitlesEncoded;
}
export const CreateMediaSubtitlesRequest: Schema.Schema<CreateMediaSubtitlesRequest, CreateMediaSubtitlesRequestEncoded, never> = Schema.Struct({
  id: Schema.optional(Schema.String),
  media_category: Schema.optional(Schema.Union(Schema.Literal("AmplifyVideo"), Schema.Literal("TweetVideo"))),
  subtitles: Schema.optional(Schema.suspend(() => CreateMediaSubtitlesSubtitles)),
});

export interface CreateMediaSubtitlesResponse {
  readonly data?: CreateMediaSubtitlesResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface CreateMediaSubtitlesResponseEncoded {
  readonly data?: CreateMediaSubtitlesResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const CreateMediaSubtitlesResponse: Schema.Schema<CreateMediaSubtitlesResponse, CreateMediaSubtitlesResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => CreateMediaSubtitlesResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface CreateMediaSubtitlesResponseData {
  readonly associated_subtitles?: unknown;
  readonly id?: string;
  readonly media_category?: string;
}
export interface CreateMediaSubtitlesResponseDataEncoded {
  readonly associated_subtitles?: unknown;
  readonly id?: string;
  readonly media_category?: string;
}
export const CreateMediaSubtitlesResponseData: Schema.Schema<CreateMediaSubtitlesResponseData, CreateMediaSubtitlesResponseDataEncoded, never> = Schema.Struct({
  associated_subtitles: Schema.optional(Schema.Unknown),
  id: Schema.optional(Schema.String),
  media_category: Schema.optional(Schema.String),
});

export interface CreateMediaSubtitlesSubtitles {
  readonly display_name?: string;
  readonly id?: string;
  readonly language_code?: string;
}
export interface CreateMediaSubtitlesSubtitlesEncoded {
  readonly display_name?: string;
  readonly id?: string;
  readonly language_code?: string;
}
export const CreateMediaSubtitlesSubtitles: Schema.Schema<CreateMediaSubtitlesSubtitles, CreateMediaSubtitlesSubtitlesEncoded, never> = Schema.Struct({
  display_name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  language_code: Schema.optional(Schema.String),
});

export interface CreatePostsEditOptions {
  readonly previous_post_id: string;
}
export interface CreatePostsEditOptionsEncoded {
  readonly previous_post_id: string;
}
export const CreatePostsEditOptions: Schema.Schema<CreatePostsEditOptions, CreatePostsEditOptionsEncoded, never> = Schema.Struct({
  previous_post_id: Schema.String,
});

export interface CreatePostsGeo {
  readonly place_id: string;
}
export interface CreatePostsGeoEncoded {
  readonly place_id: string;
}
export const CreatePostsGeo: Schema.Schema<CreatePostsGeo, CreatePostsGeoEncoded, never> = Schema.Struct({
  place_id: Schema.String,
});

export interface CreatePostsMedia {
  readonly call_to_actions?: CreatePostsMediaCallToActions;
  readonly description?: string;
  readonly embeddable?: boolean;
  readonly media_ids: ReadonlyArray<string>;
  readonly preview_media_id?: string;
  readonly tagged_user_ids?: ReadonlyArray<string>;
  readonly title?: string;
}
export interface CreatePostsMediaEncoded {
  readonly call_to_actions?: CreatePostsMediaCallToActionsEncoded;
  readonly description?: string;
  readonly embeddable?: boolean;
  readonly media_ids: ReadonlyArray<string>;
  readonly preview_media_id?: string;
  readonly tagged_user_ids?: ReadonlyArray<string>;
  readonly title?: string;
}
export const CreatePostsMedia: Schema.Schema<CreatePostsMedia, CreatePostsMediaEncoded, never> = Schema.Struct({
  call_to_actions: Schema.optional(Schema.suspend(() => CreatePostsMediaCallToActions)),
  description: Schema.optional(Schema.String),
  embeddable: Schema.optional(Schema.Boolean),
  media_ids: Schema.Array(Schema.String),
  preview_media_id: Schema.optional(Schema.String),
  tagged_user_ids: Schema.optional(Schema.Array(Schema.String)),
  title: Schema.optional(Schema.String),
});

export interface CreatePostsMediaCallToActions {
  readonly app_install?: CreatePostsMediaCallToActionsAppInstall;
  readonly visit_site?: CreatePostsMediaCallToActionsVisitSite;
  readonly watch_now?: CreatePostsMediaCallToActionsWatchNow;
}
export interface CreatePostsMediaCallToActionsEncoded {
  readonly app_install?: CreatePostsMediaCallToActionsAppInstallEncoded;
  readonly visit_site?: CreatePostsMediaCallToActionsVisitSiteEncoded;
  readonly watch_now?: CreatePostsMediaCallToActionsWatchNowEncoded;
}
export const CreatePostsMediaCallToActions: Schema.Schema<CreatePostsMediaCallToActions, CreatePostsMediaCallToActionsEncoded, never> = Schema.Struct({
  app_install: Schema.optional(Schema.suspend(() => CreatePostsMediaCallToActionsAppInstall)),
  visit_site: Schema.optional(Schema.suspend(() => CreatePostsMediaCallToActionsVisitSite)),
  watch_now: Schema.optional(Schema.suspend(() => CreatePostsMediaCallToActionsWatchNow)),
});

export interface CreatePostsMediaCallToActionsAppInstall {
  readonly app_store_id?: string;
  readonly ipad_app_store_id?: string;
  readonly play_store_id?: string;
}
export interface CreatePostsMediaCallToActionsAppInstallEncoded {
  readonly app_store_id?: string;
  readonly ipad_app_store_id?: string;
  readonly play_store_id?: string;
}
export const CreatePostsMediaCallToActionsAppInstall: Schema.Schema<CreatePostsMediaCallToActionsAppInstall, CreatePostsMediaCallToActionsAppInstallEncoded, never> = Schema.Struct({
  app_store_id: Schema.optional(Schema.String),
  ipad_app_store_id: Schema.optional(Schema.String),
  play_store_id: Schema.optional(Schema.String),
});

export interface CreatePostsMediaCallToActionsVisitSite {
  readonly url: string;
}
export interface CreatePostsMediaCallToActionsVisitSiteEncoded {
  readonly url: string;
}
export const CreatePostsMediaCallToActionsVisitSite: Schema.Schema<CreatePostsMediaCallToActionsVisitSite, CreatePostsMediaCallToActionsVisitSiteEncoded, never> = Schema.Struct({
  url: Schema.String,
});

export interface CreatePostsMediaCallToActionsWatchNow {
  readonly url: string;
}
export interface CreatePostsMediaCallToActionsWatchNowEncoded {
  readonly url: string;
}
export const CreatePostsMediaCallToActionsWatchNow: Schema.Schema<CreatePostsMediaCallToActionsWatchNow, CreatePostsMediaCallToActionsWatchNowEncoded, never> = Schema.Struct({
  url: Schema.String,
});

export interface CreatePostsPoll {
  readonly duration_minutes: number;
  readonly options: ReadonlyArray<string>;
  readonly reply_settings?: "following" | "mentionedUsers" | "subscribers" | "verified";
}
export interface CreatePostsPollEncoded {
  readonly duration_minutes: number;
  readonly options: ReadonlyArray<string>;
  readonly reply_settings?: "following" | "mentionedUsers" | "subscribers" | "verified";
}
export const CreatePostsPoll: Schema.Schema<CreatePostsPoll, CreatePostsPollEncoded, never> = Schema.Struct({
  duration_minutes: Schema.Int,
  options: Schema.Array(Schema.String),
  reply_settings: Schema.optional(Schema.Union(Schema.Literal("following"), Schema.Literal("mentionedUsers"), Schema.Literal("subscribers"), Schema.Literal("verified"))),
});

export interface CreatePostsReply {
  readonly auto_populate_reply_metadata?: boolean;
  readonly exclude_reply_user_ids?: ReadonlyArray<string>;
  readonly in_reply_to_tweet_id: string;
}
export interface CreatePostsReplyEncoded {
  readonly auto_populate_reply_metadata?: boolean;
  readonly exclude_reply_user_ids?: ReadonlyArray<string>;
  readonly in_reply_to_tweet_id: string;
}
export const CreatePostsReply: Schema.Schema<CreatePostsReply, CreatePostsReplyEncoded, never> = Schema.Struct({
  auto_populate_reply_metadata: Schema.optional(Schema.Boolean),
  exclude_reply_user_ids: Schema.optional(Schema.Array(Schema.String)),
  in_reply_to_tweet_id: Schema.String,
});

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
export interface CreatePostsRequestEncoded {
  readonly card_uri?: string;
  readonly community_id?: string;
  readonly direct_message_deep_link?: string;
  readonly edit_options?: CreatePostsEditOptionsEncoded;
  readonly for_super_followers_only?: boolean;
  readonly geo?: CreatePostsGeoEncoded;
  readonly made_with_ai?: boolean;
  readonly media?: CreatePostsMediaEncoded;
  readonly nullcast?: boolean;
  readonly paid_partnership?: boolean;
  readonly poll?: CreatePostsPollEncoded;
  readonly quote_tweet_id?: string;
  readonly reply?: CreatePostsReplyEncoded;
  readonly reply_settings?: "following" | "mentionedUsers" | "subscribers" | "verified";
  readonly share_with_followers?: boolean;
  readonly text?: string;
}
export const CreatePostsRequest: Schema.Schema<CreatePostsRequest, CreatePostsRequestEncoded, never> = Schema.Struct({
  card_uri: Schema.optional(Schema.String),
  community_id: Schema.optional(Schema.String),
  direct_message_deep_link: Schema.optional(Schema.String),
  edit_options: Schema.optional(Schema.suspend(() => CreatePostsEditOptions)),
  for_super_followers_only: Schema.optional(Schema.Boolean),
  geo: Schema.optional(Schema.suspend(() => CreatePostsGeo)),
  made_with_ai: Schema.optional(Schema.Boolean),
  media: Schema.optional(Schema.suspend(() => CreatePostsMedia)),
  nullcast: Schema.optional(Schema.Boolean),
  paid_partnership: Schema.optional(Schema.Boolean),
  poll: Schema.optional(Schema.suspend(() => CreatePostsPoll)),
  quote_tweet_id: Schema.optional(Schema.String),
  reply: Schema.optional(Schema.suspend(() => CreatePostsReply)),
  reply_settings: Schema.optional(Schema.Union(Schema.Literal("following"), Schema.Literal("mentionedUsers"), Schema.Literal("subscribers"), Schema.Literal("verified"))),
  share_with_followers: Schema.optional(Schema.Boolean),
  text: Schema.optional(Schema.String),
});

export interface CreatePostsResponse {
  readonly data?: CreatePostsResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface CreatePostsResponseEncoded {
  readonly data?: CreatePostsResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const CreatePostsResponse: Schema.Schema<CreatePostsResponse, CreatePostsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => CreatePostsResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface CreatePostsResponseData {
  readonly edit_history_post_ids?: ReadonlyArray<string>;
  readonly id: string;
  readonly text: string;
}
export interface CreatePostsResponseDataEncoded {
  readonly edit_history_post_ids?: ReadonlyArray<string>;
  readonly id: string;
  readonly text: string;
}
export const CreatePostsResponseData: Schema.Schema<CreatePostsResponseData, CreatePostsResponseDataEncoded, never> = Schema.Struct({
  edit_history_post_ids: Schema.optional(Schema.Array(Schema.String)),
  id: Schema.String,
  text: Schema.String,
});

export interface CreateScheduledBroadcastRecurrence {
  readonly frequency: "Daily" | "Weekly";
  readonly repeats: string;
}
export interface CreateScheduledBroadcastRecurrenceEncoded {
  readonly frequency: "Daily" | "Weekly";
  readonly repeats: string;
}
export const CreateScheduledBroadcastRecurrence: Schema.Schema<CreateScheduledBroadcastRecurrence, CreateScheduledBroadcastRecurrenceEncoded, never> = Schema.Struct({
  frequency: Schema.Union(Schema.Literal("Daily"), Schema.Literal("Weekly")),
  repeats: Schema.String,
});

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
export interface CreateScheduledBroadcastRequestEncoded {
  readonly available_for_replay?: boolean;
  readonly chat_option?: string;
  readonly description?: string;
  readonly is_locked?: boolean;
  readonly locale?: string;
  readonly manual_publish?: boolean;
  readonly recurrence?: CreateScheduledBroadcastRecurrenceEncoded;
  readonly scheduled_end_ms: string;
  readonly scheduled_start_ms: string;
  readonly source_id: string;
  readonly telecast_id?: string;
  readonly thumbnail_media_id?: string;
  readonly title?: string;
}
export const CreateScheduledBroadcastRequest: Schema.Schema<CreateScheduledBroadcastRequest, CreateScheduledBroadcastRequestEncoded, never> = Schema.Struct({
  available_for_replay: Schema.optional(Schema.Boolean),
  chat_option: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  is_locked: Schema.optional(Schema.Boolean),
  locale: Schema.optional(Schema.String),
  manual_publish: Schema.optional(Schema.Boolean),
  recurrence: Schema.optional(Schema.suspend(() => CreateScheduledBroadcastRecurrence)),
  scheduled_end_ms: Schema.String,
  scheduled_start_ms: Schema.String,
  source_id: Schema.String,
  telecast_id: Schema.optional(Schema.String),
  thumbnail_media_id: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
});

export interface CreateScheduledBroadcastResponse {
  readonly data?: CreateScheduledBroadcastResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface CreateScheduledBroadcastResponseEncoded {
  readonly data?: CreateScheduledBroadcastResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const CreateScheduledBroadcastResponse: Schema.Schema<CreateScheduledBroadcastResponse, CreateScheduledBroadcastResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => CreateScheduledBroadcastResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

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
export interface CreateScheduledBroadcastResponseDataEncoded {
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
export const CreateScheduledBroadcastResponseData: Schema.Schema<CreateScheduledBroadcastResponseData, CreateScheduledBroadcastResponseDataEncoded, never> = Schema.Struct({
  available_for_replay: Schema.optional(Schema.Boolean),
  broadcast_id: Schema.optional(Schema.String),
  chat_option: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  locale: Schema.optional(Schema.String),
  manual_publish: Schema.optional(Schema.Boolean),
  recurring_schedule_id: Schema.optional(Schema.String),
  scheduled_broadcast_id: Schema.optional(Schema.String),
  scheduled_end_ms: Schema.optional(Schema.String),
  scheduled_start_ms: Schema.optional(Schema.String),
  source_id: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  telecast_id: Schema.optional(Schema.String),
  thumbnail_media_id: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
});

export interface CreateUsersBookmarkFolderRequest {
  readonly name: string;
}
export interface CreateUsersBookmarkFolderRequestEncoded {
  readonly name: string;
}
export const CreateUsersBookmarkFolderRequest: Schema.Schema<CreateUsersBookmarkFolderRequest, CreateUsersBookmarkFolderRequestEncoded, never> = Schema.Struct({
  name: Schema.String,
});

export interface CreateUsersBookmarkFolderResponse {
  readonly data?: CreateUsersBookmarkFolderResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface CreateUsersBookmarkFolderResponseEncoded {
  readonly data?: CreateUsersBookmarkFolderResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const CreateUsersBookmarkFolderResponse: Schema.Schema<CreateUsersBookmarkFolderResponse, CreateUsersBookmarkFolderResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => CreateUsersBookmarkFolderResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface CreateUsersBookmarkFolderResponseData {
  readonly id: string;
  readonly name: string;
}
export interface CreateUsersBookmarkFolderResponseDataEncoded {
  readonly id: string;
  readonly name: string;
}
export const CreateUsersBookmarkFolderResponseData: Schema.Schema<CreateUsersBookmarkFolderResponseData, CreateUsersBookmarkFolderResponseDataEncoded, never> = Schema.Struct({
  id: Schema.String,
  name: Schema.String,
});

export interface CreateUsersBookmarkRequest {
  readonly folder_id?: string;
  readonly tweet_id: string;
}
export interface CreateUsersBookmarkRequestEncoded {
  readonly folder_id?: string;
  readonly tweet_id: string;
}
export const CreateUsersBookmarkRequest: Schema.Schema<CreateUsersBookmarkRequest, CreateUsersBookmarkRequestEncoded, never> = Schema.Struct({
  folder_id: Schema.optional(Schema.String),
  tweet_id: Schema.String,
});

export interface CreateUsersBookmarkResponse {
  readonly data?: CreateUsersBookmarkResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface CreateUsersBookmarkResponseEncoded {
  readonly data?: CreateUsersBookmarkResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const CreateUsersBookmarkResponse: Schema.Schema<CreateUsersBookmarkResponse, CreateUsersBookmarkResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => CreateUsersBookmarkResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface CreateUsersBookmarkResponseData {
  readonly bookmarked: boolean;
}
export interface CreateUsersBookmarkResponseDataEncoded {
  readonly bookmarked: boolean;
}
export const CreateUsersBookmarkResponseData: Schema.Schema<CreateUsersBookmarkResponseData, CreateUsersBookmarkResponseDataEncoded, never> = Schema.Struct({
  bookmarked: Schema.Boolean,
});

export interface CreateWebhookReplayJobRequest {
  readonly from_date: string;
  readonly to_date: string;
  readonly webhook_id: string;
}
export interface CreateWebhookReplayJobRequestEncoded {
  readonly from_date: string;
  readonly to_date: string;
  readonly webhook_id: string;
}
export const CreateWebhookReplayJobRequest: Schema.Schema<CreateWebhookReplayJobRequest, CreateWebhookReplayJobRequestEncoded, never> = Schema.Struct({
  from_date: Schema.String,
  to_date: Schema.String,
  webhook_id: Schema.String,
});

export interface CreateWebhookReplayJobResponse {
  readonly data?: CreateWebhookReplayJobResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface CreateWebhookReplayJobResponseEncoded {
  readonly data?: CreateWebhookReplayJobResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const CreateWebhookReplayJobResponse: Schema.Schema<CreateWebhookReplayJobResponse, CreateWebhookReplayJobResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => CreateWebhookReplayJobResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface CreateWebhookReplayJobResponseData {
  readonly created_at: string;
  readonly job_id: string;
}
export interface CreateWebhookReplayJobResponseDataEncoded {
  readonly created_at: string;
  readonly job_id: string;
}
export const CreateWebhookReplayJobResponseData: Schema.Schema<CreateWebhookReplayJobResponseData, CreateWebhookReplayJobResponseDataEncoded, never> = Schema.Struct({
  created_at: Schema.String,
  job_id: Schema.String,
});

export interface CreateWebhooksRequest {
  readonly url: string;
}
export interface CreateWebhooksRequestEncoded {
  readonly url: string;
}
export const CreateWebhooksRequest: Schema.Schema<CreateWebhooksRequest, CreateWebhooksRequestEncoded, never> = Schema.Struct({
  url: Schema.String,
});

export interface CreateWebhooksResponse {
  readonly data?: CreateWebhooksResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface CreateWebhooksResponseEncoded {
  readonly data?: CreateWebhooksResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const CreateWebhooksResponse: Schema.Schema<CreateWebhooksResponse, CreateWebhooksResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => CreateWebhooksResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface CreateWebhooksResponseData {
  readonly created_at: string;
  readonly id: string;
  readonly url: string;
  readonly valid: boolean;
}
export interface CreateWebhooksResponseDataEncoded {
  readonly created_at: string;
  readonly id: string;
  readonly url: string;
  readonly valid: boolean;
}
export const CreateWebhooksResponseData: Schema.Schema<CreateWebhooksResponseData, CreateWebhooksResponseDataEncoded, never> = Schema.Struct({
  created_at: Schema.String,
  id: Schema.String,
  url: Schema.String,
  valid: Schema.Boolean,
});

export interface CreateWebhooksStreamLinkResponse {
  readonly data?: CreateWebhooksStreamLinkResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface CreateWebhooksStreamLinkResponseEncoded {
  readonly data?: CreateWebhooksStreamLinkResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const CreateWebhooksStreamLinkResponse: Schema.Schema<CreateWebhooksStreamLinkResponse, CreateWebhooksStreamLinkResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => CreateWebhooksStreamLinkResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface CreateWebhooksStreamLinkResponseData {
  readonly provisioned: boolean;
}
export interface CreateWebhooksStreamLinkResponseDataEncoded {
  readonly provisioned: boolean;
}
export const CreateWebhooksStreamLinkResponseData: Schema.Schema<CreateWebhooksStreamLinkResponseData, CreateWebhooksStreamLinkResponseDataEncoded, never> = Schema.Struct({
  provisioned: Schema.Boolean,
});

export interface DeleteAccountActivitySubscriptionResponse {
  readonly data?: DeleteAccountActivitySubscriptionResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface DeleteAccountActivitySubscriptionResponseEncoded {
  readonly data?: DeleteAccountActivitySubscriptionResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const DeleteAccountActivitySubscriptionResponse: Schema.Schema<DeleteAccountActivitySubscriptionResponse, DeleteAccountActivitySubscriptionResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => DeleteAccountActivitySubscriptionResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface DeleteAccountActivitySubscriptionResponseData {
  readonly subscribed: boolean;
}
export interface DeleteAccountActivitySubscriptionResponseDataEncoded {
  readonly subscribed: boolean;
}
export const DeleteAccountActivitySubscriptionResponseData: Schema.Schema<DeleteAccountActivitySubscriptionResponseData, DeleteAccountActivitySubscriptionResponseDataEncoded, never> = Schema.Struct({
  subscribed: Schema.Boolean,
});

export interface DeleteActivitySubscriptionResponse {
  readonly data?: DeleteActivitySubscriptionResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface DeleteActivitySubscriptionResponseEncoded {
  readonly data?: DeleteActivitySubscriptionResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const DeleteActivitySubscriptionResponse: Schema.Schema<DeleteActivitySubscriptionResponse, DeleteActivitySubscriptionResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => DeleteActivitySubscriptionResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface DeleteActivitySubscriptionResponseData {
  readonly deleted: boolean;
}
export interface DeleteActivitySubscriptionResponseDataEncoded {
  readonly deleted: boolean;
}
export const DeleteActivitySubscriptionResponseData: Schema.Schema<DeleteActivitySubscriptionResponseData, DeleteActivitySubscriptionResponseDataEncoded, never> = Schema.Struct({
  deleted: Schema.Boolean,
});

export interface DeleteActivitySubscriptionsByIdsResponse {
  readonly data?: ReadonlyArray<unknown>;
  readonly errors?: ReadonlyArray<unknown>;
  readonly meta?: unknown;
}
export interface DeleteActivitySubscriptionsByIdsResponseEncoded {
  readonly data?: ReadonlyArray<unknown>;
  readonly errors?: ReadonlyArray<unknown>;
  readonly meta?: unknown;
}
export const DeleteActivitySubscriptionsByIdsResponse: Schema.Schema<DeleteActivitySubscriptionsByIdsResponse, DeleteActivitySubscriptionsByIdsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.Unknown)),
  errors: Schema.optional(Schema.Array(Schema.Unknown)),
  meta: Schema.optional(Schema.Unknown),
});

export interface DeleteAllConnectionsResponse {
  readonly data?: DeleteAllConnectionsResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface DeleteAllConnectionsResponseEncoded {
  readonly data?: DeleteAllConnectionsResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const DeleteAllConnectionsResponse: Schema.Schema<DeleteAllConnectionsResponse, DeleteAllConnectionsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => DeleteAllConnectionsResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface DeleteAllConnectionsResponseData {
  readonly failed_kills: number;
  readonly results?: ReadonlyArray<DeleteAllConnectionsResponseDataResults>;
  readonly successful_kills: number;
}
export interface DeleteAllConnectionsResponseDataEncoded {
  readonly failed_kills: number;
  readonly results?: ReadonlyArray<DeleteAllConnectionsResponseDataResultsEncoded>;
  readonly successful_kills: number;
}
export const DeleteAllConnectionsResponseData: Schema.Schema<DeleteAllConnectionsResponseData, DeleteAllConnectionsResponseDataEncoded, never> = Schema.Struct({
  failed_kills: Schema.Int,
  results: Schema.optional(Schema.Array(Schema.suspend(() => DeleteAllConnectionsResponseDataResults))),
  successful_kills: Schema.Int,
});

export interface DeleteAllConnectionsResponseDataResults {
  readonly error_message?: string;
  readonly success: boolean;
  readonly uuid: string;
}
export interface DeleteAllConnectionsResponseDataResultsEncoded {
  readonly error_message?: string;
  readonly success: boolean;
  readonly uuid: string;
}
export const DeleteAllConnectionsResponseDataResults: Schema.Schema<DeleteAllConnectionsResponseDataResults, DeleteAllConnectionsResponseDataResultsEncoded, never> = Schema.Struct({
  error_message: Schema.optional(Schema.String),
  success: Schema.Boolean,
  uuid: Schema.String,
});

export interface DeleteBroadcastChatMessageResponse {
  readonly data?: DeleteBroadcastChatMessageResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface DeleteBroadcastChatMessageResponseEncoded {
  readonly data?: DeleteBroadcastChatMessageResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const DeleteBroadcastChatMessageResponse: Schema.Schema<DeleteBroadcastChatMessageResponse, DeleteBroadcastChatMessageResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => DeleteBroadcastChatMessageResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface DeleteBroadcastChatMessageResponseData {
  readonly deleted: boolean;
}
export interface DeleteBroadcastChatMessageResponseDataEncoded {
  readonly deleted: boolean;
}
export const DeleteBroadcastChatMessageResponseData: Schema.Schema<DeleteBroadcastChatMessageResponseData, DeleteBroadcastChatMessageResponseDataEncoded, never> = Schema.Struct({
  deleted: Schema.Boolean,
});

export interface DeleteChatMessagesActionSignatures {
  readonly encoded_message_event_detail: string;
  readonly message_event_signature: DeleteChatMessagesActionSignaturesMessageEventSignature;
  readonly message_id: string;
  readonly signature_payload?: string;
}
export interface DeleteChatMessagesActionSignaturesEncoded {
  readonly encoded_message_event_detail: string;
  readonly message_event_signature: DeleteChatMessagesActionSignaturesMessageEventSignatureEncoded;
  readonly message_id: string;
  readonly signature_payload?: string;
}
export const DeleteChatMessagesActionSignatures: Schema.Schema<DeleteChatMessagesActionSignatures, DeleteChatMessagesActionSignaturesEncoded, never> = Schema.Struct({
  encoded_message_event_detail: Schema.String,
  message_event_signature: Schema.suspend(() => DeleteChatMessagesActionSignaturesMessageEventSignature),
  message_id: Schema.String,
  signature_payload: Schema.optional(Schema.String),
});

export interface DeleteChatMessagesActionSignaturesMessageEventSignature {
  readonly message_signing_key_info_list?: ReadonlyArray<DeleteChatMessagesActionSignaturesMessageEventSignatureMessageSigningKeyInfoList>;
  readonly public_key_version: string;
  readonly signature: string;
  readonly signature_version: string;
  readonly signing_public_key?: string;
}
export interface DeleteChatMessagesActionSignaturesMessageEventSignatureEncoded {
  readonly message_signing_key_info_list?: ReadonlyArray<DeleteChatMessagesActionSignaturesMessageEventSignatureMessageSigningKeyInfoListEncoded>;
  readonly public_key_version: string;
  readonly signature: string;
  readonly signature_version: string;
  readonly signing_public_key?: string;
}
export const DeleteChatMessagesActionSignaturesMessageEventSignature: Schema.Schema<DeleteChatMessagesActionSignaturesMessageEventSignature, DeleteChatMessagesActionSignaturesMessageEventSignatureEncoded, never> = Schema.Struct({
  message_signing_key_info_list: Schema.optional(Schema.Array(Schema.suspend(() => DeleteChatMessagesActionSignaturesMessageEventSignatureMessageSigningKeyInfoList))),
  public_key_version: Schema.String,
  signature: Schema.String,
  signature_version: Schema.String,
  signing_public_key: Schema.optional(Schema.String),
});

export interface DeleteChatMessagesActionSignaturesMessageEventSignatureMessageSigningKeyInfoList {
  readonly member_id?: string;
  readonly public_key_version?: string;
  readonly signing_public_key?: string;
}
export interface DeleteChatMessagesActionSignaturesMessageEventSignatureMessageSigningKeyInfoListEncoded {
  readonly member_id?: string;
  readonly public_key_version?: string;
  readonly signing_public_key?: string;
}
export const DeleteChatMessagesActionSignaturesMessageEventSignatureMessageSigningKeyInfoList: Schema.Schema<DeleteChatMessagesActionSignaturesMessageEventSignatureMessageSigningKeyInfoList, DeleteChatMessagesActionSignaturesMessageEventSignatureMessageSigningKeyInfoListEncoded, never> = Schema.Struct({
  member_id: Schema.optional(Schema.String),
  public_key_version: Schema.optional(Schema.String),
  signing_public_key: Schema.optional(Schema.String),
});

export interface DeleteChatMessagesRequest {
  readonly action_signatures: ReadonlyArray<DeleteChatMessagesActionSignatures>;
  readonly delete_message_action: "delete_for_all" | "delete_for_self";
  readonly media_hash_keys?: ReadonlyArray<string>;
  readonly sequence_ids: ReadonlyArray<string>;
}
export interface DeleteChatMessagesRequestEncoded {
  readonly action_signatures: ReadonlyArray<DeleteChatMessagesActionSignaturesEncoded>;
  readonly delete_message_action: "delete_for_all" | "delete_for_self";
  readonly media_hash_keys?: ReadonlyArray<string>;
  readonly sequence_ids: ReadonlyArray<string>;
}
export const DeleteChatMessagesRequest: Schema.Schema<DeleteChatMessagesRequest, DeleteChatMessagesRequestEncoded, never> = Schema.Struct({
  action_signatures: Schema.Array(Schema.suspend(() => DeleteChatMessagesActionSignatures)),
  delete_message_action: Schema.Union(Schema.Literal("delete_for_all"), Schema.Literal("delete_for_self")),
  media_hash_keys: Schema.optional(Schema.Array(Schema.String)),
  sequence_ids: Schema.Array(Schema.String),
});

export interface DeleteChatMessagesResponse {
  readonly data?: DeleteChatMessagesResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface DeleteChatMessagesResponseEncoded {
  readonly data?: DeleteChatMessagesResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const DeleteChatMessagesResponse: Schema.Schema<DeleteChatMessagesResponse, DeleteChatMessagesResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => DeleteChatMessagesResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface DeleteChatMessagesResponseData {
  readonly deleted: boolean;
}
export interface DeleteChatMessagesResponseDataEncoded {
  readonly deleted: boolean;
}
export const DeleteChatMessagesResponseData: Schema.Schema<DeleteChatMessagesResponseData, DeleteChatMessagesResponseDataEncoded, never> = Schema.Struct({
  deleted: Schema.Boolean,
});

export interface DeleteCommunityNotesResponse {
  readonly data?: DeleteCommunityNotesResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface DeleteCommunityNotesResponseEncoded {
  readonly data?: DeleteCommunityNotesResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const DeleteCommunityNotesResponse: Schema.Schema<DeleteCommunityNotesResponse, DeleteCommunityNotesResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => DeleteCommunityNotesResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface DeleteCommunityNotesResponseData {
  readonly deleted: boolean;
}
export interface DeleteCommunityNotesResponseDataEncoded {
  readonly deleted: boolean;
}
export const DeleteCommunityNotesResponseData: Schema.Schema<DeleteCommunityNotesResponseData, DeleteCommunityNotesResponseDataEncoded, never> = Schema.Struct({
  deleted: Schema.Boolean,
});

export interface DeleteConnectionsByEndpointResponse {
  readonly data?: DeleteConnectionsByEndpointResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface DeleteConnectionsByEndpointResponseEncoded {
  readonly data?: DeleteConnectionsByEndpointResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const DeleteConnectionsByEndpointResponse: Schema.Schema<DeleteConnectionsByEndpointResponse, DeleteConnectionsByEndpointResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => DeleteConnectionsByEndpointResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface DeleteConnectionsByEndpointResponseData {
  readonly failed_kills: number;
  readonly results?: ReadonlyArray<DeleteConnectionsByEndpointResponseDataResults>;
  readonly successful_kills: number;
}
export interface DeleteConnectionsByEndpointResponseDataEncoded {
  readonly failed_kills: number;
  readonly results?: ReadonlyArray<DeleteConnectionsByEndpointResponseDataResultsEncoded>;
  readonly successful_kills: number;
}
export const DeleteConnectionsByEndpointResponseData: Schema.Schema<DeleteConnectionsByEndpointResponseData, DeleteConnectionsByEndpointResponseDataEncoded, never> = Schema.Struct({
  failed_kills: Schema.Int,
  results: Schema.optional(Schema.Array(Schema.suspend(() => DeleteConnectionsByEndpointResponseDataResults))),
  successful_kills: Schema.Int,
});

export interface DeleteConnectionsByEndpointResponseDataResults {
  readonly error_message?: string;
  readonly success: boolean;
  readonly uuid: string;
}
export interface DeleteConnectionsByEndpointResponseDataResultsEncoded {
  readonly error_message?: string;
  readonly success: boolean;
  readonly uuid: string;
}
export const DeleteConnectionsByEndpointResponseDataResults: Schema.Schema<DeleteConnectionsByEndpointResponseDataResults, DeleteConnectionsByEndpointResponseDataResultsEncoded, never> = Schema.Struct({
  error_message: Schema.optional(Schema.String),
  success: Schema.Boolean,
  uuid: Schema.String,
});

export interface DeleteConnectionsByUuidsRequest {
  readonly uuids: ReadonlyArray<string>;
}
export interface DeleteConnectionsByUuidsRequestEncoded {
  readonly uuids: ReadonlyArray<string>;
}
export const DeleteConnectionsByUuidsRequest: Schema.Schema<DeleteConnectionsByUuidsRequest, DeleteConnectionsByUuidsRequestEncoded, never> = Schema.Struct({
  uuids: Schema.Array(Schema.String),
});

export interface DeleteConnectionsByUuidsResponse {
  readonly data?: DeleteConnectionsByUuidsResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface DeleteConnectionsByUuidsResponseEncoded {
  readonly data?: DeleteConnectionsByUuidsResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const DeleteConnectionsByUuidsResponse: Schema.Schema<DeleteConnectionsByUuidsResponse, DeleteConnectionsByUuidsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => DeleteConnectionsByUuidsResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface DeleteConnectionsByUuidsResponseData {
  readonly failed_kills: number;
  readonly results?: ReadonlyArray<DeleteConnectionsByUuidsResponseDataResults>;
  readonly successful_kills: number;
}
export interface DeleteConnectionsByUuidsResponseDataEncoded {
  readonly failed_kills: number;
  readonly results?: ReadonlyArray<DeleteConnectionsByUuidsResponseDataResultsEncoded>;
  readonly successful_kills: number;
}
export const DeleteConnectionsByUuidsResponseData: Schema.Schema<DeleteConnectionsByUuidsResponseData, DeleteConnectionsByUuidsResponseDataEncoded, never> = Schema.Struct({
  failed_kills: Schema.Int,
  results: Schema.optional(Schema.Array(Schema.suspend(() => DeleteConnectionsByUuidsResponseDataResults))),
  successful_kills: Schema.Int,
});

export interface DeleteConnectionsByUuidsResponseDataResults {
  readonly error_message?: string;
  readonly success: boolean;
  readonly uuid: string;
}
export interface DeleteConnectionsByUuidsResponseDataResultsEncoded {
  readonly error_message?: string;
  readonly success: boolean;
  readonly uuid: string;
}
export const DeleteConnectionsByUuidsResponseDataResults: Schema.Schema<DeleteConnectionsByUuidsResponseDataResults, DeleteConnectionsByUuidsResponseDataResultsEncoded, never> = Schema.Struct({
  error_message: Schema.optional(Schema.String),
  success: Schema.Boolean,
  uuid: Schema.String,
});

export interface DeleteDirectMessagesEventsResponse {
  readonly data?: DeleteDirectMessagesEventsResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface DeleteDirectMessagesEventsResponseEncoded {
  readonly data?: DeleteDirectMessagesEventsResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const DeleteDirectMessagesEventsResponse: Schema.Schema<DeleteDirectMessagesEventsResponse, DeleteDirectMessagesEventsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => DeleteDirectMessagesEventsResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface DeleteDirectMessagesEventsResponseData {
  readonly deleted: boolean;
}
export interface DeleteDirectMessagesEventsResponseDataEncoded {
  readonly deleted: boolean;
}
export const DeleteDirectMessagesEventsResponseData: Schema.Schema<DeleteDirectMessagesEventsResponseData, DeleteDirectMessagesEventsResponseDataEncoded, never> = Schema.Struct({
  deleted: Schema.Boolean,
});

export interface DeleteListsResponse {
  readonly data?: DeleteListsResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface DeleteListsResponseEncoded {
  readonly data?: DeleteListsResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const DeleteListsResponse: Schema.Schema<DeleteListsResponse, DeleteListsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => DeleteListsResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface DeleteListsResponseData {
  readonly deleted: boolean;
}
export interface DeleteListsResponseDataEncoded {
  readonly deleted: boolean;
}
export const DeleteListsResponseData: Schema.Schema<DeleteListsResponseData, DeleteListsResponseDataEncoded, never> = Schema.Struct({
  deleted: Schema.Boolean,
});

export interface DeleteMediaSubtitlesRequest {
  readonly id: string;
  readonly language_code: string;
  readonly media_category: string;
}
export interface DeleteMediaSubtitlesRequestEncoded {
  readonly id: string;
  readonly language_code: string;
  readonly media_category: string;
}
export const DeleteMediaSubtitlesRequest: Schema.Schema<DeleteMediaSubtitlesRequest, DeleteMediaSubtitlesRequestEncoded, never> = Schema.Struct({
  id: Schema.String,
  language_code: Schema.String,
  media_category: Schema.String,
});

export interface DeleteMediaSubtitlesResponse {
  readonly data?: DeleteMediaSubtitlesResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface DeleteMediaSubtitlesResponseEncoded {
  readonly data?: DeleteMediaSubtitlesResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const DeleteMediaSubtitlesResponse: Schema.Schema<DeleteMediaSubtitlesResponse, DeleteMediaSubtitlesResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => DeleteMediaSubtitlesResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface DeleteMediaSubtitlesResponseData {
  readonly deleted: boolean;
}
export interface DeleteMediaSubtitlesResponseDataEncoded {
  readonly deleted: boolean;
}
export const DeleteMediaSubtitlesResponseData: Schema.Schema<DeleteMediaSubtitlesResponseData, DeleteMediaSubtitlesResponseDataEncoded, never> = Schema.Struct({
  deleted: Schema.Boolean,
});

export interface DeletePostsResponse {
  readonly data?: DeletePostsResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface DeletePostsResponseEncoded {
  readonly data?: DeletePostsResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const DeletePostsResponse: Schema.Schema<DeletePostsResponse, DeletePostsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => DeletePostsResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface DeletePostsResponseData {
  readonly deleted: boolean;
}
export interface DeletePostsResponseDataEncoded {
  readonly deleted: boolean;
}
export const DeletePostsResponseData: Schema.Schema<DeletePostsResponseData, DeletePostsResponseDataEncoded, never> = Schema.Struct({
  deleted: Schema.Boolean,
});

export interface DeleteScheduledBroadcastResponse {
  readonly data?: DeleteScheduledBroadcastResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface DeleteScheduledBroadcastResponseEncoded {
  readonly data?: DeleteScheduledBroadcastResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const DeleteScheduledBroadcastResponse: Schema.Schema<DeleteScheduledBroadcastResponse, DeleteScheduledBroadcastResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => DeleteScheduledBroadcastResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface DeleteScheduledBroadcastResponseData {
  readonly deleted: boolean;
}
export interface DeleteScheduledBroadcastResponseDataEncoded {
  readonly deleted: boolean;
}
export const DeleteScheduledBroadcastResponseData: Schema.Schema<DeleteScheduledBroadcastResponseData, DeleteScheduledBroadcastResponseDataEncoded, never> = Schema.Struct({
  deleted: Schema.Boolean,
});

export interface DeleteUsersBookmarkResponse {
  readonly data?: DeleteUsersBookmarkResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface DeleteUsersBookmarkResponseEncoded {
  readonly data?: DeleteUsersBookmarkResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const DeleteUsersBookmarkResponse: Schema.Schema<DeleteUsersBookmarkResponse, DeleteUsersBookmarkResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => DeleteUsersBookmarkResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface DeleteUsersBookmarkResponseData {
  readonly bookmarked: boolean;
}
export interface DeleteUsersBookmarkResponseDataEncoded {
  readonly bookmarked: boolean;
}
export const DeleteUsersBookmarkResponseData: Schema.Schema<DeleteUsersBookmarkResponseData, DeleteUsersBookmarkResponseDataEncoded, never> = Schema.Struct({
  bookmarked: Schema.Boolean,
});

export interface DeleteWebhooksResponse {
  readonly data?: DeleteWebhooksResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface DeleteWebhooksResponseEncoded {
  readonly data?: DeleteWebhooksResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const DeleteWebhooksResponse: Schema.Schema<DeleteWebhooksResponse, DeleteWebhooksResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => DeleteWebhooksResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface DeleteWebhooksResponseData {
  readonly deleted: boolean;
}
export interface DeleteWebhooksResponseDataEncoded {
  readonly deleted: boolean;
}
export const DeleteWebhooksResponseData: Schema.Schema<DeleteWebhooksResponseData, DeleteWebhooksResponseDataEncoded, never> = Schema.Struct({
  deleted: Schema.Boolean,
});

export interface DeleteWebhooksStreamLinkResponse {
  readonly data?: DeleteWebhooksStreamLinkResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface DeleteWebhooksStreamLinkResponseEncoded {
  readonly data?: DeleteWebhooksStreamLinkResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const DeleteWebhooksStreamLinkResponse: Schema.Schema<DeleteWebhooksStreamLinkResponse, DeleteWebhooksStreamLinkResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => DeleteWebhooksStreamLinkResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface DeleteWebhooksStreamLinkResponseData {
  readonly deleted: boolean;
}
export interface DeleteWebhooksStreamLinkResponseDataEncoded {
  readonly deleted: boolean;
}
export const DeleteWebhooksStreamLinkResponseData: Schema.Schema<DeleteWebhooksStreamLinkResponseData, DeleteWebhooksStreamLinkResponseDataEncoded, never> = Schema.Struct({
  deleted: Schema.Boolean,
});

export interface DisallowedResourceProblem {
  readonly detail: string;
  readonly resource_id?: string;
  readonly resource_type?: string;
  readonly section?: string;
  readonly status?: number;
  readonly title: string;
  readonly type: "https://api.x.com/2/problems/disallowed-resource";
}
export interface DisallowedResourceProblemEncoded {
  readonly detail: string;
  readonly resource_id?: string;
  readonly resource_type?: string;
  readonly section?: string;
  readonly status?: number;
  readonly title: string;
  readonly type: "https://api.x.com/2/problems/disallowed-resource";
}
export const DisallowedResourceProblem: Schema.Schema<DisallowedResourceProblem, DisallowedResourceProblemEncoded, never> = Schema.Struct({
  detail: Schema.String,
  resource_id: Schema.optional(Schema.String),
  resource_type: Schema.optional(Schema.String),
  section: Schema.optional(Schema.String),
  status: Schema.optional(Schema.Int),
  title: Schema.String,
  type: Schema.Union(Schema.Literal("https://api.x.com/2/problems/disallowed-resource")),
});

export interface DmEvent {
  readonly attachments?: DmEventAttachments;
  readonly created_at?: Date;
  readonly dm_conversation_id?: string;
  readonly entities?: DmEventEntities;
  readonly event_type?: string;
  readonly id?: string;
  readonly participant_ids?: ReadonlyArray<string>;
  readonly referenced_posts?: DmEventReferencedPosts;
  readonly sender_id?: string;
  readonly text?: string;
}
export interface DmEventEncoded {
  readonly attachments?: DmEventAttachmentsEncoded;
  readonly created_at?: string;
  readonly dm_conversation_id?: string;
  readonly entities?: DmEventEntitiesEncoded;
  readonly event_type?: string;
  readonly id?: string;
  readonly participant_ids?: ReadonlyArray<string>;
  readonly referenced_posts?: DmEventReferencedPostsEncoded;
  readonly sender_id?: string;
  readonly text?: string;
}
export const DmEvent: Schema.Schema<DmEvent, DmEventEncoded, never> = Schema.Struct({
  attachments: Schema.optional(Schema.suspend(() => DmEventAttachments)),
  created_at: Schema.optional(Schema.DateFromString),
  dm_conversation_id: Schema.optional(Schema.String),
  entities: Schema.optional(Schema.suspend(() => DmEventEntities)),
  event_type: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  participant_ids: Schema.optional(Schema.Array(Schema.String)),
  referenced_posts: Schema.optional(Schema.suspend(() => DmEventReferencedPosts)),
  sender_id: Schema.optional(Schema.String),
  text: Schema.optional(Schema.String),
});

/** Media and card attachments present in this Direct Message event. */
export interface DmEventAttachments {
  readonly card_ids?: ReadonlyArray<string> | null;
  readonly media_keys?: ReadonlyArray<string> | null;
}
export interface DmEventAttachmentsEncoded {
  readonly card_ids?: ReadonlyArray<string> | null;
  readonly media_keys?: ReadonlyArray<string> | null;
}
export const DmEventAttachments: Schema.Schema<DmEventAttachments, DmEventAttachmentsEncoded, never> = Schema.Struct({
  card_ids: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
  media_keys: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
});

/** A list of metadata entities (hashtags, cashtags, mentions, URLs) found in the Direct Message text. */
export interface DmEventEntities {
  readonly cashtags?: ReadonlyArray<unknown> | null;
  readonly hashtags?: ReadonlyArray<unknown> | null;
  readonly mentions?: ReadonlyArray<unknown> | null;
  readonly urls?: ReadonlyArray<unknown> | null;
}
export interface DmEventEntitiesEncoded {
  readonly cashtags?: ReadonlyArray<unknown> | null;
  readonly hashtags?: ReadonlyArray<unknown> | null;
  readonly mentions?: ReadonlyArray<unknown> | null;
  readonly urls?: ReadonlyArray<unknown> | null;
}
export const DmEventEntities: Schema.Schema<DmEventEntities, DmEventEntitiesEncoded, never> = Schema.Struct({
  cashtags: Schema.optional(Schema.NullOr(Schema.Array(Schema.Unknown))),
  hashtags: Schema.optional(Schema.NullOr(Schema.Array(Schema.Unknown))),
  mentions: Schema.optional(Schema.NullOr(Schema.Array(Schema.Unknown))),
  urls: Schema.optional(Schema.NullOr(Schema.Array(Schema.Unknown))),
});

export type DmEventReferencedPosts = ReadonlyArray<unknown>;
export type DmEventReferencedPostsEncoded = ReadonlyArray<unknown>;
export const DmEventReferencedPosts: Schema.Schema<DmEventReferencedPosts, DmEventReferencedPostsEncoded, never> = Schema.Array(Schema.Unknown);

export interface Error {
  readonly code: number;
  readonly message: string;
}
export interface ErrorEncoded {
  readonly code: number;
  readonly message: string;
}
export const Error: Schema.Schema<Error, ErrorEncoded, never> = Schema.Struct({
  code: Schema.Int,
  message: Schema.String,
});

export interface EvaluateCommunityNotesRequest {
  readonly note_text: string;
  readonly post_id: string;
}
export interface EvaluateCommunityNotesRequestEncoded {
  readonly note_text: string;
  readonly post_id: string;
}
export const EvaluateCommunityNotesRequest: Schema.Schema<EvaluateCommunityNotesRequest, EvaluateCommunityNotesRequestEncoded, never> = Schema.Struct({
  note_text: Schema.String,
  post_id: Schema.String,
});

export interface EvaluateCommunityNotesResponse {
  readonly data?: EvaluateCommunityNotesResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface EvaluateCommunityNotesResponseEncoded {
  readonly data?: EvaluateCommunityNotesResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const EvaluateCommunityNotesResponse: Schema.Schema<EvaluateCommunityNotesResponse, EvaluateCommunityNotesResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => EvaluateCommunityNotesResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface EvaluateCommunityNotesResponseData {
  readonly claim_opinion_score?: number;
}
export interface EvaluateCommunityNotesResponseDataEncoded {
  readonly claim_opinion_score?: number;
}
export const EvaluateCommunityNotesResponseData: Schema.Schema<EvaluateCommunityNotesResponseData, EvaluateCommunityNotesResponseDataEncoded, never> = Schema.Struct({
  claim_opinion_score: Schema.optional(Schema.Number),
});

export interface Expansions {
  readonly media?: ReadonlyArray<Media>;
  readonly places?: ReadonlyArray<Place>;
  readonly polls?: ReadonlyArray<Poll>;
  readonly posts?: ReadonlyArray<Post>;
  readonly topics?: ReadonlyArray<Topic>;
  readonly users?: ReadonlyArray<User>;
}
export interface ExpansionsEncoded {
  readonly media?: ReadonlyArray<MediaEncoded>;
  readonly places?: ReadonlyArray<PlaceEncoded>;
  readonly polls?: ReadonlyArray<PollEncoded>;
  readonly posts?: ReadonlyArray<PostEncoded>;
  readonly topics?: ReadonlyArray<TopicEncoded>;
  readonly users?: ReadonlyArray<UserEncoded>;
}
export const Expansions: Schema.Schema<Expansions, ExpansionsEncoded, never> = Schema.Struct({
  media: Schema.optional(Schema.Array(Schema.suspend(() => Media))),
  places: Schema.optional(Schema.Array(Schema.suspend(() => Place))),
  polls: Schema.optional(Schema.Array(Schema.suspend(() => Poll))),
  posts: Schema.optional(Schema.Array(Schema.suspend(() => Post))),
  topics: Schema.optional(Schema.Array(Schema.suspend(() => Topic))),
  users: Schema.optional(Schema.Array(Schema.suspend(() => User))),
});

export interface FieldHydrationFailureProblem {
  readonly detail: string;
  readonly field: string;
  readonly resource_type?: string;
  readonly section?: string;
  readonly status?: number;
  readonly title: string;
  readonly type: "https://api.x.com/2/problems/field-hydration-failure";
}
export interface FieldHydrationFailureProblemEncoded {
  readonly detail: string;
  readonly field: string;
  readonly resource_type?: string;
  readonly section?: string;
  readonly status?: number;
  readonly title: string;
  readonly type: "https://api.x.com/2/problems/field-hydration-failure";
}
export const FieldHydrationFailureProblem: Schema.Schema<FieldHydrationFailureProblem, FieldHydrationFailureProblemEncoded, never> = Schema.Struct({
  detail: Schema.String,
  field: Schema.String,
  resource_type: Schema.optional(Schema.String),
  section: Schema.optional(Schema.String),
  status: Schema.optional(Schema.Int),
  title: Schema.String,
  type: Schema.Union(Schema.Literal("https://api.x.com/2/problems/field-hydration-failure")),
});

export interface FieldUnauthorizedProblem {
  readonly detail: string;
  readonly field: string;
  readonly resource_type?: string;
  readonly section?: string;
  readonly status?: number;
  readonly title: string;
  readonly type: "https://api.x.com/2/problems/field-unauthorized";
}
export interface FieldUnauthorizedProblemEncoded {
  readonly detail: string;
  readonly field: string;
  readonly resource_type?: string;
  readonly section?: string;
  readonly status?: number;
  readonly title: string;
  readonly type: "https://api.x.com/2/problems/field-unauthorized";
}
export const FieldUnauthorizedProblem: Schema.Schema<FieldUnauthorizedProblem, FieldUnauthorizedProblemEncoded, never> = Schema.Struct({
  detail: Schema.String,
  field: Schema.String,
  resource_type: Schema.optional(Schema.String),
  section: Schema.optional(Schema.String),
  status: Schema.optional(Schema.Int),
  title: Schema.String,
  type: Schema.Union(Schema.Literal("https://api.x.com/2/problems/field-unauthorized")),
});

export interface FinalizeMediaUploadResponse {
  readonly data?: FinalizeMediaUploadResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface FinalizeMediaUploadResponseEncoded {
  readonly data?: FinalizeMediaUploadResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const FinalizeMediaUploadResponse: Schema.Schema<FinalizeMediaUploadResponse, FinalizeMediaUploadResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => FinalizeMediaUploadResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface FinalizeMediaUploadResponseData {
  readonly expires_after_secs?: number;
  readonly id: string;
  readonly image?: FinalizeMediaUploadResponseDataImage;
  readonly media_key?: string;
  readonly processing_info?: FinalizeMediaUploadResponseDataProcessingInfo;
  readonly size?: number;
  readonly video?: FinalizeMediaUploadResponseDataVideo;
}
export interface FinalizeMediaUploadResponseDataEncoded {
  readonly expires_after_secs?: number;
  readonly id: string;
  readonly image?: FinalizeMediaUploadResponseDataImageEncoded;
  readonly media_key?: string;
  readonly processing_info?: FinalizeMediaUploadResponseDataProcessingInfoEncoded;
  readonly size?: number;
  readonly video?: FinalizeMediaUploadResponseDataVideoEncoded;
}
export const FinalizeMediaUploadResponseData: Schema.Schema<FinalizeMediaUploadResponseData, FinalizeMediaUploadResponseDataEncoded, never> = Schema.Struct({
  expires_after_secs: Schema.optional(Schema.Int),
  id: Schema.String,
  image: Schema.optional(Schema.suspend(() => FinalizeMediaUploadResponseDataImage)),
  media_key: Schema.optional(Schema.String),
  processing_info: Schema.optional(Schema.suspend(() => FinalizeMediaUploadResponseDataProcessingInfo)),
  size: Schema.optional(Schema.Int),
  video: Schema.optional(Schema.suspend(() => FinalizeMediaUploadResponseDataVideo)),
});

export interface FinalizeMediaUploadResponseDataImage {
  readonly h?: number;
  readonly image_type?: string;
  readonly w?: number;
}
export interface FinalizeMediaUploadResponseDataImageEncoded {
  readonly h?: number;
  readonly image_type?: string;
  readonly w?: number;
}
export const FinalizeMediaUploadResponseDataImage: Schema.Schema<FinalizeMediaUploadResponseDataImage, FinalizeMediaUploadResponseDataImageEncoded, never> = Schema.Struct({
  h: Schema.optional(Schema.Int),
  image_type: Schema.optional(Schema.String),
  w: Schema.optional(Schema.Int),
});

export interface FinalizeMediaUploadResponseDataProcessingInfo {
  readonly check_after_secs?: number;
  readonly progress_percent?: number;
  readonly state?: string;
}
export interface FinalizeMediaUploadResponseDataProcessingInfoEncoded {
  readonly check_after_secs?: number;
  readonly progress_percent?: number;
  readonly state?: string;
}
export const FinalizeMediaUploadResponseDataProcessingInfo: Schema.Schema<FinalizeMediaUploadResponseDataProcessingInfo, FinalizeMediaUploadResponseDataProcessingInfoEncoded, never> = Schema.Struct({
  check_after_secs: Schema.optional(Schema.Int),
  progress_percent: Schema.optional(Schema.Int),
  state: Schema.optional(Schema.String),
});

export interface FinalizeMediaUploadResponseDataVideo {
  readonly video_type?: string;
}
export interface FinalizeMediaUploadResponseDataVideoEncoded {
  readonly video_type?: string;
}
export const FinalizeMediaUploadResponseDataVideo: Schema.Schema<FinalizeMediaUploadResponseDataVideo, FinalizeMediaUploadResponseDataVideoEncoded, never> = Schema.Struct({
  video_type: Schema.optional(Schema.String),
});

export interface FollowActivityResponsePayload {
  readonly source?: User;
  readonly target?: User;
}
export interface FollowActivityResponsePayloadEncoded {
  readonly source?: UserEncoded;
  readonly target?: UserEncoded;
}
export const FollowActivityResponsePayload: Schema.Schema<FollowActivityResponsePayload, FollowActivityResponsePayloadEncoded, never> = Schema.Struct({
  source: Schema.optional(Schema.suspend(() => User)),
  target: Schema.optional(Schema.suspend(() => User)),
});

export interface FollowListRequest {
  readonly list_id: string;
}
export interface FollowListRequestEncoded {
  readonly list_id: string;
}
export const FollowListRequest: Schema.Schema<FollowListRequest, FollowListRequestEncoded, never> = Schema.Struct({
  list_id: Schema.String,
});

export interface FollowListResponse {
  readonly data?: FollowListResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface FollowListResponseEncoded {
  readonly data?: FollowListResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const FollowListResponse: Schema.Schema<FollowListResponse, FollowListResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => FollowListResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface FollowListResponseData {
  readonly following: boolean;
}
export interface FollowListResponseDataEncoded {
  readonly following: boolean;
}
export const FollowListResponseData: Schema.Schema<FollowListResponseData, FollowListResponseDataEncoded, never> = Schema.Struct({
  following: Schema.Boolean,
});

export interface FollowUserRequest {
  readonly target_user_id: string;
}
export interface FollowUserRequestEncoded {
  readonly target_user_id: string;
}
export const FollowUserRequest: Schema.Schema<FollowUserRequest, FollowUserRequestEncoded, never> = Schema.Struct({
  target_user_id: Schema.String,
});

export interface FollowUserResponse {
  readonly data?: FollowUserResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface FollowUserResponseEncoded {
  readonly data?: FollowUserResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const FollowUserResponse: Schema.Schema<FollowUserResponse, FollowUserResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => FollowUserResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface FollowUserResponseData {
  readonly following: boolean;
  readonly pending_follow: boolean;
}
export interface FollowUserResponseDataEncoded {
  readonly following: boolean;
  readonly pending_follow: boolean;
}
export const FollowUserResponseData: Schema.Schema<FollowUserResponseData, FollowUserResponseDataEncoded, never> = Schema.Struct({
  following: Schema.Boolean,
  pending_follow: Schema.Boolean,
});

export interface GetAccountActivitySubscriptionCountResponse {
  readonly data?: GetAccountActivitySubscriptionCountResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface GetAccountActivitySubscriptionCountResponseEncoded {
  readonly data?: GetAccountActivitySubscriptionCountResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const GetAccountActivitySubscriptionCountResponse: Schema.Schema<GetAccountActivitySubscriptionCountResponse, GetAccountActivitySubscriptionCountResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => GetAccountActivitySubscriptionCountResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface GetAccountActivitySubscriptionCountResponseData {
  readonly account_name?: string;
  readonly provisioned_count?: string;
  readonly subscriptions_count_all?: string;
  readonly subscriptions_count_direct_messages?: string;
}
export interface GetAccountActivitySubscriptionCountResponseDataEncoded {
  readonly account_name?: string;
  readonly provisioned_count?: string;
  readonly subscriptions_count_all?: string;
  readonly subscriptions_count_direct_messages?: string;
}
export const GetAccountActivitySubscriptionCountResponseData: Schema.Schema<GetAccountActivitySubscriptionCountResponseData, GetAccountActivitySubscriptionCountResponseDataEncoded, never> = Schema.Struct({
  account_name: Schema.optional(Schema.String),
  provisioned_count: Schema.optional(Schema.String),
  subscriptions_count_all: Schema.optional(Schema.String),
  subscriptions_count_direct_messages: Schema.optional(Schema.String),
});

export interface GetAccountActivitySubscriptionsResponse {
  readonly data?: GetAccountActivitySubscriptionsResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface GetAccountActivitySubscriptionsResponseEncoded {
  readonly data?: GetAccountActivitySubscriptionsResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const GetAccountActivitySubscriptionsResponse: Schema.Schema<GetAccountActivitySubscriptionsResponse, GetAccountActivitySubscriptionsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => GetAccountActivitySubscriptionsResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface GetAccountActivitySubscriptionsResponseData {
  readonly application_id?: string;
  readonly subscriptions?: ReadonlyArray<GetAccountActivitySubscriptionsResponseDataSubscriptions>;
  readonly webhook_id?: string;
  readonly webhook_url?: string;
}
export interface GetAccountActivitySubscriptionsResponseDataEncoded {
  readonly application_id?: string;
  readonly subscriptions?: ReadonlyArray<GetAccountActivitySubscriptionsResponseDataSubscriptionsEncoded>;
  readonly webhook_id?: string;
  readonly webhook_url?: string;
}
export const GetAccountActivitySubscriptionsResponseData: Schema.Schema<GetAccountActivitySubscriptionsResponseData, GetAccountActivitySubscriptionsResponseDataEncoded, never> = Schema.Struct({
  application_id: Schema.optional(Schema.String),
  subscriptions: Schema.optional(Schema.Array(Schema.suspend(() => GetAccountActivitySubscriptionsResponseDataSubscriptions))),
  webhook_id: Schema.optional(Schema.String),
  webhook_url: Schema.optional(Schema.String),
});

export interface GetAccountActivitySubscriptionsResponseDataSubscriptions {
  readonly user_id?: string;
}
export interface GetAccountActivitySubscriptionsResponseDataSubscriptionsEncoded {
  readonly user_id?: string;
}
export const GetAccountActivitySubscriptionsResponseDataSubscriptions: Schema.Schema<GetAccountActivitySubscriptionsResponseDataSubscriptions, GetAccountActivitySubscriptionsResponseDataSubscriptionsEncoded, never> = Schema.Struct({
  user_id: Schema.optional(Schema.String),
});

export interface GetActivitySubscriptionsResponse {
  readonly data?: ReadonlyArray<GetActivitySubscriptionsResponseData>;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface GetActivitySubscriptionsResponseEncoded {
  readonly data?: ReadonlyArray<GetActivitySubscriptionsResponseDataEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const GetActivitySubscriptionsResponse: Schema.Schema<GetActivitySubscriptionsResponse, GetActivitySubscriptionsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => GetActivitySubscriptionsResponseData))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface GetActivitySubscriptionsResponseData {
  readonly created_at?: string;
  readonly event_type?: string;
  readonly filter?: GetActivitySubscriptionsResponseDataFilter;
  readonly subscription_id?: string;
  readonly tag?: string;
  readonly updated_at?: string;
  readonly webhook_id?: string;
}
export interface GetActivitySubscriptionsResponseDataEncoded {
  readonly created_at?: string;
  readonly event_type?: string;
  readonly filter?: GetActivitySubscriptionsResponseDataFilterEncoded;
  readonly subscription_id?: string;
  readonly tag?: string;
  readonly updated_at?: string;
  readonly webhook_id?: string;
}
export const GetActivitySubscriptionsResponseData: Schema.Schema<GetActivitySubscriptionsResponseData, GetActivitySubscriptionsResponseDataEncoded, never> = Schema.Struct({
  created_at: Schema.optional(Schema.String),
  event_type: Schema.optional(Schema.String),
  filter: Schema.optional(Schema.suspend(() => GetActivitySubscriptionsResponseDataFilter)),
  subscription_id: Schema.optional(Schema.String),
  tag: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
  webhook_id: Schema.optional(Schema.String),
});

export interface GetActivitySubscriptionsResponseDataFilter {
  readonly direction?: string;
  readonly keyword?: string;
  readonly user_id?: string;
}
export interface GetActivitySubscriptionsResponseDataFilterEncoded {
  readonly direction?: string;
  readonly keyword?: string;
  readonly user_id?: string;
}
export const GetActivitySubscriptionsResponseDataFilter: Schema.Schema<GetActivitySubscriptionsResponseDataFilter, GetActivitySubscriptionsResponseDataFilterEncoded, never> = Schema.Struct({
  direction: Schema.optional(Schema.String),
  keyword: Schema.optional(Schema.String),
  user_id: Schema.optional(Schema.String),
});

export interface GetBroadcastResponse {
  readonly data?: Broadcast;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface GetBroadcastResponseEncoded {
  readonly data?: BroadcastEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const GetBroadcastResponse: Schema.Schema<GetBroadcastResponse, GetBroadcastResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => Broadcast)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface GetChatConversationEventsResponse {
  readonly data?: ReadonlyArray<ChatMessageEvent>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly meta?: unknown;
}
export interface GetChatConversationEventsResponseEncoded {
  readonly data?: ReadonlyArray<ChatMessageEventEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly meta?: unknown;
}
export const GetChatConversationEventsResponse: Schema.Schema<GetChatConversationEventsResponse, GetChatConversationEventsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => ChatMessageEvent))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  meta: Schema.optional(Schema.Unknown),
});

export interface GetChatConversationResponse {
  readonly data?: ChatConversation;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}
export interface GetChatConversationResponseEncoded {
  readonly data?: ChatConversationEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
}
export const GetChatConversationResponse: Schema.Schema<GetChatConversationResponse, GetChatConversationResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => ChatConversation)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
});

export interface GetChatConversationsResponse {
  readonly data?: ReadonlyArray<ChatConversation>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}
export interface GetChatConversationsResponseEncoded {
  readonly data?: ReadonlyArray<ChatConversationEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
  readonly meta?: unknown;
}
export const GetChatConversationsResponse: Schema.Schema<GetChatConversationsResponse, GetChatConversationsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => ChatConversation))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
  meta: Schema.optional(Schema.Unknown),
});

export interface GetCommunitiesByIdResponse {
  readonly data?: Community;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface GetCommunitiesByIdResponseEncoded {
  readonly data?: CommunityEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const GetCommunitiesByIdResponse: Schema.Schema<GetCommunitiesByIdResponse, GetCommunitiesByIdResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => Community)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface GetComplianceJobsByIdResponse {
  readonly data?: ComplianceJob;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface GetComplianceJobsByIdResponseEncoded {
  readonly data?: ComplianceJobEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const GetComplianceJobsByIdResponse: Schema.Schema<GetComplianceJobsByIdResponse, GetComplianceJobsByIdResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => ComplianceJob)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface GetComplianceJobsResponse {
  readonly data?: ReadonlyArray<ComplianceJob>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly meta?: unknown;
}
export interface GetComplianceJobsResponseEncoded {
  readonly data?: ReadonlyArray<ComplianceJobEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly meta?: unknown;
}
export const GetComplianceJobsResponse: Schema.Schema<GetComplianceJobsResponse, GetComplianceJobsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => ComplianceJob))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  meta: Schema.optional(Schema.Unknown),
});

export interface GetConnectionHistoryResponse {
  readonly data?: ReadonlyArray<Connection>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly meta?: unknown;
}
export interface GetConnectionHistoryResponseEncoded {
  readonly data?: ReadonlyArray<ConnectionEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly meta?: unknown;
}
export const GetConnectionHistoryResponse: Schema.Schema<GetConnectionHistoryResponse, GetConnectionHistoryResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => Connection))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  meta: Schema.optional(Schema.Unknown),
});

export interface GetDirectMessagesEventsByConversationIdResponse {
  readonly data?: ReadonlyArray<DmEvent>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}
export interface GetDirectMessagesEventsByConversationIdResponseEncoded {
  readonly data?: ReadonlyArray<DmEventEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
  readonly meta?: unknown;
}
export const GetDirectMessagesEventsByConversationIdResponse: Schema.Schema<GetDirectMessagesEventsByConversationIdResponse, GetDirectMessagesEventsByConversationIdResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => DmEvent))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
  meta: Schema.optional(Schema.Unknown),
});

export interface GetDirectMessagesEventsByIdResponse {
  readonly data?: DmEvent;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}
export interface GetDirectMessagesEventsByIdResponseEncoded {
  readonly data?: DmEventEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
}
export const GetDirectMessagesEventsByIdResponse: Schema.Schema<GetDirectMessagesEventsByIdResponse, GetDirectMessagesEventsByIdResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => DmEvent)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
});

export interface GetDirectMessagesEventsByParticipantIdResponse {
  readonly data?: ReadonlyArray<DmEvent>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}
export interface GetDirectMessagesEventsByParticipantIdResponseEncoded {
  readonly data?: ReadonlyArray<DmEventEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
  readonly meta?: unknown;
}
export const GetDirectMessagesEventsByParticipantIdResponse: Schema.Schema<GetDirectMessagesEventsByParticipantIdResponse, GetDirectMessagesEventsByParticipantIdResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => DmEvent))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
  meta: Schema.optional(Schema.Unknown),
});

export interface GetDirectMessagesEventsResponse {
  readonly data?: ReadonlyArray<DmEvent>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}
export interface GetDirectMessagesEventsResponseEncoded {
  readonly data?: ReadonlyArray<DmEventEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
  readonly meta?: unknown;
}
export const GetDirectMessagesEventsResponse: Schema.Schema<GetDirectMessagesEventsResponse, GetDirectMessagesEventsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => DmEvent))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
  meta: Schema.optional(Schema.Unknown),
});

export interface GetListsByIdResponse {
  readonly data?: List;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}
export interface GetListsByIdResponseEncoded {
  readonly data?: ListEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
}
export const GetListsByIdResponse: Schema.Schema<GetListsByIdResponse, GetListsByIdResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => List)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
});

export interface GetListsFollowersResponse {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}
export interface GetListsFollowersResponseEncoded {
  readonly data?: ReadonlyArray<UserEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
  readonly meta?: unknown;
}
export const GetListsFollowersResponse: Schema.Schema<GetListsFollowersResponse, GetListsFollowersResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => User))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
  meta: Schema.optional(Schema.Unknown),
});

export interface GetListsMembersResponse {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}
export interface GetListsMembersResponseEncoded {
  readonly data?: ReadonlyArray<UserEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
  readonly meta?: unknown;
}
export const GetListsMembersResponse: Schema.Schema<GetListsMembersResponse, GetListsMembersResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => User))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
  meta: Schema.optional(Schema.Unknown),
});

export interface GetListsPostsResponse {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}
export interface GetListsPostsResponseEncoded {
  readonly data?: ReadonlyArray<PostEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
  readonly meta?: unknown;
}
export const GetListsPostsResponse: Schema.Schema<GetListsPostsResponse, GetListsPostsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => Post))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
  meta: Schema.optional(Schema.Unknown),
});

export interface GetMediaAnalyticsResponse {
  readonly data?: ReadonlyArray<MediaAnalytics>;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface GetMediaAnalyticsResponseEncoded {
  readonly data?: ReadonlyArray<MediaAnalyticsEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const GetMediaAnalyticsResponse: Schema.Schema<GetMediaAnalyticsResponse, GetMediaAnalyticsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => MediaAnalytics))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface GetMediaByMediaKeyResponse {
  readonly data?: Media;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface GetMediaByMediaKeyResponseEncoded {
  readonly data?: MediaEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const GetMediaByMediaKeyResponse: Schema.Schema<GetMediaByMediaKeyResponse, GetMediaByMediaKeyResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => Media)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface GetMediaByMediaKeysResponse {
  readonly data?: ReadonlyArray<Media>;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface GetMediaByMediaKeysResponseEncoded {
  readonly data?: ReadonlyArray<MediaEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const GetMediaByMediaKeysResponse: Schema.Schema<GetMediaByMediaKeysResponse, GetMediaByMediaKeysResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => Media))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface GetMediaUploadStatusResponse {
  readonly data?: GetMediaUploadStatusResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface GetMediaUploadStatusResponseEncoded {
  readonly data?: GetMediaUploadStatusResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const GetMediaUploadStatusResponse: Schema.Schema<GetMediaUploadStatusResponse, GetMediaUploadStatusResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => GetMediaUploadStatusResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface GetMediaUploadStatusResponseData {
  readonly expires_after_secs?: number;
  readonly id: string;
  readonly image?: GetMediaUploadStatusResponseDataImage;
  readonly media_key?: string;
  readonly processing_info?: GetMediaUploadStatusResponseDataProcessingInfo;
  readonly size?: number;
  readonly video?: GetMediaUploadStatusResponseDataVideo;
}
export interface GetMediaUploadStatusResponseDataEncoded {
  readonly expires_after_secs?: number;
  readonly id: string;
  readonly image?: GetMediaUploadStatusResponseDataImageEncoded;
  readonly media_key?: string;
  readonly processing_info?: GetMediaUploadStatusResponseDataProcessingInfoEncoded;
  readonly size?: number;
  readonly video?: GetMediaUploadStatusResponseDataVideoEncoded;
}
export const GetMediaUploadStatusResponseData: Schema.Schema<GetMediaUploadStatusResponseData, GetMediaUploadStatusResponseDataEncoded, never> = Schema.Struct({
  expires_after_secs: Schema.optional(Schema.Int),
  id: Schema.String,
  image: Schema.optional(Schema.suspend(() => GetMediaUploadStatusResponseDataImage)),
  media_key: Schema.optional(Schema.String),
  processing_info: Schema.optional(Schema.suspend(() => GetMediaUploadStatusResponseDataProcessingInfo)),
  size: Schema.optional(Schema.Int),
  video: Schema.optional(Schema.suspend(() => GetMediaUploadStatusResponseDataVideo)),
});

export interface GetMediaUploadStatusResponseDataImage {
  readonly h?: number;
  readonly image_type?: string;
  readonly w?: number;
}
export interface GetMediaUploadStatusResponseDataImageEncoded {
  readonly h?: number;
  readonly image_type?: string;
  readonly w?: number;
}
export const GetMediaUploadStatusResponseDataImage: Schema.Schema<GetMediaUploadStatusResponseDataImage, GetMediaUploadStatusResponseDataImageEncoded, never> = Schema.Struct({
  h: Schema.optional(Schema.Int),
  image_type: Schema.optional(Schema.String),
  w: Schema.optional(Schema.Int),
});

export interface GetMediaUploadStatusResponseDataProcessingInfo {
  readonly check_after_secs?: number;
  readonly progress_percent?: number;
  readonly state?: string;
}
export interface GetMediaUploadStatusResponseDataProcessingInfoEncoded {
  readonly check_after_secs?: number;
  readonly progress_percent?: number;
  readonly state?: string;
}
export const GetMediaUploadStatusResponseDataProcessingInfo: Schema.Schema<GetMediaUploadStatusResponseDataProcessingInfo, GetMediaUploadStatusResponseDataProcessingInfoEncoded, never> = Schema.Struct({
  check_after_secs: Schema.optional(Schema.Int),
  progress_percent: Schema.optional(Schema.Int),
  state: Schema.optional(Schema.String),
});

export interface GetMediaUploadStatusResponseDataVideo {
  readonly video_type?: string;
}
export interface GetMediaUploadStatusResponseDataVideoEncoded {
  readonly video_type?: string;
}
export const GetMediaUploadStatusResponseDataVideo: Schema.Schema<GetMediaUploadStatusResponseDataVideo, GetMediaUploadStatusResponseDataVideoEncoded, never> = Schema.Struct({
  video_type: Schema.optional(Schema.String),
});

export interface GetNewsResponse {
  readonly data?: News;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface GetNewsResponseEncoded {
  readonly data?: NewsEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const GetNewsResponse: Schema.Schema<GetNewsResponse, GetNewsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => News)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface GetPostsAnalyticsResponse {
  readonly data?: ReadonlyArray<Analytics>;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface GetPostsAnalyticsResponseEncoded {
  readonly data?: ReadonlyArray<AnalyticsEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const GetPostsAnalyticsResponse: Schema.Schema<GetPostsAnalyticsResponse, GetPostsAnalyticsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => Analytics))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface GetPostsByIdResponse {
  readonly data?: Post;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}
export interface GetPostsByIdResponseEncoded {
  readonly data?: PostEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
}
export const GetPostsByIdResponse: Schema.Schema<GetPostsByIdResponse, GetPostsByIdResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => Post)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
});

export interface GetPostsByIdsResponse {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}
export interface GetPostsByIdsResponseEncoded {
  readonly data?: ReadonlyArray<PostEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
  readonly meta?: unknown;
}
export const GetPostsByIdsResponse: Schema.Schema<GetPostsByIdsResponse, GetPostsByIdsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => Post))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
  meta: Schema.optional(Schema.Unknown),
});

export interface GetPostsCountsAllResponse {
  readonly data?: ReadonlyArray<GetPostsCountsAllResponseData>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly meta?: unknown;
}
export interface GetPostsCountsAllResponseEncoded {
  readonly data?: ReadonlyArray<GetPostsCountsAllResponseDataEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly meta?: unknown;
}
export const GetPostsCountsAllResponse: Schema.Schema<GetPostsCountsAllResponse, GetPostsCountsAllResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => GetPostsCountsAllResponseData))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  meta: Schema.optional(Schema.Unknown),
});

export interface GetPostsCountsAllResponseData {
  readonly end: string;
  readonly post_count: number;
  readonly start: string;
}
export interface GetPostsCountsAllResponseDataEncoded {
  readonly end: string;
  readonly post_count: number;
  readonly start: string;
}
export const GetPostsCountsAllResponseData: Schema.Schema<GetPostsCountsAllResponseData, GetPostsCountsAllResponseDataEncoded, never> = Schema.Struct({
  end: Schema.String,
  post_count: Schema.Int,
  start: Schema.String,
});

export interface GetPostsCountsRecentResponse {
  readonly data?: ReadonlyArray<GetPostsCountsRecentResponseData>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly meta?: unknown;
}
export interface GetPostsCountsRecentResponseEncoded {
  readonly data?: ReadonlyArray<GetPostsCountsRecentResponseDataEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly meta?: unknown;
}
export const GetPostsCountsRecentResponse: Schema.Schema<GetPostsCountsRecentResponse, GetPostsCountsRecentResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => GetPostsCountsRecentResponseData))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  meta: Schema.optional(Schema.Unknown),
});

export interface GetPostsCountsRecentResponseData {
  readonly end: string;
  readonly post_count: number;
  readonly start: string;
}
export interface GetPostsCountsRecentResponseDataEncoded {
  readonly end: string;
  readonly post_count: number;
  readonly start: string;
}
export const GetPostsCountsRecentResponseData: Schema.Schema<GetPostsCountsRecentResponseData, GetPostsCountsRecentResponseDataEncoded, never> = Schema.Struct({
  end: Schema.String,
  post_count: Schema.Int,
  start: Schema.String,
});

export interface GetPostsLikingUsersResponse {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}
export interface GetPostsLikingUsersResponseEncoded {
  readonly data?: ReadonlyArray<UserEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
  readonly meta?: unknown;
}
export const GetPostsLikingUsersResponse: Schema.Schema<GetPostsLikingUsersResponse, GetPostsLikingUsersResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => User))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
  meta: Schema.optional(Schema.Unknown),
});

export interface GetPostsQuotedPostsResponse {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}
export interface GetPostsQuotedPostsResponseEncoded {
  readonly data?: ReadonlyArray<PostEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
  readonly meta?: unknown;
}
export const GetPostsQuotedPostsResponse: Schema.Schema<GetPostsQuotedPostsResponse, GetPostsQuotedPostsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => Post))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
  meta: Schema.optional(Schema.Unknown),
});

export interface GetPostsRepostedByResponse {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}
export interface GetPostsRepostedByResponseEncoded {
  readonly data?: ReadonlyArray<UserEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
  readonly meta?: unknown;
}
export const GetPostsRepostedByResponse: Schema.Schema<GetPostsRepostedByResponse, GetPostsRepostedByResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => User))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
  meta: Schema.optional(Schema.Unknown),
});

export interface GetPostsRepostsResponse {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}
export interface GetPostsRepostsResponseEncoded {
  readonly data?: ReadonlyArray<PostEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
  readonly meta?: unknown;
}
export const GetPostsRepostsResponse: Schema.Schema<GetPostsRepostsResponse, GetPostsRepostsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => Post))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
  meta: Schema.optional(Schema.Unknown),
});

export interface GetRuleCountsResponse {
  readonly data?: GetRuleCountsResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface GetRuleCountsResponseEncoded {
  readonly data?: GetRuleCountsResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const GetRuleCountsResponse: Schema.Schema<GetRuleCountsResponse, GetRuleCountsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => GetRuleCountsResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface GetRuleCountsResponseData {
  readonly all_project_client_apps?: ReadonlyArray<GetRuleCountsResponseDataAllProjectClientApps>;
  readonly cap_per_client_app: string;
  readonly cap_per_project: string;
  readonly client_app_rules_count: GetRuleCountsResponseDataClientAppRulesCount;
  readonly project_rules_count: string;
}
export interface GetRuleCountsResponseDataEncoded {
  readonly all_project_client_apps?: ReadonlyArray<GetRuleCountsResponseDataAllProjectClientAppsEncoded>;
  readonly cap_per_client_app: string;
  readonly cap_per_project: string;
  readonly client_app_rules_count: GetRuleCountsResponseDataClientAppRulesCountEncoded;
  readonly project_rules_count: string;
}
export const GetRuleCountsResponseData: Schema.Schema<GetRuleCountsResponseData, GetRuleCountsResponseDataEncoded, never> = Schema.Struct({
  all_project_client_apps: Schema.optional(Schema.Array(Schema.suspend(() => GetRuleCountsResponseDataAllProjectClientApps))),
  cap_per_client_app: Schema.String,
  cap_per_project: Schema.String,
  client_app_rules_count: Schema.suspend(() => GetRuleCountsResponseDataClientAppRulesCount),
  project_rules_count: Schema.String,
});

export interface GetRuleCountsResponseDataAllProjectClientApps {
  readonly client_app_id?: string;
  readonly rule_count: number;
}
export interface GetRuleCountsResponseDataAllProjectClientAppsEncoded {
  readonly client_app_id?: string;
  readonly rule_count: number;
}
export const GetRuleCountsResponseDataAllProjectClientApps: Schema.Schema<GetRuleCountsResponseDataAllProjectClientApps, GetRuleCountsResponseDataAllProjectClientAppsEncoded, never> = Schema.Struct({
  client_app_id: Schema.optional(Schema.String),
  rule_count: Schema.Int,
});

export interface GetRuleCountsResponseDataClientAppRulesCount {
  readonly client_app_id?: string;
  readonly rule_count: number;
}
export interface GetRuleCountsResponseDataClientAppRulesCountEncoded {
  readonly client_app_id?: string;
  readonly rule_count: number;
}
export const GetRuleCountsResponseDataClientAppRulesCount: Schema.Schema<GetRuleCountsResponseDataClientAppRulesCount, GetRuleCountsResponseDataClientAppRulesCountEncoded, never> = Schema.Struct({
  client_app_id: Schema.optional(Schema.String),
  rule_count: Schema.Int,
});

export interface GetRulesResponse {
  readonly data?: ReadonlyArray<GetRulesResponseData>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly meta?: unknown;
}
export interface GetRulesResponseEncoded {
  readonly data?: ReadonlyArray<GetRulesResponseDataEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly meta?: unknown;
}
export const GetRulesResponse: Schema.Schema<GetRulesResponse, GetRulesResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => GetRulesResponseData))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  meta: Schema.optional(Schema.Unknown),
});

export interface GetRulesResponseData {
  readonly id?: string;
  readonly tag?: string;
  readonly value?: string;
}
export interface GetRulesResponseDataEncoded {
  readonly id?: string;
  readonly tag?: string;
  readonly value?: string;
}
export const GetRulesResponseData: Schema.Schema<GetRulesResponseData, GetRulesResponseDataEncoded, never> = Schema.Struct({
  id: Schema.optional(Schema.String),
  tag: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
});

export interface GetScheduledBroadcastResponse {
  readonly data?: GetScheduledBroadcastResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface GetScheduledBroadcastResponseEncoded {
  readonly data?: GetScheduledBroadcastResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const GetScheduledBroadcastResponse: Schema.Schema<GetScheduledBroadcastResponse, GetScheduledBroadcastResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => GetScheduledBroadcastResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

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
export interface GetScheduledBroadcastResponseDataEncoded {
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
export const GetScheduledBroadcastResponseData: Schema.Schema<GetScheduledBroadcastResponseData, GetScheduledBroadcastResponseDataEncoded, never> = Schema.Struct({
  available_for_replay: Schema.optional(Schema.Boolean),
  broadcast_id: Schema.optional(Schema.String),
  chat_option: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  locale: Schema.optional(Schema.String),
  manual_publish: Schema.optional(Schema.Boolean),
  recurring_schedule_id: Schema.optional(Schema.String),
  scheduled_broadcast_id: Schema.optional(Schema.String),
  scheduled_end_ms: Schema.optional(Schema.String),
  scheduled_start_ms: Schema.optional(Schema.String),
  source_id: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  telecast_id: Schema.optional(Schema.String),
  thumbnail_media_id: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
});

export interface GetSpacesBuyersResponse {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}
export interface GetSpacesBuyersResponseEncoded {
  readonly data?: ReadonlyArray<UserEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
  readonly meta?: unknown;
}
export const GetSpacesBuyersResponse: Schema.Schema<GetSpacesBuyersResponse, GetSpacesBuyersResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => User))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
  meta: Schema.optional(Schema.Unknown),
});

export interface GetSpacesByCreatorIdsResponse {
  readonly data?: ReadonlyArray<Space>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}
export interface GetSpacesByCreatorIdsResponseEncoded {
  readonly data?: ReadonlyArray<SpaceEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
  readonly meta?: unknown;
}
export const GetSpacesByCreatorIdsResponse: Schema.Schema<GetSpacesByCreatorIdsResponse, GetSpacesByCreatorIdsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => Space))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
  meta: Schema.optional(Schema.Unknown),
});

export interface GetSpacesByIdResponse {
  readonly data?: Space;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}
export interface GetSpacesByIdResponseEncoded {
  readonly data?: SpaceEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
}
export const GetSpacesByIdResponse: Schema.Schema<GetSpacesByIdResponse, GetSpacesByIdResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => Space)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
});

export interface GetSpacesByIdsResponse {
  readonly data?: ReadonlyArray<Space>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}
export interface GetSpacesByIdsResponseEncoded {
  readonly data?: ReadonlyArray<SpaceEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
}
export const GetSpacesByIdsResponse: Schema.Schema<GetSpacesByIdsResponse, GetSpacesByIdsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => Space))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
});

export interface GetSpacesPostsResponse {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}
export interface GetSpacesPostsResponseEncoded {
  readonly data?: ReadonlyArray<PostEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
  readonly meta?: unknown;
}
export const GetSpacesPostsResponse: Schema.Schema<GetSpacesPostsResponse, GetSpacesPostsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => Post))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
  meta: Schema.optional(Schema.Unknown),
});

export interface GetTrendsByWoeidResponse {
  readonly data?: ReadonlyArray<Trend>;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface GetTrendsByWoeidResponseEncoded {
  readonly data?: ReadonlyArray<TrendEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const GetTrendsByWoeidResponse: Schema.Schema<GetTrendsByWoeidResponse, GetTrendsByWoeidResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => Trend))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface GetTrendsPersonalizedTrendsResponse {
  readonly data?: ReadonlyArray<PersonalizedTrend>;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface GetTrendsPersonalizedTrendsResponseEncoded {
  readonly data?: ReadonlyArray<PersonalizedTrendEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const GetTrendsPersonalizedTrendsResponse: Schema.Schema<GetTrendsPersonalizedTrendsResponse, GetTrendsPersonalizedTrendsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => PersonalizedTrend))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface GetUsageResponse {
  readonly data?: Usage;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface GetUsageResponseEncoded {
  readonly data?: UsageEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const GetUsageResponse: Schema.Schema<GetUsageResponse, GetUsageResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => Usage)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface GetUsersAffiliatesResponse {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}
export interface GetUsersAffiliatesResponseEncoded {
  readonly data?: ReadonlyArray<UserEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
  readonly meta?: unknown;
}
export const GetUsersAffiliatesResponse: Schema.Schema<GetUsersAffiliatesResponse, GetUsersAffiliatesResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => User))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
  meta: Schema.optional(Schema.Unknown),
});

export interface GetUsersBlockingResponse {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}
export interface GetUsersBlockingResponseEncoded {
  readonly data?: ReadonlyArray<UserEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
  readonly meta?: unknown;
}
export const GetUsersBlockingResponse: Schema.Schema<GetUsersBlockingResponse, GetUsersBlockingResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => User))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
  meta: Schema.optional(Schema.Unknown),
});

export interface GetUsersBookmarkFoldersResponse {
  readonly data?: ReadonlyArray<GetUsersBookmarkFoldersResponseData>;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface GetUsersBookmarkFoldersResponseEncoded {
  readonly data?: ReadonlyArray<GetUsersBookmarkFoldersResponseDataEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const GetUsersBookmarkFoldersResponse: Schema.Schema<GetUsersBookmarkFoldersResponse, GetUsersBookmarkFoldersResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => GetUsersBookmarkFoldersResponseData))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface GetUsersBookmarkFoldersResponseData {
  readonly id: string;
  readonly name: string;
}
export interface GetUsersBookmarkFoldersResponseDataEncoded {
  readonly id: string;
  readonly name: string;
}
export const GetUsersBookmarkFoldersResponseData: Schema.Schema<GetUsersBookmarkFoldersResponseData, GetUsersBookmarkFoldersResponseDataEncoded, never> = Schema.Struct({
  id: Schema.String,
  name: Schema.String,
});

export interface GetUsersBookmarksByFolderIdResponse {
  readonly data?: ReadonlyArray<unknown>;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface GetUsersBookmarksByFolderIdResponseEncoded {
  readonly data?: ReadonlyArray<unknown>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const GetUsersBookmarksByFolderIdResponse: Schema.Schema<GetUsersBookmarksByFolderIdResponse, GetUsersBookmarksByFolderIdResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.Unknown)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface GetUsersBookmarksResponse {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}
export interface GetUsersBookmarksResponseEncoded {
  readonly data?: ReadonlyArray<PostEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
  readonly meta?: unknown;
}
export const GetUsersBookmarksResponse: Schema.Schema<GetUsersBookmarksResponse, GetUsersBookmarksResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => Post))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
  meta: Schema.optional(Schema.Unknown),
});

export interface GetUsersByIdResponse {
  readonly data?: User;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}
export interface GetUsersByIdResponseEncoded {
  readonly data?: UserEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
}
export const GetUsersByIdResponse: Schema.Schema<GetUsersByIdResponse, GetUsersByIdResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => User)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
});

export interface GetUsersByIdsResponse {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}
export interface GetUsersByIdsResponseEncoded {
  readonly data?: ReadonlyArray<UserEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
}
export const GetUsersByIdsResponse: Schema.Schema<GetUsersByIdsResponse, GetUsersByIdsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => User))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
});

export interface GetUsersByUsernameResponse {
  readonly data?: User;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}
export interface GetUsersByUsernameResponseEncoded {
  readonly data?: UserEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
}
export const GetUsersByUsernameResponse: Schema.Schema<GetUsersByUsernameResponse, GetUsersByUsernameResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => User)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
});

export interface GetUsersByUsernamesResponse {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}
export interface GetUsersByUsernamesResponseEncoded {
  readonly data?: ReadonlyArray<UserEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
}
export const GetUsersByUsernamesResponse: Schema.Schema<GetUsersByUsernamesResponse, GetUsersByUsernamesResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => User))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
});

export interface GetUsersFollowedListsResponse {
  readonly data?: ReadonlyArray<List>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}
export interface GetUsersFollowedListsResponseEncoded {
  readonly data?: ReadonlyArray<ListEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
  readonly meta?: unknown;
}
export const GetUsersFollowedListsResponse: Schema.Schema<GetUsersFollowedListsResponse, GetUsersFollowedListsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => List))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
  meta: Schema.optional(Schema.Unknown),
});

export interface GetUsersFollowersResponse {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}
export interface GetUsersFollowersResponseEncoded {
  readonly data?: ReadonlyArray<UserEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
  readonly meta?: unknown;
}
export const GetUsersFollowersResponse: Schema.Schema<GetUsersFollowersResponse, GetUsersFollowersResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => User))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
  meta: Schema.optional(Schema.Unknown),
});

export interface GetUsersFollowingResponse {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}
export interface GetUsersFollowingResponseEncoded {
  readonly data?: ReadonlyArray<UserEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
  readonly meta?: unknown;
}
export const GetUsersFollowingResponse: Schema.Schema<GetUsersFollowingResponse, GetUsersFollowingResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => User))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
  meta: Schema.optional(Schema.Unknown),
});

export interface GetUsersLikedPostsResponse {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}
export interface GetUsersLikedPostsResponseEncoded {
  readonly data?: ReadonlyArray<PostEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
  readonly meta?: unknown;
}
export const GetUsersLikedPostsResponse: Schema.Schema<GetUsersLikedPostsResponse, GetUsersLikedPostsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => Post))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
  meta: Schema.optional(Schema.Unknown),
});

export interface GetUsersListMembershipsResponse {
  readonly data?: ReadonlyArray<List>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}
export interface GetUsersListMembershipsResponseEncoded {
  readonly data?: ReadonlyArray<ListEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
  readonly meta?: unknown;
}
export const GetUsersListMembershipsResponse: Schema.Schema<GetUsersListMembershipsResponse, GetUsersListMembershipsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => List))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
  meta: Schema.optional(Schema.Unknown),
});

export interface GetUsersMentionsResponse {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}
export interface GetUsersMentionsResponseEncoded {
  readonly data?: ReadonlyArray<PostEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
  readonly meta?: unknown;
}
export const GetUsersMentionsResponse: Schema.Schema<GetUsersMentionsResponse, GetUsersMentionsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => Post))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
  meta: Schema.optional(Schema.Unknown),
});

export interface GetUsersMeResponse {
  readonly data?: User;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}
export interface GetUsersMeResponseEncoded {
  readonly data?: UserEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
}
export const GetUsersMeResponse: Schema.Schema<GetUsersMeResponse, GetUsersMeResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => User)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
});

export interface GetUsersMutingResponse {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}
export interface GetUsersMutingResponseEncoded {
  readonly data?: ReadonlyArray<UserEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
  readonly meta?: unknown;
}
export const GetUsersMutingResponse: Schema.Schema<GetUsersMutingResponse, GetUsersMutingResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => User))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
  meta: Schema.optional(Schema.Unknown),
});

export interface GetUsersOwnedListsResponse {
  readonly data?: ReadonlyArray<List>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}
export interface GetUsersOwnedListsResponseEncoded {
  readonly data?: ReadonlyArray<ListEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
  readonly meta?: unknown;
}
export const GetUsersOwnedListsResponse: Schema.Schema<GetUsersOwnedListsResponse, GetUsersOwnedListsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => List))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
  meta: Schema.optional(Schema.Unknown),
});

export interface GetUsersPinnedListsResponse {
  readonly data?: ReadonlyArray<List>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}
export interface GetUsersPinnedListsResponseEncoded {
  readonly data?: ReadonlyArray<ListEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
  readonly meta?: unknown;
}
export const GetUsersPinnedListsResponse: Schema.Schema<GetUsersPinnedListsResponse, GetUsersPinnedListsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => List))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
  meta: Schema.optional(Schema.Unknown),
});

export interface GetUsersPostsResponse {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}
export interface GetUsersPostsResponseEncoded {
  readonly data?: ReadonlyArray<PostEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
  readonly meta?: unknown;
}
export const GetUsersPostsResponse: Schema.Schema<GetUsersPostsResponse, GetUsersPostsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => Post))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
  meta: Schema.optional(Schema.Unknown),
});

export interface GetUsersPublicKeyResponse {
  readonly data?: ReadonlyArray<PublicKey>;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface GetUsersPublicKeyResponseEncoded {
  readonly data?: ReadonlyArray<PublicKeyEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const GetUsersPublicKeyResponse: Schema.Schema<GetUsersPublicKeyResponse, GetUsersPublicKeyResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => PublicKey))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface GetUsersPublicKeysResponse {
  readonly data?: ReadonlyArray<PublicKey>;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface GetUsersPublicKeysResponseEncoded {
  readonly data?: ReadonlyArray<PublicKeyEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const GetUsersPublicKeysResponse: Schema.Schema<GetUsersPublicKeysResponse, GetUsersPublicKeysResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => PublicKey))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface GetUsersRepostsOfMeResponse {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}
export interface GetUsersRepostsOfMeResponseEncoded {
  readonly data?: ReadonlyArray<PostEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
  readonly meta?: unknown;
}
export const GetUsersRepostsOfMeResponse: Schema.Schema<GetUsersRepostsOfMeResponse, GetUsersRepostsOfMeResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => Post))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
  meta: Schema.optional(Schema.Unknown),
});

export interface GetUsersTimelineResponse {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}
export interface GetUsersTimelineResponseEncoded {
  readonly data?: ReadonlyArray<PostEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
  readonly meta?: unknown;
}
export const GetUsersTimelineResponse: Schema.Schema<GetUsersTimelineResponse, GetUsersTimelineResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => Post))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
  meta: Schema.optional(Schema.Unknown),
});

export interface GetWebhooksResponse {
  readonly data?: ReadonlyArray<WebhookConfig>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly meta?: unknown;
}
export interface GetWebhooksResponseEncoded {
  readonly data?: ReadonlyArray<WebhookConfigEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly meta?: unknown;
}
export const GetWebhooksResponse: Schema.Schema<GetWebhooksResponse, GetWebhooksResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => WebhookConfig))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  meta: Schema.optional(Schema.Unknown),
});

export interface GetWebhooksStreamLinksResponse {
  readonly data?: ReadonlyArray<GetWebhooksStreamLinksResponseData>;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface GetWebhooksStreamLinksResponseEncoded {
  readonly data?: ReadonlyArray<GetWebhooksStreamLinksResponseDataEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const GetWebhooksStreamLinksResponse: Schema.Schema<GetWebhooksStreamLinksResponse, GetWebhooksStreamLinksResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => GetWebhooksStreamLinksResponseData))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface GetWebhooksStreamLinksResponseData {
  readonly application_id?: string;
  readonly business_user_id?: string;
  readonly created_at?: string;
  readonly fields?: ReadonlyArray<string>;
  readonly instance_id?: string;
  readonly webhook_id?: string;
}
export interface GetWebhooksStreamLinksResponseDataEncoded {
  readonly application_id?: string;
  readonly business_user_id?: string;
  readonly created_at?: string;
  readonly fields?: ReadonlyArray<string>;
  readonly instance_id?: string;
  readonly webhook_id?: string;
}
export const GetWebhooksStreamLinksResponseData: Schema.Schema<GetWebhooksStreamLinksResponseData, GetWebhooksStreamLinksResponseDataEncoded, never> = Schema.Struct({
  application_id: Schema.optional(Schema.String),
  business_user_id: Schema.optional(Schema.String),
  created_at: Schema.optional(Schema.String),
  fields: Schema.optional(Schema.Array(Schema.String)),
  instance_id: Schema.optional(Schema.String),
  webhook_id: Schema.optional(Schema.String),
});

export interface GoLiveScheduledBroadcastResponse {
  readonly data?: GoLiveScheduledBroadcastResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface GoLiveScheduledBroadcastResponseEncoded {
  readonly data?: GoLiveScheduledBroadcastResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const GoLiveScheduledBroadcastResponse: Schema.Schema<GoLiveScheduledBroadcastResponse, GoLiveScheduledBroadcastResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => GoLiveScheduledBroadcastResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

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
export interface GoLiveScheduledBroadcastResponseDataEncoded {
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
export const GoLiveScheduledBroadcastResponseData: Schema.Schema<GoLiveScheduledBroadcastResponseData, GoLiveScheduledBroadcastResponseDataEncoded, never> = Schema.Struct({
  available_for_replay: Schema.optional(Schema.Boolean),
  broadcast_id: Schema.optional(Schema.String),
  chat_option: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  locale: Schema.optional(Schema.String),
  manual_publish: Schema.optional(Schema.Boolean),
  recurring_schedule_id: Schema.optional(Schema.String),
  scheduled_broadcast_id: Schema.optional(Schema.String),
  scheduled_end_ms: Schema.optional(Schema.String),
  scheduled_start_ms: Schema.optional(Schema.String),
  source_id: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  telecast_id: Schema.optional(Schema.String),
  thumbnail_media_id: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
});

export interface HidePostsReplyRequest {
  readonly hidden: boolean;
}
export interface HidePostsReplyRequestEncoded {
  readonly hidden: boolean;
}
export const HidePostsReplyRequest: Schema.Schema<HidePostsReplyRequest, HidePostsReplyRequestEncoded, never> = Schema.Struct({
  hidden: Schema.Boolean,
});

export interface HidePostsReplyResponse {
  readonly data?: HidePostsReplyResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface HidePostsReplyResponseEncoded {
  readonly data?: HidePostsReplyResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const HidePostsReplyResponse: Schema.Schema<HidePostsReplyResponse, HidePostsReplyResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => HidePostsReplyResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface HidePostsReplyResponseData {
  readonly hidden?: boolean;
}
export interface HidePostsReplyResponseDataEncoded {
  readonly hidden?: boolean;
}
export const HidePostsReplyResponseData: Schema.Schema<HidePostsReplyResponseData, HidePostsReplyResponseDataEncoded, never> = Schema.Struct({
  hidden: Schema.optional(Schema.Boolean),
});

export interface InitializeChatGroupResponse {
  readonly data?: InitializeChatGroupResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface InitializeChatGroupResponseEncoded {
  readonly data?: InitializeChatGroupResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const InitializeChatGroupResponse: Schema.Schema<InitializeChatGroupResponse, InitializeChatGroupResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => InitializeChatGroupResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface InitializeChatGroupResponseData {
  readonly conversation_id: string;
}
export interface InitializeChatGroupResponseDataEncoded {
  readonly conversation_id: string;
}
export const InitializeChatGroupResponseData: Schema.Schema<InitializeChatGroupResponseData, InitializeChatGroupResponseDataEncoded, never> = Schema.Struct({
  conversation_id: Schema.String,
});

export interface InitializeMediaUploadRequest {
  readonly additional_owners?: ReadonlyArray<string>;
  readonly media_category?: "amplify_video" | "tweet_gif" | "tweet_image" | "tweet_video" | "dm_gif" | "dm_image" | "dm_video" | "subtitles";
  readonly media_type?: "video/mp4" | "video/webm" | "video/mp2t" | "video/quicktime" | "text/srt" | "text/vtt" | "image/jpeg" | "image/gif" | "image/bmp" | "image/png" | "image/webp" | "image/pjpeg" | "image/tiff" | "model/gltf-binary" | "model/vnd.usdz+zip";
  readonly shared?: boolean;
  readonly total_bytes?: number;
}
export interface InitializeMediaUploadRequestEncoded {
  readonly additional_owners?: ReadonlyArray<string>;
  readonly media_category?: "amplify_video" | "tweet_gif" | "tweet_image" | "tweet_video" | "dm_gif" | "dm_image" | "dm_video" | "subtitles";
  readonly media_type?: "video/mp4" | "video/webm" | "video/mp2t" | "video/quicktime" | "text/srt" | "text/vtt" | "image/jpeg" | "image/gif" | "image/bmp" | "image/png" | "image/webp" | "image/pjpeg" | "image/tiff" | "model/gltf-binary" | "model/vnd.usdz+zip";
  readonly shared?: boolean;
  readonly total_bytes?: number;
}
export const InitializeMediaUploadRequest: Schema.Schema<InitializeMediaUploadRequest, InitializeMediaUploadRequestEncoded, never> = Schema.Struct({
  additional_owners: Schema.optional(Schema.Array(Schema.String)),
  media_category: Schema.optional(Schema.Union(Schema.Literal("amplify_video"), Schema.Literal("tweet_gif"), Schema.Literal("tweet_image"), Schema.Literal("tweet_video"), Schema.Literal("dm_gif"), Schema.Literal("dm_image"), Schema.Literal("dm_video"), Schema.Literal("subtitles"))),
  media_type: Schema.optional(Schema.Union(Schema.Literal("video/mp4"), Schema.Literal("video/webm"), Schema.Literal("video/mp2t"), Schema.Literal("video/quicktime"), Schema.Literal("text/srt"), Schema.Literal("text/vtt"), Schema.Literal("image/jpeg"), Schema.Literal("image/gif"), Schema.Literal("image/bmp"), Schema.Literal("image/png"), Schema.Literal("image/webp"), Schema.Literal("image/pjpeg"), Schema.Literal("image/tiff"), Schema.Literal("model/gltf-binary"), Schema.Literal("model/vnd.usdz+zip"))),
  shared: Schema.optional(Schema.Boolean),
  total_bytes: Schema.optional(Schema.Int),
});

export interface InitializeMediaUploadResponse {
  readonly data?: InitializeMediaUploadResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface InitializeMediaUploadResponseEncoded {
  readonly data?: InitializeMediaUploadResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const InitializeMediaUploadResponse: Schema.Schema<InitializeMediaUploadResponse, InitializeMediaUploadResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => InitializeMediaUploadResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface InitializeMediaUploadResponseData {
  readonly expires_after_secs?: number;
  readonly id: string;
  readonly media_key?: string;
}
export interface InitializeMediaUploadResponseDataEncoded {
  readonly expires_after_secs?: number;
  readonly id: string;
  readonly media_key?: string;
}
export const InitializeMediaUploadResponseData: Schema.Schema<InitializeMediaUploadResponseData, InitializeMediaUploadResponseDataEncoded, never> = Schema.Struct({
  expires_after_secs: Schema.optional(Schema.Int),
  id: Schema.String,
  media_key: Schema.optional(Schema.String),
});

export interface InternalErrorProblem {
  readonly detail: string;
  readonly status?: number;
  readonly title: string;
  readonly type: "https://api.x.com/2/problems/internal-error";
}
export interface InternalErrorProblemEncoded {
  readonly detail: string;
  readonly status?: number;
  readonly title: string;
  readonly type: "https://api.x.com/2/problems/internal-error";
}
export const InternalErrorProblem: Schema.Schema<InternalErrorProblem, InternalErrorProblemEncoded, never> = Schema.Struct({
  detail: Schema.String,
  status: Schema.optional(Schema.Int),
  title: Schema.String,
  type: Schema.Union(Schema.Literal("https://api.x.com/2/problems/internal-error")),
});

export interface InvalidRequestProblem {
  readonly detail: string;
  readonly parameter?: string;
  readonly status?: number;
  readonly title: string;
  readonly type: "https://api.x.com/2/problems/invalid-request";
  readonly value?: string;
}
export interface InvalidRequestProblemEncoded {
  readonly detail: string;
  readonly parameter?: string;
  readonly status?: number;
  readonly title: string;
  readonly type: "https://api.x.com/2/problems/invalid-request";
  readonly value?: string;
}
export const InvalidRequestProblem: Schema.Schema<InvalidRequestProblem, InvalidRequestProblemEncoded, never> = Schema.Struct({
  detail: Schema.String,
  parameter: Schema.optional(Schema.String),
  status: Schema.optional(Schema.Int),
  title: Schema.String,
  type: Schema.Union(Schema.Literal("https://api.x.com/2/problems/invalid-request")),
  value: Schema.optional(Schema.String),
});

export type Keyword = string;
export type KeywordEncoded = string;
export const Keyword: Schema.Schema<Keyword, KeywordEncoded, never> = Schema.String;

export interface LikeComplianceSchema {
  readonly delete: UnlikeComplianceSchema;
}
export interface LikeComplianceSchemaEncoded {
  readonly delete: UnlikeComplianceSchemaEncoded;
}
export const LikeComplianceSchema: Schema.Schema<LikeComplianceSchema, LikeComplianceSchemaEncoded, never> = Schema.Struct({
  delete: Schema.suspend(() => UnlikeComplianceSchema),
});

export type LikeId = string;
export type LikeIdEncoded = string;
export const LikeId: Schema.Schema<LikeId, LikeIdEncoded, never> = Schema.String;

export interface LikePostRequest {
  readonly tweet_id: string;
}
export interface LikePostRequestEncoded {
  readonly tweet_id: string;
}
export const LikePostRequest: Schema.Schema<LikePostRequest, LikePostRequestEncoded, never> = Schema.Struct({
  tweet_id: Schema.String,
});

export interface LikePostResponse {
  readonly data?: LikePostResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface LikePostResponseEncoded {
  readonly data?: LikePostResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const LikePostResponse: Schema.Schema<LikePostResponse, LikePostResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => LikePostResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface LikePostResponseData {
  readonly liked: boolean;
}
export interface LikePostResponseDataEncoded {
  readonly liked: boolean;
}
export const LikePostResponseData: Schema.Schema<LikePostResponseData, LikePostResponseDataEncoded, never> = Schema.Struct({
  liked: Schema.Boolean,
});

/** A Like event, with the tweet author user and the tweet being liked */
export interface LikeWithPostAuthor {
  readonly created_at?: Date;
  readonly id?: LikeId;
  readonly liked_tweet_id?: PostId;
  readonly timestamp_ms?: number;
  readonly tweet_author_id?: UserId;
}
export interface LikeWithPostAuthorEncoded {
  readonly created_at?: string;
  readonly id?: LikeIdEncoded;
  readonly liked_tweet_id?: PostIdEncoded;
  readonly timestamp_ms?: number;
  readonly tweet_author_id?: UserIdEncoded;
}
export const LikeWithPostAuthor: Schema.Schema<LikeWithPostAuthor, LikeWithPostAuthorEncoded, never> = Schema.Struct({
  created_at: Schema.optional(Schema.DateFromString),
  id: Schema.optional(Schema.suspend(() => LikeId)),
  liked_tweet_id: Schema.optional(Schema.suspend(() => PostId)),
  timestamp_ms: Schema.optional(Schema.Int),
  tweet_author_id: Schema.optional(Schema.suspend(() => UserId)),
});

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
export interface ListEncoded {
  readonly created_at?: string;
  readonly description?: string;
  readonly follower_count?: ListFollowerCountEncoded;
  readonly id?: string;
  readonly member_count?: ListMemberCountEncoded;
  readonly name?: string;
  readonly owner_id?: string;
  readonly private?: boolean;
}
export const List: Schema.Schema<List, ListEncoded, never> = Schema.Struct({
  created_at: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  follower_count: Schema.optional(Schema.suspend(() => ListFollowerCount)),
  id: Schema.optional(Schema.String),
  member_count: Schema.optional(Schema.suspend(() => ListMemberCount)),
  name: Schema.optional(Schema.String),
  owner_id: Schema.optional(Schema.String),
  private: Schema.optional(Schema.Boolean),
});

export type ListFollowerCount = number;
export type ListFollowerCountEncoded = number;
export const ListFollowerCount: Schema.Schema<ListFollowerCount, ListFollowerCountEncoded, never> = Schema.Int;

export type ListId = string;
export type ListIdEncoded = string;
export const ListId: Schema.Schema<ListId, ListIdEncoded, never> = Schema.String;

export type ListMemberCount = number;
export type ListMemberCountEncoded = number;
export const ListMemberCount: Schema.Schema<ListMemberCount, ListMemberCountEncoded, never> = Schema.Int;

export interface ListScheduledBroadcastsResponse {
  readonly data?: ReadonlyArray<ListScheduledBroadcastsResponseData>;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface ListScheduledBroadcastsResponseEncoded {
  readonly data?: ReadonlyArray<ListScheduledBroadcastsResponseDataEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const ListScheduledBroadcastsResponse: Schema.Schema<ListScheduledBroadcastsResponse, ListScheduledBroadcastsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => ListScheduledBroadcastsResponseData))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

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
export interface ListScheduledBroadcastsResponseDataEncoded {
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
export const ListScheduledBroadcastsResponseData: Schema.Schema<ListScheduledBroadcastsResponseData, ListScheduledBroadcastsResponseDataEncoded, never> = Schema.Struct({
  available_for_replay: Schema.optional(Schema.Boolean),
  broadcast_id: Schema.optional(Schema.String),
  chat_option: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  locale: Schema.optional(Schema.String),
  manual_publish: Schema.optional(Schema.Boolean),
  recurring_schedule_id: Schema.optional(Schema.String),
  scheduled_broadcast_id: Schema.optional(Schema.String),
  scheduled_end_ms: Schema.optional(Schema.String),
  scheduled_start_ms: Schema.optional(Schema.String),
  source_id: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  telecast_id: Schema.optional(Schema.String),
  thumbnail_media_id: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
});

export interface MarkChatConversationReadRequest {
  readonly seen_until_sequence_id: string;
}
export interface MarkChatConversationReadRequestEncoded {
  readonly seen_until_sequence_id: string;
}
export const MarkChatConversationReadRequest: Schema.Schema<MarkChatConversationReadRequest, MarkChatConversationReadRequestEncoded, never> = Schema.Struct({
  seen_until_sequence_id: Schema.String,
});

export interface MarkChatConversationReadResponse {
  readonly data?: MarkChatConversationReadResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface MarkChatConversationReadResponseEncoded {
  readonly data?: MarkChatConversationReadResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const MarkChatConversationReadResponse: Schema.Schema<MarkChatConversationReadResponse, MarkChatConversationReadResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => MarkChatConversationReadResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface MarkChatConversationReadResponseData {
  readonly success: boolean;
}
export interface MarkChatConversationReadResponseDataEncoded {
  readonly success: boolean;
}
export const MarkChatConversationReadResponseData: Schema.Schema<MarkChatConversationReadResponseData, MarkChatConversationReadResponseDataEncoded, never> = Schema.Struct({
  success: Schema.Boolean,
});

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
export interface MediaEncoded {
  readonly alt_text?: string;
  readonly duration_ms?: number;
  readonly height?: number;
  readonly media_key?: string;
  readonly non_public_metrics?: MediaNonPublicMetricsEncoded;
  readonly organic_metrics?: MediaOrganicMetricsEncoded;
  readonly preview_image_url?: string;
  readonly promoted_metrics?: MediaPromotedMetricsEncoded;
  readonly public_metrics?: MediaPublicMetricsEncoded;
  readonly type?: string;
  readonly url?: string;
  readonly variants?: MediaVariantsEncoded;
  readonly width?: number;
}
export const Media: Schema.Schema<Media, MediaEncoded, never> = Schema.Struct({
  alt_text: Schema.optional(Schema.String),
  duration_ms: Schema.optional(Schema.Int),
  height: Schema.optional(Schema.Int),
  media_key: Schema.optional(Schema.String),
  non_public_metrics: Schema.optional(Schema.suspend(() => MediaNonPublicMetrics)),
  organic_metrics: Schema.optional(Schema.suspend(() => MediaOrganicMetrics)),
  preview_image_url: Schema.optional(Schema.String),
  promoted_metrics: Schema.optional(Schema.suspend(() => MediaPromotedMetrics)),
  public_metrics: Schema.optional(Schema.suspend(() => MediaPublicMetrics)),
  type: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
  variants: Schema.optional(Schema.suspend(() => MediaVariants)),
  width: Schema.optional(Schema.Int),
});

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
export interface MediaAnalyticsEncoded {
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
  readonly timestamped_metrics?: MediaAnalyticsTimestampedMetricsEncoded;
  readonly video_views?: number;
  readonly watch_time_ms?: number;
}
export const MediaAnalytics: Schema.Schema<MediaAnalytics, MediaAnalyticsEncoded, never> = Schema.Struct({
  cta_url_clicks: Schema.optional(Schema.Int),
  cta_watch_clicks: Schema.optional(Schema.Int),
  media_key: Schema.optional(Schema.String),
  play_from_tap: Schema.optional(Schema.Int),
  playback_complete: Schema.optional(Schema.Int),
  playback_start: Schema.optional(Schema.Int),
  playback25: Schema.optional(Schema.Int),
  playback50: Schema.optional(Schema.Int),
  playback75: Schema.optional(Schema.Int),
  timestamp: Schema.optional(Schema.String),
  timestamped_metrics: Schema.optional(Schema.suspend(() => MediaAnalyticsTimestampedMetrics)),
  video_views: Schema.optional(Schema.Int),
  watch_time_ms: Schema.optional(Schema.Int),
});

export type MediaAnalyticsTimestampedMetrics = ReadonlyArray<unknown>;
export type MediaAnalyticsTimestampedMetricsEncoded = ReadonlyArray<unknown>;
export const MediaAnalyticsTimestampedMetrics: Schema.Schema<MediaAnalyticsTimestampedMetrics, MediaAnalyticsTimestampedMetricsEncoded, never> = Schema.Array(Schema.Unknown);

export type MediaId = string;
export type MediaIdEncoded = string;
export const MediaId: Schema.Schema<MediaId, MediaIdEncoded, never> = Schema.String;

/** Nonpublic engagement metrics for the media at the time of the request. */
export interface MediaNonPublicMetrics {
  readonly playback_0_count?: number | null;
  readonly playback_100_count?: number | null;
  readonly playback_25_count?: number | null;
  readonly playback_50_count?: number | null;
  readonly playback_75_count?: number | null;
}
export interface MediaNonPublicMetricsEncoded {
  readonly playback_0_count?: number | null;
  readonly playback_100_count?: number | null;
  readonly playback_25_count?: number | null;
  readonly playback_50_count?: number | null;
  readonly playback_75_count?: number | null;
}
export const MediaNonPublicMetrics: Schema.Schema<MediaNonPublicMetrics, MediaNonPublicMetricsEncoded, never> = Schema.Struct({
  playback_0_count: Schema.optional(Schema.NullOr(Schema.Int)),
  playback_100_count: Schema.optional(Schema.NullOr(Schema.Int)),
  playback_25_count: Schema.optional(Schema.NullOr(Schema.Int)),
  playback_50_count: Schema.optional(Schema.NullOr(Schema.Int)),
  playback_75_count: Schema.optional(Schema.NullOr(Schema.Int)),
});

/** Organic nonpublic engagement metrics for the media at the time of the request. */
export interface MediaOrganicMetrics {
  readonly playback_0_count?: number | null;
  readonly playback_100_count?: number | null;
  readonly playback_25_count?: number | null;
  readonly playback_50_count?: number | null;
  readonly playback_75_count?: number | null;
  readonly view_count?: number | null;
}
export interface MediaOrganicMetricsEncoded {
  readonly playback_0_count?: number | null;
  readonly playback_100_count?: number | null;
  readonly playback_25_count?: number | null;
  readonly playback_50_count?: number | null;
  readonly playback_75_count?: number | null;
  readonly view_count?: number | null;
}
export const MediaOrganicMetrics: Schema.Schema<MediaOrganicMetrics, MediaOrganicMetricsEncoded, never> = Schema.Struct({
  playback_0_count: Schema.optional(Schema.NullOr(Schema.Int)),
  playback_100_count: Schema.optional(Schema.NullOr(Schema.Int)),
  playback_25_count: Schema.optional(Schema.NullOr(Schema.Int)),
  playback_50_count: Schema.optional(Schema.NullOr(Schema.Int)),
  playback_75_count: Schema.optional(Schema.NullOr(Schema.Int)),
  view_count: Schema.optional(Schema.NullOr(Schema.Int)),
});

/** Promoted nonpublic engagement metrics for the media at the time of the request. */
export interface MediaPromotedMetrics {
  readonly playback_0_count?: number | null;
  readonly playback_100_count?: number | null;
  readonly playback_25_count?: number | null;
  readonly playback_50_count?: number | null;
  readonly playback_75_count?: number | null;
  readonly view_count?: number | null;
}
export interface MediaPromotedMetricsEncoded {
  readonly playback_0_count?: number | null;
  readonly playback_100_count?: number | null;
  readonly playback_25_count?: number | null;
  readonly playback_50_count?: number | null;
  readonly playback_75_count?: number | null;
  readonly view_count?: number | null;
}
export const MediaPromotedMetrics: Schema.Schema<MediaPromotedMetrics, MediaPromotedMetricsEncoded, never> = Schema.Struct({
  playback_0_count: Schema.optional(Schema.NullOr(Schema.Int)),
  playback_100_count: Schema.optional(Schema.NullOr(Schema.Int)),
  playback_25_count: Schema.optional(Schema.NullOr(Schema.Int)),
  playback_50_count: Schema.optional(Schema.NullOr(Schema.Int)),
  playback_75_count: Schema.optional(Schema.NullOr(Schema.Int)),
  view_count: Schema.optional(Schema.NullOr(Schema.Int)),
});

/** Public engagement metrics for the media at the time of the request. */
export interface MediaPublicMetrics {
  readonly view_count: number;
}
export interface MediaPublicMetricsEncoded {
  readonly view_count: number;
}
export const MediaPublicMetrics: Schema.Schema<MediaPublicMetrics, MediaPublicMetricsEncoded, never> = Schema.Struct({
  view_count: Schema.Int,
});

export interface MediaUploadRequest {
  readonly additional_owners?: string;
  readonly media: string | string;
  readonly media_category: "tweet_image" | "tweet_video" | "tweet_gif" | "dm_image" | "dm_video" | "dm_gif" | "subtitles";
}
export interface MediaUploadRequestEncoded {
  readonly additional_owners?: string;
  readonly media: string | string;
  readonly media_category: "tweet_image" | "tweet_video" | "tweet_gif" | "dm_image" | "dm_video" | "dm_gif" | "subtitles";
}
export const MediaUploadRequest: Schema.Schema<MediaUploadRequest, MediaUploadRequestEncoded, never> = Schema.Struct({
  additional_owners: Schema.optional(Schema.String),
  media: Schema.Union(Schema.String, Schema.String),
  media_category: Schema.Union(Schema.Literal("tweet_image"), Schema.Literal("tweet_video"), Schema.Literal("tweet_gif"), Schema.Literal("dm_image"), Schema.Literal("dm_video"), Schema.Literal("dm_gif"), Schema.Literal("subtitles")),
});

export interface MediaUploadResponse {
  readonly data?: MediaUploadResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface MediaUploadResponseEncoded {
  readonly data?: MediaUploadResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const MediaUploadResponse: Schema.Schema<MediaUploadResponse, MediaUploadResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => MediaUploadResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface MediaUploadResponseData {
  readonly expires_after_secs?: number;
  readonly id: string;
  readonly image?: MediaUploadResponseDataImage;
  readonly media_key?: string;
  readonly processing_info?: MediaUploadResponseDataProcessingInfo;
  readonly size?: number;
  readonly video?: MediaUploadResponseDataVideo;
}
export interface MediaUploadResponseDataEncoded {
  readonly expires_after_secs?: number;
  readonly id: string;
  readonly image?: MediaUploadResponseDataImageEncoded;
  readonly media_key?: string;
  readonly processing_info?: MediaUploadResponseDataProcessingInfoEncoded;
  readonly size?: number;
  readonly video?: MediaUploadResponseDataVideoEncoded;
}
export const MediaUploadResponseData: Schema.Schema<MediaUploadResponseData, MediaUploadResponseDataEncoded, never> = Schema.Struct({
  expires_after_secs: Schema.optional(Schema.Int),
  id: Schema.String,
  image: Schema.optional(Schema.suspend(() => MediaUploadResponseDataImage)),
  media_key: Schema.optional(Schema.String),
  processing_info: Schema.optional(Schema.suspend(() => MediaUploadResponseDataProcessingInfo)),
  size: Schema.optional(Schema.Int),
  video: Schema.optional(Schema.suspend(() => MediaUploadResponseDataVideo)),
});

export interface MediaUploadResponseDataImage {
  readonly h?: number;
  readonly image_type?: string;
  readonly w?: number;
}
export interface MediaUploadResponseDataImageEncoded {
  readonly h?: number;
  readonly image_type?: string;
  readonly w?: number;
}
export const MediaUploadResponseDataImage: Schema.Schema<MediaUploadResponseDataImage, MediaUploadResponseDataImageEncoded, never> = Schema.Struct({
  h: Schema.optional(Schema.Int),
  image_type: Schema.optional(Schema.String),
  w: Schema.optional(Schema.Int),
});

export interface MediaUploadResponseDataProcessingInfo {
  readonly check_after_secs?: number;
  readonly progress_percent?: number;
  readonly state?: string;
}
export interface MediaUploadResponseDataProcessingInfoEncoded {
  readonly check_after_secs?: number;
  readonly progress_percent?: number;
  readonly state?: string;
}
export const MediaUploadResponseDataProcessingInfo: Schema.Schema<MediaUploadResponseDataProcessingInfo, MediaUploadResponseDataProcessingInfoEncoded, never> = Schema.Struct({
  check_after_secs: Schema.optional(Schema.Int),
  progress_percent: Schema.optional(Schema.Int),
  state: Schema.optional(Schema.String),
});

export interface MediaUploadResponseDataVideo {
  readonly video_type?: string;
}
export interface MediaUploadResponseDataVideoEncoded {
  readonly video_type?: string;
}
export const MediaUploadResponseDataVideo: Schema.Schema<MediaUploadResponseDataVideo, MediaUploadResponseDataVideoEncoded, never> = Schema.Struct({
  video_type: Schema.optional(Schema.String),
});

export type MediaVariants = ReadonlyArray<unknown>;
export type MediaVariantsEncoded = ReadonlyArray<unknown>;
export const MediaVariants: Schema.Schema<MediaVariants, MediaVariantsEncoded, never> = Schema.Array(Schema.Unknown);

export interface MuteBroadcastChatUserRequest {
  readonly message_id?: string;
  readonly user_id: string;
}
export interface MuteBroadcastChatUserRequestEncoded {
  readonly message_id?: string;
  readonly user_id: string;
}
export const MuteBroadcastChatUserRequest: Schema.Schema<MuteBroadcastChatUserRequest, MuteBroadcastChatUserRequestEncoded, never> = Schema.Struct({
  message_id: Schema.optional(Schema.String),
  user_id: Schema.String,
});

export interface MuteBroadcastChatUserResponse {
  readonly data?: MuteBroadcastChatUserResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface MuteBroadcastChatUserResponseEncoded {
  readonly data?: MuteBroadcastChatUserResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const MuteBroadcastChatUserResponse: Schema.Schema<MuteBroadcastChatUserResponse, MuteBroadcastChatUserResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => MuteBroadcastChatUserResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface MuteBroadcastChatUserResponseData {
  readonly muted: boolean;
}
export interface MuteBroadcastChatUserResponseDataEncoded {
  readonly muted: boolean;
}
export const MuteBroadcastChatUserResponseData: Schema.Schema<MuteBroadcastChatUserResponseData, MuteBroadcastChatUserResponseDataEncoded, never> = Schema.Struct({
  muted: Schema.Boolean,
});

export interface MuteUserRequest {
  readonly target_user_id: string;
}
export interface MuteUserRequestEncoded {
  readonly target_user_id: string;
}
export const MuteUserRequest: Schema.Schema<MuteUserRequest, MuteUserRequestEncoded, never> = Schema.Struct({
  target_user_id: Schema.String,
});

export interface MuteUserResponse {
  readonly data?: MuteUserResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface MuteUserResponseEncoded {
  readonly data?: MuteUserResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const MuteUserResponse: Schema.Schema<MuteUserResponse, MuteUserResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => MuteUserResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface MuteUserResponseData {
  readonly muting: boolean;
}
export interface MuteUserResponseDataEncoded {
  readonly muting: boolean;
}
export const MuteUserResponseData: Schema.Schema<MuteUserResponseData, MuteUserResponseDataEncoded, never> = Schema.Struct({
  muting: Schema.Boolean,
});

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
export interface NewsEncoded {
  readonly category?: string;
  readonly cluster_posts_results?: NewsClusterPostsResultsEncoded;
  readonly contexts?: unknown;
  readonly disclaimer?: string;
  readonly hook?: string;
  readonly id?: string;
  readonly keywords?: unknown;
  readonly name?: string;
  readonly summary?: string;
  readonly updated_at?: string;
}
export const News: Schema.Schema<News, NewsEncoded, never> = Schema.Struct({
  category: Schema.optional(Schema.String),
  cluster_posts_results: Schema.optional(Schema.suspend(() => NewsClusterPostsResults)),
  contexts: Schema.optional(Schema.Unknown),
  disclaimer: Schema.optional(Schema.String),
  hook: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  keywords: Schema.optional(Schema.Unknown),
  name: Schema.optional(Schema.String),
  summary: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
});

export interface NewsActivityResponsePayload {
  readonly category?: string;
  readonly headline?: string;
  readonly hook?: string;
  readonly summary?: string;
}
export interface NewsActivityResponsePayloadEncoded {
  readonly category?: string;
  readonly headline?: string;
  readonly hook?: string;
  readonly summary?: string;
}
export const NewsActivityResponsePayload: Schema.Schema<NewsActivityResponsePayload, NewsActivityResponsePayloadEncoded, never> = Schema.Struct({
  category: Schema.optional(Schema.String),
  headline: Schema.optional(Schema.String),
  hook: Schema.optional(Schema.String),
  summary: Schema.optional(Schema.String),
});

export type NewsClusterPostsResults = ReadonlyArray<unknown>;
export type NewsClusterPostsResultsEncoded = ReadonlyArray<unknown>;
export const NewsClusterPostsResults: Schema.Schema<NewsClusterPostsResults, NewsClusterPostsResultsEncoded, never> = Schema.Array(Schema.Unknown);

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
export interface NotAuthorizedForFieldProblemEncoded {
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
export const NotAuthorizedForFieldProblem: Schema.Schema<NotAuthorizedForFieldProblem, NotAuthorizedForFieldProblemEncoded, never> = Schema.Struct({
  detail: Schema.String,
  field: Schema.String,
  parameter: Schema.optional(Schema.String),
  resource_id: Schema.optional(Schema.String),
  resource_type: Schema.optional(Schema.String),
  section: Schema.optional(Schema.String),
  status: Schema.optional(Schema.Int),
  title: Schema.String,
  type: Schema.Union(Schema.Literal("https://api.x.com/2/problems/not-authorized-for-field")),
  value: Schema.optional(Schema.String),
});

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
export interface NotAuthorizedForResourceProblemEncoded {
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
export const NotAuthorizedForResourceProblem: Schema.Schema<NotAuthorizedForResourceProblem, NotAuthorizedForResourceProblemEncoded, never> = Schema.Struct({
  detail: Schema.String,
  parameter: Schema.optional(Schema.String),
  resource_id: Schema.optional(Schema.String),
  resource_type: Schema.String,
  section: Schema.optional(Schema.String),
  status: Schema.optional(Schema.Int),
  title: Schema.String,
  type: Schema.Union(Schema.Literal("https://api.x.com/2/problems/not-authorized-for-resource")),
  value: Schema.optional(Schema.String),
});

export interface Note {
  readonly id?: string;
  readonly info?: NoteInfo;
  readonly scoring_status?: NoteScoringStatus;
  readonly status?: string;
  readonly test_result?: NoteTestResult;
}
export interface NoteEncoded {
  readonly id?: string;
  readonly info?: NoteInfoEncoded;
  readonly scoring_status?: NoteScoringStatusEncoded;
  readonly status?: string;
  readonly test_result?: NoteTestResultEncoded;
}
export const Note: Schema.Schema<Note, NoteEncoded, never> = Schema.Struct({
  id: Schema.optional(Schema.String),
  info: Schema.optional(Schema.suspend(() => NoteInfo)),
  scoring_status: Schema.optional(Schema.suspend(() => NoteScoringStatus)),
  status: Schema.optional(Schema.String),
  test_result: Schema.optional(Schema.suspend(() => NoteTestResult)),
});

export type NoteId = string;
export type NoteIdEncoded = string;
export const NoteId: Schema.Schema<NoteId, NoteIdEncoded, never> = Schema.String;

/** Details about the Community Note's content, classification and source. */
export interface NoteInfo {
  readonly classification?: string | null;
  readonly misleading_tags?: ReadonlyArray<string> | null;
  readonly post_id?: string | null;
  readonly rating_status?: string | null;
  readonly text?: string | null;
  readonly trustworthy_sources?: boolean | null;
}
export interface NoteInfoEncoded {
  readonly classification?: string | null;
  readonly misleading_tags?: ReadonlyArray<string> | null;
  readonly post_id?: string | null;
  readonly rating_status?: string | null;
  readonly text?: string | null;
  readonly trustworthy_sources?: boolean | null;
}
export const NoteInfo: Schema.Schema<NoteInfo, NoteInfoEncoded, never> = Schema.Struct({
  classification: Schema.optional(Schema.NullOr(Schema.String)),
  misleading_tags: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
  post_id: Schema.optional(Schema.NullOr(Schema.String)),
  rating_status: Schema.optional(Schema.NullOr(Schema.String)),
  text: Schema.optional(Schema.NullOr(Schema.String)),
  trustworthy_sources: Schema.optional(Schema.NullOr(Schema.Boolean)),
});

/** Per-model scoring breakdown for the Community Note. */
export interface NoteScoringStatus {
  readonly has_access?: boolean | null;
  readonly rating_counts_per_model?: ReadonlyArray<unknown> | null;
}
export interface NoteScoringStatusEncoded {
  readonly has_access?: boolean | null;
  readonly rating_counts_per_model?: ReadonlyArray<unknown> | null;
}
export const NoteScoringStatus: Schema.Schema<NoteScoringStatus, NoteScoringStatusEncoded, never> = Schema.Struct({
  has_access: Schema.optional(Schema.NullOr(Schema.Boolean)),
  rating_counts_per_model: Schema.optional(Schema.NullOr(Schema.Array(Schema.Unknown))),
});

/** AI evaluation results for the Community Note (returned in test mode). */
export interface NoteTestResult {
  readonly evaluation_outcome?: ReadonlyArray<unknown> | null;
}
export interface NoteTestResultEncoded {
  readonly evaluation_outcome?: ReadonlyArray<unknown> | null;
}
export const NoteTestResult: Schema.Schema<NoteTestResult, NoteTestResultEncoded, never> = Schema.Struct({
  evaluation_outcome: Schema.optional(Schema.NullOr(Schema.Array(Schema.Unknown))),
});

export interface PersonalizedTrend {
  readonly category?: string;
  readonly post_count?: string;
  readonly trend_name?: string;
  readonly trending_since?: string;
}
export interface PersonalizedTrendEncoded {
  readonly category?: string;
  readonly post_count?: string;
  readonly trend_name?: string;
  readonly trending_since?: string;
}
export const PersonalizedTrend: Schema.Schema<PersonalizedTrend, PersonalizedTrendEncoded, never> = Schema.Struct({
  category: Schema.optional(Schema.String),
  post_count: Schema.optional(Schema.String),
  trend_name: Schema.optional(Schema.String),
  trending_since: Schema.optional(Schema.String),
});

export interface PinListRequest {
  readonly list_id: string;
}
export interface PinListRequestEncoded {
  readonly list_id: string;
}
export const PinListRequest: Schema.Schema<PinListRequest, PinListRequestEncoded, never> = Schema.Struct({
  list_id: Schema.String,
});

export interface PinListResponse {
  readonly data?: PinListResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface PinListResponseEncoded {
  readonly data?: PinListResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const PinListResponse: Schema.Schema<PinListResponse, PinListResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => PinListResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface PinListResponseData {
  readonly pinned: boolean;
}
export interface PinListResponseDataEncoded {
  readonly pinned: boolean;
}
export const PinListResponseData: Schema.Schema<PinListResponseData, PinListResponseDataEncoded, never> = Schema.Struct({
  pinned: Schema.Boolean,
});

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
export interface PlaceEncoded {
  readonly contained_within?: PlaceContainedWithinEncoded;
  readonly country?: string;
  readonly country_code?: string;
  readonly full_name?: string;
  readonly geo?: PlaceGeoEncoded;
  readonly id?: string;
  readonly name?: string;
  readonly place_type?: string;
}
export const Place: Schema.Schema<Place, PlaceEncoded, never> = Schema.Struct({
  contained_within: Schema.optional(Schema.suspend(() => PlaceContainedWithin)),
  country: Schema.optional(Schema.String),
  country_code: Schema.optional(Schema.String),
  full_name: Schema.optional(Schema.String),
  geo: Schema.optional(Schema.suspend(() => PlaceGeo)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  place_type: Schema.optional(Schema.String),
});

export type PlaceContainedWithin = ReadonlyArray<string>;
export type PlaceContainedWithinEncoded = ReadonlyArray<string>;
export const PlaceContainedWithin: Schema.Schema<PlaceContainedWithin, PlaceContainedWithinEncoded, never> = Schema.Array(Schema.String);

/** The geographic location of this place, expressed as a GeoJSON Feature. */
export interface PlaceGeo {
  readonly bbox: ReadonlyArray<number>;
  readonly properties: unknown;
  readonly type: "Feature";
}
export interface PlaceGeoEncoded {
  readonly bbox: ReadonlyArray<number>;
  readonly properties: unknown;
  readonly type: "Feature";
}
export const PlaceGeo: Schema.Schema<PlaceGeo, PlaceGeoEncoded, never> = Schema.Struct({
  bbox: Schema.Array(Schema.Number),
  properties: Schema.Unknown,
  type: Schema.Union(Schema.Union(Schema.Literal("Feature"))),
});

export interface Poll {
  readonly duration_minutes?: number;
  readonly end_datetime?: string;
  readonly id?: string;
  readonly options?: PollOptions;
  readonly voting_status?: string;
}
export interface PollEncoded {
  readonly duration_minutes?: number;
  readonly end_datetime?: string;
  readonly id?: string;
  readonly options?: PollOptionsEncoded;
  readonly voting_status?: string;
}
export const Poll: Schema.Schema<Poll, PollEncoded, never> = Schema.Struct({
  duration_minutes: Schema.optional(Schema.Int),
  end_datetime: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  options: Schema.optional(Schema.suspend(() => PollOptions)),
  voting_status: Schema.optional(Schema.String),
});

export type PollOptions = ReadonlyArray<unknown>;
export type PollOptionsEncoded = ReadonlyArray<unknown>;
export const PollOptions: Schema.Schema<PollOptions, PollOptionsEncoded, never> = Schema.Array(Schema.Unknown);

export interface Post {
  readonly article?: unknown;
  readonly article_title?: unknown;
  readonly attachments?: PostAttachments;
  readonly author_id?: string;
  readonly card_uri?: string;
  readonly community_id?: string;
  readonly context_annotations?: PostContextAnnotations;
  readonly conversation_id?: string;
  readonly created_at?: Date;
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
export interface PostEncoded {
  readonly article?: unknown;
  readonly article_title?: unknown;
  readonly attachments?: PostAttachmentsEncoded;
  readonly author_id?: string;
  readonly card_uri?: string;
  readonly community_id?: string;
  readonly context_annotations?: PostContextAnnotationsEncoded;
  readonly conversation_id?: string;
  readonly created_at?: string;
  readonly display_text_range?: PostDisplayTextRangeEncoded;
  readonly edit_controls?: PostEditControlsEncoded;
  readonly edit_history_post_ids?: ReadonlyArray<string>;
  readonly entities?: PostEntitiesEncoded;
  readonly geo?: PostGeoEncoded;
  readonly id?: string;
  readonly in_reply_to_user_id?: string;
  readonly lang?: string;
  readonly matched_media_notes?: PostMatchedMediaNotesEncoded;
  readonly media_metadata?: PostMediaMetadataEncoded;
  readonly non_public_metrics?: unknown;
  readonly note_post?: PostNotePostEncoded;
  readonly note_request_suggestions?: PostNoteRequestSuggestionsEncoded;
  readonly organic_metrics?: unknown;
  readonly paid_partnership?: boolean;
  readonly possibly_sensitive?: boolean;
  readonly promoted_metrics?: unknown;
  readonly public_metrics?: PostPublicMetricsEncoded;
  readonly referenced_posts?: PostReferencedPostsEncoded;
  readonly reply_settings?: string;
  readonly scopes?: PostScopesEncoded;
  readonly source?: string;
  readonly suggested_source_links?: PostSuggestedSourceLinksEncoded;
  readonly suggested_source_links_with_counts?: PostSuggestedSourceLinksWithCountsEncoded;
  readonly text?: string;
  readonly username?: string;
  readonly withheld?: PostWithheldEncoded;
}
export const Post: Schema.Schema<Post, PostEncoded, never> = Schema.Struct({
  article: Schema.optional(Schema.Unknown),
  article_title: Schema.optional(Schema.Unknown),
  attachments: Schema.optional(Schema.suspend(() => PostAttachments)),
  author_id: Schema.optional(Schema.String),
  card_uri: Schema.optional(Schema.String),
  community_id: Schema.optional(Schema.String),
  context_annotations: Schema.optional(Schema.suspend(() => PostContextAnnotations)),
  conversation_id: Schema.optional(Schema.String),
  created_at: Schema.optional(Schema.DateFromString),
  display_text_range: Schema.optional(Schema.suspend(() => PostDisplayTextRange)),
  edit_controls: Schema.optional(Schema.suspend(() => PostEditControls)),
  edit_history_post_ids: Schema.optional(Schema.Array(Schema.String)),
  entities: Schema.optional(Schema.suspend(() => PostEntities)),
  geo: Schema.optional(Schema.suspend(() => PostGeo)),
  id: Schema.optional(Schema.String),
  in_reply_to_user_id: Schema.optional(Schema.String),
  lang: Schema.optional(Schema.String),
  matched_media_notes: Schema.optional(Schema.suspend(() => PostMatchedMediaNotes)),
  media_metadata: Schema.optional(Schema.suspend(() => PostMediaMetadata)),
  non_public_metrics: Schema.optional(Schema.Unknown),
  note_post: Schema.optional(Schema.suspend(() => PostNotePost)),
  note_request_suggestions: Schema.optional(Schema.suspend(() => PostNoteRequestSuggestions)),
  organic_metrics: Schema.optional(Schema.Unknown),
  paid_partnership: Schema.optional(Schema.Boolean),
  possibly_sensitive: Schema.optional(Schema.Boolean),
  promoted_metrics: Schema.optional(Schema.Unknown),
  public_metrics: Schema.optional(Schema.suspend(() => PostPublicMetrics)),
  referenced_posts: Schema.optional(Schema.suspend(() => PostReferencedPosts)),
  reply_settings: Schema.optional(Schema.String),
  scopes: Schema.optional(Schema.suspend(() => PostScopes)),
  source: Schema.optional(Schema.String),
  suggested_source_links: Schema.optional(Schema.suspend(() => PostSuggestedSourceLinks)),
  suggested_source_links_with_counts: Schema.optional(Schema.suspend(() => PostSuggestedSourceLinksWithCounts)),
  text: Schema.optional(Schema.String),
  username: Schema.optional(Schema.String),
  withheld: Schema.optional(Schema.suspend(() => PostWithheld)),
});

/** Specifies the type of attachments (if any) present in this Post. */
export interface PostAttachments {
  readonly media_keys?: ReadonlyArray<string> | null;
  readonly media_source_tweet_id?: ReadonlyArray<string> | null;
  readonly poll_ids?: ReadonlyArray<string> | null;
}
export interface PostAttachmentsEncoded {
  readonly media_keys?: ReadonlyArray<string> | null;
  readonly media_source_tweet_id?: ReadonlyArray<string> | null;
  readonly poll_ids?: ReadonlyArray<string> | null;
}
export const PostAttachments: Schema.Schema<PostAttachments, PostAttachmentsEncoded, never> = Schema.Struct({
  media_keys: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
  media_source_tweet_id: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
  poll_ids: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
});

export type PostComplianceData = PostDeleteComplianceSchema | PostWithheldComplianceSchema | PostDropComplianceSchema | PostUndropComplianceSchema | PostEditComplianceSchema;
export type PostComplianceDataEncoded = PostDeleteComplianceSchemaEncoded | PostWithheldComplianceSchemaEncoded | PostDropComplianceSchemaEncoded | PostUndropComplianceSchemaEncoded | PostEditComplianceSchemaEncoded;
export const PostComplianceData: Schema.Schema<PostComplianceData, PostComplianceDataEncoded, never> = Schema.Union(Schema.suspend(() => PostDeleteComplianceSchema), Schema.suspend(() => PostWithheldComplianceSchema), Schema.suspend(() => PostDropComplianceSchema), Schema.suspend(() => PostUndropComplianceSchema), Schema.suspend(() => PostEditComplianceSchema));

export interface PostComplianceSchema {
  readonly event_at: Date;
  readonly quote_tweet_id?: PostId;
  readonly tweet: unknown;
}
export interface PostComplianceSchemaEncoded {
  readonly event_at: string;
  readonly quote_tweet_id?: PostIdEncoded;
  readonly tweet: unknown;
}
export const PostComplianceSchema: Schema.Schema<PostComplianceSchema, PostComplianceSchemaEncoded, never> = Schema.Struct({
  event_at: Schema.DateFromString,
  quote_tweet_id: Schema.optional(Schema.suspend(() => PostId)),
  tweet: Schema.Unknown,
});

export type PostContextAnnotations = ReadonlyArray<unknown>;
export type PostContextAnnotationsEncoded = ReadonlyArray<unknown>;
export const PostContextAnnotations: Schema.Schema<PostContextAnnotations, PostContextAnnotationsEncoded, never> = Schema.Array(Schema.Unknown);

/** The identity of a deleted Post. */
export interface PostDeleteActivityResponsePayload {
  readonly author_id: UserId;
  readonly id: PostId;
}
export interface PostDeleteActivityResponsePayloadEncoded {
  readonly author_id: UserIdEncoded;
  readonly id: PostIdEncoded;
}
export const PostDeleteActivityResponsePayload: Schema.Schema<PostDeleteActivityResponsePayload, PostDeleteActivityResponsePayloadEncoded, never> = Schema.Struct({
  author_id: Schema.suspend(() => UserId),
  id: Schema.suspend(() => PostId),
});

export interface PostDeleteComplianceSchema {
  readonly delete: PostComplianceSchema;
}
export interface PostDeleteComplianceSchemaEncoded {
  readonly delete: PostComplianceSchemaEncoded;
}
export const PostDeleteComplianceSchema: Schema.Schema<PostDeleteComplianceSchema, PostDeleteComplianceSchemaEncoded, never> = Schema.Struct({
  delete: Schema.suspend(() => PostComplianceSchema),
});

export type PostDisplayTextRange = ReadonlyArray<number>;
export type PostDisplayTextRangeEncoded = ReadonlyArray<number>;
export const PostDisplayTextRange: Schema.Schema<PostDisplayTextRange, PostDisplayTextRangeEncoded, never> = Schema.Array(Schema.Int);

export interface PostDropComplianceSchema {
  readonly drop: PostComplianceSchema;
}
export interface PostDropComplianceSchemaEncoded {
  readonly drop: PostComplianceSchemaEncoded;
}
export const PostDropComplianceSchema: Schema.Schema<PostDropComplianceSchema, PostDropComplianceSchemaEncoded, never> = Schema.Struct({
  drop: Schema.suspend(() => PostComplianceSchema),
});

export interface PostEditComplianceObjectSchema {
  readonly edit_tweet_ids: ReadonlyArray<PostId>;
  readonly event_at: Date;
  readonly initial_tweet_id: PostId;
  readonly tweet: unknown;
}
export interface PostEditComplianceObjectSchemaEncoded {
  readonly edit_tweet_ids: ReadonlyArray<PostIdEncoded>;
  readonly event_at: string;
  readonly initial_tweet_id: PostIdEncoded;
  readonly tweet: unknown;
}
export const PostEditComplianceObjectSchema: Schema.Schema<PostEditComplianceObjectSchema, PostEditComplianceObjectSchemaEncoded, never> = Schema.Struct({
  edit_tweet_ids: Schema.Array(Schema.suspend(() => PostId)),
  event_at: Schema.DateFromString,
  initial_tweet_id: Schema.suspend(() => PostId),
  tweet: Schema.Unknown,
});

export interface PostEditComplianceSchema {
  readonly tweet_edit: PostEditComplianceObjectSchema;
}
export interface PostEditComplianceSchemaEncoded {
  readonly tweet_edit: PostEditComplianceObjectSchemaEncoded;
}
export const PostEditComplianceSchema: Schema.Schema<PostEditComplianceSchema, PostEditComplianceSchemaEncoded, never> = Schema.Struct({
  tweet_edit: Schema.suspend(() => PostEditComplianceObjectSchema),
});

/** Indicates how much longer (if at all) this Post can be edited. */
export interface PostEditControls {
  readonly editable_until?: string | null;
  readonly edits_remaining?: number | null;
  readonly is_edit_eligible?: boolean | null;
}
export interface PostEditControlsEncoded {
  readonly editable_until?: string | null;
  readonly edits_remaining?: number | null;
  readonly is_edit_eligible?: boolean | null;
}
export const PostEditControls: Schema.Schema<PostEditControls, PostEditControlsEncoded, never> = Schema.Struct({
  editable_until: Schema.optional(Schema.NullOr(Schema.String)),
  edits_remaining: Schema.optional(Schema.NullOr(Schema.Int)),
  is_edit_eligible: Schema.optional(Schema.NullOr(Schema.Boolean)),
});

/** A list of metadata entities (hashtags, mentions, URLs) found in the Post text. */
export interface PostEntities {
  readonly cashtags?: ReadonlyArray<unknown> | null;
  readonly hashtags?: ReadonlyArray<unknown> | null;
  readonly mentions?: ReadonlyArray<unknown> | null;
  readonly urls?: ReadonlyArray<unknown> | null;
}
export interface PostEntitiesEncoded {
  readonly cashtags?: ReadonlyArray<unknown> | null;
  readonly hashtags?: ReadonlyArray<unknown> | null;
  readonly mentions?: ReadonlyArray<unknown> | null;
  readonly urls?: ReadonlyArray<unknown> | null;
}
export const PostEntities: Schema.Schema<PostEntities, PostEntitiesEncoded, never> = Schema.Struct({
  cashtags: Schema.optional(Schema.NullOr(Schema.Array(Schema.Unknown))),
  hashtags: Schema.optional(Schema.NullOr(Schema.Array(Schema.Unknown))),
  mentions: Schema.optional(Schema.NullOr(Schema.Array(Schema.Unknown))),
  urls: Schema.optional(Schema.NullOr(Schema.Array(Schema.Unknown))),
});

/** The location tagged on the Post, if the user provided one. */
export interface PostGeo {
  readonly coordinates?: unknown | null;
  readonly place_id?: string | null;
}
export interface PostGeoEncoded {
  readonly coordinates?: unknown | null;
  readonly place_id?: string | null;
}
export const PostGeo: Schema.Schema<PostGeo, PostGeoEncoded, never> = Schema.Struct({
  coordinates: Schema.optional(Schema.NullOr(Schema.Unknown)),
  place_id: Schema.optional(Schema.NullOr(Schema.String)),
});

export type PostId = string;
export type PostIdEncoded = string;
export const PostId: Schema.Schema<PostId, PostIdEncoded, never> = Schema.String;

export type PostLabelData = PostNoticeSchema | PostUnviewableSchema;
export type PostLabelDataEncoded = PostNoticeSchemaEncoded | PostUnviewableSchemaEncoded;
export const PostLabelData: Schema.Schema<PostLabelData, PostLabelDataEncoded, never> = Schema.Union(Schema.suspend(() => PostNoticeSchema), Schema.suspend(() => PostUnviewableSchema));

export type PostMatchedMediaNotes = ReadonlyArray<unknown>;
export type PostMatchedMediaNotesEncoded = ReadonlyArray<unknown>;
export const PostMatchedMediaNotes: Schema.Schema<PostMatchedMediaNotes, PostMatchedMediaNotesEncoded, never> = Schema.Array(Schema.Unknown);

export type PostMediaMetadata = ReadonlyArray<unknown>;
export type PostMediaMetadataEncoded = ReadonlyArray<unknown>;
export const PostMediaMetadata: Schema.Schema<PostMediaMetadata, PostMediaMetadataEncoded, never> = Schema.Array(Schema.Unknown);

/** The full content of the Post, including text beyond 280 characters. */
export interface PostNotePost {
  readonly entities?: unknown | null;
  readonly text: string;
}
export interface PostNotePostEncoded {
  readonly entities?: unknown | null;
  readonly text: string;
}
export const PostNotePost: Schema.Schema<PostNotePost, PostNotePostEncoded, never> = Schema.Struct({
  entities: Schema.optional(Schema.NullOr(Schema.Unknown)),
  text: Schema.String,
});

export type PostNoteRequestSuggestions = ReadonlyArray<unknown>;
export type PostNoteRequestSuggestionsEncoded = ReadonlyArray<unknown>;
export const PostNoteRequestSuggestions: Schema.Schema<PostNoteRequestSuggestions, PostNoteRequestSuggestionsEncoded, never> = Schema.Array(Schema.Unknown);

export interface PostNotice {
  readonly application: string;
  readonly details?: string;
  readonly event_at: Date;
  readonly event_type: string;
  readonly extended_details_url?: string;
  readonly label_title?: string;
  readonly tweet: unknown;
}
export interface PostNoticeEncoded {
  readonly application: string;
  readonly details?: string;
  readonly event_at: string;
  readonly event_type: string;
  readonly extended_details_url?: string;
  readonly label_title?: string;
  readonly tweet: unknown;
}
export const PostNotice: Schema.Schema<PostNotice, PostNoticeEncoded, never> = Schema.Struct({
  application: Schema.String,
  details: Schema.optional(Schema.String),
  event_at: Schema.DateFromString,
  event_type: Schema.String,
  extended_details_url: Schema.optional(Schema.String),
  label_title: Schema.optional(Schema.String),
  tweet: Schema.Unknown,
});

export interface PostNoticeSchema {
  readonly public_tweet_notice: PostNotice;
}
export interface PostNoticeSchemaEncoded {
  readonly public_tweet_notice: PostNoticeEncoded;
}
export const PostNoticeSchema: Schema.Schema<PostNoticeSchema, PostNoticeSchemaEncoded, never> = Schema.Struct({
  public_tweet_notice: Schema.suspend(() => PostNotice),
});

/** Engagement metrics for the Post at the time of the request. */
export interface PostPublicMetrics {
  readonly bookmark_count: number;
  readonly impression_count: number;
  readonly like_count: number;
  readonly quote_count: number;
  readonly reply_count: number;
  readonly repost_count: number;
}
export interface PostPublicMetricsEncoded {
  readonly bookmark_count: number;
  readonly impression_count: number;
  readonly like_count: number;
  readonly quote_count: number;
  readonly reply_count: number;
  readonly repost_count: number;
}
export const PostPublicMetrics: Schema.Schema<PostPublicMetrics, PostPublicMetricsEncoded, never> = Schema.Struct({
  bookmark_count: Schema.Int,
  impression_count: Schema.Int,
  like_count: Schema.Int,
  quote_count: Schema.Int,
  reply_count: Schema.Int,
  repost_count: Schema.Int,
});

export type PostReferencedPosts = ReadonlyArray<unknown>;
export type PostReferencedPostsEncoded = ReadonlyArray<unknown>;
export const PostReferencedPosts: Schema.Schema<PostReferencedPosts, PostReferencedPostsEncoded, never> = Schema.Array(Schema.Unknown);

/** The scopes for this Post. */
export interface PostScopes {
  readonly followers: boolean;
}
export interface PostScopesEncoded {
  readonly followers: boolean;
}
export const PostScopes: Schema.Schema<PostScopes, PostScopesEncoded, never> = Schema.Struct({
  followers: Schema.Boolean,
});

export type PostSuggestedSourceLinks = ReadonlyArray<string>;
export type PostSuggestedSourceLinksEncoded = ReadonlyArray<string>;
export const PostSuggestedSourceLinks: Schema.Schema<PostSuggestedSourceLinks, PostSuggestedSourceLinksEncoded, never> = Schema.Array(Schema.String);

export type PostSuggestedSourceLinksWithCounts = ReadonlyArray<unknown>;
export type PostSuggestedSourceLinksWithCountsEncoded = ReadonlyArray<unknown>;
export const PostSuggestedSourceLinksWithCounts: Schema.Schema<PostSuggestedSourceLinksWithCounts, PostSuggestedSourceLinksWithCountsEncoded, never> = Schema.Array(Schema.Unknown);

export interface PostTakedownComplianceSchema {
  readonly event_at: Date;
  readonly quote_tweet_id?: PostId;
  readonly tweet: unknown;
  readonly withheld_in_countries: ReadonlyArray<CountryCode>;
}
export interface PostTakedownComplianceSchemaEncoded {
  readonly event_at: string;
  readonly quote_tweet_id?: PostIdEncoded;
  readonly tweet: unknown;
  readonly withheld_in_countries: ReadonlyArray<CountryCodeEncoded>;
}
export const PostTakedownComplianceSchema: Schema.Schema<PostTakedownComplianceSchema, PostTakedownComplianceSchemaEncoded, never> = Schema.Struct({
  event_at: Schema.DateFromString,
  quote_tweet_id: Schema.optional(Schema.suspend(() => PostId)),
  tweet: Schema.Unknown,
  withheld_in_countries: Schema.Array(Schema.suspend(() => CountryCode)),
});

export interface PostUndropComplianceSchema {
  readonly undrop: PostComplianceSchema;
}
export interface PostUndropComplianceSchemaEncoded {
  readonly undrop: PostComplianceSchemaEncoded;
}
export const PostUndropComplianceSchema: Schema.Schema<PostUndropComplianceSchema, PostUndropComplianceSchemaEncoded, never> = Schema.Struct({
  undrop: Schema.suspend(() => PostComplianceSchema),
});

export interface PostUnviewable {
  readonly application: string;
  readonly event_at: Date;
  readonly tweet: unknown;
}
export interface PostUnviewableEncoded {
  readonly application: string;
  readonly event_at: string;
  readonly tweet: unknown;
}
export const PostUnviewable: Schema.Schema<PostUnviewable, PostUnviewableEncoded, never> = Schema.Struct({
  application: Schema.String,
  event_at: Schema.DateFromString,
  tweet: Schema.Unknown,
});

export interface PostUnviewableSchema {
  readonly public_tweet_unviewable: PostUnviewable;
}
export interface PostUnviewableSchemaEncoded {
  readonly public_tweet_unviewable: PostUnviewableEncoded;
}
export const PostUnviewableSchema: Schema.Schema<PostUnviewableSchema, PostUnviewableSchemaEncoded, never> = Schema.Struct({
  public_tweet_unviewable: Schema.suspend(() => PostUnviewable),
});

/** Withholding details for withheld content. */
export interface PostWithheld {
  readonly copyright: boolean;
  readonly country_codes: ReadonlyArray<string>;
  readonly scope?: "post" | "user" | null;
}
export interface PostWithheldEncoded {
  readonly copyright: boolean;
  readonly country_codes: ReadonlyArray<string>;
  readonly scope?: "post" | "user" | null;
}
export const PostWithheld: Schema.Schema<PostWithheld, PostWithheldEncoded, never> = Schema.Struct({
  copyright: Schema.Boolean,
  country_codes: Schema.Array(Schema.String),
  scope: Schema.optional(Schema.NullOr(Schema.Union(Schema.Literal("post"), Schema.Literal("user")))),
});

export interface PostWithheldComplianceSchema {
  readonly withheld: PostTakedownComplianceSchema;
}
export interface PostWithheldComplianceSchemaEncoded {
  readonly withheld: PostTakedownComplianceSchemaEncoded;
}
export const PostWithheldComplianceSchema: Schema.Schema<PostWithheldComplianceSchema, PostWithheldComplianceSchemaEncoded, never> = Schema.Struct({
  withheld: Schema.suspend(() => PostTakedownComplianceSchema),
});

export type Problem = ResourceNotFoundProblem | InvalidRequestProblem | NotAuthorizedForResourceProblem | NotAuthorizedForFieldProblem | FieldUnauthorizedProblem | FieldHydrationFailureProblem | ResourceUnavailableProblem | DisallowedResourceProblem | InternalErrorProblem;
export type ProblemEncoded = ResourceNotFoundProblemEncoded | InvalidRequestProblemEncoded | NotAuthorizedForResourceProblemEncoded | NotAuthorizedForFieldProblemEncoded | FieldUnauthorizedProblemEncoded | FieldHydrationFailureProblemEncoded | ResourceUnavailableProblemEncoded | DisallowedResourceProblemEncoded | InternalErrorProblemEncoded;
export const Problem: Schema.Schema<Problem, ProblemEncoded, never> = Schema.Union(Schema.suspend(() => ResourceNotFoundProblem), Schema.suspend(() => InvalidRequestProblem), Schema.suspend(() => NotAuthorizedForResourceProblem), Schema.suspend(() => NotAuthorizedForFieldProblem), Schema.suspend(() => FieldUnauthorizedProblem), Schema.suspend(() => FieldHydrationFailureProblem), Schema.suspend(() => ResourceUnavailableProblem), Schema.suspend(() => DisallowedResourceProblem), Schema.suspend(() => InternalErrorProblem));

export interface ProfileUpdateActivityResponsePayload {
  readonly after?: string;
  readonly before?: string;
}
export interface ProfileUpdateActivityResponsePayloadEncoded {
  readonly after?: string;
  readonly before?: string;
}
export const ProfileUpdateActivityResponsePayload: Schema.Schema<ProfileUpdateActivityResponsePayload, ProfileUpdateActivityResponsePayloadEncoded, never> = Schema.Struct({
  after: Schema.optional(Schema.String),
  before: Schema.optional(Schema.String),
});

export interface PublicKey {
  readonly identity_public_key_signature?: string;
  readonly juicebox_config?: unknown;
  readonly public_key?: string;
  readonly public_key_version?: string;
  readonly signing_public_key?: string;
}
export interface PublicKeyEncoded {
  readonly identity_public_key_signature?: string;
  readonly juicebox_config?: unknown;
  readonly public_key?: string;
  readonly public_key_version?: string;
  readonly signing_public_key?: string;
}
export const PublicKey: Schema.Schema<PublicKey, PublicKeyEncoded, never> = Schema.Struct({
  identity_public_key_signature: Schema.optional(Schema.String),
  juicebox_config: Schema.optional(Schema.Unknown),
  public_key: Schema.optional(Schema.String),
  public_key_version: Schema.optional(Schema.String),
  signing_public_key: Schema.optional(Schema.String),
});

export type PublicKeyId = string;
export type PublicKeyIdEncoded = string;
export const PublicKeyId: Schema.Schema<PublicKeyId, PublicKeyIdEncoded, never> = Schema.String;

export interface RemoveListsMemberByUserIdResponse {
  readonly data?: RemoveListsMemberByUserIdResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface RemoveListsMemberByUserIdResponseEncoded {
  readonly data?: RemoveListsMemberByUserIdResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const RemoveListsMemberByUserIdResponse: Schema.Schema<RemoveListsMemberByUserIdResponse, RemoveListsMemberByUserIdResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => RemoveListsMemberByUserIdResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface RemoveListsMemberByUserIdResponseData {
  readonly is_member: boolean;
}
export interface RemoveListsMemberByUserIdResponseDataEncoded {
  readonly is_member: boolean;
}
export const RemoveListsMemberByUserIdResponseData: Schema.Schema<RemoveListsMemberByUserIdResponseData, RemoveListsMemberByUserIdResponseDataEncoded, never> = Schema.Struct({
  is_member: Schema.Boolean,
});

export interface RepostPostRequest {
  readonly tweet_id: string;
}
export interface RepostPostRequestEncoded {
  readonly tweet_id: string;
}
export const RepostPostRequest: Schema.Schema<RepostPostRequest, RepostPostRequestEncoded, never> = Schema.Struct({
  tweet_id: Schema.String,
});

export interface RepostPostResponse {
  readonly data?: RepostPostResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface RepostPostResponseEncoded {
  readonly data?: RepostPostResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const RepostPostResponse: Schema.Schema<RepostPostResponse, RepostPostResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => RepostPostResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface RepostPostResponseData {
  readonly rest_id: string;
  readonly retweeted: boolean;
}
export interface RepostPostResponseDataEncoded {
  readonly rest_id: string;
  readonly retweeted: boolean;
}
export const RepostPostResponseData: Schema.Schema<RepostPostResponseData, RepostPostResponseDataEncoded, never> = Schema.Struct({
  rest_id: Schema.String,
  retweeted: Schema.Boolean,
});

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
export interface ResourceNotFoundProblemEncoded {
  readonly detail: string;
  readonly parameter?: string;
  readonly resource_id?: string;
  readonly resource_type: string;
  readonly status?: number;
  readonly title: string;
  readonly type: "https://api.x.com/2/problems/resource-not-found";
  readonly value?: string;
}
export const ResourceNotFoundProblem: Schema.Schema<ResourceNotFoundProblem, ResourceNotFoundProblemEncoded, never> = Schema.Struct({
  detail: Schema.String,
  parameter: Schema.optional(Schema.String),
  resource_id: Schema.optional(Schema.String),
  resource_type: Schema.String,
  status: Schema.optional(Schema.Int),
  title: Schema.String,
  type: Schema.Union(Schema.Literal("https://api.x.com/2/problems/resource-not-found")),
  value: Schema.optional(Schema.String),
});

export interface ResourceUnavailableProblem {
  readonly detail: string;
  readonly resource_id?: string;
  readonly resource_type: string;
  readonly status?: number;
  readonly title: string;
  readonly type: "https://api.x.com/2/problems/resource-unavailable";
}
export interface ResourceUnavailableProblemEncoded {
  readonly detail: string;
  readonly resource_id?: string;
  readonly resource_type: string;
  readonly status?: number;
  readonly title: string;
  readonly type: "https://api.x.com/2/problems/resource-unavailable";
}
export const ResourceUnavailableProblem: Schema.Schema<ResourceUnavailableProblem, ResourceUnavailableProblemEncoded, never> = Schema.Struct({
  detail: Schema.String,
  resource_id: Schema.optional(Schema.String),
  resource_type: Schema.String,
  status: Schema.optional(Schema.Int),
  title: Schema.String,
  type: Schema.Union(Schema.Literal("https://api.x.com/2/problems/resource-unavailable")),
});

export type RuleId = string;
export type RuleIdEncoded = string;
export const RuleId: Schema.Schema<RuleId, RuleIdEncoded, never> = Schema.String;

export interface RulesCount {
  readonly all_project_client_apps?: RulesCountAllProjectClientApps;
  readonly cap_per_client_app?: string;
  readonly cap_per_project?: string;
  readonly client_app_rules_count?: RulesCountClientAppRulesCount;
  readonly project_rules_count?: string;
}
export interface RulesCountEncoded {
  readonly all_project_client_apps?: RulesCountAllProjectClientAppsEncoded;
  readonly cap_per_client_app?: string;
  readonly cap_per_project?: string;
  readonly client_app_rules_count?: RulesCountClientAppRulesCountEncoded;
  readonly project_rules_count?: string;
}
export const RulesCount: Schema.Schema<RulesCount, RulesCountEncoded, never> = Schema.Struct({
  all_project_client_apps: Schema.optional(Schema.suspend(() => RulesCountAllProjectClientApps)),
  cap_per_client_app: Schema.optional(Schema.String),
  cap_per_project: Schema.optional(Schema.String),
  client_app_rules_count: Schema.optional(Schema.suspend(() => RulesCountClientAppRulesCount)),
  project_rules_count: Schema.optional(Schema.String),
});

export type RulesCountAllProjectClientApps = ReadonlyArray<unknown>;
export type RulesCountAllProjectClientAppsEncoded = ReadonlyArray<unknown>;
export const RulesCountAllProjectClientApps: Schema.Schema<RulesCountAllProjectClientApps, RulesCountAllProjectClientAppsEncoded, never> = Schema.Array(Schema.Unknown);

/** A count of filtered-stream rules for a single client application. */
export interface RulesCountClientAppRulesCount {
  readonly client_app_id?: string | null;
  readonly rule_count: number;
}
export interface RulesCountClientAppRulesCountEncoded {
  readonly client_app_id?: string | null;
  readonly rule_count: number;
}
export const RulesCountClientAppRulesCount: Schema.Schema<RulesCountClientAppRulesCount, RulesCountClientAppRulesCountEncoded, never> = Schema.Struct({
  client_app_id: Schema.optional(Schema.NullOr(Schema.String)),
  rule_count: Schema.Int,
});

export type RuleTag = string;
export type RuleTagEncoded = string;
export const RuleTag: Schema.Schema<RuleTag, RuleTagEncoded, never> = Schema.String;

export interface SearchCommunitiesResponse {
  readonly data?: ReadonlyArray<Community>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly meta?: unknown;
}
export interface SearchCommunitiesResponseEncoded {
  readonly data?: ReadonlyArray<CommunityEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly meta?: unknown;
}
export const SearchCommunitiesResponse: Schema.Schema<SearchCommunitiesResponse, SearchCommunitiesResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => Community))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  meta: Schema.optional(Schema.Unknown),
});

export interface SearchCommunityNotesWrittenResponse {
  readonly data?: ReadonlyArray<Note>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly meta?: unknown;
}
export interface SearchCommunityNotesWrittenResponseEncoded {
  readonly data?: ReadonlyArray<NoteEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly meta?: unknown;
}
export const SearchCommunityNotesWrittenResponse: Schema.Schema<SearchCommunityNotesWrittenResponse, SearchCommunityNotesWrittenResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => Note))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  meta: Schema.optional(Schema.Unknown),
});

export interface SearchEligiblePostsResponse {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}
export interface SearchEligiblePostsResponseEncoded {
  readonly data?: ReadonlyArray<PostEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
  readonly meta?: unknown;
}
export const SearchEligiblePostsResponse: Schema.Schema<SearchEligiblePostsResponse, SearchEligiblePostsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => Post))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
  meta: Schema.optional(Schema.Unknown),
});

export interface SearchNewsResponse {
  readonly data?: ReadonlyArray<News>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly meta?: unknown;
}
export interface SearchNewsResponseEncoded {
  readonly data?: ReadonlyArray<NewsEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly meta?: unknown;
}
export const SearchNewsResponse: Schema.Schema<SearchNewsResponse, SearchNewsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => News))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  meta: Schema.optional(Schema.Unknown),
});

export interface SearchPostsAllResponse {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}
export interface SearchPostsAllResponseEncoded {
  readonly data?: ReadonlyArray<PostEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
  readonly meta?: unknown;
}
export const SearchPostsAllResponse: Schema.Schema<SearchPostsAllResponse, SearchPostsAllResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => Post))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
  meta: Schema.optional(Schema.Unknown),
});

export interface SearchPostsRecentResponse {
  readonly data?: ReadonlyArray<Post>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}
export interface SearchPostsRecentResponseEncoded {
  readonly data?: ReadonlyArray<PostEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
  readonly meta?: unknown;
}
export const SearchPostsRecentResponse: Schema.Schema<SearchPostsRecentResponse, SearchPostsRecentResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => Post))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
  meta: Schema.optional(Schema.Unknown),
});

export interface SearchSpacesResponse {
  readonly data?: ReadonlyArray<Space>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}
export interface SearchSpacesResponseEncoded {
  readonly data?: ReadonlyArray<SpaceEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
  readonly meta?: unknown;
}
export const SearchSpacesResponse: Schema.Schema<SearchSpacesResponse, SearchSpacesResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => Space))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
  meta: Schema.optional(Schema.Unknown),
});

export interface SearchUsersResponse {
  readonly data?: ReadonlyArray<User>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly meta?: unknown;
}
export interface SearchUsersResponseEncoded {
  readonly data?: ReadonlyArray<UserEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
  readonly meta?: unknown;
}
export const SearchUsersResponse: Schema.Schema<SearchUsersResponse, SearchUsersResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => User))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
  meta: Schema.optional(Schema.Unknown),
});

export interface SendBroadcastChatRequest {
  readonly reply_to?: string;
  readonly text: string;
}
export interface SendBroadcastChatRequestEncoded {
  readonly reply_to?: string;
  readonly text: string;
}
export const SendBroadcastChatRequest: Schema.Schema<SendBroadcastChatRequest, SendBroadcastChatRequestEncoded, never> = Schema.Struct({
  reply_to: Schema.optional(Schema.String),
  text: Schema.String,
});

export interface SendBroadcastChatResponse {
  readonly data?: SendBroadcastChatResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface SendBroadcastChatResponseEncoded {
  readonly data?: SendBroadcastChatResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const SendBroadcastChatResponse: Schema.Schema<SendBroadcastChatResponse, SendBroadcastChatResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => SendBroadcastChatResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface SendBroadcastChatResponseData {
  readonly success: boolean;
  readonly timestamp: string;
}
export interface SendBroadcastChatResponseDataEncoded {
  readonly success: boolean;
  readonly timestamp: string;
}
export const SendBroadcastChatResponseData: Schema.Schema<SendBroadcastChatResponseData, SendBroadcastChatResponseDataEncoded, never> = Schema.Struct({
  success: Schema.Boolean,
  timestamp: Schema.String,
});

export interface SendChatMessageRequest {
  readonly conversation_token?: string;
  readonly encoded_message_create_event: string;
  readonly encoded_message_event_signature?: string;
  readonly message_id: string;
}
export interface SendChatMessageRequestEncoded {
  readonly conversation_token?: string;
  readonly encoded_message_create_event: string;
  readonly encoded_message_event_signature?: string;
  readonly message_id: string;
}
export const SendChatMessageRequest: Schema.Schema<SendChatMessageRequest, SendChatMessageRequestEncoded, never> = Schema.Struct({
  conversation_token: Schema.optional(Schema.String),
  encoded_message_create_event: Schema.String,
  encoded_message_event_signature: Schema.optional(Schema.String),
  message_id: Schema.String,
});

export interface SendChatMessageResponse {
  readonly data?: SendChatMessageResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface SendChatMessageResponseEncoded {
  readonly data?: SendChatMessageResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const SendChatMessageResponse: Schema.Schema<SendChatMessageResponse, SendChatMessageResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => SendChatMessageResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface SendChatMessageResponseData {
  readonly encoded_message_event: string;
}
export interface SendChatMessageResponseDataEncoded {
  readonly encoded_message_event: string;
}
export const SendChatMessageResponseData: Schema.Schema<SendChatMessageResponseData, SendChatMessageResponseDataEncoded, never> = Schema.Struct({
  encoded_message_event: Schema.String,
});

export interface SendChatTypingIndicatorResponse {
  readonly data?: SendChatTypingIndicatorResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface SendChatTypingIndicatorResponseEncoded {
  readonly data?: SendChatTypingIndicatorResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const SendChatTypingIndicatorResponse: Schema.Schema<SendChatTypingIndicatorResponse, SendChatTypingIndicatorResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => SendChatTypingIndicatorResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface SendChatTypingIndicatorResponseData {
  readonly success: boolean;
}
export interface SendChatTypingIndicatorResponseDataEncoded {
  readonly success: boolean;
}
export const SendChatTypingIndicatorResponseData: Schema.Schema<SendChatTypingIndicatorResponseData, SendChatTypingIndicatorResponseDataEncoded, never> = Schema.Struct({
  success: Schema.Boolean,
});

export interface Space {
  readonly created_at?: Date;
  readonly creator_id?: string;
  readonly ended_at?: Date;
  readonly host_ids?: SpaceHostIds;
  readonly id?: string;
  readonly invited_user_ids?: SpaceInvitedUserIds;
  readonly is_ticketed?: boolean;
  readonly lang?: string;
  readonly participant_count?: number;
  readonly scheduled_start?: Date;
  readonly speaker_ids?: SpaceSpeakerIds;
  readonly started_at?: Date;
  readonly state?: string;
  readonly subscriber_count?: number;
  readonly title?: string;
  readonly topic_ids?: SpaceTopicIds;
  readonly updated_at?: Date;
}
export interface SpaceEncoded {
  readonly created_at?: string;
  readonly creator_id?: string;
  readonly ended_at?: string;
  readonly host_ids?: SpaceHostIdsEncoded;
  readonly id?: string;
  readonly invited_user_ids?: SpaceInvitedUserIdsEncoded;
  readonly is_ticketed?: boolean;
  readonly lang?: string;
  readonly participant_count?: number;
  readonly scheduled_start?: string;
  readonly speaker_ids?: SpaceSpeakerIdsEncoded;
  readonly started_at?: string;
  readonly state?: string;
  readonly subscriber_count?: number;
  readonly title?: string;
  readonly topic_ids?: SpaceTopicIdsEncoded;
  readonly updated_at?: string;
}
export const Space: Schema.Schema<Space, SpaceEncoded, never> = Schema.Struct({
  created_at: Schema.optional(Schema.DateFromString),
  creator_id: Schema.optional(Schema.String),
  ended_at: Schema.optional(Schema.DateFromString),
  host_ids: Schema.optional(Schema.suspend(() => SpaceHostIds)),
  id: Schema.optional(Schema.String),
  invited_user_ids: Schema.optional(Schema.suspend(() => SpaceInvitedUserIds)),
  is_ticketed: Schema.optional(Schema.Boolean),
  lang: Schema.optional(Schema.String),
  participant_count: Schema.optional(Schema.Int),
  scheduled_start: Schema.optional(Schema.DateFromString),
  speaker_ids: Schema.optional(Schema.suspend(() => SpaceSpeakerIds)),
  started_at: Schema.optional(Schema.DateFromString),
  state: Schema.optional(Schema.String),
  subscriber_count: Schema.optional(Schema.Int),
  title: Schema.optional(Schema.String),
  topic_ids: Schema.optional(Schema.suspend(() => SpaceTopicIds)),
  updated_at: Schema.optional(Schema.DateFromString),
});

export type SpaceHostIds = ReadonlyArray<string>;
export type SpaceHostIdsEncoded = ReadonlyArray<string>;
export const SpaceHostIds: Schema.Schema<SpaceHostIds, SpaceHostIdsEncoded, never> = Schema.Array(Schema.String);

export type SpaceInvitedUserIds = ReadonlyArray<string>;
export type SpaceInvitedUserIdsEncoded = ReadonlyArray<string>;
export const SpaceInvitedUserIds: Schema.Schema<SpaceInvitedUserIds, SpaceInvitedUserIdsEncoded, never> = Schema.Array(Schema.String);

export type SpaceSpeakerIds = ReadonlyArray<string>;
export type SpaceSpeakerIdsEncoded = ReadonlyArray<string>;
export const SpaceSpeakerIds: Schema.Schema<SpaceSpeakerIds, SpaceSpeakerIdsEncoded, never> = Schema.Array(Schema.String);

export type SpaceTopicIds = ReadonlyArray<string>;
export type SpaceTopicIdsEncoded = ReadonlyArray<string>;
export const SpaceTopicIds: Schema.Schema<SpaceTopicIds, SpaceTopicIdsEncoded, never> = Schema.Array(Schema.String);

export type StreamLabelsComplianceResponse = unknown | unknown;
export type StreamLabelsComplianceResponseEncoded = unknown | unknown;
export const StreamLabelsComplianceResponse: Schema.Schema<StreamLabelsComplianceResponse, StreamLabelsComplianceResponseEncoded, never> = Schema.Union(Schema.Unknown, Schema.Unknown);

export type StreamLikesComplianceResponse = unknown | unknown;
export type StreamLikesComplianceResponseEncoded = unknown | unknown;
export const StreamLikesComplianceResponse: Schema.Schema<StreamLikesComplianceResponse, StreamLikesComplianceResponseEncoded, never> = Schema.Union(Schema.Unknown, Schema.Unknown);

export interface StreamLikesFirehoseResponse {
  readonly data?: LikeWithPostAuthor;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}
export interface StreamLikesFirehoseResponseEncoded {
  readonly data?: LikeWithPostAuthorEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
}
export const StreamLikesFirehoseResponse: Schema.Schema<StreamLikesFirehoseResponse, StreamLikesFirehoseResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => LikeWithPostAuthor)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
});

export interface StreamLikesSample10Response {
  readonly data?: LikeWithPostAuthor;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}
export interface StreamLikesSample10ResponseEncoded {
  readonly data?: LikeWithPostAuthorEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
}
export const StreamLikesSample10Response: Schema.Schema<StreamLikesSample10Response, StreamLikesSample10ResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => LikeWithPostAuthor)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
});

export type StreamPostsComplianceResponse = unknown | unknown;
export type StreamPostsComplianceResponseEncoded = unknown | unknown;
export const StreamPostsComplianceResponse: Schema.Schema<StreamPostsComplianceResponse, StreamPostsComplianceResponseEncoded, never> = Schema.Union(Schema.Unknown, Schema.Unknown);

export interface StreamPostsFirehoseEnResponse {
  readonly data?: Post;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}
export interface StreamPostsFirehoseEnResponseEncoded {
  readonly data?: PostEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
}
export const StreamPostsFirehoseEnResponse: Schema.Schema<StreamPostsFirehoseEnResponse, StreamPostsFirehoseEnResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => Post)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
});

export interface StreamPostsFirehoseJaResponse {
  readonly data?: Post;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}
export interface StreamPostsFirehoseJaResponseEncoded {
  readonly data?: PostEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
}
export const StreamPostsFirehoseJaResponse: Schema.Schema<StreamPostsFirehoseJaResponse, StreamPostsFirehoseJaResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => Post)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
});

export interface StreamPostsFirehoseKoResponse {
  readonly data?: Post;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}
export interface StreamPostsFirehoseKoResponseEncoded {
  readonly data?: PostEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
}
export const StreamPostsFirehoseKoResponse: Schema.Schema<StreamPostsFirehoseKoResponse, StreamPostsFirehoseKoResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => Post)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
});

export interface StreamPostsFirehosePtResponse {
  readonly data?: Post;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}
export interface StreamPostsFirehosePtResponseEncoded {
  readonly data?: PostEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
}
export const StreamPostsFirehosePtResponse: Schema.Schema<StreamPostsFirehosePtResponse, StreamPostsFirehosePtResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => Post)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
});

export interface StreamPostsFirehoseResponse {
  readonly data?: Post;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}
export interface StreamPostsFirehoseResponseEncoded {
  readonly data?: PostEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
}
export const StreamPostsFirehoseResponse: Schema.Schema<StreamPostsFirehoseResponse, StreamPostsFirehoseResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => Post)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
});

/** A Tweet or error that can be returned by the streaming Tweet API. The values returned with a successful streamed Tweet includes the user provided rules that the Tweet matched. */
export interface StreamPostsResponse {
  readonly data?: Post;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
  readonly matching_rules?: ReadonlyArray<unknown>;
}
export interface StreamPostsResponseEncoded {
  readonly data?: PostEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
  readonly matching_rules?: ReadonlyArray<unknown>;
}
export const StreamPostsResponse: Schema.Schema<StreamPostsResponse, StreamPostsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => Post)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
  matching_rules: Schema.optional(Schema.Array(Schema.Unknown)),
});

export interface StreamPostsSample10Response {
  readonly data?: Post;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}
export interface StreamPostsSample10ResponseEncoded {
  readonly data?: PostEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
}
export const StreamPostsSample10Response: Schema.Schema<StreamPostsSample10Response, StreamPostsSample10ResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => Post)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
});

export interface StreamPostsSampleResponse {
  readonly data?: Post;
  readonly errors?: ReadonlyArray<Problem>;
  readonly includes?: Expansions;
}
export interface StreamPostsSampleResponseEncoded {
  readonly data?: PostEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly includes?: ExpansionsEncoded;
}
export const StreamPostsSampleResponse: Schema.Schema<StreamPostsSampleResponse, StreamPostsSampleResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => Post)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  includes: Schema.optional(Schema.suspend(() => Expansions)),
});

export type StreamUsersComplianceResponse = unknown | unknown;
export type StreamUsersComplianceResponseEncoded = unknown | unknown;
export const StreamUsersComplianceResponse: Schema.Schema<StreamUsersComplianceResponse, StreamUsersComplianceResponseEncoded, never> = Schema.Union(Schema.Unknown, Schema.Unknown);

export interface Topic {
  readonly description?: string;
  readonly id?: string;
  readonly name?: string;
}
export interface TopicEncoded {
  readonly description?: string;
  readonly id?: string;
  readonly name?: string;
}
export const Topic: Schema.Schema<Topic, TopicEncoded, never> = Schema.Struct({
  description: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
});

export interface Trend {
  readonly trend_name?: string;
  readonly tweet_count?: number;
}
export interface TrendEncoded {
  readonly trend_name?: string;
  readonly tweet_count?: number;
}
export const Trend: Schema.Schema<Trend, TrendEncoded, never> = Schema.Struct({
  trend_name: Schema.optional(Schema.String),
  tweet_count: Schema.optional(Schema.Int),
});

export interface UnblockUsersDmsResponse {
  readonly data?: UnblockUsersDmsResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface UnblockUsersDmsResponseEncoded {
  readonly data?: UnblockUsersDmsResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const UnblockUsersDmsResponse: Schema.Schema<UnblockUsersDmsResponse, UnblockUsersDmsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => UnblockUsersDmsResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface UnblockUsersDmsResponseData {
  readonly blocked: boolean;
}
export interface UnblockUsersDmsResponseDataEncoded {
  readonly blocked: boolean;
}
export const UnblockUsersDmsResponseData: Schema.Schema<UnblockUsersDmsResponseData, UnblockUsersDmsResponseDataEncoded, never> = Schema.Struct({
  blocked: Schema.Boolean,
});

export interface UnfollowListResponse {
  readonly data?: UnfollowListResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface UnfollowListResponseEncoded {
  readonly data?: UnfollowListResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const UnfollowListResponse: Schema.Schema<UnfollowListResponse, UnfollowListResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => UnfollowListResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface UnfollowListResponseData {
  readonly following: boolean;
}
export interface UnfollowListResponseDataEncoded {
  readonly following: boolean;
}
export const UnfollowListResponseData: Schema.Schema<UnfollowListResponseData, UnfollowListResponseDataEncoded, never> = Schema.Struct({
  following: Schema.Boolean,
});

export interface UnfollowUserResponse {
  readonly data?: UnfollowUserResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface UnfollowUserResponseEncoded {
  readonly data?: UnfollowUserResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const UnfollowUserResponse: Schema.Schema<UnfollowUserResponse, UnfollowUserResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => UnfollowUserResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface UnfollowUserResponseData {
  readonly following: boolean;
}
export interface UnfollowUserResponseDataEncoded {
  readonly following: boolean;
}
export const UnfollowUserResponseData: Schema.Schema<UnfollowUserResponseData, UnfollowUserResponseDataEncoded, never> = Schema.Struct({
  following: Schema.Boolean,
});

export interface UnlikeComplianceSchema {
  readonly event_at: Date;
  readonly favorite: unknown;
}
export interface UnlikeComplianceSchemaEncoded {
  readonly event_at: string;
  readonly favorite: unknown;
}
export const UnlikeComplianceSchema: Schema.Schema<UnlikeComplianceSchema, UnlikeComplianceSchemaEncoded, never> = Schema.Struct({
  event_at: Schema.DateFromString,
  favorite: Schema.Unknown,
});

export interface UnlikePostResponse {
  readonly data?: UnlikePostResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface UnlikePostResponseEncoded {
  readonly data?: UnlikePostResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const UnlikePostResponse: Schema.Schema<UnlikePostResponse, UnlikePostResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => UnlikePostResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface UnlikePostResponseData {
  readonly liked: boolean;
}
export interface UnlikePostResponseDataEncoded {
  readonly liked: boolean;
}
export const UnlikePostResponseData: Schema.Schema<UnlikePostResponseData, UnlikePostResponseDataEncoded, never> = Schema.Struct({
  liked: Schema.Boolean,
});

export interface UnmuteBroadcastChatUserResponse {
  readonly data?: UnmuteBroadcastChatUserResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface UnmuteBroadcastChatUserResponseEncoded {
  readonly data?: UnmuteBroadcastChatUserResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const UnmuteBroadcastChatUserResponse: Schema.Schema<UnmuteBroadcastChatUserResponse, UnmuteBroadcastChatUserResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => UnmuteBroadcastChatUserResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface UnmuteBroadcastChatUserResponseData {
  readonly muted: boolean;
}
export interface UnmuteBroadcastChatUserResponseDataEncoded {
  readonly muted: boolean;
}
export const UnmuteBroadcastChatUserResponseData: Schema.Schema<UnmuteBroadcastChatUserResponseData, UnmuteBroadcastChatUserResponseDataEncoded, never> = Schema.Struct({
  muted: Schema.Boolean,
});

export interface UnmuteUserResponse {
  readonly data?: UnmuteUserResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface UnmuteUserResponseEncoded {
  readonly data?: UnmuteUserResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const UnmuteUserResponse: Schema.Schema<UnmuteUserResponse, UnmuteUserResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => UnmuteUserResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface UnmuteUserResponseData {
  readonly muting: boolean;
}
export interface UnmuteUserResponseDataEncoded {
  readonly muting: boolean;
}
export const UnmuteUserResponseData: Schema.Schema<UnmuteUserResponseData, UnmuteUserResponseDataEncoded, never> = Schema.Struct({
  muting: Schema.Boolean,
});

export interface UnpinListResponse {
  readonly data?: UnpinListResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface UnpinListResponseEncoded {
  readonly data?: UnpinListResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const UnpinListResponse: Schema.Schema<UnpinListResponse, UnpinListResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => UnpinListResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface UnpinListResponseData {
  readonly pinned: boolean;
}
export interface UnpinListResponseDataEncoded {
  readonly pinned: boolean;
}
export const UnpinListResponseData: Schema.Schema<UnpinListResponseData, UnpinListResponseDataEncoded, never> = Schema.Struct({
  pinned: Schema.Boolean,
});

export interface UnrepostPostResponse {
  readonly data?: UnrepostPostResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface UnrepostPostResponseEncoded {
  readonly data?: UnrepostPostResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const UnrepostPostResponse: Schema.Schema<UnrepostPostResponse, UnrepostPostResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => UnrepostPostResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface UnrepostPostResponseData {
  readonly retweeted: boolean;
}
export interface UnrepostPostResponseDataEncoded {
  readonly retweeted: boolean;
}
export const UnrepostPostResponseData: Schema.Schema<UnrepostPostResponseData, UnrepostPostResponseDataEncoded, never> = Schema.Struct({
  retweeted: Schema.Boolean,
});

export interface UpdateActivitySubscriptionRequest {
  readonly tag?: string;
  readonly webhook_id?: string;
}
export interface UpdateActivitySubscriptionRequestEncoded {
  readonly tag?: string;
  readonly webhook_id?: string;
}
export const UpdateActivitySubscriptionRequest: Schema.Schema<UpdateActivitySubscriptionRequest, UpdateActivitySubscriptionRequestEncoded, never> = Schema.Struct({
  tag: Schema.optional(Schema.String),
  webhook_id: Schema.optional(Schema.String),
});

export interface UpdateActivitySubscriptionResponse {
  readonly data?: UpdateActivitySubscriptionResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface UpdateActivitySubscriptionResponseEncoded {
  readonly data?: UpdateActivitySubscriptionResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const UpdateActivitySubscriptionResponse: Schema.Schema<UpdateActivitySubscriptionResponse, UpdateActivitySubscriptionResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => UpdateActivitySubscriptionResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface UpdateActivitySubscriptionResponseData {
  readonly subscription?: UpdateActivitySubscriptionResponseDataSubscription;
  readonly total_subscriptions?: number;
}
export interface UpdateActivitySubscriptionResponseDataEncoded {
  readonly subscription?: UpdateActivitySubscriptionResponseDataSubscriptionEncoded;
  readonly total_subscriptions?: number;
}
export const UpdateActivitySubscriptionResponseData: Schema.Schema<UpdateActivitySubscriptionResponseData, UpdateActivitySubscriptionResponseDataEncoded, never> = Schema.Struct({
  subscription: Schema.optional(Schema.suspend(() => UpdateActivitySubscriptionResponseDataSubscription)),
  total_subscriptions: Schema.optional(Schema.Int),
});

export interface UpdateActivitySubscriptionResponseDataSubscription {
  readonly created_at?: string;
  readonly event_type?: string;
  readonly filter?: UpdateActivitySubscriptionResponseDataSubscriptionFilter;
  readonly subscription_id?: string;
  readonly tag?: string;
  readonly updated_at?: string;
  readonly webhook_id?: string;
}
export interface UpdateActivitySubscriptionResponseDataSubscriptionEncoded {
  readonly created_at?: string;
  readonly event_type?: string;
  readonly filter?: UpdateActivitySubscriptionResponseDataSubscriptionFilterEncoded;
  readonly subscription_id?: string;
  readonly tag?: string;
  readonly updated_at?: string;
  readonly webhook_id?: string;
}
export const UpdateActivitySubscriptionResponseDataSubscription: Schema.Schema<UpdateActivitySubscriptionResponseDataSubscription, UpdateActivitySubscriptionResponseDataSubscriptionEncoded, never> = Schema.Struct({
  created_at: Schema.optional(Schema.String),
  event_type: Schema.optional(Schema.String),
  filter: Schema.optional(Schema.suspend(() => UpdateActivitySubscriptionResponseDataSubscriptionFilter)),
  subscription_id: Schema.optional(Schema.String),
  tag: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
  webhook_id: Schema.optional(Schema.String),
});

export interface UpdateActivitySubscriptionResponseDataSubscriptionFilter {
  readonly direction?: string;
  readonly keyword?: string;
  readonly user_id?: string;
}
export interface UpdateActivitySubscriptionResponseDataSubscriptionFilterEncoded {
  readonly direction?: string;
  readonly keyword?: string;
  readonly user_id?: string;
}
export const UpdateActivitySubscriptionResponseDataSubscriptionFilter: Schema.Schema<UpdateActivitySubscriptionResponseDataSubscriptionFilter, UpdateActivitySubscriptionResponseDataSubscriptionFilterEncoded, never> = Schema.Struct({
  direction: Schema.optional(Schema.String),
  keyword: Schema.optional(Schema.String),
  user_id: Schema.optional(Schema.String),
});

export interface UpdateListsRequest {
  readonly description?: string;
  readonly name?: string;
  readonly private?: boolean;
}
export interface UpdateListsRequestEncoded {
  readonly description?: string;
  readonly name?: string;
  readonly private?: boolean;
}
export const UpdateListsRequest: Schema.Schema<UpdateListsRequest, UpdateListsRequestEncoded, never> = Schema.Struct({
  description: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  private: Schema.optional(Schema.Boolean),
});

export interface UpdateListsResponse {
  readonly data?: UpdateListsResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface UpdateListsResponseEncoded {
  readonly data?: UpdateListsResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const UpdateListsResponse: Schema.Schema<UpdateListsResponse, UpdateListsResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => UpdateListsResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface UpdateListsResponseData {
  readonly updated: boolean;
}
export interface UpdateListsResponseDataEncoded {
  readonly updated: boolean;
}
export const UpdateListsResponseData: Schema.Schema<UpdateListsResponseData, UpdateListsResponseDataEncoded, never> = Schema.Struct({
  updated: Schema.Boolean,
});

export interface UpdateRulesAdd {
  readonly tag?: string;
  readonly value: string;
}
export interface UpdateRulesAddEncoded {
  readonly tag?: string;
  readonly value: string;
}
export const UpdateRulesAdd: Schema.Schema<UpdateRulesAdd, UpdateRulesAddEncoded, never> = Schema.Struct({
  tag: Schema.optional(Schema.String),
  value: Schema.String,
});

export interface UpdateRulesDelete {
  readonly ids?: ReadonlyArray<string>;
  readonly values?: ReadonlyArray<string>;
}
export interface UpdateRulesDeleteEncoded {
  readonly ids?: ReadonlyArray<string>;
  readonly values?: ReadonlyArray<string>;
}
export const UpdateRulesDelete: Schema.Schema<UpdateRulesDelete, UpdateRulesDeleteEncoded, never> = Schema.Struct({
  ids: Schema.optional(Schema.Array(Schema.String)),
  values: Schema.optional(Schema.Array(Schema.String)),
});

export interface UpdateRulesRequest {
  readonly add?: ReadonlyArray<UpdateRulesAdd>;
  readonly delete?: UpdateRulesDelete;
}
export interface UpdateRulesRequestEncoded {
  readonly add?: ReadonlyArray<UpdateRulesAddEncoded>;
  readonly delete?: UpdateRulesDeleteEncoded;
}
export const UpdateRulesRequest: Schema.Schema<UpdateRulesRequest, UpdateRulesRequestEncoded, never> = Schema.Struct({
  add: Schema.optional(Schema.Array(Schema.suspend(() => UpdateRulesAdd))),
  delete: Schema.optional(Schema.suspend(() => UpdateRulesDelete)),
});

export interface UpdateRulesResponse {
  readonly data?: ReadonlyArray<UpdateRulesResponseData>;
  readonly errors?: ReadonlyArray<Problem>;
  readonly meta?: unknown;
}
export interface UpdateRulesResponseEncoded {
  readonly data?: ReadonlyArray<UpdateRulesResponseDataEncoded>;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
  readonly meta?: unknown;
}
export const UpdateRulesResponse: Schema.Schema<UpdateRulesResponse, UpdateRulesResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.Array(Schema.suspend(() => UpdateRulesResponseData))),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
  meta: Schema.optional(Schema.Unknown),
});

export interface UpdateRulesResponseData {
  readonly id?: string;
  readonly tag?: string;
  readonly value?: string;
}
export interface UpdateRulesResponseDataEncoded {
  readonly id?: string;
  readonly tag?: string;
  readonly value?: string;
}
export const UpdateRulesResponseData: Schema.Schema<UpdateRulesResponseData, UpdateRulesResponseDataEncoded, never> = Schema.Struct({
  id: Schema.optional(Schema.String),
  tag: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
});

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
export interface UpdateScheduledBroadcastRequestEncoded {
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
export const UpdateScheduledBroadcastRequest: Schema.Schema<UpdateScheduledBroadcastRequest, UpdateScheduledBroadcastRequestEncoded, never> = Schema.Struct({
  available_for_replay: Schema.optional(Schema.Boolean),
  chat_option: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  is_locked: Schema.optional(Schema.Boolean),
  locale: Schema.optional(Schema.String),
  manual_publish: Schema.optional(Schema.Boolean),
  roll_forward: Schema.optional(Schema.Boolean),
  scheduled_broadcast_id: Schema.String,
  scheduled_end_ms: Schema.String,
  scheduled_start_ms: Schema.String,
  source_id: Schema.optional(Schema.String),
  thumbnail_media_id: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
});

export interface UpdateScheduledBroadcastResponse {
  readonly data?: UpdateScheduledBroadcastResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface UpdateScheduledBroadcastResponseEncoded {
  readonly data?: UpdateScheduledBroadcastResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const UpdateScheduledBroadcastResponse: Schema.Schema<UpdateScheduledBroadcastResponse, UpdateScheduledBroadcastResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => UpdateScheduledBroadcastResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

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
export interface UpdateScheduledBroadcastResponseDataEncoded {
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
export const UpdateScheduledBroadcastResponseData: Schema.Schema<UpdateScheduledBroadcastResponseData, UpdateScheduledBroadcastResponseDataEncoded, never> = Schema.Struct({
  available_for_replay: Schema.optional(Schema.Boolean),
  broadcast_id: Schema.optional(Schema.String),
  chat_option: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  locale: Schema.optional(Schema.String),
  manual_publish: Schema.optional(Schema.Boolean),
  recurring_schedule_id: Schema.optional(Schema.String),
  scheduled_broadcast_id: Schema.optional(Schema.String),
  scheduled_end_ms: Schema.optional(Schema.String),
  scheduled_start_ms: Schema.optional(Schema.String),
  source_id: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  telecast_id: Schema.optional(Schema.String),
  thumbnail_media_id: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
});

export interface Usage {
  readonly cap_reset_day?: number;
  readonly daily_client_app_usage?: UsageDailyClientAppUsage;
  readonly daily_project_usage?: UsageDailyProjectUsage;
  readonly project_cap?: string;
  readonly project_id?: string;
  readonly project_usage?: string;
}
export interface UsageEncoded {
  readonly cap_reset_day?: number;
  readonly daily_client_app_usage?: UsageDailyClientAppUsageEncoded;
  readonly daily_project_usage?: UsageDailyProjectUsageEncoded;
  readonly project_cap?: string;
  readonly project_id?: string;
  readonly project_usage?: string;
}
export const Usage: Schema.Schema<Usage, UsageEncoded, never> = Schema.Struct({
  cap_reset_day: Schema.optional(Schema.Int),
  daily_client_app_usage: Schema.optional(Schema.suspend(() => UsageDailyClientAppUsage)),
  daily_project_usage: Schema.optional(Schema.suspend(() => UsageDailyProjectUsage)),
  project_cap: Schema.optional(Schema.String),
  project_id: Schema.optional(Schema.String),
  project_usage: Schema.optional(Schema.String),
});

export type UsageDailyClientAppUsage = ReadonlyArray<unknown>;
export type UsageDailyClientAppUsageEncoded = ReadonlyArray<unknown>;
export const UsageDailyClientAppUsage: Schema.Schema<UsageDailyClientAppUsage, UsageDailyClientAppUsageEncoded, never> = Schema.Array(Schema.Unknown);

/** Project-level daily Post usage for the caller's project. */
export interface UsageDailyProjectUsage {
  readonly project_id?: string | null;
  readonly usage?: ReadonlyArray<unknown> | null;
}
export interface UsageDailyProjectUsageEncoded {
  readonly project_id?: string | null;
  readonly usage?: ReadonlyArray<unknown> | null;
}
export const UsageDailyProjectUsage: Schema.Schema<UsageDailyProjectUsage, UsageDailyProjectUsageEncoded, never> = Schema.Struct({
  project_id: Schema.optional(Schema.NullOr(Schema.String)),
  usage: Schema.optional(Schema.NullOr(Schema.Array(Schema.Unknown))),
});

export interface User {
  readonly affiliation?: UserAffiliation;
  readonly confirmed_email?: string;
  readonly connection_status?: UserConnectionStatus;
  readonly created_at?: Date;
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
export interface UserEncoded {
  readonly affiliation?: UserAffiliationEncoded;
  readonly confirmed_email?: string;
  readonly connection_status?: UserConnectionStatusEncoded;
  readonly created_at?: string;
  readonly description?: string;
  readonly entities?: UserEntitiesEncoded;
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
  readonly public_metrics?: UserPublicMetricsEncoded;
  readonly receives_your_dm?: boolean;
  readonly subscribes_to_you?: boolean;
  readonly subscription?: UserSubscriptionEncoded;
  readonly subscription_type?: string;
  readonly url?: string;
  readonly username?: string;
  readonly verified?: boolean;
  readonly verified_followers_count?: number;
  readonly verified_type?: string;
  readonly withheld?: UserWithheldEncoded;
}
export const User: Schema.Schema<User, UserEncoded, never> = Schema.Struct({
  affiliation: Schema.optional(Schema.suspend(() => UserAffiliation)),
  confirmed_email: Schema.optional(Schema.String),
  connection_status: Schema.optional(Schema.suspend(() => UserConnectionStatus)),
  created_at: Schema.optional(Schema.DateFromString),
  description: Schema.optional(Schema.String),
  entities: Schema.optional(Schema.suspend(() => UserEntities)),
  id: Schema.optional(Schema.String),
  is_identity_verified: Schema.optional(Schema.Boolean),
  location: Schema.optional(Schema.String),
  most_recent_post_id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  parody: Schema.optional(Schema.Boolean),
  pinned_post_id: Schema.optional(Schema.String),
  profile_banner_url: Schema.optional(Schema.String),
  profile_image_url: Schema.optional(Schema.String),
  protected: Schema.optional(Schema.Boolean),
  public_metrics: Schema.optional(Schema.suspend(() => UserPublicMetrics)),
  receives_your_dm: Schema.optional(Schema.Boolean),
  subscribes_to_you: Schema.optional(Schema.Boolean),
  subscription: Schema.optional(Schema.suspend(() => UserSubscription)),
  subscription_type: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
  username: Schema.optional(Schema.String),
  verified: Schema.optional(Schema.Boolean),
  verified_followers_count: Schema.optional(Schema.Int),
  verified_type: Schema.optional(Schema.String),
  withheld: Schema.optional(Schema.suspend(() => UserWithheld)),
});

/** Metadata about a user's affiliation. */
export interface UserAffiliation {
  readonly badge_url?: string | null;
  readonly description?: string | null;
  readonly url?: string | null;
  readonly user_id?: ReadonlyArray<string> | null;
}
export interface UserAffiliationEncoded {
  readonly badge_url?: string | null;
  readonly description?: string | null;
  readonly url?: string | null;
  readonly user_id?: ReadonlyArray<string> | null;
}
export const UserAffiliation: Schema.Schema<UserAffiliation, UserAffiliationEncoded, never> = Schema.Struct({
  badge_url: Schema.optional(Schema.NullOr(Schema.String)),
  description: Schema.optional(Schema.NullOr(Schema.String)),
  url: Schema.optional(Schema.NullOr(Schema.String)),
  user_id: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
});

export type UserComplianceData = UserProtectComplianceSchema | UserUnprotectComplianceSchema | UserDeleteComplianceSchema | UserUndeleteComplianceSchema | UserSuspendComplianceSchema | UserUnsuspendComplianceSchema | UserWithheldComplianceSchema | UserScrubGeoSchema | UserProfileModificationComplianceSchema;
export type UserComplianceDataEncoded = UserProtectComplianceSchemaEncoded | UserUnprotectComplianceSchemaEncoded | UserDeleteComplianceSchemaEncoded | UserUndeleteComplianceSchemaEncoded | UserSuspendComplianceSchemaEncoded | UserUnsuspendComplianceSchemaEncoded | UserWithheldComplianceSchemaEncoded | UserScrubGeoSchemaEncoded | UserProfileModificationComplianceSchemaEncoded;
export const UserComplianceData: Schema.Schema<UserComplianceData, UserComplianceDataEncoded, never> = Schema.Union(Schema.suspend(() => UserProtectComplianceSchema), Schema.suspend(() => UserUnprotectComplianceSchema), Schema.suspend(() => UserDeleteComplianceSchema), Schema.suspend(() => UserUndeleteComplianceSchema), Schema.suspend(() => UserSuspendComplianceSchema), Schema.suspend(() => UserUnsuspendComplianceSchema), Schema.suspend(() => UserWithheldComplianceSchema), Schema.suspend(() => UserScrubGeoSchema), Schema.suspend(() => UserProfileModificationComplianceSchema));

export interface UserComplianceSchema {
  readonly event_at: Date;
  readonly user: unknown;
}
export interface UserComplianceSchemaEncoded {
  readonly event_at: string;
  readonly user: unknown;
}
export const UserComplianceSchema: Schema.Schema<UserComplianceSchema, UserComplianceSchemaEncoded, never> = Schema.Struct({
  event_at: Schema.DateFromString,
  user: Schema.Unknown,
});

export type UserConnectionStatus = ReadonlyArray<"blocking" | "follow_request_received" | "follow_request_sent" | "followed_by" | "following" | "muting">;
export type UserConnectionStatusEncoded = ReadonlyArray<"blocking" | "follow_request_received" | "follow_request_sent" | "followed_by" | "following" | "muting">;
export const UserConnectionStatus: Schema.Schema<UserConnectionStatus, UserConnectionStatusEncoded, never> = Schema.Array(Schema.Union(Schema.Literal("blocking"), Schema.Literal("follow_request_received"), Schema.Literal("follow_request_sent"), Schema.Literal("followed_by"), Schema.Literal("following"), Schema.Literal("muting")));

export interface UserDeleteComplianceSchema {
  readonly user_delete: UserComplianceSchema;
}
export interface UserDeleteComplianceSchemaEncoded {
  readonly user_delete: UserComplianceSchemaEncoded;
}
export const UserDeleteComplianceSchema: Schema.Schema<UserDeleteComplianceSchema, UserDeleteComplianceSchemaEncoded, never> = Schema.Struct({
  user_delete: Schema.suspend(() => UserComplianceSchema),
});

/** A list of metadata found in the User's profile description. */
export interface UserEntities {
  readonly description?: unknown | null;
  readonly url?: unknown | null;
}
export interface UserEntitiesEncoded {
  readonly description?: unknown | null;
  readonly url?: unknown | null;
}
export const UserEntities: Schema.Schema<UserEntities, UserEntitiesEncoded, never> = Schema.Struct({
  description: Schema.optional(Schema.NullOr(Schema.Unknown)),
  url: Schema.optional(Schema.NullOr(Schema.Unknown)),
});

export type UserId = string;
export type UserIdEncoded = string;
export const UserId: Schema.Schema<UserId, UserIdEncoded, never> = Schema.String;

export interface UserProfileModificationComplianceSchema {
  readonly user_profile_modification: UserProfileModificationObjectSchema;
}
export interface UserProfileModificationComplianceSchemaEncoded {
  readonly user_profile_modification: UserProfileModificationObjectSchemaEncoded;
}
export const UserProfileModificationComplianceSchema: Schema.Schema<UserProfileModificationComplianceSchema, UserProfileModificationComplianceSchemaEncoded, never> = Schema.Struct({
  user_profile_modification: Schema.suspend(() => UserProfileModificationObjectSchema),
});

export interface UserProfileModificationObjectSchema {
  readonly event_at: Date;
  readonly new_value: string;
  readonly profile_field: string;
  readonly user: unknown;
}
export interface UserProfileModificationObjectSchemaEncoded {
  readonly event_at: string;
  readonly new_value: string;
  readonly profile_field: string;
  readonly user: unknown;
}
export const UserProfileModificationObjectSchema: Schema.Schema<UserProfileModificationObjectSchema, UserProfileModificationObjectSchemaEncoded, never> = Schema.Struct({
  event_at: Schema.DateFromString,
  new_value: Schema.String,
  profile_field: Schema.String,
  user: Schema.Unknown,
});

export interface UserProtectComplianceSchema {
  readonly user_protect: UserComplianceSchema;
}
export interface UserProtectComplianceSchemaEncoded {
  readonly user_protect: UserComplianceSchemaEncoded;
}
export const UserProtectComplianceSchema: Schema.Schema<UserProtectComplianceSchema, UserProtectComplianceSchemaEncoded, never> = Schema.Struct({
  user_protect: Schema.suspend(() => UserComplianceSchema),
});

/** A list of metrics for this User. */
export interface UserPublicMetrics {
  readonly followers_count: number;
  readonly following_count: number;
  readonly like_count?: number | null;
  readonly listed_count: number;
  readonly media_count?: number | null;
  readonly post_count: number;
}
export interface UserPublicMetricsEncoded {
  readonly followers_count: number;
  readonly following_count: number;
  readonly like_count?: number | null;
  readonly listed_count: number;
  readonly media_count?: number | null;
  readonly post_count: number;
}
export const UserPublicMetrics: Schema.Schema<UserPublicMetrics, UserPublicMetricsEncoded, never> = Schema.Struct({
  followers_count: Schema.Int,
  following_count: Schema.Int,
  like_count: Schema.optional(Schema.NullOr(Schema.Int)),
  listed_count: Schema.Int,
  media_count: Schema.optional(Schema.NullOr(Schema.Int)),
  post_count: Schema.Int,
});

export interface UserScrubGeoObjectSchema {
  readonly event_at: Date;
  readonly up_to_tweet_id: PostId;
  readonly user: unknown;
}
export interface UserScrubGeoObjectSchemaEncoded {
  readonly event_at: string;
  readonly up_to_tweet_id: PostIdEncoded;
  readonly user: unknown;
}
export const UserScrubGeoObjectSchema: Schema.Schema<UserScrubGeoObjectSchema, UserScrubGeoObjectSchemaEncoded, never> = Schema.Struct({
  event_at: Schema.DateFromString,
  up_to_tweet_id: Schema.suspend(() => PostId),
  user: Schema.Unknown,
});

export interface UserScrubGeoSchema {
  readonly scrub_geo: UserScrubGeoObjectSchema;
}
export interface UserScrubGeoSchemaEncoded {
  readonly scrub_geo: UserScrubGeoObjectSchemaEncoded;
}
export const UserScrubGeoSchema: Schema.Schema<UserScrubGeoSchema, UserScrubGeoSchemaEncoded, never> = Schema.Struct({
  scrub_geo: Schema.suspend(() => UserScrubGeoObjectSchema),
});

/** The subscription relationship between this User and you. */
export interface UserSubscription {
  readonly subscribes_to_you: boolean;
}
export interface UserSubscriptionEncoded {
  readonly subscribes_to_you: boolean;
}
export const UserSubscription: Schema.Schema<UserSubscription, UserSubscriptionEncoded, never> = Schema.Struct({
  subscribes_to_you: Schema.Boolean,
});

export interface UserSuspendComplianceSchema {
  readonly user_suspend: UserComplianceSchema;
}
export interface UserSuspendComplianceSchemaEncoded {
  readonly user_suspend: UserComplianceSchemaEncoded;
}
export const UserSuspendComplianceSchema: Schema.Schema<UserSuspendComplianceSchema, UserSuspendComplianceSchemaEncoded, never> = Schema.Struct({
  user_suspend: Schema.suspend(() => UserComplianceSchema),
});

export interface UserTakedownComplianceSchema {
  readonly event_at: Date;
  readonly user: unknown;
  readonly withheld_in_countries: ReadonlyArray<CountryCode>;
}
export interface UserTakedownComplianceSchemaEncoded {
  readonly event_at: string;
  readonly user: unknown;
  readonly withheld_in_countries: ReadonlyArray<CountryCodeEncoded>;
}
export const UserTakedownComplianceSchema: Schema.Schema<UserTakedownComplianceSchema, UserTakedownComplianceSchemaEncoded, never> = Schema.Struct({
  event_at: Schema.DateFromString,
  user: Schema.Unknown,
  withheld_in_countries: Schema.Array(Schema.suspend(() => CountryCode)),
});

export interface UserUndeleteComplianceSchema {
  readonly user_undelete: UserComplianceSchema;
}
export interface UserUndeleteComplianceSchemaEncoded {
  readonly user_undelete: UserComplianceSchemaEncoded;
}
export const UserUndeleteComplianceSchema: Schema.Schema<UserUndeleteComplianceSchema, UserUndeleteComplianceSchemaEncoded, never> = Schema.Struct({
  user_undelete: Schema.suspend(() => UserComplianceSchema),
});

export interface UserUnprotectComplianceSchema {
  readonly user_unprotect: UserComplianceSchema;
}
export interface UserUnprotectComplianceSchemaEncoded {
  readonly user_unprotect: UserComplianceSchemaEncoded;
}
export const UserUnprotectComplianceSchema: Schema.Schema<UserUnprotectComplianceSchema, UserUnprotectComplianceSchemaEncoded, never> = Schema.Struct({
  user_unprotect: Schema.suspend(() => UserComplianceSchema),
});

export interface UserUnsuspendComplianceSchema {
  readonly user_unsuspend: UserComplianceSchema;
}
export interface UserUnsuspendComplianceSchemaEncoded {
  readonly user_unsuspend: UserComplianceSchemaEncoded;
}
export const UserUnsuspendComplianceSchema: Schema.Schema<UserUnsuspendComplianceSchema, UserUnsuspendComplianceSchemaEncoded, never> = Schema.Struct({
  user_unsuspend: Schema.suspend(() => UserComplianceSchema),
});

/** Withholding details for withheld content. */
export interface UserWithheld {
  readonly country_codes?: ReadonlyArray<string> | null;
  readonly scope?: "user" | null;
}
export interface UserWithheldEncoded {
  readonly country_codes?: ReadonlyArray<string> | null;
  readonly scope?: "user" | null;
}
export const UserWithheld: Schema.Schema<UserWithheld, UserWithheldEncoded, never> = Schema.Struct({
  country_codes: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
  scope: Schema.optional(Schema.NullOr(Schema.Union(Schema.Literal("user")))),
});

export interface UserWithheldComplianceSchema {
  readonly user_withheld: UserTakedownComplianceSchema;
}
export interface UserWithheldComplianceSchemaEncoded {
  readonly user_withheld: UserTakedownComplianceSchemaEncoded;
}
export const UserWithheldComplianceSchema: Schema.Schema<UserWithheldComplianceSchema, UserWithheldComplianceSchemaEncoded, never> = Schema.Struct({
  user_withheld: Schema.suspend(() => UserTakedownComplianceSchema),
});

export interface ValidateAccountActivitySubscriptionResponse {
  readonly data?: ValidateAccountActivitySubscriptionResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface ValidateAccountActivitySubscriptionResponseEncoded {
  readonly data?: ValidateAccountActivitySubscriptionResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const ValidateAccountActivitySubscriptionResponse: Schema.Schema<ValidateAccountActivitySubscriptionResponse, ValidateAccountActivitySubscriptionResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => ValidateAccountActivitySubscriptionResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface ValidateAccountActivitySubscriptionResponseData {
  readonly subscribed: boolean;
}
export interface ValidateAccountActivitySubscriptionResponseDataEncoded {
  readonly subscribed: boolean;
}
export const ValidateAccountActivitySubscriptionResponseData: Schema.Schema<ValidateAccountActivitySubscriptionResponseData, ValidateAccountActivitySubscriptionResponseDataEncoded, never> = Schema.Struct({
  subscribed: Schema.Boolean,
});

export interface ValidateWebhooksResponse {
  readonly data?: ValidateWebhooksResponseData;
  readonly errors?: ReadonlyArray<Problem>;
}
export interface ValidateWebhooksResponseEncoded {
  readonly data?: ValidateWebhooksResponseDataEncoded;
  readonly errors?: ReadonlyArray<ProblemEncoded>;
}
export const ValidateWebhooksResponse: Schema.Schema<ValidateWebhooksResponse, ValidateWebhooksResponseEncoded, never> = Schema.Struct({
  data: Schema.optional(Schema.suspend(() => ValidateWebhooksResponseData)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => Problem))),
});

export interface ValidateWebhooksResponseData {
  readonly valid: boolean;
}
export interface ValidateWebhooksResponseDataEncoded {
  readonly valid: boolean;
}
export const ValidateWebhooksResponseData: Schema.Schema<ValidateWebhooksResponseData, ValidateWebhooksResponseDataEncoded, never> = Schema.Struct({
  valid: Schema.Boolean,
});

export interface WebhookConfig {
  readonly created_at?: string;
  readonly id?: string;
  readonly url?: string;
  readonly valid?: boolean;
}
export interface WebhookConfigEncoded {
  readonly created_at?: string;
  readonly id?: string;
  readonly url?: string;
  readonly valid?: boolean;
}
export const WebhookConfig: Schema.Schema<WebhookConfig, WebhookConfigEncoded, never> = Schema.Struct({
  created_at: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
  valid: Schema.optional(Schema.Boolean),
});

export type WebhookConfigId = string;
export type WebhookConfigIdEncoded = string;
export const WebhookConfigId: Schema.Schema<WebhookConfigId, WebhookConfigIdEncoded, never> = Schema.String;
