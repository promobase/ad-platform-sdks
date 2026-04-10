// Auto-generated types for Video — do not edit

export interface FileVideoAdUploadParams {
  advertiser_id: string;
  file_name?: string;
  upload_type?: string;
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
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
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
  flaw_types?: string[];
}[];
}


export interface FileVideoAdUpdateParams {
  advertiser_id: string;
  file_name: string;
  video_id: string;
}


export interface FileVideoAdUpdateResponse {
  code?: number;
  message?: string;
  data?: Record<string, unknown>;
  request_id?: string;
}


export interface FileVideoAdInfoParams {
  advertiser_id: string;
  video_ids: string[];
}


export interface FileVideoAdInfoResponse {
  code?: number;
  message?: string;
  data?: {
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
};
  request_id?: string;
}


export interface FileVideoAdSearchParams {
  advertiser_id: string;
  filtering?: {
  video_ids?: string[];
  material_ids?: string[];
  video_name?: string;
  video_material_sources?: string[];
};
  page?: number;
  page_size?: number;
}


export interface FileVideoAdSearchResponse {
  code?: number;
  message?: string;
  data?: {
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
};
  request_id?: string;
}


export interface FileVideoSuggestcoverParams {
  advertiser_id: string;
  video_id: string;
  poster_number?: number;
}


export interface FileVideoSuggestcoverResponse {
  code?: number;
  message?: string;
  data?: {
  list?: {
  width?: number;
  height?: number;
  id?: string;
  url?: string;
}[];
};
  request_id?: string;
}

