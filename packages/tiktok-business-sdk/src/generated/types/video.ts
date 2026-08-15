// @generated
// fingerprint: sha256:ac687e9e85e269a7db199c5c620d77b00df6fffdd4e4294fb5eee8b471652cdb
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for Video — do not edit

export interface FileVideoAdUploadParams {
  advertiser_id: string;
  file_name?: string;
  upload_type?: "UPLOAD_BY_FILE" | "UPLOAD_BY_URL" | "UPLOAD_BY_FILE_ID" | "UPLOAD_BY_VIDEO_ID";
  video_file?: File | Blob;
  video_signature?: string;
  video_url?: string;
  file_id?: string;
  video_id?: string;
  is_third_party?: boolean;
  flaw_detect?: boolean;
  auto_fix_enabled?: boolean;
  auto_bind_enabled?: boolean;
}


export interface FileVideoAdUploadResponse {
  video_cover_url?: string;
  format?: string;
  preview_url?: string;
  preview_url_expire_time?: string;
  file_name?: string;
  displayable?: boolean;
  height?: number;
  width?: number;
  bit_rate?: number;
  create_time?: string;
  modify_time?: string;
  signature?: string;
  duration?: number;
  video_id?: string;
  size?: number;
  material_id?: string;
  allowed_placements?: string[];
  allow_download?: boolean;
  fix_task_id?: string;
  flaw_types?: ("LOW_RESOLUTION" | "ILLEGAL_VIDEO_SIZE" | "NO_BGM" | "BLACK_EDGE" | "ILLEGAL_DURATION")[];
}


export interface FileVideoAdUpdateParams {
  advertiser_id: string;
  file_name: string;
  video_id: string;
}


export interface FileVideoAdUpdateResponse {}


export interface FileVideoAdInfoParams {
  advertiser_id: string;
  video_ids: string[];
}


export interface FileVideoAdInfoResponse {
  list?: string[];
  displayable?: boolean;
  width?: number;
  video_cover_url?: string;
  bit_rate?: number;
  format?: string;
  preview_url?: string;
  preview_url_expire_time?: string;
  duration?: number;
  height?: number;
  signature?: string;
  video_id?: string;
  size?: number;
  material_id?: string;
  allowed_placements?: string[];
  allow_download?: boolean;
  file_name?: string;
  create_time?: string;
  modify_time?: string;
}


export interface FileVideoAdSearchParams {
  advertiser_id: string;
  filtering?: {
  video_ids?: string[];
  material_ids?: string[];
  video_name?: string;
  video_material_sources?: ("UPLOADED_TO_TIKTOK_ADS_MANAGER" | "UPLOADED_TO_CATALOG" | "CREATIVE_TOOL_SMART_VIDEO" | "CREATIVE_TOOL_QUICK_OPTIMIZATION" | "CREATIVE_TOOL_VIDEO_TEMPLATE" | "CREATIVE_TOOL_SMART_VIDEO_SOUNDTRACK" | "CREATIVE_TOOL_TIKTOK_VIDEO_EDITOR" | "TIKTOK_CREATIVE_EXCHANGE" | "CATALOG_VIDEO_TEMPLATE" | "DYNAMIC_VIDEO_EDITOR" | "CREATIVE_CHALLENGE" | "AUTOMATED_CREATIVE_OPTIMIZATION" | "OTHER" | "QUICK_GENERATION" | "CREATIVE_CENTER_VIDEO_UPLOAD" | "CREATIVE_CENTER_TIKTOK_VIDEO_EDITOR" | "CREATIVE_CENTER_VIDEO_TEMPLATE" | "DYNAMIC_SCENE" | "SMART_OPTIMIZATION_TOOL")[];
};
  sort_field?: "CREATE_TIME" | "MODIFY_TIME";
  page?: number;
  page_size?: number;
}


export interface FileVideoAdSearchResponse {
  list?: {
  video_id?: string;
  video_cover_url?: string;
  format?: string;
  preview_url?: string;
  preview_url_expire_time?: string;
  duration?: number;
  height?: number;
  width?: number;
  bit_rate?: number;
  signature?: string;
  size?: number;
  material_id?: string;
  allowed_placements?: string[];
  allow_download?: boolean;
  file_name?: string;
  create_time?: string;
  modify_time?: string;
  displayable?: boolean;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface FileVideoSuggestcoverParams {
  advertiser_id: string;
  video_id: string;
  poster_number?: number;
}


export interface FileVideoSuggestcoverResponse {
  list?: {
  width?: number;
  height?: number;
  id?: string;
  url?: string;
}[];
}
