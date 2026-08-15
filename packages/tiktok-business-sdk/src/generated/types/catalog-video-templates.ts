// @generated
// fingerprint: sha256:12807f5e8afd8757649d9f65395433d1bf7f939c1b5fd3b2d8acb00797ced968
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for Catalog Video Templates — do not edit

export interface CatalogVideoPackageGetParams {
  bc_id: string;
  catalog_id: string;
  shopping_ads_video_package_id?: string;
}


export interface CatalogVideoPackageGetResponse {}


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
  shopping_ads_video_package_id?: string;
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
  iframe?: string;
}
