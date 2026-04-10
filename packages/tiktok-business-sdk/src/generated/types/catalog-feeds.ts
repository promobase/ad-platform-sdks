// Auto-generated types for Catalog Feeds — do not edit

export interface CatalogFeedGetParams {
  bc_id: string;
  catalog_id: string;
  feed_id?: string;
}


export interface CatalogFeedGetResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  feed_list?: {
  feed_id?: string;
  feed_name?: string;
  status?: "ON" | "OFF";
  last_update_param?: {
  uri?: string;
  update_mode?: "OVERWRITE" | "INCREMENTAL";
  timezone?: string;
  interval_type?: "HOURLY" | "DAILY" | "MONTHLY";
  interval_count?: "HOURLY" | "DAILY" | "MONTHLY";
  day_of_month?: number;
  hour?: number;
  minute?: number;
};
  next_update_time?: string;
  number_of_products?: number;
}[];
};
}


export interface CatalogFeedDeleteParams {
  bc_id: string;
  catalog_id: string;
  feed_id: string;
}


export interface CatalogFeedDeleteResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  feed_id?: number;
};
}


export interface CatalogFeedLogParams {
  bc_id: string;
  catalog_id: string;
  feed_id: string;
}


export interface CatalogFeedLogResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  feed_logs?: {
  update_status?: {
  add_count?: number;
  error_count?: number;
  remove_count?: number;
  process_status?: "PROCESSING" | "SUCCESS" | "FAILED" | "WAITING";
  update_count?: number;
  warn_count?: number;
};
  update_time?: {
  end_time?: string;
  start_time?: string;
};
}[];
};
}

