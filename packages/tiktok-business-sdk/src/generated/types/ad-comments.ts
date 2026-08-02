// Auto-generated types for Ad Comments — do not edit

export interface CommentListParams {
  advertiser_id: string;
  comment_type?: ("ALL" | "COMMENT" | "REPLY")[];
  search_field: string;
  search_value: string;
  sort_field?: "CREATE_TIME" | "LIKES" | "REPLIES";
  sort_type?: "ASC" | "DESC";
  start_time: string;
  end_time: string;
  page_size?: number;
  page?: number;
}


export interface CommentListResponse {
  comments?: {
  comment_id?: string;
  app?: string;
  content?: string;
  likes?: number;
  replies?: number;
  comment_type?: string;
  original_comment_id?: string;
  comment_status?: "HIDDEN" | "PUBLIC";
  hit_blockedword?: boolean;
  ad_text?: string;
  create_time?: string;
  campaign_id?: string;
  campaign_name?: string;
  adgroup_id?: string;
  adgroup_name?: string;
  ad_id?: string;
  ad_name?: string;
  tiktok_item_id?: string;
  identity_id?: string;
  identity_type?: string;
  is_pinned?: boolean;
  can_delete?: boolean;
  is_auth_ttba?: boolean;
  is_auth_comment_manage_scope?: boolean;
  video_play_url?: string;
  video_cover_url?: string;
  user_avatar_url?: string;
  user_name?: string;
  user_id?: string;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface CommentReferenceParams {
  advertiser_id: string;
  comment_id: string;
  comment_type: string;
  original_comment_id?: string;
  page_size?: number;
  page?: number;
}


export interface CommentReferenceResponse {
  comments?: {
  comment_id?: string;
  content?: string;
  comment_type?: string;
  comment_status?: "HIDDEN" | "PUBLIC";
  hit_blockedword?: boolean;
  create_time?: string;
  user_name?: string;
  user_id?: string;
  user_avatar_url?: string;
  tiktok_item_id?: string;
  identity_id?: string;
  identity_type?: string;
  is_pinned?: boolean;
  can_delete?: boolean;
  is_auth_ttba?: boolean;
  is_auth_comment_manage_scope?: boolean;
  reply_user_info?: Record<string, unknown>;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface CommentStatusUpdateParams {
  advertiser_id: string;
  comment_ids: string[];
  operation: "HIDDEN" | "PUBLIC";
}


export interface CommentStatusUpdateResponse {
  message?: string;
  code?: number;
  request_id?: string;
}


export interface CommentPostParams {
  advertiser_id: string;
  ad_id: string;
  tiktok_item_id: string;
  comment_id: string;
  comment_type: string;
  text: string;
  identity_type: "CUSTOMIZED_USER" | "TT_USER";
  identity_id: string;
}


export interface CommentPostResponse {
  comment_id?: string;
  tiktok_item_id?: string;
  text?: string;
  create_time?: string;
  reply_to_comment_id?: string;
}


export interface CommentDeleteParams {
  advertiser_id: string;
  ad_id: string;
  tiktok_item_id: string;
  comment_id: string;
  identity_type: "CUSTOMIZED_USER" | "TT_USER";
  identity_id: string;
}


export interface CommentDeleteResponse {}


export interface CommentTaskCreateParams {
  advertiser_id: string;
  comment_status?: ("ALL" | "PUBLIC" | "HIDDEN")[];
  comment_type?: ("ALL" | "COMMENT" | "REPLY")[];
  search_field?: string;
  search_value?: string;
  comment_ids?: string[];
  sort_field?: "CREATE_TIME" | "LIKES" | "REPLIES";
  sort_type?: "ASC" | "DESC";
  start_time?: string;
  end_time?: string;
  lang?: "EN" | "JA" | "ZH";
}


export interface CommentTaskCreateResponse {
  task_id?: string;
}


export interface CommentTaskCheckParams {
  advertiser_id: string;
  task_id: string;
}


export interface CommentTaskCheckResponse {
  task_id?: string;
  status?: "RUNNING" | "SUCCEED" | "FAILED";
}


export interface CommentTaskDownloadParams {
  advertiser_id: string;
  task_id: string;
}


export interface CommentTaskDownloadResponse {
  csv?: string;
}
