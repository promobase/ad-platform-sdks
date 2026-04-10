// Auto-generated types for Music — do not edit

export interface FileMusicUploadParams {
  advertiser_id: string;
  music_scene?: "CREATIVE_ASSET" | "CAROUSEL_ADS" | "CATALOG_CAROUSEL";
  upload_type?: "CAROUSEL_ADS" | "CATALOG_CAROUSEL" | "CREATIVE_ASSET" | "UPLOAD_BY_FILE" | "UPLOAD_BY_FILE_ID";
  material_action?: "CAROUSEL_ADS" | "CATALOG_CAROUSEL" | "CREATIVE_ASSET" | "ADD_TO_LIKED" | "ADD_TO_HISTORY" | "REMOVE_FROM_LIKED";
  music_file?: "UPLOAD_BY_FILE" | "CAROUSEL_ADS" | "CATALOG_CAROUSEL";
  music_signature?: string;
  file_name?: string;
  file_id?: "UPLOAD_BY_FILE_ID" | "CAROUSEL_ADS" | "CATALOG_CAROUSEL";
  material_id?: "CAROUSEL_ADS" | "CATALOG_CAROUSEL" | "CREATIVE_ASSET";
}


export interface FileMusicUploadResponse {
  code?: number;
  message?: string;
  data?: {
  music_id?: string;
  material_id?: string;
  sources?: ("USER" | "SYSTEM")[];
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
};
  request_id?: string;
}


export interface FileMusicGetParams {
  advertiser_id: string;
  music_scene?: "CREATIVE_ASSET" | "CAROUSEL_ADS" | "CATALOG_CAROUSEL";
  search_type?: "CAROUSEL_ADS" | "CATALOG_CAROUSEL" | "CREATIVE_ASSET" | "SEARCH_BY_KEYWORD" | "SEARCH_BY_RECOMMEND" | "SEARCH_BY_LIKED" | "SEARCH_BY_HISTORY" | "SEARCH_BY_MUSIC_ID" | "SEARCH_BY_SOURCE";
  filtering?: {
  keyword?: string;
  image_urls?: ("CAROUSEL_ADS" | "SEARCH_BY_RECOMMEND" | "true")[];
  music_ids?: string[];
  catalog_id?: "CATALOG_CAROUSEL" | "SEARCH_BY_RECOMMEND";
  catalog_authorized_bc_id?: "CATALOG_CAROUSEL" | "SEARCH_BY_RECOMMEND";
  item_group_ids?: ("CATALOG_CAROUSEL" | "SEARCH_BY_RECOMMEND")[];
  product_set_id?: "CATALOG_CAROUSEL" | "SEARCH_BY_RECOMMEND";
  sku_ids?: ("CATALOG_CAROUSEL" | "SEARCH_BY_RECOMMEND")[];
  carousel_image_index?: "CATALOG_CAROUSEL" | "SEARCH_BY_RECOMMEND";
  material_ids?: ("CAROUSEL_ADS" | "CATALOG_CAROUSEL")[];
  styles?: ("CAROUSEL_ADS" | "CATALOG_CAROUSEL")[];
  sources?: ("CREATIVE_ASSET" | "CAROUSEL_ADS" | "CATALOG_CAROUSEL" | "SEARCH_BY_SOURCE" | "USER" | "SYSTEM")[];
};
  page?: "SEARCH_BY_RECOMMEND" | "SEARCH_BY_LIKED" | "SEARCH_BY_MUSIC_ID";
  page_size?: "SEARCH_BY_RECOMMEND" | "SEARCH_BY_LIKED" | "SEARCH_BY_MUSIC_ID" | "SEARCH_BY_KEYWORD" | "SEARCH_BY_HISTORY";
}


export interface FileMusicGetResponse {
  code?: number;
  message?: string;
  data?: {
  musics?: string[];
  music_id?: string;
  material_id?: string;
  sources?: ("USER" | "SYSTEM")[];
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
};
  request_id?: string;
}

