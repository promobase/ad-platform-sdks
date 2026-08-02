// Auto-generated types for Catalog Video Templates — do not edit

export interface CatalogVideoPackageGetParams {}


export interface CatalogVideoPackageGetResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: string;
  shopping_ads_video_package_id?: string;
  catalog_id?: string;
  video_package_name?: string;
  create_time?: string;
  update_time?: string;
  status?: "AVAILABLE" | "UNAVAILABLE";
  video_package_type?: "GREEN_SCREEN" | "TEMPLATE" | "DVG";
  audit?: {
  audit_status?: "PROCESSING" | "APPROVED" | "REJECTED";
  reject_info?: {
  rejected_object?: string;
  reason?: string;
}[];
};
}


export interface CatalogVideoPackageCreateParams {
  bc_id: string;
  catalog_id: string;
  video_package_type: string;
  videos?: {
  video_id?: string;
  is_green_screen_video?: boolean;
}[];
  music_id?: string;
  template_id?: string;
  video_package_name?: string;
}


export interface CatalogVideoPackageCreateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  shopping_ads_video_package_id?: string;
};
}


export interface CatalogVideoPackageUpdateParams {
  bc_id: string;
  catalog_id: string;
  shopping_ads_video_package_id: string;
  video_package_name: string;
}


export interface CatalogVideoPackageUpdateResponse {
  code?: number;
  message?: string;
  request_id?: string;
}


export interface CatalogVideoPackageDeleteParams {
  bc_id: string;
  catalog_id: string;
  shopping_ads_video_package_id: string;
}


export interface CatalogVideoPackageDeleteResponse {
  code?: number;
  message?: string;
  request_id?: string;
}


export interface CatalogTemplateUploadParams {
  bc_id: string;
  catalog_ids: string[];
  file: File | Blob;
}


export interface CatalogTemplateUploadResponse {
  code?: number;
  message?: string;
  template_id?: string;
  catalog_upload_success?: number[];
  request_id?: string;
}


export interface CatalogTemplatePreviewCreateParams {
  bc_id: string;
  catalog_ids: string[];
}


export interface CatalogTemplatePreviewCreateResponse {
  code?: number;
  message?: string;
  data?: {
  iframe?: string;
};
  request_id?: string;
}

