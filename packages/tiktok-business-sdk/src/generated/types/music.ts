// Auto-generated types for Music — do not edit

export interface FileMusicUploadParams {
  advertiser_id: string;
  music_scene?: string;
  upload_type?: string;
  material_action?: string;
  music_file?: File | Blob;
  music_signature?: string;
  file_name?: string;
  file_id?: string;
  material_id?: string;
}


export interface FileMusicUploadResponse {
  code?: number;
  message?: string;
  data?: {
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
  copyright?: string;
  create_time?: string;
  modify_time?: string;
};
  request_id?: string;
}


export interface FileMusicGetParams {
  advertiser_id: string;
  music_scene?: string;
  search_type?: string;
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
  code?: number;
  message?: string;
  data?: {
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
  copyright?: string;
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

