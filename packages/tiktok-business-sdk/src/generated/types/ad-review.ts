// @generated
// fingerprint: sha256:56bc12647a3118e49468616d647948facdb13abc9d9cff6c5c9cf2519cd6cda2
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for Ad Review — do not edit

export interface AdgroupReviewInfoParams {
  advertiser_id: string;
  adgroup_ids: string[];
  lang?: string;
}


export interface AdgroupReviewInfoResponse {
  ad_review_map?: {
  ad_id?: string;
  is_approved?: boolean;
  review_status?: string;
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
  content_type?: string;
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
  content_type?: string;
  carousel_music_content?: {
  music_id?: string;
};
};
}[];
};
}


export interface AdReviewInfoParams {
  advertiser_id: string;
  ad_ids: string[];
  lang?: string;
}


export interface AdReviewInfoResponse {
  ad_review_map?: {
  ad_id?: string;
  is_approved?: boolean;
  review_status?: string;
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
  content_type?: string;
  carousel_music_content?: {
  music_id?: string;
};
};
}[];
};
}


export interface AdgroupAppealParams {
  advertiser_id: string;
  adgroup_id: string;
  ad_id?: string;
  appeal_reason?: string;
  attachment_list?: string[];
}


export interface AdgroupAppealResponse {}
