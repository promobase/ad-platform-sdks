// Auto-generated types for Catalog Videos — do not edit

export interface CatalogVideoFileParams {
  bc_id: string;
  catalog_id: string;
  file_url: string;
  advertiser_ids?: string[];
}


export interface CatalogVideoFileResponse {
  feed_log_id?: string;
}


export interface CatalogVideoLogParams {
  bc_id: string;
  catalog_id: string;
  feed_log_id: string;
  language?: string;
}


export interface CatalogVideoLogResponse {
  video_feed_log?: {
  catalog_id?: string;
  feed_id?: string;
  add_count?: number;
  update_count?: number;
  delete_count?: number;
  error_count?: number;
  warn_count?: number;
  process_status?: "PROCESSING" | "SUCCESS" | "FAILED" | "WAITING";
  start_time?: string;
  end_time?: string;
};
  feed_log_data?: {
  download_path?: Record<string, unknown>;
  error_affected_videos?: {
  affected_video_count?: number;
  affected_video_item_list?: {
  index?: number;
  video_name?: string;
  video_link?: string;
  sku_id_list?: string;
  description?: string;
  category?: string;
}[];
  field?: string;
  issue?: string;
  suggestion?: string;
}[];
  warn_affected_videos?: {
  affected_video_count?: number;
  affected_video_item_list?: {
  index?: number;
  video_name?: string;
  video_link?: string;
  sku_id_list?: string;
  description?: string;
  category?: string;
}[];
  field?: string;
  issue?: string;
  suggestion?: string;
}[];
};
}


export interface CatalogVideoGetParams {
  bc_id: string;
  catalog_id: string;
  catalog_video_ids?: string[];
  page?: number;
  page_size?: number;
}


export interface CatalogVideoGetResponse {
  videos?: {
  catalog_video_id?: string;
  video_name?: string;
  video_link?: string;
  sku_id_list?: string[];
  category?: string;
  brand?: string;
  creator?: string;
  video_type?: string;
  description?: string;
  landing_page_url?: string;
  custom_label_0?: string;
  custom_label_1?: string;
  custom_label_2?: string;
  custom_label_3?: string;
  custom_label_4?: string;
  video_id?: string;
  video_signature?: string;
  status?: "PENDING" | "SUCCESS" | "FAILED";
  create_time?: string;
  active_status?: "ACTIVATED" | "DEACTIVATED";
  preview_url?: string;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface CatalogVideoDeleteParams {
  bc_id: string;
  catalog_id: string;
  catalog_video_ids: string[];
}


export interface CatalogVideoDeleteResponse {}
