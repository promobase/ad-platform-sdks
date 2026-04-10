// Auto-generated types for Ad Review — do not edit

export interface AdgroupReviewInfoParams {
  advertiser_id: string;
  adgroup_ids: string[];
  lang?: string;
}


export interface AdgroupReviewInfoResponse {
  code?: number;
  message?: string;
  data?: {
  ad_review_map?: {
  ad_id?: "PART_AVAILABLE" | "UNAVAILABLE";
  is_approved?: boolean;
  review_status?: "ALL_AVAILABLE" | "PART_AVAILABLE" | "UNAVAILABLE";
  appeal_status?: string;
  forbidden_placements?: string[];
  forbidden_ages?: string[];
  forbidden_locations?: string[];
  forbidden_operation_systems?: string[];
  last_audit_time?: string;
  reject_info?: {
  suggestion?: string;
  reasons?: string[];
  forbidden_ages?: string[];
  forbidden_locations?: string[];
  forbidden_placements?: string[];
  content_info?: {
  image_content?: {
  image_id?: string;
};
  video_content?: {
  video_id?: string;
};
  text_content?: string;
  content_type?: "MODE_STRING" | "MODE_IMAGE" | "MODE_VIDEO" | "MODE_CAROUSEL_MUSIC";
  carousel_music_content?: {
  music_id?: string;
};
};
}[];
};
  ad_group_review_map?: {
  adgroup_id?: string;
  is_approved?: boolean;
  review_status?: "ALL_AVAILABLE" | "PART_AVAILABLE" | "UNAVAILABLE";
  appeal_status?: string;
  forbidden_placements?: string[];
  forbidden_ages?: string[];
  forbidden_locations?: string[];
  forbidden_operation_systems?: string[];
  last_audit_time?: string;
  contain_rejected_ads?: boolean;
  reject_info?: {
  suggestion?: string;
  reasons?: string[];
  forbidden_ages?: string[];
  forbidden_locations?: string[];
  forbidden_placements?: string[];
  content_info?: {
  image_content?: {
  image_id?: string;
};
  video_content?: {
  video_id?: string;
};
  text_content?: string;
  content_type?: "MODE_STRING" | "MODE_IMAGE" | "MODE_VIDEO" | "MODE_CAROUSEL_MUSIC";
  carousel_music_content?: {
  music_id?: string;
};
};
}[];
};
};
}


export interface AdReviewInfoParams {
  advertiser_id: string;
  ad_ids: string[];
  lang?: string;
}


export interface AdReviewInfoResponse {
  code?: number;
  message?: string;
  data?: {
  ad_review_map?: {
  ad_id?: string;
  is_approved?: boolean;
  review_status?: "ALL_AVAILABLE" | "PART_AVAILABLE" | "UNAVAILABLE";
  appeal_status?: string;
  forbidden_placements?: string[];
  forbidden_ages?: string[];
  forbidden_locations?: string[];
  forbidden_operation_systems?: string[];
  last_audit_time?: string;
  reject_info?: {
  suggestion?: string;
  reasons?: string[];
  forbidden_ages?: string[];
  forbidden_locations?: string[];
  forbidden_placements?: string[];
  content_info?: {
  image_content?: {
  image_id?: string;
};
  video_content?: {
  video_id?: string;
};
  text_content?: string;
  content_type?: "MODE_STRING" | "MODE_IMAGE" | "MODE_VIDEO" | "MODE_CAROUSEL_MUSIC";
  carousel_music_content?: {
  music_id?: string;
};
};
}[];
};
};
}


export interface AdgroupAppealParams {}


export interface AdgroupAppealResponse {}

