// @generated
// fingerprint: sha256:6f8caf4aaef4265a69ea322ee69fddd53889d3db9c7527125cf4fe6f4cd4d0a9
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for Catalog Feeds — do not edit

export interface CatalogFeedCreateParams {
  bc_id: string;
  catalog_id: string;
  feed_name: string;
  update_mode: "OVERWRITE" | "INCREMENTAL";
  schedule_param?: {
  source?: {
  uri?: string;
  username?: string;
  password?: string;
};
  interval_type?: "HOURLY" | "DAILY" | "MONTHLY";
  interval_count?: number;
  timezone?: string;
  day_of_month?: number;
  hour?: number;
  minute?: number;
};
}


export interface CatalogFeedCreateResponse {
  feed_id?: string;
  feed_name?: string;
  status?: "ON" | "OFF";
  last_update_param?: {
  uri?: string;
  update_mode?: "OVERWRITE" | "INCREMENTAL";
  timezone?: string;
  interval_type?: "HOURLY" | "DAILY" | "MONTHLY";
  interval_count?: number;
  day_of_month?: number;
  hour?: number;
  minute?: number;
};
  next_update_time?: string;
  number_of_products?: number;
}


export interface CatalogFeedGetParams {
  bc_id: string;
  catalog_id: string;
  feed_id?: string;
}


export interface CatalogFeedGetResponse {
  feed_list?: {
  feed_id?: string;
  feed_name?: string;
  status?: "ON" | "OFF";
  last_update_param?: {
  uri?: string;
  update_mode?: "OVERWRITE" | "INCREMENTAL";
  timezone?: string;
  interval_type?: "HOURLY" | "DAILY" | "MONTHLY";
  interval_count?: number;
  day_of_month?: number;
  hour?: number;
  minute?: number;
};
  next_update_time?: string;
  number_of_products?: number;
}[];
}


export interface CatalogFeedUpdateParams {
  bc_id: string;
  catalog_id: string;
  feed_id: string;
  update_mode: "OVERWRITE" | "INCREMENTAL" | "SUPPLEMENT";
  schedule_param?: {
  source?: {
  uri?: string;
  username?: string;
  password?: string;
};
  interval_type?: "HOURLY" | "DAILY" | "MONTHLY";
  interval_count?: number;
  timezone?: string;
  day_of_month?: number;
  hour?: number;
  minute?: number;
};
}


export interface CatalogFeedUpdateResponse {
  feed_id?: string;
  feed_name?: string;
  status?: "ON" | "OFF";
  last_update_param?: {
  uri?: string;
  update_mode?: "OVERWRITE" | "INCREMENTAL" | "SUPPLEMENT";
  timezone?: string;
  interval_type?: "HOURLY" | "DAILY" | "MONTHLY";
  interval_count?: number;
  day_of_month?: number;
  hour?: number;
  minute?: number;
};
  next_update_time?: string;
  number_of_products?: number;
}


export interface CatalogFeedDeleteParams {
  bc_id: string;
  catalog_id: string;
  feed_id: string;
}


export interface CatalogFeedDeleteResponse {
  feed_id?: number;
}


export interface CatalogFeedLogParams {
  bc_id: string;
  catalog_id: string;
  feed_id: string;
}


export interface CatalogFeedLogResponse {
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
}


export interface CatalogFeedSwitchParams {
  bc_id: string;
  catalog_id: string;
  feed_id: string;
  status: "ON" | "OFF";
}


export interface CatalogFeedSwitchResponse {}
