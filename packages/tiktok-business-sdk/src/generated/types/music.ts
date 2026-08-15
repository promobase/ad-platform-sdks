// @generated
// fingerprint: sha256:1141be76ab5b9924ce1583bc40640cc71a8071dc07c8670bae8fb698cc464d7c
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for Music — do not edit

export interface FileMusicUploadParams {
  advertiser_id: string;
  music_scene?: "CREATIVE_ASSET" | "CAROUSEL_ADS" | "CATALOG_CAROUSEL";
  upload_type?: "UPLOAD_BY_FILE" | "UPLOAD_BY_FILE_ID";
  material_action?: "ADD_TO_LIKED" | "ADD_TO_HISTORY" | "REMOVE_FROM_LIKED";
  music_file?: File | Blob;
  music_signature?: string;
  file_name?: string;
  file_id?: string;
  material_id?: string;
}


export interface FileMusicUploadResponse {
  music_id?: string;
  material_id?: string;
  sources?: string[];
  author?: string;
  liked?: boolean;
  cover_url?: string;
  url?: string;
  duration?: number;
  style?: string;
  signature?: string;
  file_name?: string;
  copyright?: "MUSIC_FORBID_VIDEO_ALLOW" | "MUSIC_FORBID_VIDEO_FORBID";
  create_time?: string;
  modify_time?: string;
}


export interface FileMusicGetParams {
  advertiser_id: string;
  music_scene?: "CREATIVE_ASSET" | "CAROUSEL_ADS" | "CATALOG_CAROUSEL";
  search_type?: "SEARCH_BY_KEYWORD" | "SEARCH_BY_RECOMMEND";
  filtering?: {
  keyword?: string;
  image_urls?: string[];
  music_ids?: string[];
  catalog_id?: string;
  catalog_authorized_bc_id?: string;
  item_group_ids?: string[];
  product_set_id?: string;
  sku_ids?: string[];
  carousel_image_index?: number;
  material_ids?: string[];
  styles?: string[];
  sources?: string[];
};
  page?: number;
  page_size?: number;
}


export interface FileMusicGetResponse {
  musics?: string[];
  music_id?: string;
  material_id?: string;
  sources?: string[];
  author?: string;
  liked?: boolean;
  cover_url?: string;
  url?: string;
  duration?: number;
  style?: string;
  signature?: string;
  name?: string;
  file_name?: string;
  copyright?: "MUSIC_FORBID_VIDEO_ALLOW" | "MUSIC_FORBID_VIDEO_FORBID";
  create_time?: string;
  modify_time?: string;
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}
