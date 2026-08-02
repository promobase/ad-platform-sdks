// Auto-generated types for Mentions — do not edit

export interface BusinessMentionVideoListParams {
  business_id: string;
  fields?: string[];
  sort_field?: "CREATE_TIME" | "LIKES" | "COMMENTS" | "SHARES";
  sort_type?: "ASC" | "DESC";
  number_of_days?: number;
  regions?: string[];
  cursor?: number;
  max_count?: number;
}


export interface BusinessMentionVideoListResponse {
  videos?: {
  item_id?: string;
  create_time?: string;
  video_link?: string;
  caption?: string;
  likes?: number;
  comments?: number;
  shares?: number;
  thumbnail_url?: string;
  creator_handle_name?: string;
  views?: number;
  reach?: number;
}[];
  cursor?: number;
  has_more?: boolean;
}


export interface BusinessMentionVideoGetParams {
  business_id: string;
  item_id: string;
  fields?: string[];
}


export interface BusinessMentionVideoGetResponse {
  video?: {
  item_id?: string;
  create_time?: string;
  video_link?: string;
  caption?: string;
  likes?: number;
  comments?: number;
  shares?: number;
  thumbnail_url?: string;
  creator_handle_name?: string;
  views?: number;
  reach?: number;
}[];
}


export interface BusinessMentionTopWordListParams {
  business_id: string;
  regions?: string[];
}


export interface BusinessMentionTopWordListResponse {
  results?: {
  word?: string;
  count?: number;
}[];
}


export interface BusinessMentionTopHashtagListParams {
  business_id: string;
  regions?: string[];
}


export interface BusinessMentionTopHashtagListResponse {
  results?: {
  hashtag?: string;
  count?: number;
}[];
}


export interface BusinessMentionHashtagVideoListParams {
  business_id: string;
  hashtag?: string;
  fields?: string[];
  sort_field?: "CREATE_TIME" | "LIKES" | "COMMENTS" | "SHARES";
  sort_order?: "ASC" | "DESC";
  number_of_days?: number;
  regions?: string[];
  cursor?: number;
  max_count?: number;
}


export interface BusinessMentionHashtagVideoListResponse {
  videos?: {
  item_id?: string;
  create_time?: string;
  video_link?: string;
  caption?: string;
  likes?: number;
  comments?: number;
  shares?: number;
  thumbnail_url?: string;
  matched_hashtags?: string[];
}[];
  cursor?: number;
  has_more?: boolean;
}


export interface BusinessMentionHashtagVerifyListParams {
  business_id: string;
  username: string;
}


export interface BusinessMentionHashtagVerifyListResponse {
  hashtag_list?: {
  hashtag?: string;
  post_count?: number;
  like_count?: number;
  mention_post_rank?: number;
}[];
}


export interface BusinessMentionHashtagAddParams {
  business_id: string;
  username: string;
  hashtags: string[];
}


export interface BusinessMentionHashtagAddResponse {
  hashtag_list?: {
  hashtag?: string;
  create_date?: string;
}[];
}


export interface BusinessMentionHashtagManageListParams {
  business_id: string;
  username: string;
}


export interface BusinessMentionHashtagManageListResponse {
  hashtag_list?: {
  hashtag?: string;
  create_date?: string;
}[];
}


export interface BusinessMentionHashtagRemoveParams {
  business_id: string;
  username: string;
  hashtag: string;
}


export interface BusinessMentionHashtagRemoveResponse {}


export interface BusinessMentionCommentListParams {
  business_id: string;
  fields?: string[];
  sort_field?: "VIDEO_LIKES" | "COMMENT_CREATE_TIME" | "COMMENT_LIKES";
  sort_type?: "ASC" | "DESC";
  number_of_days?: number;
  regions?: string[];
  cursor?: number;
  max_count?: number;
}


export interface BusinessMentionCommentListResponse {
  comments?: {
  item_id?: string;
  video_link?: string;
  caption?: string;
  video_likes?: number;
  thumbnail_url?: string;
  commenter_display_name?: string;
  comment_id?: string;
  comment_type?: "COMMENT" | "REPLY";
  comment_text?: string;
  comment_create_time?: string;
  comment_likes?: number;
}[];
  cursor?: number;
  has_more?: boolean;
}


export interface BusinessMentionCommentGetParams {
  business_id: string;
  comment_id: string;
  item_id: string;
  fields?: string[];
}


export interface BusinessMentionCommentGetResponse {
  comment?: {
  item_id?: string;
  video_link?: string;
  video_likes?: number;
  thumbnail_url?: string;
  commenter_handle_name?: string;
  comment_id?: string;
  comment_type?: "COMMENT" | "REPLY";
  comment_text?: string;
  comment_create_time?: string;
  comment_likes?: number;
};
}


export interface BusinessCommentReplyCreateParams {
  business_id: string;
  video_id: string;
  comment_id: string;
  text: string;
}


export interface BusinessCommentReplyCreateResponse {
  comment_id?: string;
  parent_comment_id?: string;
  video_id?: string;
  user_id?: string;
  create_time?: number;
  text?: string;
}


export interface BusinessWebhookUpdateParams {
  app_id: string;
  secret: string;
  event_type: string;
  callback_url: string;
}


export interface BusinessWebhookUpdateResponse {
  app_id?: string;
  event_type?: string;
  callback_url?: string;
}


export interface BusinessWebhookListParams {
  app_id: string;
  secret: string;
  event_type: string;
}


export interface BusinessWebhookListResponse {
  app_id?: string;
  event_type?: string;
  callback_url?: string;
}


export interface BusinessWebhookDeleteParams {
  app_id: string;
  secret: string;
  event_type: string;
}


export interface BusinessWebhookDeleteResponse {
  app_id?: string;
  event_type?: string;
}
