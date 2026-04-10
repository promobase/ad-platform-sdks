// Auto-generated types for Mentions — do not edit

export interface BusinessMentionVideoListParams {}


export interface BusinessMentionVideoListResponse {}


export interface BusinessMentionVideoGetParams {}


export interface BusinessMentionVideoGetResponse {}


export interface BusinessMentionTopWordListParams {}


export interface BusinessMentionTopWordListResponse {}


export interface BusinessMentionTopHashtagListParams {}


export interface BusinessMentionTopHashtagListResponse {}


export interface BusinessMentionHashtagVideoListParams {
  business_id: string;
  hashtag?: string;
  fields?: string[];
  sort_field?: string;
  sort_order?: string;
  number_of_days?: number;
  regions?: string[];
  cursor?: number;
  max_count?: number;
}


export interface BusinessMentionHashtagVideoListResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
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
};
}


export interface BusinessMentionHashtagVerifyListParams {}


export interface BusinessMentionHashtagVerifyListResponse {}


export interface BusinessMentionHashtagAddParams {}


export interface BusinessMentionHashtagAddResponse {}


export interface BusinessMentionHashtagManageListParams {}


export interface BusinessMentionHashtagManageListResponse {}


export interface BusinessMentionHashtagRemoveParams {}


export interface BusinessMentionHashtagRemoveResponse {}


export interface BusinessMentionCommentListParams {}


export interface BusinessMentionCommentListResponse {}


export interface BusinessMentionCommentGetParams {}


export interface BusinessMentionCommentGetResponse {}


export interface BusinessCommentReplyCreateParams {}


export interface BusinessCommentReplyCreateResponse {}


export interface BusinessWebhookUpdateParams {}


export interface BusinessWebhookUpdateResponse {}


export interface BusinessWebhookListParams {}


export interface BusinessWebhookListResponse {}


export interface BusinessWebhookDeleteParams {}


export interface BusinessWebhookDeleteResponse {}

