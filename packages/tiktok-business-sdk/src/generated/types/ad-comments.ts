// Auto-generated types for Ad Comments — do not edit

export interface CommentListParams {}


export interface CommentListResponse {
  message?: string;
  code?: number;
  data?: {
  comments?: {
  comment_id?: string;
  app?: string;
  content?: string;
  likes?: number;
  replies?: number;
  comment_type?: string;
  original_comment_id?: string;
  comment_status?: string;
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
};
  request_id?: string;
}


export interface CommentReferenceParams {}


export interface CommentReferenceResponse {
  message?: string;
  code?: number;
  data?: {
  comments?: {
  comment_id?: string;
  content?: string;
  comment_type?: string;
  comment_status?: string;
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
};
  request_id?: string;
}


export interface CommentStatusUpdateParams {
  advertiser_id: string;
  comment_ids: string[];
  operation: string;
}


export interface CommentStatusUpdateResponse {
  message?: string;
  code?: number;
  request_id?: string;
}


export interface CommentPostParams {}


export interface CommentPostResponse {}


export interface CommentDeleteParams {}


export interface CommentDeleteResponse {}


export interface CommentTaskCreateParams {
  advertiser_id: string;
  comment_status?: string[];
  comment_type?: string[];
  search_field?: string;
  search_value?: string;
  comment_ids?: string[];
  sort_field?: string;
  sort_type?: string;
  start_time?: string;
  end_time?: string;
  lang?: string;
}


export interface CommentTaskCreateResponse {
  message?: string;
  code?: number;
  data?: {
  task_id?: string;
};
  request_id?: string;
}


export interface CommentTaskCheckParams {
  advertiser_id: string;
  task_id: string;
}


export interface CommentTaskCheckResponse {
  message?: string;
  code?: number;
  data?: {
  task_id?: string;
  status?: string;
};
  request_id?: string;
}


export interface CommentTaskDownloadParams {
  advertiser_id: string;
  task_id: string;
}


export interface CommentTaskDownloadResponse {
  message?: string;
  code?: number;
  data?: {
  csv?: string;
};
  request_id?: string;
}

