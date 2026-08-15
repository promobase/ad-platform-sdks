// @generated
// fingerprint: sha256:9ae0f387c1aa9c99ea0565e97ffce4a4193c32b21358e9903bfe50adbef37be2
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for Catalog Event Sources — do not edit

export interface CatalogEventsourceBindParams {
  advertiser_id: string;
  bc_id: string;
  catalog_id: string;
  app_id?: string;
  pixel_code?: string;
}


export interface CatalogEventsourceBindResponse {
  code?: number;
  message?: string;
}


export interface CatalogEventsourceUnbindParams {
  advertiser_id: string;
  bc_id: string;
  catalog_id: string;
  app_id?: string;
  pixel_code?: string;
}


export interface CatalogEventsourceUnbindResponse {
  code?: number;
  message?: string;
}


export interface CatalogEventsourceBindGetParams {
  bc_id: string;
  catalog_id: string;
}


export interface CatalogEventsourceBindGetResponse {
  catalog_id?: number;
  event_sources?: {
  event_source_name?: string;
  app_id?: string;
  pixel_code?: string;
}[];
}
